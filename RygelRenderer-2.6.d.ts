
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRenderer-2.6
 */

import type * as RygelCore from './RygelCore-2.6.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GUPnP from './GUPnP-1.2.js';
import type * as libxml2 from './libxml2-2.0.js';
import type * as Soup from './Soup-2.4.js';
import type * as GSSDP from './GSSDP-1.2.js';
import type * as GUPnPAV from './GUPnPAV-1.0.js';

export module MediaPlayer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

        playbackState?: string | null
        playbackSpeed?: string | null
        uri?: string | null
        volume?: number | null
        metadata?: string | null
        mimeType?: string | null
        contentFeatures?: string | null
        userAgent?: string | null
    }

}

export interface MediaPlayer extends GObject.Object {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    playbackState: string
    readonly allowedPlaybackSpeeds: string[]
    playbackSpeed: string
    uri: string
    volume: number
    readonly duration: number
    readonly size: number
    metadata: string
    mimeType: string
    readonly canSeek: boolean
    readonly canSeekBytes: boolean
    contentFeatures: string
    readonly position: number
    readonly bytePosition: number
    userAgent: string

    // Owm methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    // Has conflict: seek(time: number): boolean
    // Has conflict: seekBytes(bytes: number): boolean
    // Has conflict: getProtocols(): string[]
    // Has conflict: getMimeTypes(): string[]
    playSpeedToDouble(speed: string): number
    // Has conflict: getPlaybackState(): string
    // Has conflict: setPlaybackState(value: string): void
    // Has conflict: getAllowedPlaybackSpeeds(): string[]
    // Has conflict: getPlaybackSpeed(): string
    // Has conflict: setPlaybackSpeed(value: string): void
    // Has conflict: getUri(): string | null
    // Has conflict: setUri(value: string | null): void
    // Has conflict: getVolume(): number
    // Has conflict: setVolume(value: number): void
    // Has conflict: getDuration(): number
    // Has conflict: getSize(): number
    // Has conflict: getMetadata(): string | null
    // Has conflict: setMetadata(value: string | null): void
    // Has conflict: getMimeType(): string | null
    // Has conflict: setMimeType(value: string | null): void
    // Has conflict: getCanSeek(): boolean
    // Has conflict: getCanSeekBytes(): boolean
    // Has conflict: getContentFeatures(): string | null
    // Has conflict: setContentFeatures(value: string | null): void
    getDurationAsStr(): string
    // Has conflict: getPosition(): number
    // Has conflict: getBytePosition(): number
    getPositionAsStr(): string
    // Has conflict: getUserAgent(): string | null
    // Has conflict: setUserAgent(value: string | null): void
    getProtocolInfo(): string

    // Own virtual methods of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    seek(time: number): boolean
    seekBytes(bytes: number): boolean
    getProtocols(): string[]
    getMimeTypes(): string[]
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getAllowedPlaybackSpeeds(): string[]
    getPlaybackSpeed(): string
    setPlaybackSpeed(value: string): void
    getUri(): string | null
    setUri(value: string | null): void
    getVolume(): number
    setVolume(value: number): void
    getDuration(): number
    getSize(): number
    getMetadata(): string | null
    setMetadata(value: string | null): void
    getMimeType(): string | null
    setMimeType(value: string | null): void
    getCanSeek(): boolean
    getCanSeekBytes(): boolean
    getContentFeatures(): string | null
    setContentFeatures(value: string | null): void
    getPosition(): number
    getBytePosition(): number
    getUserAgent(): string | null
    setUserAgent(value: string | null): void

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    connect(sigName: "notify::playback-state", callback: any): number
    on(sigName: "notify::playback-state", callback: any): number
    once(sigName: "notify::playback-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::allowed-playback-speeds", callback: any): number
    on(sigName: "notify::allowed-playback-speeds", callback: any): number
    once(sigName: "notify::allowed-playback-speeds", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allowed-playback-speeds", ...args: any[]): void
    connect(sigName: "notify::playback-speed", callback: any): number
    on(sigName: "notify::playback-speed", callback: any): number
    once(sigName: "notify::playback-speed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playback-speed", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::volume", callback: any): number
    on(sigName: "notify::volume", callback: any): number
    once(sigName: "notify::volume", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: any): number
    on(sigName: "notify::metadata", callback: any): number
    once(sigName: "notify::metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::mime-type", callback: any): number
    on(sigName: "notify::mime-type", callback: any): number
    once(sigName: "notify::mime-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mime-type", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: any): number
    on(sigName: "notify::can-seek", callback: any): number
    once(sigName: "notify::can-seek", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::can-seek-bytes", callback: any): number
    on(sigName: "notify::can-seek-bytes", callback: any): number
    once(sigName: "notify::can-seek-bytes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-seek-bytes", ...args: any[]): void
    connect(sigName: "notify::content-features", callback: any): number
    on(sigName: "notify::content-features", callback: any): number
    once(sigName: "notify::content-features", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-features", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::byte-position", callback: any): number
    on(sigName: "notify::byte-position", callback: any): number
    once(sigName: "notify::byte-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::byte-position", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MediaPlayer {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    static name: string

    // Constructors of RygelRenderer-2.6.RygelRenderer.MediaPlayer

    constructor(config?: MediaPlayer.ConstructorProperties) 
    _init(config?: MediaPlayer.ConstructorProperties): void
}

export module PlayerController {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelRenderer-2.6.RygelRenderer.PlayerController

        playbackState?: string | null
        nTracks?: number | null
        track?: number | null
        uri?: string | null
        metadata?: string | null
        trackUri?: string | null
        trackMetadata?: string | null
        nextUri?: string | null
        nextMetadata?: string | null
        playMode?: string | null
    }

}

export interface PlayerController extends GObject.Object {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerController

    playbackState: string
    nTracks: number
    track: number
    uri: string
    metadata: string
    trackUri: string
    trackMetadata: string
    nextUri: string
    nextMetadata: string
    readonly currentTransportActions: string
    playMode: string
    readonly canPause: boolean

    // Owm methods of RygelRenderer-2.6.RygelRenderer.PlayerController

    // Has conflict: next(): boolean
    // Has conflict: previous(): boolean
    // Has conflict: setSinglePlayUri(uri: string, metadata: string, mime: string | null, features: string | null): void
    // Has conflict: setPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    // Has conflict: setNextSinglePlayUri(uri: string, metadata: string, mime: string | null, features: string | null): void
    // Has conflict: setNextPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    // Has conflict: isPlayModeValid(playMode: string): boolean
    unescape(input: string): string
    // Has conflict: getPlaybackState(): string
    // Has conflict: setPlaybackState(value: string): void
    // Has conflict: getNTracks(): number
    // Has conflict: setNTracks(value: number): void
    // Has conflict: getTrack(): number
    // Has conflict: setTrack(value: number): void
    // Has conflict: getUri(): string
    // Has conflict: setUri(value: string): void
    // Has conflict: getMetadata(): string
    // Has conflict: setMetadata(value: string): void
    // Has conflict: getTrackUri(): string
    // Has conflict: setTrackUri(value: string): void
    // Has conflict: getTrackMetadata(): string
    // Has conflict: setTrackMetadata(value: string): void
    // Has conflict: getNextUri(): string
    // Has conflict: setNextUri(value: string): void
    // Has conflict: getNextMetadata(): string
    // Has conflict: setNextMetadata(value: string): void
    // Has conflict: getCurrentTransportActions(): string
    // Has conflict: getPlayMode(): string
    // Has conflict: setPlayMode(value: string): void
    // Has conflict: getCanPause(): boolean

    // Own virtual methods of RygelRenderer-2.6.RygelRenderer.PlayerController

    next(): boolean
    previous(): boolean
    setSinglePlayUri(uri: string, metadata: string, mime: string | null, features: string | null): void
    setPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    setNextSinglePlayUri(uri: string, metadata: string, mime: string | null, features: string | null): void
    setNextPlaylistUri(uri: string, metadata: string, collection: GUPnPAV.MediaCollection): void
    isPlayModeValid(playMode: string): boolean
    getPlaybackState(): string
    setPlaybackState(value: string): void
    getNTracks(): number
    setNTracks(value: number): void
    getTrack(): number
    setTrack(value: number): void
    getUri(): string
    setUri(value: string): void
    getMetadata(): string
    setMetadata(value: string): void
    getTrackUri(): string
    setTrackUri(value: string): void
    getTrackMetadata(): string
    setTrackMetadata(value: string): void
    getNextUri(): string
    setNextUri(value: string): void
    getNextMetadata(): string
    setNextMetadata(value: string): void
    getCurrentTransportActions(): string
    getPlayMode(): string
    setPlayMode(value: string): void
    getCanPause(): boolean

    // Class property signals of RygelRenderer-2.6.RygelRenderer.PlayerController

    connect(sigName: "notify::playback-state", callback: any): number
    on(sigName: "notify::playback-state", callback: any): number
    once(sigName: "notify::playback-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playback-state", ...args: any[]): void
    connect(sigName: "notify::n-tracks", callback: any): number
    on(sigName: "notify::n-tracks", callback: any): number
    once(sigName: "notify::n-tracks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-tracks", ...args: any[]): void
    connect(sigName: "notify::track", callback: any): number
    on(sigName: "notify::track", callback: any): number
    once(sigName: "notify::track", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::track", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::metadata", callback: any): number
    on(sigName: "notify::metadata", callback: any): number
    once(sigName: "notify::metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::metadata", ...args: any[]): void
    connect(sigName: "notify::track-uri", callback: any): number
    on(sigName: "notify::track-uri", callback: any): number
    once(sigName: "notify::track-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::track-uri", ...args: any[]): void
    connect(sigName: "notify::track-metadata", callback: any): number
    on(sigName: "notify::track-metadata", callback: any): number
    once(sigName: "notify::track-metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::track-metadata", ...args: any[]): void
    connect(sigName: "notify::next-uri", callback: any): number
    on(sigName: "notify::next-uri", callback: any): number
    once(sigName: "notify::next-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-uri", ...args: any[]): void
    connect(sigName: "notify::next-metadata", callback: any): number
    on(sigName: "notify::next-metadata", callback: any): number
    once(sigName: "notify::next-metadata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-metadata", ...args: any[]): void
    connect(sigName: "notify::current-transport-actions", callback: any): number
    on(sigName: "notify::current-transport-actions", callback: any): number
    once(sigName: "notify::current-transport-actions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-transport-actions", ...args: any[]): void
    connect(sigName: "notify::play-mode", callback: any): number
    on(sigName: "notify::play-mode", callback: any): number
    once(sigName: "notify::play-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::play-mode", ...args: any[]): void
    connect(sigName: "notify::can-pause", callback: any): number
    on(sigName: "notify::can-pause", callback: any): number
    once(sigName: "notify::can-pause", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-pause", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PlayerController {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerController

    static name: string

    // Constructors of RygelRenderer-2.6.RygelRenderer.PlayerController

    constructor(config?: PlayerController.ConstructorProperties) 
    _init(config?: PlayerController.ConstructorProperties): void
}

export module MediaRendererPlugin {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.Plugin.ConstructorProperties {

        // Own constructor properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

        supportedProfiles?: RygelCore.DLNAProfile[] | null
    }

}

export interface MediaRendererPlugin {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    // Has conflict: getPlayer(): MediaPlayer | null
    // Has conflict: getController(): PlayerController
    getProtocolInfo(): string
    getSupportedProfiles(): RygelCore.DLNAProfile[]
    setSupportedProfiles(value: RygelCore.DLNAProfile[]): void

    // Own virtual methods of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    getPlayer(): MediaPlayer | null
    getController(): PlayerController

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    connect(sigName: "notify::supported-profiles", callback: any): number
    on(sigName: "notify::supported-profiles", callback: any): number
    once(sigName: "notify::supported-profiles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: any): number
    on(sigName: "notify::capabilities", callback: any): number
    once(sigName: "notify::capabilities", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::desc-path", callback: any): number
    on(sigName: "notify::desc-path", callback: any): number
    once(sigName: "notify::desc-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::desc-path", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::resource-infos", callback: any): number
    on(sigName: "notify::resource-infos", callback: any): number
    once(sigName: "notify::resource-infos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-infos", ...args: any[]): void
    connect(sigName: "notify::icon-infos", callback: any): number
    on(sigName: "notify::icon-infos", callback: any): number
    once(sigName: "notify::icon-infos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-infos", ...args: any[]): void
    connect(sigName: "notify::default-icons", callback: any): number
    on(sigName: "notify::default-icons", callback: any): number
    once(sigName: "notify::default-icons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-icons", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MediaRendererPlugin extends RygelCore.Plugin {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    static name: string

    // Constructors of RygelRenderer-2.6.RygelRenderer.MediaRendererPlugin

    constructor(config?: MediaRendererPlugin.ConstructorProperties) 
    constructor(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities) 
    static new(name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): MediaRendererPlugin

    // Overloads of new

    static new(descPath: string, name: string, title: string | null, description: string | null, capabilities: RygelCore.PluginCapabilities): RygelCore.Plugin
    /**
     * Create a new #GUPnPResourceFactory object.
     * @constructor 
     */
    static new(): GUPnP.ResourceFactory
    _init(config?: MediaRendererPlugin.ConstructorProperties): void
}

export module MediaRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelCore.MediaDevice.ConstructorProperties {

        // Own constructor properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer

        player?: MediaPlayer | null
    }

}

export interface MediaRenderer {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    readonly player: MediaPlayer

    // Class property signals of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    connect(sigName: "notify::player", callback: any): number
    on(sigName: "notify::player", callback: any): number
    once(sigName: "notify::player", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::player", ...args: any[]): void
    connect(sigName: "notify::plugin", callback: any): number
    on(sigName: "notify::plugin", callback: any): number
    once(sigName: "notify::plugin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::plugin", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: any): number
    on(sigName: "notify::capabilities", callback: any): number
    once(sigName: "notify::capabilities", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MediaRenderer extends RygelCore.MediaDevice {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    static name: string

    // Constructors of RygelRenderer-2.6.RygelRenderer.MediaRenderer

    constructor(config?: MediaRenderer.ConstructorProperties) 
    constructor(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities) 
    static new(title: string, player: MediaPlayer, capabilities: RygelCore.PluginCapabilities): MediaRenderer
    _init(config?: MediaRenderer.ConstructorProperties): void
}

export interface MediaRendererPluginClass {

    // Own fields of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginClass

    getPlayer: (self: MediaRendererPlugin) => MediaPlayer | null
    getController: (self: MediaRendererPlugin) => PlayerController
}

export abstract class MediaRendererPluginClass {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginClass

    static name: string
}

export interface MediaRendererPluginPrivate {
}

export class MediaRendererPluginPrivate {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPluginPrivate

    static name: string
}

export interface MediaRendererClass {
}

export abstract class MediaRendererClass {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererClass

    static name: string
}

export interface MediaRendererPrivate {
}

export class MediaRendererPrivate {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaRendererPrivate

    static name: string
}

export interface MediaPlayerIface {

    // Own fields of RygelRenderer-2.6.RygelRenderer.MediaPlayerIface

    seek: (self: MediaPlayer, time: number) => boolean
    seekBytes: (self: MediaPlayer, bytes: number) => boolean
    getProtocols: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getMimeTypes: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getPlaybackState: (self: MediaPlayer) => string
    setPlaybackState: (self: MediaPlayer, value: string) => void
    getAllowedPlaybackSpeeds: () => [ /* returnType */ string[], /* resultLength1 */ number ]
    getPlaybackSpeed: (self: MediaPlayer) => string
    setPlaybackSpeed: (self: MediaPlayer, value: string) => void
    getUri: (self: MediaPlayer) => string | null
    setUri: (self: MediaPlayer, value: string | null) => void
    getVolume: (self: MediaPlayer) => number
    setVolume: (self: MediaPlayer, value: number) => void
    getDuration: (self: MediaPlayer) => number
    getSize: (self: MediaPlayer) => number
    getMetadata: (self: MediaPlayer) => string | null
    setMetadata: (self: MediaPlayer, value: string | null) => void
    getMimeType: (self: MediaPlayer) => string | null
    setMimeType: (self: MediaPlayer, value: string | null) => void
    getCanSeek: (self: MediaPlayer) => boolean
    getCanSeekBytes: (self: MediaPlayer) => boolean
    getContentFeatures: (self: MediaPlayer) => string | null
    setContentFeatures: (self: MediaPlayer, value: string | null) => void
    getPosition: (self: MediaPlayer) => number
    getBytePosition: (self: MediaPlayer) => number
    getUserAgent: (self: MediaPlayer) => string | null
    setUserAgent: (self: MediaPlayer, value: string | null) => void
}

export abstract class MediaPlayerIface {

    // Own properties of RygelRenderer-2.6.RygelRenderer.MediaPlayerIface

    static name: string
}

export interface PlayerControllerIface {

    // Own fields of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface

    next: (self: PlayerController) => boolean
    previous: (self: PlayerController) => boolean
    setSinglePlayUri: (self: PlayerController, uri: string, metadata: string, mime: string | null, features: string | null) => void
    setPlaylistUri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    setNextSinglePlayUri: (self: PlayerController, uri: string, metadata: string, mime: string | null, features: string | null) => void
    setNextPlaylistUri: (self: PlayerController, uri: string, metadata: string, collection: GUPnPAV.MediaCollection) => void
    isPlayModeValid: (self: PlayerController, playMode: string) => boolean
    getPlaybackState: (self: PlayerController) => string
    setPlaybackState: (self: PlayerController, value: string) => void
    getNTracks: (self: PlayerController) => number
    setNTracks: (self: PlayerController, value: number) => void
    getTrack: (self: PlayerController) => number
    setTrack: (self: PlayerController, value: number) => void
    getUri: (self: PlayerController) => string
    setUri: (self: PlayerController, value: string) => void
    getMetadata: (self: PlayerController) => string
    setMetadata: (self: PlayerController, value: string) => void
    getTrackUri: (self: PlayerController) => string
    setTrackUri: (self: PlayerController, value: string) => void
    getTrackMetadata: (self: PlayerController) => string
    setTrackMetadata: (self: PlayerController, value: string) => void
    getNextUri: (self: PlayerController) => string
    setNextUri: (self: PlayerController, value: string) => void
    getNextMetadata: (self: PlayerController) => string
    setNextMetadata: (self: PlayerController, value: string) => void
    getCurrentTransportActions: (self: PlayerController) => string
    getPlayMode: (self: PlayerController) => string
    setPlayMode: (self: PlayerController, value: string) => void
    getCanPause: (self: PlayerController) => boolean
}

export abstract class PlayerControllerIface {

    // Own properties of RygelRenderer-2.6.RygelRenderer.PlayerControllerIface

    static name: string
}
