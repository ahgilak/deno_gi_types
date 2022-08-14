
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Manette-0.2
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GUdev from './GUdev-1.0.js';

/**
 * Specifies the type of the event.
 */
export enum EventType {
    /**
     * a special code to indicate a null event
     */
    EVENT_NOTHING,
    /**
     * a button has been pressed
     */
    EVENT_BUTTON_PRESS,
    /**
     * a button has been released
     */
    EVENT_BUTTON_RELEASE,
    /**
     * an absolute axis has been moved
     */
    EVENT_ABSOLUTE,
    /**
     * a hat axis has been moved
     */
    EVENT_HAT,
}
export function getResource(): Gio.Resource
export module Device {

    // Signal callback interfaces

    /**
     * Signal callback interface for `absolute-axis-event`
     */
    export interface AbsoluteAxisEventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    export interface ButtonPressEventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    export interface ButtonReleaseEventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `event`
     */
    export interface EventSignalCallback {
        (event: Event): void
    }

    /**
     * Signal callback interface for `hat-axis-event`
     */
    export interface HatAxisEventSignalCallback {
        (event: Event): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Device {

    // Owm methods of Manette-0.2.Manette.Device

    /**
     * Gets the device's name.
     */
    getName(): string
    /**
     * Gets whether the device has the given input. If the input is present it means
     * that the device can send events for it regardless of whether the device is
     * mapped or not.
     * @param type the input type
     * @param code the input code
     */
    hasInput(type: number, code: number): boolean
    hasRumble(): boolean
    /**
     * Gets whether `self` has a user mapping.
     */
    hasUserMapping(): boolean
    /**
     * Removes the user mapping for `self`.
     */
    removeUserMapping(): void
    rumble(strongMagnitude: number, weakMagnitude: number, milliseconds: number): boolean
    /**
     * Saves `mapping_string` as the user mapping for `self`.
     * @param mappingString the mapping string
     */
    saveUserMapping(mappingString: string): void

    // Own signals of Manette-0.2.Manette.Device

    connect(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): number
    on(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): number
    once(sigName: "absolute-axis-event", callback: Device.AbsoluteAxisEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "absolute-axis-event", ...args: any[]): void
    connect(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): number
    on(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): number
    once(sigName: "button-press-event", callback: Device.ButtonPressEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-press-event", ...args: any[]): void
    connect(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): number
    on(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): number
    once(sigName: "button-release-event", callback: Device.ButtonReleaseEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-release-event", ...args: any[]): void
    connect(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): number
    once(sigName: "disconnected", callback: Device.DisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "event", callback: Device.EventSignalCallback): number
    on(sigName: "event", callback: Device.EventSignalCallback): number
    once(sigName: "event", callback: Device.EventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "event", ...args: any[]): void
    connect(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): number
    on(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): number
    once(sigName: "hat-axis-event", callback: Device.HatAxisEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hat-axis-event", ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Device

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Device extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Device

    static name: string

    // Constructors of Manette-0.2.Manette.Device

    constructor(config?: Device.ConstructorProperties) 
    _init(config?: Device.ConstructorProperties): void
}

export module Monitor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `device-connected`
     */
    export interface DeviceConnectedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-disconnected`
     */
    export interface DeviceDisconnectedSignalCallback {
        (device: Device): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Monitor {

    // Owm methods of Manette-0.2.Manette.Monitor

    iterate(): MonitorIter

    // Own signals of Manette-0.2.Manette.Monitor

    connect(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): number
    on(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): number
    once(sigName: "device-connected", callback: Monitor.DeviceConnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-connected", ...args: any[]): void
    connect(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): number
    on(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): number
    once(sigName: "device-disconnected", callback: Monitor.DeviceDisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-disconnected", ...args: any[]): void

    // Class property signals of Manette-0.2.Manette.Monitor

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Monitor extends GObject.Object {

    // Own properties of Manette-0.2.Manette.Monitor

    static name: string

    // Constructors of Manette-0.2.Manette.Monitor

    constructor(config?: Monitor.ConstructorProperties) 
    constructor() 
    static new(): Monitor
    _init(config?: Monitor.ConstructorProperties): void
}

export interface DeviceClass {

    // Own fields of Manette-0.2.Manette.DeviceClass

    parentClass: GObject.ObjectClass
}

export abstract class DeviceClass {

    // Own properties of Manette-0.2.Manette.DeviceClass

    static name: string
}

export interface MonitorClass {

    // Own fields of Manette-0.2.Manette.MonitorClass

    parentClass: GObject.ObjectClass
}

export abstract class MonitorClass {

    // Own properties of Manette-0.2.Manette.MonitorClass

    static name: string
}

export interface MonitorIter {

    // Owm methods of Manette-0.2.Manette.MonitorIter

    /**
     * Gets the next device from the device monitor iterator.
     */
    next(): [ /* returnType */ boolean, /* device */ Device | null ]
}

export class MonitorIter {

    // Own properties of Manette-0.2.Manette.MonitorIter

    static name: string
}

export interface Event {

    // Owm methods of Manette-0.2.Manette.Event

    /**
     * Gets the axis of `self,` if any.
     */
    getAbsolute(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the button of `self,` if any.
     */
    getButton(): [ /* returnType */ boolean, /* button */ number ]
    /**
     * Gets the #ManetteDevice associated with the `self`.
     */
    getDevice(): Device
    /**
     * Gets the event type of `self`.
     */
    getEventType(): EventType
    /**
     * Gets the hardware code of `self`.
     */
    getHardwareCode(): number
    /**
     * Gets the hardware index of `self`.
     */
    getHardwareIndex(): number
    /**
     * Gets the hardware type of `self`.
     */
    getHardwareType(): number
    /**
     * Gets the hardware value of `self`.
     */
    getHardwareValue(): number
    /**
     * Gets the hat of `self,` if any.
     */
    getHat(): [ /* returnType */ boolean, /* axis */ number, /* value */ number ]
    /**
     * Gets the time stamp of `self`.
     */
    getTime(): number
}

export class Event {

    // Own properties of Manette-0.2.Manette.Event

    static name: string
}
