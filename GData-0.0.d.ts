
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GData-0.0
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Json from './Json-1.0.js';
import type * as Goa from './Goa-1.0.js';

/**
 * Indicates which type of batch operation caused the current #GDataBatchOperationCallback to be called.
 */
export enum BatchOperationType {
    /**
     * a query operation
     */
    QUERY,
    /**
     * an insertion operation
     */
    INSERTION,
    /**
     * an update operation
     */
    UPDATE,
    /**
     * a deletion operation
     */
    DELETION,
}
/**
 * Error codes for #GDataDocumentsService operations.
 */
export enum DocumentsServiceError {
    /**
     * the content type of a provided file was invalid
     */
    TYPE,
}
/**
 * An enum representing the possible values of #GDataMediaContent:expression.
 */
export enum MediaExpression {
    /**
     * the media is a sample of a larger video
     */
    SAMPLE,
    /**
     * the media is the full version
     */
    FULL,
    /**
     * the media is a continuous stream
     */
    NONSTOP,
}
/**
 * An enum representing the possible values of #GDataMediaContent:medium.
 */
export enum MediaMedium {
    /**
     * the type of the media is unknown
     */
    UNKNOWN,
    /**
     * the media is an image
     */
    IMAGE,
    /**
     * the media is an audio stream
     */
    AUDIO,
    /**
     * the media is a video
     */
    VIDEO,
    /**
     * the media is another type of document
     */
    DOCUMENT,
    /**
     * the media is an executable file
     */
    EXECUTABLE,
}
/**
 * Representations of the different operations performed by the library.
 */
export enum OperationType {
    /**
     * a query
     */
    QUERY,
    /**
     * an insertion of a #GDataEntry
     */
    INSERTION,
    /**
     * an update of a #GDataEntry
     */
    UPDATE,
    /**
     * a deletion of a #GDataEntry
     */
    DELETION,
    /**
     * a download of a file
     */
    DOWNLOAD,
    /**
     * an upload of a file
     */
    UPLOAD,
    /**
     * authentication with the service
     */
    AUTHENTICATION,
    /**
     * a batch operation with #GDataBatchOperation
     */
    BATCH,
}
/**
 * Error codes for XML or JSON parsing operations.
 */
export enum ParserError {
    /**
     * Error parsing the XML or JSON syntax itself
     */
    PARSING_STRING,
    /**
     * Empty document
     */
    EMPTY_DOCUMENT,
}
/**
 * Visibility statuses available for albums on PicasaWeb. For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility">online documentation</ulink>.
 */
export enum PicasaWebVisibility {
    /**
     * the album is visible to everyone, regardless of whether they're authenticated
     */
    PUBLIC,
    /**
     * the album is visible only to authenticated users in an allowlist
     */
    PRIVATE,
}
/**
 * Error codes for #GDataService operations.
 */
export enum ServiceError {
    /**
     * The service is unavailable due to maintenance or other reasons (e.g. network errors at the server end)
     */
    UNAVAILABLE,
    /**
     * The client or server unexpectedly strayed from the protocol (fatal error)
     */
    PROTOCOL_ERROR,
    /**
     * An entry has already been inserted, and cannot be re-inserted
     */
    ENTRY_ALREADYSERTED,
    /**
     * The user attempted to do something which required authentication, and they weren't authenticated or
     * didn't have authorization for the operation
     */
    AUTHENTICATION_REQUIRED,
    /**
     * A requested resource (feed or entry) was not found on the server
     */
    NOT_FOUND,
    /**
     * There was a conflict when updating an entry on the server; the server-side copy was modified between downloading
     * and uploading the modified entry
     */
    CONFLICT,
    /**
     * Generic error for a forbidden action (not due to having insufficient permissions)
     */
    FORBIDDEN,
    /**
     * A given query parameter was invalid for the query type
     */
    BAD_QUERY_PARAMETER,
    /**
     * The service is unavailable due to local network errors (e.g. no Internet connection)
     */
    NETWORK_ERROR,
    /**
     * The service is unavailable due to proxy network errors (e.g. proxy unreachable)
     */
    PROXY_ERROR,
    /**
     * Generic error when running a batch operation and the whole operation fails
     */
    WITH_BATCH_OPERATION,
    /**
     * The API request quota for this
     * developer account has been exceeded for the current time period (e.g. day).
     * Try again later. (Since: 0.16.0.)
     */
    API_QUOTA_EXCEEDED,
}
/**
 * Video ages, allowing queries to be limited to videos uploaded in a recent time period.
 */
export enum YouTubeAge {
    /**
     * retrieve all videos, regardless of the date they were uploaded
     */
    ALL_TIME,
    /**
     * retrieve only videos uploaded in the past day
     */
    TODAY,
    /**
     * retrieve only videos uploaded in the past week
     */
    THIS_WEEK,
    /**
     * retrieve only videos uploaded in the past month
     */
    THIS_MONTH,
}
/**
 * Permissions for actions which can be set on a #GDataYouTubeVideo using gdata_youtube_video_set_access_control().
 * 
 * The only actions which can have the %GDATA_YOUTUBE_PERMISSION_MODERATED permission are
 * %GDATA_YOUTUBE_ACTION_RATE and %GDATA_YOUTUBE_ACTION_COMMENT.
 */
export enum YouTubePermission {
    /**
     * the action is allowed for everyone
     */
    ALLOWED,
    /**
     * the action is denied for everyone
     */
    DENIED,
    /**
     * the action is moderated by the video owner
     */
    MODERATED,
}
/**
 * Safe search levels for removing restricted entries from query results. For more information, see the
 * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">online documentation</ulink>.
 */
export enum YouTubeSafeSearch {
    /**
     * YouTube will not perform any filtering on the search result set
     */
    NONE,
    /**
     * YouTube will filter some content from search results and, at the least,
     * will filter content that is restricted in your locale
     */
    MODERATE,
    /**
     * YouTube will try to exclude all restricted content from the search result set
     */
    STRICT,
}
/**
 * Error codes for #GDataYouTubeService operations.
 */
export enum YouTubeServiceError {
    /**
     * the API request quota for this developer account has been exceeded
     */
    API_QUOTA_EXCEEDED,
    /**
     * the entry (e.g. video) quota for this user account has been exceeded
     */
    ENTRY_QUOTA_EXCEEDED,
    /**
     * the currently authenticated user doesn't have a YouTube channel, but the current action requires one;
     * if this error is received, inform the user that they need a YouTube channel, and provide a link to
     * <ulink type="http" url="https://www.youtube.com/create_channel">https://www.youtube.com/create_channel</ulink>
     */
    CHANNEL_REQUIRED,
}
/**
 * Standard feed types for standard feed queries with
 * gdata_youtube_service_query_standard_feed(). For more information, see the
 * <ulink type="http" url="https://developers.google.com/youtube/2.0/developers_guide_protocol_video_feeds#Standard_feeds">online
 * documentation</ulink>.
 */
export enum YouTubeStandardFeedType {
    /**
     * This feed contains the most popular YouTube
     *   videos, selected using an algorithm that combines many different signals to
     *   determine overall popularity. As of version 0.17.0, this is the only
     *   supported feed type.
     */
    FEED,
}
/**
 * The users specified by the #GDataAccessRule have no rights.
 */
export const ACCESS_ROLE_NONE: string
/**
 * The #GDataAccessRule applies to all users.
 */
export const ACCESS_SCOPE_DEFAULT: string
/**
 * The #GDataAccessRule applies to all users in a Google Apps For Your Domain domain, given in #GDataAccessRule:scope-value.
 */
export const ACCESS_SCOPE_DOMAIN: string
/**
 * The #GDataAccessRule applies to a single individual, whose e-mail address is given in #GDataAccessRule:scope-value.
 */
export const ACCESS_SCOPE_USER: string
/**
 * The users specified by the #GDataCalendarAccessRule have full edit access to
 * the calendar, except they can’t change the calendar’s access rules.
 */
export const CALENDAR_ACCESS_ROLE_EDITOR: string
/**
 * The users specified by the #GDataCalendarAccessRule can only see the
 * free/busy information on the calendar; not event details.
 */
export const CALENDAR_ACCESS_ROLE_FREE_BUSY: string
/**
 * The users specified by the #GDataCalendarAccessRule have full owner access
 * to the calendar.
 */
export const CALENDAR_ACCESS_ROLE_OWNER: string
/**
 * The users specified by the #GDataCalendarAccessRule have read-only access to
 * the calendar.
 */
export const CALENDAR_ACCESS_ROLE_READ: string
/**
 * The users specified by the #GDataCalendarAccessRule have full administrator
 * access to the calendar server. This is only available in Google Apps For
 * Your Domain.
 */
export const CALENDAR_ACCESS_ROLE_ROOT: string
/**
 * A schema for categories which label the entry they're applied to in some way, such as starring it. The semantics of the various labels
 * (such as %GDATA_CATEGORY_SCHEMA_LABELS_STARRED) are service-specific.
 */
export const CATEGORY_SCHEMA_LABELS: string
/**
 * The users specified by the #GDataAccessRule have full owner access to the document. This allows them to modify the access rules and delete
 * the document, amongst other things.
 */
export const DOCUMENTS_ACCESS_ROLE_OWNER: string
/**
 * The users specified by the #GDataAccessRule have read-only access to the document.
 */
export const DOCUMENTS_ACCESS_ROLE_READER: string
/**
 * The users specified by the #GDataAccessRule have write access to the document. They cannot modify the access rules or delete the document.
 */
export const DOCUMENTS_ACCESS_ROLE_WRITER: string
/**
 * The export format for JPEG image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_DRAWING_JPEG: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_DRAWING_PDF: string
/**
 * The export format for Portable Network Graphics (PNG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_DRAWING_PNG: string
/**
 * The export format for Scalable Vector Graphics (SVG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_drawings">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_DRAWING_SVG: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_PRESENTATION_PDF: string
/**
 * The export format for Portable Network Graphics (PNG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_PRESENTATION_PNG: string
/**
 * The export format for Microsoft PowerPoint (PPT) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_PRESENTATION_PPT: string
/**
 * The export format for plain text format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_presentations">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_PRESENTATION_TXT: string
/**
 * The #GDataDocumentsProperty having the visibility set to FALSE (default) corresponds to having the visibility property on a Drive Property Resource
 * set to "PRIVATE". This makes the Property Resource accessible only by the app that created it.
 */
export const DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE: string
/**
 * The #GDataDocumentsProperty having the visibility set to TRUE corresponds to having the visibility property
 * on a Drive Property Resource
 * set to "PUBLIC". This makes the Property Resource visible to other apps.
 */
export const DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC: string
/**
 * The export format for Comma-Separated Values (CSV) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_SPREADSHEET_CSV: string
/**
 * The export format for HyperText Markup Language (HTML) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_SPREADSHEET_HTML: string
/**
 * The export format for OpenDocument Spreadsheet (ODS) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_SPREADSHEET_ODS: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_SPREADSHEET_PDF: string
/**
 * The export format for Tab-Separated Values (TSV) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_SPREADSHEET_TSV: string
/**
 * The export format for Microsoft Excel spreadsheet (XLS) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_formats_for_spreadsheets">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_SPREADSHEET_XLS: string
/**
 * The export format for Microsoft Word (DOC) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_DOC: string
/**
 * The export format for HyperText Markup Language (HTML) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_HTML: string
/**
 * The export format for JPEG image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_JPEG: string
/**
 * The export format for OpenDocument Text (ODT) format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_ODT: string
/**
 * The export format for Portable Document Format (PDF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_PDF: string
/**
 * The export format for Portable Network Graphics (PNG) image format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_PNG: string
/**
 * The export format for Rich Text Format (RTF).
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_RTF: string
/**
 * The export format for plain text format.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_TXT: string
/**
 * The export format for a ZIP archive containing images and exported HTML.
 * 
 * For more information, see the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#valid_download_formats_for_text_documents">
 * GData protocol specification</ulink>.
 */
export const DOCUMENTS_TEXT_ZIP: string
/**
 * The relation type URI for a contact's free/busy calendar.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">
 * gContact specification</ulink>.
 */
export const GCONTACT_CALENDAR_FREE_BUSY: string
/**
 * The relation type URI for a contact's home calendar.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">
 * gContact specification</ulink>.
 */
export const GCONTACT_CALENDAR_HOME: string
/**
 * The relation type URI for a contact's work calendar.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">
 * gContact specification</ulink>.
 */
export const GCONTACT_CALENDAR_WORK: string
/**
 * The relation type URI for an anniversary event.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">
 * gContact specification</ulink>.
 */
export const GCONTACT_EVENT_ANNIVERSARY: string
/**
 * The relation type URI for a miscellaneous event.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">
 * gContact specification</ulink>.
 */
export const GCONTACT_EVENT_OTHER: string
/**
 * The relation type URI for an account number identifier.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
export const GCONTACT_EXTERNAL_ID_ACCOUNT: string
/**
 * The relation type URI for a customer identifier.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
export const GCONTACT_EXTERNAL_ID_CUSTOMER: string
/**
 * The relation type URI for a network identifier.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
export const GCONTACT_EXTERNAL_ID_NETWORK: string
/**
 * The relation type URI for an identifier related to an organization the contact is associated with.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">
 * gContact specification</ulink>.
 */
export const GCONTACT_EXTERNAL_ID_ORGANIZATION: string
/**
 * The relation type URI for a jot about a contact's home.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
export const GCONTACT_JOT_HOME: string
/**
 * The relation type URI for a jot with keywords about a contact.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
export const GCONTACT_JOT_KEYWORDS: string
/**
 * The relation type URI for a jot about an other facet of a contact.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
export const GCONTACT_JOT_OTHER: string
/**
 * The relation type URI for a jot about the relationship between a contact and the user.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
export const GCONTACT_JOT_USER: string
/**
 * The relation type URI for a jot about a contact's work.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">
 * gContact specification</ulink>.
 */
export const GCONTACT_JOT_WORK: string
/**
 * The relation type URI for a contact's assistant.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_ASSISTANT: string
/**
 * The relation type URI for a contact's brother.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_BROTHER: string
/**
 * The relation type URI for a contact's child.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_CHILD: string
/**
 * The relation type URI for a contact's domestic partner.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_DOMESTIC_PARTNER: string
/**
 * The relation type URI for a contact's father.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_FATHER: string
/**
 * The relation type URI for a contact's friend.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_FRIEND: string
/**
 * The relation type URI for a contact's manager.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_MANAGER: string
/**
 * The relation type URI for a contact's mother.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_MOTHER: string
/**
 * The relation type URI for a contact's parent.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_PARENT: string
/**
 * The relation type URI for a contact's business partner.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_PARTNER: string
/**
 * The relation type URI for a contact's referrer.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_REFERRER: string
/**
 * The relation type URI for a contact's (general) family relative.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_RELATIVE: string
/**
 * The relation type URI for a contact's sister.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_SISTER: string
/**
 * The relation type URI for a contact's spouse.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">
 * gContact specification</ulink>.
 */
export const GCONTACT_RELATION_SPOUSE: string
/**
 * The relation type URI for a contact's blog.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_BLOG: string
/**
 * The relation type URI for a contact's FTP site.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_FTP: string
/**
 * The relation type URI for a contact's home website.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_HOME: string
/**
 * The relation type URI for a contact's home page.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_HOME_PAGE: string
/**
 * The relation type URI for a miscellaneous website of the contact.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_OTHER: string
/**
 * The relation type URI for a contact's online profile.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_PROFILE: string
/**
 * The relation type URI for a contact's work website.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">
 * gContact specification</ulink>.
 */
export const GCONTACT_WEBSITE_WORK: string
/**
 * The address is for general usage. Value for #GDataGDPostalAddress:usage.
 */
export const GD_ADDRESS_USAGE_GENERAL: string
/**
 * The address is for local usage. Value for #GDataGDPostalAddress:usage.
 */
export const GD_ADDRESS_USAGE_LOCAL: string
/**
 * The relation type URI for a home e-mail address.
 */
export const GD_EMAIL_ADDRESS_HOME: string
/**
 * The relation type URI for a miscellaneous e-mail address.
 */
export const GD_EMAIL_ADDRESS_OTHER: string
/**
 * The relation type URI for a work e-mail address.
 */
export const GD_EMAIL_ADDRESS_WORK: string
/**
 * The event has been canceled.
 */
export const GD_EVENT_STATUS_CANCELED: string
/**
 * The event has been planned and confirmed.
 */
export const GD_EVENT_STATUS_CONFIRMED: string
/**
 * The event has been planned, but only tentatively scheduled.
 */
export const GD_EVENT_STATUS_TENTATIVE: string
/**
 * The event consumes time in calendars; its time will be marked as busy in a free/busy search.
 */
export const GD_EVENT_TRANSPARENCY_OPAQUE: string
/**
 * The event does not consume time in calendars; its time will be not marked as busy in a free/busy search.
 */
export const GD_EVENT_TRANSPARENCY_TRANSPARENT: string
/**
 * The event is visible to only certain people.
 */
export const GD_EVENT_VISIBILITY_CONFIDENTIAL: string
/**
 * The event's visibility is inherited from the preferences of its owner.
 */
export const GD_EVENT_VISIBILITY_DEFAULT: string
/**
 * The event is visible to very few people.
 */
export const GD_EVENT_VISIBILITY_PRIVATE: string
/**
 * The event is visible to most people.
 */
export const GD_EVENT_VISIBILITY_PUBLIC: string
/**
 * The relation type URI for a home IM address.
 */
export const GD_IM_ADDRESS_HOME: string
/**
 * The relation type URI for a Microsoft NetMeeting IM address.
 */
export const GD_IM_ADDRESS_NETMEETING: string
/**
 * The relation type URI for a miscellaneous IM address.
 */
export const GD_IM_ADDRESS_OTHER: string
/**
 * The relation type URI for a work IM address.
 */
export const GD_IM_ADDRESS_WORK: string
/**
 * The protocol type URI for an AIM IM address.
 */
export const GD_IM_PROTOCOL_AIM: string
/**
 * The protocol type URI for a Google Talk IM address.
 */
export const GD_IM_PROTOCOL_GOOGLE_TALK: string
/**
 * The protocol type URI for an ICQ IM address.
 */
export const GD_IM_PROTOCOL_ICQ: string
/**
 * The protocol type URI for a Jabber IM address.
 */
export const GD_IM_PROTOCOL_JABBER: string
/**
 * The protocol type URI for an Windows Live Messenger IM address.
 */
export const GD_IM_PROTOCOL_LIVE_MESSENGER: string
/**
 * The protocol type URI for a QQ IM address.
 */
export const GD_IM_PROTOCOL_QQ: string
/**
 * The protocol type URI for a Skype IM address.
 */
export const GD_IM_PROTOCOL_SKYPE: string
/**
 * The protocol type URI for a Yahoo! Messenger IM address.
 */
export const GD_IM_PROTOCOL_YAHOO_MESSENGER: string
/**
 * Parcels and letters can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
 */
export const GD_MAIL_CLASS_BOTH: string
/**
 * Only letters can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
 */
export const GD_MAIL_CLASS_LETTERS: string
/**
 * Address is purely locational and cannot be used for mail. Value for #GDataGDPostalAddress:mail-class.
 */
export const GD_MAIL_CLASS_NEITHER: string
/**
 * Only parcels can be sent to the address. Value for #GDataGDPostalAddress:mail-class.
 */
export const GD_MAIL_CLASS_PARCELS: string
/**
 * The relation type URI for a miscellaneous organization.
 */
export const GD_ORGANIZATION_OTHER: string
/**
 * The relation type URI for a work organization.
 */
export const GD_ORGANIZATION_WORK: string
/**
 * The relation type URI for the phone number of an assistant.
 */
export const GD_PHONE_NUMBER_ASSISTANT: string
/**
 * The relation type URI for the phone number of a callback service.
 */
export const GD_PHONE_NUMBER_CALLBACK: string
/**
 * The relation type URI for the phone number of a car phone.
 */
export const GD_PHONE_NUMBER_CAR: string
/**
 * The relation type URI for the main phone number of a company.
 */
export const GD_PHONE_NUMBER_COMPANY_MAIN: string
/**
 * The relation type URI for the phone number of a fax machine.
 */
export const GD_PHONE_NUMBER_FAX: string
/**
 * The relation type URI for a home phone number.
 */
export const GD_PHONE_NUMBER_HOME: string
/**
 * The relation type URI for the phone number of a home fax machine.
 */
export const GD_PHONE_NUMBER_HOME_FAX: string
/**
 * The relation type URI for the phone number of an ISDN phone.
 */
export const GD_PHONE_NUMBER_ISDN: string
/**
 * The relation type URI for the main phone number of a person.
 */
export const GD_PHONE_NUMBER_MAIN: string
/**
 * The relation type URI for the phone number of a mobile phone.
 */
export const GD_PHONE_NUMBER_MOBILE: string
/**
 * The relation type URI for a miscellaneous phone number.
 */
export const GD_PHONE_NUMBER_OTHER: string
/**
 * The relation type URI for a miscellaneous fax machine's phone number.
 */
export const GD_PHONE_NUMBER_OTHER_FAX: string
/**
 * The relation type URI for the phone number of a pager.
 */
export const GD_PHONE_NUMBER_PAGER: string
/**
 * The relation type URI for the phone number of a radio phone.
 */
export const GD_PHONE_NUMBER_RADIO: string
/**
 * The relation type URI for the phone number of a telex machine.
 */
export const GD_PHONE_NUMBER_TELEX: string
/**
 * The relation type URI for the phone number of a TTY TTD.
 */
export const GD_PHONE_NUMBER_TTY_TDD: string
/**
 * The relation type URI for the phone number of a work place.
 */
export const GD_PHONE_NUMBER_WORK: string
/**
 * The relation type URI for the phone number of a work fax machine.
 */
export const GD_PHONE_NUMBER_WORK_FAX: string
/**
 * The relation type URI for the phone number of a work mobile phone.
 */
export const GD_PHONE_NUMBER_WORK_MOBILE: string
/**
 * The relation type URI for the phone number of a work pager.
 */
export const GD_PHONE_NUMBER_WORK_PAGER: string
/**
 * The relation type URI for the postal address of a home.
 */
export const GD_POSTAL_ADDRESS_HOME: string
/**
 * The relation type URI for a miscellaneous postal address.
 */
export const GD_POSTAL_ADDRESS_OTHER: string
/**
 * The relation type URI for the postal address of a workplace.
 */
export const GD_POSTAL_ADDRESS_WORK: string
/**
 * The #GDataGDReminder:method for an alert to appear in the user's browser.
 */
export const GD_REMINDER_ALERT: string
/**
 * The #GDataGDReminder:method for an alert to be sent to the user by e-mail.
 */
export const GD_REMINDER_EMAIL: string
/**
 * The #GDataGDReminder:method for an alert to be sent to the user by SMS.
 */
export const GD_REMINDER_SMS: string
/**
 * The relation type URI for an event location.
 */
export const GD_WHERE_EVENT: string
/**
 * The relation type URI for an alternate event location, such as a video conference site.
 */
export const GD_WHERE_EVENT_ALTERNATE: string
/**
 * The relation type URI for an event's parking lot.
 */
export const GD_WHERE_EVENT_PARKING: string
/**
 * The relation type URI for a general meeting or event attendee.
 */
export const GD_WHO_EVENT_ATTENDEE: string
/**
 * The relation type URI for an event organizer (not necessarily an attendee).
 */
export const GD_WHO_EVENT_ORGANIZER: string
/**
 * The relation type URI for an event performer, which is similar to %GDATA_GD_WHO_EVENT_SPEAKER, but with more emphasis on art rather than speaking.
 */
export const GD_WHO_EVENT_PERFORMER: string
/**
 * The relation type URI for a speaker at an event.
 */
export const GD_WHO_EVENT_SPEAKER: string
/**
 * The relation type URI of the access control list location for this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/calendar/data/2.0/developers_guide_protocol.html#SharingACalendar">ACL specification</ulink>.
 */
export const LINK_ACCESS_CONTROL_LIST: string
/**
 * The relation type URI for alternate resources to the current one.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
export const LINK_ALTERNATE: string
/**
 * The relation type URI for the batch operation URI for a given #GDataFeed.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/docs/batch.html#Submit_HTTP">GData specification</ulink>.
 */
export const LINK_BATCH: string
/**
 * The relation type URI of the edit location for this resource.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/atom-protocol-spec.php#new-link-relation">
 * Atom Publishing Protocol specification</ulink>.
 */
export const LINK_EDIT: string
/**
 * The relation type URI of the edit location for media resources attached to this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://www.atomenabled.org/developers/protocol/atom-protocol-spec.php#new-media-link-relation">
 * Atom Publishing Protocol specification</ulink>.
 */
export const LINK_EDIT_MEDIA: string
/**
 * The relation type URI for attached objects which may be large in size.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
export const LINK_ENCLOSURE: string
/**
 * The relation type URI of the of the location of the parent resource in a
 * hierarchy of entries.
 * 
 * This is an undocumented GData-specific addition to the Atom specification,
 * and is not included in the GData documentation except in examples and in the
 * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/v2/schema/document_list_atom.rnc">
 * RelaxNG schema</ulink>.
 */
export const LINK_PARENT: string
/**
 * The relation type URI for resources related to the current one.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
export const LINK_RELATED: string
/**
 * The relation type URI of the resumable upload location for resources attached to this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html#ResumableUploadInitiate">GData resumable upload protocol
 * specification</ulink>.
 */
export const LINK_RESUMABLE_CREATE_MEDIA: string
/**
 * The relation type URI of the resumable update location for resources attached to this resource.
 * 
 * For more information, see the
 * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html#ResumableUploadInitiate">GData resumable upload protocol
 * specification</ulink>.
 */
export const LINK_RESUMABLE_EDIT_MEDIA: string
/**
 * The relation type URI for the current resource.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
export const LINK_SELF: string
/**
 * The relation type URI for the source document of the current resource.
 * 
 * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
 * Atom specification</ulink>.
 */
export const LINK_VIA: string
/**
 * Evaluates to the major version of the GData headers at compile time.
 * (e.g. in libgdata version 1.2.3 this is 1).
 */
export const MAJOR_VERSION: number
/**
 * Evaluates to the micro version of the GData headers at compile time.
 * (e.g. in libgdata version 1.2.3 this is 3).
 */
export const MICRO_VERSION: number
/**
 * Evaluates to the minor version of the GData headers at compile time.
 * (e.g. in libgdata version 1.2.3 this is 2).
 */
export const MINOR_VERSION: number
/**
 * OAuth 2 redirect URI for out-of-band authorisation code transfer, where the
 * user is shown the authorisation code and asked to copy it.
 * 
 * See
 * <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
 * documentation</ulink> for details.
 */
export const OAUTH2_REDIRECT_URI_OOB: string
/**
 * OAuth 2 redirect URI for out-of-band authorisation code transfer, where the
 * user is not shown the authorisation code or asked to copy it.
 * 
 * See
 * <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
 * documentation</ulink> for details.
 */
export const OAUTH2_REDIRECT_URI_OOB_AUTO: string
/**
 * There was an error while processing or thumbnailing the video and it should be deleted.
 */
export const PICASAWEB_VIDEO_STATUS_FAILED: string
/**
 * The video has been processed and thumbnailed.
 */
export const PICASAWEB_VIDEO_STATUS_FINAL: string
/**
 * The video is still being processed.
 */
export const PICASAWEB_VIDEO_STATUS_PENDING: string
/**
 * The video has been processed, but still needs thumbnailing.
 */
export const PICASAWEB_VIDEO_STATUS_READY: string
/**
 * A value for #GDataTasksTask:status indicating the task has been completed.
 * 
 * Reference:
 * <ulink type="http" url="https://developers.google.com/google-apps/tasks/v1/reference/tasks#status">
 * Google Tasks documentation</ulink>.
 */
export const TASKS_STATUS_COMPLETED: string
/**
 * A value for #GDataTasksTask:status indicating the task still needs action
 * before it is complete.
 * 
 * Reference:
 * <ulink type="http" url="https://developers.google.com/google-apps/tasks/v1/reference/tasks#status">
 * Google Tasks documentation</ulink>.
 */
export const TASKS_STATUS_NEEDS_ACTION: string
/**
 * An action to comment on a video, for use with gdata_youtube_video_set_access_control().
 */
export const YOUTUBE_ACTION_COMMENT: string
/**
 * An action to rate other users' comments on a video, for use with gdata_youtube_video_set_access_control().
 */
export const YOUTUBE_ACTION_COMMENT_VOTE: string
/**
 * An action to embed a video on third-party websites, for use with gdata_youtube_video_set_access_control().
 */
export const YOUTUBE_ACTION_EMBED: string
/**
 * An action to rate a video, for use with gdata_youtube_video_set_access_control().
 */
export const YOUTUBE_ACTION_RATE: string
/**
 * An action allowing YouTube to show the video on mobile phones and televisions, for use with gdata_youtube_video_set_access_control().
 */
export const YOUTUBE_ACTION_SYNDICATE: string
/**
 * An action to add a video response to a video, for use with gdata_youtube_video_set_access_control().
 */
export const YOUTUBE_ACTION_VIDEO_RESPOND: string
/**
 * The aspect ratio for widescreen (16:9) videos.
 * 
 * For more information, see the <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:aspectratio">
 * online documentation</ulink>.
 */
export const YOUTUBE_ASPECT_RATIO_WIDESCREEN: string
/**
 * Value for #GDataYouTubeQuery:license to restrict search results to only videos which are Creative Commons licensed. Specifically, the license
 * is the Creative Commons Attribution 3.0 Unported license; see the
 * <ulink type="http" url="http://www.google.com/support/youtube/bin/answer.py?hl=en&answer=1284989">YouTube Help</ulink> for more information.
 */
export const YOUTUBE_LICENSE_CC: string
/**
 * Value for #GDataYouTubeQuery:license to restrict search results to only videos which are under the standard YouTube license.
 */
export const YOUTUBE_LICENSE_STANDARD: string
/**
 * A rating type to pass to gdata_youtube_video_get_media_rating() for ratings by the <ulink type="http" url="http://www.mpaa.org/">MPAA</ulink>. The
 * values which can be returned for such ratings are: <code class="literal">g</code>, <code class="literal">pg</code>,
 * <code class="literal">pg-13</code>, <code class="literal">r</code> and <code class="literal">nc-17</code>.
 */
export const YOUTUBE_RATING_TYPE_MPAA: string
/**
 * A rating type to pass to gdata_youtube_video_get_media_rating() for ratings following the FCC
 * <ulink type="http" url="http://www.fcc.gov/vchip/">V-Chip</ulink> system. The values which can be returned for such ratings are:
 * <code class="literal">tv-y</code>, <code class="literal">tv-y7</code>, <code class="literal">tv-y7-fv</code>, <code class="literal">tv-g</code>,
 * <code class="literal">tv-pg</code>, <code class="literal">tv-14</code> and <code class="literal">tv-ma</code>.
 */
export const YOUTUBE_RATING_TYPE_V_CHIP: string
/**
 * Parses `hexadecimal` and returns a #GDataColor describing it in `color`.
 * 
 * `hexadecimal` should be in the form <literal>#<replaceable>rr</replaceable><replaceable>gg</replaceable><replaceable>bb</replaceable></literal>,
 * where <replaceable>rr</replaceable> is a two-digit hexadecimal red intensity value, <replaceable>gg</replaceable> is green
 * and <replaceable>bb</replaceable> is blue. The hash is optional.
 * @param hexadecimal a hexadecimal color string
 */
export function colorFromHexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
export function documentsServiceErrorQuark(): GLib.Quark
export function parserErrorQuark(): GLib.Quark
export function serviceErrorQuark(): GLib.Quark
export function youtubeServiceErrorQuark(): GLib.Quark
/**
 * Callback function called once for each operation in a batch operation run. The operation is identified by `operation_id` and `operation_type` (where
 * `operation_id` is the ID returned by the relevant call to gdata_batch_operation_add_query(), gdata_batch_operation_add_insertion(),
 * gdata_batch_operation_add_update() or gdata_batch_operation_add_deletion(), and `operation_type` shows which one of the above was called).
 * 
 * If the operation was successful, the resulting #GDataEntry will be passed in as `entry,` and `error` will be %NULL. Otherwise, `entry` will be %NULL
 * and a descriptive error will be in `error`. If `operation_type` is %GDATA_BATCH_OPERATION_DELETION, `entry` will always be %NULL, and `error` will be
 * %NULL or non-%NULL as appropriate.
 * 
 * If the callback code needs to retain a copy of `entry,` it must be referenced (with g_object_ref()). Similarly, `error` is owned by the calling code,
 * and must not be freed.
 * 
 * The callback is called in the main thread, and there is no guarantee on the order in which the callbacks for the operations in a run are executed,
 * or whether they will be called in a timely manner. It is, however, guaranteed that they will all be called before the #GAsyncReadyCallback which
 * signals the completion of the run (if initiated with gdata_batch_operation_run_async()) is called; or gdata_batch_operation_run() returns (if
 * initiated synchronously).
 * @callback 
 * @param operationId the operation ID returned from gdata_batch_operation_add_*()
 * @param operationType the type of operation which was requested
 * @param entry the result of the operation, or %NULL
 * @param error a #GError describing any error which occurred, or %NULL
 */
export interface BatchOperationCallback {
    (operationId: number, operationType: BatchOperationType, entry: Entry, error: GLib.Error): void
}
/**
 * Callback function called for each #GDataEntry parsed in a #GDataFeed when loading the results of a query.
 * 
 * It is called in the main thread, so there is no guarantee on the order in which the callbacks are executed,
 * or whether they will be called in a timely manner. It is, however, guaranteed that they will all be called before
 * the #GAsyncReadyCallback which signals the completion of the query is called.
 * @callback 
 * @param entry a new #GDataEntry
 * @param entryKey the key of the entry (zero-based index of its position in the feed)
 * @param entryCount the total number of entries in the feed
 */
export interface QueryProgressCallback {
    (entry: Entry, entryKey: number, entryCount: number): void
}
export module AccessHandler {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface AccessHandler extends Entry {

    // Conflicting properties

    parent: Parsable & GObject.Object & GObject.Object
    priv: any & ParsablePrivate

    // Owm methods of GData-0.0.GData.AccessHandler

    // Has conflict: getRules(service: Service, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Retrieves a #GDataFeed containing all the access rules which apply to the given #GDataAccessHandler. Only the owner of a #GDataAccessHandler may
     * view its rule feed. `self` and `service` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_access_handler_get_rules(), which is the synchronous version of this function, and gdata_service_query_async(), which
     * is the base asynchronous query function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param service a #GDataService
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when a rule is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    getRulesAsync(service: Service, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void

    // Own virtual methods of GData-0.0.GData.AccessHandler

    /**
     * Retrieves a #GDataFeed containing all the access rules which apply to the given #GDataAccessHandler. Only the owner of a #GDataAccessHandler may
     * view its rule feed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled, the error %G_IO_ERROR_CANCELLED will be returned.
     * 
     * A %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be returned if the server indicates there is a problem with the query.
     * 
     * For each rule in the response feed, `progress_callback` will be called in the main thread. If there was an error parsing the XML response,
     * a #GDataParserError will be returned.
     * @virtual 
     * @param service a #GDataService
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when a rule is loaded, or %NULL
     */
    getRules(service: Service, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed

    // Class property signals of GData-0.0.GData.AccessHandler

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataAccessHandler structure are private and should never be accessed directly.
 * @interface 
 */
export class AccessHandler extends GObject.Object {

    // Own properties of GData-0.0.GData.AccessHandler

    static name: string

    // Constructors of GData-0.0.GData.AccessHandler

    constructor(config?: AccessHandler.ConstructorProperties) 
    _init(config?: AccessHandler.ConstructorProperties): void
}

export module Authorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Authorizer {

    // Owm methods of GData-0.0.GData.Authorizer

    // Has conflict: isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    // Has conflict: processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    // Has conflict: refreshAuthorization(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: refreshAuthorizationAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean

    // Own virtual methods of GData-0.0.GData.Authorizer

    /**
     * Returns whether the #GDataAuthorizer instance believes it's currently authorized to access the given `domain`. Note that this will not perform any
     * network requests, and will just look up the result in the #GDataAuthorizer's local cache of authorizations. This means that the result may be out
     * of date, as the server may have since invalidated the authorization. If the #GDataAuthorizer class supports timeouts and TTLs on authorizations,
     * they will not be taken into account; this method effectively returns whether the last successful authorization operation performed on the
     * #GDataAuthorizer included `domain` in the list of requested authorization domains.
     * 
     * Note that %NULL may be passed as the #GDataAuthorizer, in which case %FALSE will always be returned, regardless of the `domain`. This is for
     * convenience of checking whether a domain is authorized by the #GDataAuthorizer returned by gdata_service_get_authorizer(), which may be %NULL.
     * For example:
     * |[
     * if (gdata_authorizer_is_authorized_for_domain (gdata_service_get_authorizer (my_service), my_domain) == TRUE) {
     * 	/<!-- -->* Code to execute only if we're authorized for the given domain *<!-- -->/
     * }
     * ```
     * 
     * 
     * This method is thread safe.
     * @virtual 
     * @param domain the #GDataAuthorizationDomain to check against
     */
    isAuthorizedForDomain(domain: AuthorizationDomain): boolean
    /**
     * Processes `message,` adding all the necessary extra headers and parameters to ensure that it's correctly authenticated and authorized under the
     * given `domain` for the online service. Basically, if a query is not processed by calling this method on it, it will be sent to the online service as
     * if it's a query from a non-logged-in user. Similarly, if the #GDataAuthorizer isn't authenticated or authorized (for `domain)`, no changes will
     * be made to the `message`.
     * 
     * `domain` may be %NULL if the request doesn't require authorization.
     * 
     * This modifies `message` in place.
     * 
     * This method is thread safe.
     * @virtual 
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param message the query to process
     */
    processRequest(domain: AuthorizationDomain | null, message: Soup.Message): void
    /**
     * Forces the #GDataAuthorizer to refresh any authorization tokens it holds with the online service. This should typically be called when a
     * #GDataService query returns %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED, and is already called transparently by methods such as
     * gdata_service_query() and gdata_service_insert_entry() (see their documentation for more details).
     * 
     * If re-authorization is successful, it's guaranteed that by the time this method returns, the properties containing the relevant authorization
     * tokens on the #GDataAuthorizer instance will have been updated.
     * 
     * If %FALSE is returned, `error` will be set if (and only if) it's due to a refresh being attempted and failing. If a refresh is not attempted, %FALSE
     * will be returned but `error` will not be set.
     * 
     * If the #GDataAuthorizer has not been previously authenticated or authorized (using the class' specific methods), no authorization will be
     * attempted, %FALSE will be returned immediately and `error` will not be set.
     * 
     * Some #GDataAuthorizer implementations may not support refreshing authorization tokens at all; for example if doing so requires user interaction.
     * %FALSE will be returned immediately in that case and `error` will not be set.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     */
    refreshAuthorization(cancellable: Gio.Cancellable | null): boolean
    /**
     * Forces the #GDataAuthorizer to refresh any authorization tokens it holds with the online service. `self` and `cancellable` are reffed when this
     * method is called, so can safely be freed after this method returns.
     * 
     * For more details, see gdata_authorizer_refresh_authorization(), which is the synchronous version of this method. If the #GDataAuthorizer class
     * doesn't implement #GDataAuthorizerInterface.refresh_authorization_async but does implement #GDataAuthorizerInterface.refresh_authorization, the
     * latter will be called from a new thread to make it asynchronous.
     * 
     * When the authorization refresh operation is finished, `callback` will be called. You can then call gdata_authorizer_refresh_authorization_finish()
     * to get the results of the operation.
     * 
     * This method is thread safe.
     * @virtual 
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the authorization refresh operation is finished, or %NULL
     */
    refreshAuthorizationAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous authorization refresh operation for the #GDataAuthorizer, as started with gdata_authorizer_refresh_authorization_async().
     * 
     * This method is thread safe.
     * @virtual 
     * @param asyncResult a #GAsyncResult
     */
    refreshAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean

    // Class property signals of GData-0.0.GData.Authorizer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataAuthorizer structure are private and should never be accessed directly.
 * @interface 
 */
export class Authorizer extends GObject.Object {

    // Own properties of GData-0.0.GData.Authorizer

    static name: string

    // Constructors of GData-0.0.GData.Authorizer

    constructor(config?: Authorizer.ConstructorProperties) 
    _init(config?: Authorizer.ConstructorProperties): void
}

export module Batchable {

    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Batchable extends Service {

    // Owm methods of GData-0.0.GData.Batchable

    /**
     * Creates a new #GDataBatchOperation for the given #GDataBatchable service, and with the given `feed_uri`. `feed_uri` is normally the %GDATA_LINK_BATCH
     * link URI in the appropriate #GDataFeed from the service. If authorization will be required to perform any of the requests in the batch operation,
     * `domain` must be non-%NULL, and must be an authorization domain which covers all of the requests. Otherwise, `domain` may be %NULL if authorization
     * is not required.
     * @param domain the #GDataAuthorizationDomain to authorize the operation, or %NULL
     * @param feedUri the URI to send the batch operation request to
     */
    createOperation(domain: AuthorizationDomain | null, feedUri: string): BatchOperation

    // Class property signals of GData-0.0.GData.Batchable

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataBatchable structure are private and should never be accessed directly.
 * @interface 
 */
export class Batchable extends GObject.Object {

    // Own properties of GData-0.0.GData.Batchable

    static name: string

    // Constructors of GData-0.0.GData.Batchable

    constructor(config?: Batchable.ConstructorProperties) 
    _init(config?: Batchable.ConstructorProperties): void
}

export module Commentable {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Commentable extends Entry {

    // Conflicting properties

    parent: Parsable & GObject.Object & GObject.Object
    priv: any & ParsablePrivate

    // Owm methods of GData-0.0.GData.Commentable

    /**
     * Deletes `comment` from the #GDataCommentable.
     * 
     * If the given `comment` isn't deletable (either because the service doesn't support deleting comments at all, or because this particular comment
     * is not deletable due to having insufficient permissions), %GDATA_SERVICE_ERROR_FORBIDDEN will be set in `error` and %FALSE will be returned.
     * @param service a #GDataService with which the comment will be deleted
     * @param comment a comment to be deleted
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteComment(service: Service, comment: Comment, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `comment` from the #GDataCommentable. `self,` `service` and `comment_` are all reffed when this method is called, so can safely be freed after
     * this method returns.
     * 
     * For more details, see gdata_commentable_delete_comment(), which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_commentable_delete_comment_finish() to get the results of the
     * operation.
     * @param service a #GDataService with which the comment will be deleted
     * @param comment a comment to be deleted
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished
     */
    deleteCommentAsync(service: Service, comment: Comment, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous comment deletion operation started with gdata_commentable_delete_comment_async().
     * @param result a #GAsyncResult
     */
    deleteCommentFinish(result: Gio.AsyncResult): boolean
    /**
     * Adds `comment` to the #GDataCommentable.
     * 
     * If the #GDataCommentable doesn't support commenting, %NULL will be returned and `error` will be set to %GDATA_SERVICE_ERROR_FORBIDDEN.
     * @param service a #GDataService with which the comment will be added
     * @param comment a new comment to be added to the #GDataCommentable
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insertComment(service: Service, comment: Comment, cancellable: Gio.Cancellable | null): Comment | null
    /**
     * Adds `comment` to the #GDataCommentable. `self,` `service` and `comment_` are all reffed when this method is called, so can safely be freed after this
     * method returns.
     * 
     * For more details, see gdata_commentable_insert_comment(), which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_commentable_insert_comment_finish() to get the results of the
     * operation.
     * @param service a #GDataService with which the comment will be added
     * @param comment a new comment to be added to the #GDataCommentable
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished
     */
    insertCommentAsync(service: Service, comment: Comment, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous comment insertion operation started with gdata_commentable_insert_comment_async().
     * @param result a #GAsyncResult
     */
    insertCommentFinish(result: Gio.AsyncResult): Comment | null
    /**
     * Retrieves a #GDataFeed containing the #GDataComments representing the comments on the #GDataCommentable which match the given `query`.
     * 
     * If the #GDataCommentable doesn't support commenting, %NULL will be returned and `error` will be set to %GDATA_SERVICE_ERROR_FORBIDDEN. This is in
     * contrast to if it does support commenting but hasn't had any comments added yet, in which case an empty #GDataFeed will be returned and no error
     * will be set.
     * @param service a #GDataService representing the service with which the object's comments will be manipulated
     * @param query a #GDataQuery with query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when a comment is loaded, or %NULL
     */
    queryComments(service: Service, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed | null
    /**
     * Retrieves a #GDataFeed containing the #GDataComments representing the comments on the #GDataCommentable which match the given `query`.
     * `self,` `service` and `query` are all reffed when this method is called, so can safely be freed after this method returns.
     * 
     * For more details, see gdata_commentable_query_comments(), which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_commentable_query_comments_finish() to get the results of the
     * operation.
     * @param service a #GDataService representing the service with which the object's comments will be manipulated
     * @param query a #GDataQuery with query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when a comment is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    queryCommentsAsync(service: Service, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous comment query operation started with gdata_commentable_query_comments_async().
     * @param result a #GAsyncResult
     */
    queryCommentsFinish(result: Gio.AsyncResult): Feed | null

    // Own virtual methods of GData-0.0.GData.Commentable

    getInsertCommentUri(comment: Comment): string
    getQueryCommentsUri(): string
    isCommentDeletable(comment: Comment): boolean

    // Class property signals of GData-0.0.GData.Commentable

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCommentable structure are private and should never be accessed directly
 * @interface 
 */
export class Commentable extends GObject.Object {

    // Own properties of GData-0.0.GData.Commentable

    static name: string

    // Constructors of GData-0.0.GData.Commentable

    constructor(config?: Commentable.ConstructorProperties) 
    _init(config?: Commentable.ConstructorProperties): void
}

export module Comparable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Comparable {

    // Owm methods of GData-0.0.GData.Comparable

    /**
     * Compares the two objects, returning <code class="literal">-1</code> if `self` is "less than" `other` by some metric, <code class="literal">0</code>
     * if they're equal, or <code class="literal">1</code> if `self` is "greater than" `other`.
     * 
     * %NULL values are handled gracefully, with <code class="literal">0</code> returned if both `self` and `other` are %NULL,
     * <code class="literal">-1</code> if `self` is %NULL and <code class="literal">1</code> if `other` is %NULL.
     * 
     * The `other` object must be of the same type as `self,` or of a type derived from `self'`s type.
     * @param other another #GDataComparable of the same type, or %NULL
     */
    compare(other: Comparable | null): number

    // Own virtual methods of GData-0.0.GData.Comparable

    compareWith(other: Comparable): number

    // Class property signals of GData-0.0.GData.Comparable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataComparable structure are private and should never be accessed directly.
 * @interface 
 */
export class Comparable extends GObject.Object {

    // Own properties of GData-0.0.GData.Comparable

    static name: string

    // Constructors of GData-0.0.GData.Comparable

    constructor(config?: Comparable.ConstructorProperties) 
    _init(config?: Comparable.ConstructorProperties): void
}

export module APPCategories {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {
    }

}

export interface APPCategories {

    // Own properties of GData-0.0.GData.APPCategories

    /**
     * Whether entries may use categories not in this category list.
     * 
     * API reference: <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appCategories2">app:categories</ulink>
     */
    readonly isFixed: boolean

    // Owm methods of GData-0.0.GData.APPCategories

    /**
     * Returns a list of the categories in this category list.
     */
    getCategories(): Category[]

    // Class property signals of GData-0.0.GData.APPCategories

    connect(sigName: "notify::is-fixed", callback: any): number
    on(sigName: "notify::is-fixed", callback: any): number
    once(sigName: "notify::is-fixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-fixed", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataAPPCategories structure are private and should never be accessed directly.
 * @class 
 */
export class APPCategories extends Parsable {

    // Own properties of GData-0.0.GData.APPCategories

    static name: string

    // Constructors of GData-0.0.GData.APPCategories

    constructor(config?: APPCategories.ConstructorProperties) 
    _init(config?: APPCategories.ConstructorProperties): void
}

export module AccessRule {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.AccessRule

        /**
         * The role of the person concerned by this ACL. By default, this can only be %GDATA_ACCESS_ROLE_NONE. Services may extend it with
         * their own namespaced roles.
         */
        role?: string | null
        /**
         * Specifies to whom this access rule applies. For example, %GDATA_ACCESS_SCOPE_USER or %GDATA_ACCESS_SCOPE_DEFAULT.
         */
        scopeType?: string | null
        /**
         * A value representing the user who is represented by the access rule, such as an
         * e-mail address for users, or a domain name for domains.
         * 
         * This must be %NULL if and only if #GDataAccessRule:scope-type is %GDATA_ACCESS_SCOPE_DEFAULT.
         */
        scopeValue?: string | null
    }

}

export interface AccessRule {

    // Own properties of GData-0.0.GData.AccessRule

    /**
     * The last time the access rule was edited. If the rule has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    /**
     * An optional authorisation key required to access this item with the given scope. If set, this restricts
     * access to those principals who have a copy of the key. The key is generated server-side and cannot be
     * modified by the client. If no authorisation key is set (and hence none is needed for access to the item),
     * this will be %NULL.
     */
    readonly key: string
    /**
     * The role of the person concerned by this ACL. By default, this can only be %GDATA_ACCESS_ROLE_NONE. Services may extend it with
     * their own namespaced roles.
     */
    role: string
    /**
     * Specifies to whom this access rule applies. For example, %GDATA_ACCESS_SCOPE_USER or %GDATA_ACCESS_SCOPE_DEFAULT.
     */
    scopeType: string
    /**
     * A value representing the user who is represented by the access rule, such as an
     * e-mail address for users, or a domain name for domains.
     * 
     * This must be %NULL if and only if #GDataAccessRule:scope-type is %GDATA_ACCESS_SCOPE_DEFAULT.
     */
    scopeValue: string

    // Own fields of GData-0.0.GData.AccessRule

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.AccessRule

    /**
     * Gets the #GDataAccessRule:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getEdited(): number
    /**
     * Gets the #GDataAccessRule:key property.
     */
    getKey(): string
    /**
     * Gets the #GDataAccessRule:role property.
     */
    getRole(): string
    /**
     * Gets the #GDataAccessRule:scope-type and #GDataAccessRule:scope-value properties.
     */
    getScope(): [ /* type */ string, /* value */ string ]
    /**
     * Sets the #GDataAccessRule:role property to `role`. `role` must be a non-empty string, such as %GDATA_ACCESS_ROLE_NONE.
     * 
     * Set `role` to %NULL to unset the property in the access rule.
     * @param role a new role, or %NULL
     */
    setRole(role: string): void
    /**
     * Sets the #GDataAccessRule:scope-type property to `type` and the #GDataAccessRule:scope-value property to `value`.
     * 
     * Set `scope_value` to %NULL to unset the #GDataAccessRule:scope-value property in the access rule. `type` cannot
     * be %NULL. `scope_value` must be %NULL if `type` is <literal>default</literal>, and non-%NULL otherwise.
     * 
     * See the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/acl">online
     * documentation</ulink> for more information.
     * @param type a new scope type
     * @param value a new scope value, or %NULL
     */
    setScope(type: string, value: string | null): void

    // Class property signals of GData-0.0.GData.AccessRule

    connect(sigName: "notify::edited", callback: any): number
    on(sigName: "notify::edited", callback: any): number
    once(sigName: "notify::edited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::key", callback: any): number
    on(sigName: "notify::key", callback: any): number
    once(sigName: "notify::key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scope-type", callback: any): number
    on(sigName: "notify::scope-type", callback: any): number
    once(sigName: "notify::scope-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope-type", ...args: any[]): void
    connect(sigName: "notify::scope-value", callback: any): number
    on(sigName: "notify::scope-value", callback: any): number
    once(sigName: "notify::scope-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope-value", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataAccessRule structure are private and should never be accessed directly.
 * @class 
 */
export class AccessRule extends Entry {

    // Own properties of GData-0.0.GData.AccessRule

    static name: string

    // Constructors of GData-0.0.GData.AccessRule

    constructor(config?: AccessRule.ConstructorProperties) 
    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): AccessRule

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: AccessRule.ConstructorProperties): void
}

export module Author {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Author

        /**
         * An e-mail address associated with the person.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
         */
        emailAddress?: string | null
        /**
         * A human-readable name for the person.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
         */
        name?: string | null
        /**
         * An IRI associated with the person.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
         */
        uri?: string | null
    }

}

export interface Author extends Comparable {

    // Own properties of GData-0.0.GData.Author

    /**
     * An e-mail address associated with the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    emailAddress: string
    /**
     * A human-readable name for the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    name: string
    /**
     * An IRI associated with the person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.Author

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.Author

    /**
     * Gets the #GDataAuthor:email-address property. If the e-mail address is non-%NULL, it will be non-empty.
     */
    getEmailAddress(): string
    /**
     * Gets the #GDataAuthor:name property. The name will always be a non-%NULL, non-empty string.
     */
    getName(): string
    /**
     * Gets the #GDataAuthor:uri property. If the URI is non-%NULL, it will be non-empty.
     */
    getUri(): string
    /**
     * Sets the #GDataAuthor:email-address property to `email_address`. `email_address` must be %NULL or non-empty.
     * 
     * Set `email_address` to %NULL to unset the property in the author.
     * @param emailAddress the new e-mail address for the author, or %NULL
     */
    setEmailAddress(emailAddress: string | null): void
    /**
     * Sets the #GDataAuthor:name property to `name`. `name` must be non-%NULL and non-empty.
     * @param name the new name for the author
     */
    setName(name: string): void
    /**
     * Sets the #GDataAuthor:uri property to `uri`. `uri` must be %NULL or non-empty.
     * 
     * Set `uri` to %NULL to unset the property in the author.
     * @param uri the new URI for the author, or %NULL
     */
    setUri(uri: string | null): void

    // Class property signals of GData-0.0.GData.Author

    connect(sigName: "notify::email-address", callback: any): number
    on(sigName: "notify::email-address", callback: any): number
    once(sigName: "notify::email-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataAuthor structure are private and should never be accessed directly.
 * @class 
 */
export class Author extends Parsable {

    // Own properties of GData-0.0.GData.Author

    static name: string

    // Constructors of GData-0.0.GData.Author

    constructor(config?: Author.ConstructorProperties) 
    /**
     * Creates a new #GDataAuthor. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     * 
     * `name` must be non-%NULL and non-empty.
     * @constructor 
     * @param name the author's name
     * @param uri an IRI describing the author, or %NULL
     * @param emailAddress the author's e-mail address, or %NULL
     */
    constructor(name: string, uri: string | null, emailAddress: string | null) 
    /**
     * Creates a new #GDataAuthor. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.author">Atom specification</ulink>.
     * 
     * `name` must be non-%NULL and non-empty.
     * @constructor 
     * @param name the author's name
     * @param uri an IRI describing the author, or %NULL
     * @param emailAddress the author's e-mail address, or %NULL
     */
    static new(name: string, uri: string | null, emailAddress: string | null): Author
    _init(config?: Author.ConstructorProperties): void
}

export module AuthorizationDomain {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.AuthorizationDomain

        /**
         * A URI detailing the scope of the authorization domain, as enumerated in the
         * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#AuthScopes">online documentation</ulink>.
         */
        scope?: string | null
        /**
         * The name of the service which contains the authorization domain, as enumerated in the
         * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin">online documentation</ulink>.
         */
        serviceName?: string | null
    }

}

export interface AuthorizationDomain {

    // Own properties of GData-0.0.GData.AuthorizationDomain

    /**
     * A URI detailing the scope of the authorization domain, as enumerated in the
     * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#AuthScopes">online documentation</ulink>.
     */
    readonly scope: string
    /**
     * The name of the service which contains the authorization domain, as enumerated in the
     * <ulink type="http" url="http://code.google.com/apis/documents/faq_gdata.html#clientlogin">online documentation</ulink>.
     */
    readonly serviceName: string

    // Owm methods of GData-0.0.GData.AuthorizationDomain

    /**
     * Returns a URI detailing the scope of the authorization domain. See #GDataAuthorizationDomain:scope for more details.
     */
    getScope(): string
    /**
     * Returns the name of the service containing the authorization domain. See #GDataAuthorizationDomain:service-name for more details.
     */
    getServiceName(): string

    // Class property signals of GData-0.0.GData.AuthorizationDomain

    connect(sigName: "notify::scope", callback: any): number
    on(sigName: "notify::scope", callback: any): number
    once(sigName: "notify::scope", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::service-name", callback: any): number
    on(sigName: "notify::service-name", callback: any): number
    once(sigName: "notify::service-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataAuthorizationDomain structure are private and should never be accessed directly.
 * @class 
 */
export class AuthorizationDomain extends GObject.Object {

    // Own properties of GData-0.0.GData.AuthorizationDomain

    static name: string

    // Constructors of GData-0.0.GData.AuthorizationDomain

    constructor(config?: AuthorizationDomain.ConstructorProperties) 
    _init(config?: AuthorizationDomain.ConstructorProperties): void
}

export module BatchOperation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.BatchOperation

        /**
         * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be
         * authorized. This may be %NULL if authorization is not needed for any of the requests in the batch operation.
         * 
         * All requests in the batch operation must be authorizable under this single authorization domain. If requests need different authorization
         * domains, they must be performed in different batch operations.
         */
        authorizationDomain?: AuthorizationDomain | null
        /**
         * The feed URI that this batch operation will be sent to.
         */
        feedUri?: string | null
        /**
         * The service this batch operation is attached to.
         */
        service?: Service | null
    }

}

export interface BatchOperation {

    // Own properties of GData-0.0.GData.BatchOperation

    /**
     * The authorization domain for the batch operation, against which the #GDataService:authorizer for the #GDataBatchOperation:service should be
     * authorized. This may be %NULL if authorization is not needed for any of the requests in the batch operation.
     * 
     * All requests in the batch operation must be authorizable under this single authorization domain. If requests need different authorization
     * domains, they must be performed in different batch operations.
     */
    readonly authorizationDomain: AuthorizationDomain
    /**
     * The feed URI that this batch operation will be sent to.
     */
    readonly feedUri: string
    /**
     * The service this batch operation is attached to.
     */
    readonly service: Service

    // Own fields of GData-0.0.GData.BatchOperation

    parent: GObject.Object
    priv: BatchOperationPrivate

    // Owm methods of GData-0.0.GData.BatchOperation

    /**
     * Add an entry to the #GDataBatchOperation, to be deleted on the server when the operation is run. `entry` is reffed by the function, so may be freed
     * after it returns.
     * 
     * Note that a single batch operation should not operate on a given #GDataEntry more than once, as there's no guarantee about the order in which the
     * batch operation's operations will be performed.
     * 
     * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
     * %GDATA_BATCH_OPERATION_DELETION.
     * @param entry the #GDataEntry to delete
     * @param callback a #GDataBatchOperationCallback to call when the deletion is finished, or %NULL
     */
    addDeletion(entry: Entry, callback: BatchOperationCallback): number
    /**
     * Add an entry to the #GDataBatchOperation, to be inserted on the server when the operation is run. The insertion will return the inserted version
     * of `entry`. `entry` is reffed by the function, so may be freed after it returns.
     * 
     * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
     * %GDATA_BATCH_OPERATION_INSERTION.
     * @param entry the #GDataEntry to insert
     * @param callback a #GDataBatchOperationCallback to call when the insertion is finished, or %NULL
     */
    addInsertion(entry: Entry, callback: BatchOperationCallback): number
    /**
     * Add a query to the #GDataBatchOperation, to be executed when the operation is run. The query will return a #GDataEntry (of subclass type
     * `entry_type)` representing the given entry `id`. The ID is of the same format as that returned by gdata_entry_get_id().
     * 
     * Note that a single batch operation should not operate on a given #GDataEntry more than once, as there's no guarantee about the order in which the
     * batch operation's operations will be performed.
     * 
     * `callback` will be called when the #GDataBatchOperation is run with gdata_batch_operation_run() (in which case it will be called in the thread which
     * ran the batch operation), or with gdata_batch_operation_run_async() (in which case it will be called in an idle handler in the main thread). The
     * `operation_id` passed to the callback will match the return value of gdata_batch_operation_add_query(), and the `operation_type` will be
     * %GDATA_BATCH_OPERATION_QUERY. If the query was successful, the resulting entry will be passed to the callback function as `entry,` and `error` will
     * be %NULL. If, however, the query was unsuccessful, `entry` will be %NULL and `error` will contain a #GError detailing what went wrong.
     * @param id the ID of the entry being queried for
     * @param entryType the type of the entry which will be returned
     * @param callback a #GDataBatchOperationCallback to call when the query is finished, or %NULL
     */
    addQuery(id: string, entryType: GObject.GType, callback: BatchOperationCallback): number
    /**
     * Add an entry to the #GDataBatchOperation, to be updated on the server when the operation is run. The update will return the updated version of
     * `entry`. `entry` is reffed by the function, so may be freed after it returns.
     * 
     * Note that a single batch operation should not operate on a given #GDataEntry more than once, as there's no guarantee about the order in which the
     * batch operation's operations will be performed.
     * 
     * `callback` will be called as specified in the documentation for gdata_batch_operation_add_query(), with an `operation_type` of
     * %GDATA_BATCH_OPERATION_UPDATE.
     * @param entry the #GDataEntry to update
     * @param callback a #GDataBatchOperationCallback to call when the update is finished, or %NULL
     */
    addUpdate(entry: Entry, callback: BatchOperationCallback): number
    /**
     * Gets the #GDataBatchOperation:authorization-domain property.
     */
    getAuthorizationDomain(): AuthorizationDomain | null
    /**
     * Gets the #GDataBatchOperation:feed-uri property.
     */
    getFeedUri(): string
    /**
     * Gets the #GDataBatchOperation:service property.
     */
    getService(): Service
    /**
     * Run the #GDataBatchOperation synchronously. This will send all the operations in the batch operation to the server, and call their respective
     * callbacks synchronously (i.e. before gdata_batch_operation_run() returns, and in the same thread that called gdata_batch_operation_run()) as the
     * server returns results for each operation.
     * 
     * The callbacks for all of the operations in the batch operation are always guaranteed to be called, even if the batch operation as a whole fails.
     * Each callback will be called exactly once for each time gdata_batch_operation_run() is called.
     * 
     * The return value of the function indicates whether the overall batch operation was successful, and doesn't indicate the status of any of the
     * operations it comprises. gdata_batch_operation_run() could return %TRUE even if all of its operations failed.
     * 
     * `cancellable` can be used to cancel the entire batch operation any time before or during the network activity. If `cancellable` is cancelled
     * after network activity has finished, gdata_batch_operation_run() will continue and finish as normal.
     * @param cancellable a #GCancellable, or %NULL
     */
    run(cancellable: Gio.Cancellable | null): boolean
    /**
     * Run the #GDataBatchOperation asynchronously. This will send all the operations in the batch operation to the server, and call their respective
     * callbacks asynchronously (i.e. in idle functions in the main thread, usually after gdata_batch_operation_run_async() has returned) as the
     * server returns results for each operation. `self` is reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_batch_operation_run(), which is the synchronous version of this function.
     * 
     * When the entire batch operation is finished, `callback` will be called. You can then call gdata_batch_operation_run_finish() to get the results of
     * the batch operation.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the batch operation is finished, or %NULL
     */
    runAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous batch operation run with gdata_batch_operation_run_async().
     * 
     * Return values are as for gdata_batch_operation_run().
     * @param asyncResult a #GAsyncResult
     */
    runFinish(asyncResult: Gio.AsyncResult): boolean

    // Class property signals of GData-0.0.GData.BatchOperation

    connect(sigName: "notify::authorization-domain", callback: any): number
    on(sigName: "notify::authorization-domain", callback: any): number
    once(sigName: "notify::authorization-domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorization-domain", ...args: any[]): void
    connect(sigName: "notify::feed-uri", callback: any): number
    on(sigName: "notify::feed-uri", callback: any): number
    once(sigName: "notify::feed-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::feed-uri", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataBatchOperation structure are private and should never be accessed directly.
 * @class 
 */
export class BatchOperation extends GObject.Object {

    // Own properties of GData-0.0.GData.BatchOperation

    static name: string

    // Constructors of GData-0.0.GData.BatchOperation

    constructor(config?: BatchOperation.ConstructorProperties) 
    _init(config?: BatchOperation.ConstructorProperties): void
}

export module CalendarAccessRule {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessRule.ConstructorProperties {
    }

}

export interface CalendarAccessRule {

    // Conflicting properties

    priv: any & ParsablePrivate

    // Own fields of GData-0.0.GData.CalendarAccessRule

    parent: AccessRule & Entry & Parsable & GObject.Object & GObject.Object

    // Class property signals of GData-0.0.GData.CalendarAccessRule

    connect(sigName: "notify::edited", callback: any): number
    on(sigName: "notify::edited", callback: any): number
    once(sigName: "notify::edited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::key", callback: any): number
    on(sigName: "notify::key", callback: any): number
    once(sigName: "notify::key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scope-type", callback: any): number
    on(sigName: "notify::scope-type", callback: any): number
    once(sigName: "notify::scope-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope-type", ...args: any[]): void
    connect(sigName: "notify::scope-value", callback: any): number
    on(sigName: "notify::scope-value", callback: any): number
    once(sigName: "notify::scope-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope-value", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCalendarAccessRule structure are private and
 * should never be accessed directly.
 * @class 
 */
export class CalendarAccessRule extends AccessRule {

    // Own properties of GData-0.0.GData.CalendarAccessRule

    static name: string

    // Constructors of GData-0.0.GData.CalendarAccessRule

    constructor(config?: CalendarAccessRule.ConstructorProperties) 
    /**
     * Creates a new #GDataCalendarAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataCalendarAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): CalendarAccessRule

    // Overloads of new

    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): AccessRule
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: CalendarAccessRule.ConstructorProperties): void
}

export module CalendarCalendar {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.CalendarCalendar

        /**
         * The background color used to highlight the calendar in the user’s
         * browser. This used to be restricted to a limited set of colours, but
         * since 0.17.2 may be any RGB colour.
         */
        color?: Color | null
        /**
         * Indicates whether the calendar is visible.
         */
        isHidden?: boolean | null
        /**
         * Indicates whether the calendar is selected.
         */
        isSelected?: boolean | null
        /**
         * The timezone in which the calendar's times are given. This is a timezone name in tz database notation: <ulink type="http"
         * url="http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones">reference</ulink>.
         */
        timezone?: string | null
    }

}

export interface CalendarCalendar extends AccessHandler {

    // Own properties of GData-0.0.GData.CalendarCalendar

    /**
     * Indicates the access level the current user has to the calendar. For example: %GDATA_CALENDAR_ACCESS_ROLE_READ or
     * %GDATA_CALENDAR_ACCESS_ROLE_FREE_BUSY. The "current user" is the one authenticated against the service's #GDataService:authorizer,
     * or the guest user.
     */
    readonly accessLevel: string
    /**
     * The background color used to highlight the calendar in the user’s
     * browser. This used to be restricted to a limited set of colours, but
     * since 0.17.2 may be any RGB colour.
     */
    color: Color
    /**
     * Indicates whether the calendar is visible.
     */
    isHidden: boolean
    /**
     * Indicates whether the calendar is selected.
     */
    isSelected: boolean
    /**
     * The timezone in which the calendar's times are given. This is a timezone name in tz database notation: <ulink type="http"
     * url="http://en.wikipedia.org/wiki/Tz_database#Names_of_time_zones">reference</ulink>.
     */
    timezone: string

    // Own fields of GData-0.0.GData.CalendarCalendar

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.CalendarCalendar

    /**
     * Gets the #GDataCalendarCalendar:access-level property.
     */
    getAccessLevel(): string
    /**
     * Gets the #GDataCalendarCalendar:color property and puts it in `color`.
     */
    getColor(): /* color */ Color
    /**
     * Gets the #GDataCalendarCalendar:timezone property.
     */
    getTimezone(): string
    /**
     * Sets the #GDataCalendarCalendar:color property to `color`.
     * @param color a new #GDataColor
     */
    setColor(color: Color): void
    /**
     * Sets the #GDataCalendarCalendar:is-hidden property to `is_hidden`.
     * @param isHidden %TRUE to hide the calendar, %FALSE otherwise
     */
    setIsHidden(isHidden: boolean): void
    /**
     * Sets the #GDataCalendarCalendar:is-selected property to `is_selected`.
     * @param isSelected %TRUE to select the calendar, %FALSE otherwise
     */
    setIsSelected(isSelected: boolean): void
    /**
     * Sets the #GDataCalendarCalendar:timezone property to the new timezone, `_timezone`.
     * 
     * Set `_timezone` to %NULL to unset the property in the calendar.
     * @param timezone a new timezone, or %NULL
     */
    setTimezone(timezone: string | null): void

    // Class property signals of GData-0.0.GData.CalendarCalendar

    connect(sigName: "notify::access-level", callback: any): number
    on(sigName: "notify::access-level", callback: any): number
    once(sigName: "notify::access-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::access-level", ...args: any[]): void
    connect(sigName: "notify::color", callback: any): number
    on(sigName: "notify::color", callback: any): number
    once(sigName: "notify::color", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::color", ...args: any[]): void
    connect(sigName: "notify::is-hidden", callback: any): number
    on(sigName: "notify::is-hidden", callback: any): number
    once(sigName: "notify::is-hidden", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-hidden", ...args: any[]): void
    connect(sigName: "notify::is-selected", callback: any): number
    on(sigName: "notify::is-selected", callback: any): number
    once(sigName: "notify::is-selected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-selected", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: any): number
    on(sigName: "notify::timezone", callback: any): number
    once(sigName: "notify::timezone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCalendarCalendar structure are private and should never be accessed directly.
 * @class 
 */
export class CalendarCalendar extends Entry {

    // Own properties of GData-0.0.GData.CalendarCalendar

    static name: string

    // Constructors of GData-0.0.GData.CalendarCalendar

    constructor(config?: CalendarCalendar.ConstructorProperties) 
    /**
     * Creates a new #GDataCalendarCalendar with the given ID and default properties.
     * @constructor 
     * @param id the calendar's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataCalendarCalendar with the given ID and default properties.
     * @constructor 
     * @param id the calendar's ID, or %NULL
     */
    static new(id: string | null): CalendarCalendar

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: CalendarCalendar.ConstructorProperties): void
}

export module CalendarEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.CalendarEvent

        /**
         * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
         */
        anyoneCanAddSelf?: boolean | null
        /**
         * Indicates whether attendees may invite others to the event.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">GData specification</ulink>.
         */
        guestsCanInviteOthers?: boolean | null
        /**
         * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
         * Otherwise, any changes made by attendees will be restricted to that attendee's calendar.
         * 
         * For more information, see the
         * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">
         * GData specification</ulink>.
         */
        guestsCanModify?: boolean | null
        /**
         * Indicates whether attendees can see other people invited to the event.
         * 
         * For more information, see the
         * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanSeeOtherGuests">
         * GData specification</ulink>.
         */
        guestsCanSeeGuests?: boolean | null
        /**
         * Represents the dates and times when a recurring event takes place. The returned string is in iCal format, as a list of properties.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdRecurrence">
         * GData specification</ulink>.
         * 
         * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
         * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
         */
        recurrence?: string | null
        /**
         * The revision sequence number of the event as defined in Section 4.8.7.4 of <ulink type="http"
         * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
         */
        sequence?: number | null
        /**
         * The scheduling status of the event. For example: %GDATA_GD_EVENT_STATUS_CANCELED or %GDATA_GD_EVENT_STATUS_CONFIRMED.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdEventStatus">
         * GData specification</ulink>.
         */
        status?: string | null
        /**
         * How the event is marked as consuming time on a calendar. For example: %GDATA_GD_EVENT_TRANSPARENCY_OPAQUE or
         * %GDATA_GD_EVENT_TRANSPARENCY_TRANSPARENT.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdTransparency">
         * GData specification</ulink>.
         */
        transparency?: string | null
        /**
         * The globally unique identifier (UID) of the event as defined in Section 4.8.4.7 of <ulink type="http"
         * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
         */
        uid?: string | null
        /**
         * The event's visibility to calendar users. For example: %GDATA_GD_EVENT_VISIBILITY_PUBLIC or %GDATA_GD_EVENT_VISIBILITY_DEFAULT.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdVisibility">
         * GData specification</ulink>.
         */
        visibility?: string | null
    }

}

export interface CalendarEvent {

    // Own properties of GData-0.0.GData.CalendarEvent

    /**
     * Indicates whether anyone can invite themselves to the event, by adding themselves to the attendee list.
     */
    anyoneCanAddSelf: boolean
    /**
     * The last time the event was edited. If the event has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    /**
     * Indicates whether attendees may invite others to the event.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">GData specification</ulink>.
     */
    guestsCanInviteOthers: boolean
    /**
     * Indicates whether attendees may modify the original event, so that changes are visible to organizers and other attendees.
     * Otherwise, any changes made by attendees will be restricted to that attendee's calendar.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanInviteOthers">
     * GData specification</ulink>.
     */
    guestsCanModify: boolean
    /**
     * Indicates whether attendees can see other people invited to the event.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/calendar/v3/reference/events#guestsCanSeeOtherGuests">
     * GData specification</ulink>.
     */
    guestsCanSeeGuests: boolean
    /**
     * The event ID for the original event, if this event is an exception to a recurring event.
     */
    readonly originalEventId: string
    /**
     * The event URI for the original event, if this event is an exception to a recurring event.
     */
    readonly originalEventUri: string
    /**
     * Represents the dates and times when a recurring event takes place. The returned string is in iCal format, as a list of properties.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdRecurrence">
     * GData specification</ulink>.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
     */
    recurrence: string
    /**
     * The revision sequence number of the event as defined in Section 4.8.7.4 of <ulink type="http"
     * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     */
    sequence: number
    /**
     * The scheduling status of the event. For example: %GDATA_GD_EVENT_STATUS_CANCELED or %GDATA_GD_EVENT_STATUS_CONFIRMED.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdEventStatus">
     * GData specification</ulink>.
     */
    status: string
    /**
     * How the event is marked as consuming time on a calendar. For example: %GDATA_GD_EVENT_TRANSPARENCY_OPAQUE or
     * %GDATA_GD_EVENT_TRANSPARENCY_TRANSPARENT.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdTransparency">
     * GData specification</ulink>.
     */
    transparency: string
    /**
     * The globally unique identifier (UID) of the event as defined in Section 4.8.4.7 of <ulink type="http"
     * url="http://www.ietf.org/rfc/rfc2445.txt">RFC 2445</ulink>.
     */
    uid: string
    /**
     * The event's visibility to calendar users. For example: %GDATA_GD_EVENT_VISIBILITY_PUBLIC or %GDATA_GD_EVENT_VISIBILITY_DEFAULT.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/elements.html#gdVisibility">
     * GData specification</ulink>.
     */
    visibility: string

    // Own fields of GData-0.0.GData.CalendarEvent

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.CalendarEvent

    /**
     * Adds the person `who` to the event as a guest (attendee, organiser, performer, etc.), and increments its reference count.
     * 
     * Duplicate people will not be added to the list.
     * @param who a #GDataGDWho to add
     */
    addPerson(who: GDWho): void
    /**
     * Adds the place `where` to the event as a location and increments its reference count.
     * 
     * Duplicate places will not be added to the list.
     * @param where a #GDataGDWhere to add
     */
    addPlace(where: GDWhere): void
    /**
     * Adds `when` to the event as a time period when the event happens, and increments its reference count.
     * 
     * Duplicate times will not be added to the list.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive, as the server doesn't support positive exceptions to recurrence rules. If recurrences
     * are required, use gdata_calendar_event_set_recurrence(). Note that this means reminders cannot
     * be set for the event, as they are only supported by #GDataGDWhen. No checks are performed for
     * these forbidden conditions, as to do so would break libgdata's API; if both a recurrence is set
     * and a specific time is added, the server will return an error when the #GDataCalendarEvent is
     * inserted using gdata_service_insert_entry().
     * @param when a #GDataGDWhen to add
     */
    addTime(when: GDWhen): void
    /**
     * Gets the #GDataCalendarEvent:anyone-can-add-self property.
     */
    getAnyoneCanAddSelf(): boolean
    /**
     * Gets the #GDataCalendarEvent:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getEdited(): number
    /**
     * Gets the #GDataCalendarEvent:guests-can-invite-others property.
     */
    getGuestsCanInviteOthers(): boolean
    /**
     * Gets the #GDataCalendarEvent:guests-can-modify property.
     */
    getGuestsCanModify(): boolean
    /**
     * Gets the #GDataCalendarEvent:guests-can-see-guests property.
     */
    getGuestsCanSeeGuests(): boolean
    /**
     * Gets details of the original event, if this event is an exception to a recurring event. The original
     * event's ID and the URI of the event's XML are returned in `event_id` and `event_uri,` respectively.
     * 
     * If this event is not an exception to a recurring event, `event_id` and `event_uri` will be set to %NULL.
     * See gdata_calendar_event_is_exception() to determine more simply whether an event is an exception to a
     * recurring event.
     * 
     * If both `event_id` and `event_uri` are %NULL, this function is a no-op. Otherwise, they should both be
     * freed with g_free().
     */
    getOriginalEventDetails(): [ /* eventId */ string, /* eventUri */ string ]
    /**
     * Gets a list of the people attending the event.
     */
    getPeople(): GDWho[]
    /**
     * Gets a list of the locations associated with the event.
     */
    getPlaces(): GDWhere[]
    /**
     * Gets the first time period associated with the event, conveniently returning just its start and
     * end times if required.
     * 
     * If there are no time periods, or more than one time period, associated with the event, %FALSE will
     * be returned, and the parameters will remain unmodified.
     */
    getPrimaryTime(): [ /* returnType */ boolean, /* startTime */ number, /* endTime */ number, /* when */ GDWhen ]
    /**
     * Gets the #GDataCalendarEvent:recurrence property.
     */
    getRecurrence(): string
    /**
     * Gets the #GDataCalendarEvent:sequence property.
     */
    getSequence(): number
    /**
     * Gets the #GDataCalendarEvent:status property.
     */
    getStatus(): string
    /**
     * Gets a list of the time periods associated with the event.
     */
    getTimes(): GDWhen[]
    /**
     * Gets the #GDataCalendarEvent:transparency property.
     */
    getTransparency(): string
    /**
     * Gets the #GDataCalendarEvent:uid property.
     */
    getUid(): string
    /**
     * Gets the #GDataCalendarEvent:visibility property.
     */
    getVisibility(): string
    /**
     * Determines whether the event is an exception to a recurring event. If it is, details of the original event
     * can be retrieved using gdata_calendar_event_get_original_event_details().
     */
    isException(): boolean
    /**
     * Sets the #GDataCalendarEvent:anyone-can-add-self property to `anyone_can_add_self`.
     * @param anyoneCanAddSelf %TRUE if anyone can add themselves as an attendee to the event, %FALSE otherwise
     */
    setAnyoneCanAddSelf(anyoneCanAddSelf: boolean): void
    /**
     * Sets the #GDataCalendarEvent:guests-can-invite-others property to `guests_can_invite_others`.
     * @param guestsCanInviteOthers %TRUE if attendees can invite others to the event, %FALSE otherwise
     */
    setGuestsCanInviteOthers(guestsCanInviteOthers: boolean): void
    /**
     * Sets the #GDataCalendarEvent:guests-can-modify property to `guests_can_modify`.
     * @param guestsCanModify %TRUE if attendees can modify the original event, %FALSE otherwise
     */
    setGuestsCanModify(guestsCanModify: boolean): void
    /**
     * Sets the #GDataCalendarEvent:guests-can-see-guests property to `guests_can_see_guests`.
     * @param guestsCanSeeGuests %TRUE if attendees can see who's attending the event, %FALSE otherwise
     */
    setGuestsCanSeeGuests(guestsCanSeeGuests: boolean): void
    /**
     * Sets the #GDataCalendarEvent:recurrence property to the new recurrence, `recurrence`.
     * 
     * Set `recurrence` to %NULL to unset the property in the event.
     * 
     * Note: gdata_calendar_event_add_time() and gdata_calendar_event_set_recurrence() are mutually
     * exclusive. See the documentation for gdata_calendar_event_add_time() for details.
     * @param recurrence a new event recurrence, or %NULL
     */
    setRecurrence(recurrence: string | null): void
    /**
     * Sets the #GDataCalendarEvent:sequence property to the new sequence number, `sequence`.
     * @param sequence a new sequence number, or <code class="literal">0</code>
     */
    setSequence(sequence: number): void
    /**
     * Sets the #GDataCalendarEvent:status property to the new status, `status`.
     * 
     * Set `status` to %NULL to unset the property in the event.
     * @param status a new event status, or %NULL
     */
    setStatus(status: string | null): void
    /**
     * Sets the #GDataCalendarEvent:transparency property to the new transparency, `transparency`.
     * 
     * Set `transparency` to %NULL to unset the property in the event.
     * @param transparency a new event transparency, or %NULL
     */
    setTransparency(transparency: string | null): void
    /**
     * Sets the #GDataCalendarEvent:uid property to the new UID, `uid`.
     * 
     * Set `uid` to %NULL to unset the property in the event.
     * @param uid a new event UID, or %NULL
     */
    setUid(uid: string | null): void
    /**
     * Sets the #GDataCalendarEvent:visibility property to the new visibility, `visibility`.
     * 
     * Set `visibility` to %NULL to unset the property in the event.
     * @param visibility a new event visibility, or %NULL
     */
    setVisibility(visibility: string | null): void

    // Class property signals of GData-0.0.GData.CalendarEvent

    connect(sigName: "notify::anyone-can-add-self", callback: any): number
    on(sigName: "notify::anyone-can-add-self", callback: any): number
    once(sigName: "notify::anyone-can-add-self", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anyone-can-add-self", ...args: any[]): void
    connect(sigName: "notify::edited", callback: any): number
    on(sigName: "notify::edited", callback: any): number
    once(sigName: "notify::edited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::guests-can-invite-others", callback: any): number
    on(sigName: "notify::guests-can-invite-others", callback: any): number
    once(sigName: "notify::guests-can-invite-others", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::guests-can-invite-others", ...args: any[]): void
    connect(sigName: "notify::guests-can-modify", callback: any): number
    on(sigName: "notify::guests-can-modify", callback: any): number
    once(sigName: "notify::guests-can-modify", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::guests-can-modify", ...args: any[]): void
    connect(sigName: "notify::guests-can-see-guests", callback: any): number
    on(sigName: "notify::guests-can-see-guests", callback: any): number
    once(sigName: "notify::guests-can-see-guests", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::guests-can-see-guests", ...args: any[]): void
    connect(sigName: "notify::original-event-id", callback: any): number
    on(sigName: "notify::original-event-id", callback: any): number
    once(sigName: "notify::original-event-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::original-event-id", ...args: any[]): void
    connect(sigName: "notify::original-event-uri", callback: any): number
    on(sigName: "notify::original-event-uri", callback: any): number
    once(sigName: "notify::original-event-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::original-event-uri", ...args: any[]): void
    connect(sigName: "notify::recurrence", callback: any): number
    on(sigName: "notify::recurrence", callback: any): number
    once(sigName: "notify::recurrence", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::recurrence", ...args: any[]): void
    connect(sigName: "notify::sequence", callback: any): number
    on(sigName: "notify::sequence", callback: any): number
    once(sigName: "notify::sequence", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sequence", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::transparency", callback: any): number
    on(sigName: "notify::transparency", callback: any): number
    once(sigName: "notify::transparency", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transparency", ...args: any[]): void
    connect(sigName: "notify::uid", callback: any): number
    on(sigName: "notify::uid", callback: any): number
    once(sigName: "notify::uid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uid", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCalendarEvent structure are private and should never be accessed directly.
 * @class 
 */
export class CalendarEvent extends Entry {

    // Own properties of GData-0.0.GData.CalendarEvent

    static name: string

    // Constructors of GData-0.0.GData.CalendarEvent

    constructor(config?: CalendarEvent.ConstructorProperties) 
    /**
     * Creates a new #GDataCalendarEvent with the given ID and default properties.
     * @constructor 
     * @param id the event's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataCalendarEvent with the given ID and default properties.
     * @constructor 
     * @param id the event's ID, or %NULL
     */
    static new(id: string | null): CalendarEvent

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: CalendarEvent.ConstructorProperties): void
}

export module CalendarFeed {

    // Constructor properties interface

    export interface ConstructorProperties extends Feed.ConstructorProperties {
    }

}

export interface CalendarFeed {

    // Own fields of GData-0.0.GData.CalendarFeed

    parent: Feed & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.CalendarFeed

    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: any): number
    on(sigName: "notify::generator", callback: any): number
    once(sigName: "notify::generator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: any): number
    on(sigName: "notify::items-per-page", callback: any): number
    once(sigName: "notify::items-per-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: any): number
    on(sigName: "notify::logo", callback: any): number
    once(sigName: "notify::logo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: any): number
    on(sigName: "notify::next-page-token", callback: any): number
    once(sigName: "notify::next-page-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: any): number
    on(sigName: "notify::total-results", callback: any): number
    once(sigName: "notify::total-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCalendarFeed structure are private and should never be accessed directly.
 * @class 
 */
export class CalendarFeed extends Feed {

    // Own properties of GData-0.0.GData.CalendarFeed

    static name: string

    // Constructors of GData-0.0.GData.CalendarFeed

    constructor(config?: CalendarFeed.ConstructorProperties) 
    _init(config?: CalendarFeed.ConstructorProperties): void
}

export module CalendarQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.CalendarQuery

        /**
         * A shortcut to request all events scheduled for the future. Overrides the
         * #GDataCalendarQuery:start-min and #GDataCalendarQuery:start-max properties.
         */
        futureEvents?: boolean | null
        /**
         * Specifies the maximum number of attendees to list for an event. If the actual number of attendees for an event is greater than this value,
         * only the current user and the event organiser are listed.
         */
        maxAttendees?: number | null
        /**
         * Specifies order of entries in a feed. Supported values are <literal>lastmodified</literal> and
         * <literal>starttime</literal>.
         */
        orderBy?: string | null
        /**
         * Whether to include deleted/cancelled events in the query feed. Deleted events have their #GDataCalendarEvent:status property set to
         * %GDATA_GD_EVENT_STATUS_CANCELED. They do not normally appear in query results.
         */
        showDeleted?: boolean | null
        /**
         * Indicates whether recurring events should be expanded or represented as a single event.
         */
        singleEvents?: boolean | null
        /**
         * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned
         * 
         * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
         * included. Both are specified in seconds since the UNIX epoch.
         * 
         * If not specified, the default #GDataCalendarQuery:start-max is <literal>2031-01-01</literal>.
         */
        startMax?: number | null
        /**
         * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
         * 
         * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
         * included. Both are specified in seconds since the UNIX epoch.
         * 
         * If not specified, the default #GDataCalendarQuery:start-min is <literal>1970-01-01</literal>.
         */
        startMin?: number | null
        /**
         * The current timezone. If this is not specified, all times are returned in UTC.
         */
        timezone?: string | null
    }

}

export interface CalendarQuery {

    // Own properties of GData-0.0.GData.CalendarQuery

    /**
     * A shortcut to request all events scheduled for the future. Overrides the
     * #GDataCalendarQuery:start-min and #GDataCalendarQuery:start-max properties.
     */
    futureEvents: boolean
    /**
     * Specifies the maximum number of attendees to list for an event. If the actual number of attendees for an event is greater than this value,
     * only the current user and the event organiser are listed.
     */
    maxAttendees: number
    /**
     * Specifies order of entries in a feed. Supported values are <literal>lastmodified</literal> and
     * <literal>starttime</literal>.
     */
    orderBy: string
    /**
     * Whether to include deleted/cancelled events in the query feed. Deleted events have their #GDataCalendarEvent:status property set to
     * %GDATA_GD_EVENT_STATUS_CANCELED. They do not normally appear in query results.
     */
    showDeleted: boolean
    /**
     * Indicates whether recurring events should be expanded or represented as a single event.
     */
    singleEvents: boolean
    /**
     * Together with #GDataCalendarQuery:start-min, creates a timespan such that only events within the timespan are returned
     * 
     * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
     * included. Both are specified in seconds since the UNIX epoch.
     * 
     * If not specified, the default #GDataCalendarQuery:start-max is <literal>2031-01-01</literal>.
     */
    startMax: number
    /**
     * Together with #GDataCalendarQuery:start-max, creates a timespan such that only events within the timespan are returned.
     * 
     * #GDataCalendarQuery:start-min is inclusive, while #GDataCalendarQuery:start-max is exclusive. Events that overlap the range are
     * included. Both are specified in seconds since the UNIX epoch.
     * 
     * If not specified, the default #GDataCalendarQuery:start-min is <literal>1970-01-01</literal>.
     */
    startMin: number
    /**
     * The current timezone. If this is not specified, all times are returned in UTC.
     */
    timezone: string

    // Own fields of GData-0.0.GData.CalendarQuery

    parent: Query & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.CalendarQuery

    /**
     * Gets the #GDataCalendarQuery:future-events property.
     */
    getFutureEvents(): boolean
    /**
     * Gets the #GDataCalendarQuery:max-attendees property. If the property is unset, <code class="literal">0</code> will be returned.
     */
    getMaxAttendees(): number
    /**
     * Gets the #GDataCalendarQuery:order-by property.
     */
    getOrderBy(): string
    /**
     * Gets the #GDataCalendarQuery:single-events property.
     */
    getSingleEvents(): boolean
    /**
     * Gets the #GDataCalendarQuery:start-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getStartMax(): number
    /**
     * Gets the #GDataCalendarQuery:start-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getStartMin(): number
    /**
     * Gets the #GDataCalendarQuery:timezone property.
     */
    getTimezone(): string
    /**
     * Sets the #GDataCalendarQuery:future-events property of the #GDataCalendarQuery to `future_events`.
     * @param futureEvents %TRUE to unconditionally show future events, %FALSE otherwise
     */
    setFutureEvents(futureEvents: boolean): void
    /**
     * Sets the #GDataCalendarQuery:max-attendees property of the #GDataCalendarQuery to the new value, `max_attendees`.
     * 
     * Set `max_attendees` to <code class="literal">0</code> to unset the property in the query URI.
     * @param maxAttendees a new maximum attendee count, or <code class="literal">0</code>
     */
    setMaxAttendees(maxAttendees: number): void
    /**
     * Sets the #GDataCalendarQuery:order-by property of the #GDataCalendarQuery to the new order by string, `order_by`.
     * 
     * Set `order_by` to %NULL to unset the property in the query URI.
     * @param orderBy a new order by string, or %NULL
     */
    setOrderBy(orderBy: string | null): void
    /**
     * Sets the #GDataCalendarQuery:show-deleted property of the #GDataCalendarQuery.
     * @param showDeleted %TRUE to show deleted events, %FALSE otherwise
     */
    setShowDeleted(showDeleted: boolean): void
    /**
     * Sets the #GDataCalendarQuery:single-events property of the #GDataCalendarQuery to `single_events`.
     * @param singleEvents %TRUE to show recurring events as single events, %FALSE otherwise
     */
    setSingleEvents(singleEvents: boolean): void
    /**
     * Sets the #GDataCalendarQuery:start-max property of the #GDataCalendarQuery
     * to the new time/date, `start_max`.
     * 
     * Set `start_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param startMax a new maximum start time (in seconds since the UNIX epoch), or <code class="literal">-1</code>
     */
    setStartMax(startMax: number): void
    /**
     * Sets the #GDataCalendarQuery:start-min property of the #GDataCalendarQuery
     * to the new time/date, `start_min`.
     * 
     * Set `start_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param startMin a new minimum start time (in seconds since the UNIX epoch), or <code class="literal">-1</code>
     */
    setStartMin(startMin: number): void
    /**
     * Sets the #GDataCalendarQuery:timezone property of the #GDataCalendarQuery to the new timezone string, `timezone`.
     * 
     * Set `timezone` to %NULL to unset the property in the query URI.
     * @param timezone a new timezone string, or %NULL
     */
    setTimezone(timezone: string | null): void

    // Class property signals of GData-0.0.GData.CalendarQuery

    connect(sigName: "notify::future-events", callback: any): number
    on(sigName: "notify::future-events", callback: any): number
    once(sigName: "notify::future-events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::future-events", ...args: any[]): void
    connect(sigName: "notify::max-attendees", callback: any): number
    on(sigName: "notify::max-attendees", callback: any): number
    once(sigName: "notify::max-attendees", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-attendees", ...args: any[]): void
    connect(sigName: "notify::order-by", callback: any): number
    on(sigName: "notify::order-by", callback: any): number
    once(sigName: "notify::order-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::order-by", ...args: any[]): void
    connect(sigName: "notify::show-deleted", callback: any): number
    on(sigName: "notify::show-deleted", callback: any): number
    once(sigName: "notify::show-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-deleted", ...args: any[]): void
    connect(sigName: "notify::single-events", callback: any): number
    on(sigName: "notify::single-events", callback: any): number
    once(sigName: "notify::single-events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::single-events", ...args: any[]): void
    connect(sigName: "notify::start-max", callback: any): number
    on(sigName: "notify::start-max", callback: any): number
    once(sigName: "notify::start-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-max", ...args: any[]): void
    connect(sigName: "notify::start-min", callback: any): number
    on(sigName: "notify::start-min", callback: any): number
    once(sigName: "notify::start-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-min", ...args: any[]): void
    connect(sigName: "notify::timezone", callback: any): number
    on(sigName: "notify::timezone", callback: any): number
    once(sigName: "notify::timezone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timezone", ...args: any[]): void
    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCalendarQuery structure are private and should never be accessed directly.
 * @class 
 */
export class CalendarQuery extends Query {

    // Own properties of GData-0.0.GData.CalendarQuery

    static name: string

    // Constructors of GData-0.0.GData.CalendarQuery

    constructor(config?: CalendarQuery.ConstructorProperties) 
    /**
     * Creates a new #GDataCalendarQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataCalendarQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): CalendarQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a new #GDataCalendarQuery with its #GDataQuery:q property set to `q,` and the time limits `start_min` and `start_max`
     * applied (both in seconds since the UNIX epoch).
     * @constructor 
     * @param q a query string, or %NULL
     * @param startMin a starting time for the event period, or -1
     * @param startMax an ending time for the event period, or -1
     */
    static newWithLimits(q: string | null, startMin: number, startMax: number): CalendarQuery

    // Overloads of newWithLimits

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param startIndex a one-based start index for the results, or <code class="literal">0</code>
     * @param maxResults the maximum number of results to return, or <code class="literal">0</code>
     */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): Query
    _init(config?: CalendarQuery.ConstructorProperties): void
}

export module CalendarService {

    // Constructor properties interface

    export interface ConstructorProperties extends Batchable.ConstructorProperties, Service.ConstructorProperties {
    }

}

export interface CalendarService extends Batchable {

    // Own fields of GData-0.0.GData.CalendarService

    parent: Service & GObject.Object

    // Owm methods of GData-0.0.GData.CalendarService

    /**
     * Inserts `event` by uploading it to the online calendar service, adding it to
     * the specified `calendar`.
     * 
     * For more details, see gdata_service_insert_entry().
     * @param calendar the #GDataCalendarCalendar to insert the event into
     * @param event the #GDataCalendarEvent to insert
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insertCalendarEvent(calendar: CalendarCalendar, event: CalendarEvent, cancellable: Gio.Cancellable | null): CalendarEvent
    /**
     * Inserts `event` by uploading it to the online calendar service, adding it to
     * the specified `calendar`. `self` and `event` are both reffed when this function
     * is called, so can safely be unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a
     * #GDataCalendarEvent representing the inserted event and to check for possible
     * errors.
     * 
     * For more details, see gdata_calendar_service_insert_event(), which is the
     * synchronous version of this function, and gdata_service_insert_entry_async(),
     * which is the base asynchronous insertion function.
     * @param calendar the #GDataCalendarCalendar to insert the event into
     * @param event the #GDataCalendarEvent to insert
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insertCalendarEventAsync(calendar: CalendarCalendar, event: CalendarEvent, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of all calendars from the authenticated account which match the given
     * `query`. It will return all calendars the user has read access to, including primary, secondary and imported
     * calendars.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryAllCalendars(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of all calendars from the authenticated account which match the given
     * `query`. `self` and `query` are all reffed when this function is called, so can safely be unreffed after
     * this function returns.
     * 
     * For more details, see gdata_calendar_service_query_all_calendars(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryAllCalendarsAsync(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of events in the given `calendar,` which match `query`.
     * 
     * For more details, see gdata_service_query().
     * @param calendar a #GDataCalendarCalendar
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryEvents(calendar: CalendarCalendar, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of events in the given `calendar,` which match `query`. `self,` `calendar` and `query` are all reffed when this
     * function is called, so can safely be unreffed after this function returns.
     * 
     * Get the results of the query using gdata_service_query_finish() in the `callback`.
     * 
     * For more details, see gdata_calendar_service_query_events(), which is the synchronous version of this function, and gdata_service_query_async(),
     * which is the base asynchronous query function.
     * @param calendar a #GDataCalendarCalendar
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    queryEventsAsync(calendar: CalendarCalendar, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of calendars from the authenticated account which match the given
     * `query,` and the authenticated user owns. (i.e. They have full read/write access to the calendar, as well
     * as the ability to set permissions on the calendar.)
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryOwnCalendars(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of calendars from the authenticated account which match the given
     * `query,` and the authenticated user owns. `self` and `query` are all reffed when this function is called,
     * so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_calendar_service_query_own_calendars(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryOwnCalendarsAsync(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GData-0.0.GData.CalendarService

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCalendarService structure are private and should never be accessed directly.
 * @class 
 */
export class CalendarService extends Service {

    // Own properties of GData-0.0.GData.CalendarService

    static name: string

    // Constructors of GData-0.0.GData.CalendarService

    constructor(config?: CalendarService.ConstructorProperties) 
    /**
     * Creates a new #GDataCalendarService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataCalendarService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): CalendarService
    _init(config?: CalendarService.ConstructorProperties): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with Google Calendar. This will not normally need to be used, as it's used internally
     * by the #GDataCalendarService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
}

export module Category {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Category

        /**
         * A human-readable label for display in end-user applications.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
         * Atom specification</ulink>.
         */
        label?: string | null
        /**
         * An IRI that identifies a categorization scheme.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
         * Atom specification</ulink>.
         */
        scheme?: string | null
        /**
         * Identifies the category to which the entry or feed belongs.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
         * Atom specification</ulink>.
         */
        term?: string | null
    }

}

export interface Category extends Comparable {

    // Own properties of GData-0.0.GData.Category

    /**
     * A human-readable label for display in end-user applications.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    label: string
    /**
     * An IRI that identifies a categorization scheme.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    scheme: string
    /**
     * Identifies the category to which the entry or feed belongs.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">
     * Atom specification</ulink>.
     */
    term: string

    // Own fields of GData-0.0.GData.Category

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.Category

    /**
     * Gets the #GDataCategory:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataCategory:scheme property. If the scheme is non-%NULL, it will be non-empty.
     */
    getScheme(): string
    /**
     * Gets the #GDataCategory:term property. The term will always be a non-%NULL, non-empty string.
     */
    getTerm(): string
    /**
     * Sets the #GDataCategory:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the category.
     * @param label the new label for the category, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataCategory:scheme property to `scheme`. `scheme` must be %NULL or non-empty.
     * 
     * Set `scheme` to %NULL to unset the property in the category.
     * @param scheme the new scheme for the category, or %NULL
     */
    setScheme(scheme: string | null): void
    /**
     * Sets the #GDataCategory:term property to `term`. `term` must be non-%NULL and non-empty.
     * @param term the new term for the category
     */
    setTerm(term: string): void

    // Class property signals of GData-0.0.GData.Category

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: any): number
    on(sigName: "notify::scheme", callback: any): number
    once(sigName: "notify::scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::term", callback: any): number
    on(sigName: "notify::term", callback: any): number
    once(sigName: "notify::term", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::term", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataCategory structure are private and should never be accessed directly.
 * @class 
 */
export class Category extends Parsable {

    // Own properties of GData-0.0.GData.Category

    static name: string

    // Constructors of GData-0.0.GData.Category

    constructor(config?: Category.ConstructorProperties) 
    /**
     * Creates a new #GDataCategory. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">Atom specification</ulink>.
     * 
     * `term` must be non-%NULL and non-empty. `scheme` must be %NULL or non-empty.
     * @constructor 
     * @param term a category identifier
     * @param scheme an IRI to define the categorisation scheme, or %NULL
     * @param label a human-readable label for the category, or %NULL
     */
    constructor(term: string, scheme: string | null, label: string | null) 
    /**
     * Creates a new #GDataCategory. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.category">Atom specification</ulink>.
     * 
     * `term` must be non-%NULL and non-empty. `scheme` must be %NULL or non-empty.
     * @constructor 
     * @param term a category identifier
     * @param scheme an IRI to define the categorisation scheme, or %NULL
     * @param label a human-readable label for the category, or %NULL
     */
    static new(term: string, scheme: string | null, label: string | null): Category
    _init(config?: Category.ConstructorProperties): void
}

export module Comment {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {
    }

}

export interface Comment {

    // Own fields of GData-0.0.GData.Comment

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.Comment

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataComment structure are private and should never be accessed directly.
 * @class 
 */
export class Comment extends Entry {

    // Own properties of GData-0.0.GData.Comment

    static name: string

    // Constructors of GData-0.0.GData.Comment

    constructor(config?: Comment.ConstructorProperties) 
    _init(config?: Comment.ConstructorProperties): void
}

export module DocumentsAccessRule {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessRule.ConstructorProperties {
    }

}

export interface DocumentsAccessRule {

    // Conflicting properties

    priv: any & ParsablePrivate

    // Own fields of GData-0.0.GData.DocumentsAccessRule

    parent: AccessRule & Entry & Parsable & GObject.Object & GObject.Object

    // Class property signals of GData-0.0.GData.DocumentsAccessRule

    connect(sigName: "notify::edited", callback: any): number
    on(sigName: "notify::edited", callback: any): number
    once(sigName: "notify::edited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::key", callback: any): number
    on(sigName: "notify::key", callback: any): number
    once(sigName: "notify::key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scope-type", callback: any): number
    on(sigName: "notify::scope-type", callback: any): number
    once(sigName: "notify::scope-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope-type", ...args: any[]): void
    connect(sigName: "notify::scope-value", callback: any): number
    on(sigName: "notify::scope-value", callback: any): number
    once(sigName: "notify::scope-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope-value", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsAccessRule structure are private and
 * should never be accessed directly.
 * @class 
 */
export class DocumentsAccessRule extends AccessRule {

    // Own properties of GData-0.0.GData.DocumentsAccessRule

    static name: string

    // Constructors of GData-0.0.GData.DocumentsAccessRule

    constructor(config?: DocumentsAccessRule.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataDocumentsAccessRule with the given ID and default
     * properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): DocumentsAccessRule

    // Overloads of new

    /**
     * Creates a new #GDataAccessRule with the given ID and default properties.
     * @constructor 
     * @param id the access rule's ID, or %NULL
     */
    static new(id: string): AccessRule
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsAccessRule.ConstructorProperties): void
}

export module DocumentsDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsEntry.ConstructorProperties {
    }

}

export interface DocumentsDocument extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsDocument

    parent: DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsDocument

    /**
     * Downloads and returns the document file represented by the #GDataDocumentsDocument. If the document doesn't exist, %NULL is returned, but no error
     * is set in `error`.
     * 
     * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
     * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
     * 
     * If `self` is a #GDataDocumentsSpreadsheet, only the first grid, or sheet, in the spreadsheet will be downloaded for some export formats. To download
     * a specific a specific grid, use gdata_documents_spreadsheet_get_download_uri() with #GDataDownloadStream to download the grid manually. See the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#downloading_spreadsheets">GData protocol
     * specification</ulink> for more information.
     * 
     * To get the content type of the downloaded file, gdata_download_stream_get_content_type() can be called on the returned #GDataDownloadStream.
     * Calling gdata_download_stream_get_content_length() on the stream will not return a meaningful result, however, as the stream is encoded in chunks,
     * rather than by content length.
     * 
     * In order to cancel the download, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GInputStream operations on the #GDataDownloadStream will not cancel the entire download; merely the read or close operation in question. See the
     * #GDataDownloadStream:cancellable for more details.
     * 
     * If the given `export_format` is unrecognised or not supported for this document, %GDATA_SERVICE_ERROR_NOT_FOUND will be returned.
     * 
     * If `service` isn't authenticated, a %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED will be returned.
     * 
     * If there is an error getting the document, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned.
     * @param service a #GDataDocumentsService
     * @param exportFormat the format in which the document should be exported
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    download(service: DocumentsService, exportFormat: string, cancellable: Gio.Cancellable | null): DownloadStream
    /**
     * Builds and returns the download URI for the given #GDataDocumentsDocument in the desired format. Note that directly downloading the document using
     * this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with the URI, and use the resulting
     * #GInputStream.
     * 
     * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
     * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
     * 
     * If the `export_format` is not recognised or not supported for this document, %NULL is returned.
     * @param exportFormat the format in which the document should be exported when downloaded
     */
    getDownloadUri(exportFormat: string): string | null
    /**
     * Gets the URI of the thumbnail for the #GDataDocumentsDocument. If no thumbnail exists for the document, %NULL will be returned.
     * 
     * The thumbnail may then be downloaded using a #GDataDownloadStream.
     * 
     * <example>
     * <title>Downloading a Document Thumbnail</title>
     * <programlisting>
     * GDataDocumentsService *service;
     * const gchar *thumbnail_uri;
     * GCancellable *cancellable;
     * GdkPixbuf *pixbuf;
     * GError *error = NULL;
     * 
     * service = get_my_documents_service ();
     * thumbnail_uri = gdata_documents_document_get_thumbnail_uri (my_document);
     * cancellable = g_cancellable_new ();
     * 
     * /<!-- -->* Prepare a download stream *<!-- -->/
     * download_stream = GDATA_DOWNLOAD_STREAM (gdata_download_stream_new (GDATA_SERVICE (service), NULL, thumbnail_uri, cancellable));
     * 
     * /<!-- -->* Download into a new GdkPixbuf. This can be cancelled using 'cancellable'. *<!-- -->/
     * pixbuf = gdk_pixbuf_new_from_stream (G_INPUT_STREAM (download_stream), NULL, &error);
     * 
     * if (error != NULL) {
     * 	/<!-- -->* Handle the error. *<!-- -->/
     * 	g_error_free (error);
     * }
     * 
     * g_object_unref (download_stream);
     * g_object_unref (cancellable);
     * 
     * /<!-- -->* Do something with the GdkPixbuf. *<!-- -->/
     * 
     * g_object_unref (pixbuf);
     * </programlisting>
     * </example>
     */
    getThumbnailUri(): string | null

    // Class property signals of GData-0.0.GData.DocumentsDocument

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsDocument structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsDocument extends DocumentsEntry {

    // Own properties of GData-0.0.GData.DocumentsDocument

    static name: string

    // Constructors of GData-0.0.GData.DocumentsDocument

    constructor(config?: DocumentsDocument.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsDocument.ConstructorProperties): void
}

export module DocumentsDrawing {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsDocument.ConstructorProperties {
    }

}

export interface DocumentsDrawing extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsDrawing

    parent: DocumentsDocument & DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.DocumentsDrawing

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsDrawing structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsDrawing extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsDrawing

    static name: string

    // Constructors of GData-0.0.GData.DocumentsDrawing

    constructor(config?: DocumentsDrawing.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsDrawing with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the drawing document), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsDrawing with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the drawing document), or %NULL
     */
    static new(id: string | null): DocumentsDrawing

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsDrawing.ConstructorProperties): void
}

export module DocumentsDrive {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {
    }

}

export interface DocumentsDrive {

    // Own properties of GData-0.0.GData.DocumentsDrive

    /**
     * The human-readable name of this shared drive.
     */
    readonly name: string

    // Conflicting properties

    parent: Parsable & GObject.Object & GObject.Object
    priv: any & ParsablePrivate

    // Own fields of GData-0.0.GData.DocumentsDrive

    parentInstance: Entry

    // Owm methods of GData-0.0.GData.DocumentsDrive

    /**
     * Returns the human-readable name of this shared drive.
     */
    getName(): string | null

    // Class property signals of GData-0.0.GData.DocumentsDrive

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentsDrive extends Entry {

    // Own properties of GData-0.0.GData.DocumentsDrive

    static name: string

    // Constructors of GData-0.0.GData.DocumentsDrive

    constructor(config?: DocumentsDrive.ConstructorProperties) 
    _init(config?: DocumentsDrive.ConstructorProperties): void
}

export module DocumentsDriveQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {
    }

}

export interface DocumentsDriveQuery {

    // Own fields of GData-0.0.GData.DocumentsDriveQuery

    parentInstance: Query

    // Class property signals of GData-0.0.GData.DocumentsDriveQuery

    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentsDriveQuery extends Query {

    // Own properties of GData-0.0.GData.DocumentsDriveQuery

    static name: string

    // Constructors of GData-0.0.GData.DocumentsDriveQuery

    constructor(config?: DocumentsDriveQuery.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsDriveQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataDocumentsDriveQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): DocumentsDriveQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    _init(config?: DocumentsDriveQuery.ConstructorProperties): void
}

export module DocumentsEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.DocumentsEntry

        /**
         * Indicates whether the document entry has been deleted (moved to the trash). Deleted documents will only
         * appear in query results if the #GDataDocumentsQuery:show-deleted property is %TRUE.
         */
        isDeleted?: boolean | null
        /**
         * Indicates whether the document entry writers can invite others to edit the document.
         */
        writersCanInvite?: boolean | null
    }

}

export interface DocumentsEntry extends AccessHandler {

    // Own properties of GData-0.0.GData.DocumentsEntry

    /**
     * Indicates whether the current user can edit this file.
     */
    readonly canEdit: boolean
    /**
     * The size of the document. This is only set for non-document files.
     * Standard formats, such as #GDataDocumentsText,
     * #GDataDocumentsSpreadsheet and #GDataDocumentsFolder are not binary
     * data and so have no size. Measured in bytes.
     */
    readonly fileSize: number
    /**
     * Indicates whether the document entry has been deleted (moved to the trash). Deleted documents will only
     * appear in query results if the #GDataDocumentsQuery:show-deleted property is %TRUE.
     */
    isDeleted: boolean
    /**
     * Indicates the author of the last modification.
     */
    readonly lastModifiedBy: Author
    /**
     * The last time the document was viewed.
     */
    readonly lastViewed: number
    /**
     * The amount of user quota the document is occupying. Currently, only arbitrary files consume file space quota (whereas standard document
     * formats, such as #GDataDocumentsText, #GDataDocumentsSpreadsheet and #GDataDocumentsFolder don't). Measured in bytes.
     * 
     * This property will be <code class="literal">0</code> for documents which aren't consuming any quota.
     */
    readonly quotaUsed: number
    /**
     * The resource ID of the document. This should not normally need to be used in client code, and is mostly for internal use. To uniquely
     * identify a given document or folder, use its #GDataEntry:id.
     * 
     * Resource IDs have the form:
     * <literal><replaceable>document|drawing|pdf|spreadsheet|presentation|folder</replaceable>:<replaceable>untyped resource ID</replaceable></literal>; whereas
     * entry IDs have the form:
     * <literal>https://docs.google.com/feeds/id/<replaceable>resource ID</replaceable></literal> in version 3 of the API.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#resource_ids_explained">Google Documents
     * API reference</ulink>.
     */
    readonly resourceId: string
    /**
     * The UNIX timestamp for the time at which this file was shared with the user.
     */
    readonly sharedWithMeDate: number
    /**
     * Indicates whether the document entry writers can invite others to edit the document.
     */
    writersCanInvite: boolean

    // Own fields of GData-0.0.GData.DocumentsEntry

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsEntry

    /**
     * Inserts/updates `property` on "properties" list in `self`. Since, a GDataDocumentsProperty is uniquely identified by #GDataDocumentsProperty:key and #GDataDocumentsProperty:visibility, if no such property exists in the "properties" list, then a `property` will be appended to the list after incrementing the reference count.
     * 
     * In case that there already exists a `property` in "properties", the #GDataDocumentsProperty inside the list will be updated to `property`. Note that #GDataDocumentsProperty:value has no role in determining the uniqueness of a #GDataDocumentsProperty.
     * 
     * The changes made by this function will be local only and you need to explicitly update `self` by calling gdata_service_update_entry().
     * @param property a #GDataDocumentsProperty
     */
    addDocumentsProperty(property: DocumentsProperty): boolean
    /**
     * Gets a list of the #GDataDocumentsPropertys for this entry.
     */
    getDocumentProperties(): DocumentsProperty[]
    /**
     * Gets the #GDataDocumentsEntry:file-size property.
     */
    getFileSize(): number
    /**
     * Gets the #GDataDocumentsEntry:last-modified-by property.
     */
    getLastModifiedBy(): Author
    /**
     * Gets the #GDataDocumentsEntry:last-viewed property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getLastViewed(): number
    /**
     * Builds a path for the #GDataDocumentsEntry, starting from a root node and traversing the folders containing the document, then ending with the
     * document's ID.
     * 
     * An example path would be: <literal>/folder_id1/folder_id2/document_id</literal>.
     * 
     * Note: the path is based on the entry/document IDs of the folders (#GDataEntry:id) and document (#GDataDocumentsEntry:document-id),
     * and not the entries' human-readable names (#GDataEntry:title).
     */
    getPath(): string
    /**
     * Gets the #GDataDocumentsEntry:quota-used property.
     */
    getQuotaUsed(): number
    /**
     * Gets the #GDataDocumentsEntry:resource-id property.
     */
    getResourceId(): string
    /**
     * Gets the #GDataDocumentsEntry:shared-with-me-date property. If the property is unset, `-1` will be returned.
     */
    getSharedWithMeDate(): number
    /**
     * The property specified by `property` will be removed from the "properties" list on `self`.
     * 
     * Only #GDataDocumentsProperty:key and #GDataDocumentsProperty:visibility will be used to find `property` in "properties" list. #GDataDocumentsProperty:value has no role in determining the uniqueness of a #GDataDocumentsProperty.
     * 
     * The changes made by this function will be local only and you need to explicitly update `self` by calling gdata_service_update_entry().
     * @param property a #GDataDocumentsProperty
     */
    removeDocumentsProperty(property: DocumentsProperty): boolean
    /**
     * Sets the #GDataDocumentsEntry:writers-can-invite property to `writers_can_invite`.
     * @param writersCanInvite %TRUE if writers can invite other people to edit the document, %FALSE otherwise
     */
    setWritersCanInvite(writersCanInvite: boolean): void

    // Class property signals of GData-0.0.GData.DocumentsEntry

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsEntry structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsEntry extends Entry {

    // Own properties of GData-0.0.GData.DocumentsEntry

    static name: string

    // Constructors of GData-0.0.GData.DocumentsEntry

    constructor(config?: DocumentsEntry.ConstructorProperties) 
    _init(config?: DocumentsEntry.ConstructorProperties): void
}

export module DocumentsFeed {

    // Constructor properties interface

    export interface ConstructorProperties extends Feed.ConstructorProperties {
    }

}

export interface DocumentsFeed {

    // Class property signals of GData-0.0.GData.DocumentsFeed

    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: any): number
    on(sigName: "notify::generator", callback: any): number
    once(sigName: "notify::generator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: any): number
    on(sigName: "notify::items-per-page", callback: any): number
    once(sigName: "notify::items-per-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: any): number
    on(sigName: "notify::logo", callback: any): number
    once(sigName: "notify::logo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: any): number
    on(sigName: "notify::next-page-token", callback: any): number
    once(sigName: "notify::next-page-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: any): number
    on(sigName: "notify::total-results", callback: any): number
    once(sigName: "notify::total-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsFeed structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsFeed extends Feed {

    // Own properties of GData-0.0.GData.DocumentsFeed

    static name: string

    // Constructors of GData-0.0.GData.DocumentsFeed

    constructor(config?: DocumentsFeed.ConstructorProperties) 
    _init(config?: DocumentsFeed.ConstructorProperties): void
}

export module DocumentsFolder {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsEntry.ConstructorProperties {
    }

}

export interface DocumentsFolder extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsFolder

    parent: DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.DocumentsFolder

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsFolder structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsFolder extends DocumentsEntry {

    // Own properties of GData-0.0.GData.DocumentsFolder

    static name: string

    // Constructors of GData-0.0.GData.DocumentsFolder

    constructor(config?: DocumentsFolder.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsFolder with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the folder), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsFolder with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the folder), or %NULL
     */
    static new(id: string | null): DocumentsFolder

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsFolder.ConstructorProperties): void
}

export module DocumentsMetadata {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {
    }

}

export interface DocumentsMetadata {

    // Own properties of GData-0.0.GData.DocumentsMetadata

    /**
     * The user quota limit across all services. Measured in bytes.
     */
    readonly quotaTotal: number
    /**
     * The amount of user quota used up across all services. Measured in bytes.
     */
    readonly quotaUsed: number

    // Own fields of GData-0.0.GData.DocumentsMetadata

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsMetadata

    /**
     * Gets the #GDataDocumentsMetadata:quota-total property.
     */
    getQuotaTotal(): number
    /**
     * Gets the #GDataDocumentsMetadata:quota-used property.
     */
    getQuotaUsed(): number

    // Class property signals of GData-0.0.GData.DocumentsMetadata

    connect(sigName: "notify::quota-total", callback: any): number
    on(sigName: "notify::quota-total", callback: any): number
    once(sigName: "notify::quota-total", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-total", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsMetadata structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsMetadata extends Parsable {

    // Own properties of GData-0.0.GData.DocumentsMetadata

    static name: string

    // Constructors of GData-0.0.GData.DocumentsMetadata

    constructor(config?: DocumentsMetadata.ConstructorProperties) 
    _init(config?: DocumentsMetadata.ConstructorProperties): void
}

export module DocumentsPdf {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsDocument.ConstructorProperties {
    }

}

export interface DocumentsPdf extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsPdf

    parent: DocumentsDocument & DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.DocumentsPdf

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsPdf structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsPdf extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsPdf

    static name: string

    // Constructors of GData-0.0.GData.DocumentsPdf

    constructor(config?: DocumentsPdf.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsPdf with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the pdf document), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsPdf with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the pdf document), or %NULL
     */
    static new(id: string | null): DocumentsPdf

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsPdf.ConstructorProperties): void
}

export module DocumentsPresentation {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsDocument.ConstructorProperties {
    }

}

export interface DocumentsPresentation extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsPresentation

    parent: DocumentsDocument & DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.DocumentsPresentation

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsPresentation structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsPresentation extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsPresentation

    static name: string

    // Constructors of GData-0.0.GData.DocumentsPresentation

    constructor(config?: DocumentsPresentation.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsPresentation with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the presentation), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsPresentation with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the presentation), or %NULL
     */
    static new(id: string | null): DocumentsPresentation

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsPresentation.ConstructorProperties): void
}

export module DocumentsProperty {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.DocumentsProperty

        /**
         * ETag of the property.
         * 
         * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
         */
        etag?: string | null
        /**
         * The key of this property.
         * 
         * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
         */
        key?: string | null
        /**
         * The value of this property. By default, it takes the an empty string ("").
         * 
         * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
         */
        value?: string | null
        /**
         * The visibility status of this property. The default value of
         * visibility is PRIVATE on a Drive Properties Resource object,
         * hence #GDataDocumentsProperty:visibility is %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE
         * by default. A private property restricts its visibility to only the app which created it.
         * 
         * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
         */
        visibility?: string | null
    }

}

export interface DocumentsProperty extends Comparable {

    // Own properties of GData-0.0.GData.DocumentsProperty

    /**
     * ETag of the property.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    readonly etag: string
    /**
     * The key of this property.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    key: string
    /**
     * The value of this property. By default, it takes the an empty string ("").
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    value: string
    /**
     * The visibility status of this property. The default value of
     * visibility is PRIVATE on a Drive Properties Resource object,
     * hence #GDataDocumentsProperty:visibility is %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE
     * by default. A private property restricts its visibility to only the app which created it.
     * 
     * For more information, see the <ulink type="http" url="https://developers.google.com/drive/api/v2/reference/properties">Properties Resource</ulink>
     */
    visibility: string

    // Own fields of GData-0.0.GData.DocumentsProperty

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsProperty

    /**
     * Returns the ETag of the property.
     */
    getEtag(): string
    /**
     * Returns the key of the property. This will never be %NULL or an empty string ("").
     */
    getKey(): string
    /**
     * Returns the value of the property.
     * 
     * In the case that this value is %NULL, the Property Resource corresponding to `self` will be deleted from the properties array on a file's metadata, whereas in the case that it's empty string (""), it will be set as it is.
     */
    getValue(): string | null
    /**
     * Returns the visibility status of the property.
     */
    getVisibility(): string
    /**
     * Sets #GDataDocumentsProperty:value to `value,` corresponding to the key.
     * 
     * In the case that `value` is %NULL, the Property Resource corresponding to `self` will be deleted from the properties array on a file's metadata, whereas in the case that it's empty string (""), it will be set as it is.
     * @param value the new value of the property
     */
    setValue(value: string | null): void
    /**
     * Sets #GDataDocumentsProperty:visibility to %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PUBLIC for
     * public properties and %GDATA_DOCUMENTS_PROPERTY_VISIBILITY_PRIVATE for
     * private properties (default).
     * @param visibility the new visibility status of the property
     */
    setVisibility(visibility: string): void

    // Class property signals of GData-0.0.GData.DocumentsProperty

    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::key", callback: any): number
    on(sigName: "notify::key", callback: any): number
    once(sigName: "notify::key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::key", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsProperty structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsProperty extends Parsable {

    // Own properties of GData-0.0.GData.DocumentsProperty

    static name: string

    // Constructors of GData-0.0.GData.DocumentsProperty

    constructor(config?: DocumentsProperty.ConstructorProperties) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param key the property's key
     */
    constructor(key: string) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param key the property's key
     */
    static new(key: string): DocumentsProperty
    _init(config?: DocumentsProperty.ConstructorProperties): void
}

export module DocumentsQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.DocumentsQuery

        /**
         * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
         */
        exactTitle?: boolean | null
        /**
         * Specifies the ID of the folder in which to search.
         */
        folderId?: string | null
        /**
         * A shortcut to request all documents that have been deleted.
         */
        showDeleted?: boolean | null
        /**
         * Specifies if the request also returns folders.
         */
        showFolders?: boolean | null
        /**
         * A title (or title fragment) to be searched for. If #GDataDocumentsQuery:exact-title is %TRUE, an exact
         * title match will be searched for, otherwise substring matches will also be returned.
         */
        title?: string | null
    }

}

export interface DocumentsQuery {

    // Own properties of GData-0.0.GData.DocumentsQuery

    /**
     * Specifies whether the query should search for an exact title match for the #GDataDocumentsQuery:title parameter.
     */
    exactTitle: boolean
    /**
     * Specifies the ID of the folder in which to search.
     */
    folderId: string
    /**
     * A shortcut to request all documents that have been deleted.
     */
    showDeleted: boolean
    /**
     * Specifies if the request also returns folders.
     */
    showFolders: boolean
    /**
     * A title (or title fragment) to be searched for. If #GDataDocumentsQuery:exact-title is %TRUE, an exact
     * title match will be searched for, otherwise substring matches will also be returned.
     */
    title: string

    // Own fields of GData-0.0.GData.DocumentsQuery

    parent: Query & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsQuery

    /**
     * Add `email_address` as a #GDataGDEmailAddress to the list of collaborators whose edited documents will be queried.
     * @param emailAddress the e-mail address of the collaborator to add
     */
    addCollaborator(emailAddress: string): void
    /**
     * Add `email_address` as a #GDataGDEmailAddress to the list of readers, the documents readable by whom will be queried.
     * @param emailAddress the e-mail address of the reader to add
     */
    addReader(emailAddress: string): void
    /**
     * Gets a list of #GDataGDEmailAddress<!-- -->es of the document collaborators whose documents will be queried.
     */
    getCollaboratorAddresses(): GDEmailAddress[]
    /**
     * Gets the #GDataDocumentsQuery:exact-title property.
     */
    getExactTitle(): boolean
    /**
     * Gets the #GDataDocumentsQuery:folder-id property.
     */
    getFolderId(): string
    /**
     * Gets a list of #GDataGDEmailAddress<!-- -->es of the document readers whose documents will be queried.
     */
    getReaderAddresses(): GDEmailAddress[]
    /**
     * Gets the #GDataDocumentsQuery:title property.
     */
    getTitle(): string
    /**
     * Sets the #GDataDocumentsQuery:folder-id property to `folder_id`.
     * 
     * Set `folder_id` to %NULL to unset the property in the query URI.
     * @param folderId the ID of the folder to be queried, or %NULL
     */
    setFolderId(folderId: string | null): void
    /**
     * Sets the #GDataDocumentsQuery:show_deleted property to `show_deleted`.
     * @param showDeleted %TRUE if the request should return deleted entries, %FALSE otherwise
     */
    setShowDeleted(showDeleted: boolean): void
    /**
     * Sets the #GDataDocumentsQuery:show-folders property to show_folders.
     * @param showFolders %TRUE if the request should return folders, %FALSE otherwise
     */
    setShowFolders(showFolders: boolean): void
    /**
     * Sets the #GDataDocumentsQuery:title property to `title`.
     * 
     * Set `title` to %NULL to unset the property in the query URI.
     * @param title the title (or title fragment) to query for, or %NULL
     * @param exactTitle %TRUE if the query should match the exact `title,` %FALSE otherwise
     */
    setTitle(title: string | null, exactTitle: boolean): void

    // Class property signals of GData-0.0.GData.DocumentsQuery

    connect(sigName: "notify::exact-title", callback: any): number
    on(sigName: "notify::exact-title", callback: any): number
    once(sigName: "notify::exact-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::exact-title", ...args: any[]): void
    connect(sigName: "notify::folder-id", callback: any): number
    on(sigName: "notify::folder-id", callback: any): number
    once(sigName: "notify::folder-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::folder-id", ...args: any[]): void
    connect(sigName: "notify::show-deleted", callback: any): number
    on(sigName: "notify::show-deleted", callback: any): number
    once(sigName: "notify::show-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-deleted", ...args: any[]): void
    connect(sigName: "notify::show-folders", callback: any): number
    on(sigName: "notify::show-folders", callback: any): number
    once(sigName: "notify::show-folders", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-folders", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsQuery structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsQuery extends Query {

    // Own properties of GData-0.0.GData.DocumentsQuery

    static name: string

    // Constructors of GData-0.0.GData.DocumentsQuery

    constructor(config?: DocumentsQuery.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataDocumentsQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): DocumentsQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a new #GDataDocumentsQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param startIndex a one-based start index for the results, or <code class="literal">0</code>
     * @param maxResults the maximum number of results to return, or <code class="literal">0</code>
     */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): DocumentsQuery

    // Overloads of newWithLimits

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param startIndex a one-based start index for the results, or <code class="literal">0</code>
     * @param maxResults the maximum number of results to return, or <code class="literal">0</code>
     */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): Query
    _init(config?: DocumentsQuery.ConstructorProperties): void
}

export module DocumentsService {

    // Constructor properties interface

    export interface ConstructorProperties extends Batchable.ConstructorProperties, Service.ConstructorProperties {
    }

}

export interface DocumentsService extends Batchable {

    // Own fields of GData-0.0.GData.DocumentsService

    parent: Service & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsService

    /**
     * Add the given `entry` to the specified `folder,` and return an updated #GDataDocumentsEntry for `entry`. If the `entry` is already in another folder,
     * a copy will be added to the new folder. The copy and original will have different IDs. Note that `entry` can't be a #GDataDocumentsFolder that
     * already exists on the server. It can be a new #GDataDocumentsFolder, or a #GDataDocumentsDocument that is either new or already present on the
     * server.
     * 
     * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
     * @param entry the #GDataDocumentsEntry to copy
     * @param folder the #GDataDocumentsFolder to copy `entry` into
     * @param cancellable optional #GCancellable object, or %NULL
     */
    addEntryToFolder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null): DocumentsEntry
    /**
     * Add the given `entry` to the specified `folder`. `self,` `entry` and `folder` are all reffed when this function is called, so can safely be unreffed
     * after this function returns.
     * 
     * For more details, see gdata_documents_service_add_entry_to_folder(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_add_entry_to_folder_finish() to get the results
     * of the operation.
     * @param entry the #GDataDocumentsEntry to add to `folder`
     * @param folder the #GDataDocumentsFolder to add `entry` to
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    addEntryToFolderAsync(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to add a #GDataDocumentsEntry to a folder started with gdata_documents_service_add_entry_to_folder_async().
     * @param asyncResult a #GAsyncResult
     */
    addEntryToFolderFinish(asyncResult: Gio.AsyncResult): DocumentsEntry
    /**
     * Copy the given `document,` producing a duplicate document in the same folder and returning its #GDataDocumentsDocument.
     * 
     * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
     * @param document the #GDataDocumentsDocument to copy
     * @param cancellable optional #GCancellable object, or %NULL
     */
    copyDocument(document: DocumentsDocument, cancellable: Gio.Cancellable | null): DocumentsDocument
    /**
     * Copy the given `document,` producing a duplicate document in the same folder and returning its #GDataDocumentsDocument. `self` and `document` are
     * both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_documents_service_copy_document(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_copy_document_finish() to get the results
     * of the operation.
     * @param document the #GDataDocumentsDocument to copy
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    copyDocumentAsync(document: DocumentsDocument, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to copy a #GDataDocumentsDocument started with gdata_documents_service_copy_document_async().
     * @param asyncResult a #GAsyncResult
     */
    copyDocumentFinish(asyncResult: Gio.AsyncResult): DocumentsDocument
    /**
     * Finish off a document upload or update operation started by gdata_documents_service_upload_document() or gdata_documents_service_update_document(),
     * parsing the result and returning the new or updated #GDataDocumentsDocument.
     * 
     * If an error occurred during the upload or update operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
     * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
     * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
     * 
     * In the case that no #GDataDocumentsDocument was passed (to gdata_documents_service_upload_document() or gdata_documents_service_update_document())
     * when starting the operation, %GDATA_DOCUMENTS_SERVICE_ERROR_INVALID_CONTENT_TYPE will be thrown in `error` if the content type of the uploaded data
     * could not be mapped to a document type with which to interpret the response from the server.
     * @param uploadStream the #GDataUploadStream from the operation
     */
    finishUpload(uploadStream: UploadStream): DocumentsDocument
    /**
     * Gets a #GDataDocumentsMetadata object containing metadata about the documents
     * service itself, like how large the user quota is.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getMetadata(cancellable: Gio.Cancellable | null): DocumentsMetadata
    /**
     * Gets a #GDataDocumentsMetadata object containing metadata about the documents
     * service itself, like how large the user quota is.
     * 
     * For more details, see gdata_documents_service_get_metadata(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_get_metadata_finish() to get the results
     * of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    getMetadataAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to get a #GDataDocumentsMetadata started with gdata_documents_service_get_metadata_async().
     * @param asyncResult a #GAsyncResult
     */
    getMetadataFinish(asyncResult: Gio.AsyncResult): DocumentsMetadata
    /**
     * Queries the service to return a list of documents matching the given `query`. Note that `query` has to be a #GDataDocumentsQuery, rather than just
     * a #GDataQuery, as it uses the folder ID specified in #GDataDocumentsQuery:folder-id.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataDocumentsQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryDocuments(query: DocumentsQuery | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): DocumentsFeed
    /**
     * Queries the service to return a list of documents matching the given `query`. `self` and
     * `query` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_documents_service_query_documents(), which is the synchronous version of this function,
     * and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataDocumentsQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryDocumentsAsync(query: DocumentsQuery | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of shared drives matching the given `query`.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataDocumentsDriveQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryDrives(query: DocumentsDriveQuery | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): DocumentsFeed
    /**
     * Queries the service to return a list of shared drives matching the given `query`. `self` and
     * `query` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_documents_service_query_drives(), which is the synchronous version of this function,
     * and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataDocumentsDriveQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryDrivesAsync(query: DocumentsDriveQuery | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Remove the given `entry` from `folder,` and return an updated #GDataDocumentsEntry for `entry`. `entry` will remain a member of any other folders it's
     * currently in. Note that `entry` can be either a #GDataDocumentsDocument or a #GDataDocumentsFolder.
     * 
     * Errors from #GDataServiceError can be returned for exceptional conditions, as determined by the server.
     * @param entry the #GDataDocumentsEntry to remove
     * @param folder the #GDataDocumentsFolder from which we should remove `entry`
     * @param cancellable optional #GCancellable object, or %NULL
     */
    removeEntryFromFolder(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null): DocumentsEntry
    /**
     * Remove the given `entry` from the specified `folder`. `self,` `entry` and `folder` are all reffed when this function is called, so can safely be unreffed
     * after this function returns.
     * 
     * For more details, see gdata_documents_service_remove_entry_from_folder(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_documents_service_remove_entry_from_folder_finish() to get the
     * results of the operation.
     * @param entry the #GDataDocumentsEntry to remove from `folder`
     * @param folder the #GDataDocumentsFolder to remove `entry` from
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the operation is finished, or %NULL
     */
    removeEntryFromFolderAsync(entry: DocumentsEntry, folder: DocumentsFolder, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finish an asynchronous operation to remove a #GDataDocumentsEntry from a folder started with
     * gdata_documents_service_remove_entry_from_folder_async().
     * @param asyncResult a #GAsyncResult
     */
    removeEntryFromFolderFinish(asyncResult: Gio.AsyncResult): DocumentsEntry
    /**
     * Update the document using the properties from `document` and the document data written to the resulting #GDataUploadStream. If the document data does
     * not need to be changed, just the metadata, use gdata_service_update_entry() instead.
     * 
     * This performs a non-resumable upload, unlike gdata_documents_service_update_document(). This means that errors during transmission will cause the
     * upload to fail, and the entire document will have to be re-uploaded. It is recommended that gdata_documents_service_update_document_resumable()
     * be used instead.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the update, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire update; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * 
     * For more information, see gdata_service_update_entry().
     * @param document the #GDataDocumentsDocument to update
     * @param slug the filename to give to the uploaded document
     * @param contentType the content type of the uploaded data
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    updateDocument(document: DocumentsDocument, slug: string, contentType: string, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Update the document using the properties from `document` and the document data written to the resulting #GDataUploadStream. If the document data does
     * not need to be changed, just the metadata, use gdata_service_update_entry() instead.
     * 
     * Unlike gdata_documents_service_update_document(), this method performs a
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html">resumable upload</ulink> which allows for correction of
     * transmission errors without re-uploading the entire file. Use of this method is preferred over gdata_documents_service_update_document().
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the update, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire update; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * 
     * For more information, see gdata_service_update_entry().
     * @param document the #GDataDocumentsDocument to update
     * @param slug the filename to give to the uploaded document
     * @param contentType the content type of the uploaded data
     * @param contentLength the size (in bytes) of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    updateDocumentResumable(document: DocumentsDocument, slug: string, contentType: string, contentLength: number, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Uploads a document to Google Documents, using the properties from `document` and the document data written to the resulting #GDataUploadStream. If
     * the document data does not need to be provided at the moment, just the metadata, use gdata_service_insert_entry() instead (e.g. in the case of
     * creating a new, empty file to be edited at a later date).
     * 
     * This performs a non-resumable upload, unlike gdata_documents_service_upload_document(). This means that errors during transmission will cause the
     * upload to fail, and the entire document will have to be re-uploaded. It is recommended that gdata_documents_service_upload_document_resumable()
     * be used instead.
     * 
     * If `document` is %NULL, only the document data will be uploaded. The new document entry will be named using `slug,` and will have default metadata.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param document the #GDataDocumentsDocument to insert, or %NULL
     * @param slug the filename to give to the uploaded document
     * @param contentType the content type of the uploaded data
     * @param folder the folder to which the document should be uploaded, or %NULL
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    uploadDocument(document: DocumentsDocument | null, slug: string, contentType: string, folder: DocumentsFolder | null, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Uploads a document to Google Documents, using the properties from `document` and the document data written to the resulting #GDataUploadStream. If
     * the document data does not need to be provided at the moment, just the metadata, use gdata_service_insert_entry() instead (e.g. in the case of
     * creating a new, empty file to be edited at a later date).
     * 
     * Unlike gdata_documents_service_upload_document(), this method performs a
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html">resumable upload</ulink> which allows for correction of
     * transmission errors without re-uploading the entire file. Use of this method is preferred over gdata_documents_service_upload_document().
     * 
     * If `document` is %NULL, only the document data will be uploaded. The new document entry will be named using `slug,` and will have default metadata.
     * 
     * If non-%NULL, the `query` specifies parameters for the upload, such as a #GDataDocumentsFolder to upload the document into; and whether to treat
     * the document as an opaque file, or convert it to a standard format. If `query` is %NULL, the document will be uploaded into the root folder, and
     * automatically converted to a standard format. No OCR or automatic language translation will be performed by default.
     * 
     * If `query` is non-%NULL and #GDataDocumentsUploadQuery:convert is %FALSE, `document` must be an instance of #GDataDocumentsDocument. Otherwise,
     * `document` must be a subclass of it, such as #GDataDocumentsPresentation.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_documents_service_finish_upload() should be called on it to parse and return the updated
     * #GDataDocumentsDocument for the document. This must be done, as `document` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param document the #GDataDocumentsDocument to insert, or %NULL
     * @param slug the filename to give to the uploaded document
     * @param contentType the content type of the uploaded data
     * @param contentLength the size (in bytes) of the file being uploaded
     * @param query a query specifying parameters for the upload, or %NULL
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    uploadDocumentResumable(document: DocumentsDocument | null, slug: string, contentType: string, contentLength: number, query: DocumentsUploadQuery | null, cancellable: Gio.Cancellable | null): UploadStream

    // Class property signals of GData-0.0.GData.DocumentsService

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsService structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsService extends Service {

    // Own properties of GData-0.0.GData.DocumentsService

    static name: string

    // Constructors of GData-0.0.GData.DocumentsService

    constructor(config?: DocumentsService.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataDocumentsService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): DocumentsService
    _init(config?: DocumentsService.ConstructorProperties): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with Google Documents. This will not normally need to be used, as it's used internally
     * by the #GDataDocumentsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
    /**
     * The #GDataAuthorizationDomain for interacting with spreadsheet data. This will not normally need to be used, as it's automatically used internally
     * by the #GDataDocumentsService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests which pertain to the Google Spreadsheets Data API, such as
     * requests to download or upload spreadsheet documents.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static getSpreadsheetAuthorizationDomain(): AuthorizationDomain
    /**
     * Gets the upload URI for documents for the service.
     * 
     * If `folder` is %NULL, the URI will be the one to upload documents to the "root" folder.
     * @param folder the #GDataDocumentsFolder into which to upload the document, or %NULL
     */
    static getUploadUri(folder: DocumentsFolder | null): string
}

export module DocumentsSpreadsheet {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsDocument.ConstructorProperties {
    }

}

export interface DocumentsSpreadsheet extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsSpreadsheet

    parent: DocumentsDocument & DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.DocumentsSpreadsheet

    /**
     * Builds and returns the download URI for the given #GDataDocumentsSpreadsheet in the desired format. Note that directly downloading
     * the document using this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with
     * the URI, and use the resulting #GInputStream.
     * 
     * When requesting a <code class="literal">"csv"</code>, <code class="literal">"tsv"</code>, <code class="literal">"pdf"</code> or
     * <code class="literal">"html"</code> file you may specify an additional parameter called `gid` which indicates which grid, or sheet, you wish to get
     * (the index is <code class="literal">0</code>-based, so GID <code class="literal">1</code> actually refers to the second sheet on a given
     * spreadsheet).
     * @param exportFormat the format in which the spreadsheet should be exported when downloaded
     * @param gid the <code class="literal">0</code>-based sheet ID to download, or <code class="literal">-1</code>
     */
    getDownloadUri(exportFormat: string, gid: number): string

    // Overloads of getDownloadUri

    /**
     * Builds and returns the download URI for the given #GDataDocumentsDocument in the desired format. Note that directly downloading the document using
     * this URI isn't possible, as authentication is required. You should instead use gdata_download_stream_new() with the URI, and use the resulting
     * #GInputStream.
     * 
     * `export_format` should be the file extension of the desired output format for the document, from the list accepted by Google Documents. For example:
     * %GDATA_DOCUMENTS_PRESENTATION_PDF, %GDATA_DOCUMENTS_SPREADSHEET_ODS or %GDATA_DOCUMENTS_TEXT_ODT.
     * 
     * If the `export_format` is not recognised or not supported for this document, %NULL is returned.
     * @param exportFormat the format in which the document should be exported when downloaded
     */
    getDownloadUri(exportFormat: string): string | null

    // Class property signals of GData-0.0.GData.DocumentsSpreadsheet

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsSpreadsheet structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsSpreadsheet extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsSpreadsheet

    static name: string

    // Constructors of GData-0.0.GData.DocumentsSpreadsheet

    constructor(config?: DocumentsSpreadsheet.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsSpreadsheet with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the spreadsheet), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsSpreadsheet with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the spreadsheet), or %NULL
     */
    static new(id: string | null): DocumentsSpreadsheet

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsSpreadsheet.ConstructorProperties): void
}

export module DocumentsText {

    // Constructor properties interface

    export interface ConstructorProperties extends AccessHandler.ConstructorProperties, DocumentsDocument.ConstructorProperties {
    }

}

export interface DocumentsText extends AccessHandler {

    // Own fields of GData-0.0.GData.DocumentsText

    parent: DocumentsDocument & DocumentsEntry & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.DocumentsText

    connect(sigName: "notify::can-edit", callback: any): number
    on(sigName: "notify::can-edit", callback: any): number
    once(sigName: "notify::can-edit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-edit", ...args: any[]): void
    connect(sigName: "notify::file-size", callback: any): number
    on(sigName: "notify::file-size", callback: any): number
    once(sigName: "notify::file-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-size", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::last-modified-by", callback: any): number
    on(sigName: "notify::last-modified-by", callback: any): number
    once(sigName: "notify::last-modified-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-modified-by", ...args: any[]): void
    connect(sigName: "notify::last-viewed", callback: any): number
    on(sigName: "notify::last-viewed", callback: any): number
    once(sigName: "notify::last-viewed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-viewed", ...args: any[]): void
    connect(sigName: "notify::quota-used", callback: any): number
    on(sigName: "notify::quota-used", callback: any): number
    once(sigName: "notify::quota-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-used", ...args: any[]): void
    connect(sigName: "notify::resource-id", callback: any): number
    on(sigName: "notify::resource-id", callback: any): number
    once(sigName: "notify::resource-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-id", ...args: any[]): void
    connect(sigName: "notify::shared-with-me-date", callback: any): number
    on(sigName: "notify::shared-with-me-date", callback: any): number
    once(sigName: "notify::shared-with-me-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::shared-with-me-date", ...args: any[]): void
    connect(sigName: "notify::writers-can-invite", callback: any): number
    on(sigName: "notify::writers-can-invite", callback: any): number
    once(sigName: "notify::writers-can-invite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writers-can-invite", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsText structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsText extends DocumentsDocument {

    // Own properties of GData-0.0.GData.DocumentsText

    static name: string

    // Constructors of GData-0.0.GData.DocumentsText

    constructor(config?: DocumentsText.ConstructorProperties) 
    /**
     * Creates a new #GDataDocumentsText with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the text document), or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataDocumentsText with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID of the text document), or %NULL
     */
    static new(id: string | null): DocumentsText

    // Overloads of new

    /**
     * Creates a new #GDataDocumentsDocument with the given entry ID (#GDataEntry:id).
     * @constructor 
     * @param id the entry's ID (not the document ID), or %NULL
     */
    static new(id: string | null): DocumentsDocument
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: DocumentsText.ConstructorProperties): void
}

export module DocumentsUploadQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.DocumentsUploadQuery

        /**
         * %TRUE to automatically convert the uploaded document into a standard format (such as a text document, spreadsheet, presentation, etc.).
         * %FALSE to upload the document without converting it; this allows for arbitrary files to be uploaded to Google Documents.
         * 
         * For more information, see the
         * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#creating_or_uploading_files">online documentation</ulink>.
         * 
         * Note that uploading with this property set to %FALSE will only have an effect when using gdata_documents_service_update_document_resumable()
         * and not gdata_documents_service_update_document(). Additionally, the #GDataDocumentsDocument passed to
         * gdata_documents_service_update_document_resumable() must be a #GDataDocumentsDocument if this property is %FALSE, and a subclass of it
         * otherwise.
         */
        convert?: boolean | null
        /**
         * Folder to upload the document into. If this is %NULL, the document will be uploaded into the root folder.
         */
        folder?: DocumentsFolder | null
    }

}

export interface DocumentsUploadQuery {

    // Own properties of GData-0.0.GData.DocumentsUploadQuery

    /**
     * %TRUE to automatically convert the uploaded document into a standard format (such as a text document, spreadsheet, presentation, etc.).
     * %FALSE to upload the document without converting it; this allows for arbitrary files to be uploaded to Google Documents.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#creating_or_uploading_files">online documentation</ulink>.
     * 
     * Note that uploading with this property set to %FALSE will only have an effect when using gdata_documents_service_update_document_resumable()
     * and not gdata_documents_service_update_document(). Additionally, the #GDataDocumentsDocument passed to
     * gdata_documents_service_update_document_resumable() must be a #GDataDocumentsDocument if this property is %FALSE, and a subclass of it
     * otherwise.
     */
    convert: boolean
    /**
     * Folder to upload the document into. If this is %NULL, the document will be uploaded into the root folder.
     */
    folder: DocumentsFolder

    // Own fields of GData-0.0.GData.DocumentsUploadQuery

    parent: GObject.Object
    priv: DocumentsUploadQueryPrivate

    // Owm methods of GData-0.0.GData.DocumentsUploadQuery

    /**
     * Builds an upload URI suitable for passing to gdata_upload_stream_new_resumable() in order to upload a document to Google Documents as described in
     * the
     * <ulink type="http" url="https://developers.google.com/google-apps/documents-list/#uploading_a_new_document_or_file_with_both_metadata_and_content">
     * online documentation</ulink>.
     */
    buildUri(): string
    /**
     * Gets #GDataDocumentsUploadQuery:convert.
     */
    getConvert(): boolean
    /**
     * Gets #GDataDocumentsUploadQuery:folder.
     */
    getFolder(): DocumentsFolder | null
    /**
     * Sets #GDataDocumentsUploadQuery:convert to `convert`.
     * @param convert %TRUE to convert documents to common formats, %FALSE to upload them unmodified
     */
    setConvert(convert: boolean): void
    /**
     * Sets #GDataDocumentsUploadQuery:folder to `folder`.
     * @param folder a new folder to upload into, or %NULL
     */
    setFolder(folder: DocumentsFolder | null): void

    // Class property signals of GData-0.0.GData.DocumentsUploadQuery

    connect(sigName: "notify::convert", callback: any): number
    on(sigName: "notify::convert", callback: any): number
    once(sigName: "notify::convert", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::convert", ...args: any[]): void
    connect(sigName: "notify::folder", callback: any): number
    on(sigName: "notify::folder", callback: any): number
    once(sigName: "notify::folder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::folder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDocumentsUploadQuery structure are private and should never be accessed directly.
 * @class 
 */
export class DocumentsUploadQuery extends GObject.Object {

    // Own properties of GData-0.0.GData.DocumentsUploadQuery

    static name: string

    // Constructors of GData-0.0.GData.DocumentsUploadQuery

    constructor(config?: DocumentsUploadQuery.ConstructorProperties) 
    /**
     * Constructs a new empty #GDataDocumentsUploadQuery.
     * @constructor 
     */
    constructor() 
    /**
     * Constructs a new empty #GDataDocumentsUploadQuery.
     * @constructor 
     */
    static new(): DocumentsUploadQuery
    _init(config?: DocumentsUploadQuery.ConstructorProperties): void
}

export module DownloadStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Seekable.ConstructorProperties, Gio.InputStream.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.DownloadStream

        /**
         * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
         * authorized. This may be %NULL if authorization is not needed for the download.
         */
        authorizationDomain?: AuthorizationDomain | null
        /**
         * An optional cancellable used to cancel the entire download operation. If a #GCancellable instance isn't provided for this property at
         * construction time (i.e. to gdata_download_stream_new()), one will be created internally and can be retrieved using
         * gdata_download_stream_get_cancellable() and used to cancel the download operation with g_cancellable_cancel() just as if it was passed to
         * gdata_download_stream_new().
         * 
         * If the download operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future
         * calls to #GInputStream API on the #GDataDownloadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be
         * passed to individual #GInputStream operations will not cancel the download operation proper if cancelled — they will merely cancel that API
         * call. The only way to cancel the download operation completely is using #GDataDownloadStream:cancellable.
         */
        cancellable?: Gio.Cancellable | null
        /**
         * The URI of the file to download. This must be HTTPS.
         */
        downloadUri?: string | null
        /**
         * The service which is used to authorize the download, and to which the download relates.
         */
        service?: Service | null
    }

}

export interface DownloadStream extends Gio.Seekable {

    // Own properties of GData-0.0.GData.DownloadStream

    /**
     * The authorization domain for the download, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
     * authorized. This may be %NULL if authorization is not needed for the download.
     */
    readonly authorizationDomain: AuthorizationDomain
    /**
     * An optional cancellable used to cancel the entire download operation. If a #GCancellable instance isn't provided for this property at
     * construction time (i.e. to gdata_download_stream_new()), one will be created internally and can be retrieved using
     * gdata_download_stream_get_cancellable() and used to cancel the download operation with g_cancellable_cancel() just as if it was passed to
     * gdata_download_stream_new().
     * 
     * If the download operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future
     * calls to #GInputStream API on the #GDataDownloadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be
     * passed to individual #GInputStream operations will not cancel the download operation proper if cancelled — they will merely cancel that API
     * call. The only way to cancel the download operation completely is using #GDataDownloadStream:cancellable.
     */
    readonly cancellable: Gio.Cancellable
    /**
     * The length (in bytes) of the file being downloaded. This will initially be <code class="literal">-1</code>, and will be populated as soon as
     * the appropriate header is received from the server. Its value will never change after this.
     * 
     * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
     * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
     * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
     */
    readonly contentLength: number
    /**
     * The content type of the file being downloaded. This will initially be %NULL, and will be populated as soon as the appropriate header is
     * received from the server. Its value will never change after this.
     * 
     * Note that change notifications for this property (#GObject::notify emissions) may be emitted in threads other than the one which created
     * the #GDataDownloadStream. It is the client's responsibility to ensure that any notification signal handlers are either multi-thread safe
     * or marshal the notification to the thread which owns the #GDataDownloadStream as appropriate.
     */
    readonly contentType: string
    /**
     * The URI of the file to download. This must be HTTPS.
     */
    readonly downloadUri: string
    /**
     * The service which is used to authorize the download, and to which the download relates.
     */
    readonly service: Service

    // Own fields of GData-0.0.GData.DownloadStream

    parent: Gio.InputStream
    priv: DownloadStreamPrivate

    // Owm methods of GData-0.0.GData.DownloadStream

    /**
     * Gets the authorization domain used to authorize the download, as passed to gdata_download_stream_new(). It may be %NULL if authorization is not
     * needed for the download.
     */
    getAuthorizationDomain(): AuthorizationDomain | null
    /**
     * Gets the #GCancellable for the entire download operation, #GDataDownloadStream:cancellable.
     */
    getCancellable(): Gio.Cancellable
    /**
     * Gets the length (in bytes) of the file being downloaded. If the <literal>Content-Length</literal> header has not yet
     * been received from the server, <code class="literal">-1</code> will be returned.
     */
    getContentLength(): number
    /**
     * Gets the content type of the file being downloaded. If the <literal>Content-Type</literal> header has not yet
     * been received, %NULL will be returned.
     */
    getContentType(): string
    /**
     * Gets the URI of the file being downloaded, as passed to gdata_download_stream_new().
     */
    getDownloadUri(): string
    /**
     * Gets the service used to authorize the download, as passed to gdata_download_stream_new().
     */
    getService(): Service

    // Class property signals of GData-0.0.GData.DownloadStream

    connect(sigName: "notify::authorization-domain", callback: any): number
    on(sigName: "notify::authorization-domain", callback: any): number
    once(sigName: "notify::authorization-domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorization-domain", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: any): number
    on(sigName: "notify::cancellable", callback: any): number
    once(sigName: "notify::cancellable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::content-length", callback: any): number
    on(sigName: "notify::content-length", callback: any): number
    once(sigName: "notify::content-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::download-uri", callback: any): number
    on(sigName: "notify::download-uri", callback: any): number
    once(sigName: "notify::download-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::download-uri", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataDownloadStream structure are private and should never be accessed directly.
 * @class 
 */
export class DownloadStream extends Gio.InputStream {

    // Own properties of GData-0.0.GData.DownloadStream

    static name: string

    // Constructors of GData-0.0.GData.DownloadStream

    constructor(config?: DownloadStream.ConstructorProperties) 
    /**
     * Creates a new #GDataDownloadStream, allowing a file to be downloaded from a GData service using standard #GInputStream API.
     * 
     * As well as the standard GIO errors, calls to the #GInputStream API on a #GDataDownloadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the download operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GInputStream API on the #GDataDownloadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GInputStream operations will not cancel the
     * download operation proper if cancelled — they will merely cancel that API call. The only way to cancel the download operation completely is using
     * this `cancellable`.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the download, or %NULL
     * @param downloadUri the URI to download; this must be HTTPS
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    constructor(service: Service, domain: AuthorizationDomain | null, downloadUri: string, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #GDataDownloadStream, allowing a file to be downloaded from a GData service using standard #GInputStream API.
     * 
     * As well as the standard GIO errors, calls to the #GInputStream API on a #GDataDownloadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the download operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GInputStream API on the #GDataDownloadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GInputStream operations will not cancel the
     * download operation proper if cancelled — they will merely cancel that API call. The only way to cancel the download operation completely is using
     * this `cancellable`.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the download, or %NULL
     * @param downloadUri the URI to download; this must be HTTPS
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    static new(service: Service, domain: AuthorizationDomain | null, downloadUri: string, cancellable: Gio.Cancellable | null): DownloadStream
    _init(config?: DownloadStream.ConstructorProperties): void
}

export module Entry {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Entry

        /**
         * The content of the entry. This is mutually exclusive with #GDataEntry:content.
         * 
         * For more information, see the <ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
         */
        content?: string | null
        /**
         * A URI pointing to the location of the content of the entry. This is mutually exclusive with #GDataEntry:content.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
         */
        contentUri?: string | null
        /**
         * An identifier for a particular version of the entry. This changes every time the entry on the server changes, and can be used
         * for conditional retrieval and locking.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">
         * GData specification</ulink>.
         */
        etag?: string | null
        /**
         * A permanent, universally unique identifier for the entry, in IRI form. This is %NULL for new entries (i.e. ones which haven't yet been
         * inserted on the server, created with gdata_entry_new()), and a non-empty IRI string for all other entries.
         * 
         * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.id">
         * Atom specification</ulink>.
         */
        id?: string | null
        /**
         * The ownership rights pertaining to the entry.
         * 
         * For more information, see the <ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights">Atom specification</ulink>.
         */
        rights?: string | null
        /**
         * A short summary, abstract, or excerpt of the entry.
         * 
         * For more information, see the <ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.summary">Atom specification</ulink>.
         */
        summary?: string | null
        /**
         * A human-readable title for the entry.
         * 
         * For more information, see the <ulink type="http"
         * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.title">Atom specification</ulink>.
         */
        title?: string | null
    }

}

export interface Entry {

    // Own properties of GData-0.0.GData.Entry

    /**
     * The content of the entry. This is mutually exclusive with #GDataEntry:content.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
     */
    content: string
    /**
     * A URI pointing to the location of the content of the entry. This is mutually exclusive with #GDataEntry:content.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.content">Atom specification</ulink>.
     */
    contentUri: string
    /**
     * An identifier for a particular version of the entry. This changes every time the entry on the server changes, and can be used
     * for conditional retrieval and locking.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">
     * GData specification</ulink>.
     */
    readonly etag: string
    /**
     * A permanent, universally unique identifier for the entry, in IRI form. This is %NULL for new entries (i.e. ones which haven't yet been
     * inserted on the server, created with gdata_entry_new()), and a non-empty IRI string for all other entries.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.id">
     * Atom specification</ulink>.
     */
    readonly id: string
    /**
     * Whether the entry has been inserted on the server. This is %FALSE for entries which have just been created using gdata_entry_new() and
     * %TRUE for entries returned from the server by queries. It is set to %TRUE when an entry is inserted using gdata_service_insert_entry().
     */
    readonly isInserted: boolean
    /**
     * The date and time the entry was first published or made available.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.published">Atom specification</ulink>.
     */
    readonly published: number
    /**
     * The ownership rights pertaining to the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights">Atom specification</ulink>.
     */
    rights: string
    /**
     * A short summary, abstract, or excerpt of the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.summary">Atom specification</ulink>.
     */
    summary: string
    /**
     * A human-readable title for the entry.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.title">Atom specification</ulink>.
     */
    title: string
    /**
     * The date and time when the entry was most recently updated significantly.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.updated">Atom specification</ulink>.
     */
    readonly updated: number

    // Own fields of GData-0.0.GData.Entry

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.Entry

    /**
     * Adds `author` to the list of authors in the given #GDataEntry and increments its reference count.
     * 
     * Duplicate authors will not be added to the list.
     * @param author a #GDataAuthor to add
     */
    addAuthor(author: Author): void
    /**
     * Adds `category` to the list of categories in the given #GDataEntry, and increments its reference count.
     * 
     * Duplicate categories will not be added to the list.
     * @param category a #GDataCategory to add
     */
    addCategory(category: Category): void
    /**
     * Adds `_link` to the list of links in the given #GDataEntry and increments its reference count.
     * 
     * Duplicate links will not be added to the list.
     * @param link a #GDataLink to add
     */
    addLink(link: Link): void
    /**
     * Gets a list of the #GDataAuthors for this entry.
     */
    getAuthors(): Author[]
    /**
     * Gets a list of the #GDataCategorys containing this entry.
     */
    getCategories(): Category[]
    /**
     * Returns the textual content in this entry. If the content in this entry is pointed to by a URI, %NULL will be returned; the content URI will be
     * returned by gdata_entry_get_content_uri().
     */
    getContent(): string
    /**
     * Returns a URI pointing to the content of this entry. If the content in this entry is stored directly, %NULL will be returned; the content will be
     * returned by gdata_entry_get_content().
     */
    getContentUri(): string
    /**
     * Returns the ETag of the entry; a unique identifier for each version of the entry. For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">online documentation</ulink>.
     * 
     * The ETag will never be empty; it's either %NULL or a valid ETag.
     */
    getEtag(): string | null
    /**
     * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
     * 
     * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
     */
    getId(): string | null
    /**
     * Gets the time the entry was originally published.
     */
    getPublished(): number
    /**
     * Returns the rights pertaining to the entry, or %NULL if not set.
     */
    getRights(): string
    /**
     * Returns the summary of the entry.
     */
    getSummary(): string
    /**
     * Returns the title of the entry. This will never be %NULL, but may be an empty string.
     */
    getTitle(): string
    /**
     * Gets the time the entry was last updated.
     */
    getUpdated(): number
    /**
     * Looks up a link by relation type from the list of links in the entry. If the link has one of the standard Atom relation types,
     * use one of the defined `rel` values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
     * 
     * In the rare event of requiring a list of links with the same `rel` value, use gdata_entry_look_up_links().
     * @param rel the value of the <structfield>rel</structfield> attribute of the desired link
     */
    lookUpLink(rel: string): Link
    /**
     * Looks up a list of links by relation type from the list of links in the entry. If the links have one of the standard Atom
     * relation types, use one of the defined `rel` values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
     * 
     * If you will only use the first link found, consider calling gdata_entry_look_up_link() instead.
     * @param rel the value of the <structfield>rel</structfield> attribute of the desired links
     */
    lookUpLinks(rel: string): Link[]
    /**
     * Removes `_link` from the list of links in the given #GDataEntry and decrements its reference count (since the #GDataEntry held a reference to it
     * while it was in the list).
     * @param link a #GDataLink to remove
     */
    removeLink(link: Link): boolean
    /**
     * Sets the entry's content to `content`. This unsets #GDataEntry:content-uri.
     * @param content the new content for the entry, or %NULL
     */
    setContent(content: string | null): void
    /**
     * Sets the URI pointing to the entry's content to `content`. This unsets #GDataEntry:content.
     * @param contentUri the new URI pointing to the content for the entry, or %NULL
     */
    setContentUri(contentUri: string | null): void
    /**
     * Sets the rights for this entry.
     * @param rights the new rights, or %NULL
     */
    setRights(rights: string | null): void
    /**
     * Sets the summary of the entry.
     * @param summary the new entry summary, or %NULL
     */
    setSummary(summary: string | null): void
    /**
     * Sets the title of the entry.
     * @param title the new entry title, or %NULL
     */
    setTitle(title: string | null): void

    // Class property signals of GData-0.0.GData.Entry

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataEntry structure are private and should never be accessed directly.
 * @interface 
 */
export class Entry extends Parsable {

    // Own properties of GData-0.0.GData.Entry

    static name: string

    // Constructors of GData-0.0.GData.Entry

    constructor(config?: Entry.ConstructorProperties) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: Entry.ConstructorProperties): void
}

export module Feed {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {
    }

}

export interface Feed {

    // Own properties of GData-0.0.GData.Feed

    /**
     * The unique ETag for this version of the feed. See the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/reference.html#ResourceVersioning">online documentation</ulink> for
     * more information.
     */
    readonly etag: string
    /**
     * Details of the software used to generate the feed.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_generator">
     * atom:generator</ulink>
     */
    readonly generator: Generator
    /**
     * The URI of an icon for the feed.
     * 
     * API reference:
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.icon">atom:icon</ulink>
     */
    readonly icon: string
    /**
     * The unique and permanent URN ID for the feed.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_id">atom:id</ulink>
     */
    readonly id: string
    /**
     * The number of items per results page feed.
     * 
     * API reference:
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:itemsPerPage">
     * openSearch:itemsPerPage</ulink>
     */
    readonly itemsPerPage: number
    /**
     * The URI of a logo for the feed.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_logo">atom:logo</ulink>
     */
    readonly logo: string
    /**
     * The next page token for feeds. Pass this to
     * gdata_query_set_page_token() to advance to the next page when
     * querying APIs which use page tokens rather than page numbers or
     * offsets.
     */
    readonly nextPageToken: string
    /**
     * The ownership rights pertaining to the entire feed.
     * 
     * For more information, see the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.rights">Atom specification</ulink>.
     */
    readonly rights: string
    /**
     * The one-based index of the first item in the results feed.
     * 
     * This should <emphasis>not</emphasis> be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
     * or gdata_query_previous_page() functions before making the query to the service.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:startIndex">
     * openSearch:startIndex</ulink>
     */
    readonly startIndex: number
    /**
     * The subtitle of the feed.
     * 
     * API reference: <ulink type="http" url="http://atomenabled.org/developers/syndication/">atom:subtitle</ulink>
     */
    readonly subtitle: string
    /**
     * The title of the feed.
     * 
     * API reference:
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_title">atom:title</ulink>
     */
    readonly title: string
    /**
     * The number of items in the result set for the feed, including those on other pages. If this is zero, the total number is unknown.
     * 
     * This should <emphasis>not</emphasis> be used manually for pagination. Instead, use a #GDataQuery and call its gdata_query_next_page()
     * or gdata_query_previous_page() functions before making the query to the service.
     * 
     * API reference:
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_openSearch:totalResults">
     * openSearch:totalResults</ulink>
     */
    readonly totalResults: number
    /**
     * The time the feed was last updated.
     * 
     * API reference: <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_updated">
     * atom:updated</ulink>
     */
    readonly updated: number

    // Owm methods of GData-0.0.GData.Feed

    /**
     * Returns a list of the authors listed in this feed.
     */
    getAuthors(): Author[]
    /**
     * Returns a list of the categories listed in this feed.
     */
    getCategories(): Category[]
    /**
     * Returns a list of the entries contained in this feed.
     */
    getEntries(): Entry[]
    /**
     * Returns the feed's unique ETag for this version.
     */
    getEtag(): string
    /**
     * Returns details about the software which generated the feed.
     */
    getGenerator(): Generator
    /**
     * Returns the icon URI of the feed.
     */
    getIcon(): string
    /**
     * Returns the feed's unique and permanent URN ID.
     */
    getId(): string
    /**
     * Returns the number of items per results page feed.
     */
    getItemsPerPage(): number
    /**
     * Returns a list of the links listed in this feed.
     */
    getLinks(): Link[]
    /**
     * Returns the logo URI of the feed.
     */
    getLogo(): string
    /**
     * Returns the next page token for a query result, or %NULL if not set.
     * This is #GDataFeed:next-page-token. The page token might not be set if there
     * is no next page, or if this service does not use token based paging (for
     * example, if it uses page number or offset based paging instead). Most more
     * recent services use token based paging.
     */
    getNextPageToken(): string | null
    /**
     * Returns the rights pertaining to the entire feed, or %NULL if not set.
     */
    getRights(): string
    /**
     * Returns the one-based start index of the results feed in the result set.
     */
    getStartIndex(): number
    /**
     * Returns the subtitle of the feed.
     */
    getSubtitle(): string
    /**
     * Returns the title of the feed.
     */
    getTitle(): string
    /**
     * Returns the total number of results in the result set, including results on other
     * pages. If this is zero, the total number is unknown.
     */
    getTotalResults(): number
    /**
     * Gets the time the feed was last updated.
     */
    getUpdated(): number
    /**
     * Returns the entry in the feed with the given `id,` if found.
     * @param id the entry's ID
     */
    lookUpEntry(id: string): Entry
    /**
     * Looks up a link by #GDataLink:relation-type value from the list of links in the feed.
     * @param rel the value of the #GDataLink:relation-type property of the desired link
     */
    lookUpLink(rel: string): Link

    // Class property signals of GData-0.0.GData.Feed

    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: any): number
    on(sigName: "notify::generator", callback: any): number
    once(sigName: "notify::generator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: any): number
    on(sigName: "notify::items-per-page", callback: any): number
    once(sigName: "notify::items-per-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: any): number
    on(sigName: "notify::logo", callback: any): number
    once(sigName: "notify::logo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: any): number
    on(sigName: "notify::next-page-token", callback: any): number
    once(sigName: "notify::next-page-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: any): number
    on(sigName: "notify::total-results", callback: any): number
    once(sigName: "notify::total-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataFeed structure are private and should never be accessed directly.
 * @class 
 */
export class Feed extends Parsable {

    // Own properties of GData-0.0.GData.Feed

    static name: string

    // Constructors of GData-0.0.GData.Feed

    constructor(config?: Feed.ConstructorProperties) 
    _init(config?: Feed.ConstructorProperties): void
}

export module GContactCalendar {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactCalendar

        /**
         * Indicates which calendar out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * A free-form string that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:relation-type.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
         */
        label?: string | null
        /**
         * A programmatic value that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:label.
         * Examples are %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
         */
        relationType?: string | null
        /**
         * The URI of the calendar.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
         */
        uri?: string | null
    }

}

export interface GContactCalendar extends Comparable {

    // Own properties of GData-0.0.GData.GContactCalendar

    /**
     * Indicates which calendar out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    isPrimary: boolean
    /**
     * A free-form string that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of calendar. It is mutually exclusive with #GDataGContactCalendar:label.
     * Examples are %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    relationType: string
    /**
     * The URI of the calendar.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.GContactCalendar

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactCalendar

    /**
     * Gets the #GDataGContactCalendar:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGContactCalendar:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGContactCalendar:uri property.
     */
    getUri(): string
    /**
     * Sets the #GDataGContactCalendar:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the contact's primary calendar, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGContactCalendar:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactCalendar is used in a query, however,
     * exactly one of #GDataGContactCalendar:relation-type and #GDataGContactCalendar:label must be %NULL.
     * @param label the new free-form label for the calendar, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGContactCalendar:relation-type property to `relation_type,`
     * such as %GDATA_GCONTACT_CALENDAR_HOME or %GDATA_GCONTACT_CALENDAR_FREE_BUSY.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactCalendar is used in a query, however,
     * exactly one of #GDataGContactCalendar:relation-type and #GDataGContactCalendar:label must be %NULL.
     * @param relationType the new type for the calendar, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGContactCalendar:uri property to `uri`.
     * @param uri the new URI for the calendar
     */
    setUri(uri: string): void

    // Class property signals of GData-0.0.GData.GContactCalendar

    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactCalendar structure are private and should never be accessed directly.
 * @class 
 */
export class GContactCalendar extends Parsable {

    // Own properties of GData-0.0.GData.GContactCalendar

    static name: string

    // Constructors of GData-0.0.GData.GContactCalendar

    constructor(config?: GContactCalendar.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactCalendar. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the URI of the calendar
     * @param relationType the type of calendar, or %NULL
     * @param label a free-form label for the calendar, or %NULL
     * @param isPrimary %TRUE if this calendar is its owner's primary calendar, %FALSE otherwise
     */
    constructor(uri: string, relationType: string | null, label: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGContactCalendar. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcCalendarLink">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the URI of the calendar
     * @param relationType the type of calendar, or %NULL
     * @param label a free-form label for the calendar, or %NULL
     * @param isPrimary %TRUE if this calendar is its owner's primary calendar, %FALSE otherwise
     */
    static new(uri: string, relationType: string | null, label: string | null, isPrimary: boolean): GContactCalendar
    _init(config?: GContactCalendar.ConstructorProperties): void
}

export module GContactEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactEvent

        /**
         * The date of the event.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">GContact specification</ulink>.
         */
        date?: GLib.Date | null
        /**
         * A simple string value used to name this event. It is mutually exclusive with #GDataGContactEvent:relation-type.
         * It allows UIs to display a label such as "Wedding anniversary".
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
         */
        label?: string | null
        /**
         * A programmatic value that identifies the type of event. It is mutually exclusive with #GDataGContactEvent:label.
         * Examples are %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
         */
        relationType?: string | null
    }

}

export interface GContactEvent {

    // Own properties of GData-0.0.GData.GContactEvent

    /**
     * The date of the event.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">GContact specification</ulink>.
     */
    date: GLib.Date
    /**
     * A simple string value used to name this event. It is mutually exclusive with #GDataGContactEvent:relation-type.
     * It allows UIs to display a label such as "Wedding anniversary".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of event. It is mutually exclusive with #GDataGContactEvent:label.
     * Examples are %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     */
    relationType: string

    // Own fields of GData-0.0.GData.GContactEvent

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactEvent

    /**
     * Gets the #GDataGContactEvent:date property.
     */
    getDate(): /* date */ GLib.Date
    /**
     * Gets the #GDataGContactEvent:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGContactEvent:relation-type property.
     */
    getRelationType(): string
    /**
     * Sets the #GDataGContactEvent:date property to `date`.
     * @param date the new date for the event
     */
    setDate(date: GLib.Date): void
    /**
     * Sets the #GDataGContactEvent:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactEvent is used in a query, however,
     * exactly one of #GDataGContactEvent:relation-type and #GDataGContactEvent:label must be %NULL.
     * @param label the new label for the event, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGContactEvent:relation-type property to `relation_type`
     * such as %GDATA_GCONTACT_EVENT_ANNIVERSARY or %GDATA_GCONTACT_EVENT_OTHER.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactEvent is used in a query, however,
     * exactly one of #GDataGContactEvent:relation-type and #GDataGContactEvent:label must be %NULL.
     * @param relationType the new relation type for the event, or %NULL
     */
    setRelationType(relationType: string | null): void

    // Class property signals of GData-0.0.GData.GContactEvent

    connect(sigName: "notify::date", callback: any): number
    on(sigName: "notify::date", callback: any): number
    once(sigName: "notify::date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::date", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactEvent structure are private and should never be accessed directly.
 * @class 
 */
export class GContactEvent extends Parsable {

    // Own properties of GData-0.0.GData.GContactEvent

    static name: string

    // Constructors of GData-0.0.GData.GContactEvent

    constructor(config?: GContactEvent.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactEvent. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param date the date of the event
     * @param relationType the relationship between the event and its owner, or %NULL
     * @param label a human-readable label for the event, or %NULL
     */
    constructor(date: GLib.Date, relationType: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactEvent. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcEvent">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param date the date of the event
     * @param relationType the relationship between the event and its owner, or %NULL
     * @param label a human-readable label for the event, or %NULL
     */
    static new(date: GLib.Date, relationType: string | null, label: string | null): GContactEvent
    _init(config?: GContactEvent.ConstructorProperties): void
}

export module GContactExternalID {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactExternalID

        /**
         * A free-form string that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:relation-type.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
         */
        label?: string | null
        /**
         * A programmatic value that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:label.
         * Examples are %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
         */
        relationType?: string | null
        /**
         * The value of the external ID.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
         */
        value?: string | null
    }

}

export interface GContactExternalID extends Comparable {

    // Own properties of GData-0.0.GData.GContactExternalID

    /**
     * A free-form string that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of external ID. It is mutually exclusive with #GDataGContactExternalID:label.
     * Examples are %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    relationType: string
    /**
     * The value of the external ID.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     */
    value: string

    // Own fields of GData-0.0.GData.GContactExternalID

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactExternalID

    /**
     * Gets the #GDataGContactExternalID:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGContactExternalID:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGContactExternalID:value property.
     */
    getValue(): string
    /**
     * Sets the #GDataGContactExternalID:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactExternalID is used in a query, however,
     * exactly one of #GDataGContactExternalID:relation-type and #GDataGContactExternalID:label must be %NULL.
     * @param label the new free-form label for the external ID, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGContactExternalID:relation-type property to `relation_type,`
     * such as %GDATA_GCONTACT_EXTERNAL_ID_NETWORK or %GDATA_GCONTACT_EXTERNAL_ID_ACCOUNT.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactExternalID is used in a query, however,
     * exactly one of #GDataGContactExternalID:relation-type and #GDataGContactExternalID:label must be %NULL.
     * @param relationType the new type for the external ID, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGContactExternalID:value property to `value`.
     * @param value the new value for the external ID
     */
    setValue(value: string): void

    // Class property signals of GData-0.0.GData.GContactExternalID

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactExternalID structure are private and should never be accessed directly.
 * @class 
 */
export class GContactExternalID extends Parsable {

    // Own properties of GData-0.0.GData.GContactExternalID

    static name: string

    // Constructors of GData-0.0.GData.GContactExternalID

    constructor(config?: GContactExternalID.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactExternalID. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param value the value of the external ID
     * @param relationType the type of external ID, or %NULL
     * @param label a free-form label for the external ID, or %NULL
     */
    constructor(value: string, relationType: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactExternalID. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcExternalId">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param value the value of the external ID
     * @param relationType the type of external ID, or %NULL
     * @param label a free-form label for the external ID, or %NULL
     */
    static new(value: string, relationType: string | null, label: string | null): GContactExternalID
    _init(config?: GContactExternalID.ConstructorProperties): void
}

export module GContactJot {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactJot

        /**
         * The content of the jot.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
         */
        content?: string | null
        /**
         * A programmatic value that identifies the type of jot. Examples are %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
         */
        relationType?: string | null
    }

}

export interface GContactJot {

    // Own properties of GData-0.0.GData.GContactJot

    /**
     * The content of the jot.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     */
    content: string
    /**
     * A programmatic value that identifies the type of jot. Examples are %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     */
    relationType: string

    // Own fields of GData-0.0.GData.GContactJot

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactJot

    /**
     * Gets the #GDataGContactJot:content property.
     */
    getContent(): string
    /**
     * Gets the #GDataGContactJot:relation-type property.
     */
    getRelationType(): string
    /**
     * Sets the #GDataGContactJot:content property to `content`.
     * @param content the new content
     */
    setContent(content: string): void
    /**
     * Sets the #GDataGContactJot:relation-type property to `relation_type`
     * such as %GDATA_GCONTACT_JOT_HOME or %GDATA_GCONTACT_JOT_OTHER.
     * @param relationType the new relation type for the jot, or %NULL
     */
    setRelationType(relationType: string): void

    // Class property signals of GData-0.0.GData.GContactJot

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactJot structure are private and should never be accessed directly.
 * @class 
 */
export class GContactJot extends Parsable {

    // Own properties of GData-0.0.GData.GContactJot

    static name: string

    // Constructors of GData-0.0.GData.GContactJot

    constructor(config?: GContactJot.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactJot. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     * @constructor 
     * @param content the content of the jot
     * @param relationType the relationship between the jot and its owner
     */
    constructor(content: string, relationType: string) 
    /**
     * Creates a new #GDataGContactJot. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcJot">gContact specification</ulink>.
     * @constructor 
     * @param content the content of the jot
     * @param relationType the relationship between the jot and its owner
     */
    static new(content: string, relationType: string): GContactJot
    _init(config?: GContactJot.ConstructorProperties): void
}

export module GContactLanguage {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactLanguage

        /**
         * A code identifying the language, conforming to the IETF BCP 47 specification. It is mutually exclusive with #GDataGContactLanguage:label.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
         */
        code?: string | null
        /**
         * A free-form string that identifies the language. It is mutually exclusive with #GDataGContactLanguage:code.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
         */
        label?: string | null
    }

}

export interface GContactLanguage extends Comparable {

    // Own properties of GData-0.0.GData.GContactLanguage

    /**
     * A code identifying the language, conforming to the IETF BCP 47 specification. It is mutually exclusive with #GDataGContactLanguage:label.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     */
    code: string
    /**
     * A free-form string that identifies the language. It is mutually exclusive with #GDataGContactLanguage:code.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     */
    label: string

    // Own fields of GData-0.0.GData.GContactLanguage

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactLanguage

    /**
     * Gets the #GDataGContactLanguage:code property.
     */
    getCode(): string
    /**
     * Gets the #GDataGContactLanguage:label property.
     */
    getLabel(): string
    /**
     * Sets the #GDataGContactLanguage:code property to `code`.
     * 
     * If `code` is %NULL, the code will be unset. When the #GDataGContactLanguage is used in a query, however,
     * exactly one of #GDataGContactLanguage:code and #GDataGContactLanguage:label must be %NULL.
     * @param code the new code for the language, or %NULL
     */
    setCode(code: string | null): void
    /**
     * Sets the #GDataGContactLanguage:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactLanguage is used in a query, however,
     * exactly one of #GDataGContactLanguage:code and #GDataGContactLanguage:label must be %NULL.
     * @param label the new free-form label for the language, or %NULL
     */
    setLabel(label: string | null): void

    // Class property signals of GData-0.0.GData.GContactLanguage

    connect(sigName: "notify::code", callback: any): number
    on(sigName: "notify::code", callback: any): number
    once(sigName: "notify::code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::code", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactLanguage structure are private and should never be accessed directly.
 * @class 
 */
export class GContactLanguage extends Parsable {

    // Own properties of GData-0.0.GData.GContactLanguage

    static name: string

    // Constructors of GData-0.0.GData.GContactLanguage

    constructor(config?: GContactLanguage.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactLanguage. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     * 
     * Exactly one of `code` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param code the language code, or %NULL
     * @param label a free-form label for the language, or %NULL
     */
    constructor(code: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactLanguage. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcLanguage">gContact specification</ulink>.
     * 
     * Exactly one of `code` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param code the language code, or %NULL
     * @param label a free-form label for the language, or %NULL
     */
    static new(code: string | null, label: string | null): GContactLanguage
    _init(config?: GContactLanguage.ConstructorProperties): void
}

export module GContactRelation {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactRelation

        /**
         * A free-form string that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:relation-type.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
         */
        label?: string | null
        /**
         * The name of the relation. It need not be a full name, and there need not be a contact representing the name.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
         */
        name?: string | null
        /**
         * A programmatic value that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:label.
         * Examples are %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
         */
        relationType?: string | null
    }

}

export interface GContactRelation {

    // Own properties of GData-0.0.GData.GContactRelation

    /**
     * A free-form string that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    label: string
    /**
     * The name of the relation. It need not be a full name, and there need not be a contact representing the name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    name: string
    /**
     * A programmatic value that identifies the type of relation. It is mutually exclusive with #GDataGContactRelation:label.
     * Examples are %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     */
    relationType: string

    // Own fields of GData-0.0.GData.GContactRelation

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactRelation

    /**
     * Gets the #GDataGContactRelation:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGContactRelation:name property.
     */
    getName(): string
    /**
     * Gets the #GDataGContactRelation:relation-type property.
     */
    getRelationType(): string
    /**
     * Sets the #GDataGContactRelation:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactRelation is used in a query, however,
     * exactly one of #GDataGContactRelation:relation-type and #GDataGContactRelation:label must be %NULL.
     * @param label the new free-form type for the relation, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGContactRelation:name property to `name`.
     * @param name the new name for the relation
     */
    setName(name: string | null): void
    /**
     * Sets the #GDataGContactRelation:relation-type property to `relation_type,`
     * such as %GDATA_GCONTACT_RELATION_MANAGER or %GDATA_GCONTACT_RELATION_CHILD.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactRelation is used in a query, however,
     * exactly one of #GDataGContactRelation:relation-type and #GDataGContactRelation:label must be %NULL.
     * @param relationType the new type for the relation, or %NULL
     */
    setRelationType(relationType: string | null): void

    // Class property signals of GData-0.0.GData.GContactRelation

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactRelation structure are private and should never be accessed directly.
 * @class 
 */
export class GContactRelation extends Parsable {

    // Own properties of GData-0.0.GData.GContactRelation

    static name: string

    // Constructors of GData-0.0.GData.GContactRelation

    constructor(config?: GContactRelation.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactRelation. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param name the name of the relation
     * @param relationType the type of relation, or %NULL
     * @param label a free-form label for the type of relation, or %NULL
     */
    constructor(name: string, relationType: string | null, label: string | null) 
    /**
     * Creates a new #GDataGContactRelation. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcRelation">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param name the name of the relation
     * @param relationType the type of relation, or %NULL
     * @param label a free-form label for the type of relation, or %NULL
     */
    static new(name: string, relationType: string | null, label: string | null): GContactRelation
    _init(config?: GContactRelation.ConstructorProperties): void
}

export module GContactWebsite {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GContactWebsite

        /**
         * Indicates which website out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * A simple string value used to name this website. It allows UIs to display a label such as "Work", "Travel blog", "Personal blog", etc.
         * It is mutually exclusive with #GDataGContactWebsite:relation-type.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
         */
        label?: string | null
        /**
         * A programmatic value that identifies the type of website. Examples are %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
         * It is mutually exclusive with #GDataGContactWebsite:label.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
         */
        relationType?: string | null
        /**
         * The URI of the website.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
         */
        uri?: string | null
    }

}

export interface GContactWebsite extends Comparable {

    // Own properties of GData-0.0.GData.GContactWebsite

    /**
     * Indicates which website out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    isPrimary: boolean
    /**
     * A simple string value used to name this website. It allows UIs to display a label such as "Work", "Travel blog", "Personal blog", etc.
     * It is mutually exclusive with #GDataGContactWebsite:relation-type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of website. Examples are %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
     * It is mutually exclusive with #GDataGContactWebsite:label.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    relationType: string
    /**
     * The URI of the website.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.GContactWebsite

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GContactWebsite

    /**
     * Gets the #GDataGContactWebsite:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGContactWebsite:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGContactWebsite:uri property.
     */
    getUri(): string
    /**
     * Sets the #GDataGContactWebsite:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the primary website, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGContactWebsite:label property to `label`.
     * 
     * If `label` is %NULL, the label will be unset. When the #GDataGContactWebsite is used in a query, however,
     * exactly one of #GDataGContactWebsite:relation-type and #GDataGContactWebsite:label must be %NULL.
     * @param label the new label for the website, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGContactWebsite:relation-type property to `relation_type`
     * such as %GDATA_GCONTACT_WEBSITE_HOME_PAGE or %GDATA_GCONTACT_WEBSITE_FTP.
     * 
     * If `relation_type` is %NULL, the relation type will be unset. When the #GDataGContactWebsite is used in a query, however,
     * exactly one of #GDataGContactWebsite:relation-type and #GDataGContactWebsite:label must be %NULL.
     * @param relationType the new relation type for the website
     */
    setRelationType(relationType: string): void
    /**
     * Sets the #GDataGContactWebsite:uri property to `uri`.
     * @param uri the new website URI
     */
    setUri(uri: string): void

    // Class property signals of GData-0.0.GData.GContactWebsite

    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGContactWebsite structure are private and should never be accessed directly.
 * @class 
 */
export class GContactWebsite extends Parsable {

    // Own properties of GData-0.0.GData.GContactWebsite

    static name: string

    // Constructors of GData-0.0.GData.GContactWebsite

    constructor(config?: GContactWebsite.ConstructorProperties) 
    /**
     * Creates a new #GDataGContactWebsite. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the website URI
     * @param relationType the relationship between the website and its owner, or %NULL
     * @param label a human-readable label for the website, or %NULL
     * @param isPrimary %TRUE if this website is its owner's primary website, %FALSE otherwise
     */
    constructor(uri: string, relationType: string, label: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGContactWebsite. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/contacts/docs/3.0/reference.html#gcWebsite">gContact specification</ulink>.
     * 
     * Exactly one of `relation_type` and `label` should be provided; the other must be %NULL.
     * @constructor 
     * @param uri the website URI
     * @param relationType the relationship between the website and its owner, or %NULL
     * @param label a human-readable label for the website, or %NULL
     * @param isPrimary %TRUE if this website is its owner's primary website, %FALSE otherwise
     */
    static new(uri: string, relationType: string, label: string | null, isPrimary: boolean): GContactWebsite
    _init(config?: GContactWebsite.ConstructorProperties): void
}

export module GDEmailAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDEmailAddress

        /**
         * The e-mail address itself.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
         */
        address?: string | null
        /**
         * A display name of the entity (e.g. a person) the e-mail address belongs to.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
         */
        displayName?: string | null
        /**
         * Indicates which e-mail address out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * A simple string value used to name this e-mail address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
         */
        label?: string | null
        /**
         * A programmatic value that identifies the type of e-mail address. For example: %GDATA_GD_EMAIL_ADDRESS_HOME or %GDATA_GD_EMAIL_ADDRESS_WORK.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
         */
        relationType?: string | null
    }

}

export interface GDEmailAddress extends Comparable {

    // Own properties of GData-0.0.GData.GDEmailAddress

    /**
     * The e-mail address itself.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    address: string
    /**
     * A display name of the entity (e.g. a person) the e-mail address belongs to.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    displayName: string
    /**
     * Indicates which e-mail address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    isPrimary: boolean
    /**
     * A simple string value used to name this e-mail address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    label: string
    /**
     * A programmatic value that identifies the type of e-mail address. For example: %GDATA_GD_EMAIL_ADDRESS_HOME or %GDATA_GD_EMAIL_ADDRESS_WORK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     */
    relationType: string

    // Own fields of GData-0.0.GData.GDEmailAddress

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDEmailAddress

    /**
     * Gets the #GDataGDEmailAddress:address property.
     */
    getAddress(): string
    /**
     * Gets the #GDataGDEmailAddress:display-name property.
     */
    getDisplayName(): string
    /**
     * Gets the #GDataGDEmailAddress:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGDEmailAddress:relation-type property.
     */
    getRelationType(): string
    /**
     * Sets the #GDataGDEmailAddress:address property to `address`.
     * @param address the new e-mail address
     */
    setAddress(address: string): void
    /**
     * Sets the #GDataGDEmailAddress:display-name property to `display_name`.
     * 
     * Set `display_name` to %NULL to unset the property in the e-mail address.
     * @param displayName the new display name, or %NULL
     */
    setDisplayName(displayName: string | null): void
    /**
     * Sets the #GDataGDEmailAddress:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the primary e-mail address, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGDEmailAddress:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the e-mail address.
     * @param label the new label for the e-mail address, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGDEmailAddress:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the e-mail address.
     * @param relationType the new relation type for the email_address, or %NULL
     */
    setRelationType(relationType: string | null): void

    // Class property signals of GData-0.0.GData.GDEmailAddress

    connect(sigName: "notify::address", callback: any): number
    on(sigName: "notify::address", callback: any): number
    once(sigName: "notify::address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::display-name", callback: any): number
    on(sigName: "notify::display-name", callback: any): number
    once(sigName: "notify::display-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::display-name", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDEmailAddress structure are private and should never be accessed directly.
 * @class 
 */
export class GDEmailAddress extends Parsable {

    // Own properties of GData-0.0.GData.GDEmailAddress

    static name: string

    // Constructors of GData-0.0.GData.GDEmailAddress

    constructor(config?: GDEmailAddress.ConstructorProperties) 
    /**
     * Creates a new #GDataGDEmailAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     * @constructor 
     * @param address the e-mail address
     * @param relationType the relationship between the e-mail address and its owner, or %NULL
     * @param label a human-readable label for the e-mail address, or %NULL
     * @param isPrimary %TRUE if this e-mail address is its owner's primary address, %FALSE otherwise
     */
    constructor(address: string, relationType: string | null, label: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGDEmailAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdEmail">GData specification</ulink>.
     * @constructor 
     * @param address the e-mail address
     * @param relationType the relationship between the e-mail address and its owner, or %NULL
     * @param label a human-readable label for the e-mail address, or %NULL
     * @param isPrimary %TRUE if this e-mail address is its owner's primary address, %FALSE otherwise
     */
    static new(address: string, relationType: string | null, label: string | null, isPrimary: boolean): GDEmailAddress
    _init(config?: GDEmailAddress.ConstructorProperties): void
}

export module GDIMAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDIMAddress

        /**
         * The IM address itself.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
         */
        address?: string | null
        /**
         * Indicates which IM address out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * A simple string value used to name this IM address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
         */
        label?: string | null
        /**
         * Identifies the IM network. For example: %GDATA_GD_IM_PROTOCOL_JABBER or %GDATA_GD_IM_PROTOCOL_GOOGLE_TALK.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
         */
        protocol?: string | null
        /**
         * A programmatic value that identifies the type of IM address. For example: %GDATA_GD_IM_ADDRESS_HOME or %GDATA_GD_IM_ADDRESS_WORK.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
         */
        relationType?: string | null
    }

}

export interface GDIMAddress extends Comparable {

    // Own properties of GData-0.0.GData.GDIMAddress

    /**
     * The IM address itself.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    address: string
    /**
     * Indicates which IM address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    isPrimary: boolean
    /**
     * A simple string value used to name this IM address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    label: string
    /**
     * Identifies the IM network. For example: %GDATA_GD_IM_PROTOCOL_JABBER or %GDATA_GD_IM_PROTOCOL_GOOGLE_TALK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    protocol: string
    /**
     * A programmatic value that identifies the type of IM address. For example: %GDATA_GD_IM_ADDRESS_HOME or %GDATA_GD_IM_ADDRESS_WORK.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     */
    relationType: string

    // Own fields of GData-0.0.GData.GDIMAddress

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDIMAddress

    /**
     * Gets the #GDataGDIMAddress:address property.
     */
    getAddress(): string
    /**
     * Gets the #GDataGDIMAddress:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGDIMAddress:protocol property.
     */
    getProtocol(): string
    /**
     * Gets the #GDataGDIMAddress:relation-type property.
     */
    getRelationType(): string
    /**
     * Sets the #GDataGDIMAddress:address property to `address`.
     * @param address the new IM address
     */
    setAddress(address: string): void
    /**
     * Sets the #GDataGDIMAddress:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the primary IM address, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGDIMAddress:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the IM address.
     * @param label the new label for the IM address, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGDIMAddress:protocol property to `protocol`.
     * @param protocol the new IM protocol, or %NULL
     */
    setProtocol(protocol: string | null): void
    /**
     * Sets the #GDataGDIMAddress:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the IM address.
     * @param relationType the new relation type for the im_address, or %NULL
     */
    setRelationType(relationType: string | null): void

    // Class property signals of GData-0.0.GData.GDIMAddress

    connect(sigName: "notify::address", callback: any): number
    on(sigName: "notify::address", callback: any): number
    once(sigName: "notify::address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::protocol", callback: any): number
    on(sigName: "notify::protocol", callback: any): number
    once(sigName: "notify::protocol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::protocol", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDIMAddress structure are private and should never be accessed directly.
 * @class 
 */
export class GDIMAddress extends Parsable {

    // Own properties of GData-0.0.GData.GDIMAddress

    static name: string

    // Constructors of GData-0.0.GData.GDIMAddress

    constructor(config?: GDIMAddress.ConstructorProperties) 
    /**
     * Creates a new #GDataGDIMAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     * @constructor 
     * @param address the IM address
     * @param protocol a URI identifying the IM protocol, or %NULL
     * @param relationType the relationship between the IM address and its owner, or %NULL
     * @param label a human-readable label for the IM address, or %NULL
     * @param isPrimary %TRUE if this IM address is its owner's primary address, %FALSE otherwise
     */
    constructor(address: string, protocol: string | null, relationType: string | null, label: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGDIMAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdIm">GData specification</ulink>.
     * @constructor 
     * @param address the IM address
     * @param protocol a URI identifying the IM protocol, or %NULL
     * @param relationType the relationship between the IM address and its owner, or %NULL
     * @param label a human-readable label for the IM address, or %NULL
     * @param isPrimary %TRUE if this IM address is its owner's primary address, %FALSE otherwise
     */
    static new(address: string, protocol: string | null, relationType: string | null, label: string | null, isPrimary: boolean): GDIMAddress
    _init(config?: GDIMAddress.ConstructorProperties): void
}

export module GDName {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDName

        /**
         * An additional name for the person (e.g. a middle name).
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
         */
        additionalName?: string | null
        /**
         * The person's family name.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
         */
        familyName?: string | null
        /**
         * An unstructured representation of the person's full name. It's generally advised to use the other individual properties in preference
         * to this one, which can fall out of synchronisation with the other properties.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
         */
        fullName?: string | null
        /**
         * The person's given name.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
         */
        givenName?: string | null
        /**
         * An honorific prefix (e.g. <literal>Mr</literal> or <literal>Mrs</literal>).
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
         */
        prefix?: string | null
        /**
         * An honorific suffix (e.g. <literal>san</literal> or <literal>III</literal>).
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
         */
        suffix?: string | null
    }

}

export interface GDName extends Comparable {

    // Own properties of GData-0.0.GData.GDName

    /**
     * An additional name for the person (e.g. a middle name).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    additionalName: string
    /**
     * The person's family name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    familyName: string
    /**
     * An unstructured representation of the person's full name. It's generally advised to use the other individual properties in preference
     * to this one, which can fall out of synchronisation with the other properties.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    fullName: string
    /**
     * The person's given name.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    givenName: string
    /**
     * An honorific prefix (e.g. <literal>Mr</literal> or <literal>Mrs</literal>).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    prefix: string
    /**
     * An honorific suffix (e.g. <literal>san</literal> or <literal>III</literal>).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     */
    suffix: string

    // Own fields of GData-0.0.GData.GDName

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDName

    /**
     * Gets the #GDataGDName:additional-name property.
     */
    getAdditionalName(): string
    /**
     * Gets the #GDataGDName:family-name property.
     */
    getFamilyName(): string
    /**
     * Gets the #GDataGDName:full-name property.
     */
    getFullName(): string
    /**
     * Gets the #GDataGDName:given-name property.
     */
    getGivenName(): string
    /**
     * Gets the #GDataGDName:prefix property.
     */
    getPrefix(): string
    /**
     * Gets the #GDataGDName:suffix property.
     */
    getSuffix(): string
    /**
     * Sets the #GDataGDName:additional-name property to `additional_name`.
     * @param additionalName the new additional name, or %NULL
     */
    setAdditionalName(additionalName: string | null): void
    /**
     * Sets the #GDataGDName:family-name property to `family_name`.
     * @param familyName the new family name, or %NULL
     */
    setFamilyName(familyName: string | null): void
    /**
     * Sets the #GDataGDName:full-name property to `full_name`.
     * @param fullName the new full name, or %NULL
     */
    setFullName(fullName: string | null): void
    /**
     * Sets the #GDataGDName:given-name property to `given_name`.
     * @param givenName the new given name, or %NULL
     */
    setGivenName(givenName: string | null): void
    /**
     * Sets the #GDataGDName:prefix property to `prefix`.
     * @param prefix the new prefix, or %NULL
     */
    setPrefix(prefix: string | null): void
    /**
     * Sets the #GDataGDName:suffix property to `suffix`.
     * @param suffix the new suffix, or %NULL
     */
    setSuffix(suffix: string | null): void

    // Class property signals of GData-0.0.GData.GDName

    connect(sigName: "notify::additional-name", callback: any): number
    on(sigName: "notify::additional-name", callback: any): number
    once(sigName: "notify::additional-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::additional-name", ...args: any[]): void
    connect(sigName: "notify::family-name", callback: any): number
    on(sigName: "notify::family-name", callback: any): number
    once(sigName: "notify::family-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::family-name", ...args: any[]): void
    connect(sigName: "notify::full-name", callback: any): number
    on(sigName: "notify::full-name", callback: any): number
    once(sigName: "notify::full-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::full-name", ...args: any[]): void
    connect(sigName: "notify::given-name", callback: any): number
    on(sigName: "notify::given-name", callback: any): number
    once(sigName: "notify::given-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::given-name", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::suffix", callback: any): number
    on(sigName: "notify::suffix", callback: any): number
    once(sigName: "notify::suffix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::suffix", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDName structure are private and should never be accessed directly.
 * @class 
 */
export class GDName extends Parsable {

    // Own properties of GData-0.0.GData.GDName

    static name: string

    // Constructors of GData-0.0.GData.GDName

    constructor(config?: GDName.ConstructorProperties) 
    /**
     * Creates a new #GDataGDName. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     * @constructor 
     * @param givenName the person's given name, or %NULL
     * @param familyName the person's family name, or %NULL
     */
    constructor(givenName: string | null, familyName: string | null) 
    /**
     * Creates a new #GDataGDName. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdName">GData specification</ulink>.
     * @constructor 
     * @param givenName the person's given name, or %NULL
     * @param familyName the person's family name, or %NULL
     */
    static new(givenName: string | null, familyName: string | null): GDName
    _init(config?: GDName.ConstructorProperties): void
}

export module GDOrganization {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDOrganization

        /**
         * Specifies a department within the organization.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        department?: string | null
        /**
         * Indicates which organization out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * Description of a job within the organization.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        jobDescription?: string | null
        /**
         * A simple string value used to name this organization. It allows UIs to display a label such as "Work", "Volunteer",
         * "Professional Society", etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        label?: string | null
        /**
         * A place associated with the organization, e.g. office location.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        location?: GDWhere | null
        /**
         * The name of the organization.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        name?: string | null
        /**
         * A programmatic value that identifies the type of organization. For example: %GDATA_GD_ORGANIZATION_WORK or %GDATA_GD_ORGANIZATION_OTHER.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        relationType?: string | null
        /**
         * Stock symbol of the organization.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        symbol?: string | null
        /**
         * The title of a person within the organization.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
         */
        title?: string | null
    }

}

export interface GDOrganization extends Comparable {

    // Own properties of GData-0.0.GData.GDOrganization

    /**
     * Specifies a department within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    department: string
    /**
     * Indicates which organization out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    isPrimary: boolean
    /**
     * Description of a job within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    jobDescription: string
    /**
     * A simple string value used to name this organization. It allows UIs to display a label such as "Work", "Volunteer",
     * "Professional Society", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    label: string
    /**
     * A place associated with the organization, e.g. office location.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    location: GDWhere
    /**
     * The name of the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    name: string
    /**
     * A programmatic value that identifies the type of organization. For example: %GDATA_GD_ORGANIZATION_WORK or %GDATA_GD_ORGANIZATION_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    relationType: string
    /**
     * Stock symbol of the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    symbol: string
    /**
     * The title of a person within the organization.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     */
    title: string

    // Own fields of GData-0.0.GData.GDOrganization

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDOrganization

    /**
     * Gets the #GDataGDOrganization:department property.
     */
    getDepartment(): string
    /**
     * Gets the #GDataGDOrganization:job-description property.
     */
    getJobDescription(): string
    /**
     * Gets the #GDataGDOrganization:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGDOrganization:location property.
     */
    getLocation(): GDWhere
    /**
     * Gets the #GDataGDOrganization:name property.
     */
    getName(): string
    /**
     * Gets the #GDataGDOrganization:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGDOrganization:symbol property.
     */
    getSymbol(): string
    /**
     * Gets the #GDataGDOrganization:title property.
     */
    getTitle(): string
    /**
     * Sets the #GDataGDOrganization:department property to `department`.
     * 
     * Set `department` to %NULL to unset the property in the organization.
     * @param department the new department for the person working in the organization, or %NULL
     */
    setDepartment(department: string | null): void
    /**
     * Sets the #GDataGDOrganization:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the primary organization, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGDOrganization:job-description property to `job_description`.
     * 
     * Set `job_description` to %NULL to unset the property in the organization.
     * @param jobDescription the new job description for the person in the organization, or %NULL
     */
    setJobDescription(jobDescription: string | null): void
    /**
     * Sets the #GDataGDOrganization:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the organization.
     * @param label the new label for the organization, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGDOrganization:location property to `location`.
     * 
     * Set `location` to %NULL to unset the property in the organization.
     * @param location the new location for the organization, or %NULL
     */
    setLocation(location: GDWhere | null): void
    /**
     * Sets the #GDataGDOrganization:name property to `name`.
     * 
     * Set `name` to %NULL to unset the property in the organization.
     * @param name the new name for the organization, or %NULL
     */
    setName(name: string | null): void
    /**
     * Sets the #GDataGDOrganization:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the organization.
     * @param relationType the new relation type for the organization, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGDOrganization:symbol property to `symbol`.
     * 
     * Set `symbol` to %NULL to unset the property in the organization.
     * @param symbol the new stock symbol for the organization, or %NULL
     */
    setSymbol(symbol: string | null): void
    /**
     * Sets the #GDataGDOrganization:title property to `title`.
     * 
     * Set `title` to %NULL to unset the property in the organization.
     * @param title the new title for the organization, or %NULL
     */
    setTitle(title: string | null): void

    // Class property signals of GData-0.0.GData.GDOrganization

    connect(sigName: "notify::department", callback: any): number
    on(sigName: "notify::department", callback: any): number
    once(sigName: "notify::department", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::department", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::job-description", callback: any): number
    on(sigName: "notify::job-description", callback: any): number
    once(sigName: "notify::job-description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::job-description", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::symbol", callback: any): number
    on(sigName: "notify::symbol", callback: any): number
    once(sigName: "notify::symbol", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::symbol", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDOrganization structure are private and should never be accessed directly.
 * @class 
 */
export class GDOrganization extends Parsable {

    // Own properties of GData-0.0.GData.GDOrganization

    static name: string

    // Constructors of GData-0.0.GData.GDOrganization

    constructor(config?: GDOrganization.ConstructorProperties) 
    /**
     * Creates a new #GDataGDOrganization. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     * @constructor 
     * @param name the name of the organization, or %NULL
     * @param title the owner's title within the organization, or %NULL
     * @param relationType the relationship between the organization and its owner, or %NULL
     * @param label a human-readable label for the organization, or %NULL
     * @param isPrimary %TRUE if this organization is its owner's primary organization, %FALSE otherwise
     */
    constructor(name: string | null, title: string | null, relationType: string | null, label: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGDOrganization. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdOrganization">GData specification</ulink>.
     * @constructor 
     * @param name the name of the organization, or %NULL
     * @param title the owner's title within the organization, or %NULL
     * @param relationType the relationship between the organization and its owner, or %NULL
     * @param label a human-readable label for the organization, or %NULL
     * @param isPrimary %TRUE if this organization is its owner's primary organization, %FALSE otherwise
     */
    static new(name: string | null, title: string | null, relationType: string | null, label: string | null, isPrimary: boolean): GDOrganization
    _init(config?: GDOrganization.ConstructorProperties): void
}

export module GDPhoneNumber {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDPhoneNumber

        /**
         * Indicates which phone number out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * A simple string value used to name this phone number. It allows UIs to display a label such as "Mobile", "Home", "Work", etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
         */
        label?: string | null
        /**
         * Human-readable phone number; may be in any telephone number format.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
         */
        number?: string | null
        /**
         * A programmatic value that identifies the type of phone number. For example: %GDATA_GD_PHONE_NUMBER_WORK or %GDATA_GD_PHONE_NUMBER_PAGER.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
         */
        relationType?: string | null
        /**
         * An optional "tel URI" used to represent the number in a formal way. Useful for programmatic access, such as a VoIP/PSTN bridge.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
         */
        uri?: string | null
    }

}

export interface GDPhoneNumber extends Comparable {

    // Own properties of GData-0.0.GData.GDPhoneNumber

    /**
     * Indicates which phone number out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    isPrimary: boolean
    /**
     * A simple string value used to name this phone number. It allows UIs to display a label such as "Mobile", "Home", "Work", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    label: string
    /**
     * Human-readable phone number; may be in any telephone number format.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    number: string
    /**
     * A programmatic value that identifies the type of phone number. For example: %GDATA_GD_PHONE_NUMBER_WORK or %GDATA_GD_PHONE_NUMBER_PAGER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    relationType: string
    /**
     * An optional "tel URI" used to represent the number in a formal way. Useful for programmatic access, such as a VoIP/PSTN bridge.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.GDPhoneNumber

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDPhoneNumber

    /**
     * Gets the #GDataGDPhoneNumber:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGDPhoneNumber:number property.
     */
    getNumber(): string
    /**
     * Gets the #GDataGDPhoneNumber:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGDPhoneNumber:uri property.
     */
    getUri(): string
    /**
     * Sets the #GDataGDPhoneNumber:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the primary phone number, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGDPhoneNumber:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the phone number.
     * @param label the new label for the phone number, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGDPhoneNumber:number property to `number`.
     * @param number the new phone number
     */
    setNumber(number: string): void
    /**
     * Sets the #GDataGDPhoneNumber:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the phone number.
     * @param relationType the new relation type for the phone number, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGDPhoneNumber:uri property to `uri`.
     * 
     * Set `uri` to %NULL to unset the property in the phone number.
     * @param uri the new URI for the phone number, or %NULL
     */
    setUri(uri: string | null): void

    // Class property signals of GData-0.0.GData.GDPhoneNumber

    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::number", callback: any): number
    on(sigName: "notify::number", callback: any): number
    once(sigName: "notify::number", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::number", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDPhoneNumber structure are private and should never be accessed directly.
 * @class 
 */
export class GDPhoneNumber extends Parsable {

    // Own properties of GData-0.0.GData.GDPhoneNumber

    static name: string

    // Constructors of GData-0.0.GData.GDPhoneNumber

    constructor(config?: GDPhoneNumber.ConstructorProperties) 
    /**
     * Creates a new #GDataGDPhoneNumber. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     * @constructor 
     * @param number the phone number, in human-readable format
     * @param relationType the relationship between the phone number and its owner, or %NULL
     * @param label a human-readable label for the phone number, or %NULL
     * @param uri a "tel URI" to represent the number formally (see <ulink type="http" url="http://www.ietf.org/rfc/rfc3966.txt">RFC 3966</ulink>), or %NULL
     * @param isPrimary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    constructor(number: string, relationType: string | null, label: string | null, uri: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGDPhoneNumber. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdPhoneNumber">GData specification</ulink>.
     * @constructor 
     * @param number the phone number, in human-readable format
     * @param relationType the relationship between the phone number and its owner, or %NULL
     * @param label a human-readable label for the phone number, or %NULL
     * @param uri a "tel URI" to represent the number formally (see <ulink type="http" url="http://www.ietf.org/rfc/rfc3966.txt">RFC 3966</ulink>), or %NULL
     * @param isPrimary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    static new(number: string, relationType: string | null, label: string | null, uri: string | null, isPrimary: boolean): GDPhoneNumber
    _init(config?: GDPhoneNumber.ConstructorProperties): void
}

export module GDPostalAddress {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDPostalAddress

        /**
         * The postal address itself, formatted and unstructured. It is preferred to use the other, structured properties rather than this one.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        address?: string | null
        /**
         * The agent who actually receives the mail. Used in work addresses. Also for "in care of" or "c/o".
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        agent?: string | null
        /**
         * Can be city, village, town, borough, etc. This is the postal town and not necessarily the place of residence or place of business.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        city?: string | null
        /**
         * Used in places where houses or buildings have names (and not necessarily numbers).
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        houseName?: string | null
        /**
         * Indicates which postal address out of a group is primary.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        isPrimary?: boolean | null
        /**
         * A simple string value used to name this postal address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        label?: string | null
        /**
         * Classes of mail accepted at this address. For example: %GDATA_GD_MAIL_CLASS_LETTERS or %GDATA_GD_MAIL_CLASS_BOTH.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        mailClass?: string | null
        /**
         * This is used to disambiguate a street address when a city contains more than one street with the same name, or to specify a small place
         * whose mail is routed through a larger postal town. In China it could be a county or a minor city.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        neighborhood?: string | null
        /**
         * Covers actual P.O. boxes, drawers, locked bags, etc. This is usually but not always mutually exclusive with #GDataGDPostalAddress:street.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        poBox?: string | null
        /**
         * Postal code. Usually country-wide, but sometimes specific to the city (e.g. "2" in "Dublin 2, Ireland" addresses).
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        postcode?: string | null
        /**
         * A state, province, county (in Ireland), Land (in Germany), departement (in France), etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        region?: string | null
        /**
         * A programmatic value that identifies the type of postal address. For example: %GDATA_GD_POSTAL_ADDRESS_WORK or
         * %GDATA_GD_POSTAL_ADDRESS_OTHER.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        relationType?: string | null
        /**
         * Can be street, avenue, road, etc. This element also includes the house number and room/apartment/flat/floor number.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        street?: string | null
        /**
         * Handles administrative districts such as U.S. or U.K. counties that are not used for mail addressing purposes.
         * Subregion is not intended for delivery addresses.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        subregion?: string | null
        /**
         * The context in which this address can be used. For example: %GDATA_GD_ADDRESS_USAGE_GENERAL or %GDATA_GD_ADDRESS_USAGE_LOCAL.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
         */
        usage?: string | null
    }

}

export interface GDPostalAddress extends Comparable {

    // Own properties of GData-0.0.GData.GDPostalAddress

    /**
     * The postal address itself, formatted and unstructured. It is preferred to use the other, structured properties rather than this one.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    address: string
    /**
     * The agent who actually receives the mail. Used in work addresses. Also for "in care of" or "c/o".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    agent: string
    /**
     * Can be city, village, town, borough, etc. This is the postal town and not necessarily the place of residence or place of business.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    city: string
    /**
     * The name of the country. Since this is paired with #GDataGDPostalAddress:country-code, they must both be set with
     * gdata_gd_postal_address_set_country().
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    readonly country: string
    /**
     * The ISO 3166-1 alpha-2 country code for the country in #GDataGDPostalAddress:country. Since this is paired with
     * #GDataGDPostalAddress:country, they must both be set with gdata_gd_postal_address_set_country().
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>
     * or <ulink type="http" url="http://www.iso.org/iso/iso-3166-1_decoding_table">ISO 3166-1 alpha-2</ulink>.
     */
    readonly countryCode: string
    /**
     * Used in places where houses or buildings have names (and not necessarily numbers).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    houseName: string
    /**
     * Indicates which postal address out of a group is primary.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    isPrimary: boolean
    /**
     * A simple string value used to name this postal address. It allows UIs to display a label such as "Work", "Personal", "Preferred", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    label: string
    /**
     * Classes of mail accepted at this address. For example: %GDATA_GD_MAIL_CLASS_LETTERS or %GDATA_GD_MAIL_CLASS_BOTH.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    mailClass: string
    /**
     * This is used to disambiguate a street address when a city contains more than one street with the same name, or to specify a small place
     * whose mail is routed through a larger postal town. In China it could be a county or a minor city.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    neighborhood: string
    /**
     * Covers actual P.O. boxes, drawers, locked bags, etc. This is usually but not always mutually exclusive with #GDataGDPostalAddress:street.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    poBox: string
    /**
     * Postal code. Usually country-wide, but sometimes specific to the city (e.g. "2" in "Dublin 2, Ireland" addresses).
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    postcode: string
    /**
     * A state, province, county (in Ireland), Land (in Germany), departement (in France), etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    region: string
    /**
     * A programmatic value that identifies the type of postal address. For example: %GDATA_GD_POSTAL_ADDRESS_WORK or
     * %GDATA_GD_POSTAL_ADDRESS_OTHER.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    relationType: string
    /**
     * Can be street, avenue, road, etc. This element also includes the house number and room/apartment/flat/floor number.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    street: string
    /**
     * Handles administrative districts such as U.S. or U.K. counties that are not used for mail addressing purposes.
     * Subregion is not intended for delivery addresses.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    subregion: string
    /**
     * The context in which this address can be used. For example: %GDATA_GD_ADDRESS_USAGE_GENERAL or %GDATA_GD_ADDRESS_USAGE_LOCAL.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     */
    usage: string

    // Own fields of GData-0.0.GData.GDPostalAddress

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDPostalAddress

    /**
     * Gets the #GDataGDPostalAddress:address property.
     */
    getAddress(): string
    /**
     * Gets the #GDataGDPostalAddress:agent property.
     */
    getAgent(): string
    /**
     * Gets the #GDataGDPostalAddress:city property.
     */
    getCity(): string
    /**
     * Gets the #GDataGDPostalAddress:country property.
     */
    getCountry(): string
    /**
     * Gets the #GDataGDPostalAddress:country-code property.
     */
    getCountryCode(): string
    /**
     * Gets the #GDataGDPostalAddress:house-name property.
     */
    getHouseName(): string
    /**
     * Gets the #GDataGDPostalAddress:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGDPostalAddress:mail-class property.
     */
    getMailClass(): string
    /**
     * Gets the #GDataGDPostalAddress:neighborhood property.
     */
    getNeighborhood(): string
    /**
     * Gets the #GDataGDPostalAddress:po-box property.
     */
    getPoBox(): string
    /**
     * Gets the #GDataGDPostalAddress:postcode property.
     */
    getPostcode(): string
    /**
     * Gets the #GDataGDPostalAddress:region property.
     */
    getRegion(): string
    /**
     * Gets the #GDataGDPostalAddress:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGDPostalAddress:street property.
     */
    getStreet(): string
    /**
     * Gets the #GDataGDPostalAddress:subregion property.
     */
    getSubregion(): string
    /**
     * Gets the #GDataGDPostalAddress:usage property.
     */
    getUsage(): string
    /**
     * Sets the #GDataGDPostalAddress:address property to `address`.
     * @param address the new postal address, or %NULL
     */
    setAddress(address: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:agent property to `agent`.
     * 
     * Set `agent` to %NULL to unset the property in the postal address.
     * @param agent the new agent for the postal address, or %NULL
     */
    setAgent(agent: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:city property to `city`.
     * 
     * Set `city` to %NULL to unset the property in the postal address.
     * @param city the new city for the postal address, or %NULL
     */
    setCity(city: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:country property to `country,` and #GDataGDPostalAddress:country-code to `country_code`.
     * 
     * Set `country` or `country_code` to %NULL to unset the relevant property in the postal address. If a `country_code` is provided, a `country` must
     * also be provided.
     * @param country the new country for the postal address, or %NULL
     * @param countryCode the new country code for the postal address, or %NULL
     */
    setCountry(country: string | null, countryCode: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:house-name property to `house_name`.
     * 
     * Set `house_name` to %NULL to unset the property in the postal address.
     * @param houseName the new house name for the postal address, or %NULL
     */
    setHouseName(houseName: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:is-primary property to `is_primary`.
     * @param isPrimary %TRUE if this is the primary postal address, %FALSE otherwise
     */
    setIsPrimary(isPrimary: boolean): void
    /**
     * Sets the #GDataGDPostalAddress:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property in the postal address.
     * @param label the new label for the postal address, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:mail-class property to `mail_class`.
     * 
     * Set `mail_class` to %NULL to unset the property in the postal address.
     * @param mailClass the new mail class for the postal address, or %NULL
     */
    setMailClass(mailClass: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:neighborhood property to `neighborhood`.
     * 
     * Set `neighborhood` to %NULL to unset the property in the postal address.
     * @param neighborhood the new neighborhood for the postal address, or %NULL
     */
    setNeighborhood(neighborhood: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:po-box property to `po_box`.
     * 
     * Set `po_box` to %NULL to unset the property in the postal address.
     * @param poBox the new P.O. box for the postal address, or %NULL
     */
    setPoBox(poBox: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:postcode property to `postcode`.
     * 
     * Set `postcode` to %NULL to unset the property in the postal address.
     * @param postcode the new postcode for the postal address, or %NULL
     */
    setPostcode(postcode: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:region property to `region`.
     * 
     * Set `region` to %NULL to unset the property in the postal address.
     * @param region the new region for the postal address, or %NULL
     */
    setRegion(region: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property in the postal address.
     * @param relationType the new relation type for the postal_address, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:street property to `street`.
     * 
     * Set `street` to %NULL to unset the property in the postal address.
     * @param street the new street for the postal address, or %NULL
     */
    setStreet(street: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:subregion property to `subregion`.
     * 
     * Set `subregion` to %NULL to unset the property in the postal address.
     * @param subregion the new subregion for the postal address, or %NULL
     */
    setSubregion(subregion: string | null): void
    /**
     * Sets the #GDataGDPostalAddress:usage property to `usage`.
     * 
     * Set `usage` to %NULL to unset the property in the postal address.
     * @param usage the new usage for the postal address, or %NULL
     */
    setUsage(usage: string | null): void

    // Class property signals of GData-0.0.GData.GDPostalAddress

    connect(sigName: "notify::address", callback: any): number
    on(sigName: "notify::address", callback: any): number
    once(sigName: "notify::address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::address", ...args: any[]): void
    connect(sigName: "notify::agent", callback: any): number
    on(sigName: "notify::agent", callback: any): number
    once(sigName: "notify::agent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::agent", ...args: any[]): void
    connect(sigName: "notify::city", callback: any): number
    on(sigName: "notify::city", callback: any): number
    once(sigName: "notify::city", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::city", ...args: any[]): void
    connect(sigName: "notify::country", callback: any): number
    on(sigName: "notify::country", callback: any): number
    once(sigName: "notify::country", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::country", ...args: any[]): void
    connect(sigName: "notify::country-code", callback: any): number
    on(sigName: "notify::country-code", callback: any): number
    once(sigName: "notify::country-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::country-code", ...args: any[]): void
    connect(sigName: "notify::house-name", callback: any): number
    on(sigName: "notify::house-name", callback: any): number
    once(sigName: "notify::house-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::house-name", ...args: any[]): void
    connect(sigName: "notify::is-primary", callback: any): number
    on(sigName: "notify::is-primary", callback: any): number
    once(sigName: "notify::is-primary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-primary", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::mail-class", callback: any): number
    on(sigName: "notify::mail-class", callback: any): number
    once(sigName: "notify::mail-class", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mail-class", ...args: any[]): void
    connect(sigName: "notify::neighborhood", callback: any): number
    on(sigName: "notify::neighborhood", callback: any): number
    once(sigName: "notify::neighborhood", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::neighborhood", ...args: any[]): void
    connect(sigName: "notify::po-box", callback: any): number
    on(sigName: "notify::po-box", callback: any): number
    once(sigName: "notify::po-box", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::po-box", ...args: any[]): void
    connect(sigName: "notify::postcode", callback: any): number
    on(sigName: "notify::postcode", callback: any): number
    once(sigName: "notify::postcode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::postcode", ...args: any[]): void
    connect(sigName: "notify::region", callback: any): number
    on(sigName: "notify::region", callback: any): number
    once(sigName: "notify::region", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::region", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::street", callback: any): number
    on(sigName: "notify::street", callback: any): number
    once(sigName: "notify::street", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::street", ...args: any[]): void
    connect(sigName: "notify::subregion", callback: any): number
    on(sigName: "notify::subregion", callback: any): number
    once(sigName: "notify::subregion", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subregion", ...args: any[]): void
    connect(sigName: "notify::usage", callback: any): number
    on(sigName: "notify::usage", callback: any): number
    once(sigName: "notify::usage", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::usage", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDPostalAddress structure are private and should never be accessed directly.
 * @class 
 */
export class GDPostalAddress extends Parsable {

    // Own properties of GData-0.0.GData.GDPostalAddress

    static name: string

    // Constructors of GData-0.0.GData.GDPostalAddress

    constructor(config?: GDPostalAddress.ConstructorProperties) 
    /**
     * Creates a new #GDataGDPostalAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     * @constructor 
     * @param relationType the relationship between the address and its owner, or %NULL
     * @param label a human-readable label for the address, or %NULL
     * @param isPrimary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    constructor(relationType: string | null, label: string | null, isPrimary: boolean) 
    /**
     * Creates a new #GDataGDPostalAddress. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdStructuredPostalAddress">GData specification</ulink>.
     * @constructor 
     * @param relationType the relationship between the address and its owner, or %NULL
     * @param label a human-readable label for the address, or %NULL
     * @param isPrimary %TRUE if this phone number is its owner's primary number, %FALSE otherwise
     */
    static new(relationType: string | null, label: string | null, isPrimary: boolean): GDPostalAddress
    _init(config?: GDPostalAddress.ConstructorProperties): void
}

export module GDReminder {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDReminder

        /**
         * Absolute time at which the reminder should be issued.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
         */
        absoluteTime?: number | null
        /**
         * The notification method the reminder should use. For example: %GDATA_GD_REMINDER_ALERT or %GDATA_GD_REMINDER_EMAIL.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
         */
        method?: string | null
        /**
         * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
         */
        relativeTime?: number | null
    }

}

export interface GDReminder extends Comparable {

    // Own properties of GData-0.0.GData.GDReminder

    /**
     * Absolute time at which the reminder should be issued.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    absoluteTime: number
    /**
     * Whether the reminder is specified as an absolute or relative time.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    readonly isAbsoluteTime: boolean
    /**
     * The notification method the reminder should use. For example: %GDATA_GD_REMINDER_ALERT or %GDATA_GD_REMINDER_EMAIL.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    method: string
    /**
     * Time at which the reminder should be issued, in minutes relative to the start time of the corresponding event.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     */
    relativeTime: number

    // Own fields of GData-0.0.GData.GDReminder

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDReminder

    /**
     * Gets the #GDataGDReminder:absolute-time property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getAbsoluteTime(): number
    /**
     * Gets the #GDataGDReminder:method property.
     */
    getMethod(): string
    /**
     * Gets the #GDataGDReminder:relative-time property.
     */
    getRelativeTime(): number
    /**
     * Sets the #GDataGDReminder:absolute-time property to `absolute_time`.
     * 
     * Set `absolute_time` to <code class="literal">-1</code> to unset the property.
     * @param absoluteTime the new absolute time, or <code class="literal">-1</code>
     */
    setAbsoluteTime(absoluteTime: number): void
    /**
     * Sets the #GDataGDReminder:method property to `method`.
     * 
     * Set `method` to %NULL to unset the property.
     * @param method the new method, or %NULL
     */
    setMethod(method: string | null): void
    /**
     * Sets the #GDataGDReminder:relative-time property to `relative_time`.
     * 
     * Set `relative_time` to <code class="literal">-1</code> to unset the property.
     * @param relativeTime the new relative time, or <code class="literal">-1</code>
     */
    setRelativeTime(relativeTime: number): void

    // Class property signals of GData-0.0.GData.GDReminder

    connect(sigName: "notify::absolute-time", callback: any): number
    on(sigName: "notify::absolute-time", callback: any): number
    once(sigName: "notify::absolute-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::absolute-time", ...args: any[]): void
    connect(sigName: "notify::is-absolute-time", callback: any): number
    on(sigName: "notify::is-absolute-time", callback: any): number
    once(sigName: "notify::is-absolute-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-absolute-time", ...args: any[]): void
    connect(sigName: "notify::method", callback: any): number
    on(sigName: "notify::method", callback: any): number
    once(sigName: "notify::method", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::relative-time", callback: any): number
    on(sigName: "notify::relative-time", callback: any): number
    once(sigName: "notify::relative-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relative-time", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDReminder structure are private and should never be accessed directly.
 * @class 
 */
export class GDReminder extends Parsable {

    // Own properties of GData-0.0.GData.GDReminder

    static name: string

    // Constructors of GData-0.0.GData.GDReminder

    constructor(config?: GDReminder.ConstructorProperties) 
    /**
     * Creates a new #GDataGDReminder. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     * @constructor 
     * @param method the notification method the reminder should use, or %NULL
     * @param absoluteTime the absolute time for the reminder, or <code class="literal">-1</code>
     * @param relativeTime the relative time for the reminder, in minutes, or <code class="literal">-1</code>
     */
    constructor(method: string | null, absoluteTime: number, relativeTime: number) 
    /**
     * Creates a new #GDataGDReminder. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdReminder">GData specification</ulink>.
     * @constructor 
     * @param method the notification method the reminder should use, or %NULL
     * @param absoluteTime the absolute time for the reminder, or <code class="literal">-1</code>
     * @param relativeTime the relative time for the reminder, in minutes, or <code class="literal">-1</code>
     */
    static new(method: string | null, absoluteTime: number, relativeTime: number): GDReminder
    _init(config?: GDReminder.ConstructorProperties): void
}

export module GDWhen {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDWhen

        /**
         * The title of a person within the when.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
         */
        endTime?: number | null
        /**
         * A programmatic value that identifies the type of when.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
         */
        isDate?: boolean | null
        /**
         * The name of the when.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
         */
        startTime?: number | null
        /**
         * A simple string value used to name this when. It allows UIs to display a label such as "Work", "Volunteer",
         * "Professional Society", etc.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
         */
        valueString?: string | null
    }

}

export interface GDWhen extends Comparable {

    // Own properties of GData-0.0.GData.GDWhen

    /**
     * The title of a person within the when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    endTime: number
    /**
     * A programmatic value that identifies the type of when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    isDate: boolean
    /**
     * The name of the when.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    startTime: number
    /**
     * A simple string value used to name this when. It allows UIs to display a label such as "Work", "Volunteer",
     * "Professional Society", etc.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     */
    valueString: string

    // Own fields of GData-0.0.GData.GDWhen

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDWhen

    /**
     * Adds a reminder to the #GDataGDWhen's list of reminders and increments its reference count.
     * 
     * Duplicate reminders will not be added to the list.
     * @param reminder a #GDataGDReminder to add
     */
    addReminder(reminder: GDReminder): void
    /**
     * Gets the #GDataGDWhen:end-time property.
     * 
     * If the end time is unset, <code class="literal">-1</code> will be returned.
     */
    getEndTime(): number
    /**
     * Returns a list of the #GDataGDReminders which are associated with this #GDataGDWhen.
     */
    getReminders(): GDReminder[]
    /**
     * Gets the #GDataGDWhen:start-time property.
     */
    getStartTime(): number
    /**
     * Gets the #GDataGDWhen:value-string property.
     */
    getValueString(): string
    /**
     * Sets the #GDataGDWhen:end-time property to `end_time`.
     * 
     * Set `end_time` to <code class="literal">-1</code> to unset the property.
     * @param endTime the new end time, or <code class="literal">-1</code>
     */
    setEndTime(endTime: number): void
    /**
     * Sets the #GDataGDWhen:is-date property to `is_date`.
     * @param isDate %TRUE if #GDataGDWhen:start-time and #GDataGDWhen:end-time should be dates rather than times, %FALSE otherwise
     */
    setIsDate(isDate: boolean): void
    /**
     * Sets the #GDataGDWhen:start-time property to `start_time`.
     * @param startTime the new start time
     */
    setStartTime(startTime: number): void
    /**
     * Sets the #GDataGDWhen:value-string property to `value_string`.
     * 
     * Set `value_string` to %NULL to unset the property.
     * @param valueString the new value string, or %NULL
     */
    setValueString(valueString: string | null): void

    // Class property signals of GData-0.0.GData.GDWhen

    connect(sigName: "notify::end-time", callback: any): number
    on(sigName: "notify::end-time", callback: any): number
    once(sigName: "notify::end-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-time", ...args: any[]): void
    connect(sigName: "notify::is-date", callback: any): number
    on(sigName: "notify::is-date", callback: any): number
    once(sigName: "notify::is-date", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-date", ...args: any[]): void
    connect(sigName: "notify::start-time", callback: any): number
    on(sigName: "notify::start-time", callback: any): number
    once(sigName: "notify::start-time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-time", ...args: any[]): void
    connect(sigName: "notify::value-string", callback: any): number
    on(sigName: "notify::value-string", callback: any): number
    once(sigName: "notify::value-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-string", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDWhen structure are private and should never be accessed directly.
 * @class 
 */
export class GDWhen extends Parsable {

    // Own properties of GData-0.0.GData.GDWhen

    static name: string

    // Constructors of GData-0.0.GData.GDWhen

    constructor(config?: GDWhen.ConstructorProperties) 
    /**
     * Creates a new #GDataGDWhen. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     * @constructor 
     * @param startTime when the event starts or (for zero-duration events) when it occurs
     * @param endTime when the event ends, or <code class="literal">-1</code>
     * @param isDate %TRUE if `start_time` and `end_time` specify dates rather than times, %FALSE otherwise
     */
    constructor(startTime: number, endTime: number, isDate: boolean) 
    /**
     * Creates a new #GDataGDWhen. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhen">GData specification</ulink>.
     * @constructor 
     * @param startTime when the event starts or (for zero-duration events) when it occurs
     * @param endTime when the event ends, or <code class="literal">-1</code>
     * @param isDate %TRUE if `start_time` and `end_time` specify dates rather than times, %FALSE otherwise
     */
    static new(startTime: number, endTime: number, isDate: boolean): GDWhen
    _init(config?: GDWhen.ConstructorProperties): void
}

export module GDWhere {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDWhere

        /**
         * Specifies a user-readable label to distinguish this location from others.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
         */
        label?: string | null
        /**
         * Specifies the relationship between the containing entity and the contained location. For example: %GDATA_GD_WHERE_EVENT or
         * %GDATA_GD_WHERE_EVENT_PARKING.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
         */
        relationType?: string | null
        /**
         * A simple string representation of this location.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
         */
        valueString?: string | null
    }

}

export interface GDWhere extends Comparable {

    // Own properties of GData-0.0.GData.GDWhere

    /**
     * Specifies a user-readable label to distinguish this location from others.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    label: string
    /**
     * Specifies the relationship between the containing entity and the contained location. For example: %GDATA_GD_WHERE_EVENT or
     * %GDATA_GD_WHERE_EVENT_PARKING.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    relationType: string
    /**
     * A simple string representation of this location.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     */
    valueString: string

    // Own fields of GData-0.0.GData.GDWhere

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDWhere

    /**
     * Gets the #GDataGDWhere:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataGDWhere:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGDWhere:value-string property.
     */
    getValueString(): string
    /**
     * Sets the #GDataGDWhere:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property.
     * @param label the new label, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataGDWhere:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property.
     * @param relationType the new relation type, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGDWhere:value-string property to `value_string`.
     * 
     * Set `value_string` to %NULL to unset the property.
     * @param valueString the new value string, or %NULL
     */
    setValueString(valueString: string | null): void

    // Class property signals of GData-0.0.GData.GDWhere

    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::value-string", callback: any): number
    on(sigName: "notify::value-string", callback: any): number
    once(sigName: "notify::value-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-string", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDWhere structure are private and should never be accessed directly.
 * @class 
 */
export class GDWhere extends Parsable {

    // Own properties of GData-0.0.GData.GDWhere

    static name: string

    // Constructors of GData-0.0.GData.GDWhere

    constructor(config?: GDWhere.ConstructorProperties) 
    /**
     * Creates a new #GDataGDWhere. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWhere.
     * @constructor 
     * @param relationType the relationship between the item and this place, or %NULL
     * @param valueString a string to represent the place, or %NULL
     * @param label a human-readable label for the place, or %NULL
     */
    constructor(relationType: string | null, valueString: string | null, label: string | null) 
    /**
     * Creates a new #GDataGDWhere. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWhere">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWhere.
     * @constructor 
     * @param relationType the relationship between the item and this place, or %NULL
     * @param valueString a string to represent the place, or %NULL
     * @param label a human-readable label for the place, or %NULL
     */
    static new(relationType: string | null, valueString: string | null, label: string | null): GDWhere
    _init(config?: GDWhere.ConstructorProperties): void
}

export module GDWho {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GDWho

        /**
         * The e-mail address of the person represented by the #GDataGDWho.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
         */
        emailAddress?: string | null
        /**
         * Specifies the relationship between the containing entity and the contained person. For example: %GDATA_GD_WHO_EVENT_PERFORMER or
         * %GDATA_GD_WHO_EVENT_ATTENDEE.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
         */
        relationType?: string | null
        /**
         * A simple string representation of this person.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
         */
        valueString?: string | null
    }

}

export interface GDWho extends Comparable {

    // Own properties of GData-0.0.GData.GDWho

    /**
     * The e-mail address of the person represented by the #GDataGDWho.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    emailAddress: string
    /**
     * Specifies the relationship between the containing entity and the contained person. For example: %GDATA_GD_WHO_EVENT_PERFORMER or
     * %GDATA_GD_WHO_EVENT_ATTENDEE.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    relationType: string
    /**
     * A simple string representation of this person.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     */
    valueString: string

    // Own fields of GData-0.0.GData.GDWho

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.GDWho

    /**
     * Gets the #GDataGDWho:email-address property.
     */
    getEmailAddress(): string
    /**
     * Gets the #GDataGDWho:relation-type property.
     */
    getRelationType(): string
    /**
     * Gets the #GDataGDWho:value-string property.
     */
    getValueString(): string
    /**
     * Sets the #GDataGDWho:email-address property to `email_address`.
     * 
     * Set `email_address` to %NULL to unset the property.
     * @param emailAddress the new e-mail address, or %NULL
     */
    setEmailAddress(emailAddress: string | null): void
    /**
     * Sets the #GDataGDWho:relation-type property to `relation_type`.
     * 
     * Set `relation_type` to %NULL to unset the property.
     * @param relationType the new relation type, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataGDWho:value-string property to `value_string`.
     * 
     * Set `value_string` to %NULL to unset the property.
     * @param valueString the new value string, or %NULL
     */
    setValueString(valueString: string | null): void

    // Class property signals of GData-0.0.GData.GDWho

    connect(sigName: "notify::email-address", callback: any): number
    on(sigName: "notify::email-address", callback: any): number
    once(sigName: "notify::email-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::email-address", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::value-string", callback: any): number
    on(sigName: "notify::value-string", callback: any): number
    once(sigName: "notify::value-string", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value-string", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGDWho structure are private and should never be accessed directly.
 * @class 
 */
export class GDWho extends Parsable {

    // Own properties of GData-0.0.GData.GDWho

    static name: string

    // Constructors of GData-0.0.GData.GDWho

    constructor(config?: GDWho.ConstructorProperties) 
    /**
     * Creates a new #GDataGDWho. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWho.
     * @constructor 
     * @param relationType the relationship between the item and this person, or %NULL
     * @param valueString a string to represent the person, or %NULL
     * @param emailAddress the person's e-mail address, or %NULL
     */
    constructor(relationType: string | null, valueString: string | null, emailAddress: string | null) 
    /**
     * Creates a new #GDataGDWho. More information is available in the <ulink type="http"
     * url="http://code.google.com/apis/gdata/docs/2.0/elements.html#gdWho">GData specification</ulink>.
     * 
     * Currently, entryLink functionality is not implemented in #GDataGDWho.
     * @constructor 
     * @param relationType the relationship between the item and this person, or %NULL
     * @param valueString a string to represent the person, or %NULL
     * @param emailAddress the person's e-mail address, or %NULL
     */
    static new(relationType: string | null, valueString: string | null, emailAddress: string | null): GDWho
    _init(config?: GDWho.ConstructorProperties): void
}

export module Generator {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {
    }

}

export interface Generator extends Comparable {

    // Own properties of GData-0.0.GData.Generator

    /**
     * A human-readable name for the generating agent.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator">
     * Atom specification</ulink>.
     */
    readonly name: string
    /**
     * An IRI reference that is relevant to the agent.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator">
     * Atom specification</ulink>.
     */
    readonly uri: string
    /**
     * Indicates the version of the generating agent.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.generator">
     * Atom specification</ulink>.
     */
    readonly version: string

    // Own fields of GData-0.0.GData.Generator

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.Generator

    /**
     * Gets the #GDataGenerator:name property. The name will be %NULL or non-empty.
     */
    getName(): string | null
    /**
     * Gets the #GDataGenerator:uri property. The URI will be %NULL or non-empty.
     */
    getUri(): string | null
    /**
     * Gets the #GDataGenerator:version property.
     */
    getVersion(): string

    // Class property signals of GData-0.0.GData.Generator

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGenerator structure are private and should never be accessed directly.
 * @class 
 */
export class Generator extends Parsable {

    // Own properties of GData-0.0.GData.Generator

    static name: string

    // Constructors of GData-0.0.GData.Generator

    constructor(config?: Generator.ConstructorProperties) 
    _init(config?: Generator.ConstructorProperties): void
}

export module GoaAuthorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.GoaAuthorizer

        /**
         * The GOA account providing authentication. This should have all the necessary services enabled on it.
         */
        goaObject?: Goa.Object | null
    }

}

export interface GoaAuthorizer extends Authorizer {

    // Own properties of GData-0.0.GData.GoaAuthorizer

    /**
     * The GOA account providing authentication. This should have all the necessary services enabled on it.
     */
    readonly goaObject: Goa.Object

    // Owm methods of GData-0.0.GData.GoaAuthorizer

    /**
     * The GOA account providing authentication. This is the same as #GDataGoaAuthorizer:goa-object.
     */
    getGoaObject(): Goa.Object

    // Class property signals of GData-0.0.GData.GoaAuthorizer

    connect(sigName: "notify::goa-object", callback: any): number
    on(sigName: "notify::goa-object", callback: any): number
    once(sigName: "notify::goa-object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::goa-object", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataGoaAuthorizer structure are private and should never be accessed directly.
 * @class 
 */
export class GoaAuthorizer extends GObject.Object {

    // Own properties of GData-0.0.GData.GoaAuthorizer

    static name: string

    // Constructors of GData-0.0.GData.GoaAuthorizer

    constructor(config?: GoaAuthorizer.ConstructorProperties) 
    /**
     * Create a new #GDataGoaAuthorizer using the authentication token from the given `goa_object`.
     * @constructor 
     * @param goaObject the GOA account providing authentication
     */
    constructor(goaObject: Goa.Object) 
    /**
     * Create a new #GDataGoaAuthorizer using the authentication token from the given `goa_object`.
     * @constructor 
     * @param goaObject the GOA account providing authentication
     */
    static new(goaObject: Goa.Object): GoaAuthorizer
    _init(config?: GoaAuthorizer.ConstructorProperties): void
}

export module Link {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Link

        /**
         * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value
         * of the #GDataLink:uri property is dereferenced.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
         */
        contentType?: string | null
        /**
         * Describes the language of the resource pointed to by the #GDataLink:uri property.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
         */
        language?: string | null
        /**
         * Indicates an advisory length of the linked content in octets. <code class="literal">-1</code> means the length is unspecified.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
         */
        length?: number | null
        /**
         * The link relation type.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
         */
        relationType?: string | null
        /**
         * Conveys human-readable information about the link.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
         */
        title?: string | null
        /**
         * The link's IRI.
         * 
         * For more information, see the
         * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
         */
        uri?: string | null
    }

}

export interface Link extends Comparable {

    // Own properties of GData-0.0.GData.Link

    /**
     * An advisory media type: it is a hint about the type of the representation that is expected to be returned when the value
     * of the #GDataLink:uri property is dereferenced.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    contentType: string
    /**
     * Describes the language of the resource pointed to by the #GDataLink:uri property.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    language: string
    /**
     * Indicates an advisory length of the linked content in octets. <code class="literal">-1</code> means the length is unspecified.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    length: number
    /**
     * The link relation type.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    relationType: string
    /**
     * Conveys human-readable information about the link.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    title: string
    /**
     * The link's IRI.
     * 
     * For more information, see the
     * <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     */
    uri: string

    // Own fields of GData-0.0.GData.Link

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.Link

    /**
     * Gets the #GDataLink:content-type property. If the content type is non-%NULL, it will be non-empty.
     */
    getContentType(): string | null

    // Overloads of getContentType

    /**
     * Returns the content type upon which the #GDataParsable is built. For example, `application/atom+xml` or `application/json`.
     */
    getContentType(): string
    /**
     * Gets the #GDataLink:language property. If the language is non-%NULL, it will be non-empty.
     */
    getLanguage(): string | null
    /**
     * Gets the #GDataLink:length property.
     */
    getLength(): number
    /**
     * Gets the #GDataLink:relation-type property. If the relation type is non-%NULL, it will be non-empty.
     */
    getRelationType(): string | null
    /**
     * Gets the #GDataLink:title property.
     */
    getTitle(): string
    /**
     * Gets the #GDataLink:uri property. The return value is guaranteed to be a valid IRI, as
     * specified by the Atom protocol. Common relationship values such as <literal>alternate</literal>
     * are returned as <literal>http://www.iana.org/assignments/relation/alternate</literal>.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#rel_attribute">
     * Atom specification</ulink>.
     */
    getUri(): string
    /**
     * Sets the #GDataLink:content-type property to `content_type`. `content_type` must be %NULL or non-empty.
     * 
     * Set `content_type` to %NULL to unset the property in the link.
     * @param contentType the new content type for the link, or %NULL
     */
    setContentType(contentType: string | null): void
    /**
     * Sets the #GDataLink:language property to `language`. `language` must be %NULL or non-empty.
     * 
     * Set `language` to %NULL to unset the property in the link.
     * @param language the new language for the link, or %NULL
     */
    setLanguage(language: string | null): void
    /**
     * Sets the #GDataLink:length property to `length`.
     * 
     * Set `length` to <code class="literal">-1</code> to unset the property in the link.
     * @param length the new length for the link, or <code class="literal">-1</code>
     */
    setLength(length: number): void
    /**
     * Sets the #GDataLink:relation-type property to `relation_type`. If `relation_type` is one of the standard Atom relation types,
     * use one of the defined relation type values, instead of a static string. e.g. %GDATA_LINK_EDIT or %GDATA_LINK_SELF.
     * 
     * Set `relation_type` to %NULL to unset the property in the link.
     * @param relationType the new relation type for the link, or %NULL
     */
    setRelationType(relationType: string | null): void
    /**
     * Sets the #GDataLink:title property to `title`.
     * 
     * Set `title` to %NULL to unset the property in the link.
     * @param title the new title for the link, or %NULL
     */
    setTitle(title: string | null): void
    /**
     * Sets the #GDataLink:uri property to `uri`. `uri` must be non-%NULL and non-empty.
     * @param uri the new URI for the link
     */
    setUri(uri: string): void

    // Class property signals of GData-0.0.GData.Link

    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::relation-type", callback: any): number
    on(sigName: "notify::relation-type", callback: any): number
    once(sigName: "notify::relation-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relation-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataLink structure are private and should never be accessed directly.
 * @class 
 */
export class Link extends Parsable {

    // Own properties of GData-0.0.GData.Link

    static name: string

    // Constructors of GData-0.0.GData.Link

    constructor(config?: Link.ConstructorProperties) 
    /**
     * Creates a new #GDataLink. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     * 
     * `uri` must be non-%NULL and non-empty. `relation_type` must be %NULL or non-empty.
     * @constructor 
     * @param uri the link's IRI
     * @param relationType the relationship of the link to the current document, or %NULL
     */
    constructor(uri: string, relationType: string | null) 
    /**
     * Creates a new #GDataLink. More information is available in the <ulink type="http"
     * url="http://www.atomenabled.org/developers/syndication/atom-format-spec.php#element.link">Atom specification</ulink>.
     * 
     * `uri` must be non-%NULL and non-empty. `relation_type` must be %NULL or non-empty.
     * @constructor 
     * @param uri the link's IRI
     * @param relationType the relationship of the link to the current document, or %NULL
     */
    static new(uri: string, relationType: string | null): Link
    _init(config?: Link.ConstructorProperties): void
}

export module MediaCategory {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.MediaCategory

        /**
         * The category name.
         * 
         * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
         */
        category?: string | null
        /**
         * A human-readable label that can be displayed in end-user applications.
         * 
         * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
         */
        label?: string | null
        /**
         * A URI that identifies the categorization scheme.
         * 
         * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
         */
        scheme?: string | null
    }

}

export interface MediaCategory {

    // Own properties of GData-0.0.GData.MediaCategory

    /**
     * The category name.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    category: string
    /**
     * A human-readable label that can be displayed in end-user applications.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    label: string
    /**
     * A URI that identifies the categorization scheme.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    scheme: string

    // Own fields of GData-0.0.GData.MediaCategory

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.MediaCategory

    /**
     * Gets the #GDataMediaCategory:category property.
     */
    getCategory(): string
    /**
     * Gets the #GDataMediaCategory:label property.
     */
    getLabel(): string
    /**
     * Gets the #GDataMediaCategory:scheme property.
     */
    getScheme(): string
    /**
     * Sets the #GDataMediaCategory:category property to `category`.
     * @param category the new category
     */
    setCategory(category: string): void
    /**
     * Sets the #GDataMediaCategory:label property to `label`.
     * 
     * Set `label` to %NULL to unset the property.
     * @param label the category's new label, or %NULL
     */
    setLabel(label: string | null): void
    /**
     * Sets the #GDataMediaCategory:scheme property to `scheme`.
     * 
     * Set `scheme` to %NULL to unset the property.
     * @param scheme the category's new scheme, or %NULL
     */
    setScheme(scheme: string | null): void

    // Class property signals of GData-0.0.GData.MediaCategory

    connect(sigName: "notify::category", callback: any): number
    on(sigName: "notify::category", callback: any): number
    once(sigName: "notify::category", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: any): number
    on(sigName: "notify::scheme", callback: any): number
    once(sigName: "notify::scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataMediaCategory structure are private and should never be accessed directly.
 * @class 
 */
export class MediaCategory extends Parsable {

    // Own properties of GData-0.0.GData.MediaCategory

    static name: string

    // Constructors of GData-0.0.GData.MediaCategory

    constructor(config?: MediaCategory.ConstructorProperties) 
    /**
     * Creates a new #GDataMediaCategory. More information is available in the <ulink type="http"
     * url="http://search.yahoo.com/mrss/">Media RSS specification</ulink>.
     * @constructor 
     * @param category a category describing the content
     * @param scheme a URI identifying the categorisation scheme, or %NULL
     * @param label a human-readable name for the category, or %NULL
     */
    constructor(category: string, scheme: string | null, label: string | null) 
    /**
     * Creates a new #GDataMediaCategory. More information is available in the <ulink type="http"
     * url="http://search.yahoo.com/mrss/">Media RSS specification</ulink>.
     * @constructor 
     * @param category a category describing the content
     * @param scheme a URI identifying the categorisation scheme, or %NULL
     * @param label a human-readable name for the category, or %NULL
     */
    static new(category: string, scheme: string | null, label: string | null): MediaCategory
    _init(config?: MediaCategory.ConstructorProperties): void
}

export module MediaContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {
    }

}

export interface MediaContent {

    // Own properties of GData-0.0.GData.MediaContent

    /**
     * The standard MIME type of the object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly contentType: string
    /**
     * The number of seconds for which the media object plays.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly duration: number
    /**
     * Determines if the object is a sample or the full version of the object, or even if it is a continuous stream.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly expression: MediaExpression
    /**
     * The number of bytes of the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly filesize: number
    /**
     * The height of the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly height: number
    /**
     * Determines if this is the default content for the media group. There should only be one default object per media group.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly isDefault: boolean
    /**
     * The type of object, complementing #GDataMediaContent:content-type. It allows the consuming application to make simpler decisions between
     * different content objects, based on whether they're a video or audio stream, for example.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly medium: MediaMedium
    /**
     * The direct URI to the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly uri: string
    /**
     * The width of the media object.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly width: number

    // Own fields of GData-0.0.GData.MediaContent

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.MediaContent

    /**
     * Downloads and returns a #GDataDownloadStream allowing the content represented by `self` to be read.
     * 
     * To get the content type of the downloaded data, gdata_download_stream_get_content_type() can be called on the returned #GDataDownloadStream.
     * Calling gdata_download_stream_get_content_length() on the stream will not return a meaningful result, however, as the stream is encoded in chunks,
     * rather than by content length.
     * 
     * In order to cancel the download, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GInputStream operations on the #GDataDownloadStream will not cancel the entire download; merely the read or close operation in question. See the
     * #GDataDownloadStream:cancellable for more details.
     * @param service the #GDataService
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    download(service: Service, cancellable: Gio.Cancellable | null): DownloadStream
    /**
     * Gets the #GDataMediaContent:content-type property.
     */
    getContentType(): string
    /**
     * Gets the #GDataMediaContent:duration property.
     */
    getDuration(): number
    /**
     * Gets the #GDataMediaContent:expression property.
     */
    getExpression(): MediaExpression
    /**
     * Gets the #GDataMediaContent:filesize property.
     */
    getFilesize(): number
    /**
     * Gets the #GDataMediaContent:height property.
     */
    getHeight(): number
    /**
     * Gets the #GDataMediaContent:medium property.
     */
    getMedium(): MediaMedium
    /**
     * Gets the #GDataMediaContent:uri property.
     */
    getUri(): string
    /**
     * Gets the #GDataMediaContent:width property.
     */
    getWidth(): number

    // Class property signals of GData-0.0.GData.MediaContent

    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::filesize", callback: any): number
    on(sigName: "notify::filesize", callback: any): number
    once(sigName: "notify::filesize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filesize", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-default", callback: any): number
    on(sigName: "notify::is-default", callback: any): number
    once(sigName: "notify::is-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-default", ...args: any[]): void
    connect(sigName: "notify::medium", callback: any): number
    on(sigName: "notify::medium", callback: any): number
    once(sigName: "notify::medium", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::medium", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataMediaContent structure are private and should never be accessed directly.
 * @class 
 */
export class MediaContent extends Parsable {

    // Own properties of GData-0.0.GData.MediaContent

    static name: string

    // Constructors of GData-0.0.GData.MediaContent

    constructor(config?: MediaContent.ConstructorProperties) 
    _init(config?: MediaContent.ConstructorProperties): void
}

export module MediaCredit {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {
    }

}

export interface MediaCredit {

    // Own properties of GData-0.0.GData.MediaCredit

    /**
     * The credited entity's name.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly credit: string
    /**
     * The role the credited entity played in the production of the media.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly role: string
    /**
     * A URI that identifies the role scheme.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly scheme: string

    // Own fields of GData-0.0.GData.MediaCredit

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.MediaCredit

    /**
     * Gets the #GDataMediaCredit:credit property.
     */
    getCredit(): string
    /**
     * Gets the #GDataMediaCredit:role property.
     */
    getRole(): string
    /**
     * Gets the #GDataMediaCredit:scheme property.
     */
    getScheme(): string

    // Class property signals of GData-0.0.GData.MediaCredit

    connect(sigName: "notify::credit", callback: any): number
    on(sigName: "notify::credit", callback: any): number
    once(sigName: "notify::credit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::credit", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: any): number
    on(sigName: "notify::scheme", callback: any): number
    once(sigName: "notify::scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataMediaCredit structure are private and should never be accessed directly.
 * @class 
 */
export class MediaCredit extends Parsable {

    // Own properties of GData-0.0.GData.MediaCredit

    static name: string

    // Constructors of GData-0.0.GData.MediaCredit

    constructor(config?: MediaCredit.ConstructorProperties) 
    _init(config?: MediaCredit.ConstructorProperties): void
}

export module MediaThumbnail {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {
    }

}

export interface MediaThumbnail {

    // Own properties of GData-0.0.GData.MediaThumbnail

    /**
     * The height of the thumbnail, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly height: number
    /**
     * The time offset of the thumbnail in relation to the media object, in milliseconds.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly time: number
    /**
     * The URI of the thumbnail.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly uri: string
    /**
     * The width of the thumbnail, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://video.search.yahoo.com/mrss">Media RSS specification</ulink>.
     */
    readonly width: number

    // Own fields of GData-0.0.GData.MediaThumbnail

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.MediaThumbnail

    /**
     * Downloads and returns a #GDataDownloadStream allowing the thumbnail data represented by `self` to be read.
     * 
     * To get the content type of the downloaded data, gdata_download_stream_get_content_type() can be called on the returned #GDataDownloadStream.
     * Calling gdata_download_stream_get_content_length() on the stream will not return a meaningful result, however, as the stream is encoded in chunks,
     * rather than by content length.
     * 
     * In order to cancel the download, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GInputStream operations on the #GDataDownloadStream will not cancel the entire download; merely the read or close operation in question. See the
     * #GDataDownloadStream:cancellable for more details.
     * @param service the #GDataService
     * @param cancellable a #GCancellable for the entire download stream, or %NULL
     */
    download(service: Service, cancellable: Gio.Cancellable | null): DownloadStream
    /**
     * Gets the #GDataMediaThumbnail:height property.
     */
    getHeight(): number
    /**
     * Gets the #GDataMediaThumbnail:time property.
     */
    getTime(): number
    /**
     * Gets the #GDataMediaThumbnail:uri property.
     */
    getUri(): string
    /**
     * Gets the #GDataMediaThumbnail:width property.
     */
    getWidth(): number

    // Class property signals of GData-0.0.GData.MediaThumbnail

    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::time", callback: any): number
    on(sigName: "notify::time", callback: any): number
    once(sigName: "notify::time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: "notify::uri", callback: any): number
    on(sigName: "notify::uri", callback: any): number
    once(sigName: "notify::uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uri", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataMediaThumbnail structure are private and should never be accessed directly.
 * @class 
 */
export class MediaThumbnail extends Parsable {

    // Own properties of GData-0.0.GData.MediaThumbnail

    static name: string

    // Constructors of GData-0.0.GData.MediaThumbnail

    constructor(config?: MediaThumbnail.ConstructorProperties) 
    _init(config?: MediaThumbnail.ConstructorProperties): void
}

export module OAuth2Authorizer {

    // Constructor properties interface

    export interface ConstructorProperties extends Authorizer.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.OAuth2Authorizer

        /**
         * A client ID for your application (see the
         * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference documentation</ulink>).
         * 
         * It is recommended that the ID is of the form
         * <literal><replaceable>company name</replaceable>-
         * <replaceable>application name</replaceable>-
         * <replaceable>version ID</replaceable></literal>.
         */
        clientId?: string | null
        /**
         * Client secret provided by Google. This is unique for each application
         * and is accessible from Google’s Developer Console when registering
         * an application. It must be paired with the
         * #GDataOAuth2Authorizer:client-id.
         * 
         * See the
         * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference
         * documentation</ulink> for details.
         */
        clientSecret?: string | null
        /**
         * The locale to use for network requests, in UNIX locale format.
         * (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
         * (typically "en_US").
         * 
         * This locale will be used by the server-side software to localise the
         * authentication and authorization pages at the URI returned by
         * gdata_oauth2_authorizer_build_authentication_uri().
         * 
         * The server-side behaviour is undefined if it doesn't support a given
         * locale.
         */
        locale?: string | null
        /**
         * The #GProxyResolver used to determine a proxy URI.
         */
        proxyResolver?: Gio.ProxyResolver | null
        /**
         * Redirect URI to send the response from the authorisation request to.
         * This must either be %GDATA_OAUTH2_REDIRECT_URI_OOB,
         * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, or a
         * <code>http://localhost</code> URI with any port number (optionally)
         * specified.
         * 
         * This URI is where the authorisation server will redirect the user
         * after they have completed interacting with the authentication page
         * (gdata_oauth2_authorizer_build_authentication_uri()). If it is
         * %GDATA_OAUTH2_REDIRECT_URI_OOB, a page will be returned in the user’s
         * browser with the authorisation code in its title and also embedded in
         * the page for the user to copy if it is not possible to automatically
         * extract the code from the page title. If it is
         * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, a similar page will be returned
         * with the authorisation code in its title, but without displaying the
         * code to the user — the user will simply be asked to close the page.
         * If it is a localhost URI, the authentication page will redirect to
         * that URI with the authorisation code appended as a <code>code</code>
         * query parameter. If the user denies the authentication request, the
         * authentication page will redirect to that URI with
         * <code>error=access_denied</code> appended as a query parameter.
         * 
         * Note that the redirect URI used must match that registered in
         * Google’s Developer Console for your application.
         * 
         * See the <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
         * documentation</ulink> for details about choosing a redirect URI.
         */
        redirectUri?: string | null
        /**
         * The server provided refresh token, which can be stored and passed in
         * to new #GDataOAuth2Authorizer instances before calling
         * gdata_authorizer_refresh_authorization_async() to create a new
         * short-lived access token.
         * 
         * The refresh token is opaque data and must not be parsed.
         */
        refreshToken?: string | null
        /**
         * A timeout, in seconds, for network operations. If the timeout is
         * exceeded, the operation will be cancelled and
         * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
         * 
         * If the timeout is <code class="literal">0</code>, operations will
         * never time out.
         */
        timeout?: number | null
    }

}

export interface OAuth2Authorizer extends Authorizer {

    // Own properties of GData-0.0.GData.OAuth2Authorizer

    /**
     * A client ID for your application (see the
     * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference documentation</ulink>).
     * 
     * It is recommended that the ID is of the form
     * <literal><replaceable>company name</replaceable>-
     * <replaceable>application name</replaceable>-
     * <replaceable>version ID</replaceable></literal>.
     */
    readonly clientId: string
    /**
     * Client secret provided by Google. This is unique for each application
     * and is accessible from Google’s Developer Console when registering
     * an application. It must be paired with the
     * #GDataOAuth2Authorizer:client-id.
     * 
     * See the
     * <ulink url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#handlingtheresponse" type="http">reference
     * documentation</ulink> for details.
     */
    readonly clientSecret: string
    /**
     * The locale to use for network requests, in UNIX locale format.
     * (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
     * (typically "en_US").
     * 
     * This locale will be used by the server-side software to localise the
     * authentication and authorization pages at the URI returned by
     * gdata_oauth2_authorizer_build_authentication_uri().
     * 
     * The server-side behaviour is undefined if it doesn't support a given
     * locale.
     */
    locale: string
    /**
     * The #GProxyResolver used to determine a proxy URI.
     */
    proxyResolver: Gio.ProxyResolver
    /**
     * Redirect URI to send the response from the authorisation request to.
     * This must either be %GDATA_OAUTH2_REDIRECT_URI_OOB,
     * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, or a
     * <code>http://localhost</code> URI with any port number (optionally)
     * specified.
     * 
     * This URI is where the authorisation server will redirect the user
     * after they have completed interacting with the authentication page
     * (gdata_oauth2_authorizer_build_authentication_uri()). If it is
     * %GDATA_OAUTH2_REDIRECT_URI_OOB, a page will be returned in the user’s
     * browser with the authorisation code in its title and also embedded in
     * the page for the user to copy if it is not possible to automatically
     * extract the code from the page title. If it is
     * %GDATA_OAUTH2_REDIRECT_URI_OOB_AUTO, a similar page will be returned
     * with the authorisation code in its title, but without displaying the
     * code to the user — the user will simply be asked to close the page.
     * If it is a localhost URI, the authentication page will redirect to
     * that URI with the authorisation code appended as a <code>code</code>
     * query parameter. If the user denies the authentication request, the
     * authentication page will redirect to that URI with
     * <code>error=access_denied</code> appended as a query parameter.
     * 
     * Note that the redirect URI used must match that registered in
     * Google’s Developer Console for your application.
     * 
     * See the <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2InstalledApp#choosingredirecturi">reference
     * documentation</ulink> for details about choosing a redirect URI.
     */
    readonly redirectUri: string
    /**
     * The server provided refresh token, which can be stored and passed in
     * to new #GDataOAuth2Authorizer instances before calling
     * gdata_authorizer_refresh_authorization_async() to create a new
     * short-lived access token.
     * 
     * The refresh token is opaque data and must not be parsed.
     */
    refreshToken: string
    /**
     * A timeout, in seconds, for network operations. If the timeout is
     * exceeded, the operation will be cancelled and
     * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
     * 
     * If the timeout is <code class="literal">0</code>, operations will
     * never time out.
     */
    timeout: number

    // Owm methods of GData-0.0.GData.OAuth2Authorizer

    /**
     * Build an authentication URI to open in the user’s web browser (or an embedded
     * browser widget). This will display an authentication page from Google,
     * including an authentication form and confirmation of the authorisation
     * domains being requested by this #GDataAuthorizer. The user will authenticate
     * in the browser, then an authorisation code will be returned via the
     * #GDataOAuth2Authorizer:redirect-uri, ready to be passed to
     * gdata_oauth2_authorizer_request_authorization().
     * 
     * If `login_hint` is non-%NULL, it will be passed to the server as a hint of
     * which user is attempting to authenticate, which can be used to pre-fill the
     * e-mail address box in the authentication form.
     * 
     * If `include_granted_scopes` is %TRUE, the authentication request will
     * automatically include all authorisation domains previously granted to this
     * user/application pair, allowing for incremental authentication — asking for
     * permissions as needed, rather than all in one large bundle at the first
     * opportunity. If `include_granted_scopes` is %FALSE, incremental authentication
     * will not be enabled, and only the domains passed to the
     * #GDataOAuth2Authorizer constructor will eventually be authenticated.
     * See the
     * <ulink type="http" url="https://developers.google.com/accounts/docs/OAuth2WebServer#incrementalAuth">reference
     * documentation</ulink> for more details.
     * @param loginHint optional e-mail address or sub identifier for the user
     * @param includeGrantedScopes %TRUE to enable incremental authorisation
     */
    buildAuthenticationUri(loginHint: string | null, includeGrantedScopes: boolean): string
    /**
     * Returns the authorizer's refresh token, #GDataOAuth2Authorizer:refresh-token,
     * as set by client code previously on the #GDataOAuth2Authorizer, or as
     * returned by the most recent authentication operation.
     */
    dupRefreshToken(): string
    /**
     * Returns the authorizer's client ID, #GDataOAuth2Authorizer:client-id, as
     * specified on constructing the #GDataOAuth2Authorizer.
     */
    getClientId(): string
    /**
     * Returns the authorizer's client secret, #GDataOAuth2Authorizer:client-secret,
     * as specified on constructing the #GDataOAuth2Authorizer.
     */
    getClientSecret(): string
    /**
     * Returns the locale currently being used for network requests, or %NULL if the
     * locale is the default.
     */
    getLocale(): string | null
    /**
     * Gets the #GProxyResolver on the #GDataOAuth2Authorizer's #SoupSession.
     */
    getProxyResolver(): Gio.ProxyResolver | null
    /**
     * Returns the authorizer’s redirect URI, #GDataOAuth2Authorizer:redirect-uri,
     * as specified on constructing the #GDataOAuth2Authorizer.
     */
    getRedirectUri(): string
    /**
     * Gets the #GDataOAuth2Authorizer:timeout property; the network timeout, in
     * seconds.
     */
    getTimeout(): number
    /**
     * Request an authorisation code from the user’s web browser is converted to
     * authorisation (access and refresh) tokens. This is the final step in the
     * authentication process; once complete, the #GDataOAuth2Authorizer should be
     * fully authorised for its domains.
     * 
     * On failure, %GDATA_SERVICE_ERROR_FORBIDDEN will be returned if the user or
     * server denied the authorisation request. %GDATA_SERVICE_ERROR_PROTOCOL_ERROR
     * will be returned if the server didn’t follow the expected protocol.
     * %G_IO_ERROR_CANCELLED will be returned if the operation was cancelled using
     * `cancellable`.
     * @param authorizationCode code returned from the authentication page
     * @param cancellable a #GCancellable, or %NULL
     */
    requestAuthorization(authorizationCode: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronous version of gdata_oauth2_authorizer_request_authorization().
     * @param authorizationCode code returned from the authentication page
     * @param cancellable an optional #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authorization is finished
     */
    requestAuthorizationAsync(authorizationCode: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous authorization operation started with
     * gdata_oauth2_authorizer_request_authorization_async().
     * @param asyncResult a #GAsyncResult
     */
    requestAuthorizationFinish(asyncResult: Gio.AsyncResult): boolean
    /**
     * Set the locale used for network requests to `locale,` given in standard UNIX
     * locale format. See #GDataOAuth2Authorizer:locale for more details.
     * 
     * Note that while it’s possible to change the locale after sending network
     * requests (i.e. calling gdata_oauth2_authorizer_build_authentication_uri() for
     * the first time), it is unsupported, as the server-side software may behave
     * unexpectedly. The only supported use of this method is after creation of the
     * authorizer, but before any network requests are made.
     * @param locale the new locale in UNIX locale format, or %NULL for the default locale
     */
    setLocale(locale: string | null): void
    /**
     * Sets the #GProxyResolver on the #SoupSession used internally by the given
     * #GDataOAuth2Authorizer.
     * @param proxyResolver a #GProxyResolver, or %NULL
     */
    setProxyResolver(proxyResolver: Gio.ProxyResolver | null): void
    /**
     * Sets the authorizer's refresh token, #GDataOAuth2Authorizer:refresh-token.
     * This is used to periodically refresh the access token. Set it to %NULL to
     * clear the current authentication from the authorizer.
     * @param refreshToken the new refresh token, or %NULL to clear   authorization
     */
    setRefreshToken(refreshToken: string | null): void
    /**
     * Sets the #GDataOAuth2Authorizer:timeout property; the network timeout, in
     * seconds.
     * 
     * If `timeout` is <code class="literal">0</code>, network operations will never
     * time out.
     * @param timeout the timeout, or <code class="literal">0</code>
     */
    setTimeout(timeout: number): void

    // Class property signals of GData-0.0.GData.OAuth2Authorizer

    connect(sigName: "notify::client-id", callback: any): number
    on(sigName: "notify::client-id", callback: any): number
    once(sigName: "notify::client-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client-id", ...args: any[]): void
    connect(sigName: "notify::client-secret", callback: any): number
    on(sigName: "notify::client-secret", callback: any): number
    once(sigName: "notify::client-secret", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client-secret", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::redirect-uri", callback: any): number
    on(sigName: "notify::redirect-uri", callback: any): number
    once(sigName: "notify::redirect-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::redirect-uri", ...args: any[]): void
    connect(sigName: "notify::refresh-token", callback: any): number
    on(sigName: "notify::refresh-token", callback: any): number
    once(sigName: "notify::refresh-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::refresh-token", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataOAuth2Authorizer structure are private and should never be accessed directly.
 * @class 
 */
export class OAuth2Authorizer extends GObject.Object {

    // Own properties of GData-0.0.GData.OAuth2Authorizer

    static name: string

    // Constructors of GData-0.0.GData.OAuth2Authorizer

    constructor(config?: OAuth2Authorizer.ConstructorProperties) 
    /**
     * Creates a new #GDataOAuth2Authorizer. The `client_id` must be unique for your
     * application, and as registered with Google, and the `client_secret` must be
     * paired with it.
     * @constructor 
     * @param clientId your application’s client ID
     * @param clientSecret your application’s client secret
     * @param redirectUri authorisation redirect URI
     * @param serviceType the #GType of a #GDataService subclass which the #GDataOAuth2Authorizer will be used with
     */
    constructor(clientId: string, clientSecret: string, redirectUri: string, serviceType: GObject.GType) 
    /**
     * Creates a new #GDataOAuth2Authorizer. The `client_id` must be unique for your
     * application, and as registered with Google, and the `client_secret` must be
     * paired with it.
     * @constructor 
     * @param clientId your application’s client ID
     * @param clientSecret your application’s client secret
     * @param redirectUri authorisation redirect URI
     * @param serviceType the #GType of a #GDataService subclass which the #GDataOAuth2Authorizer will be used with
     */
    static new(clientId: string, clientSecret: string, redirectUri: string, serviceType: GObject.GType): OAuth2Authorizer
    /**
     * Creates a new #GDataOAuth2Authorizer. The `client_id` must be unique for your
     * application, and as registered with Google, and the `client_secret` must be
     * paired with it.
     * @constructor 
     * @param clientId your application’s client ID
     * @param clientSecret your application’s client secret
     * @param redirectUri authorisation redirect URI
     * @param authorizationDomains  a non-empty list of #GDataAuthorizationDomains to be authorized against by the #GDataOAuth2Authorizer
     */
    static newForAuthorizationDomains(clientId: string, clientSecret: string, redirectUri: string, authorizationDomains: AuthorizationDomain[]): OAuth2Authorizer
    _init(config?: OAuth2Authorizer.ConstructorProperties): void
}

export module Parsable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Parsable

        /**
         * Specifies whether the object was constructed by parsing XML or manually.
         */
        constructedFromXml?: boolean | null
    }

}

export interface Parsable {

    // Own properties of GData-0.0.GData.Parsable

    /**
     * Specifies whether the object was constructed by parsing XML or manually.
     */
    readonly constructedFromXml: boolean

    // Own fields of GData-0.0.GData.Parsable

    parent: GObject.Object
    priv: ParsablePrivate

    // Owm methods of GData-0.0.GData.Parsable

    /**
     * Returns the content type upon which the #GDataParsable is built. For example, `application/atom+xml` or `application/json`.
     */
    getContentType(): string
    // Has conflict: getJson(): string
    // Has conflict: getXml(): string

    // Own virtual methods of GData-0.0.GData.Parsable

    getJson(builder: Json.Builder): void
    getNamespaces(namespaces: GLib.HashTable): void
    getXml(xmlString: GLib.String): void
    parseJson(reader: Json.Reader): boolean
    parseXml(doc: libxml2.Doc, node: libxml2.Node): boolean
    postParseJson(): boolean
    postParseXml(): boolean
    preGetXml(xmlString: GLib.String): void
    preParseXml(doc: libxml2.Doc, rootNode: libxml2.Node): boolean

    // Class property signals of GData-0.0.GData.Parsable

    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataParsable structure are private and should never be accessed directly.
 * @class 
 */
export class Parsable extends GObject.Object {

    // Own properties of GData-0.0.GData.Parsable

    static name: string

    // Constructors of GData-0.0.GData.Parsable

    constructor(config?: Parsable.ConstructorProperties) 
    /**
     * Creates a new #GDataParsable subclass (of the given `parsable_type)` from the given `json`.
     * 
     * An object of the given `parsable_type` is created, and its <function>parse_json</function> and
     * <function>post_parse_json</function> class functions called on the JSON node obtained from `json`.
     * <function>post_parse_json</function> is called once on the root node, while <function>parse_json</function> is called for
     * each of the node's members.
     * 
     * If `length` is -1, `json` will be assumed to be nul-terminated.
     * 
     * If an error occurs during parsing, a suitable error from #GDataParserError will be returned.
     * @constructor 
     * @param parsableType the type of the class represented by the JSON
     * @param json the JSON for just the parsable object
     * @param length the length of `json,` or -1
     */
    static newFromJson(parsableType: GObject.GType, json: string, length: number): Parsable
    /**
     * Creates a new #GDataParsable subclass (of the given `parsable_type)` from the given `xml`.
     * 
     * An object of the given `parsable_type` is created, and its <function>pre_parse_xml</function>, <function>parse_xml</function> and
     * <function>post_parse_xml</function> class functions called on the XML tree obtained from `xml`. <function>pre_parse_xml</function> and
     * <function>post_parse_xml</function> are called once each on the root node of the tree, while <function>parse_xml</function> is called for
     * each of the child nodes of the root node.
     * 
     * If `length` is -1, `xml` will be assumed to be null-terminated.
     * 
     * If an error occurs during parsing, a suitable error from #GDataParserError will be returned.
     * @constructor 
     * @param parsableType the type of the class represented by the XML
     * @param xml the XML for just the parsable object, with full namespace declarations
     * @param length the length of `xml,` or -1
     */
    static newFromXml(parsableType: GObject.GType, xml: string, length: number): Parsable
    _init(config?: Parsable.ConstructorProperties): void
}

export module PicasaWebAlbum {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.PicasaWebAlbum

        /**
         * The ID of the album. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebAlbums; for example,
         * if gdata_entry_get_id() returned "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249" for a
         * particular #GDataPicasaWebAlbum, the #GDataPicasaWebAlbum:album-id property would be "5328889949261497249".
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
         * gphoto specification</ulink>.
         */
        albumId?: string | null
        isCommentingEnabled?: boolean | null
        /**
         * The location as a latitude coordinate associated with this album. Valid latitudes range from <code class="literal">-90.0</code>
         * to <code class="literal">90.0</code> inclusive.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
         * GeoRSS specification</ulink>.
         */
        latitude?: number | null
        /**
         * The user-specified location associated with the album. A place name.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_location">
         * gphoto specification</ulink>.
         */
        location?: string | null
        /**
         * The location as a longitude coordinate associated with this album. Valid longitudes range from <code class="literal">-180.0</code>
         * to <code class="literal">180.0</code> inclusive.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
         * GeoRSS specification</ulink>.
         */
        longitude?: number | null
        /**
         * A %NULL-terminated array of tags associated with the album; all the tags associated with the individual photos in the album.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
         * Media RSS specification</ulink>.
         */
        tags?: string[] | null
        /**
         * The timestamp of when the album occurred, settable by the user. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
         * gphoto specification</ulink>.
         */
        timestamp?: number | null
        /**
         * The visibility (or access rights) of the album.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_access">
         * gphoto specification</ulink>.
         */
        visibility?: PicasaWebVisibility | null
    }

}

export interface PicasaWebAlbum {

    // Own properties of GData-0.0.GData.PicasaWebAlbum

    /**
     * The ID of the album. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebAlbums; for example,
     * if gdata_entry_get_id() returned "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249" for a
     * particular #GDataPicasaWebAlbum, the #GDataPicasaWebAlbum:album-id property would be "5328889949261497249".
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
     * gphoto specification</ulink>.
     */
    readonly albumId: string
    /**
     * The number of bytes consumed by this album and its contents. Note that this is only set if the authenticated user is the owner of the
     * album; it's otherwise <code class="literal">-1</code>.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_bytesUsed">
     * gphoto specification</ulink>.
     */
    readonly bytesUsed: number
    /**
     * The number of comments on the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount">
     * gphoto specification</ulink>.
     */
    readonly commentCount: number
    /**
     * The time this album was last edited. If the album has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    isCommentingEnabled: boolean
    /**
     * The location as a latitude coordinate associated with this album. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    latitude: number
    /**
     * The user-specified location associated with the album. A place name.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_location">
     * gphoto specification</ulink>.
     */
    location: string
    /**
     * The location as a longitude coordinate associated with this album. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    longitude: number
    /**
     * The user's nickname. This is a user-specified value that should be used when referring to the user by name.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_nickname">
     * gphoto specification</ulink>.
     */
    readonly nickname: string
    /**
     * The number of photos and videos in the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotos">
     * gphoto specification</ulink>.
     */
    readonly numPhotos: number
    /**
     * The number of photos and videos that can still be uploaded to this album.
     * This doesn't account for quota, just a hardcoded maximum number per album set by Google.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_numphotosremaining">
     * gphoto specification</ulink>.
     */
    readonly numPhotosRemaining: number
    /**
     * A %NULL-terminated array of tags associated with the album; all the tags associated with the individual photos in the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
     * Media RSS specification</ulink>.
     */
    tags: string[]
    /**
     * The timestamp of when the album occurred, settable by the user. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
     * gphoto specification</ulink>.
     */
    timestamp: number
    /**
     * The username of the album owner.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_user">
     * gphoto specification</ulink>.
     */
    readonly user: string
    /**
     * The visibility (or access rights) of the album.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_access">
     * gphoto specification</ulink>.
     */
    visibility: PicasaWebVisibility

    // Own fields of GData-0.0.GData.PicasaWebAlbum

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.PicasaWebAlbum

    /**
     * Gets the #GDataPicasaWebAlbum:bytes-used property. It will return <code class="literal">-1</code> if the current authenticated
     * user is not the owner of the album.
     */
    getBytesUsed(): number
    /**
     * Gets the #GDataPicasaWebAlbum:comment-count property.
     */
    getCommentCount(): number
    /**
     * Returns a list of media content, such as the cover image for the album.
     */
    getContents(): MediaContent[]
    /**
     * Gets the #GDataPicasaWebAlbum:latitude and #GDataPicasaWebAlbum:longitude properties,
     * setting the out parameters to them. If either latitude or longitude is %NULL, that parameter will not be set.
     * If the coordinates are unset, `latitude` and `longitude` will be set to %G_MAXDOUBLE.
     */
    getCoordinates(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the #GDataPicasaWebAlbum:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getEdited(): number
    /**
     * Gets the #GDataPicasaWebAlbum:album-id property.
     */
    getId(): string

    // Overloads of getId

    /**
     * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
     * 
     * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
     */
    getId(): string | null
    /**
     * Gets the #GDataPicasaWebAlbum:location property.
     */
    getLocation(): string
    /**
     * Gets the #GDataPicasaWebAlbum:nickname property.
     */
    getNickname(): string
    /**
     * Gets the #GDataPicasaWebAlbum:num-photos property.
     */
    getNumPhotos(): number
    /**
     * Gets the #GDataPicasaWebAlbum:num-photos-remaining property.
     */
    getNumPhotosRemaining(): number
    /**
     * Gets the #GDataPicasaWebAlbum:tags property.
     */
    getTags(): string[]
    /**
     * Returns a list of thumbnails, often at different sizes, for this album.
     */
    getThumbnails(): MediaThumbnail[]
    /**
     * Gets the #GDataPicasaWebAlbum:timestamp property. This value usually holds either the date that best corresponds to the album of photos, or to the
     * day it was uploaded. It's a UNIX timestamp in milliseconds (not seconds) since the epoch. If the property is unset, <code class="literal">-1</code>
     * will be returned.
     */
    getTimestamp(): number
    /**
     * Gets the #GDataPicasaWebAlbum:user property.
     */
    getUser(): string
    /**
     * Gets the #GDataPicasaWebAlbum:visibility property.
     */
    getVisibility(): PicasaWebVisibility
    /**
     * Sets the #GDataPicasaWebAlbum:latitude and #GDataPicasaWebAlbum:longitude properties to
     * `latitude` and `longitude` respectively.
     * @param latitude the album's new latitude coordinate, or %G_MAXDOUBLE
     * @param longitude the album's new longitude coordinate, or %G_MAXDOUBLE
     */
    setCoordinates(latitude: number, longitude: number): void
    /**
     * Sets the #GDataPicasaWebAlbum:is-commenting-enabled property to `is_commenting_enabled`.
     * @param isCommentingEnabled %TRUE if commenting should be enabled for the album, %FALSE otherwise
     */
    setIsCommentingEnabled(isCommentingEnabled: boolean): void
    /**
     * Sets the #GDataPicasaWebAlbum:location property to `location`.
     * 
     * Set `location` to %NULL to unset the property.
     * @param location the new album location, or %NULL
     */
    setLocation(location: string | null): void
    /**
     * Sets the #GDataPicasaWebAlbum:tags property to `tags`.
     * 
     * Set `tags` to %NULL to unset the album's tag list.
     * @param tags the new %NULL-terminated array of tags, or %NULL
     */
    setTags(tags: string[] | null): void
    /**
     * Sets the #GDataPicasaWebAlbum:timestamp property from `timestamp`. This should be a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * Set `timestamp` to <code class="literal">-1</code> to unset the property.
     * @param timestamp a UNIX timestamp, or <code class="literal">-1</code>
     */
    setTimestamp(timestamp: number): void
    /**
     * Sets the #GDataPicasaWebAlbum:visibility property to `visibility`.
     * @param visibility the new album visibility level
     */
    setVisibility(visibility: PicasaWebVisibility): void

    // Class property signals of GData-0.0.GData.PicasaWebAlbum

    connect(sigName: "notify::album-id", callback: any): number
    on(sigName: "notify::album-id", callback: any): number
    once(sigName: "notify::album-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::album-id", ...args: any[]): void
    connect(sigName: "notify::bytes-used", callback: any): number
    on(sigName: "notify::bytes-used", callback: any): number
    once(sigName: "notify::bytes-used", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bytes-used", ...args: any[]): void
    connect(sigName: "notify::comment-count", callback: any): number
    on(sigName: "notify::comment-count", callback: any): number
    once(sigName: "notify::comment-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::comment-count", ...args: any[]): void
    connect(sigName: "notify::edited", callback: any): number
    on(sigName: "notify::edited", callback: any): number
    once(sigName: "notify::edited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::is-commenting-enabled", callback: any): number
    on(sigName: "notify::is-commenting-enabled", callback: any): number
    once(sigName: "notify::is-commenting-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-commenting-enabled", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: any): number
    on(sigName: "notify::nickname", callback: any): number
    once(sigName: "notify::nickname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::num-photos", callback: any): number
    on(sigName: "notify::num-photos", callback: any): number
    once(sigName: "notify::num-photos", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-photos", ...args: any[]): void
    connect(sigName: "notify::num-photos-remaining", callback: any): number
    on(sigName: "notify::num-photos-remaining", callback: any): number
    once(sigName: "notify::num-photos-remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::num-photos-remaining", ...args: any[]): void
    connect(sigName: "notify::tags", callback: any): number
    on(sigName: "notify::tags", callback: any): number
    once(sigName: "notify::tags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tags", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::user", callback: any): number
    on(sigName: "notify::user", callback: any): number
    once(sigName: "notify::user", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebAlbum structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebAlbum extends Entry {

    // Own properties of GData-0.0.GData.PicasaWebAlbum

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebAlbum

    constructor(config?: PicasaWebAlbum.ConstructorProperties) 
    /**
     * Creates a new #GDataPicasaWebAlbum with the given ID and default properties. `id` is the ID which would be returned by gdata_entry_get_id(),
     * not gdata_picasaweb_album_get_id().
     * 
     * If `id` is not %NULL and can't be parsed to extract an album ID, %NULL will be returned.
     * @constructor 
     * @param id the album's entry ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataPicasaWebAlbum with the given ID and default properties. `id` is the ID which would be returned by gdata_entry_get_id(),
     * not gdata_picasaweb_album_get_id().
     * 
     * If `id` is not %NULL and can't be parsed to extract an album ID, %NULL will be returned.
     * @constructor 
     * @param id the album's entry ID, or %NULL
     */
    static new(id: string | null): PicasaWebAlbum

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: PicasaWebAlbum.ConstructorProperties): void
}

export module PicasaWebComment {

    // Constructor properties interface

    export interface ConstructorProperties extends Comment.ConstructorProperties {
    }

}

export interface PicasaWebComment {

    // Own fields of GData-0.0.GData.PicasaWebComment

    parent: Comment & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Class property signals of GData-0.0.GData.PicasaWebComment

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebComment structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebComment extends Comment {

    // Own properties of GData-0.0.GData.PicasaWebComment

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebComment

    constructor(config?: PicasaWebComment.ConstructorProperties) 
    /**
     * Creates a new #GDataPicasaWebComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataPicasaWebComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    static new(id: string): PicasaWebComment

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: PicasaWebComment.ConstructorProperties): void
}

export module PicasaWebFeed {

    // Constructor properties interface

    export interface ConstructorProperties extends Feed.ConstructorProperties {
    }

}

export interface PicasaWebFeed {

    // Own fields of GData-0.0.GData.PicasaWebFeed

    parent: Feed & GObject.Object

    // Class property signals of GData-0.0.GData.PicasaWebFeed

    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: any): number
    on(sigName: "notify::generator", callback: any): number
    once(sigName: "notify::generator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: any): number
    on(sigName: "notify::items-per-page", callback: any): number
    once(sigName: "notify::items-per-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: any): number
    on(sigName: "notify::logo", callback: any): number
    once(sigName: "notify::logo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: any): number
    on(sigName: "notify::next-page-token", callback: any): number
    once(sigName: "notify::next-page-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: any): number
    on(sigName: "notify::total-results", callback: any): number
    once(sigName: "notify::total-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebFeed structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebFeed extends Feed {

    // Own properties of GData-0.0.GData.PicasaWebFeed

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebFeed

    constructor(config?: PicasaWebFeed.ConstructorProperties) 
    _init(config?: PicasaWebFeed.ConstructorProperties): void
}

export module PicasaWebFile {

    // Constructor properties interface

    export interface ConstructorProperties extends Commentable.ConstructorProperties, Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.PicasaWebFile

        /**
         * The ID for the file's album. This is in the same form as returned by gdata_picasaweb_album_get_id().
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_albumid">
         * gphoto specification</ulink>.
         */
        albumId?: string | null
        /**
         * The file's descriptive caption.
         */
        caption?: string | null
        /**
         * A checksum of the file, useful for duplicate detection.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_checksum">
         * gphoto specification</ulink>.
         */
        checksum?: string | null
        /**
         * The ID of the file. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebFiles; for example,
         * if gdata_entry_get_id() returned
         * "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249/photoid/5328890138794566386" for a
         * particular #GDataPicasaWebFile, the #GDataPicasaWebFile:file-id property would be "5328890138794566386".
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
         * gphoto specification</ulink>.
         */
        fileId?: string | null
        /**
         * Whether commenting is enabled for this file.
         */
        isCommentingEnabled?: boolean | null
        /**
         * The location as a latitude coordinate associated with this file. Valid latitudes range from <code class="literal">-90.0</code>
         * to <code class="literal">90.0</code> inclusive.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
         * GeoRSS specification</ulink>.
         */
        latitude?: number | null
        /**
         * The location as a longitude coordinate associated with this file. Valid longitudes range from <code class="literal">-180.0</code>
         * to <code class="literal">180.0</code> inclusive.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
         * GeoRSS specification</ulink>.
         */
        longitude?: number | null
        /**
         * The rotation of the photo, in degrees. This will only be non-zero for files which are pending rotation, and haven't yet been
         * permanently modified. For files which have already been rotated, this will be <code class="literal">0</code>.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_rotation">
         * gphoto specification</ulink>.
         */
        rotation?: number | null
        /**
         * A %NULL-terminated array of tags associated with the file.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
         * Media RSS specification</ulink>.
         */
        tags?: string[] | null
        /**
         * The time the file was purportedly taken. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
         * gphoto specification</ulink>.
         */
        timestamp?: number | null
        /**
         * The version number of the file. Version numbers are based on modification time, so they don't increment linearly.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_version">
         * gphoto specification</ulink>.
         */
        version?: string | null
    }

}

export interface PicasaWebFile extends Commentable {

    // Own properties of GData-0.0.GData.PicasaWebFile

    /**
     * The ID for the file's album. This is in the same form as returned by gdata_picasaweb_album_get_id().
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_albumid">
     * gphoto specification</ulink>.
     */
    albumId: string
    /**
     * The file's descriptive caption.
     */
    caption: string
    /**
     * A checksum of the file, useful for duplicate detection.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_checksum">
     * gphoto specification</ulink>.
     */
    checksum: string
    /**
     * The number of comments on the file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_commentCount">
     * gphoto specification</ulink>.
     */
    readonly commentCount: number
    /**
     * The nickname of the user credited with this file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_credit">Media RSS
     * specification</ulink>.
     */
    readonly credit: string
    /**
     * The distance to the subject reported in the image's EXIF.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly distance: number
    /**
     * The time this file was last edited. If the file has not been edited yet, the content indicates the time it was created.
     * 
     * For more information, see the <ulink type="http" url="http://www.atomenabled.org/developers/protocol/#appEdited">
     * Atom Publishing Protocol specification</ulink>.
     */
    readonly edited: number
    /**
     * The exposure time.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly exposure: number
    /**
     * The ID of the file. This is a substring of the ID returned by gdata_entry_get_id() for #GDataPicasaWebFiles; for example,
     * if gdata_entry_get_id() returned
     * "http://picasaweb.google.com/data/entry/user/libgdata.picasaweb/albumid/5328889949261497249/photoid/5328890138794566386" for a
     * particular #GDataPicasaWebFile, the #GDataPicasaWebFile:file-id property would be "5328890138794566386".
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_id">
     * gphoto specification</ulink>.
     */
    readonly fileId: string
    /**
     * Indicates whether the flash was used.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly flash: boolean
    /**
     * The focal length for the shot.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly focalLength: number
    /**
     * The F-stop value.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly fstop: number
    /**
     * The height of the photo or video, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_height">
     * gphoto specification</ulink>.
     */
    readonly height: number
    /**
     * An unique ID for the image found in the EXIF.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly imageUniqueId: string
    /**
     * Whether commenting is enabled for this file.
     */
    isCommentingEnabled: boolean
    /**
     * The ISO speed.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink> and ISO 5800:1987.
     */
    readonly iso: number
    /**
     * The location as a latitude coordinate associated with this file. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    latitude: number
    /**
     * The location as a longitude coordinate associated with this file. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#georss_where">
     * GeoRSS specification</ulink>.
     */
    longitude: number
    /**
     * The name of the manufacturer of the camera.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly make: string
    /**
     * The model of the camera.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#exif_reference">
     * EXIF element reference</ulink>.
     */
    readonly model: string
    /**
     * The rotation of the photo, in degrees. This will only be non-zero for files which are pending rotation, and haven't yet been
     * permanently modified. For files which have already been rotated, this will be <code class="literal">0</code>.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_rotation">
     * gphoto specification</ulink>.
     */
    rotation: number
    /**
     * The size of the file, in bytes.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_size">
     * gphoto specification</ulink>.
     */
    readonly size: number
    /**
     * A %NULL-terminated array of tags associated with the file.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#media_keywords">
     * Media RSS specification</ulink>.
     */
    tags: string[]
    /**
     * The time the file was purportedly taken. This a UNIX timestamp in milliseconds (not seconds) since the epoch.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_timestamp">
     * gphoto specification</ulink>.
     */
    timestamp: number
    /**
     * The version number of the file. Version numbers are based on modification time, so they don't increment linearly.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_version">
     * gphoto specification</ulink>.
     */
    readonly version: string
    /**
     * The status of the file, if it is a video. For example: %GDATA_PICASAWEB_VIDEO_STATUS_PENDING or %GDATA_PICASAWEB_VIDEO_STATUS_FAILED.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_videostatus">
     * gphoto specification</ulink>.
     */
    readonly videoStatus: string
    /**
     * The width of the photo or video, in pixels.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#gphoto_width">
     * gphoto specification</ulink>.
     */
    readonly width: number

    // Own fields of GData-0.0.GData.PicasaWebFile

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.PicasaWebFile

    /**
     * Gets the #GDataPicasaWebFile:album-id property. This is in the same form as returned by gdata_picasaweb_album_get_id().
     */
    getAlbumId(): string
    /**
     * Gets the #GDataPicasaWebFile:caption property.
     */
    getCaption(): string
    /**
     * Gets the #GDataPicasaWebFile:checksum property.
     */
    getChecksum(): string
    /**
     * Gets the #GDataPicasaWebFile:comment-count property.
     */
    getCommentCount(): number
    /**
     * Returns a list of media content, e.g. the actual photo or video.
     */
    getContents(): MediaContent[]
    /**
     * Gets the #GDataPicasaWebFile:latitude and #GDataPicasaWebFile:longitude properties, setting the out parameters to them.
     * If either latitude or longitude is %NULL, that parameter will not be set. If the coordinates are unset,
     * `latitude` and `longitude` will be set to %G_MAXDOUBLE.
     */
    getCoordinates(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the #GDataPicasaWebFile:credit property.
     */
    getCredit(): string
    /**
     * Gets the #GDataPicasaWebFile:distance property.
     */
    getDistance(): number
    /**
     * Gets the #GDataPicasaWebFile:edited property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getEdited(): number
    /**
     * Gets the #GDataPicasaWebFile:exposure property.
     */
    getExposure(): number
    /**
     * Gets the #GDataPicasaWebFile:flash property.
     */
    getFlash(): boolean
    /**
     * Gets the #GDataPicasaWebFile:focal-length property.
     */
    getFocalLength(): number
    /**
     * Gets the #GDataPicasaWebFile:fstop property.
     */
    getFstop(): number
    /**
     * Gets the #GDataPicasaWebFile:height property.
     */
    getHeight(): number
    /**
     * Gets the #GDataPicasaWebFile:file-id property.
     */
    getId(): string

    // Overloads of getId

    /**
     * Returns the URN ID of the entry; a unique and permanent identifier for the object the entry represents.
     * 
     * The ID may be %NULL if and only if the #GDataEntry has been newly created, and hasn't yet been inserted on the server.
     */
    getId(): string | null
    /**
     * Gets the #GDataPicasaWebFile:image-unique-id property.
     */
    getImageUniqueId(): string
    /**
     * Gets the #GDataPicasaWebFile:iso property.
     */
    getIso(): number
    /**
     * Gets the #GDataPicasaWebFile:make property.
     */
    getMake(): string
    /**
     * Gets the #GDataPicasaWebFile:model property.
     */
    getModel(): string
    /**
     * Gets the #GDataPicasaWebFile:rotation property.
     */
    getRotation(): number
    /**
     * Gets the #GDataPicasaWebFile:size property.
     */
    getSize(): number
    /**
     * Gets the #GDataPicasaWebFile:tags property.
     */
    getTags(): string[]
    /**
     * Returns a list of thumbnails, often at different sizes, for this
     * file.  Currently, PicasaWeb usually returns three thumbnails, with
     * widths in pixels of 72, 144, and 288.  However, the thumbnail will
     * not be larger than the actual image, so thumbnails may be smaller
     * than the widths listed above.
     */
    getThumbnails(): MediaThumbnail[]
    /**
     * Gets the #GDataPicasaWebFile:timestamp property. It's a UNIX timestamp in milliseconds (not seconds) since the epoch. If the property is unset,
     * <code class="literal">-1</code> will be returned.
     */
    getTimestamp(): number
    /**
     * Gets the #GDataPicasaWebFile:version property.
     */
    getVersion(): string
    /**
     * Gets the #GDataPicasaWebFile:video-status property.
     */
    getVideoStatus(): string
    /**
     * Gets the #GDataPicasaWebFile:width property.
     */
    getWidth(): number
    /**
     * Sets the #GDataPicasaWebFile:album-id property, effectively moving the file to the album.
     * @param albumId the ID of the new album for this file
     */
    setAlbumId(albumId: string): void
    /**
     * Sets the #GDataPicasaWebFile:caption property to `caption`.
     * 
     * Set `caption` to %NULL to unset the file's caption.
     * @param caption the file's new caption, or %NULL
     */
    setCaption(caption: string | null): void
    /**
     * Sets the #GDataPicasaWebFile:checksum property to `checksum`.
     * 
     * Set `checksum` to %NULL to unset the property.
     * @param checksum the new checksum for this file, or %NULL
     */
    setChecksum(checksum: string | null): void
    /**
     * Sets the #GDataPicasaWebFile:latitude and #GDataPicasaWebFile:longitude properties to
     * `latitude` and `longitude` respectively.
     * @param latitude the file's new latitude coordinate, or %G_MAXDOUBLE
     * @param longitude the file's new longitude coordinate, or %G_MAXDOUBLE
     */
    setCoordinates(latitude: number, longitude: number): void
    /**
     * Sets the #GDataPicasaWebFile:is-commenting-enabled property to `is_commenting_enabled`.
     * @param isCommentingEnabled %TRUE if commenting should be enabled for the file, %FALSE otherwise
     */
    setIsCommentingEnabled(isCommentingEnabled: boolean): void
    /**
     * Sets the #GDataPicasaWebFile:rotation property to `rotation`.
     * 
     * The rotation is absolute, rather than cumulative, through successive calls to gdata_picasaweb_file_set_rotation(),
     * so calling it with 90° then 20° will result in a final rotation of 20°.
     * @param rotation the new rotation for the image, in degrees
     */
    setRotation(rotation: number): void
    /**
     * Sets the #GDataPicasaWebFile:tags property to `tags`.
     * 
     * Set `tags` to %NULL to unset the property.
     * @param tags a new %NULL-terminated array of tags, or %NULL
     */
    setTags(tags: string[] | null): void
    /**
     * Sets the #GDataPicasaWebFile:timestamp property from `timestamp`. This should be a UNIX timestamp in milliseconds (not seconds) since the epoch. If
     * `timestamp` is <code class="literal">-1</code>, the property will be unset.
     * @param timestamp a UNIX timestamp, or <code class="literal">-1</code>
     */
    setTimestamp(timestamp: number): void

    // Class property signals of GData-0.0.GData.PicasaWebFile

    connect(sigName: "notify::album-id", callback: any): number
    on(sigName: "notify::album-id", callback: any): number
    once(sigName: "notify::album-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::album-id", ...args: any[]): void
    connect(sigName: "notify::caption", callback: any): number
    on(sigName: "notify::caption", callback: any): number
    once(sigName: "notify::caption", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::caption", ...args: any[]): void
    connect(sigName: "notify::checksum", callback: any): number
    on(sigName: "notify::checksum", callback: any): number
    once(sigName: "notify::checksum", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::checksum", ...args: any[]): void
    connect(sigName: "notify::comment-count", callback: any): number
    on(sigName: "notify::comment-count", callback: any): number
    once(sigName: "notify::comment-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::comment-count", ...args: any[]): void
    connect(sigName: "notify::credit", callback: any): number
    on(sigName: "notify::credit", callback: any): number
    once(sigName: "notify::credit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::credit", ...args: any[]): void
    connect(sigName: "notify::distance", callback: any): number
    on(sigName: "notify::distance", callback: any): number
    once(sigName: "notify::distance", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::distance", ...args: any[]): void
    connect(sigName: "notify::edited", callback: any): number
    on(sigName: "notify::edited", callback: any): number
    once(sigName: "notify::edited", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::edited", ...args: any[]): void
    connect(sigName: "notify::exposure", callback: any): number
    on(sigName: "notify::exposure", callback: any): number
    once(sigName: "notify::exposure", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::exposure", ...args: any[]): void
    connect(sigName: "notify::file-id", callback: any): number
    on(sigName: "notify::file-id", callback: any): number
    once(sigName: "notify::file-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-id", ...args: any[]): void
    connect(sigName: "notify::flash", callback: any): number
    on(sigName: "notify::flash", callback: any): number
    once(sigName: "notify::flash", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flash", ...args: any[]): void
    connect(sigName: "notify::focal-length", callback: any): number
    on(sigName: "notify::focal-length", callback: any): number
    once(sigName: "notify::focal-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focal-length", ...args: any[]): void
    connect(sigName: "notify::fstop", callback: any): number
    on(sigName: "notify::fstop", callback: any): number
    once(sigName: "notify::fstop", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fstop", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::image-unique-id", callback: any): number
    on(sigName: "notify::image-unique-id", callback: any): number
    once(sigName: "notify::image-unique-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image-unique-id", ...args: any[]): void
    connect(sigName: "notify::is-commenting-enabled", callback: any): number
    on(sigName: "notify::is-commenting-enabled", callback: any): number
    once(sigName: "notify::is-commenting-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-commenting-enabled", ...args: any[]): void
    connect(sigName: "notify::iso", callback: any): number
    on(sigName: "notify::iso", callback: any): number
    once(sigName: "notify::iso", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::iso", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::make", callback: any): number
    on(sigName: "notify::make", callback: any): number
    once(sigName: "notify::make", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::make", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::rotation", callback: any): number
    on(sigName: "notify::rotation", callback: any): number
    once(sigName: "notify::rotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rotation", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::tags", callback: any): number
    on(sigName: "notify::tags", callback: any): number
    once(sigName: "notify::tags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tags", ...args: any[]): void
    connect(sigName: "notify::timestamp", callback: any): number
    on(sigName: "notify::timestamp", callback: any): number
    once(sigName: "notify::timestamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timestamp", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::video-status", callback: any): number
    on(sigName: "notify::video-status", callback: any): number
    once(sigName: "notify::video-status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::video-status", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebFile structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebFile extends Entry {

    // Own properties of GData-0.0.GData.PicasaWebFile

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebFile

    constructor(config?: PicasaWebFile.ConstructorProperties) 
    /**
     * Creates a new #GDataPicasaWebFile with the given ID and default properties.
     * @constructor 
     * @param id the file's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataPicasaWebFile with the given ID and default properties.
     * @constructor 
     * @param id the file's ID, or %NULL
     */
    static new(id: string | null): PicasaWebFile

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: PicasaWebFile.ConstructorProperties): void
}

export module PicasaWebQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.PicasaWebQuery

        /**
         * A comma-separated list of image sizes (width in pixels) to return. Only certain sizes are allowed, and whether the image should be
         * cropped or scaled can be specified; for more information, see the
         * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
         */
        imageSize?: string | null
        /**
         * A location to search for photos, e.g. "London".
         */
        location?: string | null
        /**
         * A tag which returned results must contain.
         */
        tag?: string | null
        /**
         * A comma-separated list of thumbnail widths (in pixels) to return. Only certain sizes are allowed, and whether the thumbnail should be
         * cropped or scaled can be specified; for more information, see the
         * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
         */
        thumbnailSize?: string | null
        /**
         * Specifies which albums should be listed, in terms of their visibility (#GDataPicasaWebAlbum:visibility).
         * 
         * Set the property to <code class="literal">0</code> to list all albums, regardless of their visibility. Otherwise, use values
         * from #GDataPicasaWebVisibility.
         * 
         * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility">
         * online documentation</ulink>.
         */
        visibility?: number | null
    }

}

export interface PicasaWebQuery {

    // Own properties of GData-0.0.GData.PicasaWebQuery

    /**
     * A comma-separated list of image sizes (width in pixels) to return. Only certain sizes are allowed, and whether the image should be
     * cropped or scaled can be specified; for more information, see the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
     */
    imageSize: string
    /**
     * A location to search for photos, e.g. "London".
     */
    location: string
    /**
     * A tag which returned results must contain.
     */
    tag: string
    /**
     * A comma-separated list of thumbnail widths (in pixels) to return. Only certain sizes are allowed, and whether the thumbnail should be
     * cropped or scaled can be specified; for more information, see the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Parameters">online documentation</ulink>.
     */
    thumbnailSize: string
    /**
     * Specifies which albums should be listed, in terms of their visibility (#GDataPicasaWebAlbum:visibility).
     * 
     * Set the property to <code class="literal">0</code> to list all albums, regardless of their visibility. Otherwise, use values
     * from #GDataPicasaWebVisibility.
     * 
     * For more information, see the <ulink type="http" url="http://code.google.com/apis/picasaweb/reference.html#Visibility">
     * online documentation</ulink>.
     */
    visibility: number

    // Own fields of GData-0.0.GData.PicasaWebQuery

    parent: Query & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.PicasaWebQuery

    /**
     * Gets the latitudes and longitudes of a bounding box, inside which all the results must lie.
     */
    getBoundingBox(): [ /* north */ number, /* east */ number, /* south */ number, /* west */ number ]
    /**
     * Gets the #GDataPicasaWebQuery:image-size property.
     */
    getImageSize(): string
    /**
     * Gets the #GDataPicasaWebQuery:location property.
     */
    getLocation(): string
    /**
     * Gets the #GDataPicasaWebQuery:tag property.
     */
    getTag(): string
    /**
     * Gets the #GDataPicasaWebQuery:thumbnail-size property.
     */
    getThumbnailSize(): string
    /**
     * Gets the #GDataPicasaWebQuery:visibility property.
     */
    getVisibility(): PicasaWebVisibility
    /**
     * Sets a bounding box, inside which all the returned results must lie.
     * 
     * Set `north,` `east,` `south` and `west` to <code class="literal">0</code> to unset the property.
     * @param north latitude of the top of the box
     * @param east longitude of the right of the box
     * @param south latitude of the bottom of the box
     * @param west longitude of the left of the box
     */
    setBoundingBox(north: number, east: number, south: number, west: number): void
    /**
     * Sets the #GDataPicasaWebQuery:image-size property to `image_size`.
     * Valid sizes are described in the
     * <ulink type="http" url="http://code.google.com/apis/picasaweb/docs/2.0/reference.html#Parameters">online documentation</ulink>.
     * 
     * Set `image_size` to %NULL to unset the property.
     * @param imageSize the desired size of the image to be retrieved, or %NULL
     */
    setImageSize(imageSize: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:location property to `location`.
     * 
     * Set `location` to %NULL to unset the property.
     * @param location a location which returned objects must be near, or %NULL
     */
    setLocation(location: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:tag property to `tag`.
     * 
     * Set `tag` to %NULL to unset the property.
     * @param tag a tag which retrieved objects must have, or %NULL
     */
    setTag(tag: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:thumbnail-size property to `thumbnail_size`.
     * 
     * Set `thumbnail_size` to %NULL to unset the property.
     * @param thumbnailSize a comma-separated list of thumbnail sizes to retrieve, or %NULL
     */
    setThumbnailSize(thumbnailSize: string | null): void
    /**
     * Sets the #GDataPicasaWebQuery:visibility property to `visibility`.
     * @param visibility the visibility of the objects to retrieve, or <code class="literal">0</code> to retrieve all objects
     */
    setVisibility(visibility: PicasaWebVisibility): void

    // Class property signals of GData-0.0.GData.PicasaWebQuery

    connect(sigName: "notify::image-size", callback: any): number
    on(sigName: "notify::image-size", callback: any): number
    once(sigName: "notify::image-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image-size", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::tag", callback: any): number
    on(sigName: "notify::tag", callback: any): number
    once(sigName: "notify::tag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag", ...args: any[]): void
    connect(sigName: "notify::thumbnail-size", callback: any): number
    on(sigName: "notify::thumbnail-size", callback: any): number
    once(sigName: "notify::thumbnail-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::thumbnail-size", ...args: any[]): void
    connect(sigName: "notify::visibility", callback: any): number
    on(sigName: "notify::visibility", callback: any): number
    once(sigName: "notify::visibility", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visibility", ...args: any[]): void
    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebQuery structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebQuery extends Query {

    // Own properties of GData-0.0.GData.PicasaWebQuery

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebQuery

    constructor(config?: PicasaWebQuery.ConstructorProperties) 
    /**
     * Creates a new #GDataPicasaWebQuery with its #GDataQuery:q property set to `q`.
     * 
     * Note that when querying for albums with gdata_picasaweb_service_query_all_albums(), the `q` parameter cannot be used.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataPicasaWebQuery with its #GDataQuery:q property set to `q`.
     * 
     * Note that when querying for albums with gdata_picasaweb_service_query_all_albums(), the `q` parameter cannot be used.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): PicasaWebQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a #GDataPicasaWebQuery with its #GDataQuery:q property set to `q,` returning `max_results` starting from the `start_index<`!-- -->th result.
     * 
     * Note that when querying for albums with gdata_picasaweb_service_query_all_albums(), the `q` parameter cannot be used.
     * 
     * This is useful for paging through results, but the result set between separate queries may change. So, if you use this to
     * request the next ten results after a previous query, it may include some of the previously returned results if their order changed, or
     * omit ones that would have otherwise been found in a earlier but larger query.
     * @constructor 
     * @param q a query string, or %NULL
     * @param startIndex the index of the first result to include, or <code class="literal">0</code>
     * @param maxResults the maximum number of results to include, or <code class="literal">0</code>
     */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): PicasaWebQuery

    // Overloads of newWithLimits

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param startIndex a one-based start index for the results, or <code class="literal">0</code>
     * @param maxResults the maximum number of results to return, or <code class="literal">0</code>
     */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): Query
    _init(config?: PicasaWebQuery.ConstructorProperties): void
}

export module PicasaWebService {

    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

export interface PicasaWebService {

    // Own fields of GData-0.0.GData.PicasaWebService

    parent: Service & GObject.Object

    // Owm methods of GData-0.0.GData.PicasaWebService

    /**
     * Finish off a file upload operation started by gdata_picasaweb_service_upload_file(), parsing the result and returning the new #GDataPicasaWebFile.
     * 
     * If an error occurred during the upload operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
     * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
     * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
     * @param uploadStream the #GDataUploadStream from the operation
     */
    finishFileUpload(uploadStream: UploadStream): PicasaWebFile
    /**
     * Queries the service to return the user specified by `username`.
     * @param username the username of the user whose information you wish to retrieve, or %NULL for the currently authenticated user.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    getUser(username: string | null, cancellable: Gio.Cancellable | null): PicasaWebUser
    /**
     * Queries the service to return the user specified by `username`.
     * 
     * For more details, see gdata_picasaweb_service_get_user() which is the synchronous version of this method.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_picasaweb_service_get_user_finish() to get the results of the
     * operation.
     * @param username the username of the user whose information you wish to retrieve, or %NULL for the currently authenticated user
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    getUserAsync(username: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous user retrieval operation started with gdata_picasaweb_service_get_user_async().
     * @param result a #GAsyncResult
     */
    getUserFinish(result: Gio.AsyncResult): PicasaWebUser
    /**
     * Inserts a new album described by `album`. A user must be
     * authenticated to use this function.
     * @param album a #GDataPicasaWebAlbum to create on the server
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insertAlbum(album: PicasaWebAlbum, cancellable: Gio.Cancellable | null): PicasaWebAlbum
    /**
     * Inserts a new album described by `album`. The user must be authenticated to use this function. `self` and `album` are both reffed when this function
     * is called, so can safely be unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataPicasaWebAlbum representing the inserted album and to check for
     * possible errors.
     * 
     * For more details, see gdata_picasaweb_service_insert_album(), which is the synchronous version of this function, and
     * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
     * @param album a #GDataPicasaWebAlbum to create on the server
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insertAlbumAsync(album: PicasaWebAlbum, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of all albums belonging to the specified `username` which match the given
     * `query`. If a user is authenticated with the service, `username` can be set as %NULL to return a list of albums belonging
     * to the currently-authenticated user.
     * 
     * Note that the #GDataQuery:q query parameter cannot be set on `query` for album queries.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param username the username of the user whose albums you wish to retrieve, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryAllAlbums(query: Query | null, username: string | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of all albums belonging to the specified `username` which match the given
     * `query`. `self,` `query` and `username` are all reffed/copied when this function is called, so can safely be unreffed/freed after
     * this function returns.
     * 
     * For more details, see gdata_picasaweb_service_query_all_albums(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param username the username of the user whose albums you wish to retrieve, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryAllAlbumsAsync(query: Query | null, username: string | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the specified `album` for a list of the files which match the given `query`. If `album` is %NULL and a user is
     * authenticated with the service, the user's default album will be queried.
     * 
     * For more details, see gdata_service_query().
     * @param album a #GDataPicasaWebAlbum from which to retrieve the files, or %NULL
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryFiles(album: PicasaWebAlbum | null, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the specified `album` for a list of the files which match the given `query`. If `album` is %NULL and a user is authenticated with the service,
     * the user's default album will be queried. `self,` `album` and `query` are all reffed when this function is called, so can safely be unreffed after
     * this function returns.
     * 
     * For more details, see gdata_picasaweb_service_query_files(), which is the synchronous version of this function, and gdata_service_query_async(),
     * which is the base asynchronous query function.
     * @param album a #GDataPicasaWebAlbum from which to retrieve the files, or %NULL
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    queryFilesAsync(album: PicasaWebAlbum | null, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Uploads a file (photo or video) to the given PicasaWeb `album,` using the metadata from `file` and the file data written to the resulting
     * #GDataUploadStream. If `album` is %NULL, the file will be uploaded to the currently-authenticated user's "Drop Box" album. A user must be
     * authenticated to use this function.
     * 
     * If `file` has already been inserted, a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned.
     * 
     * If no user is authenticated with the service, %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED will be returned. It is recommended to retry the
     * upload after refreshing the authorization tokens held by the associated #GDataAuthorizer using gdata_authorizer_refresh_authorization().
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_picasaweb_service_finish_file_upload() should be called on it to parse and return the updated
     * #GDataPicasaWebFile for the uploaded file. This must be done, as `file_entry` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param album a #GDataPicasaWebAlbum into which to insert the file, or %NULL
     * @param fileEntry a #GDataPicasaWebFile to insert
     * @param slug the filename to give to the uploaded file
     * @param contentType the content type of the uploaded data
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    uploadFile(album: PicasaWebAlbum | null, fileEntry: PicasaWebFile, slug: string, contentType: string, cancellable: Gio.Cancellable | null): UploadStream

    // Class property signals of GData-0.0.GData.PicasaWebService

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebService structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebService extends Service {

    // Own properties of GData-0.0.GData.PicasaWebService

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebService

    constructor(config?: PicasaWebService.ConstructorProperties) 
    /**
     * Creates a new #GDataPicasaWebService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataPicasaWebService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): PicasaWebService
    _init(config?: PicasaWebService.ConstructorProperties): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with PicasaWeb. This will not normally need to be used, as it's used internally
     * by the #GDataPicasaWebService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
}

export module PicasaWebUser {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {
    }

}

export interface PicasaWebUser {

    // Own properties of GData-0.0.GData.PicasaWebUser

    /**
     * The maximum number of photos allowed in an album.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_maxPhotosPerAlbum
     * 
     * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be <code class="literal">-1</code>.
     */
    readonly maxPhotosPerAlbum: number
    /**
     * The user's nickname. This is a user-specified value that should be used when referring to the user by name.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_nickname
     */
    readonly nickname: string
    /**
     * The current amount of space, in bytes, already used by the user.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotacurrent
     * 
     * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be <code class="literal">-1</code>.
     */
    readonly quotaCurrent: number
    /**
     * The total amount of space, in bytes, available to the user.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_quotalimit
     * 
     * If the #GDataPicasaWebUser does not represent the currently authenticated user, this will be <code class="literal">-1</code>.
     */
    readonly quotaLimit: number
    /**
     * The URI of a thumbnail-sized portrait of the user.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_thumbnail
     */
    readonly thumbnailUri: string
    /**
     * The username of the user, as seen in feed URLs.
     * http://code.google.com/apis/picasaweb/docs/2.0/reference.html#gphoto_user
     */
    readonly user: string

    // Own fields of GData-0.0.GData.PicasaWebUser

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.PicasaWebUser

    /**
     * Gets the #GDataPicasaWebUser:max-photos-per-album property.  Note that
     * this information is not available when accessing feeds which we
     * haven't authenticated, and <code class="literal">0</code> is returned.
     */
    getMaxPhotosPerAlbum(): number
    /**
     * Gets the #GDataPicasaWebUser:nickname property.
     */
    getNickname(): string
    /**
     * Gets the #GDataPicasaWebUser:quota-current property.  Note that
     * this information is not available when accessing feeds which we
     * haven't authenticated, and <code class="literal">0</code> is returned.
     */
    getQuotaCurrent(): number
    /**
     * Gets the #GDataPicasaWebUser:quota-limit property. Note that
     * this information is not available when accessing feeds which we
     * haven't authenticated, and <code class="literal">0</code> is returned.
     */
    getQuotaLimit(): number
    /**
     * Gets the #GDataPicasaWebUser:thumbnail-uri property.
     */
    getThumbnailUri(): string
    /**
     * Gets the #GDataPicasaWebUser:user property.
     */
    getUser(): string

    // Class property signals of GData-0.0.GData.PicasaWebUser

    connect(sigName: "notify::max-photos-per-album", callback: any): number
    on(sigName: "notify::max-photos-per-album", callback: any): number
    once(sigName: "notify::max-photos-per-album", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-photos-per-album", ...args: any[]): void
    connect(sigName: "notify::nickname", callback: any): number
    on(sigName: "notify::nickname", callback: any): number
    once(sigName: "notify::nickname", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nickname", ...args: any[]): void
    connect(sigName: "notify::quota-current", callback: any): number
    on(sigName: "notify::quota-current", callback: any): number
    once(sigName: "notify::quota-current", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-current", ...args: any[]): void
    connect(sigName: "notify::quota-limit", callback: any): number
    on(sigName: "notify::quota-limit", callback: any): number
    once(sigName: "notify::quota-limit", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quota-limit", ...args: any[]): void
    connect(sigName: "notify::thumbnail-uri", callback: any): number
    on(sigName: "notify::thumbnail-uri", callback: any): number
    once(sigName: "notify::thumbnail-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::thumbnail-uri", ...args: any[]): void
    connect(sigName: "notify::user", callback: any): number
    on(sigName: "notify::user", callback: any): number
    once(sigName: "notify::user", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::user", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataPicasaWebUser structure are private and should never be accessed directly.
 * @class 
 */
export class PicasaWebUser extends Entry {

    // Own properties of GData-0.0.GData.PicasaWebUser

    static name: string

    // Constructors of GData-0.0.GData.PicasaWebUser

    constructor(config?: PicasaWebUser.ConstructorProperties) 
    _init(config?: PicasaWebUser.ConstructorProperties): void
}

export module Query {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Query

        /**
         * An entry author. The service returns entries where the author name and/or e-mail address match your query string.
         */
        author?: string | null
        /**
         * A category filter.
         * 
         * You can query on multiple categories by listing multiple categories separated by slashes. The service returns all entries that match all
         * of the categories (like using AND between terms). For example: <userinput>Fritz/Laurie</userinput> returns
         * entries that match both categories ("Fritz" and "Laurie").
         * 
         * To do an OR between terms, use a pipe character (<literal>|</literal>). For example: <userinput>Fritz\%7CLaurie</userinput> returns
         * entries that match either category.
         * 
         * An entry matches a specified category if the entry is in a category that has a matching term or label, as defined in the Atom
         * specification. (Roughly, the "term" is the internal string used by the software to identify the category, while the "label" is the
         * human-readable string presented to a user in a user interface.)
         * 
         * To exclude entries that match a given category, use the form <userinput>-categoryname</userinput>.
         * 
         * To query for a category that has a scheme – such as <literal>&lt;category scheme="urn:google.com" term="public"/&gt;</literal> – you must
         * place the scheme in curly braces before the category name. For example: <userinput>{urn:google.com}public</userinput>. To match a category
         * that has no scheme, use an empty pair of curly braces. If you don't specify curly braces, then categories in any scheme will match.
         * 
         * The above features can be combined. For example: <userinput>A|-{urn:google.com}B/-C</userinput> means (A OR (NOT B)) AND (NOT C).
         */
        categories?: string | null
        /**
         * The ETag against which to check for updates. If the server-side ETag matches this one, the requested feed hasn't changed, and is not
         * returned unnecessarily.
         * 
         * Setting any of the other query properties will unset the ETag, as ETags match against entire queries. If the ETag should be used in a
         * query, it must be set again using gdata_query_set_etag() after setting any other properties.
         */
        etag?: string | null
        /**
         * Strict query parameter checking. If this is enabled, an error will be returned by the online service if a parameter is
         * not recognised.
         */
        isStrict?: boolean | null
        /**
         * Maximum number of results to be retrieved. Most services have a default #GDataQuery:max-results size imposed by the server; if you wish
         * to receive the entire feed, specify a large number such as %G_MAXUINT for this property.
         * 
         * Use <code class="literal">0</code> to not specify a maximum number of results.
         */
        maxResults?: number | null
        /**
         * Upper bound on the entry publish date, exclusive.
         */
        publishedMax?: number | null
        /**
         * Lower bound on the entry publish date, inclusive.
         */
        publishedMin?: number | null
        /**
         * A full-text query string.
         * 
         * When creating a query, list search terms separated by spaces, in the form <userinput>term1 term2 term3</userinput>.
         * (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the
         * search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with
         * the same stem), not substrings.
         * 
         * To search for an exact phrase, enclose the phrase in quotation marks: <userinput>"exact phrase"</userinput>.
         * 
         * To exclude entries that match a given term, use the form <userinput>-term</userinput>.
         * 
         * The search is case-insensitive.
         * 
         * Example: to search for all entries that contain the exact phrase "Elizabeth Bennet" and the word "Darcy" but don't contain the
         * word "Austen", use the following query: <userinput>"Elizabeth Bennet" Darcy -Austen</userinput>.
         */
        q?: string | null
        /**
         * The one-based index of the first result to be retrieved. Use gdata_query_next_page() and gdata_query_previous_page() to
         * implement pagination, rather than manually changing #GDataQuery:start-index.
         * 
         * Use <code class="literal">0</code> to not specify a start index.
         */
        startIndex?: number | null
        /**
         * Upper bound on the entry update date, exclusive.
         */
        updatedMax?: number | null
        /**
         * Lower bound on the entry update date, inclusive.
         */
        updatedMin?: number | null
    }

}

export interface Query {

    // Own properties of GData-0.0.GData.Query

    /**
     * An entry author. The service returns entries where the author name and/or e-mail address match your query string.
     */
    author: string
    /**
     * A category filter.
     * 
     * You can query on multiple categories by listing multiple categories separated by slashes. The service returns all entries that match all
     * of the categories (like using AND between terms). For example: <userinput>Fritz/Laurie</userinput> returns
     * entries that match both categories ("Fritz" and "Laurie").
     * 
     * To do an OR between terms, use a pipe character (<literal>|</literal>). For example: <userinput>Fritz\%7CLaurie</userinput> returns
     * entries that match either category.
     * 
     * An entry matches a specified category if the entry is in a category that has a matching term or label, as defined in the Atom
     * specification. (Roughly, the "term" is the internal string used by the software to identify the category, while the "label" is the
     * human-readable string presented to a user in a user interface.)
     * 
     * To exclude entries that match a given category, use the form <userinput>-categoryname</userinput>.
     * 
     * To query for a category that has a scheme – such as <literal>&lt;category scheme="urn:google.com" term="public"/&gt;</literal> – you must
     * place the scheme in curly braces before the category name. For example: <userinput>{urn:google.com}public</userinput>. To match a category
     * that has no scheme, use an empty pair of curly braces. If you don't specify curly braces, then categories in any scheme will match.
     * 
     * The above features can be combined. For example: <userinput>A|-{urn:google.com}B/-C</userinput> means (A OR (NOT B)) AND (NOT C).
     */
    categories: string
    /**
     * The ETag against which to check for updates. If the server-side ETag matches this one, the requested feed hasn't changed, and is not
     * returned unnecessarily.
     * 
     * Setting any of the other query properties will unset the ETag, as ETags match against entire queries. If the ETag should be used in a
     * query, it must be set again using gdata_query_set_etag() after setting any other properties.
     */
    etag: string
    /**
     * Strict query parameter checking. If this is enabled, an error will be returned by the online service if a parameter is
     * not recognised.
     */
    isStrict: boolean
    /**
     * Maximum number of results to be retrieved. Most services have a default #GDataQuery:max-results size imposed by the server; if you wish
     * to receive the entire feed, specify a large number such as %G_MAXUINT for this property.
     * 
     * Use <code class="literal">0</code> to not specify a maximum number of results.
     */
    maxResults: number
    /**
     * Upper bound on the entry publish date, exclusive.
     */
    publishedMax: number
    /**
     * Lower bound on the entry publish date, inclusive.
     */
    publishedMin: number
    /**
     * A full-text query string.
     * 
     * When creating a query, list search terms separated by spaces, in the form <userinput>term1 term2 term3</userinput>.
     * (As with all of the query parameter values, the spaces must be URL encoded.) The service returns all entries that match all of the
     * search terms (like using AND between terms). Like Google's web search, a service searches on complete words (and related words with
     * the same stem), not substrings.
     * 
     * To search for an exact phrase, enclose the phrase in quotation marks: <userinput>"exact phrase"</userinput>.
     * 
     * To exclude entries that match a given term, use the form <userinput>-term</userinput>.
     * 
     * The search is case-insensitive.
     * 
     * Example: to search for all entries that contain the exact phrase "Elizabeth Bennet" and the word "Darcy" but don't contain the
     * word "Austen", use the following query: <userinput>"Elizabeth Bennet" Darcy -Austen</userinput>.
     */
    q: string
    /**
     * The one-based index of the first result to be retrieved. Use gdata_query_next_page() and gdata_query_previous_page() to
     * implement pagination, rather than manually changing #GDataQuery:start-index.
     * 
     * Use <code class="literal">0</code> to not specify a start index.
     */
    startIndex: number
    /**
     * Upper bound on the entry update date, exclusive.
     */
    updatedMax: number
    /**
     * Lower bound on the entry update date, inclusive.
     */
    updatedMin: number

    // Own fields of GData-0.0.GData.Query

    parent: GObject.Object
    priv: QueryPrivate

    // Owm methods of GData-0.0.GData.Query

    /**
     * Gets the #GDataQuery:author property.
     */
    getAuthor(): string
    /**
     * Gets the #GDataQuery:categories property.
     */
    getCategories(): string
    /**
     * Gets the #GDataQuery:etag property.
     */
    getEtag(): string
    /**
     * Gets the #GDataQuery:max-results property.
     */
    getMaxResults(): number
    /**
     * Gets the #GDataQuery:published-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getPublishedMax(): number
    /**
     * Gets the #GDataQuery:published-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getPublishedMin(): number
    /**
     * Gets the #GDataQuery:q property.
     */
    getQ(): string
    // Has conflict: getQueryUri(feedUri: string): string
    /**
     * Gets the #GDataQuery:start-index property.
     */
    getStartIndex(): number
    /**
     * Gets the #GDataQuery:updated-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getUpdatedMax(): number
    /**
     * Gets the #GDataQuery:updated-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getUpdatedMin(): number
    /**
     * Changes the state of the #GDataQuery such that when gdata_query_get_query_uri() is next called, it will build the
     * query URI for the next page in the result set.
     * 
     * Ideally, the URI of the next page is retrieved from a feed automatically when gdata_service_query() is called, but
     * gdata_query_next_page() will fall back to using #GDataQuery:start-index to emulate true pagination if this fails.
     * 
     * You <emphasis>should not</emphasis> implement pagination manually using #GDataQuery:start-index.
     */
    nextPage(): void
    /**
     * Changes the state of the #GDataQuery such that when gdata_query_get_query_uri() is next called, it will build the
     * query URI for the previous page in the result set.
     * 
     * See the documentation for gdata_query_next_page() for an explanation of how query URIs from the feeds are used to this end.
     */
    previousPage(): boolean
    /**
     * Sets the #GDataQuery:author property of the #GDataQuery to the new author string, `author`.
     * 
     * Set `author` to %NULL to unset the property in the query URI.
     * @param author the new author string, or %NULL
     */
    setAuthor(author: string | null): void
    /**
     * Sets the #GDataQuery:categories property of the #GDataQuery to the new category string, `categories`.
     * 
     * Set `categories` to %NULL to unset the property in the query URI.
     * @param categories the new category string, or %NULL
     */
    setCategories(categories: string | null): void
    /**
     * Sets the #GDataQuery:etag property of the #GDataQuery to the new ETag, `etag`.
     * 
     * Set `etag` to %NULL to not check against the server-side ETag.
     * @param etag the new ETag, or %NULL
     */
    setEtag(etag: string | null): void
    /**
     * Sets the #GDataQuery:is-strict property of the #GDataQuery to the new strict value, `is_strict`.
     * @param isStrict the new strict value
     */
    setIsStrict(isStrict: boolean): void
    /**
     * Sets the #GDataQuery:max-results property of the #GDataQuery to the new maximum results value, `max_results`.
     * 
     * Set `max_results` to <code class="literal">0</code> to unset the property in the query URI.
     * @param maxResults the new maximum results value, or <code class="literal">0</code>
     */
    setMaxResults(maxResults: number): void
    /**
     * Sets the #GDataQuery:published-max property of the #GDataQuery to the new maximum publish time, `published_max`.
     * 
     * Set `published_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param publishedMax the new maximum publish time, or <code class="literal">-1</code>
     */
    setPublishedMax(publishedMax: number): void
    /**
     * Sets the #GDataQuery:published-min property of the #GDataQuery to the new minimum publish time, `published_min`.
     * 
     * Set `published_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param publishedMin the new minimum publish time, or <code class="literal">-1</code>
     */
    setPublishedMin(publishedMin: number): void
    /**
     * Sets the #GDataQuery:q property of the #GDataQuery to the new query string, `q`.
     * 
     * Set `q` to %NULL to unset the property in the query URI.
     * @param q a new query string, or %NULL
     */
    setQ(q: string | null): void
    /**
     * Sets the #GDataQuery:start-index property of the #GDataQuery to the new one-based start index, `start_index`.
     * 
     * Set `start_index` to <code class="literal">0</code> to unset the property in the query URI.
     * @param startIndex the new start index, or <code class="literal">0</code>
     */
    setStartIndex(startIndex: number): void
    /**
     * Sets the #GDataQuery:updated-max property of the #GDataQuery to the new maximum update time, `updated_max`.
     * 
     * Set `updated_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param updatedMax the new maximum update time, or <code class="literal">-1</code>
     */
    setUpdatedMax(updatedMax: number): void
    /**
     * Sets the #GDataQuery:updated-min property of the #GDataQuery to the new minimum update time, `updated_min`.
     * 
     * Set `updated_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param updatedMin the new minimum update time, or <code class="literal">-1</code>
     */
    setUpdatedMin(updatedMin: number): void

    // Own virtual methods of GData-0.0.GData.Query

    getQueryUri(feedUri: string, queryUri: GLib.String, paramsStarted: boolean): void

    // Class property signals of GData-0.0.GData.Query

    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataQuery structure are private and should never be accessed directly.
 * @class 
 */
export class Query extends GObject.Object {

    // Own properties of GData-0.0.GData.Query

    static name: string

    // Constructors of GData-0.0.GData.Query

    constructor(config?: Query.ConstructorProperties) 
    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q,` and the limits `start_index` and `max_results`
     * applied.
     * @constructor 
     * @param q a query string, or %NULL
     * @param startIndex a one-based start index for the results, or <code class="literal">0</code>
     * @param maxResults the maximum number of results to return, or <code class="literal">0</code>
     */
    static newWithLimits(q: string | null, startIndex: number, maxResults: number): Query
    _init(config?: Query.ConstructorProperties): void
}

export module Service {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.Service

        /**
         * An object which implements #GDataAuthorizer. This should have previously been authenticated authorized against this service type (and
         * potentially other service types). The service will use the authorizer to add an authorization token to each request it performs.
         * 
         * Your application should call methods on the #GDataAuthorizer object itself in order to authenticate with the Google accounts service and
         * authorize against this service type. See the documentation for the particular #GDataAuthorizer implementation being used for more details.
         * 
         * The authorizer for a service can be changed at runtime for a different #GDataAuthorizer object or %NULL without affecting ongoing requests
         * and operations.
         * 
         * Note that it's only necessary to set an authorizer on the service if your application is going to make requests of the service which
         * require authorization. For example, listing the current most popular videos on YouTube does not require authorization, but uploading a
         * video to YouTube does. It's an unnecessary overhead to require the user to authorize against a service when not strictly required.
         */
        authorizer?: Authorizer | null
        /**
         * The locale to use for network requests, in Unix locale format. (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
         * (typically "en_US").
         * 
         * Typically, this locale will be used by the server-side software to localise results, such as by translating category names, or by choosing
         * geographically relevant search results. This will vary from service to service.
         * 
         * The server-side behaviour is undefined if it doesn't support a given locale.
         */
        locale?: string | null
        /**
         * The #GProxyResolver used to determine a proxy URI.
         */
        proxyResolver?: Gio.ProxyResolver | null
        /**
         * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
         * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
         * 
         * If the timeout is <code class="literal">0</code>, operations will never time out.
         * 
         * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
         */
        timeout?: number | null
    }

}

export interface Service {

    // Own properties of GData-0.0.GData.Service

    /**
     * An object which implements #GDataAuthorizer. This should have previously been authenticated authorized against this service type (and
     * potentially other service types). The service will use the authorizer to add an authorization token to each request it performs.
     * 
     * Your application should call methods on the #GDataAuthorizer object itself in order to authenticate with the Google accounts service and
     * authorize against this service type. See the documentation for the particular #GDataAuthorizer implementation being used for more details.
     * 
     * The authorizer for a service can be changed at runtime for a different #GDataAuthorizer object or %NULL without affecting ongoing requests
     * and operations.
     * 
     * Note that it's only necessary to set an authorizer on the service if your application is going to make requests of the service which
     * require authorization. For example, listing the current most popular videos on YouTube does not require authorization, but uploading a
     * video to YouTube does. It's an unnecessary overhead to require the user to authorize against a service when not strictly required.
     */
    authorizer: Authorizer
    /**
     * The locale to use for network requests, in Unix locale format. (e.g. "en_GB", "cs", "de_DE".) Use %NULL for the default "C" locale
     * (typically "en_US").
     * 
     * Typically, this locale will be used by the server-side software to localise results, such as by translating category names, or by choosing
     * geographically relevant search results. This will vary from service to service.
     * 
     * The server-side behaviour is undefined if it doesn't support a given locale.
     */
    locale: string
    /**
     * The #GProxyResolver used to determine a proxy URI.
     */
    proxyResolver: Gio.ProxyResolver
    /**
     * A timeout, in seconds, for network operations. If the timeout is exceeded, the operation will be cancelled and
     * %GDATA_SERVICE_ERROR_NETWORK_ERROR will be returned.
     * 
     * If the timeout is <code class="literal">0</code>, operations will never time out.
     * 
     * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
     */
    timeout: number

    // Own fields of GData-0.0.GData.Service

    parent: GObject.Object
    priv: ServicePrivate

    // Owm methods of GData-0.0.GData.Service

    /**
     * Deletes `entry` from the server. For more information about the concept of deleting entries, see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#DeletingEntry">online documentation</ulink> for the GData
     * protocol.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the deletion will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * If there is an error deleting the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
     * <emphasis>cannot</emphasis> cannot override this or provide more specific errors.
     * @param domain the #GDataAuthorizationDomain the deletion falls under, or %NULL
     * @param entry the #GDataEntry to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `entry` from the server. `self` and `entry` are both reffed when this function is called,
     * so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_service_delete_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_delete_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the deletion falls under, or %NULL
     * @param entry the #GDataEntry to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when deletion is finished, or %NULL
     */
    deleteEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous entry deletion operation started with gdata_service_delete_entry_async().
     * @param asyncResult a #GAsyncResult
     */
    deleteEntryFinish(asyncResult: Gio.AsyncResult): boolean
    /**
     * Gets the #GDataAuthorizer object currently in use by the service. See the documentation for #GDataService:authorizer for more details.
     */
    getAuthorizer(): Authorizer
    /**
     * Returns the locale currently being used for network requests, or %NULL if the locale is the default.
     */
    getLocale(): string
    /**
     * Gets the #GProxyResolver on the #GDataService's #SoupSession.
     */
    getProxyResolver(): Gio.ProxyResolver | null
    /**
     * Gets the #GDataService:timeout property; the network timeout, in seconds.
     */
    getTimeout(): number
    /**
     * Inserts `entry` by uploading it to the online service at `upload_uri`. For more information about the concept of inserting entries, see
     * the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#InsertingEntry">online documentation</ulink> for the GData
     * protocol.
     * 
     * The service will return an updated version of the entry, which is the return value of this function on success.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the insertion will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * If the entry is marked as already having been inserted a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned immediately
     * (there will be no network requests).
     * 
     * If there is an error inserting the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
     * <emphasis>cannot</emphasis> cannot override this or provide more specific errors.
     * @param domain the #GDataAuthorizationDomain the insertion operation falls under, or %NULL
     * @param uploadUri the URI to which the upload should be sent
     * @param entry the #GDataEntry to insert
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insertEntry(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable: Gio.Cancellable | null): Entry
    /**
     * Inserts `entry` by uploading it to the online service at `upload_uri`. `self,` `upload_uri` and
     * `entry` are all reffed/copied when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_service_insert_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_insert_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the insertion operation falls under, or %NULL
     * @param uploadUri the URI to which the upload should be sent
     * @param entry the #GDataEntry to insert
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished, or %NULL
     */
    insertEntryAsync(domain: AuthorizationDomain | null, uploadUri: string, entry: Entry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous entry insertion operation started with gdata_service_insert_entry_async().
     * @param asyncResult a #GAsyncResult
     */
    insertEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /**
     * Determines whether the service is authorized for all the #GDataAuthorizationDomains it belongs to (as returned by
     * gdata_service_get_authorization_domains()). If the service's #GDataService:authorizer is %NULL, %FALSE is always returned.
     * 
     * This is basically a convenience method for checking that the service's #GDataAuthorizer is authorized for all the service's
     * #GDataAuthorizationDomains.
     */
    isAuthorized(): boolean
    /**
     * Queries the service's `feed_uri` feed to build a #GDataFeed.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the query will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * A %GDATA_SERVICE_ERROR_PROTOCOL_ERROR will be returned if the server indicates there is a problem with the query, but subclasses may override
     * this and return their own errors. See their documentation for more details.
     * 
     * For each entry in the response feed, `progress_callback` will be called in the main thread. If there was an error parsing the XML response,
     * a #GDataParserError will be returned.
     * 
     * If the query is successful and the feed supports pagination, `query` will be updated with the pagination URIs, and the next or previous page
     * can then be loaded by calling gdata_query_next_page() or gdata_query_previous_page() before running the query again.
     * 
     * If the #GDataQuery's ETag is set and it finds a match on the server, %NULL will be returned, but `error` will remain unset. Otherwise,
     * `query'`s ETag will be updated with the ETag from the returned feed, if available.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param feedUri the feed URI to query, including the host name and protocol
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entryType a #GType for the #GDataEntrys to build from the XML
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    query(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.GType, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service's `feed_uri` feed to build a #GDataFeed. `self,` `feed_uri` and
     * `query` are all reffed/copied when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_service_query(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param feedUri the feed URI to query, including the host name and protocol
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entryType a #GType for the #GDataEntrys to build from the XML
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    queryAsync(domain: AuthorizationDomain | null, feedUri: string, query: Query | null, entryType: GObject.GType, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous query operation started with gdata_service_query_async().
     * @param asyncResult a #GAsyncResult
     */
    queryFinish(asyncResult: Gio.AsyncResult): Feed
    /**
     * Retrieves information about the single entry with the given `entry_id`. `entry_id` should be as returned by
     * gdata_entry_get_id().
     * 
     * Parameters and errors are as for gdata_service_query(). Most of the properties of `query` aren't relevant, and
     * will cause a server-side error if used. The most useful property to use is #GDataQuery:etag, which will cause the
     * server to not return anything if the entry hasn't been modified since it was given the specified ETag; thus saving
     * bandwidth. If the server does not return anything for this reason, gdata_service_query_single_entry() will return
     * %NULL, but will not set an error in `error`.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param entryId the entry ID of the desired entry
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entryType a #GType for the #GDataEntry to build from the XML
     * @param cancellable a #GCancellable, or %NULL
     */
    querySingleEntry(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.GType, cancellable: Gio.Cancellable | null): Entry
    /**
     * Retrieves information about the single entry with the given `entry_id`. `entry_id` should be as returned by
     * gdata_entry_get_id(). `self,` `query` and `entry_id` are reffed/copied when this
     * function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_service_query_single_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_single_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the query falls under, or %NULL
     * @param entryId the entry ID of the desired entry
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param entryType a #GType for the #GDataEntry to build from the XML
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    querySingleEntryAsync(domain: AuthorizationDomain | null, entryId: string, query: Query | null, entryType: GObject.GType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous query operation for a single entry, as started with gdata_service_query_single_entry_async().
     * @param asyncResult a #GAsyncResult
     */
    querySingleEntryFinish(asyncResult: Gio.AsyncResult): Entry
    /**
     * Sets #GDataService:authorizer to `authorizer`. This may be %NULL if the service will only make requests in future which don't require authorization.
     * See the documentation for #GDataService:authorizer for more information.
     * @param authorizer a new authorizer object for the service, or %NULL
     */
    setAuthorizer(authorizer: Authorizer): void
    /**
     * Set the locale used for network requests to `locale,` given in standard Unix locale format. See #GDataService:locale for more details.
     * 
     * Note that while it's possible to change the locale after sending network requests, it is unsupported, as the server-side software may behave
     * unexpectedly. The only supported use of this function is after creation of a service, but before any network requests are made.
     * @param locale the new locale in Unix locale format, or %NULL for the default locale
     */
    setLocale(locale: string | null): void
    /**
     * Sets the #GProxyResolver on the #SoupSession used internally by the given #GDataService.
     * @param proxyResolver a #GProxyResolver, or %NULL
     */
    setProxyResolver(proxyResolver: Gio.ProxyResolver | null): void
    /**
     * Sets the #GDataService:timeout property; the network timeout, in seconds.
     * 
     * If `timeout` is <code class="literal">0</code>, network operations will never time out.
     * 
     * Note that if a #GDataAuthorizer is being used with this #GDataService, the authorizer might also need its timeout setting.
     * @param timeout the timeout, or <code class="literal">0</code>
     */
    setTimeout(timeout: number): void
    /**
     * Updates `entry` by PUTting it to its <literal>edit</literal> link's URI. For more information about the concept of updating entries, see
     * the <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/basics.html#UpdatingEntry">online documentation</ulink> for the GData
     * protocol.
     * 
     * The service will return an updated version of the entry, which is the return value of this function on success.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering the `cancellable` object from another thread.
     * If the operation was cancelled before or during network activity, the error %G_IO_ERROR_CANCELLED will be returned. Cancellation has no effect
     * after network activity has finished, however, and the update will return successfully (or return an error sent by the server) if it is first
     * cancelled after network activity has finished. See the <link linkend="cancellable-support">overview of cancellation</link> for
     * more details.
     * 
     * If there is an error updating the entry, a %GDATA_SERVICE_ERROR_PROTOCOL_ERROR error will be returned. Currently, subclasses
     * <emphasis>cannot</emphasis> cannot override this or provide more specific errors.
     * @param domain the #GDataAuthorizationDomain the update operation falls under, or %NULL
     * @param entry the #GDataEntry to update
     * @param cancellable optional #GCancellable object, or %NULL
     */
    updateEntry(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null): Entry
    /**
     * Updates `entry` by PUTting it to its <literal>edit</literal> link's URI. `self` and
     * `entry` are both reffed when this function is called, so can safely be unreffed after this function returns.
     * 
     * For more details, see gdata_service_update_entry(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_update_entry_finish()
     * to get the results of the operation.
     * @param domain the #GDataAuthorizationDomain the update operation falls under, or %NULL
     * @param entry the #GDataEntry to update
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the update is finished, or %NULL
     */
    updateEntryAsync(domain: AuthorizationDomain | null, entry: Entry, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous entry update operation started with gdata_service_update_entry_async().
     * @param asyncResult a #GAsyncResult
     */
    updateEntryFinish(asyncResult: Gio.AsyncResult): Entry

    // Own virtual methods of GData-0.0.GData.Service

    appendQueryHeaders(domain: AuthorizationDomain, message: Soup.Message): void
    parseErrorResponse(operationType: OperationType, status: number, reasonPhrase: string, responseBody: string, length: number): void

    // Class property signals of GData-0.0.GData.Service

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataService structure are private and should never be accessed directly.
 * @interface 
 */
export class Service extends GObject.Object {

    // Own properties of GData-0.0.GData.Service

    static name: string

    // Constructors of GData-0.0.GData.Service

    constructor(config?: Service.ConstructorProperties) 
    _init(config?: Service.ConstructorProperties): void
    /**
     * Retrieves the full list of #GDataAuthorizationDomains which relate to the specified `service_type`. All the
     * #GDataAuthorizationDomains are unique and interned, so can be compared with other domains by simple pointer comparison.
     * 
     * Note that in addition to this method, #GDataService subclasses may expose some or all of their authorization domains individually by means of
     * individual accessor functions.
     * @param serviceType the #GType of the #GDataService subclass to retrieve the authorization domains for
     */
    static getAuthorizationDomains(serviceType: GObject.GType): AuthorizationDomain[]
}

export module TasksQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.TasksQuery

        /**
         * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        completedMax?: number | null
        /**
         * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        completedMin?: number | null
        /**
         * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        dueMax?: number | null
        /**
         * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
         * The default is not to filter by completion date.
         */
        dueMin?: number | null
        /**
         * Flag indicating whether completed tasks are returned in the result. Optional. The default is %FALSE.
         */
        showCompleted?: boolean | null
        /**
         * Flag indicating whether deleted tasks are returned in the result. Optional. The default is %FALSE.
         */
        showDeleted?: boolean | null
        /**
         * Flag indicating whether hidden tasks are returned in the result. Optional. The default is %FALSE.
         */
        showHidden?: boolean | null
    }

}

export interface TasksQuery {

    // Own properties of GData-0.0.GData.TasksQuery

    /**
     * Upper bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    completedMax: number
    /**
     * Lower bound for a task's completion date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    completedMin: number
    /**
     * Upper bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    dueMax: number
    /**
     * Lower bound for a task's due date (as a RFC 3339 timestamp) to filter by. Optional.
     * The default is not to filter by completion date.
     */
    dueMin: number
    /**
     * Flag indicating whether completed tasks are returned in the result. Optional. The default is %FALSE.
     */
    showCompleted: boolean
    /**
     * Flag indicating whether deleted tasks are returned in the result. Optional. The default is %FALSE.
     */
    showDeleted: boolean
    /**
     * Flag indicating whether hidden tasks are returned in the result. Optional. The default is %FALSE.
     */
    showHidden: boolean

    // Own fields of GData-0.0.GData.TasksQuery

    parent: Query & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.TasksQuery

    /**
     * Gets the #GDataTasksQuery:completed-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getCompletedMax(): number
    /**
     * Gets the #GDataTasksQuery:completed-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getCompletedMin(): number
    /**
     * Gets the #GDataTasksQuery:due-max property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getDueMax(): number
    /**
     * Gets the #GDataTasksQuery:due-min property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getDueMin(): number
    /**
     * Gets the #GDataTasksQuery:show-completed property.
     */
    getShowCompleted(): boolean
    /**
     * Gets the #GDataTasksQuery:show-deleted property.
     */
    getShowDeleted(): boolean
    /**
     * Gets the #GDataTasksQuery:show-hidden property.
     */
    getShowHidden(): boolean
    /**
     * Sets the #GDataTasksQuery:completed-max property of the #GDataTasksQuery
     * to the new time/date, `completed_max`.
     * 
     * Set `completed_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param completedMax upper bound for a task's completion date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    setCompletedMax(completedMax: number): void
    /**
     * Sets the #GDataTasksQuery:completed-min property of the #GDataTasksQuery
     * to the new time/date, `completed_min`.
     * 
     * Set `completed_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param completedMin lower bound for a task's completion date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    setCompletedMin(completedMin: number): void
    /**
     * Sets the #GDataTasksQuery:due-max property of the #GDataTasksQuery
     * to the new time/date, `due_max`.
     * 
     * Set `due_max` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param dueMax upper bound for a task's due date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    setDueMax(dueMax: number): void
    /**
     * Sets the #GDataTasksQuery:due-min property of the #GDataTasksQuery
     * to the new time/date, `due_min`.
     * 
     * Set `due_min` to <code class="literal">-1</code> to unset the property in the query URI.
     * @param dueMin lower bound for a task's due date by UNIX timestamp, or  <code class="literal">-1</code>
     */
    setDueMin(dueMin: number): void
    /**
     * Sets the #GDataTasksQuery:show-completed property of the #GDataTasksQuery.
     * @param showCompleted %TRUE to show completed tasks, %FALSE otherwise
     */
    setShowCompleted(showCompleted: boolean): void
    /**
     * Sets the #GDataTasksQuery:show-deleted property of the #GDataTasksQuery.
     * @param showDeleted %TRUE to show deleted tasks, %FALSE otherwise
     */
    setShowDeleted(showDeleted: boolean): void
    /**
     * Sets the #GDataTasksQuery:show-hidden property of the #GDataTasksQuery.
     * @param showHidden %TRUE to show hidden tasks, %FALSE otherwise
     */
    setShowHidden(showHidden: boolean): void

    // Class property signals of GData-0.0.GData.TasksQuery

    connect(sigName: "notify::completed-max", callback: any): number
    on(sigName: "notify::completed-max", callback: any): number
    once(sigName: "notify::completed-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completed-max", ...args: any[]): void
    connect(sigName: "notify::completed-min", callback: any): number
    on(sigName: "notify::completed-min", callback: any): number
    once(sigName: "notify::completed-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completed-min", ...args: any[]): void
    connect(sigName: "notify::due-max", callback: any): number
    on(sigName: "notify::due-max", callback: any): number
    once(sigName: "notify::due-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::due-max", ...args: any[]): void
    connect(sigName: "notify::due-min", callback: any): number
    on(sigName: "notify::due-min", callback: any): number
    once(sigName: "notify::due-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::due-min", ...args: any[]): void
    connect(sigName: "notify::show-completed", callback: any): number
    on(sigName: "notify::show-completed", callback: any): number
    once(sigName: "notify::show-completed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-completed", ...args: any[]): void
    connect(sigName: "notify::show-deleted", callback: any): number
    on(sigName: "notify::show-deleted", callback: any): number
    once(sigName: "notify::show-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-deleted", ...args: any[]): void
    connect(sigName: "notify::show-hidden", callback: any): number
    on(sigName: "notify::show-hidden", callback: any): number
    once(sigName: "notify::show-hidden", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-hidden", ...args: any[]): void
    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataTasksQuery structure are private and should never be accessed directly.
 * @class 
 */
export class TasksQuery extends Query {

    // Own properties of GData-0.0.GData.TasksQuery

    static name: string

    // Constructors of GData-0.0.GData.TasksQuery

    constructor(config?: TasksQuery.ConstructorProperties) 
    /**
     * Creates a new #GDataTasksQuery. `q` is unused and must be set to %NULL.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataTasksQuery. `q` is unused and must be set to %NULL.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): TasksQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    _init(config?: TasksQuery.ConstructorProperties): void
}

export module TasksService {

    // Constructor properties interface

    export interface ConstructorProperties extends Service.ConstructorProperties {
    }

}

export interface TasksService {

    // Own fields of GData-0.0.GData.TasksService

    parent: Service & GObject.Object

    // Owm methods of GData-0.0.GData.TasksService

    /**
     * Delete `task` from online tasks service.
     * 
     * For more details, see gdata_service_delete_entry().
     * @param task the #GDataTasksTask to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteTask(task: TasksTask, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `task` from online tasks service. `self` and `task` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_delete_entry_finish() to finish deleting task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_delete_task(), which is the synchronous version of this function, and
     * gdata_service_delete_entry_async(), which is the base asynchronous insertion function.
     * @param task #GDataTasksTask to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    deleteTaskAsync(task: TasksTask, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Delete `tasklist` from online tasks service.
     * 
     * For more details, see gdata_service_delete_entry().
     * @param tasklist the #GDataTasksTasklist to delete
     * @param cancellable optional #GCancellable object, or %NULL
     */
    deleteTasklist(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes `tasklist` from online tasks service. `self` and `tasklist` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_delete_entry_finish() to finish deleting tasklist and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_delete_tasklist(), which is the synchronous version of this function, and
     * gdata_service_delete_entry_async(), which is the base asynchronous insertion function.
     * @param tasklist #GDataTasksTasklist to delete
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    deleteTasklistAsync(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Inserts `task` by uploading it to the online tasks service into tasklist `tasklist`. It is safe to unref `tasklist` after function returns.
     * 
     * For more details, see gdata_service_insert_entry().
     * @param task the #GDataTasksTask to insert
     * @param tasklist #GDataTasksTasklist to insert into
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insertTask(task: TasksTask, tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): TasksTask
    /**
     * Inserts `task` by uploading it to the online tasks service into tasklist `tasklist`. `self,` `task` and `tasklist` are all reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataTasksTask representing the inserted task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_insert_task(), which is the synchronous version of this function, and
     * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
     * @param task the #GDataTasksTask to insert
     * @param tasklist #GDataTasksTasklist to insert into
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insertTaskAsync(task: TasksTask, tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Inserts `tasklist` by uploading it to the online tasks service.
     * 
     * For more details, see gdata_service_insert_entry().
     * @param tasklist #GDataTasksTasklist to insert
     * @param cancellable optional #GCancellable object, or %NULL
     */
    insertTasklist(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): TasksTasklist
    /**
     * Inserts `tasklist` by uploading it to the online tasks service. `self` and `tasklist` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_insert_entry_finish() to obtain a #GDataTasksTasklist representing the inserted tasklist and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_insert_tasklist(), which is the synchronous version of this function, and
     * gdata_service_insert_entry_async(), which is the base asynchronous insertion function.
     * @param tasklist #GDataTasksTasklist to insert
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    insertTasklistAsync(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of all tasklists from the authenticated account which match the given
     * `query`. It will return all tasklists the user has read access to.
     * 
     * For more details, see gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryAllTasklists(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of all tasklists from the authenticated account which match the given
     * `query`. `self` and `query` are all reffed when this function is called, so can safely be unreffed after
     * this function returns.
     * 
     * For more details, see gdata_tasks_service_query_all_tasklists(), which is the synchronous version of
     * this function, and gdata_service_query_async(), which is the base asynchronous query function.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryAllTasklistsAsync(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service to return a list of tasks in the given `tasklist,` which match `query`.
     * 
     * For more details, see gdata_service_query().
     * @param tasklist a #GDataTasksTasklist
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryTasks(tasklist: TasksTasklist, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service to return a list of tasks in the given `tasklist,` which match `query`. `self,` `tasklist` and `query` are all reffed when this
     * function is called, so can safely be unreffed after this function returns.
     * 
     * Get the results of the query using gdata_service_query_finish() in the `callback`.
     * 
     * For more details, see gdata_tasks_service_query_tasks(), which is the synchronous version of this function, and gdata_service_query_async(),
     * which is the base asynchronous query function.
     * @param tasklist a #GDataTasksTasklist
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the query is finished
     */
    queryTasksAsync(tasklist: TasksTasklist, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Update `task` in online tasks service.
     * 
     * For more details, see gdata_service_update_entry().
     * @param task the #GDataTasksTask to update
     * @param cancellable optional #GCancellable object, or %NULL
     */
    updateTask(task: TasksTask, cancellable: Gio.Cancellable | null): TasksTask
    /**
     * Updates `task` to online tasks service. `self` and `task` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_update_entry_finish() to obtain a #GDataTasksTask representing the updated task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_update_task(), which is the synchronous version of this function, and
     * gdata_service_update_entry_async(), which is the base asynchronous insertion function.
     * @param task #GDataTasksTask to update
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    updateTaskAsync(task: TasksTask, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Update `tasklist` in online tasks service.
     * 
     * For more details, see gdata_service_update_entry().
     * @param tasklist the #GDataTasksTasklist to update
     * @param cancellable optional #GCancellable object, or %NULL
     */
    updateTasklist(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null): TasksTasklist
    /**
     * Updates `tasklist` from online tasks service. `self` and `tasklist` are both reffed when this function is called, so can safely be
     * unreffed after this function returns.
     * 
     * `callback` should call gdata_service_update_entry_finish() to obtain a #GDataTasksTasklist representing the updated task and to check for possible
     * errors.
     * 
     * For more details, see gdata_tasks_service_update_tasklist(), which is the synchronous version of this function, and
     * gdata_service_update_entry_async(), which is the base asynchronous insertion function.
     * @param tasklist #GDataTasksTasklist to update
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when insertion is finished
     */
    updateTasklistAsync(tasklist: TasksTasklist, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Class property signals of GData-0.0.GData.TasksService

    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataTasksService structure are private and should never be accessed directly.
 * @class 
 */
export class TasksService extends Service {

    // Own properties of GData-0.0.GData.TasksService

    static name: string

    // Constructors of GData-0.0.GData.TasksService

    constructor(config?: TasksService.ConstructorProperties) 
    /**
     * Creates a new #GDataTasksService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataTasksService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * @constructor 
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(authorizer: Authorizer | null): TasksService
    _init(config?: TasksService.ConstructorProperties): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with Google Tasks. This will not normally need to be used, as it's used internally
     * by the #GDataTasksService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
}

export module TasksTask {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.TasksTask

        /**
         * Completion date of the task (as a RFC 3339 timestamp; seconds since
         * the UNIX epoch).
         * 
         * This field is <code class="literal">-1</code> if the task has not
         * been completed.
         */
        completed?: number | null
        /**
         * Due date of the task (as a RFC 3339 timestamp; seconds since the UNIX
         * epoch).
         * 
         * This field is <code class="literal">-1</code> if the task has no due
         * date assigned.
         */
        due?: number | null
        /**
         * Flag indicating whether the task has been deleted. The default is %FALSE.
         */
        isDeleted?: boolean | null
        /**
         * This is where the description of what needs to be done in the task is stored.
         */
        notes?: string | null
        /**
         * Parent task identifier. This field is omitted if it is a top-level task.
         * 
         * Since 0.17.10, this property is writable.
         */
        parent?: string | null
        /**
         * String indicating the position of the task among its sibling tasks under the same parent task
         * or at the top level. If this string is greater than another task's corresponding position string
         * according to lexicographical ordering, the task is positioned after the other task under the same
         * parent task (or at the top level).
         * 
         * Since 0.17.10, this property is writable.
         */
        position?: string | null
        /**
         * Status of the task. This is either %GDATA_TASKS_STATUS_NEEDS_ACTION
         * or %GDATA_TASKS_STATUS_COMPLETED.
         */
        status?: string | null
    }

}

export interface TasksTask {

    // Own properties of GData-0.0.GData.TasksTask

    /**
     * Completion date of the task (as a RFC 3339 timestamp; seconds since
     * the UNIX epoch).
     * 
     * This field is <code class="literal">-1</code> if the task has not
     * been completed.
     */
    completed: number
    /**
     * Due date of the task (as a RFC 3339 timestamp; seconds since the UNIX
     * epoch).
     * 
     * This field is <code class="literal">-1</code> if the task has no due
     * date assigned.
     */
    due: number
    /**
     * Flag indicating whether the task has been deleted. The default is %FALSE.
     */
    isDeleted: boolean
    /**
     * Flag indicating whether the task is hidden. This is the case if the task
     * had been marked completed when the task list was last cleared.
     * The default is %FALSE. This field is read-only.
     */
    readonly isHidden: boolean
    /**
     * This is where the description of what needs to be done in the task is stored.
     */
    notes: string
    /**
     * String indicating the position of the task among its sibling tasks under the same parent task
     * or at the top level. If this string is greater than another task's corresponding position string
     * according to lexicographical ordering, the task is positioned after the other task under the same
     * parent task (or at the top level).
     * 
     * Since 0.17.10, this property is writable.
     */
    position: string
    /**
     * Status of the task. This is either %GDATA_TASKS_STATUS_NEEDS_ACTION
     * or %GDATA_TASKS_STATUS_COMPLETED.
     */
    status: string

    // Own fields of GData-0.0.GData.TasksTask

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.TasksTask

    /**
     * Gets the #GDataTasksTask:completed property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getCompleted(): number
    /**
     * Gets the #GDataTasksTask:due property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getDue(): number
    /**
     * Gets the #GDataTasksTask:notes property.
     */
    getNotes(): string | null
    /**
     * Gets the #GDataTasksTask:parent property.
     */
    getParent(): string | null
    /**
     * Gets the #GDataTasksTask:position property.
     */
    getPosition(): string | null
    /**
     * Gets the #GDataTasksTask:status property.
     */
    getStatus(): string | null
    /**
     * Sets the #GDataTasksTask:completed property of the #GDataTasksTask to the new completion time of the task, `completed`.
     * 
     * Set `completed` to <code class="literal">-1</code> to unset the property in the completion time of the task
     * @param completed completion time of the task, or <code class="literal">-1</code>
     */
    setCompleted(completed: number): void
    /**
     * Sets the #GDataTasksTask:due property of the #GDataTasksTask to the new due time of the task, `due`.
     * 
     * Set `due` to <code class="literal">-1</code> to unset the property in the due time of the task
     * @param due due time of the task, or <code class="literal">-1</code>
     */
    setDue(due: number): void
    /**
     * Sets the #GDataTasksTask:is-deleted property to `deleted`.
     * @param deleted %TRUE if task is deleted, %FALSE otherwise
     */
    setIsDeleted(deleted: boolean): void
    /**
     * Sets the #GDataTasksTask:notes property to the new notes, `notes`.
     * 
     * Set `notes` to %NULL to unset the property in the task.
     * @param notes a new notes of the task, or %NULL
     */
    setNotes(notes: string | null): void
    /**
     * Sets the #GDataTasksTask:parent property.
     * @param parent parent of the task
     */
    setParent(parent: string | null): void
    /**
     * Sets the #GDataTasksTask:position property.
     * @param position position of the task in the list
     */
    setPosition(position: string): void
    /**
     * Sets the #GDataTasksTask:status property to the new status, `status`.
     * 
     * Set `status` to %NULL to unset the property in the task.
     * @param status a new status of the task, or %NULL
     */
    setStatus(status: string | null): void

    // Class property signals of GData-0.0.GData.TasksTask

    connect(sigName: "notify::completed", callback: any): number
    on(sigName: "notify::completed", callback: any): number
    once(sigName: "notify::completed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::completed", ...args: any[]): void
    connect(sigName: "notify::due", callback: any): number
    on(sigName: "notify::due", callback: any): number
    once(sigName: "notify::due", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::due", ...args: any[]): void
    connect(sigName: "notify::is-deleted", callback: any): number
    on(sigName: "notify::is-deleted", callback: any): number
    once(sigName: "notify::is-deleted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deleted", ...args: any[]): void
    connect(sigName: "notify::is-hidden", callback: any): number
    on(sigName: "notify::is-hidden", callback: any): number
    once(sigName: "notify::is-hidden", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-hidden", ...args: any[]): void
    connect(sigName: "notify::notes", callback: any): number
    on(sigName: "notify::notes", callback: any): number
    once(sigName: "notify::notes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::notes", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::status", callback: any): number
    on(sigName: "notify::status", callback: any): number
    once(sigName: "notify::status", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::status", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataTasksTask structure are private and should never be accessed directly.
 * @class 
 */
export class TasksTask extends Entry {

    // Own properties of GData-0.0.GData.TasksTask

    static name: string

    // Constructors of GData-0.0.GData.TasksTask

    constructor(config?: TasksTask.ConstructorProperties) 
    /**
     * Creates a new #GDataTasksTask with the given ID and default properties.
     * @constructor 
     * @param id the task's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataTasksTask with the given ID and default properties.
     * @constructor 
     * @param id the task's ID, or %NULL
     */
    static new(id: string | null): TasksTask

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: TasksTask.ConstructorProperties): void
}

export module TasksTasklist {

    // Constructor properties interface

    export interface ConstructorProperties extends Entry.ConstructorProperties {
    }

}

export interface TasksTasklist {

    // Conflicting properties

    priv: any & ParsablePrivate

    // Own fields of GData-0.0.GData.TasksTasklist

    parent: Entry & Parsable & GObject.Object & GObject.Object

    // Class property signals of GData-0.0.GData.TasksTasklist

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataTasksTasklist structure are private and should never be accessed directly.
 * @class 
 */
export class TasksTasklist extends Entry {

    // Own properties of GData-0.0.GData.TasksTasklist

    static name: string

    // Constructors of GData-0.0.GData.TasksTasklist

    constructor(config?: TasksTasklist.ConstructorProperties) 
    /**
     * Creates a new #GDataTasksTasklist with the given ID and default properties.
     * @constructor 
     * @param id the tasklist's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataTasksTasklist with the given ID and default properties.
     * @constructor 
     * @param id the tasklist's ID, or %NULL
     */
    static new(id: string | null): TasksTasklist

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: TasksTasklist.ConstructorProperties): void
}

export module UploadStream {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.OutputStream.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.UploadStream

        /**
         * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
         * authorized. This may be %NULL if authorization is not needed for the upload.
         */
        authorizationDomain?: AuthorizationDomain | null
        /**
         * An optional cancellable used to cancel the entire upload operation. If a #GCancellable instance isn't provided for this property at
         * construction time (i.e. to gdata_upload_stream_new()), one will be created internally and can be retrieved using
         * gdata_upload_stream_get_cancellable() and used to cancel the upload operation with g_cancellable_cancel() just as if it was passed to
         * gdata_upload_stream_new().
         * 
         * If the upload operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future calls
         * to #GOutputStream API on the #GDataUploadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed
         * to individual #GOutputStream operations will not cancel the upload operation proper if cancelled — they will merely cancel that API call.
         * The only way to cancel the upload operation completely is using #GDataUploadStream:cancellable.
         */
        cancellable?: Gio.Cancellable | null
        /**
         * The content length (in bytes) of the file being uploaded (i.e. as returned by g_file_info_get_size()). Note that this does not include the
         * length of the XML serialisation of #GDataUploadStream:entry, if set.
         * 
         * If this is <code class="literal">-1</code> the upload will be non-resumable; if it is non-negative, the upload will be resumable.
         */
        contentLength?: number | null
        /**
         * The content type of the file being uploaded (i.e. as returned by g_file_info_get_content_type()).
         */
        contentType?: string | null
        /**
         * The entry used for metadata to upload.
         */
        entry?: Entry | null
        /**
         * The HTTP request method to use when uploading the file.
         */
        method?: string | null
        /**
         * The service which is used to authorize the upload, and to which the upload relates.
         */
        service?: Service | null
        /**
         * The slug of the file being uploaded. This is usually the display name of the file (i.e. as returned by g_file_info_get_display_name()).
         */
        slug?: string | null
        /**
         * The URI to upload the data and metadata to. This must be HTTPS.
         */
        uploadUri?: string | null
    }

}

export interface UploadStream {

    // Own properties of GData-0.0.GData.UploadStream

    /**
     * The authorization domain for the upload, against which the #GDataService:authorizer for the #GDataDownloadStream:service should be
     * authorized. This may be %NULL if authorization is not needed for the upload.
     */
    readonly authorizationDomain: AuthorizationDomain
    /**
     * An optional cancellable used to cancel the entire upload operation. If a #GCancellable instance isn't provided for this property at
     * construction time (i.e. to gdata_upload_stream_new()), one will be created internally and can be retrieved using
     * gdata_upload_stream_get_cancellable() and used to cancel the upload operation with g_cancellable_cancel() just as if it was passed to
     * gdata_upload_stream_new().
     * 
     * If the upload operation is cancelled using this #GCancellable, any ongoing network activity will be stopped, and any pending or future calls
     * to #GOutputStream API on the #GDataUploadStream will return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed
     * to individual #GOutputStream operations will not cancel the upload operation proper if cancelled — they will merely cancel that API call.
     * The only way to cancel the upload operation completely is using #GDataUploadStream:cancellable.
     */
    readonly cancellable: Gio.Cancellable
    /**
     * The content length (in bytes) of the file being uploaded (i.e. as returned by g_file_info_get_size()). Note that this does not include the
     * length of the XML serialisation of #GDataUploadStream:entry, if set.
     * 
     * If this is <code class="literal">-1</code> the upload will be non-resumable; if it is non-negative, the upload will be resumable.
     */
    readonly contentLength: number
    /**
     * The content type of the file being uploaded (i.e. as returned by g_file_info_get_content_type()).
     */
    readonly contentType: string
    /**
     * The entry used for metadata to upload.
     */
    readonly entry: Entry
    /**
     * The HTTP request method to use when uploading the file.
     */
    readonly method: string
    /**
     * The service which is used to authorize the upload, and to which the upload relates.
     */
    readonly service: Service
    /**
     * The slug of the file being uploaded. This is usually the display name of the file (i.e. as returned by g_file_info_get_display_name()).
     */
    readonly slug: string
    /**
     * The URI to upload the data and metadata to. This must be HTTPS.
     */
    readonly uploadUri: string

    // Own fields of GData-0.0.GData.UploadStream

    parent: Gio.OutputStream
    priv: UploadStreamPrivate

    // Owm methods of GData-0.0.GData.UploadStream

    /**
     * Gets the authorization domain used to authorize the upload, as passed to gdata_upload_stream_new(). It may be %NULL if authorization is not
     * needed for the upload.
     */
    getAuthorizationDomain(): AuthorizationDomain | null
    /**
     * Gets the #GCancellable for the entire upload operation, #GDataUploadStream:cancellable.
     */
    getCancellable(): Gio.Cancellable
    /**
     * Gets the size (in bytes) of the file being uploaded. This will be <code class="literal">-1</code> for a non-resumable upload, and zero or greater
     * for a resumable upload.
     */
    getContentLength(): number
    /**
     * Gets the content type of the file being uploaded.
     */
    getContentType(): string
    /**
     * Gets the entry being used to upload metadata, if one was passed to gdata_upload_stream_new().
     */
    getEntry(): Entry
    /**
     * Gets the HTTP request method being used to upload the file, as passed to gdata_upload_stream_new().
     */
    getMethod(): string
    /**
     * Returns the server's response to the upload operation performed by the #GDataUploadStream. If the operation
     * is still underway, or the server's response hasn't been received yet, %NULL is returned and `length` is set to <code class="literal">-1</code>.
     * 
     * If there was an error during the upload operation (but it is complete), %NULL is returned, and `length` is set to <code class="literal">0</code>.
     * 
     * While it is safe to call this function from any thread at any time during the network operation, the only way to guarantee that the response has
     * been set before calling this function is to have closed the #GDataUploadStream by calling g_output_stream_close() on it, without cancelling
     * the close operation. Once the stream has been closed, all network communication is guaranteed to have finished. Note that if a call to
     * g_output_stream_close() is cancelled, g_output_stream_is_closed() will immediately start to return %TRUE, even if the #GDataUploadStream is still
     * attempting to flush the network buffers asynchronously — consequently, gdata_upload_stream_get_response() may still return %NULL and a `length` of
     * <code class="literal">-1</code>. The only reliable way to determine if the stream has been fully closed in this situation is to check the results
     * of gdata_upload_stream_get_response(), rather than g_output_stream_is_closed().
     */
    getResponse(): [ /* returnType */ string, /* length */ number ]
    /**
     * Gets the service used to authorize the upload, as passed to gdata_upload_stream_new().
     */
    getService(): Service
    /**
     * Gets the slug (filename) of the file being uploaded.
     */
    getSlug(): string
    /**
     * Gets the URI the file is being uploaded to, as passed to gdata_upload_stream_new().
     */
    getUploadUri(): string

    // Class property signals of GData-0.0.GData.UploadStream

    connect(sigName: "notify::authorization-domain", callback: any): number
    on(sigName: "notify::authorization-domain", callback: any): number
    once(sigName: "notify::authorization-domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorization-domain", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: any): number
    on(sigName: "notify::cancellable", callback: any): number
    once(sigName: "notify::cancellable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::content-length", callback: any): number
    on(sigName: "notify::content-length", callback: any): number
    once(sigName: "notify::content-length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-length", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::entry", callback: any): number
    on(sigName: "notify::entry", callback: any): number
    once(sigName: "notify::entry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: "notify::method", callback: any): number
    on(sigName: "notify::method", callback: any): number
    once(sigName: "notify::method", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::method", ...args: any[]): void
    connect(sigName: "notify::service", callback: any): number
    on(sigName: "notify::service", callback: any): number
    once(sigName: "notify::service", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::service", ...args: any[]): void
    connect(sigName: "notify::slug", callback: any): number
    on(sigName: "notify::slug", callback: any): number
    once(sigName: "notify::slug", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::slug", ...args: any[]): void
    connect(sigName: "notify::upload-uri", callback: any): number
    on(sigName: "notify::upload-uri", callback: any): number
    once(sigName: "notify::upload-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::upload-uri", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataUploadStream structure are private and should never be accessed directly.
 * @class 
 */
export class UploadStream extends Gio.OutputStream {

    // Own properties of GData-0.0.GData.UploadStream

    static name: string

    // Constructors of GData-0.0.GData.UploadStream

    constructor(config?: UploadStream.ConstructorProperties) 
    /**
     * Creates a new #GDataUploadStream, allowing a file to be uploaded from a GData service using standard #GOutputStream API.
     * 
     * The HTTP method to use should be specified in `method,` and will typically be either %SOUP_METHOD_POST (for insertions) or %SOUP_METHOD_PUT
     * (for updates), according to the server and the `upload_uri`.
     * 
     * If `entry` is specified, it will be attached to the upload as the entry to which the file being uploaded belongs. Otherwise, just the file
     * written to the stream will be uploaded, and given a default entry as determined by the server.
     * 
     * `slug` and `content_type` must be specified before the upload begins, as they describe the file being streamed. `slug` is the filename given to the
     * file, which will typically be stored on the server and made available when downloading the file again. `content_type` must be the correct
     * content type for the file, and should be in the service's list of acceptable content types.
     * 
     * As well as the standard GIO errors, calls to the #GOutputStream API on a #GDataUploadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the upload operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GOutputStream API on the #GDataUploadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GOutputStream operations will not cancel the
     * upload operation proper if cancelled — they will merely cancel that API call. The only way to cancel the upload operation completely is using this
     * `cancellable`.
     * 
     * Note that network communication won't begin until the first call to g_output_stream_write() on the #GDataUploadStream.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the upload, or %NULL
     * @param method the HTTP method to use
     * @param uploadUri the URI to upload, which must be HTTPS
     * @param entry the entry to upload as metadata, or %NULL
     * @param slug the file's slug (filename)
     * @param contentType the content type of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    constructor(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, cancellable: Gio.Cancellable | null) 
    /**
     * Creates a new #GDataUploadStream, allowing a file to be uploaded from a GData service using standard #GOutputStream API.
     * 
     * The HTTP method to use should be specified in `method,` and will typically be either %SOUP_METHOD_POST (for insertions) or %SOUP_METHOD_PUT
     * (for updates), according to the server and the `upload_uri`.
     * 
     * If `entry` is specified, it will be attached to the upload as the entry to which the file being uploaded belongs. Otherwise, just the file
     * written to the stream will be uploaded, and given a default entry as determined by the server.
     * 
     * `slug` and `content_type` must be specified before the upload begins, as they describe the file being streamed. `slug` is the filename given to the
     * file, which will typically be stored on the server and made available when downloading the file again. `content_type` must be the correct
     * content type for the file, and should be in the service's list of acceptable content types.
     * 
     * As well as the standard GIO errors, calls to the #GOutputStream API on a #GDataUploadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the upload operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GOutputStream API on the #GDataUploadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GOutputStream operations will not cancel the
     * upload operation proper if cancelled — they will merely cancel that API call. The only way to cancel the upload operation completely is using this
     * `cancellable`.
     * 
     * Note that network communication won't begin until the first call to g_output_stream_write() on the #GDataUploadStream.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the upload, or %NULL
     * @param method the HTTP method to use
     * @param uploadUri the URI to upload, which must be HTTPS
     * @param entry the entry to upload as metadata, or %NULL
     * @param slug the file's slug (filename)
     * @param contentType the content type of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    static new(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, cancellable: Gio.Cancellable | null): UploadStream
    /**
     * Creates a new resumable #GDataUploadStream, allowing a file to be uploaded from a GData service using standard #GOutputStream API. The upload will
     * use GData's resumable upload API, so should be more reliable than a normal upload (especially if the file is large). See the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/resumable_upload.html">GData documentation on resumable uploads</ulink> for more
     * information.
     * 
     * The HTTP method to use should be specified in `method,` and will typically be either %SOUP_METHOD_POST (for insertions) or %SOUP_METHOD_PUT
     * (for updates), according to the server and the `upload_uri`.
     * 
     * If `entry` is specified, it will be attached to the upload as the entry to which the file being uploaded belongs. Otherwise, just the file
     * written to the stream will be uploaded, and given a default entry as determined by the server.
     * 
     * `slug,` `content_type` and `content_length` must be specified before the upload begins, as they describe the file being streamed. `slug` is the filename
     * given to the file, which will typically be stored on the server and made available when downloading the file again. `content_type` must be the
     * correct content type for the file, and should be in the service's list of acceptable content types. `content_length` must be the size of the file
     * being uploaded (not including the XML for any associated #GDataEntry) in bytes. Zero is accepted if a metadata-only upload is being performed.
     * 
     * As well as the standard GIO errors, calls to the #GOutputStream API on a #GDataUploadStream can also return any relevant specific error from
     * #GDataServiceError, or %GDATA_SERVICE_ERROR_PROTOCOL_ERROR in the general case.
     * 
     * If a #GCancellable is provided in `cancellable,` the upload operation may be cancelled at any time from another thread using g_cancellable_cancel().
     * In this case, any ongoing network activity will be stopped, and any pending or future calls to #GOutputStream API on the #GDataUploadStream will
     * return %G_IO_ERROR_CANCELLED. Note that the #GCancellable objects which can be passed to individual #GOutputStream operations will not cancel the
     * upload operation proper if cancelled — they will merely cancel that API call. The only way to cancel the upload operation completely is using this
     * `cancellable`.
     * 
     * Note that network communication won't begin until the first call to g_output_stream_write() on the #GDataUploadStream.
     * @constructor 
     * @param service a #GDataService
     * @param domain the #GDataAuthorizationDomain to authorize the upload, or %NULL
     * @param method the HTTP method to use
     * @param uploadUri the URI to upload
     * @param entry the entry to upload as metadata, or %NULL
     * @param slug the file's slug (filename)
     * @param contentType the content type of the file being uploaded
     * @param contentLength the size (in bytes) of the file being uploaded
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    static newResumable(service: Service, domain: AuthorizationDomain | null, method: string, uploadUri: string, entry: Entry | null, slug: string, contentType: string, contentLength: number, cancellable: Gio.Cancellable | null): UploadStream
    _init(config?: UploadStream.ConstructorProperties): void
}

export module YouTubeCategory {

    // Constructor properties interface

    export interface ConstructorProperties extends Comparable.ConstructorProperties, Category.ConstructorProperties {
    }

}

export interface YouTubeCategory extends Comparable {

    // Own properties of GData-0.0.GData.YouTubeCategory

    /**
     * Whether new videos can be added to the category.
     */
    readonly isAssignable: boolean
    /**
     * Whether the category is deprecated.
     */
    readonly isDeprecated: boolean

    // Own fields of GData-0.0.GData.YouTubeCategory

    parent: Category & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.YouTubeCategory

    /**
     * Returns whether the category is browsable in the given `region`. The list of supported region IDs is
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#Region_specific_feeds">available online</ulink>.
     * @param region a two-letter region ID
     */
    isBrowsable(region: string): boolean

    // Class property signals of GData-0.0.GData.YouTubeCategory

    connect(sigName: "notify::is-assignable", callback: any): number
    on(sigName: "notify::is-assignable", callback: any): number
    once(sigName: "notify::is-assignable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-assignable", ...args: any[]): void
    connect(sigName: "notify::is-deprecated", callback: any): number
    on(sigName: "notify::is-deprecated", callback: any): number
    once(sigName: "notify::is-deprecated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-deprecated", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::scheme", callback: any): number
    on(sigName: "notify::scheme", callback: any): number
    once(sigName: "notify::scheme", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scheme", ...args: any[]): void
    connect(sigName: "notify::term", callback: any): number
    on(sigName: "notify::term", callback: any): number
    once(sigName: "notify::term", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::term", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeCategory structure are private and should never be accessed directly.
 * @class 
 */
export class YouTubeCategory extends Category {

    // Own properties of GData-0.0.GData.YouTubeCategory

    static name: string

    // Constructors of GData-0.0.GData.YouTubeCategory

    constructor(config?: YouTubeCategory.ConstructorProperties) 
    _init(config?: YouTubeCategory.ConstructorProperties): void
}

export module YouTubeComment {

    // Constructor properties interface

    export interface ConstructorProperties extends Comment.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.YouTubeComment

        /**
         * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
         * 
         * See the documentation for #GDataYouTubeComment for an explanation of the semantics of parent comment URIs.
         */
        parentCommentUri?: string | null
    }

}

export interface YouTubeComment {

    // Own properties of GData-0.0.GData.YouTubeComment

    /**
     * The URI of the parent comment to this one, or %NULL if this comment is a top-level comment.
     * 
     * See the documentation for #GDataYouTubeComment for an explanation of the semantics of parent comment URIs.
     */
    parentCommentUri: string

    // Own fields of GData-0.0.GData.YouTubeComment

    parent: Comment & Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.YouTubeComment

    /**
     * Gets the #GDataYouTubeComment:parent-comment-uri property.
     */
    getParentCommentUri(): string
    /**
     * Sets the #GDataYouTubeComment:parent-comment-uri property to `parent_comment_uri`.
     * 
     * Set `parent_comment_uri` to %NULL to unset the #GDataYouTubeComment:parent-comment-uri property in the comment (i.e. make the comment a top-level
     * comment).
     * 
     * See the <ulink type="http" url="http://code.google.com/apis/youtube/2.0/developers_guide_protocol_comments.html#Retrieve_comments">online
     * documentation</ulink> for more information.
     * @param parentCommentUri a new parent comment URI, or %NULL
     */
    setParentCommentUri(parentCommentUri: string): void

    // Class property signals of GData-0.0.GData.YouTubeComment

    connect(sigName: "notify::parent-comment-uri", callback: any): number
    on(sigName: "notify::parent-comment-uri", callback: any): number
    once(sigName: "notify::parent-comment-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-comment-uri", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeComment structure are private and should never be accessed directly.
 * @class 
 */
export class YouTubeComment extends Comment {

    // Own properties of GData-0.0.GData.YouTubeComment

    static name: string

    // Constructors of GData-0.0.GData.YouTubeComment

    constructor(config?: YouTubeComment.ConstructorProperties) 
    /**
     * Creates a new #GDataYouTubeComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    constructor(id: string) 
    /**
     * Creates a new #GDataYouTubeComment with the given ID and default properties.
     * @constructor 
     * @param id the comment's ID, or %NULL
     */
    static new(id: string): YouTubeComment

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: YouTubeComment.ConstructorProperties): void
}

export module YouTubeFeed {

    // Constructor properties interface

    export interface ConstructorProperties extends Feed.ConstructorProperties {
    }

}

export interface YouTubeFeed {

    // Class property signals of GData-0.0.GData.YouTubeFeed

    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::generator", callback: any): number
    on(sigName: "notify::generator", callback: any): number
    once(sigName: "notify::generator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generator", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::items-per-page", callback: any): number
    on(sigName: "notify::items-per-page", callback: any): number
    once(sigName: "notify::items-per-page", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-per-page", ...args: any[]): void
    connect(sigName: "notify::logo", callback: any): number
    on(sigName: "notify::logo", callback: any): number
    once(sigName: "notify::logo", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::logo", ...args: any[]): void
    connect(sigName: "notify::next-page-token", callback: any): number
    on(sigName: "notify::next-page-token", callback: any): number
    once(sigName: "notify::next-page-token", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-page-token", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::subtitle", callback: any): number
    on(sigName: "notify::subtitle", callback: any): number
    once(sigName: "notify::subtitle", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtitle", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::total-results", callback: any): number
    on(sigName: "notify::total-results", callback: any): number
    once(sigName: "notify::total-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::total-results", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeFeed structure are private and should
 * never be accessed directly.
 * @class 
 */
export class YouTubeFeed extends Feed {

    // Own properties of GData-0.0.GData.YouTubeFeed

    static name: string

    // Constructors of GData-0.0.GData.YouTubeFeed

    constructor(config?: YouTubeFeed.ConstructorProperties) 
    _init(config?: YouTubeFeed.ConstructorProperties): void
}

export module YouTubeQuery {

    // Constructor properties interface

    export interface ConstructorProperties extends Query.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.YouTubeQuery

        /**
         * Restricts the search to videos uploaded within the specified time period. To retrieve videos irrespective of their
         * age, set the property to %GDATA_YOUTUBE_AGE_ALL_TIME.
         */
        age?: YouTubeAge | null
        /**
         * The latitude of a particular location of which videos should be found. This should be used in conjunction with
         * #GDataYouTubeQuery:longitude; if either property is outside the valid range, neither will be used. Valid latitudes
         * are between <code class="literal">-90</code> and <code class="literal">90</code>0 degrees; any values of this property outside that range
         * will unset the property in the query URI.
         * 
         * If #GDataYouTubeQuery:location-radius is a non-<code class="literal">0</code> value, this will define a circle from which videos should be
         * found.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#location">online documentation</ulink>.
         */
        latitude?: number | null
        /**
         * The content license which should be used to filter search results. If set to, for example, %GDATA_YOUTUBE_LICENSE_CC, only videos which
         * are Creative Commons licensed will be returned in search results. Set this to %NULL to return videos under any license.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#videoLicense">online documentation</ulink>.
         */
        license?: string | null
        /**
         * The radius, in metres, of a circle from within which videos should be returned. The circle is centred on the latitude and
         * longitude given in #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude.
         * 
         * Set this property to <code class="literal">0</code> to search for specific coordinates, rather than within a given radius.
         * 
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        locationRadius?: number | null
        /**
         * The longitude of a particular location of which videos should be found. This should be used in conjunction with
         * #GDataYouTubeQuery:latitude; if either property is outside the valid range, neither will be used. Valid longitudes
         * are between <code class="literal">-180</code> and <code class="literal">180</code> degrees; any values of this property outside that
         * range will unset the property in the query URI.
         * 
         * For more information, see the documentation for #GDataYouTubeQuery:latitude.
         */
        longitude?: number | null
        /**
         * Specifies the order of entries in a feed. Supported values are <literal>relevance</literal>,
         * <literal>published</literal>, <literal>viewCount</literal> and <literal>rating</literal>.
         * 
         * Additionally, results most relevant to a specific language can be returned by setting the property
         * to <literal>relevance_lang_<replaceable>languageCode</replaceable></literal>, where
         * <replaceable>languageCode</replaceable> is an ISO 639-1 language code, as used in #GDataYouTubeQuery:language.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#order">online documentation</ulink>.
         */
        orderBy?: string | null
        /**
         * An ISO 3166 two-letter country code that should be used to filter
         * videos playable only in specific countries.
         * 
         * Previously, this property could also accept the client’s IP address
         * for country lookup. This feature is no longer supported by Google,
         * and will result in an error from the server if used. Use a country
         * code instead.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#regionCode">online documentation</ulink>.
         */
        restriction?: string | null
        /**
         * Whether the search results should include restricted content as well as standard content.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">online documentation</ulink>.
         */
        safeSearch?: YouTubeSafeSearch | null
    }

}

export interface YouTubeQuery {

    // Own properties of GData-0.0.GData.YouTubeQuery

    /**
     * Restricts the search to videos uploaded within the specified time period. To retrieve videos irrespective of their
     * age, set the property to %GDATA_YOUTUBE_AGE_ALL_TIME.
     */
    age: YouTubeAge
    /**
     * The latitude of a particular location of which videos should be found. This should be used in conjunction with
     * #GDataYouTubeQuery:longitude; if either property is outside the valid range, neither will be used. Valid latitudes
     * are between <code class="literal">-90</code> and <code class="literal">90</code>0 degrees; any values of this property outside that range
     * will unset the property in the query URI.
     * 
     * If #GDataYouTubeQuery:location-radius is a non-<code class="literal">0</code> value, this will define a circle from which videos should be
     * found.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#location">online documentation</ulink>.
     */
    latitude: number
    /**
     * The content license which should be used to filter search results. If set to, for example, %GDATA_YOUTUBE_LICENSE_CC, only videos which
     * are Creative Commons licensed will be returned in search results. Set this to %NULL to return videos under any license.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#videoLicense">online documentation</ulink>.
     */
    license: string
    /**
     * The radius, in metres, of a circle from within which videos should be returned. The circle is centred on the latitude and
     * longitude given in #GDataYouTubeQuery:latitude and #GDataYouTubeQuery:longitude.
     * 
     * Set this property to <code class="literal">0</code> to search for specific coordinates, rather than within a given radius.
     * 
     * For more information, see the documentation for #GDataYouTubeQuery:latitude.
     */
    locationRadius: number
    /**
     * The longitude of a particular location of which videos should be found. This should be used in conjunction with
     * #GDataYouTubeQuery:latitude; if either property is outside the valid range, neither will be used. Valid longitudes
     * are between <code class="literal">-180</code> and <code class="literal">180</code> degrees; any values of this property outside that
     * range will unset the property in the query URI.
     * 
     * For more information, see the documentation for #GDataYouTubeQuery:latitude.
     */
    longitude: number
    /**
     * Specifies the order of entries in a feed. Supported values are <literal>relevance</literal>,
     * <literal>published</literal>, <literal>viewCount</literal> and <literal>rating</literal>.
     * 
     * Additionally, results most relevant to a specific language can be returned by setting the property
     * to <literal>relevance_lang_<replaceable>languageCode</replaceable></literal>, where
     * <replaceable>languageCode</replaceable> is an ISO 639-1 language code, as used in #GDataYouTubeQuery:language.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#order">online documentation</ulink>.
     */
    orderBy: string
    /**
     * An ISO 3166 two-letter country code that should be used to filter
     * videos playable only in specific countries.
     * 
     * Previously, this property could also accept the client’s IP address
     * for country lookup. This feature is no longer supported by Google,
     * and will result in an error from the server if used. Use a country
     * code instead.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#regionCode">online documentation</ulink>.
     */
    restriction: string
    /**
     * Whether the search results should include restricted content as well as standard content.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/search/list#safeSearch">online documentation</ulink>.
     */
    safeSearch: YouTubeSafeSearch

    // Own fields of GData-0.0.GData.YouTubeQuery

    parent: Query & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.YouTubeQuery

    /**
     * Gets the #GDataYouTubeQuery:age property.
     */
    getAge(): YouTubeAge
    /**
     * Gets the #GDataYouTubeQuery:license property.
     */
    getLicense(): string
    /**
     * Gets the location-based properties of the #GDataYouTubeQuery<!-- -->: #GDataYouTubeQuery:latitude, #GDataYouTubeQuery:longitude,
     * #GDataYouTubeQuery:location-radius and #GDataYouTubeQuery:has-location.
     */
    getLocation(): [ /* latitude */ number, /* longitude */ number, /* radius */ number ]
    /**
     * Gets the #GDataYouTubeQuery:order-by property.
     */
    getOrderBy(): string
    /**
     * Gets the #GDataYouTubeQuery:restriction property.
     */
    getRestriction(): string
    /**
     * Gets the #GDataYouTubeQuery:safe-search property.
     */
    getSafeSearch(): YouTubeSafeSearch
    /**
     * Sets the #GDataYouTubeQuery:age property of the #GDataYouTubeQuery to `age`.
     * @param age the new age
     */
    setAge(age: YouTubeAge): void
    /**
     * Sets the #GDataYouTubeQuery:license property of the #GDataYouTubeQuery to the new license value, `license`.
     * 
     * Set `license` to %NULL to unset the property in the query URI.
     * @param license a new license value, or %NULL
     */
    setLicense(license: string | null): void
    /**
     * Sets the location-based properties of the #GDataYouTubeQuery<!-- -->: #GDataYouTubeQuery:latitude, #GDataYouTubeQuery:longitude,
     * #GDataYouTubeQuery:location-radius and #GDataYouTubeQuery:has-location.
     * @param latitude the new latitude, or %G_MAXDOUBLE
     * @param longitude the new longitude, or %G_MAXDOUBLE
     * @param radius the new location radius, or <code class="literal">0</code>
     */
    setLocation(latitude: number, longitude: number, radius: number): void
    /**
     * Sets the #GDataYouTubeQuery:order-by property of the #GDataYouTubeQuery to the new order by string, `order_by`.
     * 
     * Set `order_by` to %NULL to unset the property in the query URI.
     * @param orderBy a new order by string, or %NULL
     */
    setOrderBy(orderBy: string | null): void
    /**
     * Sets the #GDataYouTubeQuery:restriction property of the #GDataYouTubeQuery to the new restriction string, `restriction`.
     * 
     * Set `restriction` to %NULL to unset the property in the query URI.
     * @param restriction a new restriction string, or %NULL
     */
    setRestriction(restriction: string | null): void
    /**
     * Sets the #GDataYouTubeQuery:safe-search property of the #GDataYouTubeQuery to `safe_search`.
     * @param safeSearch a new safe search level
     */
    setSafeSearch(safeSearch: YouTubeSafeSearch): void

    // Class property signals of GData-0.0.GData.YouTubeQuery

    connect(sigName: "notify::age", callback: any): number
    on(sigName: "notify::age", callback: any): number
    once(sigName: "notify::age", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::age", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::location-radius", callback: any): number
    on(sigName: "notify::location-radius", callback: any): number
    once(sigName: "notify::location-radius", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location-radius", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::order-by", callback: any): number
    on(sigName: "notify::order-by", callback: any): number
    once(sigName: "notify::order-by", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::order-by", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: any): number
    on(sigName: "notify::restriction", callback: any): number
    once(sigName: "notify::restriction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::safe-search", callback: any): number
    on(sigName: "notify::safe-search", callback: any): number
    once(sigName: "notify::safe-search", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::safe-search", ...args: any[]): void
    connect(sigName: "notify::author", callback: any): number
    on(sigName: "notify::author", callback: any): number
    once(sigName: "notify::author", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::author", ...args: any[]): void
    connect(sigName: "notify::categories", callback: any): number
    on(sigName: "notify::categories", callback: any): number
    once(sigName: "notify::categories", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::categories", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::is-strict", callback: any): number
    on(sigName: "notify::is-strict", callback: any): number
    once(sigName: "notify::is-strict", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-strict", ...args: any[]): void
    connect(sigName: "notify::max-results", callback: any): number
    on(sigName: "notify::max-results", callback: any): number
    once(sigName: "notify::max-results", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-results", ...args: any[]): void
    connect(sigName: "notify::published-max", callback: any): number
    on(sigName: "notify::published-max", callback: any): number
    once(sigName: "notify::published-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-max", ...args: any[]): void
    connect(sigName: "notify::published-min", callback: any): number
    on(sigName: "notify::published-min", callback: any): number
    once(sigName: "notify::published-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published-min", ...args: any[]): void
    connect(sigName: "notify::q", callback: any): number
    on(sigName: "notify::q", callback: any): number
    once(sigName: "notify::q", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::q", ...args: any[]): void
    connect(sigName: "notify::start-index", callback: any): number
    on(sigName: "notify::start-index", callback: any): number
    once(sigName: "notify::start-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-index", ...args: any[]): void
    connect(sigName: "notify::updated-max", callback: any): number
    on(sigName: "notify::updated-max", callback: any): number
    once(sigName: "notify::updated-max", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-max", ...args: any[]): void
    connect(sigName: "notify::updated-min", callback: any): number
    on(sigName: "notify::updated-min", callback: any): number
    once(sigName: "notify::updated-min", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated-min", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeQuery structure are private and should never be accessed directly.
 * @class 
 */
export class YouTubeQuery extends Query {

    // Own properties of GData-0.0.GData.YouTubeQuery

    static name: string

    // Constructors of GData-0.0.GData.YouTubeQuery

    constructor(config?: YouTubeQuery.ConstructorProperties) 
    /**
     * Creates a new #GDataYouTubeQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    constructor(q: string | null) 
    /**
     * Creates a new #GDataYouTubeQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): YouTubeQuery

    // Overloads of new

    /**
     * Creates a new #GDataQuery with its #GDataQuery:q property set to `q`.
     * @constructor 
     * @param q a query string, or %NULL
     */
    static new(q: string | null): Query
    _init(config?: YouTubeQuery.ConstructorProperties): void
}

export module YouTubeService {

    // Constructor properties interface

    export interface ConstructorProperties extends Batchable.ConstructorProperties, Service.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.YouTubeService

        /**
         * The developer key your application has registered with the YouTube API. For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/registering_an_application">online documentation</ulink>.
         * 
         * With the port from v2 to v3 of the YouTube API in libgdata
         * 0.17.0, it might be necessary to update your application’s
         * developer key.
         */
        developerKey?: string | null
    }

}

export interface YouTubeService extends Batchable {

    // Own properties of GData-0.0.GData.YouTubeService

    /**
     * The developer key your application has registered with the YouTube API. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/registering_an_application">online documentation</ulink>.
     * 
     * With the port from v2 to v3 of the YouTube API in libgdata
     * 0.17.0, it might be necessary to update your application’s
     * developer key.
     */
    readonly developerKey: string

    // Own fields of GData-0.0.GData.YouTubeService

    parent: Service & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.YouTubeService

    /**
     * Finish off a video upload operation started by gdata_youtube_service_upload_video(), parsing the result and returning the new #GDataYouTubeVideo.
     * 
     * If an error occurred during the upload operation, it will have been returned during the operation (e.g. by g_output_stream_splice() or one
     * of the other stream methods). In such a case, %NULL will be returned but `error` will remain unset. `error` is only set in the case that the server
     * indicates that the operation was successful, but an error is encountered in parsing the result sent by the server.
     * @param uploadStream the #GDataUploadStream from the operation
     */
    finishVideoUpload(uploadStream: UploadStream): YouTubeVideo
    /**
     * Gets a list of the categories currently in use on YouTube. The returned #GDataAPPCategories contains a list of #GDataYouTubeCategorys which
     * enumerate the current YouTube categories.
     * 
     * The category labels (#GDataCategory:label) are localised based on the value of #GDataService:locale.
     * @param cancellable a #GCancellable, or %NULL
     */
    getCategories(cancellable: Gio.Cancellable | null): APPCategories
    /**
     * Gets a list of the categories currently in use on YouTube. `self` is reffed when this function is called, so can safely be unreffed after this
     * function returns.
     * 
     * For more details, see gdata_youtube_service_get_categories(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_youtube_service_get_categories_finish() to get the results of the
     * operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is finished
     */
    getCategoriesAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous request for a list of categories on YouTube, as started with gdata_youtube_service_get_categories_async().
     * @param asyncResult a #GAsyncResult
     */
    getCategoriesFinish(asyncResult: Gio.AsyncResult): APPCategories
    /**
     * Gets the #GDataYouTubeService:developer-key property from the #GDataYouTubeService.
     */
    getDeveloperKey(): string
    /**
     * Queries the service for videos related to `video`. The algorithm determining which videos are related is on the server side.
     * 
     * Parameters and other errors are as for gdata_service_query().
     * @param video a #GDataYouTubeVideo for which to find related videos
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryRelated(video: YouTubeVideo, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service for videos related to `video`. The algorithm determining which videos are related is on the server side.
     * `self` and `query` are both reffed when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_youtube_service_query_related(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param video a #GDataYouTubeVideo for which to find related videos
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryRelatedAsync(video: YouTubeVideo, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service's standard `feed_type` feed to build a #GDataFeed.
     * 
     * Note that with the port from v2 to v3 of the YouTube API in libgdata
     * 0.17.0, all feed types except %GDATA_YOUTUBE_MOST_POPULAR_FEED have been
     * deprecated. Other feed types will now transparently return
     * %GDATA_YOUTUBE_MOST_POPULAR_FEED, limited to the past 24 hours.
     * 
     * Parameters and errors are as for gdata_service_query().
     * @param feedType the feed type to query, from #GDataYouTubeStandardFeedType
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryStandardFeed(feedType: YouTubeStandardFeedType, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service's standard `feed_type` feed to build a #GDataFeed. `self` and
     * `query` are both reffed when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_youtube_service_query_standard_feed(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param feedType the feed type to query, from #GDataYouTubeStandardFeedType
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryStandardFeedAsync(feedType: YouTubeStandardFeedType, query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Queries the service for videos matching the parameters set on the #GDataQuery. This searches site-wide, and imposes no other restrictions or
     * parameters on the query.
     * 
     * Parameters and errors are as for gdata_service_query().
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     */
    queryVideos(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null): Feed
    /**
     * Queries the service for videos matching the parameters set on the #GDataQuery. This searches site-wide, and imposes no other restrictions or
     * parameters on the query. `self` and `query` are both reffed when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see gdata_youtube_service_query_videos(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call gdata_service_query_finish()
     * to get the results of the operation.
     * @param query a #GDataQuery with the query parameters, or %NULL
     * @param cancellable optional #GCancellable object, or %NULL
     * @param progressCallback a #GDataQueryProgressCallback to call when an entry is loaded, or %NULL
     * @param callback a #GAsyncReadyCallback to call when authentication is finished
     */
    queryVideosAsync(query: Query | null, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Uploads a video to YouTube, using the properties from `video` and the file data written to the resulting #GDataUploadStream.
     * 
     * If `video` has already been inserted, a %GDATA_SERVICE_ERROR_ENTRY_ALREADY_INSERTED error will be returned. If no user is authenticated
     * with the service, %GDATA_SERVICE_ERROR_AUTHENTICATION_REQUIRED will be returned.
     * 
     * The stream returned by this function should be written to using the standard #GOutputStream methods, asynchronously or synchronously. Once the stream
     * is closed (using g_output_stream_close()), gdata_youtube_service_finish_video_upload() should be called on it to parse and return the updated
     * #GDataYouTubeVideo for the uploaded video. This must be done, as `video` isn't updated in-place.
     * 
     * In order to cancel the upload, a #GCancellable passed in to `cancellable` must be cancelled using g_cancellable_cancel(). Cancelling the individual
     * #GOutputStream operations on the #GDataUploadStream will not cancel the entire upload; merely the write or close operation in question. See the
     * #GDataUploadStream:cancellable for more details.
     * 
     * Any upload errors will be thrown by the stream methods, and may come from the #GDataServiceError domain.
     * @param video a #GDataYouTubeVideo to insert
     * @param slug the filename to give to the uploaded file
     * @param contentType the content type of the uploaded data
     * @param cancellable a #GCancellable for the entire upload stream, or %NULL
     */
    uploadVideo(video: YouTubeVideo, slug: string, contentType: string, cancellable: Gio.Cancellable | null): UploadStream

    // Class property signals of GData-0.0.GData.YouTubeService

    connect(sigName: "notify::developer-key", callback: any): number
    on(sigName: "notify::developer-key", callback: any): number
    once(sigName: "notify::developer-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::developer-key", ...args: any[]): void
    connect(sigName: "notify::authorizer", callback: any): number
    on(sigName: "notify::authorizer", callback: any): number
    once(sigName: "notify::authorizer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::authorizer", ...args: any[]): void
    connect(sigName: "notify::locale", callback: any): number
    on(sigName: "notify::locale", callback: any): number
    once(sigName: "notify::locale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locale", ...args: any[]): void
    connect(sigName: "notify::proxy-resolver", callback: any): number
    on(sigName: "notify::proxy-resolver", callback: any): number
    once(sigName: "notify::proxy-resolver", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-resolver", ...args: any[]): void
    connect(sigName: "notify::timeout", callback: any): number
    on(sigName: "notify::timeout", callback: any): number
    once(sigName: "notify::timeout", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timeout", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeService structure are private and should never be accessed directly.
 * @class 
 */
export class YouTubeService extends Service {

    // Own properties of GData-0.0.GData.YouTubeService

    static name: string

    // Constructors of GData-0.0.GData.YouTubeService

    constructor(config?: YouTubeService.ConstructorProperties) 
    /**
     * Creates a new #GDataYouTubeService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * The `developer_key` must be unique for your application, and as
     * <ulink type="http" url="https://developers.google.com/youtube/registering_an_application">registered with Google</ulink>.
     * @constructor 
     * @param developerKey your application's developer API key
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    constructor(developerKey: string, authorizer: Authorizer | null) 
    /**
     * Creates a new #GDataYouTubeService using the given #GDataAuthorizer. If `authorizer` is %NULL, all requests are made as an unauthenticated user.
     * The `developer_key` must be unique for your application, and as
     * <ulink type="http" url="https://developers.google.com/youtube/registering_an_application">registered with Google</ulink>.
     * @constructor 
     * @param developerKey your application's developer API key
     * @param authorizer a #GDataAuthorizer to authorize the service's requests, or %NULL
     */
    static new(developerKey: string, authorizer: Authorizer | null): YouTubeService
    _init(config?: YouTubeService.ConstructorProperties): void
    /**
     * The primary #GDataAuthorizationDomain for interacting with YouTube. This will not normally need to be used, as it's used internally
     * by the #GDataYouTubeService methods. However, if using the plain #GDataService methods to implement custom queries or requests which libgdata
     * does not support natively, then this domain may be needed to authorize the requests.
     * 
     * The domain never changes, and is interned so that pointer comparison can be used to differentiate it from other authorization domains.
     */
    static getPrimaryAuthorizationDomain(): AuthorizationDomain
}

export module YouTubeState {

    // Constructor properties interface

    export interface ConstructorProperties extends Parsable.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.YouTubeState

        /**
         * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose
         * the reason that an upload failed or was rejected.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
         */
        helpUri?: string | null
        /**
         * A human-readable description of why the video failed to upload.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
         */
        message?: string | null
        /**
         * The name of the status of the unpublished video. Valid values are: "processing", "restricted", "deleted", "rejected" and "failed".
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
         */
        name?: string | null
        /**
         * The reason code explaining why the video failed to upload.
         * 
         * For more information, see the
         * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
         */
        reasonCode?: string | null
    }

}

export interface YouTubeState {

    // Own properties of GData-0.0.GData.YouTubeState

    /**
     * A URI for a YouTube Help Center page that may help the developer or the video owner to diagnose
     * the reason that an upload failed or was rejected.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly helpUri: string
    /**
     * A human-readable description of why the video failed to upload.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly message: string
    /**
     * The name of the status of the unpublished video. Valid values are: "processing", "restricted", "deleted", "rejected" and "failed".
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly name: string
    /**
     * The reason code explaining why the video failed to upload.
     * 
     * For more information, see the
     * <ulink type="http" url="http://code.google.com/apis/youtube/2.0/reference.html#youtube_data_api_tag_yt:state">online documentation</ulink>.
     */
    readonly reasonCode: string

    // Own fields of GData-0.0.GData.YouTubeState

    parent: Parsable & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.YouTubeState

    /**
     * Gets the #GDataYouTubeState:help-uri property.
     */
    getHelpUri(): string
    /**
     * Gets the #GDataYouTubeState:message property.
     */
    getMessage(): string
    /**
     * Gets the #GDataYouTubeState:name property.
     */
    getName(): string
    /**
     * Gets the #GDataYouTubeState:reason-code property.
     */
    getReasonCode(): string

    // Class property signals of GData-0.0.GData.YouTubeState

    connect(sigName: "notify::help-uri", callback: any): number
    on(sigName: "notify::help-uri", callback: any): number
    once(sigName: "notify::help-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::help-uri", ...args: any[]): void
    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::reason-code", callback: any): number
    on(sigName: "notify::reason-code", callback: any): number
    once(sigName: "notify::reason-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reason-code", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeState structure are private and should never be accessed directly.
 * @class 
 */
export class YouTubeState extends Parsable {

    // Own properties of GData-0.0.GData.YouTubeState

    static name: string

    // Constructors of GData-0.0.GData.YouTubeState

    constructor(config?: YouTubeState.ConstructorProperties) 
    _init(config?: YouTubeState.ConstructorProperties): void
}

export module YouTubeVideo {

    // Constructor properties interface

    export interface ConstructorProperties extends Commentable.ConstructorProperties, Entry.ConstructorProperties {

        // Own constructor properties of GData-0.0.GData.YouTubeVideo

        /**
         * The aspect ratio of the video. A %NULL value means the aspect ratio is unknown (it could still be a widescreen video). A value of
         * %GDATA_YOUTUBE_ASPECT_RATIO_WIDESCREEN means the video is definitely widescreen.
         */
        aspectRatio?: string | null
        /**
         * Specifies a genre or developer tag that describes the video.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId">online documentation</ulink>.
         */
        category?: MediaCategory | null
        /**
         * A summary or description of the video.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.description">online documentation</ulink>.
         */
        description?: string | null
        isPrivate?: boolean | null
        /**
         * A %NULL-terminated array of words associated with the video.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]">online documentation</ulink>.
         */
        keywords?: string[] | null
        /**
         * The location as a latitude coordinate associated with this video. Valid latitudes range from <code class="literal">-90.0</code>
         * to <code class="literal">90.0</code> inclusive. Set to a value
         * outside this range to unset the location.
         * 
         * For more information, see the
         * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.latitude">
         * online documentation</ulink>.
         */
        latitude?: number | null
        /**
         * Descriptive text about the location where the video was taken.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.locationDescription">online documentation</ulink>.
         */
        location?: string | null
        /**
         * The location as a longitude coordinate associated with this video. Valid longitudes range from <code class="literal">-180.0</code>
         * to <code class="literal">180.0</code> inclusive. Set to a value
         * outside this range to unset the location.
         * 
         * For more information, see the
         * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.longitude">
         * online documentation</ulink>.
         */
        longitude?: number | null
        /**
         * Specifies the time the video was originally recorded.
         * 
         * For more information, see the <ulink type="http"
         * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.recordingDate">online documentation</ulink>.
         */
        recorded?: number | null
    }

}

export interface YouTubeVideo extends Commentable {

    // Own properties of GData-0.0.GData.YouTubeVideo

    /**
     * The aspect ratio of the video. A %NULL value means the aspect ratio is unknown (it could still be a widescreen video). A value of
     * %GDATA_YOUTUBE_ASPECT_RATIO_WIDESCREEN means the video is definitely widescreen.
     */
    aspectRatio: string
    /**
     * The average rating of the video, over all the ratings it's received.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly averageRating: number
    /**
     * Specifies a genre or developer tag that describes the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId">online documentation</ulink>.
     */
    category: MediaCategory
    /**
     * A summary or description of the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.description">online documentation</ulink>.
     */
    description: string
    /**
     * The duration of the video in seconds.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#contentDetails.duration">online documentation</ulink>.
     */
    readonly duration: number
    /**
     * The number of users who have added the video to their favorites.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.favoriteCount">online documentation</ulink>.
     */
    readonly favoriteCount: number
    isPrivate: boolean
    /**
     * A %NULL-terminated array of words associated with the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]">online documentation</ulink>.
     */
    keywords: string[]
    /**
     * The location as a latitude coordinate associated with this video. Valid latitudes range from <code class="literal">-90.0</code>
     * to <code class="literal">90.0</code> inclusive. Set to a value
     * outside this range to unset the location.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.latitude">
     * online documentation</ulink>.
     */
    latitude: number
    /**
     * Descriptive text about the location where the video was taken.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.locationDescription">online documentation</ulink>.
     */
    location: string
    /**
     * The location as a longitude coordinate associated with this video. Valid longitudes range from <code class="literal">-180.0</code>
     * to <code class="literal">180.0</code> inclusive. Set to a value
     * outside this range to unset the location.
     * 
     * For more information, see the
     * <ulink type="http" url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.location.longitude">
     * online documentation</ulink>.
     */
    longitude: number
    /**
     * The maximum allowed rating for the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly maxRating: number
    /**
     * The minimum allowed rating for the video.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly minRating: number
    /**
     * A URI for a browser-based media player for the full-length video (i.e. the video's page on YouTube).
     */
    readonly playerUri: string
    /**
     * The number of times the video has been rated.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.likeCount">online documentation</ulink>.
     */
    readonly ratingCount: number
    /**
     * Specifies the time the video was originally recorded.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#recordingDetails.recordingDate">online documentation</ulink>.
     */
    recorded: number
    /**
     * Information describing the state of the video. If this is non-%NULL, the video is not playable.
     * It points to a #GDataYouTubeState.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus">online documentation</ulink>.
     */
    readonly state: YouTubeState
    /**
     * Specifies the time the video was originally uploaded to YouTube.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.publishedAt">online documentation</ulink>.
     */
    readonly uploaded: number
    /**
     * The number of times the video has been viewed.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#statistics.viewCount">online documentation</ulink>.
     */
    readonly viewCount: number

    // Own fields of GData-0.0.GData.YouTubeVideo

    parent: Entry & Parsable & GObject.Object & GObject.Object
    priv: any

    // Owm methods of GData-0.0.GData.YouTubeVideo

    /**
     * Gets the permission associated with the given `action` on the #GDataYouTubeVideo. If the given `action`
     * doesn't have a permission set on the video, %GDATA_YOUTUBE_PERMISSION_DENIED is returned.
     * @param action the action whose permission should be returned
     */
    getAccessControl(action: string): YouTubePermission
    /**
     * Gets the #GDataYouTubeVideo:aspect-ratio property.
     */
    getAspectRatio(): string
    /**
     * Gets the #GDataYouTubeVideo:category property.
     */
    getCategory(): MediaCategory
    /**
     * Gets the #GDataYouTubeVideo:latitude and #GDataYouTubeVideo:longitude properties, setting the out parameters to them. If either latitude or
     * longitude is %NULL, that parameter will not be set. If the coordinates are unset, `latitude` and `longitude` will be set to %G_MAXDOUBLE.
     */
    getCoordinates(): [ /* latitude */ number, /* longitude */ number ]
    /**
     * Gets the #GDataYouTubeVideo:description property.
     */
    getDescription(): string
    /**
     * Gets the #GDataYouTubeVideo:duration property.
     */
    getDuration(): number
    /**
     * Gets the #GDataYouTubeVideo:favorite-count property.
     */
    getFavoriteCount(): number
    /**
     * Gets the #GDataYouTubeVideo:keywords property.
     */
    getKeywords(): string[]
    /**
     * Gets the #GDataYouTubeVideo:location property.
     */
    getLocation(): string
    /**
     * Returns the rating of the given type for the video, if one exists. For example, this could be a film rating awarded by the MPAA; or a simple
     * rating specifying whether the video contains adult content.
     * 
     * The valid values for `rating_type` are: %GDATA_YOUTUBE_RATING_TYPE_MPAA and %GDATA_YOUTUBE_RATING_TYPE_V_CHIP.
     * Further values may be added in future; if an unknown rating type is passed to the function, %NULL will be returned.
     * 
     * The possible return values depend on what's passed to `rating_type`. Valid values for each rating type are listed in the documentation for the
     * rating types.
     * @param ratingType the type of rating to retrieve
     */
    getMediaRating(ratingType: string): string
    /**
     * Gets the #GDataYouTubeVideo:player-uri property.
     */
    getPlayerUri(): string
    /**
     * Gets various properties of the ratings on the video.
     * 
     * Note that this property may not be retrieved when querying for multiple
     * videos at once, but is guaranteed to be retrieved when querying with
     * gdata_service_query_single_entry_async().
     */
    getRating(): [ /* min */ number, /* max */ number, /* count */ number, /* average */ number ]
    /**
     * Gets the #GDataYouTubeVideo:recorded property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getRecorded(): number
    /**
     * Gets the #GDataYouTubeVideo:state property.
     * 
     * For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#status.uploadStatus">online documentation</ulink>.
     */
    getState(): YouTubeState
    /**
     * Gets a list of the thumbnails available for the video.
     */
    getThumbnails(): MediaThumbnail[]
    /**
     * Gets the #GDataYouTubeVideo:uploaded property. If the property is unset, <code class="literal">-1</code> will be returned.
     */
    getUploaded(): number
    /**
     * Gets the #GDataYouTubeVideo:view-count property.
     */
    getViewCount(): number
    /**
     * Checks whether viewing of the video is restricted in `country,` either by its content rating, or by the request of the producer.
     * The return value from this function is purely informational, and no obligation is assumed.
     * @param country an ISO 3166 two-letter country code to check
     */
    isRestrictedInCountry(country: string): boolean
    /**
     * Sets the permission associated with `action` on the #GDataYouTubeVideo, allowing restriction or derestriction of various
     * operations on YouTube videos.
     * 
     * Note that only %GDATA_YOUTUBE_ACTION_RATE and %GDATA_YOUTUBE_ACTION_COMMENT actions can have the %GDATA_YOUTUBE_PERMISSION_MODERATED permission.
     * @param action the action whose permission is being set
     * @param permission the permission to give to the action
     */
    setAccessControl(action: string, permission: YouTubePermission): void
    /**
     * Sets the #GDataYouTubeVideo:aspect-ratio property to specify the video's aspect ratio.
     * If `aspect_ratio` is %NULL, the property will be unset.
     * @param aspectRatio the aspect ratio property, or %NULL
     */
    setAspectRatio(aspectRatio: string | null): void
    /**
     * Sets the #GDataYouTubeVideo:category property to the new category, `category,` and increments its reference count.
     * 
     * `category` must not be %NULL. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.categoryId">online documentation</ulink>.
     * @param category a new #GDataMediaCategory
     */
    setCategory(category: MediaCategory): void
    /**
     * Sets the #GDataYouTubeVideo:latitude and #GDataYouTubeVideo:longitude properties to `latitude` and `longitude` respectively.
     * @param latitude the video's new latitude coordinate, or %G_MAXDOUBLE
     * @param longitude the video's new longitude coordinate, or %G_MAXDOUBLE
     */
    setCoordinates(latitude: number, longitude: number): void
    /**
     * Sets the #GDataYouTubeVideo:description property to the new description, `description`.
     * 
     * Set `description` to %NULL to unset the video's description.
     * @param description the video's new description, or %NULL
     */
    setDescription(description: string | null): void
    /**
     * Sets the #GDataYouTubeVideo:is-private property to decide whether the video is publicly viewable.
     * @param isPrivate whether the video is private
     */
    setIsPrivate(isPrivate: boolean): void
    /**
     * Sets the #GDataYouTubeVideo:keywords property to the new keyword list, `keywords`.
     * 
     * `keywords` must not be %NULL. For more information, see the <ulink type="http"
     * url="https://developers.google.com/youtube/v3/docs/videos#snippet.tags[]">online documentation</ulink>.
     * @param keywords a new %NULL-terminated array of keywords
     */
    setKeywords(keywords: string[]): void
    /**
     * Sets the #GDataYouTubeVideo:location property to the new location string, `location`.
     * 
     * Set `location` to %NULL to unset the property in the video.
     * @param location a new location, or %NULL
     */
    setLocation(location: string | null): void
    /**
     * Sets the #GDataYouTubeVideo:recorded property to the new recorded time, `recorded`.
     * 
     * Set `recorded` to <code class="literal">-1</code> to unset the video's recorded time.
     * @param recorded the video's new recorded time, or <code class="literal">-1</code>
     */
    setRecorded(recorded: number): void

    // Class property signals of GData-0.0.GData.YouTubeVideo

    connect(sigName: "notify::aspect-ratio", callback: any): number
    on(sigName: "notify::aspect-ratio", callback: any): number
    once(sigName: "notify::aspect-ratio", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::aspect-ratio", ...args: any[]): void
    connect(sigName: "notify::average-rating", callback: any): number
    on(sigName: "notify::average-rating", callback: any): number
    once(sigName: "notify::average-rating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::average-rating", ...args: any[]): void
    connect(sigName: "notify::category", callback: any): number
    on(sigName: "notify::category", callback: any): number
    once(sigName: "notify::category", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::category", ...args: any[]): void
    connect(sigName: "notify::description", callback: any): number
    on(sigName: "notify::description", callback: any): number
    once(sigName: "notify::description", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::description", ...args: any[]): void
    connect(sigName: "notify::duration", callback: any): number
    on(sigName: "notify::duration", callback: any): number
    once(sigName: "notify::duration", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::duration", ...args: any[]): void
    connect(sigName: "notify::favorite-count", callback: any): number
    on(sigName: "notify::favorite-count", callback: any): number
    once(sigName: "notify::favorite-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::favorite-count", ...args: any[]): void
    connect(sigName: "notify::is-private", callback: any): number
    on(sigName: "notify::is-private", callback: any): number
    once(sigName: "notify::is-private", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-private", ...args: any[]): void
    connect(sigName: "notify::keywords", callback: any): number
    on(sigName: "notify::keywords", callback: any): number
    once(sigName: "notify::keywords", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keywords", ...args: any[]): void
    connect(sigName: "notify::latitude", callback: any): number
    on(sigName: "notify::latitude", callback: any): number
    once(sigName: "notify::latitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::latitude", ...args: any[]): void
    connect(sigName: "notify::location", callback: any): number
    on(sigName: "notify::location", callback: any): number
    once(sigName: "notify::location", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::location", ...args: any[]): void
    connect(sigName: "notify::longitude", callback: any): number
    on(sigName: "notify::longitude", callback: any): number
    once(sigName: "notify::longitude", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::longitude", ...args: any[]): void
    connect(sigName: "notify::max-rating", callback: any): number
    on(sigName: "notify::max-rating", callback: any): number
    once(sigName: "notify::max-rating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-rating", ...args: any[]): void
    connect(sigName: "notify::min-rating", callback: any): number
    on(sigName: "notify::min-rating", callback: any): number
    once(sigName: "notify::min-rating", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-rating", ...args: any[]): void
    connect(sigName: "notify::player-uri", callback: any): number
    on(sigName: "notify::player-uri", callback: any): number
    once(sigName: "notify::player-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::player-uri", ...args: any[]): void
    connect(sigName: "notify::rating-count", callback: any): number
    on(sigName: "notify::rating-count", callback: any): number
    once(sigName: "notify::rating-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rating-count", ...args: any[]): void
    connect(sigName: "notify::recorded", callback: any): number
    on(sigName: "notify::recorded", callback: any): number
    once(sigName: "notify::recorded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::recorded", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::uploaded", callback: any): number
    on(sigName: "notify::uploaded", callback: any): number
    once(sigName: "notify::uploaded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uploaded", ...args: any[]): void
    connect(sigName: "notify::view-count", callback: any): number
    on(sigName: "notify::view-count", callback: any): number
    once(sigName: "notify::view-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view-count", ...args: any[]): void
    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::content-uri", callback: any): number
    on(sigName: "notify::content-uri", callback: any): number
    once(sigName: "notify::content-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-uri", ...args: any[]): void
    connect(sigName: "notify::etag", callback: any): number
    on(sigName: "notify::etag", callback: any): number
    once(sigName: "notify::etag", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etag", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-inserted", callback: any): number
    on(sigName: "notify::is-inserted", callback: any): number
    once(sigName: "notify::is-inserted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-inserted", ...args: any[]): void
    connect(sigName: "notify::published", callback: any): number
    on(sigName: "notify::published", callback: any): number
    once(sigName: "notify::published", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::published", ...args: any[]): void
    connect(sigName: "notify::rights", callback: any): number
    on(sigName: "notify::rights", callback: any): number
    once(sigName: "notify::rights", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rights", ...args: any[]): void
    connect(sigName: "notify::summary", callback: any): number
    on(sigName: "notify::summary", callback: any): number
    once(sigName: "notify::summary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::summary", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::updated", callback: any): number
    on(sigName: "notify::updated", callback: any): number
    once(sigName: "notify::updated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::updated", ...args: any[]): void
    connect(sigName: "notify::constructed-from-xml", callback: any): number
    on(sigName: "notify::constructed-from-xml", callback: any): number
    once(sigName: "notify::constructed-from-xml", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::constructed-from-xml", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #GDataYouTubeVideo structure are private and should never be accessed directly.
 * @class 
 */
export class YouTubeVideo extends Entry {

    // Own properties of GData-0.0.GData.YouTubeVideo

    static name: string

    // Constructors of GData-0.0.GData.YouTubeVideo

    constructor(config?: YouTubeVideo.ConstructorProperties) 
    /**
     * Creates a new #GDataYouTubeVideo with the given ID and default properties.
     * @constructor 
     * @param id the video's ID, or %NULL
     */
    constructor(id: string | null) 
    /**
     * Creates a new #GDataYouTubeVideo with the given ID and default properties.
     * @constructor 
     * @param id the video's ID, or %NULL
     */
    static new(id: string | null): YouTubeVideo

    // Overloads of new

    /**
     * Creates a new #GDataEntry with the given ID and default properties.
     * @constructor 
     * @param id the entry's ID, or %NULL
     */
    static new(id: string | null): Entry
    _init(config?: YouTubeVideo.ConstructorProperties): void
    /**
     * Extracts a video ID from a YouTube video player URI. The video ID is in the same form as returned by
     * gdata_youtube_video_get_video_id(), and the `video_uri` should be in the same form as returned by
     * gdata_youtube_video_get_player_uri().
     * 
     * The function will validate whether the URI actually points to a hostname containing <literal>youtube</literal>
     * (e.g. <literal>youtube.com</literal>), and will return %NULL if it doesn't.
     * 
     * For example:
     * <informalexample><programlisting>
     * video_id = gdata_youtube_video_get_video_id_from_uri ("http://www.youtube.com/watch?v=BH_vwsyCrTc&feature=featured");
     * g_message ("Video ID: %s", video_id); /<!-- -->* Should print: BH_vwsyCrTc *<!-- -->/
     * g_free (video_id);
     * </programlisting></informalexample>
     * @param videoUri a YouTube video player URI
     */
    static getVideoIdFromUri(videoUri: string): string
}

export interface APPCategoriesClass {
}

/**
 * All the fields in the #GDataAPPCategoriesClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class APPCategoriesClass {

    // Own properties of GData-0.0.GData.APPCategoriesClass

    static name: string
}

export interface APPCategoriesPrivate {
}

export class APPCategoriesPrivate {

    // Own properties of GData-0.0.GData.APPCategoriesPrivate

    static name: string
}

export interface AccessHandlerIface {

    // Own fields of GData-0.0.GData.AccessHandlerIface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    isOwnerRule: (rule: AccessRule) => boolean
    getRules: (self: AccessHandler, service: Service, cancellable: Gio.Cancellable | null, progressCallback: QueryProgressCallback | null) => Feed
}

/**
 * The class structure for the #GDataAccessHandler interface.
 * @record 
 */
export abstract class AccessHandlerIface {

    // Own properties of GData-0.0.GData.AccessHandlerIface

    static name: string
}

export interface AccessRuleClass {
}

/**
 * All the fields in the #GDataAccessRuleClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class AccessRuleClass {

    // Own properties of GData-0.0.GData.AccessRuleClass

    static name: string
}

export interface AccessRulePrivate {
}

export class AccessRulePrivate {

    // Own properties of GData-0.0.GData.AccessRulePrivate

    static name: string
}

export interface AuthorClass {
}

/**
 * All the fields in the #GDataAuthorClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class AuthorClass {

    // Own properties of GData-0.0.GData.AuthorClass

    static name: string
}

export interface AuthorPrivate {
}

export class AuthorPrivate {

    // Own properties of GData-0.0.GData.AuthorPrivate

    static name: string
}

export interface AuthorizationDomainClass {
}

/**
 * All the fields in the #GDataAuthorizationDomainClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class AuthorizationDomainClass {

    // Own properties of GData-0.0.GData.AuthorizationDomainClass

    static name: string
}

export interface AuthorizationDomainPrivate {
}

export class AuthorizationDomainPrivate {

    // Own properties of GData-0.0.GData.AuthorizationDomainPrivate

    static name: string
}

export interface AuthorizerInterface {

    // Own fields of GData-0.0.GData.AuthorizerInterface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    processRequest: (self: Authorizer, domain: AuthorizationDomain | null, message: Soup.Message) => void
    isAuthorizedForDomain: (self: Authorizer | null, domain: AuthorizationDomain) => boolean
    refreshAuthorization: (self: Authorizer, cancellable: Gio.Cancellable | null) => boolean
    refreshAuthorizationAsync: (self: Authorizer, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    refreshAuthorizationFinish: (self: Authorizer, asyncResult: Gio.AsyncResult) => boolean
}

/**
 * The class structure for the #GDataAuthorizer interface.
 * @record 
 */
export abstract class AuthorizerInterface {

    // Own properties of GData-0.0.GData.AuthorizerInterface

    static name: string
}

export interface BatchOperationClass {
}

/**
 * All the fields in the #GDataBatchOperationClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class BatchOperationClass {

    // Own properties of GData-0.0.GData.BatchOperationClass

    static name: string
}

export interface BatchOperationPrivate {
}

export class BatchOperationPrivate {

    // Own properties of GData-0.0.GData.BatchOperationPrivate

    static name: string
}

export interface BatchableIface {

    // Own fields of GData-0.0.GData.BatchableIface

    isSupported: (operationType: BatchOperationType) => boolean
}

/**
 * All the fields in the #GDataBatchableIface structure are private and should never be accessed directly.
 * @record 
 */
export abstract class BatchableIface {

    // Own properties of GData-0.0.GData.BatchableIface

    static name: string
}

export interface CalendarAccessRuleClass {
}

/**
 * All the fields in the #GDataCalendarAccessRuleClass structure are private
 * and should never be accessed directly.
 * @record 
 */
export abstract class CalendarAccessRuleClass {

    // Own properties of GData-0.0.GData.CalendarAccessRuleClass

    static name: string
}

export interface CalendarCalendarClass {
}

/**
 * All the fields in the #GDataCalendarCalendarClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CalendarCalendarClass {

    // Own properties of GData-0.0.GData.CalendarCalendarClass

    static name: string
}

export interface CalendarCalendarPrivate {
}

export class CalendarCalendarPrivate {

    // Own properties of GData-0.0.GData.CalendarCalendarPrivate

    static name: string
}

export interface CalendarEventClass {
}

/**
 * All the fields in the #GDataCalendarEventClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CalendarEventClass {

    // Own properties of GData-0.0.GData.CalendarEventClass

    static name: string
}

export interface CalendarEventPrivate {
}

export class CalendarEventPrivate {

    // Own properties of GData-0.0.GData.CalendarEventPrivate

    static name: string
}

export interface CalendarFeedClass {
}

/**
 * All the fields in the #GDataCalendarFeedClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CalendarFeedClass {

    // Own properties of GData-0.0.GData.CalendarFeedClass

    static name: string
}

export interface CalendarFeedPrivate {
}

export class CalendarFeedPrivate {

    // Own properties of GData-0.0.GData.CalendarFeedPrivate

    static name: string
}

export interface CalendarQueryClass {
}

/**
 * All the fields in the #GDataCalendarQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CalendarQueryClass {

    // Own properties of GData-0.0.GData.CalendarQueryClass

    static name: string
}

export interface CalendarQueryPrivate {
}

export class CalendarQueryPrivate {

    // Own properties of GData-0.0.GData.CalendarQueryPrivate

    static name: string
}

export interface CalendarServiceClass {
}

/**
 * All the fields in the #GDataCalendarServiceClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CalendarServiceClass {

    // Own properties of GData-0.0.GData.CalendarServiceClass

    static name: string
}

export interface CalendarServicePrivate {
}

export class CalendarServicePrivate {

    // Own properties of GData-0.0.GData.CalendarServicePrivate

    static name: string
}

export interface CategoryClass {
}

/**
 * All the fields in the #GDataCategoryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CategoryClass {

    // Own properties of GData-0.0.GData.CategoryClass

    static name: string
}

export interface CategoryPrivate {
}

export class CategoryPrivate {

    // Own properties of GData-0.0.GData.CategoryPrivate

    static name: string
}

export interface Color {

    // Own fields of GData-0.0.GData.Color

    /**
     * red color intensity, from 0–255
     * @field 
     */
    red: number
    /**
     * green color intensity, from 0–255
     * @field 
     */
    green: number
    /**
     * blue color intensity, from 0–255
     * @field 
     */
    blue: number

    // Owm methods of GData-0.0.GData.Color

    /**
     * Returns a string describing `color` in hexadecimal form; in the form <literal>#<replaceable>rr</replaceable><replaceable>gg</replaceable>
     * <replaceable>bb</replaceable></literal>, where <replaceable>rr</replaceable> is a two-digit hexadecimal red intensity value,
     * <replaceable>gg</replaceable> is green and <replaceable>bb</replaceable> is blue. The hash is always present.
     */
    toHexadecimal(): string
}

/**
 * Describes a color, such as used in the Google Calendar interface to
 * differentiate calendars.
 * @record 
 */
export class Color {

    // Own properties of GData-0.0.GData.Color

    static name: string

    // Constructors of GData-0.0.GData.Color

    /**
     * Parses `hexadecimal` and returns a #GDataColor describing it in `color`.
     * 
     * `hexadecimal` should be in the form <literal>#<replaceable>rr</replaceable><replaceable>gg</replaceable><replaceable>bb</replaceable></literal>,
     * where <replaceable>rr</replaceable> is a two-digit hexadecimal red intensity value, <replaceable>gg</replaceable> is green
     * and <replaceable>bb</replaceable> is blue. The hash is optional.
     * @param hexadecimal a hexadecimal color string
     */
    static fromHexadecimal(hexadecimal: string): [ /* returnType */ boolean, /* color */ Color ]
}

export interface CommentClass {
}

/**
 * All the fields in the #GDataCommentClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class CommentClass {

    // Own properties of GData-0.0.GData.CommentClass

    static name: string
}

export interface CommentPrivate {
}

export class CommentPrivate {

    // Own properties of GData-0.0.GData.CommentPrivate

    static name: string
}

export interface CommentableInterface {

    // Own fields of GData-0.0.GData.CommentableInterface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    /**
     * the #GType of the comment class (subclass of #GDataComment) to use for query results from this commentable object
     * @field 
     */
    commentType: GObject.GType
    getQueryCommentsUri: (self: Commentable) => string
    getInsertCommentUri: (self: Commentable, comment: Comment) => string
    isCommentDeletable: (self: Commentable, comment: Comment) => boolean
}

/**
 * The interface structure for the #GDataCommentable interface.
 * @record 
 */
export abstract class CommentableInterface {

    // Own properties of GData-0.0.GData.CommentableInterface

    static name: string
}

export interface ComparableIface {

    // Own fields of GData-0.0.GData.ComparableIface

    /**
     * the parent type
     * @field 
     */
    parent: GObject.TypeInterface
    compareWith: (self: Comparable, other: Comparable) => number
}

/**
 * The class structure for the #GDataComparable interface.
 * @record 
 */
export abstract class ComparableIface {

    // Own properties of GData-0.0.GData.ComparableIface

    static name: string
}

export interface DocumentsAccessRuleClass {
}

/**
 * All the fields in the #GDataDocumentsAccessRuleClass structure are private
 * and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsAccessRuleClass {

    // Own properties of GData-0.0.GData.DocumentsAccessRuleClass

    static name: string
}

export interface DocumentsDocumentClass {
}

/**
 * All the fields in the #GDataDocumentsDocumentClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsDocumentClass {

    // Own properties of GData-0.0.GData.DocumentsDocumentClass

    static name: string
}

export interface DocumentsDocumentPrivate {
}

export class DocumentsDocumentPrivate {

    // Own properties of GData-0.0.GData.DocumentsDocumentPrivate

    static name: string
}

export interface DocumentsDrawingClass {
}

/**
 * All the fields in the #GDataDocumentsDrawingClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsDrawingClass {

    // Own properties of GData-0.0.GData.DocumentsDrawingClass

    static name: string
}

export interface DocumentsDrawingPrivate {
}

export class DocumentsDrawingPrivate {

    // Own properties of GData-0.0.GData.DocumentsDrawingPrivate

    static name: string
}

export interface DocumentsDriveClass {
}

/**
 * All the fields in the #GDataDocumentsDriveClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsDriveClass {

    // Own properties of GData-0.0.GData.DocumentsDriveClass

    static name: string
}

export interface DocumentsDriveQueryClass {
}

/**
 * All the fields in the #GDataDocumentsDriveQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsDriveQueryClass {

    // Own properties of GData-0.0.GData.DocumentsDriveQueryClass

    static name: string
}

export interface DocumentsEntryClass {
}

/**
 * All the fields in the #GDataDocumentsEntryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsEntryClass {

    // Own properties of GData-0.0.GData.DocumentsEntryClass

    static name: string
}

export interface DocumentsEntryPrivate {
}

export class DocumentsEntryPrivate {

    // Own properties of GData-0.0.GData.DocumentsEntryPrivate

    static name: string
}

export interface DocumentsFeedClass {
}

/**
 * All the fields in the #GDataDocumentsFeedClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsFeedClass {

    // Own properties of GData-0.0.GData.DocumentsFeedClass

    static name: string
}

export interface DocumentsFeedPrivate {
}

export class DocumentsFeedPrivate {

    // Own properties of GData-0.0.GData.DocumentsFeedPrivate

    static name: string
}

export interface DocumentsFolderClass {
}

/**
 * All the fields in the #GDataDocumentsFolderClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsFolderClass {

    // Own properties of GData-0.0.GData.DocumentsFolderClass

    static name: string
}

export interface DocumentsFolderPrivate {
}

export class DocumentsFolderPrivate {

    // Own properties of GData-0.0.GData.DocumentsFolderPrivate

    static name: string
}

export interface DocumentsMetadataClass {
}

/**
 * All the fields in the #GDataDocumentsMetadataClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsMetadataClass {

    // Own properties of GData-0.0.GData.DocumentsMetadataClass

    static name: string
}

export interface DocumentsMetadataPrivate {
}

export class DocumentsMetadataPrivate {

    // Own properties of GData-0.0.GData.DocumentsMetadataPrivate

    static name: string
}

export interface DocumentsPdfClass {
}

/**
 * All the fields in the #GDataDocumentsPdfClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsPdfClass {

    // Own properties of GData-0.0.GData.DocumentsPdfClass

    static name: string
}

export interface DocumentsPdfPrivate {
}

export class DocumentsPdfPrivate {

    // Own properties of GData-0.0.GData.DocumentsPdfPrivate

    static name: string
}

export interface DocumentsPresentationClass {
}

/**
 * All the fields in the #GDataDocumentsPresentationClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsPresentationClass {

    // Own properties of GData-0.0.GData.DocumentsPresentationClass

    static name: string
}

export interface DocumentsPresentationPrivate {
}

export class DocumentsPresentationPrivate {

    // Own properties of GData-0.0.GData.DocumentsPresentationPrivate

    static name: string
}

export interface DocumentsPropertyClass {
}

/**
 * All the fields in the #GDataDocumentsPropertyClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsPropertyClass {

    // Own properties of GData-0.0.GData.DocumentsPropertyClass

    static name: string
}

export interface DocumentsPropertyPrivate {
}

export class DocumentsPropertyPrivate {

    // Own properties of GData-0.0.GData.DocumentsPropertyPrivate

    static name: string
}

export interface DocumentsQueryClass {
}

/**
 * All the fields in the #GDataDocumentsQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsQueryClass {

    // Own properties of GData-0.0.GData.DocumentsQueryClass

    static name: string
}

export interface DocumentsQueryPrivate {
}

export class DocumentsQueryPrivate {

    // Own properties of GData-0.0.GData.DocumentsQueryPrivate

    static name: string
}

export interface DocumentsServiceClass {
}

/**
 * All the fields in the #GDataDocumentsServiceClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsServiceClass {

    // Own properties of GData-0.0.GData.DocumentsServiceClass

    static name: string
}

export interface DocumentsServicePrivate {
}

export class DocumentsServicePrivate {

    // Own properties of GData-0.0.GData.DocumentsServicePrivate

    static name: string
}

export interface DocumentsSpreadsheetClass {
}

/**
 * All the fields in the #GDataDocumentsSpreadsheetClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsSpreadsheetClass {

    // Own properties of GData-0.0.GData.DocumentsSpreadsheetClass

    static name: string
}

export interface DocumentsSpreadsheetPrivate {
}

export class DocumentsSpreadsheetPrivate {

    // Own properties of GData-0.0.GData.DocumentsSpreadsheetPrivate

    static name: string
}

export interface DocumentsTextClass {
}

/**
 * All the fields in the #GDataDocumentsTextClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsTextClass {

    // Own properties of GData-0.0.GData.DocumentsTextClass

    static name: string
}

export interface DocumentsTextPrivate {
}

export class DocumentsTextPrivate {

    // Own properties of GData-0.0.GData.DocumentsTextPrivate

    static name: string
}

export interface DocumentsUploadQueryClass {
}

/**
 * All the fields in the #GDataDocumentsUploadQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DocumentsUploadQueryClass {

    // Own properties of GData-0.0.GData.DocumentsUploadQueryClass

    static name: string
}

export interface DocumentsUploadQueryPrivate {
}

export class DocumentsUploadQueryPrivate {

    // Own properties of GData-0.0.GData.DocumentsUploadQueryPrivate

    static name: string
}

export interface DownloadStreamClass {
}

/**
 * All the fields in the #GDataDownloadStreamClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class DownloadStreamClass {

    // Own properties of GData-0.0.GData.DownloadStreamClass

    static name: string
}

export interface DownloadStreamPrivate {
}

export class DownloadStreamPrivate {

    // Own properties of GData-0.0.GData.DownloadStreamPrivate

    static name: string
}

export interface EntryClass {

    // Own fields of GData-0.0.GData.EntryClass

    /**
     * the parent class
     * @field 
     */
    parent: ParsableClass
    getEntryUri: (id: string) => string
    /**
     * the term for this entry's kind category (see the
     * <ulink type="http" url="http://code.google.com/apis/gdata/docs/2.0/elements.html#Introduction">documentation on kinds</ulink>)
     * @field 
     */
    kindTerm: string
}

/**
 * The class structure for the #GDataEntry type.
 * @record 
 */
export abstract class EntryClass {

    // Own properties of GData-0.0.GData.EntryClass

    static name: string
}

export interface EntryPrivate {
}

export class EntryPrivate {

    // Own properties of GData-0.0.GData.EntryPrivate

    static name: string
}

export interface FeedClass {
}

/**
 * All the fields in the #GDataFeedClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class FeedClass {

    // Own properties of GData-0.0.GData.FeedClass

    static name: string
}

export interface FeedPrivate {
}

export class FeedPrivate {

    // Own properties of GData-0.0.GData.FeedPrivate

    static name: string
}

export interface GContactCalendarClass {
}

/**
 * All the fields in the #GDataGContactCalendarClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactCalendarClass {

    // Own properties of GData-0.0.GData.GContactCalendarClass

    static name: string
}

export interface GContactCalendarPrivate {
}

export class GContactCalendarPrivate {

    // Own properties of GData-0.0.GData.GContactCalendarPrivate

    static name: string
}

export interface GContactEventClass {
}

/**
 * All the fields in the #GDataGContactEventClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactEventClass {

    // Own properties of GData-0.0.GData.GContactEventClass

    static name: string
}

export interface GContactEventPrivate {
}

export class GContactEventPrivate {

    // Own properties of GData-0.0.GData.GContactEventPrivate

    static name: string
}

export interface GContactExternalIDClass {
}

/**
 * All the fields in the #GDataGContactExternalIDClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactExternalIDClass {

    // Own properties of GData-0.0.GData.GContactExternalIDClass

    static name: string
}

export interface GContactExternalIDPrivate {
}

export class GContactExternalIDPrivate {

    // Own properties of GData-0.0.GData.GContactExternalIDPrivate

    static name: string
}

export interface GContactJotClass {
}

/**
 * All the fields in the #GDataGContactJotClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactJotClass {

    // Own properties of GData-0.0.GData.GContactJotClass

    static name: string
}

export interface GContactJotPrivate {
}

export class GContactJotPrivate {

    // Own properties of GData-0.0.GData.GContactJotPrivate

    static name: string
}

export interface GContactLanguageClass {
}

/**
 * All the fields in the #GDataGContactLanguageClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactLanguageClass {

    // Own properties of GData-0.0.GData.GContactLanguageClass

    static name: string
}

export interface GContactLanguagePrivate {
}

export class GContactLanguagePrivate {

    // Own properties of GData-0.0.GData.GContactLanguagePrivate

    static name: string
}

export interface GContactRelationClass {
}

/**
 * All the fields in the #GDataGContactRelationClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactRelationClass {

    // Own properties of GData-0.0.GData.GContactRelationClass

    static name: string
}

export interface GContactRelationPrivate {
}

export class GContactRelationPrivate {

    // Own properties of GData-0.0.GData.GContactRelationPrivate

    static name: string
}

export interface GContactWebsiteClass {
}

/**
 * All the fields in the #GDataGContactWebsiteClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GContactWebsiteClass {

    // Own properties of GData-0.0.GData.GContactWebsiteClass

    static name: string
}

export interface GContactWebsitePrivate {
}

export class GContactWebsitePrivate {

    // Own properties of GData-0.0.GData.GContactWebsitePrivate

    static name: string
}

export interface GDEmailAddressClass {
}

/**
 * All the fields in the #GDataGDEmailAddressClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDEmailAddressClass {

    // Own properties of GData-0.0.GData.GDEmailAddressClass

    static name: string
}

export interface GDEmailAddressPrivate {
}

export class GDEmailAddressPrivate {

    // Own properties of GData-0.0.GData.GDEmailAddressPrivate

    static name: string
}

export interface GDIMAddressClass {
}

/**
 * All the fields in the #GDataGDIMAddressClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDIMAddressClass {

    // Own properties of GData-0.0.GData.GDIMAddressClass

    static name: string
}

export interface GDIMAddressPrivate {
}

export class GDIMAddressPrivate {

    // Own properties of GData-0.0.GData.GDIMAddressPrivate

    static name: string
}

export interface GDNameClass {
}

/**
 * All the fields in the #GDataGDNameClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDNameClass {

    // Own properties of GData-0.0.GData.GDNameClass

    static name: string
}

export interface GDNamePrivate {
}

export class GDNamePrivate {

    // Own properties of GData-0.0.GData.GDNamePrivate

    static name: string
}

export interface GDOrganizationClass {
}

/**
 * All the fields in the #GDataGDOrganizationClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDOrganizationClass {

    // Own properties of GData-0.0.GData.GDOrganizationClass

    static name: string
}

export interface GDOrganizationPrivate {
}

export class GDOrganizationPrivate {

    // Own properties of GData-0.0.GData.GDOrganizationPrivate

    static name: string
}

export interface GDPhoneNumberClass {
}

/**
 * All the fields in the #GDataGDPhoneNumberClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDPhoneNumberClass {

    // Own properties of GData-0.0.GData.GDPhoneNumberClass

    static name: string
}

export interface GDPhoneNumberPrivate {
}

export class GDPhoneNumberPrivate {

    // Own properties of GData-0.0.GData.GDPhoneNumberPrivate

    static name: string
}

export interface GDPostalAddressClass {
}

/**
 * All the fields in the #GDataGDPostalAddressClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDPostalAddressClass {

    // Own properties of GData-0.0.GData.GDPostalAddressClass

    static name: string
}

export interface GDPostalAddressPrivate {
}

export class GDPostalAddressPrivate {

    // Own properties of GData-0.0.GData.GDPostalAddressPrivate

    static name: string
}

export interface GDReminderClass {
}

/**
 * All the fields in the #GDataGDReminderClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDReminderClass {

    // Own properties of GData-0.0.GData.GDReminderClass

    static name: string
}

export interface GDReminderPrivate {
}

export class GDReminderPrivate {

    // Own properties of GData-0.0.GData.GDReminderPrivate

    static name: string
}

export interface GDWhenClass {
}

/**
 * All the fields in the #GDataGDWhenClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDWhenClass {

    // Own properties of GData-0.0.GData.GDWhenClass

    static name: string
}

export interface GDWhenPrivate {
}

export class GDWhenPrivate {

    // Own properties of GData-0.0.GData.GDWhenPrivate

    static name: string
}

export interface GDWhereClass {
}

/**
 * All the fields in the #GDataGDWhereClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDWhereClass {

    // Own properties of GData-0.0.GData.GDWhereClass

    static name: string
}

export interface GDWherePrivate {
}

export class GDWherePrivate {

    // Own properties of GData-0.0.GData.GDWherePrivate

    static name: string
}

export interface GDWhoClass {
}

/**
 * All the fields in the #GDataGDWhoClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GDWhoClass {

    // Own properties of GData-0.0.GData.GDWhoClass

    static name: string
}

export interface GDWhoPrivate {
}

export class GDWhoPrivate {

    // Own properties of GData-0.0.GData.GDWhoPrivate

    static name: string
}

export interface GeneratorClass {
}

/**
 * All the fields in the #GDataGeneratorClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GeneratorClass {

    // Own properties of GData-0.0.GData.GeneratorClass

    static name: string
}

export interface GeneratorPrivate {
}

export class GeneratorPrivate {

    // Own properties of GData-0.0.GData.GeneratorPrivate

    static name: string
}

export interface GoaAuthorizerClass {
}

/**
 * All the fields in the #GDataGoaAuthorizerClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class GoaAuthorizerClass {

    // Own properties of GData-0.0.GData.GoaAuthorizerClass

    static name: string
}

export interface GoaAuthorizerPrivate {
}

export class GoaAuthorizerPrivate {

    // Own properties of GData-0.0.GData.GoaAuthorizerPrivate

    static name: string
}

export interface LinkClass {
}

/**
 * All the fields in the #GDataLinkClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class LinkClass {

    // Own properties of GData-0.0.GData.LinkClass

    static name: string
}

export interface LinkPrivate {
}

export class LinkPrivate {

    // Own properties of GData-0.0.GData.LinkPrivate

    static name: string
}

export interface MediaCategoryClass {
}

/**
 * All the fields in the #GDataMediaCategoryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class MediaCategoryClass {

    // Own properties of GData-0.0.GData.MediaCategoryClass

    static name: string
}

export interface MediaCategoryPrivate {
}

export class MediaCategoryPrivate {

    // Own properties of GData-0.0.GData.MediaCategoryPrivate

    static name: string
}

export interface MediaContentClass {
}

/**
 * All the fields in the #GDataMediaContentClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class MediaContentClass {

    // Own properties of GData-0.0.GData.MediaContentClass

    static name: string
}

export interface MediaContentPrivate {
}

export class MediaContentPrivate {

    // Own properties of GData-0.0.GData.MediaContentPrivate

    static name: string
}

export interface MediaCreditClass {
}

/**
 * All the fields in the #GDataMediaCreditClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class MediaCreditClass {

    // Own properties of GData-0.0.GData.MediaCreditClass

    static name: string
}

export interface MediaCreditPrivate {
}

export class MediaCreditPrivate {

    // Own properties of GData-0.0.GData.MediaCreditPrivate

    static name: string
}

export interface MediaThumbnailClass {
}

/**
 * All the fields in the #GDataMediaThumbnailClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class MediaThumbnailClass {

    // Own properties of GData-0.0.GData.MediaThumbnailClass

    static name: string
}

export interface MediaThumbnailPrivate {
}

export class MediaThumbnailPrivate {

    // Own properties of GData-0.0.GData.MediaThumbnailPrivate

    static name: string
}

export interface OAuth2AuthorizerClass {
}

/**
 * All the fields in the #GDataOAuth2AuthorizerClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class OAuth2AuthorizerClass {

    // Own properties of GData-0.0.GData.OAuth2AuthorizerClass

    static name: string
}

export interface OAuth2AuthorizerPrivate {
}

export class OAuth2AuthorizerPrivate {

    // Own properties of GData-0.0.GData.OAuth2AuthorizerPrivate

    static name: string
}

export interface ParsableClass {

    // Own fields of GData-0.0.GData.ParsableClass

    /**
     * the parent class
     * @field 
     */
    parent: GObject.ObjectClass
    preParseXml: (parsable: Parsable, doc: libxml2.Doc, rootNode: libxml2.Node) => boolean
    parseXml: (parsable: Parsable, doc: libxml2.Doc, node: libxml2.Node) => boolean
    postParseXml: (parsable: Parsable) => boolean
    preGetXml: (parsable: Parsable, xmlString: GLib.String) => void
    getXml: (parsable: Parsable, xmlString: GLib.String) => void
    getNamespaces: (parsable: Parsable, namespaces: GLib.HashTable) => void
    parseJson: (parsable: Parsable, reader: Json.Reader) => boolean
    postParseJson: (parsable: Parsable) => boolean
    getJson: (parsable: Parsable, builder: Json.Builder) => void
    getContentType: () => string
    /**
     * the name of the XML element which represents this parsable
     * @field 
     */
    elementName: string
    /**
     * the prefix of the XML namespace used for the parsable
     * @field 
     */
    elementNamespace: string
}

/**
 * The class structure for the #GDataParsable class. Note that JSON and XML functions are mutually exclusive:
 * a given implementation of #GDataParsable is represented as exactly one of JSON and XML.
 * @record 
 */
export abstract class ParsableClass {

    // Own properties of GData-0.0.GData.ParsableClass

    static name: string
}

export interface ParsablePrivate {
}

export class ParsablePrivate {

    // Own properties of GData-0.0.GData.ParsablePrivate

    static name: string
}

export interface PicasaWebAlbumClass {
}

/**
 * All the fields in the #GDataPicasaWebAlbumClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebAlbumClass {

    // Own properties of GData-0.0.GData.PicasaWebAlbumClass

    static name: string
}

export interface PicasaWebAlbumPrivate {
}

export class PicasaWebAlbumPrivate {

    // Own properties of GData-0.0.GData.PicasaWebAlbumPrivate

    static name: string
}

export interface PicasaWebCommentClass {
}

/**
 * All the fields in the #GDataPicasaWebCommentClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebCommentClass {

    // Own properties of GData-0.0.GData.PicasaWebCommentClass

    static name: string
}

export interface PicasaWebCommentPrivate {
}

export class PicasaWebCommentPrivate {

    // Own properties of GData-0.0.GData.PicasaWebCommentPrivate

    static name: string
}

export interface PicasaWebFeedClass {
}

/**
 * All the fields in the #GDataPicasaWebFeedClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebFeedClass {

    // Own properties of GData-0.0.GData.PicasaWebFeedClass

    static name: string
}

export interface PicasaWebFileClass {
}

/**
 * All the fields in the #GDataPicasaWebFileClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebFileClass {

    // Own properties of GData-0.0.GData.PicasaWebFileClass

    static name: string
}

export interface PicasaWebFilePrivate {
}

export class PicasaWebFilePrivate {

    // Own properties of GData-0.0.GData.PicasaWebFilePrivate

    static name: string
}

export interface PicasaWebQueryClass {
}

/**
 * All the fields in the #GDataPicasaWebQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebQueryClass {

    // Own properties of GData-0.0.GData.PicasaWebQueryClass

    static name: string
}

export interface PicasaWebQueryPrivate {
}

export class PicasaWebQueryPrivate {

    // Own properties of GData-0.0.GData.PicasaWebQueryPrivate

    static name: string
}

export interface PicasaWebServiceClass {
}

/**
 * All the fields in the #GDataPicasaWebServiceClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebServiceClass {

    // Own properties of GData-0.0.GData.PicasaWebServiceClass

    static name: string
}

export interface PicasaWebUserClass {
}

/**
 * All the fields in the #GDataPicasaWebUserClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PicasaWebUserClass {

    // Own properties of GData-0.0.GData.PicasaWebUserClass

    static name: string
}

export interface PicasaWebUserPrivate {
}

export class PicasaWebUserPrivate {

    // Own properties of GData-0.0.GData.PicasaWebUserPrivate

    static name: string
}

export interface QueryClass {

    // Own fields of GData-0.0.GData.QueryClass

    getQueryUri: (self: Query, feedUri: string, queryUri: GLib.String, paramsStarted: boolean) => void
}

/**
 * All the fields in the #GDataQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class QueryClass {

    // Own properties of GData-0.0.GData.QueryClass

    static name: string
}

export interface QueryPrivate {
}

export class QueryPrivate {

    // Own properties of GData-0.0.GData.QueryPrivate

    static name: string
}

export interface ServiceClass {

    // Own fields of GData-0.0.GData.ServiceClass

    /**
     * the parent class
     * @field 
     */
    parent: GObject.ObjectClass
    /**
     * the version of the GData API used by the service (typically <code class="literal">2</code>)
     * @field 
     */
    apiVersion: string
    /**
     * the #GType of the feed class (subclass of #GDataFeed) to use for query results from this service
     * @field 
     */
    feedType: GObject.GType
    appendQueryHeaders: (self: Service, domain: AuthorizationDomain, message: Soup.Message) => void
    parseErrorResponse: (self: Service, operationType: OperationType, status: number, reasonPhrase: string, responseBody: string, length: number) => void
}

/**
 * The class structure for the #GDataService type.
 * @record 
 */
export abstract class ServiceClass {

    // Own properties of GData-0.0.GData.ServiceClass

    static name: string
}

export interface ServicePrivate {
}

export class ServicePrivate {

    // Own properties of GData-0.0.GData.ServicePrivate

    static name: string
}

export interface TasksQueryClass {
}

/**
 * All the fields in the #GDataTasksQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class TasksQueryClass {

    // Own properties of GData-0.0.GData.TasksQueryClass

    static name: string
}

export interface TasksQueryPrivate {
}

export class TasksQueryPrivate {

    // Own properties of GData-0.0.GData.TasksQueryPrivate

    static name: string
}

export interface TasksServiceClass {
}

/**
 * All the fields in the #GDataTasksServiceClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class TasksServiceClass {

    // Own properties of GData-0.0.GData.TasksServiceClass

    static name: string
}

export interface TasksTaskClass {
}

/**
 * All the fields in the #GDataTasksTaskClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class TasksTaskClass {

    // Own properties of GData-0.0.GData.TasksTaskClass

    static name: string
}

export interface TasksTaskPrivate {
}

export class TasksTaskPrivate {

    // Own properties of GData-0.0.GData.TasksTaskPrivate

    static name: string
}

export interface TasksTasklistClass {
}

/**
 * All the fields in the #GDataTasksTasklistClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class TasksTasklistClass {

    // Own properties of GData-0.0.GData.TasksTasklistClass

    static name: string
}

export interface UploadStreamClass {
}

/**
 * All the fields in the #GDataUploadStreamClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class UploadStreamClass {

    // Own properties of GData-0.0.GData.UploadStreamClass

    static name: string
}

export interface UploadStreamPrivate {
}

export class UploadStreamPrivate {

    // Own properties of GData-0.0.GData.UploadStreamPrivate

    static name: string
}

export interface YouTubeCategoryClass {
}

/**
 * All the fields in the #GDataYouTubeCategoryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class YouTubeCategoryClass {

    // Own properties of GData-0.0.GData.YouTubeCategoryClass

    static name: string
}

export interface YouTubeCategoryPrivate {
}

export class YouTubeCategoryPrivate {

    // Own properties of GData-0.0.GData.YouTubeCategoryPrivate

    static name: string
}

export interface YouTubeCommentClass {
}

/**
 * All the fields in the #GDataYouTubeCommentClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class YouTubeCommentClass {

    // Own properties of GData-0.0.GData.YouTubeCommentClass

    static name: string
}

export interface YouTubeCommentPrivate {
}

export class YouTubeCommentPrivate {

    // Own properties of GData-0.0.GData.YouTubeCommentPrivate

    static name: string
}

export interface YouTubeFeedClass {
}

/**
 * All the fields in the #GDataYouTubeFeedClass structure are private and should
 * never be accessed directly.
 * @record 
 */
export abstract class YouTubeFeedClass {

    // Own properties of GData-0.0.GData.YouTubeFeedClass

    static name: string
}

export interface YouTubeFeedPrivate {
}

export class YouTubeFeedPrivate {

    // Own properties of GData-0.0.GData.YouTubeFeedPrivate

    static name: string
}

export interface YouTubeQueryClass {
}

/**
 * All the fields in the #GDataYouTubeQueryClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class YouTubeQueryClass {

    // Own properties of GData-0.0.GData.YouTubeQueryClass

    static name: string
}

export interface YouTubeQueryPrivate {
}

export class YouTubeQueryPrivate {

    // Own properties of GData-0.0.GData.YouTubeQueryPrivate

    static name: string
}

export interface YouTubeServiceClass {
}

/**
 * All the fields in the #GDataYouTubeServiceClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class YouTubeServiceClass {

    // Own properties of GData-0.0.GData.YouTubeServiceClass

    static name: string
}

export interface YouTubeServicePrivate {
}

export class YouTubeServicePrivate {

    // Own properties of GData-0.0.GData.YouTubeServicePrivate

    static name: string
}

export interface YouTubeStateClass {
}

/**
 * All the fields in the #GDataYouTubeStateClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class YouTubeStateClass {

    // Own properties of GData-0.0.GData.YouTubeStateClass

    static name: string
}

export interface YouTubeStatePrivate {
}

export class YouTubeStatePrivate {

    // Own properties of GData-0.0.GData.YouTubeStatePrivate

    static name: string
}

export interface YouTubeVideoClass {
}

/**
 * All the fields in the #GDataYouTubeVideoClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class YouTubeVideoClass {

    // Own properties of GData-0.0.GData.YouTubeVideoClass

    static name: string
}

export interface YouTubeVideoPrivate {
}

export class YouTubeVideoPrivate {

    // Own properties of GData-0.0.GData.YouTubeVideoPrivate

    static name: string
}
