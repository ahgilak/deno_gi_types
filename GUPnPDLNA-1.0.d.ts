
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GUPnPDLNA-1.0
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as GstPbutils from './GstPbutils-1.0.js';
import type * as GstVideo from './GstVideo-1.0.js';
import type * as GstBase from './GstBase-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GstAudio from './GstAudio-1.0.js';

export module Discoverer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (dlna: Information, err: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GstPbutils.Discoverer.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

        extendedMode?: boolean | null
        relaxedMode?: boolean | null
    }

}

export interface Discoverer {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    readonly extendedMode: boolean
    readonly relaxedMode: boolean

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    parent: GstPbutils.Discoverer & GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    /**
     * Queues `uri` for metadata discovery. When discovery is completed, the
     * "discovered" signal is emitted on `discoverer`.
     * @param uri URI to gather metadata for
     */
    discoverUri(uri: string): boolean

    // Overloads of discoverUri

    /**
     * Synchronously discovers the given `uri`.
     * 
     * A copy of `uri` will be made internally, so the caller can safely g_free()
     * afterwards.
     * @param uri The URI to run on.
     */
    discoverUri(uri: string): GstPbutils.DiscovererInfo
    /**
     * Synchronously gathers metadata for `uri`.
     * @param uri URI to gather metadata for
     */
    discoverUriSync(uri: string): Information
    getExtendedMode(): boolean
    /**
     * Given `name,` this finds the corresponding DLNA profile information (stored
     * as a #GUPnPDLNAProfile).
     * @param name The name of the DLNA profile to be retrieved
     */
    getProfile(name: string): Profile
    getRelaxedMode(): boolean
    /**
     * Retuns a list of the all the DLNA profiles supported by `self`.
     */
    listProfiles(): Profile[]

    // Own virtual methods of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    done(dlna: Information, err: GLib.Error): void

    // Own signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    connect(sigName: "done", callback: Discoverer.DoneSignalCallback): number
    on(sigName: "done", callback: Discoverer.DoneSignalCallback): number
    once(sigName: "done", callback: Discoverer.DoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "done", err: GLib.Error, ...args: any[]): void

    // Class property signals of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    connect(sigName: "notify::extended-mode", callback: any): number
    on(sigName: "notify::extended-mode", callback: any): number
    once(sigName: "notify::extended-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extended-mode", ...args: any[]): void
    connect(sigName: "notify::relaxed-mode", callback: any): number
    on(sigName: "notify::relaxed-mode", callback: any): number
    once(sigName: "notify::relaxed-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relaxed-mode", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::use-cache", callback: any): number
    on(sigName: "notify::use-cache", callback: any): number
    once(sigName: "notify::use-cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-cache", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The top-level object used to for metadata extraction.
 * @class 
 */
export class Discoverer extends GstPbutils.Discoverer {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    static name: string

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Discoverer

    constructor(config?: Discoverer.ConstructorProperties) 
    /**
     * Creates a new #GUPnPDLNADiscoverer object with the given default timeout
     * value.
     * @constructor 
     * @param timeout default discovery timeout, in nanoseconds
     * @param relaxedMode set to TRUE, to enable relaxed mode support. FALSE otherwise
     * @param extendedMode set to TRUE, to enable extended mode support. FALSE otherwise
     */
    constructor(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean) 
    /**
     * Creates a new #GUPnPDLNADiscoverer object with the given default timeout
     * value.
     * @constructor 
     * @param timeout default discovery timeout, in nanoseconds
     * @param relaxedMode set to TRUE, to enable relaxed mode support. FALSE otherwise
     * @param extendedMode set to TRUE, to enable extended mode support. FALSE otherwise
     */
    static new(timeout: Gst.ClockTime, relaxedMode: boolean, extendedMode: boolean): Discoverer

    // Overloads of new

    /**
     * Creates a new #GstDiscoverer with the provided timeout.
     * @constructor 
     * @param timeout timeout per file, in nanoseconds. Allowed are values between     one second (#GST_SECOND) and one hour (3600 * #GST_SECOND)
     */
    static new(timeout: Gst.ClockTime): GstPbutils.Discoverer
    _init(config?: Discoverer.ConstructorProperties): void
}

export module Information {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

        info?: GstPbutils.DiscovererInfo | null
        mime?: string | null
        name?: string | null
    }

}

export interface Information {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    readonly info: GstPbutils.DiscovererInfo
    readonly mime: string
    readonly name: string

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Information

    parent: GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Information

    getInfo(): GstPbutils.DiscovererInfo
    getMime(): string
    getName(): string

    // Class property signals of GUPnPDLNA-1.0.GUPnPDLNA.Information

    connect(sigName: "notify::info", callback: any): number
    on(sigName: "notify::info", callback: any): number
    once(sigName: "notify::info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::info", ...args: any[]): void
    connect(sigName: "notify::mime", callback: any): number
    on(sigName: "notify::mime", callback: any): number
    once(sigName: "notify::mime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mime", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Information extends GObject.Object {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Information

    static name: string

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Information

    constructor(config?: Information.ConstructorProperties) 
    /**
     * Creates a new #GUPnPDLNAInformation object with the given properties.
     * @constructor 
     * @param name DLNA media profile name corresponding to the media
     * @param mime DLNA MIME type for the media
     * @param info #GstDiscovererInfo type with additional metadata about the stream
     */
    constructor(name: string, mime: string, info: GstPbutils.DiscovererInfo) 
    /**
     * Creates a new #GUPnPDLNAInformation object with the given properties.
     * @constructor 
     * @param name DLNA media profile name corresponding to the media
     * @param mime DLNA MIME type for the media
     * @param info #GstDiscovererInfo type with additional metadata about the stream
     */
    static new(name: string, mime: string, info: GstPbutils.DiscovererInfo): Information
    _init(config?: Information.ConstructorProperties): void
}

export module Profile {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

        extended?: boolean | null
        mime?: string | null
        name?: string | null
    }

}

export interface Profile {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    readonly encodingProfile: GstPbutils.EncodingProfile
    readonly extended: boolean
    readonly mime: string
    readonly name: string

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    parent: GObject.Object

    // Owm methods of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    getEncodingProfile(): GstPbutils.EncodingProfile
    getExtended(): boolean
    getMime(): string
    getName(): string

    // Class property signals of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    connect(sigName: "notify::encoding-profile", callback: any): number
    on(sigName: "notify::encoding-profile", callback: any): number
    once(sigName: "notify::encoding-profile", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::encoding-profile", ...args: any[]): void
    connect(sigName: "notify::extended", callback: any): number
    on(sigName: "notify::extended", callback: any): number
    once(sigName: "notify::extended", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extended", ...args: any[]): void
    connect(sigName: "notify::mime", callback: any): number
    on(sigName: "notify::mime", callback: any): number
    once(sigName: "notify::mime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mime", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The top-level object used for the in-memory representation of the DLNA
 * Profiles.
 * @class 
 */
export class Profile extends GObject.Object {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    static name: string

    // Constructors of GUPnPDLNA-1.0.GUPnPDLNA.Profile

    constructor(config?: Profile.ConstructorProperties) 
    _init(config?: Profile.ConstructorProperties): void
}

export interface DiscovererClass {

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.DiscovererClass

    parentClass: GstPbutils.DiscovererClass
    done: (discoverer: Discoverer, dlna: Information, err: GLib.Error) => void
}

export abstract class DiscovererClass {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.DiscovererClass

    static name: string
}

export interface InformationClass {

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.InformationClass

    parentClass: GObject.ObjectClass
}

export abstract class InformationClass {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.InformationClass

    static name: string
}

export interface ProfileClass {

    // Own fields of GUPnPDLNA-1.0.GUPnPDLNA.ProfileClass

    parentClass: GObject.ObjectClass
}

export abstract class ProfileClass {

    // Own properties of GUPnPDLNA-1.0.GUPnPDLNA.ProfileClass

    static name: string
}
