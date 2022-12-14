
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * TotemPlParser-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Allows you to differentiate between different
 * errors occurring during file operations in a #TotemPlParser.
 */
export enum ParserError {
    /**
     * Error attempting to open a disc device when no disc is present
     */
    NO_DISC,
    /**
     * An attempted mount operation failed
     */
    MOUNT_FAILED,
    /**
     * Playlist to be saved is empty
     */
    EMPTY_PLAYLIST,
}
/**
 * Gives the result of parsing a playlist.
 */
export enum ParserResult {
    /**
     * The playlist could not be handled.
     */
    UNHANDLED,
    /**
     * There was an error parsing the playlist.
     */
    ERROR,
    /**
     * The playlist was parsed successfully.
     */
    SUCCESS,
    /**
     * The playlist was ignored due to its scheme or MIME type (see totem_pl_parser_add_ignored_scheme()
     * and totem_pl_parser_add_ignored_mimetype()).
     */
    IGNORED,
    /**
     * Parsing of the playlist was cancelled part-way through.
     */
    CANCELLED,
}
/**
 * The type of playlist a #TotemPlParser will parse.
 */
export enum ParserType {
    /**
     * PLS parser
     */
    PLS,
    /**
     * M3U parser
     */
    M3U,
    /**
     * M3U (DOS linebreaks) parser
     */
    M3U_DOS,
    /**
     * XSPF parser
     */
    XSPF,
    /**
     * iRiver PLA parser
     */
    IRIVER_PLA,
}
export const PARSER_CONTENT_RATING_CLEAN: string
export const PARSER_CONTENT_RATING_EXPLICIT: string
export const PARSER_CONTENT_RATING_UNRATED: string
/**
 * Metadata field for an entry's abstract text.
 */
export const PARSER_FIELD_ABSTRACT: string
/**
 * Metadata field for an entry's album.
 */
export const PARSER_FIELD_ALBUM: string
/**
 * Metadata field for an entry's default audio-track selection. The default
 * track is defined as NULL. Note that the value is sent as a string.
 */
export const PARSER_FIELD_AUDIO_TRACK: string
/**
 * Metadata field for an entry's author/composer/director.
 */
export const PARSER_FIELD_AUTHOR: string
/**
 * Metadata field for an entry's "autoplay" flag, which is %TRUE if the entry should play automatically.
 */
export const PARSER_FIELD_AUTOPLAY: string
/**
 * Metadata field for an entry's base path.
 */
export const PARSER_FIELD_BASE: string
/**
 * Metadata field for an entry's contact details for the webmaster.
 */
export const PARSER_FIELD_CONTACT: string
/**
 * Metadata field for an entry's content rating. It is
 * %TOTEM_PL_PARSER_CONTENT_RATING_CLEAN for clean content,
 * %TOTEM_PL_PARSER_CONTENT_RATING_EXPLICIT for explicit content and
 * %TOTEM_PL_PARSER_CONTENT_RATING_UNRATED for content which is not
 * rated.
 */
export const PARSER_FIELD_CONTENT_RATING: string
/**
 * Metadata field for an entry's content-type (usually a mime-type coming
 * from a web server).
 */
export const PARSER_FIELD_CONTENT_TYPE: string
/**
 * Metadata field for an entry's copyright line.
 */
export const PARSER_FIELD_COPYRIGHT: string
/**
 * Metadata field for an entry's description.
 */
export const PARSER_FIELD_DESCRIPTION: string
/**
 * Metadata field for an entry's download URI. Only used if an alternate download
 * location is available for the entry.
 */
export const PARSER_FIELD_DOWNLOAD_URI: string
/**
 * Metadata field for an entry's playback duration, which should be parsed using totem_pl_parser_parse_duration().
 */
export const PARSER_FIELD_DURATION: string
/**
 * Metadata field for an entry's playback duration, in milliseconds. It's only used when an entry's
 * duration is available in that format, so one would get either the %TOTEM_PL_PARSER_FIELD_DURATION
 * or %TOTEM_PL_PARSER_FIELD_DURATION_MS as metadata.
 */
export const PARSER_FIELD_DURATION_MS: string
/**
 * Metadata field for an entry's playback end time.
 */
export const PARSER_FIELD_ENDTIME: string
/**
 * Metadata field for an entry's filesize in bytes. This is only advisory, and can sometimes not match the actual filesize of the stream.
 */
export const PARSER_FIELD_FILESIZE: string
/**
 * Metadata field for an entry's primary genre. This is a string of
 * the form 'Genre1' or 'Genre1/SubGenre1".
 */
export const PARSER_FIELD_GENRE: string
/**
 * Metadata field for an entry's full genre. This is a concatenated
 * string of the form 'Genre1/SubGenre1,Genre2/SubGenre2" etc.
 */
export const PARSER_FIELD_GENRES: string
/**
 * Metadata field for an entry's identifier. Its use is dependent on the format
 * of the playlist parsed, and its origin.
 */
export const PARSER_FIELD_ID: string
/**
 * Metadata field for an entry's thumbnail image URI.
 */
export const PARSER_FIELD_IMAGE_URI: string
/**
 * Metadata field used to tell the calling code that the parsing of a playlist
 * started. It is only %TRUE for the metadata passed to #TotemPlParser::playlist-started or
 * #TotemPlParser::playlist-ended signal handlers.
 */
export const PARSER_FIELD_IS_PLAYLIST: string
/**
 * Metadata field for an entry's audio language.
 */
export const PARSER_FIELD_LANGUAGE: string
/**
 * Metadata field for an entry's "more info" URI.
 */
export const PARSER_FIELD_MOREINFO: string
/**
 * Metadata field for an entry's status in a playlist. This is usually
 * used when saving the state of an on-going playlist.
 */
export const PARSER_FIELD_PLAYING: string
/**
 * Metadata field for an entry's publication date, which should be parsed using totem_pl_parser_parse_date().
 */
export const PARSER_FIELD_PUB_DATE: string
/**
 * Metadata field for an entry's preferred screen size.
 */
export const PARSER_FIELD_SCREENSIZE: string
/**
 * Metadata field for an entry's playback start time, which should be parsed using totem_pl_parser_parse_duration().
 */
export const PARSER_FIELD_STARTTIME: string
/**
 * The URI of the entry's subtitle file.
 */
export const PARSER_FIELD_SUBTITLE_URI: string
/**
 * Metadata field for an entry's displayable title.
 */
export const PARSER_FIELD_TITLE: string
/**
 * Metadata field for an entry's preferred UI mode.
 */
export const PARSER_FIELD_UI_MODE: string
/**
 * Metadata field for an entry's URI.
 */
export const PARSER_FIELD_URI: string
/**
 * Metadata field for an entry's playback volume.
 */
export const PARSER_FIELD_VOLUME: string
export const PARSER_VERSION_MAJOR: number
export const PARSER_VERSION_MICRO: number
export const PARSER_VERSION_MINOR: number
export function parserErrorQuark(): GLib.Quark
export function parserMetadataGetType(): GObject.GType
export module Parser {

    // Signal callback interfaces

    /**
     * Signal callback interface for `entry-parsed`
     */
    export interface EntryParsedSignalCallback {
        (uri: string, metadata: GLib.HashTable): void
    }

    /**
     * Signal callback interface for `playlist-ended`
     */
    export interface PlaylistEndedSignalCallback {
        (uri: string): void
    }

    /**
     * Signal callback interface for `playlist-started`
     */
    export interface PlaylistStartedSignalCallback {
        (uri: string, metadata: GLib.HashTable): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of TotemPlParser-1.0.TotemPlParser.Parser

        /**
         * If %TRUE, the parser will output debug information.
         */
        debug?: boolean | null
        /**
         * If %TRUE, the parser will not parse unsafe locations, such as local devices
         * and local files if the playlist isn't local. This is useful if the library
         * is parsing a playlist from a remote location such as a website.
         */
        disableUnsafe?: boolean | null
        /**
         * If %TRUE, the parser will attempt to parse a playlist, even if it
         * appears to be unsupported (usually because of its filename extension).
         */
        force?: boolean | null
        /**
         * If %TRUE, the parser will recursively fetch playlists linked to by
         * the current one.
         */
        recurse?: boolean | null
    }

}

export interface Parser {

    // Own properties of TotemPlParser-1.0.TotemPlParser.Parser

    /**
     * If %TRUE, the parser will output debug information.
     */
    debug: boolean
    /**
     * If %TRUE, the parser will not parse unsafe locations, such as local devices
     * and local files if the playlist isn't local. This is useful if the library
     * is parsing a playlist from a remote location such as a website.
     */
    disableUnsafe: boolean
    /**
     * If %TRUE, the parser will attempt to parse a playlist, even if it
     * appears to be unsupported (usually because of its filename extension).
     */
    force: boolean
    /**
     * If %TRUE, the parser will recursively fetch playlists linked to by
     * the current one.
     */
    recurse: boolean

    // Own fields of TotemPlParser-1.0.TotemPlParser.Parser

    parent: GObject.Object
    priv: ParserPrivate

    // Owm methods of TotemPlParser-1.0.TotemPlParser.Parser

    /**
     * Adds a glob to the list of mimetypes to ignore, so that
     * any URI of that glob is ignored during playlist parsing.
     * @param glob a glob to ignore
     */
    addIgnoredGlob(glob: string): void
    /**
     * Adds a mimetype to the list of mimetypes to ignore, so that
     * any URI of that mimetype is ignored during playlist parsing.
     * @param mimetype the mimetype to ignore
     */
    addIgnoredMimetype(mimetype: string): void
    /**
     * Adds a scheme to the list of schemes to ignore, so that
     * any URI using that scheme is ignored during playlist parsing.
     * @param scheme the scheme to ignore
     */
    addIgnoredScheme(scheme: string): void
    /**
     * Parses a playlist given by the absolute URI `uri`. This method is
     * synchronous, and will block on (e.g.) network requests to slow
     * servers. totem_pl_parser_parse_async() is recommended instead.
     * 
     * Return values are as totem_pl_parser_parse_with_base().
     * @param uri the URI of the playlist to parse
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     */
    parse(uri: string, fallback: boolean): ParserResult
    /**
     * Starts asynchronous parsing of a playlist given by the absolute URI `uri`. `parser` and `uri` are both reffed/copied
     * when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see totem_pl_parser_parse(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
     * to get the results of the operation.
     * @param uri the URI of the playlist to parse
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when parsing is finished
     */
    parseAsync(uri: string, fallback: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous playlist parsing operation started with totem_pl_parser_parse_async()
     * or totem_pl_parser_parse_with_base_async().
     * 
     * If parsing of the playlist is cancelled part-way through, %TOTEM_PL_PARSER_RESULT_CANCELLED is returned when
     * this function is called.
     * @param asyncResult a #GAsyncResult
     */
    parseFinish(asyncResult: Gio.AsyncResult): ParserResult
    /**
     * Parses a playlist given by the absolute URI `uri,` using
     * `base` to resolve relative paths where appropriate.
     * @param uri the URI of the playlist to parse
     * @param base the base path for relative filenames, or %NULL
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     */
    parseWithBase(uri: string, base: string | null, fallback: boolean): ParserResult
    /**
     * Starts asynchronous parsing of a playlist given by the absolute URI `uri,` using `base` to resolve relative paths where appropriate.
     * `parser` and `uri` are both reffed/copied when this function is called, so can safely be freed after this function returns.
     * 
     * For more details, see totem_pl_parser_parse_with_base(), which is the synchronous version of this function.
     * 
     * When the operation is finished, `callback` will be called. You can then call totem_pl_parser_parse_finish()
     * to get the results of the operation.
     * @param uri the URI of the playlist to parse
     * @param base the base path for relative filenames, or %NULL
     * @param fallback %TRUE if the parser should add the playlist URI to the end of the playlist on parse failure
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when parsing is finished
     */
    parseWithBaseAsync(uri: string, base: string | null, fallback: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Writes the playlist held by `parser` and `playlist` out to the path
     * pointed by `dest`. The playlist is written in the format `type` and is
     * given the title `title`.
     * 
     * If the `output` file is a directory the #G_IO_ERROR_IS_DIRECTORY error
     * will be returned, and if the file is some other form of non-regular file
     * then a #G_IO_ERROR_NOT_REGULAR_FILE error will be returned. Some file
     * systems don't allow all file names, and may return a
     * #G_IO_ERROR_INVALID_FILENAME error, and if the name is too long,
     * #G_IO_ERROR_FILENAME_TOO_LONG will be returned. Other errors are possible
     * too, and depend on what kind of filesystem the file is on.
     * 
     * In extreme cases, a #G_IO_ERROR_INVALID_ARGUMENT error can be returned, if
     * parts of the playlist to be written are too long.
     * 
     * If writing a PLA playlist and there is an error converting a URI's encoding,
     * a code from #GConvertError will be returned.
     * @param playlist a #TotemPlPlaylist
     * @param dest output #GFile
     * @param title the playlist title
     * @param type a #TotemPlParserType for the outputted playlist
     */
    save(playlist: Playlist, dest: Gio.File, title: string, type: ParserType): boolean
    /**
     * Starts asynchronous version of totem_pl_parser_save(). For more details
     * see totem_pl_parser_save().
     * 
     * When the operation is finished, `callback` will be called. You can then call
     * totem_pl_parser_save_finish() to get the results of the operation.
     * @param playlist a #TotemPlPlaylist
     * @param dest output #GFile
     * @param title the playlist title
     * @param type a #TotemPlParserType for the outputted playlist
     * @param cancellable a #GCancellable, or %NULL
     * @param callback a #GAsyncReadyCallback to call when saving has finished
     */
    saveAsync(playlist: Playlist, dest: Gio.File, title: string, type: ParserType, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes an asynchronous playlist saving operation started with totem_pl_parser_save_async().
     * 
     * If saving of the playlist is cancelled part-way through, %G_IO_ERROR_CANCELLED will be
     * returned when this function is called.
     * @param asyncResult a #GAsyncResult
     */
    saveFinish(asyncResult: Gio.AsyncResult): boolean

    // Own virtual methods of TotemPlParser-1.0.TotemPlParser.Parser

    entryParsed(uri: string, metadata: GLib.HashTable): void
    playlistEnded(uri: string): void
    playlistStarted(uri: string, metadata: GLib.HashTable): void

    // Own signals of TotemPlParser-1.0.TotemPlParser.Parser

    connect(sigName: "entry-parsed", callback: Parser.EntryParsedSignalCallback): number
    on(sigName: "entry-parsed", callback: Parser.EntryParsedSignalCallback): number
    once(sigName: "entry-parsed", callback: Parser.EntryParsedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "entry-parsed", metadata: GLib.HashTable, ...args: any[]): void
    connect(sigName: "playlist-ended", callback: Parser.PlaylistEndedSignalCallback): number
    on(sigName: "playlist-ended", callback: Parser.PlaylistEndedSignalCallback): number
    once(sigName: "playlist-ended", callback: Parser.PlaylistEndedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "playlist-ended", ...args: any[]): void
    connect(sigName: "playlist-started", callback: Parser.PlaylistStartedSignalCallback): number
    on(sigName: "playlist-started", callback: Parser.PlaylistStartedSignalCallback): number
    once(sigName: "playlist-started", callback: Parser.PlaylistStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "playlist-started", metadata: GLib.HashTable, ...args: any[]): void

    // Class property signals of TotemPlParser-1.0.TotemPlParser.Parser

    connect(sigName: "notify::debug", callback: any): number
    on(sigName: "notify::debug", callback: any): number
    once(sigName: "notify::debug", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::debug", ...args: any[]): void
    connect(sigName: "notify::disable-unsafe", callback: any): number
    on(sigName: "notify::disable-unsafe", callback: any): number
    once(sigName: "notify::disable-unsafe", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-unsafe", ...args: any[]): void
    connect(sigName: "notify::force", callback: any): number
    on(sigName: "notify::force", callback: any): number
    once(sigName: "notify::force", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::force", ...args: any[]): void
    connect(sigName: "notify::recurse", callback: any): number
    on(sigName: "notify::recurse", callback: any): number
    once(sigName: "notify::recurse", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::recurse", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #TotemPlParser structure are private and should never be accessed directly.
 * @class 
 */
export class Parser extends GObject.Object {

    // Own properties of TotemPlParser-1.0.TotemPlParser.Parser

    static name: string

    // Constructors of TotemPlParser-1.0.TotemPlParser.Parser

    constructor(config?: Parser.ConstructorProperties) 
    /**
     * Creates a #TotemPlParser object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a #TotemPlParser object.
     * @constructor 
     */
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
    /**
     * Checks if the first `len` bytes of `data` can be parsed.
     * @param data the data to check for parsability
     * @param len the length of data to check
     * @param debug %TRUE if debug statements should be printed
     */
    static canParseFromData(data: string, len: number, debug: boolean): boolean
    /**
     * Checks if the file can be parsed. Files can be parsed if:
     * <itemizedlist>
     *  <listitem><para>they have a special mimetype, or</para></listitem>
     *  <listitem><para>they have a mimetype which could be a video or a playlist.</para></listitem>
     * </itemizedlist>
     * @param filename the file to check for parsability
     * @param debug %TRUE if debug statements should be printed
     */
    static canParseFromFilename(filename: string, debug: boolean): boolean
    /**
     * Checks if the remote URI can be parsed. Note that this does
     * not actually try to open the remote URI, or deduce its mime-type
     * from filename, as this would bring too many false positives.
     * @param uri the remote URI to check for parsability
     * @param debug %TRUE if debug statements should be printed
     */
    static canParseFromUri(uri: string, debug: boolean): boolean
    /**
     * Parses the given date string and returns it as a <type>gint64</type>
     * denoting the date in seconds since the UNIX Epoch.
     * @param dateStr the date string to parse
     * @param debug %TRUE if debug statements should be printed
     */
    static parseDate(dateStr: string, debug: boolean): number
    /**
     * Parses the given duration string and returns it as a <type>gint64</type>
     * denoting the duration in seconds.
     * @param duration the duration string to parse
     * @param debug %TRUE if debug statements should be printed
     */
    static parseDuration(duration: string, debug: boolean): number
}

export module Playlist {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Playlist {

    // Own fields of TotemPlParser-1.0.TotemPlParser.Playlist

    parentInstance: GObject.Object

    // Owm methods of TotemPlParser-1.0.TotemPlParser.Playlist

    /**
     * Appends a new empty element to `playlist,` and modifies `iter` so
     * it points to it. To fill in values, you need to call
     * totem_pl_playlist_set() or totem_pl_playlist_set_value().
     */
    append(): /* iter */ PlaylistIter
    /**
     * Gets the value for `key` (Such as %TOTEM_PL_PARSER_FIELD_URI) in
     * the playlist item pointed by `iter`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     * @param key data key
     * @param value an empty #GValue to set
     */
    getValue(iter: PlaylistIter, key: string, value: any): boolean
    /**
     * Inserts a new empty element to `playlist` at `position,` and modifies
     * `iter` so it points to it. To fill in values, you need to call
     * totem_pl_playlist_set() or totem_pl_playlist_set_value().
     * 
     * `position` may be minor than 0 to prepend elements, or bigger than
     * the current `playlist` size to append elements.
     * @param position position in the playlist
     */
    insert(position: number): /* iter */ PlaylistIter
    /**
     * Modifies `iter` so it points to the first element in `playlist`.
     */
    iterFirst(): [ /* returnType */ boolean, /* iter */ PlaylistIter ]
    /**
     * Modifies `iter` so it points to the next element it previously
     * pointed to. This function will return %FALSE if there was no
     * next element, or `iter` didn't actually point to any element
     * in `playlist`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     */
    iterNext(iter: PlaylistIter): boolean
    /**
     * Modifies `iter` so it points to the previous element it previously
     * pointed to. This function will return %FALSE if there was no
     * previous element, or `iter` didn't actually point to any element
     * in `playlist`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     */
    iterPrev(iter: PlaylistIter): boolean
    /**
     * Prepends a new empty element to `playlist,` and modifies `iter` so
     * it points to it. To fill in values, you need to call
     * totem_pl_playlist_set() or totem_pl_playlist_set_value().
     */
    prepend(): /* iter */ PlaylistIter
    /**
     * Sets the value for `key` in the element pointed by `iter`.
     * @param iter a #TotemPlPlaylistIter pointing to some item in `playlist`
     * @param key key to set the value for
     * @param value #GValue containing the key value
     */
    setValue(iter: PlaylistIter, key: string, value: any): boolean
    /**
     * Returns the number of elements in `playlist`.
     */
    size(): number

    // Class property signals of TotemPlParser-1.0.TotemPlParser.Playlist

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All the fields in the #TotemPlPlaylist structure are private and should never be accessed directly.
 * @class 
 */
export class Playlist extends GObject.Object {

    // Own properties of TotemPlParser-1.0.TotemPlParser.Playlist

    static name: string

    // Constructors of TotemPlParser-1.0.TotemPlParser.Playlist

    constructor(config?: Playlist.ConstructorProperties) 
    /**
     * Creates a new #TotemPlPlaylist object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #TotemPlPlaylist object.
     * @constructor 
     */
    static new(): Playlist
    _init(config?: Playlist.ConstructorProperties): void
}

export interface ParserClass {

    // Own fields of TotemPlParser-1.0.TotemPlParser.ParserClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
    entryParsed: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistStarted: (parser: Parser, uri: string, metadata: GLib.HashTable) => void
    playlistEnded: (parser: Parser, uri: string) => void
}

/**
 * The class structure for the #TotemPlParser type.
 * @record 
 */
export abstract class ParserClass {

    // Own properties of TotemPlParser-1.0.TotemPlParser.ParserClass

    static name: string
}

export interface ParserPrivate {
}

export class ParserPrivate {

    // Own properties of TotemPlParser-1.0.TotemPlParser.ParserPrivate

    static name: string
}

export interface PlaylistClass {

    // Own fields of TotemPlParser-1.0.TotemPlParser.PlaylistClass

    /**
     * the parent class
     * @field 
     */
    parentClass: GObject.ObjectClass
}

/**
 * All the fields in the #TotemPlPlaylistClass structure are private and should never be accessed directly.
 * @record 
 */
export abstract class PlaylistClass {

    // Own properties of TotemPlParser-1.0.TotemPlParser.PlaylistClass

    static name: string
}

export interface PlaylistIter {
}

/**
 * All the fields in the #TotemPlPlaylistIter structure are private and should never be accessed directly.
 * @record 
 */
export class PlaylistIter {

    // Own properties of TotemPlParser-1.0.TotemPlParser.PlaylistIter

    static name: string
}
