
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Babl-0.1
 */

import type * as GObject from './GObject-2.0.js';

export enum IccIntent {
    PERCEPTUAL,
    RELATIVE_COLORIMETRIC,
    SATURATION,
    ABSOLUTE_COLORIMETRIC,
    PERFORMANCE,
}
export enum SpaceFlags {
    NONE,
    EQUALIZE,
}
export enum ModelFlag {
    /**
     * the model encodes alpha.
     */
    ALPHA,
    /**
     * the alpha is associated alpha.
     */
    ASSOCIATED,
    /**
     * the components are inverted (used for getting the additive complement space of CMYK).
     */
    INVERTED,
    /**
     * the data has no TRC, i.e. is linear
     */
    LINEAR,
    /**
     * the data has a TRC - the TRC from the configured space
     */
    NONLINEAR,
    /**
     * the data has a TRC - a perceptual TRC where 50% gray is 0.5
     */
    PERCEPTUAL,
    /**
     * this is a gray component model
     */
    GRAY,
    /**
     * this is an RGB based component model, the space associated is expected to contain an RGB matrix profile.
     */
    RGB,
    /**
     * this model is part of the CIE family of spaces
     */
    CIE,
    /**
     * the encodings described are CMYK encodings, the space associated is expected to contain an CMYK ICC profile.
     */
    CMYK,
}
export const ALPHA_FLOOR: number
export const ALPHA_FLOOR_F: number
export const MAJOR_VERSION: number
export const MICRO_VERSION: number
export const MINOR_VERSION: number
/**
 * Returns the babl object representing the color component given by
 * `name` such as for example "R", "cyan" or "CIE L".
 * @param name 
 */
export function component(name: string): Object
/**
 * Returns the RGB space defined for the destination of conversion.
 * @param conversion 
 */
export function conversionGetDestinationSpace(conversion: Object): Object
/**
 * Returns the RGB space defined for the source of conversion.
 * @param conversion 
 */
export function conversionGetSourceSpace(conversion: Object): Object
/**
 * Deinitializes the babl library and frees any resources used when
 * matched with the number of calls to babl_init().
 */
export function exit(): void
/**
 * Create a faster than normal fish with specified performance (and thus
 * corresponding precision tradeoff), values tolerance can hold: NULL and
 * "default", means do same as babl_fish(), other values understood in
 * increasing order of speed gain are:
 *    "exact" "precise" "fast" "glitch"
 * 
 * Fast fishes should be cached, since they are not internally kept track
 * of/made into singletons by babl and many creations of fast fishes will
 * otherwise be a leak.
 * @param sourceFormat 
 * @param destinationFormat 
 * @param performance 
 */
export function fastFish(sourceFormat: object | null, destinationFormat: object | null, performance: string): Object
/**
 * Create a babl fish capable of converting from source_format to
 *  destination_format, source and destination can be either strings
 *  with the names of the formats or Babl-format objects.
 * @param sourceFormat 
 * @param destinationFormat 
 */
export function fish(sourceFormat: object | null, destinationFormat: object | null): Object
/**
 * Returns the babl object representing the color format given by
 * `name` such as for example "RGB u8", "CMYK float" or "CIE Lab u16",
 * creates a format using the sRGB space, to also specify the color space
 * and TRCs for a format, see babl_format_with_space.
 * @param encoding 
 */
export function format(encoding: string): Object
/**
 * Returns 1 if the provided format name is known by babl or 0 if it is
 * not. Can also be used to verify that specific extension formats are
 * available (though this can also be inferred from the version of babl).
 * @param name 
 */
export function formatExists(name: string): number
/**
 * Returns the bytes per pixel for a babl color format.
 * @param format 
 */
export function formatGetBytesPerPixel(format: Object): number
/**
 * Returns the components and data type, without space suffix.
 * @param babl 
 */
export function formatGetEncoding(babl: Object): string
/**
 * Return the model used for constructing the format.
 * @param format 
 */
export function formatGetModel(format: Object): Object
/**
 * Returns the number of components for the given `format`.
 * @param format 
 */
export function formatGetNComponents(format: Object): number
export function formatGetSpace(format: Object): Object
/**
 * Returns the type in the given `format` for the given
 * `component_index`.
 * @param format 
 * @param componentIndex 
 */
export function formatGetType(format: Object, componentIndex: number): Object
/**
 * Returns whether the `format` has an alpha channel.
 * @param format 
 */
export function formatHasAlpha(format: Object): number
/**
 * Returns whether the `format` is a format_n type.
 * @param format 
 */
export function formatIsFormatN(format: Object): number
/**
 * check whether a format is a palette backed format.
 * @param format 
 */
export function formatIsPalette(format: Object): number
export function formatN(type: Object, components: number): Object
/**
 * Returns the babl object representing the color format given by
 * `name` such as for example "RGB u8", "R'G'B'A float", "Y float" with
 * a specific RGB working space used as the space, the resulting format
 * has -space suffixed to it, unless the space requested is sRGB then
 * the unsuffixed version is used. If a format is passed in as space
 * the space of the format is used.
 * @param encoding 
 * @param space 
 */
export function formatWithSpace(encoding: string, space: Object): Object
export function getModelFlags(model: Object): ModelFlag
/**
 * Returns a string describing a Babl object.
 * @param babl 
 */
export function getName(babl: Object): string
/**
 * Get the version information on the babl library
 */
export function getVersion(): [ /* major */ number, /* minor */ number, /* micro */ number ]
export function iccGetKey(iccData: string, iccLength: number, key: string, language: string, country: string): string
export function iccMakeSpace(iccData: string, iccLength: number, intent: IccIntent, error: string): Object
/**
 * Initializes the babl library.
 */
export function init(): void
/**
 * introspect a given BablObject
 * @param babl A #Babl
 */
export function introspect(babl: Object): void
/**
 * Returns the babl object representing the color model given by `name`
 * such as for example "RGB", "CMYK" or "CIE Lab".
 * @param name 
 */
export function model(name: string): Object
export function modelIs(babl: Object, modelName: string): number
/**
 * The models for formats also have a space in babl, try to avoid code
 * needing to use this.
 * @param name 
 * @param space 
 */
export function modelWithSpace(name: string, space: Object): Object
/**
 * create a new palette based format, name is optional pass in NULL to get
 * an anonymous format. If you pass in with_alpha the format also gets
 * an 8bit alpha channel. Returns the BablModel of the color model. If
 * you pass in the same name the previous formats will be provided
 * again.
 * @param name 
 * @param formatU8 
 * @param formatU8WithAlpha 
 */
export function newPalette(name: string, formatU8: Object, formatU8WithAlpha: Object): Object
/**
 * create a new palette based format, name is optional pass in NULL to get
 * an anonymous format. If you pass in with_alpha the format also gets
 * an 8bit alpha channel. Returns the BablModel of the color model. If
 * you pass in the same name the previous formats will be provided
 * again.
 * @param name 
 * @param space 
 * @param formatU8 
 * @param formatU8WithAlpha 
 */
export function newPaletteWithSpace(name: string, space: Object, formatU8: Object, formatU8WithAlpha: Object): Object
/**
 * reset a palette to initial state, frees up some caches that optimize
 * conversions.
 * @param babl 
 */
export function paletteReset(babl: Object): void
/**
 * Assign a palette to a palette format, the data is a single span of pixels
 * representing the colors of the palette.
 * @param babl a #Babl
 * @param format The pixel format
 * @param data The pixel data
 * @param count The number of pixels in `data`
 */
export function paletteSetPalette(babl: Object, format: Object, data: Uint8Array, count: number): void
/**
 * Process n pixels from source to destination using babl_fish,
 *  returns number of pixels converted.
 * @param bablFish 
 * @param source 
 * @param destination 
 * @param n 
 */
export function process(bablFish: Object, source: object | null, destination: object | null, n: number): number
export function processRows(bablFish: Object, source: object | null, sourceStride: number, dest: object | null, destStride: number, n: number, rows: number): number
/**
 * Returns the babl object representing the `horizontal` and `vertical`
 * sampling such as for example 2, 2 for the chroma components in
 * YCbCr.
 * @param horizontal 
 * @param vertical 
 */
export function sampling(horizontal: number, vertical: number): Object
/**
 * Returns the babl object representing the specific RGB matrix color
 * working space referred to by name. Babl knows of:
 *    sRGB, Rec2020, Adobish, Apple and ProPhoto
 * @param name 
 */
export function space(name: string): Object
/**
 * Creates a new babl-space/ RGB matrix color space definition with the
 * specified CIE xy(Y) values for white point: wx, wy and primary
 * chromaticities: rx,ry,gx,gy,bx,by and TRCs to be used. After registering a
 * new babl-space it can be used with babl_space() passing its name;
 * 
 * Internally this does the math to derive the RGBXYZ matrix as used in an ICC
 * profile.
 * @param name The name for the color space
 * @param wx The X-coordinate of the color space's white point
 * @param wy The Y-coordinate of the color space's white point
 * @param rx The X-coordinate of the red primary
 * @param ry The Y-coordinate of the red primary
 * @param gx The X-coordinate of the green primary
 * @param gy The Y-coordinate of the green primary
 * @param bx The X-coordinate of the blue primary
 * @param by The Y-coordinate of the blue primary
 * @param trcRed The red component of the TRC.
 * @param trcGreen The green component of the TRC (can be %NULL if it's            the same as `trc_red)`.
 * @param trcBlue The blue component of the TRC (can be %NULL if it's            the same as `trc_red)`.
 * @param flags The #BablSpaceFlags
 */
export function spaceFromChromaticities(name: string | null, wx: number, wy: number, rx: number, ry: number, gx: number, gy: number, bx: number, by: number, trcRed: Object, trcGreen: Object | null, trcBlue: Object | null, flags: SpaceFlags): Object
/**
 * Create a babl space from an in memory ICC profile, the profile does no
 * longer need to be loaded for the space to work, multiple calls with the same
 * icc profile and same intent will result in the same babl space.
 * 
 * On a profile that doesn't contain A2B0 and B2A0 CLUTs perceptual and
 * relative-colorimetric intents are treated the same.
 * 
 * If a BablSpace cannot be created from the profile NULL is returned and a
 * static string is set on the const char *value pointed at with &value
 * containing a message describing why the provided data does not yield a babl
 * space.
 * @param iccData pointer to icc profile in memory
 * @param iccLength length of icc profile in bytes
 * @param intent the intent from the ICC profile to use.
 */
export function spaceFromIcc(iccData: string, iccLength: number, intent: IccIntent): [ /* returnType */ Object, /* error */ string ]
/**
 * Creates a new RGB matrix color space definition using a precomputed D50
 * adapted 3x3 matrix and associated CIE XYZ whitepoint, as possibly read from
 * an ICC profile.
 * @param name The name for the color space
 * @param wx The X-coordinate of the color space's white point
 * @param wy The Y-coordinate of the color space's white point
 * @param wz The Z-coordinate of the color space's white point
 * @param rx The X-coordinate of the red primary
 * @param gx The X-coordinate of the green primary
 * @param bx The X-coordinate of the blue primary
 * @param ry The Y-coordinate of the red primary
 * @param gy The Y-coordinate of the green primary
 * @param by The Y-coordinate of the blue primary
 * @param rz The Z-coordinate of the red primary
 * @param gz The Z-coordinate of the green primary
 * @param bz The Z-coordinate of the blue primary
 * @param trcRed The red component of the TRC.
 * @param trcGreen The green component of the TRC (can be %NULL if it's            the same as `trc_red)`.
 * @param trcBlue The blue component of the TRC (can be %NULL if it's            the same as `trc_red)`.
 */
export function spaceFromRgbxyzMatrix(name: string | null, wx: number, wy: number, wz: number, rx: number, gx: number, bx: number, ry: number, gy: number, by: number, rz: number, gz: number, bz: number, trcRed: Object, trcGreen: Object | null, trcBlue: Object | null): Object
/**
 * query the chromaticities of white point and primaries as well as trcs
 * used for r g a nd b, all arguments are optional (can be %NULL).
 * @param space A #Babl instance
 */
export function spaceGet(space: Object): [ /* xw */ number, /* yw */ number, /* xr */ number, /* yr */ number, /* xg */ number, /* yg */ number, /* xb */ number, /* yb */ number, /* redTrc */ Object, /* greenTrc */ Object, /* blueTrc */ Object ]
export function spaceGetGamma(space: Object): number
/**
 * Return pointer to ICC profile for space note that this is
 * the ICC profile for R'G'B', though in formats only supporting linear
 * like EXR GEGL chooses to load this lienar data as RGB and use the sRGB
 * TRC.
 * @param babl a #Babl
 */
export function spaceGetIcc(babl: Object): [ /* returnType */ string, /* length */ number ]
/**
 * Retrieve the relevant RGB luminance constants for a babl space.
 * @param space a BablSpace
 */
export function spaceGetRgbLuminance(space: Object): [ /* redLuminance */ number, /* greenLuminance */ number, /* blueLuminance */ number ]
export function spaceIsCmyk(space: Object): number
export function spaceIsGray(space: Object): number
/**
 * Creates a variant of an existing space with different trc.
 * @param space 
 * @param trc 
 */
export function spaceWithTrc(space: Object, trc: Object): Object
/**
 * Look up a TRC by name, "sRGB" and "linear" are recognized
 * strings in a stock babl configuration.
 * @param name 
 */
export function trc(name: string): Object
/**
 * Creates a Babl TRC for a specific gamma value, it will be given
 * a name that is a short string representation of the value.
 * @param gamma 
 */
export function trcGamma(gamma: number): Object
/**
 * Returns the babl object representing the data type given by `name`
 * such as for example "u8", "u16" or "float".
 * @param name 
 */
export function type(name: string): Object
export interface FishProcess {
    (babl: Object, src: string, dst: string, n: number, data: object | null): void
}
export interface FuncLinear {
    (conversion: Object, src: string, dst: string, n: number): void
}
export interface FuncPlanar {
    (conversion: Object, srcBands: number, src: string, srcPitch: number, dstBands: number, dst: string, dstPitch: number, n: number): void
}
export interface Object {
}

/**
 * The babl API is based around polymorphism and almost everything is
 * a Babl object.
 * @union 
 */
export class Object {

    // Own properties of Babl-0.1.Babl.Object

    static name: string
}
