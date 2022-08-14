
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Anthy-9000
 */

import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export const COMPILED_ENCODING: number
export const EUC_JP_ENCODING: number
export const NTH_HALFKANA_CANDIDATE: number
export const NTH_HIRAGANA_CANDIDATE: number
export const NTH_KATAKANA_CANDIDATE: number
export const NTH_UNCONVERTED_CANDIDATE: number
export const RECONVERT_ALWAYS: number
export const RECONVERT_AUTO: number
export const RECONVERT_DISABLE: number
export const UTF8_ENCODING: number
export function commitPrediction(arg0: anthy_context_t, arg1: number): number
export function commitSegment(arg0: anthy_context_t, arg1: number, arg2: number): number
export function confOverride(arg0: string, arg1: string): void
export function contextSetEncoding(ac: anthy_context_t, encoding: number): number
export function getPrediction(arg0: anthy_context_t, arg1: number, arg2: string, arg3: number): number
export function getPredictionStat(arg0: anthy_context_t, arg1: object): number
export function getSegment(arg0: anthy_context_t, arg1: number, arg2: number, arg3: string, arg4: number): number
export function getSegmentStat(arg0: anthy_context_t, arg1: number, arg2: object): number
export function getStat(arg0: anthy_context_t, arg1: object): number
export function getVersionString(): string
export function init(): number
export function printContext(arg0: anthy_context_t): void
export function quit(): void
export function releaseContext(arg0: anthy_context_t): void
export function resetContext(arg0: anthy_context_t): void
export function resizeSegment(arg0: anthy_context_t, arg1: number, arg2: number): void
export function setPersonality(arg0: string): number
export function setPredictionString(arg0: anthy_context_t, arg1: string): number
export function setReconversionMode(ac: anthy_context_t, mode: number): number
export function setString(arg0: anthy_context_t, arg1: string): number
export interface logger {
    (level: number, arg1: string): void
}
export module GContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {
    }

}

export interface GContext {

    // Own fields of Anthy-9000.Anthy.GContext

    parent: GObject.InitiallyUnowned
    priv: GContextPrivate

    // Owm methods of Anthy-9000.Anthy.GContext

    /**
     * Commit a prediction string with `ntg_seg` .
     * @param nthSeg Nth segment
     */
    commitPrediction(nthSeg: number): number
    /**
     * Commit a string with `ntg_seg` and `nth_lookup`.
     * @param nthSeg Nth segment
     * @param nthLookup Nth lookup
     */
    commitSegment(nthSeg: number, nthLookup: number): number
    /**
     * Set a personal dictionary.
     * @param dictName a Dictionary name
     */
    doSetPersonality(dictName: string): number
    /**
     * The number of the candidates
     * @param nthSeg 
     */
    getNrCandidates(nthSeg: number): number
    /**
     * The number of the converted segments in the current prediction string.
     */
    getNrPredictions(): number
    /**
     * The number of the converted segments
     */
    getNrSegments(): number
    /**
     * A newly assigned string with `ntg_seg` .
     * @param nthSeg Nth segment
     */
    getPrediction(nthSeg: number): string
    /**
     * A newly assigned string with `ntg_seg` and `nth_lookup` .
     * @param nthSeg Nth segment
     * @param nthLookup Nth lookup
     */
    getSegment(nthSeg: number, nthLookup: number): string
    /**
     * Initialize the personal dictionaries.
     */
    initPersonality(): void
    /**
     * Resize the nth segment.
     * @param nth nth segment
     * @param resize size
     */
    resizeSegment(nth: number, resize: number): void
    /**
     * Set an encoding.
     * @param encoding An encoding
     */
    setEncoding(encoding: number): number
    /**
     * Set a prediction string.
     * @param string A prediction string
     */
    setPredictionString(string: string): number
    /**
     * Set a conversion string.
     * @param string A conversion string
     */
    setString(string: string): number

    // Class property signals of Anthy-9000.Anthy.GContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An #AnthyGContext is an object that handles conversion strings.
 * @class 
 */
export class GContext extends GObject.InitiallyUnowned {

    // Own properties of Anthy-9000.Anthy.GContext

    static name: string

    // Constructors of Anthy-9000.Anthy.GContext

    constructor(config?: GContext.ConstructorProperties) 
    /**
     * New an #AnthyGobject.
     * @constructor 
     */
    constructor() 
    /**
     * New an #AnthyGobject.
     * @constructor 
     */
    static new(): GContext
    _init(config?: GContext.ConstructorProperties): void
}

export interface GContextClass {

    // Own fields of Anthy-9000.Anthy.GContextClass

    parent: GObject.InitiallyUnownedClass
}

export abstract class GContextClass {

    // Own properties of Anthy-9000.Anthy.GContextClass

    static name: string
}

export interface GContextPrivate {
}

export class GContextPrivate {

    // Own properties of Anthy-9000.Anthy.GContextPrivate

    static name: string
}

export interface anthy_context_t {
}

export class anthy_context_t {

    // Own properties of Anthy-9000.Anthy.anthy_context_t

    static name: string
}

export interface anthy_conv_stat {

    // Own fields of Anthy-9000.Anthy.anthy_conv_stat

    nrSegment: number
}

export class anthy_conv_stat {

    // Own properties of Anthy-9000.Anthy.anthy_conv_stat

    static name: string
}

export interface anthy_prediction_stat {

    // Own fields of Anthy-9000.Anthy.anthy_prediction_stat

    nrPrediction: number
}

export class anthy_prediction_stat {

    // Own properties of Anthy-9000.Anthy.anthy_prediction_stat

    static name: string
}

export interface anthy_segment_stat {

    // Own fields of Anthy-9000.Anthy.anthy_segment_stat

    nrCandidate: number
    segLen: number
}

export class anthy_segment_stat {

    // Own properties of Anthy-9000.Anthy.anthy_segment_stat

    static name: string
}
