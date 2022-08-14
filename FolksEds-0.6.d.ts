
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksEds-0.6
 */

import type * as EBookContacts from './EBookContacts-1.2.js';
import type * as libxml2 from './libxml2-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as EDataServer from './EDataServer-1.2.js';
import type * as Soup from './Soup-2.4.js';
import type * as GData from './GData-0.0.js';
import type * as Json from './Json-1.0.js';
import type * as Goa from './Goa-1.0.js';
import type * as Camel from './Camel-1.2.js';
import type * as Gee from './Gee-0.8.js';
import type * as Folks from './Folks-0.6.js';

export module PersonaStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksEds-0.6.FolksEds.PersonaStore

        source?: EDataServer.Source | null
    }

}

export interface PersonaStore {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStore

    readonly source: EDataServer.Source

    // Owm methods of FolksEds-0.6.FolksEds.PersonaStore

    getSource(): EDataServer.Source

    // Class property signals of FolksEds-0.6.FolksEds.PersonaStore

    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::type-id", callback: any): number
    on(sigName: "notify::type-id", callback: any): number
    once(sigName: "notify::type-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::personas", callback: any): number
    on(sigName: "notify::personas", callback: any): number
    once(sigName: "notify::personas", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::personas", ...args: any[]): void
    connect(sigName: "notify::can-add-personas", callback: any): number
    on(sigName: "notify::can-add-personas", callback: any): number
    once(sigName: "notify::can-add-personas", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-add-personas", ...args: any[]): void
    connect(sigName: "notify::can-alias-personas", callback: any): number
    on(sigName: "notify::can-alias-personas", callback: any): number
    once(sigName: "notify::can-alias-personas", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-alias-personas", ...args: any[]): void
    connect(sigName: "notify::can-group-personas", callback: any): number
    on(sigName: "notify::can-group-personas", callback: any): number
    once(sigName: "notify::can-group-personas", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-group-personas", ...args: any[]): void
    connect(sigName: "notify::can-remove-personas", callback: any): number
    on(sigName: "notify::can-remove-personas", callback: any): number
    once(sigName: "notify::can-remove-personas", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-remove-personas", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: any): number
    on(sigName: "notify::is-prepared", callback: any): number
    once(sigName: "notify::is-prepared", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: "notify::is-quiescent", callback: any): number
    on(sigName: "notify::is-quiescent", callback: any): number
    once(sigName: "notify::is-quiescent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-quiescent", ...args: any[]): void
    connect(sigName: "notify::is-writeable", callback: any): number
    on(sigName: "notify::is-writeable", callback: any): number
    once(sigName: "notify::is-writeable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-writeable", ...args: any[]): void
    connect(sigName: "notify::trust-level", callback: any): number
    on(sigName: "notify::trust-level", callback: any): number
    once(sigName: "notify::trust-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::trust-level", ...args: any[]): void
    connect(sigName: "notify::always-writeable-properties", callback: any): number
    on(sigName: "notify::always-writeable-properties", callback: any): number
    once(sigName: "notify::always-writeable-properties", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::always-writeable-properties", ...args: any[]): void
    connect(sigName: "notify::is-primary-store", callback: any): number
    on(sigName: "notify::is-primary-store", callback: any): number
    once(sigName: "notify::is-primary-store", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary-store", ...args: any[]): void
    connect(sigName: "notify::is-user-set-default", callback: any): number
    on(sigName: "notify::is-user-set-default", callback: any): number
    once(sigName: "notify::is-user-set-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-user-set-default", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PersonaStore extends Folks.PersonaStore {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStore

    static name: string

    // Constructors of FolksEds-0.6.FolksEds.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(s: EDataServer.Source) 
    static new(s: EDataServer.Source): PersonaStore
    static withSourceRegistry(r: EDataServer.SourceRegistry, s: EDataServer.Source): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
    static createAddressBook(id: string, callback?: Gio.AsyncReadyCallback | null): void
    static createAddressBookFinish(res: Gio.AsyncResult): void
    static removeAddressBook(store: PersonaStore, callback?: Gio.AsyncReadyCallback | null): void
    static removeAddressBookFinish(res: Gio.AsyncResult): void
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.AntiLinkable.ConstructorProperties, Folks.AvatarDetails.ConstructorProperties, Folks.BirthdayDetails.ConstructorProperties, Folks.EmailDetails.ConstructorProperties, Folks.ExtendedInfo.ConstructorProperties, Folks.FavouriteDetails.ConstructorProperties, Folks.GenderDetails.ConstructorProperties, Folks.GroupDetails.ConstructorProperties, Folks.ImDetails.ConstructorProperties, Folks.LocalIdDetails.ConstructorProperties, Folks.LocationDetails.ConstructorProperties, Folks.NameDetails.ConstructorProperties, Folks.NoteDetails.ConstructorProperties, Folks.PhoneDetails.ConstructorProperties, Folks.RoleDetails.ConstructorProperties, Folks.UrlDetails.ConstructorProperties, Folks.PostalAddressDetails.ConstructorProperties, Folks.WebServiceDetails.ConstructorProperties, Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksEds-0.6.FolksEds.Persona

        contact?: EBookContacts.Contact | null
        contactId?: string | null
        systemGroups?: Gee.Set | null
        inGooglePersonalGroup?: boolean | null
    }

}

export interface Persona extends Folks.AntiLinkable, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.ExtendedInfo, Folks.FavouriteDetails, Folks.GenderDetails, Folks.GroupDetails, Folks.ImDetails, Folks.LocalIdDetails, Folks.LocationDetails, Folks.NameDetails, Folks.NoteDetails, Folks.PhoneDetails, Folks.RoleDetails, Folks.UrlDetails, Folks.PostalAddressDetails, Folks.WebServiceDetails {

    // Own properties of FolksEds-0.6.FolksEds.Persona

    readonly contact: EBookContacts.Contact
    readonly contactId: string
    systemGroups: Gee.Set
    inGooglePersonalGroup: boolean

    // Owm methods of FolksEds-0.6.FolksEds.Persona

    changeSystemGroups(systemGroups: Gee.Set, callback?: Gio.AsyncReadyCallback | null): void
    changeSystemGroupsFinish(res: Gio.AsyncResult): void
    changeInGooglePersonalGroup(inPersonal: boolean, callback?: Gio.AsyncReadyCallback | null): void
    changeInGooglePersonalGroupFinish(res: Gio.AsyncResult): void
    getContact(): EBookContacts.Contact
    getContactId(): string
    getSystemGroups(): Gee.Set | null
    setSystemGroups(value?: Gee.Set | null): void
    getInGooglePersonalGroup(): boolean
    setInGooglePersonalGroup(value: boolean): void

    // Class property signals of FolksEds-0.6.FolksEds.Persona

    connect(sigName: "notify::contact", callback: any): number
    on(sigName: "notify::contact", callback: any): number
    once(sigName: "notify::contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact", ...args: any[]): void
    connect(sigName: "notify::contact-id", callback: any): number
    on(sigName: "notify::contact-id", callback: any): number
    once(sigName: "notify::contact-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact-id", ...args: any[]): void
    connect(sigName: "notify::system-groups", callback: any): number
    on(sigName: "notify::system-groups", callback: any): number
    once(sigName: "notify::system-groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-groups", ...args: any[]): void
    connect(sigName: "notify::in-google-personal-group", callback: any): number
    on(sigName: "notify::in-google-personal-group", callback: any): number
    once(sigName: "notify::in-google-personal-group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::in-google-personal-group", ...args: any[]): void
    connect(sigName: "notify::iid", callback: any): number
    on(sigName: "notify::iid", callback: any): number
    once(sigName: "notify::iid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::iid", ...args: any[]): void
    connect(sigName: "notify::uid", callback: any): number
    on(sigName: "notify::uid", callback: any): number
    once(sigName: "notify::uid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::display-id", callback: any): number
    on(sigName: "notify::display-id", callback: any): number
    once(sigName: "notify::display-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-id", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: any): number
    on(sigName: "notify::is-user", callback: any): number
    once(sigName: "notify::is-user", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::store", callback: any): number
    on(sigName: "notify::store", callback: any): number
    once(sigName: "notify::store", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::store", ...args: any[]): void
    connect(sigName: "notify::individual", callback: any): number
    on(sigName: "notify::individual", callback: any): number
    once(sigName: "notify::individual", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::individual", ...args: any[]): void
    connect(sigName: "notify::linkable-properties", callback: any): number
    on(sigName: "notify::linkable-properties", callback: any): number
    once(sigName: "notify::linkable-properties", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::linkable-properties", ...args: any[]): void
    connect(sigName: "notify::writeable-properties", callback: any): number
    on(sigName: "notify::writeable-properties", callback: any): number
    once(sigName: "notify::writeable-properties", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writeable-properties", ...args: any[]): void
    connect(sigName: "notify::anti-links", callback: any): number
    on(sigName: "notify::anti-links", callback: any): number
    once(sigName: "notify::anti-links", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anti-links", ...args: any[]): void
    connect(sigName: "notify::avatar", callback: any): number
    on(sigName: "notify::avatar", callback: any): number
    once(sigName: "notify::avatar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::birthday", callback: any): number
    on(sigName: "notify::birthday", callback: any): number
    once(sigName: "notify::birthday", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::birthday", ...args: any[]): void
    connect(sigName: "notify::calendar-event-id", callback: any): number
    on(sigName: "notify::calendar-event-id", callback: any): number
    once(sigName: "notify::calendar-event-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::calendar-event-id", ...args: any[]): void
    connect(sigName: "notify::email-addresses", callback: any): number
    on(sigName: "notify::email-addresses", callback: any): number
    once(sigName: "notify::email-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: "notify::is-favourite", callback: any): number
    on(sigName: "notify::is-favourite", callback: any): number
    once(sigName: "notify::is-favourite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: "notify::gender", callback: any): number
    on(sigName: "notify::gender", callback: any): number
    once(sigName: "notify::gender", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: "notify::groups", callback: any): number
    on(sigName: "notify::groups", callback: any): number
    once(sigName: "notify::groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: any): number
    on(sigName: "notify::im-addresses", callback: any): number
    once(sigName: "notify::im-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: "notify::local-ids", callback: any): number
    on(sigName: "notify::local-ids", callback: any): number
    once(sigName: "notify::local-ids", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::structured-name", callback: any): number
    on(sigName: "notify::structured-name", callback: any): number
    once(sigName: "notify::structured-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::structured-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: any): number
    on(sigName: "notify::full-name", callback: any): number
    once(sigName: "notify::full-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: any): number
    on(sigName: "notify::nickname", callback: any): number
    once(sigName: "notify::nickname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::notes", callback: any): number
    on(sigName: "notify::notes", callback: any): number
    once(sigName: "notify::notes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: "notify::phone-numbers", callback: any): number
    on(sigName: "notify::phone-numbers", callback: any): number
    once(sigName: "notify::phone-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::roles", callback: any): number
    on(sigName: "notify::roles", callback: any): number
    once(sigName: "notify::roles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: "notify::urls", callback: any): number
    on(sigName: "notify::urls", callback: any): number
    once(sigName: "notify::urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: "notify::postal-addresses", callback: any): number
    on(sigName: "notify::postal-addresses", callback: any): number
    once(sigName: "notify::postal-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: "notify::web-service-addresses", callback: any): number
    on(sigName: "notify::web-service-addresses", callback: any): number
    once(sigName: "notify::web-service-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::web-service-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Persona extends Folks.Persona {

    // Own properties of FolksEds-0.6.FolksEds.Persona

    static name: string

    // Constructors of FolksEds-0.6.FolksEds.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(store: PersonaStore, contact: EBookContacts.Contact) 
    static new(store: PersonaStore, contact: EBookContacts.Contact): Persona
    _init(config?: Persona.ConstructorProperties): void
}

export interface PersonaStoreClass {
}

export abstract class PersonaStoreClass {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of FolksEds-0.6.FolksEds.PersonaStorePrivate

    static name: string
}

export interface PersonaClass {
}

export abstract class PersonaClass {

    // Own properties of FolksEds-0.6.FolksEds.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of FolksEds-0.6.FolksEds.PersonaPrivate

    static name: string
}
