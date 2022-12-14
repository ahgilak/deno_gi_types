
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * EBookContacts-1.2
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as EDataServer from './EDataServer-1.2.js';
import type * as Soup from './Soup-2.4.js';
import type * as GData from './GData-0.0.js';
import type * as Json from './Json-1.0.js';
import type * as Goa from './Goa-1.0.js';
import type * as Camel from './Camel-1.2.js';

/**
 * The type of change in an #EBookChange
 */
export enum BookChangeType {
    /**
     * A vCard was added
     */
    ADDED,
    /**
     * A vCard was deleted
     */
    DELETED,
    /**
     * A vCard was modified
     */
    MODIFIED,
}
/**
 * Error codes returned by #EBookClient APIs, if an #EClientError was not available.
 */
export enum BookClientError {
    /**
     * Requested book did not exist
     */
    NO_SUCH_BOOK,
    /**
     * Contact referred to was not found
     */
    CONTACT_NOT_FOUND,
    /**
     * Tried to add a contact which already exists
     */
    CONTACT_ID_ALREADY_EXISTS,
    /**
     * Referred #ESource does not exist
     */
    NO_SUCH_SOURCE,
    /**
     * Out of disk space
     */
    NO_SPACE,
}
/**
 * Specifies the start position to in the list of traversed contacts
 * in calls to e_book_client_cursor_step().
 * 
 * When an #EBookClientCursor is created, the current position implied by %E_BOOK_CURSOR_ORIGIN_CURRENT
 * is the same as %E_BOOK_CURSOR_ORIGIN_BEGIN.
 */
export enum BookCursorOrigin {
    /**
     * The current cursor position
     */
    CURRENT,
    /**
     * The beginning of the cursor results.
     */
    BEGIN,
    /**
     * The ending of the cursor results.
     */
    END,
}
/**
 * Specifies the sort order of an ordered query
 */
export enum BookCursorSortType {
    /**
     * Sort results in ascending order
     */
    ASCENDING,
    /**
     * Sort results in descending order
     */
    DESCENDING,
}
/**
 * The type of index defined by e_source_backend_summary_setup_set_indexed_fields()
 */
export enum BookIndexType {
    /**
     * An index suitable for searching contacts with a prefix pattern
     */
    PREFIX,
    /**
     * An index suitable for searching contacts with a suffix pattern
     */
    SUFFIX,
    /**
     * An index suitable for searching contacts for phone numbers.
     * <note><para>Phone numbers must be convertible into FQTN according to E.164 to be
     * stored in this index. The number "+9999999" for instance won't be stored because
     * the country calling code "+999" currently is not assigned.</para></note>
     */
    PHONE,
    /**
     * Indicates that a given #EContactField should be usable as a sort key.
     */
    SORT_KEY,
}
/**
 * The kind of test a query created by e_book_query_field_test() shall perform.
 * 
 * See also: e_phone_number_compare_strings().
 */
export enum BookQueryTest {
    /**
     * look for exact match of the supplied test value
     */
    IS,
    /**
     * check if a field contains the test value
     */
    CONTAINS,
    /**
     * check if a field starts with the test value
     */
    BEGINS_WITH,
    /**
     * check if a field ends with the test value
     */
    ENDS_WITH,
    /**
     * check if a field matches with a value tested
     * using e_phone_number_compare_strings(), the match must be of strenth %E_PHONE_NUMBER_MATCH_EXACT
     * for this query to return any matches.
     */
    EQUALS_PHONE_NUMBER,
    /**
     * check if a field matches with a value tested
     * using e_phone_number_compare_strings(), the match must be at least of strength %E_PHONE_NUMBER_MATCH_NATIONAL
     * for this query to return any matches.
     */
    EQUALS_NATIONAL_PHONE_NUMBER,
    /**
     * check if a field matches with a value tested
     * using e_phone_number_compare_strings(), the match must be at least of strength %E_PHONE_NUMBER_MATCH_SHORT
     * for this query to return any matches.
     */
    EQUALS_SHORT_PHONE_NUMBER,
    /**
     * A regular expression query against contact data normalized with e_util_utf8_normalize(),
     * the normalized data is lower case with any accents removed.
     */
    REGEX_NORMAL,
    /**
     * A regular expression query against raw contact data, this is usually slower than
     * a %E_BOOK_QUERY_REGEX_NORMAL as it implies that #EVCard(s) must be parsed in order to get the raw data
     * for comparison.
     */
    REGEX_RAW,
    /**
     * End marker for the #EBookQueryTest enumeration, not a valid query test.
     */
    LAST,
}
/**
 * Status messages used in notifications in the deprecated #EBookView class
 */
export enum BookViewStatus {
    /**
     * Ok
     */
    STATUS_OK,
    /**
     * Time limit exceeded
     */
    STATUS_TIME_LIMIT_EXCEEDED,
    /**
     * Size limit exceeded
     */
    STATUS_SIZE_LIMIT_EXCEEDED,
    /**
     * Invalid search expression
     */
    ERROR_INVALID_QUERY,
    /**
     * Search expression refused
     */
    ERROR_QUERY_REFUSED,
    /**
     * Another error occurred
     */
    ERROR_OTHER_ERROR,
}
export enum ContactField {
    UID,
    FILE_AS,
    BOOK_UID,
    FULL_NAME,
    GIVEN_NAME,
    FAMILY_NAME,
    NICKNAME,
    EMAIL_1,
    EMAIL_2,
    EMAIL_3,
    EMAIL_4,
    MAILER,
    ADDRESS_LABEL_HOME,
    ADDRESS_LABEL_WORK,
    ADDRESS_LABEL_OTHER,
    PHONE_ASSISTANT,
    PHONE_BUSINESS,
    PHONE_BUSINESS_2,
    PHONE_BUSINESS_FAX,
    PHONE_CALLBACK,
    PHONE_CAR,
    PHONE_COMPANY,
    PHONE_HOME,
    PHONE_HOME_2,
    PHONE_HOME_FAX,
    PHONE_ISDN,
    PHONE_MOBILE,
    PHONE_OTHER,
    PHONE_OTHER_FAX,
    PHONE_PAGER,
    PHONE_PRIMARY,
    PHONE_RADIO,
    PHONE_TELEX,
    PHONE_TTYTDD,
    ORG,
    ORG_UNIT,
    OFFICE,
    TITLE,
    ROLE,
    MANAGER,
    ASSISTANT,
    HOMEPAGE_URL,
    BLOG_URL,
    CATEGORIES,
    CALENDAR_URI,
    FREEBUSY_URL,
    ICS_CALENDAR,
    VIDEO_URL,
    SPOUSE,
    NOTE,
    IM_AIM_HOME_1,
    IM_AIM_HOME_2,
    IM_AIM_HOME_3,
    IM_AIM_WORK_1,
    IM_AIM_WORK_2,
    IM_AIM_WORK_3,
    IM_GROUPWISE_HOME_1,
    IM_GROUPWISE_HOME_2,
    IM_GROUPWISE_HOME_3,
    IM_GROUPWISE_WORK_1,
    IM_GROUPWISE_WORK_2,
    IM_GROUPWISE_WORK_3,
    IM_JABBER_HOME_1,
    IM_JABBER_HOME_2,
    IM_JABBER_HOME_3,
    IM_JABBER_WORK_1,
    IM_JABBER_WORK_2,
    IM_JABBER_WORK_3,
    IM_YAHOO_HOME_1,
    IM_YAHOO_HOME_2,
    IM_YAHOO_HOME_3,
    IM_YAHOO_WORK_1,
    IM_YAHOO_WORK_2,
    IM_YAHOO_WORK_3,
    IM_MSN_HOME_1,
    IM_MSN_HOME_2,
    IM_MSN_HOME_3,
    IM_MSN_WORK_1,
    IM_MSN_WORK_2,
    IM_MSN_WORK_3,
    IM_ICQ_HOME_1,
    IM_ICQ_HOME_2,
    IM_ICQ_HOME_3,
    IM_ICQ_WORK_1,
    IM_ICQ_WORK_2,
    IM_ICQ_WORK_3,
    REV,
    NAME_OR_ORG,
    ADDRESS,
    ADDRESS_HOME,
    ADDRESS_WORK,
    ADDRESS_OTHER,
    CATEGORY_LIST,
    PHOTO,
    LOGO,
    NAME,
    EMAIL,
    IM_AIM,
    IM_GROUPWISE,
    IM_JABBER,
    IM_YAHOO,
    IM_MSN,
    IM_ICQ,
    WANTS_HTML,
    IS_LIST,
    LIST_SHOW_ADDRESSES,
    BIRTH_DATE,
    ANNIVERSARY,
    X509_CERT,
    PGP_CERT,
    IM_GADUGADU_HOME_1,
    IM_GADUGADU_HOME_2,
    IM_GADUGADU_HOME_3,
    IM_GADUGADU_WORK_1,
    IM_GADUGADU_WORK_2,
    IM_GADUGADU_WORK_3,
    IM_GADUGADU,
    GEO,
    TEL,
    IM_SKYPE_HOME_1,
    IM_SKYPE_HOME_2,
    IM_SKYPE_HOME_3,
    IM_SKYPE_WORK_1,
    IM_SKYPE_WORK_2,
    IM_SKYPE_WORK_3,
    IM_SKYPE,
    SIP,
    IM_GOOGLE_TALK_HOME_1,
    IM_GOOGLE_TALK_HOME_2,
    IM_GOOGLE_TALK_HOME_3,
    IM_GOOGLE_TALK_WORK_1,
    IM_GOOGLE_TALK_WORK_2,
    IM_GOOGLE_TALK_WORK_3,
    IM_GOOGLE_TALK,
    IM_TWITTER,
    IM_MATRIX_HOME_1,
    IM_MATRIX_HOME_2,
    IM_MATRIX_HOME_3,
    IM_MATRIX_WORK_1,
    IM_MATRIX_WORK_2,
    IM_MATRIX_WORK_3,
    IM_MATRIX,
    FIELD_LAST,
    FIELD_FIRST,
    LAST_SIMPLE_STRING,
    FIRST_PHONE_ID,
    LAST_PHONE_ID,
    FIRST_EMAIL_ID,
    LAST_EMAIL_ID,
    FIRST_ADDRESS_ID,
    LAST_ADDRESS_ID,
    FIRST_LABEL_ID,
    LAST_LABEL_ID,
}
export enum ContactPhotoType {
    INLINED,
    URI,
}
/**
 * The origin of a parsed EPhoneNumber's country calling code.
 */
export enum PhoneNumberCountrySource {
    /**
     * the EPhoneNumber was build from a fully qualified telephone number
     *   that contained a valid country calling code
     */
    FQTN,
    /**
     * the parsed phone number started with the current locale's international
     *   call prefix, followed by a valid country calling code
     */
    IDD,
    /**
     * the parsed phone didn't start with a (recognizable) country calling code,
     *   the code was chosen by checking the current locale settings
     */
    DEFAULT,
}
/**
 * Numeric description of a phone number related error.
 */
export enum PhoneNumberError {
    /**
     * the library was built without phone
     * number support
     */
    NOT_IMPLEMENTED,
    /**
     * the phone number parser reported a yet
     * unknown error code.
     */
    UNKNOWN,
    /**
     * the supplied text is not a phone number.
     */
    NOT_A_NUMBER,
    /**
     * the supplied phone number has an
     * invalid country calling code.
     */
    INVALID_COUNTRY_CODE,
    /**
     * the remaining text after the
     * country calling code is to short for a phone number.
     */
    TOO_SHORT_AFTER_IDD,
    /**
     * the text is too short for a phone number.
     */
    TOO_SHORT,
    /**
     * the text is too long for a phone number.
     */
    TOO_LONG,
}
/**
 * The supported formatting rules for phone numbers.
 */
export enum PhoneNumberFormat {
    /**
     * format according E.164: "+493055667788".
     */
    E164,
    /**
     * a formatted phone number always
     * starting with the country calling code: "+49 30 55667788".
     */
    INTERNATIONAL,
    /**
     * a formatted phone number in national
     * scope, that is without country calling code: "(030) 55667788".
     */
    NATIONAL,
    /**
     * a tel: URL according to RFC 3966:
     * "tel:+49-30-55667788".
     */
    RFC3966,
}
/**
 * The strength of a phone number match.
 * 
 * <example>
 * <title>Some examples of phone number matches</title>
 * <para>
 * Let's consider the phone number "+1-221-5423789", then comparing with
 * "+1.221.542.3789" we have get E_PHONE_NUMBER_MATCH_EXACT because country
 * code, region code and local number are matching. Comparing with "2215423789"
 * will result in E_PHONE_NUMBER_MATCH_NATIONAL because the country calling code
 * is missing, but the national portion is matching. Finally comparing with
 * "5423789" gives E_PHONE_NUMBER_MATCH_SHORT. For more detail have a look at
 * the following table:
 * 
 * <informaltable border="1" align="center">
 *  <colgroup>
 *   <col width="20%" />
 *   <col width="20%" />
 *   <col width="20%" />
 *   <col width="20%" />
 *   <col width="20%" />
 *  </colgroup>
 *  <tbody>
 *   <tr>
 *    <th></th>
 *    <th align="center">+1-617-5423789</th>
 *    <th align="center">+1-221-5423789</th>
 *    <th align="center">221-5423789</th>
 *    <th align="center">5423789</th>
 *   </tr><tr>
 *    <th align="right">+1-617-5423789</th>
 *    <td align="center">exact</td>
 *    <td align="center">none</td>
 *    <td align="center">none</td>
 *    <td align="center">short</td>
 *   </tr><tr>
 *    <th align="right">+1-221-5423789</th>
 *    <td align="center">none</td>
 *    <td align="center">exact</td>
 *    <td align="center">national</td>
 *    <td align="center">short</td>
 *   </tr><tr>
 *    <th align="right">221-5423789</th>
 *    <td align="center">none</td>
 *    <td align="center">national</td>
 *    <td align="center">national</td>
 *    <td align="center">short</td>
 *   </tr><tr>
 *    <th align="right">5423789</th>
 *    <td align="center">short</td>
 *    <td align="center">short</td>
 *    <td align="center">short</td>
 *    <td align="center">short</td>
 *   </tr>
 *  </tbody>
 * </informaltable>
 * </para>
 * </example>
 */
export enum PhoneNumberMatch {
    /**
     * The phone numbers did not match.
     */
    NONE,
    /**
     * The phone numbers matched exactly. Two phone number strings are an exact match
     * if the country code, national phone number, presence of a leading zero for Italian numbers and any
     * extension present are the same.
     */
    EXACT,
    /**
     * The national phone number matched. Two phone number strings match at
     * this strength if either or both has no region specified, and the national phone number
     * and extensions are the same.
     */
    NATIONAL,
    /**
     * The weakest sort of match. Two phone numbers match at
     * this strength if either or both has no region specified, or the region specified is the same, and one national
     * phone number could be a shorter version of the other number. This includes the case where one has an extension specified,
     * and the other does not.
     */
    SHORT,
}
export enum VCardFormat {
    TODO_21,
    TODO_30,
}
/**
 * Flags that control the behaviour of an #EBookClientView.
 * @bitfield 
 */
export enum BookClientViewFlags {
    /**
     * Symbolic value for no flags
     */
    NONE,
    /**
     * If this flag is set then all contacts matching the view's query will
     *   be sent as notifications when starting the view, otherwise only future
     *   changes will be reported.  The default for an #EBookClientView is %TRUE.
     */
    NOTIFY_INITIAL,
}
/**
 * Defines the behaviour of e_book_client_cursor_step().
 * @bitfield 
 */
export enum BookCursorStepFlags {
    /**
     * The cursor position should be modified while stepping
     */
    MOVE,
    /**
     * Traversed contacts should be listed and returned while stepping.
     */
    FETCH,
}
/**
 * Book operation flags, to specify behavior in certain situations. The conflict
 * resolution mode flags cannot be combined together, where the `E_BOOK_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
 * is the default behavior (and it is used when no other conflict resolution flag is set).
 * The flags can be ignored when the operation or the backend don't support it.
 * @bitfield 
 */
export enum BookOperationFlags {
    /**
     * no operation flags defined
     */
    NONE,
    /**
     * conflict resolution mode, to fail and do not
     *    do any changes, when a conflict is detected
     */
    CONFLICT_FAIL,
    /**
     * conflict resolution mode, to use newer
     *    of the local and the server side data, when a conflict is detected
     */
    CONFLICT_USE_NEWER,
    /**
     * conflict resolution mode, to use
     *    the server data (and local changed), when a conflict is detected
     */
    CONFLICT_KEEP_SERVER,
    /**
     * conflict resolution mode, to use
     *    local data (and always overwrite server data), when a conflict is detected
     */
    CONFLICT_KEEP_LOCAL,
    /**
     * conflict resolution mode, to create
     *    a copy of the data, when a conflict is detected
     */
    CONFLICT_WRITE_COPY,
}
/**
 * Provides comma-separated list of required fields by the book backend.
 * All of these attributes should be set, otherwise the backend will reject
 * saving the contact.
 * 
 * The e_contact_field_id() can be used to transform the field name
 * into an #EContactField.
 */
export const BOOK_BACKEND_PROPERTY_REQUIRED_FIELDS: string
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the addressbook revision was observed.
 */
export const BOOK_BACKEND_PROPERTY_REVISION: string
/**
 * Provides comma-separated list of supported fields by the book backend.
 * Attributes other than those listed here can be discarded. This can be
 * used to enable/show only supported elements in GUI.
 * 
 * The e_contact_field_id() can be used to transform the field name
 * into an #EContactField.
 */
export const BOOK_BACKEND_PROPERTY_SUPPORTED_FIELDS: string
export const EVC_ADR: string
export const EVC_BDAY: string
export const EVC_CALURI: string
export const EVC_CATEGORIES: string
export const EVC_CL_UID: string
export const EVC_CONTACT_LIST: string
export const EVC_EMAIL: string
export const EVC_ENCODING: string
export const EVC_FBURL: string
export const EVC_FN: string
export const EVC_GEO: string
export const EVC_ICSCALENDAR: string
export const EVC_KEY: string
export const EVC_LABEL: string
export const EVC_LOGO: string
export const EVC_MAILER: string
export const EVC_N: string
export const EVC_NICKNAME: string
export const EVC_NOTE: string
export const EVC_ORG: string
export const EVC_PARENT_CL: string
export const EVC_PHOTO: string
export const EVC_PRODID: string
export const EVC_QUOTEDPRINTABLE: string
export const EVC_REV: string
export const EVC_ROLE: string
export const EVC_TEL: string
export const EVC_TITLE: string
export const EVC_TYPE: string
export const EVC_UID: string
export const EVC_URL: string
export const EVC_VALUE: string
export const EVC_VERSION: string
export const EVC_X_AIM: string
export const EVC_X_ANNIVERSARY: string
export const EVC_X_ASSISTANT: string
export const EVC_X_BIRTHDAY: string
export const EVC_X_BLOG_URL: string
export const EVC_X_BOOK_UID: string
export const EVC_X_CALLBACK: string
export const EVC_X_COMPANY: string
export const EVC_X_DEST_CONTACT_UID: string
export const EVC_X_DEST_EMAIL: string
export const EVC_X_DEST_EMAIL_NUM: string
export const EVC_X_DEST_HTML_MAIL: string
export const EVC_X_DEST_NAME: string
export const EVC_X_DEST_SOURCE_UID: string
export const EVC_X_E164: string
export const EVC_X_FILE_AS: string
export const EVC_X_GADUGADU: string
export const EVC_X_GOOGLE_TALK: string
export const EVC_X_GROUPWISE: string
export const EVC_X_ICQ: string
export const EVC_X_JABBER: string
export const EVC_X_LIST: string
export const EVC_X_LIST_NAME: string
export const EVC_X_LIST_SHOW_ADDRESSES: string
export const EVC_X_MANAGER: string
export const EVC_X_MATRIX: string
export const EVC_X_MSN: string
export const EVC_X_RADIO: string
export const EVC_X_SIP: string
export const EVC_X_SKYPE: string
export const EVC_X_SPOUSE: string
export const EVC_X_TELEX: string
export const EVC_X_TTYTDD: string
/**
 * Twitter name(s).
 */
export const EVC_X_TWITTER: string
export const EVC_X_VIDEO_URL: string
export const EVC_X_WANTS_HTML: string
export const EVC_X_YAHOO: string
/**
 * Pass this extension name to e_source_get_extension() to access
 * #ESourceBackendSummarySetup.  This is also used as a group name in key files.
 */
export const SOURCE_EXTENSION_BACKEND_SUMMARY_SETUP: string
/**
 * FIXME: Document me!
 */
export const VCARD_21_VALID_PARAMETERS: string
/**
 * FIXME: Document me!
 */
export const VCARD_21_VALID_PROPERTIES: string
/**
 * Parses a string representing a mailing address into a
 * structure of type #EAddressWestern.
 * @param inAddress a string representing a mailing address
 */
export function addressWesternParse(inAddress: string | null): AddressWestern | null
export function bookClientErrorCreate(code: BookClientError, customMsg: string | null): GLib.Error
export function bookClientErrorQuark(): GLib.Quark
/**
 * Get localized human readable description of the given error code.
 * @param code an #EBookClientError code
 */
export function bookClientErrorToString(code: BookClientError): string
/**
 * Create a new #EBookQuery which is the logical AND of the queries in #qs.
 * @param nqs the number of queries to AND
 * @param qs pointer to an array of #EBookQuery items
 * @param unref if %TRUE, the new query takes ownership of the existing queries
 */
export function bookQueryAnd(nqs: number, qs: BookQuery, unref: boolean): BookQuery
/**
 * Creates a new #EBookQuery which tests if any field contains `value`.
 * @param value a value
 */
export function bookQueryAnyFieldContains(value: string): BookQuery
/**
 * Creates a new #EBookQuery which tests if the field `field` exists.
 * @param field an #EContactField
 */
export function bookQueryFieldExists(field: ContactField): BookQuery
/**
 * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
 * @param field an #EContactField to test
 * @param test the test to apply
 * @param value the value to test for
 */
export function bookQueryFieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
/**
 * Parse `query_string` and return a new #EBookQuery representing it.
 * @param queryString the query
 */
export function bookQueryFromString(queryString: string): BookQuery
/**
 * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
 * @param nqs the number of queries to OR
 * @param qs pointer to an array of #EBookQuery items
 * @param unref if %TRUE, the new query takes ownership of the existing queries
 */
export function bookQueryOr(nqs: number, qs: BookQuery, unref: boolean): BookQuery
/**
 * Creates a new #EBookQuery which tests if the field `field` exists. `field`
 * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
 * @param field a field name
 */
export function bookQueryVcardFieldExists(field: string): BookQuery
/**
 * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
 * @param field a EVCard field name to test
 * @param test the test to apply
 * @param value the value to test for
 */
export function bookQueryVcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
/**
 * Encodes the #EConflictResolution into the bit-or of #EBookOperationFlags.
 * The returned value can be bit-or-ed with other #EBookOperationFlags values.
 * @param conflictResolution an #EConflictResolution
 */
export function bookUtilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
/**
 * Parses the `email_address` and calls `func` for each found address.
 * The first parameter of the `func` is the name, the second parameter
 * of the `func` is the email, the third parameters of the `func` is
 * the `user_data`. The `func` returns %TRUE, to continue processing.
 * @param emailAddress one or more email addresses as string
 * @param func a function to call for each email `user_data` (closure func): user data passed to `func`
 */
export function bookUtilForeachAddress(emailAddress: string, func: GLib.HRFunc): void
/**
 * Decodes the #EConflictResolution from the bit-or of #EBookOperationFlags.
 * @param flags bit-or of #EBookOperationFlags
 */
export function bookUtilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
/**
 * Copies a list of allocated strings, specifically
 * for the #EContactAttrList boxed type used for multi valued
 * contact fields.
 * @param list A #GList of strings
 */
export function contactAttrListCopy(list: string[]): string[]
/**
 * Frees a list of allocated strings, specifically
 * for the #EContactAttrList boxed type used for multi valued
 * contact fields.
 * @param list A #GList of strings
 */
export function contactAttrListFree(list: string[]): void
/**
 * Creates a new #EContactDate based on `str`.
 * @param str a date string in the format YYYY-MM-DD or YYYYMMDD
 */
export function contactDateFromString(str: string): ContactDate
/**
 * Creates a new #EContactName based on the parsed `name_str`.
 * @param nameStr a string representing a contact's full name
 */
export function contactNameFromString(nameStr: string): ContactName
/**
 * Parses `full_name` and returns an #ENameWestern struct filled with
 * the component parts of the name.
 * @param fullName A string containing a western name.
 */
export function nameWesternParse(fullName: string): NameWestern
/**
 * Compares two phone numbers.
 * @param firstNumber the first EPhoneNumber to compare
 * @param secondNumber the second EPhoneNumber to compare
 */
export function phoneNumberCompareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
/**
 * Compares two phone numbers within the context of `region_code`.
 * @param firstNumber the first EPhoneNumber to compare
 * @param secondNumber the second EPhoneNumber to compare
 * @param regionCode a two-letter country code, or %NULL
 */
export function phoneNumberCompareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode: string | null): PhoneNumberMatch
export function phoneNumberErrorQuark(): GLib.Quark
/**
 * Parses the string passed in `phone_number`. Note that no validation is
 * performed whether the recognized phone number is valid for a particular
 * region.
 * 
 * The two-letter country code passed in `region_code` only is used if the
 * `phone_number` is not written in international format. The application's
 * default region as returned by e_phone_number_get_default_region() is used
 * if `region_code` is %NULL.
 * 
 * If the number is guaranteed to start with a '+' followed by the country
 * calling code, then "ZZ" can be passed for `region_code`.
 * @param phoneNumber the phone number to parse
 * @param regionCode a two-letter country code, or %NULL
 */
export function phoneNumberFromString(phoneNumber: string, regionCode: string | null): PhoneNumber
/**
 * Retrieves the preferred country calling code for `region_code,`
 * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
 * 
 * If %NULL is passed for `region_code` the default region as returned by
 * e_phone_number_get_default_region() is used.
 * @param regionCode a two-letter country code, a locale name, or %NULL
 */
export function phoneNumberGetCountryCodeForRegion(regionCode: string | null): number
/**
 * Retrieves the current two-letter country code that's used by default for
 * parsing phone numbers in e_phone_number_from_string(). It can be useful
 * to store this number before parsing a bigger number of phone numbers.
 * 
 * The result of this functions depends on the current setup of the
 * %LC_ADDRESS category: If that category provides a reasonable value
 * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
 * locale name configured for %LC_ADDRESS is parsed.
 */
export function phoneNumberGetDefaultRegion(): string
/**
 * Checks if phone number support is available. It is recommended to call this
 * function before using any of the phone-utils functions to ensure that the
 * required functionality is available, and to pick alternative mechanisms if
 * needed.
 */
export function phoneNumberIsSupported(): boolean
export module Contact {

    // Constructor properties interface

    export interface ConstructorProperties extends VCard.ConstructorProperties {

        // Own constructor properties of EBookContacts-1.2.EBookContacts.Contact

        rev?: string | null
        address?: any | null
        addressHome?: ContactAddress | null
        addressLabelHome?: string | null
        addressLabelOther?: string | null
        addressLabelWork?: string | null
        addressOther?: ContactAddress | null
        addressWork?: ContactAddress | null
        anniversary?: ContactDate | null
        assistant?: string | null
        assistantPhone?: string | null
        birthDate?: ContactDate | null
        blogUrl?: string | null
        bookUid?: string | null
        businessFax?: string | null
        businessPhone?: string | null
        businessPhone2?: string | null
        callbackPhone?: string | null
        caluri?: string | null
        carPhone?: string | null
        categories?: string | null
        categoryList?: object | null
        companyPhone?: string | null
        email?: any | null
        email1?: string | null
        email2?: string | null
        email3?: string | null
        email4?: string | null
        familyName?: string | null
        fburl?: string | null
        fileAs?: string | null
        fullName?: string | null
        geo?: ContactGeo | null
        givenName?: string | null
        homeFax?: string | null
        homePhone?: string | null
        homePhone2?: string | null
        homepageUrl?: string | null
        icscalendar?: string | null
        id?: string | null
        imAim?: any | null
        imAimHome1?: string | null
        imAimHome2?: string | null
        imAimHome3?: string | null
        imAimWork1?: string | null
        imAimWork2?: string | null
        imAimWork3?: string | null
        imGadugadu?: any | null
        imGadugaduHome1?: string | null
        imGadugaduHome2?: string | null
        imGadugaduHome3?: string | null
        imGadugaduWork1?: string | null
        imGadugaduWork2?: string | null
        imGadugaduWork3?: string | null
        imGoogleTalk?: any | null
        imGoogleTalkHome1?: string | null
        imGoogleTalkHome2?: string | null
        imGoogleTalkHome3?: string | null
        imGoogleTalkWork1?: string | null
        imGoogleTalkWork2?: string | null
        imGoogleTalkWork3?: string | null
        imGroupwise?: any | null
        imGroupwiseHome1?: string | null
        imGroupwiseHome2?: string | null
        imGroupwiseHome3?: string | null
        imGroupwiseWork1?: string | null
        imGroupwiseWork2?: string | null
        imGroupwiseWork3?: string | null
        imIcq?: any | null
        imIcqHome1?: string | null
        imIcqHome2?: string | null
        imIcqHome3?: string | null
        imIcqWork1?: string | null
        imIcqWork2?: string | null
        imIcqWork3?: string | null
        imJabber?: any | null
        imJabberHome1?: string | null
        imJabberHome2?: string | null
        imJabberHome3?: string | null
        imJabberWork1?: string | null
        imJabberWork2?: string | null
        imJabberWork3?: string | null
        imMatrix?: any | null
        imMatrixHome1?: string | null
        imMatrixHome2?: string | null
        imMatrixHome3?: string | null
        imMatrixWork1?: string | null
        imMatrixWork2?: string | null
        imMatrixWork3?: string | null
        imMsn?: any | null
        imMsnHome1?: string | null
        imMsnHome2?: string | null
        imMsnHome3?: string | null
        imMsnWork1?: string | null
        imMsnWork2?: string | null
        imMsnWork3?: string | null
        imSkype?: any | null
        imSkypeHome1?: string | null
        imSkypeHome2?: string | null
        imSkypeHome3?: string | null
        imSkypeWork1?: string | null
        imSkypeWork2?: string | null
        imSkypeWork3?: string | null
        imTwitter?: any | null
        imYahoo?: any | null
        imYahooHome1?: string | null
        imYahooHome2?: string | null
        imYahooHome3?: string | null
        imYahooWork1?: string | null
        imYahooWork2?: string | null
        imYahooWork3?: string | null
        isdnPhone?: string | null
        list?: boolean | null
        listShowAddresses?: boolean | null
        logo?: ContactPhoto | null
        mailer?: string | null
        manager?: string | null
        mobilePhone?: string | null
        name?: ContactName | null
        nickname?: string | null
        note?: string | null
        office?: string | null
        org?: string | null
        orgUnit?: string | null
        otherFax?: string | null
        otherPhone?: string | null
        pager?: string | null
        pgpCert?: ContactCert | null
        phone?: any | null
        photo?: ContactPhoto | null
        primaryPhone?: string | null
        radio?: string | null
        role?: string | null
        sip?: any | null
        spouse?: string | null
        telex?: string | null
        title?: string | null
        tty?: string | null
        videoUrl?: string | null
        wantsHtml?: boolean | null
        x509Cert?: ContactCert | null
    }

}

export interface Contact {

    // Own properties of EBookContacts-1.2.EBookContacts.Contact

    rev: string
    address: any
    addressHome: ContactAddress
    addressLabelHome: string
    addressLabelOther: string
    addressLabelWork: string
    addressOther: ContactAddress
    addressWork: ContactAddress
    anniversary: ContactDate
    assistant: string
    assistantPhone: string
    birthDate: ContactDate
    blogUrl: string
    bookUid: string
    businessFax: string
    businessPhone: string
    businessPhone2: string
    callbackPhone: string
    caluri: string
    carPhone: string
    categories: string
    categoryList: object
    companyPhone: string
    email: any
    email1: string
    email2: string
    email3: string
    email4: string
    familyName: string
    fburl: string
    fileAs: string
    fullName: string
    geo: ContactGeo
    givenName: string
    homeFax: string
    homePhone: string
    homePhone2: string
    homepageUrl: string
    icscalendar: string
    id: string
    imAim: any
    imAimHome1: string
    imAimHome2: string
    imAimHome3: string
    imAimWork1: string
    imAimWork2: string
    imAimWork3: string
    imGadugadu: any
    imGadugaduHome1: string
    imGadugaduHome2: string
    imGadugaduHome3: string
    imGadugaduWork1: string
    imGadugaduWork2: string
    imGadugaduWork3: string
    imGoogleTalk: any
    imGoogleTalkHome1: string
    imGoogleTalkHome2: string
    imGoogleTalkHome3: string
    imGoogleTalkWork1: string
    imGoogleTalkWork2: string
    imGoogleTalkWork3: string
    imGroupwise: any
    imGroupwiseHome1: string
    imGroupwiseHome2: string
    imGroupwiseHome3: string
    imGroupwiseWork1: string
    imGroupwiseWork2: string
    imGroupwiseWork3: string
    imIcq: any
    imIcqHome1: string
    imIcqHome2: string
    imIcqHome3: string
    imIcqWork1: string
    imIcqWork2: string
    imIcqWork3: string
    imJabber: any
    imJabberHome1: string
    imJabberHome2: string
    imJabberHome3: string
    imJabberWork1: string
    imJabberWork2: string
    imJabberWork3: string
    imMatrix: any
    imMatrixHome1: string
    imMatrixHome2: string
    imMatrixHome3: string
    imMatrixWork1: string
    imMatrixWork2: string
    imMatrixWork3: string
    imMsn: any
    imMsnHome1: string
    imMsnHome2: string
    imMsnHome3: string
    imMsnWork1: string
    imMsnWork2: string
    imMsnWork3: string
    imSkype: any
    imSkypeHome1: string
    imSkypeHome2: string
    imSkypeHome3: string
    imSkypeWork1: string
    imSkypeWork2: string
    imSkypeWork3: string
    imTwitter: any
    imYahoo: any
    imYahooHome1: string
    imYahooHome2: string
    imYahooHome3: string
    imYahooWork1: string
    imYahooWork2: string
    imYahooWork3: string
    isdnPhone: string
    list: boolean
    listShowAddresses: boolean
    logo: ContactPhoto
    mailer: string
    manager: string
    mobilePhone: string
    name: ContactName
    readonly nameOrOrg: string
    nickname: string
    note: string
    office: string
    org: string
    orgUnit: string
    otherFax: string
    otherPhone: string
    pager: string
    pgpCert: ContactCert
    phone: any
    photo: ContactPhoto
    primaryPhone: string
    radio: string
    role: string
    sip: any
    spouse: string
    telex: string
    title: string
    tty: string
    videoUrl: string
    wantsHtml: boolean
    x509Cert: ContactCert

    // Own fields of EBookContacts-1.2.EBookContacts.Contact

    parent: VCard & GObject.Object

    // Owm methods of EBookContacts-1.2.EBookContacts.Contact

    /**
     * Creates a copy of `contact`.
     */
    duplicate(): Contact
    /**
     * Gets the value of `contact'`s field specified by `field_id`.
     * @param fieldId an #EContactField
     */
    get(fieldId: ContactField): object | null
    /**
     * Gets a list of the vcard attributes for `contact'`s `field_id`.
     * @param fieldId an #EContactField
     */
    getAttributes(fieldId: ContactField): VCardAttribute[]

    // Overloads of getAttributes

    /**
     * Gets the list of all attributes from `evcard`. The list and its
     * contents are owned by `evcard,` and must not be freed.
     */
    getAttributes(): VCardAttribute[]
    /**
     * Gets a list of the vcard attributes for `contact'`s `field_ids`.
     * @param fieldIds an array of #EContactField
     */
    getAttributesSet(fieldIds: ContactField[]): VCardAttribute[]
    /**
     * Gets the value of `contact'`s field specified by `field_id,` caching
     * the result so it can be freed later. Use e_contact_field_is_string()
     * to check whether the field can be used here.
     * @param fieldId an #EContactField
     */
    getConst(fieldId: ContactField): object | null
    /**
     * Tries to modify any #EContactPhoto fields which are
     * stored on the local file system as type %E_CONTACT_PHOTO_TYPE_URI
     * to be inlined and stored as %E_CONTACT_PHOTO_TYPE_INLINED instead.
     */
    inlineLocalPhotos(): boolean
    /**
     * Sets the value of `contact'`s field specified by `field_id` to `value`.
     * @param fieldId an #EContactField
     * @param value a value whose type depends on the `field_id`
     */
    set(fieldId: ContactField, value: object | null): void
    /**
     * Sets the vcard attributes for `contact'`s `field_id`.
     * Attributes are added to the contact in the same order as they are in `attributes`.
     * @param fieldId an #EContactField
     * @param attributes a #GList of pointers to #EVCardAttribute
     */
    setAttributes(fieldId: ContactField, attributes: VCardAttribute[]): void

    // Class property signals of EBookContacts-1.2.EBookContacts.Contact

    connect(sigName: "notify::Rev", callback: any): number
    on(sigName: "notify::Rev", callback: any): number
    once(sigName: "notify::Rev", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::Rev", ...args: any[]): void
    connect(sigName: "notify::address", callback: any): number
    on(sigName: "notify::address", callback: any): number
    once(sigName: "notify::address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::address-home", callback: any): number
    on(sigName: "notify::address-home", callback: any): number
    once(sigName: "notify::address-home", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-home", ...args: any[]): void
    connect(sigName: "notify::address-label-home", callback: any): number
    on(sigName: "notify::address-label-home", callback: any): number
    once(sigName: "notify::address-label-home", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-label-home", ...args: any[]): void
    connect(sigName: "notify::address-label-other", callback: any): number
    on(sigName: "notify::address-label-other", callback: any): number
    once(sigName: "notify::address-label-other", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-label-other", ...args: any[]): void
    connect(sigName: "notify::address-label-work", callback: any): number
    on(sigName: "notify::address-label-work", callback: any): number
    once(sigName: "notify::address-label-work", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-label-work", ...args: any[]): void
    connect(sigName: "notify::address-other", callback: any): number
    on(sigName: "notify::address-other", callback: any): number
    once(sigName: "notify::address-other", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-other", ...args: any[]): void
    connect(sigName: "notify::address-work", callback: any): number
    on(sigName: "notify::address-work", callback: any): number
    once(sigName: "notify::address-work", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address-work", ...args: any[]): void
    connect(sigName: "notify::anniversary", callback: any): number
    on(sigName: "notify::anniversary", callback: any): number
    once(sigName: "notify::anniversary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anniversary", ...args: any[]): void
    connect(sigName: "notify::assistant", callback: any): number
    on(sigName: "notify::assistant", callback: any): number
    once(sigName: "notify::assistant", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::assistant", ...args: any[]): void
    connect(sigName: "notify::assistant-phone", callback: any): number
    on(sigName: "notify::assistant-phone", callback: any): number
    once(sigName: "notify::assistant-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::assistant-phone", ...args: any[]): void
    connect(sigName: "notify::birth-date", callback: any): number
    on(sigName: "notify::birth-date", callback: any): number
    once(sigName: "notify::birth-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::birth-date", ...args: any[]): void
    connect(sigName: "notify::blog-url", callback: any): number
    on(sigName: "notify::blog-url", callback: any): number
    once(sigName: "notify::blog-url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::blog-url", ...args: any[]): void
    connect(sigName: "notify::book-uid", callback: any): number
    on(sigName: "notify::book-uid", callback: any): number
    once(sigName: "notify::book-uid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::book-uid", ...args: any[]): void
    connect(sigName: "notify::business-fax", callback: any): number
    on(sigName: "notify::business-fax", callback: any): number
    once(sigName: "notify::business-fax", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::business-fax", ...args: any[]): void
    connect(sigName: "notify::business-phone", callback: any): number
    on(sigName: "notify::business-phone", callback: any): number
    once(sigName: "notify::business-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::business-phone", ...args: any[]): void
    connect(sigName: "notify::business-phone-2", callback: any): number
    on(sigName: "notify::business-phone-2", callback: any): number
    once(sigName: "notify::business-phone-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::business-phone-2", ...args: any[]): void
    connect(sigName: "notify::callback-phone", callback: any): number
    on(sigName: "notify::callback-phone", callback: any): number
    once(sigName: "notify::callback-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::callback-phone", ...args: any[]): void
    connect(sigName: "notify::caluri", callback: any): number
    on(sigName: "notify::caluri", callback: any): number
    once(sigName: "notify::caluri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caluri", ...args: any[]): void
    connect(sigName: "notify::car-phone", callback: any): number
    on(sigName: "notify::car-phone", callback: any): number
    once(sigName: "notify::car-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::car-phone", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::category-list", callback: any): number
    on(sigName: "notify::category-list", callback: any): number
    once(sigName: "notify::category-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::category-list", ...args: any[]): void
    connect(sigName: "notify::company-phone", callback: any): number
    on(sigName: "notify::company-phone", callback: any): number
    once(sigName: "notify::company-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::company-phone", ...args: any[]): void
    connect(sigName: "notify::email", callback: any): number
    on(sigName: "notify::email", callback: any): number
    once(sigName: "notify::email", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email", ...args: any[]): void
    connect(sigName: "notify::email-1", callback: any): number
    on(sigName: "notify::email-1", callback: any): number
    once(sigName: "notify::email-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-1", ...args: any[]): void
    connect(sigName: "notify::email-2", callback: any): number
    on(sigName: "notify::email-2", callback: any): number
    once(sigName: "notify::email-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-2", ...args: any[]): void
    connect(sigName: "notify::email-3", callback: any): number
    on(sigName: "notify::email-3", callback: any): number
    once(sigName: "notify::email-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-3", ...args: any[]): void
    connect(sigName: "notify::email-4", callback: any): number
    on(sigName: "notify::email-4", callback: any): number
    once(sigName: "notify::email-4", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-4", ...args: any[]): void
    connect(sigName: "notify::family-name", callback: any): number
    on(sigName: "notify::family-name", callback: any): number
    once(sigName: "notify::family-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::fburl", callback: any): number
    on(sigName: "notify::fburl", callback: any): number
    once(sigName: "notify::fburl", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fburl", ...args: any[]): void
    connect(sigName: "notify::file-as", callback: any): number
    on(sigName: "notify::file-as", callback: any): number
    once(sigName: "notify::file-as", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-as", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: any): number
    on(sigName: "notify::full-name", callback: any): number
    once(sigName: "notify::full-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::geo", callback: any): number
    on(sigName: "notify::geo", callback: any): number
    once(sigName: "notify::geo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::geo", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: any): number
    on(sigName: "notify::given-name", callback: any): number
    once(sigName: "notify::given-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::home-fax", callback: any): number
    on(sigName: "notify::home-fax", callback: any): number
    once(sigName: "notify::home-fax", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::home-fax", ...args: any[]): void
    connect(sigName: "notify::home-phone", callback: any): number
    on(sigName: "notify::home-phone", callback: any): number
    once(sigName: "notify::home-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::home-phone", ...args: any[]): void
    connect(sigName: "notify::home-phone-2", callback: any): number
    on(sigName: "notify::home-phone-2", callback: any): number
    once(sigName: "notify::home-phone-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::home-phone-2", ...args: any[]): void
    connect(sigName: "notify::homepage-url", callback: any): number
    on(sigName: "notify::homepage-url", callback: any): number
    once(sigName: "notify::homepage-url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homepage-url", ...args: any[]): void
    connect(sigName: "notify::icscalendar", callback: any): number
    on(sigName: "notify::icscalendar", callback: any): number
    once(sigName: "notify::icscalendar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icscalendar", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::im-aim", callback: any): number
    on(sigName: "notify::im-aim", callback: any): number
    once(sigName: "notify::im-aim", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim", ...args: any[]): void
    connect(sigName: "notify::im-aim-home-1", callback: any): number
    on(sigName: "notify::im-aim-home-1", callback: any): number
    once(sigName: "notify::im-aim-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim-home-1", ...args: any[]): void
    connect(sigName: "notify::im-aim-home-2", callback: any): number
    on(sigName: "notify::im-aim-home-2", callback: any): number
    once(sigName: "notify::im-aim-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim-home-2", ...args: any[]): void
    connect(sigName: "notify::im-aim-home-3", callback: any): number
    on(sigName: "notify::im-aim-home-3", callback: any): number
    once(sigName: "notify::im-aim-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim-home-3", ...args: any[]): void
    connect(sigName: "notify::im-aim-work-1", callback: any): number
    on(sigName: "notify::im-aim-work-1", callback: any): number
    once(sigName: "notify::im-aim-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim-work-1", ...args: any[]): void
    connect(sigName: "notify::im-aim-work-2", callback: any): number
    on(sigName: "notify::im-aim-work-2", callback: any): number
    once(sigName: "notify::im-aim-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim-work-2", ...args: any[]): void
    connect(sigName: "notify::im-aim-work-3", callback: any): number
    on(sigName: "notify::im-aim-work-3", callback: any): number
    once(sigName: "notify::im-aim-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-aim-work-3", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu", callback: any): number
    on(sigName: "notify::im-gadugadu", callback: any): number
    once(sigName: "notify::im-gadugadu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-home-1", callback: any): number
    on(sigName: "notify::im-gadugadu-home-1", callback: any): number
    once(sigName: "notify::im-gadugadu-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu-home-1", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-home-2", callback: any): number
    on(sigName: "notify::im-gadugadu-home-2", callback: any): number
    once(sigName: "notify::im-gadugadu-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu-home-2", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-home-3", callback: any): number
    on(sigName: "notify::im-gadugadu-home-3", callback: any): number
    once(sigName: "notify::im-gadugadu-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu-home-3", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-work-1", callback: any): number
    on(sigName: "notify::im-gadugadu-work-1", callback: any): number
    once(sigName: "notify::im-gadugadu-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu-work-1", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-work-2", callback: any): number
    on(sigName: "notify::im-gadugadu-work-2", callback: any): number
    once(sigName: "notify::im-gadugadu-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu-work-2", ...args: any[]): void
    connect(sigName: "notify::im-gadugadu-work-3", callback: any): number
    on(sigName: "notify::im-gadugadu-work-3", callback: any): number
    once(sigName: "notify::im-gadugadu-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-gadugadu-work-3", ...args: any[]): void
    connect(sigName: "notify::im-google-talk", callback: any): number
    on(sigName: "notify::im-google-talk", callback: any): number
    once(sigName: "notify::im-google-talk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-home-1", callback: any): number
    on(sigName: "notify::im-google-talk-home-1", callback: any): number
    once(sigName: "notify::im-google-talk-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk-home-1", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-home-2", callback: any): number
    on(sigName: "notify::im-google-talk-home-2", callback: any): number
    once(sigName: "notify::im-google-talk-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk-home-2", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-home-3", callback: any): number
    on(sigName: "notify::im-google-talk-home-3", callback: any): number
    once(sigName: "notify::im-google-talk-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk-home-3", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-work-1", callback: any): number
    on(sigName: "notify::im-google-talk-work-1", callback: any): number
    once(sigName: "notify::im-google-talk-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk-work-1", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-work-2", callback: any): number
    on(sigName: "notify::im-google-talk-work-2", callback: any): number
    once(sigName: "notify::im-google-talk-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk-work-2", ...args: any[]): void
    connect(sigName: "notify::im-google-talk-work-3", callback: any): number
    on(sigName: "notify::im-google-talk-work-3", callback: any): number
    once(sigName: "notify::im-google-talk-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-google-talk-work-3", ...args: any[]): void
    connect(sigName: "notify::im-groupwise", callback: any): number
    on(sigName: "notify::im-groupwise", callback: any): number
    once(sigName: "notify::im-groupwise", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-home-1", callback: any): number
    on(sigName: "notify::im-groupwise-home-1", callback: any): number
    once(sigName: "notify::im-groupwise-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise-home-1", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-home-2", callback: any): number
    on(sigName: "notify::im-groupwise-home-2", callback: any): number
    once(sigName: "notify::im-groupwise-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise-home-2", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-home-3", callback: any): number
    on(sigName: "notify::im-groupwise-home-3", callback: any): number
    once(sigName: "notify::im-groupwise-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise-home-3", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-work-1", callback: any): number
    on(sigName: "notify::im-groupwise-work-1", callback: any): number
    once(sigName: "notify::im-groupwise-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise-work-1", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-work-2", callback: any): number
    on(sigName: "notify::im-groupwise-work-2", callback: any): number
    once(sigName: "notify::im-groupwise-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise-work-2", ...args: any[]): void
    connect(sigName: "notify::im-groupwise-work-3", callback: any): number
    on(sigName: "notify::im-groupwise-work-3", callback: any): number
    once(sigName: "notify::im-groupwise-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-groupwise-work-3", ...args: any[]): void
    connect(sigName: "notify::im-icq", callback: any): number
    on(sigName: "notify::im-icq", callback: any): number
    once(sigName: "notify::im-icq", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq", ...args: any[]): void
    connect(sigName: "notify::im-icq-home-1", callback: any): number
    on(sigName: "notify::im-icq-home-1", callback: any): number
    once(sigName: "notify::im-icq-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq-home-1", ...args: any[]): void
    connect(sigName: "notify::im-icq-home-2", callback: any): number
    on(sigName: "notify::im-icq-home-2", callback: any): number
    once(sigName: "notify::im-icq-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq-home-2", ...args: any[]): void
    connect(sigName: "notify::im-icq-home-3", callback: any): number
    on(sigName: "notify::im-icq-home-3", callback: any): number
    once(sigName: "notify::im-icq-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq-home-3", ...args: any[]): void
    connect(sigName: "notify::im-icq-work-1", callback: any): number
    on(sigName: "notify::im-icq-work-1", callback: any): number
    once(sigName: "notify::im-icq-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq-work-1", ...args: any[]): void
    connect(sigName: "notify::im-icq-work-2", callback: any): number
    on(sigName: "notify::im-icq-work-2", callback: any): number
    once(sigName: "notify::im-icq-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq-work-2", ...args: any[]): void
    connect(sigName: "notify::im-icq-work-3", callback: any): number
    on(sigName: "notify::im-icq-work-3", callback: any): number
    once(sigName: "notify::im-icq-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-icq-work-3", ...args: any[]): void
    connect(sigName: "notify::im-jabber", callback: any): number
    on(sigName: "notify::im-jabber", callback: any): number
    once(sigName: "notify::im-jabber", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber", ...args: any[]): void
    connect(sigName: "notify::im-jabber-home-1", callback: any): number
    on(sigName: "notify::im-jabber-home-1", callback: any): number
    once(sigName: "notify::im-jabber-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber-home-1", ...args: any[]): void
    connect(sigName: "notify::im-jabber-home-2", callback: any): number
    on(sigName: "notify::im-jabber-home-2", callback: any): number
    once(sigName: "notify::im-jabber-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber-home-2", ...args: any[]): void
    connect(sigName: "notify::im-jabber-home-3", callback: any): number
    on(sigName: "notify::im-jabber-home-3", callback: any): number
    once(sigName: "notify::im-jabber-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber-home-3", ...args: any[]): void
    connect(sigName: "notify::im-jabber-work-1", callback: any): number
    on(sigName: "notify::im-jabber-work-1", callback: any): number
    once(sigName: "notify::im-jabber-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber-work-1", ...args: any[]): void
    connect(sigName: "notify::im-jabber-work-2", callback: any): number
    on(sigName: "notify::im-jabber-work-2", callback: any): number
    once(sigName: "notify::im-jabber-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber-work-2", ...args: any[]): void
    connect(sigName: "notify::im-jabber-work-3", callback: any): number
    on(sigName: "notify::im-jabber-work-3", callback: any): number
    once(sigName: "notify::im-jabber-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-jabber-work-3", ...args: any[]): void
    connect(sigName: "notify::im-matrix", callback: any): number
    on(sigName: "notify::im-matrix", callback: any): number
    once(sigName: "notify::im-matrix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix", ...args: any[]): void
    connect(sigName: "notify::im-matrix-home-1", callback: any): number
    on(sigName: "notify::im-matrix-home-1", callback: any): number
    once(sigName: "notify::im-matrix-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix-home-1", ...args: any[]): void
    connect(sigName: "notify::im-matrix-home-2", callback: any): number
    on(sigName: "notify::im-matrix-home-2", callback: any): number
    once(sigName: "notify::im-matrix-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix-home-2", ...args: any[]): void
    connect(sigName: "notify::im-matrix-home-3", callback: any): number
    on(sigName: "notify::im-matrix-home-3", callback: any): number
    once(sigName: "notify::im-matrix-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix-home-3", ...args: any[]): void
    connect(sigName: "notify::im-matrix-work-1", callback: any): number
    on(sigName: "notify::im-matrix-work-1", callback: any): number
    once(sigName: "notify::im-matrix-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix-work-1", ...args: any[]): void
    connect(sigName: "notify::im-matrix-work-2", callback: any): number
    on(sigName: "notify::im-matrix-work-2", callback: any): number
    once(sigName: "notify::im-matrix-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix-work-2", ...args: any[]): void
    connect(sigName: "notify::im-matrix-work-3", callback: any): number
    on(sigName: "notify::im-matrix-work-3", callback: any): number
    once(sigName: "notify::im-matrix-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-matrix-work-3", ...args: any[]): void
    connect(sigName: "notify::im-msn", callback: any): number
    on(sigName: "notify::im-msn", callback: any): number
    once(sigName: "notify::im-msn", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn", ...args: any[]): void
    connect(sigName: "notify::im-msn-home-1", callback: any): number
    on(sigName: "notify::im-msn-home-1", callback: any): number
    once(sigName: "notify::im-msn-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn-home-1", ...args: any[]): void
    connect(sigName: "notify::im-msn-home-2", callback: any): number
    on(sigName: "notify::im-msn-home-2", callback: any): number
    once(sigName: "notify::im-msn-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn-home-2", ...args: any[]): void
    connect(sigName: "notify::im-msn-home-3", callback: any): number
    on(sigName: "notify::im-msn-home-3", callback: any): number
    once(sigName: "notify::im-msn-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn-home-3", ...args: any[]): void
    connect(sigName: "notify::im-msn-work-1", callback: any): number
    on(sigName: "notify::im-msn-work-1", callback: any): number
    once(sigName: "notify::im-msn-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn-work-1", ...args: any[]): void
    connect(sigName: "notify::im-msn-work-2", callback: any): number
    on(sigName: "notify::im-msn-work-2", callback: any): number
    once(sigName: "notify::im-msn-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn-work-2", ...args: any[]): void
    connect(sigName: "notify::im-msn-work-3", callback: any): number
    on(sigName: "notify::im-msn-work-3", callback: any): number
    once(sigName: "notify::im-msn-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-msn-work-3", ...args: any[]): void
    connect(sigName: "notify::im-skype", callback: any): number
    on(sigName: "notify::im-skype", callback: any): number
    once(sigName: "notify::im-skype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype", ...args: any[]): void
    connect(sigName: "notify::im-skype-home-1", callback: any): number
    on(sigName: "notify::im-skype-home-1", callback: any): number
    once(sigName: "notify::im-skype-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype-home-1", ...args: any[]): void
    connect(sigName: "notify::im-skype-home-2", callback: any): number
    on(sigName: "notify::im-skype-home-2", callback: any): number
    once(sigName: "notify::im-skype-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype-home-2", ...args: any[]): void
    connect(sigName: "notify::im-skype-home-3", callback: any): number
    on(sigName: "notify::im-skype-home-3", callback: any): number
    once(sigName: "notify::im-skype-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype-home-3", ...args: any[]): void
    connect(sigName: "notify::im-skype-work-1", callback: any): number
    on(sigName: "notify::im-skype-work-1", callback: any): number
    once(sigName: "notify::im-skype-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype-work-1", ...args: any[]): void
    connect(sigName: "notify::im-skype-work-2", callback: any): number
    on(sigName: "notify::im-skype-work-2", callback: any): number
    once(sigName: "notify::im-skype-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype-work-2", ...args: any[]): void
    connect(sigName: "notify::im-skype-work-3", callback: any): number
    on(sigName: "notify::im-skype-work-3", callback: any): number
    once(sigName: "notify::im-skype-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-skype-work-3", ...args: any[]): void
    connect(sigName: "notify::im-twitter", callback: any): number
    on(sigName: "notify::im-twitter", callback: any): number
    once(sigName: "notify::im-twitter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-twitter", ...args: any[]): void
    connect(sigName: "notify::im-yahoo", callback: any): number
    on(sigName: "notify::im-yahoo", callback: any): number
    once(sigName: "notify::im-yahoo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-home-1", callback: any): number
    on(sigName: "notify::im-yahoo-home-1", callback: any): number
    once(sigName: "notify::im-yahoo-home-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo-home-1", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-home-2", callback: any): number
    on(sigName: "notify::im-yahoo-home-2", callback: any): number
    once(sigName: "notify::im-yahoo-home-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo-home-2", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-home-3", callback: any): number
    on(sigName: "notify::im-yahoo-home-3", callback: any): number
    once(sigName: "notify::im-yahoo-home-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo-home-3", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-work-1", callback: any): number
    on(sigName: "notify::im-yahoo-work-1", callback: any): number
    once(sigName: "notify::im-yahoo-work-1", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo-work-1", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-work-2", callback: any): number
    on(sigName: "notify::im-yahoo-work-2", callback: any): number
    once(sigName: "notify::im-yahoo-work-2", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo-work-2", ...args: any[]): void
    connect(sigName: "notify::im-yahoo-work-3", callback: any): number
    on(sigName: "notify::im-yahoo-work-3", callback: any): number
    once(sigName: "notify::im-yahoo-work-3", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::im-yahoo-work-3", ...args: any[]): void
    connect(sigName: "notify::isdn-phone", callback: any): number
    on(sigName: "notify::isdn-phone", callback: any): number
    once(sigName: "notify::isdn-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::isdn-phone", ...args: any[]): void
    connect(sigName: "notify::list", callback: any): number
    on(sigName: "notify::list", callback: any): number
    once(sigName: "notify::list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::list-show-addresses", callback: any): number
    on(sigName: "notify::list-show-addresses", callback: any): number
    once(sigName: "notify::list-show-addresses", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::list-show-addresses", ...args: any[]): void
    connect(sigName: "notify::logo", callback: any): number
    on(sigName: "notify::logo", callback: any): number
    once(sigName: "notify::logo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::mailer", callback: any): number
    on(sigName: "notify::mailer", callback: any): number
    once(sigName: "notify::mailer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mailer", ...args: any[]): void
    connect(sigName: "notify::manager", callback: any): number
    on(sigName: "notify::manager", callback: any): number
    once(sigName: "notify::manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::manager", ...args: any[]): void
    connect(sigName: "notify::mobile-phone", callback: any): number
    on(sigName: "notify::mobile-phone", callback: any): number
    once(sigName: "notify::mobile-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mobile-phone", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::name-or-org", callback: any): number
    on(sigName: "notify::name-or-org", callback: any): number
    once(sigName: "notify::name-or-org", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name-or-org", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: any): number
    on(sigName: "notify::nickname", callback: any): number
    once(sigName: "notify::nickname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::note", callback: any): number
    on(sigName: "notify::note", callback: any): number
    once(sigName: "notify::note", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::note", ...args: any[]): void
    connect(sigName: "notify::office", callback: any): number
    on(sigName: "notify::office", callback: any): number
    once(sigName: "notify::office", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::office", ...args: any[]): void
    connect(sigName: "notify::org", callback: any): number
    on(sigName: "notify::org", callback: any): number
    once(sigName: "notify::org", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::org", ...args: any[]): void
    connect(sigName: "notify::org-unit", callback: any): number
    on(sigName: "notify::org-unit", callback: any): number
    once(sigName: "notify::org-unit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::org-unit", ...args: any[]): void
    connect(sigName: "notify::other-fax", callback: any): number
    on(sigName: "notify::other-fax", callback: any): number
    once(sigName: "notify::other-fax", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::other-fax", ...args: any[]): void
    connect(sigName: "notify::other-phone", callback: any): number
    on(sigName: "notify::other-phone", callback: any): number
    once(sigName: "notify::other-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::other-phone", ...args: any[]): void
    connect(sigName: "notify::pager", callback: any): number
    on(sigName: "notify::pager", callback: any): number
    once(sigName: "notify::pager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pager", ...args: any[]): void
    connect(sigName: "notify::pgpCert", callback: any): number
    on(sigName: "notify::pgpCert", callback: any): number
    once(sigName: "notify::pgpCert", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pgpCert", ...args: any[]): void
    connect(sigName: "notify::phone", callback: any): number
    on(sigName: "notify::phone", callback: any): number
    once(sigName: "notify::phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::phone", ...args: any[]): void
    connect(sigName: "notify::photo", callback: any): number
    on(sigName: "notify::photo", callback: any): number
    once(sigName: "notify::photo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::photo", ...args: any[]): void
    connect(sigName: "notify::primary-phone", callback: any): number
    on(sigName: "notify::primary-phone", callback: any): number
    once(sigName: "notify::primary-phone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-phone", ...args: any[]): void
    connect(sigName: "notify::radio", callback: any): number
    on(sigName: "notify::radio", callback: any): number
    once(sigName: "notify::radio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::radio", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::sip", callback: any): number
    on(sigName: "notify::sip", callback: any): number
    once(sigName: "notify::sip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sip", ...args: any[]): void
    connect(sigName: "notify::spouse", callback: any): number
    on(sigName: "notify::spouse", callback: any): number
    once(sigName: "notify::spouse", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spouse", ...args: any[]): void
    connect(sigName: "notify::telex", callback: any): number
    on(sigName: "notify::telex", callback: any): number
    once(sigName: "notify::telex", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::telex", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::tty", callback: any): number
    on(sigName: "notify::tty", callback: any): number
    once(sigName: "notify::tty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tty", ...args: any[]): void
    connect(sigName: "notify::video-url", callback: any): number
    on(sigName: "notify::video-url", callback: any): number
    once(sigName: "notify::video-url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-url", ...args: any[]): void
    connect(sigName: "notify::wants-html", callback: any): number
    on(sigName: "notify::wants-html", callback: any): number
    once(sigName: "notify::wants-html", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::wants-html", ...args: any[]): void
    connect(sigName: "notify::x509Cert", callback: any): number
    on(sigName: "notify::x509Cert", callback: any): number
    once(sigName: "notify::x509Cert", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::x509Cert", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Contact extends VCard {

    // Own properties of EBookContacts-1.2.EBookContacts.Contact

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.Contact

    constructor(config?: Contact.ConstructorProperties) 
    /**
     * Creates a new, blank #EContact.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new, blank #EContact.
     * @constructor 
     */
    static new(): Contact

    // Overloads of new

    /**
     * Creates a new, blank #EVCard.
     * @constructor 
     */
    static new(): VCard
    /**
     * Creates a new #EContact based on a vcard.
     * @constructor 
     * @param vcard a string representing a vcard
     */
    static newFromVcard(vcard: string): Contact
    /**
     * Creates a new #EContact based on a vcard and a predefined UID.
     * @constructor 
     * @param vcard a string representing a vcard
     * @param uid a contact UID
     */
    static newFromVcardWithUid(vcard: string, uid: string): Contact
    _init(config?: Contact.ConstructorProperties): void
    /**
     * Gets the #EContactField corresponding to the `field_name`.
     * @param fieldName a string representing a contact field
     */
    static fieldId(fieldName: string): ContactField
    /**
     * Gets the #EContactField corresponding to the `vcard_field`.
     * @param vcardField a string representing a vCard field
     */
    static fieldIdFromVcard(vcardField: string): ContactField
    /**
     * Returns whether the `field_id` is of a string type,
     * thus it can be used with e_contact_get_const().
     * @param fieldId an #EContactField
     */
    static fieldIsString(fieldId: ContactField): boolean
    /**
     * Gets the string representation of `field_id`.
     * @param fieldId an #EContactField
     */
    static fieldName(fieldId: ContactField): string
    /**
     * Gets the #GType used for this contact field, this indicates
     * what kind of value can be passed to e_contact_set().
     * @param fieldId an #EContactField
     */
    static fieldType(fieldId: ContactField): GObject.GType
    /**
     * Gets a human-readable, translated string representation
     * of `field_id`.
     * @param fieldId an #EContactField
     */
    static prettyName(fieldId: ContactField): string
    /**
     * Gets the vcard attribute corresponding to `field_id,` as a string.
     * @param fieldId an #EContactField
     */
    static vcardAttribute(fieldId: ContactField): string
}

export module SourceBackendSummarySetup {

    // Constructor properties interface

    export interface ConstructorProperties extends EDataServer.SourceExtension.ConstructorProperties {

        // Own constructor properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

        indexedFields?: string | null
        summaryFields?: string | null
    }

}

export interface SourceBackendSummarySetup {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    indexedFields: string
    summaryFields: string

    // Owm methods of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    /**
     * Fetches the #EContactFields configured to be indexed, with thier respective #EBookIndexTypes.
     */
    getIndexedFields(): [ /* returnType */ ContactField, /* types */ BookIndexType, /* nFields */ number ]
    /**
     * Fetches the #EContactFields which are configured to be a part of the summary.
     * 
     * <note><para>If there are no configured summary fields, the default configuration is assumed</para></note>
     */
    getSummaryFields(): [ /* returnType */ ContactField, /* nFields */ number ]
    /**
     * Defines indexes for quick reference for the given given #EContactFields in the addressbook.
     * 
     * The same #EContactField may be specified multiple times to create multiple indexes
     * with different characteristics. If an #E_BOOK_INDEX_PREFIX index is created it will
     * be used for #E_BOOK_QUERY_BEGINS_WITH queries. An #E_BOOK_INDEX_SUFFIX index
     * will be constructed efficiently for suffix matching and will be used for
     * #E_BOOK_QUERY_ENDS_WITH queries. Similar an #E_BOOK_INDEX_PHONE index will optimize
     * #E_BOOK_QUERY_EQUALS_PHONE_NUMBER searches.
     * 
     * <note><para>The specified indexed fields must also be a part of the summary, any indexed fields
     * specified that are not already a part of the summary will be ignored.</para></note>
     * @param fields The array of #EContactFields to set indexes for
     * @param types The array of #EBookIndexTypes defining what types of indexes to create
     * @param nFields The number elements in the passed `fields,` `rule_types` and `rules` arrays.
     */
    setIndexedFieldsv(fields: ContactField, types: BookIndexType, nFields: number): void
    /**
     * Sets the summary fields configured for the given addressbook.
     * 
     * The fields %E_CONTACT_UID and %E_CONTACT_REV are not optional,
     * they will be stored in the summary regardless of the configured summary.
     * 
     * An empty summary configuration is assumed to be the default summary
     * configuration.
     * 
     * <note><para>Only #EContactFields with the type #G_TYPE_STRING or #G_TYPE_BOOLEAN
     * are currently supported as summary fields.</para></note>
     * @param fields The array of #EContactFields to set as summary fields
     * @param nFields The number of #EContactFields in `fields`
     */
    setSummaryFieldsv(fields: ContactField, nFields: number): void

    // Class property signals of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    connect(sigName: "notify::indexed-fields", callback: any): number
    on(sigName: "notify::indexed-fields", callback: any): number
    once(sigName: "notify::indexed-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indexed-fields", ...args: any[]): void
    connect(sigName: "notify::summary-fields", callback: any): number
    on(sigName: "notify::summary-fields", callback: any): number
    once(sigName: "notify::summary-fields", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary-fields", ...args: any[]): void
    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
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
export class SourceBackendSummarySetup extends EDataServer.SourceExtension {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetup

    constructor(config?: SourceBackendSummarySetup.ConstructorProperties) 
    _init(config?: SourceBackendSummarySetup.ConstructorProperties): void
}

export module VCard {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface VCard {

    // Own fields of EBookContacts-1.2.EBookContacts.VCard

    parent: GObject.Object

    // Owm methods of EBookContacts-1.2.EBookContacts.VCard

    /**
     * Prepends `attr` to `evc`. This takes ownership of `attr`.
     * @param attr an #EVCardAttribute to add
     */
    addAttribute(attr: VCardAttribute): void
    /**
     * Prepends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_add_attribute().
     * @param attr an #EVCardAttribute to add
     * @param value a value to assign to the attribute
     */
    addAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Appends `attr` to `evc` to the end of a list of attributes. This takes
     * ownership of `attr`.
     * @param attr an #EVCardAttribute to append
     */
    appendAttribute(attr: VCardAttribute): void
    /**
     * Appends `attr` to `evcard,` setting it to `value`. This takes ownership of
     * `attr`.
     * 
     * This is a convenience wrapper around e_vcard_attribute_add_value() and
     * e_vcard_append_attribute().
     * @param attr an #EVCardAttribute to append
     * @param value a value to assign to the attribute
     */
    appendAttributeWithValue(attr: VCardAttribute, value: string): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str`.
     * 
     * This modifies `evc`.
     * @param str a vCard string
     */
    construct(str: string): void
    /**
     * Similar to e_vcard_construct_with_uid(), but can also
     * be used with an `str` that is not %NULL terminated.
     * @param str a vCard string
     * @param len length of `str,` or -1 if `str` is %NULL terminated
     * @param uid a unique ID string
     */
    constructFull(str: string, len: number, uid: string | null): void
    /**
     * Constructs the existing #EVCard, `evc,` setting its vCard data to `str,` and
     * adding a new UID attribute with the value given in `uid` (if `uid` is
     * non-%NULL).
     * 
     * This modifies `evc`.
     * @param str a vCard string
     * @param uid a unique ID string
     */
    constructWithUid(str: string, uid: string | null): void
    /**
     * Prints a dump of `evc'`s structure to stdout. Used for
     * debugging.
     */
    dumpStructure(): void
    /**
     * Get the attribute `name` from `evc`.  The #EVCardAttribute is owned by
     * `evcard` and should not be freed. If the attribute does not exist, %NULL is
     * returned.
     * 
     * <note><para>This will only return the <emphasis>first</emphasis> attribute
     * with the given `name`. To get other attributes of that name (for example,
     * other <code>TEL</code> attributes if a contact has multiple telephone
     * numbers), use e_vcard_get_attributes() and iterate over the list searching
     * for matching attributes.</para>
     * <para>This method iterates over all attributes in the #EVCard, so should not
     * be called often. If extracting a large number of attributes from a vCard, it
     * is more efficient to iterate once over the list returned by
     * e_vcard_get_attributes().</para></note>
     * @param name the name of the attribute to get
     */
    getAttribute(name: string): VCardAttribute | null
    /**
     * Similar to e_vcard_get_attribute() but this method will not attempt to
     * parse the vCard if it is not already parsed.
     * @param name the name of the attribute to get
     */
    getAttributeIfParsed(name: string): VCardAttribute | null
    /**
     * Gets the list of all attributes from `evcard`. The list and its
     * contents are owned by `evcard,` and must not be freed.
     */
    getAttributes(): VCardAttribute[]
    /**
     * Check if the `evc` has been parsed already, as #EVCard implements lazy parsing
     * of its vCard data. Used for debugging.
     */
    isParsed(): boolean
    /**
     * Removes `attr` from `evc` and frees it. This takes ownership of `attr`.
     * @param attr an #EVCardAttribute to remove
     */
    removeAttribute(attr: VCardAttribute): void
    /**
     * Removes all the attributes with group name and attribute name equal to the
     * passed in values. If `attr_group` is %NULL or an empty string,
     * it removes all the attributes with passed in name irrespective of
     * their group names.
     * @param attrGroup group name of attributes to be removed
     * @param attrName name of the arributes to be removed
     */
    removeAttributes(attrGroup: string | null, attrName: string): void
    /**
     * Exports `evc` to a string representation, specified
     * by the `format` argument.
     * @param format the format to export to
     */
    toString(format: VCardFormat): string
    utilDupXAttribute(xName: string): string | null
    /**
     * Sets an "X-" attribute `x_name` to value `value` in `vcard,` or
     * removes it from `vcard,` when `value` is %NULL.
     * @param xName the attribute name, which starts with "X-"
     * @param value the value to set, or %NULL to unset
     */
    utilSetXAttribute(xName: string, value: string | null): void

    // Class property signals of EBookContacts-1.2.EBookContacts.VCard

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class VCard extends GObject.Object {

    // Own properties of EBookContacts-1.2.EBookContacts.VCard

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.VCard

    constructor(config?: VCard.ConstructorProperties) 
    /**
     * Creates a new, blank #EVCard.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new, blank #EVCard.
     * @constructor 
     */
    static new(): VCard
    /**
     * Creates a new #EVCard from the passed-in string
     * representation.
     * @constructor 
     * @param str a string representation of the vcard to create
     */
    static newFromString(str: string): VCard
    _init(config?: VCard.ConstructorProperties): void
    /**
     * Escapes a string according to RFC2426, section 5.
     * @param s the string to escape
     */
    static escapeString(s: string): string
    /**
     * Unescapes a string according to RFC2426, section 5.
     * @param s the string to unescape
     */
    static unescapeString(s: string): string
}

export interface AddressWestern {

    // Own fields of EBookContacts-1.2.EBookContacts.AddressWestern

    /**
     * PO Box.
     * @field 
     */
    poBox: string
    /**
     * TODO, we're not sure what this is.
     * @field 
     */
    extended: string
    /**
     * Street name
     * @field 
     */
    street: string
    /**
     * City or town
     * @field 
     */
    locality: string
    /**
     * State or province
     * @field 
     */
    region: string
    /**
     * Postal Code
     * @field 
     */
    postalCode: string
    /**
     * Country
     * @field 
     */
    country: string

    // Owm methods of EBookContacts-1.2.EBookContacts.AddressWestern

    /**
     * Creates a copy of `eaw`.
     */
    copy(): AddressWestern
    /**
     * Frees `eaw` and its contents.
     */
    free(): void
}

/**
 * Western address structure.
 * @record 
 */
export class AddressWestern {

    // Own properties of EBookContacts-1.2.EBookContacts.AddressWestern

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.AddressWestern

    /**
     * Parses a string representing a mailing address into a
     * structure of type #EAddressWestern.
     * @param inAddress a string representing a mailing address
     */
    static parse(inAddress: string | null): AddressWestern | null
}

export interface BookChange {

    // Own fields of EBookContacts-1.2.EBookContacts.BookChange

    /**
     * The #EBookChangeType
     * @field 
     */
    changeType: BookChangeType
    /**
     * The #EContact which changed
     * @field 
     */
    contact: Contact
}

/**
 * This is a part of the deprecated #EBook API.
 * @record 
 */
export class BookChange {

    // Own properties of EBookContacts-1.2.EBookContacts.BookChange

    static name: string
}

export interface BookQuery {

    // Owm methods of EBookContacts-1.2.EBookContacts.BookQuery

    /**
     * Creates a copy of `q`.
     */
    copy(): BookQuery
    /**
     * Creates a new #EBookQuery which is the opposite of #q.
     * @param unref if %TRUE, the new query takes ownership of the existing queries
     */
    not(unref: boolean): BookQuery
    /**
     * Increment the reference count on `q`.
     */
    ref(): BookQuery
    /**
     * Return the string representation of `q`.
     */
    toString(): string
    /**
     * Decrement the reference count on `q`. When the reference count reaches 0, `q`
     * will be freed and any child queries will have e_book_query_unref() called.
     */
    unref(): void
}

export class BookQuery {

    // Own properties of EBookContacts-1.2.EBookContacts.BookQuery

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.BookQuery

    /**
     * Create a new #EBookQuery which is the logical AND of the queries in #qs.
     * @param nqs the number of queries to AND
     * @param qs pointer to an array of #EBookQuery items
     * @param unref if %TRUE, the new query takes ownership of the existing queries
     */
    static and(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    /**
     * Creates a new #EBookQuery which tests if any field contains `value`.
     * @param value a value
     */
    static anyFieldContains(value: string): BookQuery
    /**
     * Creates a new #EBookQuery which tests if the field `field` exists.
     * @param field an #EContactField
     */
    static fieldExists(field: ContactField): BookQuery
    /**
     * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
     * @param field an #EContactField to test
     * @param test the test to apply
     * @param value the value to test for
     */
    static fieldTest(field: ContactField, test: BookQueryTest, value: string): BookQuery
    /**
     * Parse `query_string` and return a new #EBookQuery representing it.
     * @param queryString the query
     */
    static fromString(queryString: string): BookQuery
    /**
     * Creates a new #EBookQuery which is the logical OR of the queries in #qs.
     * @param nqs the number of queries to OR
     * @param qs pointer to an array of #EBookQuery items
     * @param unref if %TRUE, the new query takes ownership of the existing queries
     */
    static or(nqs: number, qs: BookQuery, unref: boolean): BookQuery
    /**
     * Creates a new #EBookQuery which tests if the field `field` exists. `field`
     * should be a vCard field name, such as #EVC_FN or #EVC_X_MSN.
     * @param field a field name
     */
    static vcardFieldExists(field: string): BookQuery
    /**
     * Creates a new #EBookQuery which tests `field` for `value` using the test `test`.
     * @param field a EVCard field name to test
     * @param test the test to apply
     * @param value the value to test for
     */
    static vcardFieldTest(field: string, test: BookQueryTest, value: string): BookQuery
}

export interface ContactAddress {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactAddress

    addressFormat: string
    po: string
    ext: string
    street: string
    locality: string
    region: string
    code: string
    country: string

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactAddress

    /**
     * Frees the `address` struct and its contents.
     */
    free(): void
}

export class ContactAddress {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactAddress

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactAddress

    /**
     * Creates a new #EContactAddress struct.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EContactAddress struct.
     * @constructor 
     */
    static new(): ContactAddress
}

export interface ContactCert {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactCert

    length: number
    data: string

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactCert

    /**
     * Frees the `cert` struct and its contents.
     */
    free(): void
}

export class ContactCert {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactCert

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactCert

    /**
     * Creates an #EContactCert struct with all values set to 0.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an #EContactCert struct with all values set to 0.
     * @constructor 
     */
    static new(): ContactCert
}

export interface ContactClass {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactClass

    parentClass: VCardClass
}

export abstract class ContactClass {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactClass

    static name: string
}

export interface ContactDate {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactDate

    year: number
    month: number
    day: number

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactDate

    /**
     * Checks if `dt1` and `dt2` are the same date.
     * @param dt2 an #EContactDate
     */
    equal(dt2: ContactDate): boolean
    /**
     * Frees the `date` struct and its contents.
     */
    free(): void
    /**
     * Generates a date string in the format YYYY-MM-DD based
     * on the values of `dt`.
     */
    toString(): string
}

export class ContactDate {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactDate

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactDate

    /**
     * Creates a new #EContactDate struct.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EContactDate struct.
     * @constructor 
     */
    static new(): ContactDate
    /**
     * Creates a new #EContactDate based on `str`.
     * @param str a date string in the format YYYY-MM-DD or YYYYMMDD
     */
    static fromString(str: string): ContactDate
}

export interface ContactGeo {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactGeo

    /**
     * latitude
     * @field 
     */
    latitude: number
    /**
     * longitude
     * @field 
     */
    longitude: number

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactGeo

    /**
     * Frees the `geo` struct and its contents.
     */
    free(): void
}

export class ContactGeo {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactGeo

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactGeo

    /**
     * Creates an #EContactGeo struct with all coordinates set to 0.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an #EContactGeo struct with all coordinates set to 0.
     * @constructor 
     */
    static new(): ContactGeo
}

export interface ContactName {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactName

    family: string
    given: string
    additional: string
    prefixes: string
    suffixes: string

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactName

    /**
     * Creates a copy of `n`.
     */
    copy(): ContactName
    /**
     * Frees `name` and its contents.
     */
    free(): void
    /**
     * Generates a string representation of `name`.
     */
    toString(): string
}

export class ContactName {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactName

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactName

    /**
     * Creates a new #EContactName struct.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EContactName struct.
     * @constructor 
     */
    static new(): ContactName
    /**
     * Creates a new #EContactName based on the parsed `name_str`.
     * @param nameStr a string representing a contact's full name
     */
    static fromString(nameStr: string): ContactName
}

export interface ContactPhoto {

    // Own fields of EBookContacts-1.2.EBookContacts.ContactPhoto

    type: ContactPhotoType

    // Owm methods of EBookContacts-1.2.EBookContacts.ContactPhoto

    /**
     * Creates a copy of `photo`.
     */
    copy(): ContactPhoto
    /**
     * Frees the `photo` struct and its contents.
     */
    free(): void
    /**
     * Gets the `photo'`s data.
     */
    getInlined(): Uint8Array | null
    /**
     * Gets the `photo'`s mime type.
     */
    getMimeType(): string | null
    /**
     * Gets the `photo'`s URI.
     */
    getUri(): string | null
    /**
     * Sets the `photo'`s inlined data.
     * @param data the inlined image data
     */
    setInlined(data: Uint8Array): void
    /**
     * Sets the `photo'`s mime type.
     * @param mimeType the mime type
     */
    setMimeType(mimeType: string): void
    /**
     * Sets the `photo'`s URI.
     * @param uri the `photo'`s URI
     */
    setUri(uri: string): void
}

export class ContactPhoto {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactPhoto

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.ContactPhoto

    /**
     * Creates a new #EContactPhoto struct.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #EContactPhoto struct.
     * @constructor 
     */
    static new(): ContactPhoto
}

export interface ContactPrivate {
}

export class ContactPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.ContactPrivate

    static name: string
}

export interface NameWestern {

    // Own fields of EBookContacts-1.2.EBookContacts.NameWestern

    prefix: string
    first: string
    middle: string
    nick: string
    last: string
    suffix: string
    full: string

    // Owm methods of EBookContacts-1.2.EBookContacts.NameWestern

    /**
     * Creates a copy of `w`.
     */
    copy(): NameWestern
    /**
     * Frees the `w` struct and its contents.
     */
    free(): void
}

export class NameWestern {

    // Own properties of EBookContacts-1.2.EBookContacts.NameWestern

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.NameWestern

    /**
     * Parses `full_name` and returns an #ENameWestern struct filled with
     * the component parts of the name.
     * @param fullName A string containing a western name.
     */
    static parse(fullName: string): NameWestern
}

export interface PhoneNumber {

    // Owm methods of EBookContacts-1.2.EBookContacts.PhoneNumber

    /**
     * Compares two phone numbers.
     * @param secondNumber the second EPhoneNumber to compare
     */
    compare(secondNumber: PhoneNumber): PhoneNumberMatch
    /**
     * Makes a copy of `phone_number`.
     */
    copy(): PhoneNumber
    /**
     * Released the memory occupied by `phone_number`.
     */
    free(): void
    /**
     * Queries the `phone_number'`s country calling code and optionally stores the country
     * calling code's origin in `source`. For instance when parsing "+1-617-5423789" this
     * function would return one and assing E_PHONE_NUMBER_COUNTRY_FROM_FQTN to `source`.
     * @param source an optional location for storing the phone number's origin, or %NULL
     */
    getCountryCode(source: PhoneNumberCountrySource | null): number
    /**
     * Queries the national portion of `phone_number` without any call-out
     * prefixes. For instance when parsing "+1-617-5423789" this function would
     * return the string "6175423789".
     */
    getNationalNumber(): string
    /**
     * Describes the `phone_number` according to the rules applying to `format`.
     * @param format the phone number format to apply
     */
    toString(format: PhoneNumberFormat): string
}

/**
 * This opaque type describes a parsed phone number. It can be copied using
 * e_phone_number_copy(). To release it call e_phone_number_free().
 * @record 
 */
export class PhoneNumber {

    // Own properties of EBookContacts-1.2.EBookContacts.PhoneNumber

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.PhoneNumber

    /**
     * Compares two phone numbers.
     * @param firstNumber the first EPhoneNumber to compare
     * @param secondNumber the second EPhoneNumber to compare
     */
    static compareStrings(firstNumber: string, secondNumber: string): PhoneNumberMatch
    /**
     * Compares two phone numbers within the context of `region_code`.
     * @param firstNumber the first EPhoneNumber to compare
     * @param secondNumber the second EPhoneNumber to compare
     * @param regionCode a two-letter country code, or %NULL
     */
    static compareStringsWithRegion(firstNumber: string, secondNumber: string, regionCode: string | null): PhoneNumberMatch
    static errorQuark(): GLib.Quark
    /**
     * Parses the string passed in `phone_number`. Note that no validation is
     * performed whether the recognized phone number is valid for a particular
     * region.
     * 
     * The two-letter country code passed in `region_code` only is used if the
     * `phone_number` is not written in international format. The application's
     * default region as returned by e_phone_number_get_default_region() is used
     * if `region_code` is %NULL.
     * 
     * If the number is guaranteed to start with a '+' followed by the country
     * calling code, then "ZZ" can be passed for `region_code`.
     * @param phoneNumber the phone number to parse
     * @param regionCode a two-letter country code, or %NULL
     */
    static fromString(phoneNumber: string, regionCode: string | null): PhoneNumber
    /**
     * Retrieves the preferred country calling code for `region_code,`
     * e.g. 358 for "fi" or 1 for "en_US`UTF-8`".
     * 
     * If %NULL is passed for `region_code` the default region as returned by
     * e_phone_number_get_default_region() is used.
     * @param regionCode a two-letter country code, a locale name, or %NULL
     */
    static getCountryCodeForRegion(regionCode: string | null): number
    /**
     * Retrieves the current two-letter country code that's used by default for
     * parsing phone numbers in e_phone_number_from_string(). It can be useful
     * to store this number before parsing a bigger number of phone numbers.
     * 
     * The result of this functions depends on the current setup of the
     * %LC_ADDRESS category: If that category provides a reasonable value
     * for %_NL_ADDRESS_COUNTRY_AB2 this value is returned. Otherwise the
     * locale name configured for %LC_ADDRESS is parsed.
     */
    static getDefaultRegion(): string
    /**
     * Checks if phone number support is available. It is recommended to call this
     * function before using any of the phone-utils functions to ensure that the
     * required functionality is available, and to pick alternative mechanisms if
     * needed.
     */
    static isSupported(): boolean
}

export interface SourceBackendSummarySetupClass {

    // Own fields of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupClass

    parentClass: EDataServer.SourceBackendClass
}

export abstract class SourceBackendSummarySetupClass {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupClass

    static name: string
}

export interface SourceBackendSummarySetupPrivate {
}

export class SourceBackendSummarySetupPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.SourceBackendSummarySetupPrivate

    static name: string
}

export interface VCardAttribute {

    // Owm methods of EBookContacts-1.2.EBookContacts.VCardAttribute

    /**
     * Prepends `param` to `attr'`s list of parameters. This takes ownership of
     * `param` (and all its values).
     * 
     * Duplicate parameters have their values merged, so that all parameter names
     * in `attr` are unique. Values are also merged so that uniqueness is preserved.
     * @param param an #EVCardAttributeParam to add
     */
    addParam(param: VCardAttributeParam): void
    /**
     * Appends `value` to `param,` then prepends `param` to `attr`. This takes ownership
     * of `param,` but not of `value`.
     * 
     * This is a convenience method for e_vcard_attribute_param_add_value() and
     * e_vcard_attribute_add_param().
     * @param param an #EVCardAttributeParam
     * @param value a string value
     */
    addParamWithValue(param: VCardAttributeParam, value: string): void
    /**
     * Appends `value` to `attr'`s list of values.
     * @param value a string value
     */
    addValue(value: string): void
    /**
     * Encodes `value` according to the encoding used for `attr,` and appends it to
     * `attr'`s list of values.
     * 
     * This should only be used if the #EVCardAttribute has a non-raw encoding (i.e.
     * if it???s encoded in base-64 or quoted-printable encoding).
     * @param value an encoded value
     * @param len the length of the encoded value, in bytes
     */
    addValueDecoded(value: string, len: number): void
    /**
     * Makes a copy of `attr`.
     */
    copy(): VCardAttribute
    /**
     * Frees an attribute, its values and its parameters.
     */
    free(): void
    /**
     * Gets the group name of `attr`.
     */
    getGroup(): string | null
    /**
     * Gets the name of `attr`.
     */
    getName(): string
    /**
     * Gets the list of values for the paramater `name` from `attr`. The list and its
     * contents are owned by `attr,` and must not be freed. If no parameter with the
     * given `name` exists, %NULL is returned.
     * @param name a parameter name
     */
    getParam(name: string): string[] | null
    /**
     * Gets the list of parameters (of type #EVCardAttributeParam) from `attr`. The
     * list and its contents are owned by `attr,` and must not be freed.
     */
    getParams(): VCardAttributeParam[]
    /**
     * Gets the value of a single-valued #EVCardAttribute, `attr`.
     * 
     * For example, for a <code>FN</code> (full name) attribute, this will
     * return the contact???s full name as a single string.
     * 
     * This will print a warning if called on an #EVCardAttribute which is not
     * single-valued (i.e. for which e_vcard_attribute_is_single_valued() returns
     * %FALSE). Use e_vcard_attribute_get_values() in such cases instead.
     */
    getValue(): string | null
    /**
     * Gets the value of a single-valued #EVCardAttribute, `attr,` decoding
     * it if necessary according to the encoding given in the vCard???s
     * <code>ENCODING</code> attribute.
     * 
     * This will print a warning if called on an #EVCardAttribute which is not
     * single-valued (i.e. for which e_vcard_attribute_is_single_valued() returns
     * %FALSE). Use e_vcard_attribute_get_values_decoded() in such cases instead.
     */
    getValueDecoded(): GLib.String | null
    /**
     * Gets the ordered list of values from `attr`. The list and its
     * contents are owned by `attr,` and must not be freed.
     * 
     * For example, for an <code>ADR</code> (postal address) attribute, this will
     * return the components of the postal address.
     * 
     * This may be called on a single-valued attribute (i.e. one for which
     * e_vcard_attribute_is_single_valued() returns %TRUE) and will return a
     * one-element list in that case. Alternatively, use
     * e_vcard_attribute_get_value() in such cases.
     */
    getValues(): string[]
    /**
     * Gets the ordered list of values from `attr,` decoding them if
     * necessary according to the encoding given in the vCard???s
     * <code>ENCODING</code> attribute. The list and its contents are owned by
     * `attr,` and must not be freed.
     * 
     * This may be called on a single-valued attribute (i.e. one for which
     * e_vcard_attribute_is_single_valued() returns %TRUE) and will return a
     * one-element list in that case. Alternatively, use
     * e_vcard_attribute_get_value_decoded() in such cases.
     */
    getValuesDecoded(): GLib.String[]
    /**
     * Checks if `attr` has an #EVCardAttributeParam with name %EVC_TYPE and `typestr`
     * as one of its values.
     * 
     * For example, for the vCard attribute:
     * |[
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * the following holds true:
     * |[
     * g_assert_true (e_vcard_attribute_has_type (attr, "WORK") == TRUE);
     * g_assert_true (e_vcard_attribute_has_type (attr, "voice") == TRUE);
     * g_assert_true (e_vcard_attribute_has_type (attr, "HOME") == FALSE);
     * ```
     * 
     * 
     * Comparisons against `typestr` are case-insensitive.
     * @param typestr a string representing the type
     */
    hasType(typestr: string): boolean
    /**
     * Checks if `attr` has a single value.
     */
    isSingleValued(): boolean
    /**
     * Removes and frees parameter `param_name` from the attribute `attr`. Parameter
     * names are guaranteed to be unique, so `attr` is guaranteed to have no
     * parameters named `param_name` after this function returns.
     * @param paramName a parameter name
     */
    removeParam(paramName: string): void
    /**
     * Removes the value `s` from the parameter `param_name` on the attribute `attr`.
     * If `s` was the only value for parameter `param_name,` that parameter is removed
     * entirely from `attr` and freed.
     * @param paramName a parameter name
     * @param s a value
     */
    removeParamValue(paramName: string, s: string): void
    /**
     * Removes and frees all parameters from `attr`.
     * 
     * This also resets the #EVCardAttribute's encoding back to raw.
     */
    removeParams(): void
    /**
     * Removes value `s` from the value list in `attr`. The value `s` is not freed.
     * @param s a value to remove
     */
    removeValue(s: string): void
    /**
     * Removes and frees all values from `attr`.
     */
    removeValues(): void
}

export class VCardAttribute {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardAttribute

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.VCardAttribute

    /**
     * Creates a new #EVCardAttribute with the specified group and
     * attribute names. The `attr_group` may be %NULL or the empty string if no
     * group is needed.
     * @constructor 
     * @param attrGroup a group name
     * @param attrName an attribute name
     */
    constructor(attrGroup: string | null, attrName: string) 
    /**
     * Creates a new #EVCardAttribute with the specified group and
     * attribute names. The `attr_group` may be %NULL or the empty string if no
     * group is needed.
     * @constructor 
     * @param attrGroup a group name
     * @param attrName an attribute name
     */
    static new(attrGroup: string | null, attrName: string): VCardAttribute
}

export interface VCardAttributeParam {

    // Owm methods of EBookContacts-1.2.EBookContacts.VCardAttributeParam

    /**
     * Appends `value` to `param'`s list of values.
     * @param value a string value to add
     */
    addValue(value: string): void
    /**
     * Makes a copy of `param` and all its values.
     */
    copy(): VCardAttributeParam
    /**
     * Frees `param` and its values.
     */
    free(): void
    /**
     * Gets the name of `param`.
     * 
     * For example, for the only parameter of the vCard attribute:
     * |[
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * this would return <code>TYPE</code> (which is string-equivalent to
     * %EVC_TYPE).
     */
    getName(): string
    /**
     * Gets the list of values from `param`. The list and its
     * contents are owned by `param,` and must not be freed.
     * 
     * For example, for the <code>TYPE</code> parameter of the vCard attribute:
     * |[
     * TEL;TYPE=WORK,VOICE:(111) 555-1212
     * ```
     * 
     * this would return the list <code>WORK</code>, <code>VOICE</code>.
     */
    getValues(): string[]
    /**
     * Removes and frees all values from `param`.
     */
    removeValues(): void
}

export class VCardAttributeParam {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardAttributeParam

    static name: string

    // Constructors of EBookContacts-1.2.EBookContacts.VCardAttributeParam

    /**
     * Creates a new parameter named `name`.
     * @constructor 
     * @param name the name of the new parameter
     */
    constructor(name: string) 
    /**
     * Creates a new parameter named `name`.
     * @constructor 
     * @param name the name of the new parameter
     */
    static new(name: string): VCardAttributeParam
}

export interface VCardClass {

    // Own fields of EBookContacts-1.2.EBookContacts.VCardClass

    parentClass: GObject.ObjectClass
}

export abstract class VCardClass {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardClass

    static name: string
}

export interface VCardPrivate {
}

export class VCardPrivate {

    // Own properties of EBookContacts-1.2.EBookContacts.VCardPrivate

    static name: string
}
