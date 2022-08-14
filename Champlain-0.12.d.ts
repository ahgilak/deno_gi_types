
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Champlain-0.12
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
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
 * Projections supported by the library.
 */
export enum MapProjection {
    /**
     * Currently the only supported projection
     */
    MERCATOR,
}
/**
 * Selection mode
 */
export enum SelectionMode {
    /**
     * No marker can be selected.
     */
    NONE,
    /**
     * Only one marker can be selected.
     */
    SINGLE,
    /**
     * Multiple marker can be selected.
     */
    MULTIPLE,
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
 * Units used by the scale.
 */
export enum Unit {
    /**
     * kilometers
     */
    KM,
    /**
     * miles
     */
    MILES,
}
/**
 * The major version of libchamplain (1, if %CHAMPLAIN_VERSION is 1.2.3)
 */
export const MAJOR_VERSION: number
export const MAP_SOURCE_MEMPHIS_LOCAL: string
export const MAP_SOURCE_MEMPHIS_NETWORK: string
/**
 * Maps for Free Relief
 */
export const MAP_SOURCE_MFF_RELIEF: string
/**
 * OpenAerialMap
 */
export const MAP_SOURCE_OAM: string
/**
 * Mapquest Open Aerial
 */
export const MAP_SOURCE_OSM_AERIAL_MAP: string
/**
 * OpenStreetMap Cycle Map
 */
export const MAP_SOURCE_OSM_CYCLE_MAP: string
/**
 * OpenStreetMap Mapnik
 */
export const MAP_SOURCE_OSM_MAPNIK: string
export const MAP_SOURCE_OSM_MAPQUEST: string
/**
 * OpenStreetMap Osmarender
 */
export const MAP_SOURCE_OSM_OSMARENDER: string
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
export const MAX_LATITUDE: number
export const MAX_LONGITUDE: number
/**
 * The micro version of libchamplain (3, if %CHAMPLAIN_VERSION is 1.2.3)
 */
export const MICRO_VERSION: number
/**
 * The minor version of libchamplain (2, if %CHAMPLAIN_VERSION is 1.2.3)
 */
export const MINOR_VERSION: number
export const MIN_LATITUDE: number
export const MIN_LONGITUDE: number
/**
 * The full version of libchamplain, like 1.2.3
 */
export const VERSION: number
/**
 * Numerically encoded version of libchamplain, like 0x010203
 */
export const VERSION_HEX: number
/**
 * The full version of libchamplain, in string form (suited for
 * string concatenation)
 */
export const VERSION_S: string
export module Exportable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Exportable

        /**
         * A #cairo_surface_t representation
         */
        surface?: cairo.Surface | null
    }

}

export interface Exportable {

    // Own properties of Champlain-0.12.Champlain.Exportable

    /**
     * A #cairo_surface_t representation
     */
    surface: cairo.Surface

    // Owm methods of Champlain-0.12.Champlain.Exportable

    // Has conflict: getSurface(): cairo.Surface
    // Has conflict: setSurface(surface: cairo.Surface): void

    // Own virtual methods of Champlain-0.12.Champlain.Exportable

    /**
     * Gets the surface
     * @virtual 
     */
    getSurface(): cairo.Surface
    /**
     * Set a #cairo_surface_t to be associated with this tile.
     * @virtual 
     * @param surface the #cairo_surface_t
     */
    setSurface(surface: cairo.Surface): void

    // Class property signals of Champlain-0.12.Champlain.Exportable

    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An interface common to objects having a #cairo_surface_t representation.
 * @interface 
 */
export class Exportable extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.Exportable

    static name: string

    // Constructors of Champlain-0.12.Champlain.Exportable

    constructor(config?: Exportable.ConstructorProperties) 
    _init(config?: Exportable.ConstructorProperties): void
}

export module Location {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Location

        /**
         * The latitude coordonate
         */
        latitude?: number | null
        /**
         * The longitude coordonate
         */
        longitude?: number | null
    }

}

export interface Location {

    // Own properties of Champlain-0.12.Champlain.Location

    /**
     * The latitude coordonate
     */
    latitude: number
    /**
     * The longitude coordonate
     */
    longitude: number

    // Owm methods of Champlain-0.12.Champlain.Location

    // Has conflict: getLatitude(): number
    // Has conflict: getLongitude(): number
    // Has conflict: setLocation(latitude: number, longitude: number): void

    // Own virtual methods of Champlain-0.12.Champlain.Location

    /**
     * Gets the latitude coordinate.
     * @virtual 
     */
    getLatitude(): number
    /**
     * Gets the longitude coordinate.
     * @virtual 
     */
    getLongitude(): number
    /**
     * Sets the coordinates of the location
     * @virtual 
     * @param latitude the latitude
     * @param longitude the longitude
     */
    setLocation(latitude: number, longitude: number): void

    // Class property signals of Champlain-0.12.Champlain.Location

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
 * An interface common to objects having latitude and longitude.
 * @interface 
 */
export class Location extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.Location

    static name: string

    // Constructors of Champlain-0.12.Champlain.Location

    constructor(config?: Location.ConstructorProperties) 
    _init(config?: Location.ConstructorProperties): void
}

export module Adjustment {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Adjustment

        lower?: number | null
        stepIncrement?: number | null
        upper?: number | null
        value?: number | null
    }

}

export interface Adjustment {

    // Own properties of Champlain-0.12.Champlain.Adjustment

    lower: number
    stepIncrement: number
    upper: number
    value: number

    // Owm methods of Champlain-0.12.Champlain.Adjustment

    clamp(interpolate: boolean, nFrames: number, fps: number): boolean
    getValue(): number
    getValues(value: number, lower: number, upper: number, stepIncrement: number): void
    interpolate(value: number, nFrames: number, fps: number): void
    interpolateStop(): void
    setValue(value: number): void
    setValues(value: number, lower: number, upper: number, stepIncrement: number): void

    // Own virtual methods of Champlain-0.12.Champlain.Adjustment

    changed(): void

    // Own signals of Champlain-0.12.Champlain.Adjustment

    connect(sigName: "changed", callback: Adjustment.ChangedSignalCallback): number
    on(sigName: "changed", callback: Adjustment.ChangedSignalCallback): number
    once(sigName: "changed", callback: Adjustment.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Adjustment

    connect(sigName: "notify::lower", callback: any): number
    on(sigName: "notify::lower", callback: any): number
    once(sigName: "notify::lower", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::lower", ...args: any[]): void
    connect(sigName: "notify::step-increment", callback: any): number
    on(sigName: "notify::step-increment", callback: any): number
    once(sigName: "notify::step-increment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::step-increment", ...args: any[]): void
    connect(sigName: "notify::upper", callback: any): number
    on(sigName: "notify::upper", callback: any): number
    once(sigName: "notify::upper", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::upper", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class for handling an interval between to values. The contents of
 * the #ChamplainAdjustment are private and should be accessed using the
 * public API.
 * @class 
 */
export class Adjustment extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.Adjustment

    static name: string

    // Constructors of Champlain-0.12.Champlain.Adjustment

    constructor(config?: Adjustment.ConstructorProperties) 
    constructor(value: number, lower: number, upper: number, stepIncrement: number) 
    static new(value: number, lower: number, upper: number, stepIncrement: number): Adjustment
    _init(config?: Adjustment.ConstructorProperties): void
}

export module Coordinate {

    // Constructor properties interface

    export interface ConstructorProperties extends Location.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface Coordinate extends Location {

    // Own fields of Champlain-0.12.Champlain.Coordinate

    parent: GObject.InitiallyUnowned
    priv: CoordinatePrivate

    // Class property signals of Champlain-0.12.Champlain.Coordinate

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
 * The #ChamplainCoordinate structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Coordinate extends GObject.InitiallyUnowned {

    // Own properties of Champlain-0.12.Champlain.Coordinate

    static name: string

    // Constructors of Champlain-0.12.Champlain.Coordinate

    constructor(config?: Coordinate.ConstructorProperties) 
    /**
     * Creates a new instance of #ChamplainCoordinate.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainCoordinate.
     * @constructor 
     */
    static new(): Coordinate
    /**
     * Creates a new instance of #ChamplainCoordinate initialized with the given
     * coordinates.
     * @constructor 
     * @param latitude the latitude coordinate
     * @param longitude the longitude coordinate
     */
    static newFull(latitude: number, longitude: number): Coordinate
    _init(config?: Coordinate.ConstructorProperties): void
}

export module CustomMarker {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Location.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Marker.ConstructorProperties {
    }

}

export interface CustomMarker extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own fields of Champlain-0.12.Champlain.CustomMarker

    parent: Marker & Clutter.Actor
    priv: any

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

    // Class property signals of Champlain-0.12.Champlain.CustomMarker

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
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
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
 * The #ChamplainCustomMarker structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class CustomMarker extends Marker {

    // Own properties of Champlain-0.12.Champlain.CustomMarker

    static name: string

    // Constructors of Champlain-0.12.Champlain.CustomMarker

    constructor(config?: CustomMarker.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainCustomMarker.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainCustomMarker.
     * @constructor 
     */
    static new(): CustomMarker
    _init(config?: CustomMarker.ConstructorProperties): void
}

export module ErrorTileRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Renderer.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.ErrorTileRenderer

        /**
         * The size of the rendered tile.
         */
        tileSize?: number | null
    }

}

export interface ErrorTileRenderer {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * The size of the rendered tile.
     */
    tileSize: number

    // Own fields of Champlain-0.12.Champlain.ErrorTileRenderer

    parent: Renderer & GObject.InitiallyUnowned
    priv: ErrorTileRendererPrivate

    // Owm methods of Champlain-0.12.Champlain.ErrorTileRenderer

    /**
     * Gets the size of the rendered error tiles.
     */
    getTileSize(): number
    /**
     * Sets the size of the rendered error tile.
     * @param size the size of the rendered error tiles
     */
    setTileSize(size: number): void

    // Conflicting methods

    /**
     * Sets the data which is used to render tiles by the renderer.
     * @virtual 
     * @param data data used for tile rendering
     */
    setData(data: Uint8Array): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of Champlain-0.12.Champlain.ErrorTileRenderer

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
 * The #ChamplainErrorTileRenderer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class ErrorTileRenderer extends Renderer {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRenderer

    static name: string

    // Constructors of Champlain-0.12.Champlain.ErrorTileRenderer

    constructor(config?: ErrorTileRenderer.ConstructorProperties) 
    /**
     * Constructor of a #ChamplainErrorTileRenderer.
     * @constructor 
     * @param tileSize the size of the rendered error tile
     */
    constructor(tileSize: number) 
    /**
     * Constructor of a #ChamplainErrorTileRenderer.
     * @constructor 
     * @param tileSize the size of the rendered error tile
     */
    static new(tileSize: number): ErrorTileRenderer
    _init(config?: ErrorTileRenderer.ConstructorProperties): void
}

export module FileCache {

    // Constructor properties interface

    export interface ConstructorProperties extends TileCache.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.FileCache

        /**
         * The directory where the tile database is stored.
         */
        cacheDir?: string | null
        /**
         * The cache size limit in bytes.
         * 
         * Note: this new value will not be applied until you call champlain_file_cache_purge()
         */
        sizeLimit?: number | null
    }

}

export interface FileCache {

    // Own properties of Champlain-0.12.Champlain.FileCache

    /**
     * The directory where the tile database is stored.
     */
    readonly cacheDir: string
    /**
     * The cache size limit in bytes.
     * 
     * Note: this new value will not be applied until you call champlain_file_cache_purge()
     */
    sizeLimit: number

    // Own fields of Champlain-0.12.Champlain.FileCache

    parentInstance: any
    priv: any

    // Owm methods of Champlain-0.12.Champlain.FileCache

    /**
     * Gets the directory where the cache database is stored.
     */
    getCacheDir(): string
    /**
     * Gets the cache size limit in bytes.
     */
    getSizeLimit(): number
    /**
     * Purge the cache from the less popular tiles until cache's size limit is reached.
     */
    purge(): void
    /**
     * Purge the cache from the less popular tiles until cache's size limit is reached.
     * This is a non blocking call as the purge will happen when the application is idle
     */
    purgeOnIdle(): void
    /**
     * Sets the cache size limit in bytes.
     * @param sizeLimit the cache limit in bytes
     */
    setSizeLimit(sizeLimit: number): void

    // Class property signals of Champlain-0.12.Champlain.FileCache

    connect(sigName: "notify::cache-dir", callback: any): number
    on(sigName: "notify::cache-dir", callback: any): number
    once(sigName: "notify::cache-dir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::size-limit", callback: any): number
    on(sigName: "notify::size-limit", callback: any): number
    once(sigName: "notify::size-limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainFileCache structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class FileCache extends TileCache {

    // Own properties of Champlain-0.12.Champlain.FileCache

    static name: string

    // Constructors of Champlain-0.12.Champlain.FileCache

    constructor(config?: FileCache.ConstructorProperties) 
    /**
     * Constructor of #ChamplainFileCache.
     * @constructor 
     * @param sizeLimit maximum size of the cache in bytes
     * @param cacheDir the directory where the cache is created. When cache_dir == NULL, a cache in ~/.cache/champlain is used.
     * @param renderer the #ChamplainRenderer used for tiles rendering
     */
    static newFull(sizeLimit: number, cacheDir: string | null, renderer: Renderer): FileCache
    _init(config?: FileCache.ConstructorProperties): void
}

export module FileTileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends TileSource.ConstructorProperties {
    }

}

export interface FileTileSource {

    // Conflicting properties

    parentInstance: any
    priv: any & MapSourcePrivate

    // Own fields of Champlain-0.12.Champlain.FileTileSource

    parent: TileSource

    // Owm methods of Champlain-0.12.Champlain.FileTileSource

    /**
     * Loads the OpenStreetMap XML file at the given path.
     * @param mapPath a path to a map data file
     */
    loadMapData(mapPath: string): void

    // Class property signals of Champlain-0.12.Champlain.FileTileSource

    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
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
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainFileTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class FileTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.FileTileSource

    static name: string

    // Constructors of Champlain-0.12.Champlain.FileTileSource

    constructor(config?: FileTileSource.ConstructorProperties) 
    /**
     * Constructor of #ChamplainFileTileSource.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, renderer: Renderer): FileTileSource
    _init(config?: FileTileSource.ConstructorProperties): void
}

export module ImageRenderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Renderer.ConstructorProperties {
    }

}

export interface ImageRenderer {

    // Own fields of Champlain-0.12.Champlain.ImageRenderer

    parent: Renderer & GObject.InitiallyUnowned
    priv: ImageRendererPrivate

    // Conflicting methods

    /**
     * Sets the data which is used to render tiles by the renderer.
     * @virtual 
     * @param data data used for tile rendering
     */
    setData(data: Uint8Array): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of Champlain-0.12.Champlain.ImageRenderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainImageRenderer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class ImageRenderer extends Renderer {

    // Own properties of Champlain-0.12.Champlain.ImageRenderer

    static name: string

    // Constructors of Champlain-0.12.Champlain.ImageRenderer

    constructor(config?: ImageRenderer.ConstructorProperties) 
    /**
     * Constructor of #ChamplainImageRenderer.
     * @constructor 
     */
    constructor() 
    /**
     * Constructor of #ChamplainImageRenderer.
     * @constructor 
     */
    static new(): ImageRenderer
    _init(config?: ImageRenderer.ConstructorProperties): void
}

export module KineticScrollView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `panning-completed`
     */
    export interface PanningCompletedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.KineticScrollView

        decelRate?: number | null
        mode?: boolean | null
        motionBuffer?: number | null
    }

}

export interface KineticScrollView extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.KineticScrollView

    decelRate: number
    mode: boolean
    motionBuffer: number

    // Owm methods of Champlain-0.12.Champlain.KineticScrollView

    stop(): void

    // Conflicting methods

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

    // Own signals of Champlain-0.12.Champlain.KineticScrollView

    connect(sigName: "panning-completed", callback: KineticScrollView.PanningCompletedSignalCallback): number
    on(sigName: "panning-completed", callback: KineticScrollView.PanningCompletedSignalCallback): number
    once(sigName: "panning-completed", callback: KineticScrollView.PanningCompletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "panning-completed", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.KineticScrollView

    connect(sigName: "notify::decel-rate", callback: any): number
    on(sigName: "notify::decel-rate", callback: any): number
    once(sigName: "notify::decel-rate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decel-rate", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::motion-buffer", callback: any): number
    on(sigName: "notify::motion-buffer", callback: any): number
    once(sigName: "notify::motion-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::motion-buffer", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KineticScrollView extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.KineticScrollView

    static name: string

    // Constructors of Champlain-0.12.Champlain.KineticScrollView

    constructor(config?: KineticScrollView.ConstructorProperties) 
    constructor(kinetic: boolean, viewport: Viewport) 
    static new(kinetic: boolean, viewport: Viewport): KineticScrollView

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    _init(config?: KineticScrollView.ConstructorProperties): void
}

export module Label {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Location.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Marker.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Label

        /**
         * The label's alignment
         */
        alignment?: Pango.Alignment | null
        /**
         * The label's color
         */
        color?: Clutter.Color | null
        /**
         * If the label has a background
         */
        drawBackground?: boolean | null
        /**
         * If the label background has a shadow
         */
        drawShadow?: boolean | null
        /**
         * The label's ellipsize mode
         */
        ellipsize?: Pango.EllipsizeMode | null
        /**
         * The label's text font name
         */
        fontName?: string | null
        /**
         * The image of the label
         */
        image?: Clutter.Actor | null
        /**
         * If the label is in single line mode
         */
        singleLineMode?: boolean | null
        /**
         * The text of the label
         */
        text?: string | null
        /**
         * The label's text color
         */
        textColor?: Clutter.Color | null
        /**
         * If the label's text uses markup
         */
        useMarkup?: boolean | null
        /**
         * If the label's text wrap is set
         */
        wrap?: boolean | null
        /**
         * The label's text wrap mode
         */
        wrapMode?: Pango.WrapMode | null
    }

}

export interface Label extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Label

    /**
     * The label's alignment
     */
    alignment: Pango.Alignment
    /**
     * The label's color
     */
    color: Clutter.Color
    /**
     * If the label has a background
     */
    drawBackground: boolean
    /**
     * If the label background has a shadow
     */
    drawShadow: boolean
    /**
     * The label's ellipsize mode
     */
    ellipsize: Pango.EllipsizeMode
    /**
     * The label's text font name
     */
    fontName: string
    /**
     * The image of the label
     */
    image: Clutter.Actor
    /**
     * If the label is in single line mode
     */
    singleLineMode: boolean
    /**
     * The text of the label
     */
    text: string
    /**
     * The label's text color
     */
    textColor: Clutter.Color
    /**
     * If the label's text uses markup
     */
    useMarkup: boolean
    /**
     * If the label's text wrap is set
     */
    wrap: boolean
    /**
     * The label's text wrap mode
     */
    wrapMode: Pango.WrapMode

    // Own fields of Champlain-0.12.Champlain.Label

    parent: Marker & Clutter.Actor
    priv: any

    // Owm methods of Champlain-0.12.Champlain.Label

    /**
     * Get the label's text alignment.
     */
    getAlignment(): Pango.Alignment
    /**
     * Gets the label's text attributes.
     */
    getAttributes(): Pango.AttrList
    /**
     * Gets the label's background color.
     */
    getColor(): Clutter.Color
    /**
     * Checks whether the label has a background.
     */
    getDrawBackground(): boolean
    /**
     * Checks whether the label's background has a shadow.
     */
    getDrawShadow(): boolean
    /**
     * Gets the label's text ellipsize mode.
     */
    getEllipsize(): Pango.EllipsizeMode
    /**
     * Gets the label's font name.
     */
    getFontName(): string
    /**
     * Get the label's image.
     */
    getImage(): Clutter.Actor
    /**
     * Checks the label's single line mode.
     */
    getSingleLineMode(): boolean
    /**
     * Get the label's text.
     */
    getText(): string
    /**
     * Gets the label's text color.
     */
    getTextColor(): Clutter.Color
    /**
     * Check whether the label uses markup.
     */
    getUseMarkup(): boolean
    /**
     * Checks whether the label text wraps.
     */
    getWrap(): boolean
    /**
     * Gets the label's text wrap mode.
     */
    getWrapMode(): Pango.WrapMode
    /**
     * Sets the label's text alignment.
     * @param alignment The label's alignment
     */
    setAlignment(alignment: Pango.Alignment): void
    /**
     * Sets the label's text attributes.
     * @param list The label's text attributes.
     */
    setAttributes(list: Pango.AttrList): void
    /**
     * Sets the label's background color.
     * @param color The label's background color or NULL to reset the background to the         default color. The color parameter is copied.
     */
    setColor(color: Clutter.Color | null): void
    /**
     * Sets if the label has a background.
     * @param background value.
     */
    setDrawBackground(background: boolean): void
    /**
     * Sets if the label's background has a shadow.
     * @param shadow value.
     */
    setDrawShadow(shadow: boolean): void
    /**
     * Sets the label's text ellipsize mode.
     * @param mode The label's ellipsize mode.
     */
    setEllipsize(mode: Pango.EllipsizeMode): void
    /**
     * Sets the label's font name such as "Sans 12".
     * @param fontName The label's font name or NULL to reset the font to the default             value.
     */
    setFontName(fontName: string | null): void
    /**
     * Sets the label's image.
     * @param image The image as a `ClutterActor` or NULL to remove the current image.
     */
    setImage(image: Clutter.Actor | null): void
    /**
     * Sets if the label's text is on a single line.
     * @param mode The label's single line mode
     */
    setSingleLineMode(mode: boolean): void
    /**
     * Sets the label's text.
     * @param text The new text of the label
     */
    setText(text: string): void
    /**
     * Sets the label's text color.
     * @param color The label's text color or NULL to reset the text to the default         color. The color parameter is copied.
     */
    setTextColor(color: Clutter.Color | null): void
    /**
     * Sets if the label's text uses markup.
     * @param useMarkup The value
     */
    setUseMarkup(useMarkup: boolean): void
    /**
     * Sets if the label's text wrap.
     * @param wrap The label's wrap.
     */
    setWrap(wrap: boolean): void
    /**
     * Sets the label's text wrap mode.
     * @param wrapMode The label's wrap mode.
     */
    setWrapMode(wrapMode: Pango.WrapMode): void

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

    // Class property signals of Champlain-0.12.Champlain.Label

    connect(sigName: "notify::alignment", callback: any): number
    on(sigName: "notify::alignment", callback: any): number
    once(sigName: "notify::alignment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::draw-background", callback: any): number
    on(sigName: "notify::draw-background", callback: any): number
    once(sigName: "notify::draw-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-background", ...args: any[]): void
    connect(sigName: "notify::draw-shadow", callback: any): number
    on(sigName: "notify::draw-shadow", callback: any): number
    once(sigName: "notify::draw-shadow", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::draw-shadow", ...args: any[]): void
    connect(sigName: "notify::ellipsize", callback: any): number
    on(sigName: "notify::ellipsize", callback: any): number
    once(sigName: "notify::ellipsize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ellipsize", ...args: any[]): void
    connect(sigName: "notify::font-name", callback: any): number
    on(sigName: "notify::font-name", callback: any): number
    once(sigName: "notify::font-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-name", ...args: any[]): void
    connect(sigName: "notify::image", callback: any): number
    on(sigName: "notify::image", callback: any): number
    once(sigName: "notify::image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::single-line-mode", callback: any): number
    on(sigName: "notify::single-line-mode", callback: any): number
    once(sigName: "notify::single-line-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::single-line-mode", ...args: any[]): void
    connect(sigName: "notify::text", callback: any): number
    on(sigName: "notify::text", callback: any): number
    once(sigName: "notify::text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text", ...args: any[]): void
    connect(sigName: "notify::text-color", callback: any): number
    on(sigName: "notify::text-color", callback: any): number
    once(sigName: "notify::text-color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-color", ...args: any[]): void
    connect(sigName: "notify::use-markup", callback: any): number
    on(sigName: "notify::use-markup", callback: any): number
    once(sigName: "notify::use-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-markup", ...args: any[]): void
    connect(sigName: "notify::wrap", callback: any): number
    on(sigName: "notify::wrap", callback: any): number
    once(sigName: "notify::wrap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap", ...args: any[]): void
    connect(sigName: "notify::wrap-mode", callback: any): number
    on(sigName: "notify::wrap-mode", callback: any): number
    once(sigName: "notify::wrap-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wrap-mode", ...args: any[]): void
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
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
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
 * The #ChamplainLabel structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Label extends Marker {

    // Own properties of Champlain-0.12.Champlain.Label

    static name: string

    // Constructors of Champlain-0.12.Champlain.Label

    constructor(config?: Label.ConstructorProperties) 
    /**
     * Creates a new instance of #ChamplainLabel.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainLabel.
     * @constructor 
     */
    static new(): Label
    /**
     * Creates a new instance of #ChamplainLabel with image loaded from file.
     * @constructor 
     * @param filename The filename of the image.
     */
    static newFromFile(filename: string): Label
    /**
     * Creates a new instance of #ChamplainLabel consisting of a custom #ClutterActor.
     * @constructor 
     * @param text The text of the label
     * @param actor The image as a `ClutterActor`
     */
    static newFull(text: string, actor: Clutter.Actor): Label
    /**
     * Creates a new instance of #ChamplainLabel with image.
     * @constructor 
     * @param actor The image as a `ClutterActor`.
     */
    static newWithImage(actor: Clutter.Actor): Label
    /**
     * Creates a new instance of #ChamplainLabel with text value.
     * @constructor 
     * @param text the text of the label
     * @param font the font to use to draw the text, for example "Courrier Bold 11", can be NULL
     * @param textColor a #ClutterColor, the color of the text, can be NULL
     * @param labelColor a #ClutterColor, the color of the label, can be NULL
     */
    static newWithText(text: string, font: string | null, textColor: Clutter.Color | null, labelColor: Clutter.Color | null): Label
    _init(config?: Label.ConstructorProperties): void
}

export module Layer {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {
    }

}

export interface Layer extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own fields of Champlain-0.12.Champlain.Layer

    parent: Clutter.Actor

    // Owm methods of Champlain-0.12.Champlain.Layer

    // Has conflict: getBoundingBox(): BoundingBox
    // Has conflict: setView(view: View | null): void

    // Conflicting methods

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

    // Own virtual methods of Champlain-0.12.Champlain.Layer

    /**
     * Gets the bounding box occupied by the elements inside the layer.
     * @virtual 
     */
    getBoundingBox(): BoundingBox
    /**
     * #ChamplainView calls this method to pass a reference to itself to the layer
     * when the layer is added to the view. When the layer is removed from the
     * view, it passes %NULL to the layer. Custom layers can implement this method
     * and perform the necessary initialization. This method should not be called
     * by user code.
     * @virtual 
     * @param view a #ChamplainView
     */
    setView(view: View | null): void

    // Class property signals of Champlain-0.12.Champlain.Layer

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainLayer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Layer extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Layer

    static name: string

    // Constructors of Champlain-0.12.Champlain.Layer

    constructor(config?: Layer.ConstructorProperties) 
    _init(config?: Layer.ConstructorProperties): void
}

export module License {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.License

        /**
         * The license's alignment
         */
        alignment?: Pango.Alignment | null
        /**
         * Sets additional text to be displayed in the license area.  The map's
         * license will be added below it. Your text can have multiple lines, just use
         * "\n" in between.
         */
        extraText?: string | null
    }

}

export interface License extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.License

    /**
     * The license's alignment
     */
    alignment: Pango.Alignment
    /**
     * Sets additional text to be displayed in the license area.  The map's
     * license will be added below it. Your text can have multiple lines, just use
     * "\n" in between.
     */
    extraText: string

    // Own fields of Champlain-0.12.Champlain.License

    parent: Clutter.Actor
    priv: LicensePrivate

    // Owm methods of Champlain-0.12.Champlain.License

    /**
     * This method connects to the necessary signals of #ChamplainView to make the
     * license change automatically when the map source changes.
     * @param view a #ChamplainView
     */
    connectView(view: View): void
    /**
     * This method disconnects from the signals previously connected by champlain_license_connect_view().
     */
    disconnectView(): void
    /**
     * Get the license's text alignment.
     */
    getAlignment(): Pango.Alignment
    /**
     * Gets the additional license text.
     */
    getExtraText(): string
    /**
     * Set the license's text alignment.
     * @param alignment The license's text alignment
     */
    setAlignment(alignment: Pango.Alignment): void
    /**
     * Show the additional license text on the map view.  The text will preceed the
     * map's licence when displayed. Use "\n" to separate the lines.
     * @param text the additional license text
     */
    setExtraText(text: string): void

    // Conflicting methods

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

    // Class property signals of Champlain-0.12.Champlain.License

    connect(sigName: "notify::alignment", callback: any): number
    on(sigName: "notify::alignment", callback: any): number
    once(sigName: "notify::alignment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::alignment", ...args: any[]): void
    connect(sigName: "notify::extra-text", callback: any): number
    on(sigName: "notify::extra-text", callback: any): number
    once(sigName: "notify::extra-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extra-text", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainLicense structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class License extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.License

    static name: string

    // Constructors of Champlain-0.12.Champlain.License

    constructor(config?: License.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainLicense.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainLicense.
     * @constructor 
     */
    static new(): License
    _init(config?: License.ConstructorProperties): void
}

export module MapSource {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.MapSource

        /**
         * Next source in the loading chain.
         */
        nextSource?: MapSource | null
        /**
         * Renderer used for tiles rendering.
         */
        renderer?: Renderer | null
    }

}

export interface MapSource {

    // Own properties of Champlain-0.12.Champlain.MapSource

    /**
     * Next source in the loading chain.
     */
    nextSource: MapSource
    /**
     * Renderer used for tiles rendering.
     */
    renderer: Renderer

    // Own fields of Champlain-0.12.Champlain.MapSource

    parentInstance: GObject.InitiallyUnowned
    priv: MapSourcePrivate

    // Owm methods of Champlain-0.12.Champlain.MapSource

    // Has conflict: fillTile(tile: Tile): void
    /**
     * Gets the number of tiles in a column at this zoom level for this map
     * source.
     * @param zoomLevel the zoom level
     */
    getColumnCount(zoomLevel: number): number
    // Has conflict: getId(): string
    /**
     * Gets the latitude corresponding to this y position in the map source's
     * projection.
     * @param zoomLevel the zoom level
     * @param y a y position
     */
    getLatitude(zoomLevel: number, y: number): number
    // Has conflict: getLicense(): string
    // Has conflict: getLicenseUri(): string
    /**
     * Gets the longitude corresponding to this x position in the map source's
     * projection.
     * @param zoomLevel the zoom level
     * @param x a x position
     */
    getLongitude(zoomLevel: number, x: number): number
    // Has conflict: getMaxZoomLevel(): number
    /**
     * Gets meters per pixel at the position on the map using this map source's projection.
     * @param zoomLevel the zoom level
     * @param latitude a latitude
     * @param longitude a longitude
     */
    getMetersPerPixel(zoomLevel: number, latitude: number, longitude: number): number
    // Has conflict: getMinZoomLevel(): number
    // Has conflict: getName(): string
    /**
     * Get the next source in the chain.
     */
    getNextSource(): MapSource
    // Has conflict: getProjection(): MapProjection
    /**
     * Get the renderer used for tiles rendering.
     */
    getRenderer(): Renderer
    /**
     * Gets the number of tiles in a row at this zoom level for this map source.
     * @param zoomLevel the zoom level
     */
    getRowCount(zoomLevel: number): number
    // Has conflict: getTileSize(): number
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
     * Sets the next map source in the chain.
     * @param nextSource the next #ChamplainMapSource in the chain
     */
    setNextSource(nextSource: MapSource): void
    /**
     * Sets the renderer used for tiles rendering.
     * @param renderer the renderer
     */
    setRenderer(renderer: Renderer): void

    // Own virtual methods of Champlain-0.12.Champlain.MapSource

    /**
     * Fills the tile with image data (either from cache, network or rendered
     * locally).
     * @virtual 
     * @param tile a #ChamplainTile
     */
    fillTile(tile: Tile): void
    /**
     * Gets map source's id.
     * @virtual 
     */
    getId(): string
    /**
     * Gets map source's license.
     * @virtual 
     */
    getLicense(): string
    /**
     * Gets map source's license URI.
     * @virtual 
     */
    getLicenseUri(): string
    /**
     * Gets map source's maximum zoom level.
     * @virtual 
     */
    getMaxZoomLevel(): number
    /**
     * Gets map source's minimum zoom level.
     * @virtual 
     */
    getMinZoomLevel(): number
    /**
     * Gets map source's name.
     * @virtual 
     */
    getName(): string
    /**
     * Gets map source's projection.
     * @virtual 
     */
    getProjection(): MapProjection
    /**
     * Gets map source's tile size.
     * @virtual 
     */
    getTileSize(): number

    // Class property signals of Champlain-0.12.Champlain.MapSource

    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainMapSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class MapSource extends GObject.InitiallyUnowned {

    // Own properties of Champlain-0.12.Champlain.MapSource

    static name: string

    // Constructors of Champlain-0.12.Champlain.MapSource

    constructor(config?: MapSource.ConstructorProperties) 
    _init(config?: MapSource.ConstructorProperties): void
}

export module MapSourceChain {

    // Constructor properties interface

    export interface ConstructorProperties extends MapSource.ConstructorProperties {
    }

}

export interface MapSourceChain {

    // Own fields of Champlain-0.12.Champlain.MapSourceChain

    parentInstance: any
    priv: any

    // Owm methods of Champlain-0.12.Champlain.MapSourceChain

    /**
     * Pops a map source from the top of the stack from the chain.
     */
    pop(): void
    /**
     * Pushes a map source into the chain.
     * @param mapSource the #ChamplainMapSource to be pushed into the chain
     */
    push(mapSource: MapSource): void

    // Class property signals of Champlain-0.12.Champlain.MapSourceChain

    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainMapSourceChain structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class MapSourceChain extends MapSource {

    // Own properties of Champlain-0.12.Champlain.MapSourceChain

    static name: string

    // Constructors of Champlain-0.12.Champlain.MapSourceChain

    constructor(config?: MapSourceChain.ConstructorProperties) 
    /**
     * Constructor of #ChamplainMapSourceChain.
     * @constructor 
     */
    constructor() 
    /**
     * Constructor of #ChamplainMapSourceChain.
     * @constructor 
     */
    static new(): MapSourceChain
    _init(config?: MapSourceChain.ConstructorProperties): void
}

export module MapSourceDesc {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.MapSourceDesc

        /**
         * The map source constructor
         */
        constructor_?: object | null
        /**
         * User data passed to the constructor
         */
        data?: object | null
        /**
         * The id of the map source
         */
        id?: string | null
        /**
         * The license of the map source
         */
        license?: string | null
        /**
         * The license's uri for more information
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
        /**
         * The URI format of a network map source
         */
        uriFormat?: string | null
    }

}

export interface MapSourceDesc {

    // Own properties of Champlain-0.12.Champlain.MapSourceDesc

    /**
     * The map source constructor
     */
    readonly constructor_: object
    /**
     * User data passed to the constructor
     */
    readonly data: object
    /**
     * The id of the map source
     */
    readonly id: string
    /**
     * The license of the map source
     */
    readonly license: string
    /**
     * The license's uri for more information
     */
    readonly licenseUri: string
    /**
     * The maximum zoom level
     */
    readonly maxZoomLevel: number
    /**
     * The minimum zoom level
     */
    readonly minZoomLevel: number
    /**
     * The name of the map source
     */
    readonly name: string
    /**
     * The map projection of the map source
     */
    readonly projection: MapProjection
    /**
     * The tile size of the map source
     */
    readonly tileSize: number
    /**
     * The URI format of a network map source
     */
    readonly uriFormat: string

    // Own fields of Champlain-0.12.Champlain.MapSourceDesc

    parentInstance: GObject.Object
    priv: MapSourceDescPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceDesc

    /**
     * Gets user data.
     */
    getData(): object | null

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets map source's id.
     */
    getId(): string
    /**
     * Gets map source's license.
     */
    getLicense(): string
    /**
     * Gets map source's license URI.
     */
    getLicenseUri(): string
    /**
     * Gets map source's maximum zoom level.
     */
    getMaxZoomLevel(): number
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
     * Gets map source's tile size.
     */
    getTileSize(): number
    /**
     * Gets network map source's URI format.
     */
    getUriFormat(): string

    // Class property signals of Champlain-0.12.Champlain.MapSourceDesc

    connect(sigName: "notify::constructor", callback: any): number
    on(sigName: "notify::constructor", callback: any): number
    once(sigName: "notify::constructor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructor", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
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
    connect(sigName: "notify::uri-format", callback: any): number
    on(sigName: "notify::uri-format", callback: any): number
    once(sigName: "notify::uri-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri-format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainMapSourceDesc structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class MapSourceDesc extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.MapSourceDesc

    static name: string

    // Constructors of Champlain-0.12.Champlain.MapSourceDesc

    constructor(config?: MapSourceDesc.ConstructorProperties) 
    _init(config?: MapSourceDesc.ConstructorProperties): void
}

export module MapSourceFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MapSourceFactory {

    // Own fields of Champlain-0.12.Champlain.MapSourceFactory

    parent: GObject.Object
    priv: MapSourceFactoryPrivate

    // Owm methods of Champlain-0.12.Champlain.MapSourceFactory

    /**
     * Note: The id should not contain any character that can't be in a filename as it
     * will be used as the cache directory name for that map source.
     * @param id the wanted map source id
     */
    create(id: string): MapSource
    /**
     * Creates a cached map source.
     * @param id the wanted map source id
     */
    createCachedSource(id: string): MapSource
    /**
     * Creates a map source generating error tiles.
     * @param tileSize the size of the error tile
     */
    createErrorSource(tileSize: number): MapSource
    /**
     * Creates a memory cached map source.
     * @param id the wanted map source id
     */
    createMemcachedSource(id: string): MapSource
    /**
     * Get the list of registered map sources.
     */
    getRegistered(): MapSourceDesc[]
    /**
     * Registers the new map source with the given constructor.  When this map
     * source is requested, the given constructor will be used to build the
     * map source.  #ChamplainMapSourceFactory will take ownership of the passed
     * #ChamplainMapSourceDesc, so don't free it.
     * @param desc the description of the map source
     */
    register(desc: MapSourceDesc): boolean

    // Class property signals of Champlain-0.12.Champlain.MapSourceFactory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainMapSourceFactory structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class MapSourceFactory extends GObject.Object {

    // Own properties of Champlain-0.12.Champlain.MapSourceFactory

    static name: string

    // Constructors of Champlain-0.12.Champlain.MapSourceFactory

    constructor(config?: MapSourceFactory.ConstructorProperties) 
    _init(config?: MapSourceFactory.ConstructorProperties): void
    /**
     * A method to obtain the singleton object.
     */
    static dupDefault(): MapSourceFactory
}

export module Marker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `button-press`
     */
    export interface ButtonPressSignalCallback {
        (event: Clutter.Event): void
    }

    /**
     * Signal callback interface for `button-release`
     */
    export interface ButtonReleaseSignalCallback {
        (event: Clutter.Event): void
    }

    /**
     * Signal callback interface for `drag-finish`
     */
    export interface DragFinishSignalCallback {
        (event: Clutter.Event): void
    }

    /**
     * Signal callback interface for `drag-motion`
     */
    export interface DragMotionSignalCallback {
        (dx: number, dy: number, event: Clutter.Event): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Location.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Marker

        /**
         * The draggable state of the marker
         */
        draggable?: boolean | null
        /**
         * The selectable state of the marker
         */
        selectable?: boolean | null
        /**
         * The selected state of the marker
         */
        selected?: boolean | null
    }

}

export interface Marker extends Atk.ImplementorIface, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Marker

    /**
     * The draggable state of the marker
     */
    draggable: boolean
    /**
     * The selectable state of the marker
     */
    selectable: boolean
    /**
     * The selected state of the marker
     */
    selected: boolean

    // Own fields of Champlain-0.12.Champlain.Marker

    parent: Clutter.Actor
    priv: MarkerPrivate

    // Owm methods of Champlain-0.12.Champlain.Marker

    /**
     * Animates the marker as if it were falling from the sky onto the map.
     */
    animateIn(): void
    /**
     * Animates the marker as if it were falling from the sky onto the map after
     * delay.
     * @param delay The delay in milliseconds
     */
    animateInWithDelay(delay: number): void
    /**
     * Animates the marker as if it were drawn through the sky.
     */
    animateOut(): void
    /**
     * Animates the marker as if it were drawn through the sky after
     * delay.
     * @param delay The delay in milliseconds
     */
    animateOutWithDelay(delay: number): void
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
    getSelected(): boolean
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
    /**
     * Sets the marker as selected or not. This will affect the "Selected" look
     * of the marker.
     * @param value the selected state
     */
    setSelected(value: boolean): void

    // Conflicting methods

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

    // Own signals of Champlain-0.12.Champlain.Marker

    connect(sigName: "button-press", callback: Marker.ButtonPressSignalCallback): number
    on(sigName: "button-press", callback: Marker.ButtonPressSignalCallback): number
    once(sigName: "button-press", callback: Marker.ButtonPressSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-press", ...args: any[]): void
    connect(sigName: "button-release", callback: Marker.ButtonReleaseSignalCallback): number
    on(sigName: "button-release", callback: Marker.ButtonReleaseSignalCallback): number
    once(sigName: "button-release", callback: Marker.ButtonReleaseSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-release", ...args: any[]): void
    connect(sigName: "drag-finish", callback: Marker.DragFinishSignalCallback): number
    on(sigName: "drag-finish", callback: Marker.DragFinishSignalCallback): number
    once(sigName: "drag-finish", callback: Marker.DragFinishSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "drag-finish", ...args: any[]): void
    connect(sigName: "drag-motion", callback: Marker.DragMotionSignalCallback): number
    on(sigName: "drag-motion", callback: Marker.DragMotionSignalCallback): number
    once(sigName: "drag-motion", callback: Marker.DragMotionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "drag-motion", dy: number, event: Clutter.Event, ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Marker

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
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
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
 * The #ChamplainMarker structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Marker extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Marker

    static name: string

    // Constructors of Champlain-0.12.Champlain.Marker

    constructor(config?: Marker.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainMarker.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainMarker.
     * @constructor 
     */
    static new(): Marker
    _init(config?: Marker.ConstructorProperties): void
    /**
     * Gets the selection color.
     */
    static getSelectionColor(): Clutter.Color
    /**
     * Gets the selection text color.
     */
    static getSelectionTextColor(): Clutter.Color
    /**
     * Changes the selection color, this is to ensure a better integration with
     * the desktop, this is automatically done by GtkChamplainEmbed.
     * @param color a #ClutterColor
     */
    static setSelectionColor(color: Clutter.Color): void
    /**
     * Changes the selection text color, this is to ensure a better integration with
     * the desktop, this is automatically done by GtkChamplainEmbed.
     * @param color a #ClutterColor
     */
    static setSelectionTextColor(color: Clutter.Color): void
}

export module MarkerLayer {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Exportable.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.MarkerLayer

        /**
         * Determines the type of selection that will be performed.
         */
        selectionMode?: SelectionMode | null
    }

}

export interface MarkerLayer extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Determines the type of selection that will be performed.
     */
    selectionMode: SelectionMode

    // Own fields of Champlain-0.12.Champlain.MarkerLayer

    parent: Layer & Clutter.Actor
    priv: MarkerLayerPrivate

    // Owm methods of Champlain-0.12.Champlain.MarkerLayer

    /**
     * Adds the marker to the layer.
     * @param marker a #ChamplainMarker
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
    getSelectionMode(): SelectionMode
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
     * @param marker a #ChamplainMarker
     */
    removeMarker(marker: Marker): void
    /**
     * Selects all markers in the layer.
     */
    selectAllMarkers(): void
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
     * NOTE: changing selection mode to CHAMPLAIN_SELECTION_NONE or
     * CHAMPLAIN_SELECTION_SINGLE will clear all previously selected markers.
     * @param mode a #ChamplainSelectionMode value
     */
    setSelectionMode(mode: SelectionMode): void
    /**
     * Shows all markers in the layer
     */
    showAllMarkers(): void
    /**
     * Unselects all markers in the layer.
     */
    unselectAllMarkers(): void

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

    // Class property signals of Champlain-0.12.Champlain.MarkerLayer

    connect(sigName: "notify::selection-mode", callback: any): number
    on(sigName: "notify::selection-mode", callback: any): number
    once(sigName: "notify::selection-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selection-mode", ...args: any[]): void
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
    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainMarkerLayer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class MarkerLayer extends Layer {

    // Own properties of Champlain-0.12.Champlain.MarkerLayer

    static name: string

    // Constructors of Champlain-0.12.Champlain.MarkerLayer

    constructor(config?: MarkerLayer.ConstructorProperties) 
    /**
     * Creates a new instance of #ChamplainMarkerLayer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainMarkerLayer.
     * @constructor 
     */
    static new(): MarkerLayer

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    /**
     * Creates a new instance of #ChamplainMarkerLayer with the specified selection mode.
     * @constructor 
     * @param mode Selection mode
     */
    static newFull(mode: SelectionMode): MarkerLayer
    _init(config?: MarkerLayer.ConstructorProperties): void
}

export module MemoryCache {

    // Constructor properties interface

    export interface ConstructorProperties extends TileCache.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.MemoryCache

        /**
         * The maximum number of tiles that are stored in the cache.
         */
        sizeLimit?: number | null
    }

}

export interface MemoryCache {

    // Own properties of Champlain-0.12.Champlain.MemoryCache

    /**
     * The maximum number of tiles that are stored in the cache.
     */
    sizeLimit: number

    // Own fields of Champlain-0.12.Champlain.MemoryCache

    parentInstance: any
    priv: any

    // Owm methods of Champlain-0.12.Champlain.MemoryCache

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

    // Class property signals of Champlain-0.12.Champlain.MemoryCache

    connect(sigName: "notify::size-limit", callback: any): number
    on(sigName: "notify::size-limit", callback: any): number
    once(sigName: "notify::size-limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size-limit", ...args: any[]): void
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainMemoryCache structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class MemoryCache extends TileCache {

    // Own properties of Champlain-0.12.Champlain.MemoryCache

    static name: string

    // Constructors of Champlain-0.12.Champlain.MemoryCache

    constructor(config?: MemoryCache.ConstructorProperties) 
    /**
     * Constructor of #ChamplainMemoryCache.
     * @constructor 
     * @param sizeLimit maximum number of tiles stored in the cache
     * @param renderer the #ChamplainRenderer used for tiles rendering
     */
    static newFull(sizeLimit: number, renderer: Renderer): MemoryCache
    _init(config?: MemoryCache.ConstructorProperties): void
}

export module NetworkBboxTileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends TileSource.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.NetworkBboxTileSource

        /**
         * The URI of an OpenStreetMap API server
         */
        apiUri?: string | null
        /**
         * Used to override the default proxy for accessing the network.
         */
        proxyUri?: string | null
        /**
         * The map source's state. Useful to know if the data source is loading
         * or not.
         */
        state?: State | null
        /**
         * The HTTP user agent used for requests
         */
        userAgent?: string | null
    }

}

export interface NetworkBboxTileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * The URI of an OpenStreetMap API server
     */
    apiUri: string
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxyUri: string
    /**
     * The map source's state. Useful to know if the data source is loading
     * or not.
     */
    state: State
    /**
     * The HTTP user agent used for requests
     */
    userAgent: string

    // Conflicting properties

    parentInstance: any

    // Own fields of Champlain-0.12.Champlain.NetworkBboxTileSource

    parent: TileSource
    priv: any

    // Owm methods of Champlain-0.12.Champlain.NetworkBboxTileSource

    /**
     * Gets the URI of the API server.
     */
    getApiUri(): string
    /**
     * Asynchronously loads map data within a bounding box from the server.
     * The box must not exceed an edge size of 0.25 degree. There are also
     * limitations on the maximum number of nodes that can be requested.
     * 
     * For details, see: <ulink role="online-location"
     * url="https://api.openstreetmap.org/api/capabilities">
     * https://api.openstreetmap.org/api/capabilities</ulink>
     * @param bbox bounding box of the requested area
     */
    loadMapData(bbox: BoundingBox): void
    /**
     * Sets the URI of the API server.
     * @param apiUri an URI of an API server
     */
    setApiUri(apiUri: string): void
    /**
     * Sets the User-Agent header used communicating with the server.
     * @param userAgent A User-Agent string
     */
    setUserAgent(userAgent: string): void

    // Class property signals of Champlain-0.12.Champlain.NetworkBboxTileSource

    connect(sigName: "notify::api-uri", callback: any): number
    on(sigName: "notify::api-uri", callback: any): number
    once(sigName: "notify::api-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::api-uri", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: any): number
    on(sigName: "notify::proxy-uri", callback: any): number
    once(sigName: "notify::proxy-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
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
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainNetworkBboxTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class NetworkBboxTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSource

    static name: string

    // Constructors of Champlain-0.12.Champlain.NetworkBboxTileSource

    constructor(config?: NetworkBboxTileSource.ConstructorProperties) 
    /**
     * Constructor of #ChamplainNetworkBboxTileSource.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, renderer: Renderer): NetworkBboxTileSource
    _init(config?: NetworkBboxTileSource.ConstructorProperties): void
}

export module NetworkTileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends TileSource.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.NetworkTileSource

        /**
         * Specifies the max number of allowed simultaneous connections for this tile
         * source.
         * 
         * Before changing this remember to verify how many simultaneous connections
         * your tile provider allows you to make.
         */
        maxConns?: number | null
        /**
         * Specifies whether the network tile source can access network
         */
        offline?: boolean | null
        /**
         * Used to override the default proxy for accessing the network.
         */
        proxyUri?: string | null
        /**
         * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
         */
        uriFormat?: string | null
        /**
         * The HTTP user agent used for requests
         */
        userAgent?: string | null
    }

}

export interface NetworkTileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSource

    /**
     * Specifies the max number of allowed simultaneous connections for this tile
     * source.
     * 
     * Before changing this remember to verify how many simultaneous connections
     * your tile provider allows you to make.
     */
    maxConns: number
    /**
     * Specifies whether the network tile source can access network
     */
    offline: boolean
    /**
     * Used to override the default proxy for accessing the network.
     */
    proxyUri: string
    /**
     * The uri format of the tile source, see #champlain_network_tile_source_set_uri_format
     */
    uriFormat: string
    /**
     * The HTTP user agent used for requests
     */
    userAgent: string

    // Own fields of Champlain-0.12.Champlain.NetworkTileSource

    parentInstance: any
    priv: any

    // Owm methods of Champlain-0.12.Champlain.NetworkTileSource

    /**
     * Gets the max number of allowed simultaneous connections for this tile
     * source.
     */
    getMaxConns(): number
    /**
     * Gets offline status.
     */
    getOffline(): boolean
    /**
     * Gets the proxy uri used to access network.
     */
    getProxyUri(): string
    /**
     * Default constructor of #ChamplainNetworkTileSource.
     */
    getUriFormat(): string
    /**
     * Sets the max number of allowed simultaneous connections for this tile source.
     * 
     * Before changing this remember to verify how many simultaneous connections
     * your tile provider allows you to make.
     * @param maxConns the number of allowed simultaneous connections
     */
    setMaxConns(maxConns: number): void
    /**
     * Sets offline status.
     * @param offline TRUE when the tile source should be offline; FALSE otherwise
     */
    setOffline(offline: boolean): void
    /**
     * Override the default proxy for accessing the network.
     * @param proxyUri the proxy uri used to access network
     */
    setProxyUri(proxyUri: string): void
    /**
     * A URI format is a URI where x, y and zoom level information have been
     * marked for parsing and insertion.  There can be an unlimited number of
     * marked items in a URI format.  They are delimited by "#" before and after
     * the variable name. There are 4 defined variable names: X, Y, Z, and TMSY for
     * Y in TMS coordinates.
     * 
     * For example, this is the OpenStreetMap URI format:
     * "https://tile.openstreetmap.org/\#Z\#/\#X\#/\#Y\#.png"
     * @param uriFormat the URI format
     */
    setUriFormat(uriFormat: string): void
    /**
     * Sets the User-Agent header used communicating with the server.
     * @param userAgent A User-Agent string
     */
    setUserAgent(userAgent: string): void

    // Class property signals of Champlain-0.12.Champlain.NetworkTileSource

    connect(sigName: "notify::max-conns", callback: any): number
    on(sigName: "notify::max-conns", callback: any): number
    once(sigName: "notify::max-conns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::offline", callback: any): number
    on(sigName: "notify::offline", callback: any): number
    once(sigName: "notify::offline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::offline", ...args: any[]): void
    connect(sigName: "notify::proxy-uri", callback: any): number
    on(sigName: "notify::proxy-uri", callback: any): number
    once(sigName: "notify::proxy-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-uri", ...args: any[]): void
    connect(sigName: "notify::uri-format", callback: any): number
    on(sigName: "notify::uri-format", callback: any): number
    once(sigName: "notify::uri-format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri-format", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
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
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainNetworkTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class NetworkTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSource

    static name: string

    // Constructors of Champlain-0.12.Champlain.NetworkTileSource

    constructor(config?: NetworkTileSource.ConstructorProperties) 
    /**
     * Constructor of #ChamplainNetworkTileSource.
     * @constructor 
     * @param id the map source's id
     * @param name the map source's name
     * @param license the map source's license
     * @param licenseUri the map source's license URI
     * @param minZoom the map source's minimum zoom level
     * @param maxZoom the map source's maximum zoom level
     * @param tileSize the map source's tile size (in pixels)
     * @param projection the map source's projection
     * @param uriFormat the URI to fetch the tiles from, see #champlain_network_tile_source_set_uri_format
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(id: string, name: string, license: string, licenseUri: string, minZoom: number, maxZoom: number, tileSize: number, projection: MapProjection, uriFormat: string, renderer: Renderer): NetworkTileSource
    _init(config?: NetworkTileSource.ConstructorProperties): void
}

export module NullTileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends TileSource.ConstructorProperties {
    }

}

export interface NullTileSource {

    // Conflicting properties

    parentInstance: any
    priv: any & MapSourcePrivate

    // Own fields of Champlain-0.12.Champlain.NullTileSource

    parent: TileSource

    // Class property signals of Champlain-0.12.Champlain.NullTileSource

    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
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
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainNullTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class NullTileSource extends TileSource {

    // Own properties of Champlain-0.12.Champlain.NullTileSource

    static name: string

    // Constructors of Champlain-0.12.Champlain.NullTileSource

    constructor(config?: NullTileSource.ConstructorProperties) 
    /**
     * Constructor of #ChamplainNullTileSource.
     * @constructor 
     * @param renderer the #ChamplainRenderer used to render tiles
     */
    static newFull(renderer: Renderer): NullTileSource
    _init(config?: NullTileSource.ConstructorProperties): void
}

export module PathLayer {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Exportable.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Layer.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.PathLayer

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
        fillColor?: Clutter.Color | null
        /**
         * The shape should be stroked
         */
        stroke?: boolean | null
        /**
         * The path's stroke color
         */
        strokeColor?: Clutter.Color | null
        /**
         * The path's stroke width (in pixels)
         */
        strokeWidth?: number | null
        /**
         * Wether the path is visible
         */
        visible?: boolean | null
    }

}

export interface PathLayer extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.PathLayer

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
    fillColor: Clutter.Color
    /**
     * The shape should be stroked
     */
    stroke: boolean
    /**
     * The path's stroke color
     */
    strokeColor: Clutter.Color
    /**
     * The path's stroke width (in pixels)
     */
    strokeWidth: number
    /**
     * Wether the path is visible
     */
    visible: boolean

    // Own fields of Champlain-0.12.Champlain.PathLayer

    parent: Layer & Clutter.Actor
    priv: PathLayerPrivate

    // Owm methods of Champlain-0.12.Champlain.PathLayer

    /**
     * Adds a #ChamplainLocation object to the layer.
     * The node is prepended to the list.
     * @param location a #ChamplainLocation
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
    getFillColor(): Clutter.Color
    /**
     * Gets a copy of the list of all #ChamplainLocation objects inserted into the layer. You should
     * free the list but not its contents.
     */
    getNodes(): Location[]
    /**
     * Checks whether the path is stroked.
     */
    getStroke(): boolean
    /**
     * Gets the path's stroke color.
     */
    getStrokeColor(): Clutter.Color
    /**
     * Gets the width of the stroke.
     */
    getStrokeWidth(): number
    /**
     * Gets path visibility.
     */
    getVisible(): boolean
    /**
     * Inserts a #ChamplainLocation object to the specified position.
     * @param location a #ChamplainLocation
     * @param position position in the list where the #ChamplainLocation object should be inserted
     */
    insertNode(location: Location, position: number): void
    /**
     * Removes all #ChamplainLocation objects from the layer.
     */
    removeAll(): void
    /**
     * Removes the #ChamplainLocation object from the layer.
     * @param location a #ChamplainLocation
     */
    removeNode(location: Location): void
    /**
     * Makes the path closed.
     * @param value TRUE to make the path closed
     */
    setClosed(value: boolean): void
    /**
     * Sets dashed line pattern in a way similar to cairo_set_dash() of cairo. This
     * method supports only integer values for segment lengths. The values have to be
     * passed inside the data pointer of the list (using the GUINT_TO_POINTER conversion)
     * 
     * Pass NULL to use solid line.
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
     * @param color The path's fill color or NULL to reset to the         default color. The color parameter is copied.
     */
    setFillColor(color: Clutter.Color | null): void
    /**
     * Sets the path to be stroked
     * @param value if the path is stroked
     */
    setStroke(value: boolean): void
    /**
     * Set the path's stroke color.
     * @param color The path's stroke color or NULL to reset to the         default color. The color parameter is copied.
     */
    setStrokeColor(color: Clutter.Color | null): void
    /**
     * Sets the width of the stroke
     * @param value the width of the stroke (in pixels)
     */
    setStrokeWidth(value: number): void
    /**
     * Sets path visibility.
     * @param value TRUE to make the path visible
     */
    setVisible(value: boolean): void

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

    // Class property signals of Champlain-0.12.Champlain.PathLayer

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
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
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
    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainPathLayer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class PathLayer extends Layer {

    // Own properties of Champlain-0.12.Champlain.PathLayer

    static name: string

    // Constructors of Champlain-0.12.Champlain.PathLayer

    constructor(config?: PathLayer.ConstructorProperties) 
    /**
     * Creates a new instance of #ChamplainPathLayer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of #ChamplainPathLayer.
     * @constructor 
     */
    static new(): PathLayer

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    _init(config?: PathLayer.ConstructorProperties): void
}

export module Point {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Exportable.ConstructorProperties, Location.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Marker.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Point

        color?: Clutter.Color | null
        size: any
    }

}

export interface Point extends Atk.ImplementorIface, Exportable, Location, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Point

    color: Clutter.Color
    size: any

    // Own fields of Champlain-0.12.Champlain.Point

    parent: Marker & Clutter.Actor
    priv: any

    // Owm methods of Champlain-0.12.Champlain.Point

    /**
     * Gets the color of the point.
     */
    getColor(): Clutter.Color
    /**
     * Gets the size of the point.
     */
    getSize(): number

    // Overloads of getSize

    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    getSize(): [ /* width */ number, /* height */ number ]
    /**
     * Set the color of the point.
     * @param color The color of the point or NULL to reset the background to the         default color. The color parameter is copied.
     */
    setColor(color: Clutter.Color | null): void
    /**
     * Set the size of the point.
     * @param size The size of the point.
     */
    setSize(size: number): void

    // Overloads of setSize

    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     * @param width New width of actor in pixels, or -1
     * @param height New height of actor in pixels, or -1
     */
    setSize(width: number, height: number): void

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

    // Class property signals of Champlain-0.12.Champlain.Point

    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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
    connect(sigName: "notify::selected", callback: any): number
    on(sigName: "notify::selected", callback: any): number
    once(sigName: "notify::selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selected", ...args: any[]): void
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
    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
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
 * The #ChamplainPoint structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Point extends Marker {

    // Own properties of Champlain-0.12.Champlain.Point

    static name: string

    // Constructors of Champlain-0.12.Champlain.Point

    constructor(config?: Point.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainPoint with default size and color.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainPoint with default size and color.
     * @constructor 
     */
    static new(): Point
    /**
     * Creates an instance of #ChamplainPoint with the specified size and color.
     * @constructor 
     * @param size Marker size
     * @param color Marker color
     */
    static newFull(size: number, color: Clutter.Color): Point
    _init(config?: Point.ConstructorProperties): void
}

export module Renderer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface Renderer {

    // Own fields of Champlain-0.12.Champlain.Renderer

    parent: GObject.InitiallyUnowned

    // Owm methods of Champlain-0.12.Champlain.Renderer

    // Has conflict: render(tile: Tile): void
    // Has conflict: setData(data: Uint8Array): void

    // Own virtual methods of Champlain-0.12.Champlain.Renderer

    /**
     * Renders the texture for the provided tile and calls champlain_tile_set_content()
     * to set the content of the tile. When the rendering is finished, the renderer
     * emits the #ChamplainTile::render-complete signal. The tile has to be displayed manually by
     * calling champlain_tile_display_content().
     * @virtual 
     * @param tile the tile to render
     */
    render(tile: Tile): void
    /**
     * Sets the data which is used to render tiles by the renderer.
     * @virtual 
     * @param data data used for tile rendering
     */
    setData(data: Uint8Array): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) — so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of Champlain-0.12.Champlain.Renderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainRenderer structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Renderer extends GObject.InitiallyUnowned {

    // Own properties of Champlain-0.12.Champlain.Renderer

    static name: string

    // Constructors of Champlain-0.12.Champlain.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
}

export module Scale {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Scale

        /**
         * The size of the map scale on screen in pixels.
         */
        maxWidth?: number | null
        /**
         * The scale's units.
         */
        unit?: Unit | null
    }

}

export interface Scale extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Scale

    /**
     * The size of the map scale on screen in pixels.
     */
    maxWidth: number
    /**
     * The scale's units.
     */
    unit: Unit

    // Own fields of Champlain-0.12.Champlain.Scale

    parent: Clutter.Actor
    priv: ScalePrivate

    // Owm methods of Champlain-0.12.Champlain.Scale

    /**
     * This method connects to the necessary signals of #ChamplainView to make the
     * scale adapt to the current latitude and longitude.
     * @param view a #ChamplainView
     */
    connectView(view: View): void
    /**
     * This method disconnects from the signals previously connected by champlain_scale_connect_view().
     */
    disconnectView(): void
    /**
     * Gets the maximum scale width.
     */
    getMaxWidth(): number
    /**
     * Gets the unit used by the scale.
     */
    getUnit(): Unit
    /**
     * Sets the maximum width of the scale on the screen in pixels
     * @param value the number of pixels
     */
    setMaxWidth(value: number): void
    /**
     * Sets the scale unit.
     * @param unit a #ChamplainUnit
     */
    setUnit(unit: Unit): void

    // Conflicting methods

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

    // Class property signals of Champlain-0.12.Champlain.Scale

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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainScale structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Scale extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Scale

    static name: string

    // Constructors of Champlain-0.12.Champlain.Scale

    constructor(config?: Scale.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainScale.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainScale.
     * @constructor 
     */
    static new(): Scale
    _init(config?: Scale.ConstructorProperties): void
}

export module Tile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `render-complete`
     */
    export interface RenderCompleteSignalCallback {
        (data: object | null, size: number, error: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Exportable.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Tile

        /**
         * The #ClutterActor with the specific image content.  When changing this
         * property, the new actor will be faded in.
         */
        content: any
        /**
         * The tile's ETag. This information is sent by some web servers as a mean
         * to identify if a tile has changed.  This information is saved in the cache
         * and sent in GET queries.
         */
        etag?: string | null
        /**
         * Specifies whether the tile should fade in when loading
         */
        fadeIn?: boolean | null
        /**
         * The size of the tile in pixels
         */
        size: any
        /**
         * The state of the tile
         */
        state?: State | null
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

export interface Tile extends Atk.ImplementorIface, Exportable, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Tile

    /**
     * The #ClutterActor with the specific image content.  When changing this
     * property, the new actor will be faded in.
     */
    content: any
    /**
     * The tile's ETag. This information is sent by some web servers as a mean
     * to identify if a tile has changed.  This information is saved in the cache
     * and sent in GET queries.
     */
    etag: string
    /**
     * Specifies whether the tile should fade in when loading
     */
    fadeIn: boolean
    /**
     * The size of the tile in pixels
     */
    size: any
    /**
     * The state of the tile
     */
    state: State
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

    // Own fields of Champlain-0.12.Champlain.Tile

    parent: Clutter.Actor
    priv: TilePrivate

    // Owm methods of Champlain-0.12.Champlain.Tile

    /**
     * Displays the tile's content.
     */
    displayContent(): void
    /**
     * Gets the tile's content actor.
     */
    getContent(): Clutter.Actor

    // Overloads of getContent

    /**
     * Retrieves the contents of `self`.
     */
    getContent(): Clutter.Content
    /**
     * Gets the tile's ETag.
     */
    getEtag(): string
    /**
     * Checks whether the tile should fade in.
     */
    getFadeIn(): boolean
    /**
     * Gets the tile's last modified time.
     */
    getModifiedTime(): GLib.TimeVal
    /**
     * Gets the tile's size.
     */
    getSize(): number

    // Overloads of getSize

    /**
     * This function tries to "do what you mean" and return
     * the size an actor will have. If the actor has a valid
     * allocation, the allocation will be returned; otherwise,
     * the actors natural size request will be returned.
     * 
     * If you care whether you get the request vs. the allocation, you
     * should probably call a different function like
     * clutter_actor_get_allocation_box() or
     * clutter_actor_get_preferred_width().
     */
    getSize(): [ /* width */ number, /* height */ number ]
    /**
     * Gets the current state of tile loading.
     */
    getState(): State
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
    /**
     * Sets the tile's content. To also disppay the tile, you have to call
     * champlain_tile_display_content() in addition.
     * @param actor the new content
     */
    setContent(actor: Clutter.Actor): void

    // Overloads of setContent

    /**
     * Sets the contents of a #ClutterActor.
     * @param content a #ClutterContent, or %NULL
     */
    setContent(content: Clutter.Content | null): void
    /**
     * Sets the tile's ETag
     * @param etag the tile's ETag as sent by the server
     */
    setEtag(etag: string): void
    /**
     * Sets the flag determining whether the tile should fade in when loading
     * @param fadeIn determines whether the tile should fade in when loading
     */
    setFadeIn(fadeIn: boolean): void
    /**
     * Sets the tile's modified time
     * @param time a #GTimeVal, the value will be copied
     */
    setModifiedTime(time: GLib.TimeVal): void
    /**
     * Sets the tile's size
     * @param size the size in pixels
     */
    setSize(size: number): void

    // Overloads of setSize

    /**
     * Sets the actor's size request in pixels. This overrides any
     * "normal" size request the actor would have. For example
     * a text actor might normally request the size of the text;
     * this function would force a specific size instead.
     * 
     * If `width` and/or `height` are -1 the actor will use its
     * "normal" size request instead of overriding it, i.e.
     * you can "unset" the size with -1.
     * 
     * This function sets or unsets both the minimum and natural size.
     * @param width New width of actor in pixels, or -1
     * @param height New height of actor in pixels, or -1
     */
    setSize(width: number, height: number): void
    /**
     * Sets the tile's #ChamplainState
     * @param state a #ChamplainState
     */
    setState(state: State): void
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

    // Conflicting methods

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

    // Own signals of Champlain-0.12.Champlain.Tile

    connect(sigName: "render-complete", callback: Tile.RenderCompleteSignalCallback): number
    on(sigName: "render-complete", callback: Tile.RenderCompleteSignalCallback): number
    once(sigName: "render-complete", callback: Tile.RenderCompleteSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "render-complete", size: number, error: boolean, ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Tile

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
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
    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainTile structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class Tile extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Tile

    static name: string

    // Constructors of Champlain-0.12.Champlain.Tile

    constructor(config?: Tile.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainTile.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainTile.
     * @constructor 
     */
    static new(): Tile

    // Overloads of new

    /**
     * Creates a new #ClutterActor.
     * 
     * A newly created actor has a floating reference, which will be sunk
     * when it is added to another actor.
     * @constructor 
     */
    static new(): Clutter.Actor
    /**
     * Creates an instance of #ChamplainTile.
     * @constructor 
     * @param x the x position
     * @param y the y position
     * @param size the size in pixels
     * @param zoomLevel the zoom level
     */
    static newFull(x: number, y: number, size: number, zoomLevel: number): Tile
    _init(config?: Tile.ConstructorProperties): void
}

export module TileCache {

    // Constructor properties interface

    export interface ConstructorProperties extends MapSource.ConstructorProperties {
    }

}

export interface TileCache {

    // Own fields of Champlain-0.12.Champlain.TileCache

    parentInstance: any
    priv: any

    // Owm methods of Champlain-0.12.Champlain.TileCache

    // Has conflict: onTileFilled(tile: Tile): void
    // Has conflict: refreshTileTime(tile: Tile): void
    // Has conflict: storeTile(tile: Tile, contents: string, size: number): void

    // Own virtual methods of Champlain-0.12.Champlain.TileCache

    /**
     * When a cache fills a tile and the next source in the chain is a tile cache,
     * it should call this function on the next source. This way all the caches
     * preceding a tile source in the chain get informed that the tile was used and
     * can modify their metadata accordingly in the implementation of this function.
     * In addition, the call of this function should be chained so within the
     * implementation of this function it should be called on the next source
     * in the chain when next source is a tile cache.
     * @virtual 
     * @param tile a #ChamplainTile
     */
    onTileFilled(tile: Tile): void
    /**
     * Refreshes the tile access time in the cache.
     * @virtual 
     * @param tile a #ChamplainTile
     */
    refreshTileTime(tile: Tile): void
    /**
     * Stores the tile including the metadata into the cache.
     * @virtual 
     * @param tile a #ChamplainTile
     * @param contents the tile contents that should be stored
     * @param size size of the contents in bytes
     */
    storeTile(tile: Tile, contents: string, size: number): void

    // Class property signals of Champlain-0.12.Champlain.TileCache

    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainTileCache structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class TileCache extends MapSource {

    // Own properties of Champlain-0.12.Champlain.TileCache

    static name: string

    // Constructors of Champlain-0.12.Champlain.TileCache

    constructor(config?: TileCache.ConstructorProperties) 
    _init(config?: TileCache.ConstructorProperties): void
}

export module TileSource {

    // Constructor properties interface

    export interface ConstructorProperties extends MapSource.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.TileSource

        /**
         * The cache used for tile storage
         */
        cache?: TileCache | null
        /**
         * The id of the tile source
         */
        id?: string | null
        /**
         * The usage license of the tile source
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
         * The name of the tile source
         */
        name?: string | null
        /**
         * The map projection of the tile source
         */
        projection?: MapProjection | null
        /**
         * The tile size of the tile source
         */
        tileSize?: number | null
    }

}

export interface TileSource {

    // Own properties of Champlain-0.12.Champlain.TileSource

    /**
     * The cache used for tile storage
     */
    cache: TileCache
    /**
     * The id of the tile source
     */
    id: string
    /**
     * The usage license of the tile source
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
     * The name of the tile source
     */
    name: string
    /**
     * The map projection of the tile source
     */
    projection: MapProjection
    /**
     * The tile size of the tile source
     */
    tileSize: number

    // Own fields of Champlain-0.12.Champlain.TileSource

    parentInstance: any
    priv: any

    // Owm methods of Champlain-0.12.Champlain.TileSource

    /**
     * Gets the cache used for storing tiles by this tile source.
     */
    getCache(): TileCache
    /**
     * Sets the map source's cache used for storing tiles.
     * @param cache a #ChamplainTileCache
     */
    setCache(cache: TileCache): void
    /**
     * Sets the tile source's id.
     * @param id an id
     */
    setId(id: string): void
    /**
     * Sets the tile source's license.
     * @param license the licence
     */
    setLicense(license: string): void
    /**
     * Sets the tile source's license URI.
     * @param licenseUri the licence URI
     */
    setLicenseUri(licenseUri: string): void
    /**
     * Sets the tile source's maximum zoom level.
     * @param zoomLevel the maximum zoom level
     */
    setMaxZoomLevel(zoomLevel: number): void
    /**
     * Sets the tile source's minimal zoom level.
     * @param zoomLevel the minimal zoom level
     */
    setMinZoomLevel(zoomLevel: number): void
    /**
     * Sets the tile source's name.
     * @param name a name
     */
    setName(name: string): void
    /**
     * Sets the tile source's projection.
     * @param projection a #ChamplainMapProjection
     */
    setProjection(projection: MapProjection): void
    /**
     * Sets the tile source's tile size.
     * @param tileSize the tile size
     */
    setTileSize(tileSize: number): void

    // Class property signals of Champlain-0.12.Champlain.TileSource

    connect(sigName: "notify::cache", callback: any): number
    on(sigName: "notify::cache", callback: any): number
    once(sigName: "notify::cache", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache", ...args: any[]): void
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
    connect(sigName: "notify::next-source", callback: any): number
    on(sigName: "notify::next-source", callback: any): number
    once(sigName: "notify::next-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-source", ...args: any[]): void
    connect(sigName: "notify::renderer", callback: any): number
    on(sigName: "notify::renderer", callback: any): number
    once(sigName: "notify::renderer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::renderer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainTileSource structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class TileSource extends MapSource {

    // Own properties of Champlain-0.12.Champlain.TileSource

    static name: string

    // Constructors of Champlain-0.12.Champlain.TileSource

    constructor(config?: TileSource.ConstructorProperties) 
    _init(config?: TileSource.ConstructorProperties): void
}

export module View {

    // Signal callback interfaces

    /**
     * Signal callback interface for `animation-completed`
     */
    export interface AnimationCompletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `layer-relocated`
     */
    export interface LayerRelocatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.View

        /**
         * Animate zoom change when zooming in/out.
         */
        animateZoom?: boolean | null
        /**
         * The pattern displayed in the background of the map.
         */
        backgroundPattern?: Clutter.Actor | null
        /**
         * The deceleration rate for the kinetic mode. The default value is 1.1.
         */
        deceleration?: number | null
        /**
         * The duration of an animation when going to a location.
         * A value of 0 means that the duration is calculated automatically for you.
         * 
         * Please note that animation of #champlain_view_ensure_visible also
         * involves a 'goto' animation.
         */
        gotoAnimationDuration?: number | null
        /**
         * The mode of animation when going to a location.
         * 
         * Please note that animation of #champlain_view_ensure_visible also
         * involves a 'goto' animation.
         */
        gotoAnimationMode?: Clutter.AnimationMode | null
        /**
         * Determines whether the view should wrap horizontally.
         */
        horizontalWrap?: boolean | null
        /**
         * Keep the current centered position when resizing the view.
         */
        keepCenterOnResize?: boolean | null
        /**
         * Determines whether the view should use kinetic mode.
         */
        kineticMode?: boolean | null
        /**
         * The latitude coordonate of the map
         */
        latitude?: number | null
        /**
         * The longitude coordonate of the map
         */
        longitude?: number | null
        /**
         * The #ChamplainMapSource being displayed
         */
        mapSource?: MapSource | null
        /**
         * The highest allowed level of zoom of the content.
         */
        maxZoomLevel?: number | null
        /**
         * The lowest allowed level of zoom of the content.
         */
        minZoomLevel?: number | null
        /**
         * Set a bounding box to limit the world to. No tiles will be loaded
         * outside of this bounding box. It will not be possible to scroll outside
         * of this bounding box.
         * 
         * Default world is the actual world.
         */
        world?: BoundingBox | null
        /**
         * The level of zoom of the content.
         */
        zoomLevel?: number | null
        /**
         * Should the view zoom in and recenter when the user double click on the map.
         */
        zoomOnDoubleClick?: boolean | null
    }

}

export interface View extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.View

    /**
     * Animate zoom change when zooming in/out.
     */
    animateZoom: boolean
    /**
     * The pattern displayed in the background of the map.
     */
    backgroundPattern: Clutter.Actor
    /**
     * The deceleration rate for the kinetic mode. The default value is 1.1.
     */
    deceleration: number
    /**
     * The duration of an animation when going to a location.
     * A value of 0 means that the duration is calculated automatically for you.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    gotoAnimationDuration: number
    /**
     * The mode of animation when going to a location.
     * 
     * Please note that animation of #champlain_view_ensure_visible also
     * involves a 'goto' animation.
     */
    gotoAnimationMode: Clutter.AnimationMode
    /**
     * Determines whether the view should wrap horizontally.
     */
    horizontalWrap: boolean
    /**
     * Keep the current centered position when resizing the view.
     */
    keepCenterOnResize: boolean
    /**
     * Determines whether the view should use kinetic mode.
     */
    kineticMode: boolean
    /**
     * The latitude coordonate of the map
     */
    latitude: number
    /**
     * The longitude coordonate of the map
     */
    longitude: number
    /**
     * The #ChamplainMapSource being displayed
     */
    mapSource: MapSource
    /**
     * The highest allowed level of zoom of the content.
     */
    maxZoomLevel: number
    /**
     * The lowest allowed level of zoom of the content.
     */
    minZoomLevel: number
    /**
     * The view's global state. Useful to inform using if the view is busy loading
     * tiles or not.
     */
    readonly state: State
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     * 
     * Default world is the actual world.
     */
    world: BoundingBox
    /**
     * The level of zoom of the content.
     */
    zoomLevel: number
    /**
     * Should the view zoom in and recenter when the user double click on the map.
     */
    zoomOnDoubleClick: boolean

    // Own fields of Champlain-0.12.Champlain.View

    parent: Clutter.Actor
    priv: ViewPrivate

    // Owm methods of Champlain-0.12.Champlain.View

    /**
     * Adds a new layer to the view
     * @param layer a #ChamplainLayer
     */
    addLayer(layer: Layer): void
    /**
     * Adds a new overlay map source to render tiles with the supplied opacity on top
     * of the ordinary map source. Multiple overlay sources can be added.
     * @param mapSource a #ChamplainMapSource
     * @param opacity opacity to use
     */
    addOverlaySource(mapSource: MapSource, opacity: number): void
    /**
     * This function inserts a custom actor to the undrelying #ClutterBinLayout
     * manager. The inserted actors appear on top of the map. See clutter_bin_layout_add()
     * for reference.
     * @param child The child to be inserted
     * @param xAlign x alignment
     * @param yAlign y alignment
     */
    binLayoutAdd(child: Clutter.Actor, xAlign: Clutter.BinAlignment, yAlign: Clutter.BinAlignment): void
    /**
     * Centers the map on these coordinates.
     * @param latitude the longitude to center the map at
     * @param longitude the longitude to center the map at
     */
    centerOn(latitude: number, longitude: number): void
    /**
     * Changes the map's zoom level and center to make sure that the bounding
     * boxes of all inserted layers are visible.
     * @param animate TRUE to perform animation, FALSE otherwise
     */
    ensureLayersVisible(animate: boolean): void
    /**
     * Changes the map's zoom level and center to make sure the given area
     * is visible
     * @param bbox bounding box of the area that should be visible
     * @param animate TRUE to perform animation, FALSE otherwise
     */
    ensureVisible(bbox: BoundingBox, animate: boolean): void
    /**
     * Checks whether the view animates zoom level changes.
     */
    getAnimateZoom(): boolean
    /**
     * Gets the current background texture displayed behind the map.
     */
    getBackgroundPattern(): Clutter.Content
    /**
     * Gets the bounding box for view `view` at current zoom-level.
     */
    getBoundingBox(): BoundingBox
    /**
     * Gets the bounding box for view `view` at `zoom_level`.
     * @param zoomLevel the level of zoom, a guint between 1 and 20
     */
    getBoundingBoxForZoomLevel(zoomLevel: number): BoundingBox
    /**
     * Gets the latitude of the view's center.
     */
    getCenterLatitude(): number
    /**
     * Gets the longitude of the view's center.
     */
    getCenterLongitude(): number
    /**
     * Gets the view's deceleration rate.
     */
    getDeceleration(): number
    /**
     * Returns the value of the #ChamplainView:horizontal-wrap property.
     */
    getHorizontalWrap(): boolean
    /**
     * Checks whether to keep the center on resize
     */
    getKeepCenterOnResize(): boolean
    /**
     * Gets the view's scroll mode behaviour.
     */
    getKineticMode(): boolean
    /**
     * Returns the #ChamplainLicense actor which is inserted by default into the
     * layout manager. It can be manipulated using standard #ClutterActor methods
     * (hidden and so on).
     */
    getLicenseActor(): License
    /**
     * Gets the view's current map source.
     */
    getMapSource(): MapSource
    /**
     * Gets the view's maximum allowed zoom level.
     */
    getMaxZoomLevel(): number
    /**
     * Gets the view's minimal allowed zoom level.
     */
    getMinZoomLevel(): number
    /**
     * Gets a list of overlay sources.
     */
    getOverlaySources(): MapSource[]
    /**
     * Gets the view's state.
     */
    getState(): State
    /**
     * Gets the x and y coordinate of the viewport anchor in respect to the layer origin.
     */
    getViewportAnchor(): [ /* anchorX */ number, /* anchorY */ number ]
    /**
     * Gets the x and y coordinate of the viewport in respect to the layer origin.
     */
    getViewportOrigin(): [ /* x */ number, /* y */ number ]
    /**
     * Get the bounding box that represents the extent of the world.
     */
    getWorld(): BoundingBox
    /**
     * Gets the view's current zoom level.
     */
    getZoomLevel(): number
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
     * Converts the latitude to view's y coordinate.
     * @param latitude the latitude
     */
    latitudeToY(latitude: number): number
    /**
     * Converts the longitude to view's x coordinate.
     * @param longitude the longitude
     */
    longitudeToX(longitude: number): number
    /**
     * Reloads all visible tiles.
     */
    reloadTiles(): void
    /**
     * Removes the given layer from the view
     * @param layer a #ChamplainLayer
     */
    removeLayer(layer: Layer): void
    /**
     * Removes an overlay source from #ChamplainView.
     * @param mapSource a #ChamplainMapSource
     */
    removeOverlaySource(mapSource: MapSource): void
    /**
     * Should the view animate zoom level changes.
     * @param value a #gboolean
     */
    setAnimateZoom(value: boolean): void
    /**
     * Sets the background texture displayed behind the map. Setting the background
     * pattern affects performence slightly - use reasonably large patterns for
     * better performance.
     * @param background The background texture
     */
    setBackgroundPattern(background: Clutter.Content): void
    /**
     * The deceleration rate for the kinetic mode.
     * @param rate a #gdouble between 1.001 and 2.0
     */
    setDeceleration(rate: number): void
    /**
     * Sets the value of the #ChamplainView:horizontal-wrap property.
     * @param wrap %TRUE to enable horizontal wrapping
     */
    setHorizontalWrap(wrap: boolean): void
    /**
     * Keep the current centered position when resizing the view.
     * @param value a #gboolean
     */
    setKeepCenterOnResize(value: boolean): void
    /**
     * Determines the way the view reacts to scroll events.
     * @param kinetic TRUE for kinetic mode, FALSE for push mode
     */
    setKineticMode(kinetic: boolean): void
    /**
     * Changes the currently used map source. #g_object_unref() will be called on
     * the previous one.
     * 
     * As a side effect, changing the primary map source will also clear all
     * secondary map sources.
     * @param mapSource a #ChamplainMapSource
     */
    setMapSource(mapSource: MapSource): void
    /**
     * Changes the highest allowed level of zoom
     * @param zoomLevel the level of zoom
     */
    setMaxZoomLevel(zoomLevel: number): void
    /**
     * Changes the lowest allowed level of zoom
     * @param zoomLevel the level of zoom
     */
    setMinZoomLevel(zoomLevel: number): void
    /**
     * Set a bounding box to limit the world to. No tiles will be loaded
     * outside of this bounding box. It will not be possible to scroll outside
     * of this bounding box.
     * @param bbox the #ChamplainBoundingBox of the world
     */
    setWorld(bbox: BoundingBox): void
    /**
     * Changes the current level of zoom
     * @param zoomLevel the level of zoom, a guint between 1 and 20
     */
    setZoomLevel(zoomLevel: number): void
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
    /**
     * Will generate a #cairo_surface_t that represents the current view
     * of the map. Without any markers or layers. If the current #ChamplainRenderer
     * used does not support this, this function will return %NULL.
     * 
     * If `include_layers` is set to %TRUE all layers that implement
     * #ChamplainExportable will be included in the surface.
     * 
     * The #ChamplainView also need to be in #CHAMPLAIN_STATE_DONE state.
     * @param includeLayers Set to %TRUE if you want to include layers
     */
    toSurface(includeLayers: boolean): cairo.Surface
    /**
     * Converts the view's x coordinate to longitude.
     * @param x x coordinate of the view
     */
    xToLongitude(x: number): number
    /**
     * Converts the view's y coordinate to latitude.
     * @param y y coordinate of the view
     */
    yToLatitude(y: number): number
    /**
     * Zoom in the map by one level.
     */
    zoomIn(): void
    /**
     * Zoom out the map by one level.
     */
    zoomOut(): void

    // Conflicting methods

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

    // Own signals of Champlain-0.12.Champlain.View

    connect(sigName: "animation-completed", callback: View.AnimationCompletedSignalCallback): number
    on(sigName: "animation-completed", callback: View.AnimationCompletedSignalCallback): number
    once(sigName: "animation-completed", callback: View.AnimationCompletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "animation-completed", ...args: any[]): void
    connect(sigName: "layer-relocated", callback: View.LayerRelocatedSignalCallback): number
    on(sigName: "layer-relocated", callback: View.LayerRelocatedSignalCallback): number
    once(sigName: "layer-relocated", callback: View.LayerRelocatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "layer-relocated", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.View

    connect(sigName: "notify::animate-zoom", callback: any): number
    on(sigName: "notify::animate-zoom", callback: any): number
    once(sigName: "notify::animate-zoom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::animate-zoom", ...args: any[]): void
    connect(sigName: "notify::background-pattern", callback: any): number
    on(sigName: "notify::background-pattern", callback: any): number
    once(sigName: "notify::background-pattern", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::background-pattern", ...args: any[]): void
    connect(sigName: "notify::deceleration", callback: any): number
    on(sigName: "notify::deceleration", callback: any): number
    once(sigName: "notify::deceleration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deceleration", ...args: any[]): void
    connect(sigName: "notify::goto-animation-duration", callback: any): number
    on(sigName: "notify::goto-animation-duration", callback: any): number
    once(sigName: "notify::goto-animation-duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::goto-animation-duration", ...args: any[]): void
    connect(sigName: "notify::goto-animation-mode", callback: any): number
    on(sigName: "notify::goto-animation-mode", callback: any): number
    once(sigName: "notify::goto-animation-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::goto-animation-mode", ...args: any[]): void
    connect(sigName: "notify::horizontal-wrap", callback: any): number
    on(sigName: "notify::horizontal-wrap", callback: any): number
    once(sigName: "notify::horizontal-wrap", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::horizontal-wrap", ...args: any[]): void
    connect(sigName: "notify::keep-center-on-resize", callback: any): number
    on(sigName: "notify::keep-center-on-resize", callback: any): number
    once(sigName: "notify::keep-center-on-resize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keep-center-on-resize", ...args: any[]): void
    connect(sigName: "notify::kinetic-mode", callback: any): number
    on(sigName: "notify::kinetic-mode", callback: any): number
    once(sigName: "notify::kinetic-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kinetic-mode", ...args: any[]): void
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
    connect(sigName: "notify::map-source", callback: any): number
    on(sigName: "notify::map-source", callback: any): number
    once(sigName: "notify::map-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::map-source", ...args: any[]): void
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
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::world", callback: any): number
    on(sigName: "notify::world", callback: any): number
    once(sigName: "notify::world", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::world", ...args: any[]): void
    connect(sigName: "notify::zoom-level", callback: any): number
    on(sigName: "notify::zoom-level", callback: any): number
    once(sigName: "notify::zoom-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-level", ...args: any[]): void
    connect(sigName: "notify::zoom-on-double-click", callback: any): number
    on(sigName: "notify::zoom-on-double-click", callback: any): number
    once(sigName: "notify::zoom-on-double-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zoom-on-double-click", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #ChamplainView structure contains only private data
 * and should be accessed using the provided API
 * @class 
 */
export class View extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.View

    static name: string

    // Constructors of Champlain-0.12.Champlain.View

    constructor(config?: View.ConstructorProperties) 
    /**
     * Creates an instance of #ChamplainView.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an instance of #ChamplainView.
     * @constructor 
     */
    static new(): View
    _init(config?: View.ConstructorProperties): void
}

export module Viewport {

    // Signal callback interfaces

    /**
     * Signal callback interface for `relocated`
     */
    export interface RelocatedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Clutter.Animatable.ConstructorProperties, Clutter.Container.ConstructorProperties, Clutter.Scriptable.ConstructorProperties, Clutter.Actor.ConstructorProperties {

        // Own constructor properties of Champlain-0.12.Champlain.Viewport

        hadjustment?: Adjustment | null
        vadjustment?: Adjustment | null
        xOrigin?: number | null
        yOrigin?: number | null
    }

}

export interface Viewport extends Atk.ImplementorIface, Clutter.Animatable, Clutter.Container, Clutter.Scriptable {

    // Own properties of Champlain-0.12.Champlain.Viewport

    hadjustment: Adjustment
    vadjustment: Adjustment
    xOrigin: number
    yOrigin: number

    // Own fields of Champlain-0.12.Champlain.Viewport

    parent: Clutter.Actor
    priv: ViewportPrivate

    // Owm methods of Champlain-0.12.Champlain.Viewport

    getAdjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    getAnchor(x: number, y: number): void
    getOrigin(x: number, y: number): void
    setActorPosition(actor: Clutter.Actor, x: number, y: number): void
    setAdjustments(hadjustment: Adjustment, vadjustment: Adjustment): void
    setChild(child: Clutter.Actor): void
    setOrigin(x: number, y: number): void
    stop(): void

    // Conflicting methods

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

    // Own signals of Champlain-0.12.Champlain.Viewport

    connect(sigName: "relocated", callback: Viewport.RelocatedSignalCallback): number
    on(sigName: "relocated", callback: Viewport.RelocatedSignalCallback): number
    once(sigName: "relocated", callback: Viewport.RelocatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "relocated", ...args: any[]): void

    // Class property signals of Champlain-0.12.Champlain.Viewport

    connect(sigName: "notify::hadjustment", callback: any): number
    on(sigName: "notify::hadjustment", callback: any): number
    once(sigName: "notify::hadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: any): number
    on(sigName: "notify::vadjustment", callback: any): number
    once(sigName: "notify::vadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::x-origin", callback: any): number
    on(sigName: "notify::x-origin", callback: any): number
    once(sigName: "notify::x-origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x-origin", ...args: any[]): void
    connect(sigName: "notify::y-origin", callback: any): number
    on(sigName: "notify::y-origin", callback: any): number
    once(sigName: "notify::y-origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::y-origin", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Viewport extends Clutter.Actor {

    // Own properties of Champlain-0.12.Champlain.Viewport

    static name: string

    // Constructors of Champlain-0.12.Champlain.Viewport

    constructor(config?: Viewport.ConstructorProperties) 
    constructor() 
    static new(): Viewport
    _init(config?: Viewport.ConstructorProperties): void
}

export interface AdjustmentClass {

    // Own fields of Champlain-0.12.Champlain.AdjustmentClass

    changed: (adjustment: Adjustment) => void
}

/**
 * Base class for #ChamplainAdjustment.
 * @record 
 */
export abstract class AdjustmentClass {

    // Own properties of Champlain-0.12.Champlain.AdjustmentClass

    static name: string
}

export interface AdjustmentPrivate {
}

export class AdjustmentPrivate {

    // Own properties of Champlain-0.12.Champlain.AdjustmentPrivate

    static name: string
}

export interface BoundingBox {

    // Own fields of Champlain-0.12.Champlain.BoundingBox

    /**
     * left coordinate
     * @field 
     */
    left: number
    /**
     * top coordinate
     * @field 
     */
    top: number
    /**
     * right coordinate
     * @field 
     */
    right: number
    /**
     * bottom coordinate
     * @field 
     */
    bottom: number

    // Owm methods of Champlain-0.12.Champlain.BoundingBox

    /**
     * Sets bbox equal to the bounding box containing both `bbox` and `other`.
     * @param other a #ChamplainBoundingBox
     */
    compose(other: BoundingBox): void
    /**
     * Makes a copy of the bounding box structure. The result must be
     * freed using champlain_bounding_box_free().
     */
    copy(): BoundingBox
    /**
     * Checks whether `bbox` covers the given coordinates.
     * @param latitude the latitude of the point
     * @param longitude the longitude of the point
     */
    covers(latitude: number, longitude: number): boolean
    /**
     * Extend the bounding box so it contains a point with `latitude` and `longitude`.
     * Do nothing if the point is already inside the bounding box.
     * @param latitude the latitude of the point
     * @param longitude the longitude of the point
     */
    extend(latitude: number, longitude: number): void
    /**
     * Frees a bounding box structure created with champlain_bounding_box_new() or
     * champlain_bounding_box_copy().
     */
    free(): void
    /**
     * Gets the center's latitude and longitude of the box to `latitude` and `longitude`.
     */
    getCenter(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Checks whether `bbox` represents a valid bounding box on the map.
     */
    isValid(): boolean
}

/**
 * Defines the area of a ChamplainMapDataSource that contains data.
 * @record 
 */
export class BoundingBox {

    // Own properties of Champlain-0.12.Champlain.BoundingBox

    static name: string

    // Constructors of Champlain-0.12.Champlain.BoundingBox

    /**
     * Creates a newly allocated #ChamplainBoundingBox to be freed
     * with champlain_bounding_box_free().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a newly allocated #ChamplainBoundingBox to be freed
     * with champlain_bounding_box_free().
     * @constructor 
     */
    static new(): BoundingBox
}

export interface CoordinateClass {

    // Own fields of Champlain-0.12.Champlain.CoordinateClass

    parentClass: GObject.InitiallyUnownedClass
}

export abstract class CoordinateClass {

    // Own properties of Champlain-0.12.Champlain.CoordinateClass

    static name: string
}

export interface CoordinatePrivate {
}

export class CoordinatePrivate {

    // Own properties of Champlain-0.12.Champlain.CoordinatePrivate

    static name: string
}

export interface CustomMarkerClass {

    // Own fields of Champlain-0.12.Champlain.CustomMarkerClass

    parentClass: MarkerClass
}

export abstract class CustomMarkerClass {

    // Own properties of Champlain-0.12.Champlain.CustomMarkerClass

    static name: string
}

export interface CustomMarkerPrivate {
}

export class CustomMarkerPrivate {

    // Own properties of Champlain-0.12.Champlain.CustomMarkerPrivate

    static name: string
}

export interface ErrorTileRendererClass {

    // Own fields of Champlain-0.12.Champlain.ErrorTileRendererClass

    parentClass: RendererClass
}

export abstract class ErrorTileRendererClass {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRendererClass

    static name: string
}

export interface ErrorTileRendererPrivate {
}

export class ErrorTileRendererPrivate {

    // Own properties of Champlain-0.12.Champlain.ErrorTileRendererPrivate

    static name: string
}

export interface ExportableIface {

    // Own fields of Champlain-0.12.Champlain.ExportableIface

    getSurface: (exportable: Exportable) => cairo.Surface
    setSurface: (exportable: Exportable, surface: cairo.Surface) => void
}

/**
 * An interface common to objects having a #cairo_surface_t representation.
 * @record 
 */
export abstract class ExportableIface {

    // Own properties of Champlain-0.12.Champlain.ExportableIface

    static name: string
}

export interface FileCacheClass {

    // Own fields of Champlain-0.12.Champlain.FileCacheClass

    parentClass: TileCacheClass
}

export abstract class FileCacheClass {

    // Own properties of Champlain-0.12.Champlain.FileCacheClass

    static name: string
}

export interface FileCachePrivate {
}

export class FileCachePrivate {

    // Own properties of Champlain-0.12.Champlain.FileCachePrivate

    static name: string
}

export interface FileTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.FileTileSourceClass

    parentClass: TileSourceClass
}

export abstract class FileTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.FileTileSourceClass

    static name: string
}

export interface FileTileSourcePrivate {
}

export class FileTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.FileTileSourcePrivate

    static name: string
}

export interface ImageRendererClass {

    // Own fields of Champlain-0.12.Champlain.ImageRendererClass

    parentClass: RendererClass
}

export abstract class ImageRendererClass {

    // Own properties of Champlain-0.12.Champlain.ImageRendererClass

    static name: string
}

export interface ImageRendererPrivate {
}

export class ImageRendererPrivate {

    // Own properties of Champlain-0.12.Champlain.ImageRendererPrivate

    static name: string
}

export interface KineticScrollViewClass {

    // Own fields of Champlain-0.12.Champlain.KineticScrollViewClass

    parentClass: Clutter.ActorClass
}

export abstract class KineticScrollViewClass {

    // Own properties of Champlain-0.12.Champlain.KineticScrollViewClass

    static name: string
}

export interface KineticScrollViewPrivate {
}

export class KineticScrollViewPrivate {

    // Own properties of Champlain-0.12.Champlain.KineticScrollViewPrivate

    static name: string
}

export interface LabelClass {

    // Own fields of Champlain-0.12.Champlain.LabelClass

    parentClass: MarkerClass
}

export abstract class LabelClass {

    // Own properties of Champlain-0.12.Champlain.LabelClass

    static name: string
}

export interface LabelPrivate {
}

export class LabelPrivate {

    // Own properties of Champlain-0.12.Champlain.LabelPrivate

    static name: string
}

export interface LayerClass {

    // Own fields of Champlain-0.12.Champlain.LayerClass

    parentClass: Clutter.ActorClass
    setView: (layer: Layer, view: View | null) => void
    getBoundingBox: (layer: Layer) => BoundingBox
}

export abstract class LayerClass {

    // Own properties of Champlain-0.12.Champlain.LayerClass

    static name: string
}

export interface LicenseClass {

    // Own fields of Champlain-0.12.Champlain.LicenseClass

    parentClass: Clutter.ActorClass
}

export abstract class LicenseClass {

    // Own properties of Champlain-0.12.Champlain.LicenseClass

    static name: string
}

export interface LicensePrivate {
}

export class LicensePrivate {

    // Own properties of Champlain-0.12.Champlain.LicensePrivate

    static name: string
}

export interface LocationIface {

    // Own fields of Champlain-0.12.Champlain.LocationIface

    getLatitude: (location: Location) => number
    getLongitude: (location: Location) => number
    setLocation: (location: Location, latitude: number, longitude: number) => void
}

/**
 * An interface common to objects having latitude and longitude.
 * @record 
 */
export abstract class LocationIface {

    // Own properties of Champlain-0.12.Champlain.LocationIface

    static name: string
}

export interface MapSourceChainClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceChainClass

    parentClass: MapSourceClass
}

export abstract class MapSourceChainClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceChainClass

    static name: string
}

export interface MapSourceChainPrivate {
}

export class MapSourceChainPrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourceChainPrivate

    static name: string
}

export interface MapSourceClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceClass

    parentClass: GObject.InitiallyUnownedClass
    getId: (mapSource: MapSource) => string
    getName: (mapSource: MapSource) => string
    getLicense: (mapSource: MapSource) => string
    getLicenseUri: (mapSource: MapSource) => string
    getMinZoomLevel: (mapSource: MapSource) => number
    getMaxZoomLevel: (mapSource: MapSource) => number
    getTileSize: (mapSource: MapSource) => number
    getProjection: (mapSource: MapSource) => MapProjection
    fillTile: (mapSource: MapSource, tile: Tile) => void
}

export abstract class MapSourceClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceClass

    static name: string
}

export interface MapSourceDescClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceDescClass

    parentClass: GObject.ObjectClass
}

export abstract class MapSourceDescClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceDescClass

    static name: string
}

export interface MapSourceDescPrivate {
}

export class MapSourceDescPrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourceDescPrivate

    static name: string
}

export interface MapSourceFactoryClass {

    // Own fields of Champlain-0.12.Champlain.MapSourceFactoryClass

    parentClass: GObject.ObjectClass
}

export abstract class MapSourceFactoryClass {

    // Own properties of Champlain-0.12.Champlain.MapSourceFactoryClass

    static name: string
}

export interface MapSourceFactoryPrivate {
}

export class MapSourceFactoryPrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourceFactoryPrivate

    static name: string
}

export interface MapSourcePrivate {
}

export class MapSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.MapSourcePrivate

    static name: string
}

export interface MarkerClass {

    // Own fields of Champlain-0.12.Champlain.MarkerClass

    parentClass: Clutter.ActorClass
}

export abstract class MarkerClass {

    // Own properties of Champlain-0.12.Champlain.MarkerClass

    static name: string
}

export interface MarkerLayerClass {

    // Own fields of Champlain-0.12.Champlain.MarkerLayerClass

    parentClass: LayerClass
}

export abstract class MarkerLayerClass {

    // Own properties of Champlain-0.12.Champlain.MarkerLayerClass

    static name: string
}

export interface MarkerLayerPrivate {
}

export class MarkerLayerPrivate {

    // Own properties of Champlain-0.12.Champlain.MarkerLayerPrivate

    static name: string
}

export interface MarkerPrivate {
}

export class MarkerPrivate {

    // Own properties of Champlain-0.12.Champlain.MarkerPrivate

    static name: string
}

export interface MemoryCacheClass {

    // Own fields of Champlain-0.12.Champlain.MemoryCacheClass

    parentClass: TileCacheClass
}

export abstract class MemoryCacheClass {

    // Own properties of Champlain-0.12.Champlain.MemoryCacheClass

    static name: string
}

export interface MemoryCachePrivate {
}

export class MemoryCachePrivate {

    // Own properties of Champlain-0.12.Champlain.MemoryCachePrivate

    static name: string
}

export interface NetworkBboxTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.NetworkBboxTileSourceClass

    parentClass: TileSourceClass
}

export abstract class NetworkBboxTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSourceClass

    static name: string
}

export interface NetworkBboxTileSourcePrivate {
}

export class NetworkBboxTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.NetworkBboxTileSourcePrivate

    static name: string
}

export interface NetworkTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.NetworkTileSourceClass

    parentClass: TileSourceClass
}

export abstract class NetworkTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSourceClass

    static name: string
}

export interface NetworkTileSourcePrivate {
}

export class NetworkTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.NetworkTileSourcePrivate

    static name: string
}

export interface NullTileSourceClass {

    // Own fields of Champlain-0.12.Champlain.NullTileSourceClass

    parentClass: TileSourceClass
}

export abstract class NullTileSourceClass {

    // Own properties of Champlain-0.12.Champlain.NullTileSourceClass

    static name: string
}

export interface NullTileSourcePrivate {
}

export class NullTileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.NullTileSourcePrivate

    static name: string
}

export interface PathLayerClass {

    // Own fields of Champlain-0.12.Champlain.PathLayerClass

    parentClass: LayerClass
}

export abstract class PathLayerClass {

    // Own properties of Champlain-0.12.Champlain.PathLayerClass

    static name: string
}

export interface PathLayerPrivate {
}

export class PathLayerPrivate {

    // Own properties of Champlain-0.12.Champlain.PathLayerPrivate

    static name: string
}

export interface PointClass {

    // Own fields of Champlain-0.12.Champlain.PointClass

    parentClass: MarkerClass
}

export abstract class PointClass {

    // Own properties of Champlain-0.12.Champlain.PointClass

    static name: string
}

export interface PointPrivate {
}

export class PointPrivate {

    // Own properties of Champlain-0.12.Champlain.PointPrivate

    static name: string
}

export interface RendererClass {

    // Own fields of Champlain-0.12.Champlain.RendererClass

    parentClass: GObject.InitiallyUnownedClass
    setData: (renderer: Renderer, data: Uint8Array) => void
    render: (renderer: Renderer, tile: Tile) => void
}

export abstract class RendererClass {

    // Own properties of Champlain-0.12.Champlain.RendererClass

    static name: string
}

export interface ScaleClass {

    // Own fields of Champlain-0.12.Champlain.ScaleClass

    parentClass: Clutter.ActorClass
}

export abstract class ScaleClass {

    // Own properties of Champlain-0.12.Champlain.ScaleClass

    static name: string
}

export interface ScalePrivate {
}

export class ScalePrivate {

    // Own properties of Champlain-0.12.Champlain.ScalePrivate

    static name: string
}

export interface TileCacheClass {

    // Own fields of Champlain-0.12.Champlain.TileCacheClass

    parentClass: MapSourceClass
    storeTile: (tileCache: TileCache, tile: Tile, contents: string, size: number) => void
    refreshTileTime: (tileCache: TileCache, tile: Tile) => void
    onTileFilled: (tileCache: TileCache, tile: Tile) => void
}

export abstract class TileCacheClass {

    // Own properties of Champlain-0.12.Champlain.TileCacheClass

    static name: string
}

export interface TileCachePrivate {
}

export class TileCachePrivate {

    // Own properties of Champlain-0.12.Champlain.TileCachePrivate

    static name: string
}

export interface TileClass {

    // Own fields of Champlain-0.12.Champlain.TileClass

    parentClass: Clutter.ActorClass
}

export abstract class TileClass {

    // Own properties of Champlain-0.12.Champlain.TileClass

    static name: string
}

export interface TilePrivate {
}

export class TilePrivate {

    // Own properties of Champlain-0.12.Champlain.TilePrivate

    static name: string
}

export interface TileSourceClass {

    // Own fields of Champlain-0.12.Champlain.TileSourceClass

    parentClass: MapSourceClass
}

export abstract class TileSourceClass {

    // Own properties of Champlain-0.12.Champlain.TileSourceClass

    static name: string
}

export interface TileSourcePrivate {
}

export class TileSourcePrivate {

    // Own properties of Champlain-0.12.Champlain.TileSourcePrivate

    static name: string
}

export interface ViewClass {

    // Own fields of Champlain-0.12.Champlain.ViewClass

    parentClass: Clutter.ActorClass
}

export abstract class ViewClass {

    // Own properties of Champlain-0.12.Champlain.ViewClass

    static name: string
}

export interface ViewPrivate {
}

export class ViewPrivate {

    // Own properties of Champlain-0.12.Champlain.ViewPrivate

    static name: string
}

export interface ViewportClass {

    // Own fields of Champlain-0.12.Champlain.ViewportClass

    parentClass: Clutter.ActorClass
}

export abstract class ViewportClass {

    // Own properties of Champlain-0.12.Champlain.ViewportClass

    static name: string
}

export interface ViewportPrivate {
}

export class ViewportPrivate {

    // Own properties of Champlain-0.12.Champlain.ViewportPrivate

    static name: string
}
