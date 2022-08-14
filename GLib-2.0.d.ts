
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GLib-2.0
 */

import type * as GObject from './GObject-2.0.js';

/**
 * Error codes returned by bookmark file parsing.
 */
export enum BookmarkFileError {
    /**
     * URI was ill-formed
     */
    INVALID_URI,
    /**
     * a requested field was not found
     */
    INVALID_VALUE,
    /**
     * a requested application did
     *     not register a bookmark
     */
    APP_NOT_REGISTERED,
    /**
     * a requested URI was not found
     */
    URI_NOT_FOUND,
    /**
     * document was ill formed
     */
    READ,
    /**
     * the text being parsed was
     *     in an unknown encoding
     */
    UNKNOWN_ENCODING,
    /**
     * an error occurred while writing
     */
    WRITE,
    /**
     * requested file was not found
     */
    FILE_NOT_FOUND,
}
/**
 * The hashing algorithm to be used by #GChecksum when performing the
 * digest of some data.
 * 
 * Note that the #GChecksumType enumeration may be extended at a later
 * date to include new hashing algorithm types.
 */
export enum ChecksumType {
    /**
     * Use the MD5 hashing algorithm
     */
    MD5,
    /**
     * Use the SHA-1 hashing algorithm
     */
    SHA1,
    /**
     * Use the SHA-256 hashing algorithm
     */
    SHA256,
    /**
     * Use the SHA-512 hashing algorithm (Since: 2.36)
     */
    SHA512,
    /**
     * Use the SHA-384 hashing algorithm (Since: 2.51)
     */
    SHA384,
}
/**
 * Error codes returned by character set conversion routines.
 */
export enum ConvertError {
    /**
     * Conversion between the requested character
     *     sets is not supported.
     */
    NO_CONVERSION,
    /**
     * Invalid byte sequence in conversion input;
     *    or the character sequence could not be represented in the target
     *    character set.
     */
    ILLEGAL_SEQUENCE,
    /**
     * Conversion failed for some reason.
     */
    FAILED,
    /**
     * Partial character sequence at end of input.
     */
    PARTIAL_INPUT,
    /**
     * URI is invalid.
     */
    BAD_URI,
    /**
     * Pathname is not an absolute path.
     */
    NOT_ABSOLUTE_PATH,
    /**
     * No memory available. Since: 2.40
     */
    NO_MEMORY,
    /**
     * An embedded NUL character is present in
     *     conversion output where a NUL-terminated string is expected.
     *     Since: 2.56
     */
    EMBEDDED_NUL,
}
/**
 * This enumeration isn't used in the API, but may be useful if you need
 * to mark a number as a day, month, or year.
 */
export enum DateDMY {
    /**
     * a day
     */
    DAY,
    /**
     * a month
     */
    MONTH,
    /**
     * a year
     */
    YEAR,
}
/**
 * Enumeration representing a month; values are %G_DATE_JANUARY,
 * %G_DATE_FEBRUARY, etc. %G_DATE_BAD_MONTH is the invalid value.
 */
export enum DateMonth {
    /**
     * invalid value
     */
    BAD_MONTH,
    /**
     * January
     */
    JANUARY,
    /**
     * February
     */
    FEBRUARY,
    /**
     * March
     */
    MARCH,
    /**
     * April
     */
    APRIL,
    /**
     * May
     */
    MAY,
    /**
     * June
     */
    JUNE,
    /**
     * July
     */
    JULY,
    /**
     * August
     */
    AUGUST,
    /**
     * September
     */
    SEPTEMBER,
    /**
     * October
     */
    OCTOBER,
    /**
     * November
     */
    NOVEMBER,
    /**
     * December
     */
    DECEMBER,
}
/**
 * Enumeration representing a day of the week; %G_DATE_MONDAY,
 * %G_DATE_TUESDAY, etc. %G_DATE_BAD_WEEKDAY is an invalid weekday.
 */
export enum DateWeekday {
    /**
     * invalid value
     */
    BAD_WEEKDAY,
    /**
     * Monday
     */
    MONDAY,
    /**
     * Tuesday
     */
    TUESDAY,
    /**
     * Wednesday
     */
    WEDNESDAY,
    /**
     * Thursday
     */
    THURSDAY,
    /**
     * Friday
     */
    FRIDAY,
    /**
     * Saturday
     */
    SATURDAY,
    /**
     * Sunday
     */
    SUNDAY,
}
/**
 * The possible errors, used in the `v_error` field
 * of #GTokenValue, when the token is a %G_TOKEN_ERROR.
 */
export enum ErrorType {
    /**
     * unknown error
     */
    UNKNOWN,
    /**
     * unexpected end of file
     */
    UNEXP_EOF,
    /**
     * unterminated string constant
     */
    UNEXP_EOF_IN_STRING,
    /**
     * unterminated comment
     */
    UNEXP_EOF_IN_COMMENT,
    /**
     * non-digit character in a number
     */
    NON_DIGIT_IN_CONST,
    /**
     * digit beyond radix in a number
     */
    DIGIT_RADIX,
    /**
     * non-decimal floating point number
     */
    FLOAT_RADIX,
    /**
     * malformed floating point number
     */
    FLOAT_MALFORMED,
}
/**
 * Values corresponding to `errno` codes returned from file operations
 * on UNIX. Unlike `errno` codes, GFileError values are available on
 * all systems, even Windows. The exact meaning of each code depends
 * on what sort of file operation you were performing; the UNIX
 * documentation gives more details. The following error code descriptions
 * come from the GNU C Library manual, and are under the copyright
 * of that manual.
 * 
 * It's not very portable to make detailed assumptions about exactly
 * which errors will be returned from a given operation. Some errors
 * don't occur on some systems, etc., sometimes there are subtle
 * differences in when a system will report a given error, etc.
 */
export enum FileError {
    /**
     * Operation not permitted; only the owner of
     *     the file (or other resource) or processes with special privileges
     *     can perform the operation.
     */
    EXIST,
    /**
     * File is a directory; you cannot open a directory
     *     for writing, or create or remove hard links to it.
     */
    ISDIR,
    /**
     * Permission denied; the file permissions do not
     *     allow the attempted operation.
     */
    ACCES,
    /**
     * Filename too long.
     */
    NAMETOOLONG,
    /**
     * No such file or directory. This is a "file
     *     doesn't exist" error for ordinary files that are referenced in
     *     contexts where they are expected to already exist.
     */
    NOENT,
    /**
     * A file that isn't a directory was specified when
     *     a directory is required.
     */
    NOTDIR,
    /**
     * No such device or address. The system tried to
     *     use the device represented by a file you specified, and it
     *     couldn't find the device. This can mean that the device file was
     *     installed incorrectly, or that the physical device is missing or
     *     not correctly attached to the computer.
     */
    NXIO,
    /**
     * The underlying file system of the specified file
     *     does not support memory mapping.
     */
    NODEV,
    /**
     * The directory containing the new link can't be
     *     modified because it's on a read-only file system.
     */
    ROFS,
    /**
     * Text file busy.
     */
    TXTBSY,
    /**
     * You passed in a pointer to bad memory.
     *     (GLib won't reliably return this, don't pass in pointers to bad
     *     memory.)
     */
    FAULT,
    /**
     * Too many levels of symbolic links were encountered
     *     in looking up a file name. This often indicates a cycle of symbolic
     *     links.
     */
    LOOP,
    /**
     * No space left on device; write operation on a
     *     file failed because the disk is full.
     */
    NOSPC,
    /**
     * No memory available. The system cannot allocate
     *     more virtual memory because its capacity is full.
     */
    NOMEM,
    /**
     * The current process has too many files open and
     *     can't open any more. Duplicate descriptors do count toward this
     *     limit.
     */
    MFILE,
    /**
     * There are too many distinct file openings in the
     *     entire system.
     */
    NFILE,
    /**
     * Bad file descriptor; for example, I/O on a
     *     descriptor that has been closed or reading from a descriptor open
     *     only for writing (or vice versa).
     */
    BADF,
    /**
     * Invalid argument. This is used to indicate
     *     various kinds of problems with passing the wrong argument to a
     *     library function.
     */
    INVAL,
    /**
     * Broken pipe; there is no process reading from the
     *     other end of a pipe. Every library function that returns this
     *     error code also generates a 'SIGPIPE' signal; this signal
     *     terminates the program if not handled or blocked. Thus, your
     *     program will never actually see this code unless it has handled
     *     or blocked 'SIGPIPE'.
     */
    PIPE,
    /**
     * Resource temporarily unavailable; the call might
     *     work if you try again later.
     */
    AGAIN,
    /**
     * Interrupted function call; an asynchronous signal
     *     occurred and prevented completion of the call. When this
     *     happens, you should try the call again.
     */
    INTR,
    /**
     * Input/output error; usually used for physical read
     *    or write errors. i.e. the disk or other physical device hardware
     *    is returning errors.
     */
    IO,
    /**
     * Operation not permitted; only the owner of the
     *    file (or other resource) or processes with special privileges can
     *    perform the operation.
     */
    PERM,
    /**
     * Function not implemented; this indicates that
     *    the system is missing some functionality.
     */
    NOSYS,
    /**
     * Does not correspond to a UNIX error code; this
     *    is the standard "failed for unspecified reason" error code present
     *    in all #GError error code enumerations. Returned if no specific
     *    code applies.
     */
    FAILED,
}
/**
 * Error codes returned by #GIOChannel operations.
 */
export enum IOChannelError {
    /**
     * File too large.
     */
    FBIG,
    /**
     * Invalid argument.
     */
    INVAL,
    /**
     * IO error.
     */
    IO,
    /**
     * File is a directory.
     */
    ISDIR,
    /**
     * No space left on device.
     */
    NOSPC,
    /**
     * No such device or address.
     */
    NXIO,
    /**
     * Value too large for defined datatype.
     */
    OVERFLOW,
    /**
     * Broken pipe.
     */
    PIPE,
    /**
     * Some other error.
     */
    FAILED,
}
/**
 * #GIOError is only used by the deprecated functions
 * g_io_channel_read(), g_io_channel_write(), and g_io_channel_seek().
 */
export enum IOError {
    /**
     * no error
     */
    NONE,
    /**
     * an EAGAIN error occurred
     */
    AGAIN,
    /**
     * an EINVAL error occurred
     */
    INVAL,
    /**
     * another error occurred
     */
    UNKNOWN,
}
/**
 * Statuses returned by most of the #GIOFuncs functions.
 */
export enum IOStatus {
    /**
     * An error occurred.
     */
    ERROR,
    /**
     * Success.
     */
    NORMAL,
    /**
     * End of file.
     */
    EOF,
    /**
     * Resource temporarily unavailable.
     */
    AGAIN,
}
/**
 * Error codes returned by key file parsing.
 */
export enum KeyFileError {
    /**
     * the text being parsed was in
     *   an unknown encoding
     */
    UNKNOWN_ENCODING,
    /**
     * document was ill-formed
     */
    PARSE,
    /**
     * the file was not found
     */
    NOT_FOUND,
    /**
     * a requested key was not found
     */
    KEY_NOT_FOUND,
    /**
     * a requested group was not found
     */
    GROUP_NOT_FOUND,
    /**
     * a value could not be parsed
     */
    INVALID_VALUE,
}
/**
 * Return values from #GLogWriterFuncs to indicate whether the given log entry
 * was successfully handled by the writer, or whether there was an error in
 * handling it (and hence a fallback writer should be used).
 * 
 * If a #GLogWriterFunc ignores a log entry, it should return
 * %G_LOG_WRITER_HANDLED.
 */
export enum LogWriterOutput {
    /**
     * Log writer has handled the log entry.
     */
    HANDLED,
    /**
     * Log writer could not handle the log entry.
     */
    UNHANDLED,
}
/**
 * Error codes returned by markup parsing.
 */
export enum MarkupError {
    /**
     * text being parsed was not valid UTF-8
     */
    BAD_UTF8,
    /**
     * document contained nothing, or only whitespace
     */
    EMPTY,
    /**
     * document was ill-formed
     */
    PARSE,
    /**
     * error should be set by #GMarkupParser
     *     functions; element wasn't known
     */
    UNKNOWN_ELEMENT,
    /**
     * error should be set by #GMarkupParser
     *     functions; attribute wasn't known
     */
    UNKNOWN_ATTRIBUTE,
    /**
     * error should be set by #GMarkupParser
     *     functions; content was invalid
     */
    INVALID_CONTENT,
    /**
     * error should be set by #GMarkupParser
     *     functions; a required attribute was missing
     */
    MISSING_ATTRIBUTE,
}
/**
 * Defines how a Unicode string is transformed in a canonical
 * form, standardizing such issues as whether a character with
 * an accent is represented as a base character and combining
 * accent or as a single precomposed character. Unicode strings
 * should generally be normalized before comparing them.
 */
export enum NormalizeMode {
    /**
     * standardize differences that do not affect the
     *     text content, such as the above-mentioned accent representation
     */
    DEFAULT,
    /**
     * another name for %G_NORMALIZE_DEFAULT
     */
    NFD,
    /**
     * like %G_NORMALIZE_DEFAULT, but with
     *     composed forms rather than a maximally decomposed form
     */
    DEFAULT_COMPOSE,
    /**
     * another name for %G_NORMALIZE_DEFAULT_COMPOSE
     */
    NFC,
    /**
     * beyond %G_NORMALIZE_DEFAULT also standardize the
     *     "compatibility" characters in Unicode, such as SUPERSCRIPT THREE
     *     to the standard forms (in this case DIGIT THREE). Formatting
     *     information may be lost but for most text operations such
     *     characters should be considered the same
     */
    ALL,
    /**
     * another name for %G_NORMALIZE_ALL
     */
    NFKD,
    /**
     * like %G_NORMALIZE_ALL, but with composed
     *     forms rather than a maximally decomposed form
     */
    ALL_COMPOSE,
    /**
     * another name for %G_NORMALIZE_ALL_COMPOSE
     */
    NFKC,
}
/**
 * Error codes returned by functions converting a string to a number.
 */
export enum NumberParserError {
    /**
     * String was not a valid number.
     */
    INVALID,
    /**
     * String was a number, but out of bounds.
     */
    OUT_OF_BOUNDS,
}
/**
 * The possible statuses of a one-time initialization function
 * controlled by a #GOnce struct.
 */
export enum OnceStatus {
    /**
     * the function has not been called yet.
     */
    NOTCALLED,
    /**
     * the function call is currently in progress.
     */
    PROGRESS,
    /**
     * the function has been called.
     */
    READY,
}
/**
 * The #GOptionArg enum values determine which type of extra argument the
 * options expect to find. If an option expects an extra argument, it can
 * be specified in several ways; with a short option: `-x arg`, with a long
 * option: `--name arg` or combined in a single argument: `--name=arg`.
 */
export enum OptionArg {
    /**
     * No extra argument. This is useful for simple flags.
     */
    NONE,
    /**
     * The option takes a UTF-8 string argument.
     */
    STRING,
    /**
     * The option takes an integer argument.
     */
    INT,
    /**
     * The option provides a callback (of type
     *     #GOptionArgFunc) to parse the extra argument.
     */
    CALLBACK,
    /**
     * The option takes a filename as argument, which will
     *        be in the GLib filename encoding rather than UTF-8.
     */
    FILENAME,
    /**
     * The option takes a string argument, multiple
     *     uses of the option are collected into an array of strings.
     */
    STRING_ARRAY,
    /**
     * The option takes a filename as argument,
     *     multiple uses of the option are collected into an array of strings.
     */
    FILENAME_ARRAY,
    /**
     * The option takes a double argument. The argument
     *     can be formatted either for the user's locale or for the "C" locale.
     *     Since 2.12
     */
    DOUBLE,
    /**
     * The option takes a 64-bit integer. Like
     *     %G_OPTION_ARG_INT but for larger numbers. The number can be in
     *     decimal base, or in hexadecimal (when prefixed with `0x`, for
     *     example, `0xffffffff`). Since 2.12
     */
    INT64,
}
/**
 * Error codes returned by option parsing.
 */
export enum OptionError {
    /**
     * An option was not known to the parser.
     *  This error will only be reported, if the parser hasn't been instructed
     *  to ignore unknown options, see g_option_context_set_ignore_unknown_options().
     */
    UNKNOWN_OPTION,
    /**
     * A value couldn't be parsed.
     */
    BAD_VALUE,
    /**
     * A #GOptionArgFunc callback failed.
     */
    FAILED,
}
/**
 * Error codes returned by regular expressions functions.
 */
export enum RegexError {
    /**
     * Compilation of the regular expression failed.
     */
    COMPILE,
    /**
     * Optimization of the regular expression failed.
     */
    OPTIMIZE,
    /**
     * Replacement failed due to an ill-formed replacement
     *     string.
     */
    REPLACE,
    /**
     * The match process failed.
     */
    MATCH,
    /**
     * Internal error of the regular expression engine.
     *     Since 2.16
     */
    INTERNAL,
    /**
     * "\\" at end of pattern. Since 2.16
     */
    STRAY_BACKSLASH,
    /**
     * "\\c" at end of pattern. Since 2.16
     */
    MISSING_CONTROL_CHAR,
    /**
     * Unrecognized character follows "\\".
     *     Since 2.16
     */
    UNRECOGNIZED_ESCAPE,
    /**
     * Numbers out of order in "{}"
     *     quantifier. Since 2.16
     */
    QUANTIFIERS_OUT_OF_ORDER,
    /**
     * Number too big in "{}" quantifier.
     *     Since 2.16
     */
    QUANTIFIER_TOO_BIG,
    /**
     * Missing terminating "]" for
     *     character class. Since 2.16
     */
    UNTERMINATED_CHARACTER_CLASS,
    /**
     * Invalid escape sequence
     *     in character class. Since 2.16
     */
    INVALID_ESCAPE_IN_CHARACTER_CLASS,
    /**
     * Range out of order in character class.
     *     Since 2.16
     */
    RANGE_OUT_OF_ORDER,
    /**
     * Nothing to repeat. Since 2.16
     */
    NOTHING_TO_REPEAT,
    /**
     * Unrecognized character after "(?",
     *     "(?<" or "(?P". Since 2.16
     */
    UNRECOGNIZED_CHARACTER,
    /**
     * POSIX named classes are
     *     supported only within a class. Since 2.16
     */
    POSIX_NAMED_CLASS_OUTSIDE_CLASS,
    /**
     * Missing terminating ")" or ")"
     *     without opening "(". Since 2.16
     */
    UNMATCHED_PARENTHESIS,
    /**
     * Reference to non-existent
     *     subpattern. Since 2.16
     */
    INEXISTENT_SUBPATTERN_REFERENCE,
    /**
     * Missing terminating ")" after comment.
     *     Since 2.16
     */
    UNTERMINATED_COMMENT,
    /**
     * Regular expression too large.
     *     Since 2.16
     */
    EXPRESSION_TOO_LARGE,
    /**
     * Failed to get memory. Since 2.16
     */
    MEMORY_ERROR,
    /**
     * Lookbehind assertion is not
     *     fixed length. Since 2.16
     */
    VARIABLE_LENGTH_LOOKBEHIND,
    /**
     * Malformed number or name after "(?(".
     *     Since 2.16
     */
    MALFORMED_CONDITION,
    /**
     * Conditional group contains
     *     more than two branches. Since 2.16
     */
    TOO_MANY_CONDITIONAL_BRANCHES,
    /**
     * Assertion expected after "(?(".
     *     Since 2.16
     */
    ASSERTION_EXPECTED,
    /**
     * Unknown POSIX class name.
     *     Since 2.16
     */
    UNKNOWN_POSIX_CLASS_NAME,
    /**
     * POSIX collating
     *     elements are not supported. Since 2.16
     */
    POSIX_COLLATING_ELEMENTS_NOT_SUPPORTED,
    /**
     * Character value in "\\x{...}" sequence
     *     is too large. Since 2.16
     */
    HEX_CODE_TOO_LARGE,
    /**
     * Invalid condition "(?(0)". Since 2.16
     */
    INVALID_CONDITION,
    /**
     * \\C not allowed in
     *     lookbehind assertion. Since 2.16
     */
    SINGLE_BYTE_MATCH_IN_LOOKBEHIND,
    /**
     * Recursive call could loop indefinitely.
     *     Since 2.16
     */
    INFINITE_LOOP,
    /**
     * Missing terminator
     *     in subpattern name. Since 2.16
     */
    MISSING_SUBPATTERN_NAME_TERMINATOR,
    /**
     * Two named subpatterns have
     *     the same name. Since 2.16
     */
    DUPLICATE_SUBPATTERN_NAME,
    /**
     * Malformed "\\P" or "\\p" sequence.
     *     Since 2.16
     */
    MALFORMED_PROPERTY,
    /**
     * Unknown property name after "\\P" or
     *     "\\p". Since 2.16
     */
    UNKNOWN_PROPERTY,
    /**
     * Subpattern name is too long
     *     (maximum 32 characters). Since 2.16
     */
    SUBPATTERN_NAME_TOO_LONG,
    /**
     * Too many named subpatterns (maximum
     *     10,000). Since 2.16
     */
    TOO_MANY_SUBPATTERNS,
    /**
     * Octal value is greater than "\\377".
     *     Since 2.16
     */
    INVALID_OCTAL_VALUE,
    /**
     * "DEFINE" group contains more
     *     than one branch. Since 2.16
     */
    TOO_MANY_BRANCHES_IN_DEFINE,
    /**
     * Repeating a "DEFINE" group is not allowed.
     *     This error is never raised. Since: 2.16 Deprecated: 2.34
     */
    DEFINE_REPETION,
    /**
     * Inconsistent newline options.
     *     Since 2.16
     */
    INCONSISTENT_NEWLINE_OPTIONS,
    /**
     * "\\g" is not followed by a braced,
     *      angle-bracketed, or quoted name or number, or by a plain number. Since: 2.16
     */
    MISSING_BACK_REFERENCE,
    /**
     * relative reference must not be zero. Since: 2.34
     */
    INVALID_RELATIVE_REFERENCE,
    /**
     * the backtracing
     *     control verb used does not allow an argument. Since: 2.34
     */
    BACKTRACKING_CONTROL_VERB_ARGUMENT_FORBIDDEN,
    /**
     * unknown backtracing
     *     control verb. Since: 2.34
     */
    UNKNOWN_BACKTRACKING_CONTROL_VERB,
    /**
     * number is too big in escape sequence. Since: 2.34
     */
    NUMBER_TOO_BIG,
    /**
     * Missing subpattern name. Since: 2.34
     */
    MISSING_SUBPATTERN_NAME,
    /**
     * Missing digit. Since 2.34
     */
    MISSING_DIGIT,
    /**
     * In JavaScript compatibility mode,
     *     "[" is an invalid data character. Since: 2.34
     */
    INVALID_DATA_CHARACTER,
    /**
     * different names for subpatterns of the
     *     same number are not allowed. Since: 2.34
     */
    EXTRA_SUBPATTERN_NAME,
    /**
     * the backtracing control
     *     verb requires an argument. Since: 2.34
     */
    BACKTRACKING_CONTROL_VERB_ARGUMENT_REQUIRED,
    /**
     * "\\c" must be followed by an ASCII
     *     character. Since: 2.34
     */
    INVALID_CONTROL_CHAR,
    /**
     * "\\k" is not followed by a braced, angle-bracketed, or
     *     quoted name. Since: 2.34
     */
    MISSING_NAME,
    /**
     * "\\N" is not supported in a class. Since: 2.34
     */
    NOT_SUPPORTED_IN_CLASS,
    /**
     * too many forward references. Since: 2.34
     */
    TOO_MANY_FORWARD_REFERENCES,
    /**
     * the name is too long in "(*MARK)", "(*PRUNE)",
     *     "(*SKIP)", or "(*THEN)". Since: 2.34
     */
    NAME_TOO_LONG,
    /**
     * the character value in the \\u sequence is
     *     too large. Since: 2.34
     */
    CHARACTER_VALUE_TOO_LARGE,
}
/**
 * An enumeration specifying the base position for a
 * g_io_channel_seek_position() operation.
 */
export enum SeekType {
    /**
     * the current position in the file.
     */
    CUR,
    /**
     * the start of the file.
     */
    SET,
    /**
     * the end of the file.
     */
    END,
}
/**
 * Error codes returned by shell functions.
 */
export enum ShellError {
    /**
     * Mismatched or otherwise mangled quoting.
     */
    BAD_QUOTING,
    /**
     * String to be parsed was empty.
     */
    EMPTY_STRING,
    /**
     * Some other error.
     */
    FAILED,
}
export enum SliceConfig {
    ALWAYS_MALLOC,
    BYPASS_MAGAZINES,
    WORKING_SET_MSECS,
    COLOR_INCREMENT,
    CHUNK_SIZES,
    CONTENTION_COUNTER,
}
/**
 * Error codes returned by spawning processes.
 */
export enum SpawnError {
    /**
     * Fork failed due to lack of memory.
     */
    FORK,
    /**
     * Read or select on pipes failed.
     */
    READ,
    /**
     * Changing to working directory failed.
     */
    CHDIR,
    /**
     * execv() returned `EACCES`
     */
    ACCES,
    /**
     * execv() returned `EPERM`
     */
    PERM,
    /**
     * execv() returned `E2BIG`
     */
    TOO_BIG,
    /**
     * deprecated alias for %G_SPAWN_ERROR_TOO_BIG (deprecated since GLib 2.32)
     */
    TODO_2BIG,
    /**
     * execv() returned `ENOEXEC`
     */
    NOEXEC,
    /**
     * execv() returned `ENAMETOOLONG`
     */
    NAMETOOLONG,
    /**
     * execv() returned `ENOENT`
     */
    NOENT,
    /**
     * execv() returned `ENOMEM`
     */
    NOMEM,
    /**
     * execv() returned `ENOTDIR`
     */
    NOTDIR,
    /**
     * execv() returned `ELOOP`
     */
    LOOP,
    /**
     * execv() returned `ETXTBUSY`
     */
    TXTBUSY,
    /**
     * execv() returned `EIO`
     */
    IO,
    /**
     * execv() returned `ENFILE`
     */
    NFILE,
    /**
     * execv() returned `EMFILE`
     */
    MFILE,
    /**
     * execv() returned `EINVAL`
     */
    INVAL,
    /**
     * execv() returned `EISDIR`
     */
    ISDIR,
    /**
     * execv() returned `ELIBBAD`
     */
    LIBBAD,
    /**
     * Some other fatal failure,
     *   `error->message` should explain.
     */
    FAILED,
}
/**
 * The type of file to return the filename for, when used with
 * g_test_build_filename().
 * 
 * These two options correspond rather directly to the 'dist' and
 * 'built' terminology that automake uses and are explicitly used to
 * distinguish between the 'srcdir' and 'builddir' being separate.  All
 * files in your project should either be dist (in the
 * `EXTRA_DIST` or `dist_schema_DATA`
 * sense, in which case they will always be in the srcdir) or built (in
 * the `BUILT_SOURCES` sense, in which case they will
 * always be in the builddir).
 * 
 * Note: as a general rule of automake, files that are generated only as
 * part of the build-from-git process (but then are distributed with the
 * tarball) always go in srcdir (even if doing a srcdir != builddir
 * build from git) and are considered as distributed files.
 */
export enum TestFileType {
    /**
     * a file that was included in the distribution tarball
     */
    DIST,
    /**
     * a file that was built on the compiling machine
     */
    BUILT,
}
export enum TestLogType {
    NONE,
    ERROR,
    START_BINARY,
    LIST_CASE,
    SKIP_CASE,
    START_CASE,
    STOP_CASE,
    MIN_RESULT,
    MAX_RESULT,
    MESSAGE,
    START_SUITE,
    STOP_SUITE,
}
export enum TestResult {
    SUCCESS,
    SKIPPED,
    FAILURE,
    INCOMPLETE,
}
/**
 * Possible errors of thread related functions.
 */
export enum ThreadError {
    /**
     * a thread couldn't be created due to resource
     *                        shortage. Try again later.
     */
    THREAD_ERROR_AGAIN,
}
/**
 * Disambiguates a given time in two ways.
 * 
 * First, specifies if the given time is in universal or local time.
 * 
 * Second, if the time is in local time, specifies if it is local
 * standard time or local daylight time.  This is important for the case
 * where the same local time occurs twice (during daylight savings time
 * transitions, for example).
 */
export enum TimeType {
    /**
     * the time is in local standard time
     */
    STANDARD,
    /**
     * the time is in local daylight time
     */
    DAYLIGHT,
    /**
     * the time is in UTC
     */
    UNIVERSAL,
}
/**
 * The possible types of token returned from each
 * g_scanner_get_next_token() call.
 */
export enum TokenType {
    /**
     * the end of the file
     */
    EOF,
    /**
     * a '(' character
     */
    LEFT_PAREN,
    /**
     * a ')' character
     */
    RIGHT_PAREN,
    /**
     * a '{' character
     */
    LEFT_CURLY,
    /**
     * a '}' character
     */
    RIGHT_CURLY,
    /**
     * a '[' character
     */
    LEFT_BRACE,
    /**
     * a ']' character
     */
    RIGHT_BRACE,
    /**
     * a '=' character
     */
    EQUAL_SIGN,
    /**
     * a ',' character
     */
    COMMA,
    /**
     * not a token
     */
    NONE,
    /**
     * an error occurred
     */
    ERROR,
    /**
     * a character
     */
    CHAR,
    /**
     * a binary integer
     */
    BINARY,
    /**
     * an octal integer
     */
    OCTAL,
    /**
     * an integer
     */
    INT,
    /**
     * a hex integer
     */
    HEX,
    /**
     * a floating point number
     */
    FLOAT,
    /**
     * a string
     */
    STRING,
    /**
     * a symbol
     */
    SYMBOL,
    /**
     * an identifier
     */
    IDENTIFIER,
    /**
     * a null identifier
     */
    IDENTIFIER_NULL,
    /**
     * one line comment
     */
    COMMENT_SINGLE,
    /**
     * multi line comment
     */
    COMMENT_MULTI,
}
/**
 * Specifies the type of traversal performed by g_tree_traverse(),
 * g_node_traverse() and g_node_find(). The different orders are
 * illustrated here:
 * - In order: A, B, C, D, E, F, G, H, I
 *   ![](Sorted_binary_tree_inorder.svg)
 * - Pre order: F, B, A, D, C, E, G, I, H
 *   ![](Sorted_binary_tree_preorder.svg)
 * - Post order: A, C, E, D, B, H, I, G, F
 *   ![](Sorted_binary_tree_postorder.svg)
 * - Level order: F, B, G, A, D, I, C, E, H
 *   ![](Sorted_binary_tree_breadth-first_traversal.svg)
 */
export enum TraverseType {
    /**
     * vists a node's left child first, then the node itself,
     *              then its right child. This is the one to use if you
     *              want the output sorted according to the compare
     *              function.
     */
    IN_ORDER,
    /**
     * visits a node, then its children.
     */
    PRE_ORDER,
    /**
     * visits the node's children, then the node itself.
     */
    POST_ORDER,
    /**
     * is not implemented for
     *              [balanced binary trees][glib-Balanced-Binary-Trees].
     *              For [n-ary trees][glib-N-ary-Trees], it
     *              vists the root node first, then its children, then
     *              its grandchildren, and so on. Note that this is less
     *              efficient than the other orders.
     */
    LEVEL_ORDER,
}
/**
 * These are the possible line break classifications.
 * 
 * Since new unicode versions may add new types here, applications should be ready
 * to handle unknown values. They may be regarded as %G_UNICODE_BREAK_UNKNOWN.
 * 
 * See [Unicode Line Breaking Algorithm](http://www.unicode.org/unicode/reports/tr14/).
 */
export enum UnicodeBreakType {
    /**
     * Mandatory Break (BK)
     */
    MANDATORY,
    /**
     * Carriage Return (CR)
     */
    CARRIAGE_RETURN,
    /**
     * Line Feed (LF)
     */
    LINE_FEED,
    /**
     * Attached Characters and Combining Marks (CM)
     */
    COMBINING_MARK,
    /**
     * Surrogates (SG)
     */
    SURROGATE,
    /**
     * Zero Width Space (ZW)
     */
    ZERO_WIDTH_SPACE,
    /**
     * Inseparable (IN)
     */
    INSEPARABLE,
    /**
     * Non-breaking ("Glue") (GL)
     */
    NON_BREAKING_GLUE,
    /**
     * Contingent Break Opportunity (CB)
     */
    CONTINGENT,
    /**
     * Space (SP)
     */
    SPACE,
    /**
     * Break Opportunity After (BA)
     */
    AFTER,
    /**
     * Break Opportunity Before (BB)
     */
    BEFORE,
    /**
     * Break Opportunity Before and After (B2)
     */
    BEFORE_AND_AFTER,
    /**
     * Hyphen (HY)
     */
    HYPHEN,
    /**
     * Nonstarter (NS)
     */
    NON_STARTER,
    /**
     * Opening Punctuation (OP)
     */
    OPEN_PUNCTUATION,
    /**
     * Closing Punctuation (CL)
     */
    CLOSE_PUNCTUATION,
    /**
     * Ambiguous Quotation (QU)
     */
    QUOTATION,
    /**
     * Exclamation/Interrogation (EX)
     */
    EXCLAMATION,
    /**
     * Ideographic (ID)
     */
    IDEOGRAPHIC,
    /**
     * Numeric (NU)
     */
    NUMERIC,
    /**
     * Infix Separator (Numeric) (IS)
     */
    INFIX_SEPARATOR,
    /**
     * Symbols Allowing Break After (SY)
     */
    SYMBOL,
    /**
     * Ordinary Alphabetic and Symbol Characters (AL)
     */
    ALPHABETIC,
    /**
     * Prefix (Numeric) (PR)
     */
    PREFIX,
    /**
     * Postfix (Numeric) (PO)
     */
    POSTFIX,
    /**
     * Complex Content Dependent (South East Asian) (SA)
     */
    COMPLEX_CONTEXT,
    /**
     * Ambiguous (Alphabetic or Ideographic) (AI)
     */
    AMBIGUOUS,
    /**
     * Unknown (XX)
     */
    UNKNOWN,
    /**
     * Next Line (NL)
     */
    NEXT_LINE,
    /**
     * Word Joiner (WJ)
     */
    WORD_JOINER,
    /**
     * Hangul L Jamo (JL)
     */
    HANGUL_L_JAMO,
    /**
     * Hangul V Jamo (JV)
     */
    HANGUL_V_JAMO,
    /**
     * Hangul T Jamo (JT)
     */
    HANGUL_T_JAMO,
    /**
     * Hangul LV Syllable (H2)
     */
    HANGUL_LV_SYLLABLE,
    /**
     * Hangul LVT Syllable (H3)
     */
    HANGUL_LVT_SYLLABLE,
    /**
     * Closing Parenthesis (CP). Since 2.28. Deprecated: 2.70: Use %G_UNICODE_BREAK_CLOSE_PARENTHESIS instead.
     */
    CLOSE_PARANTHESIS,
    /**
     * Closing Parenthesis (CP). Since 2.70
     */
    CLOSE_PARENTHESIS,
    /**
     * Conditional Japanese Starter (CJ). Since: 2.32
     */
    CONDITIONAL_JAPANESE_STARTER,
    /**
     * Hebrew Letter (HL). Since: 2.32
     */
    HEBREW_LETTER,
    /**
     * Regional Indicator (RI). Since: 2.36
     */
    REGIONAL_INDICATOR,
    /**
     * Emoji Base (EB). Since: 2.50
     */
    EMOJI_BASE,
    /**
     * Emoji Modifier (EM). Since: 2.50
     */
    EMOJI_MODIFIER,
    /**
     * Zero Width Joiner (ZWJ). Since: 2.50
     */
    ZERO_WIDTH_JOINER,
}
/**
 * The #GUnicodeScript enumeration identifies different writing
 * systems. The values correspond to the names as defined in the
 * Unicode standard. The enumeration has been added in GLib 2.14,
 * and is interchangeable with #PangoScript.
 * 
 * Note that new types may be added in the future. Applications
 * should be ready to handle unknown values.
 * See [Unicode Standard Annex #24: Script names](http://www.unicode.org/reports/tr24/).
 */
export enum UnicodeScript {
    /**
     * a value never returned from g_unichar_get_script()
     */
    INVALID_CODE,
    /**
     * a character used by multiple different scripts
     */
    COMMON,
    /**
     * a mark glyph that takes its script from the
     *                               base glyph to which it is attached
     */
    INHERITED,
    /**
     * Arabic
     */
    ARABIC,
    /**
     * Armenian
     */
    ARMENIAN,
    /**
     * Bengali
     */
    BENGALI,
    /**
     * Bopomofo
     */
    BOPOMOFO,
    /**
     * Cherokee
     */
    CHEROKEE,
    /**
     * Coptic
     */
    COPTIC,
    /**
     * Cyrillic
     */
    CYRILLIC,
    /**
     * Deseret
     */
    DESERET,
    /**
     * Devanagari
     */
    DEVANAGARI,
    /**
     * Ethiopic
     */
    ETHIOPIC,
    /**
     * Georgian
     */
    GEORGIAN,
    /**
     * Gothic
     */
    GOTHIC,
    /**
     * Greek
     */
    GREEK,
    /**
     * Gujarati
     */
    GUJARATI,
    /**
     * Gurmukhi
     */
    GURMUKHI,
    /**
     * Han
     */
    HAN,
    /**
     * Hangul
     */
    HANGUL,
    /**
     * Hebrew
     */
    HEBREW,
    /**
     * Hiragana
     */
    HIRAGANA,
    /**
     * Kannada
     */
    KANNADA,
    /**
     * Katakana
     */
    KATAKANA,
    /**
     * Khmer
     */
    KHMER,
    /**
     * Lao
     */
    LAO,
    /**
     * Latin
     */
    LATIN,
    /**
     * Malayalam
     */
    MALAYALAM,
    /**
     * Mongolian
     */
    MONGOLIAN,
    /**
     * Myanmar
     */
    MYANMAR,
    /**
     * Ogham
     */
    OGHAM,
    /**
     * Old Italic
     */
    OLD_ITALIC,
    /**
     * Oriya
     */
    ORIYA,
    /**
     * Runic
     */
    RUNIC,
    /**
     * Sinhala
     */
    SINHALA,
    /**
     * Syriac
     */
    SYRIAC,
    /**
     * Tamil
     */
    TAMIL,
    /**
     * Telugu
     */
    TELUGU,
    /**
     * Thaana
     */
    THAANA,
    /**
     * Thai
     */
    THAI,
    /**
     * Tibetan
     */
    TIBETAN,
    /**
     * Canadian Aboriginal
     */
    CANADIAN_ABORIGINAL,
    /**
     * Yi
     */
    YI,
    /**
     * Tagalog
     */
    TAGALOG,
    /**
     * Hanunoo
     */
    HANUNOO,
    /**
     * Buhid
     */
    BUHID,
    /**
     * Tagbanwa
     */
    TAGBANWA,
    /**
     * Braille
     */
    BRAILLE,
    /**
     * Cypriot
     */
    CYPRIOT,
    /**
     * Limbu
     */
    LIMBU,
    /**
     * Osmanya
     */
    OSMANYA,
    /**
     * Shavian
     */
    SHAVIAN,
    /**
     * Linear B
     */
    LINEAR_B,
    /**
     * Tai Le
     */
    TAI_LE,
    /**
     * Ugaritic
     */
    UGARITIC,
    /**
     * New Tai Lue
     */
    NEW_TAI_LUE,
    /**
     * Buginese
     */
    BUGINESE,
    /**
     * Glagolitic
     */
    GLAGOLITIC,
    /**
     * Tifinagh
     */
    TIFINAGH,
    /**
     * Syloti Nagri
     */
    SYLOTI_NAGRI,
    /**
     * Old Persian
     */
    OLD_PERSIAN,
    /**
     * Kharoshthi
     */
    KHAROSHTHI,
    /**
     * an unassigned code point
     */
    UNKNOWN,
    /**
     * Balinese
     */
    BALINESE,
    /**
     * Cuneiform
     */
    CUNEIFORM,
    /**
     * Phoenician
     */
    PHOENICIAN,
    /**
     * Phags-pa
     */
    PHAGS_PA,
    /**
     * N'Ko
     */
    NKO,
    /**
     * Kayah Li. Since 2.16.3
     */
    KAYAH_LI,
    /**
     * Lepcha. Since 2.16.3
     */
    LEPCHA,
    /**
     * Rejang. Since 2.16.3
     */
    REJANG,
    /**
     * Sundanese. Since 2.16.3
     */
    SUNDANESE,
    /**
     * Saurashtra. Since 2.16.3
     */
    SAURASHTRA,
    /**
     * Cham. Since 2.16.3
     */
    CHAM,
    /**
     * Ol Chiki. Since 2.16.3
     */
    OL_CHIKI,
    /**
     * Vai. Since 2.16.3
     */
    VAI,
    /**
     * Carian. Since 2.16.3
     */
    CARIAN,
    /**
     * Lycian. Since 2.16.3
     */
    LYCIAN,
    /**
     * Lydian. Since 2.16.3
     */
    LYDIAN,
    /**
     * Avestan. Since 2.26
     */
    AVESTAN,
    /**
     * Bamum. Since 2.26
     */
    BAMUM,
    /**
     * Egyptian Hieroglpyhs. Since 2.26
     */
    EGYPTIAN_HIEROGLYPHS,
    /**
     * Imperial Aramaic. Since 2.26
     */
    IMPERIAL_ARAMAIC,
    /**
     * Inscriptional Pahlavi. Since 2.26
     */
    INSCRIPTIONAL_PAHLAVI,
    /**
     * Inscriptional Parthian. Since 2.26
     */
    INSCRIPTIONAL_PARTHIAN,
    /**
     * Javanese. Since 2.26
     */
    JAVANESE,
    /**
     * Kaithi. Since 2.26
     */
    KAITHI,
    /**
     * Lisu. Since 2.26
     */
    LISU,
    /**
     * Meetei Mayek. Since 2.26
     */
    MEETEI_MAYEK,
    /**
     * Old South Arabian. Since 2.26
     */
    OLD_SOUTH_ARABIAN,
    /**
     * Old Turkic. Since 2.28
     */
    OLD_TURKIC,
    /**
     * Samaritan. Since 2.26
     */
    SAMARITAN,
    /**
     * Tai Tham. Since 2.26
     */
    TAI_THAM,
    /**
     * Tai Viet. Since 2.26
     */
    TAI_VIET,
    /**
     * Batak. Since 2.28
     */
    BATAK,
    /**
     * Brahmi. Since 2.28
     */
    BRAHMI,
    /**
     * Mandaic. Since 2.28
     */
    MANDAIC,
    /**
     * Chakma. Since: 2.32
     */
    CHAKMA,
    /**
     * Meroitic Cursive. Since: 2.32
     */
    MEROITIC_CURSIVE,
    /**
     * Meroitic Hieroglyphs. Since: 2.32
     */
    MEROITIC_HIEROGLYPHS,
    /**
     * Miao. Since: 2.32
     */
    MIAO,
    /**
     * Sharada. Since: 2.32
     */
    SHARADA,
    /**
     * Sora Sompeng. Since: 2.32
     */
    SORA_SOMPENG,
    /**
     * Takri. Since: 2.32
     */
    TAKRI,
    /**
     * Bassa. Since: 2.42
     */
    BASSA_VAH,
    /**
     * Caucasian Albanian. Since: 2.42
     */
    CAUCASIAN_ALBANIAN,
    /**
     * Duployan. Since: 2.42
     */
    DUPLOYAN,
    /**
     * Elbasan. Since: 2.42
     */
    ELBASAN,
    /**
     * Grantha. Since: 2.42
     */
    GRANTHA,
    /**
     * Kjohki. Since: 2.42
     */
    KHOJKI,
    /**
     * Khudawadi, Sindhi. Since: 2.42
     */
    KHUDAWADI,
    /**
     * Linear A. Since: 2.42
     */
    LINEAR_A,
    /**
     * Mahajani. Since: 2.42
     */
    MAHAJANI,
    /**
     * Manichaean. Since: 2.42
     */
    MANICHAEAN,
    /**
     * Mende Kikakui. Since: 2.42
     */
    MENDE_KIKAKUI,
    /**
     * Modi. Since: 2.42
     */
    MODI,
    /**
     * Mro. Since: 2.42
     */
    MRO,
    /**
     * Nabataean. Since: 2.42
     */
    NABATAEAN,
    /**
     * Old North Arabian. Since: 2.42
     */
    OLD_NORTH_ARABIAN,
    /**
     * Old Permic. Since: 2.42
     */
    OLD_PERMIC,
    /**
     * Pahawh Hmong. Since: 2.42
     */
    PAHAWH_HMONG,
    /**
     * Palmyrene. Since: 2.42
     */
    PALMYRENE,
    /**
     * Pau Cin Hau. Since: 2.42
     */
    PAU_CIN_HAU,
    /**
     * Psalter Pahlavi. Since: 2.42
     */
    PSALTER_PAHLAVI,
    /**
     * Siddham. Since: 2.42
     */
    SIDDHAM,
    /**
     * Tirhuta. Since: 2.42
     */
    TIRHUTA,
    /**
     * Warang Citi. Since: 2.42
     */
    WARANG_CITI,
    /**
     * Ahom. Since: 2.48
     */
    AHOM,
    /**
     * Anatolian Hieroglyphs. Since: 2.48
     */
    ANATOLIAN_HIEROGLYPHS,
    /**
     * Hatran. Since: 2.48
     */
    HATRAN,
    /**
     * Multani. Since: 2.48
     */
    MULTANI,
    /**
     * Old Hungarian. Since: 2.48
     */
    OLD_HUNGARIAN,
    /**
     * Signwriting. Since: 2.48
     */
    SIGNWRITING,
    /**
     * Adlam. Since: 2.50
     */
    ADLAM,
    /**
     * Bhaiksuki. Since: 2.50
     */
    BHAIKSUKI,
    /**
     * Marchen. Since: 2.50
     */
    MARCHEN,
    /**
     * Newa. Since: 2.50
     */
    NEWA,
    /**
     * Osage. Since: 2.50
     */
    OSAGE,
    /**
     * Tangut. Since: 2.50
     */
    TANGUT,
    /**
     * Masaram Gondi. Since: 2.54
     */
    MASARAM_GONDI,
    /**
     * Nushu. Since: 2.54
     */
    NUSHU,
    /**
     * Soyombo. Since: 2.54
     */
    SOYOMBO,
    /**
     * Zanabazar Square. Since: 2.54
     */
    ZANABAZAR_SQUARE,
    /**
     * Dogra. Since: 2.58
     */
    DOGRA,
    /**
     * Gunjala Gondi. Since: 2.58
     */
    GUNJALA_GONDI,
    /**
     * Hanifi Rohingya. Since: 2.58
     */
    HANIFI_ROHINGYA,
    /**
     * Makasar. Since: 2.58
     */
    MAKASAR,
    /**
     * Medefaidrin. Since: 2.58
     */
    MEDEFAIDRIN,
    /**
     * Old Sogdian. Since: 2.58
     */
    OLD_SOGDIAN,
    /**
     * Sogdian. Since: 2.58
     */
    SOGDIAN,
    /**
     * Elym. Since: 2.62
     */
    ELYMAIC,
    /**
     * Nand. Since: 2.62
     */
    NANDINAGARI,
    /**
     * Rohg. Since: 2.62
     */
    NYIAKENG_PUACHUE_HMONG,
    /**
     * Wcho. Since: 2.62
     */
    WANCHO,
    /**
     * Chorasmian. Since: 2.66
     */
    CHORASMIAN,
    /**
     * Dives Akuru. Since: 2.66
     */
    DIVES_AKURU,
    /**
     * Khitan small script. Since: 2.66
     */
    KHITAN_SMALL_SCRIPT,
    /**
     * Yezidi. Since: 2.66
     */
    YEZIDI,
    /**
     * Cypro-Minoan. Since: 2.72
     */
    CYPRO_MINOAN,
    /**
     * Old Uyghur. Since: 2.72
     */
    OLD_UYGHUR,
    /**
     * Tangsa. Since: 2.72
     */
    TANGSA,
    /**
     * Toto. Since: 2.72
     */
    TOTO,
    /**
     * Vithkuqi. Since: 2.72
     */
    VITHKUQI,
    /**
     * Mathematical notation. Since: 2.72
     */
    MATH,
}
/**
 * These are the possible character classifications from the
 * Unicode specification.
 * See [Unicode Character Database](http://www.unicode.org/reports/tr44/#General_Category_Values).
 */
export enum UnicodeType {
    /**
     * General category "Other, Control" (Cc)
     */
    CONTROL,
    /**
     * General category "Other, Format" (Cf)
     */
    FORMAT,
    /**
     * General category "Other, Not Assigned" (Cn)
     */
    UNASSIGNED,
    /**
     * General category "Other, Private Use" (Co)
     */
    PRIVATE_USE,
    /**
     * General category "Other, Surrogate" (Cs)
     */
    SURROGATE,
    /**
     * General category "Letter, Lowercase" (Ll)
     */
    LOWERCASE_LETTER,
    /**
     * General category "Letter, Modifier" (Lm)
     */
    MODIFIER_LETTER,
    /**
     * General category "Letter, Other" (Lo)
     */
    OTHER_LETTER,
    /**
     * General category "Letter, Titlecase" (Lt)
     */
    TITLECASE_LETTER,
    /**
     * General category "Letter, Uppercase" (Lu)
     */
    UPPERCASE_LETTER,
    /**
     * General category "Mark, Spacing" (Mc)
     */
    SPACING_MARK,
    /**
     * General category "Mark, Enclosing" (Me)
     */
    ENCLOSING_MARK,
    /**
     * General category "Mark, Nonspacing" (Mn)
     */
    NON_SPACING_MARK,
    /**
     * General category "Number, Decimal Digit" (Nd)
     */
    DECIMAL_NUMBER,
    /**
     * General category "Number, Letter" (Nl)
     */
    LETTER_NUMBER,
    /**
     * General category "Number, Other" (No)
     */
    OTHER_NUMBER,
    /**
     * General category "Punctuation, Connector" (Pc)
     */
    CONNECT_PUNCTUATION,
    /**
     * General category "Punctuation, Dash" (Pd)
     */
    DASH_PUNCTUATION,
    /**
     * General category "Punctuation, Close" (Pe)
     */
    CLOSE_PUNCTUATION,
    /**
     * General category "Punctuation, Final quote" (Pf)
     */
    FINAL_PUNCTUATION,
    /**
     * General category "Punctuation, Initial quote" (Pi)
     */
    INITIAL_PUNCTUATION,
    /**
     * General category "Punctuation, Other" (Po)
     */
    OTHER_PUNCTUATION,
    /**
     * General category "Punctuation, Open" (Ps)
     */
    OPEN_PUNCTUATION,
    /**
     * General category "Symbol, Currency" (Sc)
     */
    CURRENCY_SYMBOL,
    /**
     * General category "Symbol, Modifier" (Sk)
     */
    MODIFIER_SYMBOL,
    /**
     * General category "Symbol, Math" (Sm)
     */
    MATH_SYMBOL,
    /**
     * General category "Symbol, Other" (So)
     */
    OTHER_SYMBOL,
    /**
     * General category "Separator, Line" (Zl)
     */
    LINE_SEPARATOR,
    /**
     * General category "Separator, Paragraph" (Zp)
     */
    PARAGRAPH_SEPARATOR,
    /**
     * General category "Separator, Space" (Zs)
     */
    SPACE_SEPARATOR,
}
/**
 * Error codes returned by #GUri methods.
 */
export enum UriError {
    /**
     * Generic error if no more specific error is available.
     *     See the error message for details.
     */
    FAILED,
    /**
     * The scheme of a URI could not be parsed.
     */
    BAD_SCHEME,
    /**
     * The user/userinfo of a URI could not be parsed.
     */
    BAD_USER,
    /**
     * The password of a URI could not be parsed.
     */
    BAD_PASSWORD,
    /**
     * The authentication parameters of a URI could not be parsed.
     */
    BAD_AUTH_PARAMS,
    /**
     * The host of a URI could not be parsed.
     */
    BAD_HOST,
    /**
     * The port of a URI could not be parsed.
     */
    BAD_PORT,
    /**
     * The path of a URI could not be parsed.
     */
    BAD_PATH,
    /**
     * The query of a URI could not be parsed.
     */
    BAD_QUERY,
    /**
     * The fragment of a URI could not be parsed.
     */
    BAD_FRAGMENT,
}
/**
 * These are logical ids for special directories which are defined
 * depending on the platform used. You should use g_get_user_special_dir()
 * to retrieve the full path associated to the logical id.
 * 
 * The #GUserDirectory enumeration can be extended at later date. Not
 * every platform has a directory for every logical id in this
 * enumeration.
 */
export enum UserDirectory {
    /**
     * the user's Desktop directory
     */
    DIRECTORY_DESKTOP,
    /**
     * the user's Documents directory
     */
    DIRECTORY_DOCUMENTS,
    /**
     * the user's Downloads directory
     */
    DIRECTORY_DOWNLOAD,
    /**
     * the user's Music directory
     */
    DIRECTORY_MUSIC,
    /**
     * the user's Pictures directory
     */
    DIRECTORY_PICTURES,
    /**
     * the user's shared directory
     */
    DIRECTORY_PUBLIC_SHARE,
    /**
     * the user's Templates directory
     */
    DIRECTORY_TEMPLATES,
    /**
     * the user's Movies directory
     */
    DIRECTORY_VIDEOS,
    /**
     * the number of enum values
     */
    N_DIRECTORIES,
}
/**
 * The range of possible top-level types of #GVariant instances.
 */
export enum VariantClass {
    /**
     * The #GVariant is a boolean.
     */
    BOOLEAN,
    /**
     * The #GVariant is a byte.
     */
    BYTE,
    /**
     * The #GVariant is a signed 16 bit integer.
     */
    INT16,
    /**
     * The #GVariant is an unsigned 16 bit integer.
     */
    UINT16,
    /**
     * The #GVariant is a signed 32 bit integer.
     */
    INT32,
    /**
     * The #GVariant is an unsigned 32 bit integer.
     */
    UINT32,
    /**
     * The #GVariant is a signed 64 bit integer.
     */
    INT64,
    /**
     * The #GVariant is an unsigned 64 bit integer.
     */
    UINT64,
    /**
     * The #GVariant is a file handle index.
     */
    HANDLE,
    /**
     * The #GVariant is a double precision floating
     *                          point value.
     */
    DOUBLE,
    /**
     * The #GVariant is a normal string.
     */
    STRING,
    /**
     * The #GVariant is a D-Bus object path
     *                               string.
     */
    OBJECT_PATH,
    /**
     * The #GVariant is a D-Bus signature string.
     */
    SIGNATURE,
    /**
     * The #GVariant is a variant.
     */
    VARIANT,
    /**
     * The #GVariant is a maybe-typed value.
     */
    MAYBE,
    /**
     * The #GVariant is an array.
     */
    ARRAY,
    /**
     * The #GVariant is a tuple.
     */
    TUPLE,
    /**
     * The #GVariant is a dictionary entry.
     */
    DICT_ENTRY,
}
/**
 * Error codes returned by parsing text-format GVariants.
 */
export enum VariantParseError {
    /**
     * generic error (unused)
     */
    FAILED,
    /**
     * a non-basic #GVariantType was given where a basic type was expected
     */
    BASIC_TYPE_EXPECTED,
    /**
     * cannot infer the #GVariantType
     */
    CANNOT_INFER_TYPE,
    /**
     * an indefinite #GVariantType was given where a definite type was expected
     */
    DEFINITE_TYPE_EXPECTED,
    /**
     * extra data after parsing finished
     */
    INPUT_NOT_AT_END,
    /**
     * invalid character in number or unicode escape
     */
    INVALID_CHARACTER,
    /**
     * not a valid #GVariant format string
     */
    INVALID_FORMAT_STRING,
    /**
     * not a valid object path
     */
    INVALID_OBJECT_PATH,
    /**
     * not a valid type signature
     */
    INVALID_SIGNATURE,
    /**
     * not a valid #GVariant type string
     */
    INVALID_TYPE_STRING,
    /**
     * could not find a common type for array entries
     */
    NO_COMMON_TYPE,
    /**
     * the numerical value is out of range of the given type
     */
    NUMBER_OUT_OF_RANGE,
    /**
     * the numerical value is out of range for any type
     */
    NUMBER_TOO_BIG,
    /**
     * cannot parse as variant of the specified type
     */
    TYPE_ERROR,
    /**
     * an unexpected token was encountered
     */
    UNEXPECTED_TOKEN,
    /**
     * an unknown keyword was encountered
     */
    UNKNOWN_KEYWORD,
    /**
     * unterminated string constant
     */
    UNTERMINATED_STRING_CONSTANT,
    /**
     * no value given
     */
    VALUE_EXPECTED,
    /**
     * variant was too deeply nested; #GVariant is only guaranteed to handle nesting up to 64 levels (Since: 2.64)
     */
    RECURSION,
}
export enum AsciiType {
    ALNUM,
    ALPHA,
    CNTRL,
    DIGIT,
    GRAPH,
    LOWER,
    PRINT,
    PUNCT,
    SPACE,
    UPPER,
    XDIGIT,
}
/**
 * Flags to pass to g_file_set_contents_full() to affect its safety and
 * performance.
 * @bitfield 
 */
export enum FileSetContentsFlags {
    /**
     * No guarantees about file consistency or durability.
     *   The most dangerous setting, which is slightly faster than other settings.
     */
    NONE,
    /**
     * Guarantee file consistency: after a crash,
     *   either the old version of the file or the new version of the file will be
     *   available, but not a mixture. On Unix systems this equates to an `fsync()`
     *   on the file and use of an atomic `rename()` of the new version of the file
     *   over the old.
     */
    CONSISTENT,
    /**
     * Guarantee file durability: after a crash, the
     *   new version of the file will be available. On Unix systems this equates to
     *   an `fsync()` on the file (if %G_FILE_SET_CONTENTS_CONSISTENT is unset), or
     *   the effects of %G_FILE_SET_CONTENTS_CONSISTENT plus an `fsync()` on the
     *   directory containing the file after calling `rename()`.
     */
    DURABLE,
    /**
     * Only apply consistency and durability
     *   guarantees if the file already exists. This may speed up file operations
     *   if the file doesn’t currently exist, but may result in a corrupted version
     *   of the new file if the system crashes while writing it.
     */
    ONLY_EXISTING,
}
/**
 * A test to perform on a file using g_file_test().
 * @bitfield 
 */
export enum FileTest {
    /**
     * %TRUE if the file is a regular file
     *     (not a directory). Note that this test will also return %TRUE
     *     if the tested file is a symlink to a regular file.
     */
    IS_REGULAR,
    /**
     * %TRUE if the file is a symlink.
     */
    IS_SYMLINK,
    /**
     * %TRUE if the file is a directory.
     */
    IS_DIR,
    /**
     * %TRUE if the file is executable.
     */
    IS_EXECUTABLE,
    /**
     * %TRUE if the file exists. It may or may not
     *     be a regular file.
     */
    EXISTS,
}
/**
 * Flags to modify the format of the string returned by g_format_size_full().
 * @bitfield 
 */
export enum FormatSizeFlags {
    /**
     * behave the same as g_format_size()
     */
    DEFAULT,
    /**
     * include the exact number of bytes as part
     *     of the returned string.  For example, "45.6 kB (45,612 bytes)".
     */
    LONG_FORMAT,
    /**
     * use IEC (base 1024) units with "KiB"-style
     *     suffixes. IEC units should only be used for reporting things with
     *     a strong "power of 2" basis, like RAM sizes or RAID stripe sizes.
     *     Network and storage sizes should be reported in the normal SI units.
     */
    IEC_UNITS,
    /**
     * set the size as a quantity in bits, rather than
     *     bytes, and return units in bits. For example, ‘Mb’ rather than ‘MB’.
     */
    BITS,
    ONLY_VALUE,
    ONLY_UNIT,
}
/**
 * Flags used internally in the #GHook implementation.
 * @bitfield 
 */
export enum HookFlagMask {
    /**
     * set if the hook has not been destroyed
     */
    ACTIVE,
    /**
     * set if the hook is currently being run
     */
    IN_CALL,
    /**
     * A mask covering all bits reserved for
     *   hook flags; see %G_HOOK_FLAG_USER_SHIFT
     */
    MASK,
}
/**
 * A bitwise combination representing a condition to watch for on an
 * event source.
 * @bitfield 
 */
export enum IOCondition {
    /**
     * There is data to read.
     */
    IN,
    /**
     * Data can be written (without blocking).
     */
    OUT,
    /**
     * There is urgent data to read.
     */
    PRI,
    /**
     * Error condition.
     */
    ERR,
    /**
     * Hung up (the connection has been broken, usually for
     *            pipes and sockets).
     */
    HUP,
    /**
     * Invalid request. The file descriptor is not open.
     */
    NVAL,
}
/**
 * Specifies properties of a #GIOChannel. Some of the flags can only be
 * read with g_io_channel_get_flags(), but not changed with
 * g_io_channel_set_flags().
 * @bitfield 
 */
export enum IOFlags {
    /**
     * turns on append mode, corresponds to %O_APPEND
     *     (see the documentation of the UNIX open() syscall)
     */
    APPEND,
    /**
     * turns on nonblocking mode, corresponds to
     *     %O_NONBLOCK/%O_NDELAY (see the documentation of the UNIX open()
     *     syscall)
     */
    NONBLOCK,
    /**
     * indicates that the io channel is readable.
     *     This flag cannot be changed.
     */
    IS_READABLE,
    /**
     * indicates that the io channel is writable.
     *     This flag cannot be changed.
     */
    IS_WRITABLE,
    /**
     * a misspelled version of `G_IO_FLAG_IS_WRITABLE`
     *     that existed before the spelling was fixed in GLib 2.30. It is kept
     *     here for compatibility reasons. Deprecated since 2.30
     */
    IS_WRITEABLE,
    /**
     * indicates that the io channel is seekable,
     *     i.e. that g_io_channel_seek_position() can be used on it.
     *     This flag cannot be changed.
     */
    IS_SEEKABLE,
    /**
     * the mask that specifies all the valid flags.
     */
    MASK,
    /**
     * the mask of the flags that are returned from
     *     g_io_channel_get_flags()
     */
    GET_MASK,
    /**
     * the mask of the flags that the user can modify
     *     with g_io_channel_set_flags()
     */
    SET_MASK,
}
/**
 * Flags which influence the parsing.
 * @bitfield 
 */
export enum KeyFileFlags {
    /**
     * No flags, default behaviour
     */
    NONE,
    /**
     * Use this flag if you plan to write the
     *   (possibly modified) contents of the key file back to a file;
     *   otherwise all comments will be lost when the key file is
     *   written back.
     */
    KEEP_COMMENTS,
    /**
     * Use this flag if you plan to write the
     *   (possibly modified) contents of the key file back to a file;
     *   otherwise only the translations for the current language will be
     *   written back.
     */
    KEEP_TRANSLATIONS,
}
/**
 * Flags specifying the level of log messages.
 * 
 * It is possible to change how GLib treats messages of the various
 * levels using g_log_set_handler() and g_log_set_fatal_mask().
 * @bitfield 
 */
export enum LogLevelFlags {
    /**
     * internal flag
     */
    FLAG_RECURSION,
    /**
     * internal flag
     */
    FLAG_FATAL,
    /**
     * log level for errors, see g_error().
     *     This level is also used for messages produced by g_assert().
     */
    LEVEL_ERROR,
    /**
     * log level for critical warning messages, see
     *     g_critical().
     *     This level is also used for messages produced by g_return_if_fail()
     *     and g_return_val_if_fail().
     */
    LEVEL_CRITICAL,
    /**
     * log level for warnings, see g_warning()
     */
    LEVEL_WARNING,
    /**
     * log level for messages, see g_message()
     */
    LEVEL_MESSAGE,
    /**
     * log level for informational messages, see g_info()
     */
    LEVEL_INFO,
    /**
     * log level for debug messages, see g_debug()
     */
    LEVEL_DEBUG,
    /**
     * a mask including all log levels
     */
    LEVEL_MASK,
}
/**
 * Flags to pass to g_main_context_new_with_flags() which affect the behaviour
 * of a #GMainContext.
 * @bitfield 
 */
export enum MainContextFlags {
    /**
     * Default behaviour.
     */
    NONE,
    /**
     * Assume that polling for events will
     * free the thread to process other jobs. That's useful if you're using
     * `g_main_context_{prepare,query,check,dispatch}` to integrate GMainContext in
     * other event loops.
     */
    OWNERLESS_POLLING,
}
/**
 * A mixed enumerated type and flags field. You must specify one type
 * (string, strdup, boolean, tristate).  Additionally, you may  optionally
 * bitwise OR the type with the flag %G_MARKUP_COLLECT_OPTIONAL.
 * 
 * It is likely that this enum will be extended in the future to
 * support other types.
 * @bitfield 
 */
export enum MarkupCollectType {
    /**
     * used to terminate the list of attributes
     *     to collect
     */
    INVALID,
    /**
     * collect the string pointer directly from
     *     the attribute_values[] array. Expects a parameter of type (const
     *     char **). If %G_MARKUP_COLLECT_OPTIONAL is specified and the
     *     attribute isn't present then the pointer will be set to %NULL
     */
    STRING,
    /**
     * as with %G_MARKUP_COLLECT_STRING, but
     *     expects a parameter of type (char **) and g_strdup()s the
     *     returned pointer. The pointer must be freed with g_free()
     */
    STRDUP,
    /**
     * expects a parameter of type (gboolean *)
     *     and parses the attribute value as a boolean. Sets %FALSE if the
     *     attribute isn't present. Valid boolean values consist of
     *     (case-insensitive) "false", "f", "no", "n", "0" and "true", "t",
     *     "yes", "y", "1"
     */
    BOOLEAN,
    /**
     * as with %G_MARKUP_COLLECT_BOOLEAN, but
     *     in the case of a missing attribute a value is set that compares
     *     equal to neither %FALSE nor %TRUE G_MARKUP_COLLECT_OPTIONAL is
     *     implied
     */
    TRISTATE,
    /**
     * can be bitwise ORed with the other fields.
     *     If present, allows the attribute not to appear. A default value
     *     is set depending on what value type is used
     */
    OPTIONAL,
}
/**
 * Flags that affect the behaviour of the parser.
 * @bitfield 
 */
export enum MarkupParseFlags {
    /**
     * flag you should not use
     */
    DO_NOT_USE_THIS_UNSUPPORTED_FLAG,
    /**
     * When this flag is set, CDATA marked
     *     sections are not passed literally to the `passthrough` function of
     *     the parser. Instead, the content of the section (without the
     *     `<![CDATA[` and `]]>`) is
     *     passed to the `text` function. This flag was added in GLib 2.12
     */
    TREAT_CDATA_AS_TEXT,
    /**
     * Normally errors caught by GMarkup
     *     itself have line/column information prefixed to them to let the
     *     caller know the location of the error. When this flag is set the
     *     location information is also prefixed to errors generated by the
     *     #GMarkupParser implementation functions
     */
    PREFIX_ERROR_POSITION,
    /**
     * Ignore (don't report) qualified
     *     attributes and tags, along with their contents.  A qualified
     *     attribute or tag is one that contains ':' in its name (ie: is in
     *     another namespace).  Since: 2.40.
     */
    IGNORE_QUALIFIED,
}
/**
 * Flags which modify individual options.
 * @bitfield 
 */
export enum OptionFlags {
    /**
     * No flags. Since: 2.42.
     */
    NONE,
    /**
     * The option doesn't appear in `--help` output.
     */
    HIDDEN,
    /**
     * The option appears in the main section of the
     *     `--help` output, even if it is defined in a group.
     */
    IN_MAIN,
    /**
     * For options of the %G_OPTION_ARG_NONE kind, this
     *     flag indicates that the sense of the option is reversed.
     */
    REVERSE,
    /**
     * For options of the %G_OPTION_ARG_CALLBACK kind,
     *     this flag indicates that the callback does not take any argument
     *     (like a %G_OPTION_ARG_NONE option). Since 2.8
     */
    NO_ARG,
    /**
     * For options of the %G_OPTION_ARG_CALLBACK
     *     kind, this flag indicates that the argument should be passed to the
     *     callback in the GLib filename encoding rather than UTF-8. Since 2.8
     */
    FILENAME,
    /**
     * For options of the %G_OPTION_ARG_CALLBACK
     *     kind, this flag indicates that the argument supply is optional.
     *     If no argument is given then data of %GOptionParseFunc will be
     *     set to NULL. Since 2.8
     */
    OPTIONAL_ARG,
    /**
     * This flag turns off the automatic conflict
     *     resolution which prefixes long option names with `groupname-` if
     *     there is a conflict. This option should only be used in situations
     *     where aliasing is necessary to model some legacy commandline interface.
     *     It is not safe to use this option, unless all option groups are under
     *     your direct control. Since 2.8.
     */
    NOALIAS,
}
/**
 * Flags specifying compile-time options.
 * @bitfield 
 */
export enum RegexCompileFlags {
    /**
     * Letters in the pattern match both upper- and
     *     lowercase letters. This option can be changed within a pattern
     *     by a "(?i)" option setting.
     */
    CASELESS,
    /**
     * By default, GRegex treats the strings as consisting
     *     of a single line of characters (even if it actually contains
     *     newlines). The "start of line" metacharacter ("^") matches only
     *     at the start of the string, while the "end of line" metacharacter
     *     ("$") matches only at the end of the string, or before a terminating
     *     newline (unless %G_REGEX_DOLLAR_ENDONLY is set). When
     *     %G_REGEX_MULTILINE is set, the "start of line" and "end of line"
     *     constructs match immediately following or immediately before any
     *     newline in the string, respectively, as well as at the very start
     *     and end. This can be changed within a pattern by a "(?m)" option
     *     setting.
     */
    MULTILINE,
    /**
     * A dot metacharacter (".") in the pattern matches all
     *     characters, including newlines. Without it, newlines are excluded.
     *     This option can be changed within a pattern by a ("?s") option setting.
     */
    DOTALL,
    /**
     * Whitespace data characters in the pattern are
     *     totally ignored except when escaped or inside a character class.
     *     Whitespace does not include the VT character (code 11). In addition,
     *     characters between an unescaped "#" outside a character class and
     *     the next newline character, inclusive, are also ignored. This can
     *     be changed within a pattern by a "(?x)" option setting.
     */
    EXTENDED,
    /**
     * The pattern is forced to be "anchored", that is,
     *     it is constrained to match only at the first matching point in the
     *     string that is being searched. This effect can also be achieved by
     *     appropriate constructs in the pattern itself such as the "^"
     *     metacharacter.
     */
    ANCHORED,
    /**
     * A dollar metacharacter ("$") in the pattern
     *     matches only at the end of the string. Without this option, a
     *     dollar also matches immediately before the final character if
     *     it is a newline (but not before any other newlines). This option
     *     is ignored if %G_REGEX_MULTILINE is set.
     */
    DOLLAR_ENDONLY,
    /**
     * Inverts the "greediness" of the quantifiers so that
     *     they are not greedy by default, but become greedy if followed by "?".
     *     It can also be set by a "(?U)" option setting within the pattern.
     */
    UNGREEDY,
    /**
     * Usually strings must be valid UTF-8 strings, using this
     *     flag they are considered as a raw sequence of bytes.
     */
    RAW,
    /**
     * Disables the use of numbered capturing
     *     parentheses in the pattern. Any opening parenthesis that is not
     *     followed by "?" behaves as if it were followed by "?:" but named
     *     parentheses can still be used for capturing (and they acquire numbers
     *     in the usual way).
     */
    NO_AUTO_CAPTURE,
    /**
     * Optimize the regular expression. If the pattern will
     *     be used many times, then it may be worth the effort to optimize it
     *     to improve the speed of matches.
     */
    OPTIMIZE,
    /**
     * Limits an unanchored pattern to match before (or at) the
     *     first newline. Since: 2.34
     */
    FIRSTLINE,
    /**
     * Names used to identify capturing subpatterns need not
     *     be unique. This can be helpful for certain types of pattern when it
     *     is known that only one instance of the named subpattern can ever be
     *     matched.
     */
    DUPNAMES,
    /**
     * Usually any newline character or character sequence is
     *     recognized. If this option is set, the only recognized newline character
     *     is '\r'.
     */
    NEWLINE_CR,
    /**
     * Usually any newline character or character sequence is
     *     recognized. If this option is set, the only recognized newline character
     *     is '\n'.
     */
    NEWLINE_LF,
    /**
     * Usually any newline character or character sequence is
     *     recognized. If this option is set, the only recognized newline character
     *     sequence is '\r\n'.
     */
    NEWLINE_CRLF,
    /**
     * Usually any newline character or character sequence
     *     is recognized. If this option is set, the only recognized newline character
     *     sequences are '\r', '\n', and '\r\n'. Since: 2.34
     */
    NEWLINE_ANYCRLF,
    /**
     * Usually any newline character or character sequence
     *     is recognised. If this option is set, then "\R" only recognizes the newline
     *    characters '\r', '\n' and '\r\n'. Since: 2.34
     */
    BSR_ANYCRLF,
    /**
     * Changes behaviour so that it is compatible with
     *     JavaScript rather than PCRE. Since: 2.34
     */
    JAVASCRIPT_COMPAT,
}
/**
 * Flags specifying match-time options.
 * @bitfield 
 */
export enum RegexMatchFlags {
    /**
     * The pattern is forced to be "anchored", that is,
     *     it is constrained to match only at the first matching point in the
     *     string that is being searched. This effect can also be achieved by
     *     appropriate constructs in the pattern itself such as the "^"
     *     metacharacter.
     */
    ANCHORED,
    /**
     * Specifies that first character of the string is
     *     not the beginning of a line, so the circumflex metacharacter should
     *     not match before it. Setting this without %G_REGEX_MULTILINE (at
     *     compile time) causes circumflex never to match. This option affects
     *     only the behaviour of the circumflex metacharacter, it does not
     *     affect "\A".
     */
    NOTBOL,
    /**
     * Specifies that the end of the subject string is
     *     not the end of a line, so the dollar metacharacter should not match
     *     it nor (except in multiline mode) a newline immediately before it.
     *     Setting this without %G_REGEX_MULTILINE (at compile time) causes
     *     dollar never to match. This option affects only the behaviour of
     *     the dollar metacharacter, it does not affect "\Z" or "\z".
     */
    NOTEOL,
    /**
     * An empty string is not considered to be a valid
     *     match if this option is set. If there are alternatives in the pattern,
     *     they are tried. If all the alternatives match the empty string, the
     *     entire match fails. For example, if the pattern "a?b?" is applied to
     *     a string not beginning with "a" or "b", it matches the empty string
     *     at the start of the string. With this flag set, this match is not
     *     valid, so GRegex searches further into the string for occurrences
     *     of "a" or "b".
     */
    NOTEMPTY,
    /**
     * Turns on the partial matching feature, for more
     *     documentation on partial matching see g_match_info_is_partial_match().
     */
    PARTIAL,
    /**
     * Overrides the newline definition set when
     *     creating a new #GRegex, setting the '\r' character as line terminator.
     */
    NEWLINE_CR,
    /**
     * Overrides the newline definition set when
     *     creating a new #GRegex, setting the '\n' character as line terminator.
     */
    NEWLINE_LF,
    /**
     * Overrides the newline definition set when
     *     creating a new #GRegex, setting the '\r\n' characters sequence as line terminator.
     */
    NEWLINE_CRLF,
    /**
     * Overrides the newline definition set when
     *     creating a new #GRegex, any Unicode newline sequence
     *     is recognised as a newline. These are '\r', '\n' and '\rn', and the
     *     single characters U+000B LINE TABULATION, U+000C FORM FEED (FF),
     *     U+0085 NEXT LINE (NEL), U+2028 LINE SEPARATOR and
     *     U+2029 PARAGRAPH SEPARATOR.
     */
    NEWLINE_ANY,
    /**
     * Overrides the newline definition set when
     *     creating a new #GRegex; any '\r', '\n', or '\r\n' character sequence
     *     is recognized as a newline. Since: 2.34
     */
    NEWLINE_ANYCRLF,
    /**
     * Overrides the newline definition for "\R" set when
     *     creating a new #GRegex; only '\r', '\n', or '\r\n' character sequences
     *     are recognized as a newline by "\R". Since: 2.34
     */
    BSR_ANYCRLF,
    /**
     * Overrides the newline definition for "\R" set when
     *     creating a new #GRegex; any Unicode newline character or character sequence
     *     are recognized as a newline by "\R". These are '\r', '\n' and '\rn', and the
     *     single characters U+000B LINE TABULATION, U+000C FORM FEED (FF),
     *     U+0085 NEXT LINE (NEL), U+2028 LINE SEPARATOR and
     *     U+2029 PARAGRAPH SEPARATOR. Since: 2.34
     */
    BSR_ANY,
    /**
     * An alias for %G_REGEX_MATCH_PARTIAL. Since: 2.34
     */
    PARTIAL_SOFT,
    /**
     * Turns on the partial matching feature. In contrast to
     *     to %G_REGEX_MATCH_PARTIAL_SOFT, this stops matching as soon as a partial match
     *     is found, without continuing to search for a possible complete match. See
     *     g_match_info_is_partial_match() for more information. Since: 2.34
     */
    PARTIAL_HARD,
    /**
     * Like %G_REGEX_MATCH_NOTEMPTY, but only applied to
     *     the start of the matched string. For anchored
     *     patterns this can only happen for pattern containing "\K". Since: 2.34
     */
    NOTEMPTY_ATSTART,
}
/**
 * Flags passed to g_spawn_sync(), g_spawn_async() and g_spawn_async_with_pipes().
 * @bitfield 
 */
export enum SpawnFlags {
    /**
     * no flags, default behaviour
     */
    DEFAULT,
    /**
     * the parent's open file descriptors will
     *     be inherited by the child; otherwise all descriptors except stdin,
     *     stdout and stderr will be closed before calling exec() in the child.
     */
    LEAVE_DESCRIPTORS_OPEN,
    /**
     * the child will not be automatically reaped;
     *     you must use g_child_watch_add() yourself (or call waitpid() or handle
     *     `SIGCHLD` yourself), or the child will become a zombie.
     */
    DO_NOT_REAP_CHILD,
    /**
     * `argv[0]` need not be an absolute path, it will be
     *     looked for in the user's `PATH`.
     */
    SEARCH_PATH,
    /**
     * the child's standard output will be discarded,
     *     instead of going to the same location as the parent's standard output.
     */
    STDOUT_TO_DEV_NULL,
    /**
     * the child's standard error will be discarded.
     */
    STDERR_TO_DEV_NULL,
    /**
     * the child will inherit the parent's standard
     *     input (by default, the child's standard input is attached to `/dev/null`).
     */
    CHILD_INHERITS_STDIN,
    /**
     * the first element of `argv` is the file to
     *     execute, while the remaining elements are the actual argument vector
     *     to pass to the file. Normally g_spawn_async_with_pipes() uses `argv[0]`
     *     as the file to execute, and passes all of `argv` to the child.
     */
    FILE_AND_ARGV_ZERO,
    /**
     * if `argv[0]` is not an absolute path,
     *     it will be looked for in the `PATH` from the passed child environment.
     *     Since: 2.34
     */
    SEARCH_PATH_FROM_ENVP,
    /**
     * create all pipes with the `O_CLOEXEC` flag set.
     *     Since: 2.40
     */
    CLOEXEC_PIPES,
}
/**
 * Flags to pass to g_test_trap_subprocess() to control input and output.
 * 
 * Note that in contrast with g_test_trap_fork(), the default is to
 * not show stdout and stderr.
 * @bitfield 
 */
export enum TestSubprocessFlags {
    /**
     * If this flag is given, the child
     *     process will inherit the parent's stdin. Otherwise, the child's
     *     stdin is redirected to `/dev/null`.
     */
    STDIN,
    /**
     * If this flag is given, the child
     *     process will inherit the parent's stdout. Otherwise, the child's
     *     stdout will not be visible, but it will be captured to allow
     *     later tests with g_test_trap_assert_stdout().
     */
    STDOUT,
    /**
     * If this flag is given, the child
     *     process will inherit the parent's stderr. Otherwise, the child's
     *     stderr will not be visible, but it will be captured to allow
     *     later tests with g_test_trap_assert_stderr().
     */
    STDERR,
}
/**
 * Test traps are guards around forked tests.
 * These flags determine what traps to set.
 * @bitfield 
 */
export enum TestTrapFlags {
    /**
     * Redirect stdout of the test child to
     *     `/dev/null` so it cannot be observed on the console during test
     *     runs. The actual output is still captured though to allow later
     *     tests with g_test_trap_assert_stdout().
     */
    SILENCE_STDOUT,
    /**
     * Redirect stderr of the test child to
     *     `/dev/null` so it cannot be observed on the console during test
     *     runs. The actual output is still captured though to allow later
     *     tests with g_test_trap_assert_stderr().
     */
    SILENCE_STDERR,
    /**
     * If this flag is given, stdin of the
     *     child process is shared with stdin of its parent process.
     *     It is redirected to `/dev/null` otherwise.
     */
    INHERIT_STDIN,
}
/**
 * Specifies which nodes are visited during several of the tree
 * functions, including g_node_traverse() and g_node_find().
 * @bitfield 
 */
export enum TraverseFlags {
    /**
     * only leaf nodes should be visited. This name has
     *                     been introduced in 2.6, for older version use
     *                     %G_TRAVERSE_LEAFS.
     */
    LEAVES,
    /**
     * only non-leaf nodes should be visited. This
     *                         name has been introduced in 2.6, for older
     *                         version use %G_TRAVERSE_NON_LEAFS.
     */
    NON_LEAVES,
    /**
     * all nodes should be visited.
     */
    ALL,
    /**
     * a mask of all traverse flags.
     */
    MASK,
    /**
     * identical to %G_TRAVERSE_LEAVES.
     */
    LEAFS,
    /**
     * identical to %G_TRAVERSE_NON_LEAVES.
     */
    NON_LEAFS,
}
/**
 * Flags that describe a URI.
 * 
 * When parsing a URI, if you need to choose different flags based on
 * the type of URI, you can use g_uri_peek_scheme() on the URI string
 * to check the scheme first, and use that to decide what flags to
 * parse it with.
 * @bitfield 
 */
export enum UriFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Parse the URI more relaxedly than the
     *     [RFC 3986](https://tools.ietf.org/html/rfc3986) grammar specifies,
     *     fixing up or ignoring common mistakes in URIs coming from external
     *     sources. This is also needed for some obscure URI schemes where `;`
     *     separates the host from the path. Don’t use this flag unless you need to.
     */
    PARSE_RELAXED,
    /**
     * The userinfo field may contain a password,
     *     which will be separated from the username by `:`.
     */
    HAS_PASSWORD,
    /**
     * The userinfo may contain additional
     *     authentication-related parameters, which will be separated from
     *     the username and/or password by `;`.
     */
    HAS_AUTH_PARAMS,
    /**
     * When parsing a URI, this indicates that `%`-encoded
     *     characters in the userinfo, path, query, and fragment fields
     *     should not be decoded. (And likewise the host field if
     *     %G_URI_FLAGS_NON_DNS is also set.) When building a URI, it indicates
     *     that you have already `%`-encoded the components, and so #GUri
     *     should not do any encoding itself.
     */
    ENCODED,
    /**
     * The host component should not be assumed to be a
     *     DNS hostname or IP address (for example, for `smb` URIs with NetBIOS
     *     hostnames).
     */
    NON_DNS,
    /**
     * Same as %G_URI_FLAGS_ENCODED, for the query
     *     field only.
     */
    ENCODED_QUERY,
    /**
     * Same as %G_URI_FLAGS_ENCODED, for the path only.
     */
    ENCODED_PATH,
    /**
     * Same as %G_URI_FLAGS_ENCODED, for the
     *     fragment only.
     */
    ENCODED_FRAGMENT,
    /**
     * A scheme-based normalization will be applied.
     *     For example, when parsing an HTTP URI changing omitted path to `/` and
     *     omitted port to `80`; and when building a URI, changing empty path to `/`
     *     and default port `80`). This only supports a subset of known schemes. (Since: 2.68)
     */
    SCHEME_NORMALIZE,
}
/**
 * Flags describing what parts of the URI to hide in
 * g_uri_to_string_partial(). Note that %G_URI_HIDE_PASSWORD and
 * %G_URI_HIDE_AUTH_PARAMS will only work if the #GUri was parsed with
 * the corresponding flags.
 * @bitfield 
 */
export enum UriHideFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Hide the userinfo.
     */
    USERINFO,
    /**
     * Hide the password.
     */
    PASSWORD,
    /**
     * Hide the auth_params.
     */
    AUTH_PARAMS,
    /**
     * Hide the query.
     */
    QUERY,
    /**
     * Hide the fragment.
     */
    FRAGMENT,
}
/**
 * Flags modifying the way parameters are handled by g_uri_parse_params() and
 * #GUriParamsIter.
 * @bitfield 
 */
export enum UriParamsFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Parameter names are case insensitive.
     */
    CASE_INSENSITIVE,
    /**
     * Replace `+` with space character. Only useful for
     *     URLs on the web, using the `https` or `http` schemas.
     */
    WWW_FORM,
    /**
     * See %G_URI_FLAGS_PARSE_RELAXED.
     */
    PARSE_RELAXED,
}
export const ANALYZER_ANALYZING: number
/**
 * A good size for a buffer to be passed into g_ascii_dtostr().
 * It is guaranteed to be enough for all output of that function
 * on systems with 64bit IEEE-compatible doubles.
 * 
 * The typical usage would be something like:
 * 
 * ```c
 *   char buf[G_ASCII_DTOSTR_BUF_SIZE];
 * 
 *   fprintf (out, "value=%s\n", g_ascii_dtostr (buf, sizeof (buf), value));
 * ```
 * 
 */
export const ASCII_DTOSTR_BUF_SIZE: number
/**
 * Specifies one of the possible types of byte order.
 * See %G_BYTE_ORDER.
 */
export const BIG_ENDIAN: number
/**
 * The set of uppercase ASCII alphabet characters.
 * Used for specifying valid identifier characters
 * in #GScannerConfig.
 */
export const CSET_A_2_Z: string
/**
 * The set of ASCII digits.
 * Used for specifying valid identifier characters
 * in #GScannerConfig.
 */
export const CSET_DIGITS: string
/**
 * The set of lowercase ASCII alphabet characters.
 * Used for specifying valid identifier characters
 * in #GScannerConfig.
 */
export const CSET_a_2_z: string
/**
 * A bitmask that restricts the possible flags passed to
 * g_datalist_set_flags(). Passing a flags value where
 * flags & ~G_DATALIST_FLAGS_MASK != 0 is an error.
 */
export const DATALIST_FLAGS_MASK: number
/**
 * Represents an invalid #GDateDay.
 */
export const DATE_BAD_DAY: number
/**
 * Represents an invalid Julian day number.
 */
export const DATE_BAD_JULIAN: number
/**
 * Represents an invalid year.
 */
export const DATE_BAD_YEAR: number
/**
 * The directory separator character.
 * This is '/' on UNIX machines and '\' under Windows.
 */
export const DIR_SEPARATOR: number
/**
 * The directory separator as a string.
 * This is "/" on UNIX machines and "\" under Windows.
 */
export const DIR_SEPARATOR_S: string
/**
 * The base of natural logarithms.
 */
export const E: number
/**
 * This is the platform dependent conversion specifier for scanning and
 * printing values of type #gint16. It is a string literal, but doesn't
 * include the percent-sign, such that you can add precision and length
 * modifiers between percent-sign and conversion specifier.
 * 
 * 
 * ```c
 * gint16 in;
 * gint32 out;
 * sscanf ("42", "%" G_GINT16_FORMAT, &in)
 * out = in * 1000;
 * g_print ("%" G_GINT32_FORMAT, out);
 * ```
 * 
 */
export const GINT16_FORMAT: string
/**
 * The platform dependent length modifier for conversion specifiers
 * for scanning and printing values of type #gint16 or #guint16. It
 * is a string literal, but doesn't include the percent-sign, such
 * that you can add precision and length modifiers between percent-sign
 * and conversion specifier and append a conversion specifier.
 * 
 * The following example prints "0x7b";
 * 
 * ```c
 * gint16 value = 123;
 * g_print ("%#" G_GINT16_MODIFIER "x", value);
 * ```
 * 
 */
export const GINT16_MODIFIER: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #gint32. See also %G_GINT16_FORMAT.
 */
export const GINT32_FORMAT: string
/**
 * The platform dependent length modifier for conversion specifiers
 * for scanning and printing values of type #gint32 or #guint32. It
 * is a string literal. See also %G_GINT16_MODIFIER.
 */
export const GINT32_MODIFIER: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #gint64. See also %G_GINT16_FORMAT.
 * 
 * Some platforms do not support scanning and printing 64-bit integers,
 * even though the types are supported. On such platforms %G_GINT64_FORMAT
 * is not defined. Note that scanf() may not support 64-bit integers, even
 * if %G_GINT64_FORMAT is defined. Due to its weak error handling, scanf()
 * is not recommended for parsing anyway; consider using g_ascii_strtoull()
 * instead.
 */
export const GINT64_FORMAT: string
/**
 * The platform dependent length modifier for conversion specifiers
 * for scanning and printing values of type #gint64 or #guint64.
 * It is a string literal.
 * 
 * Some platforms do not support printing 64-bit integers, even
 * though the types are supported. On such platforms %G_GINT64_MODIFIER
 * is not defined.
 */
export const GINT64_MODIFIER: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #gintptr.
 */
export const GINTPTR_FORMAT: string
/**
 * The platform dependent length modifier for conversion specifiers
 * for scanning and printing values of type #gintptr or #guintptr.
 * It is a string literal.
 */
export const GINTPTR_MODIFIER: string
/**
 * Expands to "" on all modern compilers, and to  __FUNCTION__ on gcc
 * version 2.x. Don't use it.
 */
export const GNUC_FUNCTION: string
/**
 * Expands to "" on all modern compilers, and to __PRETTY_FUNCTION__
 * on gcc version 2.x. Don't use it.
 */
export const GNUC_PRETTY_FUNCTION: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #gsize. See also %G_GINT16_FORMAT.
 */
export const GSIZE_FORMAT: string
/**
 * The platform dependent length modifier for conversion specifiers
 * for scanning and printing values of type #gsize. It
 * is a string literal.
 */
export const GSIZE_MODIFIER: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #gssize. See also %G_GINT16_FORMAT.
 */
export const GSSIZE_FORMAT: string
/**
 * The platform dependent length modifier for conversion specifiers
 * for scanning and printing values of type #gssize. It
 * is a string literal.
 */
export const GSSIZE_MODIFIER: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #guint16. See also %G_GINT16_FORMAT
 */
export const GUINT16_FORMAT: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #guint32. See also %G_GINT16_FORMAT.
 */
export const GUINT32_FORMAT: string
/**
 * This is the platform dependent conversion specifier for scanning
 * and printing values of type #guint64. See also %G_GINT16_FORMAT.
 * 
 * Some platforms do not support scanning and printing 64-bit integers,
 * even though the types are supported. On such platforms %G_GUINT64_FORMAT
 * is not defined.  Note that scanf() may not support 64-bit integers, even
 * if %G_GINT64_FORMAT is defined. Due to its weak error handling, scanf()
 * is not recommended for parsing anyway; consider using g_ascii_strtoull()
 * instead.
 */
export const GUINT64_FORMAT: string
/**
 * This is the platform dependent conversion specifier
 * for scanning and printing values of type #guintptr.
 */
export const GUINTPTR_FORMAT: string
export const HAVE_GINT64: number
export const HAVE_GNUC_VARARGS: number
/**
 * Defined to 1 if gcc-style visibility handling is supported.
 */
export const HAVE_GNUC_VISIBILITY: number
export const HAVE_GROWING_STACK: number
export const HAVE_ISO_VARARGS: number
/**
 * The position of the first bit which is not reserved for internal
 * use be the #GHook implementation, i.e.
 * `1 << G_HOOK_FLAG_USER_SHIFT` is the first
 * bit which can be used for application-defined flags.
 */
export const HOOK_FLAG_USER_SHIFT: number
/**
 * The bias by which exponents in double-precision floats are offset.
 */
export const IEEE754_DOUBLE_BIAS: number
/**
 * The bias by which exponents in single-precision floats are offset.
 */
export const IEEE754_FLOAT_BIAS: number
/**
 * The name of the main group of a desktop entry file, as defined in the
 * [Desktop Entry Specification](http://freedesktop.org/Standards/desktop-entry-spec).
 * Consult the specification for more
 * details about the meanings of the keys below.
 */
export const KEY_FILE_DESKTOP_GROUP: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string list
 * giving the available application actions.
 */
export const KEY_FILE_DESKTOP_KEY_ACTIONS: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a list
 * of strings giving the categories in which the desktop entry
 * should be shown in a menu.
 */
export const KEY_FILE_DESKTOP_KEY_CATEGORIES: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a localized
 * string giving the tooltip for the desktop entry.
 */
export const KEY_FILE_DESKTOP_KEY_COMMENT: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a boolean
 * set to true if the application is D-Bus activatable.
 */
export const KEY_FILE_DESKTOP_KEY_DBUS_ACTIVATABLE: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string
 * giving the command line to execute. It is only valid for desktop
 * entries with the `Application` type.
 */
export const KEY_FILE_DESKTOP_KEY_EXEC: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a localized
 * string giving the generic name of the desktop entry.
 */
export const KEY_FILE_DESKTOP_KEY_GENERIC_NAME: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a boolean
 * stating whether the desktop entry has been deleted by the user.
 */
export const KEY_FILE_DESKTOP_KEY_HIDDEN: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a localized
 * string giving the name of the icon to be displayed for the desktop
 * entry.
 */
export const KEY_FILE_DESKTOP_KEY_ICON: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a list
 * of strings giving the MIME types supported by this desktop entry.
 */
export const KEY_FILE_DESKTOP_KEY_MIME_TYPE: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a localized
 * string giving the specific name of the desktop entry.
 */
export const KEY_FILE_DESKTOP_KEY_NAME: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a list of
 * strings identifying the environments that should not display the
 * desktop entry.
 */
export const KEY_FILE_DESKTOP_KEY_NOT_SHOW_IN: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a boolean
 * stating whether the desktop entry should be shown in menus.
 */
export const KEY_FILE_DESKTOP_KEY_NO_DISPLAY: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a list of
 * strings identifying the environments that should display the
 * desktop entry.
 */
export const KEY_FILE_DESKTOP_KEY_ONLY_SHOW_IN: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string
 * containing the working directory to run the program in. It is only
 * valid for desktop entries with the `Application` type.
 */
export const KEY_FILE_DESKTOP_KEY_PATH: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a boolean
 * stating whether the application supports the
 * [Startup Notification Protocol Specification](http://www.freedesktop.org/Standards/startup-notification-spec).
 */
export const KEY_FILE_DESKTOP_KEY_STARTUP_NOTIFY: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is string
 * identifying the WM class or name hint of a window that the application
 * will create, which can be used to emulate Startup Notification with
 * older applications.
 */
export const KEY_FILE_DESKTOP_KEY_STARTUP_WM_CLASS: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a boolean
 * stating whether the program should be run in a terminal window.
 * 
 * It is only valid for desktop entries with the `Application` type.
 */
export const KEY_FILE_DESKTOP_KEY_TERMINAL: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string
 * giving the file name of a binary on disk used to determine if the
 * program is actually installed. It is only valid for desktop entries
 * with the `Application` type.
 */
export const KEY_FILE_DESKTOP_KEY_TRY_EXEC: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string
 * giving the type of the desktop entry.
 * 
 * Usually %G_KEY_FILE_DESKTOP_TYPE_APPLICATION,
 * %G_KEY_FILE_DESKTOP_TYPE_LINK, or
 * %G_KEY_FILE_DESKTOP_TYPE_DIRECTORY.
 */
export const KEY_FILE_DESKTOP_KEY_TYPE: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string
 * giving the URL to access. It is only valid for desktop entries
 * with the `Link` type.
 */
export const KEY_FILE_DESKTOP_KEY_URL: string
/**
 * A key under %G_KEY_FILE_DESKTOP_GROUP, whose value is a string
 * giving the version of the Desktop Entry Specification used for
 * the desktop entry file.
 */
export const KEY_FILE_DESKTOP_KEY_VERSION: string
/**
 * The value of the %G_KEY_FILE_DESKTOP_KEY_TYPE, key for desktop
 * entries representing applications.
 */
export const KEY_FILE_DESKTOP_TYPE_APPLICATION: string
/**
 * The value of the %G_KEY_FILE_DESKTOP_KEY_TYPE, key for desktop
 * entries representing directories.
 */
export const KEY_FILE_DESKTOP_TYPE_DIRECTORY: string
/**
 * The value of the %G_KEY_FILE_DESKTOP_KEY_TYPE, key for desktop
 * entries representing links to documents.
 */
export const KEY_FILE_DESKTOP_TYPE_LINK: string
/**
 * Specifies one of the possible types of byte order.
 * See %G_BYTE_ORDER.
 */
export const LITTLE_ENDIAN: number
/**
 * The natural logarithm of 10.
 */
export const LN10: number
/**
 * The natural logarithm of 2.
 */
export const LN2: number
/**
 * Multiplying the base 2 exponent by this number yields the base 10 exponent.
 */
export const LOG_2_BASE_10: number
/**
 * Defines the log domain. See [Log Domains](#log-domains).
 * 
 * Libraries should define this so that any messages
 * which they log can be differentiated from messages from other
 * libraries and application code. But be careful not to define
 * it in any public header files.
 * 
 * Log domains must be unique, and it is recommended that they are the
 * application or library name, optionally followed by a hyphen and a sub-domain
 * name. For example, `bloatpad` or `bloatpad-io`.
 * 
 * If undefined, it defaults to the default %NULL (or `""`) log domain; this is
 * not advisable, as it cannot be filtered against using the `G_MESSAGES_DEBUG`
 * environment variable.
 * 
 * For example, GTK+ uses this in its `Makefile.am`:
 * |[
 * AM_CPPFLAGS = -DG_LOG_DOMAIN=\"Gtk\"
 * ```
 * 
 * 
 * Applications can choose to leave it as the default %NULL (or `""`)
 * domain. However, defining the domain offers the same advantages as
 * above.
 */
export const LOG_DOMAIN: number
/**
 * GLib log levels that are considered fatal by default.
 * 
 * This is not used if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 */
export const LOG_FATAL_MASK: number
/**
 * Log levels below 1<<G_LOG_LEVEL_USER_SHIFT are used by GLib.
 * Higher bits can be used for user-defined log levels.
 */
export const LOG_LEVEL_USER_SHIFT: number
/**
 * The major version number of the GLib library.
 * 
 * Like #glib_major_version, but from the headers used at
 * application compile time, rather than from the library
 * linked against at application run time.
 */
export const MAJOR_VERSION: number
/**
 * The maximum value which can be held in a #gint16.
 */
export const MAXINT16: number
/**
 * The maximum value which can be held in a #gint32.
 */
export const MAXINT32: number
/**
 * The maximum value which can be held in a #gint64.
 */
export const MAXINT64: number
/**
 * The maximum value which can be held in a #gint8.
 */
export const MAXINT8: number
/**
 * The maximum value which can be held in a #guint16.
 */
export const MAXUINT16: number
/**
 * The maximum value which can be held in a #guint32.
 */
export const MAXUINT32: number
/**
 * The maximum value which can be held in a #guint64.
 */
export const MAXUINT64: number
/**
 * The maximum value which can be held in a #guint8.
 */
export const MAXUINT8: number
/**
 * The micro version number of the GLib library.
 * 
 * Like #gtk_micro_version, but from the headers used at
 * application compile time, rather than from the library
 * linked against at application run time.
 */
export const MICRO_VERSION: number
/**
 * The minimum value which can be held in a #gint16.
 */
export const MININT16: number
/**
 * The minimum value which can be held in a #gint32.
 */
export const MININT32: number
/**
 * The minimum value which can be held in a #gint64.
 */
export const MININT64: number
/**
 * The minimum value which can be held in a #gint8.
 */
export const MININT8: number
/**
 * The minor version number of the GLib library.
 * 
 * Like #gtk_minor_version, but from the headers used at
 * application compile time, rather than from the library
 * linked against at application run time.
 */
export const MINOR_VERSION: number
export const MODULE_SUFFIX: string
/**
 * If a long option in the main group has this name, it is not treated as a
 * regular option. Instead it collects all non-option arguments which would
 * otherwise be left in `argv`. The option must be of type
 * %G_OPTION_ARG_CALLBACK, %G_OPTION_ARG_STRING_ARRAY
 * or %G_OPTION_ARG_FILENAME_ARRAY.
 * 
 * 
 * Using %G_OPTION_REMAINING instead of simply scanning `argv`
 * for leftover arguments has the advantage that GOption takes care of
 * necessary encoding conversions for strings or filenames.
 */
export const OPTION_REMAINING: string
/**
 * Specifies one of the possible types of byte order
 * (currently unused). See %G_BYTE_ORDER.
 */
export const PDP_ENDIAN: number
/**
 * The value of pi (ratio of circle's circumference to its diameter).
 */
export const PI: number
/**
 * A format specifier that can be used in printf()-style format strings
 * when printing a #GPid.
 */
export const PID_FORMAT: string
/**
 * Pi divided by 2.
 */
export const PI_2: number
/**
 * Pi divided by 4.
 */
export const PI_4: number
/**
 * A format specifier that can be used in printf()-style format strings
 * when printing the `fd` member of a #GPollFD.
 */
export const POLLFD_FORMAT: string
/**
 * Use this for default priority event sources.
 * 
 * In GLib this priority is used when adding timeout functions
 * with g_timeout_add(). In GDK this priority is used for events
 * from the X server.
 */
export const PRIORITY_DEFAULT: number
/**
 * Use this for default priority idle functions.
 * 
 * In GLib this priority is used when adding idle functions with
 * g_idle_add().
 */
export const PRIORITY_DEFAULT_IDLE: number
/**
 * Use this for high priority event sources.
 * 
 * It is not used within GLib or GTK+.
 */
export const PRIORITY_HIGH: number
/**
 * Use this for high priority idle functions.
 * 
 * GTK+ uses %G_PRIORITY_HIGH_IDLE + 10 for resizing operations,
 * and %G_PRIORITY_HIGH_IDLE + 20 for redrawing operations. (This is
 * done to ensure that any pending resizes are processed before any
 * pending redraws, so that widgets are not redrawn twice unnecessarily.)
 */
export const PRIORITY_HIGH_IDLE: number
/**
 * Use this for very low priority background tasks.
 * 
 * It is not used within GLib or GTK+.
 */
export const PRIORITY_LOW: number
/**
 * The search path separator character.
 * This is ':' on UNIX machines and ';' under Windows.
 */
export const SEARCHPATH_SEPARATOR: number
/**
 * The search path separator as a string.
 * This is ":" on UNIX machines and ";" under Windows.
 */
export const SEARCHPATH_SEPARATOR_S: string
export const SIZEOF_LONG: number
export const SIZEOF_SIZE_T: number
export const SIZEOF_SSIZE_T: number
export const SIZEOF_VOID_P: number
/**
 * Use this macro as the return value of a #GSourceFunc to leave
 * the #GSource in the main loop.
 */
export const SOURCE_CONTINUE: boolean
/**
 * Use this macro as the return value of a #GSourceFunc to remove
 * the #GSource from the main loop.
 */
export const SOURCE_REMOVE: boolean
/**
 * The square root of two.
 */
export const SQRT2: number
/**
 * The standard delimiters, used in g_strdelimit().
 */
export const STR_DELIMITERS: string
export const SYSDEF_AF_INET: number
export const SYSDEF_AF_INET6: number
export const SYSDEF_AF_UNIX: number
export const SYSDEF_MSG_DONTROUTE: number
export const SYSDEF_MSG_OOB: number
export const SYSDEF_MSG_PEEK: number
/**
 * Creates a unique temporary directory for each unit test and uses
 * g_set_user_dirs() to set XDG directories to point into subdirectories of it
 * for the duration of the unit test. The directory tree is cleaned up after the
 * test finishes successfully. Note that this doesn’t take effect until
 * g_test_run() is called, so calls to (for example) g_get_user_home_dir() will
 * return the system-wide value when made in a test program’s main() function.
 * 
 * The following functions will return subdirectories of the temporary directory
 * when this option is used. The specific subdirectory paths in use are not
 * guaranteed to be stable API — always use a getter function to retrieve them.
 * 
 *  - g_get_home_dir()
 *  - g_get_user_cache_dir()
 *  - g_get_system_config_dirs()
 *  - g_get_user_config_dir()
 *  - g_get_system_data_dirs()
 *  - g_get_user_data_dir()
 *  - g_get_user_state_dir()
 *  - g_get_user_runtime_dir()
 * 
 * The subdirectories may not be created by the test harness; as with normal
 * calls to functions like g_get_user_cache_dir(), the caller must be prepared
 * to create the directory if it doesn’t exist.
 */
export const TEST_OPTION_ISOLATE_DIRS: string
/**
 * Evaluates to a time span of one day.
 */
export const TIME_SPAN_DAY: number
/**
 * Evaluates to a time span of one hour.
 */
export const TIME_SPAN_HOUR: number
/**
 * Evaluates to a time span of one millisecond.
 */
export const TIME_SPAN_MILLISECOND: number
/**
 * Evaluates to a time span of one minute.
 */
export const TIME_SPAN_MINUTE: number
/**
 * Evaluates to a time span of one second.
 */
export const TIME_SPAN_SECOND: number
/**
 * The maximum length (in codepoints) of a compatibility or canonical
 * decomposition of a single Unicode character.
 * 
 * This is as defined by Unicode 6.1.
 */
export const UNICHAR_MAX_DECOMPOSITION_LENGTH: number
/**
 * Generic delimiters characters as defined in
 * [RFC 3986](https://tools.ietf.org/html/rfc3986). Includes `:/?#[]```.
 */
export const URI_RESERVED_CHARS_GENERIC_DELIMITERS: string
/**
 * Subcomponent delimiter characters as defined in
 * [RFC 3986](https://tools.ietf.org/html/rfc3986). Includes `!$&'()*+,;=`.
 */
export const URI_RESERVED_CHARS_SUBCOMPONENT_DELIMITERS: string
/**
 * Number of microseconds in one second (1 million).
 * This macro is provided for code readability.
 */
export const USEC_PER_SEC: number
export const VA_COPY_AS_ARRAY: number
/**
 * A macro that should be defined by the user prior to including
 * the glib.h header.
 * The definition should be one of the predefined GLib version
 * macros: %GLIB_VERSION_2_26, %GLIB_VERSION_2_28,...
 * 
 * This macro defines the earliest version of GLib that the package is
 * required to be able to compile against.
 * 
 * If the compiler is configured to warn about the use of deprecated
 * functions, then using functions that were deprecated in version
 * %GLIB_VERSION_MIN_REQUIRED or earlier will cause warnings (but
 * using functions deprecated in later releases will not).
 */
export const VERSION_MIN_REQUIRED: number
export const WIN32_MSG_HANDLE: number
export const macro__has_attribute___noreturn__: number
/**
 * A wrapper for the POSIX access() function. This function is used to
 * test a pathname for one or several of read, write or execute
 * permissions, or just existence.
 * 
 * On Windows, the file protection mechanism is not at all POSIX-like,
 * and the underlying function in the C library only checks the
 * FAT-style READONLY attribute, and does not look at the ACL of a
 * file at all. This function is this in practise almost useless on
 * Windows. Software that needs to handle file permissions on Windows
 * more exactly should use the Win32 API.
 * 
 * See your C library manual for more details about access().
 * @param filename a pathname in the GLib file name encoding     (UTF-8 on Windows)
 * @param mode as in access()
 */
export function access(filename: string, mode: number): number
/**
 * This function is similar to g_malloc(), allocating (`n_blocks` * `n_block_bytes)`
 * bytes, but care is taken to align the allocated memory to with the given
 * alignment value. Additionally, it will detect possible overflow during
 * multiplication.
 * 
 * Aligned memory allocations returned by this function can only be
 * freed using g_aligned_free().
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 * @param alignment the alignment to be enforced, which must be a positive power of 2   and a multiple of `sizeof(void*)`
 */
export function alignedAlloc(nBlocks: number, nBlockBytes: number, alignment: number): object | null
/**
 * This function is similar to g_aligned_alloc(), but it will
 * also clear the allocated memory before returning it.
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 * @param alignment the alignment to be enforced, which must be a positive power of 2   and a multiple of `sizeof(void*)`
 */
export function alignedAlloc0(nBlocks: number, nBlockBytes: number, alignment: number): object | null
/**
 * Frees the memory allocated by g_aligned_alloc().
 * @param mem the memory to deallocate
 */
export function alignedFree(mem: object | null): void
/**
 * Determines the numeric value of a character as a decimal digit.
 * Differs from g_unichar_digit_value() because it takes a char, so
 * there's no worry about sign extension if characters are signed.
 * @param c an ASCII character
 */
export function asciiDigitValue(c: number): number
/**
 * Converts a #gdouble to a string, using the '.' as
 * decimal point.
 * 
 * This function generates enough precision that converting
 * the string back using g_ascii_strtod() gives the same machine-number
 * (on machines with IEEE compatible 64bit doubles). It is
 * guaranteed that the size of the resulting string will never
 * be larger than %G_ASCII_DTOSTR_BUF_SIZE bytes, including the terminating
 * nul character, which is always added.
 * @param buffer A buffer to place the resulting string in
 * @param bufLen The length of the buffer.
 * @param d The #gdouble to convert
 */
export function asciiDtostr(buffer: string, bufLen: number, d: number): string
/**
 * Converts a #gdouble to a string, using the '.' as
 * decimal point. To format the number you pass in
 * a printf()-style format string. Allowed conversion
 * specifiers are 'e', 'E', 'f', 'F', 'g' and 'G'.
 * 
 * The `format` must just be a single format specifier
 * starting with `%`, expecting a #gdouble argument.
 * 
 * The returned buffer is guaranteed to be nul-terminated.
 * 
 * If you just want to want to serialize the value into a
 * string, use g_ascii_dtostr().
 * @param buffer A buffer to place the resulting string in
 * @param bufLen The length of the buffer.
 * @param format The printf()-style format to use for the   code to use for converting
 * @param d The #gdouble to convert
 */
export function asciiFormatd(buffer: string, bufLen: number, format: string, d: number): string
/**
 * Compare two strings, ignoring the case of ASCII characters.
 * 
 * Unlike the BSD strcasecmp() function, this only recognizes standard
 * ASCII letters and ignores the locale, treating all non-ASCII
 * bytes as if they are not letters.
 * 
 * This function should be used only on strings that are known to be
 * in encodings where the bytes corresponding to ASCII letters always
 * represent themselves. This includes UTF-8 and the ISO-8859-*
 * charsets, but not for instance double-byte encodings like the
 * Windows Codepage 932, where the trailing bytes of double-byte
 * characters include all ASCII letters. If you compare two CP932
 * strings using this function, you will get false matches.
 * 
 * Both `s1` and `s2` must be non-%NULL.
 * @param s1 string to compare with `s2`
 * @param s2 string to compare with `s1`
 */
export function asciiStrcasecmp(s1: string, s2: string): number
/**
 * Converts all upper case ASCII letters to lower case ASCII letters.
 * @param str a string
 * @param len length of `str` in bytes, or -1 if `str` is nul-terminated
 */
export function asciiStrdown(str: string, len: number): string
/**
 * A convenience function for converting a string to a signed number.
 * 
 * This function assumes that `str` contains only a number of the given
 * `base` that is within inclusive bounds limited by `min` and `max`. If
 * this is true, then the converted number is stored in `out_num`. An
 * empty string is not a valid input. A string with leading or
 * trailing whitespace is also an invalid input.
 * 
 * `base` can be between 2 and 36 inclusive. Hexadecimal numbers must
 * not be prefixed with "0x" or "0X". Such a problem does not exist
 * for octal numbers, since they were usually prefixed with a zero
 * which does not change the value of the parsed number.
 * 
 * Parsing failures result in an error with the %G_NUMBER_PARSER_ERROR
 * domain. If the input is invalid, the error code will be
 * %G_NUMBER_PARSER_ERROR_INVALID. If the parsed number is out of
 * bounds - %G_NUMBER_PARSER_ERROR_OUT_OF_BOUNDS.
 * 
 * See g_ascii_strtoll() if you have more complex needs such as
 * parsing a string which starts with a number, but then has other
 * characters.
 * @param str a string
 * @param base base of a parsed number
 * @param min a lower bound (inclusive)
 * @param max an upper bound (inclusive)
 */
export function asciiStringToSigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* outNum */ number ]
/**
 * A convenience function for converting a string to an unsigned number.
 * 
 * This function assumes that `str` contains only a number of the given
 * `base` that is within inclusive bounds limited by `min` and `max`. If
 * this is true, then the converted number is stored in `out_num`. An
 * empty string is not a valid input. A string with leading or
 * trailing whitespace is also an invalid input. A string with a leading sign
 * (`-` or `+`) is not a valid input for the unsigned parser.
 * 
 * `base` can be between 2 and 36 inclusive. Hexadecimal numbers must
 * not be prefixed with "0x" or "0X". Such a problem does not exist
 * for octal numbers, since they were usually prefixed with a zero
 * which does not change the value of the parsed number.
 * 
 * Parsing failures result in an error with the %G_NUMBER_PARSER_ERROR
 * domain. If the input is invalid, the error code will be
 * %G_NUMBER_PARSER_ERROR_INVALID. If the parsed number is out of
 * bounds - %G_NUMBER_PARSER_ERROR_OUT_OF_BOUNDS.
 * 
 * See g_ascii_strtoull() if you have more complex needs such as
 * parsing a string which starts with a number, but then has other
 * characters.
 * @param str a string
 * @param base base of a parsed number
 * @param min a lower bound (inclusive)
 * @param max an upper bound (inclusive)
 */
export function asciiStringToUnsigned(str: string, base: number, min: number, max: number): [ /* returnType */ boolean, /* outNum */ number ]
/**
 * Compare `s1` and `s2`, ignoring the case of ASCII characters and any
 * characters after the first `n` in each string. If either string is
 * less than `n` bytes long, comparison will stop at the first nul byte
 * encountered.
 * 
 * Unlike the BSD strcasecmp() function, this only recognizes standard
 * ASCII letters and ignores the locale, treating all non-ASCII
 * characters as if they are not letters.
 * 
 * The same warning as in g_ascii_strcasecmp() applies: Use this
 * function only on strings known to be in encodings where bytes
 * corresponding to ASCII letters always represent themselves.
 * @param s1 string to compare with `s2`
 * @param s2 string to compare with `s1`
 * @param n number of characters to compare
 */
export function asciiStrncasecmp(s1: string, s2: string, n: number): number
/**
 * Converts a string to a #gdouble value.
 * 
 * This function behaves like the standard strtod() function
 * does in the C locale. It does this without actually changing
 * the current locale, since that would not be thread-safe.
 * A limitation of the implementation is that this function
 * will still accept localized versions of infinities and NANs.
 * 
 * This function is typically used when reading configuration
 * files or other non-user input that should be locale independent.
 * To handle input from the user you should normally use the
 * locale-sensitive system strtod() function.
 * 
 * To convert from a #gdouble to a string in a locale-insensitive
 * way, use g_ascii_dtostr().
 * 
 * If the correct value would cause overflow, plus or minus %HUGE_VAL
 * is returned (according to the sign of the value), and %ERANGE is
 * stored in %errno. If the correct value would cause underflow,
 * zero is returned and %ERANGE is stored in %errno.
 * 
 * This function resets %errno before calling strtod() so that
 * you can reliably detect overflow and underflow.
 * @param nptr the string to convert to a numeric value.
 */
export function asciiStrtod(nptr: string): [ /* returnType */ number, /* endptr */ string ]
/**
 * Converts a string to a #gint64 value.
 * This function behaves like the standard strtoll() function
 * does in the C locale. It does this without actually
 * changing the current locale, since that would not be
 * thread-safe.
 * 
 * This function is typically used when reading configuration
 * files or other non-user input that should be locale independent.
 * To handle input from the user you should normally use the
 * locale-sensitive system strtoll() function.
 * 
 * If the correct value would cause overflow, %G_MAXINT64 or %G_MININT64
 * is returned, and `ERANGE` is stored in `errno`.
 * If the base is outside the valid range, zero is returned, and
 * `EINVAL` is stored in `errno`. If the
 * string conversion fails, zero is returned, and `endptr` returns `nptr`
 * (if `endptr` is non-%NULL).
 * @param nptr the string to convert to a numeric value.
 * @param base to be used for the conversion, 2..36 or 0
 */
export function asciiStrtoll(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string ]
/**
 * Converts a string to a #guint64 value.
 * This function behaves like the standard strtoull() function
 * does in the C locale. It does this without actually
 * changing the current locale, since that would not be
 * thread-safe.
 * 
 * Note that input with a leading minus sign (`-`) is accepted, and will return
 * the negation of the parsed number, unless that would overflow a #guint64.
 * Critically, this means you cannot assume that a short fixed length input will
 * never result in a low return value, as the input could have a leading `-`.
 * 
 * This function is typically used when reading configuration
 * files or other non-user input that should be locale independent.
 * To handle input from the user you should normally use the
 * locale-sensitive system strtoull() function.
 * 
 * If the correct value would cause overflow, %G_MAXUINT64
 * is returned, and `ERANGE` is stored in `errno`.
 * If the base is outside the valid range, zero is returned, and
 * `EINVAL` is stored in `errno`.
 * If the string conversion fails, zero is returned, and `endptr` returns
 * `nptr` (if `endptr` is non-%NULL).
 * @param nptr the string to convert to a numeric value.
 * @param base to be used for the conversion, 2..36 or 0
 */
export function asciiStrtoull(nptr: string, base: number): [ /* returnType */ number, /* endptr */ string ]
/**
 * Converts all lower case ASCII letters to upper case ASCII letters.
 * @param str a string
 * @param len length of `str` in bytes, or -1 if `str` is nul-terminated
 */
export function asciiStrup(str: string, len: number): string
/**
 * Convert a character to ASCII lower case.
 * 
 * Unlike the standard C library tolower() function, this only
 * recognizes standard ASCII letters and ignores the locale, returning
 * all non-ASCII characters unchanged, even if they are lower case
 * letters in a particular character set. Also unlike the standard
 * library function, this takes and returns a char, not an int, so
 * don't call it on %EOF but no need to worry about casting to #guchar
 * before passing a possibly non-ASCII character in.
 * @param c any character
 */
export function asciiTolower(c: number): number
/**
 * Convert a character to ASCII upper case.
 * 
 * Unlike the standard C library toupper() function, this only
 * recognizes standard ASCII letters and ignores the locale, returning
 * all non-ASCII characters unchanged, even if they are upper case
 * letters in a particular character set. Also unlike the standard
 * library function, this takes and returns a char, not an int, so
 * don't call it on %EOF but no need to worry about casting to #guchar
 * before passing a possibly non-ASCII character in.
 * @param c any character
 */
export function asciiToupper(c: number): number
/**
 * Determines the numeric value of a character as a hexadecimal
 * digit. Differs from g_unichar_xdigit_value() because it takes
 * a char, so there's no worry about sign extension if characters
 * are signed.
 * @param c an ASCII character.
 */
export function asciiXdigitValue(c: number): number
export function assertWarning(logDomain: string, file: string, line: number, prettyFunction: string, expression: string): void
export function assertionMessage(domain: string, file: string, line: number, func: string, message: string): void
export function assertionMessageCmpstr(domain: string, file: string, line: number, func: string, expr: string, arg1: string, cmp: string, arg2: string): void
export function assertionMessageCmpstrv(domain: string, file: string, line: number, func: string, expr: string, arg1: string, arg2: string, firstWrongIdx: number): void
export function assertionMessageError(domain: string, file: string, line: number, func: string, expr: string, error: Error, errorDomain: Quark, errorCode: number): void
/**
 * Specifies a function to be called at normal program termination.
 * 
 * Since GLib 2.8.2, on Windows g_atexit() actually is a preprocessor
 * macro that maps to a call to the atexit() function in the C
 * library. This means that in case the code that calls g_atexit(),
 * i.e. atexit(), is in a DLL, the function will be called when the
 * DLL is detached from the program. This typically makes more sense
 * than that the function is called when the GLib DLL is detached,
 * which happened earlier when g_atexit() was a function in the GLib
 * DLL.
 * 
 * The behaviour of atexit() in the context of dynamically loaded
 * modules is not formally specified and varies wildly.
 * 
 * On POSIX systems, calling g_atexit() (or atexit()) in a dynamically
 * loaded module which is unloaded before the program terminates might
 * well cause a crash at program exit.
 * 
 * Some POSIX systems implement atexit() like Windows, and have each
 * dynamically loaded module maintain an own atexit chain that is
 * called when the module is unloaded.
 * 
 * On other POSIX systems, before a dynamically loaded module is
 * unloaded, the registered atexit functions (if any) residing in that
 * module are called, regardless where the code that registered them
 * resided. This is presumably the most robust approach.
 * 
 * As can be seen from the above, for portability it's best to avoid
 * calling g_atexit() (or atexit()) except in the main executable of a
 * program.
 * @param func the function to call on normal program termination.
 */
export function atexit(func: VoidFunc): void
/**
 * Atomically adds `val` to the value of `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic += val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * Before version 2.30, this function did not return a value
 * (but g_atomic_int_exchange_and_add() did, and had the same meaning).
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 * @param val the value to add
 */
export function atomicIntAdd(atomic: number, val: number): number
/**
 * Performs an atomic bitwise 'and' of the value of `atomic` and `val,`
 * storing the result back in `atomic`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic &= val; return tmp; }`.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 * @param val the value to 'and'
 */
export function atomicIntAnd(atomic: number, val: number): number
/**
 * Compares `atomic` to `oldval` and, if equal, sets it to `newval`.
 * If `atomic` was not equal to `oldval` then no change occurs.
 * 
 * This compare and exchange is done atomically.
 * 
 * Think of this operation as an atomic version of
 * `{ if (*atomic == oldval) { *atomic = newval; return TRUE; } else return FALSE; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 * @param oldval the value to compare with
 * @param newval the value to conditionally replace with
 */
export function atomicIntCompareAndExchange(atomic: number, oldval: number, newval: number): boolean
/**
 * Decrements the value of `atomic` by 1.
 * 
 * Think of this operation as an atomic version of
 * `{ *atomic -= 1; return (*atomic == 0); }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 */
export function atomicIntDecAndTest(atomic: number): boolean
/**
 * This function existed before g_atomic_int_add() returned the prior
 * value of the integer (which it now does).  It is retained only for
 * compatibility reasons.  Don't use this function in new code.
 * @param atomic a pointer to a #gint
 * @param val the value to add
 */
export function atomicIntExchangeAndAdd(atomic: number, val: number): number
/**
 * Gets the current value of `atomic`.
 * 
 * This call acts as a full compiler and hardware
 * memory barrier (before the get).
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 */
export function atomicIntGet(atomic: number): number
/**
 * Increments the value of `atomic` by 1.
 * 
 * Think of this operation as an atomic version of `{ *atomic += 1; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 */
export function atomicIntInc(atomic: number): void
/**
 * Performs an atomic bitwise 'or' of the value of `atomic` and `val,`
 * storing the result back in `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic |= val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 * @param val the value to 'or'
 */
export function atomicIntOr(atomic: number, val: number): number
/**
 * Sets the value of `atomic` to `newval`.
 * 
 * This call acts as a full compiler and hardware
 * memory barrier (after the set).
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 * @param newval a new value to store
 */
export function atomicIntSet(atomic: number, newval: number): void
/**
 * Performs an atomic bitwise 'xor' of the value of `atomic` and `val,`
 * storing the result back in `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic ^= val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gint or #guint
 * @param val the value to 'xor'
 */
export function atomicIntXor(atomic: number, val: number): number
/**
 * Atomically adds `val` to the value of `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic += val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 * @param val the value to add
 */
export function atomicPointerAdd(atomic: object, val: number): number
/**
 * Performs an atomic bitwise 'and' of the value of `atomic` and `val,`
 * storing the result back in `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic &= val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 * @param val the value to 'and'
 */
export function atomicPointerAnd(atomic: object, val: number): number
/**
 * Compares `atomic` to `oldval` and, if equal, sets it to `newval`.
 * If `atomic` was not equal to `oldval` then no change occurs.
 * 
 * This compare and exchange is done atomically.
 * 
 * Think of this operation as an atomic version of
 * `{ if (*atomic == oldval) { *atomic = newval; return TRUE; } else return FALSE; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 * @param oldval the value to compare with
 * @param newval the value to conditionally replace with
 */
export function atomicPointerCompareAndExchange(atomic: object, oldval: object | null, newval: object | null): boolean
/**
 * Gets the current value of `atomic`.
 * 
 * This call acts as a full compiler and hardware
 * memory barrier (before the get).
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 */
export function atomicPointerGet(atomic: object): object | null
/**
 * Performs an atomic bitwise 'or' of the value of `atomic` and `val,`
 * storing the result back in `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic |= val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 * @param val the value to 'or'
 */
export function atomicPointerOr(atomic: object, val: number): number
/**
 * Sets the value of `atomic` to `newval`.
 * 
 * This call acts as a full compiler and hardware
 * memory barrier (after the set).
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 * @param newval a new value to store
 */
export function atomicPointerSet(atomic: object, newval: object | null): void
/**
 * Performs an atomic bitwise 'xor' of the value of `atomic` and `val,`
 * storing the result back in `atomic`.
 * 
 * Think of this operation as an atomic version of
 * `{ tmp = *atomic; *atomic ^= val; return tmp; }`.
 * 
 * This call acts as a full compiler and hardware memory barrier.
 * 
 * While `atomic` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param atomic a pointer to a #gpointer-sized value
 * @param val the value to 'xor'
 */
export function atomicPointerXor(atomic: object, val: number): number
/**
 * Atomically acquires a reference on the data pointed by `mem_block`.
 * @param memBlock a pointer to reference counted data
 */
export function atomicRcBoxAcquire(memBlock: object): object
/**
 * Allocates `block_size` bytes of memory, and adds atomic
 * reference counting semantics to it.
 * 
 * The data will be freed when its reference count drops to
 * zero.
 * 
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 * @param blockSize the size of the allocation, must be greater than 0
 */
export function atomicRcBoxAlloc(blockSize: number): object
/**
 * Allocates `block_size` bytes of memory, and adds atomic
 * reference counting semantics to it.
 * 
 * The contents of the returned data is set to zero.
 * 
 * The data will be freed when its reference count drops to
 * zero.
 * 
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 * @param blockSize the size of the allocation, must be greater than 0
 */
export function atomicRcBoxAlloc0(blockSize: number): object
/**
 * Allocates a new block of data with atomic reference counting
 * semantics, and copies `block_size` bytes of `mem_block`
 * into it.
 * @param blockSize the number of bytes to copy, must be greater than 0
 * @param memBlock the memory to copy
 */
export function atomicRcBoxDup(blockSize: number, memBlock: object): object
/**
 * Retrieves the size of the reference counted data pointed by `mem_block`.
 * @param memBlock a pointer to reference counted data
 */
export function atomicRcBoxGetSize(memBlock: object): number
/**
 * Atomically releases a reference on the data pointed by `mem_block`.
 * 
 * If the reference was the last one, it will free the
 * resources allocated for `mem_block`.
 * @param memBlock a pointer to reference counted data
 */
export function atomicRcBoxRelease(memBlock: object): void
/**
 * Atomically releases a reference on the data pointed by `mem_block`.
 * 
 * If the reference was the last one, it will call `clear_func`
 * to clear the contents of `mem_block,` and then will free the
 * resources allocated for `mem_block`.
 * @param memBlock a pointer to reference counted data
 * @param clearFunc a function to call when clearing the data
 */
export function atomicRcBoxReleaseFull(memBlock: object, clearFunc: DestroyNotify): void
/**
 * Atomically compares the current value of `arc` with `val`.
 * @param arc the address of an atomic reference count variable
 * @param val the value to compare
 */
export function atomicRefCountCompare(arc: number, val: number): boolean
/**
 * Atomically decreases the reference count.
 * 
 * If %TRUE is returned, the reference count reached 0. After this point, `arc`
 * is an undefined state and must be reinitialized with
 * g_atomic_ref_count_init() to be used again.
 * @param arc the address of an atomic reference count variable
 */
export function atomicRefCountDec(arc: number): boolean
/**
 * Atomically increases the reference count.
 * @param arc the address of an atomic reference count variable
 */
export function atomicRefCountInc(arc: number): void
/**
 * Initializes a reference count variable to 1.
 * @param arc the address of an atomic reference count variable
 */
export function atomicRefCountInit(arc: number): void
/**
 * Decode a sequence of Base-64 encoded text into binary data.  Note
 * that the returned binary data is not necessarily zero-terminated,
 * so it should not be used as a character string.
 * @param text zero-terminated string with base64 text to decode
 */
export function base64Decode(text: string): Uint8Array
/**
 * Decode a sequence of Base-64 encoded text into binary data
 * by overwriting the input data.
 * @param text zero-terminated        string with base64 text to decode
 */
export function base64DecodeInplace(text: Uint8Array): [ /* returnType */ number, /* text */ Uint8Array ]
/**
 * Encode a sequence of binary data into its Base-64 stringified
 * representation.
 * @param data the binary data to encode
 */
export function base64Encode(data: Uint8Array | null): string
/**
 * Flush the status from a sequence of calls to g_base64_encode_step().
 * 
 * The output buffer must be large enough to fit all the data that will
 * be written to it. It will need up to 4 bytes, or up to 5 bytes if
 * line-breaking is enabled.
 * 
 * The `out` array will not be automatically nul-terminated.
 * @param breakLines whether to break long lines
 * @param state Saved state from g_base64_encode_step()
 * @param save Saved state from g_base64_encode_step()
 */
export function base64EncodeClose(breakLines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* save */ number ]
/**
 * Incrementally encode a sequence of binary data into its Base-64 stringified
 * representation. By calling this function multiple times you can convert
 * data in chunks to avoid having to have the full encoded data in memory.
 * 
 * When all of the data has been converted you must call
 * g_base64_encode_close() to flush the saved state.
 * 
 * The output buffer must be large enough to fit all the data that will
 * be written to it. Due to the way base64 encodes you will need
 * at least: (`len` / 3 + 1) * 4 + 4 bytes (+ 4 may be needed in case of
 * non-zero state). If you enable line-breaking you will need at least:
 * ((`len` / 3 + 1) * 4 + 4) / 76 + 1 bytes of extra space.
 * 
 * `break_lines` is typically used when putting base64-encoded data in emails.
 * It breaks the lines at 76 columns instead of putting all of the text on
 * the same line. This avoids problems with long lines in the email system.
 * Note however that it breaks the lines with `LF` characters, not
 * `CR LF` sequences, so the result cannot be passed directly to SMTP
 * or certain other protocols.
 * @param in_ the binary data to encode
 * @param breakLines whether to break long lines
 * @param state Saved state between steps, initialize to 0
 * @param save Saved state between steps, initialize to 0
 */
export function base64EncodeStep(in_: Uint8Array, breakLines: boolean, state: number, save: number): [ /* returnType */ number, /* out */ Uint8Array, /* state */ number, /* save */ number ]
/**
 * Gets the name of the file without any leading directory
 * components. It returns a pointer into the given file name
 * string.
 * @param fileName the name of the file
 */
export function basename(fileName: string): string
/**
 * Sets the indicated `lock_bit` in `address`.  If the bit is already
 * set, this call will block until g_bit_unlock() unsets the
 * corresponding bit.
 * 
 * Attempting to lock on two different bits within the same integer is
 * not supported and will very probably cause deadlocks.
 * 
 * The value of the bit that is set is (1u << `bit)`.  If `bit` is not
 * between 0 and 31 then the result is undefined.
 * 
 * This function accesses `address` atomically.  All other accesses to
 * `address` must be atomic in order for this function to work
 * reliably. While `address` has a `volatile` qualifier, this is a historical
 * artifact and the argument passed to it should not be `volatile`.
 * @param address a pointer to an integer
 * @param lockBit a bit value between 0 and 31
 */
export function bitLock(address: number, lockBit: number): void
/**
 * Find the position of the first bit set in `mask,` searching
 * from (but not including) `nth_bit` upwards. Bits are numbered
 * from 0 (least significant) to sizeof(#gulong) * 8 - 1 (31 or 63,
 * usually). To start searching from the 0th bit, set `nth_bit` to -1.
 * @param mask a #gulong containing flags
 * @param nthBit the index of the bit to start the search from
 */
export function bitNthLsf(mask: number, nthBit: number): number
/**
 * Find the position of the first bit set in `mask,` searching
 * from (but not including) `nth_bit` downwards. Bits are numbered
 * from 0 (least significant) to sizeof(#gulong) * 8 - 1 (31 or 63,
 * usually). To start searching from the last bit, set `nth_bit` to
 * -1 or GLIB_SIZEOF_LONG * 8.
 * @param mask a #gulong containing flags
 * @param nthBit the index of the bit to start the search from
 */
export function bitNthMsf(mask: number, nthBit: number): number
/**
 * Gets the number of bits used to hold `number,`
 * e.g. if `number` is 4, 3 bits are needed.
 * @param number a #guint
 */
export function bitStorage(number: number): number
/**
 * Sets the indicated `lock_bit` in `address,` returning %TRUE if
 * successful.  If the bit is already set, returns %FALSE immediately.
 * 
 * Attempting to lock on two different bits within the same integer is
 * not supported.
 * 
 * The value of the bit that is set is (1u << `bit)`.  If `bit` is not
 * between 0 and 31 then the result is undefined.
 * 
 * This function accesses `address` atomically.  All other accesses to
 * `address` must be atomic in order for this function to work
 * reliably. While `address` has a `volatile` qualifier, this is a historical
 * artifact and the argument passed to it should not be `volatile`.
 * @param address a pointer to an integer
 * @param lockBit a bit value between 0 and 31
 */
export function bitTrylock(address: number, lockBit: number): boolean
/**
 * Clears the indicated `lock_bit` in `address`.  If another thread is
 * currently blocked in g_bit_lock() on this same bit then it will be
 * woken up.
 * 
 * This function accesses `address` atomically.  All other accesses to
 * `address` must be atomic in order for this function to work
 * reliably. While `address` has a `volatile` qualifier, this is a historical
 * artifact and the argument passed to it should not be `volatile`.
 * @param address a pointer to an integer
 * @param lockBit a bit value between 0 and 31
 */
export function bitUnlock(address: number, lockBit: number): void
export function bookmarkFileErrorQuark(): Quark
/**
 * Behaves exactly like g_build_filename(), but takes the path elements
 * as a string array, instead of varargs. This function is mainly
 * meant for language bindings.
 * @param args %NULL-terminated     array of strings containing the path elements.
 */
export function buildFilenamev(args: string[]): string
/**
 * Behaves exactly like g_build_path(), but takes the path elements
 * as a string array, instead of varargs. This function is mainly
 * meant for language bindings.
 * @param separator a string used to separator the elements of the path.
 * @param args %NULL-terminated     array of strings containing the path elements.
 */
export function buildPathv(separator: string, args: string[]): string
/**
 * Frees the memory allocated by the #GByteArray. If `free_segment` is
 * %TRUE it frees the actual byte data. If the reference count of
 * `array` is greater than one, the #GByteArray wrapper is preserved but
 * the size of `array` will be set to zero.
 * @param array a #GByteArray
 * @param freeSegment if %TRUE the actual byte data is freed as well
 */
export function byteArrayFree(array: Uint8Array, freeSegment: boolean): number
/**
 * Transfers the data from the #GByteArray into a new immutable #GBytes.
 * 
 * The #GByteArray is freed unless the reference count of `array` is greater
 * than one, the #GByteArray wrapper is preserved but the size of `array`
 * will be set to zero.
 * 
 * This is identical to using g_bytes_new_take() and g_byte_array_free()
 * together.
 * @param array a #GByteArray
 */
export function byteArrayFreeToBytes(array: Uint8Array): any
/**
 * Creates a new #GByteArray with a reference count of 1.
 */
export function byteArrayNew(): Uint8Array
/**
 * Create byte array containing the data. The data will be owned by the array
 * and will be freed with g_free(), i.e. it could be allocated using g_strdup().
 * 
 * Do not use it if `len` is greater than %G_MAXUINT. #GByteArray
 * stores the length of its data in #guint, which may be shorter than
 * #gsize.
 * @param data byte data for the array
 */
export function byteArrayNewTake(data: Uint8Array): Uint8Array
/**
 * Frees the data in the array and resets the size to zero, while
 * the underlying array is preserved for use elsewhere and returned
 * to the caller.
 * @param array a #GByteArray.
 */
export function byteArraySteal(array: Uint8Array): [ /* returnType */ number, /* len */ number ]
/**
 * Atomically decrements the reference count of `array` by one. If the
 * reference count drops to 0, all memory allocated by the array is
 * released. This function is thread-safe and may be called from any
 * thread.
 * @param array A #GByteArray
 */
export function byteArrayUnref(array: Uint8Array): void
/**
 * Gets the canonical file name from `filename`. All triple slashes are turned into
 * single slashes, and all `..` and `.`s resolved against `relative_to`.
 * 
 * Symlinks are not followed, and the returned path is guaranteed to be absolute.
 * 
 * If `filename` is an absolute path, `relative_to` is ignored. Otherwise,
 * `relative_to` will be prepended to `filename` to make it absolute. `relative_to`
 * must be an absolute path, or %NULL. If `relative_to` is %NULL, it'll fallback
 * to g_get_current_dir().
 * 
 * This function never fails, and will canonicalize file paths even if they don't
 * exist.
 * 
 * No file system I/O is done.
 * @param filename the name of the file
 * @param relativeTo the relative directory, or %NULL to use the current working directory
 */
export function canonicalizeFilename(filename: string, relativeTo: string | null): string
/**
 * A wrapper for the POSIX chdir() function. The function changes the
 * current directory of the process to `path`.
 * 
 * See your C library manual for more details about chdir().
 * @param path a pathname in the GLib file name encoding     (UTF-8 on Windows)
 */
export function chdir(path: string): number
/**
 * Checks that the GLib library in use is compatible with the
 * given version.
 * 
 * Generally you would pass in the constants %GLIB_MAJOR_VERSION,
 * %GLIB_MINOR_VERSION, %GLIB_MICRO_VERSION as the three arguments
 * to this function; that produces a check that the library in use
 * is compatible with the version of GLib the application or module
 * was compiled against.
 * 
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * ``required_major`.required_minor.`required_micro``. Second
 * the running library must be binary compatible with the
 * version ``required_major`.`required_minor`.`required_micro``
 * (same major version.)
 * @param requiredMajor the required major version
 * @param requiredMinor the required minor version
 * @param requiredMicro the required micro version
 */
export function checkVersion(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
/**
 * Gets the length in bytes of digests of type `checksum_type`
 * @param checksumType a #GChecksumType
 */
export function checksumTypeGetLength(checksumType: ChecksumType): number
/**
 * Sets a function to be called when the child indicated by `pid`
 * exits, at the priority `priority`.
 * 
 * If you obtain `pid` from g_spawn_async() or g_spawn_async_with_pipes()
 * you will need to pass %G_SPAWN_DO_NOT_REAP_CHILD as flag to
 * the spawn function for the child watching to work.
 * 
 * In many programs, you will want to call g_spawn_check_wait_status()
 * in the callback to determine whether or not the child exited
 * successfully.
 * 
 * Also, note that on platforms where #GPid must be explicitly closed
 * (see g_spawn_close_pid()) `pid` must not be closed while the source
 * is still active.  Typically, you should invoke g_spawn_close_pid()
 * in the callback function for the source.
 * 
 * GLib supports only a single callback per process id.
 * On POSIX platforms, the same restrictions mentioned for
 * g_child_watch_source_new() apply to this function.
 * 
 * This internally creates a main loop source using
 * g_child_watch_source_new() and attaches it to the main loop context
 * using g_source_attach(). You can do these steps manually if you
 * need greater control.
 * @param priority the priority of the idle source. Typically this will be in the   range between %G_PRIORITY_DEFAULT_IDLE and %G_PRIORITY_HIGH_IDLE.
 * @param pid process to watch. On POSIX the positive pid of a child process. On Windows a handle for a process (which doesn't have to be a child).
 * @param function_ function to call
 */
export function childWatchAdd(priority: number, pid: Pid, function_: ChildWatchFunc): number
/**
 * Creates a new child_watch source.
 * 
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * 
 * Note that child watch sources can only be used in conjunction with
 * `g_spawn...` when the %G_SPAWN_DO_NOT_REAP_CHILD flag is used.
 * 
 * Note that on platforms where #GPid must be explicitly closed
 * (see g_spawn_close_pid()) `pid` must not be closed while the
 * source is still active. Typically, you will want to call
 * g_spawn_close_pid() in the callback function for the source.
 * 
 * On POSIX platforms, the following restrictions apply to this API
 * due to limitations in POSIX process interfaces:
 * 
 * * `pid` must be a child of this process
 * * `pid` must be positive
 * * the application must not call `waitpid` with a non-positive
 *   first argument, for instance in another thread
 * * the application must not wait for `pid` to exit by any other
 *   mechanism, including `waitpid(pid, ...)` or a second child-watch
 *   source for the same `pid`
 * * the application must not ignore `SIGCHLD`
 * 
 * If any of those conditions are not met, this and related APIs will
 * not work correctly. This can often be diagnosed via a GLib warning
 * stating that `ECHILD` was received by `waitpid`.
 * 
 * Calling `waitpid` for specific processes other than `pid` remains a
 * valid thing to do.
 * @param pid process to watch. On POSIX the positive pid of a child process. On Windows a handle for a process (which doesn't have to be a child).
 */
export function childWatchSourceNew(pid: Pid): Source
/**
 * If `err` or *`err` is %NULL, does nothing. Otherwise,
 * calls g_error_free() on *`err` and sets *`err` to %NULL.
 */
export function clearError(): void
/**
 * This wraps the close() call; in case of error, %errno will be
 * preserved, but the error will also be stored as a #GError in `error`.
 * 
 * Besides using #GError, there is another major reason to prefer this
 * function over the call provided by the system; on Unix, it will
 * attempt to correctly handle %EINTR, which has platform-specific
 * semantics.
 * @param fd A file descriptor
 */
export function close(fd: number): boolean
/**
 * Computes the checksum for a binary `data`. This is a
 * convenience wrapper for g_checksum_new(), g_checksum_get_string()
 * and g_checksum_free().
 * 
 * The hexadecimal string returned will be in lower case.
 * @param checksumType a #GChecksumType
 * @param data binary blob to compute the digest of
 */
export function computeChecksumForBytes(checksumType: ChecksumType, data: any): string | null
/**
 * Computes the checksum for a binary `data` of `length`. This is a
 * convenience wrapper for g_checksum_new(), g_checksum_get_string()
 * and g_checksum_free().
 * 
 * The hexadecimal string returned will be in lower case.
 * @param checksumType a #GChecksumType
 * @param data binary blob to compute the digest of
 */
export function computeChecksumForData(checksumType: ChecksumType, data: Uint8Array): string | null
/**
 * Computes the checksum of a string.
 * 
 * The hexadecimal string returned will be in lower case.
 * @param checksumType a #GChecksumType
 * @param str the string to compute the checksum of
 * @param length the length of the string, or -1 if the string is null-terminated.
 */
export function computeChecksumForString(checksumType: ChecksumType, str: string, length: number): string | null
/**
 * Computes the HMAC for a binary `data`. This is a
 * convenience wrapper for g_hmac_new(), g_hmac_get_string()
 * and g_hmac_unref().
 * 
 * The hexadecimal string returned will be in lower case.
 * @param digestType a #GChecksumType to use for the HMAC
 * @param key the key to use in the HMAC
 * @param data binary blob to compute the HMAC of
 */
export function computeHmacForBytes(digestType: ChecksumType, key: any, data: any): string
/**
 * Computes the HMAC for a binary `data` of `length`. This is a
 * convenience wrapper for g_hmac_new(), g_hmac_get_string()
 * and g_hmac_unref().
 * 
 * The hexadecimal string returned will be in lower case.
 * @param digestType a #GChecksumType to use for the HMAC
 * @param key the key to use in the HMAC
 * @param data binary blob to compute the HMAC of
 */
export function computeHmacForData(digestType: ChecksumType, key: Uint8Array, data: Uint8Array): string
/**
 * Computes the HMAC for a string.
 * 
 * The hexadecimal string returned will be in lower case.
 * @param digestType a #GChecksumType to use for the HMAC
 * @param key the key to use in the HMAC
 * @param str the string to compute the HMAC for
 * @param length the length of the string, or -1 if the string is nul-terminated
 */
export function computeHmacForString(digestType: ChecksumType, key: Uint8Array, str: string, length: number): string
/**
 * Converts a string from one character set to another.
 * 
 * Note that you should use g_iconv() for streaming conversions.
 * Despite the fact that `bytes_read` can return information about partial
 * characters, the g_convert_... functions are not generally suitable
 * for streaming. If the underlying converter maintains internal state,
 * then this won't be preserved across successive calls to g_convert(),
 * g_convert_with_iconv() or g_convert_with_fallback(). (An example of
 * this is the GNU C converter for CP1255 which does not emit a base
 * character until it knows that the next character is not a mark that
 * could combine with the base character.)
 * 
 * Using extensions such as "//TRANSLIT" may not work (or may not work
 * well) on many platforms.  Consider using g_str_to_ascii() instead.
 * @param str                  the string to convert.
 * @param toCodeset name of character set into which to convert `str`
 * @param fromCodeset character set of `str`.
 */
export function convert(str: Uint8Array, toCodeset: string, fromCodeset: string): [ /* returnType */ Uint8Array, /* bytesRead */ number ]
export function convertErrorQuark(): Quark
/**
 * Converts a string from one character set to another, possibly
 * including fallback sequences for characters not representable
 * in the output. Note that it is not guaranteed that the specification
 * for the fallback sequences in `fallback` will be honored. Some
 * systems may do an approximate conversion from `from_codeset`
 * to `to_codeset` in their iconv() functions,
 * in which case GLib will simply return that approximate conversion.
 * 
 * Note that you should use g_iconv() for streaming conversions.
 * Despite the fact that `bytes_read` can return information about partial
 * characters, the g_convert_... functions are not generally suitable
 * for streaming. If the underlying converter maintains internal state,
 * then this won't be preserved across successive calls to g_convert(),
 * g_convert_with_iconv() or g_convert_with_fallback(). (An example of
 * this is the GNU C converter for CP1255 which does not emit a base
 * character until it knows that the next character is not a mark that
 * could combine with the base character.)
 * @param str                 the string to convert.
 * @param toCodeset name of character set into which to convert `str`
 * @param fromCodeset character set of `str`.
 * @param fallback UTF-8 string to use in place of characters not                present in the target encoding. (The string must be                representable in the target encoding).                If %NULL, characters not in the target encoding will                be represented as Unicode escapes \uxxxx or \Uxxxxyyyy.
 */
export function convertWithFallback(str: Uint8Array, toCodeset: string, fromCodeset: string, fallback: string): [ /* returnType */ Uint8Array, /* bytesRead */ number ]
/**
 * Calls the given function for each data element of the datalist. The
 * function is called with each data element's #GQuark id and data,
 * together with the given `user_data` parameter. Note that this
 * function is NOT thread-safe. So unless `datalist` can be protected
 * from any modifications during invocation of this function, it should
 * not be called.
 * 
 * `func` can make changes to `datalist,` but the iteration will not
 * reflect changes made during the g_datalist_foreach() call, other
 * than skipping over elements that are removed.
 * @param datalist a datalist.
 * @param func the function to call for each data element.
 */
export function datalistForeach(datalist: Data, func: DataForeachFunc): void
/**
 * Gets a data element, using its string identifier. This is slower than
 * g_datalist_id_get_data() because it compares strings.
 * @param datalist a datalist.
 * @param key the string identifying a data element.
 */
export function datalistGetData(datalist: Data, key: string): object | null
/**
 * Gets flags values packed in together with the datalist.
 * See g_datalist_set_flags().
 * @param datalist pointer to the location that holds a list
 */
export function datalistGetFlags(datalist: Data): number
/**
 * Retrieves the data element corresponding to `key_id`.
 * @param datalist a datalist.
 * @param keyId the #GQuark identifying a data element.
 */
export function datalistIdGetData(datalist: Data, keyId: Quark): object | null
/**
 * Turns on flag values for a data list. This function is used
 * to keep a small number of boolean flags in an object with
 * a data list without using any additional space. It is
 * not generally useful except in circumstances where space
 * is very tight. (It is used in the base #GObject type, for
 * example.)
 * @param datalist pointer to the location that holds a list
 * @param flags the flags to turn on. The values of the flags are   restricted by %G_DATALIST_FLAGS_MASK (currently   3; giving two possible boolean flags).   A value for `flags` that doesn't fit within the mask is   an error.
 */
export function datalistSetFlags(datalist: Data, flags: number): void
/**
 * Turns off flag values for a data list. See g_datalist_unset_flags()
 * @param datalist pointer to the location that holds a list
 * @param flags the flags to turn off. The values of the flags are   restricted by %G_DATALIST_FLAGS_MASK (currently   3: giving two possible boolean flags).   A value for `flags` that doesn't fit within the mask is   an error.
 */
export function datalistUnsetFlags(datalist: Data, flags: number): void
/**
 * Destroys the dataset, freeing all memory allocated, and calling any
 * destroy functions set for data elements.
 * @param datasetLocation the location identifying the dataset.
 */
export function datasetDestroy(datasetLocation: object): void
/**
 * Calls the given function for each data element which is associated
 * with the given location. Note that this function is NOT thread-safe.
 * So unless `dataset_location` can be protected from any modifications
 * during invocation of this function, it should not be called.
 * 
 * `func` can make changes to the dataset, but the iteration will not
 * reflect changes made during the g_dataset_foreach() call, other
 * than skipping over elements that are removed.
 * @param datasetLocation the location identifying the dataset.
 * @param func the function to call for each data element.
 */
export function datasetForeach(datasetLocation: object, func: DataForeachFunc): void
/**
 * Gets the data element corresponding to a #GQuark.
 * @param datasetLocation the location identifying the dataset.
 * @param keyId the #GQuark id to identify the data element.
 */
export function datasetIdGetData(datasetLocation: object, keyId: Quark): object | null
/**
 * Returns the number of days in a month, taking leap
 * years into account.
 * @param month month
 * @param year year
 */
export function dateGetDaysInMonth(month: DateMonth, year: DateYear): number
/**
 * Returns the number of weeks in the year, where weeks
 * are taken to start on Monday. Will be 52 or 53. The
 * date must be valid. (Years always have 52 7-day periods,
 * plus 1 or 2 extra days depending on whether it's a leap
 * year. This function is basically telling you how many
 * Mondays are in the year, i.e. there are 53 Mondays if
 * one of the extra days happens to be a Monday.)
 * @param year a year
 */
export function dateGetMondayWeeksInYear(year: DateYear): number
/**
 * Returns the number of weeks in the year, where weeks
 * are taken to start on Sunday. Will be 52 or 53. The
 * date must be valid. (Years always have 52 7-day periods,
 * plus 1 or 2 extra days depending on whether it's a leap
 * year. This function is basically telling you how many
 * Sundays are in the year, i.e. there are 53 Sundays if
 * one of the extra days happens to be a Sunday.)
 * @param year year to count weeks in
 */
export function dateGetSundayWeeksInYear(year: DateYear): number
/**
 * Returns %TRUE if the year is a leap year.
 * 
 * For the purposes of this function, leap year is every year
 * divisible by 4 unless that year is divisible by 100. If it
 * is divisible by 100 it would be a leap year only if that year
 * is also divisible by 400.
 * @param year year to check
 */
export function dateIsLeapYear(year: DateYear): boolean
/**
 * Generates a printed representation of the date, in a
 * [locale][setlocale]-specific way.
 * Works just like the platform's C library strftime() function,
 * but only accepts date-related formats; time-related formats
 * give undefined results. Date must be valid. Unlike strftime()
 * (which uses the locale encoding), works on a UTF-8 format
 * string and stores a UTF-8 result.
 * 
 * This function does not provide any conversion specifiers in
 * addition to those implemented by the platform's C library.
 * For example, don't expect that using g_date_strftime() would
 * make the \%F provided by the C99 strftime() work on Windows
 * where the C library only complies to C89.
 * @param s destination buffer
 * @param slen buffer size
 * @param format format string
 * @param date valid #GDate
 */
export function dateStrftime(s: string, slen: number, format: string, date: Date): number
/**
 * Returns %TRUE if the day of the month is valid (a day is valid if it's
 * between 1 and 31 inclusive).
 * @param day day to check
 */
export function dateValidDay(day: DateDay): boolean
/**
 * Returns %TRUE if the day-month-year triplet forms a valid, existing day
 * in the range of days #GDate understands (Year 1 or later, no more than
 * a few thousand years in the future).
 * @param day day
 * @param month month
 * @param year year
 */
export function dateValidDmy(day: DateDay, month: DateMonth, year: DateYear): boolean
/**
 * Returns %TRUE if the Julian day is valid. Anything greater than zero
 * is basically a valid Julian, though there is a 32-bit limit.
 * @param julianDate Julian day to check
 */
export function dateValidJulian(julianDate: number): boolean
/**
 * Returns %TRUE if the month value is valid. The 12 #GDateMonth
 * enumeration values are the only valid months.
 * @param month month
 */
export function dateValidMonth(month: DateMonth): boolean
/**
 * Returns %TRUE if the weekday is valid. The seven #GDateWeekday enumeration
 * values are the only valid weekdays.
 * @param weekday weekday
 */
export function dateValidWeekday(weekday: DateWeekday): boolean
/**
 * Returns %TRUE if the year is valid. Any year greater than 0 is valid,
 * though there is a 16-bit limit to what #GDate will understand.
 * @param year year
 */
export function dateValidYear(year: DateYear): boolean
/**
 * This is a variant of g_dgettext() that allows specifying a locale
 * category instead of always using `LC_MESSAGES`. See g_dgettext() for
 * more information about how this functions differs from calling
 * dcgettext() directly.
 * @param domain the translation domain to use, or %NULL to use   the domain set with textdomain()
 * @param msgid message to translate
 * @param category a locale category
 */
export function dcgettext(domain: string | null, msgid: string, category: number): string
/**
 * This function is a wrapper of dgettext() which does not translate
 * the message if the default domain as set with textdomain() has no
 * translations for the current locale.
 * 
 * The advantage of using this function over dgettext() proper is that
 * libraries using this function (like GTK+) will not use translations
 * if the application using the library does not have translations for
 * the current locale.  This results in a consistent English-only
 * interface instead of one having partial translations.  For this
 * feature to work, the call to textdomain() and setlocale() should
 * precede any g_dgettext() invocations.  For GTK+, it means calling
 * textdomain() before gtk_init or its variants.
 * 
 * This function disables translations if and only if upon its first
 * call all the following conditions hold:
 * 
 * - `domain` is not %NULL
 * 
 * - textdomain() has been called to set a default text domain
 * 
 * - there is no translations available for the default text domain
 *   and the current locale
 * 
 * - current locale is not "C" or any English locales (those
 *   starting with "en_")
 * 
 * Note that this behavior may not be desired for example if an application
 * has its untranslated messages in a language other than English. In those
 * cases the application should call textdomain() after initializing GTK+.
 * 
 * Applications should normally not use this function directly,
 * but use the _() macro for translations.
 * @param domain the translation domain to use, or %NULL to use   the domain set with textdomain()
 * @param msgid message to translate
 */
export function dgettext(domain: string | null, msgid: string): string
/**
 * Creates a subdirectory in the preferred directory for temporary
 * files (as returned by g_get_tmp_dir()).
 * 
 * `tmpl` should be a string in the GLib file name encoding containing
 * a sequence of six 'X' characters, as the parameter to g_mkstemp().
 * However, unlike these functions, the template should only be a
 * basename, no directory components are allowed. If template is
 * %NULL, a default template is used.
 * 
 * Note that in contrast to g_mkdtemp() (and mkdtemp()) `tmpl` is not
 * modified, and might thus be a read-only literal string.
 * @param tmpl Template for directory name,     as in g_mkdtemp(), basename only, or %NULL for a default template
 */
export function dirMakeTmp(tmpl: string | null): string
/**
 * Compares two #gpointer arguments and returns %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the `key_equal_func`
 * parameter, when using opaque pointers compared by pointer value as
 * keys in a #GHashTable.
 * 
 * This equality function is also appropriate for keys that are integers
 * stored in pointers, such as `GINT_TO_POINTER (n)`.
 * @param v1 a key
 * @param v2 a key to compare with `v1`
 */
export function directEqual(v1: object | null, v2: object | null): boolean
/**
 * Converts a gpointer to a hash value.
 * It can be passed to g_hash_table_new() as the `hash_func` parameter,
 * when using opaque pointers compared by pointer value as keys in a
 * #GHashTable.
 * 
 * This hash function is also appropriate for keys that are integers
 * stored in pointers, such as `GINT_TO_POINTER (n)`.
 * @param v a #gpointer key
 */
export function directHash(v: object | null): number
/**
 * This function is a wrapper of dngettext() which does not translate
 * the message if the default domain as set with textdomain() has no
 * translations for the current locale.
 * 
 * See g_dgettext() for details of how this differs from dngettext()
 * proper.
 * @param domain the translation domain to use, or %NULL to use   the domain set with textdomain()
 * @param msgid message to translate
 * @param msgidPlural plural form of the message
 * @param n the quantity for which translation is needed
 */
export function dngettext(domain: string | null, msgid: string, msgidPlural: string, n: number): string
/**
 * Compares the two #gdouble values being pointed to and returns
 * %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the `key_equal_func`
 * parameter, when using non-%NULL pointers to doubles as keys in a
 * #GHashTable.
 * @param v1 a pointer to a #gdouble key
 * @param v2 a pointer to a #gdouble key to compare with `v1`
 */
export function doubleEqual(v1: object, v2: object): boolean
/**
 * Converts a pointer to a #gdouble to a hash value.
 * It can be passed to g_hash_table_new() as the `hash_func` parameter,
 * It can be passed to g_hash_table_new() as the `hash_func` parameter,
 * when using non-%NULL pointers to doubles as keys in a #GHashTable.
 * @param v a pointer to a #gdouble key
 */
export function doubleHash(v: object): number
/**
 * This function is a variant of g_dgettext() which supports
 * a disambiguating message context. GNU gettext uses the
 * '\004' character to separate the message context and
 * message id in `msgctxtid`.
 * If 0 is passed as `msgidoffset,` this function will fall back to
 * trying to use the deprecated convention of using "|" as a separation
 * character.
 * 
 * This uses g_dgettext() internally. See that functions for differences
 * with dgettext() proper.
 * 
 * Applications should normally not use this function directly,
 * but use the C_() macro for translations with context.
 * @param domain the translation domain to use, or %NULL to use   the domain set with textdomain()
 * @param msgctxtid a combined message context and message id, separated   by a \004 character
 * @param msgidoffset the offset of the message id in `msgctxid`
 */
export function dpgettext(domain: string | null, msgctxtid: string, msgidoffset: number): string
/**
 * This function is a variant of g_dgettext() which supports
 * a disambiguating message context. GNU gettext uses the
 * '\004' character to separate the message context and
 * message id in `msgctxtid`.
 * 
 * This uses g_dgettext() internally. See that functions for differences
 * with dgettext() proper.
 * 
 * This function differs from C_() in that it is not a macro and
 * thus you may use non-string-literals as context and msgid arguments.
 * @param domain the translation domain to use, or %NULL to use   the domain set with textdomain()
 * @param context the message context
 * @param msgid the message
 */
export function dpgettext2(domain: string | null, context: string, msgid: string): string
/**
 * Returns the value of the environment variable `variable` in the
 * provided list `envp`.
 * @param envp      an environment list (eg, as returned from g_get_environ()), or %NULL     for an empty environment list
 * @param variable the environment variable to get
 */
export function environGetenv(envp: string[] | null, variable: string): string | null
/**
 * Sets the environment variable `variable` in the provided list
 * `envp` to `value`.
 * @param envp      an environment list that can be freed using g_strfreev() (e.g., as     returned from g_get_environ()), or %NULL for an empty     environment list
 * @param variable the environment variable to set, must not     contain '='
 * @param value the value for to set the variable to
 * @param overwrite whether to change the variable if it already exists
 */
export function environSetenv(envp: string[] | null, variable: string, value: string, overwrite: boolean): string[]
/**
 * Removes the environment variable `variable` from the provided
 * environment `envp`.
 * @param envp      an environment list that can be freed using g_strfreev() (e.g., as     returned from g_get_environ()), or %NULL for an empty environment list
 * @param variable the environment variable to remove, must not     contain '='
 */
export function environUnsetenv(envp: string[] | null, variable: string): string[]
/**
 * Gets a #GFileError constant based on the passed-in `err_no`.
 * 
 * For example, if you pass in `EEXIST` this function returns
 * %G_FILE_ERROR_EXIST. Unlike `errno` values, you can portably
 * assume that all #GFileError values will exist.
 * 
 * Normally a #GFileError value goes into a #GError returned
 * from a function that manipulates files. So you would use
 * g_file_error_from_errno() when constructing a #GError.
 * @param errNo an "errno" value
 */
export function fileErrorFromErrno(errNo: number): FileError
export function fileErrorQuark(): Quark
/**
 * Reads an entire file into allocated memory, with good error
 * checking.
 * 
 * If the call was successful, it returns %TRUE and sets `contents` to the file
 * contents and `length` to the length of the file contents in bytes. The string
 * stored in `contents` will be nul-terminated, so for text files you can pass
 * %NULL for the `length` argument. If the call was not successful, it returns
 * %FALSE and sets `error`. The error domain is %G_FILE_ERROR. Possible error
 * codes are those in the #GFileError enumeration. In the error case,
 * `contents` is set to %NULL and `length` is set to zero.
 * @param filename name of a file to read contents from, in the GLib file name encoding
 */
export function fileGetContents(filename: string): [ /* returnType */ boolean, /* contents */ Uint8Array ]
/**
 * Opens a file for writing in the preferred directory for temporary
 * files (as returned by g_get_tmp_dir()).
 * 
 * `tmpl` should be a string in the GLib file name encoding containing
 * a sequence of six 'X' characters, as the parameter to g_mkstemp().
 * However, unlike these functions, the template should only be a
 * basename, no directory components are allowed. If template is
 * %NULL, a default template is used.
 * 
 * Note that in contrast to g_mkstemp() (and mkstemp()) `tmpl` is not
 * modified, and might thus be a read-only literal string.
 * 
 * Upon success, and if `name_used` is non-%NULL, the actual name used
 * is returned in `name_used`. This string should be freed with g_free()
 * when not needed any longer. The returned name is in the GLib file
 * name encoding.
 * @param tmpl Template for file name, as in     g_mkstemp(), basename only, or %NULL for a default template
 */
export function fileOpenTmp(tmpl: string | null): [ /* returnType */ number, /* nameUsed */ string ]
/**
 * Reads the contents of the symbolic link `filename` like the POSIX
 * readlink() function.  The returned string is in the encoding used
 * for filenames. Use g_filename_to_utf8() to convert it to UTF-8.
 * @param filename the symbolic link
 */
export function fileReadLink(filename: string): string
/**
 * Writes all of `contents` to a file named `filename`. This is a convenience
 * wrapper around calling g_file_set_contents_full() with `flags` set to
 * `G_FILE_SET_CONTENTS_CONSISTENT | G_FILE_SET_CONTENTS_ONLY_EXISTING` and
 * `mode` set to `0666`.
 * @param filename name of a file to write `contents` to, in the GLib file name   encoding
 * @param contents string to write to the file
 */
export function fileSetContents(filename: string, contents: Uint8Array): boolean
/**
 * Writes all of `contents` to a file named `filename,` with good error checking.
 * If a file called `filename` already exists it will be overwritten.
 * 
 * `flags` control the properties of the write operation: whether it’s atomic,
 * and what the tradeoff is between returning quickly or being resilient to
 * system crashes.
 * 
 * As this function performs file I/O, it is recommended to not call it anywhere
 * where blocking would cause problems, such as in the main loop of a graphical
 * application. In particular, if `flags` has any value other than
 * %G_FILE_SET_CONTENTS_NONE then this function may call `fsync()`.
 * 
 * If %G_FILE_SET_CONTENTS_CONSISTENT is set in `flags,` the operation is atomic
 * in the sense that it is first written to a temporary file which is then
 * renamed to the final name.
 * 
 * Notes:
 * 
 * - On UNIX, if `filename` already exists hard links to `filename` will break.
 *   Also since the file is recreated, existing permissions, access control
 *   lists, metadata etc. may be lost. If `filename` is a symbolic link,
 *   the link itself will be replaced, not the linked file.
 * 
 * - On UNIX, if `filename` already exists and is non-empty, and if the system
 *   supports it (via a journalling filesystem or equivalent), and if
 *   %G_FILE_SET_CONTENTS_CONSISTENT is set in `flags,` the `fsync()` call (or
 *   equivalent) will be used to ensure atomic replacement: `filename`
 *   will contain either its old contents or `contents,` even in the face of
 *   system power loss, the disk being unsafely removed, etc.
 * 
 * - On UNIX, if `filename` does not already exist or is empty, there is a
 *   possibility that system power loss etc. after calling this function will
 *   leave `filename` empty or full of NUL bytes, depending on the underlying
 *   filesystem, unless %G_FILE_SET_CONTENTS_DURABLE and
 *   %G_FILE_SET_CONTENTS_CONSISTENT are set in `flags`.
 * 
 * - On Windows renaming a file will not remove an existing file with the
 *   new name, so on Windows there is a race condition between the existing
 *   file being removed and the temporary file being renamed.
 * 
 * - On Windows there is no way to remove a file that is open to some
 *   process, or mapped into memory. Thus, this function will fail if
 *   `filename` already exists and is open.
 * 
 * If the call was successful, it returns %TRUE. If the call was not successful,
 * it returns %FALSE and sets `error`. The error domain is %G_FILE_ERROR.
 * Possible error codes are those in the #GFileError enumeration.
 * 
 * Note that the name for the temporary file is constructed by appending up
 * to 7 characters to `filename`.
 * 
 * If the file didn’t exist before and is created, it will be given the
 * permissions from `mode`. Otherwise, the permissions of the existing file may
 * be changed to `mode` depending on `flags,` or they may remain unchanged.
 * @param filename name of a file to write `contents` to, in the GLib file name   encoding
 * @param contents string to write to the file
 * @param flags flags controlling the safety vs speed of the operation
 * @param mode file mode, as passed to `open()`; typically this will be `0666`
 */
export function fileSetContentsFull(filename: string, contents: Uint8Array, flags: FileSetContentsFlags, mode: number): boolean
/**
 * Returns %TRUE if any of the tests in the bitfield `test` are
 * %TRUE. For example, `(G_FILE_TEST_EXISTS | G_FILE_TEST_IS_DIR)`
 * will return %TRUE if the file exists; the check whether it's a
 * directory doesn't matter since the existence test is %TRUE. With
 * the current set of available tests, there's no point passing in
 * more than one test at a time.
 * 
 * Apart from %G_FILE_TEST_IS_SYMLINK all tests follow symbolic links,
 * so for a symbolic link to a regular file g_file_test() will return
 * %TRUE for both %G_FILE_TEST_IS_SYMLINK and %G_FILE_TEST_IS_REGULAR.
 * 
 * Note, that for a dangling symbolic link g_file_test() will return
 * %TRUE for %G_FILE_TEST_IS_SYMLINK and %FALSE for all other flags.
 * 
 * You should never use g_file_test() to test whether it is safe
 * to perform an operation, because there is always the possibility
 * of the condition changing before you actually perform the operation.
 * For example, you might think you could use %G_FILE_TEST_IS_SYMLINK
 * to know whether it is safe to write to a file without being
 * tricked into writing into a different location. It doesn't work!
 * 
 * ```c
 *  // DON'T DO THIS
 *  if (!g_file_test (filename, G_FILE_TEST_IS_SYMLINK))
 *    {
 *      fd = g_open (filename, O_WRONLY);
 *      // write to fd
 *    }
 * ```
 * 
 * 
 * Another thing to note is that %G_FILE_TEST_EXISTS and
 * %G_FILE_TEST_IS_EXECUTABLE are implemented using the access()
 * system call. This usually doesn't matter, but if your program
 * is setuid or setgid it means that these tests will give you
 * the answer for the real user ID and group ID, rather than the
 * effective user ID and group ID.
 * 
 * On Windows, there are no symlinks, so testing for
 * %G_FILE_TEST_IS_SYMLINK will always return %FALSE. Testing for
 * %G_FILE_TEST_IS_EXECUTABLE will just check that the file exists and
 * its name indicates that it is executable, checking for well-known
 * extensions and those listed in the `PATHEXT` environment variable.
 * @param filename a filename to test in the     GLib file name encoding
 * @param test bitfield of #GFileTest flags
 */
export function fileTest(filename: string, test: FileTest): boolean
/**
 * Returns the display basename for the particular filename, guaranteed
 * to be valid UTF-8. The display name might not be identical to the filename,
 * for instance there might be problems converting it to UTF-8, and some files
 * can be translated in the display.
 * 
 * If GLib cannot make sense of the encoding of `filename,` as a last resort it
 * replaces unknown characters with U+FFFD, the Unicode replacement character.
 * You can search the result for the UTF-8 encoding of this character (which is
 * "\357\277\275" in octal notation) to find out if `filename` was in an invalid
 * encoding.
 * 
 * You must pass the whole absolute pathname to this functions so that
 * translation of well known locations can be done.
 * 
 * This function is preferred over g_filename_display_name() if you know the
 * whole path, as it allows translation.
 * @param filename an absolute pathname in the     GLib file name encoding
 */
export function filenameDisplayBasename(filename: string): string
/**
 * Converts a filename into a valid UTF-8 string. The conversion is
 * not necessarily reversible, so you should keep the original around
 * and use the return value of this function only for display purposes.
 * Unlike g_filename_to_utf8(), the result is guaranteed to be non-%NULL
 * even if the filename actually isn't in the GLib file name encoding.
 * 
 * If GLib cannot make sense of the encoding of `filename,` as a last resort it
 * replaces unknown characters with U+FFFD, the Unicode replacement character.
 * You can search the result for the UTF-8 encoding of this character (which is
 * "\357\277\275" in octal notation) to find out if `filename` was in an invalid
 * encoding.
 * 
 * If you know the whole pathname of the file you should use
 * g_filename_display_basename(), since that allows location-based
 * translation of filenames.
 * @param filename a pathname hopefully in the     GLib file name encoding
 */
export function filenameDisplayName(filename: string): string
/**
 * Converts an escaped ASCII-encoded URI to a local filename in the
 * encoding used for filenames.
 * @param uri a uri describing a filename (escaped, encoded in ASCII).
 */
export function filenameFromUri(uri: string): [ /* returnType */ string, /* hostname */ string | null ]
/**
 * Converts a string from UTF-8 to the encoding GLib uses for
 * filenames. Note that on Windows GLib uses UTF-8 for filenames;
 * on other platforms, this function indirectly depends on the
 * [current locale][setlocale].
 * 
 * The input string shall not contain nul characters even if the `len`
 * argument is positive. A nul character found inside the string will result
 * in error %G_CONVERT_ERROR_ILLEGAL_SEQUENCE. If the filename encoding is
 * not UTF-8 and the conversion output contains a nul character, the error
 * %G_CONVERT_ERROR_EMBEDDED_NUL is set and the function returns %NULL.
 * @param utf8string a UTF-8 encoded string.
 * @param len the length of the string, or -1 if the string is                 nul-terminated.
 */
export function filenameFromUtf8(utf8string: string, len: number): [ /* returnType */ string, /* bytesRead */ number, /* bytesWritten */ number ]
/**
 * Converts an absolute filename to an escaped ASCII-encoded URI, with the path
 * component following Section 3.3. of RFC 2396.
 * @param filename an absolute filename specified in the GLib file     name encoding, which is the on-disk file name bytes on Unix, and UTF-8     on Windows
 * @param hostname A UTF-8 encoded hostname, or %NULL for none.
 */
export function filenameToUri(filename: string, hostname: string | null): string
/**
 * Converts a string which is in the encoding used by GLib for
 * filenames into a UTF-8 string. Note that on Windows GLib uses UTF-8
 * for filenames; on other platforms, this function indirectly depends on
 * the [current locale][setlocale].
 * 
 * The input string shall not contain nul characters even if the `len`
 * argument is positive. A nul character found inside the string will result
 * in error %G_CONVERT_ERROR_ILLEGAL_SEQUENCE.
 * If the source encoding is not UTF-8 and the conversion output contains a
 * nul character, the error %G_CONVERT_ERROR_EMBEDDED_NUL is set and the
 * function returns %NULL. Use g_convert() to produce output that
 * may contain embedded nul characters.
 * @param opsysstring a string in the encoding for filenames
 * @param len the length of the string, or -1 if the string is                 nul-terminated (Note that some encodings may allow nul                 bytes to occur inside strings. In that case, using -1                 for the `len` parameter is unsafe)
 */
export function filenameToUtf8(opsysstring: string, len: number): [ /* returnType */ string, /* bytesRead */ number, /* bytesWritten */ number ]
/**
 * Locates the first executable named `program` in the user's path, in the
 * same way that execvp() would locate it. Returns an allocated string
 * with the absolute path name, or %NULL if the program is not found in
 * the path. If `program` is already an absolute path, returns a copy of
 * `program` if `program` exists and is executable, and %NULL otherwise.
 *  
 * On Windows, if `program` does not have a file type suffix, tries
 * with the suffixes .exe, .cmd, .bat and .com, and the suffixes in
 * the `PATHEXT` environment variable.
 * 
 * On Windows, it looks for the file in the same way as CreateProcess()
 * would. This means first in the directory where the executing
 * program was loaded from, then in the current directory, then in the
 * Windows 32-bit system directory, then in the Windows directory, and
 * finally in the directories in the `PATH` environment variable. If
 * the program is found, the return value contains the full name
 * including the type suffix.
 * @param program a program name in the GLib file name encoding
 */
export function findProgramInPath(program: string): string | null
/**
 * Formats a size (for example the size of a file) into a human readable
 * string.  Sizes are rounded to the nearest size prefix (kB, MB, GB)
 * and are displayed rounded to the nearest tenth. E.g. the file size
 * 3292528 bytes will be converted into the string "3.2 MB". The returned string
 * is UTF-8, and may use a non-breaking space to separate the number and units,
 * to ensure they aren’t separated when line wrapped.
 * 
 * The prefix units base is 1000 (i.e. 1 kB is 1000 bytes).
 * 
 * This string should be freed with g_free() when not needed any longer.
 * 
 * See g_format_size_full() for more options about how the size might be
 * formatted.
 * @param size a size in bytes
 */
export function formatSize(size: number): string
/**
 * Formats a size (for example the size of a file) into a human
 * readable string. Sizes are rounded to the nearest size prefix
 * (KB, MB, GB) and are displayed rounded to the nearest tenth.
 * E.g. the file size 3292528 bytes will be converted into the
 * string "3.1 MB".
 * 
 * The prefix units base is 1024 (i.e. 1 KB is 1024 bytes).
 * 
 * This string should be freed with g_free() when not needed any longer.
 * @param size a size in bytes
 */
export function formatSizeForDisplay(size: number): string
/**
 * Formats a size.
 * 
 * This function is similar to g_format_size() but allows for flags
 * that modify the output. See #GFormatSizeFlags.
 * @param size a size in bytes
 * @param flags #GFormatSizeFlags to modify the output
 */
export function formatSizeFull(size: number, flags: FormatSizeFlags): string
/**
 * Frees the memory pointed to by `mem`.
 * 
 * If `mem` is %NULL it simply returns, so there is no need to check `mem`
 * against %NULL before calling this function.
 * @param mem the memory to free
 */
export function free(mem: object | null): void
/**
 * Gets a human-readable name for the application, as set by
 * g_set_application_name(). This name should be localized if
 * possible, and is intended for display to the user.  Contrast with
 * g_get_prgname(), which gets a non-localized name. If
 * g_set_application_name() has not been called, returns the result of
 * g_get_prgname() (which may be %NULL if g_set_prgname() has also not
 * been called).
 */
export function getApplicationName(): string | null
/**
 * Obtains the character set for the [current locale][setlocale]; you
 * might use this character set as an argument to g_convert(), to convert
 * from the current locale's encoding to some other encoding. (Frequently
 * g_locale_to_utf8() and g_locale_from_utf8() are nice shortcuts, though.)
 * 
 * On Windows the character set returned by this function is the
 * so-called system default ANSI code-page. That is the character set
 * used by the "narrow" versions of C library and Win32 functions that
 * handle file names. It might be different from the character set
 * used by the C library's current locale.
 * 
 * On Linux, the character set is found by consulting nl_langinfo() if
 * available. If not, the environment variables `LC_ALL`, `LC_CTYPE`, `LANG`
 * and `CHARSET` are queried in order.
 * 
 * The return value is %TRUE if the locale's encoding is UTF-8, in that
 * case you can perhaps avoid calling g_convert().
 * 
 * The string returned in `charset` is not allocated, and should not be
 * freed.
 */
export function getCharset(): [ /* returnType */ boolean, /* charset */ string ]
/**
 * Gets the character set for the current locale.
 */
export function getCodeset(): string
/**
 * Obtains the character set used by the console attached to the process,
 * which is suitable for printing output to the terminal.
 * 
 * Usually this matches the result returned by g_get_charset(), but in
 * environments where the locale's character set does not match the encoding
 * of the console this function tries to guess a more suitable value instead.
 * 
 * On Windows the character set returned by this function is the
 * output code page used by the console associated with the calling process.
 * If the codepage can't be determined (for example because there is no
 * console attached) UTF-8 is assumed.
 * 
 * The return value is %TRUE if the locale's encoding is UTF-8, in that
 * case you can perhaps avoid calling g_convert().
 * 
 * The string returned in `charset` is not allocated, and should not be
 * freed.
 */
export function getConsoleCharset(): [ /* returnType */ boolean, /* charset */ string ]
/**
 * Gets the current directory.
 * 
 * The returned string should be freed when no longer needed.
 * The encoding of the returned string is system defined.
 * On Windows, it is always UTF-8.
 * 
 * Since GLib 2.40, this function will return the value of the "PWD"
 * environment variable if it is set and it happens to be the same as
 * the current directory.  This can make a difference in the case that
 * the current directory is the target of a symbolic link.
 */
export function getCurrentDir(): string
/**
 * Equivalent to the UNIX gettimeofday() function, but portable.
 * 
 * You may find g_get_real_time() to be more convenient.
 * @param result #GTimeVal structure in which to store current time.
 */
export function getCurrentTime(result: TimeVal): void
/**
 * Gets the list of environment variables for the current process.
 * 
 * The list is %NULL terminated and each item in the list is of the
 * form 'NAME=VALUE'.
 * 
 * This is equivalent to direct access to the 'environ' global variable,
 * except portable.
 * 
 * The return value is freshly allocated and it should be freed with
 * g_strfreev() when it is no longer needed.
 */
export function getEnviron(): string[]
/**
 * Determines the preferred character sets used for filenames.
 * The first character set from the `charsets` is the filename encoding, the
 * subsequent character sets are used when trying to generate a displayable
 * representation of a filename, see g_filename_display_name().
 * 
 * On Unix, the character sets are determined by consulting the
 * environment variables `G_FILENAME_ENCODING` and `G_BROKEN_FILENAMES`.
 * On Windows, the character set used in the GLib API is always UTF-8
 * and said environment variables have no effect.
 * 
 * `G_FILENAME_ENCODING` may be set to a comma-separated list of
 * character set names. The special token "\`locale"` is taken
 * to  mean the character set for the [current locale][setlocale].
 * If `G_FILENAME_ENCODING` is not set, but `G_BROKEN_FILENAMES` is,
 * the character set of the current locale is taken as the filename
 * encoding. If neither environment variable  is set, UTF-8 is taken
 * as the filename encoding, but the character set of the current locale
 * is also put in the list of encodings.
 * 
 * The returned `charsets` belong to GLib and must not be freed.
 * 
 * Note that on Unix, regardless of the locale character set or
 * `G_FILENAME_ENCODING` value, the actual file names present
 * on a system might be in any random encoding or just gibberish.
 */
export function getFilenameCharsets(): [ /* returnType */ boolean, /* filenameCharsets */ string[] ]
/**
 * Gets the current user's home directory.
 * 
 * As with most UNIX tools, this function will return the value of the
 * `HOME` environment variable if it is set to an existing absolute path
 * name, falling back to the `passwd` file in the case that it is unset.
 * 
 * If the path given in `HOME` is non-absolute, does not exist, or is
 * not a directory, the result is undefined.
 * 
 * Before version 2.36 this function would ignore the `HOME` environment
 * variable, taking the value from the `passwd` database instead. This was
 * changed to increase the compatibility of GLib with other programs (and
 * the XDG basedir specification) and to increase testability of programs
 * based on GLib (by making it easier to run them from test frameworks).
 * 
 * If your program has a strong requirement for either the new or the
 * old behaviour (and if you don't wish to increase your GLib
 * dependency to ensure that the new behaviour is in effect) then you
 * should either directly check the `HOME` environment variable yourself
 * or unset it before calling any functions in GLib.
 */
export function getHomeDir(): string
/**
 * Return a name for the machine.
 * 
 * The returned name is not necessarily a fully-qualified domain name,
 * or even present in DNS or some other name service at all. It need
 * not even be unique on your local network or site, but usually it
 * is. Callers should not rely on the return value having any specific
 * properties like uniqueness for security purposes. Even if the name
 * of the machine is changed while an application is running, the
 * return value from this function does not change. The returned
 * string is owned by GLib and should not be modified or freed. If no
 * name can be determined, a default fixed string "localhost" is
 * returned.
 * 
 * The encoding of the returned string is UTF-8.
 */
export function getHostName(): string
/**
 * Computes a list of applicable locale names, which can be used to
 * e.g. construct locale-dependent filenames or search paths. The returned
 * list is sorted from most desirable to least desirable and always contains
 * the default locale "C".
 * 
 * For example, if LANGUAGE=de:en_US, then the returned list is
 * "de", "en_US", "en", "C".
 * 
 * This function consults the environment variables `LANGUAGE`, `LC_ALL`,
 * `LC_MESSAGES` and `LANG` to find the list of locales specified by the
 * user.
 */
export function getLanguageNames(): string[]
/**
 * Computes a list of applicable locale names with a locale category name,
 * which can be used to construct the fallback locale-dependent filenames
 * or search paths. The returned list is sorted from most desirable to
 * least desirable and always contains the default locale "C".
 * 
 * This function consults the environment variables `LANGUAGE`, `LC_ALL`,
 * `category_name,` and `LANG` to find the list of locales specified by the
 * user.
 * 
 * g_get_language_names() returns g_get_language_names_with_category("LC_MESSAGES").
 * @param categoryName a locale category name
 */
export function getLanguageNamesWithCategory(categoryName: string): string[]
/**
 * Returns a list of derived variants of `locale,` which can be used to
 * e.g. construct locale-dependent filenames or search paths. The returned
 * list is sorted from most desirable to least desirable.
 * This function handles territory, charset and extra locale modifiers. See
 * [`setlocale(3)`](man:setlocale) for information about locales and their format.
 * 
 * `locale` itself is guaranteed to be returned in the output.
 * 
 * For example, if `locale` is `fr_BE`, then the returned list
 * is `fr_BE`, `fr`. If `locale` is `en_GB.UTF-8`euro``, then the returned list
 * is `en_GB.UTF-8`euro``, `en_GB.UTF-8`, `en_GB`euro``, `en_GB`, `en.UTF-8`euro``,
 * `en.UTF-8`, `en`euro``, `en`.
 * 
 * If you need the list of variants for the current locale,
 * use g_get_language_names().
 * @param locale a locale identifier
 */
export function getLocaleVariants(locale: string): string[]
/**
 * Queries the system monotonic time.
 * 
 * The monotonic clock will always increase and doesn't suffer
 * discontinuities when the user (or NTP) changes the system time.  It
 * may or may not continue to tick during times where the machine is
 * suspended.
 * 
 * We try to use the clock that corresponds as closely as possible to
 * the passage of time as measured by system calls such as poll() but it
 * may not always be possible to do this.
 */
export function getMonotonicTime(): number
/**
 * Determine the approximate number of threads that the system will
 * schedule simultaneously for this process.  This is intended to be
 * used as a parameter to g_thread_pool_new() for CPU bound tasks and
 * similar cases.
 */
export function getNumProcessors(): number
/**
 * Get information about the operating system.
 * 
 * On Linux this comes from the `/etc/os-release` file. On other systems, it may
 * come from a variety of sources. You can either use the standard key names
 * like %G_OS_INFO_KEY_NAME or pass any UTF-8 string key name. For example,
 * `/etc/os-release` provides a number of other less commonly used values that may
 * be useful. No key is guaranteed to be provided, so the caller should always
 * check if the result is %NULL.
 * @param keyName a key for the OS info being requested, for example %G_OS_INFO_KEY_NAME.
 */
export function getOsInfo(keyName: string): string | null
/**
 * Gets the name of the program. This name should not be localized,
 * in contrast to g_get_application_name().
 * 
 * If you are using #GApplication the program name is set in
 * g_application_run(). In case of GDK or GTK+ it is set in
 * gdk_init(), which is called by gtk_init() and the
 * #GtkApplication::startup handler. The program name is found by
 * taking the last component of `argv[`0].
 */
export function getPrgname(): string | null
/**
 * Gets the real name of the user. This usually comes from the user's
 * entry in the `passwd` file. The encoding of the returned string is
 * system-defined. (On Windows, it is, however, always UTF-8.) If the
 * real user name cannot be determined, the string "Unknown" is
 * returned.
 */
export function getRealName(): string
/**
 * Queries the system wall-clock time.
 * 
 * This call is functionally equivalent to g_get_current_time() except
 * that the return value is often more convenient than dealing with a
 * #GTimeVal.
 * 
 * You should only use this call if you are actually interested in the real
 * wall-clock time.  g_get_monotonic_time() is probably more useful for
 * measuring intervals.
 */
export function getRealTime(): number
/**
 * Returns an ordered list of base directories in which to access
 * system-wide configuration information.
 * 
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec).
 * In this case the list of directories retrieved will be `XDG_CONFIG_DIRS`.
 * 
 * On Windows it follows XDG Base Directory Specification if `XDG_CONFIG_DIRS` is defined.
 * If `XDG_CONFIG_DIRS` is undefined, the directory that contains application
 * data for all users is used instead. A typical path is
 * `C:\Documents and Settings\All Users\Application Data`.
 * This folder is used for application data
 * that is not user specific. For example, an application can store
 * a spell-check dictionary, a database of clip art, or a log file in the
 * FOLDERID_ProgramData folder. This information will not roam and is available
 * to anyone using the computer.
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getSystemConfigDirs(): string[]
/**
 * Returns an ordered list of base directories in which to access
 * system-wide application data.
 * 
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec)
 * In this case the list of directories retrieved will be `XDG_DATA_DIRS`.
 * 
 * On Windows it follows XDG Base Directory Specification if `XDG_DATA_DIRS` is defined.
 * If `XDG_DATA_DIRS` is undefined,
 * the first elements in the list are the Application Data
 * and Documents folders for All Users. (These can be determined only
 * on Windows 2000 or later and are not present in the list on other
 * Windows versions.) See documentation for FOLDERID_ProgramData and
 * FOLDERID_PublicDocuments.
 * 
 * Then follows the "share" subfolder in the installation folder for
 * the package containing the DLL that calls this function, if it can
 * be determined.
 * 
 * Finally the list contains the "share" subfolder in the installation
 * folder for GLib, and in the installation folder for the package the
 * application's .exe file belongs to.
 * 
 * The installation folders above are determined by looking up the
 * folder where the module (DLL or EXE) in question is located. If the
 * folder's name is "bin", its parent is used, otherwise the folder
 * itself.
 * 
 * Note that on Windows the returned list can vary depending on where
 * this function is called.
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getSystemDataDirs(): string[]
/**
 * Gets the directory to use for temporary files.
 * 
 * On UNIX, this is taken from the `TMPDIR` environment variable.
 * If the variable is not set, `P_tmpdir` is
 * used, as defined by the system C library. Failing that, a
 * hard-coded default of "/tmp" is returned.
 * 
 * On Windows, the `TEMP` environment variable is used, with the
 * root directory of the Windows installation (eg: "C:\") used
 * as a default.
 * 
 * The encoding of the returned string is system-defined. On Windows,
 * it is always UTF-8. The return value is never %NULL or the empty
 * string.
 */
export function getTmpDir(): string
/**
 * Returns a base directory in which to store non-essential, cached
 * data specific to particular user.
 * 
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec).
 * In this case the directory retrieved will be `XDG_CACHE_HOME`.
 * 
 * On Windows it follows XDG Base Directory Specification if `XDG_CACHE_HOME` is defined.
 * If `XDG_CACHE_HOME` is undefined, the directory that serves as a common
 * repository for temporary Internet files is used instead. A typical path is
 * `C:\Documents and Settings\username\Local Settings\Temporary Internet Files`.
 * See the [documentation for `FOLDERID_InternetCache`](https://docs.microsoft.com/en-us/windows/win32/shell/knownfolderid).
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getUserCacheDir(): string
/**
 * Returns a base directory in which to store user-specific application
 * configuration information such as user preferences and settings.
 * 
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec).
 * In this case the directory retrieved will be `XDG_CONFIG_HOME`.
 * 
 * On Windows it follows XDG Base Directory Specification if `XDG_CONFIG_HOME` is defined.
 * If `XDG_CONFIG_HOME` is undefined, the folder to use for local (as opposed
 * to roaming) application data is used instead. See the
 * [documentation for `FOLDERID_LocalAppData`](https://docs.microsoft.com/en-us/windows/win32/shell/knownfolderid).
 * Note that in this case on Windows it will be  the same
 * as what g_get_user_data_dir() returns.
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getUserConfigDir(): string
/**
 * Returns a base directory in which to access application data such
 * as icons that is customized for a particular user.
 * 
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec).
 * In this case the directory retrieved will be `XDG_DATA_HOME`.
 * 
 * On Windows it follows XDG Base Directory Specification if `XDG_DATA_HOME`
 * is defined. If `XDG_DATA_HOME` is undefined, the folder to use for local (as
 * opposed to roaming) application data is used instead. See the
 * [documentation for `FOLDERID_LocalAppData`](https://docs.microsoft.com/en-us/windows/win32/shell/knownfolderid).
 * Note that in this case on Windows it will be the same
 * as what g_get_user_config_dir() returns.
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getUserDataDir(): string
/**
 * Gets the user name of the current user. The encoding of the returned
 * string is system-defined. On UNIX, it might be the preferred file name
 * encoding, or something else, and there is no guarantee that it is even
 * consistent on a machine. On Windows, it is always UTF-8.
 */
export function getUserName(): string
/**
 * Returns a directory that is unique to the current user on the local
 * system.
 * 
 * This is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec).
 * This is the directory
 * specified in the `XDG_RUNTIME_DIR` environment variable.
 * In the case that this variable is not set, we return the value of
 * g_get_user_cache_dir(), after verifying that it exists.
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getUserRuntimeDir(): string
/**
 * Returns the full path of a special directory using its logical id.
 * 
 * On UNIX this is done using the XDG special user directories.
 * For compatibility with existing practise, %G_USER_DIRECTORY_DESKTOP
 * falls back to `$HOME/Desktop` when XDG special user directories have
 * not been set up.
 * 
 * Depending on the platform, the user might be able to change the path
 * of the special directory without requiring the session to restart; GLib
 * will not reflect any change once the special directories are loaded.
 * @param directory the logical id of special directory
 */
export function getUserSpecialDir(directory: UserDirectory): string | null
/**
 * Returns a base directory in which to store state files specific to
 * particular user.
 * 
 * On UNIX platforms this is determined using the mechanisms described
 * in the
 * [XDG Base Directory Specification](http://www.freedesktop.org/Standards/basedir-spec).
 * In this case the directory retrieved will be `XDG_STATE_HOME`.
 * 
 * On Windows it follows XDG Base Directory Specification if `XDG_STATE_HOME` is defined.
 * If `XDG_STATE_HOME` is undefined, the folder to use for local (as opposed
 * to roaming) application data is used instead. See the
 * [documentation for `FOLDERID_LocalAppData`](https://docs.microsoft.com/en-us/windows/win32/shell/knownfolderid).
 * Note that in this case on Windows it will be the same
 * as what g_get_user_data_dir() returns.
 * 
 * The return value is cached and modifying it at runtime is not supported, as
 * it’s not thread-safe to modify environment variables at runtime.
 */
export function getUserStateDir(): string
/**
 * Returns the value of an environment variable.
 * 
 * On UNIX, the name and value are byte strings which might or might not
 * be in some consistent character set and encoding. On Windows, they are
 * in UTF-8.
 * On Windows, in case the environment variable's value contains
 * references to other environment variables, they are expanded.
 * @param variable the environment variable to get
 */
export function getenv(variable: string): string | null
/**
 * This is a convenience function for using a #GHashTable as a set.  It
 * is equivalent to calling g_hash_table_replace() with `key` as both the
 * key and the value.
 * 
 * In particular, this means that if `key` already exists in the hash table, then
 * the old copy of `key` in the hash table is freed and `key` replaces it in the
 * table.
 * 
 * When a hash table only ever contains keys that have themselves as the
 * corresponding value it is able to be stored more efficiently.  See
 * the discussion in the section description.
 * 
 * Starting from GLib 2.40, this function returns a boolean value to
 * indicate whether the newly added value was already in the hash table
 * or not.
 * @param hashTable a #GHashTable
 * @param key a key to insert
 */
export function hashTableAdd(hashTable: HashTable, key: object | null): boolean
/**
 * Checks if `key` is in `hash_table`.
 * @param hashTable a #GHashTable
 * @param key a key to check
 */
export function hashTableContains(hashTable: HashTable, key: object | null): boolean
/**
 * Destroys all keys and values in the #GHashTable and decrements its
 * reference count by 1. If keys and/or values are dynamically allocated,
 * you should either free them first or create the #GHashTable with destroy
 * notifiers using g_hash_table_new_full(). In the latter case the destroy
 * functions you supplied will be called on all keys and values during the
 * destruction phase.
 * @param hashTable a #GHashTable
 */
export function hashTableDestroy(hashTable: HashTable): void
/**
 * Inserts a new key and value into a #GHashTable.
 * 
 * If the key already exists in the #GHashTable its current
 * value is replaced with the new value. If you supplied a
 * `value_destroy_func` when creating the #GHashTable, the old
 * value is freed using that function. If you supplied a
 * `key_destroy_func` when creating the #GHashTable, the passed
 * key is freed using that function.
 * 
 * Starting from GLib 2.40, this function returns a boolean value to
 * indicate whether the newly added value was already in the hash table
 * or not.
 * @param hashTable a #GHashTable
 * @param key a key to insert
 * @param value the value to associate with the key
 */
export function hashTableInsert(hashTable: HashTable, key: object | null, value: object | null): boolean
/**
 * Looks up a key in a #GHashTable. Note that this function cannot
 * distinguish between a key that is not present and one which is present
 * and has the value %NULL. If you need this distinction, use
 * g_hash_table_lookup_extended().
 * @param hashTable a #GHashTable
 * @param key the key to look up
 */
export function hashTableLookup(hashTable: HashTable, key: object | null): object | null
/**
 * Looks up a key in the #GHashTable, returning the original key and the
 * associated value and a #gboolean which is %TRUE if the key was found. This
 * is useful if you need to free the memory allocated for the original key,
 * for example before calling g_hash_table_remove().
 * 
 * You can actually pass %NULL for `lookup_key` to test
 * whether the %NULL key exists, provided the hash and equal functions
 * of `hash_table` are %NULL-safe.
 * @param hashTable a #GHashTable
 * @param lookupKey the key to look up
 */
export function hashTableLookupExtended(hashTable: HashTable, lookupKey: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
/**
 * Creates a new #GHashTable like g_hash_table_new_full() with a reference
 * count of 1.
 * 
 * It inherits the hash function, the key equal function, the key destroy function,
 * as well as the value destroy function, from `other_hash_table`.
 * 
 * The returned hash table will be empty; it will not contain the keys
 * or values from `other_hash_table`.
 * @param otherHashTable Another #GHashTable
 */
export function hashTableNewSimilar(otherHashTable: HashTable): HashTable
/**
 * Removes a key and its associated value from a #GHashTable.
 * 
 * If the #GHashTable was created using g_hash_table_new_full(), the
 * key and value are freed using the supplied destroy functions, otherwise
 * you have to make sure that any dynamically allocated values are freed
 * yourself.
 * @param hashTable a #GHashTable
 * @param key the key to remove
 */
export function hashTableRemove(hashTable: HashTable, key: object | null): boolean
/**
 * Removes all keys and their associated values from a #GHashTable.
 * 
 * If the #GHashTable was created using g_hash_table_new_full(),
 * the keys and values are freed using the supplied destroy functions,
 * otherwise you have to make sure that any dynamically allocated
 * values are freed yourself.
 * @param hashTable a #GHashTable
 */
export function hashTableRemoveAll(hashTable: HashTable): void
/**
 * Inserts a new key and value into a #GHashTable similar to
 * g_hash_table_insert(). The difference is that if the key
 * already exists in the #GHashTable, it gets replaced by the
 * new key. If you supplied a `value_destroy_func` when creating
 * the #GHashTable, the old value is freed using that function.
 * If you supplied a `key_destroy_func` when creating the
 * #GHashTable, the old key is freed using that function.
 * 
 * Starting from GLib 2.40, this function returns a boolean value to
 * indicate whether the newly added value was already in the hash table
 * or not.
 * @param hashTable a #GHashTable
 * @param key a key to insert
 * @param value the value to associate with the key
 */
export function hashTableReplace(hashTable: HashTable, key: object | null, value: object | null): boolean
/**
 * Returns the number of elements contained in the #GHashTable.
 * @param hashTable a #GHashTable
 */
export function hashTableSize(hashTable: HashTable): number
/**
 * Removes a key and its associated value from a #GHashTable without
 * calling the key and value destroy functions.
 * @param hashTable a #GHashTable
 * @param key the key to remove
 */
export function hashTableSteal(hashTable: HashTable, key: object | null): boolean
/**
 * Removes all keys and their associated values from a #GHashTable
 * without calling the key and value destroy functions.
 * @param hashTable a #GHashTable
 */
export function hashTableStealAll(hashTable: HashTable): void
/**
 * Looks up a key in the #GHashTable, stealing the original key and the
 * associated value and returning %TRUE if the key was found. If the key was
 * not found, %FALSE is returned.
 * 
 * If found, the stolen key and value are removed from the hash table without
 * calling the key and value destroy functions, and ownership is transferred to
 * the caller of this method; as with g_hash_table_steal().
 * 
 * You can pass %NULL for `lookup_key,` provided the hash and equal functions
 * of `hash_table` are %NULL-safe.
 * @param hashTable a #GHashTable
 * @param lookupKey the key to look up
 */
export function hashTableStealExtended(hashTable: HashTable, lookupKey: object | null): [ /* returnType */ boolean, /* stolenKey */ object | null, /* stolenValue */ object | null ]
/**
 * Atomically decrements the reference count of `hash_table` by one.
 * If the reference count drops to 0, all keys and values will be
 * destroyed, and all memory allocated by the hash table is released.
 * This function is MT-safe and may be called from any thread.
 * @param hashTable a valid #GHashTable
 */
export function hashTableUnref(hashTable: HashTable): void
/**
 * Destroys a #GHook, given its ID.
 * @param hookList a #GHookList
 * @param hookId a hook ID
 */
export function hookDestroy(hookList: HookList, hookId: number): boolean
/**
 * Removes one #GHook from a #GHookList, marking it
 * inactive and calling g_hook_unref() on it.
 * @param hookList a #GHookList
 * @param hook the #GHook to remove
 */
export function hookDestroyLink(hookList: HookList, hook: Hook): void
/**
 * Calls the #GHookList `finalize_hook` function if it exists,
 * and frees the memory allocated for the #GHook.
 * @param hookList a #GHookList
 * @param hook the #GHook to free
 */
export function hookFree(hookList: HookList, hook: Hook): void
/**
 * Inserts a #GHook into a #GHookList, before a given #GHook.
 * @param hookList a #GHookList
 * @param sibling the #GHook to insert the new #GHook before
 * @param hook the #GHook to insert
 */
export function hookInsertBefore(hookList: HookList, sibling: Hook | null, hook: Hook): void
/**
 * Prepends a #GHook on the start of a #GHookList.
 * @param hookList a #GHookList
 * @param hook the #GHook to add to the start of `hook_list`
 */
export function hookPrepend(hookList: HookList, hook: Hook): void
/**
 * Decrements the reference count of a #GHook.
 * If the reference count falls to 0, the #GHook is removed
 * from the #GHookList and g_hook_free() is called to free it.
 * @param hookList a #GHookList
 * @param hook the #GHook to unref
 */
export function hookUnref(hookList: HookList, hook: Hook): void
/**
 * Tests if `hostname` contains segments with an ASCII-compatible
 * encoding of an Internationalized Domain Name. If this returns
 * %TRUE, you should decode the hostname with g_hostname_to_unicode()
 * before displaying it to the user.
 * 
 * Note that a hostname might contain a mix of encoded and unencoded
 * segments, and so it is possible for g_hostname_is_non_ascii() and
 * g_hostname_is_ascii_encoded() to both return %TRUE for a name.
 * @param hostname a hostname
 */
export function hostnameIsAsciiEncoded(hostname: string): boolean
/**
 * Tests if `hostname` is the string form of an IPv4 or IPv6 address.
 * (Eg, "192.168.0.1".)
 * 
 * Since 2.66, IPv6 addresses with a zone-id are accepted (RFC6874).
 * @param hostname a hostname (or IP address in string form)
 */
export function hostnameIsIpAddress(hostname: string): boolean
/**
 * Tests if `hostname` contains Unicode characters. If this returns
 * %TRUE, you need to encode the hostname with g_hostname_to_ascii()
 * before using it in non-IDN-aware contexts.
 * 
 * Note that a hostname might contain a mix of encoded and unencoded
 * segments, and so it is possible for g_hostname_is_non_ascii() and
 * g_hostname_is_ascii_encoded() to both return %TRUE for a name.
 * @param hostname a hostname
 */
export function hostnameIsNonAscii(hostname: string): boolean
/**
 * Converts `hostname` to its canonical ASCII form; an ASCII-only
 * string containing no uppercase letters and not ending with a
 * trailing dot.
 * @param hostname a valid UTF-8 or ASCII hostname
 */
export function hostnameToAscii(hostname: string): string | null
/**
 * Converts `hostname` to its canonical presentation form; a UTF-8
 * string in Unicode normalization form C, containing no uppercase
 * letters, no forbidden characters, and no ASCII-encoded segments,
 * and not ending with a trailing dot.
 * 
 * Of course if `hostname` is not an internationalized hostname, then
 * the canonical presentation form will be entirely ASCII.
 * @param hostname a valid UTF-8 or ASCII hostname
 */
export function hostnameToUnicode(hostname: string): string | null
/**
 * Adds a function to be called whenever there are no higher priority
 * events pending.
 * 
 * If the function returns %G_SOURCE_REMOVE or %FALSE it is automatically
 * removed from the list of event sources and will not be called again.
 * 
 * See [memory management of sources][mainloop-memory-management] for details
 * on how to handle the return value and memory management of `data`.
 * 
 * This internally creates a main loop source using g_idle_source_new()
 * and attaches it to the global #GMainContext using g_source_attach(), so
 * the callback will be invoked in whichever thread is running that main
 * context. You can do these steps manually if you need greater control or to
 * use a custom main context.
 * @param priority the priority of the idle source. Typically this will be in the   range between %G_PRIORITY_DEFAULT_IDLE and %G_PRIORITY_HIGH_IDLE.
 * @param function_ function to call
 */
export function idleAdd(priority: number, function_: SourceFunc): number
/**
 * Removes the idle function with the given data.
 * @param data the data for the idle source's callback.
 */
export function idleRemoveByData(data: object | null): boolean
/**
 * Creates a new idle source.
 * 
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed. Note that the default priority for idle sources is
 * %G_PRIORITY_DEFAULT_IDLE, as compared to other sources which
 * have a default priority of %G_PRIORITY_DEFAULT.
 */
export function idleSourceNew(): Source
/**
 * Compares the two #gint64 values being pointed to and returns
 * %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the `key_equal_func`
 * parameter, when using non-%NULL pointers to 64-bit integers as keys in a
 * #GHashTable.
 * @param v1 a pointer to a #gint64 key
 * @param v2 a pointer to a #gint64 key to compare with `v1`
 */
export function int64Equal(v1: object, v2: object): boolean
/**
 * Converts a pointer to a #gint64 to a hash value.
 * 
 * It can be passed to g_hash_table_new() as the `hash_func` parameter,
 * when using non-%NULL pointers to 64-bit integer values as keys in a
 * #GHashTable.
 * @param v a pointer to a #gint64 key
 */
export function int64Hash(v: object): number
/**
 * Compares the two #gint values being pointed to and returns
 * %TRUE if they are equal.
 * It can be passed to g_hash_table_new() as the `key_equal_func`
 * parameter, when using non-%NULL pointers to integers as keys in a
 * #GHashTable.
 * 
 * Note that this function acts on pointers to #gint, not on #gint
 * directly: if your hash table's keys are of the form
 * `GINT_TO_POINTER (n)`, use g_direct_equal() instead.
 * @param v1 a pointer to a #gint key
 * @param v2 a pointer to a #gint key to compare with `v1`
 */
export function intEqual(v1: object, v2: object): boolean
/**
 * Converts a pointer to a #gint to a hash value.
 * It can be passed to g_hash_table_new() as the `hash_func` parameter,
 * when using non-%NULL pointers to integer values as keys in a #GHashTable.
 * 
 * Note that this function acts on pointers to #gint, not on #gint
 * directly: if your hash table's keys are of the form
 * `GINT_TO_POINTER (n)`, use g_direct_hash() instead.
 * @param v a pointer to a #gint key
 */
export function intHash(v: object): number
/**
 * Returns a canonical representation for `string`. Interned strings
 * can be compared for equality by comparing the pointers, instead of
 * using strcmp(). g_intern_static_string() does not copy the string,
 * therefore `string` must not be freed or modified.
 * 
 * This function must not be used before library constructors have finished
 * running. In particular, this means it cannot be used to initialize global
 * variables in C++.
 * @param string a static string
 */
export function internStaticString(string: string | null): string
/**
 * Returns a canonical representation for `string`. Interned strings
 * can be compared for equality by comparing the pointers, instead of
 * using strcmp().
 * 
 * This function must not be used before library constructors have finished
 * running. In particular, this means it cannot be used to initialize global
 * variables in C++.
 * @param string a string
 */
export function internString(string: string | null): string
/**
 * Adds the #GIOChannel into the default main loop context
 * with the given priority.
 * 
 * This internally creates a main loop source using g_io_create_watch()
 * and attaches it to the main loop context with g_source_attach().
 * You can do these steps manually if you need greater control.
 * @param channel a #GIOChannel
 * @param priority the priority of the #GIOChannel source
 * @param condition the condition to watch for
 * @param func the function to call when the condition is satisfied
 */
export function ioAddWatch(channel: IOChannel, priority: number, condition: IOCondition, func: IOFunc): number
/**
 * Converts an `errno` error number to a #GIOChannelError.
 * @param en an `errno` error number, e.g. `EINVAL`
 */
export function ioChannelErrorFromErrno(en: number): IOChannelError
export function ioChannelErrorQuark(): Quark
/**
 * Creates a #GSource that's dispatched when `condition` is met for the
 * given `channel`. For example, if condition is %G_IO_IN, the source will
 * be dispatched when there's data available for reading.
 * 
 * The callback function invoked by the #GSource should be added with
 * g_source_set_callback(), but it has type #GIOFunc (not #GSourceFunc).
 * 
 * g_io_add_watch() is a simpler interface to this same functionality, for
 * the case where you want to add the source to the default main loop context
 * at the default priority.
 * 
 * On Windows, polling a #GSource created to watch a channel for a socket
 * puts the socket in non-blocking mode. This is a side-effect of the
 * implementation and unavoidable.
 * @param channel a #GIOChannel to watch
 * @param condition conditions to watch for
 */
export function ioCreateWatch(channel: IOChannel, condition: IOCondition): Source
export function keyFileErrorQuark(): Quark
/**
 * Gets the names of all variables set in the environment.
 * 
 * Programs that want to be portable to Windows should typically use
 * this function and g_getenv() instead of using the environ array
 * from the C library directly. On Windows, the strings in the environ
 * array are in system codepage encoding, while in most of the typical
 * use cases for environment variables in GLib-using programs you want
 * the UTF-8 encoding that this function and g_getenv() provide.
 */
export function listenv(): string[]
/**
 * Converts a string from UTF-8 to the encoding used for strings by
 * the C runtime (usually the same as that used by the operating
 * system) in the [current locale][setlocale]. On Windows this means
 * the system codepage.
 * 
 * The input string shall not contain nul characters even if the `len`
 * argument is positive. A nul character found inside the string will result
 * in error %G_CONVERT_ERROR_ILLEGAL_SEQUENCE. Use g_convert() to convert
 * input that may contain embedded nul characters.
 * @param utf8string a UTF-8 encoded string
 * @param len the length of the string, or -1 if the string is                 nul-terminated.
 */
export function localeFromUtf8(utf8string: string, len: number): [ /* returnType */ Uint8Array, /* bytesRead */ number ]
/**
 * Converts a string which is in the encoding used for strings by
 * the C runtime (usually the same as that used by the operating
 * system) in the [current locale][setlocale] into a UTF-8 string.
 * 
 * If the source encoding is not UTF-8 and the conversion output contains a
 * nul character, the error %G_CONVERT_ERROR_EMBEDDED_NUL is set and the
 * function returns %NULL.
 * If the source encoding is UTF-8, an embedded nul character is treated with
 * the %G_CONVERT_ERROR_ILLEGAL_SEQUENCE error for backward compatibility with
 * earlier versions of this library. Use g_convert() to produce output that
 * may contain embedded nul characters.
 * @param opsysstring a string in the                 encoding of the current locale. On Windows                 this means the system codepage.
 */
export function localeToUtf8(opsysstring: Uint8Array): [ /* returnType */ string, /* bytesRead */ number, /* bytesWritten */ number ]
/**
 * The default log handler set up by GLib; g_log_set_default_handler()
 * allows to install an alternate default log handler.
 * This is used if no log handler has been set for the particular log
 * domain and log level combination. It outputs the message to stderr
 * or stdout and if the log level is fatal it calls G_BREAKPOINT(). It automatically
 * prints a new-line character after the message, so one does not need to be
 * manually included in `message`.
 * 
 * The behavior of this log handler can be influenced by a number of
 * environment variables:
 * 
 * - `G_MESSAGES_PREFIXED`: A :-separated list of log levels for which
 *   messages should be prefixed by the program name and PID of the
 *   application.
 * 
 * - `G_MESSAGES_DEBUG`: A space-separated list of log domains for
 *   which debug and informational messages are printed. By default
 *   these messages are not printed.
 * 
 * stderr is used for levels %G_LOG_LEVEL_ERROR, %G_LOG_LEVEL_CRITICAL,
 * %G_LOG_LEVEL_WARNING and %G_LOG_LEVEL_MESSAGE. stdout is used for
 * the rest, unless stderr was requested by
 * g_log_writer_default_set_use_stderr().
 * 
 * This has no effect if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 * @param logDomain the log domain of the message, or %NULL for the default "" application domain
 * @param logLevel the level of the message
 * @param message the message
 * @param unusedData data passed from g_log() which is unused
 */
export function logDefaultHandler(logDomain: string | null, logLevel: LogLevelFlags, message: string | null, unusedData: object | null): void
/**
 * Return whether debug output from the GLib logging system is enabled.
 * 
 * Note that this should not be used to conditionalise calls to g_debug() or
 * other logging functions; it should only be used from %GLogWriterFunc
 * implementations.
 * 
 * Note also that the value of this does not depend on `G_MESSAGES_DEBUG`; see
 * the docs for g_log_set_debug_enabled().
 */
export function logGetDebugEnabled(): boolean
/**
 * Removes the log handler.
 * 
 * This has no effect if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 * @param logDomain the log domain
 * @param handlerId the id of the handler, which was returned     in g_log_set_handler()
 */
export function logRemoveHandler(logDomain: string, handlerId: number): void
/**
 * Sets the message levels which are always fatal, in any log domain.
 * When a message with any of these levels is logged the program terminates.
 * You can only set the levels defined by GLib to be fatal.
 * %G_LOG_LEVEL_ERROR is always fatal.
 * 
 * You can also make some message levels fatal at runtime by setting
 * the `G_DEBUG` environment variable (see
 * [Running GLib Applications](glib-running.html)).
 * 
 * Libraries should not call this function, as it affects all messages logged
 * by a process, including those from other libraries.
 * 
 * Structured log messages (using g_log_structured() and
 * g_log_structured_array()) are fatal only if the default log writer is used;
 * otherwise it is up to the writer function to determine which log messages
 * are fatal. See [Using Structured Logging][using-structured-logging].
 * @param fatalMask the mask containing bits set for each level     of error which is to be fatal
 */
export function logSetAlwaysFatal(fatalMask: LogLevelFlags): LogLevelFlags
/**
 * Enable or disable debug output from the GLib logging system for all domains.
 * This value interacts disjunctively with `G_MESSAGES_DEBUG` — if either of
 * them would allow a debug message to be outputted, it will be.
 * 
 * Note that this should not be used from within library code to enable debug
 * output — it is intended for external use.
 * @param enabled %TRUE to enable debug output, %FALSE otherwise
 */
export function logSetDebugEnabled(enabled: boolean): void
/**
 * Sets the log levels which are fatal in the given domain.
 * %G_LOG_LEVEL_ERROR is always fatal.
 * 
 * This has no effect on structured log messages (using g_log_structured() or
 * g_log_structured_array()). To change the fatal behaviour for specific log
 * messages, programs must install a custom log writer function using
 * g_log_set_writer_func(). See
 * [Using Structured Logging][using-structured-logging].
 * 
 * This function is mostly intended to be used with
 * %G_LOG_LEVEL_CRITICAL.  You should typically not set
 * %G_LOG_LEVEL_WARNING, %G_LOG_LEVEL_MESSAGE, %G_LOG_LEVEL_INFO or
 * %G_LOG_LEVEL_DEBUG as fatal except inside of test programs.
 * @param logDomain the log domain
 * @param fatalMask the new fatal mask
 */
export function logSetFatalMask(logDomain: string, fatalMask: LogLevelFlags): LogLevelFlags
/**
 * Like g_log_set_handler(), but takes a destroy notify for the `user_data`.
 * 
 * This has no effect if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 * @param logDomain the log domain, or %NULL for the default ""   application domain
 * @param logLevels the log levels to apply the log handler for.   To handle fatal and recursive messages as well, combine   the log levels with the %G_LOG_FLAG_FATAL and   %G_LOG_FLAG_RECURSION bit flags.
 * @param logFunc the log handler function
 */
export function logSetHandler(logDomain: string | null, logLevels: LogLevelFlags, logFunc: LogFunc): number
/**
 * Set a writer function which will be called to format and write out each log
 * message. Each program should set a writer function, or the default writer
 * (g_log_writer_default()) will be used.
 * 
 * Libraries **must not** call this function — only programs are allowed to
 * install a writer function, as there must be a single, central point where
 * log messages are formatted and outputted.
 * 
 * There can only be one writer function. It is an error to set more than one.
 */
export function logSetWriterFunc(): void
/**
 * Log a message with structured data. The message will be passed through to the
 * log writer set by the application using g_log_set_writer_func(). If the
 * message is fatal (i.e. its log level is %G_LOG_LEVEL_ERROR), the program will
 * be aborted at the end of this function.
 * 
 * See g_log_structured() for more documentation.
 * 
 * This assumes that `log_level` is already present in `fields` (typically as the
 * `PRIORITY` field).
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param fields key–value pairs of structured data to add    to the log message
 */
export function logStructuredArray(logLevel: LogLevelFlags, fields: LogField[]): void
/**
 * Log a message with structured data, accepting the data within a #GVariant. This
 * version is especially useful for use in other languages, via introspection.
 * 
 * The only mandatory item in the `fields` dictionary is the "MESSAGE" which must
 * contain the text shown to the user.
 * 
 * The values in the `fields` dictionary are likely to be of type String
 * (%G_VARIANT_TYPE_STRING). Array of bytes (%G_VARIANT_TYPE_BYTESTRING) is also
 * supported. In this case the message is handled as binary and will be forwarded
 * to the log writer as such. The size of the array should not be higher than
 * %G_MAXSSIZE. Otherwise it will be truncated to this size. For other types
 * g_variant_print() will be used to convert the value into a string.
 * 
 * For more details on its usage and about the parameters, see g_log_structured().
 * @param logDomain log domain, usually %G_LOG_DOMAIN
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param fields a dictionary (#GVariant of the type %G_VARIANT_TYPE_VARDICT) containing the key-value pairs of message data.
 */
export function logVariant(logDomain: string | null, logLevel: LogLevelFlags, fields: Variant): void
/**
 * Format a structured log message and output it to the default log destination
 * for the platform. On Linux, this is typically the systemd journal, falling
 * back to `stdout` or `stderr` if running from the terminal or if output is
 * being redirected to a file.
 * 
 * Support for other platform-specific logging mechanisms may be added in
 * future. Distributors of GLib may modify this function to impose their own
 * (documented) platform-specific log writing policies.
 * 
 * This is suitable for use as a #GLogWriterFunc, and is the default writer used
 * if no other is set using g_log_set_writer_func().
 * 
 * As with g_log_default_handler(), this function drops debug and informational
 * messages unless their log domain (or `all`) is listed in the space-separated
 * `G_MESSAGES_DEBUG` environment variable.
 * 
 * g_log_writer_default() uses the mask set by g_log_set_always_fatal() to
 * determine which messages are fatal. When using a custom writer func instead it is
 * up to the writer function to determine which log messages are fatal.
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param fields key–value pairs of structured data forming    the log message
 * @param userData user data passed to g_log_set_writer_func()
 */
export function logWriterDefault(logLevel: LogLevelFlags, fields: LogField[], userData: object | null): LogWriterOutput
/**
 * Configure whether the built-in log functions
 * (g_log_default_handler() for the old-style API, and both
 * g_log_writer_default() and g_log_writer_standard_streams() for the
 * structured API) will output all log messages to `stderr`.
 * 
 * By default, log messages of levels %G_LOG_LEVEL_INFO and
 * %G_LOG_LEVEL_DEBUG are sent to `stdout`, and other log messages are
 * sent to `stderr`. This is problematic for applications that intend
 * to reserve `stdout` for structured output such as JSON or XML.
 * 
 * This function sets global state. It is not thread-aware, and should be
 * called at the very start of a program, before creating any other threads
 * or creating objects that could create worker threads of their own.
 * @param useStderr If %TRUE, use `stderr` for log messages that would  normally have appeared on `stdout`
 */
export function logWriterDefaultSetUseStderr(useStderr: boolean): void
/**
 * Check whether g_log_writer_default() and g_log_default_handler() would
 * ignore a message with the given domain and level.
 * 
 * As with g_log_default_handler(), this function drops debug and informational
 * messages unless their log domain (or `all`) is listed in the space-separated
 * `G_MESSAGES_DEBUG` environment variable.
 * 
 * This can be used when implementing log writers with the same filtering
 * behaviour as the default, but a different destination or output format:
 * 
 * 
 * ```c
 *   if (g_log_writer_default_would_drop (log_level, log_domain))
 *     return G_LOG_WRITER_HANDLED;
 * ```
 * 
 * 
 * or to skip an expensive computation if it is only needed for a debugging
 * message, and `G_MESSAGES_DEBUG` is not set:
 * 
 * 
 * ```c
 *   if (!g_log_writer_default_would_drop (G_LOG_LEVEL_DEBUG, G_LOG_DOMAIN))
 *     {
 *       gchar *result = expensive_computation (my_object);
 * 
 *       g_debug ("my_object result: %s", result);
 *       g_free (result);
 *     }
 * ```
 * 
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param logDomain log domain
 */
export function logWriterDefaultWouldDrop(logLevel: LogLevelFlags, logDomain: string | null): boolean
/**
 * Format a structured log message as a string suitable for outputting to the
 * terminal (or elsewhere). This will include the values of all fields it knows
 * how to interpret, which includes `MESSAGE` and `GLIB_DOMAIN` (see the
 * documentation for g_log_structured()). It does not include values from
 * unknown fields.
 * 
 * The returned string does **not** have a trailing new-line character. It is
 * encoded in the character set of the current locale, which is not necessarily
 * UTF-8.
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param fields key–value pairs of structured data forming    the log message
 * @param useColor %TRUE to use ANSI color escape sequences when formatting the    message, %FALSE to not
 */
export function logWriterFormatFields(logLevel: LogLevelFlags, fields: LogField[], useColor: boolean): string
/**
 * Check whether the given `output_fd` file descriptor is a connection to the
 * systemd journal, or something else (like a log file or `stdout` or
 * `stderr`).
 * 
 * Invalid file descriptors are accepted and return %FALSE, which allows for
 * the following construct without needing any additional error handling:
 * 
 * ```c
 *   is_journald = g_log_writer_is_journald (fileno (stderr));
 * ```
 * 
 * @param outputFd output file descriptor to check
 */
export function logWriterIsJournald(outputFd: number): boolean
/**
 * Format a structured log message and send it to the systemd journal as a set
 * of key–value pairs. All fields are sent to the journal, but if a field has
 * length zero (indicating program-specific data) then only its key will be
 * sent.
 * 
 * This is suitable for use as a #GLogWriterFunc.
 * 
 * If GLib has been compiled without systemd support, this function is still
 * defined, but will always return %G_LOG_WRITER_UNHANDLED.
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param fields key–value pairs of structured data forming    the log message
 * @param userData user data passed to g_log_set_writer_func()
 */
export function logWriterJournald(logLevel: LogLevelFlags, fields: LogField[], userData: object | null): LogWriterOutput
/**
 * Format a structured log message and print it to either `stdout` or `stderr`,
 * depending on its log level. %G_LOG_LEVEL_INFO and %G_LOG_LEVEL_DEBUG messages
 * are sent to `stdout`, or to `stderr` if requested by
 * g_log_writer_default_set_use_stderr();
 * all other log levels are sent to `stderr`. Only fields
 * which are understood by this function are included in the formatted string
 * which is printed.
 * 
 * If the output stream supports ANSI color escape sequences, they will be used
 * in the output.
 * 
 * A trailing new-line character is added to the log message when it is printed.
 * 
 * This is suitable for use as a #GLogWriterFunc.
 * @param logLevel log level, either from #GLogLevelFlags, or a user-defined    level
 * @param fields key–value pairs of structured data forming    the log message
 * @param userData user data passed to g_log_set_writer_func()
 */
export function logWriterStandardStreams(logLevel: LogLevelFlags, fields: LogField[], userData: object | null): LogWriterOutput
/**
 * Check whether the given `output_fd` file descriptor supports ANSI color
 * escape sequences. If so, they can safely be used when formatting log
 * messages.
 * @param outputFd output file descriptor to check
 */
export function logWriterSupportsColor(outputFd: number): boolean
/**
 * Returns the global default main context. This is the main context
 * used for main loop functions when a main loop is not explicitly
 * specified, and corresponds to the "main" main loop. See also
 * g_main_context_get_thread_default().
 */
export function mainContextDefault(): MainContext
/**
 * Gets the thread-default #GMainContext for this thread. Asynchronous
 * operations that want to be able to be run in contexts other than
 * the default one should call this method or
 * g_main_context_ref_thread_default() to get a #GMainContext to add
 * their #GSources to. (Note that even in single-threaded
 * programs applications may sometimes want to temporarily push a
 * non-default context, so it is not safe to assume that this will
 * always return %NULL if you are running in the default thread.)
 * 
 * If you need to hold a reference on the context, use
 * g_main_context_ref_thread_default() instead.
 */
export function mainContextGetThreadDefault(): MainContext | null
/**
 * Gets the thread-default #GMainContext for this thread, as with
 * g_main_context_get_thread_default(), but also adds a reference to
 * it with g_main_context_ref(). In addition, unlike
 * g_main_context_get_thread_default(), if the thread-default context
 * is the global default context, this will return that #GMainContext
 * (with a ref added to it) rather than returning %NULL.
 */
export function mainContextRefThreadDefault(): MainContext
/**
 * Returns the currently firing source for this thread.
 */
export function mainCurrentSource(): Source | null
/**
 * Returns the depth of the stack of calls to
 * g_main_context_dispatch() on any #GMainContext in the current thread.
 *  That is, when called from the toplevel, it gives 0. When
 * called from within a callback from g_main_context_iteration()
 * (or g_main_loop_run(), etc.) it returns 1. When called from within
 * a callback to a recursive call to g_main_context_iteration(),
 * it returns 2. And so forth.
 * 
 * This function is useful in a situation like the following:
 * Imagine an extremely simple "garbage collected" system.
 * 
 * 
 * ```c
 * static GList *free_list;
 * 
 * gpointer
 * allocate_memory (gsize size)
 * {
 *   gpointer result = g_malloc (size);
 *   free_list = g_list_prepend (free_list, result);
 *   return result;
 * }
 * 
 * void
 * free_allocated_memory (void)
 * {
 *   GList *l;
 *   for (l = free_list; l; l = l->next);
 *     g_free (l->data);
 *   g_list_free (free_list);
 *   free_list = NULL;
 *  }
 * 
 * [...]
 * 
 * while (TRUE);
 *  {
 *    g_main_context_iteration (NULL, TRUE);
 *    free_allocated_memory();
 *   }
 * ```
 * 
 * 
 * This works from an application, however, if you want to do the same
 * thing from a library, it gets more difficult, since you no longer
 * control the main loop. You might think you can simply use an idle
 * function to make the call to free_allocated_memory(), but that
 * doesn't work, since the idle function could be called from a
 * recursive callback. This can be fixed by using g_main_depth()
 * 
 * 
 * ```c
 * gpointer
 * allocate_memory (gsize size)
 * {
 *   FreeListBlock *block = g_new (FreeListBlock, 1);
 *   block->mem = g_malloc (size);
 *   block->depth = g_main_depth ();
 *   free_list = g_list_prepend (free_list, block);
 *   return block->mem;
 * }
 * 
 * void
 * free_allocated_memory (void)
 * {
 *   GList *l;
 *   
 *   int depth = g_main_depth ();
 *   for (l = free_list; l; );
 *     {
 *       GList *next = l->next;
 *       FreeListBlock *block = l->data;
 *       if (block->depth > depth)
 *         {
 *           g_free (block->mem);
 *           g_free (block);
 *           free_list = g_list_delete_link (free_list, l);
 *         }
 *               
 *       l = next;
 *     }
 *   }
 * ```
 * 
 * 
 * There is a temptation to use g_main_depth() to solve
 * problems with reentrancy. For instance, while waiting for data
 * to be received from the network in response to a menu item,
 * the menu item might be selected again. It might seem that
 * one could make the menu item's callback return immediately
 * and do nothing if g_main_depth() returns a value greater than 1.
 * However, this should be avoided since the user then sees selecting
 * the menu item do nothing. Furthermore, you'll find yourself adding
 * these checks all over your code, since there are doubtless many,
 * many things that the user could do. Instead, you can use the
 * following techniques:
 * 
 * 1. Use gtk_widget_set_sensitive() or modal dialogs to prevent
 *    the user from interacting with elements while the main
 *    loop is recursing.
 * 
 * 2. Avoid main loop recursion in situations where you can't handle
 *    arbitrary  callbacks. Instead, structure your code so that you
 *    simply return to the main loop and then get called again when
 *    there is more work to do.
 */
export function mainDepth(): number
/**
 * Allocates `n_bytes` bytes of memory.
 * If `n_bytes` is 0 it returns %NULL.
 * @param nBytes the number of bytes to allocate
 */
export function malloc(nBytes: number): object | null
/**
 * Allocates `n_bytes` bytes of memory, initialized to 0's.
 * If `n_bytes` is 0 it returns %NULL.
 * @param nBytes the number of bytes to allocate
 */
export function malloc0(nBytes: number): object | null
/**
 * This function is similar to g_malloc0(), allocating (`n_blocks` * `n_block_bytes)` bytes,
 * but care is taken to detect possible overflow during multiplication.
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 */
export function malloc0N(nBlocks: number, nBlockBytes: number): object | null
/**
 * This function is similar to g_malloc(), allocating (`n_blocks` * `n_block_bytes)` bytes,
 * but care is taken to detect possible overflow during multiplication.
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 */
export function mallocN(nBlocks: number, nBlockBytes: number): object | null
export function markupErrorQuark(): Quark
/**
 * Escapes text so that the markup parser will parse it verbatim.
 * Less than, greater than, ampersand, etc. are replaced with the
 * corresponding entities. This function would typically be used
 * when writing out a file to be parsed with the markup parser.
 * 
 * Note that this function doesn't protect whitespace and line endings
 * from being processed according to the XML rules for normalization
 * of line endings and attribute values.
 * 
 * Note also that this function will produce character references in
 * the range of &#x1; ... &#x1f; for all control sequences
 * except for tabstop, newline and carriage return.  The character
 * references in this range are not valid XML 1.0, but they are
 * valid XML 1.1 and will be accepted by the GMarkup parser.
 * @param text some valid UTF-8 text
 * @param length length of `text` in bytes, or -1 if the text is nul-terminated
 */
export function markupEscapeText(text: string, length: number): string
/**
 * Checks whether the allocator used by g_malloc() is the system's
 * malloc implementation. If it returns %TRUE memory allocated with
 * malloc() can be used interchangeably with memory allocated using g_malloc().
 * This function is useful for avoiding an extra copy of allocated memory returned
 * by a non-GLib-based API.
 */
export function memIsSystemMalloc(): boolean
/**
 * GLib used to support some tools for memory profiling, but this
 * no longer works. There are many other useful tools for memory
 * profiling these days which can be used instead.
 */
export function memProfile(): void
/**
 * This function used to let you override the memory allocation function.
 * However, its use was incompatible with the use of global constructors
 * in GLib and GIO, because those use the GLib allocators before main is
 * reached. Therefore this function is now deprecated and is just a stub.
 * @param vtable table of memory allocation routines.
 */
export function memSetVtable(vtable: MemVTable): void
/**
 * Allocates `byte_size` bytes of memory, and copies `byte_size` bytes into it
 * from `mem`. If `mem` is %NULL it returns %NULL.
 * @param mem the memory to copy.
 * @param byteSize the number of bytes to copy.
 */
export function memdup(mem: object | null, byteSize: number): object | null
/**
 * Allocates `byte_size` bytes of memory, and copies `byte_size` bytes into it
 * from `mem`. If `mem` is %NULL it returns %NULL.
 * 
 * This replaces g_memdup(), which was prone to integer overflows when
 * converting the argument from a #gsize to a #guint.
 * @param mem the memory to copy.
 * @param byteSize the number of bytes to copy.
 */
export function memdup2(mem: object | null, byteSize: number): object | null
/**
 * Create a directory if it doesn't already exist. Create intermediate
 * parent directories as needed, too.
 * @param pathname a pathname in the GLib file name encoding
 * @param mode permissions to use for newly created directories
 */
export function mkdirWithParents(pathname: string, mode: number): number
/**
 * Set the pointer at the specified location to %NULL.
 * @param nullifyLocation the memory address of the pointer.
 */
export function nullifyPointer(nullifyLocation: object): void
export function numberParserErrorQuark(): Quark
/**
 * Prompts the user with
 * `[E]xit, [H]alt, show [S]tack trace or [P]roceed`.
 * This function is intended to be used for debugging use only.
 * The following example shows how it can be used together with
 * the g_log() functions.
 * 
 * 
 * ```c
 * #include <glib.h>
 * 
 * static void
 * log_handler (const gchar   *log_domain,
 *              GLogLevelFlags log_level,
 *              const gchar   *message,
 *              gpointer       user_data)
 * {
 *   g_log_default_handler (log_domain, log_level, message, user_data);
 * 
 *   g_on_error_query (MY_PROGRAM_NAME);
 * }
 * 
 * int
 * main (int argc, char *argv[])
 * {
 *   g_log_set_handler (MY_LOG_DOMAIN,
 *                      G_LOG_LEVEL_WARNING |
 *                      G_LOG_LEVEL_ERROR |
 *                      G_LOG_LEVEL_CRITICAL,
 *                      log_handler,
 *                      NULL);
 *   ...
 * ```
 * 
 * 
 * If "[E]xit" is selected, the application terminates with a call
 * to _exit(0).
 * 
 * If "[S]tack" trace is selected, g_on_error_stack_trace() is called.
 * This invokes gdb, which attaches to the current process and shows
 * a stack trace. The prompt is then shown again.
 * 
 * If "[P]roceed" is selected, the function returns.
 * 
 * This function may cause different actions on non-UNIX platforms.
 * 
 * On Windows consider using the `G_DEBUGGER` environment
 * variable (see [Running GLib Applications](glib-running.html)) and
 * calling g_on_error_stack_trace() instead.
 * @param prgName the program name, needed by gdb for the "[S]tack trace"     option. If `prg_name` is %NULL, g_get_prgname() is called to get     the program name (which will work correctly if gdk_init() or     gtk_init() has been called)
 */
export function onErrorQuery(prgName: string): void
/**
 * Invokes gdb, which attaches to the current process and shows a
 * stack trace. Called by g_on_error_query() when the "[S]tack trace"
 * option is selected. You can get the current process's program name
 * with g_get_prgname(), assuming that you have called gtk_init() or
 * gdk_init().
 * 
 * This function may cause different actions on non-UNIX platforms.
 * 
 * When running on Windows, this function is *not* called by
 * g_on_error_query(). If called directly, it will raise an
 * exception, which will crash the program. If the `G_DEBUGGER` environment
 * variable is set, a debugger will be invoked to attach and
 * handle that exception (see [Running GLib Applications](glib-running.html)).
 * @param prgName the program name, needed by gdb for the "[S]tack trace"     option
 */
export function onErrorStackTrace(prgName: string): void
/**
 * Function to be called when starting a critical initialization
 * section. The argument `location` must point to a static
 * 0-initialized variable that will be set to a value other than 0 at
 * the end of the initialization section. In combination with
 * g_once_init_leave() and the unique address `value_location,` it can
 * be ensured that an initialization section will be executed only once
 * during a program's life time, and that concurrent threads are
 * blocked until initialization completed. To be used in constructs
 * like this:
 * 
 * 
 * ```c
 *   static gsize initialization_value = 0;
 * 
 *   if (g_once_init_enter (&initialization_value))
 *     {
 *       gsize setup_value = 42; // initialization code here
 * 
 *       g_once_init_leave (&initialization_value, setup_value);
 *     }
 * 
 *   // use initialization_value here
 * ```
 * 
 * 
 * While `location` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param location location of a static initializable variable    containing 0
 */
export function onceInitEnter(location: object): boolean
/**
 * Counterpart to g_once_init_enter(). Expects a location of a static
 * 0-initialized initialization variable, and an initialization value
 * other than 0. Sets the variable to the initialization value, and
 * releases concurrent threads blocking in g_once_init_enter() on this
 * initialization variable.
 * 
 * While `location` has a `volatile` qualifier, this is a historical artifact and
 * the pointer passed to it should not be `volatile`.
 * @param location location of a static initializable variable    containing 0
 * @param result new non-0 value for *`value_location`
 */
export function onceInitLeave(location: object, result: number): void
export function optionErrorQuark(): Quark
/**
 * Parses a string containing debugging options
 * into a %guint containing bit flags. This is used
 * within GDK and GTK+ to parse the debug options passed on the
 * command line or through environment variables.
 * 
 * If `string` is equal to "all", all flags are set. Any flags
 * specified along with "all" in `string` are inverted; thus,
 * "all,foo,bar" or "foo,bar,all" sets all flags except those
 * corresponding to "foo" and "bar".
 * 
 * If `string` is equal to "help", all the available keys in `keys`
 * are printed out to standard error.
 * @param string a list of debug options separated by colons, spaces, or commas, or %NULL.
 * @param keys pointer to an array of #GDebugKey which associate     strings with bit flags.
 */
export function parseDebugString(string: string | null, keys: DebugKey[]): number
/**
 * Gets the last component of the filename.
 * 
 * If `file_name` ends with a directory separator it gets the component
 * before the last slash. If `file_name` consists only of directory
 * separators (and on Windows, possibly a drive letter), a single
 * separator is returned. If `file_name` is empty, it gets ".".
 * @param fileName the name of the file
 */
export function pathGetBasename(fileName: string): string
/**
 * Gets the directory components of a file name. For example, the directory
 * component of `/usr/bin/test` is `/usr/bin`. The directory component of `/`
 * is `/`.
 * 
 * If the file name has no directory components "." is returned.
 * The returned string should be freed when no longer needed.
 * @param fileName the name of the file
 */
export function pathGetDirname(fileName: string): string
/**
 * Returns %TRUE if the given `file_name` is an absolute file name.
 * Note that this is a somewhat vague concept on Windows.
 * 
 * On POSIX systems, an absolute file name is well-defined. It always
 * starts from the single root directory. For example "/usr/local".
 * 
 * On Windows, the concepts of current drive and drive-specific
 * current directory introduce vagueness. This function interprets as
 * an absolute file name one that either begins with a directory
 * separator such as "\Users\tml" or begins with the root on a drive,
 * for example "C:\Windows". The first case also includes UNC paths
 * such as "\\\\myserver\docs\foo". In all cases, either slashes or
 * backslashes are accepted.
 * 
 * Note that a file name relative to the current drive root does not
 * truly specify a file uniquely over time and across processes, as
 * the current drive is a per-process value and can be changed.
 * 
 * File names relative the current directory on some specific drive,
 * such as "D:foo/bar", are not interpreted as absolute by this
 * function, but they obviously are not relative to the normal current
 * directory as returned by getcwd() or g_get_current_dir()
 * either. Such paths should be avoided, or need to be handled using
 * Windows-specific code.
 * @param fileName a file name
 */
export function pathIsAbsolute(fileName: string): boolean
/**
 * Returns a pointer into `file_name` after the root component,
 * i.e. after the "/" in UNIX or "C:\" under Windows. If `file_name`
 * is not an absolute path it returns %NULL.
 * @param fileName a file name
 */
export function pathSkipRoot(fileName: string): string | null
/**
 * Matches a string against a pattern given as a string. If this
 * function is to be called in a loop, it's more efficient to compile
 * the pattern once with g_pattern_spec_new() and call
 * g_pattern_match_string() repeatedly.
 * @param pattern the UTF-8 encoded pattern
 * @param string the UTF-8 encoded string to match
 */
export function patternMatchSimple(pattern: string, string: string): boolean
/**
 * This is equivalent to g_bit_lock, but working on pointers (or other
 * pointer-sized values).
 * 
 * For portability reasons, you may only lock on the bottom 32 bits of
 * the pointer.
 * 
 * While `address` has a `volatile` qualifier, this is a historical
 * artifact and the argument passed to it should not be `volatile`.
 * @param address a pointer to a #gpointer-sized value
 * @param lockBit a bit value between 0 and 31
 */
export function pointerBitLock(address: object, lockBit: number): void
/**
 * This is equivalent to g_bit_trylock(), but working on pointers (or
 * other pointer-sized values).
 * 
 * For portability reasons, you may only lock on the bottom 32 bits of
 * the pointer.
 * 
 * While `address` has a `volatile` qualifier, this is a historical
 * artifact and the argument passed to it should not be `volatile`.
 * @param address a pointer to a #gpointer-sized value
 * @param lockBit a bit value between 0 and 31
 */
export function pointerBitTrylock(address: object, lockBit: number): boolean
/**
 * This is equivalent to g_bit_unlock, but working on pointers (or other
 * pointer-sized values).
 * 
 * For portability reasons, you may only lock on the bottom 32 bits of
 * the pointer.
 * 
 * While `address` has a `volatile` qualifier, this is a historical
 * artifact and the argument passed to it should not be `volatile`.
 * @param address a pointer to a #gpointer-sized value
 * @param lockBit a bit value between 0 and 31
 */
export function pointerBitUnlock(address: object, lockBit: number): void
/**
 * Polls `fds,` as with the poll() system call, but portably. (On
 * systems that don't have poll(), it is emulated using select().)
 * This is used internally by #GMainContext, but it can be called
 * directly if you need to block until a file descriptor is ready, but
 * don't want to run the full main loop.
 * 
 * Each element of `fds` is a #GPollFD describing a single file
 * descriptor to poll. The `fd` field indicates the file descriptor,
 * and the `events` field indicates the events to poll for. On return,
 * the `revents` fields will be filled with the events that actually
 * occurred.
 * 
 * On POSIX systems, the file descriptors in `fds` can be any sort of
 * file descriptor, but the situation is much more complicated on
 * Windows. If you need to use g_poll() in code that has to run on
 * Windows, the easiest solution is to construct all of your
 * #GPollFDs with g_io_channel_win32_make_pollfd().
 * @param fds file descriptors to poll
 * @param nfds the number of file descriptors in `fds`
 * @param timeout amount of time to wait, in milliseconds, or -1 to wait forever
 */
export function poll(fds: PollFD, nfds: number, timeout: number): number
/**
 * Prefixes `prefix` to an existing error message. If `err` or *`err` is
 * %NULL (i.e.: no error variable) then do nothing.
 * @param err a return location for a #GError, or %NULL
 * @param prefix string to prefix `err` with
 */
export function prefixErrorLiteral(err: Error | null, prefix: string): void
/**
 * If `dest` is %NULL, free `src;` otherwise, moves `src` into *`dest`.
 * The error variable `dest` points to must be %NULL.
 * 
 * `src` must be non-%NULL.
 * 
 * Note that `src` is no longer valid after this call. If you want
 * to keep using the same GError*, you need to set it to %NULL
 * after calling this function on it.
 * @param src error to move into the return location
 */
export function propagateError(src: Error): /* dest */ Error | null
/**
 * Gets the #GQuark identifying the given (static) string. If the
 * string does not currently have an associated #GQuark, a new #GQuark
 * is created, linked to the given string.
 * 
 * Note that this function is identical to g_quark_from_string() except
 * that if a new #GQuark is created the string itself is used rather
 * than a copy. This saves memory, but can only be used if the string
 * will continue to exist until the program terminates. It can be used
 * with statically allocated strings in the main program, but not with
 * statically allocated memory in dynamically loaded modules, if you
 * expect to ever unload the module again (e.g. do not use this
 * function in GTK+ theme engines).
 * 
 * This function must not be used before library constructors have finished
 * running. In particular, this means it cannot be used to initialize global
 * variables in C++.
 * @param string a string
 */
export function quarkFromStaticString(string: string | null): Quark
/**
 * Gets the #GQuark identifying the given string. If the string does
 * not currently have an associated #GQuark, a new #GQuark is created,
 * using a copy of the string.
 * 
 * This function must not be used before library constructors have finished
 * running. In particular, this means it cannot be used to initialize global
 * variables in C++.
 * @param string a string
 */
export function quarkFromString(string: string | null): Quark
/**
 * Gets the string associated with the given #GQuark.
 * @param quark a #GQuark.
 */
export function quarkToString(quark: Quark): string
/**
 * Gets the #GQuark associated with the given string, or 0 if string is
 * %NULL or it has no associated #GQuark.
 * 
 * If you want the GQuark to be created if it doesn't already exist,
 * use g_quark_from_string() or g_quark_from_static_string().
 * 
 * This function must not be used before library constructors have finished
 * running.
 * @param string a string
 */
export function quarkTryString(string: string | null): Quark
/**
 * Returns a random #gdouble equally distributed over the range [0..1).
 */
export function randomDouble(): number
/**
 * Returns a random #gdouble equally distributed over the range
 * [`begin`..`end)`.
 * @param begin lower closed bound of the interval
 * @param end upper open bound of the interval
 */
export function randomDoubleRange(begin: number, end: number): number
/**
 * Return a random #guint32 equally distributed over the range
 * [0..2^32-1].
 */
export function randomInt(): number
/**
 * Returns a random #gint32 equally distributed over the range
 * [`begin`..`end-1`].
 * @param begin lower closed bound of the interval
 * @param end upper open bound of the interval
 */
export function randomIntRange(begin: number, end: number): number
/**
 * Sets the seed for the global random number generator, which is used
 * by the g_random_* functions, to `seed`.
 * @param seed a value to reinitialize the global random number generator
 */
export function randomSetSeed(seed: number): void
/**
 * Acquires a reference on the data pointed by `mem_block`.
 * @param memBlock a pointer to reference counted data
 */
export function rcBoxAcquire(memBlock: object): object
/**
 * Allocates `block_size` bytes of memory, and adds reference
 * counting semantics to it.
 * 
 * The data will be freed when its reference count drops to
 * zero.
 * 
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 * @param blockSize the size of the allocation, must be greater than 0
 */
export function rcBoxAlloc(blockSize: number): object
/**
 * Allocates `block_size` bytes of memory, and adds reference
 * counting semantics to it.
 * 
 * The contents of the returned data is set to zero.
 * 
 * The data will be freed when its reference count drops to
 * zero.
 * 
 * The allocated data is guaranteed to be suitably aligned for any
 * built-in type.
 * @param blockSize the size of the allocation, must be greater than 0
 */
export function rcBoxAlloc0(blockSize: number): object
/**
 * Allocates a new block of data with reference counting
 * semantics, and copies `block_size` bytes of `mem_block`
 * into it.
 * @param blockSize the number of bytes to copy, must be greater than 0
 * @param memBlock the memory to copy
 */
export function rcBoxDup(blockSize: number, memBlock: object): object
/**
 * Retrieves the size of the reference counted data pointed by `mem_block`.
 * @param memBlock a pointer to reference counted data
 */
export function rcBoxGetSize(memBlock: object): number
/**
 * Releases a reference on the data pointed by `mem_block`.
 * 
 * If the reference was the last one, it will free the
 * resources allocated for `mem_block`.
 * @param memBlock a pointer to reference counted data
 */
export function rcBoxRelease(memBlock: object): void
/**
 * Releases a reference on the data pointed by `mem_block`.
 * 
 * If the reference was the last one, it will call `clear_func`
 * to clear the contents of `mem_block,` and then will free the
 * resources allocated for `mem_block`.
 * @param memBlock a pointer to reference counted data
 * @param clearFunc a function to call when clearing the data
 */
export function rcBoxReleaseFull(memBlock: object, clearFunc: DestroyNotify): void
/**
 * Reallocates the memory pointed to by `mem,` so that it now has space for
 * `n_bytes` bytes of memory. It returns the new address of the memory, which may
 * have been moved. `mem` may be %NULL, in which case it's considered to
 * have zero-length. `n_bytes` may be 0, in which case %NULL will be returned
 * and `mem` will be freed unless it is %NULL.
 * @param mem the memory to reallocate
 * @param nBytes new size of the memory in bytes
 */
export function realloc(mem: object | null, nBytes: number): object | null
/**
 * This function is similar to g_realloc(), allocating (`n_blocks` * `n_block_bytes)` bytes,
 * but care is taken to detect possible overflow during multiplication.
 * @param mem the memory to reallocate
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 */
export function reallocN(mem: object | null, nBlocks: number, nBlockBytes: number): object | null
/**
 * Compares the current value of `rc` with `val`.
 * @param rc the address of a reference count variable
 * @param val the value to compare
 */
export function refCountCompare(rc: number, val: number): boolean
/**
 * Decreases the reference count.
 * 
 * If %TRUE is returned, the reference count reached 0. After this point, `rc`
 * is an undefined state and must be reinitialized with
 * g_ref_count_init() to be used again.
 * @param rc the address of a reference count variable
 */
export function refCountDec(rc: number): boolean
/**
 * Increases the reference count.
 * @param rc the address of a reference count variable
 */
export function refCountInc(rc: number): void
/**
 * Initializes a reference count variable to 1.
 * @param rc the address of a reference count variable
 */
export function refCountInit(rc: number): void
/**
 * Acquires a reference on a string.
 * @param str a reference counted string
 */
export function refStringAcquire(str: string): string
/**
 * Retrieves the length of `str`.
 * @param str a reference counted string
 */
export function refStringLength(str: string): number
/**
 * Creates a new reference counted string and copies the contents of `str`
 * into it.
 * @param str a NUL-terminated string
 */
export function refStringNew(str: string): string
/**
 * Creates a new reference counted string and copies the content of `str`
 * into it.
 * 
 * If you call this function multiple times with the same `str,` or with
 * the same contents of `str,` it will return a new reference, instead of
 * creating a new string.
 * @param str a NUL-terminated string
 */
export function refStringNewIntern(str: string): string
/**
 * Creates a new reference counted string and copies the contents of `str`
 * into it, up to `len` bytes.
 * 
 * Since this function does not stop at nul bytes, it is the caller's
 * responsibility to ensure that `str` has at least `len` addressable bytes.
 * @param str a string
 * @param len length of `str` to use, or -1 if `str` is nul-terminated
 */
export function refStringNewLen(str: string, len: number): string
/**
 * Releases a reference on a string; if it was the last reference, the
 * resources allocated by the string are freed as well.
 * @param str a reference counted string
 */
export function refStringRelease(str: string): void
/**
 * Checks whether `replacement` is a valid replacement string
 * (see g_regex_replace()), i.e. that all escape sequences in
 * it are valid.
 * 
 * If `has_references` is not %NULL then `replacement` is checked
 * for pattern references. For instance, replacement text 'foo\n'
 * does not contain references and may be evaluated without information
 * about actual match, but '\0\1' (whole match followed by first
 * subpattern) requires valid #GMatchInfo object.
 * @param replacement the replacement string
 */
export function regexCheckReplacement(replacement: string): [ /* returnType */ boolean, /* hasReferences */ boolean ]
export function regexErrorQuark(): Quark
/**
 * Escapes the nul characters in `string` to "\x00".  It can be used
 * to compile a regex with embedded nul characters.
 * 
 * For completeness, `length` can be -1 for a nul-terminated string.
 * In this case the output string will be of course equal to `string`.
 * @param string the string to escape
 * @param length the length of `string`
 */
export function regexEscapeNul(string: string, length: number): string
/**
 * Escapes the special characters used for regular expressions
 * in `string,` for instance "a.b*c" becomes "a\.b\*c". This
 * function is useful to dynamically generate regular expressions.
 * 
 * `string` can contain nul characters that are replaced with "\0",
 * in this case remember to specify the correct length of `string`
 * in `length`.
 * @param string the string to escape
 */
export function regexEscapeString(string: string[]): string
/**
 * Scans for a match in `string` for `pattern`.
 * 
 * This function is equivalent to g_regex_match() but it does not
 * require to compile the pattern with g_regex_new(), avoiding some
 * lines of code when you need just to do a match without extracting
 * substrings, capture counts, and so on.
 * 
 * If this function is to be called on the same `pattern` more than
 * once, it's more efficient to compile the pattern once with
 * g_regex_new() and then use g_regex_match().
 * @param pattern the regular expression
 * @param string the string to scan for matches
 * @param compileOptions compile options for the regular expression, or 0
 * @param matchOptions match options, or 0
 */
export function regexMatchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean
/**
 * Breaks the string on the pattern, and returns an array of
 * the tokens. If the pattern contains capturing parentheses,
 * then the text for each of the substrings will also be returned.
 * If the pattern does not match anywhere in the string, then the
 * whole string is returned as the first token.
 * 
 * This function is equivalent to g_regex_split() but it does
 * not require to compile the pattern with g_regex_new(), avoiding
 * some lines of code when you need just to do a split without
 * extracting substrings, capture counts, and so on.
 * 
 * If this function is to be called on the same `pattern` more than
 * once, it's more efficient to compile the pattern once with
 * g_regex_new() and then use g_regex_split().
 * 
 * As a special case, the result of splitting the empty string ""
 * is an empty vector, not a vector containing a single string.
 * The reason for this special case is that being able to represent
 * an empty vector is typically more useful than consistent handling
 * of empty elements. If you do need to represent empty elements,
 * you'll need to check for the empty string before calling this
 * function.
 * 
 * A pattern that can match empty strings splits `string` into
 * separate characters wherever it matches the empty string between
 * characters. For example splitting "ab c" using as a separator
 * "\s*", you will get "a", "b" and "c".
 * @param pattern the regular expression
 * @param string the string to scan for matches
 * @param compileOptions compile options for the regular expression, or 0
 * @param matchOptions match options, or 0
 */
export function regexSplitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[]
/**
 * Resets the cache used for g_get_user_special_dir(), so
 * that the latest on-disk version is used. Call this only
 * if you just changed the data on disk yourself.
 * 
 * Due to thread safety issues this may cause leaking of strings
 * that were previously returned from g_get_user_special_dir()
 * that can't be freed. We ensure to only leak the data for
 * the directories that actually changed value though.
 */
export function reloadUserSpecialDirsCache(): void
/**
 * A wrapper for the POSIX rmdir() function. The rmdir() function
 * deletes a directory from the filesystem.
 * 
 * See your C library manual for more details about how rmdir() works
 * on your system.
 * @param filename a pathname in the GLib file name encoding     (UTF-8 on Windows)
 */
export function rmdir(filename: string): number
/**
 * Returns the data that `iter` points to.
 * @param iter a #GSequenceIter
 */
export function sequenceGet(iter: SequenceIter): object | null
/**
 * Inserts a new item just before the item pointed to by `iter`.
 * @param iter a #GSequenceIter
 * @param data the data for the new item
 */
export function sequenceInsertBefore(iter: SequenceIter, data: object | null): SequenceIter
/**
 * Moves the item pointed to by `src` to the position indicated by `dest`.
 * After calling this function `dest` will point to the position immediately
 * after `src`. It is allowed for `src` and `dest` to point into different
 * sequences.
 * @param src a #GSequenceIter pointing to the item to move
 * @param dest a #GSequenceIter pointing to the position to which     the item is moved
 */
export function sequenceMove(src: SequenceIter, dest: SequenceIter): void
/**
 * Inserts the (`begin,` `end)` range at the destination pointed to by `dest`.
 * The `begin` and `end` iters must point into the same sequence. It is
 * allowed for `dest` to point to a different sequence than the one pointed
 * into by `begin` and `end`.
 * 
 * If `dest` is %NULL, the range indicated by `begin` and `end` is
 * removed from the sequence. If `dest` points to a place within
 * the (`begin,` `end)` range, the range does not move.
 * @param dest a #GSequenceIter
 * @param begin a #GSequenceIter
 * @param end a #GSequenceIter
 */
export function sequenceMoveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
/**
 * Finds an iterator somewhere in the range (`begin,` `end)`. This
 * iterator will be close to the middle of the range, but is not
 * guaranteed to be exactly in the middle.
 * 
 * The `begin` and `end` iterators must both point to the same sequence
 * and `begin` must come before or be equal to `end` in the sequence.
 * @param begin a #GSequenceIter
 * @param end a #GSequenceIter
 */
export function sequenceRangeGetMidpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
/**
 * Removes the item pointed to by `iter`. It is an error to pass the
 * end iterator to this function.
 * 
 * If the sequence has a data destroy function associated with it, this
 * function is called on the data for the removed item.
 * @param iter a #GSequenceIter
 */
export function sequenceRemove(iter: SequenceIter): void
/**
 * Removes all items in the (`begin,` `end)` range.
 * 
 * If the sequence has a data destroy function associated with it, this
 * function is called on the data for the removed items.
 * @param begin a #GSequenceIter
 * @param end a #GSequenceIter
 */
export function sequenceRemoveRange(begin: SequenceIter, end: SequenceIter): void
/**
 * Changes the data for the item pointed to by `iter` to be `data`. If
 * the sequence has a data destroy function associated with it, that
 * function is called on the existing data that `iter` pointed to.
 * @param iter a #GSequenceIter
 * @param data new data for the item
 */
export function sequenceSet(iter: SequenceIter, data: object | null): void
/**
 * Swaps the items pointed to by `a` and `b`. It is allowed for `a` and `b`
 * to point into difference sequences.
 * @param a a #GSequenceIter
 * @param b a #GSequenceIter
 */
export function sequenceSwap(a: SequenceIter, b: SequenceIter): void
/**
 * Sets a human-readable name for the application. This name should be
 * localized if possible, and is intended for display to the user.
 * Contrast with g_set_prgname(), which sets a non-localized name.
 * g_set_prgname() will be called automatically by gtk_init(),
 * but g_set_application_name() will not.
 * 
 * Note that for thread safety reasons, this function can only
 * be called once.
 * 
 * The application name will be used in contexts such as error messages,
 * or when displaying an application's name in the task list.
 * @param applicationName localized name of the application
 */
export function setApplicationName(applicationName: string): void
/**
 * Does nothing if `err` is %NULL; if `err` is non-%NULL, then *`err`
 * must be %NULL. A new #GError is created and assigned to *`err`.
 * Unlike g_set_error(), `message` is not a printf()-style format string.
 * Use this function if `message` contains text you don't have control over,
 * that could include printf() escape sequences.
 * @param domain error domain
 * @param code error code
 * @param message error message
 */
export function setErrorLiteral(domain: Quark, code: number, message: string): /* err */ Error
/**
 * Sets the name of the program. This name should not be localized,
 * in contrast to g_set_application_name().
 * 
 * If you are using #GApplication the program name is set in
 * g_application_run(). In case of GDK or GTK+ it is set in
 * gdk_init(), which is called by gtk_init() and the
 * #GtkApplication::startup handler. The program name is found by
 * taking the last component of `argv[`0].
 * 
 * Since GLib 2.72, this function can be called multiple times
 * and is fully thread safe. Prior to GLib 2.72, this function
 * could only be called once per process.
 * @param prgname the name of the program.
 */
export function setPrgname(prgname: string): void
/**
 * Sets an environment variable. On UNIX, both the variable's name and
 * value can be arbitrary byte strings, except that the variable's name
 * cannot contain '='. On Windows, they should be in UTF-8.
 * 
 * Note that on some systems, when variables are overwritten, the memory
 * used for the previous variables and its value isn't reclaimed.
 * 
 * You should be mindful of the fact that environment variable handling
 * in UNIX is not thread-safe, and your program may crash if one thread
 * calls g_setenv() while another thread is calling getenv(). (And note
 * that many functions, such as gettext(), call getenv() internally.)
 * This function is only safe to use at the very start of your program,
 * before creating any other threads (or creating objects that create
 * worker threads of their own).
 * 
 * If you need to set up the environment for a child process, you can
 * use g_get_environ() to get an environment array, modify that with
 * g_environ_setenv() and g_environ_unsetenv(), and then pass that
 * array directly to execvpe(), g_spawn_async(), or the like.
 * @param variable the environment variable to set, must not     contain '='.
 * @param value the value for to set the variable to.
 * @param overwrite whether to change the variable if it already exists.
 */
export function setenv(variable: string, value: string, overwrite: boolean): boolean
export function shellErrorQuark(): Quark
/**
 * Parses a command line into an argument vector, in much the same way
 * the shell would, but without many of the expansions the shell would
 * perform (variable expansion, globs, operators, filename expansion,
 * etc. are not supported).
 * 
 * The results are defined to be the same as those you would get from
 * a UNIX98 `/bin/sh`, as long as the input contains none of the
 * unsupported shell expansions. If the input does contain such expansions,
 * they are passed through literally.
 * 
 * Possible errors are those from the %G_SHELL_ERROR domain.
 * 
 * In particular, if `command_line` is an empty string (or a string containing
 * only whitespace), %G_SHELL_ERROR_EMPTY_STRING will be returned. It’s
 * guaranteed that `argvp` will be a non-empty array if this function returns
 * successfully.
 * 
 * Free the returned vector with g_strfreev().
 * @param commandLine command line to parse
 */
export function shellParseArgv(commandLine: string): [ /* returnType */ boolean, /* argvp */ string[] ]
/**
 * Quotes a string so that the shell (/bin/sh) will interpret the
 * quoted string to mean `unquoted_string`.
 * 
 * If you pass a filename to the shell, for example, you should first
 * quote it with this function.
 * 
 * The return value must be freed with g_free().
 * 
 * The quoting style used is undefined (single or double quotes may be
 * used).
 * @param unquotedString a literal string
 */
export function shellQuote(unquotedString: string): string
/**
 * Unquotes a string as the shell (/bin/sh) would.
 * 
 * This function only handles quotes; if a string contains file globs,
 * arithmetic operators, variables, backticks, redirections, or other
 * special-to-the-shell features, the result will be different from the
 * result a real shell would produce (the variables, backticks, etc.
 * will be passed through literally instead of being expanded).
 * 
 * This function is guaranteed to succeed if applied to the result of
 * g_shell_quote(). If it fails, it returns %NULL and sets the
 * error.
 * 
 * The `quoted_string` need not actually contain quoted or escaped text;
 * g_shell_unquote() simply goes through the string and unquotes/unescapes
 * anything that the shell would. Both single and double quotes are
 * handled, as are escapes including escaped newlines.
 * 
 * The return value must be freed with g_free().
 * 
 * Possible errors are in the %G_SHELL_ERROR domain.
 * 
 * Shell quoting rules are a bit strange. Single quotes preserve the
 * literal string exactly. escape sequences are not allowed; not even
 * `\'` - if you want a `'` in the quoted text, you have to do something
 * like `'foo'\''bar'`. Double quotes allow `$`, ```, `"`, `\`, and
 * newline to be escaped with backslash. Otherwise double quotes
 * preserve things literally.
 * @param quotedString shell-quoted string
 */
export function shellUnquote(quotedString: string): string
/**
 * Allocates a block of memory from the slice allocator.
 * 
 * The block address handed out can be expected to be aligned
 * to at least `1 * sizeof (void*)`, though in general slices
 * are `2 * sizeof (void*)` bytes aligned; if a `malloc()`
 * fallback implementation is used instead, the alignment may
 * be reduced in a libc dependent fashion.
 * 
 * Note that the underlying slice allocation mechanism can
 * be changed with the [`G_SLICE=always-malloc`][G_SLICE]
 * environment variable.
 * @param blockSize the number of bytes to allocate
 */
export function sliceAlloc(blockSize: number): object | null
/**
 * Allocates a block of memory via g_slice_alloc() and initializes
 * the returned memory to 0. Note that the underlying slice allocation
 * mechanism can be changed with the [`G_SLICE=always-malloc`][G_SLICE]
 * environment variable.
 * @param blockSize the number of bytes to allocate
 */
export function sliceAlloc0(blockSize: number): object | null
/**
 * Allocates a block of memory from the slice allocator
 * and copies `block_size` bytes into it from `mem_block`.
 * 
 * `mem_block` must be non-%NULL if `block_size` is non-zero.
 * @param blockSize the number of bytes to allocate
 * @param memBlock the memory to copy
 */
export function sliceCopy(blockSize: number, memBlock: object | null): object | null
/**
 * Frees a block of memory.
 * 
 * The memory must have been allocated via g_slice_alloc() or
 * g_slice_alloc0() and the `block_size` has to match the size
 * specified upon allocation. Note that the exact release behaviour
 * can be changed with the [`G_DEBUG=gc-friendly`][G_DEBUG] environment
 * variable, also see [`G_SLICE`][G_SLICE] for related debugging options.
 * 
 * If `mem_block` is %NULL, this function does nothing.
 * @param blockSize the size of the block
 * @param memBlock a pointer to the block to free
 */
export function sliceFree1(blockSize: number, memBlock: object | null): void
/**
 * Frees a linked list of memory blocks of structure type `type`.
 * 
 * The memory blocks must be equal-sized, allocated via
 * g_slice_alloc() or g_slice_alloc0() and linked together by a
 * `next` pointer (similar to #GSList). The offset of the `next`
 * field in each block is passed as third argument.
 * Note that the exact release behaviour can be changed with the
 * [`G_DEBUG=gc-friendly`][G_DEBUG] environment variable, also see
 * [`G_SLICE`][G_SLICE] for related debugging options.
 * 
 * If `mem_chain` is %NULL, this function does nothing.
 * @param blockSize the size of the blocks
 * @param memChain a pointer to the first block of the chain
 * @param nextOffset the offset of the `next` field in the blocks
 */
export function sliceFreeChainWithOffset(blockSize: number, memChain: object | null, nextOffset: number): void
export function sliceGetConfig(ckey: SliceConfig): number
export function sliceGetConfigState(ckey: SliceConfig, address: number, nValues: number): number
export function sliceSetConfig(ckey: SliceConfig, value: number): void
/**
 * Removes the source with the given ID from the default main context. You must
 * use g_source_destroy() for sources added to a non-default main context.
 * 
 * The ID of a #GSource is given by g_source_get_id(), or will be
 * returned by the functions g_source_attach(), g_idle_add(),
 * g_idle_add_full(), g_timeout_add(), g_timeout_add_full(),
 * g_child_watch_add(), g_child_watch_add_full(), g_io_add_watch(), and
 * g_io_add_watch_full().
 * 
 * It is a programmer error to attempt to remove a non-existent source.
 * 
 * More specifically: source IDs can be reissued after a source has been
 * destroyed and therefore it is never valid to use this function with a
 * source ID which may have already been removed.  An example is when
 * scheduling an idle to run in another thread with g_idle_add(): the
 * idle may already have run and been removed by the time this function
 * is called on its (now invalid) source ID.  This source ID may have
 * been reissued, leading to the operation being performed against the
 * wrong source.
 * @param tag the ID of the source to remove.
 */
export function sourceRemove(tag: number): boolean
/**
 * Removes a source from the default main loop context given the
 * source functions and user data. If multiple sources exist with the
 * same source functions and user data, only one will be destroyed.
 * @param funcs The `source_funcs` passed to g_source_new()
 * @param userData the user data for the callback
 */
export function sourceRemoveByFuncsUserData(funcs: SourceFuncs, userData: object | null): boolean
/**
 * Removes a source from the default main loop context given the user
 * data for the callback. If multiple sources exist with the same user
 * data, only one will be destroyed.
 * @param userData the user_data for the callback.
 */
export function sourceRemoveByUserData(userData: object | null): boolean
/**
 * Sets the name of a source using its ID.
 * 
 * This is a convenience utility to set source names from the return
 * value of g_idle_add(), g_timeout_add(), etc.
 * 
 * It is a programmer error to attempt to set the name of a non-existent
 * source.
 * 
 * More specifically: source IDs can be reissued after a source has been
 * destroyed and therefore it is never valid to use this function with a
 * source ID which may have already been removed.  An example is when
 * scheduling an idle to run in another thread with g_idle_add(): the
 * idle may already have run and been removed by the time this function
 * is called on its (now invalid) source ID.  This source ID may have
 * been reissued, leading to the operation being performed against the
 * wrong source.
 * @param tag a #GSource ID
 * @param name debug name for the source
 */
export function sourceSetNameById(tag: number, name: string): void
/**
 * Gets the smallest prime number from a built-in array of primes which
 * is larger than `num`. This is used within GLib to calculate the optimum
 * size of a #GHashTable.
 * 
 * The built-in array of primes ranges from 11 to 13845163 such that
 * each prime is approximately 1.5-2 times the previous prime.
 * @param num a #guint
 */
export function spacedPrimesClosest(num: number): number
/**
 * Executes a child program asynchronously.
 * 
 * See g_spawn_async_with_pipes() for a full description; this function
 * simply calls the g_spawn_async_with_pipes() without any pipes.
 * 
 * You should call g_spawn_close_pid() on the returned child process
 * reference when you don't need it any more.
 * 
 * If you are writing a GTK application, and the program you are spawning is a
 * graphical application too, then to ensure that the spawned program opens its
 * windows on the right screen, you may want to use #GdkAppLaunchContext,
 * #GAppLaunchContext, or set the %DISPLAY environment variable.
 * 
 * Note that the returned `child_pid` on Windows is a handle to the child
 * process and not its identifier. Process handles and process identifiers
 * are different concepts on Windows.
 * @param workingDirectory child's current working     directory, or %NULL to inherit parent's
 * @param argv      child's argument vector
 * @param envp      child's environment, or %NULL to inherit parent's
 * @param flags flags from #GSpawnFlags
 * @param childSetup function to run in the child just before exec()
 */
export function spawnAsync(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* childPid */ Pid ]
/**
 * Executes a child program asynchronously.
 * 
 * Identical to g_spawn_async_with_pipes_and_fds() but with `n_fds` set to zero,
 * so no FD assignments are used.
 * @param workingDirectory child's current working directory, or %NULL to inherit parent's, in the GLib file name encoding
 * @param argv child's argument vector, in the GLib file name encoding;   it must be non-empty and %NULL-terminated
 * @param envp child's environment, or %NULL to inherit parent's, in the GLib file name encoding
 * @param flags flags from #GSpawnFlags
 * @param childSetup function to run in the child just before exec()
 * @param stdinFd file descriptor to use for child's stdin, or `-1`
 * @param stdoutFd file descriptor to use for child's stdout, or `-1`
 * @param stderrFd file descriptor to use for child's stderr, or `-1`
 */
export function spawnAsyncWithFds(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null, stdinFd: number, stdoutFd: number, stderrFd: number): [ /* returnType */ boolean, /* childPid */ Pid ]
/**
 * Identical to g_spawn_async_with_pipes_and_fds() but with `n_fds` set to zero,
 * so no FD assignments are used.
 * @param workingDirectory child's current working     directory, or %NULL to inherit parent's, in the GLib file name encoding
 * @param argv child's argument     vector, in the GLib file name encoding; it must be non-empty and %NULL-terminated
 * @param envp      child's environment, or %NULL to inherit parent's, in the GLib file     name encoding
 * @param flags flags from #GSpawnFlags
 * @param childSetup function to run in the child just before exec()
 */
export function spawnAsyncWithPipes(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* childPid */ Pid, /* standardInput */ number, /* standardOutput */ number, /* standardError */ number ]
/**
 * Executes a child program asynchronously (your program will not
 * block waiting for the child to exit).
 * 
 * The child program is specified by the only argument that must be
 * provided, `argv`. `argv` should be a %NULL-terminated array of strings,
 * to be passed as the argument vector for the child. The first string
 * in `argv` is of course the name of the program to execute. By default,
 * the name of the program must be a full path. If `flags` contains the
 * %G_SPAWN_SEARCH_PATH flag, the `PATH` environment variable is used to
 * search for the executable. If `flags` contains the
 * %G_SPAWN_SEARCH_PATH_FROM_ENVP flag, the `PATH` variable from `envp`
 * is used to search for the executable. If both the
 * %G_SPAWN_SEARCH_PATH and %G_SPAWN_SEARCH_PATH_FROM_ENVP flags are
 * set, the `PATH` variable from `envp` takes precedence over the
 * environment variable.
 * 
 * If the program name is not a full path and %G_SPAWN_SEARCH_PATH flag
 * is not used, then the program will be run from the current directory
 * (or `working_directory,` if specified); this might be unexpected or even
 * dangerous in some cases when the current directory is world-writable.
 * 
 * On Windows, note that all the string or string vector arguments to
 * this function and the other `g_spawn*()` functions are in UTF-8, the
 * GLib file name encoding. Unicode characters that are not part of
 * the system codepage passed in these arguments will be correctly
 * available in the spawned program only if it uses wide character API
 * to retrieve its command line. For C programs built with Microsoft's
 * tools it is enough to make the program have a `wmain()` instead of
 * `main()`. `wmain()` has a wide character argument vector as parameter.
 * 
 * At least currently, mingw doesn't support `wmain()`, so if you use
 * mingw to develop the spawned program, it should call
 * g_win32_get_command_line() to get arguments in UTF-8.
 * 
 * On Windows the low-level child process creation API `CreateProcess()`
 * doesn't use argument vectors, but a command line. The C runtime
 * library's `spawn*()` family of functions (which g_spawn_async_with_pipes()
 * eventually calls) paste the argument vector elements together into
 * a command line, and the C runtime startup code does a corresponding
 * reconstruction of an argument vector from the command line, to be
 * passed to `main()`. Complications arise when you have argument vector
 * elements that contain spaces or double quotes. The `spawn*()` functions
 * don't do any quoting or escaping, but on the other hand the startup
 * code does do unquoting and unescaping in order to enable receiving
 * arguments with embedded spaces or double quotes. To work around this
 * asymmetry, g_spawn_async_with_pipes() will do quoting and escaping on
 * argument vector elements that need it before calling the C runtime
 * `spawn()` function.
 * 
 * The returned `child_pid` on Windows is a handle to the child
 * process, not its identifier. Process handles and process
 * identifiers are different concepts on Windows.
 * 
 * `envp` is a %NULL-terminated array of strings, where each string
 * has the form `KEY=VALUE`. This will become the child's environment.
 * If `envp` is %NULL, the child inherits its parent's environment.
 * 
 * `flags` should be the bitwise OR of any flags you want to affect the
 * function's behaviour. The %G_SPAWN_DO_NOT_REAP_CHILD means that the
 * child will not automatically be reaped; you must use a child watch
 * (g_child_watch_add()) to be notified about the death of the child process,
 * otherwise it will stay around as a zombie process until this process exits.
 * Eventually you must call g_spawn_close_pid() on the `child_pid,` in order to
 * free resources which may be associated with the child process. (On Unix,
 * using a child watch is equivalent to calling waitpid() or handling
 * the `SIGCHLD` signal manually. On Windows, calling g_spawn_close_pid()
 * is equivalent to calling `CloseHandle()` on the process handle returned
 * in `child_pid)`. See g_child_watch_add().
 * 
 * Open UNIX file descriptors marked as `FD_CLOEXEC` will be automatically
 * closed in the child process. %G_SPAWN_LEAVE_DESCRIPTORS_OPEN means that
 * other open file descriptors will be inherited by the child; otherwise all
 * descriptors except stdin/stdout/stderr will be closed before calling `exec()`
 * in the child. %G_SPAWN_SEARCH_PATH means that `argv[`0] need not be an
 * absolute path, it will be looked for in the `PATH` environment
 * variable. %G_SPAWN_SEARCH_PATH_FROM_ENVP means need not be an
 * absolute path, it will be looked for in the `PATH` variable from
 * `envp`. If both %G_SPAWN_SEARCH_PATH and %G_SPAWN_SEARCH_PATH_FROM_ENVP
 * are used, the value from `envp` takes precedence over the environment.
 * 
 * %G_SPAWN_STDOUT_TO_DEV_NULL means that the child's standard output
 * will be discarded, instead of going to the same location as the parent's
 * standard output. If you use this flag, `stdout_pipe_out` must be %NULL.
 * 
 * %G_SPAWN_STDERR_TO_DEV_NULL means that the child's standard error
 * will be discarded, instead of going to the same location as the parent's
 * standard error. If you use this flag, `stderr_pipe_out` must be %NULL.
 * 
 * %G_SPAWN_CHILD_INHERITS_STDIN means that the child will inherit the parent's
 * standard input (by default, the child's standard input is attached to
 * `/dev/null`). If you use this flag, `stdin_pipe_out` must be %NULL.
 * 
 * It is valid to pass the same FD in multiple parameters (e.g. you can pass
 * a single FD for both `stdout_fd` and `stderr_fd,` and include it in
 * `source_fds` too).
 * 
 * `source_fds` and `target_fds` allow zero or more FDs from this process to be
 * remapped to different FDs in the spawned process. If `n_fds` is greater than
 * zero, `source_fds` and `target_fds` must both be non-%NULL and the same length.
 * Each FD in `source_fds` is remapped to the FD number at the same index in
 * `target_fds`. The source and target FD may be equal to simply propagate an FD
 * to the spawned process. FD remappings are processed after standard FDs, so
 * any target FDs which equal `stdin_fd,` `stdout_fd` or `stderr_fd` will overwrite
 * them in the spawned process.
 * 
 * `source_fds` is supported on Windows since 2.72.
 * 
 * %G_SPAWN_FILE_AND_ARGV_ZERO means that the first element of `argv` is
 * the file to execute, while the remaining elements are the actual
 * argument vector to pass to the file. Normally g_spawn_async_with_pipes()
 * uses `argv[`0] as the file to execute, and passes all of `argv` to the child.
 * 
 * `child_setup` and `user_data` are a function and user data. On POSIX
 * platforms, the function is called in the child after GLib has
 * performed all the setup it plans to perform (including creating
 * pipes, closing file descriptors, etc.) but before calling `exec()`.
 * That is, `child_setup` is called just before calling `exec()` in the
 * child. Obviously actions taken in this function will only affect
 * the child, not the parent.
 * 
 * On Windows, there is no separate `fork()` and `exec()` functionality.
 * Child processes are created and run with a single API call,
 * `CreateProcess()`. There is no sensible thing `child_setup`
 * could be used for on Windows so it is ignored and not called.
 * 
 * If non-%NULL, `child_pid` will on Unix be filled with the child's
 * process ID. You can use the process ID to send signals to the child,
 * or to use g_child_watch_add() (or `waitpid()`) if you specified the
 * %G_SPAWN_DO_NOT_REAP_CHILD flag. On Windows, `child_pid` will be
 * filled with a handle to the child process only if you specified the
 * %G_SPAWN_DO_NOT_REAP_CHILD flag. You can then access the child
 * process using the Win32 API, for example wait for its termination
 * with the `WaitFor*()` functions, or examine its exit code with
 * `GetExitCodeProcess()`. You should close the handle with `CloseHandle()`
 * or g_spawn_close_pid() when you no longer need it.
 * 
 * If non-%NULL, the `stdin_pipe_out,` `stdout_pipe_out,` `stderr_pipe_out`
 * locations will be filled with file descriptors for writing to the child's
 * standard input or reading from its standard output or standard error.
 * The caller of g_spawn_async_with_pipes() must close these file descriptors
 * when they are no longer in use. If these parameters are %NULL, the
 * corresponding pipe won't be created.
 * 
 * If `stdin_pipe_out` is %NULL, the child's standard input is attached to
 * `/dev/null` unless %G_SPAWN_CHILD_INHERITS_STDIN is set.
 * 
 * If `stderr_pipe_out` is NULL, the child's standard error goes to the same
 * location as the parent's standard error unless %G_SPAWN_STDERR_TO_DEV_NULL
 * is set.
 * 
 * If `stdout_pipe_out` is NULL, the child's standard output goes to the same
 * location as the parent's standard output unless %G_SPAWN_STDOUT_TO_DEV_NULL
 * is set.
 * 
 * `error` can be %NULL to ignore errors, or non-%NULL to report errors.
 * If an error is set, the function returns %FALSE. Errors are reported
 * even if they occur in the child (for example if the executable in
 * ``argv[`0]` is not found). Typically the `message` field of returned
 * errors should be displayed to users. Possible errors are those from
 * the %G_SPAWN_ERROR domain.
 * 
 * If an error occurs, `child_pid,` `stdin_pipe_out,` `stdout_pipe_out,`
 * and `stderr_pipe_out` will not be filled with valid values.
 * 
 * If `child_pid` is not %NULL and an error does not occur then the returned
 * process reference must be closed using g_spawn_close_pid().
 * 
 * On modern UNIX platforms, GLib can use an efficient process launching
 * codepath driven internally by `posix_spawn()`. This has the advantage of
 * avoiding the fork-time performance costs of cloning the parent process
 * address space, and avoiding associated memory overcommit checks that are
 * not relevant in the context of immediately executing a distinct process.
 * This optimized codepath will be used provided that the following conditions
 * are met:
 * 
 * 1. %G_SPAWN_DO_NOT_REAP_CHILD is set
 * 2. %G_SPAWN_LEAVE_DESCRIPTORS_OPEN is set
 * 3. %G_SPAWN_SEARCH_PATH_FROM_ENVP is not set
 * 4. `working_directory` is %NULL
 * 5. `child_setup` is %NULL
 * 6. The program is of a recognised binary format, or has a shebang.
 *    Otherwise, GLib will have to execute the program through the
 *    shell, which is not done using the optimized codepath.
 * 
 * If you are writing a GTK application, and the program you are spawning is a
 * graphical application too, then to ensure that the spawned program opens its
 * windows on the right screen, you may want to use #GdkAppLaunchContext,
 * #GAppLaunchContext, or set the `DISPLAY` environment variable.
 * @param workingDirectory child's current working     directory, or %NULL to inherit parent's, in the GLib file name encoding
 * @param argv child's argument     vector, in the GLib file name encoding; it must be non-empty and %NULL-terminated
 * @param envp      child's environment, or %NULL to inherit parent's, in the GLib file     name encoding
 * @param flags flags from #GSpawnFlags
 * @param childSetup function to run in the child just before `exec()`
 * @param stdinFd file descriptor to use for child's stdin, or `-1`
 * @param stdoutFd file descriptor to use for child's stdout, or `-1`
 * @param stderrFd file descriptor to use for child's stderr, or `-1`
 * @param sourceFds array of FDs from the parent    process to make available in the child process
 * @param targetFds array of FDs to remap    `source_fds` to in the child process
 */
export function spawnAsyncWithPipesAndFds(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null, stdinFd: number, stdoutFd: number, stderrFd: number, sourceFds: number[] | null, targetFds: number[] | null): [ /* returnType */ boolean, /* childPidOut */ Pid, /* stdinPipeOut */ number, /* stdoutPipeOut */ number, /* stderrPipeOut */ number ]
/**
 * An old name for g_spawn_check_wait_status(), deprecated because its
 * name is misleading.
 * 
 * Despite the name of the function, `wait_status` must be the wait status
 * as returned by g_spawn_sync(), g_subprocess_get_status(), `waitpid()`,
 * etc. On Unix platforms, it is incorrect for it to be the exit status
 * as passed to `exit()` or returned by g_subprocess_get_exit_status() or
 * `WEXITSTATUS()`.
 * @param waitStatus A status as returned from g_spawn_sync()
 */
export function spawnCheckExitStatus(waitStatus: number): boolean
/**
 * Set `error` if `wait_status` indicates the child exited abnormally
 * (e.g. with a nonzero exit code, or via a fatal signal).
 * 
 * The g_spawn_sync() and g_child_watch_add() family of APIs return the
 * status of subprocesses encoded in a platform-specific way.
 * On Unix, this is guaranteed to be in the same format waitpid() returns,
 * and on Windows it is guaranteed to be the result of GetExitCodeProcess().
 * 
 * Prior to the introduction of this function in GLib 2.34, interpreting
 * `wait_status` required use of platform-specific APIs, which is problematic
 * for software using GLib as a cross-platform layer.
 * 
 * Additionally, many programs simply want to determine whether or not
 * the child exited successfully, and either propagate a #GError or
 * print a message to standard error. In that common case, this function
 * can be used. Note that the error message in `error` will contain
 * human-readable information about the wait status.
 * 
 * The `domain` and `code` of `error` have special semantics in the case
 * where the process has an "exit code", as opposed to being killed by
 * a signal. On Unix, this happens if WIFEXITED() would be true of
 * `wait_status`. On Windows, it is always the case.
 * 
 * The special semantics are that the actual exit code will be the
 * code set in `error,` and the domain will be %G_SPAWN_EXIT_ERROR.
 * This allows you to differentiate between different exit codes.
 * 
 * If the process was terminated by some means other than an exit
 * status (for example if it was killed by a signal), the domain will be
 * %G_SPAWN_ERROR and the code will be %G_SPAWN_ERROR_FAILED.
 * 
 * This function just offers convenience; you can of course also check
 * the available platform via a macro such as %G_OS_UNIX, and use
 * WIFEXITED() and WEXITSTATUS() on `wait_status` directly. Do not attempt
 * to scan or parse the error message string; it may be translated and/or
 * change in future versions of GLib.
 * 
 * Prior to version 2.70, g_spawn_check_exit_status() provides the same
 * functionality, although under a misleading name.
 * @param waitStatus A platform-specific wait status as returned from g_spawn_sync()
 */
export function spawnCheckWaitStatus(waitStatus: number): boolean
/**
 * On some platforms, notably Windows, the #GPid type represents a resource
 * which must be closed to prevent resource leaking. g_spawn_close_pid()
 * is provided for this purpose. It should be used on all platforms, even
 * though it doesn't do anything under UNIX.
 * @param pid The process reference to close
 */
export function spawnClosePid(pid: Pid): void
/**
 * A simple version of g_spawn_async() that parses a command line with
 * g_shell_parse_argv() and passes it to g_spawn_async().
 * 
 * Runs a command line in the background. Unlike g_spawn_async(), the
 * %G_SPAWN_SEARCH_PATH flag is enabled, other flags are not. Note
 * that %G_SPAWN_SEARCH_PATH can have security implications, so
 * consider using g_spawn_async() directly if appropriate. Possible
 * errors are those from g_shell_parse_argv() and g_spawn_async().
 * 
 * The same concerns on Windows apply as for g_spawn_command_line_sync().
 * @param commandLine a command line
 */
export function spawnCommandLineAsync(commandLine: string): boolean
/**
 * A simple version of g_spawn_sync() with little-used parameters
 * removed, taking a command line instead of an argument vector.
 * 
 * See g_spawn_sync() for full details.
 * 
 * The `command_line` argument will be parsed by g_shell_parse_argv().
 * 
 * Unlike g_spawn_sync(), the %G_SPAWN_SEARCH_PATH flag is enabled.
 * Note that %G_SPAWN_SEARCH_PATH can have security implications, so
 * consider using g_spawn_sync() directly if appropriate.
 * 
 * Possible errors are those from g_spawn_sync() and those
 * from g_shell_parse_argv().
 * 
 * If `wait_status` is non-%NULL, the platform-specific status of
 * the child is stored there; see the documentation of
 * g_spawn_check_wait_status() for how to use and interpret this.
 * On Unix platforms, note that it is usually not equal
 * to the integer passed to `exit()` or returned from `main()`.
 * 
 * On Windows, please note the implications of g_shell_parse_argv()
 * parsing `command_line`. Parsing is done according to Unix shell rules, not
 * Windows command interpreter rules.
 * Space is a separator, and backslashes are
 * special. Thus you cannot simply pass a `command_line` containing
 * canonical Windows paths, like "c:\\program files\\app\\app.exe", as
 * the backslashes will be eaten, and the space will act as a
 * separator. You need to enclose such paths with single quotes, like
 * "'c:\\program files\\app\\app.exe' 'e:\\folder\\argument.txt'".
 * @param commandLine a command line
 */
export function spawnCommandLineSync(commandLine: string): [ /* returnType */ boolean, /* standardOutput */ Uint8Array, /* standardError */ Uint8Array, /* waitStatus */ number ]
export function spawnErrorQuark(): Quark
export function spawnExitErrorQuark(): Quark
/**
 * Executes a child synchronously (waits for the child to exit before returning).
 * 
 * All output from the child is stored in `standard_output` and `standard_error,`
 * if those parameters are non-%NULL. Note that you must set the
 * %G_SPAWN_STDOUT_TO_DEV_NULL and %G_SPAWN_STDERR_TO_DEV_NULL flags when
 * passing %NULL for `standard_output` and `standard_error`.
 * 
 * If `wait_status` is non-%NULL, the platform-specific status of
 * the child is stored there; see the documentation of
 * g_spawn_check_wait_status() for how to use and interpret this.
 * On Unix platforms, note that it is usually not equal
 * to the integer passed to `exit()` or returned from `main()`.
 * 
 * Note that it is invalid to pass %G_SPAWN_DO_NOT_REAP_CHILD in
 * `flags,` and on POSIX platforms, the same restrictions as for
 * g_child_watch_source_new() apply.
 * 
 * If an error occurs, no data is returned in `standard_output,`
 * `standard_error,` or `wait_status`.
 * 
 * This function calls g_spawn_async_with_pipes() internally; see that
 * function for full details on the other parameters and details on
 * how these functions work on Windows.
 * @param workingDirectory child's current working     directory, or %NULL to inherit parent's
 * @param argv      child's argument vector, which must be non-empty and %NULL-terminated
 * @param envp      child's environment, or %NULL to inherit parent's
 * @param flags flags from #GSpawnFlags
 * @param childSetup function to run in the child just before exec()
 */
export function spawnSync(workingDirectory: string | null, argv: string[], envp: string[] | null, flags: SpawnFlags, childSetup: SpawnChildSetupFunc | null): [ /* returnType */ boolean, /* standardOutput */ Uint8Array, /* standardError */ Uint8Array, /* waitStatus */ number ]
/**
 * Copies a nul-terminated string into the dest buffer, include the
 * trailing nul, and return a pointer to the trailing nul byte.
 * This is useful for concatenating multiple strings together
 * without having to repeatedly scan for the end.
 * @param dest destination buffer.
 * @param src source string.
 */
export function stpcpy(dest: string, src: string): string
/**
 * Compares two strings for byte-by-byte equality and returns %TRUE
 * if they are equal. It can be passed to g_hash_table_new() as the
 * `key_equal_func` parameter, when using non-%NULL strings as keys in a
 * #GHashTable.
 * 
 * This function is typically used for hash table comparisons, but can be used
 * for general purpose comparisons of non-%NULL strings. For a %NULL-safe string
 * comparison function, see g_strcmp0().
 * @param v1 a key
 * @param v2 a key to compare with `v1`
 */
export function strEqual(v1: object, v2: object): boolean
/**
 * Looks whether the string `str` begins with `prefix`.
 * @param str a nul-terminated string
 * @param prefix the nul-terminated prefix to look for
 */
export function strHasPrefix(str: string, prefix: string): boolean
/**
 * Looks whether the string `str` ends with `suffix`.
 * @param str a nul-terminated string
 * @param suffix the nul-terminated suffix to look for
 */
export function strHasSuffix(str: string, suffix: string): boolean
/**
 * Converts a string to a hash value.
 * 
 * This function implements the widely used "djb" hash apparently
 * posted by Daniel Bernstein to comp.lang.c some time ago.  The 32
 * bit unsigned hash value starts at 5381 and for each byte 'c' in
 * the string, is updated: `hash = hash * 33 + c`. This function
 * uses the signed value of each byte.
 * 
 * It can be passed to g_hash_table_new() as the `hash_func` parameter,
 * when using non-%NULL strings as keys in a #GHashTable.
 * 
 * Note that this function may not be a perfect fit for all use cases.
 * For example, it produces some hash collisions with strings as short
 * as 2.
 * @param v a string key
 */
export function strHash(v: object): number
/**
 * Determines if a string is pure ASCII. A string is pure ASCII if it
 * contains no bytes with the high bit set.
 * @param str a string
 */
export function strIsAscii(str: string): boolean
/**
 * Checks if a search conducted for `search_term` should match
 * `potential_hit`.
 * 
 * This function calls g_str_tokenize_and_fold() on both
 * `search_term` and `potential_hit`.  ASCII alternates are never taken
 * for `search_term` but will be taken for `potential_hit` according to
 * the value of `accept_alternates`.
 * 
 * A hit occurs when each folded token in `search_term` is a prefix of a
 * folded token from `potential_hit`.
 * 
 * Depending on how you're performing the search, it will typically be
 * faster to call g_str_tokenize_and_fold() on each string in
 * your corpus and build an index on the returned folded tokens, then
 * call g_str_tokenize_and_fold() on the search term and
 * perform lookups into that index.
 * 
 * As some examples, searching for ‘fred’ would match the potential hit
 * ‘Smith, Fred’ and also ‘Frédéric’.  Searching for ‘Fréd’ would match
 * ‘Frédéric’ but not ‘Frederic’ (due to the one-directional nature of
 * accent matching).  Searching ‘fo’ would match ‘Foo’ and ‘Bar Foo
 * Baz’, but not ‘SFO’ (because no word has ‘fo’ as a prefix).
 * @param searchTerm the search term from the user
 * @param potentialHit the text that may be a hit
 * @param acceptAlternates %TRUE to accept ASCII alternates
 */
export function strMatchString(searchTerm: string, potentialHit: string, acceptAlternates: boolean): boolean
/**
 * Transliterate `str` to plain ASCII.
 * 
 * For best results, `str` should be in composed normalised form.
 * 
 * This function performs a reasonably good set of character
 * replacements.  The particular set of replacements that is done may
 * change by version or even by runtime environment.
 * 
 * If the source language of `str` is known, it can used to improve the
 * accuracy of the translation by passing it as `from_locale`.  It should
 * be a valid POSIX locale string (of the form
 * `language[_territory][.codeset][`modifier]``).
 * 
 * If `from_locale` is %NULL then the current locale is used.
 * 
 * If you want to do translation for no specific locale, and you want it
 * to be done independently of the currently locale, specify `"C"` for
 * `from_locale`.
 * @param str a string, in UTF-8
 * @param fromLocale the source locale, if known
 */
export function strToAscii(str: string, fromLocale: string | null): string
/**
 * Tokenises `string` and performs folding on each token.
 * 
 * A token is a non-empty sequence of alphanumeric characters in the
 * source string, separated by non-alphanumeric characters.  An
 * "alphanumeric" character for this purpose is one that matches
 * g_unichar_isalnum() or g_unichar_ismark().
 * 
 * Each token is then (Unicode) normalised and case-folded.  If
 * `ascii_alternates` is non-%NULL and some of the returned tokens
 * contain non-ASCII characters, ASCII alternatives will be generated.
 * 
 * The number of ASCII alternatives that are generated and the method
 * for doing so is unspecified, but `translit_locale` (if specified) may
 * improve the transliteration if the language of the source string is
 * known.
 * @param string a string
 * @param translitLocale the language code (like 'de' or   'en_GB') from which `string` originates
 */
export function strTokenizeAndFold(string: string, translitLocale: string | null): [ /* returnType */ string[], /* asciiAlternates */ string[] ]
/**
 * For each character in `string,` if the character is not in `valid_chars,`
 * replaces the character with `substitutor`.
 * 
 * Modifies `string` in place, and return `string` itself, not a copy. The
 * return value is to allow nesting such as:
 * 
 * 
 * ```c
 *   g_ascii_strup (g_strcanon (str, "abc", '?'))
 * ```
 * 
 * 
 * In order to modify a copy, you may use g_strdup():
 * 
 * 
 * ```c
 *   reformatted = g_strcanon (g_strdup (const_str), "abc", '?');
 *   ...
 *   g_free (reformatted);
 * ```
 * 
 * @param string a nul-terminated array of bytes
 * @param validChars bytes permitted in `string`
 * @param substitutor replacement character for disallowed bytes
 */
export function strcanon(string: string, validChars: string, substitutor: number): string
/**
 * A case-insensitive string comparison, corresponding to the standard
 * strcasecmp() function on platforms which support it.
 * @param s1 a string
 * @param s2 a string to compare with `s1`
 */
export function strcasecmp(s1: string, s2: string): number
/**
 * Removes trailing whitespace from a string.
 * 
 * This function doesn't allocate or reallocate any memory;
 * it modifies `string` in place. Therefore, it cannot be used
 * on statically allocated strings.
 * 
 * The pointer to `string` is returned to allow the nesting of functions.
 * 
 * Also see g_strchug() and g_strstrip().
 * @param string a string to remove the trailing whitespace from
 */
export function strchomp(string: string): string
/**
 * Removes leading whitespace from a string, by moving the rest
 * of the characters forward.
 * 
 * This function doesn't allocate or reallocate any memory;
 * it modifies `string` in place. Therefore, it cannot be used on
 * statically allocated strings.
 * 
 * The pointer to `string` is returned to allow the nesting of functions.
 * 
 * Also see g_strchomp() and g_strstrip().
 * @param string a string to remove the leading whitespace from
 */
export function strchug(string: string): string
/**
 * Compares `str1` and `str2` like strcmp(). Handles %NULL
 * gracefully by sorting it before non-%NULL strings.
 * Comparing two %NULL pointers returns 0.
 * @param str1 a C string or %NULL
 * @param str2 another C string or %NULL
 */
export function strcmp0(str1: string | null, str2: string | null): number
/**
 * Replaces all escaped characters with their one byte equivalent.
 * 
 * This function does the reverse conversion of g_strescape().
 * @param source a string to compress
 */
export function strcompress(source: string): string
/**
 * Converts any delimiter characters in `string` to `new_delimiter`.
 * 
 * Any characters in `string` which are found in `delimiters` are
 * changed to the `new_delimiter` character. Modifies `string` in place,
 * and returns `string` itself, not a copy.
 * 
 * The return value is to allow nesting such as:
 * 
 * 
 * ```c
 *   g_ascii_strup (g_strdelimit (str, "abc", '?'))
 * ```
 * 
 * 
 * In order to modify a copy, you may use g_strdup():
 * 
 * 
 * ```c
 *   reformatted = g_strdelimit (g_strdup (const_str), "abc", '?');
 *   ...
 *   g_free (reformatted);
 * ```
 * 
 * @param string the string to convert
 * @param delimiters a string containing the current delimiters,     or %NULL to use the standard delimiters defined in %G_STR_DELIMITERS
 * @param newDelimiter the new delimiter character
 */
export function strdelimit(string: string, delimiters: string | null, newDelimiter: number): string
/**
 * Converts a string to lower case.
 * @param string the string to convert.
 */
export function strdown(string: string): string
/**
 * Duplicates a string. If `str` is %NULL it returns %NULL.
 * The returned string should be freed with g_free()
 * when no longer needed.
 * @param str the string to duplicate
 */
export function strdup(str: string | null): string
/**
 * Returns a string corresponding to the given error code, e.g. "no
 * such process". Unlike strerror(), this always returns a string in
 * UTF-8 encoding, and the pointer is guaranteed to remain valid for
 * the lifetime of the process.
 * 
 * Note that the string may be translated according to the current locale.
 * 
 * The value of %errno will not be changed by this function. However, it may
 * be changed by intermediate function calls, so you should save its value
 * as soon as the call returns:
 * |[
 *   int saved_errno;
 * 
 *   ret = read (blah);
 *   saved_errno = errno;
 * 
 *   g_strerror (saved_errno);
 * ```
 * 
 * @param errnum the system error number. See the standard C %errno     documentation
 */
export function strerror(errnum: number): string
/**
 * Escapes the special characters '\b', '\f', '\n', '\r', '\t', '\v', '\'
 * and '"' in the string `source` by inserting a '\' before
 * them. Additionally all characters in the range 0x01-0x1F (everything
 * below SPACE) and in the range 0x7F-0xFF (all non-ASCII chars) are
 * replaced with a '\' followed by their octal representation.
 * Characters supplied in `exceptions` are not escaped.
 * 
 * g_strcompress() does the reverse conversion.
 * @param source a string to escape
 * @param exceptions a string of characters not to escape in `source`
 */
export function strescape(source: string, exceptions: string | null): string
/**
 * Frees a %NULL-terminated array of strings, as well as each
 * string it contains.
 * 
 * If `str_array` is %NULL, this function simply returns.
 * @param strArray a %NULL-terminated array of strings to free
 */
export function strfreev(strArray: string | null): void
/**
 * An auxiliary function for gettext() support (see Q_()).
 * @param msgid a string
 * @param msgval another string
 */
export function stripContext(msgid: string, msgval: string): string
/**
 * Joins a number of strings together to form one long string, with the
 * optional `separator` inserted between each of them. The returned string
 * should be freed with g_free().
 * 
 * If `str_array` has no items, the return value will be an
 * empty string. If `str_array` contains a single item, `separator` will not
 * appear in the resulting string.
 * @param separator a string to insert between each of the     strings, or %NULL
 * @param strArray a %NULL-terminated array of strings to join
 */
export function strjoinv(separator: string | null, strArray: string): string
/**
 * Portability wrapper that calls strlcat() on systems which have it,
 * and emulates it otherwise. Appends nul-terminated `src` string to `dest,`
 * guaranteeing nul-termination for `dest`. The total size of `dest` won't
 * exceed `dest_size`.
 * 
 * At most `dest_size` - 1 characters will be copied. Unlike strncat(),
 * `dest_size` is the full size of dest, not the space left over. This
 * function does not allocate memory. It always nul-terminates (unless
 * `dest_size` == 0 or there were no nul characters in the `dest_size`
 * characters of dest to start with).
 * 
 * Caveat: this is supposedly a more secure alternative to strcat() or
 * strncat(), but for real security g_strconcat() is harder to mess up.
 * @param dest destination buffer, already containing one nul-terminated string
 * @param src source buffer
 * @param destSize length of `dest` buffer in bytes (not length of existing string     inside `dest)`
 */
export function strlcat(dest: string, src: string, destSize: number): number
/**
 * Portability wrapper that calls strlcpy() on systems which have it,
 * and emulates strlcpy() otherwise. Copies `src` to `dest;` `dest` is
 * guaranteed to be nul-terminated; `src` must be nul-terminated;
 * `dest_size` is the buffer size, not the number of bytes to copy.
 * 
 * At most `dest_size` - 1 characters will be copied. Always nul-terminates
 * (unless `dest_size` is 0). This function does not allocate memory. Unlike
 * strncpy(), this function doesn't pad `dest` (so it's often faster). It
 * returns the size of the attempted result, strlen (src), so if
 * `retval` >= `dest_size,` truncation occurred.
 * 
 * Caveat: strlcpy() is supposedly more secure than strcpy() or strncpy(),
 * but if you really want to avoid screwups, g_strdup() is an even better
 * idea.
 * @param dest destination buffer
 * @param src source buffer
 * @param destSize length of `dest` in bytes
 */
export function strlcpy(dest: string, src: string, destSize: number): number
/**
 * A case-insensitive string comparison, corresponding to the standard
 * strncasecmp() function on platforms which support it. It is similar
 * to g_strcasecmp() except it only compares the first `n` characters of
 * the strings.
 * @param s1 a string
 * @param s2 a string to compare with `s1`
 * @param n the maximum number of characters to compare
 */
export function strncasecmp(s1: string, s2: string, n: number): number
/**
 * Duplicates the first `n` bytes of a string, returning a newly-allocated
 * buffer `n` + 1 bytes long which will always be nul-terminated. If `str`
 * is less than `n` bytes long the buffer is padded with nuls. If `str` is
 * %NULL it returns %NULL. The returned value should be freed when no longer
 * needed.
 * 
 * To copy a number of characters from a UTF-8 encoded string,
 * use g_utf8_strncpy() instead.
 * @param str the string to duplicate
 * @param n the maximum number of bytes to copy from `str`
 */
export function strndup(str: string, n: number): string
/**
 * Creates a new string `length` bytes long filled with `fill_char`.
 * The returned string should be freed when no longer needed.
 * @param length the length of the new string
 * @param fillChar the byte to fill the string with
 */
export function strnfill(length: number, fillChar: number): string
/**
 * Reverses all of the bytes in a string. For example,
 * `g_strreverse ("abcdef")` will result in "fedcba".
 * 
 * Note that g_strreverse() doesn't work on UTF-8 strings
 * containing multibyte characters. For that purpose, use
 * g_utf8_strreverse().
 * @param string the string to reverse
 */
export function strreverse(string: string): string
/**
 * Searches the string `haystack` for the last occurrence
 * of the string `needle`.
 * @param haystack a nul-terminated string
 * @param needle the nul-terminated string to search for
 */
export function strrstr(haystack: string, needle: string): string
/**
 * Searches the string `haystack` for the last occurrence
 * of the string `needle,` limiting the length of the search
 * to `haystack_len`.
 * @param haystack a nul-terminated string
 * @param haystackLen the maximum length of `haystack` in bytes. A length of -1     can be used to mean "search the entire string", like g_strrstr().
 * @param needle the nul-terminated string to search for
 */
export function strrstrLen(haystack: string, haystackLen: number, needle: string): string
/**
 * Returns a string describing the given signal, e.g. "Segmentation fault".
 * You should use this function in preference to strsignal(), because it
 * returns a string in UTF-8 encoding, and since not all platforms support
 * the strsignal() function.
 * @param signum the signal number. See the `signal` documentation
 */
export function strsignal(signum: number): string
/**
 * Searches the string `haystack` for the first occurrence
 * of the string `needle,` limiting the length of the search
 * to `haystack_len`.
 * @param haystack a nul-terminated string
 * @param haystackLen the maximum length of `haystack` in bytes. A length of -1     can be used to mean "search the entire string", like `strstr()`.
 * @param needle the string to search for
 */
export function strstrLen(haystack: string, haystackLen: number, needle: string): string
/**
 * Converts a string to a #gdouble value.
 * It calls the standard strtod() function to handle the conversion, but
 * if the string is not completely converted it attempts the conversion
 * again with g_ascii_strtod(), and returns the best match.
 * 
 * This function should seldom be used. The normal situation when reading
 * numbers not for human consumption is to use g_ascii_strtod(). Only when
 * you know that you must expect both locale formatted and C formatted numbers
 * should you use this. Make sure that you don't pass strings such as comma
 * separated lists of values, since the commas may be interpreted as a decimal
 * point in some locales, causing unexpected results.
 * @param nptr the string to convert to a numeric value.
 */
export function strtod(nptr: string): [ /* returnType */ number, /* endptr */ string ]
/**
 * Converts a string to upper case.
 * @param string the string to convert
 */
export function strup(string: string): string
/**
 * Checks if `strv` contains `str`. `strv` must not be %NULL.
 * @param strv a %NULL-terminated array of strings
 * @param str a string
 */
export function strvContains(strv: string, str: string): boolean
/**
 * Checks if `strv1` and `strv2` contain exactly the same elements in exactly the
 * same order. Elements are compared using g_str_equal(). To match independently
 * of order, sort the arrays first (using g_qsort_with_data() or similar).
 * 
 * Two empty arrays are considered equal. Neither `strv1` not `strv2` may be
 * %NULL.
 * @param strv1 a %NULL-terminated array of strings
 * @param strv2 another %NULL-terminated array of strings
 */
export function strvEqual(strv1: string, strv2: string): boolean
export function strvGetType(): GObject.GType
/**
 * Returns the length of the given %NULL-terminated
 * string array `str_array`. `str_array` must not be %NULL.
 * @param strArray a %NULL-terminated array of strings
 */
export function strvLength(strArray: string): number
/**
 * Create a new test case, similar to g_test_create_case(). However
 * the test is assumed to use no fixture, and test suites are automatically
 * created on the fly and added to the root fixture, based on the
 * slash-separated portions of `testpath`. The `test_data` argument
 * will be passed as first argument to `test_func`.
 * 
 * If `testpath` includes the component "subprocess" anywhere in it,
 * the test will be skipped by default, and only run if explicitly
 * required via the `-p` command-line option or g_test_trap_subprocess().
 * 
 * No component of `testpath` may start with a dot (`.`) if the
 * %G_TEST_OPTION_ISOLATE_DIRS option is being used; and it is recommended to
 * do so even if it isn’t.
 * @param testpath /-separated test case path name for the test.
 * @param testData Test data argument for the test function.
 * @param testFunc The test function to invoke for this test.
 */
export function testAddDataFunc(testpath: string, testData: object | null, testFunc: TestDataFunc): void
/**
 * Create a new test case, as with g_test_add_data_func(), but freeing
 * `test_data` after the test run is complete.
 * @param testpath /-separated test case path name for the test.
 * @param testData Test data argument for the test function.
 * @param testFunc The test function to invoke for this test.
 */
export function testAddDataFuncFull(testpath: string, testData: object | null, testFunc: TestDataFunc): void
/**
 * Create a new test case, similar to g_test_create_case(). However
 * the test is assumed to use no fixture, and test suites are automatically
 * created on the fly and added to the root fixture, based on the
 * slash-separated portions of `testpath`.
 * 
 * If `testpath` includes the component "subprocess" anywhere in it,
 * the test will be skipped by default, and only run if explicitly
 * required via the `-p` command-line option or g_test_trap_subprocess().
 * 
 * No component of `testpath` may start with a dot (`.`) if the
 * %G_TEST_OPTION_ISOLATE_DIRS option is being used; and it is recommended to
 * do so even if it isn’t.
 * @param testpath /-separated test case path name for the test.
 * @param testFunc The test function to invoke for this test.
 */
export function testAddFunc(testpath: string, testFunc: TestFunc): void
export function testAssertExpectedMessagesInternal(domain: string, file: string, line: number, func: string): void
/**
 * This function adds a message to test reports that
 * associates a bug URI with a test case.
 * 
 * Bug URIs are constructed from a base URI set with g_test_bug_base()
 * and `bug_uri_snippet`. If g_test_bug_base() has not been called, it is
 * assumed to be the empty string, so a full URI can be provided to
 * g_test_bug() instead.
 * 
 * Since GLib 2.70, the base URI is not prepended to `bug_uri_snippet` if it
 * is already a valid URI.
 * @param bugUriSnippet Bug specific bug tracker URI or URI portion.
 */
export function testBug(bugUriSnippet: string): void
/**
 * Specify the base URI for bug reports.
 * 
 * The base URI is used to construct bug report messages for
 * g_test_message() when g_test_bug() is called.
 * Calling this function outside of a test case sets the
 * default base URI for all test cases. Calling it from within
 * a test case changes the base URI for the scope of the test
 * case only.
 * Bug URIs are constructed by appending a bug specific URI
 * portion to `uri_pattern,` or by replacing the special string
 * `%s` within `uri_pattern` if that is present.
 * 
 * If g_test_bug_base() is not called, bug URIs are formed solely
 * from the value provided by g_test_bug().
 * @param uriPattern the base pattern for bug URIs
 */
export function testBugBase(uriPattern: string): void
/**
 * Indicates that a message with the given `log_domain` and `log_level,`
 * with text matching `pattern,` is expected to be logged. When this
 * message is logged, it will not be printed, and the test case will
 * not abort.
 * 
 * This API may only be used with the old logging API (g_log() without
 * %G_LOG_USE_STRUCTURED defined). It will not work with the structured logging
 * API. See [Testing for Messages][testing-for-messages].
 * 
 * Use g_test_assert_expected_messages() to assert that all
 * previously-expected messages have been seen and suppressed.
 * 
 * You can call this multiple times in a row, if multiple messages are
 * expected as a result of a single call. (The messages must appear in
 * the same order as the calls to g_test_expect_message().)
 * 
 * For example:
 * 
 * 
 * ```c
 *   // g_main_context_push_thread_default() should fail if the
 *   // context is already owned by another thread.
 *   g_test_expect_message (G_LOG_DOMAIN,
 *                          G_LOG_LEVEL_CRITICAL,
 *                          "assertion*acquired_context*failed");
 *   g_main_context_push_thread_default (bad_context);
 *   g_test_assert_expected_messages ();
 * ```
 * 
 * 
 * Note that you cannot use this to test g_error() messages, since
 * g_error() intentionally never returns even if the program doesn't
 * abort; use g_test_trap_subprocess() in this case.
 * 
 * If messages at %G_LOG_LEVEL_DEBUG are emitted, but not explicitly
 * expected via g_test_expect_message() then they will be ignored.
 * @param logDomain the log domain of the message
 * @param logLevel the log level of the message
 * @param pattern a glob-style [pattern][glib-Glob-style-pattern-matching]
 */
export function testExpectMessage(logDomain: string | null, logLevel: LogLevelFlags, pattern: string): void
/**
 * Indicates that a test failed. This function can be called
 * multiple times from the same test. You can use this function
 * if your test failed in a recoverable way.
 * 
 * Do not use this function if the failure of a test could cause
 * other tests to malfunction.
 * 
 * Calling this function will not stop the test from running, you
 * need to return from the test function yourself. So you can
 * produce additional diagnostic messages or even continue running
 * the test.
 * 
 * If not called from inside a test, this function does nothing.
 * 
 * Note that unlike g_test_skip() and g_test_incomplete(), this
 * function does not log a message alongside the test failure.
 * If details of the test failure are available, either log them with
 * g_test_message() before g_test_fail(), or use g_test_fail_printf()
 * instead.
 */
export function testFail(): void
/**
 * Returns whether a test has already failed. This will
 * be the case when g_test_fail(), g_test_incomplete()
 * or g_test_skip() have been called, but also if an
 * assertion has failed.
 * 
 * This can be useful to return early from a test if
 * continuing after a failed assertion might be harmful.
 * 
 * The return value of this function is only meaningful
 * if it is called from inside a test function.
 */
export function testFailed(): boolean
/**
 * Gets the pathname of the directory containing test files of the type
 * specified by `file_type`.
 * 
 * This is approximately the same as calling g_test_build_filename("."),
 * but you don't need to free the return value.
 * @param fileType the type of file (built vs. distributed)
 */
export function testGetDir(fileType: TestFileType): string
/**
 * Gets the test path for the test currently being run.
 * 
 * In essence, it will be the same string passed as the first argument to
 * e.g. g_test_add() when the test was added.
 * 
 * This function returns a valid string only within a test function.
 */
export function testGetPath(): string
/**
 * Indicates that a test failed because of some incomplete
 * functionality. This function can be called multiple times
 * from the same test.
 * 
 * Calling this function will not stop the test from running, you
 * need to return from the test function yourself. So you can
 * produce additional diagnostic messages or even continue running
 * the test.
 * 
 * If not called from inside a test, this function does nothing.
 * @param msg explanation
 */
export function testIncomplete(msg: string | null): void
export function testLogTypeName(logType: TestLogType): string
/**
 * This function enqueus a callback `destroy_func` to be executed
 * during the next test case teardown phase. This is most useful
 * to auto destruct allocated test resources at the end of a test run.
 * Resources are released in reverse queue order, that means enqueueing
 * callback A before callback B will cause B() to be called before
 * A() during teardown.
 * @param destroyFunc Destroy callback for teardown phase.
 * @param destroyData Destroy callback data.
 */
export function testQueueDestroy(destroyFunc: DestroyNotify, destroyData: object | null): void
/**
 * Enqueue a pointer to be released with g_free() during the next
 * teardown phase. This is equivalent to calling g_test_queue_destroy()
 * with a destroy callback of g_free().
 * @param gfreePointer the pointer to be stored.
 */
export function testQueueFree(gfreePointer: object | null): void
/**
 * Get a reproducible random floating point number,
 * see g_test_rand_int() for details on test case random numbers.
 */
export function testRandDouble(): number
/**
 * Get a reproducible random floating pointer number out of a specified range,
 * see g_test_rand_int() for details on test case random numbers.
 * @param rangeStart the minimum value returned by this function
 * @param rangeEnd the minimum value not returned by this function
 */
export function testRandDoubleRange(rangeStart: number, rangeEnd: number): number
/**
 * Get a reproducible random integer number.
 * 
 * The random numbers generated by the g_test_rand_*() family of functions
 * change with every new test program start, unless the --seed option is
 * given when starting test programs.
 * 
 * For individual test cases however, the random number generator is
 * reseeded, to avoid dependencies between tests and to make --seed
 * effective for all test cases.
 */
export function testRandInt(): number
/**
 * Get a reproducible random integer number out of a specified range,
 * see g_test_rand_int() for details on test case random numbers.
 * @param begin the minimum value returned by this function
 * @param end the smallest value not to be returned by this function
 */
export function testRandIntRange(begin: number, end: number): number
/**
 * Runs all tests under the toplevel suite which can be retrieved
 * with g_test_get_root(). Similar to g_test_run_suite(), the test
 * cases to be run are filtered according to test path arguments
 * (`-p testpath` and `-s testpath`) as parsed by g_test_init().
 * g_test_run_suite() or g_test_run() may only be called once in a
 * program.
 * 
 * In general, the tests and sub-suites within each suite are run in
 * the order in which they are defined. However, note that prior to
 * GLib 2.36, there was a bug in the `g_test_add_*`
 * functions which caused them to create multiple suites with the same
 * name, meaning that if you created tests "/foo/simple",
 * "/bar/simple", and "/foo/using-bar" in that order, they would get
 * run in that order (since g_test_run() would run the first "/foo"
 * suite, then the "/bar" suite, then the second "/foo" suite). As of
 * 2.36, this bug is fixed, and adding the tests in that order would
 * result in a running order of "/foo/simple", "/foo/using-bar",
 * "/bar/simple". If this new ordering is sub-optimal (because it puts
 * more-complicated tests before simpler ones, making it harder to
 * figure out exactly what has failed), you can fix it by changing the
 * test paths to group tests by suite in a way that will result in the
 * desired running order. Eg, "/simple/foo", "/simple/bar",
 * "/complex/foo-using-bar".
 * 
 * However, you should never make the actual result of a test depend
 * on the order that tests are run in. If you need to ensure that some
 * particular code runs before or after a given test case, use
 * g_test_add(), which lets you specify setup and teardown functions.
 * 
 * If all tests are skipped or marked as incomplete (expected failures),
 * this function will return 0 if producing TAP output, or 77 (treated
 * as "skip test" by Automake) otherwise.
 */
export function testRun(): number
/**
 * Execute the tests within `suite` and all nested #GTestSuites.
 * The test suites to be executed are filtered according to
 * test path arguments (`-p testpath` and `-s testpath`) as parsed by
 * g_test_init(). See the g_test_run() documentation for more
 * information on the order that tests are run in.
 * 
 * g_test_run_suite() or g_test_run() may only be called once
 * in a program.
 * @param suite a #GTestSuite
 */
export function testRunSuite(suite: TestSuite): number
/**
 * Changes the behaviour of the various `g_assert_*()` macros,
 * g_test_assert_expected_messages() and the various
 * `g_test_trap_assert_*()` macros to not abort to program, but instead
 * call g_test_fail() and continue. (This also changes the behavior of
 * g_test_fail() so that it will not cause the test program to abort
 * after completing the failed test.)
 * 
 * Note that the g_assert_not_reached() and g_assert() macros are not
 * affected by this.
 * 
 * This function can only be called after g_test_init().
 */
export function testSetNonfatalAssertions(): void
/**
 * Indicates that a test was skipped.
 * 
 * Calling this function will not stop the test from running, you
 * need to return from the test function yourself. So you can
 * produce additional diagnostic messages or even continue running
 * the test.
 * 
 * If not called from inside a test, this function does nothing.
 * @param msg explanation
 */
export function testSkip(msg: string | null): void
/**
 * Returns %TRUE (after g_test_init() has been called) if the test
 * program is running under g_test_trap_subprocess().
 */
export function testSubprocess(): boolean
/**
 * Set the summary for a test, which describes what the test checks, and how it
 * goes about checking it. This may be included in test report output, and is
 * useful documentation for anyone reading the source code or modifying a test
 * in future. It must be a single line.
 * 
 * This should be called at the top of a test function.
 * 
 * For example:
 * 
 * ```c
 * static void
 * test_array_sort (void)
 * {
 *   g_test_summary ("Test my_array_sort() sorts the array correctly and stably, "
 *                   "including testing zero length and one-element arrays.");
 * 
 *   …
 * }
 * ```
 * 
 * @param summary One or two sentences summarising what the test checks, and how it    checks it.
 */
export function testSummary(summary: string): void
/**
 * Get the number of seconds since the last start of the timer with
 * g_test_timer_start().
 */
export function testTimerElapsed(): number
/**
 * Report the last result of g_test_timer_elapsed().
 */
export function testTimerLast(): number
/**
 * Start a timing test. Call g_test_timer_elapsed() when the task is supposed
 * to be done. Call this function again to restart the timer.
 */
export function testTimerStart(): void
export function testTrapAssertions(domain: string, file: string, line: number, func: string, assertionFlags: number, pattern: string): void
/**
 * Fork the current test program to execute a test case that might
 * not return or that might abort.
 * 
 * If `usec_timeout` is non-0, the forked test case is aborted and
 * considered failing if its run time exceeds it.
 * 
 * The forking behavior can be configured with the #GTestTrapFlags flags.
 * 
 * In the following example, the test code forks, the forked child
 * process produces some sample output and exits successfully.
 * The forking parent process then asserts successful child program
 * termination and validates child program outputs.
 * 
 * 
 * ```c
 *   static void
 *   test_fork_patterns (void)
 *   {
 *     if (g_test_trap_fork (0, G_TEST_TRAP_SILENCE_STDOUT | G_TEST_TRAP_SILENCE_STDERR))
 *       {
 *         g_print ("some stdout text: somagic17\n");
 *         g_printerr ("some stderr text: semagic43\n");
 *         exit (0); // successful test run
 *       }
 *     g_test_trap_assert_passed ();
 *     g_test_trap_assert_stdout ("*somagic17*");
 *     g_test_trap_assert_stderr ("*semagic43*");
 *   }
 * ```
 * 
 * @param usecTimeout Timeout for the forked test in micro seconds.
 * @param testTrapFlags Flags to modify forking behaviour.
 */
export function testTrapFork(usecTimeout: number, testTrapFlags: TestTrapFlags): boolean
/**
 * Check the result of the last g_test_trap_subprocess() call.
 */
export function testTrapHasPassed(): boolean
/**
 * Check the result of the last g_test_trap_subprocess() call.
 */
export function testTrapReachedTimeout(): boolean
/**
 * Respawns the test program to run only `test_path` in a subprocess.
 * This can be used for a test case that might not return, or that
 * might abort.
 * 
 * If `test_path` is %NULL then the same test is re-run in a subprocess.
 * You can use g_test_subprocess() to determine whether the test is in
 * a subprocess or not.
 * 
 * `test_path` can also be the name of the parent test, followed by
 * "`/subprocess/`" and then a name for the specific subtest (or just
 * ending with "`/subprocess`" if the test only has one child test);
 * tests with names of this form will automatically be skipped in the
 * parent process.
 * 
 * If `usec_timeout` is non-0, the test subprocess is aborted and
 * considered failing if its run time exceeds it.
 * 
 * The subprocess behavior can be configured with the
 * #GTestSubprocessFlags flags.
 * 
 * You can use methods such as g_test_trap_assert_passed(),
 * g_test_trap_assert_failed(), and g_test_trap_assert_stderr() to
 * check the results of the subprocess. (But note that
 * g_test_trap_assert_stdout() and g_test_trap_assert_stderr()
 * cannot be used if `test_flags` specifies that the child should
 * inherit the parent stdout/stderr.)
 * 
 * If your `main ()` needs to behave differently in
 * the subprocess, you can call g_test_subprocess() (after calling
 * g_test_init()) to see whether you are in a subprocess.
 * 
 * The following example tests that calling
 * `my_object_new(1000000)` will abort with an error
 * message.
 * 
 * 
 * ```c
 *   static void
 *   test_create_large_object (void)
 *   {
 *     if (g_test_subprocess ())
 *       {
 *         my_object_new (1000000);
 *         return;
 *       }
 * 
 *     // Reruns this same test in a subprocess
 *     g_test_trap_subprocess (NULL, 0, 0);
 *     g_test_trap_assert_failed ();
 *     g_test_trap_assert_stderr ("*ERROR*too large*");
 *   }
 * 
 *   int
 *   main (int argc, char **argv)
 *   {
 *     g_test_init (&argc, &argv, NULL);
 * 
 *     g_test_add_func ("/myobject/create_large_object",
 *                      test_create_large_object);
 *     return g_test_run ();
 *   }
 * ```
 * 
 * @param testPath Test to run in a subprocess
 * @param usecTimeout Timeout for the subprocess test in micro seconds.
 * @param testFlags Flags to modify subprocess behaviour.
 */
export function testTrapSubprocess(testPath: string | null, usecTimeout: number, testFlags: TestSubprocessFlags): void
export function threadErrorQuark(): Quark
/**
 * Terminates the current thread.
 * 
 * If another thread is waiting for us using g_thread_join() then the
 * waiting thread will be woken up and get `retval` as the return value
 * of g_thread_join().
 * 
 * Calling g_thread_exit() with a parameter `retval` is equivalent to
 * returning `retval` from the function `func,` as given to g_thread_new().
 * 
 * You must only call g_thread_exit() from a thread that you created
 * yourself with g_thread_new() or related APIs. You must not call
 * this function from a thread created with another threading library
 * or or from within a #GThreadPool.
 * @param retval the return value of this thread
 */
export function threadExit(retval: object | null): void
/**
 * This function will return the maximum `interval` that a
 * thread will wait in the thread pool for new tasks before
 * being stopped.
 * 
 * If this function returns 0, threads waiting in the thread
 * pool for new work are not stopped.
 */
export function threadPoolGetMaxIdleTime(): number
/**
 * Returns the maximal allowed number of unused threads.
 */
export function threadPoolGetMaxUnusedThreads(): number
/**
 * Returns the number of currently unused threads.
 */
export function threadPoolGetNumUnusedThreads(): number
/**
 * This function will set the maximum `interval` that a thread
 * waiting in the pool for new tasks can be idle for before
 * being stopped. This function is similar to calling
 * g_thread_pool_stop_unused_threads() on a regular timeout,
 * except this is done on a per thread basis.
 * 
 * By setting `interval` to 0, idle threads will not be stopped.
 * 
 * The default value is 15000 (15 seconds).
 * @param interval the maximum `interval` (in milliseconds)     a thread can be idle
 */
export function threadPoolSetMaxIdleTime(interval: number): void
/**
 * Sets the maximal number of unused threads to `max_threads`.
 * If `max_threads` is -1, no limit is imposed on the number
 * of unused threads.
 * 
 * The default value is 2.
 * @param maxThreads maximal number of unused threads
 */
export function threadPoolSetMaxUnusedThreads(maxThreads: number): void
/**
 * Stops all currently unused threads. This does not change the
 * maximal number of unused threads. This function can be used to
 * regularly stop all unused threads e.g. from g_timeout_add().
 */
export function threadPoolStopUnusedThreads(): void
/**
 * This function returns the #GThread corresponding to the
 * current thread. Note that this function does not increase
 * the reference count of the returned struct.
 * 
 * This function will return a #GThread even for threads that
 * were not created by GLib (i.e. those created by other threading
 * APIs). This may be useful for thread identification purposes
 * (i.e. comparisons) but you must not use GLib functions (such
 * as g_thread_join()) on these threads.
 */
export function threadSelf(): Thread
/**
 * Causes the calling thread to voluntarily relinquish the CPU, so
 * that other threads can run.
 * 
 * This function is often used as a method to make busy wait less evil.
 */
export function threadYield(): void
/**
 * Converts a string containing an ISO 8601 encoded date and time
 * to a #GTimeVal and puts it into `time_`.
 * 
 * `iso_date` must include year, month, day, hours, minutes, and
 * seconds. It can optionally include fractions of a second and a time
 * zone indicator. (In the absence of any time zone indication, the
 * timestamp is assumed to be in local time.)
 * 
 * Any leading or trailing space in `iso_date` is ignored.
 * 
 * This function was deprecated, along with #GTimeVal itself, in GLib 2.62.
 * Equivalent functionality is available using code like:
 * |[
 * GDateTime *dt = g_date_time_new_from_iso8601 (iso8601_string, NULL);
 * gint64 time_val = g_date_time_to_unix (dt);
 * g_date_time_unref (dt);
 * ```
 * 
 * @param isoDate an ISO 8601 encoded date string
 */
export function timeValFromIso8601(isoDate: string): [ /* returnType */ boolean, /* time */ TimeVal ]
/**
 * Sets a function to be called at regular intervals, with the given
 * priority.  The function is called repeatedly until it returns
 * %FALSE, at which point the timeout is automatically destroyed and
 * the function will not be called again.  The `notify` function is
 * called when the timeout is destroyed.  The first call to the
 * function will be at the end of the first `interval`.
 * 
 * Note that timeout functions may be delayed, due to the processing of other
 * event sources. Thus they should not be relied on for precise timing.
 * After each call to the timeout function, the time of the next
 * timeout is recalculated based on the current time and the given interval
 * (it does not try to 'catch up' time lost in delays).
 * 
 * See [memory management of sources][mainloop-memory-management] for details
 * on how to handle the return value and memory management of `data`.
 * 
 * This internally creates a main loop source using g_timeout_source_new()
 * and attaches it to the global #GMainContext using g_source_attach(), so
 * the callback will be invoked in whichever thread is running that main
 * context. You can do these steps manually if you need greater control or to
 * use a custom main context.
 * 
 * The interval given is in terms of monotonic time, not wall clock time.
 * See g_get_monotonic_time().
 * @param priority the priority of the timeout source. Typically this will be in   the range between %G_PRIORITY_DEFAULT and %G_PRIORITY_HIGH.
 * @param interval the time between calls to the function, in milliseconds   (1/1000ths of a second)
 * @param function_ function to call
 */
export function timeoutAdd(priority: number, interval: number, function_: SourceFunc): number
/**
 * Sets a function to be called at regular intervals, with `priority`.
 * 
 * The function is called repeatedly until it returns %G_SOURCE_REMOVE
 * or %FALSE, at which point the timeout is automatically destroyed and
 * the function will not be called again.
 * 
 * Unlike g_timeout_add(), this function operates at whole second granularity.
 * The initial starting point of the timer is determined by the implementation
 * and the implementation is expected to group multiple timers together so that
 * they fire all at the same time. To allow this grouping, the `interval` to the
 * first timer is rounded and can deviate up to one second from the specified
 * interval. Subsequent timer iterations will generally run at the specified
 * interval.
 * 
 * Note that timeout functions may be delayed, due to the processing of other
 * event sources. Thus they should not be relied on for precise timing.
 * After each call to the timeout function, the time of the next
 * timeout is recalculated based on the current time and the given `interval`
 * 
 * See [memory management of sources][mainloop-memory-management] for details
 * on how to handle the return value and memory management of `data`.
 * 
 * If you want timing more precise than whole seconds, use g_timeout_add()
 * instead.
 * 
 * The grouping of timers to fire at the same time results in a more power
 * and CPU efficient behavior so if your timer is in multiples of seconds
 * and you don't require the first timer exactly one second from now, the
 * use of g_timeout_add_seconds() is preferred over g_timeout_add().
 * 
 * This internally creates a main loop source using
 * g_timeout_source_new_seconds() and attaches it to the main loop context
 * using g_source_attach(). You can do these steps manually if you need
 * greater control.
 * 
 * It is safe to call this function from any thread.
 * 
 * The interval given is in terms of monotonic time, not wall clock
 * time.  See g_get_monotonic_time().
 * @param priority the priority of the timeout source. Typically this will be in   the range between %G_PRIORITY_DEFAULT and %G_PRIORITY_HIGH.
 * @param interval the time between calls to the function, in seconds
 * @param function_ function to call
 */
export function timeoutAddSeconds(priority: number, interval: number, function_: SourceFunc): number
/**
 * Creates a new timeout source.
 * 
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * 
 * The interval given is in terms of monotonic time, not wall clock
 * time.  See g_get_monotonic_time().
 * @param interval the timeout interval in milliseconds.
 */
export function timeoutSourceNew(interval: number): Source
/**
 * Creates a new timeout source.
 * 
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * 
 * The scheduling granularity/accuracy of this timeout source will be
 * in seconds.
 * 
 * The interval given is in terms of monotonic time, not wall clock time.
 * See g_get_monotonic_time().
 * @param interval the timeout interval in seconds
 */
export function timeoutSourceNewSeconds(interval: number): Source
/**
 * Returns the height of a #GTrashStack.
 * 
 * Note that execution of this function is of O(N) complexity
 * where N denotes the number of items on the stack.
 * @param stackP a #GTrashStack
 */
export function trashStackHeight(stackP: TrashStack): number
/**
 * Returns the element at the top of a #GTrashStack
 * which may be %NULL.
 * @param stackP a #GTrashStack
 */
export function trashStackPeek(stackP: TrashStack): object | null
/**
 * Pops a piece of memory off a #GTrashStack.
 * @param stackP a #GTrashStack
 */
export function trashStackPop(stackP: TrashStack): object | null
/**
 * Pushes a piece of memory onto a #GTrashStack.
 * @param stackP a #GTrashStack
 * @param dataP the piece of memory to push on the stack
 */
export function trashStackPush(stackP: TrashStack, dataP: object): void
/**
 * Attempts to allocate `n_bytes,` and returns %NULL on failure.
 * Contrast with g_malloc(), which aborts the program on failure.
 * @param nBytes number of bytes to allocate.
 */
export function tryMalloc(nBytes: number): object | null
/**
 * Attempts to allocate `n_bytes,` initialized to 0's, and returns %NULL on
 * failure. Contrast with g_malloc0(), which aborts the program on failure.
 * @param nBytes number of bytes to allocate
 */
export function tryMalloc0(nBytes: number): object | null
/**
 * This function is similar to g_try_malloc0(), allocating (`n_blocks` * `n_block_bytes)` bytes,
 * but care is taken to detect possible overflow during multiplication.
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 */
export function tryMalloc0N(nBlocks: number, nBlockBytes: number): object | null
/**
 * This function is similar to g_try_malloc(), allocating (`n_blocks` * `n_block_bytes)` bytes,
 * but care is taken to detect possible overflow during multiplication.
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 */
export function tryMallocN(nBlocks: number, nBlockBytes: number): object | null
/**
 * Attempts to realloc `mem` to a new size, `n_bytes,` and returns %NULL
 * on failure. Contrast with g_realloc(), which aborts the program
 * on failure.
 * 
 * If `mem` is %NULL, behaves the same as g_try_malloc().
 * @param mem previously-allocated memory, or %NULL.
 * @param nBytes number of bytes to allocate.
 */
export function tryRealloc(mem: object | null, nBytes: number): object | null
/**
 * This function is similar to g_try_realloc(), allocating (`n_blocks` * `n_block_bytes)` bytes,
 * but care is taken to detect possible overflow during multiplication.
 * @param mem previously-allocated memory, or %NULL.
 * @param nBlocks the number of blocks to allocate
 * @param nBlockBytes the size of each block in bytes
 */
export function tryReallocN(mem: object | null, nBlocks: number, nBlockBytes: number): object | null
/**
 * Convert a string from UCS-4 to UTF-16. A 0 character will be
 * added to the result after the converted text.
 * @param str a UCS-4 encoded string
 * @param len the maximum length (number of characters) of `str` to use.     If `len` < 0, then the string is nul-terminated.
 */
export function ucs4ToUtf16(str: string, len: number): [ /* returnType */ number, /* itemsRead */ number, /* itemsWritten */ number ]
/**
 * Convert a string from a 32-bit fixed width representation as UCS-4.
 * to UTF-8. The result will be terminated with a 0 byte.
 * @param str a UCS-4 encoded string
 * @param len the maximum length (number of characters) of `str` to use.     If `len` < 0, then the string is nul-terminated.
 */
export function ucs4ToUtf8(str: string, len: number): [ /* returnType */ string, /* itemsRead */ number, /* itemsWritten */ number ]
/**
 * Determines the break type of `c`. `c` should be a Unicode character
 * (to derive a character from UTF-8 encoded text, use
 * g_utf8_get_char()). The break type is used to find word and line
 * breaks ("text boundaries"), Pango implements the Unicode boundary
 * resolution algorithms and normally you would use a function such
 * as pango_break() instead of caring about break types yourself.
 * @param c a Unicode character
 */
export function unicharBreakType(c: string): UnicodeBreakType
/**
 * Determines the canonical combining class of a Unicode character.
 * @param uc a Unicode character
 */
export function unicharCombiningClass(uc: string): number
/**
 * Performs a single composition step of the
 * Unicode canonical composition algorithm.
 * 
 * This function includes algorithmic Hangul Jamo composition,
 * but it is not exactly the inverse of g_unichar_decompose().
 * No composition can have either of `a` or `b` equal to zero.
 * To be precise, this function composes if and only if
 * there exists a Primary Composite P which is canonically
 * equivalent to the sequence <`a,``b>`.  See the Unicode
 * Standard for the definition of Primary Composite.
 * 
 * If `a` and `b` do not compose a new character, `ch` is set to zero.
 * 
 * See
 * [UAX#15](http://unicode.org/reports/tr15/)
 * for details.
 * @param a a Unicode character
 * @param b a Unicode character
 */
export function unicharCompose(a: string, b: string): [ /* returnType */ boolean, /* ch */ string ]
/**
 * Performs a single decomposition step of the
 * Unicode canonical decomposition algorithm.
 * 
 * This function does not include compatibility
 * decompositions. It does, however, include algorithmic
 * Hangul Jamo decomposition, as well as 'singleton'
 * decompositions which replace a character by a single
 * other character. In the case of singletons *`b` will
 * be set to zero.
 * 
 * If `ch` is not decomposable, *`a` is set to `ch` and *`b`
 * is set to zero.
 * 
 * Note that the way Unicode decomposition pairs are
 * defined, it is guaranteed that `b` would not decompose
 * further, but `a` may itself decompose.  To get the full
 * canonical decomposition for `ch,` one would need to
 * recursively call this function on `a`.  Or use
 * g_unichar_fully_decompose().
 * 
 * See
 * [UAX#15](http://unicode.org/reports/tr15/)
 * for details.
 * @param ch a Unicode character
 */
export function unicharDecompose(ch: string): [ /* returnType */ boolean, /* a */ string, /* b */ string ]
/**
 * Determines the numeric value of a character as a decimal
 * digit.
 * @param c a Unicode character
 */
export function unicharDigitValue(c: string): number
/**
 * Computes the canonical or compatibility decomposition of a
 * Unicode character.  For compatibility decomposition,
 * pass %TRUE for `compat;` for canonical decomposition
 * pass %FALSE for `compat`.
 * 
 * The decomposed sequence is placed in `result`.  Only up to
 * `result_len` characters are written into `result`.  The length
 * of the full decomposition (irrespective of `result_len)` is
 * returned by the function.  For canonical decomposition,
 * currently all decompositions are of length at most 4, but
 * this may change in the future (very unlikely though).
 * At any rate, Unicode does guarantee that a buffer of length
 * 18 is always enough for both compatibility and canonical
 * decompositions, so that is the size recommended. This is provided
 * as %G_UNICHAR_MAX_DECOMPOSITION_LENGTH.
 * 
 * See
 * [UAX#15](http://unicode.org/reports/tr15/)
 * for details.
 * @param ch a Unicode character.
 * @param compat whether perform canonical or compatibility decomposition
 * @param resultLen length of `result`
 */
export function unicharFullyDecompose(ch: string, compat: boolean, resultLen: number): [ /* returnType */ number, /* result */ string ]
/**
 * In Unicode, some characters are "mirrored". This means that their
 * images are mirrored horizontally in text that is laid out from right
 * to left. For instance, "(" would become its mirror image, ")", in
 * right-to-left text.
 * 
 * If `ch` has the Unicode mirrored property and there is another unicode
 * character that typically has a glyph that is the mirror image of `ch'`s
 * glyph and `mirrored_ch` is set, it puts that character in the address
 * pointed to by `mirrored_ch`.  Otherwise the original character is put.
 * @param ch a Unicode character
 * @param mirroredCh location to store the mirrored character
 */
export function unicharGetMirrorChar(ch: string, mirroredCh: string): boolean
/**
 * Looks up the #GUnicodeScript for a particular character (as defined
 * by Unicode Standard Annex \#24). No check is made for `ch` being a
 * valid Unicode character; if you pass in invalid character, the
 * result is undefined.
 * 
 * This function is equivalent to pango_script_for_unichar() and the
 * two are interchangeable.
 * @param ch a Unicode character
 */
export function unicharGetScript(ch: string): UnicodeScript
/**
 * Determines whether a character is alphanumeric.
 * Given some UTF-8 text, obtain a character value
 * with g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIsalnum(c: string): boolean
/**
 * Determines whether a character is alphabetic (i.e. a letter).
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIsalpha(c: string): boolean
/**
 * Determines whether a character is a control character.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIscntrl(c: string): boolean
/**
 * Determines if a given character is assigned in the Unicode
 * standard.
 * @param c a Unicode character
 */
export function unicharIsdefined(c: string): boolean
/**
 * Determines whether a character is numeric (i.e. a digit).  This
 * covers ASCII 0-9 and also digits in other languages/scripts.  Given
 * some UTF-8 text, obtain a character value with g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIsdigit(c: string): boolean
/**
 * Determines whether a character is printable and not a space
 * (returns %FALSE for control characters, format characters, and
 * spaces). g_unichar_isprint() is similar, but returns %TRUE for
 * spaces. Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIsgraph(c: string): boolean
/**
 * Determines whether a character is a lowercase letter.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIslower(c: string): boolean
/**
 * Determines whether a character is a mark (non-spacing mark,
 * combining mark, or enclosing mark in Unicode speak).
 * Given some UTF-8 text, obtain a character value
 * with g_utf8_get_char().
 * 
 * Note: in most cases where isalpha characters are allowed,
 * ismark characters should be allowed to as they are essential
 * for writing most European languages as well as many non-Latin
 * scripts.
 * @param c a Unicode character
 */
export function unicharIsmark(c: string): boolean
/**
 * Determines whether a character is printable.
 * Unlike g_unichar_isgraph(), returns %TRUE for spaces.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIsprint(c: string): boolean
/**
 * Determines whether a character is punctuation or a symbol.
 * Given some UTF-8 text, obtain a character value with
 * g_utf8_get_char().
 * @param c a Unicode character
 */
export function unicharIspunct(c: string): boolean
/**
 * Determines whether a character is a space, tab, or line separator
 * (newline, carriage return, etc.).  Given some UTF-8 text, obtain a
 * character value with g_utf8_get_char().
 * 
 * (Note: don't use this to do word breaking; you have to use
 * Pango or equivalent to get word breaking right, the algorithm
 * is fairly complex.)
 * @param c a Unicode character
 */
export function unicharIsspace(c: string): boolean
/**
 * Determines if a character is titlecase. Some characters in
 * Unicode which are composites, such as the DZ digraph
 * have three case variants instead of just two. The titlecase
 * form is used at the beginning of a word where only the
 * first letter is capitalized. The titlecase form of the DZ
 * digraph is U+01F2 LATIN CAPITAL LETTTER D WITH SMALL LETTER Z.
 * @param c a Unicode character
 */
export function unicharIstitle(c: string): boolean
/**
 * Determines if a character is uppercase.
 * @param c a Unicode character
 */
export function unicharIsupper(c: string): boolean
/**
 * Determines if a character is typically rendered in a double-width
 * cell.
 * @param c a Unicode character
 */
export function unicharIswide(c: string): boolean
/**
 * Determines if a character is typically rendered in a double-width
 * cell under legacy East Asian locales.  If a character is wide according to
 * g_unichar_iswide(), then it is also reported wide with this function, but
 * the converse is not necessarily true. See the
 * [Unicode Standard Annex #11](http://www.unicode.org/reports/tr11/)
 * for details.
 * 
 * If a character passes the g_unichar_iswide() test then it will also pass
 * this test, but not the other way around.  Note that some characters may
 * pass both this test and g_unichar_iszerowidth().
 * @param c a Unicode character
 */
export function unicharIswideCjk(c: string): boolean
/**
 * Determines if a character is a hexadecimal digit.
 * @param c a Unicode character.
 */
export function unicharIsxdigit(c: string): boolean
/**
 * Determines if a given character typically takes zero width when rendered.
 * The return value is %TRUE for all non-spacing and enclosing marks
 * (e.g., combining accents), format characters, zero-width
 * space, but not U+00AD SOFT HYPHEN.
 * 
 * A typical use of this function is with one of g_unichar_iswide() or
 * g_unichar_iswide_cjk() to determine the number of cells a string occupies
 * when displayed on a grid display (terminals).  However, note that not all
 * terminals support zero-width rendering of zero-width marks.
 * @param c a Unicode character
 */
export function unicharIszerowidth(c: string): boolean
/**
 * Converts a single character to UTF-8.
 * @param c a Unicode character code
 */
export function unicharToUtf8(c: string): [ /* returnType */ number, /* outbuf */ string ]
/**
 * Converts a character to lower case.
 * @param c a Unicode character.
 */
export function unicharTolower(c: string): string
/**
 * Converts a character to the titlecase.
 * @param c a Unicode character
 */
export function unicharTotitle(c: string): string
/**
 * Converts a character to uppercase.
 * @param c a Unicode character
 */
export function unicharToupper(c: string): string
/**
 * Classifies a Unicode character by type.
 * @param c a Unicode character
 */
export function unicharType(c: string): UnicodeType
/**
 * Checks whether `ch` is a valid Unicode character. Some possible
 * integer values of `ch` will not be valid. 0 is considered a valid
 * character, though it's normally a string terminator.
 * @param ch a Unicode character
 */
export function unicharValidate(ch: string): boolean
/**
 * Determines the numeric value of a character as a hexadecimal
 * digit.
 * @param c a Unicode character
 */
export function unicharXdigitValue(c: string): number
/**
 * Computes the canonical decomposition of a Unicode character.
 * @param ch a Unicode character.
 * @param resultLen location to store the length of the return value.
 */
export function unicodeCanonicalDecomposition(ch: string, resultLen: number): string
/**
 * Computes the canonical ordering of a string in-place.
 * This rearranges decomposed characters in the string
 * according to their combining classes.  See the Unicode
 * manual for more information.
 * @param string a UCS-4 encoded string.
 * @param len the maximum length of `string` to use.
 */
export function unicodeCanonicalOrdering(string: string, len: number): void
/**
 * Looks up the Unicode script for `iso1`5924.  ISO 15924 assigns four-letter
 * codes to scripts.  For example, the code for Arabic is 'Arab'.
 * This function accepts four letter codes encoded as a `guint3`2 in a
 * big-endian fashion.  That is, the code expected for Arabic is
 * 0x41726162 (0x41 is ASCII code for 'A', 0x72 is ASCII code for 'r', etc).
 * 
 * See
 * [Codes for the representation of names of scripts](http://unicode.org/iso15924/codelists.html)
 * for details.
 * @param iso15924 a Unicode script
 */
export function unicodeScriptFromIso15924(iso15924: number): UnicodeScript
/**
 * Looks up the ISO 15924 code for `script`.  ISO 15924 assigns four-letter
 * codes to scripts.  For example, the code for Arabic is 'Arab'.  The
 * four letter codes are encoded as a `guint3`2 by this function in a
 * big-endian fashion.  That is, the code returned for Arabic is
 * 0x41726162 (0x41 is ASCII code for 'A', 0x72 is ASCII code for 'r', etc).
 * 
 * See
 * [Codes for the representation of names of scripts](http://unicode.org/iso15924/codelists.html)
 * for details.
 * @param script a Unicode script
 */
export function unicodeScriptToIso15924(script: UnicodeScript): number
export function unixErrorQuark(): Quark
/**
 * Sets a function to be called when the IO condition, as specified by
 * `condition` becomes true for `fd`.
 * 
 * This is the same as g_unix_fd_add(), except that it allows you to
 * specify a non-default priority and a provide a #GDestroyNotify for
 * `user_data`.
 * @param priority the priority of the source
 * @param fd a file descriptor
 * @param condition IO conditions to watch for on `fd`
 * @param function_ a #GUnixFDSourceFunc
 */
export function unixFdAddFull(priority: number, fd: number, condition: IOCondition, function_: UnixFDSourceFunc): number
/**
 * Creates a #GSource to watch for a particular IO condition on a file
 * descriptor.
 * 
 * The source will never close the fd -- you must do it yourself.
 * @param fd a file descriptor
 * @param condition IO conditions to watch for on `fd`
 */
export function unixFdSourceNew(fd: number, condition: IOCondition): Source
/**
 * Get the `passwd` file entry for the given `user_name` using `getpwnam_r()`.
 * This can fail if the given `user_name` doesn’t exist.
 * 
 * The returned `struct passwd` has been allocated using g_malloc() and should
 * be freed using g_free(). The strings referenced by the returned struct are
 * included in the same allocation, so are valid until the `struct passwd` is
 * freed.
 * 
 * This function is safe to call from multiple threads concurrently.
 * 
 * You will need to include `pwd.h` to get the definition of `struct passwd`.
 * @param userName the username to get the passwd file entry for
 */
export function unixGetPasswdEntry(userName: string): object | null
/**
 * Similar to the UNIX pipe() call, but on modern systems like Linux
 * uses the pipe2() system call, which atomically creates a pipe with
 * the configured flags. The only supported flag currently is
 * %FD_CLOEXEC. If for example you want to configure %O_NONBLOCK, that
 * must still be done separately with fcntl().
 * 
 * This function does not take %O_CLOEXEC, it takes %FD_CLOEXEC as if
 * for fcntl(); these are different on Linux/glibc.
 * @param fds Array of two integers
 * @param flags Bitfield of file descriptor flags, as for fcntl()
 */
export function unixOpenPipe(fds: number, flags: number): boolean
/**
 * Control the non-blocking state of the given file descriptor,
 * according to `nonblock`. On most systems this uses %O_NONBLOCK, but
 * on some older ones may use %O_NDELAY.
 * @param fd A file descriptor
 * @param nonblock If %TRUE, set the descriptor to be non-blocking
 */
export function unixSetFdNonblocking(fd: number, nonblock: boolean): boolean
/**
 * A convenience function for g_unix_signal_source_new(), which
 * attaches to the default #GMainContext.  You can remove the watch
 * using g_source_remove().
 * @param priority the priority of the signal source. Typically this will be in            the range between %G_PRIORITY_DEFAULT and %G_PRIORITY_HIGH.
 * @param signum Signal number
 * @param handler Callback
 */
export function unixSignalAdd(priority: number, signum: number, handler: SourceFunc): number
/**
 * Create a #GSource that will be dispatched upon delivery of the UNIX
 * signal `signum`.  In GLib versions before 2.36, only `SIGHUP`, `SIGINT`,
 * `SIGTERM` can be monitored.  In GLib 2.36, `SIGUSR1` and `SIGUSR2`
 * were added. In GLib 2.54, `SIGWINCH` was added.
 * 
 * Note that unlike the UNIX default, all sources which have created a
 * watch will be dispatched, regardless of which underlying thread
 * invoked g_unix_signal_source_new().
 * 
 * For example, an effective use of this function is to handle `SIGTERM`
 * cleanly; flushing any outstanding files, and then calling
 * g_main_loop_quit ().  It is not safe to do any of this a regular
 * UNIX signal handler; your handler may be invoked while malloc() or
 * another library function is running, causing reentrancy if you
 * attempt to use it from the handler.  None of the GLib/GObject API
 * is safe against this kind of reentrancy.
 * 
 * The interaction of this source when combined with native UNIX
 * functions like sigprocmask() is not defined.
 * 
 * The source will not initially be associated with any #GMainContext
 * and must be added to one with g_source_attach() before it will be
 * executed.
 * @param signum A signal number
 */
export function unixSignalSourceNew(signum: number): Source
/**
 * A wrapper for the POSIX unlink() function. The unlink() function
 * deletes a name from the filesystem. If this was the last link to the
 * file and no processes have it opened, the diskspace occupied by the
 * file is freed.
 * 
 * See your C library manual for more details about unlink(). Note
 * that on Windows, it is in general not possible to delete files that
 * are open to some process, or mapped into memory.
 * @param filename a pathname in the GLib file name encoding     (UTF-8 on Windows)
 */
export function unlink(filename: string): number
/**
 * Removes an environment variable from the environment.
 * 
 * Note that on some systems, when variables are overwritten, the
 * memory used for the previous variables and its value isn't reclaimed.
 * 
 * You should be mindful of the fact that environment variable handling
 * in UNIX is not thread-safe, and your program may crash if one thread
 * calls g_unsetenv() while another thread is calling getenv(). (And note
 * that many functions, such as gettext(), call getenv() internally.) This
 * function is only safe to use at the very start of your program, before
 * creating any other threads (or creating objects that create worker
 * threads of their own).
 * 
 * If you need to set up the environment for a child process, you can
 * use g_get_environ() to get an environment array, modify that with
 * g_environ_setenv() and g_environ_unsetenv(), and then pass that
 * array directly to execvpe(), g_spawn_async(), or the like.
 * @param variable the environment variable to remove, must     not contain '='
 */
export function unsetenv(variable: string): void
/**
 * Creates a new #GUri from the given components according to `flags`.
 * 
 * See also g_uri_build_with_user(), which allows specifying the
 * components of the "userinfo" separately.
 * @param flags flags describing how to build the #GUri
 * @param scheme the URI scheme
 * @param userinfo the userinfo component, or %NULL
 * @param host the host component, or %NULL
 * @param port the port, or `-1`
 * @param path the path component
 * @param query the query component, or %NULL
 * @param fragment the fragment, or %NULL
 */
export function uriBuild(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): Uri
/**
 * Creates a new #GUri from the given components according to `flags`
 * (%G_URI_FLAGS_HAS_PASSWORD is added unconditionally). The `flags` must be
 * coherent with the passed values, in particular use `%`-encoded values with
 * %G_URI_FLAGS_ENCODED.
 * 
 * In contrast to g_uri_build(), this allows specifying the components
 * of the ‘userinfo’ field separately. Note that `user` must be non-%NULL
 * if either `password` or `auth_params` is non-%NULL.
 * @param flags flags describing how to build the #GUri
 * @param scheme the URI scheme
 * @param user the user component of the userinfo, or %NULL
 * @param password the password component of the userinfo, or %NULL
 * @param authParams the auth params of the userinfo, or %NULL
 * @param host the host component, or %NULL
 * @param port the port, or `-1`
 * @param path the path component
 * @param query the query component, or %NULL
 * @param fragment the fragment, or %NULL
 */
export function uriBuildWithUser(flags: UriFlags, scheme: string, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): Uri
export function uriErrorQuark(): Quark
/**
 * Escapes arbitrary data for use in a URI.
 * 
 * Normally all characters that are not ‘unreserved’ (i.e. ASCII
 * alphanumerical characters plus dash, dot, underscore and tilde) are
 * escaped. But if you specify characters in `reserved_chars_allowed`
 * they are not escaped. This is useful for the ‘reserved’ characters
 * in the URI specification, since those are allowed unescaped in some
 * portions of a URI.
 * 
 * Though technically incorrect, this will also allow escaping nul
 * bytes as `%``00`.
 * @param unescaped the unescaped input data.
 * @param reservedCharsAllowed a string of reserved   characters that are allowed to be used, or %NULL.
 */
export function uriEscapeBytes(unescaped: Uint8Array, reservedCharsAllowed: string | null): string
/**
 * Escapes a string for use in a URI.
 * 
 * Normally all characters that are not "unreserved" (i.e. ASCII
 * alphanumerical characters plus dash, dot, underscore and tilde) are
 * escaped. But if you specify characters in `reserved_chars_allowed`
 * they are not escaped. This is useful for the "reserved" characters
 * in the URI specification, since those are allowed unescaped in some
 * portions of a URI.
 * @param unescaped the unescaped input string.
 * @param reservedCharsAllowed a string of reserved   characters that are allowed to be used, or %NULL.
 * @param allowUtf8 %TRUE if the result can include UTF-8 characters.
 */
export function uriEscapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string
/**
 * Parses `uri_string` according to `flags,` to determine whether it is a valid
 * [absolute URI][relative-absolute-uris], i.e. it does not need to be resolved
 * relative to another URI using g_uri_parse_relative().
 * 
 * If it’s not a valid URI, an error is returned explaining how it’s invalid.
 * 
 * See g_uri_split(), and the definition of #GUriFlags, for more
 * information on the effect of `flags`.
 * @param uriString a string containing an absolute URI
 * @param flags flags for parsing `uri_string`
 */
export function uriIsValid(uriString: string, flags: UriFlags): boolean
/**
 * Joins the given components together according to `flags` to create
 * an absolute URI string. `path` may not be %NULL (though it may be the empty
 * string).
 * 
 * When `host` is present, `path` must either be empty or begin with a slash (`/`)
 * character. When `host` is not present, `path` cannot begin with two slash
 *    characters (`//`). See
 * [RFC 3986, section 3](https://tools.ietf.org/html/rfc3986#section-3).
 * 
 * See also g_uri_join_with_user(), which allows specifying the
 * components of the ‘userinfo’ separately.
 * 
 * %G_URI_FLAGS_HAS_PASSWORD and %G_URI_FLAGS_HAS_AUTH_PARAMS are ignored if set
 * in `flags`.
 * @param flags flags describing how to build the URI string
 * @param scheme the URI scheme, or %NULL
 * @param userinfo the userinfo component, or %NULL
 * @param host the host component, or %NULL
 * @param port the port, or `-1`
 * @param path the path component
 * @param query the query component, or %NULL
 * @param fragment the fragment, or %NULL
 */
export function uriJoin(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): string
/**
 * Joins the given components together according to `flags` to create
 * an absolute URI string. `path` may not be %NULL (though it may be the empty
 * string).
 * 
 * In contrast to g_uri_join(), this allows specifying the components
 * of the ‘userinfo’ separately. It otherwise behaves the same.
 * 
 * %G_URI_FLAGS_HAS_PASSWORD and %G_URI_FLAGS_HAS_AUTH_PARAMS are ignored if set
 * in `flags`.
 * @param flags flags describing how to build the URI string
 * @param scheme the URI scheme, or %NULL
 * @param user the user component of the userinfo, or %NULL
 * @param password the password component of the userinfo, or   %NULL
 * @param authParams the auth params of the userinfo, or   %NULL
 * @param host the host component, or %NULL
 * @param port the port, or `-1`
 * @param path the path component
 * @param query the query component, or %NULL
 * @param fragment the fragment, or %NULL
 */
export function uriJoinWithUser(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): string
/**
 * Splits an URI list conforming to the text/uri-list
 * mime type defined in RFC 2483 into individual URIs,
 * discarding any comments. The URIs are not validated.
 * @param uriList an URI list
 */
export function uriListExtractUris(uriList: string): string[]
/**
 * Parses `uri_string` according to `flags`. If the result is not a
 * valid [absolute URI][relative-absolute-uris], it will be discarded, and an
 * error returned.
 * @param uriString a string representing an absolute URI
 * @param flags flags describing how to parse `uri_string`
 */
export function uriParse(uriString: string, flags: UriFlags): Uri
/**
 * Many URI schemes include one or more attribute/value pairs as part of the URI
 * value. This method can be used to parse them into a hash table. When an
 * attribute has multiple occurrences, the last value is the final returned
 * value. If you need to handle repeated attributes differently, use
 * #GUriParamsIter.
 * 
 * The `params` string is assumed to still be `%`-encoded, but the returned
 * values will be fully decoded. (Thus it is possible that the returned values
 * may contain `=` or `separators,` if the value was encoded in the input.)
 * Invalid `%`-encoding is treated as with the %G_URI_FLAGS_PARSE_RELAXED
 * rules for g_uri_parse(). (However, if `params` is the path or query string
 * from a #GUri that was parsed without %G_URI_FLAGS_PARSE_RELAXED and
 * %G_URI_FLAGS_ENCODED, then you already know that it does not contain any
 * invalid encoding.)
 * 
 * %G_URI_PARAMS_WWW_FORM is handled as documented for g_uri_params_iter_init().
 * 
 * If %G_URI_PARAMS_CASE_INSENSITIVE is passed to `flags,` attributes will be
 * compared case-insensitively, so a params string `attr=123&Attr=456` will only
 * return a single attribute–value pair, `Attr=456`. Case will be preserved in
 * the returned attributes.
 * 
 * If `params` cannot be parsed (for example, it contains two `separators`
 * characters in a row), then `error` is set and %NULL is returned.
 * @param params a `%`-encoded string containing `attribute=value`   parameters
 * @param length the length of `params,` or `-1` if it is nul-terminated
 * @param separators the separator byte character set between parameters. (usually   `&`, but sometimes `;` or both `&;`). Note that this function works on   bytes not characters, so it can't be used to delimit UTF-8 strings for   anything but ASCII characters. You may pass an empty set, in which case   no splitting will occur.
 * @param flags flags to modify the way the parameters are handled.
 */
export function uriParseParams(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
/**
 * Gets the scheme portion of a URI string.
 * [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3) decodes the scheme
 * as:
 * |[
 * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
 * ```
 * 
 * Common schemes include `file`, `https`, `svn+ssh`, etc.
 * @param uri a valid URI.
 */
export function uriParseScheme(uri: string): string | null
/**
 * Gets the scheme portion of a URI string.
 * [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3) decodes the scheme
 * as:
 * |[
 * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
 * ```
 * 
 * Common schemes include `file`, `https`, `svn+ssh`, etc.
 * 
 * Unlike g_uri_parse_scheme(), the returned scheme is normalized to
 * all-lowercase and does not need to be freed.
 * @param uri a valid URI.
 */
export function uriPeekScheme(uri: string): string | null
/**
 * Parses `uri_ref` according to `flags` and, if it is a
 * [relative URI][relative-absolute-uris], resolves it relative to
 * `base_uri_string`. If the result is not a valid absolute URI, it will be
 * discarded, and an error returned.
 * 
 * (If `base_uri_string` is %NULL, this just returns `uri_ref,` or
 * %NULL if `uri_ref` is invalid or not absolute.)
 * @param baseUriString a string representing a base URI
 * @param uriRef a string representing a relative or absolute URI
 * @param flags flags describing how to parse `uri_ref`
 */
export function uriResolveRelative(baseUriString: string | null, uriRef: string, flags: UriFlags): string
/**
 * Parses `uri_ref` (which can be an
 * [absolute or relative URI][relative-absolute-uris]) according to `flags,` and
 * returns the pieces. Any component that doesn't appear in `uri_ref` will be
 * returned as %NULL (but note that all URIs always have a path component,
 * though it may be the empty string).
 * 
 * If `flags` contains %G_URI_FLAGS_ENCODED, then `%`-encoded characters in
 * `uri_ref` will remain encoded in the output strings. (If not,
 * then all such characters will be decoded.) Note that decoding will
 * only work if the URI components are ASCII or UTF-8, so you will
 * need to use %G_URI_FLAGS_ENCODED if they are not.
 * 
 * Note that the %G_URI_FLAGS_HAS_PASSWORD and
 * %G_URI_FLAGS_HAS_AUTH_PARAMS `flags` are ignored by g_uri_split(),
 * since it always returns only the full userinfo; use
 * g_uri_split_with_user() if you want it split up.
 * @param uriRef a string containing a relative or absolute URI
 * @param flags flags for parsing `uri_ref`
 */
export function uriSplit(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number, /* path */ string, /* query */ string | null, /* fragment */ string | null ]
/**
 * Parses `uri_string` (which must be an [absolute URI][relative-absolute-uris])
 * according to `flags,` and returns the pieces relevant to connecting to a host.
 * See the documentation for g_uri_split() for more details; this is
 * mostly a wrapper around that function with simpler arguments.
 * However, it will return an error if `uri_string` is a relative URI,
 * or does not contain a hostname component.
 * @param uriString a string containing an absolute URI
 * @param flags flags for parsing `uri_string`
 */
export function uriSplitNetwork(uriString: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number ]
/**
 * Parses `uri_ref` (which can be an
 * [absolute or relative URI][relative-absolute-uris]) according to `flags,` and
 * returns the pieces. Any component that doesn't appear in `uri_ref` will be
 * returned as %NULL (but note that all URIs always have a path component,
 * though it may be the empty string).
 * 
 * See g_uri_split(), and the definition of #GUriFlags, for more
 * information on the effect of `flags`. Note that `password` will only
 * be parsed out if `flags` contains %G_URI_FLAGS_HAS_PASSWORD, and
 * `auth_params` will only be parsed out if `flags` contains
 * %G_URI_FLAGS_HAS_AUTH_PARAMS.
 * @param uriRef a string containing a relative or absolute URI
 * @param flags flags for parsing `uri_ref`
 */
export function uriSplitWithUser(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* authParams */ string | null, /* host */ string | null, /* port */ number, /* path */ string, /* query */ string | null, /* fragment */ string | null ]
/**
 * Unescapes a segment of an escaped string as binary data.
 * 
 * Note that in contrast to g_uri_unescape_string(), this does allow
 * nul bytes to appear in the output.
 * 
 * If any of the characters in `illegal_characters` appears as an escaped
 * character in `escaped_string,` then that is an error and %NULL will be
 * returned. This is useful if you want to avoid for instance having a slash
 * being expanded in an escaped path element, which might confuse pathname
 * handling.
 * @param escapedString A URI-escaped string
 * @param length the length (in bytes) of `escaped_string` to escape, or `-1` if it   is nul-terminated.
 * @param illegalCharacters a string of illegal characters   not to be allowed, or %NULL.
 */
export function uriUnescapeBytes(escapedString: string, length: number, illegalCharacters: string | null): any
/**
 * Unescapes a segment of an escaped string.
 * 
 * If any of the characters in `illegal_characters` or the NUL
 * character appears as an escaped character in `escaped_string,` then
 * that is an error and %NULL will be returned. This is useful if you
 * want to avoid for instance having a slash being expanded in an
 * escaped path element, which might confuse pathname handling.
 * 
 * Note: `NUL` byte is not accepted in the output, in contrast to
 * g_uri_unescape_bytes().
 * @param escapedString A string, may be %NULL
 * @param escapedStringEnd Pointer to end of `escaped_string,`   may be %NULL
 * @param illegalCharacters An optional string of illegal   characters not to be allowed, may be %NULL
 */
export function uriUnescapeSegment(escapedString: string | null, escapedStringEnd: string | null, illegalCharacters: string | null): string | null
/**
 * Unescapes a whole escaped string.
 * 
 * If any of the characters in `illegal_characters` or the NUL
 * character appears as an escaped character in `escaped_string,` then
 * that is an error and %NULL will be returned. This is useful if you
 * want to avoid for instance having a slash being expanded in an
 * escaped path element, which might confuse pathname handling.
 * @param escapedString an escaped string to be unescaped.
 * @param illegalCharacters a string of illegal characters   not to be allowed, or %NULL.
 */
export function uriUnescapeString(escapedString: string, illegalCharacters: string | null): string | null
/**
 * Pauses the current thread for the given number of microseconds.
 * 
 * There are 1 million microseconds per second (represented by the
 * %G_USEC_PER_SEC macro). g_usleep() may have limited precision,
 * depending on hardware and operating system; don't rely on the exact
 * length of the sleep.
 * @param microseconds number of microseconds to pause
 */
export function usleep(microseconds: number): void
/**
 * Convert a string from UTF-16 to UCS-4. The result will be
 * nul-terminated.
 * @param str a UTF-16 encoded string
 * @param len the maximum length (number of #gunichar2) of `str` to use.     If `len` < 0, then the string is nul-terminated.
 */
export function utf16ToUcs4(str: number, len: number): [ /* returnType */ string, /* itemsRead */ number, /* itemsWritten */ number ]
/**
 * Convert a string from UTF-16 to UTF-8. The result will be
 * terminated with a 0 byte.
 * 
 * Note that the input is expected to be already in native endianness,
 * an initial byte-order-mark character is not handled specially.
 * g_convert() can be used to convert a byte buffer of UTF-16 data of
 * ambiguous endianness.
 * 
 * Further note that this function does not validate the result
 * string; it may e.g. include embedded NUL characters. The only
 * validation done by this function is to ensure that the input can
 * be correctly interpreted as UTF-16, i.e. it doesn't contain
 * unpaired surrogates or partial character sequences.
 * @param str a UTF-16 encoded string
 * @param len the maximum length (number of #gunichar2) of `str` to use.     If `len` < 0, then the string is nul-terminated.
 */
export function utf16ToUtf8(str: number, len: number): [ /* returnType */ string, /* itemsRead */ number, /* itemsWritten */ number ]
/**
 * Converts a string into a form that is independent of case. The
 * result will not correspond to any particular case, but can be
 * compared for equality or ordered with the results of calling
 * g_utf8_casefold() on other strings.
 * 
 * Note that calling g_utf8_casefold() followed by g_utf8_collate() is
 * only an approximation to the correct linguistic case insensitive
 * ordering, though it is a fairly good one. Getting this exactly
 * right would require a more sophisticated collation function that
 * takes case sensitivity into account. GLib does not currently
 * provide such a function.
 * @param str a UTF-8 encoded string
 * @param len length of `str,` in bytes, or -1 if `str` is nul-terminated.
 */
export function utf8Casefold(str: string, len: number): string
/**
 * Compares two strings for ordering using the linguistically
 * correct rules for the [current locale][setlocale].
 * When sorting a large number of strings, it will be significantly
 * faster to obtain collation keys with g_utf8_collate_key() and
 * compare the keys with strcmp() when sorting instead of sorting
 * the original strings.
 * 
 * If the two strings are not comparable due to being in different collation
 * sequences, the result is undefined. This can happen if the strings are in
 * different language scripts, for example.
 * @param str1 a UTF-8 encoded string
 * @param str2 a UTF-8 encoded string
 */
export function utf8Collate(str1: string, str2: string): number
/**
 * Converts a string into a collation key that can be compared
 * with other collation keys produced by the same function using
 * strcmp().
 * 
 * The results of comparing the collation keys of two strings
 * with strcmp() will always be the same as comparing the two
 * original keys with g_utf8_collate().
 * 
 * Note that this function depends on the [current locale][setlocale].
 * @param str a UTF-8 encoded string.
 * @param len length of `str,` in bytes, or -1 if `str` is nul-terminated.
 */
export function utf8CollateKey(str: string, len: number): string
/**
 * Converts a string into a collation key that can be compared
 * with other collation keys produced by the same function using strcmp().
 * 
 * In order to sort filenames correctly, this function treats the dot '.'
 * as a special case. Most dictionary orderings seem to consider it
 * insignificant, thus producing the ordering "event.c" "eventgenerator.c"
 * "event.h" instead of "event.c" "event.h" "eventgenerator.c". Also, we
 * would like to treat numbers intelligently so that "file1" "file10" "file5"
 * is sorted as "file1" "file5" "file10".
 * 
 * Note that this function depends on the [current locale][setlocale].
 * @param str a UTF-8 encoded string.
 * @param len length of `str,` in bytes, or -1 if `str` is nul-terminated.
 */
export function utf8CollateKeyForFilename(str: string, len: number): string
/**
 * Finds the start of the next UTF-8 character in the string after `p`.
 * 
 * `p` does not have to be at the beginning of a UTF-8 character. No check
 * is made to see if the character found is actually valid other than
 * it starts with an appropriate byte.
 * 
 * If `end` is %NULL, the return value will never be %NULL: if the end of the
 * string is reached, a pointer to the terminating nul byte is returned. If
 * `end` is non-%NULL, the return value will be %NULL if the end of the string
 * is reached.
 * @param p a pointer to a position within a UTF-8 encoded string
 * @param end a pointer to the byte following the end of the string,     or %NULL to indicate that the string is nul-terminated
 */
export function utf8FindNextChar(p: string, end: string | null): string | null
/**
 * Given a position `p` with a UTF-8 encoded string `str,` find the start
 * of the previous UTF-8 character starting before `p`. Returns %NULL if no
 * UTF-8 characters are present in `str` before `p`.
 * 
 * `p` does not have to be at the beginning of a UTF-8 character. No check
 * is made to see if the character found is actually valid other than
 * it starts with an appropriate byte.
 * @param str pointer to the beginning of a UTF-8 encoded string
 * @param p pointer to some position within `str`
 */
export function utf8FindPrevChar(str: string, p: string): string | null
/**
 * Converts a sequence of bytes encoded as UTF-8 to a Unicode character.
 * 
 * If `p` does not point to a valid UTF-8 encoded character, results
 * are undefined. If you are not sure that the bytes are complete
 * valid Unicode characters, you should use g_utf8_get_char_validated()
 * instead.
 * @param p a pointer to Unicode character encoded as UTF-8
 */
export function utf8GetChar(p: string): string
/**
 * Convert a sequence of bytes encoded as UTF-8 to a Unicode character.
 * This function checks for incomplete characters, for invalid characters
 * such as characters that are out of the range of Unicode, and for
 * overlong encodings of valid characters.
 * 
 * Note that g_utf8_get_char_validated() returns (gunichar)-2 if
 * `max_len` is positive and any of the bytes in the first UTF-8 character
 * sequence are nul.
 * @param p a pointer to Unicode character encoded as UTF-8
 * @param maxLen the maximum number of bytes to read, or -1 if `p` is nul-terminated
 */
export function utf8GetCharValidated(p: string, maxLen: number): string
/**
 * If the provided string is valid UTF-8, return a copy of it. If not,
 * return a copy in which bytes that could not be interpreted as valid Unicode
 * are replaced with the Unicode replacement character (U+FFFD).
 * 
 * For example, this is an appropriate function to use if you have received
 * a string that was incorrectly declared to be UTF-8, and you need a valid
 * UTF-8 version of it that can be logged or displayed to the user, with the
 * assumption that it is close enough to ASCII or UTF-8 to be mostly
 * readable as-is.
 * @param str string to coerce into UTF-8
 * @param len the maximum length of `str` to use, in bytes. If `len` < 0,     then the string is nul-terminated.
 */
export function utf8MakeValid(str: string, len: number): string
/**
 * Converts a string into canonical form, standardizing
 * such issues as whether a character with an accent
 * is represented as a base character and combining
 * accent or as a single precomposed character. The
 * string has to be valid UTF-8, otherwise %NULL is
 * returned. You should generally call g_utf8_normalize()
 * before comparing two Unicode strings.
 * 
 * The normalization mode %G_NORMALIZE_DEFAULT only
 * standardizes differences that do not affect the
 * text content, such as the above-mentioned accent
 * representation. %G_NORMALIZE_ALL also standardizes
 * the "compatibility" characters in Unicode, such
 * as SUPERSCRIPT THREE to the standard forms
 * (in this case DIGIT THREE). Formatting information
 * may be lost but for most text operations such
 * characters should be considered the same.
 * 
 * %G_NORMALIZE_DEFAULT_COMPOSE and %G_NORMALIZE_ALL_COMPOSE
 * are like %G_NORMALIZE_DEFAULT and %G_NORMALIZE_ALL,
 * but returned a result with composed forms rather
 * than a maximally decomposed form. This is often
 * useful if you intend to convert the string to
 * a legacy encoding or pass it to a system with
 * less capable Unicode handling.
 * @param str a UTF-8 encoded string.
 * @param len length of `str,` in bytes, or -1 if `str` is nul-terminated.
 * @param mode the type of normalization to perform.
 */
export function utf8Normalize(str: string, len: number, mode: NormalizeMode): string | null
/**
 * Converts from an integer character offset to a pointer to a position
 * within the string.
 * 
 * Since 2.10, this function allows to pass a negative `offset` to
 * step backwards. It is usually worth stepping backwards from the end
 * instead of forwards if `offset` is in the last fourth of the string,
 * since moving forward is about 3 times faster than moving backward.
 * 
 * Note that this function doesn't abort when reaching the end of `str`.
 * Therefore you should be sure that `offset` is within string boundaries
 * before calling that function. Call g_utf8_strlen() when unsure.
 * This limitation exists as this function is called frequently during
 * text rendering and therefore has to be as fast as possible.
 * @param str a UTF-8 encoded string
 * @param offset a character offset within `str`
 */
export function utf8OffsetToPointer(str: string, offset: number): string
/**
 * Converts from a pointer to position within a string to an integer
 * character offset.
 * 
 * Since 2.10, this function allows `pos` to be before `str,` and returns
 * a negative offset in this case.
 * @param str a UTF-8 encoded string
 * @param pos a pointer to a position within `str`
 */
export function utf8PointerToOffset(str: string, pos: string): number
/**
 * Finds the previous UTF-8 character in the string before `p`.
 * 
 * `p` does not have to be at the beginning of a UTF-8 character. No check
 * is made to see if the character found is actually valid other than
 * it starts with an appropriate byte. If `p` might be the first
 * character of the string, you must use g_utf8_find_prev_char() instead.
 * @param p a pointer to a position within a UTF-8 encoded string
 */
export function utf8PrevChar(p: string): string
/**
 * Finds the leftmost occurrence of the given Unicode character
 * in a UTF-8 encoded string, while limiting the search to `len` bytes.
 * If `len` is -1, allow unbounded search.
 * @param p a nul-terminated UTF-8 encoded string
 * @param len the maximum length of `p`
 * @param c a Unicode character
 */
export function utf8Strchr(p: string, len: number, c: string): string | null
/**
 * Converts all Unicode characters in the string that have a case
 * to lowercase. The exact manner that this is done depends
 * on the current locale, and may result in the number of
 * characters in the string changing.
 * @param str a UTF-8 encoded string
 * @param len length of `str,` in bytes, or -1 if `str` is nul-terminated.
 */
export function utf8Strdown(str: string, len: number): string
/**
 * Computes the length of the string in characters, not including
 * the terminating nul character. If the `max'`th byte falls in the
 * middle of a character, the last (partial) character is not counted.
 * @param p pointer to the start of a UTF-8 encoded string
 * @param max the maximum number of bytes to examine. If `max`       is less than 0, then the string is assumed to be       nul-terminated. If `max` is 0, `p` will not be examined and       may be %NULL. If `max` is greater than 0, up to `max`       bytes are examined
 */
export function utf8Strlen(p: string, max: number): number
/**
 * Like the standard C strncpy() function, but copies a given number
 * of characters instead of a given number of bytes. The `src` string
 * must be valid UTF-8 encoded text. (Use g_utf8_validate() on all
 * text before trying to use UTF-8 utility functions with it.)
 * 
 * Note you must ensure `dest` is at least 4 * `n` to fit the
 * largest possible UTF-8 characters
 * @param dest buffer to fill with characters from `src`
 * @param src UTF-8 encoded string
 * @param n character count
 */
export function utf8Strncpy(dest: string, src: string, n: number): string
/**
 * Find the rightmost occurrence of the given Unicode character
 * in a UTF-8 encoded string, while limiting the search to `len` bytes.
 * If `len` is -1, allow unbounded search.
 * @param p a nul-terminated UTF-8 encoded string
 * @param len the maximum length of `p`
 * @param c a Unicode character
 */
export function utf8Strrchr(p: string, len: number, c: string): string | null
/**
 * Reverses a UTF-8 string. `str` must be valid UTF-8 encoded text.
 * (Use g_utf8_validate() on all text before trying to use UTF-8
 * utility functions with it.)
 * 
 * This function is intended for programmatic uses of reversed strings.
 * It pays no attention to decomposed characters, combining marks, byte
 * order marks, directional indicators (LRM, LRO, etc) and similar
 * characters which might need special handling when reversing a string
 * for display purposes.
 * 
 * Note that unlike g_strreverse(), this function returns
 * newly-allocated memory, which should be freed with g_free() when
 * no longer needed.
 * @param str a UTF-8 encoded string
 * @param len the maximum length of `str` to use, in bytes. If `len` < 0,     then the string is nul-terminated.
 */
export function utf8Strreverse(str: string, len: number): string
/**
 * Converts all Unicode characters in the string that have a case
 * to uppercase. The exact manner that this is done depends
 * on the current locale, and may result in the number of
 * characters in the string increasing. (For instance, the
 * German ess-zet will be changed to SS.)
 * @param str a UTF-8 encoded string
 * @param len length of `str,` in bytes, or -1 if `str` is nul-terminated.
 */
export function utf8Strup(str: string, len: number): string
/**
 * Copies a substring out of a UTF-8 encoded string.
 * The substring will contain `end_pos` - `start_pos` characters.
 * 
 * Since GLib 2.72, `-1` can be passed to `end_pos` to indicate the
 * end of the string.
 * @param str a UTF-8 encoded string
 * @param startPos a character offset within `str`
 * @param endPos another character offset within `str,`   or `-1` to indicate the end of the string
 */
export function utf8Substring(str: string, startPos: number, endPos: number): string
/**
 * Convert a string from UTF-8 to a 32-bit fixed width
 * representation as UCS-4. A trailing 0 character will be added to the
 * string after the converted text.
 * @param str a UTF-8 encoded string
 * @param len the maximum length of `str` to use, in bytes. If `len` < 0,     then the string is nul-terminated.
 */
export function utf8ToUcs4(str: string, len: number): [ /* returnType */ string, /* itemsRead */ number, /* itemsWritten */ number ]
/**
 * Convert a string from UTF-8 to a 32-bit fixed width
 * representation as UCS-4, assuming valid UTF-8 input.
 * This function is roughly twice as fast as g_utf8_to_ucs4()
 * but does no error checking on the input. A trailing 0 character
 * will be added to the string after the converted text.
 * @param str a UTF-8 encoded string
 * @param len the maximum length of `str` to use, in bytes. If `len` < 0,     then the string is nul-terminated.
 */
export function utf8ToUcs4Fast(str: string, len: number): [ /* returnType */ string, /* itemsWritten */ number ]
/**
 * Convert a string from UTF-8 to UTF-16. A 0 character will be
 * added to the result after the converted text.
 * @param str a UTF-8 encoded string
 * @param len the maximum length (number of bytes) of `str` to use.     If `len` < 0, then the string is nul-terminated.
 */
export function utf8ToUtf16(str: string, len: number): [ /* returnType */ number, /* itemsRead */ number, /* itemsWritten */ number ]
/**
 * Validates UTF-8 encoded text. `str` is the text to validate;
 * if `str` is nul-terminated, then `max_len` can be -1, otherwise
 * `max_len` should be the number of bytes to validate.
 * If `end` is non-%NULL, then the end of the valid range
 * will be stored there (i.e. the start of the first invalid
 * character if some bytes were invalid, or the end of the text
 * being validated otherwise).
 * 
 * Note that g_utf8_validate() returns %FALSE if `max_len` is
 * positive and any of the `max_len` bytes are nul.
 * 
 * Returns %TRUE if all of `str` was valid. Many GLib and GTK+
 * routines require valid UTF-8 as input; so data read from a file
 * or the network should be checked with g_utf8_validate() before
 * doing anything else with it.
 * @param str a pointer to character data
 */
export function utf8Validate(str: Uint8Array): [ /* returnType */ boolean, /* end */ string ]
/**
 * Validates UTF-8 encoded text.
 * 
 * As with g_utf8_validate(), but `max_len` must be set, and hence this function
 * will always return %FALSE if any of the bytes of `str` are nul.
 * @param str a pointer to character data
 */
export function utf8ValidateLen(str: Uint8Array): [ /* returnType */ boolean, /* end */ string ]
/**
 * Parses the string `str` and verify if it is a UUID.
 * 
 * The function accepts the following syntax:
 * 
 * - simple forms (e.g. `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`)
 * 
 * Note that hyphens are required within the UUID string itself,
 * as per the aforementioned RFC.
 * @param str a string representing a UUID
 */
export function uuidStringIsValid(str: string): boolean
/**
 * Generates a random UUID (RFC 4122 version 4) as a string. It has the same
 * randomness guarantees as #GRand, so must not be used for cryptographic
 * purposes such as key generation, nonces, salts or one-time pads.
 */
export function uuidStringRandom(): string
export function variantGetGtype(): GObject.GType
/**
 * Determines if a given string is a valid D-Bus object path.  You
 * should ensure that a string is a valid D-Bus object path before
 * passing it to g_variant_new_object_path().
 * 
 * A valid object path starts with `/` followed by zero or more
 * sequences of characters separated by `/` characters.  Each sequence
 * must contain only the characters `[A-Z][a-z][0-9]_`.  No sequence
 * (including the one following the final `/` character) may be empty.
 * @param string a normal C nul-terminated string
 */
export function variantIsObjectPath(string: string): boolean
/**
 * Determines if a given string is a valid D-Bus type signature.  You
 * should ensure that a string is a valid D-Bus type signature before
 * passing it to g_variant_new_signature().
 * 
 * D-Bus type signatures consist of zero or more definite #GVariantType
 * strings in sequence.
 * @param string a normal C nul-terminated string
 */
export function variantIsSignature(string: string): boolean
/**
 * Parses a #GVariant from a text representation.
 * 
 * A single #GVariant is parsed from the content of `text`.
 * 
 * The format is described [here][gvariant-text].
 * 
 * The memory at `limit` will never be accessed and the parser behaves as
 * if the character at `limit` is the nul terminator.  This has the
 * effect of bounding `text`.
 * 
 * If `endptr` is non-%NULL then `text` is permitted to contain data
 * following the value that this function parses and `endptr` will be
 * updated to point to the first character past the end of the text
 * parsed by this function.  If `endptr` is %NULL and there is extra data
 * then an error is returned.
 * 
 * If `type` is non-%NULL then the value will be parsed to have that
 * type.  This may result in additional parse errors (in the case that
 * the parsed value doesn't fit the type) but may also result in fewer
 * errors (in the case that the type would have been ambiguous, such as
 * with empty arrays).
 * 
 * In the event that the parsing is successful, the resulting #GVariant
 * is returned. It is never floating, and must be freed with
 * g_variant_unref().
 * 
 * In case of any error, %NULL will be returned.  If `error` is non-%NULL
 * then it will be set to reflect the error that occurred.
 * 
 * Officially, the language understood by the parser is "any string
 * produced by g_variant_print()".
 * 
 * There may be implementation specific restrictions on deeply nested values,
 * which would result in a %G_VARIANT_PARSE_ERROR_RECURSION error. #GVariant is
 * guaranteed to handle nesting up to at least 64 levels.
 * @param type a #GVariantType, or %NULL
 * @param text a string containing a GVariant in text form
 * @param limit a pointer to the end of `text,` or %NULL
 * @param endptr a location to store the end pointer, or %NULL
 */
export function variantParse(type: VariantType | null, text: string, limit: string | null, endptr: string | null): Variant
/**
 * Pretty-prints a message showing the context of a #GVariant parse
 * error within the string for which parsing was attempted.
 * 
 * The resulting string is suitable for output to the console or other
 * monospace media where newlines are treated in the usual way.
 * 
 * The message will typically look something like one of the following:
 * 
 * |[
 * unterminated string constant:
 *   (1, 2, 3, 'abc
 *             ^^^^
 * ```
 * 
 * 
 * or
 * 
 * |[
 * unable to find a common type:
 *   [1, 2, 3, 'str']
 *    ^        ^^^^^
 * ```
 * 
 * 
 * The format of the message may change in a future version.
 * 
 * `error` must have come from a failed attempt to g_variant_parse() and
 * `source_str` must be exactly the same string that caused the error.
 * If `source_str` was not nul-terminated when you passed it to
 * g_variant_parse() then you must add nul termination before using this
 * function.
 * @param error a #GError from the #GVariantParseError domain
 * @param sourceStr the string that was given to the parser
 */
export function variantParseErrorPrintContext(error: Error, sourceStr: string): string
export function variantParseErrorQuark(): Quark
/**
 * Same as g_variant_error_quark().
 */
export function variantParserGetErrorQuark(): Quark
export function variantTypeChecked(arg0: string): VariantType
export function variantTypeStringGetDepth(typeString: string): number
/**
 * Checks if `type_string` is a valid GVariant type string.  This call is
 * equivalent to calling g_variant_type_string_scan() and confirming
 * that the following character is a nul terminator.
 * @param typeString a pointer to any string
 */
export function variantTypeStringIsValid(typeString: string): boolean
/**
 * Scan for a single complete and valid GVariant type string in `string`.
 * The memory pointed to by `limit` (or bytes beyond it) is never
 * accessed.
 * 
 * If a valid type string is found, `endptr` is updated to point to the
 * first character past the end of the string that was found and %TRUE
 * is returned.
 * 
 * If there is no valid type string starting at `string,` or if the type
 * string does not end before `limit` then %FALSE is returned.
 * 
 * For the simple case of checking if a string is a valid type string,
 * see g_variant_type_string_is_valid().
 * @param string a pointer to any string
 * @param limit the end of `string,` or %NULL
 */
export function variantTypeStringScan(string: string, limit: string | null): [ /* returnType */ boolean, /* endptr */ string ]
/**
 * Prototype of a #GChildWatchSource callback, called when a child
 * process has exited.
 * 
 * To interpret `wait_status,` see the documentation
 * for g_spawn_check_wait_status(). In particular,
 * on Unix platforms, note that it is usually not equal
 * to the integer passed to `exit()` or returned from `main()`.
 * @callback 
 * @param pid the process id of the child process
 * @param waitStatus Status information about the child process, encoded               in a platform-specific manner
 */
export interface ChildWatchFunc {
    (pid: Pid, waitStatus: number): void
}
/**
 * Specifies the type of function passed to g_clear_handle_id().
 * The implementation is expected to free the resource identified
 * by `handle_id;` for instance, if `handle_id` is a #GSource ID,
 * g_source_remove() can be used.
 * @callback 
 * @param handleId the handle ID to clear
 */
export interface ClearHandleFunc {
    (handleId: number): void
}
/**
 * Specifies the type of a comparison function used to compare two
 * values.  The function should return a negative integer if the first
 * value comes before the second, 0 if they are equal, or a positive
 * integer if the first value comes after the second.
 * @callback 
 * @param a a value
 * @param b a value to compare with
 */
export interface CompareDataFunc {
    (a: object | null, b: object | null): number
}
/**
 * Specifies the type of a comparison function used to compare two
 * values.  The function should return a negative integer if the first
 * value comes before the second, 0 if they are equal, or a positive
 * integer if the first value comes after the second.
 * @callback 
 * @param a a value
 * @param b a value to compare with
 */
export interface CompareFunc {
    (a: object | null, b: object | null): number
}
/**
 * A function of this signature is used to copy the node data
 * when doing a deep-copy of a tree.
 * @callback 
 * @param src A pointer to the data which should be copied
 * @param data Additional data
 */
export interface CopyFunc {
    (src: object, data: object | null): object
}
/**
 * Specifies the type of function passed to g_dataset_foreach(). It is
 * called with each #GQuark id and associated data element, together
 * with the `user_data` parameter supplied to g_dataset_foreach().
 * @callback 
 * @param keyId the #GQuark id to identifying the data element.
 * @param data the data element.
 */
export interface DataForeachFunc {
    (keyId: Quark, data: object | null): void
}
/**
 * Specifies the type of function which is called when a data element
 * is destroyed. It is passed the pointer to the data element and
 * should free any memory and resources allocated for it.
 * @callback 
 * @param data the data element.
 */
export interface DestroyNotify {
    (data: object | null): void
}
/**
 * The type of functions that are used to 'duplicate' an object.
 * What this means depends on the context, it could just be
 * incrementing the reference count, if `data` is a ref-counted
 * object.
 * @callback 
 * @param data the data to duplicate
 */
export interface DuplicateFunc {
    (data: object | null): object | null
}
/**
 * Specifies the type of a function used to test two values for
 * equality. The function should return %TRUE if both values are equal
 * and %FALSE otherwise.
 * @callback 
 * @param a a value
 * @param b a value to compare with
 */
export interface EqualFunc {
    (a: object | null, b: object | null): boolean
}
/**
 * Specifies the type of a function used to test two values for
 * equality. The function should return %TRUE if both values are equal
 * and %FALSE otherwise.
 * 
 * This is a version of #GEqualFunc which provides a `user_data` closure from
 * the caller.
 * @callback 
 * @param a a value
 * @param b a value to compare with
 */
export interface EqualFuncFull {
    (a: object | null, b: object | null): boolean
}
/**
 * Specifies the type of function which is called when an extended
 * error instance is freed. It is passed the error pointer about to be
 * freed, and should free the error's private data fields.
 * 
 * Normally, it is better to use G_DEFINE_EXTENDED_ERROR(), as it
 * already takes care of getting the private data from `error`.
 * @callback 
 * @param error extended error to clear
 */
export interface ErrorClearFunc {
    (error: Error): void
}
/**
 * Specifies the type of function which is called when an extended
 * error instance is copied. It is passed the pointer to the
 * destination error and source error, and should copy only the fields
 * of the private data from `src_error` to `dest_error`.
 * 
 * Normally, it is better to use G_DEFINE_EXTENDED_ERROR(), as it
 * already takes care of getting the private data from `src_error` and
 * `dest_error`.
 * @callback 
 * @param srcError source extended error
 * @param destError destination extended error
 */
export interface ErrorCopyFunc {
    (srcError: Error, destError: Error): void
}
/**
 * Specifies the type of function which is called just after an
 * extended error instance is created and its fields filled. It should
 * only initialize the fields in the private data, which can be
 * received with the generated `*_get_private()` function.
 * 
 * Normally, it is better to use G_DEFINE_EXTENDED_ERROR(), as it
 * already takes care of getting the private data from `error`.
 * @callback 
 * @param error extended error
 */
export interface ErrorInitFunc {
    (error: Error): void
}
/**
 * Declares a type of function which takes an arbitrary
 * data pointer argument and has no return value. It is
 * not currently used in GLib or GTK+.
 * @callback 
 * @param data a data pointer
 */
export interface FreeFunc {
    (data: object | null): void
}
/**
 * Specifies the type of functions passed to g_list_foreach() and
 * g_slist_foreach().
 * @callback 
 * @param data the element's data
 */
export interface Func {
    (data: object | null): void
}
/**
 * Specifies the type of the function passed to g_hash_table_foreach().
 * It is called with each key/value pair, together with the `user_data`
 * parameter which is passed to g_hash_table_foreach().
 * @callback 
 * @param key a key
 * @param value the value corresponding to the key
 */
export interface HFunc {
    (key: object | null, value: object | null): void
}
/**
 * Specifies the type of the function passed to
 * g_hash_table_foreach_remove(). It is called with each key/value
 * pair, together with the `user_data` parameter passed to
 * g_hash_table_foreach_remove(). It should return %TRUE if the
 * key/value pair should be removed from the #GHashTable.
 * @callback 
 * @param key a key
 * @param value the value associated with the key
 */
export interface HRFunc {
    (key: object | null, value: object | null): boolean
}
/**
 * Specifies the type of the hash function which is passed to
 * g_hash_table_new() when a #GHashTable is created.
 * 
 * The function is passed a key and should return a #guint hash value.
 * The functions g_direct_hash(), g_int_hash() and g_str_hash() provide
 * hash functions which can be used when the key is a #gpointer, #gint*,
 * and #gchar* respectively.
 * 
 * g_direct_hash() is also the appropriate hash function for keys
 * of the form `GINT_TO_POINTER (n)` (or similar macros).
 * 
 * A good hash functions should produce
 * hash values that are evenly distributed over a fairly large range.
 * The modulus is taken with the hash table size (a prime number) to
 * find the 'bucket' to place each key into. The function should also
 * be very fast, since it is called for each key lookup.
 * 
 * Note that the hash functions provided by GLib have these qualities,
 * but are not particularly robust against manufactured keys that
 * cause hash collisions. Therefore, you should consider choosing
 * a more secure hash function when using a GHashTable with keys
 * that originate in untrusted data (such as HTTP requests).
 * Using g_str_hash() in that situation might make your application
 * vulnerable to
 * [Algorithmic Complexity Attacks](https://lwn.net/Articles/474912/).
 * 
 * The key to choosing a good hash is unpredictability.  Even
 * cryptographic hashes are very easy to find collisions for when the
 * remainder is taken modulo a somewhat predictable prime number.  There
 * must be an element of randomness that an attacker is unable to guess.
 * @callback 
 * @param key a key
 */
export interface HashFunc {
    (key: object | null): number
}
/**
 * Defines the type of a hook function that can be invoked
 * by g_hook_list_invoke_check().
 * @callback 
 * @param data the data field of the #GHook is passed to the hook function here
 */
export interface HookCheckFunc {
    (data: object | null): boolean
}
/**
 * Defines the type of function used by g_hook_list_marshal_check().
 * @callback 
 * @param hook a #GHook
 * @param marshalData user data
 */
export interface HookCheckMarshaller {
    (hook: Hook, marshalData: object | null): boolean
}
/**
 * Defines the type of function used to compare #GHook elements in
 * g_hook_insert_sorted().
 * @callback 
 * @param newHook the #GHook being inserted
 * @param sibling the #GHook to compare with `new_hook`
 */
export interface HookCompareFunc {
    (newHook: Hook, sibling: Hook): number
}
/**
 * Defines the type of function to be called when a hook in a
 * list of hooks gets finalized.
 * @callback 
 * @param hookList a #GHookList
 * @param hook the hook in `hook_list` that gets finalized
 */
export interface HookFinalizeFunc {
    (hookList: HookList, hook: Hook): void
}
/**
 * Defines the type of the function passed to g_hook_find().
 * @callback 
 * @param hook a #GHook
 * @param data user data passed to g_hook_find_func()
 */
export interface HookFindFunc {
    (hook: Hook, data: object | null): boolean
}
/**
 * Defines the type of a hook function that can be invoked
 * by g_hook_list_invoke().
 * @callback 
 * @param data the data field of the #GHook is passed to the hook function here
 */
export interface HookFunc {
    (data: object | null): void
}
/**
 * Defines the type of function used by g_hook_list_marshal().
 * @callback 
 * @param hook a #GHook
 * @param marshalData user data
 */
export interface HookMarshaller {
    (hook: Hook, marshalData: object | null): void
}
/**
 * Specifies the type of function passed to g_io_add_watch() or
 * g_io_add_watch_full(), which is called when the requested condition
 * on a #GIOChannel is satisfied.
 * @callback 
 * @param source the #GIOChannel event source
 * @param condition the condition which has been satisfied
 * @param data user data set in g_io_add_watch() or g_io_add_watch_full()
 */
export interface IOFunc {
    (source: IOChannel, condition: IOCondition, data: object | null): boolean
}
/**
 * Specifies the prototype of log handler functions.
 * 
 * The default log handler, g_log_default_handler(), automatically appends a
 * new-line character to `message` when printing it. It is advised that any
 * custom log handler functions behave similarly, so that logging calls in user
 * code do not need modifying to add a new-line character to the message if the
 * log handler is changed.
 * 
 * This is not used if structured logging is enabled; see
 * [Using Structured Logging][using-structured-logging].
 * @callback 
 * @param logDomain the log domain of the message
 * @param logLevel the log level of the message (including the     fatal and recursion flags)
 * @param message the message to process
 */
export interface LogFunc {
    (logDomain: string, logLevel: LogLevelFlags, message: string): void
}
/**
 * Writer function for log entries. A log entry is a collection of one or more
 * #GLogFields, using the standard [field names from journal
 * specification](https://www.freedesktop.org/software/systemd/man/systemd.journal-fields.html).
 * See g_log_structured() for more information.
 * 
 * Writer functions must ignore fields which they do not recognise, unless they
 * can write arbitrary binary output, as field values may be arbitrary binary.
 * 
 * `log_level` is guaranteed to be included in `fields` as the `PRIORITY` field,
 * but is provided separately for convenience of deciding whether or where to
 * output the log entry.
 * 
 * Writer functions should return %G_LOG_WRITER_HANDLED if they handled the log
 * message successfully or if they deliberately ignored it. If there was an
 * error handling the message (for example, if the writer function is meant to
 * send messages to a remote logging server and there is a network error), it
 * should return %G_LOG_WRITER_UNHANDLED. This allows writer functions to be
 * chained and fall back to simpler handlers in case of failure.
 * @callback 
 * @param logLevel log level of the message
 * @param fields fields forming the message
 */
export interface LogWriterFunc {
    (logLevel: LogLevelFlags, fields: LogField[]): LogWriterOutput
}
/**
 * Specifies the type of function passed to g_node_children_foreach().
 * The function is called with each child node, together with the user
 * data passed to g_node_children_foreach().
 * @callback 
 * @param node a #GNode.
 * @param data user data passed to g_node_children_foreach().
 */
export interface NodeForeachFunc {
    (node: Node, data: object | null): void
}
/**
 * Specifies the type of function passed to g_node_traverse(). The
 * function is called with each of the nodes visited, together with the
 * user data passed to g_node_traverse(). If the function returns
 * %TRUE, then the traversal is stopped.
 * @callback 
 * @param node a #GNode.
 * @param data user data passed to g_node_traverse().
 */
export interface NodeTraverseFunc {
    (node: Node, data: object | null): boolean
}
/**
 * The type of function to be passed as callback for %G_OPTION_ARG_CALLBACK
 * options.
 * @callback 
 * @param optionName The name of the option being parsed. This will be either a  single dash followed by a single letter (for a short name) or two dashes  followed by a long option name.
 * @param value The value to be parsed.
 * @param data User data added to the #GOptionGroup containing the option when it  was created with g_option_group_new()
 */
export interface OptionArgFunc {
    (optionName: string, value: string, data: object | null): boolean
}
/**
 * The type of function to be used as callback when a parse error occurs.
 * @callback 
 * @param context The active #GOptionContext
 * @param group The group to which the function belongs
 * @param data User data added to the #GOptionGroup containing the option when it  was created with g_option_group_new()
 */
export interface OptionErrorFunc {
    (context: OptionContext, group: OptionGroup, data: object | null): void
}
/**
 * The type of function that can be called before and after parsing.
 * @callback 
 * @param context The active #GOptionContext
 * @param group The group to which the function belongs
 * @param data User data added to the #GOptionGroup containing the option when it  was created with g_option_group_new()
 */
export interface OptionParseFunc {
    (context: OptionContext, group: OptionGroup, data: object | null): boolean
}
/**
 * Specifies the type of function passed to g_main_context_set_poll_func().
 * The semantics of the function should match those of the poll() system call.
 * @callback 
 * @param ufds an array of #GPollFD elements
 * @param nfsd the number of elements in `ufds`
 * @param timeout the maximum time to wait for an event of the file descriptors.     A negative value indicates an infinite timeout.
 */
export interface PollFunc {
    (ufds: PollFD, nfsd: number, timeout: number): number
}
/**
 * Specifies the type of the print handler functions.
 * These are called with the complete formatted string to output.
 * @callback 
 * @param string the message to output
 */
export interface PrintFunc {
    (string: string): void
}
/**
 * Specifies the type of the function passed to g_regex_replace_eval().
 * It is called for each occurrence of the pattern in the string passed
 * to g_regex_replace_eval(), and it should append the replacement to
 * `result`.
 * @callback 
 * @param matchInfo the #GMatchInfo generated by the match.     Use g_match_info_get_regex() and g_match_info_get_string() if you     need the #GRegex or the matched string.
 * @param result a #GString containing the new string
 */
export interface RegexEvalCallback {
    (matchInfo: MatchInfo, result: String): boolean
}
/**
 * Specifies the type of the message handler function.
 * @callback 
 * @param scanner a #GScanner
 * @param message the message
 * @param error %TRUE if the message signals an error,     %FALSE if it signals a warning.
 */
export interface ScannerMsgFunc {
    (scanner: Scanner, message: string, error: boolean): void
}
/**
 * A #GSequenceIterCompareFunc is a function used to compare iterators.
 * It must return zero if the iterators compare equal, a negative value
 * if `a` comes before `b,` and a positive value if `b` comes before `a`.
 * @callback 
 * @param a a #GSequenceIter
 * @param b a #GSequenceIter
 * @param data user data
 */
export interface SequenceIterCompareFunc {
    (a: SequenceIter, b: SequenceIter, data: object | null): number
}
/**
 * Dispose function for `source`. See g_source_set_dispose_function() for
 * details.
 * @callback 
 * @param source #GSource that is currently being disposed
 */
export interface SourceDisposeFunc {
    (source: Source): void
}
/**
 * This is just a placeholder for #GClosureMarshal,
 * which cannot be used here for dependency reasons.
 * @callback 
 */
export interface SourceDummyMarshal {
    (): void
}
/**
 * Specifies the type of function passed to g_timeout_add(),
 * g_timeout_add_full(), g_idle_add(), and g_idle_add_full().
 * 
 * When calling g_source_set_callback(), you may need to cast a function of a
 * different type to this type. Use G_SOURCE_FUNC() to avoid warnings about
 * incompatible function types.
 * @callback 
 */
export interface SourceFunc {
    (): boolean
}
/**
 * Specifies the type of the setup function passed to g_spawn_async(),
 * g_spawn_sync() and g_spawn_async_with_pipes(), which can, in very
 * limited ways, be used to affect the child's execution.
 * 
 * On POSIX platforms, the function is called in the child after GLib
 * has performed all the setup it plans to perform, but before calling
 * exec(). Actions taken in this function will only affect the child,
 * not the parent.
 * 
 * On Windows, the function is called in the parent. Its usefulness on
 * Windows is thus questionable. In many cases executing the child setup
 * function in the parent can have ill effects, and you should be very
 * careful when porting software to Windows that uses child setup
 * functions.
 * 
 * However, even on POSIX, you are extremely limited in what you can
 * safely do from a #GSpawnChildSetupFunc, because any mutexes that were
 * held by other threads in the parent process at the time of the fork()
 * will still be locked in the child process, and they will never be
 * unlocked (since the threads that held them don't exist in the child).
 * POSIX allows only async-signal-safe functions (see signal(7)) to be
 * called in the child between fork() and exec(), which drastically limits
 * the usefulness of child setup functions.
 * 
 * In particular, it is not safe to call any function which may
 * call malloc(), which includes POSIX functions such as setenv().
 * If you need to set up the child environment differently from
 * the parent, you should use g_get_environ(), g_environ_setenv(),
 * and g_environ_unsetenv(), and then pass the complete environment
 * list to the `g_spawn...` function.
 * @callback 
 */
export interface SpawnChildSetupFunc {
    (): void
}
/**
 * The type used for test case functions that take an extra pointer
 * argument.
 * @callback 
 */
export interface TestDataFunc {
    (): void
}
/**
 * The type used for functions that operate on test fixtures.  This is
 * used for the fixture setup and teardown functions as well as for the
 * testcases themselves.
 * 
 * `user_data` is a pointer to the data that was given when registering
 * the test case.
 * 
 * `fixture` will be a pointer to the area of memory allocated by the
 * test framework, of the size requested.  If the requested size was
 * zero then `fixture` will be equal to `user_data`.
 * @callback 
 * @param fixture the test fixture
 */
export interface TestFixtureFunc {
    (fixture: object): void
}
/**
 * The type used for test case functions.
 * @callback 
 */
export interface TestFunc {
    (): void
}
/**
 * Specifies the prototype of fatal log handler functions.
 * @callback 
 * @param logDomain the log domain of the message
 * @param logLevel the log level of the message (including the fatal and recursion flags)
 * @param message the message to process
 */
export interface TestLogFatalFunc {
    (logDomain: string, logLevel: LogLevelFlags, message: string): boolean
}
/**
 * Specifies the type of the `func` functions passed to g_thread_new()
 * or g_thread_try_new().
 * @callback 
 * @param data data passed to the thread
 */
export interface ThreadFunc {
    (data: object | null): object | null
}
/**
 * The type of functions which are used to translate user-visible
 * strings, for <option>--help</option> output.
 * @callback 
 * @param str the untranslated string
 * @param data user data specified when installing the function, e.g.  in g_option_group_set_translate_func()
 */
export interface TranslateFunc {
    (str: string, data: object | null): string
}
/**
 * Specifies the type of function passed to g_tree_traverse(). It is
 * passed the key and value of each node, together with the `user_data`
 * parameter passed to g_tree_traverse(). If the function returns
 * %TRUE, the traversal is stopped.
 * @callback 
 * @param key a key of a #GTree node
 * @param value the value corresponding to the key
 * @param data user data passed to g_tree_traverse()
 */
export interface TraverseFunc {
    (key: object | null, value: object | null, data: object | null): boolean
}
/**
 * Specifies the type of function passed to g_tree_foreach_node(). It is
 * passed each node, together with the `user_data` parameter passed to
 * g_tree_foreach_node(). If the function returns %TRUE, the traversal is
 * stopped.
 * @callback 
 * @param node a #GTreeNode
 * @param data user data passed to g_tree_foreach_node()
 */
export interface TraverseNodeFunc {
    (node: TreeNode, data: object | null): boolean
}
/**
 * The type of functions to be called when a UNIX fd watch source
 * triggers.
 * @callback 
 * @param fd the fd that triggered the event
 * @param condition the IO conditions reported on `fd`
 */
export interface UnixFDSourceFunc {
    (fd: number, condition: IOCondition): boolean
}
/**
 * Declares a type of function which takes no arguments
 * and has no return value. It is used to specify the type
 * function passed to g_atexit().
 * @callback 
 */
export interface VoidFunc {
    (): void
}
export interface Array {

    // Own fields of GLib-2.0.GLib.Array

    /**
     * a pointer to the element data. The data may be moved as
     *     elements are added to the #GArray.
     * @field 
     */
    data: string
    /**
     * the number of elements in the #GArray not including the
     *     possible terminating zero element.
     * @field 
     */
    len: number
}

/**
 * Contains the public fields of a GArray.
 * @record 
 */
export class Array {

    // Own properties of GLib-2.0.GLib.Array

    static name: string
}

export interface AsyncQueue {

    // Owm methods of GLib-2.0.GLib.AsyncQueue

    /**
     * Returns the length of the queue.
     * 
     * Actually this function returns the number of data items in
     * the queue minus the number of waiting threads, so a negative
     * value means waiting threads, and a positive value means available
     * entries in the `queue`. A return value of 0 could mean n entries
     * in the queue and n threads waiting. This can happen due to locking
     * of the queue or due to scheduling.
     */
    length(): number
    /**
     * Returns the length of the queue.
     * 
     * Actually this function returns the number of data items in
     * the queue minus the number of waiting threads, so a negative
     * value means waiting threads, and a positive value means available
     * entries in the `queue`. A return value of 0 could mean n entries
     * in the queue and n threads waiting. This can happen due to locking
     * of the queue or due to scheduling.
     * 
     * This function must be called while holding the `queue'`s lock.
     */
    lengthUnlocked(): number
    /**
     * Acquires the `queue'`s lock. If another thread is already
     * holding the lock, this call will block until the lock
     * becomes available.
     * 
     * Call g_async_queue_unlock() to drop the lock again.
     * 
     * While holding the lock, you can only call the
     * g_async_queue_*_unlocked() functions on `queue`. Otherwise,
     * deadlock may occur.
     */
    lock(): void
    /**
     * Pops data from the `queue`. If `queue` is empty, this function
     * blocks until data becomes available.
     */
    pop(): object | null
    /**
     * Pops data from the `queue`. If `queue` is empty, this function
     * blocks until data becomes available.
     * 
     * This function must be called while holding the `queue'`s lock.
     */
    popUnlocked(): object | null
    /**
     * Pushes the `data` into the `queue`. `data` must not be %NULL.
     * @param data `data` to push into the `queue`
     */
    push(data: object | null): void
    /**
     * Pushes the `item` into the `queue`. `item` must not be %NULL.
     * In contrast to g_async_queue_push(), this function
     * pushes the new item ahead of the items already in the queue,
     * so that it will be the next one to be popped off the queue.
     * @param item data to push into the `queue`
     */
    pushFront(item: object | null): void
    /**
     * Pushes the `item` into the `queue`. `item` must not be %NULL.
     * In contrast to g_async_queue_push_unlocked(), this function
     * pushes the new item ahead of the items already in the queue,
     * so that it will be the next one to be popped off the queue.
     * 
     * This function must be called while holding the `queue'`s lock.
     * @param item data to push into the `queue`
     */
    pushFrontUnlocked(item: object | null): void
    /**
     * Pushes the `data` into the `queue`. `data` must not be %NULL.
     * 
     * This function must be called while holding the `queue'`s lock.
     * @param data `data` to push into the `queue`
     */
    pushUnlocked(data: object | null): void
    /**
     * Increases the reference count of the asynchronous `queue` by 1.
     */
    refUnlocked(): void
    /**
     * Remove an item from the queue.
     * @param item the data to remove from the `queue`
     */
    remove(item: object | null): boolean
    /**
     * Remove an item from the queue.
     * 
     * This function must be called while holding the `queue'`s lock.
     * @param item the data to remove from the `queue`
     */
    removeUnlocked(item: object | null): boolean
    /**
     * Pops data from the `queue`. If the queue is empty, blocks until
     * `end_time` or until data becomes available.
     * 
     * If no data is received before `end_time,` %NULL is returned.
     * 
     * To easily calculate `end_time,` a combination of g_get_real_time()
     * and g_time_val_add() can be used.
     * @param endTime a #GTimeVal, determining the final time
     */
    timedPop(endTime: TimeVal): object | null
    /**
     * Pops data from the `queue`. If the queue is empty, blocks until
     * `end_time` or until data becomes available.
     * 
     * If no data is received before `end_time,` %NULL is returned.
     * 
     * To easily calculate `end_time,` a combination of g_get_real_time()
     * and g_time_val_add() can be used.
     * 
     * This function must be called while holding the `queue'`s lock.
     * @param endTime a #GTimeVal, determining the final time
     */
    timedPopUnlocked(endTime: TimeVal): object | null
    /**
     * Pops data from the `queue`. If the queue is empty, blocks for
     * `timeout` microseconds, or until data becomes available.
     * 
     * If no data is received before the timeout, %NULL is returned.
     * @param timeout the number of microseconds to wait
     */
    timeoutPop(timeout: number): object | null
    /**
     * Pops data from the `queue`. If the queue is empty, blocks for
     * `timeout` microseconds, or until data becomes available.
     * 
     * If no data is received before the timeout, %NULL is returned.
     * 
     * This function must be called while holding the `queue'`s lock.
     * @param timeout the number of microseconds to wait
     */
    timeoutPopUnlocked(timeout: number): object | null
    /**
     * Tries to pop data from the `queue`. If no data is available,
     * %NULL is returned.
     */
    tryPop(): object | null
    /**
     * Tries to pop data from the `queue`. If no data is available,
     * %NULL is returned.
     * 
     * This function must be called while holding the `queue'`s lock.
     */
    tryPopUnlocked(): object | null
    /**
     * Releases the queue's lock.
     * 
     * Calling this function when you have not acquired
     * the with g_async_queue_lock() leads to undefined
     * behaviour.
     */
    unlock(): void
    /**
     * Decreases the reference count of the asynchronous `queue` by 1.
     * 
     * If the reference count went to 0, the `queue` will be destroyed
     * and the memory allocated will be freed. So you are not allowed
     * to use the `queue` afterwards, as it might have disappeared.
     * You do not need to hold the lock to call this function.
     */
    unref(): void
    /**
     * Decreases the reference count of the asynchronous `queue` by 1
     * and releases the lock. This function must be called while holding
     * the `queue'`s lock. If the reference count went to 0, the `queue`
     * will be destroyed and the memory allocated will be freed.
     */
    unrefAndUnlock(): void
}

/**
 * An opaque data structure which represents an asynchronous queue.
 * 
 * It should only be accessed through the `g_async_queue_*` functions.
 * @record 
 */
export class AsyncQueue {

    // Own properties of GLib-2.0.GLib.AsyncQueue

    static name: string
}

export interface BookmarkFile {

    // Owm methods of GLib-2.0.GLib.BookmarkFile

    /**
     * Adds the application with `name` and `exec` to the list of
     * applications that have registered a bookmark for `uri` into
     * `bookmark`.
     * 
     * Every bookmark inside a #GBookmarkFile must have at least an
     * application registered.  Each application must provide a name, a
     * command line useful for launching the bookmark, the number of times
     * the bookmark has been registered by the application and the last
     * time the application registered this bookmark.
     * 
     * If `name` is %NULL, the name of the application will be the
     * same returned by g_get_application_name(); if `exec` is %NULL, the
     * command line will be a composition of the program name as
     * returned by g_get_prgname() and the "\%u" modifier, which will be
     * expanded to the bookmark's URI.
     * 
     * This function will automatically take care of updating the
     * registrations count and timestamping in case an application
     * with the same `name` had already registered a bookmark for
     * `uri` inside `bookmark`.
     * 
     * If no bookmark for `uri` is found, one is created.
     * @param uri a valid URI
     * @param name the name of the application registering the bookmark   or %NULL
     * @param exec command line to be used to launch the bookmark or %NULL
     */
    addApplication(uri: string, name: string | null, exec: string | null): void
    /**
     * Adds `group` to the list of groups to which the bookmark for `uri`
     * belongs to.
     * 
     * If no bookmark for `uri` is found then it is created.
     * @param uri a valid URI
     * @param group the group name to be added
     */
    addGroup(uri: string, group: string): void
    /**
     * Frees a #GBookmarkFile.
     */
    free(): void
    /**
     * Gets the time the bookmark for `uri` was added to `bookmark`
     * 
     * In the event the URI cannot be found, -1 is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getAdded(uri: string): number
    /**
     * Gets the time the bookmark for `uri` was added to `bookmark`
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getAddedDateTime(uri: string): DateTime
    /**
     * Gets the registration information of `app_name` for the bookmark for
     * `uri`.  See g_bookmark_file_set_application_info() for more information about
     * the returned data.
     * 
     * The string returned in `app_exec` must be freed.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.  In the
     * event that no application with name `app_name` has registered a bookmark
     * for `uri,`  %FALSE is returned and error is set to
     * %G_BOOKMARK_FILE_ERROR_APP_NOT_REGISTERED. In the event that unquoting
     * the command line fails, an error of the %G_SHELL_ERROR domain is
     * set and %FALSE is returned.
     * @param uri a valid URI
     * @param name an application's name
     */
    getAppInfo(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string, /* count */ number, /* stamp */ number ]
    /**
     * Gets the registration information of `app_name` for the bookmark for
     * `uri`.  See g_bookmark_file_set_application_info() for more information about
     * the returned data.
     * 
     * The string returned in `app_exec` must be freed.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.  In the
     * event that no application with name `app_name` has registered a bookmark
     * for `uri,`  %FALSE is returned and error is set to
     * %G_BOOKMARK_FILE_ERROR_APP_NOT_REGISTERED. In the event that unquoting
     * the command line fails, an error of the %G_SHELL_ERROR domain is
     * set and %FALSE is returned.
     * @param uri a valid URI
     * @param name an application's name
     */
    getApplicationInfo(uri: string, name: string): [ /* returnType */ boolean, /* exec */ string, /* count */ number, /* stamp */ DateTime ]
    /**
     * Retrieves the names of the applications that have registered the
     * bookmark for `uri`.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getApplications(uri: string): string[]
    /**
     * Retrieves the description of the bookmark for `uri`.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getDescription(uri: string): string
    /**
     * Retrieves the list of group names of the bookmark for `uri`.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * 
     * The returned array is %NULL terminated, so `length` may optionally
     * be %NULL.
     * @param uri a valid URI
     */
    getGroups(uri: string): string[]
    /**
     * Gets the icon of the bookmark for `uri`.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getIcon(uri: string): [ /* returnType */ boolean, /* href */ string, /* mimeType */ string ]
    /**
     * Gets whether the private flag of the bookmark for `uri` is set.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.  In the
     * event that the private flag cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_INVALID_VALUE.
     * @param uri a valid URI
     */
    getIsPrivate(uri: string): boolean
    /**
     * Retrieves the MIME type of the resource pointed by `uri`.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.  In the
     * event that the MIME type cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_INVALID_VALUE.
     * @param uri a valid URI
     */
    getMimeType(uri: string): string
    /**
     * Gets the time when the bookmark for `uri` was last modified.
     * 
     * In the event the URI cannot be found, -1 is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getModified(uri: string): number
    /**
     * Gets the time when the bookmark for `uri` was last modified.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getModifiedDateTime(uri: string): DateTime
    /**
     * Gets the number of bookmarks inside `bookmark`.
     */
    getSize(): number
    /**
     * Returns the title of the bookmark for `uri`.
     * 
     * If `uri` is %NULL, the title of `bookmark` is returned.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI or %NULL
     */
    getTitle(uri: string | null): string
    /**
     * Returns all URIs of the bookmarks in the bookmark file `bookmark`.
     * The array of returned URIs will be %NULL-terminated, so `length` may
     * optionally be %NULL.
     */
    getUris(): string[]
    /**
     * Gets the time the bookmark for `uri` was last visited.
     * 
     * In the event the URI cannot be found, -1 is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getVisited(uri: string): number
    /**
     * Gets the time the bookmark for `uri` was last visited.
     * 
     * In the event the URI cannot be found, %NULL is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     */
    getVisitedDateTime(uri: string): DateTime
    /**
     * Checks whether the bookmark for `uri` inside `bookmark` has been
     * registered by application `name`.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     * @param name the name of the application
     */
    hasApplication(uri: string, name: string): boolean
    /**
     * Checks whether `group` appears in the list of groups to which
     * the bookmark for `uri` belongs to.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param uri a valid URI
     * @param group the group name to be searched
     */
    hasGroup(uri: string, group: string): boolean
    /**
     * Looks whether the desktop bookmark has an item with its URI set to `uri`.
     * @param uri a valid URI
     */
    hasItem(uri: string): boolean
    /**
     * Loads a bookmark file from memory into an empty #GBookmarkFile
     * structure.  If the object cannot be created then `error` is set to a
     * #GBookmarkFileError.
     * @param data desktop bookmarks    loaded in memory
     */
    loadFromData(data: Uint8Array): boolean
    /**
     * This function looks for a desktop bookmark file named `file` in the
     * paths returned from g_get_user_data_dir() and g_get_system_data_dirs(),
     * loads the file into `bookmark` and returns the file's full path in
     * `full_path`.  If the file could not be loaded then `error` is
     * set to either a #GFileError or #GBookmarkFileError.
     * @param file a relative path to a filename to open and parse
     */
    loadFromDataDirs(file: string): [ /* returnType */ boolean, /* fullPath */ string ]
    /**
     * Loads a desktop bookmark file into an empty #GBookmarkFile structure.
     * If the file could not be loaded then `error` is set to either a #GFileError
     * or #GBookmarkFileError.
     * @param filename the path of a filename to load, in the     GLib file name encoding
     */
    loadFromFile(filename: string): boolean
    /**
     * Changes the URI of a bookmark item from `old_uri` to `new_uri`.  Any
     * existing bookmark for `new_uri` will be overwritten.  If `new_uri` is
     * %NULL, then the bookmark is removed.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * @param oldUri a valid URI
     * @param newUri a valid URI, or %NULL
     */
    moveItem(oldUri: string, newUri: string | null): boolean
    /**
     * Removes application registered with `name` from the list of applications
     * that have registered a bookmark for `uri` inside `bookmark`.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * In the event that no application with name `app_name` has registered
     * a bookmark for `uri,`  %FALSE is returned and error is set to
     * %G_BOOKMARK_FILE_ERROR_APP_NOT_REGISTERED.
     * @param uri a valid URI
     * @param name the name of the application
     */
    removeApplication(uri: string, name: string): boolean
    /**
     * Removes `group` from the list of groups to which the bookmark
     * for `uri` belongs to.
     * 
     * In the event the URI cannot be found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND.
     * In the event no group was defined, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_INVALID_VALUE.
     * @param uri a valid URI
     * @param group the group name to be removed
     */
    removeGroup(uri: string, group: string): boolean
    /**
     * Removes the bookmark for `uri` from the bookmark file `bookmark`.
     * @param uri a valid URI
     */
    removeItem(uri: string): boolean
    /**
     * Sets the time the bookmark for `uri` was added into `bookmark`.
     * 
     * If no bookmark for `uri` is found then it is created.
     * @param uri a valid URI
     * @param added a timestamp or -1 to use the current time
     */
    setAdded(uri: string, added: number): void
    /**
     * Sets the time the bookmark for `uri` was added into `bookmark`.
     * 
     * If no bookmark for `uri` is found then it is created.
     * @param uri a valid URI
     * @param added a #GDateTime
     */
    setAddedDateTime(uri: string, added: DateTime): void
    /**
     * Sets the meta-data of application `name` inside the list of
     * applications that have registered a bookmark for `uri` inside
     * `bookmark`.
     * 
     * You should rarely use this function; use g_bookmark_file_add_application()
     * and g_bookmark_file_remove_application() instead.
     * 
     * `name` can be any UTF-8 encoded string used to identify an
     * application.
     * `exec` can have one of these two modifiers: "\%f", which will
     * be expanded as the local file name retrieved from the bookmark's
     * URI; "\%u", which will be expanded as the bookmark's URI.
     * The expansion is done automatically when retrieving the stored
     * command line using the g_bookmark_file_get_application_info() function.
     * `count` is the number of times the application has registered the
     * bookmark; if is < 0, the current registration count will be increased
     * by one, if is 0, the application with `name` will be removed from
     * the list of registered applications.
     * `stamp` is the Unix time of the last registration; if it is -1, the
     * current time will be used.
     * 
     * If you try to remove an application by setting its registration count to
     * zero, and no bookmark for `uri` is found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND; similarly,
     * in the event that no application `name` has registered a bookmark
     * for `uri,`  %FALSE is returned and error is set to
     * %G_BOOKMARK_FILE_ERROR_APP_NOT_REGISTERED.  Otherwise, if no bookmark
     * for `uri` is found, one is created.
     * @param uri a valid URI
     * @param name an application's name
     * @param exec an application's command line
     * @param count the number of registrations done for this application
     * @param stamp the time of the last registration for this application
     */
    setAppInfo(uri: string, name: string, exec: string, count: number, stamp: number): boolean
    /**
     * Sets the meta-data of application `name` inside the list of
     * applications that have registered a bookmark for `uri` inside
     * `bookmark`.
     * 
     * You should rarely use this function; use g_bookmark_file_add_application()
     * and g_bookmark_file_remove_application() instead.
     * 
     * `name` can be any UTF-8 encoded string used to identify an
     * application.
     * `exec` can have one of these two modifiers: "\%f", which will
     * be expanded as the local file name retrieved from the bookmark's
     * URI; "\%u", which will be expanded as the bookmark's URI.
     * The expansion is done automatically when retrieving the stored
     * command line using the g_bookmark_file_get_application_info() function.
     * `count` is the number of times the application has registered the
     * bookmark; if is < 0, the current registration count will be increased
     * by one, if is 0, the application with `name` will be removed from
     * the list of registered applications.
     * `stamp` is the Unix time of the last registration.
     * 
     * If you try to remove an application by setting its registration count to
     * zero, and no bookmark for `uri` is found, %FALSE is returned and
     * `error` is set to %G_BOOKMARK_FILE_ERROR_URI_NOT_FOUND; similarly,
     * in the event that no application `name` has registered a bookmark
     * for `uri,`  %FALSE is returned and error is set to
     * %G_BOOKMARK_FILE_ERROR_APP_NOT_REGISTERED.  Otherwise, if no bookmark
     * for `uri` is found, one is created.
     * @param uri a valid URI
     * @param name an application's name
     * @param exec an application's command line
     * @param count the number of registrations done for this application
     * @param stamp the time of the last registration for this application,    which may be %NULL if `count` is 0
     */
    setApplicationInfo(uri: string, name: string, exec: string, count: number, stamp: DateTime | null): boolean
    /**
     * Sets `description` as the description of the bookmark for `uri`.
     * 
     * If `uri` is %NULL, the description of `bookmark` is set.
     * 
     * If a bookmark for `uri` cannot be found then it is created.
     * @param uri a valid URI or %NULL
     * @param description a string
     */
    setDescription(uri: string | null, description: string): void
    /**
     * Sets a list of group names for the item with URI `uri`.  Each previously
     * set group name list is removed.
     * 
     * If `uri` cannot be found then an item for it is created.
     * @param uri an item's URI
     * @param groups an array of    group names, or %NULL to remove all groups
     */
    setGroups(uri: string, groups: string[] | null): void
    /**
     * Sets the icon for the bookmark for `uri`. If `href` is %NULL, unsets
     * the currently set icon. `href` can either be a full URL for the icon
     * file or the icon name following the Icon Naming specification.
     * 
     * If no bookmark for `uri` is found one is created.
     * @param uri a valid URI
     * @param href the URI of the icon for the bookmark, or %NULL
     * @param mimeType the MIME type of the icon for the bookmark
     */
    setIcon(uri: string, href: string | null, mimeType: string): void
    /**
     * Sets the private flag of the bookmark for `uri`.
     * 
     * If a bookmark for `uri` cannot be found then it is created.
     * @param uri a valid URI
     * @param isPrivate %TRUE if the bookmark should be marked as private
     */
    setIsPrivate(uri: string, isPrivate: boolean): void
    /**
     * Sets `mime_type` as the MIME type of the bookmark for `uri`.
     * 
     * If a bookmark for `uri` cannot be found then it is created.
     * @param uri a valid URI
     * @param mimeType a MIME type
     */
    setMimeType(uri: string, mimeType: string): void
    /**
     * Sets the last time the bookmark for `uri` was last modified.
     * 
     * If no bookmark for `uri` is found then it is created.
     * 
     * The "modified" time should only be set when the bookmark's meta-data
     * was actually changed.  Every function of #GBookmarkFile that
     * modifies a bookmark also changes the modification time, except for
     * g_bookmark_file_set_visited_date_time().
     * @param uri a valid URI
     * @param modified a timestamp or -1 to use the current time
     */
    setModified(uri: string, modified: number): void
    /**
     * Sets the last time the bookmark for `uri` was last modified.
     * 
     * If no bookmark for `uri` is found then it is created.
     * 
     * The "modified" time should only be set when the bookmark's meta-data
     * was actually changed.  Every function of #GBookmarkFile that
     * modifies a bookmark also changes the modification time, except for
     * g_bookmark_file_set_visited_date_time().
     * @param uri a valid URI
     * @param modified a #GDateTime
     */
    setModifiedDateTime(uri: string, modified: DateTime): void
    /**
     * Sets `title` as the title of the bookmark for `uri` inside the
     * bookmark file `bookmark`.
     * 
     * If `uri` is %NULL, the title of `bookmark` is set.
     * 
     * If a bookmark for `uri` cannot be found then it is created.
     * @param uri a valid URI or %NULL
     * @param title a UTF-8 encoded string
     */
    setTitle(uri: string | null, title: string): void
    /**
     * Sets the time the bookmark for `uri` was last visited.
     * 
     * If no bookmark for `uri` is found then it is created.
     * 
     * The "visited" time should only be set if the bookmark was launched,
     * either using the command line retrieved by g_bookmark_file_get_application_info()
     * or by the default application for the bookmark's MIME type, retrieved
     * using g_bookmark_file_get_mime_type().  Changing the "visited" time
     * does not affect the "modified" time.
     * @param uri a valid URI
     * @param visited a timestamp or -1 to use the current time
     */
    setVisited(uri: string, visited: number): void
    /**
     * Sets the time the bookmark for `uri` was last visited.
     * 
     * If no bookmark for `uri` is found then it is created.
     * 
     * The "visited" time should only be set if the bookmark was launched,
     * either using the command line retrieved by g_bookmark_file_get_application_info()
     * or by the default application for the bookmark's MIME type, retrieved
     * using g_bookmark_file_get_mime_type().  Changing the "visited" time
     * does not affect the "modified" time.
     * @param uri a valid URI
     * @param visited a #GDateTime
     */
    setVisitedDateTime(uri: string, visited: DateTime): void
    /**
     * This function outputs `bookmark` as a string.
     */
    toData(): Uint8Array
    /**
     * This function outputs `bookmark` into a file.  The write process is
     * guaranteed to be atomic by using g_file_set_contents() internally.
     * @param filename path of the output file
     */
    toFile(filename: string): boolean
}

/**
 * An opaque data structure representing a set of bookmarks.
 * @record 
 */
export class BookmarkFile {

    // Own properties of GLib-2.0.GLib.BookmarkFile

    static name: string

    // Constructors of GLib-2.0.GLib.BookmarkFile

    static errorQuark(): Quark
}

export interface ByteArray {

    // Own fields of GLib-2.0.GLib.ByteArray

    /**
     * a pointer to the element data. The data may be moved as
     *     elements are added to the #GByteArray
     * @field 
     */
    data: number
    /**
     * the number of elements in the #GByteArray
     * @field 
     */
    len: number
}

/**
 * Contains the public fields of a GByteArray.
 * @record 
 */
export class ByteArray {

    // Own properties of GLib-2.0.GLib.ByteArray

    static name: string

    // Constructors of GLib-2.0.GLib.ByteArray

    /**
     * Creates a new #GByteArray with a reference count of 1.
     */
    static new(): Uint8Array
    /**
     * Create byte array containing the data. The data will be owned by the array
     * and will be freed with g_free(), i.e. it could be allocated using g_strdup().
     * 
     * Do not use it if `len` is greater than %G_MAXUINT. #GByteArray
     * stores the length of its data in #guint, which may be shorter than
     * #gsize.
     * @param data byte data for the array
     */
    static newTake(data: Uint8Array): Uint8Array
    /**
     * Frees the memory allocated by the #GByteArray. If `free_segment` is
     * %TRUE it frees the actual byte data. If the reference count of
     * `array` is greater than one, the #GByteArray wrapper is preserved but
     * the size of `array` will be set to zero.
     * @param array a #GByteArray
     * @param freeSegment if %TRUE the actual byte data is freed as well
     */
    static free(array: Uint8Array, freeSegment: boolean): number
    /**
     * Transfers the data from the #GByteArray into a new immutable #GBytes.
     * 
     * The #GByteArray is freed unless the reference count of `array` is greater
     * than one, the #GByteArray wrapper is preserved but the size of `array`
     * will be set to zero.
     * 
     * This is identical to using g_bytes_new_take() and g_byte_array_free()
     * together.
     * @param array a #GByteArray
     */
    static freeToBytes(array: Uint8Array): any
    /**
     * Frees the data in the array and resets the size to zero, while
     * the underlying array is preserved for use elsewhere and returned
     * to the caller.
     * @param array a #GByteArray.
     */
    static steal(array: Uint8Array): [ /* returnType */ number, /* len */ number ]
    /**
     * Atomically decrements the reference count of `array` by one. If the
     * reference count drops to 0, all memory allocated by the array is
     * released. This function is thread-safe and may be called from any
     * thread.
     * @param array A #GByteArray
     */
    static unref(array: Uint8Array): void
}

export interface Bytes {

    // Owm methods of GLib-2.0.GLib.Bytes

    /**
     * Compares the two #GBytes values.
     * 
     * This function can be used to sort GBytes instances in lexicographical order.
     * 
     * If `bytes1` and `bytes2` have different length but the shorter one is a
     * prefix of the longer one then the shorter one is considered to be less than
     * the longer one. Otherwise the first byte where both differ is used for
     * comparison. If `bytes1` has a smaller value at that position it is
     * considered less, otherwise greater than `bytes2`.
     * @param bytes2 a pointer to a #GBytes to compare with `bytes1`
     */
    compare(bytes2: any): number
    /**
     * Compares the two #GBytes values being pointed to and returns
     * %TRUE if they are equal.
     * 
     * This function can be passed to g_hash_table_new() as the `key_equal_func`
     * parameter, when using non-%NULL #GBytes pointers as keys in a #GHashTable.
     * @param bytes2 a pointer to a #GBytes to compare with `bytes1`
     */
    equal(bytes2: any): boolean
    /**
     * Get the byte data in the #GBytes. This data should not be modified.
     * 
     * This function will always return the same pointer for a given #GBytes.
     * 
     * %NULL may be returned if `size` is 0. This is not guaranteed, as the #GBytes
     * may represent an empty string with `data` non-%NULL and `size` as 0. %NULL will
     * not be returned if `size` is non-zero.
     */
    getData(): Uint8Array | null
    /**
     * Gets a pointer to a region in `bytes`.
     * 
     * The region starts at `offset` many bytes from the start of the data
     * and contains `n_elements` many elements of `element_size` size.
     * 
     * `n_elements` may be zero, but `element_size` must always be non-zero.
     * Ideally, `element_size` is a static constant (eg: sizeof a struct).
     * 
     * This function does careful bounds checking (including checking for
     * arithmetic overflows) and returns a non-%NULL pointer if the
     * specified region lies entirely within the `bytes`. If the region is
     * in some way out of range, or if an overflow has occurred, then %NULL
     * is returned.
     * 
     * Note: it is possible to have a valid zero-size region. In this case,
     * the returned pointer will be equal to the base pointer of the data of
     * `bytes,` plus `offset`.  This will be non-%NULL except for the case
     * where `bytes` itself was a zero-sized region.  Since it is unlikely
     * that you will be using this function to check for a zero-sized region
     * in a zero-sized `bytes,` %NULL effectively always means "error".
     * @param elementSize a non-zero element size
     * @param offset an offset to the start of the region within the `bytes`
     * @param nElements the number of elements in the region
     */
    getRegion(elementSize: number, offset: number, nElements: number): object | null
    /**
     * Get the size of the byte data in the #GBytes.
     * 
     * This function will always return the same value for a given #GBytes.
     */
    getSize(): number
    /**
     * Creates an integer hash code for the byte data in the #GBytes.
     * 
     * This function can be passed to g_hash_table_new() as the `key_hash_func`
     * parameter, when using non-%NULL #GBytes pointers as keys in a #GHashTable.
     */
    hash(): number
    /**
     * Creates a #GBytes which is a subsection of another #GBytes. The `offset` +
     * `length` may not be longer than the size of `bytes`.
     * 
     * A reference to `bytes` will be held by the newly created #GBytes until
     * the byte data is no longer needed.
     * 
     * Since 2.56, if `offset` is 0 and `length` matches the size of `bytes,` then
     * `bytes` will be returned with the reference count incremented by 1. If `bytes`
     * is a slice of another #GBytes, then the resulting #GBytes will reference
     * the same #GBytes instead of `bytes`. This allows consumers to simplify the
     * usage of #GBytes when asynchronously writing to streams.
     * @param offset offset which subsection starts at
     * @param length length of subsection
     */
    newFromBytes(offset: number, length: number): any
    /**
     * Increase the reference count on `bytes`.
     */
    ref(): any
    /**
     * Releases a reference on `bytes`.  This may result in the bytes being
     * freed. If `bytes` is %NULL, it will return immediately.
     */
    unref(): void
    /**
     * Unreferences the bytes, and returns a new mutable #GByteArray containing
     * the same byte data.
     * 
     * As an optimization, the byte data is transferred to the array without copying
     * if this was the last reference to bytes and bytes was created with
     * g_bytes_new(), g_bytes_new_take() or g_byte_array_free_to_bytes(). In all
     * other cases the data is copied.
     * 
     * Do not use it if `bytes` contains more than %G_MAXUINT
     * bytes. #GByteArray stores the length of its data in #guint, which
     * may be shorter than #gsize, that `bytes` is using.
     */
    unrefToArray(): Uint8Array
    /**
     * Unreferences the bytes, and returns a pointer the same byte data
     * contents.
     * 
     * As an optimization, the byte data is returned without copying if this was
     * the last reference to bytes and bytes was created with g_bytes_new(),
     * g_bytes_new_take() or g_byte_array_free_to_bytes(). In all other cases the
     * data is copied.
     */
    unrefToData(): Uint8Array
}

/**
 * A simple refcounted data type representing an immutable sequence of zero or
 * more bytes from an unspecified origin.
 * 
 * The purpose of a #GBytes is to keep the memory region that it holds
 * alive for as long as anyone holds a reference to the bytes.  When
 * the last reference count is dropped, the memory is released. Multiple
 * unrelated callers can use byte data in the #GBytes without coordinating
 * their activities, resting assured that the byte data will not change or
 * move while they hold a reference.
 * 
 * A #GBytes can come from many different origins that may have
 * different procedures for freeing the memory region.  Examples are
 * memory from g_malloc(), from memory slices, from a #GMappedFile or
 * memory from other allocators.
 * 
 * #GBytes work well as keys in #GHashTable. Use g_bytes_equal() and
 * g_bytes_hash() as parameters to g_hash_table_new() or g_hash_table_new_full().
 * #GBytes can also be used as keys in a #GTree by passing the g_bytes_compare()
 * function to g_tree_new().
 * 
 * The data pointed to by this bytes must not be modified. For a mutable
 * array of bytes see #GByteArray. Use g_bytes_unref_to_array() to create a
 * mutable array for a #GBytes sequence. To create an immutable #GBytes from
 * a mutable #GByteArray, use the g_byte_array_free_to_bytes() function.
 * @record 
 */
export class Bytes {

    // Own properties of GLib-2.0.GLib.Bytes

    static name: string

    // Constructors of GLib-2.0.GLib.Bytes

    /**
     * Creates a new #GBytes from `data`.
     * 
     * `data` is copied. If `size` is 0, `data` may be %NULL.
     * @constructor 
     * @param data         the data to be used for the bytes
     */
    constructor(data: Uint8Array | null) 
    /**
     * Creates a new #GBytes from `data`.
     * 
     * `data` is copied. If `size` is 0, `data` may be %NULL.
     * @constructor 
     * @param data         the data to be used for the bytes
     */
    static new(data: Uint8Array | null): Bytes
    /**
     * Creates a new #GBytes from `data`.
     * 
     * After this call, `data` belongs to the bytes and may no longer be
     * modified by the caller.  g_free() will be called on `data` when the
     * bytes is no longer in use. Because of this `data` must have been created by
     * a call to g_malloc(), g_malloc0() or g_realloc() or by one of the many
     * functions that wrap these calls (such as g_new(), g_strdup(), etc).
     * 
     * For creating #GBytes with memory from other allocators, see
     * g_bytes_new_with_free_func().
     * 
     * `data` may be %NULL if `size` is 0.
     * @constructor 
     * @param data         the data to be used for the bytes
     */
    static newTake(data: Uint8Array | null): Bytes
}

export interface Checksum {

    // Owm methods of GLib-2.0.GLib.Checksum

    /**
     * Copies a #GChecksum. If `checksum` has been closed, by calling
     * g_checksum_get_string() or g_checksum_get_digest(), the copied
     * checksum will be closed as well.
     */
    copy(): Checksum
    /**
     * Frees the memory allocated for `checksum`.
     */
    free(): void
    /**
     * Gets the digest as a hexadecimal string.
     * 
     * Once this function has been called the #GChecksum can no longer be
     * updated with g_checksum_update().
     * 
     * The hexadecimal characters will be lower case.
     */
    getString(): string
    /**
     * Resets the state of the `checksum` back to its initial state.
     */
    reset(): void
    /**
     * Feeds `data` into an existing #GChecksum. The checksum must still be
     * open, that is g_checksum_get_string() or g_checksum_get_digest() must
     * not have been called on `checksum`.
     * @param data buffer used to compute the checksum
     */
    update(data: Uint8Array): void
}

/**
 * An opaque structure representing a checksumming operation.
 * 
 * To create a new GChecksum, use g_checksum_new(). To free
 * a GChecksum, use g_checksum_free().
 * @record 
 */
export class Checksum {

    // Own properties of GLib-2.0.GLib.Checksum

    static name: string

    // Constructors of GLib-2.0.GLib.Checksum

    /**
     * Creates a new #GChecksum, using the checksum algorithm `checksum_type`.
     * If the `checksum_type` is not known, %NULL is returned.
     * A #GChecksum can be used to compute the checksum, or digest, of an
     * arbitrary binary blob, using different hashing algorithms.
     * 
     * A #GChecksum works by feeding a binary blob through g_checksum_update()
     * until there is data to be checked; the digest can then be extracted
     * using g_checksum_get_string(), which will return the checksum as a
     * hexadecimal string; or g_checksum_get_digest(), which will return a
     * vector of raw bytes. Once either g_checksum_get_string() or
     * g_checksum_get_digest() have been called on a #GChecksum, the checksum
     * will be closed and it won't be possible to call g_checksum_update()
     * on it anymore.
     * @constructor 
     * @param checksumType the desired type of checksum
     */
    constructor(checksumType: ChecksumType) 
    /**
     * Creates a new #GChecksum, using the checksum algorithm `checksum_type`.
     * If the `checksum_type` is not known, %NULL is returned.
     * A #GChecksum can be used to compute the checksum, or digest, of an
     * arbitrary binary blob, using different hashing algorithms.
     * 
     * A #GChecksum works by feeding a binary blob through g_checksum_update()
     * until there is data to be checked; the digest can then be extracted
     * using g_checksum_get_string(), which will return the checksum as a
     * hexadecimal string; or g_checksum_get_digest(), which will return a
     * vector of raw bytes. Once either g_checksum_get_string() or
     * g_checksum_get_digest() have been called on a #GChecksum, the checksum
     * will be closed and it won't be possible to call g_checksum_update()
     * on it anymore.
     * @constructor 
     * @param checksumType the desired type of checksum
     */
    static new(checksumType: ChecksumType): Checksum
    /**
     * Gets the length in bytes of digests of type `checksum_type`
     * @param checksumType a #GChecksumType
     */
    static typeGetLength(checksumType: ChecksumType): number
}

export interface Cond {

    // Owm methods of GLib-2.0.GLib.Cond

    /**
     * If threads are waiting for `cond,` all of them are unblocked.
     * If no threads are waiting for `cond,` this function has no effect.
     * It is good practice to lock the same mutex as the waiting threads
     * while calling this function, though not required.
     */
    broadcast(): void
    /**
     * Frees the resources allocated to a #GCond with g_cond_init().
     * 
     * This function should not be used with a #GCond that has been
     * statically allocated.
     * 
     * Calling g_cond_clear() for a #GCond on which threads are
     * blocking leads to undefined behaviour.
     */
    clear(): void
    /**
     * Initialises a #GCond so that it can be used.
     * 
     * This function is useful to initialise a #GCond that has been
     * allocated as part of a larger structure.  It is not necessary to
     * initialise a #GCond that has been statically allocated.
     * 
     * To undo the effect of g_cond_init() when a #GCond is no longer
     * needed, use g_cond_clear().
     * 
     * Calling g_cond_init() on an already-initialised #GCond leads
     * to undefined behaviour.
     */
    init(): void
    /**
     * If threads are waiting for `cond,` at least one of them is unblocked.
     * If no threads are waiting for `cond,` this function has no effect.
     * It is good practice to hold the same lock as the waiting thread
     * while calling this function, though not required.
     */
    signal(): void
    /**
     * Atomically releases `mutex` and waits until `cond` is signalled.
     * When this function returns, `mutex` is locked again and owned by the
     * calling thread.
     * 
     * When using condition variables, it is possible that a spurious wakeup
     * may occur (ie: g_cond_wait() returns even though g_cond_signal() was
     * not called).  It's also possible that a stolen wakeup may occur.
     * This is when g_cond_signal() is called, but another thread acquires
     * `mutex` before this thread and modifies the state of the program in
     * such a way that when g_cond_wait() is able to return, the expected
     * condition is no longer met.
     * 
     * For this reason, g_cond_wait() must always be used in a loop.  See
     * the documentation for #GCond for a complete example.
     * @param mutex a #GMutex that is currently locked
     */
    wait(mutex: Mutex): void
    /**
     * Waits until either `cond` is signalled or `end_time` has passed.
     * 
     * As with g_cond_wait() it is possible that a spurious or stolen wakeup
     * could occur.  For that reason, waiting on a condition variable should
     * always be in a loop, based on an explicitly-checked predicate.
     * 
     * %TRUE is returned if the condition variable was signalled (or in the
     * case of a spurious wakeup).  %FALSE is returned if `end_time` has
     * passed.
     * 
     * The following code shows how to correctly perform a timed wait on a
     * condition variable (extending the example presented in the
     * documentation for #GCond):
     * 
     * 
     * ```c
     * gpointer
     * pop_data_timed (void)
     * {
     *   gint64 end_time;
     *   gpointer data;
     * 
     *   g_mutex_lock (&data_mutex);
     * 
     *   end_time = g_get_monotonic_time () + 5 * G_TIME_SPAN_SECOND;
     *   while (!current_data)
     *     if (!g_cond_wait_until (&data_cond, &data_mutex, end_time))
     *       {
     *         // timeout has passed.
     *         g_mutex_unlock (&data_mutex);
     *         return NULL;
     *       }
     * 
     *   // there is data for us
     *   data = current_data;
     *   current_data = NULL;
     * 
     *   g_mutex_unlock (&data_mutex);
     * 
     *   return data;
     * }
     * ```
     * 
     * 
     * Notice that the end time is calculated once, before entering the
     * loop and reused.  This is the motivation behind the use of absolute
     * time on this API -- if a relative time of 5 seconds were passed
     * directly to the call and a spurious wakeup occurred, the program would
     * have to start over waiting again (which would lead to a total wait
     * time of more than 5 seconds).
     * @param mutex a #GMutex that is currently locked
     * @param endTime the monotonic time to wait until
     */
    waitUntil(mutex: Mutex, endTime: number): boolean
}

/**
 * The #GCond struct is an opaque data structure that represents a
 * condition. Threads can block on a #GCond if they find a certain
 * condition to be false. If other threads change the state of this
 * condition they signal the #GCond, and that causes the waiting
 * threads to be woken up.
 * 
 * Consider the following example of a shared variable.  One or more
 * threads can wait for data to be published to the variable and when
 * another thread publishes the data, it can signal one of the waiting
 * threads to wake up to collect the data.
 * 
 * Here is an example for using GCond to block a thread until a condition
 * is satisfied:
 * 
 * ```c
 *   gpointer current_data = NULL;
 *   GMutex data_mutex;
 *   GCond data_cond;
 * 
 *   void
 *   push_data (gpointer data)
 *   {
 *     g_mutex_lock (&data_mutex);
 *     current_data = data;
 *     g_cond_signal (&data_cond);
 *     g_mutex_unlock (&data_mutex);
 *   }
 * 
 *   gpointer
 *   pop_data (void)
 *   {
 *     gpointer data;
 * 
 *     g_mutex_lock (&data_mutex);
 *     while (!current_data)
 *       g_cond_wait (&data_cond, &data_mutex);
 *     data = current_data;
 *     current_data = NULL;
 *     g_mutex_unlock (&data_mutex);
 * 
 *     return data;
 *   }
 * ```
 * 
 * Whenever a thread calls pop_data() now, it will wait until
 * current_data is non-%NULL, i.e. until some other thread
 * has called push_data().
 * 
 * The example shows that use of a condition variable must always be
 * paired with a mutex.  Without the use of a mutex, there would be a
 * race between the check of `current_data` by the while loop in
 * pop_data() and waiting. Specifically, another thread could set
 * `current_data` after the check, and signal the cond (with nobody
 * waiting on it) before the first thread goes to sleep. #GCond is
 * specifically useful for its ability to release the mutex and go
 * to sleep atomically.
 * 
 * It is also important to use the g_cond_wait() and g_cond_wait_until()
 * functions only inside a loop which checks for the condition to be
 * true.  See g_cond_wait() for an explanation of why the condition may
 * not be true even after it returns.
 * 
 * If a #GCond is allocated in static storage then it can be used
 * without initialisation.  Otherwise, you should call g_cond_init()
 * on it and g_cond_clear() when done.
 * 
 * A #GCond should only be accessed via the g_cond_ functions.
 * @record 
 */
export class Cond {

    // Own properties of GLib-2.0.GLib.Cond

    static name: string
}

export interface Data {
}

/**
 * An opaque data structure that represents a keyed data list.
 * 
 * See also: [Keyed data lists][glib-Keyed-Data-Lists].
 * @record 
 */
export class Data {

    // Own properties of GLib-2.0.GLib.Data

    static name: string
}

export interface Date {

    // Own fields of GLib-2.0.GLib.Date

    /**
     * the Julian representation of the date
     * @field 
     */
    julianDays: number
    /**
     * this bit is set if `julian_days` is valid
     * @field 
     */
    julian: number
    /**
     * this is set if `day,` `month` and `year` are valid
     * @field 
     */
    dmy: number
    /**
     * the day of the day-month-year representation of the date,
     *   as a number between 1 and 31
     * @field 
     */
    day: number
    /**
     * the day of the day-month-year representation of the date,
     *   as a number between 1 and 12
     * @field 
     */
    month: number
    /**
     * the day of the day-month-year representation of the date
     * @field 
     */
    year: number

    // Owm methods of GLib-2.0.GLib.Date

    /**
     * Increments a date some number of days.
     * To move forward by weeks, add weeks*7 days.
     * The date must be valid.
     * @param nDays number of days to move the date forward
     */
    addDays(nDays: number): void
    /**
     * Increments a date by some number of months.
     * If the day of the month is greater than 28,
     * this routine may change the day of the month
     * (because the destination month may not have
     * the current day in it). The date must be valid.
     * @param nMonths number of months to move forward
     */
    addMonths(nMonths: number): void
    /**
     * Increments a date by some number of years.
     * If the date is February 29, and the destination
     * year is not a leap year, the date will be changed
     * to February 28. The date must be valid.
     * @param nYears number of years to move forward
     */
    addYears(nYears: number): void
    /**
     * If `date` is prior to `min_date,` sets `date` equal to `min_date`.
     * If `date` falls after `max_date,` sets `date` equal to `max_date`.
     * Otherwise, `date` is unchanged.
     * Either of `min_date` and `max_date` may be %NULL.
     * All non-%NULL dates must be valid.
     * @param minDate minimum accepted value for `date`
     * @param maxDate maximum accepted value for `date`
     */
    clamp(minDate: Date, maxDate: Date): void
    /**
     * Initializes one or more #GDate structs to a safe but invalid
     * state. The cleared dates will not represent an existing date, but will
     * not contain garbage. Useful to init a date declared on the stack.
     * Validity can be tested with g_date_valid().
     * @param nDates number of dates to clear
     */
    clear(nDates: number): void
    /**
     * qsort()-style comparison function for dates.
     * Both dates must be valid.
     * @param rhs second date to compare
     */
    compare(rhs: Date): number
    /**
     * Copies a GDate to a newly-allocated GDate. If the input was invalid
     * (as determined by g_date_valid()), the invalid state will be copied
     * as is into the new object.
     */
    copy(): Date
    /**
     * Computes the number of days between two dates.
     * If `date2` is prior to `date1`, the returned value is negative.
     * Both dates must be valid.
     * @param date2 the second date
     */
    daysBetween(date2: Date): number
    /**
     * Frees a #GDate returned from g_date_new().
     */
    free(): void
    /**
     * Returns the day of the month. The date must be valid.
     */
    getDay(): DateDay
    /**
     * Returns the day of the year, where Jan 1 is the first day of the
     * year. The date must be valid.
     */
    getDayOfYear(): number
    /**
     * Returns the week of the year, where weeks are interpreted according
     * to ISO 8601.
     */
    getIso8601WeekOfYear(): number
    /**
     * Returns the Julian day or "serial number" of the #GDate. The
     * Julian day is simply the number of days since January 1, Year 1; i.e.,
     * January 1, Year 1 is Julian day 1; January 2, Year 1 is Julian day 2,
     * etc. The date must be valid.
     */
    getJulian(): number
    /**
     * Returns the week of the year, where weeks are understood to start on
     * Monday. If the date is before the first Monday of the year, return 0.
     * The date must be valid.
     */
    getMondayWeekOfYear(): number
    /**
     * Returns the month of the year. The date must be valid.
     */
    getMonth(): DateMonth
    /**
     * Returns the week of the year during which this date falls, if
     * weeks are understood to begin on Sunday. The date must be valid.
     * Can return 0 if the day is before the first Sunday of the year.
     */
    getSundayWeekOfYear(): number
    /**
     * Returns the day of the week for a #GDate. The date must be valid.
     */
    getWeekday(): DateWeekday
    /**
     * Returns the year of a #GDate. The date must be valid.
     */
    getYear(): DateYear
    /**
     * Returns %TRUE if the date is on the first of a month.
     * The date must be valid.
     */
    isFirstOfMonth(): boolean
    /**
     * Returns %TRUE if the date is the last day of the month.
     * The date must be valid.
     */
    isLastOfMonth(): boolean
    /**
     * Checks if `date1` is less than or equal to `date2`,
     * and swap the values if this is not the case.
     * @param date2 the second date
     */
    order(date2: Date): void
    /**
     * Sets the day of the month for a #GDate. If the resulting
     * day-month-year triplet is invalid, the date will be invalid.
     * @param day day to set
     */
    setDay(day: DateDay): void
    /**
     * Sets the value of a #GDate from a day, month, and year.
     * The day-month-year triplet must be valid; if you aren't
     * sure it is, call g_date_valid_dmy() to check before you
     * set it.
     * @param day day
     * @param month month
     * @param y year
     */
    setDmy(day: DateDay, month: DateMonth, y: DateYear): void
    /**
     * Sets the value of a #GDate from a Julian day number.
     * @param julianDate Julian day number (days since January 1, Year 1)
     */
    setJulian(julianDate: number): void
    /**
     * Sets the month of the year for a #GDate.  If the resulting
     * day-month-year triplet is invalid, the date will be invalid.
     * @param month month to set
     */
    setMonth(month: DateMonth): void
    /**
     * Parses a user-inputted string `str,` and try to figure out what date it
     * represents, taking the [current locale][setlocale] into account. If the
     * string is successfully parsed, the date will be valid after the call.
     * Otherwise, it will be invalid. You should check using g_date_valid()
     * to see whether the parsing succeeded.
     * 
     * This function is not appropriate for file formats and the like; it
     * isn't very precise, and its exact behavior varies with the locale.
     * It's intended to be a heuristic routine that guesses what the user
     * means by a given string (and it does work pretty well in that
     * capacity).
     * @param str string to parse
     */
    setParse(str: string): void
    /**
     * Sets the value of a date from a #GTime value.
     * The time to date conversion is done using the user's current timezone.
     * @param time #GTime value to set.
     */
    setTime(time: Time): void
    /**
     * Sets the value of a date to the date corresponding to a time
     * specified as a time_t. The time to date conversion is done using
     * the user's current timezone.
     * 
     * To set the value of a date to the current day, you could write:
     * 
     * ```c
     *  time_t now = time (NULL);
     *  if (now == (time_t) -1)
     *    // handle the error
     *  g_date_set_time_t (date, now);
     * ```
     * 
     * @param timet time_t value to set
     */
    setTimeT(timet: number): void
    /**
     * Sets the value of a date from a #GTimeVal value.  Note that the
     * `tv_usec` member is ignored, because #GDate can't make use of the
     * additional precision.
     * 
     * The time to date conversion is done using the user's current timezone.
     * @param timeval #GTimeVal value to set
     */
    setTimeVal(timeval: TimeVal): void
    /**
     * Sets the year for a #GDate. If the resulting day-month-year
     * triplet is invalid, the date will be invalid.
     * @param year year to set
     */
    setYear(year: DateYear): void
    /**
     * Moves a date some number of days into the past.
     * To move by weeks, just move by weeks*7 days.
     * The date must be valid.
     * @param nDays number of days to move
     */
    subtractDays(nDays: number): void
    /**
     * Moves a date some number of months into the past.
     * If the current day of the month doesn't exist in
     * the destination month, the day of the month
     * may change. The date must be valid.
     * @param nMonths number of months to move
     */
    subtractMonths(nMonths: number): void
    /**
     * Moves a date some number of years into the past.
     * If the current day doesn't exist in the destination
     * year (i.e. it's February 29 and you move to a non-leap-year)
     * then the day is changed to February 29. The date
     * must be valid.
     * @param nYears number of years to move
     */
    subtractYears(nYears: number): void
    /**
     * Fills in the date-related bits of a struct tm using the `date` value.
     * Initializes the non-date parts with something safe but meaningless.
     * @param tm struct tm to fill
     */
    toStructTm(tm: object): void
    /**
     * Returns %TRUE if the #GDate represents an existing day. The date must not
     * contain garbage; it should have been initialized with g_date_clear()
     * if it wasn't allocated by one of the g_date_new() variants.
     */
    valid(): boolean
}

/**
 * Represents a day between January 1, Year 1 and a few thousand years in
 * the future. None of its members should be accessed directly.
 * 
 * If the `GDate` is obtained from g_date_new(), it will be safe
 * to mutate but invalid and thus not safe for calendrical computations.
 * 
 * If it's declared on the stack, it will contain garbage so must be
 * initialized with g_date_clear(). g_date_clear() makes the date invalid
 * but safe. An invalid date doesn't represent a day, it's "empty." A date
 * becomes valid after you set it to a Julian day or you set a day, month,
 * and year.
 * @record 
 */
export class Date {

    // Own properties of GLib-2.0.GLib.Date

    static name: string

    // Constructors of GLib-2.0.GLib.Date

    /**
     * Allocates a #GDate and initializes
     * it to a safe state. The new date will
     * be cleared (as if you'd called g_date_clear()) but invalid (it won't
     * represent an existing day). Free the return value with g_date_free().
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a #GDate and initializes
     * it to a safe state. The new date will
     * be cleared (as if you'd called g_date_clear()) but invalid (it won't
     * represent an existing day). Free the return value with g_date_free().
     * @constructor 
     */
    static new(): Date
    /**
     * Create a new #GDate representing the given day-month-year triplet.
     * 
     * The triplet you pass in must represent a valid date. Use g_date_valid_dmy()
     * if needed to validate it. The returned #GDate is guaranteed to be non-%NULL
     * and valid.
     * @constructor 
     * @param day day of the month
     * @param month month of the year
     * @param year year
     */
    static newDmy(day: DateDay, month: DateMonth, year: DateYear): Date
    /**
     * Create a new #GDate representing the given Julian date.
     * 
     * The `julian_day` you pass in must be valid. Use g_date_valid_julian() if
     * needed to validate it. The returned #GDate is guaranteed to be non-%NULL and
     * valid.
     * @constructor 
     * @param julianDay days since January 1, Year 1
     */
    static newJulian(julianDay: number): Date
    /**
     * Returns the number of days in a month, taking leap
     * years into account.
     * @param month month
     * @param year year
     */
    static getDaysInMonth(month: DateMonth, year: DateYear): number
    /**
     * Returns the number of weeks in the year, where weeks
     * are taken to start on Monday. Will be 52 or 53. The
     * date must be valid. (Years always have 52 7-day periods,
     * plus 1 or 2 extra days depending on whether it's a leap
     * year. This function is basically telling you how many
     * Mondays are in the year, i.e. there are 53 Mondays if
     * one of the extra days happens to be a Monday.)
     * @param year a year
     */
    static getMondayWeeksInYear(year: DateYear): number
    /**
     * Returns the number of weeks in the year, where weeks
     * are taken to start on Sunday. Will be 52 or 53. The
     * date must be valid. (Years always have 52 7-day periods,
     * plus 1 or 2 extra days depending on whether it's a leap
     * year. This function is basically telling you how many
     * Sundays are in the year, i.e. there are 53 Sundays if
     * one of the extra days happens to be a Sunday.)
     * @param year year to count weeks in
     */
    static getSundayWeeksInYear(year: DateYear): number
    /**
     * Returns %TRUE if the year is a leap year.
     * 
     * For the purposes of this function, leap year is every year
     * divisible by 4 unless that year is divisible by 100. If it
     * is divisible by 100 it would be a leap year only if that year
     * is also divisible by 400.
     * @param year year to check
     */
    static isLeapYear(year: DateYear): boolean
    /**
     * Generates a printed representation of the date, in a
     * [locale][setlocale]-specific way.
     * Works just like the platform's C library strftime() function,
     * but only accepts date-related formats; time-related formats
     * give undefined results. Date must be valid. Unlike strftime()
     * (which uses the locale encoding), works on a UTF-8 format
     * string and stores a UTF-8 result.
     * 
     * This function does not provide any conversion specifiers in
     * addition to those implemented by the platform's C library.
     * For example, don't expect that using g_date_strftime() would
     * make the \%F provided by the C99 strftime() work on Windows
     * where the C library only complies to C89.
     * @param s destination buffer
     * @param slen buffer size
     * @param format format string
     * @param date valid #GDate
     */
    static strftime(s: string, slen: number, format: string, date: Date): number
    /**
     * Returns %TRUE if the day of the month is valid (a day is valid if it's
     * between 1 and 31 inclusive).
     * @param day day to check
     */
    static validDay(day: DateDay): boolean
    /**
     * Returns %TRUE if the day-month-year triplet forms a valid, existing day
     * in the range of days #GDate understands (Year 1 or later, no more than
     * a few thousand years in the future).
     * @param day day
     * @param month month
     * @param year year
     */
    static validDmy(day: DateDay, month: DateMonth, year: DateYear): boolean
    /**
     * Returns %TRUE if the Julian day is valid. Anything greater than zero
     * is basically a valid Julian, though there is a 32-bit limit.
     * @param julianDate Julian day to check
     */
    static validJulian(julianDate: number): boolean
    /**
     * Returns %TRUE if the month value is valid. The 12 #GDateMonth
     * enumeration values are the only valid months.
     * @param month month
     */
    static validMonth(month: DateMonth): boolean
    /**
     * Returns %TRUE if the weekday is valid. The seven #GDateWeekday enumeration
     * values are the only valid weekdays.
     * @param weekday weekday
     */
    static validWeekday(weekday: DateWeekday): boolean
    /**
     * Returns %TRUE if the year is valid. Any year greater than 0 is valid,
     * though there is a 16-bit limit to what #GDate will understand.
     * @param year year
     */
    static validYear(year: DateYear): boolean
}

export interface DateTime {

    // Owm methods of GLib-2.0.GLib.DateTime

    /**
     * Creates a copy of `datetime` and adds the specified timespan to the copy.
     * @param timespan a #GTimeSpan
     */
    add(timespan: TimeSpan): DateTime | null
    /**
     * Creates a copy of `datetime` and adds the specified number of days to the
     * copy. Add negative values to subtract days.
     * @param days the number of days
     */
    addDays(days: number): DateTime | null
    /**
     * Creates a new #GDateTime adding the specified values to the current date and
     * time in `datetime`. Add negative values to subtract.
     * @param years the number of years to add
     * @param months the number of months to add
     * @param days the number of days to add
     * @param hours the number of hours to add
     * @param minutes the number of minutes to add
     * @param seconds the number of seconds to add
     */
    addFull(years: number, months: number, days: number, hours: number, minutes: number, seconds: number): DateTime | null
    /**
     * Creates a copy of `datetime` and adds the specified number of hours.
     * Add negative values to subtract hours.
     * @param hours the number of hours to add
     */
    addHours(hours: number): DateTime | null
    /**
     * Creates a copy of `datetime` adding the specified number of minutes.
     * Add negative values to subtract minutes.
     * @param minutes the number of minutes to add
     */
    addMinutes(minutes: number): DateTime | null
    /**
     * Creates a copy of `datetime` and adds the specified number of months to the
     * copy. Add negative values to subtract months.
     * 
     * The day of the month of the resulting #GDateTime is clamped to the number
     * of days in the updated calendar month. For example, if adding 1 month to
     * 31st January 2018, the result would be 28th February 2018. In 2020 (a leap
     * year), the result would be 29th February.
     * @param months the number of months
     */
    addMonths(months: number): DateTime | null
    /**
     * Creates a copy of `datetime` and adds the specified number of seconds.
     * Add negative values to subtract seconds.
     * @param seconds the number of seconds to add
     */
    addSeconds(seconds: number): DateTime | null
    /**
     * Creates a copy of `datetime` and adds the specified number of weeks to the
     * copy. Add negative values to subtract weeks.
     * @param weeks the number of weeks
     */
    addWeeks(weeks: number): DateTime | null
    /**
     * Creates a copy of `datetime` and adds the specified number of years to the
     * copy. Add negative values to subtract years.
     * 
     * As with g_date_time_add_months(), if the resulting date would be 29th
     * February on a non-leap year, the day will be clamped to 28th February.
     * @param years the number of years
     */
    addYears(years: number): DateTime | null
    /**
     * A comparison function for #GDateTimes that is suitable
     * as a #GCompareFunc. Both #GDateTimes must be non-%NULL.
     * @param dt2 second #GDateTime to compare
     */
    compare(dt2: DateTime): number
    /**
     * Calculates the difference in time between `end` and `begin`.  The
     * #GTimeSpan that is returned is effectively `end` - `begin` (ie:
     * positive if the first parameter is larger).
     * @param begin a #GDateTime
     */
    difference(begin: DateTime): TimeSpan
    /**
     * Checks to see if `dt1` and `dt2` are equal.
     * 
     * Equal here means that they represent the same moment after converting
     * them to the same time zone.
     * @param dt2 a #GDateTime
     */
    equal(dt2: DateTime): boolean
    /**
     * Creates a newly allocated string representing the requested `format`.
     * 
     * The format strings understood by this function are a subset of the
     * strftime() format language as specified by C99.  The \%D, \%U and \%W
     * conversions are not supported, nor is the 'E' modifier.  The GNU
     * extensions \%k, \%l, \%s and \%P are supported, however, as are the
     * '0', '_' and '-' modifiers. The Python extension \%f is also supported.
     * 
     * In contrast to strftime(), this function always produces a UTF-8
     * string, regardless of the current locale.  Note that the rendering of
     * many formats is locale-dependent and may not match the strftime()
     * output exactly.
     * 
     * The following format specifiers are supported:
     * 
     * - \%a: the abbreviated weekday name according to the current locale
     * - \%A: the full weekday name according to the current locale
     * - \%b: the abbreviated month name according to the current locale
     * - \%B: the full month name according to the current locale
     * - \%c: the preferred date and time representation for the current locale
     * - \%C: the century number (year/100) as a 2-digit integer (00-99)
     * - \%d: the day of the month as a decimal number (range 01 to 31)
     * - \%e: the day of the month as a decimal number (range  1 to 31)
     * - \%F: equivalent to `%Y-%m-%d` (the ISO 8601 date format)
     * - \%g: the last two digits of the ISO 8601 week-based year as a
     *   decimal number (00-99). This works well with \%V and \%u.
     * - \%G: the ISO 8601 week-based year as a decimal number. This works
     *   well with \%V and \%u.
     * - \%h: equivalent to \%b
     * - \%H: the hour as a decimal number using a 24-hour clock (range 00 to 23)
     * - \%I: the hour as a decimal number using a 12-hour clock (range 01 to 12)
     * - \%j: the day of the year as a decimal number (range 001 to 366)
     * - \%k: the hour (24-hour clock) as a decimal number (range 0 to 23);
     *   single digits are preceded by a blank
     * - \%l: the hour (12-hour clock) as a decimal number (range 1 to 12);
     *   single digits are preceded by a blank
     * - \%m: the month as a decimal number (range 01 to 12)
     * - \%M: the minute as a decimal number (range 00 to 59)
     * - \%f: the microsecond as a decimal number (range 000000 to 999999)
     * - \%p: either "AM" or "PM" according to the given time value, or the
     *   corresponding  strings for the current locale.  Noon is treated as
     *   "PM" and midnight as "AM". Use of this format specifier is discouraged, as
     *   many locales have no concept of AM/PM formatting. Use \%c or \%X instead.
     * - \%P: like \%p but lowercase: "am" or "pm" or a corresponding string for
     *   the current locale. Use of this format specifier is discouraged, as
     *   many locales have no concept of AM/PM formatting. Use \%c or \%X instead.
     * - \%r: the time in a.m. or p.m. notation. Use of this format specifier is
     *   discouraged, as many locales have no concept of AM/PM formatting. Use \%c
     *   or \%X instead.
     * - \%R: the time in 24-hour notation (\%H:\%M)
     * - \%s: the number of seconds since the Epoch, that is, since 1970-01-01
     *   00:00:00 UTC
     * - \%S: the second as a decimal number (range 00 to 60)
     * - \%t: a tab character
     * - \%T: the time in 24-hour notation with seconds (\%H:\%M:\%S)
     * - \%u: the ISO 8601 standard day of the week as a decimal, range 1 to 7,
     *    Monday being 1. This works well with \%G and \%V.
     * - \%V: the ISO 8601 standard week number of the current year as a decimal
     *   number, range 01 to 53, where week 1 is the first week that has at
     *   least 4 days in the new year. See g_date_time_get_week_of_year().
     *   This works well with \%G and \%u.
     * - \%w: the day of the week as a decimal, range 0 to 6, Sunday being 0.
     *   This is not the ISO 8601 standard format -- use \%u instead.
     * - \%x: the preferred date representation for the current locale without
     *   the time
     * - \%X: the preferred time representation for the current locale without
     *   the date
     * - \%y: the year as a decimal number without the century
     * - \%Y: the year as a decimal number including the century
     * - \%z: the time zone as an offset from UTC (+hhmm)
     * - \%:z: the time zone as an offset from UTC (+hh:mm).
     *   This is a gnulib strftime() extension. Since: 2.38
     * - \%::z: the time zone as an offset from UTC (+hh:mm:ss). This is a
     *   gnulib strftime() extension. Since: 2.38
     * - \%:::z: the time zone as an offset from UTC, with : to necessary
     *   precision (e.g., -04, +05:30). This is a gnulib strftime() extension. Since: 2.38
     * - \%Z: the time zone or name or abbreviation
     * - \%\%: a literal \% character
     * 
     * Some conversion specifications can be modified by preceding the
     * conversion specifier by one or more modifier characters. The
     * following modifiers are supported for many of the numeric
     * conversions:
     * 
     * - O: Use alternative numeric symbols, if the current locale supports those.
     * - _: Pad a numeric result with spaces. This overrides the default padding
     *   for the specifier.
     * - -: Do not pad a numeric result. This overrides the default padding
     *   for the specifier.
     * - 0: Pad a numeric result with zeros. This overrides the default padding
     *   for the specifier.
     * 
     * Additionally, when O is used with B, b, or h, it produces the alternative
     * form of a month name. The alternative form should be used when the month
     * name is used without a day number (e.g., standalone). It is required in
     * some languages (Baltic, Slavic, Greek, and more) due to their grammatical
     * rules. For other languages there is no difference. \%OB is a GNU and BSD
     * strftime() extension expected to be added to the future POSIX specification,
     * \%Ob and \%Oh are GNU strftime() extensions. Since: 2.56
     * @param format a valid UTF-8 string, containing the format for the          #GDateTime
     */
    format(format: string): string | null
    /**
     * Format `datetime` in [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601),
     * including the date, time and time zone, and return that as a UTF-8 encoded
     * string.
     * 
     * Since GLib 2.66, this will output to sub-second precision if needed.
     */
    formatIso8601(): string | null
    /**
     * Retrieves the day of the month represented by `datetime` in the gregorian
     * calendar.
     */
    getDayOfMonth(): number
    /**
     * Retrieves the ISO 8601 day of the week on which `datetime` falls (1 is
     * Monday, 2 is Tuesday... 7 is Sunday).
     */
    getDayOfWeek(): number
    /**
     * Retrieves the day of the year represented by `datetime` in the Gregorian
     * calendar.
     */
    getDayOfYear(): number
    /**
     * Retrieves the hour of the day represented by `datetime`
     */
    getHour(): number
    /**
     * Retrieves the microsecond of the date represented by `datetime`
     */
    getMicrosecond(): number
    /**
     * Retrieves the minute of the hour represented by `datetime`
     */
    getMinute(): number
    /**
     * Retrieves the month of the year represented by `datetime` in the Gregorian
     * calendar.
     */
    getMonth(): number
    /**
     * Retrieves the second of the minute represented by `datetime`
     */
    getSecond(): number
    /**
     * Retrieves the number of seconds since the start of the last minute,
     * including the fractional part.
     */
    getSeconds(): number
    /**
     * Get the time zone for this `datetime`.
     */
    getTimezone(): TimeZone
    /**
     * Determines the time zone abbreviation to be used at the time and in
     * the time zone of `datetime`.
     * 
     * For example, in Toronto this is currently "EST" during the winter
     * months and "EDT" during the summer months when daylight savings
     * time is in effect.
     */
    getTimezoneAbbreviation(): string
    /**
     * Determines the offset to UTC in effect at the time and in the time
     * zone of `datetime`.
     * 
     * The offset is the number of microseconds that you add to UTC time to
     * arrive at local time for the time zone (ie: negative numbers for time
     * zones west of GMT, positive numbers for east).
     * 
     * If `datetime` represents UTC time, then the offset is always zero.
     */
    getUtcOffset(): TimeSpan
    /**
     * Returns the ISO 8601 week-numbering year in which the week containing
     * `datetime` falls.
     * 
     * This function, taken together with g_date_time_get_week_of_year() and
     * g_date_time_get_day_of_week() can be used to determine the full ISO
     * week date on which `datetime` falls.
     * 
     * This is usually equal to the normal Gregorian year (as returned by
     * g_date_time_get_year()), except as detailed below:
     * 
     * For Thursday, the week-numbering year is always equal to the usual
     * calendar year.  For other days, the number is such that every day
     * within a complete week (Monday to Sunday) is contained within the
     * same week-numbering year.
     * 
     * For Monday, Tuesday and Wednesday occurring near the end of the year,
     * this may mean that the week-numbering year is one greater than the
     * calendar year (so that these days have the same week-numbering year
     * as the Thursday occurring early in the next year).
     * 
     * For Friday, Saturday and Sunday occurring near the start of the year,
     * this may mean that the week-numbering year is one less than the
     * calendar year (so that these days have the same week-numbering year
     * as the Thursday occurring late in the previous year).
     * 
     * An equivalent description is that the week-numbering year is equal to
     * the calendar year containing the majority of the days in the current
     * week (Monday to Sunday).
     * 
     * Note that January 1 0001 in the proleptic Gregorian calendar is a
     * Monday, so this function never returns 0.
     */
    getWeekNumberingYear(): number
    /**
     * Returns the ISO 8601 week number for the week containing `datetime`.
     * The ISO 8601 week number is the same for every day of the week (from
     * Moday through Sunday).  That can produce some unusual results
     * (described below).
     * 
     * The first week of the year is week 1.  This is the week that contains
     * the first Thursday of the year.  Equivalently, this is the first week
     * that has more than 4 of its days falling within the calendar year.
     * 
     * The value 0 is never returned by this function.  Days contained
     * within a year but occurring before the first ISO 8601 week of that
     * year are considered as being contained in the last week of the
     * previous year.  Similarly, the final days of a calendar year may be
     * considered as being part of the first ISO 8601 week of the next year
     * if 4 or more days of that week are contained within the new year.
     */
    getWeekOfYear(): number
    /**
     * Retrieves the year represented by `datetime` in the Gregorian calendar.
     */
    getYear(): number
    /**
     * Retrieves the Gregorian day, month, and year of a given #GDateTime.
     */
    getYmd(): [ /* year */ number, /* month */ number, /* day */ number ]
    /**
     * Hashes `datetime` into a #guint, suitable for use within #GHashTable.
     */
    hash(): number
    /**
     * Determines if daylight savings time is in effect at the time and in
     * the time zone of `datetime`.
     */
    isDaylightSavings(): boolean
    /**
     * Atomically increments the reference count of `datetime` by one.
     */
    ref(): DateTime
    /**
     * Creates a new #GDateTime corresponding to the same instant in time as
     * `datetime,` but in the local time zone.
     * 
     * This call is equivalent to calling g_date_time_to_timezone() with the
     * time zone returned by g_time_zone_new_local().
     */
    toLocal(): DateTime | null
    /**
     * Stores the instant in time that `datetime` represents into `tv`.
     * 
     * The time contained in a #GTimeVal is always stored in the form of
     * seconds elapsed since 1970-01-01 00:00:00 UTC, regardless of the time
     * zone associated with `datetime`.
     * 
     * On systems where 'long' is 32bit (ie: all 32bit systems and all
     * Windows systems), a #GTimeVal is incapable of storing the entire
     * range of values that #GDateTime is capable of expressing.  On those
     * systems, this function returns %FALSE to indicate that the time is
     * out of range.
     * 
     * On systems where 'long' is 64bit, this function never fails.
     * @param tv a #GTimeVal to modify
     */
    toTimeval(tv: TimeVal): boolean
    /**
     * Create a new #GDateTime corresponding to the same instant in time as
     * `datetime,` but in the time zone `tz`.
     * 
     * This call can fail in the case that the time goes out of bounds.  For
     * example, converting 0001-01-01 00:00:00 UTC to a time zone west of
     * Greenwich will fail (due to the year 0 being out of range).
     * @param tz the new #GTimeZone
     */
    toTimezone(tz: TimeZone): DateTime | null
    /**
     * Gives the Unix time corresponding to `datetime,` rounding down to the
     * nearest second.
     * 
     * Unix time is the number of seconds that have elapsed since 1970-01-01
     * 00:00:00 UTC, regardless of the time zone associated with `datetime`.
     */
    toUnix(): number
    /**
     * Creates a new #GDateTime corresponding to the same instant in time as
     * `datetime,` but in UTC.
     * 
     * This call is equivalent to calling g_date_time_to_timezone() with the
     * time zone returned by g_time_zone_new_utc().
     */
    toUtc(): DateTime | null
    /**
     * Atomically decrements the reference count of `datetime` by one.
     * 
     * When the reference count reaches zero, the resources allocated by
     * `datetime` are freed
     */
    unref(): void
}

/**
 * An opaque structure that represents a date and time, including a time zone.
 * @record 
 */
export class DateTime {

    // Own properties of GLib-2.0.GLib.DateTime

    static name: string

    // Constructors of GLib-2.0.GLib.DateTime

    /**
     * Creates a new #GDateTime corresponding to the given date and time in
     * the time zone `tz`.
     * 
     * The `year` must be between 1 and 9999, `month` between 1 and 12 and `day`
     * between 1 and 28, 29, 30 or 31 depending on the month and the year.
     * 
     * `hour` must be between 0 and 23 and `minute` must be between 0 and 59.
     * 
     * `seconds` must be at least 0.0 and must be strictly less than 60.0.
     * It will be rounded down to the nearest microsecond.
     * 
     * If the given time is not representable in the given time zone (for
     * example, 02:30 on March 14th 2010 in Toronto, due to daylight savings
     * time) then the time will be rounded up to the nearest existing time
     * (in this case, 03:00).  If this matters to you then you should verify
     * the return value for containing the same as the numbers you gave.
     * 
     * In the case that the given time is ambiguous in the given time zone
     * (for example, 01:30 on November 7th 2010 in Toronto, due to daylight
     * savings time) then the time falling within standard (ie:
     * non-daylight) time is taken.
     * 
     * It not considered a programmer error for the values to this function
     * to be out of range, but in the case that they are, the function will
     * return %NULL.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param tz a #GTimeZone
     * @param year the year component of the date
     * @param month the month component of the date
     * @param day the day component of the date
     * @param hour the hour component of the date
     * @param minute the minute component of the date
     * @param seconds the number of seconds past the minute
     */
    constructor(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number) 
    /**
     * Creates a new #GDateTime corresponding to the given date and time in
     * the time zone `tz`.
     * 
     * The `year` must be between 1 and 9999, `month` between 1 and 12 and `day`
     * between 1 and 28, 29, 30 or 31 depending on the month and the year.
     * 
     * `hour` must be between 0 and 23 and `minute` must be between 0 and 59.
     * 
     * `seconds` must be at least 0.0 and must be strictly less than 60.0.
     * It will be rounded down to the nearest microsecond.
     * 
     * If the given time is not representable in the given time zone (for
     * example, 02:30 on March 14th 2010 in Toronto, due to daylight savings
     * time) then the time will be rounded up to the nearest existing time
     * (in this case, 03:00).  If this matters to you then you should verify
     * the return value for containing the same as the numbers you gave.
     * 
     * In the case that the given time is ambiguous in the given time zone
     * (for example, 01:30 on November 7th 2010 in Toronto, due to daylight
     * savings time) then the time falling within standard (ie:
     * non-daylight) time is taken.
     * 
     * It not considered a programmer error for the values to this function
     * to be out of range, but in the case that they are, the function will
     * return %NULL.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param tz a #GTimeZone
     * @param year the year component of the date
     * @param month the month component of the date
     * @param day the day component of the date
     * @param hour the hour component of the date
     * @param minute the minute component of the date
     * @param seconds the number of seconds past the minute
     */
    static new(tz: TimeZone, year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    /**
     * Creates a #GDateTime corresponding to the given
     * [ISO 8601 formatted string](https://en.wikipedia.org/wiki/ISO_8601)
     * `text`. ISO 8601 strings of the form <date><sep><time><tz> are supported, with
     * some extensions from [RFC 3339](https://tools.ietf.org/html/rfc3339) as
     * mentioned below.
     * 
     * Note that as #GDateTime "is oblivious to leap seconds", leap seconds information
     * in an ISO-8601 string will be ignored, so a `23:59:60` time would be parsed as
     * `23:59:59`.
     * 
     * <sep> is the separator and can be either 'T', 't' or ' '. The latter two
     * separators are an extension from
     * [RFC 3339](https://tools.ietf.org/html/rfc3339#section-5.6).
     * 
     * <date> is in the form:
     * 
     * - `YYYY-MM-DD` - Year/month/day, e.g. 2016-08-24.
     * - `YYYYMMDD` - Same as above without dividers.
     * - `YYYY-DDD` - Ordinal day where DDD is from 001 to 366, e.g. 2016-237.
     * - `YYYYDDD` - Same as above without dividers.
     * - `YYYY-Www-D` - Week day where ww is from 01 to 52 and D from 1-7,
     *   e.g. 2016-W34-3.
     * - `YYYYWwwD` - Same as above without dividers.
     * 
     * <time> is in the form:
     * 
     * - `hh:mm:ss(.sss)` - Hours, minutes, seconds (subseconds), e.g. 22:10:42.123.
     * - `hhmmss(.sss)` - Same as above without dividers.
     * 
     * <tz> is an optional timezone suffix of the form:
     * 
     * - `Z` - UTC.
     * - `+hh:mm` or `-hh:mm` - Offset from UTC in hours and minutes, e.g. +12:00.
     * - `+hh` or `-hh` - Offset from UTC in hours, e.g. +12.
     * 
     * If the timezone is not provided in `text` it must be provided in `default_tz`
     * (this field is otherwise ignored).
     * 
     * This call can fail (returning %NULL) if `text` is not a valid ISO 8601
     * formatted string.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param text an ISO 8601 formatted time string.
     * @param defaultTz a #GTimeZone to use if the text doesn't contain a                          timezone, or %NULL.
     */
    static newFromIso8601(text: string, defaultTz: TimeZone | null): DateTime
    /**
     * Creates a #GDateTime corresponding to the given #GTimeVal `tv` in the
     * local time zone.
     * 
     * The time contained in a #GTimeVal is always stored in the form of
     * seconds elapsed since 1970-01-01 00:00:00 UTC, regardless of the
     * local time offset.
     * 
     * This call can fail (returning %NULL) if `tv` represents a time outside
     * of the supported range of #GDateTime.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param tv a #GTimeVal
     */
    static newFromTimevalLocal(tv: TimeVal): DateTime
    /**
     * Creates a #GDateTime corresponding to the given #GTimeVal `tv` in UTC.
     * 
     * The time contained in a #GTimeVal is always stored in the form of
     * seconds elapsed since 1970-01-01 00:00:00 UTC.
     * 
     * This call can fail (returning %NULL) if `tv` represents a time outside
     * of the supported range of #GDateTime.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param tv a #GTimeVal
     */
    static newFromTimevalUtc(tv: TimeVal): DateTime
    /**
     * Creates a #GDateTime corresponding to the given Unix time `t` in the
     * local time zone.
     * 
     * Unix time is the number of seconds that have elapsed since 1970-01-01
     * 00:00:00 UTC, regardless of the local time offset.
     * 
     * This call can fail (returning %NULL) if `t` represents a time outside
     * of the supported range of #GDateTime.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param t the Unix time
     */
    static newFromUnixLocal(t: number): DateTime
    /**
     * Creates a #GDateTime corresponding to the given Unix time `t` in UTC.
     * 
     * Unix time is the number of seconds that have elapsed since 1970-01-01
     * 00:00:00 UTC.
     * 
     * This call can fail (returning %NULL) if `t` represents a time outside
     * of the supported range of #GDateTime.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param t the Unix time
     */
    static newFromUnixUtc(t: number): DateTime
    /**
     * Creates a new #GDateTime corresponding to the given date and time in
     * the local time zone.
     * 
     * This call is equivalent to calling g_date_time_new() with the time
     * zone returned by g_time_zone_new_local().
     * @constructor 
     * @param year the year component of the date
     * @param month the month component of the date
     * @param day the day component of the date
     * @param hour the hour component of the date
     * @param minute the minute component of the date
     * @param seconds the number of seconds past the minute
     */
    static newLocal(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
    /**
     * Creates a #GDateTime corresponding to this exact instant in the given
     * time zone `tz`.  The time is as accurate as the system allows, to a
     * maximum accuracy of 1 microsecond.
     * 
     * This function will always succeed unless GLib is still being used after the
     * year 9999.
     * 
     * You should release the return value by calling g_date_time_unref()
     * when you are done with it.
     * @constructor 
     * @param tz a #GTimeZone
     */
    static newNow(tz: TimeZone): DateTime
    /**
     * Creates a #GDateTime corresponding to this exact instant in the local
     * time zone.
     * 
     * This is equivalent to calling g_date_time_new_now() with the time
     * zone returned by g_time_zone_new_local().
     * @constructor 
     */
    static newNowLocal(): DateTime
    /**
     * Creates a #GDateTime corresponding to this exact instant in UTC.
     * 
     * This is equivalent to calling g_date_time_new_now() with the time
     * zone returned by g_time_zone_new_utc().
     * @constructor 
     */
    static newNowUtc(): DateTime
    /**
     * Creates a new #GDateTime corresponding to the given date and time in
     * UTC.
     * 
     * This call is equivalent to calling g_date_time_new() with the time
     * zone returned by g_time_zone_new_utc().
     * @constructor 
     * @param year the year component of the date
     * @param month the month component of the date
     * @param day the day component of the date
     * @param hour the hour component of the date
     * @param minute the minute component of the date
     * @param seconds the number of seconds past the minute
     */
    static newUtc(year: number, month: number, day: number, hour: number, minute: number, seconds: number): DateTime
}

export interface DebugKey {

    // Own fields of GLib-2.0.GLib.DebugKey

    /**
     * the string
     * @field 
     */
    key: string
    /**
     * the flag
     * @field 
     */
    value: number
}

/**
 * Associates a string with a bit flag.
 * Used in g_parse_debug_string().
 * @record 
 */
export class DebugKey {

    // Own properties of GLib-2.0.GLib.DebugKey

    static name: string
}

export interface Dir {

    // Owm methods of GLib-2.0.GLib.Dir

    /**
     * Closes the directory and deallocates all related resources.
     */
    close(): void
    /**
     * Retrieves the name of another entry in the directory, or %NULL.
     * The order of entries returned from this function is not defined,
     * and may vary by file system or other operating-system dependent
     * factors.
     * 
     * %NULL may also be returned in case of errors. On Unix, you can
     * check `errno` to find out if %NULL was returned because of an error.
     * 
     * On Unix, the '.' and '..' entries are omitted, and the returned
     * name is in the on-disk encoding.
     * 
     * On Windows, as is true of all GLib functions which operate on
     * filenames, the returned name is in UTF-8.
     */
    readName(): string
    /**
     * Resets the given directory. The next call to g_dir_read_name()
     * will return the first entry again.
     */
    rewind(): void
}

/**
 * An opaque structure representing an opened directory.
 * @record 
 */
export class Dir {

    // Own properties of GLib-2.0.GLib.Dir

    static name: string

    // Constructors of GLib-2.0.GLib.Dir

    /**
     * Creates a subdirectory in the preferred directory for temporary
     * files (as returned by g_get_tmp_dir()).
     * 
     * `tmpl` should be a string in the GLib file name encoding containing
     * a sequence of six 'X' characters, as the parameter to g_mkstemp().
     * However, unlike these functions, the template should only be a
     * basename, no directory components are allowed. If template is
     * %NULL, a default template is used.
     * 
     * Note that in contrast to g_mkdtemp() (and mkdtemp()) `tmpl` is not
     * modified, and might thus be a read-only literal string.
     * @param tmpl Template for directory name,     as in g_mkdtemp(), basename only, or %NULL for a default template
     */
    static makeTmp(tmpl: string | null): string
}

export interface Error {

    // Own fields of GLib-2.0.GLib.Error

    /**
     * error domain, e.g. %G_FILE_ERROR
     * @field 
     */
    domain: Quark
    /**
     * error code, e.g. %G_FILE_ERROR_NOENT
     * @field 
     */
    code: number
    /**
     * human-readable informative error message
     * @field 
     */
    message: string

    // Owm methods of GLib-2.0.GLib.Error

    /**
     * Makes a copy of `error`.
     */
    copy(): Error
    /**
     * Frees a #GError and associated resources.
     */
    free(): void
    /**
     * Returns %TRUE if `error` matches `domain` and `code,` %FALSE
     * otherwise. In particular, when `error` is %NULL, %FALSE will
     * be returned.
     * 
     * If `domain` contains a `FAILED` (or otherwise generic) error code,
     * you should generally not check for it explicitly, but should
     * instead treat any not-explicitly-recognized error code as being
     * equivalent to the `FAILED` code. This way, if the domain is
     * extended in the future to provide a more specific error code for
     * a certain case, your code will still work.
     * @param domain an error domain
     * @param code an error code
     */
    matches(domain: Quark, code: number): boolean
}

/**
 * The `GError` structure contains information about
 * an error that has occurred.
 * @record 
 */
export class Error {

    // Own properties of GLib-2.0.GLib.Error

    static name: string

    // Constructors of GLib-2.0.GLib.Error

    /**
     * Creates a new #GError; unlike g_error_new(), `message` is
     * not a printf()-style format string. Use this function if
     * `message` contains text you don't have control over,
     * that could include printf() escape sequences.
     * @constructor 
     * @param domain error domain
     * @param code error code
     * @param message error message
     */
    static newLiteral(domain: Quark, code: number, message: string): Error
}

export interface HashTable<A = symbol | string | number, B = string | number | boolean> {
}

/**
 * The #GHashTable struct is an opaque data structure to represent a
 * [Hash Table][glib-Hash-Tables]. It should only be accessed via the
 * following functions.
 * @record 
 */
export class HashTable<A = symbol | string | number, B = string | number | boolean> {

    // Own properties of GLib-2.0.GLib.HashTable

    static name: string

    // Constructors of GLib-2.0.GLib.HashTable

    /**
     * Creates a new #GHashTable like g_hash_table_new_full() with a reference
     * count of 1.
     * 
     * It inherits the hash function, the key equal function, the key destroy function,
     * as well as the value destroy function, from `other_hash_table`.
     * 
     * The returned hash table will be empty; it will not contain the keys
     * or values from `other_hash_table`.
     * @param otherHashTable Another #GHashTable
     */
    static newSimilar(otherHashTable: HashTable): HashTable
    /**
     * This is a convenience function for using a #GHashTable as a set.  It
     * is equivalent to calling g_hash_table_replace() with `key` as both the
     * key and the value.
     * 
     * In particular, this means that if `key` already exists in the hash table, then
     * the old copy of `key` in the hash table is freed and `key` replaces it in the
     * table.
     * 
     * When a hash table only ever contains keys that have themselves as the
     * corresponding value it is able to be stored more efficiently.  See
     * the discussion in the section description.
     * 
     * Starting from GLib 2.40, this function returns a boolean value to
     * indicate whether the newly added value was already in the hash table
     * or not.
     * @param hashTable a #GHashTable
     * @param key a key to insert
     */
    static add(hashTable: HashTable, key: object | null): boolean
    /**
     * Checks if `key` is in `hash_table`.
     * @param hashTable a #GHashTable
     * @param key a key to check
     */
    static contains(hashTable: HashTable, key: object | null): boolean
    /**
     * Destroys all keys and values in the #GHashTable and decrements its
     * reference count by 1. If keys and/or values are dynamically allocated,
     * you should either free them first or create the #GHashTable with destroy
     * notifiers using g_hash_table_new_full(). In the latter case the destroy
     * functions you supplied will be called on all keys and values during the
     * destruction phase.
     * @param hashTable a #GHashTable
     */
    static destroy(hashTable: HashTable): void
    /**
     * Inserts a new key and value into a #GHashTable.
     * 
     * If the key already exists in the #GHashTable its current
     * value is replaced with the new value. If you supplied a
     * `value_destroy_func` when creating the #GHashTable, the old
     * value is freed using that function. If you supplied a
     * `key_destroy_func` when creating the #GHashTable, the passed
     * key is freed using that function.
     * 
     * Starting from GLib 2.40, this function returns a boolean value to
     * indicate whether the newly added value was already in the hash table
     * or not.
     * @param hashTable a #GHashTable
     * @param key a key to insert
     * @param value the value to associate with the key
     */
    static insert(hashTable: HashTable, key: object | null, value: object | null): boolean
    /**
     * Looks up a key in a #GHashTable. Note that this function cannot
     * distinguish between a key that is not present and one which is present
     * and has the value %NULL. If you need this distinction, use
     * g_hash_table_lookup_extended().
     * @param hashTable a #GHashTable
     * @param key the key to look up
     */
    static lookup(hashTable: HashTable, key: object | null): object | null
    /**
     * Looks up a key in the #GHashTable, returning the original key and the
     * associated value and a #gboolean which is %TRUE if the key was found. This
     * is useful if you need to free the memory allocated for the original key,
     * for example before calling g_hash_table_remove().
     * 
     * You can actually pass %NULL for `lookup_key` to test
     * whether the %NULL key exists, provided the hash and equal functions
     * of `hash_table` are %NULL-safe.
     * @param hashTable a #GHashTable
     * @param lookupKey the key to look up
     */
    static lookupExtended(hashTable: HashTable, lookupKey: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
    /**
     * Removes a key and its associated value from a #GHashTable.
     * 
     * If the #GHashTable was created using g_hash_table_new_full(), the
     * key and value are freed using the supplied destroy functions, otherwise
     * you have to make sure that any dynamically allocated values are freed
     * yourself.
     * @param hashTable a #GHashTable
     * @param key the key to remove
     */
    static remove(hashTable: HashTable, key: object | null): boolean
    /**
     * Removes all keys and their associated values from a #GHashTable.
     * 
     * If the #GHashTable was created using g_hash_table_new_full(),
     * the keys and values are freed using the supplied destroy functions,
     * otherwise you have to make sure that any dynamically allocated
     * values are freed yourself.
     * @param hashTable a #GHashTable
     */
    static removeAll(hashTable: HashTable): void
    /**
     * Inserts a new key and value into a #GHashTable similar to
     * g_hash_table_insert(). The difference is that if the key
     * already exists in the #GHashTable, it gets replaced by the
     * new key. If you supplied a `value_destroy_func` when creating
     * the #GHashTable, the old value is freed using that function.
     * If you supplied a `key_destroy_func` when creating the
     * #GHashTable, the old key is freed using that function.
     * 
     * Starting from GLib 2.40, this function returns a boolean value to
     * indicate whether the newly added value was already in the hash table
     * or not.
     * @param hashTable a #GHashTable
     * @param key a key to insert
     * @param value the value to associate with the key
     */
    static replace(hashTable: HashTable, key: object | null, value: object | null): boolean
    /**
     * Returns the number of elements contained in the #GHashTable.
     * @param hashTable a #GHashTable
     */
    static size(hashTable: HashTable): number
    /**
     * Removes a key and its associated value from a #GHashTable without
     * calling the key and value destroy functions.
     * @param hashTable a #GHashTable
     * @param key the key to remove
     */
    static steal(hashTable: HashTable, key: object | null): boolean
    /**
     * Removes all keys and their associated values from a #GHashTable
     * without calling the key and value destroy functions.
     * @param hashTable a #GHashTable
     */
    static stealAll(hashTable: HashTable): void
    /**
     * Looks up a key in the #GHashTable, stealing the original key and the
     * associated value and returning %TRUE if the key was found. If the key was
     * not found, %FALSE is returned.
     * 
     * If found, the stolen key and value are removed from the hash table without
     * calling the key and value destroy functions, and ownership is transferred to
     * the caller of this method; as with g_hash_table_steal().
     * 
     * You can pass %NULL for `lookup_key,` provided the hash and equal functions
     * of `hash_table` are %NULL-safe.
     * @param hashTable a #GHashTable
     * @param lookupKey the key to look up
     */
    static stealExtended(hashTable: HashTable, lookupKey: object | null): [ /* returnType */ boolean, /* stolenKey */ object | null, /* stolenValue */ object | null ]
    /**
     * Atomically decrements the reference count of `hash_table` by one.
     * If the reference count drops to 0, all keys and values will be
     * destroyed, and all memory allocated by the hash table is released.
     * This function is MT-safe and may be called from any thread.
     * @param hashTable a valid #GHashTable
     */
    static unref(hashTable: HashTable): void
}

export interface HashTableIter {

    // Owm methods of GLib-2.0.GLib.HashTableIter

    /**
     * Initializes a key/value pair iterator and associates it with
     * `hash_table`. Modifying the hash table after calling this function
     * invalidates the returned iterator.
     * 
     * The iteration order of a #GHashTableIter over the keys/values in a hash
     * table is not defined.
     * 
     * 
     * ```c
     * GHashTableIter iter;
     * gpointer key, value;
     * 
     * g_hash_table_iter_init (&iter, hash_table);
     * while (g_hash_table_iter_next (&iter, &key, &value))
     *   {
     *     // do something with key and value
     *   }
     * ```
     * 
     * @param hashTable a #GHashTable
     */
    init(hashTable: HashTable): void
    /**
     * Advances `iter` and retrieves the key and/or value that are now
     * pointed to as a result of this advancement. If %FALSE is returned,
     * `key` and `value` are not set, and the iterator becomes invalid.
     */
    next(): [ /* returnType */ boolean, /* key */ object | null, /* value */ object | null ]
    /**
     * Removes the key/value pair currently pointed to by the iterator
     * from its associated #GHashTable. Can only be called after
     * g_hash_table_iter_next() returned %TRUE, and cannot be called
     * more than once for the same key/value pair.
     * 
     * If the #GHashTable was created using g_hash_table_new_full(),
     * the key and value are freed using the supplied destroy functions,
     * otherwise you have to make sure that any dynamically allocated
     * values are freed yourself.
     * 
     * It is safe to continue iterating the #GHashTable afterward:
     * 
     * ```c
     * while (g_hash_table_iter_next (&iter, &key, &value))
     *   {
     *     if (condition)
     *       g_hash_table_iter_remove (&iter);
     *   }
     * ```
     * 
     */
    remove(): void
    /**
     * Replaces the value currently pointed to by the iterator
     * from its associated #GHashTable. Can only be called after
     * g_hash_table_iter_next() returned %TRUE.
     * 
     * If you supplied a `value_destroy_func` when creating the
     * #GHashTable, the old value is freed using that function.
     * @param value the value to replace with
     */
    replace(value: object | null): void
    /**
     * Removes the key/value pair currently pointed to by the
     * iterator from its associated #GHashTable, without calling
     * the key and value destroy functions. Can only be called
     * after g_hash_table_iter_next() returned %TRUE, and cannot
     * be called more than once for the same key/value pair.
     */
    steal(): void
}

/**
 * A GHashTableIter structure represents an iterator that can be used
 * to iterate over the elements of a #GHashTable. GHashTableIter
 * structures are typically allocated on the stack and then initialized
 * with g_hash_table_iter_init().
 * 
 * The iteration order of a #GHashTableIter over the keys/values in a hash
 * table is not defined.
 * @record 
 */
export class HashTableIter {

    // Own properties of GLib-2.0.GLib.HashTableIter

    static name: string
}

export interface Hmac {

    // Owm methods of GLib-2.0.GLib.Hmac

    /**
     * Gets the digest from `checksum` as a raw binary array and places it
     * into `buffer`. The size of the digest depends on the type of checksum.
     * 
     * Once this function has been called, the #GHmac is closed and can
     * no longer be updated with g_checksum_update().
     * @param buffer output buffer
     */
    getDigest(buffer: Uint8Array): void
    /**
     * Gets the HMAC as a hexadecimal string.
     * 
     * Once this function has been called the #GHmac can no longer be
     * updated with g_hmac_update().
     * 
     * The hexadecimal characters will be lower case.
     */
    getString(): string
    /**
     * Atomically decrements the reference count of `hmac` by one.
     * 
     * If the reference count drops to 0, all keys and values will be
     * destroyed, and all memory allocated by the hash table is released.
     * This function is MT-safe and may be called from any thread.
     * Frees the memory allocated for `hmac`.
     */
    unref(): void
    /**
     * Feeds `data` into an existing #GHmac.
     * 
     * The HMAC must still be open, that is g_hmac_get_string() or
     * g_hmac_get_digest() must not have been called on `hmac`.
     * @param data buffer used to compute the checksum
     */
    update(data: Uint8Array): void
}

/**
 * An opaque structure representing a HMAC operation.
 * To create a new GHmac, use g_hmac_new(). To free
 * a GHmac, use g_hmac_unref().
 * @record 
 */
export class Hmac {

    // Own properties of GLib-2.0.GLib.Hmac

    static name: string
}

export interface Hook {

    // Own fields of GLib-2.0.GLib.Hook

    /**
     * data which is passed to func when this hook is invoked
     * @field 
     */
    data: object
    /**
     * pointer to the next hook in the list
     * @field 
     */
    next: Hook
    /**
     * pointer to the previous hook in the list
     * @field 
     */
    prev: Hook
    /**
     * the reference count of this hook
     * @field 
     */
    refCount: number
    /**
     * the id of this hook, which is unique within its list
     * @field 
     */
    hookId: number
    /**
     * flags which are set for this hook. See #GHookFlagMask for
     *     predefined flags
     * @field 
     */
    flags: number
    /**
     * the function to call when this hook is invoked. The possible
     *     signatures for this function are #GHookFunc and #GHookCheckFunc
     * @field 
     */
    func: object
    /**
     * the default `finalize_hook` function of a #GHookList calls
     *     this member of the hook that is being finalized
     * @field 
     */
    destroy: DestroyNotify

    // Owm methods of GLib-2.0.GLib.Hook

    /**
     * Compares the ids of two #GHook elements, returning a negative value
     * if the second id is greater than the first.
     * @param sibling a #GHook to compare with `new_hook`
     */
    compareIds(sibling: Hook): number
}

/**
 * The #GHook struct represents a single hook function in a #GHookList.
 * @record 
 */
export class Hook {

    // Own properties of GLib-2.0.GLib.Hook

    static name: string

    // Constructors of GLib-2.0.GLib.Hook

    /**
     * Destroys a #GHook, given its ID.
     * @param hookList a #GHookList
     * @param hookId a hook ID
     */
    static destroy(hookList: HookList, hookId: number): boolean
    /**
     * Removes one #GHook from a #GHookList, marking it
     * inactive and calling g_hook_unref() on it.
     * @param hookList a #GHookList
     * @param hook the #GHook to remove
     */
    static destroyLink(hookList: HookList, hook: Hook): void
    /**
     * Calls the #GHookList `finalize_hook` function if it exists,
     * and frees the memory allocated for the #GHook.
     * @param hookList a #GHookList
     * @param hook the #GHook to free
     */
    static free(hookList: HookList, hook: Hook): void
    /**
     * Inserts a #GHook into a #GHookList, before a given #GHook.
     * @param hookList a #GHookList
     * @param sibling the #GHook to insert the new #GHook before
     * @param hook the #GHook to insert
     */
    static insertBefore(hookList: HookList, sibling: Hook | null, hook: Hook): void
    /**
     * Prepends a #GHook on the start of a #GHookList.
     * @param hookList a #GHookList
     * @param hook the #GHook to add to the start of `hook_list`
     */
    static prepend(hookList: HookList, hook: Hook): void
    /**
     * Decrements the reference count of a #GHook.
     * If the reference count falls to 0, the #GHook is removed
     * from the #GHookList and g_hook_free() is called to free it.
     * @param hookList a #GHookList
     * @param hook the #GHook to unref
     */
    static unref(hookList: HookList, hook: Hook): void
}

export interface HookList {

    // Own fields of GLib-2.0.GLib.HookList

    /**
     * the next free #GHook id
     * @field 
     */
    seqId: number
    /**
     * the size of the #GHookList elements, in bytes
     * @field 
     */
    hookSize: number
    /**
     * 1 if the #GHookList has been initialized
     * @field 
     */
    isSetup: number
    /**
     * the first #GHook element in the list
     * @field 
     */
    hooks: Hook
    /**
     * unused
     * @field 
     */
    dummy3: object
    /**
     * the function to call to finalize a #GHook element.
     *     The default behaviour is to call the hooks `destroy` function
     * @field 
     */
    finalizeHook: HookFinalizeFunc
    /**
     * unused
     * @field 
     */
    dummy: object[]

    // Owm methods of GLib-2.0.GLib.HookList

    /**
     * Removes all the #GHook elements from a #GHookList.
     */
    clear(): void
    /**
     * Initializes a #GHookList.
     * This must be called before the #GHookList is used.
     * @param hookSize the size of each element in the #GHookList,     typically `sizeof (GHook)`.
     */
    init(hookSize: number): void
    /**
     * Calls all of the #GHook functions in a #GHookList.
     * @param mayRecurse %TRUE if functions which are already running     (e.g. in another thread) can be called. If set to %FALSE,     these are skipped
     */
    invoke(mayRecurse: boolean): void
    /**
     * Calls all of the #GHook functions in a #GHookList.
     * Any function which returns %FALSE is removed from the #GHookList.
     * @param mayRecurse %TRUE if functions which are already running     (e.g. in another thread) can be called. If set to %FALSE,     these are skipped
     */
    invokeCheck(mayRecurse: boolean): void
}

/**
 * The #GHookList struct represents a list of hook functions.
 * @record 
 */
export class HookList {

    // Own properties of GLib-2.0.GLib.HookList

    static name: string
}

export interface IConv {
}

/**
 * The GIConv struct wraps an iconv() conversion descriptor. It contains
 * private data and should only be accessed using the following functions.
 * @record 
 */
export class IConv {

    // Own properties of GLib-2.0.GLib.IConv

    static name: string
}

export interface IOChannel {

    // Owm methods of GLib-2.0.GLib.IOChannel

    /**
     * Close an IO channel. Any pending data to be written will be
     * flushed, ignoring errors. The channel will not be freed until the
     * last reference is dropped using g_io_channel_unref().
     */
    close(): void
    /**
     * Flushes the write buffer for the GIOChannel.
     */
    flush(): IOStatus
    /**
     * This function returns a #GIOCondition depending on whether there
     * is data to be read/space to write data in the internal buffers in
     * the #GIOChannel. Only the flags %G_IO_IN and %G_IO_OUT may be set.
     */
    getBufferCondition(): IOCondition
    /**
     * Gets the buffer size.
     */
    getBufferSize(): number
    /**
     * Returns whether `channel` is buffered.
     */
    getBuffered(): boolean
    /**
     * Returns whether the file/socket/whatever associated with `channel`
     * will be closed when `channel` receives its final unref and is
     * destroyed. The default value of this is %TRUE for channels created
     * by g_io_channel_new_file (), and %FALSE for all other channels.
     */
    getCloseOnUnref(): boolean
    /**
     * Gets the encoding for the input/output of the channel.
     * The internal encoding is always UTF-8. The encoding %NULL
     * makes the channel safe for binary data.
     */
    getEncoding(): string
    /**
     * Gets the current flags for a #GIOChannel, including read-only
     * flags such as %G_IO_FLAG_IS_READABLE.
     * 
     * The values of the flags %G_IO_FLAG_IS_READABLE and %G_IO_FLAG_IS_WRITABLE
     * are cached for internal use by the channel when it is created.
     * If they should change at some later point (e.g. partial shutdown
     * of a socket with the UNIX shutdown() function), the user
     * should immediately call g_io_channel_get_flags() to update
     * the internal values of these flags.
     */
    getFlags(): IOFlags
    /**
     * This returns the string that #GIOChannel uses to determine
     * where in the file a line break occurs. A value of %NULL
     * indicates autodetection.
     * @param length a location to return the length of the line terminator
     */
    getLineTerm(length: number): string
    /**
     * Initializes a #GIOChannel struct.
     * 
     * This is called by each of the above functions when creating a
     * #GIOChannel, and so is not often needed by the application
     * programmer (unless you are creating a new type of #GIOChannel).
     */
    init(): void
    /**
     * Reads data from a #GIOChannel.
     * @param buf a buffer to read the data into (which should be at least       count bytes long)
     * @param count the number of bytes to read from the #GIOChannel
     * @param bytesRead returns the number of bytes actually read
     */
    read(buf: string, count: number, bytesRead: number): IOError
    /**
     * Replacement for g_io_channel_read() with the new API.
     */
    readChars(): [ /* returnType */ IOStatus, /* buf */ Uint8Array, /* bytesRead */ number ]
    /**
     * Reads a line, including the terminating character(s),
     * from a #GIOChannel into a newly-allocated string.
     * `str_return` will contain allocated memory if the return
     * is %G_IO_STATUS_NORMAL.
     */
    readLine(): [ /* returnType */ IOStatus, /* strReturn */ string, /* length */ number, /* terminatorPos */ number ]
    /**
     * Reads a line from a #GIOChannel, using a #GString as a buffer.
     * @param buffer a #GString into which the line will be written.          If `buffer` already contains data, the old data will          be overwritten.
     * @param terminatorPos location to store position of line terminator, or %NULL
     */
    readLineString(buffer: String, terminatorPos: number | null): IOStatus
    /**
     * Reads all the remaining data from the file.
     */
    readToEnd(): [ /* returnType */ IOStatus, /* strReturn */ Uint8Array ]
    /**
     * Reads a Unicode character from `channel`.
     * This function cannot be called on a channel with %NULL encoding.
     */
    readUnichar(): [ /* returnType */ IOStatus, /* thechar */ string ]
    /**
     * Increments the reference count of a #GIOChannel.
     */
    ref(): IOChannel
    /**
     * Sets the current position in the #GIOChannel, similar to the standard
     * library function fseek().
     * @param offset an offset, in bytes, which is added to the position specified          by `type`
     * @param type the position in the file, which can be %G_SEEK_CUR (the current        position), %G_SEEK_SET (the start of the file), or %G_SEEK_END        (the end of the file)
     */
    seek(offset: number, type: SeekType): IOError
    /**
     * Replacement for g_io_channel_seek() with the new API.
     * @param offset The offset in bytes from the position specified by `type`
     * @param type a #GSeekType. The type %G_SEEK_CUR is only allowed in those                      cases where a call to g_io_channel_set_encoding ()                      is allowed. See the documentation for                      g_io_channel_set_encoding () for details.
     */
    seekPosition(offset: number, type: SeekType): IOStatus
    /**
     * Sets the buffer size.
     * @param size the size of the buffer, or 0 to let GLib pick a good size
     */
    setBufferSize(size: number): void
    /**
     * The buffering state can only be set if the channel's encoding
     * is %NULL. For any other encoding, the channel must be buffered.
     * 
     * A buffered channel can only be set unbuffered if the channel's
     * internal buffers have been flushed. Newly created channels or
     * channels which have returned %G_IO_STATUS_EOF
     * not require such a flush. For write-only channels, a call to
     * g_io_channel_flush () is sufficient. For all other channels,
     * the buffers may be flushed by a call to g_io_channel_seek_position ().
     * This includes the possibility of seeking with seek type %G_SEEK_CUR
     * and an offset of zero. Note that this means that socket-based
     * channels cannot be set unbuffered once they have had data
     * read from them.
     * 
     * On unbuffered channels, it is safe to mix read and write
     * calls from the new and old APIs, if this is necessary for
     * maintaining old code.
     * 
     * The default state of the channel is buffered.
     * @param buffered whether to set the channel buffered or unbuffered
     */
    setBuffered(buffered: boolean): void
    /**
     * Whether to close the channel on the final unref of the #GIOChannel
     * data structure. The default value of this is %TRUE for channels
     * created by g_io_channel_new_file (), and %FALSE for all other channels.
     * 
     * Setting this flag to %TRUE for a channel you have already closed
     * can cause problems when the final reference to the #GIOChannel is dropped.
     * @param doClose Whether to close the channel on the final unref of            the GIOChannel data structure.
     */
    setCloseOnUnref(doClose: boolean): void
    /**
     * Sets the encoding for the input/output of the channel.
     * The internal encoding is always UTF-8. The default encoding
     * for the external file is UTF-8.
     * 
     * The encoding %NULL is safe to use with binary data.
     * 
     * The encoding can only be set if one of the following conditions
     * is true:
     * 
     * - The channel was just created, and has not been written to or read from yet.
     * 
     * - The channel is write-only.
     * 
     * - The channel is a file, and the file pointer was just repositioned
     *   by a call to g_io_channel_seek_position(). (This flushes all the
     *   internal buffers.)
     * 
     * - The current encoding is %NULL or UTF-8.
     * 
     * - One of the (new API) read functions has just returned %G_IO_STATUS_EOF
     *   (or, in the case of g_io_channel_read_to_end(), %G_IO_STATUS_NORMAL).
     * 
     * -  One of the functions g_io_channel_read_chars() or
     *    g_io_channel_read_unichar() has returned %G_IO_STATUS_AGAIN or
     *    %G_IO_STATUS_ERROR. This may be useful in the case of
     *    %G_CONVERT_ERROR_ILLEGAL_SEQUENCE.
     *    Returning one of these statuses from g_io_channel_read_line(),
     *    g_io_channel_read_line_string(), or g_io_channel_read_to_end()
     *    does not guarantee that the encoding can be changed.
     * 
     * Channels which do not meet one of the above conditions cannot call
     * g_io_channel_seek_position() with an offset of %G_SEEK_CUR, and, if
     * they are "seekable", cannot call g_io_channel_write_chars() after
     * calling one of the API "read" functions.
     * @param encoding the encoding type
     */
    setEncoding(encoding: string | null): IOStatus
    /**
     * Sets the (writeable) flags in `channel` to (`flags` & %G_IO_FLAG_SET_MASK).
     * @param flags the flags to set on the IO channel
     */
    setFlags(flags: IOFlags): IOStatus
    /**
     * This sets the string that #GIOChannel uses to determine
     * where in the file a line break occurs.
     * @param lineTerm The line termination string. Use %NULL for             autodetect.  Autodetection breaks on "\n", "\r\n", "\r", "\0",             and the Unicode paragraph separator. Autodetection should not be             used for anything other than file-based channels.
     * @param length The length of the termination string. If -1 is passed, the          string is assumed to be nul-terminated. This option allows          termination strings with embedded nuls.
     */
    setLineTerm(lineTerm: string | null, length: number): void
    /**
     * Close an IO channel. Any pending data to be written will be
     * flushed if `flush` is %TRUE. The channel will not be freed until the
     * last reference is dropped using g_io_channel_unref().
     * @param flush if %TRUE, flush pending
     */
    shutdown(flush: boolean): IOStatus
    /**
     * Returns the file descriptor of the #GIOChannel.
     * 
     * On Windows this function returns the file descriptor or socket of
     * the #GIOChannel.
     */
    unixGetFd(): number
    /**
     * Decrements the reference count of a #GIOChannel.
     */
    unref(): void
    /**
     * Writes data to a #GIOChannel.
     * @param buf the buffer containing the data to write
     * @param count the number of bytes to write
     * @param bytesWritten the number of bytes actually written
     */
    write(buf: string, count: number, bytesWritten: number): IOError
    /**
     * Replacement for g_io_channel_write() with the new API.
     * 
     * On seekable channels with encodings other than %NULL or UTF-8, generic
     * mixing of reading and writing is not allowed. A call to g_io_channel_write_chars ()
     * may only be made on a channel from which data has been read in the
     * cases described in the documentation for g_io_channel_set_encoding ().
     * @param buf a buffer to write data from
     * @param count the size of the buffer. If -1, the buffer         is taken to be a nul-terminated string.
     */
    writeChars(buf: Uint8Array, count: number): [ /* returnType */ IOStatus, /* bytesWritten */ number ]
    /**
     * Writes a Unicode character to `channel`.
     * This function cannot be called on a channel with %NULL encoding.
     * @param thechar a character
     */
    writeUnichar(thechar: string): IOStatus
}

/**
 * A data structure representing an IO Channel. The fields should be
 * considered private and should only be accessed with the following
 * functions.
 * @record 
 */
export class IOChannel {

    // Own properties of GLib-2.0.GLib.IOChannel

    static name: string

    // Constructors of GLib-2.0.GLib.IOChannel

    /**
     * Open a file `filename` as a #GIOChannel using mode `mode`. This
     * channel will be closed when the last reference to it is dropped,
     * so there is no need to call g_io_channel_close() (though doing
     * so will not cause problems, as long as no attempt is made to
     * access the channel after it is closed).
     * @constructor 
     * @param filename A string containing the name of a file
     * @param mode One of "r", "w", "a", "r+", "w+", "a+". These have        the same meaning as in fopen()
     */
    static newFile(filename: string, mode: string): IOChannel
    /**
     * Creates a new #GIOChannel given a file descriptor. On UNIX systems
     * this works for plain files, pipes, and sockets.
     * 
     * The returned #GIOChannel has a reference count of 1.
     * 
     * The default encoding for #GIOChannel is UTF-8. If your application
     * is reading output from a command using via pipe, you may need to set
     * the encoding to the encoding of the current locale (see
     * g_get_charset()) with the g_io_channel_set_encoding() function.
     * By default, the fd passed will not be closed when the final reference
     * to the #GIOChannel data structure is dropped.
     * 
     * If you want to read raw binary data without interpretation, then
     * call the g_io_channel_set_encoding() function with %NULL for the
     * encoding argument.
     * 
     * This function is available in GLib on Windows, too, but you should
     * avoid using it on Windows. The domain of file descriptors and
     * sockets overlap. There is no way for GLib to know which one you mean
     * in case the argument you pass to this function happens to be both a
     * valid file descriptor and socket. If that happens a warning is
     * issued, and GLib assumes that it is the file descriptor you mean.
     * @constructor 
     * @param fd a file descriptor.
     */
    static unixNew(fd: number): IOChannel
    /**
     * Converts an `errno` error number to a #GIOChannelError.
     * @param en an `errno` error number, e.g. `EINVAL`
     */
    static errorFromErrno(en: number): IOChannelError
    static errorQuark(): Quark
}

export interface IOFuncs {

    // Own fields of GLib-2.0.GLib.IOFuncs

    ioRead: (channel: IOChannel, buf: string, count: number, bytesRead: number) => IOStatus
    ioWrite: (channel: IOChannel, buf: string, count: number, bytesWritten: number) => IOStatus
    ioSeek: (channel: IOChannel, offset: number, type: SeekType) => IOStatus
    ioClose: (channel: IOChannel) => IOStatus
    ioCreateWatch: (channel: IOChannel, condition: IOCondition) => Source
    ioFree: (channel: IOChannel) => void
    ioSetFlags: (channel: IOChannel, flags: IOFlags) => IOStatus
    ioGetFlags: (channel: IOChannel) => IOFlags
}

/**
 * A table of functions used to handle different types of #GIOChannel
 * in a generic way.
 * @record 
 */
export class IOFuncs {

    // Own properties of GLib-2.0.GLib.IOFuncs

    static name: string
}

export interface KeyFile {

    // Owm methods of GLib-2.0.GLib.KeyFile

    /**
     * Returns the value associated with `key` under `group_name` as a
     * boolean.
     * 
     * If `key` cannot be found then %FALSE is returned and `error` is set
     * to %G_KEY_FILE_ERROR_KEY_NOT_FOUND. Likewise, if the value
     * associated with `key` cannot be interpreted as a boolean then %FALSE
     * is returned and `error` is set to %G_KEY_FILE_ERROR_INVALID_VALUE.
     * @param groupName a group name
     * @param key a key
     */
    getBoolean(groupName: string, key: string): boolean
    /**
     * Returns the values associated with `key` under `group_name` as
     * booleans.
     * 
     * If `key` cannot be found then %NULL is returned and `error` is set to
     * %G_KEY_FILE_ERROR_KEY_NOT_FOUND. Likewise, if the values associated
     * with `key` cannot be interpreted as booleans then %NULL is returned
     * and `error` is set to %G_KEY_FILE_ERROR_INVALID_VALUE.
     * @param groupName a group name
     * @param key a key
     */
    getBooleanList(groupName: string, key: string): boolean[]
    /**
     * Retrieves a comment above `key` from `group_name`.
     * If `key` is %NULL then `comment` will be read from above
     * `group_name`. If both `key` and `group_name` are %NULL, then
     * `comment` will be read from above the first group in the file.
     * 
     * Note that the returned string does not include the '#' comment markers,
     * but does include any whitespace after them (on each line). It includes
     * the line breaks between lines, but does not include the final line break.
     * @param groupName a group name, or %NULL
     * @param key a key
     */
    getComment(groupName: string | null, key: string | null): string
    /**
     * Returns the value associated with `key` under `group_name` as a
     * double. If `group_name` is %NULL, the start_group is used.
     * 
     * If `key` cannot be found then 0.0 is returned and `error` is set to
     * %G_KEY_FILE_ERROR_KEY_NOT_FOUND. Likewise, if the value associated
     * with `key` cannot be interpreted as a double then 0.0 is returned
     * and `error` is set to %G_KEY_FILE_ERROR_INVALID_VALUE.
     * @param groupName a group name
     * @param key a key
     */
    getDouble(groupName: string, key: string): number
    /**
     * Returns the values associated with `key` under `group_name` as
     * doubles.
     * 
     * If `key` cannot be found then %NULL is returned and `error` is set to
     * %G_KEY_FILE_ERROR_KEY_NOT_FOUND. Likewise, if the values associated
     * with `key` cannot be interpreted as doubles then %NULL is returned
     * and `error` is set to %G_KEY_FILE_ERROR_INVALID_VALUE.
     * @param groupName a group name
     * @param key a key
     */
    getDoubleList(groupName: string, key: string): number[]
    /**
     * Returns all groups in the key file loaded with `key_file`.
     * The array of returned groups will be %NULL-terminated, so
     * `length` may optionally be %NULL.
     */
    getGroups(): [ /* returnType */ string[], /* length */ number ]
    /**
     * Returns the value associated with `key` under `group_name` as a signed
     * 64-bit integer. This is similar to g_key_file_get_integer() but can return
     * 64-bit results without truncation.
     * @param groupName a non-%NULL group name
     * @param key a non-%NULL key
     */
    getInt64(groupName: string, key: string): number
    /**
     * Returns the value associated with `key` under `group_name` as an
     * integer.
     * 
     * If `key` cannot be found then 0 is returned and `error` is set to
     * %G_KEY_FILE_ERROR_KEY_NOT_FOUND. Likewise, if the value associated
     * with `key` cannot be interpreted as an integer, or is out of range
     * for a #gint, then 0 is returned
     * and `error` is set to %G_KEY_FILE_ERROR_INVALID_VALUE.
     * @param groupName a group name
     * @param key a key
     */
    getInteger(groupName: string, key: string): number
    /**
     * Returns the values associated with `key` under `group_name` as
     * integers.
     * 
     * If `key` cannot be found then %NULL is returned and `error` is set to
     * %G_KEY_FILE_ERROR_KEY_NOT_FOUND. Likewise, if the values associated
     * with `key` cannot be interpreted as integers, or are out of range for
     * #gint, then %NULL is returned
     * and `error` is set to %G_KEY_FILE_ERROR_INVALID_VALUE.
     * @param groupName a group name
     * @param key a key
     */
    getIntegerList(groupName: string, key: string): number[]
    /**
     * Returns all keys for the group name `group_name`.  The array of
     * returned keys will be %NULL-terminated, so `length` may
     * optionally be %NULL. In the event that the `group_name` cannot
     * be found, %NULL is returned and `error` is set to
     * %G_KEY_FILE_ERROR_GROUP_NOT_FOUND.
     * @param groupName a group name
     */
    getKeys(groupName: string): [ /* returnType */ string[], /* length */ number ]
    /**
     * Returns the actual locale which the result of
     * g_key_file_get_locale_string() or g_key_file_get_locale_string_list()
     * came from.
     * 
     * If calling g_key_file_get_locale_string() or
     * g_key_file_get_locale_string_list() with exactly the same `key_file,`
     * `group_name,` `key` and `locale,` the result of those functions will
     * have originally been tagged with the locale that is the result of
     * this function.
     * @param groupName a group name
     * @param key a key
     * @param locale a locale identifier or %NULL
     */
    getLocaleForKey(groupName: string, key: string, locale: string | null): string | null
    /**
     * Returns the value associated with `key` under `group_name`
     * translated in the given `locale` if available.  If `locale` is
     * %NULL then the current locale is assumed.
     * 
     * If `locale` is to be non-%NULL, or if the current locale will change over
     * the lifetime of the #GKeyFile, it must be loaded with
     * %G_KEY_FILE_KEEP_TRANSLATIONS in order to load strings for all locales.
     * 
     * If `key` cannot be found then %NULL is returned and `error` is set
     * to %G_KEY_FILE_ERROR_KEY_NOT_FOUND. If the value associated
     * with `key` cannot be interpreted or no suitable translation can
     * be found then the untranslated value is returned.
     * @param groupName a group name
     * @param key a key
     * @param locale a locale identifier or %NULL
     */
    getLocaleString(groupName: string, key: string, locale: string | null): string
    /**
     * Returns the values associated with `key` under `group_name`
     * translated in the given `locale` if available.  If `locale` is
     * %NULL then the current locale is assumed.
     * 
     * If `locale` is to be non-%NULL, or if the current locale will change over
     * the lifetime of the #GKeyFile, it must be loaded with
     * %G_KEY_FILE_KEEP_TRANSLATIONS in order to load strings for all locales.
     * 
     * If `key` cannot be found then %NULL is returned and `error` is set
     * to %G_KEY_FILE_ERROR_KEY_NOT_FOUND. If the values associated
     * with `key` cannot be interpreted or no suitable translations
     * can be found then the untranslated values are returned. The
     * returned array is %NULL-terminated, so `length` may optionally
     * be %NULL.
     * @param groupName a group name
     * @param key a key
     * @param locale a locale identifier or %NULL
     */
    getLocaleStringList(groupName: string, key: string, locale: string | null): string[]
    /**
     * Returns the name of the start group of the file.
     */
    getStartGroup(): string | null
    /**
     * Returns the string value associated with `key` under `group_name`.
     * Unlike g_key_file_get_value(), this function handles escape sequences
     * like \s.
     * 
     * In the event the key cannot be found, %NULL is returned and
     * `error` is set to %G_KEY_FILE_ERROR_KEY_NOT_FOUND.  In the
     * event that the `group_name` cannot be found, %NULL is returned
     * and `error` is set to %G_KEY_FILE_ERROR_GROUP_NOT_FOUND.
     * @param groupName a group name
     * @param key a key
     */
    getString(groupName: string, key: string): string
    /**
     * Returns the values associated with `key` under `group_name`.
     * 
     * In the event the key cannot be found, %NULL is returned and
     * `error` is set to %G_KEY_FILE_ERROR_KEY_NOT_FOUND.  In the
     * event that the `group_name` cannot be found, %NULL is returned
     * and `error` is set to %G_KEY_FILE_ERROR_GROUP_NOT_FOUND.
     * @param groupName a group name
     * @param key a key
     */
    getStringList(groupName: string, key: string): string[]
    /**
     * Returns the value associated with `key` under `group_name` as an unsigned
     * 64-bit integer. This is similar to g_key_file_get_integer() but can return
     * large positive results without truncation.
     * @param groupName a non-%NULL group name
     * @param key a non-%NULL key
     */
    getUint64(groupName: string, key: string): number
    /**
     * Returns the raw value associated with `key` under `group_name`.
     * Use g_key_file_get_string() to retrieve an unescaped UTF-8 string.
     * 
     * In the event the key cannot be found, %NULL is returned and
     * `error` is set to %G_KEY_FILE_ERROR_KEY_NOT_FOUND.  In the
     * event that the `group_name` cannot be found, %NULL is returned
     * and `error` is set to %G_KEY_FILE_ERROR_GROUP_NOT_FOUND.
     * @param groupName a group name
     * @param key a key
     */
    getValue(groupName: string, key: string): string
    /**
     * Looks whether the key file has the group `group_name`.
     * @param groupName a group name
     */
    hasGroup(groupName: string): boolean
    /**
     * Loads a key file from the data in `bytes` into an empty #GKeyFile structure.
     * If the object cannot be created then %error is set to a #GKeyFileError.
     * @param bytes a #GBytes
     * @param flags flags from #GKeyFileFlags
     */
    loadFromBytes(bytes: any, flags: KeyFileFlags): boolean
    /**
     * Loads a key file from memory into an empty #GKeyFile structure.
     * If the object cannot be created then %error is set to a #GKeyFileError.
     * @param data key file loaded in memory
     * @param length the length of `data` in bytes (or (gsize)-1 if data is nul-terminated)
     * @param flags flags from #GKeyFileFlags
     */
    loadFromData(data: string, length: number, flags: KeyFileFlags): boolean
    /**
     * This function looks for a key file named `file` in the paths
     * returned from g_get_user_data_dir() and g_get_system_data_dirs(),
     * loads the file into `key_file` and returns the file's full path in
     * `full_path`.  If the file could not be loaded then an %error is
     * set to either a #GFileError or #GKeyFileError.
     * @param file a relative path to a filename to open and parse
     * @param flags flags from #GKeyFileFlags
     */
    loadFromDataDirs(file: string, flags: KeyFileFlags): [ /* returnType */ boolean, /* fullPath */ string ]
    /**
     * This function looks for a key file named `file` in the paths
     * specified in `search_dirs,` loads the file into `key_file` and
     * returns the file's full path in `full_path`.
     * 
     * If the file could not be found in any of the `search_dirs,`
     * %G_KEY_FILE_ERROR_NOT_FOUND is returned. If
     * the file is found but the OS returns an error when opening or reading the
     * file, a %G_FILE_ERROR is returned. If there is a problem parsing the file, a
     * %G_KEY_FILE_ERROR is returned.
     * @param file a relative path to a filename to open and parse
     * @param searchDirs %NULL-terminated array of directories to search
     * @param flags flags from #GKeyFileFlags
     */
    loadFromDirs(file: string, searchDirs: string[], flags: KeyFileFlags): [ /* returnType */ boolean, /* fullPath */ string ]
    /**
     * Loads a key file into an empty #GKeyFile structure.
     * 
     * If the OS returns an error when opening or reading the file, a
     * %G_FILE_ERROR is returned. If there is a problem parsing the file, a
     * %G_KEY_FILE_ERROR is returned.
     * 
     * This function will never return a %G_KEY_FILE_ERROR_NOT_FOUND error. If the
     * `file` is not found, %G_FILE_ERROR_NOENT is returned.
     * @param file the path of a filename to load, in the GLib filename encoding
     * @param flags flags from #GKeyFileFlags
     */
    loadFromFile(file: string, flags: KeyFileFlags): boolean
    /**
     * Removes a comment above `key` from `group_name`.
     * If `key` is %NULL then `comment` will be removed above `group_name`.
     * If both `key` and `group_name` are %NULL, then `comment` will
     * be removed above the first group in the file.
     * @param groupName a group name, or %NULL
     * @param key a key
     */
    removeComment(groupName: string | null, key: string | null): boolean
    /**
     * Removes the specified group, `group_name,`
     * from the key file.
     * @param groupName a group name
     */
    removeGroup(groupName: string): boolean
    /**
     * Removes `key` in `group_name` from the key file.
     * @param groupName a group name
     * @param key a key name to remove
     */
    removeKey(groupName: string, key: string): boolean
    /**
     * Writes the contents of `key_file` to `filename` using
     * g_file_set_contents(). If you need stricter guarantees about durability of
     * the written file than are provided by g_file_set_contents(), use
     * g_file_set_contents_full() with the return value of g_key_file_to_data().
     * 
     * This function can fail for any of the reasons that
     * g_file_set_contents() may fail.
     * @param filename the name of the file to write to
     */
    saveToFile(filename: string): boolean
    /**
     * Associates a new boolean value with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param value %TRUE or %FALSE
     */
    setBoolean(groupName: string, key: string, value: boolean): void
    /**
     * Associates a list of boolean values with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * If `group_name` is %NULL, the start_group is used.
     * @param groupName a group name
     * @param key a key
     * @param list an array of boolean values
     */
    setBooleanList(groupName: string, key: string, list: boolean[]): void
    /**
     * Places a comment above `key` from `group_name`.
     * 
     * If `key` is %NULL then `comment` will be written above `group_name`.
     * If both `key` and `group_name`  are %NULL, then `comment` will be
     * written above the first group in the file.
     * 
     * Note that this function prepends a '#' comment marker to
     * each line of `comment`.
     * @param groupName a group name, or %NULL
     * @param key a key
     * @param comment a comment
     */
    setComment(groupName: string | null, key: string | null, comment: string): boolean
    /**
     * Associates a new double value with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param value a double value
     */
    setDouble(groupName: string, key: string, value: number): void
    /**
     * Associates a list of double values with `key` under
     * `group_name`.  If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param list an array of double values
     */
    setDoubleList(groupName: string, key: string, list: number[]): void
    /**
     * Associates a new integer value with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param value an integer value
     */
    setInt64(groupName: string, key: string, value: number): void
    /**
     * Associates a new integer value with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param value an integer value
     */
    setInteger(groupName: string, key: string, value: number): void
    /**
     * Associates a list of integer values with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param list an array of integer values
     */
    setIntegerList(groupName: string, key: string, list: number[]): void
    /**
     * Sets the character which is used to separate
     * values in lists. Typically ';' or ',' are used
     * as separators. The default list separator is ';'.
     * @param separator the separator
     */
    setListSeparator(separator: number): void
    /**
     * Associates a string value for `key` and `locale` under `group_name`.
     * If the translation for `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param locale a locale identifier
     * @param string a string
     */
    setLocaleString(groupName: string, key: string, locale: string, string: string): void
    /**
     * Associates a list of string values for `key` and `locale` under
     * `group_name`.  If the translation for `key` cannot be found then
     * it is created.
     * @param groupName a group name
     * @param key a key
     * @param locale a locale identifier
     * @param list a %NULL-terminated array of locale string values
     */
    setLocaleStringList(groupName: string, key: string, locale: string, list: string[]): void
    /**
     * Associates a new string value with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * If `group_name` cannot be found then it is created.
     * Unlike g_key_file_set_value(), this function handles characters
     * that need escaping, such as newlines.
     * @param groupName a group name
     * @param key a key
     * @param string a string
     */
    setString(groupName: string, key: string, string: string): void
    /**
     * Associates a list of string values for `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * If `group_name` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param list an array of string values
     */
    setStringList(groupName: string, key: string, list: string[]): void
    /**
     * Associates a new integer value with `key` under `group_name`.
     * If `key` cannot be found then it is created.
     * @param groupName a group name
     * @param key a key
     * @param value an integer value
     */
    setUint64(groupName: string, key: string, value: number): void
    /**
     * Associates a new value with `key` under `group_name`.
     * 
     * If `key` cannot be found then it is created. If `group_name` cannot
     * be found then it is created. To set an UTF-8 string which may contain
     * characters that need escaping (such as newlines or spaces), use
     * g_key_file_set_string().
     * @param groupName a group name
     * @param key a key
     * @param value a string
     */
    setValue(groupName: string, key: string, value: string): void
    /**
     * This function outputs `key_file` as a string.
     * 
     * Note that this function never reports an error,
     * so it is safe to pass %NULL as `error`.
     */
    toData(): [ /* returnType */ string, /* length */ number ]
    /**
     * Decreases the reference count of `key_file` by 1. If the reference count
     * reaches zero, frees the key file and all its allocated memory.
     */
    unref(): void
}

/**
 * The GKeyFile struct contains only private data
 * and should not be accessed directly.
 * @record 
 */
export class KeyFile {

    // Own properties of GLib-2.0.GLib.KeyFile

    static name: string

    // Constructors of GLib-2.0.GLib.KeyFile

    /**
     * Creates a new empty #GKeyFile object. Use
     * g_key_file_load_from_file(), g_key_file_load_from_data(),
     * g_key_file_load_from_dirs() or g_key_file_load_from_data_dirs() to
     * read an existing key file.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty #GKeyFile object. Use
     * g_key_file_load_from_file(), g_key_file_load_from_data(),
     * g_key_file_load_from_dirs() or g_key_file_load_from_data_dirs() to
     * read an existing key file.
     * @constructor 
     */
    static new(): KeyFile
    static errorQuark(): Quark
}

export interface List<A = any> {

    // Own fields of GLib-2.0.GLib.List

    /**
     * holds the element's data, which can be a pointer to any kind
     *        of data, or any integer value using the
     *        [Type Conversion Macros][glib-Type-Conversion-Macros]
     * @field 
     */
    data: object
    /**
     * contains the link to the next element in the list
     * @field 
     */
    next: object[]
    /**
     * contains the link to the previous element in the list
     * @field 
     */
    prev: object[]
}

/**
 * The #GList struct is used for each element in a doubly-linked list.
 * @record 
 */
export class List<A = any> {

    // Own properties of GLib-2.0.GLib.List

    static name: string
}

export interface LogField {

    // Own fields of GLib-2.0.GLib.LogField

    /**
     * field name (UTF-8 string)
     * @field 
     */
    key: string
    /**
     * field value (arbitrary bytes)
     * @field 
     */
    value: object
    /**
     * length of `value,` in bytes, or -1 if it is nul-terminated
     * @field 
     */
    length: number
}

/**
 * Structure representing a single field in a structured log entry. See
 * g_log_structured() for details.
 * 
 * Log fields may contain arbitrary values, including binary with embedded nul
 * bytes. If the field contains a string, the string must be UTF-8 encoded and
 * have a trailing nul byte. Otherwise, `length` must be set to a non-negative
 * value.
 * @record 
 */
export class LogField {

    // Own properties of GLib-2.0.GLib.LogField

    static name: string
}

export interface MainContext {

    // Owm methods of GLib-2.0.GLib.MainContext

    /**
     * Tries to become the owner of the specified context.
     * If some other thread is the owner of the context,
     * returns %FALSE immediately. Ownership is properly
     * recursive: the owner can require ownership again
     * and will release ownership when g_main_context_release()
     * is called as many times as g_main_context_acquire().
     * 
     * You must be the owner of a context before you
     * can call g_main_context_prepare(), g_main_context_query(),
     * g_main_context_check(), g_main_context_dispatch().
     */
    acquire(): boolean
    /**
     * Adds a file descriptor to the set of file descriptors polled for
     * this context. This will very seldom be used directly. Instead
     * a typical event source will use g_source_add_unix_fd() instead.
     * @param fd a #GPollFD structure holding information about a file      descriptor to watch.
     * @param priority the priority for this file descriptor which should be      the same as the priority used for g_source_attach() to ensure that the      file descriptor is polled whenever the results may be needed.
     */
    addPoll(fd: PollFD, priority: number): void
    /**
     * Passes the results of polling back to the main loop. You should be
     * careful to pass `fds` and its length `n_fds` as received from
     * g_main_context_query(), as this functions relies on assumptions
     * on how `fds` is filled.
     * 
     * You must have successfully acquired the context with
     * g_main_context_acquire() before you may call this function.
     * @param maxPriority the maximum numerical priority of sources to check
     * @param fds array of #GPollFD's that was passed to       the last call to g_main_context_query()
     */
    check(maxPriority: number, fds: PollFD[]): boolean
    /**
     * Dispatches all pending sources.
     * 
     * You must have successfully acquired the context with
     * g_main_context_acquire() before you may call this function.
     */
    dispatch(): void
    /**
     * Finds a source with the given source functions and user data.  If
     * multiple sources exist with the same source function and user data,
     * the first one found will be returned.
     * @param funcs the `source_funcs` passed to g_source_new().
     * @param userData the user data from the callback.
     */
    findSourceByFuncsUserData(funcs: SourceFuncs, userData: object | null): Source
    /**
     * Finds a #GSource given a pair of context and ID.
     * 
     * It is a programmer error to attempt to look up a non-existent source.
     * 
     * More specifically: source IDs can be reissued after a source has been
     * destroyed and therefore it is never valid to use this function with a
     * source ID which may have already been removed.  An example is when
     * scheduling an idle to run in another thread with g_idle_add(): the
     * idle may already have run and been removed by the time this function
     * is called on its (now invalid) source ID.  This source ID may have
     * been reissued, leading to the operation being performed against the
     * wrong source.
     * @param sourceId the source ID, as returned by g_source_get_id().
     */
    findSourceById(sourceId: number): Source
    /**
     * Finds a source with the given user data for the callback.  If
     * multiple sources exist with the same user data, the first
     * one found will be returned.
     * @param userData the user_data for the callback.
     */
    findSourceByUserData(userData: object | null): Source
    /**
     * Invokes a function in such a way that `context` is owned during the
     * invocation of `function`.
     * 
     * This function is the same as g_main_context_invoke() except that it
     * lets you specify the priority in case `function` ends up being
     * scheduled as an idle and also lets you give a #GDestroyNotify for `data`.
     * 
     * `notify` should not assume that it is called from any particular
     * thread or with any particular context acquired.
     * @param priority the priority at which to run `function`
     * @param function_ function to call
     */
    invokeFull(priority: number, function_: SourceFunc): void
    /**
     * Determines whether this thread holds the (recursive)
     * ownership of this #GMainContext. This is useful to
     * know before waiting on another thread that may be
     * blocking to get ownership of `context`.
     */
    isOwner(): boolean
    /**
     * Runs a single iteration for the given main loop. This involves
     * checking to see if any event sources are ready to be processed,
     * then if no events sources are ready and `may_block` is %TRUE, waiting
     * for a source to become ready, then dispatching the highest priority
     * events sources that are ready. Otherwise, if `may_block` is %FALSE
     * sources are not waited to become ready, only those highest priority
     * events sources will be dispatched (if any), that are ready at this
     * given moment without further waiting.
     * 
     * Note that even when `may_block` is %TRUE, it is still possible for
     * g_main_context_iteration() to return %FALSE, since the wait may
     * be interrupted for other reasons than an event source becoming ready.
     * @param mayBlock whether the call may block.
     */
    iteration(mayBlock: boolean): boolean
    /**
     * Checks if any sources have pending events for the given context.
     */
    pending(): boolean
    /**
     * Pops `context` off the thread-default context stack (verifying that
     * it was on the top of the stack).
     */
    popThreadDefault(): void
    /**
     * Prepares to poll sources within a main loop. The resulting information
     * for polling is determined by calling g_main_context_query ().
     * 
     * You must have successfully acquired the context with
     * g_main_context_acquire() before you may call this function.
     */
    prepare(): [ /* returnType */ boolean, /* priority */ number ]
    /**
     * Acquires `context` and sets it as the thread-default context for the
     * current thread. This will cause certain asynchronous operations
     * (such as most [gio][gio]-based I/O) which are
     * started in this thread to run under `context` and deliver their
     * results to its main loop, rather than running under the global
     * default context in the main thread. Note that calling this function
     * changes the context returned by g_main_context_get_thread_default(),
     * not the one returned by g_main_context_default(), so it does not affect
     * the context used by functions like g_idle_add().
     * 
     * Normally you would call this function shortly after creating a new
     * thread, passing it a #GMainContext which will be run by a
     * #GMainLoop in that thread, to set a new default context for all
     * async operations in that thread. In this case you may not need to
     * ever call g_main_context_pop_thread_default(), assuming you want the
     * new #GMainContext to be the default for the whole lifecycle of the
     * thread.
     * 
     * If you don't have control over how the new thread was created (e.g.
     * in the new thread isn't newly created, or if the thread life
     * cycle is managed by a #GThreadPool), it is always suggested to wrap
     * the logic that needs to use the new #GMainContext inside a
     * g_main_context_push_thread_default() / g_main_context_pop_thread_default()
     * pair, otherwise threads that are re-used will end up never explicitly
     * releasing the #GMainContext reference they hold.
     * 
     * In some cases you may want to schedule a single operation in a
     * non-default context, or temporarily use a non-default context in
     * the main thread. In that case, you can wrap the call to the
     * asynchronous operation inside a
     * g_main_context_push_thread_default() /
     * g_main_context_pop_thread_default() pair, but it is up to you to
     * ensure that no other asynchronous operations accidentally get
     * started while the non-default context is active.
     * 
     * Beware that libraries that predate this function may not correctly
     * handle being used from a thread with a thread-default context. Eg,
     * see g_file_supports_thread_contexts().
     */
    pushThreadDefault(): void
    /**
     * Determines information necessary to poll this main loop. You should
     * be careful to pass the resulting `fds` array and its length `n_fds`
     * as is when calling g_main_context_check(), as this function relies
     * on assumptions made when the array is filled.
     * 
     * You must have successfully acquired the context with
     * g_main_context_acquire() before you may call this function.
     * @param maxPriority maximum priority source to check
     */
    query(maxPriority: number): [ /* returnType */ number, /* timeout */ number, /* fds */ PollFD[] ]
    /**
     * Increases the reference count on a #GMainContext object by one.
     */
    ref(): MainContext
    /**
     * Releases ownership of a context previously acquired by this thread
     * with g_main_context_acquire(). If the context was acquired multiple
     * times, the ownership will be released only when g_main_context_release()
     * is called as many times as it was acquired.
     */
    release(): void
    /**
     * Removes file descriptor from the set of file descriptors to be
     * polled for a particular context.
     * @param fd a #GPollFD descriptor previously added with g_main_context_add_poll()
     */
    removePoll(fd: PollFD): void
    /**
     * Decreases the reference count on a #GMainContext object by one. If
     * the result is zero, free the context and free all associated memory.
     */
    unref(): void
    /**
     * Tries to become the owner of the specified context,
     * as with g_main_context_acquire(). But if another thread
     * is the owner, atomically drop `mutex` and wait on `cond` until
     * that owner releases ownership or until `cond` is signaled, then
     * try again (once) to become the owner.
     * @param cond a condition variable
     * @param mutex a mutex, currently held
     */
    wait(cond: Cond, mutex: Mutex): boolean
    /**
     * If `context` is currently blocking in g_main_context_iteration()
     * waiting for a source to become ready, cause it to stop blocking
     * and return.  Otherwise, cause the next invocation of
     * g_main_context_iteration() to return without blocking.
     * 
     * This API is useful for low-level control over #GMainContext; for
     * example, integrating it with main loop implementations such as
     * #GMainLoop.
     * 
     * Another related use for this function is when implementing a main
     * loop with a termination condition, computed from multiple threads:
     * 
     * 
     * ```c
     *   #define NUM_TASKS 10
     *   static gint tasks_remaining = NUM_TASKS;  // (atomic)
     *   ...
     *  
     *   while (g_atomic_int_get (&tasks_remaining) != 0)
     *     g_main_context_iteration (NULL, TRUE);
     * ```
     * 
     *  
     * Then in a thread:
     * 
     * ```c
     *   perform_work();
     * 
     *   if (g_atomic_int_dec_and_test (&tasks_remaining))
     *     g_main_context_wakeup (NULL);
     * ```
     * 
     */
    wakeup(): void
}

/**
 * The `GMainContext` struct is an opaque data
 * type representing a set of sources to be handled in a main loop.
 * @record 
 */
export class MainContext {

    // Own properties of GLib-2.0.GLib.MainContext

    static name: string

    // Constructors of GLib-2.0.GLib.MainContext

    /**
     * Creates a new #GMainContext structure.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GMainContext structure.
     * @constructor 
     */
    static new(): MainContext
    /**
     * Creates a new #GMainContext structure.
     * @constructor 
     * @param flags a bitwise-OR combination of #GMainContextFlags flags that can only be         set at creation time.
     */
    static newWithFlags(flags: MainContextFlags): MainContext
    /**
     * Returns the global default main context. This is the main context
     * used for main loop functions when a main loop is not explicitly
     * specified, and corresponds to the "main" main loop. See also
     * g_main_context_get_thread_default().
     */
    static default(): MainContext
    /**
     * Gets the thread-default #GMainContext for this thread. Asynchronous
     * operations that want to be able to be run in contexts other than
     * the default one should call this method or
     * g_main_context_ref_thread_default() to get a #GMainContext to add
     * their #GSources to. (Note that even in single-threaded
     * programs applications may sometimes want to temporarily push a
     * non-default context, so it is not safe to assume that this will
     * always return %NULL if you are running in the default thread.)
     * 
     * If you need to hold a reference on the context, use
     * g_main_context_ref_thread_default() instead.
     */
    static getThreadDefault(): MainContext | null
    /**
     * Gets the thread-default #GMainContext for this thread, as with
     * g_main_context_get_thread_default(), but also adds a reference to
     * it with g_main_context_ref(). In addition, unlike
     * g_main_context_get_thread_default(), if the thread-default context
     * is the global default context, this will return that #GMainContext
     * (with a ref added to it) rather than returning %NULL.
     */
    static refThreadDefault(): MainContext
}

export interface MainLoop {

    // Owm methods of GLib-2.0.GLib.MainLoop

    /**
     * Returns the #GMainContext of `loop`.
     */
    getContext(): MainContext
    /**
     * Checks to see if the main loop is currently being run via g_main_loop_run().
     */
    isRunning(): boolean
    /**
     * Stops a #GMainLoop from running. Any calls to g_main_loop_run()
     * for the loop will return.
     * 
     * Note that sources that have already been dispatched when
     * g_main_loop_quit() is called will still be executed.
     */
    quit(): void
    /**
     * Increases the reference count on a #GMainLoop object by one.
     */
    ref(): MainLoop
    /**
     * Runs a main loop until g_main_loop_quit() is called on the loop.
     * If this is called for the thread of the loop's #GMainContext,
     * it will process events from the loop, otherwise it will
     * simply wait.
     */
    run(): void
    /**
     * Decreases the reference count on a #GMainLoop object by one. If
     * the result is zero, free the loop and free all associated memory.
     */
    unref(): void
    run(): void
    quit(): void
}

/**
 * The `GMainLoop` struct is an opaque data type
 * representing the main event loop of a GLib or GTK+ application.
 * @record 
 */
export class MainLoop {

    // Own properties of GLib-2.0.GLib.MainLoop

    static name: string

    // Constructors of GLib-2.0.GLib.MainLoop

    /**
     * Creates a new #GMainLoop structure.
     * @constructor 
     * @param context a #GMainContext  (if %NULL, the default context will be used).
     * @param isRunning set to %TRUE to indicate that the loop is running. This is not very important since calling g_main_loop_run() will set this to %TRUE anyway.
     */
    constructor(context: MainContext | null, isRunning: boolean) 
    /**
     * Creates a new #GMainLoop structure.
     * @constructor 
     * @param context a #GMainContext  (if %NULL, the default context will be used).
     * @param isRunning set to %TRUE to indicate that the loop is running. This is not very important since calling g_main_loop_run() will set this to %TRUE anyway.
     */
    static new(context: MainContext | null, isRunning: boolean): MainLoop
}

export interface MappedFile {

    // Owm methods of GLib-2.0.GLib.MappedFile

    /**
     * This call existed before #GMappedFile had refcounting and is currently
     * exactly the same as g_mapped_file_unref().
     */
    free(): void
    /**
     * Creates a new #GBytes which references the data mapped from `file`.
     * The mapped contents of the file must not be modified after creating this
     * bytes object, because a #GBytes should be immutable.
     */
    getBytes(): any
    /**
     * Returns the contents of a #GMappedFile.
     * 
     * Note that the contents may not be zero-terminated,
     * even if the #GMappedFile is backed by a text file.
     * 
     * If the file is empty then %NULL is returned.
     */
    getContents(): string
    /**
     * Returns the length of the contents of a #GMappedFile.
     */
    getLength(): number
    /**
     * Increments the reference count of `file` by one.  It is safe to call
     * this function from any thread.
     */
    ref(): MappedFile
    /**
     * Decrements the reference count of `file` by one.  If the reference count
     * drops to 0, unmaps the buffer of `file` and frees it.
     * 
     * It is safe to call this function from any thread.
     * 
     * Since 2.22
     */
    unref(): void
}

/**
 * The #GMappedFile represents a file mapping created with
 * g_mapped_file_new(). It has only private members and should
 * not be accessed directly.
 * @record 
 */
export class MappedFile {

    // Own properties of GLib-2.0.GLib.MappedFile

    static name: string

    // Constructors of GLib-2.0.GLib.MappedFile

    /**
     * Maps a file into memory. On UNIX, this is using the mmap() function.
     * 
     * If `writable` is %TRUE, the mapped buffer may be modified, otherwise
     * it is an error to modify the mapped buffer. Modifications to the buffer
     * are not visible to other processes mapping the same file, and are not
     * written back to the file.
     * 
     * Note that modifications of the underlying file might affect the contents
     * of the #GMappedFile. Therefore, mapping should only be used if the file
     * will not be modified, or if all modifications of the file are done
     * atomically (e.g. using g_file_set_contents()).
     * 
     * If `filename` is the name of an empty, regular file, the function
     * will successfully return an empty #GMappedFile. In other cases of
     * size 0 (e.g. device files such as /dev/null), `error` will be set
     * to the #GFileError value %G_FILE_ERROR_INVAL.
     * @constructor 
     * @param filename The path of the file to load, in the GLib     filename encoding
     * @param writable whether the mapping should be writable
     */
    constructor(filename: string, writable: boolean) 
    /**
     * Maps a file into memory. On UNIX, this is using the mmap() function.
     * 
     * If `writable` is %TRUE, the mapped buffer may be modified, otherwise
     * it is an error to modify the mapped buffer. Modifications to the buffer
     * are not visible to other processes mapping the same file, and are not
     * written back to the file.
     * 
     * Note that modifications of the underlying file might affect the contents
     * of the #GMappedFile. Therefore, mapping should only be used if the file
     * will not be modified, or if all modifications of the file are done
     * atomically (e.g. using g_file_set_contents()).
     * 
     * If `filename` is the name of an empty, regular file, the function
     * will successfully return an empty #GMappedFile. In other cases of
     * size 0 (e.g. device files such as /dev/null), `error` will be set
     * to the #GFileError value %G_FILE_ERROR_INVAL.
     * @constructor 
     * @param filename The path of the file to load, in the GLib     filename encoding
     * @param writable whether the mapping should be writable
     */
    static new(filename: string, writable: boolean): MappedFile
    /**
     * Maps a file into memory. On UNIX, this is using the mmap() function.
     * 
     * If `writable` is %TRUE, the mapped buffer may be modified, otherwise
     * it is an error to modify the mapped buffer. Modifications to the buffer
     * are not visible to other processes mapping the same file, and are not
     * written back to the file.
     * 
     * Note that modifications of the underlying file might affect the contents
     * of the #GMappedFile. Therefore, mapping should only be used if the file
     * will not be modified, or if all modifications of the file are done
     * atomically (e.g. using g_file_set_contents()).
     * @constructor 
     * @param fd The file descriptor of the file to load
     * @param writable whether the mapping should be writable
     */
    static newFromFd(fd: number, writable: boolean): MappedFile
}

export interface MarkupParseContext {

    // Owm methods of GLib-2.0.GLib.MarkupParseContext

    /**
     * Signals to the #GMarkupParseContext that all data has been
     * fed into the parse context with g_markup_parse_context_parse().
     * 
     * This function reports an error if the document isn't complete,
     * for example if elements are still open.
     */
    endParse(): boolean
    /**
     * Frees a #GMarkupParseContext.
     * 
     * This function can't be called from inside one of the
     * #GMarkupParser functions or while a subparser is pushed.
     */
    free(): void
    /**
     * Retrieves the name of the currently open element.
     * 
     * If called from the start_element or end_element handlers this will
     * give the element_name as passed to those functions. For the parent
     * elements, see g_markup_parse_context_get_element_stack().
     */
    getElement(): string
    /**
     * Retrieves the current line number and the number of the character on
     * that line. Intended for use in error messages; there are no strict
     * semantics for what constitutes the "current" line number other than
     * "the best number we could come up with for error messages."
     */
    getPosition(): [ /* lineNumber */ number, /* charNumber */ number ]
    /**
     * Returns the user_data associated with `context`.
     * 
     * This will either be the user_data that was provided to
     * g_markup_parse_context_new() or to the most recent call
     * of g_markup_parse_context_push().
     */
    getUserData(): object | null
    /**
     * Feed some data to the #GMarkupParseContext.
     * 
     * The data need not be valid UTF-8; an error will be signaled if
     * it's invalid. The data need not be an entire document; you can
     * feed a document into the parser incrementally, via multiple calls
     * to this function. Typically, as you receive data from a network
     * connection or file, you feed each received chunk of data into this
     * function, aborting the process if an error occurs. Once an error
     * is reported, no further data may be fed to the #GMarkupParseContext;
     * all errors are fatal.
     * @param text chunk of text to parse
     * @param textLen length of `text` in bytes
     */
    parse(text: string, textLen: number): boolean
    /**
     * Completes the process of a temporary sub-parser redirection.
     * 
     * This function exists to collect the user_data allocated by a
     * matching call to g_markup_parse_context_push(). It must be called
     * in the end_element handler corresponding to the start_element
     * handler during which g_markup_parse_context_push() was called.
     * You must not call this function from the error callback -- the
     * `user_data` is provided directly to the callback in that case.
     * 
     * This function is not intended to be directly called by users
     * interested in invoking subparsers. Instead, it is intended to
     * be used by the subparsers themselves to implement a higher-level
     * interface.
     */
    pop(): object | null
    /**
     * Temporarily redirects markup data to a sub-parser.
     * 
     * This function may only be called from the start_element handler of
     * a #GMarkupParser. It must be matched with a corresponding call to
     * g_markup_parse_context_pop() in the matching end_element handler
     * (except in the case that the parser aborts due to an error).
     * 
     * All tags, text and other data between the matching tags is
     * redirected to the subparser given by `parser`. `user_data` is used
     * as the user_data for that parser. `user_data` is also passed to the
     * error callback in the event that an error occurs. This includes
     * errors that occur in subparsers of the subparser.
     * 
     * The end tag matching the start tag for which this call was made is
     * handled by the previous parser (which is given its own user_data)
     * which is why g_markup_parse_context_pop() is provided to allow "one
     * last access" to the `user_data` provided to this function. In the
     * case of error, the `user_data` provided here is passed directly to
     * the error callback of the subparser and g_markup_parse_context_pop()
     * should not be called. In either case, if `user_data` was allocated
     * then it ought to be freed from both of these locations.
     * 
     * This function is not intended to be directly called by users
     * interested in invoking subparsers. Instead, it is intended to be
     * used by the subparsers themselves to implement a higher-level
     * interface.
     * 
     * As an example, see the following implementation of a simple
     * parser that counts the number of tags encountered.
     * 
     * 
     * ```c
     * typedef struct
     * {
     *   gint tag_count;
     * } CounterData;
     * 
     * static void
     * counter_start_element (GMarkupParseContext  *context,
     *                        const gchar          *element_name,
     *                        const gchar         **attribute_names,
     *                        const gchar         **attribute_values,
     *                        gpointer              user_data,
     *                        GError              **error)
     * {
     *   CounterData *data = user_data;
     * 
     *   data->tag_count++;
     * }
     * 
     * static void
     * counter_error (GMarkupParseContext *context,
     *                GError              *error,
     *                gpointer             user_data)
     * {
     *   CounterData *data = user_data;
     * 
     *   g_slice_free (CounterData, data);
     * }
     * 
     * static GMarkupParser counter_subparser =
     * {
     *   counter_start_element,
     *   NULL,
     *   NULL,
     *   NULL,
     *   counter_error
     * };
     * ```
     * 
     * 
     * In order to allow this parser to be easily used as a subparser, the
     * following interface is provided:
     * 
     * 
     * ```c
     * void
     * start_counting (GMarkupParseContext *context)
     * {
     *   CounterData *data = g_slice_new (CounterData);
     * 
     *   data->tag_count = 0;
     *   g_markup_parse_context_push (context, &counter_subparser, data);
     * }
     * 
     * gint
     * end_counting (GMarkupParseContext *context)
     * {
     *   CounterData *data = g_markup_parse_context_pop (context);
     *   int result;
     * 
     *   result = data->tag_count;
     *   g_slice_free (CounterData, data);
     * 
     *   return result;
     * }
     * ```
     * 
     * 
     * The subparser would then be used as follows:
     * 
     * 
     * ```c
     * static void start_element (context, element_name, ...)
     * {
     *   if (strcmp (element_name, "count-these") == 0)
     *     start_counting (context);
     * 
     *   // else, handle other tags...
     * }
     * 
     * static void end_element (context, element_name, ...)
     * {
     *   if (strcmp (element_name, "count-these") == 0)
     *     g_print ("Counted %d tags\n", end_counting (context));
     * 
     *   // else, handle other tags...
     * }
     * ```
     * 
     * @param parser a #GMarkupParser
     * @param userData user data to pass to #GMarkupParser functions
     */
    push(parser: MarkupParser, userData: object | null): void
    /**
     * Increases the reference count of `context`.
     */
    ref(): MarkupParseContext
    /**
     * Decreases the reference count of `context`.  When its reference count
     * drops to 0, it is freed.
     */
    unref(): void
}

/**
 * A parse context is used to parse a stream of bytes that
 * you expect to contain marked-up text.
 * 
 * See g_markup_parse_context_new(), #GMarkupParser, and so
 * on for more details.
 * @record 
 */
export class MarkupParseContext {

    // Own properties of GLib-2.0.GLib.MarkupParseContext

    static name: string

    // Constructors of GLib-2.0.GLib.MarkupParseContext

    /**
     * Creates a new parse context. A parse context is used to parse
     * marked-up documents. You can feed any number of documents into
     * a context, as long as no errors occur; once an error occurs,
     * the parse context can't continue to parse text (you have to
     * free it and create a new parse context).
     * @constructor 
     * @param parser a #GMarkupParser
     * @param flags one or more #GMarkupParseFlags
     * @param userData user data to pass to #GMarkupParser functions
     * @param userDataDnotify user data destroy notifier called when     the parse context is freed
     */
    constructor(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify) 
    /**
     * Creates a new parse context. A parse context is used to parse
     * marked-up documents. You can feed any number of documents into
     * a context, as long as no errors occur; once an error occurs,
     * the parse context can't continue to parse text (you have to
     * free it and create a new parse context).
     * @constructor 
     * @param parser a #GMarkupParser
     * @param flags one or more #GMarkupParseFlags
     * @param userData user data to pass to #GMarkupParser functions
     * @param userDataDnotify user data destroy notifier called when     the parse context is freed
     */
    static new(parser: MarkupParser, flags: MarkupParseFlags, userData: object | null, userDataDnotify: DestroyNotify): MarkupParseContext
}

export interface MarkupParser {

    // Own fields of GLib-2.0.GLib.MarkupParser

    startElement: (context: MarkupParseContext, elementName: string, attributeNames: string, attributeValues: string) => void
    endElement: (context: MarkupParseContext, elementName: string) => void
    text: (context: MarkupParseContext, text: string, textLen: number) => void
    passthrough: (context: MarkupParseContext, passthroughText: string, textLen: number) => void
    error: (context: MarkupParseContext, error: Error) => void
}

/**
 * Any of the fields in #GMarkupParser can be %NULL, in which case they
 * will be ignored. Except for the `error` function, any of these callbacks
 * can set an error; in particular the %G_MARKUP_ERROR_UNKNOWN_ELEMENT,
 * %G_MARKUP_ERROR_UNKNOWN_ATTRIBUTE, and %G_MARKUP_ERROR_INVALID_CONTENT
 * errors are intended to be set from these callbacks. If you set an error
 * from a callback, g_markup_parse_context_parse() will report that error
 * back to its caller.
 * @record 
 */
export class MarkupParser {

    // Own properties of GLib-2.0.GLib.MarkupParser

    static name: string
}

export interface MatchInfo {

    // Owm methods of GLib-2.0.GLib.MatchInfo

    /**
     * Returns a new string containing the text in `string_to_expand` with
     * references and escape sequences expanded. References refer to the last
     * match done with `string` against `regex` and have the same syntax used by
     * g_regex_replace().
     * 
     * The `string_to_expand` must be UTF-8 encoded even if %G_REGEX_RAW was
     * passed to g_regex_new().
     * 
     * The backreferences are extracted from the string passed to the match
     * function, so you cannot call this function after freeing the string.
     * 
     * `match_info` may be %NULL in which case `string_to_expand` must not
     * contain references. For instance "foo\n" does not refer to an actual
     * pattern and '\n' merely will be replaced with \n character,
     * while to expand "\0" (whole match) one needs the result of a match.
     * Use g_regex_check_replacement() to find out whether `string_to_expand`
     * contains references.
     * @param stringToExpand the string to expand
     */
    expandReferences(stringToExpand: string): string | null
    /**
     * Retrieves the text matching the `match_num'`th capturing
     * parentheses. 0 is the full text of the match, 1 is the first paren
     * set, 2 the second, and so on.
     * 
     * If `match_num` is a valid sub pattern but it didn't match anything
     * (e.g. sub pattern 1, matching "b" against "(a)?b") then an empty
     * string is returned.
     * 
     * If the match was obtained using the DFA algorithm, that is using
     * g_regex_match_all() or g_regex_match_all_full(), the retrieved
     * string is not that of a set of parentheses but that of a matched
     * substring. Substrings are matched in reverse order of length, so
     * 0 is the longest match.
     * 
     * The string is fetched from the string passed to the match function,
     * so you cannot call this function after freeing the string.
     * @param matchNum number of the sub expression
     */
    fetch(matchNum: number): string | null
    /**
     * Bundles up pointers to each of the matching substrings from a match
     * and stores them in an array of gchar pointers. The first element in
     * the returned array is the match number 0, i.e. the entire matched
     * text.
     * 
     * If a sub pattern didn't match anything (e.g. sub pattern 1, matching
     * "b" against "(a)?b") then an empty string is inserted.
     * 
     * If the last match was obtained using the DFA algorithm, that is using
     * g_regex_match_all() or g_regex_match_all_full(), the retrieved
     * strings are not that matched by sets of parentheses but that of the
     * matched substring. Substrings are matched in reverse order of length,
     * so the first one is the longest match.
     * 
     * The strings are fetched from the string passed to the match function,
     * so you cannot call this function after freeing the string.
     */
    fetchAll(): string[]
    /**
     * Retrieves the text matching the capturing parentheses named `name`.
     * 
     * If `name` is a valid sub pattern name but it didn't match anything
     * (e.g. sub pattern "X", matching "b" against "(?P<X>a)?b")
     * then an empty string is returned.
     * 
     * The string is fetched from the string passed to the match function,
     * so you cannot call this function after freeing the string.
     * @param name name of the subexpression
     */
    fetchNamed(name: string): string | null
    /**
     * Retrieves the position in bytes of the capturing parentheses named `name`.
     * 
     * If `name` is a valid sub pattern name but it didn't match anything
     * (e.g. sub pattern "X", matching "b" against "(?P<X>a)?b")
     * then `start_pos` and `end_pos` are set to -1 and %TRUE is returned.
     * @param name name of the subexpression
     */
    fetchNamedPos(name: string): [ /* returnType */ boolean, /* startPos */ number, /* endPos */ number ]
    /**
     * Retrieves the position in bytes of the `match_num'`th capturing
     * parentheses. 0 is the full text of the match, 1 is the first
     * paren set, 2 the second, and so on.
     * 
     * If `match_num` is a valid sub pattern but it didn't match anything
     * (e.g. sub pattern 1, matching "b" against "(a)?b") then `start_pos`
     * and `end_pos` are set to -1 and %TRUE is returned.
     * 
     * If the match was obtained using the DFA algorithm, that is using
     * g_regex_match_all() or g_regex_match_all_full(), the retrieved
     * position is not that of a set of parentheses but that of a matched
     * substring. Substrings are matched in reverse order of length, so
     * 0 is the longest match.
     * @param matchNum number of the sub expression
     */
    fetchPos(matchNum: number): [ /* returnType */ boolean, /* startPos */ number, /* endPos */ number ]
    /**
     * If `match_info` is not %NULL, calls g_match_info_unref(); otherwise does
     * nothing.
     */
    free(): void
    /**
     * Retrieves the number of matched substrings (including substring 0,
     * that is the whole matched text), so 1 is returned if the pattern
     * has no substrings in it and 0 is returned if the match failed.
     * 
     * If the last match was obtained using the DFA algorithm, that is
     * using g_regex_match_all() or g_regex_match_all_full(), the retrieved
     * count is not that of the number of capturing parentheses but that of
     * the number of matched substrings.
     */
    getMatchCount(): number
    /**
     * Returns #GRegex object used in `match_info`. It belongs to Glib
     * and must not be freed. Use g_regex_ref() if you need to keep it
     * after you free `match_info` object.
     */
    getRegex(): Regex
    /**
     * Returns the string searched with `match_info`. This is the
     * string passed to g_regex_match() or g_regex_replace() so
     * you may not free it before calling this function.
     */
    getString(): string
    /**
     * Usually if the string passed to g_regex_match*() matches as far as
     * it goes, but is too short to match the entire pattern, %FALSE is
     * returned. There are circumstances where it might be helpful to
     * distinguish this case from other cases in which there is no match.
     * 
     * Consider, for example, an application where a human is required to
     * type in data for a field with specific formatting requirements. An
     * example might be a date in the form ddmmmyy, defined by the pattern
     * "^\d?\d(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)\d\d$".
     * If the application sees the user’s keystrokes one by one, and can
     * check that what has been typed so far is potentially valid, it is
     * able to raise an error as soon as a mistake is made.
     * 
     * GRegex supports the concept of partial matching by means of the
     * %G_REGEX_MATCH_PARTIAL_SOFT and %G_REGEX_MATCH_PARTIAL_HARD flags.
     * When they are used, the return code for
     * g_regex_match() or g_regex_match_full() is, as usual, %TRUE
     * for a complete match, %FALSE otherwise. But, when these functions
     * return %FALSE, you can check if the match was partial calling
     * g_match_info_is_partial_match().
     * 
     * The difference between %G_REGEX_MATCH_PARTIAL_SOFT and
     * %G_REGEX_MATCH_PARTIAL_HARD is that when a partial match is encountered
     * with %G_REGEX_MATCH_PARTIAL_SOFT, matching continues to search for a
     * possible complete match, while with %G_REGEX_MATCH_PARTIAL_HARD matching
     * stops at the partial match.
     * When both %G_REGEX_MATCH_PARTIAL_SOFT and %G_REGEX_MATCH_PARTIAL_HARD
     * are set, the latter takes precedence.
     * 
     * There were formerly some restrictions on the pattern for partial matching.
     * The restrictions no longer apply.
     * 
     * See pcrepartial(3) for more information on partial matching.
     */
    isPartialMatch(): boolean
    /**
     * Returns whether the previous match operation succeeded.
     */
    matches(): boolean
    /**
     * Scans for the next match using the same parameters of the previous
     * call to g_regex_match_full() or g_regex_match() that returned
     * `match_info`.
     * 
     * The match is done on the string passed to the match function, so you
     * cannot free it before calling this function.
     */
    next(): boolean
    /**
     * Increases reference count of `match_info` by 1.
     */
    ref(): MatchInfo
    /**
     * Decreases reference count of `match_info` by 1. When reference count drops
     * to zero, it frees all the memory associated with the match_info structure.
     */
    unref(): void
}

/**
 * A GMatchInfo is an opaque struct used to return information about
 * matches.
 * @record 
 */
export class MatchInfo {

    // Own properties of GLib-2.0.GLib.MatchInfo

    static name: string
}

export interface MemVTable {

    // Own fields of GLib-2.0.GLib.MemVTable

    malloc: (nBytes: number) => object
    realloc: (mem: object, nBytes: number) => object
    free: (mem: object) => void
    calloc: (nBlocks: number, nBlockBytes: number) => object
    tryMalloc: (nBytes: number) => object
    tryRealloc: (mem: object, nBytes: number) => object
}

/**
 * A set of functions used to perform memory allocation. The same #GMemVTable must
 * be used for all allocations in the same program; a call to g_mem_set_vtable(),
 * if it exists, should be prior to any use of GLib.
 * 
 * This functions related to this has been deprecated in 2.46, and no longer work.
 * @record 
 */
export class MemVTable {

    // Own properties of GLib-2.0.GLib.MemVTable

    static name: string
}

export interface Node {

    // Own fields of GLib-2.0.GLib.Node

    /**
     * contains the actual data of the node.
     * @field 
     */
    data: object
    /**
     * points to the node's next sibling (a sibling is another
     *        #GNode with the same parent).
     * @field 
     */
    next: Node
    /**
     * points to the node's previous sibling.
     * @field 
     */
    prev: Node
    /**
     * points to the parent of the #GNode, or is %NULL if the
     *          #GNode is the root of the tree.
     * @field 
     */
    parent: Node
    /**
     * points to the first child of the #GNode.  The other
     *            children are accessed by using the `next` pointer of each
     *            child.
     * @field 
     */
    children: Node

    // Owm methods of GLib-2.0.GLib.Node

    /**
     * Gets the position of the first child of a #GNode
     * which contains the given data.
     * @param data the data to find
     */
    childIndex(data: object | null): number
    /**
     * Gets the position of a #GNode with respect to its siblings.
     * `child` must be a child of `node`. The first child is numbered 0,
     * the second 1, and so on.
     * @param child a child of `node`
     */
    childPosition(child: Node): number
    /**
     * Gets the depth of a #GNode.
     * 
     * If `node` is %NULL the depth is 0. The root node has a depth of 1.
     * For the children of the root node the depth is 2. And so on.
     */
    depth(): number
    /**
     * Removes `root` and its children from the tree, freeing any memory
     * allocated.
     */
    destroy(): void
    /**
     * Returns %TRUE if `node` is an ancestor of `descendant`.
     * This is true if node is the parent of `descendant,`
     * or if node is the grandparent of `descendant` etc.
     * @param descendant a #GNode
     */
    isAncestor(descendant: Node): boolean
    /**
     * Gets the maximum height of all branches beneath a #GNode.
     * This is the maximum distance from the #GNode to all leaf nodes.
     * 
     * If `root` is %NULL, 0 is returned. If `root` has no children,
     * 1 is returned. If `root` has children, 2 is returned. And so on.
     */
    maxHeight(): number
    /**
     * Gets the number of children of a #GNode.
     */
    nChildren(): number
    /**
     * Gets the number of nodes in a tree.
     * @param flags which types of children are to be counted, one of     %G_TRAVERSE_ALL, %G_TRAVERSE_LEAVES and %G_TRAVERSE_NON_LEAVES
     */
    nNodes(flags: TraverseFlags): number
    /**
     * Reverses the order of the children of a #GNode.
     * (It doesn't change the order of the grandchildren.)
     */
    reverseChildren(): void
    /**
     * Unlinks a #GNode from a tree, resulting in two separate trees.
     */
    unlink(): void
}

/**
 * The #GNode struct represents one node in a [n-ary tree][glib-N-ary-Trees].
 * @record 
 */
export class Node {

    // Own properties of GLib-2.0.GLib.Node

    static name: string
}

export interface Once {

    // Own fields of GLib-2.0.GLib.Once

    /**
     * the status of the #GOnce
     * @field 
     */
    status: OnceStatus
    /**
     * the value returned by the call to the function, if `status`
     *          is %G_ONCE_STATUS_READY
     * @field 
     */
    retval: object
}

/**
 * A #GOnce struct controls a one-time initialization function. Any
 * one-time initialization function must have its own unique #GOnce
 * struct.
 * @record 
 */
export class Once {

    // Own properties of GLib-2.0.GLib.Once

    static name: string

    // Constructors of GLib-2.0.GLib.Once

    /**
     * Function to be called when starting a critical initialization
     * section. The argument `location` must point to a static
     * 0-initialized variable that will be set to a value other than 0 at
     * the end of the initialization section. In combination with
     * g_once_init_leave() and the unique address `value_location,` it can
     * be ensured that an initialization section will be executed only once
     * during a program's life time, and that concurrent threads are
     * blocked until initialization completed. To be used in constructs
     * like this:
     * 
     * 
     * ```c
     *   static gsize initialization_value = 0;
     * 
     *   if (g_once_init_enter (&initialization_value))
     *     {
     *       gsize setup_value = 42; // initialization code here
     * 
     *       g_once_init_leave (&initialization_value, setup_value);
     *     }
     * 
     *   // use initialization_value here
     * ```
     * 
     * 
     * While `location` has a `volatile` qualifier, this is a historical artifact and
     * the pointer passed to it should not be `volatile`.
     * @param location location of a static initializable variable    containing 0
     */
    static initEnter(location: object): boolean
    /**
     * Counterpart to g_once_init_enter(). Expects a location of a static
     * 0-initialized initialization variable, and an initialization value
     * other than 0. Sets the variable to the initialization value, and
     * releases concurrent threads blocking in g_once_init_enter() on this
     * initialization variable.
     * 
     * While `location` has a `volatile` qualifier, this is a historical artifact and
     * the pointer passed to it should not be `volatile`.
     * @param location location of a static initializable variable    containing 0
     * @param result new non-0 value for *`value_location`
     */
    static initLeave(location: object, result: number): void
}

export interface OptionContext {

    // Owm methods of GLib-2.0.GLib.OptionContext

    /**
     * Adds a #GOptionGroup to the `context,` so that parsing with `context`
     * will recognize the options in the group. Note that this will take
     * ownership of the `group` and thus the `group` should not be freed.
     * @param group the group to add
     */
    addGroup(group: OptionGroup): void
    /**
     * A convenience function which creates a main group if it doesn't
     * exist, adds the `entries` to it and sets the translation domain.
     * @param entries a %NULL-terminated array of #GOptionEntrys
     * @param translationDomain a translation domain to use for translating    the `--help` output for the options in `entries`    with gettext(), or %NULL
     */
    addMainEntries(entries: OptionEntry[], translationDomain: string | null): void
    /**
     * Frees context and all the groups which have been
     * added to it.
     * 
     * Please note that parsed arguments need to be freed separately (see
     * #GOptionEntry).
     */
    free(): void
    /**
     * Returns the description. See g_option_context_set_description().
     */
    getDescription(): string
    /**
     * Returns a formatted, translated help text for the given context.
     * To obtain the text produced by `--help`, call
     * `g_option_context_get_help (context, TRUE, NULL)`.
     * To obtain the text produced by `--help-all`, call
     * `g_option_context_get_help (context, FALSE, NULL)`.
     * To obtain the help text for an option group, call
     * `g_option_context_get_help (context, FALSE, group)`.
     * @param mainHelp if %TRUE, only include the main group
     * @param group the #GOptionGroup to create help for, or %NULL
     */
    getHelp(mainHelp: boolean, group: OptionGroup | null): string
    /**
     * Returns whether automatic `--help` generation
     * is turned on for `context`. See g_option_context_set_help_enabled().
     */
    getHelpEnabled(): boolean
    /**
     * Returns whether unknown options are ignored or not. See
     * g_option_context_set_ignore_unknown_options().
     */
    getIgnoreUnknownOptions(): boolean
    /**
     * Returns a pointer to the main group of `context`.
     */
    getMainGroup(): OptionGroup
    /**
     * Returns whether strict POSIX code is enabled.
     * 
     * See g_option_context_set_strict_posix() for more information.
     */
    getStrictPosix(): boolean
    /**
     * Returns the summary. See g_option_context_set_summary().
     */
    getSummary(): string
    /**
     * Parses the command line arguments, recognizing options
     * which have been added to `context`. A side-effect of
     * calling this function is that g_set_prgname() will be
     * called.
     * 
     * If the parsing is successful, any parsed arguments are
     * removed from the array and `argc` and `argv` are updated
     * accordingly. A '--' option is stripped from `argv`
     * unless there are unparsed options before and after it,
     * or some of the options after it start with '-'. In case
     * of an error, `argc` and `argv` are left unmodified.
     * 
     * If automatic `--help` support is enabled
     * (see g_option_context_set_help_enabled()), and the
     * `argv` array contains one of the recognized help options,
     * this function will produce help output to stdout and
     * call `exit (0)`.
     * 
     * Note that function depends on the [current locale][setlocale] for
     * automatic character set conversion of string and filename
     * arguments.
     * @param argv a pointer to the array of command line arguments
     */
    parse(argv?: string[]): [ /* returnType */ boolean, /* argv */ string[] ]
    /**
     * Parses the command line arguments.
     * 
     * This function is similar to g_option_context_parse() except that it
     * respects the normal memory rules when dealing with a strv instead of
     * assuming that the passed-in array is the argv of the main function.
     * 
     * In particular, strings that are removed from the arguments list will
     * be freed using g_free().
     * 
     * On Windows, the strings are expected to be in UTF-8.  This is in
     * contrast to g_option_context_parse() which expects them to be in the
     * system codepage, which is how they are passed as `argv` to main().
     * See g_win32_get_command_line() for a solution.
     * 
     * This function is useful if you are trying to use #GOptionContext with
     * #GApplication.
     * @param arguments_ a pointer    to the command line arguments (which must be in UTF-8 on Windows).    Starting with GLib 2.62, `arguments` can be %NULL, which matches    g_option_context_parse().
     */
    parseStrv(arguments_?: string[]): [ /* returnType */ boolean, /* arguments_ */ string[] ]
    /**
     * Adds a string to be displayed in `--help` output after the list
     * of options. This text often includes a bug reporting address.
     * 
     * Note that the summary is translated (see
     * g_option_context_set_translate_func()).
     * @param description a string to be shown in `--help` output   after the list of options, or %NULL
     */
    setDescription(description: string | null): void
    /**
     * Enables or disables automatic generation of `--help` output.
     * By default, g_option_context_parse() recognizes `--help`, `-h`,
     * `-?`, `--help-all` and `--help-groupname` and creates suitable
     * output to stdout.
     * @param helpEnabled %TRUE to enable `--help`, %FALSE to disable it
     */
    setHelpEnabled(helpEnabled: boolean): void
    /**
     * Sets whether to ignore unknown options or not. If an argument is
     * ignored, it is left in the `argv` array after parsing. By default,
     * g_option_context_parse() treats unknown options as error.
     * 
     * This setting does not affect non-option arguments (i.e. arguments
     * which don't start with a dash). But note that GOption cannot reliably
     * determine whether a non-option belongs to a preceding unknown option.
     * @param ignoreUnknown %TRUE to ignore unknown options, %FALSE to produce    an error when unknown options are met
     */
    setIgnoreUnknownOptions(ignoreUnknown: boolean): void
    /**
     * Sets a #GOptionGroup as main group of the `context`.
     * This has the same effect as calling g_option_context_add_group(),
     * the only difference is that the options in the main group are
     * treated differently when generating `--help` output.
     * @param group the group to set as main group
     */
    setMainGroup(group: OptionGroup): void
    /**
     * Sets strict POSIX mode.
     * 
     * By default, this mode is disabled.
     * 
     * In strict POSIX mode, the first non-argument parameter encountered
     * (eg: filename) terminates argument processing.  Remaining arguments
     * are treated as non-options and are not attempted to be parsed.
     * 
     * If strict POSIX mode is disabled then parsing is done in the GNU way
     * where option arguments can be freely mixed with non-options.
     * 
     * As an example, consider "ls foo -l".  With GNU style parsing, this
     * will list "foo" in long mode.  In strict POSIX style, this will list
     * the files named "foo" and "-l".
     * 
     * It may be useful to force strict POSIX mode when creating "verb
     * style" command line tools.  For example, the "gsettings" command line
     * tool supports the global option "--schemadir" as well as many
     * subcommands ("get", "set", etc.) which each have their own set of
     * arguments.  Using strict POSIX mode will allow parsing the global
     * options up to the verb name while leaving the remaining options to be
     * parsed by the relevant subcommand (which can be determined by
     * examining the verb name, which should be present in argv[1] after
     * parsing).
     * @param strictPosix the new value
     */
    setStrictPosix(strictPosix: boolean): void
    /**
     * Adds a string to be displayed in `--help` output before the list
     * of options. This is typically a summary of the program functionality.
     * 
     * Note that the summary is translated (see
     * g_option_context_set_translate_func() and
     * g_option_context_set_translation_domain()).
     * @param summary a string to be shown in `--help` output  before the list of options, or %NULL
     */
    setSummary(summary: string | null): void
    /**
     * Sets the function which is used to translate the contexts
     * user-visible strings, for `--help` output. If `func` is %NULL,
     * strings are not translated.
     * 
     * Note that option groups have their own translation functions,
     * this function only affects the `parameter_string` (see g_option_context_new()),
     * the summary (see g_option_context_set_summary()) and the description
     * (see g_option_context_set_description()).
     * 
     * If you are using gettext(), you only need to set the translation
     * domain, see g_option_context_set_translation_domain().
     * @param func the #GTranslateFunc, or %NULL
     */
    setTranslateFunc(func: TranslateFunc | null): void
    /**
     * A convenience function to use gettext() for translating
     * user-visible strings.
     * @param domain the domain to use
     */
    setTranslationDomain(domain: string): void
}

/**
 * A `GOptionContext` struct defines which options
 * are accepted by the commandline option parser. The struct has only private
 * fields and should not be directly accessed.
 * @record 
 */
export class OptionContext {

    // Own properties of GLib-2.0.GLib.OptionContext

    static name: string
}

export interface OptionEntry {

    // Own fields of GLib-2.0.GLib.OptionEntry

    /**
     * The long name of an option can be used to specify it
     *     in a commandline as `--long_name`. Every option must have a
     *     long name. To resolve conflicts if multiple option groups contain
     *     the same long name, it is also possible to specify the option as
     *     `--groupname-long_name`.
     * @field 
     */
    longName: string
    /**
     * If an option has a short name, it can be specified
     *     `-short_name` in a commandline. `short_name` must be  a printable
     *     ASCII character different from '-', or zero if the option has no
     *     short name.
     * @field 
     */
    shortName: number
    /**
     * Flags from #GOptionFlags
     * @field 
     */
    flags: number
    /**
     * The type of the option, as a #GOptionArg
     * @field 
     */
    arg: OptionArg
    /**
     * If the `arg` type is %G_OPTION_ARG_CALLBACK, then `arg_data`
     *     must point to a #GOptionArgFunc callback function, which will be
     *     called to handle the extra argument. Otherwise, `arg_data` is a
     *     pointer to a location to store the value, the required type of
     *     the location depends on the `arg` type:
     *     - %G_OPTION_ARG_NONE: %gboolean
     *     - %G_OPTION_ARG_STRING: %gchar*
     *     - %G_OPTION_ARG_INT: %gint
     *     - %G_OPTION_ARG_FILENAME: %gchar*
     *     - %G_OPTION_ARG_STRING_ARRAY: %gchar**
     *     - %G_OPTION_ARG_FILENAME_ARRAY: %gchar**
     *     - %G_OPTION_ARG_DOUBLE: %gdouble
     *     If `arg` type is %G_OPTION_ARG_STRING or %G_OPTION_ARG_FILENAME,
     *     the location will contain a newly allocated string if the option
     *     was given. That string needs to be freed by the callee using g_free().
     *     Likewise if `arg` type is %G_OPTION_ARG_STRING_ARRAY or
     *     %G_OPTION_ARG_FILENAME_ARRAY, the data should be freed using g_strfreev().
     * @field 
     */
    argData: object
    /**
     * the description for the option in `--help`
     *     output. The `description` is translated using the `translate_func`
     *     of the group, see g_option_group_set_translation_domain().
     * @field 
     */
    description: string
    /**
     * The placeholder to use for the extra argument parsed
     *     by the option in `--help` output. The `arg_description` is translated
     *     using the `translate_func` of the group, see
     *     g_option_group_set_translation_domain().
     * @field 
     */
    argDescription: string
}

/**
 * A GOptionEntry struct defines a single option. To have an effect, they
 * must be added to a #GOptionGroup with g_option_context_add_main_entries()
 * or g_option_group_add_entries().
 * @record 
 */
export class OptionEntry {

    // Own properties of GLib-2.0.GLib.OptionEntry

    static name: string
}

export interface OptionGroup {

    // Owm methods of GLib-2.0.GLib.OptionGroup

    /**
     * Adds the options specified in `entries` to `group`.
     * @param entries a %NULL-terminated array of #GOptionEntrys
     */
    addEntries(entries: OptionEntry[]): void
    /**
     * Frees a #GOptionGroup. Note that you must not free groups
     * which have been added to a #GOptionContext.
     */
    free(): void
    /**
     * Increments the reference count of `group` by one.
     */
    ref(): OptionGroup
    /**
     * Sets the function which is used to translate user-visible strings,
     * for `--help` output. Different groups can use different
     * #GTranslateFuncs. If `func` is %NULL, strings are not translated.
     * 
     * If you are using gettext(), you only need to set the translation
     * domain, see g_option_group_set_translation_domain().
     * @param func the #GTranslateFunc, or %NULL
     */
    setTranslateFunc(func: TranslateFunc | null): void
    /**
     * A convenience function to use gettext() for translating
     * user-visible strings.
     * @param domain the domain to use
     */
    setTranslationDomain(domain: string): void
    /**
     * Decrements the reference count of `group` by one.
     * If the reference count drops to 0, the `group` will be freed.
     * and all memory allocated by the `group` is released.
     */
    unref(): void
}

/**
 * A `GOptionGroup` struct defines the options in a single
 * group. The struct has only private fields and should not be directly accessed.
 * 
 * All options in a group share the same translation function. Libraries which
 * need to parse commandline options are expected to provide a function for
 * getting a `GOptionGroup` holding their options, which
 * the application can then add to its #GOptionContext.
 * @record 
 */
export class OptionGroup {

    // Own properties of GLib-2.0.GLib.OptionGroup

    static name: string

    // Constructors of GLib-2.0.GLib.OptionGroup

    /**
     * Creates a new #GOptionGroup.
     * @constructor 
     * @param name the name for the option group, this is used to provide   help for the options in this group with `--help-``name`
     * @param description a description for this group to be shown in   `--help`. This string is translated using the translation   domain or translation function of the group
     * @param helpDescription a description for the `--help-``name` option.   This string is translated using the translation domain or translation function   of the group
     * @param userData user data that will be passed to the pre- and post-parse hooks,   the error hook and to callbacks of %G_OPTION_ARG_CALLBACK options, or %NULL
     * @param destroy a function that will be called to free `user_data,` or %NULL
     */
    constructor(name: string, description: string, helpDescription: string, userData: object | null, destroy: DestroyNotify | null) 
    /**
     * Creates a new #GOptionGroup.
     * @constructor 
     * @param name the name for the option group, this is used to provide   help for the options in this group with `--help-``name`
     * @param description a description for this group to be shown in   `--help`. This string is translated using the translation   domain or translation function of the group
     * @param helpDescription a description for the `--help-``name` option.   This string is translated using the translation domain or translation function   of the group
     * @param userData user data that will be passed to the pre- and post-parse hooks,   the error hook and to callbacks of %G_OPTION_ARG_CALLBACK options, or %NULL
     * @param destroy a function that will be called to free `user_data,` or %NULL
     */
    static new(name: string, description: string, helpDescription: string, userData: object | null, destroy: DestroyNotify | null): OptionGroup
}

export interface PatternSpec {

    // Owm methods of GLib-2.0.GLib.PatternSpec

    /**
     * Copies `pspec` in a new #GPatternSpec.
     */
    copy(): PatternSpec
    /**
     * Compares two compiled pattern specs and returns whether they will
     * match the same set of strings.
     * @param pspec2 another #GPatternSpec
     */
    equal(pspec2: PatternSpec): boolean
    /**
     * Frees the memory allocated for the #GPatternSpec.
     */
    free(): void
    /**
     * Matches a string against a compiled pattern. Passing the correct
     * length of the string given is mandatory. The reversed string can be
     * omitted by passing %NULL, this is more efficient if the reversed
     * version of the string to be matched is not at hand, as
     * g_pattern_match() will only construct it if the compiled pattern
     * requires reverse matches.
     * 
     * Note that, if the user code will (possibly) match a string against a
     * multitude of patterns containing wildcards, chances are high that
     * some patterns will require a reversed string. In this case, it's
     * more efficient to provide the reversed string to avoid multiple
     * constructions thereof in the various calls to g_pattern_match().
     * 
     * Note also that the reverse of a UTF-8 encoded string can in general
     * not be obtained by g_strreverse(). This works only if the string
     * does not contain any multibyte characters. GLib offers the
     * g_utf8_strreverse() function to reverse UTF-8 encoded strings.
     * @param stringLength the length of `string` (in bytes, i.e. strlen(),     not g_utf8_strlen())
     * @param string the UTF-8 encoded string to match
     * @param stringReversed the reverse of `string` or %NULL
     */
    match(stringLength: number, string: string, stringReversed: string | null): boolean
    /**
     * Matches a string against a compiled pattern. If the string is to be
     * matched against more than one pattern, consider using
     * g_pattern_match() instead while supplying the reversed string.
     * @param string the UTF-8 encoded string to match
     */
    matchString(string: string): boolean
}

/**
 * A GPatternSpec struct is the 'compiled' form of a pattern. This
 * structure is opaque and its fields cannot be accessed directly.
 * @record 
 */
export class PatternSpec {

    // Own properties of GLib-2.0.GLib.PatternSpec

    static name: string

    // Constructors of GLib-2.0.GLib.PatternSpec

    /**
     * Compiles a pattern to a #GPatternSpec.
     * @constructor 
     * @param pattern a zero-terminated UTF-8 encoded string
     */
    constructor(pattern: string) 
    /**
     * Compiles a pattern to a #GPatternSpec.
     * @constructor 
     * @param pattern a zero-terminated UTF-8 encoded string
     */
    static new(pattern: string): PatternSpec
}

export interface PollFD {

    // Own fields of GLib-2.0.GLib.PollFD

    /**
     * the file descriptor to poll (or a HANDLE on Win32)
     * @field 
     */
    fd: number
    /**
     * a bitwise combination from #GIOCondition, specifying which
     *     events should be polled for. Typically for reading from a file
     *     descriptor you would use %G_IO_IN | %G_IO_HUP | %G_IO_ERR, and
     *     for writing you would use %G_IO_OUT | %G_IO_ERR.
     * @field 
     */
    events: number
    /**
     * a bitwise combination of flags from #GIOCondition, returned
     *     from the poll() function to indicate which events occurred.
     * @field 
     */
    revents: number
}

/**
 * Represents a file descriptor, which events to poll for, and which events
 * occurred.
 * @record 
 */
export class PollFD {

    // Own properties of GLib-2.0.GLib.PollFD

    static name: string
}

export interface Private {

    // Owm methods of GLib-2.0.GLib.Private

    /**
     * Returns the current value of the thread local variable `key`.
     * 
     * If the value has not yet been set in this thread, %NULL is returned.
     * Values are never copied between threads (when a new thread is
     * created, for example).
     */
    get(): object | null
    /**
     * Sets the thread local variable `key` to have the value `value` in the
     * current thread.
     * 
     * This function differs from g_private_set() in the following way: if
     * the previous value was non-%NULL then the #GDestroyNotify handler for
     * `key` is run on it.
     * @param value the new value
     */
    replace(value: object | null): void
    /**
     * Sets the thread local variable `key` to have the value `value` in the
     * current thread.
     * 
     * This function differs from g_private_replace() in the following way:
     * the #GDestroyNotify for `key` is not called on the old value.
     * @param value the new value
     */
    set(value: object | null): void
}

/**
 * The #GPrivate struct is an opaque data structure to represent a
 * thread-local data key. It is approximately equivalent to the
 * pthread_setspecific()/pthread_getspecific() APIs on POSIX and to
 * TlsSetValue()/TlsGetValue() on Windows.
 * 
 * If you don't already know why you might want this functionality,
 * then you probably don't need it.
 * 
 * #GPrivate is a very limited resource (as far as 128 per program,
 * shared between all libraries). It is also not possible to destroy a
 * #GPrivate after it has been used. As such, it is only ever acceptable
 * to use #GPrivate in static scope, and even then sparingly so.
 * 
 * See G_PRIVATE_INIT() for a couple of examples.
 * 
 * The #GPrivate structure should be considered opaque.  It should only
 * be accessed via the g_private_ functions.
 * @record 
 */
export class Private {

    // Own properties of GLib-2.0.GLib.Private

    static name: string
}

export interface PtrArray {

    // Own fields of GLib-2.0.GLib.PtrArray

    /**
     * points to the array of pointers, which may be moved when the
     *     array grows
     * @field 
     */
    pdata: object
    /**
     * number of pointers in the array
     * @field 
     */
    len: number
}

/**
 * Contains the public fields of a pointer array.
 * @record 
 */
export class PtrArray {

    // Own properties of GLib-2.0.GLib.PtrArray

    static name: string
}

export interface Queue {

    // Own fields of GLib-2.0.GLib.Queue

    /**
     * a pointer to the first element of the queue
     * @field 
     */
    head: object[]
    /**
     * a pointer to the last element of the queue
     * @field 
     */
    tail: object[]
    /**
     * the number of elements in the queue
     * @field 
     */
    length: number

    // Owm methods of GLib-2.0.GLib.Queue

    /**
     * Removes all the elements in `queue`. If queue elements contain
     * dynamically-allocated memory, they should be freed first.
     */
    clear(): void
    /**
     * Convenience method, which frees all the memory used by a #GQueue,
     * and calls the provided `free_func` on each item in the #GQueue.
     * @param freeFunc the function to be called to free memory allocated
     */
    clearFull(freeFunc: DestroyNotify | null): void
    /**
     * Frees the memory allocated for the #GQueue. Only call this function
     * if `queue` was created with g_queue_new(). If queue elements contain
     * dynamically-allocated memory, they should be freed first.
     * 
     * If queue elements contain dynamically-allocated memory, you should
     * either use g_queue_free_full() or free them manually first.
     */
    free(): void
    /**
     * Convenience method, which frees all the memory used by a #GQueue,
     * and calls the specified destroy function on every element's data.
     * 
     * `free_func` should not modify the queue (eg, by removing the freed
     * element from it).
     * @param freeFunc the function to be called to free each element's data
     */
    freeFull(freeFunc: DestroyNotify): void
    /**
     * Returns the number of items in `queue`.
     */
    getLength(): number
    /**
     * Returns the position of the first element in `queue` which contains `data`.
     * @param data the data to find
     */
    index(data: object | null): number
    /**
     * A statically-allocated #GQueue must be initialized with this function
     * before it can be used. Alternatively you can initialize it with
     * %G_QUEUE_INIT. It is not necessary to initialize queues created with
     * g_queue_new().
     */
    init(): void
    /**
     * Returns %TRUE if the queue is empty.
     */
    isEmpty(): boolean
    /**
     * Returns the first element of the queue.
     */
    peekHead(): object | null
    /**
     * Returns the `n'`th element of `queue`.
     * @param n the position of the element
     */
    peekNth(n: number): object | null
    /**
     * Returns the last element of the queue.
     */
    peekTail(): object | null
    /**
     * Removes the first element of the queue and returns its data.
     */
    popHead(): object | null
    /**
     * Removes the `n'`th element of `queue` and returns its data.
     * @param n the position of the element
     */
    popNth(n: number): object | null
    /**
     * Removes the last element of the queue and returns its data.
     */
    popTail(): object | null
    /**
     * Adds a new element at the head of the queue.
     * @param data the data for the new element.
     */
    pushHead(data: object | null): void
    /**
     * Inserts a new element into `queue` at the given position.
     * @param data the data for the new element
     * @param n the position to insert the new element. If `n` is negative or     larger than the number of elements in the `queue,` the element is     added to the end of the queue.
     */
    pushNth(data: object | null, n: number): void
    /**
     * Adds a new element at the tail of the queue.
     * @param data the data for the new element
     */
    pushTail(data: object | null): void
    /**
     * Removes the first element in `queue` that contains `data`.
     * @param data the data to remove
     */
    remove(data: object | null): boolean
    /**
     * Remove all elements whose data equals `data` from `queue`.
     * @param data the data to remove
     */
    removeAll(data: object | null): number
    /**
     * Reverses the order of the items in `queue`.
     */
    reverse(): void
}

/**
 * Contains the public fields of a
 * [Queue][glib-Double-ended-Queues].
 * @record 
 */
export class Queue {

    // Own properties of GLib-2.0.GLib.Queue

    static name: string
}

export interface RWLock {

    // Owm methods of GLib-2.0.GLib.RWLock

    /**
     * Frees the resources allocated to a lock with g_rw_lock_init().
     * 
     * This function should not be used with a #GRWLock that has been
     * statically allocated.
     * 
     * Calling g_rw_lock_clear() when any thread holds the lock
     * leads to undefined behaviour.
     * 
     * Sine: 2.32
     */
    clear(): void
    /**
     * Initializes a #GRWLock so that it can be used.
     * 
     * This function is useful to initialize a lock that has been
     * allocated on the stack, or as part of a larger structure.  It is not
     * necessary to initialise a reader-writer lock that has been statically
     * allocated.
     * 
     * 
     * ```c
     *   typedef struct {
     *     GRWLock l;
     *     ...
     *   } Blob;
     * 
     * Blob *b;
     * 
     * b = g_new (Blob, 1);
     * g_rw_lock_init (&b->l);
     * ```
     * 
     * 
     * To undo the effect of g_rw_lock_init() when a lock is no longer
     * needed, use g_rw_lock_clear().
     * 
     * Calling g_rw_lock_init() on an already initialized #GRWLock leads
     * to undefined behaviour.
     */
    init(): void
    /**
     * Obtain a read lock on `rw_lock`. If another thread currently holds
     * the write lock on `rw_lock,` the current thread will block until the
     * write lock was (held and) released. If another thread does not hold
     * the write lock, but is waiting for it, it is implementation defined
     * whether the reader or writer will block. Read locks can be taken
     * recursively.
     * 
     * Calling g_rw_lock_reader_lock() while the current thread already
     * owns a write lock leads to undefined behaviour. Read locks however
     * can be taken recursively, in which case you need to make sure to
     * call g_rw_lock_reader_unlock() the same amount of times.
     * 
     * It is implementation-defined how many read locks are allowed to be
     * held on the same lock simultaneously. If the limit is hit,
     * or if a deadlock is detected, a critical warning will be emitted.
     */
    readerLock(): void
    /**
     * Tries to obtain a read lock on `rw_lock` and returns %TRUE if
     * the read lock was successfully obtained. Otherwise it
     * returns %FALSE.
     */
    readerTrylock(): boolean
    /**
     * Release a read lock on `rw_lock`.
     * 
     * Calling g_rw_lock_reader_unlock() on a lock that is not held
     * by the current thread leads to undefined behaviour.
     */
    readerUnlock(): void
    /**
     * Obtain a write lock on `rw_lock`. If another thread currently holds
     * a read or write lock on `rw_lock,` the current thread will block
     * until all other threads have dropped their locks on `rw_lock`.
     * 
     * Calling g_rw_lock_writer_lock() while the current thread already
     * owns a read or write lock on `rw_lock` leads to undefined behaviour.
     */
    writerLock(): void
    /**
     * Tries to obtain a write lock on `rw_lock`. If another thread
     * currently holds a read or write lock on `rw_lock,` it immediately
     * returns %FALSE.
     * Otherwise it locks `rw_lock` and returns %TRUE.
     */
    writerTrylock(): boolean
    /**
     * Release a write lock on `rw_lock`.
     * 
     * Calling g_rw_lock_writer_unlock() on a lock that is not held
     * by the current thread leads to undefined behaviour.
     */
    writerUnlock(): void
}

/**
 * The GRWLock struct is an opaque data structure to represent a
 * reader-writer lock. It is similar to a #GMutex in that it allows
 * multiple threads to coordinate access to a shared resource.
 * 
 * The difference to a mutex is that a reader-writer lock discriminates
 * between read-only ('reader') and full ('writer') access. While only
 * one thread at a time is allowed write access (by holding the 'writer'
 * lock via g_rw_lock_writer_lock()), multiple threads can gain
 * simultaneous read-only access (by holding the 'reader' lock via
 * g_rw_lock_reader_lock()).
 * 
 * It is unspecified whether readers or writers have priority in acquiring the
 * lock when a reader already holds the lock and a writer is queued to acquire
 * it.
 * 
 * Here is an example for an array with access functions:
 * 
 * ```c
 *   GRWLock lock;
 *   GPtrArray *array;
 * 
 *   gpointer
 *   my_array_get (guint index)
 *   {
 *     gpointer retval = NULL;
 * 
 *     if (!array)
 *       return NULL;
 * 
 *     g_rw_lock_reader_lock (&lock);
 *     if (index < array->len)
 *       retval = g_ptr_array_index (array, index);
 *     g_rw_lock_reader_unlock (&lock);
 * 
 *     return retval;
 *   }
 * 
 *   void
 *   my_array_set (guint index, gpointer data)
 *   {
 *     g_rw_lock_writer_lock (&lock);
 * 
 *     if (!array)
 *       array = g_ptr_array_new ();
 * 
 *     if (index >= array->len)
 *       g_ptr_array_set_size (array, index+1);
 *     g_ptr_array_index (array, index) = data;
 * 
 *     g_rw_lock_writer_unlock (&lock);
 *   }
 *  ```
 * 
 * This example shows an array which can be accessed by many readers
 * (the my_array_get() function) simultaneously, whereas the writers
 * (the my_array_set() function) will only be allowed one at a time
 * and only if no readers currently access the array. This is because
 * of the potentially dangerous resizing of the array. Using these
 * functions is fully multi-thread safe now.
 * 
 * If a #GRWLock is allocated in static storage then it can be used
 * without initialisation.  Otherwise, you should call
 * g_rw_lock_init() on it and g_rw_lock_clear() when done.
 * 
 * A GRWLock should only be accessed with the g_rw_lock_ functions.
 * @record 
 */
export class RWLock {

    // Own properties of GLib-2.0.GLib.RWLock

    static name: string
}

export interface Rand {

    // Owm methods of GLib-2.0.GLib.Rand

    /**
     * Returns the next random #gdouble from `rand_` equally distributed over
     * the range [0..1).
     */
    double(): number
    /**
     * Returns the next random #gdouble from `rand_` equally distributed over
     * the range [`begin`..`end)`.
     * @param begin lower closed bound of the interval
     * @param end upper open bound of the interval
     */
    doubleRange(begin: number, end: number): number
    /**
     * Frees the memory allocated for the #GRand.
     */
    free(): void
    /**
     * Returns the next random #guint32 from `rand_` equally distributed over
     * the range [0..2^32-1].
     */
    int(): number
    /**
     * Returns the next random #gint32 from `rand_` equally distributed over
     * the range [`begin`..`end-1`].
     * @param begin lower closed bound of the interval
     * @param end upper open bound of the interval
     */
    intRange(begin: number, end: number): number
    /**
     * Sets the seed for the random number generator #GRand to `seed`.
     * @param seed a value to reinitialize the random number generator
     */
    setSeed(seed: number): void
    /**
     * Initializes the random number generator by an array of longs.
     * Array can be of arbitrary size, though only the first 624 values
     * are taken.  This function is useful if you have many low entropy
     * seeds, or if you require more then 32 bits of actual entropy for
     * your application.
     * @param seed array to initialize with
     * @param seedLength length of array
     */
    setSeedArray(seed: number, seedLength: number): void
}

/**
 * The GRand struct is an opaque data structure. It should only be
 * accessed through the g_rand_* functions.
 * @record 
 */
export class Rand {

    // Own properties of GLib-2.0.GLib.Rand

    static name: string
}

export interface RecMutex {

    // Owm methods of GLib-2.0.GLib.RecMutex

    /**
     * Frees the resources allocated to a recursive mutex with
     * g_rec_mutex_init().
     * 
     * This function should not be used with a #GRecMutex that has been
     * statically allocated.
     * 
     * Calling g_rec_mutex_clear() on a locked recursive mutex leads
     * to undefined behaviour.
     * 
     * Sine: 2.32
     */
    clear(): void
    /**
     * Initializes a #GRecMutex so that it can be used.
     * 
     * This function is useful to initialize a recursive mutex
     * that has been allocated on the stack, or as part of a larger
     * structure.
     * 
     * It is not necessary to initialise a recursive mutex that has been
     * statically allocated.
     * 
     * 
     * ```c
     *   typedef struct {
     *     GRecMutex m;
     *     ...
     *   } Blob;
     * 
     * Blob *b;
     * 
     * b = g_new (Blob, 1);
     * g_rec_mutex_init (&b->m);
     * ```
     * 
     * 
     * Calling g_rec_mutex_init() on an already initialized #GRecMutex
     * leads to undefined behaviour.
     * 
     * To undo the effect of g_rec_mutex_init() when a recursive mutex
     * is no longer needed, use g_rec_mutex_clear().
     */
    init(): void
    /**
     * Locks `rec_mutex`. If `rec_mutex` is already locked by another
     * thread, the current thread will block until `rec_mutex` is
     * unlocked by the other thread. If `rec_mutex` is already locked
     * by the current thread, the 'lock count' of `rec_mutex` is increased.
     * The mutex will only become available again when it is unlocked
     * as many times as it has been locked.
     */
    lock(): void
    /**
     * Tries to lock `rec_mutex`. If `rec_mutex` is already locked
     * by another thread, it immediately returns %FALSE. Otherwise
     * it locks `rec_mutex` and returns %TRUE.
     */
    trylock(): boolean
    /**
     * Unlocks `rec_mutex`. If another thread is blocked in a
     * g_rec_mutex_lock() call for `rec_mutex,` it will become unblocked
     * and can lock `rec_mutex` itself.
     * 
     * Calling g_rec_mutex_unlock() on a recursive mutex that is not
     * locked by the current thread leads to undefined behaviour.
     */
    unlock(): void
}

/**
 * The GRecMutex struct is an opaque data structure to represent a
 * recursive mutex. It is similar to a #GMutex with the difference
 * that it is possible to lock a GRecMutex multiple times in the same
 * thread without deadlock. When doing so, care has to be taken to
 * unlock the recursive mutex as often as it has been locked.
 * 
 * If a #GRecMutex is allocated in static storage then it can be used
 * without initialisation.  Otherwise, you should call
 * g_rec_mutex_init() on it and g_rec_mutex_clear() when done.
 * 
 * A GRecMutex should only be accessed with the
 * g_rec_mutex_ functions.
 * @record 
 */
export class RecMutex {

    // Own properties of GLib-2.0.GLib.RecMutex

    static name: string
}

export interface Regex {

    // Owm methods of GLib-2.0.GLib.Regex

    /**
     * Returns the number of capturing subpatterns in the pattern.
     */
    getCaptureCount(): number
    /**
     * Returns the compile options that `regex` was created with.
     * 
     * Depending on the version of PCRE that is used, this may or may not
     * include flags set by option expressions such as `(?i)` found at the
     * top-level within the compiled pattern.
     */
    getCompileFlags(): RegexCompileFlags
    /**
     * Checks whether the pattern contains explicit CR or LF references.
     */
    getHasCrOrLf(): boolean
    /**
     * Returns the match options that `regex` was created with.
     */
    getMatchFlags(): RegexMatchFlags
    /**
     * Returns the number of the highest back reference
     * in the pattern, or 0 if the pattern does not contain
     * back references.
     */
    getMaxBackref(): number
    /**
     * Gets the number of characters in the longest lookbehind assertion in the
     * pattern. This information is useful when doing multi-segment matching using
     * the partial matching facilities.
     */
    getMaxLookbehind(): number
    /**
     * Gets the pattern string associated with `regex,` i.e. a copy of
     * the string passed to g_regex_new().
     */
    getPattern(): string
    /**
     * Retrieves the number of the subexpression named `name`.
     * @param name name of the subexpression
     */
    getStringNumber(name: string): number
    /**
     * Scans for a match in `string` for the pattern in `regex`.
     * The `match_options` are combined with the match options specified
     * when the `regex` structure was created, letting you have more
     * flexibility in reusing #GRegex structures.
     * 
     * Unless %G_REGEX_RAW is specified in the options, `string` must be valid UTF-8.
     * 
     * A #GMatchInfo structure, used to get information on the match,
     * is stored in `match_info` if not %NULL. Note that if `match_info`
     * is not %NULL then it is created even if the function returns %FALSE,
     * i.e. you must free it regardless if regular expression actually matched.
     * 
     * To retrieve all the non-overlapping matches of the pattern in
     * string you can use g_match_info_next().
     * 
     * 
     * ```c
     * static void
     * print_uppercase_words (const gchar *string)
     * {
     *   // Print all uppercase-only words.
     *   GRegex *regex;
     *   GMatchInfo *match_info;
     *  
     *   regex = g_regex_new ("[A-Z]+", 0, 0, NULL);
     *   g_regex_match (regex, string, 0, &match_info);
     *   while (g_match_info_matches (match_info))
     *     {
     *       gchar *word = g_match_info_fetch (match_info, 0);
     *       g_print ("Found: %s\n", word);
     *       g_free (word);
     *       g_match_info_next (match_info, NULL);
     *     }
     *   g_match_info_free (match_info);
     *   g_regex_unref (regex);
     * }
     * ```
     * 
     * 
     * `string` is not copied and is used in #GMatchInfo internally. If
     * you use any #GMatchInfo method (except g_match_info_free()) after
     * freeing or modifying `string` then the behaviour is undefined.
     * @param string the string to scan for matches
     * @param matchOptions match options
     */
    match(string: string, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo ]
    /**
     * Using the standard algorithm for regular expression matching only
     * the longest match in the string is retrieved. This function uses
     * a different algorithm so it can retrieve all the possible matches.
     * For more documentation see g_regex_match_all_full().
     * 
     * A #GMatchInfo structure, used to get information on the match, is
     * stored in `match_info` if not %NULL. Note that if `match_info` is
     * not %NULL then it is created even if the function returns %FALSE,
     * i.e. you must free it regardless if regular expression actually
     * matched.
     * 
     * `string` is not copied and is used in #GMatchInfo internally. If
     * you use any #GMatchInfo method (except g_match_info_free()) after
     * freeing or modifying `string` then the behaviour is undefined.
     * @param string the string to scan for matches
     * @param matchOptions match options
     */
    matchAll(string: string, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo ]
    /**
     * Using the standard algorithm for regular expression matching only
     * the longest match in the `string` is retrieved, it is not possible
     * to obtain all the available matches. For instance matching
     * "<a> <b> <c>" against the pattern "<.*>"
     * you get "<a> <b> <c>".
     * 
     * This function uses a different algorithm (called DFA, i.e. deterministic
     * finite automaton), so it can retrieve all the possible matches, all
     * starting at the same point in the string. For instance matching
     * "<a> <b> <c>" against the pattern "<.*>;"
     * you would obtain three matches: "<a> <b> <c>",
     * "<a> <b>" and "<a>".
     * 
     * The number of matched strings is retrieved using
     * g_match_info_get_match_count(). To obtain the matched strings and
     * their position you can use, respectively, g_match_info_fetch() and
     * g_match_info_fetch_pos(). Note that the strings are returned in
     * reverse order of length; that is, the longest matching string is
     * given first.
     * 
     * Note that the DFA algorithm is slower than the standard one and it
     * is not able to capture substrings, so backreferences do not work.
     * 
     * Setting `start_position` differs from just passing over a shortened
     * string and setting %G_REGEX_MATCH_NOTBOL in the case of a pattern
     * that begins with any kind of lookbehind assertion, such as "\b".
     * 
     * Unless %G_REGEX_RAW is specified in the options, `string` must be valid UTF-8.
     * 
     * A #GMatchInfo structure, used to get information on the match, is
     * stored in `match_info` if not %NULL. Note that if `match_info` is
     * not %NULL then it is created even if the function returns %FALSE,
     * i.e. you must free it regardless if regular expression actually
     * matched.
     * 
     * `string` is not copied and is used in #GMatchInfo internally. If
     * you use any #GMatchInfo method (except g_match_info_free()) after
     * freeing or modifying `string` then the behaviour is undefined.
     * @param string the string to scan for matches
     * @param startPosition starting index of the string to match, in bytes
     * @param matchOptions match options
     */
    matchAllFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo ]
    /**
     * Scans for a match in `string` for the pattern in `regex`.
     * The `match_options` are combined with the match options specified
     * when the `regex` structure was created, letting you have more
     * flexibility in reusing #GRegex structures.
     * 
     * Setting `start_position` differs from just passing over a shortened
     * string and setting %G_REGEX_MATCH_NOTBOL in the case of a pattern
     * that begins with any kind of lookbehind assertion, such as "\b".
     * 
     * Unless %G_REGEX_RAW is specified in the options, `string` must be valid UTF-8.
     * 
     * A #GMatchInfo structure, used to get information on the match, is
     * stored in `match_info` if not %NULL. Note that if `match_info` is
     * not %NULL then it is created even if the function returns %FALSE,
     * i.e. you must free it regardless if regular expression actually
     * matched.
     * 
     * `string` is not copied and is used in #GMatchInfo internally. If
     * you use any #GMatchInfo method (except g_match_info_free()) after
     * freeing or modifying `string` then the behaviour is undefined.
     * 
     * To retrieve all the non-overlapping matches of the pattern in
     * string you can use g_match_info_next().
     * 
     * 
     * ```c
     * static void
     * print_uppercase_words (const gchar *string)
     * {
     *   // Print all uppercase-only words.
     *   GRegex *regex;
     *   GMatchInfo *match_info;
     *   GError *error = NULL;
     *   
     *   regex = g_regex_new ("[A-Z]+", 0, 0, NULL);
     *   g_regex_match_full (regex, string, -1, 0, 0, &match_info, &error);
     *   while (g_match_info_matches (match_info))
     *     {
     *       gchar *word = g_match_info_fetch (match_info, 0);
     *       g_print ("Found: %s\n", word);
     *       g_free (word);
     *       g_match_info_next (match_info, &error);
     *     }
     *   g_match_info_free (match_info);
     *   g_regex_unref (regex);
     *   if (error != NULL)
     *     {
     *       g_printerr ("Error while matching: %s\n", error->message);
     *       g_error_free (error);
     *     }
     * }
     * ```
     * 
     * @param string the string to scan for matches
     * @param startPosition starting index of the string to match, in bytes
     * @param matchOptions match options
     */
    matchFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags): [ /* returnType */ boolean, /* matchInfo */ MatchInfo ]
    /**
     * Increases reference count of `regex` by 1.
     */
    ref(): Regex
    /**
     * Replaces all occurrences of the pattern in `regex` with the
     * replacement text. Backreferences of the form '\number' or
     * '\g<number>' in the replacement text are interpolated by the
     * number-th captured subexpression of the match, '\g<name>' refers
     * to the captured subexpression with the given name. '\0' refers
     * to the complete match, but '\0' followed by a number is the octal
     * representation of a character. To include a literal '\' in the
     * replacement, write '\\\\'.
     * 
     * There are also escapes that changes the case of the following text:
     * 
     * - \l: Convert to lower case the next character
     * - \u: Convert to upper case the next character
     * - \L: Convert to lower case till \E
     * - \U: Convert to upper case till \E
     * - \E: End case modification
     * 
     * If you do not need to use backreferences use g_regex_replace_literal().
     * 
     * The `replacement` string must be UTF-8 encoded even if %G_REGEX_RAW was
     * passed to g_regex_new(). If you want to use not UTF-8 encoded strings
     * you can use g_regex_replace_literal().
     * 
     * Setting `start_position` differs from just passing over a shortened
     * string and setting %G_REGEX_MATCH_NOTBOL in the case of a pattern that
     * begins with any kind of lookbehind assertion, such as "\b".
     * @param string the string to perform matches against
     * @param startPosition starting index of the string to match, in bytes
     * @param replacement text to replace each match with
     * @param matchOptions options for the match
     */
    replace(string: string[], startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string
    /**
     * Replaces all occurrences of the pattern in `regex` with the
     * replacement text. `replacement` is replaced literally, to
     * include backreferences use g_regex_replace().
     * 
     * Setting `start_position` differs from just passing over a
     * shortened string and setting %G_REGEX_MATCH_NOTBOL in the
     * case of a pattern that begins with any kind of lookbehind
     * assertion, such as "\b".
     * @param string the string to perform matches against
     * @param startPosition starting index of the string to match, in bytes
     * @param replacement text to replace each match with
     * @param matchOptions options for the match
     */
    replaceLiteral(string: string[], startPosition: number, replacement: string, matchOptions: RegexMatchFlags): string
    /**
     * Breaks the string on the pattern, and returns an array of the tokens.
     * If the pattern contains capturing parentheses, then the text for each
     * of the substrings will also be returned. If the pattern does not match
     * anywhere in the string, then the whole string is returned as the first
     * token.
     * 
     * As a special case, the result of splitting the empty string "" is an
     * empty vector, not a vector containing a single string. The reason for
     * this special case is that being able to represent an empty vector is
     * typically more useful than consistent handling of empty elements. If
     * you do need to represent empty elements, you'll need to check for the
     * empty string before calling this function.
     * 
     * A pattern that can match empty strings splits `string` into separate
     * characters wherever it matches the empty string between characters.
     * For example splitting "ab c" using as a separator "\s*", you will get
     * "a", "b" and "c".
     * @param string the string to split with the pattern
     * @param matchOptions match time option flags
     */
    split(string: string, matchOptions: RegexMatchFlags): string[]
    /**
     * Breaks the string on the pattern, and returns an array of the tokens.
     * If the pattern contains capturing parentheses, then the text for each
     * of the substrings will also be returned. If the pattern does not match
     * anywhere in the string, then the whole string is returned as the first
     * token.
     * 
     * As a special case, the result of splitting the empty string "" is an
     * empty vector, not a vector containing a single string. The reason for
     * this special case is that being able to represent an empty vector is
     * typically more useful than consistent handling of empty elements. If
     * you do need to represent empty elements, you'll need to check for the
     * empty string before calling this function.
     * 
     * A pattern that can match empty strings splits `string` into separate
     * characters wherever it matches the empty string between characters.
     * For example splitting "ab c" using as a separator "\s*", you will get
     * "a", "b" and "c".
     * 
     * Setting `start_position` differs from just passing over a shortened
     * string and setting %G_REGEX_MATCH_NOTBOL in the case of a pattern
     * that begins with any kind of lookbehind assertion, such as "\b".
     * @param string the string to split with the pattern
     * @param startPosition starting index of the string to match, in bytes
     * @param matchOptions match time option flags
     * @param maxTokens the maximum number of tokens to split `string` into.   If this is less than 1, the string is split completely
     */
    splitFull(string: string[], startPosition: number, matchOptions: RegexMatchFlags, maxTokens: number): string[]
    /**
     * Decreases reference count of `regex` by 1. When reference count drops
     * to zero, it frees all the memory associated with the regex structure.
     */
    unref(): void
}

/**
 * The g_regex_*() functions implement regular
 * expression pattern matching using syntax and semantics similar to
 * Perl regular expression.
 * 
 * Some functions accept a `start_position` argument, setting it differs
 * from just passing over a shortened string and setting %G_REGEX_MATCH_NOTBOL
 * in the case of a pattern that begins with any kind of lookbehind assertion.
 * For example, consider the pattern "\Biss\B" which finds occurrences of "iss"
 * in the middle of words. ("\B" matches only if the current position in the
 * subject is not a word boundary.) When applied to the string "Mississipi"
 * from the fourth byte, namely "issipi", it does not match, because "\B" is
 * always false at the start of the subject, which is deemed to be a word
 * boundary. However, if the entire string is passed , but with
 * `start_position` set to 4, it finds the second occurrence of "iss" because
 * it is able to look behind the starting point to discover that it is
 * preceded by a letter.
 * 
 * Note that, unless you set the %G_REGEX_RAW flag, all the strings passed
 * to these functions must be encoded in UTF-8. The lengths and the positions
 * inside the strings are in bytes and not in characters, so, for instance,
 * "\xc3\xa0" (i.e. "à") is two bytes long but it is treated as a
 * single character. If you set %G_REGEX_RAW the strings can be non-valid
 * UTF-8 strings and a byte is treated as a character, so "\xc3\xa0" is two
 * bytes and two characters long.
 * 
 * When matching a pattern, "\n" matches only against a "\n" character in
 * the string, and "\r" matches only a "\r" character. To match any newline
 * sequence use "\R". This particular group matches either the two-character
 * sequence CR + LF ("\r\n"), or one of the single characters LF (linefeed,
 * U+000A, "\n"), VT vertical tab, U+000B, "\v"), FF (formfeed, U+000C, "\f"),
 * CR (carriage return, U+000D, "\r"), NEL (next line, U+0085), LS (line
 * separator, U+2028), or PS (paragraph separator, U+2029).
 * 
 * The behaviour of the dot, circumflex, and dollar metacharacters are
 * affected by newline characters, the default is to recognize any newline
 * character (the same characters recognized by "\R"). This can be changed
 * with %G_REGEX_NEWLINE_CR, %G_REGEX_NEWLINE_LF and %G_REGEX_NEWLINE_CRLF
 * compile options, and with %G_REGEX_MATCH_NEWLINE_ANY,
 * %G_REGEX_MATCH_NEWLINE_CR, %G_REGEX_MATCH_NEWLINE_LF and
 * %G_REGEX_MATCH_NEWLINE_CRLF match options. These settings are also
 * relevant when compiling a pattern if %G_REGEX_EXTENDED is set, and an
 * unescaped "#" outside a character class is encountered. This indicates
 * a comment that lasts until after the next newline.
 * 
 * When setting the %G_REGEX_JAVASCRIPT_COMPAT flag, pattern syntax and pattern
 * matching is changed to be compatible with the way that regular expressions
 * work in JavaScript. More precisely, a lonely ']' character in the pattern
 * is a syntax error; the '\x' escape only allows 0 to 2 hexadecimal digits, and
 * you must use the '\u' escape sequence with 4 hex digits to specify a unicode
 * codepoint instead of '\x' or 'x{....}'. If '\x' or '\u' are not followed by
 * the specified number of hex digits, they match 'x' and 'u' literally; also
 * '\U' always matches 'U' instead of being an error in the pattern. Finally,
 * pattern matching is modified so that back references to an unset subpattern
 * group produces a match with the empty string instead of an error. See
 * pcreapi(3) for more information.
 * 
 * Creating and manipulating the same #GRegex structure from different
 * threads is not a problem as #GRegex does not modify its internal
 * state between creation and destruction, on the other hand #GMatchInfo
 * is not threadsafe.
 * 
 * The regular expressions low-level functionalities are obtained through
 * the excellent
 * [PCRE](http://www.pcre.org/)
 * library written by Philip Hazel.
 * @record 
 */
export class Regex {

    // Own properties of GLib-2.0.GLib.Regex

    static name: string

    // Constructors of GLib-2.0.GLib.Regex

    /**
     * Compiles the regular expression to an internal form, and does
     * the initial setup of the #GRegex structure.
     * @constructor 
     * @param pattern the regular expression
     * @param compileOptions compile options for the regular expression, or 0
     * @param matchOptions match options for the regular expression, or 0
     */
    constructor(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags) 
    /**
     * Compiles the regular expression to an internal form, and does
     * the initial setup of the #GRegex structure.
     * @constructor 
     * @param pattern the regular expression
     * @param compileOptions compile options for the regular expression, or 0
     * @param matchOptions match options for the regular expression, or 0
     */
    static new(pattern: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): Regex
    /**
     * Checks whether `replacement` is a valid replacement string
     * (see g_regex_replace()), i.e. that all escape sequences in
     * it are valid.
     * 
     * If `has_references` is not %NULL then `replacement` is checked
     * for pattern references. For instance, replacement text 'foo\n'
     * does not contain references and may be evaluated without information
     * about actual match, but '\0\1' (whole match followed by first
     * subpattern) requires valid #GMatchInfo object.
     * @param replacement the replacement string
     */
    static checkReplacement(replacement: string): [ /* returnType */ boolean, /* hasReferences */ boolean ]
    static errorQuark(): Quark
    /**
     * Escapes the nul characters in `string` to "\x00".  It can be used
     * to compile a regex with embedded nul characters.
     * 
     * For completeness, `length` can be -1 for a nul-terminated string.
     * In this case the output string will be of course equal to `string`.
     * @param string the string to escape
     * @param length the length of `string`
     */
    static escapeNul(string: string, length: number): string
    /**
     * Escapes the special characters used for regular expressions
     * in `string,` for instance "a.b*c" becomes "a\.b\*c". This
     * function is useful to dynamically generate regular expressions.
     * 
     * `string` can contain nul characters that are replaced with "\0",
     * in this case remember to specify the correct length of `string`
     * in `length`.
     * @param string the string to escape
     */
    static escapeString(string: string[]): string
    /**
     * Scans for a match in `string` for `pattern`.
     * 
     * This function is equivalent to g_regex_match() but it does not
     * require to compile the pattern with g_regex_new(), avoiding some
     * lines of code when you need just to do a match without extracting
     * substrings, capture counts, and so on.
     * 
     * If this function is to be called on the same `pattern` more than
     * once, it's more efficient to compile the pattern once with
     * g_regex_new() and then use g_regex_match().
     * @param pattern the regular expression
     * @param string the string to scan for matches
     * @param compileOptions compile options for the regular expression, or 0
     * @param matchOptions match options, or 0
     */
    static matchSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): boolean
    /**
     * Breaks the string on the pattern, and returns an array of
     * the tokens. If the pattern contains capturing parentheses,
     * then the text for each of the substrings will also be returned.
     * If the pattern does not match anywhere in the string, then the
     * whole string is returned as the first token.
     * 
     * This function is equivalent to g_regex_split() but it does
     * not require to compile the pattern with g_regex_new(), avoiding
     * some lines of code when you need just to do a split without
     * extracting substrings, capture counts, and so on.
     * 
     * If this function is to be called on the same `pattern` more than
     * once, it's more efficient to compile the pattern once with
     * g_regex_new() and then use g_regex_split().
     * 
     * As a special case, the result of splitting the empty string ""
     * is an empty vector, not a vector containing a single string.
     * The reason for this special case is that being able to represent
     * an empty vector is typically more useful than consistent handling
     * of empty elements. If you do need to represent empty elements,
     * you'll need to check for the empty string before calling this
     * function.
     * 
     * A pattern that can match empty strings splits `string` into
     * separate characters wherever it matches the empty string between
     * characters. For example splitting "ab c" using as a separator
     * "\s*", you will get "a", "b" and "c".
     * @param pattern the regular expression
     * @param string the string to scan for matches
     * @param compileOptions compile options for the regular expression, or 0
     * @param matchOptions match options, or 0
     */
    static splitSimple(pattern: string, string: string, compileOptions: RegexCompileFlags, matchOptions: RegexMatchFlags): string[]
}

export interface SList {

    // Own fields of GLib-2.0.GLib.SList

    /**
     * holds the element's data, which can be a pointer to any kind
     *        of data, or any integer value using the
     *        [Type Conversion Macros][glib-Type-Conversion-Macros]
     * @field 
     */
    data: object
    /**
     * contains the link to the next element in the list.
     * @field 
     */
    next: object[]
}

/**
 * The #GSList struct is used for each element in the singly-linked
 * list.
 * @record 
 */
export class SList {

    // Own properties of GLib-2.0.GLib.SList

    static name: string
}

export interface Scanner {

    // Own fields of GLib-2.0.GLib.Scanner

    /**
     * unused
     * @field 
     */
    userData: object
    /**
     * unused
     * @field 
     */
    maxParseErrors: number
    /**
     * g_scanner_error() increments this field
     * @field 
     */
    parseErrors: number
    /**
     * name of input stream, featured by the default message handler
     * @field 
     */
    inputName: string
    /**
     * quarked data
     * @field 
     */
    qdata: Data
    /**
     * link into the scanner configuration
     * @field 
     */
    config: ScannerConfig
    /**
     * token parsed by the last g_scanner_get_next_token()
     * @field 
     */
    token: TokenType
    /**
     * value of the last token from g_scanner_get_next_token()
     * @field 
     */
    value: TokenValue
    /**
     * line number of the last token from g_scanner_get_next_token()
     * @field 
     */
    line: number
    /**
     * char number of the last token from g_scanner_get_next_token()
     * @field 
     */
    position: number
    /**
     * token parsed by the last g_scanner_peek_next_token()
     * @field 
     */
    nextToken: TokenType
    /**
     * value of the last token from g_scanner_peek_next_token()
     * @field 
     */
    nextValue: TokenValue
    /**
     * line number of the last token from g_scanner_peek_next_token()
     * @field 
     */
    nextLine: number
    /**
     * char number of the last token from g_scanner_peek_next_token()
     * @field 
     */
    nextPosition: number
    /**
     * handler function for _warn and _error
     * @field 
     */
    msgHandler: ScannerMsgFunc

    // Owm methods of GLib-2.0.GLib.Scanner

    /**
     * Returns the current line in the input stream (counting
     * from 1). This is the line of the last token parsed via
     * g_scanner_get_next_token().
     */
    curLine(): number
    /**
     * Returns the current position in the current line (counting
     * from 0). This is the position of the last token parsed via
     * g_scanner_get_next_token().
     */
    curPosition(): number
    /**
     * Gets the current token type. This is simply the `token`
     * field in the #GScanner structure.
     */
    curToken(): TokenType
    /**
     * Frees all memory used by the #GScanner.
     */
    destroy(): void
    /**
     * Returns %TRUE if the scanner has reached the end of
     * the file or text buffer.
     */
    eof(): boolean
    /**
     * Parses the next token just like g_scanner_peek_next_token()
     * and also removes it from the input stream. The token data is
     * placed in the `token,` `value,` `line,` and `position` fields of
     * the #GScanner structure.
     */
    getNextToken(): TokenType
    /**
     * Prepares to scan a file.
     * @param inputFd a file descriptor
     */
    inputFile(inputFd: number): void
    /**
     * Prepares to scan a text buffer.
     * @param text the text buffer to scan
     * @param textLen the length of the text buffer
     */
    inputText(text: string, textLen: number): void
    /**
     * Looks up a symbol in the current scope and return its value.
     * If the symbol is not bound in the current scope, %NULL is
     * returned.
     * @param symbol the symbol to look up
     */
    lookupSymbol(symbol: string): object | null
    /**
     * Parses the next token, without removing it from the input stream.
     * The token data is placed in the `next_token,` `next_value,` `next_line,`
     * and `next_position` fields of the #GScanner structure.
     * 
     * Note that, while the token is not removed from the input stream
     * (i.e. the next call to g_scanner_get_next_token() will return the
     * same token), it will not be reevaluated. This can lead to surprising
     * results when changing scope or the scanner configuration after peeking
     * the next token. Getting the next token after switching the scope or
     * configuration will return whatever was peeked before, regardless of
     * any symbols that may have been added or removed in the new scope.
     */
    peekNextToken(): TokenType
    /**
     * Adds a symbol to the given scope.
     * @param scopeId the scope id
     * @param symbol the symbol to add
     * @param value the value of the symbol
     */
    scopeAddSymbol(scopeId: number, symbol: string, value: object | null): void
    /**
     * Looks up a symbol in a scope and return its value. If the
     * symbol is not bound in the scope, %NULL is returned.
     * @param scopeId the scope id
     * @param symbol the symbol to look up
     */
    scopeLookupSymbol(scopeId: number, symbol: string): object | null
    /**
     * Removes a symbol from a scope.
     * @param scopeId the scope id
     * @param symbol the symbol to remove
     */
    scopeRemoveSymbol(scopeId: number, symbol: string): void
    /**
     * Sets the current scope.
     * @param scopeId the new scope id
     */
    setScope(scopeId: number): number
    /**
     * Rewinds the filedescriptor to the current buffer position
     * and blows the file read ahead buffer. This is useful for
     * third party uses of the scanners filedescriptor, which hooks
     * onto the current scanning position.
     */
    syncFileOffset(): void
    /**
     * Outputs a message through the scanner's msg_handler,
     * resulting from an unexpected token in the input stream.
     * Note that you should not call g_scanner_peek_next_token()
     * followed by g_scanner_unexp_token() without an intermediate
     * call to g_scanner_get_next_token(), as g_scanner_unexp_token()
     * evaluates the scanner's current token (not the peeked token)
     * to construct part of the message.
     * @param expectedToken the expected token
     * @param identifierSpec a string describing how the scanner's user     refers to identifiers (%NULL defaults to "identifier").     This is used if `expected_token` is %G_TOKEN_IDENTIFIER or     %G_TOKEN_IDENTIFIER_NULL.
     * @param symbolSpec a string describing how the scanner's user refers     to symbols (%NULL defaults to "symbol"). This is used if     `expected_token` is %G_TOKEN_SYMBOL or any token value greater     than %G_TOKEN_LAST.
     * @param symbolName the name of the symbol, if the scanner's current     token is a symbol.
     * @param message a message string to output at the end of the     warning/error, or %NULL.
     * @param isError if %TRUE it is output as an error. If %FALSE it is     output as a warning.
     */
    unexpToken(expectedToken: TokenType, identifierSpec: string, symbolSpec: string, symbolName: string, message: string, isError: number): void
}

/**
 * The data structure representing a lexical scanner.
 * 
 * You should set `input_name` after creating the scanner, since
 * it is used by the default message handler when displaying
 * warnings and errors. If you are scanning a file, the filename
 * would be a good choice.
 * 
 * The `user_data` and `max_parse_errors` fields are not used.
 * If you need to associate extra data with the scanner you
 * can place them here.
 * 
 * If you want to use your own message handler you can set the
 * `msg_handler` field. The type of the message handler function
 * is declared by #GScannerMsgFunc.
 * @record 
 */
export class Scanner {

    // Own properties of GLib-2.0.GLib.Scanner

    static name: string
}

export interface ScannerConfig {

    // Own fields of GLib-2.0.GLib.ScannerConfig

    /**
     * specifies which characters should be skipped
     *     by the scanner (the default is the whitespace characters: space,
     *     tab, carriage-return and line-feed).
     * @field 
     */
    csetSkipCharacters: string
    /**
     * specifies the characters which can start
     *     identifiers (the default is %G_CSET_a_2_z, "_", and %G_CSET_A_2_Z).
     * @field 
     */
    csetIdentifierFirst: string
    /**
     * specifies the characters which can be used
     *     in identifiers, after the first character (the default is
     *     %G_CSET_a_2_z, "_0123456789", %G_CSET_A_2_Z, %G_CSET_LATINS,
     *     %G_CSET_LATINC).
     * @field 
     */
    csetIdentifierNth: string
    /**
     * specifies the characters at the start and
     *     end of single-line comments. The default is "#\n" which means
     *     that single-line comments start with a '#' and continue until
     *     a '\n' (end of line).
     * @field 
     */
    cpairCommentSingle: string
    /**
     * specifies if symbols are case sensitive (the
     *     default is %FALSE).
     * @field 
     */
    caseSensitive: number
    /**
     * specifies if multi-line comments are skipped
     *     and not returned as tokens (the default is %TRUE).
     * @field 
     */
    skipCommentMulti: number
    /**
     * specifies if single-line comments are skipped
     *     and not returned as tokens (the default is %TRUE).
     * @field 
     */
    skipCommentSingle: number
    /**
     * specifies if multi-line comments are recognized
     *     (the default is %TRUE).
     * @field 
     */
    scanCommentMulti: number
    /**
     * specifies if identifiers are recognized (the
     *     default is %TRUE).
     * @field 
     */
    scanIdentifier: number
    /**
     * specifies if single-character
     *     identifiers are recognized (the default is %FALSE).
     * @field 
     */
    scanIdentifier1char: number
    /**
     * specifies if %NULL is reported as
     *     %G_TOKEN_IDENTIFIER_NULL (the default is %FALSE).
     * @field 
     */
    scanIdentifierNULL: number
    /**
     * specifies if symbols are recognized (the default
     *     is %TRUE).
     * @field 
     */
    scanSymbols: number
    /**
     * specifies if binary numbers are recognized (the
     *     default is %FALSE).
     * @field 
     */
    scanBinary: number
    /**
     * specifies if octal numbers are recognized (the
     *     default is %TRUE).
     * @field 
     */
    scanOctal: number
    /**
     * specifies if floating point numbers are recognized
     *     (the default is %TRUE).
     * @field 
     */
    scanFloat: number
    /**
     * specifies if hexadecimal numbers are recognized (the
     *     default is %TRUE).
     * @field 
     */
    scanHex: number
    /**
     * specifies if '$' is recognized as a prefix for
     *     hexadecimal numbers (the default is %FALSE).
     * @field 
     */
    scanHexDollar: number
    /**
     * specifies if strings can be enclosed in single
     *     quotes (the default is %TRUE).
     * @field 
     */
    scanStringSq: number
    /**
     * specifies if strings can be enclosed in double
     *     quotes (the default is %TRUE).
     * @field 
     */
    scanStringDq: number
    /**
     * specifies if binary, octal and hexadecimal numbers
     *     are reported as %G_TOKEN_INT (the default is %TRUE).
     * @field 
     */
    numbers2Int: number
    /**
     * specifies if all numbers are reported as %G_TOKEN_FLOAT
     *     (the default is %FALSE).
     * @field 
     */
    int2Float: number
    /**
     * specifies if identifiers are reported as strings
     *     (the default is %FALSE).
     * @field 
     */
    identifier2String: number
    /**
     * specifies if characters are reported by setting
     *     `token = ch` or as %G_TOKEN_CHAR (the default is %TRUE).
     * @field 
     */
    char2Token: number
    /**
     * specifies if symbols are reported by setting
     *     `token = v_symbol` or as %G_TOKEN_SYMBOL (the default is %FALSE).
     * @field 
     */
    symbol2Token: number
    /**
     * specifies if a symbol is searched for in the
     *     default scope in addition to the current scope (the default is %FALSE).
     * @field 
     */
    scope0Fallback: number
    /**
     * use value.v_int64 rather than v_int
     * @field 
     */
    storeInt64: number
}

/**
 * Specifies the #GScanner parser configuration. Most settings can
 * be changed during the parsing phase and will affect the lexical
 * parsing of the next unpeeked token.
 * @record 
 */
export class ScannerConfig {

    // Own properties of GLib-2.0.GLib.ScannerConfig

    static name: string
}

export interface Sequence {

    // Owm methods of GLib-2.0.GLib.Sequence

    /**
     * Adds a new item to the end of `seq`.
     * @param data the data for the new item
     */
    append(data: object | null): SequenceIter
    /**
     * Frees the memory allocated for `seq`. If `seq` has a data destroy
     * function associated with it, that function is called on all items
     * in `seq`.
     */
    free(): void
    /**
     * Returns the begin iterator for `seq`.
     */
    getBeginIter(): SequenceIter
    /**
     * Returns the end iterator for `seg`
     */
    getEndIter(): SequenceIter
    /**
     * Returns the iterator at position `pos`. If `pos` is negative or larger
     * than the number of items in `seq,` the end iterator is returned.
     * @param pos a position in `seq,` or -1 for the end
     */
    getIterAtPos(pos: number): SequenceIter
    /**
     * Returns the positive length (>= 0) of `seq`. Note that this method is
     * O(h) where `h' is the height of the tree. It is thus more efficient
     * to use g_sequence_is_empty() when comparing the length to zero.
     */
    getLength(): number
    /**
     * Returns %TRUE if the sequence contains zero items.
     * 
     * This function is functionally identical to checking the result of
     * g_sequence_get_length() being equal to zero. However this function is
     * implemented in O(1) running time.
     */
    isEmpty(): boolean
    /**
     * Adds a new item to the front of `seq`
     * @param data the data for the new item
     */
    prepend(data: object | null): SequenceIter
}

/**
 * The #GSequence struct is an opaque data type representing a
 * [sequence][glib-Sequences] data type.
 * @record 
 */
export class Sequence {

    // Own properties of GLib-2.0.GLib.Sequence

    static name: string

    // Constructors of GLib-2.0.GLib.Sequence

    /**
     * Returns the data that `iter` points to.
     * @param iter a #GSequenceIter
     */
    static get(iter: SequenceIter): object | null
    /**
     * Inserts a new item just before the item pointed to by `iter`.
     * @param iter a #GSequenceIter
     * @param data the data for the new item
     */
    static insertBefore(iter: SequenceIter, data: object | null): SequenceIter
    /**
     * Moves the item pointed to by `src` to the position indicated by `dest`.
     * After calling this function `dest` will point to the position immediately
     * after `src`. It is allowed for `src` and `dest` to point into different
     * sequences.
     * @param src a #GSequenceIter pointing to the item to move
     * @param dest a #GSequenceIter pointing to the position to which     the item is moved
     */
    static move(src: SequenceIter, dest: SequenceIter): void
    /**
     * Inserts the (`begin,` `end)` range at the destination pointed to by `dest`.
     * The `begin` and `end` iters must point into the same sequence. It is
     * allowed for `dest` to point to a different sequence than the one pointed
     * into by `begin` and `end`.
     * 
     * If `dest` is %NULL, the range indicated by `begin` and `end` is
     * removed from the sequence. If `dest` points to a place within
     * the (`begin,` `end)` range, the range does not move.
     * @param dest a #GSequenceIter
     * @param begin a #GSequenceIter
     * @param end a #GSequenceIter
     */
    static moveRange(dest: SequenceIter, begin: SequenceIter, end: SequenceIter): void
    /**
     * Finds an iterator somewhere in the range (`begin,` `end)`. This
     * iterator will be close to the middle of the range, but is not
     * guaranteed to be exactly in the middle.
     * 
     * The `begin` and `end` iterators must both point to the same sequence
     * and `begin` must come before or be equal to `end` in the sequence.
     * @param begin a #GSequenceIter
     * @param end a #GSequenceIter
     */
    static rangeGetMidpoint(begin: SequenceIter, end: SequenceIter): SequenceIter
    /**
     * Removes the item pointed to by `iter`. It is an error to pass the
     * end iterator to this function.
     * 
     * If the sequence has a data destroy function associated with it, this
     * function is called on the data for the removed item.
     * @param iter a #GSequenceIter
     */
    static remove(iter: SequenceIter): void
    /**
     * Removes all items in the (`begin,` `end)` range.
     * 
     * If the sequence has a data destroy function associated with it, this
     * function is called on the data for the removed items.
     * @param begin a #GSequenceIter
     * @param end a #GSequenceIter
     */
    static removeRange(begin: SequenceIter, end: SequenceIter): void
    /**
     * Changes the data for the item pointed to by `iter` to be `data`. If
     * the sequence has a data destroy function associated with it, that
     * function is called on the existing data that `iter` pointed to.
     * @param iter a #GSequenceIter
     * @param data new data for the item
     */
    static set(iter: SequenceIter, data: object | null): void
    /**
     * Swaps the items pointed to by `a` and `b`. It is allowed for `a` and `b`
     * to point into difference sequences.
     * @param a a #GSequenceIter
     * @param b a #GSequenceIter
     */
    static swap(a: SequenceIter, b: SequenceIter): void
}

export interface SequenceIter {

    // Owm methods of GLib-2.0.GLib.SequenceIter

    /**
     * Returns a negative number if `a` comes before `b,` 0 if they are equal,
     * and a positive number if `a` comes after `b`.
     * 
     * The `a` and `b` iterators must point into the same sequence.
     * @param b a #GSequenceIter
     */
    compare(b: SequenceIter): number
    /**
     * Returns the position of `iter`
     */
    getPosition(): number
    /**
     * Returns the #GSequence that `iter` points into.
     */
    getSequence(): Sequence
    /**
     * Returns whether `iter` is the begin iterator
     */
    isBegin(): boolean
    /**
     * Returns whether `iter` is the end iterator
     */
    isEnd(): boolean
    /**
     * Returns the #GSequenceIter which is `delta` positions away from `iter`.
     * If `iter` is closer than -`delta` positions to the beginning of the sequence,
     * the begin iterator is returned. If `iter` is closer than `delta` positions
     * to the end of the sequence, the end iterator is returned.
     * @param delta A positive or negative number indicating how many positions away    from `iter` the returned #GSequenceIter will be
     */
    move(delta: number): SequenceIter
    /**
     * Returns an iterator pointing to the next position after `iter`.
     * If `iter` is the end iterator, the end iterator is returned.
     */
    next(): SequenceIter
    /**
     * Returns an iterator pointing to the previous position before `iter`.
     * If `iter` is the begin iterator, the begin iterator is returned.
     */
    prev(): SequenceIter
}

/**
 * The #GSequenceIter struct is an opaque data type representing an
 * iterator pointing into a #GSequence.
 * @record 
 */
export class SequenceIter {

    // Own properties of GLib-2.0.GLib.SequenceIter

    static name: string
}

export interface Source {

    // Owm methods of GLib-2.0.GLib.Source

    /**
     * Adds `child_source` to `source` as a "polled" source; when `source` is
     * added to a #GMainContext, `child_source` will be automatically added
     * with the same priority, when `child_source` is triggered, it will
     * cause `source` to dispatch (in addition to calling its own
     * callback), and when `source` is destroyed, it will destroy
     * `child_source` as well. (`source` will also still be dispatched if
     * its own prepare/check functions indicate that it is ready.)
     * 
     * If you don't need `child_source` to do anything on its own when it
     * triggers, you can call g_source_set_dummy_callback() on it to set a
     * callback that does nothing (except return %TRUE if appropriate).
     * 
     * `source` will hold a reference on `child_source` while `child_source`
     * is attached to it.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * @param childSource a second #GSource that `source` should "poll"
     */
    addChildSource(childSource: Source): void
    /**
     * Adds a file descriptor to the set of file descriptors polled for
     * this source. This is usually combined with g_source_new() to add an
     * event source. The event source's check function will typically test
     * the `revents` field in the #GPollFD struct and return %TRUE if events need
     * to be processed.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * 
     * Using this API forces the linear scanning of event sources on each
     * main loop iteration.  Newly-written event sources should try to use
     * g_source_add_unix_fd() instead of this API.
     * @param fd a #GPollFD structure holding information about a file      descriptor to watch.
     */
    addPoll(fd: PollFD): void
    /**
     * Monitors `fd` for the IO events in `events`.
     * 
     * The tag returned by this function can be used to remove or modify the
     * monitoring of the fd using g_source_remove_unix_fd() or
     * g_source_modify_unix_fd().
     * 
     * It is not necessary to remove the fd before destroying the source; it
     * will be cleaned up automatically.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * 
     * As the name suggests, this function is not available on Windows.
     * @param fd the fd to monitor
     * @param events an event mask
     */
    addUnixFd(fd: number, events: IOCondition): object
    /**
     * Adds a #GSource to a `context` so that it will be executed within
     * that context. Remove it by calling g_source_destroy().
     * 
     * This function is safe to call from any thread, regardless of which thread
     * the `context` is running in.
     * @param context a #GMainContext (if %NULL, the default context will be used)
     */
    attach(context: MainContext | null): number
    /**
     * Removes a source from its #GMainContext, if any, and mark it as
     * destroyed.  The source cannot be subsequently added to another
     * context. It is safe to call this on sources which have already been
     * removed from their context.
     * 
     * This does not unref the #GSource: if you still hold a reference, use
     * g_source_unref() to drop it.
     * 
     * This function is safe to call from any thread, regardless of which thread
     * the #GMainContext is running in.
     * 
     * If the source is currently attached to a #GMainContext, destroying it
     * will effectively unset the callback similar to calling g_source_set_callback().
     * This can mean, that the data's #GDestroyNotify gets called right away.
     */
    destroy(): void
    /**
     * Checks whether a source is allowed to be called recursively.
     * see g_source_set_can_recurse().
     */
    getCanRecurse(): boolean
    /**
     * Gets the #GMainContext with which the source is associated.
     * 
     * You can call this on a source that has been destroyed, provided
     * that the #GMainContext it was attached to still exists (in which
     * case it will return that #GMainContext). In particular, you can
     * always call this function on the source returned from
     * g_main_current_source(). But calling this function on a source
     * whose #GMainContext has been destroyed is an error.
     */
    getContext(): MainContext | null
    /**
     * This function ignores `source` and is otherwise the same as
     * g_get_current_time().
     * @param timeval #GTimeVal structure in which to store current time.
     */
    getCurrentTime(timeval: TimeVal): void
    /**
     * Returns the numeric ID for a particular source. The ID of a source
     * is a positive integer which is unique within a particular main loop
     * context. The reverse
     * mapping from ID to source is done by g_main_context_find_source_by_id().
     * 
     * You can only call this function while the source is associated to a
     * #GMainContext instance; calling this function before g_source_attach()
     * or after g_source_destroy() yields undefined behavior. The ID returned
     * is unique within the #GMainContext instance passed to g_source_attach().
     */
    getId(): number
    /**
     * Gets a name for the source, used in debugging and profiling.  The
     * name may be #NULL if it has never been set with g_source_set_name().
     */
    getName(): string | null
    /**
     * Gets the priority of a source.
     */
    getPriority(): number
    /**
     * Gets the "ready time" of `source,` as set by
     * g_source_set_ready_time().
     * 
     * Any time before the current monotonic time (including 0) is an
     * indication that the source will fire immediately.
     */
    getReadyTime(): number
    /**
     * Gets the time to be used when checking this source. The advantage of
     * calling this function over calling g_get_monotonic_time() directly is
     * that when checking multiple sources, GLib can cache a single value
     * instead of having to repeatedly get the system monotonic time.
     * 
     * The time here is the system monotonic time, if available, or some
     * other reasonable alternative otherwise.  See g_get_monotonic_time().
     */
    getTime(): number
    /**
     * Returns whether `source` has been destroyed.
     * 
     * This is important when you operate upon your objects
     * from within idle handlers, but may have freed the object
     * before the dispatch of your idle handler.
     * 
     * 
     * ```c
     * static gboolean
     * idle_callback (gpointer data)
     * {
     *   SomeWidget *self = data;
     *    
     *   g_mutex_lock (&self->idle_id_mutex);
     *   // do stuff with self
     *   self->idle_id = 0;
     *   g_mutex_unlock (&self->idle_id_mutex);
     *    
     *   return G_SOURCE_REMOVE;
     * }
     *  
     * static void
     * some_widget_do_stuff_later (SomeWidget *self)
     * {
     *   g_mutex_lock (&self->idle_id_mutex);
     *   self->idle_id = g_idle_add (idle_callback, self);
     *   g_mutex_unlock (&self->idle_id_mutex);
     * }
     *  
     * static void
     * some_widget_init (SomeWidget *self)
     * {
     *   g_mutex_init (&self->idle_id_mutex);
     * 
     *   // ...
     * }
     * 
     * static void
     * some_widget_finalize (GObject *object)
     * {
     *   SomeWidget *self = SOME_WIDGET (object);
     *    
     *   if (self->idle_id)
     *     g_source_remove (self->idle_id);
     *    
     *   g_mutex_clear (&self->idle_id_mutex);
     * 
     *   G_OBJECT_CLASS (parent_class)->finalize (object);
     * }
     * ```
     * 
     * 
     * This will fail in a multi-threaded application if the
     * widget is destroyed before the idle handler fires due
     * to the use after free in the callback. A solution, to
     * this particular problem, is to check to if the source
     * has already been destroy within the callback.
     * 
     * 
     * ```c
     * static gboolean
     * idle_callback (gpointer data)
     * {
     *   SomeWidget *self = data;
     *   
     *   g_mutex_lock (&self->idle_id_mutex);
     *   if (!g_source_is_destroyed (g_main_current_source ()))
     *     {
     *       // do stuff with self
     *     }
     *   g_mutex_unlock (&self->idle_id_mutex);
     *   
     *   return FALSE;
     * }
     * ```
     * 
     * 
     * Calls to this function from a thread other than the one acquired by the
     * #GMainContext the #GSource is attached to are typically redundant, as the
     * source could be destroyed immediately after this function returns. However,
     * once a source is destroyed it cannot be un-destroyed, so this function can be
     * used for opportunistic checks from any thread.
     */
    isDestroyed(): boolean
    /**
     * Updates the event mask to watch for the fd identified by `tag`.
     * 
     * `tag` is the tag returned from g_source_add_unix_fd().
     * 
     * If you want to remove a fd, don't set its event mask to zero.
     * Instead, call g_source_remove_unix_fd().
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * 
     * As the name suggests, this function is not available on Windows.
     * @param tag the tag from g_source_add_unix_fd()
     * @param newEvents the new event mask to watch
     */
    modifyUnixFd(tag: object, newEvents: IOCondition): void
    /**
     * Queries the events reported for the fd corresponding to `tag` on
     * `source` during the last poll.
     * 
     * The return value of this function is only defined when the function
     * is called from the check or dispatch functions for `source`.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * 
     * As the name suggests, this function is not available on Windows.
     * @param tag the tag from g_source_add_unix_fd()
     */
    queryUnixFd(tag: object): IOCondition
    /**
     * Increases the reference count on a source by one.
     */
    ref(): Source
    /**
     * Detaches `child_source` from `source` and destroys it.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * @param childSource a #GSource previously passed to     g_source_add_child_source().
     */
    removeChildSource(childSource: Source): void
    /**
     * Removes a file descriptor from the set of file descriptors polled for
     * this source.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * @param fd a #GPollFD structure previously passed to g_source_add_poll().
     */
    removePoll(fd: PollFD): void
    /**
     * Reverses the effect of a previous call to g_source_add_unix_fd().
     * 
     * You only need to call this if you want to remove an fd from being
     * watched while keeping the same source around.  In the normal case you
     * will just want to destroy the source.
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * 
     * As the name suggests, this function is not available on Windows.
     * @param tag the tag from g_source_add_unix_fd()
     */
    removeUnixFd(tag: object): void
    /**
     * Sets the callback function for a source. The callback for a source is
     * called from the source's dispatch function.
     * 
     * The exact type of `func` depends on the type of source; ie. you
     * should not count on `func` being called with `data` as its first
     * parameter. Cast `func` with G_SOURCE_FUNC() to avoid warnings about
     * incompatible function types.
     * 
     * See [memory management of sources][mainloop-memory-management] for details
     * on how to handle memory management of `data`.
     * 
     * Typically, you won't use this function. Instead use functions specific
     * to the type of source you are using, such as g_idle_add() or g_timeout_add().
     * 
     * It is safe to call this function multiple times on a source which has already
     * been attached to a context. The changes will take effect for the next time
     * the source is dispatched after this call returns.
     * 
     * Note that g_source_destroy() for a currently attached source has the effect
     * of also unsetting the callback.
     * @param func a callback function
     */
    setCallback(func: SourceFunc): void
    /**
     * Sets the callback function storing the data as a refcounted callback
     * "object". This is used internally. Note that calling
     * g_source_set_callback_indirect() assumes
     * an initial reference count on `callback_data,` and thus
     * `callback_funcs->`unref will eventually be called once more
     * than `callback_funcs->`ref.
     * 
     * It is safe to call this function multiple times on a source which has already
     * been attached to a context. The changes will take effect for the next time
     * the source is dispatched after this call returns.
     * @param callbackData pointer to callback data "object"
     * @param callbackFuncs functions for reference counting `callback_data`                  and getting the callback and data
     */
    setCallbackIndirect(callbackData: object | null, callbackFuncs: SourceCallbackFuncs): void
    /**
     * Sets whether a source can be called recursively. If `can_recurse` is
     * %TRUE, then while the source is being dispatched then this source
     * will be processed normally. Otherwise, all processing of this
     * source is blocked until the dispatch function returns.
     * @param canRecurse whether recursion is allowed for this source
     */
    setCanRecurse(canRecurse: boolean): void
    /**
     * Sets the source functions (can be used to override
     * default implementations) of an unattached source.
     * @param funcs the new #GSourceFuncs
     */
    setFuncs(funcs: SourceFuncs): void
    /**
     * Sets a name for the source, used in debugging and profiling.
     * The name defaults to #NULL.
     * 
     * The source name should describe in a human-readable way
     * what the source does. For example, "X11 event queue"
     * or "GTK+ repaint idle handler" or whatever it is.
     * 
     * It is permitted to call this function multiple times, but is not
     * recommended due to the potential performance impact.  For example,
     * one could change the name in the "check" function of a #GSourceFuncs
     * to include details like the event type in the source name.
     * 
     * Use caution if changing the name while another thread may be
     * accessing it with g_source_get_name(); that function does not copy
     * the value, and changing the value will free it while the other thread
     * may be attempting to use it.
     * 
     * Also see g_source_set_static_name().
     * @param name debug name for the source
     */
    setName(name: string): void
    /**
     * Sets the priority of a source. While the main loop is being run, a
     * source will be dispatched if it is ready to be dispatched and no
     * sources at a higher (numerically smaller) priority are ready to be
     * dispatched.
     * 
     * A child source always has the same priority as its parent.  It is not
     * permitted to change the priority of a source once it has been added
     * as a child of another source.
     * @param priority the new priority.
     */
    setPriority(priority: number): void
    /**
     * Sets a #GSource to be dispatched when the given monotonic time is
     * reached (or passed).  If the monotonic time is in the past (as it
     * always will be if `ready_time` is 0) then the source will be
     * dispatched immediately.
     * 
     * If `ready_time` is -1 then the source is never woken up on the basis
     * of the passage of time.
     * 
     * Dispatching the source does not reset the ready time.  You should do
     * so yourself, from the source dispatch function.
     * 
     * Note that if you have a pair of sources where the ready time of one
     * suggests that it will be delivered first but the priority for the
     * other suggests that it would be delivered first, and the ready time
     * for both sources is reached during the same main context iteration,
     * then the order of dispatch is undefined.
     * 
     * It is a no-op to call this function on a #GSource which has already been
     * destroyed with g_source_destroy().
     * 
     * This API is only intended to be used by implementations of #GSource.
     * Do not call this API on a #GSource that you did not create.
     * @param readyTime the monotonic time at which the source will be ready,              0 for "immediately", -1 for "never"
     */
    setReadyTime(readyTime: number): void
    /**
     * A variant of g_source_set_name() that does not
     * duplicate the `name,` and can only be used with
     * string literals.
     * @param name debug name for the source
     */
    setStaticName(name: string): void
    /**
     * Decreases the reference count of a source by one. If the
     * resulting reference count is zero the source and associated
     * memory will be destroyed.
     */
    unref(): void
}

/**
 * The `GSource` struct is an opaque data type
 * representing an event source.
 * @record 
 */
export class Source {

    // Own properties of GLib-2.0.GLib.Source

    static name: string

    // Constructors of GLib-2.0.GLib.Source

    /**
     * Creates a new #GSource structure. The size is specified to
     * allow creating structures derived from #GSource that contain
     * additional data. The size passed in must be at least
     * `sizeof (GSource)`.
     * 
     * The source will not initially be associated with any #GMainContext
     * and must be added to one with g_source_attach() before it will be
     * executed.
     * @constructor 
     * @param sourceFuncs structure containing functions that implement                the sources behavior.
     * @param structSize size of the #GSource structure to create.
     */
    constructor(sourceFuncs: SourceFuncs, structSize: number) 
    /**
     * Creates a new #GSource structure. The size is specified to
     * allow creating structures derived from #GSource that contain
     * additional data. The size passed in must be at least
     * `sizeof (GSource)`.
     * 
     * The source will not initially be associated with any #GMainContext
     * and must be added to one with g_source_attach() before it will be
     * executed.
     * @constructor 
     * @param sourceFuncs structure containing functions that implement                the sources behavior.
     * @param structSize size of the #GSource structure to create.
     */
    static new(sourceFuncs: SourceFuncs, structSize: number): Source
    /**
     * Removes the source with the given ID from the default main context. You must
     * use g_source_destroy() for sources added to a non-default main context.
     * 
     * The ID of a #GSource is given by g_source_get_id(), or will be
     * returned by the functions g_source_attach(), g_idle_add(),
     * g_idle_add_full(), g_timeout_add(), g_timeout_add_full(),
     * g_child_watch_add(), g_child_watch_add_full(), g_io_add_watch(), and
     * g_io_add_watch_full().
     * 
     * It is a programmer error to attempt to remove a non-existent source.
     * 
     * More specifically: source IDs can be reissued after a source has been
     * destroyed and therefore it is never valid to use this function with a
     * source ID which may have already been removed.  An example is when
     * scheduling an idle to run in another thread with g_idle_add(): the
     * idle may already have run and been removed by the time this function
     * is called on its (now invalid) source ID.  This source ID may have
     * been reissued, leading to the operation being performed against the
     * wrong source.
     * @param tag the ID of the source to remove.
     */
    static remove(tag: number): boolean
    /**
     * Removes a source from the default main loop context given the
     * source functions and user data. If multiple sources exist with the
     * same source functions and user data, only one will be destroyed.
     * @param funcs The `source_funcs` passed to g_source_new()
     * @param userData the user data for the callback
     */
    static removeByFuncsUserData(funcs: SourceFuncs, userData: object | null): boolean
    /**
     * Removes a source from the default main loop context given the user
     * data for the callback. If multiple sources exist with the same user
     * data, only one will be destroyed.
     * @param userData the user_data for the callback.
     */
    static removeByUserData(userData: object | null): boolean
    /**
     * Sets the name of a source using its ID.
     * 
     * This is a convenience utility to set source names from the return
     * value of g_idle_add(), g_timeout_add(), etc.
     * 
     * It is a programmer error to attempt to set the name of a non-existent
     * source.
     * 
     * More specifically: source IDs can be reissued after a source has been
     * destroyed and therefore it is never valid to use this function with a
     * source ID which may have already been removed.  An example is when
     * scheduling an idle to run in another thread with g_idle_add(): the
     * idle may already have run and been removed by the time this function
     * is called on its (now invalid) source ID.  This source ID may have
     * been reissued, leading to the operation being performed against the
     * wrong source.
     * @param tag a #GSource ID
     * @param name debug name for the source
     */
    static setNameById(tag: number, name: string): void
}

export interface SourceCallbackFuncs {

    // Own fields of GLib-2.0.GLib.SourceCallbackFuncs

    ref: (cbData: object) => void
    unref: (cbData: object) => void
}

/**
 * The `GSourceCallbackFuncs` struct contains
 * functions for managing callback objects.
 * @record 
 */
export class SourceCallbackFuncs {

    // Own properties of GLib-2.0.GLib.SourceCallbackFuncs

    static name: string
}

export interface SourceFuncs {

    // Own fields of GLib-2.0.GLib.SourceFuncs

    prepare: (source: Source, timeout: number) => boolean
    check: (source: Source) => boolean
    finalize: (source: Source) => void
}

/**
 * The `GSourceFuncs` struct contains a table of
 * functions used to handle event sources in a generic manner.
 * 
 * For idle sources, the prepare and check functions always return %TRUE
 * to indicate that the source is always ready to be processed. The prepare
 * function also returns a timeout value of 0 to ensure that the poll() call
 * doesn't block (since that would be time wasted which could have been spent
 * running the idle function).
 * 
 * For timeout sources, the prepare and check functions both return %TRUE
 * if the timeout interval has expired. The prepare function also returns
 * a timeout value to ensure that the poll() call doesn't block too long
 * and miss the next timeout.
 * 
 * For file descriptor sources, the prepare function typically returns %FALSE,
 * since it must wait until poll() has been called before it knows whether
 * any events need to be processed. It sets the returned timeout to -1 to
 * indicate that it doesn't mind how long the poll() call blocks. In the
 * check function, it tests the results of the poll() call to see if the
 * required condition has been met, and returns %TRUE if so.
 * @record 
 */
export class SourceFuncs {

    // Own properties of GLib-2.0.GLib.SourceFuncs

    static name: string
}

export interface SourcePrivate {
}

export class SourcePrivate {

    // Own properties of GLib-2.0.GLib.SourcePrivate

    static name: string
}

export interface StatBuf {
}

/**
 * A type corresponding to the appropriate struct type for the stat()
 * system call, depending on the platform and/or compiler being used.
 * 
 * See g_stat() for more information.
 * @record 
 */
export class StatBuf {

    // Own properties of GLib-2.0.GLib.StatBuf

    static name: string
}

export interface String {

    // Own fields of GLib-2.0.GLib.String

    /**
     * points to the character data. It may move as text is added.
     *   The `str` field is null-terminated and so
     *   can be used as an ordinary C string.
     * @field 
     */
    str: string
    /**
     * contains the length of the string, not including the
     *   terminating nul byte.
     * @field 
     */
    len: number
    /**
     * the number of bytes that can be stored in the
     *   string before it needs to be reallocated. May be larger than `len`.
     * @field 
     */
    allocatedLen: number

    // Owm methods of GLib-2.0.GLib.String

    /**
     * Adds a string onto the end of a #GString, expanding
     * it if necessary.
     * @param val the string to append onto the end of `string`
     */
    append(val: string): String
    /**
     * Adds a byte onto the end of a #GString, expanding
     * it if necessary.
     * @param c the byte to append onto the end of `string`
     */
    appendC(c: number): String
    /**
     * Appends `len` bytes of `val` to `string`.
     * 
     * If `len` is positive, `val` may contain embedded nuls and need
     * not be nul-terminated. It is the caller's responsibility to
     * ensure that `val` has at least `len` addressable bytes.
     * 
     * If `len` is negative, `val` must be nul-terminated and `len`
     * is considered to request the entire string length. This
     * makes g_string_append_len() equivalent to g_string_append().
     * @param val bytes to append
     * @param len number of bytes of `val` to use, or -1 for all of `val`
     */
    appendLen(val: string, len: number): String
    /**
     * Converts a Unicode character into UTF-8, and appends it
     * to the string.
     * @param wc a Unicode character
     */
    appendUnichar(wc: string): String
    /**
     * Appends `unescaped` to `string,` escaping any characters that
     * are reserved in URIs using URI-style escape sequences.
     * @param unescaped a string
     * @param reservedCharsAllowed a string of reserved characters allowed     to be used, or %NULL
     * @param allowUtf8 set %TRUE if the escaped string may include UTF8 characters
     */
    appendUriEscaped(unescaped: string, reservedCharsAllowed: string, allowUtf8: boolean): String
    /**
     * Converts all uppercase ASCII letters to lowercase ASCII letters.
     */
    asciiDown(): String
    /**
     * Converts all lowercase ASCII letters to uppercase ASCII letters.
     */
    asciiUp(): String
    /**
     * Copies the bytes from a string into a #GString,
     * destroying any previous contents. It is rather like
     * the standard strcpy() function, except that you do not
     * have to worry about having enough space to copy the string.
     * @param rval the string to copy into `string`
     */
    assign(rval: string): String
    /**
     * Converts a #GString to lowercase.
     */
    down(): String
    /**
     * Compares two strings for equality, returning %TRUE if they are equal.
     * For use with #GHashTable.
     * @param v2 another #GString
     */
    equal(v2: String): boolean
    /**
     * Removes `len` bytes from a #GString, starting at position `pos`.
     * The rest of the #GString is shifted down to fill the gap.
     * @param pos the position of the content to remove
     * @param len the number of bytes to remove, or -1 to remove all       following bytes
     */
    erase(pos: number, len: number): String
    /**
     * Frees the memory allocated for the #GString.
     * If `free_segment` is %TRUE it also frees the character data.  If
     * it's %FALSE, the caller gains ownership of the buffer and must
     * free it after use with g_free().
     * @param freeSegment if %TRUE, the actual character data is freed as well
     */
    free(freeSegment: boolean): string | null
    /**
     * Transfers ownership of the contents of `string` to a newly allocated
     * #GBytes.  The #GString structure itself is deallocated, and it is
     * therefore invalid to use `string` after invoking this function.
     * 
     * Note that while #GString ensures that its buffer always has a
     * trailing nul character (not reflected in its "len"), the returned
     * #GBytes does not include this extra nul; i.e. it has length exactly
     * equal to the "len" member.
     */
    freeToBytes(): any
    /**
     * Creates a hash code for `str;` for use with #GHashTable.
     */
    hash(): number
    /**
     * Inserts a copy of a string into a #GString,
     * expanding it if necessary.
     * @param pos the position to insert the copy of the string
     * @param val the string to insert
     */
    insert(pos: number, val: string): String
    /**
     * Inserts a byte into a #GString, expanding it if necessary.
     * @param pos the position to insert the byte
     * @param c the byte to insert
     */
    insertC(pos: number, c: number): String
    /**
     * Inserts `len` bytes of `val` into `string` at `pos`.
     * 
     * If `len` is positive, `val` may contain embedded nuls and need
     * not be nul-terminated. It is the caller's responsibility to
     * ensure that `val` has at least `len` addressable bytes.
     * 
     * If `len` is negative, `val` must be nul-terminated and `len`
     * is considered to request the entire string length.
     * 
     * If `pos` is -1, bytes are inserted at the end of the string.
     * @param pos position in `string` where insertion should       happen, or -1 for at the end
     * @param val bytes to insert
     * @param len number of bytes of `val` to insert, or -1 for all of `val`
     */
    insertLen(pos: number, val: string, len: number): String
    /**
     * Converts a Unicode character into UTF-8, and insert it
     * into the string at the given position.
     * @param pos the position at which to insert character, or -1     to append at the end of the string
     * @param wc a Unicode character
     */
    insertUnichar(pos: number, wc: string): String
    /**
     * Overwrites part of a string, lengthening it if necessary.
     * @param pos the position at which to start overwriting
     * @param val the string that will overwrite the `string` starting at `pos`
     */
    overwrite(pos: number, val: string): String
    /**
     * Overwrites part of a string, lengthening it if necessary.
     * This function will work with embedded nuls.
     * @param pos the position at which to start overwriting
     * @param val the string that will overwrite the `string` starting at `pos`
     * @param len the number of bytes to write from `val`
     */
    overwriteLen(pos: number, val: string, len: number): String
    /**
     * Adds a string on to the start of a #GString,
     * expanding it if necessary.
     * @param val the string to prepend on the start of `string`
     */
    prepend(val: string): String
    /**
     * Adds a byte onto the start of a #GString,
     * expanding it if necessary.
     * @param c the byte to prepend on the start of the #GString
     */
    prependC(c: number): String
    /**
     * Prepends `len` bytes of `val` to `string`.
     * 
     * If `len` is positive, `val` may contain embedded nuls and need
     * not be nul-terminated. It is the caller's responsibility to
     * ensure that `val` has at least `len` addressable bytes.
     * 
     * If `len` is negative, `val` must be nul-terminated and `len`
     * is considered to request the entire string length. This
     * makes g_string_prepend_len() equivalent to g_string_prepend().
     * @param val bytes to prepend
     * @param len number of bytes in `val` to prepend, or -1 for all of `val`
     */
    prependLen(val: string, len: number): String
    /**
     * Converts a Unicode character into UTF-8, and prepends it
     * to the string.
     * @param wc a Unicode character
     */
    prependUnichar(wc: string): String
    /**
     * Replaces the string `find` with the string `replace` in a #GString up to
     * `limit` times. If the number of instances of `find` in the #GString is
     * less than `limit,` all instances are replaced. If `limit` is `0`,
     * all instances of `find` are replaced.
     * 
     * If `find` is the empty string, since versions 2.69.1 and 2.68.4 the
     * replacement will be inserted no more than once per possible position
     * (beginning of string, end of string and between characters). This did
     * not work correctly in earlier versions.
     * @param find the string to find in `string`
     * @param replace the string to insert in place of `find`
     * @param limit the maximum instances of `find` to replace with `replace,` or `0` for no limit
     */
    replace(find: string, replace: string, limit: number): number
    /**
     * Sets the length of a #GString. If the length is less than
     * the current length, the string will be truncated. If the
     * length is greater than the current length, the contents
     * of the newly added area are undefined. (However, as
     * always, string->str[string->len] will be a nul byte.)
     * @param len the new length
     */
    setSize(len: number): String
    /**
     * Cuts off the end of the GString, leaving the first `len` bytes.
     * @param len the new size of `string`
     */
    truncate(len: number): String
    /**
     * Converts a #GString to uppercase.
     */
    up(): String
}

/**
 * The GString struct contains the public fields of a GString.
 * @record 
 */
export class String {

    // Own properties of GLib-2.0.GLib.String

    static name: string

    // Constructors of GLib-2.0.GLib.String

    /**
     * Creates a new #GString, initialized with the given string.
     * @constructor 
     * @param init the initial text to copy into the string, or %NULL to   start with an empty string
     */
    constructor(init: string | null) 
    /**
     * Creates a new #GString, initialized with the given string.
     * @constructor 
     * @param init the initial text to copy into the string, or %NULL to   start with an empty string
     */
    static new(init: string | null): String
    /**
     * Creates a new #GString with `len` bytes of the `init` buffer.
     * Because a length is provided, `init` need not be nul-terminated,
     * and can contain embedded nul bytes.
     * 
     * Since this function does not stop at nul bytes, it is the caller's
     * responsibility to ensure that `init` has at least `len` addressable
     * bytes.
     * @constructor 
     * @param init initial contents of the string
     * @param len length of `init` to use
     */
    static newLen(init: string, len: number): String
    /**
     * Creates a new #GString, with enough space for `dfl_size`
     * bytes. This is useful if you are going to add a lot of
     * text to the string and don't want it to be reallocated
     * too often.
     * @constructor 
     * @param dflSize the default size of the space allocated to hold the string
     */
    static sizedNew(dflSize: number): String
}

export interface StringChunk {

    // Owm methods of GLib-2.0.GLib.StringChunk

    /**
     * Frees all strings contained within the #GStringChunk.
     * After calling g_string_chunk_clear() it is not safe to
     * access any of the strings which were contained within it.
     */
    clear(): void
    /**
     * Frees all memory allocated by the #GStringChunk.
     * After calling g_string_chunk_free() it is not safe to
     * access any of the strings which were contained within it.
     */
    free(): void
    /**
     * Adds a copy of `string` to the #GStringChunk.
     * It returns a pointer to the new copy of the string
     * in the #GStringChunk. The characters in the string
     * can be changed, if necessary, though you should not
     * change anything after the end of the string.
     * 
     * Unlike g_string_chunk_insert_const(), this function
     * does not check for duplicates. Also strings added
     * with g_string_chunk_insert() will not be searched
     * by g_string_chunk_insert_const() when looking for
     * duplicates.
     * @param string the string to add
     */
    insert(string: string): string
    /**
     * Adds a copy of `string` to the #GStringChunk, unless the same
     * string has already been added to the #GStringChunk with
     * g_string_chunk_insert_const().
     * 
     * This function is useful if you need to copy a large number
     * of strings but do not want to waste space storing duplicates.
     * But you must remember that there may be several pointers to
     * the same string, and so any changes made to the strings
     * should be done very carefully.
     * 
     * Note that g_string_chunk_insert_const() will not return a
     * pointer to a string added with g_string_chunk_insert(), even
     * if they do match.
     * @param string the string to add
     */
    insertConst(string: string): string
    /**
     * Adds a copy of the first `len` bytes of `string` to the #GStringChunk.
     * The copy is nul-terminated.
     * 
     * Since this function does not stop at nul bytes, it is the caller's
     * responsibility to ensure that `string` has at least `len` addressable
     * bytes.
     * 
     * The characters in the returned string can be changed, if necessary,
     * though you should not change anything after the end of the string.
     * @param string bytes to insert
     * @param len number of bytes of `string` to insert, or -1 to insert a     nul-terminated string
     */
    insertLen(string: string, len: number): string
}

/**
 * An opaque data structure representing String Chunks.
 * It should only be accessed by using the following functions.
 * @record 
 */
export class StringChunk {

    // Own properties of GLib-2.0.GLib.StringChunk

    static name: string
}

export interface StrvBuilder {

    // Owm methods of GLib-2.0.GLib.StrvBuilder

    /**
     * Add a string to the end of the array.
     * 
     * Since 2.68
     * @param value a string.
     */
    add(value: string): void
    /**
     * Appends all the strings in the given vector to the builder.
     * 
     * Since 2.70
     * @param value the vector of strings to add
     */
    addv(value: string[]): void
    /**
     * Ends the builder process and returns the constructed NULL-terminated string
     * array. The returned value should be freed with g_strfreev() when no longer
     * needed.
     */
    end(): string[]
    /**
     * Decreases the reference count on `builder`.
     * 
     * In the event that there are no more references, releases all memory
     * associated with the #GStrvBuilder.
     */
    unref(): void
}

/**
 * #GStrvBuilder is a method of easily building dynamically sized
 * NULL-terminated string arrays.
 * 
 * The following example shows how to build a two element array:
 * 
 * 
 * ```c
 *   g_autoptr(GStrvBuilder) builder = g_strv_builder_new ();
 *   g_strv_builder_add (builder, "hello");
 *   g_strv_builder_add (builder, "world");
 *   g_auto(GStrv) array = g_strv_builder_end (builder);
 * ```
 * 
 * @record 
 */
export class StrvBuilder {

    // Own properties of GLib-2.0.GLib.StrvBuilder

    static name: string
}

export interface TestCase {

    // Owm methods of GLib-2.0.GLib.TestCase

    /**
     * Free the `test_case`.
     */
    free(): void
}

/**
 * An opaque structure representing a test case.
 * @record 
 */
export class TestCase {

    // Own properties of GLib-2.0.GLib.TestCase

    static name: string
}

export interface TestConfig {

    // Own fields of GLib-2.0.GLib.TestConfig

    testInitialized: boolean
    testQuick: boolean
    testPerf: boolean
    testVerbose: boolean
    testQuiet: boolean
    testUndefined: boolean
}

export class TestConfig {

    // Own properties of GLib-2.0.GLib.TestConfig

    static name: string
}

export interface TestLogBuffer {

    // Owm methods of GLib-2.0.GLib.TestLogBuffer

    /**
     * Internal function for gtester to free test log messages, no ABI guarantees provided.
     */
    free(): void
    /**
     * Internal function for gtester to decode test log messages, no ABI guarantees provided.
     * @param nBytes 
     * @param bytes 
     */
    push(nBytes: number, bytes: number): void
}

export class TestLogBuffer {

    // Own properties of GLib-2.0.GLib.TestLogBuffer

    static name: string
}

export interface TestLogMsg {

    // Own fields of GLib-2.0.GLib.TestLogMsg

    logType: TestLogType
    nStrings: number
    strings: string
    nNums: number

    // Owm methods of GLib-2.0.GLib.TestLogMsg

    /**
     * Internal function for gtester to free test log messages, no ABI guarantees provided.
     */
    free(): void
}

export class TestLogMsg {

    // Own properties of GLib-2.0.GLib.TestLogMsg

    static name: string
}

export interface TestSuite {

    // Owm methods of GLib-2.0.GLib.TestSuite

    /**
     * Adds `test_case` to `suite`.
     * @param testCase a #GTestCase
     */
    add(testCase: TestCase): void
    /**
     * Adds `nestedsuite` to `suite`.
     * @param nestedsuite another #GTestSuite
     */
    addSuite(nestedsuite: TestSuite): void
    /**
     * Free the `suite` and all nested #GTestSuites.
     */
    free(): void
}

/**
 * An opaque structure representing a test suite.
 * @record 
 */
export class TestSuite {

    // Own properties of GLib-2.0.GLib.TestSuite

    static name: string
}

export interface Thread {

    // Owm methods of GLib-2.0.GLib.Thread

    /**
     * Waits until `thread` finishes, i.e. the function `func,` as
     * given to g_thread_new(), returns or g_thread_exit() is called.
     * If `thread` has already terminated, then g_thread_join()
     * returns immediately.
     * 
     * Any thread can wait for any other thread by calling g_thread_join(),
     * not just its 'creator'. Calling g_thread_join() from multiple threads
     * for the same `thread` leads to undefined behaviour.
     * 
     * The value returned by `func` or given to g_thread_exit() is
     * returned by this function.
     * 
     * g_thread_join() consumes the reference to the passed-in `thread`.
     * This will usually cause the #GThread struct and associated resources
     * to be freed. Use g_thread_ref() to obtain an extra reference if you
     * want to keep the GThread alive beyond the g_thread_join() call.
     */
    join(): object | null
    /**
     * Increase the reference count on `thread`.
     */
    ref(): Thread
    /**
     * Decrease the reference count on `thread,` possibly freeing all
     * resources associated with it.
     * 
     * Note that each thread holds a reference to its #GThread while
     * it is running, so it is safe to drop your own reference to it
     * if you don't need it anymore.
     */
    unref(): void
}

/**
 * The #GThread struct represents a running thread. This struct
 * is returned by g_thread_new() or g_thread_try_new(). You can
 * obtain the #GThread struct representing the current thread by
 * calling g_thread_self().
 * 
 * GThread is refcounted, see g_thread_ref() and g_thread_unref().
 * The thread represented by it holds a reference while it is running,
 * and g_thread_join() consumes the reference that it is given, so
 * it is normally not necessary to manage GThread references
 * explicitly.
 * 
 * The structure is opaque -- none of its fields may be directly
 * accessed.
 * @record 
 */
export class Thread {

    // Own properties of GLib-2.0.GLib.Thread

    static name: string

    // Constructors of GLib-2.0.GLib.Thread

    /**
     * This function creates a new thread. The new thread starts by invoking
     * `func` with the argument data. The thread will run until `func` returns
     * or until g_thread_exit() is called from the new thread. The return value
     * of `func` becomes the return value of the thread, which can be obtained
     * with g_thread_join().
     * 
     * The `name` can be useful for discriminating threads in a debugger.
     * It is not used for other purposes and does not have to be unique.
     * Some systems restrict the length of `name` to 16 bytes.
     * 
     * If the thread can not be created the program aborts. See
     * g_thread_try_new() if you want to attempt to deal with failures.
     * 
     * If you are using threads to offload (potentially many) short-lived tasks,
     * #GThreadPool may be more appropriate than manually spawning and tracking
     * multiple #GThreads.
     * 
     * To free the struct returned by this function, use g_thread_unref().
     * Note that g_thread_join() implicitly unrefs the #GThread as well.
     * 
     * New threads by default inherit their scheduler policy (POSIX) or thread
     * priority (Windows) of the thread creating the new thread.
     * 
     * This behaviour changed in GLib 2.64: before threads on Windows were not
     * inheriting the thread priority but were spawned with the default priority.
     * Starting with GLib 2.64 the behaviour is now consistent between Windows and
     * POSIX and all threads inherit their parent thread's priority.
     * @constructor 
     * @param name an (optional) name for the new thread
     * @param func a function to execute in the new thread
     */
    constructor(name: string | null, func: ThreadFunc) 
    /**
     * This function creates a new thread. The new thread starts by invoking
     * `func` with the argument data. The thread will run until `func` returns
     * or until g_thread_exit() is called from the new thread. The return value
     * of `func` becomes the return value of the thread, which can be obtained
     * with g_thread_join().
     * 
     * The `name` can be useful for discriminating threads in a debugger.
     * It is not used for other purposes and does not have to be unique.
     * Some systems restrict the length of `name` to 16 bytes.
     * 
     * If the thread can not be created the program aborts. See
     * g_thread_try_new() if you want to attempt to deal with failures.
     * 
     * If you are using threads to offload (potentially many) short-lived tasks,
     * #GThreadPool may be more appropriate than manually spawning and tracking
     * multiple #GThreads.
     * 
     * To free the struct returned by this function, use g_thread_unref().
     * Note that g_thread_join() implicitly unrefs the #GThread as well.
     * 
     * New threads by default inherit their scheduler policy (POSIX) or thread
     * priority (Windows) of the thread creating the new thread.
     * 
     * This behaviour changed in GLib 2.64: before threads on Windows were not
     * inheriting the thread priority but were spawned with the default priority.
     * Starting with GLib 2.64 the behaviour is now consistent between Windows and
     * POSIX and all threads inherit their parent thread's priority.
     * @constructor 
     * @param name an (optional) name for the new thread
     * @param func a function to execute in the new thread
     */
    static new(name: string | null, func: ThreadFunc): Thread
    /**
     * This function is the same as g_thread_new() except that
     * it allows for the possibility of failure.
     * 
     * If a thread can not be created (due to resource limits),
     * `error` is set and %NULL is returned.
     * @constructor 
     * @param name an (optional) name for the new thread
     * @param func a function to execute in the new thread
     */
    static tryNew(name: string | null, func: ThreadFunc): Thread
    static errorQuark(): Quark
    /**
     * Terminates the current thread.
     * 
     * If another thread is waiting for us using g_thread_join() then the
     * waiting thread will be woken up and get `retval` as the return value
     * of g_thread_join().
     * 
     * Calling g_thread_exit() with a parameter `retval` is equivalent to
     * returning `retval` from the function `func,` as given to g_thread_new().
     * 
     * You must only call g_thread_exit() from a thread that you created
     * yourself with g_thread_new() or related APIs. You must not call
     * this function from a thread created with another threading library
     * or or from within a #GThreadPool.
     * @param retval the return value of this thread
     */
    static exit(retval: object | null): void
    /**
     * This function returns the #GThread corresponding to the
     * current thread. Note that this function does not increase
     * the reference count of the returned struct.
     * 
     * This function will return a #GThread even for threads that
     * were not created by GLib (i.e. those created by other threading
     * APIs). This may be useful for thread identification purposes
     * (i.e. comparisons) but you must not use GLib functions (such
     * as g_thread_join()) on these threads.
     */
    static self(): Thread
    /**
     * Causes the calling thread to voluntarily relinquish the CPU, so
     * that other threads can run.
     * 
     * This function is often used as a method to make busy wait less evil.
     */
    static yield(): void
}

export interface ThreadPool {

    // Own fields of GLib-2.0.GLib.ThreadPool

    /**
     * the function to execute in the threads of this pool
     * @field 
     */
    func: Func
    /**
     * the user data for the threads of this pool
     * @field 
     */
    userData: object
    /**
     * are all threads exclusive to this pool
     * @field 
     */
    exclusive: boolean

    // Owm methods of GLib-2.0.GLib.ThreadPool

    /**
     * Frees all resources allocated for `pool`.
     * 
     * If `immediate` is %TRUE, no new task is processed for `pool`.
     * Otherwise `pool` is not freed before the last task is processed.
     * Note however, that no thread of this pool is interrupted while
     * processing a task. Instead at least all still running threads
     * can finish their tasks before the `pool` is freed.
     * 
     * If `wait_` is %TRUE, this function does not return before all
     * tasks to be processed (dependent on `immediate,` whether all
     * or only the currently running) are ready.
     * Otherwise this function returns immediately.
     * 
     * After calling this function `pool` must not be used anymore.
     * @param immediate should `pool` shut down immediately?
     * @param wait should the function wait for all tasks to be finished?
     */
    free(immediate: boolean, wait: boolean): void
    /**
     * Returns the maximal number of threads for `pool`.
     */
    getMaxThreads(): number
    /**
     * Returns the number of threads currently running in `pool`.
     */
    getNumThreads(): number
    /**
     * Moves the item to the front of the queue of unprocessed
     * items, so that it will be processed next.
     * @param data an unprocessed item in the pool
     */
    moveToFront(data: object | null): boolean
    /**
     * Inserts `data` into the list of tasks to be executed by `pool`.
     * 
     * When the number of currently running threads is lower than the
     * maximal allowed number of threads, a new thread is started (or
     * reused) with the properties given to g_thread_pool_new().
     * Otherwise, `data` stays in the queue until a thread in this pool
     * finishes its previous task and processes `data`.
     * 
     * `error` can be %NULL to ignore errors, or non-%NULL to report
     * errors. An error can only occur when a new thread couldn't be
     * created. In that case `data` is simply appended to the queue of
     * work to do.
     * 
     * Before version 2.32, this function did not return a success status.
     * @param data a new task for `pool`
     */
    push(data: object | null): boolean
    /**
     * Sets the maximal allowed number of threads for `pool`.
     * A value of -1 means that the maximal number of threads
     * is unlimited. If `pool` is an exclusive thread pool, setting
     * the maximal number of threads to -1 is not allowed.
     * 
     * Setting `max_threads` to 0 means stopping all work for `pool`.
     * It is effectively frozen until `max_threads` is set to a non-zero
     * value again.
     * 
     * A thread is never terminated while calling `func,` as supplied by
     * g_thread_pool_new(). Instead the maximal number of threads only
     * has effect for the allocation of new threads in g_thread_pool_push().
     * A new thread is allocated, whenever the number of currently
     * running threads in `pool` is smaller than the maximal number.
     * 
     * `error` can be %NULL to ignore errors, or non-%NULL to report
     * errors. An error can only occur when a new thread couldn't be
     * created.
     * 
     * Before version 2.32, this function did not return a success status.
     * @param maxThreads a new maximal number of threads for `pool,`     or -1 for unlimited
     */
    setMaxThreads(maxThreads: number): boolean
    /**
     * Returns the number of tasks still unprocessed in `pool`.
     */
    unprocessed(): number
}

/**
 * The #GThreadPool struct represents a thread pool. It has three
 * public read-only members, but the underlying struct is bigger,
 * so you must not copy this struct.
 * @record 
 */
export class ThreadPool {

    // Own properties of GLib-2.0.GLib.ThreadPool

    static name: string

    // Constructors of GLib-2.0.GLib.ThreadPool

    /**
     * This function will return the maximum `interval` that a
     * thread will wait in the thread pool for new tasks before
     * being stopped.
     * 
     * If this function returns 0, threads waiting in the thread
     * pool for new work are not stopped.
     */
    static getMaxIdleTime(): number
    /**
     * Returns the maximal allowed number of unused threads.
     */
    static getMaxUnusedThreads(): number
    /**
     * Returns the number of currently unused threads.
     */
    static getNumUnusedThreads(): number
    /**
     * This function will set the maximum `interval` that a thread
     * waiting in the pool for new tasks can be idle for before
     * being stopped. This function is similar to calling
     * g_thread_pool_stop_unused_threads() on a regular timeout,
     * except this is done on a per thread basis.
     * 
     * By setting `interval` to 0, idle threads will not be stopped.
     * 
     * The default value is 15000 (15 seconds).
     * @param interval the maximum `interval` (in milliseconds)     a thread can be idle
     */
    static setMaxIdleTime(interval: number): void
    /**
     * Sets the maximal number of unused threads to `max_threads`.
     * If `max_threads` is -1, no limit is imposed on the number
     * of unused threads.
     * 
     * The default value is 2.
     * @param maxThreads maximal number of unused threads
     */
    static setMaxUnusedThreads(maxThreads: number): void
    /**
     * Stops all currently unused threads. This does not change the
     * maximal number of unused threads. This function can be used to
     * regularly stop all unused threads e.g. from g_timeout_add().
     */
    static stopUnusedThreads(): void
}

export interface TimeVal {

    // Own fields of GLib-2.0.GLib.TimeVal

    /**
     * seconds
     * @field 
     */
    tvSec: number
    /**
     * microseconds
     * @field 
     */
    tvUsec: number

    // Owm methods of GLib-2.0.GLib.TimeVal

    /**
     * Adds the given number of microseconds to `time_`. `microseconds` can
     * also be negative to decrease the value of `time_`.
     * @param microseconds number of microseconds to add to `time`
     */
    add(microseconds: number): void
    /**
     * Converts `time_` into an RFC 3339 encoded string, relative to the
     * Coordinated Universal Time (UTC). This is one of the many formats
     * allowed by ISO 8601.
     * 
     * ISO 8601 allows a large number of date/time formats, with or without
     * punctuation and optional elements. The format returned by this function
     * is a complete date and time, with optional punctuation included, the
     * UTC time zone represented as "Z", and the `tv_usec` part included if
     * and only if it is nonzero, i.e. either
     * "YYYY-MM-DDTHH:MM:SSZ" or "YYYY-MM-DDTHH:MM:SS.fffffZ".
     * 
     * This corresponds to the Internet date/time format defined by
     * [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt),
     * and to either of the two most-precise formats defined by
     * the W3C Note
     * [Date and Time Formats](http://www.w3.org/TR/NOTE-datetime-19980827).
     * Both of these documents are profiles of ISO 8601.
     * 
     * Use g_date_time_format() or g_strdup_printf() if a different
     * variation of ISO 8601 format is required.
     * 
     * If `time_` represents a date which is too large to fit into a `struct tm`,
     * %NULL will be returned. This is platform dependent. Note also that since
     * `GTimeVal` stores the number of seconds as a `glong`, on 32-bit systems it
     * is subject to the year 2038 problem. Accordingly, since GLib 2.62, this
     * function has been deprecated. Equivalent functionality is available using:
     * |[
     * GDateTime *dt = g_date_time_new_from_unix_utc (time_val);
     * iso8601_string = g_date_time_format_iso8601 (dt);
     * g_date_time_unref (dt);
     * ```
     * 
     * 
     * The return value of g_time_val_to_iso8601() has been nullable since GLib
     * 2.54; before then, GLib would crash under the same conditions.
     */
    toIso8601(): string | null
}

/**
 * Represents a precise time, with seconds and microseconds.
 * 
 * Similar to the struct timeval returned by the `gettimeofday()`
 * UNIX system call.
 * 
 * GLib is attempting to unify around the use of 64-bit integers to
 * represent microsecond-precision time. As such, this type will be
 * removed from a future version of GLib. A consequence of using `glong` for
 * `tv_sec` is that on 32-bit systems `GTimeVal` is subject to the year 2038
 * problem.
 * @record 
 */
export class TimeVal {

    // Own properties of GLib-2.0.GLib.TimeVal

    static name: string

    // Constructors of GLib-2.0.GLib.TimeVal

    /**
     * Converts a string containing an ISO 8601 encoded date and time
     * to a #GTimeVal and puts it into `time_`.
     * 
     * `iso_date` must include year, month, day, hours, minutes, and
     * seconds. It can optionally include fractions of a second and a time
     * zone indicator. (In the absence of any time zone indication, the
     * timestamp is assumed to be in local time.)
     * 
     * Any leading or trailing space in `iso_date` is ignored.
     * 
     * This function was deprecated, along with #GTimeVal itself, in GLib 2.62.
     * Equivalent functionality is available using code like:
     * |[
     * GDateTime *dt = g_date_time_new_from_iso8601 (iso8601_string, NULL);
     * gint64 time_val = g_date_time_to_unix (dt);
     * g_date_time_unref (dt);
     * ```
     * 
     * @param isoDate an ISO 8601 encoded date string
     */
    static fromIso8601(isoDate: string): [ /* returnType */ boolean, /* time */ TimeVal ]
}

export interface TimeZone {

    // Owm methods of GLib-2.0.GLib.TimeZone

    /**
     * Finds an interval within `tz` that corresponds to the given `time_,`
     * possibly adjusting `time_` if required to fit into an interval.
     * The meaning of `time_` depends on `type`.
     * 
     * This function is similar to g_time_zone_find_interval(), with the
     * difference that it always succeeds (by making the adjustments
     * described below).
     * 
     * In any of the cases where g_time_zone_find_interval() succeeds then
     * this function returns the same value, without modifying `time_`.
     * 
     * This function may, however, modify `time_` in order to deal with
     * non-existent times.  If the non-existent local `time_` of 02:30 were
     * requested on March 14th 2010 in Toronto then this function would
     * adjust `time_` to be 03:00 and return the interval containing the
     * adjusted time.
     * @param type the #GTimeType of `time_`
     * @param time a pointer to a number of seconds since January 1, 1970
     */
    adjustTime(type: TimeType, time: number): number
    /**
     * Finds an interval within `tz` that corresponds to the given `time_`.
     * The meaning of `time_` depends on `type`.
     * 
     * If `type` is %G_TIME_TYPE_UNIVERSAL then this function will always
     * succeed (since universal time is monotonic and continuous).
     * 
     * Otherwise `time_` is treated as local time.  The distinction between
     * %G_TIME_TYPE_STANDARD and %G_TIME_TYPE_DAYLIGHT is ignored except in
     * the case that the given `time_` is ambiguous.  In Toronto, for example,
     * 01:30 on November 7th 2010 occurred twice (once inside of daylight
     * savings time and the next, an hour later, outside of daylight savings
     * time).  In this case, the different value of `type` would result in a
     * different interval being returned.
     * 
     * It is still possible for this function to fail.  In Toronto, for
     * example, 02:00 on March 14th 2010 does not exist (due to the leap
     * forward to begin daylight savings time).  -1 is returned in that
     * case.
     * @param type the #GTimeType of `time_`
     * @param time a number of seconds since January 1, 1970
     */
    findInterval(type: TimeType, time: number): number
    /**
     * Determines the time zone abbreviation to be used during a particular
     * `interval` of time in the time zone `tz`.
     * 
     * For example, in Toronto this is currently "EST" during the winter
     * months and "EDT" during the summer months when daylight savings time
     * is in effect.
     * @param interval an interval within the timezone
     */
    getAbbreviation(interval: number): string
    /**
     * Get the identifier of this #GTimeZone, as passed to g_time_zone_new().
     * If the identifier passed at construction time was not recognised, `UTC` will
     * be returned. If it was %NULL, the identifier of the local timezone at
     * construction time will be returned.
     * 
     * The identifier will be returned in the same format as provided at
     * construction time: if provided as a time offset, that will be returned by
     * this function.
     */
    getIdentifier(): string
    /**
     * Determines the offset to UTC in effect during a particular `interval`
     * of time in the time zone `tz`.
     * 
     * The offset is the number of seconds that you add to UTC time to
     * arrive at local time for `tz` (ie: negative numbers for time zones
     * west of GMT, positive numbers for east).
     * @param interval an interval within the timezone
     */
    getOffset(interval: number): number
    /**
     * Determines if daylight savings time is in effect during a particular
     * `interval` of time in the time zone `tz`.
     * @param interval an interval within the timezone
     */
    isDst(interval: number): boolean
    /**
     * Increases the reference count on `tz`.
     */
    ref(): TimeZone
    /**
     * Decreases the reference count on `tz`.
     */
    unref(): void
}

/**
 * #GTimeZone is an opaque structure whose members cannot be accessed
 * directly.
 * @record 
 */
export class TimeZone {

    // Own properties of GLib-2.0.GLib.TimeZone

    static name: string

    // Constructors of GLib-2.0.GLib.TimeZone

    /**
     * A version of g_time_zone_new_identifier() which returns the UTC time zone
     * if `identifier` could not be parsed or loaded.
     * 
     * If you need to check whether `identifier` was loaded successfully, use
     * g_time_zone_new_identifier().
     * @constructor 
     * @param identifier a timezone identifier
     */
    constructor(identifier: string | null) 
    /**
     * A version of g_time_zone_new_identifier() which returns the UTC time zone
     * if `identifier` could not be parsed or loaded.
     * 
     * If you need to check whether `identifier` was loaded successfully, use
     * g_time_zone_new_identifier().
     * @constructor 
     * @param identifier a timezone identifier
     */
    static new(identifier: string | null): TimeZone
    /**
     * Creates a #GTimeZone corresponding to `identifier`. If `identifier` cannot be
     * parsed or loaded, %NULL is returned.
     * 
     * `identifier` can either be an RFC3339/ISO 8601 time offset or
     * something that would pass as a valid value for the `TZ` environment
     * variable (including %NULL).
     * 
     * In Windows, `identifier` can also be the unlocalized name of a time
     * zone for standard time, for example "Pacific Standard Time".
     * 
     * Valid RFC3339 time offsets are `"Z"` (for UTC) or
     * `"±hh:mm"`.  ISO 8601 additionally specifies
     * `"±hhmm"` and `"±hh"`.  Offsets are
     * time values to be added to Coordinated Universal Time (UTC) to get
     * the local time.
     * 
     * In UNIX, the `TZ` environment variable typically corresponds
     * to the name of a file in the zoneinfo database, an absolute path to a file
     * somewhere else, or a string in
     * "std offset [dst [offset],start[/time],end[/time]]" (POSIX) format.
     * There  are  no spaces in the specification. The name of standard
     * and daylight savings time zone must be three or more alphabetic
     * characters. Offsets are time values to be added to local time to
     * get Coordinated Universal Time (UTC) and should be
     * `"[±]hh[[:]mm[:ss]]"`.  Dates are either
     * `"Jn"` (Julian day with n between 1 and 365, leap
     * years not counted), `"n"` (zero-based Julian day
     * with n between 0 and 365) or `"Mm.w.d"` (day d
     * (0 <= d <= 6) of week w (1 <= w <= 5) of month m (1 <= m <= 12), day
     * 0 is a Sunday).  Times are in local wall clock time, the default is
     * 02:00:00.
     * 
     * In Windows, the "tzn[+|–]hh[:mm[:ss]][dzn]" format is used, but also
     * accepts POSIX format.  The Windows format uses US rules for all time
     * zones; daylight savings time is 60 minutes behind the standard time
     * with date and time of change taken from Pacific Standard Time.
     * Offsets are time values to be added to the local time to get
     * Coordinated Universal Time (UTC).
     * 
     * g_time_zone_new_local() calls this function with the value of the
     * `TZ` environment variable. This function itself is independent of
     * the value of `TZ`, but if `identifier` is %NULL then `/etc/localtime`
     * will be consulted to discover the correct time zone on UNIX and the
     * registry will be consulted or GetTimeZoneInformation() will be used
     * to get the local time zone on Windows.
     * 
     * If intervals are not available, only time zone rules from `TZ`
     * environment variable or other means, then they will be computed
     * from year 1900 to 2037.  If the maximum year for the rules is
     * available and it is greater than 2037, then it will followed
     * instead.
     * 
     * See
     * [RFC3339 §5.6](http://tools.ietf.org/html/rfc3339#section-5.6)
     * for a precise definition of valid RFC3339 time offsets
     * (the `time-offset` expansion) and ISO 8601 for the
     * full list of valid time offsets.  See
     * [The GNU C Library manual](http://www.gnu.org/s/libc/manual/html_node/TZ-Variable.html)
     * for an explanation of the possible
     * values of the `TZ` environment variable. See
     * [Microsoft Time Zone Index Values](http://msdn.microsoft.com/en-us/library/ms912391%28v=winembedded.11%29.aspx)
     * for the list of time zones on Windows.
     * 
     * You should release the return value by calling g_time_zone_unref()
     * when you are done with it.
     * @constructor 
     * @param identifier a timezone identifier
     */
    static newIdentifier(identifier: string | null): TimeZone
    /**
     * Creates a #GTimeZone corresponding to local time.  The local time
     * zone may change between invocations to this function; for example,
     * if the system administrator changes it.
     * 
     * This is equivalent to calling g_time_zone_new() with the value of
     * the `TZ` environment variable (including the possibility of %NULL).
     * 
     * You should release the return value by calling g_time_zone_unref()
     * when you are done with it.
     * @constructor 
     */
    static newLocal(): TimeZone
    /**
     * Creates a #GTimeZone corresponding to the given constant offset from UTC,
     * in seconds.
     * 
     * This is equivalent to calling g_time_zone_new() with a string in the form
     * `[+|-]hh[:mm[:ss]]`.
     * @constructor 
     * @param seconds offset to UTC, in seconds
     */
    static newOffset(seconds: number): TimeZone
    /**
     * Creates a #GTimeZone corresponding to UTC.
     * 
     * This is equivalent to calling g_time_zone_new() with a value like
     * "Z", "UTC", "+00", etc.
     * 
     * You should release the return value by calling g_time_zone_unref()
     * when you are done with it.
     * @constructor 
     */
    static newUtc(): TimeZone
}

export interface Timer {

    // Owm methods of GLib-2.0.GLib.Timer

    /**
     * Resumes a timer that has previously been stopped with
     * g_timer_stop(). g_timer_stop() must be called before using this
     * function.
     */
    continue(): void
    /**
     * Destroys a timer, freeing associated resources.
     */
    destroy(): void
    /**
     * If `timer` has been started but not stopped, obtains the time since
     * the timer was started. If `timer` has been stopped, obtains the
     * elapsed time between the time it was started and the time it was
     * stopped. The return value is the number of seconds elapsed,
     * including any fractional part. The `microseconds` out parameter is
     * essentially useless.
     * @param microseconds return location for the fractional part of seconds                elapsed, in microseconds (that is, the total number                of microseconds elapsed, modulo 1000000), or %NULL
     */
    elapsed(microseconds: number): number
    /**
     * Exposes whether the timer is currently active.
     */
    isActive(): boolean
    /**
     * This function is useless; it's fine to call g_timer_start() on an
     * already-started timer to reset the start time, so g_timer_reset()
     * serves no purpose.
     */
    reset(): void
    /**
     * Marks a start time, so that future calls to g_timer_elapsed() will
     * report the time since g_timer_start() was called. g_timer_new()
     * automatically marks the start time, so no need to call
     * g_timer_start() immediately after creating the timer.
     */
    start(): void
    /**
     * Marks an end time, so calls to g_timer_elapsed() will return the
     * difference between this end time and the start time.
     */
    stop(): void
}

/**
 * Opaque datatype that records a start time.
 * @record 
 */
export class Timer {

    // Own properties of GLib-2.0.GLib.Timer

    static name: string
}

export interface TrashStack {

    // Own fields of GLib-2.0.GLib.TrashStack

    /**
     * pointer to the previous element of the stack,
     *     gets stored in the first `sizeof (gpointer)`
     *     bytes of the element
     * @field 
     */
    next: TrashStack
}

/**
 * Each piece of memory that is pushed onto the stack
 * is cast to a GTrashStack*.
 * @record 
 */
export class TrashStack {

    // Own properties of GLib-2.0.GLib.TrashStack

    static name: string

    // Constructors of GLib-2.0.GLib.TrashStack

    /**
     * Returns the height of a #GTrashStack.
     * 
     * Note that execution of this function is of O(N) complexity
     * where N denotes the number of items on the stack.
     * @param stackP a #GTrashStack
     */
    static height(stackP: TrashStack): number
    /**
     * Returns the element at the top of a #GTrashStack
     * which may be %NULL.
     * @param stackP a #GTrashStack
     */
    static peek(stackP: TrashStack): object | null
    /**
     * Pops a piece of memory off a #GTrashStack.
     * @param stackP a #GTrashStack
     */
    static pop(stackP: TrashStack): object | null
    /**
     * Pushes a piece of memory onto a #GTrashStack.
     * @param stackP a #GTrashStack
     * @param dataP the piece of memory to push on the stack
     */
    static push(stackP: TrashStack, dataP: object): void
}

export interface Tree {

    // Owm methods of GLib-2.0.GLib.Tree

    /**
     * Removes all keys and values from the #GTree and decreases its
     * reference count by one. If keys and/or values are dynamically
     * allocated, you should either free them first or create the #GTree
     * using g_tree_new_full(). In the latter case the destroy functions
     * you supplied will be called on all keys and values before destroying
     * the #GTree.
     */
    destroy(): void
    /**
     * Gets the height of a #GTree.
     * 
     * If the #GTree contains no nodes, the height is 0.
     * If the #GTree contains only one root node the height is 1.
     * If the root node has children the height is 2, etc.
     */
    height(): number
    /**
     * Inserts a key/value pair into a #GTree.
     * 
     * Inserts a new key and value into a #GTree as g_tree_insert_node() does,
     * only this function does not return the inserted or set node.
     * @param key the key to insert
     * @param value the value corresponding to the key
     */
    insert(key: object | null, value: object | null): void
    /**
     * Inserts a key/value pair into a #GTree.
     * 
     * If the given key already exists in the #GTree its corresponding value
     * is set to the new value. If you supplied a `value_destroy_func` when
     * creating the #GTree, the old value is freed using that function. If
     * you supplied a `key_destroy_func` when creating the #GTree, the passed
     * key is freed using that function.
     * 
     * The tree is automatically 'balanced' as new key/value pairs are added,
     * so that the distance from the root to every leaf is as small as possible.
     * The cost of maintaining a balanced tree while inserting new key/value
     * result in a O(n log(n)) operation where most of the other operations
     * are O(log(n)).
     * @param key the key to insert
     * @param value the value corresponding to the key
     */
    insertNode(key: object | null, value: object | null): TreeNode
    /**
     * Gets the value corresponding to the given key. Since a #GTree is
     * automatically balanced as key/value pairs are added, key lookup
     * is O(log n) (where n is the number of key/value pairs in the tree).
     * @param key the key to look up
     */
    lookup(key: object | null): object | null
    /**
     * Looks up a key in the #GTree, returning the original key and the
     * associated value. This is useful if you need to free the memory
     * allocated for the original key, for example before calling
     * g_tree_remove().
     * @param lookupKey the key to look up
     */
    lookupExtended(lookupKey: object | null): [ /* returnType */ boolean, /* origKey */ object | null, /* value */ object | null ]
    /**
     * Gets the tree node corresponding to the given key. Since a #GTree is
     * automatically balanced as key/value pairs are added, key lookup
     * is O(log n) (where n is the number of key/value pairs in the tree).
     * @param key the key to look up
     */
    lookupNode(key: object | null): TreeNode | null
    /**
     * Gets the lower bound node corresponding to the given key,
     * or %NULL if the tree is empty or all the nodes in the tree
     * have keys that are strictly lower than the searched key.
     * 
     * The lower bound is the first node that has its key greater
     * than or equal to the searched key.
     * @param key the key to calculate the lower bound for
     */
    lowerBound(key: object | null): TreeNode | null
    /**
     * Gets the number of nodes in a #GTree.
     */
    nnodes(): number
    /**
     * Returns the first in-order node of the tree, or %NULL
     * for an empty tree.
     */
    nodeFirst(): TreeNode | null
    /**
     * Returns the last in-order node of the tree, or %NULL
     * for an empty tree.
     */
    nodeLast(): TreeNode | null
    /**
     * Increments the reference count of `tree` by one.
     * 
     * It is safe to call this function from any thread.
     */
    ref(): Tree
    /**
     * Removes a key/value pair from a #GTree.
     * 
     * If the #GTree was created using g_tree_new_full(), the key and value
     * are freed using the supplied destroy functions, otherwise you have to
     * make sure that any dynamically allocated values are freed yourself.
     * If the key does not exist in the #GTree, the function does nothing.
     * 
     * The cost of maintaining a balanced tree while removing a key/value
     * result in a O(n log(n)) operation where most of the other operations
     * are O(log(n)).
     * @param key the key to remove
     */
    remove(key: object | null): boolean
    /**
     * Removes all nodes from a #GTree and destroys their keys and values,
     * then resets the #GTree’s root to %NULL.
     */
    removeAll(): void
    /**
     * Inserts a new key and value into a #GTree as g_tree_replace_node() does,
     * only this function does not return the inserted or set node.
     * @param key the key to insert
     * @param value the value corresponding to the key
     */
    replace(key: object | null, value: object | null): void
    /**
     * Inserts a new key and value into a #GTree similar to g_tree_insert_node().
     * The difference is that if the key already exists in the #GTree, it gets
     * replaced by the new key. If you supplied a `value_destroy_func` when
     * creating the #GTree, the old value is freed using that function. If you
     * supplied a `key_destroy_func` when creating the #GTree, the old key is
     * freed using that function.
     * 
     * The tree is automatically 'balanced' as new key/value pairs are added,
     * so that the distance from the root to every leaf is as small as possible.
     * @param key the key to insert
     * @param value the value corresponding to the key
     */
    replaceNode(key: object | null, value: object | null): TreeNode
    /**
     * Removes a key and its associated value from a #GTree without calling
     * the key and value destroy functions.
     * 
     * If the key does not exist in the #GTree, the function does nothing.
     * @param key the key to remove
     */
    steal(key: object | null): boolean
    /**
     * Decrements the reference count of `tree` by one.
     * If the reference count drops to 0, all keys and values will
     * be destroyed (if destroy functions were specified) and all
     * memory allocated by `tree` will be released.
     * 
     * It is safe to call this function from any thread.
     */
    unref(): void
    /**
     * Gets the upper bound node corresponding to the given key,
     * or %NULL if the tree is empty or all the nodes in the tree
     * have keys that are lower than or equal to the searched key.
     * 
     * The upper bound is the first node that has its key strictly greater
     * than the searched key.
     * @param key the key to calculate the upper bound for
     */
    upperBound(key: object | null): TreeNode | null
}

/**
 * The GTree struct is an opaque data structure representing a
 * [balanced binary tree][glib-Balanced-Binary-Trees]. It should be
 * accessed only by using the following functions.
 * @record 
 */
export class Tree {

    // Own properties of GLib-2.0.GLib.Tree

    static name: string

    // Constructors of GLib-2.0.GLib.Tree

    /**
     * Creates a new #GTree like g_tree_new() and allows to specify functions
     * to free the memory allocated for the key and value that get called when
     * removing the entry from the #GTree.
     * @constructor 
     * @param keyCompareFunc qsort()-style comparison function
     * @param keyDestroyFunc a function to free the memory allocated for the key   used when removing the entry from the #GTree or %NULL if you don't   want to supply such a function
     */
    static newFull(keyCompareFunc: CompareDataFunc, keyDestroyFunc: DestroyNotify): Tree
}

export interface TreeNode {

    // Owm methods of GLib-2.0.GLib.TreeNode

    /**
     * Gets the key stored at a particular tree node.
     */
    key(): object | null
    /**
     * Returns the next in-order node of the tree, or %NULL
     * if the passed node was already the last one.
     */
    next(): TreeNode | null
    /**
     * Returns the previous in-order node of the tree, or %NULL
     * if the passed node was already the first one.
     */
    previous(): TreeNode | null
    /**
     * Gets the value stored at a particular tree node.
     */
    value(): object | null
}

/**
 * An opaque type which identifies a specific node in a #GTree.
 * @record 
 */
export class TreeNode {

    // Own properties of GLib-2.0.GLib.TreeNode

    static name: string
}

export interface Uri {

    // Owm methods of GLib-2.0.GLib.Uri

    /**
     * Gets `uri'`s authentication parameters, which may contain
     * `%`-encoding, depending on the flags with which `uri` was created.
     * (If `uri` was not created with %G_URI_FLAGS_HAS_AUTH_PARAMS then this will
     * be %NULL.)
     * 
     * Depending on the URI scheme, g_uri_parse_params() may be useful for
     * further parsing this information.
     */
    getAuthParams(): string | null
    /**
     * Gets `uri'`s flags set upon construction.
     */
    getFlags(): UriFlags
    /**
     * Gets `uri'`s fragment, which may contain `%`-encoding, depending on
     * the flags with which `uri` was created.
     */
    getFragment(): string | null
    /**
     * Gets `uri'`s host. This will never have `%`-encoded characters,
     * unless it is non-UTF-8 (which can only be the case if `uri` was
     * created with %G_URI_FLAGS_NON_DNS).
     * 
     * If `uri` contained an IPv6 address literal, this value will be just
     * that address, without the brackets around it that are necessary in
     * the string form of the URI. Note that in this case there may also
     * be a scope ID attached to the address. Eg, `fe80::1234%``em1` (or
     * `fe80::1234%``25em1` if the string is still encoded).
     */
    getHost(): string | null
    /**
     * Gets `uri'`s password, which may contain `%`-encoding, depending on
     * the flags with which `uri` was created. (If `uri` was not created
     * with %G_URI_FLAGS_HAS_PASSWORD then this will be %NULL.)
     */
    getPassword(): string | null
    /**
     * Gets `uri'`s path, which may contain `%`-encoding, depending on the
     * flags with which `uri` was created.
     */
    getPath(): string
    /**
     * Gets `uri'`s port.
     */
    getPort(): number
    /**
     * Gets `uri'`s query, which may contain `%`-encoding, depending on the
     * flags with which `uri` was created.
     * 
     * For queries consisting of a series of `name=value` parameters,
     * #GUriParamsIter or g_uri_parse_params() may be useful.
     */
    getQuery(): string | null
    /**
     * Gets `uri'`s scheme. Note that this will always be all-lowercase,
     * regardless of the string or strings that `uri` was created from.
     */
    getScheme(): string
    /**
     * Gets the ‘username’ component of `uri'`s userinfo, which may contain
     * `%`-encoding, depending on the flags with which `uri` was created.
     * If `uri` was not created with %G_URI_FLAGS_HAS_PASSWORD or
     * %G_URI_FLAGS_HAS_AUTH_PARAMS, this is the same as g_uri_get_userinfo().
     */
    getUser(): string | null
    /**
     * Gets `uri'`s userinfo, which may contain `%`-encoding, depending on
     * the flags with which `uri` was created.
     */
    getUserinfo(): string | null
    /**
     * Parses `uri_ref` according to `flags` and, if it is a
     * [relative URI][relative-absolute-uris], resolves it relative to `base_uri`.
     * If the result is not a valid absolute URI, it will be discarded, and an error
     * returned.
     * @param uriRef a string representing a relative or absolute URI
     * @param flags flags describing how to parse `uri_ref`
     */
    parseRelative(uriRef: string, flags: UriFlags): Uri
    /**
     * Returns a string representing `uri`.
     * 
     * This is not guaranteed to return a string which is identical to the
     * string that `uri` was parsed from. However, if the source URI was
     * syntactically correct (according to RFC 3986), and it was parsed
     * with %G_URI_FLAGS_ENCODED, then g_uri_to_string() is guaranteed to return
     * a string which is at least semantically equivalent to the source
     * URI (according to RFC 3986).
     * 
     * If `uri` might contain sensitive details, such as authentication parameters,
     * or private data in its query string, and the returned string is going to be
     * logged, then consider using g_uri_to_string_partial() to redact parts.
     */
    toString(): string
    /**
     * Returns a string representing `uri,` subject to the options in
     * `flags`. See g_uri_to_string() and #GUriHideFlags for more details.
     * @param flags flags describing what parts of `uri` to hide
     */
    toStringPartial(flags: UriHideFlags): string
}

/**
 * The #GUri type and related functions can be used to parse URIs into
 * their components, and build valid URIs from individual components.
 * 
 * Note that #GUri scope is to help manipulate URIs in various applications,
 * following [RFC 3986](https://tools.ietf.org/html/rfc3986). In particular,
 * it doesn't intend to cover web browser needs, and doesn't implement the
 * [WHATWG URL](https://url.spec.whatwg.org/) standard. No APIs are provided to
 * help prevent
 * [homograph attacks](https://en.wikipedia.org/wiki/IDN_homograph_attack), so
 * #GUri is not suitable for formatting URIs for display to the user for making
 * security-sensitive decisions.
 * 
 * ## Relative and absolute URIs # {#relative-absolute-uris}
 * 
 * As defined in [RFC 3986](https://tools.ietf.org/html/rfc3986#section-4), the
 * hierarchical nature of URIs means that they can either be ‘relative
 * references’ (sometimes referred to as ‘relative URIs’) or ‘URIs’ (for
 * clarity, ‘URIs’ are referred to in this documentation as
 * ‘absolute URIs’ — although
 * [in constrast to RFC 3986](https://tools.ietf.org/html/rfc3986#section-4.3),
 * fragment identifiers are always allowed).
 * 
 * Relative references have one or more components of the URI missing. In
 * particular, they have no scheme. Any other component, such as hostname,
 * query, etc. may be missing, apart from a path, which has to be specified (but
 * may be empty). The path may be relative, starting with `./` rather than `/`.
 * 
 * For example, a valid relative reference is `./path?query`,
 * `/?query#fragment` or `//example.com`.
 * 
 * Absolute URIs have a scheme specified. Any other components of the URI which
 * are missing are specified as explicitly unset in the URI, rather than being
 * resolved relative to a base URI using g_uri_parse_relative().
 * 
 * For example, a valid absolute URI is `file:///home/bob` or
 * `https://search.com?query=string`.
 * 
 * A #GUri instance is always an absolute URI. A string may be an absolute URI
 * or a relative reference; see the documentation for individual functions as to
 * what forms they accept.
 * 
 * ## Parsing URIs
 * 
 * The most minimalist APIs for parsing URIs are g_uri_split() and
 * g_uri_split_with_user(). These split a URI into its component
 * parts, and return the parts; the difference between the two is that
 * g_uri_split() treats the ‘userinfo’ component of the URI as a
 * single element, while g_uri_split_with_user() can (depending on the
 * #GUriFlags you pass) treat it as containing a username, password,
 * and authentication parameters. Alternatively, g_uri_split_network()
 * can be used when you are only interested in the components that are
 * needed to initiate a network connection to the service (scheme,
 * host, and port).
 * 
 * g_uri_parse() is similar to g_uri_split(), but instead of returning
 * individual strings, it returns a #GUri structure (and it requires
 * that the URI be an absolute URI).
 * 
 * g_uri_resolve_relative() and g_uri_parse_relative() allow you to
 * resolve a relative URI relative to a base URI.
 * g_uri_resolve_relative() takes two strings and returns a string,
 * and g_uri_parse_relative() takes a #GUri and a string and returns a
 * #GUri.
 * 
 * All of the parsing functions take a #GUriFlags argument describing
 * exactly how to parse the URI; see the documentation for that type
 * for more details on the specific flags that you can pass. If you
 * need to choose different flags based on the type of URI, you can
 * use g_uri_peek_scheme() on the URI string to check the scheme
 * first, and use that to decide what flags to parse it with.
 * 
 * For example, you might want to use %G_URI_PARAMS_WWW_FORM when parsing the
 * params for a web URI, so compare the result of g_uri_peek_scheme() against
 * `http` and `https`.
 * 
 * ## Building URIs
 * 
 * g_uri_join() and g_uri_join_with_user() can be used to construct
 * valid URI strings from a set of component strings. They are the
 * inverse of g_uri_split() and g_uri_split_with_user().
 * 
 * Similarly, g_uri_build() and g_uri_build_with_user() can be used to
 * construct a #GUri from a set of component strings.
 * 
 * As with the parsing functions, the building functions take a
 * #GUriFlags argument. In particular, it is important to keep in mind
 * whether the URI components you are using are already `%`-encoded. If so,
 * you must pass the %G_URI_FLAGS_ENCODED flag.
 * 
 * ## `file://` URIs
 * 
 * Note that Windows and Unix both define special rules for parsing
 * `file://` URIs (involving non-UTF-8 character sets on Unix, and the
 * interpretation of path separators on Windows). #GUri does not
 * implement these rules. Use g_filename_from_uri() and
 * g_filename_to_uri() if you want to properly convert between
 * `file://` URIs and local filenames.
 * 
 * ## URI Equality
 * 
 * Note that there is no `g_uri_equal ()` function, because comparing
 * URIs usefully requires scheme-specific knowledge that #GUri does
 * not have. #GUri can help with normalization if you use the various
 * encoded #GUriFlags as well as %G_URI_FLAGS_SCHEME_NORMALIZE however
 * it is not comprehensive.
 * For example, `data:,foo` and `data:;base64,Zm9v` resolve to the same
 * thing according to the `data:` URI specification which GLib does not
 * handle.
 * @record 
 */
export class Uri {

    // Own properties of GLib-2.0.GLib.Uri

    static name: string

    // Constructors of GLib-2.0.GLib.Uri

    /**
     * Creates a new #GUri from the given components according to `flags`.
     * 
     * See also g_uri_build_with_user(), which allows specifying the
     * components of the "userinfo" separately.
     * @param flags flags describing how to build the #GUri
     * @param scheme the URI scheme
     * @param userinfo the userinfo component, or %NULL
     * @param host the host component, or %NULL
     * @param port the port, or `-1`
     * @param path the path component
     * @param query the query component, or %NULL
     * @param fragment the fragment, or %NULL
     */
    static build(flags: UriFlags, scheme: string, userinfo: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): Uri
    /**
     * Creates a new #GUri from the given components according to `flags`
     * (%G_URI_FLAGS_HAS_PASSWORD is added unconditionally). The `flags` must be
     * coherent with the passed values, in particular use `%`-encoded values with
     * %G_URI_FLAGS_ENCODED.
     * 
     * In contrast to g_uri_build(), this allows specifying the components
     * of the ‘userinfo’ field separately. Note that `user` must be non-%NULL
     * if either `password` or `auth_params` is non-%NULL.
     * @param flags flags describing how to build the #GUri
     * @param scheme the URI scheme
     * @param user the user component of the userinfo, or %NULL
     * @param password the password component of the userinfo, or %NULL
     * @param authParams the auth params of the userinfo, or %NULL
     * @param host the host component, or %NULL
     * @param port the port, or `-1`
     * @param path the path component
     * @param query the query component, or %NULL
     * @param fragment the fragment, or %NULL
     */
    static buildWithUser(flags: UriFlags, scheme: string, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): Uri
    static errorQuark(): Quark
    /**
     * Escapes arbitrary data for use in a URI.
     * 
     * Normally all characters that are not ‘unreserved’ (i.e. ASCII
     * alphanumerical characters plus dash, dot, underscore and tilde) are
     * escaped. But if you specify characters in `reserved_chars_allowed`
     * they are not escaped. This is useful for the ‘reserved’ characters
     * in the URI specification, since those are allowed unescaped in some
     * portions of a URI.
     * 
     * Though technically incorrect, this will also allow escaping nul
     * bytes as `%``00`.
     * @param unescaped the unescaped input data.
     * @param reservedCharsAllowed a string of reserved   characters that are allowed to be used, or %NULL.
     */
    static escapeBytes(unescaped: Uint8Array, reservedCharsAllowed: string | null): string
    /**
     * Escapes a string for use in a URI.
     * 
     * Normally all characters that are not "unreserved" (i.e. ASCII
     * alphanumerical characters plus dash, dot, underscore and tilde) are
     * escaped. But if you specify characters in `reserved_chars_allowed`
     * they are not escaped. This is useful for the "reserved" characters
     * in the URI specification, since those are allowed unescaped in some
     * portions of a URI.
     * @param unescaped the unescaped input string.
     * @param reservedCharsAllowed a string of reserved   characters that are allowed to be used, or %NULL.
     * @param allowUtf8 %TRUE if the result can include UTF-8 characters.
     */
    static escapeString(unescaped: string, reservedCharsAllowed: string | null, allowUtf8: boolean): string
    /**
     * Parses `uri_string` according to `flags,` to determine whether it is a valid
     * [absolute URI][relative-absolute-uris], i.e. it does not need to be resolved
     * relative to another URI using g_uri_parse_relative().
     * 
     * If it’s not a valid URI, an error is returned explaining how it’s invalid.
     * 
     * See g_uri_split(), and the definition of #GUriFlags, for more
     * information on the effect of `flags`.
     * @param uriString a string containing an absolute URI
     * @param flags flags for parsing `uri_string`
     */
    static isValid(uriString: string, flags: UriFlags): boolean
    /**
     * Joins the given components together according to `flags` to create
     * an absolute URI string. `path` may not be %NULL (though it may be the empty
     * string).
     * 
     * When `host` is present, `path` must either be empty or begin with a slash (`/`)
     * character. When `host` is not present, `path` cannot begin with two slash
     *    characters (`//`). See
     * [RFC 3986, section 3](https://tools.ietf.org/html/rfc3986#section-3).
     * 
     * See also g_uri_join_with_user(), which allows specifying the
     * components of the ‘userinfo’ separately.
     * 
     * %G_URI_FLAGS_HAS_PASSWORD and %G_URI_FLAGS_HAS_AUTH_PARAMS are ignored if set
     * in `flags`.
     * @param flags flags describing how to build the URI string
     * @param scheme the URI scheme, or %NULL
     * @param userinfo the userinfo component, or %NULL
     * @param host the host component, or %NULL
     * @param port the port, or `-1`
     * @param path the path component
     * @param query the query component, or %NULL
     * @param fragment the fragment, or %NULL
     */
    static join(flags: UriFlags, scheme: string | null, userinfo: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): string
    /**
     * Joins the given components together according to `flags` to create
     * an absolute URI string. `path` may not be %NULL (though it may be the empty
     * string).
     * 
     * In contrast to g_uri_join(), this allows specifying the components
     * of the ‘userinfo’ separately. It otherwise behaves the same.
     * 
     * %G_URI_FLAGS_HAS_PASSWORD and %G_URI_FLAGS_HAS_AUTH_PARAMS are ignored if set
     * in `flags`.
     * @param flags flags describing how to build the URI string
     * @param scheme the URI scheme, or %NULL
     * @param user the user component of the userinfo, or %NULL
     * @param password the password component of the userinfo, or   %NULL
     * @param authParams the auth params of the userinfo, or   %NULL
     * @param host the host component, or %NULL
     * @param port the port, or `-1`
     * @param path the path component
     * @param query the query component, or %NULL
     * @param fragment the fragment, or %NULL
     */
    static joinWithUser(flags: UriFlags, scheme: string | null, user: string | null, password: string | null, authParams: string | null, host: string | null, port: number, path: string, query: string | null, fragment: string | null): string
    /**
     * Splits an URI list conforming to the text/uri-list
     * mime type defined in RFC 2483 into individual URIs,
     * discarding any comments. The URIs are not validated.
     * @param uriList an URI list
     */
    static listExtractUris(uriList: string): string[]
    /**
     * Parses `uri_string` according to `flags`. If the result is not a
     * valid [absolute URI][relative-absolute-uris], it will be discarded, and an
     * error returned.
     * @param uriString a string representing an absolute URI
     * @param flags flags describing how to parse `uri_string`
     */
    static parse(uriString: string, flags: UriFlags): Uri
    /**
     * Many URI schemes include one or more attribute/value pairs as part of the URI
     * value. This method can be used to parse them into a hash table. When an
     * attribute has multiple occurrences, the last value is the final returned
     * value. If you need to handle repeated attributes differently, use
     * #GUriParamsIter.
     * 
     * The `params` string is assumed to still be `%`-encoded, but the returned
     * values will be fully decoded. (Thus it is possible that the returned values
     * may contain `=` or `separators,` if the value was encoded in the input.)
     * Invalid `%`-encoding is treated as with the %G_URI_FLAGS_PARSE_RELAXED
     * rules for g_uri_parse(). (However, if `params` is the path or query string
     * from a #GUri that was parsed without %G_URI_FLAGS_PARSE_RELAXED and
     * %G_URI_FLAGS_ENCODED, then you already know that it does not contain any
     * invalid encoding.)
     * 
     * %G_URI_PARAMS_WWW_FORM is handled as documented for g_uri_params_iter_init().
     * 
     * If %G_URI_PARAMS_CASE_INSENSITIVE is passed to `flags,` attributes will be
     * compared case-insensitively, so a params string `attr=123&Attr=456` will only
     * return a single attribute–value pair, `Attr=456`. Case will be preserved in
     * the returned attributes.
     * 
     * If `params` cannot be parsed (for example, it contains two `separators`
     * characters in a row), then `error` is set and %NULL is returned.
     * @param params a `%`-encoded string containing `attribute=value`   parameters
     * @param length the length of `params,` or `-1` if it is nul-terminated
     * @param separators the separator byte character set between parameters. (usually   `&`, but sometimes `;` or both `&;`). Note that this function works on   bytes not characters, so it can't be used to delimit UTF-8 strings for   anything but ASCII characters. You may pass an empty set, in which case   no splitting will occur.
     * @param flags flags to modify the way the parameters are handled.
     */
    static parseParams(params: string, length: number, separators: string, flags: UriParamsFlags): HashTable
    /**
     * Gets the scheme portion of a URI string.
     * [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3) decodes the scheme
     * as:
     * |[
     * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
     * ```
     * 
     * Common schemes include `file`, `https`, `svn+ssh`, etc.
     * @param uri a valid URI.
     */
    static parseScheme(uri: string): string | null
    /**
     * Gets the scheme portion of a URI string.
     * [RFC 3986](https://tools.ietf.org/html/rfc3986#section-3) decodes the scheme
     * as:
     * |[
     * URI = scheme ":" hier-part [ "?" query ] [ "#" fragment ]
     * ```
     * 
     * Common schemes include `file`, `https`, `svn+ssh`, etc.
     * 
     * Unlike g_uri_parse_scheme(), the returned scheme is normalized to
     * all-lowercase and does not need to be freed.
     * @param uri a valid URI.
     */
    static peekScheme(uri: string): string | null
    /**
     * Parses `uri_ref` according to `flags` and, if it is a
     * [relative URI][relative-absolute-uris], resolves it relative to
     * `base_uri_string`. If the result is not a valid absolute URI, it will be
     * discarded, and an error returned.
     * 
     * (If `base_uri_string` is %NULL, this just returns `uri_ref,` or
     * %NULL if `uri_ref` is invalid or not absolute.)
     * @param baseUriString a string representing a base URI
     * @param uriRef a string representing a relative or absolute URI
     * @param flags flags describing how to parse `uri_ref`
     */
    static resolveRelative(baseUriString: string | null, uriRef: string, flags: UriFlags): string
    /**
     * Parses `uri_ref` (which can be an
     * [absolute or relative URI][relative-absolute-uris]) according to `flags,` and
     * returns the pieces. Any component that doesn't appear in `uri_ref` will be
     * returned as %NULL (but note that all URIs always have a path component,
     * though it may be the empty string).
     * 
     * If `flags` contains %G_URI_FLAGS_ENCODED, then `%`-encoded characters in
     * `uri_ref` will remain encoded in the output strings. (If not,
     * then all such characters will be decoded.) Note that decoding will
     * only work if the URI components are ASCII or UTF-8, so you will
     * need to use %G_URI_FLAGS_ENCODED if they are not.
     * 
     * Note that the %G_URI_FLAGS_HAS_PASSWORD and
     * %G_URI_FLAGS_HAS_AUTH_PARAMS `flags` are ignored by g_uri_split(),
     * since it always returns only the full userinfo; use
     * g_uri_split_with_user() if you want it split up.
     * @param uriRef a string containing a relative or absolute URI
     * @param flags flags for parsing `uri_ref`
     */
    static split(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* userinfo */ string | null, /* host */ string | null, /* port */ number, /* path */ string, /* query */ string | null, /* fragment */ string | null ]
    /**
     * Parses `uri_string` (which must be an [absolute URI][relative-absolute-uris])
     * according to `flags,` and returns the pieces relevant to connecting to a host.
     * See the documentation for g_uri_split() for more details; this is
     * mostly a wrapper around that function with simpler arguments.
     * However, it will return an error if `uri_string` is a relative URI,
     * or does not contain a hostname component.
     * @param uriString a string containing an absolute URI
     * @param flags flags for parsing `uri_string`
     */
    static splitNetwork(uriString: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* host */ string | null, /* port */ number ]
    /**
     * Parses `uri_ref` (which can be an
     * [absolute or relative URI][relative-absolute-uris]) according to `flags,` and
     * returns the pieces. Any component that doesn't appear in `uri_ref` will be
     * returned as %NULL (but note that all URIs always have a path component,
     * though it may be the empty string).
     * 
     * See g_uri_split(), and the definition of #GUriFlags, for more
     * information on the effect of `flags`. Note that `password` will only
     * be parsed out if `flags` contains %G_URI_FLAGS_HAS_PASSWORD, and
     * `auth_params` will only be parsed out if `flags` contains
     * %G_URI_FLAGS_HAS_AUTH_PARAMS.
     * @param uriRef a string containing a relative or absolute URI
     * @param flags flags for parsing `uri_ref`
     */
    static splitWithUser(uriRef: string, flags: UriFlags): [ /* returnType */ boolean, /* scheme */ string | null, /* user */ string | null, /* password */ string | null, /* authParams */ string | null, /* host */ string | null, /* port */ number, /* path */ string, /* query */ string | null, /* fragment */ string | null ]
    /**
     * Unescapes a segment of an escaped string as binary data.
     * 
     * Note that in contrast to g_uri_unescape_string(), this does allow
     * nul bytes to appear in the output.
     * 
     * If any of the characters in `illegal_characters` appears as an escaped
     * character in `escaped_string,` then that is an error and %NULL will be
     * returned. This is useful if you want to avoid for instance having a slash
     * being expanded in an escaped path element, which might confuse pathname
     * handling.
     * @param escapedString A URI-escaped string
     * @param length the length (in bytes) of `escaped_string` to escape, or `-1` if it   is nul-terminated.
     * @param illegalCharacters a string of illegal characters   not to be allowed, or %NULL.
     */
    static unescapeBytes(escapedString: string, length: number, illegalCharacters: string | null): any
    /**
     * Unescapes a segment of an escaped string.
     * 
     * If any of the characters in `illegal_characters` or the NUL
     * character appears as an escaped character in `escaped_string,` then
     * that is an error and %NULL will be returned. This is useful if you
     * want to avoid for instance having a slash being expanded in an
     * escaped path element, which might confuse pathname handling.
     * 
     * Note: `NUL` byte is not accepted in the output, in contrast to
     * g_uri_unescape_bytes().
     * @param escapedString A string, may be %NULL
     * @param escapedStringEnd Pointer to end of `escaped_string,`   may be %NULL
     * @param illegalCharacters An optional string of illegal   characters not to be allowed, may be %NULL
     */
    static unescapeSegment(escapedString: string | null, escapedStringEnd: string | null, illegalCharacters: string | null): string | null
    /**
     * Unescapes a whole escaped string.
     * 
     * If any of the characters in `illegal_characters` or the NUL
     * character appears as an escaped character in `escaped_string,` then
     * that is an error and %NULL will be returned. This is useful if you
     * want to avoid for instance having a slash being expanded in an
     * escaped path element, which might confuse pathname handling.
     * @param escapedString an escaped string to be unescaped.
     * @param illegalCharacters a string of illegal characters   not to be allowed, or %NULL.
     */
    static unescapeString(escapedString: string, illegalCharacters: string | null): string | null
}

export interface UriParamsIter {

    // Owm methods of GLib-2.0.GLib.UriParamsIter

    /**
     * Initializes an attribute/value pair iterator.
     * 
     * The iterator keeps pointers to the `params` and `separators` arguments, those
     * variables must thus outlive the iterator and not be modified during the
     * iteration.
     * 
     * If %G_URI_PARAMS_WWW_FORM is passed in `flags,` `+` characters in the param
     * string will be replaced with spaces in the output. For example, `foo=bar+baz`
     * will give attribute `foo` with value `bar baz`. This is commonly used on the
     * web (the `https` and `http` schemes only), but is deprecated in favour of
     * the equivalent of encoding spaces as `%20`.
     * 
     * Unlike with g_uri_parse_params(), %G_URI_PARAMS_CASE_INSENSITIVE has no
     * effect if passed to `flags` for g_uri_params_iter_init(). The caller is
     * responsible for doing their own case-insensitive comparisons.
     * 
     * 
     * ```c
     * GUriParamsIter iter;
     * GError *error = NULL;
     * gchar *unowned_attr, *unowned_value;
     * 
     * g_uri_params_iter_init (&iter, "foo=bar&baz=bar&Foo=frob&baz=bar2", -1, "&", G_URI_PARAMS_NONE);
     * while (g_uri_params_iter_next (&iter, &unowned_attr, &unowned_value, &error))
     *   {
     *     g_autofree gchar *attr = g_steal_pointer (&unowned_attr);
     *     g_autofree gchar *value = g_steal_pointer (&unowned_value);
     *     // do something with attr and value; this code will be called 4 times
     *     // for the params string in this example: once with attr=foo and value=bar,
     *     // then with baz/bar, then Foo/frob, then baz/bar2.
     *   }
     * if (error)
     *   // handle parsing error
     * ```
     * 
     * @param params a `%`-encoded string containing `attribute=value`   parameters
     * @param length the length of `params,` or `-1` if it is nul-terminated
     * @param separators the separator byte character set between parameters. (usually   `&`, but sometimes `;` or both `&;`). Note that this function works on   bytes not characters, so it can't be used to delimit UTF-8 strings for   anything but ASCII characters. You may pass an empty set, in which case   no splitting will occur.
     * @param flags flags to modify the way the parameters are handled.
     */
    init(params: string, length: number, separators: string, flags: UriParamsFlags): void
    /**
     * Advances `iter` and retrieves the next attribute/value. %FALSE is returned if
     * an error has occurred (in which case `error` is set), or if the end of the
     * iteration is reached (in which case `attribute` and `value` are set to %NULL
     * and the iterator becomes invalid). If %TRUE is returned,
     * g_uri_params_iter_next() may be called again to receive another
     * attribute/value pair.
     * 
     * Note that the same `attribute` may be returned multiple times, since URIs
     * allow repeated attributes.
     */
    next(): [ /* returnType */ boolean, /* attribute */ string | null, /* value */ string | null ]
}

/**
 * Many URI schemes include one or more attribute/value pairs as part of the URI
 * value. For example `scheme://server/path?query=string&is=there` has two
 * attributes – `query=string` and `is=there` – in its query part.
 * 
 * A #GUriParamsIter structure represents an iterator that can be used to
 * iterate over the attribute/value pairs of a URI query string. #GUriParamsIter
 * structures are typically allocated on the stack and then initialized with
 * g_uri_params_iter_init(). See the documentation for g_uri_params_iter_init()
 * for a usage example.
 * @record 
 */
export class UriParamsIter {

    // Own properties of GLib-2.0.GLib.UriParamsIter

    static name: string
}

export interface Variant {

    // Owm methods of GLib-2.0.GLib.Variant

    /**
     * Performs a byteswapping operation on the contents of `value`.  The
     * result is that all multi-byte numeric data contained in `value` is
     * byteswapped.  That includes 16, 32, and 64bit signed and unsigned
     * integers as well as file handles and double precision floating point
     * values.
     * 
     * This function is an identity mapping on any value that does not
     * contain multi-byte numeric data.  That include strings, booleans,
     * bytes and containers containing only these things (recursively).
     * 
     * The returned value is always in normal form and is marked as trusted.
     */
    byteswap(): Variant
    /**
     * Checks if calling g_variant_get() with `format_string` on `value` would
     * be valid from a type-compatibility standpoint.  `format_string` is
     * assumed to be a valid format string (from a syntactic standpoint).
     * 
     * If `copy_only` is %TRUE then this function additionally checks that it
     * would be safe to call g_variant_unref() on `value` immediately after
     * the call to g_variant_get() without invalidating the result.  This is
     * only possible if deep copies are made (ie: there are no pointers to
     * the data inside of the soon-to-be-freed #GVariant instance).  If this
     * check fails then a g_critical() is printed and %FALSE is returned.
     * 
     * This function is meant to be used by functions that wish to provide
     * varargs accessors to #GVariant values of uncertain values (eg:
     * g_variant_lookup() or g_menu_model_get_item_attribute()).
     * @param formatString a valid #GVariant format string
     * @param copyOnly %TRUE to ensure the format string makes deep copies
     */
    checkFormatString(formatString: string, copyOnly: boolean): boolean
    /**
     * Classifies `value` according to its top-level type.
     */
    classify(): VariantClass
    /**
     * Compares `one` and `two`.
     * 
     * The types of `one` and `two` are #gconstpointer only to allow use of
     * this function with #GTree, #GPtrArray, etc.  They must each be a
     * #GVariant.
     * 
     * Comparison is only defined for basic types (ie: booleans, numbers,
     * strings).  For booleans, %FALSE is less than %TRUE.  Numbers are
     * ordered in the usual way.  Strings are in ASCII lexographical order.
     * 
     * It is a programmer error to attempt to compare container values or
     * two values that have types that are not exactly equal.  For example,
     * you cannot compare a 32-bit signed integer with a 32-bit unsigned
     * integer.  Also note that this function is not particularly
     * well-behaved when it comes to comparison of doubles; in particular,
     * the handling of incomparable values (ie: NaN) is undefined.
     * 
     * If you only require an equality comparison, g_variant_equal() is more
     * general.
     * @param two a #GVariant instance of the same type
     */
    compare(two: Variant): number
    /**
     * Similar to g_variant_get_bytestring() except that instead of
     * returning a constant string, the string is duplicated.
     * 
     * The return value must be freed using g_free().
     */
    dupBytestring(): Uint8Array
    /**
     * Gets the contents of an array of array of bytes #GVariant.  This call
     * makes a deep copy; the return result should be released with
     * g_strfreev().
     * 
     * If `length` is non-%NULL then the number of elements in the result is
     * stored there.  In any case, the resulting array will be
     * %NULL-terminated.
     * 
     * For an empty array, `length` will be set to 0 and a pointer to a
     * %NULL pointer will be returned.
     */
    dupBytestringArray(): string[]
    /**
     * Gets the contents of an array of object paths #GVariant.  This call
     * makes a deep copy; the return result should be released with
     * g_strfreev().
     * 
     * If `length` is non-%NULL then the number of elements in the result
     * is stored there.  In any case, the resulting array will be
     * %NULL-terminated.
     * 
     * For an empty array, `length` will be set to 0 and a pointer to a
     * %NULL pointer will be returned.
     */
    dupObjv(): string[]
    /**
     * Similar to g_variant_get_string() except that instead of returning
     * a constant string, the string is duplicated.
     * 
     * The string will always be UTF-8 encoded.
     * 
     * The return value must be freed using g_free().
     */
    dupString(): [ /* returnType */ string, /* length */ number ]
    /**
     * Gets the contents of an array of strings #GVariant.  This call
     * makes a deep copy; the return result should be released with
     * g_strfreev().
     * 
     * If `length` is non-%NULL then the number of elements in the result
     * is stored there.  In any case, the resulting array will be
     * %NULL-terminated.
     * 
     * For an empty array, `length` will be set to 0 and a pointer to a
     * %NULL pointer will be returned.
     */
    dupStrv(): string[]
    /**
     * Checks if `one` and `two` have the same type and value.
     * 
     * The types of `one` and `two` are #gconstpointer only to allow use of
     * this function with #GHashTable.  They must each be a #GVariant.
     * @param two a #GVariant instance
     */
    equal(two: Variant): boolean
    /**
     * Returns the boolean value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_BOOLEAN.
     */
    getBoolean(): boolean
    /**
     * Returns the byte value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_BYTE.
     */
    getByte(): number
    /**
     * Returns the string value of a #GVariant instance with an
     * array-of-bytes type.  The string has no particular encoding.
     * 
     * If the array does not end with a nul terminator character, the empty
     * string is returned.  For this reason, you can always trust that a
     * non-%NULL nul-terminated string will be returned by this function.
     * 
     * If the array contains a nul terminator character somewhere other than
     * the last byte then the returned string is the string, up to the first
     * such nul character.
     * 
     * g_variant_get_fixed_array() should be used instead if the array contains
     * arbitrary data that could not be nul-terminated or could contain nul bytes.
     * 
     * It is an error to call this function with a `value` that is not an
     * array of bytes.
     * 
     * The return value remains valid as long as `value` exists.
     */
    getBytestring(): Uint8Array
    /**
     * Gets the contents of an array of array of bytes #GVariant.  This call
     * makes a shallow copy; the return result should be released with
     * g_free(), but the individual strings must not be modified.
     * 
     * If `length` is non-%NULL then the number of elements in the result is
     * stored there.  In any case, the resulting array will be
     * %NULL-terminated.
     * 
     * For an empty array, `length` will be set to 0 and a pointer to a
     * %NULL pointer will be returned.
     */
    getBytestringArray(): string[]
    /**
     * Reads a child item out of a container #GVariant instance.  This
     * includes variants, maybes, arrays, tuples and dictionary
     * entries.  It is an error to call this function on any other type of
     * #GVariant.
     * 
     * It is an error if `index_` is greater than the number of child items
     * in the container.  See g_variant_n_children().
     * 
     * The returned value is never floating.  You should free it with
     * g_variant_unref() when you're done with it.
     * 
     * Note that values borrowed from the returned child are not guaranteed to
     * still be valid after the child is freed even if you still hold a reference
     * to `value,` if `value` has not been serialized at the time this function is
     * called. To avoid this, you can serialize `value` by calling
     * g_variant_get_data() and optionally ignoring the return value.
     * 
     * There may be implementation specific restrictions on deeply nested values,
     * which would result in the unit tuple being returned as the child value,
     * instead of further nested children. #GVariant is guaranteed to handle
     * nesting up to at least 64 levels.
     * 
     * This function is O(1).
     * @param index the index of the child to fetch
     */
    getChildValue(index: number): Variant
    /**
     * Returns a pointer to the serialized form of a #GVariant instance.
     * The returned data may not be in fully-normalised form if read from an
     * untrusted source.  The returned data must not be freed; it remains
     * valid for as long as `value` exists.
     * 
     * If `value` is a fixed-sized value that was deserialized from a
     * corrupted serialized container then %NULL may be returned.  In this
     * case, the proper thing to do is typically to use the appropriate
     * number of nul bytes in place of `value`.  If `value` is not fixed-sized
     * then %NULL is never returned.
     * 
     * In the case that `value` is already in serialized form, this function
     * is O(1).  If the value is not already in serialized form,
     * serialization occurs implicitly and is approximately O(n) in the size
     * of the result.
     * 
     * To deserialize the data returned by this function, in addition to the
     * serialized data, you must know the type of the #GVariant, and (if the
     * machine might be different) the endianness of the machine that stored
     * it. As a result, file formats or network messages that incorporate
     * serialized #GVariants must include this information either
     * implicitly (for instance "the file always contains a
     * %G_VARIANT_TYPE_VARIANT and it is always in little-endian order") or
     * explicitly (by storing the type and/or endianness in addition to the
     * serialized data).
     */
    getData(): object | null
    /**
     * Returns a pointer to the serialized form of a #GVariant instance.
     * The semantics of this function are exactly the same as
     * g_variant_get_data(), except that the returned #GBytes holds
     * a reference to the variant data.
     */
    getDataAsBytes(): any
    /**
     * Returns the double precision floating point value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_DOUBLE.
     */
    getDouble(): number
    /**
     * Returns the 32-bit signed integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type other
     * than %G_VARIANT_TYPE_HANDLE.
     * 
     * By convention, handles are indexes into an array of file descriptors
     * that are sent alongside a D-Bus message.  If you're not interacting
     * with D-Bus, you probably don't need them.
     */
    getHandle(): number
    /**
     * Returns the 16-bit signed integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_INT16.
     */
    getInt16(): number
    /**
     * Returns the 32-bit signed integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_INT32.
     */
    getInt32(): number
    /**
     * Returns the 64-bit signed integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_INT64.
     */
    getInt64(): number
    /**
     * Given a maybe-typed #GVariant instance, extract its value.  If the
     * value is Nothing, then this function returns %NULL.
     */
    getMaybe(): Variant | null
    /**
     * Gets a #GVariant instance that has the same value as `value` and is
     * trusted to be in normal form.
     * 
     * If `value` is already trusted to be in normal form then a new
     * reference to `value` is returned.
     * 
     * If `value` is not already trusted, then it is scanned to check if it
     * is in normal form.  If it is found to be in normal form then it is
     * marked as trusted and a new reference to it is returned.
     * 
     * If `value` is found not to be in normal form then a new trusted
     * #GVariant is created with the same value as `value`.
     * 
     * It makes sense to call this function if you've received #GVariant
     * data from untrusted sources and you want to ensure your serialized
     * output is definitely in normal form.
     * 
     * If `value` is already in normal form, a new reference will be returned
     * (which will be floating if `value` is floating). If it is not in normal form,
     * the newly created #GVariant will be returned with a single non-floating
     * reference. Typically, g_variant_take_ref() should be called on the return
     * value from this function to guarantee ownership of a single non-floating
     * reference to it.
     */
    getNormalForm(): Variant
    /**
     * Gets the contents of an array of object paths #GVariant.  This call
     * makes a shallow copy; the return result should be released with
     * g_free(), but the individual strings must not be modified.
     * 
     * If `length` is non-%NULL then the number of elements in the result
     * is stored there.  In any case, the resulting array will be
     * %NULL-terminated.
     * 
     * For an empty array, `length` will be set to 0 and a pointer to a
     * %NULL pointer will be returned.
     */
    getObjv(): string[]
    /**
     * Determines the number of bytes that would be required to store `value`
     * with g_variant_store().
     * 
     * If `value` has a fixed-sized type then this function always returned
     * that fixed size.
     * 
     * In the case that `value` is already in serialized form or the size has
     * already been calculated (ie: this function has been called before)
     * then this function is O(1).  Otherwise, the size is calculated, an
     * operation which is approximately O(n) in the number of values
     * involved.
     */
    getSize(): number
    /**
     * Returns the string value of a #GVariant instance with a string
     * type.  This includes the types %G_VARIANT_TYPE_STRING,
     * %G_VARIANT_TYPE_OBJECT_PATH and %G_VARIANT_TYPE_SIGNATURE.
     * 
     * The string will always be UTF-8 encoded, will never be %NULL, and will never
     * contain nul bytes.
     * 
     * If `length` is non-%NULL then the length of the string (in bytes) is
     * returned there.  For trusted values, this information is already
     * known.  Untrusted values will be validated and, if valid, a strlen() will be
     * performed. If invalid, a default value will be returned — for
     * %G_VARIANT_TYPE_OBJECT_PATH, this is `"/"`, and for other types it is the
     * empty string.
     * 
     * It is an error to call this function with a `value` of any type
     * other than those three.
     * 
     * The return value remains valid as long as `value` exists.
     */
    getString(): [ /* returnType */ string, /* length */ number ]
    /**
     * Gets the contents of an array of strings #GVariant.  This call
     * makes a shallow copy; the return result should be released with
     * g_free(), but the individual strings must not be modified.
     * 
     * If `length` is non-%NULL then the number of elements in the result
     * is stored there.  In any case, the resulting array will be
     * %NULL-terminated.
     * 
     * For an empty array, `length` will be set to 0 and a pointer to a
     * %NULL pointer will be returned.
     */
    getStrv(): string[]
    /**
     * Determines the type of `value`.
     * 
     * The return value is valid for the lifetime of `value` and must not
     * be freed.
     */
    getType(): VariantType
    /**
     * Returns the type string of `value`.  Unlike the result of calling
     * g_variant_type_peek_string(), this string is nul-terminated.  This
     * string belongs to #GVariant and must not be freed.
     */
    getTypeString(): string
    /**
     * Returns the 16-bit unsigned integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_UINT16.
     */
    getUint16(): number
    /**
     * Returns the 32-bit unsigned integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_UINT32.
     */
    getUint32(): number
    /**
     * Returns the 64-bit unsigned integer value of `value`.
     * 
     * It is an error to call this function with a `value` of any type
     * other than %G_VARIANT_TYPE_UINT64.
     */
    getUint64(): number
    /**
     * Unboxes `value`.  The result is the #GVariant instance that was
     * contained in `value`.
     */
    getVariant(): Variant
    /**
     * Generates a hash value for a #GVariant instance.
     * 
     * The output of this function is guaranteed to be the same for a given
     * value only per-process.  It may change between different processor
     * architectures or even different versions of GLib.  Do not use this
     * function as a basis for building protocols or file formats.
     * 
     * The type of `value` is #gconstpointer only to allow use of this
     * function with #GHashTable.  `value` must be a #GVariant.
     */
    hash(): number
    /**
     * Checks if `value` is a container.
     */
    isContainer(): boolean
    /**
     * Checks whether `value` has a floating reference count.
     * 
     * This function should only ever be used to assert that a given variant
     * is or is not floating, or for debug purposes. To acquire a reference
     * to a variant that might be floating, always use g_variant_ref_sink()
     * or g_variant_take_ref().
     * 
     * See g_variant_ref_sink() for more information about floating reference
     * counts.
     */
    isFloating(): boolean
    /**
     * Checks if `value` is in normal form.
     * 
     * The main reason to do this is to detect if a given chunk of
     * serialized data is in normal form: load the data into a #GVariant
     * using g_variant_new_from_data() and then use this function to
     * check.
     * 
     * If `value` is found to be in normal form then it will be marked as
     * being trusted.  If the value was already marked as being trusted then
     * this function will immediately return %TRUE.
     * 
     * There may be implementation specific restrictions on deeply nested values.
     * GVariant is guaranteed to handle nesting up to at least 64 levels.
     */
    isNormalForm(): boolean
    /**
     * Checks if a value has a type matching the provided type.
     * @param type a #GVariantType
     */
    isOfType(type: VariantType): boolean
    /**
     * Looks up a value in a dictionary #GVariant.
     * 
     * This function works with dictionaries of the type a{s*} (and equally
     * well with type a{o*}, but we only further discuss the string case
     * for sake of clarity).
     * 
     * In the event that `dictionary` has the type a{sv}, the `expected_type`
     * string specifies what type of value is expected to be inside of the
     * variant. If the value inside the variant has a different type then
     * %NULL is returned. In the event that `dictionary` has a value type other
     * than v then `expected_type` must directly match the value type and it is
     * used to unpack the value directly or an error occurs.
     * 
     * In either case, if `key` is not found in `dictionary,` %NULL is returned.
     * 
     * If the key is found and the value has the correct type, it is
     * returned.  If `expected_type` was specified then any non-%NULL return
     * value will have this type.
     * 
     * This function is currently implemented with a linear scan.  If you
     * plan to do many lookups then #GVariantDict may be more efficient.
     * @param key the key to look up in the dictionary
     * @param expectedType a #GVariantType, or %NULL
     */
    lookupValue(key: string, expectedType: VariantType | null): Variant
    /**
     * Determines the number of children in a container #GVariant instance.
     * This includes variants, maybes, arrays, tuples and dictionary
     * entries.  It is an error to call this function on any other type of
     * #GVariant.
     * 
     * For variants, the return value is always 1.  For values with maybe
     * types, it is always zero or one.  For arrays, it is the length of the
     * array.  For tuples it is the number of tuple items (which depends
     * only on the type).  For dictionary entries, it is always 2
     * 
     * This function is O(1).
     */
    nChildren(): number
    /**
     * Pretty-prints `value` in the format understood by g_variant_parse().
     * 
     * The format is described [here][gvariant-text].
     * 
     * If `type_annotate` is %TRUE, then type information is included in
     * the output.
     * @param typeAnnotate %TRUE if type information should be included in                 the output
     */
    print(typeAnnotate: boolean): string
    /**
     * Increases the reference count of `value`.
     */
    ref(): Variant
    /**
     * #GVariant uses a floating reference count system.  All functions with
     * names starting with `g_variant_new_` return floating
     * references.
     * 
     * Calling g_variant_ref_sink() on a #GVariant with a floating reference
     * will convert the floating reference into a full reference.  Calling
     * g_variant_ref_sink() on a non-floating #GVariant results in an
     * additional normal reference being added.
     * 
     * In other words, if the `value` is floating, then this call "assumes
     * ownership" of the floating reference, converting it to a normal
     * reference.  If the `value` is not floating, then this call adds a
     * new normal reference increasing the reference count by one.
     * 
     * All calls that result in a #GVariant instance being inserted into a
     * container will call g_variant_ref_sink() on the instance.  This means
     * that if the value was just created (and has only its floating
     * reference) then the container will assume sole ownership of the value
     * at that point and the caller will not need to unreference it.  This
     * makes certain common styles of programming much easier while still
     * maintaining normal refcounting semantics in situations where values
     * are not floating.
     */
    refSink(): Variant
    /**
     * Stores the serialized form of `value` at `data`.  `data` should be
     * large enough.  See g_variant_get_size().
     * 
     * The stored data is in machine native byte order but may not be in
     * fully-normalised form if read from an untrusted source.  See
     * g_variant_get_normal_form() for a solution.
     * 
     * As with g_variant_get_data(), to be able to deserialize the
     * serialized variant successfully, its type and (if the destination
     * machine might be different) its endianness must also be available.
     * 
     * This function is approximately O(n) in the size of `data`.
     * @param data the location to store the serialized data at
     */
    store(data: object): void
    /**
     * If `value` is floating, sink it.  Otherwise, do nothing.
     * 
     * Typically you want to use g_variant_ref_sink() in order to
     * automatically do the correct thing with respect to floating or
     * non-floating references, but there is one specific scenario where
     * this function is helpful.
     * 
     * The situation where this function is helpful is when creating an API
     * that allows the user to provide a callback function that returns a
     * #GVariant.  We certainly want to allow the user the flexibility to
     * return a non-floating reference from this callback (for the case
     * where the value that is being returned already exists).
     * 
     * At the same time, the style of the #GVariant API makes it likely that
     * for newly-created #GVariant instances, the user can be saved some
     * typing if they are allowed to return a #GVariant with a floating
     * reference.
     * 
     * Using this function on the return value of the user's callback allows
     * the user to do whichever is more convenient for them.  The caller
     * will always receives exactly one full reference to the value: either
     * the one that was returned in the first place, or a floating reference
     * that has been converted to a full reference.
     * 
     * This function has an odd interaction when combined with
     * g_variant_ref_sink() running at the same time in another thread on
     * the same #GVariant instance.  If g_variant_ref_sink() runs first then
     * the result will be that the floating reference is converted to a hard
     * reference.  If g_variant_take_ref() runs first then the result will
     * be that the floating reference is converted to a hard reference and
     * an additional reference on top of that one is added.  It is best to
     * avoid this situation.
     */
    takeRef(): Variant
    /**
     * Decreases the reference count of `value`.  When its reference count
     * drops to 0, the memory used by the variant is freed.
     */
    unref(): void
}

/**
 * #GVariant is a variant datatype; it can contain one or more values
 * along with information about the type of the values.
 * 
 * A #GVariant may contain simple types, like an integer, or a boolean value;
 * or complex types, like an array of two strings, or a dictionary of key
 * value pairs. A #GVariant is also immutable: once it's been created neither
 * its type nor its content can be modified further.
 * 
 * GVariant is useful whenever data needs to be serialized, for example when
 * sending method parameters in D-Bus, or when saving settings using GSettings.
 * 
 * When creating a new #GVariant, you pass the data you want to store in it
 * along with a string representing the type of data you wish to pass to it.
 * 
 * For instance, if you want to create a #GVariant holding an integer value you
 * can use:
 * 
 * 
 * ```c
 *   GVariant *v = g_variant_new ("u", 40);
 * ```
 * 
 * 
 * The string "u" in the first argument tells #GVariant that the data passed to
 * the constructor (40) is going to be an unsigned integer.
 * 
 * More advanced examples of #GVariant in use can be found in documentation for
 * [GVariant format strings][gvariant-format-strings-pointers].
 * 
 * The range of possible values is determined by the type.
 * 
 * The type system used by #GVariant is #GVariantType.
 * 
 * #GVariant instances always have a type and a value (which are given
 * at construction time).  The type and value of a #GVariant instance
 * can never change other than by the #GVariant itself being
 * destroyed.  A #GVariant cannot contain a pointer.
 * 
 * #GVariant is reference counted using g_variant_ref() and
 * g_variant_unref().  #GVariant also has floating reference counts --
 * see g_variant_ref_sink().
 * 
 * #GVariant is completely threadsafe.  A #GVariant instance can be
 * concurrently accessed in any way from any number of threads without
 * problems.
 * 
 * #GVariant is heavily optimised for dealing with data in serialized
 * form.  It works particularly well with data located in memory-mapped
 * files.  It can perform nearly all deserialization operations in a
 * small constant time, usually touching only a single memory page.
 * Serialized #GVariant data can also be sent over the network.
 * 
 * #GVariant is largely compatible with D-Bus.  Almost all types of
 * #GVariant instances can be sent over D-Bus.  See #GVariantType for
 * exceptions.  (However, #GVariant's serialization format is not the same
 * as the serialization format of a D-Bus message body: use #GDBusMessage,
 * in the gio library, for those.)
 * 
 * For space-efficiency, the #GVariant serialization format does not
 * automatically include the variant's length, type or endianness,
 * which must either be implied from context (such as knowledge that a
 * particular file format always contains a little-endian
 * %G_VARIANT_TYPE_VARIANT which occupies the whole length of the file)
 * or supplied out-of-band (for instance, a length, type and/or endianness
 * indicator could be placed at the beginning of a file, network message
 * or network stream).
 * 
 * A #GVariant's size is limited mainly by any lower level operating
 * system constraints, such as the number of bits in #gsize.  For
 * example, it is reasonable to have a 2GB file mapped into memory
 * with #GMappedFile, and call g_variant_new_from_data() on it.
 * 
 * For convenience to C programmers, #GVariant features powerful
 * varargs-based value construction and destruction.  This feature is
 * designed to be embedded in other libraries.
 * 
 * There is a Python-inspired text language for describing #GVariant
 * values.  #GVariant includes a printer for this language and a parser
 * with type inferencing.
 * 
 * ## Memory Use
 * 
 * #GVariant tries to be quite efficient with respect to memory use.
 * This section gives a rough idea of how much memory is used by the
 * current implementation.  The information here is subject to change
 * in the future.
 * 
 * The memory allocated by #GVariant can be grouped into 4 broad
 * purposes: memory for serialized data, memory for the type
 * information cache, buffer management memory and memory for the
 * #GVariant structure itself.
 * 
 * ## Serialized Data Memory
 * 
 * This is the memory that is used for storing GVariant data in
 * serialized form.  This is what would be sent over the network or
 * what would end up on disk, not counting any indicator of the
 * endianness, or of the length or type of the top-level variant.
 * 
 * The amount of memory required to store a boolean is 1 byte. 16,
 * 32 and 64 bit integers and double precision floating point numbers
 * use their "natural" size.  Strings (including object path and
 * signature strings) are stored with a nul terminator, and as such
 * use the length of the string plus 1 byte.
 * 
 * Maybe types use no space at all to represent the null value and
 * use the same amount of space (sometimes plus one byte) as the
 * equivalent non-maybe-typed value to represent the non-null case.
 * 
 * Arrays use the amount of space required to store each of their
 * members, concatenated.  Additionally, if the items stored in an
 * array are not of a fixed-size (ie: strings, other arrays, etc)
 * then an additional framing offset is stored for each item.  The
 * size of this offset is either 1, 2 or 4 bytes depending on the
 * overall size of the container.  Additionally, extra padding bytes
 * are added as required for alignment of child values.
 * 
 * Tuples (including dictionary entries) use the amount of space
 * required to store each of their members, concatenated, plus one
 * framing offset (as per arrays) for each non-fixed-sized item in
 * the tuple, except for the last one.  Additionally, extra padding
 * bytes are added as required for alignment of child values.
 * 
 * Variants use the same amount of space as the item inside of the
 * variant, plus 1 byte, plus the length of the type string for the
 * item inside the variant.
 * 
 * As an example, consider a dictionary mapping strings to variants.
 * In the case that the dictionary is empty, 0 bytes are required for
 * the serialization.
 * 
 * If we add an item "width" that maps to the int32 value of 500 then
 * we will use 4 byte to store the int32 (so 6 for the variant
 * containing it) and 6 bytes for the string.  The variant must be
 * aligned to 8 after the 6 bytes of the string, so that's 2 extra
 * bytes.  6 (string) + 2 (padding) + 6 (variant) is 14 bytes used
 * for the dictionary entry.  An additional 1 byte is added to the
 * array as a framing offset making a total of 15 bytes.
 * 
 * If we add another entry, "title" that maps to a nullable string
 * that happens to have a value of null, then we use 0 bytes for the
 * null value (and 3 bytes for the variant to contain it along with
 * its type string) plus 6 bytes for the string.  Again, we need 2
 * padding bytes.  That makes a total of 6 + 2 + 3 = 11 bytes.
 * 
 * We now require extra padding between the two items in the array.
 * After the 14 bytes of the first item, that's 2 bytes required.
 * We now require 2 framing offsets for an extra two
 * bytes. 14 + 2 + 11 + 2 = 29 bytes to encode the entire two-item
 * dictionary.
 * 
 * ## Type Information Cache
 * 
 * For each GVariant type that currently exists in the program a type
 * information structure is kept in the type information cache.  The
 * type information structure is required for rapid deserialization.
 * 
 * Continuing with the above example, if a #GVariant exists with the
 * type "a{sv}" then a type information struct will exist for
 * "a{sv}", "{sv}", "s", and "v".  Multiple uses of the same type
 * will share the same type information.  Additionally, all
 * single-digit types are stored in read-only static memory and do
 * not contribute to the writable memory footprint of a program using
 * #GVariant.
 * 
 * Aside from the type information structures stored in read-only
 * memory, there are two forms of type information.  One is used for
 * container types where there is a single element type: arrays and
 * maybe types.  The other is used for container types where there
 * are multiple element types: tuples and dictionary entries.
 * 
 * Array type info structures are 6 * sizeof (void *), plus the
 * memory required to store the type string itself.  This means that
 * on 32-bit systems, the cache entry for "a{sv}" would require 30
 * bytes of memory (plus malloc overhead).
 * 
 * Tuple type info structures are 6 * sizeof (void *), plus 4 *
 * sizeof (void *) for each item in the tuple, plus the memory
 * required to store the type string itself.  A 2-item tuple, for
 * example, would have a type information structure that consumed
 * writable memory in the size of 14 * sizeof (void *) (plus type
 * string)  This means that on 32-bit systems, the cache entry for
 * "{sv}" would require 61 bytes of memory (plus malloc overhead).
 * 
 * This means that in total, for our "a{sv}" example, 91 bytes of
 * type information would be allocated.
 * 
 * The type information cache, additionally, uses a #GHashTable to
 * store and look up the cached items and stores a pointer to this
 * hash table in static storage.  The hash table is freed when there
 * are zero items in the type cache.
 * 
 * Although these sizes may seem large it is important to remember
 * that a program will probably only have a very small number of
 * different types of values in it and that only one type information
 * structure is required for many different values of the same type.
 * 
 * ## Buffer Management Memory
 * 
 * #GVariant uses an internal buffer management structure to deal
 * with the various different possible sources of serialized data
 * that it uses.  The buffer is responsible for ensuring that the
 * correct call is made when the data is no longer in use by
 * #GVariant.  This may involve a g_free() or a g_slice_free() or
 * even g_mapped_file_unref().
 * 
 * One buffer management structure is used for each chunk of
 * serialized data.  The size of the buffer management structure
 * is 4 * (void *).  On 32-bit systems, that's 16 bytes.
 * 
 * ## GVariant structure
 * 
 * The size of a #GVariant structure is 6 * (void *).  On 32-bit
 * systems, that's 24 bytes.
 * 
 * #GVariant structures only exist if they are explicitly created
 * with API calls.  For example, if a #GVariant is constructed out of
 * serialized data for the example given above (with the dictionary)
 * then although there are 9 individual values that comprise the
 * entire dictionary (two keys, two values, two variants containing
 * the values, two dictionary entries, plus the dictionary itself),
 * only 1 #GVariant instance exists -- the one referring to the
 * dictionary.
 * 
 * If calls are made to start accessing the other values then
 * #GVariant instances will exist for those values only for as long
 * as they are in use (ie: until you call g_variant_unref()).  The
 * type information is shared.  The serialized data and the buffer
 * management structure for that serialized data is shared by the
 * child.
 * 
 * ## Summary
 * 
 * To put the entire example together, for our dictionary mapping
 * strings to variants (with two entries, as given above), we are
 * using 91 bytes of memory for type information, 29 bytes of memory
 * for the serialized data, 16 bytes for buffer management and 24
 * bytes for the #GVariant instance, or a total of 160 bytes, plus
 * malloc overhead.  If we were to use g_variant_get_child_value() to
 * access the two dictionary entries, we would use an additional 48
 * bytes.  If we were to have other dictionaries of the same type, we
 * would use more memory for the serialized data and buffer
 * management for those dictionaries, but the type information would
 * be shared.
 * @record 
 */
export class Variant {

    // Own properties of GLib-2.0.GLib.Variant

    static name: string

    // Constructors of GLib-2.0.GLib.Variant

    /**
     * Creates a new #GVariant array from `children`.
     * 
     * `child_type` must be non-%NULL if `n_children` is zero.  Otherwise, the
     * child type is determined by inspecting the first element of the
     * `children` array.  If `child_type` is non-%NULL then it must be a
     * definite type.
     * 
     * The items of the array are taken from the `children` array.  No entry
     * in the `children` array may be %NULL.
     * 
     * All items in the array must have the same type, which must be the
     * same as `child_type,` if given.
     * 
     * If the `children` are floating references (see g_variant_ref_sink()), the
     * new instance takes ownership of them as if via g_variant_ref_sink().
     * @constructor 
     * @param childType the element type of the new array
     * @param children an array of            #GVariant pointers, the children
     */
    static newArray(childType: VariantType | null, children: Variant[] | null): Variant
    /**
     * Creates a new boolean #GVariant instance -- either %TRUE or %FALSE.
     * @constructor 
     * @param value a #gboolean value
     */
    static newBoolean(value: boolean): Variant
    /**
     * Creates a new byte #GVariant instance.
     * @constructor 
     * @param value a #guint8 value
     */
    static newByte(value: number): Variant
    /**
     * Creates an array-of-bytes #GVariant with the contents of `string`.
     * This function is just like g_variant_new_string() except that the
     * string need not be valid UTF-8.
     * 
     * The nul terminator character at the end of the string is stored in
     * the array.
     * @constructor 
     * @param string a normal          nul-terminated string in no particular encoding
     */
    static newBytestring(string: Uint8Array): Variant
    /**
     * Constructs an array of bytestring #GVariant from the given array of
     * strings.
     * 
     * If `length` is -1 then `strv` is %NULL-terminated.
     * @constructor 
     * @param strv an array of strings
     */
    static newBytestringArray(strv: string[]): Variant
    /**
     * Creates a new dictionary entry #GVariant. `key` and `value` must be
     * non-%NULL. `key` must be a value of a basic type (ie: not a container).
     * 
     * If the `key` or `value` are floating references (see g_variant_ref_sink()),
     * the new instance takes ownership of them as if via g_variant_ref_sink().
     * @constructor 
     * @param key a basic #GVariant, the key
     * @param value a #GVariant, the value
     */
    static newDictEntry(key: Variant, value: Variant): Variant
    /**
     * Creates a new double #GVariant instance.
     * @constructor 
     * @param value a #gdouble floating point value
     */
    static newDouble(value: number): Variant
    /**
     * Constructs a new array #GVariant instance, where the elements are
     * of `element_type` type.
     * 
     * `elements` must be an array with fixed-sized elements.  Numeric types are
     * fixed-size as are tuples containing only other fixed-sized types.
     * 
     * `element_size` must be the size of a single element in the array.
     * For example, if calling this function for an array of 32-bit integers,
     * you might say sizeof(gint32). This value isn't used except for the purpose
     * of a double-check that the form of the serialized data matches the caller's
     * expectation.
     * 
     * `n_elements` must be the length of the `elements` array.
     * @constructor 
     * @param elementType the #GVariantType of each element
     * @param elements a pointer to the fixed array of contiguous elements
     * @param nElements the number of elements
     * @param elementSize the size of each element
     */
    static newFixedArray(elementType: VariantType, elements: object | null, nElements: number, elementSize: number): Variant
    /**
     * Constructs a new serialized-mode #GVariant instance.  This is the
     * inner interface for creation of new serialized values that gets
     * called from various functions in gvariant.c.
     * 
     * A reference is taken on `bytes`.
     * 
     * The data in `bytes` must be aligned appropriately for the `type` being loaded.
     * Otherwise this function will internally create a copy of the memory (since
     * GLib 2.60) or (in older versions) fail and exit the process.
     * @constructor 
     * @param type a #GVariantType
     * @param bytes a #GBytes
     * @param trusted if the contents of `bytes` are trusted
     */
    static newFromBytes(type: VariantType, bytes: any, trusted: boolean): Variant
    /**
     * Creates a new #GVariant instance from serialized data.
     * 
     * `type` is the type of #GVariant instance that will be constructed.
     * The interpretation of `data` depends on knowing the type.
     * 
     * `data` is not modified by this function and must remain valid with an
     * unchanging value until such a time as `notify` is called with
     * `user_data`.  If the contents of `data` change before that time then
     * the result is undefined.
     * 
     * If `data` is trusted to be serialized data in normal form then
     * `trusted` should be %TRUE.  This applies to serialized data created
     * within this process or read from a trusted location on the disk (such
     * as a file installed in /usr/lib alongside your application).  You
     * should set trusted to %FALSE if `data` is read from the network, a
     * file in the user's home directory, etc.
     * 
     * If `data` was not stored in this machine's native endianness, any multi-byte
     * numeric values in the returned variant will also be in non-native
     * endianness. g_variant_byteswap() can be used to recover the original values.
     * 
     * `notify` will be called with `user_data` when `data` is no longer
     * needed.  The exact time of this call is unspecified and might even be
     * before this function returns.
     * 
     * Note: `data` must be backed by memory that is aligned appropriately for the
     * `type` being loaded. Otherwise this function will internally create a copy of
     * the memory (since GLib 2.60) or (in older versions) fail and exit the
     * process.
     * @constructor 
     * @param type a definite #GVariantType
     * @param data the serialized data
     * @param trusted %TRUE if `data` is definitely in normal form
     * @param notify function to call when `data` is no longer needed
     * @param userData data for `notify`
     */
    static newFromData(type: VariantType, data: Uint8Array, trusted: boolean, notify: DestroyNotify, userData: object | null): Variant
    /**
     * Creates a new handle #GVariant instance.
     * 
     * By convention, handles are indexes into an array of file descriptors
     * that are sent alongside a D-Bus message.  If you're not interacting
     * with D-Bus, you probably don't need them.
     * @constructor 
     * @param value a #gint32 value
     */
    static newHandle(value: number): Variant
    /**
     * Creates a new int16 #GVariant instance.
     * @constructor 
     * @param value a #gint16 value
     */
    static newInt16(value: number): Variant
    /**
     * Creates a new int32 #GVariant instance.
     * @constructor 
     * @param value a #gint32 value
     */
    static newInt32(value: number): Variant
    /**
     * Creates a new int64 #GVariant instance.
     * @constructor 
     * @param value a #gint64 value
     */
    static newInt64(value: number): Variant
    /**
     * Depending on if `child` is %NULL, either wraps `child` inside of a
     * maybe container or creates a Nothing instance for the given `type`.
     * 
     * At least one of `child_type` and `child` must be non-%NULL.
     * If `child_type` is non-%NULL then it must be a definite type.
     * If they are both non-%NULL then `child_type` must be the type
     * of `child`.
     * 
     * If `child` is a floating reference (see g_variant_ref_sink()), the new
     * instance takes ownership of `child`.
     * @constructor 
     * @param childType the #GVariantType of the child, or %NULL
     * @param child the child value, or %NULL
     */
    static newMaybe(childType: VariantType | null, child: Variant | null): Variant
    /**
     * Creates a D-Bus object path #GVariant with the contents of `string`.
     * `string` must be a valid D-Bus object path.  Use
     * g_variant_is_object_path() if you're not sure.
     * @constructor 
     * @param objectPath a normal C nul-terminated string
     */
    static newObjectPath(objectPath: string): Variant
    /**
     * Constructs an array of object paths #GVariant from the given array of
     * strings.
     * 
     * Each string must be a valid #GVariant object path; see
     * g_variant_is_object_path().
     * 
     * If `length` is -1 then `strv` is %NULL-terminated.
     * @constructor 
     * @param strv an array of strings
     */
    static newObjv(strv: string[]): Variant
    /**
     * Creates a D-Bus type signature #GVariant with the contents of
     * `string`.  `string` must be a valid D-Bus type signature.  Use
     * g_variant_is_signature() if you're not sure.
     * @constructor 
     * @param signature a normal C nul-terminated string
     */
    static newSignature(signature: string): Variant
    /**
     * Creates a string #GVariant with the contents of `string`.
     * 
     * `string` must be valid UTF-8, and must not be %NULL. To encode
     * potentially-%NULL strings, use g_variant_new() with `ms` as the
     * [format string][gvariant-format-strings-maybe-types].
     * @constructor 
     * @param string a normal UTF-8 nul-terminated string
     */
    static newString(string: string): Variant
    /**
     * Constructs an array of strings #GVariant from the given array of
     * strings.
     * 
     * If `length` is -1 then `strv` is %NULL-terminated.
     * @constructor 
     * @param strv an array of strings
     */
    static newStrv(strv: string[]): Variant
    /**
     * Creates a new tuple #GVariant out of the items in `children`.  The
     * type is determined from the types of `children`.  No entry in the
     * `children` array may be %NULL.
     * 
     * If `n_children` is 0 then the unit tuple is constructed.
     * 
     * If the `children` are floating references (see g_variant_ref_sink()), the
     * new instance takes ownership of them as if via g_variant_ref_sink().
     * @constructor 
     * @param children the items to make the tuple out of
     */
    static newTuple(children: Variant[]): Variant
    /**
     * Creates a new uint16 #GVariant instance.
     * @constructor 
     * @param value a #guint16 value
     */
    static newUint16(value: number): Variant
    /**
     * Creates a new uint32 #GVariant instance.
     * @constructor 
     * @param value a #guint32 value
     */
    static newUint32(value: number): Variant
    /**
     * Creates a new uint64 #GVariant instance.
     * @constructor 
     * @param value a #guint64 value
     */
    static newUint64(value: number): Variant
    /**
     * Boxes `value`.  The result is a #GVariant instance representing a
     * variant containing the original value.
     * 
     * If `child` is a floating reference (see g_variant_ref_sink()), the new
     * instance takes ownership of `child`.
     * @constructor 
     * @param value a #GVariant instance
     */
    static newVariant(value: Variant): Variant
    /**
     * Determines if a given string is a valid D-Bus object path.  You
     * should ensure that a string is a valid D-Bus object path before
     * passing it to g_variant_new_object_path().
     * 
     * A valid object path starts with `/` followed by zero or more
     * sequences of characters separated by `/` characters.  Each sequence
     * must contain only the characters `[A-Z][a-z][0-9]_`.  No sequence
     * (including the one following the final `/` character) may be empty.
     * @param string a normal C nul-terminated string
     */
    static isObjectPath(string: string): boolean
    /**
     * Determines if a given string is a valid D-Bus type signature.  You
     * should ensure that a string is a valid D-Bus type signature before
     * passing it to g_variant_new_signature().
     * 
     * D-Bus type signatures consist of zero or more definite #GVariantType
     * strings in sequence.
     * @param string a normal C nul-terminated string
     */
    static isSignature(string: string): boolean
    /**
     * Parses a #GVariant from a text representation.
     * 
     * A single #GVariant is parsed from the content of `text`.
     * 
     * The format is described [here][gvariant-text].
     * 
     * The memory at `limit` will never be accessed and the parser behaves as
     * if the character at `limit` is the nul terminator.  This has the
     * effect of bounding `text`.
     * 
     * If `endptr` is non-%NULL then `text` is permitted to contain data
     * following the value that this function parses and `endptr` will be
     * updated to point to the first character past the end of the text
     * parsed by this function.  If `endptr` is %NULL and there is extra data
     * then an error is returned.
     * 
     * If `type` is non-%NULL then the value will be parsed to have that
     * type.  This may result in additional parse errors (in the case that
     * the parsed value doesn't fit the type) but may also result in fewer
     * errors (in the case that the type would have been ambiguous, such as
     * with empty arrays).
     * 
     * In the event that the parsing is successful, the resulting #GVariant
     * is returned. It is never floating, and must be freed with
     * g_variant_unref().
     * 
     * In case of any error, %NULL will be returned.  If `error` is non-%NULL
     * then it will be set to reflect the error that occurred.
     * 
     * Officially, the language understood by the parser is "any string
     * produced by g_variant_print()".
     * 
     * There may be implementation specific restrictions on deeply nested values,
     * which would result in a %G_VARIANT_PARSE_ERROR_RECURSION error. #GVariant is
     * guaranteed to handle nesting up to at least 64 levels.
     * @param type a #GVariantType, or %NULL
     * @param text a string containing a GVariant in text form
     * @param limit a pointer to the end of `text,` or %NULL
     * @param endptr a location to store the end pointer, or %NULL
     */
    static parse(type: VariantType | null, text: string, limit: string | null, endptr: string | null): Variant
    /**
     * Pretty-prints a message showing the context of a #GVariant parse
     * error within the string for which parsing was attempted.
     * 
     * The resulting string is suitable for output to the console or other
     * monospace media where newlines are treated in the usual way.
     * 
     * The message will typically look something like one of the following:
     * 
     * |[
     * unterminated string constant:
     *   (1, 2, 3, 'abc
     *             ^^^^
     * ```
     * 
     * 
     * or
     * 
     * |[
     * unable to find a common type:
     *   [1, 2, 3, 'str']
     *    ^        ^^^^^
     * ```
     * 
     * 
     * The format of the message may change in a future version.
     * 
     * `error` must have come from a failed attempt to g_variant_parse() and
     * `source_str` must be exactly the same string that caused the error.
     * If `source_str` was not nul-terminated when you passed it to
     * g_variant_parse() then you must add nul termination before using this
     * function.
     * @param error a #GError from the #GVariantParseError domain
     * @param sourceStr the string that was given to the parser
     */
    static parseErrorPrintContext(error: Error, sourceStr: string): string
    static parseErrorQuark(): Quark
    /**
     * Same as g_variant_error_quark().
     */
    static parserGetErrorQuark(): Quark
}

export interface VariantBuilder {

    // Owm methods of GLib-2.0.GLib.VariantBuilder

    /**
     * Adds `value` to `builder`.
     * 
     * It is an error to call this function in any way that would create an
     * inconsistent value to be constructed.  Some examples of this are
     * putting different types of items into an array, putting the wrong
     * types or number of items in a tuple, putting more than one value into
     * a variant, etc.
     * 
     * If `value` is a floating reference (see g_variant_ref_sink()),
     * the `builder` instance takes ownership of `value`.
     * @param value a #GVariant
     */
    addValue(value: Variant): void
    /**
     * Closes the subcontainer inside the given `builder` that was opened by
     * the most recent call to g_variant_builder_open().
     * 
     * It is an error to call this function in any way that would create an
     * inconsistent value to be constructed (ie: too few values added to the
     * subcontainer).
     */
    close(): void
    /**
     * Ends the builder process and returns the constructed value.
     * 
     * It is not permissible to use `builder` in any way after this call
     * except for reference counting operations (in the case of a
     * heap-allocated #GVariantBuilder) or by reinitialising it with
     * g_variant_builder_init() (in the case of stack-allocated). This
     * means that for the stack-allocated builders there is no need to
     * call g_variant_builder_clear() after the call to
     * g_variant_builder_end().
     * 
     * It is an error to call this function in any way that would create an
     * inconsistent value to be constructed (ie: insufficient number of
     * items added to a container with a specific number of children
     * required).  It is also an error to call this function if the builder
     * was created with an indefinite array or maybe type and no children
     * have been added; in this case it is impossible to infer the type of
     * the empty array.
     */
    end(): Variant
    /**
     * Opens a subcontainer inside the given `builder`.  When done adding
     * items to the subcontainer, g_variant_builder_close() must be called. `type`
     * is the type of the container: so to build a tuple of several values, `type`
     * must include the tuple itself.
     * 
     * It is an error to call this function in any way that would cause an
     * inconsistent value to be constructed (ie: adding too many values or
     * a value of an incorrect type).
     * 
     * Example of building a nested variant:
     * 
     * ```c
     * GVariantBuilder builder;
     * guint32 some_number = get_number ();
     * g_autoptr (GHashTable) some_dict = get_dict ();
     * GHashTableIter iter;
     * const gchar *key;
     * const GVariant *value;
     * g_autoptr (GVariant) output = NULL;
     * 
     * g_variant_builder_init (&builder, G_VARIANT_TYPE ("(ua{sv})"));
     * g_variant_builder_add (&builder, "u", some_number);
     * g_variant_builder_open (&builder, G_VARIANT_TYPE ("a{sv}"));
     * 
     * g_hash_table_iter_init (&iter, some_dict);
     * while (g_hash_table_iter_next (&iter, (gpointer *) &key, (gpointer *) &value))
     *   {
     *     g_variant_builder_open (&builder, G_VARIANT_TYPE ("{sv}"));
     *     g_variant_builder_add (&builder, "s", key);
     *     g_variant_builder_add (&builder, "v", value);
     *     g_variant_builder_close (&builder);
     *   }
     * 
     * g_variant_builder_close (&builder);
     * 
     * output = g_variant_builder_end (&builder);
     * ```
     * 
     * @param type the #GVariantType of the container
     */
    open(type: VariantType): void
    /**
     * Increases the reference count on `builder`.
     * 
     * Don't call this on stack-allocated #GVariantBuilder instances or bad
     * things will happen.
     */
    ref(): VariantBuilder
    /**
     * Decreases the reference count on `builder`.
     * 
     * In the event that there are no more references, releases all memory
     * associated with the #GVariantBuilder.
     * 
     * Don't call this on stack-allocated #GVariantBuilder instances or bad
     * things will happen.
     */
    unref(): void
}

/**
 * A utility type for constructing container-type #GVariant instances.
 * 
 * This is an opaque structure and may only be accessed using the
 * following functions.
 * 
 * #GVariantBuilder is not threadsafe in any way.  Do not attempt to
 * access it from more than one thread.
 * @record 
 */
export class VariantBuilder {

    // Own properties of GLib-2.0.GLib.VariantBuilder

    static name: string

    // Constructors of GLib-2.0.GLib.VariantBuilder

    /**
     * Allocates and initialises a new #GVariantBuilder.
     * 
     * You should call g_variant_builder_unref() on the return value when it
     * is no longer needed.  The memory will not be automatically freed by
     * any other call.
     * 
     * In most cases it is easier to place a #GVariantBuilder directly on
     * the stack of the calling function and initialise it with
     * g_variant_builder_init().
     * @constructor 
     * @param type a container type
     */
    constructor(type: VariantType) 
    /**
     * Allocates and initialises a new #GVariantBuilder.
     * 
     * You should call g_variant_builder_unref() on the return value when it
     * is no longer needed.  The memory will not be automatically freed by
     * any other call.
     * 
     * In most cases it is easier to place a #GVariantBuilder directly on
     * the stack of the calling function and initialise it with
     * g_variant_builder_init().
     * @constructor 
     * @param type a container type
     */
    static new(type: VariantType): VariantBuilder
}

export interface VariantDict {

    // Owm methods of GLib-2.0.GLib.VariantDict

    /**
     * Releases all memory associated with a #GVariantDict without freeing
     * the #GVariantDict structure itself.
     * 
     * It typically only makes sense to do this on a stack-allocated
     * #GVariantDict if you want to abort building the value part-way
     * through.  This function need not be called if you call
     * g_variant_dict_end() and it also doesn't need to be called on dicts
     * allocated with g_variant_dict_new (see g_variant_dict_unref() for
     * that).
     * 
     * It is valid to call this function on either an initialised
     * #GVariantDict or one that was previously cleared by an earlier call
     * to g_variant_dict_clear() but it is not valid to call this function
     * on uninitialised memory.
     */
    clear(): void
    /**
     * Checks if `key` exists in `dict`.
     * @param key the key to look up in the dictionary
     */
    contains(key: string): boolean
    /**
     * Returns the current value of `dict` as a #GVariant of type
     * %G_VARIANT_TYPE_VARDICT, clearing it in the process.
     * 
     * It is not permissible to use `dict` in any way after this call except
     * for reference counting operations (in the case of a heap-allocated
     * #GVariantDict) or by reinitialising it with g_variant_dict_init() (in
     * the case of stack-allocated).
     */
    end(): Variant
    /**
     * Inserts (or replaces) a key in a #GVariantDict.
     * 
     * `value` is consumed if it is floating.
     * @param key the key to insert a value for
     * @param value the value to insert
     */
    insertValue(key: string, value: Variant): void
    /**
     * Looks up a value in a #GVariantDict.
     * 
     * If `key` is not found in `dictionary,` %NULL is returned.
     * 
     * The `expected_type` string specifies what type of value is expected.
     * If the value associated with `key` has a different type then %NULL is
     * returned.
     * 
     * If the key is found and the value has the correct type, it is
     * returned.  If `expected_type` was specified then any non-%NULL return
     * value will have this type.
     * @param key the key to look up in the dictionary
     * @param expectedType a #GVariantType, or %NULL
     */
    lookupValue(key: string, expectedType: VariantType | null): Variant
    /**
     * Increases the reference count on `dict`.
     * 
     * Don't call this on stack-allocated #GVariantDict instances or bad
     * things will happen.
     */
    ref(): VariantDict
    /**
     * Removes a key and its associated value from a #GVariantDict.
     * @param key the key to remove
     */
    remove(key: string): boolean
    /**
     * Decreases the reference count on `dict`.
     * 
     * In the event that there are no more references, releases all memory
     * associated with the #GVariantDict.
     * 
     * Don't call this on stack-allocated #GVariantDict instances or bad
     * things will happen.
     */
    unref(): void
}

/**
 * #GVariantDict is a mutable interface to #GVariant dictionaries.
 * 
 * It can be used for doing a sequence of dictionary lookups in an
 * efficient way on an existing #GVariant dictionary or it can be used
 * to construct new dictionaries with a hashtable-like interface.  It
 * can also be used for taking existing dictionaries and modifying them
 * in order to create new ones.
 * 
 * #GVariantDict can only be used with %G_VARIANT_TYPE_VARDICT
 * dictionaries.
 * 
 * It is possible to use #GVariantDict allocated on the stack or on the
 * heap.  When using a stack-allocated #GVariantDict, you begin with a
 * call to g_variant_dict_init() and free the resources with a call to
 * g_variant_dict_clear().
 * 
 * Heap-allocated #GVariantDict follows normal refcounting rules: you
 * allocate it with g_variant_dict_new() and use g_variant_dict_ref()
 * and g_variant_dict_unref().
 * 
 * g_variant_dict_end() is used to convert the #GVariantDict back into a
 * dictionary-type #GVariant.  When used with stack-allocated instances,
 * this also implicitly frees all associated memory, but for
 * heap-allocated instances, you must still call g_variant_dict_unref()
 * afterwards.
 * 
 * You will typically want to use a heap-allocated #GVariantDict when
 * you expose it as part of an API.  For most other uses, the
 * stack-allocated form will be more convenient.
 * 
 * Consider the following two examples that do the same thing in each
 * style: take an existing dictionary and look up the "count" uint32
 * key, adding 1 to it if it is found, or returning an error if the
 * key is not found.  Each returns the new dictionary as a floating
 * #GVariant.
 * 
 * ## Using a stack-allocated GVariantDict
 * 
 * 
 * ```c
 *   GVariant *
 *   add_to_count (GVariant  *orig,
 *                 GError   **error)
 *   {
 *     GVariantDict dict;
 *     guint32 count;
 * 
 *     g_variant_dict_init (&dict, orig);
 *     if (!g_variant_dict_lookup (&dict, "count", "u", &count))
 *       {
 *         g_set_error (...);
 *         g_variant_dict_clear (&dict);
 *         return NULL;
 *       }
 * 
 *     g_variant_dict_insert (&dict, "count", "u", count + 1);
 * 
 *     return g_variant_dict_end (&dict);
 *   }
 * ```
 * 
 * 
 * ## Using heap-allocated GVariantDict
 * 
 * 
 * ```c
 *   GVariant *
 *   add_to_count (GVariant  *orig,
 *                 GError   **error)
 *   {
 *     GVariantDict *dict;
 *     GVariant *result;
 *     guint32 count;
 * 
 *     dict = g_variant_dict_new (orig);
 * 
 *     if (g_variant_dict_lookup (dict, "count", "u", &count))
 *       {
 *         g_variant_dict_insert (dict, "count", "u", count + 1);
 *         result = g_variant_dict_end (dict);
 *       }
 *     else
 *       {
 *         g_set_error (...);
 *         result = NULL;
 *       }
 * 
 *     g_variant_dict_unref (dict);
 * 
 *     return result;
 *   }
 * ```
 * 
 * @record 
 */
export class VariantDict {

    // Own properties of GLib-2.0.GLib.VariantDict

    static name: string

    // Constructors of GLib-2.0.GLib.VariantDict

    /**
     * Allocates and initialises a new #GVariantDict.
     * 
     * You should call g_variant_dict_unref() on the return value when it
     * is no longer needed.  The memory will not be automatically freed by
     * any other call.
     * 
     * In some cases it may be easier to place a #GVariantDict directly on
     * the stack of the calling function and initialise it with
     * g_variant_dict_init().  This is particularly useful when you are
     * using #GVariantDict to construct a #GVariant.
     * @constructor 
     * @param fromAsv the #GVariant with which to initialise the   dictionary
     */
    constructor(fromAsv: Variant | null) 
    /**
     * Allocates and initialises a new #GVariantDict.
     * 
     * You should call g_variant_dict_unref() on the return value when it
     * is no longer needed.  The memory will not be automatically freed by
     * any other call.
     * 
     * In some cases it may be easier to place a #GVariantDict directly on
     * the stack of the calling function and initialise it with
     * g_variant_dict_init().  This is particularly useful when you are
     * using #GVariantDict to construct a #GVariant.
     * @constructor 
     * @param fromAsv the #GVariant with which to initialise the   dictionary
     */
    static new(fromAsv: Variant | null): VariantDict
}

export interface VariantIter {

    // Owm methods of GLib-2.0.GLib.VariantIter

    /**
     * Frees a heap-allocated #GVariantIter.  Only call this function on
     * iterators that were returned by g_variant_iter_new() or
     * g_variant_iter_copy().
     */
    free(): void
    /**
     * Queries the number of child items in the container that we are
     * iterating over.  This is the total number of items -- not the number
     * of items remaining.
     * 
     * This function might be useful for preallocation of arrays.
     */
    nChildren(): number
    /**
     * Gets the next item in the container.  If no more items remain then
     * %NULL is returned.
     * 
     * Use g_variant_unref() to drop your reference on the return value when
     * you no longer need it.
     * 
     * Here is an example for iterating with g_variant_iter_next_value():
     * 
     * ```c
     *   // recursively iterate a container
     *   void
     *   iterate_container_recursive (GVariant *container)
     *   {
     *     GVariantIter iter;
     *     GVariant *child;
     * 
     *     g_variant_iter_init (&iter, container);
     *     while ((child = g_variant_iter_next_value (&iter)))
     *       {
     *         g_print ("type '%s'\n", g_variant_get_type_string (child));
     * 
     *         if (g_variant_is_container (child))
     *           iterate_container_recursive (child);
     * 
     *         g_variant_unref (child);
     *       }
     *   }
     * ```
     * 
     */
    nextValue(): Variant | null
}

/**
 * #GVariantIter is an opaque data structure and can only be accessed
 * using the following functions.
 * @record 
 */
export class VariantIter {

    // Own properties of GLib-2.0.GLib.VariantIter

    static name: string
}

export interface VariantType {

    // Owm methods of GLib-2.0.GLib.VariantType

    /**
     * Makes a copy of a #GVariantType.  It is appropriate to call
     * g_variant_type_free() on the return value.  `type` may not be %NULL.
     */
    copy(): VariantType
    /**
     * Returns a newly-allocated copy of the type string corresponding to
     * `type`.  The returned string is nul-terminated.  It is appropriate to
     * call g_free() on the return value.
     */
    dupString(): string
    /**
     * Determines the element type of an array or maybe type.
     * 
     * This function may only be used with array or maybe types.
     */
    element(): VariantType
    /**
     * Compares `type1` and `type2` for equality.
     * 
     * Only returns %TRUE if the types are exactly equal.  Even if one type
     * is an indefinite type and the other is a subtype of it, %FALSE will
     * be returned if they are not exactly equal.  If you want to check for
     * subtypes, use g_variant_type_is_subtype_of().
     * 
     * The argument types of `type1` and `type2` are only #gconstpointer to
     * allow use with #GHashTable without function pointer casting.  For
     * both arguments, a valid #GVariantType must be provided.
     * @param type2 a #GVariantType
     */
    equal(type2: VariantType): boolean
    /**
     * Determines the first item type of a tuple or dictionary entry
     * type.
     * 
     * This function may only be used with tuple or dictionary entry types,
     * but must not be used with the generic tuple type
     * %G_VARIANT_TYPE_TUPLE.
     * 
     * In the case of a dictionary entry type, this returns the type of
     * the key.
     * 
     * %NULL is returned in case of `type` being %G_VARIANT_TYPE_UNIT.
     * 
     * This call, together with g_variant_type_next() provides an iterator
     * interface over tuple and dictionary entry types.
     */
    first(): VariantType
    /**
     * Frees a #GVariantType that was allocated with
     * g_variant_type_copy(), g_variant_type_new() or one of the container
     * type constructor functions.
     * 
     * In the case that `type` is %NULL, this function does nothing.
     * 
     * Since 2.24
     */
    free(): void
    /**
     * Returns the length of the type string corresponding to the given
     * `type`.  This function must be used to determine the valid extent of
     * the memory region returned by g_variant_type_peek_string().
     */
    getStringLength(): number
    /**
     * Hashes `type`.
     * 
     * The argument type of `type` is only #gconstpointer to allow use with
     * #GHashTable without function pointer casting.  A valid
     * #GVariantType must be provided.
     */
    hash(): number
    /**
     * Determines if the given `type` is an array type.  This is true if the
     * type string for `type` starts with an 'a'.
     * 
     * This function returns %TRUE for any indefinite type for which every
     * definite subtype is an array type -- %G_VARIANT_TYPE_ARRAY, for
     * example.
     */
    isArray(): boolean
    /**
     * Determines if the given `type` is a basic type.
     * 
     * Basic types are booleans, bytes, integers, doubles, strings, object
     * paths and signatures.
     * 
     * Only a basic type may be used as the key of a dictionary entry.
     * 
     * This function returns %FALSE for all indefinite types except
     * %G_VARIANT_TYPE_BASIC.
     */
    isBasic(): boolean
    /**
     * Determines if the given `type` is a container type.
     * 
     * Container types are any array, maybe, tuple, or dictionary
     * entry types plus the variant type.
     * 
     * This function returns %TRUE for any indefinite type for which every
     * definite subtype is a container -- %G_VARIANT_TYPE_ARRAY, for
     * example.
     */
    isContainer(): boolean
    /**
     * Determines if the given `type` is definite (ie: not indefinite).
     * 
     * A type is definite if its type string does not contain any indefinite
     * type characters ('*', '?', or 'r').
     * 
     * A #GVariant instance may not have an indefinite type, so calling
     * this function on the result of g_variant_get_type() will always
     * result in %TRUE being returned.  Calling this function on an
     * indefinite type like %G_VARIANT_TYPE_ARRAY, however, will result in
     * %FALSE being returned.
     */
    isDefinite(): boolean
    /**
     * Determines if the given `type` is a dictionary entry type.  This is
     * true if the type string for `type` starts with a '{'.
     * 
     * This function returns %TRUE for any indefinite type for which every
     * definite subtype is a dictionary entry type --
     * %G_VARIANT_TYPE_DICT_ENTRY, for example.
     */
    isDictEntry(): boolean
    /**
     * Determines if the given `type` is a maybe type.  This is true if the
     * type string for `type` starts with an 'm'.
     * 
     * This function returns %TRUE for any indefinite type for which every
     * definite subtype is a maybe type -- %G_VARIANT_TYPE_MAYBE, for
     * example.
     */
    isMaybe(): boolean
    /**
     * Checks if `type` is a subtype of `supertype`.
     * 
     * This function returns %TRUE if `type` is a subtype of `supertype`.  All
     * types are considered to be subtypes of themselves.  Aside from that,
     * only indefinite types can have subtypes.
     * @param supertype a #GVariantType
     */
    isSubtypeOf(supertype: VariantType): boolean
    /**
     * Determines if the given `type` is a tuple type.  This is true if the
     * type string for `type` starts with a '(' or if `type` is
     * %G_VARIANT_TYPE_TUPLE.
     * 
     * This function returns %TRUE for any indefinite type for which every
     * definite subtype is a tuple type -- %G_VARIANT_TYPE_TUPLE, for
     * example.
     */
    isTuple(): boolean
    /**
     * Determines if the given `type` is the variant type.
     */
    isVariant(): boolean
    /**
     * Determines the key type of a dictionary entry type.
     * 
     * This function may only be used with a dictionary entry type.  Other
     * than the additional restriction, this call is equivalent to
     * g_variant_type_first().
     */
    key(): VariantType
    /**
     * Determines the number of items contained in a tuple or
     * dictionary entry type.
     * 
     * This function may only be used with tuple or dictionary entry types,
     * but must not be used with the generic tuple type
     * %G_VARIANT_TYPE_TUPLE.
     * 
     * In the case of a dictionary entry type, this function will always
     * return 2.
     */
    nItems(): number
    /**
     * Determines the next item type of a tuple or dictionary entry
     * type.
     * 
     * `type` must be the result of a previous call to
     * g_variant_type_first() or g_variant_type_next().
     * 
     * If called on the key type of a dictionary entry then this call
     * returns the value type.  If called on the value type of a dictionary
     * entry then this call returns %NULL.
     * 
     * For tuples, %NULL is returned when `type` is the last item in a tuple.
     */
    next(): VariantType
    /**
     * Determines the value type of a dictionary entry type.
     * 
     * This function may only be used with a dictionary entry type.
     */
    value(): VariantType
}

/**
 * This section introduces the GVariant type system. It is based, in
 * large part, on the D-Bus type system, with two major changes and
 * some minor lifting of restrictions. The
 * [D-Bus specification](http://dbus.freedesktop.org/doc/dbus-specification.html),
 * therefore, provides a significant amount of
 * information that is useful when working with GVariant.
 * 
 * The first major change with respect to the D-Bus type system is the
 * introduction of maybe (or "nullable") types.  Any type in GVariant can be
 * converted to a maybe type, in which case, "nothing" (or "null") becomes a
 * valid value.  Maybe types have been added by introducing the
 * character "m" to type strings.
 * 
 * The second major change is that the GVariant type system supports the
 * concept of "indefinite types" -- types that are less specific than
 * the normal types found in D-Bus.  For example, it is possible to speak
 * of "an array of any type" in GVariant, where the D-Bus type system
 * would require you to speak of "an array of integers" or "an array of
 * strings".  Indefinite types have been added by introducing the
 * characters "*", "?" and "r" to type strings.
 * 
 * Finally, all arbitrary restrictions relating to the complexity of
 * types are lifted along with the restriction that dictionary entries
 * may only appear nested inside of arrays.
 * 
 * Just as in D-Bus, GVariant types are described with strings ("type
 * strings").  Subject to the differences mentioned above, these strings
 * are of the same form as those found in D-Bus.  Note, however: D-Bus
 * always works in terms of messages and therefore individual type
 * strings appear nowhere in its interface.  Instead, "signatures"
 * are a concatenation of the strings of the type of each argument in a
 * message.  GVariant deals with single values directly so GVariant type
 * strings always describe the type of exactly one value.  This means
 * that a D-Bus signature string is generally not a valid GVariant type
 * string -- except in the case that it is the signature of a message
 * containing exactly one argument.
 * 
 * An indefinite type is similar in spirit to what may be called an
 * abstract type in other type systems.  No value can exist that has an
 * indefinite type as its type, but values can exist that have types
 * that are subtypes of indefinite types.  That is to say,
 * g_variant_get_type() will never return an indefinite type, but
 * calling g_variant_is_of_type() with an indefinite type may return
 * %TRUE.  For example, you cannot have a value that represents "an
 * array of no particular type", but you can have an "array of integers"
 * which certainly matches the type of "an array of no particular type",
 * since "array of integers" is a subtype of "array of no particular
 * type".
 * 
 * This is similar to how instances of abstract classes may not
 * directly exist in other type systems, but instances of their
 * non-abstract subtypes may.  For example, in GTK, no object that has
 * the type of #GtkBin can exist (since #GtkBin is an abstract class),
 * but a #GtkWindow can certainly be instantiated, and you would say
 * that the #GtkWindow is a #GtkBin (since #GtkWindow is a subclass of
 * #GtkBin).
 * 
 * ## GVariant Type Strings
 * 
 * A GVariant type string can be any of the following:
 * 
 * - any basic type string (listed below)
 * 
 * - "v", "r" or "*"
 * 
 * - one of the characters 'a' or 'm', followed by another type string
 * 
 * - the character '(', followed by a concatenation of zero or more other
 *   type strings, followed by the character ')'
 * 
 * - the character '{', followed by a basic type string (see below),
 *   followed by another type string, followed by the character '}'
 * 
 * A basic type string describes a basic type (as per
 * g_variant_type_is_basic()) and is always a single character in length.
 * The valid basic type strings are "b", "y", "n", "q", "i", "u", "x", "t",
 * "h", "d", "s", "o", "g" and "?".
 * 
 * The above definition is recursive to arbitrary depth. "aaaaai" and
 * "(ui(nq((y)))s)" are both valid type strings, as is
 * "a(aa(ui)(qna{ya(yd)}))". In order to not hit memory limits, #GVariant
 * imposes a limit on recursion depth of 65 nested containers. This is the
 * limit in the D-Bus specification (64) plus one to allow a #GDBusMessage to
 * be nested in a top-level tuple.
 * 
 * The meaning of each of the characters is as follows:
 * - `b`: the type string of %G_VARIANT_TYPE_BOOLEAN; a boolean value.
 * - `y`: the type string of %G_VARIANT_TYPE_BYTE; a byte.
 * - `n`: the type string of %G_VARIANT_TYPE_INT16; a signed 16 bit integer.
 * - `q`: the type string of %G_VARIANT_TYPE_UINT16; an unsigned 16 bit integer.
 * - `i`: the type string of %G_VARIANT_TYPE_INT32; a signed 32 bit integer.
 * - `u`: the type string of %G_VARIANT_TYPE_UINT32; an unsigned 32 bit integer.
 * - `x`: the type string of %G_VARIANT_TYPE_INT64; a signed 64 bit integer.
 * - `t`: the type string of %G_VARIANT_TYPE_UINT64; an unsigned 64 bit integer.
 * - `h`: the type string of %G_VARIANT_TYPE_HANDLE; a signed 32 bit value
 *   that, by convention, is used as an index into an array of file
 *   descriptors that are sent alongside a D-Bus message.
 * - `d`: the type string of %G_VARIANT_TYPE_DOUBLE; a double precision
 *   floating point value.
 * - `s`: the type string of %G_VARIANT_TYPE_STRING; a string.
 * - `o`: the type string of %G_VARIANT_TYPE_OBJECT_PATH; a string in the form
 *   of a D-Bus object path.
 * - `g`: the type string of %G_VARIANT_TYPE_SIGNATURE; a string in the form of
 *   a D-Bus type signature.
 * - `?`: the type string of %G_VARIANT_TYPE_BASIC; an indefinite type that
 *   is a supertype of any of the basic types.
 * - `v`: the type string of %G_VARIANT_TYPE_VARIANT; a container type that
 *   contain any other type of value.
 * - `a`: used as a prefix on another type string to mean an array of that
 *   type; the type string "ai", for example, is the type of an array of
 *   signed 32-bit integers.
 * - `m`: used as a prefix on another type string to mean a "maybe", or
 *   "nullable", version of that type; the type string "ms", for example,
 *   is the type of a value that maybe contains a string, or maybe contains
 *   nothing.
 * - `()`: used to enclose zero or more other concatenated type strings to
 *   create a tuple type; the type string "(is)", for example, is the type of
 *   a pair of an integer and a string.
 * - `r`: the type string of %G_VARIANT_TYPE_TUPLE; an indefinite type that is
 *   a supertype of any tuple type, regardless of the number of items.
 * - `{}`: used to enclose a basic type string concatenated with another type
 *   string to create a dictionary entry type, which usually appears inside of
 *   an array to form a dictionary; the type string "a{sd}", for example, is
 *   the type of a dictionary that maps strings to double precision floating
 *   point values.
 * 
 *   The first type (the basic type) is the key type and the second type is
 *   the value type. The reason that the first type is restricted to being a
 *   basic type is so that it can easily be hashed.
 * - `*`: the type string of %G_VARIANT_TYPE_ANY; the indefinite type that is
 *   a supertype of all types.  Note that, as with all type strings, this
 *   character represents exactly one type. It cannot be used inside of tuples
 *   to mean "any number of items".
 * 
 * Any type string of a container that contains an indefinite type is,
 * itself, an indefinite type. For example, the type string "a*"
 * (corresponding to %G_VARIANT_TYPE_ARRAY) is an indefinite type
 * that is a supertype of every array type. "(*s)" is a supertype
 * of all tuples that contain exactly two items where the second
 * item is a string.
 * 
 * "a{?*}" is an indefinite type that is a supertype of all arrays
 * containing dictionary entries where the key is any basic type and
 * the value is any type at all.  This is, by definition, a dictionary,
 * so this type string corresponds to %G_VARIANT_TYPE_DICTIONARY. Note
 * that, due to the restriction that the key of a dictionary entry must
 * be a basic type, "{**}" is not a valid type string.
 * @record 
 */
export class VariantType {

    // Own properties of GLib-2.0.GLib.VariantType

    static name: string

    // Constructors of GLib-2.0.GLib.VariantType

    /**
     * Creates a new #GVariantType corresponding to the type string given
     * by `type_string`.  It is appropriate to call g_variant_type_free() on
     * the return value.
     * 
     * It is a programmer error to call this function with an invalid type
     * string.  Use g_variant_type_string_is_valid() if you are unsure.
     * @constructor 
     * @param typeString a valid GVariant type string
     */
    constructor(typeString: string) 
    /**
     * Creates a new #GVariantType corresponding to the type string given
     * by `type_string`.  It is appropriate to call g_variant_type_free() on
     * the return value.
     * 
     * It is a programmer error to call this function with an invalid type
     * string.  Use g_variant_type_string_is_valid() if you are unsure.
     * @constructor 
     * @param typeString a valid GVariant type string
     */
    static new(typeString: string): VariantType
    /**
     * Constructs the type corresponding to an array of elements of the
     * type `type`.
     * 
     * It is appropriate to call g_variant_type_free() on the return value.
     * @constructor 
     * @param element a #GVariantType
     */
    static newArray(element: VariantType): VariantType
    /**
     * Constructs the type corresponding to a dictionary entry with a key
     * of type `key` and a value of type `value`.
     * 
     * It is appropriate to call g_variant_type_free() on the return value.
     * @constructor 
     * @param key a basic #GVariantType
     * @param value a #GVariantType
     */
    static newDictEntry(key: VariantType, value: VariantType): VariantType
    /**
     * Constructs the type corresponding to a maybe instance containing
     * type `type` or Nothing.
     * 
     * It is appropriate to call g_variant_type_free() on the return value.
     * @constructor 
     * @param element a #GVariantType
     */
    static newMaybe(element: VariantType): VariantType
    /**
     * Constructs a new tuple type, from `items`.
     * 
     * `length` is the number of items in `items,` or -1 to indicate that
     * `items` is %NULL-terminated.
     * 
     * It is appropriate to call g_variant_type_free() on the return value.
     * @constructor 
     * @param items an array of #GVariantTypes, one for each item
     */
    static newTuple(items: VariantType[]): VariantType
    static checked(arg0: string): VariantType
    static stringGetDepth(typeString: string): number
    /**
     * Checks if `type_string` is a valid GVariant type string.  This call is
     * equivalent to calling g_variant_type_string_scan() and confirming
     * that the following character is a nul terminator.
     * @param typeString a pointer to any string
     */
    static stringIsValid(typeString: string): boolean
    /**
     * Scan for a single complete and valid GVariant type string in `string`.
     * The memory pointed to by `limit` (or bytes beyond it) is never
     * accessed.
     * 
     * If a valid type string is found, `endptr` is updated to point to the
     * first character past the end of the string that was found and %TRUE
     * is returned.
     * 
     * If there is no valid type string starting at `string,` or if the type
     * string does not end before `limit` then %FALSE is returned.
     * 
     * For the simple case of checking if a string is a valid type string,
     * see g_variant_type_string_is_valid().
     * @param string a pointer to any string
     * @param limit the end of `string,` or %NULL
     */
    static stringScan(string: string, limit: string | null): [ /* returnType */ boolean, /* endptr */ string ]
}

export interface DoubleIEEE754 {

    // Own fields of GLib-2.0.GLib.DoubleIEEE754

    /**
     * the double value
     * @field 
     */
    vDouble: number
}

/**
 * The #GFloatIEEE754 and #GDoubleIEEE754 unions are used to access the sign,
 * mantissa and exponent of IEEE floats and doubles. These unions are defined
 * as appropriate for a given platform. IEEE floats and doubles are supported
 * (used for storage) by at least Intel, PPC and Sparc.
 * @union 
 */
export class DoubleIEEE754 {

    // Own properties of GLib-2.0.GLib.DoubleIEEE754

    static name: string
}

export interface FloatIEEE754 {

    // Own fields of GLib-2.0.GLib.FloatIEEE754

    /**
     * the double value
     * @field 
     */
    vFloat: number
}

/**
 * The #GFloatIEEE754 and #GDoubleIEEE754 unions are used to access the sign,
 * mantissa and exponent of IEEE floats and doubles. These unions are defined
 * as appropriate for a given platform. IEEE floats and doubles are supported
 * (used for storage) by at least Intel, PPC and Sparc.
 * @union 
 */
export class FloatIEEE754 {

    // Own properties of GLib-2.0.GLib.FloatIEEE754

    static name: string
}

export interface Mutex {

    // Owm methods of GLib-2.0.GLib.Mutex

    /**
     * Frees the resources allocated to a mutex with g_mutex_init().
     * 
     * This function should not be used with a #GMutex that has been
     * statically allocated.
     * 
     * Calling g_mutex_clear() on a locked mutex leads to undefined
     * behaviour.
     * 
     * Sine: 2.32
     */
    clear(): void
    /**
     * Initializes a #GMutex so that it can be used.
     * 
     * This function is useful to initialize a mutex that has been
     * allocated on the stack, or as part of a larger structure.
     * It is not necessary to initialize a mutex that has been
     * statically allocated.
     * 
     * 
     * ```c
     *   typedef struct {
     *     GMutex m;
     *     ...
     *   } Blob;
     * 
     * Blob *b;
     * 
     * b = g_new (Blob, 1);
     * g_mutex_init (&b->m);
     * ```
     * 
     * 
     * To undo the effect of g_mutex_init() when a mutex is no longer
     * needed, use g_mutex_clear().
     * 
     * Calling g_mutex_init() on an already initialized #GMutex leads
     * to undefined behaviour.
     */
    init(): void
    /**
     * Locks `mutex`. If `mutex` is already locked by another thread, the
     * current thread will block until `mutex` is unlocked by the other
     * thread.
     * 
     * #GMutex is neither guaranteed to be recursive nor to be
     * non-recursive.  As such, calling g_mutex_lock() on a #GMutex that has
     * already been locked by the same thread results in undefined behaviour
     * (including but not limited to deadlocks).
     */
    lock(): void
    /**
     * Tries to lock `mutex`. If `mutex` is already locked by another thread,
     * it immediately returns %FALSE. Otherwise it locks `mutex` and returns
     * %TRUE.
     * 
     * #GMutex is neither guaranteed to be recursive nor to be
     * non-recursive.  As such, calling g_mutex_lock() on a #GMutex that has
     * already been locked by the same thread results in undefined behaviour
     * (including but not limited to deadlocks or arbitrary return values).
     */
    trylock(): boolean
    /**
     * Unlocks `mutex`. If another thread is blocked in a g_mutex_lock()
     * call for `mutex,` it will become unblocked and can lock `mutex` itself.
     * 
     * Calling g_mutex_unlock() on a mutex that is not locked by the
     * current thread leads to undefined behaviour.
     */
    unlock(): void
}

/**
 * The #GMutex struct is an opaque data structure to represent a mutex
 * (mutual exclusion). It can be used to protect data against shared
 * access.
 * 
 * Take for example the following function:
 * 
 * ```c
 *   int
 *   give_me_next_number (void)
 *   {
 *     static int current_number = 0;
 * 
 *     // now do a very complicated calculation to calculate the new
 *     // number, this might for example be a random number generator
 *     current_number = calc_next_number (current_number);
 * 
 *     return current_number;
 *   }
 * ```
 * 
 * It is easy to see that this won't work in a multi-threaded
 * application. There current_number must be protected against shared
 * access. A #GMutex can be used as a solution to this problem:
 * 
 * ```c
 *   int
 *   give_me_next_number (void)
 *   {
 *     static GMutex mutex;
 *     static int current_number = 0;
 *     int ret_val;
 * 
 *     g_mutex_lock (&mutex);
 *     ret_val = current_number = calc_next_number (current_number);
 *     g_mutex_unlock (&mutex);
 * 
 *     return ret_val;
 *   }
 * ```
 * 
 * Notice that the #GMutex is not initialised to any particular value.
 * Its placement in static storage ensures that it will be initialised
 * to all-zeros, which is appropriate.
 * 
 * If a #GMutex is placed in other contexts (eg: embedded in a struct)
 * then it must be explicitly initialised using g_mutex_init().
 * 
 * A #GMutex should only be accessed via g_mutex_ functions.
 * @union 
 */
export class Mutex {

    // Own properties of GLib-2.0.GLib.Mutex

    static name: string
}

export interface TokenValue {

    // Own fields of GLib-2.0.GLib.TokenValue

    /**
     * token symbol value
     * @field 
     */
    vSymbol: object
    /**
     * token identifier value
     * @field 
     */
    vIdentifier: string
    /**
     * token binary integer value
     * @field 
     */
    vBinary: number
    /**
     * octal integer value
     * @field 
     */
    vOctal: number
    /**
     * integer value
     * @field 
     */
    vInt: number
    /**
     * 64-bit integer value
     * @field 
     */
    vInt64: number
    /**
     * floating point value
     * @field 
     */
    vFloat: number
    /**
     * hex integer value
     * @field 
     */
    vHex: number
    /**
     * string value
     * @field 
     */
    vString: string
    /**
     * comment value
     * @field 
     */
    vComment: string
    /**
     * character value
     * @field 
     */
    vChar: number
    /**
     * error value
     * @field 
     */
    vError: number
}

/**
 * A union holding the value of the token.
 * @union 
 */
export class TokenValue {

    // Own properties of GLib-2.0.GLib.TokenValue

    static name: string
}

    export type DateDay = number
    export type DateYear = number
    export type MainContextPusher = void
    export type MutexLocker = void
    export type Pid = number
    export type Quark = number
    export type RWLockReaderLocker = void
    export type RWLockWriterLocker = void
    export type RecMutexLocker = void
    export type RefString = number
    export type Strv = string
    export type Time = number
    export type TimeSpan = number
    export type Type = number