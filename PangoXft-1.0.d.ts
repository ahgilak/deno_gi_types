
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * PangoXft-1.0
 */

import type * as xlib from './xlib-2.0.js';
import type * as xft from './xft-2.0.js';
import type * as PangoOT from './PangoOT-1.0.js';
import type * as freetype2 from './freetype2-2.0.js';
import type * as PangoFc from './PangoFc-1.0.js';
import type * as fontconfig from './fontconfig-2.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as PangoFT2 from './PangoFT2-1.0.js';

/**
 * Returns the `PangoXftFontMap` for the given display and screen.
 * The fontmap is owned by Pango and will be valid until
 * the display is closed.
 * @param display an X display
 * @param screen the screen number of a screen within `display`
 */
export function getFontMap(display: xlib.Display, screen: number): Pango.FontMap
/**
 * Renders a `PangoGlyphString` onto an Xrender Picture object.
 * @param display an X display
 * @param srcPicture the source picture to draw the string with
 * @param destPicture the destination picture to draw the string onto
 * @param font the font in which to draw the string
 * @param glyphs the glyph string to draw
 * @param x the x position of start of string (in pixels)
 * @param y the y position of baseline (in pixels)
 */
export function pictureRender(display: xlib.Display, srcPicture: xlib.Picture, destPicture: xlib.Picture, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Renders a `PangoGlyphString` onto an XftDraw object wrapping an X drawable.
 * @param draw the XftDraw object.
 * @param color the color in which to draw the string
 * @param font the font in which to draw the string
 * @param glyphs the glyph string to draw
 * @param x the x position of start of string (in pixels)
 * @param y the y position of baseline (in pixels)
 */
export function render(draw: xft.Draw, color: xft.Color, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Render a `PangoLayout` onto a XftDraw
 * @param draw an XftDraw
 * @param color the foreground color in which to draw the layout   (may be overridden by color attributes)
 * @param layout a `PangoLayout`
 * @param x the X position of the left of the layout (in Pango units)
 * @param y the Y position of the top of the layout (in Pango units)
 */
export function renderLayout(draw: xft.Draw, color: xft.Color, layout: Pango.Layout, x: number, y: number): void
/**
 * Render a `PangoLayoutLine` onto a XftDraw
 * @param draw an XftDraw
 * @param color the foreground color in which to draw the layout line   (may be overridden by color attributes)
 * @param line a `PangoLayoutLine`
 * @param x the x position of start of string (in Pango units)
 * @param y the y position of baseline (in Pango units)
 */
export function renderLayoutLine(draw: xft.Draw, color: xft.Color, line: Pango.LayoutLine, x: number, y: number): void
/**
 * Renders a `PangoGlyphString` onto a XftDraw, possibly
 * transforming the layed-out coordinates through a transformation
 * matrix.
 * 
 * Note that the transformation matrix for `font` is not
 * changed, so to produce correct rendering results, the `font`
 * must have been loaded using a `PangoContext` with an identical
 * transformation matrix to that passed in to this function.
 * @param draw an XftDraw
 * @param color the color in which to draw the glyphs
 * @param matrix a `PangoMatrix`
 * @param font the font in which to draw the string
 * @param glyphs the glyph string to draw
 * @param x the x position of the start of the string (in Pango   units in user space coordinates)
 * @param y the y position of the baseline (in Pango units   in user space coordinates)
 */
export function renderTransformed(draw: xft.Draw, color: xft.Color, matrix: Pango.Matrix | null, font: Pango.Font, glyphs: Pango.GlyphString, x: number, y: number): void
/**
 * Sets a function that will be called to do final configuration
 * substitution on a #FcPattern before it is used to load
 * the font. This function can be used to do things like set
 * hinting and antialiasing options.
 * @param display an X Display
 * @param screen the screen number of a screen within `display`
 * @param func function to call to to do final config tweaking        on #FcPattern objects.
 */
export function setDefaultSubstitute(display: xlib.Display, screen: number, func: SubstituteFunc): void
/**
 * Release any resources that have been cached for the
 * combination of `display` and `screen`. Note that when the
 * X display is closed, resources are released automatically,
 * without needing to call this function.
 * @param display an X display
 * @param screen the screen number of a screen within `display`
 */
export function shutdownDisplay(display: xlib.Display, screen: number): void
/**
 * Call this function any time the results of the
 * default substitution function set with
 * pango_xft_set_default_substitute() change.
 * That is, if your substitution function will return different
 * results for the same input pattern, you must call this function.
 * @param display an X Display
 * @param screen the screen number of a screen within `display`
 */
export function substituteChanged(display: xlib.Display, screen: number): void
/**
 * Function type for doing final config tweaking on prepared FcPatterns.
 * @callback 
 * @param pattern the FcPattern to tweak.
 * @param data user data.
 */
export interface SubstituteFunc {
    (pattern: fontconfig.Pattern, data: object | null): void
}
export module Font {

    // Constructor properties interface

    export interface ConstructorProperties extends PangoFc.Font.ConstructorProperties {
    }

}

export interface Font {

    // Conflicting properties

    parentInstance: any

    // Owm methods of PangoXft-1.0.PangoXft.Font

    /**
     * Gets the glyph index for a given Unicode character
     * for `font`.
     * 
     * If you only want to determine whether the font has
     * the glyph, use pango_xft_font_has_char().
     * 
     * Use pango_fc_font_get_glyph() instead.
     * @param wc Unicode codepoint to look up
     */
    getGlyph(wc: string): number
    /**
     * Returns the index of a glyph suitable for drawing `wc` as an
     * unknown character.
     * 
     * Use PANGO_GET_UNKNOWN_GLYPH() instead.
     * @param wc the Unicode character for which a glyph is needed.
     */
    getUnknownGlyph(wc: string): Pango.Glyph
    /**
     * Determines whether `font` has a glyph for the codepoint `wc`.
     * 
     * Use pango_fc_font_has_char() instead.
     * @param wc Unicode codepoint to look up
     */
    hasChar(wc: string): boolean

    // Conflicting methods

    /**
     * Returns the languages that are supported by `font`.
     * 
     * This corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     */
    getLanguages(): Pango.Language | null

    // Overloads of getLanguages

    /**
     * Returns the languages that are supported by `font`.
     * 
     * If the font backend does not provide this information,
     * %NULL is returned. For the fontconfig backend, this
     * corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     */
    getLanguages(): Pango.Language[] | null
    /**
     * Returns the languages that are supported by `font`.
     * 
     * If the font backend does not provide this information,
     * %NULL is returned. For the fontconfig backend, this
     * corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     */
    getLanguages(): Pango.Language[] | null

    // Class property signals of PangoXft-1.0.PangoXft.Font

    connect(sigName: "notify::pattern", callback: any): number
    on(sigName: "notify::pattern", callback: any): number
    once(sigName: "notify::pattern", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pattern", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoXftFont` is an implementation of `PangoFcFont` using the Xft
 * library for rendering.  It is used in conjunction with `PangoXftFontMap`.
 * @class 
 */
export class Font extends PangoFc.Font {

    // Own properties of PangoXft-1.0.PangoXft.Font

    static name: string

    // Constructors of PangoXft-1.0.PangoXft.Font

    constructor(config?: Font.ConstructorProperties) 
    _init(config?: Font.ConstructorProperties): void
}

export module FontMap {

    // Constructor properties interface

    export interface ConstructorProperties extends PangoFc.FontMap.ConstructorProperties {
    }

}

export interface FontMap {

    // Class property signals of PangoXft-1.0.PangoXft.FontMap

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoXftFontMap` is an implementation of `PangoFcFontMap` suitable for
 * the Xft library as the renderer.  It is used in to create fonts of
 * type `PangoXftFont`.
 * @class 
 */
export class FontMap extends PangoFc.FontMap {

    // Own properties of PangoXft-1.0.PangoXft.FontMap

    static name: string

    // Constructors of PangoXft-1.0.PangoXft.FontMap

    constructor(config?: FontMap.ConstructorProperties) 
    _init(config?: FontMap.ConstructorProperties): void
}

export module Renderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {

        // Own constructor properties of PangoXft-1.0.PangoXft.Renderer

        display?: object | null
        screen?: number | null
    }

}

export interface Renderer {

    // Own properties of PangoXft-1.0.PangoXft.Renderer

    readonly display: object
    readonly screen: number

    // Owm methods of PangoXft-1.0.PangoXft.Renderer

    /**
     * Sets the default foreground color for a XftRenderer.
     * @param defaultColor the default foreground color
     */
    setDefaultColor(defaultColor: Pango.Color): void
    /**
     * Sets the XftDraw object that the renderer is drawing to.
     * The renderer must not be currently active.
     * @param draw a XftDraw
     */
    setDraw(draw: xft.Draw): void

    // Own virtual methods of PangoXft-1.0.PangoXft.Renderer

    compositeGlyphs(xftFont: xft.Font, glyphs: xft.GlyphSpec, nGlyphs: number): void
    compositeTrapezoids(part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, nTrapezoids: number): void

    // Class property signals of PangoXft-1.0.PangoXft.Renderer

    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::screen", callback: any): number
    on(sigName: "notify::screen", callback: any): number
    once(sigName: "notify::screen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoXftRenderer` is a subclass of `PangoRenderer` used for rendering
 * with Pango's Xft backend. It can be used directly, or it can be
 * further subclassed to modify exactly how drawing of individual
 * elements occurs.
 * @class 
 */
export class Renderer extends Pango.Renderer {

    // Own properties of PangoXft-1.0.PangoXft.Renderer

    static name: string

    // Constructors of PangoXft-1.0.PangoXft.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    /**
     * Create a new `PangoXftRenderer` to allow rendering Pango objects
     * with the Xft library.
     * 
     * You must call pango_xft_renderer_set_draw() before
     * using the renderer.
     * @constructor 
     * @param display an X display
     * @param screen the index of the screen for `display` to which rendering will be done
     */
    constructor(display: xlib.Display, screen: number) 
    /**
     * Create a new `PangoXftRenderer` to allow rendering Pango objects
     * with the Xft library.
     * 
     * You must call pango_xft_renderer_set_draw() before
     * using the renderer.
     * @constructor 
     * @param display an X display
     * @param screen the index of the screen for `display` to which rendering will be done
     */
    static new(display: xlib.Display, screen: number): Renderer
    _init(config?: Renderer.ConstructorProperties): void
}

export interface RendererClass {

    // Own fields of PangoXft-1.0.PangoXft.RendererClass

    compositeTrapezoids: (xftrenderer: Renderer, part: Pango.RenderPart, trapezoids: xlib.XTrapezoid, nTrapezoids: number) => void
    compositeGlyphs: (xftrenderer: Renderer, xftFont: xft.Font, glyphs: xft.GlyphSpec, nGlyphs: number) => void
}

/**
 * The class structure for `PangoXftRenderer`
 * @record 
 */
export abstract class RendererClass {

    // Own properties of PangoXft-1.0.PangoXft.RendererClass

    static name: string
}

export interface RendererPrivate {
}

export class RendererPrivate {

    // Own properties of PangoXft-1.0.PangoXft.RendererPrivate

    static name: string
}
