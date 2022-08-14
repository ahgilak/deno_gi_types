
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstVideo-0.10
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as GstBase from './GstBase-0.10.js';
import type * as Gst from './Gst-0.10.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * Enum value describing the most common video formats.
 */
export enum Format {
    UNKNOWN,
    I420,
    YV12,
    YUY2,
    UYVY,
    AYUV,
    RGBX,
    BGRX,
    XRGB,
    XBGR,
    RGBA,
    BGRA,
    ARGB,
    ABGR,
    RGB,
    BGR,
    Y41B,
    Y42B,
    YVYU,
    Y444,
    V210,
    V216,
    NV12,
    NV21,
}
export const BLUE_MASK_15: string
export const BLUE_MASK_15_INT: any
export const BLUE_MASK_16: string
export const BLUE_MASK_16_INT: any
export const BYTE1_MASK_24: string
export const BYTE1_MASK_24_INT: any
export const BYTE1_MASK_32: string
export const BYTE1_MASK_32_INT: any
export const BYTE2_MASK_24: string
export const BYTE2_MASK_24_INT: any
export const BYTE2_MASK_32: string
export const BYTE2_MASK_32_INT: any
export const BYTE3_MASK_24: string
export const BYTE3_MASK_24_INT: any
export const BYTE3_MASK_32: string
export const BYTE3_MASK_32_INT: any
export const BYTE4_MASK_32: string
export const BYTE4_MASK_32_INT: any
export const CAPS_RGB_15: string
export const CAPS_RGB_16: string
export const FPS_RANGE: string
export const GREEN_MASK_15: string
export const GREEN_MASK_15_INT: any
export const GREEN_MASK_16: string
export const GREEN_MASK_16_INT: any
export const RED_MASK_15: string
export const RED_MASK_15_INT: any
export const RED_MASK_16: string
export const RED_MASK_16_INT: any
export const SIZE_RANGE: string
export function calculateDisplayRatio(videoWidth: number, videoHeight: number, videoParN: number, videoParD: number, displayParN: number, displayParD: number): [ /* returnType */ boolean, /* darN */ number, /* darD */ number ]
export function eventNewStillFrame(inStill: boolean): Gst.Event
export function eventParseStillFrame(event: Gst.Event): [ /* returnType */ boolean, /* inStill */ boolean ]
export function formatConvert(format: Format, width: number, height: number, fpsN: number, fpsD: number, srcFormat: Gst.Format, srcValue: number, destFormat: Gst.Format): [ /* returnType */ boolean, /* destValue */ number ]
export function formatFromFourcc(fourcc: number): Format
export function formatGetComponentHeight(format: Format, component: number, height: number): number
export function formatGetComponentOffset(format: Format, component: number, width: number, height: number): number
export function formatGetComponentWidth(format: Format, component: number, width: number): number
export function formatGetPixelStride(format: Format, component: number): number
export function formatGetRowStride(format: Format, component: number, width: number): number
export function formatGetSize(format: Format, width: number, height: number): number
export function formatHasAlpha(format: Format): boolean
export function formatIsRgb(format: Format): boolean
export function formatIsYuv(format: Format): boolean
export function formatNewCaps(format: Format, width: number, height: number, framerateN: number, framerateD: number, parN: number, parD: number): Gst.Caps
export function formatNewCapsInterlaced(format: Format, width: number, height: number, framerateN: number, framerateD: number, parN: number, parD: number, interlaced: boolean): Gst.Caps
export function formatParseCaps(caps: Gst.Caps, format: Format): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
export function formatParseCapsInterlaced(caps: Gst.Caps): [ /* returnType */ boolean, /* interlaced */ boolean ]
export function formatToFourcc(format: Format): number
export function frameRate(pad: Gst.Pad): any
export function getSize(pad: Gst.Pad): [ /* returnType */ boolean, /* width */ number, /* height */ number ]
export function parseCapsChromaSite(caps: Gst.Caps): string
export function parseCapsColorMatrix(caps: Gst.Caps): string
export function parseCapsFramerate(caps: Gst.Caps): [ /* returnType */ boolean, /* fpsN */ number, /* fpsD */ number ]
export function parseCapsPixelAspectRatio(caps: Gst.Caps): [ /* returnType */ boolean, /* parN */ number, /* parD */ number ]
export module Filter {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.Transform.ConstructorProperties {
    }

}

export interface Filter {

    // Conflicting properties

    gstReserved: any
    object: any

    // Own fields of GstVideo-0.10.GstVideo.Filter

    element: any
    inited: boolean

    // Class property signals of GstVideo-0.10.GstVideo.Filter

    connect(sigName: "notify::qos", callback: any): number
    on(sigName: "notify::qos", callback: any): number
    once(sigName: "notify::qos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Filter extends GstBase.Transform {

    // Own properties of GstVideo-0.10.GstVideo.Filter

    static name: string

    // Constructors of GstVideo-0.10.GstVideo.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

export module Sink {

    // Constructor properties interface

    export interface ConstructorProperties extends GstBase.Sink.ConstructorProperties {

        // Own constructor properties of GstVideo-0.10.GstVideo.Sink

        showPrerollFrame?: boolean | null
    }

}

export interface Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    showPrerollFrame: boolean

    // Conflicting properties

    object: any

    // Own fields of GstVideo-0.10.GstVideo.Sink

    element: any
    width: number
    height: number
    priv: any
    gstReserved: any

    // Own virtual methods of GstVideo-0.10.GstVideo.Sink

    showFrame(buf: Gst.Buffer): Gst.FlowReturn

    // Class property signals of GstVideo-0.10.GstVideo.Sink

    connect(sigName: "notify::show-preroll-frame", callback: any): number
    on(sigName: "notify::show-preroll-frame", callback: any): number
    once(sigName: "notify::show-preroll-frame", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-preroll-frame", ...args: any[]): void
    connect(sigName: "notify::async", callback: any): number
    on(sigName: "notify::async", callback: any): number
    once(sigName: "notify::async", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::async", ...args: any[]): void
    connect(sigName: "notify::blocksize", callback: any): number
    on(sigName: "notify::blocksize", callback: any): number
    once(sigName: "notify::blocksize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::blocksize", ...args: any[]): void
    connect(sigName: "notify::enable-last-buffer", callback: any): number
    on(sigName: "notify::enable-last-buffer", callback: any): number
    once(sigName: "notify::enable-last-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-last-buffer", ...args: any[]): void
    connect(sigName: "notify::last-buffer", callback: any): number
    on(sigName: "notify::last-buffer", callback: any): number
    once(sigName: "notify::last-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-buffer", ...args: any[]): void
    connect(sigName: "notify::max-lateness", callback: any): number
    on(sigName: "notify::max-lateness", callback: any): number
    once(sigName: "notify::max-lateness", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-lateness", ...args: any[]): void
    connect(sigName: "notify::preroll-queue-len", callback: any): number
    on(sigName: "notify::preroll-queue-len", callback: any): number
    once(sigName: "notify::preroll-queue-len", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preroll-queue-len", ...args: any[]): void
    connect(sigName: "notify::qos", callback: any): number
    on(sigName: "notify::qos", callback: any): number
    once(sigName: "notify::qos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::qos", ...args: any[]): void
    connect(sigName: "notify::render-delay", callback: any): number
    on(sigName: "notify::render-delay", callback: any): number
    once(sigName: "notify::render-delay", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::render-delay", ...args: any[]): void
    connect(sigName: "notify::ts-offset", callback: any): number
    on(sigName: "notify::ts-offset", callback: any): number
    once(sigName: "notify::ts-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ts-offset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The video sink instance structure. Derived video sinks should set the
 * @class 
 */
export class Sink extends GstBase.Sink {

    // Own properties of GstVideo-0.10.GstVideo.Sink

    static name: string

    // Constructors of GstVideo-0.10.GstVideo.Sink

    constructor(config?: Sink.ConstructorProperties) 
    _init(config?: Sink.ConstructorProperties): void
    static centerRect(src: Rectangle, dst: Rectangle, result: Rectangle, scaling: boolean): void
}

export interface FilterClass {

    // Own fields of GstVideo-0.10.GstVideo.FilterClass

    parentClass: GstBase.TransformClass
}

export abstract class FilterClass {

    // Own properties of GstVideo-0.10.GstVideo.FilterClass

    static name: string
}

export interface Rectangle {

    // Own fields of GstVideo-0.10.GstVideo.Rectangle

    x: number
    y: number
    w: number
    h: number
}

/**
 * Helper structure representing a rectangular area.
 * @record 
 */
export class Rectangle {

    // Own properties of GstVideo-0.10.GstVideo.Rectangle

    static name: string
}

export interface SinkClass {

    // Own fields of GstVideo-0.10.GstVideo.SinkClass

    parentClass: GstBase.SinkClass
    showFrame: (videoSink: Sink, buf: Gst.Buffer) => Gst.FlowReturn
    gstReserved: any[]
}

/**
 * The video sink class structure. Derived classes should override the
 * @record 
 */
export abstract class SinkClass {

    // Own properties of GstVideo-0.10.GstVideo.SinkClass

    static name: string
}

export interface SinkPrivate {
}

export class SinkPrivate {

    // Own properties of GstVideo-0.10.GstVideo.SinkPrivate

    static name: string
}
