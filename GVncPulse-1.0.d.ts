
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GVncPulse-1.0
 */

import type * as GVnc from './GVnc-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export module AudioPulse {

    // Constructor properties interface

    export interface ConstructorProperties extends GVnc.Audio.ConstructorProperties, GVnc.BaseAudio.ConstructorProperties {
    }

}

export interface AudioPulse extends GVnc.Audio {

    // Own fields of GVncPulse-1.0.GVncPulse.AudioPulse

    parent: GVnc.BaseAudio & GObject.Object
    priv: any

    // Conflicting methods

    playbackData(sample: GVnc.AudioSample): boolean
    playbackData(sample: GVnc.AudioSample): boolean

    // Overloads of playbackData

    playbackData(sample: GVnc.AudioSample): boolean
    playbackStart(format: GVnc.AudioFormat): boolean
    playbackStart(format: GVnc.AudioFormat): boolean

    // Overloads of playbackStart

    playbackStart(format: GVnc.AudioFormat): boolean
    playbackStop(): boolean
    playbackStop(): boolean

    // Overloads of playbackStop

    playbackStop(): boolean

    // Class property signals of GVncPulse-1.0.GVncPulse.AudioPulse

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AudioPulse extends GVnc.BaseAudio {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulse

    static name: string

    // Constructors of GVncPulse-1.0.GVncPulse.AudioPulse

    constructor(config?: AudioPulse.ConstructorProperties) 
    /**
     * Create a new VNC audio object able to play
     * audio samples via pulseaudio
     * @constructor 
     */
    constructor() 
    /**
     * Create a new VNC audio object able to play
     * audio samples via pulseaudio
     * @constructor 
     */
    static new(): AudioPulse

    // Overloads of new

    /**
     * Create a new generic VNC audio object, which will emit
     * signals when key audio events occur. Callers can connect
     * to these signals to provide playback facilities.
     * @constructor 
     */
    static new(): GVnc.BaseAudio
    _init(config?: AudioPulse.ConstructorProperties): void
}

export interface AudioPulseClass {

    // Own fields of GVncPulse-1.0.GVncPulse.AudioPulseClass

    parentClass: GVnc.BaseAudioClass
}

export abstract class AudioPulseClass {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulseClass

    static name: string
}

export interface AudioPulsePrivate {
}

export class AudioPulsePrivate {

    // Own properties of GVncPulse-1.0.GVncPulse.AudioPulsePrivate

    static name: string
}
