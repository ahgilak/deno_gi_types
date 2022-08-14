
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Gladeui-2.0
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
 * These are the reasons your #GladePostCreateFunc can be called.
 */
export enum CreateReason {
    /**
     * Was created at the user's request
     *                     (this is a good time to set any properties
     *                     or add children to the project; like GtkFrame's
     *                     label for example).
     */
    USER,
    /**
     * Was created as a result of the copy/paste
     *                     mechanism, at this point you can count on glade
     *                     to follow up with properties and children on
     *                     its own.
     */
    COPY,
    /**
     * Was created during the load process.
     */
    LOAD,
    /**
     * Was created as a replacement for another project
     *                        object; this only happens when the user is
     *                        changing a property that is marked by the type
     *                        system as G_PARAM_SPEC_CONSTRUCT_ONLY.
     */
    REBUILD,
    /**
     * Never used.
     */
    REASONS,
}
export enum CursorType {
    SELECTOR,
    ADD_WIDGET,
    RESIZE_TOP_LEFT,
    RESIZE_TOP_RIGHT,
    RESIZE_BOTTOM_LEFT,
    RESIZE_BOTTOM_RIGHT,
    RESIZE_LEFT,
    RESIZE_RIGHT,
    RESIZE_TOP,
    RESIZE_BOTTOM,
    DRAG,
}
export enum EditorPageType {
    GENERAL,
    COMMON,
    PACKING,
    ATK,
    QUERY,
    SIGNAL,
}
export enum ItemAppearance {
    ICON_AND_LABEL,
    ICON_ONLY,
    LABEL_ONLY,
}
/**
 * Indicates what the pointer is used for in the workspace.
 */
export enum PointerMode {
    /**
     * Mouse pointer used for selecting widgets
     */
    SELECT,
    /**
     * Mouse pointer used for adding widgets
     */
    ADD_WIDGET,
    /**
     * Mouse pointer used for dragging and
     *                             resizing widgets in containers
     */
    DRAG_RESIZE,
    /**
     * Mouse pointer used to edit widget margins
     */
    MARGIN_EDIT,
    /**
     * Mouse pointer used to edit widget alignment
     */
    ALIGN_EDIT,
}
/**
 * The tree view columns provided by the GtkTreeModel implemented
 * by GladeProject
 */
export enum ProjectModelColumns {
    /**
     * name of the icon for the widget
     */
    COLUMN_ICON_NAME,
    /**
     * Name of the widget
     */
    COLUMN_NAME,
    /**
     * The type name of the widget
     */
    COLUMN_TYPE_NAME,
    /**
     * the GObject of the widget
     */
    COLUMN_OBJECT,
    /**
     * the auxilary text describing a widget's role
     */
    COLUMN_MISC,
    /**
     * the support warning text for this widget
     */
    COLUMN_WARNING,
    /**
     * Number of columns
     */
    N_COLUMNS,
}
export enum SignalModelColumns {
    COLUMN_NAME,
    COLUMN_SHOW_NAME,
    COLUMN_HANDLER,
    COLUMN_OBJECT,
    COLUMN_SWAP,
    COLUMN_AFTER,
    COLUMN_TOOLTIP,
    COLUMN_SIGNAL,
    COLUMN_DETAIL,
    N_COLUMNS,
}
export enum Stock {
    DUMMY,
}
export enum StockImage {
    DUMMY,
}
export enum UIMessageType {
    INFO,
    WARN,
    ERROR,
    ARE_YOU_SURE,
    YES_OR_NO,
}
export enum UtilFileDialogType {
    OPEN,
    SAVE,
}
export enum DebugFlag {
    REF_COUNTS,
    WIDGET_EVENTS,
    COMMANDS,
    PROPERTIES,
    VERIFY,
}
export enum PropertyState {
    NORMAL,
    CHANGED,
    UNSUPPORTED,
    SUPPORT_DISABLED,
}
export enum SupportMask {
    OK,
    DEPRECATED,
    MISMATCH,
}
export enum VerifyFlags {
    /**
     * No verification
     */
    NONE,
    /**
     * Verify version mismatches
     */
    VERSIONS,
    /**
     * Verify deprecations
     */
    DEPRECATIONS,
    /**
     * Verify unrecognized types
     */
    UNRECOGNIZED,
}
export const DEVHELP_FALLBACK_ICON_FILE: string
export const DEVHELP_ICON_NAME: string
export const ENV_BUNDLED: string
export const ENV_CATALOG_PATH: string
export const ENV_ICON_THEME_PATH: string
export const ENV_MODULE_PATH: string
export const ENV_PIXMAP_DIR: string
export const ENV_TESTING: string
export const GTKBUILDER_VERSIONING_BASE_MAJOR: number
export const GTKBUILDER_VERSIONING_BASE_MINOR: number
export const PROPERTY_DEF_OBJECT_DELIMITER: string
export const TAG_ACTION: string
export const TAG_ACTIONS: string
export const TAG_ACTION_ACTIVATE_FUNCTION: string
export const TAG_ACTION_SUBMENU_FUNCTION: string
export const TAG_ADAPTOR: string
export const TAG_ADD_CHILD_FUNCTION: string
export const TAG_ADD_CHILD_VERIFY_FUNCTION: string
export const TAG_ANARCHIST: string
export const TAG_ATK_PROPERTY: string
export const TAG_BIND_FLAGS: string
export const TAG_BIND_PROPERTY: string
export const TAG_BIND_SOURCE: string
export const TAG_BOOK: string
export const TAG_BUILDER_SINCE: string
export const TAG_CHILD_ACTION_ACTIVATE_FUNCTION: string
export const TAG_CHILD_GET_PROP_FUNCTION: string
export const TAG_CHILD_PROPERTY: string
export const TAG_CHILD_SET_PROP_FUNCTION: string
export const TAG_CHILD_VERIFY_FUNCTION: string
export const TAG_COMMENT: string
export const TAG_COMMON: string
export const TAG_CONSTRUCTOR_FUNCTION: string
export const TAG_CONSTRUCT_OBJECT_FUNCTION: string
export const TAG_CONSTRUCT_ONLY: string
export const TAG_CONTEXT: string
export const TAG_CREATE_EDITABLE_FUNCTION: string
export const TAG_CREATE_EPROP_FUNCTION: string
export const TAG_CREATE_TYPE: string
export const TAG_CREATE_WIDGET_FUNCTION: string
export const TAG_CUSTOM_LAYOUT: string
export const TAG_DEEP_POST_CREATE_FUNCTION: string
export const TAG_DEFAULT: string
export const TAG_DEFAULT_HEIGHT: string
export const TAG_DEFAULT_PALETTE_STATE: string
export const TAG_DEFAULT_WIDTH: string
export const TAG_DEPENDS: string
export const TAG_DEPENDS_FUNCTION: string
export const TAG_DEPRECATED: string
export const TAG_DEPRECATED_SINCE: string
export const TAG_DESTROY_OBJECT_FUNCTION: string
export const TAG_DISABLED: string
export const TAG_DISPLAYABLE_VALUES: string
export const TAG_DOMAIN: string
export const TAG_EDITABLE: string
export const TAG_EVENT_HANDLER_CONNECTED: string
export const TAG_EXPANDED: string
export const TAG_FALSE: string
export const TAG_GENERIC_NAME: string
export const TAG_GET_CHILDREN_FUNCTION: string
export const TAG_GET_FUNCTION: string
export const TAG_GET_INTERNAL_CHILD_FUNCTION: string
export const TAG_GET_TYPE_FUNCTION: string
export const TAG_GLADE_CATALOG: string
export const TAG_GLADE_WIDGET_CLASS: string
export const TAG_GLADE_WIDGET_CLASSES: string
export const TAG_GLADE_WIDGET_CLASS_REF: string
export const TAG_GLADE_WIDGET_GROUP: string
export const TAG_HAS_CONTEXT: string
export const TAG_ICON_NAME: string
export const TAG_ICON_PREFIX: string
export const TAG_ID: string
export const TAG_IGNORE: string
export const TAG_IMPORTANT: string
export const TAG_INIT_FUNCTION: string
export const TAG_INTERNAL_CHILDREN: string
export const TAG_KEY: string
export const TAG_LIBRARY: string
export const TAG_MAX_VALUE: string
export const TAG_MIN_VALUE: string
export const TAG_MULTILINE: string
export const TAG_NAME: string
export const TAG_NEEDS_SYNC: string
export const TAG_NICK: string
export const TAG_NO: string
export const TAG_OPTIONAL: string
export const TAG_OPTIONAL_DEFAULT: string
export const TAG_PACKING_ACTIONS: string
export const TAG_PACKING_DEFAULTS: string
export const TAG_PACKING_PROPERTIES: string
export const TAG_PARENT: string
export const TAG_PARENTLESS_WIDGET: string
export const TAG_PARENT_CLASS: string
export const TAG_POST_CREATE_FUNCTION: string
export const TAG_PROPERTIES: string
export const TAG_PROPERTY: string
export const TAG_QUERY: string
export const TAG_READ_CHILD_FUNCTION: string
export const TAG_READ_WIDGET_FUNCTION: string
export const TAG_REMOVE_CHILD_FUNCTION: string
export const TAG_REPLACE_CHILD_FUNCTION: string
export const TAG_RESOURCE: string
export const TAG_SAVE: string
export const TAG_SAVE_ALWAYS: string
export const TAG_SET_FUNCTION: string
export const TAG_SIGNAL: string
export const TAG_SIGNALS: string
export const TAG_SPEC: string
export const TAG_SPECIAL_CHILD_TYPE: string
export const TAG_SPECIFICATIONS: string
export const TAG_STOCK: string
export const TAG_STOCK_ICON: string
export const TAG_STRING_FROM_VALUE_FUNCTION: string
export const TAG_TARGETABLE: string
export const TAG_TEMPLATE_PREFIX: string
export const TAG_THEMED_ICON: string
export const TAG_TITLE: string
export const TAG_TOOLTIP: string
export const TAG_TOPLEVEL: string
export const TAG_TRANSFER_ON_PASTE: string
export const TAG_TRANSLATABLE: string
export const TAG_TRUE: string
export const TAG_TYPE: string
export const TAG_USE_PLACEHOLDERS: string
export const TAG_VALUE: string
export const TAG_VALUE_TYPE: string
export const TAG_VERIFY_FUNCTION: string
export const TAG_VERSION: string
export const TAG_VERSION_SINCE: string
export const TAG_VISIBLE: string
export const TAG_WEIGHT: string
export const TAG_WRITE_CHILD_FUNCTION: string
export const TAG_WRITE_WIDGET_AFTER_FUNCTION: string
export const TAG_WRITE_WIDGET_FUNCTION: string
export const TAG_YES: string
export const UNNAMED_PREFIX: string
/**
 * Class prefix used for abstract classes (ie GtkBin -> GladeInstantiableGtkBin)
 */
export const WIDGET_ADAPTOR_INSTANTIABLE_PREFIX: string
export const XML_TAG_AFTER: string
export const XML_TAG_CHILD: string
export const XML_TAG_CLASS: string
export const XML_TAG_FILENAME: string
export const XML_TAG_HANDLER: string
export const XML_TAG_I18N_TRUE: string
export const XML_TAG_ID: string
export const XML_TAG_INTERNAL_CHILD: string
export const XML_TAG_LIB: string
export const XML_TAG_NAME: string
export const XML_TAG_OBJECT: string
export const XML_TAG_PACKING: string
export const XML_TAG_PLACEHOLDER: string
export const XML_TAG_PROJECT: string
export const XML_TAG_PROPERTY: string
export const XML_TAG_REQUIRES: string
export const XML_TAG_SIGNAL: string
export const XML_TAG_SIGNAL_FALSE: string
export const XML_TAG_SIGNAL_TRUE: string
export const XML_TAG_SOURCE: string
export const XML_TAG_SOURCES: string
export const XML_TAG_STOCK_ID: string
export const XML_TAG_SWAPPED: string
export const XML_TAG_TEMPLATE: string
export const XML_TAG_TYPE: string
export const XML_TAG_TYPE_FUNC: string
export const XML_TAG_VERSION: string
export const XML_TAG_WIDGET: string
/**
 * Adds a new path to the list of path to look catalogs for.
 * @param path the new path containing catalogs
 */
export function catalogAddPath(path: string): void
/**
 * Destroy and free all resources related with every loaded catalog.
 */
export function catalogDestroyAll(): void
export function catalogGetExtraPaths(): string[]
export function catalogIsLoaded(name: string): boolean
/**
 * Loads all available catalogs in the system.
 * First loads catalogs from GLADE_ENV_CATALOG_PATH,
 * then from glade_app_get_catalogs_dir() and finally from paths specified with
 * glade_catalog_add_path()
 */
export function catalogLoadAll(): Catalog[]
/**
 * Remove path from the list of path to look catalogs for.
 * %NULL to remove all paths.
 * @param path the new path containing catalogs or %NULL to remove all of them
 */
export function catalogRemovePath(path: string | null): void
export function cursorGetAddWidgetPixbuf(): GdkPixbuf.Pixbuf
/**
 * Initializes cursors for use with glade_cursor_set().
 */
export function cursorInit(): void
/**
 * Sets the cursor for `window` to something appropriate based on `type`.
 * (also sets the cursor on all visible project widgets)
 * @param project 
 * @param window a #GdkWindow
 * @param type a #GladeCursorType
 */
export function cursorSet(project: Project, window: Gdk.Window, type: CursorType): void
export function displayableValueIsDisabled(type: GObject.GType, value: string): boolean
export function displayableValueSetDisabled(type: GObject.GType, value: string, disabled: boolean): void
export function getDebugFlags(): number
export function getDisplayableValue(type: GObject.GType, value: string): string
export function getValueFromDisplayable(type: GObject.GType, displayabe: string): string
/**
 * Initialization function for libgladeui (not #GladeApp)
 * It builds paths, bind text domain, and register icons
 */
export function init(): void
export function initDebugFlags(): void
export function paramSpecObjects(name: string, nick: string, blurb: string, acceptedType: GObject.GType, flags: GObject.ParamFlags): GObject.ParamSpec
export function propertGetInsensitiveTooltip(property: Property): string
export function propertyDefGetDefaultFromSpec(spec: GObject.ParamSpec): any
export function propertyDefMakeFlagsFromString(type: GObject.GType, string: string): number
/**
 * This function assigns "weight" to each property in its natural order staring from 1.
 * If parent is 0 weight will be set for every #GladePropertyDef in the list.
 * This function will not override weight if it is already set (weight >= 0.0)
 * @param properties a list of #GladePropertyDef
 * @param parent the #GType of the parent
 */
export function propertyDefSetWeights(properties: PropertyDef[], parent: GObject.GType): void
/**
 * Updates the `property_def_ref` with the contents of the node in the xml
 * file. Only the values found in the xml file are overridden.
 * @param node the property node
 * @param objectType the #GType of the owning object
 * @param propertyDefRef a pointer to the property class
 * @param domain the domain to translate catalog strings from
 */
export function propertyDefUpdateFromNode(node: XmlNode, objectType: GObject.GType, propertyDefRef: PropertyDef | null, domain: string): [ /* returnType */ boolean, /* propertyDefRef */ PropertyDef | null ]
export function registerDisplayableValue(type: GObject.GType, value: string, domain: string, string: string): void
export function registerTranslatedValue(type: GObject.GType, value: string, string: string): void
/**
 * Sets up a log handler to manage all %G_LOG_LEVEL_MASK errors of domain:
 * GLib, GLib-GObject, Gtk, Gdk, and domainless.
 */
export function setupLogHandlers(): void
export function standardBooleanSpec(): GObject.ParamSpec
export function standardFloatSpec(): GObject.ParamSpec
export function standardGdkcolorSpec(): GObject.ParamSpec
export function standardIntSpec(): GObject.ParamSpec
/**
 * This was developed for the purpose of holding a list
 * of 'targets' in an AtkRelation (we are setting it up
 * as a property)
 */
export function standardObjectsSpec(): GObject.ParamSpec
export function standardPixbufSpec(): GObject.ParamSpec
export function standardStockAppendPrefix(prefix: string): void
export function standardStockImageSpec(): GObject.ParamSpec
export function standardStockSpec(): GObject.ParamSpec
export function standardStringSpec(): GObject.ParamSpec
export function standardStrvSpec(): GObject.ParamSpec
export function standardUintSpec(): GObject.ParamSpec
export function typeHasDisplayableValues(type: GObject.GType): boolean
export function utilCanonicalPath(path: string): string
export function utilCheckAndWarnScrollable(parent: Widget, childAdaptor: WidgetAdaptor, parentWidget: Gtk.Widget): boolean
/**
 * This is a #GCompareFunc that compares the labels of two stock items,
 * ignoring any '_' characters. It isn't particularly efficient.
 * @param a a #gconstpointer to a #GtkStockItem
 * @param b a #gconstpointer to a #GtkStockItem
 */
export function utilCompareStockLabels(a: object | null, b: object | null): number
/**
 * Use this to itterate over all children in a GtkContainer,
 * as it used _forall() instead of _foreach() (and the GTK+ version
 * of this function is simply not exposed).
 * @param container a #GtkContainer
 */
export function utilContainerGetAllChildren(container: Gtk.Container): Gtk.Widget[]
export function utilCountPlaceholders(parent: Widget): number
/**
 * Duplicates `name,` but the copy has two underscores in place of any single
 * underscore in the original.
 * @param name a string
 */
export function utilDuplicateUnderscores(name: string): string
export function utilFileDialogNew(title: string, project: Project, parent: Gtk.Window, action: UtilFileDialogType): Gtk.Widget
/**
 * Checks whether the file at `path` is writeable
 * @param path the path to the file
 */
export function utilFileIsWriteable(path: string): boolean
export function utilFilenameToIconName(value: string): string
/**
 * Looks through `model` for the #GtkTreeIter corresponding to
 * `findme` under `column`.
 * @param model a #GtkTreeModel
 * @param findme a #GladeWidget
 * @param column a #gint
 */
export function utilFindIterByWidget(model: Gtk.TreeModel, findme: Widget, column: number): Gtk.TreeIter
/**
 * Creates an image displaying the devhelp icon.
 * @param size the preferred icon size
 */
export function utilGetDevhelpIcon(size: Gtk.IconSize): Gtk.Widget
/**
 * Gets the UTC modification time of file `filename`.
 * @param filename A filename
 */
export function utilGetFileMtime(filename: string): number
export function utilGetPlaceholderFromPointer(container: Gtk.Container): Gtk.Widget
/**
 * Returns the type using the "get type" function name based on `name`.
 * If the `have_func` flag is true,`name` is used directly, otherwise the get-type
 * function is contrived from `name` then used.
 * @param name the name of the #GType - like 'GtkWidget' or a "get-type" function.
 * @param haveFunc function-name flag -- true if the name is a "get-type" function.
 */
export function utilGetTypeFromName(name: string, haveFunc: boolean): GObject.GType
export function utilHaveDevhelp(): boolean
export function utilIconNameToFilename(value: string): string
export function utilObjectIsLoading(object: GObject.Object): boolean
/**
 * Return a usable version of a property identifier as found
 * in a freshly parserd #GladeInterface
 * @param str a string
 */
export function utilReadPropName(str: string): string
export function utilRemoveScrollEvents(widget: Gtk.Widget): void
/**
 * Replaces each occurrence of the character `a` in `str` to `b`.
 * @param str a string
 * @param a a #gchar
 * @param b a #gchar
 */
export function utilReplace(str: string, a: number, b: number): void
export function utilSearchDevhelp(book: string, page: string, search: string): void
/**
 * Portable function for showing an URL `url` in a web browser.
 * @param url An URL to display
 */
export function utilUrlShow(url: string): boolean
/**
 * Parse a boolean value
 * @param string the string to convert
 */
export function utilsBooleanFromString(string: string): [ /* returnType */ boolean, /* value */ boolean ]
export function utilsCairoDrawLine(cr: cairo.Context, color: Gdk.Color, x1: number, y1: number, x2: number, y2: number): void
export function utilsCairoDrawRectangle(cr: cairo.Context, color: Gdk.Color, filled: boolean, x: number, y: number, width: number, height: number): void
export function utilsEnumStringFromValue(enumType: GObject.GType, value: number): string
export function utilsEnumStringFromValueDisplayable(flagsType: GObject.GType, value: number): string
export function utilsEnumValueFromString(enumType: GObject.GType, strval: string): number
export function utilsFlagsStringFromValue(enumType: GObject.GType, value: number): string
export function utilsFlagsStringFromValueDisplayable(flagsType: GObject.GType, value: number): string
export function utilsFlagsValueFromString(enumType: GObject.GType, strval: string): number
/**
 * Get's the pointer position relative to `widget,` while `window` and `device`
 * are not absolutely needed, they should be passed wherever possible.
 * @param widget The widget to get the mouse position relative for
 * @param window The window of the current event, or %NULL
 * @param device The device, if not specified, the current event will be expected to have a `device`.
 * @param x The location to store the mouse pointer X position
 * @param y The location to store the mouse pointer Y position
 */
export function utilsGetPointer(widget: Gtk.Widget, window: Gdk.Window, device: Gdk.Device, x: number, y: number): void
export function utilsGetPspecFromFuncname(funcname: string): GObject.ParamSpec | null
/**
 * This function is meant to be attached to key-press-event of a toplevel,
 * it simply allows the window contents to treat key events /before/
 * accelerator keys come into play (this way widgets dont get deleted
 * when cutting text in an entry etc.).
 * Creates a liststore suitable for comboboxes and such to
 * chose from a variety of types.
 * @param win a #GtkWindow
 * @param event the #GdkEventKey
 * @param userData unused
 */
export function utilsHijackKeyPress(win: Gtk.Window, event: Gdk.EventKey, userData: object | null): number
/**
 * Creates a liststore suitable for comboboxes and such to
 * chose from a variety of types.
 * @param enumType A #GType
 * @param includeEmpty whether to prepend an "Unset" slot
 */
export function utilsListstoreFromEnumType(enumType: GObject.GType, includeEmpty: boolean): Gtk.ListStore
/**
 * Render an icon representing the pointer mode.
 * Best view with sizes bigger than GTK_ICON_SIZE_LARGE_TOOLBAR.
 * @param mode the #GladePointerMode to render as icon
 * @param size icon size
 */
export function utilsPointerModeRenderIcon(mode: PointerMode, size: Gtk.IconSize): GdkPixbuf.Pixbuf
export function utilsReplaceHomeDirWithTilde(path: string): string
/**
 * Serializes #GValue into a string
 * (using glade conversion routines)
 * @param value a #GValue to convert
 */
export function utilsStringFromValue(value: any): string
/**
 * Allocates and sets a #GValue of type `type`
 * set to `string` (using glade conversion routines)
 * @param type a #GType to convert with
 * @param string the string to convert
 * @param project the #GladeProject to look for formats of object names when needed
 */
export function utilsValueFromString(type: GObject.GType, string: string, project: Project): any
/**
 * Dump the XML string from the context.
 * @param context a #GladeXmlContext
 */
export function xmlDumpFromContext(context: XmlContext): string
export function xmlGetBoolean(node: XmlNode, name: string, default_: boolean): boolean
/**
 * Gets a string containing the content of `node_in`.
 * @param nodeIn a #GladeXmlNode
 */
export function xmlGetContent(nodeIn: XmlNode): string
export function xmlGetPropertyBoolean(nodeIn: XmlNode, name: string, default_: boolean): boolean
export function xmlGetPropertyDouble(nodeIn: XmlNode, name: string, default_: number): number
export function xmlGetPropertyInt(nodeIn: XmlNode, name: string, default_: number): number
export function xmlGetPropertyString(nodeIn: XmlNode, name: string): string
export function xmlGetPropertyStringRequired(nodeIn: XmlNode, name: string, xtra: string): string
/**
 * Get the list of targetable versions for a property
 * @param nodeIn a #GladeXmlNode
 * @param name a property name
 */
export function xmlGetPropertyTargetableVersions(nodeIn: XmlNode, name: string): TargetableVersion[]
export function xmlGetPropertyVersion(nodeIn: XmlNode, name: string, major: number, minor: number): boolean
/**
 * Gets an integer value for a node either carried as an attribute or as
 * the content of a child.
 * @param nodeIn a #GladeXmlNode
 * @param name a string
 * @param val a pointer to an #int
 */
export function xmlGetValueInt(nodeIn: XmlNode, name: string, val: number): boolean
/**
 * This is a wrapper around glade_xml_get_value_int(), only it emits
 * a g_warning() if `node` did not contain the requested tag
 * @param node a #GladeXmlNode
 * @param name a string
 * @param val a pointer to an #int
 */
export function xmlGetValueIntRequired(node: XmlNode, name: string, val: number): boolean
export function xmlGetValueString(node: XmlNode, name: string): string
export function xmlGetValueStringRequired(node: XmlNode, name: string, xtraInfo: string): string
export function xmlLoadSymFromNode(nodeIn: XmlNode, module: GModule.Module, tagname: string, symLocation: object | null): boolean
export function xmlSearchChild(node: XmlNode, name: string): XmlNode
/**
 * just a small wrapper around glade_xml_search_child that displays
 * an error if the child was not found
 * @param tree A #GladeXmlNode
 * @param name the name of the child
 */
export function xmlSearchChildRequired(tree: XmlNode, name: string): XmlNode | null
/**
 * Sets the content of `node` to `content`.
 * @param nodeIn a #GladeXmlNode
 * @param content a string
 */
export function xmlSetContent(nodeIn: XmlNode, content: string): void
/**
 * Sets the property `name` in `node_in` to `val`
 * @param nodeIn a #GladeXmlNode
 * @param name a string
 * @param val a string
 */
export function xmlSetValue(nodeIn: XmlNode, name: string, val: string): void
/**
 * This delegate function is used to catch actions from the core.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param actionPath The action identifier in the action tree
 */
export interface ActionActivateFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, actionPath: string): void
}
/**
 * This delegate function is used to create dynamically customized
 * submenus. Called only for actions that don't have children.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param actionPath The action identifier in the action tree
 */
export interface ActionSubmenuFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, actionPath: string): Gtk.Widget | null
}
/**
 * Called to add `child` to `container`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 */
export interface AddChildFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object): void
}
/**
 * Checks whether `child` can be added to `container`.
 * 
 * If `user_feedback` is %TRUE and `child` cannot be
 * added then this shows a notification dialog to the user
 * explaining why.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container A #GObject container
 * @param child A #GObject child
 * @param userFeedback whether a notification dialog should be presented in the case that the child cannot not be added.
 */
export interface AddChildVerifyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, userFeedback: boolean): boolean
}
/**
 * Called once at glade startup time for every catalog, catalogs
 * are initialized in order of dependencies.
 * @callback 
 * @param name The name of the catalog
 */
export interface CatalogInitFunc {
    (name: string): void
}
/**
 * This delegate function is used to catch packing actions from the core.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param object The #GObject
 * @param actionPath The action identifier in the action tree
 */
export interface ChildActionActivateFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, object: GObject.Object, actionPath: string): void
}
/**
 * Called to get the packing property `property_name`
 * on the `child` object of `container` into `value`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 * @param propertyName The id of the property
 * @param value The `GValue`
 */
export interface ChildGetPropertyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, propertyName: string, value: any): void
}
/**
 * Called to set the packing property `property_name` to `value`
 * on the `child` object of `container`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 * @param propertyName The id of the property
 * @param value The `GValue`
 */
export interface ChildSetPropertyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, propertyName: string, value: any): void
}
/**
 * This delegate function is always called whenever setting any
 * properties with the exception of load time, and copy/paste time
 * (basically the two places where we recreate a hierarchy that we
 * already know "works") its basically an optional backend provided
 * boundary checker for properties.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 * @param propertyName The id of the property
 * @param value The `GValue`
 */
export interface ChildVerifyPropertyFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object, propertyName: string, value: any): boolean
}
/**
 * This function is called to construct a GObject instance.
 * (for language bindings that may need to construct a wrapper
 * object).
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param nParameters amount of construct parameters
 * @param parameters array of construct #GParameter args to create              the new object with.
 */
export interface ConstructObjectFunc {
    (adaptor: WidgetAdaptor, nParameters: number, parameters: GObject.Parameter): GObject.Object
}
/**
 * Creates a GladeEditorProperty to edit `klass`
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param def The #GladePropertyDef to be edited
 * @param useCommand whether to use the GladeCommand interface to commit property changes
 */
export interface CreateEPropFunc {
    (adaptor: WidgetAdaptor, def: PropertyDef, useCommand: boolean): EditorProperty
}
/**
 * This is used to allow the backend to override the way an
 * editor page is layed out (note that editor widgets are created
 * on demand and not at startup).
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param type The #GladeEditorPageType
 */
export interface CreateEditableFunc {
    (adaptor: WidgetAdaptor, type: EditorPageType): Editable
}
/**
 * Checks whether `widget` depends on `another` to be placed earlier in
 * the glade file.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param widget A #GladeWidget of the adaptor
 * @param another another #GladeWidget
 */
export interface DependsFunc {
    (adaptor: WidgetAdaptor, widget: Widget, another: Widget): boolean
}
/**
 * This function is called to break any additional references to
 * a GObject instance. Note that this function is not responsible
 * for calling g_object_unref() on `object,` the reference count
 * of `object` belongs to it's #GladeWidget wrapper.
 * 
 * The #GtkWidget adaptor will call gtk_widget_destroy() before
 * chaining up in this function.
 * 
 * If your adaptor adds any references in any way at
 * #GladePostCreateFunc time or #GladeConstructObjectFunc
 * time, then this function must be implemented to also
 * remove that reference.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The object to destroy
 */
export interface DestroyObjectFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object): void
}
/**
 * A function called to get `containers` children.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 */
export interface GetChildrenFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object): GObject.Object[]
}
/**
 * Called to lookup child in composite `object` parent by `internal_name`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param internalName The string identifier of the internal object
 */
export interface GetInternalFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, internalName: string): GObject.Object | null
}
/**
 * Gets `value` on `object` for a given #GladePropertyDef
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param propertyName The property identifier
 * @param value The #GValue
 */
export interface GetPropertyFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, propertyName: string, value: any): void
}
/**
 * This function is called exactly once for any project object
 * instance and can be for any #GladeCreateReason.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param reason The #GladeCreateReason that `object` was created for
 */
export interface PostCreateFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, reason: CreateReason): void
}
/**
 * This function is called to update `widget` from `node`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param widget The #GladeWidget
 * @param node The #GladeXmlNode
 */
export interface ReadWidgetFunc {
    (adaptor: WidgetAdaptor, widget: Widget, node: XmlNode): void
}
/**
 * Called to remove `child` from `container`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param child The #GObject child
 */
export interface RemoveChildFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, child: GObject.Object): void
}
/**
 * Called to swap placeholders with project objects
 * in containers.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param container The #GObject container
 * @param oldObj The old #GObject child
 * @param newObj The new #GObject child
 */
export interface ReplaceChildFunc {
    (adaptor: WidgetAdaptor, container: GObject.Object, oldObj: GObject.Object, newObj: GObject.Object): void
}
/**
 * This delegate function is used to apply the property value on
 * the runtime object.
 * 
 * Sets `value` on `object` for a given #GladePropertyDef
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param propertyName The property identifier
 * @param value The #GValue
 */
export interface SetPropertyFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, propertyName: string, value: any): void
}
/**
 * For normal properties this is used to serialize
 * property values, for custom properties (only when new pspecs are
 * introduced) its needed for value comparisons in boxed pspecs
 * and also to update the UI for undo/redo items etc.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param def The #GladePropertyDef
 * @param value The #GValue to convert to a string
 */
export interface StringFromValueFunc {
    (adaptor: WidgetAdaptor, def: PropertyDef, value: any): string
}
/**
 * This delegate function is always called whenever setting any
 * properties with the exception of load time, and copy/paste time
 * (basically the two places where we recreate a hierarchy that we
 * already know "works") its basically an optional backend provided
 * boundary checker for properties.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param object The #GObject
 * @param propertyName The property identifier
 * @param value The #GValue
 */
export interface VerifyPropertyFunc {
    (adaptor: WidgetAdaptor, object: GObject.Object, propertyName: string, value: any): boolean
}
/**
 * This function is called to fill in `node` from `widget`.
 * @callback 
 * @param adaptor A #GladeWidgetAdaptor
 * @param widget The #GladeWidget
 * @param context The #GladeXmlContext
 * @param node The #GladeXmlNode
 */
export interface WriteWidgetFunc {
    (adaptor: WidgetAdaptor, widget: Widget, context: XmlContext, node: XmlNode): void
}
export module Editable {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.Widget.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Editable extends Gtk.Widget {

    // Owm methods of Gladeui-2.0.Gladeui.Editable

    block(): void
    // Has conflict: load(widget: Widget): void
    loadedWidget(): Widget | null
    loading(): boolean
    // Has conflict: setShowName(showName: boolean): void
    unblock(): void

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

    // Own virtual methods of Gladeui-2.0.Gladeui.Editable

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * This only applies for the general page in the property
     * editor, editables that embed the #GladeEditorTable implementation
     * for the general page should use this to forward the message
     * to its embedded editable.
     * @virtual 
     * @param showName Whether or not to show the name entry
     */
    setShowName(showName: boolean): void

    // Class property signals of Gladeui-2.0.Gladeui.Editable

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

export class Editable extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Editable

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Editable

    constructor(config?: Editable.ConstructorProperties) 
    _init(config?: Editable.ConstructorProperties): void
}

export module AdaptorChooser {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.AdaptorChooser

        project?: Project | null
    }

}

export interface AdaptorChooser extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.AdaptorChooser

    project: Project

    // Owm methods of Gladeui-2.0.Gladeui.AdaptorChooser

    getProject(): Project
    setProject(project: Project): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Gladeui-2.0.Gladeui.AdaptorChooser

    connect(sigName: "notify::project", callback: any): number
    on(sigName: "notify::project", callback: any): number
    once(sigName: "notify::project", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class AdaptorChooser extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.AdaptorChooser

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.AdaptorChooser

    constructor(config?: AdaptorChooser.ConstructorProperties) 
    constructor() 
    static new(): AdaptorChooser

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: AdaptorChooser.ConstructorProperties): void
}

export module App {

    // Signal callback interfaces

    /**
     * Signal callback interface for `doc-search`
     */
    export interface DocSearchSignalCallback {
        (arg1: string, arg2: string, arg3: string): void
    }

    /**
     * Signal callback interface for `signal-editor-created`
     */
    export interface SignalEditorCreatedSignalCallback {
        (signalEditor: GObject.Object): void
    }

    /**
     * Signal callback interface for `widget-adaptor-registered`
     */
    export interface WidgetAdaptorRegisteredSignalCallback {
        (adaptor: GObject.Object): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface App {

    // Own fields of Gladeui-2.0.Gladeui.App

    parentInstance: GObject.Object

    // Own signals of Gladeui-2.0.Gladeui.App

    connect(sigName: "doc-search", callback: App.DocSearchSignalCallback): number
    on(sigName: "doc-search", callback: App.DocSearchSignalCallback): number
    once(sigName: "doc-search", callback: App.DocSearchSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "doc-search", arg2: string, arg3: string, ...args: any[]): void
    connect(sigName: "signal-editor-created", callback: App.SignalEditorCreatedSignalCallback): number
    on(sigName: "signal-editor-created", callback: App.SignalEditorCreatedSignalCallback): number
    once(sigName: "signal-editor-created", callback: App.SignalEditorCreatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "signal-editor-created", ...args: any[]): void
    connect(sigName: "widget-adaptor-registered", callback: App.WidgetAdaptorRegisteredSignalCallback): number
    on(sigName: "widget-adaptor-registered", callback: App.WidgetAdaptorRegisteredSignalCallback): number
    once(sigName: "widget-adaptor-registered", callback: App.WidgetAdaptorRegisteredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "widget-adaptor-registered", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.App

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class App extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.App

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.App

    constructor(config?: App.ConstructorProperties) 
    constructor() 
    static new(): App
    _init(config?: App.ConstructorProperties): void
    static addProject(project: Project): void
    /**
     * Saves the #GKeyFile to "g_get_user_config_dir()/GLADE_CONFIG_FILENAME"
     */
    static configSave(): number
    /**
     * This function has to be called in an event handler for widget selection to work.
     * See gdk_event_handler_set()
     * @param event the event to process.
     */
    static doEvent(event: Gdk.Event): boolean
    static get(): App
    static getAccelGroup(): Gtk.AccelGroup
    static getBinDir(): string
    static getCatalog(name: string): Catalog | null
    static getCatalogVersion(name: string): [ /* returnType */ boolean, /* major */ number, /* minor */ number ]
    static getCatalogs(): Catalog[]
    static getCatalogsDir(): string
    static getClipboard(): Clipboard
    static getConfig(): GLib.KeyFile
    static getLibDir(): string
    static getLocaleDir(): string
    static getModulesDir(): string
    static getPixmapsDir(): string
    /**
     * Finds an open project with `path`
     * @param projectPath The path of an open project
     */
    static getProjectByPath(projectPath: string): Project | null
    static getProjects(): Catalog[]
    static getWindow(): Gtk.Widget
    static isProjectLoaded(projectPath: string): boolean
    static removeProject(project: Project): void
    /**
     * Searches for `book,` `page` and `search` in the documentation.
     * @param book the name of a book
     * @param page the name of a page
     * @param search the search query
     */
    static searchDocs(book: string, page: string, search: string): void
    /**
     * Sets `accel_group` to app.
     * The acceleration group will made available for editor dialog windows
     * from the plugin backend.
     * @param accelGroup a #GtkAccelGroup to set
     */
    static setAccelGroup(accelGroup: Gtk.AccelGroup): void
    /**
     * Set the window of the application
     * @param window a #GtkWidget
     */
    static setWindow(window: Gtk.Widget): void
}

export module BaseEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `build-child`
     */
    export interface BuildChildSignalCallback {
        (gparent: GObject.Object, type: GObject.GType): GObject.Object | null
    }

    /**
     * Signal callback interface for `change-type`
     */
    export interface ChangeTypeSignalCallback {
        (object: GObject.Object, p0: GObject.GType): boolean
    }

    /**
     * Signal callback interface for `child-selected`
     */
    export interface ChildSelectedSignalCallback {
        (gchild: GObject.Object): void
    }

    /**
     * Signal callback interface for `delete-child`
     */
    export interface DeleteChildSignalCallback {
        (gparent: GObject.Object, gchild: GObject.Object): boolean
    }

    /**
     * Signal callback interface for `get-display-name`
     */
    export interface GetDisplayNameSignalCallback {
        (gchild: GObject.Object): string
    }

    /**
     * Signal callback interface for `move-child`
     */
    export interface MoveChildSignalCallback {
        (gparent: GObject.Object, gchild: GObject.Object): boolean
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.BaseEditor

        container?: GObject.Object | null
    }

}

export interface BaseEditor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.BaseEditor

    container: any

    // Own fields of Gladeui-2.0.Gladeui.BaseEditor

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.BaseEditor

    /**
     * Add `gchild` name and type property to `editor`
     * 
     * NOTE: This function is intended to be used in "child-selected" callbacks
     * @param gchild a #GladeWidget
     */
    addDefaultProperties(gchild: Widget): void
    /**
     * Add `gchild` editor of type `page` to the base editor
     * 
     * NOTE: This function is intended to be used in "child-selected" callbacks
     * @param gchild the #GladeWidget
     * @param page the #GladeEditorPageType of the desired page for `gchild`
     */
    addEditable(gchild: Widget, page: EditorPageType): void
    /**
     * Adds a new label to `editor`
     * 
     * NOTE: This function is intended to be used in "child-selected" callbacks
     * @param str the label string
     */
    addLabel(str: string): void
    /**
     * This convenience function create a new dialog window and packs `editor` in it.
     * @param title the window title
     * @param helpMarkup the help text
     */
    packNewWindow(title: string, helpMarkup: string): Gtk.Widget
    /**
     * Shows/hide `editor` 's signal editor
     * @param val whether to show the signal editor
     */
    setShowSignalEditor(val: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of Gladeui-2.0.Gladeui.BaseEditor

    changeType(gchild: Widget, type: GObject.GType): boolean
    childSelected(gchild: Widget): void
    deleteChild(parent: Widget, gchild: Widget): boolean
    getDisplayName(gchild: Widget): string
    moveChild(gparent: Widget, gchild: Widget): boolean

    // Own signals of Gladeui-2.0.Gladeui.BaseEditor

    connect(sigName: "build-child", callback: BaseEditor.BuildChildSignalCallback): number
    on(sigName: "build-child", callback: BaseEditor.BuildChildSignalCallback): number
    once(sigName: "build-child", callback: BaseEditor.BuildChildSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "build-child", type: GObject.GType, ...args: any[]): void
    connect(sigName: "change-type", callback: BaseEditor.ChangeTypeSignalCallback): number
    on(sigName: "change-type", callback: BaseEditor.ChangeTypeSignalCallback): number
    once(sigName: "change-type", callback: BaseEditor.ChangeTypeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-type", p0: GObject.GType, ...args: any[]): void
    connect(sigName: "child-selected", callback: BaseEditor.ChildSelectedSignalCallback): number
    on(sigName: "child-selected", callback: BaseEditor.ChildSelectedSignalCallback): number
    once(sigName: "child-selected", callback: BaseEditor.ChildSelectedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "child-selected", ...args: any[]): void
    connect(sigName: "delete-child", callback: BaseEditor.DeleteChildSignalCallback): number
    on(sigName: "delete-child", callback: BaseEditor.DeleteChildSignalCallback): number
    once(sigName: "delete-child", callback: BaseEditor.DeleteChildSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "delete-child", gchild: GObject.Object, ...args: any[]): void
    connect(sigName: "get-display-name", callback: BaseEditor.GetDisplayNameSignalCallback): number
    on(sigName: "get-display-name", callback: BaseEditor.GetDisplayNameSignalCallback): number
    once(sigName: "get-display-name", callback: BaseEditor.GetDisplayNameSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "get-display-name", ...args: any[]): void
    connect(sigName: "move-child", callback: BaseEditor.MoveChildSignalCallback): number
    on(sigName: "move-child", callback: BaseEditor.MoveChildSignalCallback): number
    once(sigName: "move-child", callback: BaseEditor.MoveChildSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "move-child", gchild: GObject.Object, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.BaseEditor

    connect(sigName: "notify::container", callback: any): number
    on(sigName: "notify::container", callback: any): number
    once(sigName: "notify::container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::container", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BaseEditor extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.BaseEditor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.BaseEditor

    constructor(config?: BaseEditor.ConstructorProperties) 
    _init(config?: BaseEditor.ConstructorProperties): void
}

export module CellRendererIcon {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate`
     */
    export interface ActivateSignalCallback {
        (object: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.CellRendererPixbuf.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.CellRendererIcon

        activatable?: boolean | null
        active?: boolean | null
    }

}

export interface CellRendererIcon {

    // Own properties of Gladeui-2.0.Gladeui.CellRendererIcon

    activatable: boolean
    active: boolean

    // Own fields of Gladeui-2.0.Gladeui.CellRendererIcon

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.CellRendererIcon

    getActivatable(): boolean
    getActive(): boolean
    setActivatable(setting: boolean): void
    setActive(setting: boolean): void

    // Own virtual methods of Gladeui-2.0.Gladeui.CellRendererIcon

    activate(path: string): void

    // Overloads of activate

    /**
     * Passes an activate event to the cell renderer for possible processing.
     * Some cell renderers may use events; for example, #GtkCellRendererToggle
     * toggles when it gets a mouse click.
     * @virtual 
     * @param event a #GdkEvent
     * @param widget widget that received the event
     * @param path widget-dependent string representation of the event location;    e.g. for #GtkTreeView, a string representation of #GtkTreePath
     * @param backgroundArea background area as passed to gtk_cell_renderer_render()
     * @param cellArea cell area as passed to gtk_cell_renderer_render()
     * @param flags render flags
     */
    activate(event: Gdk.Event, widget: Gtk.Widget, path: string, backgroundArea: Gdk.Rectangle, cellArea: Gdk.Rectangle, flags: Gtk.CellRendererState): boolean

    // Own signals of Gladeui-2.0.Gladeui.CellRendererIcon

    connect(sigName: "activate", callback: CellRendererIcon.ActivateSignalCallback): number
    on(sigName: "activate", callback: CellRendererIcon.ActivateSignalCallback): number
    once(sigName: "activate", callback: CellRendererIcon.ActivateSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.CellRendererIcon

    connect(sigName: "notify::activatable", callback: any): number
    on(sigName: "notify::activatable", callback: any): number
    once(sigName: "notify::activatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::activatable", ...args: any[]): void
    connect(sigName: "notify::active", callback: any): number
    on(sigName: "notify::active", callback: any): number
    once(sigName: "notify::active", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::active", ...args: any[]): void
    connect(sigName: "notify::follow-state", callback: any): number
    on(sigName: "notify::follow-state", callback: any): number
    once(sigName: "notify::follow-state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::follow-state", ...args: any[]): void
    connect(sigName: "notify::gicon", callback: any): number
    on(sigName: "notify::gicon", callback: any): number
    once(sigName: "notify::gicon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::gicon", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::pixbuf", callback: any): number
    on(sigName: "notify::pixbuf", callback: any): number
    once(sigName: "notify::pixbuf", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-closed", callback: any): number
    on(sigName: "notify::pixbuf-expander-closed", callback: any): number
    once(sigName: "notify::pixbuf-expander-closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-expander-closed", ...args: any[]): void
    connect(sigName: "notify::pixbuf-expander-open", callback: any): number
    on(sigName: "notify::pixbuf-expander-open", callback: any): number
    once(sigName: "notify::pixbuf-expander-open", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pixbuf-expander-open", ...args: any[]): void
    connect(sigName: "notify::stock-detail", callback: any): number
    on(sigName: "notify::stock-detail", callback: any): number
    once(sigName: "notify::stock-detail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-detail", ...args: any[]): void
    connect(sigName: "notify::stock-id", callback: any): number
    on(sigName: "notify::stock-id", callback: any): number
    once(sigName: "notify::stock-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-id", ...args: any[]): void
    connect(sigName: "notify::stock-size", callback: any): number
    on(sigName: "notify::stock-size", callback: any): number
    once(sigName: "notify::stock-size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::stock-size", ...args: any[]): void
    connect(sigName: "notify::surface", callback: any): number
    on(sigName: "notify::surface", callback: any): number
    once(sigName: "notify::surface", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::surface", ...args: any[]): void
    connect(sigName: "notify::cell-background", callback: any): number
    on(sigName: "notify::cell-background", callback: any): number
    once(sigName: "notify::cell-background", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background", ...args: any[]): void
    connect(sigName: "notify::cell-background-gdk", callback: any): number
    on(sigName: "notify::cell-background-gdk", callback: any): number
    once(sigName: "notify::cell-background-gdk", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-gdk", ...args: any[]): void
    connect(sigName: "notify::cell-background-rgba", callback: any): number
    on(sigName: "notify::cell-background-rgba", callback: any): number
    once(sigName: "notify::cell-background-rgba", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-rgba", ...args: any[]): void
    connect(sigName: "notify::cell-background-set", callback: any): number
    on(sigName: "notify::cell-background-set", callback: any): number
    once(sigName: "notify::cell-background-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cell-background-set", ...args: any[]): void
    connect(sigName: "notify::editing", callback: any): number
    on(sigName: "notify::editing", callback: any): number
    once(sigName: "notify::editing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editing", ...args: any[]): void
    connect(sigName: "notify::height", callback: any): number
    on(sigName: "notify::height", callback: any): number
    once(sigName: "notify::height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::height", ...args: any[]): void
    connect(sigName: "notify::is-expanded", callback: any): number
    on(sigName: "notify::is-expanded", callback: any): number
    once(sigName: "notify::is-expanded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expanded", ...args: any[]): void
    connect(sigName: "notify::is-expander", callback: any): number
    on(sigName: "notify::is-expander", callback: any): number
    once(sigName: "notify::is-expander", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-expander", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: "notify::width", callback: any): number
    on(sigName: "notify::width", callback: any): number
    once(sigName: "notify::width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::width", ...args: any[]): void
    connect(sigName: "notify::xalign", callback: any): number
    on(sigName: "notify::xalign", callback: any): number
    once(sigName: "notify::xalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xalign", ...args: any[]): void
    connect(sigName: "notify::xpad", callback: any): number
    on(sigName: "notify::xpad", callback: any): number
    once(sigName: "notify::xpad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::xpad", ...args: any[]): void
    connect(sigName: "notify::yalign", callback: any): number
    on(sigName: "notify::yalign", callback: any): number
    once(sigName: "notify::yalign", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::yalign", ...args: any[]): void
    connect(sigName: "notify::ypad", callback: any): number
    on(sigName: "notify::ypad", callback: any): number
    once(sigName: "notify::ypad", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ypad", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CellRendererIcon extends Gtk.CellRendererPixbuf {

    // Own properties of Gladeui-2.0.Gladeui.CellRendererIcon

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.CellRendererIcon

    constructor(config?: CellRendererIcon.ConstructorProperties) 
    constructor() 
    static new(): CellRendererIcon
    _init(config?: CellRendererIcon.ConstructorProperties): void
}

export module Clipboard {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Clipboard {

    // Own properties of Gladeui-2.0.Gladeui.Clipboard

    readonly hasSelection: boolean

    // Own fields of Gladeui-2.0.Gladeui.Clipboard

    parentInstance: GObject.Object

    // Owm methods of Gladeui-2.0.Gladeui.Clipboard

    /**
     * Adds `widgets` to `clipboard`.
     * This increases the reference count of each #GladeWidget in `widgets`.
     * @param widgets a #GList of #GladeWidgets
     */
    add(widgets: Widget[]): void
    /**
     * Removes all widgets from the `clipboard`.
     */
    clear(): void
    getHasSelection(): boolean
    widgets(): Widget[]

    // Class property signals of Gladeui-2.0.Gladeui.Clipboard

    connect(sigName: "notify::has-selection", callback: any): number
    on(sigName: "notify::has-selection", callback: any): number
    once(sigName: "notify::has-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Clipboard extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Clipboard

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Clipboard

    constructor(config?: Clipboard.ConstructorProperties) 
    constructor() 
    static new(): Clipboard
    _init(config?: Clipboard.ConstructorProperties): void
}

export module Command {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Command {

    // Own fields of Gladeui-2.0.Gladeui.Command

    parentInstance: GObject.Object

    // Owm methods of Gladeui-2.0.Gladeui.Command

    // Has conflict: collapse(other: Command): void
    description(): string
    // Has conflict: execute(): boolean
    groupId(): number
    // Has conflict: undo(): boolean
    // Has conflict: unifies(other: Command): boolean

    // Own virtual methods of Gladeui-2.0.Gladeui.Command

    /**
     * Merges `other` into `command,` so that `command` now
     * covers both commands and `other` can be dispensed with.
     * @virtual 
     * @param other another #GladeCommand
     */
    collapse(other: Command): void
    /**
     * Executes `command`
     * @virtual 
     */
    execute(): boolean
    /**
     * Undo the effects of `command`
     * @virtual 
     */
    undo(): boolean
    /**
     * Checks whether `command` and `other` can be unified
     * to make one single command.
     * @virtual 
     * @param other another #GladeCommand
     */
    unifies(other: Command): boolean

    // Class property signals of Gladeui-2.0.Gladeui.Command

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Command extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Command

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Command

    constructor(config?: Command.ConstructorProperties) 
    _init(config?: Command.ConstructorProperties): void
    /**
     * Performs an add command on all widgets in `widgets` to `parent,` possibly
     * replacing `placeholder` (note toplevels don't need a parent; the active project
     * will be used when pasting toplevel objects).
     * Pasted widgets will persist packing properties from their cut/copy source
     * while newly added widgets will prefer packing defaults.
     * @param widgets a #GList
     * @param parent a #GladeWidget
     * @param placeholder a #GladePlaceholder
     * @param project a #GladeProject
     * @param pasting whether we are pasting an existing widget or creating a new one.
     */
    static add(widgets: Widget[], parent: Widget, placeholder: Placeholder, project: Project, pasting: boolean): void
    /**
     * TODO: write me
     * @param gladeWidget a #GladeWidget
     * @param signal a #GladeSignal
     */
    static addSignal(gladeWidget: Widget, signal: Signal): void
    /**
     * TODO: write me
     * @param gladeWidget a #GladeWidget
     * @param oldSignal a #GladeSignal
     * @param newSignal a #GladeSignal
     */
    static changeSignal(gladeWidget: Widget, oldSignal: Signal, newSignal: Signal): void
    /**
     * Creates a new widget using `adaptor` and put in place of the `placeholder`
     * in the `project`
     * @param adaptor A #GladeWidgetAdaptor
     * @param parent the parent #GladeWidget to add the new widget to.
     * @param placeholder the placeholder which will be substituted by the widget
     * @param project the project his widget belongs to.
     */
    static create(adaptor: WidgetAdaptor, parent: Widget | null, placeholder: Placeholder | null, project: Project): Widget
    /**
     * Removes the list of widgets and adds them to the clipboard.
     * @param widgets a #GList of #GladeWidgets
     */
    static cut(widgets: Widget[]): void
    /**
     * Performs a delete command on the list of widgets.
     * @param widgets a #GList of #GladeWidgets
     */
    static delete(widgets: Widget[]): void
    /**
     * Performs a drag-n-drop command, i.e. removes the list of widgets and adds them
     * to the new parent, possibly replacing `placeholder` (note toplevels dont need a
     * parent; the active project will be used when pasting toplevel objects).
     * @param widgets a #GList of #GladeWidget
     * @param parent a #GladeWidget
     * @param placeholder a #GladePlaceholder
     */
    static dnd(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null): void
    static getGroupDepth(): number
    /**
     * Sets `locked` to be in a locked up state
     * spoken for by `widget,` locked widgets cannot
     * be removed from the project until unlocked.
     * @param widget A #GladeWidget
     * @param locked The #GladeWidget to lock
     */
    static lockWidget(widget: Widget, locked: Widget): void
    /**
     * Performs a paste command on all widgets in `widgets` to `parent,` possibly
     * replacing `placeholder` (note toplevels dont need a parent; the active project
     * will be used when pasting toplevel objects).
     * @param widgets a #GList of #GladeWidget
     * @param parent a #GladeWidget
     * @param placeholder a #GladePlaceholder
     * @param project a #GladeProject
     */
    static paste(widgets: Widget[], parent: Widget | null, placeholder: Placeholder | null, project: Project): void
    /**
     * Mark the end of a command group.
     */
    static popGroup(): void
    /**
     * TODO: write me
     * @param gladeWidget a #GladeWidget
     * @param signal a #GladeSignal
     */
    static removeSignal(gladeWidget: Widget, signal: Signal): void
    /**
     * Sets the i18n data on the property.
     * @param property a #GladeProperty
     * @param translatable a #gboolean
     * @param context a #const gchar *
     * @param comment a #const gchar *
     */
    static setI18n(property: Property, translatable: boolean, context: string, comment: string): void
    static setName(gladeWidget: Widget, name: string): void
    /**
     * Sets `domain` as the translation domain for `project`.
     * @param project A #GladeProject
     * @param domain The translation domain for `project`
     */
    static setProjectDomain(project: Project, domain: string): void
    /**
     * Sets the license agreement for `project`. It will be saved in the xml as comment.
     * @param project A #GladeProject
     * @param license License of `project`
     */
    static setProjectLicense(project: Project, license: string): void
    /**
     * Sets a resource path `project`.
     * @param project A #GladeProject
     * @param path path to load resources from.
     */
    static setProjectResourcePath(project: Project, path: string): void
    /**
     * Sets the target of `catalog` to `major`.`minor` in `project`.
     * @param project A #GladeProject
     * @param catalog The name of the catalog to set the project's target for
     * @param major The new major version of `catalog` to target
     * @param minor The new minor version of `catalog` to target
     */
    static setProjectTarget(project: Project, catalog: string, major: number, minor: number): void
    /**
     * Sets `widget` to be the template widget in `project`.
     * @param project A #GladeProject
     * @param widget The #GladeWidget to make template
     */
    static setProjectTemplate(project: Project, widget: Widget): void
    static setPropertiesList(project: Project, props: Property[]): void
    /**
     * Enables or disables `property`.
     * 
     * `property` must be an optional property.
     * @param property An optional #GladeProperty
     * @param enabled Whether the property should be enabled
     */
    static setPropertyEnabled(property: Property, enabled: boolean): void
    static setPropertyValue(property: Property, value: any): void
    /**
     * Unlocks `widget` so that it can be removed
     * from the project again
     * @param widget A #GladeWidget
     */
    static unlockWidget(widget: Widget): void
}

export module DesignView {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.DesignView

        project?: Project | null
    }

}

export interface DesignView extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.DesignView

    readonly project: Project

    // Own fields of Gladeui-2.0.Gladeui.DesignView

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.DesignView

    getProject(): Project

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Gladeui-2.0.Gladeui.DesignView

    connect(sigName: "notify::project", callback: any): number
    on(sigName: "notify::project", callback: any): number
    once(sigName: "notify::project", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DesignView extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.DesignView

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.DesignView

    constructor(config?: DesignView.ConstructorProperties) 
    constructor(project: Project) 
    static new(project: Project): DesignView

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: DesignView.ConstructorProperties): void
    static getFromProject(project: Project): DesignView | null
}

export module EPropBool {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropBool extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropBool

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropBool extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropBool

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropBool

    constructor(config?: EPropBool.ConstructorProperties) 
    _init(config?: EPropBool.ConstructorProperties): void
}

export module EPropCheck {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropCheck extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropCheck

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropCheck extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropCheck

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropCheck

    constructor(config?: EPropCheck.ConstructorProperties) 
    _init(config?: EPropCheck.ConstructorProperties): void
}

export module EPropColor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropColor extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropColor

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropColor extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropColor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropColor

    constructor(config?: EPropColor.ConstructorProperties) 
    _init(config?: EPropColor.ConstructorProperties): void
}

export module EPropEnum {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropEnum extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropEnum

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropEnum extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropEnum

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropEnum

    constructor(config?: EPropEnum.ConstructorProperties) 
    _init(config?: EPropEnum.ConstructorProperties): void
}

export module EPropFlags {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropFlags extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropFlags

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropFlags extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropFlags

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropFlags

    constructor(config?: EPropFlags.ConstructorProperties) 
    _init(config?: EPropFlags.ConstructorProperties): void
}

export module EPropNamedIcon {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropNamedIcon extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropNamedIcon

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropNamedIcon extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropNamedIcon

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropNamedIcon

    constructor(config?: EPropNamedIcon.ConstructorProperties) 
    _init(config?: EPropNamedIcon.ConstructorProperties): void
}

export module EPropNumeric {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropNumeric extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropNumeric

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropNumeric extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropNumeric

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropNumeric

    constructor(config?: EPropNumeric.ConstructorProperties) 
    _init(config?: EPropNumeric.ConstructorProperties): void
}

export module EPropObject {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropObject extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropObject

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropObject extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropObject

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropObject

    constructor(config?: EPropObject.ConstructorProperties) 
    _init(config?: EPropObject.ConstructorProperties): void
}

export module EPropObjects {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropObjects extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropObjects

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropObjects extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropObjects

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropObjects

    constructor(config?: EPropObjects.ConstructorProperties) 
    _init(config?: EPropObjects.ConstructorProperties): void
}

export module EPropText {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropText extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropText

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropText extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropText

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropText

    constructor(config?: EPropText.ConstructorProperties) 
    _init(config?: EPropText.ConstructorProperties): void
}

export module EPropUnichar {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, EditorProperty.ConstructorProperties {
    }

}

export interface EPropUnichar extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Conflicting properties

    parentInstance: any

    // Conflicting methods

    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void
    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EPropUnichar

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EPropUnichar extends EditorProperty {

    // Own properties of Gladeui-2.0.Gladeui.EPropUnichar

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EPropUnichar

    constructor(config?: EPropUnichar.ConstructorProperties) 
    _init(config?: EPropUnichar.ConstructorProperties): void
}

export module Editor {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Editor

        showBoder?: boolean | null
        showClassField?: boolean | null
        widget?: Widget | null
    }

}

export interface Editor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.Editor

    readonly classField: string
    showBoder: boolean
    showClassField: boolean
    readonly showInfo: boolean
    readonly signalEditor: SignalEditor
    widget: any

    // Own fields of Gladeui-2.0.Gladeui.Editor

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.Editor

    hideClassField(): void
    hideInfo(): void
    /**
     * Load `widget` into `editor`. If `widget` is %NULL, clear the editor.
     * @param widget a #GladeWidget
     */
    loadWidget(widget: Widget): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Class property signals of Gladeui-2.0.Gladeui.Editor

    connect(sigName: "notify::class-field", callback: any): number
    on(sigName: "notify::class-field", callback: any): number
    once(sigName: "notify::class-field", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-field", ...args: any[]): void
    connect(sigName: "notify::show-boder", callback: any): number
    on(sigName: "notify::show-boder", callback: any): number
    once(sigName: "notify::show-boder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-boder", ...args: any[]): void
    connect(sigName: "notify::show-class-field", callback: any): number
    on(sigName: "notify::show-class-field", callback: any): number
    once(sigName: "notify::show-class-field", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-class-field", ...args: any[]): void
    connect(sigName: "notify::show-info", callback: any): number
    on(sigName: "notify::show-info", callback: any): number
    once(sigName: "notify::show-info", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-info", ...args: any[]): void
    connect(sigName: "notify::signal-editor", callback: any): number
    on(sigName: "notify::signal-editor", callback: any): number
    once(sigName: "notify::signal-editor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::signal-editor", ...args: any[]): void
    connect(sigName: "notify::widget", callback: any): number
    on(sigName: "notify::widget", callback: any): number
    once(sigName: "notify::widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Editor extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.Editor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Editor

    constructor(config?: Editor.ConstructorProperties) 
    constructor() 
    static new(): Editor

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Editor.ConstructorProperties): void
    /**
     * This convenience function creates a new dialog window to edit `widget`
     * specifically.
     * @param widget a #GladeWidget
     */
    static dialogForWidget(widget: Widget): Gtk.Widget
    static queryDialog(widget: Widget): boolean
    static resetDialogRun(parent: Gtk.Widget, gwidget: Widget): void
}

export module EditorProperty {

    // Signal callback interfaces

    /**
     * Signal callback interface for `commit`
     */
    export interface CommitSignalCallback {
        (arg1: object | null): void
    }

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (arg1: Property): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.EditorProperty

        customText?: string | null
        disableCheck?: boolean | null
        propertyDef?: object | null
        useCommand?: boolean | null
    }

}

export interface EditorProperty extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.EditorProperty

    customText: string
    disableCheck: boolean
    readonly propertyDef: object
    useCommand: boolean

    // Own fields of Gladeui-2.0.Gladeui.EditorProperty

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.EditorProperty

    // Has conflict: commit(value: any): void
    commitNoCallback(value: any): void
    getCustomText(): string
    getDisableCheck(): boolean
    getItemLabel(): Gtk.Widget
    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    getPropertyDef(): PropertyDef
    // Has conflict: load(property: Property): void
    /**
     * Convenience function to load the appropriate #GladeProperty into
     * `eprop` from `widget`
     * @param widget A #GladeWidget
     */
    loadByWidget(widget: Widget): void
    loading(): boolean
    setCustomText(customText: string): void
    setDisableCheck(disableCheck: boolean): void

    // Conflicting methods

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Own virtual methods of Gladeui-2.0.Gladeui.EditorProperty

    changed(property: Property): object | null
    /**
     * Commits `value` to the property currently being edited by `eprop`.
     * @virtual 
     * @param value The #GValue to commit
     */
    commit(value: any): void
    /**
     * Loads `property` values into `eprop` and connects.
     * (the editor property will watch the property's value
     * until its loaded with another property or %NULL)
     * @virtual 
     * @param property A #GladeProperty
     */
    load(property: Property): void

    // Overloads of load

    /**
     * Loads `widget` property values into `editable`
     * (the editable will watch the widgets properties
     * until its loaded with another widget or %NULL)
     * @virtual 
     * @param widget the #GladeWidget to load
     */
    load(widget: Widget): void

    // Own signals of Gladeui-2.0.Gladeui.EditorProperty

    connect(sigName: "commit", callback: EditorProperty.CommitSignalCallback): number
    on(sigName: "commit", callback: EditorProperty.CommitSignalCallback): number
    once(sigName: "commit", callback: EditorProperty.CommitSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "commit", ...args: any[]): void
    connect(sigName: "value-changed", callback: EditorProperty.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: EditorProperty.ValueChangedSignalCallback): number
    once(sigName: "value-changed", callback: EditorProperty.ValueChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "value-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.EditorProperty

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::property-def", callback: any): number
    on(sigName: "notify::property-def", callback: any): number
    once(sigName: "notify::property-def", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-def", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorProperty extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.EditorProperty

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EditorProperty

    constructor(config?: EditorProperty.ConstructorProperties) 
    _init(config?: EditorProperty.ConstructorProperties): void
    /**
     * Runs a dialog and updates the provided values.
     * @param parent The parent widget for the dialog.
     * @param text A read/write pointer to the text property
     * @param context A read/write pointer to the translation context
     * @param comment A read/write pointer to the translator comment
     * @param translatable A read/write pointer to the translatable setting]
     */
    static showI18nDialog(parent: Gtk.Widget, text: string, context: string, comment: string, translatable: boolean): boolean
    static showObjectDialog(project: Project, title: string, parent: Gtk.Widget, objectType: GObject.GType, exception: Widget, object: Widget): boolean
    static showResourceDialog(project: Project, parent: Gtk.Widget, filename: string): boolean
}

export module EditorSkeleton {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {
    }

}

export interface EditorSkeleton extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own fields of Gladeui-2.0.Gladeui.EditorSkeleton

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.EditorSkeleton

    addEditor(editor: Editable): void

    // Conflicting methods

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EditorSkeleton

    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorSkeleton extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.EditorSkeleton

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EditorSkeleton

    constructor(config?: EditorSkeleton.ConstructorProperties) 
    constructor() 
    static new(): EditorSkeleton

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: EditorSkeleton.ConstructorProperties): void
}

export module EditorTable {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Grid.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.EditorTable

        pageType?: EditorPageType | null
    }

}

export interface EditorTable extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.EditorTable

    readonly pageType: EditorPageType

    // Own fields of Gladeui-2.0.Gladeui.EditorTable

    parentInstance: any

    // Conflicting methods

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.EditorTable

    connect(sigName: "notify::page-type", callback: any): number
    on(sigName: "notify::page-type", callback: any): number
    once(sigName: "notify::page-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::page-type", ...args: any[]): void
    connect(sigName: "notify::baseline-row", callback: any): number
    on(sigName: "notify::baseline-row", callback: any): number
    once(sigName: "notify::baseline-row", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-row", ...args: any[]): void
    connect(sigName: "notify::column-homogeneous", callback: any): number
    on(sigName: "notify::column-homogeneous", callback: any): number
    once(sigName: "notify::column-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-homogeneous", ...args: any[]): void
    connect(sigName: "notify::column-spacing", callback: any): number
    on(sigName: "notify::column-spacing", callback: any): number
    once(sigName: "notify::column-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::column-spacing", ...args: any[]): void
    connect(sigName: "notify::row-homogeneous", callback: any): number
    on(sigName: "notify::row-homogeneous", callback: any): number
    once(sigName: "notify::row-homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-homogeneous", ...args: any[]): void
    connect(sigName: "notify::row-spacing", callback: any): number
    on(sigName: "notify::row-spacing", callback: any): number
    once(sigName: "notify::row-spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::row-spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EditorTable extends Gtk.Grid {

    // Own properties of Gladeui-2.0.Gladeui.EditorTable

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.EditorTable

    constructor(config?: EditorTable.ConstructorProperties) 
    /**
     * Creates a new #GladeEditorTable.
     * @constructor 
     * @param adaptor A #GladeWidgetAdaptor
     * @param type The #GladeEditorPageType
     */
    constructor(adaptor: WidgetAdaptor, type: EditorPageType) 
    /**
     * Creates a new #GladeEditorTable.
     * @constructor 
     * @param adaptor A #GladeWidgetAdaptor
     * @param type The #GladeEditorPageType
     */
    static new(adaptor: WidgetAdaptor, type: EditorPageType): EditorTable

    // Overloads of new

    /**
     * Creates a new grid widget.
     * @constructor 
     */
    static new(): Gtk.Grid
    _init(config?: EditorTable.ConstructorProperties): void
}

export module Inspector {

    // Signal callback interfaces

    /**
     * Signal callback interface for `item-activated`
     */
    export interface ItemActivatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Inspector

        project?: Project | null
    }

}

export interface Inspector extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.Inspector

    project: Project

    // Own fields of Gladeui-2.0.Gladeui.Inspector

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.Inspector

    /**
     * Note that the method does not ref the returned #GladeProject.
     */
    getProject(): Project
    /**
     * Returns the selected items in the inspector.
     */
    getSelectedItems(): Widget[]
    /**
     * Sets the current project of `inspector` to `project`. To unset the current
     * project, pass %NULL for `project`.
     * @param project a #GladeProject
     */
    setProject(project: Project): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Inspector

    itemActivated(): void
    selectionChanged(): void

    // Own signals of Gladeui-2.0.Gladeui.Inspector

    connect(sigName: "item-activated", callback: Inspector.ItemActivatedSignalCallback): number
    on(sigName: "item-activated", callback: Inspector.ItemActivatedSignalCallback): number
    once(sigName: "item-activated", callback: Inspector.ItemActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "item-activated", ...args: any[]): void
    connect(sigName: "selection-changed", callback: Inspector.SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: Inspector.SelectionChangedSignalCallback): number
    once(sigName: "selection-changed", callback: Inspector.SelectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Inspector

    connect(sigName: "notify::project", callback: any): number
    on(sigName: "notify::project", callback: any): number
    once(sigName: "notify::project", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * The #GladeInspector struct contains private data only, and should be manipulated using the functions below.
 * @class 
 */
export class Inspector extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.Inspector

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Inspector

    constructor(config?: Inspector.ConstructorProperties) 
    /**
     * Creates a new #GladeInspector
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GladeInspector
     * @constructor 
     */
    static new(): Inspector

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    /**
     * Creates a new #GladeInspector with `project`
     * @constructor 
     * @param project a #GladeProject
     */
    static newWithProject(project: Project): Inspector
    _init(config?: Inspector.ConstructorProperties): void
}

export module NamedIconChooserDialog {

    // Signal callback interfaces

    /**
     * Signal callback interface for `icon-activated`
     */
    export interface IconActivatedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Dialog.ConstructorProperties {
    }

}

export interface NamedIconChooserDialog extends Atk.ImplementorIface, Gtk.Buildable {

    // Conflicting properties

    readonly window: Gtk.Window & Gdk.Window & Gdk.Window

    // Own fields of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    getContext(): string
    getIconName(): string

    // Overloads of getIconName

    /**
     * Returns the name of the themed icon for the window,
     * see gtk_window_set_icon_name().
     */
    getIconName(): string | null
    setContext(context: string): boolean
    setIconName(iconName: string): void

    // Overloads of setIconName

    /**
     * Sets the icon for the window from a named themed icon.
     * See the docs for #GtkIconTheme for more details.
     * On some platforms, the window icon is not used at all.
     * 
     * Note that this has nothing to do with the WM_ICON_NAME
     * property which is mentioned in the ICCCM.
     * @param name the name of the themed icon
     */
    setIconName(name: string | null): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    iconActivated(): void
    selectionChanged(): void

    // Own signals of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    connect(sigName: "icon-activated", callback: NamedIconChooserDialog.IconActivatedSignalCallback): number
    on(sigName: "icon-activated", callback: NamedIconChooserDialog.IconActivatedSignalCallback): number
    once(sigName: "icon-activated", callback: NamedIconChooserDialog.IconActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "icon-activated", ...args: any[]): void
    connect(sigName: "selection-changed", callback: NamedIconChooserDialog.SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: NamedIconChooserDialog.SelectionChangedSignalCallback): number
    once(sigName: "selection-changed", callback: NamedIconChooserDialog.SelectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "selection-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.NamedIconChooserDialog

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

export class NamedIconChooserDialog extends Gtk.Dialog {

    // Own properties of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.NamedIconChooserDialog

    constructor(config?: NamedIconChooserDialog.ConstructorProperties) 
    _init(config?: NamedIconChooserDialog.ConstructorProperties): void

    // Conflicting static methods

    static new(...args: any[]): any
}

export module Palette {

    // Signal callback interfaces

    /**
     * Signal callback interface for `refresh`
     */
    export interface RefreshSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Palette

        itemAppearance?: ItemAppearance | null
        project?: Project | null
        showSelectorButton?: boolean | null
        useSmallItemIcons?: boolean | null
    }

}

export interface Palette extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.Palette

    itemAppearance: ItemAppearance
    project: Project
    showSelectorButton: boolean
    useSmallItemIcons: boolean

    // Own fields of Gladeui-2.0.Gladeui.Palette

    parentInstance: any
    priv: PalettePrivate

    // Owm methods of Gladeui-2.0.Gladeui.Palette

    getItemAppearance(): ItemAppearance
    getProject(): Project
    getShowSelectorButton(): boolean
    getToolPalette(): Gtk.ToolPalette
    getUseSmallItemIcons(): boolean
    /**
     * Sets the appearance of the palette items.
     * @param itemAppearance the item appearance
     */
    setItemAppearance(itemAppearance: ItemAppearance): void
    setProject(project: Project): void
    /**
     * Sets whether to show the internal widget selector button
     * @param showSelectorButton whether to show selector button
     */
    setShowSelectorButton(showSelectorButton: boolean): void
    /**
     * Sets whether to use small item icons.
     * @param useSmallItemIcons Whether to use small item icons
     */
    setUseSmallItemIcons(useSmallItemIcons: boolean): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Palette

    refresh(): void

    // Own signals of Gladeui-2.0.Gladeui.Palette

    connect(sigName: "refresh", callback: Palette.RefreshSignalCallback): number
    on(sigName: "refresh", callback: Palette.RefreshSignalCallback): number
    once(sigName: "refresh", callback: Palette.RefreshSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "refresh", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Palette

    connect(sigName: "notify::item-appearance", callback: any): number
    on(sigName: "notify::item-appearance", callback: any): number
    once(sigName: "notify::item-appearance", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::item-appearance", ...args: any[]): void
    connect(sigName: "notify::project", callback: any): number
    on(sigName: "notify::project", callback: any): number
    once(sigName: "notify::project", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::show-selector-button", callback: any): number
    on(sigName: "notify::show-selector-button", callback: any): number
    once(sigName: "notify::show-selector-button", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::show-selector-button", ...args: any[]): void
    connect(sigName: "notify::use-small-item-icons", callback: any): number
    on(sigName: "notify::use-small-item-icons", callback: any): number
    once(sigName: "notify::use-small-item-icons", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-small-item-icons", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Palette extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.Palette

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Palette

    constructor(config?: Palette.ConstructorProperties) 
    /**
     * Creates a new #GladePalette widget
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GladePalette widget
     * @constructor 
     */
    static new(): Palette

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: Palette.ConstructorProperties): void
}

export interface ParamObjects {
}

export class ParamObjects extends GObject.ParamSpec {

    // Own properties of Gladeui-2.0.Gladeui.ParamObjects

    static name: string
}

export module Placeholder {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Scrollable.ConstructorProperties, Gtk.Widget.ConstructorProperties {
    }

}

export interface Placeholder extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Scrollable {

    // Own fields of Gladeui-2.0.Gladeui.Placeholder

    widget: Gtk.Widget
    priv: PlaceholderPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Placeholder

    getParent(): Widget | null

    // Overloads of getParent

    /**
     * Returns the parent container of `widget`.
     */
    getParent(): Gtk.Widget | null
    getProject(): Project | null
    packingActions(): WidgetAction[]

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

    // Class property signals of Gladeui-2.0.Gladeui.Placeholder

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

export class Placeholder extends Gtk.Widget {

    // Own properties of Gladeui-2.0.Gladeui.Placeholder

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Placeholder

    constructor(config?: Placeholder.ConstructorProperties) 
    constructor() 
    static new(): Placeholder
    _init(config?: Placeholder.ConstructorProperties): void
}

export module Project {

    // Signal callback interfaces

    /**
     * Signal callback interface for `activate-signal-handler`
     */
    export interface ActivateSignalHandlerSignalCallback {
        (gladewidget: Widget, signal: Signal): void
    }

    /**
     * Signal callback interface for `add-signal-handler`
     */
    export interface AddSignalHandlerSignalCallback {
        (gladewidget: Widget, signal: Signal): void
    }

    /**
     * Signal callback interface for `add-widget`
     */
    export interface AddWidgetSignalCallback {
        (arg1: Widget): void
    }

    /**
     * Signal callback interface for `change-signal-handler`
     */
    export interface ChangeSignalHandlerSignalCallback {
        (gladewidget: Widget, oldSignal: Signal, newSignal: Signal): void
    }

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (arg1: Command, arg2: boolean): void
    }

    /**
     * Signal callback interface for `close`
     */
    export interface CloseSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `load-progress`
     */
    export interface LoadProgressSignalCallback {
        (objectsTotal: number, objectsLoaded: number): void
    }

    /**
     * Signal callback interface for `parse-began`
     */
    export interface ParseBeganSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `parse-finished`
     */
    export interface ParseFinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `remove-signal-handler`
     */
    export interface RemoveSignalHandlerSignalCallback {
        (gladewidget: Widget, signal: Signal): void
    }

    /**
     * Signal callback interface for `remove-widget`
     */
    export interface RemoveWidgetSignalCallback {
        (arg1: Widget): void
    }

    /**
     * Signal callback interface for `selection-changed`
     */
    export interface SelectionChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `targets-changed`
     */
    export interface TargetsChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `widget-name-changed`
     */
    export interface WidgetNameChangedSignalCallback {
        (arg1: Widget): void
    }

    /**
     * Signal callback interface for `widget-visibility-changed`
     */
    export interface WidgetVisibilityChangedSignalCallback {
        (widget: Widget, visible: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Project

        cssProviderPath?: string | null
        license?: string | null
        resourcePath?: string | null
        template?: Widget | null
        translationDomain?: string | null
    }

}

export interface Project extends Gtk.TreeDragSource, Gtk.TreeModel {

    // Own properties of Gladeui-2.0.Gladeui.Project

    readonly addItem: WidgetAdaptor
    cssProviderPath: string
    readonly hasSelection: boolean
    license: string
    readonly modified: boolean
    readonly path: string
    readonly pointerMode: PointerMode
    readonly readOnly: boolean
    resourcePath: string
    template: Widget
    translationDomain: string

    // Own fields of Gladeui-2.0.Gladeui.Project

    parentInstance: GObject.Object
    priv: ProjectPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Project

    // Has conflict: addObject(object: GObject.Object): void
    /**
     * Saves an autosave snapshot of `project` to it's currently set path
     * 
     * If the project was never saved, nothing is done and %TRUE is returned.
     */
    autosave(): boolean
    /**
     * Checks whether `name` is an appropriate name for `widget`.
     * @param widget the #GladeWidget intended to receive a new name
     * @param name base name of the widget to create
     */
    availableWidgetName(widget: Widget, name: string): boolean
    /**
     * Backup the last file which `project` has saved to
     * or was loaded from.
     * 
     * If `path` is not the same as the current project
     * path, then the current project path will be
     * backed up under the new location.
     * 
     * If this the first save, and no persisted file
     * exists, then %TRUE is returned and no backup is made.
     * @param path location to save glade file
     */
    backup(path: string): boolean
    cancelLoad(): void
    checkReordered(parent: Widget, oldOrder: GObject.Object[]): void
    commandCut(): void
    commandDelete(): void
    commandPaste(placeholder: Placeholder): void
    copySelection(): void
    displayDependencies(): string
    getAddItem(): WidgetAdaptor
    getCssProviderPath(): string
    getFileMtime(): number
    getHasSelection(): boolean
    getLicense(): string
    /**
     * Get's whether the project has been modified since it was last saved.
     */
    getModified(): boolean
    getName(): string
    getObjects(): GObject.Object[]
    getPath(): string

    // Overloads of getPath

    /**
     * Returns a newly-created #GtkTreePath-struct referenced by `iter`.
     * 
     * This path should be freed with gtk_tree_path_free().
     * @virtual 
     * @param iter the #GtkTreeIter-struct
     */
    getPath(iter: Gtk.TreeIter): Gtk.TreePath
    getPointerMode(): PointerMode
    /**
     * Gets whether the project is read only or not
     */
    getReadonly(): boolean
    getResourcePath(): string
    /**
     * Fetches the target version of the `project` for `catalog`.
     * @param catalog the name of the catalog `project` includes
     * @param major the return location for the target major version
     * @param minor the return location for the target minor version
     */
    getTargetVersion(catalog: string, major: number, minor: number): void
    getTemplate(): Widget
    getTranslationDomain(): string
    /**
     * Searches under `ancestor` in `project` looking for a #GladeWidget named `name`.
     * @param name The user visible name of the widget we are looking for
     */
    getWidgetByName(name: string): Widget | null
    hasObject(object: GObject.Object): boolean
    isLoading(): boolean
    isSelected(object: GObject.Object): boolean
    loadCancelled(): boolean
    loadFromFile(path: string): boolean
    /**
     * Creates a new name for a widget that doesn't collide with any of the names
     * already in `project`. This name will start with `base_name`.
     * 
     * Note the `widget` parameter is ignored and preserved only for historical reasons.
     * @param widget the #GladeWidget intended to receive a new name, or %NULL
     * @param baseName base name of the widget to create
     */
    newWidgetName(widget: Widget, baseName: string): string
    // Has conflict: nextRedoItem(): Command
    // Has conflict: nextUndoItem(): Command
    /**
     * Creates and displays a preview window holding a snapshot of `gwidget'`s
     * toplevel window in `project`. Note that the preview window is only a snapshot
     * of the current state of the project, there is no limit on how many preview
     * snapshots can be taken.
     * @param gwidget a #GladeWidget
     */
    preview(gwidget: Widget): void
    /**
     * Runs a document properties dialog for `project`.
     */
    properties(): void
    pushProgress(): void
    // Has conflict: pushUndo(cmd: Command): void
    queueSelectionChanged(): void
    // Has conflict: redo(): void
    /**
     * Creates a menu of the undo items in the project stack
     */
    redoItems(): Gtk.Widget
    // Has conflict: removeObject(object: GObject.Object): void
    requiredLibs(): string[]
    resetPath(): void
    /**
     * Project resource strings are always relative, this function transforms a
     * path relative to project to a full path.
     * @param resource The resource basename
     */
    resourceFullpath(resource: string): string
    /**
     * Saves `project` to the given path.
     * @param path location to save glade file
     */
    save(path: string): boolean
    /**
     * Saves `project` to the given path.
     * @param path location to save glade file
     * @param flags the #GladeVerifyFlags to warn about
     */
    saveVerify(path: string, flags: VerifyFlags): boolean
    /**
     * Adds `object` to the selection chain of `project`
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param object a #GObject in `project`
     * @param emitSignal whether or not to emit a signal indicating               a selection change
     */
    selectionAdd(object: GObject.Object, emitSignal: boolean): void
    // Has conflict: selectionChanged(): void
    /**
     * Clears `project'`s selection chain
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param emitSignal whether or not to emit a signal indication a selection change
     */
    selectionClear(emitSignal: boolean): void
    selectionGet(): Gtk.Widget[]
    /**
     * Removes `object` from the selection chain of `project`
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param object a #GObject in `project`
     * @param emitSignal whether or not to emit a signal               indicating a selection change
     */
    selectionRemove(object: GObject.Object, emitSignal: boolean): void
    /**
     * Set the selection in `project` to `object`
     * 
     * If `emit_signal` is %TRUE, calls glade_project_selection_changed().
     * @param object a #GObject in `project`
     * @param emitSignal whether or not to emit a signal               indicating a selection change
     */
    selectionSet(object: GObject.Object, emitSignal: boolean): void
    setAddItem(adaptor: WidgetAdaptor): void
    /**
     * Set the custom CSS provider path to use in `project`
     * @param path a CSS file path
     */
    setCssProviderPath(path: string): void
    setLicense(license: string): void
    setPointerMode(mode: PointerMode): void
    setResourcePath(path: string): void
    setTargetVersion(catalog: string, major: number, minor: number): void
    setTemplate(widget: Widget): void
    /**
     * Set the project translation domain.
     * @param domain the translation domain
     */
    setTranslationDomain(domain: string): void
    /**
     * Sets `name` on `widget` in `project,` if `name` is not
     * available then a new name will be used.
     * @param widget the #GladeWidget to set a name on
     * @param name the name to set.
     */
    setWidgetName(widget: Widget, name: string): void
    toplevels(): Gtk.Widget[]
    // Has conflict: undo(): void
    /**
     * Creates a menu of the undo items in the project stack
     */
    undoItems(): Gtk.Widget
    verify(saving: boolean, flags: VerifyFlags): boolean
    /**
     * Checks the supported state of this widget adaptor
     * and generates a string to show in the UI describing why.
     * @param adaptor the #GladeWidgetAdaptor to verify
     * @param mask a return location for a #GladeSupportMask
     */
    verifyWidgetAdaptor(adaptor: WidgetAdaptor, mask: SupportMask): string
    widgetChanged(gwidget: Widget): void
    /**
     * Emits  GladeProject::widget-visibility-changed signal
     * @param widget The widget which visibility changed
     * @param visible widget visibility value
     */
    widgetVisibilityChanged(widget: Widget, visible: boolean): void
    writingPreview(): boolean

    // Own virtual methods of Gladeui-2.0.Gladeui.Project

    /**
     * Adds an object to the project.
     * @virtual 
     * @param object the #GObject to add
     */
    addObject(object: Widget): void
    changed(command: Command, forward: boolean): void
    close(): void
    /**
     * Gets the next redo item on `project'`s command stack.
     * @virtual 
     */
    nextRedoItem(): Command
    /**
     * Gets the next undo item on `project'`s command stack.
     * @virtual 
     */
    nextUndoItem(): Command
    parseFinished(): void
    /**
     * Pushes a newly created #GladeCommand onto `projects` stack.
     * @virtual 
     * @param cmd the #GladeCommand
     */
    pushUndo(cmd: Command): void
    /**
     * Redoes a #GladeCommand in this project.
     * @virtual 
     */
    redo(): void
    /**
     * Removes `object` from `project`.
     * 
     * Note that when removing the #GObject from the project we
     * don't change ->project in the associated #GladeWidget; this
     * way UNDO can work.
     * @virtual 
     * @param object the #GObject to remove
     */
    removeObject(object: Widget): void
    /**
     * Causes `project` to emit a "selection_changed" signal.
     * @virtual 
     */
    selectionChanged(): void
    /**
     * Undoes a #GladeCommand in this project.
     * @virtual 
     */
    undo(): void
    widgetNameChanged(widget: Widget): void

    // Own signals of Gladeui-2.0.Gladeui.Project

    connect(sigName: "activate-signal-handler", callback: Project.ActivateSignalHandlerSignalCallback): number
    on(sigName: "activate-signal-handler", callback: Project.ActivateSignalHandlerSignalCallback): number
    once(sigName: "activate-signal-handler", callback: Project.ActivateSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "activate-signal-handler", signal: Signal, ...args: any[]): void
    connect(sigName: "add-signal-handler", callback: Project.AddSignalHandlerSignalCallback): number
    on(sigName: "add-signal-handler", callback: Project.AddSignalHandlerSignalCallback): number
    once(sigName: "add-signal-handler", callback: Project.AddSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "add-signal-handler", signal: Signal, ...args: any[]): void
    connect(sigName: "add-widget", callback: Project.AddWidgetSignalCallback): number
    on(sigName: "add-widget", callback: Project.AddWidgetSignalCallback): number
    once(sigName: "add-widget", callback: Project.AddWidgetSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "add-widget", ...args: any[]): void
    connect(sigName: "change-signal-handler", callback: Project.ChangeSignalHandlerSignalCallback): number
    on(sigName: "change-signal-handler", callback: Project.ChangeSignalHandlerSignalCallback): number
    once(sigName: "change-signal-handler", callback: Project.ChangeSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-signal-handler", oldSignal: Signal, newSignal: Signal, ...args: any[]): void
    connect(sigName: "changed", callback: Project.ChangedSignalCallback): number
    on(sigName: "changed", callback: Project.ChangedSignalCallback): number
    once(sigName: "changed", callback: Project.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", arg2: boolean, ...args: any[]): void
    connect(sigName: "close", callback: Project.CloseSignalCallback): number
    on(sigName: "close", callback: Project.CloseSignalCallback): number
    once(sigName: "close", callback: Project.CloseSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "close", ...args: any[]): void
    connect(sigName: "load-progress", callback: Project.LoadProgressSignalCallback): number
    on(sigName: "load-progress", callback: Project.LoadProgressSignalCallback): number
    once(sigName: "load-progress", callback: Project.LoadProgressSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "load-progress", objectsLoaded: number, ...args: any[]): void
    connect(sigName: "parse-began", callback: Project.ParseBeganSignalCallback): number
    on(sigName: "parse-began", callback: Project.ParseBeganSignalCallback): number
    once(sigName: "parse-began", callback: Project.ParseBeganSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "parse-began", ...args: any[]): void
    connect(sigName: "parse-finished", callback: Project.ParseFinishedSignalCallback): number
    on(sigName: "parse-finished", callback: Project.ParseFinishedSignalCallback): number
    once(sigName: "parse-finished", callback: Project.ParseFinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "parse-finished", ...args: any[]): void
    connect(sigName: "remove-signal-handler", callback: Project.RemoveSignalHandlerSignalCallback): number
    on(sigName: "remove-signal-handler", callback: Project.RemoveSignalHandlerSignalCallback): number
    once(sigName: "remove-signal-handler", callback: Project.RemoveSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "remove-signal-handler", signal: Signal, ...args: any[]): void
    connect(sigName: "remove-widget", callback: Project.RemoveWidgetSignalCallback): number
    on(sigName: "remove-widget", callback: Project.RemoveWidgetSignalCallback): number
    once(sigName: "remove-widget", callback: Project.RemoveWidgetSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "remove-widget", ...args: any[]): void
    connect(sigName: "selection-changed", callback: Project.SelectionChangedSignalCallback): number
    on(sigName: "selection-changed", callback: Project.SelectionChangedSignalCallback): number
    once(sigName: "selection-changed", callback: Project.SelectionChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "selection-changed", ...args: any[]): void
    connect(sigName: "targets-changed", callback: Project.TargetsChangedSignalCallback): number
    on(sigName: "targets-changed", callback: Project.TargetsChangedSignalCallback): number
    once(sigName: "targets-changed", callback: Project.TargetsChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "targets-changed", ...args: any[]): void
    connect(sigName: "widget-name-changed", callback: Project.WidgetNameChangedSignalCallback): number
    on(sigName: "widget-name-changed", callback: Project.WidgetNameChangedSignalCallback): number
    once(sigName: "widget-name-changed", callback: Project.WidgetNameChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "widget-name-changed", ...args: any[]): void
    connect(sigName: "widget-visibility-changed", callback: Project.WidgetVisibilityChangedSignalCallback): number
    on(sigName: "widget-visibility-changed", callback: Project.WidgetVisibilityChangedSignalCallback): number
    once(sigName: "widget-visibility-changed", callback: Project.WidgetVisibilityChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "widget-visibility-changed", visible: boolean, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Project

    connect(sigName: "notify::add-item", callback: any): number
    on(sigName: "notify::add-item", callback: any): number
    once(sigName: "notify::add-item", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::add-item", ...args: any[]): void
    connect(sigName: "notify::css-provider-path", callback: any): number
    on(sigName: "notify::css-provider-path", callback: any): number
    once(sigName: "notify::css-provider-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::css-provider-path", ...args: any[]): void
    connect(sigName: "notify::has-selection", callback: any): number
    on(sigName: "notify::has-selection", callback: any): number
    once(sigName: "notify::has-selection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-selection", ...args: any[]): void
    connect(sigName: "notify::license", callback: any): number
    on(sigName: "notify::license", callback: any): number
    once(sigName: "notify::license", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::license", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::path", callback: any): number
    on(sigName: "notify::path", callback: any): number
    once(sigName: "notify::path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::path", ...args: any[]): void
    connect(sigName: "notify::pointer-mode", callback: any): number
    on(sigName: "notify::pointer-mode", callback: any): number
    once(sigName: "notify::pointer-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pointer-mode", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::resource-path", callback: any): number
    on(sigName: "notify::resource-path", callback: any): number
    once(sigName: "notify::resource-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::resource-path", ...args: any[]): void
    connect(sigName: "notify::template", callback: any): number
    on(sigName: "notify::template", callback: any): number
    once(sigName: "notify::template", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: "notify::translation-domain", callback: any): number
    on(sigName: "notify::translation-domain", callback: any): number
    once(sigName: "notify::translation-domain", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::translation-domain", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Project extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Project

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Project

    constructor(config?: Project.ConstructorProperties) 
    /**
     * Creates a new #GladeProject.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GladeProject.
     * @constructor 
     */
    static new(): Project
    _init(config?: Project.ConstructorProperties): void
    /**
     * Opens a project at the given path.
     * @param path the path of the project to load
     */
    static load(path: string): Project | null
    static verifyProperty(property: Property): void
    static verifySignal(widget: Widget, signal: Signal): void
}

export module Property {

    // Signal callback interfaces

    /**
     * Signal callback interface for `tooltip-changed`
     */
    export interface TooltipChangedSignalCallback {
        (object: string, p0: string, p1: string): void
    }

    /**
     * Signal callback interface for `value-changed`
     */
    export interface ValueChangedSignalCallback {
        (object: object | null, p0: object | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Property

        "class"?: object | null
        enabled?: boolean | null
        i18nComment?: string | null
        i18nContext?: string | null
        i18nTranslatable?: boolean | null
        precision?: number | null
        sensitive?: boolean | null
    }

}

export interface Property {

    // Own properties of Gladeui-2.0.Gladeui.Property

    readonly "class": object
    enabled: boolean
    i18nComment: string
    i18nContext: string
    i18nTranslatable: boolean
    precision: number
    sensitive: boolean
    readonly state: number

    // Own fields of Gladeui-2.0.Gladeui.Property

    parentInstance: GObject.Object
    priv: PropertyPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Property

    /**
     * Adds `object` to the object list in `property`.
     * 
     * Note: This function expects `property` to be a #GladeParamSpecObjects
     * or #GParamSpecObject type property.
     * @param object The #GObject to add
     */
    addObject(object: GObject.Object): void
    default(): boolean
    // Has conflict: dup(widget: Widget): Property
    // Has conflict: equalsValue(value: any): boolean
    /**
     * Get the #GladePropertyDef this property was created for.
     */
    getDef(): PropertyDef
    /**
     * Retrieve the default property value
     * @param value a #GValue
     */
    getDefault(value: any): void
    getEnabled(): boolean
    getSaveAlways(): boolean
    getSensitive(): boolean
    getState(): PropertyState
    getSupportWarning(): string
    // Has conflict: getValue(value: any): void
    getWidget(): Widget
    i18nGetComment(): string
    i18nGetContext(): string
    i18nGetTranslatable(): boolean
    i18nSetComment(str: string): void
    i18nSetContext(str: string): void
    i18nSetTranslatable(translatable: boolean): void
    inlineValue(): any
    // Has conflict: load(): void
    makeString(): string
    originalDefault(): boolean
    /**
     * Resets this property to its original default value
     */
    originalReset(): void
    /**
     * Read the value and any attributes for `property` from `node,` assumes
     * `property` is being loaded for `project`
     * 
     * Note that object values will only be resolved after the project is
     * completely loaded
     * @param project the #GladeProject
     * @param node the #GladeXmlNode to read, will either be a 'widget'        node or a 'child' node for packing properties.
     */
    read(project: Project, node: XmlNode): void
    /**
     * Removes `object` from the object list in `property`.
     * 
     * Note: This function expects `property` to be a #GladeParamSpecObjects
     * or #GParamSpecObject type property.
     * @param object The #GObject to add
     */
    removeObject(object: GObject.Object): void
    /**
     * Resets this property to its default value
     */
    reset(): void
    setEnabled(enabled: boolean): void
    /**
     * Sets whether this property should be special cased
     * to always be saved regardless of its default value.
     * (used for some special cases like properties
     * that are assigned initial values in composite widgets
     * or derived widget code).
     * @param setting the value to set
     */
    setSaveAlways(setting: boolean): void
    setSensitive(sensitive: boolean, reason: string): void
    setSupportWarning(disable: boolean, reason: string): void
    // Has conflict: setValue(value: any): boolean
    setWidget(widget: Widget): void
    // Has conflict: sync(): void
    warnUsage(): boolean
    /**
     * Write `property` to `node`
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write(context: XmlContext, node: XmlNode): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Property

    dup(widget: Widget): Property
    equalsValue(value: any): boolean
    /**
     * Retrieve the property value
     * @virtual 
     * @param value a #GValue
     */
    getValue(value: any): void
    /**
     * Loads the value of `property` from the corresponding object instance
     * @virtual 
     */
    load(): void
    /**
     * Sets the property's value
     * @virtual 
     * @param value a #GValue
     */
    setValue(value: any): boolean
    /**
     * Synchronize the object with this property
     * @virtual 
     */
    sync(): void
    tooltipChanged(tooltip: string, insensitiveTooltip: string, supportWarning: string): void
    valueChanged(oldValue: any, newValue: any): void

    // Own signals of Gladeui-2.0.Gladeui.Property

    connect(sigName: "tooltip-changed", callback: Property.TooltipChangedSignalCallback): number
    on(sigName: "tooltip-changed", callback: Property.TooltipChangedSignalCallback): number
    once(sigName: "tooltip-changed", callback: Property.TooltipChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "tooltip-changed", p0: string, p1: string, ...args: any[]): void
    connect(sigName: "value-changed", callback: Property.ValueChangedSignalCallback): number
    on(sigName: "value-changed", callback: Property.ValueChangedSignalCallback): number
    once(sigName: "value-changed", callback: Property.ValueChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "value-changed", p0: object | null, ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Property

    connect(sigName: "notify::class", callback: any): number
    on(sigName: "notify::class", callback: any): number
    once(sigName: "notify::class", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::i18n-comment", callback: any): number
    on(sigName: "notify::i18n-comment", callback: any): number
    once(sigName: "notify::i18n-comment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::i18n-comment", ...args: any[]): void
    connect(sigName: "notify::i18n-context", callback: any): number
    on(sigName: "notify::i18n-context", callback: any): number
    once(sigName: "notify::i18n-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::i18n-context", ...args: any[]): void
    connect(sigName: "notify::i18n-translatable", callback: any): number
    on(sigName: "notify::i18n-translatable", callback: any): number
    once(sigName: "notify::i18n-translatable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::i18n-translatable", ...args: any[]): void
    connect(sigName: "notify::precision", callback: any): number
    on(sigName: "notify::precision", callback: any): number
    once(sigName: "notify::precision", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::precision", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Property extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Property

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Property

    constructor(config?: Property.ConstructorProperties) 
    /**
     * Creates a #GladeProperty of type `klass` for `widget` with `value;` if
     * `value` is %NULL, then the introspected default value for that property
     * will be used.
     * @constructor 
     * @param def A #GladePropertyDef defining this property
     * @param widget The #GladeWidget this property is created for
     * @param value The initial #GValue of the property or %NULL         (the #GladeProperty will assume ownership of `value)`
     */
    constructor(def: PropertyDef, widget: Widget, value: any) 
    /**
     * Creates a #GladeProperty of type `klass` for `widget` with `value;` if
     * `value` is %NULL, then the introspected default value for that property
     * will be used.
     * @constructor 
     * @param def A #GladePropertyDef defining this property
     * @param widget The #GladeWidget this property is created for
     * @param value The initial #GValue of the property or %NULL         (the #GladeProperty will assume ownership of `value)`
     */
    static new(def: PropertyDef, widget: Widget, value: any): Property
    _init(config?: Property.ConstructorProperties): void
    static popSuperuser(): void
    static pushSuperuser(): void
    static superuser(): boolean
}

export module PropertyLabel {

    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.EventBox.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.PropertyLabel

        appendColon?: boolean | null
        customText?: string | null
        customTooltip?: string | null
        packing?: boolean | null
        property?: Property | null
        propertyName?: string | null
    }

}

export interface PropertyLabel extends Atk.ImplementorIface, Editable, Gtk.Buildable {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabel

    appendColon: boolean
    customText: string
    customTooltip: string
    packing: boolean
    property: Property
    propertyName: string

    // Owm methods of Gladeui-2.0.Gladeui.PropertyLabel

    getAppendColon(): boolean
    getCustomText(): string
    getCustomTooltip(): string
    getPacking(): boolean
    getProperty(): Property

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    getPropertyName(): string
    setAppendColon(appendColon: boolean): void
    setCustomText(customText: string): void
    setCustomTooltip(customTooltip: string): void
    setPacking(packing: boolean): void
    setProperty(property: Property): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    setPropertyName(propertyName: string): void

    // Conflicting methods

    /**
     * Emits a #GtkWidget::child-notify signal for the
     * [child property][child-properties] `child_property`
     * on `widget`.
     * 
     * This is the analogue of g_object_notify() for child properties.
     * 
     * Also see gtk_container_child_notify().
     * @virtual 
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Class property signals of Gladeui-2.0.Gladeui.PropertyLabel

    connect(sigName: "notify::append-colon", callback: any): number
    on(sigName: "notify::append-colon", callback: any): number
    once(sigName: "notify::append-colon", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::append-colon", ...args: any[]): void
    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::custom-tooltip", callback: any): number
    on(sigName: "notify::custom-tooltip", callback: any): number
    once(sigName: "notify::custom-tooltip", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-tooltip", ...args: any[]): void
    connect(sigName: "notify::packing", callback: any): number
    on(sigName: "notify::packing", callback: any): number
    once(sigName: "notify::packing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::packing", ...args: any[]): void
    connect(sigName: "notify::property", callback: any): number
    on(sigName: "notify::property", callback: any): number
    once(sigName: "notify::property", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property", ...args: any[]): void
    connect(sigName: "notify::property-name", callback: any): number
    on(sigName: "notify::property-name", callback: any): number
    once(sigName: "notify::property-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-name", ...args: any[]): void
    connect(sigName: "notify::above-child", callback: any): number
    on(sigName: "notify::above-child", callback: any): number
    once(sigName: "notify::above-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::above-child", ...args: any[]): void
    connect(sigName: "notify::visible-window", callback: any): number
    on(sigName: "notify::visible-window", callback: any): number
    once(sigName: "notify::visible-window", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible-window", ...args: any[]): void
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

export class PropertyLabel extends Gtk.EventBox {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabel

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.PropertyLabel

    constructor(config?: PropertyLabel.ConstructorProperties) 
    constructor() 
    static new(): PropertyLabel
    _init(config?: PropertyLabel.ConstructorProperties): void
}

export module PropertyShell {

    // Signal callback interfaces

    /**
     * Signal callback interface for `post-commit`
     */
    export interface PostCommitSignalCallback {
        (arg1: object | null): void
    }

    /**
     * Signal callback interface for `pre-commit`
     */
    export interface PreCommitSignalCallback {
        (arg1: object | null): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Editable.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.PropertyShell

        customText?: string | null
        disableCheck?: boolean | null
        editorType?: string | null
        packing?: boolean | null
        propertyName?: string | null
        useCommand?: boolean | null
    }

}

export interface PropertyShell extends Atk.ImplementorIface, Editable, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShell

    customText: string
    disableCheck: boolean
    readonly editorType: string
    packing: boolean
    propertyName: string
    useCommand: boolean

    // Owm methods of Gladeui-2.0.Gladeui.PropertyShell

    getCustomText(): string
    getDisableCheck(): boolean
    getPacking(): boolean
    getPropertyName(): string
    getUseCommand(): boolean
    setCustomText(customText: string): void
    setDisableCheck(disableCheck: boolean): void
    setPacking(packing: boolean): void
    setPropertyName(propertyName: string): void
    setUseCommand(useCommand: boolean): void

    // Conflicting methods

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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

    // Own signals of Gladeui-2.0.Gladeui.PropertyShell

    connect(sigName: "post-commit", callback: PropertyShell.PostCommitSignalCallback): number
    on(sigName: "post-commit", callback: PropertyShell.PostCommitSignalCallback): number
    once(sigName: "post-commit", callback: PropertyShell.PostCommitSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "post-commit", ...args: any[]): void
    connect(sigName: "pre-commit", callback: PropertyShell.PreCommitSignalCallback): number
    on(sigName: "pre-commit", callback: PropertyShell.PreCommitSignalCallback): number
    once(sigName: "pre-commit", callback: PropertyShell.PreCommitSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "pre-commit", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.PropertyShell

    connect(sigName: "notify::custom-text", callback: any): number
    on(sigName: "notify::custom-text", callback: any): number
    once(sigName: "notify::custom-text", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::custom-text", ...args: any[]): void
    connect(sigName: "notify::disable-check", callback: any): number
    on(sigName: "notify::disable-check", callback: any): number
    once(sigName: "notify::disable-check", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::disable-check", ...args: any[]): void
    connect(sigName: "notify::editor-type", callback: any): number
    on(sigName: "notify::editor-type", callback: any): number
    once(sigName: "notify::editor-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::editor-type", ...args: any[]): void
    connect(sigName: "notify::packing", callback: any): number
    on(sigName: "notify::packing", callback: any): number
    once(sigName: "notify::packing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::packing", ...args: any[]): void
    connect(sigName: "notify::property-name", callback: any): number
    on(sigName: "notify::property-name", callback: any): number
    once(sigName: "notify::property-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::property-name", ...args: any[]): void
    connect(sigName: "notify::use-command", callback: any): number
    on(sigName: "notify::use-command", callback: any): number
    once(sigName: "notify::use-command", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-command", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PropertyShell extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShell

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.PropertyShell

    constructor(config?: PropertyShell.ConstructorProperties) 
    constructor() 
    static new(): PropertyShell

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: PropertyShell.ConstructorProperties): void
}

export module Signal {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Signal

        after?: boolean | null
        "class"?: object | null
        detail?: string | null
        handler?: string | null
        supportWarning?: string | null
        swapped?: boolean | null
        userdata?: string | null
    }

}

export interface Signal {

    // Own properties of Gladeui-2.0.Gladeui.Signal

    after: boolean
    readonly "class": object
    detail: string
    handler: string
    supportWarning: string
    swapped: boolean
    userdata: string

    // Own fields of Gladeui-2.0.Gladeui.Signal

    object: GObject.Object
    priv: SignalPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Signal

    clone(): Signal
    equal(sig2: Signal): boolean
    /**
     * Get whether the handler should be called before or after the default handler
     * of the signal.
     */
    getAfter(): boolean
    /**
     * Get the signal definition.
     */
    getDef(): SignalDef
    /**
     * Get the signal detail.
     */
    getDetail(): string
    /**
     * Get the signal handler.
     */
    getHandler(): string
    /**
     * Get the name of the signal from the signal definition.
     */
    getName(): string
    getSupportWarning(): string
    /**
     * Get whether the instance and userdata arguments should be swapped.
     */
    getSwapped(): boolean
    /**
     * Get the userdata handler.
     */
    getUserdata(): string
    /**
     * Set whether the handler should be called before or after the default handler
     * of the signal.
     * @param after if the signal handler should be called after the default handler
     */
    setAfter(after: boolean): void
    /**
     * Set the detail of the signal.
     * @param detail the detail of the signal
     */
    setDetail(detail: string): void
    /**
     * Set the handler of the signal.
     * @param handler the handler of the signal
     */
    setHandler(handler: string): void
    setSupportWarning(supportWarning: string): void
    /**
     * Set whether the instance and userdata arguments should be swapped.
     * @param swapped if the instance and userdata arguments should be swapped
     */
    setSwapped(swapped: boolean): void
    /**
     * Set the userdata of the signal.
     * @param userdata the userdata of the signal
     */
    setUserdata(userdata: string): void
    /**
     * Writes `signal` to `node`
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write(context: XmlContext, node: XmlNode): void

    // Class property signals of Gladeui-2.0.Gladeui.Signal

    connect(sigName: "notify::after", callback: any): number
    on(sigName: "notify::after", callback: any): number
    once(sigName: "notify::after", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::after", ...args: any[]): void
    connect(sigName: "notify::class", callback: any): number
    on(sigName: "notify::class", callback: any): number
    once(sigName: "notify::class", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class", ...args: any[]): void
    connect(sigName: "notify::detail", callback: any): number
    on(sigName: "notify::detail", callback: any): number
    once(sigName: "notify::detail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::handler", callback: any): number
    on(sigName: "notify::handler", callback: any): number
    once(sigName: "notify::handler", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::handler", ...args: any[]): void
    connect(sigName: "notify::support-warning", callback: any): number
    on(sigName: "notify::support-warning", callback: any): number
    once(sigName: "notify::support-warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::support-warning", ...args: any[]): void
    connect(sigName: "notify::swapped", callback: any): number
    on(sigName: "notify::swapped", callback: any): number
    once(sigName: "notify::swapped", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swapped", ...args: any[]): void
    connect(sigName: "notify::userdata", callback: any): number
    on(sigName: "notify::userdata", callback: any): number
    once(sigName: "notify::userdata", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::userdata", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Signal extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.Signal

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Signal

    constructor(config?: Signal.ConstructorProperties) 
    /**
     * Creates a new #GladeSignal with the given parameters.
     * @constructor 
     * @param sigDef a #GladeSignalDef
     * @param handler a handler function for the signal
     * @param userdata the userdata for this signal
     * @param after whether this handler should be called after the default emission phase
     * @param swapped whether the handler's user data should be swapped with the emitter instance.
     */
    constructor(sigDef: SignalDef, handler: string, userdata: string, after: boolean, swapped: boolean) 
    /**
     * Creates a new #GladeSignal with the given parameters.
     * @constructor 
     * @param sigDef a #GladeSignalDef
     * @param handler a handler function for the signal
     * @param userdata the userdata for this signal
     * @param after whether this handler should be called after the default emission phase
     * @param swapped whether the handler's user data should be swapped with the emitter instance.
     */
    static new(sigDef: SignalDef, handler: string, userdata: string, after: boolean, swapped: boolean): Signal
    _init(config?: Signal.ConstructorProperties): void
    /**
     * Reads and creates a ner #GladeSignal based on `node`
     * @param node The #GladeXmlNode to read
     * @param adaptor The #GladeWidgetAdaptor for the widget
     */
    static read(node: XmlNode, adaptor: WidgetAdaptor): Signal
}

export module SignalEditor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `callback-suggestions`
     */
    export interface CallbackSuggestionsSignalCallback {
        (signal: Signal): string[]
    }

    /**
     * Signal callback interface for `detail-suggestions`
     */
    export interface DetailSuggestionsSignalCallback {
        (signal: Signal): string[]
    }

    /**
     * Signal callback interface for `signal-activated`
     */
    export interface SignalActivatedSignalCallback {
        (signal: Signal): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Atk.ImplementorIface.ConstructorProperties, Gtk.Buildable.ConstructorProperties, Gtk.Orientable.ConstructorProperties, Gtk.Box.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.SignalEditor

        gladeWidget?: Gtk.TreeModel | null
    }

}

export interface SignalEditor extends Atk.ImplementorIface, Gtk.Buildable, Gtk.Orientable {

    // Own properties of Gladeui-2.0.Gladeui.SignalEditor

    gladeWidget: Gtk.TreeModel

    // Own fields of Gladeui-2.0.Gladeui.SignalEditor

    parentInstance: any

    // Owm methods of Gladeui-2.0.Gladeui.SignalEditor

    /**
     * If drag and drop support is enabled, the user will be able to drag signal handler
     * from the tree to some editor. The type of the dnd data will be "application/x-glade-signal"
     * and it will be in the form of "widget:signal:handler" so for example
     * "GtkToggleButton:toggled:on_toggle_button_toggled".
     * @param enabled whether the drag and drop support should be enabled
     */
    enableDnd(enabled: boolean): void
    getWidget(): Widget
    /**
     * Load a widget in the signal editor. This will show all signals of the widget
     * an it's accessors in the signal editor where the user can edit them.
     * @param widget a #GladeWidget or NULL
     */
    loadWidget(widget: Widget): void

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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
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
     * @param childProperty the name of a child property installed on the                  class of `widget’`s parent
     */
    childNotify(childProperty: GObject.ParamSpec): void

    // Own signals of Gladeui-2.0.Gladeui.SignalEditor

    connect(sigName: "callback-suggestions", callback: SignalEditor.CallbackSuggestionsSignalCallback): number
    on(sigName: "callback-suggestions", callback: SignalEditor.CallbackSuggestionsSignalCallback): number
    once(sigName: "callback-suggestions", callback: SignalEditor.CallbackSuggestionsSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "callback-suggestions", ...args: any[]): void
    connect(sigName: "detail-suggestions", callback: SignalEditor.DetailSuggestionsSignalCallback): number
    on(sigName: "detail-suggestions", callback: SignalEditor.DetailSuggestionsSignalCallback): number
    once(sigName: "detail-suggestions", callback: SignalEditor.DetailSuggestionsSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "detail-suggestions", ...args: any[]): void
    connect(sigName: "signal-activated", callback: SignalEditor.SignalActivatedSignalCallback): number
    on(sigName: "signal-activated", callback: SignalEditor.SignalActivatedSignalCallback): number
    once(sigName: "signal-activated", callback: SignalEditor.SignalActivatedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "signal-activated", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.SignalEditor

    connect(sigName: "notify::glade-widget", callback: any): number
    on(sigName: "notify::glade-widget", callback: any): number
    once(sigName: "notify::glade-widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::glade-widget", ...args: any[]): void
    connect(sigName: "notify::baseline-position", callback: any): number
    on(sigName: "notify::baseline-position", callback: any): number
    once(sigName: "notify::baseline-position", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::baseline-position", ...args: any[]): void
    connect(sigName: "notify::homogeneous", callback: any): number
    on(sigName: "notify::homogeneous", callback: any): number
    once(sigName: "notify::homogeneous", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::homogeneous", ...args: any[]): void
    connect(sigName: "notify::spacing", callback: any): number
    on(sigName: "notify::spacing", callback: any): number
    once(sigName: "notify::spacing", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spacing", ...args: any[]): void
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
    connect(sigName: "notify::orientation", callback: any): number
    on(sigName: "notify::orientation", callback: any): number
    once(sigName: "notify::orientation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::orientation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SignalEditor extends Gtk.Box {

    // Own properties of Gladeui-2.0.Gladeui.SignalEditor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.SignalEditor

    constructor(config?: SignalEditor.ConstructorProperties) 
    constructor() 
    static new(): SignalEditor

    // Overloads of new

    /**
     * Creates a new #GtkBox.
     * @constructor 
     * @param orientation the box’s orientation.
     * @param spacing the number of pixels to place by default between children.
     */
    static new(orientation: Gtk.Orientation, spacing: number): Gtk.Box
    _init(config?: SignalEditor.ConstructorProperties): void
}

export module SignalModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Gtk.TreeDragSource.ConstructorProperties, Gtk.TreeModel.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.SignalModel

        signals?: object | null
        widget?: Widget | null
    }

}

export interface SignalModel extends Gtk.TreeDragSource, Gtk.TreeModel {

    // Own properties of Gladeui-2.0.Gladeui.SignalModel

    readonly signals: object
    readonly widget: Widget

    // Own fields of Gladeui-2.0.Gladeui.SignalModel

    parentInstance: GObject.Object
    priv: SignalModelPrivate

    // Class property signals of Gladeui-2.0.Gladeui.SignalModel

    connect(sigName: "notify::signals", callback: any): number
    on(sigName: "notify::signals", callback: any): number
    once(sigName: "notify::signals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::signals", ...args: any[]): void
    connect(sigName: "notify::widget", callback: any): number
    on(sigName: "notify::widget", callback: any): number
    once(sigName: "notify::widget", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::widget", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SignalModel extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.SignalModel

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.SignalModel

    constructor(config?: SignalModel.ConstructorProperties) 
    _init(config?: SignalModel.ConstructorProperties): void
    /**
     * Creates a new #GladeSignalModel object to show and edit the
     * signals of a widgets in a GtkTreeView
     * @param widget The #GladeWidget the signals belong to
     * @param signals The signals of the #GladeWidget
     */
    static new(widget: Widget, signals: GLib.HashTable): Gtk.TreeModel
}

export module Widget {

    // Signal callback interfaces

    /**
     * Signal callback interface for `add-signal-handler`
     */
    export interface AddSignalHandlerSignalCallback {
        (arg1: Signal): void
    }

    /**
     * Signal callback interface for `button-press-event`
     */
    export interface ButtonPressEventSignalCallback {
        (arg1: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `button-release-event`
     */
    export interface ButtonReleaseEventSignalCallback {
        (arg1: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `change-signal-handler`
     */
    export interface ChangeSignalHandlerSignalCallback {
        (arg1: Signal): void
    }

    /**
     * Signal callback interface for `motion-notify-event`
     */
    export interface MotionNotifyEventSignalCallback {
        (arg1: Gdk.Event): boolean
    }

    /**
     * Signal callback interface for `remove-signal-handler`
     */
    export interface RemoveSignalHandlerSignalCallback {
        (arg1: Signal): void
    }

    /**
     * Signal callback interface for `support-changed`
     */
    export interface SupportChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.InitiallyUnowned.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.Widget

        adaptor?: WidgetAdaptor | null
        anarchist?: boolean | null
        composite?: boolean | null
        internal?: string | null
        internalName?: string | null
        name?: string | null
        object?: GObject.Object | null
        parent?: Widget | null
        project?: Project | null
        properties?: object | null
        reason?: number | null
        template?: Widget | null
        templateExact?: boolean | null
        toplevelHeight?: number | null
        toplevelWidth?: number | null
    }

}

export interface Widget {

    // Own properties of Gladeui-2.0.Gladeui.Widget

    readonly adaptor: WidgetAdaptor
    readonly anarchist: boolean
    composite: boolean
    internal: string
    readonly internalName: string
    name: string
    object: GObject.Object
    parent: Widget
    project: Project
    readonly properties: object
    readonly reason: number
    readonly supportWarning: string
    readonly template: Widget
    readonly templateExact: boolean
    toplevelHeight: number
    toplevelWidth: number
    readonly visible: boolean

    // Own fields of Gladeui-2.0.Gladeui.Widget

    parentInstance: GObject.InitiallyUnowned
    priv: WidgetPrivate

    // Owm methods of Gladeui-2.0.Gladeui.Widget

    /**
     * A convenience function to create a #GladeWidget of the prescribed type
     * for internal widgets.
     * @param internalObject the #GObject
     * @param internalName a string identifier for this internal widget.
     * @param parentName the generic name of the parent used for fancy child names.
     * @param anarchist Whether or not this widget is a widget outside                     of the parent's hierarchy (like a popup window)
     * @param reason The #GladeCreateReason for which this internal widget                     was created (usually just pass the reason from the post_create                     function; note also this is used only by the plugin code so                     pass something useful here).
     */
    adaptorCreateInternal(internalObject: GObject.Object, internalName: string, parentName: string, anarchist: boolean, reason: CreateReason): Widget
    // Has conflict: addChild(child: Widget, atMouse: boolean): void
    /**
     * Adds `property` to `widget` 's list of referenced properties.
     * 
     * Note: this is used to track properties on other objects that
     *       refer to this object.
     * @param property the #GladeProperty
     */
    addPropRef(property: Property): void
    // Has conflict: addSignalHandler(signalHandler: Signal): void
    /**
     * Checks whether `child` can be added to `parent`.
     * 
     * If `user_feedback` is %TRUE and `child` cannot be
     * added then this shows a notification dialog to the user
     * explaining why.
     * @param child The child #GladeWidget to add
     * @param userFeedback whether a notification dialog should be presented in the case that the child cannot not be added.
     */
    addVerify(child: Widget, userFeedback: boolean): boolean
    // Has conflict: changeSignalHandler(oldSignalHandler: Signal, newSignalHandler: Signal): void
    /**
     * Gets `child'`s packing property identified by `property_name`.
     * @param child The #GladeWidget child
     * @param propertyName The id of the property
     * @param value The `GValue`
     */
    childGetProperty(child: Widget, propertyName: string, value: any): void
    /**
     * Sets `child'`s packing property identified by `property_name` to `value`.
     * @param child The #GladeWidget child
     * @param propertyName The id of the property
     * @param value The `GValue`
     */
    childSetProperty(child: Widget, propertyName: string, value: any): void
    /**
     * Sets properties in `widget` based on the values of
     * matching properties in `template_widget`
     * @param templateWidget a 'src' #GladeWidget
     * @param copyParentless whether to copy reffed widgets at all
     * @param exact whether to copy reffed widgets exactly
     */
    copyProperties(templateWidget: Widget, copyParentless: boolean, exact: boolean): void
    /**
     * Sets signals in `widget` based on the values of
     * matching signals in `template_widget`
     * @param templateWidget a 'src' #GladeWidget
     */
    copySignals(templateWidget: Widget): void
    /**
     * This is a convenience function to create a GladeEditorProperty corresponding
     * to `property`
     * @param property The widget's property
     * @param packing whether `property` indicates a packing property or not.
     * @param useCommand Whether the undo/redo stack applies here.
     */
    createEditorProperty(property: string, packing: boolean, useCommand: boolean): EditorProperty
    /**
     * Determines whether `widget` is somehow dependent on `other,` in
     * which case it should be serialized after `other`.
     * 
     * A widget is dependent on another widget.
     * It does not take into account for children dependencies.
     * @param other another #GladeWidget
     */
    depends(other: Widget): boolean
    /**
     * Creates a deep copy of #GladeWidget. if `exact` is specified,
     * the widget name is preserved and signals are carried over
     * (this is used to maintain names & signals in Cut/Paste context
     * as opposed to Copy/Paste contexts).
     * @param exact whether or not to creat an exact duplicate
     */
    dup(exact: boolean): Widget
    /**
     * Copies a list of properties, if `as_load` is specified, then
     * properties that are not saved to the glade file are ignored.
     * @param templateProps the #GladeProperty list to copy
     * @param asLoad whether to behave as if loading the project
     * @param copyParentless whether to copy reffed widgets at all
     * @param exact whether to copy reffed widgets exactly
     */
    dupProperties(templateProps: Property[], asLoad: boolean, copyParentless: boolean, exact: boolean): Property[]
    ensureName(project: Project, useCommand: boolean): void
    // Has conflict: event(event: Gdk.Event): boolean
    /**
     * Finds a child widget named `name`.
     * @param name child name
     */
    findChild(name: string): Widget | null
    /**
     * Creates a user friendly name to describe project widgets
     */
    generatePathName(): string
    /**
     * Returns a #GladeWidgetAction object indentified by `action_path`.
     * @param actionPath a full action path including groups
     */
    getAction(actionPath: string): WidgetAction | null
    getActions(): WidgetAction[]
    getAdaptor(): WidgetAdaptor
    /**
     * Fetches any wrapped children of `widget`.
     */
    getChildren(): GObject.Object[]
    getDisplayName(): string
    getInternal(): string
    /**
     * Checks if `widget` is a composite template to be used
     * with gtk_widget_class_set_template().
     */
    getIsComposite(): boolean
    /**
     * Get the current locked widget, locked widgets cannot
     * be removed from the project until unlocked
     */
    getLocker(): Widget | null
    getName(): string
    getObject(): GObject.Object
    /**
     * Returns a #GladeWidgetAction object indentified by `action_path`.
     * @param actionPath a full action path including groups
     */
    getPackAction(actionPath: string): WidgetAction | null
    getPackActions(): WidgetAction[]
    getPackProperty(idProperty: string): Property | null
    getPackingProperties(): Property[]
    getParent(): Widget
    getParentlessReffedWidgets(): Property[]
    getParentlessWidgetRef(): Property
    getProject(): Project
    getProperties(): Property[]
    getProperty(idProperty: string): Property | null

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * Compiles a list of #GladeSignal elements
     */
    getSignalList(): Signal[]
    getSignalModel(): Gtk.TreeModel
    getToplevel(): Widget
    hasDecendant(type: GObject.GType): boolean
    hasName(): boolean
    hasPropRefs(): boolean
    /**
     * Hide `widget`
     */
    hide(): void
    inProject(): boolean
    /**
     * Determines whether `widget` is somewhere inside `ancestor,` possibly with
     * intermediate containers.
     * @param ancestor another #GladeWidget
     */
    isAncestor(ancestor: Widget): boolean
    listLockedWidgets(): Widget[]
    listPropRefs(): Property[]
    listSignalHandlers(signalName: string): Signal[]
    /**
     * Sets `locked` to be in a locked up state
     * spoken for by `widget,` locked widgets cannot
     * be removed from the project until unlocked.
     * @param locked The #GladeWidget to lock
     */
    lock(locked: Widget): void
    /**
     * This function retrieves the value of the property `property_name` on
     * the runtime object of `widget` and sets it in `value`.
     * @param propertyName The property identifier
     * @param value The #GValue
     */
    objectGetProperty(propertyName: string, value: any): void
    /**
     * This function applies `value` to the property `property_name` on
     * the runtime object of `widget`.
     * @param propertyName The property identifier
     * @param value The #GValue
     */
    objectSetProperty(propertyName: string, value: any): void
    packPropertyDefault(idProperty: string): boolean
    /**
     * Resets `id_property` in `widget'`s packing properties to it's default value
     * @param idProperty a string naming a #GladeProperty
     */
    packPropertyReset(idProperty: string): boolean
    /**
     * Sets the enabled state of `id_property` in `widget'`s packing
     * properties; this is used for optional properties.
     * @param idProperty a string naming a #GladeProperty
     * @param enabled setting enabled or disabled
     */
    packPropertySetEnabled(idProperty: string, enabled: boolean): boolean
    /**
     * Sets whether `id_property` in `widget` should be special cased
     * to always be saved regardless of its default value.
     * (used for some special cases like properties
     * that are assigned initial values in composite widgets
     * or derived widget code).
     * @param idProperty a string naming a #GladeProperty
     * @param setting the setting
     */
    packPropertySetSaveAlways(idProperty: string, setting: boolean): boolean
    /**
     * Sets the sensitivity of `id_property` in `widget'`s packing properties.
     * @param idProperty a string naming a #GladeProperty
     * @param sensitive setting sensitive or insensitive
     * @param reason a description of why the user cant edit this property          which will be used as a tooltip
     */
    packPropertySetSensitive(idProperty: string, sensitive: boolean, reason: string): boolean
    /**
     * Same as glade_widget_property_string() but for packing
     * properties.
     * @param idProperty a string naming a #GladeProperty
     * @param value the #GValue to print or %NULL
     */
    packPropertyString(idProperty: string, value: any): string
    /**
     * Returns whether placeholders should be used
     * in operations concerning this parent & child.
     * 
     * Currently that criteria is whether `parent` is a
     * GtkContainer, `widget` is a GtkWidget and the parent
     * adaptor has been marked to use placeholders.
     * @param widget The child #GladeWidget
     */
    placeholderRelation(widget: Widget): boolean
    propertyDefault(idProperty: string): boolean
    propertyOriginalDefault(idProperty: string): boolean
    /**
     * Resets `id_property` in `widget` to it's default value
     * @param idProperty a string naming a #GladeProperty
     */
    propertyReset(idProperty: string): boolean
    /**
     * Sets the enabled state of `id_property` in `widget;` this is
     * used for optional properties.
     * @param idProperty a string naming a #GladeProperty
     * @param enabled setting enabled or disabled
     */
    propertySetEnabled(idProperty: string, enabled: boolean): boolean
    /**
     * Sets whether `id_property` in `widget` should be special cased
     * to always be saved regardless of its default value.
     * (used for some special cases like properties
     * that are assigned initial values in composite widgets
     * or derived widget code).
     * @param idProperty a string naming a #GladeProperty
     * @param setting the setting
     */
    propertySetSaveAlways(idProperty: string, setting: boolean): boolean
    /**
     * Sets the sensitivity of `id_property` in `widget`
     * @param idProperty a string naming a #GladeProperty
     * @param sensitive setting sensitive or insensitive
     * @param reason a description of why the user cant edit this property          which will be used as a tooltip
     */
    propertySetSensitive(idProperty: string, sensitive: boolean, reason: string): boolean
    /**
     * Creates a printable string representing `id_property` in
     * `widget,` if `value` is specified it will be used in place
     * of `id_property'`s real value (this is a convenience
     * function to print/debug properties usually from plugin
     * backends).
     * @param idProperty a string naming a #GladeProperty
     * @param value the #GValue to print or %NULL
     */
    propertyString(idProperty: string, value: any): string
    /**
     * Reads in a child widget from the xml (handles 'child' tag)
     * @param node a #GladeXmlNode
     */
    readChild(node: XmlNode): void
    /**
     * Replaces the current widget instance with
     * a new one while preserving all properties children and
     * takes care of reparenting.
     */
    rebuild(): void
    // Has conflict: removeChild(child: Widget): void
    /**
     * Removes `property` from `widget` 's list of referenced properties.
     * 
     * Note: this is used to track properties on other objects that
     *       refer to this object.
     * @param property the #GladeProperty
     */
    removePropRef(property: Property): void
    /**
     * Removes the #GladeProperty indicated by `id_property`
     * from `widget` (this is intended for use in the plugin, to
     * remove properties from composite children that don't make
     * sense to allow the user to specify, notably - properties
     * that are proxied through the composite widget's properties or
     * style properties).
     * @param idProperty the name of the property
     */
    removeProperty(idProperty: string): void
    // Has conflict: removeSignalHandler(signalHandler: Signal): void
    /**
     * Replaces a GObject with another GObject inside a #GladeWidget which
     * behaves as a container.
     * 
     * Note that both GObjects must be owned by a GladeWidget.
     * @param oldObject a #GObject
     * @param newObject a #GObject
     */
    replace(oldObject: GObject.Object, newObject: GObject.Object): void
    /**
     * Sets the sensitivity of `action_path` in `widget`
     * @param actionPath a full action path including groups
     * @param sensitive setting sensitive or insensitive
     */
    setActionSensitive(actionPath: string, sensitive: boolean): boolean
    /**
     * Sets the visibility of `action_path` in `widget`
     * @param actionPath a full action path including groups
     * @param visible setting visible or invisible
     */
    setActionVisible(actionPath: string, visible: boolean): boolean
    setChildTypeFromNode(child: GObject.Object, node: XmlNode): void
    setInProject(inProject: boolean): void
    /**
     * Sets the internal name of `widget` to `internal`
     * @param internal The internal name
     */
    setInternal(internal: string): void
    /**
     * Set's this widget to be toplevel composite object to be
     * eventually used with gtk_widget_class_set_template()
     * 
     * Only one widget in a project should be composite.
     * @param composite whether `widget` should be a composite template
     */
    setIsComposite(composite: boolean): void
    /**
     * Sets `widget'`s name to `name`.
     * @param name a string
     */
    setName(name: string): void
    /**
     * Sets the sensitivity of `action_path` in `widget`
     * @param actionPath a full action path including groups
     * @param sensitive setting sensitive or insensitive
     */
    setPackActionSensitive(actionPath: string, sensitive: boolean): boolean
    /**
     * Sets the visibility of `action_path` in `widget`
     * @param actionPath a full action path including groups
     * @param visible setting visible or invisible
     */
    setPackActionVisible(actionPath: string, visible: boolean): boolean
    /**
     * Generates the packing_properties list of the widget, given
     * the class of the container we are adding the widget to.
     * If the widget already has packing_properties, but the container
     * has changed, the current list is freed and replaced.
     * @param container The parent #GladeWidget
     */
    setPackingProperties(container: Widget): void
    /**
     * sets the parenting #GladeWidget
     * @param parent the parenting #GladeWidget (or %NULL)
     */
    setParent(parent: Widget | null): void
    /**
     * Makes `widget` belong to `project`.
     * @param project a #GladeProject
     */
    setProject(project: Project): void
    setSupportWarning(warning: string): void
    /**
     * Display `widget` in it's project's GladeDesignView
     */
    show(): void
    /**
     * Notifies that support metadata has changed on the widget.
     */
    supportChanged(): void
    /**
     * Unlocks `widget` so that it can be removed
     * from the project again
     */
    unlock(): void
    /**
     * Verify this widget for deprecation and versioning warnings.
     * 
     * This function will update the widget's support warning.
     */
    verify(): void
    /**
     * Recursively writes out `widget` and its children
     * and appends the created #GladeXmlNode to `node`.
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    write(context: XmlContext, node: XmlNode): void
    /**
     * Writes out a widget to the xml, takes care
     * of packing properties and special child types.
     * @param child The child #GladeWidget to write
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    writeChild(child: Widget, context: XmlContext, node: XmlNode): void
    /**
     * Writes out a placeholder to the xml
     * @param object A #GladePlaceholder
     * @param context A #GladeXmlContext
     * @param node A #GladeXmlNode
     */
    writePlaceholder(object: GObject.Object, context: XmlContext, node: XmlNode): void
    writeSignals(context: XmlContext, node: XmlNode): void
    writeSpecialChildProp(object: GObject.Object, context: XmlContext, node: XmlNode): void

    // Own virtual methods of Gladeui-2.0.Gladeui.Widget

    /**
     * Adds `child` to `parent` in a generic way for this #GladeWidget parent.
     * @virtual 
     * @param child the #GladeWidget to add
     * @param atMouse whether the added widget should be added            at the current mouse position
     */
    addChild(child: Widget, atMouse: boolean): void
    /**
     * Adds a signal handler for `widget`
     * @virtual 
     * @param signalHandler The #GladeSignal
     */
    addSignalHandler(signalHandler: Signal): void
    buttonPressEvent(event: Gdk.Event): number
    buttonReleaseEvent(event: Gdk.Event): number
    changeSignalHandler(newSignalHandler: Signal): void
    /**
     * Feed an event to be handled on the project GladeWidget
     * hierarchy.
     * @virtual 
     * @param event A #GdkEvent
     */
    event(event: Gdk.Event): boolean
    motionNotifyEvent(event: Gdk.Event): number
    /**
     * Removes `child` from `parent` in a generic way for this #GladeWidget parent.
     * @virtual 
     * @param child the #GladeWidget to add
     */
    removeChild(child: Widget): void
    /**
     * Removes a signal handler from `widget`
     * @virtual 
     * @param signalHandler The #GladeSignal
     */
    removeSignalHandler(signalHandler: Signal): void
    replaceChild(oldObject: GObject.Object, newObject: GObject.Object): void

    // Own signals of Gladeui-2.0.Gladeui.Widget

    connect(sigName: "add-signal-handler", callback: Widget.AddSignalHandlerSignalCallback): number
    on(sigName: "add-signal-handler", callback: Widget.AddSignalHandlerSignalCallback): number
    once(sigName: "add-signal-handler", callback: Widget.AddSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "add-signal-handler", ...args: any[]): void
    connect(sigName: "button-press-event", callback: Widget.ButtonPressEventSignalCallback): number
    on(sigName: "button-press-event", callback: Widget.ButtonPressEventSignalCallback): number
    once(sigName: "button-press-event", callback: Widget.ButtonPressEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-press-event", ...args: any[]): void
    connect(sigName: "button-release-event", callback: Widget.ButtonReleaseEventSignalCallback): number
    on(sigName: "button-release-event", callback: Widget.ButtonReleaseEventSignalCallback): number
    once(sigName: "button-release-event", callback: Widget.ButtonReleaseEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-release-event", ...args: any[]): void
    connect(sigName: "change-signal-handler", callback: Widget.ChangeSignalHandlerSignalCallback): number
    on(sigName: "change-signal-handler", callback: Widget.ChangeSignalHandlerSignalCallback): number
    once(sigName: "change-signal-handler", callback: Widget.ChangeSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "change-signal-handler", ...args: any[]): void
    connect(sigName: "motion-notify-event", callback: Widget.MotionNotifyEventSignalCallback): number
    on(sigName: "motion-notify-event", callback: Widget.MotionNotifyEventSignalCallback): number
    once(sigName: "motion-notify-event", callback: Widget.MotionNotifyEventSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "motion-notify-event", ...args: any[]): void
    connect(sigName: "remove-signal-handler", callback: Widget.RemoveSignalHandlerSignalCallback): number
    on(sigName: "remove-signal-handler", callback: Widget.RemoveSignalHandlerSignalCallback): number
    once(sigName: "remove-signal-handler", callback: Widget.RemoveSignalHandlerSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "remove-signal-handler", ...args: any[]): void
    connect(sigName: "support-changed", callback: Widget.SupportChangedSignalCallback): number
    on(sigName: "support-changed", callback: Widget.SupportChangedSignalCallback): number
    once(sigName: "support-changed", callback: Widget.SupportChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "support-changed", ...args: any[]): void

    // Class property signals of Gladeui-2.0.Gladeui.Widget

    connect(sigName: "notify::adaptor", callback: any): number
    on(sigName: "notify::adaptor", callback: any): number
    once(sigName: "notify::adaptor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::adaptor", ...args: any[]): void
    connect(sigName: "notify::anarchist", callback: any): number
    on(sigName: "notify::anarchist", callback: any): number
    once(sigName: "notify::anarchist", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anarchist", ...args: any[]): void
    connect(sigName: "notify::composite", callback: any): number
    on(sigName: "notify::composite", callback: any): number
    once(sigName: "notify::composite", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::composite", ...args: any[]): void
    connect(sigName: "notify::internal", callback: any): number
    on(sigName: "notify::internal", callback: any): number
    once(sigName: "notify::internal", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::internal", ...args: any[]): void
    connect(sigName: "notify::internal-name", callback: any): number
    on(sigName: "notify::internal-name", callback: any): number
    once(sigName: "notify::internal-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::internal-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::object", callback: any): number
    on(sigName: "notify::object", callback: any): number
    once(sigName: "notify::object", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::project", callback: any): number
    on(sigName: "notify::project", callback: any): number
    once(sigName: "notify::project", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::project", ...args: any[]): void
    connect(sigName: "notify::properties", callback: any): number
    on(sigName: "notify::properties", callback: any): number
    once(sigName: "notify::properties", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::properties", ...args: any[]): void
    connect(sigName: "notify::reason", callback: any): number
    on(sigName: "notify::reason", callback: any): number
    once(sigName: "notify::reason", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reason", ...args: any[]): void
    connect(sigName: "notify::support-warning", callback: any): number
    on(sigName: "notify::support-warning", callback: any): number
    once(sigName: "notify::support-warning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::support-warning", ...args: any[]): void
    connect(sigName: "notify::template", callback: any): number
    on(sigName: "notify::template", callback: any): number
    once(sigName: "notify::template", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::template", ...args: any[]): void
    connect(sigName: "notify::template-exact", callback: any): number
    on(sigName: "notify::template-exact", callback: any): number
    once(sigName: "notify::template-exact", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::template-exact", ...args: any[]): void
    connect(sigName: "notify::toplevel-height", callback: any): number
    on(sigName: "notify::toplevel-height", callback: any): number
    once(sigName: "notify::toplevel-height", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::toplevel-height", ...args: any[]): void
    connect(sigName: "notify::toplevel-width", callback: any): number
    on(sigName: "notify::toplevel-width", callback: any): number
    once(sigName: "notify::toplevel-width", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::toplevel-width", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Widget extends GObject.InitiallyUnowned {

    // Own properties of Gladeui-2.0.Gladeui.Widget

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Widget

    constructor(config?: Widget.ConstructorProperties) 
    _init(config?: Widget.ConstructorProperties): void
    /**
     * Currently only motion and button events are handled (see GLADE_WIDGET_IS_EVENT)
     * @param event a GdkEvent
     */
    static getDeviceFromEvent(event: Gdk.Event): Gdk.Device
    static getFromGobject(object: object | null): Widget
    /**
     * Unsets superuser mode
     */
    static popSuperuser(): void
    /**
     * Sets superuser mode
     */
    static pushSuperuser(): void
    /**
     * Creates a new #GladeWidget from a XML node.
     * 
     * If node is a template and its parent class is abstract/non instantiatable,
     * Glade will use a class with the GladeInstantiable prefix instead.
     * 
     * For example, with a GtkBin template Glade will GladeInstantiableGtkBin class
     * @param project a #GladeProject
     * @param parent The parent #GladeWidget or %NULL
     * @param node a #GladeXmlNode
     * @param internal the name of an internal child name
     */
    static read(project: Project, parent: Widget | null, node: XmlNode, internal: string | null): Widget
    /**
     * Checks if we are in superuser mode.
     * 
     * Superuser mode is when we are
     *   - Loading a project
     *   - Dupping a widget recursively
     *   - Rebuilding an instance for a construct-only property
     * 
     * In these cases, we must act like a load, this should be checked
     * from the plugin when implementing containers, when undo/redo comes
     * around, the plugin is responsable for maintaining the same container
     * size when widgets are added/removed.
     */
    static superuser(): boolean
}

export module WidgetAction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.WidgetAction

        definition?: object | null
        sensitive?: boolean | null
        visible?: boolean | null
    }

}

export interface WidgetAction {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAction

    readonly definition: object
    sensitive: boolean
    visible: boolean

    // Own fields of Gladeui-2.0.Gladeui.WidgetAction

    parentInstance: GObject.Object
    priv: WidgetActionPrivate

    // Owm methods of Gladeui-2.0.Gladeui.WidgetAction

    getChildren(): WidgetActionDef[]
    getDef(): WidgetActionDef
    getSensitive(): boolean
    getVisible(): boolean
    /**
     * Set whether or not this action is sensitive.
     * @param sensitive the sensitivity to set
     */
    setSensitive(sensitive: boolean): void
    setVisible(visible: boolean): void

    // Class property signals of Gladeui-2.0.Gladeui.WidgetAction

    connect(sigName: "notify::definition", callback: any): number
    on(sigName: "notify::definition", callback: any): number
    once(sigName: "notify::definition", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::definition", ...args: any[]): void
    connect(sigName: "notify::sensitive", callback: any): number
    on(sigName: "notify::sensitive", callback: any): number
    once(sigName: "notify::sensitive", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::sensitive", ...args: any[]): void
    connect(sigName: "notify::visible", callback: any): number
    on(sigName: "notify::visible", callback: any): number
    once(sigName: "notify::visible", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::visible", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WidgetAction extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAction

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.WidgetAction

    constructor(config?: WidgetAction.ConstructorProperties) 
    _init(config?: WidgetAction.ConstructorProperties): void
}

export module WidgetAdaptor {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Gladeui-2.0.Gladeui.WidgetAdaptor

        book?: string | null
        catalog?: string | null
        genericName?: string | null
        iconName?: string | null
        name?: string | null
        query?: boolean | null
        specialChildType?: string | null
        title?: string | null
        type?: GObject.GType | null
    }

}

export interface WidgetAdaptor {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAdaptor

    readonly book: string
    readonly catalog: string
    readonly cursor: object
    readonly genericName: string
    readonly iconName: string
    readonly name: string
    query: boolean
    readonly specialChildType: string
    title: string
    readonly type: GObject.GType

    // Own fields of Gladeui-2.0.Gladeui.WidgetAdaptor

    parentInstance: GObject.Object

    // Owm methods of Gladeui-2.0.Gladeui.WidgetAdaptor

    // Has conflict: actionActivate(object: GObject.Object, actionPath: string): void
    /**
     * Add an action to `adaptor`.
     * If the action is present then it overrides label and stock
     * @param actionPath The identifier of this action in the action tree
     * @param label A translated label to show in the UI for this action
     * @param stock If set, this stock item will be shown in the UI along side the label.
     * @param important if this action is important.
     */
    actionAdd(actionPath: string, label: string, stock: string, important: boolean): boolean
    /**
     * Remove an `adaptor'`s action.
     * @param actionPath The identifier of this action in the action tree
     */
    actionRemove(actionPath: string): boolean
    // Has conflict: actionSubmenu(object: GObject.Object, actionPath: string): Gtk.Widget | null
    /**
     * Create a list of actions.
     */
    actionsNew(): WidgetAction[]
    // Has conflict: add(container: GObject.Object, child: GObject.Object): void
    // Has conflict: addVerify(container: GObject.Object, child: GObject.Object, userFeedback: boolean): boolean
    // Has conflict: childActionActivate(container: GObject.Object, object: GObject.Object, actionPath: string): void
    // Has conflict: childGetProperty(container: GObject.Object, child: GObject.Object, propertyName: string, value: any): void
    // Has conflict: childSetProperty(container: GObject.Object, child: GObject.Object, propertyName: string, value: any): void
    // Has conflict: childVerifyProperty(container: GObject.Object, child: GObject.Object, propertyName: string, value: any): boolean
    // Has conflict: constructObject(nParameters: number, parameters: GObject.Parameter): GObject.Object
    // Has conflict: createEditable(type: EditorPageType): Editable
    // Has conflict: createEprop(def: PropertyDef, useCommand: boolean): EditorProperty
    /**
     * Creates a #GladeEditorProperty to edit #GladePropertyDef `name` in `adaptor`
     * @param propertyId the string if of the corresponding #GladePropertyDef to be edited
     * @param packing whether this refers to a packing property
     * @param useCommand whether to use the GladeCommand interface to commit property changes
     */
    createEpropByName(propertyId: string, packing: boolean, useCommand: boolean): EditorProperty
    defaultParams(construct: boolean): GObject.Parameter[]
    // Has conflict: depends(widget: Widget, another: Widget): boolean
    // Has conflict: destroyObject(object: GObject.Object): void
    /**
     * Assumes `pspec` is a property in an object class wrapped by `adaptor,`
     * this function will search for the specific parent adaptor class which
     * originally introduced `pspec`.
     * @param pspec a #GParamSpec
     */
    fromPspec(pspec: GObject.ParamSpec): WidgetAdaptor
    getBook(): string
    getCatalog(): string
    // Has conflict: getChildren(container: GObject.Object): GObject.Object[]
    getDisplayName(): string
    getGenericName(): string
    getIconName(): string
    // Has conflict: getInternalChild(object: GObject.Object, internalName: string): GObject.Object | null
    getMissingIcon(): string
    getName(): string
    getObjectType(): GObject.GType
    /**
     * Retrieves the #GladePropertyDef for `name` in  `adaptor'`s child properties
     * @param name a string
     */
    getPackPropertyDef(name: string): PropertyDef | null
    /**
     * Gets the default value for `property_id` on a widget governed by
     * `child_adaptor` when parented in a widget governed by `parent_adaptor`
     * @param containerAdaptor The #GladeWidgetAdaptor for the parent object
     * @param id The string property identifier
     */
    getPackingDefault(containerAdaptor: WidgetAdaptor, id: string): string
    getPackingProps(): PropertyDef[]
    getParentAdaptor(): WidgetAdaptor
    getProperties(): PropertyDef[]
    // Has conflict: getProperty(object: GObject.Object, propertyName: string, value: any): void
    /**
     * Retrieves the #GladePropertyDef for `name` in `adaptor`
     * @param name a string
     */
    getPropertyDef(name: string): PropertyDef | null
    /**
     * Looks up signal class `name` on `adaptor`.
     * @param name the name of the signal class.
     */
    getSignalDef(name: string): SignalDef | null
    getSignals(): SignalDef[]
    getTitle(): string
    /**
     * Get the _get_type () function name if it is set, a %NULL value means that the
     * default heuristic for getting the GType is enough for both Glade and GtkBuilder.
     */
    getTypeFunc(): string | null
    hasChild(container: GObject.Object, child: GObject.Object): boolean
    hasInternalChildren(): boolean
    /**
     * Checks whether or not this adaptor has support
     * to interface with child objects.
     */
    isContainer(): boolean
    /**
     * Add a packing action to `adaptor`.
     * If the action is present then it overrides label and stock
     * @param actionPath The identifier of this action in the action tree
     * @param label A translated label to show in the UI for this action
     * @param stock If set, this stock item will be shown in the UI along side the label.
     * @param important if this action is important.
     */
    packActionAdd(actionPath: string, label: string, stock: string, important: boolean): boolean
    /**
     * Remove an `adaptor'`s packing action.
     * @param actionPath The identifier of this action in the action tree
     */
    packActionRemove(actionPath: string): boolean
    /**
     * Create a list of packing actions.
     */
    packActionsNew(): WidgetAction[]
    // Has conflict: postCreate(object: GObject.Object, reason: CreateReason): void
    // Has conflict: readChild(widget: Widget, node: XmlNode): void
    // Has conflict: readWidget(widget: Widget, node: XmlNode): void
    /**
     * Registers `adaptor` into the Glade core (every supported
     * object type must have a registered adaptor).
     */
    register(): void
    // Has conflict: remove(container: GObject.Object, child: GObject.Object): void
    // Has conflict: replaceChild(container: GObject.Object, oldObj: GObject.Object, newObj: GObject.Object): void
    // Has conflict: setProperty(object: GObject.Object, propertyName: string, value: any): void
    // Has conflict: stringFromValue(def: PropertyDef, value: any): string
    // Has conflict: verifyProperty(object: GObject.Object, propertyName: string, value: any): boolean
    // Has conflict: writeChild(widget: Widget, context: XmlContext, node: XmlNode): void
    // Has conflict: writeWidget(widget: Widget, context: XmlContext, node: XmlNode): void
    // Has conflict: writeWidgetAfter(widget: Widget, context: XmlContext, node: XmlNode): void

    // Own virtual methods of Gladeui-2.0.Gladeui.WidgetAdaptor

    /**
     * An adaptor function to be called on widget actions.
     * @virtual 
     * @param object The #GObject
     * @param actionPath The action identifier in the action tree
     */
    actionActivate(object: GObject.Object, actionPath: string): void
    /**
     * This delegate function is used to create dynamically customized
     * submenus. Called only for actions that don't have children.
     * @virtual 
     * @param object The #GObject
     * @param actionPath The action identifier in the action tree
     */
    actionSubmenu(object: GObject.Object, actionPath: string): Gtk.Widget | null
    /**
     * Adds `child` to `container`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     */
    add(container: GObject.Object, child: GObject.Object): void
    /**
     * Checks whether `child` can be added to `parent`.
     * 
     * If `user_feedback` is %TRUE and `child` cannot be
     * added then this shows a notification dialog to the user
     * explaining why.
     * @virtual 
     * @param container A #GObject container
     * @param child A #GObject child
     * @param userFeedback whether a notification dialog should be presented in the case that the child cannot not be added.
     */
    addVerify(container: GObject.Object, child: GObject.Object, userFeedback: boolean): boolean
    /**
     * An adaptor function to be called on widget actions.
     * @virtual 
     * @param container The #GObject container
     * @param object The #GObject
     * @param actionPath The action identifier in the action tree
     */
    childActionActivate(container: GObject.Object, object: GObject.Object, actionPath: string): void
    /**
     * Gets `child'`s packing property identified by `property_name`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     * @param propertyName The id of the property
     * @param value The `GValue`
     */
    childGetProperty(container: GObject.Object, child: GObject.Object, propertyName: string, value: any): void
    /**
     * Sets `child'`s packing property identified by `property_name` to `value`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     * @param propertyName The id of the property
     * @param value The `GValue`
     */
    childSetProperty(container: GObject.Object, child: GObject.Object, propertyName: string, value: any): void
    /**
     * This delegate function is always called whenever setting any
     * properties with the exception of load time, and copy/paste time
     * (basically the two places where we recreate a hierarchy that we
     * already know "works") its basically an optional backend provided
     * boundary checker for properties.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     * @param propertyName The id of the property
     * @param value The `GValue`
     */
    childVerifyProperty(container: GObject.Object, child: GObject.Object, propertyName: string, value: any): boolean
    /**
     * This function is called to construct a GObject instance for
     * a #GladeWidget of the said `adaptor`. (provided for language
     * bindings that may need to construct a wrapper object).
     * @virtual 
     * @param nParameters amount of construct parameters
     * @param parameters array of construct #GParameter args to create              the new object with.
     */
    constructObject(nParameters: number, parameters: GObject.Parameter): GObject.Object
    /**
     * This is used to allow the backend to override the way an
     * editor page is layed out (note that editor widgets are created
     * on demand and not at startup).
     * @virtual 
     * @param type The #GladeEditorPageType
     */
    createEditable(type: EditorPageType): Editable
    /**
     * Creates a GladeEditorProperty to edit `def`
     * @virtual 
     * @param def The #GladePropertyDef to be edited
     * @param useCommand whether to use the GladeCommand interface to commit property changes
     */
    createEprop(def: PropertyDef, useCommand: boolean): EditorProperty
    deepPostCreate(object: GObject.Object, reason: CreateReason): void
    /**
     * Checks whether `widget` depends on `another` to be placed earlier in
     * the glade file.
     * @virtual 
     * @param widget A #GladeWidget of the adaptor
     * @param another another #GladeWidget
     */
    depends(widget: Widget, another: Widget): boolean
    /**
     * This function is called to destroy a GObject instance.
     * @virtual 
     * @param object The object to destroy
     */
    destroyObject(object: GObject.Object): void
    /**
     * Lists the children of `container`.
     * @virtual 
     * @param container The #GObject container
     */
    getChildren(container: GObject.Object): GObject.Object[]
    /**
     * Retrieves the internal object `internal_name` from `object`
     * @virtual 
     * @param object The #GObject
     * @param internalName The string identifier of the internal object
     */
    getInternalChild(object: GObject.Object, internalName: string): GObject.Object | null
    /**
     * Gets `value` of `property_name` on `object`.
     * @virtual 
     * @param object The #GObject
     * @param propertyName The property identifier
     * @param value The #GValue
     */
    getProperty(object: GObject.Object, propertyName: string, value: any): void

    // Overloads of getProperty

    /**
     * Gets a property of an object.
     * 
     * The `value` can be:
     * 
     *  - an empty #GValue initialized by %G_VALUE_INIT, which will be
     *    automatically initialized with the expected type of the property
     *    (since GLib 2.60)
     *  - a #GValue initialized with the expected type of the property
     *  - a #GValue initialized with a type to which the expected type
     *    of the property can be transformed
     * 
     * In general, a copy is made of the property contents and the caller is
     * responsible for freeing the memory by calling g_value_unset().
     * 
     * Note that g_object_get_property() is really intended for language
     * bindings, g_object_get() is much more convenient for C programming.
     * @param propertyName the name of the property to get
     * @param value return location for the property value
     */
    getProperty<T = unknown>(propertyName: string): T
    /**
     * An adaptor function to be called after the object is created
     * @virtual 
     * @param object The #GObject
     * @param reason The #GladeCreateReason that `object` was created for
     */
    postCreate(object: GObject.Object, reason: CreateReason): void
    /**
     * This function is called to update load a child `widget`
     * from `node` when loading xml files (will recurse into
     * glade_widget_read())
     * @virtual 
     * @param widget The #GladeWidget
     * @param node The #GladeXmlNode
     */
    readChild(widget: Widget, node: XmlNode): void
    /**
     * This function is called to update `widget` from `node`
     * when loading xml files.
     * @virtual 
     * @param widget The #GladeWidget
     * @param node The #GladeXmlNode
     */
    readWidget(widget: Widget, node: XmlNode): void
    /**
     * Removes `child` from `container`.
     * @virtual 
     * @param container The #GObject container
     * @param child The #GObject child
     */
    remove(container: GObject.Object, child: GObject.Object): void
    /**
     * Replaces `old_obj` with `new_obj` in `container` while positioning
     * `new_obj` where `old_obj` was and assigning it appropriate packing
     * property values.
     * @virtual 
     * @param container The #GObject container
     * @param oldObj The old #GObject child
     * @param newObj The new #GObject child
     */
    replaceChild(container: GObject.Object, oldObj: GObject.Object, newObj: GObject.Object): void
    /**
     * This delegate function is used to apply the property value on
     * the runtime object.
     * @virtual 
     * @param object The #GObject
     * @param propertyName The property identifier
     * @param value The #GValue
     */
    setProperty(object: GObject.Object, propertyName: string, value: any): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * For normal properties this is used to serialize
     * property values, for custom properties its still
     * needed to update the UI for undo/redo items etc.
     * @virtual 
     * @param def The #GladePropertyDef
     * @param value The #GValue to convert to a string
     */
    stringFromValue(def: PropertyDef, value: any): string
    /**
     * This delegate function is always called whenever setting any
     * properties with the exception of load time, and copy/paste time
     * (basically the two places where we recreate a hierarchy that we
     * already know "works") its basically an optional backend provided
     * boundary checker for properties.
     * @virtual 
     * @param object The #GObject
     * @param propertyName The property identifier
     * @param value The #GValue
     */
    verifyProperty(object: GObject.Object, propertyName: string, value: any): boolean
    /**
     * This function is called to write the child `widget` to `node`
     * when writing xml files (takes care of packing and recurses
     * into glade_widget_write())
     * @virtual 
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    writeChild(widget: Widget, context: XmlContext, node: XmlNode): void
    /**
     * This function is called to write `widget` to `node`
     * when writing xml files.
     * @virtual 
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    writeWidget(widget: Widget, context: XmlContext, node: XmlNode): void
    /**
     * This function is called to write `widget` to `node`
     * when writing xml files (after writing children)
     * @virtual 
     * @param widget The #GladeWidget
     * @param context The #GladeXmlContext
     * @param node The #GladeXmlNode
     */
    writeWidgetAfter(widget: Widget, context: XmlContext, node: XmlNode): void

    // Class property signals of Gladeui-2.0.Gladeui.WidgetAdaptor

    connect(sigName: "notify::book", callback: any): number
    on(sigName: "notify::book", callback: any): number
    once(sigName: "notify::book", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::book", ...args: any[]): void
    connect(sigName: "notify::catalog", callback: any): number
    on(sigName: "notify::catalog", callback: any): number
    once(sigName: "notify::catalog", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::catalog", ...args: any[]): void
    connect(sigName: "notify::cursor", callback: any): number
    on(sigName: "notify::cursor", callback: any): number
    once(sigName: "notify::cursor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cursor", ...args: any[]): void
    connect(sigName: "notify::generic-name", callback: any): number
    on(sigName: "notify::generic-name", callback: any): number
    once(sigName: "notify::generic-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::generic-name", ...args: any[]): void
    connect(sigName: "notify::icon-name", callback: any): number
    on(sigName: "notify::icon-name", callback: any): number
    once(sigName: "notify::icon-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::icon-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::query", callback: any): number
    on(sigName: "notify::query", callback: any): number
    once(sigName: "notify::query", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::query", ...args: any[]): void
    connect(sigName: "notify::special-child-type", callback: any): number
    on(sigName: "notify::special-child-type", callback: any): number
    once(sigName: "notify::special-child-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::special-child-type", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::type", callback: any): number
    on(sigName: "notify::type", callback: any): number
    once(sigName: "notify::type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WidgetAdaptor extends GObject.Object {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAdaptor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.WidgetAdaptor

    constructor(config?: WidgetAdaptor.ConstructorProperties) 
    _init(config?: WidgetAdaptor.ConstructorProperties): void
    /**
     * Dynamically creates a subclass of #GladeWidgetAdaptor and subclasses
     * the closest parent adaptor (parent class adapters must be created/registered
     * prior to child classes, otherwise inheritance wont work) and parses in
     * the relevant catalog info.
     * @param catalog A #GladeCatalog
     * @param classNode the #GladeXmlNode to load
     * @param module the plugin GModule.
     */
    static fromCatalog(catalog: Catalog, classNode: XmlNode, module: GModule.Module): WidgetAdaptor
    static getByName(name: string): WidgetAdaptor | null
    static getByType(type: GObject.GType): WidgetAdaptor | null
    /**
     * Compiles a list of all registered adaptors.
     */
    static listAdaptors(): WidgetAdaptor[]
}

export interface AdaptorChooserClass {

    // Own fields of Gladeui-2.0.Gladeui.AdaptorChooserClass

    parentClass: Gtk.BoxClass
}

export abstract class AdaptorChooserClass {

    // Own properties of Gladeui-2.0.Gladeui.AdaptorChooserClass

    static name: string
}

export interface AppClass {

    // Own fields of Gladeui-2.0.Gladeui.AppClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class AppClass {

    // Own properties of Gladeui-2.0.Gladeui.AppClass

    static name: string
}

export interface BaseEditorClass {

    // Own fields of Gladeui-2.0.Gladeui.BaseEditorClass

    parentClass: Gtk.BoxClass
    childSelected: (editor: BaseEditor, gchild: Widget) => void
    changeType: (editor: BaseEditor, gchild: Widget, type: GObject.GType) => boolean
    getDisplayName: (editor: BaseEditor, gchild: Widget) => string
    deleteChild: (editor: BaseEditor, parent: Widget, gchild: Widget) => boolean
    moveChild: (editor: BaseEditor, gparent: Widget, gchild: Widget) => boolean
    padding: object[]
}

export abstract class BaseEditorClass {

    // Own properties of Gladeui-2.0.Gladeui.BaseEditorClass

    static name: string
}

export interface Catalog {

    // Owm methods of Gladeui-2.0.Gladeui.Catalog

    getAdaptors(): WidgetAdaptor[]
    getBook(): string
    getDomain(): string
    getIconPrefix(): string
    getMajorVersion(): number
    getMinorVersion(): number
    getName(): string
    getPrefix(): string
    getTargets(): TargetableVersion[]
    getWidgetGroups(): WidgetGroup[]
}

export class Catalog {

    // Own properties of Gladeui-2.0.Gladeui.Catalog

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Catalog

    /**
     * Adds a new path to the list of path to look catalogs for.
     * @param path the new path containing catalogs
     */
    static addPath(path: string): void
    /**
     * Destroy and free all resources related with every loaded catalog.
     */
    static destroyAll(): void
    static getExtraPaths(): string[]
    static isLoaded(name: string): boolean
    /**
     * Loads all available catalogs in the system.
     * First loads catalogs from GLADE_ENV_CATALOG_PATH,
     * then from glade_app_get_catalogs_dir() and finally from paths specified with
     * glade_catalog_add_path()
     */
    static loadAll(): Catalog[]
    /**
     * Remove path from the list of path to look catalogs for.
     * %NULL to remove all paths.
     * @param path the new path containing catalogs or %NULL to remove all of them
     */
    static removePath(path: string | null): void
}

export interface CellRendererIconClass {

    // Own fields of Gladeui-2.0.Gladeui.CellRendererIconClass

    parentClass: Gtk.CellRendererPixbufClass
    activate: (cellRendererIcon: CellRendererIcon, path: string) => void
}

export abstract class CellRendererIconClass {

    // Own properties of Gladeui-2.0.Gladeui.CellRendererIconClass

    static name: string
}

export interface ClipboardClass {

    // Own fields of Gladeui-2.0.Gladeui.ClipboardClass

    parentClass: GObject.ObjectClass
    padding: object[]
}

export abstract class ClipboardClass {

    // Own properties of Gladeui-2.0.Gladeui.ClipboardClass

    static name: string
}

export interface CommandClass {

    // Own fields of Gladeui-2.0.Gladeui.CommandClass

    parentClass: GObject.ObjectClass
    execute: (command: Command) => boolean
    undo: (command: Command) => boolean
    unifies: (command: Command, other: Command) => boolean
    collapse: (command: Command, other: Command) => void
    padding: object[]
}

export abstract class CommandClass {

    // Own properties of Gladeui-2.0.Gladeui.CommandClass

    static name: string
}

export interface CommandSetPropData {

    // Own fields of Gladeui-2.0.Gladeui.CommandSetPropData

    /**
     * A #GladeProperty to set
     * @field 
     */
    property: Property
    /**
     * The new #GValue to assign to `property`
     * @field 
     */
    newValue: any
    /**
     * The old #GValue of `property`
     * @field 
     */
    oldValue: any
}

/**
 * #GladeProperty can be set in a list as one command,
 * for Undo purposes; we store the list of #GladeCommandSetPropData with
 * their old and new #GValue.
 * @record 
 */
export class CommandSetPropData {

    // Own properties of Gladeui-2.0.Gladeui.CommandSetPropData

    static name: string
}

export interface Cursor {

    // Own fields of Gladeui-2.0.Gladeui.Cursor

    selector: Gdk.Cursor
    addWidget: Gdk.Cursor
    resizeTopLeft: Gdk.Cursor
    resizeTopRight: Gdk.Cursor
    resizeBottomLeft: Gdk.Cursor
    resizeBottomRight: Gdk.Cursor
    resizeLeft: Gdk.Cursor
    resizeRight: Gdk.Cursor
    resizeTop: Gdk.Cursor
    resizeBottom: Gdk.Cursor
    drag: Gdk.Cursor
    addWidgetPixbuf: GdkPixbuf.Pixbuf
}

export class Cursor {

    // Own properties of Gladeui-2.0.Gladeui.Cursor

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.Cursor

    static getAddWidgetPixbuf(): GdkPixbuf.Pixbuf
    /**
     * Initializes cursors for use with glade_cursor_set().
     */
    static init(): void
    /**
     * Sets the cursor for `window` to something appropriate based on `type`.
     * (also sets the cursor on all visible project widgets)
     * @param project 
     * @param window a #GdkWindow
     * @param type a #GladeCursorType
     */
    static set(project: Project, window: Gdk.Window, type: CursorType): void
}

export interface DesignViewClass {

    // Own fields of Gladeui-2.0.Gladeui.DesignViewClass

    parentClass: Gtk.BoxClass
    padding: object[]
}

export abstract class DesignViewClass {

    // Own properties of Gladeui-2.0.Gladeui.DesignViewClass

    static name: string
}

export interface EditableInterface {

    // Own fields of Gladeui-2.0.Gladeui.EditableInterface

    gIface: GObject.TypeInterface
    load: (editable: Editable, widget: Widget) => void
    setShowName: (editable: Editable, showName: boolean) => void
}

export abstract class EditableInterface {

    // Own properties of Gladeui-2.0.Gladeui.EditableInterface

    static name: string
}

export interface EditorClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorClass

    parentClass: Gtk.BoxClass
    padding: object[]
}

export abstract class EditorClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorClass

    static name: string
}

export interface EditorPropertyClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorPropertyClass

    parentClass: Gtk.BoxClass
    load: (eprop: EditorProperty, property: Property) => void
    commit: (eprop: EditorProperty, value: any) => void
    changed: (eprop: EditorProperty, property: Property) => object | null
    padding: object[]
}

export abstract class EditorPropertyClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorPropertyClass

    static name: string
}

export interface EditorSkeletonClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorSkeletonClass

    parentClass: Gtk.BoxClass
}

export abstract class EditorSkeletonClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorSkeletonClass

    static name: string
}

export interface EditorTableClass {

    // Own fields of Gladeui-2.0.Gladeui.EditorTableClass

    parent: Gtk.GridClass
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
}

export abstract class EditorTableClass {

    // Own properties of Gladeui-2.0.Gladeui.EditorTableClass

    static name: string
}

export interface IDAllocator {

    // Owm methods of Gladeui-2.0.Gladeui.IDAllocator

    /**
     * TODO: write me
     */
    allocate(): number
    /**
     * Frees `allocator` and its associated memory
     */
    destroy(): void
    /**
     * TODO: write me
     * @param id the id given by glade_id_allocator_allocate()
     */
    release(id: number): void
}

export class IDAllocator {

    // Own properties of Gladeui-2.0.Gladeui.IDAllocator

    static name: string
}

export interface InspectorClass {

    // Own fields of Gladeui-2.0.Gladeui.InspectorClass

    parentClass: Gtk.BoxClass
    selectionChanged: (inspector: Inspector) => void
    itemActivated: (inspector: Inspector) => void
    padding: object[]
}

export abstract class InspectorClass {

    // Own properties of Gladeui-2.0.Gladeui.InspectorClass

    static name: string
}

export interface NameContext {

    // Owm methods of Gladeui-2.0.Gladeui.NameContext

    addName(name: string): boolean
    destroy(): void
    hasName(name: string): boolean
    nNames(): number
    newName(baseName: string): string
    releaseName(name: string): void
}

export class NameContext {

    // Own properties of Gladeui-2.0.Gladeui.NameContext

    static name: string
}

export interface NamedIconChooserDialogClass {

    // Own fields of Gladeui-2.0.Gladeui.NamedIconChooserDialogClass

    parentClass: Gtk.DialogClass
    iconActivated: (dialog: NamedIconChooserDialog) => void
    selectionChanged: (dialog: NamedIconChooserDialog) => void
    padding: object[]
}

export abstract class NamedIconChooserDialogClass {

    // Own properties of Gladeui-2.0.Gladeui.NamedIconChooserDialogClass

    static name: string
}

export interface PaletteClass {

    // Own fields of Gladeui-2.0.Gladeui.PaletteClass

    parentClass: Gtk.BoxClass
    refresh: (palette: Palette) => void
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
}

export abstract class PaletteClass {

    // Own properties of Gladeui-2.0.Gladeui.PaletteClass

    static name: string
}

export interface PalettePrivate {
}

export class PalettePrivate {

    // Own properties of Gladeui-2.0.Gladeui.PalettePrivate

    static name: string
}

export interface ParamSpecObjects {

    // Owm methods of Gladeui-2.0.Gladeui.ParamSpecObjects

    getType(): GObject.GType
    setType(type: GObject.GType): void
}

export class ParamSpecObjects {

    // Own properties of Gladeui-2.0.Gladeui.ParamSpecObjects

    static name: string
}

export interface PlaceholderClass {

    // Own fields of Gladeui-2.0.Gladeui.PlaceholderClass

    parentClass: Gtk.WidgetClass
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
}

export abstract class PlaceholderClass {

    // Own properties of Gladeui-2.0.Gladeui.PlaceholderClass

    static name: string
}

export interface PlaceholderPrivate {
}

export class PlaceholderPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PlaceholderPrivate

    static name: string
}

export interface ProjectClass {

    // Own fields of Gladeui-2.0.Gladeui.ProjectClass

    parentClass: GObject.ObjectClass
    addObject: (project: Project, object: Widget) => void
    removeObject: (project: Project, object: Widget) => void
    undo: (project: Project) => void
    redo: (project: Project) => void
    nextUndoItem: (project: Project) => Command
    nextRedoItem: (project: Project) => Command
    pushUndo: (project: Project, cmd: Command) => void
    changed: (project: Project, command: Command, forward: boolean) => void
    widgetNameChanged: (project: Project, widget: Widget) => void
    selectionChanged: (project: Project) => void
    close: (project: Project) => void
    parseFinished: (project: Project) => void
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
    gladeReserved5: () => void
    gladeReserved6: () => void
    gladeReserved7: () => void
    gladeReserved8: () => void
}

export abstract class ProjectClass {

    // Own properties of Gladeui-2.0.Gladeui.ProjectClass

    static name: string
}

export interface ProjectPrivate {
}

export class ProjectPrivate {

    // Own properties of Gladeui-2.0.Gladeui.ProjectPrivate

    static name: string
}

export interface PropertyClass {

    // Own fields of Gladeui-2.0.Gladeui.PropertyClass

    parentClass: GObject.ObjectClass
    dup: (templateProp: Property, widget: Widget) => Property
    equalsValue: (property: Property, value: any) => boolean
    setValue: (property: Property, value: any) => boolean
    getValue: (property: Property, value: any) => void
    sync: (property: Property) => void
    load: (property: Property) => void
    valueChanged: (property: Property, oldValue: any, newValue: any) => void
    tooltipChanged: (property: Property, tooltip: string, insensitiveTooltip: string, supportWarning: string) => void
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
    gladeReserved5: () => void
    gladeReserved6: () => void
}

export abstract class PropertyClass {

    // Own properties of Gladeui-2.0.Gladeui.PropertyClass

    static name: string
}

export interface PropertyDef {

    // Owm methods of Gladeui-2.0.Gladeui.PropertyDef

    atk(): boolean
    clone(): PropertyDef
    common(): boolean
    /**
     * Compares value1 with value2 according to `property_def`.
     * @param value1 a GValue of correct type for `property_def`
     * @param value2 a GValue of correct type for `property_def`
     */
    compare(value1: any, value2: any): number
    createType(): string
    customLayout(): boolean
    deprecated(): boolean
    deprecatedSinceMajor(): number
    deprecatedSinceMinor(): number
    /**
     * Frees `property_def` and its associated memory.
     */
    free(): void
    getAdaptor(): WidgetAdaptor
    getConstructOnly(): boolean
    getDefault(): any
    getIgnore(): boolean
    getIsPacking(): boolean
    getName(): string
    getOriginalDefault(): any
    getPspec(): GObject.ParamSpec
    getTooltip(): string
    getVirtual(): boolean
    id(): string
    isObject(): boolean
    isVisible(): boolean
    loadDefaultsFromSpec(): void
    /**
     * Creates and appropriate GtkAdjustment for use in the editor
     */
    makeAdjustment(): Gtk.Adjustment
    makeGvalueFromString(string: string, project: Project): any
    makeStringFromGvalue(value: any): string
    match(comp: PropertyDef): boolean
    multiline(): boolean
    needsSync(): boolean
    optional(): boolean
    optionalDefault(): boolean
    parentlessWidget(): boolean
    query(): boolean
    save(): boolean
    saveAlways(): boolean
    setAdaptor(adaptor: WidgetAdaptor): void
    setConstructOnly(constructOnly: boolean): void
    setIgnore(ignore: boolean): void
    setIsPacking(isPacking: boolean): void
    setName(name: string): void
    setPspec(pspec: GObject.ParamSpec): void
    setTooltip(tooltip: string): void
    setVirtual(value: boolean): void
    sinceMajor(): number
    sinceMinor(): number
    stock(): boolean
    stockIcon(): boolean
    themedIcon(): boolean
    transferOnPaste(): boolean
    translatable(): boolean
    voidValue(value: any): boolean
    weight(): number
}

export class PropertyDef {

    // Own properties of Gladeui-2.0.Gladeui.PropertyDef

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.PropertyDef

    constructor(adaptor: WidgetAdaptor, id: string) 
    static new(adaptor: WidgetAdaptor, id: string): PropertyDef
    static newFromSpec(adaptor: WidgetAdaptor, spec: GObject.ParamSpec): PropertyDef
    static newFromSpecFull(adaptor: WidgetAdaptor, spec: GObject.ParamSpec, needHandle: boolean): PropertyDef
    static getDefaultFromSpec(spec: GObject.ParamSpec): any
    static makeFlagsFromString(type: GObject.GType, string: string): number
    /**
     * This function assigns "weight" to each property in its natural order staring from 1.
     * If parent is 0 weight will be set for every #GladePropertyDef in the list.
     * This function will not override weight if it is already set (weight >= 0.0)
     * @param properties a list of #GladePropertyDef
     * @param parent the #GType of the parent
     */
    static setWeights(properties: PropertyDef[], parent: GObject.GType): void
    /**
     * Updates the `property_def_ref` with the contents of the node in the xml
     * file. Only the values found in the xml file are overridden.
     * @param node the property node
     * @param objectType the #GType of the owning object
     * @param propertyDefRef a pointer to the property class
     * @param domain the domain to translate catalog strings from
     */
    static updateFromNode(node: XmlNode, objectType: GObject.GType, propertyDefRef: PropertyDef | null, domain: string): [ /* returnType */ boolean, /* propertyDefRef */ PropertyDef | null ]
}

export interface PropertyLabelClass {

    // Own fields of Gladeui-2.0.Gladeui.PropertyLabelClass

    parentClass: Gtk.EventBoxClass
}

export abstract class PropertyLabelClass {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabelClass

    static name: string
}

export interface PropertyLabelPrivate {
}

export class PropertyLabelPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PropertyLabelPrivate

    static name: string
}

export interface PropertyPrivate {
}

export class PropertyPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PropertyPrivate

    static name: string
}

export interface PropertyShellClass {

    // Own fields of Gladeui-2.0.Gladeui.PropertyShellClass

    parentClass: Gtk.BoxClass
}

export abstract class PropertyShellClass {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShellClass

    static name: string
}

export interface PropertyShellPrivate {
}

export class PropertyShellPrivate {

    // Own properties of Gladeui-2.0.Gladeui.PropertyShellPrivate

    static name: string
}

export interface SignalClass {

    // Own fields of Gladeui-2.0.Gladeui.SignalClass

    objectClass: GObject.ObjectClass
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
}

export abstract class SignalClass {

    // Own properties of Gladeui-2.0.Gladeui.SignalClass

    static name: string
}

export interface SignalDef {

    // Owm methods of Gladeui-2.0.Gladeui.SignalDef

    /**
     * Clones a #GladeSignalDef
     */
    clone(): SignalDef
    /**
     * Get if the signal is flagged as deprecated.
     */
    deprecated(): boolean
    /**
     * Get the major version that deprecated this signal.
     */
    deprecatedSinceMajor(): number
    /**
     * Get the minor version that deprecated this signal.
     */
    deprecatedSinceMinor(): number
    /**
     * Frees a #GladeSignalDef
     */
    free(): void
    /**
     * Get #GladeWidgetAdaptor associated with the signal.
     */
    getAdaptor(): WidgetAdaptor
    /**
     * Get the combination of GSignalFlags specifying detail of when the default
     * handler is to be invoked.
     */
    getFlags(): GObject.SignalFlags
    /**
     * Get the name of the signal.
     */
    getName(): string
    /**
     * Get the name of the object class that this signal belongs to.
     */
    getObjectTypeName(): string
    /**
     * Set if the signal is deprecated.
     * @param deprecated %TRUE if the signal is deprecated
     */
    setDeprecated(deprecated: boolean): void
    /**
     * Set the major and minor version that introduced this signal.
     * @param sinceMajor the major version.
     * @param sinceMinor the minor version.
     */
    setSince(sinceMajor: number, sinceMinor: number): void
    /**
     * Get the major version that introduced this signal.
     */
    sinceMajor(): number
    /**
     * Get the minor version that introduced this signal.
     */
    sinceMinor(): number
    updateFromNode(node: XmlNode, domain: string): void
}

export class SignalDef {

    // Own properties of Gladeui-2.0.Gladeui.SignalDef

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.SignalDef

    /**
     * Creates a new #GladeSignalDef
     * @constructor 
     * @param adaptor a #GladeWidgetAdaptor
     * @param forType a #GType
     * @param signalId the signal id
     */
    constructor(adaptor: WidgetAdaptor, forType: GObject.GType, signalId: number) 
    /**
     * Creates a new #GladeSignalDef
     * @constructor 
     * @param adaptor a #GladeWidgetAdaptor
     * @param forType a #GType
     * @param signalId the signal id
     */
    static new(adaptor: WidgetAdaptor, forType: GObject.GType, signalId: number): SignalDef
}

export interface SignalEditorClass {

    // Own fields of Gladeui-2.0.Gladeui.SignalEditorClass

    parentClass: Gtk.BoxClass
    padding: object[]
}

export abstract class SignalEditorClass {

    // Own properties of Gladeui-2.0.Gladeui.SignalEditorClass

    static name: string
}

export interface SignalModelClass {

    // Own fields of Gladeui-2.0.Gladeui.SignalModelClass

    parentClass: GObject.ObjectClass
}

export abstract class SignalModelClass {

    // Own properties of Gladeui-2.0.Gladeui.SignalModelClass

    static name: string
}

export interface SignalModelPrivate {
}

export class SignalModelPrivate {

    // Own properties of Gladeui-2.0.Gladeui.SignalModelPrivate

    static name: string
}

export interface SignalPrivate {
}

export class SignalPrivate {

    // Own properties of Gladeui-2.0.Gladeui.SignalPrivate

    static name: string
}

export interface TargetableVersion {

    // Own fields of Gladeui-2.0.Gladeui.TargetableVersion

    major: number
    minor: number
}

export class TargetableVersion {

    // Own properties of Gladeui-2.0.Gladeui.TargetableVersion

    static name: string
}

export interface WidgetActionClass {

    // Own fields of Gladeui-2.0.Gladeui.WidgetActionClass

    parentClass: GObject.ObjectClass
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
}

export abstract class WidgetActionClass {

    // Own properties of Gladeui-2.0.Gladeui.WidgetActionClass

    static name: string
}

export interface WidgetActionDef {

    // Own fields of Gladeui-2.0.Gladeui.WidgetActionDef

    id: string
    path: string
    label: string
    stock: string
    important: boolean
    actions: object[]

    // Owm methods of Gladeui-2.0.Gladeui.WidgetActionDef

    clone(): WidgetActionDef
    /**
     * Frees a GladeWidgetActionDef.
     */
    free(): void
    setImportant(important: boolean): void
    setLabel(label: string): void
    setStock(stock: string): void
}

export class WidgetActionDef {

    // Own properties of Gladeui-2.0.Gladeui.WidgetActionDef

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.WidgetActionDef

    constructor(path: string) 
    static new(path: string): WidgetActionDef
}

export interface WidgetActionPrivate {
}

export class WidgetActionPrivate {

    // Own properties of Gladeui-2.0.Gladeui.WidgetActionPrivate

    static name: string
}

export interface WidgetAdaptorClass {

    // Own fields of Gladeui-2.0.Gladeui.WidgetAdaptorClass

    parentClass: GObject.ObjectClass
    versionSinceMajor: number
    versionSinceMinor: number
    defaultWidth: number
    defaultHeight: number
    deprecated: number
    toplevel: number
    usePlaceholders: number
    constructObject: ConstructObjectFunc
    deepPostCreate: PostCreateFunc
    postCreate: PostCreateFunc
    getInternalChild: GetInternalFunc
    verifyProperty: VerifyPropertyFunc
    setProperty: SetPropertyFunc
    getProperty: GetPropertyFunc
    addVerify: AddChildVerifyFunc
    add: AddChildFunc
    remove: RemoveChildFunc
    getChildren: GetChildrenFunc
    childVerifyProperty: ChildVerifyPropertyFunc
    childSetProperty: ChildSetPropertyFunc
    childGetProperty: ChildGetPropertyFunc
    replaceChild: ReplaceChildFunc
    actionActivate: ActionActivateFunc
    childActionActivate: ChildActionActivateFunc
    actionSubmenu: ActionSubmenuFunc
    depends: DependsFunc
    readWidget: ReadWidgetFunc
    writeWidget: WriteWidgetFunc
    readChild: ReadWidgetFunc
    writeChild: WriteWidgetFunc
    createEprop: CreateEPropFunc
    stringFromValue: StringFromValueFunc
    createEditable: CreateEditableFunc
    destroyObject: DestroyObjectFunc
    writeWidgetAfter: WriteWidgetFunc
    deprecatedSinceMajor: number
    deprecatedSinceMinor: number
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
    gladeReserved5: () => void
}

export abstract class WidgetAdaptorClass {

    // Own properties of Gladeui-2.0.Gladeui.WidgetAdaptorClass

    static name: string
}

export interface WidgetClass {

    // Own fields of Gladeui-2.0.Gladeui.WidgetClass

    parentClass: GObject.InitiallyUnownedClass
    addChild: (parent: Widget, child: Widget, atMouse: boolean) => void
    removeChild: (parent: Widget, child: Widget) => void
    replaceChild: (parent: Widget, oldObject: GObject.Object, newObject: GObject.Object) => void
    addSignalHandler: (widget: Widget, signalHandler: Signal) => void
    removeSignalHandler: (widget: Widget, signalHandler: Signal) => void
    changeSignalHandler: (widget: Widget, newSignalHandler: Signal) => void
    buttonPressEvent: (widget: Widget, event: Gdk.Event) => number
    buttonReleaseEvent: (widget: Widget, event: Gdk.Event) => number
    motionNotifyEvent: (widget: Widget, event: Gdk.Event) => number
    event: (gwidget: Widget, event: Gdk.Event) => boolean
    gladeReserved1: () => void
    gladeReserved2: () => void
    gladeReserved3: () => void
    gladeReserved4: () => void
    gladeReserved5: () => void
    gladeReserved6: () => void
    gladeReserved7: () => void
    gladeReserved8: () => void
}

export abstract class WidgetClass {

    // Own properties of Gladeui-2.0.Gladeui.WidgetClass

    static name: string
}

export interface WidgetGroup {

    // Owm methods of Gladeui-2.0.Gladeui.WidgetGroup

    getAdaptors(): WidgetAdaptor[]
    getExpanded(): boolean
    getName(): string
    getTitle(): string
}

export class WidgetGroup {

    // Own properties of Gladeui-2.0.Gladeui.WidgetGroup

    static name: string
}

export interface WidgetPrivate {
}

export class WidgetPrivate {

    // Own properties of Gladeui-2.0.Gladeui.WidgetPrivate

    static name: string
}

export interface XmlContext {

    // Owm methods of Gladeui-2.0.Gladeui.XmlContext

    copy(): XmlContext
    /**
     * Frees the memory allocated by #GladeXmlContext.
     */
    free(): void
    /**
     * Get the #GladeXmlDoc this `context` refers to.
     */
    getDoc(): XmlDoc
}

export class XmlContext {

    // Own properties of Gladeui-2.0.Gladeui.XmlContext

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.XmlContext

    constructor(doc: XmlDoc, nameSpace: string | null) 
    static new(doc: XmlDoc, nameSpace: string | null): XmlContext
    /**
     * Creates a new #GladeXmlContext from the given path.
     * @constructor 
     * @param fullPath the path to the XML file
     * @param nspace the expected namespace
     * @param rootName the expected root name
     */
    static newFromPath(fullPath: string, nspace: string | null, rootName: string | null): XmlContext
}

export interface XmlDoc {

    // Owm methods of Gladeui-2.0.Gladeui.XmlDoc

    getRoot(): XmlNode
    newComment(comment: string): XmlNode
    /**
     * Increases the reference of the #GladeXmlDoc.
     */
    ref(): XmlDoc
    save(fullPath: string): number
    setRoot(node: XmlNode): void
    /**
     * Decreases the reference of the #GladeXmlDoc.
     */
    unref(): void
}

export class XmlDoc {

    // Own properties of Gladeui-2.0.Gladeui.XmlDoc

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.XmlDoc

    /**
     * Creates a new #GladeXmlDoc.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #GladeXmlDoc.
     * @constructor 
     */
    static new(): XmlDoc
}

export interface XmlNode {

    // Owm methods of Gladeui-2.0.Gladeui.XmlNode

    addNextSibling(newNode: XmlNode): XmlNode
    addPrevSibling(newNode: XmlNode): XmlNode
    appendChild(child: XmlNode): void
    copy(): XmlNode
    delete(): void
    getChildren(): XmlNode
    getChildrenWithComments(): XmlNode
    getName(): string
    getParent(): XmlNode
    isComment(): boolean
    next(): XmlNode
    nextWithComments(): XmlNode
    prevWithComments(): XmlNode
    remove(): void
    setPropertyBoolean(name: string, value: boolean): void
    /**
     * Set a property as a string in the `node_in`. Note that %NULL `string` value
     * Are simply ignored and not written in the XML.
     * @param name the name of the property to set
     * @param string the string value of the property to set
     */
    setPropertyString(name: string, string: string | null): void
    /**
     * This is a wrapper around glade_xml_node_verify_silent(), only it emits
     * a g_warning() if `node_in` has a name different than `name`.
     * @param name a string
     */
    verify(name: string): boolean
    verifySilent(name: string): boolean
}

export class XmlNode {

    // Own properties of Gladeui-2.0.Gladeui.XmlNode

    static name: string

    // Constructors of Gladeui-2.0.Gladeui.XmlNode

    constructor(context: XmlContext, name: string) 
    static new(context: XmlContext, name: string): XmlNode
    static newComment(context: XmlContext, comment: string): XmlNode
}
