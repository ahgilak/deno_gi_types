
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PackageKitGlib-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * The authorization result
 */
export enum AuthorizeEnum {
    /**
     * Unknown authorization status
     */
    UNKNOWN,
    /**
     * Authorized
     */
    YES,
    /**
     * Not authorized
     */
    NO,
    /**
     * Interaction required for authorization
     */
    INTERACTIVE,
    LAST,
}
/**
 * Errors that can be thrown
 */
export enum ClientError {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    /**
     * the transaction failed authentication/authorization
     */
    FAILED_AUTH,
    /**
     * the transaction id was not pre-allocated (internal error)
     */
    NO_TID,
    /**
     * the transaction id has already been used (internal error)
     */
    ALREADY_TID,
    /**
     * the role was not set (internal error)
     */
    ROLE_UNKNOWN,
    /**
     * the PackageKit daemon failed to start
     */
    CANNOT_START_DAEMON,
    /**
     * the package_id is invalid
     */
    INVALID_INPUT,
    /**
     * the file is invalid
     */
    INVALID_FILE,
    /**
     * the action is not supported
     */
    NOT_SUPPORTED,
    /**
     * the simulation was declined by the user
     */
    DECLINED_SIMULATION,
    /**
     * the user declined interaction on the task
     */
    DECLINED_INTERACTION,
    LAST,
}
/**
 * Errors that can be thrown
 */
export enum ControlError {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    /**
     * the PackageKit daemon failed to start
     */
    CANNOT_START_DAEMON,
}
/**
 * The distro upgrade status
 */
export enum DistroUpgradeEnum {
    /**
     * Unknown disto upgrade state
     */
    UNKNOWN,
    /**
     * Upgraded to stable release
     */
    STABLE,
    /**
     * Upgraded to unstable release
     */
    UNSTABLE,
    LAST,
}
/**
 * The error type
 */
export enum ErrorEnum {
    UNKNOWN,
    /**
     * Out of memory
     */
    OOM,
    /**
     * No network access available
     */
    NO_NETWORK,
    /**
     * Request not supported
     */
    NOT_SUPPORTED,
    /**
     * Undefined internal error
     */
    INTERNAL_ERROR,
    /**
     * GPG encryption failure
     */
    GPG_FAILURE,
    /**
     * Invalid package ID provided
     */
    PACKAGE_ID_INVALID,
    /**
     * Requested package not installed
     */
    PACKAGE_NOT_INSTALLED,
    /**
     * Requested package not found
     */
    PACKAGE_NOT_FOUND,
    /**
     * Requested package already installed
     */
    PACKAGE_ALREADY_INSTALLED,
    /**
     * Failed to download package
     */
    PACKAGE_DOWNLOAD_FAILED,
    /**
     * Requested group not gound
     */
    GROUP_NOT_FOUND,
    /**
     * Invalid group list provided
     */
    GROUP_LIST_INVALID,
    /**
     * Failed to resolve dependencies
     */
    DEP_RESOLUTION_FAILED,
    /**
     * Invalid filter provides
     */
    FILTER_INVALID,
    /**
     * Failed to create thread
     */
    CREATE_THREAD_FAILED,
    /**
     * Error occurred during transaction
     */
    TRANSACTION_ERROR,
    /**
     * Transaction was cancelled
     */
    TRANSACTION_CANCELLED,
    /**
     * No cache available
     */
    NO_CACHE,
    /**
     * Requested repository not found
     */
    REPO_NOT_FOUND,
    /**
     * Not allowed to remove system package
     */
    CANNOT_REMOVE_SYSTEM_PACKAGE,
    /**
     * Process killed
     */
    PROCESS_KILL,
    FAILED_INITIALIZATION,
    FAILED_FINALISE,
    /**
     * Configuration is not valid
     */
    FAILED_CONFIG_PARSING,
    CANNOT_CANCEL,
    /**
     * Cannot get lock
     */
    CANNOT_GET_LOCK,
    /**
     * No packages to update
     */
    NO_PACKAGES_TO_UPDATE,
    /**
     * Cannot write repository configuration
     */
    CANNOT_WRITE_REPO_CONFIG,
    LOCAL_INSTALL_FAILED,
    /**
     * Bad GPG signature found
     */
    BAD_GPG_SIGNATURE,
    /**
     * Required GPG signature not found
     */
    MISSING_GPG_SIGNATURE,
    /**
     * Cannot install source package
     */
    CANNOT_INSTALL_SOURCE_PACKAGE,
    REPO_CONFIGURATION_ERROR,
    NO_LICENSE_AGREEMENT,
    /**
     * File conflicts detected
     */
    FILE_CONFLICTS,
    /**
     * Package conflict
     */
    PACKAGE_CONFLICTS,
    /**
     * Repository not available
     */
    REPO_NOT_AVAILABLE,
    INVALID_PACKAGE_FILE,
    /**
     * Package installation blocked
     */
    PACKAGE_INSTALL_BLOCKED,
    /**
     * Package corruption occurred
     */
    PACKAGE_CORRUPT,
    /**
     * All packages already installed
     */
    ALL_PACKAGES_ALREADY_INSTALLED,
    /**
     * Required file not found
     */
    FILE_NOT_FOUND,
    /**
     * Out of repository mirrors to try
     */
    NO_MORE_MIRRORS_TO_TRY,
    /**
     * No distribution upgrade path found
     */
    NO_DISTRO_UPGRADE_DATA,
    /**
     * Incompatible architecture found
     */
    INCOMPATIBLE_ARCHITECTURE,
    /**
     * Out of required disk space
     */
    NO_SPACE_ON_DEVICE,
    /**
     * Need to change media
     */
    MEDIA_CHANGE_REQUIRED,
    /**
     * Authorization failed
     */
    NOT_AUTHORIZED,
    /**
     * Update not found
     */
    UPDATE_NOT_FOUND,
    /**
     * Installation repository missing signature
     */
    CANNOT_INSTALL_REPO_UNSIGNED,
    /**
     * Update repository missing signature
     */
    CANNOT_UPDATE_REPO_UNSIGNED,
    /**
     * Cannot get file list
     */
    CANNOT_GET_FILELIST,
    /**
     * Cannot get package requirements
     */
    CANNOT_GET_REQUIRES,
    /**
     * Cannot disable reposoitory
     */
    CANNOT_DISABLE_REPOSITORY,
    RESTRICTED_DOWNLOAD,
    /**
     * Package failed to configure
     */
    PACKAGE_FAILED_TO_CONFIGURE,
    /**
     * Package failed to build
     */
    PACKAGE_FAILED_TO_BUILD,
    /**
     * Package failed to install
     */
    PACKAGE_FAILED_TO_INSTALL,
    /**
     * Package failed to remove
     */
    PACKAGE_FAILED_TO_REMOVE,
    UPDATE_FAILED_DUE_TO_RUNNING_PROCESS,
    PACKAGE_DATABASE_CHANGED,
    PROVIDE_TYPE_NOT_SUPPORTED,
    /**
     * Installtion root not suitable
     */
    INSTALL_ROOT_INVALID,
    /**
     * Cannot fetch sources
     */
    CANNOT_FETCH_SOURCES,
    /**
     * Cancelled due to higher priority task
     */
    CANCELLED_PRIORITY,
    /**
     * Transaction unfinished
     */
    UNFINISHED_TRANSACTION,
    /**
     * Required lock not available
     */
    LOCK_REQUIRED,
    REPO_ALREADY_SET,
    LAST,
}
/**
 * How the backend exited
 */
export enum ExitEnum {
    /**
     * Unknown exit status
     */
    UNKNOWN,
    /**
     * Backend exited successfully
     */
    SUCCESS,
    /**
     * Backend failed
     */
    FAILED,
    /**
     * Backend was cancelled
     */
    CANCELLED,
    /**
     * A repository encryption key needs installing
     */
    KEY_REQUIRED,
    /**
     * A EULA is required to be accepted
     */
    EULA_REQUIRED,
    /**
     * Backend was killed
     */
    KILLED,
    /**
     * Media change required
     */
    MEDIA_CHANGE_REQUIRED,
    NEED_UNTRUSTED,
    /**
     * Cancelled due to higher priority task
     */
    CANCELLED_PRIORITY,
    SKIP_TRANSACTION,
    /**
     * Package database requires repairing
     */
    REPAIR_REQUIRED,
    LAST,
}
/**
 * The filter types
 */
export enum FilterEnum {
    /**
     * Unknown filter
     */
    UNKNOWN,
    /**
     * No filter
     */
    NONE,
    /**
     * Filter for installed packages
     */
    INSTALLED,
    /**
     * Filter for not installed packages
     */
    NOT_INSTALLED,
    /**
     * Filter for development packages
     */
    DEVELOPMENT,
    /**
     * Filter for non-development packages
     */
    NOT_DEVELOPMENT,
    /**
     * Filter for GUI packages
     */
    GUI,
    /**
     * Filter for non-GUI packages
     */
    NOT_GUI,
    /**
     * Filter for free packages
     */
    FREE,
    /**
     * Filter for non-free packages
     */
    NOT_FREE,
    /**
     * Filter for visible packages
     */
    VISIBLE,
    /**
     * Filter for invisible packages
     */
    NOT_VISIBLE,
    /**
     * Filter for supported packages
     */
    SUPPORTED,
    /**
     * Filter for not supported packages
     */
    NOT_SUPPORTED,
    /**
     * Filter for packages that match basename
     */
    BASENAME,
    /**
     * Filter for packages that don't match basename
     */
    NOT_BASENAME,
    /**
     * Filter for newest packages
     */
    NEWEST,
    /**
     * Filter for not newest packages
     */
    NOT_NEWEST,
    /**
     * Filter for packages that match architecture
     */
    ARCH,
    /**
     * Filter for packages that don't match architecture
     */
    NOT_ARCH,
    /**
     * Filter for source packages
     */
    SOURCE,
    /**
     * Filter for non-source packages
     */
    NOT_SOURCE,
    /**
     * Filter for collections
     */
    COLLECTIONS,
    /**
     * Filter for not collections
     */
    NOT_COLLECTIONS,
    /**
     * Filter for application packages
     */
    APPLICATION,
    /**
     * Filter for non-application packages
     */
    NOT_APPLICATION,
    /**
     * Filter for downloaded packages
     */
    DOWNLOADED,
    /**
     * Filter for not downloaded packages
     */
    NOT_DOWNLOADED,
    LAST,
}
/**
 * The group type
 */
export enum GroupEnum {
    /**
     * Unknown group
     */
    UNKNOWN,
    /**
     * Accessibility related packages
     */
    ACCESSIBILITY,
    /**
     * Accessory packages
     */
    ACCESSORIES,
    /**
     * Administration tools packages
     */
    ADMIN_TOOLS,
    /**
     * Communication packages
     */
    COMMUNICATION,
    /**
     * GNOME packages
     */
    DESKTOP_GNOME,
    /**
     * KDE packages
     */
    DESKTOP_KDE,
    /**
     * Other desktop packages
     */
    DESKTOP_OTHER,
    /**
     * XFCE packages
     */
    DESKTOP_XFCE,
    /**
     * Education packages
     */
    EDUCATION,
    /**
     * Fonts
     */
    FONTS,
    /**
     * Games
     */
    GAMES,
    /**
     * Graphics related packages
     */
    GRAPHICS,
    /**
     * Internet related packages
     */
    INTERNET,
    /**
     * Legacy packages
     */
    LEGACY,
    /**
     * Localization related packages
     */
    LOCALIZATION,
    /**
     * Map related packages
     */
    MAPS,
    /**
     * Multimedia packages
     */
    MULTIMEDIA,
    /**
     * Network related packages
     */
    NETWORK,
    /**
     * Office packages
     */
    OFFICE,
    OTHER,
    /**
     * Power-management related packages
     */
    POWER_MANAGEMENT,
    /**
     * Programming packages
     */
    PROGRAMMING,
    /**
     * Publishing related packages
     */
    PUBLISHING,
    REPOS,
    /**
     * Security packages
     */
    SECURITY,
    /**
     * Server related packages
     */
    SERVERS,
    /**
     * System packages
     */
    SYSTEM,
    /**
     * Virtualization packages
     */
    VIRTUALIZATION,
    /**
     * Science related packages
     */
    SCIENCE,
    /**
     * Documentation
     */
    DOCUMENTATION,
    /**
     * Electronics package
     */
    ELECTRONICS,
    COLLECTIONS,
    /**
     * Vendor defined group
     */
    VENDOR,
    /**
     * Special group for recently updated packages
     */
    NEWEST,
    LAST,
}
/**
 * The enumerated types used in Package() - these have to refer to a specific
 * package action, rather than a general state
 */
export enum InfoEnum {
    /**
     * Package status is unknown
     */
    UNKNOWN,
    /**
     * Package is installed
     */
    INSTALLED,
    /**
     * Package is available to be installed
     */
    AVAILABLE,
    LOW,
    ENHANCEMENT,
    NORMAL,
    BUGFIX,
    IMPORTANT,
    SECURITY,
    /**
     * Package is blocked
     */
    BLOCKED,
    /**
     * Package is downloading
     */
    DOWNLOADING,
    /**
     * Package is updating
     */
    UPDATING,
    /**
     * Package is being installed
     */
    INSTALLING,
    /**
     * Package is being removed
     */
    REMOVING,
    /**
     * Package is running cleanup
     */
    CLEANUP,
    OBSOLETING,
    COLLECTION_INSTALLED,
    COLLECTION_AVAILABLE,
    FINISHED,
    /**
     * Package is being reinstalled
     */
    REINSTALLING,
    /**
     * Package is being downgraded
     */
    DOWNGRADING,
    /**
     * Package is preparing for installation/removal
     */
    PREPARING,
    /**
     * Package is decompressing
     */
    DECOMPRESSING,
    UNTRUSTED,
    TRUSTED,
    /**
     * Package is unavailable
     */
    UNAVAILABLE,
    /**
     * Update severity is critical; Since: 1.2.4
     */
    CRITICAL,
    LAST,
}
/**
 * The media type
 */
export enum MediaTypeEnum {
    /**
     * Unknown media type
     */
    UNKNOWN,
    /**
     * Media is a CD
     */
    CD,
    /**
     * Media is a DVD
     */
    DVD,
    /**
     * Media is a disc (not CD or DVD)
     */
    DISC,
    LAST,
}
/**
 * Network type
 */
export enum NetworkEnum {
    /**
     * Unknown network
     */
    UNKNOWN,
    /**
     * Offline (no network)
     */
    OFFLINE,
    /**
     * Online (network type unknown)
     */
    ONLINE,
    /**
     * Wired network
     */
    WIRED,
    /**
     * WiFi network
     */
    WIFI,
    /**
     * Mobile network
     */
    MOBILE,
    LAST,
}
/**
 * Actions that can be taken after an offline operation.
 */
export enum OfflineAction {
    /**
     * Unknown
     */
    UNKNOWN,
    /**
     * Reboot
     */
    REBOOT,
    /**
     * Power-off
     */
    POWER_OFF,
    /**
     * No action set
     */
    UNSET,
}
/**
 * Errors that can be thrown
 */
export enum OfflineError {
    /**
     * No specific reason
     */
    FAILED,
    /**
     * An invalid value was specified
     */
    INVALID_VALUE,
    /**
     * No data was available
     */
    NO_DATA,
}
/**
 * Type of sort to perform.
 */
export enum PackageSackSortType {
    /**
     * Sort by name
     */
    NAME,
    /**
     * Sort by package info
     */
    INFO,
    /**
     * Sort by package ID
     */
    PACKAGE_ID,
    /**
     * Sort by summary
     */
    SUMMARY,
    LAST,
}
/**
 * Flag to show which progress field has been updated.
 */
export enum ProgressType {
    /**
     * package id updated
     */
    PACKAGE_ID,
    /**
     * transaction ID updated
     */
    TRANSACTION_ID,
    /**
     * percentage updated
     */
    PERCENTAGE,
    /**
     * allow cancel updated
     */
    ALLOW_CANCEL,
    /**
     * status updated
     */
    STATUS,
    /**
     * role updated
     */
    ROLE,
    /**
     * called active updated
     */
    CALLER_ACTIVE,
    /**
     * elapsed time updated
     */
    ELAPSED_TIME,
    /**
     * remaining time updated
     */
    REMAINING_TIME,
    /**
     * speed updated
     */
    SPEED,
    /**
     * download size remaining updated
     */
    DOWNLOAD_SIZE_REMAINING,
    /**
     * uid updated
     */
    UID,
    /**
     * package updated
     */
    PACKAGE,
    /**
     * item progress updated
     */
    ITEM_PROGRESS,
    /**
     * transaction flags updated
     */
    TRANSACTION_FLAGS,
    INVALID,
}
/**
 * What restart we need to after a transaction, ordered by severity
 */
export enum RestartEnum {
    /**
     * Unknown restart state
     */
    UNKNOWN,
    /**
     * No restart required
     */
    NONE,
    /**
     * Need to restart the application
     */
    APPLICATION,
    /**
     * Need to restart the session
     */
    SESSION,
    /**
     * Need to restart the system
     */
    SYSTEM,
    SECURITY_SESSION,
    SECURITY_SYSTEM,
    LAST,
}
/**
 * What we were asked to do, this never changes for the lifetime of the
 * transaction.
 * Icons that have to represent the whole "aim" of the transaction will use
 * these constants
 */
export enum RoleEnum {
    /**
     * Unknow request
     */
    UNKNOWN,
    /**
     * Cancel transaction
     */
    CANCEL,
    /**
     * Get package dependencies
     */
    DEPENDS_ON,
    /**
     * Get package details
     */
    GET_DETAILS,
    GET_FILES,
    /**
     * Get available packages
     */
    GET_PACKAGES,
    /**
     * Get repository list
     */
    GET_REPO_LIST,
    /**
     * Get packages required by given package
     */
    REQUIRED_BY,
    /**
     * Get update details
     */
    GET_UPDATE_DETAIL,
    /**
     * Get available updates
     */
    GET_UPDATES,
    /**
     * Install package files
     */
    INSTALL_FILES,
    /**
     * Install packages
     */
    INSTALL_PACKAGES,
    /**
     * Install signature
     */
    INSTALL_SIGNATURE,
    /**
     * Refresh cache
     */
    REFRESH_CACHE,
    /**
     * Remove packages
     */
    REMOVE_PACKAGES,
    /**
     * Enable repository
     */
    REPO_ENABLE,
    REPO_SET_DATA,
    /**
     * Resolve depdencies
     */
    RESOLVE,
    /**
     * Search for details
     */
    SEARCH_DETAILS,
    /**
     * Search for file
     */
    SEARCH_FILE,
    /**
     * Search for group
     */
    SEARCH_GROUP,
    /**
     * Search for package name
     */
    SEARCH_NAME,
    /**
     * Update packages
     */
    UPDATE_PACKAGES,
    /**
     * Get what a package provides
     */
    WHAT_PROVIDES,
    /**
     * Accept an EULA
     */
    ACCEPT_EULA,
    /**
     * Download packages
     */
    DOWNLOAD_PACKAGES,
    /**
     * Get available distribution upgrades
     */
    GET_DISTRO_UPGRADES,
    /**
     * Get available categories
     */
    GET_CATEGORIES,
    /**
     * Get old transation information
     */
    GET_OLD_TRANSACTIONS,
    /**
     * Repair system
     */
    REPAIR_SYSTEM,
    /**
     * Get details on local package
     */
    GET_DETAILS_LOCAL,
    /**
     * Get files provided by local package
     */
    GET_FILES_LOCAL,
    /**
     * Remove repository
     */
    REPO_REMOVE,
    /**
     * Upgrade system
     */
    UPGRADE_SYSTEM,
    LAST,
}
/**
 * The signature type type
 */
export enum SigTypeEnum {
    /**
     * Unkwown signature type
     */
    UNKNOWN,
    /**
     * GPG signature
     */
    GPG,
    LAST,
}
/**
 * What status we are now; this can change for each transaction giving a
 * status of what sort of thing is happening
 * Icons that change to represent the current status of the transaction will
 * use these constants
 * If you add to these, make sure you add filenames in gpk-watch.c also
 * 
 * A typical transaction will do:
 * - schedule task
 * WAIT
 * - run task
 * SETUP
 * - wait for lock
 * RUNNING
 * 
 * This means that backends should run pk_backend_set_status (backend, PK_STATUS_ENUM_RUNNING)
 * when they are ready to start running the transaction and after a lock has been got.
 */
export enum StatusEnum {
    /**
     * Unknown status
     */
    UNKNOWN,
    /**
     * Waiting
     */
    WAIT,
    /**
     * Setting up
     */
    SETUP,
    /**
     * Running
     */
    RUNNING,
    QUERY,
    INFO,
    /**
     * Removing
     */
    REMOVE,
    /**
     * Refreshing cache
     */
    REFRESH_CACHE,
    /**
     * Downloading
     */
    DOWNLOAD,
    /**
     * Installing
     */
    INSTALL,
    /**
     * Updating
     */
    UPDATE,
    /**
     * Cleaning up
     */
    CLEANUP,
    OBSOLETE,
    /**
     * Resolving dependencies
     */
    DEP_RESOLVE,
    /**
     * Checking signatures
     */
    SIG_CHECK,
    /**
     * Testing commit
     */
    TEST_COMMIT,
    /**
     * Committing
     */
    COMMIT,
    REQUEST,
    /**
     * Finished
     */
    FINISHED,
    /**
     * Cancelling
     */
    CANCEL,
    /**
     * Downloading respository
     */
    DOWNLOAD_REPOSITORY,
    /**
     * Donwloading package list
     */
    DOWNLOAD_PACKAGELIST,
    /**
     * Downloading file list
     */
    DOWNLOAD_FILELIST,
    /**
     * Downloading changelog information
     */
    DOWNLOAD_CHANGELOG,
    /**
     * Downloading group information
     */
    DOWNLOAD_GROUP,
    /**
     * Downloading update information
     */
    DOWNLOAD_UPDATEINFO,
    /**
     * Repackaging
     */
    REPACKAGING,
    /**
     * Loading cache
     */
    LOADING_CACHE,
    /**
     * Scanning for applications
     */
    SCAN_APPLICATIONS,
    /**
     * Generating package list
     */
    GENERATE_PACKAGE_LIST,
    /**
     * Waiting for lock
     */
    WAITING_FOR_LOCK,
    /**
     * Waiting for authentication/authorization
     */
    WAITING_FOR_AUTH,
    /**
     * Scanning running processes
     */
    SCAN_PROCESS_LIST,
    /**
     * Checking executable files
     */
    CHECK_EXECUTABLE_FILES,
    /**
     * Checking libraries
     */
    CHECK_LIBRARIES,
    /**
     * Copying files
     */
    COPY_FILES,
    /**
     * Running package hook
     */
    RUN_HOOK,
    LAST,
}
/**
 * The transaction flags that alter how the transaction is handled
 */
export enum TransactionFlagEnum {
    /**
     * No transaction flag
     */
    NONE,
    /**
     * Only allow trusted packages
     */
    ONLY_TRUSTED,
    /**
     * Simulate transaction
     */
    SIMULATE,
    /**
     * Only download packages
     */
    ONLY_DOWNLOAD,
    /**
     * Allow package reinstallation
     */
    ALLOW_REINSTALL,
    /**
     * Only allow package reinstallation
     */
    JUST_REINSTALL,
    /**
     * Allow packages to be downgraded
     */
    ALLOW_DOWNGRADE,
    LAST,
}
/**
 * What state the update is in
 */
export enum UpdateStateEnum {
    /**
     * Update stability unknown
     */
    UNKNOWN,
    /**
     * Update is a stable release
     */
    STABLE,
    /**
     * Update is an unstable release
     */
    UNSTABLE,
    /**
     * Update is a testing release
     */
    TESTING,
    LAST,
}
/**
 * The type of distribution upgrade to perform
 */
export enum UpgradeKindEnum {
    UNKNOWN,
    /**
     * Perform minimal upgrade
     */
    MINIMAL,
    /**
     * Perform default upgrade
     */
    DEFAULT,
    /**
     * Perform complete upgrade
     */
    COMPLETE,
    LAST,
}
/**
 * Flags to be used for the method invocations.
 * @bitfield 
 */
export enum OfflineFlags {
    /**
     * No specific flag
     */
    NONE,
    /**
     * Run the action in an interactive mode, allowing polkit authentication dialogs
     */
    INTERACTIVE,
}
/**
 * The DBUS interface used by the PackageKit service.
 */
export const DBUS_INTERFACE: string
/**
 * The DBUS interface for PackageKit offline update functionality
 */
export const DBUS_INTERFACE_OFFLINE: string
/**
 * The DBUS interface for PackageKit transactions.
 */
export const DBUS_INTERFACE_TRANSACTION: string
/**
 * The DBUS path to the PackageKit service.
 */
export const DBUS_PATH: string
/**
 * The DBUS name for the PackageKit system service.
 */
export const DBUS_SERVICE: string
/**
 * The default location for the desktop files
 */
export const DESKTOP_DEFAULT_APPLICATION_DIR: string
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const OFFLINE_DESTDIR: string
export const OFFLINE_RESULTS_GROUP: string
export const PACKAGE_IDS_DELIM: string
/**
 * Alias to get an arch field from the result of pk_package_id_split
 */
export const PACKAGE_ID_ARCH: number
/**
 * Alias to get a data field from the result of pk_package_id_split
 */
export const PACKAGE_ID_DATA: number
/**
 * Alias to get a name field from the result of pk_package_id_split
 */
export const PACKAGE_ID_NAME: number
/**
 * Alias to get a version field from the result of pk_package_id_split
 */
export const PACKAGE_ID_VERSION: number
export const SYSTEM_PACKAGE_CACHE_FILENAME: string
export const SYSTEM_PACKAGE_LIST_FILENAME: string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param authorizeType Text describing the enumerated type
 */
export function authorizeTypeEnumFromString(authorizeType: string): AuthorizeEnum
/**
 * Converts a enumerated type to its text representation
 * @param authorizeType The enumerated type value
 */
export function authorizeTypeEnumToString(authorizeType: AuthorizeEnum): string
/**
 * An error quark for #PkClientError.
 */
export function clientErrorQuark(): GLib.Quark
/**
 * We are a GObject that sets errors
 */
export function controlErrorQuark(): GLib.Quark
/**
 * Add a log domain to the debug output.
 * @param logDomain a log domain
 */
export function debugAddLogDomain(logDomain: string): void
/**
 * Check if verbose debugging is enabled.
 */
export function debugIsVerbose(): boolean
/**
 * Set if verbose debugging is enabled.
 * @param verbose %TRUE if verbose debugging should be enabled.
 */
export function debugSetVerbose(verbose: boolean): void
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgrade Text describing the enumerated type
 */
export function distroUpgradeEnumFromString(upgrade: string): DistroUpgradeEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgrade The enumerated type value
 */
export function distroUpgradeEnumToString(upgrade: DistroUpgradeEnum): string
/**
 * Search for a enum value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param value the enumerated constant value, e.g. PK_SIGTYPE_ENUM_GPG
 */
export function enumFindString(table: EnumMatch, value: number): string
/**
 * Search for a string value in a table of constants.
 * @param table A #PkEnumMatch enum table of values
 * @param string the string constant to search for, e.g. "desktop-gnome"
 */
export function enumFindValue(table: EnumMatch, string: string): number
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param code Text describing the enumerated type
 */
export function errorEnumFromString(code: string): ErrorEnum
/**
 * Converts a enumerated type to its text representation
 * @param code The enumerated type value
 */
export function errorEnumToString(code: ErrorEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param exit Text describing the enumerated type
 */
export function exitEnumFromString(exit: string): ExitEnum
/**
 * Converts a enumerated type to its text representation
 * @param exit The enumerated type value
 */
export function exitEnumToString(exit: ExitEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param filters the enumerated constant value, e.g. "available;~gui"
 */
export function filterBitfieldFromString(filters: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param filters The enumerated type values
 */
export function filterBitfieldToString(filters: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param filter Text describing the enumerated type
 */
export function filterEnumFromString(filter: string): FilterEnum
/**
 * Converts a enumerated type to its text representation
 * @param filter The enumerated type value
 */
export function filterEnumToString(filter: FilterEnum): string
/**
 * Get the distribution ID for the current host, typically "distro;version;arch"
 */
export function getDistroId(): string
/**
 * Converts text representation to its enumerated type bitfield
 * @param groups the enumerated constant value, e.g. "available;~gui"
 */
export function groupBitfieldFromString(groups: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param groups The enumerated type values
 */
export function groupBitfieldToString(groups: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param group Text describing the enumerated type
 */
export function groupEnumFromString(group: string): GroupEnum
/**
 * Converts a enumerated type to its text representation
 * @param group The enumerated type value
 */
export function groupEnumToString(group: GroupEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param info Text describing the enumerated type
 */
export function infoEnumFromString(info: string): InfoEnum
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 */
export function infoEnumToLocalisedPast(info: InfoEnum): string
/**
 * Converts a enumerated type to its localized description
 * @param info The enumerated type value
 */
export function infoEnumToLocalisedPresent(info: InfoEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param info The enumerated type value
 */
export function infoEnumToString(info: InfoEnum): string
/**
 * Convert a date into an ISO8601 data string.
 * @param date a #GDate to convert
 */
export function iso8601FromDate(date: GLib.Date): string
/**
 * Get the current date / time as an ISO8601 string.
 */
export function iso8601Present(): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param mediaType Text describing the enumerated type
 */
export function mediaTypeEnumFromString(mediaType: string): MediaTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param mediaType The enumerated type value
 */
export function mediaTypeEnumToString(mediaType: MediaTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param network Text describing the enumerated type
 */
export function networkEnumFromString(network: string): NetworkEnum
/**
 * Converts a enumerated type to its text representation
 * @param network The enumerated type value
 */
export function networkEnumToString(network: NetworkEnum): string
/**
 * Converts the string to the enumerated value.
 * @param action a string representation of a #PkOfflineAction, e.g. "reboot"
 */
export function offlineActionFromString(action: string): OfflineAction
/**
 * Converts the enumerated value to a string.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 */
export function offlineActionToString(action: OfflineAction): string
export function offlineAuthCancel(): boolean
export function offlineAuthClearResults(): boolean
export function offlineAuthInvalidate(): boolean
export function offlineAuthSetAction(action: OfflineAction): boolean
export function offlineAuthSetPreparedIds(packageIds: string): boolean
export function offlineAuthSetPreparedUpgrade(name: string, releaseVer: string): boolean
export function offlineAuthSetResults(results: Results): boolean
export function offlineAuthTrigger(action: OfflineAction): boolean
export function offlineAuthTriggerUpgrade(action: OfflineAction): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_cancel_with_flags().
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineCancel(cancellable: Gio.Cancellable | null): boolean
/**
 * Cancels the offline operation that has been scheduled. If there is no
 * scheduled offline operation then this method returns with success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineCancelWithFlags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_clear_results_with_flags().
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineClearResults(cancellable: Gio.Cancellable | null): boolean
/**
 * Clears the last offline operation report, which may be success or failure.
 * If the report does not exist then this method returns success.
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineClearResultsWithFlags(flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * An error quark for #PkOfflineError.
 */
export function offlineErrorQuark(): GLib.Quark
/**
 * Gets the action that will be taken after the offline action has completed.
 * 
 * An error is set if the the value %PK_OFFLINE_ACTION_UNKNOWN is returned.
 */
export function offlineGetAction(): OfflineAction
/**
 * Gets a file monitor for the trigger.
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineGetActionMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the package-ids in the prepared transaction.
 */
export function offlineGetPreparedIds(): string[]
/**
 * Gets a file monitor for the prepared transaction.
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineGetPreparedMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets a package sack of the packages in the prepared transaction.
 */
export function offlineGetPreparedSack(): PackageSack
export function offlineGetPreparedUpgrade(name: string, releaseVer: string): boolean
/**
 * Gets a file monitor for the prepared system upgrade transaction.
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineGetPreparedUpgradeMonitor(cancellable: Gio.Cancellable | null): Gio.FileMonitor
/**
 * Gets the name of the prepared system upgrade in the prepared transaction.
 */
export function offlineGetPreparedUpgradeName(): string
/**
 * Gets the version of the prepared system upgrade in the prepared transaction.
 */
export function offlineGetPreparedUpgradeVersion(): string
/**
 * Gets the last result of the offline transaction.
 */
export function offlineGetResults(): Results
/**
 * Gets the modification time of the prepared transaction.
 */
export function offlineGetResultsMtime(): number
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineTrigger(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * The function always allows user interaction. To change the behavior,
 * use pk_offline_trigger_upgrade_with_flags().
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineTriggerUpgrade(action: OfflineAction, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline system upgrade so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineTriggerUpgradeWithFlags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
/**
 * Triggers the offline update so that the next reboot will perform the
 * pending transaction.
 * @param action a #PkOfflineAction, e.g. %PK_OFFLINE_ACTION_REBOOT
 * @param flags bit-or of #PkOfflineFlags
 * @param cancellable A #GCancellable or %NULL
 */
export function offlineTriggerWithFlags(action: OfflineAction, flags: OfflineFlags, cancellable: Gio.Cancellable | null): boolean
export function polkitAgentClose(): void
export function polkitAgentOpen(): number
/**
 * Form a composite string array of strings.
 * The data in the GPtrArray is copied.
 * @param array the GPtrArray of strings
 */
export function ptrArrayToStrv(array: string[]): string[]
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param restart Text describing the enumerated type
 */
export function restartEnumFromString(restart: string): RestartEnum
/**
 * Converts a enumerated type to its text representation
 * @param restart The enumerated type value
 */
export function restartEnumToString(restart: RestartEnum): string
/**
 * Converts text representation to its enumerated type bitfield
 * @param roles the enumerated constant value, e.g. "search-file;update-system"
 */
export function roleBitfieldFromString(roles: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param roles The enumerated type values
 */
export function roleBitfieldToString(roles: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param role Text describing the enumerated type
 */
export function roleEnumFromString(role: string): RoleEnum
/**
 * Converts a enumerated type to its localized description
 * @param role The enumerated type value
 */
export function roleEnumToLocalisedPresent(role: RoleEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param role The enumerated type value
 */
export function roleEnumToString(role: RoleEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param sigType Text describing the enumerated type
 */
export function sigTypeEnumFromString(sigType: string): SigTypeEnum
/**
 * Converts a enumerated type to its text representation
 * @param sigType The enumerated type value
 */
export function sigTypeEnumToString(sigType: SigTypeEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param status Text describing the enumerated type
 */
export function statusEnumFromString(status: string): StatusEnum
export function statusEnumToLocalisedText(status: StatusEnum): string
/**
 * Converts a enumerated type to its text representation
 * @param status The enumerated type value
 */
export function statusEnumToString(status: StatusEnum): string
/**
 * Converts text representation to its enumerated type bitfield, or 0 for invalid
 * @param transactionFlags the enumerated constant value, e.g. "only-trusted;simulate"
 */
export function transactionFlagBitfieldFromString(transactionFlags: string): Bitfield
/**
 * Converts a enumerated type bitfield to its text representation
 * @param transactionFlags The enumerated type values
 */
export function transactionFlagBitfieldToString(transactionFlags: Bitfield): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param transactionFlag Text describing the enumerated type
 */
export function transactionFlagEnumFromString(transactionFlag: string): TransactionFlagEnum
/**
 * Converts a enumerated type to its text representation
 * @param transactionFlag The enumerated type value
 */
export function transactionFlagEnumToString(transactionFlag: TransactionFlagEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param updateState Text describing the enumerated type
 */
export function updateStateEnumFromString(updateState: string): UpdateStateEnum
/**
 * Converts a enumerated type to its text representation
 * @param updateState The enumerated type value
 */
export function updateStateEnumToString(updateState: UpdateStateEnum): string
/**
 * Converts a text enumerated type to its unsigned integer representation
 * @param upgradeKind Text describing the enumerated type
 */
export function upgradeKindEnumFromString(upgradeKind: string): UpgradeKindEnum
/**
 * Converts a enumerated type to its text representation
 * @param upgradeKind The enumerated type value
 */
export function upgradeKindEnumToString(upgradeKind: UpgradeKindEnum): string
/**
 * Function to filter packages in #PkPackageSack.
 * @callback 
 * @param package the package being considered
 */
export interface PackageSackFilterFunc {
    (package: Package): boolean
}
/**
 * Function that is called when progress updates are given.
 * @callback 
 * @param progress a #PkProgress
 * @param type the type of progress update this is
 */
export interface ProgressCallback {
    (progress: Progress, type: ProgressType): void
}
export module Category {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Category

        catId?: string | null
        icon?: string | null
        name?: string | null
        parentId?: string | null
        summary?: string | null
    }

}

export interface Category {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    catId: string
    icon: string
    name: string
    parentId: string
    summary: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Category

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Category

    /**
     * Gets the icon filename.
     */
    getIcon(): string
    /**
     * Gets the id specific to this category.
     */
    getId(): string
    /**
     * Gets the name.
     */
    getName(): string
    /**
     * Gets the parent category id.
     */
    getParentId(): string
    /**
     * Gets the summary.
     */
    getSummary(): string
    /**
     * Sets the icon filename.
     * @param icon the new value
     */
    setIcon(icon: string): void
    /**
     * Sets the id specific to this category.
     * @param catId the new value
     */
    setId(catId: string): void
    /**
     * Sets the name.
     * @param name the new value
     */
    setName(name: string): void
    /**
     * Sets the parent category id.
     * @param parentId the new value
     */
    setParentId(parentId: string): void
    /**
     * Sets the summary.
     * @param summary the new value
     */
    setSummary(summary: string): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Category

    connect(sigName: "notify::cat-id", callback: any): number
    on(sigName: "notify::cat-id", callback: any): number
    once(sigName: "notify::cat-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cat-id", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::parent-id", callback: any): number
    on(sigName: "notify::parent-id", callback: any): number
    once(sigName: "notify::parent-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-id", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Category extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Category

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Category

    constructor(config?: Category.ConstructorProperties) 
    constructor() 
    static new(): Category

    // Overloads of new

    static new(): Source
    _init(config?: Category.ConstructorProperties): void
}

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Client

        background?: boolean | null
        cacheAge?: number | null
        interactive?: boolean | null
        locale?: string | null
    }

}

export interface Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    background: boolean
    cacheAge: number
    readonly idle: boolean
    interactive: boolean
    locale: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Client

    parent: GObject.Object
    priv: ClientPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Client

    /**
     * We may want to agree to a EULA dialog if one is presented.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param eulaId the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    acceptEula(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * We may want to agree to a EULA dialog if one is presented.
     * @param eulaId the <literal>eula_id</literal> we are agreeing to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    acceptEulaAsync(eulaId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Adopt a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transactionId a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    adopt(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Adopt a transaction which allows the caller to monitor the state or cancel it.
     * @param transactionId a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    adoptAsync(transactionId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages that depend this one, i.e. child.parent.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for depends
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    dependsOn(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the packages that depend this one, i.e. child->parent.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for depends
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Downloads package files to a specified location.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    downloadPackages(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Downloads package files to a specified location.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the location where packages are to be downloaded
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    genericFinish(res: Gio.AsyncResult): Results
    /**
     * Gets the background value.
     */
    getBackground(): boolean
    /**
     * Gets the maximum cache age value.
     */
    getCacheAge(): number
    /**
     * Get a list of all categories supported.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getCategories(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get a list of all categories supported.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getDetails(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get details of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getDetailsLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get details of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDetailsLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getDistroUpgrades(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This method should return a list of distribution upgrades that are available.
     * It should not return updates, only major upgrades.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDistroUpgradesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getFiles(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the file list (i.e. a list of files installed) for the specified package.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get file list of a local package, so more information can be obtained for GUI
     * or command line tools.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getFilesLocal(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get file list of a package, so more information can be obtained for GUI
     * or command line tools.
     * @param files a null terminated array of filenames
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getFilesLocalAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets if the transaction client idle value.
     */
    getIdle(): boolean
    /**
     * Gets the client interactive value.
     */
    getInteractive(): boolean
    /**
     * Gets the locale used for this transaction.
     */
    getLocale(): string
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getOldTransactions(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the old transaction list, mainly used for the transaction viewer.
     * @param number the number of past transactions to return, or 0 for all
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getOldTransactionsAsync(number: number, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of packages from the backend
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getPackages(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the list of packages from the backend
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the progress of a transaction.
     * 
     * Warning: this function is synchronous, and will block. Do not use it in GUI
     * applications.
     * @param transactionId The transaction id
     * @param cancellable a #GCancellable or %NULL
     */
    getProgress(transactionId: string, cancellable: Gio.Cancellable | null): Progress
    /**
     * Find the current state of a transaction.
     * @param transactionId a transaction ID such as "/21_ebcbdaae_data"
     * @param cancellable a #GCancellable or %NULL
     * @param callbackReady the function to run on completion
     */
    getProgressAsync(transactionId: string, cancellable: Gio.Cancellable | null, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getProgressFinish(res: Gio.AsyncResult): Progress
    /**
     * Get the list of repositories installed on the system.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getRepoList(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the list of repositories installed on the system.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getUpdateDetail(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get details about the specific update, for instance any CVE urls and
     * severity information.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getUpdates(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get a list of all the packages that can be updated for all repositories.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_DEVELOPMENT or %PK_FILTER_ENUM_NONE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    installFiles(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param transactionFlags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installFilesAsync(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    installPackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a package of the newest and most correct version.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installPackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a software repository signature of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
     * @param keyId a key ID such as "0df23df"
     * @param packageId a signature_id structure such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    installSignature(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a software repository signature of the newest and most correct version.
     * @param type the signature type, e.g. %PK_SIGTYPE_ENUM_GPG
     * @param keyId a key ID such as "0df23df"
     * @param packageId a signature_id structure such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installSignatureAsync(type: SigTypeEnum, keyId: string, packageId: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Refresh the cache, i.e. download new metadata from a remote URL so that
     * package lists are up to date.
     * This action may take a few minutes and should be done when the session and
     * system are idle.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param force if we should aggressively drop caches
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    refreshCache(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Refresh the cache, i.e. download new metadata from a remote URL so that
     * package lists are up to date.
     * This action may take a few minutes and should be done when the session and
     * system are idle.
     * @param force if we should aggressively drop caches
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    removePackages(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    removePackagesAsync(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags if only trusted packages should be installed
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    repairSystem(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by the user using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repairSystemAsync(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Enable or disable the repository.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    repoEnable(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Enable or disable the repository.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param enabled if we should enable the repository
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Removes a repo and optionally the packages installed from it.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags transaction flags
     * @param repoId a repo_id structure such as "livna-devel"
     * @param autoremove If packages should be auto-removed
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    repoRemove(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Removes a repo and optionally the packages installed from it.
     * @param transactionFlags transaction flags
     * @param repoId a repo_id structure such as "livna-devel"
     * @param autoremove If packages should be auto-removed
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoRemoveAsync(transactionFlags: Bitfield, repoId: string, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * We may want to set a repository parameter.
     * NOTE: this is free text, and is left to the backend to define a format.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param parameter the parameter to change
     * @param value what we should change it to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    repoSetData(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * We may want to set a repository parameter.
     * NOTE: this is free text, and is left to the backend to define a format.
     * @param repoId a repo_id structure such as "livna-devel"
     * @param parameter the parameter to change
     * @param value what we should change it to
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoSetDataAsync(repoId: string, parameter: string, value: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages that require this one, i.e. parent.child.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for requires
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    requiredBy(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the packages that require this one, i.e. parent->child.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive If we should search recursively for requires
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Resolve a package name into a `package_id`. This can return installed and
     * available packages and allows you find out if a package is installed locally
     * or is available in a repository.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    resolve(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Resolve a package name into a `package_id`. This can return installed and
     * available packages and allows you find out if a package is installed locally
     * or is available in a repository.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param packages an array of package names to resolve, e.g. "gnome-system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Search all detailed summary information to try and find a keyword.
     * Think of this as pk_client_search_names(), but trying much harder and
     * taking longer.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchDetails(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Search all detailed summary information to try and find a keyword.
     * Think of this as pk_client_search_names(), but trying much harder and
     * taking longer.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Search for packages that provide a specific file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchFiles(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Search for packages that provide a specific file.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values file to search for, for instance, "/sbin/service"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Return all packages in a specific group.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchGroups(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Return all packages in a specific group.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a group enum to search for, for instance, "system-tools"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Search all the locally installed files and remote repositories for a package
     * that matches a specific name.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchNames(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Search all the locally installed files and remote repositories for a package
     * that matches a specific name.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values free text to search for, for instance, "power"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Sets the background value for the client. A background transaction
     * is usually scheduled at a lower priority and is usually given less
     * network and disk performance.
     * @param background if the transaction is a background transaction
     */
    setBackground(background: boolean): void
    /**
     * Sets the maximum cache age value for the client.
     * @param cacheAge the cache age to set, where %G_MAXUINT means "never"
     */
    setCacheAge(cacheAge: number): void
    /**
     * Sets the interactive value for the client. Interactive transactions
     * are usually allowed to ask the user questions.
     * @param interactive the value to set
     */
    setInteractive(interactive: boolean): void
    /**
     * Sets the locale to be used for the client. This may affect returned
     * results.
     * @param locale the locale to set, e.g. "en_GB.UTF-8"
     */
    setLocale(locale: string): void
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    updatePackages(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Update specific packages to the newest available versions.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    updatePackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will upgrade the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param transactionFlags transaction flags
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    upgradeSystem(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    upgradeSystemAsync(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This should return packages that provide the supplied attributes.
     * This method is useful for finding out what package(s) provide a modalias
     * or GStreamer codec string.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a search term such as "sound/mp3"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    whatProvides(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This should return packages that provide the supplied attributes.
     * This method is useful for finding out what package(s) provide a modalias
     * or GStreamer codec string.
     * @param filters a #PkBitfield such as %PK_FILTER_ENUM_GUI | %PK_FILTER_ENUM_FREE or %PK_FILTER_ENUM_NONE
     * @param values a search term such as "sound/mp3"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Client

    changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Client

    connect(sigName: "notify::background", callback: any): number
    on(sigName: "notify::background", callback: any): number
    once(sigName: "notify::background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: any): number
    on(sigName: "notify::cache-age", callback: any): number
    once(sigName: "notify::cache-age", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::idle", callback: any): number
    on(sigName: "notify::idle", callback: any): number
    once(sigName: "notify::idle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: any): number
    on(sigName: "notify::interactive", callback: any): number
    once(sigName: "notify::interactive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Client extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Client

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    constructor() 
    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
    static createHelperArgvEnvp(argv: string, envpOut: string): boolean
}

export module ClientHelper {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientHelper {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    parent: GObject.Object
    priv: ClientHelperPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    isActive(): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socketFilename a socket filename that does not already exist
     * @param argv the executable, along with any arguments
     * @param envp the environment
     */
    start(socketFilename: string, argv: string, envp: string): boolean
    /**
     * Starts the helper process, by running the helper process and setting
     * up the socket for use.
     * @param socket the (bound and listening) #GSocket instance to use
     * @param argv the executable, along with any arguments
     * @param envp the environment
     */
    startWithSocket(socket: Gio.Socket, argv: string, envp: string): boolean
    /**
     * Stops the helper process, by killing the helper process and deleting
     * the socket.
     */
    stop(): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClientHelper extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.ClientHelper

    constructor(config?: ClientHelper.ConstructorProperties) 
    constructor() 
    static new(): ClientHelper
    _init(config?: ClientHelper.ConstructorProperties): void
}

export module Control {

    // Signal callback interfaces

    /**
     * Signal callback interface for `repo-list-changed`
     */
    export interface RepoListChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `restart-schedule`
     */
    export interface RestartScheduleSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `transaction-list-changed`
     */
    export interface TransactionListChangedSignalCallback {
        (transactionIds: string[]): void
    }

    /**
     * Signal callback interface for `updates-changed`
     */
    export interface UpdatesChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Control

        backendAuthor?: string | null
        backendDescription?: string | null
        backendName?: string | null
        connected?: boolean | null
        distroId?: string | null
        filters?: number | null
        groups?: number | null
        locked?: boolean | null
        mimeTypes?: string[] | null
        networkState?: NetworkEnum | null
        provides?: number | null
        roles?: number | null
    }

}

export interface Control {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    backendAuthor: string
    backendDescription: string
    backendName: string
    connected: boolean
    distroId: string
    filters: number
    groups: number
    // Has conflict: locked: boolean
    mimeTypes: string[]
    networkState: NetworkEnum
    provides: number
    roles: number
    readonly versionMajor: number
    readonly versionMicro: number
    readonly versionMinor: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Control

    parent: GObject.Object
    priv: ControlPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Control

    /**
     * We may want to know before we run a method if we are going to be denied,
     * accepted or challenged for authentication.
     * @param actionId The action ID, for instance "org.freedesktop.PackageKit.install-untrusted"
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    canAuthorizeAsync(actionId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    canAuthorizeFinish(res: Gio.AsyncResult): AuthorizeEnum
    /**
     * Gets the debugging state from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getDaemonStateAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getDaemonStateFinish(res: Gio.AsyncResult): string
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    getProperties(cancellable: Gio.Cancellable | null): boolean
    /**
     * Gets global properties from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getPropertiesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getPropertiesFinish(res: Gio.AsyncResult): boolean
    /**
     * Gets a transacton ID from the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getTidAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getTidFinish(res: Gio.AsyncResult): string
    /**
     * We may want to know how long it has been since we refreshed the cache or
     * retrieved the update list.
     * @param role the role enum, e.g. %PK_ROLE_ENUM_GET_UPDATES
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getTimeSinceActionAsync(role: RoleEnum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getTimeSinceActionFinish(res: Gio.AsyncResult): number
    /**
     * Gets the transaction list in progress.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    getTransactionList(cancellable: Gio.Cancellable | null): string[]
    /**
     * Gets the transactions currently running in the daemon.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    getTransactionListAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getTransactionListFinish(res: Gio.AsyncResult): string[]
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxyHttp the HTTP proxy server
     * @param proxyFtp the FTP proxy server
     * @param cancellable a #GCancellable or %NULL
     */
    setProxy(proxyHttp: string, proxyFtp: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the network proxy to use in the daemon.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param proxyHttp the HTTP proxy server
     * @param proxyHttps the HTTPS proxy server
     * @param proxyFtp the FTP proxy server
     * @param proxySocks the SOCKS proxy server
     * @param noProxy the list of download IPs that shouldn't go through the proxy
     * @param pac the PAC string
     * @param cancellable a #GCancellable or %NULL
     */
    setProxy2(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set a proxy on the PK daemon
     * @param proxyHttp a HTTP proxy string such as "username:password`server`.lan:8080", or %NULL
     * @param proxyHttps a HTTPS proxy string such as "username:password`server`.lan:8080", or %NULL
     * @param proxyFtp a FTP proxy string such as "server.lan:8080", or %NULL
     * @param proxySocks a SOCKS proxy string such as "server.lan:8080", or %NULL
     * @param noProxy a list of download IPs that shouldn't go through the proxy, or %NULL
     * @param pac a PAC string, or %NULL
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    setProxy2Async(proxyHttp: string, proxyHttps: string, proxyFtp: string, proxySocks: string, noProxy: string, pac: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Set a proxy on the PK daemon
     * 
     * NOTE: This is just provided for backwards compatibility.
     * Clients should really be using pk_control_set_proxy2_async().
     * @param proxyHttp a HTTP proxy string such as "username:password`server`.lan:8080"
     * @param proxyFtp a FTP proxy string such as "server.lan:8080"
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    setProxyAsync(proxyHttp: string, proxyFtp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    setProxyFinish(res: Gio.AsyncResult): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    suggestDaemonQuit(cancellable: Gio.Cancellable | null): boolean
    /**
     * Suggests to the daemon that it should quit as soon as possible.
     * @param cancellable a #GCancellable or %NULL
     * @param callback the function to run on completion
     */
    suggestDaemonQuitAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    suggestDaemonQuitFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Control

    connectionChanged(connected: boolean): void
    locked(isLocked: boolean): void
    networkStateChanged(): void
    repoListChanged(): void
    restartSchedule(): void
    transactionListChanged(transactionIds: string): void
    updatesChanged(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): number
    on(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): number
    once(sigName: "repo-list-changed", callback: Control.RepoListChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "repo-list-changed", ...args: any[]): void
    connect(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): number
    on(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): number
    once(sigName: "restart-schedule", callback: Control.RestartScheduleSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "restart-schedule", ...args: any[]): void
    connect(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): number
    on(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): number
    once(sigName: "transaction-list-changed", callback: Control.TransactionListChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "transaction-list-changed", ...args: any[]): void
    connect(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): number
    on(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): number
    once(sigName: "updates-changed", callback: Control.UpdatesChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "updates-changed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Control

    connect(sigName: "notify::backend-author", callback: any): number
    on(sigName: "notify::backend-author", callback: any): number
    once(sigName: "notify::backend-author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backend-author", ...args: any[]): void
    connect(sigName: "notify::backend-description", callback: any): number
    on(sigName: "notify::backend-description", callback: any): number
    once(sigName: "notify::backend-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backend-description", ...args: any[]): void
    connect(sigName: "notify::backend-name", callback: any): number
    on(sigName: "notify::backend-name", callback: any): number
    once(sigName: "notify::backend-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backend-name", ...args: any[]): void
    connect(sigName: "notify::connected", callback: any): number
    on(sigName: "notify::connected", callback: any): number
    once(sigName: "notify::connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::distro-id", callback: any): number
    on(sigName: "notify::distro-id", callback: any): number
    once(sigName: "notify::distro-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::distro-id", ...args: any[]): void
    connect(sigName: "notify::filters", callback: any): number
    on(sigName: "notify::filters", callback: any): number
    once(sigName: "notify::filters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filters", ...args: any[]): void
    connect(sigName: "notify::groups", callback: any): number
    on(sigName: "notify::groups", callback: any): number
    once(sigName: "notify::groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::mime-types", callback: any): number
    on(sigName: "notify::mime-types", callback: any): number
    once(sigName: "notify::mime-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mime-types", ...args: any[]): void
    connect(sigName: "notify::network-state", callback: any): number
    on(sigName: "notify::network-state", callback: any): number
    once(sigName: "notify::network-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::network-state", ...args: any[]): void
    connect(sigName: "notify::provides", callback: any): number
    on(sigName: "notify::provides", callback: any): number
    once(sigName: "notify::provides", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provides", ...args: any[]): void
    connect(sigName: "notify::roles", callback: any): number
    on(sigName: "notify::roles", callback: any): number
    once(sigName: "notify::roles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::version-major", callback: any): number
    on(sigName: "notify::version-major", callback: any): number
    once(sigName: "notify::version-major", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version-major", ...args: any[]): void
    connect(sigName: "notify::version-micro", callback: any): number
    on(sigName: "notify::version-micro", callback: any): number
    once(sigName: "notify::version-micro", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version-micro", ...args: any[]): void
    connect(sigName: "notify::version-minor", callback: any): number
    on(sigName: "notify::version-minor", callback: any): number
    once(sigName: "notify::version-minor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version-minor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Control extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Control

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Control

    constructor(config?: Control.ConstructorProperties) 
    constructor() 
    static new(): Control
    _init(config?: Control.ConstructorProperties): void
}

export module Desktop {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Desktop {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Desktop

    parent: GObject.Object
    priv: DesktopPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Desktop

    /**
     * Return all desktop files owned by a package, regardless if they are shown
     * in the main menu or not.
     * @param package the package name, e.g. "gnome-power-manager"
     */
    getFilesForPackage(package: string): string[]
    /**
     * Returns the package name that owns the desktop file. Fast.
     * @param filename a fully qualified filename
     */
    getPackageForFile(filename: string): string
    /**
     * Return all desktop files owned by a package that would be shown in a menu,
     * i.e are an application
     * @param package the package name, e.g. "gnome-power-manager"
     */
    getShownForPackage(package: string): string[]
    /**
     * This method is unused and will be removed next time the library
     * soname changes!
     */
    openDatabase(): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Desktop

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Desktop extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Desktop

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Desktop

    constructor(config?: Desktop.ConstructorProperties) 
    /**
     * NOTE: This method is unused and will be removed next time the library
     * soname changes!
     * @constructor 
     */
    constructor() 
    /**
     * NOTE: This method is unused and will be removed next time the library
     * soname changes!
     * @constructor 
     */
    static new(): Desktop
    _init(config?: Desktop.ConstructorProperties): void
}

export module Details {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Details

        description?: string | null
        downloadSize?: number | null
        group?: GroupEnum | null
        license?: string | null
        packageId?: string | null
        size?: number | null
        summary?: string | null
        url?: string | null
    }

}

export interface Details {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    description: string
    downloadSize: number
    group: GroupEnum
    license: string
    packageId: string
    size: number
    summary: string
    url: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Details

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Details

    /**
     * Gets the description for the details object.
     */
    getDescription(): string
    /**
     * Gets the package download size.
     */
    getDownloadSize(): number
    /**
     * Gets the group for the details object.
     */
    getGroup(): GroupEnum
    /**
     * Gets the license for the details object.
     */
    getLicense(): string
    /**
     * Gets the PackageId for the details object.
     */
    getPackageId(): string
    /**
     * Gets the size for the details object: for installed packages it will return
     * the installed size, for the rest the package size.
     */
    getSize(): number
    /**
     * Gets the summary for the details object.
     */
    getSummary(): string
    /**
     * Gets the url for the details object.
     */
    getUrl(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Details

    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::download-size", callback: any): number
    on(sigName: "notify::download-size", callback: any): number
    once(sigName: "notify::download-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::download-size", ...args: any[]): void
    connect(sigName: "notify::group", callback: any): number
    on(sigName: "notify::group", callback: any): number
    once(sigName: "notify::group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Details extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Details

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Details

    constructor(config?: Details.ConstructorProperties) 
    constructor() 
    static new(): Details

    // Overloads of new

    static new(): Source
    _init(config?: Details.ConstructorProperties): void
}

export module DistroUpgrade {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

        name?: string | null
        state?: DistroUpgradeEnum | null
        summary?: string | null
    }

}

export interface DistroUpgrade {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    name: string
    state: DistroUpgradeEnum
    summary: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    /**
     * Gets the distribution identifier.
     * You use this value to call UpgradeSystem.
     */
    getId(): string
    /**
     * Gets the status of the distribution upgrade.
     */
    getState(): DistroUpgradeEnum
    /**
     * Gets the description of the distribution upgrade.
     */
    getSummary(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DistroUpgrade extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.DistroUpgrade

    constructor(config?: DistroUpgrade.ConstructorProperties) 
    constructor() 
    static new(): DistroUpgrade

    // Overloads of new

    static new(): Source
    _init(config?: DistroUpgrade.ConstructorProperties): void
}

export module Error {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Error

        code?: ErrorEnum | null
        details?: string | null
    }

}

export interface Error {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    code: ErrorEnum
    details: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Error

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Error

    /**
     * Get the error code for this error.
     */
    getCode(): ErrorEnum
    /**
     * Get details for this error.
     */
    getDetails(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Error

    connect(sigName: "notify::code", callback: any): number
    on(sigName: "notify::code", callback: any): number
    once(sigName: "notify::code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::code", ...args: any[]): void
    connect(sigName: "notify::details", callback: any): number
    on(sigName: "notify::details", callback: any): number
    once(sigName: "notify::details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Error extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Error

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Error

    constructor(config?: Error.ConstructorProperties) 
    constructor() 
    static new(): Error

    // Overloads of new

    static new(): Source
    _init(config?: Error.ConstructorProperties): void
}

export module EulaRequired {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

        /**
         * ID for this EULA.
         */
        eulaId?: string | null
        /**
         * The text of the license agreement.
         */
        licenseAgreement?: string | null
        /**
         * PackageID this EULA is for.
         */
        packageId?: string | null
        /**
         * Vendor this EULA is from.
         */
        vendorName?: string | null
    }

}

export interface EulaRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * ID for this EULA.
     */
    eulaId: string
    /**
     * The text of the license agreement.
     */
    licenseAgreement: string
    /**
     * PackageID this EULA is for.
     */
    packageId: string
    /**
     * Vendor this EULA is from.
     */
    vendorName: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    /**
     * Get the ID for this EULA
     */
    getEulaId(): string
    /**
     * Get the text of the license agreement.
     */
    getLicenseAgreement(): string
    /**
     * Get the PackageID this EULA is for
     */
    getPackageId(): string
    /**
     * Get the vendor this EULA is from.
     */
    getVendorName(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    connect(sigName: "notify::eula-id", callback: any): number
    on(sigName: "notify::eula-id", callback: any): number
    once(sigName: "notify::eula-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eula-id", ...args: any[]): void
    connect(sigName: "notify::license-agreement", callback: any): number
    on(sigName: "notify::license-agreement", callback: any): number
    once(sigName: "notify::license-agreement", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license-agreement", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::vendor-name", callback: any): number
    on(sigName: "notify::vendor-name", callback: any): number
    once(sigName: "notify::vendor-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vendor-name", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EulaRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.EulaRequired

    constructor(config?: EulaRequired.ConstructorProperties) 
    constructor() 
    static new(): EulaRequired

    // Overloads of new

    static new(): Source
    _init(config?: EulaRequired.ConstructorProperties): void
}

export module Files {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Files

        files?: string[] | null
        packageId?: string | null
    }

}

export interface Files {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    files: string[]
    packageId: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Files

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Files

    /**
     * Gets the file list
     */
    getFiles(): string[]
    /**
     * Gets the package-id
     */
    getPackageId(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Files

    connect(sigName: "notify::files", callback: any): number
    on(sigName: "notify::files", callback: any): number
    once(sigName: "notify::files", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Files extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Files

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Files

    constructor(config?: Files.ConstructorProperties) 
    constructor() 
    static new(): Files

    // Overloads of new

    static new(): Source
    _init(config?: Files.ConstructorProperties): void
}

export module ItemProgress {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

        packageId?: string | null
        percentage?: number | null
        status?: number | null
    }

}

export interface ItemProgress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    packageId: string
    percentage: number
    status: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    /**
     * Get the package ID this item is working on.
     */
    getPackageId(): string
    /**
     * Get the percentage complete of this item.
     */
    getPercentage(): number
    /**
     * Get the status of this item.
     */
    getStatus(): StatusEnum

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: any): number
    on(sigName: "notify::percentage", callback: any): number
    once(sigName: "notify::percentage", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ItemProgress extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.ItemProgress

    constructor(config?: ItemProgress.ConstructorProperties) 
    /**
     * An object containing item inside a #PkProgress.
     * @constructor 
     */
    constructor() 
    /**
     * An object containing item inside a #PkProgress.
     * @constructor 
     */
    static new(): ItemProgress

    // Overloads of new

    static new(): Source
    _init(config?: ItemProgress.ConstructorProperties): void
}

export module MediaChangeRequired {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

        mediaId?: string | null
        mediaText?: string | null
        mediaType?: MediaTypeEnum | null
    }

}

export interface MediaChangeRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    mediaId: string
    mediaText: string
    mediaType: MediaTypeEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    parent: Source & GObject.Object
    priv: any

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    connect(sigName: "notify::media-id", callback: any): number
    on(sigName: "notify::media-id", callback: any): number
    once(sigName: "notify::media-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-id", ...args: any[]): void
    connect(sigName: "notify::media-text", callback: any): number
    on(sigName: "notify::media-text", callback: any): number
    once(sigName: "notify::media-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-text", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: any): number
    on(sigName: "notify::media-type", callback: any): number
    once(sigName: "notify::media-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MediaChangeRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequired

    constructor(config?: MediaChangeRequired.ConstructorProperties) 
    constructor() 
    static new(): MediaChangeRequired

    // Overloads of new

    static new(): Source
    _init(config?: MediaChangeRequired.ConstructorProperties): void
}

export module Package {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Package

        description?: string | null
        group?: GroupEnum | null
        info?: InfoEnum | null
        license?: string | null
        size?: number | null
        summary?: string | null
        updateBugzillaUrls?: string[] | null
        updateChangelog?: string | null
        updateCveUrls?: string[] | null
        updateIssued?: string | null
        updateObsoletes?: string | null
        updateRestart?: RestartEnum | null
        /**
         * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
         * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
         */
        updateSeverity?: InfoEnum | null
        updateState?: UpdateStateEnum | null
        updateText?: string | null
        updateUpdated?: string | null
        updateUpdates?: string | null
        updateVendorUrls?: string[] | null
        url?: string | null
    }

}

export interface Package {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Package

    description: string
    group: GroupEnum
    info: InfoEnum
    license: string
    readonly packageId: string
    size: number
    summary: string
    updateBugzillaUrls: string[]
    updateChangelog: string
    updateCveUrls: string[]
    updateIssued: string
    updateObsoletes: string
    updateRestart: RestartEnum
    /**
     * Can be one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
     * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
     */
    updateSeverity: InfoEnum
    updateState: UpdateStateEnum
    updateText: string
    updateUpdated: string
    updateUpdates: string
    updateVendorUrls: string[]
    url: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Package

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Package

    /**
     * Do the #PkPackage's have the same ID.
     * @param package2 a valid #PkPackage instance
     */
    equal(package2: Package): boolean
    /**
     * Do the #PkPackage's have the same ID.
     * @param package2 a valid #PkPackage instance
     */
    equalId(package2: Package): boolean
    /**
     * Gets the package arch.
     */
    getArch(): string
    /**
     * Gets the package data, which is usually the repository ID that contains the
     * package. Special ID's include "installed" for installed packages, and "local"
     * for local packages that exist on disk but not in a repository.
     */
    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets the package object ID
     */
    getId(): string
    /**
     * Gets the package object ID
     */
    getInfo(): InfoEnum
    /**
     * Gets the package name.
     */
    getName(): string
    /**
     * Gets the package object ID
     */
    getSummary(): string
    /**
     * Returns the `package` update severity. Can be one of %PK_INFO_ENUM_UNKNOWN,
     * %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL, %PK_INFO_ENUM_IMPORTANT or
     * %PK_INFO_ENUM_CRITICAL.
     */
    getUpdateSeverity(): InfoEnum
    /**
     * Gets the package version.
     */
    getVersion(): string
    /**
     * Parses the data to populate the #PkPackage.
     * @param data the data describing the package
     */
    parse(data: string): boolean
    /**
     * Prints details about the package to standard out.
     */
    print(): void
    /**
     * Sets the package object to have the given ID
     * @param packageId the valid package_id
     */
    setId(packageId: string): boolean
    /**
     * Sets the package info enum.
     * @param info the #PkInfoEnum
     */
    setInfo(info: InfoEnum): void
    /**
     * Sets the package summary.
     * @param summary the package summary
     */
    setSummary(summary: string): void
    /**
     * Set an update severity for the `package`. The `update_severity` can be
     * one of %PK_INFO_ENUM_UNKNOWN, %PK_INFO_ENUM_LOW, %PK_INFO_ENUM_NORMAL,
     * %PK_INFO_ENUM_IMPORTANT or %PK_INFO_ENUM_CRITICAL.
     * @param updateSeverity a #PkInfoEnum
     */
    setUpdateSeverity(updateSeverity: InfoEnum): void

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Package

    changed(): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.Package

    connect(sigName: "changed", callback: Package.ChangedSignalCallback): number
    on(sigName: "changed", callback: Package.ChangedSignalCallback): number
    once(sigName: "changed", callback: Package.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Package

    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::group", callback: any): number
    on(sigName: "notify::group", callback: any): number
    once(sigName: "notify::group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group", ...args: any[]): void
    connect(sigName: "notify::info", callback: any): number
    on(sigName: "notify::info", callback: any): number
    once(sigName: "notify::info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::update-bugzilla-urls", callback: any): number
    on(sigName: "notify::update-bugzilla-urls", callback: any): number
    once(sigName: "notify::update-bugzilla-urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-bugzilla-urls", ...args: any[]): void
    connect(sigName: "notify::update-changelog", callback: any): number
    on(sigName: "notify::update-changelog", callback: any): number
    once(sigName: "notify::update-changelog", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-changelog", ...args: any[]): void
    connect(sigName: "notify::update-cve-urls", callback: any): number
    on(sigName: "notify::update-cve-urls", callback: any): number
    once(sigName: "notify::update-cve-urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-cve-urls", ...args: any[]): void
    connect(sigName: "notify::update-issued", callback: any): number
    on(sigName: "notify::update-issued", callback: any): number
    once(sigName: "notify::update-issued", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-issued", ...args: any[]): void
    connect(sigName: "notify::update-obsoletes", callback: any): number
    on(sigName: "notify::update-obsoletes", callback: any): number
    once(sigName: "notify::update-obsoletes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-obsoletes", ...args: any[]): void
    connect(sigName: "notify::update-restart", callback: any): number
    on(sigName: "notify::update-restart", callback: any): number
    once(sigName: "notify::update-restart", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-restart", ...args: any[]): void
    connect(sigName: "notify::update-severity", callback: any): number
    on(sigName: "notify::update-severity", callback: any): number
    once(sigName: "notify::update-severity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-severity", ...args: any[]): void
    connect(sigName: "notify::update-state", callback: any): number
    on(sigName: "notify::update-state", callback: any): number
    once(sigName: "notify::update-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-state", ...args: any[]): void
    connect(sigName: "notify::update-text", callback: any): number
    on(sigName: "notify::update-text", callback: any): number
    once(sigName: "notify::update-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-text", ...args: any[]): void
    connect(sigName: "notify::update-updated", callback: any): number
    on(sigName: "notify::update-updated", callback: any): number
    once(sigName: "notify::update-updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-updated", ...args: any[]): void
    connect(sigName: "notify::update-updates", callback: any): number
    on(sigName: "notify::update-updates", callback: any): number
    once(sigName: "notify::update-updates", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-updates", ...args: any[]): void
    connect(sigName: "notify::update-vendor-urls", callback: any): number
    on(sigName: "notify::update-vendor-urls", callback: any): number
    once(sigName: "notify::update-vendor-urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-vendor-urls", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Package extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Package

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Package

    constructor(config?: Package.ConstructorProperties) 
    constructor() 
    static new(): Package

    // Overloads of new

    static new(): Source
    _init(config?: Package.ConstructorProperties): void
    /**
     * Generate a PackageID.
     * @param name the package name
     * @param version the package version
     * @param arch the package architecture
     * @param data the package extra data
     */
    static idBuild(name: string, version: string, arch: string, data: string): string
    /**
     * Check if a Packageid is well formed.
     * @param packageId the PackageID to check
     */
    static idCheck(packageId: string): boolean
    /**
     * Only compare the name, version, and arch, where the architecture will fuzzy
     * match with i*86.
     * @param packageId1 the first PackageID
     * @param packageId2 the second PackageID
     */
    static idEqualFuzzyArch(packageId1: string, packageId2: string): boolean
    /**
     * Splits a PackageID into the correct number of parts, checking the correct
     * number of delimiters are present.
     * @param packageId the ; delimited PackageID to split
     */
    static idSplit(packageId: string): string[]
    /**
     * Formats the PackageID to be printable to the user.
     * @param packageId the PackageID
     */
    static idToPrintable(packageId: string): string
    /**
     * Adds a package_id to an existing list.
     * @param packageIds a string array of package_id's
     * @param packageId a single package_id
     */
    static idsAddId(packageIds: string, packageId: string): string[]
    /**
     * Adds a package_id to an existing list.
     * @param packageIds a string array of package_id's
     * @param packageIdsNew a string array of package_id's
     */
    static idsAddIds(packageIds: string, packageIdsNew: string): string[]
    /**
     * Check the string array of package_id's for validity
     * @param packageIds a string array of package_id's
     */
    static idsCheck(packageIds: string): boolean
    /**
     * Form a composite string array of package_id's from
     * a single package_id
     * @param packageId A single package_id
     */
    static idsFromId(packageId: string): string[]
    /**
     * Form a composite string array of package_id's from
     * a delimited string
     * @param packageId A single package_id
     */
    static idsFromString(packageId: string): string[]
    /**
     * Finds out if a package ID is present in the list.
     * @param packageIds a string array of package_id's
     * @param packageId a single package_id
     */
    static idsPresentId(packageIds: string, packageId: string): boolean
    /**
     * Removes a package ID from the the list.
     * @param packageIds a string array of package_id's
     * @param packageId a single package_id
     */
    static idsRemoveId(packageIds: string, packageId: string): string[]
    /**
     * Cats the string array of package_id's into one delimited string
     * @param packageIds a string array of package_id's
     */
    static idsToString(packageIds: string): string
}

export module PackageSack {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PackageSack {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    parent: GObject.Object
    priv: PackageSackPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    /**
     * Adds a package to the sack.
     * @param package a valid #PkPackage instance
     */
    addPackage(package: Package): boolean
    /**
     * Adds a package reference to the sack.
     * @param packageId a package_id descriptor
     */
    addPackageById(packageId: string): boolean
    /**
     * Adds packages from package-list file to a #PkPackageSack.
     * @param file a valid package-list file
     */
    addPackagesFromFile(file: Gio.File): boolean
    /**
     * Empty all the packages from the sack
     */
    clear(): void
    /**
     * Returns a new package sack which only matches packages that return %TRUE
     * from the filter function.
     * @param filterCb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to add
     */
    filter(filterCb: PackageSackFilterFunc): PackageSack
    /**
     * Returns a new package sack which only matches packages that match the
     * specified info enum value.
     * @param info a #PkInfoEnum value to match
     */
    filterByInfo(info: InfoEnum): PackageSack
    /**
     * Finds a package in a sack from reference. As soon as one package is found
     * the search is stopped.
     * @param packageId a package_id descriptor
     */
    findById(packageId: string): Package
    /**
     * Finds a package in a sack by package name and architecture. As soon as one
     * package is found the search is stopped.
     * @param packageId a package_id descriptor
     */
    findByIdNameArch(packageId: string): Package
    /**
     * Gets the package array from the sack
     */
    getArray(): Package[]
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    getDetails(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    getDetailsAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Returns all the Package IDs in the sack
     */
    getIds(): string[]
    /**
     * Gets the number of packages in the sack
     */
    getSize(): number
    /**
     * Gets the total size of the package sack in bytes.
     */
    getTotalBytes(): number
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    getUpdateDetail(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in update details about packages.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    getUpdateDetailAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    mergeGenericFinish(res: Gio.AsyncResult): boolean
    /**
     * Removes from the package sack any packages that return %FALSE from the filter
     * function.
     * @param filterCb a #PkPackageSackFilterFunc, which returns %TRUE for the #PkPackage's to retain
     */
    removeByFilter(filterCb: PackageSackFilterFunc): boolean
    /**
     * Removes a package reference from the sack. The pointers have to match exactly.
     * @param package a valid #PkPackage instance
     */
    removePackage(package: Package): boolean
    /**
     * Removes a package reference from the sack. As soon as one package is removed
     * the search is stopped.
     * @param packageId a package_id descriptor
     */
    removePackageById(packageId: string): boolean
    /**
     * Gets the properties the daemon supports.
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     */
    resolve(cancellable: Gio.Cancellable | null): boolean
    /**
     * Merges in details about packages using resolve.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callback the function to run on completion
     */
    resolveAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Sorts the package sack
     * @param type the type of sorting, e.g. #PK_PACKAGE_SACK_SORT_TYPE_NAME
     */
    sort(type: PackageSackSortType): void
    /**
     * Write the contents of a #PkPackageSack to a package-list file.
     * @param file a valid package-list file
     */
    toFile(file: Gio.File): boolean

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    changed(): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PackageSack extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.PackageSack

    constructor(config?: PackageSack.ConstructorProperties) 
    constructor() 
    static new(): PackageSack
    _init(config?: PackageSack.ConstructorProperties): void
}

export module Progress {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Progress

        /**
         * %TRUE if this transaction can be cancelled.
         */
        allowCancel?: boolean | null
        /**
         * %TRUE if the transaction caller is still connected.
         */
        callerActive?: boolean | null
        /**
         * Number of bytes remaining to download.
         */
        downloadSizeRemaining?: number | null
        /**
         * Amount of time the transaction has taken in seconds.
         */
        elapsedTime?: number | null
        /**
         * Item progress associated with this transaction.
         */
        itemProgress?: ItemProgress | null
        /**
         * The package this transaction is acting on.
         */
        package?: Package | null
        /**
         * Package ID this transaction is acting on.
         */
        packageId?: string | null
        /**
         * Percentage complete of this transaction.
         */
        percentage?: number | null
        /**
         * Amount of time the transaction will take to complete in seconds or 0 if unknown.
         */
        remainingTime?: number | null
        /**
         * Role of this transaction.
         */
        role?: number | null
        /**
         * Transaction speed in bits per second or 0 if unknown.
         */
        speed?: number | null
        /**
         * Status of this transaction.
         */
        status?: number | null
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
         */
        transactionFlags?: number | null
        /**
         * ID used by this transaction.
         */
        transactionId?: string | null
        /**
         * The UID that started this transaction.
         */
        uid?: number | null
    }

}

export interface Progress {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * %TRUE if this transaction can be cancelled.
     */
    allowCancel: boolean
    /**
     * %TRUE if the transaction caller is still connected.
     */
    callerActive: boolean
    /**
     * Number of bytes remaining to download.
     */
    downloadSizeRemaining: number
    /**
     * Amount of time the transaction has taken in seconds.
     */
    elapsedTime: number
    /**
     * Item progress associated with this transaction.
     */
    itemProgress: ItemProgress
    /**
     * The package this transaction is acting on.
     */
    package: Package
    /**
     * Package ID this transaction is acting on.
     */
    packageId: string
    /**
     * Percentage complete of this transaction.
     */
    percentage: number
    /**
     * Amount of time the transaction will take to complete in seconds or 0 if unknown.
     */
    remainingTime: number
    /**
     * Role of this transaction.
     */
    role: number
    /**
     * Transaction speed in bits per second or 0 if unknown.
     */
    speed: number
    /**
     * Status of this transaction.
     */
    status: number
    /**
     * A #PkBitfield containing #PkTransactionFlagEnum associated with this transaction.
     */
    transactionFlags: number
    /**
     * ID used by this transaction.
     */
    transactionId: string
    /**
     * The UID that started this transaction.
     */
    uid: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Progress

    parent: GObject.Object
    priv: ProgressPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Progress

    /**
     * Get if this transaction can be cancelled.
     */
    getAllowCancel(): boolean
    /**
     * Get if the transaction caller is connected.
     */
    getCallerActive(): boolean
    /**
     * Get the number of bytes remaining to download.
     */
    getDownloadSizeRemaining(): number
    /**
     * Get the amount of time the transaction has taken.
     */
    getElapsedTime(): number
    /**
     * Get the item progress associated with this transaction.
     */
    getItemProgress(): ItemProgress
    /**
     * Get the package this transaction is acting on.
     */
    getPackage(): Package
    /**
     * Get the package ID this transaction is acting on.
     */
    getPackageId(): string
    /**
     * Get the percentage complete.
     */
    getPercentage(): number
    /**
     * Get the amount of time the transaction will take to complete.
     */
    getRemainingTime(): number
    /**
     * Get the role of this transaction.
     */
    getRole(): RoleEnum
    /**
     * Get the speed of this transaction.
     */
    getSpeed(): number
    /**
     * Get the status of this transaction.
     */
    getStatus(): StatusEnum
    /**
     * Get the flags associated with this transaction.
     */
    getTransactionFlags(): number
    /**
     * Get the ID used by this transaction.
     */
    getTransactionId(): string
    /**
     * Get the UID that started this transaction.
     */
    getUid(): number
    /**
     * Set if this transaction can be cancelled.
     * @param allowCancel %TRUE if this transaction can be cancelled.
     */
    setAllowCancel(allowCancel: boolean): boolean
    /**
     * Set if the transaction caller is connected.
     * @param callerActive %TRUE if the transaction caller is still connected.
     */
    setCallerActive(callerActive: boolean): boolean
    /**
     * Set the number of bytes remaining to download.
     * @param downloadSizeRemaining number of bytes remaining to download.
     */
    setDownloadSizeRemaining(downloadSizeRemaining: number): boolean
    /**
     * Set the amount of time the transaction has taken.
     * @param elapsedTime time in seconds
     */
    setElapsedTime(elapsedTime: number): boolean
    /**
     * Set the item progress associated with this transaction.
     * @param itemProgress a #PkItemProgress
     */
    setItemProgress(itemProgress: ItemProgress): boolean
    /**
     * Set the package this transaction is acting on.
     * @param package a #PkPackage
     */
    setPackage(package: Package): boolean
    /**
     * Set the package ID this transaction is acting on.
     * @param packageId a PackageID
     */
    setPackageId(packageId: string): boolean
    /**
     * Set the percentage complete of this transaction.
     * @param percentage a percentage value (0-100)
     */
    setPercentage(percentage: number): boolean
    /**
     * Set the amount of time the transaction will take to complete.
     * @param remainingTime time in seconds or 0 if unknown.
     */
    setRemainingTime(remainingTime: number): boolean
    /**
     * Set the role of this transaction.
     * @param role a #PkRoleEnum
     */
    setRole(role: RoleEnum): boolean
    /**
     * Set the speed of this transaction.
     * @param speed speed in bits per second or 0 if unknown
     */
    setSpeed(speed: number): boolean
    /**
     * Set the status of this transaction.
     * @param status a #PkStatusEnum
     */
    setStatus(status: StatusEnum): boolean
    /**
     * Set the flags associated with this transaction.
     * @param transactionFlags a #PkBitfield containing #PkTransactionFlagEnum values.
     */
    setTransactionFlags(transactionFlags: number): boolean
    /**
     * Set the ID used by this transaction.
     * @param transactionId a transaction ID.
     */
    setTransactionId(transactionId: string): boolean
    /**
     * Set the UID that started this transaction.
     * @param uid a UID
     */
    setUid(uid: number): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Progress

    connect(sigName: "notify::allow-cancel", callback: any): number
    on(sigName: "notify::allow-cancel", callback: any): number
    once(sigName: "notify::allow-cancel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-cancel", ...args: any[]): void
    connect(sigName: "notify::caller-active", callback: any): number
    on(sigName: "notify::caller-active", callback: any): number
    once(sigName: "notify::caller-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caller-active", ...args: any[]): void
    connect(sigName: "notify::download-size-remaining", callback: any): number
    on(sigName: "notify::download-size-remaining", callback: any): number
    once(sigName: "notify::download-size-remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::download-size-remaining", ...args: any[]): void
    connect(sigName: "notify::elapsed-time", callback: any): number
    on(sigName: "notify::elapsed-time", callback: any): number
    once(sigName: "notify::elapsed-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::elapsed-time", ...args: any[]): void
    connect(sigName: "notify::item-progress", callback: any): number
    on(sigName: "notify::item-progress", callback: any): number
    once(sigName: "notify::item-progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::item-progress", ...args: any[]): void
    connect(sigName: "notify::package", callback: any): number
    on(sigName: "notify::package", callback: any): number
    once(sigName: "notify::package", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::percentage", callback: any): number
    on(sigName: "notify::percentage", callback: any): number
    once(sigName: "notify::percentage", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::percentage", ...args: any[]): void
    connect(sigName: "notify::remaining-time", callback: any): number
    on(sigName: "notify::remaining-time", callback: any): number
    once(sigName: "notify::remaining-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining-time", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::speed", callback: any): number
    on(sigName: "notify::speed", callback: any): number
    once(sigName: "notify::speed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::speed", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::transaction-flags", callback: any): number
    on(sigName: "notify::transaction-flags", callback: any): number
    once(sigName: "notify::transaction-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-flags", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: "notify::uid", callback: any): number
    on(sigName: "notify::uid", callback: any): number
    once(sigName: "notify::uid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Progress extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Progress

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Progress

    constructor(config?: Progress.ConstructorProperties) 
    /**
     * #PkProgress is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    constructor() 
    /**
     * #PkProgress is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    static new(): Progress
    _init(config?: Progress.ConstructorProperties): void
}

export module RepoDetail {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

        description?: string | null
        enabled?: boolean | null
        repoId?: string | null
    }

}

export interface RepoDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    description: string
    enabled: boolean
    repoId: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    /**
     * Gets the repository description.
     */
    getDescription(): string
    /**
     * Gets the repository enabled status.
     */
    getEnabled(): boolean
    /**
     * Gets the repository ID.
     */
    getId(): string

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::repo-id", callback: any): number
    on(sigName: "notify::repo-id", callback: any): number
    once(sigName: "notify::repo-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repo-id", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RepoDetail extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RepoDetail

    constructor(config?: RepoDetail.ConstructorProperties) 
    constructor() 
    static new(): RepoDetail

    // Overloads of new

    static new(): Source
    _init(config?: RepoDetail.ConstructorProperties): void
}

export module RepoSignatureRequired {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

        keyFingerprint?: string | null
        keyId?: string | null
        keyTimestamp?: string | null
        keyUrl?: string | null
        keyUserid?: string | null
        packageId?: string | null
        repositoryName?: string | null
        type?: SigTypeEnum | null
    }

}

export interface RepoSignatureRequired {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    keyFingerprint: string
    keyId: string
    keyTimestamp: string
    keyUrl: string
    keyUserid: string
    packageId: string
    repositoryName: string
    type: SigTypeEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    parent: Source & GObject.Object
    priv: any

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    connect(sigName: "notify::key-fingerprint", callback: any): number
    on(sigName: "notify::key-fingerprint", callback: any): number
    once(sigName: "notify::key-fingerprint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-fingerprint", ...args: any[]): void
    connect(sigName: "notify::key-id", callback: any): number
    on(sigName: "notify::key-id", callback: any): number
    once(sigName: "notify::key-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-id", ...args: any[]): void
    connect(sigName: "notify::key-timestamp", callback: any): number
    on(sigName: "notify::key-timestamp", callback: any): number
    once(sigName: "notify::key-timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-timestamp", ...args: any[]): void
    connect(sigName: "notify::key-url", callback: any): number
    on(sigName: "notify::key-url", callback: any): number
    once(sigName: "notify::key-url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-url", ...args: any[]): void
    connect(sigName: "notify::key-userid", callback: any): number
    on(sigName: "notify::key-userid", callback: any): number
    once(sigName: "notify::key-userid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key-userid", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::repository-name", callback: any): number
    on(sigName: "notify::repository-name", callback: any): number
    once(sigName: "notify::repository-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repository-name", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RepoSignatureRequired extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequired

    constructor(config?: RepoSignatureRequired.ConstructorProperties) 
    constructor() 
    static new(): RepoSignatureRequired

    // Overloads of new

    static new(): Source
    _init(config?: RepoSignatureRequired.ConstructorProperties): void
}

export module RequireRestart {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

        packageId?: string | null
        restart?: RestartEnum | null
    }

}

export interface RequireRestart {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    packageId: string
    restart: RestartEnum

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    parent: Source & GObject.Object
    priv: any

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::restart", callback: any): number
    on(sigName: "notify::restart", callback: any): number
    once(sigName: "notify::restart", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::restart", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RequireRestart extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.RequireRestart

    constructor(config?: RequireRestart.ConstructorProperties) 
    constructor() 
    static new(): RequireRestart

    // Overloads of new

    static new(): Source
    _init(config?: RequireRestart.ConstructorProperties): void
}

export module Results {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Results

        inputs?: number | null
        progress?: Progress | null
        /**
         * The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
         */
        role?: RoleEnum | null
        /**
         * A #PkBitfield containing #PkTransactionFlagEnum for this result.
         */
        transactionFlags?: number | null
    }

}

export interface Results {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Results

    inputs: number
    progress: Progress
    /**
     * The #PkRoleEnum or %PK_ROLE_ENUM_UNKNOWN if not set
     */
    role: RoleEnum
    /**
     * A #PkBitfield containing #PkTransactionFlagEnum for this result.
     */
    transactionFlags: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Results

    parent: GObject.Object
    priv: ResultsPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Results

    /**
     * Adds a category item to the results set.
     * @param item the object to add to the array
     */
    addCategory(item: Category): boolean
    /**
     * Adds some package details to the results set.
     * @param item the object to add to the array
     */
    addDetails(item: Details): boolean
    /**
     * Adds a distribution upgrade item to the results set.
     * @param item the object to add to the array
     */
    addDistroUpgrade(item: DistroUpgrade): boolean
    /**
     * Adds some EULA details to the results set.
     * @param item the object to add to the array
     */
    addEulaRequired(item: EulaRequired): boolean
    /**
     * Adds some files details to the results set.
     * @param item the object to add to the array
     */
    addFiles(item: Files): boolean
    /**
     * Adds some media change details to the results set.
     * @param item the object to add to the array
     */
    addMediaChangeRequired(item: MediaChangeRequired): boolean
    /**
     * Adds a package to the results set.
     * @param item the object to add to the array
     */
    addPackage(item: Package): boolean
    /**
     * Adds some repository details to the results set.
     * @param item the object to add to the array
     */
    addRepoDetail(item: RepoDetail): boolean
    /**
     * Adds some repository signature details to the results set.
     * @param item the object to add to the array
     */
    addRepoSignatureRequired(item: RepoSignatureRequired): boolean
    /**
     * Adds a require restart item to the results set.
     * @param item the object to add to the array
     */
    addRequireRestart(item: RequireRestart): boolean
    /**
     * Adds a transaction item to the results set.
     * @param item the object to add to the array
     */
    addTransaction(item: TransactionPast): boolean
    /**
     * Adds some update details to the results set.
     * @param item the object to add to the array
     */
    addUpdateDetail(item: UpdateDetail): boolean
    /**
     * Gets the categories from the transaction.
     */
    getCategoryArray(): Category[]
    /**
     * Gets the package details from the transaction.
     */
    getDetailsArray(): Details[]
    /**
     * Gets the distribution upgrades from the transaction.
     */
    getDistroUpgradeArray(): DistroUpgrade[]
    /**
     * Gets the last error code from the transaction.
     */
    getErrorCode(): Error
    /**
     * Gets the eulas required from the transaction.
     */
    getEulaRequiredArray(): EulaRequired[]
    /**
     * Gets the exit enum. You probably don't want to be using this function, and
     * instead using the much more useful pk_results_get_error_code() function.
     */
    getExitCode(): ExitEnum
    /**
     * Gets the files from the transaction.
     */
    getFilesArray(): Files[]
    /**
     * Gets the media changes required from the transaction.
     */
    getMediaChangeRequiredArray(): MediaChangeRequired[]
    /**
     * Gets the packages from the transaction.
     */
    getPackageArray(): Package[]
    /**
     * Gets a package sack from the transaction.
     */
    getPackageSack(): PackageSack
    /**
     * Gets the repository details from the transaction.
     */
    getRepoDetailArray(): RepoDetail[]
    /**
     * Gets the repository signatures required from the transaction.
     */
    getRepoSignatureRequiredArray(): RepoSignatureRequired[]
    /**
     * Gets the require restarts from the transaction.
     */
    getRequireRestartArray(): RequireRestart[]
    /**
     * This method returns the 'worst' restart of all the transactions.
     * It is needed as multiple sub-transactions may emit require-restart with
     * different values, and we always want to get the most invasive of all.
     * 
     * For instance, if a transaction emits RequireRestart(system) and then
     * RequireRestart(session) then pk_client_get_require_restart will return
     * system as a session restart is implied with a system restart.
     */
    getRequireRestartWorst(): RestartEnum
    /**
     * Gets the role that produced these results.
     */
    getRole(): RoleEnum
    /**
     * Gets the transactions from the transaction.
     */
    getTransactionArray(): TransactionPast[]
    /**
     * Gets the transaction flag for these results.
     */
    getTransactionFlags(): Bitfield
    /**
     * Gets the update details from the transaction.
     */
    getUpdateDetailArray(): UpdateDetail[]
    /**
     * Adds some error details to the results set.
     * @param item the object to add to the array
     */
    setErrorCode(item: Error): boolean
    /**
     * Sets the results object to have the given exit code.
     * @param exitEnum the exit code
     */
    setExitCode(exitEnum: ExitEnum): boolean
    /**
     * Sets the results object to have the given role enum.
     * @param role the role enum
     */
    setRole(role: RoleEnum): boolean

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Results

    connect(sigName: "notify::inputs", callback: any): number
    on(sigName: "notify::inputs", callback: any): number
    once(sigName: "notify::inputs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inputs", ...args: any[]): void
    connect(sigName: "notify::progress", callback: any): number
    on(sigName: "notify::progress", callback: any): number
    once(sigName: "notify::progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-flags", callback: any): number
    on(sigName: "notify::transaction-flags", callback: any): number
    once(sigName: "notify::transaction-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Results extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Results

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Results

    constructor(config?: Results.ConstructorProperties) 
    constructor() 
    static new(): Results
    _init(config?: Results.ConstructorProperties): void
}

export module Source {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Source

        role?: RoleEnum | null
        transactionId?: string | null
    }

}

export interface Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    role: RoleEnum
    transactionId: string

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Source

    parent: GObject.Object
    priv: SourcePrivate

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Source

    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Source extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Source

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Source

    constructor(config?: Source.ConstructorProperties) 
    constructor() 
    static new(): Source
    _init(config?: Source.ConstructorProperties): void
}

export module Task {

    // Constructor properties interface

    export interface ConstructorProperties extends Client.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.Task

        /**
         * %TRUE if package downgrades are allowed.
         */
        allowDowngrade?: boolean | null
        /**
         * %TRUE if package reinstallation shall be allowed during transaction.
         */
        allowReinstall?: boolean | null
        /**
         * %TRUE if we are just preparing the transaction for later.
         */
        onlyDownload?: boolean | null
        /**
         * %TRUE if only authenticated packages should be allowed in the transaction.
         */
        onlyTrusted?: boolean | null
        /**
         * %TRUE if we are simulating.
         */
        simulate?: boolean | null
    }

}

export interface Task {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Task

    /**
     * %TRUE if package downgrades are allowed.
     */
    allowDowngrade: boolean
    /**
     * %TRUE if package reinstallation shall be allowed during transaction.
     */
    allowReinstall: boolean
    /**
     * %TRUE if we are just preparing the transaction for later.
     */
    onlyDownload: boolean
    /**
     * %TRUE if only authenticated packages should be allowed in the transaction.
     */
    onlyTrusted: boolean
    /**
     * %TRUE if we are simulating.
     */
    simulate: boolean

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.Task

    parent: Client & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.Task

    /**
     * Get the list of dependant packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    dependsOnAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of dependent packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should recurse to packages that depend on other packages
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    dependsOnSync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Downloads packages
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    downloadPackagesAsync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Downloads packages
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param directory the destination directory
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    downloadPackagesSync(packageIds: string[], directory: string, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    genericFinish(res: Gio.AsyncResult): Results
    /**
     * Gets if we are allow packages to be downgraded.
     */
    getAllowDowngrade(): boolean
    /**
     * Gets if we allow packages to be reinstalled.
     */
    getAllowReinstall(): boolean
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getCategoriesAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the categories available.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getCategoriesSync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets details about packages.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getDetailsAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets details about packages.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getDetailsSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the files in a package.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getFilesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the files in a package.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getFilesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets if we are just preparing the transaction for later.
     */
    getOnlyDownload(): boolean
    /**
     * Gets if we allow only authenticated packages in the transactoin.
     */
    getOnlyTrusted(): boolean
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getPackagesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the list of packages.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getPackagesSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getRepoListAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the list of available repositories.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getRepoListSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets if we are simulating.
     */
    getSimulate(): boolean
    /**
     * Gets details about updates.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdateDetailAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets details about updates.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getUpdateDetailSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    getUpdatesAsync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the update lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    getUpdatesSync(filters: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installFilesAsync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of installFilesAsync

    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * @param transactionFlags a transaction type bitfield
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installFilesAsync(transactionFlags: Bitfield, files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a file locally, and get the deps from the repositories.
     * This is useful for double clicking on a .rpm or .deb file.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param files a file such as "/home/hughsie/Desktop/hal-devel-0.10.0.rpm"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    installFilesSync(files: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Merges in details about packages using resolve.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installPackagesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of installPackagesAsync

    /**
     * Install a package of the newest and most correct version.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    installPackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Install a package of the newest and most correct version.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    installPackagesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    refreshCacheAsync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Refresh the package cache.
     * @param force if the metadata should be deleted and re-downloaded even if it is correct
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    refreshCacheSync(force: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    removePackagesAsync(packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of removePackagesAsync

    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    removePackagesAsync(transactionFlags: Bitfield, packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Remove a package (optionally with dependancies) from the system.
     * If `allow_deps` is set to %FALSE, and other packages would have to be removed,
     * then the transaction would fail.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param allowDeps if other dependent packages are allowed to be removed from the computer
     * @param autoremove if other packages installed at the same time should be tried to remove
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    removePackagesSync(packageIds: string[], allowDeps: boolean, autoremove: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Recover the system from broken dependencies and aborted installations.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repairSystemAsync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of repairSystemAsync

    /**
     * This transaction will try to recover from a broken package management system:
     * e.g. the installation of a package with unsatisfied dependencies has
     * been forced by the user using a low level tool (rpm or dpkg) or the
     * system was shutdown during processing an installation.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repairSystemAsync(transactionFlags: Bitfield, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Recover from broken dependencies of installed packages or incomplete
     * installations.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    repairSystemSync(cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Enable or disable a specific repo.
     * @param repoId The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    repoEnableAsync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Enable or disable a specific repo.
     * @param repoId The software repository ID
     * @param enabled %TRUE or %FALSE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    repoEnableSync(repoId: string, enabled: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    requiredByAsync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Get the packages this package requires.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param recursive if we should return packages that depend on the ones we do
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    requiredBySync(filters: Bitfield, packageIds: string[], recursive: boolean, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    resolveAsync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Resolves a package name to a package-id.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param packages package names to find
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    resolveSync(filters: Bitfield, packages: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchDetailsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for some package details.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchDetailsSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchFilesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for specific files.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchFilesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchGroupsAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches the group lists.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchGroupsSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    searchNamesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Searches for a package name.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values search values
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    searchNamesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * If package downgrades shall be allowed during transaction.
     * @param allowDowngrade %TRUE to allow packages to be downgraded.
     */
    setAllowDowngrade(allowDowngrade: boolean): void
    /**
     * If package reinstallation shall be allowed during transaction.
     * @param allowReinstall %TRUE to allow packages to be reinstalled.
     */
    setAllowReinstall(allowReinstall: boolean): void
    /**
     * If the transaction should be prepared (depsolved, packages
     * downloaded, etc) but not committed.
     * @param onlyDownload %FALSE to actually commit the transaction
     */
    setOnlyDownload(onlyDownload: boolean): void
    /**
     * If only authenticated packages should be allowed in the
     * transaction.
     * @param onlyTrusted %TRUE to allow only authenticated packages
     */
    setOnlyTrusted(onlyTrusted: boolean): void
    /**
     * If the simulate step should be run without the actual transaction.
     * @param simulate the simulate mode
     */
    setSimulate(simulate: boolean): void
    /**
     * Update specific packages to the newest available versions.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    updatePackagesAsync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of updatePackagesAsync

    /**
     * Update specific packages to the newest available versions.
     * @param transactionFlags a transaction type bitfield
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    updatePackagesAsync(transactionFlags: Bitfield, packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Update specific packages to the newest available versions.
     * 
     * Warning: this function is synchronous, and may block. Do not use it in GUI
     * applications.
     * @param packageIds a null terminated array of package_id structures such as "hal;0.0.1;i386;fedora"
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    updatePackagesSync(packageIds: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    upgradeSystemAsync(distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void

    // Overloads of upgradeSystemAsync

    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param transactionFlags a transaction type bitfield
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    upgradeSystemAsync(transactionFlags: Bitfield, distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * This transaction will update the distro to the next version, which may
     * involve just downloading the installer and setting up the boot device,
     * or may involve doing an on-line upgrade.
     * 
     * The backend will decide what is best to do.
     * @param distroId a distro ID such as "fedora-14"
     * @param upgradeKind a #PkUpgradeKindEnum such as %PK_UPGRADE_KIND_ENUM_COMPLETE
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    upgradeSystemSync(distroId: string, upgradeKind: UpgradeKindEnum, cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results
    /**
     * Mark a EULA as accepted by the user.
     * @param request request ID for EULA.
     */
    userAccepted(request: number): boolean
    /**
     * Mark a EULA as declined by the user.
     * @param request request ID for EULA.
     */
    userDeclined(request: number): boolean
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     * @param callbackReady the function to run on completion
     */
    whatProvidesAsync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback, callbackReady: Gio.AsyncReadyCallback | null): void
    /**
     * Find the package that provides some resource.
     * @param filters a bitfield of filters that can be used to limit the results
     * @param values values to search for
     * @param cancellable a #GCancellable or %NULL
     * @param progressCallback the function to run when the progress changes
     */
    whatProvidesSync(filters: Bitfield, values: string[], cancellable: Gio.Cancellable | null, progressCallback: ProgressCallback): Results

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.Task

    eulaQuestion(request: number, results: Results): void
    keyQuestion(request: number, results: Results): void
    mediaChangeQuestion(request: number, results: Results): void
    repairQuestion(request: number, results: Results): void
    simulateQuestion(request: number, results: Results): void
    untrustedQuestion(request: number, results: Results): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.Task

    connect(sigName: "notify::allow-downgrade", callback: any): number
    on(sigName: "notify::allow-downgrade", callback: any): number
    once(sigName: "notify::allow-downgrade", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-downgrade", ...args: any[]): void
    connect(sigName: "notify::allow-reinstall", callback: any): number
    on(sigName: "notify::allow-reinstall", callback: any): number
    once(sigName: "notify::allow-reinstall", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-reinstall", ...args: any[]): void
    connect(sigName: "notify::only-download", callback: any): number
    on(sigName: "notify::only-download", callback: any): number
    once(sigName: "notify::only-download", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::only-download", ...args: any[]): void
    connect(sigName: "notify::only-trusted", callback: any): number
    on(sigName: "notify::only-trusted", callback: any): number
    once(sigName: "notify::only-trusted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::only-trusted", ...args: any[]): void
    connect(sigName: "notify::simulate", callback: any): number
    on(sigName: "notify::simulate", callback: any): number
    once(sigName: "notify::simulate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simulate", ...args: any[]): void
    connect(sigName: "notify::background", callback: any): number
    on(sigName: "notify::background", callback: any): number
    once(sigName: "notify::background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background", ...args: any[]): void
    connect(sigName: "notify::cache-age", callback: any): number
    on(sigName: "notify::cache-age", callback: any): number
    once(sigName: "notify::cache-age", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-age", ...args: any[]): void
    connect(sigName: "notify::idle", callback: any): number
    on(sigName: "notify::idle", callback: any): number
    once(sigName: "notify::idle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::interactive", callback: any): number
    on(sigName: "notify::interactive", callback: any): number
    once(sigName: "notify::interactive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::interactive", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Task extends Client {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.Task

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.Task

    constructor(config?: Task.ConstructorProperties) 
    constructor() 
    static new(): Task

    // Overloads of new

    /**
     * #PkClient is a nice GObject wrapper for PackageKit and makes writing
     * frontends easy.
     * @constructor 
     */
    static new(): Client
    _init(config?: Task.ConstructorProperties): void
}

export module TransactionList {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    export interface AddedSignalCallback {
        (tid: string): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (tid: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TransactionList {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    parent: GObject.Object
    priv: TransactionListPrivate

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    /**
     * Gets the string lists of transaction IDs recognised as pending, running or finished by the daemon.
     */
    getIds(): string[]

    // Own virtual methods of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    added(tid: string): void
    removed(tid: string): void

    // Own signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    connect(sigName: "added", callback: TransactionList.AddedSignalCallback): number
    on(sigName: "added", callback: TransactionList.AddedSignalCallback): number
    once(sigName: "added", callback: TransactionList.AddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "added", ...args: any[]): void
    connect(sigName: "removed", callback: TransactionList.RemovedSignalCallback): number
    on(sigName: "removed", callback: TransactionList.RemovedSignalCallback): number
    once(sigName: "removed", callback: TransactionList.RemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TransactionList extends GObject.Object {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.TransactionList

    constructor(config?: TransactionList.ConstructorProperties) 
    constructor() 
    static new(): TransactionList
    _init(config?: TransactionList.ConstructorProperties): void
}

export module TransactionPast {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

        cmdline?: string | null
        data?: string | null
        duration?: number | null
        role?: RoleEnum | null
        succeeded?: boolean | null
        tid?: string | null
        timespec?: string | null
        uid?: number | null
    }

}

export interface TransactionPast {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    cmdline: string
    data: string
    duration: number
    role: RoleEnum
    succeeded: boolean
    tid: string
    timespec: string
    uid: number

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    /**
     * Gets the past transaction cmdline value;
     */
    getCmdline(): string
    /**
     * Gets the past transaction data;
     */
    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets the past transaction date & time value;
     */
    getDatetime(): GLib.DateTime
    /**
     * Gets the past transaction duration;
     */
    getDuration(): number
    /**
     * Gets the past transaction ID value;
     */
    getId(): string
    /**
     * Gets the past transaction role;
     */
    getRole(): RoleEnum
    /**
     * Gets the past transaction succeeded value;
     */
    getSucceeded(): boolean
    /**
     * Gets the past transaction timespec value;
     */
    getTimespec(): string
    /**
     * Gets the past transaction timestamp
     */
    getTimestamp(): number
    /**
     * Gets the past transaction uid;
     */
    getUid(): number

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    connect(sigName: "notify::cmdline", callback: any): number
    on(sigName: "notify::cmdline", callback: any): number
    once(sigName: "notify::cmdline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cmdline", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::succeeded", callback: any): number
    on(sigName: "notify::succeeded", callback: any): number
    once(sigName: "notify::succeeded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::succeeded", ...args: any[]): void
    connect(sigName: "notify::tid", callback: any): number
    on(sigName: "notify::tid", callback: any): number
    once(sigName: "notify::tid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tid", ...args: any[]): void
    connect(sigName: "notify::timespec", callback: any): number
    on(sigName: "notify::timespec", callback: any): number
    once(sigName: "notify::timespec", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timespec", ...args: any[]): void
    connect(sigName: "notify::uid", callback: any): number
    on(sigName: "notify::uid", callback: any): number
    once(sigName: "notify::uid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TransactionPast extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.TransactionPast

    constructor(config?: TransactionPast.ConstructorProperties) 
    constructor() 
    static new(): TransactionPast

    // Overloads of new

    static new(): Source
    _init(config?: TransactionPast.ConstructorProperties): void
}

export module UpdateDetail {

    // Constructor properties interface

    export interface ConstructorProperties extends Source.ConstructorProperties {

        // Own constructor properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

        bugzillaUrls?: string[] | null
        changelog?: string | null
        cveUrls?: string[] | null
        issued?: string | null
        obsoletes?: string[] | null
        packageId?: string | null
        restart?: RestartEnum | null
        state?: UpdateStateEnum | null
        updateText?: string | null
        updated?: string | null
        updates?: string[] | null
        vendorUrls?: string[] | null
    }

}

export interface UpdateDetail {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    bugzillaUrls: string[]
    changelog: string
    cveUrls: string[]
    issued: string
    obsoletes: string[]
    packageId: string
    restart: RestartEnum
    state: UpdateStateEnum
    updateText: string
    updated: string
    updates: string[]
    vendorUrls: string[]

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    parent: Source & GObject.Object
    priv: any

    // Owm methods of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    /**
     * Gets the update detail bugzilla URLs.
     */
    getBugzillaUrls(): string[]
    /**
     * Gets the update detail changelog.
     */
    getChangelog(): string
    /**
     * Gets the update detail CVE URLs.
     */
    getCveUrls(): string[]
    /**
     * Gets the update detail issued string.
     */
    getIssued(): string
    /**
     * Gets the update detail obsoletes IDs.
     */
    getObsoletes(): string[]
    /**
     * Gets the update detail package ID.
     */
    getPackageId(): string
    /**
     * Gets the update detail restart kind.
     */
    getRestart(): RestartEnum
    /**
     * Gets the update detail state.
     */
    getState(): UpdateStateEnum
    /**
     * Gets the update detail update text.
     */
    getUpdateText(): string
    /**
     * Gets the update detail updated string.
     */
    getUpdated(): string
    /**
     * Gets the update detail updates IDs.
     */
    getUpdates(): string[]
    /**
     * Gets the update detail vendor URLs.
     */
    getVendorUrls(): string[]

    // Class property signals of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    connect(sigName: "notify::bugzilla-urls", callback: any): number
    on(sigName: "notify::bugzilla-urls", callback: any): number
    once(sigName: "notify::bugzilla-urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bugzilla-urls", ...args: any[]): void
    connect(sigName: "notify::changelog", callback: any): number
    on(sigName: "notify::changelog", callback: any): number
    once(sigName: "notify::changelog", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::changelog", ...args: any[]): void
    connect(sigName: "notify::cve-urls", callback: any): number
    on(sigName: "notify::cve-urls", callback: any): number
    once(sigName: "notify::cve-urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cve-urls", ...args: any[]): void
    connect(sigName: "notify::issued", callback: any): number
    on(sigName: "notify::issued", callback: any): number
    once(sigName: "notify::issued", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::issued", ...args: any[]): void
    connect(sigName: "notify::obsoletes", callback: any): number
    on(sigName: "notify::obsoletes", callback: any): number
    once(sigName: "notify::obsoletes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::obsoletes", ...args: any[]): void
    connect(sigName: "notify::package-id", callback: any): number
    on(sigName: "notify::package-id", callback: any): number
    once(sigName: "notify::package-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::package-id", ...args: any[]): void
    connect(sigName: "notify::restart", callback: any): number
    on(sigName: "notify::restart", callback: any): number
    once(sigName: "notify::restart", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::restart", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::update-text", callback: any): number
    on(sigName: "notify::update-text", callback: any): number
    once(sigName: "notify::update-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-text", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::updates", callback: any): number
    on(sigName: "notify::updates", callback: any): number
    once(sigName: "notify::updates", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updates", ...args: any[]): void
    connect(sigName: "notify::vendor-urls", callback: any): number
    on(sigName: "notify::vendor-urls", callback: any): number
    once(sigName: "notify::vendor-urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vendor-urls", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::transaction-id", callback: any): number
    on(sigName: "notify::transaction-id", callback: any): number
    once(sigName: "notify::transaction-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transaction-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class UpdateDetail extends Source {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    static name: string

    // Constructors of PackageKitGlib-1.0.PackageKitGlib.UpdateDetail

    constructor(config?: UpdateDetail.ConstructorProperties) 
    constructor() 
    static new(): UpdateDetail

    // Overloads of new

    static new(): Source
    _init(config?: UpdateDetail.ConstructorProperties): void
}

export interface CategoryClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.CategoryClass

    parentClass: SourceClass
}

export abstract class CategoryClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.CategoryClass

    static name: string
}

export interface CategoryPrivate {
}

/**
 * Private #PkCategory data
 * @record 
 */
export class CategoryPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.CategoryPrivate

    static name: string
}

export interface ClientClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientClass

    parentClass: GObject.ObjectClass
    changed: (client: Client) => void
}

export abstract class ClientClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientClass

    static name: string
}

export interface ClientHelperClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientHelperClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelperClass

    static name: string
}

export interface ClientHelperPrivate {
}

/**
 * Private #PkClientHelper data
 * @record 
 */
export class ClientHelperPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientHelperPrivate

    static name: string
}

export interface ClientPrivate {
}

/**
 * Private #PkClient data
 * @record 
 */
export class ClientPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ClientPrivate

    static name: string
}

export interface ControlClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ControlClass

    parentClass: GObject.ObjectClass
    transactionListChanged: (control: Control, transactionIds: string) => void
    updatesChanged: (control: Control) => void
    repoListChanged: (control: Control) => void
    networkStateChanged: (control: Control) => void
    restartSchedule: (control: Control) => void
    locked: (control: Control, isLocked: boolean) => void
    connectionChanged: (control: Control, connected: boolean) => void
}

export abstract class ControlClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ControlClass

    static name: string
}

export interface ControlPrivate {
}

/**
 * Private #PkControl data
 * @record 
 */
export class ControlPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ControlPrivate

    static name: string
}

export interface DesktopClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DesktopClass

    parentClass: GObject.ObjectClass
}

export abstract class DesktopClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DesktopClass

    static name: string
}

export interface DesktopPrivate {
}

/**
 * Private #PkDesktop data
 * @record 
 */
export class DesktopPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DesktopPrivate

    static name: string
}

export interface DetailsClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DetailsClass

    parentClass: SourceClass
}

export abstract class DetailsClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DetailsClass

    static name: string
}

export interface DetailsPrivate {
}

/**
 * Private #PkDetails data
 * @record 
 */
export class DetailsPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DetailsPrivate

    static name: string
}

export interface DistroUpgradeClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass

    parentClass: SourceClass
}

export abstract class DistroUpgradeClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradeClass

    static name: string
}

export interface DistroUpgradePrivate {
}

/**
 * Private #PkDistroUpgrade data
 * @record 
 */
export class DistroUpgradePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.DistroUpgradePrivate

    static name: string
}

export interface EnumMatch {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EnumMatch

    /**
     * enumerated value
     * @field 
     */
    value: number
    /**
     * string for given value
     * @field 
     */
    string: string
}

/**
 * Matching an enumerated type to a string
 * @record 
 */
export class EnumMatch {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EnumMatch

    static name: string
}

export interface ErrorClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ErrorClass

    parentClass: SourceClass
}

export abstract class ErrorClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ErrorClass

    static name: string
}

export interface ErrorPrivate {
}

/**
 * Private #PkError data
 * @record 
 */
export class ErrorPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ErrorPrivate

    static name: string
}

export interface EulaRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass

    parentClass: SourceClass
}

export abstract class EulaRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredClass

    static name: string
}

export interface EulaRequiredPrivate {
}

/**
 * Private #PkEulaRequired data
 * @record 
 */
export class EulaRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.EulaRequiredPrivate

    static name: string
}

export interface FilesClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.FilesClass

    parentClass: SourceClass
}

export abstract class FilesClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.FilesClass

    static name: string
}

export interface FilesPrivate {
}

/**
 * Private #PkFiles data
 * @record 
 */
export class FilesPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.FilesPrivate

    static name: string
}

export interface ItemProgressClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass

    parentClass: SourceClass
}

export abstract class ItemProgressClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgressClass

    static name: string
}

export interface ItemProgressPrivate {
}

/**
 * Private #PkItemProgress data
 * @record 
 */
export class ItemProgressPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ItemProgressPrivate

    static name: string
}

export interface MediaChangeRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass

    parentClass: SourceClass
}

export abstract class MediaChangeRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredClass

    static name: string
}

export interface MediaChangeRequiredPrivate {
}

/**
 * Private #PkMediaChangeRequired data
 * @record 
 */
export class MediaChangeRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.MediaChangeRequiredPrivate

    static name: string
}

export interface PackageClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageClass

    parentClass: SourceClass
    changed: (package: Package) => void
}

export abstract class PackageClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageClass

    static name: string
}

export interface PackagePrivate {
}

/**
 * Private #PkPackage data
 * @record 
 */
export class PackagePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackagePrivate

    static name: string
}

export interface PackageSackClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass

    parentClass: GObject.ObjectClass
    changed: (sack: PackageSack) => void
}

export abstract class PackageSackClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackClass

    static name: string
}

export interface PackageSackPrivate {
}

/**
 * Private #PkPackageSack data
 * @record 
 */
export class PackageSackPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackPrivate

    static name: string
}

export interface PackageSackResults {
}

export class PackageSackResults {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.PackageSackResults

    static name: string
}

export interface ProgressClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ProgressClass

    parentClass: GObject.ObjectClass
}

export abstract class ProgressClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ProgressClass

    static name: string
}

export interface ProgressPrivate {
}

/**
 * Private #PkProgress data
 * @record 
 */
export class ProgressPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ProgressPrivate

    static name: string
}

export interface RepoDetailClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass

    parentClass: SourceClass
}

export abstract class RepoDetailClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetailClass

    static name: string
}

export interface RepoDetailPrivate {
}

/**
 * Private #PkRepoDetail data
 * @record 
 */
export class RepoDetailPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoDetailPrivate

    static name: string
}

export interface RepoSignatureRequiredClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass

    parentClass: SourceClass
}

export abstract class RepoSignatureRequiredClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredClass

    static name: string
}

export interface RepoSignatureRequiredPrivate {
}

/**
 * Private #PkRepoSignatureRequired data
 * @record 
 */
export class RepoSignatureRequiredPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RepoSignatureRequiredPrivate

    static name: string
}

export interface RequireRestartClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass

    parentClass: SourceClass
}

export abstract class RequireRestartClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestartClass

    static name: string
}

export interface RequireRestartPrivate {
}

/**
 * Private #PkRequireRestart data
 * @record 
 */
export class RequireRestartPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.RequireRestartPrivate

    static name: string
}

export interface ResultsClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.ResultsClass

    parentClass: GObject.ObjectClass
}

export abstract class ResultsClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ResultsClass

    static name: string
}

export interface ResultsPrivate {
}

/**
 * Private #PkResults data
 * @record 
 */
export class ResultsPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.ResultsPrivate

    static name: string
}

export interface SourceClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.SourceClass

    parentClass: GObject.ObjectClass
}

export abstract class SourceClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.SourceClass

    static name: string
}

export interface SourcePrivate {
}

/**
 * Private #PkSource data
 * @record 
 */
export class SourcePrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.SourcePrivate

    static name: string
}

export interface TaskClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TaskClass

    parentClass: ClientClass
    untrustedQuestion: (task: Task, request: number, results: Results) => void
    keyQuestion: (task: Task, request: number, results: Results) => void
    eulaQuestion: (task: Task, request: number, results: Results) => void
    mediaChangeQuestion: (task: Task, request: number, results: Results) => void
    simulateQuestion: (task: Task, request: number, results: Results) => void
    repairQuestion: (task: Task, request: number, results: Results) => void
}

export abstract class TaskClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TaskClass

    static name: string
}

export interface TaskPrivate {
}

/**
 * Private #PkTask data
 * @record 
 */
export class TaskPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TaskPrivate

    static name: string
}

export interface TransactionListClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass

    parentClass: GObject.ObjectClass
    added: (tlist: TransactionList, tid: string) => void
    removed: (tlist: TransactionList, tid: string) => void
}

export abstract class TransactionListClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionListClass

    static name: string
}

export interface TransactionListPrivate {
}

/**
 * Private #PkTransactionList data
 * @record 
 */
export class TransactionListPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionListPrivate

    static name: string
}

export interface TransactionPastClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass

    parentClass: SourceClass
}

export abstract class TransactionPastClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPastClass

    static name: string
}

export interface TransactionPastPrivate {
}

/**
 * Private #PkTransactionPast data
 * @record 
 */
export class TransactionPastPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.TransactionPastPrivate

    static name: string
}

export interface UpdateDetailClass {

    // Own fields of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass

    parentClass: SourceClass
}

export abstract class UpdateDetailClass {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailClass

    static name: string
}

export interface UpdateDetailPrivate {
}

/**
 * Private #PkUpdateDetail data
 * @record 
 */
export class UpdateDetailPrivate {

    // Own properties of PackageKitGlib-1.0.PackageKitGlib.UpdateDetailPrivate

    static name: string
}

    export type Bitfield = number