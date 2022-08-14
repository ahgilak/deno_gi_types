
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * RygelRendererGst-2.6
 */

import type * as RygelRenderer from './RygelRenderer-2.6.js';
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
import type * as Gst from './Gst-1.0.js';
import type * as GModule from './GModule-2.0.js';

export enum PlaybinPlayerError {
    NO_ELEMENT,
}
export module PlaybinPlayer {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelRenderer.MediaPlayer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

        playbin?: Gst.Element | null
    }

}

export interface PlaybinPlayer extends RygelRenderer.MediaPlayer {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    playbin: Gst.Element
    readonly supportedProfiles: RygelCore.DLNAProfile[]

    // Owm methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    getPlaybin(): Gst.Element
    getSupportedProfiles(): RygelCore.DLNAProfile[]

    // Class property signals of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    connect(sigName: "notify::playbin", callback: any): number
    on(sigName: "notify::playbin", callback: any): number
    once(sigName: "notify::playbin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playbin", ...args: any[]): void
    connect(sigName: "notify::supported-profiles", callback: any): number
    on(sigName: "notify::supported-profiles", callback: any): number
    once(sigName: "notify::supported-profiles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::supported-profiles", ...args: any[]): void
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

export class PlaybinPlayer extends GObject.Object {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    static name: string

    // Constructors of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayer

    constructor(config?: PlaybinPlayer.ConstructorProperties) 
    _init(config?: PlaybinPlayer.ConstructorProperties): void
    static instance(): PlaybinPlayer
}

export module PlaybinRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends RygelRenderer.MediaRenderer.ConstructorProperties {
    }

}

export interface PlaybinRenderer {

    // Owm methods of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

    getPlaybin(): Gst.Element | null

    // Class property signals of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

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

export class PlaybinRenderer extends RygelRenderer.MediaRenderer {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

    static name: string

    // Constructors of RygelRendererGst-2.6.RygelRendererGst.PlaybinRenderer

    constructor(config?: PlaybinRenderer.ConstructorProperties) 
    constructor(title: string) 
    static new(title: string): PlaybinRenderer

    // Overloads of new

    static new(title: string, player: RygelRenderer.MediaPlayer, capabilities: RygelCore.PluginCapabilities): RygelRenderer.MediaRenderer
    _init(config?: PlaybinRenderer.ConstructorProperties): void
}

export interface PlaybinPlayerClass {
}

export abstract class PlaybinPlayerClass {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayerClass

    static name: string
}

export interface PlaybinPlayerPrivate {
}

export class PlaybinPlayerPrivate {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinPlayerPrivate

    static name: string
}

export interface PlaybinRendererClass {
}

export abstract class PlaybinRendererClass {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinRendererClass

    static name: string
}

export interface PlaybinRendererPrivate {
}

export class PlaybinRendererPrivate {

    // Own properties of RygelRendererGst-2.6.RygelRendererGst.PlaybinRendererPrivate

    static name: string
}
