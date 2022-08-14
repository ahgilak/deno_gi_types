
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * SocialWebClient-0.25
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export interface ClientGetServicesCallback {
    (client: Client, services: string[]): void
}
export interface ClientIsOnlineCallback {
    (client: Client, online: boolean): void
}
export interface ClientServiceContactsQueryOpenViewCallback {
    (query: ClientService, contactView: ClientContactView | null): void
}
export interface ClientServiceGetCapabilitiesCallback {
    (service: ClientService, caps: string[], error: GLib.Error): void
}
export interface ClientServiceQueryOpenViewCallback {
    (query: ClientService, itemView: ClientItemView | null): void
}
export interface ClientServiceUpdateStatusCallback {
    (service: ClientService, error: GLib.Error): void
}
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `online-changed`
     */
    export interface OnlineChangedSignalCallback {
        (object: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Client {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Client

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Client

    getService(serviceName: string): ClientService
    getServices(cb: ClientGetServicesCallback): void
    isOnline(cb: ClientIsOnlineCallback): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): number
    on(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): number
    once(sigName: "online-changed", callback: Client.OnlineChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "online-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.Client

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Client extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Client

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Client

    constructor(config?: Client.ConstructorProperties) 
    constructor() 
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
}

export module ClientContactView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `contacts-added`
     */
    export interface ContactsAddedSignalCallback {
        (contacts: Contact[]): void
    }

    /**
     * Signal callback interface for `contacts-changed`
     */
    export interface ContactsChangedSignalCallback {
        (contacts: Contact[]): void
    }

    /**
     * Signal callback interface for `contacts-removed`
     */
    export interface ContactsRemovedSignalCallback {
        (contacts: Contact[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

        objectPath?: string | null
    }

}

export interface ClientContactView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    readonly objectPath: string

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientContactView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

    connect(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): number
    on(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): number
    once(sigName: "contacts-added", callback: ClientContactView.ContactsAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contacts-added", ...args: any[]): void
    connect(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): number
    on(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): number
    once(sigName: "contacts-changed", callback: ClientContactView.ContactsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contacts-changed", ...args: any[]): void
    connect(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): number
    on(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): number
    once(sigName: "contacts-removed", callback: ClientContactView.ContactsRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contacts-removed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientContactView

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

export class ClientContactView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactView

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientContactView

    constructor(config?: ClientContactView.ConstructorProperties) 
    _init(config?: ClientContactView.ConstructorProperties): void
}

export module ClientItemView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `items-added`
     */
    export interface ItemsAddedSignalCallback {
        (items: Item[]): void
    }

    /**
     * Signal callback interface for `items-changed`
     */
    export interface ItemsChangedSignalCallback {
        (items: Item[]): void
    }

    /**
     * Signal callback interface for `items-removed`
     */
    export interface ItemsRemovedSignalCallback {
        (items: Item[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

        objectPath?: string | null
    }

}

export interface ClientItemView {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    readonly objectPath: string

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemView

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientItemView

    close(): void
    refresh(): void
    start(): void
    stop(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

    connect(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): number
    on(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): number
    once(sigName: "items-added", callback: ClientItemView.ItemsAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "items-added", ...args: any[]): void
    connect(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): number
    on(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): number
    once(sigName: "items-changed", callback: ClientItemView.ItemsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "items-changed", ...args: any[]): void
    connect(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): number
    on(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): number
    once(sigName: "items-removed", callback: ClientItemView.ItemsRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "items-removed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientItemView

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

export class ClientItemView extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemView

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientItemView

    constructor(config?: ClientItemView.ConstructorProperties) 
    _init(config?: ClientItemView.ConstructorProperties): void
}

export module ClientLastfm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientLastfm {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    nowPlaying(artist: string, album: string, track: string, length: number, tracknumber: number, musicbrainzId: string): void
    submitTrack(artist: string, album: string, track: string, time: number, source: string, rating: string, length: number, tracknumber: number, musicbrainzId: string): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClientLastfm extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientLastfm

    constructor(config?: ClientLastfm.ConstructorProperties) 
    constructor() 
    static new(): ClientLastfm
    _init(config?: ClientLastfm.ConstructorProperties): void
}

export module ClientService {

    // Signal callback interfaces

    /**
     * Signal callback interface for `avatar-retrieved`
     */
    export interface AvatarRetrievedSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `capabilities-changed`
     */
    export interface CapabilitiesChangedSignalCallback {
        (object: string[]): void
    }

    /**
     * Signal callback interface for `status-updated`
     */
    export interface StatusUpdatedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `user-changed`
     */
    export interface UserChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClientService {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientService

    parent: GObject.Object

    // Owm methods of SocialWebClient-0.25.SocialWebClient.ClientService

    banishableHideItem(uid: string): void
    contactsQueryOpenView(query: string, params: GLib.HashTable, cb: ClientServiceContactsQueryOpenViewCallback): void
    credentialsUpdated(): void
    getDisplayName(): string
    getDynamicCapabilities(cb: ClientServiceGetCapabilitiesCallback): void
    getName(): string
    getStaticCapabilities(cb: ClientServiceGetCapabilitiesCallback): void
    queryOpenView(query: string, params: GLib.HashTable, cb: ClientServiceQueryOpenViewCallback): void
    requestAvatar(): void
    updateStatus(cb: ClientServiceUpdateStatusCallback, statusMsg: string): void
    updateStatusWithFields(cb: ClientServiceUpdateStatusCallback, statusMsg: string, fields: GLib.HashTable): void
    uploadPhotoFinish(res: Gio.AsyncResult): boolean
    uploadVideoFinish(res: Gio.AsyncResult): boolean

    // Own virtual methods of SocialWebClient-0.25.SocialWebClient.ClientService

    avatarRetrieved(path: string): void
    capabilitiesChanged(caps: string): void
    statusUpdated(success: boolean): void
    userChanged(): void

    // Own signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): number
    on(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): number
    once(sigName: "avatar-retrieved", callback: ClientService.AvatarRetrievedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "avatar-retrieved", ...args: any[]): void
    connect(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): number
    on(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): number
    once(sigName: "capabilities-changed", callback: ClientService.CapabilitiesChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "capabilities-changed", ...args: any[]): void
    connect(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): number
    on(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): number
    once(sigName: "status-updated", callback: ClientService.StatusUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "status-updated", ...args: any[]): void
    connect(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): number
    on(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): number
    once(sigName: "user-changed", callback: ClientService.UserChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "user-changed", ...args: any[]): void

    // Class property signals of SocialWebClient-0.25.SocialWebClient.ClientService

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClientService extends GObject.Object {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientService

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.ClientService

    constructor(config?: ClientService.ConstructorProperties) 
    _init(config?: ClientService.ConstructorProperties): void
    static hasCap(caps: string[], cap: string): boolean
}

export interface ClientClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientClass

    static name: string
}

export interface ClientContactViewClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientContactViewClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientContactViewClass

    static name: string
}

export interface ClientItemViewClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientItemViewClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientItemViewClass

    static name: string
}

export interface ClientLastfmClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass

    parentClass: GObject.ObjectClass
}

export abstract class ClientLastfmClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientLastfmClass

    static name: string
}

export interface ClientServiceClass {

    // Own fields of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    parentClass: GObject.ObjectClass
    capabilitiesChanged: (service: ClientService, caps: string) => void
    userChanged: (service: ClientService) => void
    avatarRetrieved: (service: ClientService, path: string) => void
    statusUpdated: (service: ClientService, success: boolean) => void
}

export abstract class ClientServiceClass {

    // Own properties of SocialWebClient-0.25.SocialWebClient.ClientServiceClass

    static name: string
}

export interface Contact {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Contact

    refcount: number
    service: string
    uuid: string
    date: GLib.TimeVal
    props: GLib.HashTable

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Contact

    free(): void
    getValue(key: string): string
    getValueAll(key: string): string[]
    hasKey(key: string): boolean
    isFromCache(): boolean
    ref(): Contact
    unref(): void
}

export class Contact {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Contact

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Contact

    constructor() 
    static new(): Contact
}

export interface Item {

    // Own fields of SocialWebClient-0.25.SocialWebClient.Item

    refcount: number
    service: string
    uuid: string
    date: GLib.TimeVal
    props: GLib.HashTable

    // Owm methods of SocialWebClient-0.25.SocialWebClient.Item

    free(): void
    getValue(key: string): string
    hasKey(key: string): boolean
    isFromCache(): boolean
    ref(): Item
    unref(): void
}

export class Item {

    // Own properties of SocialWebClient-0.25.SocialWebClient.Item

    static name: string

    // Constructors of SocialWebClient-0.25.SocialWebClient.Item

    constructor() 
    static new(): Item
}
