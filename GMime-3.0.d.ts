
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GMime-3.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * An address type.
 */
export enum AddressType {
    /**
     * Represents the addresses in the Sender header.
     */
    SENDER,
    /**
     * Represents the addresses in the From header.
     */
    FROM,
    /**
     * Represents the addresses in the Reply-To header.
     */
    REPLY_TO,
    /**
     * Represents the recipients in the To header.
     */
    TO,
    /**
     * Represents the recipients in the Cc header.
     */
    CC,
    /**
     * Represents the recipients in the Bcc header.
     */
    BCC,
}
/**
 * A description of the user's preference for encrypted messaging.
 */
export enum AutocryptPreferEncrypt {
    /**
     * No preference stated.
     */
    NONE,
    /**
     * Please encrypt, if you also have this preference
     */
    MUTUAL,
}
/**
 * A cipher algorithm.
 */
export enum CipherAlgo {
    /**
     * The default (or unknown) cipher.
     */
    DEFAULT,
    /**
     * The IDEA cipher.
     */
    IDEA,
    /**
     * The 3DES cipher.
     */
    TODO_3DES,
    /**
     * The CAST5 cipher.
     */
    CAST5,
    /**
     * The Blowfish cipher.
     */
    BLOWFISH,
    /**
     * The AES (aka RIJANDALE) cipher.
     */
    AES,
    /**
     * The AES-192 cipher.
     */
    AES192,
    /**
     * The AES-256 cipher.
     */
    AES256,
    /**
     * The Twofish cipher.
     */
    TWOFISH,
    /**
     * The Camellia-128 cipher.
     */
    CAMELLIA128,
    /**
     * The Camellia-192 cipher.
     */
    CAMELLIA192,
    /**
     * The Camellia-256 cipher.
     */
    CAMELLIA256,
}
/**
 * A Content-Transfer-Encoding enumeration.
 */
export enum ContentEncoding {
    /**
     * Default transfer encoding.
     */
    DEFAULT,
    /**
     * 7bit text transfer encoding.
     */
    TODO_7BIT,
    /**
     * 8bit text transfer encoding.
     */
    TODO_8BIT,
    /**
     * Binary transfer encoding.
     */
    BINARY,
    /**
     * Base64 transfer encoding.
     */
    BASE64,
    /**
     * Quoted-printable transfer encoding.
     */
    QUOTEDPRINTABLE,
    /**
     * Uuencode transfer encoding.
     */
    UUENCODE,
}
/**
 * A hash algorithm.
 */
export enum DigestAlgo {
    /**
     * The default hash algorithm.
     */
    DEFAULT,
    /**
     * The MD5 hash algorithm.
     */
    MD5,
    /**
     * The SHA-1 hash algorithm.
     */
    SHA1,
    /**
     * The RIPEMD-160 hash algorithm.
     */
    RIPEMD160,
    /**
     * The MD2 hash algorithm.
     */
    MD2,
    /**
     * The TIGER-192 hash algorithm.
     */
    TIGER192,
    /**
     * The HAVAL-5-160 hash algorithm.
     */
    HAVAL5160,
    /**
     * The SHA-256 hash algorithm.
     */
    SHA256,
    /**
     * The SHA-384 hash algorithm.
     */
    SHA384,
    /**
     * The SHA-512 hash algorithm.
     */
    SHA512,
    /**
     * The SHA-224 hash algorithm.
     */
    SHA224,
    /**
     * The MD4 hash algorithm.
     */
    MD4,
    /**
     * The CRC32 hash algorithm.
     */
    CRC32,
    /**
     * The rfc1510 CRC32 hash algorithm.
     */
    CRC32_RFC1510,
    /**
     * The rfc2440 CRC32 hash algorithm.
     */
    CRC32_RFC2440,
}
/**
 * Used with functions like g_mime_filter_best_encoding() and
 * g_mime_object_encode() as the 'constraint' argument. These values
 * provide a means of letting the filter know what the encoding
 * constraints are for the stream.
 */
export enum EncodingConstraint {
    /**
     * The stream data must fit within the 7bit ASCII range.
     */
    TODO_7BIT,
    /**
     * The stream data may have bytes with the high bit set, but no null bytes.
     */
    TODO_8BIT,
    /**
     * The stream may contain any binary data.
     */
    BINARY,
}
/**
 * Encryption flags.
 */
export enum EncryptFlags {
    /**
     * No flags specified.
     */
    NONE,
    /**
     * Always trust the specified keys.
     */
    ALWAYS_TRUST,
    /**
     * Don't compress the plaintext before encrypting.
     */
    NO_COMPRESS,
    /**
     * Encrypt symmetrically.
     */
    SYMMETRIC,
    /**
     * Do not include the key ids in the ciphertext.
     */
    THROW_KEYIDS,
}
/**
 * The mode for a #GMimeFilterFrom filter.
 */
export enum FilterFromMode {
    /**
     * Default mode.
     */
    DEFAULT,
    /**
     * Escape 'From ' lines with a '>'
     */
    ESCAPE,
    /**
     * QP-Encode 'From ' lines
     */
    ARMOR,
}
/**
 * The mode for the #GMimeFilterGZip filter.
 */
export enum FilterGZipMode {
    /**
     * Compress (zip) mode.
     */
    ZIP,
    /**
     * Uncompress (unzip) mode.
     */
    UNZIP,
}
/**
 * An enum of formats.
 */
export enum Format {
    /**
     * The stream contains a single message.
     */
    MESSAGE,
    /**
     * The stream is in the UNIX mbox format.
     */
    MBOX,
    /**
     * The stream is in the MMDF format.
     */
    MMDF,
}
/**
 * There are two commonly used line-endings used by modern Operating Systems.
 * Unix-based systems such as Linux and Mac OS use a single character ('\n' aka LF)
 * to represent the end of line where-as Windows (or DOS) uses a sequence of two
 * characters ("\r\n" aka CRLF). Most text-based network protocols such as SMTP,
 * POP3, and IMAP use the CRLF sequence as well.
 */
export enum NewLineFormat {
    /**
     * The Unix New-Line format ("\n").
     */
    UNIX,
    /**
     * The DOS New-Line format ("\r\n").
     */
    DOS,
}
/**
 * The type of OpenPGP data found, if any.
 */
export enum OpenPGPData {
    /**
     * No OpenPGP data found.
     */
    NONE,
    /**
     * The content contains OpenPGP encrypted data.
     */
    ENCRYPTED,
    /**
     * The content contains OpenPGP signed data.
     */
    SIGNED,
    /**
     * The content contains OpenPGP public key data.
     */
    PUBLIC_KEY,
    /**
     * The content contains OpenPGP private key data.
     */
    PRIVATE_KEY,
}
/**
 * The MIME specifications specify that the proper method for encoding Content-Type and
 * Content-Disposition parameter values is the method described in
 * <a href="https://tools.ietf.org/html/rfc2231">rfc2231</a>. However, it is common for
 * some older email clients to improperly encode using the method described in
 * <a href="https://tools.ietf.org/html/rfc2047">rfc2047</a> instead.
 */
export enum ParamEncodingMethod {
    /**
     * Use the default encoding method set on the #GMimeFormatOptions.
     */
    DEFAULT,
    /**
     * Use the encoding method described in rfc2231.
     */
    RFC2231,
    /**
     * Use the encoding method described in rfc2047.
     */
    RFC2047,
}
/**
 * Issues the `GMimeParser` detects. Note that the `GMIME_CRIT_*` issues indicate that some parts of the `GMimeParser` input may
 * be ignored or will be interpreted differently by other software products.
 */
export enum ParserWarning {
    /**
     * Repeated exactly the same header which should exist only once.
     */
    WARN_DUPLICATED_HEADER,
    /**
     * Repeated exactly the same header parameter.
     */
    WARN_DUPLICATED_PARAMETER,
    /**
     * A header contains unencoded 8-bit characters.
     */
    WARN_UNENCODED_8BIT_HEADER,
    /**
     * Invalid content type, assuming `application/octet-stream`.
     */
    WARN_INVALID_CONTENT_TYPE,
    /**
     * Invalid RFC 2047 encoded header value.
     */
    WARN_INVALID_RFC2047_HEADER_VALUE,
    /**
     * No child parts detected within a multipart.
     */
    WARN_MALFORMED_MULTIPART,
    /**
     * The message is truncated.
     */
    WARN_TRUNCATED_MESSAGE,
    /**
     * The message is malformed.
     */
    WARN_MALFORMED_MESSAGE,
    /**
     * Invalid header name, the parser may skip the message or parts of it.
     */
    CRIT_INVALID_HEADER_NAME,
    /**
     * Conflicting header.
     */
    CRIT_CONFLICTING_HEADER,
    /**
     * Conflicting header parameter.
     */
    CRIT_CONFLICTING_PARAMETER,
    /**
     * A multipart lacks the required boundary parameter.
     */
    CRIT_MULTIPART_WITHOUT_BOUNDARY,
    /**
     * Invalid header parameter.
     */
    WARN_INVALID_PARAMETER,
    /**
     * Invalid address list.
     */
    WARN_INVALID_ADDRESS_LIST,
    /**
     * The maximum MIME nesting level has been exceeded. This is very likely to be an attempt to exploit the MIME parser.
     */
    CRIT_NESTING_OVERFLOW,
    /**
     * A MIME part's headers were terminated by a boundary marker.
     */
    WARN_PART_WITHOUT_CONTENT,
    /**
     * A MIME part was encountered without any headers -or- content. This is very likely to be an attempt to exploit the MIME parser.
     */
    CRIT_PART_WITHOUT_HEADERS_OR_CONTENT,
}
/**
 * A public-key algorithm.
 */
export enum PubKeyAlgo {
    /**
     * The default public-key algorithm.
     */
    DEFAULT,
    /**
     * The RSA algorithm.
     */
    RSA,
    /**
     * An encryption-only RSA algorithm.
     */
    RSA_E,
    /**
     * A signature-only RSA algorithm.
     */
    RSA_S,
    /**
     * An encryption-only ElGamal algorithm.
     */
    ELG_E,
    /**
     * The DSA algorithm.
     */
    DSA,
    /**
     * The Eliptic Curve algorithm.
     */
    ECC,
    /**
     * The ElGamal algorithm.
     */
    ELG,
    /**
     * The Eliptic Curve + DSA algorithm.
     */
    ECDSA,
    /**
     * The Eliptic Curve + Diffie Helman algorithm.
     */
    ECDH,
    /**
     * The Eliptic Curve + DSA algorithm.
     */
    EDDSA,
}
/**
 * An RFC compliance mode.
 */
export enum RfcComplianceMode {
    /**
     * Attempt to be much more liberal accepting broken and/or invalid formatting.
     */
    LOOSE,
    /**
     * Do not attempt to be overly liberal in accepting broken and/or invalid formatting.
     */
    STRICT,
}
/**
 * The S/MIME data type.
 */
export enum SecureMimeType {
    /**
     * The S/MIME content contains compressed data.
     */
    COMPRESSED_DATA,
    /**
     * The S/MIME content contains enveloped data.
     */
    ENVELOPED_DATA,
    /**
     * The S/MIME content contains signed data.
     */
    SIGNED_DATA,
    /**
     * The S/MIME content contains only certificates.
     */
    CERTS_ONLY,
    /**
     * The S/MIME content is unknown.
     */
    UNKNOWN,
}
/**
 * Relative seek position.
 */
export enum SeekWhence {
    /**
     * Seek relative to the beginning of the stream.
     */
    SET,
    /**
     * Seek relative to the current position in the stream.
     */
    CUR,
    /**
     * Seek relative to the end of the stream.
     */
    END,
}
/**
 * A value representing the signature status bit flags for a particular
 * #GMimeSignature.
 */
export enum SignatureStatus {
    /**
     * The signature is fully valid.
     */
    VALID,
    /**
     * The signature is good.
     */
    GREEN,
    /**
     * The signature is bad.
     */
    RED,
    /**
     * The key has been revoked.
     */
    KEY_REVOKED,
    /**
     * The key has expired.
     */
    KEY_EXPIRED,
    /**
     * The signature has expired.
     */
    SIG_EXPIRED,
    /**
     * Can't verify due to missing key.
     */
    KEY_MISSING,
    /**
     * CRL not available.
     */
    CRL_MISSING,
    /**
     * Available CRL is too old.
     */
    CRL_TOO_OLD,
    /**
     * A policy was not met.
     */
    BAD_POLICY,
    /**
     * A system error occurred.
     */
    SYS_ERROR,
    /**
     * Tofu conflict detected.
     */
    TOFU_CONFLICT,
}
/**
 * The buffering mode for a #GMimeStreamBuffer stream.
 */
export enum StreamBufferMode {
    /**
     * Read in 4k blocks.
     */
    READ,
    /**
     * Write in 4k blocks.
     */
    WRITE,
}
/**
 * The trust level of a certificate.  Trust level tries to answer the
 * question: "How much is the user willing to rely on cryptographic
 * identity assertions made by the owner of this certificate?"
 * 
 * By way of comparison with web browser X.509 certificate validation
 * stacks, the certificate of a "Root CA" has `GMIME_TRUST_ULTIMATE,`
 * while the certificate of an intermediate CA has `GMIME_TRUST_FULL,`
 * and an end-entity certificate (e.g., with CA:FALSE set) would have
 * `GMIME_TRUST_NEVER`.
 */
export enum Trust {
    /**
     * We do not know whether to rely on identity assertions made by the certificate.
     */
    UNKNOWN,
    /**
     * We do not have enough information to decide whether to rely on identity assertions made by the certificate.
     */
    UNDEFINED,
    /**
     * We should never rely on identity assertions made by the certificate.
     */
    NEVER,
    /**
     * We can rely on identity assertions made by this certificate as long as they are corroborated by other marginally-trusted certificates.
     */
    MARGINAL,
    /**
     * We can rely on identity assertions made by this certificate.
     */
    FULL,
    /**
     * This certificate is an undeniable root of trust (e.g. normally, this is a certificate controlled by the user themselves).
     */
    ULTIMATE,
}
/**
 * The validity level of a certificate's User ID.  Validity level
 * tries to answer the question: "How strongly do we believe that this
 * certificate belongs to the party it says it belongs to?"
 * 
 * Note that some OpenPGP certificates have multiple User IDs, and
 * each User ID may have a different validity level (e.g. depending on
 * which third parties have certified which User IDs, and which third
 * parties the local user has chosen to trust).
 * 
 * Similarly, an X.509 certificate can have multiple SubjectAltNames,
 * and each name may also have a different validity level (e.g. if the
 * issuing CA is bound by name constraints).
 * 
 * Note that the GMime API currently only exposes the highest-validty
 * User ID for any given certificate.
 */
export enum Validity {
    /**
     * The User ID of the certificate is of unknown validity.
     */
    UNKNOWN,
    /**
     * The User ID of the certificate is undefined.
     */
    UNDEFINED,
    /**
     * The User ID of the certificate is never to be treated as valid.
     */
    NEVER,
    /**
     * The User ID of the certificate is marginally valid (e.g. it has been certified by only one marginally-trusted party).
     */
    MARGINAL,
    /**
     * The User ID of the certificate is fully valid.
     */
    FULL,
    /**
     * The User ID of the certificate is ultimately valid (i.e., usually the certificate belongs to the local user themselves).
     */
    ULTIMATE,
}
/**
 * Decryption flags.
 * @bitfield 
 */
export enum DecryptFlags {
    /**
     * No flags specified.
     */
    NONE,
    /**
     * Export the decryption session-key.
     */
    EXPORT_SESSION_KEY,
    /**
     * Disable signature verification.
     */
    NO_VERIFY,
    /**
     * Enable OpenPGP keyserver lookups.
     */
    ENABLE_KEYSERVER_LOOKUPS,
    /**
     * Enable CRL and OCSP checks that require network lookups.
     */
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
/**
 * Bit flags to enable charset and/or encoding scanning to make
 * educated guesses as to what the best charset and/or encodings to
 * use for the content passed through the filter.
 * @bitfield 
 */
export enum FilterBestFlags {
    /**
     * Enable best-charset detection.
     */
    CHARSET,
    /**
     * Enable best-encoding detection.
     */
    ENCODING,
}
/**
 * The current state of the #GMimeFilterOpenPGP filter.
 * @bitfield 
 */
export enum OpenPGPState {
    /**
     * No OpenPGP markers have been found (yet).
     */
    NONE,
    /**
     * The "-----BEGIN PGP MESSAGE-----" marker has been found.
     */
    BEGIN_PGP_MESSAGE,
    /**
     * The "-----END PGP MESSAGE-----" marker has been found.
     */
    END_PGP_MESSAGE,
    /**
     * The "-----BEGIN PGP SIGNED MESSAGE-----" marker has been found.
     */
    BEGIN_PGP_SIGNED_MESSAGE,
    /**
     * The "-----BEGIN PGP SIGNATURE-----" marker has been found.
     */
    BEGIN_PGP_SIGNATURE,
    /**
     * The "-----END PGP SIGNATURE-----" marker has been found.
     */
    END_PGP_SIGNATURE,
    /**
     * The "-----BEGIN PGP PUBLIC KEY BLOCK-----" marker has been found.
     */
    BEGIN_PGP_PUBLIC_KEY_BLOCK,
    /**
     * The "-----END PGP PUBLIC KEY BLOCK-----" marker has been found.
     */
    END_PGP_PUBLIC_KEY_BLOCK,
    /**
     * The "-----BEGIN PGP PRIVATE KEY BLOCK-----" marker has been found.
     */
    BEGIN_PGP_PRIVATE_KEY_BLOCK,
    /**
     * The "-----END PGP PRIVATE KEY BLOCK-----" marker has been found.
     */
    END_PGP_PRIVATE_KEY_BLOCK,
}
/**
 * Signature verification flags.
 * @bitfield 
 */
export enum VerifyFlags {
    /**
     * No flags specified.
     */
    NONE,
    /**
     * Enable OpenPGP keyserver lookups.
     */
    ENABLE_KEYSERVER_LOOKUPS,
    /**
     * Enable CRL and OCSP checks that require network lookups.
     */
    ENABLE_ONLINE_CERTIFICATE_CHECKS,
}
/**
 * GMime's binary age.
 */
export const BINARY_AGE: number
/**
 * Standard attachment disposition.
 */
export const DISPOSITION_ATTACHMENT: string
/**
 * Standard inline disposition.
 */
export const DISPOSITION_INLINE: string
/**
 * A bit flag for g_mime_filter_enriched_new() which signifies that
 * the filter should expect Rich Text (aka RTF).
 */
export const FILTER_ENRICHED_IS_RICHTEXT: number
/**
 * Enclose citation text in blockquotes.
 */
export const FILTER_HTML_BLOCKQUOTE_CITATION: number
/**
 * Cites text by prepending "&gt; " to each cited line.
 */
export const FILTER_HTML_CITE: number
/**
 * Wrap email addresses in "mailto:" href tags.
 */
export const FILTER_HTML_CONVERT_ADDRESSES: number
/**
 * Convert new-lines ('\n') into &lt;br&gt; tags.
 */
export const FILTER_HTML_CONVERT_NL: number
/**
 * Preserve whitespace by converting spaces into their appropriate
 * html entities.
 */
export const FILTER_HTML_CONVERT_SPACES: number
/**
 * Wrap detected URLs in &lt;a href=...&gt; tags.
 */
export const FILTER_HTML_CONVERT_URLS: number
/**
 * Converts 8bit characters to '?'.
 */
export const FILTER_HTML_ESCAPE_8BIT: number
/**
 * Change the colour of citation text.
 */
export const FILTER_HTML_MARK_CITATION: number
/**
 * Wrap stream in &lt;pre&gt; and &lt;/pre&gt; tags.
 */
export const FILTER_HTML_PRE: number
/**
 * GMime's interface age.
 */
export const INTERFACE_AGE: number
/**
 * GMime's major version.
 */
export const MAJOR_VERSION: number
/**
 * GMime's micro version.
 */
export const MICRO_VERSION: number
/**
 * GMime's minor version.
 */
export const MINOR_VERSION: number
/**
 * A convenience macro for masking out the non-error bit flags.
 */
export const SIGNATURE_STATUS_ERROR_MASK: number
/**
 * State for the g_mime_encoding_uudecode_step() function, denoting that
 * the 'begin' line has been found.
 */
export const UUDECODE_STATE_BEGIN: number
/**
 * State for the g_mime_encoding_uudecode_step() function, denoting that
 * the end of the UU encoded block has been found.
 */
export const UUDECODE_STATE_END: number
/**
 * Initial state for the g_mime_encoding_uudecode_step() function.
 */
export const UUDECODE_STATE_INIT: number
export const UUDECODE_STATE_MASK: number
/**
 * State bit that denotes the yEnc filter has found the =ybegin line.
 */
export const YDECODE_STATE_BEGIN: number
/**
 * State bit that denotes yEnc filter has begun decoding the actual
 * yencoded content and will continue to do so until an =yend line is
 * found (or until there is nothing left to decode).
 */
export const YDECODE_STATE_DECODE: number
/**
 * State bit that denoates that g_mime_ydecode_step() has finished
 * decoding.
 */
export const YDECODE_STATE_END: number
/**
 * State bit that denotes the yEnc filter has reached an end-of-line.
 * 
 * This state is for internal use only.
 */
export const YDECODE_STATE_EOLN: number
/**
 * State bit that denotes the yEnc filter has reached an escape
 * sequence.
 * 
 * This state is for internal use only.
 */
export const YDECODE_STATE_ESCAPE: number
/**
 * Initial state for the g_mime_ydecode_step() function.
 */
export const YDECODE_STATE_INIT: number
/**
 * State bit that denotes the yEnc filter has found the =ypart
 * line. (Note: not all yencoded blocks have one)
 */
export const YDECODE_STATE_PART: number
/**
 * Initial state for the crc and pcrc state variables.
 */
export const YENCODE_CRC_INIT: number
/**
 * Initial state for the g_mime_ydecode_step() function.
 */
export const YENCODE_STATE_INIT: number
/**
 * Computes the best charset to use to encode this text buffer.
 * @param inbuf a UTF-8 text buffer
 * @param inlen input buffer length
 */
export function charsetBest(inbuf: string, inlen: number): string | null
/**
 * Attempts to find a canonical charset name for `charset`.
 * 
 * Note: Will normally return the same value as
 * g_mime_charset_iconv_name() unless the system iconv does not use
 * the canonical ISO charset names (such as using ISO8859-1 rather
 * than the canonical form ISO-8859-1).
 * @param charset charset name
 */
export function charsetCanonName(charset: string): string
/**
 * Attempts to find an iconv-friendly charset name for `charset`.
 * @param charset charset name
 */
export function charsetIconvName(charset: string): string
/**
 * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
 * charset.
 * @param isocharset ISO-8859-# charset
 */
export function charsetIsoToWindows(isocharset: string): string
/**
 * Attempts to find a specific language code that is specific to
 * `charset`. Currently only handles CJK and Russian/Ukranian
 * charset->lang mapping. Everything else will return %NULL.
 * @param charset charset name
 */
export function charsetLanguage(charset: string): string | null
/**
 * Gets the user's locale charset (or iso-8859-1 by default).
 * 
 * Note: This function is deprecated. Use g_mime_locale_charset()
 * instead.
 */
export function charsetLocaleName(): string
/**
 * Initializes character set maps.
 * 
 * Note: g_mime_init() calls this routine for you.
 */
export function charsetMapInit(): void
/**
 * Frees internal lookup tables created in g_mime_charset_map_init().
 */
export function charsetMapShutdown(): void
/**
 * Attempts to find an iconv-friendly charset name for `charset`.
 * 
 * Note: This function is deprecated. Use g_mime_charset_iconv_name()
 * instead.
 * @param charset charset name
 */
export function charsetName(charset: string): string
/**
 * Checks that the GMime library version meets the requirements of the
 * required version.
 * @param major Minimum major version
 * @param minor Minimum minor version
 * @param micro Minimum micro version
 */
export function checkVersion(major: number, minor: number, micro: number): boolean
/**
 * Gets the appropriate #GMimeContentEncoding enumeration value based
 * on the input string.
 * @param str a string representing a Content-Transfer-Encoding value
 */
export function contentEncodingFromString(str: string): ContentEncoding
/**
 * Gets the string value of the content encoding.
 * @param encoding a #GMimeContentEncoding
 */
export function contentEncodingToString(encoding: ContentEncoding): string
/**
 * Decodes a chunk of base64 encoded data.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
export function encodingBase64DecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Base64 encodes the input stream to the output stream. Call this
 * when finished encoding data with g_mime_encoding_base64_encode_step()
 * to flush off the last little bit.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been encoded
 */
export function encodingBase64EncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Base64 encodes a chunk of data. Performs an 'encode step', only
 * encodes blocks of 3 characters to the output at a time, saves
 * left-over state in state and save (initialise to 0 on first
 * invocation).
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been encoded
 */
export function encodingBase64EncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Decodes a block of quoted-printable encoded data. Performs a
 * 'decode step' on a chunk of QP encoded data.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
export function encodingQuotedDecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Quoted-printable encodes a block of text. Call this when finished
 * encoding data with g_mime_encoding_quoted_encode_step() to flush off
 * the last little bit.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been encoded
 */
export function encodingQuotedEncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Quoted-printable encodes a block of text. Performs an 'encode
 * step', saves left-over state in state and save (initialise to -1 on
 * first invocation).
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been encoded
 */
export function encodingQuotedEncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
 * uuencoded data. Assumes the "begin mode filename" line has
 * been stripped off.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
export function encodingUudecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
/**
 * Uuencodes a chunk of data. Call this when finished encoding data
 * with g_mime_encoding_uuencode_step() to flush off the last little bit.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param uubuf temporary buffer of 60 bytes
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been encoded
 */
export function encodingUuencodeClose(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
/**
 * Uuencodes a chunk of data. Performs an 'encode step', only encodes
 * blocks of 45 characters to the output at a time, saves left-over
 * state in `uubuf,` `state` and `save` (initialize to 0 on first
 * invocation).
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output stream
 * @param uubuf temporary buffer of 60 bytes
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been encoded
 */
export function encodingUuencodeStep(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
/**
 * Gets the default format options.
 */
export function formatOptionsGetDefault(): FormatOptions
/**
 * Allocates a new string buffer containing `str` in UTF-8.
 * @param str string in locale charset
 */
export function iconvLocaleToUtf8(str: string): string
/**
 * Allocates a new string buffer containing the first `n` bytes of
 * `str` converted to UTF-8.
 * @param str string in locale charset
 * @param n number of bytes to convert
 */
export function iconvLocaleToUtf8Length(str: string, n: number): string
/**
 * Allocates a new string buffer containing `str` converted to the
 * user's locale charset.
 * @param str string in UTF-8 charset
 */
export function iconvUtf8ToLocale(str: string): string
/**
 * Allocates a new string buffer containing the first `n` bytes of
 * `str` converted to the user's locale charset.
 * @param str string in UTF-8 charset
 * @param n number of bytes to convert
 */
export function iconvUtf8ToLocaleLength(str: string, n: number): string
/**
 * Initializes GMime.
 */
export function init(): void
/**
 * Gets the user's locale charset (or iso-8859-1 by default).
 */
export function localeCharset(): string
/**
 * Gets the user's locale language code (or %NULL by default).
 */
export function localeLanguage(): string | null
/**
 * Gets the default parser options.
 */
export function parserOptionsGetDefault(): ParserOptions
/**
 * Decodes a list of msg-ids as in the References and/or In-Reply-To
 * headers defined in rfc822.
 * @param options a #GMimeParserOptions or %NULL
 * @param text string containing a list of msg-ids
 */
export function referencesParse(options: ParserOptions | null, text: string): References
/**
 * Frees internally allocated tables created in g_mime_init().
 */
export function shutdown(): void
/**
 * Determines the best content encoding for the first `len` bytes of
 * `text`.
 * @param text text to encode
 */
export function utilsBestEncoding(text: Uint8Array): ContentEncoding
/**
 * Attempts to convert text in an unknown 8bit/multibyte charset into
 * UTF-8 by finding the charset which will convert the most bytes into
 * valid UTF-8 characters as possible. If no exact match can be found,
 * it will choose the best match and convert invalid byte sequences
 * into question-marks (?) in the returned string buffer.
 * @param options a #GMimeParserOptions or %NULL
 * @param text input text in   unknown 8bit/multibyte character set
 */
export function utilsDecode8bit(options: ParserOptions | null, text: Uint8Array): string
/**
 * Decodes a msg-id as defined by rfc822.
 * @param messageId string containing a message-id
 */
export function utilsDecodeMessageId(messageId: string): string
/**
 * Generates a unique Message-Id.
 * @param fqdn Fully qualified domain name
 */
export function utilsGenerateMessageId(fqdn: string): string
/**
 * Parses the rfc822 date string.
 * @param str input date string
 */
export function utilsHeaderDecodeDate(str: string): GLib.DateTime | null
/**
 * Decodes an rfc2047 encoded 'phrase' header.
 * @param options a #GMimeParserOptions or %NULL
 * @param phrase header to decode
 */
export function utilsHeaderDecodePhrase(options: ParserOptions | null, phrase: string): string
/**
 * Decodes an rfc2047 encoded 'text' header.
 * @param options a #GMimeParserOptions or %NULL
 * @param text header text to decode
 */
export function utilsHeaderDecodeText(options: ParserOptions | null, text: string): string
/**
 * Encodes a 'phrase' header according to the rules in rfc2047.
 * @param options a #GMimeFormatOptions or %NULL
 * @param phrase phrase to encode
 * @param charset the charset to use or %NULL to use the default
 */
export function utilsHeaderEncodePhrase(options: FormatOptions | null, phrase: string, charset: string | null): string
/**
 * Encodes a 'text' header according to the rules in rfc2047.
 * @param options a #GMimeFormatOptions or %NULL
 * @param text text to encode
 * @param charset the charset to use or %NULL to use the default
 */
export function utilsHeaderEncodeText(options: FormatOptions | null, text: string, charset: string | null): string
/**
 * Allocates a string buffer containing the rfc822 formatted date
 * string represented by `date`.
 * @param date a #GDateTime
 */
export function utilsHeaderFormatDate(date: GLib.DateTime): string
/**
 * Unfolds a raw header value according to the rules in rfc822.
 * @param value raw header value
 */
export function utilsHeaderUnfold(value: string): string
/**
 * Quotes `string` as needed according to the rules in rfc2822.
 * @param str input string
 */
export function utilsQuoteString(str: string): string
/**
 * Folds a structured header according to the rules in rfc822.
 * @param options a #GMimeParserOptions or %NULL
 * @param format a #GMimeFormatOptions or %NULL
 * @param header header field and value string
 */
export function utilsStructuredHeaderFold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
/**
 * Determines if `text` contains 8bit characters within the first `len`
 * bytes.
 * @param text text to check for 8bit chars
 */
export function utilsTextIs8bit(text: Uint8Array): boolean
/**
 * Unquotes and unescapes a string.
 * @param str input string
 */
export function utilsUnquoteString(str: string): void
/**
 * Folds an unstructured header according to the rules in rfc822.
 * @param options a #GMimeParserOptions or %NULL
 * @param format a #GMimeFormatOptions or %NULL
 * @param header header field and value string
 */
export function utilsUnstructuredHeaderFold(options: ParserOptions | null, format: FormatOptions | null, header: string): string
/**
 * Performs a 'decode step' on a chunk of yEncoded data of length
 * `inlen` pointed to by `inbuf` and writes to `outbuf`. Assumes the =ybegin
 * and =ypart lines have already been stripped off.
 * 
 * To get the crc32 value of the part, use #GMIME_YENCODE_CRC_FINAL
 * (`pcrc)`. If there are more parts, you should reuse `crc` without
 * re-initializing. Once all parts have been decoded, you may get the
 * combined crc32 value of all the parts using #GMIME_YENCODE_CRC_FINAL
 * (`crc)`.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state ydecode state
 * @param pcrc part crc state
 * @param crc crc state
 */
export function ydecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
/**
 * Call this function when finished encoding data with
 * g_mime_yencode_step() to flush off the remaining state.
 * 
 * #GMIME_YENCODE_CRC_FINAL (`pcrc)` will give you the crc32 of the
 * encoded "part". If there are more "parts" to encode, you should
 * re-use `crc` when encoding the next "parts" and then use
 * #GMIME_YENCODE_CRC_FINAL (`crc)` to get the combined crc32 value of
 * all the parts.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state yencode state
 * @param pcrc part crc state
 * @param crc crc state
 */
export function yencodeClose(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
/**
 * Performs an yEncode 'encode step' on a chunk of raw data of length
 * `inlen` pointed to by `inbuf` and writes to `outbuf`.
 * 
 * `state` should be initialized to #GMIME_YENCODE_STATE_INIT before
 * beginning making the first call to this function. Subsequent calls
 * should reuse `state`.
 * 
 * Along the same lines, `pcrc` and `crc` should be initialized to
 * #GMIME_YENCODE_CRC_INIT before using.
 * @param inbuf input buffer
 * @param inlen input buffer length
 * @param outbuf output buffer
 * @param state yencode state
 * @param pcrc part crc state
 * @param crc crc state
 */
export function yencodeStep(inbuf: number, inlen: number, outbuf: number, state: number, pcrc: number, crc: number): number
/**
 * Function callback for encoding and formatting a header value.
 * @callback 
 * @param header a #GMimeHeader
 * @param options a #GMimeFormatOptions
 * @param value an unencoded header value
 * @param charset a charset
 */
export interface HeaderRawValueFormatter {
    (header: Header, options: FormatOptions, value: string, charset: string): string
}
/**
 * The function signature for a callback to g_mime_message_foreach()
 * and g_mime_multipart_foreach().
 * @callback 
 * @param parent parent #GMimeObject
 * @param part a #GMimeObject
 */
export interface ObjectForeachFunc {
    (parent: Object, part: Object): void
}
/**
 * Function signature for the callback to
 * g_mime_parser_set_header_regex().
 * @callback 
 * @param parser The #GMimeParser object.
 * @param header The header field matched.
 * @param value The header field value.
 * @param offset The header field offset.
 */
export interface ParserHeaderRegexFunc {
    (parser: Parser, header: string, value: string, offset: number): void
}
/**
 * The function signature for a callback to g_mime_parser_options_set_warning_callback().
 * @callback 
 * @param offset parser offset where the issue has been detected, or -1 if it is unknown
 * @param errcode a #GMimeParserWarning
 * @param item a NUL-terminated string containing the value causing the issue, may be %NULL
 */
export interface ParserWarningFunc {
    (offset: number, errcode: ParserWarning, item: string): void
}
/**
 * A password request callback allowing a #GMimeCryptoContext to
 * prompt the user for a password for a given key.
 * @callback 
 * @param ctx the #GMimeCryptoContext making the request
 * @param userId the user_id of the password being requested
 * @param prompt a string containing some helpful context for the prompt
 * @param reprompt %TRUE if this password request is a reprompt due to a previously bad password response
 * @param response a stream for the application to write the password to (followed by a newline '\n' character)
 */
export interface PasswordRequestFunc {
    (ctx: CryptoContext, userId: string, prompt: string, reprompt: boolean, response: Stream): boolean
}
export module ApplicationPkcs7Mime {

    // Constructor properties interface

    export interface ConstructorProperties extends Part.ConstructorProperties {
    }

}

export interface ApplicationPkcs7Mime {

    // Own fields of GMime-3.0.GMime.ApplicationPkcs7Mime

    /**
     * parent #GMimePart object
     * @field 
     */
    parentObject: any
    /**
     * The smime-type Content-Type parameter.
     * @field 
     */
    smimeType: SecureMimeType

    // Owm methods of GMime-3.0.GMime.ApplicationPkcs7Mime

    /**
     * Attempts to decrypt the encrypted application/pkcs7-mime part.
     * 
     * When non-%NULL, `session_key` should be a %NULL-terminated string,
     * such as the one returned by g_mime_decrypt_result_get_session_key()
     * from a previous decryption. If the `session_key` is not valid, decryption
     * will fail.
     * 
     * If `result` is non-%NULL, then on a successful decrypt operation, it will be
     * updated to point to a newly-allocated #GMimeDecryptResult with signature
     * status information as well as a list of recipients that the part was
     * encrypted to.
     * @param flags a #GMimeDecryptFlags
     * @param sessionKey session key to use or %NULL
     * @param result the decryption result
     */
    decrypt(flags: DecryptFlags, sessionKey: string, result: DecryptResult): Object | null
    /**
     * Gets the smime-type value of the Content-Type header.
     */
    getSmimeType(): SecureMimeType
    /**
     * Attempts to verify the signed `pkcs7`_mime part and extract the original
     * MIME entity.
     * @param flags a #GMimeVerifyFlags
     */
    verify(flags: VerifyFlags): [ /* returnType */ SignatureList | null, /* entity */ Object ]

    // Class property signals of GMime-3.0.GMime.ApplicationPkcs7Mime

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An application/pkcs7-mime MIME part.
 * @class 
 */
export class ApplicationPkcs7Mime extends Part {

    // Own properties of GMime-3.0.GMime.ApplicationPkcs7Mime

    static name: string

    // Constructors of GMime-3.0.GMime.ApplicationPkcs7Mime

    constructor(config?: ApplicationPkcs7Mime.ConstructorProperties) 
    /**
     * Creates a new application/pkcs7-mime object.
     * @constructor 
     * @param type The type of S/MIME data contained within the part.
     */
    constructor(type: SecureMimeType) 
    /**
     * Creates a new application/pkcs7-mime object.
     * @constructor 
     * @param type The type of S/MIME data contained within the part.
     */
    static new(type: SecureMimeType): ApplicationPkcs7Mime

    // Overloads of new

    /**
     * Creates a new MIME Part object with a default content-type of
     * application/octet-stream.
     * @constructor 
     */
    static new(): Part
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    _init(config?: ApplicationPkcs7Mime.ConstructorProperties): void
    /**
     * Attempts to encrypt the `entity` MIME part to the public keys of `recipients`
     * using S/MIME. If successful, a new application/pkcs7-mime object is returned.
     * @param entity a #GMimeObject to encrypt
     * @param flags a #GMimeEncryptFlags
     * @param recipients an array of recipients to encrypt to
     */
    static encrypt(entity: Object, flags: EncryptFlags, recipients: string[]): ApplicationPkcs7Mime | null
    /**
     * Attempts to sign the `entity` MIME part with `userid'`s private key using
     * S/MIME. If successful, a new application/pkcs7-mime object is returned.
     * @param entity a #GMimeObject
     * @param userid the user id to sign with
     */
    static sign(entity: Object, userid: string): ApplicationPkcs7Mime | null
}

export module AutocryptHeader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AutocryptHeader {

    // Own fields of GMime-3.0.GMime.AutocryptHeader

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * the #InternetAddressMailbox associated with this Autocrypt header.
     * @field 
     */
    address: InternetAddressMailbox
    /**
     * a #GMimeAutocryptPreferEncrypt value (defaults to `GMIME_AUTOCRYPT_PREFER_ENCRYPT_NONE)`.
     * @field 
     */
    preferEncrypt: AutocryptPreferEncrypt
    /**
     * the raw binary form of the encoded key.
     * @field 
     */
    keydata: any
    /**
     * the date associated with the Autocrypt header in this message.
     * @field 
     */
    effectiveDate: GLib.DateTime

    // Owm methods of GMime-3.0.GMime.AutocryptHeader

    /**
     * If address and type already match between `src` and `dst,` copy
     * keydata, prefer_encrypt, effective_date from `src` to `dst`.
     * @param src a #GMimeAutocryptHeader object
     */
    clone(src: AutocryptHeader): void
    /**
     * Compare two Autocrypt Headers.  This is useful for comparison, as well as for
     * sorting headers by:
     * 
     *  - address
     *  - effective_date
     *  - keydata
     *  - prefer_encrypt
     * @param ah2 a #GMimeAutocryptHeader object
     */
    compare(ah2: AutocryptHeader): number
    /**
     * Gets the internal address of the Autocrypt header, or %NULL if not set.
     */
    getAddress(): InternetAddressMailbox
    /**
     * Gets the internal address of the Autocrypt header as a C string, or %NULL if not set.
     */
    getAddressAsString(): string
    /**
     * Gets the effective date of the Autocrypt header, or %NULL if not set.
     */
    getEffectiveDate(): GLib.DateTime
    /**
     * Gets the raw keydata of the Autocrypt header, or %NULL if not set.
     */
    getKeydata(): any
    /**
     * Gets the encryption preference stated by the Autocrypt header.
     */
    getPreferEncrypt(): AutocryptPreferEncrypt
    /**
     * When dealing with Autocrypt headers derived from a message, some
     * sender addresses will not have a legitimate/complete header
     * associated with them.  When a given sender address has no complete
     * header of a specific type, it should "reset" the state of the
     * associated address.
     */
    isComplete(): boolean
    /**
     * Set the address associated with the autocrypt_header.
     * @param address a #InternetAddressMailbox value
     */
    setAddress(address: InternetAddressMailbox): void
    /**
     * Set the address associated with the autocrypt_header.
     * @param address a %NULL-terminated string that is a raw e-mail address
     */
    setAddressFromString(address: string): void
    /**
     * Set the effective date associated with the Autocrypt header.
     * @param effectiveDate a #GDateTime object
     */
    setEffectiveDate(effectiveDate: GLib.DateTime): void
    /**
     * Set the raw key data associated with the Autocrypt header.
     * @param data 
     */
    setKeydata(data: any): void
    /**
     * Set the encryption preference associated with the Autocrypt header.
     * @param pref a #GMimeAutocryptPreferEncrypt value
     */
    setPreferEncrypt(pref: AutocryptPreferEncrypt): void
    /**
     * Gets the string representation of the Autocrypt header, or %NULL on
     * error.  For example, it might return:
     * 
     *     prefer-encrypt=mutual; addr=bob\`example`.com; keydata=AAAB15BE...
     * 
     * If you are using this object to populate an Autocrypt-Gossip
     * header, you should set `gossip` to %TRUE (this will suppress
     * inclusion of prefer-encrypt).
     * @param gossip a #gboolean, indicating whether this header is for use with gossip
     */
    toString(gossip: boolean): string

    // Class property signals of GMime-3.0.GMime.AutocryptHeader

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object containing Autocrypt information about a given e-mail
 * address, as derived from a message header.
 * 
 * See https://autocrypt.org/ for details and motivation.
 * @class 
 */
export class AutocryptHeader extends GObject.Object {

    // Own properties of GMime-3.0.GMime.AutocryptHeader

    static name: string

    // Constructors of GMime-3.0.GMime.AutocryptHeader

    constructor(config?: AutocryptHeader.ConstructorProperties) 
    /**
     * Creates a new #GMimeAutocryptHeader object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeAutocryptHeader object.
     * @constructor 
     */
    static new(): AutocryptHeader
    /**
     * Creates a new #GMimeAutocryptHeader object based on the value of an
     * Autocrypt: header.
     * 
     * Note that this will not have an `effective_date` set, since the
     * `effective_date` is derived from the Date: line in the same block of
     * e-mail headers, but cannot be extracted from the raw Autocrypt:
     * header itself.
     * @constructor 
     * @param string The raw string value of an Autocrypt header
     */
    static newFromString(string: string): AutocryptHeader
    _init(config?: AutocryptHeader.ConstructorProperties): void
}

export module AutocryptHeaderList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface AutocryptHeaderList {

    // Own fields of GMime-3.0.GMime.AutocryptHeaderList

    parentObject: GObject.Object

    // Owm methods of GMime-3.0.GMime.AutocryptHeaderList

    /**
     * Adds a the passed #GMimeAutocryptHeader to the list.
     * @param header a #GMimeAutocryptHeader object
     */
    add(header: AutocryptHeader): void
    /**
     * Adds a new incomplete #GMimeAutocryptHeader object for each
     * InternetAddressMailbox found in #addresses.
     * @param addresses an #InternetAddressList object
     */
    addMissingAddresses(addresses: InternetAddressList): number
    /**
     * See how many Autocrypt headers are in the list.
     */
    getCount(): number
    /**
     * Get the Nth header in the list (returns %NULL on error, or if `index` is out of bounds)
     * @param index an index into the list
     */
    getHeaderAt(index: number): AutocryptHeader
    /**
     * Gets the Autocrypt header corresponding to the given `mailbox`.
     * @param mailbox an #InternetAddressMailbox object
     */
    getHeaderForAddress(mailbox: InternetAddressMailbox): AutocryptHeader
    /**
     * Remove all incomplete Autocrypt headers from the list.
     */
    removeIncomplete(): void

    // Class property signals of GMime-3.0.GMime.AutocryptHeaderList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A list of Autocrypt headers, typically extracted from a GMimeMessage.
 * @class 
 */
export class AutocryptHeaderList extends GObject.Object {

    // Own properties of GMime-3.0.GMime.AutocryptHeaderList

    static name: string

    // Constructors of GMime-3.0.GMime.AutocryptHeaderList

    constructor(config?: AutocryptHeaderList.ConstructorProperties) 
    /**
     * Creates a new #GMimeAutocryptHeaderList object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeAutocryptHeaderList object.
     * @constructor 
     */
    static new(): AutocryptHeaderList
    _init(config?: AutocryptHeaderList.ConstructorProperties): void
}

export module Certificate {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Certificate {

    // Own fields of GMime-3.0.GMime.Certificate

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * The public-key algorithm used by the certificate, if known.
     * @field 
     */
    pubkeyAlgo: PubKeyAlgo
    /**
     * The digest algorithm used by the certificate, if known.
     * @field 
     */
    digestAlgo: DigestAlgo
    /**
     * The level of trust assigned to this certificate.
     * @field 
     */
    trust: Trust
    /**
     * The issuer of the certificate, if known.
     * @field 
     */
    issuerSerial: string
    /**
     * The issuer of the certificate, if known.
     * @field 
     */
    issuerName: string
    /**
     * A hex string representing the certificate's fingerprint.
     * @field 
     */
    fingerprint: string
    /**
     * The creation date of the certificate.
     * @field 
     */
    created: number
    /**
     * The expiration date of the certificate.
     * @field 
     */
    expires: number
    /**
     * The certificate's key id.
     * @field 
     */
    keyid: string
    /**
     * The email address of the person or entity.
     * @field 
     */
    email: string
    /**
     * The name of the person or entity.
     * @field 
     */
    name: string
    /**
     * The full User ID of the certificate.
     * @field 
     */
    userId: string
    /**
     * the validity of the email address, name, and User ID.
     * @field 
     */
    idValidity: Validity

    // Owm methods of GMime-3.0.GMime.Certificate

    /**
     * Get the creation date of the certificate's key.
     */
    getCreated(): number
    /**
     * Get the creation date of the certificate's key in seconds since the
     * UNIX epoch, represented as a 64-bit signed integer.
     */
    getCreated64(): number
    /**
     * Get the digest algorithm used by the certificate.
     */
    getDigestAlgo(): DigestAlgo
    /**
     * Get the email address associated with the certificate.  If the
     * certificate contains more than one email address with different
     * validities, the email address with the highest validity is
     * returned.  If more than one email address appears in the
     * certificate with the same (highest) validity, the first such email
     * address will be returned.
     */
    getEmail(): string
    /**
     * Get the expiration date of the certificate's key. A value of %0 means the certificate never expires.
     */
    getExpires(): number
    /**
     * Get the expiration date of the certificate's key in seconds since
     * the UNIX epoch, represented as a 64-bit signed integer. A value of
     * %0 means the certificate never expires.
     */
    getExpires64(): number
    /**
     * Get the certificate's key fingerprint.
     */
    getFingerprint(): string
    /**
     * Get the validity of the certificate's identity information.  This
     * validity applies to the name, email, and user_id fields associated
     * with the certificate.
     */
    getIdValidity(): Validity
    /**
     * Get the certificate's issuer name.
     */
    getIssuerName(): string
    /**
     * Get the certificate's issuer serial.
     */
    getIssuerSerial(): string
    /**
     * Get the certificate's key id.
     */
    getKeyId(): string
    /**
     * Get the name associated with the certificate.  For email
     * certificates, this is usually the name of the person who controls
     * the certificate (encoded in UTF-8).  If the certificate contains
     * more than one name with different validities, the name with the
     * highest validity is returned.  If more than one name appears in the
     * certificate with the same (highest) validity, the first such name
     * will be returned.
     */
    getName(): string
    /**
     * Get the public-key algorithm used by the certificate.
     */
    getPubkeyAlgo(): PubKeyAlgo
    /**
     * Get the certificate trust.
     */
    getTrust(): Trust
    /**
     * Get the certificate's full User ID.  If the certificate contains
     * more than one User ID with different validities, the User ID with
     * the highest validity is returned.  If more than one User ID appears
     * in the certificate with the same (highest) validity, the first such
     * User ID will be returned.
     */
    getUserId(): string
    /**
     * Set the creation date of the certificate's key.
     * @param created creation date
     */
    setCreated(created: number): void
    /**
     * Set the digest algorithm used by the certificate.
     * @param algo a #GMimeDigestAlgo
     */
    setDigestAlgo(algo: DigestAlgo): void
    /**
     * Set the email address associated with the
     * certificate. (e.g. "jane\`example`.org")
     * @param email certificate's email
     */
    setEmail(email: string): void
    /**
     * Set the expiration date of the certificate's key. A value of %0 means the certificate never expires.
     * @param expires expiration date
     */
    setExpires(expires: number): void
    /**
     * Set the certificate's key fingerprint.
     * @param fingerprint fingerprint string
     */
    setFingerprint(fingerprint: string): void
    /**
     * Set the validity associated with the certificate's name, email, and user_id.
     * @param validity a #GMimeValidity representing the validity of the certificate's identity information.
     */
    setIdValidity(validity: Validity): void
    /**
     * Set the certificate's issuer name.
     * @param issuerName certificate's issuer name
     */
    setIssuerName(issuerName: string): void
    /**
     * Set the certificate's issuer serial.
     * @param issuerSerial certificate's issuer serial
     */
    setIssuerSerial(issuerSerial: string): void
    /**
     * Set the certificate's key id.
     * @param keyId key id
     */
    setKeyId(keyId: string): void
    /**
     * Set the name associated with the certificate.  For email
     * certificates, this is usually the name of the person who controls
     * the certificate (encoded in UTF-8). (e.g. "Jane Doe")
     * @param name certificate's name
     */
    setName(name: string): void
    /**
     * Set the public-key algorithm used by the certificate.
     * @param algo a #GMimePubKeyAlgo
     */
    setPubkeyAlgo(algo: PubKeyAlgo): void
    /**
     * Set the certificate trust.
     * @param trust a #GMimeTrust value
     */
    setTrust(trust: Trust): void
    /**
     * Set the certificate's full User ID.  By convention, this is usually
     * a mail name-addr as described in RFC 5322.  (e.g. "Jane Doe
     * &lt;jane\`example`.org&gt;")
     * @param userId the full User ID for a certificate
     */
    setUserId(userId: string): void

    // Class property signals of GMime-3.0.GMime.Certificate

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object containing useful information about a certificate.
 * @class 
 */
export class Certificate extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Certificate

    static name: string

    // Constructors of GMime-3.0.GMime.Certificate

    constructor(config?: Certificate.ConstructorProperties) 
    /**
     * Creates a new #GMimeCertificate object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeCertificate object.
     * @constructor 
     */
    static new(): Certificate
    _init(config?: Certificate.ConstructorProperties): void
}

export module CertificateList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CertificateList {

    // Own fields of GMime-3.0.GMime.CertificateList

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * An array of #GMimeCertificate objects.
     * @field 
     */
    array: object[]

    // Owm methods of GMime-3.0.GMime.CertificateList

    /**
     * Adds a #GMimeCertificate to the #GMimeCertificateList.
     * @param cert a #GMimeCertificate
     */
    add(cert: Certificate): number
    /**
     * Clears the list of certificates.
     */
    clear(): void
    /**
     * Checks whether or not the specified #GMimeCertificate is contained within
     * the #GMimeCertificateList.
     * @param cert a #GMimeCertificate
     */
    contains(cert: Certificate): boolean
    /**
     * Gets the #GMimeCertificate at the specified index.
     * @param index index of #GMimeCertificate to get
     */
    getCertificate(index: number): Certificate
    /**
     * Gets the index of the specified #GMimeCertificate inside the
     * #GMimeCertificateList.
     * @param cert a #GMimeCertificate
     */
    indexOf(cert: Certificate): number
    /**
     * Inserts a #GMimeCertificate into the #GMimeCertificateList at the specified
     * index.
     * @param index index to insert at
     * @param cert a #GMimeCertificate
     */
    insert(index: number, cert: Certificate): void
    /**
     * Gets the length of the list.
     */
    length(): number
    /**
     * Removes a #GMimeCertificate from the #GMimeCertificateList.
     * @param cert a #GMimeCertificate
     */
    remove(cert: Certificate): boolean
    /**
     * Removes a #GMimeCertificate from the #GMimeCertificateList at the specified
     * index.
     * @param index index of the certificate to remove
     */
    removeAt(index: number): boolean
    /**
     * Sets the #GMimeCertificate at the specified index to `cert`.
     * @param index index of #GMimeCertificate to set
     * @param cert a #GMimeCertificate
     */
    setCertificate(index: number, cert: Certificate): void

    // Class property signals of GMime-3.0.GMime.CertificateList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A collection of #GMimeCertificate objects.
 * @class 
 */
export class CertificateList extends GObject.Object {

    // Own properties of GMime-3.0.GMime.CertificateList

    static name: string

    // Constructors of GMime-3.0.GMime.CertificateList

    constructor(config?: CertificateList.ConstructorProperties) 
    /**
     * Creates a new #GMimeCertificateList.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeCertificateList.
     * @constructor 
     */
    static new(): CertificateList
    _init(config?: CertificateList.ConstructorProperties): void
}

export module ContentDisposition {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContentDisposition {

    // Own fields of GMime-3.0.GMime.ContentDisposition

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * disposition
     * @field 
     */
    disposition: string
    /**
     * a #GMimeParam list
     * @field 
     */
    params: ParamList

    // Owm methods of GMime-3.0.GMime.ContentDisposition

    /**
     * Encodes the Content-Disposition header.
     * @param options a #GMimeFormatOptions or %NULL
     */
    encode(options: FormatOptions | null): string
    /**
     * Gets the disposition or %NULL on fail.
     */
    getDisposition(): string
    /**
     * Gets the parameter value specified by `name` if it's available.
     * @param name parameter name
     */
    getParameter(name: string): string
    /**
     * Gets the Content-Disposition parameter list.
     */
    getParameters(): ParamList
    /**
     * Determines if a Content-Disposition has a value of "attachment".
     */
    isAttachment(): boolean
    /**
     * Sets the disposition to `value` which may be one of
     * #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE or, by
     * your choice, any other string which would indicate how the MIME
     * part should be displayed by the MUA.
     * @param value disposition value
     */
    setDisposition(value: string): void
    /**
     * Sets a parameter on the Content-Disposition.
     * 
     * Note: The `name` should be in US-ASCII while the `value` should be in
     * UTF-8.
     * @param name parameter name
     * @param value parameter value
     */
    setParameter(name: string, value: string): void

    // Class property signals of GMime-3.0.GMime.ContentDisposition

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A data structure representing a Content-Disposition.
 * @class 
 */
export class ContentDisposition extends GObject.Object {

    // Own properties of GMime-3.0.GMime.ContentDisposition

    static name: string

    // Constructors of GMime-3.0.GMime.ContentDisposition

    constructor(config?: ContentDisposition.ConstructorProperties) 
    /**
     * Creates a new #GMimeContentDisposition object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeContentDisposition object.
     * @constructor 
     */
    static new(): ContentDisposition
    _init(config?: ContentDisposition.ConstructorProperties): void
    /**
     * Parses the input string into a #GMimeContentDisposition object.
     * @param options a #GMimeParserOptions or %NULL
     * @param str Content-Disposition field value
     */
    static parse(options: ParserOptions | null, str: string): ContentDisposition
}

export module ContentType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ContentType {

    // Own fields of GMime-3.0.GMime.ContentType

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * media type
     * @field 
     */
    type: string
    /**
     * media subtype
     * @field 
     */
    subtype: string
    /**
     * a #GMimeParam list
     * @field 
     */
    params: ParamList

    // Owm methods of GMime-3.0.GMime.ContentType

    /**
     * Encodes the Content-Disposition header.
     * @param options a #GMimeFormatOptions or %NULL
     */
    encode(options: FormatOptions | null): string
    /**
     * Gets the Content-Type's media sub-type.
     */
    getMediaSubtype(): string
    /**
     * Gets the Content-Type's media type.
     */
    getMediaType(): string
    /**
     * Allocates a string buffer containing the type and subtype defined
     * by the `content_type`.
     */
    getMimeType(): string
    /**
     * Gets the parameter value specified by `name` if it's available.
     * @param name parameter name (aka attribute)
     */
    getParameter(name: string): string
    /**
     * Gets the Content-Type's parameter list.
     */
    getParameters(): ParamList
    /**
     * Compares the given type and subtype with that of the given mime
     * type object.
     * @param type MIME type to compare against
     * @param subtype MIME subtype to compare against
     */
    isType(type: string, subtype: string): boolean
    /**
     * Sets the Content-Type's media subtype.
     * @param subtype media subtype
     */
    setMediaSubtype(subtype: string): void
    /**
     * Sets the Content-Type's media type.
     * @param type media type
     */
    setMediaType(type: string): void
    /**
     * Sets a parameter on the Content-Type.
     * 
     * Note: The `name` should be in US-ASCII while the `value` should be in
     * UTF-8.
     * @param name parameter name (aka attribute)
     * @param value parameter value
     */
    setParameter(name: string, value: string): void

    // Class property signals of GMime-3.0.GMime.ContentType

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A data structure representing a Content-Type.
 * @class 
 */
export class ContentType extends GObject.Object {

    // Own properties of GMime-3.0.GMime.ContentType

    static name: string

    // Constructors of GMime-3.0.GMime.ContentType

    constructor(config?: ContentType.ConstructorProperties) 
    /**
     * Creates a Content-Type object with type `type` and subtype `subtype`.
     * @constructor 
     * @param type the MIME type or %NULL for the default value
     * @param subtype the MIME subtype or %NULL for the default value
     */
    constructor(type: string, subtype: string) 
    /**
     * Creates a Content-Type object with type `type` and subtype `subtype`.
     * @constructor 
     * @param type the MIME type or %NULL for the default value
     * @param subtype the MIME subtype or %NULL for the default value
     */
    static new(type: string, subtype: string): ContentType
    _init(config?: ContentType.ConstructorProperties): void
    /**
     * Parses the input string into a #GMimeContentType object.
     * @param options a #GMimeParserOptions or %NULL
     * @param str input string containing a content-type (and params)
     */
    static parse(options: ParserOptions | null, str: string): ContentType
}

export module CryptoContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CryptoContext {

    // Own fields of GMime-3.0.GMime.CryptoContext

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * a callback for requesting a password
     * @field 
     */
    requestPasswd: PasswordRequestFunc

    // Owm methods of GMime-3.0.GMime.CryptoContext

    // Has conflict: decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    // Has conflict: digestId(name: string): DigestAlgo
    // Has conflict: digestName(digest: DigestAlgo): string | null
    // Has conflict: encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    // Has conflict: exportKeys(keys: string, ostream: Stream): number
    // Has conflict: getEncryptionProtocol(): string | null
    // Has conflict: getKeyExchangeProtocol(): string | null
    // Has conflict: getSignatureProtocol(): string | null
    // Has conflict: importKeys(istream: Stream): number
    // Has conflict: sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    // Has conflict: verify(flags: VerifyFlags, istream: Stream, sigstream: Stream | null, ostream: Stream | null): SignatureList | null

    // Own virtual methods of GMime-3.0.GMime.CryptoContext

    /**
     * Decrypts the ciphertext input stream and writes the resulting cleartext
     * to the output stream.
     * 
     * When non-%NULL, `session_key` should be a %NULL-terminated string,
     * such as the one returned by g_mime_decrypt_result_get_session_key()
     * from a previous decryption. If the `session_key` is not valid, decryption
     * will fail.
     * 
     * If the encrypted input stream was also signed, the returned
     * #GMimeDecryptResult will have a non-%NULL list of signatures, each with a
     * #GMimeSignatureStatus (among other details about each signature).
     * 
     * On success, the returned #GMimeDecryptResult will contain a list of
     * certificates, one for each recipient, that the original encrypted stream
     * was encrypted to.
     * 
     * Note: It *may* be possible to maliciously design an encrypted stream such
     * that recursively decrypting it will result in an endless loop, causing
     * a denial of service attack on your application.
     * @virtual 
     * @param flags a set of #GMimeDecryptFlags
     * @param sessionKey the session key to use or %NULL
     * @param istream input/ciphertext stream
     * @param ostream output/cleartext stream
     */
    decrypt(flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream): DecryptResult
    /**
     * Gets the digest id based on the digest name.
     * @virtual 
     * @param name digest name
     */
    digestId(name: string): DigestAlgo
    /**
     * Gets the digest name based on the digest id `digest`.
     * @virtual 
     * @param digest digest id
     */
    digestName(digest: DigestAlgo): string | null
    /**
     * Encrypts (and optionally signs) the cleartext input stream and
     * writes the resulting ciphertext to the output stream.
     * @virtual 
     * @param sign sign as well as encrypt
     * @param userid the key id (or email address) to use when signing (assuming `sign` is %TRUE)
     * @param flags a set of #GMimeEncryptFlags
     * @param recipients an array of recipient key ids and/or email addresses
     * @param istream cleartext input stream
     * @param ostream ciphertext output stream
     */
    encrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream): number
    /**
     * Exports the keys/certificates in `keys` to the stream `ostream` from
     * the key/certificate database controlled by `ctx`.
     * 
     * If `keys` is %NULL or contains only a %NULL element, then all keys
     * will be exported.
     * @virtual 
     * @param keys an array of key ids, terminated by a %NULL element
     * @param ostream output stream
     */
    exportKeys(keys: string, ostream: Stream): number
    /**
     * Gets the encryption protocol for the crypto context.
     * @virtual 
     */
    getEncryptionProtocol(): string | null
    /**
     * Gets the key exchange protocol for the crypto context.
     * @virtual 
     */
    getKeyExchangeProtocol(): string | null
    /**
     * Gets the signature protocol for the crypto context.
     * @virtual 
     */
    getSignatureProtocol(): string | null
    /**
     * Imports a stream of keys/certificates contained within `istream`
     * into the key/certificate database controlled by `ctx`.
     * @virtual 
     * @param istream input stream (containing keys)
     */
    importKeys(istream: Stream): number
    /**
     * Signs the input stream and writes the resulting signature to the output stream.
     * @virtual 
     * @param detach %TRUE if `ostream` should be the detached signature; otherwise, %FALSE
     * @param userid private key to use to sign the stream
     * @param istream input stream
     * @param ostream output stream
     */
    sign(detach: boolean, userid: string, istream: Stream, ostream: Stream): number
    /**
     * Verifies the signature. If `istream` is a clearsigned stream, you
     * should pass %NULL as the `sigstream` parameter and may wish to
     * provide an `ostream` argument for GMime to output the original
     * plaintext into. Otherwise `sigstream` is assumed to be the signature
     * stream and is used to verify the integirity of the `istream`.
     * @virtual 
     * @param flags a #GMimeVerifyFlags
     * @param istream input stream
     * @param sigstream detached-signature stream
     * @param ostream output stream for use with encapsulated signature input streams
     */
    verify(flags: VerifyFlags, istream: Stream, sigstream: Stream | null, ostream: Stream | null): SignatureList | null

    // Class property signals of GMime-3.0.GMime.CryptoContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A crypto context for use with MIME.
 * @class 
 */
export class CryptoContext extends GObject.Object {

    // Own properties of GMime-3.0.GMime.CryptoContext

    static name: string

    // Constructors of GMime-3.0.GMime.CryptoContext

    constructor(config?: CryptoContext.ConstructorProperties) 
    /**
     * Creates a new crypto context for the specified `protocol`.
     * @constructor 
     * @param protocol the crypto protocol
     */
    constructor(protocol: string) 
    /**
     * Creates a new crypto context for the specified `protocol`.
     * @constructor 
     * @param protocol the crypto protocol
     */
    static new(protocol: string): CryptoContext
    _init(config?: CryptoContext.ConstructorProperties): void
}

export module DataWrapper {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DataWrapper {

    // Own fields of GMime-3.0.GMime.DataWrapper

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * the encoding of the content
     * @field 
     */
    encoding: ContentEncoding
    /**
     * content stream
     * @field 
     */
    stream: Stream

    // Owm methods of GMime-3.0.GMime.DataWrapper

    /**
     * Gets the encoding type of the stream wrapped by `wrapper`.
     */
    getEncoding(): ContentEncoding
    /**
     * Gets a reference to the stream wrapped by `wrapper`.
     */
    getStream(): Stream
    /**
     * Sets the encoding type of the internal stream.
     * @param encoding encoding
     */
    setEncoding(encoding: ContentEncoding): void
    /**
     * Replaces the wrapper's internal stream with `stream`. Don't forget,
     * if `stream` is not of the same encoding as the old stream, you'll
     * want to call g_mime_data_wrapper_set_encoding() as well.
     * 
     * Note: caller is responsible for its own reference on
     * `stream`.
     * @param stream a #GMimeStream
     */
    setStream(stream: Stream): void
    // Has conflict: writeToStream(stream: Stream): number

    // Own virtual methods of GMime-3.0.GMime.DataWrapper

    /**
     * Writes the raw (decoded) data to the output stream.
     * @virtual 
     * @param stream output stream
     */
    writeToStream(stream: Stream): number

    // Class property signals of GMime-3.0.GMime.DataWrapper

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A wrapper for a stream which may be encoded.
 * @class 
 */
export class DataWrapper extends GObject.Object {

    // Own properties of GMime-3.0.GMime.DataWrapper

    static name: string

    // Constructors of GMime-3.0.GMime.DataWrapper

    constructor(config?: DataWrapper.ConstructorProperties) 
    /**
     * Creates a new #GMimeDataWrapper object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeDataWrapper object.
     * @constructor 
     */
    static new(): DataWrapper
    /**
     * Creates a new #GMimeDataWrapper object around `stream`.
     * @constructor 
     * @param stream a #GMimeStream
     * @param encoding stream's encoding
     */
    static newWithStream(stream: Stream, encoding: ContentEncoding): DataWrapper
    _init(config?: DataWrapper.ConstructorProperties): void
}

export module DecryptResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DecryptResult {

    // Own fields of GMime-3.0.GMime.DecryptResult

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * A #GMimeCertificateList
     * @field 
     */
    recipients: CertificateList
    /**
     * A #GMimeSignatureList if signed or %NULL otherwise.
     * @field 
     */
    signatures: SignatureList
    /**
     * The cipher algorithm used to encrypt the stream.
     * @field 
     */
    cipher: CipherAlgo
    /**
     * The MDC digest algorithm used, if any.
     * @field 
     */
    mdc: DigestAlgo
    /**
     * The session key if requested or %NULL otherwise.
     * @field 
     */
    sessionKey: string

    // Owm methods of GMime-3.0.GMime.DecryptResult

    /**
     * Get the cipher algorithm used.
     */
    getCipher(): CipherAlgo
    /**
     * Get the mdc digest algorithm used.
     */
    getMdc(): DigestAlgo
    /**
     * Gets the list of certificates that the stream had been encrypted to.
     */
    getRecipients(): CertificateList
    /**
     * Get the session key used for this decryption.
     */
    getSessionKey(): string | null
    /**
     * Gets a list of signatures if the encrypted stream had also been signed.
     */
    getSignatures(): SignatureList | null
    /**
     * Set the cipher algorithm used.
     * @param cipher a #GMimeCipherAlgo
     */
    setCipher(cipher: CipherAlgo): void
    /**
     * Set the mdc digest algorithm used.
     * @param mdc a #GMimeDigestAlgo
     */
    setMdc(mdc: DigestAlgo): void
    /**
     * Sets the list of certificates that the stream had been encrypted to.
     * @param recipients A #GMimeCertificateList
     */
    setRecipients(recipients: CertificateList): void
    /**
     * Set the session key to be returned by this decryption result.
     * @param sessionKey a string representing the session key or %NULL to unset the key
     */
    setSessionKey(sessionKey: string | null): void
    /**
     * Sets the list of signatures.
     * @param signatures A #GMimeSignatureList
     */
    setSignatures(signatures: SignatureList): void

    // Class property signals of GMime-3.0.GMime.DecryptResult

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object containing the results from decrypting an encrypted stream.
 * @class 
 */
export class DecryptResult extends GObject.Object {

    // Own properties of GMime-3.0.GMime.DecryptResult

    static name: string

    // Constructors of GMime-3.0.GMime.DecryptResult

    constructor(config?: DecryptResult.ConstructorProperties) 
    /**
     * Creates a new #GMimeDecryptResult object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeDecryptResult object.
     * @constructor 
     */
    static new(): DecryptResult
    _init(config?: DecryptResult.ConstructorProperties): void
}

export module Filter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Filter {

    // Own fields of GMime-3.0.GMime.Filter

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * private state data
     * @field 
     */
    priv: object
    outreal: string
    outbuf: string
    outptr: string
    outsize: number
    outpre: number
    backbuf: string
    backsize: number
    backlen: number

    // Owm methods of GMime-3.0.GMime.Filter

    /**
     * Sets number of bytes backed up on the input, new calls replace
     * previous ones
     * @param data data to backup
     */
    backup(data: Uint8Array): void
    // Has conflict: complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    // Has conflict: copy(): Filter
    // Has conflict: filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    // Has conflict: reset(): void
    /**
     * Ensure this much size is available for filter output (if required)
     * @param size requested size for the output buffer
     * @param keep %TRUE if existing data in the output buffer should be kept
     */
    setSize(size: number, keep: boolean): void

    // Own virtual methods of GMime-3.0.GMime.Filter

    /**
     * Completes the filtering.
     * @virtual 
     * @param inbuf input buffer
     * @param prespace prespace buffer length
     */
    complete(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    /**
     * Copies `filter` into a new #GMimeFilter object.
     * @virtual 
     */
    copy(): Filter
    /**
     * Filters the input data and writes it to `out`.
     * @virtual 
     * @param inbuf input buffer
     * @param prespace prespace buffer length
     */
    filter(inbuf: Uint8Array, prespace: number): [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    /**
     * Resets the filter.
     * @virtual 
     */
    reset(): void

    // Class property signals of GMime-3.0.GMime.Filter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Base class for filters used by #GMimeStreamFilter.
 * @class 
 */
export class Filter extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Filter

    static name: string

    // Constructors of GMime-3.0.GMime.Filter

    constructor(config?: Filter.ConstructorProperties) 
    _init(config?: Filter.ConstructorProperties): void
}

export module FilterBasic {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterBasic {

    // Own fields of GMime-3.0.GMime.FilterBasic

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * #GMimeEncoding state
     * @field 
     */
    encoder: Encoding

    // Class property signals of GMime-3.0.GMime.FilterBasic

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A basic encoder/decoder filter for the MIME encodings.
 * @class 
 */
export class FilterBasic extends Filter {

    // Own properties of GMime-3.0.GMime.FilterBasic

    static name: string

    // Constructors of GMime-3.0.GMime.FilterBasic

    constructor(config?: FilterBasic.ConstructorProperties) 
    /**
     * Creates a new basic filter for `encoding`.
     * @constructor 
     * @param encoding a #GMimeContentEncoding
     * @param encode %TRUE to encode or %FALSE to decode
     */
    constructor(encoding: ContentEncoding, encode: boolean) 
    /**
     * Creates a new basic filter for `encoding`.
     * @constructor 
     * @param encoding a #GMimeContentEncoding
     * @param encode %TRUE to encode or %FALSE to decode
     */
    static new(encoding: ContentEncoding, encode: boolean): FilterBasic
    _init(config?: FilterBasic.ConstructorProperties): void
}

export module FilterBest {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterBest {

    // Own fields of GMime-3.0.GMime.FilterBest

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * #GMimeFilterBestFlags
     * @field 
     */
    flags: FilterBestFlags
    /**
     * #GMimeCharset state
     * @field 
     */
    charset: Charset
    /**
     * count of nul-bytes passed through the filter
     * @field 
     */
    count0: number
    /**
     * count of 8bit bytes passed through the filter
     * @field 
     */
    count8: number
    /**
     * total number of bytes passed through the filter
     * @field 
     */
    total: number
    /**
     * the length of the longest line passed through the filter
     * @field 
     */
    maxline: number
    /**
     * current line length
     * @field 
     */
    linelen: number
    /**
     * buffer for checking From_ lines
     * @field 
     */
    frombuf: Uint8Array
    /**
     * length of bytes in `frombuf`
     * @field 
     */
    fromlen: number
    /**
     * %TRUE if any line started with "From "
     * @field 
     */
    hadfrom: number
    /**
     * start line state
     * @field 
     */
    startline: number
    /**
     * mid-line state
     * @field 
     */
    midline: number

    // Owm methods of GMime-3.0.GMime.FilterBest

    /**
     * Calculates the most efficient Content-Transfer-Encoding for the
     * content filtered through `best` that fits within the encoding
     * `constraint`.
     * @param constraint a #GMimeEncodingConstraint
     */
    encoding(constraint: EncodingConstraint): ContentEncoding

    // Class property signals of GMime-3.0.GMime.FilterBest

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for calculating the best encoding and/or charset to encode
 * the data passed through it.
 * @class 
 */
export class FilterBest extends Filter {

    // Own properties of GMime-3.0.GMime.FilterBest

    static name: string

    // Constructors of GMime-3.0.GMime.FilterBest

    constructor(config?: FilterBest.ConstructorProperties) 
    /**
     * Creates a new GMimeFilterBest filter. `flags` are used to determine
     * which information to keep statistics of. If the
     * #GMIME_FILTER_BEST_CHARSET bit is set, the filter will be able to
     * compute the best charset for encoding the stream of data
     * filtered. If the #GMIME_FILTER_BEST_ENCODING bit is set, the filter
     * will be able to compute the best Content-Transfer-Encoding for use
     * with the stream being filtered.
     * 
     * Note: In order for the g_mime_filter_best_charset() function to
     * work, the stream being filtered MUST already be encoded in UTF-8.
     * @constructor 
     * @param flags filter flags
     */
    constructor(flags: FilterBestFlags) 
    /**
     * Creates a new GMimeFilterBest filter. `flags` are used to determine
     * which information to keep statistics of. If the
     * #GMIME_FILTER_BEST_CHARSET bit is set, the filter will be able to
     * compute the best charset for encoding the stream of data
     * filtered. If the #GMIME_FILTER_BEST_ENCODING bit is set, the filter
     * will be able to compute the best Content-Transfer-Encoding for use
     * with the stream being filtered.
     * 
     * Note: In order for the g_mime_filter_best_charset() function to
     * work, the stream being filtered MUST already be encoded in UTF-8.
     * @constructor 
     * @param flags filter flags
     */
    static new(flags: FilterBestFlags): FilterBest
    _init(config?: FilterBest.ConstructorProperties): void
}

export module FilterCharset {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterCharset {

    // Own fields of GMime-3.0.GMime.FilterCharset

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * charset that the filter is converting from
     * @field 
     */
    fromCharset: string
    /**
     * charset the filter is converting to
     * @field 
     */
    toCharset: string

    // Class property signals of GMime-3.0.GMime.FilterCharset

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter to convert between charsets.
 * @class 
 */
export class FilterCharset extends Filter {

    // Own properties of GMime-3.0.GMime.FilterCharset

    static name: string

    // Constructors of GMime-3.0.GMime.FilterCharset

    constructor(config?: FilterCharset.ConstructorProperties) 
    /**
     * Creates a new #GMimeFilterCharset filter.
     * @constructor 
     * @param fromCharset charset to convert from
     * @param toCharset charset to convert to
     */
    constructor(fromCharset: string, toCharset: string) 
    /**
     * Creates a new #GMimeFilterCharset filter.
     * @constructor 
     * @param fromCharset charset to convert from
     * @param toCharset charset to convert to
     */
    static new(fromCharset: string, toCharset: string): FilterCharset
    _init(config?: FilterCharset.ConstructorProperties): void
}

export module FilterChecksum {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterChecksum {

    // Own fields of GMime-3.0.GMime.FilterChecksum

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * The checksum context
     * @field 
     */
    checksum: GLib.Checksum

    // Owm methods of GMime-3.0.GMime.FilterChecksum

    /**
     * Outputs the checksum digest into `digest`.
     * @param digest the digest buffer
     * @param len the length of the digest buffer
     */
    getDigest(digest: number, len: number): number
    /**
     * Outputs the checksum digest as a newly allocated hexadecimal string.
     */
    getString(): string

    // Class property signals of GMime-3.0.GMime.FilterChecksum

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for calculating the checksum of a stream.
 * @class 
 */
export class FilterChecksum extends Filter {

    // Own properties of GMime-3.0.GMime.FilterChecksum

    static name: string

    // Constructors of GMime-3.0.GMime.FilterChecksum

    constructor(config?: FilterChecksum.ConstructorProperties) 
    /**
     * Creates a new checksum filter.
     * @constructor 
     * @param type the type of checksum
     */
    constructor(type: GLib.ChecksumType) 
    /**
     * Creates a new checksum filter.
     * @constructor 
     * @param type the type of checksum
     */
    static new(type: GLib.ChecksumType): FilterChecksum
    _init(config?: FilterChecksum.ConstructorProperties): void
}

export module FilterDos2Unix {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterDos2Unix {

    // Own fields of GMime-3.0.GMime.FilterDos2Unix

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * %TRUE if the filter should ensure that the stream ends with a new line
     * @field 
     */
    ensureNewline: boolean
    /**
     * the previous character encountered
     * @field 
     */
    pc: number

    // Class property signals of GMime-3.0.GMime.FilterDos2Unix

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter to convert a stream from Windows/DOS line endings to Unix line endings.
 * @class 
 */
export class FilterDos2Unix extends Filter {

    // Own properties of GMime-3.0.GMime.FilterDos2Unix

    static name: string

    // Constructors of GMime-3.0.GMime.FilterDos2Unix

    constructor(config?: FilterDos2Unix.ConstructorProperties) 
    /**
     * Creates a new #GMimeFilterDos2Unix filter.
     * @constructor 
     * @param ensureNewline %TRUE if the filter should ensure that the stream ends in a new line
     */
    constructor(ensureNewline: boolean) 
    /**
     * Creates a new #GMimeFilterDos2Unix filter.
     * @constructor 
     * @param ensureNewline %TRUE if the filter should ensure that the stream ends in a new line
     */
    static new(ensureNewline: boolean): FilterDos2Unix
    _init(config?: FilterDos2Unix.ConstructorProperties): void
}

export module FilterEnriched {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterEnriched {

    // Own fields of GMime-3.0.GMime.FilterEnriched

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * bit flags
     * @field 
     */
    flags: number
    /**
     * nofill tag state
     * @field 
     */
    nofill: number

    // Class property signals of GMime-3.0.GMime.FilterEnriched

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for converting text/enriched or text/richtext textual
 * streams into text/html.
 * @class 
 */
export class FilterEnriched extends Filter {

    // Own properties of GMime-3.0.GMime.FilterEnriched

    static name: string

    // Constructors of GMime-3.0.GMime.FilterEnriched

    constructor(config?: FilterEnriched.ConstructorProperties) 
    /**
     * Creates a new GMimeFilterEnriched object.
     * @constructor 
     * @param flags flags
     */
    constructor(flags: number) 
    /**
     * Creates a new GMimeFilterEnriched object.
     * @constructor 
     * @param flags flags
     */
    static new(flags: number): FilterEnriched
    _init(config?: FilterEnriched.ConstructorProperties): void
}

export module FilterFrom {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterFrom {

    // Own fields of GMime-3.0.GMime.FilterFrom

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * #GMimeFilterFromMode
     * @field 
     */
    mode: FilterFromMode
    /**
     * %TRUE if in the middle of a line
     * @field 
     */
    midline: boolean

    // Class property signals of GMime-3.0.GMime.FilterFrom

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for armoring or escaping lines beginning with "From ".
 * @class 
 */
export class FilterFrom extends Filter {

    // Own properties of GMime-3.0.GMime.FilterFrom

    static name: string

    // Constructors of GMime-3.0.GMime.FilterFrom

    constructor(config?: FilterFrom.ConstructorProperties) 
    /**
     * Creates a new GMimeFilterFrom filter. If `mode` is
     * #GMIME_FILTER_FROM_MODE_ARMOR, the from-filter will encode from
     * lines using the quoted-printable encoding resulting in "=46rom ".
     * Using the #GMIME_FILTER_FROM_MODE_DEFAULT or
     * #GMIME_FILTER_FROM_MODE_ESCAPE mode (they are the same), from lines
     * will be escaped to ">From ".
     * 
     * Note: If you plan on using a from-filter in mode ARMOR, you should
     * remember to also use a #GMimeFilterBasic filter with an encoding of
     * #GMIME_CONTENT_ENCODING_QUOTEDPRINTABLE.
     * @constructor 
     * @param mode filter mode
     */
    constructor(mode: FilterFromMode) 
    /**
     * Creates a new GMimeFilterFrom filter. If `mode` is
     * #GMIME_FILTER_FROM_MODE_ARMOR, the from-filter will encode from
     * lines using the quoted-printable encoding resulting in "=46rom ".
     * Using the #GMIME_FILTER_FROM_MODE_DEFAULT or
     * #GMIME_FILTER_FROM_MODE_ESCAPE mode (they are the same), from lines
     * will be escaped to ">From ".
     * 
     * Note: If you plan on using a from-filter in mode ARMOR, you should
     * remember to also use a #GMimeFilterBasic filter with an encoding of
     * #GMIME_CONTENT_ENCODING_QUOTEDPRINTABLE.
     * @constructor 
     * @param mode filter mode
     */
    static new(mode: FilterFromMode): FilterFrom
    _init(config?: FilterFrom.ConstructorProperties): void
}

export module FilterGZip {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterGZip {

    // Own fields of GMime-3.0.GMime.FilterGZip

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * private state data
     * @field 
     */
    priv: object
    /**
     * #GMimeFilterGZipMode
     * @field 
     */
    mode: FilterGZipMode
    /**
     * compression level
     * @field 
     */
    level: number

    // Owm methods of GMime-3.0.GMime.FilterGZip

    /**
     * Gets the comment that was either previously set or retrieved when decoding a gzip stream.
     */
    getComment(): string
    /**
     * Gets the filename that was either previously set or retrieved when decoding a gzip stream.
     */
    getFilename(): string
    /**
     * Sets the comment that should be used when generating the gzip header.
     * @param comment The comment
     */
    setComment(comment: string): void
    /**
     * Sets the filename that should be used when generating the gzip header.
     * @param filename The name of the file
     */
    setFilename(filename: string): void

    // Class property signals of GMime-3.0.GMime.FilterGZip

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for compresing or decompressing a gzip stream.
 * @class 
 */
export class FilterGZip extends Filter {

    // Own properties of GMime-3.0.GMime.FilterGZip

    static name: string

    // Constructors of GMime-3.0.GMime.FilterGZip

    constructor(config?: FilterGZip.ConstructorProperties) 
    /**
     * Creates a new gzip (or gunzip) filter.
     * @constructor 
     * @param mode zip or unzip
     * @param level compression level
     */
    constructor(mode: FilterGZipMode, level: number) 
    /**
     * Creates a new gzip (or gunzip) filter.
     * @constructor 
     * @param mode zip or unzip
     * @param level compression level
     */
    static new(mode: FilterGZipMode, level: number): FilterGZip
    _init(config?: FilterGZip.ConstructorProperties): void
}

export module FilterHTML {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterHTML {

    // Own fields of GMime-3.0.GMime.FilterHTML

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * URL scanner state
     * @field 
     */
    scanner: object
    /**
     * flags specifying HTML conversion rules
     * @field 
     */
    flags: number
    /**
     * cite colour
     * @field 
     */
    colour: number
    /**
     * current column
     * @field 
     */
    column: number
    /**
     * currently inside of a 'pre' tag.
     * @field 
     */
    preOpen: number
    /**
     * current citation depth level.
     * @field 
     */
    citationDepth: number

    // Class property signals of GMime-3.0.GMime.FilterHTML

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for converting text/plain into text/html.
 * @class 
 */
export class FilterHTML extends Filter {

    // Own properties of GMime-3.0.GMime.FilterHTML

    static name: string

    // Constructors of GMime-3.0.GMime.FilterHTML

    constructor(config?: FilterHTML.ConstructorProperties) 
    /**
     * Creates a new GMimeFilterHTML filter which can be used to convert a
     * plain UTF-8 text stream into an html stream.
     * @constructor 
     * @param flags html flags
     * @param colour citation colour
     */
    constructor(flags: number, colour: number) 
    /**
     * Creates a new GMimeFilterHTML filter which can be used to convert a
     * plain UTF-8 text stream into an html stream.
     * @constructor 
     * @param flags html flags
     * @param colour citation colour
     */
    static new(flags: number, colour: number): FilterHTML
    _init(config?: FilterHTML.ConstructorProperties): void
}

export module FilterOpenPGP {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterOpenPGP {

    // Own fields of GMime-3.0.GMime.FilterOpenPGP

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any

    // Owm methods of GMime-3.0.GMime.FilterOpenPGP

    /**
     * Gets the stream offset of the beginning of the OpenPGP data block, if any have been found.
     */
    getBeginOffset(): number
    /**
     * Gets the type of OpenPGP data that has been detected.
     */
    getDataType(): OpenPGPData
    /**
     * Gets the stream offset of the end of the OpenPGP data block, if any have been found.
     */
    getEndOffset(): number

    // Class property signals of GMime-3.0.GMime.FilterOpenPGP

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter to detect OpenPGP markers.
 * @class 
 */
export class FilterOpenPGP extends Filter {

    // Own properties of GMime-3.0.GMime.FilterOpenPGP

    static name: string

    // Constructors of GMime-3.0.GMime.FilterOpenPGP

    constructor(config?: FilterOpenPGP.ConstructorProperties) 
    /**
     * Creates a new #GMimeFilterOpenPGP filter.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeFilterOpenPGP filter.
     * @constructor 
     */
    static new(): FilterOpenPGP
    _init(config?: FilterOpenPGP.ConstructorProperties): void
}

export module FilterSmtpData {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterSmtpData {

    // Own fields of GMime-3.0.GMime.FilterSmtpData

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * beginning-of-line state.
     * @field 
     */
    bol: boolean

    // Class property signals of GMime-3.0.GMime.FilterSmtpData

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter to byte-stuff SMTP DATA.
 * @class 
 */
export class FilterSmtpData extends Filter {

    // Own properties of GMime-3.0.GMime.FilterSmtpData

    static name: string

    // Constructors of GMime-3.0.GMime.FilterSmtpData

    constructor(config?: FilterSmtpData.ConstructorProperties) 
    /**
     * Creates a new #GMimeFilterSmtpData filter.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeFilterSmtpData filter.
     * @constructor 
     */
    static new(): FilterSmtpData
    _init(config?: FilterSmtpData.ConstructorProperties): void
}

export module FilterStrip {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterStrip {

    // Own fields of GMime-3.0.GMime.FilterStrip

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any

    // Class property signals of GMime-3.0.GMime.FilterStrip

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for stripping whitespace from the end of lines.
 * @class 
 */
export class FilterStrip extends Filter {

    // Own properties of GMime-3.0.GMime.FilterStrip

    static name: string

    // Constructors of GMime-3.0.GMime.FilterStrip

    constructor(config?: FilterStrip.ConstructorProperties) 
    /**
     * Creates a new #GMimeFilterStrip filter which will strip trailing
     * whitespace from every line of input passed through the filter.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeFilterStrip filter which will strip trailing
     * whitespace from every line of input passed through the filter.
     * @constructor 
     */
    static new(): FilterStrip
    _init(config?: FilterStrip.ConstructorProperties): void
}

export module FilterUnix2Dos {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterUnix2Dos {

    // Own fields of GMime-3.0.GMime.FilterUnix2Dos

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * %TRUE if the filter should ensure that the stream ends with a new line
     * @field 
     */
    ensureNewline: boolean
    /**
     * the previous character encountered
     * @field 
     */
    pc: number

    // Class property signals of GMime-3.0.GMime.FilterUnix2Dos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter to convert a stream from Windows/DOS line endings to Unix line endings.
 * @class 
 */
export class FilterUnix2Dos extends Filter {

    // Own properties of GMime-3.0.GMime.FilterUnix2Dos

    static name: string

    // Constructors of GMime-3.0.GMime.FilterUnix2Dos

    constructor(config?: FilterUnix2Dos.ConstructorProperties) 
    /**
     * Creates a new #GMimeFilterUnix2Dos filter.
     * @constructor 
     * @param ensureNewline %TRUE if the filter should ensure that the stream ends in a new line
     */
    constructor(ensureNewline: boolean) 
    /**
     * Creates a new #GMimeFilterUnix2Dos filter.
     * @constructor 
     * @param ensureNewline %TRUE if the filter should ensure that the stream ends in a new line
     */
    static new(ensureNewline: boolean): FilterUnix2Dos
    _init(config?: FilterUnix2Dos.ConstructorProperties): void
}

export module FilterWindows {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterWindows {

    // Own fields of GMime-3.0.GMime.FilterWindows

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * %TRUE if the stream is detected to be a windows-cp125x charset
     * @field 
     */
    isWindows: boolean
    /**
     * charset the text stream is claimed to be
     * @field 
     */
    claimedCharset: string

    // Owm methods of GMime-3.0.GMime.FilterWindows

    /**
     * Determines whether or not a Windows-CP125# charset has been
     * detected so far.
     */
    isWindowsCharset(): boolean
    /**
     * Figures out the real charset that the text is encoded in based on whether or not Windows-CP125# characters were found.
     */
    realCharset(): string

    // Class property signals of GMime-3.0.GMime.FilterWindows

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for detecting whether or not a text stream claimed to be
 * iso-8859-X is really that charset or if it is really a
 * Windows-CP125x charset.
 * @class 
 */
export class FilterWindows extends Filter {

    // Own properties of GMime-3.0.GMime.FilterWindows

    static name: string

    // Constructors of GMime-3.0.GMime.FilterWindows

    constructor(config?: FilterWindows.ConstructorProperties) 
    /**
     * Creates a new GMimeFilterWindows filter. When a stream of text has
     * been filtered, it can be determined whether or not said text stream
     * was in `claimed_charset` or the equivalent Windows-CP125# charset.
     * @constructor 
     * @param claimedCharset charset that a text stream claims to be
     */
    constructor(claimedCharset: string) 
    /**
     * Creates a new GMimeFilterWindows filter. When a stream of text has
     * been filtered, it can be determined whether or not said text stream
     * was in `claimed_charset` or the equivalent Windows-CP125# charset.
     * @constructor 
     * @param claimedCharset charset that a text stream claims to be
     */
    static new(claimedCharset: string): FilterWindows
    _init(config?: FilterWindows.ConstructorProperties): void
}

export module FilterYenc {

    // Constructor properties interface

    export interface ConstructorProperties extends Filter.ConstructorProperties {
    }

}

export interface FilterYenc {

    // Own fields of GMime-3.0.GMime.FilterYenc

    /**
     * parent #GMimeFilter
     * @field 
     */
    parentObject: any
    /**
     * encode vs decode
     * @field 
     */
    encode: boolean
    /**
     * part id
     * @field 
     */
    part: number
    /**
     * encode/decode state
     * @field 
     */
    state: number
    /**
     * part crc
     * @field 
     */
    pcrc: number
    /**
     * full crc
     * @field 
     */
    crc: number

    // Owm methods of GMime-3.0.GMime.FilterYenc

    /**
     * Get the computed crc or (guint32) -1 on fail.
     */
    getCrc(): number
    /**
     * Get the computed part crc or (guint32) -1 on fail.
     */
    getPcrc(): number
    /**
     * Sets the current crc32 value on the yEnc filter `yenc` to `crc`.
     * @param crc crc32
     */
    setCrc(crc: number): void
    /**
     * Sets the current state of the yencoder/ydecoder
     * @param state encode/decode state
     */
    setState(state: number): void

    // Class property signals of GMime-3.0.GMime.FilterYenc

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A filter for yEncoding or yDecoding a stream.
 * @class 
 */
export class FilterYenc extends Filter {

    // Own properties of GMime-3.0.GMime.FilterYenc

    static name: string

    // Constructors of GMime-3.0.GMime.FilterYenc

    constructor(config?: FilterYenc.ConstructorProperties) 
    /**
     * Creates a new yEnc filter.
     * @constructor 
     * @param encode encode vs decode
     */
    constructor(encode: boolean) 
    /**
     * Creates a new yEnc filter.
     * @constructor 
     * @param encode encode vs decode
     */
    static new(encode: boolean): FilterYenc
    _init(config?: FilterYenc.ConstructorProperties): void
}

export module GpgContext {

    // Constructor properties interface

    export interface ConstructorProperties extends CryptoContext.ConstructorProperties {
    }

}

export interface GpgContext {

    // Class property signals of GMime-3.0.GMime.GpgContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A GnuPG crypto context.
 * @class 
 */
export class GpgContext extends CryptoContext {

    // Own properties of GMime-3.0.GMime.GpgContext

    static name: string

    // Constructors of GMime-3.0.GMime.GpgContext

    constructor(config?: GpgContext.ConstructorProperties) 
    /**
     * Creates a new gpg crypto context object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new gpg crypto context object.
     * @constructor 
     */
    static new(): GpgContext

    // Overloads of new

    /**
     * Creates a new crypto context for the specified `protocol`.
     * @constructor 
     * @param protocol the crypto protocol
     */
    static new(protocol: string): CryptoContext
    _init(config?: GpgContext.ConstructorProperties): void
}

export module Header {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Header {

    // Owm methods of GMime-3.0.GMime.Header

    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a Sender, From, Reply-To, To, Cc, or Bcc header value
     * @param charset a charset (note: unused)
     */
    formatAddrlist(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a Content-Disposition header value
     * @param charset a charset (note: unused)
     */
    formatContentDisposition(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a Content-Type header value
     * @param charset a charset (note: unused)
     */
    formatContentType(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a header value
     * @param charset a charset to use when encoding the `value`
     */
    formatDefault(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a Message-Id or Content-Id header value
     * @param charset a charset (note: unused)
     */
    formatMessageId(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a Received header value
     * @param charset a charset (note: unused)
     */
    formatReceived(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Parses the `value` and then re-formats it to conform to the formatting options,
     * folding the value if necessary.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value a References or In-Reply-To header value
     * @param charset a charset (note: unused)
     */
    formatReferences(options: FormatOptions | null, value: string, charset: string): string
    /**
     * Gets the header's name.
     */
    getName(): string
    /**
     * Gets the header's stream offset if known.
     */
    getOffset(): number
    /**
     * Gets the header's raw name. The raw header name is the complete string up to
     * (but not including) the ':' separating the header's name from its value. This
     * string may be different from the value returned by g_mime_header_get_name()
     * if the parsed message's header contained trailing whitespace after the header
     * name, such as: "Subject : this is the subject\r\n".
     */
    getRawName(): string
    /**
     * Gets the header's raw (folded) value.
     */
    getRawValue(): string
    /**
     * Gets the header's unfolded value.
     */
    getValue(): string
    /**
     * Sets the header's raw value.
     * @param rawValue the raw value
     */
    setRawValue(rawValue: string): void
    /**
     * Sets the header's decoded value.
     * @param options a #GMimeFormatOptions or %NULL
     * @param value the new header value
     * @param charset a charset
     */
    setValue(options: FormatOptions | null, value: string, charset: string): void
    /**
     * Write the header to the specified stream.
     * @param options a #GMimeFormatOptions or %NULL
     * @param stream a #GMimeStream
     */
    writeToStream(options: FormatOptions | null, stream: Stream): number

    // Class property signals of GMime-3.0.GMime.Header

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A message or mime-part header.
 * @class 
 */
export class Header extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Header

    static name: string

    // Constructors of GMime-3.0.GMime.Header

    constructor(config?: Header.ConstructorProperties) 
    _init(config?: Header.ConstructorProperties): void
}

export module HeaderList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface HeaderList {

    // Own fields of GMime-3.0.GMime.HeaderList

    parentObject: GObject.Object

    // Owm methods of GMime-3.0.GMime.HeaderList

    /**
     * Appends a header. If `value` is %NULL, a space will be set aside for it
     * (useful for setting the order of headers before values can be
     * obtained for them) otherwise the header will be unset.
     * @param name header name
     * @param value header value
     * @param charset a charset
     */
    append(name: string, value: string, charset: string): void
    /**
     * Removes all of the headers from the #GMimeHeaderList.
     */
    clear(): void
    /**
     * Checks whether or not a header exists.
     * @param name header name
     */
    contains(name: string): boolean
    /**
     * Gets the number of headers contained within the header list.
     */
    getCount(): number
    /**
     * Gets the first header with the specified name.
     * @param name header name
     */
    getHeader(name: string): Header
    /**
     * Gets the header at the specified `index` within the list.
     * @param index the 0-based index of the header
     */
    getHeaderAt(index: number): Header
    /**
     * Prepends a header. If `value` is %NULL, a space will be set aside
     * for it (useful for setting the order of headers before values can
     * be obtained for them) otherwise the header will be unset.
     * @param name header name
     * @param value header value
     * @param charset a charset
     */
    prepend(name: string, value: string, charset: string): void
    /**
     * Remove the first instance of the specified header.
     * @param name header name
     */
    remove(name: string): boolean
    /**
     * Removes the header at the specified `index` from `headers`.
     * @param index the 0-based index of the header to remove
     */
    removeAt(index: number): void
    /**
     * Set the value of the specified header. If `value` is %NULL and the
     * header, `name,` had not been previously set, a space will be set
     * aside for it (useful for setting the order of headers before values
     * can be obtained for them) otherwise the header will be unset.
     * 
     * Note: If there are multiple headers with the specified field name,
     * the first instance of the header will be replaced and further
     * instances will be removed.
     * @param name header name
     * @param value header value
     * @param charset a charset
     */
    set(name: string, value: string, charset: string): void
    /**
     * Allocates a string buffer containing the raw rfc822 headers
     * contained in `headers`.
     * @param options a #GMimeFormatOptions or %NULL
     */
    toString(options: FormatOptions | null): string
    /**
     * Write the headers to a stream.
     * @param options a #GMimeFormatOptions or %NULL
     * @param stream output stream
     */
    writeToStream(options: FormatOptions | null, stream: Stream): number

    // Class property signals of GMime-3.0.GMime.HeaderList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A list of message or mime-part headers.
 * @class 
 */
export class HeaderList extends GObject.Object {

    // Own properties of GMime-3.0.GMime.HeaderList

    static name: string

    // Constructors of GMime-3.0.GMime.HeaderList

    constructor(config?: HeaderList.ConstructorProperties) 
    /**
     * Creates a new #GMimeHeaderList object.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     */
    constructor(options: ParserOptions | null) 
    /**
     * Creates a new #GMimeHeaderList object.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     */
    static new(options: ParserOptions | null): HeaderList
    _init(config?: HeaderList.ConstructorProperties): void
}

export module InternetAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface InternetAddress {

    // Own fields of GMime-3.0.GMime.InternetAddress

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * the charset used for encoding the name
     * @field 
     */
    charset: string
    /**
     * display name
     * @field 
     */
    name: string

    // Owm methods of GMime-3.0.GMime.InternetAddress

    /**
     * Gets the charset to be used when encoding the name of the mailbox or group.
     */
    getCharset(): string | null
    /**
     * Gets the display name of the #InternetAddress.
     */
    getName(): string | null
    /**
     * Set the charset to use for encoding the name of the mailbox or group.
     * @param charset the charset to use when encoding the name or %NULL to use the defaults
     */
    setCharset(charset: string | null): void
    /**
     * Set the display name of the #InternetAddress.
     * 
     * Note: The `name` string should be in UTF-8.
     * @param name the display name for the address group or mailbox
     */
    setName(name: string): void
    // Has conflict: toString(options: FormatOptions | null, encode: boolean): string

    // Own virtual methods of GMime-3.0.GMime.InternetAddress

    toString(options: FormatOptions, flags: number, linelen: number, str: GLib.String): void

    // Class property signals of GMime-3.0.GMime.InternetAddress

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An RFC 2822 Address object.
 * @class 
 */
export class InternetAddress extends GObject.Object {

    // Own properties of GMime-3.0.GMime.InternetAddress

    static name: string

    // Constructors of GMime-3.0.GMime.InternetAddress

    constructor(config?: InternetAddress.ConstructorProperties) 
    _init(config?: InternetAddress.ConstructorProperties): void
}

export module InternetAddressGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends InternetAddress.ConstructorProperties {
    }

}

export interface InternetAddressGroup {

    // Own fields of GMime-3.0.GMime.InternetAddressGroup

    /**
     * parent #InternetAddress
     * @field 
     */
    parentObject: any
    /**
     * a #InternetAddressList of group members
     * @field 
     */
    members: InternetAddressList

    // Owm methods of GMime-3.0.GMime.InternetAddressGroup

    /**
     * Add a contact to the internet address group.
     * @param member a #InternetAddress
     */
    addMember(member: InternetAddress): number
    /**
     * Gets the #InternetAddressList containing the group members of an
     * rfc822 group address.
     */
    getMembers(): InternetAddressList
    /**
     * Set the members of the internet address group.
     * @param members a #InternetAddressList
     */
    setMembers(members: InternetAddressList): void

    // Class property signals of GMime-3.0.GMime.InternetAddressGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An RFC 2822 Group address.
 * @class 
 */
export class InternetAddressGroup extends InternetAddress {

    // Own properties of GMime-3.0.GMime.InternetAddressGroup

    static name: string

    // Constructors of GMime-3.0.GMime.InternetAddressGroup

    constructor(config?: InternetAddressGroup.ConstructorProperties) 
    /**
     * Creates a new #InternetAddressGroup object with the specified
     * `name`.
     * @constructor 
     * @param name group name
     */
    constructor(name: string) 
    /**
     * Creates a new #InternetAddressGroup object with the specified
     * `name`.
     * @constructor 
     * @param name group name
     */
    static new(name: string): InternetAddressGroup
    _init(config?: InternetAddressGroup.ConstructorProperties): void
}

export module InternetAddressList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface InternetAddressList {

    // Own fields of GMime-3.0.GMime.InternetAddressList

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * The array of #InternetAddress objects.
     * @field 
     */
    array: object[]

    // Owm methods of GMime-3.0.GMime.InternetAddressList

    /**
     * Adds an #InternetAddress to the #InternetAddressList.
     * @param ia a #InternetAddress
     */
    add(ia: InternetAddress): number
    /**
     * Adds all of the addresses in `append` to `list`.
     * @param append a #InternetAddressList
     */
    append(append: InternetAddressList): void
    /**
     * Clears the list of addresses.
     */
    clear(): void
    /**
     * Checks whether or not the specified #InternetAddress is contained
     * within the #InternetAddressList.
     * @param ia a #InternetAddress
     */
    contains(ia: InternetAddress): boolean
    /**
     * Writes the rfc2047-encoded rfc822 formatted addresses in `list` to
     * `str,` folding appropriately.
     * @param options a #GMimeFormatOptions or %NULL
     * @param str string to write to
     */
    encode(options: FormatOptions | null, str: GLib.String): void
    /**
     * Gets the #InternetAddress at the specified index.
     * @param index index of #InternetAddress to get
     */
    getAddress(index: number): InternetAddress
    /**
     * Gets the index of the specified #InternetAddress inside the
     * #InternetAddressList.
     * @param ia a #InternetAddress
     */
    indexOf(ia: InternetAddress): number
    /**
     * Inserts an #InternetAddress into the #InternetAddressList at the
     * specified index.
     * @param index index to insert at
     * @param ia a #InternetAddress
     */
    insert(index: number, ia: InternetAddress): void
    /**
     * Gets the length of the list.
     */
    length(): number
    /**
     * Inserts all of the addresses in `prepend` to the beginning of `list`.
     * @param prepend a #InternetAddressList
     */
    prepend(prepend: InternetAddressList): void
    /**
     * Removes an #InternetAddress from the #InternetAddressList.
     * @param ia a #InternetAddress
     */
    remove(ia: InternetAddress): boolean
    /**
     * Removes an #InternetAddress from the #InternetAddressList at the
     * specified index.
     * @param index index to remove
     */
    removeAt(index: number): boolean
    /**
     * Sets the #InternetAddress at the specified index to `ia`.
     * @param index index of #InternetAddress to set
     * @param ia a #InternetAddress
     */
    setAddress(index: number, ia: InternetAddress): void
    /**
     * Allocates a string buffer containing the rfc822 formatted addresses
     * in `list`.
     * @param options a #GMimeFormatOptions or %NULL
     * @param encode %TRUE if the address should be rfc2047 encoded
     */
    toString(options: FormatOptions | null, encode: boolean): string | null

    // Class property signals of GMime-3.0.GMime.InternetAddressList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A collection of #InternetAddress objects.
 * @class 
 */
export class InternetAddressList extends GObject.Object {

    // Own properties of GMime-3.0.GMime.InternetAddressList

    static name: string

    // Constructors of GMime-3.0.GMime.InternetAddressList

    constructor(config?: InternetAddressList.ConstructorProperties) 
    /**
     * Creates a new #InternetAddressList.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #InternetAddressList.
     * @constructor 
     */
    static new(): InternetAddressList
    _init(config?: InternetAddressList.ConstructorProperties): void
    /**
     * Construct a list of internet addresses from the given string.
     * @param options a #GMimeParserOptions or %NULL
     * @param str a string containing internet addresses
     */
    static parse(options: ParserOptions | null, str: string): InternetAddressList | null
}

export module InternetAddressMailbox {

    // Constructor properties interface

    export interface ConstructorProperties extends InternetAddress.ConstructorProperties {
    }

}

export interface InternetAddressMailbox {

    // Own fields of GMime-3.0.GMime.InternetAddressMailbox

    /**
     * parent #InternetAddress
     * @field 
     */
    parentObject: any
    /**
     * the ascii-encoded version of `addr`
     * @field 
     */
    idnAddr: string
    /**
     * the address string
     * @field 
     */
    addr: string
    /**
     * the index of the '`'` character
     * @field 
     */
    at: number

    // Owm methods of GMime-3.0.GMime.InternetAddressMailbox

    /**
     * Gets the addr-spec of the internet address mailbox.
     */
    getAddr(): string
    /**
     * Gets the IDN ascii-encoded addr-spec.
     */
    getIdnAddr(): string
    /**
     * Set the mailbox address.
     * @param addr contact's email address
     */
    setAddr(addr: string): void

    // Class property signals of GMime-3.0.GMime.InternetAddressMailbox

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An RFC 2822 Mailbox address.
 * @class 
 */
export class InternetAddressMailbox extends InternetAddress {

    // Own properties of GMime-3.0.GMime.InternetAddressMailbox

    static name: string

    // Constructors of GMime-3.0.GMime.InternetAddressMailbox

    constructor(config?: InternetAddressMailbox.ConstructorProperties) 
    /**
     * Creates a new #InternetAddress object with the specified `name` and
     * `addr`.
     * @constructor 
     * @param name person's name
     * @param addr person's address
     */
    constructor(name: string, addr: string) 
    /**
     * Creates a new #InternetAddress object with the specified `name` and
     * `addr`.
     * @constructor 
     * @param name person's name
     * @param addr person's address
     */
    static new(name: string, addr: string): InternetAddressMailbox
    _init(config?: InternetAddressMailbox.ConstructorProperties): void
}

export module Message {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Message {

    // Own fields of GMime-3.0.GMime.Message

    /**
     * parent #GMimeObject
     * @field 
     */
    parentObject: any
    /**
     * a table of address lists
     * @field 
     */
    addrlists: InternetAddressList
    /**
     * toplevel MIME part
     * @field 
     */
    mimePart: Object
    /**
     * Message-Id string
     * @field 
     */
    messageId: string
    /**
     * Date value
     * @field 
     */
    date: GLib.DateTime
    /**
     * Subject string
     * @field 
     */
    subject: string

    // Owm methods of GMime-3.0.GMime.Message

    /**
     * Add a mailbox of a chosen type to the MIME message.
     * 
     * Note: The `name` (and `addr)` strings should be in UTF-8.
     * @param type A #GMimeAddressType
     * @param name The name of the mailbox (or %NULL)
     * @param addr The address of the mailbox
     */
    addMailbox(type: AddressType, name: string, addr: string): void
    /**
     * Recursively calls `callback` on each of the mime parts in the mime message.
     * @param callback function to call on each of the mime parts   contained by the mime message
     */
    foreach(callback: ObjectForeachFunc): void
    /**
     * Gets a list of addresses of the specified `type` from the `message`.
     * @param type A #GMimeAddressType
     */
    getAddresses(type: AddressType): InternetAddressList
    /**
     * Gets the complete list of recipients for `message`.
     */
    getAllRecipients(): InternetAddressList
    /**
     * Creates a new #GMimeAutocryptHeaderList of relevant headers of the
     * given type based on the recipient(s) of an e-mail message.
     * 
     * Returns the same object as
     * #g_mime_message_get_autocrypt_gossip_headers_with_inner_part , but
     * handles decryption and cleanup automatically.
     * 
     * `flags` and `session_key` are passed through to
     * #g_mime_multipart_encrypted_decrypt, as needed.
     * 
     * If the message is not actually an encrypted message, returns %NULL:
     * it should be ignored for purposes of evaluating gossip.
     * 
     * If decryption fails, returns %NULL.  In this case, an exception
     * will be set on `err` to provide information about the decryption
     * failure.
     * @param now a #GDateTime object, or %NULL
     * @param flags a #GMimeDecryptFlags, to be used during decryption
     * @param sessionKey session key to use or %NULL
     */
    getAutocryptGossipHeaders(now: GLib.DateTime, flags: DecryptFlags, sessionKey: string): AutocryptHeaderList | null
    /**
     * Creates a new #GMimeAutocryptHeaderList of relevant headers of the
     * given type based on the recipient(s) of an e-mail message.
     * 
     * You must pass the decrypted inner part of the message to this
     * function, since Autocrypt-Gossip headers are only stored within the
     * encrypted layer.
     * 
     * If you don't already have the decrypted inner part available to
     * you, you probably want to use
     * #g_mime_message_get_autocrypt_gossip_headers instead.
     * 
     * Each header in the returned list will:
     * 
     *  - have a valid address
     *  - be of the type requested
     *  - be complete
     * 
     * If no Autocrypt header is found for a recipient, no
     * #GMimeAutocryptHeader will be in the list associated with that e-mail address.
     * 
     * Note that the following types of Autocrypt headers will not be
     * returned by this function:
     * 
     *  - headers of an unrequested type
     *  - headers that do not match an address in "From:"
     *  - unparseable headers
     *  - headers with unknown critical attributes
     *  - duplicate valid headers for a given address
     * 
     * On error (e.g. if this version of GMime cannot handle the requested
     * Autocrypt type, or if a parameter is missing or malformed), returns
     * %NULL
     * 
     * The returned Autocrypt headers will have their effective_date set
     * to the earliest of either:
     * 
     * - the Date: header of the message or
     * - `now` (or the current time, if `now` is %NULL)
     * @param now a #GDateTime object, or %NULL
     * @param innerPart a #GMimeObject which is the cleartext part of the inner message
     */
    getAutocryptGossipHeadersFromInnerPart(now: GLib.DateTime, innerPart: Object): AutocryptHeaderList | null
    /**
     * Creates a new #GMimeAutocryptHeader based on the relevant Autocrypt
     * header associated with the sender of an e-mail message.
     * 
     * If the message has no sender in the From: field, or has more than
     * one sender, then this function will return %NULL.  Autocrypt should
     * ignore the message entirely.
     * 
     * If there is one sender, but no single Autocrypt header is found
     * that matches that e-mail address, a #GMimeAutocryptHeader will be
     * returned for the sender, but it will be incomplete (see
     * #g_mime_autocrypt_header_is_complete).
     * 
     * Note that the following types of Autocrypt headers will not be
     * returned by this function:
     * 
     *  - headers that do not match an address in "From:"
     *  - unparseable headers
     *  - headers with unknown critical attributes
     *  - duplicate valid headers for the sender's address
     * 
     * The returned Autocrypt header will have its effective_date set to
     * the earliest of either:
     * 
     * - the Date: header of the message or
     * - `now` (or the current time, if `now` is %NULL)
     * @param now a #GDateTime object, or %NULL
     */
    getAutocryptHeader(now: GLib.DateTime): AutocryptHeader | null
    /**
     * Gets combined list of parsed addresses in the Bcc header(s).
     */
    getBcc(): InternetAddressList
    /**
     * Attempts to identify the MIME part containing the body of the
     * message.
     */
    getBody(): Object | null
    /**
     * Gets combined list of parsed addresses in the Cc header(s).
     */
    getCc(): InternetAddressList
    /**
     * Gets the parsed date and time value from the Date header.
     */
    getDate(): GLib.DateTime | null
    /**
     * Gets the parsed list of addresses in the From header.
     */
    getFrom(): InternetAddressList
    /**
     * Gets the Message-Id header of `message`.
     */
    getMessageId(): string | null
    /**
     * Gets the toplevel MIME part contained within `message`.
     */
    getMimePart(): Object | null
    /**
     * Gets the parsed list of addresses in the Reply-To header.
     */
    getReplyTo(): InternetAddressList
    /**
     * Gets the parsed list of addresses in the Sender header.
     */
    getSender(): InternetAddressList
    /**
     * Gets the subject of the `message`.
     */
    getSubject(): string | null
    /**
     * Gets combined list of parsed addresses in the To header(s).
     */
    getTo(): InternetAddressList
    /**
     * Splits `message` into an array of #GMimeMessage objects each
     * containing a single #GMimeMessagePartial object containing
     * `max_size` bytes or fewer. `nparts` is set to the number of
     * #GMimeMessagePartial objects created.
     * @param maxSize max size
     */
    partialSplitMessage(maxSize: number): [ /* returnType */ Message | null, /* nparts */ number ]
    /**
     * Sets the Date header on a MIME Message.
     * @param date a date to be used in the Date header
     */
    setDate(date: GLib.DateTime): void
    /**
     * Set the Message-Id on a message.
     * @param messageId message-id (addr-spec portion)
     */
    setMessageId(messageId: string): void
    /**
     * Set the root-level MIME part of the message.
     * @param mimePart The root-level MIME Part
     */
    setMimePart(mimePart: Object): void
    /**
     * Set the subject of a `message`.
     * 
     * Note: The `subject` string should be in UTF-8.
     * @param subject Subject string
     * @param charset The charset to use for encoding the subject or %NULL to use the default
     */
    setSubject(subject: string, charset: string): void

    // Class property signals of GMime-3.0.GMime.Message

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A MIME Message object.
 * @class 
 */
export class Message extends Object {

    // Own properties of GMime-3.0.GMime.Message

    static name: string

    // Constructors of GMime-3.0.GMime.Message

    constructor(config?: Message.ConstructorProperties) 
    /**
     * If `pretty_headers` is %TRUE, then the standard rfc822 headers are
     * initialized so as to put headers in a nice friendly order. This is
     * strictly a cosmetic thing, so if you are unsure, it is safe to say
     * no (%FALSE).
     * @constructor 
     * @param prettyHeaders make pretty headers
     */
    constructor(prettyHeaders: boolean) 
    /**
     * If `pretty_headers` is %TRUE, then the standard rfc822 headers are
     * initialized so as to put headers in a nice friendly order. This is
     * strictly a cosmetic thing, so if you are unsure, it is safe to say
     * no (%FALSE).
     * @constructor 
     * @param prettyHeaders make pretty headers
     */
    static new(prettyHeaders: boolean): Message

    // Overloads of new

    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    _init(config?: Message.ConstructorProperties): void
}

export module MessagePart {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface MessagePart {

    // Own fields of GMime-3.0.GMime.MessagePart

    /**
     * parent #GMimeObject
     * @field 
     */
    parentObject: any
    /**
     * child #GMimeMessage
     * @field 
     */
    message: Message

    // Owm methods of GMime-3.0.GMime.MessagePart

    /**
     * Gets the message object on the message part object `part`.
     */
    getMessage(): Message
    /**
     * Sets the `message` object on the message part object `part`.
     * @param message message
     */
    setMessage(message: Message): void

    // Class property signals of GMime-3.0.GMime.MessagePart

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A message/rfc822 or message/news MIME part.
 * @class 
 */
export class MessagePart extends Object {

    // Own properties of GMime-3.0.GMime.MessagePart

    static name: string

    // Constructors of GMime-3.0.GMime.MessagePart

    constructor(config?: MessagePart.ConstructorProperties) 
    /**
     * Creates a new MIME message part object with a default content-type
     * of message/`subtype`.
     * @constructor 
     * @param subtype message subtype or %NULL for "rfc822"
     */
    constructor(subtype: string) 
    /**
     * Creates a new MIME message part object with a default content-type
     * of message/`subtype`.
     * @constructor 
     * @param subtype message subtype or %NULL for "rfc822"
     */
    static new(subtype: string): MessagePart

    // Overloads of new

    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    /**
     * Creates a new MIME message part object with a default content-type
     * of message/`subtype` containing `message`.
     * @constructor 
     * @param subtype message subtype or %NULL for "rfc822"
     * @param message message
     */
    static newWithMessage(subtype: string, message: Message): MessagePart
    _init(config?: MessagePart.ConstructorProperties): void
}

export module MessagePartial {

    // Constructor properties interface

    export interface ConstructorProperties extends Part.ConstructorProperties {
    }

}

export interface MessagePartial {

    // Own fields of GMime-3.0.GMime.MessagePartial

    /**
     * parent #GMimePart object
     * @field 
     */
    parentObject: any
    /**
     * the part number
     * @field 
     */
    number: number
    /**
     * the total number of message/partials that make up the whole message/rfc822
     * @field 
     */
    total: number
    /**
     * message/partial id
     * @field 
     */
    id: string

    // Owm methods of GMime-3.0.GMime.MessagePartial

    /**
     * Gets the message/partial id parameter value.
     */
    getId(): string
    /**
     * Gets the message/partial part number.
     */
    getNumber(): number
    /**
     * Gets the total number of message/partial parts needed to
     * reconstruct the original message.
     */
    getTotal(): number

    // Class property signals of GMime-3.0.GMime.MessagePartial

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A message/partial MIME part.
 * @class 
 */
export class MessagePartial extends Part {

    // Own properties of GMime-3.0.GMime.MessagePartial

    static name: string

    // Constructors of GMime-3.0.GMime.MessagePartial

    constructor(config?: MessagePartial.ConstructorProperties) 
    /**
     * Creates a new MIME message/partial object.
     * @constructor 
     * @param id message/partial part id
     * @param number message/partial part number
     * @param total total number of message/partial parts
     */
    constructor(id: string, number: number, total: number) 
    /**
     * Creates a new MIME message/partial object.
     * @constructor 
     * @param id message/partial part id
     * @param number message/partial part number
     * @param total total number of message/partial parts
     */
    static new(id: string, number: number, total: number): MessagePartial

    // Overloads of new

    /**
     * Creates a new MIME Part object with a default content-type of
     * application/octet-stream.
     * @constructor 
     */
    static new(): Part
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    _init(config?: MessagePartial.ConstructorProperties): void
    /**
     * Reconstructs the GMimeMessage from the given message/partial parts
     * in `partials`.
     * @param partials an array of message/partial mime parts
     * @param num the number of elements in `partials`
     */
    static reconstructMessage(partials: MessagePartial, num: number): Message
}

export module Multipart {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Multipart {

    // Own fields of GMime-3.0.GMime.Multipart

    /**
     * parent #GMimeObject
     * @field 
     */
    parentObject: any
    /**
     * array of MIME sub-parts
     * @field 
     */
    children: object[]
    /**
     * MIME boundary
     * @field 
     */
    boundary: string
    /**
     * multipart prologue
     * @field 
     */
    prologue: string
    /**
     * multipart epilogue
     * @field 
     */
    epilogue: string

    // Owm methods of GMime-3.0.GMime.Multipart

    // Has conflict: add(part: Object): void
    // Has conflict: clear(): void
    // Has conflict: contains(part: Object): boolean
    /**
     * Recursively calls `callback` on each of `multipart'`s subparts.
     * @param callback function to call for each of `multipart'`s   subparts.
     */
    foreach(callback: ObjectForeachFunc): void
    // Has conflict: getBoundary(): string
    // Has conflict: getCount(): number
    /**
     * Gets the epilogue on the multipart.
     */
    getEpilogue(): string
    // Has conflict: getPart(index: number): Object
    /**
     * Gets the prologue on the multipart.
     */
    getPrologue(): string
    /**
     * Gets the mime part with the content-id `content_id` from the
     * multipart `multipart`.
     * @param contentId the content id of the part to look for
     */
    getSubpartFromContentId(contentId: string): Object
    // Has conflict: indexOf(part: Object): number
    // Has conflict: insert(index: number, part: Object): void
    // Has conflict: remove(part: Object): boolean
    // Has conflict: removeAt(index: number): Object
    /**
     * Replaces the part at the specified `index` within `multipart` with
     * `replacement`.
     * @param index the 0-based index of the part to replace
     * @param replacement a #GMimeObject to use as the replacement
     */
    replace(index: number, replacement: Object): Object
    // Has conflict: setBoundary(boundary: string): void
    /**
     * Sets the epilogue on the multipart.
     * @param epilogue epilogue
     */
    setEpilogue(epilogue: string): void
    /**
     * Sets the prologue on the multipart.
     * @param prologue prologue
     */
    setPrologue(prologue: string): void

    // Own virtual methods of GMime-3.0.GMime.Multipart

    /**
     * Appends a mime part to `multipart`.
     * @virtual 
     * @param part a #GMimeObject
     */
    add(part: Object): void
    /**
     * Removes all subparts from `multipart`.
     * @virtual 
     */
    clear(): void
    /**
     * Checks if `part` is contained within `multipart`.
     * @virtual 
     * @param part a #GMimeObject
     */
    contains(part: Object): boolean
    /**
     * Gets the boundary on the multipart. If the internal boundary is
     * %NULL, then an auto-generated boundary will be set on the multipart
     * and returned.
     * @virtual 
     */
    getBoundary(): string
    /**
     * Gets the number of parts contained within `multipart`.
     * @virtual 
     */
    getCount(): number
    /**
     * Gets the part at the specified `index` within the multipart.
     * @virtual 
     * @param index the 0-based index of the part
     */
    getPart(index: number): Object
    /**
     * Gets the 0-based index of `part` within `multipart`.
     * @virtual 
     * @param part a #GMimeObject
     */
    indexOf(part: Object): number
    /**
     * Inserts `part` into `multipart` at the specified `index`.
     * @virtual 
     * @param index the 0-based index to insert the part
     * @param part a #GMimeObject
     */
    insert(index: number, part: Object): void
    /**
     * Removes the specified `part` from `multipart`.
     * @virtual 
     * @param part a #GMimeObject
     */
    remove(part: Object): boolean
    /**
     * Removes the part at the specified `index` from `multipart`.
     * @virtual 
     * @param index the 0-based index of the part to remove
     */
    removeAt(index: number): Object
    /**
     * Sets `boundary` as the boundary on the multipart. If `boundary` is
     * %NULL, then a boundary will be auto-generated for you.
     * @virtual 
     * @param boundary boundary or %NULL to autogenerate one
     */
    setBoundary(boundary: string): void

    // Class property signals of GMime-3.0.GMime.Multipart

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A base MIME multipart object.
 * @class 
 */
export class Multipart extends Object {

    // Own properties of GMime-3.0.GMime.Multipart

    static name: string

    // Constructors of GMime-3.0.GMime.Multipart

    constructor(config?: Multipart.ConstructorProperties) 
    /**
     * Creates a new MIME multipart object with a default content-type of
     * multipart/mixed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new MIME multipart object with a default content-type of
     * multipart/mixed.
     * @constructor 
     */
    static new(): Multipart

    // Overloads of new

    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    /**
     * Creates a new MIME multipart object with a content-type of
     * multipart/`subtype`.
     * @constructor 
     * @param subtype content-type subtype
     */
    static newWithSubtype(subtype: string): Multipart
    _init(config?: Multipart.ConstructorProperties): void
}

export module MultipartEncrypted {

    // Constructor properties interface

    export interface ConstructorProperties extends Multipart.ConstructorProperties {
    }

}

export interface MultipartEncrypted {

    // Own fields of GMime-3.0.GMime.MultipartEncrypted

    /**
     * parent #GMimeMultipart
     * @field 
     */
    parentObject: any

    // Owm methods of GMime-3.0.GMime.MultipartEncrypted

    /**
     * Attempts to decrypt the encrypted MIME part contained within the
     * multipart/encrypted object `encrypted`.
     * 
     * When non-%NULL, `session_key` should be a %NULL-terminated string,
     * such as the one returned by g_mime_decrypt_result_get_session_key()
     * from a previous decryption. If the `session_key` is not valid, decryption
     * will fail.
     * 
     * If `result` is non-%NULL, then on a successful decrypt operation, it will be
     * updated to point to a newly-allocated #GMimeDecryptResult with signature
     * status information as well as a list of recipients that the part was
     * encrypted to.
     * @param flags a #GMimeDecryptFlags
     * @param sessionKey session key to use or %NULL
     */
    decrypt(flags: DecryptFlags, sessionKey: string): [ /* returnType */ Object | null, /* result */ DecryptResult ]

    // Class property signals of GMime-3.0.GMime.MultipartEncrypted

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A multipart/encrypted MIME part.
 * @class 
 */
export class MultipartEncrypted extends Multipart {

    // Own properties of GMime-3.0.GMime.MultipartEncrypted

    static name: string

    // Constructors of GMime-3.0.GMime.MultipartEncrypted

    constructor(config?: MultipartEncrypted.ConstructorProperties) 
    /**
     * Creates a new MIME multipart/encrypted object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new MIME multipart/encrypted object.
     * @constructor 
     */
    static new(): MultipartEncrypted

    // Overloads of new

    /**
     * Creates a new MIME multipart object with a default content-type of
     * multipart/mixed.
     * @constructor 
     */
    static new(): Multipart
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    _init(config?: MultipartEncrypted.ConstructorProperties): void
    /**
     * Attempts to encrypt (and conditionally sign) the `entity` MIME part
     * to the public keys of `recipients` using the `ctx` encryption
     * context. If successful, a new multipart/encrypted object is returned.
     * @param ctx a #GMimeCryptoContext
     * @param entity MIME part to encrypt
     * @param sign %TRUE if the content should also be signed or %FALSE otherwise
     * @param userid user id to use for signing (only used if `sign` is %TRUE)
     * @param flags a #GMimeEncryptFlags
     * @param recipients an array of recipients to encrypt to
     */
    static encrypt(ctx: CryptoContext, entity: Object, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): MultipartEncrypted | null
}

export module MultipartSigned {

    // Constructor properties interface

    export interface ConstructorProperties extends Multipart.ConstructorProperties {
    }

}

export interface MultipartSigned {

    // Own fields of GMime-3.0.GMime.MultipartSigned

    /**
     * parent #GMimeMultipart
     * @field 
     */
    parentObject: any

    // Owm methods of GMime-3.0.GMime.MultipartSigned

    /**
     * Attempts to verify the signed MIME part contained within the
     * multipart/signed object `mps`.
     * @param flags a #GMimeVerifyFlags
     */
    verify(flags: VerifyFlags): SignatureList | null

    // Class property signals of GMime-3.0.GMime.MultipartSigned

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A multipart/signed MIME part.
 * @class 
 */
export class MultipartSigned extends Multipart {

    // Own properties of GMime-3.0.GMime.MultipartSigned

    static name: string

    // Constructors of GMime-3.0.GMime.MultipartSigned

    constructor(config?: MultipartSigned.ConstructorProperties) 
    /**
     * Creates a new MIME multipart/signed object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new MIME multipart/signed object.
     * @constructor 
     */
    static new(): MultipartSigned

    // Overloads of new

    /**
     * Creates a new MIME multipart object with a default content-type of
     * multipart/mixed.
     * @constructor 
     */
    static new(): Multipart
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    _init(config?: MultipartSigned.ConstructorProperties): void
    /**
     * Attempts to sign the `content` MIME part with `userid'`s private key
     * using the `ctx` signing context. If successful, a new multipart/signed
     * object is returned.
     * @param ctx a #GMimeCryptoContext
     * @param entity MIME part to sign
     * @param userid user id to sign with
     */
    static sign(ctx: CryptoContext, entity: Object, userid: string): MultipartSigned | null
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Object {

    // Own fields of GMime-3.0.GMime.Object

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * a #GMimeContentDisposition
     * @field 
     */
    disposition: ContentDisposition
    /**
     * a #GMimeContentType
     * @field 
     */
    contentType: ContentType
    /**
     * a #GMimeHeaderList
     * @field 
     */
    headers: HeaderList
    /**
     * a Content-Id
     * @field 
     */
    contentId: string

    // Owm methods of GMime-3.0.GMime.Object

    /**
     * Appends a new header to the header list.
     * @param header header name
     * @param value header value
     * @param charset a charset
     */
    appendHeader(header: string, value: string, charset: string): void
    // Has conflict: encode(constraint: EncodingConstraint): void
    /**
     * Gets the #GMimeContentDisposition for the specified MIME object.
     */
    getContentDisposition(): ContentDisposition
    /**
     * Gets the value of the Content-Disposition parameter specified by
     * `name,` or %NULL if the parameter does not exist.
     * @param name parameter name
     */
    getContentDispositionParameter(name: string): string
    /**
     * Gets the Content-Id of the MIME object or NULL if one is not set.
     */
    getContentId(): string
    /**
     * Gets the #GMimeContentType object for the given MIME object or
     * %NULL on fail.
     */
    getContentType(): ContentType
    /**
     * Gets the value of the content-type param `name` set on the MIME part
     * `object`.
     * @param name param name
     */
    getContentTypeParameter(name: string): string
    /**
     * Gets the MIME object's disposition if set or %NULL otherwise.
     */
    getDisposition(): string
    /**
     * Gets the value of the first header with the specified name.
     * @param header header name
     */
    getHeader(header: string): string
    /**
     * Get the header list for `object`.
     */
    getHeaderList(): HeaderList
    // Has conflict: getHeaders(options: FormatOptions | null): string
    /**
     * Prepends a new header to the header list.
     * @param header header name
     * @param value header value
     * @param charset a charset
     */
    prependHeader(header: string, value: string, charset: string): void
    /**
     * Removed the specified header if it exists.
     * @param header header name
     */
    removeHeader(header: string): boolean
    /**
     * Set the content disposition for the specified mime part and then
     * serializes it to the Content-Disposition header field.
     * @param disposition a #GMimeContentDisposition object
     */
    setContentDisposition(disposition: ContentDisposition): void
    /**
     * Add a content-disposition parameter to the specified mime part.
     * 
     * Note: The `name` string should be in US-ASCII while the `value`
     * string should be in UTF-8.
     * @param name parameter name
     * @param value parameter value
     */
    setContentDispositionParameter(name: string, value: string): void
    /**
     * Sets the Content-Id of the MIME object.
     * @param contentId content-id (addr-spec portion)
     */
    setContentId(contentId: string): void
    // Has conflict: setContentType(contentType: ContentType): void
    /**
     * Sets the content-type param `name` to the value `value`.
     * 
     * Note: The `name` string should be in US-ASCII while the `value`
     * string should be in UTF-8.
     * @param name param name
     * @param value param value
     */
    setContentTypeParameter(name: string, value: string): void
    /**
     * Sets the disposition to `disposition` which may be one of
     * #GMIME_DISPOSITION_ATTACHMENT or #GMIME_DISPOSITION_INLINE or, by
     * your choice, any other string which would indicate how the MIME
     * part should be displayed by the MUA.
     * @param disposition disposition ("attachment" or "inline")
     */
    setDisposition(disposition: string): void
    /**
     * Sets a header to the specified value.
     * @param header header name
     * @param value header value
     * @param charset a charset
     */
    setHeader(header: string, value: string, charset: string): void
    /**
     * Allocates a string buffer containing the contents of `object`.
     * @param options a #GMimeFormatOptions or %NULL
     */
    toString(options: FormatOptions | null): string
    /**
     * Write only the content of the MIME object to `stream`.
     * @param options a #GMimeFormatOptions or %NULL
     * @param stream stream
     */
    writeContentToStream(options: FormatOptions | null, stream: Stream): number
    // Has conflict: writeToStream(options: FormatOptions | null, stream: Stream): number

    // Own virtual methods of GMime-3.0.GMime.Object

    /**
     * Calculates and sets the most efficient Content-Transfer-Encoding
     * for this #GMimeObject and all child parts based on the `constraint`
     * provided.
     * @virtual 
     * @param constraint a #GMimeEncodingConstraint
     */
    encode(constraint: EncodingConstraint): void
    /**
     * Allocates a string buffer containing all of the MIME object's raw
     * headers.
     * @virtual 
     * @param options a #GMimeFormatOptions or %NULL
     */
    getHeaders(options: FormatOptions | null): string
    headerAdded(header: Header): void
    headerChanged(header: Header): void
    headerRemoved(header: Header): void
    headersCleared(): void
    /**
     * Sets the content-type for the specified MIME object and then
     * serializes it to the Content-Type header field.
     * @virtual 
     * @param contentType a #GMimeContentType object
     */
    setContentType(contentType: ContentType): void
    writeToStream(options: FormatOptions, contentOnly: boolean, stream: Stream): number

    // Class property signals of GMime-3.0.GMime.Object

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Base class for all MIME parts.
 * @class 
 */
export class Object extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Object

    static name: string

    // Constructors of GMime-3.0.GMime.Object

    constructor(config?: Object.ConstructorProperties) 
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    constructor(options: ParserOptions | null, contentType: ContentType) 
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of type `type/``subtype`. If no class
     * has been registered to handle that type, it looks for a registered
     * class that can handle `type`. If that also fails, then it will use
     * the generic part class, #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param type mime type
     * @param subtype mime subtype
     */
    static newType(options: ParserOptions | null, type: string, subtype: string): Object
    _init(config?: Object.ConstructorProperties): void
    /**
     * Registers the object type `object_type` for use with the
     * g_mime_object_new_type() convenience function.
     * 
     * Note: You may use the wildcard "*" to match any type and/or
     * subtype.
     * @param type mime type
     * @param subtype mime subtype
     * @param objectType object type
     */
    static registerType(type: string, subtype: string, objectType: GObject.GType): void
    static typeRegistryInit(): void
    static typeRegistryShutdown(): void
}

export module Param {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Param {

    // Own fields of GMime-3.0.GMime.Param

    parentObject: GObject.Object
    /**
     * The encoding method used for the parameter value.
     * @field 
     */
    method: ParamEncodingMethod
    /**
     * The charset to use when encoding the parameter value.
     * @field 
     */
    charset: string
    /**
     * the language specifier to use when encoding the value.
     * @field 
     */
    lang: string
    /**
     * The parameter name.
     * @field 
     */
    name: string
    /**
     * The parameter value.
     * @field 
     */
    value: string

    // Owm methods of GMime-3.0.GMime.Param

    /**
     * Gets the charset used for encoding the parameter.
     */
    getCharset(): string
    /**
     * Gets the encoding method used for encoding the parameter.
     */
    getEncodingMethod(): ParamEncodingMethod
    /**
     * Gets the language specifier used for encoding the parameter.
     */
    getLang(): string
    /**
     * Gets the name of the parameter.
     */
    getName(): string
    /**
     * Gets the value of the parameter.
     */
    getValue(): string
    /**
     * Sets the parameter charset used for encoding the value.
     * @param charset the charset or %NULL to use the default
     */
    setCharset(charset: string): void
    /**
     * Sets the encoding method used for encoding the value.
     * @param method a #GMimeParamEncodingMethod
     */
    setEncodingMethod(method: ParamEncodingMethod): void
    /**
     * Sets the parameter language specifier used for encoding the value.
     * @param lang the language specifier
     */
    setLang(lang: string): void
    /**
     * Sets the parameter value to `value`.
     * @param value the new parameter value
     */
    setValue(value: string): void

    // Class property signals of GMime-3.0.GMime.Param

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A parameter name/value pair as used in the Content-Type and Content-Disposition headers.
 * @class 
 */
export class Param extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Param

    static name: string

    // Constructors of GMime-3.0.GMime.Param

    constructor(config?: Param.ConstructorProperties) 
    _init(config?: Param.ConstructorProperties): void
}

export module ParamList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ParamList {

    // Owm methods of GMime-3.0.GMime.ParamList

    /**
     * Clears the list of parameters.
     */
    clear(): void
    /**
     * Encodes the parameter list into `str,` folding lines if required.
     * @param options a #GMimeFormatOptions or %NULL
     * @param fold %TRUE if the parameter list should be folded; otherwise, %FALSE
     * @param str the output string buffer
     */
    encode(options: FormatOptions, fold: boolean, str: GLib.String): void
    /**
     * Gets the #GMimeParam with the given `name`.
     * @param name the name of the parameter
     */
    getParameter(name: string): Param
    /**
     * Gets the #GMimeParam at the specified `index`.
     * @param index the index of the requested parameter
     */
    getParameterAt(index: number): Param
    /**
     * Gets the length of the list.
     */
    length(): number
    /**
     * Removes a parameter from the #GMimeParamList.
     * @param name the name of the parameter
     */
    remove(name: string): boolean
    /**
     * Removes a #GMimeParam from the #GMimeParamList at the specified index.
     * @param index index of the param to remove
     */
    removeAt(index: number): boolean
    /**
     * Sets the specified parameter to `value`.
     * @param name The name of the parameter
     * @param value The parameter value
     */
    setParameter(name: string, value: string): void

    // Class property signals of GMime-3.0.GMime.ParamList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A list of Content-Type or Content-Disposition parameters.
 * @class 
 */
export class ParamList extends GObject.Object {

    // Own properties of GMime-3.0.GMime.ParamList

    static name: string

    // Constructors of GMime-3.0.GMime.ParamList

    constructor(config?: ParamList.ConstructorProperties) 
    /**
     * Creates a new Content-Type or Content-Disposition parameter list.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new Content-Type or Content-Disposition parameter list.
     * @constructor 
     */
    static new(): ParamList
    _init(config?: ParamList.ConstructorProperties): void
    /**
     * Parses the input string into a parameter list.
     * @param options a #GMimeParserOptions or %NULL
     * @param str a string to parse
     */
    static parse(options: ParserOptions, str: string): ParamList
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Parser {

    // Own fields of GMime-3.0.GMime.Parser

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * private parser state
     * @field 
     */
    priv: object

    // Owm methods of GMime-3.0.GMime.Parser

    /**
     * Constructs a MIME message from `parser`.
     * @param options a #GMimeParserOptions or %NULL
     */
    constructMessage(options: ParserOptions | null): Message | null
    /**
     * Constructs a MIME part from `parser`.
     * @param options a #GMimeParserOptions or %NULL
     */
    constructPart(options: ParserOptions | null): Object | null
    /**
     * Tests the end-of-stream indicator for `parser'`s internal stream.
     */
    eos(): boolean
    /**
     * Gets the format that the parser is set to parse.
     */
    getFormat(): Format
    /**
     * Gets the stream offset of the beginning of the headers of the most
     * recently parsed message.
     */
    getHeadersBegin(): number
    /**
     * Gets the stream offset of the end of the headers of the most
     * recently parsed message.
     */
    getHeadersEnd(): number
    /**
     * Gets the mbox-style From-line of the most recently parsed message
     * (gotten from g_mime_parser_construct_message()).
     */
    getMboxMarker(): string | null
    /**
     * Gets the offset of the most recently parsed mbox-style From-line
     * (gotten from g_mime_parser_construct_message()).
     */
    getMboxMarkerOffset(): number
    /**
     * Gets whether or not the underlying stream is persistent.
     */
    getPersistStream(): boolean
    /**
     * Gets whether or not `parser` is set to use Content-Length for
     * determining the offset of the end of the message.
     */
    getRespectContentLength(): boolean
    /**
     * Initializes `parser` to use `stream`.
     * 
     * WARNING: Initializing a parser with a stream is comparable to
     * selling your soul (`stream)` to the devil (`parser)`. You are
     * basically giving the parser complete control of the stream, this
     * means that you had better not touch the stream so long as the
     * parser is still using it. This means no reading, writing, seeking,
     * or resetting of the stream. Anything that will/could change the
     * current stream's offset is PROHIBITED.
     * 
     * It is also recommended that you not use g_mime_stream_tell()
     * because it will not necessarily give you the current `parser` offset
     * since `parser` handles its own internal read-ahead buffer. Instead,
     * it is recommended that you use g_mime_parser_tell() if you have a
     * reason to need the current offset of the `parser`.
     * @param stream raw message or part stream
     */
    initWithStream(stream: Stream): void
    /**
     * Sets the format that the parser should expect the stream to be in.
     * @param format a #GMimeFormat
     */
    setFormat(format: Format): void
    /**
     * Sets whether or not the `parser'`s underlying stream is persistent.
     * 
     * If `persist` is %TRUE, the `parser` will attempt to construct
     * messages/parts whose content will remain on disk rather than being
     * loaded into memory so as to reduce memory usage. This is the default.
     * 
     * If `persist` is %FALSE, the `parser` will always load message content
     * into memory.
     * 
     * Note: This attribute only serves as a hint to the `parser`. If the
     * underlying stream does not support seeking, then this attribute
     * will be ignored.
     * 
     * By default, this feature is enabled if the underlying stream is seekable.
     * @param persist persist attribute
     */
    setPersistStream(persist: boolean): void
    /**
     * Sets whether or not `parser` should respect Content-Length headers
     * when deciding where to look for the start of the next message. Only
     * used when the parser is also set to scan for From-lines.
     * 
     * Most notably useful when parsing broken Solaris mbox files (See
     * http://www.jwz.org/doc/content-length.html for details).
     * 
     * By default, this feature is disabled.
     * @param respectContentLength %TRUE if the parser should use Content-Length headers or %FALSE otherwise.
     */
    setRespectContentLength(respectContentLength: boolean): void
    /**
     * Gets the current stream offset from the parser's internal stream.
     */
    tell(): number

    // Class property signals of GMime-3.0.GMime.Parser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A MIME parser context.
 * @class 
 */
export class Parser extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Parser

    static name: string

    // Constructors of GMime-3.0.GMime.Parser

    constructor(config?: Parser.ConstructorProperties) 
    /**
     * Creates a new parser object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new parser object.
     * @constructor 
     */
    static new(): Parser
    /**
     * Creates a new parser object preset to parse `stream`.
     * @constructor 
     * @param stream raw message or part stream
     */
    static newWithStream(stream: Stream): Parser
    _init(config?: Parser.ConstructorProperties): void
}

export module Part {

    // Constructor properties interface

    export interface ConstructorProperties extends Object.ConstructorProperties {
    }

}

export interface Part {

    // Own fields of GMime-3.0.GMime.Part

    /**
     * parent #GMimeObject
     * @field 
     */
    parentObject: any
    /**
     * a #GMimeContentEncoding
     * @field 
     */
    encoding: ContentEncoding
    /**
     * a #GMimeOpenPGPData
     * @field 
     */
    openpgp: OpenPGPData
    /**
     * Content-Description string
     * @field 
     */
    contentDescription: string
    /**
     * Content-Location string
     * @field 
     */
    contentLocation: string
    /**
     * Content-MD5 string
     * @field 
     */
    contentMd5: string
    /**
     * a #GMimeDataWrapper representing the MIME part's content
     * @field 
     */
    content: DataWrapper

    // Owm methods of GMime-3.0.GMime.Part

    /**
     * Calculates the most efficient content encoding for the `mime_part`
     * given the `constraint`.
     * @param constraint a #GMimeEncodingConstraint
     */
    getBestContentEncoding(constraint: EncodingConstraint): ContentEncoding
    /**
     * Gets the internal data-wrapper of the specified mime part, or %NULL
     * on error.
     */
    getContent(): DataWrapper
    /**
     * Gets the value of the Content-Description for the specified mime
     * part if it exists or %NULL otherwise.
     */
    getContentDescription(): string
    /**
     * Gets the content encoding of the mime part.
     */
    getContentEncoding(): ContentEncoding
    /**
     * Gets the content-id of the specified mime part if it exists, or
     * %NULL otherwise.
     */
    getContentId(): string
    /**
     * Gets the value of the Content-Location header if it exists, or
     * %NULL otherwise.
     */
    getContentLocation(): string
    /**
     * Gets the md5sum contained in the Content-Md5 header of the
     * specified mime part if it exists, or %NULL otherwise.
     */
    getContentMd5(): string
    /**
     * Gets the filename of the specificed mime part, or %NULL if the
     * `mime_part` does not have the filename or name parameter set.
     */
    getFilename(): string
    /**
     * Gets whether or not (and what type) of OpenPGP data is contained
     * within the #GMimePart.
     */
    getOpenpgpData(): OpenPGPData
    /**
     * Determines whether or not the part is an attachment based on the
     * value of the Content-Disposition header.
     */
    isAttachment(): boolean
    /**
     * Decrypts the content of the `mime_part` and then replaces the content with
     * the new, decrypted, content.
     * @param flags a set of #GMimeDecryptFlags
     * @param sessionKey the session key to use or %NULL
     */
    openpgpDecrypt(flags: DecryptFlags, sessionKey: string | null): DecryptResult | null
    /**
     * Encrypts (and optionally signs) the content of the `mime_part` and then replaces
     * the content with the new, encrypted, content.
     * @param sign %TRUE if the content should also be signed; otherwise, %FALSE
     * @param userid the key id (or email address) to use when signing (assuming `sign` is %TRUE)
     * @param flags a set of #GMimeEncryptFlags
     * @param recipients an array of recipient key ids and/or email addresses
     */
    openpgpEncrypt(sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[]): boolean
    /**
     * Signs the content of the `mime_part` and then replaces the content with
     * the new, signed, content.
     * @param userid the key id (or email address) to use for signing
     */
    openpgpSign(userid: string): boolean
    /**
     * Verifies the OpenPGP signature of the `mime_part` and then replaces the content
     * with the original, raw, content.
     * @param flags a set of #GMimeVerifyFlags
     */
    openpgpVerify(flags: VerifyFlags): SignatureList | null
    // Has conflict: setContent(content: DataWrapper): void
    /**
     * Set the content description for the specified mime part.
     * @param description content description
     */
    setContentDescription(description: string): void
    /**
     * Set the content encoding for the specified mime part.
     * @param encoding a #GMimeContentEncoding
     */
    setContentEncoding(encoding: ContentEncoding): void
    /**
     * Set the content id for the specified mime part.
     * @param contentId content id
     */
    setContentId(contentId: string): void
    /**
     * Set the content location for the specified mime part.
     * @param contentLocation content location
     */
    setContentLocation(contentLocation: string): void
    /**
     * Set the content md5 for the specified mime part.
     * @param contentMd5 content md5 or %NULL to generate the md5 digest.
     */
    setContentMd5(contentMd5: string): void
    /**
     * Sets the "filename" parameter on the Content-Disposition and also sets the
     * "name" parameter on the Content-Type.
     * 
     * Note: The `filename` string should be in UTF-8.
     * @param filename the file name
     */
    setFilename(filename: string): void
    /**
     * Sets whether or not (and what type) of OpenPGP data is contained
     * within the #GMimePart.
     * @param data a #GMimeOpenPGPData
     */
    setOpenpgpData(data: OpenPGPData): void
    /**
     * Verify the content md5 for the specified mime part.
     */
    verifyContentMd5(): boolean

    // Own virtual methods of GMime-3.0.GMime.Part

    /**
     * Sets the content on the mime part.
     * @virtual 
     * @param content a #GMimeDataWrapper content object
     */
    setContent(content: DataWrapper): void

    // Class property signals of GMime-3.0.GMime.Part

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A leaf-node MIME part object.
 * @class 
 */
export class Part extends Object {

    // Own properties of GMime-3.0.GMime.Part

    static name: string

    // Constructors of GMime-3.0.GMime.Part

    constructor(config?: Part.ConstructorProperties) 
    /**
     * Creates a new MIME Part object with a default content-type of
     * application/octet-stream.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new MIME Part object with a default content-type of
     * application/octet-stream.
     * @constructor 
     */
    static new(): Part

    // Overloads of new

    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    /**
     * Creates a new MIME Part with a sepcified type.
     * @constructor 
     * @param type content-type string
     * @param subtype content-subtype string
     */
    static newWithType(type: string, subtype: string): Part
    _init(config?: Part.ConstructorProperties): void
}

export module Pkcs7Context {

    // Constructor properties interface

    export interface ConstructorProperties extends CryptoContext.ConstructorProperties {
    }

}

export interface Pkcs7Context {

    // Class property signals of GMime-3.0.GMime.Pkcs7Context

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A PKCS7 crypto context.
 * @class 
 */
export class Pkcs7Context extends CryptoContext {

    // Own properties of GMime-3.0.GMime.Pkcs7Context

    static name: string

    // Constructors of GMime-3.0.GMime.Pkcs7Context

    constructor(config?: Pkcs7Context.ConstructorProperties) 
    /**
     * Creates a new pkcs7 crypto context object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new pkcs7 crypto context object.
     * @constructor 
     */
    static new(): Pkcs7Context

    // Overloads of new

    /**
     * Creates a new crypto context for the specified `protocol`.
     * @constructor 
     * @param protocol the crypto protocol
     */
    static new(protocol: string): CryptoContext
    _init(config?: Pkcs7Context.ConstructorProperties): void
}

export module Signature {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Signature {

    // Own fields of GMime-3.0.GMime.Signature

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object
    /**
     * A bitfield of #GMimeSignatureStatus values.
     * @field 
     */
    status: SignatureStatus
    /**
     * The #GMimeCertificate used in the signature.
     * @field 
     */
    cert: Certificate
    /**
     * The creation date of the signature.
     * @field 
     */
    created: number
    /**
     * The expiration date of the signature.
     * @field 
     */
    expires: number

    // Owm methods of GMime-3.0.GMime.Signature

    /**
     * Get the signature's certificate.
     */
    getCertificate(): Certificate
    /**
     * Get the creation date of the signature.
     */
    getCreated(): number
    /**
     * Get the creation date of the signature in seconds since the UNIX
     * epoch, represented as a 64-bit signed integer.
     */
    getCreated64(): number
    /**
     * Get the expiration date of the signature. A value of %0 means the signature never expires.
     */
    getExpires(): number
    /**
     * Get the expiration date of the signature in seconds since the UNIX
     * epoch, represented as a 64-bit signed integer. A value of %0 means
     * the signature never expires.
     */
    getExpires64(): number
    /**
     * Get the signature status as a bitfield of #GMimeSignatureStatus flags.
     */
    getStatus(): SignatureStatus
    /**
     * Set the signature's certificate.
     * @param cert a #GMimeCertificate
     */
    setCertificate(cert: Certificate): void
    /**
     * Set the creation date of the signature.
     * @param created creation date
     */
    setCreated(created: number): void
    /**
     * Set the expiration date of the signature. A value of %0 means the signature never expires.
     * @param expires expiration date
     */
    setExpires(expires: number): void
    /**
     * Set the status on the signature.
     * @param status a #GMimeSignatureStatus
     */
    setStatus(status: SignatureStatus): void

    // Class property signals of GMime-3.0.GMime.Signature

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An object containing useful information about a signature.
 * @class 
 */
export class Signature extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Signature

    static name: string

    // Constructors of GMime-3.0.GMime.Signature

    constructor(config?: Signature.ConstructorProperties) 
    /**
     * Creates a new #GMimeSignature object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeSignature object.
     * @constructor 
     */
    static new(): Signature
    _init(config?: Signature.ConstructorProperties): void
}

export module SignatureList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SignatureList {

    // Own fields of GMime-3.0.GMime.SignatureList

    /**
     * parent #GObject
     * @field 
     */
    parentObject: GObject.Object

    // Owm methods of GMime-3.0.GMime.SignatureList

    /**
     * Adds a #GMimeSignature to the #GMimeSignatureList.
     * @param sig a #GMimeSignature
     */
    add(sig: Signature): number
    /**
     * Clears the list of addresses.
     */
    clear(): void
    /**
     * Checks whether or not the specified #GMimeSignature is contained within
     * the #GMimeSignatureList.
     * @param sig a #GMimeSignature
     */
    contains(sig: Signature): boolean
    /**
     * Gets the #GMimeSignature at the specified index.
     * @param index index of #GMimeSignature to get
     */
    getSignature(index: number): Signature
    /**
     * Gets the index of the specified #GMimeSignature inside the
     * #GMimeSignatureList.
     * @param sig a #GMimeSignature
     */
    indexOf(sig: Signature): number
    /**
     * Inserts a #GMimeSignature into the #GMimeSignatureList at the specified
     * index.
     * @param index index to insert at
     * @param sig a #GMimeSignature
     */
    insert(index: number, sig: Signature): void
    /**
     * Gets the length of the list.
     */
    length(): number
    /**
     * Removes a #GMimeSignature from the #GMimeSignatureList.
     * @param sig a #GMimeSignature
     */
    remove(sig: Signature): boolean
    /**
     * Removes a #GMimeSignature from the #GMimeSignatureList at the specified
     * index.
     * @param index index to remove
     */
    removeAt(index: number): boolean
    /**
     * Sets the #GMimeSignature at the specified index to `sig`.
     * @param index index of #GMimeSignature to set
     * @param sig a #GMimeSignature
     */
    setSignature(index: number, sig: Signature): void

    // Class property signals of GMime-3.0.GMime.SignatureList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A collection of #GMimeSignature objects.
 * @class 
 */
export class SignatureList extends GObject.Object {

    // Own properties of GMime-3.0.GMime.SignatureList

    static name: string

    // Constructors of GMime-3.0.GMime.SignatureList

    constructor(config?: SignatureList.ConstructorProperties) 
    /**
     * Creates a new #GMimeSignatureList.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeSignatureList.
     * @constructor 
     */
    static new(): SignatureList
    _init(config?: SignatureList.ConstructorProperties): void
}

export module Stream {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Stream {

    // Owm methods of GMime-3.0.GMime.Stream

    /**
     * Reads in at most one less than `max` characters from `stream` and
     * stores them into the buffer pointed to by `buf`. Reading stops after
     * an EOS or newline ('\n'). If a newline is read, it is stored into
     * the buffer. A '\0' is stored after the last character in the
     * buffer.
     * @param buf line buffer
     */
    bufferGets(buf: Uint8Array): number
    /**
     * Reads a single line into `buffer`.
     * @param buffer output buffer
     */
    bufferReadln(buffer: Uint8Array): void
    // Has conflict: close(): number
    /**
     * Initializes a new stream with bounds `start` and `end`.
     * @param start start boundary
     * @param end end boundary
     */
    construct(start: number, end: number): void
    // Has conflict: eos(): boolean
    // Has conflict: flush(): number
    // Has conflict: length(): number
    // Has conflict: read(buf: Uint8Array): number
    // Has conflict: reset(): number
    // Has conflict: seek(offset: number, whence: SeekWhence): number
    /**
     * Set the bounds on a stream.
     * @param start start boundary
     * @param end end boundary
     */
    setBounds(start: number, end: number): void
    // Has conflict: substream(start: number, end: number): Stream
    // Has conflict: tell(): number
    // Has conflict: write(buf: Uint8Array): number
    /**
     * Writes `string` to `stream`.
     * @param str string to write
     */
    writeString(str: string): number
    /**
     * Attempts to write the source stream to the destination stream.
     * @param dest destination stream
     */
    writeToStream(dest: Stream): number
    /**
     * Writes at most `count` blocks described by `vector` to `stream`.
     * @param vector a #GMimeStreamIOVector
     */
    writev(vector: StreamIOVector[]): number

    // Own virtual methods of GMime-3.0.GMime.Stream

    /**
     * Closes the stream.
     * @virtual 
     */
    close(): number
    /**
     * Tests the end-of-stream indicator for `stream`.
     * @virtual 
     */
    eos(): boolean
    /**
     * Sync's the stream to disk.
     * @virtual 
     */
    flush(): number
    /**
     * Gets the length of the stream.
     * @virtual 
     */
    length(): number
    /**
     * Attempts to read up to `len` bytes from `stream` into `buf`.
     * @virtual 
     * @param buf buffer
     */
    read(buf: Uint8Array): number
    /**
     * Resets the stream.
     * @virtual 
     */
    reset(): number
    /**
     * Repositions the offset of the stream `stream` to
     * the argument `offset` according to the
     * directive `whence` as follows:
     * 
     *     #GMIME_STREAM_SEEK_SET: Seek `offset` bytes relative to
     *     the beginning (bound_start) of the stream.
     * 
     *     #GMIME_STREAM_SEEK_CUR: Seek `offset` bytes relative to the
     *     current offset of the stream.
     * 
     *     #GMIME_STREAM_SEEK_END: Seek `offset` bytes relative to the
     *     end of the stream (bound_end if non-negative).
     * @virtual 
     * @param offset positional offset
     * @param whence seek directive
     */
    seek(offset: number, whence: SeekWhence): number
    /**
     * Creates a new substream of `stream` with bounds `start` and `end`.
     * @virtual 
     * @param start start boundary
     * @param end end boundary
     */
    substream(start: number, end: number): Stream
    /**
     * Gets the current offset within the stream.
     * @virtual 
     */
    tell(): number
    /**
     * Attempts to write up to `len` bytes of `buf` to `stream`.
     * @virtual 
     * @param buf buffer
     */
    write(buf: Uint8Array): number

    // Class property signals of GMime-3.0.GMime.Stream

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Abstract I/O stream class.
 * @class 
 */
export class Stream extends GObject.Object {

    // Own properties of GMime-3.0.GMime.Stream

    static name: string

    // Constructors of GMime-3.0.GMime.Stream

    constructor(config?: Stream.ConstructorProperties) 
    _init(config?: Stream.ConstructorProperties): void
}

export module StreamBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamBuffer {

    // Own fields of GMime-3.0.GMime.StreamBuffer

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * buffering mode
     * @field 
     */
    mode: StreamBufferMode
    /**
     * source stream
     * @field 
     */
    source: Stream
    /**
     * internal buffer
     * @field 
     */
    buffer: string
    /**
     * current position in the buffer
     * @field 
     */
    bufptr: string
    /**
     * end of the buffer
     * @field 
     */
    bufend: string
    /**
     * buffer length
     * @field 
     */
    buflen: number

    // Class property signals of GMime-3.0.GMime.StreamBuffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A buffered stream wrapper around any #GMimeStream object.
 * @class 
 */
export class StreamBuffer extends Stream {

    // Own properties of GMime-3.0.GMime.StreamBuffer

    static name: string

    // Constructors of GMime-3.0.GMime.StreamBuffer

    constructor(config?: StreamBuffer.ConstructorProperties) 
    /**
     * Creates a new GMimeStreamBuffer object.
     * @constructor 
     * @param source source stream
     * @param mode buffering mode
     */
    constructor(source: Stream, mode: StreamBufferMode) 
    /**
     * Creates a new GMimeStreamBuffer object.
     * @constructor 
     * @param source source stream
     * @param mode buffering mode
     */
    static new(source: Stream, mode: StreamBufferMode): StreamBuffer
    _init(config?: StreamBuffer.ConstructorProperties): void
}

export module StreamCat {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamCat {

    // Own fields of GMime-3.0.GMime.StreamCat

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * list of sources
     * @field 
     */
    sources: object
    /**
     * current source
     * @field 
     */
    current: object

    // Owm methods of GMime-3.0.GMime.StreamCat

    /**
     * Adds the `source` stream to the `cat`.
     * @param source a source stream
     */
    addSource(source: Stream): number

    // Class property signals of GMime-3.0.GMime.StreamCat

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A concatenation of other #GMimeStream objects.
 * @class 
 */
export class StreamCat extends Stream {

    // Own properties of GMime-3.0.GMime.StreamCat

    static name: string

    // Constructors of GMime-3.0.GMime.StreamCat

    constructor(config?: StreamCat.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamCat object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeStreamCat object.
     * @constructor 
     */
    static new(): StreamCat
    _init(config?: StreamCat.ConstructorProperties): void
}

export module StreamFile {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamFile {

    // Own fields of GMime-3.0.GMime.StreamFile

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * %TRUE if this stream owns `fd`
     * @field 
     */
    owner: boolean
    /**
     * standard-c FILE pointer
     * @field 
     */
    fp: object

    // Owm methods of GMime-3.0.GMime.StreamFile

    /**
     * Gets whether or not `stream` owns the backend FILE pointer.
     */
    getOwner(): boolean
    /**
     * Sets whether or not `stream` owns the backend FILE pointer.
     * 
     * Note: `owner` should be %TRUE if the stream should fclose() the
     * backend FILE pointer when destroyed or %FALSE otherwise.
     * @param owner %TRUE if this stream should own the FILE pointer or %FALSE otherwise
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamFile

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GMimeStream wrapper around standard-c FILE pointers.
 * @class 
 */
export class StreamFile extends Stream {

    // Own properties of GMime-3.0.GMime.StreamFile

    static name: string

    // Constructors of GMime-3.0.GMime.StreamFile

    constructor(config?: StreamFile.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamFile object around `fp`.
     * 
     * Note: The created #GMimeStreamFile object will own the FILE pointer
     * passed in.
     * @constructor 
     * @param fp a FILE pointer
     */
    constructor(fp: object | null) 
    /**
     * Creates a new #GMimeStreamFile object around `fp`.
     * 
     * Note: The created #GMimeStreamFile object will own the FILE pointer
     * passed in.
     * @constructor 
     * @param fp a FILE pointer
     */
    static new(fp: object | null): StreamFile
    /**
     * Creates a new #GMimeStreamFile object around `fp` with bounds `start`
     * and `end`.
     * 
     * Note: The created #GMimeStreamFile object will own the FILE pointer
     * passed in.
     * @constructor 
     * @param fp a FILE pointer
     * @param start start boundary
     * @param end end boundary
     */
    static newWithBounds(fp: object | null, start: number, end: number): StreamFile
    _init(config?: StreamFile.ConstructorProperties): void
    /**
     * Creates a new #GMimeStreamFile object for the specified `path`.
     * @param path the path to a file
     * @param mode as in fopen(3)
     */
    static open(path: string, mode: string): Stream
}

export module StreamFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamFilter {

    // Own fields of GMime-3.0.GMime.StreamFilter

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * private state data
     * @field 
     */
    priv: object
    /**
     * source stream
     * @field 
     */
    source: Stream
    owner: boolean

    // Owm methods of GMime-3.0.GMime.StreamFilter

    /**
     * Adds `filter` to `stream`. Filters are applied in the same order in
     * which they are added.
     * @param filter a #GMimeFilter
     */
    add(filter: Filter): number
    /**
     * Gets whether or not `stream` owns the source stream.
     */
    getOwner(): boolean
    /**
     * Removed a filter from the stream based on the id (as returned from
     * filter_add).
     * @param id filter id
     */
    remove(id: number): void
    /**
     * Sets whether or not `stream` owns the source stream..
     * 
     * Note: `owner` should be %TRUE if the stream should close() the
     * backend source stream when destroyed or %FALSE otherwise.
     * @param owner %TRUE if this stream should own the source stream or %FALSE otherwise
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GMimeStream which passes data through any #GMimeFilter objects.
 * @class 
 */
export class StreamFilter extends Stream {

    // Own properties of GMime-3.0.GMime.StreamFilter

    static name: string

    // Constructors of GMime-3.0.GMime.StreamFilter

    constructor(config?: StreamFilter.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamFilter object using `stream` as the source
     * stream.
     * @constructor 
     * @param stream source stream
     */
    constructor(stream: Stream) 
    /**
     * Creates a new #GMimeStreamFilter object using `stream` as the source
     * stream.
     * @constructor 
     * @param stream source stream
     */
    static new(stream: Stream): StreamFilter
    _init(config?: StreamFilter.ConstructorProperties): void
}

export module StreamFs {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamFs {

    // Own fields of GMime-3.0.GMime.StreamFs

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * %TRUE if this stream owns `fd`
     * @field 
     */
    owner: boolean
    // Has conflict: eos: boolean
    /**
     * file descriptor
     * @field 
     */
    fd: number

    // Owm methods of GMime-3.0.GMime.StreamFs

    /**
     * Gets whether or not `stream` owns the backend file descriptor.
     */
    getOwner(): boolean
    /**
     * Sets whether or not `stream` owns the backend file descriptor.
     * 
     * Note: `owner` should be %TRUE if the stream should close() the
     * backend file descriptor when destroyed or %FALSE otherwise.
     * @param owner %TRUE if this stream should own the file descriptor or %FALSE otherwise
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamFs

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GMimeStream wrapper around POSIX file descriptors.
 * @class 
 */
export class StreamFs extends Stream {

    // Own properties of GMime-3.0.GMime.StreamFs

    static name: string

    // Constructors of GMime-3.0.GMime.StreamFs

    constructor(config?: StreamFs.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamFs object around `fd`.
     * @constructor 
     * @param fd a file descriptor
     */
    constructor(fd: number) 
    /**
     * Creates a new #GMimeStreamFs object around `fd`.
     * @constructor 
     * @param fd a file descriptor
     */
    static new(fd: number): StreamFs
    /**
     * Creates a new #GMimeStreamFs object around `fd` with bounds `start`
     * and `end`.
     * @constructor 
     * @param fd a file descriptor
     * @param start start boundary
     * @param end end boundary
     */
    static newWithBounds(fd: number, start: number, end: number): StreamFs
    _init(config?: StreamFs.ConstructorProperties): void
    /**
     * Creates a new #GMimeStreamFs object for the specified `path`.
     * @param path the path to a file
     * @param flags as in open(2)
     * @param mode as in open(2)
     */
    static open(path: string, flags: number, mode: number): Stream
}

export module StreamGIO {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamGIO {

    // Own fields of GMime-3.0.GMime.StreamGIO

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * a #GOutputStream
     * @field 
     */
    ostream: Gio.OutputStream
    /**
     * a #GInputStream
     * @field 
     */
    istream: Gio.InputStream
    /**
     * a #GFile
     * @field 
     */
    file: Gio.File
    /**
     * %TRUE if this stream owns the #GFile or %FALSE otherwise
     * @field 
     */
    owner: boolean
    // Has conflict: eos: boolean

    // Owm methods of GMime-3.0.GMime.StreamGIO

    /**
     * Gets whether or not `stream` owns the backend #GFile.
     */
    getOwner(): boolean
    /**
     * Sets whether or not `stream` owns the backend GIO pointer.
     * 
     * Note: `owner` should be %TRUE if the stream should close() the
     * backend file descriptor when destroyed or %FALSE otherwise.
     * @param owner %TRUE if this stream should own the #GFile or %FALSE otherwise
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamGIO

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GMimeStream wrapper around GLib's GIO streams.
 * @class 
 */
export class StreamGIO extends Stream {

    // Own properties of GMime-3.0.GMime.StreamGIO

    static name: string

    // Constructors of GMime-3.0.GMime.StreamGIO

    constructor(config?: StreamGIO.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamGIO wrapper around a #GFile object.
     * @constructor 
     * @param file a #GFile
     */
    constructor(file: Gio.File) 
    /**
     * Creates a new #GMimeStreamGIO wrapper around a #GFile object.
     * @constructor 
     * @param file a #GFile
     */
    static new(file: Gio.File): StreamGIO
    /**
     * Creates a new #GMimeStreamGIO stream around a #GFile with bounds
     * `start` and `end`.
     * @constructor 
     * @param file a #GFile
     * @param start start boundary
     * @param end end boundary
     */
    static newWithBounds(file: Gio.File, start: number, end: number): StreamGIO
    _init(config?: StreamGIO.ConstructorProperties): void
}

export module StreamMem {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamMem {

    // Own fields of GMime-3.0.GMime.StreamMem

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * a memory buffer
     * @field 
     */
    buffer: Uint8Array
    /**
     * %TRUE if this stream owns the memory buffer
     * @field 
     */
    owner: boolean

    // Owm methods of GMime-3.0.GMime.StreamMem

    /**
     * Gets the byte array from the memory stream.
     */
    getByteArray(): Uint8Array
    /**
     * Gets whether or not `mem` owns the backend memory buffer.
     */
    getOwner(): boolean
    /**
     * Sets the byte array on the memory stream.
     * 
     * Note: The memory stream is not responsible for freeing the byte
     * array. Use g_mime_stream_mem_set_owner() to change this behavior.
     * @param array stream data
     */
    setByteArray(array: Uint8Array): void
    /**
     * Sets whether or not `mem` owns the backend memory buffer.
     * 
     * Note: `owner` should be %TRUE if the stream should free the backend
     * memory buffer when destroyed or %FALSE otherwise.
     * @param owner %TRUE if this stream should own the #GByteArray or %FALSE otherwise
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamMem

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A memory-backed #GMimeStream.
 * @class 
 */
export class StreamMem extends Stream {

    // Own properties of GMime-3.0.GMime.StreamMem

    static name: string

    // Constructors of GMime-3.0.GMime.StreamMem

    constructor(config?: StreamMem.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamMem object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeStreamMem object.
     * @constructor 
     */
    static new(): StreamMem
    /**
     * Creates a new #GMimeStreamMem object and initializes the stream
     * contents with the first `len` bytes of `buffer`.
     * @constructor 
     * @param buffer stream data
     */
    static newWithBuffer(buffer: Uint8Array): StreamMem
    /**
     * Creates a new #GMimeStreamMem with data `array`.
     * @constructor 
     * @param array source data
     */
    static newWithByteArray(array: Uint8Array): StreamMem
    _init(config?: StreamMem.ConstructorProperties): void
}

export module StreamMmap {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamMmap {

    // Own fields of GMime-3.0.GMime.StreamMmap

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * %TRUE if this stream owns the memory map
     * @field 
     */
    owner: boolean
    // Has conflict: eos: boolean
    /**
     * file descriptor
     * @field 
     */
    fd: number
    /**
     * memory map
     * @field 
     */
    map: string
    /**
     * length of the memory map
     * @field 
     */
    maplen: number

    // Owm methods of GMime-3.0.GMime.StreamMmap

    /**
     * Gets whether or not `stream` owns the backend file descriptor.
     */
    getOwner(): boolean
    /**
     * Sets whether or not `stream` owns the backend file descriptor.
     * 
     * Note: `owner` should be %TRUE if the stream should close() the
     * backend file descriptor when destroyed or %FALSE otherwise.
     * @param owner %TRUE if this stream should own the file descriptor or %FALSE otherwise
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamMmap

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A memory-mapped #GMimeStream.
 * @class 
 */
export class StreamMmap extends Stream {

    // Own properties of GMime-3.0.GMime.StreamMmap

    static name: string

    // Constructors of GMime-3.0.GMime.StreamMmap

    constructor(config?: StreamMmap.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamMmap object around `fd`.
     * @constructor 
     * @param fd file descriptor
     * @param prot protection flags
     * @param flags map flags
     */
    constructor(fd: number, prot: number, flags: number) 
    /**
     * Creates a new #GMimeStreamMmap object around `fd`.
     * @constructor 
     * @param fd file descriptor
     * @param prot protection flags
     * @param flags map flags
     */
    static new(fd: number, prot: number, flags: number): StreamMmap
    /**
     * Creates a new #GMimeStreamMmap object around `fd` with bounds `start`
     * and `end`.
     * @constructor 
     * @param fd file descriptor
     * @param prot protection flags
     * @param flags map flags
     * @param start start boundary
     * @param end end boundary
     */
    static newWithBounds(fd: number, prot: number, flags: number, start: number, end: number): StreamMmap
    _init(config?: StreamMmap.ConstructorProperties): void
}

export module StreamNull {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamNull {

    // Own fields of GMime-3.0.GMime.StreamNull

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * number of bytes written to this stream
     * @field 
     */
    written: number
    /**
     * the number of newlines written to this stream
     * @field 
     */
    newlines: number
    /**
     * whether or not the stream should count newlines
     * @field 
     */
    countNewlines: boolean

    // Owm methods of GMime-3.0.GMime.StreamNull

    /**
     * Gets whether or not the stream should keep track of the number of newlines
     * encountered.
     */
    getCountNewlines(): boolean
    /**
     * Sets whether or not the stream should keep track of the number of newlines
     * encountered.
     * @param count %TRUE if newlines should be counted or %FALSE otherwise
     */
    setCountNewlines(count: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamNull

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GMimeStream which has no backing store.
 * @class 
 */
export class StreamNull extends Stream {

    // Own properties of GMime-3.0.GMime.StreamNull

    static name: string

    // Constructors of GMime-3.0.GMime.StreamNull

    constructor(config?: StreamNull.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamNull object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeStreamNull object.
     * @constructor 
     */
    static new(): StreamNull
    _init(config?: StreamNull.ConstructorProperties): void
}

export module StreamPipe {

    // Constructor properties interface

    export interface ConstructorProperties extends Stream.ConstructorProperties {
    }

}

export interface StreamPipe {

    // Own fields of GMime-3.0.GMime.StreamPipe

    /**
     * parent #GMimeStream
     * @field 
     */
    parentObject: Stream
    /**
     * %TRUE if this stream owns `fd`
     * @field 
     */
    owner: boolean
    // Has conflict: eos: boolean
    /**
     * pipe descriptor
     * @field 
     */
    fd: number

    // Owm methods of GMime-3.0.GMime.StreamPipe

    /**
     * Gets whether or not `stream` owns the backend pipe descriptor.
     */
    getOwner(): boolean
    /**
     * Sets whether or not `stream` owns the backend pipe descriptor.
     * 
     * Note: `owner` should be %TRUE if the stream should close() the
     * backend pipe descriptor when destroyed or %FALSE otherwise.
     * @param owner owner
     */
    setOwner(owner: boolean): void

    // Class property signals of GMime-3.0.GMime.StreamPipe

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A #GMimeStream wrapper around pipes.
 * @class 
 */
export class StreamPipe extends Stream {

    // Own properties of GMime-3.0.GMime.StreamPipe

    static name: string

    // Constructors of GMime-3.0.GMime.StreamPipe

    constructor(config?: StreamPipe.ConstructorProperties) 
    /**
     * Creates a new #GMimeStreamPipe object around `fd`.
     * @constructor 
     * @param fd a pipe descriptor
     */
    constructor(fd: number) 
    /**
     * Creates a new #GMimeStreamPipe object around `fd`.
     * @constructor 
     * @param fd a pipe descriptor
     */
    static new(fd: number): StreamPipe
    _init(config?: StreamPipe.ConstructorProperties): void
}

export module TextPart {

    // Constructor properties interface

    export interface ConstructorProperties extends Part.ConstructorProperties {
    }

}

export interface TextPart {

    // Own fields of GMime-3.0.GMime.TextPart

    /**
     * parent #GMimePart
     * @field 
     */
    parentObject: any

    // Owm methods of GMime-3.0.GMime.TextPart

    /**
     * Gets the value of the charset parameter on the Content-Type header.
     */
    getCharset(): string
    /**
     * Gets the text content of the `mime_part` as a string.
     */
    getText(): string
    /**
     * Sets the charset parameter on the Content-Type header to the specified value.
     * @param charset the name of the charset
     */
    setCharset(charset: string): void
    /**
     * Sets the specified text as the content and updates the charset parameter on the Content-Type header.
     * @param text the text in utf-8
     */
    setText(text: string): void

    // Class property signals of GMime-3.0.GMime.TextPart

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A text MIME part object.
 * @class 
 */
export class TextPart extends Part {

    // Own properties of GMime-3.0.GMime.TextPart

    static name: string

    // Constructors of GMime-3.0.GMime.TextPart

    constructor(config?: TextPart.ConstructorProperties) 
    /**
     * Creates a new text MIME part object with a default content-type of
     * text/plain.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new text MIME part object with a default content-type of
     * text/plain.
     * @constructor 
     */
    static new(): TextPart

    // Overloads of new

    /**
     * Creates a new MIME Part object with a default content-type of
     * application/octet-stream.
     * @constructor 
     */
    static new(): Part
    /**
     * Performs a lookup of registered #GMimeObject subclasses, registered
     * using g_mime_object_register_type(), to find an appropriate class
     * capable of handling MIME parts of the specified Content-Type. If no
     * class has been registered to handle that type, it looks for a
     * registered class that can handle `content_type'`s media type. If
     * that also fails, then it will use the generic part class,
     * #GMimePart.
     * @constructor 
     * @param options a #GMimeParserOptions or %NULL
     * @param contentType a #GMimeContentType object
     */
    static new(options: ParserOptions | null, contentType: ContentType): Object
    /**
     * Creates a new text MIME part with a sepcified subtype.
     * @constructor 
     * @param subtype textual subtype string
     */
    static newWithSubtype(subtype: string): TextPart
    _init(config?: TextPart.ConstructorProperties): void
}

export interface ApplicationPkcs7MimeClass {

    // Own fields of GMime-3.0.GMime.ApplicationPkcs7MimeClass

    parentClass: PartClass
}

export abstract class ApplicationPkcs7MimeClass {

    // Own properties of GMime-3.0.GMime.ApplicationPkcs7MimeClass

    static name: string
}

export interface AutocryptHeaderClass {

    // Own fields of GMime-3.0.GMime.AutocryptHeaderClass

    parentClass: GObject.ObjectClass
}

export abstract class AutocryptHeaderClass {

    // Own properties of GMime-3.0.GMime.AutocryptHeaderClass

    static name: string
}

export interface AutocryptHeaderListClass {

    // Own fields of GMime-3.0.GMime.AutocryptHeaderListClass

    parentClass: GObject.ObjectClass
}

export abstract class AutocryptHeaderListClass {

    // Own properties of GMime-3.0.GMime.AutocryptHeaderListClass

    static name: string
}

export interface CertificateClass {

    // Own fields of GMime-3.0.GMime.CertificateClass

    parentClass: GObject.ObjectClass
}

export abstract class CertificateClass {

    // Own properties of GMime-3.0.GMime.CertificateClass

    static name: string
}

export interface CertificateListClass {

    // Own fields of GMime-3.0.GMime.CertificateListClass

    parentClass: GObject.ObjectClass
}

export abstract class CertificateListClass {

    // Own properties of GMime-3.0.GMime.CertificateListClass

    static name: string
}

export interface Charset {

    // Own fields of GMime-3.0.GMime.Charset

    /**
     * charset mask
     * @field 
     */
    mask: number
    /**
     * charset level
     * @field 
     */
    level: number

    // Owm methods of GMime-3.0.GMime.Charset

    /**
     * Gets the best charset name based on the charset mask `charset`.
     */
    bestName(): string | null
    /**
     * Check to see if the UTF-8 `text` will fit safely within `charset`.
     * @param charset a charset
     * @param text utf-8 text to check
     * @param len length of `text`
     */
    canEncode(charset: string, text: string, len: number): boolean
    /**
     * Initializes a charset mask structure.
     */
    init(): void
    /**
     * Steps through the input buffer 1 unicode character (glyph) at a
     * time (ie, not necessarily 1 byte at a time). Bitwise 'and' our
     * `charset->`mask with the mask for each glyph. This has the effect of
     * limiting what charsets our `charset->`mask can match.
     * @param inbuf input text buffer (must be in UTF-8)
     * @param inlen input buffer length
     */
    step(inbuf: string, inlen: number): void
}

/**
 * State used by g_mime_charset_best() and g_mime_charset_best_name().
 * @record 
 */
export class Charset {

    // Constructors of GMime-3.0.GMime.Charset

    /**
     * Computes the best charset to use to encode this text buffer.
     * @param inbuf a UTF-8 text buffer
     * @param inlen input buffer length
     */
    static best(inbuf: string, inlen: number): string | null
    /**
     * Attempts to find a canonical charset name for `charset`.
     * 
     * Note: Will normally return the same value as
     * g_mime_charset_iconv_name() unless the system iconv does not use
     * the canonical ISO charset names (such as using ISO8859-1 rather
     * than the canonical form ISO-8859-1).
     * @param charset charset name
     */
    static canonName(charset: string): string
    /**
     * Attempts to find an iconv-friendly charset name for `charset`.
     * @param charset charset name
     */
    static iconvName(charset: string): string
    /**
     * Maps the ISO-8859-# charset to the equivalent Windows-CP125#
     * charset.
     * @param isocharset ISO-8859-# charset
     */
    static isoToWindows(isocharset: string): string
    /**
     * Attempts to find a specific language code that is specific to
     * `charset`. Currently only handles CJK and Russian/Ukranian
     * charset->lang mapping. Everything else will return %NULL.
     * @param charset charset name
     */
    static language(charset: string): string | null
    /**
     * Gets the user's locale charset (or iso-8859-1 by default).
     * 
     * Note: This function is deprecated. Use g_mime_locale_charset()
     * instead.
     */
    static localeName(): string
    /**
     * Initializes character set maps.
     * 
     * Note: g_mime_init() calls this routine for you.
     */
    static mapInit(): void
    /**
     * Frees internal lookup tables created in g_mime_charset_map_init().
     */
    static mapShutdown(): void
    /**
     * Attempts to find an iconv-friendly charset name for `charset`.
     * 
     * Note: This function is deprecated. Use g_mime_charset_iconv_name()
     * instead.
     * @param charset charset name
     */
    static name(charset: string): string
}

export interface ContentDispositionClass {

    // Own fields of GMime-3.0.GMime.ContentDispositionClass

    parentClass: GObject.ObjectClass
}

export abstract class ContentDispositionClass {

    // Own properties of GMime-3.0.GMime.ContentDispositionClass

    static name: string
}

export interface ContentTypeClass {

    // Own fields of GMime-3.0.GMime.ContentTypeClass

    parentClass: GObject.ObjectClass
}

export abstract class ContentTypeClass {

    // Own properties of GMime-3.0.GMime.ContentTypeClass

    static name: string
}

export interface CryptoContextClass {

    // Own fields of GMime-3.0.GMime.CryptoContextClass

    parentClass: GObject.ObjectClass
    digestId: (ctx: CryptoContext, name: string) => DigestAlgo
    digestName: (ctx: CryptoContext, digest: DigestAlgo) => string | null
    getSignatureProtocol: (ctx: CryptoContext) => string | null
    getEncryptionProtocol: (ctx: CryptoContext) => string | null
    getKeyExchangeProtocol: (ctx: CryptoContext) => string | null
    sign: (ctx: CryptoContext, detach: boolean, userid: string, istream: Stream, ostream: Stream) => number
    verify: (ctx: CryptoContext, flags: VerifyFlags, istream: Stream, sigstream: Stream | null, ostream: Stream | null) => SignatureList | null
    encrypt: (ctx: CryptoContext, sign: boolean, userid: string | null, flags: EncryptFlags, recipients: string[], istream: Stream, ostream: Stream) => number
    decrypt: (ctx: CryptoContext, flags: DecryptFlags, sessionKey: string | null, istream: Stream, ostream: Stream) => DecryptResult
    importKeys: (ctx: CryptoContext, istream: Stream) => number
    exportKeys: (ctx: CryptoContext, keys: string, ostream: Stream) => number
}

export abstract class CryptoContextClass {

    // Own properties of GMime-3.0.GMime.CryptoContextClass

    static name: string
}

export interface DataWrapperClass {

    // Own fields of GMime-3.0.GMime.DataWrapperClass

    parentClass: GObject.ObjectClass
    writeToStream: (wrapper: DataWrapper, stream: Stream) => number
}

export abstract class DataWrapperClass {

    // Own properties of GMime-3.0.GMime.DataWrapperClass

    static name: string
}

export interface DecryptResultClass {

    // Own fields of GMime-3.0.GMime.DecryptResultClass

    parentClass: GObject.ObjectClass
}

export abstract class DecryptResultClass {

    // Own properties of GMime-3.0.GMime.DecryptResultClass

    static name: string
}

export interface Encoding {

    // Own fields of GMime-3.0.GMime.Encoding

    /**
     * the type of encoding
     * @field 
     */
    encoding: ContentEncoding
    /**
     * a temporary buffer needed when uuencoding data
     * @field 
     */
    uubuf: Uint8Array
    /**
     * %TRUE if encoding or %FALSE if decoding
     * @field 
     */
    encode: boolean
    /**
     * saved bytes from the previous step
     * @field 
     */
    save: number
    /**
     * current encder/decoder state
     * @field 
     */
    state: number

    // Owm methods of GMime-3.0.GMime.Encoding

    /**
     * Completes the incremental encode or decode of the input stream (see
     * g_mime_encoding_step() for details).
     * @param inbuf an input buffer to encode or decode
     * @param inlen input buffer length
     * @param outbuf an output buffer
     */
    flush(inbuf: string, inlen: number, outbuf: string): number
    /**
     * Initializes a #GMimeEncoding state machine for decoding from
     * `encoding`.
     * @param encoding a #GMimeContentEncoding to use
     */
    initDecode(encoding: ContentEncoding): void
    /**
     * Initializes a #GMimeEncoding state machine for encoding to
     * `encoding`.
     * @param encoding a #GMimeContentEncoding to use
     */
    initEncode(encoding: ContentEncoding): void
    /**
     * Given the input length, `inlen,` calculate the needed output length
     * to perform an encoding or decoding step.
     * @param inlen an input length
     */
    outlen(inlen: number): number
    /**
     * Resets the state of the #GMimeEncoding.
     */
    reset(): void
    /**
     * Incrementally encodes or decodes (depending on `state)` an input
     * stream by 'stepping' through a block of input at a time.
     * 
     * You should make sure `outbuf` is large enough by calling
     * g_mime_encoding_outlen() to find out how large `outbuf` might need
     * to be.
     * @param inbuf an input buffer to encode or decode
     * @param inlen input buffer length
     * @param outbuf an output buffer
     */
    step(inbuf: string, inlen: number, outbuf: string): number
}

/**
 * A context used for encoding or decoding data.
 * @record 
 */
export class Encoding {

    // Own properties of GMime-3.0.GMime.Encoding

    static name: string

    // Constructors of GMime-3.0.GMime.Encoding

    /**
     * Decodes a chunk of base64 encoded data.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been decoded
     */
    static base64DecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Base64 encodes the input stream to the output stream. Call this
     * when finished encoding data with g_mime_encoding_base64_encode_step()
     * to flush off the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     */
    static base64EncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Base64 encodes a chunk of data. Performs an 'encode step', only
     * encodes blocks of 3 characters to the output at a time, saves
     * left-over state in state and save (initialise to 0 on first
     * invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     */
    static base64EncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Decodes a block of quoted-printable encoded data. Performs a
     * 'decode step' on a chunk of QP encoded data.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been decoded
     */
    static quotedDecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Quoted-printable encodes a block of text. Call this when finished
     * encoding data with g_mime_encoding_quoted_encode_step() to flush off
     * the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     */
    static quotedEncodeClose(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Quoted-printable encodes a block of text. Performs an 'encode
     * step', saves left-over state in state and save (initialise to -1 on
     * first invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     */
    static quotedEncodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Uudecodes a chunk of data. Performs a 'decode step' on a chunk of
     * uuencoded data. Assumes the "begin mode filename" line has
     * been stripped off.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been decoded
     */
    static uudecodeStep(inbuf: number, inlen: number, outbuf: number, state: number, save: number): number
    /**
     * Uuencodes a chunk of data. Call this when finished encoding data
     * with g_mime_encoding_uuencode_step() to flush off the last little bit.
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output buffer
     * @param uubuf temporary buffer of 60 bytes
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     */
    static uuencodeClose(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
    /**
     * Uuencodes a chunk of data. Performs an 'encode step', only encodes
     * blocks of 45 characters to the output at a time, saves left-over
     * state in `uubuf,` `state` and `save` (initialize to 0 on first
     * invocation).
     * @param inbuf input buffer
     * @param inlen input buffer length
     * @param outbuf output stream
     * @param uubuf temporary buffer of 60 bytes
     * @param state holds the number of bits that are stored in `save`
     * @param save leftover bits that have not yet been encoded
     */
    static uuencodeStep(inbuf: number, inlen: number, outbuf: number, uubuf: number, state: number, save: number): number
}

export interface FilterBasicClass {

    // Own fields of GMime-3.0.GMime.FilterBasicClass

    parentClass: FilterClass
}

export abstract class FilterBasicClass {

    // Own properties of GMime-3.0.GMime.FilterBasicClass

    static name: string
}

export interface FilterBestClass {

    // Own fields of GMime-3.0.GMime.FilterBestClass

    parentClass: FilterClass
}

export abstract class FilterBestClass {

    // Own properties of GMime-3.0.GMime.FilterBestClass

    static name: string
}

export interface FilterCharsetClass {

    // Own fields of GMime-3.0.GMime.FilterCharsetClass

    parentClass: FilterClass
}

export abstract class FilterCharsetClass {

    // Own properties of GMime-3.0.GMime.FilterCharsetClass

    static name: string
}

export interface FilterChecksumClass {

    // Own fields of GMime-3.0.GMime.FilterChecksumClass

    parentClass: FilterClass
}

export abstract class FilterChecksumClass {

    // Own properties of GMime-3.0.GMime.FilterChecksumClass

    static name: string
}

export interface FilterClass {

    // Own fields of GMime-3.0.GMime.FilterClass

    parentClass: GObject.ObjectClass
    copy: (filter: Filter) => Filter
    filter: (filter: Filter, inbuf: Uint8Array, prespace: number) => [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    complete: (filter: Filter, inbuf: Uint8Array, prespace: number) => [ /* outbuf */ Uint8Array, /* outprespace */ number ]
    reset: (filter: Filter) => void
}

export abstract class FilterClass {

    // Own properties of GMime-3.0.GMime.FilterClass

    static name: string
}

export interface FilterDos2UnixClass {

    // Own fields of GMime-3.0.GMime.FilterDos2UnixClass

    parentClass: FilterClass
}

export abstract class FilterDos2UnixClass {

    // Own properties of GMime-3.0.GMime.FilterDos2UnixClass

    static name: string
}

export interface FilterEnrichedClass {

    // Own fields of GMime-3.0.GMime.FilterEnrichedClass

    parentClass: FilterClass
}

export abstract class FilterEnrichedClass {

    // Own properties of GMime-3.0.GMime.FilterEnrichedClass

    static name: string
}

export interface FilterFromClass {

    // Own fields of GMime-3.0.GMime.FilterFromClass

    parentClass: FilterClass
}

export abstract class FilterFromClass {

    // Own properties of GMime-3.0.GMime.FilterFromClass

    static name: string
}

export interface FilterGZipClass {

    // Own fields of GMime-3.0.GMime.FilterGZipClass

    parentClass: FilterClass
}

export abstract class FilterGZipClass {

    // Own properties of GMime-3.0.GMime.FilterGZipClass

    static name: string
}

export interface FilterHTMLClass {

    // Own fields of GMime-3.0.GMime.FilterHTMLClass

    parentClass: FilterClass
}

export abstract class FilterHTMLClass {

    // Own properties of GMime-3.0.GMime.FilterHTMLClass

    static name: string
}

export interface FilterOpenPGPClass {

    // Own fields of GMime-3.0.GMime.FilterOpenPGPClass

    parentClass: FilterClass
}

export abstract class FilterOpenPGPClass {

    // Own properties of GMime-3.0.GMime.FilterOpenPGPClass

    static name: string
}

export interface FilterSmtpDataClass {

    // Own fields of GMime-3.0.GMime.FilterSmtpDataClass

    parentClass: FilterClass
}

export abstract class FilterSmtpDataClass {

    // Own properties of GMime-3.0.GMime.FilterSmtpDataClass

    static name: string
}

export interface FilterStripClass {

    // Own fields of GMime-3.0.GMime.FilterStripClass

    parentClass: FilterClass
}

export abstract class FilterStripClass {

    // Own properties of GMime-3.0.GMime.FilterStripClass

    static name: string
}

export interface FilterUnix2DosClass {

    // Own fields of GMime-3.0.GMime.FilterUnix2DosClass

    parentClass: FilterClass
}

export abstract class FilterUnix2DosClass {

    // Own properties of GMime-3.0.GMime.FilterUnix2DosClass

    static name: string
}

export interface FilterWindowsClass {

    // Own fields of GMime-3.0.GMime.FilterWindowsClass

    parentClass: FilterClass
}

export abstract class FilterWindowsClass {

    // Own properties of GMime-3.0.GMime.FilterWindowsClass

    static name: string
}

export interface FilterYencClass {

    // Own fields of GMime-3.0.GMime.FilterYencClass

    parentClass: FilterClass
}

export abstract class FilterYencClass {

    // Own properties of GMime-3.0.GMime.FilterYencClass

    static name: string
}

export interface FormatOptions {

    // Owm methods of GMime-3.0.GMime.FormatOptions

    /**
     * Adds the given header to the list of headers that should be hidden.
     * @param header a header name
     */
    addHiddenHeader(header: string): void
    /**
     * Clears the list of headers that should be hidden.
     */
    clearHiddenHeaders(): void
    /**
     * Clones a #GMimeFormatOptions.
     */
    clone(): FormatOptions
    /**
     * Creates a #GMimeFilter suitable for converting line-endings to the
     * currently set new-line format.
     * @param ensureNewline %TRUE if the output must *always* end with a new line
     */
    createNewlineFilter(ensureNewline: boolean): Filter
    /**
     * Frees a set of #GMimeFormatOptions.
     */
    free(): void
    /**
     * Gets a string representing the currently set new-line format.
     */
    getNewline(): string
    /**
     * Gets the new-line format to use when writing out messages and headers.
     */
    getNewlineFormat(): NewLineFormat
    /**
     * Gets the parameter encoding method to use for #GMimeParam parameters that do not
     * already have an encoding method specified.
     */
    getParamEncodingMethod(): ParamEncodingMethod
    /**
     * Gets whether or not the specified header should be hidden.
     * @param header the name of a header
     */
    isHiddenHeader(header: string): boolean
    /**
     * Removes the given header from the list of headers that should be hidden.
     * @param header a header name
     */
    removeHiddenHeader(header: string): void
    /**
     * Sets the new-line format that should be used when writing headers and messages.
     * @param newline a #GMimeNewLineFormat
     */
    setNewlineFormat(newline: NewLineFormat): void
    /**
     * Sets the parameter encoding method to use when encoding parameters which
     * do not have an encoding method specified.
     * 
     * Note: #GMIME_PARAM_ENCODING_METHOD_DEFAULT is not allowed.
     * @param method a #GMimeParamEncodingMethod
     */
    setParamEncodingMethod(method: ParamEncodingMethod): void
}

/**
 * Format options for serializing various GMime objects.
 * @record 
 */
export class FormatOptions {

    // Own properties of GMime-3.0.GMime.FormatOptions

    static name: string

    // Constructors of GMime-3.0.GMime.FormatOptions

    /**
     * Creates a new set of #GMimeFormatOptions.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new set of #GMimeFormatOptions.
     * @constructor 
     */
    static new(): FormatOptions
    /**
     * Gets the default format options.
     */
    static getDefault(): FormatOptions
}

export interface GpgContextClass {
}

export abstract class GpgContextClass {

    // Own properties of GMime-3.0.GMime.GpgContextClass

    static name: string
}

export interface HeaderClass {

    // Own fields of GMime-3.0.GMime.HeaderClass

    parentClass: GObject.ObjectClass
}

export abstract class HeaderClass {

    // Own properties of GMime-3.0.GMime.HeaderClass

    static name: string
}

export interface HeaderListClass {

    // Own fields of GMime-3.0.GMime.HeaderListClass

    parentClass: GObject.ObjectClass
}

export abstract class HeaderListClass {

    // Own properties of GMime-3.0.GMime.HeaderListClass

    static name: string
}

export interface InternetAddressClass {

    // Own fields of GMime-3.0.GMime.InternetAddressClass

    parentClass: GObject.ObjectClass
    toString: (ia: InternetAddress, options: FormatOptions, flags: number, linelen: number, str: GLib.String) => void
}

export abstract class InternetAddressClass {

    // Own properties of GMime-3.0.GMime.InternetAddressClass

    static name: string
}

export interface InternetAddressGroupClass {

    // Own fields of GMime-3.0.GMime.InternetAddressGroupClass

    parentClass: InternetAddressClass
}

export abstract class InternetAddressGroupClass {

    // Own properties of GMime-3.0.GMime.InternetAddressGroupClass

    static name: string
}

export interface InternetAddressListClass {

    // Own fields of GMime-3.0.GMime.InternetAddressListClass

    parentClass: GObject.ObjectClass
}

export abstract class InternetAddressListClass {

    // Own properties of GMime-3.0.GMime.InternetAddressListClass

    static name: string
}

export interface InternetAddressMailboxClass {

    // Own fields of GMime-3.0.GMime.InternetAddressMailboxClass

    parentClass: InternetAddressClass
}

export abstract class InternetAddressMailboxClass {

    // Own properties of GMime-3.0.GMime.InternetAddressMailboxClass

    static name: string
}

export interface MessageClass {

    // Own fields of GMime-3.0.GMime.MessageClass

    parentClass: ObjectClass
}

export abstract class MessageClass {

    // Own properties of GMime-3.0.GMime.MessageClass

    static name: string
}

export interface MessagePartClass {

    // Own fields of GMime-3.0.GMime.MessagePartClass

    parentClass: ObjectClass
}

export abstract class MessagePartClass {

    // Own properties of GMime-3.0.GMime.MessagePartClass

    static name: string
}

export interface MessagePartialClass {

    // Own fields of GMime-3.0.GMime.MessagePartialClass

    parentClass: PartClass
}

export abstract class MessagePartialClass {

    // Own properties of GMime-3.0.GMime.MessagePartialClass

    static name: string
}

export interface MultipartClass {

    // Own fields of GMime-3.0.GMime.MultipartClass

    parentClass: ObjectClass
    clear: (multipart: Multipart) => void
    add: (multipart: Multipart, part: Object) => void
    insert: (multipart: Multipart, index: number, part: Object) => void
    remove: (multipart: Multipart, part: Object) => boolean
    removeAt: (multipart: Multipart, index: number) => Object
    getPart: (multipart: Multipart, index: number) => Object
    contains: (multipart: Multipart, part: Object) => boolean
    indexOf: (multipart: Multipart, part: Object) => number
    getCount: (multipart: Multipart) => number
    setBoundary: (multipart: Multipart, boundary: string) => void
    getBoundary: (multipart: Multipart) => string
}

export abstract class MultipartClass {

    // Own properties of GMime-3.0.GMime.MultipartClass

    static name: string
}

export interface MultipartEncryptedClass {

    // Own fields of GMime-3.0.GMime.MultipartEncryptedClass

    parentClass: MultipartClass
}

export abstract class MultipartEncryptedClass {

    // Own properties of GMime-3.0.GMime.MultipartEncryptedClass

    static name: string
}

export interface MultipartSignedClass {

    // Own fields of GMime-3.0.GMime.MultipartSignedClass

    parentClass: MultipartClass
}

export abstract class MultipartSignedClass {

    // Own properties of GMime-3.0.GMime.MultipartSignedClass

    static name: string
}

export interface ObjectClass {

    // Own fields of GMime-3.0.GMime.ObjectClass

    parentClass: GObject.ObjectClass
    headerAdded: (object: Object, header: Header) => void
    headerChanged: (object: Object, header: Header) => void
    headerRemoved: (object: Object, header: Header) => void
    headersCleared: (object: Object) => void
    setContentType: (object: Object, contentType: ContentType) => void
    getHeaders: (object: Object, options: FormatOptions | null) => string
    writeToStream: (object: Object, options: FormatOptions, contentOnly: boolean, stream: Stream) => number
    encode: (object: Object, constraint: EncodingConstraint) => void
}

export abstract class ObjectClass {

    // Own properties of GMime-3.0.GMime.ObjectClass

    static name: string
}

export interface OpenPGPMarker {

    // Own fields of GMime-3.0.GMime.OpenPGPMarker

    /**
     * The OpenPGP marker.
     * @field 
     */
    marker: string
    /**
     * The length of the OpenPGP marker.
     * @field 
     */
    len: number
    /**
     * The #GMimeOpenPGPState that the state machine must be in before encountering this marker.
     * @field 
     */
    before: OpenPGPState
    /**
     * The #GMimeOpenPGPState that the state machine will transition into once this marker is found.
     * @field 
     */
    after: OpenPGPState
    /**
     * %TRUE if the marker is an end marker; otherwise, %FALSE.
     * @field 
     */
    isEndMarker: boolean
}

/**
 * An OpenPGP marker for use with GMime's internal state machines used for detecting OpenPGP blocks.
 * @record 
 */
export class OpenPGPMarker {

    // Own properties of GMime-3.0.GMime.OpenPGPMarker

    static name: string
}

export interface ParamClass {

    // Own fields of GMime-3.0.GMime.ParamClass

    parentClass: GObject.ObjectClass
}

export abstract class ParamClass {

    // Own properties of GMime-3.0.GMime.ParamClass

    static name: string
}

export interface ParamListClass {

    // Own fields of GMime-3.0.GMime.ParamListClass

    parentClass: GObject.ObjectClass
}

export abstract class ParamListClass {

    // Own properties of GMime-3.0.GMime.ParamListClass

    static name: string
}

export interface ParserClass {

    // Own fields of GMime-3.0.GMime.ParserClass

    parentClass: GObject.ObjectClass
}

export abstract class ParserClass {

    // Own properties of GMime-3.0.GMime.ParserClass

    static name: string
}

export interface ParserOptions {

    // Owm methods of GMime-3.0.GMime.ParserOptions

    /**
     * Clones a #GMimeParserOptions.
     */
    clone(): ParserOptions
    /**
     * Frees a set of #GMimeParserOptions.
     */
    free(): void
    /**
     * Gets the compliance mode that should be used when parsing rfc822 addresses.
     * 
     * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the address parser is fairly liberal in
     * what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder to
     * deal with garbage input.
     */
    getAddressComplianceMode(): RfcComplianceMode
    /**
     * Gets whether or not the rfc822 address parser should allow addresses without a domain.
     * 
     * In general, you'll probably want this value to be %FALSE (the default) as it allows
     * maximum interoperability with existing (broken) mail clients and other mail software
     * such as sloppily written perl scripts (aka spambots) that do not properly quote the
     * name when it contains a comma.
     * 
     * This option exists in order to allow parsing of mailbox addresses that do not have a
     * domain component. These types of addresses are rare and were typically only used when
     * sending mail to other users on the same UNIX system.
     */
    getAllowAddressesWithoutDomain(): boolean
    /**
     * Gets the fallback charsets to try when decoding 8-bit headers.
     */
    getFallbackCharsets(): string[]
    /**
     * Gets the compliance mode that should be used when parsing Content-Type and
     * Content-Disposition parameters.
     * 
     * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the parameter parser is fairly liberal
     * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
     * to deal with garbage input.
     */
    getParameterComplianceMode(): RfcComplianceMode
    /**
     * Gets the compliance mode that should be used when parsing rfc2047 encoded words.
     * 
     * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the rfc2047 parser is fairly liberal
     * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
     * to deal with garbage input.
     */
    getRfc2047ComplianceMode(): RfcComplianceMode
    /**
     * Sets the compliance mode that should be used when parsing rfc822 addresses.
     * 
     * In general, you'll probably want this value to be #GMIME_RFC_COMPLIANCE_LOOSE
     * (the default) as it allows maximum interoperability with existing (broken) mail clients
     * and other mail software such as sloppily written perl scripts (aka spambots).
     * 
     * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the address parser is fairly liberal in
     * what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder to
     * deal with garbage input.
     * @param mode a #GMimeRfcComplianceMode
     */
    setAddressComplianceMode(mode: RfcComplianceMode): void
    /**
     * Sets whether the rfc822 address parser should allow addresses without a domain.
     * 
     * In general, you'll probably want this value to be %FALSE (the default) as it allows
     * maximum interoperability with existing (broken) mail clients and other mail software
     * such as sloppily written perl scripts (aka spambots) that do not properly quote the
     * name when it contains a comma.
     * 
     * This option exists in order to allow parsing of mailbox addresses that do not have a
     * domain component. These types of addresses are rare and were typically only used when
     * sending mail to other users on the same UNIX system.
     * @param allow %TRUE if the parser should allow addresses without a domain or %FALSE otherwise
     */
    setAllowAddressesWithoutDomain(allow: boolean): void
    /**
     * Sets the fallback charsets to try when decoding 8-bit headers.
     * 
     * Note: It is recommended that the list of charsets start with utf-8
     * and end with iso-8859-1.
     * @param charsets a %NULL-terminated list of charsets or %NULL for the default list
     */
    setFallbackCharsets(charsets: string): void
    /**
     * Sets the compliance mode that should be used when parsing Content-Type and
     * Content-Disposition parameters.
     * 
     * In general, you'll probably want this value to be #GMIME_RFC_COMPLIANCE_LOOSE
     * (the default) as it allows maximum interoperability with existing (broken) mail clients
     * and other mail software such as sloppily written perl scripts (aka spambots).
     * 
     * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the parameter parser is fairly liberal
     * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
     * to deal with garbage input.
     * @param mode a #GMimeRfcComplianceMode
     */
    setParameterComplianceMode(mode: RfcComplianceMode): void
    /**
     * Sets the compliance mode that should be used when parsing rfc2047 encoded words.
     * 
     * In general, you'll probably want this value to be #GMIME_RFC_COMPLIANCE_LOOSE
     * (the default) as it allows maximum interoperability with existing (broken) mail clients
     * and other mail software such as sloppily written perl scripts (aka spambots).
     * 
     * Note: Even in #GMIME_RFC_COMPLIANCE_STRICT mode, the parameter parser is fairly liberal
     * in what it accepts. Setting it to #GMIME_RFC_COMPLIANCE_LOOSE just makes it try harder
     * to deal with garbage input.
     * @param mode a #GMimeRfcComplianceMode
     */
    setRfc2047ComplianceMode(mode: RfcComplianceMode): void
}

/**
 * A set of parser options used by #GMimeParser and various other parsing functions.
 * @record 
 */
export class ParserOptions {

    // Own properties of GMime-3.0.GMime.ParserOptions

    static name: string

    // Constructors of GMime-3.0.GMime.ParserOptions

    /**
     * Creates a new set of #GMimeParserOptions.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new set of #GMimeParserOptions.
     * @constructor 
     */
    static new(): ParserOptions
    /**
     * Gets the default parser options.
     */
    static getDefault(): ParserOptions
}

export interface PartClass {

    // Own fields of GMime-3.0.GMime.PartClass

    parentClass: ObjectClass
    setContent: (mimePart: Part, content: DataWrapper) => void
}

export abstract class PartClass {

    // Own properties of GMime-3.0.GMime.PartClass

    static name: string
}

export interface PartIter {

    // Owm methods of GMime-3.0.GMime.PartIter

    /**
     * Clones the `iter,` including its current state.
     */
    clone(): PartIter
    /**
     * Frees the memory allocated by g_mime_part_iter_new().
     */
    free(): void
    /**
     * Gets the #GMimeObject at the current #GMimePartIter position.
     */
    getCurrent(): Object
    /**
     * Gets the parent of the #GMimeObject at the current #GMimePartIter
     * position.
     */
    getParent(): Object
    /**
     * Gets the path of the current #GMimeObject in the MIME structure
     * used to initialize `iter`.
     */
    getPath(): string
    /**
     * Gets the toplevel #GMimeObject used to initialize `iter`.
     */
    getToplevel(): Object
    /**
     * Checks that the current state of `iter` is valid.
     */
    isValid(): boolean
    /**
     * Updates the state of `iter` to point to the #GMimeObject specified
     * by `path`.
     * @param path a string representing the path to jump to
     */
    jumpTo(path: string): boolean
    /**
     * Advances to the next part in the MIME structure used to initialize
     * `iter`.
     */
    next(): boolean
    /**
     * Rewinds to the previous part in the MIME structure used to
     * initialize `iter`.
     */
    prev(): boolean
    /**
     * Removes the #GMimeObject at the current position from its
     * parent. If successful, `iter` is advanced to the next position
     * (since the current position will become invalid).
     */
    remove(): boolean
    /**
     * Replaces the #GMimeObject at the current position with `replacement`.
     * @param replacement a #GMimeObject
     */
    replace(replacement: Object): boolean
    /**
     * Resets the state of `iter` to its initial state.
     */
    reset(): void
}

/**
 * A MIME part iterator.
 * @record 
 */
export class PartIter {

    // Own properties of GMime-3.0.GMime.PartIter

    static name: string

    // Constructors of GMime-3.0.GMime.PartIter

    /**
     * Creates a new #GMimePartIter for iterating over `toplevel'`s subparts.
     * @constructor 
     * @param toplevel a #GMimeObject to use as the toplevel
     */
    constructor(toplevel: Object) 
    /**
     * Creates a new #GMimePartIter for iterating over `toplevel'`s subparts.
     * @constructor 
     * @param toplevel a #GMimeObject to use as the toplevel
     */
    static new(toplevel: Object): PartIter
}

export interface Pkcs7ContextClass {
}

export abstract class Pkcs7ContextClass {

    // Own properties of GMime-3.0.GMime.Pkcs7ContextClass

    static name: string
}

export interface References {

    // Own fields of GMime-3.0.GMime.References

    /**
     * the array of message-id references
     * @field 
     */
    array: object[]

    // Owm methods of GMime-3.0.GMime.References

    /**
     * Appends a reference to msgid to the list of references.
     * @param msgid a message-id string
     */
    append(msgid: string): void
    /**
     * Clears the #GMimeReferences list.
     */
    clear(): void
    /**
     * Copies a #GMimeReferences list.
     */
    copy(): References
    /**
     * Frees the #GMimeReferences list.
     */
    free(): void
    /**
     * Gets the specified Message-Id reference from the #GMimeReferences.
     * @param index the index of the message id
     */
    getMessageId(index: number): string
    /**
     * Gets the length of the #GMimeReferences list.
     */
    length(): number
    /**
     * Sets the specified Message-Id reference from the #GMimeReferences.
     * @param index the index of the message id
     * @param msgid the message id
     */
    setMessageId(index: number, msgid: string): void
}

/**
 * A List of references, as per the References or In-Reply-To header
 * fields.
 * @record 
 */
export class References {

    // Own properties of GMime-3.0.GMime.References

    static name: string

    // Constructors of GMime-3.0.GMime.References

    /**
     * Creates a new #GMimeReferences.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMimeReferences.
     * @constructor 
     */
    static new(): References
    /**
     * Decodes a list of msg-ids as in the References and/or In-Reply-To
     * headers defined in rfc822.
     * @param options a #GMimeParserOptions or %NULL
     * @param text string containing a list of msg-ids
     */
    static parse(options: ParserOptions | null, text: string): References
}

export interface SignatureClass {

    // Own fields of GMime-3.0.GMime.SignatureClass

    parentClass: GObject.ObjectClass
}

export abstract class SignatureClass {

    // Own properties of GMime-3.0.GMime.SignatureClass

    static name: string
}

export interface SignatureListClass {

    // Own fields of GMime-3.0.GMime.SignatureListClass

    parentClass: GObject.ObjectClass
}

export abstract class SignatureListClass {

    // Own properties of GMime-3.0.GMime.SignatureListClass

    static name: string
}

export interface StreamBufferClass {

    // Own fields of GMime-3.0.GMime.StreamBufferClass

    parentClass: StreamClass
}

export abstract class StreamBufferClass {

    // Own properties of GMime-3.0.GMime.StreamBufferClass

    static name: string
}

export interface StreamCatClass {

    // Own fields of GMime-3.0.GMime.StreamCatClass

    parentClass: StreamClass
}

export abstract class StreamCatClass {

    // Own properties of GMime-3.0.GMime.StreamCatClass

    static name: string
}

export interface StreamClass {

    // Own fields of GMime-3.0.GMime.StreamClass

    parentClass: GObject.ObjectClass
    read: (stream: Stream, buf: Uint8Array) => number
    write: (stream: Stream, buf: Uint8Array) => number
    flush: (stream: Stream) => number
    close: (stream: Stream) => number
    eos: (stream: Stream) => boolean
    reset: (stream: Stream) => number
    seek: (stream: Stream, offset: number, whence: SeekWhence) => number
    tell: (stream: Stream) => number
    length: (stream: Stream) => number
    substream: (stream: Stream, start: number, end: number) => Stream
}

export abstract class StreamClass {

    // Own properties of GMime-3.0.GMime.StreamClass

    static name: string
}

export interface StreamFileClass {

    // Own fields of GMime-3.0.GMime.StreamFileClass

    parentClass: StreamClass
}

export abstract class StreamFileClass {

    // Own properties of GMime-3.0.GMime.StreamFileClass

    static name: string
}

export interface StreamFilterClass {

    // Own fields of GMime-3.0.GMime.StreamFilterClass

    parentClass: StreamClass
}

export abstract class StreamFilterClass {

    // Own properties of GMime-3.0.GMime.StreamFilterClass

    static name: string
}

export interface StreamFsClass {

    // Own fields of GMime-3.0.GMime.StreamFsClass

    parentClass: StreamClass
}

export abstract class StreamFsClass {

    // Own properties of GMime-3.0.GMime.StreamFsClass

    static name: string
}

export interface StreamGIOClass {

    // Own fields of GMime-3.0.GMime.StreamGIOClass

    parentClass: StreamClass
}

export abstract class StreamGIOClass {

    // Own properties of GMime-3.0.GMime.StreamGIOClass

    static name: string
}

export interface StreamIOVector {

    // Own fields of GMime-3.0.GMime.StreamIOVector

    /**
     * data to pass to the I/O function.
     * @field 
     */
    data: object
    /**
     * length of the data, in bytes.
     * @field 
     */
    len: number
}

/**
 * An I/O vector for use with g_mime_stream_writev().
 * @record 
 */
export class StreamIOVector {

    // Own properties of GMime-3.0.GMime.StreamIOVector

    static name: string
}

export interface StreamMemClass {

    // Own fields of GMime-3.0.GMime.StreamMemClass

    parentClass: StreamClass
}

export abstract class StreamMemClass {

    // Own properties of GMime-3.0.GMime.StreamMemClass

    static name: string
}

export interface StreamMmapClass {

    // Own fields of GMime-3.0.GMime.StreamMmapClass

    parentClass: StreamClass
}

export abstract class StreamMmapClass {

    // Own properties of GMime-3.0.GMime.StreamMmapClass

    static name: string
}

export interface StreamNullClass {

    // Own fields of GMime-3.0.GMime.StreamNullClass

    parentClass: StreamClass
}

export abstract class StreamNullClass {

    // Own properties of GMime-3.0.GMime.StreamNullClass

    static name: string
}

export interface StreamPipeClass {

    // Own fields of GMime-3.0.GMime.StreamPipeClass

    parentClass: StreamClass
}

export abstract class StreamPipeClass {

    // Own properties of GMime-3.0.GMime.StreamPipeClass

    static name: string
}

export interface TextPartClass {

    // Own fields of GMime-3.0.GMime.TextPartClass

    parentClass: PartClass
}

export abstract class TextPartClass {

    // Own properties of GMime-3.0.GMime.TextPartClass

    static name: string
}
