
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ClutterGst-1.0
 */

import type * as GstVideo from './GstVideo-0.10.js';
import type * as libxml2 from './libxml2-2.0.js';
import type * as GstBase from './GstBase-0.10.js';
import type * as Gst from './Gst-0.10.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GstInterfaces from './GstInterfaces-0.10.js';
import type * as GstAudio from './GstAudio-0.10.js';
import type * as Clutter from './Clutter-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Different buffering policies clutter-gst supports
 */
export enum BufferingMode {
    /**
     * In-memory buffering
     */
    STREAM,
    /**
     * On-disk buffering
     */
    DOWNLOAD,
}
/**
 * Flags that can be given to clutter_gst_video_texture_set_seek_flags().
 * @bitfield 
 */
export enum SeekFlags {
    /**
     * Fast seeks (key frame boundaries, default)
     */
    NONE,
    /**
     * Accurate seeks (potentially slower)
     */
    ACCURATE,
}
/**
 * ClutterGst major version (e.g. "1", if %CLUTTER_GST_VERSION is "1.2.3")
 */
export const MAJOR_VERSION: number
/**
 * ClutterGst micro version (e.g. "3", if %CLUTTER_GST_VERSION is "1.2.3")
 */
export const MICRO_VERSION: number
/**
 * ClutterGst minor version (e.g. "2", if %CLUTTER_GST_VERSION is "1.2.3")
 */
export const MINOR_VERSION: number
/**
 * ClutterGst full version, encoded as an hexadecimal value.
 */
export const VERSION_HEX: number
/**
 * ClutterGst full version, encoded as a string.
 */
export const VERSION_S: string
/**
 * Utility function to initialize both Clutter and GStreamer.
 * 
 * This function should be called before calling any other GLib functions. If
 * this is not an option, your program must initialise the GLib thread system
 * using g_thread_init() before any other GLib functions are called.
 * @param argv A pointer to an array
 */
export function init(argv?: string[] | null): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * This function does the same work as clutter_gst_init(). Additionally, it
 * allows you to add your own command line options, and it automatically
 * generates nicely formatted --help output. Clutter's and GStreamer's
 * #GOptionGroup<!-- -->s are added to the set of available options.
 * 
 * Your program must initialise the GLib thread system using g_thread_init()
 * before any other GLib functions are called.
 * @param argv A pointer to an array
 * @param parameterString a string which is displayed in the first line of <option>--help</option> output, after <literal><replaceable>programname</replaceable> [OPTION...]</literal>
 * @param entries a %NULL-terminated array of #GOptionEntry<!-- -->s describing the options of your program
 * @param translationDomain a translation domain to use for translating the <option>--help</option> output for the options in `entries` with gettext(), or %NULL
 */
export function initWithArgs(argv: string[] | null, parameterString: string, entries: GLib.OptionEntry, translationDomain: string): [ /* returnType */ Clutter.InitError, /* argv */ string[] | null ]
/**
 * Adds the #ClutterGstPlayer properties to a class and surchages the
 * set/get_property of #GObjectClass. You should call this
 * function at the end of the class_init method of the class
 * implementing #ClutterGstPlayer.
 * @param objectClass a #GObjectClass
 */
export function playerClassInit(objectClass: GObject.ObjectClass): void
export module Player {

    // Signal callback interfaces

    /**
     * Signal callback interface for `download-buffering`
     */
    export interface DownloadBufferingSignalCallback {
        (start: number, stop: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Clutter.Media.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of ClutterGst-1.0.ClutterGst.Player

        /**
         * Index of the current audio stream.
         */
        audioStream?: number | null
        /**
         * Flags to use when seeking.
         */
        seekFlags?: SeekFlags | null
        subtitleTrack?: number | null
        /**
         * The User Agent used by #ClutterGstPlayer with network protocols.
         */
        userAgent?: string | null
    }

}

export interface Player extends Clutter.Media {

    // Own properties of ClutterGst-1.0.ClutterGst.Player

    /**
     * Index of the current audio stream.
     */
    audioStream: number
    /**
     * List of audio streams available on the current media.
     */
    readonly audioStreams: object
    /**
     * Whether the #ClutterGstPlayer is in idle mode.
     */
    readonly idle: boolean
    /**
     * Whether or not the stream is being seeked.
     */
    readonly inSeek: boolean
    /**
     * Flags to use when seeking.
     */
    seekFlags: SeekFlags
    subtitleTrack: number
    readonly subtitleTracks: object
    /**
     * The User Agent used by #ClutterGstPlayer with network protocols.
     */
    userAgent: string

    // Owm methods of ClutterGst-1.0.ClutterGst.Player

    /**
     * Frees the resources created by clutter_gst_player_init(). After
     * clutter_gst_player_deinit() has been called, no other player method can be
     * called on the instance.
     */
    deinit(): void
    // Has conflict: getAudioStream(): number
    // Has conflict: getAudioStreams(): string[]
    // Has conflict: getBufferingMode(): BufferingMode
    // Has conflict: getIdle(): boolean
    // Has conflict: getInSeek(): boolean
    // Has conflict: getPipeline(): Gst.Element
    // Has conflict: getSeekFlags(): SeekFlags
    // Has conflict: getSubtitleTrack(): number
    // Has conflict: getSubtitleTracks(): string[]
    // Has conflict: getUserAgent(): string
    init(): boolean
    // Has conflict: setAudioStream(index: number): void
    // Has conflict: setBufferingMode(mode: BufferingMode): void
    // Has conflict: setSeekFlags(flags: SeekFlags): void
    // Has conflict: setSubtitleTrack(index: number): void
    // Has conflict: setUserAgent(userAgent: string): void

    // Own virtual methods of ClutterGst-1.0.ClutterGst.Player

    downloadBuffering(start: number, stop: number): void
    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     * @virtual 
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     * @virtual 
     */
    getAudioStreams(): string[]
    getBufferingMode(): BufferingMode
    /**
     * Get the idle state of the pipeline.
     * @virtual 
     */
    getIdle(): boolean
    /**
     * Whether the player is seeking.
     * @virtual 
     */
    getInSeek(): boolean
    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     * @virtual 
     */
    getPipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     * @virtual 
     */
    getSeekFlags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     * @virtual 
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     * @virtual 
     */
    getSubtitleTracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     * @virtual 
     */
    getUserAgent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @virtual 
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @virtual 
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @virtual 
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @virtual 
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void

    // Own signals of ClutterGst-1.0.ClutterGst.Player

    connect(sigName: "download-buffering", callback: Player.DownloadBufferingSignalCallback): number
    on(sigName: "download-buffering", callback: Player.DownloadBufferingSignalCallback): number
    once(sigName: "download-buffering", callback: Player.DownloadBufferingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "download-buffering", stop: number, ...args: any[]): void

    // Class property signals of ClutterGst-1.0.ClutterGst.Player

    connect(sigName: "notify::audio-stream", callback: any): number
    on(sigName: "notify::audio-stream", callback: any): number
    once(sigName: "notify::audio-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: any): number
    on(sigName: "notify::audio-streams", callback: any): number
    once(sigName: "notify::audio-streams", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::idle", callback: any): number
    on(sigName: "notify::idle", callback: any): number
    once(sigName: "notify::idle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: any): number
    on(sigName: "notify::in-seek", callback: any): number
    once(sigName: "notify::in-seek", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: any): number
    on(sigName: "notify::seek-flags", callback: any): number
    once(sigName: "notify::seek-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: any): number
    on(sigName: "notify::subtitle-track", callback: any): number
    once(sigName: "notify::subtitle-track", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: any): number
    on(sigName: "notify::subtitle-tracks", callback: any): number
    once(sigName: "notify::subtitle-tracks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: any): number
    on(sigName: "notify::audio-volume", callback: any): number
    once(sigName: "notify::audio-volume", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: any): number
    on(sigName: "notify::buffer-fill", callback: any): number
    once(sigName: "notify::buffer-fill", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: any): number
    on(sigName: "notify::can-seek", callback: any): number
    once(sigName: "notify::can-seek", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: any): number
    on(sigName: "notify::playing", callback: any): number
    once(sigName: "notify::playing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: any): number
    on(sigName: "notify::progress", callback: any): number
    once(sigName: "notify::progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: any): number
    on(sigName: "notify::subtitle-font-name", callback: any): number
    once(sigName: "notify::subtitle-font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: any): number
    on(sigName: "notify::subtitle-uri", callback: any): number
    once(sigName: "notify::subtitle-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * #ClutterGstPlayer is an opaque structure whose members cannot be
 * directly accessed
 * @interface 
 */
export class Player extends GObject.Object {

    // Own properties of ClutterGst-1.0.ClutterGst.Player

    static name: string

    // Constructors of ClutterGst-1.0.ClutterGst.Player

    constructor(config?: Player.ConstructorProperties) 
    _init(config?: Player.ConstructorProperties): void
    /**
     * Adds the #ClutterGstPlayer properties to a class and surchages the
     * set/get_property of #GObjectClass. You should call this
     * function at the end of the class_init method of the class
     * implementing #ClutterGstPlayer.
     * @param objectClass a #GObjectClass
     */
    static classInit(objectClass: GObject.ObjectClass): void
}

export module VideoSink {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ImplementsInterface.ConstructorProperties, GstInterfaces.Navigation.ConstructorProperties, Gst.BaseSink.ConstructorProperties {

        // Own constructor properties of ClutterGst-1.0.ClutterGst.VideoSink

        /**
         * This is the texture the video is decoded into. It can be any
         * #ClutterTexture, however Cluter-Gst has a handy subclass,
         * #ClutterGstVideoTexture, that implements the #ClutterMedia
         * interface.
         */
        texture?: Clutter.Texture | null
        /**
         * Clutter-Gst installs a #GSource to signal that a new frame is ready to
         * the Clutter thread. This property allows to tweak the priority of the
         * source (Lower value is higher priority).
         * 
         * Since 1.0
         */
        updatePriority?: number | null
    }

}

export interface VideoSink extends Gst.ImplementsInterface, GstInterfaces.Navigation {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSink

    /**
     * This is the texture the video is decoded into. It can be any
     * #ClutterTexture, however Cluter-Gst has a handy subclass,
     * #ClutterGstVideoTexture, that implements the #ClutterMedia
     * interface.
     */
    texture: Clutter.Texture
    /**
     * Clutter-Gst installs a #GSource to signal that a new frame is ready to
     * the Clutter thread. This property allows to tweak the priority of the
     * source (Lower value is higher priority).
     * 
     * Since 1.0
     */
    updatePriority: number

    // Conflicting properties

    object: any

    // Conflicting methods

    sendEvent(structure: Gst.Structure): void
    sendEvent(event: Gst.Event): boolean

    // Class property signals of ClutterGst-1.0.ClutterGst.VideoSink

    connect(sigName: "notify::texture", callback: any): number
    on(sigName: "notify::texture", callback: any): number
    once(sigName: "notify::texture", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::texture", ...args: any[]): void
    connect(sigName: "notify::update-priority", callback: any): number
    on(sigName: "notify::update-priority", callback: any): number
    once(sigName: "notify::update-priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::update-priority", ...args: any[]): void
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
 * Class implementing a GStreamer sink element for #ClutterTexture<!-- -->s.
 * 
 * The #ClutterGstVideoSink structure contains only private data and should
 * not be accessed directly.
 * @class 
 */
export class VideoSink extends Gst.BaseSink {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSink

    static name: string

    // Constructors of ClutterGst-1.0.ClutterGst.VideoSink

    constructor(config?: VideoSink.ConstructorProperties) 
    /**
     * Creates a new GStreamer video sink which uses `texture` as the target
     * for sinking a video stream from GStreamer.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     * @param texture a #ClutterTexture
     */
    constructor(texture: Clutter.Texture) 
    /**
     * Creates a new GStreamer video sink which uses `texture` as the target
     * for sinking a video stream from GStreamer.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     * @param texture a #ClutterTexture
     */
    static new(texture: Clutter.Texture): VideoSink
    _init(config?: VideoSink.ConstructorProperties): void
}

export module VideoTexture {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Media.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Player.ConstructorProperties, Clutter.Texture.ConstructorProperties {

        // Own constructor properties of ClutterGst-1.0.ClutterGst.VideoTexture

        pixelAspectRatio?: any | null
    }

}

export interface VideoTexture extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Media, Clutter.Scriptable, Player {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexture

    pixelAspectRatio: any

    // Owm methods of ClutterGst-1.0.ClutterGst.VideoTexture

    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_video_texture_get_audio_streams().
     */
    getAudioStream(): number

    // Overloads of getAudioStream

    /**
     * Get the current audio stream. The number returned in the index of the
     * audio stream playing in the list returned by
     * clutter_gst_player_get_audio_streams().
     * @virtual 
     */
    getAudioStream(): number
    /**
     * Get the list of audio streams of the current media.
     */
    getAudioStreams(): Gst.TagList[]

    // Overloads of getAudioStreams

    /**
     * Get the list of audio streams of the current media.
     * @virtual 
     */
    getAudioStreams(): string[]
    getBufferingMode(): BufferingMode

    // Overloads of getBufferingMode

    getBufferingMode(): BufferingMode
    /**
     * Retrieves the material used to draw when no media is being played.
     */
    getIdleMaterial(): Cogl.Handle
    /**
     * Retrieves the #GstPipeline used by the `texture,` for direct use with
     * GStreamer API.
     */
    getPipeline(): Gst.Element

    // Overloads of getPipeline

    /**
     * Retrieves the #GstPipeline used by the `player,` for direct use with
     * GStreamer API.
     * @virtual 
     */
    getPipeline(): Gst.Element
    /**
     * Get the current value of the seek-flags property.
     */
    getSeekFlags(): SeekFlags

    // Overloads of getSeekFlags

    /**
     * Get the current value of the seek-flags property.
     * @virtual 
     */
    getSeekFlags(): SeekFlags
    /**
     * Get the current subtitles track. The number returned is the index of the
     * subitles track in the list returned by
     * clutter_gst_video_texture_get_subtitle_tracks().
     */
    getSubtitleTrack(): number

    // Overloads of getSubtitleTrack

    /**
     * Get the current subtitles track. The number returned is the index of the
     * subtiles track in the list returned by
     * clutter_gst_player_get_subtitle_tracks().
     * @virtual 
     */
    getSubtitleTrack(): number
    /**
     * Get the list of subtitles tracks of the current media.
     */
    getSubtitleTracks(): Gst.TagList[]

    // Overloads of getSubtitleTracks

    /**
     * Get the list of subtitles tracks of the current media.
     * @virtual 
     */
    getSubtitleTracks(): string[]
    /**
     * Retrieves the user agent used when streaming.
     */
    getUserAgent(): string

    // Overloads of getUserAgent

    /**
     * Retrieves the user agent used when streaming.
     * @virtual 
     */
    getUserAgent(): string
    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_audio_streams().
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void

    // Overloads of setAudioStream

    /**
     * Set the audio stream to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_audio_streams().
     * @virtual 
     * @param index the index of the audio stream
     */
    setAudioStream(index: number): void
    setBufferingMode(mode: BufferingMode): void

    // Overloads of setBufferingMode

    setBufferingMode(mode: BufferingMode): void
    setIdleMaterial(material: Cogl.Handle): void
    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void

    // Overloads of setSeekFlags

    /**
     * Seeking can be done with several trade-offs. Clutter-gst defaults
     * to %CLUTTER_GST_SEEK_FLAG_NONE.
     * @virtual 
     * @param flags a combination of #ClutterGstSeekFlags
     */
    setSeekFlags(flags: SeekFlags): void
    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_video_texture_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void

    // Overloads of setSubtitleTrack

    /**
     * Set the subtitles track to play. `index_` is the index of the stream
     * in the list returned by clutter_gst_player_get_subtitle_tracks().
     * 
     * If `index_` is -1, the subtitles are turned off.
     * @virtual 
     * @param index the index of the subtitles track
     */
    setSubtitleTrack(index: number): void
    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void

    // Overloads of setUserAgent

    /**
     * Sets the user agent to use when streaming.
     * 
     * When streaming content, you might want to set a custom user agent, eg. to
     * promote your software, make it appear in statistics or because the server
     * requires a special user agent you want to impersonate.
     * @virtual 
     * @param userAgent the user agent
     */
    setUserAgent(userAgent: string): void

    // Conflicting methods

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` below `above`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface.
     * 
     * This function calls clutter_container_lower_child() internally.
     * @param above A #ClutterActor to lower below
     */
    lower(above: Clutter.Actor | null): void

    // Overloads of lower

    /**
     * Lowers `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.lower() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_below_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to lower to, or %NULL to lower   to the bottom
     */
    lower(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void
    /**
     * Puts `self` above `below`.
     * 
     * Both actors must have the same parent, and the parent must implement
     * the #ClutterContainer interface
     * 
     * This function calls clutter_container_raise_child() internally.
     * @param below A #ClutterActor to raise above.
     */
    raise(below: Clutter.Actor | null): void

    // Overloads of raise

    /**
     * Raises `actor` to `sibling` level, in the depth ordering.
     * 
     * This function calls the #ClutterContainerIface.raise() virtual function,
     * which has been deprecated. The default implementation will call
     * clutter_actor_set_child_above_sibling().
     * @virtual 
     * @param actor the actor to raise
     * @param sibling the sibling to raise to, or %NULL to raise   to the top
     */
    raise(actor: Clutter.Actor, sibling: Clutter.Actor | null): void

    // Class property signals of ClutterGst-1.0.ClutterGst.VideoTexture

    connect(sigName: "notify::pixel-aspect-ratio", callback: any): number
    on(sigName: "notify::pixel-aspect-ratio", callback: any): number
    once(sigName: "notify::pixel-aspect-ratio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixel-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::disable-slicing", callback: any): number
    on(sigName: "notify::disable-slicing", callback: any): number
    once(sigName: "notify::disable-slicing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-slicing", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::filter-quality", callback: any): number
    on(sigName: "notify::filter-quality", callback: any): number
    once(sigName: "notify::filter-quality", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter-quality", ...args: any[]): void
    connect(sigName: "notify::keep-aspect-ratio", callback: any): number
    on(sigName: "notify::keep-aspect-ratio", callback: any): number
    once(sigName: "notify::keep-aspect-ratio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keep-aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::load-async", callback: any): number
    on(sigName: "notify::load-async", callback: any): number
    once(sigName: "notify::load-async", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::load-async", ...args: any[]): void
    connect(sigName: "notify::load-data-async", callback: any): number
    on(sigName: "notify::load-data-async", callback: any): number
    once(sigName: "notify::load-data-async", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::load-data-async", ...args: any[]): void
    connect(sigName: "notify::pick-with-alpha", callback: any): number
    on(sigName: "notify::pick-with-alpha", callback: any): number
    once(sigName: "notify::pick-with-alpha", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pick-with-alpha", ...args: any[]): void
    connect(sigName: "notify::pixel-format", callback: any): number
    on(sigName: "notify::pixel-format", callback: any): number
    once(sigName: "notify::pixel-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixel-format", ...args: any[]): void
    connect(sigName: "notify::repeat-x", callback: any): number
    on(sigName: "notify::repeat-x", callback: any): number
    once(sigName: "notify::repeat-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repeat-x", ...args: any[]): void
    connect(sigName: "notify::repeat-y", callback: any): number
    on(sigName: "notify::repeat-y", callback: any): number
    once(sigName: "notify::repeat-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::repeat-y", ...args: any[]): void
    connect(sigName: "notify::sync-size", callback: any): number
    on(sigName: "notify::sync-size", callback: any): number
    once(sigName: "notify::sync-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sync-size", ...args: any[]): void
    connect(sigName: "notify::tile-waste", callback: any): number
    on(sigName: "notify::tile-waste", callback: any): number
    once(sigName: "notify::tile-waste", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tile-waste", ...args: any[]): void
    connect(sigName: "notify::actions", callback: any): number
    on(sigName: "notify::actions", callback: any): number
    once(sigName: "notify::actions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::actions", ...args: any[]): void
    connect(sigName: "notify::allocation", callback: any): number
    on(sigName: "notify::allocation", callback: any): number
    once(sigName: "notify::allocation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allocation", ...args: any[]): void
    connect(sigName: "notify::anchor-gravity", callback: any): number
    on(sigName: "notify::anchor-gravity", callback: any): number
    once(sigName: "notify::anchor-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-gravity", ...args: any[]): void
    connect(sigName: "notify::anchor-x", callback: any): number
    on(sigName: "notify::anchor-x", callback: any): number
    once(sigName: "notify::anchor-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-x", ...args: any[]): void
    connect(sigName: "notify::anchor-y", callback: any): number
    on(sigName: "notify::anchor-y", callback: any): number
    once(sigName: "notify::anchor-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anchor-y", ...args: any[]): void
    connect(sigName: "notify::background-color", callback: any): number
    on(sigName: "notify::background-color", callback: any): number
    once(sigName: "notify::background-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-color", ...args: any[]): void
    connect(sigName: "notify::background-color-set", callback: any): number
    on(sigName: "notify::background-color-set", callback: any): number
    once(sigName: "notify::background-color-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-color-set", ...args: any[]): void
    connect(sigName: "notify::child-transform", callback: any): number
    on(sigName: "notify::child-transform", callback: any): number
    once(sigName: "notify::child-transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transform", ...args: any[]): void
    connect(sigName: "notify::child-transform-set", callback: any): number
    on(sigName: "notify::child-transform-set", callback: any): number
    once(sigName: "notify::child-transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-transform-set", ...args: any[]): void
    connect(sigName: "notify::clip", callback: any): number
    on(sigName: "notify::clip", callback: any): number
    once(sigName: "notify::clip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip", ...args: any[]): void
    connect(sigName: "notify::clip-rect", callback: any): number
    on(sigName: "notify::clip-rect", callback: any): number
    once(sigName: "notify::clip-rect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip-rect", ...args: any[]): void
    connect(sigName: "notify::clip-to-allocation", callback: any): number
    on(sigName: "notify::clip-to-allocation", callback: any): number
    once(sigName: "notify::clip-to-allocation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::clip-to-allocation", ...args: any[]): void
    connect(sigName: "notify::constraints", callback: any): number
    on(sigName: "notify::constraints", callback: any): number
    once(sigName: "notify::constraints", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constraints", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-box", callback: any): number
    on(sigName: "notify::content-box", callback: any): number
    once(sigName: "notify::content-box", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-box", ...args: any[]): void
    connect(sigName: "notify::content-gravity", callback: any): number
    on(sigName: "notify::content-gravity", callback: any): number
    once(sigName: "notify::content-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-gravity", ...args: any[]): void
    connect(sigName: "notify::content-repeat", callback: any): number
    on(sigName: "notify::content-repeat", callback: any): number
    once(sigName: "notify::content-repeat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-repeat", ...args: any[]): void
    connect(sigName: "notify::depth", callback: any): number
    on(sigName: "notify::depth", callback: any): number
    once(sigName: "notify::depth", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::depth", ...args: any[]): void
    connect(sigName: "notify::effect", callback: any): number
    on(sigName: "notify::effect", callback: any): number
    once(sigName: "notify::effect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::effect", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::fixed-position-set", callback: any): number
    on(sigName: "notify::fixed-position-set", callback: any): number
    once(sigName: "notify::fixed-position-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-position-set", ...args: any[]): void
    connect(sigName: "notify::fixed-x", callback: any): number
    on(sigName: "notify::fixed-x", callback: any): number
    once(sigName: "notify::fixed-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-x", ...args: any[]): void
    connect(sigName: "notify::fixed-y", callback: any): number
    on(sigName: "notify::fixed-y", callback: any): number
    once(sigName: "notify::fixed-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed-y", ...args: any[]): void
    connect(sigName: "notify::has-clip", callback: any): number
    on(sigName: "notify::has-clip", callback: any): number
    once(sigName: "notify::has-clip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-clip", ...args: any[]): void
    connect(sigName: "notify::has-pointer", callback: any): number
    on(sigName: "notify::has-pointer", callback: any): number
    once(sigName: "notify::has-pointer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-pointer", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
    connect(sigName: "notify::magnification-filter", callback: any): number
    on(sigName: "notify::magnification-filter", callback: any): number
    once(sigName: "notify::magnification-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::magnification-filter", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: any): number
    on(sigName: "notify::mapped", callback: any): number
    once(sigName: "notify::mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: any): number
    on(sigName: "notify::margin-left", callback: any): number
    once(sigName: "notify::margin-left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: any): number
    on(sigName: "notify::margin-right", callback: any): number
    once(sigName: "notify::margin-right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::min-height", callback: any): number
    on(sigName: "notify::min-height", callback: any): number
    once(sigName: "notify::min-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-height", ...args: any[]): void
    connect(sigName: "notify::min-height-set", callback: any): number
    on(sigName: "notify::min-height-set", callback: any): number
    once(sigName: "notify::min-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-height-set", ...args: any[]): void
    connect(sigName: "notify::min-width", callback: any): number
    on(sigName: "notify::min-width", callback: any): number
    once(sigName: "notify::min-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-width", ...args: any[]): void
    connect(sigName: "notify::min-width-set", callback: any): number
    on(sigName: "notify::min-width-set", callback: any): number
    once(sigName: "notify::min-width-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-width-set", ...args: any[]): void
    connect(sigName: "notify::minification-filter", callback: any): number
    on(sigName: "notify::minification-filter", callback: any): number
    once(sigName: "notify::minification-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minification-filter", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::natural-height", callback: any): number
    on(sigName: "notify::natural-height", callback: any): number
    once(sigName: "notify::natural-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-height", ...args: any[]): void
    connect(sigName: "notify::natural-height-set", callback: any): number
    on(sigName: "notify::natural-height-set", callback: any): number
    once(sigName: "notify::natural-height-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-height-set", ...args: any[]): void
    connect(sigName: "notify::natural-width", callback: any): number
    on(sigName: "notify::natural-width", callback: any): number
    once(sigName: "notify::natural-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-width", ...args: any[]): void
    connect(sigName: "notify::natural-width-set", callback: any): number
    on(sigName: "notify::natural-width-set", callback: any): number
    once(sigName: "notify::natural-width-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::natural-width-set", ...args: any[]): void
    connect(sigName: "notify::offscreen-redirect", callback: any): number
    on(sigName: "notify::offscreen-redirect", callback: any): number
    once(sigName: "notify::offscreen-redirect", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::offscreen-redirect", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::pivot-point", callback: any): number
    on(sigName: "notify::pivot-point", callback: any): number
    once(sigName: "notify::pivot-point", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pivot-point", ...args: any[]): void
    connect(sigName: "notify::pivot-point-z", callback: any): number
    on(sigName: "notify::pivot-point-z", callback: any): number
    once(sigName: "notify::pivot-point-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pivot-point-z", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::reactive", callback: any): number
    on(sigName: "notify::reactive", callback: any): number
    once(sigName: "notify::reactive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reactive", ...args: any[]): void
    connect(sigName: "notify::realized", callback: any): number
    on(sigName: "notify::realized", callback: any): number
    once(sigName: "notify::realized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realized", ...args: any[]): void
    connect(sigName: "notify::request-mode", callback: any): number
    on(sigName: "notify::request-mode", callback: any): number
    once(sigName: "notify::request-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::request-mode", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-x", callback: any): number
    on(sigName: "notify::rotation-angle-x", callback: any): number
    once(sigName: "notify::rotation-angle-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-x", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-y", callback: any): number
    on(sigName: "notify::rotation-angle-y", callback: any): number
    once(sigName: "notify::rotation-angle-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-y", ...args: any[]): void
    connect(sigName: "notify::rotation-angle-z", callback: any): number
    on(sigName: "notify::rotation-angle-z", callback: any): number
    once(sigName: "notify::rotation-angle-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-angle-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-x", callback: any): number
    on(sigName: "notify::rotation-center-x", callback: any): number
    once(sigName: "notify::rotation-center-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-x", ...args: any[]): void
    connect(sigName: "notify::rotation-center-y", callback: any): number
    on(sigName: "notify::rotation-center-y", callback: any): number
    once(sigName: "notify::rotation-center-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-y", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z", callback: any): number
    on(sigName: "notify::rotation-center-z", callback: any): number
    once(sigName: "notify::rotation-center-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-z", ...args: any[]): void
    connect(sigName: "notify::rotation-center-z-gravity", callback: any): number
    on(sigName: "notify::rotation-center-z-gravity", callback: any): number
    once(sigName: "notify::rotation-center-z-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation-center-z-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-center-x", callback: any): number
    on(sigName: "notify::scale-center-x", callback: any): number
    once(sigName: "notify::scale-center-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-center-x", ...args: any[]): void
    connect(sigName: "notify::scale-center-y", callback: any): number
    on(sigName: "notify::scale-center-y", callback: any): number
    once(sigName: "notify::scale-center-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-center-y", ...args: any[]): void
    connect(sigName: "notify::scale-gravity", callback: any): number
    on(sigName: "notify::scale-gravity", callback: any): number
    once(sigName: "notify::scale-gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-gravity", ...args: any[]): void
    connect(sigName: "notify::scale-x", callback: any): number
    on(sigName: "notify::scale-x", callback: any): number
    once(sigName: "notify::scale-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-x", ...args: any[]): void
    connect(sigName: "notify::scale-y", callback: any): number
    on(sigName: "notify::scale-y", callback: any): number
    once(sigName: "notify::scale-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-y", ...args: any[]): void
    connect(sigName: "notify::scale-z", callback: any): number
    on(sigName: "notify::scale-z", callback: any): number
    once(sigName: "notify::scale-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-z", ...args: any[]): void
    connect(sigName: "notify::show-on-set-parent", callback: any): number
    on(sigName: "notify::show-on-set-parent", callback: any): number
    once(sigName: "notify::show-on-set-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-on-set-parent", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::text-direction", callback: any): number
    on(sigName: "notify::text-direction", callback: any): number
    once(sigName: "notify::text-direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-direction", ...args: any[]): void
    connect(sigName: "notify::transform", callback: any): number
    on(sigName: "notify::transform", callback: any): number
    once(sigName: "notify::transform", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transform", ...args: any[]): void
    connect(sigName: "notify::transform-set", callback: any): number
    on(sigName: "notify::transform-set", callback: any): number
    once(sigName: "notify::transform-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transform-set", ...args: any[]): void
    connect(sigName: "notify::translation-x", callback: any): number
    on(sigName: "notify::translation-x", callback: any): number
    once(sigName: "notify::translation-x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-x", ...args: any[]): void
    connect(sigName: "notify::translation-y", callback: any): number
    on(sigName: "notify::translation-y", callback: any): number
    once(sigName: "notify::translation-y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-y", ...args: any[]): void
    connect(sigName: "notify::translation-z", callback: any): number
    on(sigName: "notify::translation-z", callback: any): number
    once(sigName: "notify::translation-z", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-z", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::x", callback: any): number
    on(sigName: "notify::x", callback: any): number
    once(sigName: "notify::x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::x-align", callback: any): number
    on(sigName: "notify::x-align", callback: any): number
    once(sigName: "notify::x-align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-align", ...args: any[]): void
    connect(sigName: "notify::x-expand", callback: any): number
    on(sigName: "notify::x-expand", callback: any): number
    once(sigName: "notify::x-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-expand", ...args: any[]): void
    connect(sigName: "notify::y", callback: any): number
    on(sigName: "notify::y", callback: any): number
    once(sigName: "notify::y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::y-align", callback: any): number
    on(sigName: "notify::y-align", callback: any): number
    once(sigName: "notify::y-align", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-align", ...args: any[]): void
    connect(sigName: "notify::y-expand", callback: any): number
    on(sigName: "notify::y-expand", callback: any): number
    once(sigName: "notify::y-expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-expand", ...args: any[]): void
    connect(sigName: "notify::z-position", callback: any): number
    on(sigName: "notify::z-position", callback: any): number
    once(sigName: "notify::z-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::z-position", ...args: any[]): void
    connect(sigName: "notify::audio-volume", callback: any): number
    on(sigName: "notify::audio-volume", callback: any): number
    once(sigName: "notify::audio-volume", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-volume", ...args: any[]): void
    connect(sigName: "notify::buffer-fill", callback: any): number
    on(sigName: "notify::buffer-fill", callback: any): number
    once(sigName: "notify::buffer-fill", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer-fill", ...args: any[]): void
    connect(sigName: "notify::can-seek", callback: any): number
    on(sigName: "notify::can-seek", callback: any): number
    once(sigName: "notify::can-seek", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-seek", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::playing", callback: any): number
    on(sigName: "notify::playing", callback: any): number
    once(sigName: "notify::playing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::playing", ...args: any[]): void
    connect(sigName: "notify::progress", callback: any): number
    on(sigName: "notify::progress", callback: any): number
    once(sigName: "notify::progress", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::progress", ...args: any[]): void
    connect(sigName: "notify::subtitle-font-name", callback: any): number
    on(sigName: "notify::subtitle-font-name", callback: any): number
    once(sigName: "notify::subtitle-font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-font-name", ...args: any[]): void
    connect(sigName: "notify::subtitle-uri", callback: any): number
    on(sigName: "notify::subtitle-uri", callback: any): number
    once(sigName: "notify::subtitle-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-uri", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::audio-stream", callback: any): number
    on(sigName: "notify::audio-stream", callback: any): number
    once(sigName: "notify::audio-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-stream", ...args: any[]): void
    connect(sigName: "notify::audio-streams", callback: any): number
    on(sigName: "notify::audio-streams", callback: any): number
    once(sigName: "notify::audio-streams", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audio-streams", ...args: any[]): void
    connect(sigName: "notify::idle", callback: any): number
    on(sigName: "notify::idle", callback: any): number
    once(sigName: "notify::idle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::idle", ...args: any[]): void
    connect(sigName: "notify::in-seek", callback: any): number
    on(sigName: "notify::in-seek", callback: any): number
    once(sigName: "notify::in-seek", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::in-seek", ...args: any[]): void
    connect(sigName: "notify::seek-flags", callback: any): number
    on(sigName: "notify::seek-flags", callback: any): number
    once(sigName: "notify::seek-flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::seek-flags", ...args: any[]): void
    connect(sigName: "notify::subtitle-track", callback: any): number
    on(sigName: "notify::subtitle-track", callback: any): number
    once(sigName: "notify::subtitle-track", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-track", ...args: any[]): void
    connect(sigName: "notify::subtitle-tracks", callback: any): number
    on(sigName: "notify::subtitle-tracks", callback: any): number
    once(sigName: "notify::subtitle-tracks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle-tracks", ...args: any[]): void
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

/**
 * Subclass of #ClutterTexture that displays videos using GStreamer.
 * 
 * The #ClutterGstVideoTexture structure contains only private data and
 * should not be accessed directly.
 * @class 
 */
export class VideoTexture extends Clutter.Texture {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexture

    static name: string

    // Constructors of ClutterGst-1.0.ClutterGst.VideoTexture

    constructor(config?: VideoTexture.ConstructorProperties) 
    /**
     * Creates a video texture.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     */
    constructor() 
    /**
     * Creates a video texture.
     * 
     * <note>This function has to be called from Clutter's main thread. While
     * GStreamer will spawn threads to do its work, we want all the GL calls to
     * happen in the same thread. Clutter-gst knows which thread it is by
     * assuming this constructor is called from the Clutter thread.</note>
     * @constructor 
     */
    static new(): VideoTexture
    _init(config?: VideoTexture.ConstructorProperties): void
}

export interface PlayerIface {

    // Own fields of ClutterGst-1.0.ClutterGst.PlayerIface

    getPipeline: (player: Player) => Gst.Element
    getUserAgent: (player: Player) => string
    setUserAgent: (player: Player, userAgent: string) => void
    getSeekFlags: (player: Player) => SeekFlags
    setSeekFlags: (player: Player, flags: SeekFlags) => void
    getBufferingMode: (player: Player) => BufferingMode
    setBufferingMode: (player: Player, mode: BufferingMode) => void
    getAudioStreams: (player: Player) => string[]
    getAudioStream: (player: Player) => number
    setAudioStream: (player: Player, index: number) => void
    getSubtitleTracks: (player: Player) => string[]
    getSubtitleTrack: (player: Player) => number
    setSubtitleTrack: (player: Player, index: number) => void
    getIdle: (player: Player) => boolean
    getInSeek: (player: Player) => boolean
    downloadBuffering: (player: Player, start: number, stop: number) => void
}

/**
 * Interface vtable for #ClutterGstPlayer implementations
 * @record 
 */
export abstract class PlayerIface {

    // Own properties of ClutterGst-1.0.ClutterGst.PlayerIface

    static name: string
}

export interface PlayerIfacePrivate {
}

export class PlayerIfacePrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.PlayerIfacePrivate

    static name: string
}

export interface VideoSinkClass {
}

/**
 * Base class for #ClutterGstVideoSink.
 * @record 
 */
export abstract class VideoSinkClass {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSinkClass

    static name: string
}

export interface VideoSinkPrivate {
}

export class VideoSinkPrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoSinkPrivate

    static name: string
}

export interface VideoTextureClass {
}

/**
 * Base class for #ClutterGstVideoTexture.
 * @record 
 */
export abstract class VideoTextureClass {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTextureClass

    static name: string
}

export interface VideoTexturePrivate {
}

export class VideoTexturePrivate {

    // Own properties of ClutterGst-1.0.ClutterGst.VideoTexturePrivate

    static name: string
}
