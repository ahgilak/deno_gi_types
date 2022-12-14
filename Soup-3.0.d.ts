
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Soup-3.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * The type of cache; this affects what kinds of responses will be
 * saved.
 */
export enum CacheType {
    /**
     * a single-user cache
     */
    SINGLE_USER,
    /**
     * a shared cache
     */
    SHARED,
}
/**
 * The policy for accepting or rejecting cookies returned in
 * responses.
 */
export enum CookieJarAcceptPolicy {
    /**
     * accept all cookies unconditionally.
     */
    ALWAYS,
    /**
     * reject all cookies unconditionally.
     */
    NEVER,
    /**
     * accept all cookies set by the main
     *   document loaded in the application using libsoup. An example of the most
     *   common case, web browsers, would be: If http://www.example.com is the page
     *   loaded, accept all cookies set by example.com, but if a resource from
     *   http://www.third-party.com is loaded from that page reject any cookie that
     *   it could try to set. For libsoup to be able to tell apart first party
     *   cookies from the rest, the application must call
     *   [method`Message`.set_first_party] on each outgoing [class`Message]`, setting
     *   the [struct`GLib`.Uri] of the main document. If no first party is set in a
     *   message when this policy is in effect, cookies will be assumed to be third
     *   party by default.
     */
    NO_THIRD_PARTY,
    /**
     * accept all cookies set by
     *   the main document loaded in the application using libsoup, and from domains
     *   that have previously set at least one cookie when loaded as the main
     *   document. An example of the most common case, web browsers, would be: if
     *   http://www.example.com is the page loaded, accept all cookies set by
     *   example.com, but if a resource from http://www.third-party.com is loaded
     *   from that page, reject any cookie that it could try to set unless it
     *   already has a cookie in the cookie jar. For libsoup to be able to tell
     *   apart first party cookies from the rest, the application must call
     *   [method`Message`.set_first_party] on each outgoing #SoupMessage, setting the
     *   [struct`GLib`.Uri] of the main document. If no first party is set in a
     *   message when this policy is in effect, cookies will be assumed to be third
     *   party by default.
     */
    GRANDFATHERED_THIRD_PARTY,
}
/**
 * Date formats that [func`date_time_to_string]` can use.
 * 
 * `SOUP_DATE_HTTP` and `SOUP_DATE_COOKIE` always coerce the time to
 * UTC.
 * 
 * This enum may be extended with more values in future releases.
 */
export enum DateFormat {
    /**
     * RFC 1123 format, used by the HTTP "Date" header. Eg
     *   "Sun, 06 Nov 1994 08:49:37 GMT".
     */
    HTTP,
    /**
     * The format for the "Expires" timestamp in the
     *   Netscape cookie specification. Eg, "Sun, 06-Nov-1994 08:49:37 GMT".
     */
    COOKIE,
}
/**
 * How a message body is encoded for transport
 */
export enum Encoding {
    /**
     * unknown / error
     */
    UNRECOGNIZED,
    /**
     * no body is present (which is not the same as a
     *   0-length body, and only occurs in certain places)
     */
    NONE,
    /**
     * Content-Length encoding
     */
    CONTENT_LENGTH,
    /**
     * Response body ends when the connection is closed
     */
    EOF,
    /**
     * chunked encoding (currently only supported
     *   for response)
     */
    CHUNKED,
    /**
     * multipart/byteranges (Reserved for future
     *   use: NOT CURRENTLY IMPLEMENTED)
     */
    BYTERANGES,
}
/**
 * Indicates the HTTP protocol version being used.
 */
export enum HTTPVersion {
    /**
     * HTTP 1.0 (RFC 1945)
     */
    HTTP_1_0,
    /**
     * HTTP 1.1 (RFC 2616)
     */
    HTTP_1_1,
    /**
     * HTTP 2.0 (RFC 7540)
     */
    HTTP_2_0,
}
/**
 * Describes the level of logging output to provide.
 */
export enum LoggerLogLevel {
    /**
     * No logging
     */
    NONE,
    /**
     * Log the Request-Line or Status-Line and
     *   the Soup-Debug pseudo-headers
     */
    MINIMAL,
    /**
     * Log the full request/response headers
     */
    HEADERS,
    /**
     * Log the full headers and request/response bodies
     */
    BODY,
}
/**
 * The lifetime of the memory being passed.
 */
export enum MemoryUse {
    /**
     * The memory is statically allocated and
     *   constant; libsoup can use the passed-in buffer directly and not
     *   need to worry about it being modified or freed.
     */
    STATIC,
    /**
     * The caller has allocated the memory and libsoup
     *   will assume ownership of it and free it with [func`GLib`.free].
     */
    TAKE,
    /**
     * The passed-in data belongs to the caller and
     *   libsoup will copy it into new memory leaving the caller free
     *   to reuse the original memory.
     */
    COPY,
}
/**
 * Value passed to [ctor`MessageHeaders`.new] to set certain default
 * behaviors.
 */
export enum MessageHeadersType {
    /**
     * request headers
     */
    REQUEST,
    /**
     * response headers
     */
    RESPONSE,
    /**
     * multipart body part headers
     */
    MULTIPART,
}
/**
 * Priorities that can be set on a [class`Message]` to instruct the message queue
 * to process it before any other message with lower priority.
 */
export enum MessagePriority {
    /**
     * The lowest priority, the messages
     *   with this priority will be the last ones to be attended.
     */
    VERY_LOW,
    /**
     * Use this for low priority messages, a
     *   #SoupMessage with the default priority will be processed first.
     */
    LOW,
    /**
     * The default priotity, this is the
     *   priority assigned to the #SoupMessage by default.
     */
    NORMAL,
    /**
     * High priority, a #SoupMessage with
     *   this priority will be processed before the ones with the default
     *   priority.
     */
    HIGH,
    /**
     * The highest priority, use this
     *   for very urgent #SoupMessage as they will be the first ones to be
     *   attended.
     */
    VERY_HIGH,
}
/**
 * Represents the same-site policies of a cookie.
 */
export enum SameSitePolicy {
    /**
     * The cookie is exposed with both cross-site and same-site requests
     */
    NONE,
    /**
     * The cookie is withheld on cross-site requests but exposed on cross-site navigations
     */
    LAX,
    /**
     * The cookie is only exposed for same-site requests
     */
    STRICT,
}
/**
 * A #SoupSession error.
 */
export enum SessionError {
    /**
     * the server's response could not
     *   be parsed
     */
    PARSING,
    /**
     * the server's response was in an
     *   unsupported format
     */
    ENCODING,
    /**
     * the message has been redirected
     *   too many times
     */
    TOO_MANY_REDIRECTS,
    /**
     * the message has been restarted
     *   too many times
     */
    TOO_MANY_RESTARTS,
    /**
     * failed to redirect message because
     *   Location header was missing or empty in response
     */
    REDIRECT_NO_LOCATION,
    /**
     * failed to redirect message because
     *   Location header contains an invalid URI
     */
    REDIRECT_BAD_URI,
    /**
     * the message is already in the
     *   session queue. Messages can only be reused after unqueued.
     */
    MESSAGE_ALREADY_IN_QUEUE,
}
/**
 * These represent the known HTTP status code values, plus various
 * network and internal errors.
 * 
 * Note that no libsoup functions take or return this type directly;
 * any function that works with status codes will accept unrecognized
 * status codes as well.
 */
export enum Status {
    /**
     * No status available. (Eg, the message has not
     * been sent yet)
     */
    NONE,
    /**
     * 100 Continue (HTTP)
     */
    CONTINUE,
    /**
     * 101 Switching Protocols (HTTP)
     */
    SWITCHING_PROTOCOLS,
    /**
     * 102 Processing (WebDAV)
     */
    PROCESSING,
    /**
     * 200 Success (HTTP). Also used by many lower-level
     * soup routines to indicate success.
     */
    OK,
    /**
     * 201 Created (HTTP)
     */
    CREATED,
    /**
     * 202 Accepted (HTTP)
     */
    ACCEPTED,
    /**
     * 203 Non-Authoritative Information
     * (HTTP)
     */
    NON_AUTHORITATIVE,
    /**
     * 204 No Content (HTTP)
     */
    NO_CONTENT,
    /**
     * 205 Reset Content (HTTP)
     */
    RESET_CONTENT,
    /**
     * 206 Partial Content (HTTP)
     */
    PARTIAL_CONTENT,
    /**
     * 207 Multi-Status (WebDAV)
     */
    MULTI_STATUS,
    /**
     * 300 Multiple Choices (HTTP)
     */
    MULTIPLE_CHOICES,
    /**
     * 301 Moved Permanently (HTTP)
     */
    MOVED_PERMANENTLY,
    /**
     * 302 Found (HTTP)
     */
    FOUND,
    /**
     * 302 Moved Temporarily (old name,
     * RFC 2068)
     */
    MOVED_TEMPORARILY,
    /**
     * 303 See Other (HTTP)
     */
    SEE_OTHER,
    /**
     * 304 Not Modified (HTTP)
     */
    NOT_MODIFIED,
    /**
     * 305 Use Proxy (HTTP)
     */
    USE_PROXY,
    /**
     * 306 [Unused] (HTTP)
     */
    NOT_APPEARING_IN_THIS_PROTOCOL,
    /**
     * 307 Temporary Redirect (HTTP)
     */
    TEMPORARY_REDIRECT,
    /**
     * 308 Permanent Redirect (HTTP)
     */
    PERMANENT_REDIRECT,
    /**
     * 400 Bad Request (HTTP)
     */
    BAD_REQUEST,
    /**
     * 401 Unauthorized (HTTP)
     */
    UNAUTHORIZED,
    /**
     * 402 Payment Required (HTTP)
     */
    PAYMENT_REQUIRED,
    /**
     * 403 Forbidden (HTTP)
     */
    FORBIDDEN,
    /**
     * 404 Not Found (HTTP)
     */
    NOT_FOUND,
    /**
     * 405 Method Not Allowed (HTTP)
     */
    METHOD_NOT_ALLOWED,
    /**
     * 406 Not Acceptable (HTTP)
     */
    NOT_ACCEPTABLE,
    /**
     * 407 Proxy Authentication
     * Required (HTTP)
     */
    PROXY_AUTHENTICATION_REQUIRED,
    /**
     * shorter alias for
     * %SOUP_STATUS_PROXY_AUTHENTICATION_REQUIRED
     */
    PROXY_UNAUTHORIZED,
    /**
     * 408 Request Timeout (HTTP)
     */
    REQUEST_TIMEOUT,
    /**
     * 409 Conflict (HTTP)
     */
    CONFLICT,
    /**
     * 410 Gone (HTTP)
     */
    GONE,
    /**
     * 411 Length Required (HTTP)
     */
    LENGTH_REQUIRED,
    /**
     * 412 Precondition Failed (HTTP)
     */
    PRECONDITION_FAILED,
    /**
     * 413 Request Entity Too Large
     * (HTTP)
     */
    REQUEST_ENTITY_TOO_LARGE,
    /**
     * 414 Request-URI Too Long (HTTP)
     */
    REQUEST_URI_TOO_LONG,
    /**
     * 415 Unsupported Media Type
     * (HTTP)
     */
    UNSUPPORTED_MEDIA_TYPE,
    /**
     * 416 Requested Range
     * Not Satisfiable (HTTP)
     */
    REQUESTED_RANGE_NOT_SATISFIABLE,
    /**
     * shorter alias for
     * %SOUP_STATUS_REQUESTED_RANGE_NOT_SATISFIABLE
     */
    INVALID_RANGE,
    /**
     * 417 Expectation Failed (HTTP)
     */
    EXPECTATION_FAILED,
    /**
     * 421 Misdirected Request
     */
    MISDIRECTED_REQUEST,
    /**
     * 422 Unprocessable Entity
     * (WebDAV)
     */
    UNPROCESSABLE_ENTITY,
    /**
     * 423 Locked (WebDAV)
     */
    LOCKED,
    /**
     * 424 Failed Dependency (WebDAV)
     */
    FAILED_DEPENDENCY,
    /**
     * 500 Internal Server Error
     * (HTTP)
     */
    INTERNAL_SERVER_ERROR,
    /**
     * 501 Not Implemented (HTTP)
     */
    NOT_IMPLEMENTED,
    /**
     * 502 Bad Gateway (HTTP)
     */
    BAD_GATEWAY,
    /**
     * 503 Service Unavailable (HTTP)
     */
    SERVICE_UNAVAILABLE,
    /**
     * 504 Gateway Timeout (HTTP)
     */
    GATEWAY_TIMEOUT,
    /**
     * 505 HTTP Version Not
     * Supported (HTTP)
     */
    HTTP_VERSION_NOT_SUPPORTED,
    /**
     * 507 Insufficient Storage
     * (WebDAV)
     */
    INSUFFICIENT_STORAGE,
    /**
     * 510 Not Extended (RFC 2774)
     */
    NOT_EXTENDED,
}
/**
 * Error codes for %SOUP_TLD_ERROR.
 */
export enum TLDError {
    /**
     * A hostname was syntactically
     *   invalid.
     */
    INVALID_HOSTNAME,
    /**
     * The passed-in "hostname" was
     *   actually an IP address (and thus has no base domain or
     *   public suffix).
     */
    IS_IP_ADDRESS,
    /**
     * The passed-in hostname
     *   did not have enough components. Eg, calling
     *   [func`tld_get_base_domain]` on <literal>"co.uk"</literal>.
     */
    NOT_ENOUGH_DOMAINS,
    /**
     * The passed-in hostname has
     *   no recognized public suffix.
     */
    NO_BASE_DOMAIN,
    /**
     * The Public Suffix List was not
     *   available.
     */
    NO_PSL_DATA,
}
/**
 * Enum values passed to [func`uri_copy]` to indicate the components of
 * the URI that should be updated with the given values.
 */
export enum URIComponent {
    /**
     * no component
     */
    NONE,
    /**
     * the URI scheme component
     */
    SCHEME,
    /**
     * the URI user component
     */
    USER,
    /**
     * the URI password component
     */
    PASSWORD,
    /**
     * the URI authentication parameters component
     */
    AUTH_PARAMS,
    /**
     * the URI host component
     */
    HOST,
    /**
     * the URI port component
     */
    PORT,
    /**
     * the URI path component
     */
    PATH,
    /**
     * the URI query component
     */
    QUERY,
    /**
     * the URI fragment component
     */
    FRAGMENT,
}
/**
 * Pre-defined close codes that can be passed to
 * [method`WebsocketConnection`.close] or received from
 * [method`WebsocketConnection`.get_close_code].
 * 
 * However, other codes are also allowed.
 */
export enum WebsocketCloseCode {
    /**
     * a normal, non-error close
     */
    NORMAL,
    /**
     * the client/server is going away
     */
    GOING_AWAY,
    /**
     * a protocol error occurred
     */
    PROTOCOL_ERROR,
    /**
     * the endpoint received data
     *   of a type that it does not support.
     */
    UNSUPPORTED_DATA,
    /**
     * reserved value indicating that
     *   no close code was present; must not be sent.
     */
    NO_STATUS,
    /**
     * reserved value indicating that
     *   the connection was closed abnormally; must not be sent.
     */
    ABNORMAL,
    /**
     * the endpoint received data that
     *   was invalid (eg, non-UTF-8 data in a text message).
     */
    BAD_DATA,
    /**
     * generic error code
     *   indicating some sort of policy violation.
     */
    POLICY_VIOLATION,
    /**
     * the endpoint received a message
     *   that is too big to process.
     */
    TOO_BIG,
    /**
     * the client is closing the
     *   connection because the server failed to negotiate a required
     *   extension.
     */
    NO_EXTENSION,
    /**
     * the server is closing the
     *   connection because it was unable to fulfill the request.
     */
    SERVER_ERROR,
    /**
     * reserved value indicating that
     *   the TLS handshake failed; must not be sent.
     */
    TLS_HANDSHAKE,
}
/**
 * The type of a [class`WebsocketConnection]`.
 */
export enum WebsocketConnectionType {
    /**
     * unknown/invalid connection
     */
    UNKNOWN,
    /**
     * a client-side connection
     */
    CLIENT,
    /**
     * a server-side connection
     */
    SERVER,
}
/**
 * The type of data contained in a [signal`WebsocketConnection:`:message] signal.
 */
export enum WebsocketDataType {
    /**
     * UTF-8 text
     */
    TEXT,
    /**
     * binary data
     */
    BINARY,
}
/**
 * WebSocket-related errors.
 */
export enum WebsocketError {
    /**
     * a generic error
     */
    FAILED,
    /**
     * attempted to handshake with a
     *   server that does not appear to understand WebSockets.
     */
    NOT_WEBSOCKET,
    /**
     * the WebSocket handshake failed
     *   because some detail was invalid (eg, incorrect accept key).
     */
    BAD_HANDSHAKE,
    /**
     * the WebSocket handshake failed
     *   because the "Origin" header was not an allowed value.
     */
    BAD_ORIGIN,
}
/**
 * The state of the WebSocket connection.
 */
export enum WebsocketState {
    /**
     * the connection is ready to send messages
     */
    OPEN,
    /**
     * the connection is in the process of
     *   closing down; messages may be received, but not sent
     */
    CLOSING,
    /**
     * the connection is completely closed down
     */
    CLOSED,
}
/**
 * Indicates if a message should or shouldn't be cached.
 * @bitfield 
 */
export enum Cacheability {
    /**
     * The message should be cached
     */
    CACHEABLE,
    /**
     * The message shouldn't be cached
     */
    UNCACHEABLE,
    /**
     * The messages cache should be invalidated
     */
    INVALIDATES,
    /**
     * The messages cache should be updated
     */
    VALIDATES,
}
/**
 * Represents the parsed value of the "Expect" header.
 * @bitfield 
 */
export enum Expectation {
    /**
     * any unrecognized expectation
     */
    UNRECOGNIZED,
    /**
     * "100-continue"
     */
    CONTINUE,
}
/**
 * Various flags that can be set on a #SoupMessage to alter its
 * behavior.
 * @bitfield 
 */
export enum MessageFlags {
    /**
     * The session should not follow redirect
     *   (3xx) responses received by this message.
     */
    NO_REDIRECT,
    /**
     * Requests that the message should be
     *   sent on a newly-created connection, not reusing an existing
     *   persistent connection. Note that messages with non-idempotent
     *   [property`Message:`method]s behave this way by default, unless
     *   #SOUP_MESSAGE_IDEMPOTENT is set.
     */
    NEW_CONNECTION,
    /**
     * The message is considered idempotent,
     *   regardless its [property`Message:`method], and allows reuse of existing
     *   idle connections, instead of always requiring a new one, unless
     *   #SOUP_MESSAGE_NEW_CONNECTION is set.
     */
    IDEMPOTENT,
    /**
     * The [class`AuthManager]` should not use
     *   the credentials cache for this message, neither to use cached credentials
     *   to automatically authenticate this message nor to cache the credentials
     *   after the message is successfully authenticated. This applies to both server
     *   and proxy authentication. Note that [signal`Message:`:authenticate] signal will
     *   be emitted, if you want to disable authentication for a message use
     *   [method`Message`.disable_feature] passing #SOUP_TYPE_AUTH_MANAGER instead.
     */
    DO_NOT_USE_AUTH_CACHE,
    /**
     * Metrics will be collected for this message.
     */
    COLLECT_METRICS,
}
/**
 * Options to pass to [method`Server`.listen], etc.
 * 
 * %SOUP_SERVER_LISTEN_IPV4_ONLY and %SOUP_SERVER_LISTEN_IPV6_ONLY
 * only make sense with [method`Server`.listen_all] and
 * [method`Server`.listen_local], not plain [method`Server`.listen] (which
 * simply listens on whatever kind of socket you give it). And you
 * cannot specify both of them in a single call.
 * @bitfield 
 */
export enum ServerListenOptions {
    /**
     * Listen for https connections rather
     *   than plain http.
     */
    HTTPS,
    /**
     * Only listen on IPv4 interfaces.
     */
    IPV4_ONLY,
    /**
     * Only listen on IPv6 interfaces.
     */
    IPV6_ONLY,
}
/**
 * A constant corresponding to 1 day.
 * 
 * For use with [ctor`Cookie`.new] and [method`Cookie`.set_max_age].
 */
export const COOKIE_MAX_AGE_ONE_DAY: number
/**
 * A constant corresponding to 1 hour.
 * 
 * For use with [ctor`Cookie`.new] and [method`Cookie`.set_max_age].
 */
export const COOKIE_MAX_AGE_ONE_HOUR: number
/**
 * A constant corresponding to 1 week.
 * 
 * For use with [ctor`Cookie`.new] and [method`Cookie`.set_max_age].
 */
export const COOKIE_MAX_AGE_ONE_WEEK: number
/**
 * A constant corresponding to 1 year.
 * 
 * For use with [ctor`Cookie`.new] and [method`Cookie`.set_max_age].
 */
export const COOKIE_MAX_AGE_ONE_YEAR: number
/**
 * A macro containing the value
 * `multipart/form-data`; the MIME type used for
 * posting form data that contains files to be uploaded.
 */
export const FORM_MIME_TYPE_MULTIPART: string
/**
 * A macro containing the value
 * `application/x-www-form-urlencoded`; the default
 * MIME type for POSTing HTML form data.
 */
export const FORM_MIME_TYPE_URLENCODED: string
/**
 * An expiration date that is always in the past.
 */
export const HSTS_POLICY_MAX_AGE_PAST: number
/**
 * The set of #GUriFlags libsoup expects all #GUri to use.
 */
export const HTTP_URI_FLAGS: number
/**
 * Like [func`get_major_version]`, but from the headers used at application
 * compile time, rather than from the library linked against at application run
 * time.
 */
export const MAJOR_VERSION: number
/**
 * Like [func`get_micro_version]`, but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MICRO_VERSION: number
/**
 * Like [func`get_minor_version]`, but from the headers used at
 * application compile time, rather than from the library linked
 * against at application run time.
 */
export const MINOR_VERSION: number
/**
 * A macro that should be defined by the user prior to including
 * `libsoup.h`.
 * 
 * The definition should be one of the predefined libsoup
 * version macros: %SOUP_VERSION_2_24, %SOUP_VERSION_2_26, ...
 * 
 * This macro defines the earliest version of libsoup that the package
 * is required to be able to compile against.
 * 
 * If the compiler is configured to warn about the use of deprecated
 * functions, then using functions that were deprecated in version
 * %SOUP_VERSION_MIN_REQUIRED or earlier will cause warnings (but
 * using functions deprecated in later releases will not).
 */
export const VERSION_MIN_REQUIRED: number
/**
 * Like [func`CHECK_VERSION]`, but the check for soup_check_version is
 * at runtime instead of compile time.
 * 
 * This is useful for compiling against older versions of libsoup, but using
 * features from newer versions.
 * @param major the major version to check
 * @param minor the minor version to check
 * @param micro the micro version to check
 */
export function checkVersion(major: number, minor: number, micro: number): boolean
/**
 * Parses `header` and returns a #SoupCookie.
 * 
 * If `header` contains multiple cookies, only the first one will be parsed.
 * 
 * If `header` does not have "path" or "domain" attributes, they will
 * be defaulted from `origin`. If `origin` is %NULL, path will default
 * to "/", but domain will be left as %NULL. Note that this is not a
 * valid state for a #SoupCookie, and you will need to fill in some
 * appropriate string for the domain if you want to actually make use
 * of the cookie.
 * @param header a cookie string (eg, the value of a Set-Cookie header)
 * @param origin origin of the cookie
 */
export function cookieParse(header: string, origin: GLib.Uri | null): Cookie | null
/**
 * Parses `msg'`s Cookie request header and returns a [struct`GLib`.SList] of
 * `SoupCookie`s.
 * 
 * As the "Cookie" header, unlike "Set-Cookie", only contains cookie names and
 * values, none of the other #SoupCookie fields will be filled in. (Thus, you
 * can't generally pass a cookie returned from this method directly to
 * [func`cookies_to_response]`.)
 * @param msg a #SoupMessage containing a "Cookie" request header
 */
export function cookiesFromRequest(msg: Message): Cookie[]
/**
 * Parses `msg'`s Set-Cookie response headers and returns a [struct`GLib`.SList]
 * of `SoupCookie`s.
 * 
 * Cookies that do not specify "path" or "domain" attributes will have their
 * values defaulted from `msg`.
 * @param msg a #SoupMessage containing a "Set-Cookie" response header
 */
export function cookiesFromResponse(msg: Message): Cookie[]
/**
 * Serializes a [struct`GLib`.SList] of #SoupCookie into a string suitable for
 * setting as the value of the "Cookie" header.
 * @param cookies a #GSList of #SoupCookie
 */
export function cookiesToCookieHeader(cookies: Cookie[]): string
/**
 * Adds the name and value of each cookie in `cookies` to `msg'`s
 * "Cookie" request.
 * 
 * If `msg` already has a "Cookie" request header, these cookies will be appended
 * to the cookies already present. Be careful that you do not append the same
 * cookies twice, eg, when requeuing a message.
 * @param cookies a #GSList of #SoupCookie
 * @param msg a #SoupMessage
 */
export function cookiesToRequest(cookies: Cookie[], msg: Message): void
/**
 * Appends a "Set-Cookie" response header to `msg` for each cookie in
 * `cookies`.
 * 
 * This is in addition to any other "Set-Cookie" headers
 * `msg` may already have.
 * @param cookies a #GSList of #SoupCookie
 * @param msg a #SoupMessage
 */
export function cookiesToResponse(cookies: Cookie[], msg: Message): void
/**
 * Parses `date_string` and tries to extract a date from it.
 * 
 * This recognizes all of the "HTTP-date" formats from RFC 2616, RFC 2822 dates,
 * and reasonable approximations thereof. (Eg, it is lenient about whitespace,
 * leading "0"s, etc.)
 * @param dateString The date as a string
 */
export function dateTimeNewFromHttpString(dateString: string): GLib.DateTime | null
/**
 * Converts `date` to a string in the format described by `format`.
 * @param date a #GDateTime
 * @param format the format to generate the date in
 */
export function dateTimeToString(date: GLib.DateTime, format: DateFormat): string
/**
 * Decodes `form`.
 * 
 * which is an urlencoded dataset as defined in the HTML 4.01 spec.
 * @param encodedForm data of type "application/x-www-form-urlencoded"
 */
export function formDecode(encodedForm: string): GLib.HashTable
/**
 * Decodes the "multipart/form-data" request in `multipart`.
 * 
 * this is a convenience method for the case when you have a single file upload
 * control in a form. (Or when you don't have any file upload controls, but are
 * still using "multipart/form-data" anyway.) Pass the name of the file upload
 * control in `file_control_name,` and [func`form_decode_multipart]` will extract
 * the uploaded file data into `filename,` `content_type,` and `file`. All of the
 * other form control data will be returned (as strings, as with
 * [func`form_decode]` in the returned [struct`GLib`.HashTable].
 * 
 * You may pass %NULL for `filename,` `content_type` and/or `file` if you do not
 * care about those fields. [func`form_decode_multipart]` may also
 * return %NULL in those fields if the client did not provide that
 * information. You must free the returned filename and content-type
 * with [func`GLib`.free], and the returned file data with [method`Glib`.Bytes.unref].
 * 
 * If you have a form with more than one file upload control, you will
 * need to decode it manually, using [ctor`Multipart`.new_from_message]
 * and [method`Multipart`.get_part].
 * @param multipart a #SoupMultipart
 * @param fileControlName the name of the HTML file upload control
 */
export function formDecodeMultipart(multipart: Multipart, fileControlName: string | null): [ /* returnType */ GLib.HashTable | null, /* filename */ string, /* contentType */ string, /* file */ any ]
/**
 * Encodes `form_data_set` into a value of type
 * "application/x-www-form-urlencoded".
 * 
 * Encodes as defined in the HTML 4.01 spec. Unlike [func`form_encode_hash]`,
 * this preserves the ordering of the form elements, which may be required in
 * some situations.
 * 
 * See also: [ctor`Message`.new_from_encoded_form].
 * @param formDataSet a datalist containing name/value pairs
 */
export function formEncodeDatalist(formDataSet: GLib.Data): string
/**
 * Encodes `form_data_set` into a value of type
 * "application/x-www-form-urlencoded".
 * 
 * Encodes as defined in the HTML 4.01 spec.
 * 
 * Note that the HTML spec states that "The control names/values are
 * listed in the order they appear in the document." Since this method
 * takes a hash table, it cannot enforce that; if you care about the
 * ordering of the form fields, use [func`form_encode_datalist]`.
 * 
 * See also: [ctor`Message`.new_from_encoded_form].
 * @param formDataSet a hash table containing   name/value pairs (as strings)
 */
export function formEncodeHash(formDataSet: GLib.HashTable): string
/**
 * Returns the major version number of the libsoup library.
 * 
 * e.g. in libsoup version 2.42.0 this is 2.
 * 
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MAJOR_VERSION
 * macro, which represents the major version of the libsoup headers you
 * have included when compiling your code.
 */
export function getMajorVersion(): number
/**
 * Returns the micro version number of the libsoup library.
 * 
 * e.g. in libsoup version 2.42.0 this is 0.
 * 
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MICRO_VERSION
 * macro, which represents the micro version of the libsoup headers you
 * have included when compiling your code.
 */
export function getMicroVersion(): number
/**
 * Returns the minor version number of the libsoup library.
 * 
 * e.g. in libsoup version 2.42.0 this is 42.
 * 
 * This function is in the library, so it represents the libsoup library
 * your code is running against. Contrast with the #SOUP_MINOR_VERSION
 * macro, which represents the minor version of the libsoup headers you
 * have included when compiling your code.
 */
export function getMinorVersion(): number
/**
 * Parses `header` to see if it contains the token `token` (matched
 * case-insensitively).
 * 
 * Note that this can't be used with lists that have qvalues.
 * @param header An HTTP header suitable for parsing with   [func`header_parse_list]`
 * @param token a token
 */
export function headerContains(header: string, token: string): boolean
/**
 * Frees `param_list`.
 * @param paramList a #GHashTable returned from   [func`header_parse_param_list]` or [func`header_parse_semi_param_list]`
 */
export function headerFreeParamList(paramList: GLib.HashTable): void
/**
 * Appends something like `name=value` to `string,` taking care to quote `value`
 * if needed, and if so, to escape any quotes or backslashes in `value`.
 * 
 * Alternatively, if `value` is a non-ASCII UTF-8 string, it will be
 * appended using RFC5987 syntax. Although in theory this is supposed
 * to work anywhere in HTTP that uses this style of parameter, in
 * reality, it can only be used portably with the Content-Disposition
 * "filename" parameter.
 * 
 * If `value` is %NULL, this will just append `name` to `string`.
 * @param string a #GString being used to construct an HTTP header value
 * @param name a parameter name
 * @param value a parameter value, or %NULL
 */
export function headerGStringAppendParam(string: GLib.String, name: string, value: string): void
/**
 * Appends something like `name="value"` to
 * `string,` taking care to escape any quotes or backslashes in `value`.
 * 
 * If `value` is (non-ASCII) UTF-8, this will instead use RFC 5987
 * encoding, just like [func`header_g_string_append_param]`.
 * @param string a #GString being used to construct an HTTP header value
 * @param name a parameter name
 * @param value a parameter value
 */
export function headerGStringAppendParamQuoted(string: GLib.String, name: string, value: string): void
/**
 * Parses a header whose content is described by RFC2616 as `#something`.
 * 
 * "something" does not itself contain commas, except as part of quoted-strings.
 * @param header a header value
 */
export function headerParseList(header: string): string[]
/**
 * Parses a header which is a comma-delimited list of something like:
 * `token [ "=" ( token | quoted-string ) ]`.
 * 
 * Tokens that don't have an associated value will still be added to
 * the resulting hash table, but with a %NULL value.
 * 
 * This also handles RFC5987 encoding (which in HTTP is mostly used
 * for giving UTF8-encoded filenames in the Content-Disposition
 * header).
 * @param header a header value
 */
export function headerParseParamList(header: string): GLib.HashTable
/**
 * A strict version of [func`header_parse_param_list]`
 * that bails out if there are duplicate parameters.
 * 
 * Note that this function will treat RFC5987-encoded
 * parameters as duplicated if an ASCII version is also
 * present. For header fields that might contain
 * RFC5987-encoded parameters, use
 * [func`header_parse_param_list]` instead.
 * @param header a header value
 */
export function headerParseParamListStrict(header: string): GLib.HashTable | null
/**
 * Parses a header whose content is a list of items with optional
 * "qvalue"s (eg, Accept, Accept-Charset, Accept-Encoding,
 * Accept-Language, TE).
 * 
 * If `unacceptable` is not %NULL, then on return, it will contain the
 * items with qvalue 0. Either way, those items will be removed from
 * the main list.
 * @param header a header value
 */
export function headerParseQualityList(header: string): [ /* returnType */ string[], /* unacceptable */ string[] ]
/**
 * Parses a header which is a semicolon-delimited list of something
 * like: `token [ "=" ( token | quoted-string ) ]`.
 * 
 * Tokens that don't have an associated value will still be added to
 * the resulting hash table, but with a %NULL value.
 * 
 * This also handles RFC5987 encoding (which in HTTP is mostly used
 * for giving UTF8-encoded filenames in the Content-Disposition
 * header).
 * @param header a header value
 */
export function headerParseSemiParamList(header: string): GLib.HashTable
/**
 * A strict version of [func`header_parse_semi_param_list]`
 * that bails out if there are duplicate parameters.
 * 
 * Note that this function will treat RFC5987-encoded
 * parameters as duplicated if an ASCII version is also
 * present. For header fields that might contain
 * RFC5987-encoded parameters, use
 * [func`header_parse_semi_param_list]` instead.
 * @param header a header value
 */
export function headerParseSemiParamListStrict(header: string): GLib.HashTable | null
/**
 * Parses the headers of an HTTP request or response in `str` and
 * stores the results in `dest`.
 * 
 * Beware that `dest` may be modified even on failure.
 * 
 * This is a low-level method; normally you would use
 * [func`headers_parse_request]` or [func`headers_parse_response]`.
 * @param str the header string (including the Request-Line or Status-Line,   but not the trailing blank line)
 * @param len length of `str`
 * @param dest #SoupMessageHeaders to store the header values in
 */
export function headersParse(str: string, len: number, dest: MessageHeaders): boolean
/**
 * Parses the headers of an HTTP request in `str` and stores the
 * results in `req_method,` `req_path,` `ver,` and `req_headers`.
 * 
 * Beware that `req_headers` may be modified even on failure.
 * @param str the headers (up to, but not including, the trailing blank line)
 * @param len length of `str`
 * @param reqHeaders #SoupMessageHeaders to store the header values in
 */
export function headersParseRequest(str: string, len: number, reqHeaders: MessageHeaders): [ /* returnType */ number, /* reqMethod */ string, /* reqPath */ string, /* ver */ HTTPVersion ]
/**
 * Parses the headers of an HTTP response in `str` and stores the
 * results in `ver,` `status_code,` `reason_phrase,` and `headers`.
 * 
 * Beware that `headers` may be modified even on failure.
 * @param str the headers (up to, but not including, the trailing blank line)
 * @param len length of `str`
 * @param headers #SoupMessageHeaders to store the header values in
 */
export function headersParseResponse(str: string, len: number, headers: MessageHeaders): [ /* returnType */ boolean, /* ver */ HTTPVersion, /* statusCode */ number, /* reasonPhrase */ string ]
/**
 * Parses the HTTP Status-Line string in `status_line` into `ver,`
 * `status_code,` and `reason_phrase`.
 * 
 * `status_line` must be terminated by either "\0" or "\r\n".
 * @param statusLine an HTTP Status-Line
 */
export function headersParseStatusLine(statusLine: string): [ /* returnType */ boolean, /* ver */ HTTPVersion, /* statusCode */ number, /* reasonPhrase */ string ]
/**
 * Initializes `iter` for iterating `hdrs`.
 * @param hdrs a %SoupMessageHeaders
 */
export function messageHeadersIterInit(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
/**
 * Registers error quark for SoupSession if needed.
 */
export function sessionErrorQuark(): GLib.Quark
/**
 * Looks up the stock HTTP description of `status_code`.
 * 
 * *There is no reason for you to ever use this
 * function.* If you wanted the textual description for the
 * [property`Message:`status-code] of a given [class`Message]`, you should just
 * look at the message's [property`Message:`reason-phrase]. However, you
 * should only do that for use in debugging messages; HTTP reason
 * phrases are not localized, and are not generally very descriptive
 * anyway, and so they should never be presented to the user directly.
 * Instead, you should create you own error messages based on the
 * status code, and on what you were trying to do.
 * @param statusCode an HTTP status code
 */
export function statusGetPhrase(statusCode: number): string
/**
 * Looks whether the `domain` passed as argument is a public domain
 * suffix (.org, .com, .co.uk, etc) or not.
 * 
 * Prior to libsoup 2.46, this function required that `domain` be in
 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
 * UTF-8 or ASCII format.
 * @param domain a domain name
 */
export function tldDomainIsPublicSuffix(domain: string): boolean
/**
 * Registers error quark for soup_tld_get_base_domain() if needed.
 */
export function tldErrorQuark(): GLib.Quark
/**
 * Finds the base domain for a given `hostname`
 * 
 * The base domain is composed by the top level domain (such as .org, .com,
 * .co.uk, etc) plus the second level domain, for example for
 * myhost.mydomain.com it will return mydomain.com.
 * 
 * Note that %NULL will be returned for private URLs (those not ending
 * with any well known TLD) because choosing a base domain for them
 * would be totally arbitrary.
 * 
 * Prior to libsoup 2.46, this function required that `hostname` be in
 * UTF-8 if it was an IDN. From 2.46 on, the name can be in either
 * UTF-8 or ASCII format (and the return value will be in the same
 * format).
 * @param hostname a hostname
 */
export function tldGetBaseDomain(hostname: string): string
/**
 * Decodes the given data URI and returns its contents and `content_type`.
 * @param uri a data URI, in string form
 */
export function uriDecodeDataUri(uri: string): [ /* returnType */ any, /* contentType */ string | null ]
/**
 * Tests whether or not `uri1` and `uri2` are equal in all parts.
 * @param uri1 a #GUri
 * @param uri2 another #GUri
 */
export function uriEqual(uri1: GLib.Uri, uri2: GLib.Uri): boolean
/**
 * Adds the necessary headers to `msg` to request a WebSocket
 * handshake including supported WebSocket extensions.
 * 
 * The message body and non-WebSocket-related headers are
 * not modified.
 * 
 * This is a low-level function; if you use
 * [method`Session`.websocket_connect_async] to create a WebSocket connection, it
 * will call this for you.
 * @param msg a #SoupMessage
 * @param origin the "Origin" header to set
 * @param protocols list of   protocols to offer
 * @param supportedExtensions list   of supported extension types
 */
export function websocketClientPrepareHandshake(msg: Message, origin: string | null, protocols: string[] | null, supportedExtensions: GObject.TypeClass[] | null): void
/**
 * Looks at the response status code and headers in `msg` and
 * determines if they contain a valid WebSocket handshake response
 * (given the handshake request in `msg'`s request headers).
 * 
 * If `supported_extensions` is non-%NULL, extensions included in the
 * response "Sec-WebSocket-Extensions" are verified too. Accepted
 * extensions are returned in `accepted_extensions` parameter if non-%NULL.
 * 
 * This is a low-level function; if you use
 * [method`Session`.websocket_connect_async] to create a WebSocket
 * connection, it will call this for you.
 * @param msg #SoupMessage containing both client and server sides of a   WebSocket handshake
 * @param supportedExtensions list   of supported extension types
 */
export function websocketClientVerifyHandshake(msg: Message, supportedExtensions: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] ]
/**
 * Registers error quark for SoupWebsocket if needed.
 */
export function websocketErrorQuark(): GLib.Quark
/**
 * Examines the method and request headers in `msg` and determines
 * whether `msg` contains a valid handshake request.
 * 
 * If `origin` is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If `protocols` is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted. If `supported_extensions` is non-%NULL, then
 * only requests containing valid supported extensions in
 * "Sec-WebSocket-Extensions" header will be accepted.
 * 
 * Normally [func`websocket_server_process_handshake]`
 * will take care of this for you, and if you use
 * [method`Server`.add_websocket_handler] to handle accepting WebSocket
 * connections, it will call that for you. However, this function may
 * be useful if you need to perform more complicated validation; eg,
 * accepting multiple different Origins, or handling different protocols
 * depending on the path.
 * @param msg #SoupServerMessage containing the client side of a WebSocket handshake
 * @param origin expected Origin header
 * @param protocols allowed WebSocket   protocols.
 * @param supportedExtensions list   of supported extension types
 */
export function websocketServerCheckHandshake(msg: ServerMessage, origin: string | null, protocols: string[] | null, supportedExtensions: GObject.TypeClass[] | null): boolean
/**
 * Examines the method and request headers in `msg` and (assuming `msg`
 * contains a valid handshake request), fills in the handshake
 * response.
 * 
 * If `expected_origin` is non-%NULL, then only requests containing a matching
 * "Origin" header will be accepted. If `protocols` is non-%NULL, then
 * only requests containing a compatible "Sec-WebSocket-Protocols"
 * header will be accepted. If `supported_extensions` is non-%NULL, then
 * only requests containing valid supported extensions in
 * "Sec-WebSocket-Extensions" header will be accepted. The accepted extensions
 * will be returned in `accepted_extensions` parameter if non-%NULL.
 * 
 * This is a low-level function; if you use
 * [method`Server`.add_websocket_handler] to handle accepting WebSocket
 * connections, it will call this for you.
 * @param msg #SoupServerMessage containing the client side of a WebSocket handshake
 * @param expectedOrigin expected Origin header
 * @param protocols allowed WebSocket   protocols.
 * @param supportedExtensions list   of supported extension types
 */
export function websocketServerProcessHandshake(msg: ServerMessage, expectedOrigin: string | null, protocols: string[] | null, supportedExtensions: GObject.TypeClass[] | null): [ /* returnType */ boolean, /* acceptedExtensions */ WebsocketExtension[] ]
/**
 * Callback used by #SoupAuthDomainBasic for authentication purposes.
 * 
 * The application should verify that `username` and `password` and valid
 * and return %TRUE or %FALSE.
 * 
 * If you are maintaining your own password database (rather than
 * using the password to authenticate against some other system like
 * PAM or a remote server), you should make sure you know what you are
 * doing. In particular, don't store cleartext passwords, or
 * easily-computed hashes of cleartext passwords, even if you don't
 * care that much about the security of your server, because users
 * will frequently use the same password for multiple sites, and so
 * compromising any site with a cleartext (or easily-cracked) password
 * database may give attackers access to other more-interesting sites
 * as well.
 * @callback 
 * @param domain the domain
 * @param msg the message being authenticated
 * @param username the username provided by the client
 * @param password the password provided by the client
 */
export interface AuthDomainBasicAuthCallback {
    (domain: AuthDomainBasic, msg: ServerMessage, username: string, password: string): boolean
}
/**
 * Callback used by #SoupAuthDomainDigest for authentication purposes.
 * 
 * The application should look up `username` in its password database,
 * and return the corresponding encoded password (see
 * [func`AuthDomainDigest`.encode_password].
 * @callback 
 * @param domain the domain
 * @param msg the message being authenticated
 * @param username the username provided by the client
 */
export interface AuthDomainDigestAuthCallback {
    (domain: AuthDomainDigest, msg: ServerMessage, username: string): string | null
}
/**
 * The prototype for a #SoupAuthDomain filter.
 * 
 * See [method`AuthDomain`.set_filter] for details.
 * @callback 
 * @param domain a #SoupAuthDomain
 * @param msg a #SoupServerMessage
 */
export interface AuthDomainFilter {
    (domain: AuthDomain, msg: ServerMessage): boolean
}
/**
 * The prototype for a #SoupAuthDomain generic authentication callback.
 * 
 * The callback should look up the user's password, call
 * [method`AuthDomain`.check_password], and use the return value from that method
 * as its own return value.
 * 
 * In general, for security reasons, it is preferable to use the
 * auth-domain-specific auth callbacks (eg,
 * [callback`AuthDomainBasicAuthCallback]` and
 * [callback`AuthDomainDigestAuthCallback]`), because they don't require
 * keeping a cleartext password database. Most users will use the same
 * password for many different sites, meaning if any site with a
 * cleartext password database is compromised, accounts on other
 * servers might be compromised as well. For many of the cases where
 * [class`Server]` is used, this is not really relevant, but it may still
 * be worth considering.
 * @callback 
 * @param domain a #SoupAuthDomain
 * @param msg the #SoupServerMessage being authenticated
 * @param username the username from `msg`
 */
export interface AuthDomainGenericAuthCallback {
    (domain: AuthDomain, msg: ServerMessage, username: string): boolean
}
/**
 * The prototype for a logging filter.
 * 
 * The filter callback will be invoked for each request or response, and should
 * analyze it and return a [enum`LoggerLogLevel]` value indicating how much of
 * the message to log.
 * @callback 
 * @param logger the #SoupLogger
 * @param msg the message being logged
 */
export interface LoggerFilter {
    (logger: Logger, msg: Message): LoggerLogLevel
}
/**
 * The prototype for a custom printing callback.
 * 
 * `level` indicates what kind of information is being printed. Eg, it
 * will be %SOUP_LOGGER_LOG_HEADERS if `data` is header data.
 * 
 * `direction` is either '<', '>', or ' ', and `data` is the single line
 * to print; the printer is expected to add a terminating newline.
 * 
 * To get the effect of the default printer, you would do:
 * 
 * ```c
 * printf ("%c %s\n", direction, data);
 * ```
 * @callback 
 * @param logger the #SoupLogger
 * @param level the level of the information being printed.
 * @param direction a single-character prefix to `data`
 * @param data data to print
 */
export interface LoggerPrinter {
    (logger: Logger, level: LoggerLogLevel, direction: number, data: string): void
}
/**
 * The callback passed to [method`MessageHeaders`.foreach].
 * @callback 
 * @param name the header name
 * @param value the header value
 */
export interface MessageHeadersForeachFunc {
    (name: string, value: string): void
}
/**
 * A callback used to handle requests to a [class`Server]`.
 * 
 * `path` and `query` contain the likewise-named components of the
 * Request-URI, subject to certain assumptions. By default,
 * [class`Server]` decodes all percent-encoding in the URI path, such that
 * `"/foo%2Fbar"` is treated the same as `"/foo/bar"`. If your
 * server is serving resources in some non-POSIX-filesystem namespace,
 * you may want to distinguish those as two distinct paths. In that
 * case, you can set the [property`Server:`raw-paths] property when creating
 * the [class`Server]`, and it will leave those characters undecoded.
 * 
 * `query` contains the query component of the Request-URI parsed according to
 * the rules for HTML form handling. Although this is the only commonly-used
 * query string format in HTTP, there is nothing that actually requires that
 * HTTP URIs use that format; if your server needs to use some other format, you
 * can just ignore `query,` and call [method`Message`.get_uri] and parse the URI's
 * query field yourself.
 * 
 * See [method`Server`.add_handler] and [method`Server`.add_early_handler]
 * for details of what handlers can/should do.
 * @callback 
 * @param server the #SoupServer
 * @param msg the message being processed
 * @param path the path component of `msg'`s Request-URI
 * @param query the parsed query   component of `msg'`s Request-URI
 */
export interface ServerCallback {
    (server: Server, msg: ServerMessage, path: string, query: GLib.HashTable | null): void
}
/**
 * A callback used to handle WebSocket requests to a #SoupServer.
 * 
 * The callback will be invoked after sending the handshake response back to the
 * client (and is only invoked if the handshake was successful).
 * 
 * `path` contains the path of the Request-URI, subject to the same
 * rules as [callback`ServerCallback]` `(qv)`.
 * @callback 
 * @param server the #SoupServer
 * @param msg the #SoupServerMessage
 * @param path the path component of `msg'`s Request-URI
 * @param connection the newly created WebSocket connection
 */
export interface ServerWebsocketCallback {
    (server: Server, msg: ServerMessage, path: string, connection: WebsocketConnection): void
}
export module SessionFeature {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SessionFeature {

    // Class property signals of Soup-3.0.Soup.SessionFeature

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Interface for miscellaneous [class`Session]` features.
 * 
 * #SoupSessionFeature is the interface used by classes that extend
 * the functionality of a [class`Session]`. Some features like HTTP
 * authentication handling are implemented internally via
 * `SoupSessionFeature`s. Other features can be added to the session
 * by the application. (Eg, [class`Logger]`, [class`CookieJar]`.)
 * 
 * See [method`Session`.add_feature], etc, to add a feature to a session.
 * @interface 
 */
export class SessionFeature extends GObject.Object {

    // Own properties of Soup-3.0.Soup.SessionFeature

    static name: string

    // Constructors of Soup-3.0.Soup.SessionFeature

    constructor(config?: SessionFeature.ConstructorProperties) 
    _init(config?: SessionFeature.ConstructorProperties): void
}

export module Auth {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.Auth

        /**
         * The authority (host:port) being authenticated to.
         */
        authority?: string | null
        /**
         * Whether or not the auth is for a proxy server.
         */
        isForProxy?: boolean | null
        /**
         * The authentication realm.
         */
        realm?: string | null
    }

}

export interface Auth {

    // Own properties of Soup-3.0.Soup.Auth

    /**
     * The authority (host:port) being authenticated to.
     */
    authority: string
    // Has conflict: readonly isAuthenticated: boolean
    /**
     * Whether or not the auth has been cancelled.
     */
    readonly isCancelled: boolean
    /**
     * Whether or not the auth is for a proxy server.
     */
    isForProxy: boolean
    /**
     * The authentication realm.
     */
    realm: string
    /**
     * The authentication scheme name.
     */
    readonly schemeName: string

    // Own fields of Soup-3.0.Soup.Auth

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.Auth

    // Has conflict: authenticate(username: string, password: string): void
    // Has conflict: canAuthenticate(): boolean
    /**
     * Call this on an auth to cancel it.
     * 
     * You need to cancel an auth to complete an asynchronous authenticate operation
     * when no credentials are provided ([method`Auth`.authenticate] is not called).
     * The #SoupAuth will be cancelled on dispose if it hans't been authenticated.
     */
    cancel(): void
    /**
     * Returns the authority (host:port) that `auth` is associated with.
     */
    getAuthority(): string
    // Has conflict: getAuthorization(msg: Message): string
    /**
     * Gets an opaque identifier for `auth`.
     * 
     * The identifier can be used as a hash key or the like. #SoupAuth objects from
     * the same server with the same identifier refer to the same authentication
     * domain (eg, the URLs associated with them take the same usernames and
     * passwords).
     */
    getInfo(): string
    // Has conflict: getProtectionSpace(sourceUri: GLib.Uri): string[]
    /**
     * Returns `auth'`s realm.
     * 
     * This is an identifier that distinguishes separate authentication spaces on a
     * given server, and may be some string that is meaningful to the user.
     * (Although it is probably not localized.)
     */
    getRealm(): string
    /**
     * soup_auth_get_scheme_name: (attributes org.gtk.Method.get_property=scheme-name)
     * Returns `auth'`s scheme name. (Eg, "Basic", "Digest", or "NTLM")
     */
    getSchemeName(): string
    // Has conflict: isReady(msg: Message): boolean
    // Has conflict: update(msg: Message, authHeader: string): boolean

    // Own virtual methods of Soup-3.0.Soup.Auth

    /**
     * Call this on an auth to authenticate it.
     * 
     * Normally this will cause the auth's message to be requeued with the new
     * authentication info.
     * @virtual 
     * @param username the username provided by the user or client
     * @param password the password provided by the user or client
     */
    authenticate(username: string, password: string): void
    /**
     * Tests if `auth` is able to authenticate by providing credentials to the
     * [method`Auth`.authenticate].
     * @virtual 
     */
    canAuthenticate(): boolean
    /**
     * Generates an appropriate "Authorization" header for `msg`.
     * 
     * (The session will only call this if [method`Auth`.is_authenticated] returned
     * %TRUE.)
     * @virtual 
     * @param msg the #SoupMessage to be authorized
     */
    getAuthorization(msg: Message): string
    /**
     * Returns a list of paths on the server which `auth` extends over.
     * 
     * (All subdirectories of these paths are also assumed to be part
     * of `auth'`s protection space, unless otherwise discovered not to
     * be.)
     * @virtual 
     * @param sourceUri the URI of the request that `auth` was generated in   response to.
     */
    getProtectionSpace(sourceUri: GLib.Uri): string[]
    /**
     * Tests if `auth` has been given a username and password.
     * @virtual 
     */
    isAuthenticated(): boolean
    /**
     * Tests if `auth` is ready to make a request for `msg` with.
     * 
     * For most auths, this is equivalent to [method`Auth`.is_authenticated], but for
     * some auth types (eg, NTLM), the auth may be sendable (eg, as an
     * authentication request) even before it is authenticated.
     * @virtual 
     * @param msg a #SoupMessage
     */
    isReady(msg: Message): boolean
    /**
     * Updates `auth` with the information from `msg` and `auth_header,`
     * possibly un-authenticating it.
     * 
     * As with [ctor`Auth`.new], this is normally only used by [class`Session]`.
     * @virtual 
     * @param msg the #SoupMessage `auth` is being updated for
     * @param authHeader the WWW-Authenticate/Proxy-Authenticate header
     */
    update(msg: Message, authHeader: GLib.HashTable): boolean

    // Class property signals of Soup-3.0.Soup.Auth

    connect(sigName: "notify::authority", callback: any): number
    on(sigName: "notify::authority", callback: any): number
    once(sigName: "notify::authority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authority", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: any): number
    on(sigName: "notify::is-authenticated", callback: any): number
    once(sigName: "notify::is-authenticated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: any): number
    on(sigName: "notify::is-for-proxy", callback: any): number
    once(sigName: "notify::is-for-proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: any): number
    on(sigName: "notify::scheme-name", callback: any): number
    once(sigName: "notify::scheme-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The abstract base class for handling authentication.
 * 
 * Specific HTTP Authentication mechanisms are implemented by its subclasses,
 * but applications never need to be aware of the specific subclasses being
 * used.
 * 
 * #SoupAuth objects store the authentication data associated with a given bit
 * of web space. They are created automatically by [class`Session]`.
 * @class 
 */
export class Auth extends GObject.Object {

    // Own properties of Soup-3.0.Soup.Auth

    static name: string

    // Constructors of Soup-3.0.Soup.Auth

    constructor(config?: Auth.ConstructorProperties) 
    /**
     * Creates a new #SoupAuth of type `type` with the information from
     * `msg` and `auth_header`.
     * 
     * This is called by [class`Session]`; you will normally not create auths
     * yourself.
     * @constructor 
     * @param type the type of auth to create (a subtype of #SoupAuth)
     * @param msg the #SoupMessage the auth is being created for
     * @param authHeader the WWW-Authenticate/Proxy-Authenticate header
     */
    constructor(type: GObject.GType, msg: Message, authHeader: string) 
    /**
     * Creates a new #SoupAuth of type `type` with the information from
     * `msg` and `auth_header`.
     * 
     * This is called by [class`Session]`; you will normally not create auths
     * yourself.
     * @constructor 
     * @param type the type of auth to create (a subtype of #SoupAuth)
     * @param msg the #SoupMessage the auth is being created for
     * @param authHeader the WWW-Authenticate/Proxy-Authenticate header
     */
    static new(type: GObject.GType, msg: Message, authHeader: string): Auth
    _init(config?: Auth.ConstructorProperties): void
}

export module AuthBasic {

    // Constructor properties interface

    export interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

export interface AuthBasic {

    // Class property signals of Soup-3.0.Soup.AuthBasic

    connect(sigName: "notify::authority", callback: any): number
    on(sigName: "notify::authority", callback: any): number
    once(sigName: "notify::authority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authority", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: any): number
    on(sigName: "notify::is-authenticated", callback: any): number
    once(sigName: "notify::is-authenticated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: any): number
    on(sigName: "notify::is-for-proxy", callback: any): number
    once(sigName: "notify::is-for-proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: any): number
    on(sigName: "notify::scheme-name", callback: any): number
    once(sigName: "notify::scheme-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * HTTP "Basic" authentication.
 * 
 * [class`Session]`s support this by default; if you want to disable
 * support for it, call [method`Session`.remove_feature_by_type],
 * passing %SOUP_TYPE_AUTH_BASIC.
 * @class 
 */
export class AuthBasic extends Auth {

    // Own properties of Soup-3.0.Soup.AuthBasic

    static name: string

    // Constructors of Soup-3.0.Soup.AuthBasic

    constructor(config?: AuthBasic.ConstructorProperties) 
    _init(config?: AuthBasic.ConstructorProperties): void
}

export module AuthDigest {

    // Constructor properties interface

    export interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

export interface AuthDigest {

    // Class property signals of Soup-3.0.Soup.AuthDigest

    connect(sigName: "notify::authority", callback: any): number
    on(sigName: "notify::authority", callback: any): number
    once(sigName: "notify::authority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authority", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: any): number
    on(sigName: "notify::is-authenticated", callback: any): number
    once(sigName: "notify::is-authenticated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: any): number
    on(sigName: "notify::is-for-proxy", callback: any): number
    once(sigName: "notify::is-for-proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: any): number
    on(sigName: "notify::scheme-name", callback: any): number
    once(sigName: "notify::scheme-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * HTTP "Digest" authentication.
 * 
 * [class`Session]`s support this by default; if you want to disable
 * support for it, call [method`Session`.remove_feature_by_type]
 * passing %SOUP_TYPE_AUTH_DIGEST.
 * @class 
 */
export class AuthDigest extends Auth {

    // Own properties of Soup-3.0.Soup.AuthDigest

    static name: string

    // Constructors of Soup-3.0.Soup.AuthDigest

    constructor(config?: AuthDigest.ConstructorProperties) 
    _init(config?: AuthDigest.ConstructorProperties): void
}

export module AuthDomain {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.AuthDomain

        /**
         * The [callback`AuthDomainFilter]` for the domain.
         */
        filter?: AuthDomainFilter | null
        /**
         * Data to pass to the [callback`AuthDomainFilter]`.
         */
        filterData?: object | null
        /**
         * The [callback`AuthDomainGenericAuthCallback]`.
         */
        genericAuthCallback?: AuthDomainGenericAuthCallback | null
        /**
         * The data to pass to the [callback`AuthDomainGenericAuthCallback]`.
         */
        genericAuthData?: object | null
        /**
         * Whether or not this is a proxy auth domain.
         */
        proxy?: boolean | null
        /**
         * The realm of this auth domain.
         */
        realm?: string | null
    }

}

export interface AuthDomain {

    // Own properties of Soup-3.0.Soup.AuthDomain

    /**
     * The [callback`AuthDomainFilter]` for the domain.
     */
    filter: AuthDomainFilter
    /**
     * Data to pass to the [callback`AuthDomainFilter]`.
     */
    filterData: object
    /**
     * The [callback`AuthDomainGenericAuthCallback]`.
     */
    genericAuthCallback: AuthDomainGenericAuthCallback
    /**
     * The data to pass to the [callback`AuthDomainGenericAuthCallback]`.
     */
    genericAuthData: object
    /**
     * Whether or not this is a proxy auth domain.
     */
    readonly proxy: boolean
    /**
     * The realm of this auth domain.
     */
    readonly realm: string

    // Own fields of Soup-3.0.Soup.AuthDomain

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.AuthDomain

    // Has conflict: accepts(msg: ServerMessage): string | null
    /**
     * Adds `path` to `domain`.
     * 
     * Requests under `path` on `domain'`s server will require authentication (unless
     * overridden by [method`AuthDomain`.remove_path] or
     * [method`AuthDomain`.set_filter]).
     * @param path the path to add to `domain`
     */
    addPath(path: string): void
    // Has conflict: challenge(msg: ServerMessage): void
    // Has conflict: checkPassword(msg: ServerMessage, username: string, password: string): boolean
    /**
     * Checks if `domain` requires `msg` to be authenticated (according to
     * its paths and filter function).
     * 
     * This does not actually look at whether `msg` *is* authenticated, merely
     * whether or not it needs to be.
     * 
     * This is used by [class`Server]` internally and is probably of no use to
     * anyone else.
     * @param msg a #SoupServerMessage
     */
    covers(msg: ServerMessage): boolean
    /**
     * Gets the realm name associated with `domain`.
     */
    getRealm(): string
    /**
     * Removes `path` from `domain`.
     * 
     * Requests under `path` on `domain'`s server will NOT require
     * authentication.
     * 
     * This is not simply an undo-er for [method`AuthDomain`.add_path]; it
     * can be used to "carve out" a subtree that does not require
     * authentication inside a hierarchy that does. Note also that unlike
     * with [method`AuthDomain`.add_path], this cannot be overridden by
     * adding a filter, as filters can only bypass authentication that
     * would otherwise be required, not require it where it would
     * otherwise be unnecessary.
     * @param path the path to remove from `domain`
     */
    removePath(path: string): void
    /**
     * Adds `filter` as an authentication filter to `domain`.
     * 
     * The filter gets a chance to bypass authentication for certain requests that
     * would otherwise require it. Eg, it might check the message's path in some way
     * that is too complicated to do via the other methods, or it might check the
     * message's method, and allow GETs but not PUTs.
     * 
     * The filter function returns %TRUE if the request should still
     * require authentication, or %FALSE if authentication is unnecessary
     * for this request.
     * 
     * To help prevent security holes, your filter should return %TRUE by
     * default, and only return %FALSE under specifically-tested
     * circumstances, rather than the other way around. Eg, in the example
     * above, where you want to authenticate PUTs but not GETs, you should
     * check if the method is GET and return %FALSE in that case, and then
     * return %TRUE for all other methods (rather than returning %TRUE for
     * PUT and %FALSE for all other methods). This way if it turned out
     * (now or later) that some paths supported additional methods besides
     * GET and PUT, those methods would default to being NOT allowed for
     * unauthenticated users.
     * 
     * You can also set the filter by setting the SoupAuthDomain:filter
     * and [property`AuthDomain:`filter-data properties], which can also be
     * used to set the filter at construct time.
     * @param filter the auth filter for `domain`
     */
    setFilter(filter: AuthDomainFilter): void
    /**
     * Sets `auth_callback` as an authentication-handling callback for `domain`.
     * 
     * Whenever a request comes in to `domain` which cannot be authenticated via a
     * domain-specific auth callback (eg, [callback`AuthDomainDigestAuthCallback]`),
     * the generic auth callback will be invoked. See
     * [callback`AuthDomainGenericAuthCallback]` for information on what the callback
     * should do.
     * @param authCallback the auth callback
     */
    setGenericAuthCallback(authCallback: AuthDomainGenericAuthCallback): void

    // Own virtual methods of Soup-3.0.Soup.AuthDomain

    accepts(msg: ServerMessage, header: string): string
    /**
     * Adds a "WWW-Authenticate" or "Proxy-Authenticate" header to `msg`.
     * 
     * It requests that the client authenticate, and sets `msg'`s status accordingly.
     * 
     * This is used by [class`Server]` internally and is probably of no use to
     * anyone else.
     * @virtual 
     * @param msg a #SoupServerMessage
     */
    challenge(msg: ServerMessage): string
    /**
     * Checks if `msg` authenticates to `domain` via `username` and
     * `password`.
     * 
     * This would normally be called from a
     * [callback`AuthDomainGenericAuthCallback]`.
     * @virtual 
     * @param msg a #SoupServerMessage
     * @param username a username
     * @param password a password
     */
    checkPassword(msg: ServerMessage, username: string, password: string): boolean

    // Class property signals of Soup-3.0.Soup.AuthDomain

    connect(sigName: "notify::filter", callback: any): number
    on(sigName: "notify::filter", callback: any): number
    once(sigName: "notify::filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: any): number
    on(sigName: "notify::filter-data", callback: any): number
    once(sigName: "notify::filter-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::generic-auth-callback", callback: any): number
    on(sigName: "notify::generic-auth-callback", callback: any): number
    once(sigName: "notify::generic-auth-callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-auth-callback", ...args: any[]): void
    connect(sigName: "notify::generic-auth-data", callback: any): number
    on(sigName: "notify::generic-auth-data", callback: any): number
    once(sigName: "notify::generic-auth-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-auth-data", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: any): number
    on(sigName: "notify::proxy", callback: any): number
    once(sigName: "notify::proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Server-side authentication.
 * 
 * A #SoupAuthDomain manages authentication for all or part of a
 * [class`Server]`. To make a server require authentication, first create
 * an appropriate subclass of #SoupAuthDomain, and then add it to the
 * server with [method`Server`.add_auth_domain].
 * 
 * In order for an auth domain to have any effect, you must add one or more
 * paths to it (via [method`AuthDomain`.add_path]). To require authentication for
 * all ordinary requests, add the path `"/"`. (Note that this does not include
 * the special `"*"` URI (eg, "OPTIONS *"), which must be added as a separate
 * path if you want to cover it.)
 * 
 * If you need greater control over which requests should and shouldn't be
 * authenticated, add paths covering everything you *might* want authenticated,
 * and then use a filter ([method`AuthDomain`.set_filter] to bypass
 * authentication for those requests that don't need it.
 * @class 
 */
export class AuthDomain extends GObject.Object {

    // Own properties of Soup-3.0.Soup.AuthDomain

    static name: string

    // Constructors of Soup-3.0.Soup.AuthDomain

    constructor(config?: AuthDomain.ConstructorProperties) 
    _init(config?: AuthDomain.ConstructorProperties): void
}

export module AuthDomainBasic {

    // Constructor properties interface

    export interface ConstructorProperties extends AuthDomain.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.AuthDomainBasic

        /**
         * The [callback`AuthDomainBasicAuthCallback]`.
         */
        authCallback?: AuthDomainBasicAuthCallback | null
        /**
         * The data to pass to the [callback`AuthDomainBasicAuthCallback]`.
         */
        authData?: object | null
    }

}

export interface AuthDomainBasic {

    // Own properties of Soup-3.0.Soup.AuthDomainBasic

    /**
     * The [callback`AuthDomainBasicAuthCallback]`.
     */
    authCallback: AuthDomainBasicAuthCallback
    /**
     * The data to pass to the [callback`AuthDomainBasicAuthCallback]`.
     */
    authData: object

    // Owm methods of Soup-3.0.Soup.AuthDomainBasic

    /**
     * Sets the callback that `domain` will use to authenticate incoming
     * requests.
     * 
     * For each request containing authorization, `domain` will invoke the callback,
     * and then either accept or reject the request based on `callback'`s return
     * value.
     * 
     * You can also set the auth callback by setting the
     * [property`AuthDomainBasic:`auth-callback] and
     * [property`AuthDomainBasic:`auth-data] properties, which can also be used to
     * set the callback at construct time.
     * @param callback the callback
     */
    setAuthCallback(callback: AuthDomainBasicAuthCallback): void

    // Class property signals of Soup-3.0.Soup.AuthDomainBasic

    connect(sigName: "notify::auth-callback", callback: any): number
    on(sigName: "notify::auth-callback", callback: any): number
    once(sigName: "notify::auth-callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-callback", ...args: any[]): void
    connect(sigName: "notify::auth-data", callback: any): number
    on(sigName: "notify::auth-data", callback: any): number
    once(sigName: "notify::auth-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-data", ...args: any[]): void
    connect(sigName: "notify::filter", callback: any): number
    on(sigName: "notify::filter", callback: any): number
    once(sigName: "notify::filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: any): number
    on(sigName: "notify::filter-data", callback: any): number
    once(sigName: "notify::filter-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::generic-auth-callback", callback: any): number
    on(sigName: "notify::generic-auth-callback", callback: any): number
    once(sigName: "notify::generic-auth-callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-auth-callback", ...args: any[]): void
    connect(sigName: "notify::generic-auth-data", callback: any): number
    on(sigName: "notify::generic-auth-data", callback: any): number
    once(sigName: "notify::generic-auth-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-auth-data", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: any): number
    on(sigName: "notify::proxy", callback: any): number
    once(sigName: "notify::proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Server-side "Basic" authentication.
 * 
 * #SoupAuthDomainBasic handles the server side of HTTP "Basic" (ie,
 * cleartext password) authentication.
 * @class 
 */
export class AuthDomainBasic extends AuthDomain {

    // Own properties of Soup-3.0.Soup.AuthDomainBasic

    static name: string

    // Constructors of Soup-3.0.Soup.AuthDomainBasic

    constructor(config?: AuthDomainBasic.ConstructorProperties) 
    _init(config?: AuthDomainBasic.ConstructorProperties): void
}

export module AuthDomainDigest {

    // Constructor properties interface

    export interface ConstructorProperties extends AuthDomain.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.AuthDomainDigest

        /**
         * The [callback`AuthDomainDigestAuthCallback]`.
         */
        authCallback?: AuthDomainDigestAuthCallback | null
        /**
         * The data to pass to the [callback`AuthDomainDigestAuthCallback]`.
         */
        authData?: object | null
    }

}

export interface AuthDomainDigest {

    // Own properties of Soup-3.0.Soup.AuthDomainDigest

    /**
     * The [callback`AuthDomainDigestAuthCallback]`.
     */
    authCallback: AuthDomainDigestAuthCallback
    /**
     * The data to pass to the [callback`AuthDomainDigestAuthCallback]`.
     */
    authData: object

    // Owm methods of Soup-3.0.Soup.AuthDomainDigest

    /**
     * Sets the callback that `domain` will use to authenticate incoming
     * requests.
     * 
     * For each request containing authorization, `domain` will
     * invoke the callback, and then either accept or reject the request
     * based on `callback'`s return value.
     * 
     * You can also set the auth callback by setting the
     * [property`AuthDomainDigest:`auth-callback] and
     * [property`AuthDomainDigest:`auth-data] properties, which can also be used to
     * set the callback at construct time.
     * @param callback the callback
     */
    setAuthCallback(callback: AuthDomainDigestAuthCallback): void

    // Class property signals of Soup-3.0.Soup.AuthDomainDigest

    connect(sigName: "notify::auth-callback", callback: any): number
    on(sigName: "notify::auth-callback", callback: any): number
    once(sigName: "notify::auth-callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-callback", ...args: any[]): void
    connect(sigName: "notify::auth-data", callback: any): number
    on(sigName: "notify::auth-data", callback: any): number
    once(sigName: "notify::auth-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::auth-data", ...args: any[]): void
    connect(sigName: "notify::filter", callback: any): number
    on(sigName: "notify::filter", callback: any): number
    once(sigName: "notify::filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::filter-data", callback: any): number
    on(sigName: "notify::filter-data", callback: any): number
    once(sigName: "notify::filter-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter-data", ...args: any[]): void
    connect(sigName: "notify::generic-auth-callback", callback: any): number
    on(sigName: "notify::generic-auth-callback", callback: any): number
    once(sigName: "notify::generic-auth-callback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-auth-callback", ...args: any[]): void
    connect(sigName: "notify::generic-auth-data", callback: any): number
    on(sigName: "notify::generic-auth-data", callback: any): number
    once(sigName: "notify::generic-auth-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-auth-data", ...args: any[]): void
    connect(sigName: "notify::proxy", callback: any): number
    on(sigName: "notify::proxy", callback: any): number
    once(sigName: "notify::proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Server-side "Digest" authentication.
 * 
 * #SoupAuthDomainDigest handles the server side of HTTP "Digest"
 * authentication.
 * @class 
 */
export class AuthDomainDigest extends AuthDomain {

    // Own properties of Soup-3.0.Soup.AuthDomainDigest

    static name: string

    // Constructors of Soup-3.0.Soup.AuthDomainDigest

    constructor(config?: AuthDomainDigest.ConstructorProperties) 
    _init(config?: AuthDomainDigest.ConstructorProperties): void
    /**
     * Encodes the username/realm/password triplet for Digest
     * authentication.
     * 
     * That is, it returns a stringified MD5 hash of
     * `username,` `realm,` and `password` concatenated together. This is
     * the form that is needed as the return value of
     * #SoupAuthDomainDigest's auth handler.
     * 
     * For security reasons, you should store the encoded hash, rather
     * than storing the cleartext password itself and calling this method
     * only when you need to verify it. This way, if your server is
     * compromised, the attackers will not gain access to cleartext
     * passwords which might also be usable at other sites. (Note also
     * that the encoded password returned by this method is identical to
     * the encoded password stored in an Apache .htdigest file.)
     * @param username a username
     * @param realm an auth realm name
     * @param password the password for `username` in `realm`
     */
    static encodePassword(username: string, realm: string, password: string): string
}

export module AuthManager {

    // Signal callback interfaces

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        (msg: Message, auth: Auth, retrying: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AuthManager extends SessionFeature {

    // Owm methods of Soup-3.0.Soup.AuthManager

    /**
     * Clear all credentials cached by `manager`.
     */
    clearCachedCredentials(): void
    /**
     * Records that `auth` is to be used under `uri,` as though a
     * WWW-Authenticate header had been received at that URI.
     * 
     * This can be used to "preload" `manager'`s auth cache, to avoid an extra HTTP
     * round trip in the case where you know ahead of time that a 401 response will
     * be returned.
     * 
     * This is only useful for authentication types where the initial
     * Authorization header does not depend on any additional information
     * from the server. (Eg, Basic or NTLM, but not Digest.)
     * @param uri the #GUri under which `auth` is to be used
     * @param auth the #SoupAuth to use
     */
    useAuth(uri: GLib.Uri, auth: Auth): void

    // Own signals of Soup-3.0.Soup.AuthManager

    connect(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback): number
    once(sigName: "authenticate", callback: AuthManager.AuthenticateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "authenticate", auth: Auth, retrying: boolean, ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.AuthManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * HTTP client-side authentication handler.
 * 
 * #SoupAuthManager is the [iface`SessionFeature]` that handles HTTP
 * authentication for a [class`Session]`.
 * 
 * A #SoupAuthManager is added to the session by default, and normally
 * you don't need to worry about it at all. However, if you want to
 * disable HTTP authentication, you can remove the feature from the
 * session with [method`Session`.remove_feature_by_type] or disable it on
 * individual requests with [method`Message`.disable_feature].
 * 
 * You can use this with [method`Session`.remove_feature_by_type] or
 * [method`Message`.disable_feature].
 * 
 * (Although this type has only been publicly visible since libsoup 2.42, it has
 * always existed in the background, and you can use `g_type_from_name
 * ("SoupAuthManager")` to get its [alias`GLib`.Type] in earlier releases.)
 * @class 
 */
export class AuthManager extends GObject.Object {

    // Own properties of Soup-3.0.Soup.AuthManager

    static name: string

    // Constructors of Soup-3.0.Soup.AuthManager

    constructor(config?: AuthManager.ConstructorProperties) 
    _init(config?: AuthManager.ConstructorProperties): void
}

export module AuthNTLM {

    // Constructor properties interface

    export interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

export interface AuthNTLM {

    // Class property signals of Soup-3.0.Soup.AuthNTLM

    connect(sigName: "notify::authority", callback: any): number
    on(sigName: "notify::authority", callback: any): number
    once(sigName: "notify::authority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authority", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: any): number
    on(sigName: "notify::is-authenticated", callback: any): number
    once(sigName: "notify::is-authenticated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: any): number
    on(sigName: "notify::is-for-proxy", callback: any): number
    once(sigName: "notify::is-for-proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: any): number
    on(sigName: "notify::scheme-name", callback: any): number
    once(sigName: "notify::scheme-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * HTTP-based NTLM authentication.
 * 
 * [class`Session]`s do not support this type by default; if you want to
 * enable support for it, call [method`Session`.add_feature_by_type],
 * passing %SOUP_TYPE_AUTH_NTLM.
 * @class 
 */
export class AuthNTLM extends Auth {

    // Own properties of Soup-3.0.Soup.AuthNTLM

    static name: string

    // Constructors of Soup-3.0.Soup.AuthNTLM

    constructor(config?: AuthNTLM.ConstructorProperties) 
    _init(config?: AuthNTLM.ConstructorProperties): void
}

export module AuthNegotiate {

    // Constructor properties interface

    export interface ConstructorProperties extends Auth.ConstructorProperties {
    }

}

export interface AuthNegotiate {

    // Class property signals of Soup-3.0.Soup.AuthNegotiate

    connect(sigName: "notify::authority", callback: any): number
    on(sigName: "notify::authority", callback: any): number
    once(sigName: "notify::authority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authority", ...args: any[]): void
    connect(sigName: "notify::is-authenticated", callback: any): number
    on(sigName: "notify::is-authenticated", callback: any): number
    once(sigName: "notify::is-authenticated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-authenticated", ...args: any[]): void
    connect(sigName: "notify::is-cancelled", callback: any): number
    on(sigName: "notify::is-cancelled", callback: any): number
    once(sigName: "notify::is-cancelled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-cancelled", ...args: any[]): void
    connect(sigName: "notify::is-for-proxy", callback: any): number
    on(sigName: "notify::is-for-proxy", callback: any): number
    once(sigName: "notify::is-for-proxy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-for-proxy", ...args: any[]): void
    connect(sigName: "notify::realm", callback: any): number
    on(sigName: "notify::realm", callback: any): number
    once(sigName: "notify::realm", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::realm", ...args: any[]): void
    connect(sigName: "notify::scheme-name", callback: any): number
    on(sigName: "notify::scheme-name", callback: any): number
    once(sigName: "notify::scheme-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * HTTP-based GSS-Negotiate authentication.
 * 
 * [class`Session]`s do not support this type by default; if you want to
 * enable support for it, call [method`Session`.add_feature_by_type],
 * passing %SOUP_TYPE_AUTH_NEGOTIATE.
 * 
 * This auth type will only work if libsoup was compiled with GSSAPI
 * support; you can check [func`AuthNegotiate`.supported] to see if it
 * was.
 * @class 
 */
export class AuthNegotiate extends Auth {

    // Own properties of Soup-3.0.Soup.AuthNegotiate

    static name: string

    // Constructors of Soup-3.0.Soup.AuthNegotiate

    constructor(config?: AuthNegotiate.ConstructorProperties) 
    _init(config?: AuthNegotiate.ConstructorProperties): void
    /**
     * Indicates whether libsoup was built with GSSAPI support.
     * 
     * If this is %FALSE, %SOUP_TYPE_AUTH_NEGOTIATE will still be defined and can
     * still be added to a [class`Session]`, but libsoup will never attempt to
     * actually use this auth type.
     */
    static supported(): boolean
}

export module Cache {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.Cache

        /**
         * The directory to store the cache files.
         */
        cacheDir?: string | null
        /**
         * Whether the cache is private or shared.
         */
        cacheType?: CacheType | null
    }

}

export interface Cache extends SessionFeature {

    // Own properties of Soup-3.0.Soup.Cache

    /**
     * The directory to store the cache files.
     */
    readonly cacheDir: string
    /**
     * Whether the cache is private or shared.
     */
    readonly cacheType: CacheType

    // Own fields of Soup-3.0.Soup.Cache

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.Cache

    /**
     * Will remove all entries in the `cache` plus all the cache files.
     */
    clear(): void
    /**
     * Synchronously writes the cache index out to disk.
     * 
     * Contrast with [method`Cache`.flush], which writes pending cache *entries* to
     * disk.
     * 
     * You must call this before exiting if you want your cache data to
     * persist between sessions.
     */
    dump(): void
    /**
     * Forces all pending writes in the `cache` to be
     * committed to disk.
     * 
     * For doing so it will iterate the [struct`GLib`.MainContext] associated with
     * `cache'`s session as long as needed.
     * 
     * Contrast with [method`Cache`.dump], which writes out the cache index file.
     */
    flush(): void
    /**
     * Gets the maximum size of the cache.
     */
    getMaxSize(): number
    /**
     * Loads the contents of `cache'`s index into memory.
     */
    load(): void
    /**
     * Sets the maximum size of the cache.
     * @param maxSize the maximum size of the cache, in bytes
     */
    setMaxSize(maxSize: number): void

    // Own virtual methods of Soup-3.0.Soup.Cache

    getCacheability(msg: Message): Cacheability

    // Class property signals of Soup-3.0.Soup.Cache

    connect(sigName: "notify::cache-dir", callback: any): number
    on(sigName: "notify::cache-dir", callback: any): number
    once(sigName: "notify::cache-dir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-dir", ...args: any[]): void
    connect(sigName: "notify::cache-type", callback: any): number
    on(sigName: "notify::cache-type", callback: any): number
    once(sigName: "notify::cache-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cache-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * File-based cache for HTTP resources.
 * @class 
 */
export class Cache extends GObject.Object {

    // Own properties of Soup-3.0.Soup.Cache

    static name: string

    // Constructors of Soup-3.0.Soup.Cache

    constructor(config?: Cache.ConstructorProperties) 
    /**
     * Creates a new #SoupCache.
     * @constructor 
     * @param cacheDir the directory to store the cached data, or %NULL   to use the default one. Note that since the cache isn't safe to access for   multiple processes at once, and the default directory isn't namespaced by   process, clients are strongly discouraged from passing %NULL.
     * @param cacheType the #SoupCacheType of the cache
     */
    constructor(cacheDir: string | null, cacheType: CacheType) 
    /**
     * Creates a new #SoupCache.
     * @constructor 
     * @param cacheDir the directory to store the cached data, or %NULL   to use the default one. Note that since the cache isn't safe to access for   multiple processes at once, and the default directory isn't namespaced by   process, clients are strongly discouraged from passing %NULL.
     * @param cacheType the #SoupCacheType of the cache
     */
    static new(cacheDir: string | null, cacheType: CacheType): Cache
    _init(config?: Cache.ConstructorProperties): void
}

export module ContentDecoder {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ContentDecoder extends SessionFeature {

    // Class property signals of Soup-3.0.Soup.ContentDecoder

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Handles decoding of HTTP messages.
 * 
 * #SoupContentDecoder handles adding the "Accept-Encoding" header on
 * outgoing messages, and processing the "Content-Encoding" header on
 * incoming ones. Currently it supports the "gzip", "deflate", and "br"
 * content codings.
 * 
 * A #SoupContentDecoder will automatically be
 * added to the session by default. (You can use
 * [method`Session`.remove_feature_by_type] if you don't
 * want this.)
 * 
 * If #SoupContentDecoder successfully decodes the Content-Encoding,
 * the message body will contain the decoded data; however, the message headers
 * will be unchanged (and so "Content-Encoding" will still be present,
 * "Content-Length" will describe the original encoded length, etc).
 * 
 * If "Content-Encoding" contains any encoding types that
 * #SoupContentDecoder doesn't recognize, then none of the encodings
 * will be decoded.
 * 
 * (Note that currently there is no way to (automatically) use
 * Content-Encoding when sending a request body, or to pick specific
 * encoding types to support.)
 * @class 
 */
export class ContentDecoder extends GObject.Object {

    // Own properties of Soup-3.0.Soup.ContentDecoder

    static name: string

    // Constructors of Soup-3.0.Soup.ContentDecoder

    constructor(config?: ContentDecoder.ConstructorProperties) 
    _init(config?: ContentDecoder.ConstructorProperties): void
}

export module ContentSniffer {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ContentSniffer extends SessionFeature {

    // Owm methods of Soup-3.0.Soup.ContentSniffer

    /**
     * Sniffs `buffer` to determine its Content-Type.
     * 
     * The result may also be influenced by the Content-Type declared in `msg'`s
     * response headers.
     * @param msg the message to sniff
     * @param buffer a buffer containing the start of `msg'`s response body
     */
    sniff(msg: Message, buffer: any): [ /* returnType */ string, /* params */ GLib.HashTable | null ]

    // Class property signals of Soup-3.0.Soup.ContentSniffer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Sniffs the mime type of messages.
 * 
 * A #SoupContentSniffer tries to detect the actual content type of
 * the files that are being downloaded by looking at some of the data
 * before the [class`Message]` emits its [signal`Message:`:got-headers] signal.
 * #SoupContentSniffer implements [iface`SessionFeature]`, so you can add
 * content sniffing to a session with [method`Session`.add_feature] or
 * [method`Session`.add_feature_by_type].
 * @class 
 */
export class ContentSniffer extends GObject.Object {

    // Own properties of Soup-3.0.Soup.ContentSniffer

    static name: string

    // Constructors of Soup-3.0.Soup.ContentSniffer

    constructor(config?: ContentSniffer.ConstructorProperties) 
    /**
     * Creates a new #SoupContentSniffer.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #SoupContentSniffer.
     * @constructor 
     */
    static new(): ContentSniffer
    _init(config?: ContentSniffer.ConstructorProperties): void
}

export module CookieJar {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (oldCookie: Cookie, newCookie: Cookie): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.CookieJar

        /**
         * The policy the jar should follow to accept or reject cookies.
         */
        acceptPolicy?: CookieJarAcceptPolicy | null
        /**
         * Whether or not the cookie jar is read-only.
         */
        readOnly?: boolean | null
    }

}

export interface CookieJar extends SessionFeature {

    // Own properties of Soup-3.0.Soup.CookieJar

    /**
     * The policy the jar should follow to accept or reject cookies.
     */
    acceptPolicy: CookieJarAcceptPolicy
    /**
     * Whether or not the cookie jar is read-only.
     */
    readonly readOnly: boolean

    // Own fields of Soup-3.0.Soup.CookieJar

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.CookieJar

    /**
     * Adds `cookie` to `jar`.
     * 
     * Emits the [signal`CookieJar:`:changed] signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * @param cookie a #SoupCookie
     */
    addCookie(cookie: Cookie): void
    /**
     * Adds `cookie` to `jar`.
     * 
     * Emits the [signal`CookieJar:`:changed] signal if we are modifying an existing
     * cookie or adding a valid new cookie ('valid' means that the cookie's expire
     * date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `uri` will be used to reject setting or overwriting secure cookies
     * from insecure origins. %NULL is treated as secure.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * @param cookie a #SoupCookie
     * @param uri the URI setting the cookie
     * @param firstParty the URI for the main document
     */
    addCookieFull(cookie: Cookie, uri: GLib.Uri | null, firstParty: GLib.Uri | null): void
    /**
     * Adds `cookie` to `jar`.
     * 
     * Emits the [signal`CookieJar:`:changed] signal if we are modifying
     * an existing cookie or adding a valid new cookie ('valid' means
     * that the cookie's expire date is not in the past).
     * 
     * `first_party` will be used to reject cookies coming from third party
     * resources in case such a security policy is set in the `jar`.
     * 
     * `cookie` will be 'stolen' by the jar, so don't free it afterwards.
     * 
     * For secure cookies to work properly you may want to use
     * [method`CookieJar`.add_cookie_full].
     * @param firstParty the URI for the main document
     * @param cookie a #SoupCookie
     */
    addCookieWithFirstParty(firstParty: GLib.Uri, cookie: Cookie): void
    /**
     * Constructs a [struct`GLib`.List] with every cookie inside the `jar`.
     * 
     * The cookies in the list are a copy of the original, so
     * you have to free them when you are done with them.
     */
    allCookies(): Cookie[]
    /**
     * Deletes `cookie` from `jar`.
     * 
     * Emits the [signal`CookieJar:`:changed] signal.
     * @param cookie a #SoupCookie
     */
    deleteCookie(cookie: Cookie): void
    /**
     * Gets `jar'`s [enum`CookieJarAcceptPolicy]`.
     */
    getAcceptPolicy(): CookieJarAcceptPolicy
    /**
     * Retrieves the list of cookies that would be sent with a request to `uri`
     * as a [struct`GLib`.List] of #SoupCookie objects.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     * @param uri a #GUri
     * @param forHttp whether or not the return value is being passed directly   to an HTTP operation
     */
    getCookieList(uri: GLib.Uri, forHttp: boolean): Cookie[]
    /**
     * This is an extended version of [method`CookieJar`.get_cookie_list] that
     * provides more information required to use SameSite cookies.
     * 
     * See the [SameSite cookies
     * spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00) for
     * more detailed information.
     * @param uri a #GUri
     * @param topLevel a #GUri for the top level document
     * @param siteForCookies a #GUri indicating the origin to get cookies for
     * @param forHttp whether or not the return value is being passed directly   to an HTTP operation
     * @param isSafeMethod if the HTTP method is safe, as defined by RFC 7231, ignored when `for_http` is %FALSE
     * @param isTopLevelNavigation whether or not the HTTP request is part of   top level navigation
     */
    getCookieListWithSameSiteInfo(uri: GLib.Uri, topLevel: GLib.Uri | null, siteForCookies: GLib.Uri | null, forHttp: boolean, isSafeMethod: boolean, isTopLevelNavigation: boolean): Cookie[]
    /**
     * Retrieves (in Cookie-header form) the list of cookies that would
     * be sent with a request to `uri`.
     * 
     * If `for_http` is %TRUE, the return value will include cookies marked
     * "HttpOnly" (that is, cookies that the server wishes to keep hidden
     * from client-side scripting operations such as the JavaScript
     * document.cookies property). Since #SoupCookieJar sets the Cookie
     * header itself when making the actual HTTP request, you should
     * almost certainly be setting `for_http` to %FALSE if you are calling
     * this.
     * @param uri a #GUri
     * @param forHttp whether or not the return value is being passed directly   to an HTTP operation
     */
    getCookies(uri: GLib.Uri, forHttp: boolean): string | null
    // Has conflict: isPersistent(): boolean
    /**
     * Sets `policy` as the cookie acceptance policy for `jar`.
     * @param policy a #SoupCookieJarAcceptPolicy
     */
    setAcceptPolicy(policy: CookieJarAcceptPolicy): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`.
     * 
     * Keep in mind that if the [enum`CookieJarAcceptPolicy]` set is either
     * %SOUP_COOKIE_JAR_ACCEPT_NO_THIRD_PARTY or
     * %SOUP_COOKIE_JAR_ACCEPT_GRANDFATHERED_THIRD_PARTY you'll need to use
     * [method`CookieJar`.set_cookie_with_first_party], otherwise the jar
     * will have no way of knowing if the cookie is being set by a third
     * party or not.
     * @param uri the URI setting the cookie
     * @param cookie the stringified cookie to set
     */
    setCookie(uri: GLib.Uri, cookie: string): void
    /**
     * Adds `cookie` to `jar,` exactly as though it had appeared in a
     * Set-Cookie header returned from a request to `uri`.
     * 
     * `first_party` will be used to reject cookies coming from third party resources
     * in case such a security policy is set in the `jar`.
     * @param uri the URI setting the cookie
     * @param firstParty the URI for the main document
     * @param cookie the stringified cookie to set
     */
    setCookieWithFirstParty(uri: GLib.Uri, firstParty: GLib.Uri, cookie: string): void

    // Own virtual methods of Soup-3.0.Soup.CookieJar

    changed(oldCookie: Cookie, newCookie: Cookie): void
    /**
     * Gets whether `jar` stores cookies persistenly.
     * @virtual 
     */
    isPersistent(): boolean
    save(): void

    // Own signals of Soup-3.0.Soup.CookieJar

    connect(sigName: "changed", callback: CookieJar.ChangedSignalCallback): number
    on(sigName: "changed", callback: CookieJar.ChangedSignalCallback): number
    once(sigName: "changed", callback: CookieJar.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", newCookie: Cookie, ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.CookieJar

    connect(sigName: "notify::accept-policy", callback: any): number
    on(sigName: "notify::accept-policy", callback: any): number
    once(sigName: "notify::accept-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Automatic cookie handling for SoupSession.
 * 
 * A #SoupCookieJar stores [struct`Cookie]`s and arrange for them to be sent with
 * the appropriate [class`Message]`s. #SoupCookieJar implements
 * [iface`SessionFeature]`, so you can add a cookie jar to a session with
 * [method`Session`.add_feature] or [method`Session`.add_feature_by_type].
 * 
 * Note that the base #SoupCookieJar class does not support any form
 * of long-term cookie persistence.
 * @class 
 */
export class CookieJar extends GObject.Object {

    // Own properties of Soup-3.0.Soup.CookieJar

    static name: string

    // Constructors of Soup-3.0.Soup.CookieJar

    constructor(config?: CookieJar.ConstructorProperties) 
    /**
     * Creates a new #SoupCookieJar.
     * 
     * The base #SoupCookieJar class does not support persistent storage of cookies;
     * use a subclass for that.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #SoupCookieJar.
     * 
     * The base #SoupCookieJar class does not support persistent storage of cookies;
     * use a subclass for that.
     * @constructor 
     */
    static new(): CookieJar
    _init(config?: CookieJar.ConstructorProperties): void
}

export module CookieJarDB {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, CookieJar.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.CookieJarDB

        /**
         * Cookie-storage filename.
         */
        filename?: string | null
    }

}

export interface CookieJarDB extends SessionFeature {

    // Own properties of Soup-3.0.Soup.CookieJarDB

    /**
     * Cookie-storage filename.
     */
    readonly filename: string

    // Class property signals of Soup-3.0.Soup.CookieJarDB

    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: any): number
    on(sigName: "notify::accept-policy", callback: any): number
    once(sigName: "notify::accept-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Database-based Cookie Jar.
 * 
 * #SoupCookieJarDB is a [class`CookieJar]` that reads cookies from and writes
 * them to a sqlite database in the new Mozilla format.
 * 
 * (This is identical to `SoupCookieJarSqlite` in
 * libsoup-gnome; it has just been moved into libsoup proper, and
 * renamed to avoid conflicting.)
 * @class 
 */
export class CookieJarDB extends CookieJar {

    // Own properties of Soup-3.0.Soup.CookieJarDB

    static name: string

    // Constructors of Soup-3.0.Soup.CookieJarDB

    constructor(config?: CookieJarDB.ConstructorProperties) 
    /**
     * Creates a #SoupCookieJarDB.
     * 
     * `filename` will be read in at startup to create an initial set of cookies. If
     * `read_only` is %FALSE, then the non-session cookies will be written to
     * `filename` when the [signal`CookieJar:`:changed] signal is emitted from the
     * jar. (If `read_only` is %TRUE, then the cookie jar will only be used for this
     * session, and changes made to it will be lost when the jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from, or %NULL
     * @param readOnly %TRUE if `filename` is read-only
     */
    constructor(filename: string, readOnly: boolean) 
    /**
     * Creates a #SoupCookieJarDB.
     * 
     * `filename` will be read in at startup to create an initial set of cookies. If
     * `read_only` is %FALSE, then the non-session cookies will be written to
     * `filename` when the [signal`CookieJar:`:changed] signal is emitted from the
     * jar. (If `read_only` is %TRUE, then the cookie jar will only be used for this
     * session, and changes made to it will be lost when the jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from, or %NULL
     * @param readOnly %TRUE if `filename` is read-only
     */
    static new(filename: string, readOnly: boolean): CookieJarDB

    // Overloads of new

    /**
     * Creates a new #SoupCookieJar.
     * 
     * The base #SoupCookieJar class does not support persistent storage of cookies;
     * use a subclass for that.
     * @constructor 
     */
    static new(): CookieJar
    _init(config?: CookieJarDB.ConstructorProperties): void
}

export module CookieJarText {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, CookieJar.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.CookieJarText

        /**
         * Cookie-storage filename.
         */
        filename?: string | null
    }

}

export interface CookieJarText extends SessionFeature {

    // Own properties of Soup-3.0.Soup.CookieJarText

    /**
     * Cookie-storage filename.
     */
    readonly filename: string

    // Class property signals of Soup-3.0.Soup.CookieJarText

    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::accept-policy", callback: any): number
    on(sigName: "notify::accept-policy", callback: any): number
    once(sigName: "notify::accept-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-policy", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Text-file-based ("cookies.txt") Cookie Jar
 * 
 * #SoupCookieJarText is a [class`CookieJar]` that reads cookies from and writes
 * them to a text file in format similar to Mozilla's "cookies.txt".
 * @class 
 */
export class CookieJarText extends CookieJar {

    // Own properties of Soup-3.0.Soup.CookieJarText

    static name: string

    // Constructors of Soup-3.0.Soup.CookieJarText

    constructor(config?: CookieJarText.ConstructorProperties) 
    /**
     * Creates a #SoupCookieJarText.
     * 
     * `filename` will be read in at startup to create an initial set of cookies. If
     * `read_only` is %FALSE, then the non-session cookies will be written to
     * `filename` when the [signal`CookieJar:`:changed] signal is emitted from the
     * jar. (If `read_only` is %TRUE, then the cookie jar will only be used for this
     * session, and changes made to it will be lost when the jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from
     * @param readOnly %TRUE if `filename` is read-only
     */
    constructor(filename: string, readOnly: boolean) 
    /**
     * Creates a #SoupCookieJarText.
     * 
     * `filename` will be read in at startup to create an initial set of cookies. If
     * `read_only` is %FALSE, then the non-session cookies will be written to
     * `filename` when the [signal`CookieJar:`:changed] signal is emitted from the
     * jar. (If `read_only` is %TRUE, then the cookie jar will only be used for this
     * session, and changes made to it will be lost when the jar is destroyed.)
     * @constructor 
     * @param filename the filename to read to/write from
     * @param readOnly %TRUE if `filename` is read-only
     */
    static new(filename: string, readOnly: boolean): CookieJarText

    // Overloads of new

    /**
     * Creates a new #SoupCookieJar.
     * 
     * The base #SoupCookieJar class does not support persistent storage of cookies;
     * use a subclass for that.
     * @constructor 
     */
    static new(): CookieJar
    _init(config?: CookieJarText.ConstructorProperties): void
}

export module HSTSEnforcer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface HSTSEnforcer extends SessionFeature {

    // Own fields of Soup-3.0.Soup.HSTSEnforcer

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.HSTSEnforcer

    /**
     * Gets a list of domains for which there are policies in `enforcer`.
     * @param sessionPolicies whether to include session policies
     */
    getDomains(sessionPolicies: boolean): string[]
    /**
     * Gets a list with the policies in `enforcer`.
     * @param sessionPolicies whether to include session policies
     */
    getPolicies(sessionPolicies: boolean): HSTSPolicy[]
    // Has conflict: hasValidPolicy(domain: string): boolean
    // Has conflict: isPersistent(): boolean
    /**
     * Sets `policy` to `hsts_enforcer`.
     * 
     * If `policy` is expired, any existing HSTS policy for its host will be removed
     * instead. If a policy existed for this host, it will be replaced. Otherwise,
     * the new policy will be inserted. If the policy is a session policy, that is,
     * one created with [ctor`HSTSPolicy`.new_session_policy], the policy will not
     * expire and will be enforced during the lifetime of `hsts_enforcer'`s
     * [class`Session]`.
     * @param policy the policy of the HSTS host
     */
    setPolicy(policy: HSTSPolicy): void
    /**
     * Sets a session policy for `domain`.
     * 
     * A session policy is a policy that is permanent to the lifetime of
     * `hsts_enforcer'`s [class`Session]` and doesn't expire.
     * @param domain policy domain or hostname
     * @param includeSubdomains %TRUE if the policy applies on sub domains
     */
    setSessionPolicy(domain: string, includeSubdomains: boolean): void

    // Own virtual methods of Soup-3.0.Soup.HSTSEnforcer

    changed(oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy): void
    /**
     * Gets whether `hsts_enforcer` has a currently valid policy for `domain`.
     * @virtual 
     * @param domain a domain.
     */
    hasValidPolicy(domain: string): boolean
    /**
     * Gets whether `hsts_enforcer` stores policies persistenly.
     * @virtual 
     */
    isPersistent(): boolean

    // Own signals of Soup-3.0.Soup.HSTSEnforcer

    connect(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback): number
    on(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback): number
    once(sigName: "changed", callback: HSTSEnforcer.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", newPolicy: HSTSPolicy, ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.HSTSEnforcer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Automatic HTTP Strict Transport Security enforcing for [class`Session]`.
 * 
 * A #SoupHSTSEnforcer stores HSTS policies and enforces them when
 * required. #SoupHSTSEnforcer implements [iface`SessionFeature]`, so you
 * can add an HSTS enforcer to a session with
 * [method`Session`.add_feature] or [method`Session`.add_feature_by_type].
 * 
 * #SoupHSTSEnforcer keeps track of all the HTTPS destinations that,
 * when connected to, return the Strict-Transport-Security header with
 * valid values. #SoupHSTSEnforcer will forget those destinations
 * upon expiry or when the server requests it.
 * 
 * When the [class`Session]` the #SoupHSTSEnforcer is attached to queues or
 * restarts a message, the #SoupHSTSEnforcer will rewrite the URI to HTTPS if
 * the destination is a known HSTS host and is contacted over an insecure
 * transport protocol (HTTP). Users of #SoupHSTSEnforcer are advised to listen
 * to changes in the [property`Message:`uri] property in order to be aware of
 * changes in the message URI.
 * 
 * Note that #SoupHSTSEnforcer does not support any form of long-term
 * HSTS policy persistence. See [class`HSTSEnforcerDB]` for a persistent
 * enforcer.
 * @class 
 */
export class HSTSEnforcer extends GObject.Object {

    // Own properties of Soup-3.0.Soup.HSTSEnforcer

    static name: string

    // Constructors of Soup-3.0.Soup.HSTSEnforcer

    constructor(config?: HSTSEnforcer.ConstructorProperties) 
    /**
     * Creates a new #SoupHSTSEnforcer.
     * 
     * The base #SoupHSTSEnforcer class does not support persistent storage of HSTS
     * policies, see [class`HSTSEnforcerDB]` for that.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #SoupHSTSEnforcer.
     * 
     * The base #SoupHSTSEnforcer class does not support persistent storage of HSTS
     * policies, see [class`HSTSEnforcerDB]` for that.
     * @constructor 
     */
    static new(): HSTSEnforcer
    _init(config?: HSTSEnforcer.ConstructorProperties): void
}

export module HSTSEnforcerDB {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, HSTSEnforcer.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.HSTSEnforcerDB

        /**
         * The filename of the SQLite database where HSTS policies are stored.
         */
        filename?: string | null
    }

}

export interface HSTSEnforcerDB extends SessionFeature {

    // Own properties of Soup-3.0.Soup.HSTSEnforcerDB

    /**
     * The filename of the SQLite database where HSTS policies are stored.
     */
    readonly filename: string

    // Class property signals of Soup-3.0.Soup.HSTSEnforcerDB

    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Persistent HTTP Strict Transport Security enforcer.
 * 
 * #SoupHSTSEnforcerDB is a [class`HSTSEnforcer]` that uses a SQLite
 * database as a backend for persistency.
 * @class 
 */
export class HSTSEnforcerDB extends HSTSEnforcer {

    // Own properties of Soup-3.0.Soup.HSTSEnforcerDB

    static name: string

    // Constructors of Soup-3.0.Soup.HSTSEnforcerDB

    constructor(config?: HSTSEnforcerDB.ConstructorProperties) 
    /**
     * Creates a #SoupHSTSEnforcerDB.
     * 
     * `filename` will be read in during the initialization of a
     * #SoupHSTSEnforcerDB, in order to create an initial set of HSTS
     * policies. If the file doesn't exist, a new database will be created
     * and initialized. Changes to the policies during the lifetime of a
     * #SoupHSTSEnforcerDB will be written to `filename` when
     * [signal`HSTSEnforcer:`:changed] is emitted.
     * @constructor 
     * @param filename the filename of the database to read/write from.
     */
    constructor(filename: string) 
    /**
     * Creates a #SoupHSTSEnforcerDB.
     * 
     * `filename` will be read in during the initialization of a
     * #SoupHSTSEnforcerDB, in order to create an initial set of HSTS
     * policies. If the file doesn't exist, a new database will be created
     * and initialized. Changes to the policies during the lifetime of a
     * #SoupHSTSEnforcerDB will be written to `filename` when
     * [signal`HSTSEnforcer:`:changed] is emitted.
     * @constructor 
     * @param filename the filename of the database to read/write from.
     */
    static new(filename: string): HSTSEnforcerDB

    // Overloads of new

    /**
     * Creates a new #SoupHSTSEnforcer.
     * 
     * The base #SoupHSTSEnforcer class does not support persistent storage of HSTS
     * policies, see [class`HSTSEnforcerDB]` for that.
     * @constructor 
     */
    static new(): HSTSEnforcer
    _init(config?: HSTSEnforcerDB.ConstructorProperties): void
}

export module Logger {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.Logger

        /**
         * The level of logging output.
         */
        level?: LoggerLogLevel | null
        /**
         * If [property`Logger:`level] is %SOUP_LOGGER_LOG_BODY, this gives
         * the maximum number of bytes of the body that will be logged.
         * (-1 means "no limit".)
         */
        maxBodySize?: number | null
    }

}

export interface Logger extends SessionFeature {

    // Own properties of Soup-3.0.Soup.Logger

    /**
     * The level of logging output.
     */
    level: LoggerLogLevel
    /**
     * If [property`Logger:`level] is %SOUP_LOGGER_LOG_BODY, this gives
     * the maximum number of bytes of the body that will be logged.
     * (-1 means "no limit".)
     */
    maxBodySize: number

    // Owm methods of Soup-3.0.Soup.Logger

    /**
     * Get the maximum body size for `logger`.
     */
    getMaxBodySize(): number
    /**
     * Sets the maximum body size for `logger` (-1 means no limit).
     * @param maxBodySize the maximum body size to log
     */
    setMaxBodySize(maxBodySize: number): void
    /**
     * Sets up an alternate log printing routine, if you don't want
     * the log to go to `stdout`.
     * @param printer the callback for printing logging output
     */
    setPrinter(printer: LoggerPrinter): void
    /**
     * Sets up a filter to determine the log level for a given request.
     * 
     * For each HTTP request `logger` will invoke `request_filter` to
     * determine how much (if any) of that request to log. (If you do not
     * set a request filter, `logger` will just always log requests at the
     * level passed to [ctor`Logger`.new].)
     * @param requestFilter the callback for request debugging
     */
    setRequestFilter(requestFilter: LoggerFilter): void
    /**
     * Sets up a filter to determine the log level for a given response.
     * 
     * For each HTTP response `logger` will invoke `response_filter` to
     * determine how much (if any) of that response to log. (If you do not
     * set a response filter, `logger` will just always log responses at
     * the level passed to [ctor`Logger`.new].)
     * @param responseFilter the callback for response debugging
     */
    setResponseFilter(responseFilter: LoggerFilter): void

    // Class property signals of Soup-3.0.Soup.Logger

    connect(sigName: "notify::level", callback: any): number
    on(sigName: "notify::level", callback: any): number
    once(sigName: "notify::level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::max-body-size", callback: any): number
    on(sigName: "notify::max-body-size", callback: any): number
    once(sigName: "notify::max-body-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-body-size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Debug logging support
 * 
 * #SoupLogger watches a [class`Session]` and logs the HTTP traffic that
 * it generates, for debugging purposes. Many applications use an
 * environment variable to determine whether or not to use
 * #SoupLogger, and to determine the amount of debugging output.
 * 
 * To use #SoupLogger, first create a logger with [ctor`Logger`.new], optionally
 * configure it with [method`Logger`.set_request_filter],
 * [method`Logger`.set_response_filter], and [method`Logger`.set_printer], and
 * then attach it to a session (or multiple sessions) with
 * [method`Session`.add_feature].
 * 
 * By default, the debugging output is sent to `stdout`, and looks something
 * like:
 * 
 * ```
 * > POST /unauth HTTP/1.1
 * > Soup-Debug-Timestamp: 1200171744
 * > Soup-Debug: SoupSession 1 (0x612190), SoupMessage 1 (0x617000), GSocket 1 (0x612220)
 * > Host: localhost
 * > Content-Type: text/plain
 * > Connection: close
 * 
 * &lt; HTTP/1.1 201 Created
 * &lt; Soup-Debug-Timestamp: 1200171744
 * &lt; Soup-Debug: SoupMessage 1 (0x617000)
 * &lt; Date: Sun, 12 Jan 2008 21:02:24 GMT
 * &lt; Content-Length: 0
 * ```
 * 
 * The `Soup-Debug-Timestamp` line gives the time (as a `time_t`) when the
 * request was sent, or the response fully received.
 * 
 * The `Soup-Debug` line gives further debugging information about the
 * [class`Session]`, [class`Message]`, and [class`Gio`.Socket] involved; the hex
 * numbers are the addresses of the objects in question (which may be useful if
 * you are running in a debugger). The decimal IDs are simply counters that
 * uniquely identify objects across the lifetime of the #SoupLogger. In
 * particular, this can be used to identify when multiple messages are sent
 * across the same connection.
 * 
 * Currently, the request half of the message is logged just before
 * the first byte of the request gets written to the network (from the
 * [signal`Message:`:starting] signal).
 * 
 * The response is logged just after the last byte of the response body is read
 * from the network (from the [signal`Message:`:got-body] or
 * [signal`Message:`:got-informational] signal), which means that the
 * [signal`Message:`:got-headers] signal, and anything triggered off it (such as
 * #SoupMessage::authenticate) will be emitted *before* the response headers are
 * actually logged.
 * 
 * If the response doesn't happen to trigger the [signal`Message:`:got-body] nor
 * [signal`Message:`:got-informational] signals due to, for example, a
 * cancellation before receiving the last byte of the response body, the
 * response will still be logged on the event of the [signal`Message:`:finished]
 * signal.
 * @class 
 */
export class Logger extends GObject.Object {

    // Own properties of Soup-3.0.Soup.Logger

    static name: string

    // Constructors of Soup-3.0.Soup.Logger

    constructor(config?: Logger.ConstructorProperties) 
    /**
     * Creates a new #SoupLogger with the given debug level.
     * 
     * If you need finer control over what message parts are and aren't
     * logged, use [method`Logger`.set_request_filter] and
     * [method`Logger`.set_response_filter].
     * @constructor 
     * @param level the debug level
     */
    constructor(level: LoggerLogLevel) 
    /**
     * Creates a new #SoupLogger with the given debug level.
     * 
     * If you need finer control over what message parts are and aren't
     * logged, use [method`Logger`.set_request_filter] and
     * [method`Logger`.set_response_filter].
     * @constructor 
     * @param level the debug level
     */
    static new(level: LoggerLogLevel): Logger
    _init(config?: Logger.ConstructorProperties): void
}

export module Message {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accept-certificate`
     */
    export interface AcceptCertificateSignalCallback {
        (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags): boolean
    }

    /**
     * Signal callback interface for `authenticate`
     */
    export interface AuthenticateSignalCallback {
        (auth: Auth, retrying: boolean): boolean
    }

    /**
     * Signal callback interface for `content-sniffed`
     */
    export interface ContentSniffedSignalCallback {
        (type: string, params: GLib.HashTable): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-body`
     */
    export interface GotBodySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-headers`
     */
    export interface GotHeadersSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-informational`
     */
    export interface GotInformationalSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hsts-enforced`
     */
    export interface HstsEnforcedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `network-event`
     */
    export interface NetworkEventSignalCallback {
        (event: Gio.SocketClientEvent, connection: Gio.IOStream): void
    }

    /**
     * Signal callback interface for `request-certificate`
     */
    export interface RequestCertificateSignalCallback {
        (tlsConnection: Gio.TlsClientConnection): boolean
    }

    /**
     * Signal callback interface for `request-certificate-password`
     */
    export interface RequestCertificatePasswordSignalCallback {
        (tlsPassword: Gio.TlsPassword): boolean
    }

    /**
     * Signal callback interface for `restarted`
     */
    export interface RestartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `starting`
     */
    export interface StartingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-body`
     */
    export interface WroteBodySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-body-data`
     */
    export interface WroteBodyDataSignalCallback {
        (chunkSize: number): void
    }

    /**
     * Signal callback interface for `wrote-headers`
     */
    export interface WroteHeadersSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.Message

        /**
         * The [struct`GLib`.Uri] loaded in the application when the message was
         * queued.
         */
        firstParty?: GLib.Uri | null
        /**
         * Various message options.
         */
        flags?: MessageFlags | null
        /**
         * Whether the message is an OPTIONS ping.
         * 
         * The #SoupMessage is intended to be used to send
         * `OPTIONS *` to a server. When set to %TRUE, the
         * path of [property`Message:`uri] will be ignored and
         * [property`Message:`method] set to %SOUP_METHOD_OPTIONS.
         */
        isOptionsPing?: boolean | null
        /**
         * Set when the message is navigating between top level domains.
         */
        isTopLevelNavigation?: boolean | null
        /**
         * The message's HTTP method.
         */
        method?: string | null
        /**
         * Sets the priority of the #SoupMessage. See
         * [method`Message`.set_priority] for further details.
         */
        priority?: MessagePriority | null
        /**
         * Site used to compare cookies against. Used for SameSite cookie support.
         */
        siteForCookies?: GLib.Uri | null
        /**
         * The message's Request-URI.
         */
        uri?: GLib.Uri | null
    }

}

export interface Message {

    // Own properties of Soup-3.0.Soup.Message

    /**
     * The [struct`GLib`.Uri] loaded in the application when the message was
     * queued.
     */
    firstParty: GLib.Uri
    /**
     * Various message options.
     */
    flags: MessageFlags
    /**
     * The HTTP protocol version to use.
     */
    readonly httpVersion: HTTPVersion
    /**
     * Whether the message is an OPTIONS ping.
     * 
     * The #SoupMessage is intended to be used to send
     * `OPTIONS *` to a server. When set to %TRUE, the
     * path of [property`Message:`uri] will be ignored and
     * [property`Message:`method] set to %SOUP_METHOD_OPTIONS.
     */
    isOptionsPing: boolean
    /**
     * Set when the message is navigating between top level domains.
     */
    isTopLevelNavigation: boolean
    /**
     * The message's HTTP method.
     */
    method: string
    /**
     * Sets the priority of the #SoupMessage. See
     * [method`Message`.set_priority] for further details.
     */
    priority: MessagePriority
    /**
     * The HTTP response reason phrase.
     */
    readonly reasonPhrase: string
    /**
     * The remote [class`Gio`.SocketAddress] of the connection associated
     * with the message.
     */
    readonly remoteAddress: Gio.SocketAddress
    /**
     * The HTTP request headers.
     */
    readonly requestHeaders: MessageHeaders
    /**
     * The HTTP response headers.
     */
    readonly responseHeaders: MessageHeaders
    /**
     * Site used to compare cookies against. Used for SameSite cookie support.
     */
    siteForCookies: GLib.Uri
    /**
     * The HTTP response status code.
     */
    readonly statusCode: number
    /**
     * The Name of TLS ciphersuite negotiated for this message connection.
     */
    readonly tlsCiphersuiteName: string
    /**
     * The peer's [class`Gio`.TlsCertificate] associated with the message.
     */
    readonly tlsPeerCertificate: Gio.TlsCertificate
    /**
     * The verification errors on [property`Message:`tls-peer-certificate].
     */
    readonly tlsPeerCertificateErrors: Gio.TlsCertificateFlags
    /**
     * The TLS protocol version negotiated for the message connection.
     */
    readonly tlsProtocolVersion: Gio.TlsProtocolVersion
    /**
     * The message's Request-URI.
     */
    uri: GLib.Uri

    // Owm methods of Soup-3.0.Soup.Message

    /**
     * Adds `flags` to the set of `msg'`s flags.
     * @param flags a set of #SoupMessageFlags values
     */
    addFlags(flags: MessageFlags): void
    /**
     * Disables the actions of [iface`SessionFeature]`s with the
     * given `feature_type` (or a subclass of that type) on `msg`.
     * 
     * `msg` is processed as though the feature(s) hadn't been added to the
     * session. Eg, passing #SOUP_TYPE_CONTENT_SNIFFER for `feature_type`
     * will disable Content-Type sniffing on the message.
     * 
     * You must call this before queueing `msg` on a session; calling it on
     * a message that has already been queued is undefined. In particular,
     * you cannot call this on a message that is being requeued after a
     * redirect or authentication.
     * @param featureType the #GType of a #SoupSessionFeature
     */
    disableFeature(featureType: GObject.GType): void
    /**
     * Returns the unique idenfier for the last connection used.
     * 
     * This may be 0 if it was a cached resource or it has not gotten
     * a connection yet.
     */
    getConnectionId(): number
    /**
     * Gets `msg'`s first-party [struct`GLib`.Uri].
     */
    getFirstParty(): GLib.Uri
    /**
     * Gets the flags on `msg`.
     */
    getFlags(): MessageFlags
    /**
     * Gets the HTTP version of `msg`.
     * 
     * This is the minimum of the version from the request and the version from the
     * response.
     */
    getHttpVersion(): HTTPVersion
    /**
     * Gets whether `msg` is intended to be used to send `OPTIONS *` to a server.
     */
    getIsOptionsPing(): boolean
    /**
     * Returns if this message is set as a top level navigation.
     * 
     * Used for same-site policy checks.
     */
    getIsTopLevelNavigation(): boolean
    /**
     * Returns the method of this message.
     */
    getMethod(): string
    /**
     * Get the [struct`MessageMetrics]` of `msg`.
     * 
     * If the flag %SOUP_MESSAGE_COLLECT_METRICS is not enabled for `msg` this will
     * return %NULL.
     */
    getMetrics(): MessageMetrics | null
    /**
     * Retrieves the [enum`MessagePriority]`.
     * 
     * If not set this value defaults to #SOUP_MESSAGE_PRIORITY_NORMAL.
     */
    getPriority(): MessagePriority
    /**
     * Returns the reason phrase for the status of this message.
     */
    getReasonPhrase(): string | null
    /**
     * Get the remote [class`Gio`.SocketAddress] of the connection associated with
     * the message.
     * 
     * The returned address can be %NULL if the connection hasn't been established
     * yet, or the resource was loaded from the disk cache. In case of proxy
     * connections, the remote address returned is a [class`Gio`.ProxyAddress]. If
     * [property`Session:`remote-connectable] is set the returned address id for the
     * connection ot the session's remote connectable.
     */
    getRemoteAddress(): Gio.SocketAddress | null
    /**
     * Returns the headers sent with the request.
     */
    getRequestHeaders(): MessageHeaders
    /**
     * Returns the headers recieved with the response.
     */
    getResponseHeaders(): MessageHeaders
    /**
     * Gets `msg'`s site for cookies #GUri.
     */
    getSiteForCookies(): GLib.Uri
    /**
     * Returns the set status of this message.
     */
    getStatus(): Status
    /**
     * Gets the name of the TLS ciphersuite negotiated for `msg'`s connection.
     */
    getTlsCiphersuiteName(): string
    /**
     * Gets the peer's [class`Gio`.TlsCertificate] associated with `msg'`s connection.
     * 
     * Note that this is not set yet during the emission of
     * [signal`Message:`:accept-certificate] signal.
     */
    getTlsPeerCertificate(): Gio.TlsCertificate | null
    /**
     * Gets the errors associated with validating `msg'`s TLS peer certificate.
     * Note that this is not set yet during the emission of
     * [signal`Message:`:accept-certificate] signal.
     */
    getTlsPeerCertificateErrors(): Gio.TlsCertificateFlags
    /**
     * Gets the TLS protocol version negotiated for `msg'`s connection.
     * 
     * If the message connection is not SSL, %G_TLS_PROTOCOL_VERSION_UNKNOWN is returned.
     */
    getTlsProtocolVersion(): Gio.TlsProtocolVersion
    /**
     * Gets `msg'`s URI.
     */
    getUri(): GLib.Uri
    /**
     * Get whether [iface`SessionFeature]`s of the given `feature_type`
     * (or a subclass of that type) are disabled on `msg`.
     * 
     * See [method`Message`.disable_feature].
     * @param featureType the #GType of a #SoupSessionFeature
     */
    isFeatureDisabled(featureType: GObject.GType): boolean
    /**
     * Determines whether or not `msg'`s connection can be kept alive for
     * further requests after processing `msg`.
     * 
     * The result is based on the HTTP version, Connection header, etc.
     */
    isKeepalive(): boolean
    /**
     * Queries if `flags` are present in the set of `msg'`s flags.
     * @param flags a set of #SoupMessageFlags values
     */
    queryFlags(flags: MessageFlags): boolean
    /**
     * Removes `flags` from the set of `msg'`s flags.
     * @param flags a set of #SoupMessageFlags values
     */
    removeFlags(flags: MessageFlags): void
    /**
     * Sets `first_party` as the main document #GUri for `msg`.
     * 
     * For details of when and how this is used refer to the documentation for
     * [enum`CookieJarAcceptPolicy]`.
     * @param firstParty the #GUri for the `msg'`s first party
     */
    setFirstParty(firstParty: GLib.Uri): void
    /**
     * Sets the specified flags on `msg`.
     * @param flags a set of #SoupMessageFlags values
     */
    setFlags(flags: MessageFlags): void
    /**
     * Set whether `msg` is intended to be used to send `OPTIONS *` to a server.
     * 
     * When set to %TRUE, the path of [property`Message:`uri] will be ignored and
     * [property`Message:`method] set to %SOUP_METHOD_OPTIONS.
     * @param isOptionsPing the value to set
     */
    setIsOptionsPing(isOptionsPing: boolean): void
    /**
     * Sets whether the current request is a top-level navitation.
     * 
     * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more information.
     * @param isTopLevelNavigation if %TRUE indicate the current request is a top-level navigation
     */
    setIsTopLevelNavigation(isTopLevelNavigation: boolean): void
    /**
     * Set `msg'`s HTTP method to `method`.
     * @param method the value to set
     */
    setMethod(method: string): void
    /**
     * Sets the priority of a message.
     * 
     * Note that this won't have any effect unless used before the message is added
     * to the session's message processing queue.
     * 
     * The message will be placed just before any other previously added
     * message with lower priority (messages with the same priority are
     * processed on a FIFO basis).
     * 
     * Setting priorities does not currently work with synchronous messages
     * because in the synchronous/blocking case, priority ends up being determined
     * semi-randomly by thread scheduling.
     * @param priority the #SoupMessagePriority
     */
    setPriority(priority: MessagePriority): void
    /**
     * Set the request body of a #SoupMessage.
     * 
     * If `content_type` is %NULL and `stream` is not %NULL the Content-Type header will
     * not be changed if present.
     * The request body needs to be set again in case `msg` is restarted
     * (in case of redirection or authentication).
     * @param contentType MIME Content-Type of the body, or %NULL if unknown
     * @param stream a #GInputStream to read the request body from
     * @param contentLength the byte length of `stream` or -1 if unknown
     */
    setRequestBody(contentType: string | null, stream: Gio.InputStream | null, contentLength: number): void
    /**
     * Set the request body of a #SoupMessage from [struct`GLib`.Bytes].
     * 
     * If `content_type` is %NULL and `bytes` is not %NULL the Content-Type header will
     * not be changed if present.
     * The request body needs to be set again in case `msg` is restarted
     * (in case of redirection or authentication).
     * @param contentType MIME Content-Type of the body, or %NULL if unknown
     * @param bytes a #GBytes with the request body data
     */
    setRequestBodyFromBytes(contentType: string | null, bytes: any | null): void
    /**
     * Sets `site_for_cookies` as the policy URL for same-site cookies for `msg`.
     * 
     * It is either the URL of the top-level document or %NULL depending on whether
     * the registrable domain of this document's URL matches the registrable domain
     * of its parent's/opener's URL. For the top-level document it is set to the
     * document's URL.
     * 
     * See the [same-site spec](https://tools.ietf.org/html/draft-ietf-httpbis-cookie-same-site-00)
     * for more information.
     * @param siteForCookies the #GUri for the `msg'`s site for cookies
     */
    setSiteForCookies(siteForCookies: GLib.Uri | null): void
    /**
     * Sets the `certificate` to be used by `msg'`s connection when a
     * client certificate is requested during the TLS handshake.
     * 
     * You can call this as a response to [signal`Message:`:request-certificate]
     * signal, or before the connection is started. If `certificate` is %NULL
     * the handshake will continue without providing a GTlsCertificate.
     * Note that the [class`Gio`.TlsCertificate] set by this function will be ignored if
     * [property`Session:`tls-interaction] is not %NULL.
     * @param certificate the #GTlsCertificate to set, or %NULL
     */
    setTlsClientCertificate(certificate: Gio.TlsCertificate | null): void
    /**
     * Sets `msg'`s URI to `uri`.
     * 
     * If `msg` has already been sent and you want to re-send it with the new URI,
     * you need to send it again.
     * @param uri the new #GUri
     */
    setUri(uri: GLib.Uri): void
    /**
     * Completes a certificate password request.
     * 
     * You must call this as a response to
     * [signal`Message:`:request-certificate-password] signal, to notify `msg` that
     * the [class`Gio`.TlsPassword] has already been updated.
     */
    tlsClientCertificatePasswordRequestComplete(): void

    // Own signals of Soup-3.0.Soup.Message

    connect(sigName: "accept-certificate", callback: Message.AcceptCertificateSignalCallback): number
    on(sigName: "accept-certificate", callback: Message.AcceptCertificateSignalCallback): number
    once(sigName: "accept-certificate", callback: Message.AcceptCertificateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "accept-certificate", tlsPeerErrors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "authenticate", callback: Message.AuthenticateSignalCallback): number
    on(sigName: "authenticate", callback: Message.AuthenticateSignalCallback): number
    once(sigName: "authenticate", callback: Message.AuthenticateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "authenticate", retrying: boolean, ...args: any[]): void
    connect(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback): number
    on(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback): number
    once(sigName: "content-sniffed", callback: Message.ContentSniffedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "content-sniffed", params: GLib.HashTable, ...args: any[]): void
    connect(sigName: "finished", callback: Message.FinishedSignalCallback): number
    on(sigName: "finished", callback: Message.FinishedSignalCallback): number
    once(sigName: "finished", callback: Message.FinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "got-body", callback: Message.GotBodySignalCallback): number
    on(sigName: "got-body", callback: Message.GotBodySignalCallback): number
    once(sigName: "got-body", callback: Message.GotBodySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-body", ...args: any[]): void
    connect(sigName: "got-headers", callback: Message.GotHeadersSignalCallback): number
    on(sigName: "got-headers", callback: Message.GotHeadersSignalCallback): number
    once(sigName: "got-headers", callback: Message.GotHeadersSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-headers", ...args: any[]): void
    connect(sigName: "got-informational", callback: Message.GotInformationalSignalCallback): number
    on(sigName: "got-informational", callback: Message.GotInformationalSignalCallback): number
    once(sigName: "got-informational", callback: Message.GotInformationalSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-informational", ...args: any[]): void
    connect(sigName: "hsts-enforced", callback: Message.HstsEnforcedSignalCallback): number
    on(sigName: "hsts-enforced", callback: Message.HstsEnforcedSignalCallback): number
    once(sigName: "hsts-enforced", callback: Message.HstsEnforcedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hsts-enforced", ...args: any[]): void
    connect(sigName: "network-event", callback: Message.NetworkEventSignalCallback): number
    on(sigName: "network-event", callback: Message.NetworkEventSignalCallback): number
    once(sigName: "network-event", callback: Message.NetworkEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "network-event", connection: Gio.IOStream, ...args: any[]): void
    connect(sigName: "request-certificate", callback: Message.RequestCertificateSignalCallback): number
    on(sigName: "request-certificate", callback: Message.RequestCertificateSignalCallback): number
    once(sigName: "request-certificate", callback: Message.RequestCertificateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-certificate", ...args: any[]): void
    connect(sigName: "request-certificate-password", callback: Message.RequestCertificatePasswordSignalCallback): number
    on(sigName: "request-certificate-password", callback: Message.RequestCertificatePasswordSignalCallback): number
    once(sigName: "request-certificate-password", callback: Message.RequestCertificatePasswordSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-certificate-password", ...args: any[]): void
    connect(sigName: "restarted", callback: Message.RestartedSignalCallback): number
    on(sigName: "restarted", callback: Message.RestartedSignalCallback): number
    once(sigName: "restarted", callback: Message.RestartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "restarted", ...args: any[]): void
    connect(sigName: "starting", callback: Message.StartingSignalCallback): number
    on(sigName: "starting", callback: Message.StartingSignalCallback): number
    once(sigName: "starting", callback: Message.StartingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "starting", ...args: any[]): void
    connect(sigName: "wrote-body", callback: Message.WroteBodySignalCallback): number
    on(sigName: "wrote-body", callback: Message.WroteBodySignalCallback): number
    once(sigName: "wrote-body", callback: Message.WroteBodySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-body", ...args: any[]): void
    connect(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback): number
    on(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback): number
    once(sigName: "wrote-body-data", callback: Message.WroteBodyDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-body-data", ...args: any[]): void
    connect(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback): number
    on(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback): number
    once(sigName: "wrote-headers", callback: Message.WroteHeadersSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-headers", ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.Message

    connect(sigName: "notify::first-party", callback: any): number
    on(sigName: "notify::first-party", callback: any): number
    once(sigName: "notify::first-party", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-party", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: "notify::http-version", callback: any): number
    on(sigName: "notify::http-version", callback: any): number
    once(sigName: "notify::http-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::http-version", ...args: any[]): void
    connect(sigName: "notify::is-options-ping", callback: any): number
    on(sigName: "notify::is-options-ping", callback: any): number
    once(sigName: "notify::is-options-ping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-options-ping", ...args: any[]): void
    connect(sigName: "notify::is-top-level-navigation", callback: any): number
    on(sigName: "notify::is-top-level-navigation", callback: any): number
    once(sigName: "notify::is-top-level-navigation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-top-level-navigation", ...args: any[]): void
    connect(sigName: "notify::method", callback: any): number
    on(sigName: "notify::method", callback: any): number
    once(sigName: "notify::method", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::priority", callback: any): number
    on(sigName: "notify::priority", callback: any): number
    once(sigName: "notify::priority", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::priority", ...args: any[]): void
    connect(sigName: "notify::reason-phrase", callback: any): number
    on(sigName: "notify::reason-phrase", callback: any): number
    once(sigName: "notify::reason-phrase", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reason-phrase", ...args: any[]): void
    connect(sigName: "notify::remote-address", callback: any): number
    on(sigName: "notify::remote-address", callback: any): number
    once(sigName: "notify::remote-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-address", ...args: any[]): void
    connect(sigName: "notify::request-headers", callback: any): number
    on(sigName: "notify::request-headers", callback: any): number
    once(sigName: "notify::request-headers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::request-headers", ...args: any[]): void
    connect(sigName: "notify::response-headers", callback: any): number
    on(sigName: "notify::response-headers", callback: any): number
    once(sigName: "notify::response-headers", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::response-headers", ...args: any[]): void
    connect(sigName: "notify::site-for-cookies", callback: any): number
    on(sigName: "notify::site-for-cookies", callback: any): number
    once(sigName: "notify::site-for-cookies", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::site-for-cookies", ...args: any[]): void
    connect(sigName: "notify::status-code", callback: any): number
    on(sigName: "notify::status-code", callback: any): number
    once(sigName: "notify::status-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status-code", ...args: any[]): void
    connect(sigName: "notify::tls-ciphersuite-name", callback: any): number
    on(sigName: "notify::tls-ciphersuite-name", callback: any): number
    once(sigName: "notify::tls-ciphersuite-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-ciphersuite-name", ...args: any[]): void
    connect(sigName: "notify::tls-peer-certificate", callback: any): number
    on(sigName: "notify::tls-peer-certificate", callback: any): number
    once(sigName: "notify::tls-peer-certificate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-peer-certificate", ...args: any[]): void
    connect(sigName: "notify::tls-peer-certificate-errors", callback: any): number
    on(sigName: "notify::tls-peer-certificate-errors", callback: any): number
    once(sigName: "notify::tls-peer-certificate-errors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-peer-certificate-errors", ...args: any[]): void
    connect(sigName: "notify::tls-protocol-version", callback: any): number
    on(sigName: "notify::tls-protocol-version", callback: any): number
    once(sigName: "notify::tls-protocol-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-protocol-version", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Represents an HTTP message being sent or received.
 * 
 * A #SoupMessage represents an HTTP message that is being sent or
 * received.
 * 
 * You would create a #SoupMessage with [ctor`Message`.new] or
 * [ctor`Message`.new_from_uri], set up its fields appropriately, and send it.
 * 
 * [property`Message:`status-code] will normally be a [enum`Status]` value, eg,
 * %SOUP_STATUS_OK, though of course it might actually be an unknown status
 * code. [property`Message:`reason-phrase] is the actual text returned from the
 * server, which may or may not correspond to the "standard" description of
 * `status_code`. At any rate, it is almost certainly not localized, and not very
 * descriptive even if it is in the user's language; you should not use
 * [property`Message:`reason-phrase] in user-visible messages. Rather, you should
 * look at [property`Message:`status-code], and determine an end-user-appropriate
 * message based on that and on what you were trying to do.
 * 
 * Note that libsoup's terminology here does not quite match the HTTP
 * specification: in RFC 2616, an "HTTP-message" is *either* a Request, *or* a
 * Response. In libsoup, a #SoupMessage combines both the request and the
 * response.
 * @class 
 */
export class Message extends GObject.Object {

    // Own properties of Soup-3.0.Soup.Message

    static name: string

    // Constructors of Soup-3.0.Soup.Message

    constructor(config?: Message.ConstructorProperties) 
    /**
     * Creates a new empty #SoupMessage, which will connect to `uri`.
     * @constructor 
     * @param method the HTTP method for the created request
     * @param uriString the destination endpoint (as a string)
     */
    constructor(method: string, uriString: string) 
    /**
     * Creates a new empty #SoupMessage, which will connect to `uri`.
     * @constructor 
     * @param method the HTTP method for the created request
     * @param uriString the destination endpoint (as a string)
     */
    static new(method: string, uriString: string): Message
    /**
     * Creates a new #SoupMessage and sets it up to send the given `encoded_form`
     * to `uri` via `method`. If `method` is "GET", it will include the form data
     * into `uri'`s query field, and if `method` is "POST" or "PUT", it will be set as
     * request body.
     * 
     * This function takes the ownership of `encoded_form,` that will be released
     * with [func`GLib`.free] when no longer in use. See also [func`form_encode]`,
     * [func`form_encode_hash]` and [func`form_encode_datalist]`.
     * @constructor 
     * @param method the HTTP method for the created request (GET, POST or PUT)
     * @param uriString the destination endpoint (as a string)
     * @param encodedForm a encoded form
     */
    static newFromEncodedForm(method: string, uriString: string, encodedForm: string): Message
    /**
     * Creates a new #SoupMessage and sets it up to send `multipart` to
     * `uri_string` via POST.
     * @constructor 
     * @param uriString the destination endpoint
     * @param multipart a #SoupMultipart
     */
    static newFromMultipart(uriString: string, multipart: Multipart): Message
    /**
     * Creates a new empty #SoupMessage, which will connect to `uri`.
     * @constructor 
     * @param method the HTTP method for the created request
     * @param uri the destination endpoint
     */
    static newFromUri(method: string, uri: GLib.Uri): Message
    /**
     * Creates a new #SoupMessage to send `OPTIONS *` to a server. The path of
     * `base_uri` will be ignored.
     * @constructor 
     * @param baseUri the destination endpoint
     */
    static newOptionsPing(baseUri: GLib.Uri): Message
    _init(config?: Message.ConstructorProperties): void
}

export module MultipartInputStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.PollableInputStream.ConstructorProperties, Gio.FilterInputStream.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.MultipartInputStream

        /**
         * The [class`Message]`.
         */
        message?: Message | null
    }

}

export interface MultipartInputStream extends Gio.PollableInputStream {

    // Own properties of Soup-3.0.Soup.MultipartInputStream

    /**
     * The [class`Message]`.
     */
    readonly message: Message

    // Conflicting properties

    parentInstance: any

    // Owm methods of Soup-3.0.Soup.MultipartInputStream

    /**
     * Obtains the headers for the part currently being processed.
     * 
     * Note that the [struct`MessageHeaders]` that are returned are owned by the
     * #SoupMultipartInputStream and will be replaced when a call is made to
     * [method`MultipartInputStream`.next_part] or its async counterpart, so if
     * keeping the headers is required, a copy must be made.
     * 
     * Note that if a part had no headers at all an empty [struct`MessageHeaders]`
     * will be returned.
     */
    getHeaders(): MessageHeaders | null
    /**
     * Obtains an input stream for the next part.
     * 
     * When dealing with a multipart response the input stream needs to be wrapped
     * in a #SoupMultipartInputStream and this function or its async counterpart
     * need to be called to obtain the first part for reading.
     * 
     * After calling this function,
     * [method`MultipartInputStream`.get_headers] can be used to obtain the
     * headers for the first part. A read of 0 bytes indicates the end of
     * the part; a new call to this function should be done at that point,
     * to obtain the next part.
     * @param cancellable a #GCancellable
     */
    nextPart(cancellable: Gio.Cancellable | null): Gio.InputStream | null
    /**
     * Obtains a [class`Gio`.InputStream] for the next request.
     * 
     * See [method`MultipartInputStream`.next_part] for details on the workflow.
     * @param ioPriority the I/O priority for the request.
     * @param cancellable a #GCancellable.
     * @param callback callback to call when request is satisfied.
     */
    nextPartAsync(ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous request for the next part.
     * @param result a #GAsyncResult.
     */
    nextPartFinish(result: Gio.AsyncResult): Gio.InputStream | null

    // Class property signals of Soup-3.0.Soup.MultipartInputStream

    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
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

/**
 * Handles streams of multipart messages.
 * 
 * This adds support for the multipart responses. For handling the
 * multiple parts the user needs to wrap the [class`Gio`.InputStream] obtained by
 * sending the request with a [class`MultipartInputStream]` and use
 * [method`MultipartInputStream`.next_part] before reading. Responses
 * which are not wrapped will be treated like non-multipart responses.
 * 
 * Note that although #SoupMultipartInputStream is a [class`Gio`.InputStream],
 * you should not read directly from it, and the results are undefined
 * if you do.
 * @class 
 */
export class MultipartInputStream extends Gio.FilterInputStream {

    // Own properties of Soup-3.0.Soup.MultipartInputStream

    static name: string

    // Constructors of Soup-3.0.Soup.MultipartInputStream

    constructor(config?: MultipartInputStream.ConstructorProperties) 
    /**
     * Creates a new #SoupMultipartInputStream that wraps the
     * [class`Gio`.InputStream] obtained by sending the [class`Message]`.
     * 
     * Reads should not be done directly through this object, use the input streams
     * returned by [method`MultipartInputStream`.next_part] or its async
     * counterpart instead.
     * @constructor 
     * @param msg the #SoupMessage the response is related to.
     * @param baseStream the #GInputStream returned by sending the request.
     */
    constructor(msg: Message, baseStream: Gio.InputStream) 
    /**
     * Creates a new #SoupMultipartInputStream that wraps the
     * [class`Gio`.InputStream] obtained by sending the [class`Message]`.
     * 
     * Reads should not be done directly through this object, use the input streams
     * returned by [method`MultipartInputStream`.next_part] or its async
     * counterpart instead.
     * @constructor 
     * @param msg the #SoupMessage the response is related to.
     * @param baseStream the #GInputStream returned by sending the request.
     */
    static new(msg: Message, baseStream: Gio.InputStream): MultipartInputStream
    _init(config?: MultipartInputStream.ConstructorProperties): void
}

export module Server {

    // Signal callback interfaces

    /**
     * Signal callback interface for `request-aborted`
     */
    export interface RequestAbortedSignalCallback {
        (message: ServerMessage): void
    }

    /**
     * Signal callback interface for `request-finished`
     */
    export interface RequestFinishedSignalCallback {
        (message: ServerMessage): void
    }

    /**
     * Signal callback interface for `request-read`
     */
    export interface RequestReadSignalCallback {
        (message: ServerMessage): void
    }

    /**
     * Signal callback interface for `request-started`
     */
    export interface RequestStartedSignalCallback {
        (message: ServerMessage): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.Server

        /**
         * If %TRUE, percent-encoding in the Request-URI path will not be
         * automatically decoded.
         */
        rawPaths?: boolean | null
        /**
         * Server header.
         * 
         * If non-%NULL, the value to use for the "Server" header on
         * [class`ServerMessage]`s processed by this server.
         * 
         * The Server header is the server equivalent of the
         * User-Agent header, and provides information about the
         * server and its components. It contains a list of one or
         * more product tokens, separated by whitespace, with the most
         * significant product token coming first. The tokens must be
         * brief, ASCII, and mostly alphanumeric (although "-", "_",
         * and "." are also allowed), and may optionally include a "/"
         * followed by a version string. You may also put comments,
         * enclosed in parentheses, between or after the tokens.
         * 
         * Some HTTP server implementations intentionally do not use
         * version numbers in their Server header, so that
         * installations running older versions of the server don't
         * end up advertising their vulnerability to specific security
         * holes.
         * 
         * As with [property`Session:`user_agent], if you set a
         * [property`Server:`server-header] property that has trailing
         * whitespace, #SoupServer will append its own product token (eg,
         * `libsoup/2.3.2`) to the end of the header for you.
         */
        serverHeader?: string | null
        /**
         * A [enum`Gio`.TlsAuthenticationMode] for SSL/TLS client authentication.
         */
        tlsAuthMode?: Gio.TlsAuthenticationMode | null
        /**
         * A [class`Gio`.TlsCertificate[] that has a
         * [property`Gio`.TlsCertificate:private-key] set.
         * 
         * If this is set, then the server will be able to speak
         * https in addition to (or instead of) plain http.
         */
        tlsCertificate?: Gio.TlsCertificate | null
        /**
         * A [class`Gio`.TlsDatabase] to use for validating SSL/TLS client
         * certificates.
         */
        tlsDatabase?: Gio.TlsDatabase | null
    }

}

export interface Server {

    // Own properties of Soup-3.0.Soup.Server

    /**
     * If %TRUE, percent-encoding in the Request-URI path will not be
     * automatically decoded.
     */
    readonly rawPaths: boolean
    /**
     * Server header.
     * 
     * If non-%NULL, the value to use for the "Server" header on
     * [class`ServerMessage]`s processed by this server.
     * 
     * The Server header is the server equivalent of the
     * User-Agent header, and provides information about the
     * server and its components. It contains a list of one or
     * more product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * Some HTTP server implementations intentionally do not use
     * version numbers in their Server header, so that
     * installations running older versions of the server don't
     * end up advertising their vulnerability to specific security
     * holes.
     * 
     * As with [property`Session:`user_agent], if you set a
     * [property`Server:`server-header] property that has trailing
     * whitespace, #SoupServer will append its own product token (eg,
     * `libsoup/2.3.2`) to the end of the header for you.
     */
    serverHeader: string
    /**
     * A [enum`Gio`.TlsAuthenticationMode] for SSL/TLS client authentication.
     */
    tlsAuthMode: Gio.TlsAuthenticationMode
    /**
     * A [class`Gio`.TlsCertificate[] that has a
     * [property`Gio`.TlsCertificate:private-key] set.
     * 
     * If this is set, then the server will be able to speak
     * https in addition to (or instead of) plain http.
     */
    tlsCertificate: Gio.TlsCertificate
    /**
     * A [class`Gio`.TlsDatabase] to use for validating SSL/TLS client
     * certificates.
     */
    tlsDatabase: Gio.TlsDatabase

    // Own fields of Soup-3.0.Soup.Server

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.Server

    /**
     * Adds a new client stream to the `server`.
     * @param stream a #GIOStream
     * @param localAddr the local #GSocketAddress associated with the   `stream`
     * @param remoteAddr the remote #GSocketAddress associated with the   `stream`
     */
    acceptIostream(stream: Gio.IOStream, localAddr: Gio.SocketAddress | null, remoteAddr: Gio.SocketAddress | null): boolean
    /**
     * Adds an authentication domain to `server`.
     * 
     * Each auth domain will have the chance to require authentication for each
     * request that comes in; normally auth domains will require authentication for
     * requests on certain paths that they have been set up to watch, or that meet
     * other criteria set by the caller. If an auth domain determines that a request
     * requires authentication (and the request doesn't contain authentication),
     * `server` will automatically reject the request with an appropriate status (401
     * Unauthorized or 407 Proxy Authentication Required). If the request used the
     * SoupServer:100-continue Expectation, `server` will reject it before the
     * request body is sent.
     * @param authDomain a #SoupAuthDomain
     */
    addAuthDomain(authDomain: AuthDomain): void
    /**
     * Adds an "early" handler to `server` for requests prefixed by `path`.
     * 
     * Note that "normal" and "early" handlers are matched up together, so if you
     * add a normal handler for "/foo" and an early handler for "/foo/bar", then a
     * request to "/foo/bar" (or any path below it) will run only the early handler.
     * (But if you add both handlers at the same path, then both will get run.)
     * 
     * For requests under `path` (that have not already been assigned a
     * status code by a [class`AuthDomain]` or a signal handler), `callback`
     * will be invoked after receiving the request headers, but before
     * receiving the request body; the message's method and
     * request-headers properties will be set.
     * 
     * Early handlers are generally used for processing requests with request bodies
     * in a streaming fashion. If you determine that the request will contain a
     * message body, normally you would call [method`MessageBody`.set_accumulate] on
     * the message's request-body to turn off request-body accumulation, and connect
     * to the message's [signal`ServerMessage:`:got-chunk] signal to process each
     * chunk as it comes in.
     * 
     * To complete the message processing after the full message body has
     * been read, you can either also connect to [signal`ServerMessage:`:got-body],
     * or else you can register a non-early handler for `path` as well. As
     * long as you have not set the status-code by the time
     * [signal`ServerMessage:`:got-body] is emitted, the non-early handler will be
     * run as well.
     * @param path the toplevel path for the handler
     * @param callback callback to invoke for   requests under `path`
     */
    addEarlyHandler(path: string | null, callback: ServerCallback): void
    /**
     * Adds a handler to `server` for requests prefixed by `path`.
     * 
     * If `path` is %NULL or "/", then this will be the default handler for all
     * requests that don't have a more specific handler. (Note though that if you
     * want to handle requests to the special "*" URI, you must explicitly register
     * a handler for "*"; the default handler will not be used for that case.)
     * 
     * For requests under `path` (that have not already been assigned a
     * status code by a [class`AuthDomain]`, an early server handler, or a
     * signal handler), `callback` will be invoked after receiving the
     * request body; the [class`ServerMessage]`'s method, request-headers,
     * and request-body properties will be set.
     * 
     * After determining what to do with the request, the callback must at a minimum
     * call [method`ServerMessage`.set_status] on the message to set the response
     * status code. Additionally, it may set response headers and/or fill in the
     * response body.
     * 
     * If the callback cannot fully fill in the response before returning
     * (eg, if it needs to wait for information from a database, or
     * another network server), it should call [method`Server`.pause_message]
     * to tell `server` to not send the response right away. When the
     * response is ready, call [method`Server`.unpause_message] to cause it
     * to be sent.
     * 
     * To send the response body a bit at a time using "chunked" encoding, first
     * call [method`MessageHeaders`.set_encoding] to set %SOUP_ENCODING_CHUNKED on
     * the response-headers. Then call [method`MessageBody`.append] (or
     * [method`MessageBody`.append_bytes])) to append each chunk as it becomes ready,
     * and [method`Server`.unpause_message] to make sure it's running. (The server
     * will automatically pause the message if it is using chunked encoding but no
     * more chunks are available.) When you are done, call
     * [method`MessageBody`.complete] to indicate that no more chunks are coming.
     * @param path the toplevel path for the handler
     * @param callback callback to invoke for   requests under `path`
     */
    addHandler(path: string | null, callback: ServerCallback): void
    /**
     * Add support for a WebSocket extension of the given `extension_type`.
     * 
     * When a WebSocket client requests an extension of `extension_type,`
     * a new [class`WebsocketExtension]` of type `extension_type` will be created
     * to handle the request.
     * 
     * Note that [class`WebsocketExtensionDeflate]` is supported by default, use
     * [method`Server`.remove_websocket_extension] if you want to disable it.
     * @param extensionType a #GType
     */
    addWebsocketExtension(extensionType: GObject.GType): void
    /**
     * Adds a WebSocket handler to `server` for requests prefixed by `path`.
     * 
     * If `path` is %NULL or "/", then this will be the default handler for all
     * requests that don't have a more specific handler.
     * 
     * When a path has a WebSocket handler registered, `server` will check
     * incoming requests for WebSocket handshakes after all other handlers
     * have run (unless some earlier handler has already set a status code
     * on the message), and update the request's status, response headers,
     * and response body accordingly.
     * 
     * If `origin` is non-%NULL, then only requests containing a matching
     * "Origin" header will be accepted. If `protocols` is non-%NULL, then
     * only requests containing a compatible "Sec-WebSocket-Protocols"
     * header will be accepted. More complicated requirements can be
     * handled by adding a normal handler to `path,` and having it perform
     * whatever checks are needed and
     * setting a failure status code if the handshake should be rejected.
     * @param path the toplevel path for the handler
     * @param origin the origin of the connection
     * @param protocols the protocols   supported by this handler
     * @param callback callback to invoke for   successful WebSocket requests under `path`
     */
    addWebsocketHandler(path: string | null, origin: string | null, protocols: string[] | null, callback: ServerWebsocketCallback): void
    /**
     * Closes and frees `server'`s listening sockets.
     * 
     * Note that if there are currently requests in progress on `server,` that they
     * will continue to be processed if `server'`s [struct`GLib`.MainContext] is still
     * running.
     * 
     * You can call [method`Server`.listen], etc, after calling this function
     * if you want to start listening again.
     */
    disconnect(): void
    /**
     * Gets `server'`s list of listening sockets.
     * 
     * You should treat these sockets as read-only; writing to or
     * modifiying any of these sockets may cause `server` to malfunction.
     */
    getListeners(): Gio.Socket[]
    /**
     * Gets the `server` SSL/TLS client authentication mode.
     */
    getTlsAuthMode(): Gio.TlsAuthenticationMode
    /**
     * Gets the `server` SSL/TLS certificate.
     */
    getTlsCertificate(): Gio.TlsCertificate | null
    /**
     * Gets the `server` SSL/TLS database.
     */
    getTlsDatabase(): Gio.TlsDatabase | null
    /**
     * Gets a list of URIs corresponding to the interfaces `server` is
     * listening on.
     * 
     * These will contain IP addresses, not hostnames, and will also indicate
     * whether the given listener is http or https.
     * 
     * Note that if you used [method`Server`.listen_all] the returned URIs will use
     * the addresses `0.0.0.0` and `::`, rather than actually returning separate
     * URIs for each interface on the system.
     */
    getUris(): GLib.Uri[]
    /**
     * Checks whether `server` is capable of https.
     * 
     * In order for a server to run https, you must call
     * [method`Server`.set_tls_certificate], or set the
     * [property`Server:`tls-certificate] property, to provide it with a
     * certificate to use.
     * 
     * If you are using the deprecated single-listener APIs, then a return value of
     * %TRUE indicates that the #SoupServer serves https exclusively. If you are
     * using [method`Server`.listen], etc, then a %TRUE return value merely indicates
     * that the server is *able* to do https, regardless of whether it actually
     * currently is or not. Use [method`Server`.get_uris] to see if it currently has
     * any https listeners.
     */
    isHttps(): boolean
    /**
     * Attempts to set up `server` to listen for connections on `address`.
     * 
     * If `options` includes %SOUP_SERVER_LISTEN_HTTPS, and `server` has
     * been configured for TLS, then `server` will listen for https
     * connections on this port. Otherwise it will listen for plain http.
     * 
     * You may call this method (along with the other "listen" methods)
     * any number of times on a server, if you want to listen on multiple
     * ports, or set up both http and https service.
     * 
     * After calling this method, `server` will begin accepting and processing
     * connections as soon as the appropriate [struct`GLib`.MainContext] is run.
     * 
     * Note that #SoupServer never makes use of dual IPv4/IPv6 sockets; if
     * `address` is an IPv6 address, it will only accept IPv6 connections.
     * You must configure IPv4 listening separately.
     * @param address the address of the interface to listen on
     * @param options listening options for this server
     */
    listen(address: Gio.SocketAddress, options: ServerListenOptions): boolean
    /**
     * Attempts to set up `server` to listen for connections on all interfaces
     * on the system.
     * 
     * That is, it listens on the addresses `0.0.0.0` and/or `::`, depending on
     * whether `options` includes %SOUP_SERVER_LISTEN_IPV4_ONLY,
     * %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither.) If `port` is specified, `server`
     * will listen on that port. If it is 0, `server` will find an unused port to
     * listen on. (In that case, you can use [method`Server`.get_uris] to find out
     * what port it ended up choosing.
     * 
     * See [method`Server`.listen] for more details.
     * @param port the port to listen on, or 0
     * @param options listening options for this server
     */
    listenAll(port: number, options: ServerListenOptions): boolean
    /**
     * Attempts to set up `server` to listen for connections on "localhost".
     * 
     * That is, `127.0.0.1` and/or `::1`, depending on whether `options` includes
     * %SOUP_SERVER_LISTEN_IPV4_ONLY, %SOUP_SERVER_LISTEN_IPV6_ONLY, or neither). If
     * `port` is specified, `server` will listen on that port. If it is 0, `server`
     * will find an unused port to listen on. (In that case, you can use
     * [method`Server`.get_uris] to find out what port it ended up choosing.
     * 
     * See [method`Server`.listen] for more details.
     * @param port the port to listen on, or 0
     * @param options listening options for this server
     */
    listenLocal(port: number, options: ServerListenOptions): boolean
    /**
     * Attempts to set up `server` to listen for connections on `socket`.
     * 
     * See [method`Server`.listen] for more details.
     * @param socket a listening #GSocket
     * @param options listening options for this server
     */
    listenSocket(socket: Gio.Socket, options: ServerListenOptions): boolean
    /**
     * Pauses I/O on `msg`.
     * 
     * This can be used when you need to return from the server handler without
     * having the full response ready yet. Use [method`Server`.unpause_message] to
     * resume I/O.
     * 
     * This must only be called on a [class`ServerMessage]` which was created by the
     * #SoupServer and are currently doing I/O, such as those passed into a
     * [callback`ServerCallback]` or emitted in a [signal`Server:`:request-read]
     * signal.
     * @param msg a #SoupServerMessage associated with `server`.
     */
    pauseMessage(msg: ServerMessage): void
    /**
     * Removes `auth_domain` from `server`.
     * @param authDomain a #SoupAuthDomain
     */
    removeAuthDomain(authDomain: AuthDomain): void
    /**
     * Removes all handlers (early and normal) registered at `path`.
     * @param path the toplevel path for the handler
     */
    removeHandler(path: string): void
    /**
     * Removes support for WebSocket extension of type `extension_type` (or any subclass of
     * `extension_type)` from `server`.
     * @param extensionType a #GType
     */
    removeWebsocketExtension(extensionType: GObject.GType): void
    /**
     * Sets `server'`s #GTlsAuthenticationMode to use for SSL/TLS client authentication.
     * @param mode a #GTlsAuthenticationMode
     */
    setTlsAuthMode(mode: Gio.TlsAuthenticationMode): void
    /**
     * Sets `server` up to do https, using the given SSL/TLS `certificate`.
     * @param certificate a #GTlsCertificate
     */
    setTlsCertificate(certificate: Gio.TlsCertificate): void
    /**
     * Sets `server'`s #GTlsDatabase to use for validating SSL/TLS client certificates.
     * @param tlsDatabase a #GTlsDatabase
     */
    setTlsDatabase(tlsDatabase: Gio.TlsDatabase): void
    /**
     * Resumes I/O on `msg`.
     * 
     * Use this to resume after calling [method`Server`.pause_message], or after
     * adding a new chunk to a chunked response.
     * 
     * I/O won't actually resume until you return to the main loop.
     * 
     * This must only be called on a [class`ServerMessage]` which was created by the
     * #SoupServer and are currently doing I/O, such as those passed into a
     * [callback`ServerCallback]` or emitted in a [signal`Server:`:request-read]
     * signal.
     * @param msg a #SoupServerMessage associated with `server`.
     */
    unpauseMessage(msg: ServerMessage): void

    // Own virtual methods of Soup-3.0.Soup.Server

    requestAborted(msg: ServerMessage): void
    requestFinished(msg: ServerMessage): void
    requestRead(msg: ServerMessage): void
    requestStarted(msg: ServerMessage): void

    // Own signals of Soup-3.0.Soup.Server

    connect(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback): number
    on(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback): number
    once(sigName: "request-aborted", callback: Server.RequestAbortedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-aborted", ...args: any[]): void
    connect(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback): number
    on(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback): number
    once(sigName: "request-finished", callback: Server.RequestFinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-finished", ...args: any[]): void
    connect(sigName: "request-read", callback: Server.RequestReadSignalCallback): number
    on(sigName: "request-read", callback: Server.RequestReadSignalCallback): number
    once(sigName: "request-read", callback: Server.RequestReadSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-read", ...args: any[]): void
    connect(sigName: "request-started", callback: Server.RequestStartedSignalCallback): number
    on(sigName: "request-started", callback: Server.RequestStartedSignalCallback): number
    once(sigName: "request-started", callback: Server.RequestStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-started", ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.Server

    connect(sigName: "notify::raw-paths", callback: any): number
    on(sigName: "notify::raw-paths", callback: any): number
    once(sigName: "notify::raw-paths", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw-paths", ...args: any[]): void
    connect(sigName: "notify::server-header", callback: any): number
    on(sigName: "notify::server-header", callback: any): number
    once(sigName: "notify::server-header", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::server-header", ...args: any[]): void
    connect(sigName: "notify::tls-auth-mode", callback: any): number
    on(sigName: "notify::tls-auth-mode", callback: any): number
    once(sigName: "notify::tls-auth-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-auth-mode", ...args: any[]): void
    connect(sigName: "notify::tls-certificate", callback: any): number
    on(sigName: "notify::tls-certificate", callback: any): number
    once(sigName: "notify::tls-certificate", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-certificate", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: any): number
    on(sigName: "notify::tls-database", callback: any): number
    once(sigName: "notify::tls-database", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A HTTP server.
 * 
 * #SoupServer implements a simple HTTP server.
 * 
 * To begin, create a server using [ctor`Server`.new]. Add at least one
 * handler by calling [method`Server`.add_handler] or
 * [method`Server`.add_early_handler]; the handler will be called to
 * process any requests underneath the path you pass. (If you want all
 * requests to go to the same handler, just pass "/" (or %NULL) for
 * the path.)
 * 
 * When a new connection is accepted (or a new request is started on
 * an existing persistent connection), the #SoupServer will emit
 * [signal`Server:`:request-started] and then begin processing the request
 * as described below, but note that once the message is assigned a
 * status-code, then callbacks after that point will be
 * skipped. Note also that it is not defined when the callbacks happen
 * relative to various [class`ServerMessage]` signals.
 * 
 * Once the headers have been read, #SoupServer will check if there is
 * a [class`AuthDomain]` `(qv)` covering the Request-URI; if so, and if the
 * message does not contain suitable authorization, then the
 * [class`AuthDomain]` will set a status of %SOUP_STATUS_UNAUTHORIZED on
 * the message.
 * 
 * After checking for authorization, #SoupServer will look for "early"
 * handlers (added with [method`Server`.add_early_handler]) matching the
 * Request-URI. If one is found, it will be run; in particular, this
 * can be used to connect to signals to do a streaming read of the
 * request body.
 * 
 * (At this point, if the request headers contain `Expect:
 * 100-continue`, and a status code has been set, then
 * #SoupServer will skip the remaining steps and return the response.
 * If the request headers contain `Expect:
 * 100-continue` and no status code has been set,
 * #SoupServer will return a %SOUP_STATUS_CONTINUE status before
 * continuing.)
 * 
 * The server will then read in the response body (if present). At
 * this point, if there are no handlers at all defined for the
 * Request-URI, then the server will return %SOUP_STATUS_NOT_FOUND to
 * the client.
 * 
 * Otherwise (assuming no previous step assigned a status to the
 * message) any "normal" handlers (added with
 * [method`Server`.add_handler]) for the message's Request-URI will be
 * run.
 * 
 * Then, if the path has a WebSocket handler registered (and has
 * not yet been assigned a status), #SoupServer will attempt to
 * validate the WebSocket handshake, filling in the response and
 * setting a status of %SOUP_STATUS_SWITCHING_PROTOCOLS or
 * %SOUP_STATUS_BAD_REQUEST accordingly.
 * 
 * If the message still has no status code at this point (and has not
 * been paused with [method`Server`.pause_message]), then it will be
 * given a status of %SOUP_STATUS_INTERNAL_SERVER_ERROR (because at
 * least one handler ran, but returned without assigning a status).
 * 
 * Finally, the server will emit [signal`Server:`:request-finished] (or
 * [signal`Server:`:request-aborted] if an I/O error occurred before
 * handling was completed).
 * 
 * If you want to handle the special "*" URI (eg, "OPTIONS *"), you
 * must explicitly register a handler for "*"; the default handler
 * will not be used for that case.
 * 
 * If you want to process https connections in addition to (or instead
 * of) http connections, you can set the [property`Server:`tls-certificate]
 * property.
 * 
 * Once the server is set up, make one or more calls to
 * [method`Server`.listen], [method`Server`.listen_local], or
 * [method`Server`.listen_all] to tell it where to listen for
 * connections. (All ports on a #SoupServer use the same handlers; if
 * you need to handle some ports differently, such as returning
 * different data for http and https, you'll need to create multiple
 * `SoupServer`s, or else check the passed-in URI in the handler
 * function.).
 * 
 * #SoupServer will begin processing connections as soon as you return
 * to (or start) the main loop for the current thread-default
 * [struct`GLib`.MainContext].
 * @class 
 */
export class Server extends GObject.Object {

    // Own properties of Soup-3.0.Soup.Server

    static name: string

    // Constructors of Soup-3.0.Soup.Server

    constructor(config?: Server.ConstructorProperties) 
    _init(config?: Server.ConstructorProperties): void
}

export module ServerMessage {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accept-certificate`
     */
    export interface AcceptCertificateSignalCallback {
        (tlsPeerCertificate: Gio.TlsCertificate, tlsPeerErrors: Gio.TlsCertificateFlags): boolean
    }

    /**
     * Signal callback interface for `disconnected`
     */
    export interface DisconnectedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `finished`
     */
    export interface FinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-body`
     */
    export interface GotBodySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `got-chunk`
     */
    export interface GotChunkSignalCallback {
        (chunk: any): void
    }

    /**
     * Signal callback interface for `got-headers`
     */
    export interface GotHeadersSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-body`
     */
    export interface WroteBodySignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-body-data`
     */
    export interface WroteBodyDataSignalCallback {
        (chunkSize: number): void
    }

    /**
     * Signal callback interface for `wrote-chunk`
     */
    export interface WroteChunkSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-headers`
     */
    export interface WroteHeadersSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `wrote-informational`
     */
    export interface WroteInformationalSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ServerMessage {

    // Owm methods of Soup-3.0.Soup.ServerMessage

    /**
     * Get the HTTP version of `msg`.
     */
    getHttpVersion(): HTTPVersion
    /**
     * Retrieves the [class`Gio`.SocketAddress] associated with the local end
     * of a connection.
     */
    getLocalAddress(): Gio.SocketAddress | null
    /**
     * Get the HTTP method of `msg`.
     */
    getMethod(): string
    /**
     * Get the HTTP reason phrase of `msg`.
     */
    getReasonPhrase(): string | null
    /**
     * Retrieves the [class`Gio`.SocketAddress] associated with the remote end
     * of a connection.
     */
    getRemoteAddress(): Gio.SocketAddress | null
    /**
     * Retrieves the IP address associated with the remote end of a
     * connection.
     */
    getRemoteHost(): string | null
    /**
     * Get the request body of `msg`.
     */
    getRequestBody(): MessageBody
    /**
     * Get the request headers of `msg`.
     */
    getRequestHeaders(): MessageHeaders
    /**
     * Get the response body of `msg`.
     */
    getResponseBody(): MessageBody
    /**
     * Get the response headers of `msg`.
     */
    getResponseHeaders(): MessageHeaders
    /**
     * Retrieves the [class`Gio`.Socket] that `msg` is associated with.
     * 
     * If you are using this method to observe when multiple requests are
     * made on the same persistent HTTP connection (eg, as the ntlm-test
     * test program does), you will need to pay attention to socket
     * destruction as well (eg, by using weak references), so that you do
     * not get fooled when the allocator reuses the memory address of a
     * previously-destroyed socket to represent a new socket.
     */
    getSocket(): Gio.Socket | null
    /**
     * Get the HTTP status code of `msg`.
     */
    getStatus(): number
    /**
     * Get `msg'`s URI.
     */
    getUri(): GLib.Uri
    /**
     * Gets if `msg` represents an OPTIONS message with the path `*`.
     */
    isOptionsPing(): boolean
    /**
     * Set the HTTP version of `msg`.
     * @param version a #SoupHTTPVersion
     */
    setHttpVersion(version: HTTPVersion): void
    /**
     * Sets `msg'`s status_code to `status_code` and adds a Location header
     * pointing to `redirect_uri`. Use this from a [class`Server]` when you
     * want to redirect the client to another URI.
     * 
     * `redirect_uri` can be a relative URI, in which case it is
     * interpreted relative to `msg'`s current URI. In particular, if
     * `redirect_uri` is just a path, it will replace the path
     * *and query* of `msg'`s URI.
     * @param statusCode a 3xx status code
     * @param redirectUri the URI to redirect `msg` to
     */
    setRedirect(statusCode: number, redirectUri: string): void
    /**
     * Convenience function to set the response body of a #SoupServerMessage. If
     * `content_type` is %NULL, the response body must be empty as well.
     * @param contentType MIME Content-Type of the body
     * @param respUse a #SoupMemoryUse describing how to handle `resp_body`
     * @param respBody    a data buffer containing the body of the message response.
     */
    setResponse(contentType: string | null, respUse: MemoryUse, respBody: Uint8Array | null): void
    /**
     * Sets `msg'`s status code to `status_code`.
     * 
     * If `status_code` is a known value and `reason_phrase` is %NULL, the
     * reason_phrase will be set automatically.
     * @param statusCode an HTTP status code
     * @param reasonPhrase a reason phrase
     */
    setStatus(statusCode: number, reasonPhrase: string | null): void
    /**
     * "Steals" the HTTP connection associated with `msg` from its #SoupServer. This
     * happens immediately, regardless of the current state of the connection; if
     * the response to `msg` has not yet finished being sent, then it will be
     * discarded; you can steal the connection from a
     * [signal`ServerMessage:`:wrote-informational] or
     * [signal`ServerMessage:`:wrote-body] signal handler if you need to wait for
     * part or all of the response to be sent.
     * 
     * Note that when calling this function from C, `msg` will most
     * likely be freed as a side effect.
     */
    stealConnection(): Gio.IOStream

    // Own signals of Soup-3.0.Soup.ServerMessage

    connect(sigName: "accept-certificate", callback: ServerMessage.AcceptCertificateSignalCallback): number
    on(sigName: "accept-certificate", callback: ServerMessage.AcceptCertificateSignalCallback): number
    once(sigName: "accept-certificate", callback: ServerMessage.AcceptCertificateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "accept-certificate", tlsPeerErrors: Gio.TlsCertificateFlags, ...args: any[]): void
    connect(sigName: "disconnected", callback: ServerMessage.DisconnectedSignalCallback): number
    on(sigName: "disconnected", callback: ServerMessage.DisconnectedSignalCallback): number
    once(sigName: "disconnected", callback: ServerMessage.DisconnectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "disconnected", ...args: any[]): void
    connect(sigName: "finished", callback: ServerMessage.FinishedSignalCallback): number
    on(sigName: "finished", callback: ServerMessage.FinishedSignalCallback): number
    once(sigName: "finished", callback: ServerMessage.FinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "finished", ...args: any[]): void
    connect(sigName: "got-body", callback: ServerMessage.GotBodySignalCallback): number
    on(sigName: "got-body", callback: ServerMessage.GotBodySignalCallback): number
    once(sigName: "got-body", callback: ServerMessage.GotBodySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-body", ...args: any[]): void
    connect(sigName: "got-chunk", callback: ServerMessage.GotChunkSignalCallback): number
    on(sigName: "got-chunk", callback: ServerMessage.GotChunkSignalCallback): number
    once(sigName: "got-chunk", callback: ServerMessage.GotChunkSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-chunk", ...args: any[]): void
    connect(sigName: "got-headers", callback: ServerMessage.GotHeadersSignalCallback): number
    on(sigName: "got-headers", callback: ServerMessage.GotHeadersSignalCallback): number
    once(sigName: "got-headers", callback: ServerMessage.GotHeadersSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "got-headers", ...args: any[]): void
    connect(sigName: "wrote-body", callback: ServerMessage.WroteBodySignalCallback): number
    on(sigName: "wrote-body", callback: ServerMessage.WroteBodySignalCallback): number
    once(sigName: "wrote-body", callback: ServerMessage.WroteBodySignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-body", ...args: any[]): void
    connect(sigName: "wrote-body-data", callback: ServerMessage.WroteBodyDataSignalCallback): number
    on(sigName: "wrote-body-data", callback: ServerMessage.WroteBodyDataSignalCallback): number
    once(sigName: "wrote-body-data", callback: ServerMessage.WroteBodyDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-body-data", ...args: any[]): void
    connect(sigName: "wrote-chunk", callback: ServerMessage.WroteChunkSignalCallback): number
    on(sigName: "wrote-chunk", callback: ServerMessage.WroteChunkSignalCallback): number
    once(sigName: "wrote-chunk", callback: ServerMessage.WroteChunkSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-chunk", ...args: any[]): void
    connect(sigName: "wrote-headers", callback: ServerMessage.WroteHeadersSignalCallback): number
    on(sigName: "wrote-headers", callback: ServerMessage.WroteHeadersSignalCallback): number
    once(sigName: "wrote-headers", callback: ServerMessage.WroteHeadersSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-headers", ...args: any[]): void
    connect(sigName: "wrote-informational", callback: ServerMessage.WroteInformationalSignalCallback): number
    on(sigName: "wrote-informational", callback: ServerMessage.WroteInformationalSignalCallback): number
    once(sigName: "wrote-informational", callback: ServerMessage.WroteInformationalSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "wrote-informational", ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.ServerMessage

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * An HTTP server request and response pair.
 * 
 * A SoupServerMessage represents an HTTP message that is being sent or
 * received on a [class`Server]`.
 * 
 * [class`Server]` will create `SoupServerMessage`s automatically for
 * incoming requests, which your application will receive via handlers.
 * 
 * Note that libsoup's terminology here does not quite match the HTTP
 * specification: in RFC 2616, an "HTTP-message" is *either* a Request, *or* a
 * Response. In libsoup, a #SoupServerMessage combines both the request and the
 * response.
 * @class 
 */
export class ServerMessage extends GObject.Object {

    // Own properties of Soup-3.0.Soup.ServerMessage

    static name: string

    // Constructors of Soup-3.0.Soup.ServerMessage

    constructor(config?: ServerMessage.ConstructorProperties) 
    _init(config?: ServerMessage.ConstructorProperties): void
}

export module Session {

    // Signal callback interfaces

    /**
     * Signal callback interface for `request-queued`
     */
    export interface RequestQueuedSignalCallback {
        (msg: Message): void
    }

    /**
     * Signal callback interface for `request-unqueued`
     */
    export interface RequestUnqueuedSignalCallback {
        (msg: Message): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.Session

        /**
         * If non-%NULL, the value to use for the "Accept-Language" header
         * on [class`Message]`s sent from this session.
         * 
         * Setting this will disable [property`Session:`accept-language-auto].
         */
        acceptLanguage?: string | null
        /**
         * If %TRUE, #SoupSession will automatically set the string
         * for the "Accept-Language" header on every [class`Message]`
         * sent, based on the return value of [func`GLib`.get_language_names].
         * 
         * Setting this will override any previous value of
         * [property`Session:`accept-language].
         */
        acceptLanguageAuto?: boolean | null
        /**
         * Connection lifetime (in seconds) when idle. Any connection
         * left idle longer than this will be closed.
         * 
         * Although you can change this property at any time, it will
         * only affect newly-created connections, not currently-open
         * ones. You can call [method`Session`.abort] after setting this
         * if you want to ensure that all future connections will have
         * this timeout value.
         */
        idleTimeout?: number | null
        /**
         * Sets the [class`Gio`.InetSocketAddress] to use for the client side of
         * the connection.
         * 
         * Use this property if you want for instance to bind the
         * local socket to a specific IP address.
         */
        localAddress?: Gio.InetSocketAddress | null
        /**
         * The maximum number of connections that the session can open at once.
         */
        maxConns?: number | null
        /**
         * The maximum number of connections that the session can open at once
         * to a given host.
         */
        maxConnsPerHost?: number | null
        /**
         * A [iface`Gio`.ProxyResolver] to use with this session.
         * 
         * If no proxy resolver is set, then the default proxy resolver
         * will be used. See [func`Gio`.ProxyResolver.get_default].
         * You can set it to %NULL if you don't want to use proxies, or
         * set it to your own [iface`Gio`.ProxyResolver] if you want to control
         * what proxies get used.
         */
        proxyResolver?: Gio.ProxyResolver | null
        /**
         * Sets a socket to make outgoing connections on. This will override the default
         * behaviour of opening TCP/IP sockets to the hosts specified in the URIs.
         * 
         * This function is not required for common HTTP usage, but only when connecting
         * to a HTTP service that is not using standard TCP/IP sockets. An example of
         * this is a local service that uses HTTP over UNIX-domain sockets, in that case
         * a [class`Gio`.UnixSocketAddress] can be passed to this function.
         */
        remoteConnectable?: Gio.SocketConnectable | null
        /**
         * The timeout (in seconds) for socket I/O operations
         * (including connecting to a server, and waiting for a reply
         * to an HTTP request).
         * 
         * Although you can change this property at any time, it will
         * only affect newly-created connections, not currently-open
         * ones. You can call [method`Session`.abort] after setting this
         * if you want to ensure that all future connections will have
         * this timeout value.
         * 
         * Not to be confused with [property`Session:`idle-timeout] (which is
         * the length of time that idle persistent connections will be
         * kept open).
         */
        timeout?: number | null
        /**
         * Sets the [class`Gio`.TlsDatabase] to use for validating SSL/TLS
         * certificates.
         * 
         * If no certificate database is set, then the default database will be
         * used. See [method`Gio`.TlsBackend.get_default_database].
         */
        tlsDatabase?: Gio.TlsDatabase | null
        /**
         * A [class`Gio`.TlsInteraction] object that will be passed on to any
         * [class`Gio`.TlsConnection]s created by the session.
         * 
         * This can be used to provide client-side certificates, for example.
         */
        tlsInteraction?: Gio.TlsInteraction | null
        /**
         * User-Agent string.
         * 
         * If non-%NULL, the value to use for the "User-Agent" header
         * on [class`Message]`s sent from this session.
         * 
         * RFC 2616 says: "The User-Agent request-header field
         * contains information about the user agent originating the
         * request. This is for statistical purposes, the tracing of
         * protocol violations, and automated recognition of user
         * agents for the sake of tailoring responses to avoid
         * particular user agent limitations. User agents SHOULD
         * include this field with requests."
         * 
         * The User-Agent header contains a list of one or more
         * product tokens, separated by whitespace, with the most
         * significant product token coming first. The tokens must be
         * brief, ASCII, and mostly alphanumeric (although "-", "_",
         * and "." are also allowed), and may optionally include a "/"
         * followed by a version string. You may also put comments,
         * enclosed in parentheses, between or after the tokens.
         * 
         * If you set a [property`Session:`user-agent] property that has trailing
         * whitespace, #SoupSession will append its own product token
         * (eg, `libsoup/2.3.2`) to the end of the
         * header for you.
         */
        userAgent?: string | null
    }

}

export interface Session {

    // Own properties of Soup-3.0.Soup.Session

    /**
     * If non-%NULL, the value to use for the "Accept-Language" header
     * on [class`Message]`s sent from this session.
     * 
     * Setting this will disable [property`Session:`accept-language-auto].
     */
    acceptLanguage: string
    /**
     * If %TRUE, #SoupSession will automatically set the string
     * for the "Accept-Language" header on every [class`Message]`
     * sent, based on the return value of [func`GLib`.get_language_names].
     * 
     * Setting this will override any previous value of
     * [property`Session:`accept-language].
     */
    acceptLanguageAuto: boolean
    /**
     * Connection lifetime (in seconds) when idle. Any connection
     * left idle longer than this will be closed.
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call [method`Session`.abort] after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     */
    idleTimeout: number
    /**
     * Sets the [class`Gio`.InetSocketAddress] to use for the client side of
     * the connection.
     * 
     * Use this property if you want for instance to bind the
     * local socket to a specific IP address.
     */
    readonly localAddress: Gio.InetSocketAddress
    /**
     * The maximum number of connections that the session can open at once.
     */
    readonly maxConns: number
    /**
     * The maximum number of connections that the session can open at once
     * to a given host.
     */
    readonly maxConnsPerHost: number
    /**
     * A [iface`Gio`.ProxyResolver] to use with this session.
     * 
     * If no proxy resolver is set, then the default proxy resolver
     * will be used. See [func`Gio`.ProxyResolver.get_default].
     * You can set it to %NULL if you don't want to use proxies, or
     * set it to your own [iface`Gio`.ProxyResolver] if you want to control
     * what proxies get used.
     */
    proxyResolver: Gio.ProxyResolver
    /**
     * Sets a socket to make outgoing connections on. This will override the default
     * behaviour of opening TCP/IP sockets to the hosts specified in the URIs.
     * 
     * This function is not required for common HTTP usage, but only when connecting
     * to a HTTP service that is not using standard TCP/IP sockets. An example of
     * this is a local service that uses HTTP over UNIX-domain sockets, in that case
     * a [class`Gio`.UnixSocketAddress] can be passed to this function.
     */
    readonly remoteConnectable: Gio.SocketConnectable
    /**
     * The timeout (in seconds) for socket I/O operations
     * (including connecting to a server, and waiting for a reply
     * to an HTTP request).
     * 
     * Although you can change this property at any time, it will
     * only affect newly-created connections, not currently-open
     * ones. You can call [method`Session`.abort] after setting this
     * if you want to ensure that all future connections will have
     * this timeout value.
     * 
     * Not to be confused with [property`Session:`idle-timeout] (which is
     * the length of time that idle persistent connections will be
     * kept open).
     */
    timeout: number
    /**
     * Sets the [class`Gio`.TlsDatabase] to use for validating SSL/TLS
     * certificates.
     * 
     * If no certificate database is set, then the default database will be
     * used. See [method`Gio`.TlsBackend.get_default_database].
     */
    tlsDatabase: Gio.TlsDatabase
    /**
     * A [class`Gio`.TlsInteraction] object that will be passed on to any
     * [class`Gio`.TlsConnection]s created by the session.
     * 
     * This can be used to provide client-side certificates, for example.
     */
    tlsInteraction: Gio.TlsInteraction
    /**
     * User-Agent string.
     * 
     * If non-%NULL, the value to use for the "User-Agent" header
     * on [class`Message]`s sent from this session.
     * 
     * RFC 2616 says: "The User-Agent request-header field
     * contains information about the user agent originating the
     * request. This is for statistical purposes, the tracing of
     * protocol violations, and automated recognition of user
     * agents for the sake of tailoring responses to avoid
     * particular user agent limitations. User agents SHOULD
     * include this field with requests."
     * 
     * The User-Agent header contains a list of one or more
     * product tokens, separated by whitespace, with the most
     * significant product token coming first. The tokens must be
     * brief, ASCII, and mostly alphanumeric (although "-", "_",
     * and "." are also allowed), and may optionally include a "/"
     * followed by a version string. You may also put comments,
     * enclosed in parentheses, between or after the tokens.
     * 
     * If you set a [property`Session:`user-agent] property that has trailing
     * whitespace, #SoupSession will append its own product token
     * (eg, `libsoup/2.3.2`) to the end of the
     * header for you.
     */
    userAgent: string

    // Own fields of Soup-3.0.Soup.Session

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.Session

    /**
     * Cancels all pending requests in `session` and closes all idle
     * persistent connections.
     */
    abort(): void
    /**
     * Adds `feature'`s functionality to `session`. You cannot add multiple
     * features of the same [alias`GLib`.Type] to a session.
     * 
     * See the main #SoupSession documentation for information on what
     * features are present in sessions by default.
     * @param feature an object that implements #SoupSessionFeature
     */
    addFeature(feature: SessionFeature): void
    /**
     * If `feature_type` is the type of a class that implements
     * [iface`SessionFeature]`, this creates a new feature of that type and
     * adds it to `session` as with [method`Session`.add_feature]. You can use
     * this when you don't need to customize the new feature in any way.
     * Adding multiple features of the same `feature_type` is not allowed.
     * 
     * If `feature_type` is not a [iface`SessionFeature]` type, this gives each
     * existing feature on `session` the chance to accept `feature_type` as
     * a "subfeature". This can be used to add new [class`Auth]` types, for instance.
     * 
     * See the main #SoupSession documentation for information on what
     * features are present in sessions by default.
     * @param featureType a #GType
     */
    addFeatureByType(featureType: GObject.GType): void
    /**
     * Get the value used by `session` for the "Accept-Language" header on new
     * requests.
     */
    getAcceptLanguage(): string | null
    /**
     * Gets whether `session` automatically sets the "Accept-Language" header on new
     * requests.
     */
    getAcceptLanguageAuto(): boolean
    /**
     * Gets the [class`Message]` of the `result` asynchronous operation This is useful
     * to get the [class`Message]` of an asynchronous operation started by `session`
     * from its [callback`Gio`.AsyncReadyCallback].
     * @param result the #GAsyncResult passed to your callback
     */
    getAsyncResultMessage(result: Gio.AsyncResult): Message | null
    /**
     * Gets the feature in `session` of type `feature_type`.
     * @param featureType the #GType of the feature to get
     */
    getFeature(featureType: GObject.GType): SessionFeature | null
    /**
     * Gets the feature in `session` of type `feature_type,` provided
     * that it is not disabled for `msg`.
     * @param featureType the #GType of the feature to get
     * @param msg a #SoupMessage
     */
    getFeatureForMessage(featureType: GObject.GType, msg: Message): SessionFeature | null
    /**
     * Get the timeout in seconds for idle connection lifetime currently used by
     * `session`.
     */
    getIdleTimeout(): number
    /**
     * Get the [class`Gio`.InetSocketAddress] to use for the client side of
     * connections in `session`.
     */
    getLocalAddress(): Gio.InetSocketAddress | null
    /**
     * Get the maximum number of connections that `session` can open at once.
     */
    getMaxConns(): number
    /**
     * Get the maximum number of connections that `session` can open at once to a
     * given host.
     */
    getMaxConnsPerHost(): number
    /**
     * Get the [iface`Gio`.ProxyResolver] currently used by `session`.
     */
    getProxyResolver(): Gio.ProxyResolver | null
    /**
     * Gets the remote connectable if one set.
     */
    getRemoteConnectable(): Gio.SocketConnectable | null
    /**
     * Get the timeout in seconds for socket I/O operations currently used by
     * `session`.
     */
    getTimeout(): number
    /**
     * Get the [class`Gio`.TlsDatabase] currently used by `session`.
     */
    getTlsDatabase(): Gio.TlsDatabase | null
    /**
     * Get the [class`Gio`.TlsInteraction] currently used by `session`.
     */
    getTlsInteraction(): Gio.TlsInteraction | null
    /**
     * Get the value used by `session` for the "User-Agent" header on new requests.
     */
    getUserAgent(): string | null
    /**
     * Tests if `session` has at a feature of type `feature_type` (which can
     * be the type of either a [iface`SessionFeature]`, or else a subtype of
     * some class managed by another feature, such as [class`Auth]`).
     * @param featureType the #GType of the class of features to check for
     */
    hasFeature(featureType: GObject.GType): boolean
    /**
     * Start a preconnection to `msg`.
     * 
     * Once the connection is done, it will remain in idle state so that it can be
     * reused by future requests. If there's already an idle connection for the
     * given `msg` host, the operation finishes successfully without creating a new
     * connection. If a new request for the given `msg` host is made while the
     * preconnect is still ongoing, the request will take the ownership of the
     * connection and the preconnect operation will finish successfully (if there's
     * a connection error it will be handled by the request).
     * 
     * The operation finishes when the connection is done or an error occurred.
     * @param msg a #SoupMessage
     * @param ioPriority the I/O priority of the request
     * @param cancellable a #GCancellable
     * @param callback the callback to invoke when the operation finishes
     */
    preconnectAsync(msg: Message, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Complete a preconnect async operation started with [method`Session`.preconnect_async].
     * @param result the #GAsyncResult passed to your callback
     */
    preconnectFinish(result: Gio.AsyncResult): boolean
    /**
     * Removes `feature'`s functionality from `session`.
     * @param feature a feature that has previously been added to `session`
     */
    removeFeature(feature: SessionFeature): void
    /**
     * Removes all features of type `feature_type` (or any subclass of
     * `feature_type)` from `session`.
     * @param featureType a #GType
     */
    removeFeatureByType(featureType: GObject.GType): void
    /**
     * Synchronously sends `msg` and waits for the beginning of a response.
     * 
     * On success, a [class`Gio`.InputStream] will be returned which you can use to
     * read the response body. ("Success" here means only that an HTTP
     * response was received and understood; it does not necessarily mean
     * that a 2xx class status code was received.)
     * 
     * If non-%NULL, `cancellable` can be used to cancel the request;
     * [method`Session`.send] will return a %G_IO_ERROR_CANCELLED error. Note that
     * with requests that have side effects (eg, `POST`, `PUT`, `DELETE`) it is
     * possible that you might cancel the request after the server acts on it, but
     * before it returns a response, leaving the remote resource in an unknown
     * state.
     * 
     * If `msg` is requeued due to a redirect or authentication, the
     * initial (`3xx/401/407`) response body will be suppressed, and
     * [method`Session`.send] will only return once a final response has been
     * received.
     * @param msg a #SoupMessage
     * @param cancellable a #GCancellable
     */
    send(msg: Message, cancellable: Gio.Cancellable | null): Gio.InputStream
    /**
     * Synchronously sends `msg` and reads the response body.
     * 
     * On success, a [struct`GLib`.Bytes] will be returned with the response body.
     * This function should only be used when the resource to be retrieved
     * is not too long and can be stored in memory.
     * 
     * See [method`Session`.send] for more details on the general semantics.
     * @param msg a #SoupMessage
     * @param cancellable a #GCancellable
     */
    sendAndRead(msg: Message, cancellable: Gio.Cancellable | null): any
    /**
     * Asynchronously sends `msg` and reads the response body.
     * 
     * When `callback` is called, then either `msg` has been sent, and its response
     * body read, or else an error has occurred. This function should only be used
     * when the resource to be retrieved is not too long and can be stored in
     * memory. Call [method`Session`.send_and_read_finish] to get a
     * [struct`GLib`.Bytes] with the response body.
     * 
     * See [method`Session`.send] for more details on the general semantics.
     * @param msg a #SoupMessage
     * @param ioPriority the I/O priority of the request
     * @param cancellable a #GCancellable
     * @param callback the callback to invoke
     */
    sendAndReadAsync(msg: Message, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the response to a [method`Session`.send_and_read_async].
     * 
     * If successful, returns a [struct`GLib`.Bytes] with the response body.
     * @param result the #GAsyncResult passed to your callback
     */
    sendAndReadFinish(result: Gio.AsyncResult): any
    /**
     * Asynchronously sends `msg` and waits for the beginning of a response.
     * 
     * When `callback` is called, then either `msg` has been sent, and its response
     * headers received, or else an error has occurred. Call
     * [method`Session`.send_finish] to get a [class`Gio`.InputStream] for reading the
     * response body.
     * 
     * See [method`Session`.send] for more details on the general semantics.
     * @param msg a #SoupMessage
     * @param ioPriority the I/O priority of the request
     * @param cancellable a #GCancellable
     * @param callback the callback to invoke
     */
    sendAsync(msg: Message, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the response to a [method`Session`.send_async] call.
     * 
     * If successful returns a [class`Gio`.InputStream] that can be used to read the
     * response body.
     * @param result the #GAsyncResult passed to your callback
     */
    sendFinish(result: Gio.AsyncResult): Gio.InputStream
    /**
     * Set the value to use for the "Accept-Language" header on [class`Message]`s
     * sent from `session`.
     * 
     * If `accept_language` is %NULL then no "Accept-Language" will be included in
     * requests. See [property`Session:`accept-language] for more information.
     * @param acceptLanguage the languages string
     */
    setAcceptLanguage(acceptLanguage: string): void
    /**
     * Set whether `session` will automatically set the "Accept-Language" header on
     * requests using a value generated from system languages based on
     * [func`GLib`.get_language_names].
     * 
     * See [property`Session:`accept-language-auto] for more information.
     * @param acceptLanguageAuto the value to set
     */
    setAcceptLanguageAuto(acceptLanguageAuto: boolean): void
    /**
     * Set a timeout in seconds for idle connection lifetime to be used by `session`
     * on new connections.
     * 
     * See [property`Session:`idle-timeout] for more information.
     * @param timeout a timeout in seconds
     */
    setIdleTimeout(timeout: number): void
    /**
     * Set a [iface`Gio`.ProxyResolver] to be used by `session` on new connections.
     * 
     * If `proxy_resolver` is %NULL then no proxies will be used. See
     * [property`Session:`proxy-resolver] for more information.
     * @param proxyResolver a #GProxyResolver or %NULL
     */
    setProxyResolver(proxyResolver: Gio.ProxyResolver | null): void
    /**
     * Set a timeout in seconds for socket I/O operations to be used by `session`
     * on new connections.
     * 
     * See [property`Session:`timeout] for more information.
     * @param timeout a timeout in seconds
     */
    setTimeout(timeout: number): void
    /**
     * Set a [class`GIo`.TlsDatabase] to be used by `session` on new connections.
     * 
     * If `tls_database` is %NULL then certificate validation will always fail. See
     * [property`Session:`tls-database] for more information.
     * @param tlsDatabase a #GTlsDatabase
     */
    setTlsDatabase(tlsDatabase: Gio.TlsDatabase | null): void
    /**
     * Set a [class`Gio`.TlsInteraction] to be used by `session` on new connections.
     * 
     * If `tls_interaction` is %NULL then client certificate validation will always
     * fail.
     * 
     * See [property`Session:`tls-interaction] for more information.
     * @param tlsInteraction a #GTlsInteraction
     */
    setTlsInteraction(tlsInteraction: Gio.TlsInteraction | null): void
    /**
     * Set the value to use for the "User-Agent" header on [class`Message]`s sent
     * from `session`.
     * 
     * If `user_agent` has trailing whitespace, `session` will append its own product
     * token (eg, `libsoup/3.0.0`) to the end of the header for you. If `user_agent`
     * is %NULL then no "User-Agent" will be included in requests. See
     * [property`Session:`user-agent] for more information.
     * @param userAgent the user agent string
     */
    setUserAgent(userAgent: string): void
    /**
     * Asynchronously creates a [class`WebsocketConnection]` to communicate with a
     * remote server.
     * 
     * All necessary WebSocket-related headers will be added to `msg,` and
     * it will then be sent and asynchronously processed normally
     * (including handling of redirection and HTTP authentication).
     * 
     * If the server returns "101 Switching Protocols", then `msg'`s status
     * code and response headers will be updated, and then the WebSocket
     * handshake will be completed. On success,
     * [method`Session`.websocket_connect_finish] will return a new
     * [class`WebsocketConnection]`. On failure it will return a #GError.
     * 
     * If the server returns a status other than "101 Switching Protocols", then
     * `msg` will contain the complete response headers and body from the server's
     * response, and [method`Session`.websocket_connect_finish] will return
     * %SOUP_WEBSOCKET_ERROR_NOT_WEBSOCKET.
     * @param msg #SoupMessage indicating the WebSocket server to connect to
     * @param origin origin of the connection
     * @param protocols a   %NULL-terminated array of protocols supported
     * @param ioPriority the I/O priority of the request
     * @param cancellable a #GCancellable
     * @param callback the callback to invoke
     */
    websocketConnectAsync(msg: Message, origin: string | null, protocols: string[] | null, ioPriority: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the [class`WebsocketConnection]` response to a
     * [method`Session`.websocket_connect_async] call.
     * 
     * If successful, returns a [class`WebsocketConnection]` that can be used to
     * communicate with the server.
     * @param result the #GAsyncResult passed to your callback
     */
    websocketConnectFinish(result: Gio.AsyncResult): WebsocketConnection

    // Own virtual methods of Soup-3.0.Soup.Session

    requestQueued(msg: Message): void
    requestUnqueued(msg: Message): void

    // Own signals of Soup-3.0.Soup.Session

    connect(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback): number
    on(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback): number
    once(sigName: "request-queued", callback: Session.RequestQueuedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-queued", ...args: any[]): void
    connect(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback): number
    on(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback): number
    once(sigName: "request-unqueued", callback: Session.RequestUnqueuedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "request-unqueued", ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.Session

    connect(sigName: "notify::accept-language", callback: any): number
    on(sigName: "notify::accept-language", callback: any): number
    once(sigName: "notify::accept-language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-language", ...args: any[]): void
    connect(sigName: "notify::accept-language-auto", callback: any): number
    on(sigName: "notify::accept-language-auto", callback: any): number
    once(sigName: "notify::accept-language-auto", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-language-auto", ...args: any[]): void
    connect(sigName: "notify::idle-timeout", callback: any): number
    on(sigName: "notify::idle-timeout", callback: any): number
    once(sigName: "notify::idle-timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::idle-timeout", ...args: any[]): void
    connect(sigName: "notify::local-address", callback: any): number
    on(sigName: "notify::local-address", callback: any): number
    once(sigName: "notify::local-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-address", ...args: any[]): void
    connect(sigName: "notify::max-conns", callback: any): number
    on(sigName: "notify::max-conns", callback: any): number
    once(sigName: "notify::max-conns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-conns", ...args: any[]): void
    connect(sigName: "notify::max-conns-per-host", callback: any): number
    on(sigName: "notify::max-conns-per-host", callback: any): number
    once(sigName: "notify::max-conns-per-host", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-conns-per-host", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::remote-connectable", callback: any): number
    on(sigName: "notify::remote-connectable", callback: any): number
    once(sigName: "notify::remote-connectable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remote-connectable", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: "notify::tls-database", callback: any): number
    on(sigName: "notify::tls-database", callback: any): number
    once(sigName: "notify::tls-database", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-database", ...args: any[]): void
    connect(sigName: "notify::tls-interaction", callback: any): number
    on(sigName: "notify::tls-interaction", callback: any): number
    once(sigName: "notify::tls-interaction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tls-interaction", ...args: any[]): void
    connect(sigName: "notify::user-agent", callback: any): number
    on(sigName: "notify::user-agent", callback: any): number
    once(sigName: "notify::user-agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user-agent", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Soup session state object.
 * 
 * #SoupSession is the object that controls client-side HTTP. A
 * #SoupSession encapsulates all of the state that libsoup is keeping
 * on behalf of your program; cached HTTP connections, authentication
 * information, etc. It also keeps track of various global options
 * and features that you are using.
 * 
 * Most applications will only need a single #SoupSession; the primary
 * reason you might need multiple sessions is if you need to have
 * multiple independent authentication contexts. (Eg, you are
 * connecting to a server and authenticating as two different users at
 * different times; the easiest way to ensure that each [class`Message]`
 * is sent with the authentication information you intended is to use
 * one session for the first user, and a second session for the other
 * user.)
 * 
 * Additional #SoupSession functionality is provided by
 * [iface`SessionFeature]` objects, which can be added to a session with
 * [method`Session`.add_feature] or [method`Session`.add_feature_by_type]
 * For example, [class`Logger]` provides support for
 * logging HTTP traffic, [class`ContentDecoder]` provides support for
 * compressed response handling, and [class`ContentSniffer]` provides
 * support for HTML5-style response body content sniffing.
 * Additionally, subtypes of [class`Auth]` can be added
 * as features, to add support for additional authentication types.
 * 
 * All `SoupSession`s are created with a [class`AuthManager]`, and support
 * for %SOUP_TYPE_AUTH_BASIC and %SOUP_TYPE_AUTH_DIGEST. Additionally,
 * sessions using the plain #SoupSession class (rather than one of its deprecated
 * subtypes) have a [class`ContentDecoder]` by default.
 * 
 * Note that all async methods will invoke their callbacks on the thread-default
 * context at the time of the function call.
 * @class 
 */
export class Session extends GObject.Object {

    // Own properties of Soup-3.0.Soup.Session

    static name: string

    // Constructors of Soup-3.0.Soup.Session

    constructor(config?: Session.ConstructorProperties) 
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a #SoupSession with the default options.
     * @constructor 
     */
    static new(): Session
    _init(config?: Session.ConstructorProperties): void
}

export module WebsocketConnection {

    // Signal callback interfaces

    /**
     * Signal callback interface for `closed`
     */
    export interface ClosedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `closing`
     */
    export interface ClosingSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `error`
     */
    export interface ErrorSignalCallback {
        (error: GLib.Error): void
    }

    /**
     * Signal callback interface for `message`
     */
    export interface MessageSignalCallback {
        (type: number, message: any): void
    }

    /**
     * Signal callback interface for `pong`
     */
    export interface PongSignalCallback {
        (message: any): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Soup-3.0.Soup.WebsocketConnection

        /**
         * The type of connection (client/server).
         */
        connectionType?: WebsocketConnectionType | null
        /**
         * List of [class`WebsocketExtension]` objects that are active in the connection.
         */
        extensions?: object | null
        /**
         * The underlying IO stream the WebSocket is communicating
         * over.
         * 
         * The input and output streams must be pollable streams.
         */
        ioStream?: Gio.IOStream | null
        /**
         * Interval in seconds on when to send a ping message which will
         * serve as a keepalive message.
         * 
         * If set to 0 the keepalive message is disabled.
         */
        keepaliveInterval?: number | null
        /**
         * The maximum payload size for incoming packets.
         * 
         * The protocol expects or 0 to not limit it.
         */
        maxIncomingPayloadSize?: number | null
        /**
         * The client's Origin.
         */
        origin?: string | null
        /**
         * The chosen protocol, or %NULL if a protocol was not agreed
         * upon.
         */
        protocol?: string | null
        /**
         * The URI of the WebSocket.
         * 
         * For servers this represents the address of the WebSocket,
         * and for clients it is the address connected to.
         */
        uri?: GLib.Uri | null
    }

}

export interface WebsocketConnection {

    // Own properties of Soup-3.0.Soup.WebsocketConnection

    /**
     * The type of connection (client/server).
     */
    readonly connectionType: WebsocketConnectionType
    /**
     * List of [class`WebsocketExtension]` objects that are active in the connection.
     */
    readonly extensions: object
    /**
     * The underlying IO stream the WebSocket is communicating
     * over.
     * 
     * The input and output streams must be pollable streams.
     */
    readonly ioStream: Gio.IOStream
    /**
     * Interval in seconds on when to send a ping message which will
     * serve as a keepalive message.
     * 
     * If set to 0 the keepalive message is disabled.
     */
    keepaliveInterval: number
    /**
     * The maximum payload size for incoming packets.
     * 
     * The protocol expects or 0 to not limit it.
     */
    maxIncomingPayloadSize: number
    /**
     * The client's Origin.
     */
    readonly origin: string
    /**
     * The chosen protocol, or %NULL if a protocol was not agreed
     * upon.
     */
    readonly protocol: string
    /**
     * The current state of the WebSocket.
     */
    readonly state: WebsocketState
    /**
     * The URI of the WebSocket.
     * 
     * For servers this represents the address of the WebSocket,
     * and for clients it is the address connected to.
     */
    readonly uri: GLib.Uri

    // Owm methods of Soup-3.0.Soup.WebsocketConnection

    /**
     * Close the connection in an orderly fashion.
     * 
     * Note that until the [signal`WebsocketConnection:`:closed] signal fires, the connection
     * is not yet completely closed. The close message is not even sent until the
     * main loop runs.
     * 
     * The `code` and `data` are sent to the peer along with the close request.
     * If `code` is %SOUP_WEBSOCKET_CLOSE_NO_STATUS a close message with no body
     * (without code and data) is sent.
     * Note that the `data` must be UTF-8 valid.
     * @param code close code
     * @param data close data
     */
    close(code: number, data: string | null): void
    /**
     * Get the close code received from the WebSocket peer.
     * 
     * This only becomes valid once the WebSocket is in the
     * %SOUP_WEBSOCKET_STATE_CLOSED state. The value will often be in the
     * [enum`WebsocketCloseCode]` enumeration, but may also be an application
     * defined close code.
     */
    getCloseCode(): number
    /**
     * Get the close data received from the WebSocket peer.
     * 
     * This only becomes valid once the WebSocket is in the
     * %SOUP_WEBSOCKET_STATE_CLOSED state. The data may be freed once
     * the main loop is run, so copy it if you need to keep it around.
     */
    getCloseData(): string
    /**
     * Get the connection type (client/server) of the connection.
     */
    getConnectionType(): WebsocketConnectionType
    /**
     * Get the extensions chosen via negotiation with the peer.
     */
    getExtensions(): WebsocketExtension[]
    /**
     * Get the I/O stream the WebSocket is communicating over.
     */
    getIoStream(): Gio.IOStream
    /**
     * Gets the keepalive interval in seconds or 0 if disabled.
     */
    getKeepaliveInterval(): number
    /**
     * Gets the maximum payload size allowed for incoming packets.
     */
    getMaxIncomingPayloadSize(): number
    /**
     * Get the origin of the WebSocket.
     */
    getOrigin(): string | null
    /**
     * Get the protocol chosen via negotiation with the peer.
     */
    getProtocol(): string | null
    /**
     * Get the current state of the WebSocket.
     */
    getState(): WebsocketState
    /**
     * Get the URI of the WebSocket.
     * 
     * For servers this represents the address of the WebSocket, and
     * for clients it is the address connected to.
     */
    getUri(): GLib.Uri
    /**
     * Send a binary message to the peer.
     * 
     * If `length` is 0, `data` may be %NULL.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     * @param data the message contents
     */
    sendBinary(data: Uint8Array | null): void
    /**
     * Send a message of the given `type` to the peer. Note that this method,
     * allows to send text messages containing %NULL characters.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     * @param type the type of message contents
     * @param message the message data as #GBytes
     */
    sendMessage(type: WebsocketDataType, message: any): void
    /**
     * Send a %NULL-terminated text (UTF-8) message to the peer.
     * 
     * If you need to send text messages containing %NULL characters use
     * [method`WebsocketConnection`.send_message] instead.
     * 
     * The message is queued to be sent and will be sent when the main loop
     * is run.
     * @param text the message contents
     */
    sendText(text: string): void
    /**
     * Sets the interval in seconds on when to send a ping message which will serve
     * as a keepalive message.
     * 
     * If set to 0 the keepalive message is disabled.
     * @param interval the interval to send a ping message or 0 to disable it
     */
    setKeepaliveInterval(interval: number): void
    /**
     * Sets the maximum payload size allowed for incoming packets.
     * 
     * It does not limit the outgoing packet size.
     * @param maxIncomingPayloadSize the maximum payload size
     */
    setMaxIncomingPayloadSize(maxIncomingPayloadSize: number): void

    // Own signals of Soup-3.0.Soup.WebsocketConnection

    connect(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback): number
    on(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback): number
    once(sigName: "closed", callback: WebsocketConnection.ClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closed", ...args: any[]): void
    connect(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback): number
    on(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback): number
    once(sigName: "closing", callback: WebsocketConnection.ClosingSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "closing", ...args: any[]): void
    connect(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback): number
    on(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback): number
    once(sigName: "error", callback: WebsocketConnection.ErrorSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "error", ...args: any[]): void
    connect(sigName: "message", callback: WebsocketConnection.MessageSignalCallback): number
    on(sigName: "message", callback: WebsocketConnection.MessageSignalCallback): number
    once(sigName: "message", callback: WebsocketConnection.MessageSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "message", message: any, ...args: any[]): void
    connect(sigName: "pong", callback: WebsocketConnection.PongSignalCallback): number
    on(sigName: "pong", callback: WebsocketConnection.PongSignalCallback): number
    once(sigName: "pong", callback: WebsocketConnection.PongSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "pong", ...args: any[]): void

    // Class property signals of Soup-3.0.Soup.WebsocketConnection

    connect(sigName: "notify::connection-type", callback: any): number
    on(sigName: "notify::connection-type", callback: any): number
    once(sigName: "notify::connection-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection-type", ...args: any[]): void
    connect(sigName: "notify::extensions", callback: any): number
    on(sigName: "notify::extensions", callback: any): number
    once(sigName: "notify::extensions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::extensions", ...args: any[]): void
    connect(sigName: "notify::io-stream", callback: any): number
    on(sigName: "notify::io-stream", callback: any): number
    once(sigName: "notify::io-stream", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::io-stream", ...args: any[]): void
    connect(sigName: "notify::keepalive-interval", callback: any): number
    on(sigName: "notify::keepalive-interval", callback: any): number
    once(sigName: "notify::keepalive-interval", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keepalive-interval", ...args: any[]): void
    connect(sigName: "notify::max-incoming-payload-size", callback: any): number
    on(sigName: "notify::max-incoming-payload-size", callback: any): number
    once(sigName: "notify::max-incoming-payload-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-incoming-payload-size", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The WebSocket Protocol
 * 
 * Provides support for the [WebSocket](http://tools.ietf.org/html/rfc6455)
 * protocol.
 * 
 * To connect to a WebSocket server, create a [class`Session]` and call
 * [method`Session`.websocket_connect_async]. To accept WebSocket
 * connections, create a [class`Server]` and add a handler to it with
 * [method`Server`.add_websocket_handler].
 * 
 * (Lower-level support is available via
 * [func`websocket_client_prepare_handshake]` and
 * [func`websocket_client_verify_handshake]`, for handling the client side of the
 * WebSocket handshake, and [func`websocket_server_process_handshake]` for
 * handling the server side.)
 * 
 * #SoupWebsocketConnection handles the details of WebSocket communication. You
 * can use [method`WebsocketConnection`.send_text] and
 * [method`WebsocketConnection`.send_binary] to send data, and the
 * [signal`WebsocketConnection:`:message] signal to receive data.
 * (#SoupWebsocketConnection currently only supports asynchronous I/O.)
 * @class 
 */
export class WebsocketConnection extends GObject.Object {

    // Own properties of Soup-3.0.Soup.WebsocketConnection

    static name: string

    // Constructors of Soup-3.0.Soup.WebsocketConnection

    constructor(config?: WebsocketConnection.ConstructorProperties) 
    /**
     * Creates a #SoupWebsocketConnection on `stream` with the given active `extensions`.
     * 
     * This should be called after completing the handshake to begin using the WebSocket
     * protocol.
     * @constructor 
     * @param stream a #GIOStream connected to the WebSocket server
     * @param uri the URI of the connection
     * @param type the type of connection (client/side)
     * @param origin the Origin of the client
     * @param protocol the subprotocol in use
     * @param extensions a #GList of #SoupWebsocketExtension objects
     */
    constructor(stream: Gio.IOStream, uri: GLib.Uri, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]) 
    /**
     * Creates a #SoupWebsocketConnection on `stream` with the given active `extensions`.
     * 
     * This should be called after completing the handshake to begin using the WebSocket
     * protocol.
     * @constructor 
     * @param stream a #GIOStream connected to the WebSocket server
     * @param uri the URI of the connection
     * @param type the type of connection (client/side)
     * @param origin the Origin of the client
     * @param protocol the subprotocol in use
     * @param extensions a #GList of #SoupWebsocketExtension objects
     */
    static new(stream: Gio.IOStream, uri: GLib.Uri, type: WebsocketConnectionType, origin: string | null, protocol: string | null, extensions: WebsocketExtension[]): WebsocketConnection
    _init(config?: WebsocketConnection.ConstructorProperties): void
}

export module WebsocketExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WebsocketExtension {

    // Own fields of Soup-3.0.Soup.WebsocketExtension

    parentInstance: GObject.Object

    // Owm methods of Soup-3.0.Soup.WebsocketExtension

    // Has conflict: configure(connectionType: WebsocketConnectionType, params: GLib.HashTable | null): boolean
    // Has conflict: getRequestParams(): string | null
    // Has conflict: getResponseParams(): string | null
    // Has conflict: processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    // Has conflict: processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]

    // Own virtual methods of Soup-3.0.Soup.WebsocketExtension

    /**
     * Configures `extension` with the given `params`.
     * @virtual 
     * @param connectionType either %SOUP_WEBSOCKET_CONNECTION_CLIENT or %SOUP_WEBSOCKET_CONNECTION_SERVER
     * @param params the parameters
     */
    configure(connectionType: WebsocketConnectionType, params: GLib.HashTable | null): boolean
    /**
     * Get the parameters strings to be included in the request header.
     * 
     * If the extension doesn't include any parameter in the request, this function
     * returns %NULL.
     * @virtual 
     */
    getRequestParams(): string | null
    /**
     * Get the parameters strings to be included in the response header.
     * 
     * If the extension doesn't include any parameter in the response, this function
     * returns %NULL.
     * @virtual 
     */
    getResponseParams(): string | null
    /**
     * Process a message after it's received.
     * 
     * If the payload isn't changed the given `payload` is just returned, otherwise
     * [method`GLib`.Bytes.unref] is called on the given `payload` and a new
     * [struct`GLib`.Bytes] is returned with the new data.
     * 
     * Extensions using reserved bits of the header will reset them in `header`.
     * @virtual 
     * @param header the message header
     * @param payload the payload data
     */
    processIncomingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]
    /**
     * Process a message before it's sent.
     * 
     * If the payload isn't changed the given `payload` is just returned, otherwise
     * [method`Glib`.Bytes.unref] is called on the given `payload` and a new
     * [struct`GLib`.Bytes] is returned with the new data.
     * 
     * Extensions using reserved bits of the header will change them in `header`.
     * @virtual 
     * @param header the message header
     * @param payload the payload data
     */
    processOutgoingMessage(header: number, payload: any): [ /* returnType */ any, /* header */ number ]

    // Class property signals of Soup-3.0.Soup.WebsocketExtension

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A WebSocket extension
 * 
 * #SoupWebsocketExtension is the base class for WebSocket extension objects.
 * @class 
 */
export class WebsocketExtension extends GObject.Object {

    // Own properties of Soup-3.0.Soup.WebsocketExtension

    static name: string

    // Constructors of Soup-3.0.Soup.WebsocketExtension

    constructor(config?: WebsocketExtension.ConstructorProperties) 
    _init(config?: WebsocketExtension.ConstructorProperties): void
}

export module WebsocketExtensionDeflate {

    // Constructor properties interface

    export interface ConstructorProperties extends WebsocketExtension.ConstructorProperties {
    }

}

export interface WebsocketExtensionDeflate {

    // Class property signals of Soup-3.0.Soup.WebsocketExtensionDeflate

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A SoupWebsocketExtensionDeflate is a [class`WebsocketExtension]`
 * implementing permessage-deflate (RFC 7692).
 * 
 * This extension is used by default in a [class`Session]` when [class`WebsocketExtensionManager]`
 * feature is present, and always used by [class`Server]`.
 * @class 
 */
export class WebsocketExtensionDeflate extends WebsocketExtension {

    // Own properties of Soup-3.0.Soup.WebsocketExtensionDeflate

    static name: string

    // Constructors of Soup-3.0.Soup.WebsocketExtensionDeflate

    constructor(config?: WebsocketExtensionDeflate.ConstructorProperties) 
    _init(config?: WebsocketExtensionDeflate.ConstructorProperties): void
}

export module WebsocketExtensionManager {

    // Constructor properties interface

    export interface ConstructorProperties extends SessionFeature.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface WebsocketExtensionManager extends SessionFeature {

    // Class property signals of Soup-3.0.Soup.WebsocketExtensionManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * SoupWebsocketExtensionManager is the [iface`SessionFeature]` that handles WebSockets
 * extensions for a [class`Session]`.
 * 
 * A #SoupWebsocketExtensionManager is added to the session by default, and normally
 * you don't need to worry about it at all. However, if you want to
 * disable WebSocket extensions, you can remove the feature from the
 * session with [method`Session`.remove_feature_by_type] or disable it on
 * individual requests with [method`Message`.disable_feature].
 * @class 
 */
export class WebsocketExtensionManager extends GObject.Object {

    // Own properties of Soup-3.0.Soup.WebsocketExtensionManager

    static name: string

    // Constructors of Soup-3.0.Soup.WebsocketExtensionManager

    constructor(config?: WebsocketExtensionManager.ConstructorProperties) 
    _init(config?: WebsocketExtensionManager.ConstructorProperties): void
}

export interface AuthClass {

    // Own fields of Soup-3.0.Soup.AuthClass

    parentClass: GObject.ObjectClass
    schemeName: string
    strength: number
    update: (auth: Auth, msg: Message, authHeader: GLib.HashTable) => boolean
    getProtectionSpace: (auth: Auth, sourceUri: GLib.Uri) => string[]
    authenticate: (auth: Auth, username: string, password: string) => void
    isAuthenticated: (auth: Auth) => boolean
    getAuthorization: (auth: Auth, msg: Message) => string
    isReady: (auth: Auth, msg: Message) => boolean
    canAuthenticate: (auth: Auth) => boolean
    padding: object[]
}

export abstract class AuthClass {

    // Own properties of Soup-3.0.Soup.AuthClass

    static name: string
}

export interface AuthDomainBasicClass {

    // Own fields of Soup-3.0.Soup.AuthDomainBasicClass

    parentClass: AuthDomainClass
}

export abstract class AuthDomainBasicClass {

    // Own properties of Soup-3.0.Soup.AuthDomainBasicClass

    static name: string
}

export interface AuthDomainClass {

    // Own fields of Soup-3.0.Soup.AuthDomainClass

    parentClass: GObject.ObjectClass
    accepts: (domain: AuthDomain, msg: ServerMessage, header: string) => string
    challenge: (domain: AuthDomain, msg: ServerMessage) => string
    checkPassword: (domain: AuthDomain, msg: ServerMessage, username: string, password: string) => boolean
    padding: object[]
}

export abstract class AuthDomainClass {

    // Own properties of Soup-3.0.Soup.AuthDomainClass

    static name: string
}

export interface AuthDomainDigestClass {

    // Own fields of Soup-3.0.Soup.AuthDomainDigestClass

    parentClass: AuthDomainClass
}

export abstract class AuthDomainDigestClass {

    // Own properties of Soup-3.0.Soup.AuthDomainDigestClass

    static name: string
}

export interface AuthManagerClass {

    // Own fields of Soup-3.0.Soup.AuthManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class AuthManagerClass {

    // Own properties of Soup-3.0.Soup.AuthManagerClass

    static name: string
}

export interface CacheClass {

    // Own fields of Soup-3.0.Soup.CacheClass

    parentClass: GObject.ObjectClass
    getCacheability: (cache: Cache, msg: Message) => Cacheability
    padding: object[]
}

export abstract class CacheClass {

    // Own properties of Soup-3.0.Soup.CacheClass

    static name: string
}

export interface ContentDecoderClass {

    // Own fields of Soup-3.0.Soup.ContentDecoderClass

    parentClass: GObject.ObjectClass
}

export abstract class ContentDecoderClass {

    // Own properties of Soup-3.0.Soup.ContentDecoderClass

    static name: string
}

export interface ContentSnifferClass {

    // Own fields of Soup-3.0.Soup.ContentSnifferClass

    parentClass: GObject.ObjectClass
}

export abstract class ContentSnifferClass {

    // Own properties of Soup-3.0.Soup.ContentSnifferClass

    static name: string
}

export interface Cookie {

    // Owm methods of Soup-3.0.Soup.Cookie

    /**
     * Tests if `cookie` should be sent to `uri`.
     * 
     * (At the moment, this does not check that `cookie'`s domain matches
     * `uri,` because it assumes that the caller has already done that.
     * But don't rely on that; it may change in the future.)
     * @param uri a #GUri
     */
    appliesToUri(uri: GLib.Uri): boolean
    /**
     * Copies `cookie`.
     */
    copy(): Cookie
    /**
     * Checks if the `cookie'`s domain and `host` match.
     * 
     * The domains match if `cookie` should be sent when making a request to `host,`
     * or that `cookie` should be accepted when receiving a response from `host`.
     * @param host a URI
     */
    domainMatches(host: string): boolean
    /**
     * Tests if `cookie1` and `cookie2` are equal.
     * 
     * Note that currently, this does not check that the cookie domains
     * match. This may change in the future.
     * @param cookie2 a #SoupCookie
     */
    equal(cookie2: Cookie): boolean
    /**
     * Frees `cookie`.
     */
    free(): void
    /**
     * Gets `cookie'`s domain.
     */
    getDomain(): string
    /**
     * Gets `cookie'`s expiration time.
     */
    getExpires(): GLib.DateTime | null
    /**
     * Gets `cookie'`s HttpOnly attribute.
     */
    getHttpOnly(): boolean
    /**
     * Gets `cookie'`s name.
     */
    getName(): string
    /**
     * Gets `cookie'`s path.
     */
    getPath(): string
    /**
     * Returns the same-site policy for this cookie.
     */
    getSameSitePolicy(): SameSitePolicy
    /**
     * Gets `cookie'`s secure attribute.
     */
    getSecure(): boolean
    /**
     * Gets `cookie'`s value.
     */
    getValue(): string
    /**
     * Sets `cookie'`s domain to `domain`.
     * @param domain the new domain
     */
    setDomain(domain: string): void
    /**
     * Sets `cookie'`s expiration time to `expires`.
     * 
     * If `expires` is %NULL, `cookie` will be a session cookie and will expire at the
     * end of the client's session.
     * 
     * (This sets the same property as [method`Cookie`.set_max_age].)
     * @param expires the new expiration time, or %NULL
     */
    setExpires(expires: GLib.DateTime): void
    /**
     * Sets `cookie'`s HttpOnly attribute to `http_only`.
     * 
     * If %TRUE, `cookie` will be marked as "http only", meaning it should not be
     * exposed to web page scripts or other untrusted code.
     * @param httpOnly the new value for the HttpOnly attribute
     */
    setHttpOnly(httpOnly: boolean): void
    /**
     * Sets `cookie'`s max age to `max_age`.
     * 
     * If `max_age` is -1, the cookie is a session cookie, and will expire at the end
     * of the client's session. Otherwise, it is the number of seconds until the
     * cookie expires. You can use the constants %SOUP_COOKIE_MAX_AGE_ONE_HOUR,
     * %SOUP_COOKIE_MAX_AGE_ONE_DAY, %SOUP_COOKIE_MAX_AGE_ONE_WEEK and
     * %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or multiples thereof) to calculate this value.
     * (A value of 0 indicates that the cookie should be considered
     * already-expired.)
     * 
     * This sets the same property as [method`Cookie`.set_expires].
     * @param maxAge the new max age
     */
    setMaxAge(maxAge: number): void
    /**
     * Sets `cookie'`s name to `name`.
     * @param name the new name
     */
    setName(name: string): void
    /**
     * Sets `cookie'`s path to `path`.
     * @param path the new path
     */
    setPath(path: string): void
    /**
     * When used in conjunction with
     * [method`CookieJar`.get_cookie_list_with_same_site_info] this sets the policy
     * of when this cookie should be exposed.
     * @param policy a #SoupSameSitePolicy
     */
    setSameSitePolicy(policy: SameSitePolicy): void
    /**
     * Sets `cookie'`s secure attribute to `secure`.
     * 
     * If %TRUE, `cookie` will only be transmitted from the client to the server over
     * secure (https) connections.
     * @param secure the new value for the secure attribute
     */
    setSecure(secure: boolean): void
    /**
     * Sets `cookie'`s value to `value`.
     * @param value the new value
     */
    setValue(value: string): void
    /**
     * Serializes `cookie` in the format used by the Cookie header (ie, for
     * returning a cookie from a [class`Session]` to a server).
     */
    toCookieHeader(): string
    /**
     * Serializes `cookie` in the format used by the Set-Cookie header.
     * 
     * i.e. for sending a cookie from a [class`Server]` to a client.
     */
    toSetCookieHeader(): string
}

/**
 * Implements HTTP cookies, as described by
 * [RFC 6265](http://tools.ietf.org/html/rfc6265.txt).
 * 
 * To have a [class`Session]` handle cookies for your appliction
 * automatically, use a [class`CookieJar]`.
 * 
 * `name` and `value` will be set for all cookies. If the cookie is
 * generated from a string that appears to have no name, then `name`
 * will be the empty string.
 * 
 * `domain` and `path` give the host or domain, and path within that
 * host/domain, to restrict this cookie to. If `domain` starts with
 * ".", that indicates a domain (which matches the string after the
 * ".", or any hostname that has `domain` as a suffix). Otherwise, it
 * is a hostname and must match exactly.
 * 
 * `expires` will be non-%NULL if the cookie uses either the original
 * "expires" attribute, or the newer "max-age" attribute. If `expires`
 * is %NULL, it indicates that neither "expires" nor "max-age" was
 * specified, and the cookie expires at the end of the session.
 * 
 * If `http_only` is set, the cookie should not be exposed to untrusted
 * code (eg, javascript), so as to minimize the danger posed by
 * cross-site scripting attacks.
 * @record 
 */
export class Cookie {

    // Own properties of Soup-3.0.Soup.Cookie

    static name: string

    // Constructors of Soup-3.0.Soup.Cookie

    /**
     * Creates a new #SoupCookie with the given attributes.
     * 
     * Use [method`Cookie`.set_secure] and [method`Cookie`.set_http_only] if you
     * need to set those attributes on the returned cookie.
     * 
     * If `domain` starts with ".", that indicates a domain (which matches
     * the string after the ".", or any hostname that has `domain` as a
     * suffix). Otherwise, it is a hostname and must match exactly.
     * 
     * `max_age` is used to set the "expires" attribute on the cookie; pass
     * -1 to not include the attribute (indicating that the cookie expires
     * with the current session), 0 for an already-expired cookie, or a
     * lifetime in seconds. You can use the constants
     * %SOUP_COOKIE_MAX_AGE_ONE_HOUR, %SOUP_COOKIE_MAX_AGE_ONE_DAY,
     * %SOUP_COOKIE_MAX_AGE_ONE_WEEK and %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or
     * multiples thereof) to calculate this value. (If you really care
     * about setting the exact time that the cookie will expire, use
     * [method`Cookie`.set_expires].)
     * @constructor 
     * @param name cookie name
     * @param value cookie value
     * @param domain cookie domain or hostname
     * @param path cookie path, or %NULL
     * @param maxAge max age of the cookie, or -1 for a session cookie
     */
    constructor(name: string, value: string, domain: string, path: string, maxAge: number) 
    /**
     * Creates a new #SoupCookie with the given attributes.
     * 
     * Use [method`Cookie`.set_secure] and [method`Cookie`.set_http_only] if you
     * need to set those attributes on the returned cookie.
     * 
     * If `domain` starts with ".", that indicates a domain (which matches
     * the string after the ".", or any hostname that has `domain` as a
     * suffix). Otherwise, it is a hostname and must match exactly.
     * 
     * `max_age` is used to set the "expires" attribute on the cookie; pass
     * -1 to not include the attribute (indicating that the cookie expires
     * with the current session), 0 for an already-expired cookie, or a
     * lifetime in seconds. You can use the constants
     * %SOUP_COOKIE_MAX_AGE_ONE_HOUR, %SOUP_COOKIE_MAX_AGE_ONE_DAY,
     * %SOUP_COOKIE_MAX_AGE_ONE_WEEK and %SOUP_COOKIE_MAX_AGE_ONE_YEAR (or
     * multiples thereof) to calculate this value. (If you really care
     * about setting the exact time that the cookie will expire, use
     * [method`Cookie`.set_expires].)
     * @constructor 
     * @param name cookie name
     * @param value cookie value
     * @param domain cookie domain or hostname
     * @param path cookie path, or %NULL
     * @param maxAge max age of the cookie, or -1 for a session cookie
     */
    static new(name: string, value: string, domain: string, path: string, maxAge: number): Cookie
    /**
     * Parses `header` and returns a #SoupCookie.
     * 
     * If `header` contains multiple cookies, only the first one will be parsed.
     * 
     * If `header` does not have "path" or "domain" attributes, they will
     * be defaulted from `origin`. If `origin` is %NULL, path will default
     * to "/", but domain will be left as %NULL. Note that this is not a
     * valid state for a #SoupCookie, and you will need to fill in some
     * appropriate string for the domain if you want to actually make use
     * of the cookie.
     * @param header a cookie string (eg, the value of a Set-Cookie header)
     * @param origin origin of the cookie
     */
    static parse(header: string, origin: GLib.Uri | null): Cookie | null
}

export interface CookieJarClass {

    // Own fields of Soup-3.0.Soup.CookieJarClass

    parentClass: GObject.ObjectClass
    save: (jar: CookieJar) => void
    isPersistent: (jar: CookieJar) => boolean
    changed: (jar: CookieJar, oldCookie: Cookie, newCookie: Cookie) => void
    padding: object[]
}

export abstract class CookieJarClass {

    // Own properties of Soup-3.0.Soup.CookieJarClass

    static name: string
}

export interface CookieJarDBClass {

    // Own fields of Soup-3.0.Soup.CookieJarDBClass

    parentClass: CookieJarClass
}

export abstract class CookieJarDBClass {

    // Own properties of Soup-3.0.Soup.CookieJarDBClass

    static name: string
}

export interface CookieJarTextClass {

    // Own fields of Soup-3.0.Soup.CookieJarTextClass

    parentClass: CookieJarClass
}

export abstract class CookieJarTextClass {

    // Own properties of Soup-3.0.Soup.CookieJarTextClass

    static name: string
}

export interface HSTSEnforcerClass {

    // Own fields of Soup-3.0.Soup.HSTSEnforcerClass

    /**
     * The parent class.
     * @field 
     */
    parentClass: GObject.ObjectClass
    isPersistent: (hstsEnforcer: HSTSEnforcer) => boolean
    hasValidPolicy: (hstsEnforcer: HSTSEnforcer, domain: string) => boolean
    changed: (enforcer: HSTSEnforcer, oldPolicy: HSTSPolicy, newPolicy: HSTSPolicy) => void
}

/**
 * Class structure for #SoupHSTSEnforcer.
 * @record 
 */
export abstract class HSTSEnforcerClass {

    // Own properties of Soup-3.0.Soup.HSTSEnforcerClass

    static name: string
}

export interface HSTSEnforcerDBClass {

    // Own fields of Soup-3.0.Soup.HSTSEnforcerDBClass

    parentClass: HSTSEnforcerClass
}

export abstract class HSTSEnforcerDBClass {

    // Own properties of Soup-3.0.Soup.HSTSEnforcerDBClass

    static name: string
}

export interface HSTSPolicy {

    // Owm methods of Soup-3.0.Soup.HSTSPolicy

    /**
     * Copies `policy`.
     */
    copy(): HSTSPolicy
    /**
     * Tests if `policy1` and `policy2` are equal.
     * @param policy2 a #SoupHSTSPolicy
     */
    equal(policy2: HSTSPolicy): boolean
    /**
     * Frees `policy`.
     */
    free(): void
    /**
     * Gets `policy'`s domain.
     */
    getDomain(): string
    /**
     * Returns the expiration date for `policy`.
     */
    getExpires(): GLib.DateTime
    /**
     * Returns the max age for `policy`.
     */
    getMaxAge(): number
    /**
     * Gets whether `policy` include its subdomains.
     */
    includesSubdomains(): boolean
    /**
     * Gets whether `policy` is expired.
     * 
     * Permanent policies never expire.
     */
    isExpired(): boolean
    /**
     * Gets whether `policy` is a non-permanent, non-expirable session policy.
     * 
     * See [ctor`HSTSPolicy`.new_session_policy] for details.
     */
    isSessionPolicy(): boolean
}

/**
 * #SoupHSTSPolicy implements HTTP policies, as described by
 * [RFC 6797](http://tools.ietf.org/html/rfc6797).
 * 
 * `domain` represents the host that this policy applies to. The domain
 * must be IDNA-canonicalized. [ctor`HSTSPolicy`.new] and related methods
 * will do this for you.
 * 
 * `max_age` contains the 'max-age' value from the Strict Transport
 * Security header and indicates the time to live of this policy,
 * in seconds.
 * 
 * `expires` will be non-%NULL if the policy has been set by the host and
 * hence has an expiry time. If `expires` is %NULL, it indicates that the
 * policy is a permanent session policy set by the user agent.
 * 
 * If `include_subdomains` is %TRUE, the Strict Transport Security policy
 * must also be enforced on subdomains of `domain`.
 * @record 
 */
export class HSTSPolicy {

    // Own properties of Soup-3.0.Soup.HSTSPolicy

    static name: string

    // Constructors of Soup-3.0.Soup.HSTSPolicy

    /**
     * Creates a new #SoupHSTSPolicy with the given attributes.
     * 
     * `domain` is a domain on which the strict transport security policy
     * represented by this object must be enforced.
     * 
     * `max_age` is used to set the "expires" attribute on the policy; pass
     * %SOUP_HSTS_POLICY_MAX_AGE_PAST for an already-expired policy, or a
     * lifetime in seconds.
     * 
     * If `include_subdomains` is %TRUE, the strict transport security policy
     * must also be enforced on all subdomains of `domain`.
     * @constructor 
     * @param domain policy domain or hostname
     * @param maxAge max age of the policy
     * @param includeSubdomains %TRUE if the policy applies on subdomains
     */
    constructor(domain: string, maxAge: number, includeSubdomains: boolean) 
    /**
     * Creates a new #SoupHSTSPolicy with the given attributes.
     * 
     * `domain` is a domain on which the strict transport security policy
     * represented by this object must be enforced.
     * 
     * `max_age` is used to set the "expires" attribute on the policy; pass
     * %SOUP_HSTS_POLICY_MAX_AGE_PAST for an already-expired policy, or a
     * lifetime in seconds.
     * 
     * If `include_subdomains` is %TRUE, the strict transport security policy
     * must also be enforced on all subdomains of `domain`.
     * @constructor 
     * @param domain policy domain or hostname
     * @param maxAge max age of the policy
     * @param includeSubdomains %TRUE if the policy applies on subdomains
     */
    static new(domain: string, maxAge: number, includeSubdomains: boolean): HSTSPolicy
    /**
     * Parses `msg'`s first "Strict-Transport-Security" response header and
     * returns a #SoupHSTSPolicy.
     * @constructor 
     * @param msg a #SoupMessage
     */
    static newFromResponse(msg: Message): HSTSPolicy
    /**
     * Full version of [ctor`HSTSPolicy`.new], to use with an existing
     * expiration date.
     * 
     * See [ctor`HSTSPolicy`.new] for details.
     * @constructor 
     * @param domain policy domain or hostname
     * @param maxAge max age of the policy
     * @param expires the date of expiration of the policy or %NULL for a permanent policy
     * @param includeSubdomains %TRUE if the policy applies on subdomains
     */
    static newFull(domain: string, maxAge: number, expires: GLib.DateTime, includeSubdomains: boolean): HSTSPolicy
    /**
     * Creates a new session #SoupHSTSPolicy with the given attributes.
     * 
     * A session policy is a policy that is valid during the lifetime of
     * the [class`HSTSEnforcer]` it is added to. Contrary to regular policies,
     * it has no expiration date and is not stored in persistent
     * enforcers. These policies are useful for user-agent to load their
     * own or user-defined rules.
     * 
     * `domain` is a domain on which the strict transport security policy
     * represented by this object must be enforced.
     * 
     * If `include_subdomains` is %TRUE, the strict transport security policy
     * must also be enforced on all subdomains of `domain`.
     * @constructor 
     * @param domain policy domain or hostname
     * @param includeSubdomains %TRUE if the policy applies on sub domains
     */
    static newSessionPolicy(domain: string, includeSubdomains: boolean): HSTSPolicy
}

export interface LoggerClass {

    // Own fields of Soup-3.0.Soup.LoggerClass

    parentClass: GObject.ObjectClass
}

export abstract class LoggerClass {

    // Own properties of Soup-3.0.Soup.LoggerClass

    static name: string
}

export interface MessageBody {

    // Own fields of Soup-3.0.Soup.MessageBody

    /**
     * the data
     * @field 
     */
    data: Uint8Array
    /**
     * length of `data`
     * @field 
     */
    length: number

    // Owm methods of Soup-3.0.Soup.MessageBody

    /**
     * Appends the data from `buffer` to `body`.
     * @param buffer a #GBytes
     */
    appendBytes(buffer: any): void
    /**
     * Appends `length` bytes from `data` to `body`.
     * 
     * This function is exactly equivalent to [method`MessageBody`.append]
     * with %SOUP_MEMORY_TAKE as second argument; it exists mainly for
     * convenience and simplifying language bindings.
     * @param data data to append
     */
    append(data: Uint8Array): void
    /**
     * Tags `body` as being complete.
     * 
     * Call this when using chunked encoding after you have appended the last chunk.
     */
    complete(): void
    /**
     * Fills in `body'`s data field with a buffer containing all of the
     * data in `body`.
     * 
     * Adds an additional `\0` byte not counted by `body'`s
     * length field.
     */
    flatten(): any
    /**
     * Gets the accumulate flag on `body`.
     * 
     * See [method`MessageBody`.set_accumulate. for details.
     */
    getAccumulate(): boolean
    /**
     * Gets a [struct`GLib`.Bytes] containing data from `body` starting at `offset`.
     * 
     * The size of the returned chunk is unspecified. You can iterate
     * through the entire body by first calling
     * [method`MessageBody`.get_chunk] with an offset of 0, and then on each
     * successive call, increment the offset by the length of the
     * previously-returned chunk.
     * 
     * If `offset` is greater than or equal to the total length of `body,`
     * then the return value depends on whether or not
     * [method`MessageBody`.complete] has been called or not; if it has,
     * then [method`MessageBody`.get_chunk] will return a 0-length chunk
     * (indicating the end of `body)`. If it has not, then
     * [method`MessageBody`.get_chunk] will return %NULL (indicating that
     * `body` may still potentially have more data, but that data is not
     * currently available).
     * @param offset an offset
     */
    getChunk(offset: number): any | null
    /**
     * Handles the #SoupMessageBody part of receiving a chunk of data from
     * the network.
     * 
     * Normally this means appending `chunk` to `body,` exactly as with
     * [method`MessageBody`.append_bytes], but if you have set `body'`s accumulate
     * flag to %FALSE, then that will not happen.
     * 
     * This is a low-level method which you should not normally need to
     * use.
     * @param chunk a #GBytes received from the network
     */
    gotChunk(chunk: any): void
    /**
     * Atomically increments the reference count of `body` by one.
     */
    ref(): MessageBody
    /**
     * Sets or clears the accumulate flag on `body`.
     * 
     * (The default value is %TRUE.) If set to %FALSE, `body'`s data field will not
     * be filled in after the body is fully sent/received, and the chunks that make
     * up `body` may be discarded when they are no longer needed.
     * 
     * If you set the flag to %FALSE on the [class`Message]` request_body of a
     * client-side message, it will block the accumulation of chunks into
     * `body'`s data field, but it will not normally cause the chunks to
     * be discarded after being written like in the server-side
     * [class`Message]` response_body case, because the request body needs to
     * be kept around in case the request needs to be sent a second time
     * due to redirection or authentication.
     * @param accumulate whether or not to accumulate body chunks in `body`
     */
    setAccumulate(accumulate: boolean): void
    /**
     * Deletes all of the data in `body`.
     */
    truncate(): void
    /**
     * Atomically decrements the reference count of `body` by one.
     * 
     * When the reference count reaches zero, the resources allocated by
     * `body` are freed
     */
    unref(): void
    /**
     * Handles the #SoupMessageBody part of writing a chunk of data to the
     * network.
     * 
     * Normally this is a no-op, but if you have set `body'`s accumulate flag to
     * %FALSE, then this will cause `chunk` to be discarded to free up memory.
     * 
     * This is a low-level method which you should not need to use, and
     * there are further restrictions on its proper use which are not
     * documented here.
     * @param chunk a #GBytes returned from [method`MessageBody`.get_chunk]
     */
    wroteChunk(chunk: any): void
}

/**
 * #SoupMessageBody represents the request or response body of a
 * [class`Message]`.
 * 
 * Note that while `length` always reflects the full length of the
 * message body, `data` is normally %NULL, and will only be filled in
 * after [method`MessageBody`.flatten] is called. For client-side
 * messages, this automatically happens for the response body after it
 * has been fully read. Likewise, for server-side
 * messages, the request body is automatically filled in after being
 * read.
 * 
 * As an added bonus, when `data` is filled in, it is always terminated
 * with a `\0` byte (which is not reflected in `length)`.
 * @record 
 */
export class MessageBody {

    // Own properties of Soup-3.0.Soup.MessageBody

    static name: string

    // Constructors of Soup-3.0.Soup.MessageBody

    /**
     * Creates a new #SoupMessageBody.
     * 
     * [class`Message]` uses this internally; you
     * will not normally need to call it yourself.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #SoupMessageBody.
     * 
     * [class`Message]` uses this internally; you
     * will not normally need to call it yourself.
     * @constructor 
     */
    static new(): MessageBody
}

export interface MessageClass {

    // Own fields of Soup-3.0.Soup.MessageClass

    parentClass: GObject.ObjectClass
}

export abstract class MessageClass {

    // Own properties of Soup-3.0.Soup.MessageClass

    static name: string
}

export interface MessageHeaders {

    // Owm methods of Soup-3.0.Soup.MessageHeaders

    /**
     * Appends a new header with name `name` and value `value` to `hdrs`.
     * 
     * (If there is an existing header with name `name,` then this creates a second
     * one, which is only allowed for list-valued headers; see also
     * [method`MessageHeaders`.replace].)
     * 
     * The caller is expected to make sure that `name` and `value` are
     * syntactically correct.
     * @param name the header name to add
     * @param value the new value of `name`
     */
    append(name: string, value: string): void
    /**
     * Removes all the headers listed in the Connection header.
     */
    cleanConnectionHeaders(): void
    /**
     * Clears `hdrs`.
     */
    clear(): void
    /**
     * Calls `func` once for each header value in `hdrs`.
     * 
     * Beware that unlike [method`MessageHeaders`.get_list], this processes the
     * headers in exactly the way they were added, rather than
     * concatenating multiple same-named headers into a single value.
     * (This is intentional; it ensures that if you call
     * [method`MessageHeaders`.append] multiple times with the same name,
     * then the I/O code will output multiple copies of the header when
     * sending the message to the remote implementation, which may be
     * required for interoperability in some cases.)
     * 
     * You may not modify the headers from `func`.
     * @param func callback function to run for each header
     */
    foreach(func: MessageHeadersForeachFunc): void
    /**
     * Frees the array of ranges returned from [method`MessageHeaders`.get_ranges].
     * @param ranges an array of #SoupRange
     */
    freeRanges(ranges: Range): void
    /**
     * Looks up the "Content-Disposition" header in `hdrs,` parses it, and
     * returns its value in *`disposition` and *`params`.
     * 
     * `params` can be %NULL if you are only interested in the disposition-type.
     * 
     * In HTTP, the most common use of this header is to set a
     * disposition-type of "attachment", to suggest to the browser that a
     * response should be saved to disk rather than displayed in the
     * browser. If `params` contains a "filename" parameter, this is a
     * suggestion of a filename to use. (If the parameter value in the
     * header contains an absolute or relative path, libsoup will truncate
     * it down to just the final path component, so you do not need to
     * test this yourself.)
     * 
     * Content-Disposition is also used in "multipart/form-data", however
     * this is handled automatically by [struct`Multipart]` and the associated
     * form methods.
     */
    getContentDisposition(): [ /* returnType */ boolean, /* disposition */ string, /* params */ GLib.HashTable ]
    /**
     * Gets the message body length that `hdrs` declare.
     * 
     * This will only be non-0 if [method`MessageHeaders`.get_encoding] returns
     * %SOUP_ENCODING_CONTENT_LENGTH.
     */
    getContentLength(): number
    /**
     * Parses `hdrs'`s Content-Range header and returns it in `start,`
     * `end,` and `total_length`. If the total length field in the header
     * was specified as "*", then `total_length` will be set to -1.
     */
    getContentRange(): [ /* returnType */ boolean, /* start */ number, /* end */ number, /* totalLength */ number ]
    /**
     * Looks up the "Content-Type" header in `hdrs,` parses it, and returns
     * its value in *`content_type` and *`params`.
     * 
     * `params` can be %NULL if you are only interested in the content type itself.
     */
    getContentType(): [ /* returnType */ string | null, /* params */ GLib.HashTable ]
    /**
     * Gets the message body encoding that `hdrs` declare.
     * 
     * This may not always correspond to the encoding used on the wire; eg, a HEAD
     * response may declare a Content-Length or Transfer-Encoding, but it will never
     * actually include a body.
     */
    getEncoding(): Encoding
    /**
     * Gets the expectations declared by `hdrs'`s "Expect" header.
     * 
     * Currently this will either be %SOUP_EXPECTATION_CONTINUE or
     * %SOUP_EXPECTATION_UNRECOGNIZED.
     */
    getExpectations(): Expectation
    /**
     * Gets the type of headers.
     */
    getHeadersType(): MessageHeadersType
    /**
     * Gets the value of header `name` in `hdrs`.
     * 
     * Use this for headers whose values are comma-delimited lists, and which are
     * therefore allowed to appear multiple times in the headers. For
     * non-list-valued headers, use [method`MessageHeaders`.get_one].
     * 
     * If `name` appears multiple times in `hdrs,`
     * [method`MessageHeaders`.get_list] will concatenate all of the values
     * together, separated by commas. This is sometimes awkward to parse
     * (eg, WWW-Authenticate, Set-Cookie), but you have to be able to deal
     * with it anyway, because the HTTP spec explicitly states that this
     * transformation is allowed, and so an upstream proxy could do the
     * same thing.
     * @param name header name
     */
    getList(name: string): string | null
    /**
     * Gets the value of header `name` in `hdrs`.
     * 
     * Use this for headers whose values are *not* comma-delimited lists, and which
     * therefore can only appear at most once in the headers. For list-valued
     * headers, use [method`MessageHeaders`.get_list].
     * 
     * If `hdrs` does erroneously contain multiple copies of the header, it
     * is not defined which one will be returned. (Ideally, it will return
     * whichever one makes libsoup most compatible with other HTTP
     * implementations.)
     * @param name header name
     */
    getOne(name: string): string | null
    /**
     * Parses `hdrs'`s Range header and returns an array of the requested
     * byte ranges.
     * 
     * The returned array must be freed with [method`MessageHeaders`.free_ranges].
     * 
     * If `total_length` is non-0, its value will be used to adjust the
     * returned ranges to have explicit start and end values, and the
     * returned ranges will be sorted and non-overlapping. If
     * `total_length` is 0, then some ranges may have an end value of -1,
     * as described under [struct`Range]`, and some of the ranges may be
     * redundant.
     * 
     * Beware that even if given a `total_length,` this function does not
     * check that the ranges are satisfiable.
     * 
     * #SoupServer has built-in handling for range requests. If your
     * server handler returns a %SOUP_STATUS_OK response containing the
     * complete response body (rather than pausing the message and
     * returning some of the response body later), and there is a Range
     * header in the request, then libsoup will automatically convert the
     * response to a %SOUP_STATUS_PARTIAL_CONTENT response containing only
     * the range(s) requested by the client.
     * 
     * The only time you need to process the Range header yourself is if
     * either you need to stream the response body rather than returning
     * it all at once, or you do not already have the complete response
     * body available, and only want to generate the parts that were
     * actually requested by the client.
     * @param totalLength the total_length of the response body
     */
    getRanges(totalLength: number): [ /* returnType */ boolean, /* ranges */ Range[] ]
    /**
     * Checks whether the list-valued header `name` is present in `hdrs,`
     * and contains a case-insensitive match for `token`.
     * 
     * (If `name` is present in `hdrs,` then this is equivalent to calling
     * [func`header_contains]` on its value.)
     * @param name header name
     * @param token token to look for
     */
    headerContains(name: string, token: string): boolean
    /**
     * Checks whether the header `name` is present in `hdrs` and is
     * (case-insensitively) equal to `value`.
     * @param name header name
     * @param value expected value
     */
    headerEquals(name: string, value: string): boolean
    /**
     * Atomically increments the reference count of `hdrs` by one.
     */
    ref(): MessageHeaders
    /**
     * Removes `name` from `hdrs`.
     * 
     * If there are multiple values for `name,` they are all removed.
     * @param name the header name to remove
     */
    remove(name: string): void
    /**
     * Replaces the value of the header `name` in `hdrs` with `value`.
     * 
     * See also [method`MessageHeaders`.append].
     * 
     * The caller is expected to make sure that `name` and `value` are
     * syntactically correct.
     * @param name the header name to replace
     * @param value the new value of `name`
     */
    replace(name: string, value: string): void
    /**
     * Sets the "Content-Disposition" header in `hdrs` to `disposition,`
     * optionally with additional parameters specified in `params`.
     * 
     * See [method`MessageHeaders`.get_content_disposition] for a discussion
     * of how Content-Disposition is used in HTTP.
     * @param disposition the disposition-type
     * @param params additional parameters
     */
    setContentDisposition(disposition: string, params: GLib.HashTable | null): void
    /**
     * Sets the message body length that `hdrs` will declare, and sets
     * `hdrs'`s encoding to %SOUP_ENCODING_CONTENT_LENGTH.
     * 
     * You do not normally need to call this; if `hdrs` is set to use
     * Content-Length encoding, libsoup will automatically set its
     * Content-Length header for you immediately before sending the
     * headers. One situation in which this method is useful is when
     * generating the response to a HEAD request; Calling
     * [method`MessageHeaders`.set_content_length] allows you to put the
     * correct content length into the response without needing to waste
     * memory by filling in a response body which won't actually be sent.
     * @param contentLength the message body length
     */
    setContentLength(contentLength: number): void
    /**
     * Sets `hdrs'`s Content-Range header according to the given values.
     * 
     * (Note that `total_length` is the total length of the entire resource
     * that this is a range of, not simply `end` - `start` + 1.)
     * 
     * [class`Server]` has built-in handling for range requests, and you do
     * not normally need to call this function youself. See
     * [method`MessageHeaders`.get_ranges] for more details.
     * @param start the start of the range
     * @param end the end of the range
     * @param totalLength the total length of the resource, or -1 if unknown
     */
    setContentRange(start: number, end: number, totalLength: number): void
    /**
     * Sets the "Content-Type" header in `hdrs` to `content_type`.
     * 
     * Accepts additional parameters specified in `params`.
     * @param contentType the MIME type
     * @param params additional parameters
     */
    setContentType(contentType: string, params: GLib.HashTable | null): void
    /**
     * Sets the message body encoding that `hdrs` will declare.
     * 
     * In particular, you should use this if you are going to send a request or
     * response in chunked encoding.
     * @param encoding a #SoupEncoding
     */
    setEncoding(encoding: Encoding): void
    /**
     * Sets `hdrs'`s "Expect" header according to `expectations`.
     * 
     * Currently %SOUP_EXPECTATION_CONTINUE is the only known expectation
     * value. You should set this value on a request if you are sending a
     * large message body (eg, via POST or PUT), and want to give the
     * server a chance to reject the request after seeing just the headers
     * (eg, because it will require authentication before allowing you to
     * post, or because you're POSTing to a URL that doesn't exist). This
     * saves you from having to transmit the large request body when the
     * server is just going to ignore it anyway.
     * @param expectations the expectations to set
     */
    setExpectations(expectations: Expectation): void
    /**
     * Sets `hdrs'`s Range header to request the indicated range.
     * 
     * `start` and `end` are interpreted as in a [struct`Range]`.
     * 
     * If you need to request multiple ranges, use
     * [method`MessageHeaders`.set_ranges].
     * @param start the start of the range to request
     * @param end the end of the range to request
     */
    setRange(start: number, end: number): void
    /**
     * Sets `hdrs'`s Range header to request the indicated ranges.
     * 
     * If you only want to request a single range, you can use
     * [method`MessageHeaders`.set_range].
     * @param ranges an array of #SoupRange
     * @param length the length of `range`
     */
    setRanges(ranges: Range, length: number): void
    /**
     * Atomically decrements the reference count of `hdrs` by one.
     * 
     * When the reference count reaches zero, the resources allocated by
     * `hdrs` are freed
     */
    unref(): void
}

/**
 * The HTTP message headers associated with a request or response.
 * @record 
 */
export class MessageHeaders {

    // Own properties of Soup-3.0.Soup.MessageHeaders

    static name: string

    // Constructors of Soup-3.0.Soup.MessageHeaders

    /**
     * Creates a #SoupMessageHeaders.
     * 
     * ([class`Message]` does this automatically for its own headers. You would only
     * need to use this method if you are manually parsing or generating message
     * headers.)
     * @constructor 
     * @param type the type of headers
     */
    constructor(type: MessageHeadersType) 
    /**
     * Creates a #SoupMessageHeaders.
     * 
     * ([class`Message]` does this automatically for its own headers. You would only
     * need to use this method if you are manually parsing or generating message
     * headers.)
     * @constructor 
     * @param type the type of headers
     */
    static new(type: MessageHeadersType): MessageHeaders
}

export interface MessageHeadersIter {

    // Owm methods of Soup-3.0.Soup.MessageHeadersIter

    /**
     * Yields the next name/value pair in the [struct`MessageHeaders]` being
     * iterated by `iter`.
     * 
     * If `iter` has already yielded the last header, then
     * [method`MessageHeadersIter`.next] will return %FALSE and `name` and `value`
     * will be unchanged.
     */
    next(): [ /* returnType */ boolean, /* name */ string, /* value */ string ]
}

/**
 * An opaque type used to iterate over a %SoupMessageHeaders
 * structure.
 * 
 * After intializing the iterator with [func`MessageHeadersIter`.init], call
 * [method`MessageHeadersIter`.next] to fetch data from it.
 * 
 * You may not modify the headers while iterating over them.
 * @record 
 */
export class MessageHeadersIter {

    // Own properties of Soup-3.0.Soup.MessageHeadersIter

    static name: string

    // Constructors of Soup-3.0.Soup.MessageHeadersIter

    /**
     * Initializes `iter` for iterating `hdrs`.
     * @param hdrs a %SoupMessageHeaders
     */
    static init(hdrs: MessageHeaders): /* iter */ MessageHeadersIter
}

export interface MessageMetrics {

    // Owm methods of Soup-3.0.Soup.MessageMetrics

    /**
     * Copies `metrics`.
     */
    copy(): MessageMetrics
    /**
     * Frees `metrics`.
     */
    free(): void
    /**
     * Get the time immediately after the [class`Message]` completed the
     * connection to the server. This includes the time for the proxy
     * negotiation and TLS handshake.
     * 
     * It will be 0 if no network connection was required to fetch the resource (a
     * persistent connection was used or resource was loaded from the local disk
     * cache).
     */
    getConnectEnd(): number
    /**
     * Get the time immediately before the [class`Message]` started to
     * establish the connection to the server.
     * 
     * It will be 0 if no network connection was required to fetch the resource (a
     * persistent connection was used or resource was loaded from the local disk
     * cache).
     */
    getConnectStart(): number
    /**
     * Get the time immediately after the [class`Message]` completed the
     * domain lookup name for the resource.
     * 
     * It will be 0 if no domain lookup was required to fetch the resource (a
     * persistent connection was used or resource was loaded from the local disk
     * cache).
     */
    getDnsEnd(): number
    /**
     * Get the time immediately before the [class`Message]` started the
     * domain lookup name for the resource.
     * 
     * It will be 0 if no domain lookup was required to fetch the resource (a
     * persistent connection was used or resource was loaded from the local disk
     * cache).
     */
    getDnsStart(): number
    /**
     * Get the time immediately before the [class`Message]` started to
     * fetch a resource either from a remote server or local disk cache.
     */
    getFetchStart(): number
    /**
     * Get the number of bytes sent to the network for the request body.
     * 
     * This is the size of the body sent, after encodings are applied, so it might
     * be greater than the value returned by
     * [method`MessageMetrics`.get_request_body_size]. This value is available right
     * before [signal`Message:`:wrote-body] signal is emitted, but you might get an
     * intermediate value if called before.
     */
    getRequestBodyBytesSent(): number
    /**
     * Get the request body size in bytes. This is the size of the original body
     * given to the request before any encoding is applied.
     * 
     * This value is available right before [signal`Message:`:wrote-body] signal is
     * emitted, but you might get an intermediate value if called before.
     */
    getRequestBodySize(): number
    /**
     * Get the number of bytes sent to the network for the request headers.
     * 
     * This value is available right before [signal`Message:`:wrote-headers] signal
     * is emitted, but you might get an intermediate value if called before.
     */
    getRequestHeaderBytesSent(): number
    /**
     * Get the time immediately before the [class`Message]` started the
     * request of the resource from the server or the local disk cache.
     */
    getRequestStart(): number
    /**
     * Get the number of bytes received from the network for the response body.
     * 
     * This value is available right before [signal`Message:`:got-body] signal is
     * emitted, but you might get an intermediate value if called before. For
     * resources loaded from the disk cache this value is always 0.
     */
    getResponseBodyBytesReceived(): number
    /**
     * Get the response body size in bytes.
     * 
     * This is the size of the body as given to the user after all encodings are
     * applied, so it might be greater than the value returned by
     * [method`MessageMetrics`.get_response_body_bytes_received]. This value is
     * available right before [signal`Message:`:got-body] signal is emitted, but you
     * might get an intermediate value if called before.
     */
    getResponseBodySize(): number
    /**
     * Get the time immediately after the [class`Message]` received the last
     * bytes of the response from the server or the local disk cache.
     * 
     * In case of load failure, this returns the time immediately before the
     * fetch is aborted.
     */
    getResponseEnd(): number
    /**
     * Get the number of bytes received from the network for the response headers.
     * 
     * This value is available right before [signal`Message:`:got-headers] signal
     * is emitted, but you might get an intermediate value if called before.
     * For resources loaded from the disk cache this value is always 0.
     */
    getResponseHeaderBytesReceived(): number
    /**
     * Get the time immediately after the [class`Message]` received the first
     * bytes of the response from the server or the local disk cache.
     */
    getResponseStart(): number
    /**
     * Get the time immediately before the [class`Message]` started the
     * TLS handshake.
     * 
     * It will be 0 if no TLS handshake was required to fetch the resource
     * (connection was not secure, a persistent connection was used or resource was
     * loaded from the local disk cache).
     */
    getTlsStart(): number
}

/**
 * Contains metrics collected while loading a [class`Message]` either from the
 * network or the disk cache.
 * 
 * Metrics are not collected by default for a [class`Message]`, you need to add the
 * flag %SOUP_MESSAGE_COLLECT_METRICS to enable the feature.
 * 
 * Temporal metrics are expressed as a monotonic time and always start with a
 * fetch start event and finish with response end. All other events are optional.
 * An event can be 0 because it hasn't happened yet, because it's optional or
 * because the load failed before the event reached.
 * 
 * Size metrics are expressed in bytes and aree updated while the [class`Message]` is
 * being loaded. You can connect to different [class`Message]` signals to get the
 * final result of every value.
 * @record 
 */
export class MessageMetrics {

    // Own properties of Soup-3.0.Soup.MessageMetrics

    static name: string
}

export interface Multipart {

    // Owm methods of Soup-3.0.Soup.Multipart

    /**
     * Adds a new MIME part containing `body` to `multipart`
     * 
     * Uses "Content-Disposition: form-data", as per the HTML forms specification.
     * @param controlName the name of the control associated with this file
     * @param filename the name of the file, or %NULL if not known
     * @param contentType the MIME type of the file, or %NULL if not known
     * @param body the file data
     */
    appendFormFile(controlName: string, filename: string, contentType: string, body: any): void
    /**
     * Adds a new MIME part containing `data` to `multipart`.
     * 
     * Uses "Content-Disposition: form-data", as per the HTML forms specification.
     * @param controlName the name of the control associated with `data`
     * @param data the body data
     */
    appendFormString(controlName: string, data: string): void
    /**
     * Adds a new MIME part to `multipart` with the given headers and body.
     * 
     * (The multipart will make its own copies of `headers` and `body,` so
     * you should free your copies if you are not using them for anything
     * else.)
     * @param headers the MIME part headers
     * @param body the MIME part body
     */
    appendPart(headers: MessageHeaders, body: any): void
    /**
     * Frees `multipart`.
     */
    free(): void
    /**
     * Gets the number of body parts in `multipart`.
     */
    getLength(): number
    /**
     * Gets the indicated body part from `multipart`.
     * @param part the part number to get (counting from 0)
     */
    getPart(part: number): [ /* returnType */ boolean, /* headers */ MessageHeaders, /* body */ any ]
    /**
     * Serializes `multipart` to `dest_headers` and `dest_body`.
     * @param destHeaders the headers of the HTTP message to serialize `multipart` to
     */
    toMessage(destHeaders: MessageHeaders): /* destBody */ any
}

/**
 * Represents a multipart HTTP message body, parsed according to the
 * syntax of RFC 2046.
 * 
 * Of particular interest to HTTP are `multipart/byte-ranges` and
 * `multipart/form-data`,
 * 
 * Although the headers of a #SoupMultipart body part will contain the
 * full headers from that body part, libsoup does not interpret them
 * according to MIME rules. For example, each body part is assumed to
 * have "binary" Content-Transfer-Encoding, even if its headers
 * explicitly state otherwise. In other words, don't try to use
 * #SoupMultipart for handling real MIME multiparts.
 * @record 
 */
export class Multipart {

    // Own properties of Soup-3.0.Soup.Multipart

    static name: string

    // Constructors of Soup-3.0.Soup.Multipart

    /**
     * Creates a new empty #SoupMultipart with a randomly-generated
     * boundary string.
     * 
     * Note that `mime_type` must be the full MIME type, including "multipart/".
     * 
     * See also: [ctor`Message`.new_from_multipart].
     * @constructor 
     * @param mimeType the MIME type of the multipart to create.
     */
    constructor(mimeType: string) 
    /**
     * Creates a new empty #SoupMultipart with a randomly-generated
     * boundary string.
     * 
     * Note that `mime_type` must be the full MIME type, including "multipart/".
     * 
     * See also: [ctor`Message`.new_from_multipart].
     * @constructor 
     * @param mimeType the MIME type of the multipart to create.
     */
    static new(mimeType: string): Multipart
    /**
     * Parses `headers` and `body` to form a new #SoupMultipart
     * @constructor 
     * @param headers the headers of the HTTP message to parse
     * @param body the body of the HTTP message to parse
     */
    static newFromMessage(headers: MessageHeaders, body: any): Multipart
}

export interface MultipartInputStreamClass {

    // Own fields of Soup-3.0.Soup.MultipartInputStreamClass

    parentClass: Gio.FilterInputStreamClass
}

export abstract class MultipartInputStreamClass {

    // Own properties of Soup-3.0.Soup.MultipartInputStreamClass

    static name: string
}

export interface Range {

    // Own fields of Soup-3.0.Soup.Range

    /**
     * the start of the range
     * @field 
     */
    start: number
    /**
     * the end of the range
     * @field 
     */
    end: number
}

/**
 * Represents a byte range as used in the Range header.
 * 
 * If `end` is non-negative, then `start` and `end` represent the bounds
 * of of the range, counting from 0. (Eg, the first 500 bytes would be
 * represented as `start` = 0 and `end` = 499.)
 * 
 * If `end` is -1 and `start` is non-negative, then this represents a
 * range starting at `start` and ending with the last byte of the
 * requested resource body. (Eg, all but the first 500 bytes would be
 * `start` = 500, and `end` = -1.)
 * 
 * If `end` is -1 and `start` is negative, then it represents a "suffix
 * range", referring to the last -`start` bytes of the resource body.
 * (Eg, the last 500 bytes would be `start` = -500 and `end` = -1.)
 * @record 
 */
export class Range {

    // Own properties of Soup-3.0.Soup.Range

    static name: string
}

export interface ServerClass {

    // Own fields of Soup-3.0.Soup.ServerClass

    parentClass: GObject.ObjectClass
    requestStarted: (server: Server, msg: ServerMessage) => void
    requestRead: (server: Server, msg: ServerMessage) => void
    requestFinished: (server: Server, msg: ServerMessage) => void
    requestAborted: (server: Server, msg: ServerMessage) => void
    padding: object[]
}

export abstract class ServerClass {

    // Own properties of Soup-3.0.Soup.ServerClass

    static name: string
}

export interface ServerMessageClass {

    // Own fields of Soup-3.0.Soup.ServerMessageClass

    parentClass: GObject.ObjectClass
}

export abstract class ServerMessageClass {

    // Own properties of Soup-3.0.Soup.ServerMessageClass

    static name: string
}

export interface SessionClass {

    // Own fields of Soup-3.0.Soup.SessionClass

    parentClass: GObject.ObjectClass
    requestQueued: (session: Session, msg: Message) => void
    requestUnqueued: (session: Session, msg: Message) => void
}

export abstract class SessionClass {

    // Own properties of Soup-3.0.Soup.SessionClass

    static name: string
}

export interface SessionFeatureInterface {
}

/**
 * The interface implemented by [iface`SessionFeature]`s.
 * @record 
 */
export abstract class SessionFeatureInterface {

    // Own properties of Soup-3.0.Soup.SessionFeatureInterface

    static name: string
}

export interface WebsocketConnectionClass {

    // Own fields of Soup-3.0.Soup.WebsocketConnectionClass

    parentClass: GObject.ObjectClass
}

/**
 * The abstract base class for [class`WebsocketConnection]`.
 * @record 
 */
export abstract class WebsocketConnectionClass {

    // Own properties of Soup-3.0.Soup.WebsocketConnectionClass

    static name: string
}

export interface WebsocketExtensionClass {

    // Own fields of Soup-3.0.Soup.WebsocketExtensionClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
    /**
     * the name of the extension
     * @field 
     */
    name: string
    configure: (extension: WebsocketExtension, connectionType: WebsocketConnectionType, params: GLib.HashTable | null) => boolean
    getRequestParams: (extension: WebsocketExtension) => string | null
    getResponseParams: (extension: WebsocketExtension) => string | null
    processOutgoingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
    processIncomingMessage: (extension: WebsocketExtension, header: number, payload: any) => [ /* returnType */ any, /* header */ number ]
}

/**
 * The class structure for the #SoupWebsocketExtension.
 * @record 
 */
export abstract class WebsocketExtensionClass {

    // Own properties of Soup-3.0.Soup.WebsocketExtensionClass

    static name: string
}

export interface WebsocketExtensionDeflateClass {

    // Own fields of Soup-3.0.Soup.WebsocketExtensionDeflateClass

    parentClass: WebsocketExtensionClass
}

export abstract class WebsocketExtensionDeflateClass {

    // Own properties of Soup-3.0.Soup.WebsocketExtensionDeflateClass

    static name: string
}

export interface WebsocketExtensionManagerClass {

    // Own fields of Soup-3.0.Soup.WebsocketExtensionManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class WebsocketExtensionManagerClass {

    // Own properties of Soup-3.0.Soup.WebsocketExtensionManagerClass

    static name: string
}
