
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * FolksLibsocialweb-0.6
 */

import type * as SocialWebClient from './SocialWebClient-0.25.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Folks from './Folks-0.6.js';
import type * as Gee from './Gee-0.8.js';

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.AvatarDetails.ConstructorProperties, Folks.GenderDetails.ConstructorProperties, Folks.ImDetails.ConstructorProperties, Folks.NameDetails.ConstructorProperties, Folks.UrlDetails.ConstructorProperties, Folks.WebServiceDetails.ConstructorProperties, Folks.Persona.ConstructorProperties {

        // Own constructor properties of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

        lswContact?: SocialWebClient.Contact | null
    }

}

export interface Persona extends Folks.AvatarDetails, Folks.GenderDetails, Folks.ImDetails, Folks.NameDetails, Folks.UrlDetails, Folks.WebServiceDetails {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    readonly lswContact: SocialWebClient.Contact

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    parentInstance: Folks.Persona
    priv: PersonaPrivate

    // Owm methods of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    update(contact: SocialWebClient.Contact): void
    getLswContact(): SocialWebClient.Contact

    // Class property signals of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    connect(sigName: "notify::lsw-contact", callback: any): number
    on(sigName: "notify::lsw-contact", callback: any): number
    once(sigName: "notify::lsw-contact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lsw-contact", ...args: any[]): void
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
    connect(sigName: "notify::avatar", callback: any): number
    on(sigName: "notify::avatar", callback: any): number
    once(sigName: "notify::avatar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: "notify::gender", callback: any): number
    on(sigName: "notify::gender", callback: any): number
    once(sigName: "notify::gender", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gender", ...args: any[]): void
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
    connect(sigName: "notify::urls", callback: any): number
    on(sigName: "notify::urls", callback: any): number
    once(sigName: "notify::urls", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urls", ...args: any[]): void
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

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    static name: string

    // Constructors of FolksLibsocialweb-0.6.FolksLibsocialweb.Persona

    constructor(config?: Persona.ConstructorProperties) 
    constructor(store: PersonaStore, contact: SocialWebClient.Contact) 
    static new(store: PersonaStore, contact: SocialWebClient.Contact): Persona
    _init(config?: Persona.ConstructorProperties): void
    static getContactId(contact: SocialWebClient.Contact): string | null
}

export module PersonaStore {

    // Constructor properties interface

    export interface ConstructorProperties extends Folks.PersonaStore.ConstructorProperties {

        // Own constructor properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

        service?: SocialWebClient.ClientService | null
    }

}

export interface PersonaStore {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    readonly service: SocialWebClient.ClientService

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    parentInstance: Folks.PersonaStore
    priv: PersonaStorePrivate

    // Owm methods of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    getService(): SocialWebClient.ClientService

    // Class property signals of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
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

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    static name: string

    // Constructors of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    constructor(service: SocialWebClient.ClientService) 
    static new(service: SocialWebClient.ClientService): PersonaStore
    _init(config?: PersonaStore.ConstructorProperties): void
}

export interface PersonaClass {

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaClass

    parentClass: Folks.PersonaClass
}

export abstract class PersonaClass {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaPrivate

    static name: string
}

export interface PersonaStoreClass {

    // Own fields of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStoreClass

    parentClass: Folks.PersonaStoreClass
}

export abstract class PersonaStoreClass {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of FolksLibsocialweb-0.6.FolksLibsocialweb.PersonaStorePrivate

    static name: string
}
