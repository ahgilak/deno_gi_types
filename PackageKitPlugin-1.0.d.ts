
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PackageKitPlugin-1.0
 */

import type * as PackageKitGlib from './PackageKitGlib-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum BackendJobSignal {
    ALLOW_CANCEL,
    DETAILS,
    ERROR_CODE,
    DISTRO_UPGRADE,
    FINISHED,
    PACKAGE,
    ITEM_PROGRESS,
    FILES,
    PERCENTAGE,
    REMAINING,
    SPEED,
    DOWNLOAD_SIZE_REMAINING,
    REPO_DETAIL,
    REPO_SIGNATURE_REQUIRED,
    EULA_REQUIRED,
    MEDIA_CHANGE_REQUIRED,
    REQUIRE_RESTART,
    STATUS_CHANGED,
    LOCKED_CHANGED,
    UPDATE_DETAIL,
    CATEGORY,
    LAST,
}
export enum HintEnum {
    FALSE,
    TRUE,
    UNSET,
    INVALID,
    LAST,
}
export enum PluginPhase {
    INIT,
    TRANSACTION_CONTENT_TYPES,
    TRANSACTION_RUN,
    TRANSACTION_STARTED,
    TRANSACTION_FINISHED_RESULTS,
    TRANSACTION_FINISHED_END,
    DESTROY,
    STATE_CHANGED,
    UNKNOWN,
}
export enum TransactionState {
    NEW,
    WAITING_FOR_AUTH,
    COMMITTED,
    READY,
    RUNNING,
    FINISHED,
    UNKNOWN,
}
/**
 * The unknown percentage value
 */
export const BACKEND_PERCENTAGE_INVALID: number
export const TRANSACTION_ALL_BACKEND_SIGNALS: number
export const TRANSACTION_NO_BACKEND_SIGNALS: number
/**
 * Does not remove the directory itself, only the contents.
 * @param directory 
 */
export function directoryRemoveContents(directory: string): boolean
export function getResource(): Gio.Resource
export function hintEnumFromString(hint: string): HintEnum
export function hintEnumToString(hint: HintEnum): string
export function loadIntrospection(filename: string): Gio.DBusNodeInfo
export function pluginGetDescription(): string
/**
 * This function is a much safer way of doing strlen as it checks for NULL and
 * a stupidly long string.
 * @param text The text to check
 * @param len The maximum length of the string
 */
export function strlen(text: string, len: number): number
/**
 * Converts a string into a signed integer value in a safe way.
 * @param text The text the convert
 * @param value The return numeric return value
 */
export function strtoint(text: string, value: number): boolean
/**
 * Converts a string into a unsigned integer value in a safe way.
 * @param text The text the convert
 * @param value The return numeric return value
 */
export function strtouint(text: string, value: number): boolean
/**
 * Converts a string into a unsigned integer value in a safe way.
 * @param text The text the convert
 * @param value The return numeric return value
 */
export function strtouint64(text: string, value: number): boolean
/**
 * This function is a much safer way of doing "if (strlen (text) == 0))"
 * as it does not rely on text being NULL terminated. It's also much
 * quicker as it only checks the first byte rather than scanning the whole
 * string just to verify it's not zero length.
 * @param text The text to check
 */
export function strzero(text: string): boolean
export interface BackendFileChanged {
    (backend: Backend, data: object): void
}
export interface BackendJobThreadFunc {
    (job: BackendJob, params: GLib.Variant): void
}
export interface BackendJobVFunc {
    (job: BackendJob, object: object): void
}
export interface PluginFunc {
    (plugin: Plugin): void
}
export interface PluginGetActionFunc {
    (plugin: Plugin, transaction: Transaction, actionId: string): string
}
export interface PluginGetDescFunc {
    (): string
}
export interface PluginTransactionFunc {
    (plugin: Plugin, transaction: Transaction): void
}
export module Backend {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Backend {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.Backend

    parent: GObject.Object
    priv: BackendPrivate

    // Owm methods of PackageKitPlugin-1.0.PackageKitPlugin.Backend

    acceptEula(eulaId: string): void
    cancel(job: BackendJob): void
    dependsOn(job: BackendJob, filters: PackageKitGlib.Bitfield, packageIds: string, recursive: boolean): void
    destroy(): void
    downloadPackages(job: BackendJob, packageIds: string, directory: string): void
    getAcceptedEulaString(): string
    getAuthor(): string
    getCategories(job: BackendJob): void
    getDescription(): string
    getDetails(job: BackendJob, packageIds: string): void
    getDetailsLocal(job: BackendJob, files: string): void
    getDistroUpgrades(job: BackendJob): void
    getFiles(job: BackendJob, packageIds: string): void
    getFilesLocal(job: BackendJob, files: string): void
    getFilters(): PackageKitGlib.Bitfield
    getGroups(): PackageKitGlib.Bitfield
    getMimeTypes(): string[]
    getName(): string
    getPackages(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    getRepoList(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    getRoles(): PackageKitGlib.Bitfield
    getUpdateDetail(job: BackendJob, packageIds: string): void
    getUpdates(job: BackendJob, filters: PackageKitGlib.Bitfield): void
    implement(role: PackageKitGlib.RoleEnum): void
    installFiles(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, fullPaths: string): void
    installPackages(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, packageIds: string): void
    installSignature(job: BackendJob, type: PackageKitGlib.SigTypeEnum, keyId: string, packageId: string): void
    isEulaValid(eulaId: string): boolean
    isImplemented(role: PackageKitGlib.RoleEnum): boolean
    isOnline(): boolean
    /**
     * Responsible for initialising the external backend object.
     * 
     * Typically this will involve taking database locks for exclusive package access.
     * This method should only be called from the engine, unless the backend object
     * is used in self-check code, in which case the lock and unlock will have to
     * be done manually.
     */
    load(): boolean
    refreshCache(job: BackendJob, force: boolean): void
    removePackages(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, packageIds: string, allowDeps: boolean, autoremove: boolean): void
    repairSystem(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield): void
    repoEnable(job: BackendJob, repoId: string, enabled: boolean): void
    repoListChanged(): boolean
    repoRemove(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, repoId: string, autoremove: boolean): void
    repoSetData(job: BackendJob, repoId: string, parameter: string, value: string): void
    requiredBy(job: BackendJob, filters: PackageKitGlib.Bitfield, packageIds: string, recursive: boolean): void
    resetJob(job: BackendJob): void
    resolve(job: BackendJob, filters: PackageKitGlib.Bitfield, packages: string): void
    searchDetails(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    searchFiles(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    searchGroups(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    searchNames(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void
    /**
     * This is called just before the threaded transaction method, and in
     * the newly created thread context. e.g.
     * 
     * >>> desc->job_start(backend)
     *     (locked backend)
     * >>> desc->backend_method_we_want_to_run(backend)
     * <<< ::Package(PK_INFO_ENUM_INSTALLING,"hal;0.1.1;i386;fedora","Hardware Stuff")
     * >>> desc->job_stop(backend)
     *     (unlocked backend)
     * <<< ::Finished()
     * 
     * or in the case of backend_method_we_want_to_run() failure:
     * >>> desc->job_start(backend)
     *     (locked backend)
     * >>> desc->backend_method_we_want_to_run(backend)
     * <<< ::ErrorCode(PK_ERROR_ENUM_FAILED_TO_FIND,"no package")
     * >>> desc->job_stop(backend)
     *     (unlocked backend)
     * <<< ::Finished()
     * 
     * or in the case of job_start() failure:
     * >>> desc->job_start(backend)
     *     (failed to lock backend)
     * <<< ::ErrorCode(PK_ERROR_ENUM_FAILED_TO_LOCK,"no pid file")
     * >>> desc->job_stop(backend)
     * <<< ::Finished()
     * 
     * It is *not* called for non-threaded backends, as multiple processes
     * would be inherently racy.
     * @param job 
     */
    startJob(job: BackendJob): void
    /**
     * Always run for each transaction, *even* when the job_start()
     * vfunc fails.
     * 
     * This method has no return value as the ErrorCode should have already
     * been set.
     * @param job 
     */
    stopJob(job: BackendJob): void
    supportsParallelization(): boolean
    threadStart(job: BackendJob, func: object): void
    threadStop(job: BackendJob, func: object): void
    /**
     * Responsible for finalising the external backend object.
     * 
     * Typically this will involve releasing database locks for any other access.
     * This method should only be called from the engine, unless the backend object
     * is used in self-check code, in which case it will have to be done manually.
     */
    unload(): boolean
    updatePackages(job: BackendJob, transactionFlags: PackageKitGlib.Bitfield, packageIds: string): void
    watchFile(filename: string, func: BackendFileChanged): boolean
    whatProvides(job: BackendJob, filters: PackageKitGlib.Bitfield, search: string): void

    // Class property signals of PackageKitPlugin-1.0.PackageKitPlugin.Backend

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Backend extends GObject.Object {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.Backend

    static name: string

    // Constructors of PackageKitPlugin-1.0.PackageKitPlugin.Backend

    constructor(config?: Backend.ConstructorProperties) 
    constructor(conf: GLib.KeyFile) 
    static new(conf: GLib.KeyFile): Backend
    _init(config?: Backend.ConstructorProperties): void
    static boolToString(value: boolean): string
    static initialize(conf: GLib.KeyFile, backend: Backend): void
}

export module BackendJob {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BackendJob {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.BackendJob

    parent: GObject.Object
    priv: BackendJobPrivate

    // Owm methods of PackageKitPlugin-1.0.PackageKitPlugin.BackendJob

    category(parentId: string, catId: string, name: string, summary: string, icon: string): void
    details(packageId: string, summary: string, license: string, group: PackageKitGlib.GroupEnum, description: string, url: string, size: number): void
    distroUpgrade(type: PackageKitGlib.DistroUpgradeEnum, name: string, summary: string): void
    eulaRequired(eulaId: string, packageId: string, vendorName: string, licenseAgreement: string): void
    /**
     * package_id is NULL when we are using this as a calback from DownloadPackages
     * @param packageId 
     * @param files 
     */
    files(packageId: string, files: string): void
    finished(): void
    getAllowCancel(): boolean
    getBackend(): object
    getBackground(): HintEnum
    /**
     * Gets the maximum cache age in seconds.
     */
    getCacheAge(): number
    getCmdline(): string
    getExitCode(): PackageKitGlib.ExitEnum
    getFrontendSocket(): string
    getInteractive(): HintEnum
    getIsErrorSet(): boolean
    getIsFinished(): boolean
    getLocale(): string
    getLocked(): boolean
    getNoProxy(): string
    getPac(): string
    getParameters(): GLib.Variant
    getProxyFtp(): string
    getProxyHttp(): string
    getProxyHttps(): string
    getProxySocks(): string
    getRole(): PackageKitGlib.RoleEnum
    getRuntime(): number
    getStarted(): boolean
    getTransactionFlags(): PackageKitGlib.Bitfield
    getUid(): number
    getUserData(): object
    getVfuncEnabled(signalKind: BackendJobSignal): boolean
    hasSetErrorCode(): boolean
    mediaChangeRequired(mediaType: PackageKitGlib.MediaTypeEnum, mediaId: string, mediaText: string): void
    notImplementedYet(method: string): void
    package(info: PackageKitGlib.InfoEnum, packageId: string, summary: string): void
    repoDetail(repoId: string, description: string, enabled: boolean): void
    repoSignatureRequired(packageId: string, repositoryName: string, keyUrl: string, keyUserid: string, keyId: string, keyFingerprint: string, keyTimestamp: string, type: PackageKitGlib.SigTypeEnum): void
    requireRestart(restart: PackageKitGlib.RestartEnum, packageId: string): void
    reset(): void
    setAllowCancel(allowCancel: boolean): void
    setBackend(backend: object): void
    setBackground(background: HintEnum): void
    setCacheAge(cacheAge: number): void
    setCmdline(cmdline: string): void
    setDownloadSizeRemaining(downloadSizeRemaining: number): void
    /**
     * Should only be used internally, or from PkRunner when setting CANCELLED.
     * @param exit 
     */
    setExitCode(exit: PackageKitGlib.ExitEnum): void
    setFrontendSocket(frontendSocket: string): void
    setInteractive(interactive: HintEnum): void
    setItemProgress(packageId: string, status: PackageKitGlib.StatusEnum, percentage: number): void
    setLocale(code: string): void
    /**
     * Set if your backend job currently locks the cache, so no other tool will
     * have write  access on it. (read-only transactions will still be permitted)
     * @param locked 
     */
    setLocked(locked: boolean): void
    setParameters(params: GLib.Variant): void
    setPercentage(percentage: number): void
    setProxy(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string): void
    setRole(role: PackageKitGlib.RoleEnum): void
    setSpeed(speed: number): void
    setStarted(started: boolean): void
    setStatus(status: PackageKitGlib.StatusEnum): void
    setTransactionFlags(transactionFlags: PackageKitGlib.Bitfield): void
    setUid(uid: number): void
    setUserData(userData: object): void
    /**
     * Connect backend
     * @param signalKind Kind of the backend signal we want to connect
     * @param vfunc The function we want to call
     */
    setVfunc(signalKind: BackendJobSignal, vfunc: BackendJobVFunc): void
    threadCreate(func: BackendJobThreadFunc): boolean
    updateDetail(packageId: string, updates: string, obsoletes: string, vendorUrls: string, bugzillaUrls: string, cveUrls: string, restart: PackageKitGlib.RestartEnum, updateText: string, changelog: string, state: PackageKitGlib.UpdateStateEnum, issued: string, updated: string): void
    useBackground(): boolean

    // Class property signals of PackageKitPlugin-1.0.PackageKitPlugin.BackendJob

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BackendJob extends GObject.Object {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.BackendJob

    static name: string

    // Constructors of PackageKitPlugin-1.0.PackageKitPlugin.BackendJob

    constructor(config?: BackendJob.ConstructorProperties) 
    constructor(conf: GLib.KeyFile) 
    static new(conf: GLib.KeyFile): BackendJob
    _init(config?: BackendJob.ConstructorProperties): void
}

export module Transaction {

    // Signal callback interfaces

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Transaction {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.Transaction

    parent: GObject.Object
    priv: TransactionPrivate

    // Owm methods of PackageKitPlugin-1.0.PackageKitPlugin.Transaction

    /**
     * Designed to be used by plugins.
     * @param mimeType 
     */
    addSupportedContentType(mimeType: string): void
    cancelBg(): void
    getBackendJob(): BackendJob
    getConf(): GLib.KeyFile
    getFullPaths(): string[]
    getPackageIds(): string[]
    getResults(): PackageKitGlib.Results
    getRole(): PackageKitGlib.RoleEnum
    getState(): TransactionState
    getTid(): string
    getTransactionFlags(): PackageKitGlib.Bitfield
    getUid(): number
    getValues(): string[]
    isExclusive(): boolean
    isFinishedWithLockRequired(): boolean
    /**
     * Make this transaction exclusive.
     */
    makeExclusive(): void
    resetAfterLockError(): void
    run(): boolean
    setBackend(backend: Backend): void
    setFullPaths(fullPaths: string): void
    setPackageIds(packageIds: string): void
    /**
     * A transaction can have only one state at any time as it is processed.
     * Typically, these states will be:
     * 
     * 1. 'new'
     * 2. 'waiting for auth'  <--- waiting for PolicyKit (optional)
     * 3. 'committed'	 <--- when the client sets the role
     * 4. 'ready'	     <--- when the transaction is ready to be run
     * 5. 'running'	   <--- where PkBackend gets used
     * 6. 'finished'
     * @param state 
     */
    setState(state: TransactionState): boolean
    /**
     * Connect all backend_signals to the PkTransaction.
     * @param job 
     */
    signalsReset(job: BackendJob): void
    /**
     * Skip authorization checks.
     * NOTE: This is *only* for testing, do never
     * use it somewhere else!
     * @param skipChecks 
     */
    skipAuthChecks(skipChecks: boolean): void

    // Own signals of PackageKitPlugin-1.0.PackageKitPlugin.Transaction

    connect(sigName: "finished", callback: Transaction.FinishedSignalCallback): number
    on(sigName: "finished", callback: Transaction.FinishedSignalCallback): number
    once(sigName: "finished", callback: Transaction.FinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "finished", ...args: any[]): void

    // Class property signals of PackageKitPlugin-1.0.PackageKitPlugin.Transaction

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Transaction extends GObject.Object {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.Transaction

    static name: string

    // Constructors of PackageKitPlugin-1.0.PackageKitPlugin.Transaction

    constructor(config?: Transaction.ConstructorProperties) 
    constructor(conf: GLib.KeyFile, introspection: Gio.DBusNodeInfo) 
    static new(conf: GLib.KeyFile, introspection: Gio.DBusNodeInfo): Transaction
    _init(config?: Transaction.ConstructorProperties): void
    static errorQuark(): GLib.Quark
    static stateToString(state: TransactionState): string
}

export interface BackendClass {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.BackendClass

    parentClass: GObject.ObjectClass
}

export abstract class BackendClass {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.BackendClass

    static name: string
}

export interface BackendJobClass {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.BackendJobClass

    parentClass: GObject.ObjectClass
}

export abstract class BackendJobClass {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.BackendJobClass

    static name: string
}

export interface BackendJobPrivate {
}

export class BackendJobPrivate {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.BackendJobPrivate

    static name: string
}

export interface BackendPrivate {
}

export class BackendPrivate {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.BackendPrivate

    static name: string
}

export interface Plugin {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.Plugin

    backend: Backend
    job: BackendJob
    priv: PluginPrivate

    // Owm methods of PackageKitPlugin-1.0.PackageKitPlugin.Plugin

    destroy(): void
    initialize(): void
    stateChanged(): void
    transactionContentTypes(transaction: Transaction): void
    transactionFinishedEnd(transaction: Transaction): void
    transactionFinishedResults(transaction: Transaction): void
    transactionGetAction(transaction: Transaction, actionId: string): string
    transactionRun(transaction: Transaction): void
    transactionStarted(transaction: Transaction): void
}

export class Plugin {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.Plugin

    static name: string

    // Constructors of PackageKitPlugin-1.0.PackageKitPlugin.Plugin

    static getDescription(): string
}

export interface PluginPrivate {
}

export class PluginPrivate {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.PluginPrivate

    static name: string
}

export interface TransactionClass {

    // Own fields of PackageKitPlugin-1.0.PackageKitPlugin.TransactionClass

    parentClass: GObject.ObjectClass
}

export abstract class TransactionClass {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.TransactionClass

    static name: string
}

export interface TransactionPrivate {
}

export class TransactionPrivate {

    // Own properties of PackageKitPlugin-1.0.PackageKitPlugin.TransactionPrivate

    static name: string
}
