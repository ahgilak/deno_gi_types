
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPlayer-1.0
 */

import type * as GstVideo from './GstVideo-1.0.js';
import type * as GstBase from './GstBase-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GstTag from './GstTag-1.0.js';
import type * as GstPbutils from './GstPbutils-1.0.js';
import type * as GstAudio from './GstAudio-1.0.js';

export enum PlayerColorBalanceType {
    /**
     * hue or color balance.
     */
    HUE,
    /**
     * brightness or black level.
     */
    BRIGHTNESS,
    /**
     * color saturation or chroma
     * gain.
     */
    SATURATION,
    /**
     * contrast or luma gain.
     */
    CONTRAST,
}
export enum PlayerError {
    /**
     * generic error.
     */
    FAILED,
}
export enum PlayerSnapshotFormat {
    RAW_NATIVE,
    RAW_XRGB,
    RAW_BGRX,
    JPG,
    PNG,
}
export enum PlayerState {
    /**
     * the player is stopped.
     */
    STOPPED,
    /**
     * the player is buffering.
     */
    BUFFERING,
    /**
     * the player is paused.
     */
    PAUSED,
    /**
     * the player is currently playing a
     * stream.
     */
    PLAYING,
}
/**
 * Gets a string representing the given color balance type.
 * @param type a #GstPlayerColorBalanceType
 */
export function playerColorBalanceTypeGetName(type: PlayerColorBalanceType): string
/**
 * Gets a string representing the given error.
 * @param error a #GstPlayerError
 */
export function playerErrorGetName(error: PlayerError): string
export function playerErrorQuark(): GLib.Quark
/**
 * Gets a string representing the given state.
 * @param state a #GstPlayerState
 */
export function playerStateGetName(state: PlayerState): string
export interface PlayerSignalDispatcherFunc {
    (data: object | null): void
}
export module PlayerSignalDispatcher {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayerSignalDispatcher {

    // Own virtual methods of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    dispatch(player: Player, emitter: PlayerSignalDispatcherFunc): void

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PlayerSignalDispatcher extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcher

    constructor(config?: PlayerSignalDispatcher.ConstructorProperties) 
    _init(config?: PlayerSignalDispatcher.ConstructorProperties): void
}

export module PlayerVideoRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayerVideoRenderer {

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PlayerVideoRenderer extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoRenderer

    constructor(config?: PlayerVideoRenderer.ConstructorProperties) 
    _init(config?: PlayerVideoRenderer.ConstructorProperties): void
}

export module Player {

    // Signal callback interfaces

    /**
     * Signal callback interface for `buffering`
     */
    export interface BufferingSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `duration-changed`
     */
    export interface DurationChangedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `end-of-stream`
     */
    export interface EndOfStreamSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `media-info-updated`
     */
    export interface MediaInfoUpdatedSignalCallback {
        (object: PlayerMediaInfo): void
    }

    /**
     * Signal callback interface for `mute-changed`
     */
    export interface MuteChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `position-updated`
     */
    export interface PositionUpdatedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `seek-done`
     */
    export interface SeekDoneSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (object: PlayerState): void
    }

    /**
     * Signal callback interface for `uri-loaded`
     */
    export interface UriLoadedSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `video-dimensions-changed`
     */
    export interface VideoDimensionsChangedSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `volume-changed`
     */
    export interface VolumeChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `warning`
     */
    export interface WarningSignalCallback {
        (object: GLib.Error): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstPlayer-1.0.GstPlayer.Player

        audioVideoOffset?: number | null
        mute?: boolean | null
        rate?: number | null
        signalDispatcher?: PlayerSignalDispatcher | null
        subtitleVideoOffset?: number | null
        suburi?: string | null
        uri?: string | null
        videoMultiviewFlags?: GstVideo.VideoMultiviewFlags | null
        videoMultiviewMode?: GstVideo.VideoMultiviewFramePacking | null
        volume?: number | null
    }

}

export interface Player {

    // Own properties of GstPlayer-1.0.GstPlayer.Player

    audioVideoOffset: number
    readonly currentAudioTrack: PlayerAudioInfo
    readonly currentSubtitleTrack: PlayerSubtitleInfo
    readonly currentVideoTrack: PlayerVideoInfo
    readonly duration: number
    readonly mediaInfo: PlayerMediaInfo
    mute: boolean
    readonly pipeline: Gst.Element
    readonly position: number
    rate: number
    readonly signalDispatcher: PlayerSignalDispatcher
    subtitleVideoOffset: number
    suburi: string
    uri: string
    videoMultiviewFlags: GstVideo.VideoMultiviewFlags
    videoMultiviewMode: GstVideo.VideoMultiviewFramePacking
    readonly videoRenderer: PlayerVideoRenderer
    volume: number

    // Owm methods of GstPlayer-1.0.GstPlayer.Player

    /**
     * Retrieve the current value of audio-video-offset property
     */
    getAudioVideoOffset(): number
    /**
     * Retrieve the current value of the indicated `type`.
     * @param type #GstPlayerColorBalanceType
     */
    getColorBalance(type: PlayerColorBalanceType): number
    /**
     * Get a copy of the current configuration of the player. This configuration
     * can either be modified and used for the gst_player_set_config() call
     * or it must be freed after usage.
     */
    getConfig(): Gst.Structure
    /**
     * A Function to get current audio #GstPlayerAudioInfo instance.
     */
    getCurrentAudioTrack(): PlayerAudioInfo | null
    /**
     * A Function to get current subtitle #GstPlayerSubtitleInfo instance.
     */
    getCurrentSubtitleTrack(): PlayerSubtitleInfo | null
    /**
     * A Function to get current video #GstPlayerVideoInfo instance.
     */
    getCurrentVideoTrack(): PlayerVideoInfo | null
    getCurrentVisualization(): string | null
    /**
     * Retrieves the duration of the media stream that self represents.
     */
    getDuration(): Gst.ClockTime
    /**
     * A Function to get the current media info #GstPlayerMediaInfo instance.
     */
    getMediaInfo(): PlayerMediaInfo | null
    /**
     * Retrieve the current value of the indicated `type`.
     */
    getMultiviewFlags(): GstVideo.VideoMultiviewFlags
    /**
     * Retrieve the current value of the indicated `type`.
     */
    getMultiviewMode(): GstVideo.VideoMultiviewFramePacking
    getMute(): boolean
    getPipeline(): Gst.Element
    getPosition(): Gst.ClockTime
    getRate(): number
    /**
     * current subtitle URI
     */
    getSubtitleUri(): string | null
    /**
     * Retrieve the current value of subtitle-video-offset property
     */
    getSubtitleVideoOffset(): number
    /**
     * Gets the URI of the currently-playing stream.
     */
    getUri(): string | null
    /**
     * Get a snapshot of the currently selected video stream, if any. The format can be
     * selected with `format` and optional configuration is possible with `config`
     * Currently supported settings are:
     * - width, height of type G_TYPE_INT
     * - pixel-aspect-ratio of type GST_TYPE_FRACTION
     *  Except for GST_PLAYER_THUMBNAIL_RAW_NATIVE format, if no config is set, pixel-aspect-ratio would be 1/1
     * @param format output format of the video snapshot
     * @param config Additional configuration
     */
    getVideoSnapshot(format: PlayerSnapshotFormat, config: Gst.Structure | null): Gst.Sample | null
    /**
     * Returns the current volume level, as a percentage between 0 and 1.
     */
    getVolume(): number
    /**
     * Checks whether the `player` has color balance support available.
     */
    hasColorBalance(): boolean
    /**
     * Pauses the current stream.
     */
    pause(): void
    /**
     * Request to play the loaded stream.
     */
    play(): void
    /**
     * Seeks the currently-playing stream to the absolute `position` time
     * in nanoseconds.
     * @param position position to seek in nanoseconds
     */
    seek(position: Gst.ClockTime): void
    setAudioTrack(streamIndex: number): boolean
    /**
     * Enable or disable the current audio track.
     * @param enabled TRUE or FALSE
     */
    setAudioTrackEnabled(enabled: boolean): void
    /**
     * Sets audio-video-offset property by value of `offset`
     * @param offset #gint64 in nanoseconds
     */
    setAudioVideoOffset(offset: number): void
    /**
     * Sets the current value of the indicated channel `type` to the passed
     * value.
     * @param type #GstPlayerColorBalanceType
     * @param value The new value for the `type,` ranged [0,1]
     */
    setColorBalance(type: PlayerColorBalanceType, value: number): void
    /**
     * Set the configuration of the player. If the player is already configured, and
     * the configuration haven't change, this function will return %TRUE. If the
     * player is not in the GST_PLAYER_STATE_STOPPED, this method will return %FALSE
     * and active configuration will remain.
     * 
     * `config` is a #GstStructure that contains the configuration parameters for
     * the player.
     * 
     * This function takes ownership of `config`.
     * @param config a #GstStructure
     */
    setConfig(config: Gst.Structure): boolean
    /**
     * Sets the current value of the indicated mode `type` to the passed
     * value.
     * @param flags The new value for the `type`
     */
    setMultiviewFlags(flags: GstVideo.VideoMultiviewFlags): void
    /**
     * Sets the current value of the indicated mode `type` to the passed
     * value.
     * @param mode The new value for the `type`
     */
    setMultiviewMode(mode: GstVideo.VideoMultiviewFramePacking): void
    /**
     * %TRUE if the currently-playing stream should be muted.
     * @param val Mute state the should be set
     */
    setMute(val: boolean): void
    /**
     * Playback at specified rate
     * @param rate playback rate
     */
    setRate(rate: number): void
    setSubtitleTrack(streamIndex: number): boolean
    /**
     * Enable or disable the current subtitle track.
     * @param enabled TRUE or FALSE
     */
    setSubtitleTrackEnabled(enabled: boolean): void
    /**
     * Sets the external subtitle URI. This should be combined with a call to
     * gst_player_set_subtitle_track_enabled(`player,` TRUE) so the subtitles are actually
     * rendered.
     * @param uri subtitle URI
     */
    setSubtitleUri(uri: string | null): void
    /**
     * Sets subtitle-video-offset property by value of `offset`
     * @param offset #gint64 in nanoseconds
     */
    setSubtitleVideoOffset(offset: number): void
    /**
     * Sets the next URI to play.
     * @param uri next URI to play.
     */
    setUri(uri: string | null): void
    setVideoTrack(streamIndex: number): boolean
    /**
     * Enable or disable the current video track.
     * @param enabled TRUE or FALSE
     */
    setVideoTrackEnabled(enabled: boolean): void
    setVisualization(name: string | null): boolean
    /**
     * Enable or disable the visualization.
     * @param enabled TRUE or FALSE
     */
    setVisualizationEnabled(enabled: boolean): void
    /**
     * Sets the volume level of the stream as a percentage between 0 and 1.
     * 
     * This volume is a linear factor. For showing the volume in a GUI it
     * might make sense to first convert from a different format. Volume sliders
     * should usually use a cubic volume. See gst_stream_volume_convert_volume().
     * @param val the new volume level, as a percentage between 0 and 1
     */
    setVolume(val: number): void
    /**
     * Stops playing the current stream and resets to the first position
     * in the stream.
     */
    stop(): void

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

    // Own signals of GstPlayer-1.0.GstPlayer.Player

    connect(sigName: "buffering", callback: Player.BufferingSignalCallback): number
    on(sigName: "buffering", callback: Player.BufferingSignalCallback): number
    once(sigName: "buffering", callback: Player.BufferingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "buffering", ...args: any[]): void
    connect(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback): number
    on(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback): number
    once(sigName: "duration-changed", callback: Player.DurationChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "duration-changed", ...args: any[]): void
    connect(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback): number
    on(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback): number
    once(sigName: "end-of-stream", callback: Player.EndOfStreamSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "end-of-stream", ...args: any[]): void
    connect(sigName: "error", callback: Player.ErrorSignalCallback): number
    on(sigName: "error", callback: Player.ErrorSignalCallback): number
    once(sigName: "error", callback: Player.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback): number
    on(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback): number
    once(sigName: "media-info-updated", callback: Player.MediaInfoUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "media-info-updated", ...args: any[]): void
    connect(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback): number
    on(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback): number
    once(sigName: "mute-changed", callback: Player.MuteChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "mute-changed", ...args: any[]): void
    connect(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback): number
    on(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback): number
    once(sigName: "position-updated", callback: Player.PositionUpdatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "position-updated", ...args: any[]): void
    connect(sigName: "seek-done", callback: Player.SeekDoneSignalCallback): number
    on(sigName: "seek-done", callback: Player.SeekDoneSignalCallback): number
    once(sigName: "seek-done", callback: Player.SeekDoneSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "seek-done", ...args: any[]): void
    connect(sigName: "state-changed", callback: Player.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: Player.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: Player.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", ...args: any[]): void
    connect(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback): number
    on(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback): number
    once(sigName: "uri-loaded", callback: Player.UriLoadedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "uri-loaded", ...args: any[]): void
    connect(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback): number
    on(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback): number
    once(sigName: "video-dimensions-changed", callback: Player.VideoDimensionsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "video-dimensions-changed", p0: number, ...args: any[]): void
    connect(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback): number
    on(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback): number
    once(sigName: "volume-changed", callback: Player.VolumeChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "volume-changed", ...args: any[]): void
    connect(sigName: "warning", callback: Player.WarningSignalCallback): number
    on(sigName: "warning", callback: Player.WarningSignalCallback): number
    once(sigName: "warning", callback: Player.WarningSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "warning", ...args: any[]): void

    // Class property signals of GstPlayer-1.0.GstPlayer.Player

    connect(sigName: "notify::audio-video-offset", callback: any): number
    on(sigName: "notify::audio-video-offset", callback: any): number
    once(sigName: "notify::audio-video-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-video-offset", ...args: any[]): void
    connect(sigName: "notify::current-audio-track", callback: any): number
    on(sigName: "notify::current-audio-track", callback: any): number
    once(sigName: "notify::current-audio-track", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-audio-track", ...args: any[]): void
    connect(sigName: "notify::current-subtitle-track", callback: any): number
    on(sigName: "notify::current-subtitle-track", callback: any): number
    once(sigName: "notify::current-subtitle-track", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-subtitle-track", ...args: any[]): void
    connect(sigName: "notify::current-video-track", callback: any): number
    on(sigName: "notify::current-video-track", callback: any): number
    once(sigName: "notify::current-video-track", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-video-track", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::media-info", callback: any): number
    on(sigName: "notify::media-info", callback: any): number
    once(sigName: "notify::media-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-info", ...args: any[]): void
    connect(sigName: "notify::mute", callback: any): number
    on(sigName: "notify::mute", callback: any): number
    once(sigName: "notify::mute", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mute", ...args: any[]): void
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
    connect(sigName: "notify::rate", callback: any): number
    on(sigName: "notify::rate", callback: any): number
    once(sigName: "notify::rate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rate", ...args: any[]): void
    connect(sigName: "notify::signal-dispatcher", callback: any): number
    on(sigName: "notify::signal-dispatcher", callback: any): number
    once(sigName: "notify::signal-dispatcher", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::signal-dispatcher", ...args: any[]): void
    connect(sigName: "notify::subtitle-video-offset", callback: any): number
    on(sigName: "notify::subtitle-video-offset", callback: any): number
    once(sigName: "notify::subtitle-video-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-video-offset", ...args: any[]): void
    connect(sigName: "notify::suburi", callback: any): number
    on(sigName: "notify::suburi", callback: any): number
    once(sigName: "notify::suburi", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::suburi", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::video-multiview-flags", callback: any): number
    on(sigName: "notify::video-multiview-flags", callback: any): number
    once(sigName: "notify::video-multiview-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-multiview-flags", ...args: any[]): void
    connect(sigName: "notify::video-multiview-mode", callback: any): number
    on(sigName: "notify::video-multiview-mode", callback: any): number
    once(sigName: "notify::video-multiview-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-multiview-mode", ...args: any[]): void
    connect(sigName: "notify::video-renderer", callback: any): number
    on(sigName: "notify::video-renderer", callback: any): number
    once(sigName: "notify::video-renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-renderer", ...args: any[]): void
    connect(sigName: "notify::volume", callback: any): number
    on(sigName: "notify::volume", callback: any): number
    once(sigName: "notify::volume", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::volume", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Starting from GStreamer 1.20, application developers are strongly advised to migrate to #GstPlay.
 * #GstPlayer will be deprecated in 1.20 and most likely removed by 1.24.
 * @class 
 */
export class Player extends Gst.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.Player

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.Player

    constructor(config?: Player.ConstructorProperties) 
    /**
     * Creates a new #GstPlayer instance that uses `signal_dispatcher` to dispatch
     * signals to some event loop system, or emits signals directly if NULL is
     * passed. See gst_player_g_main_context_signal_dispatcher_new().
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayerVideoRenderer to use
     * @param signalDispatcher GstPlayerSignalDispatcher to use
     */
    constructor(videoRenderer: PlayerVideoRenderer | null, signalDispatcher: PlayerSignalDispatcher | null) 
    /**
     * Creates a new #GstPlayer instance that uses `signal_dispatcher` to dispatch
     * signals to some event loop system, or emits signals directly if NULL is
     * passed. See gst_player_g_main_context_signal_dispatcher_new().
     * 
     * Video is going to be rendered by `video_renderer,` or if %NULL is provided
     * no special video set up will be done and some default handling will be
     * performed.
     * @constructor 
     * @param videoRenderer GstPlayerVideoRenderer to use
     * @param signalDispatcher GstPlayerSignalDispatcher to use
     */
    static new(videoRenderer: PlayerVideoRenderer | null, signalDispatcher: PlayerSignalDispatcher | null): Player
    _init(config?: Player.ConstructorProperties): void
    static configGetPositionUpdateInterval(config: Gst.Structure): number
    static configGetSeekAccurate(config: Gst.Structure): boolean
    /**
     * Return the user agent which has been configured using
     * gst_player_config_set_user_agent() if any.
     * @param config a #GstPlayer configuration
     */
    static configGetUserAgent(config: Gst.Structure): string | null
    /**
     * set interval in milliseconds between two position-updated signals.
     * pass 0 to stop updating the position.
     * @param config a #GstPlayer configuration
     * @param interval interval in ms
     */
    static configSetPositionUpdateInterval(config: Gst.Structure, interval: number): void
    /**
     * Enable or disable accurate seeking. When enabled, elements will try harder
     * to seek as accurately as possible to the requested seek position. Generally
     * it will be slower especially for formats that don't have any indexes or
     * timestamp markers in the stream.
     * 
     * If accurate seeking is disabled, elements will seek as close as the request
     * position without slowing down seeking too much.
     * 
     * Accurate seeking is disabled by default.
     * @param config a #GstPlayer configuration
     * @param accurate accurate seek or not
     */
    static configSetSeekAccurate(config: Gst.Structure, accurate: boolean): void
    /**
     * Set the user agent to pass to the server if `player` needs to connect
     * to a server during playback. This is typically used when playing HTTP
     * or RTSP streams.
     * @param config a #GstPlayer configuration
     * @param agent the string to use as user agent
     */
    static configSetUserAgent(config: Gst.Structure, agent: string | null): void
    static getAudioStreams(info: PlayerMediaInfo): PlayerAudioInfo[]
    static getSubtitleStreams(info: PlayerMediaInfo): PlayerSubtitleInfo[]
    static getVideoStreams(info: PlayerMediaInfo): PlayerVideoInfo[]
    /**
     * Frees a %NULL terminated array of #GstPlayerVisualization.
     * @param viss a %NULL terminated array of #GstPlayerVisualization to free
     */
    static visualizationsFree(viss: PlayerVisualization): void
    static visualizationsGet(): PlayerVisualization[]
}

export module PlayerAudioInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
    }

}

export interface PlayerAudioInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    getBitrate(): number
    getChannels(): number
    getLanguage(): string | null
    getMaxBitrate(): number
    getSampleRate(): number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstPlayerStreamInfo specific to audio streams.
 * @class 
 */
export class PlayerAudioInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerAudioInfo

    constructor(config?: PlayerAudioInfo.ConstructorProperties) 
    _init(config?: PlayerAudioInfo.ConstructorProperties): void
}

export module PlayerGMainContextSignalDispatcher {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayerSignalDispatcher.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

        applicationContext?: GLib.MainContext | null
    }

}

export interface PlayerGMainContextSignalDispatcher extends PlayerSignalDispatcher {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    readonly applicationContext: GLib.MainContext

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    connect(sigName: "notify::application-context", callback: any): number
    on(sigName: "notify::application-context", callback: any): number
    once(sigName: "notify::application-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application-context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PlayerGMainContextSignalDispatcher extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcher

    constructor(config?: PlayerGMainContextSignalDispatcher.ConstructorProperties) 
    _init(config?: PlayerGMainContextSignalDispatcher.ConstructorProperties): void
    /**
     * Creates a new GstPlayerSignalDispatcher that uses `application_context,`
     * or the thread default one if %NULL is used. See gst_player_new().
     * @param applicationContext GMainContext to use or %NULL
     */
    static new(applicationContext: GLib.MainContext | null): PlayerSignalDispatcher
}

export module PlayerMediaInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayerMediaInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    getAudioStreams(): PlayerAudioInfo[]
    getContainerFormat(): string | null
    getDuration(): Gst.ClockTime
    /**
     * Function to get the image (or preview-image) stored in taglist.
     * Application can use `gst_sample_*_()` API's to get caps, buffer etc.
     */
    getImageSample(): Gst.Sample | null
    getNumberOfAudioStreams(): number
    getNumberOfStreams(): number
    getNumberOfSubtitleStreams(): number
    getNumberOfVideoStreams(): number
    getStreamList(): PlayerStreamInfo[]
    getSubtitleStreams(): PlayerSubtitleInfo[]
    getTags(): Gst.TagList | null
    getTitle(): string | null
    getUri(): string
    getVideoStreams(): PlayerVideoInfo[]
    isLive(): boolean
    isSeekable(): boolean

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Structure containing the media information of a URI.
 * @class 
 */
export class PlayerMediaInfo extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerMediaInfo

    constructor(config?: PlayerMediaInfo.ConstructorProperties) 
    _init(config?: PlayerMediaInfo.ConstructorProperties): void
}

export module PlayerStreamInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PlayerStreamInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    getCaps(): Gst.Caps | null
    /**
     * A string describing codec used in #GstPlayerStreamInfo.
     */
    getCodec(): string | null
    /**
     * Function to get stream index from #GstPlayerStreamInfo instance or -1 if
     * unknown.
     */
    getIndex(): number
    /**
     * Function to return human readable name for the stream type
     * of the given `info` (ex: "audio", "video", "subtitle")
     */
    getStreamType(): string
    getTags(): Gst.TagList | null

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Base structure for information concerning a media stream. Depending on
 * the stream type, one can find more media-specific information in
 * #GstPlayerVideoInfo, #GstPlayerAudioInfo, #GstPlayerSubtitleInfo.
 * @class 
 */
export class PlayerStreamInfo extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerStreamInfo

    constructor(config?: PlayerStreamInfo.ConstructorProperties) 
    _init(config?: PlayerStreamInfo.ConstructorProperties): void
}

export module PlayerSubtitleInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
    }

}

export interface PlayerSubtitleInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    getLanguage(): string | null

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstPlayerStreamInfo specific to subtitle streams.
 * @class 
 */
export class PlayerSubtitleInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfo

    constructor(config?: PlayerSubtitleInfo.ConstructorProperties) 
    _init(config?: PlayerSubtitleInfo.ConstructorProperties): void
}

export module PlayerVideoInfo {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayerStreamInfo.ConstructorProperties {
    }

}

export interface PlayerVideoInfo {

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    getBitrate(): number
    getFramerate(): [ /* fpsN */ number, /* fpsD */ number ]
    getHeight(): number
    getMaxBitrate(): number
    /**
     * Returns the pixel aspect ratio in `par_n` and `par_d`
     */
    getPixelAspectRatio(): [ /* parN */ number, /* parD */ number ]
    getWidth(): number

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #GstPlayerStreamInfo specific to video streams.
 * @class 
 */
export class PlayerVideoInfo extends PlayerStreamInfo {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoInfo

    constructor(config?: PlayerVideoInfo.ConstructorProperties) 
    _init(config?: PlayerVideoInfo.ConstructorProperties): void
}

export module PlayerVideoOverlayVideoRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends PlayerVideoRenderer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

        videoSink?: Gst.Element | null
        windowHandle?: object | null
    }

}

export interface PlayerVideoOverlayVideoRenderer extends PlayerVideoRenderer {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    videoSink: Gst.Element
    windowHandle: object

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    /**
     * Tell an overlay that it has been exposed. This will redraw the current frame
     * in the drawable even if the pipeline is PAUSED.
     */
    expose(): void
    /**
     * Return the currently configured render rectangle. See gst_player_video_overlay_video_renderer_set_render_rectangle()
     * for details.
     */
    getRenderRectangle(): [ /* x */ number, /* y */ number, /* width */ number, /* height */ number ]
    getWindowHandle(): object | null
    /**
     * Configure a subregion as a video target within the window set by
     * gst_player_video_overlay_video_renderer_set_window_handle(). If this is not
     * used or not supported the video will fill the area of the window set as the
     * overlay to 100%. By specifying the rectangle, the video can be overlaid to
     * a specific region of that window only. After setting the new rectangle one
     * should call gst_player_video_overlay_video_renderer_expose() to force a
     * redraw. To unset the region pass -1 for the `width` and `height` parameters.
     * 
     * This method is needed for non fullscreen video overlay in UI toolkits that
     * do not support subwindows.
     * @param x the horizontal offset of the render area inside the window
     * @param y the vertical offset of the render area inside the window
     * @param width the width of the render area inside the window
     * @param height the height of the render area inside the window
     */
    setRenderRectangle(x: number, y: number, width: number, height: number): void
    /**
     * Sets the platform specific window handle into which the video
     * should be rendered
     * @param windowHandle handle referencing to the platform specific window
     */
    setWindowHandle(windowHandle: object | null): void

    // Class property signals of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    connect(sigName: "notify::video-sink", callback: any): number
    on(sigName: "notify::video-sink", callback: any): number
    once(sigName: "notify::video-sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-sink", ...args: any[]): void
    connect(sigName: "notify::window-handle", callback: any): number
    on(sigName: "notify::window-handle", callback: any): number
    once(sigName: "notify::window-handle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-handle", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PlayerVideoOverlayVideoRenderer extends GObject.Object {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    static name: string

    // Constructors of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRenderer

    constructor(config?: PlayerVideoOverlayVideoRenderer.ConstructorProperties) 
    _init(config?: PlayerVideoOverlayVideoRenderer.ConstructorProperties): void
    static new(windowHandle: object | null): PlayerVideoRenderer
    static newWithSink(windowHandle: object | null, videoSink: Gst.Element): PlayerVideoRenderer
}

export interface PlayerAudioInfoClass {
}

export abstract class PlayerAudioInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerAudioInfoClass

    static name: string
}

export interface PlayerClass {
}

export abstract class PlayerClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerClass

    static name: string
}

export interface PlayerGMainContextSignalDispatcherClass {
}

export abstract class PlayerGMainContextSignalDispatcherClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerGMainContextSignalDispatcherClass

    static name: string
}

export interface PlayerMediaInfoClass {
}

export abstract class PlayerMediaInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerMediaInfoClass

    static name: string
}

export interface PlayerSignalDispatcherInterface {

    // Own fields of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcherInterface

    parentIface: GObject.TypeInterface
    dispatch: (self: PlayerSignalDispatcher, player: Player, emitter: PlayerSignalDispatcherFunc) => void
}

export abstract class PlayerSignalDispatcherInterface {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSignalDispatcherInterface

    static name: string
}

export interface PlayerStreamInfoClass {
}

export abstract class PlayerStreamInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerStreamInfoClass

    static name: string
}

export interface PlayerSubtitleInfoClass {
}

export abstract class PlayerSubtitleInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerSubtitleInfoClass

    static name: string
}

export interface PlayerVideoInfoClass {
}

export abstract class PlayerVideoInfoClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoInfoClass

    static name: string
}

export interface PlayerVideoOverlayVideoRendererClass {
}

export abstract class PlayerVideoOverlayVideoRendererClass {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoOverlayVideoRendererClass

    static name: string
}

export interface PlayerVideoRendererInterface {

    // Own fields of GstPlayer-1.0.GstPlayer.PlayerVideoRendererInterface

    parentIface: GObject.TypeInterface
}

export abstract class PlayerVideoRendererInterface {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVideoRendererInterface

    static name: string
}

export interface PlayerVisualization {

    // Own fields of GstPlayer-1.0.GstPlayer.PlayerVisualization

    /**
     * name of the visualization.
     * @field 
     */
    name: string
    /**
     * description of the visualization.
     * @field 
     */
    description: string

    // Owm methods of GstPlayer-1.0.GstPlayer.PlayerVisualization

    /**
     * Makes a copy of the #GstPlayerVisualization. The result must be
     * freed using gst_player_visualization_free().
     */
    copy(): PlayerVisualization
    /**
     * Frees a #GstPlayerVisualization.
     */
    free(): void
}

/**
 * A #GstPlayerVisualization descriptor.
 * @record 
 */
export class PlayerVisualization {

    // Own properties of GstPlayer-1.0.GstPlayer.PlayerVisualization

    static name: string
}
