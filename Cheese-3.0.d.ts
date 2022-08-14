
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cheese-3.0
 */

import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as Clutter from './Clutter-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Errors that can occur during camera setup, when calling
 * cheese_camera_setup().
 */
export enum CameraError {
    /**
     * unknown error
     */
    UNKNOWN,
    /**
     * a required GStreamer element was not
     * found
     */
    ELEMENT_NOT_FOUND,
    /**
     * a #CheeseCameraDevice was not found
     */
    NO_DEVICE,
}
/**
 * The media type, used for generating filenames with
 * cheese_fileutil_get_new_media_filename().
 */
export enum MediaMode {
    /**
     * photo
     */
    PHOTO,
    /**
     * video
     */
    VIDEO,
    /**
     * a burst of photos
     */
    BURST,
}
/**
 * The filename suffix for photos saved by Cheese.
 */
export const PHOTO_NAME_SUFFIX: string
/**
 * The filename suffix for videos saved by Cheese.
 */
export const VIDEO_NAME_SUFFIX: string
export module Camera {

    // Signal callback interfaces

    /**
     * Signal callback interface for `photo-saved`
     */
    export interface PhotoSavedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `photo-taken`
     */
    export interface PhotoTakenSignalCallback {
        (pixbuf: GdkPixbuf.Pixbuf): void
    }

    /**
     * Signal callback interface for `state-flags-changed`
     */
    export interface StateFlagsChangedSignalCallback {
        (state: number): void
    }

    /**
     * Signal callback interface for `video-saved`
     */
    export interface VideoSavedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Cheese-3.0.Cheese.Camera

        /**
         * The device object to capture from.
         */
        device?: CameraDevice | null
        /**
         * The format of the video capture device.
         */
        format?: VideoFormat | null
        /**
         * The video texture for the #CheeseCamera to render into.
         */
        videoTexture?: object | null
    }

}

export interface Camera {

    // Own properties of Cheese-3.0.Cheese.Camera

    /**
     * The device object to capture from.
     */
    device: CameraDevice
    /**
     * The format of the video capture device.
     */
    format: VideoFormat
    /**
     * The currently number of camera devices available for being used.
     */
    readonly numCameraDevices: number
    /**
     * The video texture for the #CheeseCamera to render into.
     */
    videoTexture: object

    // Owm methods of Cheese-3.0.Cheese.Camera

    /**
     * Connect the supplied `texture` to the `camera,` using `effect`.
     * @param effect a #CheeseEffect
     * @param texture a #ClutterActor
     */
    connectEffectTexture(effect: Effect, texture: Clutter.Actor): void
    /**
     * Get the minimum, maximum and default values for the requested `property` of
     * the `camera`.
     * @param property name of the balance property
     */
    getBalancePropertyRange(property: string): [ /* returnType */ boolean, /* min */ number, /* max */ number, /* def */ number ]
    /**
     * Get the list of #CheeseCameraDevice objects, representing active video
     * capture devices on the system.
     */
    getCameraDevices(): CameraDevice[]
    /**
     * Get the #CheeseVideoFormat that is currently set on the `camera`.
     */
    getCurrentVideoFormat(): VideoFormat
    /**
     * Get a string representation of the playing time
     * of the current video recording
     */
    getRecordedTime(): string
    /**
     * Get the currently-selected #CheeseCameraDevice of the `camera`.
     */
    getSelectedDevice(): CameraDevice
    /**
     * Gets the list of #CheeseVideoFormat supported by the selected
     * #CheeseCameraDevice on the `camera`.
     */
    getVideoFormats(): VideoFormat[]
    /**
     * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
     * playing.
     */
    play(): void
    /**
     * Set the requested `property` on the `camera` to `value`.
     * @param property name of the balance property
     * @param value value to be set
     */
    setBalanceProperty(property: string, value: number): void
    /**
     * Set the active video capture device of the `camera`.
     * @param device the device object
     */
    setDevice(device: CameraDevice): void
    /**
     * Set the `effect` on the `camera`.
     * @param effect a #CheeseEffect
     */
    setEffect(effect: Effect): void
    /**
     * Sets a #CheeseVideoFormat on a #CheeseCamera, restarting the video stream if
     * necessary.
     * @param format a #CheeseVideoFormat
     */
    setVideoFormat(format: VideoFormat): void
    /**
     * Setup a video capture device.
     * @param device the video capture device, or %NULL
     */
    setup(device: CameraDevice | null): void
    /**
     * Start a video recording with the `camera` and save it to `filename`.
     * @param filename the name of the video file to where the recording will be saved
     */
    startVideoRecording(filename: string): void
    /**
     * Set the state of the GStreamer pipeline associated with the #CheeseCamera to
     * NULL.
     */
    stop(): void
    /**
     * Stop recording video on the `camera`.
     */
    stopVideoRecording(): void
    /**
     * Toggle the playing/recording state of the `camera`.
     */
    switchCameraDevice(): void
    /**
     * Save a photo taken with the `camera` to a new file at `filename`.
     * @param filename name of the file to save a photo to
     */
    takePhoto(filename: string): boolean
    /**
     * Take a photo with the `camera` and emit it in the ::capture-start signal as a
     * #GdkPixbuf.
     */
    takePhotoPixbuf(): boolean
    /**
     * Control whether the effects pipeline is enabled for `camera`.
     * @param active %TRUE if effects pipeline is active, %FALSE otherwise
     */
    toggleEffectsPipeline(active: boolean): void

    // Own virtual methods of Cheese-3.0.Cheese.Camera

    photoSaved(): void
    photoTaken(pixbuf: GdkPixbuf.Pixbuf): void
    stateFlagsChanged(newState: Gst.State): void
    videoSaved(): void

    // Own signals of Cheese-3.0.Cheese.Camera

    connect(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): number
    on(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): number
    once(sigName: "photo-saved", callback: Camera.PhotoSavedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "photo-saved", ...args: any[]): void
    connect(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): number
    on(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): number
    once(sigName: "photo-taken", callback: Camera.PhotoTakenSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "photo-taken", ...args: any[]): void
    connect(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): number
    on(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): number
    once(sigName: "state-flags-changed", callback: Camera.StateFlagsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-flags-changed", ...args: any[]): void
    connect(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): number
    on(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): number
    once(sigName: "video-saved", callback: Camera.VideoSavedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "video-saved", ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.Camera

    connect(sigName: "notify::device", callback: any): number
    on(sigName: "notify::device", callback: any): number
    once(sigName: "notify::device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::num-camera-devices", callback: any): number
    on(sigName: "notify::num-camera-devices", callback: any): number
    once(sigName: "notify::num-camera-devices", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-camera-devices", ...args: any[]): void
    connect(sigName: "notify::video-texture", callback: any): number
    on(sigName: "notify::video-texture", callback: any): number
    once(sigName: "notify::video-texture", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-texture", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class Camera extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Camera

    static name: string

    // Constructors of Cheese-3.0.Cheese.Camera

    constructor(config?: Camera.ConstructorProperties) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param videoTexture an actor in which to render the video
     * @param name the name of the device
     * @param xResolution the resolution width
     * @param yResolution the resolution height
     */
    constructor(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number) 
    /**
     * Create a new #CheeseCamera object.
     * @constructor 
     * @param videoTexture an actor in which to render the video
     * @param name the name of the device
     * @param xResolution the resolution width
     * @param yResolution the resolution height
     */
    static new(videoTexture: Clutter.Actor, name: string | null, xResolution: number, yResolution: number): Camera
    _init(config?: Camera.ConstructorProperties): void
}

export module CameraDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Cheese-3.0.Cheese.CameraDevice

        /**
         * GStreamer device object of the video capture device.
         */
        device?: Gst.Device | null
        /**
         * Human-readable name of the video capture device, for display to the user.
         */
        name?: string | null
        /**
         * Path of the video capture device.
         */
        path?: string | null
    }

}

export interface CameraDevice extends Gio.Initable {

    // Own properties of Cheese-3.0.Cheese.CameraDevice

    /**
     * GStreamer device object of the video capture device.
     */
    readonly device: Gst.Device
    /**
     * Human-readable name of the video capture device, for display to the user.
     */
    readonly name: string
    /**
     * Path of the video capture device.
     */
    readonly path: string

    // Owm methods of Cheese-3.0.Cheese.CameraDevice

    /**
     * Get the #CheeseVideoFormat with the highest resolution with a width greater
     * than 640 pixels and a framerate of greater than 15 FPS for this `device`. If
     * no such format is found, get the highest available resolution instead.
     */
    getBestFormat(): VideoFormat
    /**
     * Get the #GstCaps for the given `format` on the `device`.
     * @param format a #CheeseVideoFormat
     */
    getCapsForFormat(format: VideoFormat): Gst.Caps
    /**
     * Get the sorted list of #CheeseVideoFormat that the `device` supports.
     */
    getFormatList(): VideoFormat[]
    /**
     * Get a human-readable name for the device, as reported by udev, which is
     * suitable for display to a user.
     */
    getName(): string
    /**
     * Get path for the device, as reported by udev.
     */
    getPath(): string
    /**
     * Get the source GStreamer element for the `device`.
     */
    getSrc(): Gst.Element

    // Class property signals of Cheese-3.0.Cheese.CameraDevice

    connect(sigName: "notify::device", callback: any): number
    on(sigName: "notify::device", callback: any): number
    once(sigName: "notify::device", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::device", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class CameraDevice extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDevice

    static name: string

    // Constructors of Cheese-3.0.Cheese.CameraDevice

    constructor(config?: CameraDevice.ConstructorProperties) 
    /**
     * Tries to create a new #CheeseCameraDevice with the supplied device. If
     * construction fails, %NULL is returned, and `error` is set.
     * @constructor 
     * @param device The GStreamer the device, as supplied by GstDeviceMonitor
     */
    constructor(device: Gst.Device) 
    /**
     * Tries to create a new #CheeseCameraDevice with the supplied device. If
     * construction fails, %NULL is returned, and `error` is set.
     * @constructor 
     * @param device The GStreamer the device, as supplied by GstDeviceMonitor
     */
    static new(device: Gst.Device): CameraDevice
    _init(config?: CameraDevice.ConstructorProperties): void
    /**
     * Get the #GstCaps that are supported for all #CheeseCameraDevice
     */
    static supportedFormatCaps(): Gst.Caps
}

export module CameraDeviceMonitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `added`
     */
    export interface AddedSignalCallback {
        (device: CameraDevice): void
    }

    /**
     * Signal callback interface for `removed`
     */
    export interface RemovedSignalCallback {
        (device: CameraDevice): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface CameraDeviceMonitor extends Gio.AsyncInitable, Gio.Initable {

    // Owm methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    /**
     * Enumerate plugged in cameras and emit ::added for those which already exist.
     * This is only required when your program starts, so be sure to connect to
     * at least the ::added signal before calling this function.
     */
    coldplug(): void

    // Own virtual methods of Cheese-3.0.Cheese.CameraDeviceMonitor

    added(device: CameraDevice): void
    removed(device: CameraDevice): void

    // Own signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): number
    on(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): number
    once(sigName: "added", callback: CameraDeviceMonitor.AddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "added", ...args: any[]): void
    connect(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): number
    on(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): number
    once(sigName: "removed", callback: CameraDeviceMonitor.RemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "removed", ...args: any[]): void

    // Class property signals of Cheese-3.0.Cheese.CameraDeviceMonitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class CameraDeviceMonitor extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitor

    static name: string

    // Constructors of Cheese-3.0.Cheese.CameraDeviceMonitor

    constructor(config?: CameraDeviceMonitor.ConstructorProperties) 
    /**
     * Returns a new #CheeseCameraDeviceMonitor object. The initialization may block.
     * See cheese_camera_device_monitor_new_async() for the asynchronous version.
     * @constructor 
     */
    constructor() 
    /**
     * Returns a new #CheeseCameraDeviceMonitor object. The initialization may block.
     * See cheese_camera_device_monitor_new_async() for the asynchronous version.
     * @constructor 
     */
    static new(): CameraDeviceMonitor
    /**
     * Finishes creating a new #CheeseCameraDeviceMonitor object.
     * @constructor 
     * @param result the GAsyncResult from the callback
     */
    static newFinish(result: Gio.AsyncResult): CameraDeviceMonitor
    _init(config?: CameraDeviceMonitor.ConstructorProperties): void
    /**
     * Creates a new #CheeseCameraDeviceMonitor object asynchronously. Callback
     * will be called when it is done. Use cheese_camera_device_monitor_new_finish()
     * to get the result.
     * 
     * See cheese_camera_device_monitor_new() for the synchronous version.
     * @param cancellable a #GCancellable or NULL
     * @param callback a GAsyncReadyCallback to call when the initialization is finished
     */
    static newAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
}

export module Effect {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Cheese-3.0.Cheese.Effect

        /**
         * If the control valve is active, then the effect is currently connected to
         * a video stream, for previews.
         */
        controlValve?: Gst.Element | null
        /**
         * Name of the effect, for display in a UI.
         */
        name?: string | null
        /**
         * Description of the GStreamer pipeline associated with the effect.
         */
        pipelineDesc?: string | null
    }

}

export interface Effect {

    // Own properties of Cheese-3.0.Cheese.Effect

    /**
     * If the control valve is active, then the effect is currently connected to
     * a video stream, for previews.
     */
    controlValve: Gst.Element
    /**
     * Name of the effect, for display in a UI.
     */
    readonly name: string
    /**
     * Description of the GStreamer pipeline associated with the effect.
     */
    readonly pipelineDesc: string

    // Owm methods of Cheese-3.0.Cheese.Effect

    /**
     * Disable the preview of a #CheeseEffect.
     */
    disablePreview(): void
    /**
     * Enable the preview of a #CheeseEffect.
     */
    enablePreview(): void
    /**
     * Get the human-readable name of the `effect`.
     */
    getName(): string
    /**
     * Get the Gstreamer pipeline description of the `effect`.
     */
    getPipelineDesc(): string
    /**
     * Get whether the `effect` is connected to a video stream, for previews.
     */
    isPreviewConnected(): boolean

    // Class property signals of Cheese-3.0.Cheese.Effect

    connect(sigName: "notify::control-valve", callback: any): number
    on(sigName: "notify::control-valve", callback: any): number
    once(sigName: "notify::control-valve", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::control-valve", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::pipeline-desc", callback: any): number
    on(sigName: "notify::pipeline-desc", callback: any): number
    once(sigName: "notify::pipeline-desc", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pipeline-desc", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class Effect extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.Effect

    static name: string

    // Constructors of Cheese-3.0.Cheese.Effect

    constructor(config?: Effect.ConstructorProperties) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipelineDesc GStreamer pipeline of the new effect
     */
    constructor(name: string, pipelineDesc: string) 
    /**
     * Create a new #CheeseEffect.
     * @constructor 
     * @param name name of the effect
     * @param pipelineDesc GStreamer pipeline of the new effect
     */
    static new(name: string, pipelineDesc: string): Effect
    _init(config?: Effect.ConstructorProperties): void
    /**
     * Load effects from standard directories, including the user's data directory.
     */
    static loadEffects(): Effect[]
    /**
     * Load effect from file.
     * @param filename name of the file containing the effect specification
     */
    static loadFromFile(filename: string): Effect
}

export module FileUtil {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FileUtil {

    // Owm methods of Cheese-3.0.Cheese.FileUtil

    /**
     * Creates a filename for one of the three media types: photo, photo burst or
     * video. If a filename for a photo burst image was previously created, this
     * function increments the burst count automatically. To start a new burst,
     * first call cheese_fileutil_reset_burst().
     * @param mode the type of media to create a filename for
     */
    getNewMediaFilename(mode: MediaMode): string
    /**
     * Get the path where Cheese photo files are stored.
     */
    getPhotoPath(): string
    /**
     * Get the path where Cheese video files are stored.
     */
    getVideoPath(): string
    /**
     * Resets the burst counter, so that calling
     * cheese_fileutil_get_new_media_filename() with a photo burst starts a new
     * burst of photos.
     */
    resetBurst(): void

    // Class property signals of Cheese-3.0.Cheese.FileUtil

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Use the accessor functions below.
 * @class 
 */
export class FileUtil extends GObject.Object {

    // Own properties of Cheese-3.0.Cheese.FileUtil

    static name: string

    // Constructors of Cheese-3.0.Cheese.FileUtil

    constructor(config?: FileUtil.ConstructorProperties) 
    /**
     * Create a new #CheeseFileUtil object.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #CheeseFileUtil object.
     * @constructor 
     */
    static new(): FileUtil
    _init(config?: FileUtil.ConstructorProperties): void
}

export interface CameraClass {

    // Own fields of Cheese-3.0.Cheese.CameraClass

    photoSaved: (camera: Camera) => void
    photoTaken: (camera: Camera, pixbuf: GdkPixbuf.Pixbuf) => void
    videoSaved: (camera: Camera) => void
    stateFlagsChanged: (camera: Camera, newState: Gst.State) => void
}

/**
 * Class for #CheeseCamera.
 * @record 
 */
export abstract class CameraClass {

    // Own properties of Cheese-3.0.Cheese.CameraClass

    static name: string
}

export interface CameraDeviceClass {

    // Own fields of Cheese-3.0.Cheese.CameraDeviceClass

    parentClass: GObject.ObjectClass
}

export abstract class CameraDeviceClass {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceClass

    static name: string
}

export interface CameraDeviceMonitorClass {

    // Own fields of Cheese-3.0.Cheese.CameraDeviceMonitorClass

    added: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
    removed: (monitor: CameraDeviceMonitor, device: CameraDevice) => void
}

/**
 * Class for #CheeseCameraDeviceMonitor.
 * @record 
 */
export abstract class CameraDeviceMonitorClass {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitorClass

    static name: string
}

export interface CameraDeviceMonitorPrivate {
}

export class CameraDeviceMonitorPrivate {

    // Own properties of Cheese-3.0.Cheese.CameraDeviceMonitorPrivate

    static name: string
}

export interface CameraPrivate {
}

export class CameraPrivate {

    // Own properties of Cheese-3.0.Cheese.CameraPrivate

    static name: string
}

export interface EffectClass {

    // Own fields of Cheese-3.0.Cheese.EffectClass

    parentClass: GObject.ObjectClass
}

export abstract class EffectClass {

    // Own properties of Cheese-3.0.Cheese.EffectClass

    static name: string
}

export interface FileUtilClass {

    // Own fields of Cheese-3.0.Cheese.FileUtilClass

    parentClass: GObject.ObjectClass
}

export abstract class FileUtilClass {

    // Own properties of Cheese-3.0.Cheese.FileUtilClass

    static name: string
}

export interface VideoFormat {

    // Own fields of Cheese-3.0.Cheese.VideoFormat

    /**
     * the width of of the video, in pixels
     * @field 
     */
    width: number
    /**
     * the height of the video, in pixels
     * @field 
     */
    height: number
}

/**
 * A description of the resolution, in pixels, of the format to capture with a
 * #CheeseCameraDevice.
 * @record 
 */
export class VideoFormat {

    // Own properties of Cheese-3.0.Cheese.VideoFormat

    static name: string
}
