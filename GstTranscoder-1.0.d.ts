
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstTranscoder-1.0
 */

import type * as GstPbutils from './GstPbutils-1.0.js';
import type * as GstVideo from './GstVideo-1.0.js';
import type * as GstBase from './GstBase-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GstAudio from './GstAudio-1.0.js';

export enum TranscoderError {
    /**
     * generic error.
     */
    FAILED,
}
/**
 * Types of messages that will be posted on the transcoder API bus.
 * 
 * See also #gst_transcoder_get_message_bus()
 */
export enum TranscoderMessage {
    /**
     * Sink position changed
     */
    POSITION_UPDATED,
    /**
     * Duration of stream changed
     */
    DURATION_CHANGED,
    /**
     * Pipeline state changed
     */
    STATE_CHANGED,
    /**
     * Transcoding is done
     */
    DONE,
    /**
     * Message contains an error
     */
    ERROR,
    /**
     * Message contains an error
     */
    WARNING,
}
/**
 * High level representation of the transcoder pipeline state.
 */
export enum TranscoderState {
    /**
     * the transcoder is stopped.
     */
    STOPPED,
    /**
     * the transcoder is paused.
     */
    PAUSED,
    /**
     * the transcoder is currently transcoding a
     * stream.
     */
    PLAYING,
}
/**
 * Gets a string representing the given error.
 * @param error a #GstTranscoderError
 */
export function transcoderErrorGetName(error: TranscoderError): string
export function transcoderErrorQuark(): GLib.Quark
/**
 * Returns (transfer none): The message name
 * @param message a #GstTranscoderMessage
 */
export function transcoderMessageGetName(message: TranscoderMessage): string
/**
 * Parse the given duration `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
export function transcoderMessageParseDuration(msg: Gst.Message): /* duration */ Gst.ClockTime
/**
 * Parse the given error `msg` and extract the corresponding #GError
 * @param msg A #GstMessage
 */
export function transcoderMessageParseError(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
/**
 * Parse the given position `msg` and extract the corresponding #GstClockTime
 * @param msg A #GstMessage
 */
export function transcoderMessageParsePosition(msg: Gst.Message): /* position */ Gst.ClockTime
/**
 * Parse the given state `msg` and extract the corresponding #GstTranscoderState
 * @param msg A #GstMessage
 */
export function transcoderMessageParseState(msg: Gst.Message): /* state */ TranscoderState
/**
 * Parse the given error `msg` and extract the corresponding #GError warning
 * @param msg A #GstMessage
 */
export function transcoderMessageParseWarning(msg: Gst.Message): [ /* error */ GLib.Error, /* details */ Gst.Structure ]
/**
 * Gets a string representing the given state.
 * @param state a #GstTranscoderState
 */
export function transcoderStateGetName(state: TranscoderState): string
export module Transcoder {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstTranscoder-1.0.GstTranscoder.Transcoder

        /**
         * See #encodebin:avoid-reencoding
         */
        avoidReencoding?: boolean | null
        destUri?: string | null
        positionUpdateInterval?: number | null
        profile?: GstPbutils.EncodingProfile | null
        srcUri?: string | null
    }

}

export interface Transcoder {

    // Own properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    /**
     * See #encodebin:avoid-reencoding
     */
    avoidReencoding: boolean
    readonly destUri: string
    readonly duration: number
    readonly pipeline: Gst.Element
    readonly position: number
    positionUpdateInterval: number
    readonly profile: GstPbutils.EncodingProfile
    readonly srcUri: string

    // Owm methods of GstTranscoder-1.0.GstTranscoder.Transcoder

    getAvoidReencoding(): boolean
    /**
     * Gets the URI of the destination of the transcoded stream.
     */
    getDestUri(): string
    /**
     * Retrieves the duration of the media stream that self represents.
     */
    getDuration(): Gst.ClockTime
    /**
     * GstTranscoder API exposes a #GstBus instance which purpose is to provide data
     * structures representing transcoder-internal events in form of #GstMessage-s of
     * type GST_MESSAGE_APPLICATION.
     * 
     * Each message carries a "transcoder-message" field of type #GstTranscoderMessage.
     * Further fields of the message data are specific to each possible value of
     * that enumeration.
     * 
     * Applications can consume the messages asynchronously within their own
     * event-loop / UI-thread etc. Note that in case the application does not
     * consume the messages, the bus will accumulate these internally and eventually
     * fill memory. To avoid that, the bus has to be set "flushing".
     */
    getMessageBus(): Gst.Bus
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getPositionUpdateInterval(): number
    /**
     * Gets the #GstTranscoderSignalAdapter attached to `self` if it is attached to
     * the right #GMainContext. If no #GstTranscoderSignalAdapter has been created
     * yet, it will be created and returned, other calls will return that same
     * adapter until it is destroyed, at which point, a new one can be attached the
     * same way.
     * @param context A #GMainContext on which the main-loop will process                       transcoder bus messages on. Can be NULL (thread-default                       context will be used then).
     */
    getSignalAdapter(context: GLib.MainContext | null): TranscoderSignalAdapter | null
    /**
     * Gets the URI of the currently-transcoding stream.
     */
    getSourceUri(): string
    /**
     * Gets the #GstTranscoderSignalAdapter attached to `self` to emit signals from
     * its thread of emission.
     */
    getSyncSignalAdapter(): TranscoderSignalAdapter
    /**
     * Run the transcoder task synchonously. You can connect
     * to the 'position' signal to get information about the
     * progress of the transcoding.
     */
    run(): boolean
    /**
     * Run the transcoder task asynchronously. You should connect
     * to the 'done' signal to be notified about when the
     * transcoding is done, and to the 'error' signal to be
     * notified about any error.
     */
    runAsync(): void
    setAvoidReencoding(avoidReencoding: boolean): void
    /**
     * Sets `cpu_usage` as target percentage CPU usage of the process running the
     * transcoding task. It will modulate the transcoding speed to reach that target
     * usage.
     * @param cpuUsage The percentage of the CPU the process running the transcoder should try to use. It takes into account the number of cores available.
     */
    setCpuUsage(cpuUsage: number): void
    /**
     * Set interval in milliseconds between two position-updated signals.
     * Pass 0 to stop updating the position.
     * @param interval interval in ms
     */
    setPositionUpdateInterval(interval: number): void

    // Conflicting methods

    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstTranscoder-1.0.GstTranscoder.Transcoder

    connect(sigName: "notify::avoid-reencoding", callback: any): number
    on(sigName: "notify::avoid-reencoding", callback: any): number
    once(sigName: "notify::avoid-reencoding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::avoid-reencoding", ...args: any[]): void
    connect(sigName: "notify::dest-uri", callback: any): number
    on(sigName: "notify::dest-uri", callback: any): number
    once(sigName: "notify::dest-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dest-uri", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::pipeline", callback: any): number
    on(sigName: "notify::pipeline", callback: any): number
    once(sigName: "notify::pipeline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pipeline", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::position-update-interval", callback: any): number
    on(sigName: "notify::position-update-interval", callback: any): number
    once(sigName: "notify::position-update-interval", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position-update-interval", ...args: any[]): void
    connect(sigName: "notify::profile", callback: any): number
    on(sigName: "notify::profile", callback: any): number
    once(sigName: "notify::profile", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profile", ...args: any[]): void
    connect(sigName: "notify::src-uri", callback: any): number
    on(sigName: "notify::src-uri", callback: any): number
    once(sigName: "notify::src-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::src-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Transcoder extends Gst.Object {

    // Own properties of GstTranscoder-1.0.GstTranscoder.Transcoder

    static name: string

    // Constructors of GstTranscoder-1.0.GstTranscoder.Transcoder

    constructor(config?: Transcoder.ConstructorProperties) 
    constructor(sourceUri: string, destUri: string, encodingProfile: string) 
    static new(sourceUri: string, destUri: string, encodingProfile: string): Transcoder
    static newFull(sourceUri: string, destUri: string, profile: GstPbutils.EncodingProfile): Transcoder
    _init(config?: Transcoder.ConstructorProperties): void
    static isTranscoderMessage(msg: Gst.Message): boolean
}

export module TranscoderSignalAdapter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `done`
     */
    export interface DoneSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `duration-changed`
     */
    export interface DurationChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (object: GLib.Error, p0: Gst.Structure): void
    }

    /**
     * Signal callback interface for `position-updated`
     */
    export interface PositionUpdatedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (object: TranscoderState): void
    }

    /**
     * Signal callback interface for `warning`
     */
    export interface WarningSignalCallback {
        (object: GLib.Error, p0: Gst.Structure): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TranscoderSignalAdapter {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    /**
     * The #GstTranscoder tracked by the adapter.
     */
    readonly transcoder: Transcoder

    // Owm methods of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    getTranscoder(): Transcoder | null

    // Own signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    connect(sigName: "done", callback: TranscoderSignalAdapter.DoneSignalCallback): number
    on(sigName: "done", callback: TranscoderSignalAdapter.DoneSignalCallback): number
    once(sigName: "done", callback: TranscoderSignalAdapter.DoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "done", ...args: any[]): void
    connect(sigName: "duration-changed", callback: TranscoderSignalAdapter.DurationChangedSignalCallback): number
    on(sigName: "duration-changed", callback: TranscoderSignalAdapter.DurationChangedSignalCallback): number
    once(sigName: "duration-changed", callback: TranscoderSignalAdapter.DurationChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "duration-changed", ...args: any[]): void
    connect(sigName: "error", callback: TranscoderSignalAdapter.ErrorSignalCallback): number
    on(sigName: "error", callback: TranscoderSignalAdapter.ErrorSignalCallback): number
    once(sigName: "error", callback: TranscoderSignalAdapter.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", p0: Gst.Structure, ...args: any[]): void
    connect(sigName: "position-updated", callback: TranscoderSignalAdapter.PositionUpdatedSignalCallback): number
    on(sigName: "position-updated", callback: TranscoderSignalAdapter.PositionUpdatedSignalCallback): number
    once(sigName: "position-updated", callback: TranscoderSignalAdapter.PositionUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "position-updated", ...args: any[]): void
    connect(sigName: "state-changed", callback: TranscoderSignalAdapter.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: TranscoderSignalAdapter.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: TranscoderSignalAdapter.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "warning", callback: TranscoderSignalAdapter.WarningSignalCallback): number
    on(sigName: "warning", callback: TranscoderSignalAdapter.WarningSignalCallback): number
    once(sigName: "warning", callback: TranscoderSignalAdapter.WarningSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "warning", p0: Gst.Structure, ...args: any[]): void

    // Class property signals of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    connect(sigName: "notify::transcoder", callback: any): number
    on(sigName: "notify::transcoder", callback: any): number
    once(sigName: "notify::transcoder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transcoder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Transforms #GstTranscoder bus messages to signals from the adapter object.
 * @class 
 */
export class TranscoderSignalAdapter extends GObject.Object {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    static name: string

    // Constructors of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapter

    constructor(config?: TranscoderSignalAdapter.ConstructorProperties) 
    _init(config?: TranscoderSignalAdapter.ConstructorProperties): void
}

export interface TranscoderClass {

    // Own fields of GstTranscoder-1.0.GstTranscoder.TranscoderClass

    parentClass: Gst.ObjectClass
}

export abstract class TranscoderClass {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderClass

    static name: string
}

export interface TranscoderSignalAdapterClass {

    // Own fields of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass

    parentClass: GObject.ObjectClass
}

export abstract class TranscoderSignalAdapterClass {

    // Own properties of GstTranscoder-1.0.GstTranscoder.TranscoderSignalAdapterClass

    static name: string
}
