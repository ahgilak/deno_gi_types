
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gsf-1
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

export enum ClipFormat {
    /**
     * Windows clipboard format
     */
    WINDOWS_CLIPBOARD,
    /**
     * Macintosh clipboard format
     */
    MACINTOSH_CLIPBOARD,
    /**
     * GUID that contains a format identifier
     */
    GUID,
    /**
     * No clipboard data
     */
    NO_DATA,
    /**
     * Custom clipboard format
     */
    CLIPBOARD_FORMAT_NAME,
    /**
     * Unknown clipboard type or invalid data
     */
    UNKNOWN,
}
export enum ClipFormatWindows {
    /**
     * error
     */
    ERROR,
    /**
     * unknown
     */
    UNKNOWN,
    /**
     * CF_METAFILEPICT
     */
    METAFILE,
    /**
     * CF_DIB
     */
    DIB,
    /**
     * CF_ENHMETAFILE
     */
    ENHANCED_METAFILE,
}
export enum Error {
    /**
     * Memory allocation failed
     */
    OUT_OF_MEMORY,
    /**
     * Invalid data encountered (e.g. not enough data)
     */
    INVALID_DATA,
}
/**
 * Controls when to add quotes around fields.
 */
export enum OutputCsvQuotingMode {
    /**
     * never add quotes around fields
     */
    NEVER,
    /**
     * add quotes around fields when needed
     */
    AUTO,
    /**
     * always add quotes around fields
     */
    ALWAYS,
}
/**
 * Controls the handling of character data within a parser node.
 */
export enum XMLContent {
    /**
     * node has no cstr contents
     */
    NO_CONTENT,
    /**
     * node has cstr contents
     */
    CONTENT,
    /**
     * node has contents that is shared with children
     */
    SHARED_CONTENT,
    /**
     * node is second or later occurrence
     */
    TODO_2ND,
}
export enum ZipCompressionMethod {
    STORED,
    SHRUNK,
    REDUCEDX1,
    REDUCEDX2,
    REDUCEDX3,
    REDUCEDX4,
    IMPLODED,
    TOKENIZED,
    DEFLATED,
    DEFLATED_BETTER,
    IMPLODED_BETTER,
}
/**
 * (Integer) Count of bytes in the document.
 */
export const META_NAME_BYTE_COUNT: string
/**
 * (Unsigned Integer) Identifier representing the case-sensitiveness.
 * <note>of what ?? why is it an integer ??</note>
 */
export const META_NAME_CASE_SENSITIVE: string
/**
 * (String) Category of the document. <note>example???</note>
 */
export const META_NAME_CATEGORY: string
/**
 * (Integer) Count of cells in the spread-sheet document, if appropriate.
 */
export const META_NAME_CELL_COUNT: string
/**
 * (Integer) Count of characters in the document.
 * 
 * TODO See how to sync this with ODF's document-statistic
 */
export const META_NAME_CHARACTER_COUNT: string
/**
 * (UnsignedShort) The MS codepage to encode strings for metadata
 * 1.14.0	Clarified that this is unique from _NAME_CODEPAGE in msole
 */
export const META_NAME_CODEPAGE: string
/**
 * (String) Name of the company/organization that the "CREATOR" entity is
 * associated with.
 * 
 * 1.14.1	Moved from "gsf:company" to "dc:publisher".
 */
export const META_NAME_COMPANY: string
/**
 * (String) An entity primarily responsible for making the content of the
 * resource typically a person, organization, or service.
 * 
 * 1.14.0	Moved from "gsf" to "dc".
 */
export const META_NAME_CREATOR: string
/**
 * (Date as ISO String) A date associated with an event in the life cycle of
 * the resource (creation/publication date).
 * Moved from gsf:date-created to meta:creation-date. This way can be used correctly
 * by OpenDocument and Gnumeric.
 */
export const META_NAME_DATE_CREATED: string
/**
 * (GsfTimestamp) The last time this document was saved.
 * 
 * 1.14.0	Moved from dc:date-modified to dc:date.
 */
export const META_NAME_DATE_MODIFIED: string
/**
 * (String) An account of the content of the resource.
 */
export const META_NAME_DESCRIPTION: string
/**
 * (None) Reserved name (PID) for Dictionary
 */
export const META_NAME_DICTIONARY: string
/**
 * (Vector of strings) Names of the 'interesting' parts of the document.  In
 * spreadsheets this is a list of the sheet names, and the named expressions.
 * From MSOLE
 */
export const META_NAME_DOCUMENT_PARTS: string
/**
 * (Date as ISO String) The total-time taken until the last modification.
 * Moved from "gsf" to "meta". This way can be used correctly by OpenDocument
 * and Gnumeric.
 */
export const META_NAME_EDITING_DURATION: string
/**
 * (String) The application that generated this document. AbiWord, Gnumeric,
 * etc...
 * 
 * 1.14.0 Moved from "gsf" to "meta".
 */
export const META_NAME_GENERATOR: string
/**
 * (Vector of string value pairs stored in alternating elements) Store the
 * counts of objects in the document as names 'worksheet' and count '4'
 * From MSOLE
 */
export const META_NAME_HEADING_PAIRS: string
/**
 * (Integer) Count of hidden-slides in the presentation document.
 */
export const META_NAME_HIDDEN_SLIDE_COUNT: string
/**
 * (Integer) Count of images in the document, if appropriate.
 */
export const META_NAME_IMAGE_COUNT: string
/**
 * (String) Specifies the name of the person who created the document
 * initially.
 * 1.14.0 Moved from "gsf" to "meta".
 */
export const META_NAME_INITIAL_CREATOR: string
/**
 * (String) Searchable, indexable keywords. Similar to PDF keywords or HTML's
 * meta block.
 */
export const META_NAME_KEYWORD: string
/**
 * (GsfDocPropVector of String) Searchable, indexable keywords. Similar to PDF
 * keywords or HTML's meta block.
 */
export const META_NAME_KEYWORDS: string
/**
 * (String) The locale language of the intellectual content of the resource
 * 	(basically xx_YY form for us).
 * 1.14.0	Clarified that this is unique from _NAME_CODEPAGE in msole
 */
export const META_NAME_LANGUAGE: string
/**
 * (GSF_META_NAME_HEADING_PAIRS) The last time this document was printed.
 * 
 * 1.14.0	Moved from "gsf" to "dc".
 * 1.14.1	Moved back to "gsf" from "dc".
 */
export const META_NAME_LAST_PRINTED: string
/**
 * (String) The entity that made the last change to the document, typically a
 * person, organization, or service.
 */
export const META_NAME_LAST_SAVED_BY: string
/**
 * (Integer) Count of liness in the document.
 */
export const META_NAME_LINE_COUNT: string
/**
 * (Boolean) ???????
 */
export const META_NAME_LINKS_DIRTY: string
/**
 * (Unsigned Integer) Identifier representing the default system locale.
 */
export const META_NAME_LOCALE_SYSTEM_DEFAULT: string
/**
 * (String) Name of the manager of "CREATOR" entity.
 */
export const META_NAME_MANAGER: string
/**
 * (Integer) Count of "multi-media" clips in the document.
 */
export const META_NAME_MM_CLIP_COUNT: string
/**
 * (Unknown) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_17: string
/**
 * (Unknown) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_18: string
/**
 * (Boolean) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_19: string
/**
 * (Unknown) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_20: string
/**
 * (Unknown) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_21: string
/**
 * (Boolean) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_22: string
/**
 * (i4) User-defined name
 */
export const META_NAME_MSOLE_UNKNOWN_23: string
/**
 * (Integer) Count of "notes" in the document.
 */
export const META_NAME_NOTE_COUNT: string
/**
 * (Integer) Count of objects (OLE and other graphics) in the document, if
 * appropriate.
 */
export const META_NAME_OBJECT_COUNT: string
/**
 * (Integer) Count of pages in the document, if appropriate.
 */
export const META_NAME_PAGE_COUNT: string
/**
 * (Integer) Count of paragraphs in the document, if appropriate.
 */
export const META_NAME_PARAGRAPH_COUNT: string
/**
 * (String) Type of presentation, like "On-screen Show", "SlideView" etc.
 */
export const META_NAME_PRESENTATION_FORMAT: string
/**
 * (String) Specifies the name of the last person who printed the document.
 * 
 * 1.14.0	Moved from "gsf" to "meta".
 */
export const META_NAME_PRINTED_BY: string
/**
 * (GsfTimestamp) Specifies the date and time when the document was last
 * printed.
 */
export const META_NAME_PRINT_DATE: string
/**
 * (Integer) Count of revision on the document, if appropriate.
 * Moved from gsf:revision-count to meta:editing-cycles. This way can be used
 * correctly by OpenDocument and Gnumeric.
 */
export const META_NAME_REVISION_COUNT: string
/**
 * (Boolean) ?????
 */
export const META_NAME_SCALE: string
/**
 * (Integer) Level of security.
 * 
 * <informaltable frame="none" role="params">
 * <tgroup cols="2">
 * <thead>
 * <row><entry align="left">Level</entry><entry>Value</entry></row>
 * </thead>
 * <tbody>
 * <row><entry>None</entry><entry>0</entry></row>
 * <row><entry>Password protected</entry><entry>1</entry></row>
 * <row><entry>Read-only recommended</entry><entry>2</entry></row>
 * <row><entry>Read-only enforced</entry><entry>3</entry></row>
 * <row><entry>Locked for annotations</entry><entry>4</entry></row>
 * </tbody></tgroup></informaltable>
 */
export const META_NAME_SECURITY: string
/**
 * (Integer) Count of slides in the presentation document.
 */
export const META_NAME_SLIDE_COUNT: string
/**
 * (Integer) Count of pages in the document, if appropriate.
 */
export const META_NAME_SPREADSHEET_COUNT: string
/**
 * (String) The topic of the content of the resource,
 * <emphasis>typically</emphasis> including keywords.
 */
export const META_NAME_SUBJECT: string
/**
 * (Integer) Count of tables in the document, if appropriate.
 */
export const META_NAME_TABLE_COUNT: string
/**
 * (String) The template file that is been used to generate this document.
 * 
 * 1.14.0 Moved from "gsf" to "meta"
 */
export const META_NAME_TEMPLATE: string
/**
 * (GsfClipData) Thumbnail data of the document, typically a
 * preview image of the document.
 */
export const META_NAME_THUMBNAIL: string
/**
 * (String) A formal name given to the resource.
 */
export const META_NAME_TITLE: string
/**
 * (Integer) Count of words in the document.
 */
export const META_NAME_WORD_COUNT: string
/**
 * Decodes a chunk of base64 encoded data from `data` back into `data`.
 * @param data data stream
 * @param len max length of data to decode
 */
export function base64DecodeSimple(data: Uint8Array, len: number): number
/**
 * Decodes a chunk of base64 encoded data
 * @param in_ input stream
 * @param len max length of data to decode
 * @param out output stream
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
export function base64DecodeStep(in_: Uint8Array, len: number, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
/**
 * This funcion should be called to when finished encoding everything, to
 * flush off the last little bit.
 * @param in_ Data to be encoded
 * @param breakLines Whether to use line breaks
 * @param out Encoded data.
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
export function base64EncodeClose(in_: Uint8Array, breakLines: boolean, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
/**
 * Encodes data from `data` back into `data` using base64 encoding.
 * @param data data stream
 * @param len max length of data to encode
 */
export function base64EncodeSimple(data: Uint8Array, len: number): number
/**
 * Performs an 'encode step', only encodes blocks of 3 characters from `in` into
 * the output `out` at a time, saves left-over state in `state` and `save`
 * (initialise to 0 on first invocation).
 * @param in_ input stream
 * @param len max length of data to decode
 * @param breakLines Whether to use line breaks
 * @param out output stream
 * @param state holds the number of bits that are stored in `save`
 * @param save leftover bits that have not yet been decoded
 */
export function base64EncodeStep(in_: Uint8Array, len: number, breakLines: boolean, out: Uint8Array, state: number, save: number): [ /* returnType */ number, /* state */ number, /* save */ number ]
export function debugFlag(flag: string): boolean
/**
 * A debugging utility to dump the content of `meta` via g_print
 * @param meta #GsfDocMetaData
 */
export function docMetaDump(meta: DocMetaData): void
export function errorQuark(): GLib.Quark
/**
 * Extracts the extension from the end of a filename (the part after the final
 * '.' in the filename).
 * @param path A filename or file path.
 */
export function extensionPointer(path: string): string
/**
 * A utility wrapper to make sure filenames are valid utf8.
 * Caller must g_free the result.
 * @param filename file name suitable for open(2).
 * @param quoted if %TRUE, the resulting utf8 file name will be quoted    (unless it is invalid).
 */
export function filenameToUtf8(filename: string, quoted: boolean): string
/**
 * Initializes the GSF library
 */
export function init(): void
/**
 * Initializes the GSF library and associates it with a type module `mod`.
 * @param module #GTypeModule.
 */
export function initDynamic(module: GObject.TypeModule): void
/**
 * Interpret binary data as a double in little endian order.
 * @param p pointer to storage
 */
export function leGetDouble(p: object | null): number
/**
 * Interpret binary data as a float in little endian order.
 * @param p pointer to storage
 */
export function leGetFloat(p: object | null): number
/**
 * Interpret binary data as a guint64 (8 byte unsigned integer type) in little
 * endian order.
 * @param p pointer to storage
 */
export function leGetGuint64(p: object | null): number
/**
 * Store a value of type double in memory in little endian order
 * @param p pointer to storage
 * @param d double to be stored
 */
export function leSetDouble(p: object | null, d: number): void
/**
 * Store a value of type float in memory in little endian order.
 * @param p pointer to storage
 * @param f float to be stored
 */
export function leSetFloat(p: object | null, f: number): void
/**
 * Dump `len` bytes from the memory location given by `ptr`.
 * @param ptr memory area to be dumped.
 * @param len how many bytes will be dumped.
 */
export function memDump(ptr: number, len: number): void
export function msoleCodepageToLid(codepage: number): number
export function msoleIconvWinCodepage(): number
/**
 * Decompresses an LZ compressed stream.
 * @param input stream to read from
 * @param offset offset into it for start byte of compresse stream
 */
export function msoleInflate(input: Input, offset: gsf_off_t): Uint8Array
export function msoleLanguageForLid(lid: number): string
export function msoleLidForLanguage(lang: string | null): number
export function msoleLidToCodepage(lid: number): number
export function msoleLidToCodepageStr(lid: number): string
export function odfGetNs(): XMLInNS
/**
 * Gives the ODF version used by libgsf when writing Open Document files.
 */
export function odfGetVersion(): number
/**
 * Gives the ODF version used by libgsf when writing Open Document files.
 */
export function odfGetVersionString(): string
export function openPkgErrorId(): number
/**
 * New in 1.14.9
 * 
 * Walks each relationship associated with `opkg` and calls `func` with `user_data`.
 * @param opkg #GsfInput
 * @param func #GsfOpenPkgIter
 */
export function openPkgForeachRel(opkg: Input, func: OpenPkgIter): void
export function openPkgOpenRel(opkg: Input, rel: OpenPkgRel): Input
/**
 * New in 1.14.7
 * 
 * Open `opkg'`s relation `id`
 * @param opkg #GsfInput
 * @param id target id
 */
export function openPkgOpenRelById(opkg: Input, id: string): Input
/**
 * New in 1.14.9
 * 
 * Open one of `opkg'`s relationships with type=`type`.
 * @param opkg #GsfInput
 * @param type target type
 */
export function openPkgOpenRelByType(opkg: Input, type: string): Input
/**
 * Convenience function to parse a related part.
 * @param xin #GsfXMLIn
 * @param id target id
 * @param dtd #GsfXMLInNode
 * @param ns #GsfXMLInNS
 */
export function openPkgParseRelById(xin: XMLIn, id: string, dtd: XMLInNode, ns: XMLInNS): GLib.Error
export function propertySettingsFind(name: string, params: GObject.Parameter[]): GObject.Parameter
export function propertySettingsFree(params: GObject.Parameter[]): void
/**
 * De-intializes the GSF library
 * Currently does nothing.
 */
export function shutdown(): void
/**
 * De-intializes the GSF library from a type module.
 * Currently does nothing.
 * @param module currently unused
 */
export function shutdownDynamic(module: GObject.TypeModule): void
/**
 * This function returns the array of values inside #GsfDocPropVector.
 * No additional references are created.
 * @param value A GValue of type #GsfDocPropVector.
 */
export function valueGetDocpropArray(value: any): any[] | null
export function valueGetDocpropVarray(value: any): GObject.ValueArray
/**
 * This function returns a pointer to the GsfDocPropVector structure in `value`.
 * No additional references are created.
 * @param value A GValue of type #GsfDocPropVector.
 */
export function valueGetDocpropVector(value: any): DocPropVector
/**
 * Decompresses VBA stream.
 * @param input stream to read from
 * @param offset offset into it for start byte of compressed stream
 * @param size size of the returned array
 * @param addNullTerminator whenever add or not null at the end of array
 */
export function vbaInflate(input: Input, offset: gsf_off_t, size: number, addNullTerminator: boolean): number
/**
 * Dumps the document `cur` into `output`.
 * @param output #GsfOutput
 * @param cur #xmlDocPtr
 * @param encoding The encoding to use.
 * @param format %TRUE to reformat the output.
 */
export function xmlDocFormatDump(output: Output, cur: libxml2.Doc, encoding: string | null, format: boolean): number
/**
 * Try to parse `str` as a value of type `t` into `res`.
 * @param res Result value
 * @param t Type of data
 * @param str Value string
 */
export function xmlGvalueFromStr(res: any, t: GObject.GType, str: string): boolean
export function xmlProbe(input: Input, func: XMLProbeFunc): boolean
export interface OpenPkgIter {
    (opkg: Input, rel: OpenPkgRel): void
}
export interface XMLInExtDtor {
    (xin: XMLIn, oldState: object | null): void
}
export interface XMLInUnknownFunc {
    (xin: XMLIn, elem: libxml2.Char, attrs: libxml2.Char): boolean
}
export interface XMLProbeFunc {
    (name: libxml2.Char, prefix: libxml2.Char, uRI: libxml2.Char, nbNamespaces: number, namespaces: libxml2.Char, nbAttributes: number, nbDefaulted: number, attributes: libxml2.Char): boolean
}
export module Blob {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Blob {

    // Own fields of Gsf-1.Gsf.Blob

    object: GObject.Object
    priv: BlobPrivate

    // Owm methods of Gsf-1.Gsf.Blob

    /**
     * Queries the size in bytes of the data stored in the blob.
     */
    getSize(): number
    /**
     * Queries a pointer to the data stored in the blob.  This does not
     * copy the data for you; it returns a pointer to the actual buffer
     * which the blob uses internally, so you should not free this buffer
     * on your own.
     */
    peekData(): object | null

    // Class property signals of Gsf-1.Gsf.Blob

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Blob extends GObject.Object {

    // Own properties of Gsf-1.Gsf.Blob

    static name: string

    // Constructors of Gsf-1.Gsf.Blob

    constructor(config?: Blob.ConstructorProperties) 
    /**
     * Creates a new #GsfBlob object to hold the specified data.  The blob can then
     * be used as a facility for reference-counting for the data.  The data is
     * copied internally, so the blob does not hold references to external chunks
     * of memory.
     * @constructor 
     * @param dataToCopy  Data which will be copied into the blob, or %NULL if `size` is zero.
     */
    constructor(dataToCopy: Uint8Array) 
    /**
     * Creates a new #GsfBlob object to hold the specified data.  The blob can then
     * be used as a facility for reference-counting for the data.  The data is
     * copied internally, so the blob does not hold references to external chunks
     * of memory.
     * @constructor 
     * @param dataToCopy  Data which will be copied into the blob, or %NULL if `size` is zero.
     */
    static new(dataToCopy: Uint8Array): Blob
    _init(config?: Blob.ConstructorProperties): void
}

export module ClipData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ClipData {

    // Own fields of Gsf-1.Gsf.ClipData

    object: GObject.Object
    priv: ClipDataPrivate

    // Owm methods of Gsf-1.Gsf.ClipData

    /**
     * Queries the data blob that actually stores a #GsfClipData's binary data.
     */
    getDataBlob(): Blob
    /**
     * Queries the clipboard data format of a #GsfClipData.  The format refers to the data
     * blob inside the `clip_data;` use gsf_clip_data_get_data_blob() to get that data blob.
     */
    getFormat(): ClipFormat
    /**
     * Queries the Windows clipboard data format for a #GsfClipData.  The `clip_data` must
     * have been created with #GSF_CLIP_FORMAT_WINDOWS_CLIPBOARD.
     */
    getWindowsClipboardFormat(): ClipFormatWindows
    /**
     * Queries a pointer directly to the clipboard data of a #GsfClipData.  The
     * resulting pointer is not necessarily the same data pointer that was passed to
     * gsf_blob_new() prior to creating the `clip_data`.  For example, if the data is
     * in #GSF_CLIP_FORMAT_WINDOWS_CLIPBOARD format, then it will have extra header
     * bytes in front of the actual metafile data.  This function will skip over
     * those header bytes if necessary and return a pointer to the "real" data.
     * @param retSize Location to return the size of the returned data buffer.
     */
    peekRealData(retSize: number): object | null

    // Class property signals of Gsf-1.Gsf.ClipData

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ClipData extends GObject.Object {

    // Own properties of Gsf-1.Gsf.ClipData

    static name: string

    // Constructors of Gsf-1.Gsf.ClipData

    constructor(config?: ClipData.ConstructorProperties) 
    /**
     * Creates a new #GsfClipData object.  This function acquires a reference to the
     * `data_blob,` so you should unref the blob on your own if you no longer need it
     * directly.
     * @constructor 
     * @param format Format for the data inside the `data_blob`
     * @param dataBlob Object which holds the binary contents for the #GsfClipData
     */
    constructor(format: ClipFormat, dataBlob: Blob) 
    /**
     * Creates a new #GsfClipData object.  This function acquires a reference to the
     * `data_blob,` so you should unref the blob on your own if you no longer need it
     * directly.
     * @constructor 
     * @param format Format for the data inside the `data_blob`
     * @param dataBlob Object which holds the binary contents for the #GsfClipData
     */
    static new(format: ClipFormat, dataBlob: Blob): ClipData
    _init(config?: ClipData.ConstructorProperties): void
}

export module DocMetaData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocMetaData {

    // Owm methods of Gsf-1.Gsf.DocMetaData

    /**
     * Iterate through each (key, value) pair in this collection
     * @param func the function called once for each element in the collection
     */
    foreach(func: GLib.HFunc): void
    /**
     * Take ownership of `name` and `value` and insert a property into `meta`.
     * If a property exists with `name,` it is replaced (The link is lost)
     * @param name the id.
     * @param value #GValue
     */
    insert(name: string, value: any): void
    lookup(name: string): DocProp | null
    /**
     * Extend `xin` so that it can parse a subtree in OpenDoc metadata format
     * @param doc #GsfXMLInDoc
     */
    odfSubtree(doc: XMLIn): void
    /**
     * Read a stream formated as a set of MS OLE properties from `in` and store the
     * results in `accum`.
     * @param in_ #GsfInput
     */
    readFromMsole(in_: Input): GLib.Error
    /**
     * Read an OpenDocument metadata stream from `input` and store the properties
     * into `md`.  Overwrite any existing properties with the same id.
     * @param input #GsfInput
     */
    readFromOdf(input: Input): GLib.Error
    /**
     * If `name` does not exist in the collection, do nothing. If `name` does exist,
     * remove it and its value from the collection
     * @param name the non-null string name of the property
     */
    remove(name: string): void
    size(): number
    steal(name: string): DocProp | null
    store(prop: DocProp): void
    writeToMsole(out: Output, docNotComponent: boolean): boolean
    writeToOdf(output: XMLOut): boolean

    // Class property signals of Gsf-1.Gsf.DocMetaData

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class representing information about a document, such as creator and time of
 * last modification.
 * @class 
 */
export class DocMetaData extends GObject.Object {

    // Own properties of Gsf-1.Gsf.DocMetaData

    static name: string

    // Constructors of Gsf-1.Gsf.DocMetaData

    constructor(config?: DocMetaData.ConstructorProperties) 
    constructor() 
    static new(): DocMetaData
    _init(config?: DocMetaData.ConstructorProperties): void
}

export module DocPropVector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DocPropVector {

    // Owm methods of Gsf-1.Gsf.DocPropVector

    /**
     * Insert a copy of `value` as the last element of `vector`.
     * @param value The GValue to add to `vector`
     */
    append(value: any): void
    /**
     * This function returns a string which represents all the GValues in `vector`.
     * The caller is responsible for freeing the result.
     * 
     * Returns (transfer full): a string of comma-separated values
     */
    asString(): string

    // Class property signals of Gsf-1.Gsf.DocPropVector

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocPropVector extends GObject.Object {

    // Own properties of Gsf-1.Gsf.DocPropVector

    static name: string

    // Constructors of Gsf-1.Gsf.DocPropVector

    constructor(config?: DocPropVector.ConstructorProperties) 
    /**
     * This function creates a new gsf_docprop_vector object.
     * @constructor 
     */
    constructor() 
    /**
     * This function creates a new gsf_docprop_vector object.
     * @constructor 
     */
    static new(): DocPropVector
    _init(config?: DocPropVector.ConstructorProperties): void
}

export module Infile {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {
    }

}

export interface Infile {

    // Own fields of Gsf-1.Gsf.Infile

    parent: Input

    // Owm methods of Gsf-1.Gsf.Infile

    /**
     * This function finds a child that is several directory levels down
     * the tree.  If, for example, the names "foo", "bar", and "baz" are
     * given, then this function first finds the "foo" directory in the
     * root infile, then locates "bar" within that directory, and finally
     * locates "baz" within that and returns the "baz" child.  In other
     * words, this function finds the "foo/bar/baz" child.
     * 
     * New in 1.14.9.
     * @param names A %NULL terminated array of names (e.g. from g_strsplit)
     */
    childByAname(names: string[]): Input
    /**
     * TODO : For 2.0 api will change to include a #GError.
     * @param i target index
     */
    childByIndex(i: number): Input
    /**
     * The function returns a named child of the given infile.  This only
     * works for an immediate child.  If you need to go several levels
     * down use gsf_infile_child_by_aname, for example.
     * 
     * TODO : For 2.0 api will change to include a #GError.
     * @param name target name
     */
    childByName(name: string): Input
    // Has conflict: nameByIndex(i: number): string | null
    // Has conflict: numChildren(): number

    // Own virtual methods of Gsf-1.Gsf.Infile

    nameByIndex(i: number): string | null
    numChildren(): number

    // Class property signals of Gsf-1.Gsf.Infile

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class representing an input file.
 * @class 
 */
export class Infile extends Input {

    // Own properties of Gsf-1.Gsf.Infile

    static name: string

    // Constructors of Gsf-1.Gsf.Infile

    constructor(config?: Infile.ConstructorProperties) 
    _init(config?: Infile.ConstructorProperties): void
}

export module InfileMSOle {

    // Constructor properties interface

    export interface ConstructorProperties extends Infile.ConstructorProperties {
    }

}

export interface InfileMSOle {

    // Owm methods of Gsf-1.Gsf.InfileMSOle

    /**
     * Retrieves the 16 byte indentifier (often a GUID in MS Windows apps)
     * stored within the directory associated with `ole` and stores it in `res`.
     * @param res 16 byte identifier (often a GUID in MS Windows apps)
     */
    getClassId(res: number): boolean

    // Class property signals of Gsf-1.Gsf.InfileMSOle

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InfileMSOle extends Infile {

    // Own properties of Gsf-1.Gsf.InfileMSOle

    static name: string

    // Constructors of Gsf-1.Gsf.InfileMSOle

    constructor(config?: InfileMSOle.ConstructorProperties) 
    /**
     * Opens the root directory of an MS OLE file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source #GsfInput
     */
    constructor(source: Input) 
    /**
     * Opens the root directory of an MS OLE file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source #GsfInput
     */
    static new(source: Input): InfileMSOle
    _init(config?: InfileMSOle.ConstructorProperties): void
}

export module InfileMSVBA {

    // Constructor properties interface

    export interface ConstructorProperties extends Infile.ConstructorProperties {
    }

}

export interface InfileMSVBA {

    // Owm methods of Gsf-1.Gsf.InfileMSVBA

    /**
     * a collection of names and source code.
     */
    getModules(): GLib.HashTable | null
    /**
     * A collection of names and source code which the caller is responsible for destroying.
     */
    stealModules(): GLib.HashTable | null

    // Class property signals of Gsf-1.Gsf.InfileMSVBA

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InfileMSVBA extends Infile {

    // Own properties of Gsf-1.Gsf.InfileMSVBA

    static name: string

    // Constructors of Gsf-1.Gsf.InfileMSVBA

    constructor(config?: InfileMSVBA.ConstructorProperties) 
    constructor(source: Infile) 
    static new(source: Infile): InfileMSVBA
    _init(config?: InfileMSVBA.ConstructorProperties): void
}

export module InfileStdio {

    // Constructor properties interface

    export interface ConstructorProperties extends Infile.ConstructorProperties {
    }

}

export interface InfileStdio {

    // Class property signals of Gsf-1.Gsf.InfileStdio

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InfileStdio extends Infile {

    // Own properties of Gsf-1.Gsf.InfileStdio

    static name: string

    // Constructors of Gsf-1.Gsf.InfileStdio

    constructor(config?: InfileStdio.ConstructorProperties) 
    constructor(root: string) 
    static new(root: string): InfileStdio
    _init(config?: InfileStdio.ConstructorProperties): void
}

export module InfileTar {

    // Constructor properties interface

    export interface ConstructorProperties extends Infile.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.InfileTar

        source?: Input | null
    }

}

export interface InfileTar {

    // Own properties of Gsf-1.Gsf.InfileTar

    readonly source: Input

    // Class property signals of Gsf-1.Gsf.InfileTar

    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InfileTar extends Infile {

    // Own properties of Gsf-1.Gsf.InfileTar

    static name: string

    // Constructors of Gsf-1.Gsf.InfileTar

    constructor(config?: InfileTar.ConstructorProperties) 
    /**
     * Opens the root directory of a Tar file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    constructor(source: Input) 
    /**
     * Opens the root directory of a Tar file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    static new(source: Input): InfileTar
    _init(config?: InfileTar.ConstructorProperties): void
}

export module InfileZip {

    // Constructor properties interface

    export interface ConstructorProperties extends Infile.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.InfileZip

        internalParent?: InfileZip | null
        source?: Input | null
    }

}

export interface InfileZip {

    // Own properties of Gsf-1.Gsf.InfileZip

    /**
     * Controls the level of compression used for new members.
     */
    readonly compressionLevel: number
    readonly internalParent: InfileZip
    readonly source: Input
    readonly zip64: boolean

    // Class property signals of Gsf-1.Gsf.InfileZip

    connect(sigName: "notify::compression-level", callback: any): number
    on(sigName: "notify::compression-level", callback: any): number
    once(sigName: "notify::compression-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compression-level", ...args: any[]): void
    connect(sigName: "notify::internal-parent", callback: any): number
    on(sigName: "notify::internal-parent", callback: any): number
    once(sigName: "notify::internal-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::internal-parent", ...args: any[]): void
    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::zip64", callback: any): number
    on(sigName: "notify::zip64", callback: any): number
    once(sigName: "notify::zip64", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zip64", ...args: any[]): void
    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InfileZip extends Infile {

    // Own properties of Gsf-1.Gsf.InfileZip

    static name: string

    // Constructors of Gsf-1.Gsf.InfileZip

    constructor(config?: InfileZip.ConstructorProperties) 
    /**
     * Opens the root directory of a Zip file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    constructor(source: Input) 
    /**
     * Opens the root directory of a Zip file.
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source A base #GsfInput
     */
    static new(source: Input): InfileZip
    _init(config?: InfileZip.ConstructorProperties): void
}

export module Input {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Input {

    // Own properties of Gsf-1.Gsf.Input

    /**
     * %TRUE if the end of the file has been reached.
     */
    readonly eof: boolean
    /**
     * The time the input was last updated.  This represents the
     * timestamp from the originating file or `GsfInfile` member.
     * It is not supported by all derived classes.
     */
    readonly modtime: GLib.DateTime
    /**
     * The current position in the input.
     */
    readonly position: number
    /**
     * The number of bytes remaining in the file.
     */
    readonly remaining: number

    // Own fields of Gsf-1.Gsf.Input

    gObject: GObject.Object
    size: gsf_off_t
    curOffset: gsf_off_t
    name: string
    container: Infile

    // Owm methods of Gsf-1.Gsf.Input

    /**
     * Copy the contents from `input` to `output` from their respective
     * current positions. So if you want to be sure to copy *everything*,
     * make sure to call gsf_input_seek (input, 0, G_SEEK_SET) and
     * gsf_output_seek (output, 0, G_SEEK_SET) first, if applicable.
     * @param output a non-null #GsfOutput
     */
    copy(output: Output): boolean
    /**
     * Dumps `input'`s contents to STDOUT, optionally in hex format.
     * @param dumpAsHex If %TRUE, dump in hexidecmal format
     */
    dump(dumpAsHex: boolean): void
    // Has conflict: dup(): Input | null
    /**
     * A utility routine that attempts to find the VBA file withint a stream.
     */
    findVba(): InfileMSVBA | null
    getModtime(): GLib.DateTime
    /**
     * Read `num_bytes`.  Does not change the current position if there
     * is an error.  Will only read if the entire amount can be read.
     * @param numBytes number of bytes to read
     */
    read(numBytes: number): Uint8Array
    // Has conflict: seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /**
     * Emulate forward seeks by reading.
     * @param pos absolute position to seek to
     */
    seekEmulate(pos: gsf_off_t): boolean
    setContainer(container: Infile | null): boolean
    /**
     * protected.
     * @param modtime the new modification time.
     */
    setModtime(modtime: GLib.DateTime | null): boolean
    setModtimeFromStat(st: object | null): boolean
    /**
     * protected.
     * @param name the new name of the stream
     */
    setName(name: string | null): boolean
    /**
     * protected.
     * @param filename the (fs-sys encoded) filename
     */
    setNameFromFilename(filename: string): boolean
    setSize(size: gsf_off_t): boolean
    /**
     * UNIMPLEMENTED BY ANY BACKEND
     * 	and it is probably unnecessary.   gsf_input_get_container provides
     * 	enough power to do what is necessary.
     * 
     * Attempts to open a 'sibling' of `input`.  The caller is responsible for
     * managing the resulting object.
     * @param name name.
     */
    sibling(name: string): Input
    tell(): gsf_off_t
    /**
     * This functions takes ownership of the incoming reference and yields a
     * new one as its output.
     */
    uncompress(): Input

    // Own virtual methods of Gsf-1.Gsf.Input

    /**
     * Duplicates `input` leaving the new one at the same offset.
     * @virtual 
     */
    dup(): Input | null
    /**
     * UNIMPLEMENTED BY ANY BACKEND
     * 	and it is probably unnecessary.   gsf_input_get_container provides
     * 	enough power to do what is necessary.
     * 
     * Attempts to open a 'sibling' of `input`.  The caller is responsible for
     * managing the resulting object.
     * @virtual 
     * @param name name.
     */
    openSibling(name: string): Input
    /**
     * Move the current location in the input stream.
     * @virtual 
     * @param offset target offset
     * @param whence determines whether the offset is relative to the beginning or          the end of the stream, or to the current location.
     */
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean

    // Class property signals of Gsf-1.Gsf.Input

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class representing an input stream.
 * @class 
 */
export class Input extends GObject.Object {

    // Own properties of Gsf-1.Gsf.Input

    static name: string

    // Constructors of Gsf-1.Gsf.Input

    constructor(config?: Input.ConstructorProperties) 
    static mmapNew(filename: string): Input
    _init(config?: Input.ConstructorProperties): void
    static errorId(): GLib.Quark
}

export module InputGZip {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.InputGZip

        raw?: boolean | null
        source?: Input | null
        uncompressedSize?: number | null
    }

}

export interface InputGZip {

    // Own properties of Gsf-1.Gsf.InputGZip

    readonly raw: boolean
    readonly source: Input
    readonly uncompressedSize: number

    // Class property signals of Gsf-1.Gsf.InputGZip

    connect(sigName: "notify::raw", callback: any): number
    on(sigName: "notify::raw", callback: any): number
    once(sigName: "notify::raw", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: "notify::uncompressed-size", callback: any): number
    on(sigName: "notify::uncompressed-size", callback: any): number
    once(sigName: "notify::uncompressed-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::uncompressed-size", ...args: any[]): void
    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputGZip extends Input {

    // Own properties of Gsf-1.Gsf.InputGZip

    static name: string

    // Constructors of Gsf-1.Gsf.InputGZip

    constructor(config?: InputGZip.ConstructorProperties) 
    /**
     * Adds a reference to `source`.
     * @constructor 
     * @param source The underlying data source.
     */
    constructor(source: Input) 
    /**
     * Adds a reference to `source`.
     * @constructor 
     * @param source The underlying data source.
     */
    static new(source: Input): InputGZip
    _init(config?: InputGZip.ConstructorProperties): void
}

export module InputGio {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {
    }

}

export interface InputGio {

    // Class property signals of Gsf-1.Gsf.InputGio

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputGio extends Input {

    // Own properties of Gsf-1.Gsf.InputGio

    static name: string

    // Constructors of Gsf-1.Gsf.InputGio

    constructor(config?: InputGio.ConstructorProperties) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): InputGio
    static newForPath(path: string): InputGio
    static newForUri(uri: string): InputGio
    _init(config?: InputGio.ConstructorProperties): void
}

export module InputHTTP {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.InputHTTP

        contentType?: string | null
        url?: string | null
    }

}

export interface InputHTTP {

    // Own properties of Gsf-1.Gsf.InputHTTP

    readonly contentType: string
    readonly url: string

    // Owm methods of Gsf-1.Gsf.InputHTTP

    getContentType(): string
    getUrl(): string

    // Class property signals of Gsf-1.Gsf.InputHTTP

    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputHTTP extends Input {

    // Own properties of Gsf-1.Gsf.InputHTTP

    static name: string

    // Constructors of Gsf-1.Gsf.InputHTTP

    constructor(config?: InputHTTP.ConstructorProperties) 
    constructor(url: string) 
    static new(url: string): InputHTTP
    _init(config?: InputHTTP.ConstructorProperties): void
}

export module InputMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {
    }

}

export interface InputMemory {

    // Class property signals of Gsf-1.Gsf.InputMemory

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputMemory extends Input {

    // Own properties of Gsf-1.Gsf.InputMemory

    static name: string

    // Constructors of Gsf-1.Gsf.InputMemory

    constructor(config?: InputMemory.ConstructorProperties) 
    constructor(buf: Uint8Array, needsFree: boolean) 
    static new(buf: Uint8Array, needsFree: boolean): InputMemory
    static newClone(buf: Uint8Array): InputMemory
    static newFromBzip(source: Input): InputMemory
    static newFromIochannel(channel: GLib.IOChannel): InputMemory
    _init(config?: InputMemory.ConstructorProperties): void
}

export module InputProxy {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {
    }

}

export interface InputProxy {

    // Class property signals of Gsf-1.Gsf.InputProxy

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputProxy extends Input {

    // Own properties of Gsf-1.Gsf.InputProxy

    static name: string

    // Constructors of Gsf-1.Gsf.InputProxy

    constructor(config?: InputProxy.ConstructorProperties) 
    /**
     * This creates a new proxy to the entire, given input source.  See
     * gsf_input_proxy_new_section for details.
     * @constructor 
     * @param source The underlying data source.
     */
    constructor(source: Input) 
    /**
     * This creates a new proxy to the entire, given input source.  See
     * gsf_input_proxy_new_section for details.
     * @constructor 
     * @param source The underlying data source.
     */
    static new(source: Input): InputProxy
    /**
     * This creates a new proxy to a section of the given source.  The new
     * object will have its own current position, but any operation on it
     * can change the source's position.
     * 
     * If a proxy to a proxy is created, the intermediate proxy is short-
     * circuited.
     * 
     * This function will ref the source.
     * @constructor 
     * @param source The underlying data source.
     * @param offset Offset into source for start of section.
     * @param size Length of section.
     */
    static newSection(source: Input, offset: gsf_off_t, size: gsf_off_t): InputProxy
    _init(config?: InputProxy.ConstructorProperties): void
}

export module InputStdio {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {
    }

}

export interface InputStdio {

    // Class property signals of Gsf-1.Gsf.InputStdio

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputStdio extends Input {

    // Own properties of Gsf-1.Gsf.InputStdio

    static name: string

    // Constructors of Gsf-1.Gsf.InputStdio

    constructor(config?: InputStdio.ConstructorProperties) 
    constructor(filename: string) 
    static new(filename: string): InputStdio
    /**
     * Assumes ownership of `file` when succeeding.  If `keep_open` is true,
     * ownership reverts to caller when the #GsfInput is closed.
     * @constructor 
     * @param filename The filename corresponding to `file`.
     * @param file an existing stdio <type>FILE</type> *
     * @param keepOpen Should `file` be closed when the wrapper is closed
     */
    static newFILE(filename: string, file: object | null, keepOpen: boolean): InputStdio
    _init(config?: InputStdio.ConstructorProperties): void
}

export module InputTextline {

    // Constructor properties interface

    export interface ConstructorProperties extends Input.ConstructorProperties {
    }

}

export interface InputTextline {

    // Owm methods of Gsf-1.Gsf.InputTextline

    /**
     * A utility routine to read things line by line from the underlying source.
     * Trailing newlines and carriage returns are stripped, and the resultant buffer
     * can be edited.
     */
    asciiGets(): Uint8Array | null
    /**
     * A utility routine to read things line by line from the underlying source.
     * Trailing newlines and carriage returns are stripped, and the resultant buffer
     * can be edited.
     */
    utf8Gets(): Uint8Array | null

    // Class property signals of Gsf-1.Gsf.InputTextline

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InputTextline extends Input {

    // Own properties of Gsf-1.Gsf.InputTextline

    static name: string

    // Constructors of Gsf-1.Gsf.InputTextline

    constructor(config?: InputTextline.ConstructorProperties) 
    /**
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source in some combination of ascii and utf8
     */
    constructor(source: Input) 
    /**
     * <note>This adds a reference to `source`.</note>
     * @constructor 
     * @param source in some combination of ascii and utf8
     */
    static new(source: Input): InputTextline
    _init(config?: InputTextline.ConstructorProperties): void
}

export module ODFOut {

    // Constructor properties interface

    export interface ConstructorProperties extends XMLOut.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.ODFOut

        odfVersion?: number | null
    }

}

export interface ODFOut {

    // Own properties of Gsf-1.Gsf.ODFOut

    readonly odfVersion: number

    // Own fields of Gsf-1.Gsf.ODFOut

    base: any
    priv: object

    // Owm methods of Gsf-1.Gsf.ODFOut

    getVersion(): number
    getVersionString(): string

    // Class property signals of Gsf-1.Gsf.ODFOut

    connect(sigName: "notify::odf-version", callback: any): number
    on(sigName: "notify::odf-version", callback: any): number
    once(sigName: "notify::odf-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::odf-version", ...args: any[]): void
    connect(sigName: "notify::pretty-print", callback: any): number
    on(sigName: "notify::pretty-print", callback: any): number
    once(sigName: "notify::pretty-print", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pretty-print", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ODFOut extends XMLOut {

    // Own properties of Gsf-1.Gsf.ODFOut

    static name: string

    // Constructors of Gsf-1.Gsf.ODFOut

    constructor(config?: ODFOut.ConstructorProperties) 
    _init(config?: ODFOut.ConstructorProperties): void
}

export module Outfile {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {
    }

}

export interface Outfile {

    // Own fields of Gsf-1.Gsf.Outfile

    parent: Output

    // Owm methods of Gsf-1.Gsf.Outfile

    newChild(name: string, isDir: boolean): Output
    /**
     * A convenience wrapper to create a child in `dir` of `content_type` then create
     * a `type` relation to `parent`
     * @param name target name
     * @param contentType non-%NULL content type
     * @param parent #GsfOutfile
     * @param type target type
     */
    openPkgAddRel(name: string, contentType: string, parent: Outfile, type: string): Output

    // Class property signals of Gsf-1.Gsf.Outfile

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class representing an output file, counterpart to #GsfInfile.
 * @class 
 */
export class Outfile extends Output {

    // Own properties of Gsf-1.Gsf.Outfile

    static name: string

    // Constructors of Gsf-1.Gsf.Outfile

    constructor(config?: Outfile.ConstructorProperties) 
    _init(config?: Outfile.ConstructorProperties): void
}

export module OutfileMSOle {

    // Constructor properties interface

    export interface ConstructorProperties extends Outfile.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.OutfileMSOle

        bigBlockSize?: number | null
        sink?: Output | null
        smallBlockSize?: number | null
    }

}

export interface OutfileMSOle {

    // Own properties of Gsf-1.Gsf.OutfileMSOle

    readonly bigBlockSize: number
    readonly sink: Output
    readonly smallBlockSize: number

    // Owm methods of Gsf-1.Gsf.OutfileMSOle

    /**
     * Write `clsid` to the directory associated with `ole`.
     * @param clsid Identifier (often a GUID in MS Windows apps)
     */
    setClassId(clsid: Uint8Array): boolean

    // Class property signals of Gsf-1.Gsf.OutfileMSOle

    connect(sigName: "notify::big-block-size", callback: any): number
    on(sigName: "notify::big-block-size", callback: any): number
    once(sigName: "notify::big-block-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::big-block-size", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::small-block-size", callback: any): number
    on(sigName: "notify::small-block-size", callback: any): number
    once(sigName: "notify::small-block-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::small-block-size", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutfileMSOle extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileMSOle

    static name: string

    // Constructors of Gsf-1.Gsf.OutfileMSOle

    constructor(config?: OutfileMSOle.ConstructorProperties) 
    /**
     * Creates the root directory of an MS OLE file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the OLE2 file
     */
    constructor(sink: Output) 
    /**
     * Creates the root directory of an MS OLE file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the OLE2 file
     */
    static new(sink: Output): OutfileMSOle
    /**
     * Creates the root directory of an MS OLE file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the OLE2 file.
     * @param bbSize size of large blocks.
     * @param sbSize size of small blocks.
     */
    static newFull(sink: Output, bbSize: number, sbSize: number): OutfileMSOle
    _init(config?: OutfileMSOle.ConstructorProperties): void
}

export module OutfileOpenPkg {

    // Constructor properties interface

    export interface ConstructorProperties extends Outfile.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.OutfileOpenPkg

        contentType?: string | null
        isDir?: boolean | null
        sink?: Outfile | null
    }

}

export interface OutfileOpenPkg {

    // Own properties of Gsf-1.Gsf.OutfileOpenPkg

    readonly contentType: string
    readonly isDir: boolean
    readonly sink: Outfile

    // Owm methods of Gsf-1.Gsf.OutfileOpenPkg

    /**
     * Add an external relation to `parent`.
     * @param target target type
     * @param contentType target content
     */
    addExternRel(target: string, contentType: string): string
    /**
     * Create a relationship between `child` and `parent` of `type`.
     * @param parent #GsfOutfileOpenPkg
     * @param type target type
     */
    relate(parent: OutfileOpenPkg, type: string): string
    setContentType(contentType: string): void
    /**
     * Assigns a GsfOutput (`sink)` to store the package into.
     * @param sink #GsfOutput
     */
    setSink(sink: Output): void

    // Class property signals of Gsf-1.Gsf.OutfileOpenPkg

    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::is-dir", callback: any): number
    on(sigName: "notify::is-dir", callback: any): number
    once(sigName: "notify::is-dir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-dir", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutfileOpenPkg extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileOpenPkg

    static name: string

    // Constructors of Gsf-1.Gsf.OutfileOpenPkg

    constructor(config?: OutfileOpenPkg.ConstructorProperties) 
    /**
     * Convenience routine to create a GsfOutfileOpenPkg inside `sink`.
     * @constructor 
     * @param sink #GsfOutfile
     */
    constructor(sink: Outfile) 
    /**
     * Convenience routine to create a GsfOutfileOpenPkg inside `sink`.
     * @constructor 
     * @param sink #GsfOutfile
     */
    static new(sink: Outfile): OutfileOpenPkg
    _init(config?: OutfileOpenPkg.ConstructorProperties): void
}

export module OutfileStdio {

    // Constructor properties interface

    export interface ConstructorProperties extends Outfile.ConstructorProperties {
    }

}

export interface OutfileStdio {

    // Class property signals of Gsf-1.Gsf.OutfileStdio

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutfileStdio extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileStdio

    static name: string

    // Constructors of Gsf-1.Gsf.OutfileStdio

    constructor(config?: OutfileStdio.ConstructorProperties) 
    constructor(root: string) 
    static new(root: string): OutfileStdio
    _init(config?: OutfileStdio.ConstructorProperties): void
}

export module OutfileZip {

    // Constructor properties interface

    export interface ConstructorProperties extends Outfile.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.OutfileZip

        compressionLevel?: number | null
        deflateLevel?: number | null
        entryName?: string | null
        sink?: Output | null
        zip64?: number | null
    }

}

export interface OutfileZip {

    // Own properties of Gsf-1.Gsf.OutfileZip

    readonly compressionLevel: number
    readonly deflateLevel: number
    readonly entryName: string
    readonly sink: Output
    readonly zip64: number

    // Owm methods of Gsf-1.Gsf.OutfileZip

    setCompressionMethod(method: ZipCompressionMethod): boolean

    // Class property signals of Gsf-1.Gsf.OutfileZip

    connect(sigName: "notify::compression-level", callback: any): number
    on(sigName: "notify::compression-level", callback: any): number
    once(sigName: "notify::compression-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compression-level", ...args: any[]): void
    connect(sigName: "notify::deflate-level", callback: any): number
    on(sigName: "notify::deflate-level", callback: any): number
    once(sigName: "notify::deflate-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deflate-level", ...args: any[]): void
    connect(sigName: "notify::entry-name", callback: any): number
    on(sigName: "notify::entry-name", callback: any): number
    once(sigName: "notify::entry-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entry-name", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::zip64", callback: any): number
    on(sigName: "notify::zip64", callback: any): number
    once(sigName: "notify::zip64", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::zip64", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutfileZip extends Outfile {

    // Own properties of Gsf-1.Gsf.OutfileZip

    static name: string

    // Constructors of Gsf-1.Gsf.OutfileZip

    constructor(config?: OutfileZip.ConstructorProperties) 
    /**
     * Creates the root directory of a Zip file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the ZIP file
     */
    constructor(sink: Output) 
    /**
     * Creates the root directory of a Zip file and manages the addition of
     * children.
     * 
     * <note>This adds a reference to `sink`.</note>
     * @constructor 
     * @param sink a #GsfOutput to hold the ZIP file
     */
    static new(sink: Output): OutfileZip
    _init(config?: OutfileZip.ConstructorProperties): void
}

export module Output {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.Output

        /**
         * The container, optionally %NULL, in which this output lives.
         */
        container?: Outfile | null
        /**
         * The time the output was last updated.  This must be set on object
         * construction and represents the timestamp to put on the resulting
         * file or #GsfOutfile member.  Not all derived classes will actually
         * do anything with this property.
         */
        modtime?: GLib.DateTime | null
        name?: string | null
    }

}

export interface Output {

    // Own properties of Gsf-1.Gsf.Output

    /**
     * The time the output was last updated.  This must be set on object
     * construction and represents the timestamp to put on the resulting
     * file or #GsfOutfile member.  Not all derived classes will actually
     * do anything with this property.
     */
    readonly modtime: GLib.DateTime
    /**
     * The current position in the output.
     */
    readonly position: number
    /**
     * The current file size.
     */
    readonly size: number

    // Own fields of Gsf-1.Gsf.Output

    gObject: GObject.Object
    curSize: gsf_off_t
    curOffset: gsf_off_t
    name: string
    wrappedBy: GObject.Object
    container: Outfile
    err: GLib.Error
    isClosed: boolean
    printfBuf: string
    printfBufSize: number

    // Owm methods of Gsf-1.Gsf.Output

    // Has conflict: close(): boolean
    error(): GLib.Error | null
    getModtime(): GLib.DateTime | null
    /**
     * Like fputs, this assumes that the line already ends with a newline
     * @param line Nul terminated string to write
     */
    puts(line: string): boolean
    // Has conflict: seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /**
     * <note>This is a utility routine that should only be used by derived
     * outputs.</note>
     * @param container #GsfOutfile
     */
    setContainer(container: Outfile | null): boolean
    setModtime(modtime: GLib.DateTime | null): boolean
    /**
     * <note>This is a utility routine that should only be used by derived
     * outputs.</note>
     * @param name the new name
     */
    setName(name: string | null): boolean
    /**
     * <note>This is a utility routine that should only be used by derived
     * outputs.</note>
     * @param filename the (fs-sys encoded) filename
     */
    setNameFromFilename(filename: string | null): boolean
    /**
     * Tell the current position in `output,` similar to
     * <citerefentry><refentrytitle>ftell</refentrytitle>
     * <manvolnum>3</manvolnum></citerefentry>.
     */
    tell(): gsf_off_t
    // Has conflict: write(data: Uint8Array): boolean

    // Own virtual methods of Gsf-1.Gsf.Output

    /**
     * Close a stream.
     * @virtual 
     */
    close(): boolean
    /**
     * Reposition in output stream `output`. `whence` specifies what the offset is
     * relative to: the beginning of the stream (%G_SEEK_SET), current position in
     * the stream (%G_SEEK_CUR) or the end of the stream (%G_SEEK_END).
     * This function is similar to
     * <citerefentry><refentrytitle>fseek</refentrytitle>
     * <manvolnum>3</manvolnum></citerefentry>.
     * @virtual 
     * @param offset Relative amount to reposition
     * @param whence What the offset is relative to.
     */
    seek(offset: gsf_off_t, whence: GLib.SeekType): boolean
    /**
     * Write `num_bytes` of `data` to `output`.
     * @virtual 
     * @param data Data to write.
     */
    write(data: Uint8Array): boolean

    // Class property signals of Gsf-1.Gsf.Output

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Class representing an output stream, counterpart to #GsfInput.
 * @class 
 */
export class Output extends GObject.Object {

    // Own properties of Gsf-1.Gsf.Output

    static name: string

    // Constructors of Gsf-1.Gsf.Output

    constructor(config?: Output.ConstructorProperties) 
    _init(config?: Output.ConstructorProperties): void
    static errorId(): GLib.Quark
    static unwrap(wrapper: GObject.Object, wrapee: Output): boolean
    static wrap(wrapper: GObject.Object, wrapee: Output): boolean
}

export module OutputBzip {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {
    }

}

export interface OutputBzip {

    // Class property signals of Gsf-1.Gsf.OutputBzip

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputBzip extends Output {

    // Own properties of Gsf-1.Gsf.OutputBzip

    static name: string

    // Constructors of Gsf-1.Gsf.OutputBzip

    constructor(config?: OutputBzip.ConstructorProperties) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    constructor(sink: Output) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    static new(sink: Output): OutputBzip
    _init(config?: OutputBzip.ConstructorProperties): void
}

export module OutputCsv {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.OutputCsv

        eol?: string | null
        quote?: string | null
        quotingMode?: OutputCsvQuotingMode | null
        quotingOnWhitespace?: boolean | null
        quotingTriggers?: string | null
        separator?: string | null
        sink?: Output | null
    }

}

export interface OutputCsv {

    // Own properties of Gsf-1.Gsf.OutputCsv

    quotingOnWhitespace: boolean

    // Own fields of Gsf-1.Gsf.OutputCsv

    output: Output
    sink: Output
    quote: string
    quoteLen: number
    quotingMode: OutputCsvQuotingMode
    quotingTriggers: string
    eol: string
    eolLen: number
    separator: string
    separatorLen: number
    fieldsOnLine: boolean
    buf: GLib.String

    // Owm methods of Gsf-1.Gsf.OutputCsv

    writeEol(): boolean
    writeField(field: string, len: number): boolean

    // Class property signals of Gsf-1.Gsf.OutputCsv

    connect(sigName: "notify::quoting-on-whitespace", callback: any): number
    on(sigName: "notify::quoting-on-whitespace", callback: any): number
    once(sigName: "notify::quoting-on-whitespace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::quoting-on-whitespace", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputCsv extends Output {

    // Own properties of Gsf-1.Gsf.OutputCsv

    static name: string

    // Constructors of Gsf-1.Gsf.OutputCsv

    constructor(config?: OutputCsv.ConstructorProperties) 
    _init(config?: OutputCsv.ConstructorProperties): void
}

export module OutputGZip {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.OutputGZip

        deflateLevel?: number | null
        raw?: boolean | null
        sink?: Output | null
    }

}

export interface OutputGZip {

    // Own properties of Gsf-1.Gsf.OutputGZip

    deflateLevel: number
    readonly raw: boolean
    readonly sink: Output

    // Class property signals of Gsf-1.Gsf.OutputGZip

    connect(sigName: "notify::deflate-level", callback: any): number
    on(sigName: "notify::deflate-level", callback: any): number
    once(sigName: "notify::deflate-level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deflate-level", ...args: any[]): void
    connect(sigName: "notify::raw", callback: any): number
    on(sigName: "notify::raw", callback: any): number
    once(sigName: "notify::raw", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::raw", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputGZip extends Output {

    // Own properties of Gsf-1.Gsf.OutputGZip

    static name: string

    // Constructors of Gsf-1.Gsf.OutputGZip

    constructor(config?: OutputGZip.ConstructorProperties) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    constructor(sink: Output) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     */
    static new(sink: Output): OutputGZip
    _init(config?: OutputGZip.ConstructorProperties): void
}

export module OutputGio {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {
    }

}

export interface OutputGio {

    // Class property signals of Gsf-1.Gsf.OutputGio

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputGio extends Output {

    // Own properties of Gsf-1.Gsf.OutputGio

    static name: string

    // Constructors of Gsf-1.Gsf.OutputGio

    constructor(config?: OutputGio.ConstructorProperties) 
    constructor(file: Gio.File) 
    static new(file: Gio.File): OutputGio
    static newForPath(path: string): OutputGio
    static newForUri(uri: string): OutputGio
    _init(config?: OutputGio.ConstructorProperties): void
}

export module OutputIOChannel {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {
    }

}

export interface OutputIOChannel {

    // Class property signals of Gsf-1.Gsf.OutputIOChannel

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputIOChannel extends Output {

    // Own properties of Gsf-1.Gsf.OutputIOChannel

    static name: string

    // Constructors of Gsf-1.Gsf.OutputIOChannel

    constructor(config?: OutputIOChannel.ConstructorProperties) 
    constructor(channel: GLib.IOChannel) 
    static new(channel: GLib.IOChannel): OutputIOChannel
    _init(config?: OutputIOChannel.ConstructorProperties): void
}

export module OutputIconv {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.OutputIconv

        /**
         * Either NULL or a UTF-8 string (representable in the target encoding)
         * to convert and output in place of characters that cannot be represented
         * in the target encoding.  NULL means use \u1234 or \U12345678 format.
         */
        fallback?: string | null
        inputCharset?: string | null
        outputCharset?: string | null
        sink?: Output | null
    }

}

export interface OutputIconv {

    // Own properties of Gsf-1.Gsf.OutputIconv

    /**
     * Either NULL or a UTF-8 string (representable in the target encoding)
     * to convert and output in place of characters that cannot be represented
     * in the target encoding.  NULL means use \u1234 or \U12345678 format.
     */
    fallback: string
    readonly inputCharset: string
    readonly outputCharset: string
    readonly sink: Output

    // Class property signals of Gsf-1.Gsf.OutputIconv

    connect(sigName: "notify::fallback", callback: any): number
    on(sigName: "notify::fallback", callback: any): number
    once(sigName: "notify::fallback", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fallback", ...args: any[]): void
    connect(sigName: "notify::input-charset", callback: any): number
    on(sigName: "notify::input-charset", callback: any): number
    once(sigName: "notify::input-charset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-charset", ...args: any[]): void
    connect(sigName: "notify::output-charset", callback: any): number
    on(sigName: "notify::output-charset", callback: any): number
    once(sigName: "notify::output-charset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::output-charset", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputIconv extends Output {

    // Own properties of Gsf-1.Gsf.OutputIconv

    static name: string

    // Constructors of Gsf-1.Gsf.OutputIconv

    constructor(config?: OutputIconv.ConstructorProperties) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     * @param dst The target character set.
     * @param src The source character set.
     */
    constructor(sink: Output, dst: string, src: string) 
    /**
     * Adds a reference to `sink`.
     * @constructor 
     * @param sink The underlying data source.
     * @param dst The target character set.
     * @param src The source character set.
     */
    static new(sink: Output, dst: string, src: string): OutputIconv
    _init(config?: OutputIconv.ConstructorProperties): void
}

export module OutputMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {
    }

}

export interface OutputMemory {

    // Owm methods of Gsf-1.Gsf.OutputMemory

    getBytes(): Uint8Array | null
    stealBytes(): Uint8Array | null

    // Class property signals of Gsf-1.Gsf.OutputMemory

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputMemory extends Output {

    // Own properties of Gsf-1.Gsf.OutputMemory

    static name: string

    // Constructors of Gsf-1.Gsf.OutputMemory

    constructor(config?: OutputMemory.ConstructorProperties) 
    constructor() 
    static new(): OutputMemory
    _init(config?: OutputMemory.ConstructorProperties): void
}

export module OutputStdio {

    // Constructor properties interface

    export interface ConstructorProperties extends Output.ConstructorProperties {
    }

}

export interface OutputStdio {

    // Class property signals of Gsf-1.Gsf.OutputStdio

    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class OutputStdio extends Output {

    // Own properties of Gsf-1.Gsf.OutputStdio

    static name: string

    // Constructors of Gsf-1.Gsf.OutputStdio

    constructor(config?: OutputStdio.ConstructorProperties) 
    constructor(filename: string) 
    static new(filename: string): OutputStdio
    _init(config?: OutputStdio.ConstructorProperties): void
}

export module SharedMemory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface SharedMemory {

    // Own fields of Gsf-1.Gsf.SharedMemory

    gObject: GObject.Object
    buf: object
    size: gsf_off_t
    needsFree: boolean
    needsUnmap: boolean

    // Class property signals of Gsf-1.Gsf.SharedMemory

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SharedMemory extends GObject.Object {

    // Own properties of Gsf-1.Gsf.SharedMemory

    static name: string

    // Constructors of Gsf-1.Gsf.SharedMemory

    constructor(config?: SharedMemory.ConstructorProperties) 
    static mmappedNew(buf: object | null, size: gsf_off_t): SharedMemory
    constructor(buf: object | null, size: gsf_off_t, needsFree: boolean) 
    static new(buf: object | null, size: gsf_off_t, needsFree: boolean): SharedMemory
    _init(config?: SharedMemory.ConstructorProperties): void
}

export module StructuredBlob {

    // Constructor properties interface

    export interface ConstructorProperties extends Infile.ConstructorProperties {
    }

}

export interface StructuredBlob {

    // Owm methods of Gsf-1.Gsf.StructuredBlob

    /**
     * Dumps structured blob `blob` onto the `container`.  Will fail if the output is
     * not an Outfile and blob has multiple streams.
     * @param container #GsfOutfile
     */
    write(container: Outfile): boolean

    // Class property signals of Gsf-1.Gsf.StructuredBlob

    connect(sigName: "notify::eof", callback: any): number
    on(sigName: "notify::eof", callback: any): number
    once(sigName: "notify::eof", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::eof", ...args: any[]): void
    connect(sigName: "notify::modtime", callback: any): number
    on(sigName: "notify::modtime", callback: any): number
    once(sigName: "notify::modtime", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modtime", ...args: any[]): void
    connect(sigName: "notify::position", callback: any): number
    on(sigName: "notify::position", callback: any): number
    once(sigName: "notify::position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::position", ...args: any[]): void
    connect(sigName: "notify::remaining", callback: any): number
    on(sigName: "notify::remaining", callback: any): number
    once(sigName: "notify::remaining", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::remaining", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StructuredBlob extends Infile {

    // Own properties of Gsf-1.Gsf.StructuredBlob

    static name: string

    // Constructors of Gsf-1.Gsf.StructuredBlob

    constructor(config?: StructuredBlob.ConstructorProperties) 
    _init(config?: StructuredBlob.ConstructorProperties): void
    /**
     * Create a tree of binary blobs with unknown content from a #GsfInput or
     * #GsfInfile and store it in a newly created #GsfStructuredBlob.
     * @param input An input (potentially a GsfInfile) holding the blob
     */
    static read(input: Input): StructuredBlob
}

export module XMLOut {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gsf-1.Gsf.XMLOut

        prettyPrint?: boolean | null
        sink?: Output | null
    }

}

export interface XMLOut {

    // Own properties of Gsf-1.Gsf.XMLOut

    prettyPrint: boolean
    readonly sink: Output

    // Own fields of Gsf-1.Gsf.XMLOut

    base: GObject.Object
    output: Output
    priv: object

    // Owm methods of Gsf-1.Gsf.XMLOut

    /**
     * Dump `len` bytes in `data` into the content of node `id` using base64
     * @param id tag id, or %NULL for node content
     * @param data Data to be written
     */
    addBase64(id: string | null, data: Uint8Array): void
    /**
     * dump boolean value `val` to an attribute named `id` or as the nodes content
     * Use '1' or '0' to simplify import
     * @param id tag id, or %NULL for node content
     * @param val a boolean
     */
    addBool(id: string | null, val: boolean): void
    /**
     * dump Color `r`.`g`.`b` to an attribute named `id` or as the nodes content
     * @param id tag id, or %NULL for node content
     * @param r Red value
     * @param g Green value
     * @param b Blue value
     */
    addColor(id: string | null, r: number, g: number, b: number): void
    /**
     * dump `val_utf8` to an attribute named `id` or as the nodes content escaping
     * characters as necessary.  If `val_utf8` is %NULL do nothing (no warning, no
     * output)
     * @param id tag id, or %NULL for node content
     * @param valUtf8 a utf8 encoded string
     */
    addCstr(id: string | null, valUtf8: string | null): void
    /**
     * dump `val_utf8` to an attribute named `id` without checking to see if
     * the content needs escaping.  A useful performance enhancement when
     * the application knows that structure of the content well.  If
     * `val_utf8` is %NULL do nothing (no warning, no output)
     * @param id tag id, or %NULL for node content
     * @param valUtf8 a utf8 encoded string to export
     */
    addCstrUnchecked(id: string | null, valUtf8: string | null): void
    /**
     * Output the name of value `val` of enumeration type `etype`.
     * @param id tag id, or %NULL for node content
     * @param etype #GType
     * @param val enum element number
     */
    addEnum(id: string | null, etype: GObject.GType, val: number): void
    /**
     * dump float value `val` to an attribute named `id` or as the nodes
     * content with precision `precision`.  The number will be formattted
     * according to the "C" locale.
     * @param id tag id, or %NULL for node content
     * @param val the value
     * @param precision the number of significant digits to use, -1 meaning "enough".
     */
    addFloat(id: string | null, val: number, precision: number): void
    /**
     * Output the value of `val` as a string.  Does NOT store any type information
     * with the string, just thevalue.
     * @param id tag id, or %NULL for node content
     * @param val #GValue
     */
    addGvalue(id: string | null, val: any): void
    /**
     * dump integer value `val` to an attribute named `id` or as the nodes content
     * @param id tag id, or %NULL for node content
     * @param val the value
     */
    addInt(id: string | null, val: number): void
    /**
     * dump unsigned integer value `val` to an attribute named `id` or as the nodes
     * content
     * @param id tag id, or %NULL for node content
     * @param val the value
     */
    addUint(id: string | null, val: number): void
    /**
     * Closes/ends an XML element.
     */
    endElement(): string
    /**
     * Get the #GsfOutput we are writing to..
     */
    getOutput(): Output | null
    getPrettyPrint(): boolean
    /**
     * Store some optional &lt;!DOCTYPE .. &gt; content
     * @param type the document type declaration
     */
    setDocType(type: string): void
    setPrettyPrint(pp: boolean): boolean
    /**
     * Convenience routine to output a simple `id` element with content `content`.
     * @param id Element name
     * @param content Content of the element
     */
    simpleElement(id: string, content: string): void
    /**
     * Convenience routine to output an element `id` with float value `val` using
     * `precision` significant digits.
     * @param id Element name
     * @param val Element value
     * @param precision the number of significant digits to use, -1 meaning "enough".
     */
    simpleFloatElement(id: string, val: number, precision: number): void
    /**
     * Convenience routine to output an element `id` with integer value `val`.
     * @param id Element name
     * @param val Element value
     */
    simpleIntElement(id: string, val: number): void
    /**
     * Output a start element `id,` if necessary preceeded by an XML declaration.
     * @param id Element name
     */
    startElement(id: string): void

    // Class property signals of Gsf-1.Gsf.XMLOut

    connect(sigName: "notify::pretty-print", callback: any): number
    on(sigName: "notify::pretty-print", callback: any): number
    once(sigName: "notify::pretty-print", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pretty-print", ...args: any[]): void
    connect(sigName: "notify::sink", callback: any): number
    on(sigName: "notify::sink", callback: any): number
    once(sigName: "notify::sink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sink", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XMLOut extends GObject.Object {

    // Own properties of Gsf-1.Gsf.XMLOut

    static name: string

    // Constructors of Gsf-1.Gsf.XMLOut

    constructor(config?: XMLOut.ConstructorProperties) 
    /**
     * Create an XML output stream.
     * @constructor 
     * @param output #GsfOutput
     */
    constructor(output: Output) 
    /**
     * Create an XML output stream.
     * @constructor 
     * @param output #GsfOutput
     */
    static new(output: Output): XMLOut
    _init(config?: XMLOut.ConstructorProperties): void
}

export interface BlobClass {
}

export abstract class BlobClass {

    // Own properties of Gsf-1.Gsf.BlobClass

    static name: string
}

export interface BlobPrivate {
}

export class BlobPrivate {

    // Own properties of Gsf-1.Gsf.BlobPrivate

    static name: string
}

export interface ClipDataClass {
}

export abstract class ClipDataClass {

    // Own properties of Gsf-1.Gsf.ClipDataClass

    static name: string
}

export interface ClipDataPrivate {
}

export class ClipDataPrivate {

    // Own properties of Gsf-1.Gsf.ClipDataPrivate

    static name: string
}

export interface DocProp {

    // Owm methods of Gsf-1.Gsf.DocProp

    /**
     * A debugging utility to dump `prop` as text via g_print
     * New in 1.14.2
     */
    dump(): void
    /**
     * Release the given property.
     */
    free(): void
    getLink(): string | null
    getName(): string
    getVal(): any
    /**
     * Sets `prop'`s link to `link`
     * @param link a link.
     */
    setLink(link: string | null): void
    /**
     * Assigns `val` to `prop,` and unsets and frees the current value.
     * @param val #GValue
     */
    setVal(val: any): void
    swapVal(val: any): any
}

/**
 * Class representing a properties of a document.
 * @record 
 */
export class DocProp {

    // Own properties of Gsf-1.Gsf.DocProp

    static name: string

    // Constructors of Gsf-1.Gsf.DocProp

    constructor(name: string) 
    static new(name: string): DocProp
}

export interface InfileClass {

    // Own fields of Gsf-1.Gsf.InfileClass

    inputClass: InputClass
    numChildren: (infile: Infile) => number
    nameByIndex: (infile: Infile, i: number) => string | null
}

export abstract class InfileClass {

    // Own properties of Gsf-1.Gsf.InfileClass

    static name: string
}

export interface InputClass {

    // Own fields of Gsf-1.Gsf.InputClass

    gObjectClass: GObject.ObjectClass
    dup: (input: Input) => Input | null
    read: (input: Input, numBytes: number, optionalBuffer: Uint8Array | null) => Uint8Array | null
    seek: (input: Input, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    openSibling: (input: Input, name: string) => Input
}

export abstract class InputClass {

    // Own properties of Gsf-1.Gsf.InputClass

    static name: string
}

export interface MSOleSortingKey {

    // Owm methods of Gsf-1.Gsf.MSOleSortingKey

    cmp(b: MSOleSortingKey): number
    free(): void
}

export class MSOleSortingKey {

    // Own properties of Gsf-1.Gsf.MSOleSortingKey

    static name: string

    // Constructors of Gsf-1.Gsf.MSOleSortingKey

    constructor(name: string) 
    static new(name: string): MSOleSortingKey
}

export interface ODFOutClass {

    // Own fields of Gsf-1.Gsf.ODFOutClass

    base: XMLOutClass
}

export abstract class ODFOutClass {

    // Own properties of Gsf-1.Gsf.ODFOutClass

    static name: string
}

export interface OpenPkgRel {

    // Owm methods of Gsf-1.Gsf.OpenPkgRel

    getTarget(): string
    getType(): string
    isExtern(): boolean
}

export class OpenPkgRel {

    // Own properties of Gsf-1.Gsf.OpenPkgRel

    static name: string
}

export interface OpenPkgRels {
}

export class OpenPkgRels {

    // Own properties of Gsf-1.Gsf.OpenPkgRels

    static name: string
}

export interface OutfileClass {

    // Own fields of Gsf-1.Gsf.OutfileClass

    outputClass: OutputClass
}

export abstract class OutfileClass {

    // Own properties of Gsf-1.Gsf.OutfileClass

    static name: string
}

export interface OutputClass {

    // Own fields of Gsf-1.Gsf.OutputClass

    gObjectClass: GObject.ObjectClass
    close: (output: Output) => boolean
    seek: (output: Output, offset: gsf_off_t, whence: GLib.SeekType) => boolean
    write: (output: Output, data: Uint8Array) => boolean
}

export abstract class OutputClass {

    // Own properties of Gsf-1.Gsf.OutputClass

    static name: string
}

export interface OutputCsvClass {

    // Own fields of Gsf-1.Gsf.OutputCsvClass

    outputClass: OutputClass
}

export abstract class OutputCsvClass {

    // Own properties of Gsf-1.Gsf.OutputCsvClass

    static name: string
}

export interface OutputIconvClass {

    // Own fields of Gsf-1.Gsf.OutputIconvClass

    outputClass: OutputClass
}

export abstract class OutputIconvClass {

    // Own properties of Gsf-1.Gsf.OutputIconvClass

    static name: string
}

export interface Timestamp {

    // Own fields of Gsf-1.Gsf.Timestamp

    /**
     * #GDate in local timezone
     * @field 
     */
    date: GLib.Date
    /**
     * #glong number of seconds since `date`.
     * @field 
     */
    seconds: number
    /**
     * possibly blank #GString of the timezone
     * @field 
     */
    timeZone: GLib.String
    /**
     * as from g_date_time_to_unix.
     * @field 
     */
    timet: number

    // Owm methods of Gsf-1.Gsf.Timestamp

    /**
     * Produce a string representation (ISO 8601 format) of `stamp`.
     */
    asString(): string
    /**
     * Copies a timestamp.
     */
    copy(): Timestamp
    /**
     * Compare timestamps `a` and `b`.
     * @param b another timestamp
     */
    equal(b: Timestamp): boolean
    /**
     * Releases the memory in use for `stamp` (if any).
     */
    free(): void
    hash(): number
    /**
     * Parser for time stamps.  Requires a ISO 8601 formatted string.
     * @param spec The string to parse
     */
    loadFromString(spec: string): number
    setTime(t: number): void
    /**
     * Calls g_value_set_box (value, stamp);
     * @param value #GValue
     */
    toValue(value: any): void
}

/**
 * A point in time.
 * @record 
 */
export class Timestamp {

    // Own properties of Gsf-1.Gsf.Timestamp

    static name: string

    // Constructors of Gsf-1.Gsf.Timestamp

    constructor() 
    static new(): Timestamp
}

export interface XMLBlob {
}

export class XMLBlob {

    // Own properties of Gsf-1.Gsf.XMLBlob

    static name: string
}

export interface XMLIn {

    // Own fields of Gsf-1.Gsf.XMLIn

    /**
     * user data
     * @field 
     */
    userState: object
    /**
     * the current node content
     * @field 
     */
    content: GLib.String
    /**
     * Current document being parsed #GsfXMLInDoc
     * @field 
     */
    doc: XMLInDoc
    /**
     * current node (not on the stack)
     * @field 
     */
    node: XMLInNode

    // Owm methods of Gsf-1.Gsf.XMLIn

    /**
     * According to `state` is `str` in the namespace `ns_id` ?
     * @param str string to check
     * @param nsId the namespace id
     */
    checkNs(str: string, nsId: number): string | null
    /**
     * (New in 1.14.2)
     */
    getInput(): Input
    /**
     * Checks to see if `str` is the same as `ns_id:`:`name` with either an explicit
     * namespace or the current default namespace.
     * @param str The potentially namespace qualified node name.
     * @param nsId The name space id to check
     * @param name The target node name
     */
    namecmp(str: string, nsId: number, name: string): boolean
    /**
     * Take the first node from `doc` as the current node and call its start handler.
     * @param doc #GsfXMLInDoc
     * @param newState arbitrary content for the parser
     * @param dtor #GsfXMLInExtDtor
     * @param attrs array of xmlChar const *
     */
    pushState(doc: XMLInDoc, newState: object | null, dtor: XMLInExtDtor, attrs: string[]): void
    /**
     * (New in 1.14.33)
     * 
     * This provides a means to silently ignore unknown tags in contexts where
     * they are expected.
     * @param silent whether to be silent about unknown tags
     */
    setSilentUnknowns(silent: boolean): void
}

export class XMLIn {

    // Own properties of Gsf-1.Gsf.XMLIn

    static name: string
}

export interface XMLInDoc {

    // Owm methods of Gsf-1.Gsf.XMLInDoc

    /**
     * Adds additional nodes to the structure of `doc`
     * @param nodes %NULL terminated array of #GsfXMLInNode
     */
    addNodes(nodes: XMLInNode[]): void
    /**
     * Free up resources
     */
    free(): void
    /**
     * Read an xml document from `input` and parse based on the the descriptor in
     * `doc`
     * @param input #GsfInput
     * @param userState arbitrary content stored in the parser
     */
    parse(input: Input, userState: object | null): boolean
    /**
     * Call the function `handler` when an unexpected child node is found
     * @param handler The function to call
     */
    setUnknownHandler(handler: XMLInUnknownFunc): void
}

export class XMLInDoc {

    // Own properties of Gsf-1.Gsf.XMLInDoc

    static name: string

    // Constructors of Gsf-1.Gsf.XMLInDoc

    /**
     * Combine the nodes in the %NULL terminated array starting at `nodes` with the
     * name spaces in the %NULL terminated array starting at `ns`.  Prepare the
     * data structures necessary to validate a doument based on that description.
     * @constructor 
     * @param nodes an array of node descriptors
     * @param ns an array of namespace identifiers
     */
    constructor(nodes: XMLInNode[], ns: XMLInNS[]) 
    /**
     * Combine the nodes in the %NULL terminated array starting at `nodes` with the
     * name spaces in the %NULL terminated array starting at `ns`.  Prepare the
     * data structures necessary to validate a doument based on that description.
     * @constructor 
     * @param nodes an array of node descriptors
     * @param ns an array of namespace identifiers
     */
    static new(nodes: XMLInNode[], ns: XMLInNS[]): XMLInDoc
}

export interface XMLInNS {

    // Own fields of Gsf-1.Gsf.XMLInNS

    /**
     * URI
     * @field 
     */
    uri: string
    nsId: number
}

export class XMLInNS {

    // Own properties of Gsf-1.Gsf.XMLInNS

    static name: string
}

export interface XMLInNode {

    // Own fields of Gsf-1.Gsf.XMLInNode

    /**
     * identifier unique in the entire tree
     * @field 
     */
    id: string
    /**
     * namespace identifier
     * @field 
     */
    nsId: number
    /**
     * node name
     * @field 
     */
    name: string
    /**
     * parent node identifier
     * @field 
     */
    parentId: string
    start: (xin: XMLIn, attrs: libxml2.Char) => void
    end: (xin: XMLIn, unknown: XMLBlob) => void
    /**
     * whether the node has content
     * @field 
     */
    hasContent: XMLContent
    /**
     * whether to check namespace for children
     * @field 
     */
    checkChildrenForNs: number
    /**
     * whether to share children with parent.
     * @field 
     */
    shareChildrenWithParent: number
}

export class XMLInNode {

    // Own properties of Gsf-1.Gsf.XMLInNode

    static name: string
}

export interface XMLOutClass {

    // Own fields of Gsf-1.Gsf.XMLOutClass

    base: GObject.ObjectClass
}

export abstract class XMLOutClass {

    // Own properties of Gsf-1.Gsf.XMLOutClass

    static name: string
}

    export type gsf_off_t = number