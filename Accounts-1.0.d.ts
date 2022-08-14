
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Accounts-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * These identify the various errors that can occur with methods in
 * libaccounts-glib that return a #GError.
 */
export enum AccountsError {
    /**
     * there was an error accessing the accounts database
     */
    DB,
    /**
     * the account was in the process of being
     * disposed
     */
    DISPOSED,
    /**
     * the account was in the process of being deleted
     */
    DELETED,
    /**
     * the database was locked
     */
    DB_LOCKED,
    /**
     * the requested account was not found
     */
    ACCOUNT_NOT_FOUND,
    /**
     * an asynchronous store operation is
     * already in progress. Since 1.4
     */
    STORE_IN_PROGRESS,
    /**
     * the accounts DB is in read-only mode. Since 1.4
     */
    READONLY,
}
export enum Error {
    DB,
    DISPOSED,
    DELETED,
    DB_LOCKED,
    ACCOUNT_NOT_FOUND,
}
/**
 * The source of a setting on a #AgAccount.
 */
export enum SettingSource {
    /**
     * the setting is not present
     */
    NONE,
    /**
     * the setting comes from the current account
     * configuration
     */
    ACCOUNT,
    /**
     * the setting comes from the predefined profile
     */
    PROFILE,
}
export const MANAGER_INTERFACE: string
export const MANAGER_OBJECT_PATH: string
export const MANAGER_SERVICE_NAME: string
export function accountsErrorQuark(): GLib.Quark
export function errorsQuark(): GLib.Quark
/**
 * Frees the list `list`.
 * @param list a #GList of providers returned by some function of this library.
 */
export function providerListFree(list: Provider[]): void
/**
 * Frees the list `list`.
 * @param list a #GList of services returned by some function of this library.
 */
export function serviceListFree(list: Service[]): void
/**
 * Frees the list `list`.
 * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
 */
export function serviceTypeListFree(list: ServiceType[]): void
/**
 * This callback is invoked when the value of an account configuration setting
 * changes. If the callback was installed with ag_account_watch_key() then `key`
 * is the name of the configuration setting which changed; if it was installed
 * with ag_account_watch_dir() then `key` is the same key prefix that was used
 * when installing this callback.
 * @callback 
 * @param account the #AgAccount.
 * @param key the name of the key whose value has changed.
 */
export interface AccountNotifyCb {
    (account: Account, key: string): void
}
/**
 * This callback is invoked when storing the account settings is completed. If
 * `error` is not %NULL, then some error occurred and the data has most likely
 * not been written.
 * @callback 
 * @param account the #AgAccount.
 * @param error a #GError, or %NULL.
 */
export interface AccountStoreCb {
    (account: Account, error: GLib.Error): void
}
export module Account {

    // Signal callback interfaces

    /**
     * Signal callback interface for `deleted`
     */
    export interface DeletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `display-name-changed`
     */
    export interface DisplayNameChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    export interface EnabledSignalCallback {
        (service: string, enabled: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Accounts-1.0.Accounts.Account

        foreign?: boolean | null
        /**
         * The AgAccountId for the account.
         */
        id?: number | null
        /**
         * The #AgManager from which the account was instantiated.
         */
        manager?: Manager | null
        /**
         * The ID of the provider for the account.
         */
        provider?: string | null
    }

}

export interface Account extends Gio.Initable {

    // Own properties of Accounts-1.0.Accounts.Account

    /**
     * The display name of the account.
     */
    readonly displayName: string
    /**
     * Whether the account is currently enabled.
     */
    readonly enabled: boolean
    readonly foreign: boolean
    /**
     * The #AgManager from which the account was instantiated.
     */
    readonly manager: Manager
    /**
     * The ID of the provider for the account.
     */
    readonly provider: string

    // Own fields of Accounts-1.0.Accounts.Account

    parentInstance: GObject.Object
    id: AccountId

    // Owm methods of Accounts-1.0.Accounts.Account

    /**
     * Deletes the account. Call ag_account_store() in order to record the change
     * in the storage.
     */
    delete(): void
    /**
     * Get the display name of `account`.
     */
    getDisplayName(): string
    /**
     * Gets whether the selected service is enabled for `account`.
     */
    getEnabled(): boolean
    /**
     * Get the #AgManager for `account`.
     */
    getManager(): Manager
    /**
     * Get the name of the provider of `account`.
     */
    getProviderName(): string
    /**
     * Gets the selected #AgService for `account`.
     */
    getSelectedService(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    getSettingsIter(keyPrefix: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     * @param key the name of the setting to retrieve.
     * @param value an initialized #GValue to receive the setting's value.
     */
    getValue(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     * @param key the name of the setting to retrieve.
     */
    getVariant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource ]
    /**
     * Gets a list of services that are enabled for `account`.
     */
    listEnabledServices(): Service[]
    /**
     * Get the list of services for `account`. If the #AgManager was created with
     * specified service_type this will return only services with this service_type.
     */
    listServices(): Service[]
    /**
     * Get the list of services supported by `account,` filtered by `service_type`.
     * @param serviceType the service type which all the returned services should provide.
     */
    listServicesByType(serviceType: string): Service[]
    /**
     * Removes the notification callback identified by `watch`.
     * @param watch the watch to remove.
     */
    removeWatch(watch: AccountWatch): void
    /**
     * Selects the configuration of service `service:` from now on, all the
     * subsequent calls on the #AgAccount configuration will act on the `service`.
     * If `service` is %NULL, the global account configuration is selected.
     * 
     * Note that if `account` is being shared with other code one must take special
     * care to make sure the desired service is always selected.
     * @param service the #AgService to select.
     */
    selectService(service: Service | null): void
    /**
     * Changes the display name for `account` to `display_name`.
     * @param displayName the display name to set.
     */
    setDisplayName(displayName: string): void
    /**
     * Sets the "enabled" flag on the selected service for `account`.
     * @param enabled whether `account` should be enabled.
     */
    setEnabled(enabled: boolean): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GValue holding the new setting's value.
     */
    setValue(key: string, value: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GVariant holding the new setting's value.
     */
    setVariant(key: string, value: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * @param iter an uninitialized #AgAccountSettingIter structure.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    settingsIterInit(iter: AccountSettingIter, keyPrefix: string | null): void
    /**
     * Creates signature of the `key` with given `token`. The account must be
     * stored prior to calling this function.
     * @param key the name of the key or prefix of the keys to be signed.
     * @param token a signing token (%NULL-terminated string) for creating the signature. The application must possess (request) the token.
     */
    sign(key: string, token: string): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param callback function to be called when the settings have been written.
     */
    store(callback: AccountStoreCb): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     * @param cancellable optional #GCancellable object, %NULL to ignore.
     * @param callback function to be called when the settings have been written.
     */
    storeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Commit the changed account settings to the account database, and invoke
     * `callback` when the operation has been completed.
     */
    storeBlocking(): boolean
    /**
     * Finishes the store operation started by ag_account_store_async().
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to ag_account_store_async().
     */
    storeFinish(res: Gio.AsyncResult): boolean
    /**
     * Get whether `service_type` is supported on `account`.
     * @param serviceType the name of the service type to check for
     */
    supportsService(serviceType: string): boolean
    /**
     * Verify if the key is signed and the signature matches the value
     * and provides the aegis token which was used for signing the `key`.
     * @param key the name of the key or prefix of the keys to be verified.
     * @param token location to receive the pointer to aegis token.
     */
    verify(key: string, token: string): boolean
    /**
     * Verify if the `key` is signed with any of the tokens from the `tokens`
     * and the signature is valid.
     * @param key the name of the key or prefix of the keys to be verified.
     * @param tokens array of aegis tokens.
     */
    verifyWithTokens(key: string, tokens: string): boolean
    /**
     * Installs a watch on all the keys under `key_prefix:` `callback` will be
     * invoked whenever the value of any of these keys changes (or a key is
     * removed).
     * @param keyPrefix the prefix of the keys to watch.
     * @param callback a #AgAccountNotifyCb callback to be called.
     */
    watchDir(keyPrefix: string, callback: AccountNotifyCb): AccountWatch
    /**
     * Installs a watch on `key:` `callback` will be invoked whenever the value of
     * `key` changes (or the key is removed).
     * @param key the name of the key to watch.
     * @param callback a #AgAccountNotifyCb callback to be called.
     */
    watchKey(key: string, callback: AccountNotifyCb): AccountWatch

    // Own signals of Accounts-1.0.Accounts.Account

    connect(sigName: "deleted", callback: Account.DeletedSignalCallback): number
    on(sigName: "deleted", callback: Account.DeletedSignalCallback): number
    once(sigName: "deleted", callback: Account.DeletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "deleted", ...args: any[]): void
    connect(sigName: "display-name-changed", callback: Account.DisplayNameChangedSignalCallback): number
    on(sigName: "display-name-changed", callback: Account.DisplayNameChangedSignalCallback): number
    once(sigName: "display-name-changed", callback: Account.DisplayNameChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "display-name-changed", ...args: any[]): void
    connect(sigName: "enabled", callback: Account.EnabledSignalCallback): number
    on(sigName: "enabled", callback: Account.EnabledSignalCallback): number
    once(sigName: "enabled", callback: Account.EnabledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "enabled", enabled: boolean, ...args: any[]): void

    // Class property signals of Accounts-1.0.Accounts.Account

    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::foreign", callback: any): number
    on(sigName: "notify::foreign", callback: any): number
    once(sigName: "notify::foreign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::foreign", ...args: any[]): void
    connect(sigName: "notify::manager", callback: any): number
    on(sigName: "notify::manager", callback: any): number
    once(sigName: "notify::manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::provider", callback: any): number
    on(sigName: "notify::provider", callback: any): number
    once(sigName: "notify::provider", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @class 
 */
export class Account extends GObject.Object {

    // Own properties of Accounts-1.0.Accounts.Account

    static name: string

    // Constructors of Accounts-1.0.Accounts.Account

    constructor(config?: Account.ConstructorProperties) 
    _init(config?: Account.ConstructorProperties): void
}

export module AccountService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `enabled`
     */
    export interface EnabledSignalCallback {
        (enabled: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Accounts-1.0.Accounts.AccountService

        /**
         * The #AgAccount used by the account service.
         */
        account?: Account | null
        /**
         * The #AgService used by the account service.
         */
        service?: Service | null
    }

}

export interface AccountService {

    // Own properties of Accounts-1.0.Accounts.AccountService

    /**
     * The #AgAccount used by the account service.
     */
    readonly account: Account
    /**
     * Whether the account service is currently enabled. The value of
     * this property is %TRUE if and only if the underlying #AgAccount
     * is enabled and the selected #AgService is enabled on it. If this
     * property is %FALSE, applications should not try to use this
     * object.
     */
    readonly enabled: boolean
    /**
     * The #AgService used by the account service.
     */
    readonly service: Service

    // Own fields of Accounts-1.0.Accounts.AccountService

    parentInstance: GObject.Object
    priv: AccountServicePrivate

    // Owm methods of Accounts-1.0.Accounts.AccountService

    /**
     * Get the #AgAccount associated with `self`.
     */
    getAccount(): Account
    /**
     * Reads the authentication data stored in the account (merging the
     * service-specific settings with the global account settings) and returns an
     * #AgAuthData structure.
     * The method and mechanism are read from the "auth/method" and
     * "auth/mechanism" keys, respectively. The authentication parameters are
     * found under the "auth/&lt;method&gt;/&lt;mechanism&gt;/" group.
     */
    getAuthData(): AuthData
    /**
     * This method should be called only in the context of a handler of the
     * #AgAccountService::changed signal, and can be used to retrieve the set of
     * changes.
     */
    getChangedFields(): string[]
    /**
     * Checks whether the underlying #AgAccount is enabled and the selected
     * #AgService is enabled on it. If this method returns %FALSE, applications
     * should not try to use this object.
     */
    getEnabled(): boolean
    /**
     * Get the #AgService associated with `self`.
     */
    getService(): Service
    /**
     * Creates a new iterator. This method is useful for language bindings only.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    getSettingsIter(keyPrefix: string | null): AccountSettingIter
    /**
     * Gets the value of the configuration setting `key:` `value` must be a
     * #GValue initialized to the type of the setting.
     * @param key the name of the setting to retrieve.
     * @param value an initialized #GValue to receive the setting's value.
     */
    getValue(key: string, value: any): [ /* returnType */ SettingSource, /* value */ any ]
    /**
     * Gets the value of the configuration setting `key`.
     * @param key the name of the setting to retrieve.
     */
    getVariant(key: string): [ /* returnType */ GLib.Variant, /* source */ SettingSource ]
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GValue holding the new setting's value.
     */
    setValue(key: string, value: any | null): void
    /**
     * Sets the value of the configuration setting `key` to the value `value`.
     * If `value` has a floating reference, the `account` will take ownership
     * of it.
     * If `value` is %NULL, then the setting is unset.
     * @param key the name of the setting to change.
     * @param value a #GVariant holding the new setting's value.
     */
    setVariant(key: string, value: GLib.Variant | null): void
    /**
     * Initializes `iter` to iterate over the account settings. If `key_prefix` is
     * not %NULL, only keys whose names start with `key_prefix` will be iterated
     * over.
     * After calling this method, one would typically call
     * ag_account_settings_iter_get_next() to read the settings one by one.
     * @param iter an uninitialized #AgAccountSettingIter structure.
     * @param keyPrefix enumerate only the settings whose key starts with `key_prefix`.
     */
    settingsIterInit(iter: AccountSettingIter, keyPrefix: string | null): void

    // Own signals of Accounts-1.0.Accounts.AccountService

    connect(sigName: "changed", callback: AccountService.ChangedSignalCallback): number
    on(sigName: "changed", callback: AccountService.ChangedSignalCallback): number
    once(sigName: "changed", callback: AccountService.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "enabled", callback: AccountService.EnabledSignalCallback): number
    on(sigName: "enabled", callback: AccountService.EnabledSignalCallback): number
    once(sigName: "enabled", callback: AccountService.EnabledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "enabled", ...args: any[]): void

    // Class property signals of Accounts-1.0.Accounts.AccountService

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @class 
 */
export class AccountService extends GObject.Object {

    // Own properties of Accounts-1.0.Accounts.AccountService

    static name: string

    // Constructors of Accounts-1.0.Accounts.AccountService

    constructor(config?: AccountService.ConstructorProperties) 
    /**
     * Constructor. If `service` is %NULL, the returned object will operate on the
     * global account settings.
     * @constructor 
     * @param account an #AgAccount.
     * @param service an #AgService supported by `account`.
     */
    constructor(account: Account, service: Service | null) 
    /**
     * Constructor. If `service` is %NULL, the returned object will operate on the
     * global account settings.
     * @constructor 
     * @param account an #AgAccount.
     * @param service an #AgService supported by `account`.
     */
    static new(account: Account, service: Service | null): AccountService
    _init(config?: AccountService.ConstructorProperties): void
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_service_settings_iter_init().
     * @param iter an initialized #AgAccountSettingIter structure.
     */
    static settingsIterNext(iter: AccountSettingIter): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
}

export module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `account-created`
     */
    export interface AccountCreatedSignalCallback {
        (accountId: number): void
    }

    /**
     * Signal callback interface for `account-deleted`
     */
    export interface AccountDeletedSignalCallback {
        (accountId: number): void
    }

    /**
     * Signal callback interface for `account-updated`
     */
    export interface AccountUpdatedSignalCallback {
        (accountId: number): void
    }

    /**
     * Signal callback interface for `enabled-event`
     */
    export interface EnabledEventSignalCallback {
        (accountId: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Accounts-1.0.Accounts.Manager

        /**
         * Whether to abort the application when a database timeout occurs.
         */
        abortOnDbTimeout?: boolean | null
        /**
         * Timeout for database operations, in milliseconds.
         */
        dbTimeout?: number | null
        /**
         * If the service type is set, certain operations on the #AgManager, such
         * as ag_manager_list() and ag_manager_list_services(), will be restricted
         * to only affect accounts or services with that service type.
         */
        serviceType?: string | null
        /**
         * Whether to use D-Bus for inter-process change notification. Setting this
         * property to %FALSE causes libaccounts not to emit the change
         * notification signals, and also not react to changes made by other
         * processes. Disabling D-Bus is only meant to be used for specific cases,
         * such as maintenance programs.
         */
        useDbus?: boolean | null
    }

}

export interface Manager extends Gio.Initable {

    // Own properties of Accounts-1.0.Accounts.Manager

    /**
     * Whether to abort the application when a database timeout occurs.
     */
    abortOnDbTimeout: boolean
    /**
     * Timeout for database operations, in milliseconds.
     */
    dbTimeout: number
    /**
     * If the service type is set, certain operations on the #AgManager, such
     * as ag_manager_list() and ag_manager_list_services(), will be restricted
     * to only affect accounts or services with that service type.
     */
    readonly serviceType: string
    /**
     * Whether to use D-Bus for inter-process change notification. Setting this
     * property to %FALSE causes libaccounts not to emit the change
     * notification signals, and also not react to changes made by other
     * processes. Disabling D-Bus is only meant to be used for specific cases,
     * such as maintenance programs.
     */
    readonly useDbus: boolean

    // Own fields of Accounts-1.0.Accounts.Manager

    parentInstance: GObject.Object

    // Owm methods of Accounts-1.0.Accounts.Manager

    /**
     * Create a new account. The account is not stored in the database until
     * ag_account_store() has successfully returned; the `id` field in the
     * #AgAccount structure is also not meant to be valid until the account has
     * been stored.
     * @param providerName name of the provider of the account.
     */
    createAccount(providerName: string): Account
    /**
     * Get whether the library will abort when a timeout error occurs.
     */
    getAbortOnDbTimeout(): boolean
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     * @param accountId the #AgAccountId of the account.
     */
    getAccount(accountId: AccountId): Account
    /**
     * Gets all the account services. If the `manager` was created for a
     * specific service type, only services with that type will be returned.
     * <note>
     *   <para>
     *   This method causes the loading of all the service settings for all the
     *   returned accounts (unless they have been loaded previously). If you are
     *   interested in a specific account/service, consider using
     *   ag_manager_load_account() to first load the the account, and then create
     *   the AgAccountService for that account only.
     *   </para>
     * </note>
     */
    getAccountServices(): AccountService[]
    /**
     * Search for `application_name` in the list of applications, and return a new
     * #AgApplication if a matching application was found.
     * @param applicationName the name of an application to search for
     */
    getApplication(applicationName: string): Application
    /**
     * Get the timeout of database operations for `manager,` in milliseconds.
     */
    getDbTimeout(): number
    /**
     * Gets all the enabled account services. If the `manager` was created for a
     * specific service type, only services with that type will be returned.
     * <note>
     *   <para>
     *   This method causes the loading of all the service settings for all the
     *   returned accounts (unless they have been loaded previously). If you are
     *   interested in a specific account/service, consider using
     *   ag_manager_load_account() to first load the the account, and then create
     *   the AgAccountService for that account only.
     *   </para>
     * </note>
     */
    getEnabledAccountServices(): AccountService[]
    /**
     * Loads the provider identified by `provider_name`.
     * @param providerName the name of the provider.
     */
    getProvider(providerName: string): Provider
    /**
     * Loads the service identified by `service_name`.
     * @param serviceName the name of the service.
     */
    getService(serviceName: string): Service
    /**
     * Get the service type for `manager`.
     */
    getServiceType(): string
    /**
     * Lists the accounts. If the #AgManager is created with a specified
     * #AgManager:service-type, it will return only the accounts supporting this
     * service type.
     */
    list(): AccountId[]
    /**
     * Lists the registered applications which support the given service.
     * @param service the #AgService for which we want to get the applications list.
     */
    listApplicationsByService(service: Service): Application[]
    /**
     * Lists the accounts supporting the given service type.
     * @param serviceType the name of the service type to check for.
     */
    listByServiceType(serviceType: string): AccountId[]
    /**
     * Lists the enabled accounts.
     */
    listEnabled(): AccountId[]
    /**
     * Lists the enabled accounts supporting the given service type.
     * @param serviceType the name of the service type to check for.
     */
    listEnabledByServiceType(serviceType: string): AccountId[]
    /**
     * Gets a list of all the installed providers.
     */
    listProviders(): Provider[]
    /**
     * Gets a list of all the installed service types.
     */
    listServiceTypes(): ServiceType[]
    /**
     * Gets a list of all the installed services.
     * If the #AgManager was created with a specified #AgManager:service_type
     * it will return only the installed services supporting that service type.
     */
    listServices(): Service[]
    /**
     * Gets a list of all the installed services where the service type name is
     * `service_type`.
     * @param serviceType the type of the service.
     */
    listServicesByType(serviceType: string): Service[]
    /**
     * Instantiates the object representing the account identified by
     * `account_id`.
     * @param accountId the #AgAccountId of the account.
     */
    loadAccount(accountId: AccountId): Account
    /**
     * Instantiate the service type with the name `service_type`.
     * @param serviceType the name of the service type.
     */
    loadServiceType(serviceType: string): ServiceType
    /**
     * Tells libaccounts whether it should make the client application abort when
     * a timeout error occurs. The default is %FALSE.
     * @param abort whether to abort when a DB timeout occurs.
     */
    setAbortOnDbTimeout(abort: boolean): void
    /**
     * Sets the timeout for database operations. This tells the library how long
     * it is allowed to block while waiting for a locked DB to become accessible.
     * Higher values mean a higher chance of successful reads, but also mean that
     * the execution might be blocked for a longer time.
     * The default is 5 seconds.
     * @param timeoutMs the new timeout, in milliseconds.
     */
    setDbTimeout(timeoutMs: number): void

    // Own virtual methods of Accounts-1.0.Accounts.Manager

    accountDeleted(id: AccountId): void

    // Own signals of Accounts-1.0.Accounts.Manager

    connect(sigName: "account-created", callback: Manager.AccountCreatedSignalCallback): number
    on(sigName: "account-created", callback: Manager.AccountCreatedSignalCallback): number
    once(sigName: "account-created", callback: Manager.AccountCreatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-created", ...args: any[]): void
    connect(sigName: "account-deleted", callback: Manager.AccountDeletedSignalCallback): number
    on(sigName: "account-deleted", callback: Manager.AccountDeletedSignalCallback): number
    once(sigName: "account-deleted", callback: Manager.AccountDeletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-deleted", ...args: any[]): void
    connect(sigName: "account-updated", callback: Manager.AccountUpdatedSignalCallback): number
    on(sigName: "account-updated", callback: Manager.AccountUpdatedSignalCallback): number
    once(sigName: "account-updated", callback: Manager.AccountUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-updated", ...args: any[]): void
    connect(sigName: "enabled-event", callback: Manager.EnabledEventSignalCallback): number
    on(sigName: "enabled-event", callback: Manager.EnabledEventSignalCallback): number
    once(sigName: "enabled-event", callback: Manager.EnabledEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "enabled-event", ...args: any[]): void

    // Class property signals of Accounts-1.0.Accounts.Manager

    connect(sigName: "notify::abort-on-db-timeout", callback: any): number
    on(sigName: "notify::abort-on-db-timeout", callback: any): number
    once(sigName: "notify::abort-on-db-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::abort-on-db-timeout", ...args: any[]): void
    connect(sigName: "notify::db-timeout", callback: any): number
    on(sigName: "notify::db-timeout", callback: any): number
    once(sigName: "notify::db-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::db-timeout", ...args: any[]): void
    connect(sigName: "notify::service-type", callback: any): number
    on(sigName: "notify::service-type", callback: any): number
    once(sigName: "notify::service-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-type", ...args: any[]): void
    connect(sigName: "notify::use-dbus", callback: any): number
    on(sigName: "notify::use-dbus", callback: any): number
    once(sigName: "notify::use-dbus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-dbus", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @class 
 */
export class Manager extends GObject.Object {

    // Own properties of Accounts-1.0.Accounts.Manager

    static name: string

    // Constructors of Accounts-1.0.Accounts.Manager

    constructor(config?: Manager.ConstructorProperties) 
    /**
     * Create a new #AgManager.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #AgManager.
     * @constructor 
     */
    static new(): Manager
    /**
     * Create a new #AgManager with the service type with the name `service_type`.
     * @constructor 
     * @param serviceType the name of a service type
     */
    static newForServiceType(serviceType: string): Manager
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Frees the memory taken by a #GList of #AgAccountId allocated by #AgManager,
     * such as by ag_manager_list(), ag_manager_list_enabled() or
     * ag_manager_list_enabled_by_service_type().
     * @param list a #GList returned from a #AgManager method which returns account IDs.
     */
    static listFree(list: AccountId[]): void
}

export interface AccountClass {

    // Own fields of Accounts-1.0.Accounts.AccountClass

    parentClass: GObject.ObjectClass
}

/**
 * Use the accessor functions below.
 * @record 
 */
export abstract class AccountClass {

    // Own properties of Accounts-1.0.Accounts.AccountClass

    static name: string
}

export interface AccountPrivate {
}

export class AccountPrivate {

    // Own properties of Accounts-1.0.Accounts.AccountPrivate

    static name: string
}

export interface AccountServiceClass {

    // Own fields of Accounts-1.0.Accounts.AccountServiceClass

    parentClass: GObject.ObjectClass
}

/**
 * Use the accessor functions below.
 * @record 
 */
export abstract class AccountServiceClass {

    // Own properties of Accounts-1.0.Accounts.AccountServiceClass

    static name: string
}

export interface AccountServicePrivate {
}

export class AccountServicePrivate {

    // Own properties of Accounts-1.0.Accounts.AccountServicePrivate

    static name: string
}

export interface AccountSettingIter {

    // Own fields of Accounts-1.0.Accounts.AccountSettingIter

    /**
     * the AgAccount to iterate over
     * @field 
     */
    account: Account

    // Owm methods of Accounts-1.0.Accounts.AccountSettingIter

    /**
     * Frees the memory associated with an #AgAccountSettingIter.
     */
    free(): void
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     */
    getNext(): [ /* returnType */ boolean, /* key */ string, /* value */ GLib.Variant ]
    /**
     * Iterates over the account keys. `iter` must be an iterator previously
     * initialized with ag_account_settings_iter_init().
     */
    next(): [ /* returnType */ boolean, /* key */ string, /* value */ any ]
}

/**
 * Iterator for account settings.
 * @record 
 */
export class AccountSettingIter {

    // Own properties of Accounts-1.0.Accounts.AccountSettingIter

    static name: string
}

export interface AccountWatch {
}

/**
 * An opaque struct returned from ag_account_watch_dir() and
 * ag_account_watch_key().
 * @record 
 */
export class AccountWatch {

    // Own properties of Accounts-1.0.Accounts.AccountWatch

    static name: string
}

export interface Application {

    // Owm methods of Accounts-1.0.Accounts.Application

    /**
     * Get the description of the #AgApplication.
     */
    getDescription(): string
    /**
     * Get the #GDesktopAppInfo of the application.
     */
    getDesktopAppInfo(): Gio.DesktopAppInfo
    /**
     * Get the translation domain of the #AgApplication.
     */
    getI18nDomain(): string
    /**
     * Get the name of the #AgApplication.
     */
    getName(): string
    /**
     * Get the description from the application XML file, for the specified
     * service; if not found, get the service-type description instead.
     * @param service an #AgService.
     */
    getServiceUsage(service: Service): string
    /**
     * Increment the reference count of `self`.
     */
    ref(): Application
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
export class Application {

    // Own properties of Accounts-1.0.Accounts.Application

    static name: string
}

export interface AuthData {

    // Owm methods of Accounts-1.0.Accounts.AuthData

    /**
     * Gets the ID of the credentials associated with this account.
     */
    getCredentialsId(): number
    /**
     * Gets the authentication parameters.
     * @param extraParameters a #GVariant containing client-specific authentication parameters to be added to the returned dictionary.
     */
    getLoginParameters(extraParameters: GLib.Variant | null): GLib.Variant
    /**
     * Gets the authentication mechanism.
     */
    getMechanism(): string
    /**
     * Gets the authentication method.
     */
    getMethod(): string
    /**
     * Gets the authentication parameters.
     */
    getParameters(): GLib.HashTable
    /**
     * Insert the given authentication parameters into the authentication data. If
     * some parameters were already present, the parameters passed with this method
     * take precedence.
     * @param parameters a #GHashTable containing the authentication parameters to be added.
     */
    insertParameters(parameters: GLib.HashTable): void
    /**
     * Increment the reference count of `self`.
     */
    ref(): AuthData
    /**
     * Decrements the reference count of `self`. The item is destroyed when the
     * count gets to 0.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
export class AuthData {

    // Own properties of Accounts-1.0.Accounts.AuthData

    static name: string
}

export interface ManagerClass {

    // Own fields of Accounts-1.0.Accounts.ManagerClass

    parentClass: GObject.ObjectClass
    accountDeleted: (manager: Manager, id: AccountId) => void
}

/**
 * Use the accessor functions below.
 * @record 
 */
export abstract class ManagerClass {

    // Own properties of Accounts-1.0.Accounts.ManagerClass

    static name: string
}

export interface ManagerPrivate {
}

export class ManagerPrivate {

    // Own properties of Accounts-1.0.Accounts.ManagerPrivate

    static name: string
}

export interface Provider {

    // Owm methods of Accounts-1.0.Accounts.Provider

    /**
     * Get the description of the #AgProvider.
     */
    getDescription(): string
    /**
     * Get the display name of the #AgProvider.
     */
    getDisplayName(): string
    /**
     * Get a regular expression matching all domains where this provider's accounts
     * can be used.
     */
    getDomainsRegex(): string
    /**
     * Gets the contents of the XML provider file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `provider` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     */
    getFileContents(contents: string): void
    /**
     * Get the translation domain of the #AgProvider.
     */
    getI18nDomain(): string
    /**
     * Get the icon name of the #AgProvider.
     */
    getIconName(): string
    /**
     * Get the name of the #AgProvider.
     */
    getName(): string
    /**
     * Get the name of the account plugin which manages all accounts created from
     * this #AgProvider.
     * Some platforms might find it useful to store plugin names in the provider
     * XML files, especially when the same plugin can work for different providers.
     */
    getPluginName(): string
    /**
     * Tell whether the provider doesn't support creating more than one account.
     * Note that libaccounts itself does not enforce preventing the creation of
     * multiple accounts when this flag is set: the flag is only informative, and
     * its implementation is left to the client.
     */
    getSingleAccount(): boolean
    /**
     * Check whether `domain` is supported by this provider, by matching it with the
     * regex returned by ag_provider_get_domains_regex().
     * If the provider does not define a regular expression to match the supported
     * domains, this function will return %FALSE.
     * @param domain a domain name.
     */
    matchDomain(domain: string): boolean
    /**
     * Adds a reference to `provider`.
     */
    ref(): Provider
    /**
     * Used to unreference the #AgProvider structure.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
export class Provider {

    // Own properties of Accounts-1.0.Accounts.Provider

    static name: string

    // Constructors of Accounts-1.0.Accounts.Provider

    /**
     * Frees the list `list`.
     * @param list a #GList of providers returned by some function of this library.
     */
    static listFree(list: Provider[]): void
}

export interface Service {

    // Owm methods of Accounts-1.0.Accounts.Service

    /**
     * Gets the description of the #AgService.
     */
    getDescription(): string
    /**
     * Gets the display name of the #AgService.
     */
    getDisplayName(): string
    /**
     * Gets the contents of the XML service file.  The buffer returned in `contents`
     * should not be modified or freed, and is guaranteed to be valid as long as
     * `service` is referenced. If `data_offset` is not %NULL, it is set to the
     * offset where the &lt;type_data&gt; element can be found.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     * @param dataOffset pointer to receive the offset of the type data.
     */
    getFileContents(contents: string, dataOffset: number): void
    /**
     * Gets the translation domain of the #AgService.
     */
    getI18nDomain(): string
    /**
     * Gets the icon name of the #AgService.
     */
    getIconName(): string
    /**
     * Gets the name of the #AgService.
     */
    getName(): string
    /**
     * Gets the provider name of the #AgService.
     */
    getProvider(): string
    /**
     * Gets the service type of the #AgService.
     */
    getServiceType(): string
    /**
     * Get list of tags specified for the #AgService. If the service has not
     * defined tags, tags from the service type will be returned.
     */
    getTags(): string[]
    /**
     * Checks if the #AgService has the requested tag.
     * @param tag tag to check for.
     */
    hasTag(tag: string): boolean
    /**
     * Adds a reference to `service`.
     */
    ref(): Service
    /**
     * Used to unreference the #AgService structure.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
export class Service {

    // Own properties of Accounts-1.0.Accounts.Service

    static name: string

    // Constructors of Accounts-1.0.Accounts.Service

    /**
     * Frees the list `list`.
     * @param list a #GList of services returned by some function of this library.
     */
    static listFree(list: Service[]): void
}

export interface ServiceType {

    // Owm methods of Accounts-1.0.Accounts.ServiceType

    /**
     * Get the description of the #AgServiceType.
     */
    getDescription(): string
    /**
     * Get the display name of the #AgServiceType.
     */
    getDisplayName(): string
    /**
     * Gets the contents of the XML service type file.  The buffer returned in
     * `contents` should not be modified or freed, and is guaranteed to be valid as
     * long as `service_type` is referenced.
     * If some error occurs, `contents` is set to %NULL.
     * @param contents location to receive the pointer to the file contents.
     * @param len location to receive the length of the file, in bytes.
     */
    getFileContents(contents: string, len: number): void
    /**
     * Get the translation domain of the #AgServiceType.
     */
    getI18nDomain(): string
    /**
     * Get the icon name of the #AgServiceType.
     */
    getIconName(): string
    /**
     * Get the name of the #AgServiceType.
     */
    getName(): string
    /**
     * Get list of tags specified for the #AgServiceType.
     */
    getTags(): string[]
    /**
     * Check if the #AgServiceType has the requested tag.
     * @param tag the tag to check for.
     */
    hasTag(tag: string): boolean
    /**
     * Adds a reference to `service_type`.
     */
    ref(): ServiceType
    /**
     * Used to unreference the #AgServiceType structure.
     */
    unref(): void
}

/**
 * Opaque structure. Use related accessor functions.
 * @record 
 */
export class ServiceType {

    // Own properties of Accounts-1.0.Accounts.ServiceType

    static name: string

    // Constructors of Accounts-1.0.Accounts.ServiceType

    /**
     * Frees the list `list`.
     * @param list a #GList of service types returned by some function of this library, such as ag_manager_list_service_types().
     */
    static listFree(list: ServiceType[]): void
}

    export type AccountId = number