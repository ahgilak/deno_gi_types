
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * CoglPango-1.0
 */

import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as GL from './GL-1.0.js';

/**
 * This updates any internal glyph cache textures as necessary to be
 * able to render the given `layout`.
 * 
 * This api should be used to avoid mid-scene modifications of
 * glyph-cache textures which can lead to undefined rendering results.
 * @param layout A #PangoLayout
 */
export function ensureGlyphCacheForLayout(layout: Pango.Layout): void
/**
 * Clears the glyph cache for `font_map`.
 * @param fontMap a #CoglPangoFontMap
 */
export function fontMapClearGlyphCache(fontMap: FontMap): void
/**
 * Create a #PangoContext for the given `font_map`.
 * @param fontMap a #CoglPangoFontMap
 */
export function fontMapCreateContext(fontMap: FontMap): Pango.Context
/**
 * Retrieves the #CoglPangoRenderer for the passed `font_map`.
 * @param fontMap a #CoglPangoFontMap
 */
export function fontMapGetRenderer(fontMap: FontMap): Pango.Renderer
/**
 * Retrieves whether the #CoglPangoRenderer used by `font_map` will use
 * mipmapping when rendering the glyphs.
 * @param fontMap a #CoglPangoFontMap
 */
export function fontMapGetUseMipmapping(fontMap: FontMap): Cogl.Bool
/**
 * Creates a new font map.
 */
export function fontMapNew(): Pango.FontMap
/**
 * Sets the resolution for the `font_map`. This is a scale factor
 * between points specified in a #PangoFontDescription and Cogl units.
 * The default value is %96, meaning that a 10 point font will be 13
 * units high. (10 * 96. / 72. = 13.3).
 * @param fontMap a #CoglPangoFontMap
 * @param dpi The resolution in "dots per inch". (Physical inches aren't       actually involved; the terminology is conventional.)
 */
export function fontMapSetResolution(fontMap: FontMap, dpi: number): void
/**
 * Sets whether the renderer for the passed font map should use
 * mipmapping when rendering a #PangoLayout.
 * @param fontMap a #CoglPangoFontMap
 * @param value %TRUE to enable the use of mipmapping
 */
export function fontMapSetUseMipmapping(fontMap: FontMap, value: Cogl.Bool): void
/**
 * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
 * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
 * space.
 * @param layout a #PangoLayout
 * @param x X coordinate to render the layout at
 * @param y Y coordinate to render the layout at
 * @param color color to use when rendering the layout
 * @param flags 
 */
export function renderLayout(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
/**
 * Renders `line` at the given coordinates using the given color.
 * @param line a #PangoLayoutLine
 * @param x X coordinate to render the line at
 * @param y Y coordinate to render the line at
 * @param color color to use when rendering the line
 */
export function renderLayoutLine(line: Pango.LayoutLine, x: number, y: number, color: Cogl.Color): void
/**
 * Draws a solidly coloured `layout` on the given `framebuffer` at (`x,`
 * `y)` within the `framebuffer<`!-- -->'s current model-view coordinate
 * space.
 * @param layout a #PangoLayout
 * @param x X coordinate (in Pango units) to render the layout at
 * @param y Y coordinate (in Pango units) to render the layout at
 * @param color color to use when rendering the layout
 * @param flags 
 */
export function renderLayoutSubpixel(layout: Pango.Layout, x: number, y: number, color: Cogl.Color, flags: number): void
export module Renderer {

    // Constructor properties interface

    export interface ConstructorProperties extends Pango.Renderer.ConstructorProperties {

        // Own constructor properties of CoglPango-1.0.CoglPango.Renderer

        context?: object | null
    }

}

export interface Renderer {

    // Own properties of CoglPango-1.0.CoglPango.Renderer

    readonly context: object

    // Class property signals of CoglPango-1.0.CoglPango.Renderer

    connect(sigName: "notify::context", callback: any): number
    on(sigName: "notify::context", callback: any): number
    once(sigName: "notify::context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::context", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Renderer extends Pango.Renderer {

    // Own properties of CoglPango-1.0.CoglPango.Renderer

    static name: string

    // Constructors of CoglPango-1.0.CoglPango.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
}

export interface RendererClass {
}

export abstract class RendererClass {

    // Own properties of CoglPango-1.0.CoglPango.RendererClass

    static name: string
}

    export type FontMap = PangoCairo.FontMap