
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GstSdp-1.0
 */

import type * as Gst from './Gst-1.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as GModule from './GModule-2.0.js';

/**
 * The different cache types
 */
export enum MIKEYCacheType {
    /**
     * The envelope key MUST NOT be cached
     */
    NONE,
    /**
     * The envelope key MUST be cached
     */
    ALWAYS,
    /**
     * The envelope key MUST be cached, but only
     *                           to be used for the specific CSB.
     */
    FOR_CSB,
}
/**
 * The encryption algorithm used to encrypt the Encr data field
 */
export enum MIKEYEncAlg {
    /**
     * no encryption
     */
    NULL,
    /**
     * AES-CM using a 128-bit key
     */
    AES_CM_128,
    /**
     * AES Key Wrap using a 128-bit key
     */
    AES_KW_128,
    /**
     * AES-GCM using a 128-bit key (Since: 1.16)
     */
    AES_GCM_128,
}
/**
 * The key validity type
 */
export enum MIKEYKVType {
    /**
     * No specific usage rule
     */
    NULL,
    /**
     * The key is associated with the SPI/MKI
     */
    SPI,
    /**
     * The key has a start and expiration time
     */
    INTERVAL,
}
/**
 * The type of key.
 */
export enum MIKEYKeyDataType {
    /**
     * a TEK Generation Key
     */
    TGK,
    /**
     * Traffic-Encrypting Key
     */
    TEK,
}
/**
 * Specifies the authentication algorithm used
 */
export enum MIKEYMacAlg {
    /**
     * no authentication
     */
    NULL,
    /**
     * HMAC-SHA-1-160
     */
    HMAC_SHA_1_160,
}
/**
 * Specifies the method of uniquely mapping Crypto Sessions to the security
 * protocol sessions.
 */
export enum MIKEYMapType {
    /**
     * SRTP
     */
    MIKEY_MAP_TYPE_SRTP,
}
/**
 * The PRF function that has been/will be used for key derivation
 */
export enum MIKEYPRFFunc {
    /**
     * MIKEY-1 PRF function
     */
    MIKEY_PRF_MIKEY_1,
}
/**
 * Different MIKEY Payload types.
 */
export enum MIKEYPayloadType {
    /**
     * Last payload
     */
    LAST,
    /**
     * Key data transport payload
     */
    KEMAC,
    /**
     * Envelope data payload
     */
    PKE,
    /**
     * DH data payload
     */
    DH,
    /**
     * Signature payload
     */
    SIGN,
    /**
     * Timestamp payload
     */
    T,
    /**
     * ID payload
     */
    ID,
    /**
     * Certificate Payload
     */
    CERT,
    /**
     * Cert hash payload
     */
    CHASH,
    /**
     * Verification message payload
     */
    V,
    /**
     * Security Policy payload
     */
    SP,
    /**
     * RAND payload
     */
    RAND,
    /**
     * Error payload
     */
    ERR,
    /**
     * Key data sub-payload
     */
    KEY_DATA,
    /**
     * General Extension Payload
     */
    GEN_EXT,
}
/**
 * Specifies the security protocol
 */
export enum MIKEYSecProto {
    /**
     * SRTP
     */
    MIKEY_SEC_PROTO_SRTP,
}
/**
 * This policy specifies the parameters for SRTP and SRTCP
 */
export enum MIKEYSecSRTP {
    /**
     * Encryption algorithm
     */
    ENC_ALG,
    /**
     * Session Encr. key length
     */
    ENC_KEY_LEN,
    /**
     * Authentication algorithm
     */
    AUTH_ALG,
    /**
     * Session Auth. key length
     */
    AUTH_KEY_LEN,
    /**
     * Session Salt key length
     */
    SALT_KEY_LEN,
    /**
     * SRTP Pseudo Random Function
     */
    PRF,
    /**
     * Key derivation rate
     */
    KEY_DERIV_RATE,
    /**
     * SRTP encryption off/on, 0 if off, 1 if on
     */
    SRTP_ENC,
    /**
     * SRTCP encryption off/on, 0 if off, 1 if on
     */
    SRTCP_ENC,
    /**
     * sender's FEC order
     */
    FEC_ORDER,
    /**
     * SRTP authentication off/on, 0 if off, 1 if on
     */
    SRTP_AUTH,
    /**
     * Authentication tag length
     */
    AUTH_TAG_LEN,
    /**
     * SRTP prefix length
     */
    SRTP_PREFIX_LEN,
    /**
     * AEAD authentication tag length (Since: 1.16)
     */
    AEAD_AUTH_TAG_LEN,
}
/**
 * Specifies the timestamp type.
 */
export enum MIKEYTSType {
    /**
     * an NTP time in UTC timezone
     */
    NTP_UTC,
    /**
     * an NTP time
     */
    NTP,
    /**
     * a counter
     */
    COUNTER,
}
/**
 * Different MIKEY data types.
 */
export enum MIKEYType {
    /**
     * Invalid type
     */
    INVALID,
    /**
     * Initiator's pre-shared key message
     */
    PSK_INIT,
    /**
     * Verification message of a Pre-shared key message
     */
    PSK_VERIFY,
    /**
     * Initiator's public-key transport message
     */
    PK_INIT,
    /**
     * Verification message of a public-key message
     */
    PK_VERIFY,
    /**
     * Initiator's DH exchange message
     */
    DH_INIT,
    /**
     * Responder's DH exchange message
     */
    DH_RESP,
    /**
     * Error message
     */
    ERROR,
}
/**
 * Return values for the SDP functions.
 */
export enum SDPResult {
    /**
     * A successful return value
     */
    OK,
    /**
     * a function was given invalid parameters
     */
    EINVAL,
}
/**
 * The supported MIKEY version 1.
 */
export const MIKEY_VERSION: number
/**
 * The Application-Specific Maximum bandwidth modifier.
 */
export const SDP_BWTYPE_AS: string
/**
 * The Conference Total bandwidth modifier.
 */
export const SDP_BWTYPE_CT: string
/**
 * The extension prefix bandwidth modifier.
 */
export const SDP_BWTYPE_EXT_PREFIX: string
/**
 * RTCP bandwidth allocated to data receivers (RFC 3556).
 */
export const SDP_BWTYPE_RR: string
/**
 * RTCP bandwidth allocated to active data senders (RFC 3556).
 */
export const SDP_BWTYPE_RS: string
/**
 * Transport Independent Application Specific Maximum bandwidth (RFC 3890).
 */
export const SDP_BWTYPE_TIAS: string
/**
 * Check if the given `addr` is a multicast address.
 * @param nettype a network type
 * @param addrtype an address type
 * @param addr an address
 */
export function sdpAddressIsMulticast(nettype: string, addrtype: string, addr: string): boolean
/**
 * Makes key management data
 * @param uri a #gchar URI
 * @param base64 a #gchar base64-encoded key data
 */
export function sdpMakeKeymgmt(uri: string, base64: string): string
/**
 * Allocate a new GstSDPMedia and store the result in `media`.
 */
export function sdpMediaNew(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
/**
 * Mapping of caps to SDP fields:
 * 
 * a=rtpmap:(payload) (encoding_name) or (clock_rate)[or (encoding_params)]
 * 
 * a=framesize:(payload) (width)-(height)
 * 
 * a=fmtp:(payload) (param)[=(value)];...
 * 
 * a=rtcp-fb:(payload) (param1) [param2]...
 * 
 * a=extmap:(id)[/direction] (extensionname) (extensionattributes)
 * @param caps a #GstCaps
 * @param media a #GstSDPMedia
 */
export function sdpMediaSetMediaFromCaps(caps: Gst.Caps, media: SDPMedia): SDPResult
/**
 * Creates a uri from `msg` with the given `scheme`. The uri has the format:
 * 
 *  \`scheme:`///[#type=value *[&type=value]]
 * 
 *  Where each value is url encoded.
 * @param scheme the uri scheme
 * @param msg the #GstSDPMessage
 */
export function sdpMessageAsUri(scheme: string, msg: SDPMessage): string
/**
 * Allocate a new GstSDPMessage and store the result in `msg`.
 */
export function sdpMessageNew(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
/**
 * Parse `text` and create a new SDPMessage from these.
 * @param text A dynamically allocated string representing the SDP description
 */
export function sdpMessageNewFromText(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
/**
 * Parse the contents of `size` bytes pointed to by `data` and store the result in
 * `msg`.
 * @param data the start of the buffer
 * @param msg the result #GstSDPMessage
 */
export function sdpMessageParseBuffer(data: Uint8Array, msg: SDPMessage): SDPResult
/**
 * Parse the null-terminated `uri` and store the result in `msg`.
 * 
 * The uri should be of the form:
 * 
 *  scheme://[address[:ttl=ttl][:noa=noa]]/[sessionname]
 *               [#type=value *[&type=value]]
 * 
 *  where value is url encoded. This looslely resembles
 *  http://tools.ietf.org/html/draft-fujikawa-sdp-url-01
 * @param uri the start of the uri
 * @param msg the result #GstSDPMessage
 */
export function sdpMessageParseUri(uri: string, msg: SDPMessage): SDPResult
export interface MIKEYDecryptInfo {
}

export class MIKEYDecryptInfo {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYDecryptInfo

    static name: string
}

export interface MIKEYEncryptInfo {
}

export class MIKEYEncryptInfo {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYEncryptInfo

    static name: string
}

export interface MIKEYMapSRTP {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYMapSRTP

    /**
     * The security policy applied for the stream with `ssrc`
     * @field 
     */
    policy: number
    /**
     * the SSRC that must be used for the stream
     * @field 
     */
    ssrc: number
    /**
     * current rollover counter
     * @field 
     */
    roc: number
}

/**
 * The Security policy Map item for SRTP
 * @record 
 */
export class MIKEYMapSRTP {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYMapSRTP

    static name: string
}

export interface MIKEYMessage {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYMessage

    /**
     * the version
     * @field 
     */
    version: number
    /**
     * the #GstMIKEYType message type
     * @field 
     */
    type: MIKEYType
    /**
     * verify flag
     * @field 
     */
    v: boolean
    /**
     * a #GstMIKEYPRFFunc
     * @field 
     */
    prfFunc: MIKEYPRFFunc
    /**
     * Identifies the Crypto Session Bundle
     * @field 
     */
    cSBId: number
    /**
     * a #GstMIKEYMapType
     * @field 
     */
    mapType: MIKEYMapType
    /**
     * map info array of type depending on `map_type`
     * @field 
     */
    mapInfo: object[]
    /**
     * the payload array of #GstMIKEYPayload
     * @field 
     */
    payloads: object[]

    // Owm methods of GstSdp-1.0.GstSdp.MIKEYMessage

    /**
     * Add a Crypto policy for SRTP to `msg`.
     * @param policy The security policy applied for the stream with `ssrc`
     * @param ssrc the SSRC that must be used for the stream
     * @param roc current rollover counter
     */
    addCsSrtp(policy: number, ssrc: number, roc: number): boolean
    /**
     * Add a new payload to `msg`.
     * @param payload a #GstMIKEYPayload
     */
    addPayload(payload: MIKEYPayload): boolean
    /**
     * Add a new PKE payload to `msg` with the given parameters.
     * @param c envelope key cache indicator
     * @param data the encrypted envelope key
     */
    addPke(c: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with the given parameters.
     * @param rand random data
     */
    addRand(rand: Uint8Array): boolean
    /**
     * Add a new RAND payload to `msg` with `len` random bytes.
     * @param len length
     */
    addRandLen(len: number): boolean
    /**
     * Add a new T payload to `msg` with the given parameters.
     * @param type specifies the timestamp type used
     * @param tsValue The timestamp value of the specified `type`
     */
    addT(type: MIKEYTSType, tsValue: Uint8Array): boolean
    /**
     * Add a new T payload to `msg` that contains the current time
     * in NTP-UTC format.
     */
    addTNowNtpUtc(): boolean
    base64Encode(): string
    /**
     * Find the `nth` occurrence of the payload with `type` in `msg`.
     * @param type a #GstMIKEYPayloadType
     * @param nth payload to find
     */
    findPayload(type: MIKEYPayloadType, nth: number): MIKEYPayload
    /**
     * Get the policy information of `msg` at `idx`.
     * @param idx an index
     */
    getCsSrtp(idx: number): MIKEYMapSRTP
    /**
     * Get the number of crypto sessions in `msg`.
     */
    getNCs(): number
    /**
     * Get the number of payloads in `msg`.
     */
    getNPayloads(): number
    /**
     * Get the #GstMIKEYPayload at `idx` in `msg`
     * @param idx an index
     */
    getPayload(idx: number): MIKEYPayload
    /**
     * Insert a Crypto Session map for SRTP in `msg` at `idx`
     * 
     * When `idx` is -1, the policy will be appended.
     * @param idx the index to insert at
     * @param map the map info
     */
    insertCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Insert the `payload` at index `idx` in `msg`. If `idx` is -1, the payload
     * will be appended to `msg`.
     * @param idx an index
     * @param payload a #GstMIKEYPayload
     */
    insertPayload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Remove the SRTP policy at `idx`.
     * @param idx the index to remove
     */
    removeCsSrtp(idx: number): boolean
    /**
     * Remove the payload in `msg` at `idx`
     * @param idx an index
     */
    removePayload(idx: number): boolean
    /**
     * Replace a Crypto Session map for SRTP in `msg` at `idx` with `map`.
     * @param idx the index to insert at
     * @param map the map info
     */
    replaceCsSrtp(idx: number, map: MIKEYMapSRTP): boolean
    /**
     * Replace the payload at `idx` in `msg` with `payload`.
     * @param idx an index
     * @param payload a #GstMIKEYPayload
     */
    replacePayload(idx: number, payload: MIKEYPayload): boolean
    /**
     * Set the information in `msg`.
     * @param version a version
     * @param type a #GstMIKEYType
     * @param v verify flag
     * @param prfFunc the #GstMIKEYPRFFunc function to use
     * @param cSBId the Crypto Session Bundle id
     * @param mapType the #GstMIKEYMapType
     */
    setInfo(version: number, type: MIKEYType, v: boolean, prfFunc: MIKEYPRFFunc, cSBId: number, mapType: MIKEYMapType): boolean
    /**
     * Convert `msg` to a #GBytes.
     * @param info a #GstMIKEYEncryptInfo
     */
    toBytes(info: MIKEYEncryptInfo): any
    toCaps(caps: Gst.Caps): boolean
}

/**
 * Structure holding the information of the MIKEY message
 * @record 
 */
export class MIKEYMessage {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYMessage

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.MIKEYMessage

    /**
     * Make a new MIKEY message.
     * @constructor 
     */
    constructor() 
    /**
     * Make a new MIKEY message.
     * @constructor 
     */
    static new(): MIKEYMessage
    /**
     * Make a new #GstMIKEYMessage from `bytes`.
     * @constructor 
     * @param bytes a #GBytes
     * @param info a #GstMIKEYDecryptInfo
     */
    static newFromBytes(bytes: any, info: MIKEYDecryptInfo): MIKEYMessage
    /**
     * Makes mikey message including:
     *  - Security Policy Payload
     *  - Key Data Transport Payload
     *  - Key Data Sub-Payload
     * @constructor 
     * @param caps a #GstCaps, including SRTP parameters (srtp/srtcp cipher, authorization, key data)
     */
    static newFromCaps(caps: Gst.Caps): MIKEYMessage
    /**
     * Parse `size` bytes from `data` into a #GstMIKEYMessage. `info` contains the
     * parameters to decrypt and verify the data.
     * @constructor 
     * @param data bytes to read
     * @param info #GstMIKEYDecryptInfo
     */
    static newFromData(data: Uint8Array, info: MIKEYDecryptInfo): MIKEYMessage
}

export interface MIKEYPayload {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayload

    /**
     * the payload type
     * @field 
     */
    type: MIKEYPayloadType
    /**
     * length of the payload
     * @field 
     */
    len: number

    // Owm methods of GstSdp-1.0.GstSdp.MIKEYPayload

    /**
     * Add a new sub payload to `payload`.
     * @param newpay a #GstMIKEYPayload to add
     */
    kemacAddSub(newpay: MIKEYPayload): boolean
    /**
     * Get the number of sub payloads of `payload`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     */
    kemacGetNSub(): number
    /**
     * Get the sub payload of `payload` at `idx`. `payload` should be of type
     * %GST_MIKEY_PT_KEMAC.
     * @param idx an index
     */
    kemacGetSub(idx: number): MIKEYPayload
    /**
     * Remove the sub payload at `idx` in `payload`.
     * @param idx the index to remove
     */
    kemacRemoveSub(idx: number): boolean
    /**
     * Set the KEMAC parameters. `payload` should point to a %GST_MIKEY_PT_KEMAC
     * payload.
     * @param encAlg the #GstMIKEYEncAlg
     * @param macAlg a #GstMIKEYMacAlg
     */
    kemacSet(encAlg: MIKEYEncAlg, macAlg: MIKEYMacAlg): boolean
    /**
     * Set the key validity period in the %GST_MIKEY_PT_KEY_DATA `payload`.
     * @param vfLen the length of `vf_data`
     * @param vtData the Valid To data
     */
    keyDataSetInterval(vfLen: number, vtData: Uint8Array): boolean
    /**
     * Set `key_len` bytes of `key_data` of type `key_type` as the key for the
     * %GST_MIKEY_PT_KEY_DATA `payload`.
     * @param keyType a #GstMIKEYKeyDataType
     * @param keyData the key of type `key_type`
     */
    keyDataSetKey(keyType: MIKEYKeyDataType, keyData: Uint8Array): boolean
    /**
     * Set the salt key data. If `salt_len` is 0 and `salt_data` is %NULL, the
     * salt data will be removed.
     * @param saltData the salt
     */
    keyDataSetSalt(saltData: Uint8Array | null): boolean
    /**
     * Set the SPI/MKI validity in the %GST_MIKEY_PT_KEY_DATA `payload`.
     * @param spiData the SPI/MKI data
     */
    keyDataSetSpi(spiData: Uint8Array): boolean
    /**
     * Set the PKE values in `payload`. `payload` must be of type
     * %GST_MIKEY_PT_PKE.
     * @param c envelope key cache indicator
     * @param data the encrypted envelope key
     */
    pkeSet(c: MIKEYCacheType, data: Uint8Array): boolean
    /**
     * Set the random values in a %GST_MIKEY_PT_RAND `payload`.
     * @param rand random values
     */
    randSet(rand: Uint8Array): boolean
    /**
     * Add a new parameter to the %GST_MIKEY_PT_SP `payload` with `type,` `len`
     * and `val`.
     * @param type a type
     * @param val `len` bytes of data
     */
    spAddParam(type: number, val: Uint8Array): boolean
    /**
     * Get the number of security policy parameters in a %GST_MIKEY_PT_SP
     * `payload`.
     */
    spGetNParams(): number
    /**
     * Get the Security Policy parameter in a %GST_MIKEY_PT_SP `payload`
     * at `idx`.
     * @param idx an index
     */
    spGetParam(idx: number): MIKEYPayloadSPParam
    /**
     * Remove the Security Policy parameters from a %GST_MIKEY_PT_SP
     * `payload` at `idx`.
     * @param idx an index
     */
    spRemoveParam(idx: number): boolean
    /**
     * Set the Security Policy parameters for `payload`.
     * @param policy the policy number
     * @param proto a #GstMIKEYSecProto
     */
    spSet(policy: number, proto: MIKEYSecProto): boolean
    /**
     * Set the timestamp in a %GST_MIKEY_PT_T `payload`.
     * @param type the #GstMIKEYTSType
     * @param tsValue the timestamp value
     */
    tSet(type: MIKEYTSType, tsValue: Uint8Array): boolean
}

/**
 * Hold the common fields for all payloads
 * @record 
 */
export class MIKEYPayload {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayload

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.MIKEYPayload

    /**
     * Make a new #GstMIKEYPayload with `type`.
     * @constructor 
     * @param type a #GstMIKEYPayloadType
     */
    constructor(type: MIKEYPayloadType) 
    /**
     * Make a new #GstMIKEYPayload with `type`.
     * @constructor 
     * @param type a #GstMIKEYPayloadType
     */
    static new(type: MIKEYPayloadType): MIKEYPayload
}

export interface MIKEYPayloadKEMAC {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadKEMAC

    /**
     * the common #GstMIKEYPayload
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the #GstMIKEYEncAlg
     * @field 
     */
    encAlg: MIKEYEncAlg
    /**
     * the #GstMIKEYMacAlg
     * @field 
     */
    macAlg: MIKEYMacAlg
    /**
     * the subpayloads
     * @field 
     */
    subpayloads: object[]
}

/**
 * A structure holding the KEMAC payload
 * @record 
 */
export class MIKEYPayloadKEMAC {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadKEMAC

    static name: string
}

export interface MIKEYPayloadKeyData {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadKeyData

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the #GstMIKEYKeyDataType of `key_data`
     * @field 
     */
    keyType: MIKEYKeyDataType
    /**
     * length of `key_data`
     * @field 
     */
    keyLen: number
    /**
     * the key data
     * @field 
     */
    keyData: number
    /**
     * the length of `salt_data,` can be 0
     * @field 
     */
    saltLen: number
    /**
     * salt data
     * @field 
     */
    saltData: number
    /**
     * the Key Validity type
     * @field 
     */
    kvType: MIKEYKVType
    /**
     * length of `kv_data`
     * @field 
     */
    kvLen: Uint8Array
    /**
     * key validity data
     * @field 
     */
    kvData: Uint8Array
}

/**
 * The Key data payload contains key material. It should be added as sub
 * payload to the KEMAC.
 * @record 
 */
export class MIKEYPayloadKeyData {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadKeyData

    static name: string
}

export interface MIKEYPayloadPKE {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadPKE

    /**
     * the common #GstMIKEYPayload
     * @field 
     */
    pt: MIKEYPayload
    /**
     * envelope key cache indicator
     * @field 
     */
    c: MIKEYCacheType
    /**
     * length of `data`
     * @field 
     */
    dataLen: number
    /**
     * the encrypted envelope key
     * @field 
     */
    data: number
}

/**
 * The Envelope data payload contains the encrypted envelope key that is
 * used in the public-key transport to protect the data in the Key data
 * transport payload.  The encryption algorithm used is implicit from
 * the certificate/public key used.
 * @record 
 */
export class MIKEYPayloadPKE {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadPKE

    static name: string
}

export interface MIKEYPayloadRAND {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadRAND

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the length of `rand`
     * @field 
     */
    len: number
    /**
     * random values
     * @field 
     */
    rand: number
}

/**
 * The RAND payload consists of a (pseudo-)random bit-string
 * @record 
 */
export class MIKEYPayloadRAND {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadRAND

    static name: string
}

export interface MIKEYPayloadSP {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadSP

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * the policy number
     * @field 
     */
    policy: number
    /**
     * the security protocol
     * @field 
     */
    proto: MIKEYSecProto
    /**
     * array of #GstMIKEYPayloadSPParam
     * @field 
     */
    params: object[]
}

/**
 * The Security Policy payload defines a set of policies that apply to a
 * specific security protocol
 * @record 
 */
export class MIKEYPayloadSP {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadSP

    static name: string
}

export interface MIKEYPayloadSPParam {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadSPParam

    /**
     * specifies the type of the parameter
     * @field 
     */
    type: number
    /**
     * specifies the length of `val`
     * @field 
     */
    len: number
    /**
     * specifies the value of the parameter
     * @field 
     */
    val: number
}

/**
 * A Type/Length/Value field for security parameters
 * @record 
 */
export class MIKEYPayloadSPParam {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadSPParam

    static name: string
}

export interface MIKEYPayloadT {

    // Own fields of GstSdp-1.0.GstSdp.MIKEYPayloadT

    /**
     * the payload header
     * @field 
     */
    pt: MIKEYPayload
    /**
     * a #GstMIKEYTSType
     * @field 
     */
    type: MIKEYTSType
    /**
     * the timestamp value
     * @field 
     */
    tsValue: number
}

/**
 * The timestamp payload carries the timestamp information
 * @record 
 */
export class MIKEYPayloadT {

    // Own properties of GstSdp-1.0.GstSdp.MIKEYPayloadT

    static name: string
}

export interface SDPAttribute {

    // Own fields of GstSdp-1.0.GstSdp.SDPAttribute

    /**
     * the attribute key
     * @field 
     */
    key: string
    /**
     * the attribute value or NULL when it was a property attribute
     * @field 
     */
    value: string

    // Owm methods of GstSdp-1.0.GstSdp.SDPAttribute

    /**
     * Clear the attribute.
     */
    clear(): SDPResult
    /**
     * Set the attribute with `key` and `value`.
     * @param key the key
     * @param value the value
     */
    set(key: string, value: string | null): SDPResult
}

/**
 * The contents of the SDP "a=" field which contains a key/value pair.
 * @record 
 */
export class SDPAttribute {

    // Own properties of GstSdp-1.0.GstSdp.SDPAttribute

    static name: string
}

export interface SDPBandwidth {

    // Own fields of GstSdp-1.0.GstSdp.SDPBandwidth

    /**
     * the bandwidth modifier type
     * @field 
     */
    bwtype: string
    /**
     * the bandwidth in kilobits per second
     * @field 
     */
    bandwidth: number

    // Owm methods of GstSdp-1.0.GstSdp.SDPBandwidth

    /**
     * Reset the bandwidth information in `bw`.
     */
    clear(): SDPResult
    /**
     * Set bandwidth information in `bw`.
     * @param bwtype the bandwidth modifier type
     * @param bandwidth the bandwidth in kilobits per second
     */
    set(bwtype: string, bandwidth: number): SDPResult
}

/**
 * The contents of the SDP "b=" field which specifies the proposed bandwidth to
 * be used by the session or media.
 * @record 
 */
export class SDPBandwidth {

    // Own properties of GstSdp-1.0.GstSdp.SDPBandwidth

    static name: string
}

export interface SDPConnection {

    // Own fields of GstSdp-1.0.GstSdp.SDPConnection

    /**
     * the type of network. "IN" is defined to have the meaning
     *    "Internet".
     * @field 
     */
    nettype: string
    /**
     * the type of `address`.
     * @field 
     */
    addrtype: string
    /**
     * the address
     * @field 
     */
    address: string
    /**
     * the time to live of the address
     * @field 
     */
    ttl: number
    /**
     * the number of layers
     * @field 
     */
    addrNumber: number

    // Owm methods of GstSdp-1.0.GstSdp.SDPConnection

    /**
     * Clear the connection.
     */
    clear(): SDPResult
    /**
     * Set the connection with the given parameters.
     * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
     * @param addrtype the type of address.
     * @param address the address
     * @param ttl the time to live of the address
     * @param addrNumber the number of layers
     */
    set(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
}

/**
 * The contents of the SDP "c=" field which contains connection data.
 * @record 
 */
export class SDPConnection {

    // Own properties of GstSdp-1.0.GstSdp.SDPConnection

    static name: string
}

export interface SDPKey {

    // Own fields of GstSdp-1.0.GstSdp.SDPKey

    /**
     * the encryption type
     * @field 
     */
    type: string
    /**
     * the encryption data
     * @field 
     */
    data: string
}

/**
 * The contents of the SDP "k=" field which is used to convey encryption
 * keys.
 * @record 
 */
export class SDPKey {

    // Own properties of GstSdp-1.0.GstSdp.SDPKey

    static name: string
}

export interface SDPMedia {

    // Own fields of GstSdp-1.0.GstSdp.SDPMedia

    /**
     * the media type
     * @field 
     */
    media: string
    /**
     * the transport port to which the media stream will be sent
     * @field 
     */
    port: number
    /**
     * the number of ports or -1 if only one port was specified
     * @field 
     */
    numPorts: number
    /**
     * the transport protocol
     * @field 
     */
    proto: string
    /**
     * an array of #gchar formats
     * @field 
     */
    fmts: object[]
    /**
     * the media title
     * @field 
     */
    information: string
    /**
     * array of #GstSDPConnection with media connection information
     * @field 
     */
    connections: object[]
    /**
     * array of #GstSDPBandwidth with media bandwidth information
     * @field 
     */
    bandwidths: object[]
    /**
     * the encryption key
     * @field 
     */
    key: SDPKey
    /**
     * array of #GstSDPAttribute with the additional media attributes
     * @field 
     */
    attributes: object[]

    // Owm methods of GstSdp-1.0.GstSdp.SDPMedia

    /**
     * Add the attribute with `key` and `value` to `media`.
     * @param key a key
     * @param value a value
     */
    addAttribute(key: string, value: string | null): SDPResult
    /**
     * Add the bandwidth information with `bwtype` and `bandwidth` to `media`.
     * @param bwtype the bandwidth modifier type
     * @param bandwidth the bandwidth in kilobits per second
     */
    addBandwidth(bwtype: string, bandwidth: number): SDPResult
    /**
     * Add the given connection parameters to `media`.
     * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
     * @param addrtype the type of address.
     * @param address the address
     * @param ttl the time to live of the address
     * @param addrNumber the number of layers
     */
    addConnection(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    /**
     * Add the format information to `media`.
     * @param format the format
     */
    addFormat(format: string): SDPResult
    /**
     * Convert the contents of `media` to a text string.
     */
    asText(): string
    /**
     * Get the number of attribute fields in `media`.
     */
    attributesLen(): number
    /**
     * Mapping of attributes of #GstSDPMedia to #GstCaps
     * @param caps a #GstCaps
     */
    attributesToCaps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth fields in `media`.
     */
    bandwidthsLen(): number
    /**
     * Get the number of connection fields in `media`.
     */
    connectionsLen(): number
    /**
     * Allocate a new copy of `media` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_media_free function.
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMedia ]
    /**
     * Get the number of formats in `media`.
     */
    formatsLen(): number
    /**
     * Free all resources allocated by `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was dynamically
     * allocated with gst_sdp_media_new().
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `media`.
     * @param idx an index
     */
    getAttribute(idx: number): SDPAttribute
    /**
     * Get the first attribute value for `key` in `media`.
     * @param key a key
     */
    getAttributeVal(key: string): string
    /**
     * Get the `nth` attribute value for `key` in `media`.
     * @param key a key
     * @param nth an index
     */
    getAttributeValN(key: string, nth: number): string
    /**
     * Get the bandwidth at position `idx` in `media`.
     * @param idx an index
     */
    getBandwidth(idx: number): SDPBandwidth
    /**
     * Mapping of caps from SDP fields:
     * 
     * a=rtpmap:(payload) (encoding_name)/(clock_rate)[/(encoding_params)]
     * 
     * a=framesize:(payload) (width)-(height)
     * 
     * a=fmtp:(payload) (param)[=(value)];...
     * 
     * Note that the extmap attribute is set only by gst_sdp_media_attributes_to_caps().
     * @param pt a payload type
     */
    getCapsFromMedia(pt: number): Gst.Caps
    /**
     * Get the connection at position `idx` in `media`.
     * @param idx an index
     */
    getConnection(idx: number): SDPConnection
    /**
     * Get the format information at position `idx` in `media`.
     * @param idx an index
     */
    getFormat(idx: number): string
    /**
     * Get the information of `media`
     */
    getInformation(): string
    /**
     * Get the encryption information from `media`.
     */
    getKey(): SDPKey
    /**
     * Get the media description of `media`.
     */
    getMedia(): string
    /**
     * Get the number of ports for `media`.
     */
    getNumPorts(): number
    /**
     * Get the port number for `media`.
     */
    getPort(): number
    /**
     * Get the transport protocol of `media`
     */
    getProto(): string
    /**
     * Initialize `media` so that its contents are as if it was freshly allocated
     * with gst_sdp_media_new(). This function is mostly used to initialize a media
     * allocated on the stack. gst_sdp_media_uninit() undoes this operation.
     * 
     * When this function is invoked on newly allocated data (with malloc or on the
     * stack), its contents should be set to 0 before calling this function.
     */
    init(): SDPResult
    /**
     * Insert the attribute to `media` at `idx`. When `idx` is -1,
     * the attribute is appended.
     * @param idx an index
     * @param attr a #GstSDPAttribute
     */
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert the bandwidth information to `media` at `idx`. When `idx` is -1,
     * the bandwidth is appended.
     * @param idx an index
     * @param bw a #GstSDPBandwidth
     */
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert the connection information to `media` at `idx`. When `idx` is -1,
     * the connection is appended.
     * @param idx an index
     * @param conn a #GstSDPConnection
     */
    insertConnection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Insert the format information to `media` at `idx`. When `idx` is -1,
     * the format is appended.
     * @param idx an index
     * @param format the format
     */
    insertFormat(idx: number, format: string): SDPResult
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMedia.
     */
    parseKeymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Remove the attribute in `media` at `idx`.
     * @param idx an index
     */
    removeAttribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `media` at `idx`.
     * @param idx an index
     */
    removeBandwidth(idx: number): SDPResult
    /**
     * Remove the connection information in `media` at `idx`.
     * @param idx an index
     */
    removeConnection(idx: number): SDPResult
    /**
     * Remove the format information in `media` at `idx`.
     * @param idx an index
     */
    removeFormat(idx: number): SDPResult
    /**
     * Replace the attribute in `media` at `idx` with `attr`.
     * @param idx an index
     * @param attr a #GstSDPAttribute
     */
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `media` at `idx` with `bw`.
     * @param idx an index
     * @param bw a #GstSDPBandwidth
     */
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the connection information in `media` at `idx` with `conn`.
     * @param idx an index
     * @param conn a #GstSDPConnection
     */
    replaceConnection(idx: number, conn: SDPConnection): SDPResult
    /**
     * Replace the format information in `media` at `idx` with `format`.
     * @param idx an index
     * @param format the format
     */
    replaceFormat(idx: number, format: string): SDPResult
    /**
     * Set the media information of `media` to `information`.
     * @param information the media information
     */
    setInformation(information: string): SDPResult
    /**
     * Adds the encryption information to `media`.
     * @param type the encryption type
     * @param data the encryption data
     */
    setKey(type: string, data: string): SDPResult
    /**
     * Set the media description of `media` to `med`.
     * @param med the media description
     */
    setMedia(med: string): SDPResult
    /**
     * Set the port information in `media`.
     * @param port the port number
     * @param numPorts the number of ports
     */
    setPortInfo(port: number, numPorts: number): SDPResult
    /**
     * Set the media transport protocol of `media` to `proto`.
     * @param proto the media transport protocol
     */
    setProto(proto: string): SDPResult
    /**
     * Free all resources allocated in `media`. `media` should not be used anymore after
     * this function. This function should be used when `media` was allocated on the
     * stack and initialized with gst_sdp_media_init().
     */
    uninit(): SDPResult
}

/**
 * The contents of the SDP "m=" field with all related fields.
 * @record 
 */
export class SDPMedia {

    // Own properties of GstSdp-1.0.GstSdp.SDPMedia

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.SDPMedia

    /**
     * Allocate a new GstSDPMedia and store the result in `media`.
     */
    static new(): [ /* returnType */ SDPResult, /* media */ SDPMedia ]
    /**
     * Mapping of caps to SDP fields:
     * 
     * a=rtpmap:(payload) (encoding_name) or (clock_rate)[or (encoding_params)]
     * 
     * a=framesize:(payload) (width)-(height)
     * 
     * a=fmtp:(payload) (param)[=(value)];...
     * 
     * a=rtcp-fb:(payload) (param1) [param2]...
     * 
     * a=extmap:(id)[/direction] (extensionname) (extensionattributes)
     * @param caps a #GstCaps
     * @param media a #GstSDPMedia
     */
    static setMediaFromCaps(caps: Gst.Caps, media: SDPMedia): SDPResult
}

export interface SDPMessage {

    // Own fields of GstSdp-1.0.GstSdp.SDPMessage

    /**
     * the protocol version
     * @field 
     */
    version: string
    /**
     * owner/creator and session identifier
     * @field 
     */
    origin: SDPOrigin
    /**
     * session name
     * @field 
     */
    sessionName: string
    /**
     * session information
     * @field 
     */
    information: string
    /**
     * URI of description
     * @field 
     */
    uri: string
    /**
     * array of #gchar with email addresses
     * @field 
     */
    emails: object[]
    /**
     * array of #gchar with phone numbers
     * @field 
     */
    phones: object[]
    /**
     * connection information for the session
     * @field 
     */
    connection: SDPConnection
    /**
     * array of #GstSDPBandwidth with bandwidth information
     * @field 
     */
    bandwidths: object[]
    /**
     * array of #GstSDPTime with time descriptions
     * @field 
     */
    times: object[]
    /**
     * array of #GstSDPZone with time zone adjustments
     * @field 
     */
    zones: object[]
    /**
     * encryption key
     * @field 
     */
    key: SDPKey
    /**
     * array of #GstSDPAttribute with session attributes
     * @field 
     */
    attributes: object[]
    /**
     * array of #GstSDPMedia with media descriptions
     * @field 
     */
    medias: object[]

    // Owm methods of GstSdp-1.0.GstSdp.SDPMessage

    /**
     * Add the attribute with `key` and `value` to `msg`.
     * @param key the key
     * @param value the value
     */
    addAttribute(key: string, value: string | null): SDPResult
    /**
     * Add the specified bandwidth information to `msg`.
     * @param bwtype the bandwidth modifier type
     * @param bandwidth the bandwidth in kilobits per second
     */
    addBandwidth(bwtype: string, bandwidth: number): SDPResult
    /**
     * Add `email` to the list of emails in `msg`.
     * @param email an email
     */
    addEmail(email: string): SDPResult
    /**
     * Adds `media` to the array of medias in `msg`. This function takes ownership of
     * the contents of `media` so that `media` will have to be reinitialized with
     * gst_sdp_media_init() before it can be used again.
     * @param media a #GstSDPMedia to add
     */
    addMedia(media: SDPMedia): SDPResult
    /**
     * Add `phone` to the list of phones in `msg`.
     * @param phone a phone
     */
    addPhone(phone: string): SDPResult
    /**
     * Add time information `start` and `stop` to `msg`.
     * @param start the start time
     * @param stop the stop time
     * @param repeat the repeat times
     */
    addTime(start: string, stop: string, repeat: string[]): SDPResult
    /**
     * Add time zone information to `msg`.
     * @param adjTime the NTP time that a time zone adjustment happens
     * @param typedTime the offset from the time when the session was first scheduled
     */
    addZone(adjTime: string, typedTime: string): SDPResult
    /**
     * Convert the contents of `msg` to a text string.
     */
    asText(): string
    /**
     * Get the number of attributes in `msg`.
     */
    attributesLen(): number
    /**
     * Mapping of attributes of #GstSDPMessage to #GstCaps
     * @param caps a #GstCaps
     */
    attributesToCaps(caps: Gst.Caps): SDPResult
    /**
     * Get the number of bandwidth information in `msg`.
     */
    bandwidthsLen(): number
    /**
     * Allocate a new copy of `msg` and store the result in `copy`. The value in
     * `copy` should be release with gst_sdp_message_free function.
     */
    copy(): [ /* returnType */ SDPResult, /* copy */ SDPMessage ]
    /**
     * Dump the parsed contents of `msg` to stdout.
     */
    dump(): SDPResult
    /**
     * Get the number of emails in `msg`.
     */
    emailsLen(): number
    /**
     * Free all resources allocated by `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was dynamically
     * allocated with gst_sdp_message_new().
     */
    free(): SDPResult
    /**
     * Get the attribute at position `idx` in `msg`.
     * @param idx the index
     */
    getAttribute(idx: number): SDPAttribute
    /**
     * Get the first attribute with key `key` in `msg`.
     * @param key the key
     */
    getAttributeVal(key: string): string
    /**
     * Get the `nth` attribute with key `key` in `msg`.
     * @param key the key
     * @param nth the index
     */
    getAttributeValN(key: string, nth: number): string
    /**
     * Get the bandwidth at index `idx` from `msg`.
     * @param idx the bandwidth index
     */
    getBandwidth(idx: number): SDPBandwidth
    /**
     * Get the connection of `msg`.
     */
    getConnection(): SDPConnection
    /**
     * Get the email with number `idx` from `msg`.
     * @param idx an email index
     */
    getEmail(idx: number): string
    /**
     * Get the information in `msg`.
     */
    getInformation(): string
    /**
     * Get the encryption information from `msg`.
     */
    getKey(): SDPKey
    /**
     * Get the media description at index `idx` in `msg`.
     * @param idx the index
     */
    getMedia(idx: number): SDPMedia
    /**
     * Get the origin of `msg`.
     */
    getOrigin(): SDPOrigin
    /**
     * Get the phone with number `idx` from `msg`.
     * @param idx a phone index
     */
    getPhone(idx: number): string
    /**
     * Get the session name in `msg`.
     */
    getSessionName(): string
    /**
     * Get time information with index `idx` from `msg`.
     * @param idx the time index
     */
    getTime(idx: number): SDPTime
    /**
     * Get the URI in `msg`.
     */
    getUri(): string
    /**
     * Get the version in `msg`.
     */
    getVersion(): string
    /**
     * Get time zone information with index `idx` from `msg`.
     * @param idx the zone index
     */
    getZone(idx: number): SDPZone
    /**
     * Initialize `msg` so that its contents are as if it was freshly allocated
     * with gst_sdp_message_new(). This function is mostly used to initialize a message
     * allocated on the stack. gst_sdp_message_uninit() undoes this operation.
     * 
     * When this function is invoked on newly allocated data (with malloc or on the
     * stack), its contents should be set to 0 before calling this function.
     */
    init(): SDPResult
    /**
     * Insert attribute into the array of attributes in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the attribute is inserted at the end.
     * @param idx an index
     * @param attr a #GstSDPAttribute
     */
    insertAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Insert bandwidth parameters into the array of bandwidths in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the bandwidth is inserted at the end.
     * @param idx an index
     * @param bw the bandwidth
     */
    insertBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Insert `email` into the array of emails in `msg` at index `idx`.
     * When -1 is given as `idx,` the email is inserted at the end.
     * @param idx an index
     * @param email an email
     */
    insertEmail(idx: number, email: string): SDPResult
    /**
     * Insert `phone` into the array of phone numbers in `msg` at index `idx`.
     * When -1 is given as `idx,` the phone is inserted at the end.
     * @param idx a phone index
     * @param phone a phone
     */
    insertPhone(idx: number, phone: string): SDPResult
    /**
     * Insert time parameters into the array of times in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the times are inserted at the end.
     * @param idx an index
     * @param t a #GstSDPTime
     */
    insertTime(idx: number, t: SDPTime): SDPResult
    /**
     * Insert zone parameters into the array of zones in `msg`
     * at index `idx`.
     * When -1 is given as `idx,` the zone is inserted at the end.
     * @param idx an index
     * @param zone a #GstSDPZone
     */
    insertZone(idx: number, zone: SDPZone): SDPResult
    /**
     * Get the number of media descriptions in `msg`.
     */
    mediasLen(): number
    /**
     * Creates a new #GstMIKEYMessage after parsing the key-mgmt attribute
     * from a #GstSDPMessage.
     */
    parseKeymgmt(): [ /* returnType */ SDPResult, /* mikey */ MIKEYMessage ]
    /**
     * Get the number of phones in `msg`.
     */
    phonesLen(): number
    /**
     * Remove the attribute in `msg` at index `idx`.
     * @param idx the index
     */
    removeAttribute(idx: number): SDPResult
    /**
     * Remove the bandwidth information in `msg` at index `idx`.
     * @param idx the bandwidth index
     */
    removeBandwidth(idx: number): SDPResult
    /**
     * Remove the email in `msg` at index `idx`.
     * @param idx an email index
     */
    removeEmail(idx: number): SDPResult
    /**
     * Remove the phone number in `msg` at index `idx`.
     * @param idx a phone index
     */
    removePhone(idx: number): SDPResult
    /**
     * Remove the time information in `msg` at index `idx`.
     * @param idx the index
     */
    removeTime(idx: number): SDPResult
    /**
     * Remove the zone information in `msg` at index `idx`.
     * @param idx the index
     */
    removeZone(idx: number): SDPResult
    /**
     * Replace the attribute in `msg` at index `idx` with `attr`.
     * @param idx the index
     * @param attr a #GstSDPAttribute
     */
    replaceAttribute(idx: number, attr: SDPAttribute): SDPResult
    /**
     * Replace the bandwidth information in `msg` at index `idx` with `bw`.
     * @param idx the bandwidth index
     * @param bw the bandwidth
     */
    replaceBandwidth(idx: number, bw: SDPBandwidth): SDPResult
    /**
     * Replace the email in `msg` at index `idx` with `email`.
     * @param idx an email index
     * @param email an email
     */
    replaceEmail(idx: number, email: string): SDPResult
    /**
     * Replace the phone number in `msg` at index `idx` with `phone`.
     * @param idx a phone index
     * @param phone a phone
     */
    replacePhone(idx: number, phone: string): SDPResult
    /**
     * Replace the time information in `msg` at index `idx` with `t`.
     * @param idx the index
     * @param t a #GstSDPTime
     */
    replaceTime(idx: number, t: SDPTime): SDPResult
    /**
     * Replace the zone information in `msg` at index `idx` with `zone`.
     * @param idx the index
     * @param zone a #GstSDPZone
     */
    replaceZone(idx: number, zone: SDPZone): SDPResult
    /**
     * Configure the SDP connection in `msg` with the given parameters.
     * @param nettype the type of network. "IN" is defined to have the meaning "Internet".
     * @param addrtype the type of address.
     * @param address the address
     * @param ttl the time to live of the address
     * @param addrNumber the number of layers
     */
    setConnection(nettype: string, addrtype: string, address: string, ttl: number, addrNumber: number): SDPResult
    /**
     * Set the information in `msg`.
     * @param information the information
     */
    setInformation(information: string): SDPResult
    /**
     * Adds the encryption information to `msg`.
     * @param type the encryption type
     * @param data the encryption data
     */
    setKey(type: string, data: string): SDPResult
    /**
     * Configure the SDP origin in `msg` with the given parameters.
     * @param username the user name
     * @param sessId a session id
     * @param sessVersion a session version
     * @param nettype a network type
     * @param addrtype an address type
     * @param addr an address
     */
    setOrigin(username: string, sessId: string, sessVersion: string, nettype: string, addrtype: string, addr: string): SDPResult
    /**
     * Set the session name in `msg`.
     * @param sessionName the session name
     */
    setSessionName(sessionName: string): SDPResult
    /**
     * Set the URI in `msg`.
     * @param uri the URI
     */
    setUri(uri: string): SDPResult
    /**
     * Set the version in `msg`.
     * @param version the version
     */
    setVersion(version: string): SDPResult
    /**
     * Get the number of time information entries in `msg`.
     */
    timesLen(): number
    /**
     * Free all resources allocated in `msg`. `msg` should not be used anymore after
     * this function. This function should be used when `msg` was allocated on the
     * stack and initialized with gst_sdp_message_init().
     */
    uninit(): SDPResult
    /**
     * Get the number of time zone information entries in `msg`.
     */
    zonesLen(): number
}

/**
 * The GstSDPMessage helper functions makes it easy to parse and create SDP
 * messages.
 * @record 
 */
export class SDPMessage {

    // Own properties of GstSdp-1.0.GstSdp.SDPMessage

    static name: string

    // Constructors of GstSdp-1.0.GstSdp.SDPMessage

    /**
     * Allocate a new GstSDPMessage and store the result in `msg`.
     */
    static new(): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Parse `text` and create a new SDPMessage from these.
     * @param text A dynamically allocated string representing the SDP description
     */
    static newFromText(text: string): [ /* returnType */ SDPResult, /* msg */ SDPMessage ]
    /**
     * Creates a uri from `msg` with the given `scheme`. The uri has the format:
     * 
     *  \`scheme:`///[#type=value *[&type=value]]
     * 
     *  Where each value is url encoded.
     * @param scheme the uri scheme
     * @param msg the #GstSDPMessage
     */
    static asUri(scheme: string, msg: SDPMessage): string
    /**
     * Parse the contents of `size` bytes pointed to by `data` and store the result in
     * `msg`.
     * @param data the start of the buffer
     * @param msg the result #GstSDPMessage
     */
    static parseBuffer(data: Uint8Array, msg: SDPMessage): SDPResult
    /**
     * Parse the null-terminated `uri` and store the result in `msg`.
     * 
     * The uri should be of the form:
     * 
     *  scheme://[address[:ttl=ttl][:noa=noa]]/[sessionname]
     *               [#type=value *[&type=value]]
     * 
     *  where value is url encoded. This looslely resembles
     *  http://tools.ietf.org/html/draft-fujikawa-sdp-url-01
     * @param uri the start of the uri
     * @param msg the result #GstSDPMessage
     */
    static parseUri(uri: string, msg: SDPMessage): SDPResult
}

export interface SDPOrigin {

    // Own fields of GstSdp-1.0.GstSdp.SDPOrigin

    /**
     * the user's login on the originating host, or it is "-"
     *    if the originating host does not support the concept of user ids.
     * @field 
     */
    username: string
    /**
     * is a numeric string such that the tuple of `username,` `sess_id,`
     *    `nettype,` `addrtype` and `addr` form a globally unique identifier for the
     *    session.
     * @field 
     */
    sessId: string
    /**
     * a version number for this announcement
     * @field 
     */
    sessVersion: string
    /**
     * the type of network. "IN" is defined to have the meaning
     *    "Internet".
     * @field 
     */
    nettype: string
    /**
     * the type of `addr`.
     * @field 
     */
    addrtype: string
    /**
     * the globally unique address of the machine from which the session was
     *     created.
     * @field 
     */
    addr: string
}

/**
 * The contents of the SDP "o=" field which gives the originator of the session
 * (their username and the address of the user's host) plus a session id and
 * session version number.
 * @record 
 */
export class SDPOrigin {

    // Own properties of GstSdp-1.0.GstSdp.SDPOrigin

    static name: string
}

export interface SDPTime {

    // Own fields of GstSdp-1.0.GstSdp.SDPTime

    /**
     * start time for the conference. The value is the decimal
     *     representation of Network Time Protocol (NTP) time values in seconds
     * @field 
     */
    start: string
    /**
     * stop time for the conference. The value is the decimal
     *     representation of Network Time Protocol (NTP) time values in seconds
     * @field 
     */
    stop: string
    /**
     * repeat times for a session
     * @field 
     */
    repeat: object[]

    // Owm methods of GstSdp-1.0.GstSdp.SDPTime

    /**
     * Reset the time information in `t`.
     */
    clear(): SDPResult
    /**
     * Set time information `start,` `stop` and `repeat` in `t`.
     * @param start the start time
     * @param stop the stop time
     * @param repeat the repeat times
     */
    set(start: string, stop: string, repeat: string[]): SDPResult
}

/**
 * The contents of the SDP "t=" field which specify the start and stop times for
 * a conference session.
 * @record 
 */
export class SDPTime {

    // Own properties of GstSdp-1.0.GstSdp.SDPTime

    static name: string
}

export interface SDPZone {

    // Own fields of GstSdp-1.0.GstSdp.SDPZone

    /**
     * the NTP time that a time zone adjustment happens
     * @field 
     */
    time: string
    /**
     * the offset from the time when the session was first scheduled
     * @field 
     */
    typedTime: string

    // Owm methods of GstSdp-1.0.GstSdp.SDPZone

    /**
     * Reset the zone information in `zone`.
     */
    clear(): SDPResult
    /**
     * Set zone information in `zone`.
     * @param adjTime the NTP time that a time zone adjustment happens
     * @param typedTime the offset from the time when the session was first scheduled
     */
    set(adjTime: string, typedTime: string): SDPResult
}

/**
 * The contents of the SDP "z=" field which allows the sender to
 * specify a list of time zone adjustments and offsets from the base
 * time.
 * @record 
 */
export class SDPZone {

    // Own properties of GstSdp-1.0.GstSdp.SDPZone

    static name: string
}
