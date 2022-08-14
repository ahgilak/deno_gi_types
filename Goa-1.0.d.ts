
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Goa-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Error codes for the #GOA_ERROR error domain and the
 * corresponding D-Bus error names.
 */
export enum Error {
    /**
     * The operation failed.
     */
    FAILED,
    /**
     * The operation is not supported.
     */
    NOT_SUPPORTED,
    /**
     * The dialog was dismissed.
     */
    DIALOG_DISMISSED,
    /**
     * Account already exists.
     */
    ACCOUNT_EXISTS,
    /**
     * Not authorized to perform operation.
     */
    NOT_AUTHORIZED,
    /**
     * Invalid SSL certificate.
     */
    SSL,
}
export const ERROR_NUM_ENTRIES: number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> D-Bus interface.
 */
export function accountInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function accountOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> D-Bus interface.
 */
export function calendarInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function calendarOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> D-Bus interface.
 */
export function chatInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function chatOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Checks that the GOA library in use is compatible with the
 * given version. Generally you would pass in the constants
 * #GOA_MAJOR_VERSION, #GOA_MINOR_VERSION, #GOA_MICRO_VERSION
 * as the three arguments to this function; that produces
 * a check that the library in use is compatible with
 * the version of GOA the application or module was compiled
 * against.
 * 
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * `required_major`.`required_minor`.`required_micro`. Second
 * the running library must be binary compatible with the
 * version `required_major`.`required_minor`.`required_micro`
 * (same major and minor version).
 * @param requiredMajor the required major version.
 * @param requiredMinor the required minor version.
 * @param requiredMicro the required micro version.
 */
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> D-Bus interface.
 */
export function contactsInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function contactsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> D-Bus interface.
 */
export function documentsInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function documentsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export function errorQuark(): GLib.Quark
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> D-Bus interface.
 */
export function exchangeInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function exchangeOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> D-Bus interface.
 */
export function filesInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function filesOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> D-Bus interface.
 */
export function mailInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function mailOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> D-Bus interface.
 */
export function managerInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function managerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> D-Bus interface.
 */
export function mapsInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function mapsOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> D-Bus interface.
 */
export function mediaServerInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function mediaServerOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> D-Bus interface.
 */
export function musicInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function musicOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> D-Bus interface.
 */
export function oauth2BasedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function oauth2BasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> D-Bus interface.
 */
export function oauthBasedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function oauthBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> D-Bus interface.
 */
export function passwordBasedInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function passwordBasedOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> D-Bus interface.
 */
export function photosInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function photosOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> D-Bus interface.
 */
export function printersInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function printersOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> D-Bus interface.
 */
export function readLaterInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function readLaterOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> D-Bus interface.
 */
export function ticketingInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function ticketingOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
/**
 * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> D-Bus interface.
 */
export function todoInterfaceInfo(): Gio.DBusInterfaceInfo
/**
 * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
 * The properties are overridden in the order they are defined.
 * @param klass The class structure for a #GObject derived class.
 * @param propertyIdBegin The property id to assign to the first overridden property.
 */
export function todoOverrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
export module Account {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-ensure-credentials`
     */
    export interface HandleEnsureCredentialsSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }

    /**
     * Signal callback interface for `handle-remove`
     */
    export interface HandleRemoveSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Account

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        attentionNeeded?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        calendarDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        chatDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        contactsDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        documentsDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        filesDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        id?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Identity">"Identity"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        identity?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        isLocked?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        isTemporary?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mailDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        mapsDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        musicDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        photosDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        presentationIdentity?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        printersDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerIcon?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerName?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        providerType?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        readLaterDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        ticketingDisabled?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
         * 
         * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
         */
        todoDisabled?: boolean | null
    }

}

export interface Account {

    // Own properties of Goa-1.0.Goa.Account

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.AttentionNeeded">"AttentionNeeded"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    attentionNeeded: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.CalendarDisabled">"CalendarDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    calendarDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ChatDisabled">"ChatDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    chatDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ContactsDisabled">"ContactsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    contactsDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.DocumentsDisabled">"DocumentsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    documentsDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.FilesDisabled">"FilesDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    filesDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    id: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Identity">"Identity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    identity: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsLocked">"IsLocked"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    isLocked: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.IsTemporary">"IsTemporary"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    isTemporary: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MailDisabled">"MailDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    mailDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MapsDisabled">"MapsDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    mapsDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.MusicDisabled">"MusicDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    musicDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PhotosDisabled">"PhotosDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    photosDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PresentationIdentity">"PresentationIdentity"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    presentationIdentity: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.PrintersDisabled">"PrintersDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    printersDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderIcon">"ProviderIcon"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    providerIcon: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderName">"ProviderName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    providerName: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ProviderType">"ProviderType"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    providerType: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.ReadLaterDisabled">"ReadLaterDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    readLaterDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TicketingDisabled">"TicketingDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    ticketingDisabled: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Account.TodoDisabled">"TodoDisabled"</link>.
     * 
     * Since the D-Bus property for this #GObject property is both readable and writable, it is meaningful to both read from it and write to it on both the service- and client-side.
     */
    todoDisabled: boolean

    // Owm methods of Goa-1.0.Goa.Account

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_call_ensure_credentials_finish() to get the result of the operation.
     * 
     * See goa_account_call_ensure_credentials_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callEnsureCredentials(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_account_call_ensure_credentials().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_ensure_credentials().
     */
    callEnsureCredentialsFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outExpiresIn */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_account_call_ensure_credentials() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callEnsureCredentialsSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outExpiresIn */ number ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_call_remove_finish() to get the result of the operation.
     * 
     * See goa_account_call_remove_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callRemove(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_account_call_remove().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_call_remove().
     */
    callRemoveFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_account_call_remove() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callRemoveSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.EnsureCredentials">EnsureCredentials()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param expiresIn Parameter to return.
     */
    completeEnsureCredentials(invocation: Gio.DBusMethodInvocation, expiresIn: number): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Account.Remove">Remove()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeRemove(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Goa-1.0.Goa.Account

    handleEnsureCredentials(invocation: Gio.DBusMethodInvocation): boolean
    handleRemove(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.Account

    connect(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): number
    on(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): number
    once(sigName: "handle-ensure-credentials", callback: Account.HandleEnsureCredentialsSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-ensure-credentials", ...args: any[]): void
    connect(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): number
    on(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): number
    once(sigName: "handle-remove", callback: Account.HandleRemoveSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-remove", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Account

    connect(sigName: "notify::attention-needed", callback: any): number
    on(sigName: "notify::attention-needed", callback: any): number
    once(sigName: "notify::attention-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: any): number
    on(sigName: "notify::calendar-disabled", callback: any): number
    once(sigName: "notify::calendar-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: any): number
    on(sigName: "notify::chat-disabled", callback: any): number
    once(sigName: "notify::chat-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: any): number
    on(sigName: "notify::contacts-disabled", callback: any): number
    once(sigName: "notify::contacts-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: any): number
    on(sigName: "notify::documents-disabled", callback: any): number
    once(sigName: "notify::documents-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: any): number
    on(sigName: "notify::files-disabled", callback: any): number
    once(sigName: "notify::files-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: any): number
    on(sigName: "notify::identity", callback: any): number
    once(sigName: "notify::identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: any): number
    on(sigName: "notify::is-locked", callback: any): number
    once(sigName: "notify::is-locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: any): number
    on(sigName: "notify::is-temporary", callback: any): number
    once(sigName: "notify::is-temporary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: any): number
    on(sigName: "notify::mail-disabled", callback: any): number
    once(sigName: "notify::mail-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: any): number
    on(sigName: "notify::maps-disabled", callback: any): number
    once(sigName: "notify::maps-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: any): number
    on(sigName: "notify::music-disabled", callback: any): number
    once(sigName: "notify::music-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: any): number
    on(sigName: "notify::photos-disabled", callback: any): number
    once(sigName: "notify::photos-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: any): number
    on(sigName: "notify::presentation-identity", callback: any): number
    once(sigName: "notify::presentation-identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: any): number
    on(sigName: "notify::printers-disabled", callback: any): number
    once(sigName: "notify::printers-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: any): number
    on(sigName: "notify::provider-icon", callback: any): number
    once(sigName: "notify::provider-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: any): number
    on(sigName: "notify::provider-name", callback: any): number
    once(sigName: "notify::provider-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: any): number
    on(sigName: "notify::provider-type", callback: any): number
    once(sigName: "notify::provider-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: any): number
    on(sigName: "notify::read-later-disabled", callback: any): number
    once(sigName: "notify::read-later-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: any): number
    on(sigName: "notify::ticketing-disabled", callback: any): number
    once(sigName: "notify::ticketing-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: any): number
    on(sigName: "notify::todo-disabled", callback: any): number
    once(sigName: "notify::todo-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
 * @interface 
 */
export class Account extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Account

    static name: string

    // Constructors of Goa-1.0.Goa.Account

    constructor(config?: Account.ConstructorProperties) 
    _init(config?: Account.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaAccount interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Calendar {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Calendar

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
    }

}

export interface Calendar {

    // Own properties of Goa-1.0.Goa.Calendar

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Calendar.Uri">"Uri"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uri: string

    // Class property signals of Goa-1.0.Goa.Calendar

    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
 * @interface 
 */
export class Calendar extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Calendar

    static name: string

    // Constructors of Goa-1.0.Goa.Calendar

    constructor(config?: Calendar.ConstructorProperties) 
    _init(config?: Calendar.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaCalendar interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Chat {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Chat {

    // Class property signals of Goa-1.0.Goa.Chat

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
 * @interface 
 */
export class Chat extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Chat

    static name: string

    // Constructors of Goa-1.0.Goa.Chat

    constructor(config?: Chat.ConstructorProperties) 
    _init(config?: Chat.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaChat interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Contacts {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Contacts

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
    }

}

export interface Contacts {

    // Own properties of Goa-1.0.Goa.Contacts

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Contacts.Uri">"Uri"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uri: string

    // Class property signals of Goa-1.0.Goa.Contacts

    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
 * @interface 
 */
export class Contacts extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Contacts

    static name: string

    // Constructors of Goa-1.0.Goa.Contacts

    constructor(config?: Contacts.ConstructorProperties) 
    _init(config?: Contacts.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaContacts interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Documents {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Documents {

    // Class property signals of Goa-1.0.Goa.Documents

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
 * @interface 
 */
export class Documents extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Documents

    static name: string

    // Constructors of Goa-1.0.Goa.Documents

    constructor(config?: Documents.ConstructorProperties) 
    _init(config?: Documents.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaDocuments interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Exchange {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Exchange

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host">"Host"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        host?: string | null
    }

}

export interface Exchange {

    // Own properties of Goa-1.0.Goa.Exchange

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Exchange.Host">"Host"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    host: string

    // Class property signals of Goa-1.0.Goa.Exchange

    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: any): number
    on(sigName: "notify::host", callback: any): number
    once(sigName: "notify::host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
 * @interface 
 */
export class Exchange extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Exchange

    static name: string

    // Constructors of Goa-1.0.Goa.Exchange

    constructor(config?: Exchange.ConstructorProperties) 
    _init(config?: Exchange.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaExchange interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Files {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Files

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        acceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri">"Uri"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        uri?: string | null
    }

}

export interface Files {

    // Own properties of Goa-1.0.Goa.Files

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.AcceptSslErrors">"AcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    acceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Files.Uri">"Uri"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    uri: string

    // Class property signals of Goa-1.0.Goa.Files

    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
 * @interface 
 */
export class Files extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Files

    static name: string

    // Constructors of Goa-1.0.Goa.Files

    constructor(config?: Files.ConstructorProperties) 
    _init(config?: Files.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaFiles interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Mail {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Mail

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        emailAddress?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapAcceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapHost?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapSupported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUseSsl?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUseTls?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        imapUserName?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.Name">"Name"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        name?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAcceptSslErrors?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthLogin?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthPlain?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpAuthXoauth2?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpHost?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpSupported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseAuth?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseSsl?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUseTls?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        smtpUserName?: string | null
    }

}

export interface Mail {

    // Own properties of Goa-1.0.Goa.Mail

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.EmailAddress">"EmailAddress"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    emailAddress: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapAcceptSslErrors">"ImapAcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapAcceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapHost">"ImapHost"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapHost: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapSupported">"ImapSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseSsl">"ImapUseSsl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapUseSsl: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUseTls">"ImapUseTls"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapUseTls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.ImapUserName">"ImapUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    imapUserName: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.Name">"Name"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    name: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAcceptSslErrors">"SmtpAcceptSslErrors"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAcceptSslErrors: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthLogin">"SmtpAuthLogin"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAuthLogin: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthPlain">"SmtpAuthPlain"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAuthPlain: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpAuthXoauth2">"SmtpAuthXoauth2"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpAuthXoauth2: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpHost">"SmtpHost"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpHost: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpSupported">"SmtpSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseAuth">"SmtpUseAuth"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUseAuth: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseSsl">"SmtpUseSsl"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUseSsl: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUseTls">"SmtpUseTls"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUseTls: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Mail.SmtpUserName">"SmtpUserName"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    smtpUserName: string

    // Class property signals of Goa-1.0.Goa.Mail

    connect(sigName: "notify::email-address", callback: any): number
    on(sigName: "notify::email-address", callback: any): number
    once(sigName: "notify::email-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    once(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: any): number
    on(sigName: "notify::imap-host", callback: any): number
    once(sigName: "notify::imap-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: any): number
    on(sigName: "notify::imap-supported", callback: any): number
    once(sigName: "notify::imap-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: any): number
    on(sigName: "notify::imap-use-ssl", callback: any): number
    once(sigName: "notify::imap-use-ssl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: any): number
    on(sigName: "notify::imap-use-tls", callback: any): number
    once(sigName: "notify::imap-use-tls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: any): number
    on(sigName: "notify::imap-user-name", callback: any): number
    once(sigName: "notify::imap-user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    once(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: any): number
    on(sigName: "notify::smtp-auth-login", callback: any): number
    once(sigName: "notify::smtp-auth-login", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: any): number
    on(sigName: "notify::smtp-auth-plain", callback: any): number
    once(sigName: "notify::smtp-auth-plain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    once(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: any): number
    on(sigName: "notify::smtp-host", callback: any): number
    once(sigName: "notify::smtp-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: any): number
    on(sigName: "notify::smtp-supported", callback: any): number
    once(sigName: "notify::smtp-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: any): number
    on(sigName: "notify::smtp-use-auth", callback: any): number
    once(sigName: "notify::smtp-use-auth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: any): number
    on(sigName: "notify::smtp-use-ssl", callback: any): number
    once(sigName: "notify::smtp-use-ssl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: any): number
    on(sigName: "notify::smtp-use-tls", callback: any): number
    once(sigName: "notify::smtp-use-tls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: any): number
    on(sigName: "notify::smtp-user-name", callback: any): number
    once(sigName: "notify::smtp-user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
 * @interface 
 */
export class Mail extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Mail

    static name: string

    // Constructors of Goa-1.0.Goa.Mail

    constructor(config?: Mail.ConstructorProperties) 
    _init(config?: Mail.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMail interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Manager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-add-account`
     */
    export interface HandleAddAccountSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `handle-is-supported-provider`
     */
    export interface HandleIsSupportedProviderSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argProviderType: string): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Manager {

    // Owm methods of Goa-1.0.Goa.Manager

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_call_add_account_finish() to get the result of the operation.
     * 
     * See goa_manager_call_add_account_sync() for the synchronous, blocking version of this method.
     * @param argProvider Argument to pass with the method invocation.
     * @param argIdentity Argument to pass with the method invocation.
     * @param argPresentationIdentity Argument to pass with the method invocation.
     * @param argCredentials Argument to pass with the method invocation.
     * @param argDetails Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callAddAccount(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_manager_call_add_account().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_add_account().
     */
    callAddAccountFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccountObjectPath */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_call_add_account() for the asynchronous version of this method.
     * @param argProvider Argument to pass with the method invocation.
     * @param argIdentity Argument to pass with the method invocation.
     * @param argPresentationIdentity Argument to pass with the method invocation.
     * @param argCredentials Argument to pass with the method invocation.
     * @param argDetails Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callAddAccountSync(argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccountObjectPath */ string ]
    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_call_is_supported_provider_finish() to get the result of the operation.
     * 
     * See goa_manager_call_is_supported_provider_sync() for the synchronous, blocking version of this method.
     * @param argProviderType Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callIsSupportedProvider(argProviderType: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_manager_call_is_supported_provider().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_call_is_supported_provider().
     */
    callIsSupportedProviderFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outIsSupported */ boolean ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_call_is_supported_provider() for the asynchronous version of this method.
     * @param argProviderType Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callIsSupportedProviderSync(argProviderType: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIsSupported */ boolean ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.AddAccount">AddAccount()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param accountObjectPath Parameter to return.
     */
    completeAddAccount(invocation: Gio.DBusMethodInvocation, accountObjectPath: string): void
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Manager.IsSupportedProvider">IsSupportedProvider()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param isSupported Parameter to return.
     */
    completeIsSupportedProvider(invocation: Gio.DBusMethodInvocation, isSupported: boolean): void

    // Own virtual methods of Goa-1.0.Goa.Manager

    handleAddAccount(invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant): boolean
    handleIsSupportedProvider(invocation: Gio.DBusMethodInvocation, argProviderType: string): boolean

    // Own signals of Goa-1.0.Goa.Manager

    connect(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): number
    on(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): number
    once(sigName: "handle-add-account", callback: Manager.HandleAddAccountSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-add-account", argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant, ...args: any[]): void
    connect(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): number
    on(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): number
    once(sigName: "handle-is-supported-provider", callback: Manager.HandleIsSupportedProviderSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-is-supported-provider", argProviderType: string, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Manager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
 * @interface 
 */
export class Manager extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Manager

    static name: string

    // Constructors of Goa-1.0.Goa.Manager

    constructor(config?: Manager.ConstructorProperties) 
    _init(config?: Manager.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaManager interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Maps {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Maps {

    // Class property signals of Goa-1.0.Goa.Maps

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
 * @interface 
 */
export class Maps extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Maps

    static name: string

    // Constructors of Goa-1.0.Goa.Maps

    constructor(config?: Maps.ConstructorProperties) 
    _init(config?: Maps.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMaps interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module MediaServer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.MediaServer

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        dlnaSupported?: boolean | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn">"Udn"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        udn?: string | null
    }

}

export interface MediaServer {

    // Own properties of Goa-1.0.Goa.MediaServer

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.DlnaSupported">"DlnaSupported"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    dlnaSupported: boolean
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-MediaServer.Udn">"Udn"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    udn: string

    // Class property signals of Goa-1.0.Goa.MediaServer

    connect(sigName: "notify::dlna-supported", callback: any): number
    on(sigName: "notify::dlna-supported", callback: any): number
    once(sigName: "notify::dlna-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: any): number
    on(sigName: "notify::udn", callback: any): number
    once(sigName: "notify::udn", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
 * @interface 
 */
export class MediaServer extends GObject.Object {

    // Own properties of Goa-1.0.Goa.MediaServer

    static name: string

    // Constructors of Goa-1.0.Goa.MediaServer

    constructor(config?: MediaServer.ConstructorProperties) 
    _init(config?: MediaServer.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMediaServer interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Music {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Music {

    // Class property signals of Goa-1.0.Goa.Music

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
 * @interface 
 */
export class Music extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Music

    static name: string

    // Constructors of Goa-1.0.Goa.Music

    constructor(config?: Music.ConstructorProperties) 
    _init(config?: Music.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaMusic interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module OAuth2Based {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-access-token`
     */
    export interface HandleGetAccessTokenSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.OAuth2Based

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        clientId?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        clientSecret?: string | null
    }

}

export interface OAuth2Based {

    // Own properties of Goa-1.0.Goa.OAuth2Based

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientId">"ClientId"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    clientId: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuth2Based.ClientSecret">"ClientSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    clientSecret: string

    // Owm methods of Goa-1.0.Goa.OAuth2Based

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth2_based_call_get_access_token_finish() to get the result of the operation.
     * 
     * See goa_oauth2_based_call_get_access_token_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetAccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_oauth2_based_call_get_access_token().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_call_get_access_token().
     */
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_call_get_access_token() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetAccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outExpiresIn */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuth2Based.GetAccessToken">GetAccessToken()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param accessToken Parameter to return.
     * @param expiresIn Parameter to return.
     */
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, expiresIn: number): void

    // Own virtual methods of Goa-1.0.Goa.OAuth2Based

    handleGetAccessToken(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.OAuth2Based

    connect(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): number
    on(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): number
    once(sigName: "handle-get-access-token", callback: OAuth2Based.HandleGetAccessTokenSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-get-access-token", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.OAuth2Based

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
 * @interface 
 */
export class OAuth2Based extends GObject.Object {

    // Own properties of Goa-1.0.Goa.OAuth2Based

    static name: string

    // Constructors of Goa-1.0.Goa.OAuth2Based

    constructor(config?: OAuth2Based.ConstructorProperties) 
    _init(config?: OAuth2Based.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaOAuth2Based interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module OAuthBased {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-access-token`
     */
    export interface HandleGetAccessTokenSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.OAuthBased

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumerKey?: string | null
        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        consumerSecret?: string | null
    }

}

export interface OAuthBased {

    // Own properties of Goa-1.0.Goa.OAuthBased

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerKey">"ConsumerKey"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumerKey: string
    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-OAuthBased.ConsumerSecret">"ConsumerSecret"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    consumerSecret: string

    // Owm methods of Goa-1.0.Goa.OAuthBased

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth_based_call_get_access_token_finish() to get the result of the operation.
     * 
     * See goa_oauth_based_call_get_access_token_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetAccessToken(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_oauth_based_call_get_access_token().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_call_get_access_token().
     */
    callGetAccessTokenFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outAccessToken */ string, /* outAccessTokenSecret */ string, /* outExpiresIn */ number ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_call_get_access_token() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetAccessTokenSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAccessToken */ string, /* outAccessTokenSecret */ string, /* outExpiresIn */ number ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-OAuthBased.GetAccessToken">GetAccessToken()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param accessToken Parameter to return.
     * @param accessTokenSecret Parameter to return.
     * @param expiresIn Parameter to return.
     */
    completeGetAccessToken(invocation: Gio.DBusMethodInvocation, accessToken: string, accessTokenSecret: string, expiresIn: number): void

    // Own virtual methods of Goa-1.0.Goa.OAuthBased

    handleGetAccessToken(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.OAuthBased

    connect(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): number
    on(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): number
    once(sigName: "handle-get-access-token", callback: OAuthBased.HandleGetAccessTokenSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-get-access-token", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.OAuthBased

    connect(sigName: "notify::consumer-key", callback: any): number
    on(sigName: "notify::consumer-key", callback: any): number
    once(sigName: "notify::consumer-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: any): number
    on(sigName: "notify::consumer-secret", callback: any): number
    once(sigName: "notify::consumer-secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
 * @interface 
 */
export class OAuthBased extends GObject.Object {

    // Own properties of Goa-1.0.Goa.OAuthBased

    static name: string

    // Constructors of Goa-1.0.Goa.OAuthBased

    constructor(config?: OAuthBased.ConstructorProperties) 
    _init(config?: OAuthBased.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaOAuthBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Object

        /**
         * The #GoaAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        account?: Account | null
        /**
         * The #GoaCalendar instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        calendar?: Calendar | null
        /**
         * The #GoaChat instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        chat?: Chat | null
        /**
         * The #GoaContacts instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        contacts?: Contacts | null
        /**
         * The #GoaDocuments instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        documents?: Documents | null
        /**
         * The #GoaExchange instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        exchange?: Exchange | null
        /**
         * The #GoaFiles instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        files?: Files | null
        /**
         * The #GoaMail instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mail?: Mail | null
        /**
         * The #GoaManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        manager?: Manager | null
        /**
         * The #GoaMaps instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        maps?: Maps | null
        /**
         * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        mediaServer?: MediaServer | null
        /**
         * The #GoaMusic instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        music?: Music | null
        /**
         * The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauthBased?: OAuthBased | null
        /**
         * The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        oauth2Based?: OAuth2Based | null
        /**
         * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        passwordBased?: PasswordBased | null
        /**
         * The #GoaPhotos instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        photos?: Photos | null
        /**
         * The #GoaPrinters instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        printers?: Printers | null
        /**
         * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        readLater?: ReadLater | null
        /**
         * The #GoaTicketing instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        ticketing?: Ticketing | null
        /**
         * The #GoaTodo instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>, if any.
         * 
         * Connect to the #GObject::notify signal to get informed of property changes.
         */
        todo?: Todo | null
    }

}

export interface Object extends Gio.DBusObject {

    // Own properties of Goa-1.0.Goa.Object

    /**
     * The #GoaAccount instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    account: Account
    /**
     * The #GoaCalendar instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    calendar: Calendar
    /**
     * The #GoaChat instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    chat: Chat
    /**
     * The #GoaContacts instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    contacts: Contacts
    /**
     * The #GoaDocuments instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    documents: Documents
    /**
     * The #GoaExchange instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    exchange: Exchange
    /**
     * The #GoaFiles instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    files: Files
    /**
     * The #GoaMail instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    mail: Mail
    /**
     * The #GoaManager instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    manager: Manager
    /**
     * The #GoaMaps instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    maps: Maps
    /**
     * The #GoaMediaServer instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    mediaServer: MediaServer
    /**
     * The #GoaMusic instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    music: Music
    /**
     * The #GoaOAuthBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    oauthBased: OAuthBased
    /**
     * The #GoaOAuth2Based instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    oauth2Based: OAuth2Based
    /**
     * The #GoaPasswordBased instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    passwordBased: PasswordBased
    /**
     * The #GoaPhotos instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    photos: Photos
    /**
     * The #GoaPrinters instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    printers: Printers
    /**
     * The #GoaReadLater instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    readLater: ReadLater
    /**
     * The #GoaTicketing instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    ticketing: Ticketing
    /**
     * The #GoaTodo instance corresponding to the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>, if any.
     * 
     * Connect to the #GObject::notify signal to get informed of property changes.
     */
    todo: Todo

    // Owm methods of Goa-1.0.Goa.Object

    /**
     * Gets the #GoaAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> on `object,` if any.
     */
    getAccount(): Account | null
    /**
     * Gets the #GoaCalendar instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> on `object,` if any.
     */
    getCalendar(): Calendar | null
    /**
     * Gets the #GoaChat instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> on `object,` if any.
     */
    getChat(): Chat | null
    /**
     * Gets the #GoaContacts instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> on `object,` if any.
     */
    getContacts(): Contacts | null
    /**
     * Gets the #GoaDocuments instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> on `object,` if any.
     */
    getDocuments(): Documents | null
    /**
     * Gets the #GoaExchange instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> on `object,` if any.
     */
    getExchange(): Exchange | null
    /**
     * Gets the #GoaFiles instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> on `object,` if any.
     */
    getFiles(): Files | null
    /**
     * Gets the #GoaMail instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> on `object,` if any.
     */
    getMail(): Mail | null
    /**
     * Gets the #GoaManager instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> on `object,` if any.
     */
    getManager(): Manager | null
    /**
     * Gets the #GoaMaps instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> on `object,` if any.
     */
    getMaps(): Maps | null
    /**
     * Gets the #GoaMediaServer instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> on `object,` if any.
     */
    getMediaServer(): MediaServer | null
    /**
     * Gets the #GoaMusic instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> on `object,` if any.
     */
    getMusic(): Music | null
    /**
     * Gets the #GoaOAuth2Based instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> on `object,` if any.
     */
    getOauth2Based(): OAuth2Based | null
    /**
     * Gets the #GoaOAuthBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> on `object,` if any.
     */
    getOauthBased(): OAuthBased | null
    /**
     * Gets the #GoaPasswordBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> on `object,` if any.
     */
    getPasswordBased(): PasswordBased | null
    /**
     * Gets the #GoaPhotos instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> on `object,` if any.
     */
    getPhotos(): Photos | null
    /**
     * Gets the #GoaPrinters instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> on `object,` if any.
     */
    getPrinters(): Printers | null
    /**
     * Gets the #GoaReadLater instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> on `object,` if any.
     */
    getReadLater(): ReadLater | null
    /**
     * Gets the #GoaTicketing instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> on `object,` if any.
     */
    getTicketing(): Ticketing | null
    /**
     * Gets the #GoaTodo instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> on `object,` if any.
     */
    getTodo(): Todo | null

    // Class property signals of Goa-1.0.Goa.Object

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: any): number
    on(sigName: "notify::calendar", callback: any): number
    once(sigName: "notify::calendar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: any): number
    on(sigName: "notify::chat", callback: any): number
    once(sigName: "notify::chat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: any): number
    on(sigName: "notify::contacts", callback: any): number
    once(sigName: "notify::contacts", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: any): number
    on(sigName: "notify::documents", callback: any): number
    once(sigName: "notify::documents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: any): number
    on(sigName: "notify::exchange", callback: any): number
    once(sigName: "notify::exchange", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: any): number
    on(sigName: "notify::files", callback: any): number
    once(sigName: "notify::files", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: any): number
    on(sigName: "notify::mail", callback: any): number
    once(sigName: "notify::mail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: any): number
    on(sigName: "notify::manager", callback: any): number
    once(sigName: "notify::manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: any): number
    on(sigName: "notify::maps", callback: any): number
    once(sigName: "notify::maps", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: any): number
    on(sigName: "notify::media-server", callback: any): number
    once(sigName: "notify::media-server", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: any): number
    on(sigName: "notify::music", callback: any): number
    once(sigName: "notify::music", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: any): number
    on(sigName: "notify::oauth-based", callback: any): number
    once(sigName: "notify::oauth-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: any): number
    on(sigName: "notify::oauth2-based", callback: any): number
    once(sigName: "notify::oauth2-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: any): number
    on(sigName: "notify::password-based", callback: any): number
    once(sigName: "notify::password-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: any): number
    on(sigName: "notify::photos", callback: any): number
    once(sigName: "notify::photos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: any): number
    on(sigName: "notify::printers", callback: any): number
    once(sigName: "notify::printers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: any): number
    on(sigName: "notify::read-later", callback: any): number
    once(sigName: "notify::read-later", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: any): number
    on(sigName: "notify::ticketing", callback: any): number
    once(sigName: "notify::ticketing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: any): number
    on(sigName: "notify::todo", callback: any): number
    once(sigName: "notify::todo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaObject type is a specialized container of interfaces.
 * @interface 
 */
export class Object extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Object

    static name: string

    // Constructors of Goa-1.0.Goa.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module PasswordBased {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-password`
     */
    export interface HandleGetPasswordSignalCallback {
        (invocation: Gio.DBusMethodInvocation, argId: string): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PasswordBased {

    // Owm methods of Goa-1.0.Goa.PasswordBased

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_call_get_password_finish() to get the result of the operation.
     * 
     * See goa_password_based_call_get_password_sync() for the synchronous, blocking version of this method.
     * @param argId Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetPassword(argId: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_password_based_call_get_password().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_call_get_password().
     */
    callGetPasswordFinish(res: Gio.AsyncResult): [ /* returnType */ boolean, /* outPassword */ string ]
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_call_get_password() for the asynchronous version of this method.
     * @param argId Argument to pass with the method invocation.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetPasswordSync(argId: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outPassword */ string ]
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-PasswordBased.GetPassword">GetPassword()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     * @param password Parameter to return.
     */
    completeGetPassword(invocation: Gio.DBusMethodInvocation, password: string): void

    // Own virtual methods of Goa-1.0.Goa.PasswordBased

    handleGetPassword(invocation: Gio.DBusMethodInvocation, argId: string): boolean

    // Own signals of Goa-1.0.Goa.PasswordBased

    connect(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): number
    on(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): number
    once(sigName: "handle-get-password", callback: PasswordBased.HandleGetPasswordSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-get-password", argId: string, ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.PasswordBased

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
 * @interface 
 */
export class PasswordBased extends GObject.Object {

    // Own properties of Goa-1.0.Goa.PasswordBased

    static name: string

    // Constructors of Goa-1.0.Goa.PasswordBased

    constructor(config?: PasswordBased.ConstructorProperties) 
    _init(config?: PasswordBased.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPasswordBased interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Photos {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Photos {

    // Class property signals of Goa-1.0.Goa.Photos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
 * @interface 
 */
export class Photos extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Photos

    static name: string

    // Constructors of Goa-1.0.Goa.Photos

    constructor(config?: Photos.ConstructorProperties) 
    _init(config?: Photos.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPhotos interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Printers {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Printers {

    // Class property signals of Goa-1.0.Goa.Printers

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
 * @interface 
 */
export class Printers extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Printers

    static name: string

    // Constructors of Goa-1.0.Goa.Printers

    constructor(config?: Printers.ConstructorProperties) 
    _init(config?: Printers.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaPrinters interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module ReadLater {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ReadLater {

    // Class property signals of Goa-1.0.Goa.ReadLater

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
 * @interface 
 */
export class ReadLater extends GObject.Object {

    // Own properties of Goa-1.0.Goa.ReadLater

    static name: string

    // Constructors of Goa-1.0.Goa.ReadLater

    constructor(config?: ReadLater.ConstructorProperties) 
    _init(config?: ReadLater.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaReadLater interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Ticketing {

    // Signal callback interfaces

    /**
     * Signal callback interface for `handle-get-ticket`
     */
    export interface HandleGetTicketSignalCallback {
        (invocation: Gio.DBusMethodInvocation): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Goa-1.0.Goa.Ticketing

        /**
         * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Ticketing.Details">"Details"</link>.
         * 
         * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
         */
        details?: GLib.Variant | null
    }

}

export interface Ticketing {

    // Own properties of Goa-1.0.Goa.Ticketing

    /**
     * Represents the D-Bus property <link linkend="gdbus-property-org-gnome-OnlineAccounts-Ticketing.Details">"Details"</link>.
     * 
     * Since the D-Bus property for this #GObject property is readable but not writable, it is meaningful to read from it on both the client- and service-side. It is only meaningful, however, to write to it on the service-side.
     */
    details: GLib.Variant

    // Owm methods of Goa-1.0.Goa.Ticketing

    /**
     * Asynchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method on `proxy`.
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_ticketing_call_get_ticket_finish() to get the result of the operation.
     * 
     * See goa_ticketing_call_get_ticket_sync() for the synchronous, blocking version of this method.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied or %NULL.
     */
    callGetTicket(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an operation started with goa_ticketing_call_get_ticket().
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_call_get_ticket().
     */
    callGetTicketFinish(res: Gio.AsyncResult): boolean
    /**
     * Synchronously invokes the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method on `proxy`. The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_call_get_ticket() for the asynchronous version of this method.
     * @param cancellable A #GCancellable or %NULL.
     */
    callGetTicketSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Helper function used in service implementations to finish handling invocations of the <link linkend="gdbus-method-org-gnome-OnlineAccounts-Ticketing.GetTicket">GetTicket()</link> D-Bus method. If you instead want to finish handling an invocation by returning an error, use g_dbus_method_invocation_return_error() or similar.
     * 
     * This method will free `invocation,` you cannot use it afterwards.
     * @param invocation A #GDBusMethodInvocation.
     */
    completeGetTicket(invocation: Gio.DBusMethodInvocation): void

    // Own virtual methods of Goa-1.0.Goa.Ticketing

    handleGetTicket(invocation: Gio.DBusMethodInvocation): boolean

    // Own signals of Goa-1.0.Goa.Ticketing

    connect(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): number
    on(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): number
    once(sigName: "handle-get-ticket", callback: Ticketing.HandleGetTicketSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-get-ticket", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Ticketing

    connect(sigName: "notify::details", callback: any): number
    on(sigName: "notify::details", callback: any): number
    once(sigName: "notify::details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
 * @interface 
 */
export class Ticketing extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Ticketing

    static name: string

    // Constructors of Goa-1.0.Goa.Ticketing

    constructor(config?: Ticketing.ConstructorProperties) 
    _init(config?: Ticketing.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaTicketing interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module Todo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Todo {

    // Class property signals of Goa-1.0.Goa.Todo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract interface type for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
 * @interface 
 */
export class Todo extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Todo

    static name: string

    // Constructors of Goa-1.0.Goa.Todo

    constructor(config?: Todo.ConstructorProperties) 
    _init(config?: Todo.ConstructorProperties): void
    /**
     * Gets a machine-readable description of the <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> D-Bus interface.
     */
    static interfaceInfo(): Gio.DBusInterfaceInfo
    /**
     * Overrides all #GObject properties in the #GoaTodo interface for a concrete class.
     * The properties are overridden in the order they are defined.
     * @param klass The class structure for a #GObject derived class.
     * @param propertyIdBegin The property id to assign to the first overridden property.
     */
    static overrideProperties(klass: GObject.ObjectClass, propertyIdBegin: number): number
}

export module AccountProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Account.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface AccountProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Account {

    // Class property signals of Goa-1.0.Goa.AccountProxy

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
    connect(sigName: "notify::attention-needed", callback: any): number
    on(sigName: "notify::attention-needed", callback: any): number
    once(sigName: "notify::attention-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: any): number
    on(sigName: "notify::calendar-disabled", callback: any): number
    once(sigName: "notify::calendar-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: any): number
    on(sigName: "notify::chat-disabled", callback: any): number
    once(sigName: "notify::chat-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: any): number
    on(sigName: "notify::contacts-disabled", callback: any): number
    once(sigName: "notify::contacts-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: any): number
    on(sigName: "notify::documents-disabled", callback: any): number
    once(sigName: "notify::documents-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: any): number
    on(sigName: "notify::files-disabled", callback: any): number
    once(sigName: "notify::files-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: any): number
    on(sigName: "notify::identity", callback: any): number
    once(sigName: "notify::identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: any): number
    on(sigName: "notify::is-locked", callback: any): number
    once(sigName: "notify::is-locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: any): number
    on(sigName: "notify::is-temporary", callback: any): number
    once(sigName: "notify::is-temporary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: any): number
    on(sigName: "notify::mail-disabled", callback: any): number
    once(sigName: "notify::mail-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: any): number
    on(sigName: "notify::maps-disabled", callback: any): number
    once(sigName: "notify::maps-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: any): number
    on(sigName: "notify::music-disabled", callback: any): number
    once(sigName: "notify::music-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: any): number
    on(sigName: "notify::photos-disabled", callback: any): number
    once(sigName: "notify::photos-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: any): number
    on(sigName: "notify::presentation-identity", callback: any): number
    once(sigName: "notify::presentation-identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: any): number
    on(sigName: "notify::printers-disabled", callback: any): number
    once(sigName: "notify::printers-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: any): number
    on(sigName: "notify::provider-icon", callback: any): number
    once(sigName: "notify::provider-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: any): number
    on(sigName: "notify::provider-name", callback: any): number
    once(sigName: "notify::provider-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: any): number
    on(sigName: "notify::provider-type", callback: any): number
    once(sigName: "notify::provider-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: any): number
    on(sigName: "notify::read-later-disabled", callback: any): number
    once(sigName: "notify::read-later-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: any): number
    on(sigName: "notify::ticketing-disabled", callback: any): number
    once(sigName: "notify::ticketing-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: any): number
    on(sigName: "notify::todo-disabled", callback: any): number
    once(sigName: "notify::todo-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaAccountProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class AccountProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.AccountProxy

    static name: string

    // Constructors of Goa-1.0.Goa.AccountProxy

    constructor(config?: AccountProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_account_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): AccountProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_account_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_account_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): AccountProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_account_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_account_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): AccountProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_account_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): AccountProxy

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
    _init(config?: AccountProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_account_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_account_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_account_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_account_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module AccountSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Account.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface AccountSkeleton extends Gio.DBusInterface, Account {

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

    // Class property signals of Goa-1.0.Goa.AccountSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::attention-needed", callback: any): number
    on(sigName: "notify::attention-needed", callback: any): number
    once(sigName: "notify::attention-needed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attention-needed", ...args: any[]): void
    connect(sigName: "notify::calendar-disabled", callback: any): number
    on(sigName: "notify::calendar-disabled", callback: any): number
    once(sigName: "notify::calendar-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar-disabled", ...args: any[]): void
    connect(sigName: "notify::chat-disabled", callback: any): number
    on(sigName: "notify::chat-disabled", callback: any): number
    once(sigName: "notify::chat-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chat-disabled", ...args: any[]): void
    connect(sigName: "notify::contacts-disabled", callback: any): number
    on(sigName: "notify::contacts-disabled", callback: any): number
    once(sigName: "notify::contacts-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contacts-disabled", ...args: any[]): void
    connect(sigName: "notify::documents-disabled", callback: any): number
    on(sigName: "notify::documents-disabled", callback: any): number
    once(sigName: "notify::documents-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::documents-disabled", ...args: any[]): void
    connect(sigName: "notify::files-disabled", callback: any): number
    on(sigName: "notify::files-disabled", callback: any): number
    once(sigName: "notify::files-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files-disabled", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::identity", callback: any): number
    on(sigName: "notify::identity", callback: any): number
    once(sigName: "notify::identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::identity", ...args: any[]): void
    connect(sigName: "notify::is-locked", callback: any): number
    on(sigName: "notify::is-locked", callback: any): number
    once(sigName: "notify::is-locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-locked", ...args: any[]): void
    connect(sigName: "notify::is-temporary", callback: any): number
    on(sigName: "notify::is-temporary", callback: any): number
    once(sigName: "notify::is-temporary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-temporary", ...args: any[]): void
    connect(sigName: "notify::mail-disabled", callback: any): number
    on(sigName: "notify::mail-disabled", callback: any): number
    once(sigName: "notify::mail-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail-disabled", ...args: any[]): void
    connect(sigName: "notify::maps-disabled", callback: any): number
    on(sigName: "notify::maps-disabled", callback: any): number
    once(sigName: "notify::maps-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maps-disabled", ...args: any[]): void
    connect(sigName: "notify::music-disabled", callback: any): number
    on(sigName: "notify::music-disabled", callback: any): number
    once(sigName: "notify::music-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::music-disabled", ...args: any[]): void
    connect(sigName: "notify::photos-disabled", callback: any): number
    on(sigName: "notify::photos-disabled", callback: any): number
    once(sigName: "notify::photos-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photos-disabled", ...args: any[]): void
    connect(sigName: "notify::presentation-identity", callback: any): number
    on(sigName: "notify::presentation-identity", callback: any): number
    once(sigName: "notify::presentation-identity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presentation-identity", ...args: any[]): void
    connect(sigName: "notify::printers-disabled", callback: any): number
    on(sigName: "notify::printers-disabled", callback: any): number
    once(sigName: "notify::printers-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::printers-disabled", ...args: any[]): void
    connect(sigName: "notify::provider-icon", callback: any): number
    on(sigName: "notify::provider-icon", callback: any): number
    once(sigName: "notify::provider-icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-icon", ...args: any[]): void
    connect(sigName: "notify::provider-name", callback: any): number
    on(sigName: "notify::provider-name", callback: any): number
    once(sigName: "notify::provider-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-name", ...args: any[]): void
    connect(sigName: "notify::provider-type", callback: any): number
    on(sigName: "notify::provider-type", callback: any): number
    once(sigName: "notify::provider-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider-type", ...args: any[]): void
    connect(sigName: "notify::read-later-disabled", callback: any): number
    on(sigName: "notify::read-later-disabled", callback: any): number
    once(sigName: "notify::read-later-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-later-disabled", ...args: any[]): void
    connect(sigName: "notify::ticketing-disabled", callback: any): number
    on(sigName: "notify::ticketing-disabled", callback: any): number
    once(sigName: "notify::ticketing-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticketing-disabled", ...args: any[]): void
    connect(sigName: "notify::todo-disabled", callback: any): number
    on(sigName: "notify::todo-disabled", callback: any): number
    once(sigName: "notify::todo-disabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::todo-disabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaAccountSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class AccountSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.AccountSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.AccountSkeleton

    constructor(config?: AccountSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
     * @constructor 
     */
    static new(): AccountSkeleton
    _init(config?: AccountSkeleton.ConstructorProperties): void
}

export module CalendarProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Calendar.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface CalendarProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Calendar {

    // Class property signals of Goa-1.0.Goa.CalendarProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaCalendarProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class CalendarProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.CalendarProxy

    static name: string

    // Constructors of Goa-1.0.Goa.CalendarProxy

    constructor(config?: CalendarProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_calendar_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_calendar_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): CalendarProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_calendar_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_calendar_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): CalendarProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_calendar_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_calendar_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): CalendarProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_calendar_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): CalendarProxy

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
    _init(config?: CalendarProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_calendar_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_calendar_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_calendar_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_calendar_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_calendar_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module CalendarSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Calendar.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface CalendarSkeleton extends Gio.DBusInterface, Calendar {

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

    // Class property signals of Goa-1.0.Goa.CalendarSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaCalendarSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class CalendarSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.CalendarSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.CalendarSkeleton

    constructor(config?: CalendarSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
     * @constructor 
     */
    static new(): CalendarSkeleton
    _init(config?: CalendarSkeleton.ConstructorProperties): void
}

export module ChatProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Chat.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ChatProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Chat {

    // Class property signals of Goa-1.0.Goa.ChatProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaChatProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ChatProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ChatProxy

    static name: string

    // Constructors of Goa-1.0.Goa.ChatProxy

    constructor(config?: ChatProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_chat_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_chat_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): ChatProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_chat_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_chat_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ChatProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_chat_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_chat_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ChatProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_chat_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ChatProxy

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
    _init(config?: ChatProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_chat_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_chat_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_chat_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_chat_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_chat_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module ChatSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Chat.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ChatSkeleton extends Gio.DBusInterface, Chat {

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

    // Class property signals of Goa-1.0.Goa.ChatSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaChatSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ChatSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ChatSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.ChatSkeleton

    constructor(config?: ChatSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
     * @constructor 
     */
    static new(): ChatSkeleton
    _init(config?: ChatSkeleton.ConstructorProperties): void
}

export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `account-added`
     */
    export interface AccountAddedSignalCallback {
        (object: Object): void
    }

    /**
     * Signal callback interface for `account-changed`
     */
    export interface AccountChangedSignalCallback {
        (object: Object): void
    }

    /**
     * Signal callback interface for `account-removed`
     */
    export interface AccountRemovedSignalCallback {
        (object: Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Client extends Gio.AsyncInitable, Gio.Initable {

    // Own properties of Goa-1.0.Goa.Client

    /**
     * The #GDBusObjectManager used by the #GoaClient instance.
     */
    readonly objectManager: Gio.DBusObjectManager

    // Owm methods of Goa-1.0.Goa.Client

    /**
     * Gets all accounts that `self` knows about. The result is a list of
     * #GoaObject instances where each object at least has an #GoaAccount
     * interface (that can be obtained via the goa_object_get_account()
     * method) but may also implement other interfaces such as
     * #GoaMail or #GoaFiles.
     */
    getAccounts(): Object[]
    /**
     * Gets the #GoaManager for `self,` if any.
     */
    getManager(): Manager | null
    /**
     * Gets the #GDBusObjectManager used by `self`.
     */
    getObjectManager(): Gio.DBusObjectManager
    /**
     * Finds and returns the #GoaObject instance whose
     * <link
     * linkend="gdbus-property-org-gnome-OnlineAccounts-Account.Id">"Id"</link>
     * D-Bus property matches `id`.
     * @param id The ID to look for.
     */
    lookupById(id: string): Object

    // Own signals of Goa-1.0.Goa.Client

    connect(sigName: "account-added", callback: Client.AccountAddedSignalCallback): number
    on(sigName: "account-added", callback: Client.AccountAddedSignalCallback): number
    once(sigName: "account-added", callback: Client.AccountAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-added", ...args: any[]): void
    connect(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): number
    on(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): number
    once(sigName: "account-changed", callback: Client.AccountChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-changed", ...args: any[]): void
    connect(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): number
    on(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): number
    once(sigName: "account-removed", callback: Client.AccountRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "account-removed", ...args: any[]): void

    // Class property signals of Goa-1.0.Goa.Client

    connect(sigName: "notify::object-manager", callback: any): number
    on(sigName: "notify::object-manager", callback: any): number
    once(sigName: "notify::object-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GoaClient is used for accessing the GNOME Online Accounts service
 * from a client program.
 * @class 
 */
export class Client extends GObject.Object {

    // Own properties of Goa-1.0.Goa.Client

    static name: string

    // Constructors of Goa-1.0.Goa.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_client_new().
     * @constructor 
     * @param res A #GAsyncResult.
     */
    static newFinish(res: Gio.AsyncResult): Client
    /**
     * Synchronously gets a #GoaClient for the local system.
     * @constructor 
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(cancellable: Gio.Cancellable | null): Client
    _init(config?: Client.ConstructorProperties): void
    /**
     * Asynchronously gets a #GoaClient. When the operation is
     * finished, `callback` will be invoked in the <link
     * linkend="g-main-context-push-thread-default">thread-default main
     * loop</link> of the thread you are calling this method from.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback Function that will be called when the result is ready.
     */
    static new(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module ContactsProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Contacts.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ContactsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Contacts {

    // Class property signals of Goa-1.0.Goa.ContactsProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaContactsProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ContactsProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ContactsProxy

    static name: string

    // Constructors of Goa-1.0.Goa.ContactsProxy

    constructor(config?: ContactsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_contacts_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_contacts_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): ContactsProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_contacts_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_contacts_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ContactsProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_contacts_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_contacts_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ContactsProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_contacts_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ContactsProxy

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
    _init(config?: ContactsProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_contacts_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_contacts_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_contacts_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_contacts_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_contacts_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module ContactsSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Contacts.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ContactsSkeleton extends Gio.DBusInterface, Contacts {

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

    // Class property signals of Goa-1.0.Goa.ContactsSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaContactsSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ContactsSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ContactsSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.ContactsSkeleton

    constructor(config?: ContactsSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
     * @constructor 
     */
    static new(): ContactsSkeleton
    _init(config?: ContactsSkeleton.ConstructorProperties): void
}

export module DocumentsProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Documents.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface DocumentsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Documents {

    // Class property signals of Goa-1.0.Goa.DocumentsProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaDocumentsProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DocumentsProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.DocumentsProxy

    static name: string

    // Constructors of Goa-1.0.Goa.DocumentsProxy

    constructor(config?: DocumentsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_documents_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_documents_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): DocumentsProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_documents_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_documents_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): DocumentsProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_documents_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_documents_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): DocumentsProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_documents_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): DocumentsProxy

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
    _init(config?: DocumentsProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_documents_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_documents_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_documents_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_documents_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_documents_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module DocumentsSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Documents.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface DocumentsSkeleton extends Gio.DBusInterface, Documents {

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

    // Class property signals of Goa-1.0.Goa.DocumentsSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaDocumentsSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class DocumentsSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.DocumentsSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.DocumentsSkeleton

    constructor(config?: DocumentsSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
     * @constructor 
     */
    static new(): DocumentsSkeleton
    _init(config?: DocumentsSkeleton.ConstructorProperties): void
}

export module ExchangeProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Exchange.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ExchangeProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Exchange {

    // Class property signals of Goa-1.0.Goa.ExchangeProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: any): number
    on(sigName: "notify::host", callback: any): number
    once(sigName: "notify::host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaExchangeProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ExchangeProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ExchangeProxy

    static name: string

    // Constructors of Goa-1.0.Goa.ExchangeProxy

    constructor(config?: ExchangeProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_exchange_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_exchange_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): ExchangeProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_exchange_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_exchange_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ExchangeProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_exchange_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_exchange_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ExchangeProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_exchange_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ExchangeProxy

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
    _init(config?: ExchangeProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_exchange_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_exchange_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_exchange_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_exchange_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_exchange_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module ExchangeSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Exchange.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ExchangeSkeleton extends Gio.DBusInterface, Exchange {

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

    // Class property signals of Goa-1.0.Goa.ExchangeSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::host", callback: any): number
    on(sigName: "notify::host", callback: any): number
    once(sigName: "notify::host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::host", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaExchangeSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ExchangeSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ExchangeSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.ExchangeSkeleton

    constructor(config?: ExchangeSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
     * @constructor 
     */
    static new(): ExchangeSkeleton
    _init(config?: ExchangeSkeleton.ConstructorProperties): void
}

export module FilesProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Files.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface FilesProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Files {

    // Class property signals of Goa-1.0.Goa.FilesProxy

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
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaFilesProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class FilesProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.FilesProxy

    static name: string

    // Constructors of Goa-1.0.Goa.FilesProxy

    constructor(config?: FilesProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_files_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_files_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): FilesProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_files_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_files_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): FilesProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_files_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_files_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): FilesProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_files_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): FilesProxy

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
    _init(config?: FilesProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_files_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_files_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_files_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_files_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_files_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module FilesSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Files.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface FilesSkeleton extends Gio.DBusInterface, Files {

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

    // Class property signals of Goa-1.0.Goa.FilesSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::accept-ssl-errors", callback: any): number
    on(sigName: "notify::accept-ssl-errors", callback: any): number
    once(sigName: "notify::accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaFilesSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class FilesSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.FilesSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.FilesSkeleton

    constructor(config?: FilesSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
     * @constructor 
     */
    static new(): FilesSkeleton
    _init(config?: FilesSkeleton.ConstructorProperties): void
}

export module MailProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Mail.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface MailProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Mail {

    // Class property signals of Goa-1.0.Goa.MailProxy

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
    connect(sigName: "notify::email-address", callback: any): number
    on(sigName: "notify::email-address", callback: any): number
    once(sigName: "notify::email-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    once(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: any): number
    on(sigName: "notify::imap-host", callback: any): number
    once(sigName: "notify::imap-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: any): number
    on(sigName: "notify::imap-supported", callback: any): number
    once(sigName: "notify::imap-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: any): number
    on(sigName: "notify::imap-use-ssl", callback: any): number
    once(sigName: "notify::imap-use-ssl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: any): number
    on(sigName: "notify::imap-use-tls", callback: any): number
    once(sigName: "notify::imap-use-tls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: any): number
    on(sigName: "notify::imap-user-name", callback: any): number
    once(sigName: "notify::imap-user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    once(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: any): number
    on(sigName: "notify::smtp-auth-login", callback: any): number
    once(sigName: "notify::smtp-auth-login", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: any): number
    on(sigName: "notify::smtp-auth-plain", callback: any): number
    once(sigName: "notify::smtp-auth-plain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    once(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: any): number
    on(sigName: "notify::smtp-host", callback: any): number
    once(sigName: "notify::smtp-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: any): number
    on(sigName: "notify::smtp-supported", callback: any): number
    once(sigName: "notify::smtp-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: any): number
    on(sigName: "notify::smtp-use-auth", callback: any): number
    once(sigName: "notify::smtp-use-auth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: any): number
    on(sigName: "notify::smtp-use-ssl", callback: any): number
    once(sigName: "notify::smtp-use-ssl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: any): number
    on(sigName: "notify::smtp-use-tls", callback: any): number
    once(sigName: "notify::smtp-use-tls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: any): number
    on(sigName: "notify::smtp-user-name", callback: any): number
    once(sigName: "notify::smtp-user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMailProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MailProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MailProxy

    static name: string

    // Constructors of Goa-1.0.Goa.MailProxy

    constructor(config?: MailProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_mail_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_mail_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): MailProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_mail_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_mail_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): MailProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_mail_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_mail_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): MailProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_mail_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): MailProxy

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
    _init(config?: MailProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_mail_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_mail_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_mail_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_mail_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_mail_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module MailSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Mail.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface MailSkeleton extends Gio.DBusInterface, Mail {

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

    // Class property signals of Goa-1.0.Goa.MailSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::email-address", callback: any): number
    on(sigName: "notify::email-address", callback: any): number
    once(sigName: "notify::email-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    on(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    once(sigName: "notify::imap-accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::imap-host", callback: any): number
    on(sigName: "notify::imap-host", callback: any): number
    once(sigName: "notify::imap-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-host", ...args: any[]): void
    connect(sigName: "notify::imap-supported", callback: any): number
    on(sigName: "notify::imap-supported", callback: any): number
    once(sigName: "notify::imap-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-supported", ...args: any[]): void
    connect(sigName: "notify::imap-use-ssl", callback: any): number
    on(sigName: "notify::imap-use-ssl", callback: any): number
    once(sigName: "notify::imap-use-ssl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-use-ssl", ...args: any[]): void
    connect(sigName: "notify::imap-use-tls", callback: any): number
    on(sigName: "notify::imap-use-tls", callback: any): number
    once(sigName: "notify::imap-use-tls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-use-tls", ...args: any[]): void
    connect(sigName: "notify::imap-user-name", callback: any): number
    on(sigName: "notify::imap-user-name", callback: any): number
    once(sigName: "notify::imap-user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::imap-user-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    on(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    once(sigName: "notify::smtp-accept-ssl-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-accept-ssl-errors", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-login", callback: any): number
    on(sigName: "notify::smtp-auth-login", callback: any): number
    once(sigName: "notify::smtp-auth-login", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-login", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-plain", callback: any): number
    on(sigName: "notify::smtp-auth-plain", callback: any): number
    once(sigName: "notify::smtp-auth-plain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-plain", ...args: any[]): void
    connect(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    on(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    once(sigName: "notify::smtp-auth-xoauth2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-auth-xoauth2", ...args: any[]): void
    connect(sigName: "notify::smtp-host", callback: any): number
    on(sigName: "notify::smtp-host", callback: any): number
    once(sigName: "notify::smtp-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-host", ...args: any[]): void
    connect(sigName: "notify::smtp-supported", callback: any): number
    on(sigName: "notify::smtp-supported", callback: any): number
    once(sigName: "notify::smtp-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-supported", ...args: any[]): void
    connect(sigName: "notify::smtp-use-auth", callback: any): number
    on(sigName: "notify::smtp-use-auth", callback: any): number
    once(sigName: "notify::smtp-use-auth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-auth", ...args: any[]): void
    connect(sigName: "notify::smtp-use-ssl", callback: any): number
    on(sigName: "notify::smtp-use-ssl", callback: any): number
    once(sigName: "notify::smtp-use-ssl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-ssl", ...args: any[]): void
    connect(sigName: "notify::smtp-use-tls", callback: any): number
    on(sigName: "notify::smtp-use-tls", callback: any): number
    once(sigName: "notify::smtp-use-tls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-use-tls", ...args: any[]): void
    connect(sigName: "notify::smtp-user-name", callback: any): number
    on(sigName: "notify::smtp-user-name", callback: any): number
    once(sigName: "notify::smtp-user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::smtp-user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMailSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MailSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MailSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.MailSkeleton

    constructor(config?: MailSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
     * @constructor 
     */
    static new(): MailSkeleton
    _init(config?: MailSkeleton.ConstructorProperties): void
}

export module ManagerProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Manager.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ManagerProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Manager {

    // Class property signals of Goa-1.0.Goa.ManagerProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaManagerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ManagerProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ManagerProxy

    static name: string

    // Constructors of Goa-1.0.Goa.ManagerProxy

    constructor(config?: ManagerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_manager_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_proxy_new().
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
     * Finishes an operation started with goa_manager_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_manager_proxy_new_for_bus().
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
     * Like goa_manager_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_proxy_new_for_bus() for the asynchronous version of this constructor.
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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_manager_proxy_new() for the asynchronous version of this constructor.
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
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_manager_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_manager_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_manager_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_manager_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Manager.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ManagerSkeleton extends Gio.DBusInterface, Manager {

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

    // Class property signals of Goa-1.0.Goa.ManagerSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaManagerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ManagerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ManagerSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.ManagerSkeleton

    constructor(config?: ManagerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
     * @constructor 
     */
    static new(): ManagerSkeleton
    _init(config?: ManagerSkeleton.ConstructorProperties): void
}

export module MapsProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Maps.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface MapsProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Maps {

    // Class property signals of Goa-1.0.Goa.MapsProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMapsProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MapsProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MapsProxy

    static name: string

    // Constructors of Goa-1.0.Goa.MapsProxy

    constructor(config?: MapsProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_maps_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_maps_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): MapsProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_maps_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_maps_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): MapsProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_maps_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_maps_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): MapsProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_maps_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): MapsProxy

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
    _init(config?: MapsProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_maps_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_maps_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_maps_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_maps_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_maps_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module MapsSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Maps.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface MapsSkeleton extends Gio.DBusInterface, Maps {

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

    // Class property signals of Goa-1.0.Goa.MapsSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMapsSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MapsSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MapsSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.MapsSkeleton

    constructor(config?: MapsSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
     * @constructor 
     */
    static new(): MapsSkeleton
    _init(config?: MapsSkeleton.ConstructorProperties): void
}

export module MediaServerProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, MediaServer.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface MediaServerProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, MediaServer {

    // Class property signals of Goa-1.0.Goa.MediaServerProxy

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
    connect(sigName: "notify::dlna-supported", callback: any): number
    on(sigName: "notify::dlna-supported", callback: any): number
    once(sigName: "notify::dlna-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: any): number
    on(sigName: "notify::udn", callback: any): number
    once(sigName: "notify::udn", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMediaServerProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MediaServerProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MediaServerProxy

    static name: string

    // Constructors of Goa-1.0.Goa.MediaServerProxy

    constructor(config?: MediaServerProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_media_server_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_media_server_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): MediaServerProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_media_server_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_media_server_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): MediaServerProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_media_server_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_media_server_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): MediaServerProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_media_server_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): MediaServerProxy

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
    _init(config?: MediaServerProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_media_server_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_media_server_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_media_server_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_media_server_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_media_server_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module MediaServerSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, MediaServer.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface MediaServerSkeleton extends Gio.DBusInterface, MediaServer {

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

    // Class property signals of Goa-1.0.Goa.MediaServerSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::dlna-supported", callback: any): number
    on(sigName: "notify::dlna-supported", callback: any): number
    once(sigName: "notify::dlna-supported", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dlna-supported", ...args: any[]): void
    connect(sigName: "notify::udn", callback: any): number
    on(sigName: "notify::udn", callback: any): number
    once(sigName: "notify::udn", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::udn", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMediaServerSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MediaServerSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MediaServerSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.MediaServerSkeleton

    constructor(config?: MediaServerSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
     * @constructor 
     */
    static new(): MediaServerSkeleton
    _init(config?: MediaServerSkeleton.ConstructorProperties): void
}

export module MusicProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Music.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface MusicProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Music {

    // Class property signals of Goa-1.0.Goa.MusicProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMusicProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MusicProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.MusicProxy

    static name: string

    // Constructors of Goa-1.0.Goa.MusicProxy

    constructor(config?: MusicProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_music_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_music_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): MusicProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_music_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_music_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): MusicProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_music_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_music_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): MusicProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_music_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): MusicProxy

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
    _init(config?: MusicProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_music_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_music_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_music_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_music_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_music_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module MusicSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Music.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface MusicSkeleton extends Gio.DBusInterface, Music {

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

    // Class property signals of Goa-1.0.Goa.MusicSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaMusicSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class MusicSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.MusicSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.MusicSkeleton

    constructor(config?: MusicSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
     * @constructor 
     */
    static new(): MusicSkeleton
    _init(config?: MusicSkeleton.ConstructorProperties): void
}

export module OAuth2BasedProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, OAuth2Based.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface OAuth2BasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, OAuth2Based {

    // Class property signals of Goa-1.0.Goa.OAuth2BasedProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaOAuth2BasedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class OAuth2BasedProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxy

    static name: string

    // Constructors of Goa-1.0.Goa.OAuth2BasedProxy

    constructor(config?: OAuth2BasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_oauth2_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): OAuth2BasedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_oauth2_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth2_based_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): OAuth2BasedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_oauth2_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): OAuth2BasedProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth2_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): OAuth2BasedProxy

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
    _init(config?: OAuth2BasedProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth2_based_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_oauth2_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_oauth2_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth2_based_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_oauth2_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module OAuth2BasedSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, OAuth2Based.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface OAuth2BasedSkeleton extends Gio.DBusInterface, OAuth2Based {

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

    // Class property signals of Goa-1.0.Goa.OAuth2BasedSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaOAuth2BasedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class OAuth2BasedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.OAuth2BasedSkeleton

    constructor(config?: OAuth2BasedSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
     * @constructor 
     */
    static new(): OAuth2BasedSkeleton
    _init(config?: OAuth2BasedSkeleton.ConstructorProperties): void
}

export module OAuthBasedProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, OAuthBased.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface OAuthBasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, OAuthBased {

    // Class property signals of Goa-1.0.Goa.OAuthBasedProxy

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
    connect(sigName: "notify::consumer-key", callback: any): number
    on(sigName: "notify::consumer-key", callback: any): number
    once(sigName: "notify::consumer-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: any): number
    on(sigName: "notify::consumer-secret", callback: any): number
    once(sigName: "notify::consumer-secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaOAuthBasedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class OAuthBasedProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.OAuthBasedProxy

    static name: string

    // Constructors of Goa-1.0.Goa.OAuthBasedProxy

    constructor(config?: OAuthBasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_oauth_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): OAuthBasedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_oauth_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_oauth_based_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): OAuthBasedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_oauth_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): OAuthBasedProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_oauth_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): OAuthBasedProxy

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
    _init(config?: OAuthBasedProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth_based_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_oauth_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_oauth_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_oauth_based_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_oauth_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module OAuthBasedSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, OAuthBased.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface OAuthBasedSkeleton extends Gio.DBusInterface, OAuthBased {

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

    // Class property signals of Goa-1.0.Goa.OAuthBasedSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::consumer-key", callback: any): number
    on(sigName: "notify::consumer-key", callback: any): number
    once(sigName: "notify::consumer-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::consumer-key", ...args: any[]): void
    connect(sigName: "notify::consumer-secret", callback: any): number
    on(sigName: "notify::consumer-secret", callback: any): number
    once(sigName: "notify::consumer-secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::consumer-secret", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaOAuthBasedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class OAuthBasedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.OAuthBasedSkeleton

    constructor(config?: OAuthBasedSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
     * @constructor 
     */
    static new(): OAuthBasedSkeleton
    _init(config?: OAuthBasedSkeleton.ConstructorProperties): void
}

export module ObjectManagerClient {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusObjectManager.ConstructorProperties, Gio.Initable.ConstructorProperties, Gio.DBusObjectManagerClient.ConstructorProperties {
    }

}

export interface ObjectManagerClient extends Gio.AsyncInitable, Gio.DBusObjectManager, Gio.Initable {

    // Class property signals of Goa-1.0.Goa.ObjectManagerClient

    connect(sigName: "notify::bus-type", callback: any): number
    on(sigName: "notify::bus-type", callback: any): number
    once(sigName: "notify::bus-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-type", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-destroy-notify", callback: any): number
    on(sigName: "notify::get-proxy-type-destroy-notify", callback: any): number
    once(sigName: "notify::get-proxy-type-destroy-notify", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::get-proxy-type-destroy-notify", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-func", callback: any): number
    on(sigName: "notify::get-proxy-type-func", callback: any): number
    once(sigName: "notify::get-proxy-type-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::get-proxy-type-func", ...args: any[]): void
    connect(sigName: "notify::get-proxy-type-user-data", callback: any): number
    on(sigName: "notify::get-proxy-type-user-data", callback: any): number
    once(sigName: "notify::get-proxy-type-user-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::get-proxy-type-user-data", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-owner", callback: any): number
    on(sigName: "notify::name-owner", callback: any): number
    once(sigName: "notify::name-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name-owner", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaObjectManagerClient structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ObjectManagerClient extends Gio.DBusObjectManagerClient {

    // Own properties of Goa-1.0.Goa.ObjectManagerClient

    static name: string

    // Constructors of Goa-1.0.Goa.ObjectManagerClient

    constructor(config?: ObjectManagerClient.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_object_manager_client_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_object_manager_client_new().
     */
    static newFinish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of newFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Finishes an operation started with goa_object_manager_client_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_object_manager_client_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ObjectManagerClient

    // Overloads of newForBusFinish

    /**
     * Finishes an operation started with g_dbus_object_manager_client_new_for_bus().
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback passed to g_dbus_object_manager_client_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusObjectManagerClient
    /**
     * Like goa_object_manager_client_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_object_manager_client_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ObjectManagerClient

    // Overloads of newForBusSync

    /**
     * Like g_dbus_object_manager_client_new_sync() but takes a #GBusType instead
     * of a #GDBusConnection.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new_for_bus()
     * for the asynchronous version.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    /**
     * Synchronously creates #GDBusObjectManagerClient using goa_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_object_manager_client_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ObjectManagerClient

    // Overloads of newSync

    /**
     * Creates a new #GDBusObjectManagerClient object.
     * 
     * This is a synchronous failable constructor - the calling thread is
     * blocked until a reply is received. See g_dbus_object_manager_client_new()
     * for the asynchronous version.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name), or %NULL when not using a message bus connection.
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null): Gio.DBusObjectManagerClient
    _init(config?: ObjectManagerClient.ConstructorProperties): void
    /**
     * Asynchronously creates #GDBusObjectManagerClient using goa_object_manager_client_get_proxy_type() as the #GDBusProxyTypeFunc. See g_dbus_object_manager_client_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_object_manager_client_new_finish() to get the result of the operation.
     * 
     * See goa_object_manager_client_new_sync() for the synchronous, blocking version of this constructor.
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of new

    /**
     * Asynchronously creates a new #GDBusObjectManagerClient object.
     * 
     * This is an asynchronous failable constructor. When the result is
     * ready, `callback` will be invoked in the
     * [thread-default main context][g-main-context-push-thread-default]
     * of the thread you are calling this method from. You can
     * then call g_dbus_object_manager_client_new_finish() to get the result. See
     * g_dbus_object_manager_client_new_sync() for the synchronous version.
     * @param connection A #GDBusConnection.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static new(connection: Gio.DBusConnection, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Like goa_object_manager_client_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_object_manager_client_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_object_manager_client_new_for_bus_sync() for the synchronous, blocking version of this constructor.
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of newForBus

    /**
     * Like g_dbus_object_manager_client_new() but takes a #GBusType instead of a
     * #GDBusConnection.
     * 
     * This is an asynchronous failable constructor. When the result is
     * ready, `callback` will be invoked in the
     * [thread-default main loop][g-main-context-push-thread-default]
     * of the thread you are calling this method from. You can
     * then call g_dbus_object_manager_client_new_for_bus_finish() to get the result. See
     * g_dbus_object_manager_client_new_for_bus_sync() for the synchronous version.
     * @param busType A #GBusType.
     * @param flags Zero or more flags from the #GDBusObjectManagerClientFlags enumeration.
     * @param name The owner of the control object (unique or well-known name).
     * @param objectPath The object path of the control object.
     * @param getProxyTypeFunc A #GDBusProxyTypeFunc function or %NULL to always construct #GDBusProxy proxies.
     * @param cancellable A #GCancellable or %NULL
     * @param callback A #GAsyncReadyCallback to call when the request is satisfied.
     */
    static newForBus(busType: Gio.BusType, flags: Gio.DBusObjectManagerClientFlags, name: string, objectPath: string, getProxyTypeFunc: Gio.DBusProxyTypeFunc | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * A #GDBusProxyTypeFunc that maps `interface_name` to the generated #GDBusObjectProxy derived and #GDBusProxy derived types.
     * @param manager A #GDBusObjectManagerClient.
     * @param objectPath The object path of the remote object (unused).
     * @param interfaceName Interface name of the remote object or %NULL to get the object proxy #GType.
     * @param userData User data (unused).
     */
    static getProxyType(manager: Gio.DBusObjectManagerClient, objectPath: string, interfaceName: string | null, userData: object | null): GObject.GType
}

export module ObjectProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, Object.ConstructorProperties, Gio.DBusObjectProxy.ConstructorProperties {
    }

}

export interface ObjectProxy extends Gio.DBusObject, Object {

    // Class property signals of Goa-1.0.Goa.ObjectProxy

    connect(sigName: "notify::g-connection", callback: any): number
    on(sigName: "notify::g-connection", callback: any): number
    once(sigName: "notify::g-connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-connection", ...args: any[]): void
    connect(sigName: "notify::g-object-path", callback: any): number
    on(sigName: "notify::g-object-path", callback: any): number
    once(sigName: "notify::g-object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: any): number
    on(sigName: "notify::calendar", callback: any): number
    once(sigName: "notify::calendar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: any): number
    on(sigName: "notify::chat", callback: any): number
    once(sigName: "notify::chat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: any): number
    on(sigName: "notify::contacts", callback: any): number
    once(sigName: "notify::contacts", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: any): number
    on(sigName: "notify::documents", callback: any): number
    once(sigName: "notify::documents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: any): number
    on(sigName: "notify::exchange", callback: any): number
    once(sigName: "notify::exchange", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: any): number
    on(sigName: "notify::files", callback: any): number
    once(sigName: "notify::files", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: any): number
    on(sigName: "notify::mail", callback: any): number
    once(sigName: "notify::mail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: any): number
    on(sigName: "notify::manager", callback: any): number
    once(sigName: "notify::manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: any): number
    on(sigName: "notify::maps", callback: any): number
    once(sigName: "notify::maps", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: any): number
    on(sigName: "notify::media-server", callback: any): number
    once(sigName: "notify::media-server", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: any): number
    on(sigName: "notify::music", callback: any): number
    once(sigName: "notify::music", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: any): number
    on(sigName: "notify::oauth-based", callback: any): number
    once(sigName: "notify::oauth-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: any): number
    on(sigName: "notify::oauth2-based", callback: any): number
    once(sigName: "notify::oauth2-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: any): number
    on(sigName: "notify::password-based", callback: any): number
    once(sigName: "notify::password-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: any): number
    on(sigName: "notify::photos", callback: any): number
    once(sigName: "notify::photos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: any): number
    on(sigName: "notify::printers", callback: any): number
    once(sigName: "notify::printers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: any): number
    on(sigName: "notify::read-later", callback: any): number
    once(sigName: "notify::read-later", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: any): number
    on(sigName: "notify::ticketing", callback: any): number
    once(sigName: "notify::ticketing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: any): number
    on(sigName: "notify::todo", callback: any): number
    once(sigName: "notify::todo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaObjectProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ObjectProxy extends Gio.DBusObjectProxy {

    // Own properties of Goa-1.0.Goa.ObjectProxy

    static name: string

    // Constructors of Goa-1.0.Goa.ObjectProxy

    constructor(config?: ObjectProxy.ConstructorProperties) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param objectPath An object path.
     */
    constructor(connection: Gio.DBusConnection, objectPath: string) 
    /**
     * Creates a new proxy object.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param objectPath An object path.
     */
    static new(connection: Gio.DBusConnection, objectPath: string): ObjectProxy

    // Overloads of new

    /**
     * Creates a new #GDBusObjectProxy for the given connection and
     * object path.
     * @constructor 
     * @param connection a #GDBusConnection
     * @param objectPath the object path
     */
    static new(connection: Gio.DBusConnection, objectPath: string): Gio.DBusObjectProxy
    _init(config?: ObjectProxy.ConstructorProperties): void
}

export module ObjectSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusObject.ConstructorProperties, Object.ConstructorProperties, Gio.DBusObjectSkeleton.ConstructorProperties {
    }

}

export interface ObjectSkeleton extends Gio.DBusObject, Object {

    // Owm methods of Goa-1.0.Goa.ObjectSkeleton

    /**
     * Sets the #GoaAccount instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link> on `object`.
     * @param interface A #GoaAccount or %NULL to clear the interface.
     */
    setAccount(interface: Account | null): void
    /**
     * Sets the #GoaCalendar instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link> on `object`.
     * @param interface A #GoaCalendar or %NULL to clear the interface.
     */
    setCalendar(interface: Calendar | null): void
    /**
     * Sets the #GoaChat instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link> on `object`.
     * @param interface A #GoaChat or %NULL to clear the interface.
     */
    setChat(interface: Chat | null): void
    /**
     * Sets the #GoaContacts instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link> on `object`.
     * @param interface A #GoaContacts or %NULL to clear the interface.
     */
    setContacts(interface: Contacts | null): void
    /**
     * Sets the #GoaDocuments instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link> on `object`.
     * @param interface A #GoaDocuments or %NULL to clear the interface.
     */
    setDocuments(interface: Documents | null): void
    /**
     * Sets the #GoaExchange instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link> on `object`.
     * @param interface A #GoaExchange or %NULL to clear the interface.
     */
    setExchange(interface: Exchange | null): void
    /**
     * Sets the #GoaFiles instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link> on `object`.
     * @param interface A #GoaFiles or %NULL to clear the interface.
     */
    setFiles(interface: Files | null): void
    /**
     * Sets the #GoaMail instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link> on `object`.
     * @param interface A #GoaMail or %NULL to clear the interface.
     */
    setMail(interface: Mail | null): void
    /**
     * Sets the #GoaManager instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link> on `object`.
     * @param interface A #GoaManager or %NULL to clear the interface.
     */
    setManager(interface: Manager | null): void
    /**
     * Sets the #GoaMaps instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link> on `object`.
     * @param interface A #GoaMaps or %NULL to clear the interface.
     */
    setMaps(interface: Maps | null): void
    /**
     * Sets the #GoaMediaServer instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link> on `object`.
     * @param interface A #GoaMediaServer or %NULL to clear the interface.
     */
    setMediaServer(interface: MediaServer | null): void
    /**
     * Sets the #GoaMusic instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link> on `object`.
     * @param interface A #GoaMusic or %NULL to clear the interface.
     */
    setMusic(interface: Music | null): void
    /**
     * Sets the #GoaOAuth2Based instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link> on `object`.
     * @param interface A #GoaOAuth2Based or %NULL to clear the interface.
     */
    setOauth2Based(interface: OAuth2Based | null): void
    /**
     * Sets the #GoaOAuthBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link> on `object`.
     * @param interface A #GoaOAuthBased or %NULL to clear the interface.
     */
    setOauthBased(interface: OAuthBased | null): void
    /**
     * Sets the #GoaPasswordBased instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link> on `object`.
     * @param interface A #GoaPasswordBased or %NULL to clear the interface.
     */
    setPasswordBased(interface: PasswordBased | null): void
    /**
     * Sets the #GoaPhotos instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link> on `object`.
     * @param interface A #GoaPhotos or %NULL to clear the interface.
     */
    setPhotos(interface: Photos | null): void
    /**
     * Sets the #GoaPrinters instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link> on `object`.
     * @param interface A #GoaPrinters or %NULL to clear the interface.
     */
    setPrinters(interface: Printers | null): void
    /**
     * Sets the #GoaReadLater instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link> on `object`.
     * @param interface A #GoaReadLater or %NULL to clear the interface.
     */
    setReadLater(interface: ReadLater | null): void
    /**
     * Sets the #GoaTicketing instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link> on `object`.
     * @param interface A #GoaTicketing or %NULL to clear the interface.
     */
    setTicketing(interface: Ticketing | null): void
    /**
     * Sets the #GoaTodo instance for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link> on `object`.
     * @param interface A #GoaTodo or %NULL to clear the interface.
     */
    setTodo(interface: Todo | null): void

    // Class property signals of Goa-1.0.Goa.ObjectSkeleton

    connect(sigName: "notify::g-object-path", callback: any): number
    on(sigName: "notify::g-object-path", callback: any): number
    once(sigName: "notify::g-object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-object-path", ...args: any[]): void
    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
    connect(sigName: "notify::calendar", callback: any): number
    on(sigName: "notify::calendar", callback: any): number
    once(sigName: "notify::calendar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar", ...args: any[]): void
    connect(sigName: "notify::chat", callback: any): number
    on(sigName: "notify::chat", callback: any): number
    once(sigName: "notify::chat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::chat", ...args: any[]): void
    connect(sigName: "notify::contacts", callback: any): number
    on(sigName: "notify::contacts", callback: any): number
    once(sigName: "notify::contacts", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contacts", ...args: any[]): void
    connect(sigName: "notify::documents", callback: any): number
    on(sigName: "notify::documents", callback: any): number
    once(sigName: "notify::documents", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::documents", ...args: any[]): void
    connect(sigName: "notify::exchange", callback: any): number
    on(sigName: "notify::exchange", callback: any): number
    once(sigName: "notify::exchange", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::exchange", ...args: any[]): void
    connect(sigName: "notify::files", callback: any): number
    on(sigName: "notify::files", callback: any): number
    once(sigName: "notify::files", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::files", ...args: any[]): void
    connect(sigName: "notify::mail", callback: any): number
    on(sigName: "notify::mail", callback: any): number
    once(sigName: "notify::mail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail", ...args: any[]): void
    connect(sigName: "notify::manager", callback: any): number
    on(sigName: "notify::manager", callback: any): number
    once(sigName: "notify::manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::maps", callback: any): number
    on(sigName: "notify::maps", callback: any): number
    once(sigName: "notify::maps", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maps", ...args: any[]): void
    connect(sigName: "notify::media-server", callback: any): number
    on(sigName: "notify::media-server", callback: any): number
    once(sigName: "notify::media-server", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-server", ...args: any[]): void
    connect(sigName: "notify::music", callback: any): number
    on(sigName: "notify::music", callback: any): number
    once(sigName: "notify::music", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::music", ...args: any[]): void
    connect(sigName: "notify::oauth-based", callback: any): number
    on(sigName: "notify::oauth-based", callback: any): number
    once(sigName: "notify::oauth-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::oauth-based", ...args: any[]): void
    connect(sigName: "notify::oauth2-based", callback: any): number
    on(sigName: "notify::oauth2-based", callback: any): number
    once(sigName: "notify::oauth2-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::oauth2-based", ...args: any[]): void
    connect(sigName: "notify::password-based", callback: any): number
    on(sigName: "notify::password-based", callback: any): number
    once(sigName: "notify::password-based", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::password-based", ...args: any[]): void
    connect(sigName: "notify::photos", callback: any): number
    on(sigName: "notify::photos", callback: any): number
    once(sigName: "notify::photos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photos", ...args: any[]): void
    connect(sigName: "notify::printers", callback: any): number
    on(sigName: "notify::printers", callback: any): number
    once(sigName: "notify::printers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::printers", ...args: any[]): void
    connect(sigName: "notify::read-later", callback: any): number
    on(sigName: "notify::read-later", callback: any): number
    once(sigName: "notify::read-later", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-later", ...args: any[]): void
    connect(sigName: "notify::ticketing", callback: any): number
    on(sigName: "notify::ticketing", callback: any): number
    once(sigName: "notify::ticketing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ticketing", ...args: any[]): void
    connect(sigName: "notify::todo", callback: any): number
    on(sigName: "notify::todo", callback: any): number
    once(sigName: "notify::todo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::todo", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaObjectSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ObjectSkeleton extends Gio.DBusObjectSkeleton {

    // Own properties of Goa-1.0.Goa.ObjectSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.ObjectSkeleton

    constructor(config?: ObjectSkeleton.ConstructorProperties) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param objectPath An object path.
     */
    constructor(objectPath: string) 
    /**
     * Creates a new skeleton object.
     * @constructor 
     * @param objectPath An object path.
     */
    static new(objectPath: string): ObjectSkeleton

    // Overloads of new

    /**
     * Creates a new #GDBusObjectSkeleton.
     * @constructor 
     * @param objectPath An object path.
     */
    static new(objectPath: string): Gio.DBusObjectSkeleton
    _init(config?: ObjectSkeleton.ConstructorProperties): void
}

export module PasswordBasedProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, PasswordBased.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface PasswordBasedProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, PasswordBased {

    // Class property signals of Goa-1.0.Goa.PasswordBasedProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaPasswordBasedProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class PasswordBasedProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxy

    static name: string

    // Constructors of Goa-1.0.Goa.PasswordBasedProxy

    constructor(config?: PasswordBasedProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_password_based_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): PasswordBasedProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_password_based_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_password_based_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): PasswordBasedProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_password_based_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): PasswordBasedProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_password_based_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): PasswordBasedProxy

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
    _init(config?: PasswordBasedProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_password_based_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_password_based_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_password_based_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_password_based_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module PasswordBasedSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, PasswordBased.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface PasswordBasedSkeleton extends Gio.DBusInterface, PasswordBased {

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

    // Class property signals of Goa-1.0.Goa.PasswordBasedSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaPasswordBasedSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class PasswordBasedSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.PasswordBasedSkeleton

    constructor(config?: PasswordBasedSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
     * @constructor 
     */
    static new(): PasswordBasedSkeleton
    _init(config?: PasswordBasedSkeleton.ConstructorProperties): void
}

export module PhotosProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Photos.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface PhotosProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Photos {

    // Class property signals of Goa-1.0.Goa.PhotosProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaPhotosProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class PhotosProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.PhotosProxy

    static name: string

    // Constructors of Goa-1.0.Goa.PhotosProxy

    constructor(config?: PhotosProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_photos_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_photos_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): PhotosProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_photos_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_photos_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): PhotosProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_photos_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_photos_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): PhotosProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_photos_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): PhotosProxy

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
    _init(config?: PhotosProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_photos_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_photos_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_photos_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_photos_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_photos_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module PhotosSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Photos.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface PhotosSkeleton extends Gio.DBusInterface, Photos {

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

    // Class property signals of Goa-1.0.Goa.PhotosSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaPhotosSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class PhotosSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.PhotosSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.PhotosSkeleton

    constructor(config?: PhotosSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
     * @constructor 
     */
    static new(): PhotosSkeleton
    _init(config?: PhotosSkeleton.ConstructorProperties): void
}

export module PrintersProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Printers.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface PrintersProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Printers {

    // Class property signals of Goa-1.0.Goa.PrintersProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaPrintersProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class PrintersProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.PrintersProxy

    static name: string

    // Constructors of Goa-1.0.Goa.PrintersProxy

    constructor(config?: PrintersProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_printers_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_printers_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): PrintersProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_printers_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_printers_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): PrintersProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_printers_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_printers_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): PrintersProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_printers_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): PrintersProxy

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
    _init(config?: PrintersProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_printers_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_printers_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_printers_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_printers_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_printers_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module PrintersSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Printers.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface PrintersSkeleton extends Gio.DBusInterface, Printers {

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

    // Class property signals of Goa-1.0.Goa.PrintersSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaPrintersSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class PrintersSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.PrintersSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.PrintersSkeleton

    constructor(config?: PrintersSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
     * @constructor 
     */
    static new(): PrintersSkeleton
    _init(config?: PrintersSkeleton.ConstructorProperties): void
}

export module ReadLaterProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, ReadLater.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface ReadLaterProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, ReadLater {

    // Class property signals of Goa-1.0.Goa.ReadLaterProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaReadLaterProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ReadLaterProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.ReadLaterProxy

    static name: string

    // Constructors of Goa-1.0.Goa.ReadLaterProxy

    constructor(config?: ReadLaterProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_read_later_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_read_later_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): ReadLaterProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_read_later_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_read_later_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): ReadLaterProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_read_later_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_read_later_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): ReadLaterProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_read_later_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): ReadLaterProxy

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
    _init(config?: ReadLaterProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_read_later_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_read_later_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_read_later_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_read_later_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_read_later_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module ReadLaterSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, ReadLater.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface ReadLaterSkeleton extends Gio.DBusInterface, ReadLater {

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

    // Class property signals of Goa-1.0.Goa.ReadLaterSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaReadLaterSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class ReadLaterSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.ReadLaterSkeleton

    constructor(config?: ReadLaterSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
     * @constructor 
     */
    static new(): ReadLaterSkeleton
    _init(config?: ReadLaterSkeleton.ConstructorProperties): void
}

export module TicketingProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Ticketing.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface TicketingProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Ticketing {

    // Class property signals of Goa-1.0.Goa.TicketingProxy

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
    connect(sigName: "notify::details", callback: any): number
    on(sigName: "notify::details", callback: any): number
    once(sigName: "notify::details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaTicketingProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class TicketingProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.TicketingProxy

    static name: string

    // Constructors of Goa-1.0.Goa.TicketingProxy

    constructor(config?: TicketingProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_ticketing_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): TicketingProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_ticketing_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_ticketing_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): TicketingProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_ticketing_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): TicketingProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_ticketing_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): TicketingProxy

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
    _init(config?: TicketingProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_ticketing_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_ticketing_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_ticketing_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_ticketing_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_ticketing_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module TicketingSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Ticketing.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface TicketingSkeleton extends Gio.DBusInterface, Ticketing {

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

    // Class property signals of Goa-1.0.Goa.TicketingSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: "notify::details", callback: any): number
    on(sigName: "notify::details", callback: any): number
    once(sigName: "notify::details", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::details", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaTicketingSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class TicketingSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.TicketingSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.TicketingSkeleton

    constructor(config?: TicketingSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
     * @constructor 
     */
    static new(): TicketingSkeleton
    _init(config?: TicketingSkeleton.ConstructorProperties): void
}

export module TodoProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.DBusInterface.ConstructorProperties, Gio.Initable.ConstructorProperties, Todo.ConstructorProperties, Gio.DBusProxy.ConstructorProperties {
    }

}

export interface TodoProxy extends Gio.AsyncInitable, Gio.DBusInterface, Gio.Initable, Todo {

    // Class property signals of Goa-1.0.Goa.TodoProxy

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaTodoProxy structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class TodoProxy extends Gio.DBusProxy {

    // Own properties of Goa-1.0.Goa.TodoProxy

    static name: string

    // Constructors of Goa-1.0.Goa.TodoProxy

    constructor(config?: TodoProxy.ConstructorProperties) 
    /**
     * Finishes an operation started with goa_todo_proxy_new().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_todo_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): TodoProxy

    // Overloads of newFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new().
     */
    static newFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Finishes an operation started with goa_todo_proxy_new_for_bus().
     * @constructor 
     * @param res The #GAsyncResult obtained from the #GAsyncReadyCallback passed to goa_todo_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): TodoProxy

    // Overloads of newForBusFinish

    /**
     * Finishes creating a #GDBusProxy.
     * @constructor 
     * @param res A #GAsyncResult obtained from the #GAsyncReadyCallback function passed to g_dbus_proxy_new_for_bus().
     */
    static newForBusFinish(res: Gio.AsyncResult): Gio.DBusProxy
    /**
     * Like goa_todo_proxy_new_sync() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_todo_proxy_new_for_bus() for the asynchronous version of this constructor.
     * @constructor 
     * @param busType A #GBusType.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique).
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newForBusSync(busType: Gio.BusType, flags: Gio.DBusProxyFlags, name: string, objectPath: string, cancellable: Gio.Cancellable | null): TodoProxy

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
     * Synchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>. See g_dbus_proxy_new_sync() for more details.
     * 
     * The calling thread is blocked until a reply is received.
     * 
     * See goa_todo_proxy_new() for the asynchronous version of this constructor.
     * @constructor 
     * @param connection A #GDBusConnection.
     * @param flags Flags from the #GDBusProxyFlags enumeration.
     * @param name A bus name (well-known or unique) or %NULL if `connection` is not a message bus connection.
     * @param objectPath An object path.
     * @param cancellable A #GCancellable or %NULL.
     */
    static newSync(connection: Gio.DBusConnection, flags: Gio.DBusProxyFlags, name: string | null, objectPath: string, cancellable: Gio.Cancellable | null): TodoProxy

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
    _init(config?: TodoProxy.ConstructorProperties): void
    /**
     * Asynchronously creates a proxy for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>. See g_dbus_proxy_new() for more details.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_todo_proxy_new_finish() to get the result of the operation.
     * 
     * See goa_todo_proxy_new_sync() for the synchronous, blocking version of this constructor.
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
     * Like goa_todo_proxy_new() but takes a #GBusType instead of a #GDBusConnection.
     * 
     * When the operation is finished, `callback` will be invoked in the thread-default main loop of the thread you are calling this method from (see g_main_context_push_thread_default()).
     * You can then call goa_todo_proxy_new_for_bus_finish() to get the result of the operation.
     * 
     * See goa_todo_proxy_new_for_bus_sync() for the synchronous, blocking version of this constructor.
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

export module TodoSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.DBusInterface.ConstructorProperties, Todo.ConstructorProperties, Gio.DBusInterfaceSkeleton.ConstructorProperties {
    }

}

export interface TodoSkeleton extends Gio.DBusInterface, Todo {

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

    // Class property signals of Goa-1.0.Goa.TodoSkeleton

    connect(sigName: "notify::g-flags", callback: any): number
    on(sigName: "notify::g-flags", callback: any): number
    once(sigName: "notify::g-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GoaTodoSkeleton structure contains only private data and should only be accessed using the provided API.
 * @class 
 */
export class TodoSkeleton extends Gio.DBusInterfaceSkeleton {

    // Own properties of Goa-1.0.Goa.TodoSkeleton

    static name: string

    // Constructors of Goa-1.0.Goa.TodoSkeleton

    constructor(config?: TodoSkeleton.ConstructorProperties) 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a skeleton object for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
     * @constructor 
     */
    static new(): TodoSkeleton
    _init(config?: TodoSkeleton.ConstructorProperties): void
}

export interface AccountIface {

    // Own fields of Goa-1.0.Goa.AccountIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleEnsureCredentials: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    handleRemove: (object: Account, invocation: Gio.DBusMethodInvocation) => boolean
    getAttentionNeeded: (object: Account) => boolean
    getCalendarDisabled: (object: Account) => boolean
    getChatDisabled: (object: Account) => boolean
    getContactsDisabled: (object: Account) => boolean
    getDocumentsDisabled: (object: Account) => boolean
    getId: (object: Account) => string | null
    getIdentity: (object: Account) => string | null
    getIsTemporary: (object: Account) => boolean
    getMailDisabled: (object: Account) => boolean
    getPresentationIdentity: (object: Account) => string | null
    getProviderIcon: (object: Account) => string | null
    getProviderName: (object: Account) => string | null
    getProviderType: (object: Account) => string | null
    getTicketingDisabled: (object: Account) => boolean
    getFilesDisabled: (object: Account) => boolean
    getPhotosDisabled: (object: Account) => boolean
    getPrintersDisabled: (object: Account) => boolean
    getReadLaterDisabled: (object: Account) => boolean
    getMapsDisabled: (object: Account) => boolean
    getIsLocked: (object: Account) => boolean
    getMusicDisabled: (object: Account) => boolean
    getTodoDisabled: (object: Account) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Account.top_of_page">org.gnome.OnlineAccounts.Account</link>.
 * @record 
 */
export abstract class AccountIface {

    // Own properties of Goa-1.0.Goa.AccountIface

    static name: string
}

export interface AccountProxyClass {

    // Own fields of Goa-1.0.Goa.AccountProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaAccountProxy.
 * @record 
 */
export abstract class AccountProxyClass {

    // Own properties of Goa-1.0.Goa.AccountProxyClass

    static name: string
}

export interface AccountProxyPrivate {
}

export class AccountProxyPrivate {

    // Own properties of Goa-1.0.Goa.AccountProxyPrivate

    static name: string
}

export interface AccountSkeletonClass {

    // Own fields of Goa-1.0.Goa.AccountSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaAccountSkeleton.
 * @record 
 */
export abstract class AccountSkeletonClass {

    // Own properties of Goa-1.0.Goa.AccountSkeletonClass

    static name: string
}

export interface AccountSkeletonPrivate {
}

export class AccountSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.AccountSkeletonPrivate

    static name: string
}

export interface CalendarIface {

    // Own fields of Goa-1.0.Goa.CalendarIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: (object: Calendar) => boolean
    getUri: (object: Calendar) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Calendar.top_of_page">org.gnome.OnlineAccounts.Calendar</link>.
 * @record 
 */
export abstract class CalendarIface {

    // Own properties of Goa-1.0.Goa.CalendarIface

    static name: string
}

export interface CalendarProxyClass {

    // Own fields of Goa-1.0.Goa.CalendarProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaCalendarProxy.
 * @record 
 */
export abstract class CalendarProxyClass {

    // Own properties of Goa-1.0.Goa.CalendarProxyClass

    static name: string
}

export interface CalendarProxyPrivate {
}

export class CalendarProxyPrivate {

    // Own properties of Goa-1.0.Goa.CalendarProxyPrivate

    static name: string
}

export interface CalendarSkeletonClass {

    // Own fields of Goa-1.0.Goa.CalendarSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaCalendarSkeleton.
 * @record 
 */
export abstract class CalendarSkeletonClass {

    // Own properties of Goa-1.0.Goa.CalendarSkeletonClass

    static name: string
}

export interface CalendarSkeletonPrivate {
}

export class CalendarSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.CalendarSkeletonPrivate

    static name: string
}

export interface ChatIface {

    // Own fields of Goa-1.0.Goa.ChatIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Chat.top_of_page">org.gnome.OnlineAccounts.Chat</link>.
 * @record 
 */
export abstract class ChatIface {

    // Own properties of Goa-1.0.Goa.ChatIface

    static name: string
}

export interface ChatProxyClass {

    // Own fields of Goa-1.0.Goa.ChatProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaChatProxy.
 * @record 
 */
export abstract class ChatProxyClass {

    // Own properties of Goa-1.0.Goa.ChatProxyClass

    static name: string
}

export interface ChatProxyPrivate {
}

export class ChatProxyPrivate {

    // Own properties of Goa-1.0.Goa.ChatProxyPrivate

    static name: string
}

export interface ChatSkeletonClass {

    // Own fields of Goa-1.0.Goa.ChatSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaChatSkeleton.
 * @record 
 */
export abstract class ChatSkeletonClass {

    // Own properties of Goa-1.0.Goa.ChatSkeletonClass

    static name: string
}

export interface ChatSkeletonPrivate {
}

export class ChatSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ChatSkeletonPrivate

    static name: string
}

export interface ClientClass {

    // Own fields of Goa-1.0.Goa.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of Goa-1.0.Goa.ClientClass

    static name: string
}

export interface ContactsIface {

    // Own fields of Goa-1.0.Goa.ContactsIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: (object: Contacts) => boolean
    getUri: (object: Contacts) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Contacts.top_of_page">org.gnome.OnlineAccounts.Contacts</link>.
 * @record 
 */
export abstract class ContactsIface {

    // Own properties of Goa-1.0.Goa.ContactsIface

    static name: string
}

export interface ContactsProxyClass {

    // Own fields of Goa-1.0.Goa.ContactsProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaContactsProxy.
 * @record 
 */
export abstract class ContactsProxyClass {

    // Own properties of Goa-1.0.Goa.ContactsProxyClass

    static name: string
}

export interface ContactsProxyPrivate {
}

export class ContactsProxyPrivate {

    // Own properties of Goa-1.0.Goa.ContactsProxyPrivate

    static name: string
}

export interface ContactsSkeletonClass {

    // Own fields of Goa-1.0.Goa.ContactsSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaContactsSkeleton.
 * @record 
 */
export abstract class ContactsSkeletonClass {

    // Own properties of Goa-1.0.Goa.ContactsSkeletonClass

    static name: string
}

export interface ContactsSkeletonPrivate {
}

export class ContactsSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ContactsSkeletonPrivate

    static name: string
}

export interface DocumentsIface {

    // Own fields of Goa-1.0.Goa.DocumentsIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Documents.top_of_page">org.gnome.OnlineAccounts.Documents</link>.
 * @record 
 */
export abstract class DocumentsIface {

    // Own properties of Goa-1.0.Goa.DocumentsIface

    static name: string
}

export interface DocumentsProxyClass {

    // Own fields of Goa-1.0.Goa.DocumentsProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaDocumentsProxy.
 * @record 
 */
export abstract class DocumentsProxyClass {

    // Own properties of Goa-1.0.Goa.DocumentsProxyClass

    static name: string
}

export interface DocumentsProxyPrivate {
}

export class DocumentsProxyPrivate {

    // Own properties of Goa-1.0.Goa.DocumentsProxyPrivate

    static name: string
}

export interface DocumentsSkeletonClass {

    // Own fields of Goa-1.0.Goa.DocumentsSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaDocumentsSkeleton.
 * @record 
 */
export abstract class DocumentsSkeletonClass {

    // Own properties of Goa-1.0.Goa.DocumentsSkeletonClass

    static name: string
}

export interface DocumentsSkeletonPrivate {
}

export class DocumentsSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.DocumentsSkeletonPrivate

    static name: string
}

export interface ExchangeIface {

    // Own fields of Goa-1.0.Goa.ExchangeIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getHost: (object: Exchange) => string | null
    getAcceptSslErrors: (object: Exchange) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Exchange.top_of_page">org.gnome.OnlineAccounts.Exchange</link>.
 * @record 
 */
export abstract class ExchangeIface {

    // Own properties of Goa-1.0.Goa.ExchangeIface

    static name: string
}

export interface ExchangeProxyClass {

    // Own fields of Goa-1.0.Goa.ExchangeProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaExchangeProxy.
 * @record 
 */
export abstract class ExchangeProxyClass {

    // Own properties of Goa-1.0.Goa.ExchangeProxyClass

    static name: string
}

export interface ExchangeProxyPrivate {
}

export class ExchangeProxyPrivate {

    // Own properties of Goa-1.0.Goa.ExchangeProxyPrivate

    static name: string
}

export interface ExchangeSkeletonClass {

    // Own fields of Goa-1.0.Goa.ExchangeSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaExchangeSkeleton.
 * @record 
 */
export abstract class ExchangeSkeletonClass {

    // Own properties of Goa-1.0.Goa.ExchangeSkeletonClass

    static name: string
}

export interface ExchangeSkeletonPrivate {
}

export class ExchangeSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ExchangeSkeletonPrivate

    static name: string
}

export interface FilesIface {

    // Own fields of Goa-1.0.Goa.FilesIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getAcceptSslErrors: (object: Files) => boolean
    getUri: (object: Files) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Files.top_of_page">org.gnome.OnlineAccounts.Files</link>.
 * @record 
 */
export abstract class FilesIface {

    // Own properties of Goa-1.0.Goa.FilesIface

    static name: string
}

export interface FilesProxyClass {

    // Own fields of Goa-1.0.Goa.FilesProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaFilesProxy.
 * @record 
 */
export abstract class FilesProxyClass {

    // Own properties of Goa-1.0.Goa.FilesProxyClass

    static name: string
}

export interface FilesProxyPrivate {
}

export class FilesProxyPrivate {

    // Own properties of Goa-1.0.Goa.FilesProxyPrivate

    static name: string
}

export interface FilesSkeletonClass {

    // Own fields of Goa-1.0.Goa.FilesSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaFilesSkeleton.
 * @record 
 */
export abstract class FilesSkeletonClass {

    // Own properties of Goa-1.0.Goa.FilesSkeletonClass

    static name: string
}

export interface FilesSkeletonPrivate {
}

export class FilesSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.FilesSkeletonPrivate

    static name: string
}

export interface MailIface {

    // Own fields of Goa-1.0.Goa.MailIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getEmailAddress: (object: Mail) => string | null
    getImapHost: (object: Mail) => string | null
    getImapSupported: (object: Mail) => boolean
    getImapUseTls: (object: Mail) => boolean
    getImapUserName: (object: Mail) => string | null
    getSmtpHost: (object: Mail) => string | null
    getSmtpSupported: (object: Mail) => boolean
    getSmtpUseTls: (object: Mail) => boolean
    getSmtpUserName: (object: Mail) => string | null
    getImapAcceptSslErrors: (object: Mail) => boolean
    getImapUseSsl: (object: Mail) => boolean
    getName: (object: Mail) => string | null
    getSmtpAcceptSslErrors: (object: Mail) => boolean
    getSmtpUseAuth: (object: Mail) => boolean
    getSmtpUseSsl: (object: Mail) => boolean
    getSmtpAuthLogin: (object: Mail) => boolean
    getSmtpAuthPlain: (object: Mail) => boolean
    getSmtpAuthXoauth2: (object: Mail) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Mail.top_of_page">org.gnome.OnlineAccounts.Mail</link>.
 * @record 
 */
export abstract class MailIface {

    // Own properties of Goa-1.0.Goa.MailIface

    static name: string
}

export interface MailProxyClass {

    // Own fields of Goa-1.0.Goa.MailProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMailProxy.
 * @record 
 */
export abstract class MailProxyClass {

    // Own properties of Goa-1.0.Goa.MailProxyClass

    static name: string
}

export interface MailProxyPrivate {
}

export class MailProxyPrivate {

    // Own properties of Goa-1.0.Goa.MailProxyPrivate

    static name: string
}

export interface MailSkeletonClass {

    // Own fields of Goa-1.0.Goa.MailSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMailSkeleton.
 * @record 
 */
export abstract class MailSkeletonClass {

    // Own properties of Goa-1.0.Goa.MailSkeletonClass

    static name: string
}

export interface MailSkeletonPrivate {
}

export class MailSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MailSkeletonPrivate

    static name: string
}

export interface ManagerIface {

    // Own fields of Goa-1.0.Goa.ManagerIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleAddAccount: (object: Manager, invocation: Gio.DBusMethodInvocation, argProvider: string, argIdentity: string, argPresentationIdentity: string, argCredentials: GLib.Variant, argDetails: GLib.Variant) => boolean
    handleIsSupportedProvider: (object: Manager, invocation: Gio.DBusMethodInvocation, argProviderType: string) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Manager.top_of_page">org.gnome.OnlineAccounts.Manager</link>.
 * @record 
 */
export abstract class ManagerIface {

    // Own properties of Goa-1.0.Goa.ManagerIface

    static name: string
}

export interface ManagerProxyClass {

    // Own fields of Goa-1.0.Goa.ManagerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaManagerProxy.
 * @record 
 */
export abstract class ManagerProxyClass {

    // Own properties of Goa-1.0.Goa.ManagerProxyClass

    static name: string
}

export interface ManagerProxyPrivate {
}

export class ManagerProxyPrivate {

    // Own properties of Goa-1.0.Goa.ManagerProxyPrivate

    static name: string
}

export interface ManagerSkeletonClass {

    // Own fields of Goa-1.0.Goa.ManagerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaManagerSkeleton.
 * @record 
 */
export abstract class ManagerSkeletonClass {

    // Own properties of Goa-1.0.Goa.ManagerSkeletonClass

    static name: string
}

export interface ManagerSkeletonPrivate {
}

export class ManagerSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ManagerSkeletonPrivate

    static name: string
}

export interface MapsIface {

    // Own fields of Goa-1.0.Goa.MapsIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Maps.top_of_page">org.gnome.OnlineAccounts.Maps</link>.
 * @record 
 */
export abstract class MapsIface {

    // Own properties of Goa-1.0.Goa.MapsIface

    static name: string
}

export interface MapsProxyClass {

    // Own fields of Goa-1.0.Goa.MapsProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMapsProxy.
 * @record 
 */
export abstract class MapsProxyClass {

    // Own properties of Goa-1.0.Goa.MapsProxyClass

    static name: string
}

export interface MapsProxyPrivate {
}

export class MapsProxyPrivate {

    // Own properties of Goa-1.0.Goa.MapsProxyPrivate

    static name: string
}

export interface MapsSkeletonClass {

    // Own fields of Goa-1.0.Goa.MapsSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMapsSkeleton.
 * @record 
 */
export abstract class MapsSkeletonClass {

    // Own properties of Goa-1.0.Goa.MapsSkeletonClass

    static name: string
}

export interface MapsSkeletonPrivate {
}

export class MapsSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MapsSkeletonPrivate

    static name: string
}

export interface MediaServerIface {

    // Own fields of Goa-1.0.Goa.MediaServerIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getDlnaSupported: (object: MediaServer) => boolean
    getUdn: (object: MediaServer) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-MediaServer.top_of_page">org.gnome.OnlineAccounts.MediaServer</link>.
 * @record 
 */
export abstract class MediaServerIface {

    // Own properties of Goa-1.0.Goa.MediaServerIface

    static name: string
}

export interface MediaServerProxyClass {

    // Own fields of Goa-1.0.Goa.MediaServerProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMediaServerProxy.
 * @record 
 */
export abstract class MediaServerProxyClass {

    // Own properties of Goa-1.0.Goa.MediaServerProxyClass

    static name: string
}

export interface MediaServerProxyPrivate {
}

export class MediaServerProxyPrivate {

    // Own properties of Goa-1.0.Goa.MediaServerProxyPrivate

    static name: string
}

export interface MediaServerSkeletonClass {

    // Own fields of Goa-1.0.Goa.MediaServerSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMediaServerSkeleton.
 * @record 
 */
export abstract class MediaServerSkeletonClass {

    // Own properties of Goa-1.0.Goa.MediaServerSkeletonClass

    static name: string
}

export interface MediaServerSkeletonPrivate {
}

export class MediaServerSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MediaServerSkeletonPrivate

    static name: string
}

export interface MusicIface {

    // Own fields of Goa-1.0.Goa.MusicIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Music.top_of_page">org.gnome.OnlineAccounts.Music</link>.
 * @record 
 */
export abstract class MusicIface {

    // Own properties of Goa-1.0.Goa.MusicIface

    static name: string
}

export interface MusicProxyClass {

    // Own fields of Goa-1.0.Goa.MusicProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaMusicProxy.
 * @record 
 */
export abstract class MusicProxyClass {

    // Own properties of Goa-1.0.Goa.MusicProxyClass

    static name: string
}

export interface MusicProxyPrivate {
}

export class MusicProxyPrivate {

    // Own properties of Goa-1.0.Goa.MusicProxyPrivate

    static name: string
}

export interface MusicSkeletonClass {

    // Own fields of Goa-1.0.Goa.MusicSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaMusicSkeleton.
 * @record 
 */
export abstract class MusicSkeletonClass {

    // Own properties of Goa-1.0.Goa.MusicSkeletonClass

    static name: string
}

export interface MusicSkeletonPrivate {
}

export class MusicSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.MusicSkeletonPrivate

    static name: string
}

export interface OAuth2BasedIface {

    // Own fields of Goa-1.0.Goa.OAuth2BasedIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleGetAccessToken: (object: OAuth2Based, invocation: Gio.DBusMethodInvocation) => boolean
    getClientId: (object: OAuth2Based) => string | null
    getClientSecret: (object: OAuth2Based) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuth2Based.top_of_page">org.gnome.OnlineAccounts.OAuth2Based</link>.
 * @record 
 */
export abstract class OAuth2BasedIface {

    // Own properties of Goa-1.0.Goa.OAuth2BasedIface

    static name: string
}

export interface OAuth2BasedProxyClass {

    // Own fields of Goa-1.0.Goa.OAuth2BasedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaOAuth2BasedProxy.
 * @record 
 */
export abstract class OAuth2BasedProxyClass {

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxyClass

    static name: string
}

export interface OAuth2BasedProxyPrivate {
}

export class OAuth2BasedProxyPrivate {

    // Own properties of Goa-1.0.Goa.OAuth2BasedProxyPrivate

    static name: string
}

export interface OAuth2BasedSkeletonClass {

    // Own fields of Goa-1.0.Goa.OAuth2BasedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaOAuth2BasedSkeleton.
 * @record 
 */
export abstract class OAuth2BasedSkeletonClass {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeletonClass

    static name: string
}

export interface OAuth2BasedSkeletonPrivate {
}

export class OAuth2BasedSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.OAuth2BasedSkeletonPrivate

    static name: string
}

export interface OAuthBasedIface {

    // Own fields of Goa-1.0.Goa.OAuthBasedIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleGetAccessToken: (object: OAuthBased, invocation: Gio.DBusMethodInvocation) => boolean
    getConsumerKey: (object: OAuthBased) => string | null
    getConsumerSecret: (object: OAuthBased) => string | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-OAuthBased.top_of_page">org.gnome.OnlineAccounts.OAuthBased</link>.
 * @record 
 */
export abstract class OAuthBasedIface {

    // Own properties of Goa-1.0.Goa.OAuthBasedIface

    static name: string
}

export interface OAuthBasedProxyClass {

    // Own fields of Goa-1.0.Goa.OAuthBasedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaOAuthBasedProxy.
 * @record 
 */
export abstract class OAuthBasedProxyClass {

    // Own properties of Goa-1.0.Goa.OAuthBasedProxyClass

    static name: string
}

export interface OAuthBasedProxyPrivate {
}

export class OAuthBasedProxyPrivate {

    // Own properties of Goa-1.0.Goa.OAuthBasedProxyPrivate

    static name: string
}

export interface OAuthBasedSkeletonClass {

    // Own fields of Goa-1.0.Goa.OAuthBasedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaOAuthBasedSkeleton.
 * @record 
 */
export abstract class OAuthBasedSkeletonClass {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeletonClass

    static name: string
}

export interface OAuthBasedSkeletonPrivate {
}

export class OAuthBasedSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.OAuthBasedSkeletonPrivate

    static name: string
}

export interface ObjectIface {

    // Own fields of Goa-1.0.Goa.ObjectIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the #GoaObject interface.
 * @record 
 */
export abstract class ObjectIface {

    // Own properties of Goa-1.0.Goa.ObjectIface

    static name: string
}

export interface ObjectManagerClientClass {

    // Own fields of Goa-1.0.Goa.ObjectManagerClientClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusObjectManagerClientClass
}

/**
 * Class structure for #GoaObjectManagerClient.
 * @record 
 */
export abstract class ObjectManagerClientClass {

    // Own properties of Goa-1.0.Goa.ObjectManagerClientClass

    static name: string
}

export interface ObjectManagerClientPrivate {
}

export class ObjectManagerClientPrivate {

    // Own properties of Goa-1.0.Goa.ObjectManagerClientPrivate

    static name: string
}

export interface ObjectProxyClass {

    // Own fields of Goa-1.0.Goa.ObjectProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusObjectProxyClass
}

/**
 * Class structure for #GoaObjectProxy.
 * @record 
 */
export abstract class ObjectProxyClass {

    // Own properties of Goa-1.0.Goa.ObjectProxyClass

    static name: string
}

export interface ObjectProxyPrivate {
}

export class ObjectProxyPrivate {

    // Own properties of Goa-1.0.Goa.ObjectProxyPrivate

    static name: string
}

export interface ObjectSkeletonClass {

    // Own fields of Goa-1.0.Goa.ObjectSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusObjectSkeletonClass
}

/**
 * Class structure for #GoaObjectSkeleton.
 * @record 
 */
export abstract class ObjectSkeletonClass {

    // Own properties of Goa-1.0.Goa.ObjectSkeletonClass

    static name: string
}

export interface ObjectSkeletonPrivate {
}

export class ObjectSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ObjectSkeletonPrivate

    static name: string
}

export interface PasswordBasedIface {

    // Own fields of Goa-1.0.Goa.PasswordBasedIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleGetPassword: (object: PasswordBased, invocation: Gio.DBusMethodInvocation, argId: string) => boolean
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-PasswordBased.top_of_page">org.gnome.OnlineAccounts.PasswordBased</link>.
 * @record 
 */
export abstract class PasswordBasedIface {

    // Own properties of Goa-1.0.Goa.PasswordBasedIface

    static name: string
}

export interface PasswordBasedProxyClass {

    // Own fields of Goa-1.0.Goa.PasswordBasedProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaPasswordBasedProxy.
 * @record 
 */
export abstract class PasswordBasedProxyClass {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxyClass

    static name: string
}

export interface PasswordBasedProxyPrivate {
}

export class PasswordBasedProxyPrivate {

    // Own properties of Goa-1.0.Goa.PasswordBasedProxyPrivate

    static name: string
}

export interface PasswordBasedSkeletonClass {

    // Own fields of Goa-1.0.Goa.PasswordBasedSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaPasswordBasedSkeleton.
 * @record 
 */
export abstract class PasswordBasedSkeletonClass {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeletonClass

    static name: string
}

export interface PasswordBasedSkeletonPrivate {
}

export class PasswordBasedSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.PasswordBasedSkeletonPrivate

    static name: string
}

export interface PhotosIface {

    // Own fields of Goa-1.0.Goa.PhotosIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Photos.top_of_page">org.gnome.OnlineAccounts.Photos</link>.
 * @record 
 */
export abstract class PhotosIface {

    // Own properties of Goa-1.0.Goa.PhotosIface

    static name: string
}

export interface PhotosProxyClass {

    // Own fields of Goa-1.0.Goa.PhotosProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaPhotosProxy.
 * @record 
 */
export abstract class PhotosProxyClass {

    // Own properties of Goa-1.0.Goa.PhotosProxyClass

    static name: string
}

export interface PhotosProxyPrivate {
}

export class PhotosProxyPrivate {

    // Own properties of Goa-1.0.Goa.PhotosProxyPrivate

    static name: string
}

export interface PhotosSkeletonClass {

    // Own fields of Goa-1.0.Goa.PhotosSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaPhotosSkeleton.
 * @record 
 */
export abstract class PhotosSkeletonClass {

    // Own properties of Goa-1.0.Goa.PhotosSkeletonClass

    static name: string
}

export interface PhotosSkeletonPrivate {
}

export class PhotosSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.PhotosSkeletonPrivate

    static name: string
}

export interface PrintersIface {

    // Own fields of Goa-1.0.Goa.PrintersIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Printers.top_of_page">org.gnome.OnlineAccounts.Printers</link>.
 * @record 
 */
export abstract class PrintersIface {

    // Own properties of Goa-1.0.Goa.PrintersIface

    static name: string
}

export interface PrintersProxyClass {

    // Own fields of Goa-1.0.Goa.PrintersProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaPrintersProxy.
 * @record 
 */
export abstract class PrintersProxyClass {

    // Own properties of Goa-1.0.Goa.PrintersProxyClass

    static name: string
}

export interface PrintersProxyPrivate {
}

export class PrintersProxyPrivate {

    // Own properties of Goa-1.0.Goa.PrintersProxyPrivate

    static name: string
}

export interface PrintersSkeletonClass {

    // Own fields of Goa-1.0.Goa.PrintersSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaPrintersSkeleton.
 * @record 
 */
export abstract class PrintersSkeletonClass {

    // Own properties of Goa-1.0.Goa.PrintersSkeletonClass

    static name: string
}

export interface PrintersSkeletonPrivate {
}

export class PrintersSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.PrintersSkeletonPrivate

    static name: string
}

export interface ReadLaterIface {

    // Own fields of Goa-1.0.Goa.ReadLaterIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-ReadLater.top_of_page">org.gnome.OnlineAccounts.ReadLater</link>.
 * @record 
 */
export abstract class ReadLaterIface {

    // Own properties of Goa-1.0.Goa.ReadLaterIface

    static name: string
}

export interface ReadLaterProxyClass {

    // Own fields of Goa-1.0.Goa.ReadLaterProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaReadLaterProxy.
 * @record 
 */
export abstract class ReadLaterProxyClass {

    // Own properties of Goa-1.0.Goa.ReadLaterProxyClass

    static name: string
}

export interface ReadLaterProxyPrivate {
}

export class ReadLaterProxyPrivate {

    // Own properties of Goa-1.0.Goa.ReadLaterProxyPrivate

    static name: string
}

export interface ReadLaterSkeletonClass {

    // Own fields of Goa-1.0.Goa.ReadLaterSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaReadLaterSkeleton.
 * @record 
 */
export abstract class ReadLaterSkeletonClass {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeletonClass

    static name: string
}

export interface ReadLaterSkeletonPrivate {
}

export class ReadLaterSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.ReadLaterSkeletonPrivate

    static name: string
}

export interface TicketingIface {

    // Own fields of Goa-1.0.Goa.TicketingIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    handleGetTicket: (object: Ticketing, invocation: Gio.DBusMethodInvocation) => boolean
    getDetails: (object: Ticketing) => GLib.Variant | null
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Ticketing.top_of_page">org.gnome.OnlineAccounts.Ticketing</link>.
 * @record 
 */
export abstract class TicketingIface {

    // Own properties of Goa-1.0.Goa.TicketingIface

    static name: string
}

export interface TicketingProxyClass {

    // Own fields of Goa-1.0.Goa.TicketingProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaTicketingProxy.
 * @record 
 */
export abstract class TicketingProxyClass {

    // Own properties of Goa-1.0.Goa.TicketingProxyClass

    static name: string
}

export interface TicketingProxyPrivate {
}

export class TicketingProxyPrivate {

    // Own properties of Goa-1.0.Goa.TicketingProxyPrivate

    static name: string
}

export interface TicketingSkeletonClass {

    // Own fields of Goa-1.0.Goa.TicketingSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaTicketingSkeleton.
 * @record 
 */
export abstract class TicketingSkeletonClass {

    // Own properties of Goa-1.0.Goa.TicketingSkeletonClass

    static name: string
}

export interface TicketingSkeletonPrivate {
}

export class TicketingSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.TicketingSkeletonPrivate

    static name: string
}

export interface TodoIface {

    // Own fields of Goa-1.0.Goa.TodoIface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
}

/**
 * Virtual table for the D-Bus interface <link linkend="gdbus-interface-org-gnome-OnlineAccounts-Todo.top_of_page">org.gnome.OnlineAccounts.Todo</link>.
 * @record 
 */
export abstract class TodoIface {

    // Own properties of Goa-1.0.Goa.TodoIface

    static name: string
}

export interface TodoProxyClass {

    // Own fields of Goa-1.0.Goa.TodoProxyClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusProxyClass
}

/**
 * Class structure for #GoaTodoProxy.
 * @record 
 */
export abstract class TodoProxyClass {

    // Own properties of Goa-1.0.Goa.TodoProxyClass

    static name: string
}

export interface TodoProxyPrivate {
}

export class TodoProxyPrivate {

    // Own properties of Goa-1.0.Goa.TodoProxyPrivate

    static name: string
}

export interface TodoSkeletonClass {

    // Own fields of Goa-1.0.Goa.TodoSkeletonClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: Gio.DBusInterfaceSkeletonClass
}

/**
 * Class structure for #GoaTodoSkeleton.
 * @record 
 */
export abstract class TodoSkeletonClass {

    // Own properties of Goa-1.0.Goa.TodoSkeletonClass

    static name: string
}

export interface TodoSkeletonPrivate {
}

export class TodoSkeletonPrivate {

    // Own properties of Goa-1.0.Goa.TodoSkeletonPrivate

    static name: string
}
