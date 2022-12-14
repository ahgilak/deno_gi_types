
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Farstream-0.2
 */

import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * An enum for the type of candidate used/reported
 */
export enum CandidateType {
    /**
     * A host candidate (local)
     */
    HOST,
    /**
     * A server reflexive candidate.
     */
    SRFLX,
    /**
     * A peer reflexive candidate
     */
    PRFLX,
    /**
     * An relay candidate
     */
    RELAY,
    /**
     * A multicast address
     */
    MULTICAST,
}
/**
 * This enum contains the component IDs defined in ICE-19
 */
export enum ComponentType {
    /**
     * Use this when specifying a component is innapropriate
     */
    NONE,
    /**
     * This component is for RTP data
     */
    RTP,
    /**
     * This component is for RTCP control
     */
    RTCP,
}
/**
 * An enum that represents the different DTMF event that can be sent to a
 * #FsSession. The values corresponds those those defined in RFC 4733
 * The rest of the possibles values are in the IANA registry at:
 * http://www.iana.org/assignments/audio-telephone-event-registry
 */
export enum DTMFEvent {
    TODO_0,
    TODO_1,
    TODO_2,
    TODO_3,
    TODO_4,
    TODO_5,
    TODO_6,
    TODO_7,
    TODO_8,
    TODO_9,
    STAR,
    POUND,
    A,
    B,
    C,
    D,
}
/**
 * An enum that represents the different ways a DTMF event can be sent
 */
export enum DTMFMethod {
    /**
     * Send as a special payload type defined by RFC 4733
     * (which obsoletes RFC 2833)
     */
    RTP_RFC4733,
    /**
     * Send as tones as in-band audio sound
     */
    SOUND,
}
/**
 * This is the enum of error numbers that will come either on the "error"
 * signal, from the Gst Bus or for error in the FS_ERROR domain in GErrors
 */
export enum Error {
    /**
     * Error constructing some of the sub-elements, this
     * probably denotes an error in the installation of the gstreamer elements.
     * It is a fatal error.
     */
    CONSTRUCTION,
    /**
     * An internal error happened in Farstream, it may be in
     * an inconsistent state. The object from which this error comes should be
     * discarded.
     */
    INTERNAL,
    /**
     * Invalid arguments to the function, this
     * is a programming error and should not be reported to the user
     */
    INVALID_ARGUMENTS,
    /**
     * A network related error, this should probably be
     *  reported to the user.
     */
    NETWORK,
    /**
     * The optional functionality is not implemented by
     * this plugin.
     */
    NOT_IMPLEMENTED,
    /**
     * The codec negotiation has failed, this means
     * that there are no common codecs between the local and remote codecs.
     */
    NEGOTIATION_FAILED,
    /**
     * Data is received on an unknown codec, this most
     * likely denotes an error on the remote side, the buffers will be ignored.
     * It can safely be ignored in most cases (but may result in a call with no
     * media received).
     */
    UNKNOWN_CODEC,
    /**
     * There are no codecs detected for that media type.
     */
    NO_CODECS,
    /**
     * All of the codecs have been disabled by the
     * codec preferences, one should try less strict codec preferences.
     */
    NO_CODECS_LEFT,
    /**
     * Could not connect to the to remote party.
     */
    CONNECTION_FAILED,
    /**
     * The object has been disposed.
     */
    DISPOSED,
    /**
     * The object already exists
     */
    ALREADY_EXISTS,
}
/**
 * Enum used to signify the media type of a codec or stream.
 */
export enum MediaType {
    /**
     * A media type that encodes audio.
     */
    AUDIO,
    /**
     * A media type that encodes video.
     */
    VIDEO,
    /**
     * A media type for application data.
     */
    APPLICATION,
    /**
     * Largest valid #FsMediaType
     */
    LAST,
}
/**
 * An enum for the base IP protocol
 */
export enum NetworkProtocol {
    /**
     * A UDP based protocol
     */
    UDP,
    /**
     * A TCP based protocol, will listen for
     * incoming connections
     */
    TCP,
    /**
     * A TCP based protocol, will listen for
     * incoming connections
     */
    TCP_PASSIVE,
    /**
     * A TCP based protocol, will attempt to
     * open an outbound connection
     */
    TCP_ACTIVE,
    /**
     * A TCP based protocol, will listen for
     * incoming connections and attempt an outbound connection at the same time
     * as the peer (Simultanuous-Open)
     */
    TCP_SO,
}
/**
 * These are the possible states of a stream, a simple multicast stream
 * could only be in "disconnected" or "ready" state.
 * An stream using an ICE transmitter would use all of these.
 */
export enum StreamState {
    /**
     * connectivity checks have been completed,
     *                          but connectivity was not established
     */
    FAILED,
    /**
     * no activity scheduled
     */
    DISCONNECTED,
    /**
     * gathering local candidates
     */
    GATHERING,
    /**
     * establishing connectivity
     */
    CONNECTING,
    /**
     * at least one working candidate pair
     */
    CONNECTED,
    /**
     * ICE concluded, candidate pair selection is now final
     */
    READY,
}
/**
 * An enum for specifying the direction of a stream
 * @bitfield 
 */
export enum StreamDirection {
    /**
     * No direction specified
     */
    NONE,
    /**
     * Send only
     */
    SEND,
    /**
     * Receive only
     */
    RECV,
    /**
     * Send and receive
     */
    BOTH,
}
/**
 * A format that can be used in printf like format strings to format a FsCodec
 */
export const CODEC_FORMAT: string
/**
 * If the id of a #FsCodec is #FS_CODEC_ID_ANY, then it will be replaced
 * with a dynamic payload type at runtime
 */
export const CODEC_ID_ANY: number
/**
 * If the id of a #FsCodec is #FS_CODEC_ID_DISABLE, then this codec will
 * not be used
 */
export const CODEC_ID_DISABLE: number
/**
 * A format that can be used in printf like format strings to format a
 * FsRtpHeaderExtension
 */
export const RTP_HEADER_EXTENSION_FORMAT: string
/**
 * Copies a GList of #FsCandidate and its contents
 * @param candidateList A GList of #FsCandidate
 */
export function candidateListCopy(candidateList: Codec[]): Codec[]
/**
 * Verifies if two glist of fscodecs are identical
 * @param list1 a #GList of #FsCodec
 * @param list2 a #GList of #FsCodec
 */
export function codecListAreEqual(list1: Codec[] | null, list2: Codec[] | null): boolean
/**
 * Copies a list of #FsCodec structures.
 * @param codecList    a GList of #FsCodec to copy
 */
export function codecListCopy(codecList: Codec[]): Codec[]
/**
 * Reads the content of a #GKeyFile of the following format into
 * a #GList of #FsCodec structures.
 * 
 * 
 * Example:
 * |[
 * [audio/codec1]
 * clock-rate=8000
 * 
 * [audio/codec1:1]
 * clock-rate=16000
 * 
 * [audio/codec2]
 * one_param=QCIF
 * another_param=WOW
 * 
 * [video/codec3]
 * wierd_param=42
 * feedback:nack/pli=1
 * feedback:tfrc=
 * ```
 * 
 * @param filename Name of the #GKeyFile to read the codecs parameters from
 */
export function codecListFromKeyfile(filename: string): Codec[]
export function errorQuark(): GLib.Quark
/**
 * Gives a user-printable string representing the media type
 * @param mediaType A media type
 */
export function mediaTypeToString(mediaType: MediaType): string
/**
 * Parses a "farstream-farstream" message and checks if it matches
 * the `object` parameters.
 * @param object a #GObject to match against the message
 * @param message a #GstMessage to parse
 */
export function parseError(object: GObject.Object, message: Gst.Message): [ /* returnType */ boolean, /* error */ Error, /* errorMsg */ string ]
/**
 * Does a deep copy of a #GList of #FsRtpHeaderExtension
 * @param extensions    a #GList of #FsRtpHeaderExtension
 */
export function rtpHeaderExtensionListCopy(extensions: RtpHeaderExtension[]): RtpHeaderExtension[]
/**
 * Reads the content of a #GKeyFile of the following format into a
 * #GList of #FsRtpHeaderExtension structures.
 * 
 * The groups have a format "rtp-hdrext:audio:XXX" or
 * "rtp-hdrext:video:XXX" where XXX is a unique string (per media type).
 * 
 * The valid keys are:
 * <itemizedlist>
 *  <listitem>id: a int between in the 1-255 and 4096-4351 ranges</listitem>
 *  <listitem>uri: a URI describing the RTP Header Extension</listitem>
 *  <listitem>direction (optional): To only send or receive a RTP Header
 *      Extension, possible values are "send", "receive", "none" or "both".
 *      Defaults to "both"</listitem>
 * </itemizedlist>
 * 
 * Example:
 * |[
 * [rtp-hdrext:audio:a]
 * id=1
 * uri=urn:ietf:params:rtp-hdrext:toffset
 * 
 * [rtp-hdrext:audio:abc]
 * id=3
 * uri=urn:ietf:params:rtp-hdrext:ntp-64
 * direction=receive
 * ```
 * 
 * @param filename Name of the #GKeyFile to read the RTP Header Extensions from
 * @param mediaType The media type for which to get header extensions
 */
export function rtpHeaderExtensionListFromKeyfile(filename: string, mediaType: MediaType): RtpHeaderExtension[]
/**
 * These default codec preferences should work with the elements that are
 * available in the main GStreamer element repositories.
 * They should be suitable for standards based protocols like SIP or XMPP.
 * @param element Element for which to fetch default codec preferences
 */
export function utilsGetDefaultCodecPreferences(element: Gst.Element): Codec[]
/**
 * These default rtp header extension preferences should work with the elements
 * that are available in the main GStreamer element repositories.
 * They should be suitable for standards based protocols like SIP or XMPP.
 * @param element Element for which to fetch default RTP Header Extension preferences
 * @param mediaType The #FsMediaType for which to get default RTP Header Extension  preferences
 */
export function utilsGetDefaultRtpHeaderExtensionPreferences(element: Gst.Element, mediaType: MediaType): Codec[]
/**
 * This allows setting the bitrate on all elements that have a "bitrate"
 * property without having to know the type or of the unit used by that element.
 * 
 * This will be obsolete in 0.11 (when all elements use bit/sec for the
 * "bitrate" property.
 * @param element The #GstElement
 * @param bitrate The bitrate in bits/sec
 */
export function utilsSetBitrate(element: Gst.Element, bitrate: number): void
/**
 * This is for the bindings benefit. Works around the limitations of GObject
 * introspection.
 * @param value a #GValue of type #FS_TYPE_CANDIDATE_LIST
 * @param candidates A #GList of #FsCandidate
 */
export function valueSetCandidateList(value: any, candidates: Candidate[] | null): void
export module Conference {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.ChildProxy.ConstructorProperties, Gst.Bin.ConstructorProperties {
    }

}

export interface Conference extends Gst.ChildProxy {

    // Conflicting properties

    object: any

    // Own fields of Farstream-0.2.Farstream.Conference

    parent: Gst.Bin & Gst.Object

    // Owm methods of Farstream-0.2.Farstream.Conference

    // Has conflict: newParticipant(): Participant
    // Has conflict: newSession(mediaType: MediaType): Session

    // Conflicting methods

    /**
     * Gets a single property using the GstChildProxy mechanism.
     * You are responsible for freeing it by calling g_value_unset()
     * @param name name of the property
     */
    getProperty(name: string): /* value */ any

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Sets a single property using the GstChildProxy mechanism.
     * @param name name of the property to set
     * @param value new #GValue for the property
     */
    setProperty(name: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Increments the reference count on `object`. This function
     * does not take the lock on `object` because it relies on
     * atomic refcounting.
     * 
     * This object returns the input parameter to ease writing
     * constructs like :
     *  result = gst_object_ref (object->parent);
     */
    ref(): Gst.Object

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Own virtual methods of Farstream-0.2.Farstream.Conference

    /**
     * Create a new Farstream Participant for the type of the given conference.
     * @virtual 
     */
    newParticipant(): Participant
    /**
     * Create a new Farstream session for the given conference.
     * @virtual 
     * @param mediaType #FsMediaType of the new session
     */
    newSession(mediaType: MediaType): Session

    // Class property signals of Farstream-0.2.Farstream.Conference

    connect(sigName: "notify::async-handling", callback: any): number
    on(sigName: "notify::async-handling", callback: any): number
    once(sigName: "notify::async-handling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::async-handling", ...args: any[]): void
    connect(sigName: "notify::message-forward", callback: any): number
    on(sigName: "notify::message-forward", callback: any): number
    once(sigName: "notify::message-forward", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message-forward", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #FsConference structure, all the members are private
 * @class 
 */
export class Conference extends Gst.Bin {

    // Own properties of Farstream-0.2.Farstream.Conference

    static name: string

    // Constructors of Farstream-0.2.Farstream.Conference

    constructor(config?: Conference.ConstructorProperties) 
    _init(config?: Conference.ConstructorProperties): void
}

export module ElementAddedNotifier {

    // Signal callback interfaces

    /**
     * Signal callback interface for `element-added`
     */
    export interface ElementAddedSignalCallback {
        (bin: Gst.Bin, element: Gst.Element): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ElementAddedNotifier {

    // Own fields of Farstream-0.2.Farstream.ElementAddedNotifier

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.ElementAddedNotifier

    /**
     * Add a #GstBin to on which the #FsElementAddedNotifier::element-added signal
     * will be called on every element and sub-element present and added in the
     * future.
     * @param bin A #GstBin to watch to added elements
     */
    add(bin: Gst.Bin): void
    /**
     * Stop watching the passed bin and its subbins.
     * @param bin A #GstBin to stop watching
     */
    remove(bin: Gst.Bin): boolean
    /**
     * Same as first calling fs_utils_get_default_element_properties() and using
     * the result with
     * fs_element_added_notifier_set_properties_from_keyfile() .
     * 
     * This is binding friendly (since GKeyFile doesn't have a boxed type).
     * @param element Element for which to set the default codec   preferences
     */
    setDefaultProperties(element: Gst.Element): number
    /**
     * Same as fs_element_added_notifier_set_properties_from_keyfile() but using
     * the name of the file to load instead of the #GKeyFile directly.
     * @param filename The name of the keyfile to use
     */
    setPropertiesFromFile(filename: string): boolean
    /**
     * Using a #GKeyFile where the groups are the element's type or name
     * and the key=value are the property and its value, this function
     * will set the properties on the elements added to this object after
     * this function has been called.  It will take ownership of the
     * GKeyFile structure. It will first try the group as the element type, if that
     * does not match, it will check its name.
     * @param keyfile a #GKeyFile
     */
    setPropertiesFromKeyfile(keyfile: GLib.KeyFile): number

    // Own signals of Farstream-0.2.Farstream.ElementAddedNotifier

    connect(sigName: "element-added", callback: ElementAddedNotifier.ElementAddedSignalCallback): number
    on(sigName: "element-added", callback: ElementAddedNotifier.ElementAddedSignalCallback): number
    once(sigName: "element-added", callback: ElementAddedNotifier.ElementAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "element-added", element: Gst.Element, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.ElementAddedNotifier

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private
 * @class 
 */
export class ElementAddedNotifier extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.ElementAddedNotifier

    static name: string

    // Constructors of Farstream-0.2.Farstream.ElementAddedNotifier

    constructor(config?: ElementAddedNotifier.ConstructorProperties) 
    /**
     * Creates a new #FsElementAddedNotifier object
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #FsElementAddedNotifier object
     * @constructor 
     */
    static new(): ElementAddedNotifier
    _init(config?: ElementAddedNotifier.ConstructorProperties): void
}

export module Participant {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Participant {

    // Own fields of Farstream-0.2.Farstream.Participant

    parent: GObject.Object

    // Class property signals of Farstream-0.2.Farstream.Participant

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private (access them using the properties)
 * @class 
 */
export class Participant extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Participant

    static name: string

    // Constructors of Farstream-0.2.Farstream.Participant

    constructor(config?: Participant.ConstructorProperties) 
    _init(config?: Participant.ConstructorProperties): void
}

export module Plugin {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.TypePlugin.ConstructorProperties, GObject.TypeModule.ConstructorProperties {
    }

}

export interface Plugin extends GObject.TypePlugin {

    // Own fields of Farstream-0.2.Farstream.Plugin

    /**
     * the parent object
     * @field 
     */
    parent: GObject.TypeModule

    // Conflicting methods

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void
    /**
     * Increases the use count of a #GTypeModule by one. If the
     * use count was zero before, the plugin will be loaded.
     * If loading the plugin fails, the use count is reset to
     * its prior value.
     */
    use(): boolean

    // Overloads of use

    /**
     * Calls the `use_plugin` function from the #GTypePluginClass of
     * `plugin`.  There should be no need to use this function outside of
     * the GObject type system itself.
     */
    use(): void

    // Class property signals of Farstream-0.2.Farstream.Plugin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * This structure represents a plugin, it is opaque.
 * @class 
 */
export class Plugin extends GObject.TypeModule {

    // Own properties of Farstream-0.2.Farstream.Plugin

    static name: string

    // Constructors of Farstream-0.2.Farstream.Plugin

    constructor(config?: Plugin.ConstructorProperties) 
    _init(config?: Plugin.ConstructorProperties): void
    /**
     * Gets the list of all available plugins of a certain type
     * @param typeSuffix Get list of plugins with this type suffix
     */
    static listAvailable(typeSuffix: string): string[]
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (object: GObject.Object, errorNo: Error, errorMsg: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.Session

        /**
         * The #FsConference parent of this session. This property is a
         * construct param and is read-only.
         */
        conference?: Conference | null
        /**
         * The ID of the session, the first number of the pads linked to this session
         * will be this id
         */
        id?: number | null
        /**
         * The media-type of the session. This is either Audio, Video or both.
         * This is a constructor parameter that cannot be changed.
         */
        mediaType?: MediaType | null
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        tos?: number | null
    }

}

export interface Session {

    // Own properties of Farstream-0.2.Farstream.Session

    /**
     * These are the #GstCaps that can be fed into the session,
     * they are used to filter the codecs to only those that can
     * accepted those caps as input.
     */
    readonly allowedSinkCaps: Gst.Caps
    /**
     * These are the #GstCaps that the session can produce,
     * they are used to filter the codecs to only those that can
     * accepted those caps as output.
     */
    readonly allowedSrcCaps: Gst.Caps
    /**
     * This is the current preferences list for the local codecs. It is
     * set by the user to specify the codec options and priorities. The user may
     * change its value with fs_session_set_codec_preferences() at any time
     * during a session. It is a #GList of #FsCodec.
     * The user must free this codec list using fs_codec_list_destroy() when done.
     * 
     * The payload type may be a valid dynamic PT (96-127), %FS_CODEC_ID_DISABLE
     * or %FS_CODEC_ID_ANY. If the encoding name is "reserve-pt", then the
     * payload type of the codec will be "reserved" and not be used by any
     * dynamically assigned payload type.
     */
    readonly codecPreferences: Codec[]
    /**
     * This is the list of codecs used for this session. It will include the
     * codecs and payload type used to receive media on this session. It will
     * also include any configuration parameter that must be transmitted reliably
     * for the other end to decode the content.
     * 
     * It may change when the codec preferences are set, when codecs are set
     * on a #FsStream in this session, when a #FsStream is destroyed or
     * asynchronously when new config data is discovered.
     * 
     * If any configuration parameter needs to be discovered, this property
     * will be %NULL until they have been discovered. One can always get
     * the codecs from #FsSession:codecs-without-config.
     * The "farstream-codecs-changed" message will be emitted whenever the value
     * of this property changes.
     * 
     * It is a #GList of #FsCodec. User must free this codec list using
     * fs_codec_list_destroy() when done.
     */
    readonly codecs: Codec[]
    /**
     * This is the same list of codecs as #FsSession:codecs without
     * the configuration information that describes the data sent. It is suitable
     * for configurations where a list of codecs is shared by many senders.
     * If one is using codecs such as Theora, Vorbis or H.264 that require
     * such information to be transmitted, the configuration data should be
     * included in the stream and retransmitted regularly.
     * 
     * It may change when the codec preferences are set, when codecs are set
     * on a #FsStream in this session, when a #FsStream is destroyed or
     * asynchronously when new config data is discovered.
     * 
     * The "farstream-codecs-changed" message will be emitted whenever the value
     * of this property changes.
     * 
     * It is a #GList of #FsCodec. User must free this codec list using
     * fs_codec_list_destroy() when done.
     */
    readonly codecsWithoutConfig: Codec[]
    /**
     * The #FsConference parent of this session. This property is a
     * construct param and is read-only.
     */
    readonly conference: Conference
    /**
     * Indicates the currently active send codec. A user can change the active
     * send codec by calling fs_session_set_send_codec(). The send codec could
     * also be automatically changed by Farstream. This property is an
     * #FsCodec. User must free the codec using fs_codec_destroy() when done.
     * The "farstream-send-codec-changed" message is emitted on the bus when
     * the value of this property changes.
     */
    readonly currentSendCodec: Codec
    /**
     * Retrieves previously set encryption parameters
     */
    readonly encryptionParameters: Gst.Structure
    /**
     * The ID of the session, the first number of the pads linked to this session
     * will be this id
     */
    readonly id: number
    /**
     * The media-type of the session. This is either Audio, Video or both.
     * This is a constructor parameter that cannot be changed.
     */
    readonly mediaType: MediaType
    /**
     * The Gstreamer sink pad that must be used to send media data on this
     * session. User must unref this GstPad when done with it.
     */
    readonly sinkPad: Gst.Pad
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos: number

    // Own fields of Farstream-0.2.Farstream.Session

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.Session

    // Has conflict: codecsNeedResend(oldCodecs: Codec[] | null, newCodecs: Codec[] | null): Codec[]
    /**
     * This will cause the session to remove all links to other objects and to
     * remove itself from the #FsConference, it will also destroy all #FsStream
     * inside this #FsSession Once a #FsSession has been destroyed, it
     * can not be used anymore.
     * 
     * It is strongly recommended to call this function from the main thread because
     * releasing the application's reference to a session.
     */
    destroy(): void
    /**
     * This function emit the "error" signal on a #FsSession, it should only be
     * called by subclasses.
     * @param errorNo The number of the error of type #FsError
     * @param errorMsg Error message
     */
    emitError(errorNo: number, errorMsg: string): void
    // Has conflict: getStreamTransmitterType(transmitter: string): GObject.GType
    // Has conflict: listTransmitters(): string[]
    // Has conflict: newStream(participant: Participant, direction: StreamDirection): Stream
    /**
     * Parses a "farstream-codecs-changed" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parseCodecsChanged(message: Gst.Message): boolean
    /**
     * Parses a "farstream-send-codec-changed" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parseSendCodecChanged(message: Gst.Message): [ /* returnType */ boolean, /* codec */ Codec, /* secondaryCodecs */ Codec[] ]
    /**
     * Parses a "farstream-telephony-event-started" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parseTelephonyEventStarted(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod, /* event */ DTMFEvent, /* volume */ number ]
    /**
     * Parses a "farstream-telephony-event-stopped" message and checks if it matches
     * the `session` parameters.
     * @param message a #GstMessage to parse
     */
    parseTelephonyEventStopped(message: Gst.Message): [ /* returnType */ boolean, /* method */ DTMFMethod ]
    // Has conflict: setAllowedCaps(sinkCaps: Gst.Caps | null, srcCaps: Gst.Caps | null): boolean
    // Has conflict: setCodecPreferences(codecPreferences: Codec[] | null): boolean
    // Has conflict: setEncryptionParameters(parameters: Gst.Structure | null): boolean
    // Has conflict: setSendCodec(sendCodec: Codec): boolean
    // Has conflict: startTelephonyEvent(event: number, volume: number): boolean
    // Has conflict: stopTelephonyEvent(): boolean

    // Own virtual methods of Farstream-0.2.Farstream.Session

    /**
     * Some codec updates need to be reliably transmitted to the other side
     * because they contain important parameters required to decode the media.
     * Other codec updates, caused by user action, don't.
     * @virtual 
     * @param oldCodecs   Codecs previously retrieved from the #FsSession:codecs property
     * @param newCodecs    Codecs recently retrieved from the #FsSession:codecs property
     */
    codecsNeedResend(oldCodecs: Codec[] | null, newCodecs: Codec[] | null): Codec[]
    /**
     * Returns the GType of the stream transmitter, bindings can use it
     * to validate/convert the parameters passed to fs_session_new_stream().
     * @virtual 
     * @param transmitter The name of the transmitter
     */
    getStreamTransmitterType(transmitter: string): GObject.GType
    /**
     * Get the list of all available transmitters for this session.
     * @virtual 
     */
    listTransmitters(): string[]
    /**
     * This function creates a stream for the given participant into the active session.
     * @virtual 
     * @param participant #FsParticipant of a participant for the new stream
     * @param direction #FsStreamDirection describing the direction of the new stream that will be created for this participant
     */
    newStream(participant: Participant, direction: StreamDirection): Stream
    /**
     * Sets the allowed caps for the sink and source pads for this #FsSession.
     * Only codecs that can take the input specified by the `sink_caps` and
     * can produce output as specified by the `src_caps` will be produced
     * in the #FsSession:codecs property and so only those will be negotiated.
     * 
     * If %NULL is passed to either `src_caps` or `sink_caps,` it is not changed.
     * 
     * The default is "video/x-raw" for a video stream, "audio/x-raw" for an audio
     * stream and "ANY" for an application stream.
     * 
     * The values can be retrived using the #FsSession:allowed-src-caps and
     * #FsSession:allowed-sink-caps properties.
     * @virtual 
     * @param sinkCaps Caps for the sink pad or %NULL
     * @param srcCaps Caps for the src pad or %NULL
     */
    setAllowedCaps(sinkCaps: Gst.Caps | null, srcCaps: Gst.Caps | null): boolean
    /**
     * Set the list of desired codec preferences. The user may
     * change this value during an ongoing session. Note that doing this can cause
     * the codecs to change. Therefore this requires the user to fetch
     * the new codecs and renegotiate them with the peers. It is a #GList
     * of #FsCodec. The changes are immediately effective.
     * The function does not take ownership of the list.
     * 
     * The payload type may be a valid dynamic PT (96-127), %FS_CODEC_ID_DISABLE
     * or %FS_CODEC_ID_ANY. If the encoding name is "reserve-pt", then the
     * payload type of the codec will be "reserved" and not be used by any
     * dynamically assigned payload type.
     * 
     * If the list of specifications would invalidate all codecs, an error will
     * be returned.
     * @virtual 
     * @param codecPreferences a #GList of #FsCodec with the   desired configuration
     */
    setCodecPreferences(codecPreferences: Codec[] | null): boolean
    /**
     * Sets encryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @virtual 
     * @param parameters a #GstStructure containing the   encryption  parameters or %NULL to disable encryption
     */
    setEncryptionParameters(parameters: Gst.Structure | null): boolean
    /**
     * This function will set the currently being sent codec for all streams in this
     * session. The given #FsCodec must be taken directly from the #codecs
     * property of the session. If the given codec is not in the codecs
     * list, `error` will be set and %FALSE will be returned. The `send_codec` will be
     * copied so it must be free'd using fs_codec_destroy() when done.
     * @virtual 
     * @param sendCodec a #FsCodec representing the codec to send
     */
    setSendCodec(sendCodec: Codec): boolean
    /**
     * This function will start sending a telephony event (such as a DTMF
     * tone) on the #FsSession. You have to call the function
     * fs_session_stop_telephony_event() to stop it.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-started" will
     * always be emitted when the event is actually played out.
     * @virtual 
     * @param event A #FsStreamDTMFEvent or another number defined at http://www.iana.org/assignments/audio-telephone-event-registry
     * @param volume The volume in dBm0 without the negative sign. Should be between 0 and 36. Higher values mean lower volume
     */
    startTelephonyEvent(event: number, volume: number): boolean
    /**
     * This function will stop sending a telephony event started by
     * fs_session_start_telephony_event(). If the event was being sent
     * for less than 50ms, it will be sent for 50ms minimum. If the
     * duration was a positive and the event is not over, it will cut it
     * short.
     * 
     * If this function returns %TRUE, a "farstream-telephony-event-stopped" will
     * always be emitted when the event is actually stopped.
     * @virtual 
     */
    stopTelephonyEvent(): boolean

    // Own signals of Farstream-0.2.Farstream.Session

    connect(sigName: "error", callback: Session.ErrorSignalCallback): number
    on(sigName: "error", callback: Session.ErrorSignalCallback): number
    once(sigName: "error", callback: Session.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", errorNo: Error, errorMsg: string, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.Session

    connect(sigName: "notify::allowed-sink-caps", callback: any): number
    on(sigName: "notify::allowed-sink-caps", callback: any): number
    once(sigName: "notify::allowed-sink-caps", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allowed-sink-caps", ...args: any[]): void
    connect(sigName: "notify::allowed-src-caps", callback: any): number
    on(sigName: "notify::allowed-src-caps", callback: any): number
    once(sigName: "notify::allowed-src-caps", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allowed-src-caps", ...args: any[]): void
    connect(sigName: "notify::codec-preferences", callback: any): number
    on(sigName: "notify::codec-preferences", callback: any): number
    once(sigName: "notify::codec-preferences", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::codec-preferences", ...args: any[]): void
    connect(sigName: "notify::codecs", callback: any): number
    on(sigName: "notify::codecs", callback: any): number
    once(sigName: "notify::codecs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::codecs", ...args: any[]): void
    connect(sigName: "notify::codecs-without-config", callback: any): number
    on(sigName: "notify::codecs-without-config", callback: any): number
    once(sigName: "notify::codecs-without-config", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::codecs-without-config", ...args: any[]): void
    connect(sigName: "notify::conference", callback: any): number
    on(sigName: "notify::conference", callback: any): number
    once(sigName: "notify::conference", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::conference", ...args: any[]): void
    connect(sigName: "notify::current-send-codec", callback: any): number
    on(sigName: "notify::current-send-codec", callback: any): number
    once(sigName: "notify::current-send-codec", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-send-codec", ...args: any[]): void
    connect(sigName: "notify::encryption-parameters", callback: any): number
    on(sigName: "notify::encryption-parameters", callback: any): number
    once(sigName: "notify::encryption-parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::encryption-parameters", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::media-type", callback: any): number
    on(sigName: "notify::media-type", callback: any): number
    once(sigName: "notify::media-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::media-type", ...args: any[]): void
    connect(sigName: "notify::sink-pad", callback: any): number
    on(sigName: "notify::sink-pad", callback: any): number
    once(sigName: "notify::sink-pad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink-pad", ...args: any[]): void
    connect(sigName: "notify::tos", callback: any): number
    on(sigName: "notify::tos", callback: any): number
    once(sigName: "notify::tos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class Session extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Session

    static name: string

    // Constructors of Farstream-0.2.Farstream.Session

    constructor(config?: Session.ConstructorProperties) 
    _init(config?: Session.ConstructorProperties): void
}

export module Stream {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (errorno: Error, errorMsg: string): void
    }

    /**
     * Signal callback interface for `src-pad-added`
     */
    export interface SrcPadAddedSignalCallback {
        (pad: Gst.Pad, codec: Codec): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.Stream

        /**
         * The direction of the stream. This property is set initially as a parameter
         * to the fs_session_new_stream() function. It can be changed later if
         * required by setting this property.
         */
        direction?: StreamDirection | null
        /**
         * The #FsParticipant for this stream. This property is a construct param and
         * is read-only construction.
         */
        participant?: Participant | null
        /**
         * The #FsSession for this stream. This property is a construct param and
         * is read-only construction.
         */
        session?: Session | null
    }

}

export interface Stream {

    // Own properties of Farstream-0.2.Farstream.Stream

    /**
     * This is the list of codecs that have been received by this stream.
     * The user must free the list if fs_codec_list_destroy().
     * The "farstream-recv-codecs-changed" message is send on the #GstBus
     * when the value of this property changes.
     * It is normally emitted right after #FsStream::src-pad-added
     * only if that codec was not previously received in this stream, but it can
     * also be emitted if the pad already exists, but the source material that
     * will come to it is different.
     */
    readonly currentRecvCodecs: Codec[]
    /**
     * Retrieves previously set decryption parameters
     */
    readonly decryptionParameters: Gst.Structure
    /**
     * The direction of the stream. This property is set initially as a parameter
     * to the fs_session_new_stream() function. It can be changed later if
     * required by setting this property.
     */
    direction: StreamDirection
    /**
     * This is the list of negotiatied codecs, it is the same list as the list
     * of #FsCodec from the parent #FsSession, except that the codec config data
     * has been replaced with the data from the remote codecs for this stream.
     * This is the list of #FsCodec used to receive data from this stream.
     * It is a #GList of #FsCodec.
     */
    readonly negotiatedCodecs: Codec[]
    /**
     * The #FsParticipant for this stream. This property is a construct param and
     * is read-only construction.
     */
    readonly participant: Participant
    /**
     * This is the list of remote codecs for this stream. They must be set by the
     * user as soon as they are known using fs_stream_set_remote_codecs()
     * (generally through external signaling). It is a #GList of #FsCodec.
     */
    readonly remoteCodecs: Codec[]
    /**
     * The #FsSession for this stream. This property is a construct param and
     * is read-only construction.
     */
    readonly session: Session

    // Own fields of Farstream-0.2.Farstream.Stream

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.Stream

    // Has conflict: addId(id: number): void
    // Has conflict: addRemoteCandidates(candidates: Candidate[]): boolean
    /**
     * This will cause the stream to remove all links to other objects and to
     * remove itself from the #FsSession. Once a #FsStream has been destroyed, it
     * can not be used anymore.
     * 
     * It is strongly recommended to call this function from the main thread because
     * releasing the application's reference to a stream.
     */
    destroy(): void
    /**
     * This function emits the #FsStream::error" signal, it should only be
     * called by subclasses.
     * @param errorNo The number of the error
     * @param errorMsg Error message to be displayed to user
     */
    emitError(errorNo: number, errorMsg: string): void
    /**
     * Emits the #FsStream::src-pad-added" signal, it should only be
     * called by subclasses.
     * @param pad the #GstPad that this #FsStream has created
     * @param codec The #FsCodec for this pad
     */
    emitSrcPadAdded(pad: Gst.Pad, codec: Codec): void
    // Has conflict: forceRemoteCandidates(remoteCandidates: Candidate[]): boolean
    /**
     * Creates a #GstIterator that can be used to iterate the src pads of this
     * stream. These are the pads that were announced by #FsStream:src-pad-added
     * and are still valid.
     */
    iterateSrcPads(): Gst.Iterator
    /**
     * Parses a "farstream-component-state-changed" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parseComponentStateChanged(message: Gst.Message): [ /* returnType */ boolean, /* component */ number, /* state */ StreamState ]
    /**
     * Parses a "farstream-local-candidates-prepared" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parseLocalCandidatesPrepared(message: Gst.Message): boolean
    /**
     * Parses a "farstream-new-active-candidate-pair" message and checks
     * if it matches the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parseNewActiveCandidatePair(message: Gst.Message): [ /* returnType */ boolean, /* localCandidate */ Candidate, /* remoteCandidate */ Candidate ]
    /**
     * Parses a "farstream-new-local-candidate" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parseNewLocalCandidate(message: Gst.Message): [ /* returnType */ boolean, /* candidate */ Candidate ]
    /**
     * Parses a "farstream-recv-codecs-changed" message and checks if it matches
     * the `stream` parameters.
     * @param message a #GstMessage to parse
     */
    parseRecvCodecsChanged(message: Gst.Message): [ /* returnType */ boolean, /* codecs */ Codec[] ]
    // Has conflict: setDecryptionParameters(parameters: Gst.Structure): boolean
    // Has conflict: setRemoteCodecs(remoteCodecs: Codec[]): boolean
    // Has conflict: setTransmitter(transmitter: string, streamTransmitterParameters: GObject.Parameter[] | null): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * 
     * This is the same as fs_stream_set_transmitter() except that the parameters
     * are passed in a #GHashTable to make it more friendly to GObject introspection
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param streamTransmitterParameters    A #GHashTable of string->GValue containing the parameters.
     */
    setTransmitterHt(transmitter: string, streamTransmitterParameters: GLib.HashTable | null): boolean

    // Own virtual methods of Farstream-0.2.Farstream.Stream

    /**
     * This function is used to add data identifiers that allow the
     * plugin to recognize packets that are meant for id. For example, in RTP,
     * one would set the SSRCs that are expected.
     * 
     * Depending on the protocol, one may be able to add more than one ID
     * to a stream (in RTP you can have multiple SSRCs in a stream).
     * If a protocol supports only one id, adding a new one will overwrite it.
     * If an ID was already set on a stream, adding it to another stream will
     * override the previdous decision.
     * 
     * For most protocols, calling this function is optional as the incoming data
     * can be matched with a stream by its source IP address. This is mostly useful
     * if one is using multicast or is behind a muxer server.
     * @virtual 
     * @param id The id to add to the stream
     */
    addId(id: number): void
    /**
     * This function adds remote candidates. Any new candidates are
     * added to the list. The candidates will be used to establish a connection
     * with the peer. A copy will be made so the user must free the
     * passed candidate using fs_candidate_destroy() when done.
     * @virtual 
     * @param candidates an #GList of #FsCandidate  representing the remote candidates
     */
    addRemoteCandidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @virtual 
     * @param remoteCandidates    a #GList of #FsCandidate to force
     */
    forceRemoteCandidates(remoteCandidates: Candidate[]): boolean
    /**
     * Sets decryption parameters. The exact parameters depend on the type of
     * plugin being used.
     * @virtual 
     * @param parameters a #GstStructure containing the decryption  parameters
     */
    setDecryptionParameters(parameters: Gst.Structure): boolean
    /**
     * This function will set the list of remote codecs for this stream. If
     * the given remote codecs couldn't be negotiated with the list of local
     * codecs or already negotiated codecs for the corresponding #FsSession, `error`
     * will be set and %FALSE will be returned. The `remote_codecs` list will be
     * copied so it must be free'd using fs_codec_list_destroy() when done.
     * @virtual 
     * @param remoteCodecs a #GList of #FsCodec representing   the remote codecs
     */
    setRemoteCodecs(remoteCodecs: Codec[]): boolean
    /**
     * Set the transmitter to use for this stream. This function will only succeed
     * once.
     * 
     * The parameters correspond to the varios GObject properties of the
     * selected stream transmitter.
     * @virtual 
     * @param transmitter Name of the type of transmitter to use for this stream
     * @param streamTransmitterParameters    an array of n_parameters #GParameter struct that will be passed   to the newly-create #FsStreamTransmitter
     */
    setTransmitter(transmitter: string, streamTransmitterParameters: GObject.Parameter[] | null): boolean

    // Own signals of Farstream-0.2.Farstream.Stream

    connect(sigName: "error", callback: Stream.ErrorSignalCallback): number
    on(sigName: "error", callback: Stream.ErrorSignalCallback): number
    once(sigName: "error", callback: Stream.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", errorMsg: string, ...args: any[]): void
    connect(sigName: "src-pad-added", callback: Stream.SrcPadAddedSignalCallback): number
    on(sigName: "src-pad-added", callback: Stream.SrcPadAddedSignalCallback): number
    once(sigName: "src-pad-added", callback: Stream.SrcPadAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "src-pad-added", codec: Codec, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.Stream

    connect(sigName: "notify::current-recv-codecs", callback: any): number
    on(sigName: "notify::current-recv-codecs", callback: any): number
    once(sigName: "notify::current-recv-codecs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-recv-codecs", ...args: any[]): void
    connect(sigName: "notify::decryption-parameters", callback: any): number
    on(sigName: "notify::decryption-parameters", callback: any): number
    once(sigName: "notify::decryption-parameters", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decryption-parameters", ...args: any[]): void
    connect(sigName: "notify::direction", callback: any): number
    on(sigName: "notify::direction", callback: any): number
    once(sigName: "notify::direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::negotiated-codecs", callback: any): number
    on(sigName: "notify::negotiated-codecs", callback: any): number
    once(sigName: "notify::negotiated-codecs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::negotiated-codecs", ...args: any[]): void
    connect(sigName: "notify::participant", callback: any): number
    on(sigName: "notify::participant", callback: any): number
    once(sigName: "notify::participant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::participant", ...args: any[]): void
    connect(sigName: "notify::remote-codecs", callback: any): number
    on(sigName: "notify::remote-codecs", callback: any): number
    once(sigName: "notify::remote-codecs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-codecs", ...args: any[]): void
    connect(sigName: "notify::session", callback: any): number
    on(sigName: "notify::session", callback: any): number
    once(sigName: "notify::session", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class Stream extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Stream

    static name: string

    // Constructors of Farstream-0.2.Farstream.Stream

    constructor(config?: Stream.ConstructorProperties) 
    _init(config?: Stream.ConstructorProperties): void
}

export module StreamTransmitter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (errorno: Error, errorMsg: string): void
    }

    /**
     * Signal callback interface for `known-source-packet-received`
     */
    export interface KnownSourcePacketReceivedSignalCallback {
        (component: number, buffer: object): void
    }

    /**
     * Signal callback interface for `local-candidates-prepared`
     */
    export interface LocalCandidatesPreparedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `new-active-candidate-pair`
     */
    export interface NewActiveCandidatePairSignalCallback {
        (localCandidate: Candidate, remoteCandidate: Candidate): void
    }

    /**
     * Signal callback interface for `new-local-candidate`
     */
    export interface NewLocalCandidateSignalCallback {
        (localCandidate: Candidate): void
    }

    /**
     * Signal callback interface for `state-changed`
     */
    export interface StateChangedSignalCallback {
        (component: number, state: StreamState): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.StreamTransmitter

        /**
         * This tells the stream transmitter to associate incoming data with this
         * based on the source without looking at the content if possible.
         */
        associateOnSource?: boolean | null
        preferredLocalCandidates?: any | null
        /**
         * A network source #GstElement to be used by the #FsSession
         */
        sending?: boolean | null
    }

}

export interface StreamTransmitter {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitter

    /**
     * This tells the stream transmitter to associate incoming data with this
     * based on the source without looking at the content if possible.
     */
    readonly associateOnSource: boolean
    readonly preferredLocalCandidates: any
    /**
     * A network source #GstElement to be used by the #FsSession
     */
    sending: boolean

    // Own fields of Farstream-0.2.Farstream.StreamTransmitter

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.StreamTransmitter

    // Has conflict: addRemoteCandidates(candidates: Candidate[]): boolean
    /**
     * This function emit the "error" signal on a #FsStreamTransmitter, it should
     * only be called by subclasses.
     * @param errorNo The number of the error
     * @param errorMsg Error message (for the programmer)
     */
    emitError(errorNo: number, errorMsg: string): void
    // Has conflict: forceRemoteCandidates(remoteCandidates: Candidate[]): boolean
    // Has conflict: gatherLocalCandidates(): boolean
    // Has conflict: stop(): void

    // Own virtual methods of Farstream-0.2.Farstream.StreamTransmitter

    /**
     * This function is used to add remote candidates to the transmitter
     * @virtual 
     * @param candidates a #GList of the remote candidates
     */
    addRemoteCandidates(candidates: Candidate[]): boolean
    /**
     * This function forces data to be sent immediately to the selected remote
     * candidate, by-passing any connectivity checks. There should be at most
     * one candidate per component.
     * @virtual 
     * @param remoteCandidates a #GList of #FsCandidate to   force
     */
    forceRemoteCandidates(remoteCandidates: Candidate[]): boolean
    /**
     * This function tells the transmitter to start gathering local candidates,
     * signals for new candidates and newly active candidates can be emitted
     * during the call to this function.
     * @virtual 
     */
    gatherLocalCandidates(): boolean
    /**
     * This functions stops the #FsStreamTransmitter, it must be called before
     * the last reference is dropped.
     * @virtual 
     */
    stop(): void

    // Own signals of Farstream-0.2.Farstream.StreamTransmitter

    connect(sigName: "error", callback: StreamTransmitter.ErrorSignalCallback): number
    on(sigName: "error", callback: StreamTransmitter.ErrorSignalCallback): number
    once(sigName: "error", callback: StreamTransmitter.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", errorMsg: string, ...args: any[]): void
    connect(sigName: "known-source-packet-received", callback: StreamTransmitter.KnownSourcePacketReceivedSignalCallback): number
    on(sigName: "known-source-packet-received", callback: StreamTransmitter.KnownSourcePacketReceivedSignalCallback): number
    once(sigName: "known-source-packet-received", callback: StreamTransmitter.KnownSourcePacketReceivedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "known-source-packet-received", buffer: object, ...args: any[]): void
    connect(sigName: "local-candidates-prepared", callback: StreamTransmitter.LocalCandidatesPreparedSignalCallback): number
    on(sigName: "local-candidates-prepared", callback: StreamTransmitter.LocalCandidatesPreparedSignalCallback): number
    once(sigName: "local-candidates-prepared", callback: StreamTransmitter.LocalCandidatesPreparedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "local-candidates-prepared", ...args: any[]): void
    connect(sigName: "new-active-candidate-pair", callback: StreamTransmitter.NewActiveCandidatePairSignalCallback): number
    on(sigName: "new-active-candidate-pair", callback: StreamTransmitter.NewActiveCandidatePairSignalCallback): number
    once(sigName: "new-active-candidate-pair", callback: StreamTransmitter.NewActiveCandidatePairSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "new-active-candidate-pair", remoteCandidate: Candidate, ...args: any[]): void
    connect(sigName: "new-local-candidate", callback: StreamTransmitter.NewLocalCandidateSignalCallback): number
    on(sigName: "new-local-candidate", callback: StreamTransmitter.NewLocalCandidateSignalCallback): number
    once(sigName: "new-local-candidate", callback: StreamTransmitter.NewLocalCandidateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "new-local-candidate", ...args: any[]): void
    connect(sigName: "state-changed", callback: StreamTransmitter.StateChangedSignalCallback): number
    on(sigName: "state-changed", callback: StreamTransmitter.StateChangedSignalCallback): number
    once(sigName: "state-changed", callback: StreamTransmitter.StateChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "state-changed", state: StreamState, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.StreamTransmitter

    connect(sigName: "notify::associate-on-source", callback: any): number
    on(sigName: "notify::associate-on-source", callback: any): number
    once(sigName: "notify::associate-on-source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::associate-on-source", ...args: any[]): void
    connect(sigName: "notify::preferred-local-candidates", callback: any): number
    on(sigName: "notify::preferred-local-candidates", callback: any): number
    once(sigName: "notify::preferred-local-candidates", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::preferred-local-candidates", ...args: any[]): void
    connect(sigName: "notify::sending", callback: any): number
    on(sigName: "notify::sending", callback: any): number
    once(sigName: "notify::sending", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sending", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class StreamTransmitter extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitter

    static name: string

    // Constructors of Farstream-0.2.Farstream.StreamTransmitter

    constructor(config?: StreamTransmitter.ConstructorProperties) 
    _init(config?: StreamTransmitter.ConstructorProperties): void
}

export module Transmitter {

    // Signal callback interfaces

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (errorno: Error, errorMsg: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Farstream-0.2.Farstream.Transmitter

        /**
         * The number of components to create
         */
        components?: number | null
        /**
         * Apply current stream time to buffers or provide buffers without
         * timestamps. Must be set before creating a stream transmitter.
         */
        doTimestamp?: boolean | null
        /**
         * Sets the IP ToS field (and if possible the IPv6 TCLASS field
         */
        tos?: number | null
    }

}

export interface Transmitter {

    // Own properties of Farstream-0.2.Farstream.Transmitter

    /**
     * The number of components to create
     */
    readonly components: number
    /**
     * Apply current stream time to buffers or provide buffers without
     * timestamps. Must be set before creating a stream transmitter.
     */
    doTimestamp: boolean
    /**
     * A network source #GstElement to be used by the #FsSession
     * These element's sink must have async=FALSE
     * This element MUST provide a pad named "sink_\%u" per component.
     * These pads number must start at 1 (the \%u corresponds to the component
     * number).
     * These pads MUST be static pads.
     */
    readonly gstSink: Gst.Element
    /**
     * A network source #GstElement to be used by the #FsSession
     * This element MUST provide a source pad named "src_%u" per component.
     * These pads number must start at 1 (the %u corresponds to the component
     * number).
     * These pads MUST be static pads.
     */
    readonly gstSrc: Gst.Element
    /**
     * Sets the IP ToS field (and if possible the IPv6 TCLASS field
     */
    tos: number

    // Own fields of Farstream-0.2.Farstream.Transmitter

    parent: GObject.Object

    // Owm methods of Farstream-0.2.Farstream.Transmitter

    /**
     * This function emit the "error" signal on a #FsTransmitter, it should
     * only be called by subclasses.
     * @param errorNo The number of the error
     * @param errorMsg Error message to be displayed to user
     */
    emitError(errorNo: number, errorMsg: string): void
    // Has conflict: getStreamTransmitterType(): GObject.GType
    // Has conflict: newStreamTransmitter(participant: Participant, nParameters: number, parameters: GObject.Parameter): StreamTransmitter

    // Own virtual methods of Farstream-0.2.Farstream.Transmitter

    /**
     * This function returns the GObject type for the stream transmitter.
     * This is meant for bindings that need to introspect the type of arguments
     * that can be passed to the _new_stream_transmitter.
     * @virtual 
     */
    getStreamTransmitterType(): GObject.GType
    /**
     * This function will create a new #FsStreamTransmitter element for a
     * specific participant for this #FsTransmitter
     * @virtual 
     * @param participant the #FsParticipant for which the #FsStream using this new #FsStreamTransmitter is created
     * @param nParameters The number of parameters to pass to the newly created #FsStreamTransmitter
     * @param parameters an array of #GParameter
     */
    newStreamTransmitter(participant: Participant, nParameters: number, parameters: GObject.Parameter): StreamTransmitter

    // Own signals of Farstream-0.2.Farstream.Transmitter

    connect(sigName: "error", callback: Transmitter.ErrorSignalCallback): number
    on(sigName: "error", callback: Transmitter.ErrorSignalCallback): number
    once(sigName: "error", callback: Transmitter.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", errorMsg: string, ...args: any[]): void

    // Class property signals of Farstream-0.2.Farstream.Transmitter

    connect(sigName: "notify::components", callback: any): number
    on(sigName: "notify::components", callback: any): number
    once(sigName: "notify::components", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::components", ...args: any[]): void
    connect(sigName: "notify::do-timestamp", callback: any): number
    on(sigName: "notify::do-timestamp", callback: any): number
    once(sigName: "notify::do-timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::do-timestamp", ...args: any[]): void
    connect(sigName: "notify::gst-sink", callback: any): number
    on(sigName: "notify::gst-sink", callback: any): number
    once(sigName: "notify::gst-sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gst-sink", ...args: any[]): void
    connect(sigName: "notify::gst-src", callback: any): number
    on(sigName: "notify::gst-src", callback: any): number
    once(sigName: "notify::gst-src", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gst-src", ...args: any[]): void
    connect(sigName: "notify::tos", callback: any): number
    on(sigName: "notify::tos", callback: any): number
    once(sigName: "notify::tos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tos", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All members are private, access them using methods and properties
 * @class 
 */
export class Transmitter extends GObject.Object {

    // Own properties of Farstream-0.2.Farstream.Transmitter

    static name: string

    // Constructors of Farstream-0.2.Farstream.Transmitter

    constructor(config?: Transmitter.ConstructorProperties) 
    /**
     * This function creates a new transmitter of the requested type.
     * It will load the appropriate plugin as required.
     * @constructor 
     * @param type The type of transmitter to create
     * @param components The number of components to create
     * @param tos The Type of Service of the socket, max is 255
     */
    constructor(type: string, components: number, tos: number) 
    /**
     * This function creates a new transmitter of the requested type.
     * It will load the appropriate plugin as required.
     * @constructor 
     * @param type The type of transmitter to create
     * @param components The number of components to create
     * @param tos The Type of Service of the socket, max is 255
     */
    static new(type: string, components: number, tos: number): Transmitter
    _init(config?: Transmitter.ConstructorProperties): void
    /**
     * Get the list of all available transmitters
     */
    static listAvailable(): string[]
}

export interface Candidate {

    // Own fields of Farstream-0.2.Farstream.Candidate

    /**
     * a string representing the foundation of this candidate (maximum 32 chars)
     * @field 
     */
    foundation: string
    /**
     * value between 1 and 256 indicating which component this candidate represents (1 is RTP, 2 is RTCP, #FsComponentType can be used here)
     * @field 
     */
    componentId: number
    /**
     * IP in dotted format
     * @field 
     */
    ip: string
    /**
     * Port to use
     * @field 
     */
    port: number
    /**
     * IP of base in dotted format as defined in ICE-19.
     * @field 
     */
    baseIp: string
    /**
     * Port of base as defined in ICE-19.
     * @field 
     */
    basePort: number
    /**
     * #FsNetworkProtocol for ip protocol to use as candidate
     * @field 
     */
    proto: NetworkProtocol
    /**
     * Value between 0 and (2^31 - 1) representing the priority
     * @field 
     */
    priority: number
    /**
     * The #FsCandidateType of the candidate
     * @field 
     */
    type: CandidateType
    /**
     * Username to use to connect to client if necessary,
     *            NULL otherwise
     * @field 
     */
    username: string
    /**
     * Username to use to connect to client if necessary,
     *            NULL otherwise
     * @field 
     */
    password: string
    /**
     * The TTL used when sending Multicast packet (0 = auto)
     * @field 
     */
    ttl: number

    // Owm methods of Farstream-0.2.Farstream.Candidate

    /**
     * Copies a #FsCandidate and its contents.
     */
    copy(): Candidate
}

/**
 * Struct to hold information about ICE-19 compliant candidates
 * @record 
 */
export class Candidate {

    // Own properties of Farstream-0.2.Farstream.Candidate

    static name: string

    // Constructors of Farstream-0.2.Farstream.Candidate

    /**
     * Allocates a new #FsCandidate, the rest of the fields can be optionally
     * filled manually. See also fs_candidate_new_full()
     * @constructor 
     * @param foundation The foundation of the candidate
     * @param componentId The component this candidate is for
     * @param type The type of candidate
     * @param proto The protocol this component is for
     * @param ip The IP address of this component (can be NULL for local candidate to     mean any address)
     * @param port the UDP/TCP port
     */
    constructor(foundation: string, componentId: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number) 
    /**
     * Allocates a new #FsCandidate, the rest of the fields can be optionally
     * filled manually. See also fs_candidate_new_full()
     * @constructor 
     * @param foundation The foundation of the candidate
     * @param componentId The component this candidate is for
     * @param type The type of candidate
     * @param proto The protocol this component is for
     * @param ip The IP address of this component (can be NULL for local candidate to     mean any address)
     * @param port the UDP/TCP port
     */
    static new(foundation: string, componentId: number, type: CandidateType, proto: NetworkProtocol, ip: string | null, port: number): Candidate
    /**
     * Allocates a new #FsCandidate, filling all the fields. See also
     * fs_candidate_new()
     * @constructor 
     * @param foundation The foundation of the candidate
     * @param componentId The component this candidate is for
     * @param ip The IP address of this component (can be NULL for local candidate to     mean any address)
     * @param port the UDP/TCP port
     * @param baseIp IP of base in dotted format as defined in ICE-19.
     * @param basePort Port of base as defined in ICE-19.
     * @param proto The protocol this component is for
     * @param priority Value between 0 and (2^31 - 1) representing the priority
     * @param type The type of candidate
     * @param username Username to use to connect to client if necessary,            NULL otherwise
     * @param password Username to use to connect to client if necessary,            NULL otherwise
     * @param ttl The TTL used when sending Multicast packet (0 = auto)
     */
    static newFull(foundation: string, componentId: number, ip: string | null, port: number, baseIp: string | null, basePort: number, proto: NetworkProtocol, priority: number, type: CandidateType, username: string | null, password: string | null, ttl: number): Candidate
}

export interface Codec {

    // Own fields of Farstream-0.2.Farstream.Codec

    /**
     * numeric identifier for encoding, eg. PT for SDP
     * @field 
     */
    id: number
    /**
     * the name of the codec
     * @field 
     */
    encodingName: string
    /**
     * type of media this codec is for
     * @field 
     */
    mediaType: MediaType
    /**
     * clock rate of this stream
     * @field 
     */
    clockRate: number
    /**
     * Number of channels codec should decode
     * @field 
     */
    channels: number
    /**
     * The minimum interval between two RTCP reports,
     *  If it is not specified (G_MAXUINT), it is up to the protocol to decide
     * (it is 5 seconds for RTP).
     * @field 
     */
    minimumReportingInterval: number
    /**
     * key pairs of param name to param data
     * @field 
     */
    optionalParams: CodecParameter[]
    /**
     * key triplets of
     * feedbck param type, subtype and extra string that is supported for this codec
     * @field 
     */
    feedbackParams: FeedbackParameter[]

    // Owm methods of Farstream-0.2.Farstream.Codec

    /**
     * This function adds an new feedback parameter to a #FsCodec
     * @param type The type of the feedback parameter
     * @param subtype The subtype of the feedback parameter
     * @param extraParams The extra_params of the feeback parameter
     */
    addFeedbackParameter(type: string, subtype: string, extraParams: string): void
    /**
     * This function adds an new optional parameter to a #FsCodec
     * @param name The name of the optional parameter
     * @param value The extra_params of the optional parameter
     */
    addOptionalParameter(name: string, value: string): void
    /**
     * Compare two codecs, it will declare two codecs to be identical even
     * if their optional parameters are in a different order. %NULL encoding names
     * are ignored.
     * @param codec2 Second codec
     */
    areEqual(codec2: Codec): boolean
    /**
     * Copies a #FsCodec structure.
     */
    copy(): Codec
    /**
     * Finds the #FsFeedbackParameter in the #FsCodec that has the requested
     * subtype, type and extra_params. One of which must be non-NULL;
     * @param type The subtype of the parameter to search for or %NULL for any type
     * @param subtype The subtype of the parameter to search for or %NULL for any subtype
     * @param extraParams The extra_params of the parameter to search for or %NULL for any extra_params
     */
    getFeedbackParameter(type: string | null, subtype: string | null, extraParams: string | null): FeedbackParameter
    /**
     * Finds the #FsCodecParameter in the #FsCodec that has the requested name
     * and, if not %NULL, the requested value
     * @param name The name of the parameter to search for
     * @param value The value of the parameter to search for or %NULL for any value
     */
    getOptionalParameter(name: string, value: string | null): CodecParameter
    /**
     * Removes an optional parameter from a codec.
     * 
     * NULL param will do nothing.
     * @param item     a pointer to the #GList element to remove that contains a #FsFeedbackParameter
     */
    removeFeedbackParameter(item: FeedbackParameter[]): void
    /**
     * Removes an optional parameter from a codec.
     * 
     * NULL param will do nothing.
     * @param param a pointer to the #FsCodecParameter to remove
     */
    removeOptionalParameter(param: CodecParameter): void
    /**
     * Returns a newly-allocated string representing the codec
     */
    toString(): string
}

/**
 * This structure reprensents one codec that can be offered or received
 * @record 
 */
export class Codec {

    // Own properties of Farstream-0.2.Farstream.Codec

    static name: string

    // Constructors of Farstream-0.2.Farstream.Codec

    /**
     * Allocates and initializes a #FsCodec structure
     * @constructor 
     * @param id codec identifier, if RTP this should be based on IETF RTP payload types
     * @param encodingName Name of media type this encodes
     * @param mediaType #FsMediaType for type of codec
     * @param clockRate The clock rate this codec encodes at, if applicable
     */
    constructor(id: number, encodingName: string, mediaType: MediaType, clockRate: number) 
    /**
     * Allocates and initializes a #FsCodec structure
     * @constructor 
     * @param id codec identifier, if RTP this should be based on IETF RTP payload types
     * @param encodingName Name of media type this encodes
     * @param mediaType #FsMediaType for type of codec
     * @param clockRate The clock rate this codec encodes at, if applicable
     */
    static new(id: number, encodingName: string, mediaType: MediaType, clockRate: number): Codec
}

export interface CodecParameter {

    // Own fields of Farstream-0.2.Farstream.CodecParameter

    /**
     * paramter name.
     * @field 
     */
    name: string
    /**
     * parameter value.
     * @field 
     */
    value: string

    // Owm methods of Farstream-0.2.Farstream.CodecParameter

    /**
     * Makes a copy of a #FsCodecParameter
     */
    copy(): CodecParameter
    /**
     * Frees a #FsCodecParameter
     */
    free(): void
}

/**
 * Used to store arbitary parameters for a codec
 * @record 
 */
export class CodecParameter {

    // Own properties of Farstream-0.2.Farstream.CodecParameter

    static name: string
}

export interface ConferenceClass {

    // Own fields of Farstream-0.2.Farstream.ConferenceClass

    /**
     * parent GstBin class
     * @field 
     */
    parent: Gst.BinClass
    newSession: (conference: Conference, mediaType: MediaType) => Session
    newParticipant: (conference: Conference) => Participant
}

/**
 * #FsConferenceClass class structure.
 * @record 
 */
export abstract class ConferenceClass {

    // Own properties of Farstream-0.2.Farstream.ConferenceClass

    static name: string
}

export interface ElementAddedNotifierClass {

    // Own fields of Farstream-0.2.Farstream.ElementAddedNotifierClass

    /**
     * the #GObjectClass parent
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * All members are private
 * @record 
 */
export abstract class ElementAddedNotifierClass {

    // Own properties of Farstream-0.2.Farstream.ElementAddedNotifierClass

    static name: string
}

export interface ElementAddedNotifierPrivate {
}

export class ElementAddedNotifierPrivate {

    // Own properties of Farstream-0.2.Farstream.ElementAddedNotifierPrivate

    static name: string
}

export interface FeedbackParameter {

    // Own fields of Farstream-0.2.Farstream.FeedbackParameter

    /**
     * the type of feedback, like "ack", "name", "ccm"
     * @field 
     */
    type: string
    /**
     * the subtype of feedback (can be an empty string)
     * @field 
     */
    subtype: string
    /**
     * a string containing extra parameters (can be empty)
     * @field 
     */
    extraParams: string

    // Owm methods of Farstream-0.2.Farstream.FeedbackParameter

    /**
     * Makes a copy of a #FsFeedbackParameter
     */
    copy(): FeedbackParameter
    /**
     * Frees a #FsFeedbackParameter
     */
    free(): void
}

/**
 * Use to store feedback parameters
 * @record 
 */
export class FeedbackParameter {

    // Own properties of Farstream-0.2.Farstream.FeedbackParameter

    static name: string
}

export interface ParticipantClass {

    // Own fields of Farstream-0.2.Farstream.ParticipantClass

    /**
     * Our parent
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * The FsParticipant class has no virtual methods to implement,
 * but you may want to override the properties or attach more date to it
 * @record 
 */
export abstract class ParticipantClass {

    // Own properties of Farstream-0.2.Farstream.ParticipantClass

    static name: string
}

export interface ParticipantPrivate {
}

export class ParticipantPrivate {

    // Own properties of Farstream-0.2.Farstream.ParticipantPrivate

    static name: string
}

export interface PluginClass {

    // Own fields of Farstream-0.2.Farstream.PluginClass

    parentClass: GObject.TypeModuleClass
}

export abstract class PluginClass {

    // Own properties of Farstream-0.2.Farstream.PluginClass

    static name: string
}

export interface PluginPrivate {
}

export class PluginPrivate {

    // Own properties of Farstream-0.2.Farstream.PluginPrivate

    static name: string
}

export interface RtpHeaderExtension {

    // Own fields of Farstream-0.2.Farstream.RtpHeaderExtension

    /**
     * The identifier of the RTP header extension
     * @field 
     */
    id: number
    /**
     * the direction in which this extension can be used
     * @field 
     */
    direction: StreamDirection
    /**
     * The URI that defines this extension
     * @field 
     */
    uri: string

    // Owm methods of Farstream-0.2.Farstream.RtpHeaderExtension

    /**
     * Compares two #FsRtpHeaderExtension structures
     * @param extension2 The second #FsRtpHeaderExtension
     */
    areEqual(extension2: RtpHeaderExtension): boolean
}

/**
 * Defines a RTP header extension with its negotiated identifier, direction
 * and URI. They should only be created with fs_rtp_header_extension_new().
 * @record 
 */
export class RtpHeaderExtension {

    // Own properties of Farstream-0.2.Farstream.RtpHeaderExtension

    static name: string

    // Constructors of Farstream-0.2.Farstream.RtpHeaderExtension

    /**
     * Creates a new #FsRtpHeaderExtension
     * @constructor 
     * @param id The identifier of the RTP header extension
     * @param direction the direction in which this extension can be used
     * @param uri The URI that defines this extension
     */
    constructor(id: number, direction: StreamDirection, uri: string) 
    /**
     * Creates a new #FsRtpHeaderExtension
     * @constructor 
     * @param id The identifier of the RTP header extension
     * @param direction the direction in which this extension can be used
     * @param uri The URI that defines this extension
     */
    static new(id: number, direction: StreamDirection, uri: string): RtpHeaderExtension
}

export interface SessionClass {

    // Own fields of Farstream-0.2.Farstream.SessionClass

    /**
     * Our parent
     * @field 
     */
    parentClass: GObject.ObjectClass
    newStream: (session: Session, participant: Participant, direction: StreamDirection) => Stream
    startTelephonyEvent: (session: Session, event: number, volume: number) => boolean
    stopTelephonyEvent: (session: Session) => boolean
    setSendCodec: (session: Session, sendCodec: Codec) => boolean
    setCodecPreferences: (session: Session, codecPreferences: Codec[] | null) => boolean
    listTransmitters: (session: Session) => string[]
    getStreamTransmitterType: (session: Session, transmitter: string) => GObject.GType
    codecsNeedResend: (session: Session, oldCodecs: Codec[] | null, newCodecs: Codec[] | null) => Codec[]
    setAllowedCaps: (session: Session, sinkCaps: Gst.Caps | null, srcCaps: Gst.Caps | null) => boolean
    setEncryptionParameters: (session: Session, parameters: Gst.Structure | null) => boolean
}

/**
 * You must override at least new_stream in a subclass.
 * @record 
 */
export abstract class SessionClass {

    // Own properties of Farstream-0.2.Farstream.SessionClass

    static name: string
}

export interface SessionPrivate {
}

export class SessionPrivate {

    // Own properties of Farstream-0.2.Farstream.SessionPrivate

    static name: string
}

export interface StreamClass {

    // Own fields of Farstream-0.2.Farstream.StreamClass

    /**
     * Our parent
     * @field 
     */
    parentClass: GObject.ObjectClass
    addRemoteCandidates: (stream: Stream, candidates: Candidate[]) => boolean
    forceRemoteCandidates: (stream: Stream, remoteCandidates: Candidate[]) => boolean
    setRemoteCodecs: (stream: Stream, remoteCodecs: Codec[]) => boolean
    addId: (stream: Stream, id: number) => void
    setTransmitter: (stream: Stream, transmitter: string, streamTransmitterParameters: GObject.Parameter[] | null) => boolean
    setDecryptionParameters: (stream: Stream, parameters: Gst.Structure) => boolean
}

/**
 * You must override add_remote_candidate in a subclass.
 * If you have to negotiate codecs, then you must override set_remote_codecs too
 * @record 
 */
export abstract class StreamClass {

    // Own properties of Farstream-0.2.Farstream.StreamClass

    static name: string
}

export interface StreamPrivate {
}

export class StreamPrivate {

    // Own properties of Farstream-0.2.Farstream.StreamPrivate

    static name: string
}

export interface StreamTransmitterClass {

    // Own fields of Farstream-0.2.Farstream.StreamTransmitterClass

    /**
     * Our parent
     * @field 
     */
    parentClass: GObject.ObjectClass
    addRemoteCandidates: (streamtransmitter: StreamTransmitter, candidates: Candidate[]) => boolean
    forceRemoteCandidates: (streamtransmitter: StreamTransmitter, remoteCandidates: Candidate[]) => boolean
    gatherLocalCandidates: (streamtransmitter: StreamTransmitter) => boolean
    stop: (streamtransmitter: StreamTransmitter) => void
}

/**
 * You must override the add_remote_candidate in a subclass
 * @record 
 */
export abstract class StreamTransmitterClass {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitterClass

    static name: string
}

export interface StreamTransmitterPrivate {
}

export class StreamTransmitterPrivate {

    // Own properties of Farstream-0.2.Farstream.StreamTransmitterPrivate

    static name: string
}

export interface TransmitterClass {

    // Own fields of Farstream-0.2.Farstream.TransmitterClass

    /**
     * Our parent
     * @field 
     */
    parentClass: GObject.ObjectClass
    newStreamTransmitter: (transmitter: Transmitter, participant: Participant, nParameters: number, parameters: GObject.Parameter) => StreamTransmitter
    getStreamTransmitterType: (transmitter: Transmitter) => GObject.GType
}

/**
 * You must override both methods in a subclass.
 * @record 
 */
export abstract class TransmitterClass {

    // Own properties of Farstream-0.2.Farstream.TransmitterClass

    static name: string
}

export interface TransmitterPrivate {
}

export class TransmitterPrivate {

    // Own properties of Farstream-0.2.Farstream.TransmitterPrivate

    static name: string
}
