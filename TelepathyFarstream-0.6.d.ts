
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TelepathyFarstream-0.6
 */

import type * as TelepathyGLib from './TelepathyGLib-0.12.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Farstream from './Farstream-0.2.js';

export module Channel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `content-added`
     */
    export interface ContentAddedSignalCallback {
        (content: Content): void
    }

    /**
     * Signal callback interface for `content-removed`
     */
    export interface ContentRemovedSignalCallback {
        (content: Content): void
    }

    /**
     * Signal callback interface for `fs-conference-added`
     */
    export interface FsConferenceAddedSignalCallback {
        (conf: Farstream.Conference): void
    }

    /**
     * Signal callback interface for `fs-conference-removed`
     */
    export interface FsConferenceRemovedSignalCallback {
        (conf: Farstream.Conference): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

        channel?: TelepathyGLib.Channel | null
    }

}

export interface Channel extends Gio.AsyncInitable {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    readonly channel: TelepathyGLib.Channel
    readonly fsConferences: object[]
    readonly objectPath: string

    // Owm methods of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    /**
     * You must call this function on call messages received on the async bus.
     * #GstMessages are not modified.
     * @param message A #GstMessage received from the bus
     */
    busMessage(message: Gst.Message): boolean

    // Own signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    connect(sigName: "closed", callback: Channel.ClosedSignalCallback): number
    on(sigName: "closed", callback: Channel.ClosedSignalCallback): number
    once(sigName: "closed", callback: Channel.ClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): number
    on(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): number
    once(sigName: "content-added", callback: Channel.ContentAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "content-added", ...args: any[]): void
    connect(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): number
    on(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): number
    once(sigName: "content-removed", callback: Channel.ContentRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "content-removed", ...args: any[]): void
    connect(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): number
    on(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): number
    once(sigName: "fs-conference-added", callback: Channel.FsConferenceAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "fs-conference-added", ...args: any[]): void
    connect(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): number
    on(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): number
    once(sigName: "fs-conference-removed", callback: Channel.FsConferenceRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "fs-conference-removed", ...args: any[]): void

    // Class property signals of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    connect(sigName: "notify::channel", callback: any): number
    on(sigName: "notify::channel", callback: any): number
    once(sigName: "notify::channel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::channel", ...args: any[]): void
    connect(sigName: "notify::fs-conferences", callback: any): number
    on(sigName: "notify::fs-conferences", callback: any): number
    once(sigName: "notify::fs-conferences", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fs-conferences", ...args: any[]): void
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

/**
 * All members of the object are private
 * @class 
 */
export class Channel extends GObject.Object {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    static name: string

    // Constructors of TelepathyFarstream-0.6.TelepathyFarstream.Channel

    constructor(config?: Channel.ConstructorProperties) 
    /**
     * Completes the construction of a TfChannel.
     * @constructor 
     * @param object The #GObject
     * @param result a #GAsyncResult
     */
    static newFinish(object: GObject.Object, result: Gio.AsyncResult): Channel
    _init(config?: Channel.ConstructorProperties): void
    /**
     * Creates a new #TfChannel from an existing channel proxy, the new
     * TfChannel object will be return in the async callback.
     * 
     * The user must call tf_channel_new_finish() in the callback
     * to get the finished object.
     * @param channelProxy a #TpChannel proxy
     * @param callback a #GAsyncReadyCallback to call when the channel is ready
     */
    static newAsync(channelProxy: TelepathyGLib.Channel, callback: Gio.AsyncReadyCallback | null): void
}

export module Content {

    // Signal callback interfaces

    /**
     * Signal callback interface for `restart-source`
     */
    export interface RestartSourceSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `src-pad-added`
     */
    export interface SrcPadAddedSignalCallback {
        (handle: number, stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec): void
    }

    /**
     * Signal callback interface for `start-receiving`
     */
    export interface StartReceivingSignalCallback {
        (handles: object, handleCount: number): boolean
    }

    /**
     * Signal callback interface for `start-sending`
     */
    export interface StartSendingSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `stop-receiving`
     */
    export interface StopReceivingSignalCallback {
        (handles: object, handleCount: number): void
    }

    /**
     * Signal callback interface for `stop-sending`
     */
    export interface StopSendingSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Content {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Content

    readonly fsConference: Farstream.Conference
    readonly fsSession: Farstream.Session
    readonly mediaType: Farstream.MediaType
    readonly objectPath: string
    readonly sinkPad: Gst.Pad
    readonly tfChannel: Channel

    // Owm methods of TelepathyFarstream-0.6.TelepathyFarstream.Content

    /**
     * Send a fatal streaming error to the Content to the CM, the effect is most
     * likely that the content will be removed.
     * @param message error Message
     */
    error(message: string): void
    /**
     * Provides a iterator that can be used to iterate through all of the src
     * pads that are are used to receive from a group of Telepathy handles.
     * @param handles a 0 terminated array of #guint representing Telepathy handles
     * @param handleCount the numner of handles in `handles`
     */
    iterateSrcPads(handles: number, handleCount: number): Gst.Iterator
    /**
     * Informs the Connection Manager that receiving has failed for this
     * content. This is a transient error and it may or not not end the Content
     * and the call.
     * 
     * If handles are not specific, it assumes that it is valid for all handles.
     * @param handles an array of #guint representing Telepathy handles, may be %NULL
     * @param handleCount the numner of handles in `handles`
     * @param message The error message
     */
    receivingFailed(handles: number, handleCount: number, message: string): void
    /**
     * Informs the Connection Manager that sending has failed for this
     * content. This is a transient error and it may or not not end the Content
     * and the call.
     * @param message The error message
     */
    sendingFailed(message: string): void

    // Own signals of TelepathyFarstream-0.6.TelepathyFarstream.Content

    connect(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): number
    on(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): number
    once(sigName: "restart-source", callback: Content.RestartSourceSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "restart-source", ...args: any[]): void
    connect(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): number
    on(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): number
    once(sigName: "src-pad-added", callback: Content.SrcPadAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "src-pad-added", stream: Farstream.Stream, pad: Gst.Pad, codec: Farstream.Codec, ...args: any[]): void
    connect(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): number
    on(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): number
    once(sigName: "start-receiving", callback: Content.StartReceivingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "start-receiving", handleCount: number, ...args: any[]): void
    connect(sigName: "start-sending", callback: Content.StartSendingSignalCallback): number
    on(sigName: "start-sending", callback: Content.StartSendingSignalCallback): number
    once(sigName: "start-sending", callback: Content.StartSendingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "start-sending", ...args: any[]): void
    connect(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): number
    on(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): number
    once(sigName: "stop-receiving", callback: Content.StopReceivingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "stop-receiving", handleCount: number, ...args: any[]): void
    connect(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): number
    on(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): number
    once(sigName: "stop-sending", callback: Content.StopSendingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "stop-sending", ...args: any[]): void

    // Class property signals of TelepathyFarstream-0.6.TelepathyFarstream.Content

    connect(sigName: "notify::fs-conference", callback: any): number
    on(sigName: "notify::fs-conference", callback: any): number
    once(sigName: "notify::fs-conference", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fs-conference", ...args: any[]): void
    connect(sigName: "notify::fs-session", callback: any): number
    on(sigName: "notify::fs-session", callback: any): number
    once(sigName: "notify::fs-session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fs-session", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: any): number
    on(sigName: "notify::media-type", callback: any): number
    once(sigName: "notify::media-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::sink-pad", callback: any): number
    on(sigName: "notify::sink-pad", callback: any): number
    once(sigName: "notify::sink-pad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink-pad", ...args: any[]): void
    connect(sigName: "notify::tf-channel", callback: any): number
    on(sigName: "notify::tf-channel", callback: any): number
    once(sigName: "notify::tf-channel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tf-channel", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * This structure is private, this class is not subclassable.
 * @class 
 */
export class Content extends GObject.Object {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.Content

    static name: string

    // Constructors of TelepathyFarstream-0.6.TelepathyFarstream.Content

    constructor(config?: Content.ConstructorProperties) 
    _init(config?: Content.ConstructorProperties): void
}

export interface ChannelClass {
}

/**
 * There are no overridable functions
 * @record 
 */
export abstract class ChannelClass {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ChannelClass

    static name: string
}

export interface ChannelPrivate {
}

export class ChannelPrivate {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ChannelPrivate

    static name: string
}

export interface ContentClass {
}

/**
 * This structure is private, this class is not subclassable.
 * @record 
 */
export abstract class ContentClass {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ContentClass

    static name: string
}

export interface ContentPrivate {
}

export class ContentPrivate {

    // Own properties of TelepathyFarstream-0.6.TelepathyFarstream.ContentPrivate

    static name: string
}
