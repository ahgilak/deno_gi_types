
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GdkWayland-4.0
 */

import type * as Gdk from './Gdk-4.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as PangoCairo from './PangoCairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * Callback that gets called when the handle for a surface has been
 * obtained from the Wayland compositor.
 * 
 * This callback is used in [method`GdkWayland`.WaylandToplevel.export_handle].
 * 
 * The `handle` can be passed to other processes, for the purpose of
 * marking surfaces as transient for out-of-process surfaces.
 * @callback 
 * @param toplevel the `GdkToplevel` that is exported
 * @param handle the handle
 */
export interface WaylandToplevelExported {
    (toplevel: WaylandToplevel, handle: string): void
}
export module WaylandDevice {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Device.ConstructorProperties {
    }

}

export interface WaylandDevice {

    // Owm methods of GdkWayland-4.0.GdkWayland.WaylandDevice

    /**
     * Returns the `/dev/input/event*` path of this device.
     * 
     * For `GdkDevice`s that possibly coalesce multiple hardware
     * devices (eg. mouse, keyboard, touch,...), this function
     * will return %NULL.
     * 
     * This is most notably implemented for devices of type
     * %GDK_SOURCE_PEN, %GDK_SOURCE_TABLET_PAD.
     */
    getNodePath(): string | null
    /**
     * Returns the `xkb_keymap` of a `GdkDevice`.
     */
    getXkbKeymap(): object | null

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandDevice

    connect(sigName: "notify::caps-lock-state", callback: any): number
    on(sigName: "notify::caps-lock-state", callback: any): number
    once(sigName: "notify::caps-lock-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caps-lock-state", ...args: any[]): void
    connect(sigName: "notify::direction", callback: any): number
    on(sigName: "notify::direction", callback: any): number
    once(sigName: "notify::direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::has-bidi-layouts", callback: any): number
    on(sigName: "notify::has-bidi-layouts", callback: any): number
    once(sigName: "notify::has-bidi-layouts", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-bidi-layouts", ...args: any[]): void
    connect(sigName: "notify::has-cursor", callback: any): number
    on(sigName: "notify::has-cursor", callback: any): number
    once(sigName: "notify::has-cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-cursor", ...args: any[]): void
    connect(sigName: "notify::modifier-state", callback: any): number
    on(sigName: "notify::modifier-state", callback: any): number
    once(sigName: "notify::modifier-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modifier-state", ...args: any[]): void
    connect(sigName: "notify::n-axes", callback: any): number
    on(sigName: "notify::n-axes", callback: any): number
    once(sigName: "notify::n-axes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-axes", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::num-lock-state", callback: any): number
    on(sigName: "notify::num-lock-state", callback: any): number
    once(sigName: "notify::num-lock-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-lock-state", ...args: any[]): void
    connect(sigName: "notify::num-touches", callback: any): number
    on(sigName: "notify::num-touches", callback: any): number
    once(sigName: "notify::num-touches", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-touches", ...args: any[]): void
    connect(sigName: "notify::product-id", callback: any): number
    on(sigName: "notify::product-id", callback: any): number
    once(sigName: "notify::product-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::product-id", ...args: any[]): void
    connect(sigName: "notify::scroll-lock-state", callback: any): number
    on(sigName: "notify::scroll-lock-state", callback: any): number
    once(sigName: "notify::scroll-lock-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-lock-state", ...args: any[]): void
    connect(sigName: "notify::seat", callback: any): number
    on(sigName: "notify::seat", callback: any): number
    once(sigName: "notify::seat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::tool", callback: any): number
    on(sigName: "notify::tool", callback: any): number
    once(sigName: "notify::tool", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tool", ...args: any[]): void
    connect(sigName: "notify::vendor-id", callback: any): number
    on(sigName: "notify::vendor-id", callback: any): number
    once(sigName: "notify::vendor-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vendor-id", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkDevice`.
 * 
 * Beyond the regular [class`Gdk`.Device] API, the Wayland implementation
 * provides access to Wayland objects such as the `wl_seat` with
 * [method`GdkWayland`.WaylandDevice.get_wl_seat], the `wl_keyboard` with
 * [method`GdkWayland`.WaylandDevice.get_wl_keyboard] and the `wl_pointer` with
 * [method`GdkWayland`.WaylandDevice.get_wl_pointer].
 * @class 
 */
export class WaylandDevice extends Gdk.Device {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDevice

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandDevice

    constructor(config?: WaylandDevice.ConstructorProperties) 
    _init(config?: WaylandDevice.ConstructorProperties): void
}

export module WaylandDisplay {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Display.ConstructorProperties {
    }

}

export interface WaylandDisplay {

    // Owm methods of GdkWayland-4.0.GdkWayland.WaylandDisplay

    /**
     * Retrieves the EGL display connection object for the given GDK display.
     */
    getEglDisplay(): object | null
    /**
     * Gets the startup notification ID for a Wayland display, or %NULL
     * if no ID has been defined.
     */
    getStartupNotificationId(): string | null
    /**
     * Returns %TRUE if the interface was found in the display
     * `wl_registry.global` handler.
     * @param global global interface to query in the registry
     */
    queryRegistry(global: string): boolean
    /**
     * Sets the cursor theme for the given `display`.
     * @param name the new cursor theme
     * @param size the size to use for cursors
     */
    setCursorTheme(name: string, size: number): void
    /**
     * Sets the startup notification ID for a display.
     * 
     * This is usually taken from the value of the `DESKTOP_STARTUP_ID`
     * environment variable, but in some cases (such as the application not
     * being launched using exec()) it can come from other sources.
     * 
     * The startup ID is also what is used to signal that the startup is
     * complete (for example, when opening a window or when calling
     * [method`Gdk`.Display.notify_startup_complete]).
     * @param startupId the startup notification ID (must be valid utf8)
     */
    setStartupNotificationId(startupId: string): void

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandDisplay

    connect(sigName: "notify::composited", callback: any): number
    on(sigName: "notify::composited", callback: any): number
    once(sigName: "notify::composited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composited", ...args: any[]): void
    connect(sigName: "notify::input-shapes", callback: any): number
    on(sigName: "notify::input-shapes", callback: any): number
    once(sigName: "notify::input-shapes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-shapes", ...args: any[]): void
    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkDisplay`.
 * 
 * Beyond the regular [class`Gdk`.Display] API, the Wayland implementation
 * provides access to Wayland objects such as the `wl_display` with
 * [method`GdkWayland`.WaylandDisplay.get_wl_display], the `wl_compositor` with
 * [method`GdkWayland`.WaylandDisplay.get_wl_compositor].
 * 
 * You can find out what Wayland globals are supported by a display
 * with [method`GdkWayland`.WaylandDisplay.query_registry].
 * @class 
 */
export class WaylandDisplay extends Gdk.Display {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDisplay

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandDisplay

    constructor(config?: WaylandDisplay.ConstructorProperties) 
    _init(config?: WaylandDisplay.ConstructorProperties): void
}

export module WaylandGLContext {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.GLContext.ConstructorProperties {
    }

}

export interface WaylandGLContext {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandGLContext

    connect(sigName: "notify::allowed-apis", callback: any): number
    on(sigName: "notify::allowed-apis", callback: any): number
    once(sigName: "notify::allowed-apis", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allowed-apis", ...args: any[]): void
    connect(sigName: "notify::api", callback: any): number
    on(sigName: "notify::api", callback: any): number
    once(sigName: "notify::api", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::api", ...args: any[]): void
    connect(sigName: "notify::shared-context", callback: any): number
    on(sigName: "notify::shared-context", callback: any): number
    once(sigName: "notify::shared-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-context", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
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
 * The Wayland implementation of `GdkGLContext`.
 * @class 
 */
export class WaylandGLContext extends Gdk.GLContext {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandGLContext

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandGLContext

    constructor(config?: WaylandGLContext.ConstructorProperties) 
    _init(config?: WaylandGLContext.ConstructorProperties): void
}

export module WaylandMonitor {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Monitor.ConstructorProperties {
    }

}

export interface WaylandMonitor {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandMonitor

    connect(sigName: "notify::connector", callback: any): number
    on(sigName: "notify::connector", callback: any): number
    once(sigName: "notify::connector", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connector", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::geometry", callback: any): number
    on(sigName: "notify::geometry", callback: any): number
    once(sigName: "notify::geometry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::geometry", ...args: any[]): void
    connect(sigName: "notify::height-mm", callback: any): number
    on(sigName: "notify::height-mm", callback: any): number
    once(sigName: "notify::height-mm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-mm", ...args: any[]): void
    connect(sigName: "notify::manufacturer", callback: any): number
    on(sigName: "notify::manufacturer", callback: any): number
    once(sigName: "notify::manufacturer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manufacturer", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::refresh-rate", callback: any): number
    on(sigName: "notify::refresh-rate", callback: any): number
    once(sigName: "notify::refresh-rate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::refresh-rate", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::subpixel-layout", callback: any): number
    on(sigName: "notify::subpixel-layout", callback: any): number
    once(sigName: "notify::subpixel-layout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subpixel-layout", ...args: any[]): void
    connect(sigName: "notify::valid", callback: any): number
    on(sigName: "notify::valid", callback: any): number
    once(sigName: "notify::valid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::width-mm", callback: any): number
    on(sigName: "notify::width-mm", callback: any): number
    once(sigName: "notify::width-mm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-mm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkMonitor`.
 * 
 * Beyond the [class`Gdk`.Monitor] API, the Wayland implementation
 * offers access to the Wayland `wl_output` object with
 * [method`GdkWayland`.WaylandMonitor.get_wl_output].
 * @class 
 */
export class WaylandMonitor extends Gdk.Monitor {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandMonitor

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandMonitor

    constructor(config?: WaylandMonitor.ConstructorProperties) 
    _init(config?: WaylandMonitor.ConstructorProperties): void
}

export module WaylandPopup {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Popup.ConstructorProperties, WaylandSurface.ConstructorProperties {
    }

}

export interface WaylandPopup extends Gdk.Popup {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandPopup

    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: any): number
    on(sigName: "notify::frame-clock", callback: any): number
    once(sigName: "notify::frame-clock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: any): number
    on(sigName: "notify::mapped", callback: any): number
    once(sigName: "notify::mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::autohide", callback: any): number
    on(sigName: "notify::autohide", callback: any): number
    once(sigName: "notify::autohide", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::autohide", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkPopup`.
 * @class 
 */
export class WaylandPopup extends WaylandSurface {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandPopup

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandPopup

    constructor(config?: WaylandPopup.ConstructorProperties) 
    _init(config?: WaylandPopup.ConstructorProperties): void
}

export module WaylandSeat {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Seat.ConstructorProperties {
    }

}

export interface WaylandSeat {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandSeat

    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkSeat`.
 * 
 * Beyond the regular [class`Gdk`.Seat] API, the Wayland implementation
 * provides access to the Wayland `wl_seat` object with
 * [method`GdkWayland`.WaylandSeat.get_wl_seat].
 * @class 
 */
export class WaylandSeat extends Gdk.Seat {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandSeat

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandSeat

    constructor(config?: WaylandSeat.ConstructorProperties) 
    _init(config?: WaylandSeat.ConstructorProperties): void
}

export module WaylandSurface {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Surface.ConstructorProperties {
    }

}

export interface WaylandSurface {

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandSurface

    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: any): number
    on(sigName: "notify::frame-clock", callback: any): number
    once(sigName: "notify::frame-clock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: any): number
    on(sigName: "notify::mapped", callback: any): number
    once(sigName: "notify::mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkSurface`.
 * 
 * Beyond the [class`Gdk`.Surface] API, the Wayland implementation offers
 * access to the Wayland `wl_surface` object with
 * [method`GdkWayland`.WaylandSurface.get_wl_surface].
 * @class 
 */
export class WaylandSurface extends Gdk.Surface {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandSurface

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandSurface

    constructor(config?: WaylandSurface.ConstructorProperties) 
    _init(config?: WaylandSurface.ConstructorProperties): void
}

export module WaylandToplevel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gdk.Toplevel.ConstructorProperties, WaylandSurface.ConstructorProperties {
    }

}

export interface WaylandToplevel extends Gdk.Toplevel {

    // Owm methods of GdkWayland-4.0.GdkWayland.WaylandToplevel

    /**
     * Asynchronously obtains a handle for a surface that can be passed
     * to other processes.
     * 
     * When the handle has been obtained, `callback` will be called.
     * 
     * It is an error to call this function on a surface that is already
     * exported.
     * 
     * When the handle is no longer needed, [method`GdkWayland`.WaylandToplevel.unexport_handle]
     * should be called to clean up resources.
     * 
     * The main purpose for obtaining a handle is to mark a surface
     * from another surface as transient for this one, see
     * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     * @param callback callback to call with the handle
     */
    exportHandle(callback: WaylandToplevelExported): boolean
    /**
     * Sets the application id on a `GdkToplevel`.
     * @param applicationId the application id for the `toplevel`
     */
    setApplicationId(applicationId: string): void
    /**
     * Marks `toplevel` as transient for the surface to which the given
     * `parent_handle_str` refers.
     * 
     * Typically, the handle will originate from a
     * [method`GdkWayland`.WaylandToplevel.export_handle] call in another process.
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     * @param parentHandleStr an exported handle for a surface
     */
    setTransientForExported(parentHandleStr: string): boolean
    /**
     * Destroys the handle that was obtained with
     * gdk_wayland_toplevel_export_handle().
     * 
     * It is an error to call this function on a surface that
     * does not have a handle.
     * 
     * Note that this API depends on an unstable Wayland protocol,
     * and thus may require changes in the future.
     */
    unexportHandle(): void

    // Class property signals of GdkWayland-4.0.GdkWayland.WaylandToplevel

    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::display", callback: any): number
    on(sigName: "notify::display", callback: any): number
    once(sigName: "notify::display", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display", ...args: any[]): void
    connect(sigName: "notify::frame-clock", callback: any): number
    on(sigName: "notify::frame-clock", callback: any): number
    once(sigName: "notify::frame-clock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::frame-clock", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::mapped", callback: any): number
    on(sigName: "notify::mapped", callback: any): number
    once(sigName: "notify::mapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mapped", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: any): number
    on(sigName: "notify::decorated", callback: any): number
    once(sigName: "notify::decorated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: any): number
    on(sigName: "notify::deletable", callback: any): number
    once(sigName: "notify::deletable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::fullscreen-mode", callback: any): number
    on(sigName: "notify::fullscreen-mode", callback: any): number
    once(sigName: "notify::fullscreen-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fullscreen-mode", ...args: any[]): void
    connect(sigName: "notify::icon-list", callback: any): number
    on(sigName: "notify::icon-list", callback: any): number
    once(sigName: "notify::icon-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-list", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::shortcuts-inhibited", callback: any): number
    on(sigName: "notify::shortcuts-inhibited", callback: any): number
    once(sigName: "notify::shortcuts-inhibited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shortcuts-inhibited", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: any): number
    on(sigName: "notify::startup-id", callback: any): number
    once(sigName: "notify::startup-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: any): number
    on(sigName: "notify::transient-for", callback: any): number
    once(sigName: "notify::transient-for", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The Wayland implementation of `GdkToplevel`.
 * 
 * Beyond the [iface`Gdk`.Toplevel] API, the Wayland implementation
 * has API to set up cross-process parent-child relationships between
 * surfaces with [method`GdkWayland`.WaylandToplevel.export_handle] and
 * [method`GdkWayland`.WaylandToplevel.set_transient_for_exported].
 * @class 
 */
export class WaylandToplevel extends WaylandSurface {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandToplevel

    static name: string

    // Constructors of GdkWayland-4.0.GdkWayland.WaylandToplevel

    constructor(config?: WaylandToplevel.ConstructorProperties) 
    _init(config?: WaylandToplevel.ConstructorProperties): void
}

export interface WaylandDeviceClass {
}

export abstract class WaylandDeviceClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDeviceClass

    static name: string
}

export interface WaylandDisplayClass {
}

export abstract class WaylandDisplayClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandDisplayClass

    static name: string
}

export interface WaylandGLContextClass {
}

export abstract class WaylandGLContextClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandGLContextClass

    static name: string
}

export interface WaylandMonitorClass {
}

export abstract class WaylandMonitorClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandMonitorClass

    static name: string
}

export interface WaylandSeatClass {
}

export abstract class WaylandSeatClass {

    // Own properties of GdkWayland-4.0.GdkWayland.WaylandSeatClass

    static name: string
}
