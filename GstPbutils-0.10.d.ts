
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstPbutils-0.10
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as Gst from './Gst-0.10.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * Result codes returned by gst_install_plugins_async() and
 * gst_install_plugins_sync(), and also the result code passed to the
 * #GstInstallPluginsResultFunc specified with gst_install_plugin_async().
 * These codes indicate success or failure of starting an external installer
 * program and to what extent the requested plugins could be installed.
 */
export enum GstInstallPluginsReturn {
    SUCCESS,
    NOT_FOUND,
    ERROR,
    PARTIAL_SUCCESS,
    USER_ABORT,
    CRASHED,
    INVALID,
    STARTED_OK,
    INTERNAL_FAILURE,
    HELPER_MISSING,
    INSTALL_IN_PROGRESS,
}
export function gstInstallPluginsAsync(details: string[], ctx: GstInstallPluginsContext, func: GstInstallPluginsResultFunc): GstInstallPluginsReturn
export function gstInstallPluginsInstallationInProgress(): boolean
export function gstInstallPluginsReturnGetName(ret: GstInstallPluginsReturn): string
export function gstInstallPluginsSupported(): boolean
export function gstInstallPluginsSync(details: string[], ctx: GstInstallPluginsContext): GstInstallPluginsReturn
export function gstIsMissingPluginMessage(msg: Gst.Message): boolean
export function gstMissingDecoderInstallerDetailNew(decodeCaps: Gst.Caps): string
export function gstMissingDecoderMessageNew(element: Gst.Element, decodeCaps: Gst.Caps): Gst.Message
export function gstMissingElementInstallerDetailNew(factoryName: string): string
export function gstMissingElementMessageNew(element: Gst.Element, factoryName: string): Gst.Message
export function gstMissingEncoderInstallerDetailNew(encodeCaps: Gst.Caps): string
export function gstMissingEncoderMessageNew(element: Gst.Element, encodeCaps: Gst.Caps): Gst.Message
export function gstMissingPluginMessageGetDescription(msg: Gst.Message): string
export function gstMissingPluginMessageGetInstallerDetail(msg: Gst.Message): string
export function gstMissingUriSinkInstallerDetailNew(protocol: string): string
export function gstMissingUriSinkMessageNew(element: Gst.Element, protocol: string): Gst.Message
export function gstMissingUriSourceInstallerDetailNew(protocol: string): string
export function gstMissingUriSourceMessageNew(element: Gst.Element, protocol: string): Gst.Message
export function gstPbUtilsAddCodecDescriptionToTagList(taglist: Gst.TagList, codecTag: string, caps: Gst.Caps): boolean
export function gstPbUtilsGetCodecDescription(caps: Gst.Caps): string
export function gstPbUtilsGetDecoderDescription(caps: Gst.Caps): string
export function gstPbUtilsGetElementDescription(factoryName: string): string
export function gstPbUtilsGetEncoderDescription(caps: Gst.Caps): string
export function gstPbUtilsGetSinkDescription(protocol: string): string
export function gstPbUtilsGetSourceDescription(protocol: string): string
export function gstPbUtilsInit(): void
/**
 * The prototype of the callback function that will be called once the
 * external plugin installer program has returned. You only need to provide
 * a callback function if you are using the asynchronous interface.
 * @callback 
 * @param result whether the installation of the requested plugins succeeded or not
 */
export interface GstInstallPluginsResultFunc {
    (result: GstInstallPluginsReturn): void
}
export interface GstInstallPluginsContext {

    // Owm methods of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext

    free(): void
    setXid(xid: number): void
}

/**
 * Opaque context structure for the plugin installation. Use the provided
 * API to set details on it.
 * @record 
 */
export class GstInstallPluginsContext {

    // Own properties of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext

    static name: string

    // Constructors of GstPbutils-0.10.GstPbutils.GstInstallPluginsContext

    constructor() 
    static new(): GstInstallPluginsContext
}
