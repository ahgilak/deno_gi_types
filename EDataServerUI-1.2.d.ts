
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EDataServerUI-1.2
 */

import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';
import type * as EDataServer from './EDataServer-1.2.js';
import type * as libxml2 from './libxml2-2.0.js';
import type * as GData from './GData-0.0.js';
import type * as Json from './Json-1.0.js';
import type * as Goa from './Goa-1.0.js';
import type * as Camel from './Camel-1.2.js';
import type * as ECal from './ECal-2.0.js';
import type * as ICalGLib from './ICalGLib-3.0.js';

/**
 * An #ECredentialsPrompter prompt flags, influencing behaviour
 * of the e_credentials_prompter_prompt().
 * @bitfield 
 */
export enum CredentialsPrompterPromptFlags {
    /**
     * No flag is set.
     */
    NONE,
    /**
     * If set, any source changes during the credentials prompts, like
     *   the "remember-password" or user name changes, will be automatically
     *   stored in the source (written on the disk).
     */
    ALLOW_SOURCE_SAVE,
    /**
     * If set, the stored credentials will be returned first. If there are no
     *   credentials saved, then the user will be asked. Any credentials
     *   reprompt should not have set this flag.
     */
    ALLOW_STORED_CREDENTIALS,
}
export function bufferTaggerConnect(textview: Gtk.TextView): void
export function bufferTaggerDisconnect(textview: Gtk.TextView): void
export function bufferTaggerUpdateTags(textview: Gtk.TextView): void
/**
 * Converts `flags` into a localized text description of the set bits, one
 * bit description per line. If no bit is set, then an empty string is
 * returned.
 * @param flags a #GTlsCertificateFlags to describe
 */
export function trustPromptDescribeCertificateErrors(flags: Gio.TlsCertificateFlags): string
/**
 * Similar to e_trust_prompt_run_modal(), except it also manages all the necessary things
 * around the `source<`!-- -->'s SSL/TLS trust properties when it also contains %E_SOURCE_EXTENSION_WEBDAV,
 * thus the SSL/TLS trust on the WebDAV `source` is properly updated based on the user's choice.
 * The call is finished with e_trust_prompt_run_for_source_finish(),
 * which also returns the user's choice. The finish happens in the `callback`.
 * This is necessary, because the `source` can be also saved.
 * 
 * The function fails, if the `source` doesn't contain the %E_SOURCE_EXTENSION_AUTHENTICATION.
 * 
 * Note: The dialog is not shown when the stored certificate trust in the WebDAV `source`
 *    matches the `certificate_pem` and the stored result is #E_TRUST_PROMPT_RESPONSE_REJECT.
 * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
 * @param source an #ESource, with %E_SOURCE_EXTENSION_AUTHENTICATION
 * @param certificatePem a PEM-encoded certificate for which to show the trust prompt
 * @param certificateErrors errors of the `certificate_pem`
 * @param errorText an optional error text to show in the dialog; can be %NULL
 * @param allowSourceSave whether can also save any `source` changes
 * @param cancellable a #GCancellable, or %NULL
 * @param callback a callback to call, when the prompt (an `source` save) is done
 */
export function trustPromptRunForSource(parent: Gtk.Window, source: EDataServer.Source, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, errorText: string | null, allowSourceSave: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
/**
 * Finishes the operation started with e_trust_prompt_run_for_source().
 * The `response` will contain a code of the user's choice.
 * The #E_TRUST_PROMPT_RESPONSE_UNKNOWN is used, when the user cancelled the trust
 * prompt dialog and no changes are made with the `source`.
 * 
 * If an error occurs, the function sets `error` and returns %FALSE.
 * @param source an #ESource which was used with e_trust_prompt_run_for_source()
 * @param result a #GAsyncResult
 * @param response an output argument, user's response to the trust prompt
 */
export function trustPromptRunForSourceFinish(source: EDataServer.Source, result: Gio.AsyncResult, response: EDataServer.TrustPromptResponse): boolean
/**
 * Runs modal (doesn't return until the dialog is closed) a trust prompt dialog,
 * it is a prompt whether a user wants to accept or reject the `certificate_pem`
 * for the `host` due to the `certificate_errors` errors.
 * 
 * The pair `source_extension` and `source_display_name` influences the trust prompt message.
 * If both are set, then the message also contains which source failed to connect according
 * to these two arguments.
 * 
 * The dialog can contain a custom error text, passed in as `error_text`.
 * The error might be a detailed error string returned by the server. If set,
 * it is prefixed with "Detailed error:" string.
 * @param parent A #GtkWindow to use as a parent for the trust prompt dialog
 * @param sourceExtension an #ESource extension, to identify a kind of the source; or %NULL
 * @param sourceDisplayName an #ESource display name, to identify what prompts; or %NULL
 * @param host a host name to which the certificate belongs
 * @param certificatePem a PEM-encoded certificate for which to show the trust prompt
 * @param certificateErrors errors of the `certificate_pem`
 * @param errorText an optional error text to show in the dialog; can be %NULL
 */
export function trustPromptRunModal(parent: Gtk.Window, sourceExtension: string | null, sourceDisplayName: string | null, host: string, certificatePem: string, certificateErrors: Gio.TlsCertificateFlags, errorText: string | null): EDataServer.TrustPromptResponse
export interface CredentialsPrompterLoopPromptFunc {
    (prompter: CredentialsPrompter, source: EDataServer.Source, credentials: EDataServer.NamedParameters, cancellable: Gio.Cancellable | null): boolean
}
export module CellRendererColor {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRenderer.ConstructorProperties {

        // Own constructor properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor

        rgba?: Gdk.RGBA | null
    }

}

export interface CellRendererColor {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    rgba: Gdk.RGBA

    // Own fields of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    parent: Gtk.CellRenderer
    priv: CellRendererColorPrivate

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    connect(sigName: "notify::rgba", callback: any): number
    on(sigName: "notify::rgba", callback: any): number
    once(sigName: "notify::rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: any): number
    on(sigName: "notify::cell-background", callback: any): number
    once(sigName: "notify::cell-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: any): number
    on(sigName: "notify::cell-background-gdk", callback: any): number
    once(sigName: "notify::cell-background-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: any): number
    on(sigName: "notify::cell-background-rgba", callback: any): number
    once(sigName: "notify::cell-background-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: any): number
    on(sigName: "notify::cell-background-set", callback: any): number
    once(sigName: "notify::cell-background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: any): number
    on(sigName: "notify::editing", callback: any): number
    once(sigName: "notify::editing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: any): number
    on(sigName: "notify::is-expanded", callback: any): number
    once(sigName: "notify::is-expanded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: any): number
    on(sigName: "notify::is-expander", callback: any): number
    once(sigName: "notify::is-expander", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: any): number
    on(sigName: "notify::xpad", callback: any): number
    once(sigName: "notify::xpad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: any): number
    on(sigName: "notify::ypad", callback: any): number
    once(sigName: "notify::ypad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CellRendererColor extends Gtk.CellRenderer {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.CellRendererColor

    constructor(config?: CellRendererColor.ConstructorProperties) 
    constructor() 
    static new(): CellRendererColor
    _init(config?: CellRendererColor.ConstructorProperties): void
}

export module CredentialsPrompter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `get-dialog-parent`
     */
    export interface GetDialogParentSignalCallback {
        (): Gtk.Window | null
    }

    /**
     * Signal callback interface for `get-dialog-parent-full`
     */
    export interface GetDialogParentFullSignalCallback {
        (authSource: EDataServer.Source | null): Gtk.Window | null
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extensible.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

        /**
         * Whether the #ECredentialsPrompter can response to credential
         * requests automatically.
         */
        autoPrompt?: boolean | null
        /**
         * The #ESourceRegistry object, to whose credential requests the prompter listens.
         */
        registry?: EDataServer.SourceRegistry | null
    }

}

export interface CredentialsPrompter extends EDataServer.Extensible {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    /**
     * Whether the #ECredentialsPrompter can response to credential
     * requests automatically.
     */
    autoPrompt: boolean
    /**
     * The #ESourceCredentialsProvider object, which the prompter uses.
     */
    readonly provider: EDataServer.SourceCredentialsProvider
    /**
     * The #ESourceRegistry object, to whose credential requests the prompter listens.
     */
    readonly registry: EDataServer.SourceRegistry

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    parent: GObject.Object
    priv: CredentialsPrompterPrivate

    // Owm methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    /**
     * Completes an ongoing credentials prompt on idle, by finishing the `async_result`.
     * This function is meant to be used by an #ECredentialsPrompterImpl implementation.
     * To actually finish the credentials prompt previously started with
     * e_credentials_prompter_prompt(), the e_credentials_prompter_prompt_finish() should
     * be called from the provided callback.
     * 
     * Using %NULL `credentials` will result in a G_IO_ERROR_CANCELLED error, if
     * no other `error` is provided.
     * @param asyncResult a #GSimpleAsyncResult
     * @param source an #ESource, on which the prompt was started
     * @param credentials credentials, as provided by a user, on %NULL, when the prompt was cancelled
     * @param error a resulting #GError, or %NULL
     */
    completePromptCall(asyncResult: Gio.SimpleAsyncResult, source: EDataServer.Source, credentials: EDataServer.NamedParameters | null, error: GLib.Error): void
    /**
     * Returns, whether can respond to credential prompts automatically.
     * Default value is %TRUE.
     * 
     * This property does not influence direct calls of e_credentials_prompter_prompt().
     */
    getAutoPrompt(): boolean
    /**
     * Returns whether the auto-prompt is disabled for the given `source`.
     * All sources can be auto-prompted by default. This is a complementary
     * value for the ECredentialsPrompter::auto-prompt property.
     * 
     * This value does not influence direct calls of e_credentials_prompter_prompt().
     * @param source an #ESource
     */
    getAutoPromptDisabledFor(source: EDataServer.Source): boolean
    // Has conflict: getDialogParent(): Gtk.Window | null
    /**
     * Returns a #GtkWindow, which should be used as a dialog parent for the `auth_source`.
     * 
     * This is determined by an ECredentialsPrompter::get-dialog-parent-full signal emission
     * and an ECredentialsPrompter::get-dialog-parent when the first doesn't return anything.
     * If there is no callback registered or the current callbacks don't have any suitable
     * window, then there's chosen the last active window from the default GApplication,
     * if any available.
     * @param authSource an #ESource
     */
    getDialogParentFull(authSource: EDataServer.Source | null): Gtk.Window | null
    /**
     * Returns an #ESourceCredentialsProvider, which the `prompter` uses.
     */
    getProvider(): EDataServer.SourceCredentialsProvider
    /**
     * Returns an #ESourceRegistry, to which the `prompter` listens.
     */
    getRegistry(): EDataServer.SourceRegistry
    /**
     * Runs a credentials prompt loop for `source,` as long as the `func` doesn't
     * indicate that the provided credentials can be used to successfully
     * authenticate against `source<`!-- -->'s server, or that the `func`
     * returns %FALSE. The loop is also teminated when a used cancels
     * the credentials prompt or the `cancellable` is cancelled, though
     * not sooner than the credentials prompt dialog is closed.
     * 
     * Note: The function doesn't return until the loop is terminated, either
     *    successfully or unsuccessfully. The function can be called from any
     *    thread, though a dedicated thread is preferred.
     * @param source an #ESource to be prompted credentials for
     * @param flags a bit-or of #ECredentialsPrompterPromptFlags initial flags
     * @param func an #ECredentialsPrompterLoopPromptFunc user function to call to check provided credentials
     * @param cancellable an optional #GCancellable, or %NULL
     */
    loopPromptSync(source: EDataServer.Source, flags: CredentialsPrompterPromptFlags, func: CredentialsPrompterLoopPromptFunc, cancellable: Gio.Cancellable | null): boolean
    /**
     * Process all enabled sources with connection state #E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS,
     * like if they just asked for its credentials for the first time.
     */
    processAwaitingCredentials(): void
    /**
     * Continues a credential prompt for `source`. Returns, whether anything will be done.
     * The %FALSE either means that the `source<`!-- -->'s connection status is not
     * the %E_SOURCE_CONNECTION_STATUS_AWAITING_CREDENTIALS or it is disabled.
     * @param source an #ESource
     */
    processSource(source: EDataServer.Source): boolean
    /**
     * Asks the `prompter` to prompt for credentials, which are returned
     * to the caller through `callback,` when available.The `flags` are ignored,
     * when the `callback` is %NULL; the credentials are passed to the `source`
     * with e_source_invoke_authenticate() directly, in this case.
     * Call e_credentials_prompter_prompt_finish() in `callback` to get to
     * the provided credentials.
     * @param source an #ESource, which prompt the credentials for
     * @param errorText Additional error text to show to a user, or %NULL
     * @param flags a bit-or of #ECredentialsPrompterPromptFlags
     * @param callback a callback to call when the credentials are ready, or %NULL
     */
    prompt(source: EDataServer.Source, errorText: string | null, flags: CredentialsPrompterPromptFlags, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes a credentials prompt previously started with e_credentials_prompter_prompt().
     * The `out_source` will have set a referenced #ESource, for which the prompt
     * was started. Unref it, when  no longer needed. Similarly the `out_credentials`
     * will have set a newly allocated #ENamedParameters structure with provided credentials,
     * which should be freed with e_named_credentials_free() when no longer needed.
     * Both output arguments will be set to %NULL on error and %FALSE will be returned.
     * @param result a #GAsyncResult
     */
    promptFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outSource */ EDataServer.Source | null, /* outCredentials */ EDataServer.NamedParameters | null ]
    /**
     * Registers a prompter implementation for a given authentication method. If there is
     * registered a prompter for the same `authentication_method,` then the function does
     * nothing, otherwise it adds its own reference on the `prompter_impl,` and uses it
     * for that authentication method. One `prompter_impl` can be registered for multiple
     * authentication methods.
     * 
     * A special value %NULL can be used for the `authentication_method,` which means
     * a default credentials prompter, that is to be used when there is no prompter
     * registered for the exact authentication method.
     * @param authenticationMethod an authentication method to registr `prompter_impl` for; or %NULL
     * @param prompterImpl an #ECredentialsPrompterImpl
     */
    registerImpl(authenticationMethod: string | null, prompterImpl: CredentialsPrompterImpl): boolean
    /**
     * Sets whether can respond to credential prompts automatically. That means that
     * whenever any ESource will ask for credentials, it'll try to provide them.
     * 
     * Use e_credentials_prompter_set_auto_prompt_disabled_for() to influence
     * auto-prompt per an #ESource.
     * 
     * This property does not influence direct calls of e_credentials_prompter_prompt().
     * @param autoPrompt new value of the auto-prompt property
     */
    setAutoPrompt(autoPrompt: boolean): void
    /**
     * Sets whether the auto-prompt should be disabled for the given `source`.
     * All sources can be auto-prompted by default. This is a complementary
     * value for the ECredentialsPrompter::auto-prompt property.
     * 
     * This value does not influence direct calls of e_credentials_prompter_prompt().
     * @param source an #ESource
     * @param isDisabled whether the auto-prompt should be disabled for this `source`
     */
    setAutoPromptDisabledFor(source: EDataServer.Source, isDisabled: boolean): void
    /**
     * Unregisters previously registered `prompter_impl` for the given `autnetication_method` with
     * e_credentials_prompter_register_impl(). Function does nothing, if no such authentication
     * method is registered or if it has set a different prompter implementation.
     * @param authenticationMethod an authentication method to registr `prompter_impl` for; or %NULL
     * @param prompterImpl an #ECredentialsPrompterImpl
     */
    unregisterImpl(authenticationMethod: string | null, prompterImpl: CredentialsPrompterImpl): void

    // Own virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    /**
     * Returns a #GtkWindow, which should be used as a dialog parent. This is determined
     * by an ECredentialsPrompter::get-dialog-parent signal emission. If there is no callback
     * registered or the current callbacks don't have any suitable window, then there's
     * chosen the last active window from the default GApplication, if any available.
     * @virtual 
     */
    getDialogParent(): Gtk.Window | null

    // Own signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    connect(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): number
    on(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): number
    once(sigName: "get-dialog-parent", callback: CredentialsPrompter.GetDialogParentSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "get-dialog-parent", ...args: any[]): void
    connect(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): number
    on(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): number
    once(sigName: "get-dialog-parent-full", callback: CredentialsPrompter.GetDialogParentFullSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "get-dialog-parent-full", ...args: any[]): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    connect(sigName: "notify::auto-prompt", callback: any): number
    on(sigName: "notify::auto-prompt", callback: any): number
    once(sigName: "notify::auto-prompt", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auto-prompt", ...args: any[]): void
    connect(sigName: "notify::provider", callback: any): number
    on(sigName: "notify::provider", callback: any): number
    once(sigName: "notify::provider", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::provider", ...args: any[]): void
    connect(sigName: "notify::registry", callback: any): number
    on(sigName: "notify::registry", callback: any): number
    once(sigName: "notify::registry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CredentialsPrompter extends GObject.Object {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompter

    constructor(config?: CredentialsPrompter.ConstructorProperties) 
    /**
     * Creates a new #ECredentialsPrompter, which listens for credential requests
     * from `registry`.
     * @constructor 
     * @param registry an #ESourceRegistry to have the prompter listen to
     */
    constructor(registry: EDataServer.SourceRegistry) 
    /**
     * Creates a new #ECredentialsPrompter, which listens for credential requests
     * from `registry`.
     * @constructor 
     * @param registry an #ESourceRegistry to have the prompter listen to
     */
    static new(registry: EDataServer.SourceRegistry): CredentialsPrompter
    _init(config?: CredentialsPrompter.ConstructorProperties): void
}

export module CredentialsPrompterImpl {

    // Signal callback interfaces

    /**
     * Signal callback interface for `prompt-finished`
     */
    export interface PromptFinishedSignalCallback {
        (promptId: object | null, credentials: EDataServer.NamedParameters | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.Extension.ConstructorProperties {
    }

}

export interface CredentialsPrompterImpl {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    parent: EDataServer.Extension
    priv: CredentialsPrompterImplPrivate

    // Owm methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    // Has conflict: cancelPrompt(promptId: object | null): void
    /**
     * Returns an #ECredentialsPrompter with which the `prompter_impl` is associated.
     */
    getCredentialsPrompter(): object | null
    /**
     * Runs a credentials prompt for the `prompter_impl`. The actual prompter implementation
     * receives the prompt through ECredentialsPrompterImplClass::process_prompt(), where the given
     * `prompt_id` is used for an identification. The prompt is left 'active' as long as it is
     * not finished with a call of e_credentials_prompter_impl_prompt_finish(). This should be
     * called even for cancelled prompts. The prompt can be cancelled before it's processed,
     * using the e_credentials_prompter_impl_cancel_prompt().
     * 
     * The `auth_source` can be the same as `cred_source,` in case the credentials
     * are stored only for that particular source. If the sources share credentials,
     * which can be a case when the `auth_source` is part of a collection, then
     * the `cred_stource` can be that collection source.
     * @param promptId a prompt ID to be passed to e_credentials_prompter_impl_prompt_finish()
     * @param authSource an #ESource, to prompt the credentials for (the source which asked for credentials)
     * @param credSource a parent #ESource, from which credentials were taken, or should be stored to
     * @param errorText an optional error text from the previous credentials prompt; can be %NULL
     * @param credentials credentials, as saved in keyring; can be empty, but not %NULL
     */
    prompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string | null, credentials: EDataServer.NamedParameters): void
    /**
     * The actual credentials prompt implementation finishes a previously started
     * credentials prompt `prompt_id` with ECredentialsPrompterImplClass::process_prompt()
     * by a call to this function. This function should be called regardless the prompt
     * was or was not cancelled with e_credentials_prompter_impl_cancel_prompt().
     * Once the prompt is finished another queued is started, if any pending exists.
     * Use %NULL `credentials` for cancelled prompts, otherwise the credentials are used
     * for authentication of the associated #ESource.
     * @param promptId a prompt ID
     * @param credentials credentials to use; can be %NULL for cancelled prompts
     */
    promptFinish(promptId: object | null, credentials: EDataServer.NamedParameters | null): void

    // Own virtual methods of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    /**
     * Asks the `prompt_impl` to cancel current prompt, which should have ID `prompt_id`.
     * @virtual 
     * @param promptId a prompt ID to cancel
     */
    cancelPrompt(promptId: object | null): void
    processPrompt(promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string, credentials: EDataServer.NamedParameters): void
    promptFinished(promptId: object | null, credentials: EDataServer.NamedParameters): void

    // Own signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    connect(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): number
    on(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): number
    once(sigName: "prompt-finished", callback: CredentialsPrompterImpl.PromptFinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "prompt-finished", credentials: EDataServer.NamedParameters | null, ...args: any[]): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    connect(sigName: "notify::extensible", callback: any): number
    on(sigName: "notify::extensible", callback: any): number
    once(sigName: "notify::extensible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Credentials prompter implementation base structure. The descendants
 * implement ECredentialsPrompterImpl::prompt(), which is used to
 * prompt for credentials. The descendants are automatically registered
 * into an #ECredentialsPrompter.
 * @class 
 */
export class CredentialsPrompterImpl extends EDataServer.Extension {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImpl

    constructor(config?: CredentialsPrompterImpl.ConstructorProperties) 
    _init(config?: CredentialsPrompterImpl.ConstructorProperties): void
}

export module CredentialsPrompterImplOAuth2 {

    // Constructor properties interface

    export interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
    }

}

export interface CredentialsPrompterImplOAuth2 {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    parent: CredentialsPrompterImpl & EDataServer.Extension
    priv: any

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    connect(sigName: "notify::extensible", callback: any): number
    on(sigName: "notify::extensible", callback: any): number
    once(sigName: "notify::extensible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CredentialsPrompterImplOAuth2 extends CredentialsPrompterImpl {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2

    constructor(config?: CredentialsPrompterImplOAuth2.ConstructorProperties) 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplOAuth2.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplOAuth2.
     * @constructor 
     */
    static new(): CredentialsPrompterImplOAuth2
    _init(config?: CredentialsPrompterImplOAuth2.ConstructorProperties): void
}

export module CredentialsPrompterImplPassword {

    // Constructor properties interface

    export interface ConstructorProperties extends CredentialsPrompterImpl.ConstructorProperties {
    }

}

export interface CredentialsPrompterImplPassword {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    parent: CredentialsPrompterImpl & EDataServer.Extension
    priv: any

    // Class property signals of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    connect(sigName: "notify::extensible", callback: any): number
    on(sigName: "notify::extensible", callback: any): number
    once(sigName: "notify::extensible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extensible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class CredentialsPrompterImplPassword extends CredentialsPrompterImpl {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPassword

    constructor(config?: CredentialsPrompterImplPassword.ConstructorProperties) 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplPassword.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new instance of an #ECredentialsPrompterImplPassword.
     * @constructor 
     */
    static new(): CredentialsPrompterImplPassword
    _init(config?: CredentialsPrompterImplPassword.ConstructorProperties): void
}

export module RemindersWidget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activated`
     */
    export interface ActivatedSignalCallback {
        (object: ECal.ReminderData): boolean
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, EDataServer.Extensible.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget

        watcher?: ECal.ReminderWatcher | null
    }

}

export interface RemindersWidget extends Atk.ImplementorIface, EDataServer.Extensible, Gtk.Buildable, Gtk.Orientable {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    readonly empty: boolean
    readonly watcher: ECal.ReminderWatcher

    // Owm methods of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    getPaned(): Gtk.Paned
    getSettings(): Gio.Settings

    // Overloads of getSettings

    /**
     * Gets the settings object holding the settings used for this widget.
     * 
     * Note that this function can only be called when the #GtkWidget
     * is attached to a toplevel, since the settings object is specific
     * to a particular #GdkScreen.
     */
    getSettings(): Gtk.Settings
    getTreeView(): Gtk.TreeView
    getWatcher(): ECal.ReminderWatcher
    isEmpty(): boolean
    /**
     * Shows a warning in the GUI with the `error` message, optionally prefixed
     * with `prefix`. When `error` is %NULL, an "Unknown error" message is shown
     * instead.
     * @param prefix an optional prefix to show before the error message, or %NULL for none
     * @param error a #GError to show the message from in the UI, or %NULL for unknown error
     */
    reportError(prefix: string | null, error: GLib.Error | null): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    activated(rd: ECal.ReminderData): boolean
    changed(): void

    // Own signals of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    connect(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): number
    on(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): number
    once(sigName: "activated", callback: RemindersWidget.ActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activated", ...args: any[]): void
    connect(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): number
    on(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): number
    once(sigName: "changed", callback: RemindersWidget.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    connect(sigName: "notify::empty", callback: any): number
    on(sigName: "notify::empty", callback: any): number
    once(sigName: "notify::empty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::empty", ...args: any[]): void
    connect(sigName: "notify::watcher", callback: any): number
    on(sigName: "notify::watcher", callback: any): number
    once(sigName: "notify::watcher", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::watcher", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: any): number
    on(sigName: "notify::app-paintable", callback: any): number
    once(sigName: "notify::app-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: any): number
    on(sigName: "notify::can-default", callback: any): number
    once(sigName: "notify::can-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: any): number
    on(sigName: "notify::composite-child", callback: any): number
    once(sigName: "notify::composite-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: any): number
    on(sigName: "notify::double-buffered", callback: any): number
    once(sigName: "notify::double-buffered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: any): number
    on(sigName: "notify::events", callback: any): number
    once(sigName: "notify::events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: any): number
    on(sigName: "notify::expand", callback: any): number
    once(sigName: "notify::expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: any): number
    on(sigName: "notify::halign", callback: any): number
    once(sigName: "notify::halign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: any): number
    on(sigName: "notify::has-default", callback: any): number
    once(sigName: "notify::has-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: any): number
    on(sigName: "notify::has-focus", callback: any): number
    once(sigName: "notify::has-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: any): number
    on(sigName: "notify::height-request", callback: any): number
    once(sigName: "notify::height-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: any): number
    on(sigName: "notify::hexpand", callback: any): number
    once(sigName: "notify::hexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: any): number
    on(sigName: "notify::hexpand-set", callback: any): number
    once(sigName: "notify::hexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: any): number
    on(sigName: "notify::margin", callback: any): number
    once(sigName: "notify::margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: any): number
    on(sigName: "notify::margin-end", callback: any): number
    once(sigName: "notify::margin-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: any): number
    on(sigName: "notify::margin-left", callback: any): number
    once(sigName: "notify::margin-left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: any): number
    on(sigName: "notify::margin-right", callback: any): number
    once(sigName: "notify::margin-right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: any): number
    on(sigName: "notify::margin-start", callback: any): number
    once(sigName: "notify::margin-start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: any): number
    on(sigName: "notify::tooltip-markup", callback: any): number
    once(sigName: "notify::tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: any): number
    on(sigName: "notify::valign", callback: any): number
    once(sigName: "notify::valign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: any): number
    on(sigName: "notify::vexpand", callback: any): number
    once(sigName: "notify::vexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: any): number
    on(sigName: "notify::vexpand-set", callback: any): number
    once(sigName: "notify::vexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: any): number
    on(sigName: "notify::width-request", callback: any): number
    once(sigName: "notify::width-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using
 * the functions below.
 * @class 
 */
export class RemindersWidget extends Gtk.Grid {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.RemindersWidget

    constructor(config?: RemindersWidget.ConstructorProperties) 
    /**
     * Creates a new instance of #ERemindersWidget. It adds its own reference
     * on the `watcher`.
     * @constructor 
     * @param watcher an #EReminderWatcher
     */
    constructor(watcher: ECal.ReminderWatcher) 
    /**
     * Creates a new instance of #ERemindersWidget. It adds its own reference
     * on the `watcher`.
     * @constructor 
     * @param watcher an #EReminderWatcher
     */
    static new(watcher: ECal.ReminderWatcher): RemindersWidget

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: RemindersWidget.ConstructorProperties): void
}

export module WebDAVDiscoverContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {
    }

}

export interface WebDAVDiscoverContent extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Owm methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    /**
     * Returns currently set base URL for the `content`. This is used to overwrite the one
     * set on the #ESource from the creation time. The URL can be either a full URL, a path
     * or even a %NULL.
     */
    getBaseUrl(): string
    getMultiselect(): boolean
    /**
     * Returns information about selected source at index `index`. The function can be called
     * multiple times, with the index starting at zero and as long as it doesn't return %FALSE.
     * If the `content` doesn't have allowed multiselection, then the only valid `index` is 0.
     * 
     * All the `out_href,` `out_display_name` and `out_color` are newly allocated strings, which should
     * be freed with g_free(), when no longer needed.
     * @param index an index of the selected source; counts from 0
     */
    getSelected(index: number): [ /* returnType */ boolean, /* outHref */ string, /* outSupports */ number, /* outDisplayName */ string, /* outColor */ string, /* outOrder */ number ]
    /**
     * Returns inner #GtkTreeViewSelection. This is meant to be able to connect
     * to its "changed" signal and update other parts of the parent widgets accordingly.
     */
    getTreeSelection(): Gtk.TreeSelection
    /**
     * Get currently selected user address in the `content,` if the server returned any.
     * This value has meaning only with calendar sources.
     */
    getUserAddress(): string | null
    /**
     * Asynchronously starts refresh of the `content`. This means to access the server
     * and search it for available sources. The `content` shows a feedback and a Cancel
     * button during the operation.
     * 
     * The `display_name` is used only if the `content` wasn't created with an #ESource and
     * it's shown in the password prompts, if there are required any.
     * 
     * When the operation is finished, `callback` will be called. You can then
     * call e_webdav_discover_content_refresh_finish() to get the result of the operation.
     * @param displayName optional display name to use for scratch sources
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    refresh(displayName: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_webdav_discover_content_refresh(). If an
     * error occurred, the function will set `error` and return %FALSE. There is
     * available e_webdav_discover_content_show_error() for convenience, which
     * shows the error within `content` and takes care of it when refreshing
     * the content.
     * @param result a #GAsyncResult
     */
    refreshFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets base URL for the `content`. This is used to overwrite the one set on
     * the #ESource from the creation time. The URL can be either a full URL, a path
     * or even a %NULL.
     * @param baseUrl a base URL
     */
    setBaseUrl(baseUrl: string): void
    /**
     * Sets whether the WebDAV discovery content allows multiselect.
     * @param multiselect whether multiselect is allowed
     */
    setMultiselect(multiselect: boolean): void
    /**
     * Shows the `error` within `content,` unless it's a #G_IO_ERROR_CANCELLED, or %NULL,
     * which are safely ignored. The advantage of this function is that the error
     * message is removed when the refresh operation is started.
     * @param error a #GError to show in the UI, or %NULL
     */
    showError(error: GLib.Error): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: any): number
    on(sigName: "notify::app-paintable", callback: any): number
    once(sigName: "notify::app-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: any): number
    on(sigName: "notify::can-default", callback: any): number
    once(sigName: "notify::can-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: any): number
    on(sigName: "notify::composite-child", callback: any): number
    once(sigName: "notify::composite-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: any): number
    on(sigName: "notify::double-buffered", callback: any): number
    once(sigName: "notify::double-buffered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: any): number
    on(sigName: "notify::events", callback: any): number
    once(sigName: "notify::events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: any): number
    on(sigName: "notify::expand", callback: any): number
    once(sigName: "notify::expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: any): number
    on(sigName: "notify::halign", callback: any): number
    once(sigName: "notify::halign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: any): number
    on(sigName: "notify::has-default", callback: any): number
    once(sigName: "notify::has-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: any): number
    on(sigName: "notify::has-focus", callback: any): number
    once(sigName: "notify::has-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: any): number
    on(sigName: "notify::height-request", callback: any): number
    once(sigName: "notify::height-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: any): number
    on(sigName: "notify::hexpand", callback: any): number
    once(sigName: "notify::hexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: any): number
    on(sigName: "notify::hexpand-set", callback: any): number
    once(sigName: "notify::hexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: any): number
    on(sigName: "notify::margin", callback: any): number
    once(sigName: "notify::margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: any): number
    on(sigName: "notify::margin-end", callback: any): number
    once(sigName: "notify::margin-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: any): number
    on(sigName: "notify::margin-left", callback: any): number
    once(sigName: "notify::margin-left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: any): number
    on(sigName: "notify::margin-right", callback: any): number
    once(sigName: "notify::margin-right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: any): number
    on(sigName: "notify::margin-start", callback: any): number
    once(sigName: "notify::margin-start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: any): number
    on(sigName: "notify::tooltip-markup", callback: any): number
    once(sigName: "notify::tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: any): number
    on(sigName: "notify::valign", callback: any): number
    once(sigName: "notify::valign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: any): number
    on(sigName: "notify::vexpand", callback: any): number
    once(sigName: "notify::vexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: any): number
    on(sigName: "notify::vexpand-set", callback: any): number
    once(sigName: "notify::vexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: any): number
    on(sigName: "notify::width-request", callback: any): number
    once(sigName: "notify::width-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebDAVDiscoverContent extends Gtk.Grid {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContent

    constructor(config?: WebDAVDiscoverContent.ConstructorProperties) 
    /**
     * Creates a new WebDAV discovery content, which is a #GtkGrid containing necessary
     * widgets to provide a UI interface for a user to search and select for available
     * WebDAV (CalDAV or CardDAV) sources provided by the given server. Do not pack
     * anything into this content, its content can be changed dynamically.
     * @constructor 
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source optional #ESource to use for authentication, or %NULL
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     */
    constructor(credentialsPrompter: CredentialsPrompter, source: EDataServer.Source | null, baseUrl: string | null, supportsFilter: number) 
    /**
     * Creates a new WebDAV discovery content, which is a #GtkGrid containing necessary
     * widgets to provide a UI interface for a user to search and select for available
     * WebDAV (CalDAV or CardDAV) sources provided by the given server. Do not pack
     * anything into this content, its content can be changed dynamically.
     * @constructor 
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source optional #ESource to use for authentication, or %NULL
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     */
    static new(credentialsPrompter: CredentialsPrompter, source: EDataServer.Source | null, baseUrl: string | null, supportsFilter: number): WebDAVDiscoverContent

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: WebDAVDiscoverContent.ConstructorProperties): void
}

export module WebDAVDiscoverDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface WebDAVDiscoverDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Owm methods of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    /**
     * Returns inner WebDAV discovery content, which can be further manipulated.
     */
    getContent(): WebDAVDiscoverContent
    /**
     * Invokes refresh of the inner content of the WebDAV discovery dialog.
     */
    refresh(): void

    // Conflicting methods

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     */
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonicActivate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: any): number
    on(sigName: "notify::accept-focus", callback: any): number
    once(sigName: "notify::accept-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: any): number
    on(sigName: "notify::attached-to", callback: any): number
    once(sigName: "notify::attached-to", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: any): number
    on(sigName: "notify::decorated", callback: any): number
    once(sigName: "notify::decorated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: any): number
    on(sigName: "notify::default-height", callback: any): number
    once(sigName: "notify::default-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: any): number
    on(sigName: "notify::default-width", callback: any): number
    once(sigName: "notify::default-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: any): number
    on(sigName: "notify::deletable", callback: any): number
    once(sigName: "notify::deletable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: any): number
    on(sigName: "notify::destroy-with-parent", callback: any): number
    once(sigName: "notify::destroy-with-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: any): number
    on(sigName: "notify::focus-on-map", callback: any): number
    once(sigName: "notify::focus-on-map", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: any): number
    on(sigName: "notify::focus-visible", callback: any): number
    once(sigName: "notify::focus-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: any): number
    on(sigName: "notify::gravity", callback: any): number
    once(sigName: "notify::gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: any): number
    on(sigName: "notify::has-resize-grip", callback: any): number
    once(sigName: "notify::has-resize-grip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: any): number
    on(sigName: "notify::has-toplevel-focus", callback: any): number
    once(sigName: "notify::has-toplevel-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    once(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: any): number
    on(sigName: "notify::is-active", callback: any): number
    once(sigName: "notify::is-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: any): number
    on(sigName: "notify::is-maximized", callback: any): number
    once(sigName: "notify::is-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: any): number
    on(sigName: "notify::mnemonics-visible", callback: any): number
    once(sigName: "notify::mnemonics-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: any): number
    on(sigName: "notify::resizable", callback: any): number
    once(sigName: "notify::resizable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: any): number
    on(sigName: "notify::resize-grip-visible", callback: any): number
    once(sigName: "notify::resize-grip-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: any): number
    on(sigName: "notify::screen", callback: any): number
    once(sigName: "notify::screen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: any): number
    on(sigName: "notify::skip-pager-hint", callback: any): number
    once(sigName: "notify::skip-pager-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: any): number
    on(sigName: "notify::skip-taskbar-hint", callback: any): number
    once(sigName: "notify::skip-taskbar-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: any): number
    on(sigName: "notify::startup-id", callback: any): number
    once(sigName: "notify::startup-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
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
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: any): number
    on(sigName: "notify::type-hint", callback: any): number
    once(sigName: "notify::type-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: any): number
    on(sigName: "notify::urgency-hint", callback: any): number
    once(sigName: "notify::urgency-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: any): number
    on(sigName: "notify::window-position", callback: any): number
    once(sigName: "notify::window-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: any): number
    on(sigName: "notify::app-paintable", callback: any): number
    once(sigName: "notify::app-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: any): number
    on(sigName: "notify::can-default", callback: any): number
    once(sigName: "notify::can-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: any): number
    on(sigName: "notify::composite-child", callback: any): number
    once(sigName: "notify::composite-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: any): number
    on(sigName: "notify::double-buffered", callback: any): number
    once(sigName: "notify::double-buffered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: any): number
    on(sigName: "notify::events", callback: any): number
    once(sigName: "notify::events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: any): number
    on(sigName: "notify::expand", callback: any): number
    once(sigName: "notify::expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: any): number
    on(sigName: "notify::halign", callback: any): number
    once(sigName: "notify::halign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: any): number
    on(sigName: "notify::has-default", callback: any): number
    once(sigName: "notify::has-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: any): number
    on(sigName: "notify::has-focus", callback: any): number
    once(sigName: "notify::has-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: any): number
    on(sigName: "notify::height-request", callback: any): number
    once(sigName: "notify::height-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: any): number
    on(sigName: "notify::hexpand", callback: any): number
    once(sigName: "notify::hexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: any): number
    on(sigName: "notify::hexpand-set", callback: any): number
    once(sigName: "notify::hexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: any): number
    on(sigName: "notify::margin", callback: any): number
    once(sigName: "notify::margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: any): number
    on(sigName: "notify::margin-end", callback: any): number
    once(sigName: "notify::margin-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: any): number
    on(sigName: "notify::margin-left", callback: any): number
    once(sigName: "notify::margin-left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: any): number
    on(sigName: "notify::margin-right", callback: any): number
    once(sigName: "notify::margin-right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: any): number
    on(sigName: "notify::margin-start", callback: any): number
    once(sigName: "notify::margin-start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: any): number
    on(sigName: "notify::tooltip-markup", callback: any): number
    once(sigName: "notify::tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: any): number
    on(sigName: "notify::valign", callback: any): number
    once(sigName: "notify::valign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: any): number
    on(sigName: "notify::vexpand", callback: any): number
    once(sigName: "notify::vexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: any): number
    on(sigName: "notify::vexpand-set", callback: any): number
    once(sigName: "notify::vexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: any): number
    on(sigName: "notify::width-request", callback: any): number
    once(sigName: "notify::width-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebDAVDiscoverDialog extends Gtk.Dialog {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    static name: string

    // Constructors of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialog

    constructor(config?: WebDAVDiscoverDialog.ConstructorProperties) 
    /**
     * Creates a new #GtkDialog which has as its content a WebDAV discovery widget,
     * created with e_webdav_discover_content_new(). This dialog can be shown to a user
     * and when its final response is %GTK_RESPONSE_ACCEPT, then the inner content
     * can be asked for currently selected source(s).
     * @constructor 
     * @param parent a #GtkWindow parent for the dialog
     * @param title title of the window
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source an #ESource to use for authentication
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     */
    constructor(parent: Gtk.Window, title: string, credentialsPrompter: CredentialsPrompter, source: EDataServer.Source, baseUrl: string | null, supportsFilter: number) 
    /**
     * Creates a new #GtkDialog which has as its content a WebDAV discovery widget,
     * created with e_webdav_discover_content_new(). This dialog can be shown to a user
     * and when its final response is %GTK_RESPONSE_ACCEPT, then the inner content
     * can be asked for currently selected source(s).
     * @constructor 
     * @param parent a #GtkWindow parent for the dialog
     * @param title title of the window
     * @param credentialsPrompter an #ECredentialsPrompter to use to ask for credentials
     * @param source an #ESource to use for authentication
     * @param baseUrl optional base URL to use for discovery, or %NULL
     * @param supportsFilter a bit-or of #EWebDAVDiscoverSupports, a filter to limit what source    types will be shown in the dialog content; use %E_WEBDAV_DISCOVER_SUPPORTS_NONE    to show all
     */
    static new(parent: Gtk.Window, title: string, credentialsPrompter: CredentialsPrompter, source: EDataServer.Source, baseUrl: string | null, supportsFilter: number): WebDAVDiscoverDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you’re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called “popups”.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don’t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: WebDAVDiscoverDialog.ConstructorProperties): void
}

export interface CellRendererColorClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CellRendererColorClass

    parentClass: Gtk.CellRendererClass
}

export abstract class CellRendererColorClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColorClass

    static name: string
}

export interface CellRendererColorPrivate {
}

export class CellRendererColorPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CellRendererColorPrivate

    static name: string
}

export interface CredentialsPrompterClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterClass

    parentClass: GObject.ObjectClass
    getDialogParent: (prompter: CredentialsPrompter) => Gtk.Window | null
}

export abstract class CredentialsPrompterClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterClass

    static name: string
}

export interface CredentialsPrompterImplClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplClass

    parentClass: EDataServer.ExtensionClass
    authenticationMethods: string
    processPrompt: (prompterImpl: CredentialsPrompterImpl, promptId: object | null, authSource: EDataServer.Source, credSource: EDataServer.Source, errorText: string, credentials: EDataServer.NamedParameters) => void
    cancelPrompt: (prompterImpl: CredentialsPrompterImpl, promptId: object | null) => void
    promptFinished: (prompterImpl: CredentialsPrompterImpl, promptId: object | null, credentials: EDataServer.NamedParameters) => void
}

export abstract class CredentialsPrompterImplClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplClass

    static name: string
}

export interface CredentialsPrompterImplOAuth2Class {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Class

    parentClass: CredentialsPrompterImplClass
}

export abstract class CredentialsPrompterImplOAuth2Class {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Class

    static name: string
}

export interface CredentialsPrompterImplOAuth2Private {
}

export class CredentialsPrompterImplOAuth2Private {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplOAuth2Private

    static name: string
}

export interface CredentialsPrompterImplPasswordClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordClass

    parentClass: CredentialsPrompterImplClass
}

export abstract class CredentialsPrompterImplPasswordClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordClass

    static name: string
}

export interface CredentialsPrompterImplPasswordPrivate {
}

export class CredentialsPrompterImplPasswordPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPasswordPrivate

    static name: string
}

export interface CredentialsPrompterImplPrivate {
}

export class CredentialsPrompterImplPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterImplPrivate

    static name: string
}

export interface CredentialsPrompterPrivate {
}

export class CredentialsPrompterPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.CredentialsPrompterPrivate

    static name: string
}

export interface RemindersWidgetClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.RemindersWidgetClass

    changed: (reminders: RemindersWidget) => void
    activated: (reminders: RemindersWidget, rd: ECal.ReminderData) => boolean
}

/**
 * Class structure for the #ERemindersWidget class.
 * @record 
 */
export abstract class RemindersWidgetClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidgetClass

    static name: string
}

export interface RemindersWidgetPrivate {
}

export class RemindersWidgetPrivate {

    // Own properties of EDataServerUI-1.2.EDataServerUI.RemindersWidgetPrivate

    static name: string
}

export interface WebDAVDiscoverContentClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContentClass

    parentClass: Gtk.GridClass
}

export abstract class WebDAVDiscoverContentClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverContentClass

    static name: string
}

export interface WebDAVDiscoverDialogClass {

    // Own fields of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialogClass

    parentClass: Gtk.DialogClass
}

export abstract class WebDAVDiscoverDialogClass {

    // Own properties of EDataServerUI-1.2.EDataServerUI.WebDAVDiscoverDialogClass

    static name: string
}
