
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksDummy-0.6
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as Gee from './Gee-0.8.js';
import type * as Folks from './Folks-0.6.js';

export module Backend {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.Backend.ConstructorProperties {
    }

}

export interface Backend {

    // Owm methods of FolksDummy-0.6.FolksDummy.Backend

    registerPersonaStores(stores: Gee.Set, enableStores: boolean): void
    unregisterPersonaStores(stores: Gee.Set): void

    // Class property signals of FolksDummy-0.6.FolksDummy.Backend

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
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::persona-stores", callback: any): number
    on(sigName: "notify::persona-stores", callback: any): number
    once(sigName: "notify::persona-stores", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::persona-stores", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Backend extends Folks.Backend {

    // Own properties of FolksDummy-0.6.FolksDummy.Backend

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.Backend

    constructor(config?: Backend.ConstructorProperties) 
    constructor() 
    static new(): Backend
    _init(config?: Backend.ConstructorProperties): void
}

export module FullPersona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.AntiLinkable.ConstructorProperties, Folks.AvatarDetails.ConstructorProperties, Folks.BirthdayDetails.ConstructorProperties, Folks.EmailDetails.ConstructorProperties, Folks.FavouriteDetails.ConstructorProperties, Folks.GenderDetails.ConstructorProperties, Folks.GroupDetails.ConstructorProperties, Folks.ImDetails.ConstructorProperties, Folks.LocalIdDetails.ConstructorProperties, Folks.NameDetails.ConstructorProperties, Folks.NoteDetails.ConstructorProperties, Folks.PhoneDetails.ConstructorProperties, Folks.RoleDetails.ConstructorProperties, Folks.UrlDetails.ConstructorProperties, Folks.PostalAddressDetails.ConstructorProperties, Folks.WebServiceDetails.ConstructorProperties, Persona.ConstructorProperties {
    }

}

export interface FullPersona extends Folks.AntiLinkable, Folks.AvatarDetails, Folks.BirthdayDetails, Folks.EmailDetails, Folks.FavouriteDetails, Folks.GenderDetails, Folks.GroupDetails, Folks.ImDetails, Folks.LocalIdDetails, Folks.NameDetails, Folks.NoteDetails, Folks.PhoneDetails, Folks.RoleDetails, Folks.UrlDetails, Folks.PostalAddressDetails, Folks.WebServiceDetails {

    // Owm methods of FolksDummy-0.6.FolksDummy.FullPersona

    updateGender(gender: Folks.Gender): void
    updateCalendarEventId(calendarEventId?: string | null): void
    updateBirthday(birthday?: GLib.DateTime | null): void
    updateRoles(roles: Gee.Set): void
    updateGroups(groups: Gee.Set): void
    updateWebServiceAddresses(webServiceAddresses: Gee.MultiMap): void
    updateEmailAddresses(emailAddresses: Gee.Set): void
    updateNotes(notes: Gee.Set): void
    updateFullName(fullName: string): void
    updateNickname(nickname: string): void
    updateStructuredName(structuredName?: Folks.StructuredName | null): void
    updateAvatar(avatar?: Gio.LoadableIcon | null): void
    updateUrls(urls: Gee.Set): void
    updateImAddresses(imAddresses: Gee.MultiMap): void
    updatePhoneNumbers(phoneNumbers: Gee.Set): void
    updatePostalAddresses(postalAddresses: Gee.Set): void
    updateLocalIds(localIds: Gee.Set): void
    updateIsFavourite(isFavourite: boolean): void
    updateAntiLinks(antiLinks: Gee.Set): void

    // Class property signals of FolksDummy-0.6.FolksDummy.FullPersona

    connect(sigName: "notify::property-change-delay", callback: any): number
    on(sigName: "notify::property-change-delay", callback: any): number
    once(sigName: "notify::property-change-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-change-delay", ...args: any[]): void
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

export class FullPersona extends Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersona

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.FullPersona

    constructor(config?: FullPersona.ConstructorProperties) 
    constructor(store: PersonaStore, contactId: string, isUser: boolean, linkableProperties: string[]) 
    static new(store: PersonaStore, contactId: string, isUser: boolean, linkableProperties: string[]): FullPersona

    // Overloads of new

    static new(store: PersonaStore, contactId: string, isUser: boolean, linkableProperties: string[]): Persona
    _init(config?: FullPersona.ConstructorProperties): void
}

export module PersonaStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksDummy-0.6.FolksDummy.PersonaStore

        personaType?: GObject.GType | null
    }

}

export interface PersonaStore {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    personaType: GObject.GType

    // Owm methods of FolksDummy-0.6.FolksDummy.PersonaStore

    updateCapabilities(canAddPersonas: Folks.MaybeBool, canAliasPersonas: Folks.MaybeBool, canRemovePersonas: Folks.MaybeBool): void
    freezePersonasChanged(): void
    thawPersonasChanged(): void
    registerPersonas(personas: Gee.Set): void
    unregisterPersonas(personas: Gee.Set): void
    reachQuiescence(): void
    updateIsUserSetDefault(isUserSetDefault: boolean): void
    updateTrustLevel(trustLevel: Folks.PersonaStoreTrust): void
    setAddPersonaFromDetailsMock(mock?: any | null): void
    setRemovePersonaMock(mock?: any | null): void
    setPrepareMock(mock?: any | null): void
    getPersonaType(): GObject.GType
    setPersonaType(value: GObject.GType): void

    // Class property signals of FolksDummy-0.6.FolksDummy.PersonaStore

    connect(sigName: "notify::persona-type", callback: any): number
    on(sigName: "notify::persona-type", callback: any): number
    once(sigName: "notify::persona-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::persona-type", ...args: any[]): void
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

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStore

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(id: string, displayName: string, alwaysWriteableProperties: string[]) 
    static new(id: string, displayName: string, alwaysWriteableProperties: string[]): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksDummy-0.6.FolksDummy.Persona

        propertyChangeDelay?: number | null
    }

}

export interface Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    propertyChangeDelay: number

    // Owm methods of FolksDummy-0.6.FolksDummy.Persona

    updateWriteableProperties(writeableProperties: string[]): void
    updateLinkableProperties(linkableProperties: string[]): void
    changeProperty(propertyName: string, callback: any, callback_?: Gio.AsyncReadyCallback | null): void
    changePropertyFinish(res: Gio.AsyncResult): void
    getPropertyChangeDelay(): number
    setPropertyChangeDelay(value: number): void

    // Class property signals of FolksDummy-0.6.FolksDummy.Persona

    connect(sigName: "notify::property-change-delay", callback: any): number
    on(sigName: "notify::property-change-delay", callback: any): number
    once(sigName: "notify::property-change-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-change-delay", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Persona extends Folks.Persona {

    // Own properties of FolksDummy-0.6.FolksDummy.Persona

    static name: string

    // Constructors of FolksDummy-0.6.FolksDummy.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(store: PersonaStore, contactId: string, isUser: boolean, linkableProperties: string[]) 
    static new(store: PersonaStore, contactId: string, isUser: boolean, linkableProperties: string[]): Persona
    _init(config?: Persona.ConstructorProperties): void
}

export interface BackendClass {
}

export abstract class BackendClass {

    // Own properties of FolksDummy-0.6.FolksDummy.BackendClass

    static name: string
}

export interface BackendPrivate {
}

export class BackendPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.BackendPrivate

    static name: string
}

export interface FullPersonaClass {
}

export abstract class FullPersonaClass {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersonaClass

    static name: string
}

export interface FullPersonaPrivate {
}

export class FullPersonaPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.FullPersonaPrivate

    static name: string
}

export interface PersonaStoreClass {
}

export abstract class PersonaStoreClass {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaStorePrivate

    static name: string
}

export interface PersonaClass {
}

export abstract class PersonaClass {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of FolksDummy-0.6.FolksDummy.PersonaPrivate

    static name: string
}
