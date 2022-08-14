
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Cally-1.0
 */

import type * as Clutter from './Clutter-1.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Json from './Json-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GL from './GL-1.0.js';
import type * as CoglPango from './CoglPango-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as Cogl from './Cogl-1.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * Initializes the accessibility support.
 */
export function accessibilityInit(): boolean
/**
 * Returns if the accessibility support using cally is enabled.
 */
export function getCallyInitialized(): boolean
/**
 * Action function, to be used on #AtkAction implementations as
 * an individual action. Unlike #CallyActionFunc, this function
 * uses the `user_data` argument passed to cally_actor_add_action_full().
 * @callback 
 * @param callyActor a #CallyActor
 */
export interface ActionCallback {
    (callyActor: Actor): void
}
/**
 * Action function, to be used on #AtkAction implementations as a individual
 * action
 * @callback 
 * @param callyActor a #CallyActor
 */
export interface ActionFunc {
    (callyActor: Actor): void
}
export module Actor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.GObjectAccessible.ConstructorProperties {
    }

}

export interface Actor extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Owm methods of Cally-1.0.Cally.Actor

    /**
     * Adds a new action to be accessed with the #AtkAction interface.
     * @param actionName the action name
     * @param actionDescription the action description
     * @param actionKeybinding the action keybinding
     * @param callback the callback of the action
     */
    addAction(actionName: string, actionDescription: string, actionKeybinding: string, callback: ActionCallback): number
    /**
     * Removes a action, using the `action_id` returned by cally_actor_add_action()
     * @param actionId the action id
     */
    removeAction(actionId: number): boolean
    /**
     * Removes an action, using the `action_name` used when the action was added
     * with cally_actor_add_action()
     * @param actionName the name of the action to remove
     */
    removeActionByName(actionName: string): boolean

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Actor

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyActor</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Actor extends Atk.GObjectAccessible {

    // Own properties of Cally-1.0.Cally.Actor

    static name: string

    // Constructors of Cally-1.0.Cally.Actor

    constructor(config?: Actor.ConstructorProperties) 
    /**
     * Creates a new #CallyActor for the given `actor`
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyActor for the given `actor`
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Actor
    _init(config?: Actor.ConstructorProperties): void
}

export module Clone {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Clone extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Clone

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyClone</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Clone extends Actor {

    // Own properties of Cally-1.0.Cally.Clone

    static name: string

    // Constructors of Cally-1.0.Cally.Clone

    constructor(config?: Clone.ConstructorProperties) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * #ClutterClone.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyClone for the given `actor`. `actor` must be a
     * #ClutterClone.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Clone
    _init(config?: Clone.ConstructorProperties): void
}

export module Group {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Group extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Group

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyGroup</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Group extends Actor {

    // Own properties of Cally-1.0.Cally.Group

    static name: string

    // Constructors of Cally-1.0.Cally.Group

    constructor(config?: Group.ConstructorProperties) 
    /**
     * Creates a #CallyGroup for `actor`
     * @constructor 
     * @param actor a #ClutterGroup
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a #CallyGroup for `actor`
     * @constructor 
     * @param actor a #ClutterGroup
     */
    static new(actor: Clutter.Actor): Group
    _init(config?: Group.ConstructorProperties): void
}

export module Rectangle {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Rectangle extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Rectangle

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyRectangle</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Rectangle extends Actor {

    // Own properties of Cally-1.0.Cally.Rectangle

    static name: string

    // Constructors of Cally-1.0.Cally.Rectangle

    constructor(config?: Rectangle.ConstructorProperties) 
    /**
     * Creates a new #CallyRectangle for the given `actor`. `actor` must be
     * a #ClutterRectangle.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyRectangle for the given `actor`. `actor` must be
     * a #ClutterRectangle.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Rectangle
    _init(config?: Rectangle.ConstructorProperties): void
}

export module Root {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.GObjectAccessible.ConstructorProperties {
    }

}

export interface Root {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Class property signals of Cally-1.0.Cally.Root

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyRoot</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Root extends Atk.GObjectAccessible {

    // Own properties of Cally-1.0.Cally.Root

    static name: string

    // Constructors of Cally-1.0.Cally.Root

    constructor(config?: Root.ConstructorProperties) 
    /**
     * Creates a new #CallyRoot object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CallyRoot object.
     * @constructor 
     */
    static new(): Root
    _init(config?: Root.ConstructorProperties): void
}

export module Stage {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.Window.ConstructorProperties, Group.ConstructorProperties {
    }

}

export interface Stage extends Atk.Action, Atk.Component, Atk.Window {

    // Conflicting properties

    parent: GObject.Object & Atk.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Stage

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyStage</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Stage extends Group {

    // Own properties of Cally-1.0.Cally.Stage

    static name: string

    // Constructors of Cally-1.0.Cally.Stage

    constructor(config?: Stage.ConstructorProperties) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * #ClutterStage.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyStage for the given `actor`. `actor` should be a
     * #ClutterStage.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Stage
    _init(config?: Stage.ConstructorProperties): void
}

export module Text {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Atk.EditableText.ConstructorProperties, Atk.Text.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Text extends Atk.Action, Atk.Component, Atk.EditableText, Atk.Text {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Text

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyText</structname> structure contains only private
 * data and should be accessed using the provided API
 * @class 
 */
export class Text extends Actor {

    // Own properties of Cally-1.0.Cally.Text

    static name: string

    // Constructors of Cally-1.0.Cally.Text

    constructor(config?: Text.ConstructorProperties) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * #ClutterText.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyText for the given `actor`. `actor` must be a
     * #ClutterText.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Text
    _init(config?: Text.ConstructorProperties): void
}

export module Texture {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Action.ConstructorProperties, Atk.Component.ConstructorProperties, Actor.ConstructorProperties {
    }

}

export interface Texture extends Atk.Action, Atk.Component {

    // Conflicting properties

    parent: Atk.Object & GObject.Object & GObject.Object

    // Conflicting methods

    /**
     * Returns a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getDescription(i: number): string | null
    /**
     * Gets the accessible description of the accessible.
     * @virtual 
     */
    getDescription(): string
    /**
     * Returns a non-localized string naming the specified action of the
     * object. This name is generally not descriptive of the end result
     * of the action, but instead names the 'interaction type' which the
     * object supports. By convention, the above strings should be used to
     * represent the actions which correspond to the common point-and-click
     * interaction techniques of the same name: i.e.
     * "click", "press", "release", "drag", "drop", "popup", etc.
     * The "popup" action should be used to pop up a context menu for the
     * object, if one exists.
     * 
     * For technical reasons, some toolkits cannot guarantee that the
     * reported action is actually 'bound' to a nontrivial user event;
     * i.e. the result of some actions via atk_action_do_action() may be
     * NIL.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     */
    getName(i: number): string | null
    /**
     * Gets the accessible name of the accessible.
     * @virtual 
     */
    getName(): string
    /**
     * Sets a description of the specified action of the object.
     * @virtual 
     * @param i the action index corresponding to the action to be performed
     * @param desc the description to be assigned to this action
     */
    setDescription(i: number, desc: string): boolean
    /**
     * Sets the accessible description of the accessible. You can't set
     * the description to NULL. This is reserved for the initial value. In
     * this aspect NULL is similar to ATK_ROLE_UNKNOWN. If you want to set
     * the name to a empty value you can use "".
     * @virtual 
     * @param description a character string to be set as the accessible description
     */
    setDescription(description: string): void
    /**
     * Gets the layer of the component.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the layer of the accessible.
     * @virtual 
     */
    getLayer(): Atk.Layer
    /**
     * Gets the zorder of the component. The value G_MININT will be returned
     * if the layer of the component is not ATK_LAYER_MDI or ATK_LAYER_WINDOW.
     * @virtual 
     */
    getMdiZorder(): number
    /**
     * Gets the zorder of the accessible. The value G_MININT will be returned
     * if the layer of the accessible is not ATK_LAYER_MDI.
     * @virtual 
     */
    getMdiZorder(): number

    // Class property signals of Cally-1.0.Cally.Texture

    connect(sigName: "notify::accessible-component-layer", callback: any): number
    on(sigName: "notify::accessible-component-layer", callback: any): number
    once(sigName: "notify::accessible-component-layer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-layer", ...args: any[]): void
    connect(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    on(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    once(sigName: "notify::accessible-component-mdi-zorder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-component-mdi-zorder", ...args: any[]): void
    connect(sigName: "notify::accessible-description", callback: any): number
    on(sigName: "notify::accessible-description", callback: any): number
    once(sigName: "notify::accessible-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-description", ...args: any[]): void
    connect(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    on(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    once(sigName: "notify::accessible-hypertext-nlinks", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-hypertext-nlinks", ...args: any[]): void
    connect(sigName: "notify::accessible-name", callback: any): number
    on(sigName: "notify::accessible-name", callback: any): number
    once(sigName: "notify::accessible-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-name", ...args: any[]): void
    connect(sigName: "notify::accessible-role", callback: any): number
    on(sigName: "notify::accessible-role", callback: any): number
    once(sigName: "notify::accessible-role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-role", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption", callback: any): number
    on(sigName: "notify::accessible-table-caption", callback: any): number
    once(sigName: "notify::accessible-table-caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption", ...args: any[]): void
    connect(sigName: "notify::accessible-table-caption-object", callback: any): number
    on(sigName: "notify::accessible-table-caption-object", callback: any): number
    once(sigName: "notify::accessible-table-caption-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-caption-object", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-description", callback: any): number
    on(sigName: "notify::accessible-table-column-description", callback: any): number
    once(sigName: "notify::accessible-table-column-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-column-header", callback: any): number
    on(sigName: "notify::accessible-table-column-header", callback: any): number
    once(sigName: "notify::accessible-table-column-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-column-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-description", callback: any): number
    on(sigName: "notify::accessible-table-row-description", callback: any): number
    once(sigName: "notify::accessible-table-row-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-description", ...args: any[]): void
    connect(sigName: "notify::accessible-table-row-header", callback: any): number
    on(sigName: "notify::accessible-table-row-header", callback: any): number
    once(sigName: "notify::accessible-table-row-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-row-header", ...args: any[]): void
    connect(sigName: "notify::accessible-table-summary", callback: any): number
    on(sigName: "notify::accessible-table-summary", callback: any): number
    once(sigName: "notify::accessible-table-summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-table-summary", ...args: any[]): void
    connect(sigName: "notify::accessible-value", callback: any): number
    on(sigName: "notify::accessible-value", callback: any): number
    once(sigName: "notify::accessible-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accessible-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyTexture</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Texture extends Actor {

    // Own properties of Cally-1.0.Cally.Texture

    static name: string

    // Constructors of Cally-1.0.Cally.Texture

    constructor(config?: Texture.ConstructorProperties) 
    /**
     * Creates a new #CallyTexture for the given `actor`. `actor` must be
     * a #ClutterTexture.
     * @constructor 
     * @param actor a #ClutterActor
     */
    constructor(actor: Clutter.Actor) 
    /**
     * Creates a new #CallyTexture for the given `actor`. `actor` must be
     * a #ClutterTexture.
     * @constructor 
     * @param actor a #ClutterActor
     */
    static new(actor: Clutter.Actor): Texture
    _init(config?: Texture.ConstructorProperties): void
}

export module Util {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.Util.ConstructorProperties {
    }

}

export interface Util {

    // Class property signals of Cally-1.0.Cally.Util

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The <structname>CallyUtil</structname> structure contains only
 * private data and should be accessed using the provided API
 * @class 
 */
export class Util extends Atk.Util {

    // Own properties of Cally-1.0.Cally.Util

    static name: string

    // Constructors of Cally-1.0.Cally.Util

    constructor(config?: Util.ConstructorProperties) 
    _init(config?: Util.ConstructorProperties): void
}

export interface ActorClass {

    // Own fields of Cally-1.0.Cally.ActorClass

    notifyClutter: (object: GObject.Object, pspec: GObject.ParamSpec) => void
    focusClutter: (actor: Clutter.Actor, data: object) => boolean
    addActor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
    removeActor: (container: Clutter.Actor, actor: Clutter.Actor, data: object) => number
}

/**
 * The <structname>CallyActorClass</structname> structure contains
 * only private data
 * @record 
 */
export abstract class ActorClass {

    // Own properties of Cally-1.0.Cally.ActorClass

    static name: string
}

export interface ActorPrivate {
}

export class ActorPrivate {

    // Own properties of Cally-1.0.Cally.ActorPrivate

    static name: string
}

export interface CloneClass {
}

/**
 * The <structname>CallyCloneClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class CloneClass {

    // Own properties of Cally-1.0.Cally.CloneClass

    static name: string
}

export interface ClonePrivate {
}

export class ClonePrivate {

    // Own properties of Cally-1.0.Cally.ClonePrivate

    static name: string
}

export interface GroupClass {
}

/**
 * The <structname>CallyGroupClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class GroupClass {

    // Own properties of Cally-1.0.Cally.GroupClass

    static name: string
}

export interface GroupPrivate {
}

export class GroupPrivate {

    // Own properties of Cally-1.0.Cally.GroupPrivate

    static name: string
}

export interface RectangleClass {
}

/**
 * The <structname>CallyRectangleClass</structname> structure contains
 * only private data
 * @record 
 */
export abstract class RectangleClass {

    // Own properties of Cally-1.0.Cally.RectangleClass

    static name: string
}

export interface RectanglePrivate {
}

export class RectanglePrivate {

    // Own properties of Cally-1.0.Cally.RectanglePrivate

    static name: string
}

export interface RootClass {
}

/**
 * The <structname>CallyRootClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class RootClass {

    // Own properties of Cally-1.0.Cally.RootClass

    static name: string
}

export interface RootPrivate {
}

export class RootPrivate {

    // Own properties of Cally-1.0.Cally.RootPrivate

    static name: string
}

export interface StageClass {
}

/**
 * The <structname>CallyStageClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class StageClass {

    // Own properties of Cally-1.0.Cally.StageClass

    static name: string
}

export interface StagePrivate {
}

export class StagePrivate {

    // Own properties of Cally-1.0.Cally.StagePrivate

    static name: string
}

export interface TextClass {
}

/**
 * The <structname>CallyTextClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class TextClass {

    // Own properties of Cally-1.0.Cally.TextClass

    static name: string
}

export interface TextPrivate {
}

export class TextPrivate {

    // Own properties of Cally-1.0.Cally.TextPrivate

    static name: string
}

export interface TextureClass {
}

/**
 * The <structname>CallyTextureClass</structname> structure contains
 * only private data
 * @record 
 */
export abstract class TextureClass {

    // Own properties of Cally-1.0.Cally.TextureClass

    static name: string
}

export interface TexturePrivate {
}

export class TexturePrivate {

    // Own properties of Cally-1.0.Cally.TexturePrivate

    static name: string
}

export interface UtilClass {
}

/**
 * The <structname>CallyUtilClass</structname> structure contains only
 * private data
 * @record 
 */
export abstract class UtilClass {

    // Own properties of Cally-1.0.Cally.UtilClass

    static name: string
}

export interface UtilPrivate {
}

export class UtilPrivate {

    // Own properties of Cally-1.0.Cally.UtilPrivate

    static name: string
}
