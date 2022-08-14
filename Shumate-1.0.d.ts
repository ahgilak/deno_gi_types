
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Shumate-1.0
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
 * Error codes in the #SHUMATE_FILE_CACHE_ERROR domain.
 */
export enum FileCacheError {
    /**
     * An unspecified error occurred during the operation.
     */
    FAILED,
}
/**
 * Projections supported by the library.
 */
export enum MapProjection {
    /**
     * Currently the only supported projection
     */
    MERCATOR,
}
/**
 * Tile loading state.
 */
export enum State {
    /**
     * Initial or undefined state
     */
    NONE,
    /**
     * Tile is loading
     */
    LOADING,
    /**
     * Tile is loaded but not yet displayed
     */
    LOADED,
    /**
     * Tile loading finished. Also used to inform map sources
     *     that tile loading has been cancelled.
     */
    DONE,
}
/**
 * Error codes that occurs while parsing the style in [class`VectorRenderer]`.
 */
export enum StyleError {
    /**
     * An unspecified error occurred during the operation.
     */
    FAILED,
    /**
     * A JSON node in the style has the wrong type (e.g. an object where there should be an array).
     */
    MALFORMED_STYLE,
    /**
     * An unsupported layer type was encountered.
     */
    UNSUPPORTED_LAYER,
    /**
     * An invalid or unrecognized expression was encountered.
     */
    INVALID_EXPRESSION,
    /**
     * Libshumate was compiled without vector tile support.
     */
    SUPPORT_OMITTED,
}
/**
 * Error codes in the #SHUMATE_TILE_DOWNLOADER_ERROR domain.
 */
export enum TileDownloaderError {
    /**
     * An unspecified error occurred during the operation.
     */
    FAILED,
    /**
     * An unsuccessful HTTP response was received from the server.
     */
    BAD_RESPONSE,
    /**
     * The server could not be reached.
     */
    COULD_NOT_CONNECT,
    /**
     * The provided URL isn't valid
     */
    MALFORMED_URL,
    /**
     * The tile source has been marked as offline.
     */
    OFFLINE,
}
/**
 * Units used by the scale.
 */
export enum Unit {
    /**
     * Both metric and imperial units
     */
    BOTH,
    /**
     * Metric units (meters)
     */
    METRIC,
    /**
     * Imperial units (miles)
     */
    IMPERIAL,
}
/**
 * The major version of libshumate (1, if %SHUMATE_VERSION is 1.2.3)
 */
export const MAJOR_VERSION: number
/**
 * Maps for Free Relief
 */
export const MAP_SOURCE_MFF_RELIEF: string
/**
 * OpenStreetMap Cycle Map
 */
export const MAP_SOURCE_OSM_CYCLE_MAP: string
/**
 * OpenStreetMap Mapnik
 */
export const MAP_SOURCE_OSM_MAPNIK: string
/**
 * OpenStreetMap Transport Map
 */
export const MAP_SOURCE_OSM_TRANSPORT_MAP: string
/**
 * OpenWeatherMap clouds layer
 */
export const MAP_SOURCE_OWM_CLOUDS: string
/**
 * OpenWeatherMap precipitation
 */
export const MAP_SOURCE_OWM_PRECIPITATION: string
/**
 * OpenWeatherMap sea level pressure
 */
export const MAP_SOURCE_OWM_PRESSURE: string
/**
 * OpenWeatherMap temperature
 */
export const MAP_SOURCE_OWM_TEMPERATURE: string
/**
 * OpenWeatherMap wind
 */
export const MAP_SOURCE_OWM_WIND: string
/**
 * The maximal possible latitude value.
 */
export const MAX_LATITUDE: number
/**
 * The maximal possible longitude value.
 */
export const MAX_LONGITUDE: number
/**
 * The micro version of libshumate (3, if %SHUMATE_VERSION is 1.2.3)
 */
export const MICRO_VERSION: number
/**
 * The minor version of libshumate (2, if %SHUMATE_VERSION is 1.2.3)
 */
export const MINOR_VERSION: number
/**
 * The minimal possible latitude value.
 */
export const MIN_LATITUDE: number
/**
 * The minimal possible longitude value.
 */
export const MIN_LONGITUDE: number
/**
 * Gets the #ShumateFileCache error quark.
 */
export function fileCacheErrorQuark(): GLib.Quark
/**
 * Gets the user agent libshumate will use for all requests.
 * 
 * This API is not thread-safe and should only be called from the main thread.
 */
export function getUserAgent(): string
/**
 * Sets the user agent that libshumate uses for all requests.
 * 
 * This API is not thread-safe and should only be called from the main thread.
 * @param newUserAgent the new user agent, or %NULL to reset to the default
 */
export function setUserAgent(newUserAgent: string | null): void
export function styleErrorQuark(): GLib.Quark
/**
 * Gets the #ShumateTileDownloader error quark.
 */
export function tileDownloaderErrorQuark(): GLib.Quark
export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Location

        /**
         * The latitude coordonate in degrees
         */
        latitude?: number | null
        /**
         * The longitude coordonate in degrees
         */
        longitude?: number | null
    }

}

export interface Location {

    // Own properties of Shumate-1.0.Shumate.Location

    /**
     * The latitude coordonate in degrees
     */
    latitude: number
    /**
     * The longitude coordonate in degrees
     */
    longitude: number

    // Owm methods of Shumate-1.0.Shumate.Location

    // Has conflict: getLatitude(): number
    // Has conflict: getLongitude(): number
    // Has conflict: setLocation(latitude: number, longitude: number): void

    // Own virtual methods of Shumate-1.0.Shumate.Location

    /**
     * Gets the latitude coordinate in degrees.
     * @virtual 
     */
    getLatitude(): number
    /**
     * Gets the longitude coordinate in degrees.
     * @virtual 
     */
    getLongitude(): number
    /**
     * Sets the coordinates of the location
     * @virtual 
     * @param latitude the latitude in degrees
     * @param longitude the longitude in degrees
     */
    setLocation(latitude: number, longitude: number): void

    // Class property signals of Shumate-1.0.Shumate.Location

    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An interface common to objects having latitude and longitude
 * 
 * By implementing #ShumateLocation the object declares that it has latitude
 * and longitude and can be used to specify location on the map.
 * @interface 
 */
export class Location extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.Location

    static name: string

    // Constructors of Shumate-1.0.Shumate.Location

    constructor(config?: Location.ConstructorProperties) 
    _init(config?: Location.ConstructorProperties): void
}

export module Compass {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Compass

        /**
         * The viewport to use.
         */
        viewport?: Viewport | null
    }

}

export interface Compass extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Compass

    /**
     * The viewport to use.
     */
    viewport: Viewport

    // Owm methods of Shumate-1.0.Shumate.Compass

    /**
     * Gets the viewport used by the compass.
     */
    getViewport(): Viewport | null
    /**
     * Sets the compass viewport.
     * @param viewport a [class`Viewport]`
     */
    setViewport(viewport: Viewport | null): void

    // Class property signals of Shumate-1.0.Shumate.Compass

    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * A widget displaying a compass.
 * 
 * # CSS nodes
 * 
 * ```
 * map-compass
 * ├── revealer
 * ├──── image
 * ```
 * 
 * `ShumateCompass` uses a single CSS node with name map-compass. It also uses an
 * image named "map-compass".
 * @class 
 */
export class Compass extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Compass

    static name: string

    // Constructors of Shumate-1.0.Shumate.Compass

    constructor(config?: Compass.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateCompass.
     * @constructor 
     * @param viewport a #ShumateViewport
     */
    constructor(viewport: Viewport | null) 
    /**
     * Creates an instance of #ShumateCompass.
     * @constructor 
     * @param viewport a #ShumateViewport
     */
    static new(viewport: Viewport | null): Compass
    _init(config?: Compass.ConstructorProperties): void
}

export module Coordinate {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface Coordinate extends Location {

    // Own fields of Shumate-1.0.Shumate.Coordinate

    parentInstance: GObject.InitiallyUnowned

    // Class property signals of Shumate-1.0.Shumate.Coordinate

    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A simple object implementing [iface`Location]`.
 * @class 
 */
export class Coordinate extends GObject.InitiallyUnowned {

    // Own properties of Shumate-1.0.Shumate.Coordinate

    static name: string

    // Constructors of Shumate-1.0.Shumate.Coordinate

    constructor(config?: Coordinate.ConstructorProperties) 
    /**
     * Creates a new instance of #ShumateCoordinate.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ShumateCoordinate.
     * @constructor 
     */
    static new(): Coordinate
    /**
     * Creates a new instance of #ShumateCoordinate initialized with the given
     * coordinates.
     * @constructor 
     * @param latitude the latitude coordinate
     * @param longitude the longitude coordinate
     */
    static newFull(latitude: number, longitude: number): Coordinate
    _init(config?: Coordinate.ConstructorProperties): void
}

export module DataSource {

    // Signal callback interfaces

    /**
     * Signal callback interface for `received-data`
     */
    export interface ReceivedDataSignalCallback {
        (x: number, y: number, zoomLevel: number, bytes: any): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataSource {

    // Own fields of Shumate-1.0.Shumate.DataSource

    parentInstance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.DataSource

    // Has conflict: getTileDataAsync(x: number, y: number, zoomLevel: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: getTileDataFinish(result: Gio.AsyncResult): any | null

    // Own virtual methods of Shumate-1.0.Shumate.DataSource

    /**
     * Gets the data for the tile at the given coordinates.
     * 
     * Some data sources may return data multiple times. For example,
     * [class`TileDownloader]` may return data from a cache, then return updated
     * data from the network. [signal`ShumateDataSource:`:received-data] is emitted
     * each time data is received, then `callback` is called after the last update.
     * @virtual 
     * @param x the X coordinate to fetch
     * @param y the Y coordinate to fetch
     * @param zoomLevel the Z coordinate to fetch
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    getTileDataAsync(x: number, y: number, zoomLevel: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the final result of a request started with
     * shumate_data_source_get_tile_data_async().
     * @virtual 
     * @param result a #GAsyncResult provided to callback
     */
    getTileDataFinish(result: Gio.AsyncResult): any | null

    // Own signals of Shumate-1.0.Shumate.DataSource

    connect(sigName: "received-data", callback: DataSource.ReceivedDataSignalCallback): number
    on(sigName: "received-data", callback: DataSource.ReceivedDataSignalCallback): number
    once(sigName: "received-data", callback: DataSource.ReceivedDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "received-data", y: number, zoomLevel: number, bytes: any, ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.DataSource

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The base class used to retrieve tiles as [class`GLib`.Bytes].
 * @class 
 */
export class DataSource extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.DataSource

    static name: string

    // Constructors of Shumate-1.0.Shumate.DataSource

    constructor(config?: DataSource.ConstructorProperties) 
    _init(config?: DataSource.ConstructorProperties): void
}

export module FileCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.FileCache

        /**
         * The directory where the tile database is stored.
         */
        cacheDir?: string | null
        /**
         * The key used to store and retrieve tiles from the cache. Different keys
         * can be used to store multiple tilesets in the same cache directory.
         */
        cacheKey?: string | null
        /**
         * The cache size limit in bytes.
         * 
         * Note: this new value will not be applied until you call shumate_file_cache_purge()
         */
        sizeLimit?: number | null
    }

}

export interface FileCache {

    // Own properties of Shumate-1.0.Shumate.FileCache

    /**
     * The directory where the tile database is stored.
     */
    readonly cacheDir: string
    /**
     * The key used to store and retrieve tiles from the cache. Different keys
     * can be used to store multiple tilesets in the same cache directory.
     */
    readonly cacheKey: string
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call shumate_file_cache_purge()
     */
    sizeLimit: number

    // Own fields of Shumate-1.0.Shumate.FileCache

    parentInstance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.FileCache

    /**
     * Gets the directory where the cache database is stored.
     */
    getCacheDir(): string
    /**
     * Gets the key used to store and retrieve tiles from the cache. Different keys
     * can be used to store multiple tilesets in the same cache directory.
     */
    getCacheKey(): string
    /**
     * Gets the cache size limit in bytes.
     */
    getSizeLimit(): number
    /**
     * Gets tile data from the cache, if it is available.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoomLevel the zoom level of the tile
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    getTileAsync(x: number, y: number, zoomLevel: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the tile data from a completed shumate_file_cache_get_tile_async()
     * operation.
     * 
     * `modtime` will be set to the time the tile was added to the cache, or the
     * latest time it was confirmed to be up to date.
     * 
     * `etag` will be set to the data's ETag, if present.
     * @param result a #GAsyncResult provided to callback
     */
    getTileFinish(result: Gio.AsyncResult): [ /* returnType */ any, /* etag */ string | null, /* modtime */ GLib.DateTime | null ]
    /**
     * Marks a tile in the cache as being up to date, without changing its data.
     * 
     * For example, a network source might call this function when it gets an HTTP
     * 304 Not Modified response.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoomLevel the zoom level of the tile
     */
    markUpToDate(x: number, y: number, zoomLevel: number): void
    /**
     * Removes less used tiles from the cache, if necessary, until it fits in
     * the size limit.
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    purgeCacheAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result of an async operation started using
     * shumate_file_cache_purge_cache_async().
     * @param result a #GAsyncResult provided to callback
     */
    purgeCacheFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the cache size limit in bytes.
     * @param sizeLimit the cache limit in bytes
     */
    setSizeLimit(sizeLimit: number): void
    /**
     * Stores a tile in the cache.
     * @param x the X coordinate of the tile
     * @param y the Y coordinate of the tile
     * @param zoomLevel the zoom level of the tile
     * @param bytes a #GBytes
     * @param etag an ETag string, or %NULL
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    storeTileAsync(x: number, y: number, zoomLevel: number, bytes: any, etag: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the success value of a completed shumate_file_cache_store_tile_async()
     * operation.
     * @param result a #GAsyncResult provided to callback
     */
    storeTileFinish(result: Gio.AsyncResult): boolean

    // Class property signals of Shumate-1.0.Shumate.FileCache

    connect(sigName: "notify::cache-dir", callback: any): number
    on(sigName: "notify::cache-dir", callback: any): number
    once(sigName: "notify::cache-dir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::cache-key", callback: any): number
    on(sigName: "notify::cache-key", callback: any): number
    once(sigName: "notify::cache-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-key", ...args: any[]): void
    connect(sigName: "notify::size-limit", callback: any): number
    on(sigName: "notify::size-limit", callback: any): number
    once(sigName: "notify::size-limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A cache that stores and retrieves tiles from the file system. It is mainly
 * used by [class`TileDownloader]`, but can also be used by custom data
 * sources.
 * 
 * The cache will be filled up to a certain size limit. When this limit is
 * reached, the cache can be purged, and the tiles that are accessed least are
 * deleted.
 * 
 * ## ETags
 * 
 * The cache can optionally store an ETag string with each tile. This is
 * useful to avoid redownloading old tiles that haven't changed (for example,
 * using the HTTP If-None-Match header).
 * @class 
 */
export class FileCache extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.FileCache

    static name: string

    // Constructors of Shumate-1.0.Shumate.FileCache

    constructor(config?: FileCache.ConstructorProperties) 
    /**
     * Constructor of #ShumateFileCache.
     * @constructor 
     * @param sizeLimit maximum size of the cache in bytes
     * @param cacheKey an ID for the tileset to store/retrieve
     * @param cacheDir the directory where the cache is created. When cache_dir == NULL, a cache in ~/.cache/shumate is used.
     */
    static newFull(sizeLimit: number, cacheKey: string, cacheDir: string | null): FileCache
    _init(config?: FileCache.ConstructorProperties): void
}

export module Layer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Layer

        viewport?: Viewport | null
    }

}

export interface Layer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Layer

    readonly viewport: Viewport

    // Own fields of Shumate-1.0.Shumate.Layer

    parentInstance: any

    // Owm methods of Shumate-1.0.Shumate.Layer

    /**
     * Gets the #ShumateViewport used by this layer.
     */
    getViewport(): Viewport

    // Class property signals of Shumate-1.0.Shumate.Layer

    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * Every layer (overlay that moves together with the map) has to inherit this
 * class and implement its virtual methods.
 * 
 * You can use the same layer to display many types of maps.  In Shumate they
 * are called map sources.  You can change the [property`MapLayer:`map-source]
 * property at any time to replace the current displayed map.
 * @class 
 */
export class Layer extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Layer

    static name: string

    // Constructors of Shumate-1.0.Shumate.Layer

    constructor(config?: Layer.ConstructorProperties) 
    _init(config?: Layer.ConstructorProperties): void
}

export module License {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.License

        /**
         * Sets additional text to be displayed in the license area.  The map's
         * license will be added below it. Your text can have multiple lines, just use
         * "\n" in between.
         */
        extraText?: string | null
        /**
         * The license's horizontal alignment
         */
        xalign?: number | null
    }

}

export interface License extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.License

    /**
     * Sets additional text to be displayed in the license area.  The map's
     * license will be added below it. Your text can have multiple lines, just use
     * "\n" in between.
     */
    extraText: string
    /**
     * The license's horizontal alignment
     */
    xalign: number

    // Owm methods of Shumate-1.0.Shumate.License

    appendMapSource(mapSource: MapSource): void
    /**
     * Gets the additional license text.
     */
    getExtraText(): string
    /**
     * Get the license's text horizontal alignment.
     */
    getXalign(): number
    prependMapSource(mapSource: MapSource): void
    removeMapSource(mapSource: MapSource): void
    /**
     * Show the additional license text on the map view.  The text will preceed the
     * map's licence when displayed. Use "\n" to separate the lines.
     * @param text the additional license text
     */
    setExtraText(text: string): void
    /**
     * Set the license's text horizontal alignment.
     * @param xalign The license's text horizontal alignment
     */
    setXalign(xalign: number): void

    // Class property signals of Shumate-1.0.Shumate.License

    connect(sigName: "notify::extra-text", callback: any): number
    on(sigName: "notify::extra-text", callback: any): number
    once(sigName: "notify::extra-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-text", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
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

/**
 * A widget that displays license text.
 * @class 
 */
export class License extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.License

    static name: string

    // Constructors of Shumate-1.0.Shumate.License

    constructor(config?: License.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateLicense.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ShumateLicense.
     * @constructor 
     */
    static new(): License
    _init(config?: License.ConstructorProperties): void
}

export module Map {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-completed`
     */
    export interface AnimationCompletedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Map

        /**
         * Animate zoom change when zooming in/out.
         */
        animateZoom?: boolean | null
        /**
         * The duration of an animation when going to a location, in milliseconds.
         * A value of 0 means that the duration is calculated automatically for you.
         * 
         * Please note that animation of #shumate_map_ensure_visible also
         * involves a 'go-to' animation.
         */
        goToDuration?: number | null
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoomOnDoubleClick?: boolean | null
    }

}

export interface Map extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Map

    /**
     * Animate zoom change when zooming in/out.
     */
    animateZoom: boolean
    /**
     * The duration of an animation when going to a location, in milliseconds.
     * A value of 0 means that the duration is calculated automatically for you.
     * 
     * Please note that animation of #shumate_map_ensure_visible also
     * involves a 'go-to' animation.
     */
    goToDuration: number
    /**
     * The view's global state. Useful to inform using if the view is busy loading
     * tiles or not.
     */
    readonly state: State
    /**
     * The viewport, which contains information about the center, rotation, zoom,
     * etc. of the map.
     */
    readonly viewport: Viewport
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoomOnDoubleClick: boolean

    // Own fields of Shumate-1.0.Shumate.Map

    parentInstance: any

    // Owm methods of Shumate-1.0.Shumate.Map

    /**
     * Adds a new layer to the view
     * @param layer a #ShumateLayer
     */
    addLayer(layer: Layer): void
    /**
     * Centers the map on these coordinates.
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    centerOn(latitude: number, longitude: number): void
    /**
     * Checks whether the view animates zoom level changes.
     */
    getAnimateZoom(): boolean
    /**
     * Get the 'go-to-duration' property.
     */
    getGoToDuration(): number
    /**
     * Gets the view's state.
     */
    getState(): State
    /**
     * Get the #ShumateViewport used by this view.
     */
    getViewport(): Viewport
    /**
     * Checks whether the view zooms on double click.
     */
    getZoomOnDoubleClick(): boolean
    /**
     * Move from the current position to these coordinates. All tiles in the
     * intermediate view WILL be loaded!
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    goTo(latitude: number, longitude: number): void
    /**
     * Adds `layer` to `self` above `next_sibling` or, if `next_sibling` is %NULL, at
     * the bottom of the layer list.
     * @param layer a #ShumateLayer
     * @param nextSibling a #ShumateLayer that is a child of `self,` or %NULL
     */
    insertLayerAbove(layer: Layer, nextSibling: Layer | null): void
    /**
     * Adds `layer` to `self` behind `next_sibling` or, if `next_sibling` is %NULL, at
     * the top of the layer list.
     * @param layer a #ShumateLayer
     * @param nextSibling a #ShumateLayer that is a child of `self,` or %NULL
     */
    insertLayerBehind(layer: Layer, nextSibling: Layer | null): void
    /**
     * Removes the given layer from the view
     * @param layer a #ShumateLayer
     */
    removeLayer(layer: Layer): void
    /**
     * Should the view animate zoom level changes.
     * @param value a #gboolean
     */
    setAnimateZoom(value: boolean): void
    /**
     * Set the duration of the transition of [method`Map`.go_to].
     * @param duration the animation duration, in milliseconds
     */
    setGoToDuration(duration: number): void
    /**
     * Changes the currently used map source. #g_object_unref() will be called on
     * the previous one.
     * 
     * As a side effect, changing the primary map source will also clear all
     * secondary map sources.
     * @param mapSource a #ShumateMapSource
     */
    setMapSource(mapSource: MapSource): void
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     * @param value a #gboolean
     */
    setZoomOnDoubleClick(value: boolean): void
    /**
     * Stop the go to animation.  The view will stay where it was when the
     * animation was stopped.
     */
    stopGoTo(): void

    // Own signals of Shumate-1.0.Shumate.Map

    connect(sigName: "animation-completed", callback: Map.AnimationCompletedSignalCallback): number
    on(sigName: "animation-completed", callback: Map.AnimationCompletedSignalCallback): number
    once(sigName: "animation-completed", callback: Map.AnimationCompletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "animation-completed", ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.Map

    connect(sigName: "notify::animate-zoom", callback: any): number
    on(sigName: "notify::animate-zoom", callback: any): number
    once(sigName: "notify::animate-zoom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::animate-zoom", ...args: any[]): void
    connect(sigName: "notify::go-to-duration", callback: any): number
    on(sigName: "notify::go-to-duration", callback: any): number
    once(sigName: "notify::go-to-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::go-to-duration", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
    connect(sigName: "notify::zoom-on-double-click", callback: any): number
    on(sigName: "notify::zoom-on-double-click", callback: any): number
    once(sigName: "notify::zoom-on-double-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-on-double-click", ...args: any[]): void
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

/**
 * The Map widget is a [class`Gtk`.Widget] that show and allows interaction with
 * the user.
 * 
 * This is the base widget and doesn't have advanced features. You can check the
 * [class`Shumate`.SimpleMap] for a ready-to-use widget.
 * 
 * By default, a [class`Shumate`.ViewPort] is created and can be accessed with
 * [method`Shumate`.Map.get_viewport].
 * 
 * Unless created with [ctor`Shumate`.Map.new_simple], the widget doesn't hold any
 * layer and won't show anything. A [class`Shumate`.Layer] can be added or removed
 * using the [method`Shumate`.Map.add_layer] or [method`Shumate`.Map.remove_layer]
 * methods.
 * @class 
 */
export class Map extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Map

    static name: string

    // Constructors of Shumate-1.0.Shumate.Map

    constructor(config?: Map.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateMap.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ShumateMap.
     * @constructor 
     */
    static new(): Map
    static newSimple(): Map
    _init(config?: Map.ConstructorProperties): void
}

export module MapLayer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MapLayer

        mapSource?: MapSource | null
    }

}

export interface MapLayer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.MapLayer

    readonly mapSource: MapSource

    // Conflicting properties

    parentInstance: any

    // Class property signals of Shumate-1.0.Shumate.MapLayer

    connect(sigName: "notify::map-source", callback: any): number
    on(sigName: "notify::map-source", callback: any): number
    once(sigName: "notify::map-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::map-source", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * A [class`Shumate`.Layer] implementation that fetches tiles from a [class`Shumate`.MapSource]
 * and draws them as a grid.
 * @class 
 */
export class MapLayer extends Layer {

    // Own properties of Shumate-1.0.Shumate.MapLayer

    static name: string

    // Constructors of Shumate-1.0.Shumate.MapLayer

    constructor(config?: MapLayer.ConstructorProperties) 
    constructor(mapSource: MapSource, viewport: Viewport) 
    static new(mapSource: MapSource, viewport: Viewport): MapLayer
    _init(config?: MapLayer.ConstructorProperties): void
}

export module MapSource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MapSource

        /**
         * The id of the map source
         */
        id?: string | null
        /**
         * The usage license of the map source
         */
        license?: string | null
        /**
         * The usage license's uri for more information
         */
        licenseUri?: string | null
        /**
         * The maximum zoom level
         */
        maxZoomLevel?: number | null
        /**
         * The minimum zoom level
         */
        minZoomLevel?: number | null
        /**
         * The name of the map source
         */
        name?: string | null
        /**
         * The map projection of the map source
         */
        projection?: MapProjection | null
        /**
         * The tile size of the map source
         */
        tileSize?: number | null
    }

}

export interface MapSource {

    // Own properties of Shumate-1.0.Shumate.MapSource

    /**
     * The id of the map source
     */
    id: string
    /**
     * The usage license of the map source
     */
    license: string
    /**
     * The usage license's uri for more information
     */
    licenseUri: string
    /**
     * The maximum zoom level
     */
    maxZoomLevel: number
    /**
     * The minimum zoom level
     */
    minZoomLevel: number
    /**
     * The name of the map source
     */
    name: string
    /**
     * The map projection of the map source
     */
    projection: MapProjection
    /**
     * The tile size of the map source
     */
    tileSize: number

    // Own fields of Shumate-1.0.Shumate.MapSource

    parentInstance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.MapSource

    // Has conflict: fillTileAsync(tile: Tile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: fillTileFinish(result: Gio.AsyncResult): boolean
    /**
     * Gets the number of tiles in a column at this zoom level for this map
     * source.
     * @param zoomLevel the zoom level
     */
    getColumnCount(zoomLevel: number): number
    /**
     * Gets map source's id.
     */
    getId(): string
    /**
     * Gets the latitude corresponding to this y position in the map source's
     * projection.
     * @param zoomLevel the zoom level
     * @param y a y position
     */
    getLatitude(zoomLevel: number, y: number): number
    /**
     * Gets map source's license.
     */
    getLicense(): string
    /**
     * Gets map source's license URI.
     */
    getLicenseUri(): string
    /**
     * Gets the longitude corresponding to this x position in the map source's
     * projection.
     * @param zoomLevel the zoom level
     * @param x a x position
     */
    getLongitude(zoomLevel: number, x: number): number
    /**
     * Gets map source's maximum zoom level.
     */
    getMaxZoomLevel(): number
    /**
     * Gets meters per pixel at the position on the map using this map source's projection.
     * @param zoomLevel the zoom level
     * @param latitude a latitude
     * @param longitude a longitude
     */
    getMetersPerPixel(zoomLevel: number, latitude: number, longitude: number): number
    /**
     * Gets map source's minimum zoom level.
     */
    getMinZoomLevel(): number
    /**
     * Gets map source's name.
     */
    getName(): string
    /**
     * Gets map source's projection.
     */
    getProjection(): MapProjection
    /**
     * Gets the number of tiles in a row at this zoom level for this map source.
     * @param zoomLevel the zoom level
     */
    getRowCount(zoomLevel: number): number
    /**
     * Gets map source's tile size.
     */
    getTileSize(): number
    /**
     * Gets the apparent size of the map tiles at the given fractional zoom level.
     * 
     * As the map is zoomed in, a tile gets bigger and bigger until, at the next
     * integer zoom level, it "splits" into four tiles at the next zoom level.
     * Thus, the size increase follows an exponential curve, base 2.
     * @param zoomLevel a zoom level
     */
    getTileSizeAtZoom(zoomLevel: number): number
    /**
     * Gets the x position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoomLevel the zoom level
     * @param longitude a longitude
     */
    getX(zoomLevel: number, longitude: number): number
    /**
     * Gets the y position on the map using this map source's projection.
     * (0, 0) is located at the top left.
     * @param zoomLevel the zoom level
     * @param latitude a latitude
     */
    getY(zoomLevel: number, latitude: number): number
    /**
     * Sets the map source's id.
     * @param id an id
     */
    setId(id: string): void
    /**
     * Sets the map source's license.
     * @param license the licence
     */
    setLicense(license: string): void
    /**
     * Sets the map source's license URI.
     * @param licenseUri the licence URI
     */
    setLicenseUri(licenseUri: string): void
    /**
     * Sets the map source's maximum zoom level.
     * @param zoomLevel the maximum zoom level
     */
    setMaxZoomLevel(zoomLevel: number): void
    /**
     * Sets the map source's minimal zoom level.
     * @param zoomLevel the minimal zoom level
     */
    setMinZoomLevel(zoomLevel: number): void
    /**
     * Sets the map source's name.
     * @param name a name
     */
    setName(name: string): void
    /**
     * Sets the map source's projection.
     * @param projection a #ShumateMapProjection
     */
    setProjection(projection: MapProjection): void
    /**
     * Sets the map source's tile size.
     * @param tileSize the tile size
     */
    setTileSize(tileSize: number): void

    // Own virtual methods of Shumate-1.0.Shumate.MapSource

    /**
     * Asynchronous version of shumate_map_source_fill_tile().
     * @virtual 
     * @param tile a #ShumateTile
     * @param cancellable a #GCancellable
     * @param callback a #GAsyncReadyCallback to execute upon completion
     */
    fillTileAsync(tile: Tile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the success value of a completed shumate_map_source_fill_tile_async()
     * operation.
     * @virtual 
     * @param result a #GAsyncResult provided to callback
     */
    fillTileFinish(result: Gio.AsyncResult): boolean

    // Class property signals of Shumate-1.0.Shumate.MapSource

    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: any): number
    on(sigName: "notify::license-uri", callback: any): number
    once(sigName: "notify::license-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: any): number
    on(sigName: "notify::max-zoom-level", callback: any): number
    once(sigName: "notify::max-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: any): number
    on(sigName: "notify::min-zoom-level", callback: any): number
    once(sigName: "notify::min-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: any): number
    on(sigName: "notify::projection", callback: any): number
    once(sigName: "notify::projection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: any): number
    on(sigName: "notify::tile-size", callback: any): number
    once(sigName: "notify::tile-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The base class for all map sources. Map sources fill [class`Tile]` objects
 * with images from various sources: a web API, for example, or a test pattern
 * generated on demand.
 * 
 * The most common map source is [class`RasterRenderer]`, which fetches tiles
 * using a [class`TileDownloader]`.
 * @class 
 */
export class MapSource extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.MapSource

    static name: string

    // Constructors of Shumate-1.0.Shumate.MapSource

    constructor(config?: MapSource.ConstructorProperties) 
    _init(config?: MapSource.ConstructorProperties): void
}

export module MapSourceRegistry {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface MapSourceRegistry extends Gio.ListModel {

    // Owm methods of Shumate-1.0.Shumate.MapSourceRegistry

    /**
     * Adds the #ShumateMapSource to the #ShumateMapSourceRegistry
     * @param mapSource a #ShumateMapSource
     */
    add(mapSource: MapSource): void
    /**
     * Find the #ShumateMapSource with the corresponding id
     * @param id the id of the #ShumateMapSource
     */
    getById(id: string): MapSource | null
    /**
     * Populates the #ShumateMapSourceRegistry with a default set of sources.
     */
    populateDefaults(): void
    /**
     * Removes the corresponding #ShumateMapSource from the registry.
     * If the source doesn't exist in the registry, this function does nothing.
     * @param id a #ShumateMapSource id
     */
    remove(id: string): void

    // Class property signals of Shumate-1.0.Shumate.MapSourceRegistry

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * This object allows you to hold [class`MapSource]` instances, you can access a
 * default set of sources with [method`MapSourceRegistry`.populate_defaults].
 * 
 * It conveniently implements [iface`Gio`.ListModel] to easily integrate with it.
 * @class 
 */
export class MapSourceRegistry extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.MapSourceRegistry

    static name: string

    // Constructors of Shumate-1.0.Shumate.MapSourceRegistry

    constructor(config?: MapSourceRegistry.ConstructorProperties) 
    /**
     * Create a new #ShumateMapSourceRegistry.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #ShumateMapSourceRegistry.
     * @constructor 
     */
    static new(): MapSourceRegistry
    /**
     * Create a new #ShumateMapSourceRegistry with defaults map sources.
     * This is identical to calling [method`MapSourceRegistry`.populate_defaults]
     * after shumate_map_source_registry_new().
     * @constructor 
     */
    static newWithDefaults(): MapSourceRegistry
    _init(config?: MapSourceRegistry.ConstructorProperties): void
}

export module Marker {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Location.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Marker

        /**
         * The child widget of the marker
         */
        child?: Gtk.Widget | null
        /**
         * The draggable state of the marker
         */
        draggable?: boolean | null
        /**
         * The selectable state of the marker
         */
        selectable?: boolean | null
    }

}

export interface Marker extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Location {

    // Own properties of Shumate-1.0.Shumate.Marker

    /**
     * The child widget of the marker
     */
    child: Gtk.Widget
    /**
     * The draggable state of the marker
     */
    draggable: boolean
    /**
     * The selectable state of the marker
     */
    selectable: boolean

    // Own fields of Shumate-1.0.Shumate.Marker

    parentInstance: any

    // Owm methods of Shumate-1.0.Shumate.Marker

    animateIn(): void
    animateInWithDelay(delay: number): void
    animateOut(): void
    animateOutWithDelay(delay: number): void
    /**
     * Retrieves the current child of `marker`.
     */
    getChild(): Gtk.Widget | null
    /**
     * Checks whether the marker is draggable.
     */
    getDraggable(): boolean
    /**
     * Checks whether the marker is selectable.
     */
    getSelectable(): boolean
    /**
     * Checks whether the marker is selected.
     */
    isSelected(): boolean
    /**
     * Sets the child widget of `marker`.
     * @param child a #GtkWidget
     */
    setChild(child: Gtk.Widget | null): void
    /**
     * Sets the marker as draggable or not.
     * @param value the draggable state
     */
    setDraggable(value: boolean): void
    /**
     * Sets the marker as selectable or not.
     * @param value the selectable state
     */
    setSelectable(value: boolean): void

    // Class property signals of Shumate-1.0.Shumate.Marker

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::draggable", callback: any): number
    on(sigName: "notify::draggable", callback: any): number
    once(sigName: "notify::draggable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Markers represent points of interest on a map. Markers need to be
 * placed on a layer (a [class`MarkerLayer]`). Layers have to be added to a
 * [class`Map]` for the markers to show on the map.
 * 
 * A marker is nothing more than a regular [class`Gtk`.Widget]. You can draw on
 * it what ever you want. Set the marker's position on the map using
 * [method`Location`.set_location].
 * 
 * This is a base class of all markers. A typical usage of a marker is for
 * instance to add a [class`Gtk`.Image] with a pin image and add the
 * [class`Gtk`.GestureClick] controller to listen to click events and show
 * a [class`Gtk`.Popover] with the description of the marker.
 * @class 
 */
export class Marker extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Marker

    static name: string

    // Constructors of Shumate-1.0.Shumate.Marker

    constructor(config?: Marker.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateMarker.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ShumateMarker.
     * @constructor 
     */
    static new(): Marker
    _init(config?: Marker.ConstructorProperties): void
}

export module MarkerLayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `marker-selected`
     */
    export interface MarkerSelectedSignalCallback {
        (marker: Marker): void
    }

    /**
     * Signal callback interface for `marker-unselected`
     */
    export interface MarkerUnselectedSignalCallback {
        (marker: Marker): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MarkerLayer

        /**
         * Determines the type of selection that will be performed.
         */
        selectionMode?: Gtk.SelectionMode | null
    }

}

export interface MarkerLayer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selectionMode: Gtk.SelectionMode

    // Own fields of Shumate-1.0.Shumate.MarkerLayer

    parentInstance: any

    // Owm methods of Shumate-1.0.Shumate.MarkerLayer

    /**
     * Adds the marker to the layer.
     * @param marker a #ShumateMarker
     */
    addMarker(marker: Marker): void
    /**
     * Fade in all markers in the layer with an animation
     */
    animateInAllMarkers(): void
    /**
     * Fade out all markers in the layer with an animation
     */
    animateOutAllMarkers(): void
    /**
     * Gets a copy of the list of all markers inserted into the layer. You should
     * free the list but not its contents.
     */
    getMarkers(): Marker[]
    /**
     * Gets a list of selected markers in the layer.
     */
    getSelected(): Marker[]
    /**
     * Gets the selection mode of the layer.
     */
    getSelectionMode(): Gtk.SelectionMode
    /**
     * Hides all the markers in the layer
     */
    hideAllMarkers(): void
    /**
     * Removes all markers from the layer.
     */
    removeAll(): void
    /**
     * Removes the marker from the layer.
     * @param marker a #ShumateMarker
     */
    removeMarker(marker: Marker): void
    /**
     * Selects all selectable markers in the layer.
     */
    selectAllMarkers(): void
    /**
     * Selects a marker in this layer.
     * 
     * If #ShumateMarkerLayer:selection-mode is %GTK_SELECTION_SINGLE or
     * %GTK_SELECTION_BROWSE, all other markers will be unselected. If the mode is
     * %GTK_SELECTION_NONE or `marker` is not selectable, nothing will happen.
     * @param marker a #ShumateMarker that is a child of `self`
     */
    selectMarker(marker: Marker): boolean
    /**
     * Sets all markers draggable in the layer
     */
    setAllMarkersDraggable(): void
    /**
     * Sets all markers undraggable in the layer
     */
    setAllMarkersUndraggable(): void
    /**
     * Sets the selection mode of the layer.
     * 
     * NOTE: changing selection mode to %GTK_SELECTION_NONE, %GTK_SELECTION_SINGLE
     * or %GTK_SELECTION_BROWSE will clear all previously selected markers.
     * @param mode a #GtkSelectionMode value
     */
    setSelectionMode(mode: Gtk.SelectionMode): void
    /**
     * Shows all markers in the layer
     */
    showAllMarkers(): void
    /**
     * Unselects all markers in the layer.
     */
    unselectAllMarkers(): void
    /**
     * Unselects a marker in this layer.
     * 
     * This works even if #ShumateMarkerLayer:selection-mode is
     * %GTK_SELECTION_BROWSE. Browse mode only prevents user interaction, not the
     * program, from unselecting a marker.
     * @param marker a #ShumateMarker that is a child of `self`
     */
    unselectMarker(marker: Marker): void

    // Own signals of Shumate-1.0.Shumate.MarkerLayer

    connect(sigName: "marker-selected", callback: MarkerLayer.MarkerSelectedSignalCallback): number
    on(sigName: "marker-selected", callback: MarkerLayer.MarkerSelectedSignalCallback): number
    once(sigName: "marker-selected", callback: MarkerLayer.MarkerSelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "marker-selected", ...args: any[]): void
    connect(sigName: "marker-unselected", callback: MarkerLayer.MarkerUnselectedSignalCallback): number
    on(sigName: "marker-unselected", callback: MarkerLayer.MarkerUnselectedSignalCallback): number
    once(sigName: "marker-unselected", callback: MarkerLayer.MarkerUnselectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "marker-unselected", ...args: any[]): void

    // Class property signals of Shumate-1.0.Shumate.MarkerLayer

    connect(sigName: "notify::selection-mode", callback: any): number
    on(sigName: "notify::selection-mode", callback: any): number
    once(sigName: "notify::selection-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * Displays markers on the map. It is responsible for positioning markers
 * correctly, marker selections and group marker operations.
 * @class 
 */
export class MarkerLayer extends Layer {

    // Own properties of Shumate-1.0.Shumate.MarkerLayer

    static name: string

    // Constructors of Shumate-1.0.Shumate.MarkerLayer

    constructor(config?: MarkerLayer.ConstructorProperties) 
    /**
     * Creates a new instance of #ShumateMarkerLayer.
     * @constructor 
     * @param viewport the `ShumateViewport`
     */
    constructor(viewport: Viewport) 
    /**
     * Creates a new instance of #ShumateMarkerLayer.
     * @constructor 
     * @param viewport the `ShumateViewport`
     */
    static new(viewport: Viewport): MarkerLayer
    /**
     * Creates a new instance of #ShumateMarkerLayer with the specified selection mode.
     * @constructor 
     * @param viewport the `ShumateViewport`
     * @param mode Selection mode
     */
    static newFull(viewport: Viewport, mode: Gtk.SelectionMode): MarkerLayer
    _init(config?: MarkerLayer.ConstructorProperties): void
}

export module MemoryCache {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.MemoryCache

        /**
         * The maximum number of tiles that are stored in the cache.
         */
        sizeLimit?: number | null
    }

}

export interface MemoryCache {

    // Own properties of Shumate-1.0.Shumate.MemoryCache

    /**
     * The maximum number of tiles that are stored in the cache.
     */
    sizeLimit: number

    // Own fields of Shumate-1.0.Shumate.MemoryCache

    parentInstance: GObject.Object

    // Owm methods of Shumate-1.0.Shumate.MemoryCache

    /**
     * Cleans the contents of the cache.
     */
    clean(): void
    /**
     * Gets the maximum number of tiles stored in the cache.
     */
    getSizeLimit(): number
    /**
     * Sets the maximum number of tiles stored in the cache.
     * @param sizeLimit maximum number of tiles stored in the cache
     */
    setSizeLimit(sizeLimit: number): void
    storeTexture(tile: Tile, texture: Gdk.Texture, sourceId: string): void
    tryFillTile(tile: Tile, sourceId: string): boolean

    // Class property signals of Shumate-1.0.Shumate.MemoryCache

    connect(sigName: "notify::size-limit", callback: any): number
    on(sigName: "notify::size-limit", callback: any): number
    once(sigName: "notify::size-limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A cache that stores and retrieves tiles from the memory. The cache contents
 * is not preserved between application restarts so this cache serves mostly as
 * a quick access temporary cache to the most recently used tiles.
 * @class 
 */
export class MemoryCache extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.MemoryCache

    static name: string

    // Constructors of Shumate-1.0.Shumate.MemoryCache

    constructor(config?: MemoryCache.ConstructorProperties) 
    /**
     * Constructor of #ShumateMemoryCache.
     * @constructor 
     * @param sizeLimit maximum number of tiles stored in the cache
     */
    static newFull(sizeLimit: number): MemoryCache
    _init(config?: MemoryCache.ConstructorProperties): void
}

export module PathLayer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.PathLayer

        /**
         * The shape is a closed path
         */
        closed?: boolean | null
        /**
         * The shape should be filled
         */
        fill?: boolean | null
        /**
         * The path's fill color
         */
        fillColor?: Gdk.RGBA | null
        /**
         * The path's outline color
         */
        outlineColor?: Gdk.RGBA | null
        /**
         * The path's outline width (in pixels)
         */
        outlineWidth?: number | null
        /**
         * The shape should be stroked
         */
        stroke?: boolean | null
        /**
         * The path's stroke color
         */
        strokeColor?: Gdk.RGBA | null
        /**
         * The path's stroke width (in pixels)
         */
        strokeWidth?: number | null
    }

}

export interface PathLayer extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.PathLayer

    /**
     * The shape is a closed path
     */
    closed: boolean
    /**
     * The shape should be filled
     */
    fill: boolean
    /**
     * The path's fill color
     */
    fillColor: Gdk.RGBA
    /**
     * The path's outline color
     */
    outlineColor: Gdk.RGBA
    /**
     * The path's outline width (in pixels)
     */
    outlineWidth: number
    /**
     * The shape should be stroked
     */
    stroke: boolean
    /**
     * The path's stroke color
     */
    strokeColor: Gdk.RGBA
    /**
     * The path's stroke width (in pixels)
     */
    strokeWidth: number

    // Own fields of Shumate-1.0.Shumate.PathLayer

    parentInstance: any

    // Owm methods of Shumate-1.0.Shumate.PathLayer

    /**
     * Adds a #ShumateLocation object to the layer.
     * The node is prepended to the list.
     * @param location a #ShumateLocation
     */
    addNode(location: Location): void
    /**
     * Gets information whether the path is closed.
     */
    getClosed(): boolean
    /**
     * Returns the list of dash segment lengths.
     */
    getDash(): number[]
    /**
     * Checks whether the path is filled.
     */
    getFill(): boolean
    /**
     * Gets the path's fill color.
     */
    getFillColor(): Gdk.RGBA
    /**
     * Gets a copy of the list of all #ShumateLocation objects inserted into the layer. You should
     * free the list but not its contents.
     */
    getNodes(): Location[]
    /**
     * Gets the path's outline color.
     */
    getOutlineColor(): Gdk.RGBA
    /**
     * Gets the width of the outline.
     */
    getOutlineWidth(): number
    /**
     * Checks whether the path is stroked.
     */
    getStroke(): boolean
    /**
     * Gets the path's stroke color.
     */
    getStrokeColor(): Gdk.RGBA
    /**
     * Gets the width of the stroke.
     */
    getStrokeWidth(): number
    /**
     * Inserts a #ShumateLocation object to the specified position.
     * @param location a #ShumateLocation
     * @param position position in the list where the #ShumateLocation object should be inserted
     */
    insertNode(location: Location, position: number): void
    /**
     * Removes all #ShumateLocation objects from the layer.
     */
    removeAll(): void
    /**
     * Removes the #ShumateLocation object from the layer.
     * @param location a #ShumateLocation
     */
    removeNode(location: Location): void
    /**
     * Makes the path closed.
     * @param value %TRUE to make the path closed
     */
    setClosed(value: boolean): void
    /**
     * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
     * method supports only integer values for segment lengths. The values have to be
     * passed inside the data pointer of the list (using the %GUINT_TO_POINTER conversion)
     * 
     * Pass %NULL to use solid line.
     * @param dashPattern list of integer values representing lengths     of dashes/spaces (see cairo documentation of cairo_set_dash())
     */
    setDash(dashPattern: number[]): void
    /**
     * Sets the path to be filled
     * @param value if the path is filled
     */
    setFill(value: boolean): void
    /**
     * Set the path's fill color.
     * @param color The path's fill color or %NULL to reset to the         default color. The color parameter is copied.
     */
    setFillColor(color: Gdk.RGBA | null): void
    /**
     * Set the path's outline color.
     * @param color The path's outline color or %NULL to reset to the         default color. The color parameter is copied.
     */
    setOutlineColor(color: Gdk.RGBA | null): void
    /**
     * Sets the width of the outline
     * @param value the width of the outline (in pixels)
     */
    setOutlineWidth(value: number): void
    /**
     * Sets the path to be stroked
     * @param value if the path is stroked
     */
    setStroke(value: boolean): void
    /**
     * Set the path's stroke color.
     * @param color The path's stroke color or %NULL to reset to the         default color. The color parameter is copied.
     */
    setStrokeColor(color: Gdk.RGBA | null): void
    /**
     * Sets the width of the stroke
     * @param value the width of the stroke (in pixels)
     */
    setStrokeWidth(value: number): void

    // Class property signals of Shumate-1.0.Shumate.PathLayer

    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::fill", callback: any): number
    on(sigName: "notify::fill", callback: any): number
    once(sigName: "notify::fill", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fill", ...args: any[]): void
    connect(sigName: "notify::fill-color", callback: any): number
    on(sigName: "notify::fill-color", callback: any): number
    once(sigName: "notify::fill-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fill-color", ...args: any[]): void
    connect(sigName: "notify::outline-color", callback: any): number
    on(sigName: "notify::outline-color", callback: any): number
    once(sigName: "notify::outline-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::outline-color", ...args: any[]): void
    connect(sigName: "notify::outline-width", callback: any): number
    on(sigName: "notify::outline-width", callback: any): number
    once(sigName: "notify::outline-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::outline-width", ...args: any[]): void
    connect(sigName: "notify::stroke", callback: any): number
    on(sigName: "notify::stroke", callback: any): number
    once(sigName: "notify::stroke", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stroke", ...args: any[]): void
    connect(sigName: "notify::stroke-color", callback: any): number
    on(sigName: "notify::stroke-color", callback: any): number
    once(sigName: "notify::stroke-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stroke-color", ...args: any[]): void
    connect(sigName: "notify::stroke-width", callback: any): number
    on(sigName: "notify::stroke-width", callback: any): number
    once(sigName: "notify::stroke-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stroke-width", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * A layer displaying line path between inserted [iface`Location]` objects
 * 
 * This layer shows a connection between inserted objects implementing the
 * [iface`Location]` interface. This means that both #ShumateMarker
 * objects and [class`Coordinate]` objects can be inserted into the layer.
 * Of course, custom objects implementing the #ShumateLocation interface
 * can be used as well.
 * @class 
 */
export class PathLayer extends Layer {

    // Own properties of Shumate-1.0.Shumate.PathLayer

    static name: string

    // Constructors of Shumate-1.0.Shumate.PathLayer

    constructor(config?: PathLayer.ConstructorProperties) 
    /**
     * Creates a new instance of #ShumatePathLayer.
     * @constructor 
     * @param viewport the `ShumateViewport`
     */
    constructor(viewport: Viewport) 
    /**
     * Creates a new instance of #ShumatePathLayer.
     * @constructor 
     * @param viewport the `ShumateViewport`
     */
    static new(viewport: Viewport): PathLayer
    _init(config?: PathLayer.ConstructorProperties): void
}

export module Point {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Location.ConstructorProperties, Marker.ConstructorProperties {
    }

}

export interface Point extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget, Location {

    // Conflicting properties

    parentInstance: any

    // Class property signals of Shumate-1.0.Shumate.Point

    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::draggable", callback: any): number
    on(sigName: "notify::draggable", callback: any): number
    once(sigName: "notify::draggable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draggable", ...args: any[]): void
    connect(sigName: "notify::selectable", callback: any): number
    on(sigName: "notify::selectable", callback: any): number
    once(sigName: "notify::selectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectable", ...args: any[]): void
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
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A simple variant of [class`Marker]` showing the location of the point as a
 * circle on the map.
 * @class 
 */
export class Point extends Marker {

    // Own properties of Shumate-1.0.Shumate.Point

    static name: string

    // Constructors of Shumate-1.0.Shumate.Point

    constructor(config?: Point.ConstructorProperties) 
    /**
     * Creates an instance of #ShumatePoint.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ShumatePoint.
     * @constructor 
     */
    static new(): Point

    // Overloads of new

    /**
     * Creates an instance of #ShumateMarker.
     * @constructor 
     */
    static new(): Marker
    _init(config?: Point.ConstructorProperties): void
}

export module RasterRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends MapSource.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.RasterRenderer

        /**
         * The data source that provides image tiles to display. In most cases,
         * a [class`TileDownloader]` is sufficient.
         */
        dataSource?: DataSource | null
    }

}

export interface RasterRenderer {

    // Own properties of Shumate-1.0.Shumate.RasterRenderer

    /**
     * The data source that provides image tiles to display. In most cases,
     * a [class`TileDownloader]` is sufficient.
     */
    readonly dataSource: DataSource

    // Class property signals of Shumate-1.0.Shumate.RasterRenderer

    connect(sigName: "notify::data-source", callback: any): number
    on(sigName: "notify::data-source", callback: any): number
    once(sigName: "notify::data-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: any): number
    on(sigName: "notify::license-uri", callback: any): number
    once(sigName: "notify::license-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: any): number
    on(sigName: "notify::max-zoom-level", callback: any): number
    once(sigName: "notify::max-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: any): number
    on(sigName: "notify::min-zoom-level", callback: any): number
    once(sigName: "notify::min-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: any): number
    on(sigName: "notify::projection", callback: any): number
    once(sigName: "notify::projection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: any): number
    on(sigName: "notify::tile-size", callback: any): number
    once(sigName: "notify::tile-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class RasterRenderer extends MapSource {

    // Own properties of Shumate-1.0.Shumate.RasterRenderer

    static name: string

    // Constructors of Shumate-1.0.Shumate.RasterRenderer

    constructor(config?: RasterRenderer.ConstructorProperties) 
    /**
     * Creates a new [class`RasterRenderer]` that uses the given data source.
     * @constructor 
     * @param dataSource a [class`DataSource]` to provide tile image data
     */
    constructor(dataSource: DataSource) 
    /**
     * Creates a new [class`RasterRenderer]` that uses the given data source.
     * @constructor 
     * @param dataSource a [class`DataSource]` to provide tile image data
     */
    static new(dataSource: DataSource): RasterRenderer
    /**
     * Creates a new [class`RasterRenderer]` that fetches tiles from the given URL
     * using a [class`TileDownloader]` data source.
     * 
     * Equivalent to:
     * 
     * ```c
     * g_autoptr(ShumateTileDownloader) source = shumate_tile_downloader_new (url_template);
     * ShumateRasterRenderer *renderer = shumate_raster_renderer_new (source);
     * ```
     * @constructor 
     * @param urlTemplate a URL template to fetch tiles from
     */
    static newFromUrl(urlTemplate: string): RasterRenderer
    /**
     * Creates a new [class`RasterRenderer]` with the given details and a data
     * source.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param dataSource a [class`DataSource]` to provide tile image data
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, dataSource: DataSource): RasterRenderer
    /**
     * Creates a new [class`RasterRenderer]` with the given details and a data
     * source.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param urlTemplate a URL template to fetch tiles from
     */
    static newFullFromUrl(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, urlTemplate: string): RasterRenderer
    _init(config?: RasterRenderer.ConstructorProperties): void
}

export module Scale {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Scale

        /**
         * The size of the map scale on screen in pixels.
         */
        maxWidth?: number | null
        /**
         * The scale's units.
         */
        unit?: Unit | null
        /**
         * The viewport to use.
         */
        viewport?: Viewport | null
    }

}

export interface Scale extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Scale

    /**
     * The size of the map scale on screen in pixels.
     */
    maxWidth: number
    /**
     * The scale's units.
     */
    unit: Unit
    /**
     * The viewport to use.
     */
    viewport: Viewport

    // Owm methods of Shumate-1.0.Shumate.Scale

    /**
     * Gets the maximum scale width.
     */
    getMaxWidth(): number
    /**
     * Gets the unit used by the scale.
     */
    getUnit(): Unit
    /**
     * Gets the viewport used by the scale.
     */
    getViewport(): Viewport | null
    /**
     * Sets the maximum width of the scale on the screen in pixels
     * @param value the number of pixels
     */
    setMaxWidth(value: number): void
    /**
     * Sets the scale unit.
     * @param unit a #ShumateUnit
     */
    setUnit(unit: Unit): void
    /**
     * Sets the scale viewport.
     * @param viewport a #ShumateViewport
     */
    setViewport(viewport: Viewport | null): void

    // Class property signals of Shumate-1.0.Shumate.Scale

    connect(sigName: "notify::max-width", callback: any): number
    on(sigName: "notify::max-width", callback: any): number
    once(sigName: "notify::max-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-width", ...args: any[]): void
    connect(sigName: "notify::unit", callback: any): number
    on(sigName: "notify::unit", callback: any): number
    once(sigName: "notify::unit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unit", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * A widget displaying a scale.
 * 
 * # CSS nodes
 * 
 * ```
 * map-scale
 * ├── label[.metric][.imperial]
 * ```
 * 
 * `ShumateScale` uses a single CSS node with name map-scale, it has up to two
 * childs different labels.
 * @class 
 */
export class Scale extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Scale

    static name: string

    // Constructors of Shumate-1.0.Shumate.Scale

    constructor(config?: Scale.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateScale.
     * @constructor 
     * @param viewport a #ShumateViewport
     */
    constructor(viewport: Viewport | null) 
    /**
     * Creates an instance of #ShumateScale.
     * @constructor 
     * @param viewport a #ShumateViewport
     */
    static new(viewport: Viewport | null): Scale
    _init(config?: Scale.ConstructorProperties): void
}

export module SimpleMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.SimpleMap

        mapSource?: MapSource | null
        showZoomButtons?: boolean | null
    }

}

export interface SimpleMap extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.SimpleMap

    readonly compass: Compass
    readonly license: License
    mapSource: MapSource
    readonly scale: Scale
    showZoomButtons: boolean
    readonly viewport: Viewport

    // Owm methods of Shumate-1.0.Shumate.SimpleMap

    /**
     * Adds a map layer as an overlay on top of the base map.
     * @param layer a [class`Layer]` to add
     */
    addOverlayLayer(layer: Layer): void
    /**
     * Gets the compass widget for the map.
     */
    getCompass(): Compass
    /**
     * Gets the license widget for the map.
     */
    getLicense(): License
    /**
     * Gets the map source for the current base layer.
     */
    getMapSource(): MapSource
    /**
     * Gets the scale widget for the map.
     */
    getScale(): Scale
    /**
     * Gets whether or not the zoom buttons are shown.
     */
    getShowZoomButtons(): boolean
    /**
     * Gets the map's viewport, needed for constructing map layers that will be added
     * to it.
     */
    getViewport(): Viewport
    insertOverlayLayer(layer: Layer, idx: number): void
    /**
     * Removes a layer from the map.
     * @param layer a [class`Layer]` that was added to the map previously
     */
    removeOverlayLayer(layer: Layer): void
    /**
     * Sets the source for the base map.
     * @param mapSource a [class`MapSource]`
     */
    setMapSource(mapSource: MapSource | null): void
    /**
     * Sets whether or not the zoom buttons are shown.
     * @param showZoomButtons %TRUE to show the zoom buttons, %FALSE to hide them
     */
    setShowZoomButtons(showZoomButtons: boolean): void

    // Class property signals of Shumate-1.0.Shumate.SimpleMap

    connect(sigName: "notify::compass", callback: any): number
    on(sigName: "notify::compass", callback: any): number
    once(sigName: "notify::compass", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compass", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::map-source", callback: any): number
    on(sigName: "notify::map-source", callback: any): number
    once(sigName: "notify::map-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::map-source", ...args: any[]): void
    connect(sigName: "notify::scale", callback: any): number
    on(sigName: "notify::scale", callback: any): number
    once(sigName: "notify::scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale", ...args: any[]): void
    connect(sigName: "notify::show-zoom-buttons", callback: any): number
    on(sigName: "notify::show-zoom-buttons", callback: any): number
    once(sigName: "notify::show-zoom-buttons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-zoom-buttons", ...args: any[]): void
    connect(sigName: "notify::viewport", callback: any): number
    on(sigName: "notify::viewport", callback: any): number
    once(sigName: "notify::viewport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::viewport", ...args: any[]): void
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

/**
 * A ready-to-use map [class`Gtk`.Widget].If you want to use your own implementation,
 * you can look at the [class`Shumate`.Map] widget.
 * 
 * The simple map contains a zoom widget, a [class`Shumate`.License] at the bottom,
 * a [class`Shumate`.Scale] and a [class`Shumate`.Compass].
 * @class 
 */
export class SimpleMap extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.SimpleMap

    static name: string

    // Constructors of Shumate-1.0.Shumate.SimpleMap

    constructor(config?: SimpleMap.ConstructorProperties) 
    constructor() 
    static new(): SimpleMap
    _init(config?: SimpleMap.ConstructorProperties): void
}

export module Tile {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Accessible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.ConstraintTarget.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Tile

        /**
         * Specifies whether the tile should fade in when loading
         */
        fadeIn?: boolean | null
        /**
         * The size of the tile in pixels
         */
        size?: number | null
        /**
         * The state of the tile
         */
        state?: State | null
        /**
         * The #GdkTexture backing the tile
         */
        texture?: Gdk.Texture | null
        /**
         * The x position of the tile
         */
        x?: number | null
        /**
         * The y position of the tile
         */
        y?: number | null
        /**
         * The zoom level of the tile
         */
        zoomLevel?: number | null
    }

}

export interface Tile extends Gtk.Accessible, Gtk.Buildable, Gtk.ConstraintTarget {

    // Own properties of Shumate-1.0.Shumate.Tile

    /**
     * Specifies whether the tile should fade in when loading
     */
    fadeIn: boolean
    /**
     * The size of the tile in pixels
     */
    size: number
    /**
     * The state of the tile
     */
    state: State
    /**
     * The #GdkTexture backing the tile
     */
    texture: Gdk.Texture
    /**
     * The x position of the tile
     */
    x: number
    /**
     * The y position of the tile
     */
    y: number
    /**
     * The zoom level of the tile
     */
    zoomLevel: number

    // Own fields of Shumate-1.0.Shumate.Tile

    parentInstance: any

    // Owm methods of Shumate-1.0.Shumate.Tile

    getEtag(): string
    /**
     * Checks whether the tile should fade in.
     */
    getFadeIn(): boolean
    getModifiedTime(): GLib.DateTime
    /**
     * Gets the tile's size.
     */
    getSize(): number

    // Overloads of getSize

    /**
     * Returns the content width or height of the widget.
     * 
     * Which dimension is returned depends on `orientation`.
     * 
     * This is equivalent to calling [method`Gtk`.Widget.get_width]
     * for %GTK_ORIENTATION_HORIZONTAL or [method`Gtk`.Widget.get_height]
     * for %GTK_ORIENTATION_VERTICAL, but can be used when
     * writing orientation-independent code, such as when
     * implementing [iface`Gtk`.Orientable] widgets.
     * @param orientation the orientation to query
     */
    getSize(orientation: Gtk.Orientation): number
    /**
     * Gets the current state of tile loading.
     */
    getState(): State
    /**
     * Get the #GdkTexture representing this tile.
     */
    getTexture(): Gdk.Texture | null
    /**
     * Gets the tile's x position.
     */
    getX(): number
    /**
     * Gets the tile's y position.
     */
    getY(): number
    /**
     * Gets the tile's zoom level.
     */
    getZoomLevel(): number
    setEtag(etag: string): void
    /**
     * Sets the flag determining whether the tile should fade in when loading
     * @param fadeIn determines whether the tile should fade in when loading
     */
    setFadeIn(fadeIn: boolean): void
    setModifiedTime(modifiedTime: GLib.DateTime): void
    /**
     * Sets the tile's size
     * @param size the size in pixels
     */
    setSize(size: number): void
    /**
     * Sets the tile's #ShumateState
     * @param state a #ShumateState
     */
    setState(state: State): void
    /**
     * Sets the #GdkTexture representing this tile.
     * @param texture a #GdkTexture
     */
    setTexture(texture: Gdk.Texture): void
    /**
     * Sets the tile's x position
     * @param x the position
     */
    setX(x: number): void
    /**
     * Sets the tile's y position
     * @param y the position
     */
    setY(y: number): void
    /**
     * Sets the tile's zoom level
     * @param zoomLevel the zoom level
     */
    setZoomLevel(zoomLevel: number): void

    // Class property signals of Shumate-1.0.Shumate.Tile

    connect(sigName: "notify::fade-in", callback: any): number
    on(sigName: "notify::fade-in", callback: any): number
    once(sigName: "notify::fade-in", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fade-in", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::texture", callback: any): number
    on(sigName: "notify::texture", callback: any): number
    once(sigName: "notify::texture", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::texture", ...args: any[]): void
    connect(sigName: "notify::x", callback: any): number
    on(sigName: "notify::x", callback: any): number
    once(sigName: "notify::x", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x", ...args: any[]): void
    connect(sigName: "notify::y", callback: any): number
    on(sigName: "notify::y", callback: any): number
    once(sigName: "notify::y", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: any): number
    on(sigName: "notify::zoom-level", callback: any): number
    once(sigName: "notify::zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
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

/**
 * An object that represents map tiles. Tiles are loaded by a [class`MapSource]`.
 * @class 
 */
export class Tile extends Gtk.Widget {

    // Own properties of Shumate-1.0.Shumate.Tile

    static name: string

    // Constructors of Shumate-1.0.Shumate.Tile

    constructor(config?: Tile.ConstructorProperties) 
    /**
     * Creates an instance of #ShumateTile.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ShumateTile.
     * @constructor 
     */
    static new(): Tile
    /**
     * Creates an instance of #ShumateTile.
     * @constructor 
     * @param x the x position
     * @param y the y position
     * @param size the size in pixels
     * @param zoomLevel the zoom level
     */
    static newFull(x: number, y: number, size: number, zoomLevel: number): Tile
    _init(config?: Tile.ConstructorProperties): void
}

export module TileDownloader {

    // Constructor properties interface

    export interface ConstructorProperties extends DataSource.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.TileDownloader

        /**
         * A template for construting the URL to download a tile from.
         * 
         * The template has the following replacements:
         * - "#X#": The X coordinate of the tile
         * - "#Y#": The Y coordinate of the tile
         * - "#Z#": The zoom level of the tile
         * - "#TMSY#": The inverted Y coordinate (i.e. tile numbering starts with 0 at
         * the bottom, rather than top, of the map)
         */
        urlTemplate?: string | null
    }

}

export interface TileDownloader {

    // Own properties of Shumate-1.0.Shumate.TileDownloader

    /**
     * A template for construting the URL to download a tile from.
     * 
     * The template has the following replacements:
     * - "#X#": The X coordinate of the tile
     * - "#Y#": The Y coordinate of the tile
     * - "#Z#": The zoom level of the tile
     * - "#TMSY#": The inverted Y coordinate (i.e. tile numbering starts with 0 at
     * the bottom, rather than top, of the map)
     */
    readonly urlTemplate: string

    // Class property signals of Shumate-1.0.Shumate.TileDownloader

    connect(sigName: "notify::url-template", callback: any): number
    on(sigName: "notify::url-template", callback: any): number
    once(sigName: "notify::url-template", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url-template", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Shumate`.DataSource] that asynchronously downloads tiles from an online
 * service using a given template.
 * 
 * It contains an internal [class`Shumate`.FileCache] to cache the tiles on the system.
 * @class 
 */
export class TileDownloader extends DataSource {

    // Own properties of Shumate-1.0.Shumate.TileDownloader

    static name: string

    // Constructors of Shumate-1.0.Shumate.TileDownloader

    constructor(config?: TileDownloader.ConstructorProperties) 
    /**
     * Creates a new [class`TileDownloader]` that fetches tiles from an API and
     * caches them on disk.
     * 
     * See [property`TileDownloader:`url-template] for the format of the URL template.
     * @constructor 
     * @param urlTemplate a URL template to fetch tiles from
     */
    constructor(urlTemplate: string) 
    /**
     * Creates a new [class`TileDownloader]` that fetches tiles from an API and
     * caches them on disk.
     * 
     * See [property`TileDownloader:`url-template] for the format of the URL template.
     * @constructor 
     * @param urlTemplate a URL template to fetch tiles from
     */
    static new(urlTemplate: string): TileDownloader
    _init(config?: TileDownloader.ConstructorProperties): void
}

export module VectorRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, MapSource.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.VectorRenderer

        /**
         * The data source that provides image tiles to display. In most cases,
         * a [class`TileDownloader]` is sufficient.
         */
        dataSource?: DataSource | null
        /**
         * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
         * format.
         * 
         * Note that not all features of the specification are supported.
         */
        styleJson?: string | null
    }

}

export interface VectorRenderer extends Gio.Initable {

    // Own properties of Shumate-1.0.Shumate.VectorRenderer

    /**
     * The data source that provides image tiles to display. In most cases,
     * a [class`TileDownloader]` is sufficient.
     */
    readonly dataSource: DataSource
    /**
     * A map style, in [Mapbox Style Specification](https://docs.mapbox.com/mapbox-gl-js/style-spec/)
     * format.
     * 
     * Note that not all features of the specification are supported.
     */
    readonly styleJson: string

    // Class property signals of Shumate-1.0.Shumate.VectorRenderer

    connect(sigName: "notify::data-source", callback: any): number
    on(sigName: "notify::data-source", callback: any): number
    once(sigName: "notify::data-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data-source", ...args: any[]): void
    connect(sigName: "notify::style-json", callback: any): number
    on(sigName: "notify::style-json", callback: any): number
    once(sigName: "notify::style-json", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style-json", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::license-uri", callback: any): number
    on(sigName: "notify::license-uri", callback: any): number
    once(sigName: "notify::license-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license-uri", ...args: any[]): void
    connect(sigName: "notify::max-zoom-level", callback: any): number
    on(sigName: "notify::max-zoom-level", callback: any): number
    once(sigName: "notify::max-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: any): number
    on(sigName: "notify::min-zoom-level", callback: any): number
    once(sigName: "notify::min-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::projection", callback: any): number
    on(sigName: "notify::projection", callback: any): number
    once(sigName: "notify::projection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::projection", ...args: any[]): void
    connect(sigName: "notify::tile-size", callback: any): number
    on(sigName: "notify::tile-size", callback: any): number
    once(sigName: "notify::tile-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tile-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A [class`Shumate`.MapSource] that renders tiles from a given vector data source.
 * @class 
 */
export class VectorRenderer extends MapSource {

    // Own properties of Shumate-1.0.Shumate.VectorRenderer

    static name: string

    // Constructors of Shumate-1.0.Shumate.VectorRenderer

    constructor(config?: VectorRenderer.ConstructorProperties) 
    /**
     * Creates a new [class`VectorRenderer]` to render vector tiles from `data_source`.
     * @constructor 
     * @param dataSource a [class`DataSource]` to provide tile image data
     * @param styleJson a vector style
     */
    constructor(dataSource: DataSource, styleJson: string) 
    /**
     * Creates a new [class`VectorRenderer]` to render vector tiles from `data_source`.
     * @constructor 
     * @param dataSource a [class`DataSource]` to provide tile image data
     * @param styleJson a vector style
     */
    static new(dataSource: DataSource, styleJson: string): VectorRenderer
    /**
     * Creates a new [class`VectorRenderer]` that fetches tiles from the given URL
     * using a [class`TileDownloader]` data source.
     * 
     * Equivalent to:
     * 
     * ```c
     * g_autoptr(ShumateTileDownloader) source = shumate_tile_downloader_new (url_template);
     * ShumateVectorRenderer *renderer = shumate_vector_renderer_new (source);
     * ```
     * @constructor 
     * @param urlTemplate a URL template to fetch tiles from
     * @param styleJson a vector style
     */
    static newFromUrl(urlTemplate: string, styleJson: string): VectorRenderer
    /**
     * Creates a new [class`VectorRenderer]` to render vector tiles from `data_source`.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param dataSource a [class`DataSource]` to provide tile image data
     * @param styleJson 
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, dataSource: DataSource, styleJson: string): VectorRenderer
    /**
     * Creates a new [class`VectorRenderer]` that fetches tiles from the given URL
     * using a [class`TileDownloader]` data source.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param urlTemplate a template for the URL to fetch tiles from
     * @param styleJson 
     */
    static newFullFromUrl(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, urlTemplate: string, styleJson: string): VectorRenderer
    _init(config?: VectorRenderer.ConstructorProperties): void
    /**
     * Checks whether libshumate was compiled with vector tile support. If it was
     * not, vector renderers cannot be created or used.
     */
    static isSupported(): boolean
}

export module Viewport {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Shumate-1.0.Shumate.Viewport

        /**
         * The highest allowed level of zoom of the content.
         */
        maxZoomLevel?: number | null
        /**
         * The lowest allowed level of zoom of the content.
         */
        minZoomLevel?: number | null
        /**
         * The reference #ShumateMapSource being displayed
         */
        referenceMapSource?: MapSource | null
        /**
         * The rotation of the map view, in radians clockwise from up being due north
         */
        rotation?: number | null
        /**
         * The level of zoom of the content.
         */
        zoomLevel?: number | null
    }

}

export interface Viewport extends Location {

    // Own properties of Shumate-1.0.Shumate.Viewport

    /**
     * The highest allowed level of zoom of the content.
     */
    maxZoomLevel: number
    /**
     * The lowest allowed level of zoom of the content.
     */
    minZoomLevel: number
    /**
     * The reference #ShumateMapSource being displayed
     */
    referenceMapSource: MapSource
    /**
     * The rotation of the map view, in radians clockwise from up being due north
     */
    rotation: number
    /**
     * The level of zoom of the content.
     */
    zoomLevel: number

    // Owm methods of Shumate-1.0.Shumate.Viewport

    /**
     * Get the maximal zoom level
     */
    getMaxZoomLevel(): number
    /**
     * Get the minimal zoom level
     */
    getMinZoomLevel(): number
    /**
     * Get the reference map source
     */
    getReferenceMapSource(): MapSource | null
    /**
     * Gets the current rotation
     */
    getRotation(): number
    /**
     * Get the current zoom level
     */
    getZoomLevel(): number
    /**
     * Gets the position on `widget` that correspond to the given latitude and
     * longitude.
     * @param widget a #GtkWidget that uses `self` as viewport
     * @param latitude the latitude
     * @param longitude the longitude
     */
    locationToWidgetCoords(widget: Gtk.Widget, latitude: number, longitude: number): [ /* x */ number, /* y */ number ]
    /**
     * Set the maximal zoom level
     * @param maxZoomLevel the maximal zoom level
     */
    setMaxZoomLevel(maxZoomLevel: number): void
    /**
     * Set the minimal zoom level
     * @param minZoomLevel the minimal zoom level
     */
    setMinZoomLevel(minZoomLevel: number): void
    /**
     * Set the reference map source
     * @param mapSource a #ShumateMapSource or %NULL to set none.
     */
    setReferenceMapSource(mapSource: MapSource | null): void
    /**
     * Sets the rotation
     * @param rotation the rotation
     */
    setRotation(rotation: number): void
    /**
     * Set the zoom level
     * @param zoomLevel the zoom level
     */
    setZoomLevel(zoomLevel: number): void
    /**
     * Gets the latitude and longitude corresponding to a position on `widget`.
     * @param widget a #GtkWidget that uses `self` as viewport
     * @param x the x coordinate
     * @param y the y coordinate
     */
    widgetCoordsToLocation(widget: Gtk.Widget, x: number, y: number): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Increases the zoom level
     */
    zoomIn(): void
    /**
     * Decreases the zoom level
     */
    zoomOut(): void

    // Class property signals of Shumate-1.0.Shumate.Viewport

    connect(sigName: "notify::max-zoom-level", callback: any): number
    on(sigName: "notify::max-zoom-level", callback: any): number
    once(sigName: "notify::max-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-zoom-level", ...args: any[]): void
    connect(sigName: "notify::min-zoom-level", callback: any): number
    on(sigName: "notify::min-zoom-level", callback: any): number
    once(sigName: "notify::min-zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-zoom-level", ...args: any[]): void
    connect(sigName: "notify::reference-map-source", callback: any): number
    on(sigName: "notify::reference-map-source", callback: any): number
    once(sigName: "notify::reference-map-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reference-map-source", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: any): number
    on(sigName: "notify::rotation", callback: any): number
    once(sigName: "notify::rotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: any): number
    on(sigName: "notify::zoom-level", callback: any): number
    once(sigName: "notify::zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The object holding the coordinate, zoom-level, and rotation state of the current view.
 * 
 * As the object implements [iface`Shumate`.Location], the latitude and longitude are
 * accessible via the interface methods.
 * @class 
 */
export class Viewport extends GObject.Object {

    // Own properties of Shumate-1.0.Shumate.Viewport

    static name: string

    // Constructors of Shumate-1.0.Shumate.Viewport

    constructor(config?: Viewport.ConstructorProperties) 
    /**
     * Creates a new #ShumateViewport
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ShumateViewport
     * @constructor 
     */
    static new(): Viewport
    _init(config?: Viewport.ConstructorProperties): void
}

export interface CompassClass {

    // Own fields of Shumate-1.0.Shumate.CompassClass

    parentClass: Gtk.WidgetClass
}

export abstract class CompassClass {

    // Own properties of Shumate-1.0.Shumate.CompassClass

    static name: string
}

export interface CoordinateClass {

    // Own fields of Shumate-1.0.Shumate.CoordinateClass

    parentClass: GObject.InitiallyUnownedClass
}

export abstract class CoordinateClass {

    // Own properties of Shumate-1.0.Shumate.CoordinateClass

    static name: string
}

export interface DataSourceClass {

    // Own fields of Shumate-1.0.Shumate.DataSourceClass

    parentClass: GObject.ObjectClass
    getTileDataAsync: (self: DataSource, x: number, y: number, zoomLevel: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    getTileDataFinish: (self: DataSource, result: Gio.AsyncResult) => any | null
}

export abstract class DataSourceClass {

    // Own properties of Shumate-1.0.Shumate.DataSourceClass

    static name: string
}

export interface FileCacheClass {

    // Own fields of Shumate-1.0.Shumate.FileCacheClass

    parentClass: GObject.ObjectClass
}

export abstract class FileCacheClass {

    // Own properties of Shumate-1.0.Shumate.FileCacheClass

    static name: string
}

export interface LayerClass {

    // Own fields of Shumate-1.0.Shumate.LayerClass

    parentClass: Gtk.WidgetClass
}

export abstract class LayerClass {

    // Own properties of Shumate-1.0.Shumate.LayerClass

    static name: string
}

export interface LicenseClass {

    // Own fields of Shumate-1.0.Shumate.LicenseClass

    parentClass: Gtk.WidgetClass
}

export abstract class LicenseClass {

    // Own properties of Shumate-1.0.Shumate.LicenseClass

    static name: string
}

export interface LocationInterface {

    // Own fields of Shumate-1.0.Shumate.LocationInterface

    getLatitude: (location: Location) => number
    getLongitude: (location: Location) => number
    setLocation: (location: Location, latitude: number, longitude: number) => void
}

/**
 * An interface common to objects having latitude and longitude.
 * @record 
 */
export abstract class LocationInterface {

    // Own properties of Shumate-1.0.Shumate.LocationInterface

    static name: string
}

export interface MapClass {

    // Own fields of Shumate-1.0.Shumate.MapClass

    parentClass: Gtk.WidgetClass
}

export abstract class MapClass {

    // Own properties of Shumate-1.0.Shumate.MapClass

    static name: string
}

export interface MapLayerClass {

    // Own fields of Shumate-1.0.Shumate.MapLayerClass

    parentClass: LayerClass
}

export abstract class MapLayerClass {

    // Own properties of Shumate-1.0.Shumate.MapLayerClass

    static name: string
}

export interface MapSourceClass {

    // Own fields of Shumate-1.0.Shumate.MapSourceClass

    parentClass: GObject.ObjectClass
    fillTileAsync: (self: MapSource, tile: Tile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    fillTileFinish: (self: MapSource, result: Gio.AsyncResult) => boolean
}

export abstract class MapSourceClass {

    // Own properties of Shumate-1.0.Shumate.MapSourceClass

    static name: string
}

export interface MapSourceRegistryClass {

    // Own fields of Shumate-1.0.Shumate.MapSourceRegistryClass

    parentClass: GObject.ObjectClass
}

export abstract class MapSourceRegistryClass {

    // Own properties of Shumate-1.0.Shumate.MapSourceRegistryClass

    static name: string
}

export interface MarkerClass {

    // Own fields of Shumate-1.0.Shumate.MarkerClass

    parentClass: Gtk.WidgetClass
}

export abstract class MarkerClass {

    // Own properties of Shumate-1.0.Shumate.MarkerClass

    static name: string
}

export interface MarkerLayerClass {

    // Own fields of Shumate-1.0.Shumate.MarkerLayerClass

    parentClass: LayerClass
}

export abstract class MarkerLayerClass {

    // Own properties of Shumate-1.0.Shumate.MarkerLayerClass

    static name: string
}

export interface MemoryCacheClass {

    // Own fields of Shumate-1.0.Shumate.MemoryCacheClass

    parentClass: GObject.ObjectClass
}

export abstract class MemoryCacheClass {

    // Own properties of Shumate-1.0.Shumate.MemoryCacheClass

    static name: string
}

export interface PathLayerClass {

    // Own fields of Shumate-1.0.Shumate.PathLayerClass

    parentClass: LayerClass
}

export abstract class PathLayerClass {

    // Own properties of Shumate-1.0.Shumate.PathLayerClass

    static name: string
}

export interface PointClass {

    // Own fields of Shumate-1.0.Shumate.PointClass

    parentClass: MarkerClass
}

export abstract class PointClass {

    // Own properties of Shumate-1.0.Shumate.PointClass

    static name: string
}

export interface RasterRendererClass {

    // Own fields of Shumate-1.0.Shumate.RasterRendererClass

    parentClass: MapSourceClass
}

export abstract class RasterRendererClass {

    // Own properties of Shumate-1.0.Shumate.RasterRendererClass

    static name: string
}

export interface ScaleClass {

    // Own fields of Shumate-1.0.Shumate.ScaleClass

    parentClass: Gtk.WidgetClass
}

export abstract class ScaleClass {

    // Own properties of Shumate-1.0.Shumate.ScaleClass

    static name: string
}

export interface SimpleMapClass {

    // Own fields of Shumate-1.0.Shumate.SimpleMapClass

    parentClass: Gtk.WidgetClass
}

export abstract class SimpleMapClass {

    // Own properties of Shumate-1.0.Shumate.SimpleMapClass

    static name: string
}

export interface TileClass {

    // Own fields of Shumate-1.0.Shumate.TileClass

    parentClass: Gtk.WidgetClass
}

export abstract class TileClass {

    // Own properties of Shumate-1.0.Shumate.TileClass

    static name: string
}

export interface TileDownloaderClass {

    // Own fields of Shumate-1.0.Shumate.TileDownloaderClass

    parentClass: DataSourceClass
}

export abstract class TileDownloaderClass {

    // Own properties of Shumate-1.0.Shumate.TileDownloaderClass

    static name: string
}

export interface VectorRendererClass {

    // Own fields of Shumate-1.0.Shumate.VectorRendererClass

    parentClass: MapSourceClass
}

export abstract class VectorRendererClass {

    // Own properties of Shumate-1.0.Shumate.VectorRendererClass

    static name: string
}

export interface ViewportClass {

    // Own fields of Shumate-1.0.Shumate.ViewportClass

    parentClass: GObject.ObjectClass
}

export abstract class ViewportClass {

    // Own properties of Shumate-1.0.Shumate.ViewportClass

    static name: string
}
