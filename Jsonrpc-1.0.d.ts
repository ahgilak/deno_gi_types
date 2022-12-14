
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Jsonrpc-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum ClientError {
    PARSE_ERROR,
    INVALID_REQUEST,
    METHOD_NOT_FOUND,
    INVALID_PARAMS,
    INTERNAL_ERROR,
}
/**
 * jsonrpc-glib major version component (e.g. 1 if %JSONRPC_VERSION is 1.2.3)
 */
export const MAJOR_VERSION: number
/**
 * jsonrpc-glib micro version component (e.g. 3 if %JSONRPC_VERSION is 1.2.3)
 */
export const MICRO_VERSION: number
/**
 * jsonrpc-glib minor version component (e.g. 2 if %JSONRPC_VERSION is 1.2.3)
 */
export const MINOR_VERSION: number
/**
 * jsonrpc-glib version, encoded as a string, useful for printing and
 * concatenation.
 */
export const VERSION_S: string
export interface ServerHandler {
    (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant): void
}
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `failed`
     */
    export interface FailedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `handle-call`
     */
    export interface HandleCallSignalCallback {
        (method: string, id: GLib.Variant, params: GLib.Variant | null): boolean
    }

    /**
     * Signal callback interface for `notification`
     */
    export interface NotificationSignalCallback {
        (method: string, params: GLib.Variant | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Jsonrpc-1.0.Jsonrpc.Client

        /**
         * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
         * with a JSON-RPC peer.
         */
        ioStream?: Gio.IOStream | null
        /**
         * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
         * communicate with the peer instead of JSON. You should only set this
         * if you know the peer is also a Jsonrpc-GLib based client.
         * 
         * Setting this property allows the peers to communicate using GVariant
         * instead of JSON. This means that we can access the messages without
         * expensive memory allocations and parsing costs associated with JSON.
         * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
         */
        useGvariant?: boolean | null
    }

}

export interface Client {

    // Own properties of Jsonrpc-1.0.Jsonrpc.Client

    /**
     * The "io-stream" property is the [class`Gio`.IOStream] to use for communicating
     * with a JSON-RPC peer.
     */
    readonly ioStream: Gio.IOStream
    /**
     * The "use-gvariant" property denotes if [struct`GLib`.Variant] should be used to
     * communicate with the peer instead of JSON. You should only set this
     * if you know the peer is also a Jsonrpc-GLib based client.
     * 
     * Setting this property allows the peers to communicate using GVariant
     * instead of JSON. This means that we can access the messages without
     * expensive memory allocations and parsing costs associated with JSON.
     * [struct`GLib`.Variant] is much more optimal for memory-bassed message passing.
     */
    useGvariant: boolean

    // Own fields of Jsonrpc-1.0.Jsonrpc.Client

    parentInstance: GObject.Object

    // Owm methods of Jsonrpc-1.0.Jsonrpc.Client

    /**
     * Synchronously calls `method` with `params` on the remote peer.
     * 
     * once a reply has been received, or failure, this function will return.
     * If successful, `return_value` will be set with the reslut field of
     * the response.
     * 
     * If `params` is floating then this function consumes the reference.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     */
    call(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* returnValue */ GLib.Variant | null ]
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * Upon completion or failure, `callback` is executed and it should
     * call [method`Client`.call_finish] to complete the request and release
     * any memory held.
     * 
     * If `params` is floating, the floating reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback a callback to executed upon completion
     */
    callAsync(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call to [method`Client`.call_async].
     * @param result A #GAsyncResult provided to the callback in [method`Client`.call_async]
     */
    callFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* returnValue */ GLib.Variant | null ]
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * Upon completion or failure, `callback` is executed and it should
     * call [method`Client`.call_finish] to complete the request and release
     * any memory held.
     * 
     * This function is similar to [method`Client`.call_async] except that
     * it allows the caller to get the id of the command which might be useful
     * in systems where you can cancel the operation (such as the Language
     * Server Protocol).
     * 
     * If `params` is floating, the floating reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback Callback to executed upon completion
     */
    callWithIdAsync(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): /* id */ GLib.Variant
    /**
     * Closes the underlying streams and cancels any inflight operations of the
     * #JsonrpcClient.
     * 
     * This is important to call when you are done with the
     * client so that any outstanding operations that have caused `self` to
     * hold additional references are cancelled.
     * 
     * Failure to call this method results in a leak of #JsonrpcClient.
     * @param cancellable 
     */
    close(cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of [method`Client`.close].
     * 
     * Currently this operation is implemented synchronously, but in the future may
     * be converted to using asynchronous operations.
     * @param cancellable 
     * @param callback 
     */
    closeAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous request of [method`Client`.close_async].
     * @param result 
     */
    closeFinish(result: Gio.AsyncResult): boolean
    /**
     * Gets the [property`Client:`use-gvariant] property.
     * 
     * Indicates if [struct`GLib`.Variant] is being used to communicate with the peer.
     */
    getUseGvariant(): boolean
    /**
     * Synchronous variant of [method`Client`.reply_async].
     * 
     * If `id` or `result` are floating, there floating references are consumed.
     * @param id The id of the message to reply
     * @param result The return value or %NULL
     * @param cancellable A #GCancellable, or %NULL
     */
    reply(id: GLib.Variant, result: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    replyAsync(id: GLib.Variant, result: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously replies to the peer, sending a JSON-RPC error message.
     * 
     * Call [method`Client`.reply_error_finish] to get the result of this operation.
     * 
     * If `id` is floating, it's floating reference is consumed.
     * @param id A [struct`GLib`.Variant] containing the call id
     * @param code The error code
     * @param message An optional error message
     * @param cancellable A #GCancellable, or %NULL
     * @param callback A #GAsyncReadyCallback or %NULL
     */
    replyErrorAsync(id: GLib.Variant, code: number, message: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    replyErrorFinish(result: Gio.AsyncResult): boolean
    /**
     * Completes an asynchronous request to [method`Client`.reply_async].
     * @param result A #GAsyncResult
     */
    replyFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously calls `method` with `params` on the remote peer.
     * 
     * This function will not wait or expect a reply from the peer.
     * 
     * If `params` is floating then the reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     */
    sendNotification(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously calls `method` with `params` on the remote peer.
     * 
     * This function will not wait or expect a reply from the peer.
     * 
     * This function is useful when the caller wants to be notified that
     * the bytes have been delivered to the underlying stream. This does
     * not indicate that the peer has received them.
     * 
     * If `params` is floating then the reference is consumed.
     * @param method The name of the method to call
     * @param params A [struct`GLib`.Variant] of parameters or %NULL
     * @param cancellable A #GCancellable or %NULL
     * @param callback 
     */
    sendNotificationAsync(method: string, params: GLib.Variant | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Completes an asynchronous call to [method`Client`.send_notification_async].
     * 
     * Successful completion of this function only indicates that the request
     * has been written to the underlying buffer, not that the peer has received
     * the notification.
     * @param result 
     */
    sendNotificationFinish(result: Gio.AsyncResult): boolean
    /**
     * Sets the [property`Client:`use-gvariant] property.
     * 
     * This function sets if [struct`GLib`.Variant] should be used to communicate with the
     * peer. Doing so can allow for more efficient communication by avoiding
     * expensive parsing overhead and memory allocations. However, it requires
     * that the peer also supports [struct`GLib`.Variant] encoding.
     * @param useGvariant If [struct`GLib`.Variant] should be used
     */
    setUseGvariant(useGvariant: boolean): void
    /**
     * This function requests that client start processing incoming
     * messages from the peer.
     */
    startListening(): void

    // Own virtual methods of Jsonrpc-1.0.Jsonrpc.Client

    failed(): void
    handleCall(method: string, id: GLib.Variant, params: GLib.Variant): boolean
    notification(methodName: string, params: GLib.Variant): void

    // Own signals of Jsonrpc-1.0.Jsonrpc.Client

    connect(sigName: "failed", callback: Client.FailedSignalCallback): number
    on(sigName: "failed", callback: Client.FailedSignalCallback): number
    once(sigName: "failed", callback: Client.FailedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "failed", ...args: any[]): void
    connect(sigName: "handle-call", callback: Client.HandleCallSignalCallback): number
    on(sigName: "handle-call", callback: Client.HandleCallSignalCallback): number
    once(sigName: "handle-call", callback: Client.HandleCallSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-call", id: GLib.Variant, params: GLib.Variant | null, ...args: any[]): void
    connect(sigName: "notification", callback: Client.NotificationSignalCallback): number
    on(sigName: "notification", callback: Client.NotificationSignalCallback): number
    once(sigName: "notification", callback: Client.NotificationSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "notification", params: GLib.Variant | null, ...args: any[]): void

    // Class property signals of Jsonrpc-1.0.Jsonrpc.Client

    connect(sigName: "notify::io-stream", callback: any): number
    on(sigName: "notify::io-stream", callback: any): number
    once(sigName: "notify::io-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::io-stream", ...args: any[]): void
    connect(sigName: "notify::use-gvariant", callback: any): number
    on(sigName: "notify::use-gvariant", callback: any): number
    once(sigName: "notify::use-gvariant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-gvariant", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A client for JSON-RPC communication
 * 
 * The #JsonrpcClient class provides a convenient API to coordinate with a
 * JSON-RPC server. You can provide the underlying [class`Gio`.IOStream] to communicate
 * with allowing you to control the negotiation of how you setup your
 * communications channel. One such method might be to use a [class`Gio`.Subprocess] and
 * communicate over stdin and stdout.
 * 
 * Because JSON-RPC allows for out-of-band notifications from the server to
 * the client, it is important that the consumer of this API calls
 * [method`Client`.close] or [method`Client`.close_async] when they no longer
 * need the client. This is because #JsonrpcClient contains an asynchronous
 * read-loop to process incoming messages. Until [method`Client`.close] or
 * [method`Client`.close_async] have been called, this read loop will prevent
 * the object from finalizing (being freed).
 * 
 * To make an RPC call, use [method`Client`.call] or
 * [method`Client`.call_async] and provide the method name and the parameters
 * as a [struct`GLib`.Variant] for call.
 * 
 * It is a programming error to mix synchronous and asynchronous API calls
 * of the #JsonrpcClient class.
 * 
 * For synchronous calls, #JsonrpcClient will use the thread-default
 * [struct`GLib`.MainContext]. If you have special needs here ensure you've set the context
 * before calling into any #JsonrpcClient API.
 * @class 
 */
export class Client extends GObject.Object {

    // Own properties of Jsonrpc-1.0.Jsonrpc.Client

    static name: string

    // Constructors of Jsonrpc-1.0.Jsonrpc.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new #JsonrpcClient instance.
     * 
     * If you want to communicate with a process using stdin/stdout, consider using
     * [class`Gio`.Subprocess] to launch the process and create a [class`Gio`.SimpleIOStream] using the
     * [method`Gio`.Subprocess.get_stdin_pipe] and [method`Gio`.Subprocess.get_stdout_pipe].
     * @constructor 
     * @param ioStream A [class`Gio`.IOStream]
     */
    constructor(ioStream: Gio.IOStream) 
    /**
     * Creates a new #JsonrpcClient instance.
     * 
     * If you want to communicate with a process using stdin/stdout, consider using
     * [class`Gio`.Subprocess] to launch the process and create a [class`Gio`.SimpleIOStream] using the
     * [method`Gio`.Subprocess.get_stdin_pipe] and [method`Gio`.Subprocess.get_stdout_pipe].
     * @constructor 
     * @param ioStream A [class`Gio`.IOStream]
     */
    static new(ioStream: Gio.IOStream): Client
    _init(config?: Client.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module InputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Gio.DataInputStream.ConstructorProperties {
    }

}

export interface InputStream extends Gio.Seekable {

    // Own fields of Jsonrpc-1.0.Jsonrpc.InputStream

    parentInstance: any

    // Owm methods of Jsonrpc-1.0.Jsonrpc.InputStream

    readMessage(cancellable: Gio.Cancellable | null, message: GLib.Variant): boolean
    readMessageAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readMessageFinish(result: Gio.AsyncResult, message: GLib.Variant): boolean

    // Class property signals of Jsonrpc-1.0.Jsonrpc.InputStream

    connect(sigName: "notify::byte-order", callback: any): number
    on(sigName: "notify::byte-order", callback: any): number
    once(sigName: "notify::byte-order", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::byte-order", ...args: any[]): void
    connect(sigName: "notify::newline-type", callback: any): number
    on(sigName: "notify::newline-type", callback: any): number
    once(sigName: "notify::newline-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::newline-type", ...args: any[]): void
    connect(sigName: "notify::buffer-size", callback: any): number
    on(sigName: "notify::buffer-size", callback: any): number
    once(sigName: "notify::buffer-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer-size", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: any): number
    on(sigName: "notify::close-base-stream", callback: any): number
    once(sigName: "notify::close-base-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputStream extends Gio.DataInputStream {

    // Own properties of Jsonrpc-1.0.Jsonrpc.InputStream

    static name: string

    // Constructors of Jsonrpc-1.0.Jsonrpc.InputStream

    constructor(config?: InputStream.ConstructorProperties) 
    constructor(baseStream: Gio.InputStream) 
    static new(baseStream: Gio.InputStream): InputStream

    // Overloads of new

    /**
     * Creates a new data input stream for the `base_stream`.
     * @constructor 
     * @param baseStream a #GInputStream.
     */
    static new(baseStream: Gio.InputStream): Gio.DataInputStream
    /**
     * Creates a new #GInputStream from the given `base_stream,` with
     * a buffer set to the default size (4 kilobytes).
     * @constructor 
     * @param baseStream a #GInputStream
     */
    static new(baseStream: Gio.InputStream): Gio.BufferedInputStream
    _init(config?: InputStream.ConstructorProperties): void
}

export module OutputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Gio.DataOutputStream.ConstructorProperties {

        // Own constructor properties of Jsonrpc-1.0.Jsonrpc.OutputStream

        useGvariant?: boolean | null
    }

}

export interface OutputStream extends Gio.Seekable {

    // Own properties of Jsonrpc-1.0.Jsonrpc.OutputStream

    useGvariant: boolean

    // Own fields of Jsonrpc-1.0.Jsonrpc.OutputStream

    parentInstance: any

    // Owm methods of Jsonrpc-1.0.Jsonrpc.OutputStream

    getUseGvariant(): boolean
    setUseGvariant(useGvariant: boolean): void
    /**
     * Synchronously sends a message to the peer.
     * 
     * This operation will complete once the message has been buffered. There
     * is no guarantee the peer received it.
     * @param message a #GVariant
     * @param cancellable a #GCancellable or %NULL
     */
    writeMessage(message: GLib.Variant, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously sends a message to the peer.
     * 
     * This asynchronous operation will complete once the message has
     * been buffered, and there is no guarantee the peer received it.
     * @param message a #GVariant
     * @param cancellable a #GCancellable or %NULL
     * @param callback a #GAsyncReadyCallback or %NULL
     */
    writeMessageAsync(message: GLib.Variant, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeMessageFinish(result: Gio.AsyncResult): boolean

    // Class property signals of Jsonrpc-1.0.Jsonrpc.OutputStream

    connect(sigName: "notify::use-gvariant", callback: any): number
    on(sigName: "notify::use-gvariant", callback: any): number
    once(sigName: "notify::use-gvariant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-gvariant", ...args: any[]): void
    connect(sigName: "notify::byte-order", callback: any): number
    on(sigName: "notify::byte-order", callback: any): number
    once(sigName: "notify::byte-order", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::byte-order", ...args: any[]): void
    connect(sigName: "notify::close-base-stream", callback: any): number
    on(sigName: "notify::close-base-stream", callback: any): number
    once(sigName: "notify::close-base-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::close-base-stream", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputStream extends Gio.DataOutputStream {

    // Own properties of Jsonrpc-1.0.Jsonrpc.OutputStream

    static name: string

    // Constructors of Jsonrpc-1.0.Jsonrpc.OutputStream

    constructor(config?: OutputStream.ConstructorProperties) 
    constructor(baseStream: Gio.OutputStream) 
    static new(baseStream: Gio.OutputStream): OutputStream

    // Overloads of new

    /**
     * Creates a new data output stream for `base_stream`.
     * @constructor 
     * @param baseStream a #GOutputStream.
     */
    static new(baseStream: Gio.OutputStream): Gio.DataOutputStream
    _init(config?: OutputStream.ConstructorProperties): void
}

export module Server {

    // Signal callback interfaces

    /**
     * Signal callback interface for `client-accepted`
     */
    export interface ClientAcceptedSignalCallback {
        (client: Client): void
    }

    /**
     * Signal callback interface for `client-closed`
     */
    export interface ClientClosedSignalCallback {
        (client: Client): void
    }

    /**
     * Signal callback interface for `handle-call`
     */
    export interface HandleCallSignalCallback {
        (client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
    }

    /**
     * Signal callback interface for `notification`
     */
    export interface NotificationSignalCallback {
        (client: Client, method: string, id: GLib.Variant): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Server {

    // Own fields of Jsonrpc-1.0.Jsonrpc.Server

    parentInstance: GObject.Object

    // Owm methods of Jsonrpc-1.0.Jsonrpc.Server

    /**
     * This function accepts `io_stream` as a new client to the #JsonrpcServer
     * by wrapping it in a #JsonrpcClient and starting the message accept
     * loop.
     * @param ioStream A #GIOStream
     */
    acceptIoStream(ioStream: Gio.IOStream): void
    /**
     * Adds a new handler that will be dispatched when a matching `method` arrives.
     * @param method A method to handle
     * @param handler A handler to   execute when an incoming method matches `methods`
     */
    addHandler(method: string, handler: ServerHandler): number
    /**
     * Calls `foreach_func` for every client connected.
     * @param foreachFunc A callback for each client
     */
    foreach(foreachFunc: GLib.Func): void
    /**
     * Removes a handler that was previously registered with [method`Server`.add_handler].
     * @param handlerId A handler returned from [method`Server`.add_handler]
     */
    removeHandler(handlerId: number): void

    // Own virtual methods of Jsonrpc-1.0.Jsonrpc.Server

    clientAccepted(client: Client): void
    clientClosed(client: Client): void
    handleCall(client: Client, method: string, id: GLib.Variant, params: GLib.Variant): boolean
    notification(client: Client, method: string, params: GLib.Variant): void

    // Own signals of Jsonrpc-1.0.Jsonrpc.Server

    connect(sigName: "client-accepted", callback: Server.ClientAcceptedSignalCallback): number
    on(sigName: "client-accepted", callback: Server.ClientAcceptedSignalCallback): number
    once(sigName: "client-accepted", callback: Server.ClientAcceptedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "client-accepted", ...args: any[]): void
    connect(sigName: "client-closed", callback: Server.ClientClosedSignalCallback): number
    on(sigName: "client-closed", callback: Server.ClientClosedSignalCallback): number
    once(sigName: "client-closed", callback: Server.ClientClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "client-closed", ...args: any[]): void
    connect(sigName: "handle-call", callback: Server.HandleCallSignalCallback): number
    on(sigName: "handle-call", callback: Server.HandleCallSignalCallback): number
    once(sigName: "handle-call", callback: Server.HandleCallSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "handle-call", method: string, id: GLib.Variant, params: GLib.Variant, ...args: any[]): void
    connect(sigName: "notification", callback: Server.NotificationSignalCallback): number
    on(sigName: "notification", callback: Server.NotificationSignalCallback): number
    once(sigName: "notification", callback: Server.NotificationSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "notification", method: string, id: GLib.Variant, ...args: any[]): void

    // Class property signals of Jsonrpc-1.0.Jsonrpc.Server

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A server for JSON-RPC communication
 * 
 * The #JsonrpcServer class can help you implement a JSON-RPC server. You can
 * accept connections and then communicate with clients using the
 * [class`Client]` API.
 * @class 
 */
export class Server extends GObject.Object {

    // Own properties of Jsonrpc-1.0.Jsonrpc.Server

    static name: string

    // Constructors of Jsonrpc-1.0.Jsonrpc.Server

    constructor(config?: Server.ConstructorProperties) 
    /**
     * Creates a new #JsonrpcServer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #JsonrpcServer.
     * @constructor 
     */
    static new(): Server
    _init(config?: Server.ConstructorProperties): void
}

export interface ClientClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.ClientClass

    parentClass: GObject.ObjectClass
    notification: (self: Client, methodName: string, params: GLib.Variant) => void
    handleCall: (self: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    failed: (self: Client) => void
    reserved2: object
    reserved3: object
    reserved4: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
}

export abstract class ClientClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.ClientClass

    static name: string
}

export interface InputStreamClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.InputStreamClass

    parentClass: Gio.DataInputStreamClass
    reserved1: object
    reserved2: object
    reserved3: object
    reserved4: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
}

export abstract class InputStreamClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.InputStreamClass

    static name: string
}

export interface MessageAny {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageAny

    magic: MessageMagic
}

export class MessageAny {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageAny

    static name: string
}

export interface MessageGetBoolean {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean

    magic: MessageMagic
    valptr: boolean
}

export class MessageGetBoolean {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetBoolean

    static name: string
}

export interface MessageGetDict {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetDict

    magic: MessageMagic
    dictptr: GLib.VariantDict
}

export class MessageGetDict {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetDict

    static name: string
}

export interface MessageGetDouble {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetDouble

    magic: MessageMagic
    valptr: number
}

export class MessageGetDouble {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetDouble

    static name: string
}

export interface MessageGetInt32 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt32

    magic: MessageMagic
    valptr: number
}

export class MessageGetInt32 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetInt32

    static name: string
}

export interface MessageGetInt64 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetInt64

    magic: MessageMagic
    valptr: number
}

export class MessageGetInt64 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetInt64

    static name: string
}

export interface MessageGetIter {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetIter

    magic: MessageMagic
}

export class MessageGetIter {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetIter

    static name: string
}

export interface MessageGetString {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetString

    magic: MessageMagic
    valptr: string
}

export class MessageGetString {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetString

    static name: string
}

export interface MessageGetStrv {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetStrv

    magic: MessageMagic
    valptr: string
}

export class MessageGetStrv {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetStrv

    static name: string
}

export interface MessageGetVariant {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageGetVariant

    magic: MessageMagic
    variantptr: GLib.Variant
}

export class MessageGetVariant {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageGetVariant

    static name: string
}

export interface MessageMagic {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessageMagic

    bytes: number[]
}

export class MessageMagic {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessageMagic

    static name: string
}

export interface MessagePutBoolean {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean

    magic: MessageMagic
    val: boolean
}

export class MessagePutBoolean {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutBoolean

    static name: string
}

export interface MessagePutDouble {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutDouble

    magic: MessageMagic
    val: number
}

export class MessagePutDouble {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutDouble

    static name: string
}

export interface MessagePutInt32 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt32

    magic: MessageMagic
    val: number
}

export class MessagePutInt32 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutInt32

    static name: string
}

export interface MessagePutInt64 {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutInt64

    magic: MessageMagic
    val: number
}

export class MessagePutInt64 {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutInt64

    static name: string
}

export interface MessagePutString {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutString

    magic: MessageMagic
    val: string
}

export class MessagePutString {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutString

    static name: string
}

export interface MessagePutStrv {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutStrv

    magic: MessageMagic
    val: string
}

export class MessagePutStrv {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutStrv

    static name: string
}

export interface MessagePutVariant {

    // Own fields of Jsonrpc-1.0.Jsonrpc.MessagePutVariant

    magic: MessageMagic
    val: GLib.Variant
}

export class MessagePutVariant {

    // Own properties of Jsonrpc-1.0.Jsonrpc.MessagePutVariant

    static name: string
}

export interface OutputStreamClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.OutputStreamClass

    parentClass: Gio.DataOutputStreamClass
    reserved1: object
    reserved2: object
    reserved3: object
    reserved4: object
    reserved5: object
    reserved6: object
    reserved7: object
    reserved8: object
    reserved9: object
    reserved10: object
    reserved11: object
    reserved12: object
}

export abstract class OutputStreamClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.OutputStreamClass

    static name: string
}

export interface ServerClass {

    // Own fields of Jsonrpc-1.0.Jsonrpc.ServerClass

    parentClass: GObject.ObjectClass
    handleCall: (self: Server, client: Client, method: string, id: GLib.Variant, params: GLib.Variant) => boolean
    notification: (self: Server, client: Client, method: string, params: GLib.Variant) => void
    clientAccepted: (self: Server, client: Client) => void
    clientClosed: (self: Server, client: Client) => void
}

export abstract class ServerClass {

    // Own properties of Jsonrpc-1.0.Jsonrpc.ServerClass

    static name: string
}
