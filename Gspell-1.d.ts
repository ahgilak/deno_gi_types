
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gspell-1
 */

import type * as Gtk from './Gtk-3.0.js';
import type * as xlib from './xlib-2.0.js';
import type * as Gdk from './Gdk-3.0.js';
import type * as cairo from './cairo-1.0.js';
import type * as Pango from './Pango-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GdkPixbuf from './GdkPixbuf-2.0.js';
import type * as GModule from './GModule-2.0.js';
import type * as Atk from './Atk-1.0.js';

/**
 * An error code used with %GSPELL_CHECKER_ERROR in a #GError returned
 * from a spell-checker-related function.
 */
export enum CheckerError {
    /**
     * dictionary error.
     */
    DICTIONARY,
    /**
     * no language set.
     */
    NO_LANGUAGE_SET,
}
export function checkerErrorQuark(): GLib.Quark
export function languageGetAvailable(): Language[]
/**
 * Finds the best available language based on the current locale.
 */
export function languageGetDefault(): Language | null
export function languageLookup(languageCode: string): Language | null
export module LanguageChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.LanguageChooser

        /**
         * The selected #GspellLanguage.
         */
        language?: Language | null
        /**
         * The empty string if the default language was set and the selection
         * hasn't changed. Or the language code if an explicit language was set
         * or if the selection has changed.
         */
        languageCode?: string | null
    }

}

export interface LanguageChooser {

    // Own properties of Gspell-1.Gspell.LanguageChooser

    /**
     * The selected #GspellLanguage.
     */
    language: Language
    /**
     * The empty string if the default language was set and the selection
     * hasn't changed. Or the language code if an explicit language was set
     * or if the selection has changed.
     */
    languageCode: string

    // Owm methods of Gspell-1.Gspell.LanguageChooser

    getLanguage(): Language | null
    getLanguageCode(): string
    // Has conflict: setLanguage(language: Language | null): void
    setLanguageCode(languageCode: string | null): void

    // Own virtual methods of Gspell-1.Gspell.LanguageChooser

    getLanguageFull(defaultLanguage: boolean): Language
    /**
     * Sets the selected language.
     * @virtual 
     * @param language a #GspellLanguage or %NULL to pick the default   language.
     */
    setLanguage(language: Language | null): void

    // Class property signals of Gspell-1.Gspell.LanguageChooser

    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-code", callback: any): number
    on(sigName: "notify::language-code", callback: any): number
    once(sigName: "notify::language-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language-code", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LanguageChooser extends GObject.Object {

    // Own properties of Gspell-1.Gspell.LanguageChooser

    static name: string

    // Constructors of Gspell-1.Gspell.LanguageChooser

    constructor(config?: LanguageChooser.ConstructorProperties) 
    _init(config?: LanguageChooser.ConstructorProperties): void
}

export module Navigator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Navigator extends GObject.InitiallyUnowned {

    // Owm methods of Gspell-1.Gspell.Navigator

    // Has conflict: change(word: string, changeTo: string): void
    // Has conflict: changeAll(word: string, changeTo: string): void
    // Has conflict: gotoNext(): [ /* returnType */ boolean, /* word */ string, /* spellChecker */ Checker ]

    // Own virtual methods of Gspell-1.Gspell.Navigator

    /**
     * Changes the current `word` by `change_to` in the text. `word` must be the same
     * as returned by the last call to gspell_navigator_goto_next().
     * 
     * This function doesn't call gspell_checker_set_correction(). A widget using a
     * #GspellNavigator should call gspell_checker_set_correction() in addition to
     * this function.
     * @virtual 
     * @param word the word to change.
     * @param changeTo the replacement.
     */
    change(word: string, changeTo: string): void
    /**
     * Changes all occurrences of `word` by `change_to` in the text.
     * 
     * This function doesn't call gspell_checker_set_correction(). A widget using a
     * #GspellNavigator should call gspell_checker_set_correction() in addition to
     * this function.
     * @virtual 
     * @param word the word to change.
     * @param changeTo the replacement.
     */
    changeAll(word: string, changeTo: string): void
    /**
     * Goes to the next misspelled word. When called the first time, goes to the
     * first misspelled word.
     * @virtual 
     */
    gotoNext(): [ /* returnType */ boolean, /* word */ string, /* spellChecker */ Checker ]

    // Class property signals of Gspell-1.Gspell.Navigator

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Navigator extends GObject.Object {

    // Own properties of Gspell-1.Gspell.Navigator

    static name: string

    // Constructors of Gspell-1.Gspell.Navigator

    constructor(config?: Navigator.ConstructorProperties) 
    _init(config?: Navigator.ConstructorProperties): void
}

export module Checker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `session-cleared`
     */
    export interface SessionClearedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `word-added-to-personal`
     */
    export interface WordAddedToPersonalSignalCallback {
        (word: string): void
    }

    /**
     * Signal callback interface for `word-added-to-session`
     */
    export interface WordAddedToSessionSignalCallback {
        (word: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.Checker

        /**
         * The #GspellLanguage used.
         */
        language?: Language | null
    }

}

export interface Checker {

    // Own properties of Gspell-1.Gspell.Checker

    /**
     * The #GspellLanguage used.
     */
    language: Language

    // Own fields of Gspell-1.Gspell.Checker

    parentInstance: GObject.Object

    // Owm methods of Gspell-1.Gspell.Checker

    /**
     * Adds a word to the personal dictionary. It is typically saved in the user's
     * home directory.
     * @param word a word.
     * @param wordLength the byte length of `word,` or -1 if `word` is nul-terminated.
     */
    addWordToPersonal(word: string, wordLength: number): void
    /**
     * Adds a word to the session dictionary. Each #GspellChecker instance has a
     * different session dictionary. The session dictionary is lost when the
     * #GspellChecker:language property changes or when `checker` is destroyed or
     * when gspell_checker_clear_session() is called.
     * 
     * This function is typically called for an ???Ignore All??? action.
     * @param word a word.
     * @param wordLength the byte length of `word,` or -1 if `word` is nul-terminated.
     */
    addWordToSession(word: string, wordLength: number): void
    /**
     * If the #GspellChecker:language is %NULL, i.e. when no dictonaries are
     * available, this function returns %TRUE to limit the damage.
     * @param word the word to check.
     * @param wordLength the byte length of `word,` or -1 if `word` is nul-terminated.
     */
    checkWord(word: string, wordLength: number): boolean
    /**
     * Clears the session dictionary.
     */
    clearSession(): void
    getLanguage(): Language | null
    /**
     * Gets the suggestions for `word`. Free the return value with
     * g_slist_free_full(suggestions, g_free).
     * @param word a misspelled word.
     * @param wordLength the byte length of `word,` or -1 if `word` is nul-terminated.
     */
    getSuggestions(word: string, wordLength: number): string[]
    /**
     * Informs the spell checker that `word` is replaced/corrected by `replacement`.
     * @param word a word.
     * @param wordLength the byte length of `word,` or -1 if `word` is nul-terminated.
     * @param replacement the replacement word.
     * @param replacementLength the byte length of `replacement,` or -1 if `replacement`   is nul-terminated.
     */
    setCorrection(word: string, wordLength: number, replacement: string, replacementLength: number): void
    /**
     * Sets the language to use for the spell checking. If `language` is %NULL, the
     * default language is picked with gspell_language_get_default().
     * @param language the #GspellLanguage to use, or %NULL.
     */
    setLanguage(language: Language | null): void

    // Own virtual methods of Gspell-1.Gspell.Checker

    sessionCleared(): void
    wordAddedToPersonal(word: string): void
    wordAddedToSession(word: string): void

    // Own signals of Gspell-1.Gspell.Checker

    connect(sigName: "session-cleared", callback: Checker.SessionClearedSignalCallback): number
    on(sigName: "session-cleared", callback: Checker.SessionClearedSignalCallback): number
    once(sigName: "session-cleared", callback: Checker.SessionClearedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "session-cleared", ...args: any[]): void
    connect(sigName: "word-added-to-personal", callback: Checker.WordAddedToPersonalSignalCallback): number
    on(sigName: "word-added-to-personal", callback: Checker.WordAddedToPersonalSignalCallback): number
    once(sigName: "word-added-to-personal", callback: Checker.WordAddedToPersonalSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "word-added-to-personal", ...args: any[]): void
    connect(sigName: "word-added-to-session", callback: Checker.WordAddedToSessionSignalCallback): number
    on(sigName: "word-added-to-session", callback: Checker.WordAddedToSessionSignalCallback): number
    once(sigName: "word-added-to-session", callback: Checker.WordAddedToSessionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "word-added-to-session", ...args: any[]): void

    // Class property signals of Gspell-1.Gspell.Checker

    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Checker extends GObject.Object {

    // Own properties of Gspell-1.Gspell.Checker

    static name: string

    // Constructors of Gspell-1.Gspell.Checker

    constructor(config?: Checker.ConstructorProperties) 
    /**
     * Creates a new #GspellChecker. If `language` is %NULL, the default language is
     * picked with gspell_language_get_default().
     * @constructor 
     * @param language the #GspellLanguage to use, or %NULL.
     */
    constructor(language: Language | null) 
    /**
     * Creates a new #GspellChecker. If `language` is %NULL, the default language is
     * picked with gspell_language_get_default().
     * @constructor 
     * @param language the #GspellLanguage to use, or %NULL.
     */
    static new(language: Language | null): Checker
    _init(config?: Checker.ConstructorProperties): void
}

export module CheckerDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.CheckerDialog

        /**
         * The #GspellNavigator to use.
         */
        spellNavigator?: Navigator | null
    }

}

export interface CheckerDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Own properties of Gspell-1.Gspell.CheckerDialog

    /**
     * The #GspellNavigator to use.
     */
    readonly spellNavigator: Navigator

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Gspell-1.Gspell.CheckerDialog

    parentInstance: any

    // Owm methods of Gspell-1.Gspell.CheckerDialog

    getSpellNavigator(): Navigator

    // Conflicting methods

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
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
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
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     */
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonicActivate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Gspell-1.Gspell.CheckerDialog

    connect(sigName: "notify::spell-navigator", callback: any): number
    on(sigName: "notify::spell-navigator", callback: any): number
    once(sigName: "notify::spell-navigator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spell-navigator", ...args: any[]): void
    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: any): number
    on(sigName: "notify::accept-focus", callback: any): number
    once(sigName: "notify::accept-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: any): number
    on(sigName: "notify::attached-to", callback: any): number
    once(sigName: "notify::attached-to", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: any): number
    on(sigName: "notify::decorated", callback: any): number
    once(sigName: "notify::decorated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: any): number
    on(sigName: "notify::default-height", callback: any): number
    once(sigName: "notify::default-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: any): number
    on(sigName: "notify::default-width", callback: any): number
    once(sigName: "notify::default-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: any): number
    on(sigName: "notify::deletable", callback: any): number
    once(sigName: "notify::deletable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: any): number
    on(sigName: "notify::destroy-with-parent", callback: any): number
    once(sigName: "notify::destroy-with-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: any): number
    on(sigName: "notify::focus-on-map", callback: any): number
    once(sigName: "notify::focus-on-map", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: any): number
    on(sigName: "notify::focus-visible", callback: any): number
    once(sigName: "notify::focus-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: any): number
    on(sigName: "notify::gravity", callback: any): number
    once(sigName: "notify::gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: any): number
    on(sigName: "notify::has-resize-grip", callback: any): number
    once(sigName: "notify::has-resize-grip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: any): number
    on(sigName: "notify::has-toplevel-focus", callback: any): number
    once(sigName: "notify::has-toplevel-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    once(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: any): number
    on(sigName: "notify::is-active", callback: any): number
    once(sigName: "notify::is-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: any): number
    on(sigName: "notify::is-maximized", callback: any): number
    once(sigName: "notify::is-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: any): number
    on(sigName: "notify::mnemonics-visible", callback: any): number
    once(sigName: "notify::mnemonics-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: any): number
    on(sigName: "notify::resizable", callback: any): number
    once(sigName: "notify::resizable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: any): number
    on(sigName: "notify::resize-grip-visible", callback: any): number
    once(sigName: "notify::resize-grip-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: any): number
    on(sigName: "notify::screen", callback: any): number
    once(sigName: "notify::screen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: any): number
    on(sigName: "notify::skip-pager-hint", callback: any): number
    once(sigName: "notify::skip-pager-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: any): number
    on(sigName: "notify::skip-taskbar-hint", callback: any): number
    once(sigName: "notify::skip-taskbar-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: any): number
    on(sigName: "notify::startup-id", callback: any): number
    once(sigName: "notify::startup-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: any): number
    on(sigName: "notify::transient-for", callback: any): number
    once(sigName: "notify::transient-for", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: any): number
    on(sigName: "notify::type-hint", callback: any): number
    once(sigName: "notify::type-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: any): number
    on(sigName: "notify::urgency-hint", callback: any): number
    once(sigName: "notify::urgency-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: any): number
    on(sigName: "notify::window-position", callback: any): number
    once(sigName: "notify::window-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CheckerDialog extends Gtk.Dialog {

    // Own properties of Gspell-1.Gspell.CheckerDialog

    static name: string

    // Constructors of Gspell-1.Gspell.CheckerDialog

    constructor(config?: CheckerDialog.ConstructorProperties) 
    constructor(parent: Gtk.Window, navigator: Navigator) 
    static new(parent: Gtk.Window, navigator: Navigator): CheckerDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you???re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called ???popups???.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don???t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: CheckerDialog.ConstructorProperties): void
}

export module Entry {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.Entry

        /**
         * The #GtkEntry.
         */
        entry?: Gtk.Entry | null
        /**
         * Whether the inline spell checking is enabled.
         * 
         * Even if this property is %TRUE, #GspellEntry disables internally the
         * inline spell checking in case the #GtkEntry:visibility property is
         * %FALSE.
         */
        inlineSpellChecking?: boolean | null
    }

}

export interface Entry {

    // Own properties of Gspell-1.Gspell.Entry

    /**
     * The #GtkEntry.
     */
    readonly entry: Gtk.Entry
    /**
     * Whether the inline spell checking is enabled.
     * 
     * Even if this property is %TRUE, #GspellEntry disables internally the
     * inline spell checking in case the #GtkEntry:visibility property is
     * %FALSE.
     */
    inlineSpellChecking: boolean

    // Owm methods of Gspell-1.Gspell.Entry

    /**
     * This function is a convenience function that does the following:
     * - Set a spell checker. The language chosen is the one returned by
     *   gspell_language_get_default().
     * - Set the #GspellEntry:inline-spell-checking property to %TRUE.
     * 
     * Example:
     * |[
     * GtkEntry *gtk_entry;
     * GspellEntry *gspell_entry;
     * 
     * gspell_entry = gspell_entry_get_from_gtk_entry (gtk_entry);
     * gspell_entry_basic_setup (gspell_entry);
     * ```
     * 
     * 
     * This is equivalent to:
     * |[
     * GtkEntry *gtk_entry;
     * GspellEntry *gspell_entry;
     * GspellChecker *checker;
     * GtkEntryBuffer *gtk_buffer;
     * GspellEntryBuffer *gspell_buffer;
     * 
     * checker = gspell_checker_new (NULL);
     * gtk_buffer = gtk_entry_get_buffer (gtk_entry);
     * gspell_buffer = gspell_entry_buffer_get_from_gtk_entry_buffer (gtk_buffer);
     * gspell_entry_buffer_set_spell_checker (gspell_buffer, checker);
     * g_object_unref (checker);
     * 
     * gspell_entry = gspell_entry_get_from_gtk_entry (gtk_entry);
     * gspell_entry_set_inline_spell_checking (gspell_entry, TRUE);
     * ```
     * 
     */
    basicSetup(): void
    getEntry(): Gtk.Entry
    getInlineSpellChecking(): boolean
    /**
     * Sets the #GspellEntry:inline-spell-checking property.
     * @param enable the new state.
     */
    setInlineSpellChecking(enable: boolean): void

    // Class property signals of Gspell-1.Gspell.Entry

    connect(sigName: "notify::entry", callback: any): number
    on(sigName: "notify::entry", callback: any): number
    once(sigName: "notify::entry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entry", ...args: any[]): void
    connect(sigName: "notify::inline-spell-checking", callback: any): number
    on(sigName: "notify::inline-spell-checking", callback: any): number
    once(sigName: "notify::inline-spell-checking", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inline-spell-checking", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Entry extends GObject.Object {

    // Own properties of Gspell-1.Gspell.Entry

    static name: string

    // Constructors of Gspell-1.Gspell.Entry

    constructor(config?: Entry.ConstructorProperties) 
    _init(config?: Entry.ConstructorProperties): void
    /**
     * Returns the #GspellEntry of `gtk_entry`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_entry`.
     * @param gtkEntry a #GtkEntry.
     */
    static getFromGtkEntry(gtkEntry: Gtk.Entry): Entry
}

export module EntryBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.EntryBuffer

        /**
         * The #GtkEntryBuffer.
         */
        buffer?: Gtk.EntryBuffer | null
        /**
         * The #GspellChecker.
         */
        spellChecker?: Checker | null
    }

}

export interface EntryBuffer {

    // Own properties of Gspell-1.Gspell.EntryBuffer

    /**
     * The #GtkEntryBuffer.
     */
    readonly buffer: Gtk.EntryBuffer
    /**
     * The #GspellChecker.
     */
    spellChecker: Checker

    // Owm methods of Gspell-1.Gspell.EntryBuffer

    getBuffer(): Gtk.EntryBuffer
    getSpellChecker(): Checker | null
    /**
     * Sets a #GspellChecker to a #GspellEntryBuffer. The `gspell_buffer` will own a
     * reference to `spell_checker,` so you can release your reference to
     * `spell_checker` if you no longer need it.
     * @param spellChecker a #GspellChecker, or %NULL to unset the spell   checker.
     */
    setSpellChecker(spellChecker: Checker | null): void

    // Class property signals of Gspell-1.Gspell.EntryBuffer

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::spell-checker", callback: any): number
    on(sigName: "notify::spell-checker", callback: any): number
    once(sigName: "notify::spell-checker", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spell-checker", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EntryBuffer extends GObject.Object {

    // Own properties of Gspell-1.Gspell.EntryBuffer

    static name: string

    // Constructors of Gspell-1.Gspell.EntryBuffer

    constructor(config?: EntryBuffer.ConstructorProperties) 
    _init(config?: EntryBuffer.ConstructorProperties): void
    /**
     * Returns the #GspellEntryBuffer of `gtk_buffer`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_buffer`.
     * @param gtkBuffer a #GtkEntryBuffer.
     */
    static getFromGtkEntryBuffer(gtkBuffer: Gtk.EntryBuffer): EntryBuffer
}

export module LanguageChooserButton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, LanguageChooser.ConstructorProperties, Gtk.Actionable.ConstructorProperties, Gtk.Activatable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Button.ConstructorProperties {
    }

}

export interface LanguageChooserButton extends Atk.ImplementorIface, LanguageChooser, Gtk.Actionable, Gtk.Activatable, Gtk.Buildable {

    // Own fields of Gspell-1.Gspell.LanguageChooserButton

    parentInstance: any

    // Conflicting methods

    activate(): void

    // Overloads of activate

    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * For widgets that can be ???activated??? (buttons, menu items, etc.)
     * this function activates them. Activation is what happens when you
     * press Enter on a widget during key navigation. If `widget` isn't
     * activatable, the function returns %FALSE.
     */
    activate(): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
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

    // Class property signals of Gspell-1.Gspell.LanguageChooserButton

    connect(sigName: "notify::always-show-image", callback: any): number
    on(sigName: "notify::always-show-image", callback: any): number
    once(sigName: "notify::always-show-image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::always-show-image", ...args: any[]): void
    connect(sigName: "notify::image", callback: any): number
    on(sigName: "notify::image", callback: any): number
    once(sigName: "notify::image", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image", ...args: any[]): void
    connect(sigName: "notify::image-position", callback: any): number
    on(sigName: "notify::image-position", callback: any): number
    once(sigName: "notify::image-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::image-position", ...args: any[]): void
    connect(sigName: "notify::label", callback: any): number
    on(sigName: "notify::label", callback: any): number
    once(sigName: "notify::label", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::label", ...args: any[]): void
    connect(sigName: "notify::relief", callback: any): number
    on(sigName: "notify::relief", callback: any): number
    once(sigName: "notify::relief", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::relief", ...args: any[]): void
    connect(sigName: "notify::use-stock", callback: any): number
    on(sigName: "notify::use-stock", callback: any): number
    once(sigName: "notify::use-stock", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-stock", ...args: any[]): void
    connect(sigName: "notify::use-underline", callback: any): number
    on(sigName: "notify::use-underline", callback: any): number
    once(sigName: "notify::use-underline", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-underline", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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
    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-code", callback: any): number
    on(sigName: "notify::language-code", callback: any): number
    once(sigName: "notify::language-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language-code", ...args: any[]): void
    connect(sigName: "notify::action-name", callback: any): number
    on(sigName: "notify::action-name", callback: any): number
    once(sigName: "notify::action-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-name", ...args: any[]): void
    connect(sigName: "notify::action-target", callback: any): number
    on(sigName: "notify::action-target", callback: any): number
    once(sigName: "notify::action-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::action-target", ...args: any[]): void
    connect(sigName: "notify::related-action", callback: any): number
    on(sigName: "notify::related-action", callback: any): number
    once(sigName: "notify::related-action", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::related-action", ...args: any[]): void
    connect(sigName: "notify::use-action-appearance", callback: any): number
    on(sigName: "notify::use-action-appearance", callback: any): number
    once(sigName: "notify::use-action-appearance", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-action-appearance", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LanguageChooserButton extends Gtk.Button {

    // Own properties of Gspell-1.Gspell.LanguageChooserButton

    static name: string

    // Constructors of Gspell-1.Gspell.LanguageChooserButton

    constructor(config?: LanguageChooserButton.ConstructorProperties) 
    constructor(currentLanguage: Language | null) 
    static new(currentLanguage: Language | null): LanguageChooserButton

    // Overloads of new

    /**
     * Creates a new #GtkButton widget. To add a child widget to the button,
     * use gtk_container_add().
     * @constructor 
     */
    static new(): Gtk.Button
    _init(config?: LanguageChooserButton.ConstructorProperties): void
}

export module LanguageChooserDialog {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, LanguageChooser.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface LanguageChooserDialog extends Atk.ImplementorIface, LanguageChooser, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Gspell-1.Gspell.LanguageChooserDialog

    parentInstance: any

    // Conflicting methods

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
     * Sets the name of the `buildable` object.
     * @virtual 
     * @param name name to set
     */
    setName(name: string): void
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
    close(): void

    // Overloads of close

    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Requests that the window is closed, similar to what happens
     * when a window manager close button is clicked.
     * 
     * This function can be used with close buttons in custom
     * titlebars.
     */
    close(): void
    /**
     * Activates the targets associated with the mnemonic.
     * @param keyval the mnemonic
     * @param modifier the modifiers
     */
    mnemonicActivate(keyval: number, modifier: Gdk.ModifierType): boolean

    // Overloads of mnemonicActivate

    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits the #GtkWidget::mnemonic-activate signal.
     * @virtual 
     * @param groupCycling %TRUE if there are other widgets with the same mnemonic
     */
    mnemonicActivate(groupCycling: boolean): boolean
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties]
     * `child_property` on the child.
     * 
     * This is an analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_widget_child_notify().
     * @param child the child widget
     * @param childProperty the name of a child property installed on     the class of `container`
     */
    childNotify(child: Gtk.Widget, childProperty: string): void

    // Overloads of childNotify

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget???`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Gspell-1.Gspell.LanguageChooserDialog

    connect(sigName: "notify::use-header-bar", callback: any): number
    on(sigName: "notify::use-header-bar", callback: any): number
    once(sigName: "notify::use-header-bar", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-header-bar", ...args: any[]): void
    connect(sigName: "notify::accept-focus", callback: any): number
    on(sigName: "notify::accept-focus", callback: any): number
    once(sigName: "notify::accept-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::accept-focus", ...args: any[]): void
    connect(sigName: "notify::application", callback: any): number
    on(sigName: "notify::application", callback: any): number
    once(sigName: "notify::application", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::application", ...args: any[]): void
    connect(sigName: "notify::attached-to", callback: any): number
    on(sigName: "notify::attached-to", callback: any): number
    once(sigName: "notify::attached-to", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attached-to", ...args: any[]): void
    connect(sigName: "notify::decorated", callback: any): number
    on(sigName: "notify::decorated", callback: any): number
    once(sigName: "notify::decorated", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decorated", ...args: any[]): void
    connect(sigName: "notify::default-height", callback: any): number
    on(sigName: "notify::default-height", callback: any): number
    once(sigName: "notify::default-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-height", ...args: any[]): void
    connect(sigName: "notify::default-width", callback: any): number
    on(sigName: "notify::default-width", callback: any): number
    once(sigName: "notify::default-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-width", ...args: any[]): void
    connect(sigName: "notify::deletable", callback: any): number
    on(sigName: "notify::deletable", callback: any): number
    once(sigName: "notify::deletable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::deletable", ...args: any[]): void
    connect(sigName: "notify::destroy-with-parent", callback: any): number
    on(sigName: "notify::destroy-with-parent", callback: any): number
    once(sigName: "notify::destroy-with-parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::destroy-with-parent", ...args: any[]): void
    connect(sigName: "notify::focus-on-map", callback: any): number
    on(sigName: "notify::focus-on-map", callback: any): number
    once(sigName: "notify::focus-on-map", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-on-map", ...args: any[]): void
    connect(sigName: "notify::focus-visible", callback: any): number
    on(sigName: "notify::focus-visible", callback: any): number
    once(sigName: "notify::focus-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::focus-visible", ...args: any[]): void
    connect(sigName: "notify::gravity", callback: any): number
    on(sigName: "notify::gravity", callback: any): number
    once(sigName: "notify::gravity", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gravity", ...args: any[]): void
    connect(sigName: "notify::has-resize-grip", callback: any): number
    on(sigName: "notify::has-resize-grip", callback: any): number
    once(sigName: "notify::has-resize-grip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-resize-grip", ...args: any[]): void
    connect(sigName: "notify::has-toplevel-focus", callback: any): number
    on(sigName: "notify::has-toplevel-focus", callback: any): number
    once(sigName: "notify::has-toplevel-focus", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-toplevel-focus", ...args: any[]): void
    connect(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    on(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    once(sigName: "notify::hide-titlebar-when-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::hide-titlebar-when-maximized", ...args: any[]): void
    connect(sigName: "notify::icon", callback: any): number
    on(sigName: "notify::icon", callback: any): number
    once(sigName: "notify::icon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::is-active", callback: any): number
    on(sigName: "notify::is-active", callback: any): number
    once(sigName: "notify::is-active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-active", ...args: any[]): void
    connect(sigName: "notify::is-maximized", callback: any): number
    on(sigName: "notify::is-maximized", callback: any): number
    once(sigName: "notify::is-maximized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-maximized", ...args: any[]): void
    connect(sigName: "notify::mnemonics-visible", callback: any): number
    on(sigName: "notify::mnemonics-visible", callback: any): number
    once(sigName: "notify::mnemonics-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mnemonics-visible", ...args: any[]): void
    connect(sigName: "notify::modal", callback: any): number
    on(sigName: "notify::modal", callback: any): number
    once(sigName: "notify::modal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modal", ...args: any[]): void
    connect(sigName: "notify::resizable", callback: any): number
    on(sigName: "notify::resizable", callback: any): number
    once(sigName: "notify::resizable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resizable", ...args: any[]): void
    connect(sigName: "notify::resize-grip-visible", callback: any): number
    on(sigName: "notify::resize-grip-visible", callback: any): number
    once(sigName: "notify::resize-grip-visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-grip-visible", ...args: any[]): void
    connect(sigName: "notify::role", callback: any): number
    on(sigName: "notify::role", callback: any): number
    once(sigName: "notify::role", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::role", ...args: any[]): void
    connect(sigName: "notify::screen", callback: any): number
    on(sigName: "notify::screen", callback: any): number
    once(sigName: "notify::screen", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::screen", ...args: any[]): void
    connect(sigName: "notify::skip-pager-hint", callback: any): number
    on(sigName: "notify::skip-pager-hint", callback: any): number
    once(sigName: "notify::skip-pager-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-pager-hint", ...args: any[]): void
    connect(sigName: "notify::skip-taskbar-hint", callback: any): number
    on(sigName: "notify::skip-taskbar-hint", callback: any): number
    once(sigName: "notify::skip-taskbar-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::skip-taskbar-hint", ...args: any[]): void
    connect(sigName: "notify::startup-id", callback: any): number
    on(sigName: "notify::startup-id", callback: any): number
    once(sigName: "notify::startup-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::startup-id", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::transient-for", callback: any): number
    on(sigName: "notify::transient-for", callback: any): number
    once(sigName: "notify::transient-for", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::transient-for", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: "notify::type-hint", callback: any): number
    on(sigName: "notify::type-hint", callback: any): number
    once(sigName: "notify::type-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-hint", ...args: any[]): void
    connect(sigName: "notify::urgency-hint", callback: any): number
    on(sigName: "notify::urgency-hint", callback: any): number
    once(sigName: "notify::urgency-hint", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::urgency-hint", ...args: any[]): void
    connect(sigName: "notify::window-position", callback: any): number
    on(sigName: "notify::window-position", callback: any): number
    once(sigName: "notify::window-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::window-position", ...args: any[]): void
    connect(sigName: "notify::border-width", callback: any): number
    on(sigName: "notify::border-width", callback: any): number
    once(sigName: "notify::border-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::border-width", ...args: any[]): void
    connect(sigName: "notify::child", callback: any): number
    on(sigName: "notify::child", callback: any): number
    once(sigName: "notify::child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child", ...args: any[]): void
    connect(sigName: "notify::resize-mode", callback: any): number
    on(sigName: "notify::resize-mode", callback: any): number
    once(sigName: "notify::resize-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resize-mode", ...args: any[]): void
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
    connect(sigName: "notify::language", callback: any): number
    on(sigName: "notify::language", callback: any): number
    once(sigName: "notify::language", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language", ...args: any[]): void
    connect(sigName: "notify::language-code", callback: any): number
    on(sigName: "notify::language-code", callback: any): number
    once(sigName: "notify::language-code", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::language-code", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LanguageChooserDialog extends Gtk.Dialog {

    // Own properties of Gspell-1.Gspell.LanguageChooserDialog

    static name: string

    // Constructors of Gspell-1.Gspell.LanguageChooserDialog

    constructor(config?: LanguageChooserDialog.ConstructorProperties) 
    constructor(parent: Gtk.Window, currentLanguage: Language | null, flags: Gtk.DialogFlags) 
    static new(parent: Gtk.Window, currentLanguage: Language | null, flags: Gtk.DialogFlags): LanguageChooserDialog

    // Overloads of new

    /**
     * Creates a new dialog box.
     * 
     * Widgets should not be packed into this #GtkWindow
     * directly, but into the `vbox` and `action_area,` as described above.
     * @constructor 
     */
    static new(): Gtk.Dialog
    /**
     * Creates a new #GtkWindow, which is a toplevel window that can
     * contain other widgets. Nearly always, the type of the window should
     * be #GTK_WINDOW_TOPLEVEL. If you???re implementing something like a
     * popup menu from scratch (which is a bad idea, just use #GtkMenu),
     * you might use #GTK_WINDOW_POPUP. #GTK_WINDOW_POPUP is not for
     * dialogs, though in some other toolkits dialogs are called ???popups???.
     * In GTK+, #GTK_WINDOW_POPUP means a pop-up menu or pop-up tooltip.
     * On X11, popup windows are not controlled by the
     * [window manager][gtk-X11-arch].
     * 
     * If you simply want an undecorated window (no window borders), use
     * gtk_window_set_decorated(), don???t use #GTK_WINDOW_POPUP.
     * 
     * All top-level windows created by gtk_window_new() are stored in
     * an internal top-level window list.  This list can be obtained from
     * gtk_window_list_toplevels().  Due to Gtk+ keeping a reference to
     * the window internally, gtk_window_new() does not return a reference
     * to the caller.
     * 
     * To delete a #GtkWindow, call gtk_widget_destroy().
     * @constructor 
     * @param type type of window
     */
    static new(type: Gtk.WindowType): Gtk.Window
    _init(config?: LanguageChooserDialog.ConstructorProperties): void
}

export module NavigatorTextView {

    // Constructor properties interface

    export interface ConstructorProperties extends Navigator.ConstructorProperties, GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.NavigatorTextView

        /**
         * The #GtkTextView. The buffer is not sufficient, the view is needed to
         * scroll to the misspelled words.
         */
        view?: Gtk.TextView | null
    }

}

export interface NavigatorTextView extends Navigator {

    // Own properties of Gspell-1.Gspell.NavigatorTextView

    /**
     * The #GtkTextView. The buffer is not sufficient, the view is needed to
     * scroll to the misspelled words.
     */
    readonly view: Gtk.TextView

    // Own fields of Gspell-1.Gspell.NavigatorTextView

    parentInstance: GObject.InitiallyUnowned

    // Owm methods of Gspell-1.Gspell.NavigatorTextView

    getView(): Gtk.TextView

    // Class property signals of Gspell-1.Gspell.NavigatorTextView

    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NavigatorTextView extends GObject.InitiallyUnowned {

    // Own properties of Gspell-1.Gspell.NavigatorTextView

    static name: string

    // Constructors of Gspell-1.Gspell.NavigatorTextView

    constructor(config?: NavigatorTextView.ConstructorProperties) 
    _init(config?: NavigatorTextView.ConstructorProperties): void
    static new(view: Gtk.TextView): Navigator
}

export module TextBuffer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.TextBuffer

        /**
         * The #GtkTextBuffer.
         */
        buffer?: Gtk.TextBuffer | null
        /**
         * The #GspellChecker.
         */
        spellChecker?: Checker | null
    }

}

export interface TextBuffer {

    // Own properties of Gspell-1.Gspell.TextBuffer

    /**
     * The #GtkTextBuffer.
     */
    readonly buffer: Gtk.TextBuffer
    /**
     * The #GspellChecker.
     */
    spellChecker: Checker

    // Owm methods of Gspell-1.Gspell.TextBuffer

    getBuffer(): Gtk.TextBuffer
    getSpellChecker(): Checker | null
    /**
     * Sets a #GspellChecker to a #GspellTextBuffer. The `gspell_buffer` will own a
     * reference to `spell_checker,` so you can release your reference to
     * `spell_checker` if you no longer need it.
     * @param spellChecker a #GspellChecker, or %NULL to unset the spell   checker.
     */
    setSpellChecker(spellChecker: Checker | null): void

    // Class property signals of Gspell-1.Gspell.TextBuffer

    connect(sigName: "notify::buffer", callback: any): number
    on(sigName: "notify::buffer", callback: any): number
    once(sigName: "notify::buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::buffer", ...args: any[]): void
    connect(sigName: "notify::spell-checker", callback: any): number
    on(sigName: "notify::spell-checker", callback: any): number
    once(sigName: "notify::spell-checker", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spell-checker", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TextBuffer extends GObject.Object {

    // Own properties of Gspell-1.Gspell.TextBuffer

    static name: string

    // Constructors of Gspell-1.Gspell.TextBuffer

    constructor(config?: TextBuffer.ConstructorProperties) 
    _init(config?: TextBuffer.ConstructorProperties): void
    /**
     * Returns the #GspellTextBuffer of `gtk_buffer`. The returned object is
     * guaranteed to be the same for the lifetime of `gtk_buffer`.
     * @param gtkBuffer a #GtkTextBuffer.
     */
    static getFromGtkTextBuffer(gtkBuffer: Gtk.TextBuffer): TextBuffer
}

export module TextView {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gspell-1.Gspell.TextView

        /**
         * When the context menu is shown, whether to add a sub-menu to select
         * the language for the spell checking.
         */
        enableLanguageMenu?: boolean | null
        /**
         * Whether the inline spell checking is enabled.
         */
        inlineSpellChecking?: boolean | null
        /**
         * The #GtkTextView.
         */
        view?: Gtk.TextView | null
    }

}

export interface TextView {

    // Own properties of Gspell-1.Gspell.TextView

    /**
     * When the context menu is shown, whether to add a sub-menu to select
     * the language for the spell checking.
     */
    enableLanguageMenu: boolean
    /**
     * Whether the inline spell checking is enabled.
     */
    inlineSpellChecking: boolean
    /**
     * The #GtkTextView.
     */
    readonly view: Gtk.TextView

    // Own fields of Gspell-1.Gspell.TextView

    parentInstance: GObject.Object

    // Owm methods of Gspell-1.Gspell.TextView

    /**
     * This function is a convenience function that does the following:
     * - Set a spell checker. The language chosen is the one returned by
     *   gspell_language_get_default().
     * - Set the #GspellTextView:inline-spell-checking property to %TRUE.
     * - Set the #GspellTextView:enable-language-menu property to %TRUE.
     * 
     * Example:
     * |[
     * GtkTextView *gtk_view;
     * GspellTextView *gspell_view;
     * 
     * gspell_view = gspell_text_view_get_from_gtk_text_view (gtk_view);
     * gspell_text_view_basic_setup (gspell_view);
     * ```
     * 
     * 
     * This is equivalent to:
     * |[
     * GtkTextView *gtk_view;
     * GspellTextView *gspell_view;
     * GspellChecker *checker;
     * GtkTextBuffer *gtk_buffer;
     * GspellTextBuffer *gspell_buffer;
     * 
     * checker = gspell_checker_new (NULL);
     * gtk_buffer = gtk_text_view_get_buffer (gtk_view);
     * gspell_buffer = gspell_text_buffer_get_from_gtk_text_buffer (gtk_buffer);
     * gspell_text_buffer_set_spell_checker (gspell_buffer, checker);
     * g_object_unref (checker);
     * 
     * gspell_view = gspell_text_view_get_from_gtk_text_view (gtk_view);
     * gspell_text_view_set_inline_spell_checking (gspell_view, TRUE);
     * gspell_text_view_set_enable_language_menu (gspell_view, TRUE);
     * ```
     * 
     */
    basicSetup(): void
    getEnableLanguageMenu(): boolean
    getInlineSpellChecking(): boolean
    getView(): Gtk.TextView
    /**
     * Sets whether to enable the language context menu. If enabled, doing a right
     * click on the #GtkTextView will show a sub-menu to choose the language for the
     * spell checking. If another language is chosen, it changes the
     * #GspellChecker:language property of the #GspellTextBuffer:spell-checker of
     * the #GtkTextView:buffer of the #GspellTextView:view.
     * @param enableLanguageMenu whether to enable the language context menu.
     */
    setEnableLanguageMenu(enableLanguageMenu: boolean): void
    /**
     * Enables or disables the inline spell checking.
     * @param enable the new state.
     */
    setInlineSpellChecking(enable: boolean): void

    // Class property signals of Gspell-1.Gspell.TextView

    connect(sigName: "notify::enable-language-menu", callback: any): number
    on(sigName: "notify::enable-language-menu", callback: any): number
    once(sigName: "notify::enable-language-menu", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enable-language-menu", ...args: any[]): void
    connect(sigName: "notify::inline-spell-checking", callback: any): number
    on(sigName: "notify::inline-spell-checking", callback: any): number
    once(sigName: "notify::inline-spell-checking", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inline-spell-checking", ...args: any[]): void
    connect(sigName: "notify::view", callback: any): number
    on(sigName: "notify::view", callback: any): number
    once(sigName: "notify::view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TextView extends GObject.Object {

    // Own properties of Gspell-1.Gspell.TextView

    static name: string

    // Constructors of Gspell-1.Gspell.TextView

    constructor(config?: TextView.ConstructorProperties) 
    _init(config?: TextView.ConstructorProperties): void
    /**
     * Returns the #GspellTextView of `gtk_view`. The returned object is guaranteed
     * to be the same for the lifetime of `gtk_view`.
     * @param gtkView a #GtkTextView.
     */
    static getFromGtkTextView(gtkView: Gtk.TextView): TextView
}

export interface CheckerClass {

    // Own fields of Gspell-1.Gspell.CheckerClass

    parentClass: GObject.ObjectClass
    wordAddedToPersonal: (checker: Checker, word: string) => void
    wordAddedToSession: (checker: Checker, word: string) => void
    sessionCleared: (checker: Checker) => void
    padding: object[]
}

export abstract class CheckerClass {

    // Own properties of Gspell-1.Gspell.CheckerClass

    static name: string
}

export interface CheckerDialogClass {

    // Own fields of Gspell-1.Gspell.CheckerDialogClass

    parentClass: Gtk.DialogClass
    padding: object[]
}

export abstract class CheckerDialogClass {

    // Own properties of Gspell-1.Gspell.CheckerDialogClass

    static name: string
}

export interface EntryBufferClass {

    // Own fields of Gspell-1.Gspell.EntryBufferClass

    parentClass: GObject.ObjectClass
}

export abstract class EntryBufferClass {

    // Own properties of Gspell-1.Gspell.EntryBufferClass

    static name: string
}

export interface EntryClass {

    // Own fields of Gspell-1.Gspell.EntryClass

    parentClass: GObject.ObjectClass
}

export abstract class EntryClass {

    // Own properties of Gspell-1.Gspell.EntryClass

    static name: string
}

export interface Language {

    // Owm methods of Gspell-1.Gspell.Language

    /**
     * Compares alphabetically two languages by their name, as returned by
     * gspell_language_get_name().
     * @param languageB another #GspellLanguage.
     */
    compare(languageB: Language): number
    /**
     * Used by language bindings.
     */
    copy(): Language
    /**
     * Used by language bindings.
     */
    free(): void
    getCode(): string
    /**
     * Returns the `language` name translated to the current locale. For example
     * "French (Belgium)" is returned if the current locale is in English and the
     * `language` code is fr_BE.
     */
    getName(): string
}

export class Language {

    // Own properties of Gspell-1.Gspell.Language

    static name: string

    // Constructors of Gspell-1.Gspell.Language

    static getAvailable(): Language[]
    /**
     * Finds the best available language based on the current locale.
     */
    static getDefault(): Language | null
    static lookup(languageCode: string): Language | null
}

export interface LanguageChooserButtonClass {

    // Own fields of Gspell-1.Gspell.LanguageChooserButtonClass

    parentClass: Gtk.ButtonClass
    padding: object[]
}

export abstract class LanguageChooserButtonClass {

    // Own properties of Gspell-1.Gspell.LanguageChooserButtonClass

    static name: string
}

export interface LanguageChooserDialogClass {

    // Own fields of Gspell-1.Gspell.LanguageChooserDialogClass

    parentClass: Gtk.DialogClass
    padding: object[]
}

export abstract class LanguageChooserDialogClass {

    // Own properties of Gspell-1.Gspell.LanguageChooserDialogClass

    static name: string
}

export interface LanguageChooserInterface {

    // Own fields of Gspell-1.Gspell.LanguageChooserInterface

    parentInterface: GObject.TypeInterface
    getLanguageFull: (chooser: LanguageChooser, defaultLanguage: boolean) => Language
    setLanguage: (chooser: LanguageChooser, language: Language | null) => void
}

export abstract class LanguageChooserInterface {

    // Own properties of Gspell-1.Gspell.LanguageChooserInterface

    static name: string
}

export interface NavigatorInterface {

    // Own fields of Gspell-1.Gspell.NavigatorInterface

    parentInterface: GObject.TypeInterface
    gotoNext: (navigator: Navigator) => [ /* returnType */ boolean, /* word */ string, /* spellChecker */ Checker ]
    change: (navigator: Navigator, word: string, changeTo: string) => void
    changeAll: (navigator: Navigator, word: string, changeTo: string) => void
}

export abstract class NavigatorInterface {

    // Own properties of Gspell-1.Gspell.NavigatorInterface

    static name: string
}

export interface NavigatorTextViewClass {

    // Own fields of Gspell-1.Gspell.NavigatorTextViewClass

    parentClass: GObject.InitiallyUnownedClass
    padding: object[]
}

export abstract class NavigatorTextViewClass {

    // Own properties of Gspell-1.Gspell.NavigatorTextViewClass

    static name: string
}

export interface TextBufferClass {

    // Own fields of Gspell-1.Gspell.TextBufferClass

    parentClass: GObject.ObjectClass
}

export abstract class TextBufferClass {

    // Own properties of Gspell-1.Gspell.TextBufferClass

    static name: string
}

export interface TextViewClass {

    // Own fields of Gspell-1.Gspell.TextViewClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class TextViewClass {

    // Own properties of Gspell-1.Gspell.TextViewClass

    static name: string
}
