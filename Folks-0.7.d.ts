
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Folks-0.7
 */

import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as Gee from './Gee-0.8.js';

export enum Gender {
    UNSPECIFIED,
    MALE,
    FEMALE,
}
export enum TrustLevel {
    NONE,
    PERSONAS,
}
export enum PersonaStoreTrust {
    NONE,
    PARTIAL,
    FULL,
}
export enum PersonaDetail {
    INVALID,
    ALIAS,
    AVATAR,
    BIRTHDAY,
    EMAIL_ADDRESSES,
    FULL_NAME,
    GENDER,
    IM_ADDRESSES,
    IS_FAVOURITE,
    LOCAL_IDS,
    LOCATION,
    NICKNAME,
    NOTES,
    PHONE_NUMBERS,
    POSTAL_ADDRESSES,
    ROLES,
    STRUCTURED_NAME,
    URLS,
    WEB_SERVICE_ADDRESSES,
    GROUPS,
    IM_INTERACTION_COUNT,
    LAST_IM_INTERACTION_DATETIME,
    CALL_INTERACTION_COUNT,
    LAST_CALL_INTERACTION_DATETIME,
    ANTI_LINKS,
    EXTENDED_INFO,
}
export enum MatchResult {
    NONE,
    VERY_LOW,
    LOW,
    MEDIUM,
    HIGH,
    VERY_HIGH,
    MIN,
    MAX,
}
export enum PresenceType {
    UNSET,
    OFFLINE,
    AVAILABLE,
    AWAY,
    EXTENDED_AWAY,
    HIDDEN,
    BUSY,
    UNKNOWN,
    ERROR,
}
export enum MaybeBool {
    UNSET,
    FALSE,
    TRUE,
}
export enum ImDetailsError {
    INVALID_IM_ADDRESS,
}
export enum IndividualAggregatorError {
    ADD_FAILED,
    NO_WRITEABLE_STORE,
    STORE_OFFLINE,
    PROPERTY_NOT_WRITEABLE,
    NO_PRIMARY_STORE,
}
export enum PersonaStoreError {
    INVALID_ARGUMENT,
    CREATE_FAILED,
    UNSUPPORTED_ON_USER,
    STORE_OFFLINE,
    READ_ONLY,
    PERMISSION_DENIED,
    REMOVE_FAILED,
    UNSUPPORTED_ON_NON_USER,
}
export enum PropertyError {
    NOT_WRITEABLE,
    INVALID_VALUE,
    UNKNOWN_ERROR,
    UNAVAILABLE,
}
export enum GroupDetailsChangeReason {
    NONE,
    OFFLINE,
    KICKED,
    BUSY,
    INVITED,
    BANNED,
    ERROR,
    INVALID_MEMBER,
    NO_ANSWER,
    RENAMED,
    PERMISSION_DENIED,
    SEPARATED,
}
export module AliasDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AliasDetails

        alias?: string | null
    }

}

export interface AliasDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AliasDetails

    alias: string

    // Owm methods of Folks-0.7.Folks.AliasDetails

    // Has conflict: changeAlias(alias: string, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeAliasFinish(res: Gio.AsyncResult): void
    // Has conflict: getAlias(): string
    // Has conflict: setAlias(value: string): void

    // Own virtual methods of Folks-0.7.Folks.AliasDetails

    changeAlias(alias: string, callback: Gio.AsyncReadyCallback | null): void
    changeAliasFinish(res: Gio.AsyncResult): void
    getAlias(): string
    setAlias(value: string): void

    // Class property signals of Folks-0.7.Folks.AliasDetails

    connect(sigName: "notify::alias", callback: any): number
    on(sigName: "notify::alias", callback: any): number
    once(sigName: "notify::alias", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alias", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AliasDetails {

    // Own properties of Folks-0.7.Folks.AliasDetails

    static name: string

    // Constructors of Folks-0.7.Folks.AliasDetails

    constructor(config?: AliasDetails.ConstructorProperties) 
    _init(config?: AliasDetails.ConstructorProperties): void
}

export module AntiLinkable {

    // Constructor properties interface

    export interface ConstructorProperties extends Persona.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AntiLinkable

        antiLinks?: Gee.Set | null
    }

}

export interface AntiLinkable extends Persona {

    // Own properties of Folks-0.7.Folks.AntiLinkable

    antiLinks: Gee.Set

    // Owm methods of Folks-0.7.Folks.AntiLinkable

    // Has conflict: changeAntiLinks(antiLinks: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeAntiLinksFinish(res: Gio.AsyncResult): void
    hasAntiLinkWithPersona(otherPersona: Persona): boolean
    addAntiLinks(otherPersonas: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    addAntiLinksFinish(res: Gio.AsyncResult): void
    removeAntiLinks(otherPersonas: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    removeAntiLinksFinish(res: Gio.AsyncResult): void
    addGlobalAntiLink(callback: Gio.AsyncReadyCallback | null): void
    addGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    removeGlobalAntiLink(callback: Gio.AsyncReadyCallback | null): void
    removeGlobalAntiLinkFinish(res: Gio.AsyncResult): void
    hasGlobalAntiLink(): boolean
    // Has conflict: getAntiLinks(): Gee.Set
    // Has conflict: setAntiLinks(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.AntiLinkable

    changeAntiLinks(antiLinks: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeAntiLinksFinish(res: Gio.AsyncResult): void
    getAntiLinks(): Gee.Set
    setAntiLinks(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.AntiLinkable

    connect(sigName: "notify::anti-links", callback: any): number
    on(sigName: "notify::anti-links", callback: any): number
    once(sigName: "notify::anti-links", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anti-links", ...args: any[]): void
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

export class AntiLinkable extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AntiLinkable

    static name: string

    // Constructors of Folks-0.7.Folks.AntiLinkable

    constructor(config?: AntiLinkable.ConstructorProperties) 
    _init(config?: AntiLinkable.ConstructorProperties): void
}

export module AvatarDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AvatarDetails

        avatar?: Gio.LoadableIcon | null
    }

}

export interface AvatarDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AvatarDetails

    avatar: Gio.LoadableIcon

    // Owm methods of Folks-0.7.Folks.AvatarDetails

    // Has conflict: changeAvatar(avatar: Gio.LoadableIcon | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeAvatarFinish(res: Gio.AsyncResult): void
    // Has conflict: getAvatar(): Gio.LoadableIcon | null
    // Has conflict: setAvatar(value: Gio.LoadableIcon | null): void

    // Own virtual methods of Folks-0.7.Folks.AvatarDetails

    changeAvatar(avatar: Gio.LoadableIcon | null, callback: Gio.AsyncReadyCallback | null): void
    changeAvatarFinish(res: Gio.AsyncResult): void
    getAvatar(): Gio.LoadableIcon | null
    setAvatar(value: Gio.LoadableIcon | null): void

    // Class property signals of Folks-0.7.Folks.AvatarDetails

    connect(sigName: "notify::avatar", callback: any): number
    on(sigName: "notify::avatar", callback: any): number
    once(sigName: "notify::avatar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avatar", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AvatarDetails {

    // Own properties of Folks-0.7.Folks.AvatarDetails

    static name: string

    // Constructors of Folks-0.7.Folks.AvatarDetails

    constructor(config?: AvatarDetails.ConstructorProperties) 
    _init(config?: AvatarDetails.ConstructorProperties): void
}

export module BirthdayDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.BirthdayDetails

        birthday?: GLib.DateTime | null
        calendarEventId?: string | null
    }

}

export interface BirthdayDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.BirthdayDetails

    birthday: GLib.DateTime
    calendarEventId: string

    // Owm methods of Folks-0.7.Folks.BirthdayDetails

    // Has conflict: changeBirthday(birthday: GLib.DateTime | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeBirthdayFinish(res: Gio.AsyncResult): void
    // Has conflict: changeCalendarEventId(eventId: string | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    // Has conflict: getBirthday(): GLib.DateTime | null
    // Has conflict: setBirthday(value: GLib.DateTime | null): void
    // Has conflict: getCalendarEventId(): string | null
    // Has conflict: setCalendarEventId(value: string | null): void

    // Own virtual methods of Folks-0.7.Folks.BirthdayDetails

    changeBirthday(birthday: GLib.DateTime | null, callback: Gio.AsyncReadyCallback | null): void
    changeBirthdayFinish(res: Gio.AsyncResult): void
    changeCalendarEventId(eventId: string | null, callback: Gio.AsyncReadyCallback | null): void
    changeCalendarEventIdFinish(res: Gio.AsyncResult): void
    getBirthday(): GLib.DateTime | null
    setBirthday(value: GLib.DateTime | null): void
    getCalendarEventId(): string | null
    setCalendarEventId(value: string | null): void

    // Class property signals of Folks-0.7.Folks.BirthdayDetails

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BirthdayDetails {

    // Own properties of Folks-0.7.Folks.BirthdayDetails

    static name: string

    // Constructors of Folks-0.7.Folks.BirthdayDetails

    constructor(config?: BirthdayDetails.ConstructorProperties) 
    _init(config?: BirthdayDetails.ConstructorProperties): void
}

export module EmailDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.EmailDetails

        emailAddresses?: Gee.Set | null
    }

}

export interface EmailDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.EmailDetails

    emailAddresses: Gee.Set

    // Owm methods of Folks-0.7.Folks.EmailDetails

    // Has conflict: changeEmailAddresses(emailAddresses: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeEmailAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getEmailAddresses(): Gee.Set
    // Has conflict: setEmailAddresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.EmailDetails

    changeEmailAddresses(emailAddresses: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeEmailAddressesFinish(res: Gio.AsyncResult): void
    getEmailAddresses(): Gee.Set
    setEmailAddresses(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.EmailDetails

    connect(sigName: "notify::email-addresses", callback: any): number
    on(sigName: "notify::email-addresses", callback: any): number
    once(sigName: "notify::email-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EmailDetails {

    // Own properties of Folks-0.7.Folks.EmailDetails

    static name: string

    // Constructors of Folks-0.7.Folks.EmailDetails

    constructor(config?: EmailDetails.ConstructorProperties) 
    _init(config?: EmailDetails.ConstructorProperties): void
}

export module ExtendedInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ExtendedInfo extends GObject.Object {

    // Owm methods of Folks-0.7.Folks.ExtendedInfo

    // Has conflict: getExtendedField(name: string): ExtendedFieldDetails | null
    // Has conflict: changeExtendedField(name: string, value: ExtendedFieldDetails, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeExtendedFieldFinish(res: Gio.AsyncResult): void
    // Has conflict: removeExtendedField(name: string, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removeExtendedFieldFinish(res: Gio.AsyncResult): void

    // Own virtual methods of Folks-0.7.Folks.ExtendedInfo

    getExtendedField(name: string): ExtendedFieldDetails | null
    changeExtendedField(name: string, value: ExtendedFieldDetails, callback: Gio.AsyncReadyCallback | null): void
    changeExtendedFieldFinish(res: Gio.AsyncResult): void
    removeExtendedField(name: string, callback: Gio.AsyncReadyCallback | null): void
    removeExtendedFieldFinish(res: Gio.AsyncResult): void

    // Class property signals of Folks-0.7.Folks.ExtendedInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExtendedInfo {

    // Own properties of Folks-0.7.Folks.ExtendedInfo

    static name: string

    // Constructors of Folks-0.7.Folks.ExtendedInfo

    constructor(config?: ExtendedInfo.ConstructorProperties) 
    _init(config?: ExtendedInfo.ConstructorProperties): void
}

export module FavouriteDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.FavouriteDetails

        isFavourite?: boolean | null
    }

}

export interface FavouriteDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.FavouriteDetails

    isFavourite: boolean

    // Owm methods of Folks-0.7.Folks.FavouriteDetails

    // Has conflict: changeIsFavourite(isFavourite: boolean, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeIsFavouriteFinish(res: Gio.AsyncResult): void
    // Has conflict: getIsFavourite(): boolean
    // Has conflict: setIsFavourite(value: boolean): void

    // Own virtual methods of Folks-0.7.Folks.FavouriteDetails

    changeIsFavourite(isFavourite: boolean, callback: Gio.AsyncReadyCallback | null): void
    changeIsFavouriteFinish(res: Gio.AsyncResult): void
    getIsFavourite(): boolean
    setIsFavourite(value: boolean): void

    // Class property signals of Folks-0.7.Folks.FavouriteDetails

    connect(sigName: "notify::is-favourite", callback: any): number
    on(sigName: "notify::is-favourite", callback: any): number
    once(sigName: "notify::is-favourite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-favourite", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FavouriteDetails {

    // Own properties of Folks-0.7.Folks.FavouriteDetails

    static name: string

    // Constructors of Folks-0.7.Folks.FavouriteDetails

    constructor(config?: FavouriteDetails.ConstructorProperties) 
    _init(config?: FavouriteDetails.ConstructorProperties): void
}

export module GenderDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.GenderDetails

        gender?: Gender | null
    }

}

export interface GenderDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.GenderDetails

    gender: Gender

    // Owm methods of Folks-0.7.Folks.GenderDetails

    // Has conflict: changeGender(gender: Gender, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeGenderFinish(res: Gio.AsyncResult): void
    // Has conflict: getGender(): Gender
    // Has conflict: setGender(value: Gender): void

    // Own virtual methods of Folks-0.7.Folks.GenderDetails

    changeGender(gender: Gender, callback: Gio.AsyncReadyCallback | null): void
    changeGenderFinish(res: Gio.AsyncResult): void
    getGender(): Gender
    setGender(value: Gender): void

    // Class property signals of Folks-0.7.Folks.GenderDetails

    connect(sigName: "notify::gender", callback: any): number
    on(sigName: "notify::gender", callback: any): number
    once(sigName: "notify::gender", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gender", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GenderDetails {

    // Own properties of Folks-0.7.Folks.GenderDetails

    static name: string

    // Constructors of Folks-0.7.Folks.GenderDetails

    constructor(config?: GenderDetails.ConstructorProperties) 
    _init(config?: GenderDetails.ConstructorProperties): void
}

export module GroupDetails {

    // Signal callback interfaces

    /**
     * Signal callback interface for `group-changed`
     */
    export interface GroupChangedSignalCallback {
        (group: string, isMember: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.GroupDetails

        groups?: Gee.Set | null
    }

}

export interface GroupDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.GroupDetails

    groups: Gee.Set

    // Owm methods of Folks-0.7.Folks.GroupDetails

    // Has conflict: changeGroup(group: string, isMember: boolean, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeGroupFinish(res: Gio.AsyncResult): void
    // Has conflict: changeGroups(groups: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeGroupsFinish(res: Gio.AsyncResult): void
    // Has conflict: getGroups(): Gee.Set
    // Has conflict: setGroups(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.GroupDetails

    changeGroup(group: string, isMember: boolean, callback: Gio.AsyncReadyCallback | null): void
    changeGroupFinish(res: Gio.AsyncResult): void
    changeGroups(groups: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeGroupsFinish(res: Gio.AsyncResult): void
    getGroups(): Gee.Set
    setGroups(value: Gee.Set): void

    // Own signals of Folks-0.7.Folks.GroupDetails

    connect(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    on(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    once(sigName: "group-changed", callback: GroupDetails.GroupChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "group-changed", isMember: boolean, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.GroupDetails

    connect(sigName: "notify::groups", callback: any): number
    on(sigName: "notify::groups", callback: any): number
    once(sigName: "notify::groups", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::groups", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GroupDetails {

    // Own properties of Folks-0.7.Folks.GroupDetails

    static name: string

    // Constructors of Folks-0.7.Folks.GroupDetails

    constructor(config?: GroupDetails.ConstructorProperties) 
    _init(config?: GroupDetails.ConstructorProperties): void
}

export module ImDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.ImDetails

        imAddresses?: Gee.MultiMap | null
    }

}

export interface ImDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.ImDetails

    imAddresses: Gee.MultiMap

    // Owm methods of Folks-0.7.Folks.ImDetails

    // Has conflict: changeImAddresses(imAddresses: Gee.MultiMap, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeImAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getImAddresses(): Gee.MultiMap
    // Has conflict: setImAddresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.7.Folks.ImDetails

    changeImAddresses(imAddresses: Gee.MultiMap, callback: Gio.AsyncReadyCallback | null): void
    changeImAddressesFinish(res: Gio.AsyncResult): void
    getImAddresses(): Gee.MultiMap
    setImAddresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.7.Folks.ImDetails

    connect(sigName: "notify::im-addresses", callback: any): number
    on(sigName: "notify::im-addresses", callback: any): number
    once(sigName: "notify::im-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ImDetails {

    // Own properties of Folks-0.7.Folks.ImDetails

    static name: string

    // Constructors of Folks-0.7.Folks.ImDetails

    constructor(config?: ImDetails.ConstructorProperties) 
    _init(config?: ImDetails.ConstructorProperties): void
    static normaliseImAddress(imAddress: string, protocol: string): string
}

export module InteractionDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface InteractionDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.InteractionDetails

    readonly imInteractionCount: number
    readonly lastImInteractionDatetime: GLib.DateTime
    readonly callInteractionCount: number
    readonly lastCallInteractionDatetime: GLib.DateTime

    // Owm methods of Folks-0.7.Folks.InteractionDetails

    // Has conflict: getImInteractionCount(): number
    // Has conflict: getLastImInteractionDatetime(): GLib.DateTime | null
    // Has conflict: getCallInteractionCount(): number
    // Has conflict: getLastCallInteractionDatetime(): GLib.DateTime | null

    // Own virtual methods of Folks-0.7.Folks.InteractionDetails

    getImInteractionCount(): number
    getLastImInteractionDatetime(): GLib.DateTime | null
    getCallInteractionCount(): number
    getLastCallInteractionDatetime(): GLib.DateTime | null

    // Class property signals of Folks-0.7.Folks.InteractionDetails

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InteractionDetails {

    // Own properties of Folks-0.7.Folks.InteractionDetails

    static name: string

    // Constructors of Folks-0.7.Folks.InteractionDetails

    constructor(config?: InteractionDetails.ConstructorProperties) 
    _init(config?: InteractionDetails.ConstructorProperties): void
}

export module LocalIdDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.LocalIdDetails

        localIds?: Gee.Set | null
    }

}

export interface LocalIdDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.LocalIdDetails

    localIds: Gee.Set

    // Owm methods of Folks-0.7.Folks.LocalIdDetails

    // Has conflict: changeLocalIds(localIds: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeLocalIdsFinish(res: Gio.AsyncResult): void
    // Has conflict: getLocalIds(): Gee.Set
    // Has conflict: setLocalIds(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.LocalIdDetails

    changeLocalIds(localIds: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeLocalIdsFinish(res: Gio.AsyncResult): void
    getLocalIds(): Gee.Set
    setLocalIds(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.LocalIdDetails

    connect(sigName: "notify::local-ids", callback: any): number
    on(sigName: "notify::local-ids", callback: any): number
    once(sigName: "notify::local-ids", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-ids", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LocalIdDetails {

    // Own properties of Folks-0.7.Folks.LocalIdDetails

    static name: string

    // Constructors of Folks-0.7.Folks.LocalIdDetails

    constructor(config?: LocalIdDetails.ConstructorProperties) 
    _init(config?: LocalIdDetails.ConstructorProperties): void
}

export module LocationDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.LocationDetails

        location?: Location | null
    }

}

export interface LocationDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.LocationDetails

    location: Location

    // Owm methods of Folks-0.7.Folks.LocationDetails

    // Has conflict: changeLocation(location: Location | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeLocationFinish(res: Gio.AsyncResult): void
    // Has conflict: getLocation(): Location | null
    // Has conflict: setLocation(value: Location | null): void

    // Own virtual methods of Folks-0.7.Folks.LocationDetails

    changeLocation(location: Location | null, callback: Gio.AsyncReadyCallback | null): void
    changeLocationFinish(res: Gio.AsyncResult): void
    getLocation(): Location | null
    setLocation(value: Location | null): void

    // Class property signals of Folks-0.7.Folks.LocationDetails

    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LocationDetails {

    // Own properties of Folks-0.7.Folks.LocationDetails

    static name: string

    // Constructors of Folks-0.7.Folks.LocationDetails

    constructor(config?: LocationDetails.ConstructorProperties) 
    _init(config?: LocationDetails.ConstructorProperties): void
}

export module NameDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.NameDetails

        structuredName?: StructuredName | null
        fullName?: string | null
        nickname?: string | null
    }

}

export interface NameDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.NameDetails

    structuredName: StructuredName
    fullName: string
    nickname: string

    // Owm methods of Folks-0.7.Folks.NameDetails

    // Has conflict: changeStructuredName(name: StructuredName | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeStructuredNameFinish(res: Gio.AsyncResult): void
    // Has conflict: changeFullName(fullName: string, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeFullNameFinish(res: Gio.AsyncResult): void
    // Has conflict: changeNickname(nickname: string, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeNicknameFinish(res: Gio.AsyncResult): void
    // Has conflict: getStructuredName(): StructuredName | null
    // Has conflict: setStructuredName(value: StructuredName | null): void
    // Has conflict: getFullName(): string
    // Has conflict: setFullName(value: string): void
    // Has conflict: getNickname(): string
    // Has conflict: setNickname(value: string): void

    // Own virtual methods of Folks-0.7.Folks.NameDetails

    changeStructuredName(name: StructuredName | null, callback: Gio.AsyncReadyCallback | null): void
    changeStructuredNameFinish(res: Gio.AsyncResult): void
    changeFullName(fullName: string, callback: Gio.AsyncReadyCallback | null): void
    changeFullNameFinish(res: Gio.AsyncResult): void
    changeNickname(nickname: string, callback: Gio.AsyncReadyCallback | null): void
    changeNicknameFinish(res: Gio.AsyncResult): void
    getStructuredName(): StructuredName | null
    setStructuredName(value: StructuredName | null): void
    getFullName(): string
    setFullName(value: string): void
    getNickname(): string
    setNickname(value: string): void

    // Class property signals of Folks-0.7.Folks.NameDetails

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NameDetails {

    // Own properties of Folks-0.7.Folks.NameDetails

    static name: string

    // Constructors of Folks-0.7.Folks.NameDetails

    constructor(config?: NameDetails.ConstructorProperties) 
    _init(config?: NameDetails.ConstructorProperties): void
}

export module NoteDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.NoteDetails

        notes?: Gee.Set | null
    }

}

export interface NoteDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.NoteDetails

    notes: Gee.Set

    // Owm methods of Folks-0.7.Folks.NoteDetails

    // Has conflict: changeNotes(notes: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeNotesFinish(res: Gio.AsyncResult): void
    // Has conflict: getNotes(): Gee.Set
    // Has conflict: setNotes(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.NoteDetails

    changeNotes(notes: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeNotesFinish(res: Gio.AsyncResult): void
    getNotes(): Gee.Set
    setNotes(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.NoteDetails

    connect(sigName: "notify::notes", callback: any): number
    on(sigName: "notify::notes", callback: any): number
    once(sigName: "notify::notes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NoteDetails {

    // Own properties of Folks-0.7.Folks.NoteDetails

    static name: string

    // Constructors of Folks-0.7.Folks.NoteDetails

    constructor(config?: NoteDetails.ConstructorProperties) 
    _init(config?: NoteDetails.ConstructorProperties): void
}

export module PhoneDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PhoneDetails

        phoneNumbers?: Gee.Set | null
    }

}

export interface PhoneDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PhoneDetails

    phoneNumbers: Gee.Set

    // Owm methods of Folks-0.7.Folks.PhoneDetails

    // Has conflict: changePhoneNumbers(phoneNumbers: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changePhoneNumbersFinish(res: Gio.AsyncResult): void
    // Has conflict: getPhoneNumbers(): Gee.Set
    // Has conflict: setPhoneNumbers(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.PhoneDetails

    changePhoneNumbers(phoneNumbers: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changePhoneNumbersFinish(res: Gio.AsyncResult): void
    getPhoneNumbers(): Gee.Set
    setPhoneNumbers(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.PhoneDetails

    connect(sigName: "notify::phone-numbers", callback: any): number
    on(sigName: "notify::phone-numbers", callback: any): number
    once(sigName: "notify::phone-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PhoneDetails {

    // Own properties of Folks-0.7.Folks.PhoneDetails

    static name: string

    // Constructors of Folks-0.7.Folks.PhoneDetails

    constructor(config?: PhoneDetails.ConstructorProperties) 
    _init(config?: PhoneDetails.ConstructorProperties): void
}

export module PostalAddressDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PostalAddressDetails

        postalAddresses?: Gee.Set | null
    }

}

export interface PostalAddressDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PostalAddressDetails

    postalAddresses: Gee.Set

    // Owm methods of Folks-0.7.Folks.PostalAddressDetails

    // Has conflict: changePostalAddresses(postalAddresses: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changePostalAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getPostalAddresses(): Gee.Set
    // Has conflict: setPostalAddresses(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.PostalAddressDetails

    changePostalAddresses(postalAddresses: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changePostalAddressesFinish(res: Gio.AsyncResult): void
    getPostalAddresses(): Gee.Set
    setPostalAddresses(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.PostalAddressDetails

    connect(sigName: "notify::postal-addresses", callback: any): number
    on(sigName: "notify::postal-addresses", callback: any): number
    once(sigName: "notify::postal-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PostalAddressDetails {

    // Own properties of Folks-0.7.Folks.PostalAddressDetails

    static name: string

    // Constructors of Folks-0.7.Folks.PostalAddressDetails

    constructor(config?: PostalAddressDetails.ConstructorProperties) 
    _init(config?: PostalAddressDetails.ConstructorProperties): void
}

export module PresenceDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PresenceDetails

        presenceType?: PresenceType | null
        presenceMessage?: string | null
        clientTypes?: string[] | null
        presenceStatus?: string | null
    }

}

export interface PresenceDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PresenceDetails

    presenceType: PresenceType
    presenceMessage: string
    clientTypes: string[]
    presenceStatus: string

    // Owm methods of Folks-0.7.Folks.PresenceDetails

    isOnline(): boolean
    // Has conflict: getPresenceType(): PresenceType
    // Has conflict: setPresenceType(value: PresenceType): void
    // Has conflict: getPresenceMessage(): string
    // Has conflict: setPresenceMessage(value: string): void
    // Has conflict: getClientTypes(): string[]
    // Has conflict: setClientTypes(value: string[]): void
    // Has conflict: getPresenceStatus(): string
    // Has conflict: setPresenceStatus(value: string): void

    // Own virtual methods of Folks-0.7.Folks.PresenceDetails

    getPresenceType(): PresenceType
    setPresenceType(value: PresenceType): void
    getPresenceMessage(): string
    setPresenceMessage(value: string): void
    getClientTypes(): string[]
    setClientTypes(value: string[]): void
    getPresenceStatus(): string
    setPresenceStatus(value: string): void

    // Class property signals of Folks-0.7.Folks.PresenceDetails

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PresenceDetails {

    // Own properties of Folks-0.7.Folks.PresenceDetails

    static name: string

    // Constructors of Folks-0.7.Folks.PresenceDetails

    constructor(config?: PresenceDetails.ConstructorProperties) 
    _init(config?: PresenceDetails.ConstructorProperties): void
    static getDefaultMessageFromType(type: PresenceType): string
    static typecmp(typeA: PresenceType, typeB: PresenceType): number
}

export module RoleDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.RoleDetails

        roles?: Gee.Set | null
    }

}

export interface RoleDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.RoleDetails

    roles: Gee.Set

    // Owm methods of Folks-0.7.Folks.RoleDetails

    // Has conflict: changeRoles(roles: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeRolesFinish(res: Gio.AsyncResult): void
    // Has conflict: getRoles(): Gee.Set
    // Has conflict: setRoles(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.RoleDetails

    changeRoles(roles: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeRolesFinish(res: Gio.AsyncResult): void
    getRoles(): Gee.Set
    setRoles(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.RoleDetails

    connect(sigName: "notify::roles", callback: any): number
    on(sigName: "notify::roles", callback: any): number
    once(sigName: "notify::roles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::roles", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RoleDetails {

    // Own properties of Folks-0.7.Folks.RoleDetails

    static name: string

    // Constructors of Folks-0.7.Folks.RoleDetails

    constructor(config?: RoleDetails.ConstructorProperties) 
    _init(config?: RoleDetails.ConstructorProperties): void
}

export module UrlDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.UrlDetails

        urls?: Gee.Set | null
    }

}

export interface UrlDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.UrlDetails

    urls: Gee.Set

    // Owm methods of Folks-0.7.Folks.UrlDetails

    // Has conflict: changeUrls(urls: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeUrlsFinish(res: Gio.AsyncResult): void
    // Has conflict: getUrls(): Gee.Set
    // Has conflict: setUrls(value: Gee.Set): void

    // Own virtual methods of Folks-0.7.Folks.UrlDetails

    changeUrls(urls: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    changeUrlsFinish(res: Gio.AsyncResult): void
    getUrls(): Gee.Set
    setUrls(value: Gee.Set): void

    // Class property signals of Folks-0.7.Folks.UrlDetails

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

export class UrlDetails {

    // Own properties of Folks-0.7.Folks.UrlDetails

    static name: string

    // Constructors of Folks-0.7.Folks.UrlDetails

    constructor(config?: UrlDetails.ConstructorProperties) 
    _init(config?: UrlDetails.ConstructorProperties): void
}

export module WebServiceDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.WebServiceDetails

        webServiceAddresses?: Gee.MultiMap | null
    }

}

export interface WebServiceDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.WebServiceDetails

    webServiceAddresses: Gee.MultiMap

    // Owm methods of Folks-0.7.Folks.WebServiceDetails

    // Has conflict: changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    // Has conflict: getWebServiceAddresses(): Gee.MultiMap
    // Has conflict: setWebServiceAddresses(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.7.Folks.WebServiceDetails

    changeWebServiceAddresses(webServiceAddresses: Gee.MultiMap, callback: Gio.AsyncReadyCallback | null): void
    changeWebServiceAddressesFinish(res: Gio.AsyncResult): void
    getWebServiceAddresses(): Gee.MultiMap
    setWebServiceAddresses(value: Gee.MultiMap): void

    // Class property signals of Folks-0.7.Folks.WebServiceDetails

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

export class WebServiceDetails {

    // Own properties of Folks-0.7.Folks.WebServiceDetails

    static name: string

    // Constructors of Folks-0.7.Folks.WebServiceDetails

    constructor(config?: WebServiceDetails.ConstructorProperties) 
    _init(config?: WebServiceDetails.ConstructorProperties): void
}

export module AbstractFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.AbstractFieldDetails

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        value?: object | null
        id?: string | null
        parameters?: Gee.MultiMap | null
    }

}

export interface AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetails

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    value: object
    readonly valueType: GObject.GType
    id: string
    parameters: Gee.MultiMap

    // Owm methods of Folks-0.7.Folks.AbstractFieldDetails

    getParameterValues(parameterName: string): Gee.Collection | null
    addParameter(parameterName: string, parameterValue: string): void
    setParameter(parameterName: string, parameterValue: string): void
    extendParameters(additional: Gee.MultiMap): void
    removeParameterAll(parameterName: string): void
    // Has conflict: equal(that: AbstractFieldDetails): boolean
    // Has conflict: parametersEqual(that: AbstractFieldDetails): boolean
    // Has conflict: valuesEqual(that: AbstractFieldDetails): boolean
    // Has conflict: hash(): number
    // Has conflict: getValue(): object | null
    // Has conflict: setValue(value: object | null): void
    getValueType(): GObject.GType
    // Has conflict: getId(): string
    // Has conflict: setId(value: string): void
    // Has conflict: getParameters(): Gee.MultiMap
    // Has conflict: setParameters(value: Gee.MultiMap): void

    // Own virtual methods of Folks-0.7.Folks.AbstractFieldDetails

    equal(that: AbstractFieldDetails): boolean
    parametersEqual(that: AbstractFieldDetails): boolean
    valuesEqual(that: AbstractFieldDetails): boolean
    hash(): number
    getValue(): object | null
    setValue(value: object | null): void
    getId(): string
    setId(value: string): void
    getParameters(): Gee.MultiMap
    setParameters(value: Gee.MultiMap): void

    // Class property signals of Folks-0.7.Folks.AbstractFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AbstractFieldDetails extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.AbstractFieldDetails

    constructor(config?: AbstractFieldDetails.ConstructorProperties) 
    _init(config?: AbstractFieldDetails.ConstructorProperties): void
    static equalStatic(left: AbstractFieldDetails, right: AbstractFieldDetails): boolean
    static hashStatic(value: AbstractFieldDetails): number
}

export module AvatarCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AvatarCache {

    // Owm methods of Folks-0.7.Folks.AvatarCache

    loadAvatar(id: string, callback: Gio.AsyncReadyCallback | null): void
    loadAvatarFinish(res: Gio.AsyncResult): Gio.LoadableIcon | null
    storeAvatar(id: string, avatar: Gio.LoadableIcon, callback: Gio.AsyncReadyCallback | null): void
    storeAvatarFinish(res: Gio.AsyncResult): string
    removeAvatar(id: string, callback: Gio.AsyncReadyCallback | null): void
    removeAvatarFinish(res: Gio.AsyncResult): void
    buildUriForAvatar(id: string): string

    // Class property signals of Folks-0.7.Folks.AvatarCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AvatarCache extends GObject.Object {

    // Own properties of Folks-0.7.Folks.AvatarCache

    static name: string

    // Constructors of Folks-0.7.Folks.AvatarCache

    constructor(config?: AvatarCache.ConstructorProperties) 
    _init(config?: AvatarCache.ConstructorProperties): void
    static dup(): AvatarCache
}

export module BackendStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `backend-available`
     */
    export interface BackendAvailableSignalCallback {
        (backend: Backend): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.BackendStore

        enabledBackends?: Gee.Map | null
        isPrepared?: boolean | null
    }

}

export interface BackendStore {

    // Own properties of Folks-0.7.Folks.BackendStore

    enabledBackends: Gee.Map
    isPrepared: boolean

    // Own fields of Folks-0.7.Folks.BackendStore

    folksBackendStoreKEYFILEGROUPALLOTHERS: string

    // Owm methods of Folks-0.7.Folks.BackendStore

    prepare(callback: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    loadBackends(callback: Gio.AsyncReadyCallback | null): void
    loadBackendsFinish(res: Gio.AsyncResult): void
    addBackend(backend: Backend): void
    dupBackendByName(name: string): Backend | null
    listBackends(): Gee.Collection
    enableBackend(name: string, callback: Gio.AsyncReadyCallback | null): void
    enableBackendFinish(res: Gio.AsyncResult): void
    disableBackend(name: string, callback: Gio.AsyncReadyCallback | null): void
    disableBackendFinish(res: Gio.AsyncResult): void
    getEnabledBackends(): Gee.Map
    getIsPrepared(): boolean

    // Own signals of Folks-0.7.Folks.BackendStore

    connect(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    on(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    once(sigName: "backend-available", callback: BackendStore.BackendAvailableSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "backend-available", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.BackendStore

    connect(sigName: "notify::enabled-backends", callback: any): number
    on(sigName: "notify::enabled-backends", callback: any): number
    once(sigName: "notify::enabled-backends", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled-backends", ...args: any[]): void
    connect(sigName: "notify::is-prepared", callback: any): number
    on(sigName: "notify::is-prepared", callback: any): number
    once(sigName: "notify::is-prepared", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-prepared", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BackendStore extends GObject.Object {

    // Own properties of Folks-0.7.Folks.BackendStore

    static name: string

    // Constructors of Folks-0.7.Folks.BackendStore

    constructor(config?: BackendStore.ConstructorProperties) 
    _init(config?: BackendStore.ConstructorProperties): void
    static dup(): BackendStore
}

export module Backend {

    // Signal callback interfaces

    /**
     * Signal callback interface for `persona-store-added`
     */
    export interface PersonaStoreAddedSignalCallback {
        (store: PersonaStore): void
    }

    /**
     * Signal callback interface for `persona-store-removed`
     */
    export interface PersonaStoreRemovedSignalCallback {
        (store: PersonaStore): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Backend {

    // Own properties of Folks-0.7.Folks.Backend

    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly name: string
    readonly personaStores: Gee.Map

    // Owm methods of Folks-0.7.Folks.Backend

    // Has conflict: disablePersonaStore(store: PersonaStore): void
    // Has conflict: enablePersonaStore(store: PersonaStore): void
    // Has conflict: setPersonaStores(storeids: Gee.Set | null): void
    // Has conflict: prepare(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: prepareFinish(res: Gio.AsyncResult): void
    // Has conflict: unprepare(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: unprepareFinish(res: Gio.AsyncResult): void
    // Has conflict: getIsPrepared(): boolean
    // Has conflict: getIsQuiescent(): boolean
    // Has conflict: getName(): string
    // Has conflict: getPersonaStores(): Gee.Map

    // Own virtual methods of Folks-0.7.Folks.Backend

    disablePersonaStore(store: PersonaStore): void
    enablePersonaStore(store: PersonaStore): void
    setPersonaStores(storeids: Gee.Set | null): void
    prepare(callback: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getName(): string
    getPersonaStores(): Gee.Map

    // Own signals of Folks-0.7.Folks.Backend

    connect(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    on(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    once(sigName: "persona-store-added", callback: Backend.PersonaStoreAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "persona-store-added", ...args: any[]): void
    connect(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    on(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    once(sigName: "persona-store-removed", callback: Backend.PersonaStoreRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "persona-store-removed", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.Backend

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

export class Backend extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Backend

    static name: string

    // Constructors of Folks-0.7.Folks.Backend

    constructor(config?: Backend.ConstructorProperties) 
    _init(config?: Backend.ConstructorProperties): void
}

export module Debug {

    // Signal callback interfaces

    /**
     * Signal callback interface for `print-status`
     */
    export interface PrintStatusSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Debug

        colourEnabled?: boolean | null
        debugOutputEnabled?: boolean | null
    }

}

export interface Debug {

    // Own properties of Folks-0.7.Folks.Debug

    colourEnabled: boolean
    debugOutputEnabled: boolean

    // Owm methods of Folks-0.7.Folks.Debug

    emitPrintStatus(): void
    indent(): void
    unindent(): void
    getColourEnabled(): boolean
    setColourEnabled(value: boolean): void
    getDebugOutputEnabled(): boolean
    setDebugOutputEnabled(value: boolean): void

    // Own signals of Folks-0.7.Folks.Debug

    connect(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    on(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    once(sigName: "print-status", callback: Debug.PrintStatusSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "print-status", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.Debug

    connect(sigName: "notify::colour-enabled", callback: any): number
    on(sigName: "notify::colour-enabled", callback: any): number
    once(sigName: "notify::colour-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::colour-enabled", ...args: any[]): void
    connect(sigName: "notify::debug-output-enabled", callback: any): number
    on(sigName: "notify::debug-output-enabled", callback: any): number
    once(sigName: "notify::debug-output-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::debug-output-enabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Debug extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Debug

    static name: string

    // Constructors of Folks-0.7.Folks.Debug

    constructor(config?: Debug.ConstructorProperties) 
    _init(config?: Debug.ConstructorProperties): void
    static dup(): Debug
    static dupWithFlags(debugFlags: string | null, colourEnabled: boolean): Debug
}

export module EmailFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface EmailFieldDetails {

    // Class property signals of Folks-0.7.Folks.EmailFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EmailFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.EmailFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.EmailFieldDetails

    constructor(config?: EmailFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null) 
    static new(value: string, parameters: Gee.MultiMap | null): EmailFieldDetails
    _init(config?: EmailFieldDetails.ConstructorProperties): void
}

export module ExtendedFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface ExtendedFieldDetails {

    // Class property signals of Folks-0.7.Folks.ExtendedFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExtendedFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.ExtendedFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.ExtendedFieldDetails

    constructor(config?: ExtendedFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null) 
    static new(value: string, parameters: Gee.MultiMap | null): ExtendedFieldDetails
    _init(config?: ExtendedFieldDetails.ConstructorProperties): void
}

export module ImFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface ImFieldDetails {

    // Class property signals of Folks-0.7.Folks.ImFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ImFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.ImFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.ImFieldDetails

    constructor(config?: ImFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null) 
    static new(value: string, parameters: Gee.MultiMap | null): ImFieldDetails
    _init(config?: ImFieldDetails.ConstructorProperties): void
}

export module IndividualAggregator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed`
     */
    export interface IndividualsChangedSignalCallback {
        (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    export interface IndividualsChangedDetailedSignalCallback {
        (changes: Gee.MultiMap): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.IndividualAggregator

        backendStore?: BackendStore | null
        individuals?: Gee.Map | null
        user?: Individual | null
    }

}

export interface IndividualAggregator {

    // Own properties of Folks-0.7.Folks.IndividualAggregator

    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    readonly primaryStore: PersonaStore
    readonly backendStore: BackendStore
    individuals: Gee.Map
    user: Individual

    // Owm methods of Folks-0.7.Folks.IndividualAggregator

    prepare(callback: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    getPotentialMatches(matchee: Individual, minThreshold: MatchResult): Gee.Map
    getAllPotentialMatches(minThreshold: MatchResult): Gee.Map
    addPersonaFromDetails(parent: Individual | null, personaStore: PersonaStore, details: GLib.HashTable, callback: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    removeIndividual(individual: Individual, callback: Gio.AsyncReadyCallback | null): void
    removeIndividualFinish(res: Gio.AsyncResult): void
    removePersona(persona: Persona, callback: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    linkPersonas(personas: Gee.Set, callback: Gio.AsyncReadyCallback | null): void
    linkPersonasFinish(res: Gio.AsyncResult): void
    unlinkIndividual(individual: Individual, callback: Gio.AsyncReadyCallback | null): void
    unlinkIndividualFinish(res: Gio.AsyncResult): void
    ensureIndividualPropertyWriteable(individual: Individual, propertyName: string, callback: Gio.AsyncReadyCallback | null): void
    ensureIndividualPropertyWriteableFinish(res: Gio.AsyncResult): Persona
    lookUpIndividual(id: string, callback: Gio.AsyncReadyCallback | null): void
    lookUpIndividualFinish(res: Gio.AsyncResult): Individual | null
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getPrimaryStore(): PersonaStore | null
    getBackendStore(): BackendStore
    getIndividuals(): Gee.Map
    getUser(): Individual | null

    // Own signals of Folks-0.7.Folks.IndividualAggregator

    connect(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    on(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    once(sigName: "individuals-changed", callback: IndividualAggregator.IndividualsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "individuals-changed", removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    on(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    once(sigName: "individuals-changed-detailed", callback: IndividualAggregator.IndividualsChangedDetailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "individuals-changed-detailed", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.IndividualAggregator

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
    connect(sigName: "notify::primary-store", callback: any): number
    on(sigName: "notify::primary-store", callback: any): number
    once(sigName: "notify::primary-store", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-store", ...args: any[]): void
    connect(sigName: "notify::backend-store", callback: any): number
    on(sigName: "notify::backend-store", callback: any): number
    once(sigName: "notify::backend-store", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backend-store", ...args: any[]): void
    connect(sigName: "notify::individuals", callback: any): number
    on(sigName: "notify::individuals", callback: any): number
    once(sigName: "notify::individuals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::individuals", ...args: any[]): void
    connect(sigName: "notify::user", callback: any): number
    on(sigName: "notify::user", callback: any): number
    once(sigName: "notify::user", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IndividualAggregator extends GObject.Object {

    // Own properties of Folks-0.7.Folks.IndividualAggregator

    static name: string

    // Constructors of Folks-0.7.Folks.IndividualAggregator

    constructor(config?: IndividualAggregator.ConstructorProperties) 
    constructor() 
    static new(): IndividualAggregator
    static withBackendStore(store: BackendStore): IndividualAggregator
    _init(config?: IndividualAggregator.ConstructorProperties): void
    static dup(): IndividualAggregator
    static dupWithBackendStore(store: BackendStore): IndividualAggregator | null
}

export module Individual {

    // Signal callback interfaces

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (replacementIndividual: Individual | null): void
    }

    /**
     * Signal callback interface for `personas-changed`
     */
    export interface PersonasChangedSignalCallback {
        (added: Gee.Set, removed: Gee.Set): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends AliasDetails.ConstructorProperties, AvatarDetails.ConstructorProperties, BirthdayDetails.ConstructorProperties, EmailDetails.ConstructorProperties, ExtendedInfo.ConstructorProperties, FavouriteDetails.ConstructorProperties, GenderDetails.ConstructorProperties, GroupDetails.ConstructorProperties, ImDetails.ConstructorProperties, InteractionDetails.ConstructorProperties, LocalIdDetails.ConstructorProperties, LocationDetails.ConstructorProperties, NameDetails.ConstructorProperties, NoteDetails.ConstructorProperties, PresenceDetails.ConstructorProperties, PhoneDetails.ConstructorProperties, PostalAddressDetails.ConstructorProperties, RoleDetails.ConstructorProperties, UrlDetails.ConstructorProperties, WebServiceDetails.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Individual

        trustLevel?: TrustLevel | null
        isUser?: boolean | null
        id?: string | null
        personas?: Gee.Set | null
    }

}

export interface Individual extends AliasDetails, AvatarDetails, BirthdayDetails, EmailDetails, ExtendedInfo, FavouriteDetails, GenderDetails, GroupDetails, ImDetails, InteractionDetails, LocalIdDetails, LocationDetails, NameDetails, NoteDetails, PresenceDetails, PhoneDetails, PostalAddressDetails, RoleDetails, UrlDetails, WebServiceDetails {

    // Own properties of Folks-0.7.Folks.Individual

    trustLevel: TrustLevel
    isUser: boolean
    id: string
    readonly displayName: string
    personas: Gee.Set

    // Owm methods of Folks-0.7.Folks.Individual

    hasAntiLinkWithPersona(p: Persona): boolean
    hasAntiLinkWithIndividual(i: Individual): boolean
    getTrustLevel(): TrustLevel
    getIsUser(): boolean
    getId(): string
    getDisplayName(): string
    getPersonas(): Gee.Set
    setPersonas(value: Gee.Set): void

    // Own signals of Folks-0.7.Folks.Individual

    connect(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    on(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    once(sigName: "removed", callback: Individual.RemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "removed", ...args: any[]): void
    connect(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    on(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    once(sigName: "personas-changed", callback: Individual.PersonasChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "personas-changed", removed: Gee.Set, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.Individual

    connect(sigName: "notify::trust-level", callback: any): number
    on(sigName: "notify::trust-level", callback: any): number
    once(sigName: "notify::trust-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::trust-level", ...args: any[]): void
    connect(sigName: "notify::is-user", callback: any): number
    on(sigName: "notify::is-user", callback: any): number
    once(sigName: "notify::is-user", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-user", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::personas", callback: any): number
    on(sigName: "notify::personas", callback: any): number
    once(sigName: "notify::personas", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::personas", ...args: any[]): void
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
    connect(sigName: "notify::phone-numbers", callback: any): number
    on(sigName: "notify::phone-numbers", callback: any): number
    once(sigName: "notify::phone-numbers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::phone-numbers", ...args: any[]): void
    connect(sigName: "notify::postal-addresses", callback: any): number
    on(sigName: "notify::postal-addresses", callback: any): number
    once(sigName: "notify::postal-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::postal-addresses", ...args: any[]): void
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

export class Individual extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Individual

    static name: string

    // Constructors of Folks-0.7.Folks.Individual

    constructor(config?: Individual.ConstructorProperties) 
    constructor(personas: Gee.Set | null) 
    static new(personas: Gee.Set | null): Individual
    _init(config?: Individual.ConstructorProperties): void
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Location {

    // Own fields of Folks-0.7.Folks.Location

    latitude: number
    longitude: number

    // Owm methods of Folks-0.7.Folks.Location

    equal(other: Location): boolean
    equalCoordinates(latitude: number, longitude: number): boolean

    // Class property signals of Folks-0.7.Folks.Location

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Location extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Location

    static name: string

    // Constructors of Folks-0.7.Folks.Location

    constructor(config?: Location.ConstructorProperties) 
    constructor(latitude: number, longitude: number) 
    static new(latitude: number, longitude: number): Location
    _init(config?: Location.ConstructorProperties): void
}

export module StructuredName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.StructuredName

        familyName?: string | null
        givenName?: string | null
        additionalNames?: string | null
        prefixes?: string | null
        suffixes?: string | null
    }

}

export interface StructuredName {

    // Own properties of Folks-0.7.Folks.StructuredName

    familyName: string
    givenName: string
    additionalNames: string
    prefixes: string
    suffixes: string

    // Owm methods of Folks-0.7.Folks.StructuredName

    isEmpty(): boolean
    equal(other: StructuredName): boolean
    toString(): string
    toStringWithFormat(nameFmt: string): string
    getFamilyName(): string
    setFamilyName(value: string): void
    getGivenName(): string
    setGivenName(value: string): void
    getAdditionalNames(): string
    setAdditionalNames(value: string): void
    getPrefixes(): string
    setPrefixes(value: string): void
    getSuffixes(): string
    setSuffixes(value: string): void

    // Class property signals of Folks-0.7.Folks.StructuredName

    connect(sigName: "notify::family-name", callback: any): number
    on(sigName: "notify::family-name", callback: any): number
    once(sigName: "notify::family-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: any): number
    on(sigName: "notify::given-name", callback: any): number
    once(sigName: "notify::given-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::additional-names", callback: any): number
    on(sigName: "notify::additional-names", callback: any): number
    once(sigName: "notify::additional-names", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::additional-names", ...args: any[]): void
    connect(sigName: "notify::prefixes", callback: any): number
    on(sigName: "notify::prefixes", callback: any): number
    once(sigName: "notify::prefixes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefixes", ...args: any[]): void
    connect(sigName: "notify::suffixes", callback: any): number
    on(sigName: "notify::suffixes", callback: any): number
    once(sigName: "notify::suffixes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::suffixes", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StructuredName extends GObject.Object {

    // Own properties of Folks-0.7.Folks.StructuredName

    static name: string

    // Constructors of Folks-0.7.Folks.StructuredName

    constructor(config?: StructuredName.ConstructorProperties) 
    constructor(familyName: string | null, givenName: string | null, additionalNames: string | null, prefixes: string | null, suffixes: string | null) 
    static new(familyName: string | null, givenName: string | null, additionalNames: string | null, prefixes: string | null, suffixes: string | null): StructuredName
    static simple(familyName: string | null, givenName: string | null): StructuredName
    _init(config?: StructuredName.ConstructorProperties): void
}

export module NoteFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.NoteFieldDetails

        uid?: string | null
    }

}

export interface NoteFieldDetails {

    // Own properties of Folks-0.7.Folks.NoteFieldDetails

    uid: string

    // Owm methods of Folks-0.7.Folks.NoteFieldDetails

    getUid(): string
    setUid(value: string): void

    // Class property signals of Folks-0.7.Folks.NoteFieldDetails

    connect(sigName: "notify::uid", callback: any): number
    on(sigName: "notify::uid", callback: any): number
    once(sigName: "notify::uid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NoteFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.NoteFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.NoteFieldDetails

    constructor(config?: NoteFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null, uid: string | null) 
    static new(value: string, parameters: Gee.MultiMap | null, uid: string | null): NoteFieldDetails
    _init(config?: NoteFieldDetails.ConstructorProperties): void
}

export module ObjectCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.ObjectCache

        tType?: GObject.GType | null
        tDupFunc?: GObject.BoxedCopyFunc | null
        tDestroyFunc?: GLib.DestroyNotify | null
        typeId?: string | null
        id?: string | null
    }

}

export interface ObjectCache {

    // Own properties of Folks-0.7.Folks.ObjectCache

    readonly tType: GObject.GType
    readonly tDupFunc: GObject.BoxedCopyFunc
    readonly tDestroyFunc: GLib.DestroyNotify
    readonly typeId: string
    readonly id: string

    // Owm methods of Folks-0.7.Folks.ObjectCache

    // Has conflict: getSerialisedObjectType(objectVersion: number): GLib.VariantType | null
    // Has conflict: getSerialisedObjectVersion(): number
    // Has conflict: serialiseObject(object: object | null): GLib.Variant
    // Has conflict: deserialiseObject(variant: GLib.Variant, objectVersion: number): object | null
    loadObjects(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    loadObjectsFinish(res: Gio.AsyncResult): Gee.Set | null
    storeObjects(objects: Gee.Set, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    storeObjectsFinish(res: Gio.AsyncResult): void
    clearCache(callback: Gio.AsyncReadyCallback | null): void
    clearCacheFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getId(): string

    // Own virtual methods of Folks-0.7.Folks.ObjectCache

    getSerialisedObjectType(objectVersion: number): GLib.VariantType | null
    getSerialisedObjectVersion(): number
    serialiseObject(object: object | null): GLib.Variant
    deserialiseObject(variant: GLib.Variant, objectVersion: number): object | null

    // Class property signals of Folks-0.7.Folks.ObjectCache

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::type-id", callback: any): number
    on(sigName: "notify::type-id", callback: any): number
    once(sigName: "notify::type-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-id", ...args: any[]): void
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

export class ObjectCache extends GObject.Object {

    // Own properties of Folks-0.7.Folks.ObjectCache

    static name: string

    // Constructors of Folks-0.7.Folks.ObjectCache

    constructor(config?: ObjectCache.ConstructorProperties) 
    _init(config?: ObjectCache.ConstructorProperties): void
}

export module PersonaStore {

    // Signal callback interfaces

    /**
     * Signal callback interface for `personas-changed`
     */
    export interface PersonasChangedSignalCallback {
        (added: Gee.Set, removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PersonaStore

        displayName?: string | null
        id?: string | null
        isWriteable?: boolean | null
        trustLevel?: PersonaStoreTrust | null
        isPrimaryStore?: boolean | null
        isUserSetDefault?: boolean | null
    }

}

export interface PersonaStore {

    // Own properties of Folks-0.7.Folks.PersonaStore

    readonly typeId: string
    readonly displayName: string
    readonly id: string
    readonly personas: Gee.Map
    readonly canAddPersonas: MaybeBool
    readonly canAliasPersonas: MaybeBool
    readonly canGroupPersonas: MaybeBool
    readonly canRemovePersonas: MaybeBool
    readonly isPrepared: boolean
    readonly isQuiescent: boolean
    isWriteable: boolean
    trustLevel: PersonaStoreTrust
    readonly alwaysWriteableProperties: string[]
    isPrimaryStore: boolean
    isUserSetDefault: boolean

    // Owm methods of Folks-0.7.Folks.PersonaStore

    emitPersonasChanged(added: Gee.Set | null, removed: Gee.Set | null, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason): void
    // Has conflict: prepare(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: prepareFinish(res: Gio.AsyncResult): void
    // Has conflict: flush(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: flushFinish(res: Gio.AsyncResult): void
    // Has conflict: addPersonaFromDetails(details: GLib.HashTable, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    // Has conflict: removePersona(persona: Persona, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: removePersonaFinish(res: Gio.AsyncResult): void
    // Has conflict: getTypeId(): string
    getDisplayName(): string
    getId(): string
    // Has conflict: getPersonas(): Gee.Map
    // Has conflict: getCanAddPersonas(): MaybeBool
    // Has conflict: getCanAliasPersonas(): MaybeBool
    // Has conflict: getCanGroupPersonas(): MaybeBool
    // Has conflict: getCanRemovePersonas(): MaybeBool
    // Has conflict: getIsPrepared(): boolean
    // Has conflict: getIsQuiescent(): boolean
    getIsWriteable(): boolean
    setIsWriteable(value: boolean): void
    getTrustLevel(): PersonaStoreTrust
    setTrustLevel(value: PersonaStoreTrust): void
    // Has conflict: getAlwaysWriteableProperties(): string[]
    getIsPrimaryStore(): boolean
    getIsUserSetDefault(): boolean

    // Own virtual methods of Folks-0.7.Folks.PersonaStore

    prepare(callback: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    flush(callback: Gio.AsyncReadyCallback | null): void
    flushFinish(res: Gio.AsyncResult): void
    addPersonaFromDetails(details: GLib.HashTable, callback: Gio.AsyncReadyCallback | null): void
    addPersonaFromDetailsFinish(res: Gio.AsyncResult): Persona | null
    removePersona(persona: Persona, callback: Gio.AsyncReadyCallback | null): void
    removePersonaFinish(res: Gio.AsyncResult): void
    getTypeId(): string
    getPersonas(): Gee.Map
    getCanAddPersonas(): MaybeBool
    getCanAliasPersonas(): MaybeBool
    getCanGroupPersonas(): MaybeBool
    getCanRemovePersonas(): MaybeBool
    getIsPrepared(): boolean
    getIsQuiescent(): boolean
    getAlwaysWriteableProperties(): string[]

    // Own signals of Folks-0.7.Folks.PersonaStore

    connect(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    on(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    once(sigName: "personas-changed", callback: PersonaStore.PersonasChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "personas-changed", removed: Gee.Set, message: string | null, actor: Persona | null, reason: GroupDetailsChangeReason, ...args: any[]): void
    connect(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    on(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    once(sigName: "removed", callback: PersonaStore.RemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.PersonaStore

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

export class PersonaStore extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PersonaStore

    static name: string

    // Constructors of Folks-0.7.Folks.PersonaStore

    constructor(config?: PersonaStore.ConstructorProperties) 
    _init(config?: PersonaStore.ConstructorProperties): void
    static detailKey(detail: PersonaDetail): string | null
}

export module Persona {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Persona

        iid?: string | null
        uid?: string | null
        displayId?: string | null
        isUser?: boolean | null
        store?: PersonaStore | null
        individual?: Individual | null
    }

}

export interface Persona {

    // Own properties of Folks-0.7.Folks.Persona

    readonly iid: string
    readonly uid: string
    readonly displayId: string
    readonly isUser: boolean
    readonly store: PersonaStore
    individual: Individual
    readonly linkableProperties: string[]
    readonly writeableProperties: string[]

    // Owm methods of Folks-0.7.Folks.Persona

    // Has conflict: linkablePropertyToLinks(propName: string, callback: any): void
    getIid(): string
    getUid(): string
    getDisplayId(): string
    getIsUser(): boolean
    getStore(): PersonaStore
    getIndividual(): Individual | null
    // Has conflict: getLinkableProperties(): string[]
    // Has conflict: getWriteableProperties(): string[]

    // Own virtual methods of Folks-0.7.Folks.Persona

    linkablePropertyToLinks(propName: string, callback: any): void
    getLinkableProperties(): string[]
    getWriteableProperties(): string[]

    // Class property signals of Folks-0.7.Folks.Persona

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

export class Persona extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Persona

    static name: string

    // Constructors of Folks-0.7.Folks.Persona

    constructor(config?: Persona.ConstructorProperties) 
    _init(config?: Persona.ConstructorProperties): void
    static buildUid(backendName: string, personaStoreId: string, personaId: string): string
    static splitUid(uid: string): [ /* backendName */ string, /* personaStoreId */ string, /* personaId */ string ]
}

export module PhoneFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface PhoneFieldDetails {

    // Owm methods of Folks-0.7.Folks.PhoneFieldDetails

    getNormalised(): string

    // Class property signals of Folks-0.7.Folks.PhoneFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PhoneFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.PhoneFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.PhoneFieldDetails

    constructor(config?: PhoneFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null) 
    static new(value: string, parameters: Gee.MultiMap | null): PhoneFieldDetails
    _init(config?: PhoneFieldDetails.ConstructorProperties): void
}

export module PostalAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.PostalAddress

        poBox?: string | null
        extension?: string | null
        street?: string | null
        locality?: string | null
        region?: string | null
        postalCode?: string | null
        country?: string | null
        addressFormat?: string | null
        uid?: string | null
    }

}

export interface PostalAddress {

    // Own properties of Folks-0.7.Folks.PostalAddress

    poBox: string
    extension: string
    street: string
    locality: string
    region: string
    postalCode: string
    country: string
    addressFormat: string
    uid: string

    // Owm methods of Folks-0.7.Folks.PostalAddress

    isEmpty(): boolean
    equal(with_: PostalAddress): boolean
    toString(): string
    getPoBox(): string
    setPoBox(value: string): void
    getExtension(): string
    setExtension(value: string): void
    getStreet(): string
    setStreet(value: string): void
    getLocality(): string
    setLocality(value: string): void
    getRegion(): string
    setRegion(value: string): void
    getPostalCode(): string
    setPostalCode(value: string): void
    getCountry(): string
    setCountry(value: string): void
    getAddressFormat(): string
    setAddressFormat(value: string): void
    getUid(): string
    setUid(value: string): void

    // Class property signals of Folks-0.7.Folks.PostalAddress

    connect(sigName: "notify::po-box", callback: any): number
    on(sigName: "notify::po-box", callback: any): number
    once(sigName: "notify::po-box", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::po-box", ...args: any[]): void
    connect(sigName: "notify::extension", callback: any): number
    on(sigName: "notify::extension", callback: any): number
    once(sigName: "notify::extension", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extension", ...args: any[]): void
    connect(sigName: "notify::street", callback: any): number
    on(sigName: "notify::street", callback: any): number
    once(sigName: "notify::street", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::street", ...args: any[]): void
    connect(sigName: "notify::locality", callback: any): number
    on(sigName: "notify::locality", callback: any): number
    once(sigName: "notify::locality", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locality", ...args: any[]): void
    connect(sigName: "notify::region", callback: any): number
    on(sigName: "notify::region", callback: any): number
    once(sigName: "notify::region", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::region", ...args: any[]): void
    connect(sigName: "notify::postal-code", callback: any): number
    on(sigName: "notify::postal-code", callback: any): number
    once(sigName: "notify::postal-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::postal-code", ...args: any[]): void
    connect(sigName: "notify::country", callback: any): number
    on(sigName: "notify::country", callback: any): number
    once(sigName: "notify::country", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::address-format", callback: any): number
    on(sigName: "notify::address-format", callback: any): number
    once(sigName: "notify::address-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-format", ...args: any[]): void
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

export class PostalAddress extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PostalAddress

    static name: string

    // Constructors of Folks-0.7.Folks.PostalAddress

    constructor(config?: PostalAddress.ConstructorProperties) 
    constructor(poBox: string | null, extension: string | null, street: string | null, locality: string | null, region: string | null, postalCode: string | null, country: string | null, addressFormat: string | null, uid: string | null) 
    static new(poBox: string | null, extension: string | null, street: string | null, locality: string | null, region: string | null, postalCode: string | null, country: string | null, addressFormat: string | null, uid: string | null): PostalAddress
    _init(config?: PostalAddress.ConstructorProperties): void
}

export module PostalAddressFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface PostalAddressFieldDetails {

    // Class property signals of Folks-0.7.Folks.PostalAddressFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PostalAddressFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.PostalAddressFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.PostalAddressFieldDetails

    constructor(config?: PostalAddressFieldDetails.ConstructorProperties) 
    constructor(value: PostalAddress, parameters: Gee.MultiMap | null) 
    static new(value: PostalAddress, parameters: Gee.MultiMap | null): PostalAddressFieldDetails
    _init(config?: PostalAddressFieldDetails.ConstructorProperties): void
}

export module PotentialMatch {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PotentialMatch {

    // Own fields of Folks-0.7.Folks.PotentialMatch

    folksPotentialMatchKnownEmailAliases: Gee.Set

    // Owm methods of Folks-0.7.Folks.PotentialMatch

    potentialMatch(a: Individual, b: Individual): MatchResult

    // Class property signals of Folks-0.7.Folks.PotentialMatch

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PotentialMatch extends GObject.Object {

    // Own properties of Folks-0.7.Folks.PotentialMatch

    static name: string

    // Constructors of Folks-0.7.Folks.PotentialMatch

    constructor(config?: PotentialMatch.ConstructorProperties) 
    constructor() 
    static new(): PotentialMatch
    _init(config?: PotentialMatch.ConstructorProperties): void
}

export module Query {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Query

        matchFields?: string[] | null
    }

}

export interface Query {

    // Own properties of Folks-0.7.Folks.Query

    readonly matchFields: string[]

    // Owm methods of Folks-0.7.Folks.Query

    // Has conflict: isMatch(individual: Individual): number
    // Has conflict: getMatchFields(): string[]

    // Own virtual methods of Folks-0.7.Folks.Query

    isMatch(individual: Individual): number
    getMatchFields(): string[]

    // Class property signals of Folks-0.7.Folks.Query

    connect(sigName: "notify::match-fields", callback: any): number
    on(sigName: "notify::match-fields", callback: any): number
    once(sigName: "notify::match-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::match-fields", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Query extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Query

    static name: string

    // Constructors of Folks-0.7.Folks.Query

    constructor(config?: Query.ConstructorProperties) 
    _init(config?: Query.ConstructorProperties): void
}

export module Role {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.Role

        organisationName?: string | null
        title?: string | null
        role?: string | null
        uid?: string | null
    }

}

export interface Role {

    // Own properties of Folks-0.7.Folks.Role

    organisationName: string
    title: string
    role: string
    uid: string

    // Owm methods of Folks-0.7.Folks.Role

    isEmpty(): boolean
    toString(): string
    getOrganisationName(): string
    setOrganisationName(value: string): void
    getTitle(): string
    setTitle(value: string): void
    getRole(): string
    setRole(value: string): void
    getUid(): string
    setUid(value: string): void

    // Class property signals of Folks-0.7.Folks.Role

    connect(sigName: "notify::organisation-name", callback: any): number
    on(sigName: "notify::organisation-name", callback: any): number
    once(sigName: "notify::organisation-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::organisation-name", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
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

export class Role extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Role

    static name: string

    // Constructors of Folks-0.7.Folks.Role

    constructor(config?: Role.ConstructorProperties) 
    constructor(title: string | null, organisationName: string | null, uid: string | null) 
    static new(title: string | null, organisationName: string | null, uid: string | null): Role
    _init(config?: Role.ConstructorProperties): void
    static equal(a: Role, b: Role): boolean
    static hash(r: Role): number
}

export module RoleFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface RoleFieldDetails {

    // Class property signals of Folks-0.7.Folks.RoleFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RoleFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.RoleFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.RoleFieldDetails

    constructor(config?: RoleFieldDetails.ConstructorProperties) 
    constructor(value: Role, parameters: Gee.MultiMap | null) 
    static new(value: Role, parameters: Gee.MultiMap | null): RoleFieldDetails
    _init(config?: RoleFieldDetails.ConstructorProperties): void
}

export module SearchView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `individuals-changed-detailed`
     */
    export interface IndividualsChangedDetailedSignalCallback {
        (added: Gee.SortedSet, removed: Gee.SortedSet): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.SearchView

        query?: Query | null
    }

}

export interface SearchView {

    // Own properties of Folks-0.7.Folks.SearchView

    readonly aggregator: IndividualAggregator
    query: Query
    readonly individuals: Gee.SortedSet
    readonly isPrepared: boolean
    readonly isQuiescent: boolean

    // Owm methods of Folks-0.7.Folks.SearchView

    prepare(callback: Gio.AsyncReadyCallback | null): void
    prepareFinish(res: Gio.AsyncResult): void
    unprepare(callback: Gio.AsyncReadyCallback | null): void
    unprepareFinish(res: Gio.AsyncResult): void
    refresh(callback: Gio.AsyncReadyCallback | null): void
    refreshFinish(res: Gio.AsyncResult): void
    getAggregator(): IndividualAggregator
    getQuery(): Query
    setQuery(value: Query): void
    getIndividuals(): Gee.SortedSet
    getIsPrepared(): boolean
    getIsQuiescent(): boolean

    // Own signals of Folks-0.7.Folks.SearchView

    connect(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    on(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    once(sigName: "individuals-changed-detailed", callback: SearchView.IndividualsChangedDetailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "individuals-changed-detailed", removed: Gee.SortedSet, ...args: any[]): void

    // Class property signals of Folks-0.7.Folks.SearchView

    connect(sigName: "notify::aggregator", callback: any): number
    on(sigName: "notify::aggregator", callback: any): number
    once(sigName: "notify::aggregator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::aggregator", ...args: any[]): void
    connect(sigName: "notify::query", callback: any): number
    on(sigName: "notify::query", callback: any): number
    once(sigName: "notify::query", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: "notify::individuals", callback: any): number
    on(sigName: "notify::individuals", callback: any): number
    once(sigName: "notify::individuals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::individuals", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SearchView extends GObject.Object {

    // Own properties of Folks-0.7.Folks.SearchView

    static name: string

    // Constructors of Folks-0.7.Folks.SearchView

    constructor(config?: SearchView.ConstructorProperties) 
    constructor(aggregator: IndividualAggregator, query: Query) 
    static new(aggregator: IndividualAggregator, query: Query): SearchView
    _init(config?: SearchView.ConstructorProperties): void
}

export module SimpleQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of Folks-0.7.Folks.SimpleQuery

        queryString?: string | null
        queryLocale?: string | null
    }

}

export interface SimpleQuery {

    // Own properties of Folks-0.7.Folks.SimpleQuery

    queryString: string
    queryLocale: string

    // Owm methods of Folks-0.7.Folks.SimpleQuery

    getQueryString(): string
    setQueryString(value: string): void
    getQueryLocale(): string | null
    setQueryLocale(value: string | null): void

    // Class property signals of Folks-0.7.Folks.SimpleQuery

    connect(sigName: "notify::query-string", callback: any): number
    on(sigName: "notify::query-string", callback: any): number
    once(sigName: "notify::query-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::query-string", ...args: any[]): void
    connect(sigName: "notify::query-locale", callback: any): number
    on(sigName: "notify::query-locale", callback: any): number
    once(sigName: "notify::query-locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::query-locale", ...args: any[]): void
    connect(sigName: "notify::match-fields", callback: any): number
    on(sigName: "notify::match-fields", callback: any): number
    once(sigName: "notify::match-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::match-fields", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SimpleQuery extends Query {

    // Own properties of Folks-0.7.Folks.SimpleQuery

    static name: string

    // Constructors of Folks-0.7.Folks.SimpleQuery

    constructor(config?: SimpleQuery.ConstructorProperties) 
    constructor(queryString: string, matchFields: string[]) 
    static new(queryString: string, matchFields: string[]): SimpleQuery
    _init(config?: SimpleQuery.ConstructorProperties): void
}

export module UrlFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface UrlFieldDetails {

    // Class property signals of Folks-0.7.Folks.UrlFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class UrlFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.UrlFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.UrlFieldDetails

    constructor(config?: UrlFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null) 
    static new(value: string, parameters: Gee.MultiMap | null): UrlFieldDetails
    _init(config?: UrlFieldDetails.ConstructorProperties): void
}

export module Utils {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Utils {

    // Class property signals of Folks-0.7.Folks.Utils

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Utils extends GObject.Object {

    // Own properties of Folks-0.7.Folks.Utils

    static name: string

    // Constructors of Folks-0.7.Folks.Utils

    constructor(config?: Utils.ConstructorProperties) 
    constructor() 
    static new(): Utils
    _init(config?: Utils.ConstructorProperties): void
    static multiMapStrStrEqual(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static multiMapStrAfdEqual(a: Gee.MultiMap, b: Gee.MultiMap): boolean
    static setAfdEqual(a: Gee.Set, b: Gee.Set): boolean
    static setStringAfdEqual(a: Gee.Set, b: Gee.Set): boolean
}

export module WebServiceFieldDetails {

    // Constructor properties interface

    export interface ConstructorProperties extends AbstractFieldDetails.ConstructorProperties {
    }

}

export interface WebServiceFieldDetails {

    // Class property signals of Folks-0.7.Folks.WebServiceFieldDetails

    connect(sigName: "notify::t-type", callback: any): number
    on(sigName: "notify::t-type", callback: any): number
    once(sigName: "notify::t-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-type", ...args: any[]): void
    connect(sigName: "notify::t-dup-func", callback: any): number
    on(sigName: "notify::t-dup-func", callback: any): number
    once(sigName: "notify::t-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-dup-func", ...args: any[]): void
    connect(sigName: "notify::t-destroy-func", callback: any): number
    on(sigName: "notify::t-destroy-func", callback: any): number
    once(sigName: "notify::t-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::t-destroy-func", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::value-type", callback: any): number
    on(sigName: "notify::value-type", callback: any): number
    once(sigName: "notify::value-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-type", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::parameters", callback: any): number
    on(sigName: "notify::parameters", callback: any): number
    once(sigName: "notify::parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parameters", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebServiceFieldDetails extends AbstractFieldDetails {

    // Own properties of Folks-0.7.Folks.WebServiceFieldDetails

    static name: string

    // Constructors of Folks-0.7.Folks.WebServiceFieldDetails

    constructor(config?: WebServiceFieldDetails.ConstructorProperties) 
    constructor(value: string, parameters: Gee.MultiMap | null) 
    static new(value: string, parameters: Gee.MultiMap | null): WebServiceFieldDetails
    _init(config?: WebServiceFieldDetails.ConstructorProperties): void
}

export interface AbstractFieldDetailsClass {

    // Own fields of Folks-0.7.Folks.AbstractFieldDetailsClass

    equal: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    parametersEqual: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    valuesEqual: (self: AbstractFieldDetails, that: AbstractFieldDetails) => boolean
    hash: (self: AbstractFieldDetails) => number
}

export abstract class AbstractFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetailsClass

    static name: string
}

export interface AbstractFieldDetailsPrivate {
}

export class AbstractFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.AbstractFieldDetailsPrivate

    static name: string
}

export interface AvatarCacheClass {
}

export abstract class AvatarCacheClass {

    // Own properties of Folks-0.7.Folks.AvatarCacheClass

    static name: string
}

export interface AvatarCachePrivate {
}

export class AvatarCachePrivate {

    // Own properties of Folks-0.7.Folks.AvatarCachePrivate

    static name: string
}

export interface BackendStoreClass {
}

export abstract class BackendStoreClass {

    // Own properties of Folks-0.7.Folks.BackendStoreClass

    static name: string
}

export interface BackendStorePrivate {
}

export class BackendStorePrivate {

    // Own properties of Folks-0.7.Folks.BackendStorePrivate

    static name: string
}

export interface BackendClass {

    // Own fields of Folks-0.7.Folks.BackendClass

    disablePersonaStore: (self: Backend, store: PersonaStore) => void
    enablePersonaStore: (self: Backend, store: PersonaStore) => void
    setPersonaStores: (self: Backend, storeids: Gee.Set | null) => void
    prepare: (self: Backend, callback: Gio.AsyncReadyCallback | null) => void
    prepareFinish: (self: Backend, res: Gio.AsyncResult) => void
    unprepare: (self: Backend, callback: Gio.AsyncReadyCallback | null) => void
    unprepareFinish: (self: Backend, res: Gio.AsyncResult) => void
}

export abstract class BackendClass {

    // Own properties of Folks-0.7.Folks.BackendClass

    static name: string
}

export interface BackendPrivate {
}

export class BackendPrivate {

    // Own properties of Folks-0.7.Folks.BackendPrivate

    static name: string
}

export interface DebugClass {
}

export abstract class DebugClass {

    // Own properties of Folks-0.7.Folks.DebugClass

    static name: string
}

export interface DebugPrivate {
}

export class DebugPrivate {

    // Own properties of Folks-0.7.Folks.DebugPrivate

    static name: string
}

export interface EmailFieldDetailsClass {
}

export abstract class EmailFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.EmailFieldDetailsClass

    static name: string
}

export interface EmailFieldDetailsPrivate {
}

export class EmailFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.EmailFieldDetailsPrivate

    static name: string
}

export interface ExtendedFieldDetailsClass {
}

export abstract class ExtendedFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.ExtendedFieldDetailsClass

    static name: string
}

export interface ExtendedFieldDetailsPrivate {
}

export class ExtendedFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.ExtendedFieldDetailsPrivate

    static name: string
}

export interface ImFieldDetailsClass {
}

export abstract class ImFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.ImFieldDetailsClass

    static name: string
}

export interface ImFieldDetailsPrivate {
}

export class ImFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.ImFieldDetailsPrivate

    static name: string
}

export interface IndividualAggregatorClass {
}

export abstract class IndividualAggregatorClass {

    // Own properties of Folks-0.7.Folks.IndividualAggregatorClass

    static name: string
}

export interface IndividualAggregatorPrivate {
}

export class IndividualAggregatorPrivate {

    // Own properties of Folks-0.7.Folks.IndividualAggregatorPrivate

    static name: string
}

export interface IndividualClass {
}

export abstract class IndividualClass {

    // Own properties of Folks-0.7.Folks.IndividualClass

    static name: string
}

export interface IndividualPrivate {
}

export class IndividualPrivate {

    // Own properties of Folks-0.7.Folks.IndividualPrivate

    static name: string
}

export interface LocationClass {
}

export abstract class LocationClass {

    // Own properties of Folks-0.7.Folks.LocationClass

    static name: string
}

export interface LocationPrivate {
}

export class LocationPrivate {

    // Own properties of Folks-0.7.Folks.LocationPrivate

    static name: string
}

export interface StructuredNameClass {
}

export abstract class StructuredNameClass {

    // Own properties of Folks-0.7.Folks.StructuredNameClass

    static name: string
}

export interface StructuredNamePrivate {
}

export class StructuredNamePrivate {

    // Own properties of Folks-0.7.Folks.StructuredNamePrivate

    static name: string
}

export interface NoteFieldDetailsClass {
}

export abstract class NoteFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.NoteFieldDetailsClass

    static name: string
}

export interface NoteFieldDetailsPrivate {
}

export class NoteFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.NoteFieldDetailsPrivate

    static name: string
}

export interface ObjectCacheClass {

    // Own fields of Folks-0.7.Folks.ObjectCacheClass

    getSerialisedObjectType: (self: ObjectCache, objectVersion: number) => GLib.VariantType | null
    getSerialisedObjectVersion: (self: ObjectCache) => number
    serialiseObject: (self: ObjectCache, object: object | null) => GLib.Variant
    deserialiseObject: (self: ObjectCache, variant: GLib.Variant, objectVersion: number) => object | null
}

export abstract class ObjectCacheClass {

    // Own properties of Folks-0.7.Folks.ObjectCacheClass

    static name: string
}

export interface ObjectCachePrivate {
}

export class ObjectCachePrivate {

    // Own properties of Folks-0.7.Folks.ObjectCachePrivate

    static name: string
}

export interface PersonaStoreClass {

    // Own fields of Folks-0.7.Folks.PersonaStoreClass

    prepare: (self: PersonaStore, callback: Gio.AsyncReadyCallback | null) => void
    prepareFinish: (self: PersonaStore, res: Gio.AsyncResult) => void
    flush: (self: PersonaStore, callback: Gio.AsyncReadyCallback | null) => void
    flushFinish: (self: PersonaStore, res: Gio.AsyncResult) => void
    addPersonaFromDetails: (self: PersonaStore, details: GLib.HashTable, callback: Gio.AsyncReadyCallback | null) => void
    addPersonaFromDetailsFinish: (self: PersonaStore, res: Gio.AsyncResult) => Persona | null
    removePersona: (self: PersonaStore, persona: Persona, callback: Gio.AsyncReadyCallback | null) => void
    removePersonaFinish: (self: PersonaStore, res: Gio.AsyncResult) => void
}

export abstract class PersonaStoreClass {

    // Own properties of Folks-0.7.Folks.PersonaStoreClass

    static name: string
}

export interface PersonaStorePrivate {
}

export class PersonaStorePrivate {

    // Own properties of Folks-0.7.Folks.PersonaStorePrivate

    static name: string
}

export interface PersonaClass {

    // Own fields of Folks-0.7.Folks.PersonaClass

    linkablePropertyToLinks: (self: Persona, propName: string, callback: any) => void
}

export abstract class PersonaClass {

    // Own properties of Folks-0.7.Folks.PersonaClass

    static name: string
}

export interface PersonaPrivate {
}

export class PersonaPrivate {

    // Own properties of Folks-0.7.Folks.PersonaPrivate

    static name: string
}

export interface PhoneFieldDetailsClass {
}

export abstract class PhoneFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.PhoneFieldDetailsClass

    static name: string
}

export interface PhoneFieldDetailsPrivate {
}

export class PhoneFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.PhoneFieldDetailsPrivate

    static name: string
}

export interface PostalAddressClass {
}

export abstract class PostalAddressClass {

    // Own properties of Folks-0.7.Folks.PostalAddressClass

    static name: string
}

export interface PostalAddressPrivate {
}

export class PostalAddressPrivate {

    // Own properties of Folks-0.7.Folks.PostalAddressPrivate

    static name: string
}

export interface PostalAddressFieldDetailsClass {
}

export abstract class PostalAddressFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.PostalAddressFieldDetailsClass

    static name: string
}

export interface PostalAddressFieldDetailsPrivate {
}

export class PostalAddressFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.PostalAddressFieldDetailsPrivate

    static name: string
}

export interface PotentialMatchClass {
}

export abstract class PotentialMatchClass {

    // Own properties of Folks-0.7.Folks.PotentialMatchClass

    static name: string
}

export interface PotentialMatchPrivate {
}

export class PotentialMatchPrivate {

    // Own properties of Folks-0.7.Folks.PotentialMatchPrivate

    static name: string
}

export interface QueryClass {

    // Own fields of Folks-0.7.Folks.QueryClass

    isMatch: (self: Query, individual: Individual) => number
}

export abstract class QueryClass {

    // Own properties of Folks-0.7.Folks.QueryClass

    static name: string
}

export interface QueryPrivate {
}

export class QueryPrivate {

    // Own properties of Folks-0.7.Folks.QueryPrivate

    static name: string
}

export interface RoleClass {
}

export abstract class RoleClass {

    // Own properties of Folks-0.7.Folks.RoleClass

    static name: string
}

export interface RolePrivate {
}

export class RolePrivate {

    // Own properties of Folks-0.7.Folks.RolePrivate

    static name: string
}

export interface RoleFieldDetailsClass {
}

export abstract class RoleFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.RoleFieldDetailsClass

    static name: string
}

export interface RoleFieldDetailsPrivate {
}

export class RoleFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.RoleFieldDetailsPrivate

    static name: string
}

export interface SearchViewClass {
}

export abstract class SearchViewClass {

    // Own properties of Folks-0.7.Folks.SearchViewClass

    static name: string
}

export interface SearchViewPrivate {
}

export class SearchViewPrivate {

    // Own properties of Folks-0.7.Folks.SearchViewPrivate

    static name: string
}

export interface SimpleQueryClass {
}

export abstract class SimpleQueryClass {

    // Own properties of Folks-0.7.Folks.SimpleQueryClass

    static name: string
}

export interface SimpleQueryPrivate {
}

export class SimpleQueryPrivate {

    // Own properties of Folks-0.7.Folks.SimpleQueryPrivate

    static name: string
}

export interface UrlFieldDetailsClass {
}

export abstract class UrlFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.UrlFieldDetailsClass

    static name: string
}

export interface UrlFieldDetailsPrivate {
}

export class UrlFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.UrlFieldDetailsPrivate

    static name: string
}

export interface UtilsClass {
}

export abstract class UtilsClass {

    // Own properties of Folks-0.7.Folks.UtilsClass

    static name: string
}

export interface UtilsPrivate {
}

export class UtilsPrivate {

    // Own properties of Folks-0.7.Folks.UtilsPrivate

    static name: string
}

export interface WebServiceFieldDetailsClass {
}

export abstract class WebServiceFieldDetailsClass {

    // Own properties of Folks-0.7.Folks.WebServiceFieldDetailsClass

    static name: string
}

export interface WebServiceFieldDetailsPrivate {
}

export class WebServiceFieldDetailsPrivate {

    // Own properties of Folks-0.7.Folks.WebServiceFieldDetailsPrivate

    static name: string
}

export interface AliasDetailsIface {

    // Own fields of Folks-0.7.Folks.AliasDetailsIface

    changeAlias: (self: AliasDetails, alias: string, callback: Gio.AsyncReadyCallback | null) => void
    changeAliasFinish: (self: AliasDetails, res: Gio.AsyncResult) => void
    getAlias: (self: AliasDetails) => string
    setAlias: (self: AliasDetails, value: string) => void
}

export abstract class AliasDetailsIface {

    // Own properties of Folks-0.7.Folks.AliasDetailsIface

    static name: string
}

export interface AntiLinkableIface {

    // Own fields of Folks-0.7.Folks.AntiLinkableIface

    changeAntiLinks: (self: AntiLinkable, antiLinks: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeAntiLinksFinish: (self: AntiLinkable, res: Gio.AsyncResult) => void
    getAntiLinks: (self: AntiLinkable) => Gee.Set
    setAntiLinks: (self: AntiLinkable, value: Gee.Set) => void
}

export abstract class AntiLinkableIface {

    // Own properties of Folks-0.7.Folks.AntiLinkableIface

    static name: string
}

export interface AvatarDetailsIface {

    // Own fields of Folks-0.7.Folks.AvatarDetailsIface

    changeAvatar: (self: AvatarDetails, avatar: Gio.LoadableIcon | null, callback: Gio.AsyncReadyCallback | null) => void
    changeAvatarFinish: (self: AvatarDetails, res: Gio.AsyncResult) => void
    getAvatar: (self: AvatarDetails) => Gio.LoadableIcon | null
    setAvatar: (self: AvatarDetails, value: Gio.LoadableIcon | null) => void
}

export abstract class AvatarDetailsIface {

    // Own properties of Folks-0.7.Folks.AvatarDetailsIface

    static name: string
}

export interface BirthdayDetailsIface {

    // Own fields of Folks-0.7.Folks.BirthdayDetailsIface

    changeBirthday: (self: BirthdayDetails, birthday: GLib.DateTime | null, callback: Gio.AsyncReadyCallback | null) => void
    changeBirthdayFinish: (self: BirthdayDetails, res: Gio.AsyncResult) => void
    changeCalendarEventId: (self: BirthdayDetails, eventId: string | null, callback: Gio.AsyncReadyCallback | null) => void
    changeCalendarEventIdFinish: (self: BirthdayDetails, res: Gio.AsyncResult) => void
    getBirthday: (self: BirthdayDetails) => GLib.DateTime | null
    setBirthday: (self: BirthdayDetails, value: GLib.DateTime | null) => void
    getCalendarEventId: (self: BirthdayDetails) => string | null
    setCalendarEventId: (self: BirthdayDetails, value: string | null) => void
}

export abstract class BirthdayDetailsIface {

    // Own properties of Folks-0.7.Folks.BirthdayDetailsIface

    static name: string
}

export interface EmailDetailsIface {

    // Own fields of Folks-0.7.Folks.EmailDetailsIface

    changeEmailAddresses: (self: EmailDetails, emailAddresses: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeEmailAddressesFinish: (self: EmailDetails, res: Gio.AsyncResult) => void
    getEmailAddresses: (self: EmailDetails) => Gee.Set
    setEmailAddresses: (self: EmailDetails, value: Gee.Set) => void
}

export abstract class EmailDetailsIface {

    // Own properties of Folks-0.7.Folks.EmailDetailsIface

    static name: string
}

export interface ExtendedInfoIface {

    // Own fields of Folks-0.7.Folks.ExtendedInfoIface

    getExtendedField: (self: ExtendedInfo, name: string) => ExtendedFieldDetails | null
    changeExtendedField: (self: ExtendedInfo, name: string, value: ExtendedFieldDetails, callback: Gio.AsyncReadyCallback | null) => void
    changeExtendedFieldFinish: (self: ExtendedInfo, res: Gio.AsyncResult) => void
    removeExtendedField: (self: ExtendedInfo, name: string, callback: Gio.AsyncReadyCallback | null) => void
    removeExtendedFieldFinish: (self: ExtendedInfo, res: Gio.AsyncResult) => void
}

export abstract class ExtendedInfoIface {

    // Own properties of Folks-0.7.Folks.ExtendedInfoIface

    static name: string
}

export interface FavouriteDetailsIface {

    // Own fields of Folks-0.7.Folks.FavouriteDetailsIface

    changeIsFavourite: (self: FavouriteDetails, isFavourite: boolean, callback: Gio.AsyncReadyCallback | null) => void
    changeIsFavouriteFinish: (self: FavouriteDetails, res: Gio.AsyncResult) => void
    getIsFavourite: (self: FavouriteDetails) => boolean
    setIsFavourite: (self: FavouriteDetails, value: boolean) => void
}

export abstract class FavouriteDetailsIface {

    // Own properties of Folks-0.7.Folks.FavouriteDetailsIface

    static name: string
}

export interface GenderDetailsIface {

    // Own fields of Folks-0.7.Folks.GenderDetailsIface

    changeGender: (self: GenderDetails, gender: Gender, callback: Gio.AsyncReadyCallback | null) => void
    changeGenderFinish: (self: GenderDetails, res: Gio.AsyncResult) => void
    getGender: (self: GenderDetails) => Gender
    setGender: (self: GenderDetails, value: Gender) => void
}

export abstract class GenderDetailsIface {

    // Own properties of Folks-0.7.Folks.GenderDetailsIface

    static name: string
}

export interface GroupDetailsIface {

    // Own fields of Folks-0.7.Folks.GroupDetailsIface

    changeGroup: (self: GroupDetails, group: string, isMember: boolean, callback: Gio.AsyncReadyCallback | null) => void
    changeGroupFinish: (self: GroupDetails, res: Gio.AsyncResult) => void
    changeGroups: (self: GroupDetails, groups: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeGroupsFinish: (self: GroupDetails, res: Gio.AsyncResult) => void
    getGroups: (self: GroupDetails) => Gee.Set
    setGroups: (self: GroupDetails, value: Gee.Set) => void
}

export abstract class GroupDetailsIface {

    // Own properties of Folks-0.7.Folks.GroupDetailsIface

    static name: string
}

export interface ImDetailsIface {

    // Own fields of Folks-0.7.Folks.ImDetailsIface

    changeImAddresses: (self: ImDetails, imAddresses: Gee.MultiMap, callback: Gio.AsyncReadyCallback | null) => void
    changeImAddressesFinish: (self: ImDetails, res: Gio.AsyncResult) => void
    getImAddresses: (self: ImDetails) => Gee.MultiMap
    setImAddresses: (self: ImDetails, value: Gee.MultiMap) => void
}

export abstract class ImDetailsIface {

    // Own properties of Folks-0.7.Folks.ImDetailsIface

    static name: string
}

export interface InteractionDetailsIface {

    // Own fields of Folks-0.7.Folks.InteractionDetailsIface

    getImInteractionCount: (self: InteractionDetails) => number
    getLastImInteractionDatetime: (self: InteractionDetails) => GLib.DateTime | null
    getCallInteractionCount: (self: InteractionDetails) => number
    getLastCallInteractionDatetime: (self: InteractionDetails) => GLib.DateTime | null
}

export abstract class InteractionDetailsIface {

    // Own properties of Folks-0.7.Folks.InteractionDetailsIface

    static name: string
}

export interface LocalIdDetailsIface {

    // Own fields of Folks-0.7.Folks.LocalIdDetailsIface

    changeLocalIds: (self: LocalIdDetails, localIds: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeLocalIdsFinish: (self: LocalIdDetails, res: Gio.AsyncResult) => void
    getLocalIds: (self: LocalIdDetails) => Gee.Set
    setLocalIds: (self: LocalIdDetails, value: Gee.Set) => void
}

export abstract class LocalIdDetailsIface {

    // Own properties of Folks-0.7.Folks.LocalIdDetailsIface

    static name: string
}

export interface LocationDetailsIface {

    // Own fields of Folks-0.7.Folks.LocationDetailsIface

    changeLocation: (self: LocationDetails, location: Location | null, callback: Gio.AsyncReadyCallback | null) => void
    changeLocationFinish: (self: LocationDetails, res: Gio.AsyncResult) => void
    getLocation: (self: LocationDetails) => Location | null
    setLocation: (self: LocationDetails, value: Location | null) => void
}

export abstract class LocationDetailsIface {

    // Own properties of Folks-0.7.Folks.LocationDetailsIface

    static name: string
}

export interface NameDetailsIface {

    // Own fields of Folks-0.7.Folks.NameDetailsIface

    changeStructuredName: (self: NameDetails, name: StructuredName | null, callback: Gio.AsyncReadyCallback | null) => void
    changeStructuredNameFinish: (self: NameDetails, res: Gio.AsyncResult) => void
    changeFullName: (self: NameDetails, fullName: string, callback: Gio.AsyncReadyCallback | null) => void
    changeFullNameFinish: (self: NameDetails, res: Gio.AsyncResult) => void
    changeNickname: (self: NameDetails, nickname: string, callback: Gio.AsyncReadyCallback | null) => void
    changeNicknameFinish: (self: NameDetails, res: Gio.AsyncResult) => void
    getStructuredName: (self: NameDetails) => StructuredName | null
    setStructuredName: (self: NameDetails, value: StructuredName | null) => void
    getFullName: (self: NameDetails) => string
    setFullName: (self: NameDetails, value: string) => void
    getNickname: (self: NameDetails) => string
    setNickname: (self: NameDetails, value: string) => void
}

export abstract class NameDetailsIface {

    // Own properties of Folks-0.7.Folks.NameDetailsIface

    static name: string
}

export interface NoteDetailsIface {

    // Own fields of Folks-0.7.Folks.NoteDetailsIface

    changeNotes: (self: NoteDetails, notes: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeNotesFinish: (self: NoteDetails, res: Gio.AsyncResult) => void
    getNotes: (self: NoteDetails) => Gee.Set
    setNotes: (self: NoteDetails, value: Gee.Set) => void
}

export abstract class NoteDetailsIface {

    // Own properties of Folks-0.7.Folks.NoteDetailsIface

    static name: string
}

export interface PhoneDetailsIface {

    // Own fields of Folks-0.7.Folks.PhoneDetailsIface

    changePhoneNumbers: (self: PhoneDetails, phoneNumbers: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changePhoneNumbersFinish: (self: PhoneDetails, res: Gio.AsyncResult) => void
    getPhoneNumbers: (self: PhoneDetails) => Gee.Set
    setPhoneNumbers: (self: PhoneDetails, value: Gee.Set) => void
}

export abstract class PhoneDetailsIface {

    // Own properties of Folks-0.7.Folks.PhoneDetailsIface

    static name: string
}

export interface PostalAddressDetailsIface {

    // Own fields of Folks-0.7.Folks.PostalAddressDetailsIface

    changePostalAddresses: (self: PostalAddressDetails, postalAddresses: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changePostalAddressesFinish: (self: PostalAddressDetails, res: Gio.AsyncResult) => void
    getPostalAddresses: (self: PostalAddressDetails) => Gee.Set
    setPostalAddresses: (self: PostalAddressDetails, value: Gee.Set) => void
}

export abstract class PostalAddressDetailsIface {

    // Own properties of Folks-0.7.Folks.PostalAddressDetailsIface

    static name: string
}

export interface PresenceDetailsIface {

    // Own fields of Folks-0.7.Folks.PresenceDetailsIface

    getPresenceType: (self: PresenceDetails) => PresenceType
    setPresenceType: (self: PresenceDetails, value: PresenceType) => void
    getPresenceMessage: (self: PresenceDetails) => string
    setPresenceMessage: (self: PresenceDetails, value: string) => void
    getClientTypes: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    setClientTypes: (self: PresenceDetails, value: string[]) => void
    getPresenceStatus: (self: PresenceDetails) => string
    setPresenceStatus: (self: PresenceDetails, value: string) => void
}

export abstract class PresenceDetailsIface {

    // Own properties of Folks-0.7.Folks.PresenceDetailsIface

    static name: string
}

export interface RoleDetailsIface {

    // Own fields of Folks-0.7.Folks.RoleDetailsIface

    changeRoles: (self: RoleDetails, roles: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeRolesFinish: (self: RoleDetails, res: Gio.AsyncResult) => void
    getRoles: (self: RoleDetails) => Gee.Set
    setRoles: (self: RoleDetails, value: Gee.Set) => void
}

export abstract class RoleDetailsIface {

    // Own properties of Folks-0.7.Folks.RoleDetailsIface

    static name: string
}

export interface UrlDetailsIface {

    // Own fields of Folks-0.7.Folks.UrlDetailsIface

    changeUrls: (self: UrlDetails, urls: Gee.Set, callback: Gio.AsyncReadyCallback | null) => void
    changeUrlsFinish: (self: UrlDetails, res: Gio.AsyncResult) => void
    getUrls: (self: UrlDetails) => Gee.Set
    setUrls: (self: UrlDetails, value: Gee.Set) => void
}

export abstract class UrlDetailsIface {

    // Own properties of Folks-0.7.Folks.UrlDetailsIface

    static name: string
}

export interface WebServiceDetailsIface {

    // Own fields of Folks-0.7.Folks.WebServiceDetailsIface

    changeWebServiceAddresses: (self: WebServiceDetails, webServiceAddresses: Gee.MultiMap, callback: Gio.AsyncReadyCallback | null) => void
    changeWebServiceAddressesFinish: (self: WebServiceDetails, res: Gio.AsyncResult) => void
    getWebServiceAddresses: (self: WebServiceDetails) => Gee.MultiMap
    setWebServiceAddresses: (self: WebServiceDetails, value: Gee.MultiMap) => void
}

export abstract class WebServiceDetailsIface {

    // Own properties of Folks-0.7.Folks.WebServiceDetailsIface

    static name: string
}
