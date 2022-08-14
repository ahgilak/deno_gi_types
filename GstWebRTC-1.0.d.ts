
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstWebRTC-1.0
 */

import type * as GstSdp from './GstSdp-1.0.js';
import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
 * for more information.
 */
export enum WebRTCBundlePolicy {
    /**
     * none
     */
    NONE,
    /**
     * balanced
     */
    BALANCED,
    /**
     * max-compat
     */
    MAX_COMPAT,
    /**
     * max-bundle
     */
    MAX_BUNDLE,
}
export enum WebRTCDTLSSetup {
    /**
     * none
     */
    NONE,
    /**
     * actpass
     */
    ACTPASS,
    /**
     * sendonly
     */
    ACTIVE,
    /**
     * recvonly
     */
    PASSIVE,
}
export enum WebRTCDTLSTransportState {
    /**
     * new
     */
    NEW,
    /**
     * closed
     */
    CLOSED,
    /**
     * failed
     */
    FAILED,
    /**
     * connecting
     */
    CONNECTING,
    /**
     * connected
     */
    CONNECTED,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcdatachannelstate>
 */
export enum WebRTCDataChannelState {
    NEW,
    /**
     * connecting
     */
    CONNECTING,
    /**
     * open
     */
    OPEN,
    /**
     * closing
     */
    CLOSING,
    /**
     * closed
     */
    CLOSED,
}
/**
 * See <https://www.w3.org/TR/webrtc/#dom-rtcerrordetailtype> for more information.
 */
export enum WebRTCError {
    /**
     * data-channel-failure
     */
    DATA_CHANNEL_FAILURE,
    /**
     * dtls-failure
     */
    DTLS_FAILURE,
    /**
     * fingerprint-failure
     */
    FINGERPRINT_FAILURE,
    /**
     * sctp-failure
     */
    SCTP_FAILURE,
    /**
     * sdp-syntax-error
     */
    SDP_SYNTAX_ERROR,
    /**
     * hardware-encoder-not-available
     */
    HARDWARE_ENCODER_NOT_AVAILABLE,
    /**
     * encoder-error
     */
    ENCODER_ERROR,
    /**
     * invalid-state (part of WebIDL specification)
     */
    INVALID_STATE,
    /**
     * GStreamer-specific failure, not matching any other value from the specification
     */
    INTERNAL_FAILURE,
}
export enum WebRTCFECType {
    /**
     * none
     */
    NONE,
    /**
     * ulpfec + red
     */
    ULP_RED,
}
export enum WebRTCICEComponent {
    /**
     * RTP component
     */
    RTP,
    /**
     * RTCP component
     */
    RTCP,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtciceconnectionstate>
 */
export enum WebRTCICEConnectionState {
    /**
     * new
     */
    NEW,
    /**
     * checking
     */
    CHECKING,
    /**
     * connected
     */
    CONNECTED,
    /**
     * completed
     */
    COMPLETED,
    /**
     * failed
     */
    FAILED,
    /**
     * disconnected
     */
    DISCONNECTED,
    /**
     * closed
     */
    CLOSED,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcicegatheringstate>
 */
export enum WebRTCICEGatheringState {
    /**
     * new
     */
    NEW,
    /**
     * gathering
     */
    GATHERING,
    /**
     * complete
     */
    COMPLETE,
}
export enum WebRTCICERole {
    /**
     * controlled
     */
    CONTROLLED,
    /**
     * controlling
     */
    CONTROLLING,
}
/**
 * See https://tools.ietf.org/html/draft-ietf-rtcweb-jsep-24#section-4.1.1
 * for more information.
 */
export enum WebRTCICETransportPolicy {
    /**
     * all
     */
    ALL,
    /**
     * relay
     */
    RELAY,
}
/**
 * https://w3c.github.io/mediacapture-main/#dom-mediastreamtrack-kind
 */
export enum WebRTCKind {
    /**
     * Kind has not yet been set
     */
    UNKNOWN,
    /**
     * Kind is audio
     */
    AUDIO,
    /**
     * Kind is audio
     */
    VIDEO,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcpeerconnectionstate>
 */
export enum WebRTCPeerConnectionState {
    /**
     * new
     */
    NEW,
    /**
     * connecting
     */
    CONNECTING,
    /**
     * connected
     */
    CONNECTED,
    /**
     * disconnected
     */
    DISCONNECTED,
    /**
     * failed
     */
    FAILED,
    /**
     * closed
     */
    CLOSED,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcprioritytype>
 */
export enum WebRTCPriorityType {
    /**
     * very-low
     */
    VERY_LOW,
    /**
     * low
     */
    LOW,
    /**
     * medium
     */
    MEDIUM,
    /**
     * high
     */
    HIGH,
}
export enum WebRTCRTPTransceiverDirection {
    /**
     * none
     */
    NONE,
    /**
     * inactive
     */
    INACTIVE,
    /**
     * sendonly
     */
    SENDONLY,
    /**
     * recvonly
     */
    RECVONLY,
    /**
     * sendrecv
     */
    SENDRECV,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcsctptransportstate>
 */
export enum WebRTCSCTPTransportState {
    /**
     * new
     */
    NEW,
    /**
     * connecting
     */
    CONNECTING,
    /**
     * connected
     */
    CONNECTED,
    /**
     * closed
     */
    CLOSED,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#rtcsdptype>
 */
export enum WebRTCSDPType {
    /**
     * offer
     */
    OFFER,
    /**
     * pranswer
     */
    PRANSWER,
    /**
     * answer
     */
    ANSWER,
    /**
     * rollback
     */
    ROLLBACK,
}
/**
 * See <http://w3c.github.io/webrtc-pc/#dom-rtcsignalingstate>
 */
export enum WebRTCSignalingState {
    /**
     * stable
     */
    STABLE,
    /**
     * closed
     */
    CLOSED,
    /**
     * have-local-offer
     */
    HAVE_LOCAL_OFFER,
    /**
     * have-remote-offer
     */
    HAVE_REMOTE_OFFER,
    /**
     * have-local-pranswer
     */
    HAVE_LOCAL_PRANSWER,
    /**
     * have-remote-pranswer
     */
    HAVE_REMOTE_PRANSWER,
}
export enum WebRTCStatsType {
    /**
     * codec
     */
    CODEC,
    /**
     * inbound-rtp
     */
    INBOUND_RTP,
    /**
     * outbound-rtp
     */
    OUTBOUND_RTP,
    /**
     * remote-inbound-rtp
     */
    REMOTE_INBOUND_RTP,
    /**
     * remote-outbound-rtp
     */
    REMOTE_OUTBOUND_RTP,
    /**
     * csrc
     */
    CSRC,
    /**
     * peer-connectiion
     */
    PEER_CONNECTION,
    /**
     * data-channel
     */
    DATA_CHANNEL,
    /**
     * stream
     */
    STREAM,
    /**
     * transport
     */
    TRANSPORT,
    /**
     * candidate-pair
     */
    CANDIDATE_PAIR,
    /**
     * local-candidate
     */
    LOCAL_CANDIDATE,
    /**
     * remote-candidate
     */
    REMOTE_CANDIDATE,
    /**
     * certificate
     */
    CERTIFICATE,
}
export function webrtcErrorQuark(): GLib.Quark
export function webrtcSdpTypeToString(type: WebRTCSDPType): string
export module WebRTCDTLSTransport {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

        certificate?: string | null
        client?: boolean | null
        sessionId?: number | null
    }

}

export interface WebRTCDTLSTransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    certificate: string
    client: boolean
    readonly remoteCertificate: string
    readonly sessionId: number
    readonly state: WebRTCDTLSTransportState
    readonly transport: WebRTCICETransport

    // Conflicting methods

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
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    connect(sigName: "notify::certificate", callback: any): number
    on(sigName: "notify::certificate", callback: any): number
    once(sigName: "notify::certificate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::certificate", ...args: any[]): void
    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::remote-certificate", callback: any): number
    on(sigName: "notify::remote-certificate", callback: any): number
    once(sigName: "notify::remote-certificate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-certificate", ...args: any[]): void
    connect(sigName: "notify::session-id", callback: any): number
    on(sigName: "notify::session-id", callback: any): number
    once(sigName: "notify::session-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::session-id", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::transport", callback: any): number
    on(sigName: "notify::transport", callback: any): number
    once(sigName: "notify::transport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebRTCDTLSTransport extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransport

    constructor(config?: WebRTCDTLSTransport.ConstructorProperties) 
    _init(config?: WebRTCDTLSTransport.ConstructorProperties): void
}

export module WebRTCDataChannel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `on-buffered-amount-low`
     */
    export interface OnBufferedAmountLowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `on-close`
     */
    export interface OnCloseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `on-error`
     */
    export interface OnErrorSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `on-message-data`
     */
    export interface OnMessageDataSignalCallback {
        (data: any | null): void
    }

    /**
     * Signal callback interface for `on-message-string`
     */
    export interface OnMessageStringSignalCallback {
        (data: string | null): void
    }

    /**
     * Signal callback interface for `on-open`
     */
    export interface OnOpenSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `send-data`
     */
    export interface SendDataSignalCallback {
        (data: any | null): void
    }

    /**
     * Signal callback interface for `send-string`
     */
    export interface SendStringSignalCallback {
        (data: string | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

        bufferedAmountLowThreshold?: number | null
        id?: number | null
        label?: string | null
        maxPacketLifetime?: number | null
        maxRetransmits?: number | null
        negotiated?: boolean | null
        ordered?: boolean | null
        priority?: WebRTCPriorityType | null
        protocol?: string | null
    }

}

export interface WebRTCDataChannel {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    readonly bufferedAmount: number
    bufferedAmountLowThreshold: number
    readonly id: number
    readonly label: string
    readonly maxPacketLifetime: number
    readonly maxRetransmits: number
    readonly negotiated: boolean
    readonly ordered: boolean
    readonly priority: WebRTCPriorityType
    readonly protocol: string
    readonly readyState: WebRTCDataChannelState

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    /**
     * Close the `channel`.
     */
    close(): void
    /**
     * Send `data` as a data message over `channel`.
     * @param data a #GBytes or %NULL
     */
    sendData(data: any | null): void
    /**
     * Send `str` as a string message over `channel`.
     * @param str a string or %NULL
     */
    sendString(str: string | null): void

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    connect(sigName: "close", callback: WebRTCDataChannel.CloseSignalCallback): number
    on(sigName: "close", callback: WebRTCDataChannel.CloseSignalCallback): number
    once(sigName: "close", callback: WebRTCDataChannel.CloseSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel.OnBufferedAmountLowSignalCallback): number
    on(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel.OnBufferedAmountLowSignalCallback): number
    once(sigName: "on-buffered-amount-low", callback: WebRTCDataChannel.OnBufferedAmountLowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-buffered-amount-low", ...args: any[]): void
    connect(sigName: "on-close", callback: WebRTCDataChannel.OnCloseSignalCallback): number
    on(sigName: "on-close", callback: WebRTCDataChannel.OnCloseSignalCallback): number
    once(sigName: "on-close", callback: WebRTCDataChannel.OnCloseSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-close", ...args: any[]): void
    connect(sigName: "on-error", callback: WebRTCDataChannel.OnErrorSignalCallback): number
    on(sigName: "on-error", callback: WebRTCDataChannel.OnErrorSignalCallback): number
    once(sigName: "on-error", callback: WebRTCDataChannel.OnErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-error", ...args: any[]): void
    connect(sigName: "on-message-data", callback: WebRTCDataChannel.OnMessageDataSignalCallback): number
    on(sigName: "on-message-data", callback: WebRTCDataChannel.OnMessageDataSignalCallback): number
    once(sigName: "on-message-data", callback: WebRTCDataChannel.OnMessageDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-message-data", ...args: any[]): void
    connect(sigName: "on-message-string", callback: WebRTCDataChannel.OnMessageStringSignalCallback): number
    on(sigName: "on-message-string", callback: WebRTCDataChannel.OnMessageStringSignalCallback): number
    once(sigName: "on-message-string", callback: WebRTCDataChannel.OnMessageStringSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-message-string", ...args: any[]): void
    connect(sigName: "on-open", callback: WebRTCDataChannel.OnOpenSignalCallback): number
    on(sigName: "on-open", callback: WebRTCDataChannel.OnOpenSignalCallback): number
    once(sigName: "on-open", callback: WebRTCDataChannel.OnOpenSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-open", ...args: any[]): void
    connect(sigName: "send-data", callback: WebRTCDataChannel.SendDataSignalCallback): number
    on(sigName: "send-data", callback: WebRTCDataChannel.SendDataSignalCallback): number
    once(sigName: "send-data", callback: WebRTCDataChannel.SendDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "send-data", ...args: any[]): void
    connect(sigName: "send-string", callback: WebRTCDataChannel.SendStringSignalCallback): number
    on(sigName: "send-string", callback: WebRTCDataChannel.SendStringSignalCallback): number
    once(sigName: "send-string", callback: WebRTCDataChannel.SendStringSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "send-string", ...args: any[]): void

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    connect(sigName: "notify::buffered-amount", callback: any): number
    on(sigName: "notify::buffered-amount", callback: any): number
    once(sigName: "notify::buffered-amount", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffered-amount", ...args: any[]): void
    connect(sigName: "notify::buffered-amount-low-threshold", callback: any): number
    on(sigName: "notify::buffered-amount-low-threshold", callback: any): number
    once(sigName: "notify::buffered-amount-low-threshold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffered-amount-low-threshold", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::max-packet-lifetime", callback: any): number
    on(sigName: "notify::max-packet-lifetime", callback: any): number
    once(sigName: "notify::max-packet-lifetime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-packet-lifetime", ...args: any[]): void
    connect(sigName: "notify::max-retransmits", callback: any): number
    on(sigName: "notify::max-retransmits", callback: any): number
    once(sigName: "notify::max-retransmits", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-retransmits", ...args: any[]): void
    connect(sigName: "notify::negotiated", callback: any): number
    on(sigName: "notify::negotiated", callback: any): number
    once(sigName: "notify::negotiated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::negotiated", ...args: any[]): void
    connect(sigName: "notify::ordered", callback: any): number
    on(sigName: "notify::ordered", callback: any): number
    once(sigName: "notify::ordered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ordered", ...args: any[]): void
    connect(sigName: "notify::priority", callback: any): number
    on(sigName: "notify::priority", callback: any): number
    once(sigName: "notify::priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::ready-state", callback: any): number
    on(sigName: "notify::ready-state", callback: any): number
    once(sigName: "notify::ready-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ready-state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebRTCDataChannel extends GObject.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannel

    constructor(config?: WebRTCDataChannel.ConstructorProperties) 
    _init(config?: WebRTCDataChannel.ConstructorProperties): void
}

export module WebRTCICETransport {

    // Signal callback interfaces

    /**
     * Signal callback interface for `on-new-candidate`
     */
    export interface OnNewCandidateSignalCallback {
        (object: string): void
    }

    /**
     * Signal callback interface for `on-selected-candidate-pair-change`
     */
    export interface OnSelectedCandidatePairChangeSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

        component?: WebRTCICEComponent | null
    }

}

export interface WebRTCICETransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    readonly component: WebRTCICEComponent
    readonly gatheringState: WebRTCICEGatheringState
    readonly state: WebRTCICEConnectionState

    // Conflicting methods

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
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Own signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connect(sigName: "on-new-candidate", callback: WebRTCICETransport.OnNewCandidateSignalCallback): number
    on(sigName: "on-new-candidate", callback: WebRTCICETransport.OnNewCandidateSignalCallback): number
    once(sigName: "on-new-candidate", callback: WebRTCICETransport.OnNewCandidateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-new-candidate", ...args: any[]): void
    connect(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport.OnSelectedCandidatePairChangeSignalCallback): number
    on(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport.OnSelectedCandidatePairChangeSignalCallback): number
    once(sigName: "on-selected-candidate-pair-change", callback: WebRTCICETransport.OnSelectedCandidatePairChangeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "on-selected-candidate-pair-change", ...args: any[]): void

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    connect(sigName: "notify::component", callback: any): number
    on(sigName: "notify::component", callback: any): number
    once(sigName: "notify::component", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::component", ...args: any[]): void
    connect(sigName: "notify::gathering-state", callback: any): number
    on(sigName: "notify::gathering-state", callback: any): number
    once(sigName: "notify::gathering-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gathering-state", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebRTCICETransport extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCICETransport

    constructor(config?: WebRTCICETransport.ConstructorProperties) 
    _init(config?: WebRTCICETransport.ConstructorProperties): void
}

export module WebRTCRTPReceiver {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface WebRTCRTPReceiver {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    /**
     * The DTLS transport for this receiver
     */
    readonly transport: WebRTCDTLSTransport

    // Conflicting methods

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
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    connect(sigName: "notify::transport", callback: any): number
    on(sigName: "notify::transport", callback: any): number
    once(sigName: "notify::transport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object to track the receiving aspect of the stream
 * 
 * Mostly matches the WebRTC RTCRtpReceiver interface.
 * @class 
 */
export class WebRTCRTPReceiver extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiver

    constructor(config?: WebRTCRTPReceiver.ConstructorProperties) 
    _init(config?: WebRTCRTPReceiver.ConstructorProperties): void
}

export module WebRTCRTPSender {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

        /**
         * The priority from which to set the DSCP field on packets
         */
        priority?: WebRTCPriorityType | null
    }

}

export interface WebRTCRTPSender {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    /**
     * The priority from which to set the DSCP field on packets
     */
    priority: WebRTCPriorityType
    /**
     * The DTLS transport for this sender
     */
    readonly transport: WebRTCDTLSTransport

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    /**
     * Sets the content of the IPv4 Type of Service (ToS), also known as DSCP
     * (Differentiated Services Code Point).
     * This also sets the Traffic Class field of IPv6.
     * @param priority The priority of this sender
     */
    setPriority(priority: WebRTCPriorityType): void

    // Conflicting methods

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
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    connect(sigName: "notify::priority", callback: any): number
    on(sigName: "notify::priority", callback: any): number
    once(sigName: "notify::priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::transport", callback: any): number
    on(sigName: "notify::transport", callback: any): number
    once(sigName: "notify::transport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object to track the sending aspect of the stream
 * 
 * Mostly matches the WebRTC RTCRtpSender interface.
 * @class 
 */
export class WebRTCRTPSender extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSender

    constructor(config?: WebRTCRTPSender.ConstructorProperties) 
    _init(config?: WebRTCRTPSender.ConstructorProperties): void
}

export module WebRTCRTPTransceiver {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {

        // Own constructor properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

        /**
         * Caps representing the codec preferences.
         */
        codecPreferences?: Gst.Caps | null
        /**
         * Direction of the transceiver.
         */
        direction?: WebRTCRTPTransceiverDirection | null
        mlineindex?: number | null
        receiver?: WebRTCRTPReceiver | null
        sender?: WebRTCRTPSender | null
    }

}

export interface WebRTCRTPTransceiver {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    /**
     * Caps representing the codec preferences.
     */
    codecPreferences: Gst.Caps
    /**
     * The transceiver's current directionality, or none if the
     * transceiver is stopped or has never participated in an exchange
     * of offers and answers. To change the transceiver's
     * directionality, set the value of the direction property.
     */
    readonly currentDirection: WebRTCRTPTransceiverDirection
    /**
     * Direction of the transceiver.
     */
    direction: WebRTCRTPTransceiverDirection
    /**
     * The kind of media this transceiver transports
     */
    readonly kind: WebRTCKind
    /**
     * The media ID of the m-line associated with this transceiver. This
     * association is established, when possible, whenever either a
     * local or remote description is applied. This field is null if
     * neither a local or remote description has been applied, or if its
     * associated m-line is rejected by either a remote offer or any
     * answer.
     */
    readonly mid: string
    readonly mlineindex: number
    readonly receiver: WebRTCRTPReceiver
    readonly sender: WebRTCRTPSender

    // Conflicting methods

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
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    connect(sigName: "notify::codec-preferences", callback: any): number
    on(sigName: "notify::codec-preferences", callback: any): number
    once(sigName: "notify::codec-preferences", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::codec-preferences", ...args: any[]): void
    connect(sigName: "notify::current-direction", callback: any): number
    on(sigName: "notify::current-direction", callback: any): number
    once(sigName: "notify::current-direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-direction", ...args: any[]): void
    connect(sigName: "notify::direction", callback: any): number
    on(sigName: "notify::direction", callback: any): number
    once(sigName: "notify::direction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::direction", ...args: any[]): void
    connect(sigName: "notify::kind", callback: any): number
    on(sigName: "notify::kind", callback: any): number
    once(sigName: "notify::kind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::mid", callback: any): number
    on(sigName: "notify::mid", callback: any): number
    once(sigName: "notify::mid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mid", ...args: any[]): void
    connect(sigName: "notify::mlineindex", callback: any): number
    on(sigName: "notify::mlineindex", callback: any): number
    once(sigName: "notify::mlineindex", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mlineindex", ...args: any[]): void
    connect(sigName: "notify::receiver", callback: any): number
    on(sigName: "notify::receiver", callback: any): number
    once(sigName: "notify::receiver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receiver", ...args: any[]): void
    connect(sigName: "notify::sender", callback: any): number
    on(sigName: "notify::sender", callback: any): number
    once(sigName: "notify::sender", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sender", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Mostly matches the WebRTC RTCRtpTransceiver interface.
 * @class 
 */
export class WebRTCRTPTransceiver extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiver

    constructor(config?: WebRTCRTPTransceiver.ConstructorProperties) 
    _init(config?: WebRTCRTPTransceiver.ConstructorProperties): void
}

export module WebRTCSCTPTransport {

    // Constructor properties interface

    export interface ConstructorProperties extends Gst.Object.ConstructorProperties {
    }

}

export interface WebRTCSCTPTransport {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    readonly maxChannels: number
    readonly maxMessageSize: number
    readonly state: WebRTCSCTPTransportState
    readonly transport: WebRTCDTLSTransport

    // Conflicting methods

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
    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object

    // Class property signals of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    connect(sigName: "notify::max-channels", callback: any): number
    on(sigName: "notify::max-channels", callback: any): number
    once(sigName: "notify::max-channels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-channels", ...args: any[]): void
    connect(sigName: "notify::max-message-size", callback: any): number
    on(sigName: "notify::max-message-size", callback: any): number
    once(sigName: "notify::max-message-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-message-size", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::transport", callback: any): number
    on(sigName: "notify::transport", callback: any): number
    once(sigName: "notify::transport", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transport", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WebRTCSCTPTransport extends Gst.Object {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransport

    constructor(config?: WebRTCSCTPTransport.ConstructorProperties) 
    _init(config?: WebRTCSCTPTransport.ConstructorProperties): void
}

export interface WebRTCDTLSTransportClass {
}

export abstract class WebRTCDTLSTransportClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDTLSTransportClass

    static name: string
}

export interface WebRTCDataChannelClass {
}

export abstract class WebRTCDataChannelClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCDataChannelClass

    static name: string
}

export interface WebRTCICETransportClass {
}

export abstract class WebRTCICETransportClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCICETransportClass

    static name: string
}

export interface WebRTCRTPReceiverClass {
}

export abstract class WebRTCRTPReceiverClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPReceiverClass

    static name: string
}

export interface WebRTCRTPSenderClass {
}

export abstract class WebRTCRTPSenderClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPSenderClass

    static name: string
}

export interface WebRTCRTPTransceiverClass {
}

export abstract class WebRTCRTPTransceiverClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCRTPTransceiverClass

    static name: string
}

export interface WebRTCSCTPTransportClass {
}

export abstract class WebRTCSCTPTransportClass {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSCTPTransportClass

    static name: string
}

export interface WebRTCSessionDescription {

    // Own fields of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    /**
     * the #GstWebRTCSDPType of the description
     * @field 
     */
    type: WebRTCSDPType
    /**
     * the #GstSDPMessage of the description
     * @field 
     */
    sdp: GstSdp.SDPMessage

    // Owm methods of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    copy(): WebRTCSessionDescription
    /**
     * Free `desc` and all associated resources
     */
    free(): void
}

/**
 * See <https://www.w3.org/TR/webrtc/#rtcsessiondescription-class>
 * @record 
 */
export class WebRTCSessionDescription {

    // Own properties of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    static name: string

    // Constructors of GstWebRTC-1.0.GstWebRTC.WebRTCSessionDescription

    constructor(type: WebRTCSDPType, sdp: GstSdp.SDPMessage) 
    static new(type: WebRTCSDPType, sdp: GstSdp.SDPMessage): WebRTCSessionDescription
}
