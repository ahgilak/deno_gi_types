
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Retro-2
 */

import type * as Gtk from './Gtk-4.0.js';
import type * as Gsk from './Gsk-4.0.js';
import type * as Graphene from './Graphene-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gdk from './Gdk-4.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';

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
     * the fourth button of a mouse
     */
    BUTTON_4,
    /**
     * the fifth button of a mouse
     */
    BUTTON_5,
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
}
export function controllerTypeGetIdCount(type: ControllerType): number
export function controllerTypeGetIndexCount(type: ControllerType): number
/**
 * Logs an error or debugging message.
 * 
 * This is a convenience function to forward the #RetroCore::log signal of
 * #RetroCore to g_log(), see it for more information.
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

    // Signal callback interfaces

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Controller {

    // Owm methods of Retro-2.Retro.Controller

    emitStateChanged(): void
    // Has conflict: getCapabilities(): number
    // Has conflict: getControllerType(): ControllerType
    // Has conflict: getInputState(input: Input): number
    // Has conflict: getSupportsRumble(): boolean
    /**
     * Gets whether `self` has the capability to represent the given controller type.
     * @param controllerType a #RetroControllerType
     */
    hasCapability(controllerType: ControllerType): boolean
    // Has conflict: setRumbleState(effect: RumbleEffect, strength: number): void

    // Own virtual methods of Retro-2.Retro.Controller

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
     * Gets whether `self` supports rumble effects.
     * @virtual 
     */
    getSupportsRumble(): boolean
    /**
     * Sets the rumble state of `self`.
     * @virtual 
     * @param effect the rumble effect
     * @param strength the rumble effect strength
     */
    setRumbleState(effect: RumbleEffect, strength: number): void

    // Own signals of Retro-2.Retro.Controller

    connect(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: Controller.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", ...args: any[]): void

    // Class property signals of Retro-2.Retro.Controller

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Controller extends GObject.Object {

    // Own properties of Retro-2.Retro.Controller

    static name: string

    // Constructors of Retro-2.Retro.Controller

    constructor(config?: Controller.ConstructorProperties) 
    _init(config?: Controller.ConstructorProperties): void
}

export module ControllerIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ControllerIterator {

    // Owm methods of Retro-2.Retro.ControllerIterator

    /**
     * Fetch the next #RetroController and the port number it is plugged into.
     */
    next(): [ /* returnType */ boolean, /* port */ number, /* controller */ Controller ]

    // Class property signals of Retro-2.Retro.ControllerIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ControllerIterator extends GObject.Object {

    // Own properties of Retro-2.Retro.ControllerIterator

    static name: string

    // Constructors of Retro-2.Retro.ControllerIterator

    constructor(config?: ControllerIterator.ConstructorProperties) 
    _init(config?: ControllerIterator.ConstructorProperties): void
}

export module Core {

    // Signal callback interfaces

    /**
     * Signal callback interface for `crashed`
     */
    export interface CrashedSignalCallback {
        (message: string): void
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
        (message: string, frames: number): void
    }

    /**
     * Signal callback interface for `shutdown`
     */
    export interface ShutdownSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `video-output`
     */
    export interface VideoOutputSignalCallback {
        (pixdata: Pixdata): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Retro-2.Retro.Core

        coreAssetsDirectory?: string | null
        /**
         * The filename of the core.
         */
        filename?: string | null
        /**
         * The number of frames to run ahead of time. This allows to know in advance
         * what should happen in the given number of frames, allowing to react in
         * advance.
         * 
         * Note that this is resource intensive as the core will be iterated over
         * multiple times for each perceived iteration. In order to work, this
         * requires the cores to properly support serialization, otherwise the
         * behavior is undefined.
         */
        runahead?: number | null
        /**
         * The save directory of the core.
         * 
         * The core will save some data here.
         */
        saveDirectory?: string | null
        /**
         * The speed ratio at wich the core will run.
         */
        speedRate?: number | null
        /**
         * The system directory of the core.
         * 
         * The core will look here for additional data, such as firmware ROMs or
         * configuration files.
         */
        systemDirectory?: string | null
        /**
         * The name of the user.
         */
        userName?: string | null
    }

}

export interface Core {

    // Own properties of Retro-2.Retro.Core

    /**
     * The Libretro API version implement by the core.
     */
    readonly apiVersion: number
    coreAssetsDirectory: string
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
     * The number of frames to run ahead of time. This allows to know in advance
     * what should happen in the given number of frames, allowing to react in
     * advance.
     * 
     * Note that this is resource intensive as the core will be iterated over
     * multiple times for each perceived iteration. In order to work, this
     * requires the cores to properly support serialization, otherwise the
     * behavior is undefined.
     */
    runahead: number
    /**
     * The save directory of the core.
     * 
     * The core will save some data here.
     */
    saveDirectory: string
    /**
     * The speed ratio at wich the core will run.
     */
    speedRate: number
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
    /**
     * The name of the user.
     */
    userName: string

    // Owm methods of Retro-2.Retro.Core

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
    getCoreAssetsDirectory(): string
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
     * Gets the speed rate at which to run the core.
     */
    getSpeedRate(): number
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
     * Gets the name of the user.
     */
    getUserName(): string
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
     * Iterate `self` for a frame.
     */
    iteration(): void
    /**
     * Loads a memory region of `self`.
     * @param memoryType the type of memory
     * @param filename a file to load the data from
     */
    loadMemory(memoryType: MemoryType, filename: string): void
    /**
     * Loads the state of the `self`.
     * @param filename the file to load the state from
     */
    loadState(filename: string): void
    /**
     * Overrides default value for the option `key`. This can be used to set value
     * for a startup-only option.
     * 
     * You can use this before booting the core.
     * @param key the key of the option
     * @param value the default value
     */
    overrideOptionDefault(key: string, value: string): void
    /**
     * Resets `self`.
     */
    reset(): void
    /**
     * Starts running the core. If the core was stopped, it will restart from this
     * moment.
     */
    run(): void
    /**
     * Saves a memory region of `self`.
     * @param memoryType the type of memory
     * @param filename a file to save the data to
     */
    saveMemory(memoryType: MemoryType, filename: string): void
    /**
     * Saves the state of `self`.
     * @param filename the file to save the state to
     */
    saveState(filename: string): void
    /**
     * Plugs `controller` into the specified port number of `self`.
     * @param port the port number
     * @param controller a #RetroController
     */
    setController(port: number, controller: Controller | null): void
    setCoreAssetsDirectory(coreAssetsDirectory: string): void
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
    setRunahead(runahead: number): void
    /**
     * Sets the save directory of the core.
     * 
     * The core will save some data here.
     * @param saveDirectory the save directory
     */
    setSaveDirectory(saveDirectory: string): void
    /**
     * Sets the speed rate at which to run the core.
     * @param speedRate a speed rate
     */
    setSpeedRate(speedRate: number): void
    /**
     * Sets the system directory of the core.
     * 
     * The core will look here for additional data, such as firmware ROMs or
     * configuration files.
     * @param systemDirectory the system directory
     */
    setSystemDirectory(systemDirectory: string): void
    /**
     * Sets the name of the user.
     * @param userName the user name
     */
    setUserName(userName: string): void
    /**
     * Stops running the core.
     */
    stop(): void

    // Own signals of Retro-2.Retro.Core

    connect(sigName: "crashed", callback: Core.CrashedSignalCallback): number
    on(sigName: "crashed", callback: Core.CrashedSignalCallback): number
    once(sigName: "crashed", callback: Core.CrashedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "crashed", ...args: any[]): void
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

    // Class property signals of Retro-2.Retro.Core

    connect(sigName: "notify::api-version", callback: any): number
    on(sigName: "notify::api-version", callback: any): number
    once(sigName: "notify::api-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::api-version", ...args: any[]): void
    connect(sigName: "notify::core-assets-directory", callback: any): number
    on(sigName: "notify::core-assets-directory", callback: any): number
    once(sigName: "notify::core-assets-directory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::core-assets-directory", ...args: any[]): void
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
    connect(sigName: "notify::speed-rate", callback: any): number
    on(sigName: "notify::speed-rate", callback: any): number
    once(sigName: "notify::speed-rate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::speed-rate", ...args: any[]): void
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
    connect(sigName: "notify::user-name", callback: any): number
    on(sigName: "notify::user-name", callback: any): number
    once(sigName: "notify::user-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Core extends GObject.Object {

    // Own properties of Retro-2.Retro.Core

    static name: string

    // Constructors of Retro-2.Retro.Core

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

    // Owm methods of Retro-2.Retro.CoreDescriptor

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

    // Class property signals of Retro-2.Retro.CoreDescriptor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CoreDescriptor extends GObject.Object {

    // Own properties of Retro-2.Retro.CoreDescriptor

    static name: string

    // Constructors of Retro-2.Retro.CoreDescriptor

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

    // Signal callback interfaces

    /**
     * Signal callback interface for `controller-state-changed`
     */
    export interface ControllerStateChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Retro-2.Retro.CoreView

        canGrabPointer?: boolean | null
        snapPointerToBorders?: boolean | null
    }

}

export interface CoreView extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Retro-2.Retro.CoreView

    canGrabPointer: boolean
    snapPointerToBorders: boolean

    // Owm methods of Retro-2.Retro.CoreView

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

    // Own signals of Retro-2.Retro.CoreView

    connect(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): number
    on(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): number
    once(sigName: "controller-state-changed", callback: CoreView.ControllerStateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "controller-state-changed", ...args: any[]): void

    // Class property signals of Retro-2.Retro.CoreView

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
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::can-target", callback: any): number
    on(sigName: "notify::can-target", callback: any): number
    once(sigName: "notify::can-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-target", ...args: any[]): void
    connect(sigName: "notify::css-classes", callback: any): number
    on(sigName: "notify::css-classes", callback: any): number
    once(sigName: "notify::css-classes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-classes", ...args: any[]): void
    connect(sigName: "notify::css-name", callback: any): number
    on(sigName: "notify::css-name", callback: any): number
    once(sigName: "notify::css-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-name", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::focusable", callback: any): number
    on(sigName: "notify::focusable", callback: any): number
    once(sigName: "notify::focusable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focusable", ...args: any[]): void
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
    connect(sigName: "notify::layout-manager", callback: any): number
    on(sigName: "notify::layout-manager", callback: any): number
    once(sigName: "notify::layout-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::layout-manager", ...args: any[]): void
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
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::overflow", callback: any): number
    on(sigName: "notify::overflow", callback: any): number
    once(sigName: "notify::overflow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::overflow", ...args: any[]): void
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
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
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
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CoreView extends Gtk.Widget {

    // Own properties of Retro-2.Retro.CoreView

    static name: string

    // Constructors of Retro-2.Retro.CoreView

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
    _init(config?: CoreView.ConstructorProperties): void
}

export module KeyJoypadMapping {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface KeyJoypadMapping {

    // Owm methods of Retro-2.Retro.KeyJoypadMapping

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

    // Class property signals of Retro-2.Retro.KeyJoypadMapping

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeyJoypadMapping extends GObject.Object {

    // Own properties of Retro-2.Retro.KeyJoypadMapping

    static name: string

    // Constructors of Retro-2.Retro.KeyJoypadMapping

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

export module ModuleIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ModuleIterator {

    // Owm methods of Retro-2.Retro.ModuleIterator

    /**
     * Gets the last #RetroCoreDescriptor fetched by retro_module_iterator_next(),
     * or %NULL if the end was reached.
     */
    get(): CoreDescriptor | null
    /**
     * Fetch the next #RetroModuleIterator.
     */
    next(): boolean

    // Class property signals of Retro-2.Retro.ModuleIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ModuleIterator extends GObject.Object {

    // Own properties of Retro-2.Retro.ModuleIterator

    static name: string

    // Constructors of Retro-2.Retro.ModuleIterator

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

    // Owm methods of Retro-2.Retro.ModuleQuery

    /**
     * Creates a new #RetroModuleIterator.
     */
    iterator(): ModuleIterator

    // Class property signals of Retro-2.Retro.ModuleQuery

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ModuleQuery extends GObject.Object {

    // Own properties of Retro-2.Retro.ModuleQuery

    static name: string

    // Constructors of Retro-2.Retro.ModuleQuery

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

    // Owm methods of Retro-2.Retro.Option

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

    // Own signals of Retro-2.Retro.Option

    connect(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    once(sigName: "value-changed", callback: Option.ValueChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Retro-2.Retro.Option

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Option extends GObject.Object {

    // Own properties of Retro-2.Retro.Option

    static name: string

    // Constructors of Retro-2.Retro.Option

    constructor(config?: Option.ConstructorProperties) 
    _init(config?: Option.ConstructorProperties): void
}

export module OptionIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface OptionIterator {

    // Owm methods of Retro-2.Retro.OptionIterator

    /**
     * Fetch the next #RetroOption and its key.
     */
    next(): [ /* returnType */ boolean, /* key */ number, /* option */ Option | null ]

    // Class property signals of Retro-2.Retro.OptionIterator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OptionIterator extends GObject.Object {

    // Own properties of Retro-2.Retro.OptionIterator

    static name: string

    // Constructors of Retro-2.Retro.OptionIterator

    constructor(config?: OptionIterator.ConstructorProperties) 
    _init(config?: OptionIterator.ConstructorProperties): void
}

export interface ControllerInterface {

    // Own fields of Retro-2.Retro.ControllerInterface

    /**
     * The parent interface.
     * @field 
     */
    parentIface: GObject.TypeInterface
    getInputState: (self: Controller, input: Input) => number
    getControllerType: (self: Controller) => ControllerType
    getCapabilities: (self: Controller) => number
    getSupportsRumble: (self: Controller) => boolean
    setRumbleState: (self: Controller, effect: RumbleEffect, strength: number) => void
}

/**
 * An interface for a controller, e.g. a gamepad.
 * @record 
 */
export abstract class ControllerInterface {

    // Own properties of Retro-2.Retro.ControllerInterface

    static name: string
}

export interface ControllerIteratorClass {

    // Own fields of Retro-2.Retro.ControllerIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class ControllerIteratorClass {

    // Own properties of Retro-2.Retro.ControllerIteratorClass

    static name: string
}

export interface CoreClass {

    // Own fields of Retro-2.Retro.CoreClass

    parentClass: GObject.ObjectClass
}

export abstract class CoreClass {

    // Own properties of Retro-2.Retro.CoreClass

    static name: string
}

export interface CoreDescriptorClass {

    // Own fields of Retro-2.Retro.CoreDescriptorClass

    parentClass: GObject.ObjectClass
}

export abstract class CoreDescriptorClass {

    // Own properties of Retro-2.Retro.CoreDescriptorClass

    static name: string
}

export interface CoreViewClass {

    // Own fields of Retro-2.Retro.CoreViewClass

    parentClass: Gtk.WidgetClass
}

export abstract class CoreViewClass {

    // Own properties of Retro-2.Retro.CoreViewClass

    static name: string
}

export interface KeyJoypadMappingClass {

    // Own fields of Retro-2.Retro.KeyJoypadMappingClass

    parentClass: GObject.ObjectClass
}

export abstract class KeyJoypadMappingClass {

    // Own properties of Retro-2.Retro.KeyJoypadMappingClass

    static name: string
}

export interface ModuleIteratorClass {

    // Own fields of Retro-2.Retro.ModuleIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class ModuleIteratorClass {

    // Own properties of Retro-2.Retro.ModuleIteratorClass

    static name: string
}

export interface ModuleQueryClass {

    // Own fields of Retro-2.Retro.ModuleQueryClass

    parentClass: GObject.ObjectClass
}

export abstract class ModuleQueryClass {

    // Own properties of Retro-2.Retro.ModuleQueryClass

    static name: string
}

export interface OptionClass {

    // Own fields of Retro-2.Retro.OptionClass

    parentClass: GObject.ObjectClass
}

export abstract class OptionClass {

    // Own properties of Retro-2.Retro.OptionClass

    static name: string
}

export interface OptionIteratorClass {

    // Own fields of Retro-2.Retro.OptionIteratorClass

    parentClass: GObject.ObjectClass
}

export abstract class OptionIteratorClass {

    // Own properties of Retro-2.Retro.OptionIteratorClass

    static name: string
}

export interface Pixdata {

    // Owm methods of Retro-2.Retro.Pixdata

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
     * 
     * The #GdkPixbuf stores the intended aspect-ratio, you can access it via
     * retro_pixbuf_get_aspect_ratio().
     */
    toPixbuf(): GdkPixbuf.Pixbuf
}

export class Pixdata {

    // Own properties of Retro-2.Retro.Pixdata

    static name: string
}

export interface Input {

    // Owm methods of Retro-2.Retro.Input

    /**
     * Copies `self` into a new #RetroInput.
     */
    copy(): Input
    /**
     * Frees the given #RetroInput.
     */
    free(): void
    /**
     * Gets the analog id and index of `self,` if any.
     */
    getAnalog(): [ /* returnType */ boolean, /* id */ AnalogId, /* index */ AnalogIndex ]
    /**
     * Gets the controller type of `self`.
     */
    getControllerType(): ControllerType
    /**
     * Gets the joypad id of `self,` if any.
     */
    getJoypad(): [ /* returnType */ boolean, /* id */ JoypadId ]
    /**
     * Gets the lightgun id of `self,` if any.
     */
    getLightgun(): [ /* returnType */ boolean, /* id */ LightgunId ]
    /**
     * Gets the mouse id of `self,` if any.
     */
    getMouse(): [ /* returnType */ boolean, /* id */ MouseId ]
    /**
     * Gets the pointer id of `self,` if any.
     */
    getPointer(): [ /* returnType */ boolean, /* id */ PointerId ]
}

export class Input {

    // Own properties of Retro-2.Retro.Input

    static name: string

    // Constructors of Retro-2.Retro.Input

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
