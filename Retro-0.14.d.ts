
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Retro-0.14
 */

import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Represents the axes of the analog sticks for the Libretro gamepad.
 */
export enum AnalogId {
    /**
     * the X axis of an analog stick
     */
    X,
    /**
     * the Y axis of an analog stick
     */
    Y,
    /**
     * the number of ids
     */
    COUNT,
}
/**
 * Represents the analog sticks for the Libretro gamepad.
 */
export enum AnalogIndex {
    /**
     * the left analog stick
     */
    LEFT,
    /**
     * the right analog stick
     */
    RIGHT,
    /**
     * the number of indexes
     */
    COUNT,
}
/**
 * Represents the base types for Libretro controllers.
 */
export enum ControllerType {
    /**
     * no controller
     */
    NONE,
    /**
     * a classic gamepad
     */
    JOYPAD,
    /**
     * a simple mouse
     */
    MOUSE,
    /**
     * a keyboard
     */
    KEYBOARD,
    /**
     * a lightgun
     */
    LIGHTGUN,
    /**
     * a gamepad with analog sticks
     */
    ANALOG,
    /**
     * a screen pointer
     */
    POINTER,
    /**
     * the number of types
     */
    COUNT,
    /**
     * a mask to get the super type of a derived one
     */
    TYPE_MASK,
}
/**
 * Represents the buttons for the Libretro gamepad. The available buttons are
 * the same as the W3C Standard Gamepad, the SDL GameController and many other
 * modern standard gamepads, but the name of the buttons may differ. See the
 * <ulink url="https://w3c.github.io/gamepad/">W3C Gamepad Specification</ulink>
 * and the <ulink url="https://wiki.libsdl.org/CategoryGameController">SDL
 * GamepadController definition</ulink> for more information.
 */
export enum JoypadId {
    /**
     * the bottom action button
     */
    B,
    /**
     * the left action button
     */
    Y,
    /**
     * the Select button
     */
    SELECT,
    /**
     * the Start button
     */
    START,
    /**
     * the up directional button
     */
    UP,
    /**
     * the down directional button
     */
    DOWN,
    /**
     * the left directional button
     */
    LEFT,
    /**
     * the right directional button
     */
    RIGHT,
    /**
     * the right action button
     */
    A,
    /**
     * the top action button
     */
    X,
    /**
     * the first left shoulder button
     */
    L,
    /**
     * the first right shoulder button
     */
    R,
    /**
     * the second left shoulder button
     */
    L2,
    /**
     * the second right shoulder button
     */
    R2,
    /**
     * the left thumb button
     */
    L3,
    /**
     * the right thumb button
     */
    R3,
    /**
     * the number of ids
     */
    COUNT,
}
/**
 * Represents the inputs for the Libretro lightgun.
 */
export enum LightgunId {
    /**
     * the X axis of a lightgun
     */
    X,
    /**
     * the Y axis of a lightgun
     */
    Y,
    /**
     * the trigger of a lightgun
     */
    TRIGGER,
    /**
     * the cursor of a lightgun
     */
    CURSOR,
    /**
     * the turbo button of a lightgun
     */
    TURBO,
    /**
     * the pause button of a lightgun
     */
    PAUSE,
    /**
     * the start button of a lightgun
     */
    START,
    /**
     * the number of ids
     */
    COUNT,
}
/**
 * Represents the memory types for the Libretro core.
 */
export enum MemoryType {
    /**
     * the save RAM
     */
    SAVE_RAM,
    /**
     * the real time clock
     */
    RTC,
    /**
     * the system RAM
     */
    SYSTEM_RAM,
    /**
     * the video RAM
     */
    VIDEO_RAM,
}
/**
 * Represents the inputs for the Libretro mouse.
 */
export enum MouseId {
    /**
     * the X axis of a mouse
     */
    X,
    /**
     * the Y axis of a mouse
     */
    Y,
    /**
     * the left button of a mouse
     */
    LEFT,
    /**
     * the right button of a mouse
     */
    RIGHT,
    /**
     * the up direction of a mouse wheel
     */
    WHEELUP,
    /**
     * the down direction of a mouse wheel
     */
    WHEELDOWN,
    /**
     * the middle button of a mouse
     */
    MIDDLE,
    /**
     * the horizontal up direction of a mouse wheel
     */
    HORIZ_WHEELUP,
    /**
     * the horizontal down direction of a mouse wheel
     */
    HORIZ_WHEELDOWN,
    /**
     * the number of ids
     */
    COUNT,
}
/**
 * Represents the inputs for the Libretro pointer.
 */
export enum PointerId {
    /**
     * the X axis of a pointer
     */
    X,
    /**
     * the Y axis of a pointer
     */
    Y,
    /**
     * the pression of a pointer
     */
    PRESSED,
    /**
     * the number of ids
     */
    COUNT,
}
/**
 * Represents the strength of the rumble effect.
 */
export enum RumbleEffect {
    /**
     * the strong rumble effect
     */
    STRONG,
    /**
     * the weak rumble effect
     */
    WEAK,
    /**
     * the number of rumble effects
     */
    COUNT,
}
/**
 * Represents the filters that can be applied to the video output.
 */
export enum VideoFilter {
    /**
     * a smooth but blurry video filer
     */
    SMOOTH,
    /**
     * a sharp video filter showing every pixel
     */
    SHARP,
    /**
     * a video filter mimicking CRT screens
     */
    CRT,
    /**
     * the number of video filters
     */
    COUNT,
}
/**
 * Logs an error or debugging message.
 * 
 * This is a convenience function to forward the log signal of #RetroCore to
 * g_log(), see it for more information.
 * @param sender a #RetroCore
 * @param logDomain the log domain, usually #G_LOG_DOMAIN, or %NULL
 * @param logLevel the log level, either from #GLogLevelFlags or a user-defined level
 * @param message the message to log
 */
export function gLog(sender: Core, logDomain: string | null, logLevel: GLib.LogLevelFlags, message: string): void
export function gtkGetResource(): Gio.Resource
export function joypadIdFromButtonCode(buttonCode: number): JoypadId
export function joypadIdToButtonCode(joypadId: JoypadId): number
/**
 * Gets the aspect ratio of `pixbuf` by reading the 'aspect-ratio' pixbuf option.
 * @param pixbuf a #GdkPixbuf
 */
export function pixbufGetAspectRatio(pixbuf: GdkPixbuf.Pixbuf): number
/**
 * Sets the aspect ratio of `pixbuf` by setting the 'aspect-ratio' pixbuf option.
 * Use retro_pixbuf_get_aspect_ratio() to retrieve it.
 * @param pixbuf a #GdkPixbuf
 * @param aspectRatio the aspect ratio value
 */
export function pixbufSetAspectRatio(pixbuf: GdkPixbuf.Pixbuf, aspectRatio: number): void
/**
 * Gets a #RetroVideoFilter from it's name. It defaults to
 * RETRO_VIDEO_FILTER_SMOOTH in case of error.
 * @param filter a filter name
 */
export function videoFilterFromString(filter: string): VideoFilter
export module Controller {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Controller {

    // Owm methods of Retro-0.14.Retro.Controller

    // Has conflict: getCapabilities(): number
    // Has conflict: getControllerType(): ControllerType
    // Has conflict: getInputState(input: Input): number
    /**
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controllerType a #RetroControllerType
     */
    hasCapability(controllerType: ControllerType): boolean
    // Has conflict: poll(): void
    // Has conflict: setRumbleState(effect: RumbleEffect, strength: number): boolean

    // Own virtual methods of Retro-0.14.Retro.Controller

    /**
     * Gets a flag representing the capabilities of `self`. Each bit index matches
     * the #RetroControllerType of same number.
     * 
     * For example, if `self` is an analog gamepad, the value would be: (1 <<
     * RETRO_CONTROLLER_TYPE_JOYPAD) | (1 << RETRO_CONTROLLER_TYPE_ANALOG).
     * @virtual 
     */
    getCapabilities(): number
    /**
     * Gets the main type of the controller.
     * @virtual 
     */
    getControllerType(): ControllerType
    /**
     * Gets the state of an input of `self`.
     * @virtual 
     * @param input a #RetroInput to query `self`
     */
    getInputState(input: Input): number
    /**
     * Polls the pending input events for `self`.
     * @virtual 
     */
    poll(): void
    /**
     * Sets the rumble state of `self`.
     * @virtual 
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    setRumbleState(effect: RumbleEffect, strength: number): boolean

    // Class property signals of Retro-0.14.Retro.Controller

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Controller extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Controller

    static name: string

    // Constructors of Retro-0.14.Retro.Controller

    constructor(config?: Controller.ConstructorProperties) 
    _init(config?: Controller.ConstructorProperties): void
}

export module ControllerIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ControllerIterator {

    // Owm methods of Retro-0.14.Retro.ControllerIterator

    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     */
    next(): [ /* returnType */ boolean, /* port */ number, /* controller */ Controller | null ]

    // Class property signals of Retro-0.14.Retro.ControllerIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ControllerIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ControllerIterator

    static name: string

    // Constructors of Retro-0.14.Retro.ControllerIterator

    constructor(config?: ControllerIterator.ConstructorProperties) 
    _init(config?: ControllerIterator.ConstructorProperties): void
}

export module Core {

    // Signal callback interfaces

    /**
     * Signal callback interface for `audio-output`
     */
    export interface AudioOutputSignalCallback {
        (data: Uint8Array, sampleRate: number): void
    }

    /**
     * Signal callback interface for `log`
     */
    export interface LogSignalCallback {
        (logDomain: string, logLevel: GLib.LogLevelFlags, message: string): void
    }

    /**
     * Signal callback interface for `message`
     */
    export interface MessageSignalCallback {
        (message: string, frames: number): boolean
    }

    /**
     * Signal callback interface for `options-set`
     */
    export interface OptionsSetSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    export interface ShutdownSignalCallback {
        (): boolean
    }

    /**
     * Signal callback interface for `video-output`
     */
    export interface VideoOutputSignalCallback {
        (pixdata: Pixdata): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-0.14.Retro.Core

        contentDirectory?: string | null
        /**
         * The number of frame to run ahead of time.
         */
        runahead?: number | null
        /**
         * The save directory of the core.
         * 
         * The core will save some data here.
         */
        saveDirectory?: string | null
        /**
         * The system directory of the core.
         * 
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        systemDirectory?: string | null
    }

}

export interface Core {

    // Own properties of Retro-0.14.Retro.Core

    /**
     * The Libretro API version implement by the core.
     */
    readonly apiVersion: number
    contentDirectory: string
    /**
     * The filename of the core.
     */
    readonly filename: string
    /**
     * The FPS rate for the core's video output.
     */
    readonly framesPerSecond: number
    /**
     * Whether a game has been loaded.
     */
    readonly gameLoaded: boolean
    /**
     * Whether the core has been initiated.
     */
    readonly isInitiated: boolean
    /**
     * The number of frame to run ahead of time.
     */
    runahead: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    saveDirectory: string
    /**
     * Whether the core supports running with no game.
     */
    readonly supportNoGame: boolean
    /**
     * The system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    systemDirectory: string

    // Owm methods of Retro-0.14.Retro.Core

    /**
     * This initializes `self,` loads its available options and loads the medias. You
     * need to boot `self` before using some of its methods.
     */
    boot(): void
    /**
     * Gets the Libretro API version implement by the core.
     */
    getApiVersion(): number
    /**
     * Gets whether the state of `self` can be accessed.
     */
    getCanAccessState(): boolean
    getContentDirectory(): string
    /**
     * Gets the filename of the core.
     */
    getFilename(): string
    /**
     * Gets the FPS rate for the core's video output.
     */
    getFramesPerSecond(): number
    /**
     * Gets whether a game has been loaded.
     */
    getGameLoaded(): boolean
    /**
     * Gets whether the core has been initiated.
     */
    getIsInitiated(): boolean
    /**
     * Gets a memory region of `self`.
     * @param memoryType the type of memory
     */
    getMemory(memoryType: MemoryType): any
    /**
     * Gets the size of a memory region of `self`.
     * @param memoryType the type of memory
     */
    getMemorySize(memoryType: MemoryType): number
    /**
     * Gets the option for the given key.
     * @param key the key of the option
     */
    getOption(key: string): Option
    getRunahead(): number
    /**
     * Gets the save directory of the core.
     * 
     * The core will save some data here.
     */
    getSaveDirectory(): string
    /**
     * Gets the state of `self`.
     */
    getState(): any
    /**
     * Gets whether the core supports running with no game.
     */
    getSupportNoGame(): boolean
    /**
     * Gets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     */
    getSystemDirectory(): string
    /**
     * Gets whether the core has an option for the given key.
     * @param key the key of the option
     */
    hasOption(key: string): boolean
    /**
     * Creates a new #RetroControllerIterator which can be used to iterate through
     * the controllers plugged into `self`.
     */
    iterateControllers(): ControllerIterator
    /**
     * Creates a new #RetroOptionIterator which can be used to iterate through the
     * options of `self`.
     */
    iterateOptions(): OptionIterator
    /**
     * Resets `self`.
     */
    reset(): void
    /**
     * Iterate `self` for a frame.
     */
    run(): void
    setContentDirectory(contentDirectory: string): void
    /**
     * Plugs `controller` into the specified port number of `self`.
     * @param port the port number
     * @param controller a #RetroController
     */
    setController(port: number, controller: Controller | null): void
    /**
     * Sets the current media index.
     * 
     * You can use this after booting the core.
     * @param mediaIndex the media index
     */
    setCurrentMedia(mediaIndex: number): void
    /**
     * Uses `controller` as the default controller for the given type. When a port
     * has no controller plugged plugged into it, the core will use the default
     * controllers instead.
     * @param controllerType a #RetroControllerType
     * @param controller a #RetroController
     */
    setDefaultController(controllerType: ControllerType, controller: Controller | null): void
    /**
     * Sets the widget whose key events will be forwarded to `self`.
     * @param widget a #GtkWidget, or %NULL
     */
    setKeyboard(widget: Gtk.Widget | null): void
    /**
     * Sets the medias to load into the core.
     * 
     * You can use this before booting the core.
     * @param uris the URIs
     */
    setMedias(uris: string[]): void
    /**
     * Sets a memory region of `self`.
     * @param memoryType the type of memory
     * @param bytes a #GBytes
     */
    setMemory(memoryType: MemoryType, bytes: any): void
    setRunahead(runahead: number): void
    /**
     * Sets the save directory of the core.
     * 
     * The core will save some data here.
     * @param saveDirectory the save directory
     */
    setSaveDirectory(saveDirectory: string): void
    /**
     * Sets the state of the `self`.
     * @param bytes a #GBytes
     */
    setState(bytes: any): void
    /**
     * Sets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @param systemDirectory the system directory
     */
    setSystemDirectory(systemDirectory: string): void

    // Own signals of Retro-0.14.Retro.Core

    connect(sigName: "audio-output", callback: Core.AudioOutputSignalCallback): number
    on(sigName: "audio-output", callback: Core.AudioOutputSignalCallback): number
    once(sigName: "audio-output", callback: Core.AudioOutputSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "audio-output", sampleRate: number, ...args: any[]): void
    connect(sigName: "log", callback: Core.LogSignalCallback): number
    on(sigName: "log", callback: Core.LogSignalCallback): number
    once(sigName: "log", callback: Core.LogSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "log", logLevel: GLib.LogLevelFlags, message: string, ...args: any[]): void
    connect(sigName: "message", callback: Core.MessageSignalCallback): number
    on(sigName: "message", callback: Core.MessageSignalCallback): number
    once(sigName: "message", callback: Core.MessageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "message", frames: number, ...args: any[]): void
    connect(sigName: "options-set", callback: Core.OptionsSetSignalCallback): number
    on(sigName: "options-set", callback: Core.OptionsSetSignalCallback): number
    once(sigName: "options-set", callback: Core.OptionsSetSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "options-set", ...args: any[]): void
    connect(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    on(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    once(sigName: "shutdown", callback: Core.ShutdownSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "shutdown", ...args: any[]): void
    connect(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    on(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    once(sigName: "video-output", callback: Core.VideoOutputSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "video-output", ...args: any[]): void

    // Class property signals of Retro-0.14.Retro.Core

    connect(sigName: "notify::api-version", callback: any): number
    on(sigName: "notify::api-version", callback: any): number
    once(sigName: "notify::api-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::api-version", ...args: any[]): void
    connect(sigName: "notify::content-directory", callback: any): number
    on(sigName: "notify::content-directory", callback: any): number
    once(sigName: "notify::content-directory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-directory", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::frames-per-second", callback: any): number
    on(sigName: "notify::frames-per-second", callback: any): number
    once(sigName: "notify::frames-per-second", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::frames-per-second", ...args: any[]): void
    connect(sigName: "notify::game-loaded", callback: any): number
    on(sigName: "notify::game-loaded", callback: any): number
    once(sigName: "notify::game-loaded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::game-loaded", ...args: any[]): void
    connect(sigName: "notify::is-initiated", callback: any): number
    on(sigName: "notify::is-initiated", callback: any): number
    once(sigName: "notify::is-initiated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-initiated", ...args: any[]): void
    connect(sigName: "notify::runahead", callback: any): number
    on(sigName: "notify::runahead", callback: any): number
    once(sigName: "notify::runahead", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::runahead", ...args: any[]): void
    connect(sigName: "notify::save-directory", callback: any): number
    on(sigName: "notify::save-directory", callback: any): number
    once(sigName: "notify::save-directory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::save-directory", ...args: any[]): void
    connect(sigName: "notify::support-no-game", callback: any): number
    on(sigName: "notify::support-no-game", callback: any): number
    once(sigName: "notify::support-no-game", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::support-no-game", ...args: any[]): void
    connect(sigName: "notify::system-directory", callback: any): number
    on(sigName: "notify::system-directory", callback: any): number
    once(sigName: "notify::system-directory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-directory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Core extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Core

    static name: string

    // Constructors of Retro-0.14.Retro.Core

    constructor(config?: Core.ConstructorProperties) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     */
    constructor(filename: string) 
    /**
     * Creates a new #RetroCore.
     * @constructor 
     * @param filename the filename of a Libretro core
     */
    static new(filename: string): Core
    _init(config?: Core.ConstructorProperties): void
}

export module CoreDescriptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CoreDescriptor {

    // Owm methods of Retro-0.14.Retro.CoreDescriptor

    /**
     * Gets the MD5 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    getFirmwareMd5(firmware: string): string | null
    /**
     * Gets the demanded path to the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    getFirmwarePath(firmware: string): string | null
    /**
     * Gets the SHA512 fingerprint of the firmware file, or %NULL.
     * @param firmware a firmware name
     */
    getFirmwareSha512(firmware: string): string | null
    /**
     * Gets the list of firmwares used by the core for this platform.
     * @param platform a platform name
     */
    getFirmwares(platform: string): string[]
    /**
     * Gets the icon, or %NULL if it doesn't exist.
     */
    getIcon(): Gio.Icon | null
    /**
     * Gets the ID of `self`.
     */
    getId(): string
    /**
     * Gets whether the core is an emulator, and hence need games to be loaded.
     */
    getIsEmulator(): boolean
    /**
     * Gets whether the firmware is mandatory for the core to function.
     * @param firmware a firmware name
     */
    getIsFirmwareMandatory(firmware: string): boolean
    /**
     * Gets whether the core is a game, and hence can't load games.
     */
    getIsGame(): boolean
    /**
     * Gets the list of MIME types accepted used by the core for this platform.
     * @param platform a platform name
     */
    getMimeType(platform: string): string[]
    /**
     * Gets the module file name, or %NULL if it doesn't exist.
     */
    getModule(): string | null
    /**
     * Gets the module file, or %NULL if it doesn't exist.
     */
    getModuleFile(): Gio.File | null
    /**
     * Gets the name, or %NULL if it doesn't exist.
     */
    getName(): string | null
    /**
     * Gets whether the platform supports all of the given MIME types.
     * @param platform a platform name
     * @param mimeTypes the MIME types
     */
    getPlatformSupportsMimeTypes(platform: string, mimeTypes: string[]): boolean
    /**
     * Gets the URI of the file of `self`.
     */
    getUri(): string
    /**
     * Gets whether the firmware declares its MD5 fingerprint.
     * @param firmware a firmware name
     */
    hasFirmwareMd5(firmware: string): boolean
    /**
     * Gets whether the firmware declares its SHA512 fingerprint.
     * @param firmware a firmware name
     */
    hasFirmwareSha512(firmware: string): boolean
    /**
     * Gets whether the platform has associated firmwares.
     * @param platform a platform name
     */
    hasFirmwares(platform: string): boolean
    /**
     * Gets whether the core has an icon.
     */
    hasIcon(): boolean
    /**
     * Gets whether the core descriptor declares the given platform.
     * @param platform a platform name
     */
    hasPlatform(platform: string): boolean

    // Class property signals of Retro-0.14.Retro.CoreDescriptor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CoreDescriptor extends GObject.Object {

    // Own properties of Retro-0.14.Retro.CoreDescriptor

    static name: string

    // Constructors of Retro-0.14.Retro.CoreDescriptor

    constructor(config?: CoreDescriptor.ConstructorProperties) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     */
    constructor(filename: string) 
    /**
     * Creates a new #RetroCoreDescriptor.
     * @constructor 
     * @param filename the file name of the core descriptor
     */
    static new(filename: string): CoreDescriptor
    _init(config?: CoreDescriptor.ConstructorProperties): void
}

export module CoreView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Retro-0.14.Retro.CoreView

        canGrabPointer?: boolean | null
        snapPointerToBorders?: boolean | null
    }

}

export interface CoreView extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Retro-0.14.Retro.CoreView

    canGrabPointer: boolean
    snapPointerToBorders: boolean

    // Owm methods of Retro-0.14.Retro.CoreView

    /**
     * Creates a new #RetroController exposing `self` as the specified controller
     * type. The valid controller types are RETRO_CONTROLLER_TYPE_JOYPAD,
     * RETRO_CONTROLLER_TYPE_MOUSE, RETRO_CONTROLLER_TYPE_KEYBOARD and
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param controllerType the controller type to expose `self` as
     */
    asController(controllerType: ControllerType): Controller
    /**
     * Gets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     */
    getCanGrabPointer(): boolean
    /**
     * Gets a flag representing the capabilities of `self` when exposed as a
     * controller. See retro_controller_get_capabilities() for more information on
     * the flag.
     * 
     * See retro_core_view_as_controller() to know the capabilities of
     * #RetroCoreView when exposed as a controller.
     */
    getControllerCapabilities(): number
    /**
     * Gets the state of an input of `self`.
     * @param input a #RetroInput to query `self`
     */
    getInputState(input: Input): number
    /**
     * Gets the currently set key joypad mapping.
     */
    getKeyJoypadMapping(): KeyJoypadMapping
    /**
     * Gets the currently displayed video frame.
     */
    getPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Gets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     */
    getSnapPointerToBorders(): boolean
    /**
     * Sets the `self` as the default controllers of `core`.
     * @param core a #RetroCore
     */
    setAsDefaultController(core: Core | null): void
    /**
     * Sets whether the pointer should be grabbed when clicking on the view. This
     * allows `self` to work as a RETRO_CONTROLLER_TYPE_MOUSE instead of a
     * RETRO_CONTROLLER_TYPE_POINTER.
     * @param canGrabPointer whether the pointer should be grabbed when clicking on the view
     */
    setCanGrabPointer(canGrabPointer: boolean): void
    /**
     * Sets `core` as the #RetroCore handled by `self`.
     * @param core a #RetroCore, or %NULL
     */
    setCore(core: Core | null): void
    /**
     * Sets the video filter to use to render the core's video on `self`.
     * @param filter a #RetroVideoFilter
     */
    setFilter(filter: VideoFilter): void
    /**
     * Sets the key joypad mapping on `self`. If given mapping is %NULL, then set to
     * an empty configuration.
     * @param mapping a #RetroKeyJoypadMapping
     */
    setKeyJoypadMapping(mapping: KeyJoypadMapping | null): void
    /**
     * Sets `pixbuf` as the currently displayed video frame.
     * 
     * retro_pixbuf_set_aspect_ratio() can be used to specify the aspect ratio for
     * the pixbuf. Otherwise the core's aspect ratio will be used.
     * @param pixbuf a #GdkPixbuf
     */
    setPixbuf(pixbuf: GdkPixbuf.Pixbuf): void
    /**
     * Sets whether the pointer should be considered to be at the border of the
     * video display when it is outside of it. This is used when `self` is exposed as
     * a RETRO_CONTROLLER_TYPE_POINTER.
     * @param snapPointerToBorders whether the pointer should snap to the borders
     */
    setSnapPointerToBorders(snapPointerToBorders: boolean): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Retro-0.14.Retro.CoreView

    connect(sigName: "notify::can-grab-pointer", callback: any): number
    on(sigName: "notify::can-grab-pointer", callback: any): number
    once(sigName: "notify::can-grab-pointer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-grab-pointer", ...args: any[]): void
    connect(sigName: "notify::snap-pointer-to-borders", callback: any): number
    on(sigName: "notify::snap-pointer-to-borders", callback: any): number
    once(sigName: "notify::snap-pointer-to-borders", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::snap-pointer-to-borders", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: any): number
    on(sigName: "notify::above-child", callback: any): number
    once(sigName: "notify::above-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: any): number
    on(sigName: "notify::visible-window", callback: any): number
    once(sigName: "notify::visible-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: any): number
    on(sigName: "notify::app-paintable", callback: any): number
    once(sigName: "notify::app-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: any): number
    on(sigName: "notify::can-default", callback: any): number
    once(sigName: "notify::can-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: any): number
    on(sigName: "notify::composite-child", callback: any): number
    once(sigName: "notify::composite-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: any): number
    on(sigName: "notify::double-buffered", callback: any): number
    once(sigName: "notify::double-buffered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: any): number
    on(sigName: "notify::events", callback: any): number
    once(sigName: "notify::events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: any): number
    on(sigName: "notify::expand", callback: any): number
    once(sigName: "notify::expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: any): number
    on(sigName: "notify::halign", callback: any): number
    once(sigName: "notify::halign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: any): number
    on(sigName: "notify::has-default", callback: any): number
    once(sigName: "notify::has-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: any): number
    on(sigName: "notify::has-focus", callback: any): number
    once(sigName: "notify::has-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: any): number
    on(sigName: "notify::height-request", callback: any): number
    once(sigName: "notify::height-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: any): number
    on(sigName: "notify::hexpand", callback: any): number
    once(sigName: "notify::hexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: any): number
    on(sigName: "notify::hexpand-set", callback: any): number
    once(sigName: "notify::hexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: any): number
    on(sigName: "notify::margin", callback: any): number
    once(sigName: "notify::margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: any): number
    on(sigName: "notify::margin-end", callback: any): number
    once(sigName: "notify::margin-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
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
    connect(sigName: "notify::margin-start", callback: any): number
    on(sigName: "notify::margin-start", callback: any): number
    once(sigName: "notify::margin-start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: any): number
    on(sigName: "notify::tooltip-markup", callback: any): number
    once(sigName: "notify::tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: any): number
    on(sigName: "notify::valign", callback: any): number
    once(sigName: "notify::valign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: any): number
    on(sigName: "notify::vexpand", callback: any): number
    once(sigName: "notify::vexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: any): number
    on(sigName: "notify::vexpand-set", callback: any): number
    once(sigName: "notify::vexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: any): number
    on(sigName: "notify::width-request", callback: any): number
    once(sigName: "notify::width-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CoreView extends Gtk.EventBox {

    // Own properties of Retro-0.14.Retro.CoreView

    static name: string

    // Constructors of Retro-0.14.Retro.CoreView

    constructor(config?: CoreView.ConstructorProperties) 
    /**
     * Creates a new #RetroCoreView.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #RetroCoreView.
     * @constructor 
     */
    static new(): CoreView

    // Overloads of new

    /**
     * Creates a new #GtkEventBox.
     * @constructor 
     */
    static new(): Gtk.EventBox
    _init(config?: CoreView.ConstructorProperties): void
}

export module KeyJoypadMapping {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyJoypadMapping {

    // Owm methods of Retro-0.14.Retro.KeyJoypadMapping

    /**
     * Gets the mapping key code for the joypad button id.
     * @param button joypad button id
     */
    getButtonKey(button: JoypadId): number
    /**
     * Maps the joypad button id to mapping key code.
     * @param button joypad button id
     * @param hardwareKeycode mapping key code
     */
    setButtonKey(button: JoypadId, hardwareKeycode: number): void

    // Class property signals of Retro-0.14.Retro.KeyJoypadMapping

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeyJoypadMapping extends GObject.Object {

    // Own properties of Retro-0.14.Retro.KeyJoypadMapping

    static name: string

    // Constructors of Retro-0.14.Retro.KeyJoypadMapping

    constructor(config?: KeyJoypadMapping.ConstructorProperties) 
    /**
     * Creates a new #RetroKeyJoypadMapping.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #RetroKeyJoypadMapping.
     * @constructor 
     */
    static new(): KeyJoypadMapping
    /**
     * Creates a new #RetroKeyJoypadMapping with the default mapping.
     * @constructor 
     */
    static newDefault(): KeyJoypadMapping
    _init(config?: KeyJoypadMapping.ConstructorProperties): void
}

export module MainLoop {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-0.14.Retro.MainLoop

        core?: Core | null
        speedRate?: number | null
    }

}

export interface MainLoop {

    // Own properties of Retro-0.14.Retro.MainLoop

    core: Core
    speedRate: number

    // Owm methods of Retro-0.14.Retro.MainLoop

    /**
     * Gets the core handled by `self`.
     */
    getCore(): Core
    /**
     * Gets the speed rate at which to run the core.
     */
    getSpeedRate(): number
    /**
     * Resets the core. Results depend on the core's implementation.
     */
    reset(): void
    /**
     * Sets `core` as the #RetroCore handled by `self`.
     * @param core a #RetroCore, or %NULL
     */
    setCore(core: Core | null): void
    /**
     * Sets the speed rate at which to run the core.
     * @param speedRate a speed rate
     */
    setSpeedRate(speedRate: number): void
    /**
     * Starts running the core. If the core was stopped, it will restart from this moment.
     */
    start(): void
    /**
     * Stops running the core.
     */
    stop(): void

    // Class property signals of Retro-0.14.Retro.MainLoop

    connect(sigName: "notify::core", callback: any): number
    on(sigName: "notify::core", callback: any): number
    once(sigName: "notify::core", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::core", ...args: any[]): void
    connect(sigName: "notify::speed-rate", callback: any): number
    on(sigName: "notify::speed-rate", callback: any): number
    once(sigName: "notify::speed-rate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::speed-rate", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MainLoop extends GObject.Object {

    // Own properties of Retro-0.14.Retro.MainLoop

    static name: string

    // Constructors of Retro-0.14.Retro.MainLoop

    constructor(config?: MainLoop.ConstructorProperties) 
    /**
     * Creates a new #RetroMainLoop.
     * @constructor 
     * @param core 
     */
    constructor(core: Core) 
    /**
     * Creates a new #RetroMainLoop.
     * @constructor 
     * @param core 
     */
    static new(core: Core): MainLoop
    _init(config?: MainLoop.ConstructorProperties): void
}

export module ModuleIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ModuleIterator {

    // Owm methods of Retro-0.14.Retro.ModuleIterator

    /**
     * Gets the last #RetroCoreDescriptor fetched by retro_module_iterator_next(),
     * or %NULL if the end was reached.
     */
    get(): CoreDescriptor | null
    /**
     * Fetch the next #RetroModuleIterator.
     */
    next(): boolean

    // Class property signals of Retro-0.14.Retro.ModuleIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ModuleIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ModuleIterator

    static name: string

    // Constructors of Retro-0.14.Retro.ModuleIterator

    constructor(config?: ModuleIterator.ConstructorProperties) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookupPaths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     */
    constructor(lookupPaths: string[], recursive: boolean) 
    /**
     * Creates a new #RetroModuleIterator.
     * @constructor 
     * @param lookupPaths paths where to look for Libretro cores
     * @param recursive whether to run the query in sub-directories
     */
    static new(lookupPaths: string[], recursive: boolean): ModuleIterator
    _init(config?: ModuleIterator.ConstructorProperties): void
}

export module ModuleQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ModuleQuery {

    // Owm methods of Retro-0.14.Retro.ModuleQuery

    /**
     * Creates a new #RetroModuleIterator.
     */
    iterator(): ModuleIterator

    // Class property signals of Retro-0.14.Retro.ModuleQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ModuleQuery extends GObject.Object {

    // Own properties of Retro-0.14.Retro.ModuleQuery

    static name: string

    // Constructors of Retro-0.14.Retro.ModuleQuery

    constructor(config?: ModuleQuery.ConstructorProperties) 
    /**
     * Creates a new #RetroModuleQuery.
     * @constructor 
     * @param recursive whether to run the query in sub-directories
     */
    constructor(recursive: boolean) 
    /**
     * Creates a new #RetroModuleQuery.
     * @constructor 
     * @param recursive whether to run the query in sub-directories
     */
    static new(recursive: boolean): ModuleQuery
    _init(config?: ModuleQuery.ConstructorProperties): void
}

export module Option {

    // Signal callback interfaces

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Option {

    // Owm methods of Retro-0.14.Retro.Option

    /**
     * Gets the description of `self`.
     */
    getDescription(): string
    /**
     * Gets the key of `self`.
     */
    getKey(): string
    /**
     * Gets the value of `self`.
     */
    getValue(): string
    /**
     * Gets the value of `self`.
     */
    getValues(): string[]
    /**
     * Sets the value for `self`. An error will be thrown if the value is invalid for
     * `self`.
     * @param value the value
     */
    setValue(value: string): void

    // Own signals of Retro-0.14.Retro.Option

    connect(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    once(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Retro-0.14.Retro.Option

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Option extends GObject.Object {

    // Own properties of Retro-0.14.Retro.Option

    static name: string

    // Constructors of Retro-0.14.Retro.Option

    constructor(config?: Option.ConstructorProperties) 
    _init(config?: Option.ConstructorProperties): void
}

export module OptionIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface OptionIterator {

    // Owm methods of Retro-0.14.Retro.OptionIterator

    /**
     * Fetch the next #RetroOption and its key.
     */
    next(): [ /* returnType */ boolean, /* key */ number, /* option */ Option | null ]

    // Class property signals of Retro-0.14.Retro.OptionIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OptionIterator extends GObject.Object {

    // Own properties of Retro-0.14.Retro.OptionIterator

    static name: string

    // Constructors of Retro-0.14.Retro.OptionIterator

    constructor(config?: OptionIterator.ConstructorProperties) 
    _init(config?: OptionIterator.ConstructorProperties): void
}

export interface ControllerInterface {

    // Own fields of Retro-0.14.Retro.ControllerInterface

    parentIface: GObject.TypeInterface
    poll: (self: Controller) => void
    getInputState: (self: Controller, input: Input) => number
    getControllerType: (self: Controller) => ControllerType
    getCapabilities: (self: Controller) => number
    setRumbleState: (self: Controller, effect: RumbleEffect, strength: number) => boolean
}

export abstract class ControllerInterface {

    // Own properties of Retro-0.14.Retro.ControllerInterface

    static name: string
}

export interface ControllerIteratorClass {

    // Own fields of Retro-0.14.Retro.ControllerIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class ControllerIteratorClass {

    // Own properties of Retro-0.14.Retro.ControllerIteratorClass

    static name: string
}

export interface CoreClass {

    // Own fields of Retro-0.14.Retro.CoreClass

    parentClass: GObject.ObjectClass
}

export abstract class CoreClass {

    // Own properties of Retro-0.14.Retro.CoreClass

    static name: string
}

export interface CoreDescriptorClass {

    // Own fields of Retro-0.14.Retro.CoreDescriptorClass

    parentClass: GObject.ObjectClass
}

export abstract class CoreDescriptorClass {

    // Own properties of Retro-0.14.Retro.CoreDescriptorClass

    static name: string
}

export interface CoreViewClass {

    // Own fields of Retro-0.14.Retro.CoreViewClass

    parentClass: Gtk.EventBoxClass
}

export abstract class CoreViewClass {

    // Own properties of Retro-0.14.Retro.CoreViewClass

    static name: string
}

export interface KeyJoypadMappingClass {

    // Own fields of Retro-0.14.Retro.KeyJoypadMappingClass

    parentClass: GObject.ObjectClass
}

export abstract class KeyJoypadMappingClass {

    // Own properties of Retro-0.14.Retro.KeyJoypadMappingClass

    static name: string
}

export interface MainLoopClass {

    // Own fields of Retro-0.14.Retro.MainLoopClass

    parentClass: GObject.ObjectClass
}

export abstract class MainLoopClass {

    // Own properties of Retro-0.14.Retro.MainLoopClass

    static name: string
}

export interface ModuleIteratorClass {

    // Own fields of Retro-0.14.Retro.ModuleIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class ModuleIteratorClass {

    // Own properties of Retro-0.14.Retro.ModuleIteratorClass

    static name: string
}

export interface ModuleQueryClass {

    // Own fields of Retro-0.14.Retro.ModuleQueryClass

    parentClass: GObject.ObjectClass
}

export abstract class ModuleQueryClass {

    // Own properties of Retro-0.14.Retro.ModuleQueryClass

    static name: string
}

export interface OptionClass {

    // Own fields of Retro-0.14.Retro.OptionClass

    parentClass: GObject.ObjectClass
}

export abstract class OptionClass {

    // Own properties of Retro-0.14.Retro.OptionClass

    static name: string
}

export interface OptionIteratorClass {

    // Own fields of Retro-0.14.Retro.OptionIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class OptionIteratorClass {

    // Own properties of Retro-0.14.Retro.OptionIteratorClass

    static name: string
}

export interface Pixdata {

    // Owm methods of Retro-0.14.Retro.Pixdata

    /**
     * Copies `self` into a new #RetroPixdata.
     */
    copy(): Pixdata
    /**
     * Frees the given #RetroPixdata object.
     */
    free(): void
    /**
     * Gets the aspect ratio the video should be rendered with.
     */
    getAspectRatio(): number
    /**
     * Gets the height of `self`.
     */
    getHeight(): number
    /**
     * Gets the width of `self`.
     */
    getWidth(): number
    /**
     * Loads an OpenGL texture from `self`.
     */
    loadGlTexture(): boolean
    /**
     * Creates a new #GdkPixbuf from `self`.
     */
    toPixbuf(): GdkPixbuf.Pixbuf
}

export class Pixdata {

    // Own properties of Retro-0.14.Retro.Pixdata

    static name: string
}

export interface Input {

    // Owm methods of Retro-0.14.Retro.Input

    /**
     * Copies `self` into a new #RetroInput.
     */
    copy(): Input
    /**
     * Frees the given #RetroInput.
     */
    free(): void
    /**
     * Gets the analog id and index of %self, if any.
     */
    getAnalog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     */
    getControllerType(): ControllerType
    /**
     * Gets the joypad id of %self, if any.
     */
    getJoypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of %self, if any.
     */
    getLightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of %self, if any.
     */
    getMouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of %self, if any.
     */
    getPointer(): [ /* returnType */ boolean, /* id */ PointerId ]
}

export class Input {

    // Own properties of Retro-0.14.Retro.Input

    static name: string

    // Constructors of Retro-0.14.Retro.Input

    /**
     * Creates a new #RetroInput.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #RetroInput.
     * @constructor 
     */
    static new(): Input
}
