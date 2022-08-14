
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksTelepathy-0.7
 */

import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as TelepathyGLib from './TelepathyGLib-0.12.js';
import type * as Folks from './Folks-0.7.js';

export module PersonaStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

        account?: TelepathyGLib.Account | null
    }

}

export interface PersonaStore {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    readonly account: TelepathyGLib.Account

    // Owm methods of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    getAccount(): TelepathyGLib.Account

    // Class property signals of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    connect(sigName: "notify::account", callback: any): number
    on(sigName: "notify::account", callback: any): number
    once(sigName: "notify::account", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::account", ...args: any[]): void
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

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    static name: string

    // Constructors of FolksTelepathy-0.7.FolksTelepathy.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(account: TelepathyGLib.Account) 
    static new(account: TelepathyGLib.Account): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
    static listPersonaStores(): Gee.Map
    static dupForAccount(account: TelepathyGLib.Account): PersonaStore
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.AliasDetails.ConstructorProperties, Folks.AvatarDetails.ConstructorProperties, Folks.BirthdayDetails.ConstructorProperties, Folks.EmailDetails.ConstructorProperties, Folks.FavouriteDetails.ConstructorProperties, Folks.GroupDetails.ConstructorProperties, Folks.InteractionDetails.ConstructorProperties, Folks.ImDetails.ConstructorProperties, Folks.NameDetails.ConstructorProperties, Folks.PhoneDetails.ConstructorProperties, Folks.PresenceDetails.ConstructorProperties, Folks.UrlDetails.ConstructorProperties, Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksTelepathy-0.7.FolksTelepathy.Persona

        isInContactList?: boolean | null
        contact?: TelepathyGLib.Contact | null
    }

}

export interface Persona extends Folks.AliasDetails, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GroupDetails, Folks.InteractionDetails, Folks.ImDetails, Folks.NameDetails, Folks.PhoneDetails, Folks.PresenceDetails, Folks.UrlDetails {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.Persona

    isInContactList: boolean
    readonly contact: TelepathyGLib.Contact

    // Own fields of FolksTelepathy-0.7.FolksTelepathy.Persona

    lastImInteractionDatetime: any
    lastCallInteractionDatetime: any

    // Owm methods of FolksTelepathy-0.7.FolksTelepathy.Persona

    getIsInContactList(): boolean
    setIsInContactList(value: boolean): void
    getContact(): TelepathyGLib.Contact | null

    // Class property signals of FolksTelepathy-0.7.FolksTelepathy.Persona

    connect(sigName: "notify::is-in-contact-list", callback: any): number
    on(sigName: "notify::is-in-contact-list", callback: any): number
    once(sigName: "notify::is-in-contact-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-in-contact-list", ...args: any[]): void
    connect(sigName: "notify::contact", callback: any): number
    on(sigName: "notify::contact", callback: any): number
    once(sigName: "notify::contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::contact", ...args: any[]): void
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
    connect(sigName: "notify::alias", callback: any): number
    on(sigName: "notify::alias", callback: any): number
    once(sigName: "notify::alias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alias", ...args: any[]): void
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
    connect(sigName: "notify::groups", callback: any): number
    on(sigName: "notify::groups", callback: any): number
    once(sigName: "notify::groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: "notify::im-interaction-count", callback: any): number
    on(sigName: "notify::im-interaction-count", callback: any): number
    once(sigName: "notify::im-interaction-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-im-interaction-datetime", callback: any): number
    on(sigName: "notify::last-im-interaction-datetime", callback: any): number
    once(sigName: "notify::last-im-interaction-datetime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-im-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::call-interaction-count", callback: any): number
    on(sigName: "notify::call-interaction-count", callback: any): number
    once(sigName: "notify::call-interaction-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::call-interaction-count", ...args: any[]): void
    connect(sigName: "notify::last-call-interaction-datetime", callback: any): number
    on(sigName: "notify::last-call-interaction-datetime", callback: any): number
    once(sigName: "notify::last-call-interaction-datetime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-call-interaction-datetime", ...args: any[]): void
    connect(sigName: "notify::im-addresses", callback: any): number
    on(sigName: "notify::im-addresses", callback: any): number
    once(sigName: "notify::im-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
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
    connect(sigName: "notify::phone-numbers", callback: any): number
    on(sigName: "notify::phone-numbers", callback: any): number
    once(sigName: "notify::phone-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::presence-type", callback: any): number
    on(sigName: "notify::presence-type", callback: any): number
    once(sigName: "notify::presence-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presence-type", ...args: any[]): void
    connect(sigName: "notify::presence-message", callback: any): number
    on(sigName: "notify::presence-message", callback: any): number
    once(sigName: "notify::presence-message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presence-message", ...args: any[]): void
    connect(sigName: "notify::client-types", callback: any): number
    on(sigName: "notify::client-types", callback: any): number
    once(sigName: "notify::client-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client-types", ...args: any[]): void
    connect(sigName: "notify::presence-status", callback: any): number
    on(sigName: "notify::presence-status", callback: any): number
    once(sigName: "notify::presence-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::presence-status", ...args: any[]): void
    connect(sigName: "notify::urls", callback: any): number
    on(sigName: "notify::urls", callback: any): number
    once(sigName: "notify::urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urls", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Persona extends Folks.Persona {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.Persona

    static name: string

    // Constructors of FolksTelepathy-0.7.FolksTelepathy.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(contact: TelepathyGLib.Contact, store: PersonaStore) 
    static new(contact: TelepathyGLib.Contact, store: PersonaStore): Persona
    _init(config?: Persona.ConstructorProperties): void
    static dupForContact(contact: TelepathyGLib.Contact): Persona | null
}

export interface PersonaStoreClass {
}

export abstract class PersonaStoreClass {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaStorePrivate

    static name: string
}

export interface PersonaClass {
}

export abstract class PersonaClass {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of FolksTelepathy-0.7.FolksTelepathy.PersonaPrivate

    static name: string
}
