
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVnc-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum AudioFormatType {
    U8,
    S8,
    U16,
    S16,
    U32,
    S32,
}
export enum ConnectionAuth {
    INVALID,
    /**
     * No authentication is needed and protocol data is to be sent unencrypted.
     */
    NONE,
    /**
     * VNC authentication is to be used and protocol data is to be sent unencrypted.
     */
    VNC,
    /**
     * RealVNC authentication.
     */
    RA2,
    /**
     * RealVNC authentication.
     */
    RA2NE,
    /**
     * The Tight security type is a generic protocol extension.
     */
    TIGHT,
    /**
     * Ultra authentication.
     */
    ULTRA,
    /**
     * TLS authentication.
     */
    TLS,
    /**
     * The VeNCrypt security type is a generic authentication method which encapsulates multiple authentication subtypes.
     */
    VENCRYPT,
    /**
     * SASL authentication.
     */
    SASL,
    /**
     * Apple remote desktop (screen sharing) authentication.
     */
    ARD,
    /**
     * Authentication used by UltraVNC.
     */
    MSLOGONII,
    /**
     * Authentication used by UltraVNC.
     */
    MSLOGON,
}
export enum ConnectionAuthVencrypt {
    PLAIN,
    TLSNONE,
    TLSVNC,
    TLSPLAIN,
    X509NONE,
    X509VNC,
    X509PLAIN,
    X509SASL,
    TLSSASL,
}
export enum ConnectionCredential {
    PASSWORD,
    USERNAME,
    CLIENTNAME,
}
export enum ConnectionEncoding {
    RAW,
    COPY_RECT,
    RRE,
    CORRE,
    HEXTILE,
    TIGHT,
    ZRLE,
    TIGHT_JPEG0,
    TIGHT_JPEG1,
    TIGHT_JPEG2,
    TIGHT_JPEG3,
    TIGHT_JPEG4,
    TIGHT_JPEG5,
    TIGHT_JPEG6,
    TIGHT_JPEG7,
    TIGHT_JPEG8,
    TIGHT_JPEG9,
    DESKTOP_RESIZE,
    LAST_RECT,
    WMVI,
    CURSOR_POS,
    RICH_CURSOR,
    XCURSOR,
    POINTER_CHANGE,
    EXT_KEY_EVENT,
    AUDIO,
    LED_STATE,
    DESKTOP_NAME,
    EXTENDED_DESKTOP_RESIZE,
    XVP,
    ALPHA_CURSOR,
}
export enum ConnectionPowerAction {
    SHUTDOWN,
    REBOOT,
    RESET,
}
export enum ConnectionResizeStatus {
    UNSUPPORTED,
    OK,
    ADMIN_PROHIBITED,
    OUT_OF_RESOURCES,
    INVALID_LAOUT,
    FORWARDED,
}
export const LEDSTATE_CAPS_LOCK: number
export const LEDSTATE_NUM_LOCK: number
export const LEDSTATE_SCROLL_LOCK: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
export const PADDING: number
export const PADDING_LARGE: number
/**
 * Check whether the library is at least as new as the
 * version (`major,` `minor,` `micro)`
 * @param major the desired major version
 * @param minor the desired minor version
 * @param micro the desired micro version
 */
export function utilCheckVersion(major: number, minor: number, micro: number): boolean
/**
 * Determine whether the VNC code will emit verbose
 * debug messages
 */
export function utilGetDebug(): boolean
/**
 * Get the encoded version number of the library release.
 * The major, minor and micro components are encoded in
 * 8-bits each.
 */
export function utilGetVersion(): number
/**
 * Get the library version number in a printable
 * string format
 */
export function utilGetVersionString(): string
/**
 * Control whether the VNC code emits verbose debug
 * messages on stderr
 * @param enabled TRUE to turn on verbose debugging
 */
export function utilSetDebug(enabled: boolean): void
export module Audio {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Audio {

    // Owm methods of GVnc-1.0.GVnc.Audio

    // Has conflict: playbackData(sample: AudioSample): void
    // Has conflict: playbackStart(format: AudioFormat): void
    // Has conflict: playbackStop(): void

    // Own virtual methods of GVnc-1.0.GVnc.Audio

    playbackData(sample: AudioSample): boolean
    playbackStart(format: AudioFormat): boolean
    playbackStop(): boolean

    // Class property signals of GVnc-1.0.GVnc.Audio

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Audio extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Audio

    static name: string

    // Constructors of GVnc-1.0.GVnc.Audio

    constructor(config?: Audio.ConstructorProperties) 
    _init(config?: Audio.ConstructorProperties): void
}

export module Framebuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Framebuffer {

    // Owm methods of GVnc-1.0.GVnc.Framebuffer

    // Has conflict: blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    // Has conflict: copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    // Has conflict: fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    // Has conflict: getBuffer(): Uint8Array
    // Has conflict: getHeight(): number
    // Has conflict: getLocalFormat(): PixelFormat
    // Has conflict: getRemoteFormat(): PixelFormat
    // Has conflict: getRowstride(): number
    // Has conflict: getWidth(): number
    // Has conflict: perfectFormatMatch(): boolean
    // Has conflict: rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    // Has conflict: setColorMap(map: ColorMap): void
    // Has conflict: setPixelAt(src: Uint8Array, x: number, y: number): void

    // Own virtual methods of GVnc-1.0.GVnc.Framebuffer

    blt(src: number, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Copies data from the range (`srcx,` `srcy)` to
     * (`srcx+``width,` `srcy+``height)` over to the
     * range starting at (`dstx,` `dsty)`.
     * @virtual 
     * @param srcx the horizontal starting pixel
     * @param srcy the vertical starting pixel
     * @param dstx the horizontal target pixel
     * @param dsty the vertical target pixel
     * @param width the width of the region
     * @param height the height of the region
     */
    copyrect(srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number): void
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @virtual 
     * @param src the new pixel data
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    fill(src: Uint8Array, x: number, y: number, width: number, height: number): void
    getBuffer(): number
    /**
     * Query the height of the remote framebuffer
     * @virtual 
     */
    getHeight(): number
    /**
     * Get the pixel format used to store the framebuffer locally
     * @virtual 
     */
    getLocalFormat(): PixelFormat
    getRemoteFormat(): PixelFormat
    /**
     * Get the number of bytes per line of the framebuffer
     * @virtual 
     */
    getRowstride(): number
    /**
     * Query the width of the remote framebuffer
     * @virtual 
     */
    getWidth(): number
    /**
     * Determine if the local and remote pixel formats match
     * @virtual 
     */
    perfectFormatMatch(): boolean
    /**
     * Fill all the pixels in the range (`x,` `y)` to
     * (`x` + `width,` `y` + `height)` to the value in
     * `src`. The number of bytes in `src` is always
     * 3 as it must be in plain RGB24 format.
     * @virtual 
     * @param src the new pixel data
     * @param rowstride the number of bytes per row
     * @param x the horizontal pixel to start filling
     * @param y the vertical pixel to start filling
     * @param width the number of pixels to fill horizontally
     * @param height the number of pixels to fill vertically
     */
    rgb24Blt(src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number): void
    /**
     * Set the color map to use for the framebuffer
     * @virtual 
     * @param map the new color map
     */
    setColorMap(map: ColorMap): void
    /**
     * Sets a pixel in the framebuffer at (`x,` `y)` to the
     * value in `src`. The number of bytes in `src` is
     * determined by the remote pixel format
     * @virtual 
     * @param src the new pixel data
     * @param x the horizontal pixel to set
     * @param y the vertical pixel to set
     */
    setPixelAt(src: Uint8Array, x: number, y: number): void

    // Class property signals of GVnc-1.0.GVnc.Framebuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Framebuffer extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Framebuffer

    static name: string

    // Constructors of GVnc-1.0.GVnc.Framebuffer

    constructor(config?: Framebuffer.ConstructorProperties) 
    _init(config?: Framebuffer.ConstructorProperties): void
}

export module BaseAudio {

    // Signal callback interfaces

    /**
     * Signal callback interface for `vnc-audio-playback-data`
     */
    export interface VncAudioPlaybackDataSignalCallback {
        (object: AudioSample): void
    }

    /**
     * Signal callback interface for `vnc-audio-playback-start`
     */
    export interface VncAudioPlaybackStartSignalCallback {
        (object: AudioFormat): void
    }

    /**
     * Signal callback interface for `vnc-audio-playback-stop`
     */
    export interface VncAudioPlaybackStopSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Audio.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BaseAudio extends Audio {

    // Own fields of GVnc-1.0.GVnc.BaseAudio

    parent: GObject.Object
    priv: BaseAudioPrivate

    // Own virtual methods of GVnc-1.0.GVnc.BaseAudio

    playbackData(sample: AudioSample): boolean

    // Overloads of playbackData

    playbackData(sample: AudioSample): boolean
    playbackStart(format: AudioFormat): boolean

    // Overloads of playbackStart

    playbackStart(format: AudioFormat): boolean
    playbackStop(): boolean

    // Overloads of playbackStop

    playbackStop(): boolean

    // Own signals of GVnc-1.0.GVnc.BaseAudio

    connect(sigName: "vnc-audio-playback-data", callback: BaseAudio.VncAudioPlaybackDataSignalCallback): number
    on(sigName: "vnc-audio-playback-data", callback: BaseAudio.VncAudioPlaybackDataSignalCallback): number
    once(sigName: "vnc-audio-playback-data", callback: BaseAudio.VncAudioPlaybackDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-audio-playback-data", ...args: any[]): void
    connect(sigName: "vnc-audio-playback-start", callback: BaseAudio.VncAudioPlaybackStartSignalCallback): number
    on(sigName: "vnc-audio-playback-start", callback: BaseAudio.VncAudioPlaybackStartSignalCallback): number
    once(sigName: "vnc-audio-playback-start", callback: BaseAudio.VncAudioPlaybackStartSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-audio-playback-start", ...args: any[]): void
    connect(sigName: "vnc-audio-playback-stop", callback: BaseAudio.VncAudioPlaybackStopSignalCallback): number
    on(sigName: "vnc-audio-playback-stop", callback: BaseAudio.VncAudioPlaybackStopSignalCallback): number
    once(sigName: "vnc-audio-playback-stop", callback: BaseAudio.VncAudioPlaybackStopSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-audio-playback-stop", ...args: any[]): void

    // Class property signals of GVnc-1.0.GVnc.BaseAudio

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BaseAudio extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.BaseAudio

    static name: string

    // Constructors of GVnc-1.0.GVnc.BaseAudio

    constructor(config?: BaseAudio.ConstructorProperties) 
    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     */
    static new(): BaseAudio
    _init(config?: BaseAudio.ConstructorProperties): void
}

export module BaseFramebuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Framebuffer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GVnc-1.0.GVnc.BaseFramebuffer

        buffer?: object | null
        colorMap?: ColorMap | null
        height?: number | null
        localFormat?: PixelFormat | null
        remoteFormat?: PixelFormat | null
        rowstride?: number | null
        width?: number | null
    }

}

export interface BaseFramebuffer extends Framebuffer {

    // Own properties of GVnc-1.0.GVnc.BaseFramebuffer

    readonly buffer: object
    colorMap: ColorMap
    readonly height: number
    readonly localFormat: PixelFormat
    readonly remoteFormat: PixelFormat
    readonly rowstride: number
    readonly width: number

    // Own fields of GVnc-1.0.GVnc.BaseFramebuffer

    parent: GObject.Object
    priv: BaseFramebufferPrivate

    // Class property signals of GVnc-1.0.GVnc.BaseFramebuffer

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::color-map", callback: any): number
    on(sigName: "notify::color-map", callback: any): number
    once(sigName: "notify::color-map", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color-map", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::local-format", callback: any): number
    on(sigName: "notify::local-format", callback: any): number
    once(sigName: "notify::local-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-format", ...args: any[]): void
    connect(sigName: "notify::remote-format", callback: any): number
    on(sigName: "notify::remote-format", callback: any): number
    once(sigName: "notify::remote-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-format", ...args: any[]): void
    connect(sigName: "notify::rowstride", callback: any): number
    on(sigName: "notify::rowstride", callback: any): number
    once(sigName: "notify::rowstride", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rowstride", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BaseFramebuffer extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.BaseFramebuffer

    static name: string

    // Constructors of GVnc-1.0.GVnc.BaseFramebuffer

    constructor(config?: BaseFramebuffer.ConstructorProperties) 
    /**
     * Allocate a new general purpose framebuffer object storing
     * screen updates in `buffer`. `buffer` must be `height` *
     * `rowstride` bytes in size. The returned object will
     * store a pointer to `buffer,` so it should not be free'd
     * for as long as the framebuffer object exists
     * @constructor 
     * @param buffer the buffer representing the screen
     * @param width the width of the screen
     * @param height the height of the screen
     * @param rowstride the number of bytes per line in `buffer`
     * @param localFormat the format for data stored in `buffer`
     * @param remoteFormat the format for data before storage in `buffer`
     */
    constructor(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat) 
    /**
     * Allocate a new general purpose framebuffer object storing
     * screen updates in `buffer`. `buffer` must be `height` *
     * `rowstride` bytes in size. The returned object will
     * store a pointer to `buffer,` so it should not be free'd
     * for as long as the framebuffer object exists
     * @constructor 
     * @param buffer the buffer representing the screen
     * @param width the width of the screen
     * @param height the height of the screen
     * @param rowstride the number of bytes per line in `buffer`
     * @param localFormat the format for data stored in `buffer`
     * @param remoteFormat the format for data before storage in `buffer`
     */
    static new(buffer: Uint8Array, width: number, height: number, rowstride: number, localFormat: PixelFormat, remoteFormat: PixelFormat): BaseFramebuffer
    _init(config?: BaseFramebuffer.ConstructorProperties): void
}

export module Connection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `vnc-auth-choose-subtype`
     */
    export interface VncAuthChooseSubtypeSignalCallback {
        (object: number, p0: GObject.ValueArray): void
    }

    /**
     * Signal callback interface for `vnc-auth-choose-type`
     */
    export interface VncAuthChooseTypeSignalCallback {
        (object: GObject.ValueArray): void
    }

    /**
     * Signal callback interface for `vnc-auth-credential`
     */
    export interface VncAuthCredentialSignalCallback {
        (object: GObject.ValueArray): void
    }

    /**
     * Signal callback interface for `vnc-auth-failure`
     */
    export interface VncAuthFailureSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `vnc-auth-unsupported`
     */
    export interface VncAuthUnsupportedSignalCallback {
        (object: number): void
    }

    /**
     * Signal callback interface for `vnc-bell`
     */
    export interface VncBellSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-connected`
     */
    export interface VncConnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-cursor-changed`
     */
    export interface VncCursorChangedSignalCallback {
        (cursor: Cursor | null): void
    }

    /**
     * Signal callback interface for `vnc-desktop-rename`
     */
    export interface VncDesktopRenameSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `vnc-desktop-resize`
     */
    export interface VncDesktopResizeSignalCallback {
        (object: number, p0: number): void
    }

    /**
     * Signal callback interface for `vnc-disconnected`
     */
    export interface VncDisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-error`
     */
    export interface VncErrorSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `vnc-framebuffer-update`
     */
    export interface VncFramebufferUpdateSignalCallback {
        (object: number, p0: number, p1: number, p2: number): void
    }

    /**
     * Signal callback interface for `vnc-initialized`
     */
    export interface VncInitializedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-led-state`
     */
    export interface VncLedStateSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-pixel-format-changed`
     */
    export interface VncPixelFormatChangedSignalCallback {
        (object: PixelFormat): void
    }

    /**
     * Signal callback interface for `vnc-pointer-mode-changed`
     */
    export interface VncPointerModeChangedSignalCallback {
        (object: boolean): void
    }

    /**
     * Signal callback interface for `vnc-power-control-failed`
     */
    export interface VncPowerControlFailedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-power-control-initialized`
     */
    export interface VncPowerControlInitializedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `vnc-server-cut-text`
     */
    export interface VncServerCutTextSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GVnc-1.0.GVnc.Connection

        framebuffer?: Framebuffer | null
    }

}

export interface Connection {

    // Own properties of GVnc-1.0.GVnc.Connection

    framebuffer: Framebuffer

    // Own fields of GVnc-1.0.GVnc.Connection

    parent: GObject.Object
    priv: ConnectionPrivate

    // Owm methods of GVnc-1.0.GVnc.Connection

    /**
     * Tell the server that it is no longer permitted to send
     * audio. The client may continue to receive audio for a
     * time after this, since packets may already be in flight.
     */
    audioDisable(): boolean
    /**
     * Tell the server that it is permitted to send audio
     * data.
     */
    audioEnable(): boolean
    clientCutText(data: object | null, length: number): boolean
    /**
     * Request that the server send a framebuffer update when the
     * region positioned at (`x,` `y)` wth size (`width,` `height)`
     * sees damage. The update sent may be a subset of the region
     * requested, if `incremental` is FALSE.
     * @param incremental TRUE to only receive region with changes
     * @param x horizontal offset to region of update
     * @param y vertical offset to region of update
     * @param width horizontal size of region of update
     * @param height vertical size of region of update
     */
    framebufferUpdateRequest(incremental: boolean, x: number, y: number, width: number, height: number): boolean
    /**
     * Determine if the remote server supports absolute pointer
     * motion events. This will only be valid once the
     * "vnc-initialized" signal has been emitted.
     */
    getAbsPointer(): boolean
    /**
     * Get the current audio format specification
     */
    getAudioFormat(): AudioFormat
    /**
     * Get the cursor currently associated with the desktop,
     * if any.
     */
    getCursor(): Cursor
    /**
     * Determine if the remote server supports the extended
     * keyboard event which transmits raw XT scancodes.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted
     */
    getExtKeyEvent(): boolean
    /**
     * Get the height of the remote display. The height will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    getHeight(): number
    /**
     * Get the current LED state bitmap. This is only
     * valid once the "vnc-initialized" signal has been
     * emitted.
     */
    getLedstate(): number
    /**
     * Get the name of the remote display. A name will only
     * be available once the "vnc-initialized" signal has
     * been emitted
     */
    getName(): string
    /**
     * Get a specification of the current pixel format
     */
    getPixelFormat(): PixelFormat
    /**
     * Determine if the remote server supports power control.
     * This will only be valid once the "vnc-initialized"
     * signal has been emitted.
     */
    getPowerControl(): boolean
    /**
     * Get the sharing state for the connection
     */
    getShared(): boolean
    /**
     * Get the width of the remote display. The width will
     * only be set once the "vnc-initialized" signal has
     * been emitted
     */
    getWidth(): number
    /**
     * Determine if the current connection is in an error
     * state
     */
    hasError(): boolean
    /**
     * Determine if the connection to the remote desktop is
     * fully initialized and thus receiving framebuffer
     * updates.
     */
    isInitialized(): boolean
    /**
     * Check if the connection is currently open
     */
    isOpen(): boolean
    /**
     * Send a key press/release event to the server. By default the
     * event will be sent with the X11 key code from `key`. If the
     * extended key event protocol extension is active, the `scancode`
     * will be sent instead.
     * @param downFlag TRUE if this is a key press, FALSE for a key release
     * @param key the X11 key code
     * @param scancode the XT scan code
     */
    keyEvent(downFlag: boolean, key: number, scancode: number): boolean
    /**
     * Open a socket connection to server identified by `addr`.
     * `addr` may refer to either a TCP address (IPv4/6) or
     * a UNIX socket address. The `hostname` provided should
     * reflect the name of the host that the `addr` provides a
     * connection to, if it is not already available in `addr`.
     * For example, if `addr` points to a proxy server, then
     * `hostname` can be used to provide the name of the final
     * endpoint. This will be used by some authentication
     * schemes, for example x509 certificate validation
     * against `hostname`.
     * @param addr the socket address
     * @param hostname the hostname
     */
    openAddr(addr: Gio.SocketAddress, hostname: string | null): boolean
    /**
     * Open a connection using `fd` as the transport. If `fd`
     * refers to a TCP connection, it is recommended to use
     * vnc_connection_open_fd_with_hostname instead, to
     * provide the remote hostname. This allows use of
     * x509 based authentication which requires a hostname
     * to be available.
     * @param fd file descriptor to use for the connection
     */
    openFd(fd: number): boolean
    /**
     * Open a connection using `fd` as the transport. The
     * `hostname` provided should reflect the name of the
     * host that the `fd` provides a connection to. This
     * will be used by some authentication schemes, for
     * example x509 certificate validation against `hostname`.
     * @param fd file descriptor to use for the connection
     * @param hostname the host associated with the connection
     */
    openFdWithHostname(fd: number, hostname: string | null): boolean
    /**
     * Open a TCP connection to the remote desktop at `host`
     * listening on `port`.
     * @param host the host name or IP address
     * @param port the service name or port number
     */
    openHost(host: string, port: string): boolean
    /**
     * Send a pointer event to the server, reflecting either movement
     * of the pointer, or a change in state of its buttons, or both.
     * @param buttonMask the new state of the buttons
     * @param x the new horizontal position of the pointer
     * @param y the new veritical position of the pointer
     */
    pointerEvent(buttonMask: number, x: number, y: number): boolean
    /**
     * Perform a power control action on the remote server.
     * 
     * This is only valid if the "vnc-power-control" signal
     * has been emitted with a VNC_CONNECTION_POWER_STATUS_INIT
     * code.
     * 
     * The action should be assumed to be accepted unless
     * "vnc-power-control" signal is emitted with a
     * VNC_CONNECTION_POWER_STATUS_FAIL code.
     * @param action 
     */
    powerControl(action: ConnectionPowerAction): boolean
    /**
     * Set the audio sink to use for playing back audio from
     * the remote session.
     * @param audio the audio sink
     */
    setAudio(audio: Audio): boolean
    /**
     * Set the audio format specification to use for playback
     * from the remote session. The format should only be set
     * when the audio stream is not active, otherwise it will
     * be impossible to determine when the server has switched
     * to sending data in the new format
     * @param fmt the audio format
     */
    setAudioFormat(fmt: AudioFormat): boolean
    /**
     * If a multi-level authentication scheme was requested, this
     * identifies which auth type to use for the second phase.
     * @param type the auth sub-type
     */
    setAuthSubtype(type: number): boolean
    /**
     * Set the authentication type to use to complete the
     * connection.
     * @param type the requested auth type
     */
    setAuthType(type: number): boolean
    /**
     * Sets the value of the authentication credential
     * `type` to the string `data`.
     * 
     * `type` is one of the VncConnectionCredential enum vlaues
     * @param type the authentication credential type
     * @param data the value associated with the credential
     */
    setCredential(type: number, data: string): boolean
    /**
     * Inform the server of the list of encodings that it is
     * allowed to send. This should be done before requesting
     * any framebuffer updates
     * @param encoding the list of permitted encodings
     */
    setEncodings(encoding: number[]): boolean
    /**
     * Set the framebuffer object to which frame buffer updates
     * will be written.
     * @param fb the framebuffer object
     */
    setFramebuffer(fb: Framebuffer): boolean
    /**
     * Tell the server what pixel format  to use for
     * framebuffer updates. It is only safe to use this
     * when no framebuffer updates are pending, otherwise
     * it is impossible to determine when the server has
     * switched over to using the new format.
     * @param fmt the new pixel format
     */
    setPixelFormat(fmt: PixelFormat): boolean
    /**
     * Set the shared state for the connection. A TRUE value
     * allow allow this client to co-exist with other existing
     * clients. A FALSE value will cause other clients to be
     * dropped
     * @param shared the new sharing state
     */
    setShared(shared: boolean): boolean
    setSize(width: number, height: number): ConnectionResizeStatus
    /**
     * Initiate a shutdown of the current connection
     * by closing its socket
     */
    shutdown(): void

    // Own virtual methods of GVnc-1.0.GVnc.Connection

    vncAuthChooseSubtype(type: number, subtypes: GObject.ValueArray): void
    vncAuthChooseType(types: GObject.ValueArray): void
    vncAuthCredential(creds: GObject.ValueArray): void
    vncAuthFailure(reason: string): void
    vncAuthUnsupported(authType: number): void
    vncBell(): void
    vncConnected(): void
    vncCursorChanged(cursor: Cursor): void
    vncDesktopRename(name: string): void
    vncDesktopResize(width: number, height: number): void
    vncDisconnected(): void
    vncError(message: string): void
    vncFramebufferUpdate(x: number, y: number, width: number, height: number): void
    vncInitialized(): void
    vncLedState(): void
    vncPixelFormatChanged(format: PixelFormat): void
    vncPointerModeChanged(absPointer: boolean): void
    vncPowerControlFailed(): void
    vncPowerControlInitialized(): void
    vncServerCutText(text: GLib.String): void

    // Own signals of GVnc-1.0.GVnc.Connection

    connect(sigName: "vnc-auth-choose-subtype", callback: Connection.VncAuthChooseSubtypeSignalCallback): number
    on(sigName: "vnc-auth-choose-subtype", callback: Connection.VncAuthChooseSubtypeSignalCallback): number
    once(sigName: "vnc-auth-choose-subtype", callback: Connection.VncAuthChooseSubtypeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-auth-choose-subtype", p0: GObject.ValueArray, ...args: any[]): void
    connect(sigName: "vnc-auth-choose-type", callback: Connection.VncAuthChooseTypeSignalCallback): number
    on(sigName: "vnc-auth-choose-type", callback: Connection.VncAuthChooseTypeSignalCallback): number
    once(sigName: "vnc-auth-choose-type", callback: Connection.VncAuthChooseTypeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-auth-choose-type", ...args: any[]): void
    connect(sigName: "vnc-auth-credential", callback: Connection.VncAuthCredentialSignalCallback): number
    on(sigName: "vnc-auth-credential", callback: Connection.VncAuthCredentialSignalCallback): number
    once(sigName: "vnc-auth-credential", callback: Connection.VncAuthCredentialSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-auth-credential", ...args: any[]): void
    connect(sigName: "vnc-auth-failure", callback: Connection.VncAuthFailureSignalCallback): number
    on(sigName: "vnc-auth-failure", callback: Connection.VncAuthFailureSignalCallback): number
    once(sigName: "vnc-auth-failure", callback: Connection.VncAuthFailureSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-auth-failure", ...args: any[]): void
    connect(sigName: "vnc-auth-unsupported", callback: Connection.VncAuthUnsupportedSignalCallback): number
    on(sigName: "vnc-auth-unsupported", callback: Connection.VncAuthUnsupportedSignalCallback): number
    once(sigName: "vnc-auth-unsupported", callback: Connection.VncAuthUnsupportedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-auth-unsupported", ...args: any[]): void
    connect(sigName: "vnc-bell", callback: Connection.VncBellSignalCallback): number
    on(sigName: "vnc-bell", callback: Connection.VncBellSignalCallback): number
    once(sigName: "vnc-bell", callback: Connection.VncBellSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-bell", ...args: any[]): void
    connect(sigName: "vnc-connected", callback: Connection.VncConnectedSignalCallback): number
    on(sigName: "vnc-connected", callback: Connection.VncConnectedSignalCallback): number
    once(sigName: "vnc-connected", callback: Connection.VncConnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-connected", ...args: any[]): void
    connect(sigName: "vnc-cursor-changed", callback: Connection.VncCursorChangedSignalCallback): number
    on(sigName: "vnc-cursor-changed", callback: Connection.VncCursorChangedSignalCallback): number
    once(sigName: "vnc-cursor-changed", callback: Connection.VncCursorChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-cursor-changed", ...args: any[]): void
    connect(sigName: "vnc-desktop-rename", callback: Connection.VncDesktopRenameSignalCallback): number
    on(sigName: "vnc-desktop-rename", callback: Connection.VncDesktopRenameSignalCallback): number
    once(sigName: "vnc-desktop-rename", callback: Connection.VncDesktopRenameSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-desktop-rename", ...args: any[]): void
    connect(sigName: "vnc-desktop-resize", callback: Connection.VncDesktopResizeSignalCallback): number
    on(sigName: "vnc-desktop-resize", callback: Connection.VncDesktopResizeSignalCallback): number
    once(sigName: "vnc-desktop-resize", callback: Connection.VncDesktopResizeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-desktop-resize", p0: number, ...args: any[]): void
    connect(sigName: "vnc-disconnected", callback: Connection.VncDisconnectedSignalCallback): number
    on(sigName: "vnc-disconnected", callback: Connection.VncDisconnectedSignalCallback): number
    once(sigName: "vnc-disconnected", callback: Connection.VncDisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-disconnected", ...args: any[]): void
    connect(sigName: "vnc-error", callback: Connection.VncErrorSignalCallback): number
    on(sigName: "vnc-error", callback: Connection.VncErrorSignalCallback): number
    once(sigName: "vnc-error", callback: Connection.VncErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-error", ...args: any[]): void
    connect(sigName: "vnc-framebuffer-update", callback: Connection.VncFramebufferUpdateSignalCallback): number
    on(sigName: "vnc-framebuffer-update", callback: Connection.VncFramebufferUpdateSignalCallback): number
    once(sigName: "vnc-framebuffer-update", callback: Connection.VncFramebufferUpdateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-framebuffer-update", p0: number, p1: number, p2: number, ...args: any[]): void
    connect(sigName: "vnc-initialized", callback: Connection.VncInitializedSignalCallback): number
    on(sigName: "vnc-initialized", callback: Connection.VncInitializedSignalCallback): number
    once(sigName: "vnc-initialized", callback: Connection.VncInitializedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-initialized", ...args: any[]): void
    connect(sigName: "vnc-led-state", callback: Connection.VncLedStateSignalCallback): number
    on(sigName: "vnc-led-state", callback: Connection.VncLedStateSignalCallback): number
    once(sigName: "vnc-led-state", callback: Connection.VncLedStateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-led-state", ...args: any[]): void
    connect(sigName: "vnc-pixel-format-changed", callback: Connection.VncPixelFormatChangedSignalCallback): number
    on(sigName: "vnc-pixel-format-changed", callback: Connection.VncPixelFormatChangedSignalCallback): number
    once(sigName: "vnc-pixel-format-changed", callback: Connection.VncPixelFormatChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-pixel-format-changed", ...args: any[]): void
    connect(sigName: "vnc-pointer-mode-changed", callback: Connection.VncPointerModeChangedSignalCallback): number
    on(sigName: "vnc-pointer-mode-changed", callback: Connection.VncPointerModeChangedSignalCallback): number
    once(sigName: "vnc-pointer-mode-changed", callback: Connection.VncPointerModeChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-pointer-mode-changed", ...args: any[]): void
    connect(sigName: "vnc-power-control-failed", callback: Connection.VncPowerControlFailedSignalCallback): number
    on(sigName: "vnc-power-control-failed", callback: Connection.VncPowerControlFailedSignalCallback): number
    once(sigName: "vnc-power-control-failed", callback: Connection.VncPowerControlFailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-power-control-failed", ...args: any[]): void
    connect(sigName: "vnc-power-control-initialized", callback: Connection.VncPowerControlInitializedSignalCallback): number
    on(sigName: "vnc-power-control-initialized", callback: Connection.VncPowerControlInitializedSignalCallback): number
    once(sigName: "vnc-power-control-initialized", callback: Connection.VncPowerControlInitializedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-power-control-initialized", ...args: any[]): void
    connect(sigName: "vnc-server-cut-text", callback: Connection.VncServerCutTextSignalCallback): number
    on(sigName: "vnc-server-cut-text", callback: Connection.VncServerCutTextSignalCallback): number
    once(sigName: "vnc-server-cut-text", callback: Connection.VncServerCutTextSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "vnc-server-cut-text", ...args: any[]): void

    // Class property signals of GVnc-1.0.GVnc.Connection

    connect(sigName: "notify::framebuffer", callback: any): number
    on(sigName: "notify::framebuffer", callback: any): number
    once(sigName: "notify::framebuffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::framebuffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Connection extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Connection

    static name: string

    // Constructors of GVnc-1.0.GVnc.Connection

    constructor(config?: Connection.ConstructorProperties) 
    /**
     * Create a new connection object, which is initially
     * in the disconnected state.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new connection object, which is initially
     * in the disconnected state.
     * @constructor 
     */
    static new(): Connection
    _init(config?: Connection.ConstructorProperties): void
}

export module Cursor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GVnc-1.0.GVnc.Cursor

        data?: object | null
        height?: number | null
        hotx?: number | null
        hoty?: number | null
        width?: number | null
    }

}

export interface Cursor {

    // Own properties of GVnc-1.0.GVnc.Cursor

    data: object
    height: number
    hotx: number
    hoty: number
    width: number

    // Own fields of GVnc-1.0.GVnc.Cursor

    parent: GObject.Object
    priv: CursorPrivate

    // Owm methods of GVnc-1.0.GVnc.Cursor

    /**
     * Get the bitmap data representing the cursor
     */
    getData(): Uint8Array

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Get the height of the cursor bitmap
     */
    getHeight(): number
    /**
     * Get the horizontal position of the cursor hot point
     */
    getHotx(): number
    /**
     * Get the vertical position of the cursor hot point
     */
    getHoty(): number
    /**
     * Get the width of the cursor bitmap
     */
    getWidth(): number

    // Class property signals of GVnc-1.0.GVnc.Cursor

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::hotx", callback: any): number
    on(sigName: "notify::hotx", callback: any): number
    once(sigName: "notify::hotx", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hotx", ...args: any[]): void
    connect(sigName: "notify::hoty", callback: any): number
    on(sigName: "notify::hoty", callback: any): number
    once(sigName: "notify::hoty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hoty", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Cursor extends GObject.Object {

    // Own properties of GVnc-1.0.GVnc.Cursor

    static name: string

    // Constructors of GVnc-1.0.GVnc.Cursor

    constructor(config?: Cursor.ConstructorProperties) 
    /**
     * Creates a new cursor using the bitmap data in `data`
     * which should be `width` * `height` * 4 in size. The
     * `data` parameter should be in the RGBA format, so
     * each pixel is 32-bits in size.
     * @constructor 
     * @param data the bitmap data for the cursor
     * @param hotx the horizontal position of the hot point
     * @param hoty the vertical position of the hot point
     * @param width the width of the cursor
     * @param height the height of the cursor
     */
    constructor(data: Uint8Array, hotx: number, hoty: number, width: number, height: number) 
    /**
     * Creates a new cursor using the bitmap data in `data`
     * which should be `width` * `height` * 4 in size. The
     * `data` parameter should be in the RGBA format, so
     * each pixel is 32-bits in size.
     * @constructor 
     * @param data the bitmap data for the cursor
     * @param hotx the horizontal position of the hot point
     * @param hoty the vertical position of the hot point
     * @param width the width of the cursor
     * @param height the height of the cursor
     */
    static new(data: Uint8Array, hotx: number, hoty: number, width: number, height: number): Cursor
    _init(config?: Cursor.ConstructorProperties): void
}

export interface AudioFormat {

    // Own fields of GVnc-1.0.GVnc.AudioFormat

    format: number
    nchannels: number
    frequency: number

    // Owm methods of GVnc-1.0.GVnc.AudioFormat

    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized with the data found
     * in `format`. The struct must be released using
     * vnc_audio_format_free when no longer required.
     */
    copy(): AudioFormat
    /**
     * Release the memory associated with `format`
     */
    free(): void
}

export class AudioFormat {

    // Own properties of GVnc-1.0.GVnc.AudioFormat

    static name: string

    // Constructors of GVnc-1.0.GVnc.AudioFormat

    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_audio_format_free
     * when no longer required
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new VNC audio format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_audio_format_free
     * when no longer required
     * @constructor 
     */
    static new(): AudioFormat
}

export interface AudioInterface {

    // Own fields of GVnc-1.0.GVnc.AudioInterface

    parent: GObject.TypeInterface
    playbackStart: (audio: Audio, format: AudioFormat) => boolean
    playbackStop: (audio: Audio) => boolean
    playbackData: (audio: Audio, sample: AudioSample) => boolean
}

export abstract class AudioInterface {

    // Own properties of GVnc-1.0.GVnc.AudioInterface

    static name: string
}

export interface AudioSample {

    // Own fields of GVnc-1.0.GVnc.AudioSample

    data: number
    length: number
    capacity: number

    // Owm methods of GVnc-1.0.GVnc.AudioSample

    /**
     * Allocate a new audio sample, initializing it with a copy
     * of the data in `sample`.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     */
    copy(): AudioSample
    /**
     * Release memory associated with the audio sample
     * `sample`
     */
    free(): void
}

export class AudioSample {

    // Own properties of GVnc-1.0.GVnc.AudioSample

    static name: string

    // Constructors of GVnc-1.0.GVnc.AudioSample

    /**
     * Allocate a new audio sample able to store `capacity`
     * bytes of audio data.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     * @constructor 
     * @param capacity the sample size in bytes
     */
    constructor(capacity: number) 
    /**
     * Allocate a new audio sample able to store `capacity`
     * bytes of audio data.
     * 
     * The returned sample must be freed with
     * vnc_audio_sample_free when no longer required.
     * @constructor 
     * @param capacity the sample size in bytes
     */
    static new(capacity: number): AudioSample
}

export interface BaseAudioClass {

    // Own fields of GVnc-1.0.GVnc.BaseAudioClass

    parentClass: GObject.ObjectClass
    playbackStart: (audio: BaseAudio, format: AudioFormat) => boolean
    playbackStop: (audio: BaseAudio) => boolean
    playbackData: (audio: BaseAudio, sample: AudioSample) => boolean
}

export abstract class BaseAudioClass {

    // Own properties of GVnc-1.0.GVnc.BaseAudioClass

    static name: string
}

export interface BaseAudioPrivate {
}

export class BaseAudioPrivate {

    // Own properties of GVnc-1.0.GVnc.BaseAudioPrivate

    static name: string
}

export interface BaseFramebufferClass {

    // Own fields of GVnc-1.0.GVnc.BaseFramebufferClass

    parentClass: GObject.ObjectClass
    vncReserved: object[]
}

export abstract class BaseFramebufferClass {

    // Own properties of GVnc-1.0.GVnc.BaseFramebufferClass

    static name: string
}

export interface BaseFramebufferPrivate {
}

export class BaseFramebufferPrivate {

    // Own properties of GVnc-1.0.GVnc.BaseFramebufferPrivate

    static name: string
}

export interface ColorMap {

    // Own fields of GVnc-1.0.GVnc.ColorMap

    offset: number
    size: number
    colors: ColorMapEntry

    // Owm methods of GVnc-1.0.GVnc.ColorMap

    /**
     * Allocate a new color map initializing it with a
     * copy of the data stored in `map`.
     */
    copy(): ColorMap
    /**
     * Release the memory associated with the
     * color map `map`
     */
    free(): void
    /**
     * Lookup the RGB values associated with the
     * colour map entry at position `idx`
     * @param idx the index to set
     */
    lookup(idx: number): [ /* returnType */ boolean, /* red */ number, /* green */ number, /* blue */ number ]
    /**
     * Update the RGB value associated with the
     * color map entry at position `idx`.
     * @param idx the index to set
     * @param red the new red value
     * @param green the new green value
     * @param blue the new blue value
     */
    set(idx: number, red: number, green: number, blue: number): boolean
}

export class ColorMap {

    // Own properties of GVnc-1.0.GVnc.ColorMap

    static name: string

    // Constructors of GVnc-1.0.GVnc.ColorMap

    /**
     * Allocate a new colour map object able to store colour
     * map entries with indexes in the range `offset` to
     * `offset` + `size`.
     * 
     * The color map must be freed with vnc_color_map_free
     * when no longer required.
     * @constructor 
     * @param offset the offset at which the color map starts
     * @param size the number of entries
     */
    constructor(offset: number, size: number) 
    /**
     * Allocate a new colour map object able to store colour
     * map entries with indexes in the range `offset` to
     * `offset` + `size`.
     * 
     * The color map must be freed with vnc_color_map_free
     * when no longer required.
     * @constructor 
     * @param offset the offset at which the color map starts
     * @param size the number of entries
     */
    static new(offset: number, size: number): ColorMap
}

export interface ColorMapEntry {

    // Own fields of GVnc-1.0.GVnc.ColorMapEntry

    red: number
    green: number
    blue: number
}

export class ColorMapEntry {

    // Own properties of GVnc-1.0.GVnc.ColorMapEntry

    static name: string
}

export interface ConnectionClass {

    // Own fields of GVnc-1.0.GVnc.ConnectionClass

    parentClass: GObject.ObjectClass
    vncCursorChanged: (conn: Connection, cursor: Cursor) => void
    vncPointerModeChanged: (conn: Connection, absPointer: boolean) => void
    vncBell: (conn: Connection) => void
    vncServerCutText: (conn: Connection, text: GLib.String) => void
    vncFramebufferUpdate: (conn: Connection, x: number, y: number, width: number, height: number) => void
    vncDesktopResize: (conn: Connection, width: number, height: number) => void
    vncPixelFormatChanged: (conn: Connection, format: PixelFormat) => void
    vncAuthFailure: (conn: Connection, reason: string) => void
    vncAuthUnsupported: (conn: Connection, authType: number) => void
    vncAuthCredential: (conn: Connection, creds: GObject.ValueArray) => void
    vncAuthChooseType: (conn: Connection, types: GObject.ValueArray) => void
    vncAuthChooseSubtype: (conn: Connection, type: number, subtypes: GObject.ValueArray) => void
    vncConnected: (conn: Connection) => void
    vncInitialized: (conn: Connection) => void
    vncDisconnected: (conn: Connection) => void
    vncLedState: (conn: Connection) => void
    vncError: (conn: Connection, message: string) => void
    vncPowerControlInitialized: (conn: Connection) => void
    vncPowerControlFailed: (conn: Connection) => void
    vncDesktopRename: (conn: Connection, name: string) => void
    vncReserved: object[]
}

export abstract class ConnectionClass {

    // Own properties of GVnc-1.0.GVnc.ConnectionClass

    static name: string
}

export interface ConnectionPrivate {
}

export class ConnectionPrivate {

    // Own properties of GVnc-1.0.GVnc.ConnectionPrivate

    static name: string
}

export interface CursorClass {

    // Own fields of GVnc-1.0.GVnc.CursorClass

    parentClass: GObject.ObjectClass
    vncReserved: object[]
}

export abstract class CursorClass {

    // Own properties of GVnc-1.0.GVnc.CursorClass

    static name: string
}

export interface CursorPrivate {
}

export class CursorPrivate {

    // Own properties of GVnc-1.0.GVnc.CursorPrivate

    static name: string
}

export interface FramebufferInterface {

    // Own fields of GVnc-1.0.GVnc.FramebufferInterface

    parent: GObject.TypeInterface
    getWidth: (fb: Framebuffer) => number
    getHeight: (fb: Framebuffer) => number
    getRowstride: (fb: Framebuffer) => number
    getBuffer: (fb: Framebuffer) => number
    getLocalFormat: (fb: Framebuffer) => PixelFormat
    getRemoteFormat: (fb: Framebuffer) => PixelFormat
    perfectFormatMatch: (fb: Framebuffer) => boolean
    setPixelAt: (fb: Framebuffer, src: Uint8Array, x: number, y: number) => void
    fill: (fb: Framebuffer, src: Uint8Array, x: number, y: number, width: number, height: number) => void
    copyrect: (fb: Framebuffer, srcx: number, srcy: number, dstx: number, dsty: number, width: number, height: number) => void
    blt: (fb: Framebuffer, src: number, rowstride: number, x: number, y: number, width: number, height: number) => void
    rgb24Blt: (fb: Framebuffer, src: Uint8Array, rowstride: number, x: number, y: number, width: number, height: number) => void
    setColorMap: (fb: Framebuffer, map: ColorMap) => void
}

export abstract class FramebufferInterface {

    // Own properties of GVnc-1.0.GVnc.FramebufferInterface

    static name: string
}

export interface PixelFormat {

    // Own fields of GVnc-1.0.GVnc.PixelFormat

    bitsPerPixel: number
    depth: number
    byteOrder: number
    trueColorFlag: number
    redMax: number
    greenMax: number
    blueMax: number
    redShift: number
    greenShift: number
    blueShift: number

    // Owm methods of GVnc-1.0.GVnc.PixelFormat

    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized with the data found
     * in `srcFormat`. The struct must be released using
     * vnc_pixel_format_free when no longer required.
     */
    copy(): PixelFormat
    /**
     * Release the memory associated with `format`
     */
    free(): void
    match(other: PixelFormat): boolean
}

export class PixelFormat {

    // Own properties of GVnc-1.0.GVnc.PixelFormat

    static name: string

    // Constructors of GVnc-1.0.GVnc.PixelFormat

    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_pixel_format_free
     * when no longer required
     * @constructor 
     */
    constructor() 
    /**
     * Allocate a new VNC pixel format struct whose
     * contents is initialized to all zeros. The
     * struct must be released using vnc_pixel_format_free
     * when no longer required
     * @constructor 
     */
    static new(): PixelFormat
}
