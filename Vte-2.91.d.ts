
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Vte-2.91
 */

import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * An enumeration type that can be used to specify how the terminal
 * uses extra allocated space.
 */
export enum Align {
    /**
     * align to left/top
     */
    START,
    /**
     * align to centre
     */
    CENTER,
    /**
     * align to right/bottom
     */
    END,
}
/**
 * An enumerated type which can be used to indicate the cursor blink mode
 * for the terminal.
 */
export enum CursorBlinkMode {
    /**
     * Follow GTK+ settings for cursor blinking.
     */
    SYSTEM,
    /**
     * Cursor blinks.
     */
    ON,
    /**
     * Cursor does not blink.
     */
    OFF,
}
/**
 * An enumerated type which can be used to indicate what should the terminal
 * draw at the cursor position.
 */
export enum CursorShape {
    /**
     * Draw a block cursor.  This is the default.
     */
    BLOCK,
    /**
     * Draw a vertical bar on the left side of character.
     * This is similar to the default cursor for other GTK+ widgets.
     */
    IBEAM,
    /**
     * Draw a horizontal bar below the character.
     */
    UNDERLINE,
}
/**
 * An enumerated type which can be used to indicate which string the terminal
 * should send to an application when the user presses the Delete or Backspace
 * keys.
 */
export enum EraseBinding {
    /**
     * For backspace, attempt to determine the right value from the terminal's IO settings.  For delete, use the control sequence.
     */
    AUTO,
    /**
     * Send an ASCII backspace character (0x08).
     */
    ASCII_BACKSPACE,
    /**
     * Send an ASCII delete character (0x7F).
     */
    ASCII_DELETE,
    /**
     * Send the "`@`7" control sequence.
     */
    DELETE_SEQUENCE,
    /**
     * Send terminal's "erase" setting.
     */
    TTY,
}
/**
 * An enumeration type that can be used to specify the format the selection
 * should be copied to the clipboard in.
 */
export enum Format {
    /**
     * Export as plain text
     */
    TEXT,
    /**
     * Export as HTML formatted text
     */
    HTML,
}
export enum PtyError {
    /**
     * Obsolete. Deprecated: 0.42
     */
    PTY_HELPER_FAILED,
    /**
     * failure when using PTY98 to allocate the PTY
     */
    PTY98_FAILED,
}
/**
 * An enum type for regex errors. In addition to the values listed above,
 * any PCRE2 error values may occur.
 */
export enum RegexError {
    /**
     * The PCRE2 library was built without
     *   Unicode support which is required for VTE
     */
    INCOMPATIBLE,
    /**
     * Regexes are not supported because VTE was
     *   built without PCRE2 support
     */
    NOT_SUPPORTED,
}
/**
 * An enumerated type which can be used to indicate whether the terminal allows
 * the text contents to be blinked.
 */
export enum TextBlinkMode {
    /**
     * Do not blink the text.
     */
    NEVER,
    /**
     * Allow blinking text only if the terminal is focused.
     */
    FOCUSED,
    /**
     * Allow blinking text only if the terminal is unfocused.
     */
    UNFOCUSED,
    /**
     * Allow blinking text. This is the default.
     */
    ALWAYS,
}
/**
 * A flag type to determine how terminal contents should be written
 * to an output stream.
 */
export enum WriteFlags {
    /**
     * Write contents as UTF-8 text.  This is the default.
     */
    DEFAULT,
}
/**
 * An enumeration type for features.
 * @bitfield 
 */
export enum FeatureFlags {
    /**
     * whether VTE was built with bidirectional text support
     */
    FLAG_BIDI,
    /**
     * whether VTE was built with ICU support
     */
    FLAG_ICU,
    /**
     * whether VTE was built with systemd support
     */
    FLAG_SYSTEMD,
    /**
     * whether VTE was built with SIXEL support
     */
    FLAG_SIXEL,
    /**
     * mask of all feature flags
     */
    FLAGS_MASK,
}
export enum PtyFlags {
    /**
     * Unused. Deprecated: 0.38
     */
    NO_LASTLOG,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_UTMP,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_WTMP,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_HELPER,
    /**
     * Unused. Deprecated: 0.38
     */
    NO_FALLBACK,
    /**
     * Do not start a new session for the child in
     *   vte_pty_child_setup(). See man:setsid(2) for more information. Since: 0.58
     */
    NO_SESSION,
    /**
     * Do not set the PTY as the controlling TTY for the child
     *   in vte_pty_child_setup(). See man:tty_ioctl(4) for more information. Since: 0.58
     */
    NO_CTTY,
    /**
     * the default flags
     */
    DEFAULT,
}
/**
 * The major version number of the VTE library
 * (e.g. in version 3.1.4 this is 3).
 */
export const MAJOR_VERSION: number
/**
 * The micro version number of the VTE library
 * (e.g. in version 3.1.4 this is 4).
 */
export const MICRO_VERSION: number
/**
 * The minor version number of the VTE library
 * (e.g. in version 3.1.4 this is 1).
 */
export const MINOR_VERSION: number
export const REGEX_FLAGS_DEFAULT: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Normally, the spawned process inherits the environment from the parent
 * process; when this flag is used, only the environment variables passed
 * to vte_pty_spawn_async() etc. are passed to the child process.
 */
export const SPAWN_NO_PARENT_ENVV: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Prevents vte_pty_spawn_async() etc. from moving the newly created child
 * process to a systemd user scope.
 */
export const SPAWN_NO_SYSTEMD_SCOPE: number
/**
 * Use this as a spawn flag (together with flags from #GSpawnFlags) in
 * vte_pty_spawn_async().
 * 
 * Requires vte_pty_spawn_async() etc. to move the newly created child
 * process to a systemd user scope; if that fails, the whole spawn fails.
 * 
 * This is supported on Linux only.
 */
export const SPAWN_REQUIRE_SYSTEMD_SCOPE: number
export const TEST_FLAGS_ALL: number
export const TEST_FLAGS_NONE: number
/**
 * Queries whether the legacy encoding `encoding` is supported.
 * 
 * If ICU support is not available, this function always returns %FALSE.
 * 
 * Note that UTF-8 is always supported; you can select it by
 * passing %NULL to vte_terminal_set_encoding().
 * @param encoding the name of the legacy encoding
 */
export function getEncodingSupported(encoding: string): boolean
/**
 * Gets the list of supported legacy encodings.
 * 
 * If ICU support is not available, this returns an empty vector.
 * Note that UTF-8 is always supported; you can select it by
 * passing %NULL to vte_terminal_set_encoding().
 * @param includeAliases whether to include alias names
 */
export function getEncodings(includeAliases: boolean): string[]
/**
 * Gets features VTE was compiled with.
 */
export function getFeatureFlags(): FeatureFlags
/**
 * Gets a list of features vte was compiled with.
 */
export function getFeatures(): string
/**
 * Returns the major version of the VTE library at runtime.
 * Contrast this with %VTE_MAJOR_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
export function getMajorVersion(): number
/**
 * Returns the micro version of the VTE library at runtime.
 * Contrast this with %VTE_MICRO_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
export function getMicroVersion(): number
/**
 * Returns the minor version of the VTE library at runtime.
 * Contrast this with %VTE_MINOR_VERSION which represents
 * the version of the VTE library that the code was compiled
 * with.
 */
export function getMinorVersion(): number
/**
 * Gets the user's shell, or %NULL. In the latter case, the
 * system default (usually "/bin/sh") should be used.
 */
export function getUserShell(): string
/**
 * Error domain for VTE PTY errors. Errors in this domain will be from the #VtePtyError
 * enumeration. See #GError for more information on error domains.
 */
export function ptyErrorQuark(): GLib.Quark
export function regexErrorQuark(): GLib.Quark
/**
 * Specifies the type of a selection function used to check whether
 * a cell has to be selected or not.
 * @callback 
 * @param terminal terminal in which the cell is.
 * @param column column in which the cell is.
 * @param row row in which the cell is.
 */
export interface SelectionFunc {
    (terminal: Terminal, column: number, row: number): boolean
}
/**
 * Callback for vte_terminal_spawn_async().
 * 
 * On success, `pid` contains the PID of the spawned process, and `error`
 * is %NULL.
 * On failure, `pid` is -1 and `error` contains the error information.
 * @callback 
 * @param terminal the #VteTerminal
 * @param pid a #GPid
 * @param error a #GError, or %NULL
 */
export interface TerminalSpawnAsyncCallback {
    (terminal: Terminal, pid: GLib.Pid, error: GLib.Error): void
}
export module Pty {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Vte-2.91.Vte.Pty

        /**
         * The file descriptor of the PTY master.
         */
        fd?: number | null
        /**
         * Flags.
         */
        flags?: PtyFlags | null
    }

}

export interface Pty extends Gio.Initable {

    // Own properties of Vte-2.91.Vte.Pty

    /**
     * The file descriptor of the PTY master.
     */
    readonly fd: number
    /**
     * Flags.
     */
    readonly flags: PtyFlags

    // Owm methods of Vte-2.91.Vte.Pty

    childSetup(): void
    /**
     * Since 0.42 this is a no-op.
     */
    close(): void
    getFd(): number
    /**
     * Reads the pseudo terminal's window size.
     * 
     * If getting the window size failed, `error` will be set to a #GIOError.
     */
    getSize(): [ /* returnType */ boolean, /* rows */ number, /* columns */ number ]
    /**
     * Attempts to resize the pseudo terminal's window size.  If successful, the
     * OS kernel will send <literal>SIGWINCH</literal> to the child process group.
     * 
     * If setting the window size failed, `error` will be set to a #GIOError.
     * @param rows the desired number of rows
     * @param columns the desired number of columns
     */
    setSize(rows: number, columns: number): boolean
    /**
     * Tells the kernel whether the terminal is UTF-8 or not, in case it can make
     * use of the info.  Linux 2.6.5 or so defines IUTF8 to make the line
     * discipline do multibyte backspace correctly.
     * @param utf8 whether or not the pty is in UTF-8 mode
     */
    setUtf8(utf8: boolean): boolean
    /**
     * Like vte_pty_spawn_with_fds_async(), except that this function does not
     * allow passing file descriptors to the child process. See vte_pty_spawn_with_fds_async()
     * for more information.
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnAsync(workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void
    spawnFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* childPid */ GLib.Pid ]
    /**
     * Starts the specified command under the pseudo-terminal `pty`.
     * The `argv` and `envv` lists should be %NULL-terminated.
     * The "TERM" environment variable is automatically set to a default value,
     * but can be overridden from `envv`.
     * `pty_flags` controls logging the session to the specified system log files.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY. Also %G_SPAWN_LEAVE_DESCRIPTORS_OPEN is not supported; and
     * %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
     * 
     * If `fds` is not %NULL, the child process will map the file descriptors from
     * `fds` according to `map_fds;` `n_map_fds` must be less or equal to `n_fds`.
     * This function will take ownership of the file descriptors in `fds;`
     * you must not use or close them after this call. All file descriptors in `fds`
     * must have the FD_CLOEXEC flag set on them; it will be unset in the child process
     * before calling man:execve(2). Note also that no file descriptor may be mapped
     * to stdin, stdout, or stderr (file descriptors 0, 1, or 2), since these will be
     * assigned to the PTY. All open file descriptors apart from those mapped as above
     * will be closed when execve() is called.
     * 
     * Beginning with 0.60, and on linux only, and unless %VTE_SPAWN_NO_SYSTEMD_SCOPE is
     * passed in `spawn_flags,` the newly created child process will be moved to its own
     * systemd user scope; and if %VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE is passed, and creation
     * of the systemd user scope fails, the whole spawn will fail.
     * You can override the options used for the systemd user scope by
     * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
     * for further information.
     * 
     * See vte_pty_new(), and vte_terminal_watch_child() for more information.
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param fds an array of file descriptors, or %NULL
     * @param mapFds an array of integers, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnWithFdsAsync(workingDirectory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, mapFds: number[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void

    // Class property signals of Vte-2.91.Vte.Pty

    connect(sigName: "notify::fd", callback: any): number
    on(sigName: "notify::fd", callback: any): number
    once(sigName: "notify::fd", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fd", ...args: any[]): void
    connect(sigName: "notify::flags", callback: any): number
    on(sigName: "notify::flags", callback: any): number
    once(sigName: "notify::flags", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flags", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Pty extends GObject.Object {

    // Own properties of Vte-2.91.Vte.Pty

    static name: string

    // Constructors of Vte-2.91.Vte.Pty

    constructor(config?: Pty.ConstructorProperties) 
    /**
     * Creates a new #VtePty for the PTY master `fd`.
     * 
     * No entry will be made in the lastlog, utmp or wtmp system files.
     * 
     * Note that the newly created #VtePty will take ownership of `fd`
     * and close it on finalize.
     * @constructor 
     * @param fd a file descriptor to the PTY
     * @param cancellable a #GCancellable, or %NULL
     */
    static newForeignSync(fd: number, cancellable: Gio.Cancellable | null): Pty
    /**
     * Allocates a new pseudo-terminal.
     * 
     * You can later use fork() or the g_spawn_async() family of functions
     * to start a process on the PTY.
     * 
     * If using fork(), you MUST call vte_pty_child_setup() in the child.
     * 
     * If using g_spawn_async() and friends, you MUST either use
     * vte_pty_child_setup() directly as the child setup function, or call
     * vte_pty_child_setup() from your own child setup function supplied.
     * 
     * When using vte_terminal_spawn_sync() with a custom child setup
     * function, vte_pty_child_setup() will be called before the supplied
     * function; you must not call it again.
     * 
     * Also, you MUST pass the %G_SPAWN_DO_NOT_REAP_CHILD flag.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported, since stdin, stdout
     * and stderr of the child process will always be connected to the PTY.
     * 
     * Note that you should set the PTY's size using vte_pty_set_size() before
     * spawning the child process, so that the child process has the correct
     * size from the start instead of starting with a default size and then
     * shortly afterwards receiving a <literal>SIGWINCH</literal> signal. You
     * should prefer using vte_terminal_pty_new_sync() which does this
     * automatically.
     * @constructor 
     * @param flags flags from #VtePtyFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    static newSync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty
    _init(config?: Pty.ConstructorProperties): void
}

export module Terminal {

    // Signal callback interfaces

    /**
     * Signal callback interface for `bell`
     */
    export interface BellSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `char-size-changed`
     */
    export interface CharSizeChangedSignalCallback {
        (width: number, height: number): void
    }

    /**
     * Signal callback interface for `child-exited`
     */
    export interface ChildExitedSignalCallback {
        (status: number): void
    }

    /**
     * Signal callback interface for `commit`
     */
    export interface CommitSignalCallback {
        (text: string, size: number): void
    }

    /**
     * Signal callback interface for `contents-changed`
     */
    export interface ContentsChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `copy-clipboard`
     */
    export interface CopyClipboardSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `current-directory-uri-changed`
     */
    export interface CurrentDirectoryUriChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `current-file-uri-changed`
     */
    export interface CurrentFileUriChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `cursor-moved`
     */
    export interface CursorMovedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `decrease-font-size`
     */
    export interface DecreaseFontSizeSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `deiconify-window`
     */
    export interface DeiconifyWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `encoding-changed`
     */
    export interface EncodingChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `eof`
     */
    export interface EofSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `hyperlink-hover-uri-changed`
     */
    export interface HyperlinkHoverUriChangedSignalCallback {
        (uri: string, bbox: Gdk.Rectangle): void
    }

    /**
     * Signal callback interface for `icon-title-changed`
     */
    export interface IconTitleChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `iconify-window`
     */
    export interface IconifyWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `increase-font-size`
     */
    export interface IncreaseFontSizeSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `lower-window`
     */
    export interface LowerWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `maximize-window`
     */
    export interface MaximizeWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `move-window`
     */
    export interface MoveWindowSignalCallback {
        (x: number, y: number): void
    }

    /**
     * Signal callback interface for `paste-clipboard`
     */
    export interface PasteClipboardSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `raise-window`
     */
    export interface RaiseWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `refresh-window`
     */
    export interface RefreshWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `resize-window`
     */
    export interface ResizeWindowSignalCallback {
        (width: number, height: number): void
    }

    /**
     * Signal callback interface for `restore-window`
     */
    export interface RestoreWindowSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `text-deleted`
     */
    export interface TextDeletedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `text-inserted`
     */
    export interface TextInsertedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `text-modified`
     */
    export interface TextModifiedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `text-scrolled`
     */
    export interface TextScrolledSignalCallback {
        (delta: number): void
    }

    /**
     * Signal callback interface for `window-title-changed`
     */
    export interface WindowTitleChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Widget.ConstructorProperties {

        // Own constructor properties of Vte-2.91.Vte.Terminal

        /**
         * Controls whether or not the terminal will attempt to draw bold text,
         * by using a bold font variant.
         */
        allowBold?: boolean | null
        /**
         * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
         */
        allowHyperlink?: boolean | null
        /**
         * Controls whether or not the terminal will beep when the child outputs the
         * "bl" sequence.
         */
        audibleBell?: boolean | null
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the backspace key.
         */
        backspaceBinding?: EraseBinding | null
        /**
         * Whether the SGR 1 attribute also switches to the bright counterpart
         * of the first 8 palette colors, in addition to making them bold (legacy behavior)
         * or if SGR 1 only enables bold and leaves the color intact.
         */
        boldIsBright?: boolean | null
        /**
         * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
         */
        cellHeightScale?: number | null
        /**
         * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
         */
        cellWidthScale?: number | null
        /**
         * This setting controls whether ambiguous-width characters are narrow or wide.
         * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
         * the width of ambiguous-width characters is fixed and determined by the encoding
         * itself.)
         * 
         * This setting only takes effect the next time the terminal is reset, either
         * via escape sequence or with vte_terminal_reset().
         */
        cjkAmbiguousWidth?: number | null
        /**
         * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
         * will use the #GtkSettings:gtk-cursor-blink setting.
         */
        cursorBlinkMode?: CursorBlinkMode | null
        /**
         * Controls the shape of the cursor.
         */
        cursorShape?: CursorShape | null
        /**
         * Controls what string or control sequence the terminal sends to its child
         * when the user presses the delete key.
         */
        deleteBinding?: EraseBinding | null
        /**
         * Controls whether or not the terminal will perform bidirectional text rendering.
         */
        enableBidi?: boolean | null
        enableFallbackScrolling?: boolean | null
        /**
         * Controls whether or not the terminal will shape Arabic text.
         */
        enableShaping?: boolean | null
        /**
         * Controls whether SIXEL image support is enabled.
         */
        enableSixel?: boolean | null
        /**
         * Controls the encoding the terminal will expect data from the child to
         * be encoded with.  For certain terminal types, applications executing in the
         * terminal can change the encoding.  The default is defined by the
         * application's locale settings.
         */
        encoding?: string | null
        /**
         * Specifies the font used for rendering all text displayed by the terminal,
         * overriding any fonts set using gtk_widget_modify_font().  The terminal
         * will immediately attempt to load the desired font, retrieve its
         * metrics, and attempt to resize itself to keep the same number of rows
         * and columns.
         */
        fontDesc?: Pango.FontDescription | null
        /**
         * The terminal's font scale.
         */
        fontScale?: number | null
        /**
         * Controls whether the terminal allows user input. When user input is disabled,
         * key press and mouse button press and motion events are not sent to the
         * terminal's child.
         */
        inputEnabled?: boolean | null
        /**
         * Controls the value of the terminal's mouse autohide setting.  When autohiding
         * is enabled, the mouse cursor will be hidden when the user presses a key and
         * shown when the user moves the mouse.
         */
        pointerAutohide?: boolean | null
        /**
         * The PTY object for the terminal.
         */
        pty?: Pty | null
        /**
         * Controls whether or not the terminal will rewrap its contents, including
         * the scrollback buffer, whenever the terminal's width changes.
         */
        rewrapOnResize?: boolean | null
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the user presses a key.  Modifier keys do not
         * trigger this behavior.
         */
        scrollOnKeystroke?: boolean | null
        /**
         * Controls whether or not the terminal will forcibly scroll to the bottom of
         * the viewable history when the new data is received from the child.
         */
        scrollOnOutput?: boolean | null
        /**
         * Controls whether the terminal's GtkAdjustment values unit is lines
         * or pixels. This can be enabled when the terminal is the child of a
         * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
         */
        scrollUnitIsPixels?: boolean | null
        /**
         * The length of the scrollback buffer used by the terminal.  The size of
         * the scrollback buffer will be set to the larger of this value and the number
         * of visible rows the widget can display, so 0 can safely be used to disable
         * scrollback.  Note that this setting only affects the normal screen buffer.
         * For terminal types which have an alternate screen buffer, no scrollback is
         * allowed on the alternate screen buffer.
         */
        scrollbackLines?: number | null
        /**
         * Controls whether or not the terminal will allow blinking text.
         */
        textBlinkMode?: TextBlinkMode | null
        /**
         * The horizontal alignment of `terminal` within its allocation.
         */
        xalign?: Align | null
        /**
         * The horizontal fillment of `terminal` within its allocation.
         */
        xfill?: boolean | null
        /**
         * The vertical alignment of `terminal` within its allocation
         */
        yalign?: Align | null
        /**
         * The vertical fillment of `terminal` within its allocation
         */
        yfill?: boolean | null
    }

}

export interface Terminal extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own properties of Vte-2.91.Vte.Terminal

    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    allowBold: boolean
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are recognized and displayed.
     */
    allowHyperlink: boolean
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    audibleBell: boolean
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the backspace key.
     */
    backspaceBinding: EraseBinding
    /**
     * Whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    boldIsBright: boolean
    /**
     * Scale factor for the cell height, to increase line spacing. (The font's height is not affected.)
     */
    cellHeightScale: number
    /**
     * Scale factor for the cell width, to increase letter spacing. (The font's width is not affected.)
     */
    cellWidthScale: number
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * 
     * This setting only takes effect the next time the terminal is reset, either
     * via escape sequence or with vte_terminal_reset().
     */
    cjkAmbiguousWidth: number
    /**
     * The current directory URI, or %NULL if unset.
     */
    readonly currentDirectoryUri: string
    /**
     * The current file URI, or %NULL if unset.
     */
    readonly currentFileUri: string
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings:gtk-cursor-blink setting.
     */
    cursorBlinkMode: CursorBlinkMode
    /**
     * Controls the shape of the cursor.
     */
    cursorShape: CursorShape
    /**
     * Controls what string or control sequence the terminal sends to its child
     * when the user presses the delete key.
     */
    deleteBinding: EraseBinding
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     */
    enableBidi: boolean
    enableFallbackScrolling: boolean
    /**
     * Controls whether or not the terminal will shape Arabic text.
     */
    enableShaping: boolean
    /**
     * Controls whether SIXEL image support is enabled.
     */
    enableSixel: boolean
    /**
     * Controls the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding.  The default is defined by the
     * application's locale settings.
     */
    encoding: string
    /**
     * Specifies the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.
     */
    fontDesc: Pango.FontDescription
    /**
     * The terminal's font scale.
     */
    fontScale: number
    /**
     * The currently hovered hyperlink URI, or %NULL if unset.
     */
    readonly hyperlinkHoverUri: string
    readonly iconTitle: string
    /**
     * Controls whether the terminal allows user input. When user input is disabled,
     * key press and mouse button press and motion events are not sent to the
     * terminal's child.
     */
    inputEnabled: boolean
    /**
     * Controls the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.
     */
    pointerAutohide: boolean
    /**
     * The PTY object for the terminal.
     */
    pty: Pty
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback buffer, whenever the terminal's width changes.
     */
    rewrapOnResize: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     */
    scrollOnKeystroke: boolean
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     */
    scrollOnOutput: boolean
    /**
     * Controls whether the terminal's GtkAdjustment values unit is lines
     * or pixels. This can be enabled when the terminal is the child of a
     * GtkScrolledWindow to fix some bugs with its kinetic scrolling.
     */
    scrollUnitIsPixels: boolean
    /**
     * The length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.  Note that this setting only affects the normal screen buffer.
     * For terminal types which have an alternate screen buffer, no scrollback is
     * allowed on the alternate screen buffer.
     */
    scrollbackLines: number
    /**
     * Controls whether or not the terminal will allow blinking text.
     */
    textBlinkMode: TextBlinkMode
    /**
     * The terminal's title.
     */
    readonly windowTitle: string
    /**
     * The set of characters which will be considered parts of a word
     * when doing word-wise selection, in addition to the default which only
     * considers alphanumeric characters part of a word.
     * 
     * If %NULL, a built-in set is used.
     */
    readonly wordCharExceptions: string
    /**
     * The horizontal alignment of `terminal` within its allocation.
     */
    xalign: Align
    /**
     * The horizontal fillment of `terminal` within its allocation.
     */
    xfill: boolean
    /**
     * The vertical alignment of `terminal` within its allocation
     */
    yalign: Align
    /**
     * The vertical fillment of `terminal` within its allocation
     */
    yfill: boolean

    // Own fields of Vte-2.91.Vte.Terminal

    widget: Gtk.Widget

    // Owm methods of Vte-2.91.Vte.Terminal

    // Has conflict: copyClipboard(): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection in the form specified by `format`.
     * 
     * For all formats, the selection data (see #GtkSelectionData) will include the
     * text targets (see gtk_target_list_add_text_targets() and
     * gtk_selection_data_targets_includes_text()). For %VTE_FORMAT_HTML,
     * the selection will also include the "text/html" target, which when requested,
     * returns the HTML data in UTF-16 with a U+FEFF BYTE ORDER MARK character at
     * the start.
     * @param format a #VteFormat
     */
    copyClipboardFormat(format: Format): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_PRIMARY
     * selection.
     */
    copyPrimary(): void
    /**
     * This function does nothing.
     * @param event a #GdkEvent
     * @param regexes an array of #GRegex
     * @param matchFlags the #GRegexMatchFlags to use when matching the regexes
     */
    eventCheckGregexSimple(event: Gdk.Event, regexes: GLib.Regex[], matchFlags: GLib.RegexMatchFlags): [ /* returnType */ boolean, /* matches */ string[] ]
    /**
     * Like vte_terminal_event_check_regex_simple(), but returns an array of strings,
     * containing the matching text (or %NULL if no match) corresponding to each of the
     * regexes in `regexes`.
     * 
     * You must free each string and the array; but note that this is *not* a %NULL-terminated
     * string array, and so you must *not* use g_strfreev() on it.
     * @param event a #GdkEvent
     * @param regexes an array of #VteRegex
     * @param matchFlags PCRE2 match flags, or 0
     */
    eventCheckRegexSimple(event: Gdk.Event, regexes: Regex[], matchFlags: number): string[] | null
    /**
     * Interprets `data` as if it were data received from a child process.
     * @param data a string in the terminal's current encoding
     */
    feed(data: Uint8Array | null): void
    /**
     * Sends a block of UTF-8 text to the child as if it were entered by the user
     * at the keyboard.
     * @param text data to send to the child
     */
    feedChild(text: Uint8Array | null): void
    /**
     * Sends a block of binary data to the child.
     * @param data data to send to the child
     */
    feedChildBinary(data: Uint8Array | null): void
    /**
     * Checks whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     */
    getAllowBold(): boolean
    /**
     * Checks whether or not hyperlinks (OSC 8 escape sequence) are allowed.
     */
    getAllowHyperlink(): boolean
    /**
     * Checks whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     */
    getAudibleBell(): boolean
    /**
     * Checks whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     */
    getBoldIsBright(): boolean
    getCellHeightScale(): number
    getCellWidthScale(): number
    getCharHeight(): number
    getCharWidth(): number
    /**
     * Returns whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     */
    getCjkAmbiguousWidth(): number
    /**
     * Returns the background colour, as used by `terminal` when
     * drawing the background, which may be different from
     * the color set by vte_terminal_set_color_background().
     * 
     * Note: you must only call this function while handling the
     * GtkWidget::draw signal.
     * 
     * This function is rarely useful. One use for it is if you disable
     * drawing the background (see vte_terminal_set_clear_background())
     * and then need to draw the background yourself.
     */
    getColorBackgroundForDraw(): /* color */ Gdk.RGBA
    getColumnCount(): number
    getCurrentDirectoryUri(): string | null
    getCurrentFileUri(): string | null
    /**
     * Returns the currently set cursor blink mode.
     */
    getCursorBlinkMode(): CursorBlinkMode
    /**
     * Reads the location of the insertion cursor and returns it.  The row
     * coordinate is absolute.
     * 
     * This method is unaware of BiDi. The returned column is logical column.
     */
    getCursorPosition(): [ /* column */ number, /* row */ number ]
    /**
     * Returns the currently set cursor shape.
     */
    getCursorShape(): CursorShape
    /**
     * Checks whether the terminal performs bidirectional text rendering.
     */
    getEnableBidi(): boolean
    getEnableFallbackScrolling(): boolean
    /**
     * Checks whether the terminal shapes Arabic text.
     */
    getEnableShaping(): boolean
    getEnableSixel(): boolean
    /**
     * Determines the name of the encoding in which the terminal expects data to be
     * encoded, or %NULL if UTF-8 is in use.
     */
    getEncoding(): string | null
    /**
     * Queries the terminal for information about the fonts which will be
     * used to draw text in the terminal.  The actual font takes the font scale
     * into account, this is not reflected in the return value, the unscaled
     * font is returned.
     */
    getFont(): Pango.FontDescription
    getFontScale(): number
    /**
     * Fills in some `hints` from `terminal'`s geometry. The hints
     * filled are those covered by the %GDK_HINT_RESIZE_INC,
     * %GDK_HINT_MIN_SIZE and %GDK_HINT_BASE_SIZE flags.
     * 
     * See gtk_window_set_geometry_hints() for more information.
     * 
     * `terminal` must be realized (see gtk_widget_get_realized()).
     * @param minRows the minimum number of rows to request
     * @param minColumns the minimum number of columns to request
     */
    getGeometryHints(minRows: number, minColumns: number): /* hints */ Gdk.Geometry
    /**
     * Checks if the terminal currently contains selected text.  Note that this
     * is different from determining if the terminal is the owner of any
     * #GtkClipboard items.
     */
    getHasSelection(): boolean
    getIconTitle(): string | null
    /**
     * Returns whether the terminal allow user input.
     */
    getInputEnabled(): boolean
    /**
     * Determines the value of the terminal's mouse autohide setting.  When
     * autohiding is enabled, the mouse cursor will be hidden when the user presses
     * a key and shown when the user moves the mouse.  This setting can be changed
     * using vte_terminal_set_mouse_autohide().
     */
    getMouseAutohide(): boolean
    /**
     * Returns the #VtePty of `terminal`.
     */
    getPty(): Pty
    /**
     * Checks whether or not the terminal will rewrap its contents upon resize.
     */
    getRewrapOnResize(): boolean
    getRowCount(): number
    getScrollOnKeystroke(): boolean
    getScrollOnOutput(): boolean
    getScrollUnitIsPixels(): boolean
    getScrollbackLines(): number
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.
     * 
     * This method is unaware of BiDi. The columns returned in `attributes` are
     * logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param isSelected a #VteSelectionFunc callback
     */
    getText(isSelected: SelectionFunc | null): [ /* returnType */ string | null, /* attributes */ CharAttributes[] | null ]
    /**
     * Checks whether or not the terminal will allow blinking text.
     */
    getTextBlinkMode(): TextBlinkMode
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.
     * 
     * This method is unaware of BiDi. The columns returned in `attributes` are
     * logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param isSelected a #VteSelectionFunc callback
     */
    getTextIncludeTrailingSpaces(isSelected: SelectionFunc | null): [ /* returnType */ string, /* attributes */ CharAttributes[] ]
    /**
     * Extracts a view of the visible part of the terminal.  If `is_selected` is not
     * %NULL, characters will only be read if `is_selected` returns %TRUE after being
     * passed the column and row, respectively.  A #VteCharAttributes structure
     * is added to `attributes` for each byte added to the returned string detailing
     * the character's position, colors, and other characteristics.  The
     * entire scrollback buffer is scanned, so it is possible to read the entire
     * contents of the buffer using this function.
     * 
     * This method is unaware of BiDi. The columns passed in `start_col` and `end_row,`
     * and returned in `attributes` are logical columns.
     * 
     * Note: since 0.68, passing a non-%NULL `array` parameter is deprecated. Starting with
     * 0.70, passing a non-%NULL `array` parameter will make this function itself return %NULL.
     * @param startRow first row to search for data
     * @param startCol first column to search for data
     * @param endRow last row to search for data
     * @param endCol last column to search for data
     * @param isSelected a #VteSelectionFunc callback
     */
    getTextRange(startRow: number, startCol: number, endRow: number, endCol: number, isSelected: SelectionFunc | null): [ /* returnType */ string | null, /* attributes */ CharAttributes[] | null ]
    getWindowTitle(): string | null
    /**
     * Returns the set of characters which will be considered parts of a word
     * when doing word-wise selection, in addition to the default which only
     * considers alphanumeric characters part of a word.
     * 
     * If %NULL, a built-in set is used.
     */
    getWordCharExceptions(): string | null
    getXalign(): Align
    getXfill(): boolean
    getYalign(): Align
    getYfill(): boolean
    /**
     * Returns a nonempty string: the target of the explicit hyperlink (printed using the OSC 8
     * escape sequence) at the position of the event, or %NULL.
     * 
     * Proper use of the escape sequence should result in URI-encoded URIs with a proper scheme
     * like "http://", "https://", "file://", "mailto:" etc. This is, however, not enforced by VTE.
     * The caller must tolerate the returned string potentially not being a valid URI.
     * @param event a #GdkEvent
     */
    hyperlinkCheckEvent(event: Gdk.Event): string | null
    /**
     * This function does nothing since version 0.60.
     * @param gregex a #GRegex
     * @param gflags the #GRegexMatchFlags to use when matching the regex
     */
    matchAddGregex(gregex: GLib.Regex, gflags: GLib.RegexMatchFlags): number
    /**
     * Adds the regular expression `regex` to the list of matching expressions.  When the
     * user moves the mouse cursor over a section of displayed text which matches
     * this expression, the text will be highlighted.
     * 
     * Note that `regex` should have been created using the <literal>PCRE2_MULTILINE</literal>
     * flag.
     * @param regex a #VteRegex
     * @param flags PCRE2 match flags, or 0
     */
    matchAddRegex(regex: Regex, flags: number): number
    /**
     * Checks if the text in and around the specified position matches any of the
     * regular expressions previously set using vte_terminal_match_add().  If a
     * match exists, the text string is returned and if `tag` is not %NULL, the number
     * associated with the matched regular expression will be stored in `tag`.
     * 
     * If more than one regular expression has been set with
     * vte_terminal_match_add(), then expressions are checked in the order in
     * which they were added.
     * @param column the text column
     * @param row the text row
     */
    matchCheck(column: number, row: number): [ /* returnType */ string | null, /* tag */ number ]
    /**
     * Checks if the text in and around the position of the event matches any of the
     * regular expressions previously set using vte_terminal_match_add().  If a
     * match exists, the text string is returned and if `tag` is not %NULL, the number
     * associated with the matched regular expression will be stored in `tag`.
     * 
     * If more than one regular expression has been set with
     * vte_terminal_match_add(), then expressions are checked in the order in
     * which they were added.
     * @param event a #GdkEvent
     */
    matchCheckEvent(event: Gdk.Event): [ /* returnType */ string | null, /* tag */ number ]
    /**
     * Removes the regular expression which is associated with the given `tag` from
     * the list of expressions which the terminal will highlight when the user
     * moves the mouse cursor over matching text.
     * @param tag the tag of the regex to remove
     */
    matchRemove(tag: number): void
    /**
     * Clears the list of regular expressions the terminal uses to highlight text
     * when the user moves the mouse cursor.
     */
    matchRemoveAll(): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.  The terminal keeps a reference to `cursor`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursor the #GdkCursor which the terminal should use when the pattern is   highlighted, or %NULL to use the standard cursor
     */
    matchSetCursor(tag: number, cursor: Gdk.Cursor | null): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursorName the name of the cursor
     */
    matchSetCursorName(tag: number, cursorName: string): void
    /**
     * Sets which cursor the terminal will use if the pointer is over the pattern
     * specified by `tag`.
     * @param tag the tag of the regex which should use the specified cursor
     * @param cursorType a #GdkCursorType
     */
    matchSetCursorType(tag: number, cursorType: Gdk.CursorType): void
    // Has conflict: pasteClipboard(): void
    /**
     * Sends the contents of the #GDK_SELECTION_PRIMARY selection to the terminal's
     * child. The terminal will call also paste the
     * #GDK_SELECTION_PRIMARY selection when the user clicks with the the second
     * mouse button.
     */
    pastePrimary(): void
    /**
     * Sends `text` to the terminal's child as if retrived from the clipboard,
     * this differs from vte_terminal_feed_child() in that it may process
     * `text` before passing it to the child (e.g. apply bracketed mode)
     * @param text a string to paste
     */
    pasteText(text: string): void
    /**
     * Creates a new #VtePty, sets the emulation property
     * from #VteTerminal:emulation, and sets the size using
     * `terminal'`s size.
     * 
     * See vte_pty_new() for more information.
     * @param flags flags from #VtePtyFlags
     * @param cancellable a #GCancellable, or %NULL
     */
    ptyNewSync(flags: PtyFlags, cancellable: Gio.Cancellable | null): Pty
    /**
     * Resets as much of the terminal's internal state as possible, discarding any
     * unprocessed input data, resetting character attributes, cursor state,
     * national character set state, status line, terminal modes (insert/delete),
     * selection state, and encoding.
     * @param clearTabstops whether to reset tabstops
     * @param clearHistory whether to empty the terminal's scrollback buffer
     */
    reset(clearTabstops: boolean, clearHistory: boolean): void
    /**
     * Searches the next string matching the search regex set with
     * vte_terminal_search_set_regex().
     */
    searchFindNext(): boolean
    /**
     * Searches the previous string matching the search regex set with
     * vte_terminal_search_set_regex().
     */
    searchFindPrevious(): boolean
    searchGetGregex(): GLib.Regex
    searchGetRegex(): Regex
    searchGetWrapAround(): boolean
    /**
     * This function does nothing since version 0.60.
     * @param gregex a #GRegex, or %NULL
     * @param gflags flags from #GRegexMatchFlags
     */
    searchSetGregex(gregex: GLib.Regex | null, gflags: GLib.RegexMatchFlags): void
    /**
     * Sets the regex to search for. Unsets the search regex when passed %NULL.
     * 
     * Note that `regex` should have been created using the
     * <literal>PCRE2_MULTILINE</literal> flag.
     * @param regex a #VteRegex, or %NULL
     * @param flags PCRE2 match flags, or 0
     */
    searchSetRegex(regex: Regex | null, flags: number): void
    /**
     * Sets whether search should wrap around to the beginning of the
     * terminal content when reaching its end.
     * @param wrapAround whether search should wrap
     */
    searchSetWrapAround(wrapAround: boolean): void
    /**
     * Selects all text within the terminal (not including the scrollback buffer).
     */
    selectAll(): void
    /**
     * Controls whether or not the terminal will attempt to draw bold text,
     * by using a bold font variant.
     * @param allowBold %TRUE if the terminal should attempt to draw bold text
     */
    setAllowBold(allowBold: boolean): void
    /**
     * Controls whether or not hyperlinks (OSC 8 escape sequence) are allowed.
     * @param allowHyperlink %TRUE if the terminal should allow hyperlinks
     */
    setAllowHyperlink(allowHyperlink: boolean): void
    /**
     * Controls whether or not the terminal will beep when the child outputs the
     * "bl" sequence.
     * @param isAudible %TRUE if the terminal should beep
     */
    setAudibleBell(isAudible: boolean): void
    /**
     * Modifies the terminal's backspace key binding, which controls what
     * string or control sequence the terminal sends to its child when the user
     * presses the backspace key.
     * @param binding a #VteEraseBinding for the backspace key
     */
    setBackspaceBinding(binding: EraseBinding): void
    /**
     * Sets whether the SGR 1 attribute also switches to the bright counterpart
     * of the first 8 palette colors, in addition to making them bold (legacy behavior)
     * or if SGR 1 only enables bold and leaves the color intact.
     * @param boldIsBright %TRUE if bold should also enable bright
     */
    setBoldIsBright(boldIsBright: boolean): void
    /**
     * Sets the terminal's cell height scale to `scale`.
     * 
     * This can be used to increase the line spacing. (The font's height is not affected.)
     * Valid values go from 1.0 (default) to 2.0 ("double spacing").
     * @param scale the cell height scale
     */
    setCellHeightScale(scale: number): void
    /**
     * Sets the terminal's cell width scale to `scale`.
     * 
     * This can be used to increase the letter spacing. (The font's width is not affected.)
     * Valid values go from 1.0 (default) to 2.0.
     * @param scale the cell width scale
     */
    setCellWidthScale(scale: number): void
    /**
     * This setting controls whether ambiguous-width characters are narrow or wide.
     * (Note that when using a non-UTF-8 encoding set via vte_terminal_set_encoding(),
     * the width of ambiguous-width characters is fixed and determined by the encoding
     * itself.)
     * @param width either 1 (narrow) or 2 (wide)
     */
    setCjkAmbiguousWidth(width: number): void
    /**
     * Sets whether to paint the background with the background colour.
     * The default is %TRUE.
     * 
     * This function is rarely useful. One use for it is to add a background
     * image to the terminal.
     * @param setting whether to clear the background
     */
    setClearBackground(setting: boolean): void
    /**
     * Sets the background color for text which does not have a specific background
     * color assigned.  Only has effect when no background image is set and when
     * the terminal is not transparent.
     * @param background the new background color
     */
    setColorBackground(background: Gdk.RGBA): void
    /**
     * Sets the color used to draw bold text in the default foreground color.
     * If `bold` is %NULL then the default color is used.
     * @param bold the new bold color or %NULL
     */
    setColorBold(bold: Gdk.RGBA | null): void
    /**
     * Sets the background color for text which is under the cursor.  If %NULL, text
     * under the cursor will be drawn with foreground and background colors
     * reversed.
     * @param cursorBackground the new color to use for the text cursor, or %NULL
     */
    setColorCursor(cursorBackground: Gdk.RGBA | null): void
    /**
     * Sets the foreground color for text which is under the cursor.  If %NULL, text
     * under the cursor will be drawn with foreground and background colors
     * reversed.
     * @param cursorForeground the new color to use for the text cursor, or %NULL
     */
    setColorCursorForeground(cursorForeground: Gdk.RGBA | null): void
    /**
     * Sets the foreground color used to draw normal text.
     * @param foreground the new foreground color
     */
    setColorForeground(foreground: Gdk.RGBA): void
    /**
     * Sets the background color for text which is highlighted.  If %NULL,
     * it is unset.  If neither highlight background nor highlight foreground are set,
     * highlighted text (which is usually highlighted because it is selected) will
     * be drawn with foreground and background colors reversed.
     * @param highlightBackground the new color to use for highlighted text, or %NULL
     */
    setColorHighlight(highlightBackground: Gdk.RGBA | null): void
    /**
     * Sets the foreground color for text which is highlighted.  If %NULL,
     * it is unset.  If neither highlight background nor highlight foreground are set,
     * highlighted text (which is usually highlighted because it is selected) will
     * be drawn with foreground and background colors reversed.
     * @param highlightForeground the new color to use for highlighted text, or %NULL
     */
    setColorHighlightForeground(highlightForeground: Gdk.RGBA | null): void
    /**
     * `palette` specifies the new values for the 256 palette colors: 8 standard colors,
     * their 8 bright counterparts, 6x6x6 color cube, and 24 grayscale colors.
     * Omitted entries will default to a hardcoded value.
     * 
     * `palette_size` must be 0, 8, 16, 232 or 256.
     * 
     * If `foreground` is %NULL and `palette_size` is greater than 0, the new foreground
     * color is taken from `palette[`7].  If `background` is %NULL and `palette_size` is
     * greater than 0, the new background color is taken from `palette[`0].
     * @param foreground the new foreground color, or %NULL
     * @param background the new background color, or %NULL
     * @param palette the color palette
     */
    setColors(foreground: Gdk.RGBA | null, background: Gdk.RGBA | null, palette: Gdk.RGBA[] | null): void
    /**
     * Sets whether or not the cursor will blink. Using %VTE_CURSOR_BLINK_SYSTEM
     * will use the #GtkSettings::gtk-cursor-blink setting.
     * @param mode the #VteCursorBlinkMode to use
     */
    setCursorBlinkMode(mode: CursorBlinkMode): void
    /**
     * Sets the shape of the cursor drawn.
     * @param shape the #VteCursorShape to use
     */
    setCursorShape(shape: CursorShape): void
    /**
     * Reset the terminal palette to reasonable compiled-in default color.
     */
    setDefaultColors(): void
    /**
     * Modifies the terminal's delete key binding, which controls what
     * string or control sequence the terminal sends to its child when the user
     * presses the delete key.
     * @param binding a #VteEraseBinding for the delete key
     */
    setDeleteBinding(binding: EraseBinding): void
    /**
     * Controls whether or not the terminal will perform bidirectional text rendering.
     * @param enableBidi %TRUE to enable BiDi support
     */
    setEnableBidi(enableBidi: boolean): void
    /**
     * Controls whether the terminal uses scroll events to scroll the history
     * if the event was not otherwise consumed by it.
     * 
     * This function is rarely useful, except when the terminal is added to a
     * #GtkScrolledWindow, to perform kinetic scrolling (while vte itself does
     * not, yet, implement kinetic scrolling by itself).
     * @param enable whether to enable fallback scrolling
     */
    setEnableFallbackScrolling(enable: boolean): void
    /**
     * Controls whether or not the terminal will shape Arabic text.
     * @param enableShaping %TRUE to enable Arabic shaping
     */
    setEnableShaping(enableShaping: boolean): void
    /**
     * Set whether to enable SIXEL images.
     * @param enabled whether to enable SIXEL images
     */
    setEnableSixel(enabled: boolean): void
    /**
     * Changes the encoding the terminal will expect data from the child to
     * be encoded with.  For certain terminal types, applications executing in the
     * terminal can change the encoding. If `codeset` is %NULL, it uses "UTF-8".
     * 
     * Note: Support for non-UTF-8 is deprecated and may get removed altogether.
     * Instead of this function, you should use a wrapper like luit(1) when
     * spawning the child process.
     * @param codeset target charset, or %NULL to use UTF-8
     */
    setEncoding(codeset: string | null): boolean
    /**
     * Sets the font used for rendering all text displayed by the terminal,
     * overriding any fonts set using gtk_widget_modify_font().  The terminal
     * will immediately attempt to load the desired font, retrieve its
     * metrics, and attempt to resize itself to keep the same number of rows
     * and columns.  The font scale is applied to the specified font.
     * @param fontDesc a #PangoFontDescription for the desired font, or %NULL
     */
    setFont(fontDesc: Pango.FontDescription | null): void
    /**
     * Sets the terminal's font scale to `scale`.
     * @param scale the font scale
     */
    setFontScale(scale: number): void
    /**
     * Sets `terminal` as `window'`s geometry widget. See
     * gtk_window_set_geometry_hints() for more information.
     * 
     * `terminal` must be realized (see gtk_widget_get_realized()).
     * @param window a #GtkWindow
     */
    setGeometryHintsForWindow(window: Gtk.Window): void
    /**
     * Enables or disables user input. When user input is disabled,
     * the terminal's child will not receive any key press, or mouse button
     * press or motion events sent to it.
     * @param enabled whether to enable user input
     */
    setInputEnabled(enabled: boolean): void
    /**
     * Changes the value of the terminal's mouse autohide setting.  When autohiding
     * is enabled, the mouse cursor will be hidden when the user presses a key and
     * shown when the user moves the mouse.  This setting can be read using
     * vte_terminal_get_mouse_autohide().
     * @param setting whether the mouse pointer should autohide
     */
    setMouseAutohide(setting: boolean): void
    /**
     * Sets `pty` as the PTY to use in `terminal`.
     * Use %NULL to unset the PTY.
     * @param pty a #VtePty, or %NULL
     */
    setPty(pty: Pty | null): void
    /**
     * Controls whether or not the terminal will rewrap its contents, including
     * the scrollback history, whenever the terminal's width changes.
     * @param rewrap %TRUE if the terminal should rewrap on resize
     */
    setRewrapOnResize(rewrap: boolean): void
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the user presses a key.  Modifier keys do not
     * trigger this behavior.
     * @param scroll whether the terminal should scroll on keystrokes
     */
    setScrollOnKeystroke(scroll: boolean): void
    /**
     * Controls whether or not the terminal will forcibly scroll to the bottom of
     * the viewable history when the new data is received from the child.
     * @param scroll whether the terminal should scroll on output
     */
    setScrollOnOutput(scroll: boolean): void
    /**
     * Controls whether the terminal's scroll unit is lines or pixels.
     * 
     * This function is rarely useful, except when the terminal is added to a
     * #GtkScrolledWindow.
     * @param enable whether to use pixels as scroll unit
     */
    setScrollUnitIsPixels(enable: boolean): void
    /**
     * Sets the length of the scrollback buffer used by the terminal.  The size of
     * the scrollback buffer will be set to the larger of this value and the number
     * of visible rows the widget can display, so 0 can safely be used to disable
     * scrollback.
     * 
     * A negative value means "infinite scrollback".
     * 
     * Note that this setting only affects the normal screen buffer.
     * No scrollback is allowed on the alternate screen buffer.
     * @param lines the length of the history buffer
     */
    setScrollbackLines(lines: number): void
    /**
     * Attempts to change the terminal's size in terms of rows and columns.  If
     * the attempt succeeds, the widget will resize itself to the proper size.
     * @param columns the desired number of columns
     * @param rows the desired number of rows
     */
    setSize(columns: number, rows: number): void
    /**
     * Controls whether or not the terminal will allow blinking text.
     * @param textBlinkMode the #VteTextBlinkMode to use
     */
    setTextBlinkMode(textBlinkMode: TextBlinkMode): void
    /**
     * With this function you can provide a set of characters which will
     * be considered parts of a word when doing word-wise selection, in
     * addition to the default which only considers alphanumeric characters
     * part of a word.
     * 
     * The characters in `exceptions` must be non-alphanumeric, each character
     * must occur only once, and if `exceptions` contains the character
     * U+002D HYPHEN-MINUS, it must be at the start of the string.
     * 
     * Use %NULL to reset the set of exception characters to the default.
     * @param exceptions a string of ASCII punctuation characters, or %NULL
     */
    setWordCharExceptions(exceptions: string): void
    /**
     * Sets the horizontal alignment of `terminal` within its allocation.
     * 
     * Note: %VTE_ALIGN_START_FILL is not supported, and will be treated
     *   like %VTE_ALIGN_START.
     * @param align alignment value from #VteAlign
     */
    setXalign(align: Align): void
    /**
     * Sets the horizontal fillment of `terminal` within its allocation.
     * 
     * Note: %VTE_FILL_START_FILL is not supported, and will be treated
     *   like %VTE_FILL_START.
     * @param fill fillment value from #VteFill
     */
    setXfill(fill: boolean): void
    /**
     * Sets the vertical alignment of `terminal` within its allocation.
     * @param align alignment value from #VteAlign
     */
    setYalign(align: Align): void
    /**
     * Sets the vertical fillment of `terminal` within its allocation.
     * @param fill fillment value from #VteFill
     */
    setYfill(fill: boolean): void
    /**
     * A convenience function that wraps creating the #VtePty and spawning
     * the child process on it. Like vte_terminal_spawn_with_fds_async(),
     * except that this function does not allow passing file descriptors to
     * the child process. See vte_terminal_spawn_with_fds_async() for more
     * information.
     * @param ptyFlags flags from #VtePtyFlags
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnAsync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void
    /**
     * Starts the specified command under a newly-allocated controlling
     * pseudo-terminal.  The `argv` and `envv` lists should be %NULL-terminated.
     * The "TERM" environment variable is automatically set to a default value,
     * but can be overridden from `envv`.
     * `pty_flags` controls logging the session to the specified system log files.
     * 
     * Note that %G_SPAWN_DO_NOT_REAP_CHILD will always be added to `spawn_flags`.
     * 
     * Note also that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY.
     * 
     * Note that all open file descriptors will be closed in the child. If you want
     * to keep some file descriptor open for use in the child process, you need to
     * use a child setup function that unsets the FD_CLOEXEC flag on that file
     * descriptor.
     * 
     * See vte_pty_new(), g_spawn_async() and vte_terminal_watch_child() for more information.
     * 
     * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
     * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory,`
     * e.g. by using vte_terminal_get_current_directory_uri(), g_get_current_dir() or get_current_dir_name().
     * @param ptyFlags flags from #VtePtyFlags
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param childSetup an extra child setup function to run in the child just before exec(), or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnSync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, spawnFlags: GLib.SpawnFlags, childSetup: GLib.SpawnChildSetupFunc | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* childPid */ GLib.Pid ]
    /**
     * A convenience function that wraps creating the #VtePty and spawning
     * the child process on it. See vte_pty_new_sync(), vte_pty_spawn_with_fds_async(),
     * and vte_pty_spawn_finish() for more information.
     * 
     * When the operation is finished successfully, `callback` will be called
     * with the child #GPid, and a %NULL #GError. The child PID will already be
     * watched via vte_terminal_watch_child().
     * 
     * When the operation fails, `callback` will be called with a -1 #GPid,
     * and a non-%NULL #GError containing the error information.
     * 
     * Note that %G_SPAWN_STDOUT_TO_DEV_NULL, %G_SPAWN_STDERR_TO_DEV_NULL,
     * and %G_SPAWN_CHILD_INHERITS_STDIN are not supported in `spawn_flags,` since
     * stdin, stdout and stderr of the child process will always be connected to
     * the PTY.
     * 
     * If `fds` is not %NULL, the child process will map the file descriptors from
     * `fds` according to `map_fds;` `n_map_fds` must be less or equal to `n_fds`.
     * This function will take ownership of the file descriptors in `fds;`
     * you must not use or close them after this call.
     * 
     * Note that all  open file descriptors apart from those mapped as above
     * will be closed in the child. (If you want to keep some other file descriptor
     * open for use in the child process, you need to use a child setup function
     * that unsets the FD_CLOEXEC flag on that file descriptor manually.)
     * 
     * Beginning with 0.60, and on linux only, and unless %VTE_SPAWN_NO_SYSTEMD_SCOPE is
     * passed in `spawn_flags,` the newly created child process will be moved to its own
     * systemd user scope; and if %VTE_SPAWN_REQUIRE_SYSTEMD_SCOPE is passed, and creation
     * of the systemd user scope fails, the whole spawn will fail.
     * You can override the options used for the systemd user scope by
     * providing a systemd override file for 'vte-spawn-.scope' unit. See man:systemd.unit(5)
     * for further information.
     * 
     * Note that if `terminal` has been destroyed before the operation is called,
     * `callback` will be called with a %NULL `terminal;` you must not do anything
     * in the callback besides freeing any resources associated with `user_data,`
     * but taking care not to access the now-destroyed #VteTerminal. Note that
     * in this case, if spawning was successful, the child process will be aborted
     * automatically.
     * 
     * Beginning with 0.52, sets PWD to `working_directory` in order to preserve symlink components.
     * The caller should also make sure that symlinks were preserved while constructing the value of `working_directory,`
     * e.g. by using vte_terminal_get_current_directory_uri(), g_get_current_dir() or get_current_dir_name().
     * @param ptyFlags flags from #VtePtyFlags
     * @param workingDirectory the name of a directory the command should start   in, or %NULL to use the current working directory
     * @param argv child's argument vector
     * @param envv a list of environment   variables to be added to the environment before starting the process, or %NULL
     * @param fds an array of file descriptors, or %NULL
     * @param mapFds an array of integers, or %NULL
     * @param spawnFlags flags from #GSpawnFlags
     * @param timeout a timeout value in ms, -1 for the default timeout, or G_MAXINT to wait indefinitely
     * @param cancellable a #GCancellable, or %NULL
     */
    spawnWithFdsAsync(ptyFlags: PtyFlags, workingDirectory: string | null, argv: string[], envv: string[] | null, fds: number[] | null, mapFds: number[] | null, spawnFlags: GLib.SpawnFlags, timeout: number, cancellable: Gio.Cancellable | null): void
    /**
     * Clears the current selection.
     */
    unselectAll(): void
    /**
     * Watches `child_pid`. When the process exists, the #VteTerminal::child-exited
     * signal will be called with the child's exit status.
     * 
     * Prior to calling this function, a #VtePty must have been set in `terminal`
     * using vte_terminal_set_pty().
     * When the child exits, the terminal's #VtePty will be set to %NULL.
     * 
     * Note: g_child_watch_add() or g_child_watch_add_full() must not have
     * been called for `child_pid,` nor a #GSource for it been created with
     * g_child_watch_source_new().
     * 
     * Note: when using the g_spawn_async() family of functions,
     * the %G_SPAWN_DO_NOT_REAP_CHILD flag MUST have been passed.
     * @param childPid a #GPid
     */
    watchChild(childPid: GLib.Pid): void
    /**
     * Write contents of the current contents of `terminal` (including any
     * scrollback history) to `stream` according to `flags`.
     * 
     * If `cancellable` is not %NULL, then the operation can be cancelled by triggering
     * the cancellable object from another thread. If the operation was cancelled,
     * the error %G_IO_ERROR_CANCELLED will be returned in `error`.
     * 
     * This is a synchronous operation and will make the widget (and input
     * processing) during the write operation, which may take a long time
     * depending on scrollback history and `stream` availability for writing.
     * @param stream a #GOutputStream to write to
     * @param flags a set of #VteWriteFlags
     * @param cancellable a #GCancellable object, or %NULL
     */
    writeContentsSync(stream: Gio.OutputStream, flags: WriteFlags, cancellable: Gio.Cancellable | null): boolean

    // Conflicting methods

    /**
     * Retrieves the name of a widget. See gtk_widget_set_name() for the
     * significance of widget names.
     */
    getName(): string

    // Overloads of getName

    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Gets the name of the `buildable` object.
     * 
     * #GtkBuilder sets the name based on the
     * [GtkBuilder UI definition][BUILDER-UI]
     * used to construct the `buildable`.
     * @virtual 
     */
    getName(): string
    /**
     * Widgets can be named, which allows you to refer to them from a
     * CSS file. You can apply a style to widgets with a particular name
     * in the CSS file. See the documentation for the CSS syntax (on the
     * same page as the docs for #GtkStyleContext).
     * 
     * Note that the CSS syntax has certain special characters to delimit
     * and represent elements in a selector (period, #, >, *...), so using
     * these will make your widget impossible to match by name. Any combination
     * of alphanumeric symbols, dashes and underscores will suffice.
     * @param name name for the widget
     */
    setName(name: string): void

    // Overloads of setName

    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
    /**
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void

    // Own virtual methods of Vte-2.91.Vte.Terminal

    bell(): void
    charSizeChanged(charWidth: number, charHeight: number): void
    childExited(status: number): void
    commit(text: string, size: number): void
    contentsChanged(): void
    /**
     * Places the selected text in the terminal in the #GDK_SELECTION_CLIPBOARD
     * selection.
     * @virtual 
     */
    copyClipboard(): void
    cursorMoved(): void
    decreaseFontSize(): void
    deiconifyWindow(): void
    encodingChanged(): void
    eof(): void
    iconTitleChanged(): void
    iconifyWindow(): void
    increaseFontSize(): void
    lowerWindow(): void
    maximizeWindow(): void
    moveWindow(x: number, y: number): void
    /**
     * Sends the contents of the #GDK_SELECTION_CLIPBOARD selection to the
     * terminal's child. It's called on paste menu item, or when
     * user presses Shift+Insert.
     * @virtual 
     */
    pasteClipboard(): void
    raiseWindow(): void
    refreshWindow(): void
    resizeWindow(width: number, height: number): void
    restoreWindow(): void
    selectionChanged(): void
    textDeleted(): void
    textInserted(): void
    textModified(): void
    textScrolled(delta: number): void
    windowTitleChanged(): void

    // Own signals of Vte-2.91.Vte.Terminal

    connect(sigName: "bell", callback: Terminal.BellSignalCallback): number
    on(sigName: "bell", callback: Terminal.BellSignalCallback): number
    once(sigName: "bell", callback: Terminal.BellSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "bell", ...args: any[]): void
    connect(sigName: "char-size-changed", callback: Terminal.CharSizeChangedSignalCallback): number
    on(sigName: "char-size-changed", callback: Terminal.CharSizeChangedSignalCallback): number
    once(sigName: "char-size-changed", callback: Terminal.CharSizeChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "char-size-changed", height: number, ...args: any[]): void
    connect(sigName: "child-exited", callback: Terminal.ChildExitedSignalCallback): number
    on(sigName: "child-exited", callback: Terminal.ChildExitedSignalCallback): number
    once(sigName: "child-exited", callback: Terminal.ChildExitedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "child-exited", ...args: any[]): void
    connect(sigName: "commit", callback: Terminal.CommitSignalCallback): number
    on(sigName: "commit", callback: Terminal.CommitSignalCallback): number
    once(sigName: "commit", callback: Terminal.CommitSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "commit", size: number, ...args: any[]): void
    connect(sigName: "contents-changed", callback: Terminal.ContentsChangedSignalCallback): number
    on(sigName: "contents-changed", callback: Terminal.ContentsChangedSignalCallback): number
    once(sigName: "contents-changed", callback: Terminal.ContentsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "contents-changed", ...args: any[]): void
    connect(sigName: "copy-clipboard", callback: Terminal.CopyClipboardSignalCallback): number
    on(sigName: "copy-clipboard", callback: Terminal.CopyClipboardSignalCallback): number
    once(sigName: "copy-clipboard", callback: Terminal.CopyClipboardSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "copy-clipboard", ...args: any[]): void
    connect(sigName: "current-directory-uri-changed", callback: Terminal.CurrentDirectoryUriChangedSignalCallback): number
    on(sigName: "current-directory-uri-changed", callback: Terminal.CurrentDirectoryUriChangedSignalCallback): number
    once(sigName: "current-directory-uri-changed", callback: Terminal.CurrentDirectoryUriChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "current-directory-uri-changed", ...args: any[]): void
    connect(sigName: "current-file-uri-changed", callback: Terminal.CurrentFileUriChangedSignalCallback): number
    on(sigName: "current-file-uri-changed", callback: Terminal.CurrentFileUriChangedSignalCallback): number
    once(sigName: "current-file-uri-changed", callback: Terminal.CurrentFileUriChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "current-file-uri-changed", ...args: any[]): void
    connect(sigName: "cursor-moved", callback: Terminal.CursorMovedSignalCallback): number
    on(sigName: "cursor-moved", callback: Terminal.CursorMovedSignalCallback): number
    once(sigName: "cursor-moved", callback: Terminal.CursorMovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "cursor-moved", ...args: any[]): void
    connect(sigName: "decrease-font-size", callback: Terminal.DecreaseFontSizeSignalCallback): number
    on(sigName: "decrease-font-size", callback: Terminal.DecreaseFontSizeSignalCallback): number
    once(sigName: "decrease-font-size", callback: Terminal.DecreaseFontSizeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "decrease-font-size", ...args: any[]): void
    connect(sigName: "deiconify-window", callback: Terminal.DeiconifyWindowSignalCallback): number
    on(sigName: "deiconify-window", callback: Terminal.DeiconifyWindowSignalCallback): number
    once(sigName: "deiconify-window", callback: Terminal.DeiconifyWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "deiconify-window", ...args: any[]): void
    connect(sigName: "encoding-changed", callback: Terminal.EncodingChangedSignalCallback): number
    on(sigName: "encoding-changed", callback: Terminal.EncodingChangedSignalCallback): number
    once(sigName: "encoding-changed", callback: Terminal.EncodingChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "encoding-changed", ...args: any[]): void
    connect(sigName: "eof", callback: Terminal.EofSignalCallback): number
    on(sigName: "eof", callback: Terminal.EofSignalCallback): number
    once(sigName: "eof", callback: Terminal.EofSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "eof", ...args: any[]): void
    connect(sigName: "hyperlink-hover-uri-changed", callback: Terminal.HyperlinkHoverUriChangedSignalCallback): number
    on(sigName: "hyperlink-hover-uri-changed", callback: Terminal.HyperlinkHoverUriChangedSignalCallback): number
    once(sigName: "hyperlink-hover-uri-changed", callback: Terminal.HyperlinkHoverUriChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "hyperlink-hover-uri-changed", bbox: Gdk.Rectangle, ...args: any[]): void
    connect(sigName: "icon-title-changed", callback: Terminal.IconTitleChangedSignalCallback): number
    on(sigName: "icon-title-changed", callback: Terminal.IconTitleChangedSignalCallback): number
    once(sigName: "icon-title-changed", callback: Terminal.IconTitleChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "icon-title-changed", ...args: any[]): void
    connect(sigName: "iconify-window", callback: Terminal.IconifyWindowSignalCallback): number
    on(sigName: "iconify-window", callback: Terminal.IconifyWindowSignalCallback): number
    once(sigName: "iconify-window", callback: Terminal.IconifyWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "iconify-window", ...args: any[]): void
    connect(sigName: "increase-font-size", callback: Terminal.IncreaseFontSizeSignalCallback): number
    on(sigName: "increase-font-size", callback: Terminal.IncreaseFontSizeSignalCallback): number
    once(sigName: "increase-font-size", callback: Terminal.IncreaseFontSizeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "increase-font-size", ...args: any[]): void
    connect(sigName: "lower-window", callback: Terminal.LowerWindowSignalCallback): number
    on(sigName: "lower-window", callback: Terminal.LowerWindowSignalCallback): number
    once(sigName: "lower-window", callback: Terminal.LowerWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "lower-window", ...args: any[]): void
    connect(sigName: "maximize-window", callback: Terminal.MaximizeWindowSignalCallback): number
    on(sigName: "maximize-window", callback: Terminal.MaximizeWindowSignalCallback): number
    once(sigName: "maximize-window", callback: Terminal.MaximizeWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "maximize-window", ...args: any[]): void
    connect(sigName: "move-window", callback: Terminal.MoveWindowSignalCallback): number
    on(sigName: "move-window", callback: Terminal.MoveWindowSignalCallback): number
    once(sigName: "move-window", callback: Terminal.MoveWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-window", y: number, ...args: any[]): void
    connect(sigName: "paste-clipboard", callback: Terminal.PasteClipboardSignalCallback): number
    on(sigName: "paste-clipboard", callback: Terminal.PasteClipboardSignalCallback): number
    once(sigName: "paste-clipboard", callback: Terminal.PasteClipboardSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "paste-clipboard", ...args: any[]): void
    connect(sigName: "raise-window", callback: Terminal.RaiseWindowSignalCallback): number
    on(sigName: "raise-window", callback: Terminal.RaiseWindowSignalCallback): number
    once(sigName: "raise-window", callback: Terminal.RaiseWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "raise-window", ...args: any[]): void
    connect(sigName: "refresh-window", callback: Terminal.RefreshWindowSignalCallback): number
    on(sigName: "refresh-window", callback: Terminal.RefreshWindowSignalCallback): number
    once(sigName: "refresh-window", callback: Terminal.RefreshWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "refresh-window", ...args: any[]): void
    connect(sigName: "resize-window", callback: Terminal.ResizeWindowSignalCallback): number
    on(sigName: "resize-window", callback: Terminal.ResizeWindowSignalCallback): number
    once(sigName: "resize-window", callback: Terminal.ResizeWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "resize-window", height: number, ...args: any[]): void
    connect(sigName: "restore-window", callback: Terminal.RestoreWindowSignalCallback): number
    on(sigName: "restore-window", callback: Terminal.RestoreWindowSignalCallback): number
    once(sigName: "restore-window", callback: Terminal.RestoreWindowSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "restore-window", ...args: any[]): void
    connect(sigName: "selection-changed", callback: Terminal.SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: Terminal.SelectionChangedSignalCallback): number
    once(sigName: "selection-changed", callback: Terminal.SelectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "text-deleted", callback: Terminal.TextDeletedSignalCallback): number
    on(sigName: "text-deleted", callback: Terminal.TextDeletedSignalCallback): number
    once(sigName: "text-deleted", callback: Terminal.TextDeletedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "text-deleted", ...args: any[]): void
    connect(sigName: "text-inserted", callback: Terminal.TextInsertedSignalCallback): number
    on(sigName: "text-inserted", callback: Terminal.TextInsertedSignalCallback): number
    once(sigName: "text-inserted", callback: Terminal.TextInsertedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "text-inserted", ...args: any[]): void
    connect(sigName: "text-modified", callback: Terminal.TextModifiedSignalCallback): number
    on(sigName: "text-modified", callback: Terminal.TextModifiedSignalCallback): number
    once(sigName: "text-modified", callback: Terminal.TextModifiedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "text-modified", ...args: any[]): void
    connect(sigName: "text-scrolled", callback: Terminal.TextScrolledSignalCallback): number
    on(sigName: "text-scrolled", callback: Terminal.TextScrolledSignalCallback): number
    once(sigName: "text-scrolled", callback: Terminal.TextScrolledSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "text-scrolled", ...args: any[]): void
    connect(sigName: "window-title-changed", callback: Terminal.WindowTitleChangedSignalCallback): number
    on(sigName: "window-title-changed", callback: Terminal.WindowTitleChangedSignalCallback): number
    once(sigName: "window-title-changed", callback: Terminal.WindowTitleChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "window-title-changed", ...args: any[]): void

    // Class property signals of Vte-2.91.Vte.Terminal

    connect(sigName: "notify::allow-bold", callback: any): number
    on(sigName: "notify::allow-bold", callback: any): number
    once(sigName: "notify::allow-bold", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-bold", ...args: any[]): void
    connect(sigName: "notify::allow-hyperlink", callback: any): number
    on(sigName: "notify::allow-hyperlink", callback: any): number
    once(sigName: "notify::allow-hyperlink", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::allow-hyperlink", ...args: any[]): void
    connect(sigName: "notify::audible-bell", callback: any): number
    on(sigName: "notify::audible-bell", callback: any): number
    once(sigName: "notify::audible-bell", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::audible-bell", ...args: any[]): void
    connect(sigName: "notify::backspace-binding", callback: any): number
    on(sigName: "notify::backspace-binding", callback: any): number
    once(sigName: "notify::backspace-binding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backspace-binding", ...args: any[]): void
    connect(sigName: "notify::bold-is-bright", callback: any): number
    on(sigName: "notify::bold-is-bright", callback: any): number
    once(sigName: "notify::bold-is-bright", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bold-is-bright", ...args: any[]): void
    connect(sigName: "notify::cell-height-scale", callback: any): number
    on(sigName: "notify::cell-height-scale", callback: any): number
    once(sigName: "notify::cell-height-scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-height-scale", ...args: any[]): void
    connect(sigName: "notify::cell-width-scale", callback: any): number
    on(sigName: "notify::cell-width-scale", callback: any): number
    once(sigName: "notify::cell-width-scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-width-scale", ...args: any[]): void
    connect(sigName: "notify::cjk-ambiguous-width", callback: any): number
    on(sigName: "notify::cjk-ambiguous-width", callback: any): number
    once(sigName: "notify::cjk-ambiguous-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cjk-ambiguous-width", ...args: any[]): void
    connect(sigName: "notify::current-directory-uri", callback: any): number
    on(sigName: "notify::current-directory-uri", callback: any): number
    once(sigName: "notify::current-directory-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-directory-uri", ...args: any[]): void
    connect(sigName: "notify::current-file-uri", callback: any): number
    on(sigName: "notify::current-file-uri", callback: any): number
    once(sigName: "notify::current-file-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-file-uri", ...args: any[]): void
    connect(sigName: "notify::cursor-blink-mode", callback: any): number
    on(sigName: "notify::cursor-blink-mode", callback: any): number
    once(sigName: "notify::cursor-blink-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-blink-mode", ...args: any[]): void
    connect(sigName: "notify::cursor-shape", callback: any): number
    on(sigName: "notify::cursor-shape", callback: any): number
    once(sigName: "notify::cursor-shape", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor-shape", ...args: any[]): void
    connect(sigName: "notify::delete-binding", callback: any): number
    on(sigName: "notify::delete-binding", callback: any): number
    once(sigName: "notify::delete-binding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::delete-binding", ...args: any[]): void
    connect(sigName: "notify::enable-bidi", callback: any): number
    on(sigName: "notify::enable-bidi", callback: any): number
    once(sigName: "notify::enable-bidi", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-bidi", ...args: any[]): void
    connect(sigName: "notify::enable-fallback-scrolling", callback: any): number
    on(sigName: "notify::enable-fallback-scrolling", callback: any): number
    once(sigName: "notify::enable-fallback-scrolling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-fallback-scrolling", ...args: any[]): void
    connect(sigName: "notify::enable-shaping", callback: any): number
    on(sigName: "notify::enable-shaping", callback: any): number
    once(sigName: "notify::enable-shaping", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-shaping", ...args: any[]): void
    connect(sigName: "notify::enable-sixel", callback: any): number
    on(sigName: "notify::enable-sixel", callback: any): number
    once(sigName: "notify::enable-sixel", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-sixel", ...args: any[]): void
    connect(sigName: "notify::encoding", callback: any): number
    on(sigName: "notify::encoding", callback: any): number
    once(sigName: "notify::encoding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::encoding", ...args: any[]): void
    connect(sigName: "notify::font-desc", callback: any): number
    on(sigName: "notify::font-desc", callback: any): number
    once(sigName: "notify::font-desc", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-desc", ...args: any[]): void
    connect(sigName: "notify::font-scale", callback: any): number
    on(sigName: "notify::font-scale", callback: any): number
    once(sigName: "notify::font-scale", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::font-scale", ...args: any[]): void
    connect(sigName: "notify::hyperlink-hover-uri", callback: any): number
    on(sigName: "notify::hyperlink-hover-uri", callback: any): number
    once(sigName: "notify::hyperlink-hover-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hyperlink-hover-uri", ...args: any[]): void
    connect(sigName: "notify::icon-title", callback: any): number
    on(sigName: "notify::icon-title", callback: any): number
    once(sigName: "notify::icon-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-title", ...args: any[]): void
    connect(sigName: "notify::input-enabled", callback: any): number
    on(sigName: "notify::input-enabled", callback: any): number
    once(sigName: "notify::input-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::input-enabled", ...args: any[]): void
    connect(sigName: "notify::pointer-autohide", callback: any): number
    on(sigName: "notify::pointer-autohide", callback: any): number
    once(sigName: "notify::pointer-autohide", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pointer-autohide", ...args: any[]): void
    connect(sigName: "notify::pty", callback: any): number
    on(sigName: "notify::pty", callback: any): number
    once(sigName: "notify::pty", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pty", ...args: any[]): void
    connect(sigName: "notify::rewrap-on-resize", callback: any): number
    on(sigName: "notify::rewrap-on-resize", callback: any): number
    once(sigName: "notify::rewrap-on-resize", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::rewrap-on-resize", ...args: any[]): void
    connect(sigName: "notify::scroll-on-keystroke", callback: any): number
    on(sigName: "notify::scroll-on-keystroke", callback: any): number
    once(sigName: "notify::scroll-on-keystroke", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-on-keystroke", ...args: any[]): void
    connect(sigName: "notify::scroll-on-output", callback: any): number
    on(sigName: "notify::scroll-on-output", callback: any): number
    once(sigName: "notify::scroll-on-output", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-on-output", ...args: any[]): void
    connect(sigName: "notify::scroll-unit-is-pixels", callback: any): number
    on(sigName: "notify::scroll-unit-is-pixels", callback: any): number
    once(sigName: "notify::scroll-unit-is-pixels", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scroll-unit-is-pixels", ...args: any[]): void
    connect(sigName: "notify::scrollback-lines", callback: any): number
    on(sigName: "notify::scrollback-lines", callback: any): number
    once(sigName: "notify::scrollback-lines", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scrollback-lines", ...args: any[]): void
    connect(sigName: "notify::text-blink-mode", callback: any): number
    on(sigName: "notify::text-blink-mode", callback: any): number
    once(sigName: "notify::text-blink-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-blink-mode", ...args: any[]): void
    connect(sigName: "notify::window-title", callback: any): number
    on(sigName: "notify::window-title", callback: any): number
    once(sigName: "notify::window-title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-title", ...args: any[]): void
    connect(sigName: "notify::word-char-exceptions", callback: any): number
    on(sigName: "notify::word-char-exceptions", callback: any): number
    once(sigName: "notify::word-char-exceptions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::word-char-exceptions", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xfill", callback: any): number
    on(sigName: "notify::xfill", callback: any): number
    once(sigName: "notify::xfill", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xfill", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::yfill", callback: any): number
    on(sigName: "notify::yfill", callback: any): number
    once(sigName: "notify::yfill", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yfill", ...args: any[]): void
    connect(sigName: "notify::app-paintable", callback: any): number
    on(sigName: "notify::app-paintable", callback: any): number
    once(sigName: "notify::app-paintable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::app-paintable", ...args: any[]): void
    connect(sigName: "notify::can-default", callback: any): number
    on(sigName: "notify::can-default", callback: any): number
    once(sigName: "notify::can-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-default", ...args: any[]): void
    connect(sigName: "notify::can-focus", callback: any): number
    on(sigName: "notify::can-focus", callback: any): number
    once(sigName: "notify::can-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-focus", ...args: any[]): void
    connect(sigName: "notify::composite-child", callback: any): number
    on(sigName: "notify::composite-child", callback: any): number
    once(sigName: "notify::composite-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite-child", ...args: any[]): void
    connect(sigName: "notify::double-buffered", callback: any): number
    on(sigName: "notify::double-buffered", callback: any): number
    once(sigName: "notify::double-buffered", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::double-buffered", ...args: any[]): void
    connect(sigName: "notify::events", callback: any): number
    on(sigName: "notify::events", callback: any): number
    once(sigName: "notify::events", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::events", ...args: any[]): void
    connect(sigName: "notify::expand", callback: any): number
    on(sigName: "notify::expand", callback: any): number
    once(sigName: "notify::expand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expand", ...args: any[]): void
    connect(sigName: "notify::focus-on-click", callback: any): number
    on(sigName: "notify::focus-on-click", callback: any): number
    once(sigName: "notify::focus-on-click", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-click", ...args: any[]): void
    connect(sigName: "notify::halign", callback: any): number
    on(sigName: "notify::halign", callback: any): number
    once(sigName: "notify::halign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::halign", ...args: any[]): void
    connect(sigName: "notify::has-default", callback: any): number
    on(sigName: "notify::has-default", callback: any): number
    once(sigName: "notify::has-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-default", ...args: any[]): void
    connect(sigName: "notify::has-focus", callback: any): number
    on(sigName: "notify::has-focus", callback: any): number
    once(sigName: "notify::has-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-focus", ...args: any[]): void
    connect(sigName: "notify::has-tooltip", callback: any): number
    on(sigName: "notify::has-tooltip", callback: any): number
    once(sigName: "notify::has-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-tooltip", ...args: any[]): void
    connect(sigName: "notify::height-request", callback: any): number
    on(sigName: "notify::height-request", callback: any): number
    once(sigName: "notify::height-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height-request", ...args: any[]): void
    connect(sigName: "notify::hexpand", callback: any): number
    on(sigName: "notify::hexpand", callback: any): number
    once(sigName: "notify::hexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand", ...args: any[]): void
    connect(sigName: "notify::hexpand-set", callback: any): number
    on(sigName: "notify::hexpand-set", callback: any): number
    once(sigName: "notify::hexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hexpand-set", ...args: any[]): void
    connect(sigName: "notify::is-focus", callback: any): number
    on(sigName: "notify::is-focus", callback: any): number
    once(sigName: "notify::is-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-focus", ...args: any[]): void
    connect(sigName: "notify::margin", callback: any): number
    on(sigName: "notify::margin", callback: any): number
    once(sigName: "notify::margin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin", ...args: any[]): void
    connect(sigName: "notify::margin-bottom", callback: any): number
    on(sigName: "notify::margin-bottom", callback: any): number
    once(sigName: "notify::margin-bottom", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-bottom", ...args: any[]): void
    connect(sigName: "notify::margin-end", callback: any): number
    on(sigName: "notify::margin-end", callback: any): number
    once(sigName: "notify::margin-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-end", ...args: any[]): void
    connect(sigName: "notify::margin-left", callback: any): number
    on(sigName: "notify::margin-left", callback: any): number
    once(sigName: "notify::margin-left", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-left", ...args: any[]): void
    connect(sigName: "notify::margin-right", callback: any): number
    on(sigName: "notify::margin-right", callback: any): number
    once(sigName: "notify::margin-right", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-right", ...args: any[]): void
    connect(sigName: "notify::margin-start", callback: any): number
    on(sigName: "notify::margin-start", callback: any): number
    once(sigName: "notify::margin-start", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-start", ...args: any[]): void
    connect(sigName: "notify::margin-top", callback: any): number
    on(sigName: "notify::margin-top", callback: any): number
    once(sigName: "notify::margin-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::margin-top", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::no-show-all", callback: any): number
    on(sigName: "notify::no-show-all", callback: any): number
    once(sigName: "notify::no-show-all", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::no-show-all", ...args: any[]): void
    connect(sigName: "notify::opacity", callback: any): number
    on(sigName: "notify::opacity", callback: any): number
    once(sigName: "notify::opacity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opacity", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::receives-default", callback: any): number
    on(sigName: "notify::receives-default", callback: any): number
    once(sigName: "notify::receives-default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::receives-default", ...args: any[]): void
    connect(sigName: "notify::scale-factor", callback: any): number
    on(sigName: "notify::scale-factor", callback: any): number
    once(sigName: "notify::scale-factor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scale-factor", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::style", callback: any): number
    on(sigName: "notify::style", callback: any): number
    once(sigName: "notify::style", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::style", ...args: any[]): void
    connect(sigName: "notify::tooltip-markup", callback: any): number
    on(sigName: "notify::tooltip-markup", callback: any): number
    once(sigName: "notify::tooltip-markup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-markup", ...args: any[]): void
    connect(sigName: "notify::tooltip-text", callback: any): number
    on(sigName: "notify::tooltip-text", callback: any): number
    once(sigName: "notify::tooltip-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tooltip-text", ...args: any[]): void
    connect(sigName: "notify::valign", callback: any): number
    on(sigName: "notify::valign", callback: any): number
    once(sigName: "notify::valign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valign", ...args: any[]): void
    connect(sigName: "notify::vexpand", callback: any): number
    on(sigName: "notify::vexpand", callback: any): number
    once(sigName: "notify::vexpand", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand", ...args: any[]): void
    connect(sigName: "notify::vexpand-set", callback: any): number
    on(sigName: "notify::vexpand-set", callback: any): number
    once(sigName: "notify::vexpand-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vexpand-set", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width-request", callback: any): number
    on(sigName: "notify::width-request", callback: any): number
    once(sigName: "notify::width-request", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width-request", ...args: any[]): void
    connect(sigName: "notify::window", callback: any): number
    on(sigName: "notify::window", callback: any): number
    once(sigName: "notify::window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window", ...args: any[]): void
    connect(sigName: "notify::hadjustment", callback: any): number
    on(sigName: "notify::hadjustment", callback: any): number
    once(sigName: "notify::hadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hadjustment", ...args: any[]): void
    connect(sigName: "notify::hscroll-policy", callback: any): number
    on(sigName: "notify::hscroll-policy", callback: any): number
    once(sigName: "notify::hscroll-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hscroll-policy", ...args: any[]): void
    connect(sigName: "notify::vadjustment", callback: any): number
    on(sigName: "notify::vadjustment", callback: any): number
    once(sigName: "notify::vadjustment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vadjustment", ...args: any[]): void
    connect(sigName: "notify::vscroll-policy", callback: any): number
    on(sigName: "notify::vscroll-policy", callback: any): number
    once(sigName: "notify::vscroll-policy", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vscroll-policy", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Terminal extends Gtk.Widget {

    // Own properties of Vte-2.91.Vte.Terminal

    static name: string

    // Constructors of Vte-2.91.Vte.Terminal

    constructor(config?: Terminal.ConstructorProperties) 
    /**
     * Creates a new terminal widget.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new terminal widget.
     * @constructor 
     */
    static new(): Terminal
    _init(config?: Terminal.ConstructorProperties): void
}

export interface CharAttributes {
}

export class CharAttributes {

    // Own properties of Vte-2.91.Vte.CharAttributes

    static name: string
}

export interface PtyClass {
}

export abstract class PtyClass {

    // Own properties of Vte-2.91.Vte.PtyClass

    static name: string
}

export interface Regex {

    // Owm methods of Vte-2.91.Vte.Regex

    /**
     * If the platform supports JITing, JIT compiles `regex`.
     * @param flags PCRE2 JIT flags, or 0
     */
    jit(flags: number): boolean
    /**
     * Increases the reference count of `regex` by one.
     */
    ref(): Regex
    /**
     * See man:pcre2api(3) and man:pcre2_substitute(3) for more information.
     * @param subject the subject string
     * @param replacement the replacement string
     * @param flags PCRE2 match flags
     */
    substitute(subject: string, replacement: string, flags: number): string
    /**
     * Decreases the reference count of `regex` by one, and frees `regex`
     * if the refcount reaches zero.
     */
    unref(): Regex
}

export class Regex {

    // Own properties of Vte-2.91.Vte.Regex

    static name: string

    // Constructors of Vte-2.91.Vte.Regex

    /**
     * Compiles `pattern` into a regex for use as a match regex
     * with vte_terminal_match_add_regex() or
     * vte_terminal_event_check_regex_simple().
     * 
     * See man:pcre2pattern(3) for information
     * about the supported regex language.
     * 
     * The regex will be compiled using <literal>PCRE2_UTF</literal> and
     * possibly other flags, in addition to the flags supplied in `flags`.
     * @constructor 
     * @param pattern a regex pattern string
     * @param patternLength the length of `pattern` in bytes, or -1 if the  string is NUL-terminated and the length is unknown
     * @param flags PCRE2 compile flags
     */
    static newForMatch(pattern: string, patternLength: number, flags: number): Regex
    /**
     * Compiles `pattern` into a regex for use as a search regex
     * with vte_terminal_search_set_regex().
     * 
     * See man:pcre2pattern(3) for information
     * about the supported regex language.
     * 
     * The regex will be compiled using <literal>PCRE2_UTF</literal> and
     * possibly other flags, in addition to the flags supplied in `flags`.
     * @constructor 
     * @param pattern a regex pattern string
     * @param patternLength the length of `pattern` in bytes, or -1 if the  string is NUL-terminated and the length is unknown
     * @param flags PCRE2 compile flags
     */
    static newForSearch(pattern: string, patternLength: number, flags: number): Regex
}

export interface TerminalClass {

    // Own fields of Vte-2.91.Vte.TerminalClass

    parentClass: Gtk.WidgetClass
    eof: (terminal: Terminal) => void
    childExited: (terminal: Terminal, status: number) => void
    encodingChanged: (terminal: Terminal) => void
    charSizeChanged: (terminal: Terminal, charWidth: number, charHeight: number) => void
    windowTitleChanged: (terminal: Terminal) => void
    iconTitleChanged: (terminal: Terminal) => void
    selectionChanged: (terminal: Terminal) => void
    contentsChanged: (terminal: Terminal) => void
    cursorMoved: (terminal: Terminal) => void
    commit: (terminal: Terminal, text: string, size: number) => void
    deiconifyWindow: (terminal: Terminal) => void
    iconifyWindow: (terminal: Terminal) => void
    raiseWindow: (terminal: Terminal) => void
    lowerWindow: (terminal: Terminal) => void
    refreshWindow: (terminal: Terminal) => void
    restoreWindow: (terminal: Terminal) => void
    maximizeWindow: (terminal: Terminal) => void
    resizeWindow: (terminal: Terminal, width: number, height: number) => void
    moveWindow: (terminal: Terminal, x: number, y: number) => void
    increaseFontSize: (terminal: Terminal) => void
    decreaseFontSize: (terminal: Terminal) => void
    textModified: (terminal: Terminal) => void
    textInserted: (terminal: Terminal) => void
    textDeleted: (terminal: Terminal) => void
    textScrolled: (terminal: Terminal, delta: number) => void
    copyClipboard: (terminal: Terminal) => void
    pasteClipboard: (terminal: Terminal) => void
    bell: (terminal: Terminal) => void
}

/**
 * All of these fields should be considered read-only, except for derived classes.
 * @record 
 */
export abstract class TerminalClass {

    // Own properties of Vte-2.91.Vte.TerminalClass

    static name: string
}

export interface TerminalClassPrivate {
}

export class TerminalClassPrivate {

    // Own properties of Vte-2.91.Vte.TerminalClassPrivate

    static name: string
}
