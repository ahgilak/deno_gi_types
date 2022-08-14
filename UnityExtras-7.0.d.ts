
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * UnityExtras-7.0
 */

import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as Unity from './Unity-7.0.js';

export function showInFolder(uri: string, callback?: Gio.AsyncReadyCallback | null): void
export function showInFolderFinish(res: Gio.AsyncResult): void
export function dbusNameHasOwner(name: string): boolean
export function dbusOwnName(name: string, scopeCreationCb: CreateScopeCallback): Gio.Application | null
export interface CreateScopeCallback {
    (): void
}
export module PreviewPlayer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        (uri: string, state: Unity.MusicPreviewTrackState, progress: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface PreviewPlayer {

    // Owm methods of UnityExtras-7.0.UnityExtras.PreviewPlayer

    play(uri: string, callback?: Gio.AsyncReadyCallback | null): void
    playFinish(res: Gio.AsyncResult): void
    pause(callback?: Gio.AsyncReadyCallback | null): void
    pauseFinish(res: Gio.AsyncResult): void
    pauseResume(callback?: Gio.AsyncReadyCallback | null): void
    pauseResumeFinish(res: Gio.AsyncResult): void
    resume(callback?: Gio.AsyncReadyCallback | null): void
    resumeFinish(res: Gio.AsyncResult): void
    stop(callback?: Gio.AsyncReadyCallback | null): void
    stopFinish(res: Gio.AsyncResult): void
    close(callback?: Gio.AsyncReadyCallback | null): void
    closeFinish(res: Gio.AsyncResult): void
    videoProperties(uri: string, callback?: Gio.AsyncReadyCallback | null): void
    videoPropertiesFinish(res: Gio.AsyncResult): GLib.HashTable

    // Own signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): number
    on(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): number
    once(sigName: "progress", callback: PreviewPlayer.ProgressSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "progress", state: Unity.MusicPreviewTrackState, progress: number, ...args: any[]): void

    // Class property signals of UnityExtras-7.0.UnityExtras.PreviewPlayer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PreviewPlayer extends GObject.Object {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayer

    static name: string

    // Constructors of UnityExtras-7.0.UnityExtras.PreviewPlayer

    constructor(config?: PreviewPlayer.ConstructorProperties) 
    constructor() 
    static new(): PreviewPlayer
    _init(config?: PreviewPlayer.ConstructorProperties): void
}

export interface PreviewPlayerClass {
}

export abstract class PreviewPlayerClass {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayerClass

    static name: string
}

export interface PreviewPlayerPrivate {
}

export class PreviewPlayerPrivate {

    // Own properties of UnityExtras-7.0.UnityExtras.PreviewPlayerPrivate

    static name: string
}
