
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Pango-1.0
 */

import type * as cairo from './cairo-1.0.js';
import type * as HarfBuzz from './HarfBuzz-0.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * `PangoAlignment` describes how to align the lines of a `PangoLayout`
 * within the available space.
 * 
 * If the `PangoLayout` is set to justify using [method`Pango`.Layout.set_justify],
 * this only affects partial lines.
 * 
 * See [method`Pango`.Layout.set_auto_dir] for how text direction affects
 * the interpretation of `PangoAlignment` values.
 */
export enum Alignment {
    /**
     * Put all available space on the right
     */
    LEFT,
    /**
     * Center the line within the available space
     */
    CENTER,
    /**
     * Put all available space on the left
     */
    RIGHT,
}
/**
 * The `PangoAttrType` distinguishes between different types of attributes.
 * 
 * Along with the predefined values, it is possible to allocate additional
 * values for custom attributes using [func`AttrType`.register]. The predefined
 * values are given below. The type of structure used to store the attribute is
 * listed in parentheses after the description.
 */
export enum AttrType {
    /**
     * does not happen
     */
    INVALID,
    /**
     * language ([struct`Pango`.AttrLanguage])
     */
    LANGUAGE,
    /**
     * font family name list ([struct`Pango`.AttrString])
     */
    FAMILY,
    /**
     * font slant style ([struct`Pango`.AttrInt])
     */
    STYLE,
    /**
     * font weight ([struct`Pango`.AttrInt])
     */
    WEIGHT,
    /**
     * font variant (normal or small caps) ([struct`Pango`.AttrInt])
     */
    VARIANT,
    /**
     * font stretch ([struct`Pango`.AttrInt])
     */
    STRETCH,
    /**
     * font size in points scaled by %PANGO_SCALE ([struct`Pango`.AttrInt])
     */
    SIZE,
    /**
     * font description ([struct`Pango`.AttrFontDesc])
     */
    FONT_DESC,
    /**
     * foreground color ([struct`Pango`.AttrColor])
     */
    FOREGROUND,
    /**
     * background color ([struct`Pango`.AttrColor])
     */
    BACKGROUND,
    /**
     * whether the text has an underline ([struct`Pango`.AttrInt])
     */
    UNDERLINE,
    /**
     * whether the text is struck-through ([struct`Pango`.AttrInt])
     */
    STRIKETHROUGH,
    /**
     * baseline displacement ([struct`Pango`.AttrInt])
     */
    RISE,
    /**
     * shape ([struct`Pango`.AttrShape])
     */
    SHAPE,
    /**
     * font size scale factor ([struct`Pango`.AttrFloat])
     */
    SCALE,
    /**
     * whether fallback is enabled ([struct`Pango`.AttrInt])
     */
    FALLBACK,
    /**
     * letter spacing ([struct`PangoAttrInt]`)
     */
    LETTER_SPACING,
    /**
     * underline color ([struct`Pango`.AttrColor])
     */
    UNDERLINE_COLOR,
    /**
     * strikethrough color ([struct`Pango`.AttrColor])
     */
    STRIKETHROUGH_COLOR,
    /**
     * font size in pixels scaled by %PANGO_SCALE ([struct`Pango`.AttrInt])
     */
    ABSOLUTE_SIZE,
    /**
     * base text gravity ([struct`Pango`.AttrInt])
     */
    GRAVITY,
    /**
     * gravity hint ([struct`Pango`.AttrInt])
     */
    GRAVITY_HINT,
    /**
     * OpenType font features ([struct`Pango`.AttrFontFeatures]). Since 1.38
     */
    FONT_FEATURES,
    /**
     * foreground alpha ([struct`Pango`.AttrInt]). Since 1.38
     */
    FOREGROUND_ALPHA,
    /**
     * background alpha ([struct`Pango`.AttrInt]). Since 1.38
     */
    BACKGROUND_ALPHA,
    /**
     * whether breaks are allowed ([struct`Pango`.AttrInt]). Since 1.44
     */
    ALLOW_BREAKS,
    /**
     * how to render invisible characters ([struct`Pango`.AttrInt]). Since 1.44
     */
    SHOW,
    /**
     * whether to insert hyphens at intra-word line breaks ([struct`Pango`.AttrInt]). Since 1.44
     */
    INSERT_HYPHENS,
    /**
     * whether the text has an overline ([struct`Pango`.AttrInt]). Since 1.46
     */
    OVERLINE,
    /**
     * overline color ([struct`Pango`.AttrColor]). Since 1.46
     */
    OVERLINE_COLOR,
    /**
     * line height factor ([struct`Pango`.AttrFloat]). Since: 1.50
     */
    LINE_HEIGHT,
    /**
     * line height ([struct`Pango`.AttrInt]). Since: 1.50
     */
    ABSOLUTE_LINE_HEIGHT,
    TEXT_TRANSFORM,
    /**
     * override segmentation to classify the range of the attribute as a single word ([struct`Pango`.AttrInt]). Since 1.50
     */
    WORD,
    /**
     * override segmentation to classify the range of the attribute as a single sentence ([struct`Pango`.AttrInt]). Since 1.50
     */
    SENTENCE,
    /**
     * baseline displacement ([struct`Pango`.AttrInt]). Since 1.50
     */
    BASELINE_SHIFT,
    /**
     * font-relative size change ([struct`Pango`.AttrInt]). Since 1.50
     */
    FONT_SCALE,
}
/**
 * An enumeration that affects baseline shifts between runs.
 */
export enum BaselineShift {
    /**
     * Leave the baseline unchanged
     */
    NONE,
    /**
     * Shift the baseline to the superscript position,
     *   relative to the previous run
     */
    SUPERSCRIPT,
    /**
     * Shift the baseline to the subscript position,
     *   relative to the previous run
     */
    SUBSCRIPT,
}
/**
 * `PangoBidiType` represents the bidirectional character
 * type of a Unicode character.
 * 
 * The values in this enumeration are specified by the
 * [Unicode bidirectional algorithm](http://www.unicode.org/reports/tr9/).
 */
export enum BidiType {
    /**
     * Left-to-Right
     */
    L,
    /**
     * Left-to-Right Embedding
     */
    LRE,
    /**
     * Left-to-Right Override
     */
    LRO,
    /**
     * Right-to-Left
     */
    R,
    /**
     * Right-to-Left Arabic
     */
    AL,
    /**
     * Right-to-Left Embedding
     */
    RLE,
    /**
     * Right-to-Left Override
     */
    RLO,
    /**
     * Pop Directional Format
     */
    PDF,
    /**
     * European Number
     */
    EN,
    /**
     * European Number Separator
     */
    ES,
    /**
     * European Number Terminator
     */
    ET,
    /**
     * Arabic Number
     */
    AN,
    /**
     * Common Number Separator
     */
    CS,
    /**
     * Nonspacing Mark
     */
    NSM,
    /**
     * Boundary Neutral
     */
    BN,
    /**
     * Paragraph Separator
     */
    B,
    /**
     * Segment Separator
     */
    S,
    /**
     * Whitespace
     */
    WS,
    /**
     * Other Neutrals
     */
    ON,
    /**
     * Left-to-Right isolate. Since 1.48.6
     */
    LRI,
    /**
     * Right-to-Left isolate. Since 1.48.6
     */
    RLI,
    /**
     * First strong isolate. Since 1.48.6
     */
    FSI,
    /**
     * Pop directional isolate. Since 1.48.6
     */
    PDI,
}
/**
 * `PangoCoverageLevel` is used to indicate how well a font can
 * represent a particular Unicode character for a particular script.
 * 
 * Since 1.44, only %PANGO_COVERAGE_NONE and %PANGO_COVERAGE_EXACT
 * will be returned.
 */
export enum CoverageLevel {
    /**
     * The character is not representable with
     *   the font.
     */
    NONE,
    /**
     * The character is represented in a
     *   way that may be comprehensible but is not the correct
     *   graphical form. For instance, a Hangul character represented
     *   as a a sequence of Jamos, or a Latin transliteration of a
     *   Cyrillic word.
     */
    FALLBACK,
    /**
     * The character is represented as
     *   basically the correct graphical form, but with a stylistic
     *   variant inappropriate for the current script.
     */
    APPROXIMATE,
    /**
     * The character is represented as the
     *   correct graphical form.
     */
    EXACT,
}
/**
 * `PangoDirection` represents a direction in the Unicode bidirectional
 * algorithm.
 * 
 * Not every value in this enumeration makes sense for every usage of
 * `PangoDirection`; for example, the return value of [func`unichar_direction]`
 * and [func`find_base_dir]` cannot be `PANGO_DIRECTION_WEAK_LTR` or
 * `PANGO_DIRECTION_WEAK_RTL`, since every character is either neutral
 * or has a strong direction; on the other hand `PANGO_DIRECTION_NEUTRAL`
 * doesn't make sense to pass to [func`itemize_with_base_dir]`.
 * 
 * The `PANGO_DIRECTION_TTB_LTR`, `PANGO_DIRECTION_TTB_RTL` values come from
 * an earlier interpretation of this enumeration as the writing direction
 * of a block of text and are no longer used. See `PangoGravity` for how
 * vertical text is handled in Pango.
 * 
 * If you are interested in text direction, you should really use fribidi
 * directly. `PangoDirection` is only retained because it is used in some
 * public apis.
 */
export enum Direction {
    /**
     * A strong left-to-right direction
     */
    LTR,
    /**
     * A strong right-to-left direction
     */
    RTL,
    /**
     * Deprecated value; treated the
     *   same as `PANGO_DIRECTION_RTL`.
     */
    TTB_LTR,
    /**
     * Deprecated value; treated the
     *   same as `PANGO_DIRECTION_LTR`
     */
    TTB_RTL,
    /**
     * A weak left-to-right direction
     */
    WEAK_LTR,
    /**
     * A weak right-to-left direction
     */
    WEAK_RTL,
    /**
     * No direction specified
     */
    NEUTRAL,
}
/**
 * `PangoEllipsizeMode` describes what sort of ellipsization
 * should be applied to text.
 * 
 * In the ellipsization process characters are removed from the
 * text in order to make it fit to a given width and replaced
 * with an ellipsis.
 */
export enum EllipsizeMode {
    /**
     * No ellipsization
     */
    NONE,
    /**
     * Omit characters at the start of the text
     */
    START,
    /**
     * Omit characters in the middle of the text
     */
    MIDDLE,
    /**
     * Omit characters at the end of the text
     */
    END,
}
/**
 * An enumeration that affects font sizes for superscript
 * and subscript positioning and for (emulated) Small Caps.
 */
export enum FontScale {
    /**
     * Leave the font size unchanged
     */
    NONE,
    /**
     * Change the font to a size suitable for superscripts
     */
    SUPERSCRIPT,
    /**
     * Change the font to a size suitable for subscripts
     */
    SUBSCRIPT,
    /**
     * Change the font to a size suitable for Small Caps
     */
    SMALL_CAPS,
}
/**
 * `PangoGravity` represents the orientation of glyphs in a segment
 * of text.
 * 
 * This is useful when rendering vertical text layouts. In those situations,
 * the layout is rotated using a non-identity [struct`Pango`.Matrix], and then
 * glyph orientation is controlled using `PangoGravity`.
 * 
 * Not every value in this enumeration makes sense for every usage of
 * `PangoGravity`; for example, %PANGO_GRAVITY_AUTO only can be passed to
 * [method`Pango`.Context.set_base_gravity] and can only be returned by
 * [method`Pango`.Context.get_base_gravity].
 * 
 * See also: [enum`Pango`.GravityHint]
 */
export enum Gravity {
    /**
     * Glyphs stand upright (default) <img align="right" valign="center" src="m-south.png">
     */
    SOUTH,
    /**
     * Glyphs are rotated 90 degrees counter-clockwise. <img align="right" valign="center" src="m-east.png">
     */
    EAST,
    /**
     * Glyphs are upside-down. <img align="right" valign="cener" src="m-north.png">
     */
    NORTH,
    /**
     * Glyphs are rotated 90 degrees clockwise. <img align="right" valign="center" src="m-west.png">
     */
    WEST,
    /**
     * Gravity is resolved from the context matrix
     */
    AUTO,
}
/**
 * `PangoGravityHint` defines how horizontal scripts should behave in a
 * vertical context.
 * 
 * That is, English excerpts in a vertical paragraph for example.
 * 
 * See also [enum`Pango`.Gravity]
 */
export enum GravityHint {
    /**
     * scripts will take their natural gravity based
     *   on the base gravity and the script.  This is the default.
     */
    NATURAL,
    /**
     * always use the base gravity set, regardless of
     *   the script.
     */
    STRONG,
    /**
     * for scripts not in their natural direction (eg.
     *   Latin in East gravity), choose per-script gravity such that every script
     *   respects the line progression. This means, Latin and Arabic will take
     *   opposite gravities and both flow top-to-bottom for example.
     */
    LINE,
}
/**
 * Errors that can be returned by [func`Pango`.Layout.deserialize].
 */
export enum LayoutDeserializeError {
    /**
     * Unspecified error
     */
    INVALID,
    /**
     * A JSon value could not be
     *   interpreted
     */
    INVALID_VALUE,
    /**
     * A required JSon member was
     *   not found
     */
    MISSING_VALUE,
}
/**
 * The `PangoOverline` enumeration is used to specify whether text
 * should be overlined, and if so, the type of line.
 */
export enum Overline {
    /**
     * no overline should be drawn
     */
    NONE,
    /**
     * Draw a single line above the ink
     *   extents of the text being underlined.
     */
    SINGLE,
}
/**
 * `PangoRenderPart` defines different items to render for such
 * purposes as setting colors.
 */
export enum RenderPart {
    /**
     * the text itself
     */
    FOREGROUND,
    /**
     * the area behind the text
     */
    BACKGROUND,
    /**
     * underlines
     */
    UNDERLINE,
    /**
     * strikethrough lines
     */
    STRIKETHROUGH,
    /**
     * overlines
     */
    OVERLINE,
}
/**
 * The `PangoScript` enumeration identifies different writing
 * systems.
 * 
 * The values correspond to the names as defined in the Unicode standard. See
 * [Unicode Standard Annex 24: Script names](http://www.unicode.org/reports/tr24/)
 * 
 * Note that this enumeration is deprecated and will not be updated to include values
 * in newer versions of the Unicode standard. Applications should use the
 * [enum`GLib`.UnicodeScript] enumeration instead,
 * whose values are interchangeable with `PangoScript`.
 */
export enum Script {
    /**
     * a value never returned from pango_script_for_unichar()
     */
    INVALID_CODE,
    /**
     * a character used by multiple different scripts
     */
    COMMON,
    /**
     * a mark glyph that takes its script from the
     * base glyph to which it is attached
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
     * New Tai Lue. Since 1.10
     */
    NEW_TAI_LUE,
    /**
     * Buginese. Since 1.10
     */
    BUGINESE,
    /**
     * Glagolitic. Since 1.10
     */
    GLAGOLITIC,
    /**
     * Tifinagh. Since 1.10
     */
    TIFINAGH,
    /**
     * Syloti Nagri. Since 1.10
     */
    SYLOTI_NAGRI,
    /**
     * Old Persian. Since 1.10
     */
    OLD_PERSIAN,
    /**
     * Kharoshthi. Since 1.10
     */
    KHAROSHTHI,
    /**
     * an unassigned code point. Since 1.14
     */
    UNKNOWN,
    /**
     * Balinese. Since 1.14
     */
    BALINESE,
    /**
     * Cuneiform. Since 1.14
     */
    CUNEIFORM,
    /**
     * Phoenician. Since 1.14
     */
    PHOENICIAN,
    /**
     * Phags-pa. Since 1.14
     */
    PHAGS_PA,
    /**
     * N'Ko. Since 1.14
     */
    NKO,
    /**
     * Kayah Li. Since 1.20.1
     */
    KAYAH_LI,
    /**
     * Lepcha. Since 1.20.1
     */
    LEPCHA,
    /**
     * Rejang. Since 1.20.1
     */
    REJANG,
    /**
     * Sundanese. Since 1.20.1
     */
    SUNDANESE,
    /**
     * Saurashtra. Since 1.20.1
     */
    SAURASHTRA,
    /**
     * Cham. Since 1.20.1
     */
    CHAM,
    /**
     * Ol Chiki. Since 1.20.1
     */
    OL_CHIKI,
    /**
     * Vai. Since 1.20.1
     */
    VAI,
    /**
     * Carian. Since 1.20.1
     */
    CARIAN,
    /**
     * Lycian. Since 1.20.1
     */
    LYCIAN,
    /**
     * Lydian. Since 1.20.1
     */
    LYDIAN,
    /**
     * Batak. Since 1.32
     */
    BATAK,
    /**
     * Brahmi. Since 1.32
     */
    BRAHMI,
    /**
     * Mandaic. Since 1.32
     */
    MANDAIC,
    /**
     * Chakma. Since: 1.32
     */
    CHAKMA,
    /**
     * Meroitic Cursive. Since: 1.32
     */
    MEROITIC_CURSIVE,
    /**
     * Meroitic Hieroglyphs. Since: 1.32
     */
    MEROITIC_HIEROGLYPHS,
    /**
     * Miao. Since: 1.32
     */
    MIAO,
    /**
     * Sharada. Since: 1.32
     */
    SHARADA,
    /**
     * Sora Sompeng. Since: 1.32
     */
    SORA_SOMPENG,
    /**
     * Takri. Since: 1.32
     */
    TAKRI,
    /**
     * Bassa. Since: 1.40
     */
    BASSA_VAH,
    /**
     * Caucasian Albanian. Since: 1.40
     */
    CAUCASIAN_ALBANIAN,
    /**
     * Duployan. Since: 1.40
     */
    DUPLOYAN,
    /**
     * Elbasan. Since: 1.40
     */
    ELBASAN,
    /**
     * Grantha. Since: 1.40
     */
    GRANTHA,
    /**
     * Kjohki. Since: 1.40
     */
    KHOJKI,
    /**
     * Khudawadi, Sindhi. Since: 1.40
     */
    KHUDAWADI,
    /**
     * Linear A. Since: 1.40
     */
    LINEAR_A,
    /**
     * Mahajani. Since: 1.40
     */
    MAHAJANI,
    /**
     * Manichaean. Since: 1.40
     */
    MANICHAEAN,
    /**
     * Mende Kikakui. Since: 1.40
     */
    MENDE_KIKAKUI,
    /**
     * Modi. Since: 1.40
     */
    MODI,
    /**
     * Mro. Since: 1.40
     */
    MRO,
    /**
     * Nabataean. Since: 1.40
     */
    NABATAEAN,
    /**
     * Old North Arabian. Since: 1.40
     */
    OLD_NORTH_ARABIAN,
    /**
     * Old Permic. Since: 1.40
     */
    OLD_PERMIC,
    /**
     * Pahawh Hmong. Since: 1.40
     */
    PAHAWH_HMONG,
    /**
     * Palmyrene. Since: 1.40
     */
    PALMYRENE,
    /**
     * Pau Cin Hau. Since: 1.40
     */
    PAU_CIN_HAU,
    /**
     * Psalter Pahlavi. Since: 1.40
     */
    PSALTER_PAHLAVI,
    /**
     * Siddham. Since: 1.40
     */
    SIDDHAM,
    /**
     * Tirhuta. Since: 1.40
     */
    TIRHUTA,
    /**
     * Warang Citi. Since: 1.40
     */
    WARANG_CITI,
    /**
     * Ahom. Since: 1.40
     */
    AHOM,
    /**
     * Anatolian Hieroglyphs. Since: 1.40
     */
    ANATOLIAN_HIEROGLYPHS,
    /**
     * Hatran. Since: 1.40
     */
    HATRAN,
    /**
     * Multani. Since: 1.40
     */
    MULTANI,
    /**
     * Old Hungarian. Since: 1.40
     */
    OLD_HUNGARIAN,
    /**
     * Signwriting. Since: 1.40
     */
    SIGNWRITING,
}
/**
 * An enumeration specifying the width of the font relative to other designs
 * within a family.
 */
export enum Stretch {
    /**
     * ultra condensed width
     */
    ULTRA_CONDENSED,
    /**
     * extra condensed width
     */
    EXTRA_CONDENSED,
    /**
     * condensed width
     */
    CONDENSED,
    /**
     * semi condensed width
     */
    SEMI_CONDENSED,
    /**
     * the normal width
     */
    NORMAL,
    /**
     * semi expanded width
     */
    SEMI_EXPANDED,
    /**
     * expanded width
     */
    EXPANDED,
    /**
     * extra expanded width
     */
    EXTRA_EXPANDED,
    /**
     * ultra expanded width
     */
    ULTRA_EXPANDED,
}
/**
 * An enumeration specifying the various slant styles possible for a font.
 */
export enum Style {
    /**
     * the font is upright.
     */
    NORMAL,
    /**
     * the font is slanted, but in a roman style.
     */
    OBLIQUE,
    /**
     * the font is slanted in an italic style.
     */
    ITALIC,
}
/**
 * `PangoTabAlign` specifies where the text appears relative to the tab stop
 * position.
 */
export enum TabAlign {
    /**
     * the text appears to the right of the tab stop position
     */
    LEFT,
    /**
     * the text appears to the left of the tab stop position
     *   until the available space is filled. Since: 1.50
     */
    RIGHT,
    /**
     * the text is centered at the tab stop position
     *   until the available space is filled. Since: 1.50
     */
    CENTER,
    /**
     * text before the first occurrence of the decimal point
     *   character appears to the left of the tab stop position (until the available
     *   space is filled), the rest to the right. Since: 1.50
     */
    DECIMAL,
}
/**
 * An enumeration that affects how Pango treats characters during shaping.
 */
export enum TextTransform {
    /**
     * Leave text unchanged
     */
    NONE,
    /**
     * Display letters and numbers as lowercase
     */
    LOWERCASE,
    /**
     * Display letters and numbers as uppercase
     */
    UPPERCASE,
    /**
     * Display the first character of a word
     *   in titlecase
     */
    CAPITALIZE,
}
/**
 * The `PangoUnderline` enumeration is used to specify whether text
 * should be underlined, and if so, the type of underlining.
 */
export enum Underline {
    /**
     * no underline should be drawn
     */
    NONE,
    /**
     * a single underline should be drawn
     */
    SINGLE,
    /**
     * a double underline should be drawn
     */
    DOUBLE,
    /**
     * a single underline should be drawn at a
     *   position beneath the ink extents of the text being
     *   underlined. This should be used only for underlining
     *   single characters, such as for keyboard accelerators.
     *   %PANGO_UNDERLINE_SINGLE should be used for extended
     *   portions of text.
     */
    LOW,
    /**
     * an underline indicating an error should
     *   be drawn below. The exact style of rendering is up to the
     *   `PangoRenderer` in use, but typical styles include wavy
     *   or dotted lines.
     *   This underline is typically used to indicate an error such
     *   as a possible mispelling; in some cases a contrasting color
     *   may automatically be used. This type of underlining is
     *   available since Pango 1.4.
     */
    ERROR,
    /**
     * Like `PANGO_UNDERLINE_SINGLE,` but
     *   drawn continuously across multiple runs. This type
     *   of underlining is available since Pango 1.46.
     */
    SINGLE_LINE,
    /**
     * Like `PANGO_UNDERLINE_DOUBLE,` but
     *   drawn continuously across multiple runs. This type
     *   of underlining is available since Pango 1.46.
     */
    DOUBLE_LINE,
    /**
     * Like `PANGO_UNDERLINE_ERROR,` but
     *   drawn continuously across multiple runs. This type
     *   of underlining is available since Pango 1.46.
     */
    ERROR_LINE,
}
/**
 * An enumeration specifying capitalization variant of the font.
 */
export enum Variant {
    /**
     * A normal font.
     */
    NORMAL,
    /**
     * A font with the lower case characters
     *   replaced by smaller variants of the capital characters.
     */
    SMALL_CAPS,
    /**
     * A font with all characters
     *   replaced by smaller variants of the capital characters. Since: 1.50
     */
    ALL_SMALL_CAPS,
    /**
     * A font with the lower case characters
     *   replaced by smaller variants of the capital characters.
     *   Petite Caps can be even smaller than Small Caps. Since: 1.50
     */
    PETITE_CAPS,
    /**
     * A font with all characters
     *   replaced by smaller variants of the capital characters.
     *   Petite Caps can be even smaller than Small Caps. Since: 1.50
     */
    ALL_PETITE_CAPS,
    /**
     * A font with the upper case characters
     *   replaced by smaller variants of the capital letters. Since: 1.50
     */
    UNICASE,
    /**
     * A font with capital letters that
     *   are more suitable for all-uppercase titles. Since: 1.50
     */
    TITLE_CAPS,
}
/**
 * An enumeration specifying the weight (boldness) of a font.
 * 
 * Weight is specified as a numeric value ranging from 100 to 1000.
 * This enumeration simply provides some common, predefined values.
 */
export enum Weight {
    /**
     * the thin weight (= 100) Since: 1.24
     */
    THIN,
    /**
     * the ultralight weight (= 200)
     */
    ULTRALIGHT,
    /**
     * the light weight (= 300)
     */
    LIGHT,
    /**
     * the semilight weight (= 350) Since: 1.36.7
     */
    SEMILIGHT,
    /**
     * the book weight (= 380) Since: 1.24)
     */
    BOOK,
    /**
     * the default weight (= 400)
     */
    NORMAL,
    /**
     * the normal weight (= 500) Since: 1.24
     */
    MEDIUM,
    /**
     * the semibold weight (= 600)
     */
    SEMIBOLD,
    /**
     * the bold weight (= 700)
     */
    BOLD,
    /**
     * the ultrabold weight (= 800)
     */
    ULTRABOLD,
    /**
     * the heavy weight (= 900)
     */
    HEAVY,
    /**
     * the ultraheavy weight (= 1000) Since: 1.24
     */
    ULTRAHEAVY,
}
/**
 * `PangoWrapMode` describes how to wrap the lines of a `PangoLayout`
 * to the desired width.
 * 
 * For `PANGO_WRAP_WORD,` Pango uses break opportunities that are determined
 * by the Unicode line breaking algorithm. For `PANGO_WRAP_CHAR,` Pango allows
 * breaking at grapheme boundaries that are determined by the Unicode text
 * segmentation algorithm.
 */
export enum WrapMode {
    /**
     * wrap lines at word boundaries.
     */
    WORD,
    /**
     * wrap lines at character boundaries.
     */
    CHAR,
    /**
     * wrap lines at word boundaries, but fall back to
     *   character boundaries if there is not enough space for a full word.
     */
    WORD_CHAR,
}
/**
 * The bits in a `PangoFontMask` correspond to the set fields in a
 * `PangoFontDescription`.
 * @bitfield 
 */
export enum FontMask {
    /**
     * the font family is specified.
     */
    FAMILY,
    /**
     * the font style is specified.
     */
    STYLE,
    /**
     * the font variant is specified.
     */
    VARIANT,
    /**
     * the font weight is specified.
     */
    WEIGHT,
    /**
     * the font stretch is specified.
     */
    STRETCH,
    /**
     * the font size is specified.
     */
    SIZE,
    /**
     * the font gravity is specified (Since: 1.16.)
     */
    GRAVITY,
    /**
     * OpenType font variations are specified (Since: 1.42)
     */
    VARIATIONS,
}
/**
 * Flags that influence the behavior of [func`Pango`.Layout.deserialize].
 * 
 * New members may be added to this enumeration over time.
 * @bitfield 
 */
export enum LayoutDeserializeFlags {
    /**
     * Default behavior
     */
    DEFAULT,
    /**
     * Apply context information
     *   from the serialization to the `PangoContext`
     */
    CONTEXT,
}
/**
 * Flags that influence the behavior of [method`Pango`.Layout.serialize].
 * 
 * New members may be added to this enumeration over time.
 * @bitfield 
 */
export enum LayoutSerializeFlags {
    /**
     * Default behavior
     */
    DEFAULT,
    /**
     * Include context information
     */
    CONTEXT,
    /**
     * Include information about the formatted output
     */
    OUTPUT,
}
/**
 * Flags influencing the shaping process.
 * 
 * `PangoShapeFlags` can be passed to [func`Pango`.shape_with_flags].
 * @bitfield 
 */
export enum ShapeFlags {
    /**
     * Default value
     */
    NONE,
    /**
     * Round glyph positions and widths to whole device units
     *   This option should be set if the target renderer can't do subpixel positioning of glyphs
     */
    ROUND_POSITIONS,
}
/**
 * These flags affect how Pango treats characters that are normally
 * not visible in the output.
 * @bitfield 
 */
export enum ShowFlags {
    /**
     * No special treatment for invisible characters
     */
    NONE,
    /**
     * Render spaces, tabs and newlines visibly
     */
    SPACES,
    /**
     * Render line breaks visibly
     */
    LINE_BREAKS,
    /**
     * Render default-ignorable Unicode
     *   characters visibly
     */
    IGNORABLES,
}
/**
 * Whether the segment should be shifted to center around the baseline.
 * 
 * This is mainly used in vertical writing directions.
 */
export const ANALYSIS_FLAG_CENTERED_BASELINE: number
/**
 * Whether this run holds ellipsized text.
 */
export const ANALYSIS_FLAG_IS_ELLIPSIS: number
/**
 * Whether to add a hyphen at the end of the run during shaping.
 */
export const ANALYSIS_FLAG_NEED_HYPHEN: number
/**
 * Value for `start_index` in `PangoAttribute` that indicates
 * the beginning of the text.
 */
export const ATTR_INDEX_FROM_TEXT_BEGINNING: number
/**
 * Value for `end_index` in `PangoAttribute` that indicates
 * the end of the text.
 */
export const ATTR_INDEX_TO_TEXT_END: number
/**
 * A `PangoGlyph` value that indicates a zero-width empty glpyh.
 * 
 * This is useful for example in shaper modules, to use as the glyph for
 * various zero-width Unicode characters (those passing [func`is_zero_width]`).
 */
export const GLYPH_EMPTY: Glyph
/**
 * A `PangoGlyph` value for invalid input.
 * 
 * `PangoLayout` produces one such glyph per invalid input UTF-8 byte and such
 * a glyph is rendered as a crossed box.
 * 
 * Note that this value is defined such that it has the %PANGO_GLYPH_UNKNOWN_FLAG
 * set.
 */
export const GLYPH_INVALID_INPUT: Glyph
/**
 * Flag used in `PangoGlyph` to turn a `gunichar` value of a valid Unicode
 * character into an unknown-character glyph for that `gunichar`.
 * 
 * Such unknown-character glyphs may be rendered as a 'hex box'.
 */
export const GLYPH_UNKNOWN_FLAG: Glyph
/**
 * The scale between dimensions used for Pango distances and device units.
 * 
 * The definition of device units is dependent on the output device; it will
 * typically be pixels for a screen, and points for a printer. %PANGO_SCALE is
 * currently 1024, but this may be changed in the future.
 * 
 * When setting font sizes, device units are always considered to be
 * points (as in "12 point font"), rather than pixels.
 */
export const SCALE: number
/**
 * The major component of the version of Pango available at compile-time.
 */
export const VERSION_MAJOR: number
/**
 * The micro component of the version of Pango available at compile-time.
 */
export const VERSION_MICRO: number
/**
 * The minor component of the version of Pango available at compile-time.
 */
export const VERSION_MINOR: number
/**
 * A string literal containing the version of Pango available at compile-time.
 */
export const VERSION_STRING: string
/**
 * Create a new allow-breaks attribute.
 * 
 * If breaks are disabled, the range will be kept in a
 * single run, as far as possible.
 * @param allowBreaks %TRUE if we line breaks are allowed
 */
export function attrAllowBreaksNew(allowBreaks: boolean): Attribute
/**
 * Create a new background alpha attribute.
 * @param alpha the alpha value, between 1 and 65536
 */
export function attrBackgroundAlphaNew(alpha: number): Attribute
/**
 * Create a new background color attribute.
 * @param red the red value (ranging from 0 to 65535)
 * @param green the green value
 * @param blue the blue value
 */
export function attrBackgroundNew(red: number, green: number, blue: number): Attribute
/**
 * Create a new baseline displacement attribute.
 * 
 * The effect of this attribute is to shift the baseline of a run,
 * relative to the run of preceding run.
 * 
 * <picture>
 *   <source srcset="baseline-shift-dark.png" media="(prefers-color-scheme: dark)">
 *   <img alt="Baseline Shift" src="baseline-shift-light.png">
 * </picture>
 * @param shift either a `PangoBaselineShift` enumeration value or an absolute value (> 1024)   in Pango units, relative to the baseline of the previous run.   Positive values displace the text upwards.
 */
export function attrBaselineShiftNew(shift: number): Attribute
/**
 * Apply customization from attributes to the breaks in `attrs`.
 * 
 * The line breaks are assumed to have been produced
 * by [func`Pango`.default_break] and [func`Pango`.tailor_break].
 * @param text text to break. Must be valid UTF-8
 * @param length length of text in bytes (may be -1 if `text` is nul-terminated)
 * @param attrList `PangoAttrList` to apply
 * @param offset Byte offset of `text` from the beginning of the paragraph
 * @param attrs array with one `PangoLogAttr`   per character in `text,` plus one extra, to be filled in
 */
export function attrBreak(text: string, length: number, attrList: AttrList, offset: number, attrs: LogAttr[]): void
/**
 * Create a new font fallback attribute.
 * 
 * If fallback is disabled, characters will only be
 * used from the closest matching font on the system.
 * No fallback will be done to other fonts on the system
 * that might contain the characters in the text.
 * @param enableFallback %TRUE if we should fall back on other fonts   for characters the active font is missing
 */
export function attrFallbackNew(enableFallback: boolean): Attribute
/**
 * Create a new font family attribute.
 * @param family the family or comma-separated list of families
 */
export function attrFamilyNew(family: string): Attribute
/**
 * Create a new font description attribute.
 * 
 * This attribute allows setting family, style, weight, variant,
 * stretch, and size simultaneously.
 * @param desc the font description
 */
export function attrFontDescNew(desc: FontDescription): Attribute
/**
 * Create a new font features tag attribute.
 * 
 * You can use this attribute to select OpenType font features like small-caps,
 * alternative glyphs, ligatures, etc. for fonts that support them.
 * @param features a string with OpenType font features, with the syntax of the [CSS font-feature-settings property](https://www.w3.org/TR/css-fonts-4/#font-rend-desc)
 */
export function attrFontFeaturesNew(features: string): Attribute
/**
 * Create a new font scale attribute.
 * 
 * The effect of this attribute is to change the font size of a run,
 * relative to the size of preceding run.
 * @param scale a `PangoFontScale` value, which indicates font size change relative   to the size of the previous run.
 */
export function attrFontScaleNew(scale: FontScale): Attribute
/**
 * Create a new foreground alpha attribute.
 * @param alpha the alpha value, between 1 and 65536
 */
export function attrForegroundAlphaNew(alpha: number): Attribute
/**
 * Create a new foreground color attribute.
 * @param red the red value (ranging from 0 to 65535)
 * @param green the green value
 * @param blue the blue value
 */
export function attrForegroundNew(red: number, green: number, blue: number): Attribute
/**
 * Create a new gravity hint attribute.
 * @param hint the gravity hint value
 */
export function attrGravityHintNew(hint: GravityHint): Attribute
/**
 * Create a new gravity attribute.
 * @param gravity the gravity value; should not be %PANGO_GRAVITY_AUTO
 */
export function attrGravityNew(gravity: Gravity): Attribute
/**
 * Create a new insert-hyphens attribute.
 * 
 * Pango will insert hyphens when breaking lines in
 * the middle of a word. This attribute can be used
 * to suppress the hyphen.
 * @param insertHyphens %TRUE if hyphens should be inserted
 */
export function attrInsertHyphensNew(insertHyphens: boolean): Attribute
/**
 * Create a new language tag attribute.
 * @param language language tag
 */
export function attrLanguageNew(language: Language): Attribute
/**
 * Create a new letter-spacing attribute.
 * @param letterSpacing amount of extra space to add between   graphemes of the text, in Pango units
 */
export function attrLetterSpacingNew(letterSpacing: number): Attribute
/**
 * Modify the height of logical line extents by a factor.
 * 
 * This affects the values returned by
 * [method`Pango`.LayoutLine.get_extents],
 * [method`Pango`.LayoutLine.get_pixel_extents] and
 * [method`Pango`.LayoutIter.get_line_extents].
 * @param factor the scaling factor to apply to the logical height
 */
export function attrLineHeightNew(factor: number): Attribute
/**
 * Override the height of logical line extents to be `height`.
 * 
 * This affects the values returned by
 * [method`Pango`.LayoutLine.get_extents],
 * [method`Pango`.LayoutLine.get_pixel_extents] and
 * [method`Pango`.LayoutIter.get_line_extents].
 * @param height the line height, in %PANGO_SCALE-ths of a point
 */
export function attrLineHeightNewAbsolute(height: number): Attribute
/**
 * Deserializes a `PangoAttrList` from a string.
 * 
 * This is the counterpart to [method`Pango`.AttrList.to_string].
 * See that functions for details about the format.
 * @param text a string
 */
export function attrListFromString(text: string): AttrList | null
/**
 * Create a new overline color attribute.
 * 
 * This attribute modifies the color of overlines.
 * If not set, overlines will use the foreground color.
 * @param red the red value (ranging from 0 to 65535)
 * @param green the green value
 * @param blue the blue value
 */
export function attrOverlineColorNew(red: number, green: number, blue: number): Attribute
/**
 * Create a new overline-style attribute.
 * @param overline the overline style
 */
export function attrOverlineNew(overline: Overline): Attribute
/**
 * Create a new baseline displacement attribute.
 * @param rise the amount that the text should be displaced vertically,   in Pango units. Positive values displace the text upwards.
 */
export function attrRiseNew(rise: number): Attribute
/**
 * Create a new font size scale attribute.
 * 
 * The base font for the affected text will have
 * its size multiplied by `scale_factor`.
 * @param scaleFactor factor to scale the font
 */
export function attrScaleNew(scaleFactor: number): Attribute
/**
 * Marks the range of the attribute as a single sentence.
 * 
 * Note that this may require adjustments to word and
 * sentence classification around the range.
 */
export function attrSentenceNew(): Attribute
/**
 * Create a new shape attribute.
 * 
 * A shape is used to impose a particular ink and logical
 * rectangle on the result of shaping a particular glyph.
 * This might be used, for instance, for embedding a picture
 * or a widget inside a `PangoLayout`.
 * @param inkRect ink rectangle to assign to each character
 * @param logicalRect logical rectangle to assign to each character
 */
export function attrShapeNew(inkRect: Rectangle, logicalRect: Rectangle): Attribute
/**
 * Creates a new shape attribute.
 * 
 * Like [func`Pango`.AttrShape.new], but a user data pointer
 * is also provided; this pointer can be accessed when later
 * rendering the glyph.
 * @param inkRect ink rectangle to assign to each character
 * @param logicalRect logical rectangle to assign to each character
 * @param data user data pointer
 * @param copyFunc function to copy `data` when the   attribute is copied. If %NULL, `data` is simply copied   as a pointer
 */
export function attrShapeNewWithData(inkRect: Rectangle, logicalRect: Rectangle, data: object | null, copyFunc: AttrDataCopyFunc | null): Attribute
/**
 * Create a new attribute that influences how invisible
 * characters are rendered.
 * @param flags `PangoShowFlags` to apply
 */
export function attrShowNew(flags: ShowFlags): Attribute
/**
 * Create a new font-size attribute in fractional points.
 * @param size the font size, in %PANGO_SCALE-ths of a point
 */
export function attrSizeNew(size: number): Attribute
/**
 * Create a new font-size attribute in device units.
 * @param size the font size, in %PANGO_SCALE-ths of a device unit
 */
export function attrSizeNewAbsolute(size: number): Attribute
/**
 * Create a new font stretch attribute.
 * @param stretch the stretch
 */
export function attrStretchNew(stretch: Stretch): Attribute
/**
 * Create a new strikethrough color attribute.
 * 
 * This attribute modifies the color of strikethrough lines.
 * If not set, strikethrough lines will use the foreground color.
 * @param red the red value (ranging from 0 to 65535)
 * @param green the green value
 * @param blue the blue value
 */
export function attrStrikethroughColorNew(red: number, green: number, blue: number): Attribute
/**
 * Create a new strike-through attribute.
 * @param strikethrough %TRUE if the text should be struck-through
 */
export function attrStrikethroughNew(strikethrough: boolean): Attribute
/**
 * Create a new font slant style attribute.
 * @param style the slant style
 */
export function attrStyleNew(style: Style): Attribute
/**
 * Create a new attribute that influences how characters
 * are transformed during shaping.
 * @param transform `PangoTextTransform` to apply
 */
export function attrTextTransformNew(transform: TextTransform): Attribute
/**
 * Fetches the attribute type name.
 * 
 * The attribute type name is the string passed in
 * when registering the type using
 * [func`Pango`.AttrType.register].
 * 
 * The returned value is an interned string (see
 * g_intern_string() for what that means) that should
 * not be modified or freed.
 * @param type an attribute type ID to fetch the name for
 */
export function attrTypeGetName(type: AttrType): string | null
/**
 * Allocate a new attribute type ID.
 * 
 * The attribute type name can be accessed later
 * by using [func`Pango`.AttrType.get_name].
 * @param name an identifier for the type
 */
export function attrTypeRegister(name: string): AttrType
/**
 * Create a new underline color attribute.
 * 
 * This attribute modifies the color of underlines.
 * If not set, underlines will use the foreground color.
 * @param red the red value (ranging from 0 to 65535)
 * @param green the green value
 * @param blue the blue value
 */
export function attrUnderlineColorNew(red: number, green: number, blue: number): Attribute
/**
 * Create a new underline-style attribute.
 * @param underline the underline style
 */
export function attrUnderlineNew(underline: Underline): Attribute
/**
 * Create a new font variant attribute (normal or small caps).
 * @param variant the variant
 */
export function attrVariantNew(variant: Variant): Attribute
/**
 * Create a new font weight attribute.
 * @param weight the weight
 */
export function attrWeightNew(weight: Weight): Attribute
/**
 * Marks the range of the attribute as a single word.
 * 
 * Note that this may require adjustments to word and
 * sentence classification around the range.
 */
export function attrWordNew(): Attribute
/**
 * Determines the bidirectional type of a character.
 * 
 * The bidirectional type is specified in the Unicode Character Database.
 * 
 * A simplified version of this function is available as [func`unichar_direction]`.
 * @param ch a Unicode character
 */
export function bidiTypeForUnichar(ch: string): BidiType
/**
 * Determines possible line, word, and character breaks
 * for a string of Unicode text with a single analysis.
 * 
 * For most purposes you may want to use [func`Pango`.get_log_attrs].
 * @param text the text to process. Must be valid UTF-8
 * @param length length of `text` in bytes (may be -1 if `text` is nul-terminated)
 * @param analysis `PangoAnalysis` structure for `text`
 * @param attrs an array to store character information in
 */
export function break_TODO(text: string, length: number, analysis: Analysis, attrs: LogAttr[]): void
/**
 * This is the default break algorithm.
 * 
 * It applies rules from the [Unicode Line Breaking Algorithm](http://www.unicode.org/unicode/reports/tr14/)
 * without language-specific tailoring, therefore the `analyis` argument is unused
 * and can be %NULL.
 * 
 * See [func`Pango`.tailor_break] for language-specific breaks.
 * 
 * See [func`Pango`.attr_break] for attribute-based customization.
 * @param text text to break. Must be valid UTF-8
 * @param length length of text in bytes (may be -1 if `text` is nul-terminated)
 * @param analysis a `PangoAnalysis` structure for the `text`
 * @param attrs logical attributes to fill in
 * @param attrsLen size of the array passed as `attrs`
 */
export function defaultBreak(text: string, length: number, analysis: Analysis | null, attrs: LogAttr, attrsLen: number): void
/**
 * Converts extents from Pango units to device units.
 * 
 * The conversion is done by dividing by the %PANGO_SCALE factor and
 * performing rounding.
 * 
 * The `inclusive` rectangle is converted by flooring the x/y coordinates
 * and extending width/height, such that the final rectangle completely
 * includes the original rectangle.
 * 
 * The `nearest` rectangle is converted by rounding the coordinates
 * of the rectangle to the nearest device unit (pixel).
 * 
 * The rule to which argument to use is: if you want the resulting device-space
 * rectangle to completely contain the original rectangle, pass it in as
 * `inclusive`. If you want two touching-but-not-overlapping rectangles stay
 * touching-but-not-overlapping after rounding to device units, pass them in
 * as `nearest`.
 * @param inclusive rectangle to round to pixels inclusively
 * @param nearest rectangle to round to nearest pixels
 */
export function extentsToPixels(inclusive: Rectangle | null, nearest: Rectangle | null): void
/**
 * Searches a string the first character that has a strong
 * direction, according to the Unicode bidirectional algorithm.
 * @param text the text to process. Must be valid UTF-8
 * @param length length of `text` in bytes (may be -1 if `text` is nul-terminated)
 */
export function findBaseDir(text: string, length: number): Direction
/**
 * Locates a paragraph boundary in `text`.
 * 
 * A boundary is caused by delimiter characters, such as
 * a newline, carriage return, carriage return-newline pair,
 * or Unicode paragraph separator character.
 * 
 * The index of the run of delimiters is returned in
 * `paragraph_delimiter_index`. The index of the start of the
 * next paragraph (index after all delimiters) is stored n
 * `next_paragraph_start`.
 * 
 * If no delimiters are found, both `paragraph_delimiter_index`
 * and `next_paragraph_start` are filled with the length of `text`
 * (an index one off the end).
 * @param text UTF-8 text
 * @param length length of `text` in bytes, or -1 if nul-terminated
 */
export function findParagraphBoundary(text: string, length: number): [ /* paragraphDelimiterIndex */ number, /* nextParagraphStart */ number ]
/**
 * Creates a new font description from a string representation.
 * 
 * The string must have the form
 * 
 *     "\[FAMILY-LIST] \[STYLE-OPTIONS] \[SIZE] \[VARIATIONS]",
 * 
 * where FAMILY-LIST is a comma-separated list of families optionally
 * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
 * of words where each word describes one of style, variant, weight,
 * stretch, or gravity, and SIZE is a decimal number (size in points)
 * or optionally followed by the unit modifier "px" for absolute size.
 * VARIATIONS is a comma-separated list of font variation
 * specifications of the form "\`axis=`value" (the = sign is optional).
 * 
 * The following words are understood as styles:
 * "Normal", "Roman", "Oblique", "Italic".
 * 
 * The following words are understood as variants:
 * "Small-Caps", "All-Small-Caps", "Petite-Caps", "All-Petite-Caps",
 * "Unicase", "Title-Caps".
 * 
 * The following words are understood as weights:
 * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
 * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
 * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
 * "Extra-Black".
 * 
 * The following words are understood as stretch values:
 * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
 * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
 * 
 * The following words are understood as gravity values:
 * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
 * "East", "Rotated-Right", "West".
 * 
 * Any one of the options may be absent. If FAMILY-LIST is absent, then
 * the family_name field of the resulting font description will be
 * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
 * options will be set to the default values. If SIZE is missing, the
 * size in the resulting font description will be set to 0.
 * 
 * A typical example:
 * 
 *     "Cantarell Italic Light 15 \`wght=`200"
 * @param str string representation of a font description.
 */
export function fontDescriptionFromString(str: string): FontDescription
/**
 * Computes a `PangoLogAttr` for each character in `text`.
 * 
 * The `attrs` array must have one `PangoLogAttr` for
 * each position in `text;` if `text` contains N characters,
 * it has N+1 positions, including the last position at the
 * end of the text. `text` should be an entire paragraph;
 * logical attributes can't be computed without context
 * (for example you need to see spaces on either side of
 * a word to know the word is a word).
 * @param text text to process. Must be valid UTF-8
 * @param length length in bytes of `text`
 * @param level embedding level, or -1 if unknown
 * @param language language tag
 * @param attrs array with one `PangoLogAttr`   per character in `text,` plus one extra, to be filled in
 */
export function getLogAttrs(text: string, length: number, level: number, language: Language, attrs: LogAttr[]): void
/**
 * Returns the mirrored character of a Unicode character.
 * 
 * Mirror characters are determined by the Unicode mirrored property.
 * @param ch a Unicode character
 * @param mirroredCh location to store the mirrored character
 */
export function getMirrorChar(ch: string, mirroredCh: string): boolean
/**
 * Finds the gravity that best matches the rotation component
 * in a `PangoMatrix`.
 * @param matrix a `PangoMatrix`
 */
export function gravityGetForMatrix(matrix: Matrix | null): Gravity
/**
 * Returns the gravity to use in laying out a `PangoItem`.
 * 
 * The gravity is determined based on the script, base gravity, and hint.
 * 
 * If `base_gravity` is %PANGO_GRAVITY_AUTO, it is first replaced with the
 * preferred gravity of `script`.  To get the preferred gravity of a script,
 * pass %PANGO_GRAVITY_AUTO and %PANGO_GRAVITY_HINT_STRONG in.
 * @param script `PangoScript` to query
 * @param baseGravity base gravity of the paragraph
 * @param hint orientation hint
 */
export function gravityGetForScript(script: Script, baseGravity: Gravity, hint: GravityHint): Gravity
/**
 * Returns the gravity to use in laying out a single character
 * or `PangoItem`.
 * 
 * The gravity is determined based on the script, East Asian width,
 * base gravity, and hint,
 * 
 * This function is similar to [func`Pango`.Gravity.get_for_script] except
 * that this function makes a distinction between narrow/half-width and
 * wide/full-width characters also. Wide/full-width characters always
 * stand *upright*, that is, they always take the base gravity,
 * whereas narrow/full-width characters are always rotated in vertical
 * context.
 * 
 * If `base_gravity` is %PANGO_GRAVITY_AUTO, it is first replaced with the
 * preferred gravity of `script`.
 * @param script `PangoScript` to query
 * @param wide %TRUE for wide characters as returned by g_unichar_iswide()
 * @param baseGravity base gravity of the paragraph
 * @param hint orientation hint
 */
export function gravityGetForScriptAndWidth(script: Script, wide: boolean, baseGravity: Gravity, hint: GravityHint): Gravity
/**
 * Converts a `PangoGravity` value to its natural rotation in radians.
 * 
 * Note that [method`Pango`.Matrix.rotate] takes angle in degrees, not radians.
 * So, to call [method`Pango`.Matrix,rotate] with the output of this function
 * you should multiply it by (180. / G_PI).
 * @param gravity gravity to query, should not be %PANGO_GRAVITY_AUTO
 */
export function gravityToRotation(gravity: Gravity): number
/**
 * Checks if a character that should not be normally rendered.
 * 
 * This includes all Unicode characters with "ZERO WIDTH" in their name,
 * as well as *bidi* formatting characters, and a few other ones.
 * 
 * This is totally different from [func`GLib`.unichar_iszerowidth] and is at best misnamed.
 * @param ch a Unicode character
 */
export function isZeroWidth(ch: string): boolean
/**
 * Breaks a piece of text into segments with consistent directional
 * level and font.
 * 
 * Each byte of `text` will be contained in exactly one of the items in the
 * returned list; the generated list of items will be in logical order (the
 * start offsets of the items are ascending).
 * 
 * `cached_iter` should be an iterator over `attrs` currently positioned
 * at a range before or containing `start_index;` `cached_iter` will be
 * advanced to the range covering the position just after
 * `start_index` + `length`. (i.e. if itemizing in a loop, just keep passing
 * in the same `cached_iter)`.
 * @param context a structure holding information that affects   the itemization process.
 * @param text the text to itemize. Must be valid UTF-8
 * @param startIndex first byte in `text` to process
 * @param length the number of bytes (not characters) to process   after `start_index`. This must be >= 0.
 * @param attrs the set of attributes that apply to `text`.
 * @param cachedIter Cached attribute iterator
 */
export function itemize(context: Context, text: string, startIndex: number, length: number, attrs: AttrList, cachedIter: AttrIterator | null): Item[]
/**
 * Like `pango_itemize()`, but with an explicitly specified base direction.
 * 
 * The base direction is used when computing bidirectional levels.
 * [func`itemize]` gets the base direction from the `PangoContext`
 * (see [method`Pango`.Context.set_base_dir]).
 * @param context a structure holding information that affects   the itemization process.
 * @param baseDir base direction to use for bidirectional processing
 * @param text the text to itemize.
 * @param startIndex first byte in `text` to process
 * @param length the number of bytes (not characters) to process   after `start_index`. This must be >= 0.
 * @param attrs the set of attributes that apply to `text`.
 * @param cachedIter Cached attribute iterator
 */
export function itemizeWithBaseDir(context: Context, baseDir: Direction, text: string, startIndex: number, length: number, attrs: AttrList, cachedIter: AttrIterator | null): Item[]
/**
 * Convert a language tag to a `PangoLanguage`.
 * 
 * The language tag must be in a RFC-3066 format. `PangoLanguage` pointers
 * can be efficiently copied (copy the pointer) and compared with other
 * language tags (compare the pointer.)
 * 
 * This function first canonicalizes the string by converting it to
 * lowercase, mapping '_' to '-', and stripping all characters other
 * than letters and '-'.
 * 
 * Use [func`Pango`.Language.get_default] if you want to get the
 * `PangoLanguage` for the current locale of the process.
 * @param language a string representing a language tag
 */
export function languageFromString(language: string | null): Language | null
/**
 * Returns the `PangoLanguage` for the current locale of the process.
 * 
 * On Unix systems, this is the return value is derived from
 * `setlocale (LC_CTYPE, NULL)`, and the user can
 * affect this through the environment variables LC_ALL, LC_CTYPE or
 * LANG (checked in that order). The locale string typically is in
 * the form lang_COUNTRY, where lang is an ISO-639 language code, and
 * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
 * Swedish as written in Finland or pt_BR for Portuguese as written in
 * Brazil.
 * 
 * On Windows, the C library does not use any such environment
 * variables, and setting them won't affect the behavior of functions
 * like ctime(). The user sets the locale through the Regional Options
 * in the Control Panel. The C library (in the setlocale() function)
 * does not use country and language codes, but country and language
 * names spelled out in English.
 * However, this function does check the above environment
 * variables, and does return a Unix-style locale string based on
 * either said environment variables or the thread's current locale.
 * 
 * Your application should call `setlocale(LC_ALL, "")` for the user
 * settings to take effect. GTK does this in its initialization
 * functions automatically (by calling gtk_set_locale()).
 * See the setlocale() manpage for more details.
 * 
 * Note that the default language can change over the life of an application.
 * 
 * Also note that this function will not do the right thing if you
 * use per-thread locales with uselocale(). In that case, you should
 * just call pango_language_from_string() yourself.
 */
export function languageGetDefault(): Language
/**
 * Returns the list of languages that the user prefers.
 * 
 * The list is specified by the `PANGO_LANGUAGE` or `LANGUAGE`
 * environment variables, in order of preference. Note that this
 * list does not necessarily include the language returned by
 * [func`Pango`.Language.get_default].
 * 
 * When choosing language-specific resources, such as the sample
 * text returned by [method`Pango`.Language.get_sample_string],
 * you should first try the default language, followed by the
 * languages returned by this function.
 */
export function languageGetPreferred(): Language | null
export function layoutDeserializeErrorQuark(): GLib.Quark
/**
 * Return the bidirectional embedding levels of the input paragraph.
 * 
 * The bidirectional embedding levels are defined by the [Unicode Bidirectional
 * Algorithm](http://www.unicode.org/reports/tr9/).
 * 
 * If the input base direction is a weak direction, the direction of the
 * characters in the text will determine the final resolved direction.
 * @param text the text to itemize.
 * @param length the number of bytes (not characters) to process, or -1   if `text` is nul-terminated and the length should be calculated.
 * @param pbaseDir input base direction, and output resolved direction.
 */
export function log2visGetEmbeddingLevels(text: string, length: number, pbaseDir: Direction): number
/**
 * Finishes parsing markup.
 * 
 * After feeding a Pango markup parser some data with [method`GLib`.MarkupParseContext.parse],
 * use this function to get the list of attributes and text out of the
 * markup. This function will not free `context,` use [method`GLib`.MarkupParseContext.free]
 * to do so.
 * @param context A valid parse context that was returned from [func`markup_parser_new]`
 */
export function markupParserFinish(context: GLib.MarkupParseContext): [ /* returnType */ boolean, /* attrList */ AttrList, /* text */ string, /* accelChar */ string ]
/**
 * Incrementally parses marked-up text to create a plain-text string
 * and an attribute list.
 * 
 * See the [Pango Markup](pango_markup.html) docs for details about the
 * supported markup.
 * 
 * If `accel_marker` is nonzero, the given character will mark the
 * character following it as an accelerator. For example, `accel_marker`
 * might be an ampersand or underscore. All characters marked
 * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
 * and the first character so marked will be returned in `accel_char,`
 * when calling [func`markup_parser_finish]`. Two `accel_marker` characters
 * following each other produce a single literal `accel_marker` character.
 * 
 * To feed markup to the parser, use [method`GLib`.MarkupParseContext.parse]
 * on the returned [struct`GLib`.MarkupParseContext]. When done with feeding markup
 * to the parser, use [func`markup_parser_finish]` to get the data out
 * of it, and then use [method`GLib`.MarkupParseContext.free] to free it.
 * 
 * This function is designed for applications that read Pango markup
 * from streams. To simply parse a string containing Pango markup,
 * the [func`Pango`.parse_markup] API is recommended instead.
 * @param accelMarker character that precedes an accelerator, or 0 for none
 */
export function markupParserNew(accelMarker: string): GLib.MarkupParseContext
/**
 * Parses an enum type and stores the result in `value`.
 * 
 * If `str` does not match the nick name of any of the possible values
 * for the enum and is not an integer, %FALSE is returned, a warning
 * is issued if `warn` is %TRUE, and a string representing the list of
 * possible values is stored in `possible_values`. The list is
 * slash-separated, eg. "none/start/middle/end".
 * 
 * If failed and `possible_values` is not %NULL, returned string should
 * be freed using g_free().
 * @param type enum type to parse, eg. %PANGO_TYPE_ELLIPSIZE_MODE
 * @param str string to parse
 * @param warn if %TRUE, issue a g_warning() on bad input
 */
export function parseEnum(type: GObject.GType, str: string | null, warn: boolean): [ /* returnType */ boolean, /* value */ number, /* possibleValues */ string ]
/**
 * Parses marked-up text to create a plain-text string and an attribute list.
 * 
 * See the [Pango Markup](pango_markup.html) docs for details about the
 * supported markup.
 * 
 * If `accel_marker` is nonzero, the given character will mark the
 * character following it as an accelerator. For example, `accel_marker`
 * might be an ampersand or underscore. All characters marked
 * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
 * and the first character so marked will be returned in `accel_char`.
 * Two `accel_marker` characters following each other produce a single
 * literal `accel_marker` character.
 * 
 * To parse a stream of pango markup incrementally, use [func`markup_parser_new]`.
 * 
 * If any error happens, none of the output arguments are touched except
 * for `error`.
 * @param markupText markup to parse (see the [Pango Markup](pango_markup.html) docs)
 * @param length length of `markup_text,` or -1 if nul-terminated
 * @param accelMarker character that precedes an accelerator, or 0 for none
 */
export function parseMarkup(markupText: string, length: number, accelMarker: string): [ /* returnType */ boolean, /* attrList */ AttrList, /* text */ string, /* accelChar */ string ]
/**
 * Parses a font stretch.
 * 
 * The allowed values are
 * "ultra_condensed", "extra_condensed", "condensed",
 * "semi_condensed", "normal", "semi_expanded", "expanded",
 * "extra_expanded" and "ultra_expanded". Case variations are
 * ignored and the '_' characters may be omitted.
 * @param str a string to parse.
 * @param warn if %TRUE, issue a g_warning() on bad input.
 */
export function parseStretch(str: string, warn: boolean): [ /* returnType */ boolean, /* stretch */ Stretch ]
/**
 * Parses a font style.
 * 
 * The allowed values are "normal", "italic" and "oblique", case
 * variations being
 * ignored.
 * @param str a string to parse.
 * @param warn if %TRUE, issue a g_warning() on bad input.
 */
export function parseStyle(str: string, warn: boolean): [ /* returnType */ boolean, /* style */ Style ]
/**
 * Parses a font variant.
 * 
 * The allowed values are "normal", "small-caps", "all-small-caps",
 * "petite-caps", "all-petite-caps", "unicase" and "title-caps",
 * case variations being ignored.
 * @param str a string to parse.
 * @param warn if %TRUE, issue a g_warning() on bad input.
 */
export function parseVariant(str: string, warn: boolean): [ /* returnType */ boolean, /* variant */ Variant ]
/**
 * Parses a font weight.
 * 
 * The allowed values are "heavy",
 * "ultrabold", "bold", "normal", "light", "ultraleight"
 * and integers. Case variations are ignored.
 * @param str a string to parse.
 * @param warn if %TRUE, issue a g_warning() on bad input.
 */
export function parseWeight(str: string, warn: boolean): [ /* returnType */ boolean, /* weight */ Weight ]
/**
 * Quantizes the thickness and position of a line to whole device pixels.
 * 
 * This is typically used for underline or strikethrough. The purpose of
 * this function is to avoid such lines looking blurry.
 * 
 * Care is taken to make sure `thickness` is at least one pixel when this
 * function returns, but returned `position` may become zero as a result
 * of rounding.
 * @param thickness pointer to the thickness of a line, in Pango units
 * @param position corresponding position
 */
export function quantizeLineGeometry(thickness: number, position: number): [ /* thickness */ number, /* position */ number ]
/**
 * Reads an entire line from a file into a buffer.
 * 
 * Lines may be delimited with '\n', '\r', '\n\r', or '\r\n'. The delimiter
 * is not written into the buffer. Text after a '#' character is treated as
 * a comment and skipped. '\' can be used to escape a # character.
 * '\' proceeding a line delimiter combines adjacent lines. A '\' proceeding
 * any other character is ignored and written into the output buffer
 * unmodified.
 * @param stream a stdio stream
 * @param str `GString` buffer into which to write the result
 */
export function readLine(stream: object | null, str: GLib.String): number
/**
 * Reorder items from logical order to visual order.
 * 
 * The visual order is determined from the associated directional
 * levels of the items. The original list is unmodified.
 * 
 * (Please open a bug if you use this function.
 *  It is not a particularly convenient interface, and the code
 *  is duplicated elsewhere in Pango for that reason.)
 * @param items a `GList` of `PangoItem`   in logical order.
 */
export function reorderItems(items: Item[]): Item[]
/**
 * Scans an integer.
 * 
 * Leading white space is skipped.
 * @param pos in/out string position
 */
export function scanInt(pos: string): [ /* returnType */ boolean, /* pos */ string, /* out */ number ]
/**
 * Scans a string into a `GString` buffer.
 * 
 * The string may either be a sequence of non-white-space characters,
 * or a quoted string with '"'. Instead a quoted string, '\"' represents
 * a literal quote. Leading white space outside of quotes is skipped.
 * @param pos in/out string position
 * @param out a `GString` into which to write the result
 */
export function scanString(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
/**
 * Scans a word into a `GString` buffer.
 * 
 * A word consists of [A-Za-z_] followed by zero or more
 * [A-Za-z_0-9]. Leading white space is skipped.
 * @param pos in/out string position
 * @param out a `GString` into which to write the result
 */
export function scanWord(pos: string, out: GLib.String): [ /* returnType */ boolean, /* pos */ string ]
/**
 * Looks up the script for a particular character.
 * 
 * The script of a character is defined by
 * [Unicode Standard Annex 24: Script names](http://www.unicode.org/reports/tr24/).
 * 
 * No check is made for `ch` being a valid Unicode character; if you pass
 * in invalid character, the result is undefined.
 * 
 * Note that while the return type of this function is declared
 * as `PangoScript`, as of Pango 1.18, this function simply returns
 * the return value of [func`GLib`.unichar_get_script]. Callers must be
 * prepared to handle unknown values.
 * @param ch a Unicode character
 */
export function scriptForUnichar(ch: string): Script
/**
 * Finds a language tag that is reasonably representative of `script`.
 * 
 * The language will usually be the most widely spoken or used language
 * written in that script: for instance, the sample language for
 * %PANGO_SCRIPT_CYRILLIC is ru (Russian), the sample language for
 * %PANGO_SCRIPT_ARABIC is ar.
 * 
 * For some scripts, no sample language will be returned because
 * there is no language that is sufficiently representative. The
 * best example of this is %PANGO_SCRIPT_HAN, where various different
 * variants of written Chinese, Japanese, and Korean all use
 * significantly different sets of Han characters and forms
 * of shared characters. No sample language can be provided
 * for many historical scripts as well.
 * 
 * As of 1.18, this function checks the environment variables
 * `PANGO_LANGUAGE` and `LANGUAGE` (checked in that order) first.
 * If one of them is set, it is parsed as a list of language tags
 * separated by colons or other separators. This function
 * will return the first language in the parsed list that Pango
 * believes may use `script` for writing. This last predicate
 * is tested using [method`Pango`.Language.includes_script]. This can
 * be used to control Pango's font selection for non-primary
 * languages. For example, a `PANGO_LANGUAGE` enviroment variable
 * set to "en:fa" makes Pango choose fonts suitable for Persian (fa)
 * instead of Arabic (ar) when a segment of Arabic text is found
 * in an otherwise non-Arabic text. The same trick can be used to
 * choose a default language for %PANGO_SCRIPT_HAN when setting
 * context language is not feasible.
 * @param script a `PangoScript`
 */
export function scriptGetSampleLanguage(script: Script): Language | null
/**
 * Convert the characters in `text` into glyphs.
 * 
 * Given a segment of text and the corresponding `PangoAnalysis` structure
 * returned from [func`Pango`.itemize], convert the characters into glyphs. You
 * may also pass in only a substring of the item from [func`Pango`.itemize].
 * 
 * It is recommended that you use [func`Pango`.shape_full] instead, since
 * that API allows for shaping interaction happening across text item
 * boundaries.
 * 
 * Note that the extra attributes in the `analyis` that is returned from
 * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
 * so you need to subtract the item offset from their indices before
 * calling [func`Pango`.shape].
 * @param text the text to process
 * @param length the length (in bytes) of `text`
 * @param analysis `PangoAnalysis` structure from [func`Pango`.itemize]
 * @param glyphs glyph string in which to store results
 */
export function shape(text: string, length: number, analysis: Analysis, glyphs: GlyphString): void
/**
 * Convert the characters in `text` into glyphs.
 * 
 * Given a segment of text and the corresponding `PangoAnalysis` structure
 * returned from [func`Pango`.itemize], convert the characters into glyphs.
 * You may also pass in only a substring of the item from [func`Pango`.itemize].
 * 
 * This is similar to [func`Pango`.shape], except it also can optionally take
 * the full paragraph text as input, which will then be used to perform
 * certain cross-item shaping interactions. If you have access to the broader
 * text of which `item_text` is part of, provide the broader text as
 * `paragraph_text`. If `paragraph_text` is %NULL, item text is used instead.
 * 
 * Note that the extra attributes in the `analyis` that is returned from
 * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
 * so you do not pass the full paragraph text as `paragraph_text,` you need
 * to subtract the item offset from their indices before calling
 * [func`Pango`.shape_full].
 * @param itemText valid UTF-8 text to shape.
 * @param itemLength the length (in bytes) of `item_text`. -1 means nul-terminated text.
 * @param paragraphText text of the paragraph (see details).
 * @param paragraphLength the length (in bytes) of `paragraph_text`. -1 means nul-terminated text.
 * @param analysis `PangoAnalysis` structure from [func`Pango`.itemize].
 * @param glyphs glyph string in which to store results.
 */
export function shapeFull(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: Analysis, glyphs: GlyphString): void
/**
 * Convert the characters in `item` into glyphs.
 * 
 * This is similar to [func`Pango`.shape_with_flags], except it takes a
 * `PangoItem` instead of separate `item_text` and `analysis` arguments.
 * It also takes `log_attrs,` which may be used in implementing text
 * transforms.
 * 
 * Note that the extra attributes in the `analyis` that is returned from
 * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
 * so you do not pass the full paragraph text as `paragraph_text,` you need
 * to subtract the item offset from their indices before calling
 * [func`Pango`.shape_with_flags].
 * @param item `PangoItem` to shape
 * @param paragraphText text of the paragraph (see details).
 * @param paragraphLength the length (in bytes) of `paragraph_text`.     -1 means nul-terminated text.
 * @param logAttrs array of `PangoLogAttr` for `item`
 * @param glyphs glyph string in which to store results
 * @param flags flags influencing the shaping process
 */
export function shapeItem(item: Item, paragraphText: string | null, paragraphLength: number, logAttrs: LogAttr | null, glyphs: GlyphString, flags: ShapeFlags): void
/**
 * Convert the characters in `text` into glyphs.
 * 
 * Given a segment of text and the corresponding `PangoAnalysis` structure
 * returned from [func`Pango`.itemize], convert the characters into glyphs.
 * You may also pass in only a substring of the item from [func`Pango`.itemize].
 * 
 * This is similar to [func`Pango`.shape_full], except it also takes flags
 * that can influence the shaping process.
 * 
 * Note that the extra attributes in the `analyis` that is returned from
 * [func`Pango`.itemize] have indices that are relative to the entire paragraph,
 * so you do not pass the full paragraph text as `paragraph_text,` you need
 * to subtract the item offset from their indices before calling
 * [func`Pango`.shape_with_flags].
 * @param itemText valid UTF-8 text to shape
 * @param itemLength the length (in bytes) of `item_text`.     -1 means nul-terminated text.
 * @param paragraphText text of the paragraph (see details).
 * @param paragraphLength the length (in bytes) of `paragraph_text`.     -1 means nul-terminated text.
 * @param analysis `PangoAnalysis` structure from [func`Pango`.itemize]
 * @param glyphs glyph string in which to store results
 * @param flags flags influencing the shaping process
 */
export function shapeWithFlags(itemText: string, itemLength: number, paragraphText: string | null, paragraphLength: number, analysis: Analysis, glyphs: GlyphString, flags: ShapeFlags): void
/**
 * Skips 0 or more characters of white space.
 * @param pos in/out string position
 */
export function skipSpace(pos: string): [ /* returnType */ boolean, /* pos */ string ]
/**
 * Splits a %G_SEARCHPATH_SEPARATOR-separated list of files, stripping
 * white space and substituting ~/ with $HOME/.
 * @param str a %G_SEARCHPATH_SEPARATOR separated list of filenames
 */
export function splitFileList(str: string): string[]
/**
 * Deserializes a `PangoTabArray` from a string.
 * 
 * This is the counterpart to [method`Pango`.TabArray.to_string].
 * See that functions for details about the format.
 * @param text a string
 */
export function tabArrayFromString(text: string): TabArray | null
/**
 * Apply language-specific tailoring to the breaks in `attrs`.
 * 
 * The line breaks are assumed to have been produced by [func`Pango`.default_break].
 * 
 * If `offset` is not -1, it is used to apply attributes from `analysis` that are
 * relevant to line breaking.
 * 
 * Note that it is better to pass -1 for `offset` and use [func`Pango`.attr_break]
 * to apply attributes to the whole paragraph.
 * @param text text to process. Must be valid UTF-8
 * @param length length in bytes of `text`
 * @param analysis `PangoAnalysis` for `text`
 * @param offset Byte offset of `text` from the beginning of the   paragraph, or -1 to ignore attributes from `analysis`
 * @param attrs array with one `PangoLogAttr`   per character in `text,` plus one extra, to be filled in
 */
export function tailorBreak(text: string, length: number, analysis: Analysis, offset: number, attrs: LogAttr[]): void
/**
 * Trims leading and trailing whitespace from a string.
 * @param str a string
 */
export function trimString(str: string): string
/**
 * Determines the inherent direction of a character.
 * 
 * The inherent direction is either `PANGO_DIRECTION_LTR`, `PANGO_DIRECTION_RTL`,
 * or `PANGO_DIRECTION_NEUTRAL`.
 * 
 * This function is useful to categorize characters into left-to-right
 * letters, right-to-left letters, and everything else. If full Unicode
 * bidirectional type of a character is needed, [func`Pango`.BidiType.for_unichar]
 * can be used instead.
 * @param ch a Unicode character
 */
export function unicharDirection(ch: string): Direction
/**
 * Converts a floating-point number to Pango units.
 * 
 * The conversion is done by multiplying `d` by %PANGO_SCALE and
 * rounding the result to nearest integer.
 * @param d double floating-point value
 */
export function unitsFromDouble(d: number): number
/**
 * Converts a number in Pango units to floating-point.
 * 
 * The conversion is done by dividing `i` by %PANGO_SCALE.
 * @param i value in Pango units
 */
export function unitsToDouble(i: number): number
/**
 * Returns the encoded version of Pango available at run-time.
 * 
 * This is similar to the macro %PANGO_VERSION except that the macro
 * returns the encoded version available at compile-time. A version
 * number can be encoded into an integer using PANGO_VERSION_ENCODE().
 */
export function version(): number
/**
 * Checks that the Pango library in use is compatible with the
 * given version.
 * 
 * Generally you would pass in the constants %PANGO_VERSION_MAJOR,
 * %PANGO_VERSION_MINOR, %PANGO_VERSION_MICRO as the three arguments
 * to this function; that produces a check that the library in use at
 * run-time is compatible with the version of Pango the application or
 * module was compiled against.
 * 
 * Compatibility is defined by two things: first the version
 * of the running library is newer than the version
 * `required_major`.required_minor.`required_micro`. Second
 * the running library must be binary compatible with the
 * version `required_major`.required_minor.`required_micro`
 * (same major version.)
 * 
 * For compile-time version checking use PANGO_VERSION_CHECK().
 * @param requiredMajor the required major version
 * @param requiredMinor the required minor version
 * @param requiredMicro the required major version
 */
export function versionCheck(requiredMajor: number, requiredMinor: number, requiredMicro: number): string | null
/**
 * Returns the version of Pango available at run-time.
 * 
 * This is similar to the macro %PANGO_VERSION_STRING except that the
 * macro returns the version available at compile-time.
 */
export function versionString(): string
/**
 * Type of a function that can duplicate user data for an attribute.
 * @callback 
 */
export interface AttrDataCopyFunc {
    (): object | null
}
/**
 * Type of a function filtering a list of attributes.
 * @callback 
 * @param attribute a Pango attribute
 */
export interface AttrFilterFunc {
    (attribute: Attribute): boolean
}
/**
 * Callback used when enumerating fonts in a fontset.
 * 
 * See [method`Pango`.Fontset.foreach].
 * @callback 
 * @param fontset a `PangoFontset`
 * @param font a font from `fontset`
 */
export interface FontsetForeachFunc {
    (fontset: Fontset, font: Font): boolean
}
export module Context {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Context {

    // Owm methods of Pango-1.0.Pango.Context

    /**
     * Forces a change in the context, which will cause any `PangoLayout`
     * using this context to re-layout.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the context
     * and such data is changed.
     */
    changed(): void
    /**
     * Retrieves the base direction for the context.
     * 
     * See [method`Pango`.Context.set_base_dir].
     */
    getBaseDir(): Direction
    /**
     * Retrieves the base gravity for the context.
     * 
     * See [method`Pango`.Context.set_base_gravity].
     */
    getBaseGravity(): Gravity
    /**
     * Retrieve the default font description for the context.
     */
    getFontDescription(): FontDescription
    /**
     * Gets the `PangoFontMap` used to look up fonts for this context.
     */
    getFontMap(): FontMap
    /**
     * Retrieves the gravity for the context.
     * 
     * This is similar to [method`Pango`.Context.get_base_gravity],
     * except for when the base gravity is %PANGO_GRAVITY_AUTO for
     * which [func`Pango`.Gravity.get_for_matrix] is used to return the
     * gravity from the current context matrix.
     */
    getGravity(): Gravity
    /**
     * Retrieves the gravity hint for the context.
     * 
     * See [method`Pango`.Context.set_gravity_hint] for details.
     */
    getGravityHint(): GravityHint
    /**
     * Retrieves the global language tag for the context.
     */
    getLanguage(): Language
    /**
     * Gets the transformation matrix that will be applied when
     * rendering with this context.
     * 
     * See [method`Pango`.Context.set_matrix].
     */
    getMatrix(): Matrix | null
    /**
     * Get overall metric information for a particular font description.
     * 
     * Since the metrics may be substantially different for different scripts,
     * a language tag can be provided to indicate that the metrics should be
     * retrieved that correspond to the script(s) used by that language.
     * 
     * The `PangoFontDescription` is interpreted in the same way as by [func`itemize]`,
     * and the family name may be a comma separated list of names. If characters
     * from multiple of these families would be used to render the string, then
     * the returned fonts would be a composite of the metrics for the fonts loaded
     * for the individual families.
     * @param desc a `PangoFontDescription` structure. %NULL means that the   font description from the context will be used.
     * @param language language tag used to determine which script to get   the metrics for. %NULL means that the language tag from the context   will be used. If no language tag is set on the context, metrics   for the default language (as determined by [func`Pango`.Language.get_default]   will be returned.
     */
    getMetrics(desc: FontDescription | null, language: Language | null): FontMetrics
    /**
     * Returns whether font rendering with this context should
     * round glyph positions and widths.
     */
    getRoundGlyphPositions(): boolean
    /**
     * Returns the current serial number of `context`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new context is created and is increased whenever the context
     * is changed using any of the setter functions, or the `PangoFontMap` it
     * uses to find fonts has changed. The serial may wrap, but will never
     * have the value 0. Since it can wrap, never compare it with "less than",
     * always use "not equals".
     * 
     * This can be used to automatically detect changes to a `PangoContext`,
     * and is only useful when implementing objects that need update when their
     * `PangoContext` changes, like `PangoLayout`.
     */
    getSerial(): number
    /**
     * List all families for a context.
     */
    listFamilies(): /* families */ FontFamily[]
    /**
     * Loads the font in one of the fontmaps in the context
     * that is the closest match for `desc`.
     * @param desc a `PangoFontDescription` describing the font to load
     */
    loadFont(desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the context that can be used to render
     * a font matching `desc`.
     * @param desc a `PangoFontDescription` describing the fonts to load
     * @param language a `PangoLanguage` the fonts will be used for
     */
    loadFontset(desc: FontDescription, language: Language): Fontset | null
    /**
     * Sets the base direction for the context.
     * 
     * The base direction is used in applying the Unicode bidirectional
     * algorithm; if the `direction` is %PANGO_DIRECTION_LTR or
     * %PANGO_DIRECTION_RTL, then the value will be used as the paragraph
     * direction in the Unicode bidirectional algorithm. A value of
     * %PANGO_DIRECTION_WEAK_LTR or %PANGO_DIRECTION_WEAK_RTL is used only
     * for paragraphs that do not contain any strong characters themselves.
     * @param direction the new base direction
     */
    setBaseDir(direction: Direction): void
    /**
     * Sets the base gravity for the context.
     * 
     * The base gravity is used in laying vertical text out.
     * @param gravity the new base gravity
     */
    setBaseGravity(gravity: Gravity): void
    /**
     * Set the default font description for the context
     * @param desc the new pango font description
     */
    setFontDescription(desc: FontDescription): void
    /**
     * Sets the font map to be searched when fonts are looked-up
     * in this context.
     * 
     * This is only for internal use by Pango backends, a `PangoContext`
     * obtained via one of the recommended methods should already have a
     * suitable font map.
     * @param fontMap the `PangoFontMap` to set.
     */
    setFontMap(fontMap: FontMap): void
    /**
     * Sets the gravity hint for the context.
     * 
     * The gravity hint is used in laying vertical text out, and
     * is only relevant if gravity of the context as returned by
     * [method`Pango`.Context.get_gravity] is set to %PANGO_GRAVITY_EAST
     * or %PANGO_GRAVITY_WEST.
     * @param hint the new gravity hint
     */
    setGravityHint(hint: GravityHint): void
    /**
     * Sets the global language tag for the context.
     * 
     * The default language for the locale of the running process
     * can be found using [func`Pango`.Language.get_default].
     * @param language the new language tag.
     */
    setLanguage(language: Language): void
    /**
     * Sets the transformation matrix that will be applied when rendering
     * with this context.
     * 
     * Note that reported metrics are in the user space coordinates before
     * the application of the matrix, not device-space coordinates after the
     * application of the matrix. So, they don't scale with the matrix, though
     * they may change slightly for different matrices, depending on how the
     * text is fit to the pixel grid.
     * @param matrix a `PangoMatrix`, or %NULL to unset any existing matrix. (No matrix set is the same as setting the identity matrix.)
     */
    setMatrix(matrix: Matrix | null): void
    /**
     * Sets whether font rendering with this context should
     * round glyph positions and widths to integral positions,
     * in device units.
     * 
     * This is useful when the renderer can't handle subpixel
     * positioning of glyphs.
     * 
     * The default value is to round glyph positions, to remain
     * compatible with previous Pango behavior.
     * @param roundPositions whether to round glyph positions
     */
    setRoundGlyphPositions(roundPositions: boolean): void

    // Class property signals of Pango-1.0.Pango.Context

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoContext` stores global information used to control the
 * itemization process.
 * 
 * The information stored by `PangoContext` includes the fontmap used
 * to look up fonts, and default values such as the default language,
 * default gravity, or default font.
 * 
 * To obtain a `PangoContext`, use [method`Pango`.FontMap.create_context].
 * @class 
 */
export class Context extends GObject.Object {

    // Own properties of Pango-1.0.Pango.Context

    static name: string

    // Constructors of Pango-1.0.Pango.Context

    constructor(config?: Context.ConstructorProperties) 
    /**
     * Creates a new `PangoContext` initialized to default values.
     * 
     * This function is not particularly useful as it should always
     * be followed by a [method`Pango`.Context.set_font_map] call, and the
     * function [method`Pango`.FontMap.create_context] does these two steps
     * together and hence users are recommended to use that.
     * 
     * If you are using Pango as part of a higher-level system,
     * that system may have it's own way of create a `PangoContext`.
     * For instance, the GTK toolkit has, among others,
     * `gtk_widget_get_pango_context()`. Use those instead.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `PangoContext` initialized to default values.
     * 
     * This function is not particularly useful as it should always
     * be followed by a [method`Pango`.Context.set_font_map] call, and the
     * function [method`Pango`.FontMap.create_context] does these two steps
     * together and hence users are recommended to use that.
     * 
     * If you are using Pango as part of a higher-level system,
     * that system may have it's own way of create a `PangoContext`.
     * For instance, the GTK toolkit has, among others,
     * `gtk_widget_get_pango_context()`. Use those instead.
     * @constructor 
     */
    static new(): Context
    _init(config?: Context.ConstructorProperties): void
}

export module Coverage {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Coverage {

    // Owm methods of Pango-1.0.Pango.Coverage

    /**
     * Copy an existing `PangoCoverage`.
     */
    copy(): Coverage
    /**
     * Determine whether a particular index is covered by `coverage`.
     * @param index the index to check
     */
    get(index: number): CoverageLevel
    /**
     * Set the coverage for each index in `coverage` to be the max (better)
     * value of the current coverage for the index and the coverage for
     * the corresponding index in `other`.
     * @param other another `PangoCoverage`
     */
    max(other: Coverage): void
    /**
     * Increase the reference count on the `PangoCoverage` by one.
     */
    ref(): Coverage

    // Overloads of ref

    /**
     * Increases the reference count of `object`.
     * 
     * Since GLib 2.56, if `GLIB_VERSION_MAX_ALLOWED` is 2.56 or greater, the type
     * of `object` will be propagated to the return type (using the GCC typeof()
     * extension), so any casting the caller needs to do on the return type must be
     * explicit.
     */
    ref(): GObject.Object
    /**
     * Modify a particular index within `coverage`
     * @param index the index to modify
     * @param level the new level for `index_`
     */
    set(index: number, level: CoverageLevel): void
    /**
     * Convert a `PangoCoverage` structure into a flat binary format.
     */
    toBytes(): /* bytes */ Uint8Array
    /**
     * Decrease the reference count on the `PangoCoverage` by one.
     * 
     * If the result is zero, free the coverage and all associated memory.
     */
    unref(): void

    // Class property signals of Pango-1.0.Pango.Coverage

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoCoverage` structure is a map from Unicode characters
 * to [enum`Pango`.CoverageLevel] values.
 * 
 * It is often necessary in Pango to determine if a particular
 * font can represent a particular character, and also how well
 * it can represent that character. The `PangoCoverage` is a data
 * structure that is used to represent that information. It is an
 * opaque structure with no public fields.
 * @class 
 */
export class Coverage extends GObject.Object {

    // Own properties of Pango-1.0.Pango.Coverage

    static name: string

    // Constructors of Pango-1.0.Pango.Coverage

    constructor(config?: Coverage.ConstructorProperties) 
    /**
     * Create a new `PangoCoverage`
     * @constructor 
     */
    constructor() 
    /**
     * Create a new `PangoCoverage`
     * @constructor 
     */
    static new(): Coverage
    _init(config?: Coverage.ConstructorProperties): void
    /**
     * Convert data generated from [method`Pango`.Coverage.to_bytes]
     * back to a `PangoCoverage`.
     * @param bytes binary data   representing a `PangoCoverage`
     */
    static fromBytes(bytes: Uint8Array): Coverage | null
}

export module Font {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Font {

    // Own fields of Pango-1.0.Pango.Font

    parentInstance: GObject.Object

    // Owm methods of Pango-1.0.Pango.Font

    // Has conflict: describe(): FontDescription
    /**
     * Returns a description of the font, with absolute font size set
     * in device units.
     * 
     * Use [method`Pango`.Font.describe] if you want the font size in points.
     */
    describeWithAbsoluteSize(): FontDescription
    // Has conflict: getCoverage(language: Language): Coverage
    /**
     * Gets the `PangoFontFace` to which `font` belongs.
     */
    getFace(): FontFace
    // Has conflict: getFeatures(numFeatures: number): [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    // Has conflict: getFontMap(): FontMap | null
    // Has conflict: getGlyphExtents(glyph: Glyph): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Returns the languages that are supported by `font`.
     * 
     * If the font backend does not provide this information,
     * %NULL is returned. For the fontconfig backend, this
     * corresponds to the FC_LANG member of the FcPattern.
     * 
     * The returned array is only valid as long as the font
     * and its fontmap are valid.
     */
    getLanguages(): Language[] | null
    // Has conflict: getMetrics(language: Language | null): FontMetrics
    /**
     * Returns whether the font provides a glyph for this character.
     * @param wc a Unicode character
     */
    hasChar(wc: string): boolean
    /**
     * Serializes the `font` in a way that can be uniquely identified.
     * 
     * There are no guarantees about the format of the output across different
     * versions of Pango.
     * 
     * The intended use of this function is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     * 
     * To recreate a font from its serialized form, use [func`Pango`.Font.deserialize].
     */
    serialize(): any

    // Own virtual methods of Pango-1.0.Pango.Font

    createHbFont(): HarfBuzz.font_t
    /**
     * Returns a description of the font, with font size set in points.
     * 
     * Use [method`Pango`.Font.describe_with_absolute_size] if you want
     * the font size in device units.
     * @virtual 
     */
    describe(): FontDescription
    describeAbsolute(): FontDescription
    /**
     * Computes the coverage map for a given font and language tag.
     * @virtual 
     * @param language the language tag
     */
    getCoverage(language: Language): Coverage
    /**
     * Obtain the OpenType features that are provided by the font.
     * 
     * These are passed to the rendering system, together with features
     * that have been explicitly set via attributes.
     * 
     * Note that this does not include OpenType features which the
     * rendering system enables by default.
     * @virtual 
     * @param numFeatures the number of used items in `features`
     */
    getFeatures(numFeatures: number): [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    /**
     * Gets the font map for which the font was created.
     * 
     * Note that the font maintains a *weak* reference to
     * the font map, so if all references to font map are
     * dropped, the font map will be finalized even if there
     * are fonts created with the font map that are still alive.
     * In that case this function will return %NULL.
     * 
     * It is the responsibility of the user to ensure that the
     * font map is kept alive. In most uses this is not an issue
     * as a `PangoContext` holds a reference to the font map.
     * @virtual 
     */
    getFontMap(): FontMap | null
    /**
     * Gets the logical and ink extents of a glyph within a font.
     * 
     * The coordinate system for each rectangle has its origin at the
     * base line and horizontal origin of the character with increasing
     * coordinates extending to the right and down. The macros PANGO_ASCENT(),
     * PANGO_DESCENT(), PANGO_LBEARING(), and PANGO_RBEARING() can be used to convert
     * from the extents rectangle to more traditional font metrics. The units
     * of the rectangles are in 1/PANGO_SCALE of a device unit.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @virtual 
     * @param glyph the glyph index
     */
    getGlyphExtents(glyph: Glyph): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Gets overall metric information for a font.
     * 
     * Since the metrics may be substantially different for different scripts,
     * a language tag can be provided to indicate that the metrics should be
     * retrieved that correspond to the script(s) used by that language.
     * 
     * If `font` is %NULL, this function gracefully sets some sane values in the
     * output variables and returns.
     * @virtual 
     * @param language language tag used to determine which script   to get the metrics for, or %NULL to indicate to get the metrics for   the entire font.
     */
    getMetrics(language: Language | null): FontMetrics

    // Class property signals of Pango-1.0.Pango.Font

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoFont` is used to represent a font in a
 * rendering-system-independent manner.
 * @class 
 */
export class Font extends GObject.Object {

    // Own properties of Pango-1.0.Pango.Font

    static name: string

    // Constructors of Pango-1.0.Pango.Font

    constructor(config?: Font.ConstructorProperties) 
    _init(config?: Font.ConstructorProperties): void
    /**
     * Frees an array of font descriptions.
     * @param descs a pointer   to an array of `PangoFontDescription`, may be %NULL
     */
    static descriptionsFree(descs: FontDescription[] | null): void
    /**
     * Loads data previously created via [method`Pango`.Font.serialize].
     * 
     * For a discussion of the supported format, see that function.
     * 
     * Note: to verify that the returned font is identical to
     * the one that was serialized, you can compare `bytes` to the
     * result of serializing the font again.
     * @param context a `PangoContext`
     * @param bytes the bytes containing the data
     */
    static deserialize(context: Context, bytes: any): Font | null
}

export module FontFace {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FontFace {

    // Own fields of Pango-1.0.Pango.FontFace

    parentInstance: GObject.Object

    // Owm methods of Pango-1.0.Pango.FontFace

    // Has conflict: describe(): FontDescription
    // Has conflict: getFaceName(): string
    // Has conflict: getFamily(): FontFamily
    // Has conflict: isSynthesized(): boolean
    // Has conflict: listSizes(): /* sizes */ number[] | null

    // Own virtual methods of Pango-1.0.Pango.FontFace

    /**
     * Returns a font description that matches the face.
     * 
     * The resulting font description will have the family, style,
     * variant, weight and stretch of the face, but its size field
     * will be unset.
     * @virtual 
     */
    describe(): FontDescription
    /**
     * Gets a name representing the style of this face.
     * 
     * Note that a font family may contain multiple faces
     * with the same name (e.g. a variable and a non-variable
     * face for the same style).
     * @virtual 
     */
    getFaceName(): string
    /**
     * Gets the `PangoFontFamily` that `face` belongs to.
     * @virtual 
     */
    getFamily(): FontFamily
    /**
     * Returns whether a `PangoFontFace` is synthesized.
     * 
     * This will be the case if the underlying font rendering engine
     * creates this face from another face, by shearing, emboldening,
     * lightening or modifying it in some other way.
     * @virtual 
     */
    isSynthesized(): boolean
    /**
     * List the available sizes for a font.
     * 
     * This is only applicable to bitmap fonts. For scalable fonts, stores
     * %NULL at the location pointed to by `sizes` and 0 at the location pointed
     * to by `n_sizes`. The sizes returned are in Pango units and are sorted
     * in ascending order.
     * @virtual 
     */
    listSizes(): /* sizes */ number[] | null

    // Class property signals of Pango-1.0.Pango.FontFace

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoFontFace` is used to represent a group of fonts with
 * the same family, slant, weight, and width, but varying sizes.
 * @class 
 */
export class FontFace extends GObject.Object {

    // Own properties of Pango-1.0.Pango.FontFace

    static name: string

    // Constructors of Pango-1.0.Pango.FontFace

    constructor(config?: FontFace.ConstructorProperties) 
    _init(config?: FontFace.ConstructorProperties): void
}

export module FontFamily {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FontFamily {

    // Own fields of Pango-1.0.Pango.FontFamily

    parentInstance: GObject.Object

    // Owm methods of Pango-1.0.Pango.FontFamily

    // Has conflict: getFace(name: string | null): FontFace | null
    // Has conflict: getName(): string
    // Has conflict: isMonospace(): boolean
    // Has conflict: isVariable(): boolean
    // Has conflict: listFaces(): /* faces */ FontFace[]

    // Own virtual methods of Pango-1.0.Pango.FontFamily

    /**
     * Gets the `PangoFontFace` of `family` with the given name.
     * @virtual 
     * @param name the name of a face. If the name is %NULL,   the family's default face (fontconfig calls it "Regular")   will be returned.
     */
    getFace(name: string | null): FontFace | null
    /**
     * Gets the name of the family.
     * 
     * The name is unique among all fonts for the font backend and can
     * be used in a `PangoFontDescription` to specify that a face from
     * this family is desired.
     * @virtual 
     */
    getName(): string
    /**
     * A monospace font is a font designed for text display where the the
     * characters form a regular grid.
     * 
     * For Western languages this would
     * mean that the advance width of all characters are the same, but
     * this categorization also includes Asian fonts which include
     * double-width characters: characters that occupy two grid cells.
     * g_unichar_iswide() returns a result that indicates whether a
     * character is typically double-width in a monospace font.
     * 
     * The best way to find out the grid-cell size is to call
     * [method`Pango`.FontMetrics.get_approximate_digit_width], since the
     * results of [method`Pango`.FontMetrics.get_approximate_char_width] may
     * be affected by double-width characters.
     * @virtual 
     */
    isMonospace(): boolean
    /**
     * A variable font is a font which has axes that can be modified to
     * produce different faces.
     * 
     * Such axes are also known as _variations_; see
     * [method`Pango`.FontDescription.set_variations] for more information.
     * @virtual 
     */
    isVariable(): boolean
    /**
     * Lists the different font faces that make up `family`.
     * 
     * The faces in a family share a common design, but differ in slant, weight,
     * width and other aspects.
     * 
     * Note that the returned faces are not in any particular order, and
     * multiple faces may have the same name or characteristics.
     * 
     * `PangoFontFamily` also implemented the [iface`Gio`.ListModel] interface
     * for enumerating faces.
     * @virtual 
     */
    listFaces(): /* faces */ FontFace[]

    // Class property signals of Pango-1.0.Pango.FontFamily

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoFontFamily` is used to represent a family of related
 * font faces.
 * 
 * The font faces in a family share a common design, but differ in
 * slant, weight, width or other aspects.
 * @class 
 */
export class FontFamily extends GObject.Object {

    // Own properties of Pango-1.0.Pango.FontFamily

    static name: string

    // Constructors of Pango-1.0.Pango.FontFamily

    constructor(config?: FontFamily.ConstructorProperties) 
    _init(config?: FontFamily.ConstructorProperties): void
}

export module FontMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface FontMap {

    // Own fields of Pango-1.0.Pango.FontMap

    parentInstance: GObject.Object

    // Owm methods of Pango-1.0.Pango.FontMap

    // Has conflict: changed(): void
    /**
     * Creates a `PangoContext` connected to `fontmap`.
     * 
     * This is equivalent to [ctor`Pango`.Context.new] followed by
     * [method`Pango`.Context.set_font_map].
     * 
     * If you are using Pango as part of a higher-level system,
     * that system may have it's own way of create a `PangoContext`.
     * For instance, the GTK toolkit has, among others,
     * gtk_widget_get_pango_context(). Use those instead.
     */
    createContext(): Context
    // Has conflict: getFamily(name: string): FontFamily
    // Has conflict: getSerial(): number
    // Has conflict: listFamilies(): /* families */ FontFamily[]
    // Has conflict: loadFont(context: Context, desc: FontDescription): Font | null
    // Has conflict: loadFontset(context: Context, desc: FontDescription, language: Language): Fontset | null

    // Own virtual methods of Pango-1.0.Pango.FontMap

    /**
     * Forces a change in the context, which will cause any `PangoContext`
     * using this fontmap to change.
     * 
     * This function is only useful when implementing a new backend
     * for Pango, something applications won't do. Backends should
     * call this function if they have attached extra data to the
     * context and such data is changed.
     * @virtual 
     */
    changed(): void
    /**
     * Gets a font family by name.
     * @virtual 
     * @param name a family name
     */
    getFamily(name: string): FontFamily
    /**
     * Returns the current serial number of `fontmap`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new fontmap is created and is increased whenever the fontmap
     * is changed. It may wrap, but will never have the value 0. Since it can
     * wrap, never compare it with "less than", always use "not equals".
     * 
     * The fontmap can only be changed using backend-specific API, like changing
     * fontmap resolution.
     * 
     * This can be used to automatically detect changes to a `PangoFontMap`,
     * like in `PangoContext`.
     * @virtual 
     */
    getSerial(): number
    /**
     * List all families for a fontmap.
     * 
     * Note that the returned families are not in any particular order.
     * 
     * `PangoFontMap` also implemented the [iface`Gio`.ListModel] interface
     * for enumerating families.
     * @virtual 
     */
    listFamilies(): /* families */ FontFamily[]
    /**
     * Load the font in the fontmap that is the closest match for `desc`.
     * @virtual 
     * @param context the `PangoContext` the font will be used with
     * @param desc a `PangoFontDescription` describing the font to load
     */
    loadFont(context: Context, desc: FontDescription): Font | null
    /**
     * Load a set of fonts in the fontmap that can be used to render
     * a font matching `desc`.
     * @virtual 
     * @param context the `PangoContext` the font will be used with
     * @param desc a `PangoFontDescription` describing the font to load
     * @param language a `PangoLanguage` the fonts will be used for
     */
    loadFontset(context: Context, desc: FontDescription, language: Language): Fontset | null

    // Class property signals of Pango-1.0.Pango.FontMap

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoFontMap` represents the set of fonts available for a
 * particular rendering system.
 * 
 * This is a virtual object with implementations being specific to
 * particular rendering systems.
 * @class 
 */
export class FontMap extends GObject.Object {

    // Own properties of Pango-1.0.Pango.FontMap

    static name: string

    // Constructors of Pango-1.0.Pango.FontMap

    constructor(config?: FontMap.ConstructorProperties) 
    _init(config?: FontMap.ConstructorProperties): void
}

export module Fontset {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Fontset {

    // Own fields of Pango-1.0.Pango.Fontset

    parentInstance: GObject.Object

    // Owm methods of Pango-1.0.Pango.Fontset

    // Has conflict: foreach(func: FontsetForeachFunc): void
    // Has conflict: getFont(wc: number): Font
    // Has conflict: getMetrics(): FontMetrics

    // Own virtual methods of Pango-1.0.Pango.Fontset

    /**
     * Iterates through all the fonts in a fontset, calling `func` for
     * each one.
     * 
     * If `func` returns %TRUE, that stops the iteration.
     * @virtual 
     * @param func Callback function
     */
    foreach(func: FontsetForeachFunc): void
    /**
     * Returns the font in the fontset that contains the best
     * glyph for a Unicode character.
     * @virtual 
     * @param wc a Unicode character
     */
    getFont(wc: number): Font
    getLanguage(): Language
    /**
     * Get overall metric information for the fonts in the fontset.
     * @virtual 
     */
    getMetrics(): FontMetrics

    // Class property signals of Pango-1.0.Pango.Fontset

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoFontset` represents a set of `PangoFont` to use when rendering text.
 * 
 * A `PangoFontset` is the result of resolving a `PangoFontDescription`
 * against a particular `PangoContext`. It has operations for finding the
 * component font for a particular Unicode character, and for finding a
 * composite set of metrics for the entire fontset.
 * @class 
 */
export class Fontset extends GObject.Object {

    // Own properties of Pango-1.0.Pango.Fontset

    static name: string

    // Constructors of Pango-1.0.Pango.Fontset

    constructor(config?: Fontset.ConstructorProperties) 
    _init(config?: Fontset.ConstructorProperties): void
}

export module FontsetSimple {

    // Constructor properties interface

    export interface ConstructorProperties extends Fontset.ConstructorProperties {
    }

}

export interface FontsetSimple {

    // Owm methods of Pango-1.0.Pango.FontsetSimple

    /**
     * Adds a font to the fontset.
     * 
     * The fontset takes ownership of `font`.
     * @param font a `PangoFont`.
     */
    append(font: Font): void
    /**
     * Returns the number of fonts in the fontset.
     */
    size(): number

    // Class property signals of Pango-1.0.Pango.FontsetSimple

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoFontsetSimple` is a implementation of the abstract
 * `PangoFontset` base class as an array of fonts.
 * 
 * When creating a `PangoFontsetSimple`, you have to provide
 * the array of fonts that make up the fontset.
 * @class 
 */
export class FontsetSimple extends Fontset {

    // Own properties of Pango-1.0.Pango.FontsetSimple

    static name: string

    // Constructors of Pango-1.0.Pango.FontsetSimple

    constructor(config?: FontsetSimple.ConstructorProperties) 
    /**
     * Creates a new `PangoFontsetSimple` for the given language.
     * @constructor 
     * @param language a `PangoLanguage` tag
     */
    constructor(language: Language) 
    /**
     * Creates a new `PangoFontsetSimple` for the given language.
     * @constructor 
     * @param language a `PangoLanguage` tag
     */
    static new(language: Language): FontsetSimple
    _init(config?: FontsetSimple.ConstructorProperties): void
}

export module Layout {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Layout {

    // Owm methods of Pango-1.0.Pango.Layout

    /**
     * Forces recomputation of any state in the `PangoLayout` that
     * might depend on the layout's context.
     * 
     * This function should be called if you make changes to the context
     * subsequent to creating the layout.
     */
    contextChanged(): void
    /**
     * Creates a deep copy-by-value of the layout.
     * 
     * The attribute list, tab array, and text from the original layout
     * are all copied by value.
     */
    copy(): Layout
    /**
     * Gets the alignment for the layout: how partial lines are
     * positioned within the horizontal space available.
     */
    getAlignment(): Alignment
    /**
     * Gets the attribute list for the layout, if any.
     */
    getAttributes(): AttrList | null
    /**
     * Gets whether to calculate the base direction for the layout
     * according to its contents.
     * 
     * See [method`Pango`.Layout.set_auto_dir].
     */
    getAutoDir(): boolean
    /**
     * Gets the Y position of baseline of the first line in `layout`.
     */
    getBaseline(): number
    /**
     * Given an index within a layout, determines the positions that of the
     * strong and weak cursors if the insertion point is at that index.
     * 
     * This is a variant of [method`Pango`.Layout.get_cursor_pos] that applies
     * font metric information about caret slope and offset to the positions
     * it returns.
     * 
     * <picture>
     *   <source srcset="caret-metrics-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Caret metrics" src="caret-metrics-light.png">
     * </picture>
     * @param index the byte index of the cursor
     */
    getCaretPos(index: number): [ /* strongPos */ Rectangle, /* weakPos */ Rectangle ]
    /**
     * Returns the number of Unicode characters in the
     * the text of `layout`.
     */
    getCharacterCount(): number
    /**
     * Retrieves the `PangoContext` used for this layout.
     */
    getContext(): Context
    /**
     * Given an index within a layout, determines the positions that of the
     * strong and weak cursors if the insertion point is at that index.
     * 
     * The position of each cursor is stored as a zero-width rectangle
     * with the height of the run extents.
     * 
     * <picture>
     *   <source srcset="cursor-positions-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Cursor positions" src="cursor-positions-light.png">
     * </picture>
     * 
     * The strong cursor location is the location where characters of the
     * directionality equal to the base direction of the layout are inserted.
     * The weak cursor location is the location where characters of the
     * directionality opposite to the base direction of the layout are inserted.
     * 
     * The following example shows text with both a strong and a weak cursor.
     * 
     * <picture>
     *   <source srcset="split-cursor-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Strong and weak cursors" src="split-cursor-light.png">
     * </picture>
     * 
     * The strong cursor has a little arrow pointing to the right, the weak
     * cursor to the left. Typing a 'c' in this situation will insert the
     * character after the 'b', and typing another Hebrew character, like '??',
     * will insert it at the end.
     * @param index the byte index of the cursor
     */
    getCursorPos(index: number): [ /* strongPos */ Rectangle, /* weakPos */ Rectangle ]
    /**
     * Gets the text direction at the given character position in `layout`.
     * @param index the byte index of the char
     */
    getDirection(index: number): Direction
    /**
     * Gets the type of ellipsization being performed for `layout`.
     * 
     * See [method`Pango`.Layout.set_ellipsize].
     * 
     * Use [method`Pango`.Layout.is_ellipsized] to query whether any
     * paragraphs were actually ellipsized.
     */
    getEllipsize(): EllipsizeMode
    /**
     * Computes the logical and ink extents of `layout`.
     * 
     * Logical extents are usually what you want for positioning things. Note
     * that both extents may have non-zero x and y. You may want to use those
     * to offset where you render the layout. Not doing that is a very typical
     * bug that shows up as right-to-left layouts not being correctly positioned
     * in a layout with a set width.
     * 
     * The extents are given in layout coordinates and in Pango units; layout
     * coordinates begin at the top left corner of the layout.
     */
    getExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Gets the font description for the layout, if any.
     */
    getFontDescription(): FontDescription | null
    /**
     * Gets the height of layout used for ellipsization.
     * 
     * See [method`Pango`.Layout.set_height] for details.
     */
    getHeight(): number
    /**
     * Gets the paragraph indent width in Pango units.
     * 
     * A negative value indicates a hanging indentation.
     */
    getIndent(): number
    /**
     * Returns an iterator to iterate over the visual extents of the layout.
     */
    getIter(): LayoutIter
    /**
     * Gets whether each complete line should be stretched to fill the entire
     * width of the layout.
     */
    getJustify(): boolean
    /**
     * Gets whether the last line should be stretched
     * to fill the entire width of the layout.
     */
    getJustifyLastLine(): boolean
    /**
     * Retrieves a particular line from a `PangoLayout`.
     * 
     * Use the faster [method`Pango`.Layout.get_line_readonly] if you do not
     * plan to modify the contents of the line (glyphs, glyph widths, etc.).
     * @param line the index of a line, which must be between 0 and   `pango_layout_get_line_count(layout) - 1`, inclusive.
     */
    getLine(line: number): LayoutLine | null
    /**
     * Retrieves the count of lines for the `layout`.
     */
    getLineCount(): number
    /**
     * Retrieves a particular line from a `PangoLayout`.
     * 
     * This is a faster alternative to [method`Pango`.Layout.get_line],
     * but the user is not expected to modify the contents of the line
     * (glyphs, glyph widths, etc.).
     * @param line the index of a line, which must be between 0 and   `pango_layout_get_line_count(layout) - 1`, inclusive.
     */
    getLineReadonly(line: number): LayoutLine | null
    /**
     * Gets the line spacing factor of `layout`.
     * 
     * See [method`Pango`.Layout.set_line_spacing].
     */
    getLineSpacing(): number
    /**
     * Returns the lines of the `layout` as a list.
     * 
     * Use the faster [method`Pango`.Layout.get_lines_readonly] if you do not
     * plan to modify the contents of the lines (glyphs, glyph widths, etc.).
     */
    getLines(): LayoutLine[]
    /**
     * Returns the lines of the `layout` as a list.
     * 
     * This is a faster alternative to [method`Pango`.Layout.get_lines],
     * but the user is not expected to modify the contents of the lines
     * (glyphs, glyph widths, etc.).
     */
    getLinesReadonly(): LayoutLine[]
    /**
     * Retrieves an array of logical attributes for each character in
     * the `layout`.
     */
    getLogAttrs(): /* attrs */ LogAttr[]
    /**
     * Retrieves an array of logical attributes for each character in
     * the `layout`.
     * 
     * This is a faster alternative to [method`Pango`.Layout.get_log_attrs].
     * The returned array is part of `layout` and must not be modified.
     * Modifying the layout will invalidate the returned array.
     * 
     * The number of attributes returned in `n_attrs` will be one more
     * than the total number of characters in the layout, since there
     * need to be attributes corresponding to both the position before
     * the first character and the position after the last character.
     */
    getLogAttrsReadonly(): LogAttr[]
    /**
     * Computes the logical and ink extents of `layout` in device units.
     * 
     * This function just calls [method`Pango`.Layout.get_extents] followed by
     * two [func`extents_to_pixels]` calls, rounding `ink_rect` and `logical_rect`
     * such that the rounded rectangles fully contain the unrounded one (that is,
     * passes them as first argument to [func`Pango`.extents_to_pixels]).
     */
    getPixelExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Determines the logical width and height of a `PangoLayout` in device
     * units.
     * 
     * [method`Pango`.Layout.get_size] returns the width and height
     * scaled by %PANGO_SCALE. This is simply a convenience function
     * around [method`Pango`.Layout.get_pixel_extents].
     */
    getPixelSize(): [ /* width */ number, /* height */ number ]
    /**
     * Returns the current serial number of `layout`.
     * 
     * The serial number is initialized to an small number larger than zero
     * when a new layout is created and is increased whenever the layout is
     * changed using any of the setter functions, or the `PangoContext` it
     * uses has changed. The serial may wrap, but will never have the value 0.
     * Since it can wrap, never compare it with "less than", always use "not equals".
     * 
     * This can be used to automatically detect changes to a `PangoLayout`,
     * and is useful for example to decide whether a layout needs redrawing.
     * To force the serial to be increased, use
     * [method`Pango`.Layout.context_changed].
     */
    getSerial(): number
    /**
     * Obtains whether `layout` is in single paragraph mode.
     * 
     * See [method`Pango`.Layout.set_single_paragraph_mode].
     */
    getSingleParagraphMode(): boolean
    /**
     * Determines the logical width and height of a `PangoLayout` in Pango
     * units.
     * 
     * This is simply a convenience function around [method`Pango`.Layout.get_extents].
     */
    getSize(): [ /* width */ number, /* height */ number ]
    /**
     * Gets the amount of spacing between the lines of the layout.
     */
    getSpacing(): number
    /**
     * Gets the current `PangoTabArray` used by this layout.
     * 
     * If no `PangoTabArray` has been set, then the default tabs are
     * in use and %NULL is returned. Default tabs are every 8 spaces.
     * 
     * The return value should be freed with [method`Pango`.TabArray.free].
     */
    getTabs(): TabArray | null
    /**
     * Gets the text in the layout.
     * 
     * The returned text should not be freed or modified.
     */
    getText(): string
    /**
     * Counts the number of unknown glyphs in `layout`.
     * 
     * This function can be used to determine if there are any fonts
     * available to render all characters in a certain string, or when
     * used in combination with %PANGO_ATTR_FALLBACK, to check if a
     * certain font supports all the characters in the string.
     */
    getUnknownGlyphsCount(): number
    /**
     * Gets the width to which the lines of the `PangoLayout` should wrap.
     */
    getWidth(): number
    /**
     * Gets the wrap mode for the layout.
     * 
     * Use [method`Pango`.Layout.is_wrapped] to query whether
     * any paragraphs were actually wrapped.
     */
    getWrap(): WrapMode
    /**
     * Converts from byte `index_` within the `layout` to line and X position.
     * 
     * The X position is measured from the left edge of the line.
     * @param index the byte index of a grapheme within the layout
     * @param trailing an integer indicating the edge of the grapheme to retrieve the   position of. If > 0, the trailing edge of the grapheme, if 0,   the leading of the grapheme
     */
    indexToLineX(index: number, trailing: boolean): [ /* line */ number, /* xPos */ number ]
    /**
     * Converts from an index within a `PangoLayout` to the onscreen position
     * corresponding to the grapheme at that index.
     * 
     * The return value is represented as rectangle. Note that `pos->x` is
     * always the leading edge of the grapheme and `pos->x + pos->width` the
     * trailing edge of the grapheme. If the directionality of the grapheme
     * is right-to-left, then `pos->width` will be negative.
     * @param index byte index within `layout`
     */
    indexToPos(index: number): /* pos */ Rectangle
    /**
     * Queries whether the layout had to ellipsize any paragraphs.
     * 
     * This returns %TRUE if the ellipsization mode for `layout`
     * is not %PANGO_ELLIPSIZE_NONE, a positive width is set on `layout,`
     * and there are paragraphs exceeding that width that have to be
     * ellipsized.
     */
    isEllipsized(): boolean
    /**
     * Queries whether the layout had to wrap any paragraphs.
     * 
     * This returns %TRUE if a positive width is set on `layout,`
     * ellipsization mode of `layout` is set to %PANGO_ELLIPSIZE_NONE,
     * and there are paragraphs exceeding the layout width that have
     * to be wrapped.
     */
    isWrapped(): boolean
    /**
     * Computes a new cursor position from an old position and a direction.
     * 
     * If `direction` is positive, then the new position will cause the strong
     * or weak cursor to be displayed one position to right of where it was
     * with the old cursor position. If `direction` is negative, it will be
     * moved to the left.
     * 
     * In the presence of bidirectional text, the correspondence between
     * logical and visual order will depend on the direction of the current
     * run, and there may be jumps when the cursor is moved off of the end
     * of a run.
     * 
     * Motion here is in cursor positions, not in characters, so a single
     * call to this function may move the cursor over multiple characters
     * when multiple characters combine to form a single grapheme.
     * @param strong whether the moving cursor is the strong cursor or the   weak cursor. The strong cursor is the cursor corresponding   to text insertion in the base direction for the layout.
     * @param oldIndex the byte index of the current cursor position
     * @param oldTrailing if 0, the cursor was at the leading edge of the   grapheme indicated by `old_index,` if > 0, the cursor   was at the trailing edge.
     * @param direction direction to move cursor. A negative   value indicates motion to the left
     */
    moveCursorVisually(strong: boolean, oldIndex: number, oldTrailing: number, direction: number): [ /* newIndex */ number, /* newTrailing */ number ]
    /**
     * Serializes the `layout` for later deserialization via [func`Pango`.Layout.deserialize].
     * 
     * There are no guarantees about the format of the output across different
     * versions of Pango and [func`Pango`.Layout.deserialize] will reject data
     * that it cannot parse.
     * 
     * The intended use of this function is testing, benchmarking and debugging.
     * The format is not meant as a permanent storage format.
     * @param flags `PangoLayoutSerializeFlags`
     */
    serialize(flags: LayoutSerializeFlags): any
    /**
     * Sets the alignment for the layout: how partial lines are
     * positioned within the horizontal space available.
     * 
     * The default alignment is %PANGO_ALIGN_LEFT.
     * @param alignment the alignment
     */
    setAlignment(alignment: Alignment): void
    /**
     * Sets the text attributes for a layout object.
     * 
     * References `attrs,` so the caller can unref its reference.
     * @param attrs a `PangoAttrList`
     */
    setAttributes(attrs: AttrList | null): void
    /**
     * Sets whether to calculate the base direction
     * for the layout according to its contents.
     * 
     * When this flag is on (the default), then paragraphs in `layout` that
     * begin with strong right-to-left characters (Arabic and Hebrew principally),
     * will have right-to-left layout, paragraphs with letters from other scripts
     * will have left-to-right layout. Paragraphs with only neutral characters
     * get their direction from the surrounding paragraphs.
     * 
     * When %FALSE, the choice between left-to-right and right-to-left
     * layout is done according to the base direction of the layout's
     * `PangoContext`. (See [method`Pango`.Context.set_base_dir]).
     * 
     * When the auto-computed direction of a paragraph differs from the
     * base direction of the context, the interpretation of
     * %PANGO_ALIGN_LEFT and %PANGO_ALIGN_RIGHT are swapped.
     * @param autoDir if %TRUE, compute the bidirectional base direction   from the layout's contents
     */
    setAutoDir(autoDir: boolean): void
    /**
     * Sets the type of ellipsization being performed for `layout`.
     * 
     * Depending on the ellipsization mode `ellipsize` text is
     * removed from the start, middle, or end of text so they
     * fit within the width and height of layout set with
     * [method`Pango`.Layout.set_width] and [method`Pango`.Layout.set_height].
     * 
     * If the layout contains characters such as newlines that
     * force it to be layed out in multiple paragraphs, then whether
     * each paragraph is ellipsized separately or the entire layout
     * is ellipsized as a whole depends on the set height of the layout.
     * 
     * The default value is %PANGO_ELLIPSIZE_NONE.
     * 
     * See [method`Pango`.Layout.set_height] for details.
     * @param ellipsize the new ellipsization mode for `layout`
     */
    setEllipsize(ellipsize: EllipsizeMode): void
    /**
     * Sets the default font description for the layout.
     * 
     * If no font description is set on the layout, the
     * font description from the layout's context is used.
     * @param desc the new `PangoFontDescription`   to unset the current font description
     */
    setFontDescription(desc: FontDescription | null): void
    /**
     * Sets the height to which the `PangoLayout` should be ellipsized at.
     * 
     * There are two different behaviors, based on whether `height` is positive
     * or negative.
     * 
     * If `height` is positive, it will be the maximum height of the layout. Only
     * lines would be shown that would fit, and if there is any text omitted,
     * an ellipsis added. At least one line is included in each paragraph regardless
     * of how small the height value is. A value of zero will render exactly one
     * line for the entire layout.
     * 
     * If `height` is negative, it will be the (negative of) maximum number of lines
     * per paragraph. That is, the total number of lines shown may well be more than
     * this value if the layout contains multiple paragraphs of text.
     * The default value of -1 means that the first line of each paragraph is ellipsized.
     * This behavior may be changed in the future to act per layout instead of per
     * paragraph. File a bug against pango at
     * [https://gitlab.gnome.org/gnome/pango](https://gitlab.gnome.org/gnome/pango)
     * if your code relies on this behavior.
     * 
     * Height setting only has effect if a positive width is set on
     * `layout` and ellipsization mode of `layout` is not %PANGO_ELLIPSIZE_NONE.
     * The behavior is undefined if a height other than -1 is set and
     * ellipsization mode is set to %PANGO_ELLIPSIZE_NONE, and may change in the
     * future.
     * @param height the desired height of the layout in Pango units if positive,   or desired number of lines if negative.
     */
    setHeight(height: number): void
    /**
     * Sets the width in Pango units to indent each paragraph.
     * 
     * A negative value of `indent` will produce a hanging indentation.
     * That is, the first line will have the full width, and subsequent
     * lines will be indented by the absolute value of `indent`.
     * 
     * The indent setting is ignored if layout alignment is set to
     * %PANGO_ALIGN_CENTER.
     * 
     * The default value is 0.
     * @param indent the amount by which to indent
     */
    setIndent(indent: number): void
    /**
     * Sets whether each complete line should be stretched to fill the
     * entire width of the layout.
     * 
     * Stretching is typically done by adding whitespace, but for some scripts
     * (such as Arabic), the justification may be done in more complex ways,
     * like extending the characters.
     * 
     * Note that this setting is not implemented and so is ignored in
     * Pango older than 1.18.
     * 
     * Note that tabs and justification conflict with each other:
     * Justification will move content away from its tab-aligned
     * positions.
     * 
     * The default value is %FALSE.
     * 
     * Also see [method`Pango`.Layout.set_justify_last_line].
     * @param justify whether the lines in the layout should be justified
     */
    setJustify(justify: boolean): void
    /**
     * Sets whether the last line should be stretched to fill the
     * entire width of the layout.
     * 
     * This only has an effect if [method`Pango`.Layout.set_justify] has
     * been called as well.
     * 
     * The default value is %FALSE.
     * @param justify whether the last line in the layout should be justified
     */
    setJustifyLastLine(justify: boolean): void
    /**
     * Sets a factor for line spacing.
     * 
     * Typical values are: 0, 1, 1.5, 2. The default values is 0.
     * 
     * If `factor` is non-zero, lines are placed so that
     * 
     *     baseline2 = baseline1 + factor * height2
     * 
     * where height2 is the line height of the second line
     * (as determined by the font(s)). In this case, the spacing
     * set with [method`Pango`.Layout.set_spacing] is ignored.
     * 
     * If `factor` is zero (the default), spacing is applied as before.
     * 
     * Note: for semantics that are closer to the CSS line-height
     * property, see [func`Pango`.attr_line_height_new].
     * @param factor the new line spacing factor
     */
    setLineSpacing(factor: number): void
    // Has conflict: setMarkup(markup: string, length: number): void
    /**
     * Sets the layout text and attribute list from marked-up text.
     * 
     * See [Pango Markup](pango_markup.html)).
     * 
     * Replaces the current text and attribute list.
     * 
     * If `accel_marker` is nonzero, the given character will mark the
     * character following it as an accelerator. For example, `accel_marker`
     * might be an ampersand or underscore. All characters marked
     * as an accelerator will receive a %PANGO_UNDERLINE_LOW attribute,
     * and the first character so marked will be returned in `accel_char`.
     * Two `accel_marker` characters following each other produce a single
     * literal `accel_marker` character.
     * @param markup marked-up text (see [Pango Markup](pango_markup.html))
     * @param length length of marked-up text in bytes, or -1 if `markup` is   `NUL`-terminated
     * @param accelMarker marker for accelerators in the text
     */
    setMarkupWithAccel(markup: string, length: number, accelMarker: string): /* accelChar */ string
    /**
     * Sets the single paragraph mode of `layout`.
     * 
     * If `setting` is %TRUE, do not treat newlines and similar characters
     * as paragraph separators; instead, keep all text in a single paragraph,
     * and display a glyph for paragraph separator characters. Used when
     * you want to allow editing of newlines on a single text line.
     * 
     * The default value is %FALSE.
     * @param setting new setting
     */
    setSingleParagraphMode(setting: boolean): void
    /**
     * Sets the amount of spacing in Pango units between
     * the lines of the layout.
     * 
     * When placing lines with spacing, Pango arranges things so that
     * 
     *     line2.top = line1.bottom + spacing
     * 
     * The default value is 0.
     * 
     * Note: Since 1.44, Pango is using the line height (as determined
     * by the font) for placing lines when the line spacing factor is set
     * to a non-zero value with [method`Pango`.Layout.set_line_spacing].
     * In that case, the `spacing` set with this function is ignored.
     * 
     * Note: for semantics that are closer to the CSS line-height
     * property, see [func`Pango`.attr_line_height_new].
     * @param spacing the amount of spacing
     */
    setSpacing(spacing: number): void
    /**
     * Sets the tabs to use for `layout,` overriding the default tabs.
     * 
     * `PangoLayout` will place content at the next tab position
     * whenever it meets a Tab character (U+0009).
     * 
     * By default, tabs are every 8 spaces. If `tabs` is %NULL, the
     * default tabs are reinstated. `tabs` is copied into the layout;
     * you must free your copy of `tabs` yourself.
     * 
     * Note that tabs and justification conflict with each other:
     * Justification will move content away from its tab-aligned
     * positions. The same is true for alignments other than
     * %PANGO_ALIGN_LEFT.
     * @param tabs a `PangoTabArray`
     */
    setTabs(tabs: TabArray | null): void
    // Has conflict: setText(text: string, length: number): void
    /**
     * Sets the width to which the lines of the `PangoLayout` should wrap or
     * ellipsized.
     * 
     * The default value is -1: no width set.
     * @param width the desired width in Pango units, or -1 to indicate that no   wrapping or ellipsization should be performed.
     */
    setWidth(width: number): void
    /**
     * Sets the wrap mode.
     * 
     * The wrap mode only has effect if a width is set on the layout
     * with [method`Pango`.Layout.set_width]. To turn off wrapping,
     * set the width to -1.
     * 
     * The default value is %PANGO_WRAP_WORD.
     * @param wrap the wrap mode
     */
    setWrap(wrap: WrapMode): void
    /**
     * A convenience method to serialize a layout to a file.
     * 
     * It is equivalent to calling [method`Pango`.Layout.serialize]
     * followed by [func`GLib`.file_set_contents].
     * 
     * See those two functions for details on the arguments.
     * 
     * It is mostly intended for use inside a debugger to quickly dump
     * a layout to a file for later inspection.
     * @param flags `PangoLayoutSerializeFlags`
     * @param filename the file to save it to
     */
    writeToFile(flags: LayoutSerializeFlags, filename: string): boolean
    /**
     * Converts from X and Y position within a layout to the byte index to the
     * character at that logical position.
     * 
     * If the Y position is not inside the layout, the closest position is
     * chosen (the position will be clamped inside the layout). If the X position
     * is not within the layout, then the start or the end of the line is
     * chosen as described for [method`Pango`.LayoutLine.x_to_index]. If either
     * the X or Y positions were not inside the layout, then the function returns
     * %FALSE; on an exact hit, it returns %TRUE.
     * @param x the X offset (in Pango units) from the left edge of the layout
     * @param y the Y offset (in Pango units) from the top edge of the layout
     */
    xyToIndex(x: number, y: number): [ /* returnType */ boolean, /* index */ number, /* trailing */ number ]
    /**
     * Sets the layout text and attribute list from marked-up text.
     * 
     * See [Pango Markup](pango_markup.html)).
     * 
     * Replaces the current text and attribute list.
     * 
     * This is the same as [method`Pango`.Layout.set_markup_with_accel],
     * but the markup text isn't scanned for accelerators.
     * @param markup marked-up text
     * @param length length of marked-up text in bytes, or -1 if `markup` is   `NUL`-terminated
     */
    setMarkup(markup: string): void
    /**
     * Sets the text of the layout.
     * 
     * This function validates `text` and renders invalid UTF-8
     * with a placeholder glyph.
     * 
     * Note that if you have used [method`Pango`.Layout.set_markup] or
     * [method`Pango`.Layout.set_markup_with_accel] on `layout` before, you
     * may want to call [method`Pango`.Layout.set_attributes] to clear the
     * attributes set on the layout from the markup as this function does
     * not clear attributes.
     * @param text the text
     * @param length maximum length of `text,` in bytes. -1 indicates that   the string is nul-terminated and the length should be calculated.   The text will also be truncated on encountering a nul-termination   even when `length` is positive.
     */
    setText(text: string): void

    // Class property signals of Pango-1.0.Pango.Layout

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * A `PangoLayout` structure represents an entire paragraph of text.
 * 
 * While complete access to the layout capabilities of Pango is provided
 * using the detailed interfaces for itemization and shaping, using
 * that functionality directly involves writing a fairly large amount
 * of code. `PangoLayout` provides a high-level driver for formatting
 * entire paragraphs of text at once. This includes paragraph-level
 * functionality such as line breaking, justification, alignment and
 * ellipsization.
 * 
 * A `PangoLayout` is initialized with a `PangoContext`, UTF-8 string
 * and set of attributes for that string. Once that is done, the set of
 * formatted lines can be extracted from the object, the layout can be
 * rendered, and conversion between logical character positions within
 * the layout's text, and the physical position of the resulting glyphs
 * can be made.
 * 
 * There are a number of parameters to adjust the formatting of a
 * `PangoLayout`. The following image shows adjustable parameters
 * (on the left) and font metrics (on the right):
 * 
 * <picture>
 *   <source srcset="layout-dark.png" media="(prefers-color-scheme: dark)">
 *   <img alt="Pango Layout Parameters" src="layout-light.png">
 * </picture>
 * 
 * The following images demonstrate the effect of alignment and
 * justification on the layout of text:
 * 
 * | | |
 * | --- | --- |
 * | ![align=left](align-left.png) | ![align=left, justify](align-left-justify.png) |
 * | ![align=center](align-center.png) | ![align=center, justify](align-center-justify.png) |
 * | ![align=right](align-right.png) | ![align=right, justify](align-right-justify.png) |
 * 
 * 
 * It is possible, as well, to ignore the 2-D setup,
 * and simply treat the results of a `PangoLayout` as a list of lines.
 * @class 
 */
export class Layout extends GObject.Object {

    // Own properties of Pango-1.0.Pango.Layout

    static name: string

    // Constructors of Pango-1.0.Pango.Layout

    constructor(config?: Layout.ConstructorProperties) 
    /**
     * Create a new `PangoLayout` object with attributes initialized to
     * default values for a particular `PangoContext`.
     * @constructor 
     * @param context a `PangoContext`
     */
    constructor(context: Context) 
    /**
     * Create a new `PangoLayout` object with attributes initialized to
     * default values for a particular `PangoContext`.
     * @constructor 
     * @param context a `PangoContext`
     */
    static new(context: Context): Layout
    _init(config?: Layout.ConstructorProperties): void
    /**
     * Loads data previously created via [method`Pango`.Layout.serialize].
     * 
     * For a discussion of the supported format, see that function.
     * 
     * Note: to verify that the returned layout is identical to
     * the one that was serialized, you can compare `bytes` to the
     * result of serializing the layout again.
     * @param context a `PangoContext`
     * @param bytes the bytes containing the data
     * @param flags `PangoLayoutDeserializeFlags`
     */
    static deserialize(context: Context, bytes: any, flags: LayoutDeserializeFlags): Layout | null
}

export module Renderer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Renderer {

    // Own fields of Pango-1.0.Pango.Renderer

    /**
     * the current transformation matrix for
     *   the Renderer; may be %NULL, which should be treated the
     *   same as the identity matrix.
     * @field 
     */
    matrix: Matrix

    // Owm methods of Pango-1.0.Pango.Renderer

    /**
     * Does initial setup before rendering operations on `renderer`.
     * 
     * [method`Pango`.Renderer.deactivate] should be called when done drawing.
     * Calls such as [method`Pango`.Renderer.draw_layout] automatically
     * activate the layout before drawing on it.
     * 
     * Calls to [method`Pango`.Renderer.activate] and
     * [method`Pango`.Renderer.deactivate] can be nested and the
     * renderer will only be initialized and deinitialized once.
     */
    activate(): void
    /**
     * Cleans up after rendering operations on `renderer`.
     * 
     * See docs for [method`Pango`.Renderer.activate].
     */
    deactivate(): void
    // Has conflict: drawErrorUnderline(x: number, y: number, width: number, height: number): void
    // Has conflict: drawGlyph(font: Font, glyph: Glyph, x: number, y: number): void
    // Has conflict: drawGlyphItem(text: string | null, glyphItem: GlyphItem, x: number, y: number): void
    // Has conflict: drawGlyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    /**
     * Draws `layout` with the specified `PangoRenderer`.
     * 
     * This is equivalent to drawing the lines of the layout, at their
     * respective positions relative to `x,` `y`.
     * @param layout a `PangoLayout`
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates   in Pango units.
     */
    drawLayout(layout: Layout, x: number, y: number): void
    /**
     * Draws `line` with the specified `PangoRenderer`.
     * 
     * This draws the glyph items that make up the line, as well as
     * shapes, backgrounds and lines that are specified by the attributes
     * of those items.
     * @param line a `PangoLayoutLine`
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates   in Pango units.
     */
    drawLayoutLine(line: LayoutLine, x: number, y: number): void
    // Has conflict: drawRectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    // Has conflict: drawTrapezoid(part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    /**
     * Gets the current alpha for the specified part.
     * @param part the part to get the alpha for
     */
    getAlpha(part: RenderPart): number
    /**
     * Gets the current rendering color for the specified part.
     * @param part the part to get the color for
     */
    getColor(part: RenderPart): Color | null
    /**
     * Gets the layout currently being rendered using `renderer`.
     * 
     * Calling this function only makes sense from inside a subclass's
     * methods, like in its draw_shape vfunc, for example.
     * 
     * The returned layout should not be modified while still being
     * rendered.
     */
    getLayout(): Layout | null
    /**
     * Gets the layout line currently being rendered using `renderer`.
     * 
     * Calling this function only makes sense from inside a subclass's
     * methods, like in its draw_shape vfunc, for example.
     * 
     * The returned layout line should not be modified while still being
     * rendered.
     */
    getLayoutLine(): LayoutLine | null
    /**
     * Gets the transformation matrix that will be applied when
     * rendering.
     * 
     * See [method`Pango`.Renderer.set_matrix].
     */
    getMatrix(): Matrix | null
    // Has conflict: partChanged(part: RenderPart): void
    /**
     * Sets the alpha for part of the rendering.
     * 
     * Note that the alpha may only be used if a color is
     * specified for `part` as well.
     * @param part the part to set the alpha for
     * @param alpha an alpha value between 1 and 65536, or 0 to unset the alpha
     */
    setAlpha(part: RenderPart, alpha: number): void
    /**
     * Sets the color for part of the rendering.
     * 
     * Also see [method`Pango`.Renderer.set_alpha].
     * @param part the part to change the color of
     * @param color the new color or %NULL to unset the current color
     */
    setColor(part: RenderPart, color: Color | null): void
    /**
     * Sets the transformation matrix that will be applied when rendering.
     * @param matrix a `PangoMatrix`, or %NULL to unset any existing matrix  (No matrix set is the same as setting the identity matrix.)
     */
    setMatrix(matrix: Matrix | null): void

    // Own virtual methods of Pango-1.0.Pango.Renderer

    begin(): void
    /**
     * Draw a squiggly line that approximately covers the given rectangle
     * in the style of an underline used to indicate a spelling error.
     * 
     * The width of the underline is rounded to an integer number
     * of up/down segments and the resulting rectangle is centered
     * in the original rectangle.
     * 
     * This should be called while `renderer` is already active.
     * Use [method`Pango`.Renderer.activate] to activate a renderer.
     * @virtual 
     * @param x X coordinate of underline, in Pango units in user coordinate system
     * @param y Y coordinate of underline, in Pango units in user coordinate system
     * @param width width of underline, in Pango units in user coordinate system
     * @param height height of underline, in Pango units in user coordinate system
     */
    drawErrorUnderline(x: number, y: number, width: number, height: number): void
    /**
     * Draws a single glyph with coordinates in device space.
     * @virtual 
     * @param font a `PangoFont`
     * @param glyph the glyph index of a single glyph
     * @param x X coordinate of left edge of baseline of glyph
     * @param y Y coordinate of left edge of baseline of glyph
     */
    drawGlyph(font: Font, glyph: Glyph, x: number, y: number): void
    /**
     * Draws the glyphs in `glyph_item` with the specified `PangoRenderer`,
     * embedding the text associated with the glyphs in the output if the
     * output format supports it.
     * 
     * This is useful for rendering text in PDF.
     * 
     * Note that this method does not handle attributes in `glyph_item`.
     * If you want colors, shapes and lines handled automatically according
     * to those attributes, you need to use pango_renderer_draw_layout_line()
     * or pango_renderer_draw_layout().
     * 
     * Note that `text` is the start of the text for layout, which is then
     * indexed by `glyph_item->item->offset`.
     * 
     * If `text` is %NULL, this simply calls [method`Pango`.Renderer.draw_glyphs].
     * 
     * The default implementation of this method simply falls back to
     * [method`Pango`.Renderer.draw_glyphs].
     * @virtual 
     * @param text the UTF-8 text that `glyph_item` refers to
     * @param glyphItem a `PangoGlyphItem`
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units
     * @param y Y position of left edge of baseline, in user space coordinates   in Pango units
     */
    drawGlyphItem(text: string | null, glyphItem: GlyphItem, x: number, y: number): void
    /**
     * Draws the glyphs in `glyphs` with the specified `PangoRenderer`.
     * @virtual 
     * @param font a `PangoFont`
     * @param glyphs a `PangoGlyphString`
     * @param x X position of left edge of baseline, in user space coordinates   in Pango units.
     * @param y Y position of left edge of baseline, in user space coordinates   in Pango units.
     */
    drawGlyphs(font: Font, glyphs: GlyphString, x: number, y: number): void
    /**
     * Draws an axis-aligned rectangle in user space coordinates with the
     * specified `PangoRenderer`.
     * 
     * This should be called while `renderer` is already active.
     * Use [method`Pango`.Renderer.activate] to activate a renderer.
     * @virtual 
     * @param part type of object this rectangle is part of
     * @param x X position at which to draw rectangle, in user space coordinates   in Pango units
     * @param y Y position at which to draw rectangle, in user space coordinates   in Pango units
     * @param width width of rectangle in Pango units
     * @param height height of rectangle in Pango units
     */
    drawRectangle(part: RenderPart, x: number, y: number, width: number, height: number): void
    drawShape(attr: AttrShape, x: number, y: number): void
    /**
     * Draws a trapezoid with the parallel sides aligned with the X axis
     * using the given `PangoRenderer`; coordinates are in device space.
     * @virtual 
     * @param part type of object this trapezoid is part of
     * @param y1 Y coordinate of top of trapezoid
     * @param x11 X coordinate of left end of top of trapezoid
     * @param x21 X coordinate of right end of top of trapezoid
     * @param y2 Y coordinate of bottom of trapezoid
     * @param x12 X coordinate of left end of bottom of trapezoid
     * @param x22 X coordinate of right end of bottom of trapezoid
     */
    drawTrapezoid(part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number): void
    end(): void
    /**
     * Informs Pango that the way that the rendering is done
     * for `part` has changed.
     * 
     * This should be called if the rendering changes in a way that would
     * prevent multiple pieces being joined together into one drawing call.
     * For instance, if a subclass of `PangoRenderer` was to add a stipple
     * option for drawing underlines, it needs to call
     * 
     * ```
     * pango_renderer_part_changed (render, PANGO_RENDER_PART_UNDERLINE);
     * ```
     * 
     * When the stipple changes or underlines with different stipples
     * might be joined together. Pango automatically calls this for
     * changes to colors. (See [method`Pango`.Renderer.set_color])
     * @virtual 
     * @param part the part for which rendering has changed.
     */
    partChanged(part: RenderPart): void
    prepareRun(run: LayoutRun): void

    // Class property signals of Pango-1.0.Pango.Renderer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * `PangoRenderer` is a base class for objects that can render text
 * provided as `PangoGlyphString` or `PangoLayout`.
 * 
 * By subclassing `PangoRenderer` and overriding operations such as
 * `draw_glyphs` and `draw_rectangle,` renderers for particular font
 * backends and destinations can be created.
 * @class 
 */
export class Renderer extends GObject.Object {

    // Own properties of Pango-1.0.Pango.Renderer

    static name: string

    // Constructors of Pango-1.0.Pango.Renderer

    constructor(config?: Renderer.ConstructorProperties) 
    _init(config?: Renderer.ConstructorProperties): void
}

export interface Analysis {

    // Own fields of Pango-1.0.Pango.Analysis

    /**
     * unused, reserved
     * @field 
     */
    shapeEngine: object
    /**
     * unused, reserved
     * @field 
     */
    langEngine: object
    /**
     * the font for this segment.
     * @field 
     */
    font: Font
    /**
     * the bidirectional level for this segment.
     * @field 
     */
    level: number
    /**
     * the glyph orientation for this segment (A `PangoGravity`).
     * @field 
     */
    gravity: number
    /**
     * boolean flags for this segment (Since: 1.16).
     * @field 
     */
    flags: number
    /**
     * the detected script for this segment (A `PangoScript`) (Since: 1.18).
     * @field 
     */
    script: number
    /**
     * the detected language for this segment.
     * @field 
     */
    language: Language
    /**
     * extra attributes for this segment.
     * @field 
     */
    extraAttrs: object[]
}

/**
 * The `PangoAnalysis` structure stores information about
 * the properties of a segment of text.
 * @record 
 */
export class Analysis {

    // Own properties of Pango-1.0.Pango.Analysis

    static name: string
}

export interface AttrClass {

    // Own fields of Pango-1.0.Pango.AttrClass

    /**
     * the type ID for this attribute
     * @field 
     */
    type: AttrType
    copy: (attr: Attribute) => Attribute
    destroy: (attr: Attribute) => void
    equal: (attr1: Attribute, attr2: Attribute) => boolean
}

/**
 * The `PangoAttrClass` structure stores the type and operations for
 * a particular type of attribute.
 * 
 * The functions in this structure should not be called directly. Instead,
 * one should use the wrapper functions provided for `PangoAttribute`.
 * @record 
 */
export class AttrClass {

    // Own properties of Pango-1.0.Pango.AttrClass

    static name: string
}

export interface AttrColor {

    // Own fields of Pango-1.0.Pango.AttrColor

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the `PangoColor` which is the value of the attribute
     * @field 
     */
    color: Color
}

/**
 * The `PangoAttrColor` structure is used to represent attributes that
 * are colors.
 * @record 
 */
export class AttrColor {

    // Own properties of Pango-1.0.Pango.AttrColor

    static name: string
}

export interface AttrFloat {

    // Own fields of Pango-1.0.Pango.AttrFloat

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the value of the attribute
     * @field 
     */
    value: number
}

/**
 * The `PangoAttrFloat` structure is used to represent attributes with
 * a float or double value.
 * @record 
 */
export class AttrFloat {

    // Own properties of Pango-1.0.Pango.AttrFloat

    static name: string
}

export interface AttrFontDesc {

    // Own fields of Pango-1.0.Pango.AttrFontDesc

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the font description which is the value of this attribute
     * @field 
     */
    desc: FontDescription
}

/**
 * The `PangoAttrFontDesc` structure is used to store an attribute that
 * sets all aspects of the font description at once.
 * @record 
 */
export class AttrFontDesc {

    // Own properties of Pango-1.0.Pango.AttrFontDesc

    static name: string

    // Constructors of Pango-1.0.Pango.AttrFontDesc

    /**
     * Create a new font description attribute.
     * 
     * This attribute allows setting family, style, weight, variant,
     * stretch, and size simultaneously.
     * @param desc the font description
     */
    static new(desc: FontDescription): Attribute
}

export interface AttrFontFeatures {

    // Own fields of Pango-1.0.Pango.AttrFontFeatures

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the features, as a string in CSS syntax
     * @field 
     */
    features: string
}

/**
 * The `PangoAttrFontFeatures` structure is used to represent OpenType
 * font features as an attribute.
 * @record 
 */
export class AttrFontFeatures {

    // Own properties of Pango-1.0.Pango.AttrFontFeatures

    static name: string

    // Constructors of Pango-1.0.Pango.AttrFontFeatures

    /**
     * Create a new font features tag attribute.
     * 
     * You can use this attribute to select OpenType font features like small-caps,
     * alternative glyphs, ligatures, etc. for fonts that support them.
     * @param features a string with OpenType font features, with the syntax of the [CSS font-feature-settings property](https://www.w3.org/TR/css-fonts-4/#font-rend-desc)
     */
    static new(features: string): Attribute
}

export interface AttrInt {

    // Own fields of Pango-1.0.Pango.AttrInt

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the value of the attribute
     * @field 
     */
    value: number
}

/**
 * The `PangoAttrInt` structure is used to represent attributes with
 * an integer or enumeration value.
 * @record 
 */
export class AttrInt {

    // Own properties of Pango-1.0.Pango.AttrInt

    static name: string
}

export interface AttrIterator {

    // Owm methods of Pango-1.0.Pango.AttrIterator

    /**
     * Copy a `PangoAttrIterator`.
     */
    copy(): AttrIterator
    /**
     * Destroy a `PangoAttrIterator` and free all associated memory.
     */
    destroy(): void
    /**
     * Find the current attribute of a particular type
     * at the iterator location.
     * 
     * When multiple attributes of the same type overlap,
     * the attribute whose range starts closest to the
     * current location is used.
     * @param type the type of attribute to find
     */
    get(type: AttrType): Attribute | null
    /**
     * Gets a list of all attributes at the current position of the
     * iterator.
     */
    getAttrs(): Attribute[]
    /**
     * Get the font and other attributes at the current
     * iterator position.
     * @param desc a `PangoFontDescription` to fill in with the current   values. The family name in this structure will be set using   [method`Pango`.FontDescription.set_family_static] using   values from an attribute in the `PangoAttrList` associated   with the iterator, so if you plan to keep it around, you   must call:   `pango_font_description_set_family (desc, pango_font_description_get_family (desc))`.
     */
    getFont(desc: FontDescription): [ /* language */ Language, /* extraAttrs */ Attribute[] ]
    /**
     * Advance the iterator until the next change of style.
     */
    next(): boolean
    /**
     * Get the range of the current segment.
     * 
     * Note that the stored return values are signed, not unsigned
     * like the values in `PangoAttribute`. To deal with this API
     * oversight, stored return values that wouldn't fit into
     * a signed integer are clamped to %G_MAXINT.
     */
    range(): [ /* start */ number, /* end */ number ]
}

/**
 * A `PangoAttrIterator` is used to iterate through a `PangoAttrList`.
 * 
 * A new iterator is created with [method`Pango`.AttrList.get_iterator].
 * Once the iterator is created, it can be advanced through the style
 * changes in the text using [method`Pango`.AttrIterator.next]. At each
 * style change, the range of the current style segment and the attributes
 * currently in effect can be queried.
 * @record 
 */
export class AttrIterator {

    // Own properties of Pango-1.0.Pango.AttrIterator

    static name: string
}

export interface AttrLanguage {

    // Own fields of Pango-1.0.Pango.AttrLanguage

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the `PangoLanguage` which is the value of the attribute
     * @field 
     */
    value: Language
}

/**
 * The `PangoAttrLanguage` structure is used to represent attributes that
 * are languages.
 * @record 
 */
export class AttrLanguage {

    // Own properties of Pango-1.0.Pango.AttrLanguage

    static name: string

    // Constructors of Pango-1.0.Pango.AttrLanguage

    /**
     * Create a new language tag attribute.
     * @param language language tag
     */
    static new(language: Language): Attribute
}

export interface AttrList {

    // Owm methods of Pango-1.0.Pango.AttrList

    /**
     * Insert the given attribute into the `PangoAttrList`.
     * 
     * It will replace any attributes of the same type
     * on that segment and be merged with any adjoining
     * attributes that are identical.
     * 
     * This function is slower than [method`Pango`.AttrList.insert]
     * for creating an attribute list in order (potentially
     * much slower for large lists). However,
     * [method`Pango`.AttrList.insert] is not suitable for
     * continually changing a set of attributes since it
     * never removes or combines existing attributes.
     * @param attr the attribute to insert
     */
    change(attr: Attribute): void
    /**
     * Copy `list` and return an identical new list.
     */
    copy(): AttrList | null
    /**
     * Checks whether `list` and `other_list` contain the same
     * attributes and whether those attributes apply to the
     * same ranges.
     * 
     * Beware that this will return wrong values if any list
     * contains duplicates.
     * @param otherList the other `PangoAttrList`
     */
    equal(otherList: AttrList): boolean
    /**
     * Given a `PangoAttrList` and callback function, removes
     * any elements of `list` for which `func` returns %TRUE and
     * inserts them into a new list.
     * @param func callback function;   returns %TRUE if an attribute should be filtered out
     */
    filter(func: AttrFilterFunc): AttrList | null
    /**
     * Gets a list of all attributes in `list`.
     */
    getAttributes(): Attribute[]
    /**
     * Create a iterator initialized to the beginning of the list.
     * 
     * `list` must not be modified until this iterator is freed.
     */
    getIterator(): AttrIterator
    /**
     * Insert the given attribute into the `PangoAttrList`.
     * 
     * It will be inserted after all other attributes with a
     * matching `start_index`.
     * @param attr the attribute to insert
     */
    insert(attr: Attribute): void
    /**
     * Insert the given attribute into the `PangoAttrList`.
     * 
     * It will be inserted before all other attributes with a
     * matching `start_index`.
     * @param attr the attribute to insert
     */
    insertBefore(attr: Attribute): void
    /**
     * Increase the reference count of the given attribute
     * list by one.
     */
    ref(): AttrList
    /**
     * This function opens up a hole in `list,` fills it
     * in with attributes from the left, and then merges
     * `other` on top of the hole.
     * 
     * This operation is equivalent to stretching every attribute
     * that applies at position `pos` in `list` by an amount `len,`
     * and then calling [method`Pango`.AttrList.change] with a copy
     * of each attribute in `other` in sequence (offset in position
     * by `pos,` and limited in length to `len)`.
     * 
     * This operation proves useful for, for instance, inserting
     * a pre-edit string in the middle of an edit buffer.
     * 
     * For backwards compatibility, the function behaves differently
     * when `len` is 0. In this case, the attributes from `other` are
     * not imited to `len,` and are just overlayed on top of `list`.
     * 
     * This mode is useful for merging two lists of attributes together.
     * @param other another `PangoAttrList`
     * @param pos the position in `list` at which to insert `other`
     * @param len the length of the spliced segment. (Note that this   must be specified since the attributes in `other` may only   be present at some subsection of this range)
     */
    splice(other: AttrList, pos: number, len: number): void
    /**
     * Serializes a `PangoAttrList` to a string.
     * 
     * No guarantees are made about the format of the string,
     * it may change between Pango versions.
     * 
     * The intended use of this function is testing and
     * debugging. The format is not meant as a permanent
     * storage format.
     */
    toString(): string
    /**
     * Decrease the reference count of the given attribute
     * list by one.
     * 
     * If the result is zero, free the attribute list
     * and the attributes it contains.
     */
    unref(): void
    /**
     * Update indices of attributes in `list` for a change in the
     * text they refer to.
     * 
     * The change that this function applies is removing `remove`
     * bytes at position `pos` and inserting `add` bytes instead.
     * 
     * Attributes that fall entirely in the (`pos,` `pos` + `remove)`
     * range are removed.
     * 
     * Attributes that start or end inside the (`pos,` `pos` + `remove)`
     * range are shortened to reflect the removal.
     * 
     * Attributes start and end positions are updated if they are
     * behind `pos` + `remove`.
     * @param pos the position of the change
     * @param remove the number of removed bytes
     * @param add the number of added bytes
     */
    update(pos: number, remove: number, add: number): void
}

/**
 * A `PangoAttrList` represents a list of attributes that apply to a section
 * of text.
 * 
 * The attributes in a `PangoAttrList` are, in general, allowed to overlap in
 * an arbitrary fashion. However, if the attributes are manipulated only through
 * [method`Pango`.AttrList.change], the overlap between properties will meet
 * stricter criteria.
 * 
 * Since the `PangoAttrList` structure is stored as a linear list, it is not
 * suitable for storing attributes for large amounts of text. In general, you
 * should not use a single `PangoAttrList` for more than one paragraph of text.
 * @record 
 */
export class AttrList {

    // Own properties of Pango-1.0.Pango.AttrList

    static name: string

    // Constructors of Pango-1.0.Pango.AttrList

    /**
     * Create a new empty attribute list with a reference
     * count of one.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new empty attribute list with a reference
     * count of one.
     * @constructor 
     */
    static new(): AttrList
    /**
     * Deserializes a `PangoAttrList` from a string.
     * 
     * This is the counterpart to [method`Pango`.AttrList.to_string].
     * See that functions for details about the format.
     * @param text a string
     */
    static fromString(text: string): AttrList | null
}

export interface AttrShape {

    // Own fields of Pango-1.0.Pango.AttrShape

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the ink rectangle to restrict to
     * @field 
     */
    inkRect: Rectangle
    /**
     * the logical rectangle to restrict to
     * @field 
     */
    logicalRect: Rectangle
    /**
     * user data set (see [func`Pango`.AttrShape.new_with_data])
     * @field 
     */
    data: object
    /**
     * copy function for the user data
     * @field 
     */
    copyFunc: AttrDataCopyFunc
    /**
     * destroy function for the user data
     * @field 
     */
    destroyFunc: GLib.DestroyNotify
}

/**
 * The `PangoAttrShape` structure is used to represent attributes which
 * impose shape restrictions.
 * @record 
 */
export class AttrShape {

    // Own properties of Pango-1.0.Pango.AttrShape

    static name: string

    // Constructors of Pango-1.0.Pango.AttrShape

    /**
     * Create a new shape attribute.
     * 
     * A shape is used to impose a particular ink and logical
     * rectangle on the result of shaping a particular glyph.
     * This might be used, for instance, for embedding a picture
     * or a widget inside a `PangoLayout`.
     * @param inkRect ink rectangle to assign to each character
     * @param logicalRect logical rectangle to assign to each character
     */
    static new(inkRect: Rectangle, logicalRect: Rectangle): Attribute
    /**
     * Creates a new shape attribute.
     * 
     * Like [func`Pango`.AttrShape.new], but a user data pointer
     * is also provided; this pointer can be accessed when later
     * rendering the glyph.
     * @param inkRect ink rectangle to assign to each character
     * @param logicalRect logical rectangle to assign to each character
     * @param data user data pointer
     * @param copyFunc function to copy `data` when the   attribute is copied. If %NULL, `data` is simply copied   as a pointer
     */
    static newWithData(inkRect: Rectangle, logicalRect: Rectangle, data: object | null, copyFunc: AttrDataCopyFunc | null): Attribute
}

export interface AttrSize {

    // Own fields of Pango-1.0.Pango.AttrSize

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * size of font, in units of 1/%PANGO_SCALE of a point (for
     *   %PANGO_ATTR_SIZE) or of a device unit (for %PANGO_ATTR_ABSOLUTE_SIZE)
     * @field 
     */
    size: number
    /**
     * whether the font size is in device units or points.
     *   This field is only present for compatibility with Pango-1.8.0
     *   (%PANGO_ATTR_ABSOLUTE_SIZE was added in 1.8.1); and always will
     *   be %FALSE for %PANGO_ATTR_SIZE and %TRUE for %PANGO_ATTR_ABSOLUTE_SIZE.
     * @field 
     */
    absolute: number
}

/**
 * The `PangoAttrSize` structure is used to represent attributes which
 * set font size.
 * @record 
 */
export class AttrSize {

    // Own properties of Pango-1.0.Pango.AttrSize

    static name: string

    // Constructors of Pango-1.0.Pango.AttrSize

    /**
     * Create a new font-size attribute in fractional points.
     * @param size the font size, in %PANGO_SCALE-ths of a point
     */
    static new(size: number): Attribute
    /**
     * Create a new font-size attribute in device units.
     * @param size the font size, in %PANGO_SCALE-ths of a device unit
     */
    static newAbsolute(size: number): Attribute
}

export interface AttrString {

    // Own fields of Pango-1.0.Pango.AttrString

    /**
     * the common portion of the attribute
     * @field 
     */
    attr: Attribute
    /**
     * the string which is the value of the attribute
     * @field 
     */
    value: string
}

/**
 * The `PangoAttrString` structure is used to represent attributes with
 * a string value.
 * @record 
 */
export class AttrString {

    // Own properties of Pango-1.0.Pango.AttrString

    static name: string
}

export interface Attribute {

    // Own fields of Pango-1.0.Pango.Attribute

    /**
     * the class structure holding information about the type of the attribute
     * @field 
     */
    klass: AttrClass
    /**
     * the start index of the range (in bytes).
     * @field 
     */
    startIndex: number
    /**
     * end index of the range (in bytes). The character at this index
     *   is not included in the range.
     * @field 
     */
    endIndex: number

    // Owm methods of Pango-1.0.Pango.Attribute

    /**
     * Returns the attribute cast to `PangoAttrColor`.
     * 
     * This is mainly useful for language bindings.
     */
    asColor(): AttrColor | null
    /**
     * Returns the attribute cast to `PangoAttrFloat`.
     * 
     * This is mainly useful for language bindings.
     */
    asFloat(): AttrFloat | null
    /**
     * Returns the attribute cast to `PangoAttrFontDesc`.
     * 
     * This is mainly useful for language bindings.
     */
    asFontDesc(): AttrFontDesc | null
    /**
     * Returns the attribute cast to `PangoAttrFontFeatures`.
     * 
     * This is mainly useful for language bindings.
     */
    asFontFeatures(): AttrFontFeatures | null
    /**
     * Returns the attribute cast to `PangoAttrInt`.
     * 
     * This is mainly useful for language bindings.
     */
    asInt(): AttrInt | null
    /**
     * Returns the attribute cast to `PangoAttrLanguage`.
     * 
     * This is mainly useful for language bindings.
     */
    asLanguage(): AttrLanguage | null
    /**
     * Returns the attribute cast to `PangoAttrShape`.
     * 
     * This is mainly useful for language bindings.
     */
    asShape(): AttrShape | null
    /**
     * Returns the attribute cast to `PangoAttrSize`.
     * 
     * This is mainly useful for language bindings.
     */
    asSize(): AttrSize | null
    /**
     * Returns the attribute cast to `PangoAttrString`.
     * 
     * This is mainly useful for language bindings.
     */
    asString(): AttrString | null
    /**
     * Make a copy of an attribute.
     */
    copy(): Attribute
    /**
     * Destroy a `PangoAttribute` and free all associated memory.
     */
    destroy(): void
    /**
     * Compare two attributes for equality.
     * 
     * This compares only the actual value of the two
     * attributes and not the ranges that the attributes
     * apply to.
     * @param attr2 another `PangoAttribute`
     */
    equal(attr2: Attribute): boolean
    /**
     * Initializes `attr'`s klass to `klass,` it's start_index to
     * %PANGO_ATTR_INDEX_FROM_TEXT_BEGINNING and end_index to
     * %PANGO_ATTR_INDEX_TO_TEXT_END such that the attribute applies
     * to the entire text by default.
     * @param klass a `PangoAttrClass`
     */
    init(klass: AttrClass): void
}

/**
 * The `PangoAttribute` structure represents the common portions of all
 * attributes.
 * 
 * Particular types of attributes include this structure as their initial
 * portion. The common portion of the attribute holds the range to which
 * the value in the type-specific part of the attribute applies and should
 * be initialized using [method`Pango`.Attribute.init]. By default, an attribute
 * will have an all-inclusive range of [0,%G_MAXUINT].
 * @record 
 */
export class Attribute {

    // Own properties of Pango-1.0.Pango.Attribute

    static name: string
}

export interface Color {

    // Own fields of Pango-1.0.Pango.Color

    /**
     * value of red component
     * @field 
     */
    red: number
    /**
     * value of green component
     * @field 
     */
    green: number
    /**
     * value of blue component
     * @field 
     */
    blue: number

    // Owm methods of Pango-1.0.Pango.Color

    /**
     * Creates a copy of `src`.
     * 
     * The copy should be freed with [method`Pango`.Color.free].
     * Primarily used by language bindings, not that useful
     * otherwise (since colors can just be copied by assignment
     * in C).
     */
    copy(): Color | null
    /**
     * Frees a color allocated by [method`Pango`.Color.copy].
     */
    free(): void
    /**
     * Fill in the fields of a color from a string specification.
     * 
     * The string can either one of a large set of standard names.
     * (Taken from the CSS Color [specification](https://www.w3.org/TR/css-color-4/#named-colors),
     * or it can be a value in the form `#rgb`, `#rrggbb`,
     * `#rrrgggbbb` or `#rrrrggggbbbb`, where `r`, `g` and `b`
     * are hex digits of the red, green, and blue components
     * of the color, respectively. (White in the four forms is
     * `#fff`, `#ffffff`, `#fffffffff` and `#ffffffffffff`.)
     * @param spec a string specifying the new color
     */
    parse(spec: string): boolean
    /**
     * Fill in the fields of a color from a string specification.
     * 
     * The string can either one of a large set of standard names.
     * (Taken from the CSS Color [specification](https://www.w3.org/TR/css-color-4/#named-colors),
     * or it can be a hexadecimal value in the form `#rgb`,
     * `#rrggbb`, `#rrrgggbbb` or `#rrrrggggbbbb` where `r`, `g`
     * and `b` are hex digits of the red, green, and blue components
     * of the color, respectively. (White in the four forms is
     * `#fff`, `#ffffff`, `#fffffffff` and `#ffffffffffff`.)
     * 
     * Additionally, parse strings of the form `#rgba`, `#rrggbbaa`,
     * `#rrrrggggbbbbaaaa`, if `alpha` is not %NULL, and set `alpha`
     * to the value specified by the hex digits for `a`. If no alpha
     * component is found in `spec,` `alpha` is set to 0xffff (for a
     * solid color).
     * @param spec a string specifying the new color
     */
    parseWithAlpha(spec: string): [ /* returnType */ boolean, /* alpha */ number ]
    /**
     * Returns a textual specification of `color`.
     * 
     * The string is in the hexadecimal form `#rrrrggggbbbb`,
     * where `r`, `g` and `b` are hex digits representing the
     * red, green, and blue components respectively.
     */
    toString(): string
}

/**
 * The `PangoColor` structure is used to
 * represent a color in an uncalibrated RGB color-space.
 * @record 
 */
export class Color {

    // Own properties of Pango-1.0.Pango.Color

    static name: string
}

export interface ContextClass {
}

export abstract class ContextClass {

    // Own properties of Pango-1.0.Pango.ContextClass

    static name: string
}

export interface FontClass {

    // Own fields of Pango-1.0.Pango.FontClass

    parentClass: GObject.ObjectClass
    describe: (font: Font) => FontDescription
    getCoverage: (font: Font, language: Language) => Coverage
    getGlyphExtents: (font: Font | null, glyph: Glyph) => [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    getMetrics: (font: Font | null, language: Language | null) => FontMetrics
    getFontMap: (font: Font | null) => FontMap | null
    describeAbsolute: (font: Font) => FontDescription
    getFeatures: (font: Font, numFeatures: number) => [ /* features */ HarfBuzz.feature_t[], /* numFeatures */ number ]
    createHbFont: (font: Font) => HarfBuzz.font_t
}

export abstract class FontClass {

    // Own properties of Pango-1.0.Pango.FontClass

    static name: string
}

export interface FontDescription {

    // Owm methods of Pango-1.0.Pango.FontDescription

    /**
     * Determines if the style attributes of `new_match` are a closer match
     * for `desc` than those of `old_match` are, or if `old_match` is %NULL,
     * determines if `new_match` is a match at all.
     * 
     * Approximate matching is done for weight and style; other style attributes
     * must match exactly. Style attributes are all attributes other than family
     * and size-related attributes. Approximate matching for style considers
     * %PANGO_STYLE_OBLIQUE and %PANGO_STYLE_ITALIC as matches, but not as good
     * a match as when the styles are equal.
     * 
     * Note that `old_match` must match `desc`.
     * @param oldMatch a `PangoFontDescription`, or %NULL
     * @param newMatch a `PangoFontDescription`
     */
    betterMatch(oldMatch: FontDescription | null, newMatch: FontDescription): boolean
    /**
     * Make a copy of a `PangoFontDescription`.
     */
    copy(): FontDescription | null
    /**
     * Make a copy of a `PangoFontDescription`, but don't duplicate
     * allocated fields.
     * 
     * This is like [method`Pango`.FontDescription.copy], but only a shallow
     * copy is made of the family name and other allocated fields. The result
     * can only be used until `desc` is modified or freed. This is meant
     * to be used when the copy is only needed temporarily.
     */
    copyStatic(): FontDescription | null
    /**
     * Compares two font descriptions for equality.
     * 
     * Two font descriptions are considered equal if the fonts they describe
     * are provably identical. This means that their masks do not have to match,
     * as long as other fields are all the same. (Two font descriptions may
     * result in identical fonts being loaded, but still compare %FALSE.)
     * @param desc2 another `PangoFontDescription`
     */
    equal(desc2: FontDescription): boolean
    /**
     * Frees a font description.
     */
    free(): void
    /**
     * Gets the family name field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_family].
     */
    getFamily(): string | null
    /**
     * Gets the gravity field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_gravity].
     */
    getGravity(): Gravity
    /**
     * Determines which fields in a font description have been set.
     */
    getSetFields(): FontMask
    /**
     * Gets the size field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_size].
     */
    getSize(): number
    /**
     * Determines whether the size of the font is in points (not absolute)
     * or device units (absolute).
     * 
     * See [method`Pango`.FontDescription.set_size]
     * and [method`Pango`.FontDescription.set_absolute_size].
     */
    getSizeIsAbsolute(): boolean
    /**
     * Gets the stretch field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_stretch].
     */
    getStretch(): Stretch
    /**
     * Gets the style field of a `PangoFontDescription`.
     * 
     * See [method`Pango`.FontDescription.set_style].
     */
    getStyle(): Style
    /**
     * Gets the variant field of a `PangoFontDescription`.
     * 
     * See [method`Pango`.FontDescription.set_variant].
     */
    getVariant(): Variant
    /**
     * Gets the variations field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_variations].
     */
    getVariations(): string | null
    /**
     * Gets the weight field of a font description.
     * 
     * See [method`Pango`.FontDescription.set_weight].
     */
    getWeight(): Weight
    /**
     * Computes a hash of a `PangoFontDescription` structure.
     * 
     * This is suitable to be used, for example, as an argument
     * to g_hash_table_new(). The hash value is independent of `desc->`mask.
     */
    hash(): number
    /**
     * Merges the fields that are set in `desc_to_merge` into the fields in
     * `desc`.
     * 
     * If `replace_existing` is %FALSE, only fields in `desc` that
     * are not already set are affected. If %TRUE, then fields that are
     * already set will be replaced as well.
     * 
     * If `desc_to_merge` is %NULL, this function performs nothing.
     * @param descToMerge the `PangoFontDescription` to merge from,   or %NULL
     * @param replaceExisting if %TRUE, replace fields in `desc` with the   corresponding values from `desc_to_merge,` even if they   are already exist.
     */
    merge(descToMerge: FontDescription | null, replaceExisting: boolean): void
    /**
     * Merges the fields that are set in `desc_to_merge` into the fields in
     * `desc,` without copying allocated fields.
     * 
     * This is like [method`Pango`.FontDescription.merge], but only a shallow copy
     * is made of the family name and other allocated fields. `desc` can only
     * be used until `desc_to_merge` is modified or freed. This is meant to
     * be used when the merged font description is only needed temporarily.
     * @param descToMerge the `PangoFontDescription` to merge from
     * @param replaceExisting if %TRUE, replace fields in `desc` with the   corresponding values from `desc_to_merge,` even if they   are already exist.
     */
    mergeStatic(descToMerge: FontDescription, replaceExisting: boolean): void
    /**
     * Sets the size field of a font description, in device units.
     * 
     * This is mutually exclusive with [method`Pango`.FontDescription.set_size]
     * which sets the font size in points.
     * @param size the new size, in Pango units. There are %PANGO_SCALE Pango units   in one device unit. For an output backend where a device unit is a pixel,   a `size` value of 10 * PANGO_SCALE gives a 10 pixel font.
     */
    setAbsoluteSize(size: number): void
    /**
     * Sets the family name field of a font description.
     * 
     * The family
     * name represents a family of related font styles, and will
     * resolve to a particular `PangoFontFamily`. In some uses of
     * `PangoFontDescription`, it is also possible to use a comma
     * separated list of family names for this field.
     * @param family a string representing the family name.
     */
    setFamily(family: string): void
    /**
     * Sets the family name field of a font description, without copying the string.
     * 
     * This is like [method`Pango`.FontDescription.set_family], except that no
     * copy of `family` is made. The caller must make sure that the
     * string passed in stays around until `desc` has been freed or the
     * name is set again. This function can be used if `family` is a static
     * string such as a C string literal, or if `desc` is only needed temporarily.
     * @param family a string representing the family name
     */
    setFamilyStatic(family: string): void
    /**
     * Sets the gravity field of a font description.
     * 
     * The gravity field
     * specifies how the glyphs should be rotated. If `gravity` is
     * %PANGO_GRAVITY_AUTO, this actually unsets the gravity mask on
     * the font description.
     * 
     * This function is seldom useful to the user. Gravity should normally
     * be set on a `PangoContext`.
     * @param gravity the gravity for the font description.
     */
    setGravity(gravity: Gravity): void
    /**
     * Sets the size field of a font description in fractional points.
     * 
     * This is mutually exclusive with
     * [method`Pango`.FontDescription.set_absolute_size].
     * @param size the size of the font in points, scaled by %PANGO_SCALE.   (That is, a `size` value of 10 * PANGO_SCALE is a 10 point font.   The conversion factor between points and device units depends on   system configuration and the output device. For screen display, a   logical DPI of 96 is common, in which case a 10 point font corresponds   to a 10 * (96 / 72) = 13.3 pixel font.   Use [method`Pango`.FontDescription.set_absolute_size] if you need   a particular size in device units.
     */
    setSize(size: number): void
    /**
     * Sets the stretch field of a font description.
     * 
     * The [enum`Pango`.Stretch] field specifies how narrow or
     * wide the font should be.
     * @param stretch the stretch for the font description
     */
    setStretch(stretch: Stretch): void
    /**
     * Sets the style field of a `PangoFontDescription`.
     * 
     * The [enum`Pango`.Style] enumeration describes whether the font is
     * slanted and the manner in which it is slanted; it can be either
     * %PANGO_STYLE_NORMAL, %PANGO_STYLE_ITALIC, or %PANGO_STYLE_OBLIQUE.
     * 
     * Most fonts will either have a italic style or an oblique style,
     * but not both, and font matching in Pango will match italic
     * specifications with oblique fonts and vice-versa if an exact
     * match is not found.
     * @param style the style for the font description
     */
    setStyle(style: Style): void
    /**
     * Sets the variant field of a font description.
     * 
     * The [enum`Pango`.Variant] can either be %PANGO_VARIANT_NORMAL
     * or %PANGO_VARIANT_SMALL_CAPS.
     * @param variant the variant type for the font description.
     */
    setVariant(variant: Variant): void
    /**
     * Sets the variations field of a font description.
     * 
     * OpenType font variations allow to select a font instance by
     * specifying values for a number of axes, such as width or weight.
     * 
     * The format of the variations string is
     * 
     *     AXIS1=VALUE,AXIS2=VALUE...
     * 
     * with each AXIS a 4 character tag that identifies a font axis,
     * and each VALUE a floating point number. Unknown axes are ignored,
     * and values are clamped to their allowed range.
     * 
     * Pango does not currently have a way to find supported axes of
     * a font. Both harfbuzz and freetype have API for this. See
     * for example [hb_ot_var_get_axis_infos](https://harfbuzz.github.io/harfbuzz-hb-ot-var.html#hb-ot-var-get-axis-infos).
     * @param variations a string representing the variations
     */
    setVariations(variations: string | null): void
    /**
     * Sets the variations field of a font description.
     * 
     * This is like [method`Pango`.FontDescription.set_variations], except
     * that no copy of `variations` is made. The caller must make sure that
     * the string passed in stays around until `desc` has been freed
     * or the name is set again. This function can be used if
     * `variations` is a static string such as a C string literal,
     * or if `desc` is only needed temporarily.
     * @param variations a string representing the variations
     */
    setVariationsStatic(variations: string): void
    /**
     * Sets the weight field of a font description.
     * 
     * The weight field
     * specifies how bold or light the font should be. In addition
     * to the values of the [enum`Pango`.Weight] enumeration, other
     * intermediate numeric values are possible.
     * @param weight the weight for the font description.
     */
    setWeight(weight: Weight): void
    /**
     * Creates a filename representation of a font description.
     * 
     * The filename is identical to the result from calling
     * [method`Pango`.FontDescription.to_string], but with underscores
     * instead of characters that are untypical in filenames, and in
     * lower case only.
     */
    toFilename(): string
    /**
     * Creates a string representation of a font description.
     * 
     * See [func`Pango`.FontDescription.from_string] for a description
     * of the format of the string representation. The family list in
     * the string description will only have a terminating comma if
     * the last word of the list is a valid style option.
     */
    toString(): string
    /**
     * Unsets some of the fields in a `PangoFontDescription`.
     * 
     * The unset fields will get back to their default values.
     * @param toUnset bitmask of fields in the `desc` to unset.
     */
    unsetFields(toUnset: FontMask): void
}

/**
 * A `PangoFontDescription` describes a font in an implementation-independent
 * manner.
 * 
 * `PangoFontDescription` structures are used both to list what fonts are
 * available on the system and also for specifying the characteristics of
 * a font to load.
 * @record 
 */
export class FontDescription {

    // Own properties of Pango-1.0.Pango.FontDescription

    static name: string

    // Constructors of Pango-1.0.Pango.FontDescription

    /**
     * Creates a new font description structure with all fields unset.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new font description structure with all fields unset.
     * @constructor 
     */
    static new(): FontDescription
    /**
     * Creates a new font description from a string representation.
     * 
     * The string must have the form
     * 
     *     "\[FAMILY-LIST] \[STYLE-OPTIONS] \[SIZE] \[VARIATIONS]",
     * 
     * where FAMILY-LIST is a comma-separated list of families optionally
     * terminated by a comma, STYLE_OPTIONS is a whitespace-separated list
     * of words where each word describes one of style, variant, weight,
     * stretch, or gravity, and SIZE is a decimal number (size in points)
     * or optionally followed by the unit modifier "px" for absolute size.
     * VARIATIONS is a comma-separated list of font variation
     * specifications of the form "\`axis=`value" (the = sign is optional).
     * 
     * The following words are understood as styles:
     * "Normal", "Roman", "Oblique", "Italic".
     * 
     * The following words are understood as variants:
     * "Small-Caps", "All-Small-Caps", "Petite-Caps", "All-Petite-Caps",
     * "Unicase", "Title-Caps".
     * 
     * The following words are understood as weights:
     * "Thin", "Ultra-Light", "Extra-Light", "Light", "Semi-Light",
     * "Demi-Light", "Book", "Regular", "Medium", "Semi-Bold", "Demi-Bold",
     * "Bold", "Ultra-Bold", "Extra-Bold", "Heavy", "Black", "Ultra-Black",
     * "Extra-Black".
     * 
     * The following words are understood as stretch values:
     * "Ultra-Condensed", "Extra-Condensed", "Condensed", "Semi-Condensed",
     * "Semi-Expanded", "Expanded", "Extra-Expanded", "Ultra-Expanded".
     * 
     * The following words are understood as gravity values:
     * "Not-Rotated", "South", "Upside-Down", "North", "Rotated-Left",
     * "East", "Rotated-Right", "West".
     * 
     * Any one of the options may be absent. If FAMILY-LIST is absent, then
     * the family_name field of the resulting font description will be
     * initialized to %NULL. If STYLE-OPTIONS is missing, then all style
     * options will be set to the default values. If SIZE is missing, the
     * size in the resulting font description will be set to 0.
     * 
     * A typical example:
     * 
     *     "Cantarell Italic Light 15 \`wght=`200"
     * @param str string representation of a font description.
     */
    static fromString(str: string): FontDescription
}

export interface FontFaceClass {

    // Own fields of Pango-1.0.Pango.FontFaceClass

    parentClass: GObject.ObjectClass
    getFaceName: (face: FontFace) => string
    describe: (face: FontFace) => FontDescription
    listSizes: (face: FontFace) => /* sizes */ number[] | null
    isSynthesized: (face: FontFace) => boolean
    getFamily: (face: FontFace) => FontFamily
}

export abstract class FontFaceClass {

    // Own properties of Pango-1.0.Pango.FontFaceClass

    static name: string
}

export interface FontFamilyClass {

    // Own fields of Pango-1.0.Pango.FontFamilyClass

    parentClass: GObject.ObjectClass
    listFaces: (family: FontFamily) => /* faces */ FontFace[]
    getName: (family: FontFamily) => string
    isMonospace: (family: FontFamily) => boolean
    isVariable: (family: FontFamily) => boolean
    getFace: (family: FontFamily, name: string | null) => FontFace | null
}

export abstract class FontFamilyClass {

    // Own properties of Pango-1.0.Pango.FontFamilyClass

    static name: string
}

export interface FontMapClass {

    // Own fields of Pango-1.0.Pango.FontMapClass

    /**
     * parent `GObjectClass`
     * @field 
     */
    parentClass: GObject.ObjectClass
    loadFont: (fontmap: FontMap, context: Context, desc: FontDescription) => Font | null
    listFamilies: (fontmap: FontMap) => /* families */ FontFamily[]
    loadFontset: (fontmap: FontMap, context: Context, desc: FontDescription, language: Language) => Fontset | null
    /**
     * the type of rendering-system-dependent engines that
     * can handle fonts of this fonts loaded with this fontmap.
     * @field 
     */
    shapeEngineType: string
    getSerial: (fontmap: FontMap) => number
    changed: (fontmap: FontMap) => void
    getFamily: (fontmap: FontMap, name: string) => FontFamily
}

/**
 * The `PangoFontMapClass` structure holds the virtual functions for
 * a particular `PangoFontMap` implementation.
 * @record 
 */
export abstract class FontMapClass {

    // Own properties of Pango-1.0.Pango.FontMapClass

    static name: string
}

export interface FontMetrics {

    // Owm methods of Pango-1.0.Pango.FontMetrics

    /**
     * Gets the approximate character width for a font metrics structure.
     * 
     * This is merely a representative value useful, for example, for
     * determining the initial size for a window. Actual characters in
     * text will be wider and narrower than this.
     */
    getApproximateCharWidth(): number
    /**
     * Gets the approximate digit width for a font metrics structure.
     * 
     * This is merely a representative value useful, for example, for
     * determining the initial size for a window. Actual digits in
     * text can be wider or narrower than this, though this value
     * is generally somewhat more accurate than the result of
     * pango_font_metrics_get_approximate_char_width() for digits.
     */
    getApproximateDigitWidth(): number
    /**
     * Gets the ascent from a font metrics structure.
     * 
     * The ascent is the distance from the baseline to the logical top
     * of a line of text. (The logical top may be above or below the top
     * of the actual drawn ink. It is necessary to lay out the text to
     * figure where the ink will be.)
     */
    getAscent(): number
    /**
     * Gets the descent from a font metrics structure.
     * 
     * The descent is the distance from the baseline to the logical bottom
     * of a line of text. (The logical bottom may be above or below the
     * bottom of the actual drawn ink. It is necessary to lay out the text
     * to figure where the ink will be.)
     */
    getDescent(): number
    /**
     * Gets the line height from a font metrics structure.
     * 
     * The line height is the recommended distance between successive
     * baselines in wrapped text using this font.
     * 
     * If the line height is not available, 0 is returned.
     */
    getHeight(): number
    /**
     * Gets the suggested position to draw the strikethrough.
     * 
     * The value returned is the distance *above* the
     * baseline of the top of the strikethrough.
     */
    getStrikethroughPosition(): number
    /**
     * Gets the suggested thickness to draw for the strikethrough.
     */
    getStrikethroughThickness(): number
    /**
     * Gets the suggested position to draw the underline.
     * 
     * The value returned is the distance *above* the baseline of the top
     * of the underline. Since most fonts have underline positions beneath
     * the baseline, this value is typically negative.
     */
    getUnderlinePosition(): number
    /**
     * Gets the suggested thickness to draw for the underline.
     */
    getUnderlineThickness(): number
    /**
     * Increase the reference count of a font metrics structure by one.
     */
    ref(): FontMetrics | null
    /**
     * Decrease the reference count of a font metrics structure by one.
     * 
     * If the result is zero, frees the structure and any associated memory.
     */
    unref(): void
}

/**
 * A `PangoFontMetrics` structure holds the overall metric information
 * for a font.
 * 
 * The information in a `PangoFontMetrics` structure may be restricted
 * to a script. The fields of this structure are private to implementations
 * of a font backend. See the documentation of the corresponding getters
 * for documentation of their meaning.
 * 
 * For an overview of the most important metrics, see:
 * 
 * <picture>
 *   <source srcset="fontmetrics-dark.png" media="(prefers-color-scheme: dark)">
 *   <img alt="Font metrics" src="fontmetrics-light.png">
 * </picture>
 * @record 
 */
export class FontMetrics {

    // Own properties of Pango-1.0.Pango.FontMetrics

    static name: string
}

export interface FontsetClass {

    // Own fields of Pango-1.0.Pango.FontsetClass

    /**
     * parent `GObjectClass`
     * @field 
     */
    parentClass: GObject.ObjectClass
    getFont: (fontset: Fontset, wc: number) => Font
    getMetrics: (fontset: Fontset) => FontMetrics
    getLanguage: (fontset: Fontset) => Language
    foreach: (fontset: Fontset, func: FontsetForeachFunc) => void
}

/**
 * The `PangoFontsetClass` structure holds the virtual functions for
 * a particular `PangoFontset` implementation.
 * @record 
 */
export abstract class FontsetClass {

    // Own properties of Pango-1.0.Pango.FontsetClass

    static name: string
}

export interface FontsetSimpleClass {
}

export abstract class FontsetSimpleClass {

    // Own properties of Pango-1.0.Pango.FontsetSimpleClass

    static name: string
}

export interface GlyphGeometry {

    // Own fields of Pango-1.0.Pango.GlyphGeometry

    /**
     * the logical width to use for the the character.
     * @field 
     */
    width: GlyphUnit
    /**
     * horizontal offset from nominal character position.
     * @field 
     */
    xOffset: GlyphUnit
    /**
     * vertical offset from nominal character position.
     * @field 
     */
    yOffset: GlyphUnit
}

/**
 * The `PangoGlyphGeometry` structure contains width and positioning
 * information for a single glyph.
 * 
 * Note that `width` is not guaranteed to be the same as the glyph
 * extents. Kerning and other positioning applied during shaping will
 * affect both the `width` and the `x_offset` for the glyphs in the
 * glyph string that results from shaping.
 * 
 * The information in this struct is intended for rendering the glyphs,
 * as follows:
 * 
 * 1. Assume the current point is (x, y)
 * 2. Render the current glyph at (x + x_offset, y + y_offset),
 * 3. Advance the current point to (x + width, y)
 * 4. Render the next glyph
 * @record 
 */
export class GlyphGeometry {

    // Own properties of Pango-1.0.Pango.GlyphGeometry

    static name: string
}

export interface GlyphInfo {

    // Own fields of Pango-1.0.Pango.GlyphInfo

    /**
     * the glyph itself.
     * @field 
     */
    glyph: Glyph
    /**
     * the positional information about the glyph.
     * @field 
     */
    geometry: GlyphGeometry
    /**
     * the visual attributes of the glyph.
     * @field 
     */
    attr: GlyphVisAttr
}

/**
 * A `PangoGlyphInfo` structure represents a single glyph with
 * positioning information and visual attributes.
 * @record 
 */
export class GlyphInfo {

    // Own properties of Pango-1.0.Pango.GlyphInfo

    static name: string
}

export interface GlyphItem {

    // Own fields of Pango-1.0.Pango.GlyphItem

    /**
     * corresponding `PangoItem`
     * @field 
     */
    item: Item
    /**
     * corresponding `PangoGlyphString`
     * @field 
     */
    glyphs: GlyphString
    /**
     * shift of the baseline, relative to the baseline
     *   of the containing line. Positive values shift upwards
     * @field 
     */
    yOffset: number
    /**
     * horizontal displacement to apply before the
     *   glyph item. Positive values shift right
     * @field 
     */
    startXOffset: number
    /**
     * horizontal displacement to apply after th
     *   glyph item. Positive values shift right
     * @field 
     */
    endXOffset: number

    // Owm methods of Pango-1.0.Pango.GlyphItem

    /**
     * Splits a shaped item (`PangoGlyphItem`) into multiple items based
     * on an attribute list.
     * 
     * The idea is that if you have attributes that don't affect shaping,
     * such as color or underline, to avoid affecting shaping, you filter
     * them out ([method`Pango`.AttrList.filter]), apply the shaping process
     * and then reapply them to the result using this function.
     * 
     * All attributes that start or end inside a cluster are applied
     * to that cluster; for instance, if half of a cluster is underlined
     * and the other-half strikethrough, then the cluster will end
     * up with both underline and strikethrough attributes. In these
     * cases, it may happen that `item->`extra_attrs for some of the
     * result items can have multiple attributes of the same type.
     * 
     * This function takes ownership of `glyph_item;` it will be reused
     * as one of the elements in the list.
     * @param text text that `list` applies to
     * @param list a `PangoAttrList`
     */
    applyAttrs(text: string, list: AttrList): GlyphItem[]
    /**
     * Make a deep copy of an existing `PangoGlyphItem` structure.
     */
    copy(): GlyphItem | null
    /**
     * Frees a `PangoGlyphItem` and resources to which it points.
     */
    free(): void
    /**
     * Given a `PangoGlyphItem` and the corresponding text, determine the
     * width corresponding to each character.
     * 
     * When multiple characters compose a single cluster, the width of the
     * entire cluster is divided equally among the characters.
     * 
     * See also [method`Pango`.GlyphString.get_logical_widths].
     * @param text text that `glyph_item` corresponds to   (glyph_item->item->offset is an offset from the   start of `text)`
     * @param logicalWidths an array whose length is the number of   characters in glyph_item (equal to glyph_item->item->num_chars)   to be filled in with the resulting character widths.
     */
    getLogicalWidths(text: string, logicalWidths: number[]): void
    /**
     * Adds spacing between the graphemes of `glyph_item` to
     * give the effect of typographic letter spacing.
     * @param text text that `glyph_item` corresponds to   (glyph_item->item->offset is an offset from the   start of `text)`
     * @param logAttrs logical attributes for the item   (the first logical attribute refers to the position   before the first character in the item)
     * @param letterSpacing amount of letter spacing to add   in Pango units. May be negative, though too large   negative values will give ugly results.
     */
    letterSpace(text: string, logAttrs: LogAttr[], letterSpacing: number): void
    /**
     * Modifies `orig` to cover only the text after `split_index,` and
     * returns a new item that covers the text before `split_index` that
     * used to be in `orig`.
     * 
     * You can think of `split_index` as the length of the returned item.
     * `split_index` may not be 0, and it may not be greater than or equal
     * to the length of `orig` (that is, there must be at least one byte
     * assigned to each item, you can't create a zero-length item).
     * 
     * This function is similar in function to pango_item_split() (and uses
     * it internally.)
     * @param text text to which positions in `orig` apply
     * @param splitIndex byte index of position to split item, relative to the   start of the item
     */
    split(text: string, splitIndex: number): GlyphItem
}

/**
 * A `PangoGlyphItem` is a pair of a `PangoItem` and the glyphs
 * resulting from shaping the items text.
 * 
 * As an example of the usage of `PangoGlyphItem`, the results
 * of shaping text with `PangoLayout` is a list of `PangoLayoutLine`,
 * each of which contains a list of `PangoGlyphItem`.
 * @record 
 */
export class GlyphItem {

    // Own properties of Pango-1.0.Pango.GlyphItem

    static name: string
}

export interface GlyphItemIter {

    // Own fields of Pango-1.0.Pango.GlyphItemIter

    glyphItem: GlyphItem
    text: string
    startGlyph: number
    startIndex: number
    startChar: number
    endGlyph: number
    endIndex: number
    endChar: number

    // Owm methods of Pango-1.0.Pango.GlyphItemIter

    /**
     * Make a shallow copy of an existing `PangoGlyphItemIter` structure.
     */
    copy(): GlyphItemIter | null
    /**
     * Frees a `PangoGlyphItem`Iter.
     */
    free(): void
    /**
     * Initializes a `PangoGlyphItemIter` structure to point to the
     * last cluster in a glyph item.
     * 
     * See `PangoGlyphItemIter` for details of cluster orders.
     * @param glyphItem the glyph item to iterate over
     * @param text text corresponding to the glyph item
     */
    initEnd(glyphItem: GlyphItem, text: string): boolean
    /**
     * Initializes a `PangoGlyphItemIter` structure to point to the
     * first cluster in a glyph item.
     * 
     * See `PangoGlyphItemIter` for details of cluster orders.
     * @param glyphItem the glyph item to iterate over
     * @param text text corresponding to the glyph item
     */
    initStart(glyphItem: GlyphItem, text: string): boolean
    /**
     * Advances the iterator to the next cluster in the glyph item.
     * 
     * See `PangoGlyphItemIter` for details of cluster orders.
     */
    nextCluster(): boolean
    /**
     * Moves the iterator to the preceding cluster in the glyph item.
     * See `PangoGlyphItemIter` for details of cluster orders.
     */
    prevCluster(): boolean
}

/**
 * A `PangoGlyphItemIter` is an iterator over the clusters in a
 * `PangoGlyphItem`.
 * 
 * The *forward direction* of the iterator is the logical direction of text.
 * That is, with increasing `start_index` and `start_char` values. If `glyph_item`
 * is right-to-left (that is, if `glyph_item->item->analysis.level` is odd),
 * then `start_glyph` decreases as the iterator moves forward.  Moreover,
 * in right-to-left cases, `start_glyph` is greater than `end_glyph`.
 * 
 * An iterator should be initialized using either
 * pango_glyph_item_iter_init_start() or
 * pango_glyph_item_iter_init_end(), for forward and backward iteration
 * respectively, and walked over using any desired mixture of
 * pango_glyph_item_iter_next_cluster() and
 * pango_glyph_item_iter_prev_cluster().
 * 
 * A common idiom for doing a forward iteration over the clusters is:
 * 
 * ```
 * PangoGlyphItemIter cluster_iter;
 * gboolean have_cluster;
 * 
 * for (have_cluster = pango_glyph_item_iter_init_start (&cluster_iter,
 *                                                       glyph_item, text);
 *      have_cluster;
 *      have_cluster = pango_glyph_item_iter_next_cluster (&cluster_iter))
 * {
 *   ...
 * }
 * ```
 * 
 * Note that `text` is the start of the text for layout, which is then
 * indexed by `glyph_item->item->offset` to get to the text of `glyph_item`.
 * The `start_index` and `end_index` values can directly index into `text`. The
 * `start_glyph,` `end_glyph,` `start_char,` and `end_char` values however are
 * zero-based for the `glyph_item`.  For each cluster, the item pointed at by
 * the start variables is included in the cluster while the one pointed at by
 * end variables is not.
 * 
 * None of the members of a `PangoGlyphItemIter` should be modified manually.
 * @record 
 */
export class GlyphItemIter {

    // Own properties of Pango-1.0.Pango.GlyphItemIter

    static name: string
}

export interface GlyphString {

    // Own fields of Pango-1.0.Pango.GlyphString

    /**
     * number of glyphs in this glyph string
     * @field 
     */
    numGlyphs: number
    /**
     * array of glyph information
     * @field 
     */
    glyphs: GlyphInfo[]
    /**
     * logical cluster info, indexed by the byte index
     *   within the text corresponding to the glyph string
     * @field 
     */
    logClusters: number

    // Owm methods of Pango-1.0.Pango.GlyphString

    /**
     * Copy a glyph string and associated storage.
     */
    copy(): GlyphString | null
    /**
     * Compute the logical and ink extents of a glyph string.
     * 
     * See the documentation for [method`Pango`.Font.get_glyph_extents] for details
     * about the interpretation of the rectangles.
     * 
     * Examples of logical (red) and ink (green) rects:
     * 
     * ![](rects1.png) ![](rects2.png)
     * @param font a `PangoFont`
     */
    extents(font: Font): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Computes the extents of a sub-portion of a glyph string.
     * 
     * The extents are relative to the start of the glyph string range
     * (the origin of their coordinate system is at the start of the range,
     * not at the start of the entire glyph string).
     * @param start start index
     * @param end end index (the range is the set of bytes with   indices such that start <= index < end)
     * @param font a `PangoFont`
     */
    extentsRange(start: number, end: number, font: Font): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Free a glyph string and associated storage.
     */
    free(): void
    /**
     * Given a `PangoGlyphString` and corresponding text, determine the width
     * corresponding to each character.
     * 
     * When multiple characters compose a single cluster, the width of the
     * entire cluster is divided equally among the characters.
     * 
     * See also [method`Pango`.GlyphItem.get_logical_widths].
     * @param text the text corresponding to the glyphs
     * @param length the length of `text,` in bytes
     * @param embeddingLevel the embedding level of the string
     * @param logicalWidths an array whose length is the number of   characters in text (equal to `g_utf8_strlen (text, length)` unless   text has `NUL` bytes) to be filled in with the resulting character widths.
     */
    getLogicalWidths(text: string, length: number, embeddingLevel: number, logicalWidths: number[]): void
    /**
     * Computes the logical width of the glyph string.
     * 
     * This can also be computed using [method`Pango`.GlyphString.extents].
     * However, since this only computes the width, it's much faster. This
     * is in fact only a convenience function that computes the sum of
     * `geometry`.width for each glyph in the `glyphs`.
     */
    getWidth(): number
    /**
     * Converts from character position to x position.
     * 
     * The X position is measured from the left edge of the run.
     * Character positions are obtained using font metrics for ligatures
     * where available, and computed by dividing up each cluster
     * into equal portions, otherwise.
     * 
     * <picture>
     *   <source srcset="glyphstring-positions-dark.png" media="(prefers-color-scheme: dark)">
     *   <img alt="Glyph positions" src="glyphstring-positions-light.png">
     * </picture>
     * @param text the text for the run
     * @param length the number of bytes (not characters) in `text`.
     * @param analysis the analysis information return from [func`itemize]`
     * @param index the byte index within `text`
     * @param trailing whether we should compute the result for the beginning (%FALSE)   or end (%TRUE) of the character.
     */
    indexToX(text: string, length: number, analysis: Analysis, index: number, trailing: boolean): /* xPos */ number
    /**
     * Converts from character position to x position.
     * 
     * This variant of [method`Pango`.GlyphString.index_to_x] additionally
     * accepts a `PangoLogAttr` array. The grapheme boundary information
     * in it can be used to disambiguate positioning inside some complex
     * clusters.
     * @param text the text for the run
     * @param length the number of bytes (not characters) in `text`.
     * @param analysis the analysis information return from [func`itemize]`
     * @param attrs `PangoLogAttr` array for `text`
     * @param index the byte index within `text`
     * @param trailing whether we should compute the result for the beginning (%FALSE)   or end (%TRUE) of the character.
     */
    indexToXFull(text: string, length: number, analysis: Analysis, attrs: LogAttr | null, index: number, trailing: boolean): /* xPos */ number
    /**
     * Resize a glyph string to the given length.
     * @param newLen the new length of the string
     */
    setSize(newLen: number): void
    /**
     * Convert from x offset to character position.
     * 
     * Character positions are computed by dividing up each cluster into
     * equal portions. In scripts where positioning within a cluster is
     * not allowed (such as Thai), the returned value may not be a valid
     * cursor position; the caller must combine the result with the logical
     * attributes for the text to compute the valid cursor position.
     * @param text the text for the run
     * @param length the number of bytes (not characters) in text.
     * @param analysis the analysis information return from [func`itemize]`
     * @param xPos the x offset (in Pango units)
     */
    xToIndex(text: string, length: number, analysis: Analysis, xPos: number): [ /* index */ number, /* trailing */ number ]
}

/**
 * A `PangoGlyphString` is used to store strings of glyphs with geometry
 * and visual attribute information.
 * 
 * The storage for the glyph information is owned by the structure
 * which simplifies memory management.
 * @record 
 */
export class GlyphString {

    // Own properties of Pango-1.0.Pango.GlyphString

    static name: string

    // Constructors of Pango-1.0.Pango.GlyphString

    /**
     * Create a new `PangoGlyphString`.
     * @constructor 
     */
    constructor() 
    /**
     * Create a new `PangoGlyphString`.
     * @constructor 
     */
    static new(): GlyphString
}

export interface GlyphVisAttr {

    // Own fields of Pango-1.0.Pango.GlyphVisAttr

    /**
     * set for the first logical glyph in each cluster.
     * @field 
     */
    isClusterStart: number
    /**
     * set if the the font will render this glyph with color. Since 1.50
     * @field 
     */
    isColor: number
}

/**
 * A `PangoGlyphVisAttr` structure communicates information between
 * the shaping and rendering phases.
 * 
 * Currently, it contains cluster start and color information.
 * More attributes may be added in the future.
 * 
 * Clusters are stored in visual order, within the cluster, glyphs
 * are always ordered in logical order, since visual order is meaningless;
 * that is, in Arabic text, accent glyphs follow the glyphs for the
 * base character.
 * @record 
 */
export class GlyphVisAttr {

    // Own properties of Pango-1.0.Pango.GlyphVisAttr

    static name: string
}

export interface Item {

    // Own fields of Pango-1.0.Pango.Item

    /**
     * byte offset of the start of this item in text.
     * @field 
     */
    offset: number
    /**
     * length of this item in bytes.
     * @field 
     */
    length: number
    /**
     * number of Unicode characters in the item.
     * @field 
     */
    numChars: number
    /**
     * analysis results for the item.
     * @field 
     */
    analysis: Analysis

    // Owm methods of Pango-1.0.Pango.Item

    /**
     * Add attributes to a `PangoItem`.
     * 
     * The idea is that you have attributes that don't affect itemization,
     * such as font features, so you filter them out using
     * [method`Pango`.AttrList.filter], itemize your text, then reapply the
     * attributes to the resulting items using this function.
     * 
     * The `iter` should be positioned before the range of the item,
     * and will be advanced past it. This function is meant to be called
     * in a loop over the items resulting from itemization, while passing
     * the iter to each call.
     * @param iter a `PangoAttrIterator`
     */
    applyAttrs(iter: AttrIterator): void
    /**
     * Copy an existing `PangoItem` structure.
     */
    copy(): Item | null
    /**
     * Free a `PangoItem` and all associated memory.
     */
    free(): void
    /**
     * Modifies `orig` to cover only the text after `split_index,` and
     * returns a new item that covers the text before `split_index` that
     * used to be in `orig`.
     * 
     * You can think of `split_index` as the length of the returned item.
     * `split_index` may not be 0, and it may not be greater than or equal
     * to the length of `orig` (that is, there must be at least one byte
     * assigned to each item, you can't create a zero-length item).
     * `split_offset` is the length of the first item in chars, and must be
     * provided because the text used to generate the item isn't available,
     * so `pango_item_split()` can't count the char length of the split items
     * itself.
     * @param splitIndex byte index of position to split item, relative to the   start of the item
     * @param splitOffset number of chars between start of `orig` and `split_index`
     */
    split(splitIndex: number, splitOffset: number): Item
}

/**
 * The `PangoItem` structure stores information about a segment of text.
 * 
 * You typically obtain `PangoItems` by itemizing a piece of text
 * with [func`itemize]`.
 * @record 
 */
export class Item {

    // Own properties of Pango-1.0.Pango.Item

    static name: string

    // Constructors of Pango-1.0.Pango.Item

    /**
     * Creates a new `PangoItem` structure initialized to default values.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new `PangoItem` structure initialized to default values.
     * @constructor 
     */
    static new(): Item
}

export interface Language {

    // Owm methods of Pango-1.0.Pango.Language

    /**
     * Get a string that is representative of the characters needed to
     * render a particular language.
     * 
     * The sample text may be a pangram, but is not necessarily. It is chosen
     * to be demonstrative of normal text in the language, as well as exposing
     * font feature requirements unique to the language. It is suitable for use
     * as sample text in a font selection dialog.
     * 
     * If `language` is %NULL, the default language as found by
     * [func`Pango`.Language.get_default] is used.
     * 
     * If Pango does not have a sample string for `language,` the classic
     * "The quick brown fox..." is returned.  This can be detected by
     * comparing the returned pointer value to that returned for (non-existent)
     * language code "xx".  That is, compare to:
     * 
     * ```
     * pango_language_get_sample_string (pango_language_from_string ("xx"))
     * ```
     */
    getSampleString(): string
    /**
     * Determines the scripts used to to write `language`.
     * 
     * If nothing is known about the language tag `language,`
     * or if `language` is %NULL, then %NULL is returned.
     * The list of scripts returned starts with the script that the
     * language uses most and continues to the one it uses least.
     * 
     * The value `num_script` points at will be set to the number
     * of scripts in the returned array (or zero if %NULL is returned).
     * 
     * Most languages use only one script for writing, but there are
     * some that use two (Latin and Cyrillic for example), and a few
     * use three (Japanese for example). Applications should not make
     * any assumptions on the maximum number of scripts returned
     * though, except that it is positive if the return value is not
     * %NULL, and it is a small number.
     * 
     * The [method`Pango`.Language.includes_script] function uses this
     * function internally.
     * 
     * Note: while the return value is declared as `PangoScript`, the
     * returned values are from the `GUnicodeScript` enumeration, which
     * may have more values. Callers need to handle unknown values.
     */
    getScripts(): Script[] | null
    /**
     * Determines if `script` is one of the scripts used to
     * write `language`.
     * 
     * The returned value is conservative; if nothing is known about
     * the language tag `language,` %TRUE will be returned, since, as
     * far as Pango knows, `script` might be used to write `language`.
     * 
     * This routine is used in Pango's itemization process when
     * determining if a supplied language tag is relevant to
     * a particular section of text. It probably is not useful
     * for applications in most circumstances.
     * 
     * This function uses [method`Pango`.Language.get_scripts] internally.
     * @param script a `PangoScript`
     */
    includesScript(script: Script): boolean
    /**
     * Checks if a language tag matches one of the elements in a list of
     * language ranges.
     * 
     * A language tag is considered to match a range in the list if the
     * range is '*', the range is exactly the tag, or the range is a prefix
     * of the tag, and the character after it in the tag is '-'.
     * @param rangeList a list of language ranges, separated by ';', ':',   ',', or space characters.   Each element must either be '*', or a RFC 3066 language range   canonicalized as by [func`Pango`.Language.from_string]
     */
    matches(rangeList: string): boolean
    /**
     * Gets the RFC-3066 format string representing the given language tag.
     * 
     * Returns (transfer none): a string representing the language tag
     */
    toString(): string
}

/**
 * The `PangoLanguage` structure is used to
 * represent a language.
 * 
 * `PangoLanguage` pointers can be efficiently
 * copied and compared with each other.
 * @record 
 */
export class Language {

    // Own properties of Pango-1.0.Pango.Language

    static name: string

    // Constructors of Pango-1.0.Pango.Language

    /**
     * Convert a language tag to a `PangoLanguage`.
     * 
     * The language tag must be in a RFC-3066 format. `PangoLanguage` pointers
     * can be efficiently copied (copy the pointer) and compared with other
     * language tags (compare the pointer.)
     * 
     * This function first canonicalizes the string by converting it to
     * lowercase, mapping '_' to '-', and stripping all characters other
     * than letters and '-'.
     * 
     * Use [func`Pango`.Language.get_default] if you want to get the
     * `PangoLanguage` for the current locale of the process.
     * @param language a string representing a language tag
     */
    static fromString(language: string | null): Language | null
    /**
     * Returns the `PangoLanguage` for the current locale of the process.
     * 
     * On Unix systems, this is the return value is derived from
     * `setlocale (LC_CTYPE, NULL)`, and the user can
     * affect this through the environment variables LC_ALL, LC_CTYPE or
     * LANG (checked in that order). The locale string typically is in
     * the form lang_COUNTRY, where lang is an ISO-639 language code, and
     * COUNTRY is an ISO-3166 country code. For instance, sv_FI for
     * Swedish as written in Finland or pt_BR for Portuguese as written in
     * Brazil.
     * 
     * On Windows, the C library does not use any such environment
     * variables, and setting them won't affect the behavior of functions
     * like ctime(). The user sets the locale through the Regional Options
     * in the Control Panel. The C library (in the setlocale() function)
     * does not use country and language codes, but country and language
     * names spelled out in English.
     * However, this function does check the above environment
     * variables, and does return a Unix-style locale string based on
     * either said environment variables or the thread's current locale.
     * 
     * Your application should call `setlocale(LC_ALL, "")` for the user
     * settings to take effect. GTK does this in its initialization
     * functions automatically (by calling gtk_set_locale()).
     * See the setlocale() manpage for more details.
     * 
     * Note that the default language can change over the life of an application.
     * 
     * Also note that this function will not do the right thing if you
     * use per-thread locales with uselocale(). In that case, you should
     * just call pango_language_from_string() yourself.
     */
    static getDefault(): Language
    /**
     * Returns the list of languages that the user prefers.
     * 
     * The list is specified by the `PANGO_LANGUAGE` or `LANGUAGE`
     * environment variables, in order of preference. Note that this
     * list does not necessarily include the language returned by
     * [func`Pango`.Language.get_default].
     * 
     * When choosing language-specific resources, such as the sample
     * text returned by [method`Pango`.Language.get_sample_string],
     * you should first try the default language, followed by the
     * languages returned by this function.
     */
    static getPreferred(): Language | null
}

export interface LayoutClass {
}

export abstract class LayoutClass {

    // Own properties of Pango-1.0.Pango.LayoutClass

    static name: string
}

export interface LayoutIter {

    // Owm methods of Pango-1.0.Pango.LayoutIter

    /**
     * Determines whether `iter` is on the last line of the layout.
     */
    atLastLine(): boolean
    /**
     * Copies a `PangoLayoutIter`.
     */
    copy(): LayoutIter | null
    /**
     * Frees an iterator that's no longer in use.
     */
    free(): void
    /**
     * Gets the Y position of the current line's baseline, in layout
     * coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     */
    getBaseline(): number
    /**
     * Gets the extents of the current character, in layout coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     * 
     * Only logical extents can sensibly be obtained for characters;
     * ink extents make sense only down to the level of clusters.
     */
    getCharExtents(): /* logicalRect */ Rectangle
    /**
     * Gets the extents of the current cluster, in layout coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     */
    getClusterExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Gets the current byte index.
     * 
     * Note that iterating forward by char moves in visual order,
     * not logical order, so indexes may not be sequential. Also,
     * the index may be equal to the length of the text in the
     * layout, if on the %NULL run (see [method`Pango`.LayoutIter.get_run]).
     */
    getIndex(): number
    /**
     * Gets the layout associated with a `PangoLayoutIter`.
     */
    getLayout(): Layout
    /**
     * Obtains the extents of the `PangoLayout` being iterated over.
     */
    getLayoutExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Gets the current line.
     * 
     * Use the faster [method`Pango`.LayoutIter.get_line_readonly] if
     * you do not plan to modify the contents of the line (glyphs,
     * glyph widths, etc.).
     */
    getLine(): LayoutLine
    /**
     * Obtains the extents of the current line.
     * 
     * Extents are in layout coordinates (origin is the top-left corner
     * of the entire `PangoLayout`). Thus the extents returned by this
     * function will be the same width/height but not at the same x/y
     * as the extents returned from [method`Pango`.LayoutLine.get_extents].
     */
    getLineExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Gets the current line for read-only access.
     * 
     * This is a faster alternative to [method`Pango`.LayoutIter.get_line],
     * but the user is not expected to modify the contents of the line
     * (glyphs, glyph widths, etc.).
     */
    getLineReadonly(): LayoutLine
    /**
     * Divides the vertical space in the `PangoLayout` being iterated over
     * between the lines in the layout, and returns the space belonging to
     * the current line.
     * 
     * A line's range includes the line's logical extents. plus half of the
     * spacing above and below the line, if [method`Pango`.Layout.set_spacing]
     * has been called to set layout spacing. The Y positions are in layout
     * coordinates (origin at top left of the entire layout).
     * 
     * Note: Since 1.44, Pango uses line heights for placing lines, and there
     * may be gaps between the ranges returned by this function.
     */
    getLineYrange(): [ /* y0 */ number, /* y1 */ number ]
    /**
     * Gets the current run.
     * 
     * When iterating by run, at the end of each line, there's a position
     * with a %NULL run, so this function can return %NULL. The %NULL run
     * at the end of each line ensures that all lines have at least one run,
     * even lines consisting of only a newline.
     * 
     * Use the faster [method`Pango`.LayoutIter.get_run_readonly] if you do not
     * plan to modify the contents of the run (glyphs, glyph widths, etc.).
     */
    getRun(): LayoutRun | null
    /**
     * Gets the Y position of the current run's baseline, in layout
     * coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     * 
     * The run baseline can be different from the line baseline, for
     * example due to superscript or subscript positioning.
     */
    getRunBaseline(): number
    /**
     * Gets the extents of the current run in layout coordinates.
     * 
     * Layout coordinates have the origin at the top left of the entire layout.
     */
    getRunExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Gets the current run for read-only access.
     * 
     * When iterating by run, at the end of each line, there's a position
     * with a %NULL run, so this function can return %NULL. The %NULL run
     * at the end of each line ensures that all lines have at least one run,
     * even lines consisting of only a newline.
     * 
     * This is a faster alternative to [method`Pango`.LayoutIter.get_run],
     * but the user is not expected to modify the contents of the run (glyphs,
     * glyph widths, etc.).
     */
    getRunReadonly(): LayoutRun | null
    /**
     * Moves `iter` forward to the next character in visual order.
     * 
     * If `iter` was already at the end of the layout, returns %FALSE.
     */
    nextChar(): boolean
    /**
     * Moves `iter` forward to the next cluster in visual order.
     * 
     * If `iter` was already at the end of the layout, returns %FALSE.
     */
    nextCluster(): boolean
    /**
     * Moves `iter` forward to the start of the next line.
     * 
     * If `iter` is already on the last line, returns %FALSE.
     */
    nextLine(): boolean
    /**
     * Moves `iter` forward to the next run in visual order.
     * 
     * If `iter` was already at the end of the layout, returns %FALSE.
     */
    nextRun(): boolean
}

/**
 * A `PangoLayoutIter` can be used to iterate over the visual
 * extents of a `PangoLayout`.
 * 
 * To obtain a `PangoLayoutIter`, use [method`Pango`.Layout.get_iter].
 * 
 * The `PangoLayoutIter` structure is opaque, and has no user-visible fields.
 * @record 
 */
export class LayoutIter {

    // Own properties of Pango-1.0.Pango.LayoutIter

    static name: string
}

export interface LayoutLine {

    // Own fields of Pango-1.0.Pango.LayoutLine

    /**
     * the layout this line belongs to, might be %NULL
     * @field 
     */
    layout: Layout
    /**
     * start of line as byte index into layout->text
     * @field 
     */
    startIndex: number
    /**
     * length of line in bytes
     * @field 
     */
    length: number
    /**
     * list of runs in the
     *   line, from left to right
     * @field 
     */
    runs: LayoutRun[]
    /**
     * #TRUE if this is the first line of the paragraph
     * @field 
     */
    isParagraphStart: number
    /**
     * #Resolved PangoDirection of line
     * @field 
     */
    resolvedDir: number

    // Owm methods of Pango-1.0.Pango.LayoutLine

    /**
     * Computes the logical and ink extents of a layout line.
     * 
     * See [method`Pango`.Font.get_glyph_extents] for details
     * about the interpretation of the rectangles.
     */
    getExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Computes the height of the line, as the maximum of the heights
     * of fonts used in this line.
     * 
     * Note that the actual baseline-to-baseline distance between lines
     * of text is influenced by other factors, such as
     * [method`Pango`.Layout.set_spacing] and
     * [method`Pango`.Layout.set_line_spacing].
     */
    getHeight(): /* height */ number
    /**
     * Returns the length of the line, in bytes.
     */
    getLength(): number
    /**
     * Computes the logical and ink extents of `layout_line` in device units.
     * 
     * This function just calls [method`Pango`.LayoutLine.get_extents] followed by
     * two [func`extents_to_pixels]` calls, rounding `ink_rect` and `logical_rect`
     * such that the rounded rectangles fully contain the unrounded one (that is,
     * passes them as first argument to [func`extents_to_pixels]`).
     */
    getPixelExtents(): [ /* inkRect */ Rectangle, /* logicalRect */ Rectangle ]
    /**
     * Returns the resolved direction of the line.
     */
    getResolvedDirection(): Direction
    /**
     * Returns the start index of the line, as byte index
     * into the text of the layout.
     */
    getStartIndex(): number
    /**
     * Gets a list of visual ranges corresponding to a given logical range.
     * 
     * This list is not necessarily minimal - there may be consecutive
     * ranges which are adjacent. The ranges will be sorted from left to
     * right. The ranges are with respect to the left edge of the entire
     * layout, not with respect to the line.
     * @param startIndex Start byte index of the logical range. If this value   is less than the start index for the line, then the first range   will extend all the way to the leading edge of the layout. Otherwise,   it will start at the leading edge of the first character.
     * @param endIndex Ending byte index of the logical range. If this value is   greater than the end index for the line, then the last range will   extend all the way to the trailing edge of the layout. Otherwise,   it will end at the trailing edge of the last character.
     */
    getXRanges(startIndex: number, endIndex: number): /* ranges */ number[]
    /**
     * Converts an index within a line to a X position.
     * @param index byte offset of a grapheme within the layout
     * @param trailing an integer indicating the edge of the grapheme to retrieve   the position of. If > 0, the trailing edge of the grapheme,   if 0, the leading of the grapheme
     */
    indexToX(index: number, trailing: boolean): /* xPos */ number
    /**
     * Increase the reference count of a `PangoLayoutLine` by one.
     */
    ref(): LayoutLine
    /**
     * Decrease the reference count of a `PangoLayoutLine` by one.
     * 
     * If the result is zero, the line and all associated memory
     * will be freed.
     */
    unref(): void
    /**
     * Converts from x offset to the byte index of the corresponding character
     * within the text of the layout.
     * 
     * If `x_pos` is outside the line, `index_` and `trailing` will point to the very
     * first or very last position in the line. This determination is based on the
     * resolved direction of the paragraph; for example, if the resolved direction
     * is right-to-left, then an X position to the right of the line (after it)
     * results in 0 being stored in `index_` and `trailing`. An X position to the
     * left of the line results in `index_` pointing to the (logical) last grapheme
     * in the line and `trailing` being set to the number of characters in that
     * grapheme. The reverse is true for a left-to-right line.
     * @param xPos the X offset (in Pango units) from the left edge of the line.
     */
    xToIndex(xPos: number): [ /* returnType */ boolean, /* index */ number, /* trailing */ number ]
}

/**
 * A `PangoLayoutLine` represents one of the lines resulting from laying
 * out a paragraph via `PangoLayout`.
 * 
 * `PangoLayoutLine` structures are obtained by calling
 * [method`Pango`.Layout.get_line] and are only valid until the text,
 * attributes, or settings of the parent `PangoLayout` are modified.
 * @record 
 */
export class LayoutLine {

    // Own properties of Pango-1.0.Pango.LayoutLine

    static name: string
}

export interface LogAttr {

    // Own fields of Pango-1.0.Pango.LogAttr

    /**
     * if set, can break line in front of character
     * @field 
     */
    isLineBreak: number
    /**
     * if set, must break line in front of character
     * @field 
     */
    isMandatoryBreak: number
    /**
     * if set, can break here when doing character wrapping
     * @field 
     */
    isCharBreak: number
    /**
     * is whitespace character
     * @field 
     */
    isWhite: number
    /**
     * if set, cursor can appear in front of character.
     *   i.e. this is a grapheme boundary, or the first character in the text.
     *   This flag implements Unicode's
     *   [Grapheme Cluster Boundaries](http://www.unicode.org/reports/tr29/)
     *   semantics.
     * @field 
     */
    isCursorPosition: number
    /**
     * is first character in a word
     * @field 
     */
    isWordStart: number
    /**
     * is first non-word char after a word
     *   Note that in degenerate cases, you could have both `is_word_start`
     *   and `is_word_end` set for some character.
     * @field 
     */
    isWordEnd: number
    /**
     * is a sentence boundary.
     *   There are two ways to divide sentences. The first assigns all
     *   inter-sentence whitespace/control/format chars to some sentence,
     *   so all chars are in some sentence; `is_sentence_boundary` denotes
     *   the boundaries there. The second way doesn't assign
     *   between-sentence spaces, etc. to any sentence, so
     *   `is_sentence_start/``is_sentence_end` mark the boundaries of those sentences.
     * @field 
     */
    isSentenceBoundary: number
    /**
     * is first character in a sentence
     * @field 
     */
    isSentenceStart: number
    /**
     * is first char after a sentence.
     *   Note that in degenerate cases, you could have both `is_sentence_start`
     *   and `is_sentence_end` set for some character. (e.g. no space after a
     *   period, so the next sentence starts right away)
     * @field 
     */
    isSentenceEnd: number
    /**
     * if set, backspace deletes one character
     *   rather than the entire grapheme cluster. This field is only meaningful
     *   on grapheme boundaries (where `is_cursor_position` is set). In some languages,
     *   the full grapheme (e.g. letter + diacritics) is considered a unit, while in
     *   others, each decomposed character in the grapheme is a unit. In the default
     *   implementation of [func`break]`, this bit is set on all grapheme boundaries
     *   except those following Latin, Cyrillic or Greek base characters.
     * @field 
     */
    backspaceDeletesCharacter: number
    /**
     * is a whitespace character that can possibly be
     *   expanded for justification purposes. (Since: 1.18)
     * @field 
     */
    isExpandableSpace: number
    /**
     * is a word boundary, as defined by UAX#29.
     *   More specifically, means that this is not a position in the middle of a word.
     *   For example, both sides of a punctuation mark are considered word boundaries.
     *   This flag is particularly useful when selecting text word-by-word. This flag
     *   implements Unicode's [Word Boundaries](http://www.unicode.org/reports/tr29/)
     *   semantics. (Since: 1.22)
     * @field 
     */
    isWordBoundary: number
    /**
     * when breaking lines before this char, insert a hyphen.
     *   Since: 1.50
     * @field 
     */
    breakInsertsHyphen: number
    /**
     * when breaking lines before this char, remove the
     *   preceding char. Since 1.50
     * @field 
     */
    breakRemovesPreceding: number
    reserved: number
}

/**
 * The `PangoLogAttr` structure stores information about the attributes of a
 * single character.
 * @record 
 */
export class LogAttr {

    // Own properties of Pango-1.0.Pango.LogAttr

    static name: string
}

export interface Matrix {

    // Own fields of Pango-1.0.Pango.Matrix

    /**
     * 1st component of the transformation matrix
     * @field 
     */
    xx: number
    /**
     * 2nd component of the transformation matrix
     * @field 
     */
    xy: number
    /**
     * 3rd component of the transformation matrix
     * @field 
     */
    yx: number
    /**
     * 4th component of the transformation matrix
     * @field 
     */
    yy: number
    /**
     * x translation
     * @field 
     */
    x0: number
    /**
     * y translation
     * @field 
     */
    y0: number

    // Owm methods of Pango-1.0.Pango.Matrix

    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first applying transformation
     * given by `new_matrix` then applying the original transformation.
     * @param newMatrix a `PangoMatrix`
     */
    concat(newMatrix: Matrix): void
    /**
     * Copies a `PangoMatrix`.
     */
    copy(): Matrix | null
    /**
     * Free a `PangoMatrix`.
     */
    free(): void
    /**
     * Returns the scale factor of a matrix on the height of the font.
     * 
     * That is, the scale factor in the direction perpendicular to the
     * vector that the X coordinate is mapped to.  If the scale in the X
     * coordinate is needed as well, use [method`Pango`.Matrix.get_font_scale_factors].
     */
    getFontScaleFactor(): number
    /**
     * Calculates the scale factor of a matrix on the width and height of the font.
     * 
     * That is, `xscale` is the scale factor in the direction of the X coordinate,
     * and `yscale` is the scale factor in the direction perpendicular to the
     * vector that the X coordinate is mapped to.
     * 
     * Note that output numbers will always be non-negative.
     */
    getFontScaleFactors(): [ /* xscale */ number, /* yscale */ number ]
    /**
     * Gets the slant ratio of a matrix.
     * 
     * For a simple shear matrix in the form:
     * 
     *     1 ??
     *     0 1
     * 
     * this is simply ??.
     */
    getSlantRatio(): number
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first rotating by `degrees` degrees
     * counter-clockwise then applying the original transformation.
     * @param degrees degrees to rotate counter-clockwise
     */
    rotate(degrees: number): void
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first scaling by `sx` in the X direction
     * and `sy` in the Y direction then applying the original
     * transformation.
     * @param scaleX amount to scale by in X direction
     * @param scaleY amount to scale by in Y direction
     */
    scale(scaleX: number, scaleY: number): void
    /**
     * Transforms the distance vector (`dx,``dy)` by `matrix`.
     * 
     * This is similar to [method`Pango`.Matrix.transform_point],
     * except that the translation components of the transformation
     * are ignored. The calculation of the returned vector is as follows:
     * 
     * ```
     * dx2 = dx1 * xx + dy1 * xy;
     * dy2 = dx1 * yx + dy1 * yy;
     * ```
     * 
     * Affine transformations are position invariant, so the same vector
     * always transforms to the same vector. If (`x1`,`y1`) transforms
     * to (`x2`,`y2`) then (`x1`+`dx1`,`y1`+`dy1`) will transform to
     * (`x1`+`dx2`,`y1`+`dy2`) for all values of `x1` and `x2`.
     * @param dx in/out X component of a distance vector
     * @param dy in/out Y component of a distance vector
     */
    transformDistance(dx: number, dy: number): [ /* dx */ number, /* dy */ number ]
    /**
     * First transforms the `rect` using `matrix,` then calculates the bounding box
     * of the transformed rectangle.
     * 
     * This function is useful for example when you want to draw a rotated
     * `PangoLayout` to an image buffer, and want to know how large the image
     * should be and how much you should shift the layout when rendering.
     * 
     * For better accuracy, you should use [method`Pango`.Matrix.transform_rectangle]
     * on original rectangle in Pango units and convert to pixels afterward
     * using [func`extents_to_pixels]`'s first argument.
     * @param rect in/out bounding box in device units
     */
    transformPixelRectangle(rect?: Rectangle): /* rect */ Rectangle
    /**
     * Transforms the point (`x,` `y)` by `matrix`.
     * @param x in/out X position
     * @param y in/out Y position
     */
    transformPoint(x: number, y: number): [ /* x */ number, /* y */ number ]
    /**
     * First transforms `rect` using `matrix,` then calculates the bounding box
     * of the transformed rectangle.
     * 
     * This function is useful for example when you want to draw a rotated
     * `PangoLayout` to an image buffer, and want to know how large the image
     * should be and how much you should shift the layout when rendering.
     * 
     * If you have a rectangle in device units (pixels), use
     * [method`Pango`.Matrix.transform_pixel_rectangle].
     * 
     * If you have the rectangle in Pango units and want to convert to
     * transformed pixel bounding box, it is more accurate to transform it first
     * (using this function) and pass the result to pango_extents_to_pixels(),
     * first argument, for an inclusive rounded rectangle.
     * However, there are valid reasons that you may want to convert
     * to pixels first and then transform, for example when the transformed
     * coordinates may overflow in Pango units (large matrix translation for
     * example).
     * @param rect in/out bounding box in Pango units
     */
    transformRectangle(rect?: Rectangle): /* rect */ Rectangle
    /**
     * Changes the transformation represented by `matrix` to be the
     * transformation given by first translating by (`tx,` `ty)`
     * then applying the original transformation.
     * @param tx amount to translate in the X direction
     * @param ty amount to translate in the Y direction
     */
    translate(tx: number, ty: number): void
}

/**
 * A `PangoMatrix` specifies a transformation between user-space
 * and device coordinates.
 * 
 * The transformation is given by
 * 
 * ```
 * x_device = x_user * matrix->xx + y_user * matrix->xy + matrix->x0;
 * y_device = x_user * matrix->yx + y_user * matrix->yy + matrix->y0;
 * ```
 * @record 
 */
export class Matrix {

    // Own properties of Pango-1.0.Pango.Matrix

    static name: string
}

export interface Rectangle {

    // Own fields of Pango-1.0.Pango.Rectangle

    /**
     * X coordinate of the left side of the rectangle.
     * @field 
     */
    x: number
    /**
     * Y coordinate of the the top side of the rectangle.
     * @field 
     */
    y: number
    /**
     * width of the rectangle.
     * @field 
     */
    width: number
    /**
     * height of the rectangle.
     * @field 
     */
    height: number
}

/**
 * The `PangoRectangle` structure represents a rectangle.
 * 
 * `PangoRectangle` is frequently used to represent the logical or ink
 * extents of a single glyph or section of text. (See, for instance,
 * [method`Pango`.Font.get_glyph_extents].)
 * @record 
 */
export class Rectangle {

    // Own properties of Pango-1.0.Pango.Rectangle

    static name: string
}

export interface RendererClass {

    // Own fields of Pango-1.0.Pango.RendererClass

    drawGlyphs: (renderer: Renderer, font: Font, glyphs: GlyphString, x: number, y: number) => void
    drawRectangle: (renderer: Renderer, part: RenderPart, x: number, y: number, width: number, height: number) => void
    drawErrorUnderline: (renderer: Renderer, x: number, y: number, width: number, height: number) => void
    drawShape: (renderer: Renderer, attr: AttrShape, x: number, y: number) => void
    drawTrapezoid: (renderer: Renderer, part: RenderPart, y1: number, x11: number, x21: number, y2: number, x12: number, x22: number) => void
    drawGlyph: (renderer: Renderer, font: Font, glyph: Glyph, x: number, y: number) => void
    partChanged: (renderer: Renderer, part: RenderPart) => void
    begin: (renderer: Renderer) => void
    end: (renderer: Renderer) => void
    prepareRun: (renderer: Renderer, run: LayoutRun) => void
    drawGlyphItem: (renderer: Renderer, text: string | null, glyphItem: GlyphItem, x: number, y: number) => void
}

/**
 * Class structure for `PangoRenderer`.
 * 
 * The following vfuncs take user space coordinates in Pango units
 * and have default implementations:
 * - draw_glyphs
 * - draw_rectangle
 * - draw_error_underline
 * - draw_shape
 * - draw_glyph_item
 * 
 * The default draw_shape implementation draws nothing.
 * 
 * The following vfuncs take device space coordinates as doubles
 * and must be implemented:
 * - draw_trapezoid
 * - draw_glyph
 * @record 
 */
export abstract class RendererClass {

    // Own properties of Pango-1.0.Pango.RendererClass

    static name: string
}

export interface RendererPrivate {
}

export class RendererPrivate {

    // Own properties of Pango-1.0.Pango.RendererPrivate

    static name: string
}

export interface ScriptIter {

    // Owm methods of Pango-1.0.Pango.ScriptIter

    /**
     * Frees a `PangoScriptIter`.
     */
    free(): void
    /**
     * Gets information about the range to which `iter` currently points.
     * 
     * The range is the set of locations p where *start <= p < *end.
     * (That is, it doesn't include the character stored at *end)
     * 
     * Note that while the type of the `script` argument is declared
     * as `PangoScript`, as of Pango 1.18, this function simply returns
     * `GUnicodeScript` values. Callers must be prepared to handle unknown
     * values.
     */
    getRange(): [ /* start */ string, /* end */ string, /* script */ Script ]
    /**
     * Advances a `PangoScriptIter` to the next range.
     * 
     * If `iter` is already at the end, it is left unchanged
     * and %FALSE is returned.
     */
    next(): boolean
}

/**
 * A `PangoScriptIter` is used to iterate through a string
 * and identify ranges in different scripts.
 * @record 
 */
export class ScriptIter {

    // Own properties of Pango-1.0.Pango.ScriptIter

    static name: string

    // Constructors of Pango-1.0.Pango.ScriptIter

    /**
     * Create a new `PangoScriptIter`, used to break a string of
     * Unicode text into runs by Unicode script.
     * 
     * No copy is made of `text,` so the caller needs to make
     * sure it remains valid until the iterator is freed with
     * [method`Pango`.ScriptIter.free].
     * @constructor 
     * @param text a UTF-8 string
     * @param length length of `text,` or -1 if `text` is nul-terminated
     */
    constructor(text: string, length: number) 
    /**
     * Create a new `PangoScriptIter`, used to break a string of
     * Unicode text into runs by Unicode script.
     * 
     * No copy is made of `text,` so the caller needs to make
     * sure it remains valid until the iterator is freed with
     * [method`Pango`.ScriptIter.free].
     * @constructor 
     * @param text a UTF-8 string
     * @param length length of `text,` or -1 if `text` is nul-terminated
     */
    static new(text: string, length: number): ScriptIter
}

export interface TabArray {

    // Owm methods of Pango-1.0.Pango.TabArray

    /**
     * Copies a `PangoTabArray`.
     */
    copy(): TabArray
    /**
     * Frees a tab array and associated resources.
     */
    free(): void
    /**
     * Gets the Unicode character to use as decimal point.
     * 
     * This is only relevant for tabs with %PANGO_TAB_DECIMAL alignment,
     * which align content at the first occurrence of the decimal point
     * character.
     * 
     * The default value of 0 means that Pango will use the
     * decimal point according to the current locale.
     * @param tabIndex the index of a tab stop
     */
    getDecimalPoint(tabIndex: number): string
    /**
     * Returns %TRUE if the tab positions are in pixels,
     * %FALSE if they are in Pango units.
     */
    getPositionsInPixels(): boolean
    /**
     * Gets the number of tab stops in `tab_array`.
     */
    getSize(): number
    /**
     * Gets the alignment and position of a tab stop.
     * @param tabIndex tab stop index
     */
    getTab(tabIndex: number): [ /* alignment */ TabAlign, /* location */ number ]
    /**
     * If non-%NULL, `alignments` and `locations` are filled with allocated
     * arrays.
     * 
     * The arrays are of length [method`Pango`.TabArray.get_size].
     * You must free the returned array.
     */
    getTabs(): [ /* alignments */ TabAlign, /* locations */ number[] ]
    /**
     * Resizes a tab array.
     * 
     * You must subsequently initialize any tabs
     * that were added as a result of growing the array.
     * @param newSize new size of the array
     */
    resize(newSize: number): void
    /**
     * Sets the Unicode character to use as decimal point.
     * 
     * This is only relevant for tabs with %PANGO_TAB_DECIMAL alignment,
     * which align content at the first occurrence of the decimal point
     * character.
     * 
     * By default, Pango uses the decimal point according
     * to the current locale.
     * @param tabIndex the index of a tab stop
     * @param decimalPoint the decimal point to use
     */
    setDecimalPoint(tabIndex: number, decimalPoint: string): void
    /**
     * Sets whether positions in this array are specified in
     * pixels.
     * @param positionsInPixels whether positions are in pixels
     */
    setPositionsInPixels(positionsInPixels: boolean): void
    /**
     * Sets the alignment and location of a tab stop.
     * @param tabIndex the index of a tab stop
     * @param alignment tab alignment
     * @param location tab location in Pango units
     */
    setTab(tabIndex: number, alignment: TabAlign, location: number): void
    /**
     * Utility function to ensure that the tab stops are in increasing order.
     */
    sort(): void
    /**
     * Serializes a `PangoTabArray` to a string.
     * 
     * No guarantees are made about the format of the string,
     * it may change between Pango versions.
     * 
     * The intended use of this function is testing and
     * debugging. The format is not meant as a permanent
     * storage format.
     */
    toString(): string
}

/**
 * A `PangoTabArray` contains an array of tab stops.
 * 
 * `PangoTabArray` can be used to set tab stops in a `PangoLayout`.
 * Each tab stop has an alignment, a position, and optionally
 * a character to use as decimal point.
 * @record 
 */
export class TabArray {

    // Own properties of Pango-1.0.Pango.TabArray

    static name: string

    // Constructors of Pango-1.0.Pango.TabArray

    /**
     * Creates an array of `initial_size` tab stops.
     * 
     * Tab stops are specified in pixel units if `positions_in_pixels` is %TRUE,
     * otherwise in Pango units. All stops are initially at position 0.
     * @constructor 
     * @param initialSize Initial number of tab stops to allocate, can be 0
     * @param positionsInPixels whether positions are in pixel units
     */
    constructor(initialSize: number, positionsInPixels: boolean) 
    /**
     * Creates an array of `initial_size` tab stops.
     * 
     * Tab stops are specified in pixel units if `positions_in_pixels` is %TRUE,
     * otherwise in Pango units. All stops are initially at position 0.
     * @constructor 
     * @param initialSize Initial number of tab stops to allocate, can be 0
     * @param positionsInPixels whether positions are in pixel units
     */
    static new(initialSize: number, positionsInPixels: boolean): TabArray
    /**
     * Deserializes a `PangoTabArray` from a string.
     * 
     * This is the counterpart to [method`Pango`.TabArray.to_string].
     * See that functions for details about the format.
     * @param text a string
     */
    static fromString(text: string): TabArray | null
}

    export type Glyph = number
    export type GlyphUnit = number
    export type LayoutRun = GlyphItem