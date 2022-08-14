
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GnomeBG-4.0
 */

import type * as GnomeDesktop from './GnomeDesktop-4.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as GDesktopEnums from './GDesktopEnums-3.0.js';
import type * as Gdk from './Gdk-4.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';

export module BG {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `transitioned`
     */
    export interface TransitionedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface BG {

    // Owm methods of GnomeBG-4.0.GnomeBG.BG

    changesWithTime(): boolean
    /**
     * Creates a thumbnail for a certain frame, where 'frame' is somewhat
     * vaguely defined as 'suitable point to show while single-stepping
     * through the slideshow'.
     * @param factory 
     * @param screenArea 
     * @param destWidth 
     * @param destHeight 
     * @param frameNum 
     */
    createFrameThumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screenArea: cairo.RectangleInt, destWidth: number, destHeight: number, frameNum: number): GdkPixbuf.Pixbuf
    /**
     * Create a surface that can be set as background for `window`.
     * @param window 
     * @param width 
     * @param height 
     */
    createSurface(window: Gdk.Surface, width: number, height: number): cairo.Surface
    createThumbnail(factory: GnomeDesktop.DesktopThumbnailFactory, screenArea: cairo.RectangleInt, destWidth: number, destHeight: number): GdkPixbuf.Pixbuf
    draw(dest: GdkPixbuf.Pixbuf): void
    getFilename(): string
    getImageSize(factory: GnomeDesktop.DesktopThumbnailFactory, bestWidth: number, bestHeight: number, width: number, height: number): boolean
    getPlacement(): GDesktopEnums.BackgroundStyle
    getRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void
    hasMultipleSizes(): boolean
    isDark(destWidth: number, destHeight: number): boolean
    loadFromPreferences(settings: Gio.Settings): void
    saveToPreferences(settings: Gio.Settings): void
    setFilename(filename: string): void
    setPlacement(placement: GDesktopEnums.BackgroundStyle): void
    setRgba(type: GDesktopEnums.BackgroundShading, primary: Gdk.RGBA, secondary: Gdk.RGBA): void

    // Own signals of GnomeBG-4.0.GnomeBG.BG

    connect(sigName: "changed", callback: BG.ChangedSignalCallback): number
    on(sigName: "changed", callback: BG.ChangedSignalCallback): number
    once(sigName: "changed", callback: BG.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    on(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    once(sigName: "transitioned", callback: BG.TransitionedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "transitioned", ...args: any[]): void

    // Class property signals of GnomeBG-4.0.GnomeBG.BG

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BG extends GObject.Object {

    // Own properties of GnomeBG-4.0.GnomeBG.BG

    static name: string

    // Constructors of GnomeBG-4.0.GnomeBG.BG

    constructor(config?: BG.ConstructorProperties) 
    constructor() 
    static new(): BG
    _init(config?: BG.ConstructorProperties): void
}

export module BGSlideShow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GnomeBG-4.0.GnomeBG.BGSlideShow

        file?: Gio.File | null
    }

}

export interface BGSlideShow {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    readonly file: Gio.File
    readonly hasMultipleSizes: boolean
    readonly startTime: number
    readonly totalDuration: number

    // Own fields of GnomeBG-4.0.GnomeBG.BGSlideShow

    parentObject: GObject.Object
    priv: BGSlideShowPrivate

    // Owm methods of GnomeBG-4.0.GnomeBG.BGSlideShow

    /**
     * Returns the current slides progress.
     * @param width monitor width
     * @param height monitor height
     */
    getCurrentSlide(width: number, height: number): [ /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets whether or not the slide show has multiple sizes for different monitors
     */
    getHasMultipleSizes(): boolean
    /**
     * Returns number of slides in slide show
     */
    getNumSlides(): number
    /**
     * Retrieves slide by frame number
     * @param frameNumber frame number
     * @param width monitor width
     * @param height monitor height
     */
    getSlide(frameNumber: number, width: number, height: number): [ /* returnType */ boolean, /* progress */ number, /* duration */ number, /* isFixed */ boolean, /* file1 */ string, /* file2 */ string ]
    /**
     * gets the start time of the slide show
     */
    getStartTime(): number
    /**
     * gets the total duration of the slide show
     */
    getTotalDuration(): number
    /**
     * Tries to load the slide show.
     */
    load(): boolean
    /**
     * Tries to load the slide show asynchronously.
     * @param cancellable a #GCancellable
     * @param callback the callback
     */
    loadAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GnomeBG-4.0.GnomeBG.BGSlideShow

    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::has-multiple-sizes", callback: any): number
    on(sigName: "notify::has-multiple-sizes", callback: any): number
    once(sigName: "notify::has-multiple-sizes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-multiple-sizes", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: any): number
    on(sigName: "notify::start-time", callback: any): number
    once(sigName: "notify::start-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::total-duration", callback: any): number
    on(sigName: "notify::total-duration", callback: any): number
    once(sigName: "notify::total-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::total-duration", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BGSlideShow extends GObject.Object {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShow

    static name: string

    // Constructors of GnomeBG-4.0.GnomeBG.BGSlideShow

    constructor(config?: BGSlideShow.ConstructorProperties) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     */
    constructor(filename: string) 
    /**
     * Creates a new object to manage a slide show.
     * window background between two #cairo_surface_ts.
     * @constructor 
     * @param filename The filename of the slide show
     */
    static new(filename: string): BGSlideShow
    _init(config?: BGSlideShow.ConstructorProperties): void
}

export interface BGClass {
}

export abstract class BGClass {

    // Own properties of GnomeBG-4.0.GnomeBG.BGClass

    static name: string
}

export interface BGSlideShowClass {

    // Own fields of GnomeBG-4.0.GnomeBG.BGSlideShowClass

    parentClass: GObject.ObjectClass
}

export abstract class BGSlideShowClass {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShowClass

    static name: string
}

export interface BGSlideShowPrivate {
}

export class BGSlideShowPrivate {

    // Own properties of GnomeBG-4.0.GnomeBG.BGSlideShowPrivate

    static name: string
}
