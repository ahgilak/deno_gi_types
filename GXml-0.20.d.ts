
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GXml-0.20
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';

export enum CssCombiner {
    NULL,
    NONE,
    INSIDE,
    AND,
    PARENT,
    AFTER,
    PRECEDED,
}
export enum CssSelectorType {
    CLASS,
    ID,
    ALL,
    ELEMENT,
    ATTRIBUTE,
    ATTRIBUTE_EQUAL,
    ATTRIBUTE_CONTAINS,
    ATTRIBUTE_SUBSTRING,
    ATTRIBUTE_STARTS_WITH,
    ATTRIBUTE_STARTS_WITH_WORD,
    ATTRIBUTE_ENDS_WITH,
    PSEUDO_CLASS,
}
export enum NodeType {
    INVALID,
    ELEMENT,
    ATTRIBUTE,
    TEXT,
    CDATA_SECTION,
    ENTITY_REFERENCE,
    ENTITY,
    PROCESSING_INSTRUCTION,
    COMMENT,
    DOCUMENT,
    DOCUMENT_TYPE,
    DOCUMENT_FRAGMENT,
    NOTATION,
}
export enum XPathObjectType {
    UNDEFINED,
    NODESET,
    BOOLEAN,
    NUMBER,
    STRING,
    POINT,
    RANGE,
    LOCATIONSET,
    USERS,
    XSLT_TREE,
}
export enum CssSelectorError {
    NULL,
    EOF,
    NOT,
    PSEUDO,
    ATTRIBUTE,
    IDENTIFIER,
    COMBINER,
}
export enum DomDocumentError {
    FILE_NOT_FOUND_ERROR,
    INVALID_DOCUMENT_ERROR,
}
export enum DomError {
    INDEX_SIZE_ERROR,
    DOMSTRING_SIZE_ERROR,
    HIERARCHY_REQUEST_ERROR,
    WRONG_DOCUMENT_ERROR,
    INVALID_CHARACTER_ERROR,
    NO_DATA_ALLOWED_ERROR,
    NO_MODIFICATION_ALLOWED_ERROR,
    NOT_FOUND_ERROR,
    NOT_SUPPORTED_ERROR,
    INUSE_ATTRIBUTE_ERROR,
    INVALID_STATE_ERROR,
    SYNTAX_ERROR,
    INVALID_MODIFICATION_ERROR,
    NAMESPACE_ERROR,
    INVALID_ACCESS_ERROR,
    VALIDATION_ERROR,
    TYPE_MISMATCH_ERROR,
    SECURITY_ERROR,
    NETWORK_ERROR,
    ABORT_ERROR,
    URL_MISMATCH_ERROR,
    QUOTA_EXCEEDED_ERROR,
    TIME_OUT_ERROR,
    INVALID_NODE_TYPE_ERROR,
    DATA_CLONE_ERROR,
}
export enum EnumerationError {
    INVALID_VALUE,
    INVALID_TEXT,
}
export enum IXsdSchemaError {
    INVALIDATION_ERROR,
}
export enum ParserError {
    INVALID_DATA_ERROR,
    INVALID_FILE_ERROR,
    INVALID_STREAM_ERROR,
}
export enum Error {
    NOT_SUPPORTED,
    PARSER,
    WRITER,
}
export enum XPathError {
    EXPRESSION_OK,
    NUMBER_ERROR,
    UNFINISHED_LITERAL_ERROR,
    START_LITERAL_ERROR,
    VARIABLE_REF_ERROR,
    UNDEF_VARIABLE_ERROR,
    INVALID_PREDICATE_ERROR,
    EXPR_ERROR,
    UNCLOSED_ERROR,
    UNKNOWN_FUNC_ERROR,
    INVALID_OPERAND,
    INVALID_TYPE,
    INVALID_ARITY,
    INVALID_CTXT_SIZE,
    INVALID_CTXT_POSITION,
    MEMORY_ERROR,
    XPTR_SYNTAX_ERROR,
    XPTR_RESOURCE_ERROR,
    XPTR_SUB_RESOURCE_ERROR,
    UNDEF_PREFIX_ERROR,
    ENCODING_ERROR,
    INVALID_CHAR_ERROR,
    INVALID_CTXT,
}
export enum XPathObjectError {
    INVALID_NAMESPACE_ERROR,
}
export enum DomNodeFilterFilter {
    ACCEPT,
    REJECT,
    SKIP,
}
export enum DomEventPhase {
    NONE,
    CAPTURING_PHASE,
    AT_TARGET,
    BUBBLING_PHASE,
}
export enum DomNodeNodeType {
    INVALID,
    ELEMENT_NODE,
    ATTRIBUTE_NODE,
    TEXT_NODE,
    CDATA_SECTION_NODE,
    ENTITY_REFERENCE_NODE,
    ENTITY_NODE,
    PROCESSING_INSTRUCTION_NODE,
    COMMENT_NODE,
    DOCUMENT_NODE,
    DOCUMENT_TYPE_NODE,
    DOCUMENT_FRAGMENT_NODE,
    NOTATION_NODE,
}
export enum DomRangeBoundaryPoints {
    START_TO_START,
    START_TO_END,
    END_TO_END,
    END_TO_START,
}
export enum DomEventFlags {
    STOP_PROPAGATION_FLAG,
    STOP_IMMEDIATE_PROPAGATION_FLAG,
    CANCELED_FLAG,
    INITIALIZED_FLAG,
    DISPATCH_FLAG,
}
export enum DomNodeDocumentPosition {
    NONE,
    DISCONNECTED,
    PRECEDING,
    FOLLOWING,
    CONTAINS,
    CONTAINED_BY,
    IMPLEMENTATION_SPECIFIC,
}
export interface DomMutationCallback {
    (mutations: Gee.List, observer: DomMutationObserver): void
}
export module Collection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Collection

        element?: DomElement | null
        itemsType?: GObject.GType | null
    }

}

export interface Collection extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Collection

    readonly nodesIndex: GLib.Queue
    element: DomElement
    readonly itemsName: string
    itemsType: GObject.GType

    // Owm methods of GXml-0.20.GXml.Collection

    // Has conflict: getNodesIndex(): GLib.Queue
    // Has conflict: getElement(): DomElement
    // Has conflict: setElement(value: DomElement): void
    // Has conflict: getItemsName(): string
    // Has conflict: getItemsType(): GObject.GType
    // Has conflict: setItemsType(value: GObject.GType): void
    // Has conflict: search(): void
    // Has conflict: getItem(index: number): DomElement | null
    // Has conflict: append(node: DomElement): void
    // Has conflict: getLength(): number
    // Has conflict: initialize(t: GObject.GType): void
    // Has conflict: createItem(): DomElement | null
    // Has conflict: validateAppend(index: number, element: DomElement): boolean
    // Has conflict: clear(): void

    // Own virtual methods of GXml-0.20.GXml.Collection

    getNodesIndex(): GLib.Queue
    getElement(): DomElement
    setElement(value: DomElement): void
    getItemsName(): string
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void
    search(): void
    getItem(index: number): DomElement | null
    append(node: DomElement): void
    getLength(): number
    initialize(t: GObject.GType): void
    createItem(): DomElement | null
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Class property signals of GXml-0.20.GXml.Collection

    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Collection {

    // Own properties of GXml-0.20.GXml.Collection

    static name: string

    // Constructors of GXml-0.20.GXml.Collection

    constructor(config?: Collection.ConstructorProperties) 
    _init(config?: Collection.ConstructorProperties): void
}

export module List {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {
    }

}

export interface List extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Class property signals of GXml-0.20.GXml.List

    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class List {

    // Own properties of GXml-0.20.GXml.List

    static name: string

    // Constructors of GXml-0.20.GXml.List

    constructor(config?: List.ConstructorProperties) 
    _init(config?: List.ConstructorProperties): void
}

export module MappeableElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface MappeableElement extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElement

    // Has conflict: getMapKey(): string

    // Own virtual methods of GXml-0.20.GXml.MappeableElement

    getMapKey(): string

    // Class property signals of GXml-0.20.GXml.MappeableElement

    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MappeableElement {

    // Own properties of GXml-0.20.GXml.MappeableElement

    static name: string

    // Constructors of GXml-0.20.GXml.MappeableElement

    constructor(config?: MappeableElement.ConstructorProperties) 
    _init(config?: MappeableElement.ConstructorProperties): void
}

export module Map {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Map

        attributeKey?: string | null
    }

}

export interface Map extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.Map

    attributeKey: string
    readonly keysSet: Gee.Set

    // Owm methods of GXml-0.20.GXml.Map

    // Has conflict: getAttributeKey(): string
    // Has conflict: setAttributeKey(value: string): void
    // Has conflict: item(key: string): DomElement | null
    // Has conflict: hasKey(key: string): boolean
    // Has conflict: getKeysSet(): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.Map

    getAttributeKey(): string
    setAttributeKey(value: string): void
    item(key: string): DomElement | null
    hasKey(key: string): boolean
    getKeysSet(): Gee.Set

    // Class property signals of GXml-0.20.GXml.Map

    connect(sigName: "notify::attribute-key", callback: any): number
    on(sigName: "notify::attribute-key", callback: any): number
    once(sigName: "notify::attribute-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-key", ...args: any[]): void
    connect(sigName: "notify::keys-set", callback: any): number
    on(sigName: "notify::keys-set", callback: any): number
    once(sigName: "notify::keys-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Map {

    // Own properties of GXml-0.20.GXml.Map

    static name: string

    // Constructors of GXml-0.20.GXml.Map

    constructor(config?: Map.ConstructorProperties) 
    _init(config?: Map.ConstructorProperties): void
}

export module MappeableElementPairKey {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface MappeableElementPairKey extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElementPairKey

    // Has conflict: getMapPrimaryKey(): string
    // Has conflict: getMapSecondaryKey(): string

    // Own virtual methods of GXml-0.20.GXml.MappeableElementPairKey

    getMapPrimaryKey(): string
    getMapSecondaryKey(): string

    // Class property signals of GXml-0.20.GXml.MappeableElementPairKey

    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MappeableElementPairKey {

    // Own properties of GXml-0.20.GXml.MappeableElementPairKey

    static name: string

    // Constructors of GXml-0.20.GXml.MappeableElementPairKey

    constructor(config?: MappeableElementPairKey.ConstructorProperties) 
    _init(config?: MappeableElementPairKey.ConstructorProperties): void
}

export module PairedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.PairedMap

        attributePrimaryKey?: string | null
        attributeSecondaryKey?: string | null
    }

}

export interface PairedMap extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.PairedMap

    attributePrimaryKey: string
    attributeSecondaryKey: string
    readonly primaryKeysSet: Gee.Set

    // Owm methods of GXml-0.20.GXml.PairedMap

    // Has conflict: getAttributePrimaryKey(): string
    // Has conflict: setAttributePrimaryKey(value: string): void
    // Has conflict: getAttributeSecondaryKey(): string
    // Has conflict: setAttributeSecondaryKey(value: string): void
    // Has conflict: getPrimaryKeysSet(): Gee.Set
    // Has conflict: item(primaryKey: string, secondaryKey: string): DomElement | null
    // Has conflict: hasPrimaryKey(key: string): boolean
    // Has conflict: hasSecondaryKey(pkey: string, key: string): boolean
    // Has conflict: secondaryKeysSet(pkey: string): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.PairedMap

    getAttributePrimaryKey(): string
    setAttributePrimaryKey(value: string): void
    getAttributeSecondaryKey(): string
    setAttributeSecondaryKey(value: string): void
    getPrimaryKeysSet(): Gee.Set
    item(primaryKey: string, secondaryKey: string): DomElement | null
    hasPrimaryKey(key: string): boolean
    hasSecondaryKey(pkey: string, key: string): boolean
    secondaryKeysSet(pkey: string): Gee.Set

    // Class property signals of GXml-0.20.GXml.PairedMap

    connect(sigName: "notify::attribute-primary-key", callback: any): number
    on(sigName: "notify::attribute-primary-key", callback: any): number
    once(sigName: "notify::attribute-primary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: any): number
    on(sigName: "notify::attribute-secondary-key", callback: any): number
    once(sigName: "notify::attribute-secondary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: any): number
    on(sigName: "notify::primary-keys-set", callback: any): number
    once(sigName: "notify::primary-keys-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PairedMap {

    // Own properties of GXml-0.20.GXml.PairedMap

    static name: string

    // Constructors of GXml-0.20.GXml.PairedMap

    constructor(config?: PairedMap.ConstructorProperties) 
    _init(config?: PairedMap.ConstructorProperties): void
}

export module MappeableElementThreeKey {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface MappeableElementThreeKey extends GObject.Object, DomElement {

    // Owm methods of GXml-0.20.GXml.MappeableElementThreeKey

    // Has conflict: getMapPkey(): string
    // Has conflict: getMapSkey(): string
    // Has conflict: getMapTkey(): string

    // Own virtual methods of GXml-0.20.GXml.MappeableElementThreeKey

    getMapPkey(): string
    getMapSkey(): string
    getMapTkey(): string

    // Class property signals of GXml-0.20.GXml.MappeableElementThreeKey

    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MappeableElementThreeKey {

    // Own properties of GXml-0.20.GXml.MappeableElementThreeKey

    static name: string

    // Constructors of GXml-0.20.GXml.MappeableElementThreeKey

    constructor(config?: MappeableElementThreeKey.ConstructorProperties) 
    _init(config?: MappeableElementThreeKey.ConstructorProperties): void
}

export module ThreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties, Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.ThreeMap

        attributePrimaryKey?: string | null
        attributeSecondaryKey?: string | null
        attributeThirdKey?: string | null
    }

}

export interface ThreeMap extends GObject.Object, Collection, Gee.Traversable, Gee.Iterable {

    // Own properties of GXml-0.20.GXml.ThreeMap

    attributePrimaryKey: string
    attributeSecondaryKey: string
    attributeThirdKey: string
    readonly primaryKeysSet: Gee.Set

    // Owm methods of GXml-0.20.GXml.ThreeMap

    // Has conflict: getAttributePrimaryKey(): string
    // Has conflict: setAttributePrimaryKey(value: string): void
    // Has conflict: getAttributeSecondaryKey(): string
    // Has conflict: setAttributeSecondaryKey(value: string): void
    // Has conflict: getAttributeThirdKey(): string
    // Has conflict: setAttributeThirdKey(value: string): void
    // Has conflict: getPrimaryKeysSet(): Gee.Set
    // Has conflict: item(primaryKey: string, secondaryKey: string, thirdKey: string): DomElement | null
    // Has conflict: hasPrimaryKey(key: string): boolean
    // Has conflict: hasSecondaryKey(pkey: string, key: string): boolean
    // Has conflict: hasThirdKey(pkey: string, skey: string, key: string): boolean
    // Has conflict: secondaryKeysSet(pkey: string): Gee.Set
    // Has conflict: thirdKeysSet(pkey: string, skey: string): Gee.Set

    // Own virtual methods of GXml-0.20.GXml.ThreeMap

    getAttributePrimaryKey(): string
    setAttributePrimaryKey(value: string): void
    getAttributeSecondaryKey(): string
    setAttributeSecondaryKey(value: string): void
    getAttributeThirdKey(): string
    setAttributeThirdKey(value: string): void
    getPrimaryKeysSet(): Gee.Set
    item(primaryKey: string, secondaryKey: string, thirdKey: string): DomElement | null
    hasPrimaryKey(key: string): boolean
    hasSecondaryKey(pkey: string, key: string): boolean
    hasThirdKey(pkey: string, skey: string, key: string): boolean
    secondaryKeysSet(pkey: string): Gee.Set
    thirdKeysSet(pkey: string, skey: string): Gee.Set

    // Class property signals of GXml-0.20.GXml.ThreeMap

    connect(sigName: "notify::attribute-primary-key", callback: any): number
    on(sigName: "notify::attribute-primary-key", callback: any): number
    once(sigName: "notify::attribute-primary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: any): number
    on(sigName: "notify::attribute-secondary-key", callback: any): number
    once(sigName: "notify::attribute-secondary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-third-key", callback: any): number
    on(sigName: "notify::attribute-third-key", callback: any): number
    once(sigName: "notify::attribute-third-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-third-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: any): number
    on(sigName: "notify::primary-keys-set", callback: any): number
    once(sigName: "notify::primary-keys-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ThreeMap {

    // Own properties of GXml-0.20.GXml.ThreeMap

    static name: string

    // Constructors of GXml-0.20.GXml.ThreeMap

    constructor(config?: ThreeMap.ConstructorProperties) 
    _init(config?: ThreeMap.ConstructorProperties): void
}

export module CollectionParent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties {
    }

}

export interface CollectionParent extends GObject.Object, Collection {

    // Owm methods of GXml-0.20.GXml.CollectionParent

    // Has conflict: getTypes(): GLib.HashTable

    // Own virtual methods of GXml-0.20.GXml.CollectionParent

    getTypes(): GLib.HashTable

    // Class property signals of GXml-0.20.GXml.CollectionParent

    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CollectionParent {

    // Own properties of GXml-0.20.GXml.CollectionParent

    static name: string

    // Constructors of GXml-0.20.GXml.CollectionParent

    constructor(config?: CollectionParent.ConstructorProperties) 
    _init(config?: CollectionParent.ConstructorProperties): void
    static addSupportedType(types: GLib.HashTable, parentType: GObject.GType, type: GObject.GType): void
    static addSupportedTypes(table: GLib.HashTable, parentType: GObject.GType, types: GObject.GType[]): void
}

export module DomAttr {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomAttr

        value?: string | null
    }

}

export interface DomAttr extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomAttr

    readonly namespaceUri: string
    readonly prefix: string
    readonly localName: string
    readonly name: string
    value: string

    // Owm methods of GXml-0.20.GXml.DomAttr

    // Has conflict: getNamespaceUri(): string | null
    // Has conflict: getPrefix(): string | null
    // Has conflict: getLocalName(): string
    // Has conflict: getName(): string
    // Has conflict: getValue(): string
    // Has conflict: setValue(value: string): void
    // Has conflict: getSpecified(): boolean

    // Own virtual methods of GXml-0.20.GXml.DomAttr

    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string
    getName(): string
    getValue(): string
    setValue(value: string): void
    getSpecified(): boolean

    // Class property signals of GXml-0.20.GXml.DomAttr

    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomAttr {

    // Own properties of GXml-0.20.GXml.DomAttr

    static name: string

    // Constructors of GXml-0.20.GXml.DomAttr

    constructor(config?: DomAttr.ConstructorProperties) 
    _init(config?: DomAttr.ConstructorProperties): void
}

export module DomCharacterData {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomNonDocumentTypeChildNode.ConstructorProperties, DomChildNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomCharacterData

        data?: string | null
    }

}

export interface DomCharacterData extends GObject.Object, DomNode, DomNonDocumentTypeChildNode, DomChildNode {

    // Own properties of GXml-0.20.GXml.DomCharacterData

    data: string

    // Owm methods of GXml-0.20.GXml.DomCharacterData

    // Has conflict: getData(): string
    // Has conflict: setData(value: string): void
    // Has conflict: getLength(): number
    // Has conflict: substringData(offset: number, count: number): string
    // Has conflict: appendData(data: string): void
    // Has conflict: insertData(offset: number, data: string): void
    // Has conflict: deleteData(offset: number, count: number): void
    // Has conflict: replaceData(offset: number, count: number, data: string): void

    // Own virtual methods of GXml-0.20.GXml.DomCharacterData

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    getLength(): number
    substringData(offset: number, count: number): string
    appendData(data: string): void
    insertData(offset: number, data: string): void
    deleteData(offset: number, count: number): void
    replaceData(offset: number, count: number, data: string): void

    // Class property signals of GXml-0.20.GXml.DomCharacterData

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomCharacterData {

    // Own properties of GXml-0.20.GXml.DomCharacterData

    static name: string

    // Constructors of GXml-0.20.GXml.DomCharacterData

    constructor(config?: DomCharacterData.ConstructorProperties) 
    _init(config?: DomCharacterData.ConstructorProperties): void
}

export module DomText {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DomText extends DomCharacterData {

    // Owm methods of GXml-0.20.GXml.DomText

    // Has conflict: splitText(offset: number): DomText
    // Has conflict: getWholeText(): string

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Own virtual methods of GXml-0.20.GXml.DomText

    splitText(offset: number): DomText
    getWholeText(): string

    // Class property signals of GXml-0.20.GXml.DomText

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomText extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomText

    static name: string

    // Constructors of GXml-0.20.GXml.DomText

    constructor(config?: DomText.ConstructorProperties) 
    _init(config?: DomText.ConstructorProperties): void
}

export module DomProcessingInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DomProcessingInstruction extends DomCharacterData {

    // Own properties of GXml-0.20.GXml.DomProcessingInstruction

    readonly target: string

    // Owm methods of GXml-0.20.GXml.DomProcessingInstruction

    // Has conflict: getTarget(): string

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Own virtual methods of GXml-0.20.GXml.DomProcessingInstruction

    getTarget(): string

    // Class property signals of GXml-0.20.GXml.DomProcessingInstruction

    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomProcessingInstruction extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomProcessingInstruction

    static name: string

    // Constructors of GXml-0.20.GXml.DomProcessingInstruction

    constructor(config?: DomProcessingInstruction.ConstructorProperties) 
    _init(config?: DomProcessingInstruction.ConstructorProperties): void
}

export module DomComment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface DomComment extends DomCharacterData {

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.DomComment

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomComment extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomComment

    static name: string

    // Constructors of GXml-0.20.GXml.DomComment

    constructor(config?: DomComment.ConstructorProperties) 
    _init(config?: DomComment.ConstructorProperties): void
}

export module DomNonElementParentNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNonElementParentNode extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomNonElementParentNode

    // Has conflict: getElementById(elementId: string): DomElement | null

    // Own virtual methods of GXml-0.20.GXml.DomNonElementParentNode

    getElementById(elementId: string): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomNonElementParentNode

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomNonElementParentNode {

    // Own properties of GXml-0.20.GXml.DomNonElementParentNode

    static name: string

    // Constructors of GXml-0.20.GXml.DomNonElementParentNode

    constructor(config?: DomNonElementParentNode.ConstructorProperties) 
    _init(config?: DomNonElementParentNode.ConstructorProperties): void
}

export module DomParentNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomParentNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomParentNode

    readonly children: DomHTMLCollection
    readonly firstElementChild: DomElement
    readonly lastElementChild: DomElement
    readonly childElementCount: number

    // Owm methods of GXml-0.20.GXml.DomParentNode

    // Has conflict: getChildren(): DomHTMLCollection
    // Has conflict: getFirstElementChild(): DomElement | null
    // Has conflict: getLastElementChild(): DomElement | null
    // Has conflict: getChildElementCount(): number
    // Has conflict: querySelector(selectors: string): DomElement | null
    // Has conflict: querySelectorAll(selectors: string): DomNodeList
    // Has conflict: getElementsByPropertyValue(property: string, value: string): DomElementList

    // Own virtual methods of GXml-0.20.GXml.DomParentNode

    getChildren(): DomHTMLCollection
    getFirstElementChild(): DomElement | null
    getLastElementChild(): DomElement | null
    getChildElementCount(): number
    querySelector(selectors: string): DomElement | null
    querySelectorAll(selectors: string): DomNodeList
    getElementsByPropertyValue(property: string, value: string): DomElementList

    // Class property signals of GXml-0.20.GXml.DomParentNode

    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomParentNode {

    // Own properties of GXml-0.20.GXml.DomParentNode

    static name: string

    // Constructors of GXml-0.20.GXml.DomParentNode

    constructor(config?: DomParentNode.ConstructorProperties) 
    _init(config?: DomParentNode.ConstructorProperties): void
}

export module DomNonDocumentTypeChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNonDocumentTypeChildNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    readonly previousElementSibling: DomElement
    readonly nextElementSibling: DomElement

    // Owm methods of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    // Has conflict: getPreviousElementSibling(): DomElement | null
    // Has conflict: getNextElementSibling(): DomElement | null

    // Own virtual methods of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    getPreviousElementSibling(): DomElement | null
    getNextElementSibling(): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomNonDocumentTypeChildNode {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    static name: string

    // Constructors of GXml-0.20.GXml.DomNonDocumentTypeChildNode

    constructor(config?: DomNonDocumentTypeChildNode.ConstructorProperties) 
    _init(config?: DomNonDocumentTypeChildNode.ConstructorProperties): void
}

export module DomChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomChildNode extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomChildNode

    // Has conflict: remove(): void

    // Own virtual methods of GXml-0.20.GXml.DomChildNode

    remove(): void

    // Class property signals of GXml-0.20.GXml.DomChildNode

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomChildNode {

    // Own properties of GXml-0.20.GXml.DomChildNode

    static name: string

    // Constructors of GXml-0.20.GXml.DomChildNode

    constructor(config?: DomChildNode.ConstructorProperties) 
    _init(config?: DomChildNode.ConstructorProperties): void
}

export module DomNodeList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.BidirList.ConstructorProperties {
    }

}

export interface DomNodeList extends GObject.Object, Gee.BidirList {

    // Own properties of GXml-0.20.GXml.DomNodeList

    readonly length: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomNodeList

    // Has conflict: item(index: number): DomNode | null
    // Has conflict: getLength(): number

    // Conflicting methods

    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomNodeList

    item(index: number): DomNode | null
    getLength(): number

    // Class property signals of GXml-0.20.GXml.DomNodeList

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class DomNodeList {

    // Own properties of GXml-0.20.GXml.DomNodeList

    static name: string

    // Constructors of GXml-0.20.GXml.DomNodeList

    constructor(config?: DomNodeList.ConstructorProperties) 
    _init(config?: DomNodeList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module DomHTMLCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.BidirList.ConstructorProperties {
    }

}

export interface DomHTMLCollection extends GObject.Object, Gee.BidirList {

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomHTMLCollection

    // Has conflict: getElement(index: number): DomElement | null
    // Has conflict: toArray(): DomElement[]
    // Has conflict: getLength(): number
    // Has conflict: item(index: number): DomElement | null
    // Has conflict: namedItem(name: string): DomElement | null

    // Conflicting methods

    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomHTMLCollection

    getElement(index: number): DomElement | null
    toArray(): DomElement[]

    // Overloads of toArray

    toArray(): object[]
    getLength(): number
    item(index: number): DomElement | null
    namedItem(name: string): DomElement | null

    // Class property signals of GXml-0.20.GXml.DomHTMLCollection

    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class DomHTMLCollection {

    // Own properties of GXml-0.20.GXml.DomHTMLCollection

    static name: string

    // Constructors of GXml-0.20.GXml.DomHTMLCollection

    constructor(config?: DomHTMLCollection.ConstructorProperties) 
    _init(config?: DomHTMLCollection.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module DomNodeIterator {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accept-node`
     */
    export interface AcceptNodeSignalCallback {
        (node: DomNode): DomNodeFilterFilter
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNodeIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNodeIterator

    readonly root: DomNode
    readonly referenceNode: DomNode
    readonly pointerBeforeReferenceNode: boolean
    readonly whatToShow: number

    // Owm methods of GXml-0.20.GXml.DomNodeIterator

    // Has conflict: getRoot(): DomNode
    // Has conflict: getReferenceNode(): DomNode
    // Has conflict: getPointerBeforeReferenceNode(): boolean
    // Has conflict: getWhatToShow(): number
    // Has conflict: nextNode(): DomNode | null
    // Has conflict: previousNode(): DomNode | null
    // Has conflict: detach(): void

    // Own virtual methods of GXml-0.20.GXml.DomNodeIterator

    getRoot(): DomNode
    getReferenceNode(): DomNode
    getPointerBeforeReferenceNode(): boolean
    getWhatToShow(): number
    nextNode(): DomNode | null
    previousNode(): DomNode | null
    detach(): void

    // Own signals of GXml-0.20.GXml.DomNodeIterator

    connect(sigName: "accept-node", callback: DomNodeIterator.AcceptNodeSignalCallback): number
    on(sigName: "accept-node", callback: DomNodeIterator.AcceptNodeSignalCallback): number
    once(sigName: "accept-node", callback: DomNodeIterator.AcceptNodeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "accept-node", ...args: any[]): void

    // Class property signals of GXml-0.20.GXml.DomNodeIterator

    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::reference-node", callback: any): number
    on(sigName: "notify::reference-node", callback: any): number
    once(sigName: "notify::reference-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reference-node", ...args: any[]): void
    connect(sigName: "notify::pointer-before-reference-node", callback: any): number
    on(sigName: "notify::pointer-before-reference-node", callback: any): number
    once(sigName: "notify::pointer-before-reference-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pointer-before-reference-node", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: any): number
    on(sigName: "notify::what-to-show", callback: any): number
    once(sigName: "notify::what-to-show", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomNodeIterator {

    // Own properties of GXml-0.20.GXml.DomNodeIterator

    static name: string

    // Constructors of GXml-0.20.GXml.DomNodeIterator

    constructor(config?: DomNodeIterator.ConstructorProperties) 
    _init(config?: DomNodeIterator.ConstructorProperties): void
}

export module DomTreeWalker {

    // Signal callback interfaces

    /**
     * Signal callback interface for `accept-node`
     */
    export interface AcceptNodeSignalCallback {
        (node: DomNode): DomNodeFilterFilter
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomTreeWalker extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomTreeWalker

    readonly root: DomNode
    readonly whatToShow: number
    readonly currentNode: DomNode

    // Owm methods of GXml-0.20.GXml.DomTreeWalker

    // Has conflict: getRoot(): DomNode
    // Has conflict: getWhatToShow(): number
    // Has conflict: getCurrentNode(): DomNode
    // Has conflict: parentNode(): DomNode | null
    // Has conflict: firstChild(): DomNode | null
    // Has conflict: lastChild(): DomNode | null
    // Has conflict: previousSibling(): DomNode | null
    // Has conflict: nextSibling(): DomNode | null
    // Has conflict: previousNode(): DomNode | null
    // Has conflict: nextNode(): DomNode | null

    // Own virtual methods of GXml-0.20.GXml.DomTreeWalker

    getRoot(): DomNode
    getWhatToShow(): number
    getCurrentNode(): DomNode
    parentNode(): DomNode | null
    firstChild(): DomNode | null
    lastChild(): DomNode | null
    previousSibling(): DomNode | null
    nextSibling(): DomNode | null
    previousNode(): DomNode | null
    nextNode(): DomNode | null

    // Own signals of GXml-0.20.GXml.DomTreeWalker

    connect(sigName: "accept-node", callback: DomTreeWalker.AcceptNodeSignalCallback): number
    on(sigName: "accept-node", callback: DomTreeWalker.AcceptNodeSignalCallback): number
    once(sigName: "accept-node", callback: DomTreeWalker.AcceptNodeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "accept-node", ...args: any[]): void

    // Class property signals of GXml-0.20.GXml.DomTreeWalker

    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: any): number
    on(sigName: "notify::what-to-show", callback: any): number
    once(sigName: "notify::what-to-show", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: "notify::current-node", callback: any): number
    on(sigName: "notify::current-node", callback: any): number
    once(sigName: "notify::current-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomTreeWalker {

    // Own properties of GXml-0.20.GXml.DomTreeWalker

    static name: string

    // Constructors of GXml-0.20.GXml.DomTreeWalker

    constructor(config?: DomTreeWalker.ConstructorProperties) 
    _init(config?: DomTreeWalker.ConstructorProperties): void
}

export module DomNamedNodeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.Map.ConstructorProperties {
    }

}

export interface DomNamedNodeMap extends GObject.Object, Gee.Map {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMap

    readonly length: number

    // Owm methods of GXml-0.20.GXml.DomNamedNodeMap

    // Has conflict: getLength(): number
    // Has conflict: item(index: number): DomNode | null
    // Has conflict: getNamedItem(name: string): DomNode | null
    // Has conflict: setNamedItem(node: DomNode): DomNode | null
    // Has conflict: removeNamedItem(name: string): DomNode | null
    // Has conflict: removeNamedItemNs(namespaceUri: string, localName: string): DomNode | null
    // Has conflict: getNamedItemNs(namespaceUri: string, localName: string): DomNode | null
    // Has conflict: setNamedItemNs(node: DomNode): DomNode | null

    // Own virtual methods of GXml-0.20.GXml.DomNamedNodeMap

    getLength(): number
    item(index: number): DomNode | null
    getNamedItem(name: string): DomNode | null
    setNamedItem(node: DomNode): DomNode | null
    removeNamedItem(name: string): DomNode | null
    removeNamedItemNs(namespaceUri: string, localName: string): DomNode | null
    getNamedItemNs(namespaceUri: string, localName: string): DomNode | null
    setNamedItemNs(node: DomNode): DomNode | null

    // Class property signals of GXml-0.20.GXml.DomNamedNodeMap

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: any): number
    on(sigName: "notify::keys", callback: any): number
    once(sigName: "notify::keys", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: any): number
    on(sigName: "notify::entries", callback: any): number
    once(sigName: "notify::entries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomNamedNodeMap {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMap

    static name: string

    // Constructors of GXml-0.20.GXml.DomNamedNodeMap

    constructor(config?: DomNamedNodeMap.ConstructorProperties) 
    _init(config?: DomNamedNodeMap.ConstructorProperties): void
}

export module DomTokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Gee.BidirList.ConstructorProperties {
    }

}

export interface DomTokenList extends GObject.Object, Gee.BidirList {

    // Own properties of GXml-0.20.GXml.DomTokenList

    readonly length: number

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomTokenList

    // Has conflict: getLength(): number
    // Has conflict: item(index: number): string | null
    // Has conflict: contains(token: string): boolean
    // Has conflict: add(tokens: string[]): void
    // Has conflict: remove(tokens: string[]): void
    // Has conflict: toggle(token: string, force: boolean, auto: boolean): boolean
    // Has conflict: toString(): string

    // Conflicting methods

    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomTokenList

    getLength(): number
    item(index: number): string | null
    contains(token: string): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: object | null): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: object | null): boolean
    toggle(token: string, force: boolean, auto: boolean): boolean
    toString(): string

    // Class property signals of GXml-0.20.GXml.DomTokenList

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class DomTokenList {

    // Own properties of GXml-0.20.GXml.DomTokenList

    static name: string

    // Constructors of GXml-0.20.GXml.DomTokenList

    constructor(config?: DomTokenList.ConstructorProperties) 
    _init(config?: DomTokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module DomSettableTokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomTokenList.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomSettableTokenList

        value?: string | null
    }

}

export interface DomSettableTokenList extends GObject.Object, DomTokenList {

    // Own properties of GXml-0.20.GXml.DomSettableTokenList

    value: string

    // Conflicting properties

    readOnlyView: any

    // Owm methods of GXml-0.20.GXml.DomSettableTokenList

    // Has conflict: getValue(): string
    // Has conflict: setValue(value: string): void

    // Conflicting methods

    contains(token: string): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Own virtual methods of GXml-0.20.GXml.DomSettableTokenList

    getValue(): string
    setValue(value: string): void

    // Class property signals of GXml-0.20.GXml.DomSettableTokenList

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class DomSettableTokenList {

    // Own properties of GXml-0.20.GXml.DomSettableTokenList

    static name: string

    // Constructors of GXml-0.20.GXml.DomSettableTokenList

    constructor(config?: DomSettableTokenList.ConstructorProperties) 
    _init(config?: DomSettableTokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module DomDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties {
    }

}

export interface DomDocument extends GObject.Object, DomNode, DomParentNode, DomNonElementParentNode {

    // Own properties of GXml-0.20.GXml.DomDocument

    readonly implementation: DomImplementation
    readonly url: string
    readonly documentUri: string
    readonly origin: string
    readonly compatMode: string
    readonly characterSet: string
    readonly contentType: string
    readonly doctype: DomDocumentType
    readonly documentElement: DomElement

    // Owm methods of GXml-0.20.GXml.DomDocument

    // Has conflict: getImplementation(): DomImplementation
    // Has conflict: getUrl(): string
    // Has conflict: getDocumentUri(): string
    // Has conflict: getOrigin(): string
    // Has conflict: getCompatMode(): string
    // Has conflict: getCharacterSet(): string
    // Has conflict: getContentType(): string
    // Has conflict: getDoctype(): DomDocumentType | null
    // Has conflict: getDocumentElement(): DomElement | null
    // Has conflict: getElementsByTagName(localName: string): DomHTMLCollection
    // Has conflict: getElementsByTagNameNs(namespace: string | null, localName: string): DomHTMLCollection
    // Has conflict: getElementsByClassName(classNames: string): DomHTMLCollection
    // Has conflict: createElement(localName: string): DomElement
    // Has conflict: createElementNs(namespace: string | null, qualifiedName: string): DomElement
    // Has conflict: createDocumentFragment(): DomDocumentFragment
    // Has conflict: createTextNode(data: string): DomText
    // Has conflict: createComment(data: string): DomComment
    // Has conflict: createProcessingInstruction(target: string, data: string): DomProcessingInstruction
    // Has conflict: importNode(node: DomNode, deep: boolean): DomNode
    // Has conflict: adoptNode(node: DomNode): DomNode
    // Has conflict: createEvent(interface: string): DomEvent
    // Has conflict: createRange(): DomRange
    // Has conflict: createNodeIterator(root: DomNode, whatToShow: number): DomNodeIterator
    // Has conflict: createTreeWalker(root: DomNode, whatToShow: number): DomTreeWalker
    // Has conflict: writeFile(file: Gio.File, cancellable: Gio.Cancellable | null): void
    // Has conflict: writeFileAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeFileFinish(res: Gio.AsyncResult): void
    // Has conflict: writeStream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): void
    // Has conflict: writeStreamAsync(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeStreamFinish(res: Gio.AsyncResult): void
    // Has conflict: createStream(): Gio.InputStream
    // Has conflict: createStreamAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: createStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    // Has conflict: writeString(cancellable: Gio.Cancellable | null): string
    // Has conflict: writeStringAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeStringFinish(res: Gio.AsyncResult): string
    // Has conflict: readFromFile(file: Gio.File, cancellable: Gio.Cancellable | null): void
    // Has conflict: readFromFileAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromFileFinish(res: Gio.AsyncResult): void
    // Has conflict: readFromString(str: string, cancellable: Gio.Cancellable | null): void
    // Has conflict: readFromStringAsync(str: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromStringFinish(res: Gio.AsyncResult): void
    // Has conflict: readFromStream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    // Has conflict: readFromStreamAsync(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromStreamFinish(res: Gio.AsyncResult): void
    // Has conflict: getXmlParser(): Parser
    // Has conflict: setXmlParser(parser: Parser): void

    // Own virtual methods of GXml-0.20.GXml.DomDocument

    getImplementation(): DomImplementation
    getUrl(): string
    getDocumentUri(): string
    getOrigin(): string
    getCompatMode(): string
    getCharacterSet(): string
    getContentType(): string
    getDoctype(): DomDocumentType | null
    getDocumentElement(): DomElement | null
    getElementsByTagName(localName: string): DomHTMLCollection
    getElementsByTagNameNs(namespace: string | null, localName: string): DomHTMLCollection
    getElementsByClassName(classNames: string): DomHTMLCollection
    createElement(localName: string): DomElement
    createElementNs(namespace: string | null, qualifiedName: string): DomElement
    createDocumentFragment(): DomDocumentFragment
    createTextNode(data: string): DomText
    createComment(data: string): DomComment
    createProcessingInstruction(target: string, data: string): DomProcessingInstruction
    importNode(node: DomNode, deep: boolean): DomNode
    adoptNode(node: DomNode): DomNode
    createEvent(interface: string): DomEvent
    createRange(): DomRange
    createNodeIterator(root: DomNode, whatToShow: number): DomNodeIterator
    createTreeWalker(root: DomNode, whatToShow: number): DomTreeWalker
    writeFile(file: Gio.File, cancellable: Gio.Cancellable | null): void
    writeFileAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeFileFinish(res: Gio.AsyncResult): void
    writeStream(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null): void
    writeStreamAsync(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeStreamFinish(res: Gio.AsyncResult): void
    createStream(): Gio.InputStream
    createStreamAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    createStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    writeString(cancellable: Gio.Cancellable | null): string
    writeStringAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeStringFinish(res: Gio.AsyncResult): string
    readFromFile(file: Gio.File, cancellable: Gio.Cancellable | null): void
    readFromFileAsync(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromFileFinish(res: Gio.AsyncResult): void
    readFromString(str: string, cancellable: Gio.Cancellable | null): void
    readFromStringAsync(str: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromStringFinish(res: Gio.AsyncResult): void
    readFromStream(stream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    readFromStreamAsync(stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromStreamFinish(res: Gio.AsyncResult): void
    getXmlParser(): Parser
    setXmlParser(parser: Parser): void

    // Class property signals of GXml-0.20.GXml.DomDocument

    connect(sigName: "notify::implementation", callback: any): number
    on(sigName: "notify::implementation", callback: any): number
    once(sigName: "notify::implementation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: any): number
    on(sigName: "notify::document-uri", callback: any): number
    once(sigName: "notify::document-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: any): number
    on(sigName: "notify::compat-mode", callback: any): number
    once(sigName: "notify::compat-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: any): number
    on(sigName: "notify::character-set", callback: any): number
    once(sigName: "notify::character-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: any): number
    on(sigName: "notify::doctype", callback: any): number
    once(sigName: "notify::doctype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: any): number
    on(sigName: "notify::document-element", callback: any): number
    once(sigName: "notify::document-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomDocument {

    // Own properties of GXml-0.20.GXml.DomDocument

    static name: string

    // Constructors of GXml-0.20.GXml.DomDocument

    constructor(config?: DomDocument.ConstructorProperties) 
    _init(config?: DomDocument.ConstructorProperties): void
}

export module DomXMLDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomDocument.ConstructorProperties {
    }

}

export interface DomXMLDocument extends GObject.Object, DomDocument {

    // Class property signals of GXml-0.20.GXml.DomXMLDocument

    connect(sigName: "notify::implementation", callback: any): number
    on(sigName: "notify::implementation", callback: any): number
    once(sigName: "notify::implementation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: any): number
    on(sigName: "notify::document-uri", callback: any): number
    once(sigName: "notify::document-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: any): number
    on(sigName: "notify::compat-mode", callback: any): number
    once(sigName: "notify::compat-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: any): number
    on(sigName: "notify::character-set", callback: any): number
    once(sigName: "notify::character-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: any): number
    on(sigName: "notify::doctype", callback: any): number
    once(sigName: "notify::doctype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: any): number
    on(sigName: "notify::document-element", callback: any): number
    once(sigName: "notify::document-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomXMLDocument {

    // Own properties of GXml-0.20.GXml.DomXMLDocument

    static name: string

    // Constructors of GXml-0.20.GXml.DomXMLDocument

    constructor(config?: DomXMLDocument.ConstructorProperties) 
    _init(config?: DomXMLDocument.ConstructorProperties): void
}

export module DomImplementation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomImplementation extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomImplementation

    // Has conflict: createDocumentType(qualifiedName: string, publicId: string, systemId: string): DomDocumentType
    // Has conflict: createDocument(nspace: string | null, qualifiedName: string | null, doctype: DomDocumentType | null): DomXMLDocument
    // Has conflict: createHtmlDocument(title: string): DomDocument
    // Has conflict: hasFeature(): boolean

    // Own virtual methods of GXml-0.20.GXml.DomImplementation

    createDocumentType(qualifiedName: string, publicId: string, systemId: string): DomDocumentType
    createDocument(nspace: string | null, qualifiedName: string | null, doctype: DomDocumentType | null): DomXMLDocument
    createHtmlDocument(title: string): DomDocument
    hasFeature(): boolean

    // Class property signals of GXml-0.20.GXml.DomImplementation

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomImplementation {

    // Own properties of GXml-0.20.GXml.DomImplementation

    static name: string

    // Constructors of GXml-0.20.GXml.DomImplementation

    constructor(config?: DomImplementation.ConstructorProperties) 
    _init(config?: DomImplementation.ConstructorProperties): void
}

export module DomDocumentFragment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties {
    }

}

export interface DomDocumentFragment extends GObject.Object, DomNode, DomParentNode, DomNonElementParentNode {

    // Class property signals of GXml-0.20.GXml.DomDocumentFragment

    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomDocumentFragment {

    // Own properties of GXml-0.20.GXml.DomDocumentFragment

    static name: string

    // Constructors of GXml-0.20.GXml.DomDocumentFragment

    constructor(config?: DomDocumentFragment.ConstructorProperties) 
    _init(config?: DomDocumentFragment.ConstructorProperties): void
}

export module DomDocumentType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomChildNode.ConstructorProperties {
    }

}

export interface DomDocumentType extends GObject.Object, DomNode, DomChildNode {

    // Own properties of GXml-0.20.GXml.DomDocumentType

    readonly name: string
    readonly publicId: string
    readonly systemId: string

    // Owm methods of GXml-0.20.GXml.DomDocumentType

    // Has conflict: getName(): string
    // Has conflict: getPublicId(): string
    // Has conflict: getSystemId(): string

    // Own virtual methods of GXml-0.20.GXml.DomDocumentType

    getName(): string
    getPublicId(): string
    getSystemId(): string

    // Class property signals of GXml-0.20.GXml.DomDocumentType

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::public-id", callback: any): number
    on(sigName: "notify::public-id", callback: any): number
    once(sigName: "notify::public-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::public-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: any): number
    on(sigName: "notify::system-id", callback: any): number
    once(sigName: "notify::system-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomDocumentType {

    // Own properties of GXml-0.20.GXml.DomDocumentType

    static name: string

    // Constructors of GXml-0.20.GXml.DomDocumentType

    constructor(config?: DomDocumentType.ConstructorProperties) 
    _init(config?: DomDocumentType.ConstructorProperties): void
}

export module DomHtmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomDocument.ConstructorProperties {
    }

}

export interface DomHtmlDocument extends GObject.Object, DomDocument {

    // Owm methods of GXml-0.20.GXml.DomHtmlDocument

    // Has conflict: readFromString(str: string): void
    // Has conflict: readFromStringTolerant(str: string): void
    // Has conflict: toHtml(): string

    // Own virtual methods of GXml-0.20.GXml.DomHtmlDocument

    readFromString(str: string): void

    // Overloads of readFromString

    readFromString(str: string, cancellable: Gio.Cancellable | null): void
    readFromStringTolerant(str: string): void
    toHtml(): string

    // Class property signals of GXml-0.20.GXml.DomHtmlDocument

    connect(sigName: "notify::implementation", callback: any): number
    on(sigName: "notify::implementation", callback: any): number
    once(sigName: "notify::implementation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: any): number
    on(sigName: "notify::document-uri", callback: any): number
    once(sigName: "notify::document-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: any): number
    on(sigName: "notify::compat-mode", callback: any): number
    once(sigName: "notify::compat-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: any): number
    on(sigName: "notify::character-set", callback: any): number
    once(sigName: "notify::character-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: any): number
    on(sigName: "notify::doctype", callback: any): number
    once(sigName: "notify::doctype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: any): number
    on(sigName: "notify::document-element", callback: any): number
    once(sigName: "notify::document-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomHtmlDocument {

    // Own properties of GXml-0.20.GXml.DomHtmlDocument

    static name: string

    // Constructors of GXml-0.20.GXml.DomHtmlDocument

    constructor(config?: DomHtmlDocument.ConstructorProperties) 
    _init(config?: DomHtmlDocument.ConstructorProperties): void
}

export module DomElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomChildNode.ConstructorProperties, DomNonDocumentTypeChildNode.ConstructorProperties, DomParentNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomElement

        id?: string | null
        className?: string | null
    }

}

export interface DomElement extends GObject.Object, DomNode, DomChildNode, DomNonDocumentTypeChildNode, DomParentNode {

    // Own properties of GXml-0.20.GXml.DomElement

    readonly namespaceUri: string
    readonly prefix: string
    readonly localName: string
    readonly tagName: string
    id: string
    className: string
    readonly classList: DomTokenList
    readonly attributes: DomNamedNodeMap

    // Owm methods of GXml-0.20.GXml.DomElement

    // Has conflict: getNamespaceUri(): string | null
    // Has conflict: getPrefix(): string | null
    // Has conflict: getLocalName(): string
    // Has conflict: getTagName(): string
    // Has conflict: getId(): string | null
    // Has conflict: setId(value: string | null): void
    // Has conflict: getClassName(): string | null
    // Has conflict: setClassName(value: string | null): void
    // Has conflict: getClassList(): DomTokenList
    // Has conflict: getAttributes(): DomNamedNodeMap
    // Has conflict: getAttribute(name: string): string | null
    // Has conflict: getAttributeNs(namespace: string | null, localName: string): string | null
    // Has conflict: setAttribute(name: string, value: string): void
    // Has conflict: setAttributeNs(namespace: string | null, name: string, value: string): void
    // Has conflict: removeAttribute(name: string): void
    // Has conflict: removeAttributeNs(namespace: string | null, localName: string): void
    // Has conflict: hasAttribute(name: string): boolean
    // Has conflict: hasAttributeNs(namespace: string | null, localName: string): boolean
    // Has conflict: getElementsByTagName(localName: string): DomHTMLCollection
    // Has conflict: getElementsByTagNameNs(namespace: string | null, localName: string): DomHTMLCollection
    // Has conflict: getElementsByClassName(classNames: string): DomHTMLCollection
    // Has conflict: matches(selectors: string): boolean
    // Has conflict: readFromUri(uri: string): void
    // Has conflict: readFromUriAsync(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromUriFinish(res: Gio.AsyncResult): void
    // Has conflict: readFromFile(f: Gio.File, cancellable: Gio.Cancellable | null): void
    // Has conflict: readFromFileAsync(f: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromFileFinish(res: Gio.AsyncResult): void
    // Has conflict: readFromStream(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    // Has conflict: readFromStreamAsync(istream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromStreamFinish(res: Gio.AsyncResult): void
    // Has conflict: readFromString(str: string, cancellable: Gio.Cancellable | null): void
    // Has conflict: readFromStringAsync(str: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFromStringFinish(res: Gio.AsyncResult): void
    // Has conflict: writeString(cancellable: Gio.Cancellable | null): string
    // Has conflict: writeStringAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeStringFinish(res: Gio.AsyncResult): string
    // Has conflict: writeFile(f: Gio.File, cancellable: Gio.Cancellable | null): void
    // Has conflict: writeFileAsync(f: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeFileFinish(res: Gio.AsyncResult): void
    // Has conflict: writeStream(stream: Gio.OutputStream): void
    // Has conflict: writeStreamAsync(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeStreamFinish(res: Gio.AsyncResult): void
    // Has conflict: createStream(): Gio.InputStream
    // Has conflict: createStreamAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: createStreamFinish(res: Gio.AsyncResult): Gio.InputStream

    // Own virtual methods of GXml-0.20.GXml.DomElement

    getNamespaceUri(): string | null
    getPrefix(): string | null
    getLocalName(): string
    getTagName(): string
    getId(): string | null
    setId(value: string | null): void
    getClassName(): string | null
    setClassName(value: string | null): void
    getClassList(): DomTokenList
    getAttributes(): DomNamedNodeMap
    getAttribute(name: string): string | null
    getAttributeNs(namespace: string | null, localName: string): string | null
    setAttribute(name: string, value: string): void
    setAttributeNs(namespace: string | null, name: string, value: string): void
    removeAttribute(name: string): void
    removeAttributeNs(namespace: string | null, localName: string): void
    hasAttribute(name: string): boolean
    hasAttributeNs(namespace: string | null, localName: string): boolean
    getElementsByTagName(localName: string): DomHTMLCollection
    getElementsByTagNameNs(namespace: string | null, localName: string): DomHTMLCollection
    getElementsByClassName(classNames: string): DomHTMLCollection
    matches(selectors: string): boolean
    readFromUri(uri: string): void
    readFromUriAsync(uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromUriFinish(res: Gio.AsyncResult): void
    readFromFile(f: Gio.File, cancellable: Gio.Cancellable | null): void
    readFromFileAsync(f: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromFileFinish(res: Gio.AsyncResult): void
    readFromStream(istream: Gio.InputStream, cancellable: Gio.Cancellable | null): void
    readFromStreamAsync(istream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromStreamFinish(res: Gio.AsyncResult): void
    readFromString(str: string, cancellable: Gio.Cancellable | null): void
    readFromStringAsync(str: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    readFromStringFinish(res: Gio.AsyncResult): void
    writeString(cancellable: Gio.Cancellable | null): string
    writeStringAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeStringFinish(res: Gio.AsyncResult): string
    writeFile(f: Gio.File, cancellable: Gio.Cancellable | null): void
    writeFileAsync(f: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeFileFinish(res: Gio.AsyncResult): void
    writeStream(stream: Gio.OutputStream): void
    writeStreamAsync(stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    writeStreamFinish(res: Gio.AsyncResult): void
    createStream(): Gio.InputStream
    createStreamAsync(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    createStreamFinish(res: Gio.AsyncResult): Gio.InputStream

    // Class property signals of GXml-0.20.GXml.DomElement

    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomElement {

    // Own properties of GXml-0.20.GXml.DomElement

    static name: string

    // Constructors of GXml-0.20.GXml.DomElement

    constructor(config?: DomElement.ConstructorProperties) 
    _init(config?: DomElement.ConstructorProperties): void
}

export module DomEventTarget {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomEventTarget extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomEventTarget

    // Has conflict: addEventListener(type: string, callback: DomEventListener | null, capture: boolean): void
    // Has conflict: removeEventListener(type: string, callback: DomEventListener | null, capture: boolean): void
    // Has conflict: dispatchEvent(event: DomEvent): boolean

    // Own virtual methods of GXml-0.20.GXml.DomEventTarget

    addEventListener(type: string, callback: DomEventListener | null, capture: boolean): void
    removeEventListener(type: string, callback: DomEventListener | null, capture: boolean): void
    dispatchEvent(event: DomEvent): boolean

    // Class property signals of GXml-0.20.GXml.DomEventTarget

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomEventTarget {

    // Own properties of GXml-0.20.GXml.DomEventTarget

    static name: string

    // Constructors of GXml-0.20.GXml.DomEventTarget

    constructor(config?: DomEventTarget.ConstructorProperties) 
    _init(config?: DomEventTarget.ConstructorProperties): void
}

export module DomEventListener {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomEventListener extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomEventListener

    // Has conflict: handleEvent(event: DomEvent): void

    // Own virtual methods of GXml-0.20.GXml.DomEventListener

    handleEvent(event: DomEvent): void

    // Class property signals of GXml-0.20.GXml.DomEventListener

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomEventListener {

    // Own properties of GXml-0.20.GXml.DomEventListener

    static name: string

    // Constructors of GXml-0.20.GXml.DomEventListener

    constructor(config?: DomEventListener.ConstructorProperties) 
    _init(config?: DomEventListener.ConstructorProperties): void
}

export module DomEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomEvent extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomEvent

    readonly etype: string
    readonly eventTarget: DomEventTarget
    readonly currentTarget: DomEventTarget
    readonly bubbles: boolean
    readonly cancelable: boolean
    readonly isTrusted: boolean
    readonly timeStamp: DomTimeStamp
    readonly defaultPrevented: boolean
    readonly eventPhase: DomEventPhase

    // Owm methods of GXml-0.20.GXml.DomEvent

    // Has conflict: getEtype(): string
    // Has conflict: getEventTarget(): DomEventTarget | null
    // Has conflict: getCurrentTarget(): DomEventTarget | null
    // Has conflict: getBubbles(): boolean
    // Has conflict: getCancelable(): boolean
    // Has conflict: getIsTrusted(): boolean
    // Has conflict: getTimeStamp(): DomTimeStamp
    // Has conflict: getDefaultPrevented(): boolean
    // Has conflict: getEventPhase(): DomEventPhase
    // Has conflict: stopPropagation(): void
    // Has conflict: stopImmediatePropagation(): void
    // Has conflict: preventDefault(): void
    // Has conflict: initEvent(type: string, bubbles: boolean, cancelable: boolean): void

    // Own virtual methods of GXml-0.20.GXml.DomEvent

    getEtype(): string
    getEventTarget(): DomEventTarget | null
    getCurrentTarget(): DomEventTarget | null
    getBubbles(): boolean
    getCancelable(): boolean
    getIsTrusted(): boolean
    getTimeStamp(): DomTimeStamp
    getDefaultPrevented(): boolean
    getEventPhase(): DomEventPhase
    stopPropagation(): void
    stopImmediatePropagation(): void
    preventDefault(): void
    initEvent(type: string, bubbles: boolean, cancelable: boolean): void

    // Class property signals of GXml-0.20.GXml.DomEvent

    connect(sigName: "notify::etype", callback: any): number
    on(sigName: "notify::etype", callback: any): number
    once(sigName: "notify::etype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: any): number
    on(sigName: "notify::event-target", callback: any): number
    once(sigName: "notify::event-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: any): number
    on(sigName: "notify::current-target", callback: any): number
    once(sigName: "notify::current-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: any): number
    on(sigName: "notify::bubbles", callback: any): number
    once(sigName: "notify::bubbles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: any): number
    on(sigName: "notify::cancelable", callback: any): number
    once(sigName: "notify::cancelable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: any): number
    on(sigName: "notify::is-trusted", callback: any): number
    once(sigName: "notify::is-trusted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: any): number
    on(sigName: "notify::time-stamp", callback: any): number
    once(sigName: "notify::time-stamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: any): number
    on(sigName: "notify::default-prevented", callback: any): number
    once(sigName: "notify::default-prevented", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: any): number
    on(sigName: "notify::event-phase", callback: any): number
    once(sigName: "notify::event-phase", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomEvent {

    // Own properties of GXml-0.20.GXml.DomEvent

    static name: string

    // Constructors of GXml-0.20.GXml.DomEvent

    constructor(config?: DomEvent.ConstructorProperties) 
    _init(config?: DomEvent.ConstructorProperties): void
}

export module DomCustomEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomEvent.ConstructorProperties {
    }

}

export interface DomCustomEvent extends GObject.Object, DomEvent {

    // Own properties of GXml-0.20.GXml.DomCustomEvent

    readonly detail: any

    // Owm methods of GXml-0.20.GXml.DomCustomEvent

    // Has conflict: getDetail(): /* result */ any
    // Has conflict: initCustomEvent(type: string, bubbles: boolean, cancelable: boolean, detail: any): void

    // Own virtual methods of GXml-0.20.GXml.DomCustomEvent

    getDetail(): /* result */ any
    initCustomEvent(type: string, bubbles: boolean, cancelable: boolean, detail: any): void

    // Class property signals of GXml-0.20.GXml.DomCustomEvent

    connect(sigName: "notify::detail", callback: any): number
    on(sigName: "notify::detail", callback: any): number
    once(sigName: "notify::detail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::etype", callback: any): number
    on(sigName: "notify::etype", callback: any): number
    once(sigName: "notify::etype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: any): number
    on(sigName: "notify::event-target", callback: any): number
    once(sigName: "notify::event-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: any): number
    on(sigName: "notify::current-target", callback: any): number
    once(sigName: "notify::current-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: any): number
    on(sigName: "notify::bubbles", callback: any): number
    once(sigName: "notify::bubbles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: any): number
    on(sigName: "notify::cancelable", callback: any): number
    once(sigName: "notify::cancelable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: any): number
    on(sigName: "notify::is-trusted", callback: any): number
    once(sigName: "notify::is-trusted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: any): number
    on(sigName: "notify::time-stamp", callback: any): number
    once(sigName: "notify::time-stamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: any): number
    on(sigName: "notify::default-prevented", callback: any): number
    once(sigName: "notify::default-prevented", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: any): number
    on(sigName: "notify::event-phase", callback: any): number
    once(sigName: "notify::event-phase", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomCustomEvent {

    // Own properties of GXml-0.20.GXml.DomCustomEvent

    static name: string

    // Constructors of GXml-0.20.GXml.DomCustomEvent

    constructor(config?: DomCustomEvent.ConstructorProperties) 
    _init(config?: DomCustomEvent.ConstructorProperties): void
}

export module DomMutationObserver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomMutationObserver extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.DomMutationObserver

    // Has conflict: observe(target: Node, options: DomMutationObserverInit): void
    // Has conflict: disconnect(): void
    // Has conflict: takeRecords(): Gee.List

    // Own virtual methods of GXml-0.20.GXml.DomMutationObserver

    observe(target: Node, options: DomMutationObserverInit): void
    disconnect(): void
    takeRecords(): Gee.List

    // Class property signals of GXml-0.20.GXml.DomMutationObserver

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomMutationObserver {

    // Own properties of GXml-0.20.GXml.DomMutationObserver

    static name: string

    // Constructors of GXml-0.20.GXml.DomMutationObserver

    constructor(config?: DomMutationObserver.ConstructorProperties) 
    _init(config?: DomMutationObserver.ConstructorProperties): void
}

export module DomMutationRecord {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomMutationRecord

        addedNodes?: DomNodeList | null
        removedNodes?: DomNodeList | null
    }

}

export interface DomMutationRecord extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomMutationRecord

    readonly mtype: string
    readonly target: DomNode
    addedNodes: DomNodeList
    removedNodes: DomNodeList
    readonly previousSibling: DomNode
    readonly nextSibling: DomNode
    readonly attributeName: string
    readonly attributeNamespace: string
    readonly oldValue: string

    // Owm methods of GXml-0.20.GXml.DomMutationRecord

    // Has conflict: getMtype(): string
    // Has conflict: getTarget(): DomNode
    // Has conflict: getAddedNodes(): DomNodeList
    // Has conflict: setAddedNodes(value: DomNodeList): void
    // Has conflict: getRemovedNodes(): DomNodeList
    // Has conflict: setRemovedNodes(value: DomNodeList): void
    // Has conflict: getPreviousSibling(): DomNode | null
    // Has conflict: getNextSibling(): DomNode | null
    // Has conflict: getAttributeName(): string | null
    // Has conflict: getAttributeNamespace(): string | null
    // Has conflict: getOldValue(): string | null

    // Own virtual methods of GXml-0.20.GXml.DomMutationRecord

    getMtype(): string
    getTarget(): DomNode
    getAddedNodes(): DomNodeList
    setAddedNodes(value: DomNodeList): void
    getRemovedNodes(): DomNodeList
    setRemovedNodes(value: DomNodeList): void
    getPreviousSibling(): DomNode | null
    getNextSibling(): DomNode | null
    getAttributeName(): string | null
    getAttributeNamespace(): string | null
    getOldValue(): string | null

    // Class property signals of GXml-0.20.GXml.DomMutationRecord

    connect(sigName: "notify::mtype", callback: any): number
    on(sigName: "notify::mtype", callback: any): number
    once(sigName: "notify::mtype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mtype", ...args: any[]): void
    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::added-nodes", callback: any): number
    on(sigName: "notify::added-nodes", callback: any): number
    once(sigName: "notify::added-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::added-nodes", ...args: any[]): void
    connect(sigName: "notify::removed-nodes", callback: any): number
    on(sigName: "notify::removed-nodes", callback: any): number
    once(sigName: "notify::removed-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::removed-nodes", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::attribute-name", callback: any): number
    on(sigName: "notify::attribute-name", callback: any): number
    once(sigName: "notify::attribute-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-name", ...args: any[]): void
    connect(sigName: "notify::attribute-namespace", callback: any): number
    on(sigName: "notify::attribute-namespace", callback: any): number
    once(sigName: "notify::attribute-namespace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-namespace", ...args: any[]): void
    connect(sigName: "notify::old-value", callback: any): number
    on(sigName: "notify::old-value", callback: any): number
    once(sigName: "notify::old-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::old-value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomMutationRecord {

    // Own properties of GXml-0.20.GXml.DomMutationRecord

    static name: string

    // Constructors of GXml-0.20.GXml.DomMutationRecord

    constructor(config?: DomMutationRecord.ConstructorProperties) 
    _init(config?: DomMutationRecord.ConstructorProperties): void
}

export module DomNode {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomEventTarget.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomNode

        ownerDocument?: DomDocument | null
        nodeValue?: string | null
        textContent?: string | null
    }

}

export interface DomNode extends GObject.Object, DomEventTarget {

    // Own properties of GXml-0.20.GXml.DomNode

    readonly nodeType: DomNodeNodeType
    readonly nodeName: string
    readonly baseUri: string
    ownerDocument: DomDocument
    readonly parentNode: DomNode
    readonly parentElement: DomElement
    readonly childNodes: DomNodeList
    readonly firstChild: DomNode
    readonly lastChild: DomNode
    readonly previousSibling: DomNode
    readonly nextSibling: DomNode
    nodeValue: string
    textContent: string

    // Owm methods of GXml-0.20.GXml.DomNode

    // Has conflict: getNodeType(): DomNodeNodeType
    // Has conflict: getNodeName(): string
    // Has conflict: getBaseUri(): string | null
    // Has conflict: getOwnerDocument(): DomDocument | null
    // Has conflict: setOwnerDocument(value: DomDocument | null): void
    // Has conflict: getParentNode(): DomNode | null
    // Has conflict: getParentElement(): DomElement | null
    // Has conflict: getChildNodes(): DomNodeList
    // Has conflict: getFirstChild(): DomNode | null
    // Has conflict: getLastChild(): DomNode | null
    // Has conflict: getPreviousSibling(): DomNode | null
    // Has conflict: getNextSibling(): DomNode | null
    // Has conflict: getNodeValue(): string | null
    // Has conflict: setNodeValue(value: string | null): void
    // Has conflict: getTextContent(): string | null
    // Has conflict: setTextContent(value: string | null): void
    // Has conflict: hasChildNodes(): boolean
    // Has conflict: normalize(): void
    // Has conflict: isEqualNode(node: DomNode | null): boolean
    // Has conflict: compareDocumentPosition(other: DomNode): DomNodeDocumentPosition
    // Has conflict: contains(other: DomNode | null): boolean
    // Has conflict: lookupPrefix(nspace: string | null): string | null
    // Has conflict: lookupNamespaceUri(prefix: string | null): string | null
    // Has conflict: isDefaultNamespace(nspace: string | null): boolean
    // Has conflict: insertBefore(node: DomNode, child: DomNode | null): DomNode
    // Has conflict: appendChild(node: DomNode): DomNode
    // Has conflict: replaceChild(node: DomNode, child: DomNode): DomNode
    // Has conflict: removeChild(child: DomNode): DomNode

    // Own virtual methods of GXml-0.20.GXml.DomNode

    getNodeType(): DomNodeNodeType
    getNodeName(): string
    getBaseUri(): string | null
    getOwnerDocument(): DomDocument | null
    setOwnerDocument(value: DomDocument | null): void
    getParentNode(): DomNode | null
    getParentElement(): DomElement | null
    getChildNodes(): DomNodeList
    getFirstChild(): DomNode | null
    getLastChild(): DomNode | null
    getPreviousSibling(): DomNode | null
    getNextSibling(): DomNode | null
    getNodeValue(): string | null
    setNodeValue(value: string | null): void
    getTextContent(): string | null
    setTextContent(value: string | null): void
    hasChildNodes(): boolean
    normalize(): void
    isEqualNode(node: DomNode | null): boolean
    compareDocumentPosition(other: DomNode): DomNodeDocumentPosition
    contains(other: DomNode | null): boolean
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    isDefaultNamespace(nspace: string | null): boolean
    insertBefore(node: DomNode, child: DomNode | null): DomNode
    appendChild(node: DomNode): DomNode
    replaceChild(node: DomNode, child: DomNode): DomNode
    removeChild(child: DomNode): DomNode

    // Class property signals of GXml-0.20.GXml.DomNode

    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomNode {

    // Own properties of GXml-0.20.GXml.DomNode

    static name: string

    // Constructors of GXml-0.20.GXml.DomNode

    constructor(config?: DomNode.ConstructorProperties) 
    _init(config?: DomNode.ConstructorProperties): void
    static copy(doc: DomDocument, node: DomNode, source: DomNode, deep: boolean): boolean
}

export module DomRange {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomRange extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomRange

    readonly startContainer: DomNode
    readonly startOffset: number
    readonly endContainer: DomNode
    readonly endOffset: number
    readonly collapsed: boolean
    readonly commonAncestorContainer: DomNode

    // Owm methods of GXml-0.20.GXml.DomRange

    // Has conflict: getStartContainer(): DomNode
    // Has conflict: getStartOffset(): number
    // Has conflict: getEndContainer(): DomNode
    // Has conflict: getEndOffset(): number
    // Has conflict: getCollapsed(): boolean
    // Has conflict: getCommonAncestorContainer(): DomNode
    // Has conflict: setStart(node: DomNode, offset: number): void
    // Has conflict: setEnd(node: DomNode, offset: number): void
    // Has conflict: setStartBefore(node: DomNode): void
    // Has conflict: setStartAfter(node: DomNode): void
    // Has conflict: setEndBefore(node: DomNode): void
    // Has conflict: setEndAfter(node: DomNode): void
    // Has conflict: collapse(toStart: boolean): void
    // Has conflict: selectNode(node: DomNode): void
    // Has conflict: selectNodeContents(node: DomNode): void
    // Has conflict: compareBoundaryPoints(how: DomRangeBoundaryPoints, sourceRange: DomRange): number
    // Has conflict: deleteContents(): void
    // Has conflict: extractContents(): DomDocumentFragment | null
    // Has conflict: cloneContents(): DomDocumentFragment | null
    // Has conflict: insertNode(node: DomNode): void
    // Has conflict: surroundContents(newParent: DomNode): void
    // Has conflict: cloneRange(): DomRange
    // Has conflict: detach(): void
    // Has conflict: isPointInRange(node: DomNode, offset: number): boolean
    // Has conflict: comparePoint(node: DomNode, offset: number): number
    // Has conflict: intersectsNode(node: DomNode): boolean
    // Has conflict: toString(): string

    // Own virtual methods of GXml-0.20.GXml.DomRange

    getStartContainer(): DomNode
    getStartOffset(): number
    getEndContainer(): DomNode
    getEndOffset(): number
    getCollapsed(): boolean
    getCommonAncestorContainer(): DomNode
    setStart(node: DomNode, offset: number): void
    setEnd(node: DomNode, offset: number): void
    setStartBefore(node: DomNode): void
    setStartAfter(node: DomNode): void
    setEndBefore(node: DomNode): void
    setEndAfter(node: DomNode): void
    collapse(toStart: boolean): void
    selectNode(node: DomNode): void
    selectNodeContents(node: DomNode): void
    compareBoundaryPoints(how: DomRangeBoundaryPoints, sourceRange: DomRange): number
    deleteContents(): void
    extractContents(): DomDocumentFragment | null
    cloneContents(): DomDocumentFragment | null
    insertNode(node: DomNode): void
    surroundContents(newParent: DomNode): void
    cloneRange(): DomRange
    detach(): void
    isPointInRange(node: DomNode, offset: number): boolean
    comparePoint(node: DomNode, offset: number): number
    intersectsNode(node: DomNode): boolean
    toString(): string

    // Class property signals of GXml-0.20.GXml.DomRange

    connect(sigName: "notify::start-container", callback: any): number
    on(sigName: "notify::start-container", callback: any): number
    once(sigName: "notify::start-container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-container", ...args: any[]): void
    connect(sigName: "notify::start-offset", callback: any): number
    on(sigName: "notify::start-offset", callback: any): number
    once(sigName: "notify::start-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-offset", ...args: any[]): void
    connect(sigName: "notify::end-container", callback: any): number
    on(sigName: "notify::end-container", callback: any): number
    once(sigName: "notify::end-container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-container", ...args: any[]): void
    connect(sigName: "notify::end-offset", callback: any): number
    on(sigName: "notify::end-offset", callback: any): number
    once(sigName: "notify::end-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-offset", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: any): number
    on(sigName: "notify::collapsed", callback: any): number
    once(sigName: "notify::collapsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::common-ancestor-container", callback: any): number
    on(sigName: "notify::common-ancestor-container", callback: any): number
    once(sigName: "notify::common-ancestor-container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::common-ancestor-container", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomRange {

    // Own properties of GXml-0.20.GXml.DomRange

    static name: string

    // Constructors of GXml-0.20.GXml.DomRange

    constructor(config?: DomRange.ConstructorProperties) 
    _init(config?: DomRange.ConstructorProperties): void
}

export module IXsdSchema {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdSchema

        elementDefinitions?: IXsdListElements | null
        simpleTypeDefinitions?: IXsdListSimpleTypes | null
        complexTypeDefinitions?: IXsdListComplexTypes | null
    }

}

export interface IXsdSchema extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdSchema

    elementDefinitions: IXsdListElements
    simpleTypeDefinitions: IXsdListSimpleTypes
    complexTypeDefinitions: IXsdListComplexTypes

    // Owm methods of GXml-0.20.GXml.IXsdSchema

    // Has conflict: getElementDefinitions(): IXsdListElements
    // Has conflict: setElementDefinitions(value: IXsdListElements): void
    // Has conflict: getSimpleTypeDefinitions(): IXsdListSimpleTypes
    // Has conflict: setSimpleTypeDefinitions(value: IXsdListSimpleTypes): void
    // Has conflict: getComplexTypeDefinitions(): IXsdListComplexTypes
    // Has conflict: setComplexTypeDefinitions(value: IXsdListComplexTypes): void

    // Own virtual methods of GXml-0.20.GXml.IXsdSchema

    getElementDefinitions(): IXsdListElements
    setElementDefinitions(value: IXsdListElements): void
    getSimpleTypeDefinitions(): IXsdListSimpleTypes
    setSimpleTypeDefinitions(value: IXsdListSimpleTypes): void
    getComplexTypeDefinitions(): IXsdListComplexTypes
    setComplexTypeDefinitions(value: IXsdListComplexTypes): void

    // Class property signals of GXml-0.20.GXml.IXsdSchema

    connect(sigName: "notify::element-definitions", callback: any): number
    on(sigName: "notify::element-definitions", callback: any): number
    once(sigName: "notify::element-definitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-definitions", ...args: any[]): void
    connect(sigName: "notify::simple-type-definitions", callback: any): number
    on(sigName: "notify::simple-type-definitions", callback: any): number
    once(sigName: "notify::simple-type-definitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simple-type-definitions", ...args: any[]): void
    connect(sigName: "notify::complex-type-definitions", callback: any): number
    on(sigName: "notify::complex-type-definitions", callback: any): number
    once(sigName: "notify::complex-type-definitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::complex-type-definitions", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdSchema {

    // Own properties of GXml-0.20.GXml.IXsdSchema

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdSchema

    constructor(config?: IXsdSchema.ConstructorProperties) 
    _init(config?: IXsdSchema.ConstructorProperties): void
}

export module IXsdBaseType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdBaseType

        anotation?: IXsdAnnotation | null
    }

}

export interface IXsdBaseType extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseType

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseType

    // Has conflict: getAnotation(): IXsdAnnotation
    // Has conflict: setAnotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseType

    getAnotation(): IXsdAnnotation
    setAnotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseType

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdBaseType

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdBaseType

    constructor(config?: IXsdBaseType.ConstructorProperties) 
    _init(config?: IXsdBaseType.ConstructorProperties): void
}

export module IXsdSimpleType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties, IXsdBaseType.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdSimpleType

        final?: string | null
        id?: string | null
        name?: string | null
        annotation?: IXsdAnnotation | null
        list?: IXsdTypeList | null
        union?: IXsdTypeUnion | null
        restriction?: IXsdTypeRestriction | null
    }

}

export interface IXsdSimpleType extends GObject.Object, DomElement, IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdSimpleType

    final: string
    id: string
    name: string
    annotation: IXsdAnnotation
    list: IXsdTypeList
    union: IXsdTypeUnion
    restriction: IXsdTypeRestriction

    // Owm methods of GXml-0.20.GXml.IXsdSimpleType

    // Has conflict: getFinal(): string
    // Has conflict: setFinal(value: string): void
    // Has conflict: getId(): string
    // Has conflict: setId(value: string): void
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getAnnotation(): IXsdAnnotation
    // Has conflict: setAnnotation(value: IXsdAnnotation): void
    // Has conflict: getList(): IXsdTypeList
    // Has conflict: setList(value: IXsdTypeList): void
    // Has conflict: getUnion(): IXsdTypeUnion
    // Has conflict: setUnion(value: IXsdTypeUnion): void
    // Has conflict: getRestriction(): IXsdTypeRestriction
    // Has conflict: setRestriction(value: IXsdTypeRestriction): void

    // Own virtual methods of GXml-0.20.GXml.IXsdSimpleType

    getFinal(): string
    setFinal(value: string): void
    getId(): string

    // Overloads of getId

    getId(): string | null
    setId(value: string): void

    // Overloads of setId

    setId(value: string | null): void
    getName(): string
    setName(value: string): void
    getAnnotation(): IXsdAnnotation
    setAnnotation(value: IXsdAnnotation): void
    getList(): IXsdTypeList
    setList(value: IXsdTypeList): void
    getUnion(): IXsdTypeUnion
    setUnion(value: IXsdTypeUnion): void
    getRestriction(): IXsdTypeRestriction
    setRestriction(value: IXsdTypeRestriction): void

    // Class property signals of GXml-0.20.GXml.IXsdSimpleType

    connect(sigName: "notify::final", callback: any): number
    on(sigName: "notify::final", callback: any): number
    once(sigName: "notify::final", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::list", callback: any): number
    on(sigName: "notify::list", callback: any): number
    once(sigName: "notify::list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::union", callback: any): number
    on(sigName: "notify::union", callback: any): number
    once(sigName: "notify::union", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::union", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: any): number
    on(sigName: "notify::restriction", callback: any): number
    once(sigName: "notify::restriction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdSimpleType {

    // Own properties of GXml-0.20.GXml.IXsdSimpleType

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdSimpleType

    constructor(config?: IXsdSimpleType.ConstructorProperties) 
    _init(config?: IXsdSimpleType.ConstructorProperties): void
}

export module IXsdTypeDef {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdTypeDef extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdTypeDef

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeDef

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeDef

    constructor(config?: IXsdTypeDef.ConstructorProperties) 
    _init(config?: IXsdTypeDef.ConstructorProperties): void
}

export module IXsdTypeRestriction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestriction

        base?: string | null
        id?: string | null
        simpleType?: IXsdSimpleType | null
        enumerations?: IXsdListTypeRestrictionEnumerations | null
        whiteSpaces?: IXsdListTypeRestrictionWhiteSpaces | null
    }

}

export interface IXsdTypeRestriction extends GObject.Object, IXsdTypeDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestriction

    base: string
    id: string
    simpleType: IXsdSimpleType
    enumerations: IXsdListTypeRestrictionEnumerations
    whiteSpaces: IXsdListTypeRestrictionWhiteSpaces

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestriction

    // Has conflict: getBase(): string
    // Has conflict: setBase(value: string): void
    // Has conflict: getId(): string
    // Has conflict: setId(value: string): void
    // Has conflict: getSimpleType(): IXsdSimpleType
    // Has conflict: setSimpleType(value: IXsdSimpleType): void
    // Has conflict: getEnumerations(): IXsdListTypeRestrictionEnumerations
    // Has conflict: setEnumerations(value: IXsdListTypeRestrictionEnumerations): void
    // Has conflict: getWhiteSpaces(): IXsdListTypeRestrictionWhiteSpaces
    // Has conflict: setWhiteSpaces(value: IXsdListTypeRestrictionWhiteSpaces): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestriction

    getBase(): string
    setBase(value: string): void
    getId(): string
    setId(value: string): void
    getSimpleType(): IXsdSimpleType
    setSimpleType(value: IXsdSimpleType): void
    getEnumerations(): IXsdListTypeRestrictionEnumerations
    setEnumerations(value: IXsdListTypeRestrictionEnumerations): void
    getWhiteSpaces(): IXsdListTypeRestrictionWhiteSpaces
    setWhiteSpaces(value: IXsdListTypeRestrictionWhiteSpaces): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestriction

    connect(sigName: "notify::base", callback: any): number
    on(sigName: "notify::base", callback: any): number
    once(sigName: "notify::base", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: any): number
    on(sigName: "notify::simple-type", callback: any): number
    once(sigName: "notify::simple-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::enumerations", callback: any): number
    on(sigName: "notify::enumerations", callback: any): number
    once(sigName: "notify::enumerations", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enumerations", ...args: any[]): void
    connect(sigName: "notify::white-spaces", callback: any): number
    on(sigName: "notify::white-spaces", callback: any): number
    once(sigName: "notify::white-spaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::white-spaces", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestriction {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestriction

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestriction

    constructor(config?: IXsdTypeRestriction.ConstructorProperties) 
    _init(config?: IXsdTypeRestriction.ConstructorProperties): void
}

export module IXsdTypeList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeDef.ConstructorProperties {
    }

}

export interface IXsdTypeList extends GObject.Object, IXsdTypeDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeList {

    // Own properties of GXml-0.20.GXml.IXsdTypeList

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeList

    constructor(config?: IXsdTypeList.ConstructorProperties) 
    _init(config?: IXsdTypeList.ConstructorProperties): void
}

export module IXsdTypeUnion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeDef.ConstructorProperties {
    }

}

export interface IXsdTypeUnion extends GObject.Object, IXsdTypeDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeUnion

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeUnion {

    // Own properties of GXml-0.20.GXml.IXsdTypeUnion

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeUnion

    constructor(config?: IXsdTypeUnion.ConstructorProperties) 
    _init(config?: IXsdTypeUnion.ConstructorProperties): void
}

export module IXsdTypeRestrictionDef {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

        annotation?: IXsdAnnotation | null
    }

}

export interface IXsdTypeRestrictionDef extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    annotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionDef

    // Has conflict: getAnnotation(): IXsdAnnotation
    // Has conflict: setAnnotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionDef

    getAnnotation(): IXsdAnnotation
    setAnnotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionDef

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDef

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionDef

    constructor(config?: IXsdTypeRestrictionDef.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionDef.ConstructorProperties): void
}

export module IXsdTypeRestrictionMinExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMinExclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionMinExclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusive

    constructor(config?: IXsdTypeRestrictionMinExclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMinExclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionMinInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMinInclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionMinInclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusive

    constructor(config?: IXsdTypeRestrictionMinInclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMinInclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionMaxExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMaxExclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionMaxExclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusive

    constructor(config?: IXsdTypeRestrictionMaxExclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMaxExclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionMaxInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMaxInclusive extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionMaxInclusive {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusive

    constructor(config?: IXsdTypeRestrictionMaxInclusive.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMaxInclusive.ConstructorProperties): void
}

export module IXsdTypeRestrictionTotalDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionTotalDigits extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionTotalDigits {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigits

    constructor(config?: IXsdTypeRestrictionTotalDigits.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionTotalDigits.ConstructorProperties): void
}

export module IXsdTypeRestrictionFractionDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionFractionDigits extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionFractionDigits {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigits

    constructor(config?: IXsdTypeRestrictionFractionDigits.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionFractionDigits.ConstructorProperties): void
}

export module IXsdTypeRestrictionLength {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionLength

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionLength

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionLength

    constructor(config?: IXsdTypeRestrictionLength.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionLength.ConstructorProperties): void
}

export module IXsdTypeRestrictionMinLength {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMinLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionMinLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMinLength

    constructor(config?: IXsdTypeRestrictionMinLength.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMinLength.ConstructorProperties): void
}

export module IXsdTypeRestrictionMaxLength {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionMaxLength extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionMaxLength {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionMaxLength

    constructor(config?: IXsdTypeRestrictionMaxLength.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionMaxLength.ConstructorProperties): void
}

export module IXsdTypeRestrictionEnumeration {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

        id?: string | null
        value?: string | null
    }

}

export interface IXsdTypeRestrictionEnumeration extends GObject.Object, IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    id: string
    value: string

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    // Has conflict: getId(): string
    // Has conflict: setId(value: string): void
    // Has conflict: getValue(): string
    // Has conflict: setValue(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    getId(): string
    setId(value: string): void
    getValue(): string
    setValue(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionEnumeration {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionEnumeration

    constructor(config?: IXsdTypeRestrictionEnumeration.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionEnumeration.ConstructorProperties): void
}

export module IXsdTypeRestrictionWhiteSpace {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

        fixed?: boolean | null
        id?: string | null
        value?: string | null
    }

}

export interface IXsdTypeRestrictionWhiteSpace extends GObject.Object, IXsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    fixed: boolean
    id: string
    value: string

    // Owm methods of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    // Has conflict: getFixed(): boolean
    // Has conflict: setFixed(value: boolean): void
    // Has conflict: getId(): string
    // Has conflict: setId(value: string): void
    // Has conflict: getValue(): string
    // Has conflict: setValue(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    getFixed(): boolean
    setFixed(value: boolean): void
    getId(): string
    setId(value: string): void
    getValue(): string
    setValue(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    connect(sigName: "notify::fixed", callback: any): number
    on(sigName: "notify::fixed", callback: any): number
    once(sigName: "notify::fixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionWhiteSpace {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpace

    constructor(config?: IXsdTypeRestrictionWhiteSpace.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionWhiteSpace.ConstructorProperties): void
}

export module IXsdTypeRestrictionPattern {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionPattern extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionPattern {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionPattern

    constructor(config?: IXsdTypeRestrictionPattern.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionPattern.ConstructorProperties): void
}

export module IXsdTypeRestrictionAssertion {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionAssertion extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionAssertion {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionAssertion

    constructor(config?: IXsdTypeRestrictionAssertion.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionAssertion.ConstructorProperties): void
}

export module IXsdTypeRestrictionExplicitTimezone {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface IXsdTypeRestrictionExplicitTimezone extends GObject.Object, IXsdTypeRestrictionDef {

    // Class property signals of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdTypeRestrictionExplicitTimezone {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezone

    constructor(config?: IXsdTypeRestrictionExplicitTimezone.ConstructorProperties) 
    _init(config?: IXsdTypeRestrictionExplicitTimezone.ConstructorProperties): void
}

export module IXsdComplexType {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties, IXsdBaseType.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdComplexType

        abstract?: boolean | null
        block?: string | null
        final?: string | null
        mixed?: boolean | null
        name?: string | null
        defaultAttributesApply?: boolean | null
        contentType?: IXsdBaseContent | null
    }

}

export interface IXsdComplexType extends GObject.Object, DomElement, IXsdBaseType {

    // Own properties of GXml-0.20.GXml.IXsdComplexType

    abstract: boolean
    block: string
    final: string
    mixed: boolean
    name: string
    defaultAttributesApply: boolean
    contentType: IXsdBaseContent
    readonly typeAttributes: IXsdListAttributes
    readonly groupAttributes: IXsdListAttributesGroup

    // Owm methods of GXml-0.20.GXml.IXsdComplexType

    // Has conflict: getAbstract(): boolean
    // Has conflict: setAbstract(value: boolean): void
    // Has conflict: getBlock(): string
    // Has conflict: setBlock(value: string): void
    // Has conflict: getFinal(): string
    // Has conflict: setFinal(value: string): void
    // Has conflict: getMixed(): boolean
    // Has conflict: setMixed(value: boolean): void
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getDefaultAttributesApply(): boolean
    // Has conflict: setDefaultAttributesApply(value: boolean): void
    // Has conflict: getContentType(): IXsdBaseContent
    // Has conflict: setContentType(value: IXsdBaseContent): void
    // Has conflict: getTypeAttributes(): IXsdListAttributes
    // Has conflict: getGroupAttributes(): IXsdListAttributesGroup

    // Own virtual methods of GXml-0.20.GXml.IXsdComplexType

    getAbstract(): boolean
    setAbstract(value: boolean): void
    getBlock(): string
    setBlock(value: string): void
    getFinal(): string
    setFinal(value: string): void
    getMixed(): boolean
    setMixed(value: boolean): void
    getName(): string
    setName(value: string): void
    getDefaultAttributesApply(): boolean
    setDefaultAttributesApply(value: boolean): void
    getContentType(): IXsdBaseContent
    setContentType(value: IXsdBaseContent): void
    getTypeAttributes(): IXsdListAttributes
    getGroupAttributes(): IXsdListAttributesGroup

    // Class property signals of GXml-0.20.GXml.IXsdComplexType

    connect(sigName: "notify::abstract", callback: any): number
    on(sigName: "notify::abstract", callback: any): number
    once(sigName: "notify::abstract", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: any): number
    on(sigName: "notify::block", callback: any): number
    once(sigName: "notify::block", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::final", callback: any): number
    on(sigName: "notify::final", callback: any): number
    once(sigName: "notify::final", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::mixed", callback: any): number
    on(sigName: "notify::mixed", callback: any): number
    once(sigName: "notify::mixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mixed", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::default-attributes-apply", callback: any): number
    on(sigName: "notify::default-attributes-apply", callback: any): number
    once(sigName: "notify::default-attributes-apply", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-attributes-apply", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::type-attributes", callback: any): number
    on(sigName: "notify::type-attributes", callback: any): number
    once(sigName: "notify::type-attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-attributes", ...args: any[]): void
    connect(sigName: "notify::group-attributes", callback: any): number
    on(sigName: "notify::group-attributes", callback: any): number
    once(sigName: "notify::group-attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::group-attributes", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdComplexType {

    // Own properties of GXml-0.20.GXml.IXsdComplexType

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdComplexType

    constructor(config?: IXsdComplexType.ConstructorProperties) 
    _init(config?: IXsdComplexType.ConstructorProperties): void
}

export module IXsdExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdExtension

        base?: string | null
    }

}

export interface IXsdExtension extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdExtension

    base: string

    // Owm methods of GXml-0.20.GXml.IXsdExtension

    // Has conflict: getBase(): string
    // Has conflict: setBase(value: string): void

    // Own virtual methods of GXml-0.20.GXml.IXsdExtension

    getBase(): string
    setBase(value: string): void

    // Class property signals of GXml-0.20.GXml.IXsdExtension

    connect(sigName: "notify::base", callback: any): number
    on(sigName: "notify::base", callback: any): number
    once(sigName: "notify::base", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdExtension {

    // Own properties of GXml-0.20.GXml.IXsdExtension

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdExtension

    constructor(config?: IXsdExtension.ConstructorProperties) 
    _init(config?: IXsdExtension.ConstructorProperties): void
}

export module IXsdElement {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomElement.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdElement

        abstract?: boolean | null
        block?: string | null
        "default"?: string | null
        final?: string | null
        fixed?: string | null
        form?: string | null
        id?: string | null
        maxOccurs?: string | null
        minOccurs?: string | null
        name?: string | null
        nillable?: boolean | null
        ref?: string | null
        substitutionGroup?: DomTokenList | null
        targetNamespace?: string | null
        objectType?: string | null
        anotation?: IXsdAnnotation | null
        simpleType?: IXsdSimpleType | null
        complexType?: IXsdComplexType | null
    }

}

export interface IXsdElement extends GObject.Object, DomElement {

    // Own properties of GXml-0.20.GXml.IXsdElement

    abstract: boolean
    block: string
    "default": string
    final: string
    fixed: string
    form: string
    id: string
    maxOccurs: string
    minOccurs: string
    name: string
    nillable: boolean
    // Has conflict: ref: string
    substitutionGroup: DomTokenList
    targetNamespace: string
    objectType: string
    anotation: IXsdAnnotation
    simpleType: IXsdSimpleType
    complexType: IXsdComplexType

    // Owm methods of GXml-0.20.GXml.IXsdElement

    // Has conflict: getAbstract(): boolean
    // Has conflict: setAbstract(value: boolean): void
    // Has conflict: getBlock(): string
    // Has conflict: setBlock(value: string): void
    // Has conflict: getDefault(): string
    // Has conflict: setDefault(value: string): void
    // Has conflict: getFinal(): string
    // Has conflict: setFinal(value: string): void
    // Has conflict: getFixed(): string
    // Has conflict: setFixed(value: string): void
    // Has conflict: getForm(): string
    // Has conflict: setForm(value: string): void
    // Has conflict: getId(): string | null
    // Has conflict: setId(value: string | null): void
    // Has conflict: getMaxOccurs(): string
    // Has conflict: setMaxOccurs(value: string): void
    // Has conflict: getMinOccurs(): string
    // Has conflict: setMinOccurs(value: string): void
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getNillable(): boolean
    // Has conflict: setNillable(value: boolean): void
    // Has conflict: getRef(): string
    // Has conflict: setRef(value: string): void
    // Has conflict: getSubstitutionGroup(): DomTokenList
    // Has conflict: setSubstitutionGroup(value: DomTokenList): void
    // Has conflict: getTargetNamespace(): string
    // Has conflict: setTargetNamespace(value: string): void
    // Has conflict: getObjectType(): string
    // Has conflict: setObjectType(value: string): void
    // Has conflict: getAnotation(): IXsdAnnotation
    // Has conflict: setAnotation(value: IXsdAnnotation): void
    // Has conflict: getSimpleType(): IXsdSimpleType
    // Has conflict: setSimpleType(value: IXsdSimpleType): void
    // Has conflict: getComplexType(): IXsdComplexType
    // Has conflict: setComplexType(value: IXsdComplexType): void

    // Own virtual methods of GXml-0.20.GXml.IXsdElement

    getAbstract(): boolean
    setAbstract(value: boolean): void
    getBlock(): string
    setBlock(value: string): void
    getDefault(): string
    setDefault(value: string): void
    getFinal(): string
    setFinal(value: string): void
    getFixed(): string
    setFixed(value: string): void
    getForm(): string
    setForm(value: string): void
    getId(): string | null

    // Overloads of getId

    getId(): string | null
    setId(value: string | null): void

    // Overloads of setId

    setId(value: string | null): void
    getMaxOccurs(): string
    setMaxOccurs(value: string): void
    getMinOccurs(): string
    setMinOccurs(value: string): void
    getName(): string
    setName(value: string): void
    getNillable(): boolean
    setNillable(value: boolean): void
    getRef(): string
    setRef(value: string): void
    getSubstitutionGroup(): DomTokenList
    setSubstitutionGroup(value: DomTokenList): void
    getTargetNamespace(): string
    setTargetNamespace(value: string): void
    getObjectType(): string
    setObjectType(value: string): void
    getAnotation(): IXsdAnnotation
    setAnotation(value: IXsdAnnotation): void
    getSimpleType(): IXsdSimpleType
    setSimpleType(value: IXsdSimpleType): void
    getComplexType(): IXsdComplexType
    setComplexType(value: IXsdComplexType): void

    // Class property signals of GXml-0.20.GXml.IXsdElement

    connect(sigName: "notify::abstract", callback: any): number
    on(sigName: "notify::abstract", callback: any): number
    once(sigName: "notify::abstract", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: any): number
    on(sigName: "notify::block", callback: any): number
    once(sigName: "notify::block", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::default", callback: any): number
    on(sigName: "notify::default", callback: any): number
    once(sigName: "notify::default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::final", callback: any): number
    on(sigName: "notify::final", callback: any): number
    once(sigName: "notify::final", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: any): number
    on(sigName: "notify::fixed", callback: any): number
    once(sigName: "notify::fixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::form", callback: any): number
    on(sigName: "notify::form", callback: any): number
    once(sigName: "notify::form", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::maxOccurs", callback: any): number
    on(sigName: "notify::maxOccurs", callback: any): number
    once(sigName: "notify::maxOccurs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::maxOccurs", ...args: any[]): void
    connect(sigName: "notify::minOccurs", callback: any): number
    on(sigName: "notify::minOccurs", callback: any): number
    once(sigName: "notify::minOccurs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::minOccurs", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nillable", callback: any): number
    on(sigName: "notify::nillable", callback: any): number
    once(sigName: "notify::nillable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nillable", ...args: any[]): void
    connect(sigName: "notify::ref", callback: any): number
    on(sigName: "notify::ref", callback: any): number
    once(sigName: "notify::ref", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ref", ...args: any[]): void
    connect(sigName: "notify::substitution-group", callback: any): number
    on(sigName: "notify::substitution-group", callback: any): number
    once(sigName: "notify::substitution-group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::substitution-group", ...args: any[]): void
    connect(sigName: "notify::target-namespace", callback: any): number
    on(sigName: "notify::target-namespace", callback: any): number
    once(sigName: "notify::target-namespace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-namespace", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: any): number
    on(sigName: "notify::object-type", callback: any): number
    once(sigName: "notify::object-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: any): number
    on(sigName: "notify::simple-type", callback: any): number
    once(sigName: "notify::simple-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::complex-type", callback: any): number
    on(sigName: "notify::complex-type", callback: any): number
    once(sigName: "notify::complex-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::complex-type", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdElement {

    // Own properties of GXml-0.20.GXml.IXsdElement

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdElement

    constructor(config?: IXsdElement.ConstructorProperties) 
    _init(config?: IXsdElement.ConstructorProperties): void
}

export module IXsdAnnotation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdAnnotation extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAnnotation

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdAnnotation {

    // Own properties of GXml-0.20.GXml.IXsdAnnotation

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdAnnotation

    constructor(config?: IXsdAnnotation.ConstructorProperties) 
    _init(config?: IXsdAnnotation.ConstructorProperties): void
}

export module IXsdBaseContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdBaseContent

        anotation?: IXsdAnnotation | null
    }

}

export interface IXsdBaseContent extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseContent

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseContent

    // Has conflict: getAnotation(): IXsdAnnotation
    // Has conflict: setAnotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseContent

    getAnotation(): IXsdAnnotation
    setAnotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdBaseContent {

    // Own properties of GXml-0.20.GXml.IXsdBaseContent

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdBaseContent

    constructor(config?: IXsdBaseContent.ConstructorProperties) 
    _init(config?: IXsdBaseContent.ConstructorProperties): void
}

export module IXsdSimpleContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdBaseContent.ConstructorProperties {
    }

}

export interface IXsdSimpleContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdSimpleContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdSimpleContent {

    // Own properties of GXml-0.20.GXml.IXsdSimpleContent

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdSimpleContent

    constructor(config?: IXsdSimpleContent.ConstructorProperties) 
    _init(config?: IXsdSimpleContent.ConstructorProperties): void
}

export module IXsdComplexContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdBaseContent.ConstructorProperties {
    }

}

export interface IXsdComplexContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdComplexContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdComplexContent {

    // Own properties of GXml-0.20.GXml.IXsdComplexContent

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdComplexContent

    constructor(config?: IXsdComplexContent.ConstructorProperties) 
    _init(config?: IXsdComplexContent.ConstructorProperties): void
}

export module IXsdOpenContent {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdBaseContent.ConstructorProperties {
    }

}

export interface IXsdOpenContent extends GObject.Object, IXsdBaseContent {

    // Class property signals of GXml-0.20.GXml.IXsdOpenContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdOpenContent {

    // Own properties of GXml-0.20.GXml.IXsdOpenContent

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdOpenContent

    constructor(config?: IXsdOpenContent.ConstructorProperties) 
    _init(config?: IXsdOpenContent.ConstructorProperties): void
}

export module IXsdBaseAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdBaseAttribute

        anotation?: IXsdAnnotation | null
    }

}

export interface IXsdBaseAttribute extends GObject.Object {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttribute

    anotation: IXsdAnnotation

    // Owm methods of GXml-0.20.GXml.IXsdBaseAttribute

    // Has conflict: getAnotation(): IXsdAnnotation
    // Has conflict: setAnotation(value: IXsdAnnotation): void

    // Own virtual methods of GXml-0.20.GXml.IXsdBaseAttribute

    getAnotation(): IXsdAnnotation
    setAnotation(value: IXsdAnnotation): void

    // Class property signals of GXml-0.20.GXml.IXsdBaseAttribute

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttribute

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdBaseAttribute

    constructor(config?: IXsdBaseAttribute.ConstructorProperties) 
    _init(config?: IXsdBaseAttribute.ConstructorProperties): void
}

export module IXsdAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdAttribute extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAttribute

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdAttribute {

    // Own properties of GXml-0.20.GXml.IXsdAttribute

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdAttribute

    constructor(config?: IXsdAttribute.ConstructorProperties) 
    _init(config?: IXsdAttribute.ConstructorProperties): void
}

export module IXsdAttributeGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface IXsdAttributeGroup extends GObject.Object {

    // Class property signals of GXml-0.20.GXml.IXsdAttributeGroup

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdAttributeGroup {

    // Own properties of GXml-0.20.GXml.IXsdAttributeGroup

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdAttributeGroup

    constructor(config?: IXsdAttributeGroup.ConstructorProperties) 
    _init(config?: IXsdAttributeGroup.ConstructorProperties): void
}

export module IXsdList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, Collection.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.IXsdList

        element?: DomElement | null
        itemsType?: GObject.GType | null
        itemsName?: GObject.GType | null
    }

}

export interface IXsdList extends GObject.Object, Collection {

    // Own properties of GXml-0.20.GXml.IXsdList

    element: DomElement
    itemsType: GObject.GType
    itemsName: any
    readonly length: number

    // Owm methods of GXml-0.20.GXml.IXsdList

    // Has conflict: getElement(): DomElement
    // Has conflict: setElement(value: DomElement): void
    // Has conflict: getItemsType(): GObject.GType
    // Has conflict: setItemsType(value: GObject.GType): void
    // Has conflict: getItemsName(): GObject.GType
    // Has conflict: setItemsName(value: GObject.GType): void
    // Has conflict: getLength(): number
    // Has conflict: getItem(index: number): DomElement | null
    // Has conflict: append(element: DomElement): void
    // Has conflict: remove(index: number): void
    // Has conflict: indexOf(element: DomElement): number

    // Own virtual methods of GXml-0.20.GXml.IXsdList

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    setItemsName(value: GObject.GType): void
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    remove(index: number): void
    indexOf(element: DomElement): number

    // Class property signals of GXml-0.20.GXml.IXsdList

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdList {

    // Own properties of GXml-0.20.GXml.IXsdList

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdList

    constructor(config?: IXsdList.ConstructorProperties) 
    _init(config?: IXsdList.ConstructorProperties): void
}

export module IXsdListElements {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListElements extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListElements

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListElements {

    // Own properties of GXml-0.20.GXml.IXsdListElements

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListElements

    constructor(config?: IXsdListElements.ConstructorProperties) 
    _init(config?: IXsdListElements.ConstructorProperties): void
}

export module IXsdListSimpleTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListSimpleTypes extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListSimpleTypes

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListSimpleTypes {

    // Own properties of GXml-0.20.GXml.IXsdListSimpleTypes

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListSimpleTypes

    constructor(config?: IXsdListSimpleTypes.ConstructorProperties) 
    _init(config?: IXsdListSimpleTypes.ConstructorProperties): void
}

export module IXsdListComplexTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListComplexTypes extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListComplexTypes

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListComplexTypes {

    // Own properties of GXml-0.20.GXml.IXsdListComplexTypes

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListComplexTypes

    constructor(config?: IXsdListComplexTypes.ConstructorProperties) 
    _init(config?: IXsdListComplexTypes.ConstructorProperties): void
}

export module IXsdListAttributes {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListAttributes extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListAttributes

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListAttributes {

    // Own properties of GXml-0.20.GXml.IXsdListAttributes

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListAttributes

    constructor(config?: IXsdListAttributes.ConstructorProperties) 
    _init(config?: IXsdListAttributes.ConstructorProperties): void
}

export module IXsdListAttributesGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListAttributesGroup extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListAttributesGroup

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListAttributesGroup {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesGroup

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListAttributesGroup

    constructor(config?: IXsdListAttributesGroup.ConstructorProperties) 
    _init(config?: IXsdListAttributesGroup.ConstructorProperties): void
}

export module IXsdListTypeRestrictionEnumerations {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListTypeRestrictionEnumerations extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListTypeRestrictionEnumerations {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerations

    constructor(config?: IXsdListTypeRestrictionEnumerations.ConstructorProperties) 
    _init(config?: IXsdListTypeRestrictionEnumerations.ConstructorProperties): void
}

export module IXsdListTypeRestrictionWhiteSpaces {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, IXsdList.ConstructorProperties {
    }

}

export interface IXsdListTypeRestrictionWhiteSpaces extends GObject.Object, IXsdList {

    // Conflicting properties

    itemsName: any

    // Conflicting methods

    getElement(): DomElement

    // Overloads of getElement

    getElement(): DomElement
    getElement(): DomElement
    setElement(value: DomElement): void

    // Overloads of setElement

    setElement(value: DomElement): void
    setElement(value: DomElement): void
    getItemsType(): GObject.GType

    // Overloads of getItemsType

    getItemsType(): GObject.GType
    getItemsType(): GObject.GType
    setItemsType(value: GObject.GType): void

    // Overloads of setItemsType

    setItemsType(value: GObject.GType): void
    setItemsType(value: GObject.GType): void
    getItemsName(): GObject.GType

    // Overloads of getItemsName

    getItemsName(): string
    getItemsName(): string
    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    getItem(index: number): DomElement | null

    // Overloads of getItem

    getItem(index: number): DomElement | null
    getItem(index: number): DomElement | null
    append(element: DomElement): void

    // Overloads of append

    append(node: DomElement): void
    append(node: DomElement): void

    // Class property signals of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IXsdListTypeRestrictionWhiteSpaces {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    static name: string

    // Constructors of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpaces

    constructor(config?: IXsdListTypeRestrictionWhiteSpaces.ConstructorProperties) 
    _init(config?: IXsdListTypeRestrictionWhiteSpaces.ConstructorProperties): void
}

export module Object {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, DomNode.ConstructorProperties, DomElement.ConstructorProperties {
    }

}

export interface Object extends GObject.Object, DomNode, DomElement {

    // Owm methods of GXml-0.20.GXml.Object

    // Has conflict: getPropertiesList(): GObject.ParamSpec[]
    // Has conflict: findPropertyName(nick: string): GObject.ParamSpec | null
    // Has conflict: findObjectPropertyName(pname: string): GObject.ParamSpec | null
    // Has conflict: getPropertyElementList(): GObject.ParamSpec[]
    // Has conflict: getPropertyString(prop: GObject.ParamSpec): string | null
    // Has conflict: getAttribute(name: string): string | null
    // Has conflict: findProperty(name: string): Property | null
    // Has conflict: setAttribute(name: string, val: string): boolean
    // Has conflict: getChild(name: string): DomElement | null
    // Has conflict: findElements(name: string): DomElementList
    // Has conflict: removeAttribute(name: string): boolean
    // Has conflict: setInstanceProperty(name: string): boolean
    // Has conflict: cleanPropertyElements(name: string): void

    // Own virtual methods of GXml-0.20.GXml.Object

    getPropertiesList(): GObject.ParamSpec[]
    findPropertyName(nick: string): GObject.ParamSpec | null
    findObjectPropertyName(pname: string): GObject.ParamSpec | null
    getPropertyElementList(): GObject.ParamSpec[]
    getPropertyString(prop: GObject.ParamSpec): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    findProperty(name: string): Property | null
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    getChild(name: string): DomElement | null
    findElements(name: string): DomElementList
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void
    setInstanceProperty(name: string): boolean
    cleanPropertyElements(name: string): void

    // Class property signals of GXml-0.20.GXml.Object

    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Object {

    // Own properties of GXml-0.20.GXml.Object

    static name: string

    // Constructors of GXml-0.20.GXml.Object

    constructor(config?: Object.ConstructorProperties) 
    _init(config?: Object.ConstructorProperties): void
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Parser

        backup?: boolean | null
        indent?: boolean | null
        cancellable?: Gio.Cancellable | null
    }

}

export interface Parser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Parser

    backup: boolean
    indent: boolean
    cancellable: Gio.Cancellable
    readonly node: DomNode
    readonly types: GLib.HashTable

    // Owm methods of GXml-0.20.GXml.Parser

    // Has conflict: getBackup(): boolean
    // Has conflict: setBackup(value: boolean): void
    // Has conflict: getIndent(): boolean
    // Has conflict: setIndent(value: boolean): void
    // Has conflict: getCancellable(): Gio.Cancellable | null
    // Has conflict: setCancellable(value: Gio.Cancellable | null): void
    // Has conflict: getNode(): DomNode
    // Has conflict: getTypes(): GLib.HashTable
    // Has conflict: writeFile(file: Gio.File): void
    // Has conflict: writeFileAsync(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeFileFinish(res: Gio.AsyncResult): void
    // Has conflict: writeString(): string
    // Has conflict: writeStringAsync(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeStringFinish(res: Gio.AsyncResult): string
    // Has conflict: writeStream(stream: Gio.OutputStream): void
    // Has conflict: writeStreamAsync(stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: writeStreamFinish(res: Gio.AsyncResult): void
    // Has conflict: readFile(file: Gio.File): void
    // Has conflict: readFileAsync(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readFileFinish(res: Gio.AsyncResult): void
    // Has conflict: readStream(stream: Gio.InputStream): void
    // Has conflict: readStreamAsync(stream: Gio.InputStream, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readStreamFinish(res: Gio.AsyncResult): void
    // Has conflict: readString(str: string): void
    // Has conflict: readStringAsync(str: string, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readStringFinish(res: Gio.AsyncResult): void
    // Has conflict: createStream(): Gio.InputStream
    // Has conflict: createStreamAsync(callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: createStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    // Has conflict: readChildNodes(parent: DomNode): void
    // Has conflict: readChildNodesAsync(parent: DomNode, callback: Gio.AsyncReadyCallback | null): void
    // Has conflict: readChildNodesFinish(res: Gio.AsyncResult): void
    // Has conflict: readChildNode(parent: DomNode): boolean
    // Has conflict: readChildElement(parent: DomNode): boolean
    // Has conflict: readElementProperty(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    // Has conflict: addElementCollection(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    // Has conflict: readChildNodesStream(istream: Gio.InputStream): void
    // Has conflict: readChildNodesString(str: string): void
    // Has conflict: readUnparsed(): string
    // Has conflict: moveNextNode(): boolean
    // Has conflict: currentIsEmptyElement(): boolean
    // Has conflict: currentIsElement(): boolean
    // Has conflict: currentIsDocument(): boolean
    // Has conflict: currentNodeName(): string
    // Has conflict: createElement(parent: DomNode): DomElement | null
    // Has conflict: readElement(element: DomElement): void

    // Own virtual methods of GXml-0.20.GXml.Parser

    getBackup(): boolean
    setBackup(value: boolean): void
    getIndent(): boolean
    setIndent(value: boolean): void
    getCancellable(): Gio.Cancellable | null
    setCancellable(value: Gio.Cancellable | null): void
    getNode(): DomNode
    getTypes(): GLib.HashTable
    writeFile(file: Gio.File): void
    writeFileAsync(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    writeFileFinish(res: Gio.AsyncResult): void
    writeString(): string
    writeStringAsync(callback: Gio.AsyncReadyCallback | null): void
    writeStringFinish(res: Gio.AsyncResult): string
    writeStream(stream: Gio.OutputStream): void
    writeStreamAsync(stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null): void
    writeStreamFinish(res: Gio.AsyncResult): void
    readFile(file: Gio.File): void
    readFileAsync(file: Gio.File, callback: Gio.AsyncReadyCallback | null): void
    readFileFinish(res: Gio.AsyncResult): void
    readStream(stream: Gio.InputStream): void
    readStreamAsync(stream: Gio.InputStream, callback: Gio.AsyncReadyCallback | null): void
    readStreamFinish(res: Gio.AsyncResult): void
    readString(str: string): void
    readStringAsync(str: string, callback: Gio.AsyncReadyCallback | null): void
    readStringFinish(res: Gio.AsyncResult): void
    createStream(): Gio.InputStream
    createStreamAsync(callback: Gio.AsyncReadyCallback | null): void
    createStreamFinish(res: Gio.AsyncResult): Gio.InputStream
    readChildNodes(parent: DomNode): void
    readChildNodesAsync(parent: DomNode, callback: Gio.AsyncReadyCallback | null): void
    readChildNodesFinish(res: Gio.AsyncResult): void
    readChildNode(parent: DomNode): boolean
    readChildElement(parent: DomNode): boolean
    readElementProperty(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    addElementCollection(parent: DomNode): [ /* returnType */ boolean, /* element */ DomNode ]
    readChildNodesStream(istream: Gio.InputStream): void
    readChildNodesString(str: string): void
    readUnparsed(): string
    moveNextNode(): boolean
    currentIsEmptyElement(): boolean
    currentIsElement(): boolean
    currentIsDocument(): boolean
    currentNodeName(): string
    createElement(parent: DomNode): DomElement | null
    readElement(element: DomElement): void

    // Class property signals of GXml-0.20.GXml.Parser

    connect(sigName: "notify::backup", callback: any): number
    on(sigName: "notify::backup", callback: any): number
    once(sigName: "notify::backup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: any): number
    on(sigName: "notify::cancellable", callback: any): number
    once(sigName: "notify::cancellable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::node", callback: any): number
    on(sigName: "notify::node", callback: any): number
    once(sigName: "notify::node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::types", callback: any): number
    on(sigName: "notify::types", callback: any): number
    once(sigName: "notify::types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Parser {

    // Own properties of GXml-0.20.GXml.Parser

    static name: string

    // Constructors of GXml-0.20.GXml.Parser

    constructor(config?: Parser.ConstructorProperties) 
    _init(config?: Parser.ConstructorProperties): void
}

export module Property {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Property

        value?: string | null
    }

}

export interface Property extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Property

    value: string

    // Owm methods of GXml-0.20.GXml.Property

    // Has conflict: getValue(): string | null
    // Has conflict: setValue(value: string | null): void
    // Has conflict: validateValue(val: string | null): boolean

    // Own virtual methods of GXml-0.20.GXml.Property

    getValue(): string | null
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Property

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Property {

    // Own properties of GXml-0.20.GXml.Property

    static name: string

    // Constructors of GXml-0.20.GXml.Property

    constructor(config?: Property.ConstructorProperties) 
    _init(config?: Property.ConstructorProperties): void
}

export module XPathContext {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XPathContext extends GObject.Object {

    // Owm methods of GXml-0.20.GXml.XPathContext

    // Has conflict: evaluate(expression: string, resolver: Gee.Map | null): XPathObject

    // Own virtual methods of GXml-0.20.GXml.XPathContext

    evaluate(expression: string, resolver: Gee.Map | null): XPathObject

    // Class property signals of GXml-0.20.GXml.XPathContext

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XPathContext {

    // Own properties of GXml-0.20.GXml.XPathContext

    static name: string

    // Constructors of GXml-0.20.GXml.XPathContext

    constructor(config?: XPathContext.ConstructorProperties) 
    _init(config?: XPathContext.ConstructorProperties): void
}

export module XPathObject {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface XPathObject extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XPathObject

    readonly objectType: XPathObjectType
    readonly booleanValue: boolean
    readonly stringValue: string
    readonly numberValue: number
    readonly nodeset: DomHTMLCollection

    // Owm methods of GXml-0.20.GXml.XPathObject

    // Has conflict: getObjectType(): XPathObjectType
    // Has conflict: getBooleanValue(): boolean
    // Has conflict: getStringValue(): string
    // Has conflict: getNumberValue(): number
    // Has conflict: getNodeset(): DomHTMLCollection

    // Own virtual methods of GXml-0.20.GXml.XPathObject

    getObjectType(): XPathObjectType
    getBooleanValue(): boolean
    getStringValue(): string
    getNumberValue(): number
    getNodeset(): DomHTMLCollection

    // Class property signals of GXml-0.20.GXml.XPathObject

    connect(sigName: "notify::object-type", callback: any): number
    on(sigName: "notify::object-type", callback: any): number
    once(sigName: "notify::object-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::boolean-value", callback: any): number
    on(sigName: "notify::boolean-value", callback: any): number
    once(sigName: "notify::boolean-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::boolean-value", ...args: any[]): void
    connect(sigName: "notify::string-value", callback: any): number
    on(sigName: "notify::string-value", callback: any): number
    once(sigName: "notify::string-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::string-value", ...args: any[]): void
    connect(sigName: "notify::number-value", callback: any): number
    on(sigName: "notify::number-value", callback: any): number
    once(sigName: "notify::number-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::number-value", ...args: any[]): void
    connect(sigName: "notify::nodeset", callback: any): number
    on(sigName: "notify::nodeset", callback: any): number
    once(sigName: "notify::nodeset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodeset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XPathObject {

    // Own properties of GXml-0.20.GXml.XPathObject

    static name: string

    // Constructors of GXml-0.20.GXml.XPathObject

    constructor(config?: XPathObject.ConstructorProperties) 
    _init(config?: XPathObject.ConstructorProperties): void
}

export module ArrayList {

    // Constructor properties interface

    export interface ConstructorProperties extends List.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface ArrayList extends List {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Conflicting methods

    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.ArrayList

    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ArrayList extends BaseCollection {

    // Own properties of GXml-0.20.GXml.ArrayList

    static name: string

    // Constructors of GXml-0.20.GXml.ArrayList

    constructor(config?: ArrayList.ConstructorProperties) 
    constructor() 
    static new(): ArrayList
    _init(config?: ArrayList.ConstructorProperties): void
}

export module Attr {

    // Constructor properties interface

    export interface ConstructorProperties extends DomAttr.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface Attr extends DomAttr {

    // Own properties of GXml-0.20.GXml.Attr

    readonly isReferenced: boolean

    // Conflicting properties

    prefix: any
    localName: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Own fields of GXml-0.20.GXml.Attr

    namespaceUri: any
    prop: Property

    // Owm methods of GXml-0.20.GXml.Attr

    getIsReferenced(): boolean

    // Class property signals of GXml-0.20.GXml.Attr

    connect(sigName: "notify::is-referenced", callback: any): number
    on(sigName: "notify::is-referenced", callback: any): number
    once(sigName: "notify::is-referenced", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-referenced", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Attr extends Node {

    // Own properties of GXml-0.20.GXml.Attr

    static name: string

    // Constructors of GXml-0.20.GXml.Attr

    constructor(config?: Attr.ConstructorProperties) 
    constructor(element: DomElement, name: string, val: string) 
    static new(element: DomElement, name: string, val: string): Attr

    // Overloads of new

    static new(): Node
    static namespace(element: DomElement, namespaceUri: string, prefix: string | null, name: string, val: string): Attr
    static reference(element: DomElement, name: string): Attr
    _init(config?: Attr.ConstructorProperties): void
}

export module BaseCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Traversable.ConstructorProperties, Gee.Iterable.ConstructorProperties, Collection.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface BaseCollection extends Gee.Traversable, Gee.Iterable, Collection {

    // Own fields of GXml-0.20.GXml.BaseCollection

    nodesIndex: any
    element: any
    itemsName: any
    itemsType: GObject.GType

    // Owm methods of GXml-0.20.GXml.BaseCollection

    initializeElement(e: Element): void
    // Has conflict: validateAppend(index: number, element: DomElement): boolean
    // Has conflict: clear(): void

    // Own virtual methods of GXml-0.20.GXml.BaseCollection

    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void

    // Class property signals of GXml-0.20.GXml.BaseCollection

    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BaseCollection extends GObject.Object {

    // Own properties of GXml-0.20.GXml.BaseCollection

    static name: string

    // Constructors of GXml-0.20.GXml.BaseCollection

    constructor(config?: BaseCollection.ConstructorProperties) 
    _init(config?: BaseCollection.ConstructorProperties): void
}

export module CssSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.CssSelector

        selectorType?: CssSelectorType | null
        name?: string | null
        value?: string | null
        combiner?: CssCombiner | null
    }

}

export interface CssSelector {

    // Own properties of GXml-0.20.GXml.CssSelector

    selectorType: CssSelectorType
    name: string
    value: string
    combiner: CssCombiner

    // Owm methods of GXml-0.20.GXml.CssSelector

    getSelectorType(): CssSelectorType
    setSelectorType(value: CssSelectorType): void
    getName(): string
    setName(value: string): void
    getValue(): string
    setValue(value: string): void
    getCombiner(): CssCombiner
    setCombiner(value: CssCombiner): void

    // Class property signals of GXml-0.20.GXml.CssSelector

    connect(sigName: "notify::selector-type", callback: any): number
    on(sigName: "notify::selector-type", callback: any): number
    once(sigName: "notify::selector-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: any): number
    on(sigName: "notify::combiner", callback: any): number
    once(sigName: "notify::combiner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CssSelector extends GObject.Object {

    // Own properties of GXml-0.20.GXml.CssSelector

    static name: string

    // Constructors of GXml-0.20.GXml.CssSelector

    constructor(config?: CssSelector.ConstructorProperties) 
    constructor(t: CssSelectorType, name: string) 
    static new(t: CssSelectorType, name: string): CssSelector
    static withValue(t: CssSelectorType, name: string, value: string): CssSelector
    _init(config?: CssSelector.ConstructorProperties): void
}

export module CssElementSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends CssSelector.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.CssElementSelector

        prefix?: string | null
        localName?: string | null
    }

}

export interface CssElementSelector {

    // Own properties of GXml-0.20.GXml.CssElementSelector

    readonly prefixed: boolean
    prefix: string
    localName: string

    // Owm methods of GXml-0.20.GXml.CssElementSelector

    getPrefixed(): boolean
    getPrefix(): string | null
    setPrefix(value: string | null): void
    getLocalName(): string
    setLocalName(value: string): void

    // Class property signals of GXml-0.20.GXml.CssElementSelector

    connect(sigName: "notify::prefixed", callback: any): number
    on(sigName: "notify::prefixed", callback: any): number
    once(sigName: "notify::prefixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefixed", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: any): number
    on(sigName: "notify::selector-type", callback: any): number
    once(sigName: "notify::selector-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: any): number
    on(sigName: "notify::combiner", callback: any): number
    once(sigName: "notify::combiner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CssElementSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssElementSelector

    static name: string

    // Constructors of GXml-0.20.GXml.CssElementSelector

    constructor(config?: CssElementSelector.ConstructorProperties) 
    constructor(prefix: string | null, localName: string) 
    static new(prefix: string | null, localName: string): CssElementSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssElementSelector.ConstructorProperties): void
}

export module CssAttributeSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends CssSelector.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.CssAttributeSelector

        prefix?: string | null
        localName?: string | null
    }

}

export interface CssAttributeSelector {

    // Own properties of GXml-0.20.GXml.CssAttributeSelector

    prefix: string
    localName: string

    // Owm methods of GXml-0.20.GXml.CssAttributeSelector

    getPrefix(): string | null
    setPrefix(value: string | null): void
    getLocalName(): string
    setLocalName(value: string): void

    // Class property signals of GXml-0.20.GXml.CssAttributeSelector

    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: any): number
    on(sigName: "notify::selector-type", callback: any): number
    once(sigName: "notify::selector-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: any): number
    on(sigName: "notify::combiner", callback: any): number
    once(sigName: "notify::combiner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CssAttributeSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssAttributeSelector

    static name: string

    // Constructors of GXml-0.20.GXml.CssAttributeSelector

    constructor(config?: CssAttributeSelector.ConstructorProperties) 
    constructor(prefix: string | null, localName: string) 
    static new(prefix: string | null, localName: string): CssAttributeSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssAttributeSelector.ConstructorProperties): void
}

export module CssNotSelector {

    // Constructor properties interface

    export interface ConstructorProperties extends CssSelector.ConstructorProperties {
    }

}

export interface CssNotSelector {

    // Own properties of GXml-0.20.GXml.CssNotSelector

    readonly selectors: Gee.List

    // Owm methods of GXml-0.20.GXml.CssNotSelector

    getSelectors(): Gee.List

    // Class property signals of GXml-0.20.GXml.CssNotSelector

    connect(sigName: "notify::selectors", callback: any): number
    on(sigName: "notify::selectors", callback: any): number
    once(sigName: "notify::selectors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectors", ...args: any[]): void
    connect(sigName: "notify::selector-type", callback: any): number
    on(sigName: "notify::selector-type", callback: any): number
    once(sigName: "notify::selector-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selector-type", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::combiner", callback: any): number
    on(sigName: "notify::combiner", callback: any): number
    once(sigName: "notify::combiner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::combiner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CssNotSelector extends CssSelector {

    // Own properties of GXml-0.20.GXml.CssNotSelector

    static name: string

    // Constructors of GXml-0.20.GXml.CssNotSelector

    constructor(config?: CssNotSelector.ConstructorProperties) 
    constructor() 
    static new(): CssNotSelector

    // Overloads of new

    static new(t: CssSelectorType, name: string): CssSelector
    _init(config?: CssNotSelector.ConstructorProperties): void
}

export module CssSelectorParser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface CssSelectorParser {

    // Own properties of GXml-0.20.GXml.CssSelectorParser

    readonly selectors: Gee.List

    // Owm methods of GXml-0.20.GXml.CssSelectorParser

    parse(selectors: string): void
    getSelectors(): Gee.List
    match(element: DomElement): boolean
    querySelectorAll(element: DomElement): DomNodeList

    // Class property signals of GXml-0.20.GXml.CssSelectorParser

    connect(sigName: "notify::selectors", callback: any): number
    on(sigName: "notify::selectors", callback: any): number
    once(sigName: "notify::selectors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::selectors", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CssSelectorParser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.CssSelectorParser

    static name: string

    // Constructors of GXml-0.20.GXml.CssSelectorParser

    constructor(config?: CssSelectorParser.ConstructorProperties) 
    constructor() 
    static new(): CssSelectorParser
    _init(config?: CssSelectorParser.ConstructorProperties): void
}

export module Document {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties, DomDocument.ConstructorProperties, DomXMLDocument.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface Document extends DomParentNode, DomNonElementParentNode, DomDocument, DomXMLDocument {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Own fields of GXml-0.20.GXml.Document

    implementation: any
    url: any
    origin: any
    compatMode: any
    characterSet: any
    contentType: any
    constructor_: DomEvent
    parser: Parser

    // Owm methods of GXml-0.20.GXml.Document

    searchRootElementProperty(): Element

    // Class property signals of GXml-0.20.GXml.Document

    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: any): number
    on(sigName: "notify::implementation", callback: any): number
    once(sigName: "notify::implementation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: any): number
    on(sigName: "notify::document-uri", callback: any): number
    once(sigName: "notify::document-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: any): number
    on(sigName: "notify::compat-mode", callback: any): number
    once(sigName: "notify::compat-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: any): number
    on(sigName: "notify::character-set", callback: any): number
    once(sigName: "notify::character-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: any): number
    on(sigName: "notify::doctype", callback: any): number
    once(sigName: "notify::doctype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: any): number
    on(sigName: "notify::document-element", callback: any): number
    once(sigName: "notify::document-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Document extends Node {

    // Own properties of GXml-0.20.GXml.Document

    static name: string

    // Constructors of GXml-0.20.GXml.Document

    constructor(config?: Document.ConstructorProperties) 
    constructor() 
    static new(): Document

    // Overloads of new

    static new(): Node
    static fromPath(path: string): Document
    static fromUri(uri: string): Document
    static fromFile(file: Gio.File): Document
    static fromStream(stream: Gio.InputStream): Document
    static fromString(str: string): Document
    _init(config?: Document.ConstructorProperties): void
}

export module Implementation {

    // Constructor properties interface

    export interface ConstructorProperties extends DomImplementation.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Implementation extends DomImplementation {

    // Class property signals of GXml-0.20.GXml.Implementation

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Implementation extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Implementation

    static name: string

    // Constructors of GXml-0.20.GXml.Implementation

    constructor(config?: Implementation.ConstructorProperties) 
    constructor() 
    static new(): Implementation
    _init(config?: Implementation.ConstructorProperties): void
}

export module DocumentType {

    // Constructor properties interface

    export interface ConstructorProperties extends DomChildNode.ConstructorProperties, DomDocumentType.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface DocumentType extends DomChildNode, DomDocumentType {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Own fields of GXml-0.20.GXml.DocumentType

    name: any
    publicId: any
    systemId: any

    // Class property signals of GXml-0.20.GXml.DocumentType

    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::public-id", callback: any): number
    on(sigName: "notify::public-id", callback: any): number
    once(sigName: "notify::public-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::public-id", ...args: any[]): void
    connect(sigName: "notify::system-id", callback: any): number
    on(sigName: "notify::system-id", callback: any): number
    once(sigName: "notify::system-id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-id", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentType extends Node {

    // Own properties of GXml-0.20.GXml.DocumentType

    static name: string

    // Constructors of GXml-0.20.GXml.DocumentType

    constructor(config?: DocumentType.ConstructorProperties) 
    constructor(doc: DomDocument, name: string, publicId: string | null, systemId: string | null) 
    static new(doc: DomDocument, name: string, publicId: string | null, systemId: string | null): DocumentType

    // Overloads of new

    static new(): Node
    static withName(doc: DomDocument, name: string): DocumentType
    static withIds(doc: DomDocument, name: string, publicId: string, systemId: string): DocumentType
    _init(config?: DocumentType.ConstructorProperties): void
}

export module DocumentFragment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties, DomDocumentFragment.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface DocumentFragment extends DomParentNode, DomNonElementParentNode, DomDocumentFragment {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Class property signals of GXml-0.20.GXml.DocumentFragment

    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DocumentFragment extends Node {

    // Own properties of GXml-0.20.GXml.DocumentFragment

    static name: string

    // Constructors of GXml-0.20.GXml.DocumentFragment

    constructor(config?: DocumentFragment.ConstructorProperties) 
    constructor(doc: DomDocument) 
    static new(doc: DomDocument): DocumentFragment

    // Overloads of new

    static new(): Node
    _init(config?: DocumentFragment.ConstructorProperties): void
}

export module DomNodeFilter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomNodeFilter {

    // Class property signals of GXml-0.20.GXml.DomNodeFilter

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomNodeFilter extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomNodeFilter

    static name: string

    // Constructors of GXml-0.20.GXml.DomNodeFilter

    constructor(config?: DomNodeFilter.ConstructorProperties) 
    constructor() 
    static new(): DomNodeFilter
    _init(config?: DomNodeFilter.ConstructorProperties): void
}

export module DomElementList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomHTMLCollection.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface DomElementList extends DomHTMLCollection {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    toArray(): DomElement[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    get(index: number): object | null
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    set(index: number, item: object | null): void
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    add(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    remove(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Class property signals of GXml-0.20.GXml.DomElementList

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class DomElementList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.DomElementList

    static name: string

    // Constructors of GXml-0.20.GXml.DomElementList

    constructor(config?: DomElementList.ConstructorProperties) 
    constructor() 
    static new(): DomElementList

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: DomElementList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module DomEventInit {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomEventInit

        bubbles?: boolean | null
        cancelable?: boolean | null
    }

}

export interface DomEventInit {

    // Own properties of GXml-0.20.GXml.DomEventInit

    bubbles: boolean
    cancelable: boolean

    // Owm methods of GXml-0.20.GXml.DomEventInit

    getBubbles(): boolean
    setBubbles(value: boolean): void
    getCancelable(): boolean
    setCancelable(value: boolean): void

    // Class property signals of GXml-0.20.GXml.DomEventInit

    connect(sigName: "notify::bubbles", callback: any): number
    on(sigName: "notify::bubbles", callback: any): number
    once(sigName: "notify::bubbles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: any): number
    on(sigName: "notify::cancelable", callback: any): number
    once(sigName: "notify::cancelable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomEventInit extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomEventInit

    static name: string

    // Constructors of GXml-0.20.GXml.DomEventInit

    constructor(config?: DomEventInit.ConstructorProperties) 
    constructor() 
    static new(): DomEventInit
    _init(config?: DomEventInit.ConstructorProperties): void
}

export module DomCustomEventInit {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEventInit.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomCustomEventInit

        detail?: any | null
    }

}

export interface DomCustomEventInit {

    // Own properties of GXml-0.20.GXml.DomCustomEventInit

    detail: any

    // Owm methods of GXml-0.20.GXml.DomCustomEventInit

    getDetail(): /* result */ any
    setDetail(value: any): void

    // Class property signals of GXml-0.20.GXml.DomCustomEventInit

    connect(sigName: "notify::detail", callback: any): number
    on(sigName: "notify::detail", callback: any): number
    once(sigName: "notify::detail", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::detail", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: any): number
    on(sigName: "notify::bubbles", callback: any): number
    once(sigName: "notify::bubbles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: any): number
    on(sigName: "notify::cancelable", callback: any): number
    once(sigName: "notify::cancelable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomCustomEventInit extends DomEventInit {

    // Own properties of GXml-0.20.GXml.DomCustomEventInit

    static name: string

    // Constructors of GXml-0.20.GXml.DomCustomEventInit

    constructor(config?: DomCustomEventInit.ConstructorProperties) 
    constructor() 
    static new(): DomCustomEventInit

    // Overloads of new

    static new(): DomEventInit
    _init(config?: DomCustomEventInit.ConstructorProperties): void
}

export module DomTimeStamp {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomTimeStamp

        time?: GLib.DateTime | null
    }

}

export interface DomTimeStamp {

    // Own properties of GXml-0.20.GXml.DomTimeStamp

    time: GLib.DateTime

    // Owm methods of GXml-0.20.GXml.DomTimeStamp

    getTime(): GLib.DateTime
    setTime(value: GLib.DateTime): void
    toString(): string

    // Class property signals of GXml-0.20.GXml.DomTimeStamp

    connect(sigName: "notify::time", callback: any): number
    on(sigName: "notify::time", callback: any): number
    once(sigName: "notify::time", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomTimeStamp extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomTimeStamp

    static name: string

    // Constructors of GXml-0.20.GXml.DomTimeStamp

    constructor(config?: DomTimeStamp.ConstructorProperties) 
    constructor() 
    static new(): DomTimeStamp
    _init(config?: DomTimeStamp.ConstructorProperties): void
}

export module DomMutationObserverInit {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DomMutationObserverInit

        childList?: boolean | null
        attributes?: boolean | null
        characterData?: boolean | null
        subtree?: boolean | null
        attributeOldValue?: boolean | null
        characterDataOldValue?: boolean | null
        attributeFilter?: Gee.List | null
    }

}

export interface DomMutationObserverInit {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInit

    childList: boolean
    attributes: boolean
    characterData: boolean
    subtree: boolean
    attributeOldValue: boolean
    characterDataOldValue: boolean
    attributeFilter: Gee.List

    // Owm methods of GXml-0.20.GXml.DomMutationObserverInit

    getChildList(): boolean
    setChildList(value: boolean): void
    getAttributes(): boolean
    setAttributes(value: boolean): void
    getCharacterData(): boolean
    setCharacterData(value: boolean): void
    getSubtree(): boolean
    setSubtree(value: boolean): void
    getAttributeOldValue(): boolean
    setAttributeOldValue(value: boolean): void
    getCharacterDataOldValue(): boolean
    setCharacterDataOldValue(value: boolean): void
    getAttributeFilter(): Gee.List
    setAttributeFilter(value: Gee.List): void

    // Class property signals of GXml-0.20.GXml.DomMutationObserverInit

    connect(sigName: "notify::child-list", callback: any): number
    on(sigName: "notify::child-list", callback: any): number
    once(sigName: "notify::child-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::character-data", callback: any): number
    on(sigName: "notify::character-data", callback: any): number
    once(sigName: "notify::character-data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-data", ...args: any[]): void
    connect(sigName: "notify::subtree", callback: any): number
    on(sigName: "notify::subtree", callback: any): number
    once(sigName: "notify::subtree", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::subtree", ...args: any[]): void
    connect(sigName: "notify::attribute-old-value", callback: any): number
    on(sigName: "notify::attribute-old-value", callback: any): number
    once(sigName: "notify::attribute-old-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-old-value", ...args: any[]): void
    connect(sigName: "notify::character-data-old-value", callback: any): number
    on(sigName: "notify::character-data-old-value", callback: any): number
    once(sigName: "notify::character-data-old-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-data-old-value", ...args: any[]): void
    connect(sigName: "notify::attribute-filter", callback: any): number
    on(sigName: "notify::attribute-filter", callback: any): number
    once(sigName: "notify::attribute-filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-filter", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomMutationObserverInit extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInit

    static name: string

    // Constructors of GXml-0.20.GXml.DomMutationObserverInit

    constructor(config?: DomMutationObserverInit.ConstructorProperties) 
    constructor() 
    static new(): DomMutationObserverInit
    _init(config?: DomMutationObserverInit.ConstructorProperties): void
}

export module DomErrorName {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface DomErrorName {

    // Owm methods of GXml-0.20.GXml.DomErrorName

    getName(errorCode: number): string
    getCode(errorName: string): number

    // Class property signals of GXml-0.20.GXml.DomErrorName

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DomErrorName extends GObject.Object {

    // Own properties of GXml-0.20.GXml.DomErrorName

    static name: string

    // Constructors of GXml-0.20.GXml.DomErrorName

    constructor(config?: DomErrorName.ConstructorProperties) 
    constructor() 
    static new(): DomErrorName
    _init(config?: DomErrorName.ConstructorProperties): void
}

export module Element {

    // Constructor properties interface

    export interface ConstructorProperties extends DomChildNode.ConstructorProperties, DomNonDocumentTypeChildNode.ConstructorProperties, DomParentNode.ConstructorProperties, DomElement.ConstructorProperties, Object.ConstructorProperties, Node.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Element

        parseChildren?: boolean | null
        unparsed?: string | null
        readBuffer?: Gio.MemoryOutputStream | null
    }

}

export interface Element extends DomChildNode, DomNonDocumentTypeChildNode, DomParentNode, DomElement, Object {

    // Own properties of GXml-0.20.GXml.Element

    parseChildren: boolean
    unparsed: string
    readBuffer: Gio.MemoryOutputStream

    // Conflicting properties

    prefix: any
    localName: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Own fields of GXml-0.20.GXml.Element

    attributes: any
    namespaceUri: any

    // Owm methods of GXml-0.20.GXml.Element

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    initialize(localName: string): void
    initializeDocument(doc: DomDocument, localName: string): void
    initializeWithNamespace(namespaceUri: string | null, prefix: string | null, localName: string): void
    initializeDocumentWithNamespace(doc: DomDocument, namespaceUri: string | null, prefix: string | null, localName: string): void
    getParseChildren(): boolean
    setParseChildren(value: boolean): void
    getUnparsed(): string
    setUnparsed(value: string): void
    readUnparsed(): void
    getReadBuffer(): Gio.MemoryOutputStream
    setReadBuffer(value: Gio.MemoryOutputStream): void
    parseBuffer(): void
    parsePending(): number
    parseBufferAsync(callback: Gio.AsyncReadyCallback | null): void
    parseBufferFinish(res: Gio.AsyncResult): void

    // Conflicting methods

    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.Element

    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Element extends Node {

    // Own properties of GXml-0.20.GXml.Element

    static name: string

    // Constructors of GXml-0.20.GXml.Element

    constructor(config?: Element.ConstructorProperties) 
    constructor() 
    static new(): Element

    // Overloads of new

    static new(): Node
    _init(config?: Element.ConstructorProperties): void
}

export module ElementAttributes {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNamedNodeMap.ConstructorProperties, Gee.HashMap.ConstructorProperties {
    }

}

export interface ElementAttributes extends DomNamedNodeMap {

    // Own fields of GXml-0.20.GXml.ElementAttributes

    element: Element

    // Owm methods of GXml-0.20.GXml.ElementAttributes

    addReference(name: string): void

    // Conflicting methods

    hasKey(key: object | null): boolean
    hasKey(key: object | null): boolean

    // Overloads of hasKey

    hasKey(key: object | null): boolean
    has(key: object | null, value: object | null): boolean
    has(key: object | null, value: object | null): boolean

    // Overloads of has

    has(key: object | null, value: object | null): boolean
    get(key: object | null): object | null
    get(key: object | null): object | null

    // Overloads of get

    get(key: object | null): object | null
    set(key: object | null, value: object | null): void
    set(key: object | null, value: object | null): void

    // Overloads of set

    set(key: object | null, value: object | null): void
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]

    // Overloads of unset

    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    mapIterator(): Gee.MapIterator
    mapIterator(): Gee.MapIterator

    // Overloads of mapIterator

    mapIterator(): Gee.MapIterator
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getKeys(): Gee.Set
    getKeys(): Gee.Set

    // Overloads of getKeys

    getKeys(): Gee.Set
    getValues(): Gee.Collection
    getValues(): Gee.Collection

    // Overloads of getValues

    getValues(): Gee.Collection
    getEntries(): Gee.Set
    getEntries(): Gee.Set

    // Overloads of getEntries

    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map
    getReadOnlyView(): Gee.Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Map
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Class property signals of GXml-0.20.GXml.ElementAttributes

    connect(sigName: "notify::k-type", callback: any): number
    on(sigName: "notify::k-type", callback: any): number
    once(sigName: "notify::k-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: any): number
    on(sigName: "notify::k-dup-func", callback: any): number
    once(sigName: "notify::k-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: any): number
    on(sigName: "notify::k-destroy-func", callback: any): number
    once(sigName: "notify::k-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: any): number
    on(sigName: "notify::v-type", callback: any): number
    once(sigName: "notify::v-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: any): number
    on(sigName: "notify::v-dup-func", callback: any): number
    once(sigName: "notify::v-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: any): number
    on(sigName: "notify::v-destroy-func", callback: any): number
    once(sigName: "notify::v-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: any): number
    on(sigName: "notify::keys", callback: any): number
    once(sigName: "notify::keys", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: any): number
    on(sigName: "notify::entries", callback: any): number
    once(sigName: "notify::entries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ElementAttributes extends Gee.HashMap {

    // Own properties of GXml-0.20.GXml.ElementAttributes

    static name: string

    // Constructors of GXml-0.20.GXml.ElementAttributes

    constructor(config?: ElementAttributes.ConstructorProperties) 
    constructor(element: Element) 
    static new(element: Element): ElementAttributes

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ElementAttributes.ConstructorProperties): void
}

export interface Enumeration {

    // Own fields of GXml-0.20.GXml.Enumeration

    refCount: number
}

export class Enumeration {

    // Own properties of GXml-0.20.GXml.Enumeration

    static name: string

    // Constructors of GXml-0.20.GXml.Enumeration

    constructor() 
    static new(): Enumeration
    static getNick(enumeration: GObject.GType, val: number): string
    static getNickCamelcase(enumeration: GObject.GType, val: number): string
    static getString(enumeration: GObject.GType, val: number, useNick: boolean, camelcase: boolean): string
    static parse(enumeration: GObject.GType, val: string): GObject.EnumValue | null
    static toArray(enumeration: GObject.GType): GObject.EnumValue[]
    static parseInteger(enumeration: GObject.GType, val: number): GObject.EnumValue | null
    static toStringArray(enumeration: GObject.GType): string[]
}

export module Event {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEvent.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Event extends DomEvent {

    // Own fields of GXml-0.20.GXml.Event

    etype: any
    eventTarget: any
    currentTarget: any
    bubbles: any
    cancelable: any
    isTrusted: any
    timeStamp: any
    defaultPrevented: any
    eventPhase: any
    flags: DomEventFlags

    // Class property signals of GXml-0.20.GXml.Event

    connect(sigName: "notify::etype", callback: any): number
    on(sigName: "notify::etype", callback: any): number
    once(sigName: "notify::etype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::etype", ...args: any[]): void
    connect(sigName: "notify::event-target", callback: any): number
    on(sigName: "notify::event-target", callback: any): number
    once(sigName: "notify::event-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-target", ...args: any[]): void
    connect(sigName: "notify::current-target", callback: any): number
    on(sigName: "notify::current-target", callback: any): number
    once(sigName: "notify::current-target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-target", ...args: any[]): void
    connect(sigName: "notify::bubbles", callback: any): number
    on(sigName: "notify::bubbles", callback: any): number
    once(sigName: "notify::bubbles", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bubbles", ...args: any[]): void
    connect(sigName: "notify::cancelable", callback: any): number
    on(sigName: "notify::cancelable", callback: any): number
    once(sigName: "notify::cancelable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancelable", ...args: any[]): void
    connect(sigName: "notify::is-trusted", callback: any): number
    on(sigName: "notify::is-trusted", callback: any): number
    once(sigName: "notify::is-trusted", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-trusted", ...args: any[]): void
    connect(sigName: "notify::time-stamp", callback: any): number
    on(sigName: "notify::time-stamp", callback: any): number
    once(sigName: "notify::time-stamp", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::time-stamp", ...args: any[]): void
    connect(sigName: "notify::default-prevented", callback: any): number
    on(sigName: "notify::default-prevented", callback: any): number
    once(sigName: "notify::default-prevented", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-prevented", ...args: any[]): void
    connect(sigName: "notify::event-phase", callback: any): number
    on(sigName: "notify::event-phase", callback: any): number
    once(sigName: "notify::event-phase", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::event-phase", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Event extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Event

    static name: string

    // Constructors of GXml-0.20.GXml.Event

    constructor(config?: Event.ConstructorProperties) 
    constructor() 
    static new(): Event
    _init(config?: Event.ConstructorProperties): void
}

export module CustomEvent {

    // Constructor properties interface

    export interface ConstructorProperties extends Event.ConstructorProperties {
    }

}

export interface CustomEvent {

    // Conflicting properties

    etype: any
    eventTarget: any
    currentTarget: any
    bubbles: any
    cancelable: any
    isTrusted: any
    timeStamp: any
    defaultPrevented: any
    eventPhase: any

    // Own fields of GXml-0.20.GXml.CustomEvent

    detail: any

    // Owm methods of GXml-0.20.GXml.CustomEvent

    getDetail(): /* result */ any
    initCustomEvent(type: string, bubbles: boolean, cancelable: boolean, detail: any | null): void

    // Class property signals of GXml-0.20.GXml.CustomEvent

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CustomEvent extends Event {

    // Own properties of GXml-0.20.GXml.CustomEvent

    static name: string

    // Constructors of GXml-0.20.GXml.CustomEvent

    constructor(config?: CustomEvent.ConstructorProperties) 
    constructor() 
    static new(): CustomEvent

    // Overloads of new

    static new(): Event
    _init(config?: CustomEvent.ConstructorProperties): void
}

export module HashMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Map.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface HashMap extends Map {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Own fields of GXml-0.20.GXml.HashMap

    hashtable: Gee.HashMap
    attributeKey: string

    // Owm methods of GXml-0.20.GXml.HashMap

    initializeElementWithKey(element: Element, itemsType: GObject.GType, attributeKey: string): void
    initializeWithKey(itemsType: GObject.GType, attributeKey: string): void
    get(key: string): DomElement | null
    getKeys(): string[]

    // Conflicting methods

    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.HashMap

    connect(sigName: "notify::attribute-key", callback: any): number
    on(sigName: "notify::attribute-key", callback: any): number
    once(sigName: "notify::attribute-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-key", ...args: any[]): void
    connect(sigName: "notify::keys-set", callback: any): number
    on(sigName: "notify::keys-set", callback: any): number
    once(sigName: "notify::keys-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HashMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashMap

    static name: string

    // Constructors of GXml-0.20.GXml.HashMap

    constructor(config?: HashMap.ConstructorProperties) 
    constructor() 
    static new(): HashMap
    _init(config?: HashMap.ConstructorProperties): void
}

export module HashPairedMap {

    // Constructor properties interface

    export interface ConstructorProperties extends PairedMap.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface HashPairedMap extends PairedMap {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Own fields of GXml-0.20.GXml.HashPairedMap

    hashtable: Gee.HashMap
    attributePrimaryKey: string
    attributeSecondaryKey: string

    // Owm methods of GXml-0.20.GXml.HashPairedMap

    initializeElementWithKeys(element: Element, itemsType: GObject.GType, attributePrimaryKey: string, attributeSecondaryKey: string): void
    initializeWithKeys(itemsType: GObject.GType, attributePrimaryKey: string, attributeSecondaryKey: string): void
    get(primaryKey: string, secondaryKey: string): DomElement | null
    getPrimaryKeys(): string[]
    getSecondaryKeys(pkey: string): string[]

    // Conflicting methods

    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.HashPairedMap

    connect(sigName: "notify::attribute-primary-key", callback: any): number
    on(sigName: "notify::attribute-primary-key", callback: any): number
    once(sigName: "notify::attribute-primary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: any): number
    on(sigName: "notify::attribute-secondary-key", callback: any): number
    once(sigName: "notify::attribute-secondary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: any): number
    on(sigName: "notify::primary-keys-set", callback: any): number
    once(sigName: "notify::primary-keys-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HashPairedMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashPairedMap

    static name: string

    // Constructors of GXml-0.20.GXml.HashPairedMap

    constructor(config?: HashPairedMap.ConstructorProperties) 
    constructor() 
    static new(): HashPairedMap
    _init(config?: HashPairedMap.ConstructorProperties): void
}

export module HashThreeMap {

    // Constructor properties interface

    export interface ConstructorProperties extends ThreeMap.ConstructorProperties, BaseCollection.ConstructorProperties {
    }

}

export interface HashThreeMap extends ThreeMap {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Own fields of GXml-0.20.GXml.HashThreeMap

    hashtable: Gee.HashMap
    attributePrimaryKey: string
    attributeSecondaryKey: string
    attributeThirdKey: string

    // Owm methods of GXml-0.20.GXml.HashThreeMap

    initializeElementWithKeys(element: Element, itemsType: GObject.GType, attributePrimaryKey: string, attributeSecondaryKey: string, attributeThirdKey: string): void
    initializeWithKeys(itemsType: GObject.GType, attributePrimaryKey: string, attributeSecondaryKey: string, attributeThirdKey: string): void
    get(primaryKey: string, secondaryKey: string, thirdKey: string): DomElement | null
    getPrimaryKeys(): string[]
    getSecondaryKeys(pkey: string): string[]
    getThirdKeys(pkey: string, skey: string): string[]

    // Conflicting methods

    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.HashThreeMap

    connect(sigName: "notify::attribute-primary-key", callback: any): number
    on(sigName: "notify::attribute-primary-key", callback: any): number
    once(sigName: "notify::attribute-primary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-primary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-secondary-key", callback: any): number
    on(sigName: "notify::attribute-secondary-key", callback: any): number
    once(sigName: "notify::attribute-secondary-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-secondary-key", ...args: any[]): void
    connect(sigName: "notify::attribute-third-key", callback: any): number
    on(sigName: "notify::attribute-third-key", callback: any): number
    once(sigName: "notify::attribute-third-key", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attribute-third-key", ...args: any[]): void
    connect(sigName: "notify::primary-keys-set", callback: any): number
    on(sigName: "notify::primary-keys-set", callback: any): number
    once(sigName: "notify::primary-keys-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-keys-set", ...args: any[]): void
    connect(sigName: "notify::nodes-index", callback: any): number
    on(sigName: "notify::nodes-index", callback: any): number
    once(sigName: "notify::nodes-index", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodes-index", ...args: any[]): void
    connect(sigName: "notify::element", callback: any): number
    on(sigName: "notify::element", callback: any): number
    once(sigName: "notify::element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element", ...args: any[]): void
    connect(sigName: "notify::items-name", callback: any): number
    on(sigName: "notify::items-name", callback: any): number
    once(sigName: "notify::items-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-name", ...args: any[]): void
    connect(sigName: "notify::items-type", callback: any): number
    on(sigName: "notify::items-type", callback: any): number
    once(sigName: "notify::items-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::items-type", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HashThreeMap extends BaseCollection {

    // Own properties of GXml-0.20.GXml.HashThreeMap

    static name: string

    // Constructors of GXml-0.20.GXml.HashThreeMap

    constructor(config?: HashThreeMap.ConstructorProperties) 
    constructor() 
    static new(): HashThreeMap
    _init(config?: HashThreeMap.ConstructorProperties): void
}

export module HTMLCollection {

    // Constructor properties interface

    export interface ConstructorProperties extends DomHTMLCollection.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface HTMLCollection extends DomHTMLCollection {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    toArray(): DomElement[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    get(index: number): object | null
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    set(index: number, item: object | null): void
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    add(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    remove(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Class property signals of GXml-0.20.GXml.HTMLCollection

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
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

export class HTMLCollection extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.HTMLCollection

    static name: string

    // Constructors of GXml-0.20.GXml.HTMLCollection

    constructor(config?: HTMLCollection.ConstructorProperties) 
    constructor() 
    static new(): HTMLCollection

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: HTMLCollection.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module HtmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends Document.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.HtmlDocument

        html?: DomElement | null
    }

}

export interface HtmlDocument {

    // Own properties of GXml-0.20.GXml.HtmlDocument

    html: DomElement

    // Conflicting properties

    implementation: any
    url: any
    origin: any
    compatMode: any
    characterSet: any
    contentType: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.HtmlDocument

    getHtml(): DomElement
    setHtml(value: DomElement): void

    // Class property signals of GXml-0.20.GXml.HtmlDocument

    connect(sigName: "notify::html", callback: any): number
    on(sigName: "notify::html", callback: any): number
    once(sigName: "notify::html", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::html", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HtmlDocument extends Document {

    // Own properties of GXml-0.20.GXml.HtmlDocument

    static name: string

    // Constructors of GXml-0.20.GXml.HtmlDocument

    constructor(config?: HtmlDocument.ConstructorProperties) 
    constructor() 
    static new(): HtmlDocument

    // Overloads of new

    static new(): Document
    static new(): Node
    _init(config?: HtmlDocument.ConstructorProperties): void
}

export module HtmlElement {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {
    }

}

export interface HtmlElement {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.HtmlElement

    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class HtmlElement extends Element {

    // Own properties of GXml-0.20.GXml.HtmlElement

    static name: string

    // Constructors of GXml-0.20.GXml.HtmlElement

    constructor(config?: HtmlElement.ConstructorProperties) 
    constructor() 
    static new(): HtmlElement

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: HtmlElement.ConstructorProperties): void
}

export module LXPathObject {

    // Constructor properties interface

    export interface ConstructorProperties extends XPathObject.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface LXPathObject extends XPathObject {

    // Class property signals of GXml-0.20.GXml.LXPathObject

    connect(sigName: "notify::object-type", callback: any): number
    on(sigName: "notify::object-type", callback: any): number
    once(sigName: "notify::object-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::boolean-value", callback: any): number
    on(sigName: "notify::boolean-value", callback: any): number
    once(sigName: "notify::boolean-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::boolean-value", ...args: any[]): void
    connect(sigName: "notify::string-value", callback: any): number
    on(sigName: "notify::string-value", callback: any): number
    once(sigName: "notify::string-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::string-value", ...args: any[]): void
    connect(sigName: "notify::number-value", callback: any): number
    on(sigName: "notify::number-value", callback: any): number
    once(sigName: "notify::number-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::number-value", ...args: any[]): void
    connect(sigName: "notify::nodeset", callback: any): number
    on(sigName: "notify::nodeset", callback: any): number
    once(sigName: "notify::nodeset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nodeset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class LXPathObject extends GObject.Object {

    // Own properties of GXml-0.20.GXml.LXPathObject

    static name: string

    // Constructors of GXml-0.20.GXml.LXPathObject

    constructor(config?: LXPathObject.ConstructorProperties) 
    constructor(document: XDocument, pointer: object | null) 
    static new(document: XDocument, pointer: object | null): LXPathObject
    _init(config?: LXPathObject.ConstructorProperties): void
}

export module Node {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEventTarget.ConstructorProperties, DomNode.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Node extends DomEventTarget, DomNode {

    // Own fields of GXml-0.20.GXml.Node

    localName: string
    prefix: string
    baseUri: any
    nodeValue: string
    parent: DomNode
    nodeType: any
    childNodes: any
    document: DomDocument

    // Class property signals of GXml-0.20.GXml.Node

    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Node extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Node

    static name: string

    // Constructors of GXml-0.20.GXml.Node

    constructor(config?: Node.ConstructorProperties) 
    constructor() 
    static new(): Node
    _init(config?: Node.ConstructorProperties): void
}

export module NodeList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNodeList.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface NodeList extends DomNodeList {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    get(index: number): object | null
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    set(index: number, item: object | null): void
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    add(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    remove(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Class property signals of GXml-0.20.GXml.NodeList

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NodeList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.NodeList

    static name: string

    // Constructors of GXml-0.20.GXml.NodeList

    constructor(config?: NodeList.ConstructorProperties) 
    constructor() 
    static new(): NodeList

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: NodeList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module NodeIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNodeIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface NodeIterator extends DomNodeIterator {

    // Own fields of GXml-0.20.GXml.NodeIterator

    root: any
    referenceNode: any
    pointerBeforeReferenceNode: any
    whatToShow: any

    // Class property signals of GXml-0.20.GXml.NodeIterator

    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::reference-node", callback: any): number
    on(sigName: "notify::reference-node", callback: any): number
    once(sigName: "notify::reference-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reference-node", ...args: any[]): void
    connect(sigName: "notify::pointer-before-reference-node", callback: any): number
    on(sigName: "notify::pointer-before-reference-node", callback: any): number
    once(sigName: "notify::pointer-before-reference-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::pointer-before-reference-node", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: any): number
    on(sigName: "notify::what-to-show", callback: any): number
    once(sigName: "notify::what-to-show", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class NodeIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.NodeIterator

    static name: string

    // Constructors of GXml-0.20.GXml.NodeIterator

    constructor(config?: NodeIterator.ConstructorProperties) 
    constructor(n: DomNode, whatToShow: number) 
    static new(n: DomNode, whatToShow: number): NodeIterator
    _init(config?: NodeIterator.ConstructorProperties): void
}

export module BaseProperty {

    // Constructor properties interface

    export interface ConstructorProperties extends Property.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.BaseProperty

        value?: string | null
    }

}

export interface BaseProperty extends Property {

    // Own properties of GXml-0.20.GXml.BaseProperty

    value: string

    // Owm methods of GXml-0.20.GXml.BaseProperty

    // Has conflict: getValue(): string | null
    // Has conflict: setValue(value: string | null): void
    // Has conflict: validateValue(val: string | null): boolean

    // Own virtual methods of GXml-0.20.GXml.BaseProperty

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.BaseProperty

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class BaseProperty extends GObject.Object {

    // Own properties of GXml-0.20.GXml.BaseProperty

    static name: string

    // Constructors of GXml-0.20.GXml.BaseProperty

    constructor(config?: BaseProperty.ConstructorProperties) 
    _init(config?: BaseProperty.ConstructorProperties): void
}

export module String {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface String {

    // Own fields of GXml-0.20.GXml.String

    value: string

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.String

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class String extends BaseProperty {

    // Own properties of GXml-0.20.GXml.String

    static name: string

    // Constructors of GXml-0.20.GXml.String

    constructor(config?: String.ConstructorProperties) 
    static withString(str: string): String
    constructor() 
    static new(): String
    _init(config?: String.ConstructorProperties): void
}

export module ArrayString {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface ArrayString {

    // Own fields of GXml-0.20.GXml.ArrayString

    value: string
    values: string[]
    valuesLength1: number

    // Owm methods of GXml-0.20.GXml.ArrayString

    getValues(): string[]
    initializeStrings(strs: string[]): void
    isValidValue(): boolean
    select(index: number): void
    search(str: string): boolean

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.ArrayString

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ArrayString extends BaseProperty {

    // Own properties of GXml-0.20.GXml.ArrayString

    static name: string

    // Constructors of GXml-0.20.GXml.ArrayString

    constructor(config?: ArrayString.ConstructorProperties) 
    constructor() 
    static new(): ArrayString
    _init(config?: ArrayString.ConstructorProperties): void
}

export module XsdArrayString {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayString.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdArrayString

        simpleType?: string | null
        source?: Gio.File | null
    }

}

export interface XsdArrayString {

    // Own fields of GXml-0.20.GXml.XsdArrayString

    source: Gio.File
    simpleType: string

    // Owm methods of GXml-0.20.GXml.XsdArrayString

    getSimpleType(): string
    setSimpleType(value: string): void
    getSource(): Gio.File
    setSource(value: Gio.File): void
    load(): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.XsdArrayString

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdArrayString extends ArrayString {

    // Own properties of GXml-0.20.GXml.XsdArrayString

    static name: string

    // Constructors of GXml-0.20.GXml.XsdArrayString

    constructor(config?: XsdArrayString.ConstructorProperties) 
    constructor() 
    static new(): XsdArrayString

    // Overloads of new

    static new(): ArrayString
    _init(config?: XsdArrayString.ConstructorProperties): void
}

export module Double {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Double

        decimals?: number | null
    }

}

export interface Double {

    // Own properties of GXml-0.20.GXml.Double

    decimals: number

    // Own fields of GXml-0.20.GXml.Double

    value: any

    // Owm methods of GXml-0.20.GXml.Double

    getDecimals(): number
    setDecimals(value: number): void
    getDouble(): number
    setDouble(value: number): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Double

    connect(sigName: "notify::decimals", callback: any): number
    on(sigName: "notify::decimals", callback: any): number
    once(sigName: "notify::decimals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decimals", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Double extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Double

    static name: string

    // Constructors of GXml-0.20.GXml.Double

    constructor(config?: Double.ConstructorProperties) 
    constructor() 
    static new(): Double
    _init(config?: Double.ConstructorProperties): void
}

export module Float {

    // Constructor properties interface

    export interface ConstructorProperties extends Double.ConstructorProperties {
    }

}

export interface Float {

    // Conflicting properties

    value: any

    // Owm methods of GXml-0.20.GXml.Float

    getFloat(): number
    setFloat(value: number): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Float

    connect(sigName: "notify::decimals", callback: any): number
    on(sigName: "notify::decimals", callback: any): number
    once(sigName: "notify::decimals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::decimals", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Float extends Double {

    // Own properties of GXml-0.20.GXml.Float

    static name: string

    // Constructors of GXml-0.20.GXml.Float

    constructor(config?: Float.ConstructorProperties) 
    constructor() 
    static new(): Float

    // Overloads of new

    static new(): Double
    _init(config?: Float.ConstructorProperties): void
}

export module Int {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface Int {

    // Own fields of GXml-0.20.GXml.Int

    value: any

    // Owm methods of GXml-0.20.GXml.Int

    getInteger(): number
    setInteger(value: number): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Int

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Int extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Int

    static name: string

    // Constructors of GXml-0.20.GXml.Int

    constructor(config?: Int.ConstructorProperties) 
    constructor() 
    static new(): Int
    _init(config?: Int.ConstructorProperties): void
}

export module Boolean {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface Boolean {

    // Own fields of GXml-0.20.GXml.Boolean

    value: any

    // Owm methods of GXml-0.20.GXml.Boolean

    getBoolean(): boolean
    setBoolean(value: boolean): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Boolean

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Boolean extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Boolean

    static name: string

    // Constructors of GXml-0.20.GXml.Boolean

    constructor(config?: Boolean.ConstructorProperties) 
    constructor() 
    static new(): Boolean
    _init(config?: Boolean.ConstructorProperties): void
}

export module Enum {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.Enum

        useNick?: boolean | null
        camelCase?: boolean | null
        upperCase?: boolean | null
        enumType?: GObject.GType | null
    }

}

export interface Enum {

    // Own properties of GXml-0.20.GXml.Enum

    useNick: boolean
    camelCase: boolean
    upperCase: boolean

    // Own fields of GXml-0.20.GXml.Enum

    value: any
    enumType: GObject.GType
    val: string

    // Owm methods of GXml-0.20.GXml.Enum

    getUseNick(): boolean
    setUseNick(value: boolean): void
    getCamelCase(): boolean
    setCamelCase(value: boolean): void
    getUpperCase(): boolean
    setUpperCase(value: boolean): void
    getEnumType(): GObject.GType
    setEnumType(value: GObject.GType): void
    initializeEnum(enumType: GObject.GType): void
    getEnum(): number
    setEnum(value: number): void
    isValid(): boolean

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Enum

    connect(sigName: "notify::use-nick", callback: any): number
    on(sigName: "notify::use-nick", callback: any): number
    once(sigName: "notify::use-nick", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::use-nick", ...args: any[]): void
    connect(sigName: "notify::camel-case", callback: any): number
    on(sigName: "notify::camel-case", callback: any): number
    once(sigName: "notify::camel-case", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::camel-case", ...args: any[]): void
    connect(sigName: "notify::upper-case", callback: any): number
    on(sigName: "notify::upper-case", callback: any): number
    once(sigName: "notify::upper-case", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::upper-case", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Enum extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Enum

    static name: string

    // Constructors of GXml-0.20.GXml.Enum

    constructor(config?: Enum.ConstructorProperties) 
    constructor() 
    static new(): Enum
    _init(config?: Enum.ConstructorProperties): void
}

export module Date {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {
    }

}

export interface Date {

    // Own fields of GXml-0.20.GXml.Date

    value: any

    // Owm methods of GXml-0.20.GXml.Date

    getDate(): /* result */ GLib.Date
    setDate(date: GLib.Date): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.Date

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Date extends BaseProperty {

    // Own properties of GXml-0.20.GXml.Date

    static name: string

    // Constructors of GXml-0.20.GXml.Date

    constructor(config?: Date.ConstructorProperties) 
    constructor() 
    static new(): Date
    _init(config?: Date.ConstructorProperties): void
}

export module DateTime {

    // Constructor properties interface

    export interface ConstructorProperties extends BaseProperty.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.DateTime

        format?: string | null
    }

}

export interface DateTime {

    // Own properties of GXml-0.20.GXml.DateTime

    format: string

    // Own fields of GXml-0.20.GXml.DateTime

    value: any

    // Owm methods of GXml-0.20.GXml.DateTime

    getFormat(): string
    setFormat(value: string): void
    getDatetime(): GLib.DateTime
    setDatetime(dt: GLib.DateTime): void

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.DateTime

    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DateTime extends BaseProperty {

    // Own properties of GXml-0.20.GXml.DateTime

    static name: string

    // Constructors of GXml-0.20.GXml.DateTime

    constructor(config?: DateTime.ConstructorProperties) 
    constructor() 
    static new(): DateTime
    _init(config?: DateTime.ConstructorProperties): void
}

export module Range {

    // Constructor properties interface

    export interface ConstructorProperties extends DomRange.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Range extends DomRange {

    // Own fields of GXml-0.20.GXml.Range

    document: DomDocument
    startContainer: any
    startOffset: any
    endContainer: any
    endOffset: any
    // Has conflict: collapse: boolean
    commonAncestorContainer: any

    // Class property signals of GXml-0.20.GXml.Range

    connect(sigName: "notify::start-container", callback: any): number
    on(sigName: "notify::start-container", callback: any): number
    once(sigName: "notify::start-container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-container", ...args: any[]): void
    connect(sigName: "notify::start-offset", callback: any): number
    on(sigName: "notify::start-offset", callback: any): number
    once(sigName: "notify::start-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::start-offset", ...args: any[]): void
    connect(sigName: "notify::end-container", callback: any): number
    on(sigName: "notify::end-container", callback: any): number
    once(sigName: "notify::end-container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-container", ...args: any[]): void
    connect(sigName: "notify::end-offset", callback: any): number
    on(sigName: "notify::end-offset", callback: any): number
    once(sigName: "notify::end-offset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::end-offset", ...args: any[]): void
    connect(sigName: "notify::collapsed", callback: any): number
    on(sigName: "notify::collapsed", callback: any): number
    once(sigName: "notify::collapsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::collapsed", ...args: any[]): void
    connect(sigName: "notify::common-ancestor-container", callback: any): number
    on(sigName: "notify::common-ancestor-container", callback: any): number
    once(sigName: "notify::common-ancestor-container", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::common-ancestor-container", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Range extends GObject.Object {

    // Own properties of GXml-0.20.GXml.Range

    static name: string

    // Constructors of GXml-0.20.GXml.Range

    constructor(config?: Range.ConstructorProperties) 
    constructor(doc: DomDocument) 
    static new(doc: DomDocument): Range
    _init(config?: Range.ConstructorProperties): void
}

export module SettableTokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomSettableTokenList.ConstructorProperties, TokenList.ConstructorProperties {
    }

}

export interface SettableTokenList extends DomSettableTokenList {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Conflicting methods

    contains(token: string): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    get(index: number): object | null
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    set(index: number, item: object | null): void
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Class property signals of GXml-0.20.GXml.SettableTokenList

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class SettableTokenList extends TokenList {

    // Own properties of GXml-0.20.GXml.SettableTokenList

    static name: string

    // Constructors of GXml-0.20.GXml.SettableTokenList

    constructor(config?: SettableTokenList.ConstructorProperties) 
    constructor(e: DomElement, attr: string | null) 
    static new(e: DomElement, attr: string | null): SettableTokenList

    // Overloads of new

    static new(e: DomElement, attr: string | null): TokenList
    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: SettableTokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module StringRef {

    // Constructor properties interface

    export interface ConstructorProperties extends Property.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface StringRef extends Property {

    // Class property signals of GXml-0.20.GXml.StringRef

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class StringRef extends GObject.Object {

    // Own properties of GXml-0.20.GXml.StringRef

    static name: string

    // Constructors of GXml-0.20.GXml.StringRef

    constructor(config?: StringRef.ConstructorProperties) 
    constructor(obj: Object, name: string) 
    static new(obj: Object, name: string): StringRef
    _init(config?: StringRef.ConstructorProperties): void
}

export module CharacterData {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNonDocumentTypeChildNode.ConstructorProperties, DomChildNode.ConstructorProperties, DomCharacterData.ConstructorProperties, Node.ConstructorProperties {
    }

}

export interface CharacterData extends DomNonDocumentTypeChildNode, DomChildNode, DomCharacterData {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.CharacterData

    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CharacterData extends Node {

    // Own properties of GXml-0.20.GXml.CharacterData

    static name: string

    // Constructors of GXml-0.20.GXml.CharacterData

    constructor(config?: CharacterData.ConstructorProperties) 
    constructor() 
    static new(): CharacterData

    // Overloads of new

    static new(): Node
    _init(config?: CharacterData.ConstructorProperties): void
}

export module Text {

    // Constructor properties interface

    export interface ConstructorProperties extends DomText.ConstructorProperties, CharacterData.ConstructorProperties {
    }

}

export interface Text extends DomText {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.Text

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Text extends CharacterData {

    // Own properties of GXml-0.20.GXml.Text

    static name: string

    // Constructors of GXml-0.20.GXml.Text

    constructor(config?: Text.ConstructorProperties) 
    constructor(doc: DomDocument, data: string) 
    static new(doc: DomDocument, data: string): Text

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: Text.ConstructorProperties): void
}

export module ProcessingInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends DomProcessingInstruction.ConstructorProperties, CharacterData.ConstructorProperties {
    }

}

export interface ProcessingInstruction extends DomProcessingInstruction {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.ProcessingInstruction

    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ProcessingInstruction extends CharacterData {

    // Own properties of GXml-0.20.GXml.ProcessingInstruction

    static name: string

    // Constructors of GXml-0.20.GXml.ProcessingInstruction

    constructor(config?: ProcessingInstruction.ConstructorProperties) 
    constructor(doc: DomDocument, target: string, data: string) 
    static new(doc: DomDocument, target: string, data: string): ProcessingInstruction

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: ProcessingInstruction.ConstructorProperties): void
}

export module Comment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomComment.ConstructorProperties, CharacterData.ConstructorProperties {
    }

}

export interface Comment extends DomComment {

    // Conflicting properties

    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.Comment

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Comment extends CharacterData {

    // Own properties of GXml-0.20.GXml.Comment

    static name: string

    // Constructors of GXml-0.20.GXml.Comment

    constructor(config?: Comment.ConstructorProperties) 
    constructor(doc: DomDocument, data: string) 
    static new(doc: DomDocument, data: string): Comment

    // Overloads of new

    static new(): CharacterData
    static new(): Node
    _init(config?: Comment.ConstructorProperties): void
}

export module TokenList {

    // Constructor properties interface

    export interface ConstructorProperties extends DomTokenList.ConstructorProperties, Gee.ArrayList.ConstructorProperties {
    }

}

export interface TokenList extends DomTokenList {

    // Conflicting properties

    readOnlyView: any
    size: any

    // Own fields of GXml-0.20.GXml.TokenList

    element: DomElement
    attr: string

    // Owm methods of GXml-0.20.GXml.TokenList

    update(): void

    // Conflicting methods

    contains(token: string): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    add(tokens: string[]): void

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    remove(tokens: string[]): void

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    get(index: number): object | null
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    set(index: number, item: object | null): void
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    indexOf(item: object | null): number
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    removeAt(index: number): object | null
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    clear(): void
    clear(): void

    // Overloads of clear

    clear(): void
    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    getSize(): number
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getReadOnly(): boolean
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Class property signals of GXml-0.20.GXml.TokenList

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TokenList extends Gee.ArrayList {

    // Own properties of GXml-0.20.GXml.TokenList

    static name: string

    // Constructors of GXml-0.20.GXml.TokenList

    constructor(config?: TokenList.ConstructorProperties) 
    constructor(e: DomElement, attr: string | null) 
    static new(e: DomElement, attr: string | null): TokenList

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: TokenList.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module TreeWalker {

    // Constructor properties interface

    export interface ConstructorProperties extends DomTreeWalker.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface TreeWalker extends DomTreeWalker {

    // Own fields of GXml-0.20.GXml.TreeWalker

    root: any
    whatToShow: any
    currentNode: any

    // Class property signals of GXml-0.20.GXml.TreeWalker

    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::what-to-show", callback: any): number
    on(sigName: "notify::what-to-show", callback: any): number
    once(sigName: "notify::what-to-show", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::what-to-show", ...args: any[]): void
    connect(sigName: "notify::current-node", callback: any): number
    on(sigName: "notify::current-node", callback: any): number
    once(sigName: "notify::current-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::current-node", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TreeWalker extends GObject.Object {

    // Own properties of GXml-0.20.GXml.TreeWalker

    static name: string

    // Constructors of GXml-0.20.GXml.TreeWalker

    constructor(config?: TreeWalker.ConstructorProperties) 
    constructor(root: DomNode, w: number) 
    static new(root: DomNode, w: number): TreeWalker
    _init(config?: TreeWalker.ConstructorProperties): void
}

export module XAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends DomAttr.ConstructorProperties, XNode.ConstructorProperties {
    }

}

export interface XAttribute extends DomAttr {

    // Conflicting properties

    baseUri: any

    // Conflicting methods

    getName(): string
    getName(): string
    getValue(): string
    getValue(): string
    setValue(value: string): void
    setValue(value: string): void

    // Class property signals of GXml-0.20.GXml.XAttribute

    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XAttribute extends XNode {

    // Own properties of GXml-0.20.GXml.XAttribute

    static name: string

    // Constructors of GXml-0.20.GXml.XAttribute

    constructor(config?: XAttribute.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XAttribute
    _init(config?: XAttribute.ConstructorProperties): void
}

export module XCharacterData {

    // Constructor properties interface

    export interface ConstructorProperties extends DomCharacterData.ConstructorProperties, XNonDocumentChildNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XCharacterData

        str?: string | null
    }

}

export interface XCharacterData extends DomCharacterData {

    // Own properties of GXml-0.20.GXml.XCharacterData

    str: string

    // Conflicting properties

    baseUri: any

    // Owm methods of GXml-0.20.GXml.XCharacterData

    getStr(): string
    setStr(value: string): void

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.XCharacterData

    connect(sigName: "notify::str", callback: any): number
    on(sigName: "notify::str", callback: any): number
    once(sigName: "notify::str", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XCharacterData extends XNonDocumentChildNode {

    // Own properties of GXml-0.20.GXml.XCharacterData

    static name: string

    // Constructors of GXml-0.20.GXml.XCharacterData

    constructor(config?: XCharacterData.ConstructorProperties) 
    constructor() 
    static new(): XCharacterData

    // Overloads of new

    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XCharacterData.ConstructorProperties): void
}

export module XChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends DomChildNode.ConstructorProperties, XNode.ConstructorProperties {
    }

}

export interface XChildNode extends DomChildNode {

    // Conflicting properties

    baseUri: any

    // Class property signals of GXml-0.20.GXml.XChildNode

    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XChildNode extends XNode {

    // Own properties of GXml-0.20.GXml.XChildNode

    static name: string

    // Constructors of GXml-0.20.GXml.XChildNode

    constructor(config?: XChildNode.ConstructorProperties) 
    constructor() 
    static new(): XChildNode
    _init(config?: XChildNode.ConstructorProperties): void
}

export module XNonDocumentChildNode {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNonDocumentTypeChildNode.ConstructorProperties, XChildNode.ConstructorProperties {
    }

}

export interface XNonDocumentChildNode extends DomNonDocumentTypeChildNode {

    // Conflicting properties

    baseUri: any

    // Class property signals of GXml-0.20.GXml.XNonDocumentChildNode

    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XNonDocumentChildNode extends XChildNode {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNode

    static name: string

    // Constructors of GXml-0.20.GXml.XNonDocumentChildNode

    constructor(config?: XNonDocumentChildNode.ConstructorProperties) 
    constructor() 
    static new(): XNonDocumentChildNode

    // Overloads of new

    static new(): XChildNode
    _init(config?: XNonDocumentChildNode.ConstructorProperties): void
}

export module XComment {

    // Constructor properties interface

    export interface ConstructorProperties extends DomComment.ConstructorProperties, XCharacterData.ConstructorProperties {
    }

}

export interface XComment extends DomComment {

    // Conflicting properties

    baseUri: any

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.XComment

    connect(sigName: "notify::str", callback: any): number
    on(sigName: "notify::str", callback: any): number
    once(sigName: "notify::str", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XComment extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XComment

    static name: string

    // Constructors of GXml-0.20.GXml.XComment

    constructor(config?: XComment.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XComment

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XComment.ConstructorProperties): void
}

export module XDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomNonElementParentNode.ConstructorProperties, DomDocument.ConstructorProperties, DomXMLDocument.ConstructorProperties, XPathContext.ConstructorProperties, XNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XDocument

        indent?: boolean | null
        nsTop?: boolean | null
        prefixDefaultNs?: boolean | null
        backup?: boolean | null
        file?: Gio.File | null
    }

}

export interface XDocument extends DomParentNode, DomNonElementParentNode, DomDocument, DomXMLDocument, XPathContext {

    // Own properties of GXml-0.20.GXml.XDocument

    indent: boolean
    nsTop: boolean
    prefixDefaultNs: boolean
    backup: boolean
    file: Gio.File
    readonly root: DomNode

    // Conflicting properties

    baseUri: any

    // Own fields of GXml-0.20.GXml.XDocument

    doc: any
    buffer: any
    parser: Parser
    implementation: any
    url: any
    origin: any
    compatMode: any
    characterSet: any
    contentType: any
    constructor_: DomEvent

    // Owm methods of GXml-0.20.GXml.XDocument

    getIndent(): boolean
    setIndent(value: boolean): void
    getNsTop(): boolean
    setNsTop(value: boolean): void
    getPrefixDefaultNs(): boolean
    setPrefixDefaultNs(value: boolean): void
    getBackup(): boolean
    setBackup(value: boolean): void
    getFile(): Gio.File
    setFile(value: Gio.File): void
    getRoot(): DomNode
    createPi(target: string, data: string): DomNode
    createText(text: string): DomNode
    libxmlToString(): string
    // Has conflict: save(cancellable: Gio.Cancellable | null): boolean
    // Has conflict: saveAs(f: Gio.File, cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of GXml-0.20.GXml.XDocument

    save(cancellable: Gio.Cancellable | null): boolean
    saveAs(f: Gio.File, cancellable: Gio.Cancellable | null): boolean

    // Class property signals of GXml-0.20.GXml.XDocument

    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::ns-top", callback: any): number
    on(sigName: "notify::ns-top", callback: any): number
    once(sigName: "notify::ns-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ns-top", ...args: any[]): void
    connect(sigName: "notify::prefix-default-ns", callback: any): number
    on(sigName: "notify::prefix-default-ns", callback: any): number
    once(sigName: "notify::prefix-default-ns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix-default-ns", ...args: any[]): void
    connect(sigName: "notify::backup", callback: any): number
    on(sigName: "notify::backup", callback: any): number
    once(sigName: "notify::backup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: any): number
    on(sigName: "notify::implementation", callback: any): number
    once(sigName: "notify::implementation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: any): number
    on(sigName: "notify::document-uri", callback: any): number
    once(sigName: "notify::document-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: any): number
    on(sigName: "notify::compat-mode", callback: any): number
    once(sigName: "notify::compat-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: any): number
    on(sigName: "notify::character-set", callback: any): number
    once(sigName: "notify::character-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: any): number
    on(sigName: "notify::doctype", callback: any): number
    once(sigName: "notify::doctype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: any): number
    on(sigName: "notify::document-element", callback: any): number
    once(sigName: "notify::document-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XDocument extends XNode {

    // Own properties of GXml-0.20.GXml.XDocument

    static name: string

    // Constructors of GXml-0.20.GXml.XDocument

    constructor(config?: XDocument.ConstructorProperties) 
    constructor() 
    static new(): XDocument
    static fromPath(path: string, options: number): XDocument
    static fromUri(uri: string, options: number): XDocument
    static fromFile(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XDocument
    static fromString(str: string, options: number): XDocument
    static fromStream(istream: Gio.InputStream): XDocument
    static fromDoc(doc: libxml2.Doc): XDocument
    _init(config?: XDocument.ConstructorProperties): void
}

export module XElement {

    // Constructor properties interface

    export interface ConstructorProperties extends DomParentNode.ConstructorProperties, DomElement.ConstructorProperties, XPathContext.ConstructorProperties, XNonDocumentChildNode.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XElement

        content?: string | null
    }

}

export interface XElement extends DomParentNode, DomElement, XPathContext {

    // Own properties of GXml-0.20.GXml.XElement

    content: string

    // Conflicting properties

    baseUri: any

    // Owm methods of GXml-0.20.GXml.XElement

    setAttr(aname: string, avalue: string): void
    getAttr(name: string): DomNode | null
    setNsAttr(ns: string, aname: string, value: string): void
    getNsAttr(name: string, uri: string): DomNode | null
    normalize(): void

    // Overloads of normalize

    normalize(): void
    getContent(): string
    setContent(value: string): void
    removeAttr(name: string): void
    removeNsAttr(name: string, uri: string): void

    // Class property signals of GXml-0.20.GXml.XElement

    connect(sigName: "notify::content", callback: any): number
    on(sigName: "notify::content", callback: any): number
    once(sigName: "notify::content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: "notify::namespace-uri", callback: any): number
    on(sigName: "notify::namespace-uri", callback: any): number
    once(sigName: "notify::namespace-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::namespace-uri", ...args: any[]): void
    connect(sigName: "notify::prefix", callback: any): number
    on(sigName: "notify::prefix", callback: any): number
    once(sigName: "notify::prefix", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix", ...args: any[]): void
    connect(sigName: "notify::local-name", callback: any): number
    on(sigName: "notify::local-name", callback: any): number
    once(sigName: "notify::local-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::local-name", ...args: any[]): void
    connect(sigName: "notify::tag-name", callback: any): number
    on(sigName: "notify::tag-name", callback: any): number
    once(sigName: "notify::tag-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::tag-name", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::class-name", callback: any): number
    on(sigName: "notify::class-name", callback: any): number
    once(sigName: "notify::class-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-name", ...args: any[]): void
    connect(sigName: "notify::class-list", callback: any): number
    on(sigName: "notify::class-list", callback: any): number
    once(sigName: "notify::class-list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::class-list", ...args: any[]): void
    connect(sigName: "notify::attributes", callback: any): number
    on(sigName: "notify::attributes", callback: any): number
    once(sigName: "notify::attributes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attributes", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XElement extends XNonDocumentChildNode {

    // Own properties of GXml-0.20.GXml.XElement

    static name: string

    // Constructors of GXml-0.20.GXml.XElement

    constructor(config?: XElement.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XElement

    // Overloads of new

    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XElement.ConstructorProperties): void
}

export module XHashMapAttr {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNamedNodeMap.ConstructorProperties, Gee.AbstractMap.ConstructorProperties {
    }

}

export interface XHashMapAttr extends DomNamedNodeMap {

    // Conflicting methods

    hasKey(key: object | null): boolean

    // Overloads of hasKey

    hasKey(key: object | null): boolean
    hasKey(key: object | null): boolean
    has(key: object | null, value: object | null): boolean

    // Overloads of has

    has(key: object | null, value: object | null): boolean
    has(key: object | null, value: object | null): boolean
    get(key: object | null): object | null

    // Overloads of get

    get(key: object | null): object | null
    get(key: object | null): object | null
    set(key: object | null, value: object | null): void

    // Overloads of set

    set(key: object | null, value: object | null): void
    set(key: object | null, value: object | null): void
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]

    // Overloads of unset

    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    unset(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    mapIterator(): Gee.MapIterator

    // Overloads of mapIterator

    mapIterator(): Gee.MapIterator
    mapIterator(): Gee.MapIterator
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    getKeys(): Gee.Set

    // Overloads of getKeys

    getKeys(): Gee.Set
    getKeys(): Gee.Set
    getValues(): Gee.Collection

    // Overloads of getValues

    getValues(): Gee.Collection
    getValues(): Gee.Collection
    getEntries(): Gee.Set

    // Overloads of getEntries

    getEntries(): Gee.Set
    getEntries(): Gee.Set
    getReadOnlyView(): Gee.Map

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Map
    getReadOnlyView(): Gee.Map
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Class property signals of GXml-0.20.GXml.XHashMapAttr

    connect(sigName: "notify::k-type", callback: any): number
    on(sigName: "notify::k-type", callback: any): number
    once(sigName: "notify::k-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: any): number
    on(sigName: "notify::k-dup-func", callback: any): number
    once(sigName: "notify::k-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: any): number
    on(sigName: "notify::k-destroy-func", callback: any): number
    once(sigName: "notify::k-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: any): number
    on(sigName: "notify::v-type", callback: any): number
    once(sigName: "notify::v-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: any): number
    on(sigName: "notify::v-dup-func", callback: any): number
    once(sigName: "notify::v-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: any): number
    on(sigName: "notify::v-destroy-func", callback: any): number
    once(sigName: "notify::v-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::keys", callback: any): number
    on(sigName: "notify::keys", callback: any): number
    once(sigName: "notify::keys", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::keys", ...args: any[]): void
    connect(sigName: "notify::values", callback: any): number
    on(sigName: "notify::values", callback: any): number
    once(sigName: "notify::values", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::values", ...args: any[]): void
    connect(sigName: "notify::entries", callback: any): number
    on(sigName: "notify::entries", callback: any): number
    once(sigName: "notify::entries", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::entries", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XHashMapAttr extends Gee.AbstractMap {

    // Own properties of GXml-0.20.GXml.XHashMapAttr

    static name: string

    // Constructors of GXml-0.20.GXml.XHashMapAttr

    constructor(config?: XHashMapAttr.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XHashMapAttr
    _init(config?: XHashMapAttr.ConstructorProperties): void
}

export module XHashMapAttrEntry {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.MapEntry.ConstructorProperties {
    }

}

export interface XHashMapAttrEntry {

    // Class property signals of GXml-0.20.GXml.XHashMapAttrEntry

    connect(sigName: "notify::k-type", callback: any): number
    on(sigName: "notify::k-type", callback: any): number
    once(sigName: "notify::k-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-type", ...args: any[]): void
    connect(sigName: "notify::k-dup-func", callback: any): number
    on(sigName: "notify::k-dup-func", callback: any): number
    once(sigName: "notify::k-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-dup-func", ...args: any[]): void
    connect(sigName: "notify::k-destroy-func", callback: any): number
    on(sigName: "notify::k-destroy-func", callback: any): number
    once(sigName: "notify::k-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::k-destroy-func", ...args: any[]): void
    connect(sigName: "notify::v-type", callback: any): number
    on(sigName: "notify::v-type", callback: any): number
    once(sigName: "notify::v-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-type", ...args: any[]): void
    connect(sigName: "notify::v-dup-func", callback: any): number
    on(sigName: "notify::v-dup-func", callback: any): number
    once(sigName: "notify::v-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-dup-func", ...args: any[]): void
    connect(sigName: "notify::v-destroy-func", callback: any): number
    on(sigName: "notify::v-destroy-func", callback: any): number
    once(sigName: "notify::v-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::v-destroy-func", ...args: any[]): void
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

export class XHashMapAttrEntry extends Gee.MapEntry {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntry

    static name: string

    // Constructors of GXml-0.20.GXml.XHashMapAttrEntry

    constructor(config?: XHashMapAttrEntry.ConstructorProperties) 
    constructor(doc: XDocument, attr: object | null) 
    static new(doc: XDocument, attr: object | null): XHashMapAttrEntry
    _init(config?: XHashMapAttrEntry.ConstructorProperties): void
}

export module XHashMapAttrIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.MapIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface XHashMapAttrIterator extends Gee.MapIterator {

    // Class property signals of GXml-0.20.GXml.XHashMapAttrIterator

    connect(sigName: "notify::valid", callback: any): number
    on(sigName: "notify::valid", callback: any): number
    once(sigName: "notify::valid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valid", ...args: any[]): void
    connect(sigName: "notify::mutable", callback: any): number
    on(sigName: "notify::mutable", callback: any): number
    once(sigName: "notify::mutable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mutable", ...args: any[]): void
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

export class XHashMapAttrIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIterator

    static name: string

    // Constructors of GXml-0.20.GXml.XHashMapAttrIterator

    constructor(config?: XHashMapAttrIterator.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XHashMapAttrIterator
    _init(config?: XHashMapAttrIterator.ConstructorProperties): void
}

export module XHtmlDocument {

    // Constructor properties interface

    export interface ConstructorProperties extends DomHtmlDocument.ConstructorProperties, XDocument.ConstructorProperties {
    }

}

export interface XHtmlDocument extends DomHtmlDocument {

    // Conflicting properties

    implementation: any
    url: any
    origin: any
    compatMode: any
    characterSet: any
    contentType: any
    baseUri: any
    doc: any

    // Conflicting methods

    readFromString(str: string): void

    // Overloads of readFromString

    readFromString(str: string, cancellable: Gio.Cancellable | null): void
    readFromString(str: string, cancellable: Gio.Cancellable | null): void

    // Class property signals of GXml-0.20.GXml.XHtmlDocument

    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::ns-top", callback: any): number
    on(sigName: "notify::ns-top", callback: any): number
    once(sigName: "notify::ns-top", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ns-top", ...args: any[]): void
    connect(sigName: "notify::prefix-default-ns", callback: any): number
    on(sigName: "notify::prefix-default-ns", callback: any): number
    once(sigName: "notify::prefix-default-ns", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::prefix-default-ns", ...args: any[]): void
    connect(sigName: "notify::backup", callback: any): number
    on(sigName: "notify::backup", callback: any): number
    once(sigName: "notify::backup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::file", callback: any): number
    on(sigName: "notify::file", callback: any): number
    once(sigName: "notify::file", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file", ...args: any[]): void
    connect(sigName: "notify::root", callback: any): number
    on(sigName: "notify::root", callback: any): number
    once(sigName: "notify::root", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::root", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::implementation", callback: any): number
    on(sigName: "notify::implementation", callback: any): number
    once(sigName: "notify::implementation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::implementation", ...args: any[]): void
    connect(sigName: "notify::url", callback: any): number
    on(sigName: "notify::url", callback: any): number
    once(sigName: "notify::url", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::url", ...args: any[]): void
    connect(sigName: "notify::document-uri", callback: any): number
    on(sigName: "notify::document-uri", callback: any): number
    once(sigName: "notify::document-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-uri", ...args: any[]): void
    connect(sigName: "notify::origin", callback: any): number
    on(sigName: "notify::origin", callback: any): number
    once(sigName: "notify::origin", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::origin", ...args: any[]): void
    connect(sigName: "notify::compat-mode", callback: any): number
    on(sigName: "notify::compat-mode", callback: any): number
    once(sigName: "notify::compat-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::compat-mode", ...args: any[]): void
    connect(sigName: "notify::character-set", callback: any): number
    on(sigName: "notify::character-set", callback: any): number
    once(sigName: "notify::character-set", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::character-set", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::doctype", callback: any): number
    on(sigName: "notify::doctype", callback: any): number
    once(sigName: "notify::doctype", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::doctype", ...args: any[]): void
    connect(sigName: "notify::document-element", callback: any): number
    on(sigName: "notify::document-element", callback: any): number
    once(sigName: "notify::document-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document-element", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::children", callback: any): number
    on(sigName: "notify::children", callback: any): number
    once(sigName: "notify::children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children", ...args: any[]): void
    connect(sigName: "notify::first-element-child", callback: any): number
    on(sigName: "notify::first-element-child", callback: any): number
    once(sigName: "notify::first-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-element-child", ...args: any[]): void
    connect(sigName: "notify::last-element-child", callback: any): number
    on(sigName: "notify::last-element-child", callback: any): number
    once(sigName: "notify::last-element-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-element-child", ...args: any[]): void
    connect(sigName: "notify::child-element-count", callback: any): number
    on(sigName: "notify::child-element-count", callback: any): number
    once(sigName: "notify::child-element-count", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-element-count", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XHtmlDocument extends XDocument {

    // Own properties of GXml-0.20.GXml.XHtmlDocument

    static name: string

    // Constructors of GXml-0.20.GXml.XHtmlDocument

    constructor(config?: XHtmlDocument.ConstructorProperties) 
    static fromPath(path: string, options: number): XHtmlDocument

    // Overloads of fromPath

    static fromPath(path: string, options: number): XDocument
    static fromUri(uri: string, options: number): XHtmlDocument

    // Overloads of fromUri

    static fromUri(uri: string, options: number): XDocument
    static fromFile(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XHtmlDocument

    // Overloads of fromFile

    static fromFile(file: Gio.File, options: number, cancel: Gio.Cancellable | null): XDocument
    static fromString(html: string, options: number): XHtmlDocument

    // Overloads of fromString

    static fromString(str: string, options: number): XDocument
    static fromStringContext(html: string, options: number): XHtmlDocument
    static fromStringDoc(html: string, options: number): XHtmlDocument
    constructor() 
    static new(): XHtmlDocument

    // Overloads of new

    static new(): XDocument
    _init(config?: XHtmlDocument.ConstructorProperties): void
    static getDefaultOptions(): number
}

export module XListChildren {

    // Constructor properties interface

    export interface ConstructorProperties extends DomNodeList.ConstructorProperties, DomHTMLCollection.ConstructorProperties, Gee.AbstractBidirList.ConstructorProperties {
    }

}

export interface XListChildren extends DomNodeList, DomHTMLCollection {

    // Conflicting properties

    readOnlyView: any

    // Conflicting methods

    item(index: number): DomNode | null
    item(index: number): DomElement | null
    getLength(): number
    getLength(): number
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.BidirList
    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.BidirList

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.List
    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.List

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection

    // Overloads of getReadOnlyView

    getReadOnlyView(): Gee.Collection
    getReadOnlyView(): Gee.Collection
    listIterator(): Gee.ListIterator

    // Overloads of listIterator

    listIterator(): Gee.ListIterator
    listIterator(): Gee.ListIterator
    get(index: number): object | null

    // Overloads of get

    get(index: number): object | null
    get(index: number): object | null
    set(index: number, item: object | null): void

    // Overloads of set

    set(index: number, item: object | null): void
    set(index: number, item: object | null): void
    indexOf(item: object | null): number

    // Overloads of indexOf

    indexOf(item: object | null): number
    indexOf(item: object | null): number
    insert(index: number, item: object | null): void

    // Overloads of insert

    insert(index: number, item: object | null): void
    insert(index: number, item: object | null): void
    removeAt(index: number): object | null

    // Overloads of removeAt

    removeAt(index: number): object | null
    removeAt(index: number): object | null
    slice(start: number, stop: number): Gee.List | null

    // Overloads of slice

    slice(start: number, stop: number): Gee.List | null
    slice(start: number, stop: number): Gee.List | null
    contains(item: object | null): boolean

    // Overloads of contains

    contains(item: object | null): boolean
    contains(item: object | null): boolean
    add(item: object | null): boolean

    // Overloads of add

    add(item: object | null): boolean
    add(item: object | null): boolean
    remove(item: object | null): boolean

    // Overloads of remove

    remove(item: object | null): boolean
    remove(item: object | null): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    toArray(): DomElement[]

    // Overloads of toArray

    toArray(): object[]
    toArray(): object[]
    getSize(): number

    // Overloads of getSize

    getSize(): number
    getSize(): number
    getReadOnly(): boolean

    // Overloads of getReadOnly

    getReadOnly(): boolean
    getReadOnly(): boolean
    iterator(): Gee.Iterator

    // Overloads of iterator

    iterator(): Gee.Iterator
    iterator(): Gee.Iterator
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void

    // Overloads of reserved0

    reserved0(): void
    reserved0(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void

    // Overloads of reserved1

    reserved1(): void
    reserved1(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void

    // Overloads of reserved2

    reserved2(): void
    reserved2(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void

    // Overloads of reserved3

    reserved3(): void
    reserved3(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void

    // Overloads of reserved4

    reserved4(): void
    reserved4(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void

    // Overloads of reserved5

    reserved5(): void
    reserved5(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void

    // Overloads of reserved6

    reserved6(): void
    reserved6(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void

    // Overloads of reserved7

    reserved7(): void
    reserved7(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void

    // Overloads of reserved8

    reserved8(): void
    reserved8(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Overloads of reserved9

    reserved9(): void
    reserved9(): void

    // Class property signals of GXml-0.20.GXml.XListChildren

    connect(sigName: "notify::g-type", callback: any): number
    on(sigName: "notify::g-type", callback: any): number
    once(sigName: "notify::g-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-type", ...args: any[]): void
    connect(sigName: "notify::g-dup-func", callback: any): number
    on(sigName: "notify::g-dup-func", callback: any): number
    once(sigName: "notify::g-dup-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-dup-func", ...args: any[]): void
    connect(sigName: "notify::g-destroy-func", callback: any): number
    on(sigName: "notify::g-destroy-func", callback: any): number
    once(sigName: "notify::g-destroy-func", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::g-destroy-func", ...args: any[]): void
    connect(sigName: "notify::read-only-view", callback: any): number
    on(sigName: "notify::read-only-view", callback: any): number
    once(sigName: "notify::read-only-view", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only-view", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::read-only", callback: any): number
    on(sigName: "notify::read-only", callback: any): number
    once(sigName: "notify::read-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-only", ...args: any[]): void
    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XListChildren extends Gee.AbstractBidirList {

    // Own properties of GXml-0.20.GXml.XListChildren

    static name: string

    // Constructors of GXml-0.20.GXml.XListChildren

    constructor(config?: XListChildren.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XListChildren
    _init(config?: XListChildren.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module XListChildrenIterator {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.Traversable.ConstructorProperties, Gee.Iterator.ConstructorProperties, Gee.BidirIterator.ConstructorProperties, Gee.ListIterator.ConstructorProperties, Gee.BidirListIterator.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface XListChildrenIterator extends Gee.Traversable, Gee.Iterator, Gee.BidirIterator, Gee.ListIterator, Gee.BidirListIterator {

    // Class property signals of GXml-0.20.GXml.XListChildrenIterator

    connect(sigName: "notify::valid", callback: any): number
    on(sigName: "notify::valid", callback: any): number
    once(sigName: "notify::valid", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::valid", ...args: any[]): void
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

export class XListChildrenIterator extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XListChildrenIterator

    static name: string

    // Constructors of GXml-0.20.GXml.XListChildrenIterator

    constructor(config?: XListChildrenIterator.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XListChildrenIterator
    _init(config?: XListChildrenIterator.ConstructorProperties): void
}

export module XNode {

    // Constructor properties interface

    export interface ConstructorProperties extends DomEventTarget.ConstructorProperties, DomNode.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XNode

        value?: string | null
    }

}

export interface XNode extends DomEventTarget, DomNode {

    // Own properties of GXml-0.20.GXml.XNode

    readonly attrs: Gee.Map
    readonly childrenNodes: Gee.BidirList
    readonly document: DomDocument
    readonly parent: DomNode
    readonly typeNode: NodeType
    readonly name: string
    value: string

    // Own fields of GXml-0.20.GXml.XNode

    doc: XDocument
    node: object | null
    ownedNode: boolean
    baseUri: any

    // Owm methods of GXml-0.20.GXml.XNode

    // Has conflict: setNamespace(uri: string, prefix: string | null): boolean
    // Has conflict: getAttrs(): Gee.Map
    // Has conflict: getChildrenNodes(): Gee.BidirList
    // Has conflict: getDocument(): DomDocument
    // Has conflict: getParent(): DomNode
    // Has conflict: getTypeNode(): NodeType
    // Has conflict: getName(): string
    // Has conflict: getValue(): string
    // Has conflict: setValue(value: string): void
    // Has conflict: toString(): string
    getInternalNode(): object | null
    cloneNode(deep: boolean): DomNode

    // Own virtual methods of GXml-0.20.GXml.XNode

    setNamespace(uri: string, prefix: string | null): boolean
    getAttrs(): Gee.Map
    getChildrenNodes(): Gee.BidirList
    getDocument(): DomDocument
    getParent(): DomNode
    getTypeNode(): NodeType
    getName(): string
    getValue(): string
    setValue(value: string): void
    toString(): string

    // Class property signals of GXml-0.20.GXml.XNode

    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XNode extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XNode

    static name: string

    // Constructors of GXml-0.20.GXml.XNode

    constructor(config?: XNode.ConstructorProperties) 
    _init(config?: XNode.ConstructorProperties): void
    static toGnode(doc: XDocument, node: object | null, takeNode: boolean): DomNode
}

export module XParser {

    // Constructor properties interface

    export interface ConstructorProperties extends Parser.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface XParser extends Parser {

    // Owm methods of GXml-0.20.GXml.XParser

    readNode(node: DomNode): void
    readChildNodesStreamAsync(istream: Gio.InputStream, callback: Gio.AsyncReadyCallback | null): void
    readChildNodesStreamFinish(res: Gio.AsyncResult): void

    // Class property signals of GXml-0.20.GXml.XParser

    connect(sigName: "notify::backup", callback: any): number
    on(sigName: "notify::backup", callback: any): number
    once(sigName: "notify::backup", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::backup", ...args: any[]): void
    connect(sigName: "notify::indent", callback: any): number
    on(sigName: "notify::indent", callback: any): number
    once(sigName: "notify::indent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::indent", ...args: any[]): void
    connect(sigName: "notify::cancellable", callback: any): number
    on(sigName: "notify::cancellable", callback: any): number
    once(sigName: "notify::cancellable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::cancellable", ...args: any[]): void
    connect(sigName: "notify::node", callback: any): number
    on(sigName: "notify::node", callback: any): number
    once(sigName: "notify::node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node", ...args: any[]): void
    connect(sigName: "notify::types", callback: any): number
    on(sigName: "notify::types", callback: any): number
    once(sigName: "notify::types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::types", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XParser extends GObject.Object {

    // Own properties of GXml-0.20.GXml.XParser

    static name: string

    // Constructors of GXml-0.20.GXml.XParser

    constructor(config?: XParser.ConstructorProperties) 
    constructor(node: DomNode) 
    static new(node: DomNode): XParser
    _init(config?: XParser.ConstructorProperties): void
}

export module XProcessingInstruction {

    // Constructor properties interface

    export interface ConstructorProperties extends DomProcessingInstruction.ConstructorProperties, XCharacterData.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XProcessingInstruction

        data?: string | null
    }

}

export interface XProcessingInstruction extends DomProcessingInstruction {

    // Own properties of GXml-0.20.GXml.XProcessingInstruction

    data: string

    // Conflicting properties

    baseUri: any

    // Owm methods of GXml-0.20.GXml.XProcessingInstruction

    getData(): string

    // Overloads of getData

    getData(): string
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    setData(value: string): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.XProcessingInstruction

    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::str", callback: any): number
    on(sigName: "notify::str", callback: any): number
    once(sigName: "notify::str", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XProcessingInstruction extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XProcessingInstruction

    static name: string

    // Constructors of GXml-0.20.GXml.XProcessingInstruction

    constructor(config?: XProcessingInstruction.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XProcessingInstruction

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XProcessingInstruction.ConstructorProperties): void
}

export module XsdSchema {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdSchema

        elementDefinitions?: XsdListElements | null
        simpleTypeDefinitions?: XsdListSimpleTypes | null
        complexTypeDefinitions?: XsdListComplexTypes | null
    }

}

export interface XsdSchema {

    // Own properties of GXml-0.20.GXml.XsdSchema

    elementDefinitions: XsdListElements
    simpleTypeDefinitions: XsdListSimpleTypes
    complexTypeDefinitions: XsdListComplexTypes

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdSchema

    getElementDefinitions(): XsdListElements
    setElementDefinitions(value: XsdListElements): void
    getSimpleTypeDefinitions(): XsdListSimpleTypes
    setSimpleTypeDefinitions(value: XsdListSimpleTypes): void
    getComplexTypeDefinitions(): XsdListComplexTypes
    setComplexTypeDefinitions(value: XsdListComplexTypes): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdSchema

    connect(sigName: "notify::element-definitions", callback: any): number
    on(sigName: "notify::element-definitions", callback: any): number
    once(sigName: "notify::element-definitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::element-definitions", ...args: any[]): void
    connect(sigName: "notify::simple-type-definitions", callback: any): number
    on(sigName: "notify::simple-type-definitions", callback: any): number
    once(sigName: "notify::simple-type-definitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simple-type-definitions", ...args: any[]): void
    connect(sigName: "notify::complex-type-definitions", callback: any): number
    on(sigName: "notify::complex-type-definitions", callback: any): number
    once(sigName: "notify::complex-type-definitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::complex-type-definitions", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdSchema extends Element {

    // Own properties of GXml-0.20.GXml.XsdSchema

    static name: string

    // Constructors of GXml-0.20.GXml.XsdSchema

    constructor(config?: XsdSchema.ConstructorProperties) 
    constructor() 
    static new(): XsdSchema

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdSchema.ConstructorProperties): void
}

export module XsdSimpleType {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdSimpleType

        final?: string | null
        name?: string | null
        annotation?: XsdAnnotation | null
        list?: XsdTypeList | null
        union?: XsdTypeUnion | null
        restriction?: XsdTypeRestriction | null
    }

}

export interface XsdSimpleType {

    // Own properties of GXml-0.20.GXml.XsdSimpleType

    final: string
    name: string
    annotation: XsdAnnotation
    list: XsdTypeList
    union: XsdTypeUnion
    restriction: XsdTypeRestriction

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdSimpleType

    getFinal(): string
    setFinal(value: string): void
    getName(): string
    setName(value: string): void
    getAnnotation(): XsdAnnotation
    setAnnotation(value: XsdAnnotation): void
    getList(): XsdTypeList
    setList(value: XsdTypeList): void
    getUnion(): XsdTypeUnion
    setUnion(value: XsdTypeUnion): void
    getRestriction(): XsdTypeRestriction
    setRestriction(value: XsdTypeRestriction): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdSimpleType

    connect(sigName: "notify::final", callback: any): number
    on(sigName: "notify::final", callback: any): number
    once(sigName: "notify::final", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::list", callback: any): number
    on(sigName: "notify::list", callback: any): number
    once(sigName: "notify::list", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::list", ...args: any[]): void
    connect(sigName: "notify::union", callback: any): number
    on(sigName: "notify::union", callback: any): number
    once(sigName: "notify::union", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::union", ...args: any[]): void
    connect(sigName: "notify::restriction", callback: any): number
    on(sigName: "notify::restriction", callback: any): number
    once(sigName: "notify::restriction", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::restriction", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdSimpleType extends Element {

    // Own properties of GXml-0.20.GXml.XsdSimpleType

    static name: string

    // Constructors of GXml-0.20.GXml.XsdSimpleType

    constructor(config?: XsdSimpleType.ConstructorProperties) 
    constructor() 
    static new(): XsdSimpleType

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdSimpleType.ConstructorProperties): void
}

export module XsdTypeDefinition {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeDefinition

        annotation?: XsdAnnotation | null
    }

}

export interface XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinition

    annotation: XsdAnnotation

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdTypeDefinition

    getAnnotation(): XsdAnnotation
    setAnnotation(value: XsdAnnotation): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeDefinition

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeDefinition extends Element {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinition

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeDefinition

    constructor(config?: XsdTypeDefinition.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeDefinition

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdTypeDefinition.ConstructorProperties): void
}

export module XsdTypeList {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeDefinition.ConstructorProperties {
    }

}

export interface XsdTypeList {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeList

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeList extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeList

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeList

    constructor(config?: XsdTypeList.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeList

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeList.ConstructorProperties): void
}

export module XsdTypeUnion {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeDefinition.ConstructorProperties {
    }

}

export interface XsdTypeUnion {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeUnion

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeUnion extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeUnion

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeUnion

    constructor(config?: XsdTypeUnion.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeUnion

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeUnion.ConstructorProperties): void
}

export module XsdTypeRestriction {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeDefinition.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestriction

        base?: string | null
        simpleType?: XsdSimpleType | null
        enumerations?: XsdListTypeRestrictionEnumerations | null
        whiteSpaces?: XsdListTypeRestrictionWhiteSpaces | null
    }

}

export interface XsdTypeRestriction {

    // Own properties of GXml-0.20.GXml.XsdTypeRestriction

    base: string
    simpleType: XsdSimpleType
    enumerations: XsdListTypeRestrictionEnumerations
    whiteSpaces: XsdListTypeRestrictionWhiteSpaces

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdTypeRestriction

    getBase(): string
    setBase(value: string): void
    getSimpleType(): XsdSimpleType
    setSimpleType(value: XsdSimpleType): void
    getEnumerations(): XsdListTypeRestrictionEnumerations
    setEnumerations(value: XsdListTypeRestrictionEnumerations): void
    getWhiteSpaces(): XsdListTypeRestrictionWhiteSpaces
    setWhiteSpaces(value: XsdListTypeRestrictionWhiteSpaces): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestriction

    connect(sigName: "notify::base", callback: any): number
    on(sigName: "notify::base", callback: any): number
    once(sigName: "notify::base", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: any): number
    on(sigName: "notify::simple-type", callback: any): number
    once(sigName: "notify::simple-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::enumerations", callback: any): number
    on(sigName: "notify::enumerations", callback: any): number
    once(sigName: "notify::enumerations", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enumerations", ...args: any[]): void
    connect(sigName: "notify::white-spaces", callback: any): number
    on(sigName: "notify::white-spaces", callback: any): number
    once(sigName: "notify::white-spaces", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::white-spaces", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestriction extends XsdTypeDefinition {

    // Own properties of GXml-0.20.GXml.XsdTypeRestriction

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestriction

    constructor(config?: XsdTypeRestriction.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestriction

    // Overloads of new

    static new(): XsdTypeDefinition
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestriction.ConstructorProperties): void
}

export module XsdTypeRestrictionDef {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionDef

        annotation?: XsdAnnotation | null
    }

}

export interface XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    annotation: XsdAnnotation

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionDef

    getAnnotation(): XsdAnnotation
    setAnnotation(value: XsdAnnotation): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionDef

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionDef extends Element {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDef

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionDef

    constructor(config?: XsdTypeRestrictionDef.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionDef

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionDef.ConstructorProperties): void
}

export module XsdTypeRestrictionMinExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMinExclusive {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionMinExclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinExclusive

    constructor(config?: XsdTypeRestrictionMinExclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMinExclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinExclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionMinInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMinInclusive {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionMinInclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinInclusive

    constructor(config?: XsdTypeRestrictionMinInclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMinInclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinInclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionMaxExclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMaxExclusive {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionMaxExclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusive

    constructor(config?: XsdTypeRestrictionMaxExclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMaxExclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxExclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionMaxInclusive {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMaxInclusive {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionMaxInclusive extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusive

    constructor(config?: XsdTypeRestrictionMaxInclusive.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMaxInclusive

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxInclusive.ConstructorProperties): void
}

export module XsdTypeRestrictionTotalDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionTotalDigits {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionTotalDigits extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionTotalDigits

    constructor(config?: XsdTypeRestrictionTotalDigits.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionTotalDigits

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionTotalDigits.ConstructorProperties): void
}

export module XsdTypeRestrictionFractionDigits {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionFractionDigits {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionFractionDigits extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionFractionDigits

    constructor(config?: XsdTypeRestrictionFractionDigits.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionFractionDigits

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionFractionDigits.ConstructorProperties): void
}

export module XsdTypeRestrictionLength {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionLength {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionLength

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLength

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionLength

    constructor(config?: XsdTypeRestrictionLength.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionLength.ConstructorProperties): void
}

export module XsdTypeRestrictionMinLength {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMinLength {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionMinLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMinLength

    constructor(config?: XsdTypeRestrictionMinLength.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMinLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMinLength.ConstructorProperties): void
}

export module XsdTypeRestrictionMaxLength {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionMaxLength {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionMaxLength extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionMaxLength

    constructor(config?: XsdTypeRestrictionMaxLength.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionMaxLength

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionMaxLength.ConstructorProperties): void
}

export module XsdTypeRestrictionEnumeration {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

        value?: string | null
    }

}

export interface XsdTypeRestrictionEnumeration {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    value: string

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    getValue(): string
    setValue(value: string): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionEnumeration extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionEnumeration

    constructor(config?: XsdTypeRestrictionEnumeration.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionEnumeration

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionEnumeration.ConstructorProperties): void
}

export module XsdTypeRestrictionWhiteSpace {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

        fixed?: XsdTypeRestrictionWhiteSpaceFixed | null
        value?: string | null
    }

}

export interface XsdTypeRestrictionWhiteSpace {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    fixed: XsdTypeRestrictionWhiteSpaceFixed
    value: string

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    getFixed(): XsdTypeRestrictionWhiteSpaceFixed
    setFixed(value: XsdTypeRestrictionWhiteSpaceFixed): void
    getValue(): string
    setValue(value: string): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    connect(sigName: "notify::fixed", callback: any): number
    on(sigName: "notify::fixed", callback: any): number
    once(sigName: "notify::fixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionWhiteSpace extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpace

    constructor(config?: XsdTypeRestrictionWhiteSpace.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionWhiteSpace

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionWhiteSpace.ConstructorProperties): void
}

export module XsdTypeRestrictionWhiteSpaceFixed {

    // Constructor properties interface

    export interface ConstructorProperties extends Boolean.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionWhiteSpaceFixed {

    // Conflicting properties

    value: any

    // Conflicting methods

    getValue(): string | null

    // Overloads of getValue

    getValue(): string | null
    getValue(): string | null
    setValue(value: string | null): void

    // Overloads of setValue

    setValue(value: string | null): void
    setValue(value: string | null): void
    validateValue(val: string | null): boolean

    // Overloads of validateValue

    validateValue(val: string | null): boolean
    validateValue(val: string | null): boolean

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionWhiteSpaceFixed extends Boolean {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixed

    constructor(config?: XsdTypeRestrictionWhiteSpaceFixed.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionWhiteSpaceFixed

    // Overloads of new

    static new(): Boolean
    _init(config?: XsdTypeRestrictionWhiteSpaceFixed.ConstructorProperties): void
}

export module XsdTypeRestrictionPattern {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionPattern {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionPattern

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionPattern extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPattern

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionPattern

    constructor(config?: XsdTypeRestrictionPattern.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionPattern

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionPattern.ConstructorProperties): void
}

export module XsdTypeRestrictionAssertion {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionAssertion {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionAssertion extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionAssertion

    constructor(config?: XsdTypeRestrictionAssertion.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionAssertion

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionAssertion.ConstructorProperties): void
}

export module XsdTypeRestrictionExplicitTimezone {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdTypeRestrictionDef.ConstructorProperties {
    }

}

export interface XsdTypeRestrictionExplicitTimezone {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    connect(sigName: "notify::annotation", callback: any): number
    on(sigName: "notify::annotation", callback: any): number
    once(sigName: "notify::annotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::annotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdTypeRestrictionExplicitTimezone extends XsdTypeRestrictionDef {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    static name: string

    // Constructors of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezone

    constructor(config?: XsdTypeRestrictionExplicitTimezone.ConstructorProperties) 
    constructor() 
    static new(): XsdTypeRestrictionExplicitTimezone

    // Overloads of new

    static new(): XsdTypeRestrictionDef
    static new(): Element
    static new(): Node
    _init(config?: XsdTypeRestrictionExplicitTimezone.ConstructorProperties): void
}

export module XsdComplexType {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseType.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdComplexType

        abstract?: boolean | null
        block?: string | null
        final?: string | null
        mixed?: boolean | null
        name?: string | null
        defaultAttributesApply?: boolean | null
        contentType?: XsdBaseContent | null
    }

}

export interface XsdComplexType {

    // Own properties of GXml-0.20.GXml.XsdComplexType

    abstract: boolean
    block: string
    final: string
    mixed: boolean
    name: string
    defaultAttributesApply: boolean
    contentType: XsdBaseContent

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Own fields of GXml-0.20.GXml.XsdComplexType

    typeAttributes: XsdList
    groupAttributes: XsdList

    // Owm methods of GXml-0.20.GXml.XsdComplexType

    getAbstract(): boolean
    setAbstract(value: boolean): void
    getBlock(): string
    setBlock(value: string): void
    getFinal(): string
    setFinal(value: string): void
    getMixed(): boolean
    setMixed(value: boolean): void
    getName(): string
    setName(value: string): void
    getDefaultAttributesApply(): boolean
    setDefaultAttributesApply(value: boolean): void
    getContentType(): XsdBaseContent
    setContentType(value: XsdBaseContent): void
    getTypeAttributes(): XsdList
    getGroupAttributes(): XsdList

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdComplexType

    connect(sigName: "notify::abstract", callback: any): number
    on(sigName: "notify::abstract", callback: any): number
    once(sigName: "notify::abstract", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: any): number
    on(sigName: "notify::block", callback: any): number
    once(sigName: "notify::block", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::final", callback: any): number
    on(sigName: "notify::final", callback: any): number
    once(sigName: "notify::final", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::mixed", callback: any): number
    on(sigName: "notify::mixed", callback: any): number
    once(sigName: "notify::mixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mixed", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::default-attributes-apply", callback: any): number
    on(sigName: "notify::default-attributes-apply", callback: any): number
    once(sigName: "notify::default-attributes-apply", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-attributes-apply", ...args: any[]): void
    connect(sigName: "notify::content-type", callback: any): number
    on(sigName: "notify::content-type", callback: any): number
    once(sigName: "notify::content-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::content-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdComplexType extends XsdBaseType {

    // Own properties of GXml-0.20.GXml.XsdComplexType

    static name: string

    // Constructors of GXml-0.20.GXml.XsdComplexType

    constructor(config?: XsdComplexType.ConstructorProperties) 
    constructor() 
    static new(): XsdComplexType

    // Overloads of new

    static new(): XsdBaseType
    static new(): Element
    static new(): Node
    _init(config?: XsdComplexType.ConstructorProperties): void
}

export module XsdExtension {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdExtension

        base?: string | null
    }

}

export interface XsdExtension {

    // Own properties of GXml-0.20.GXml.XsdExtension

    base: string

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdExtension

    getBase(): string
    setBase(value: string): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdExtension

    connect(sigName: "notify::base", callback: any): number
    on(sigName: "notify::base", callback: any): number
    once(sigName: "notify::base", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdExtension extends Element {

    // Own properties of GXml-0.20.GXml.XsdExtension

    static name: string

    // Constructors of GXml-0.20.GXml.XsdExtension

    constructor(config?: XsdExtension.ConstructorProperties) 
    constructor() 
    static new(): XsdExtension

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdExtension.ConstructorProperties): void
}

export module XsdElement {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdElement

        abstract?: boolean | null
        block?: string | null
        "default"?: string | null
        final?: string | null
        fixed?: string | null
        form?: string | null
        maxOccurs?: string | null
        minOccurs?: string | null
        name?: string | null
        nillable?: boolean | null
        ref?: string | null
        substitutionGroup?: DomTokenList | null
        targetNamespace?: string | null
        objectType?: string | null
        anotation?: XsdAnnotation | null
        simpleType?: XsdSimpleType | null
        complexType?: XsdComplexType | null
    }

}

export interface XsdElement {

    // Own properties of GXml-0.20.GXml.XsdElement

    abstract: boolean
    block: string
    "default": string
    final: string
    fixed: string
    form: string
    maxOccurs: string
    minOccurs: string
    name: string
    nillable: boolean
    // Has conflict: ref: string
    substitutionGroup: DomTokenList
    targetNamespace: string
    objectType: string
    anotation: XsdAnnotation
    simpleType: XsdSimpleType
    complexType: XsdComplexType

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdElement

    getAbstract(): boolean
    setAbstract(value: boolean): void
    getBlock(): string
    setBlock(value: string): void
    getDefault(): string
    setDefault(value: string): void
    getFinal(): string
    setFinal(value: string): void
    getFixed(): string
    setFixed(value: string): void
    getForm(): string
    setForm(value: string): void
    getMaxOccurs(): string
    setMaxOccurs(value: string): void
    getMinOccurs(): string
    setMinOccurs(value: string): void
    getName(): string
    setName(value: string): void
    getNillable(): boolean
    setNillable(value: boolean): void
    getRef(): string
    setRef(value: string): void
    getSubstitutionGroup(): DomTokenList
    setSubstitutionGroup(value: DomTokenList): void
    getTargetNamespace(): string
    setTargetNamespace(value: string): void
    getObjectType(): string
    setObjectType(value: string): void
    getAnotation(): XsdAnnotation
    setAnotation(value: XsdAnnotation): void
    getSimpleType(): XsdSimpleType
    setSimpleType(value: XsdSimpleType): void
    getComplexType(): XsdComplexType
    setComplexType(value: XsdComplexType): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdElement

    connect(sigName: "notify::abstract", callback: any): number
    on(sigName: "notify::abstract", callback: any): number
    once(sigName: "notify::abstract", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::abstract", ...args: any[]): void
    connect(sigName: "notify::block", callback: any): number
    on(sigName: "notify::block", callback: any): number
    once(sigName: "notify::block", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::block", ...args: any[]): void
    connect(sigName: "notify::default", callback: any): number
    on(sigName: "notify::default", callback: any): number
    once(sigName: "notify::default", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default", ...args: any[]): void
    connect(sigName: "notify::final", callback: any): number
    on(sigName: "notify::final", callback: any): number
    once(sigName: "notify::final", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::final", ...args: any[]): void
    connect(sigName: "notify::fixed", callback: any): number
    on(sigName: "notify::fixed", callback: any): number
    once(sigName: "notify::fixed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fixed", ...args: any[]): void
    connect(sigName: "notify::form", callback: any): number
    on(sigName: "notify::form", callback: any): number
    once(sigName: "notify::form", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::form", ...args: any[]): void
    connect(sigName: "notify::max-occurs", callback: any): number
    on(sigName: "notify::max-occurs", callback: any): number
    once(sigName: "notify::max-occurs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-occurs", ...args: any[]): void
    connect(sigName: "notify::min-occurs", callback: any): number
    on(sigName: "notify::min-occurs", callback: any): number
    once(sigName: "notify::min-occurs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::min-occurs", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::nillable", callback: any): number
    on(sigName: "notify::nillable", callback: any): number
    once(sigName: "notify::nillable", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::nillable", ...args: any[]): void
    connect(sigName: "notify::ref", callback: any): number
    on(sigName: "notify::ref", callback: any): number
    once(sigName: "notify::ref", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::ref", ...args: any[]): void
    connect(sigName: "notify::substitution-group", callback: any): number
    on(sigName: "notify::substitution-group", callback: any): number
    once(sigName: "notify::substitution-group", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::substitution-group", ...args: any[]): void
    connect(sigName: "notify::target-namespace", callback: any): number
    on(sigName: "notify::target-namespace", callback: any): number
    once(sigName: "notify::target-namespace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target-namespace", ...args: any[]): void
    connect(sigName: "notify::object-type", callback: any): number
    on(sigName: "notify::object-type", callback: any): number
    once(sigName: "notify::object-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-type", ...args: any[]): void
    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::simple-type", callback: any): number
    on(sigName: "notify::simple-type", callback: any): number
    once(sigName: "notify::simple-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::simple-type", ...args: any[]): void
    connect(sigName: "notify::complex-type", callback: any): number
    on(sigName: "notify::complex-type", callback: any): number
    once(sigName: "notify::complex-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::complex-type", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdElement extends Element {

    // Own properties of GXml-0.20.GXml.XsdElement

    static name: string

    // Constructors of GXml-0.20.GXml.XsdElement

    constructor(config?: XsdElement.ConstructorProperties) 
    constructor() 
    static new(): XsdElement

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdElement.ConstructorProperties): void
}

export module XsdAnnotation {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {
    }

}

export interface XsdAnnotation {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdAnnotation

    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdAnnotation extends Element {

    // Own properties of GXml-0.20.GXml.XsdAnnotation

    static name: string

    // Constructors of GXml-0.20.GXml.XsdAnnotation

    constructor(config?: XsdAnnotation.ConstructorProperties) 
    constructor() 
    static new(): XsdAnnotation

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdAnnotation.ConstructorProperties): void
}

export module XsdBaseType {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdBaseType

        anotation?: XsdAnnotation | null
    }

}

export interface XsdBaseType {

    // Own properties of GXml-0.20.GXml.XsdBaseType

    anotation: XsdAnnotation

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdBaseType

    getAnotation(): XsdAnnotation
    setAnotation(value: XsdAnnotation): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdBaseType

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdBaseType extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseType

    static name: string

    // Constructors of GXml-0.20.GXml.XsdBaseType

    constructor(config?: XsdBaseType.ConstructorProperties) 
    constructor() 
    static new(): XsdBaseType

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseType.ConstructorProperties): void
}

export module XsdBaseContent {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdBaseContent

        anotation?: XsdAnnotation | null
    }

}

export interface XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdBaseContent

    anotation: XsdAnnotation

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdBaseContent

    getAnotation(): XsdAnnotation
    setAnotation(value: XsdAnnotation): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdBaseContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdBaseContent extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseContent

    static name: string

    // Constructors of GXml-0.20.GXml.XsdBaseContent

    constructor(config?: XsdBaseContent.ConstructorProperties) 
    constructor() 
    static new(): XsdBaseContent

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseContent.ConstructorProperties): void
}

export module XsdSimpleContent {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseContent.ConstructorProperties {
    }

}

export interface XsdSimpleContent {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdSimpleContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdSimpleContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdSimpleContent

    static name: string

    // Constructors of GXml-0.20.GXml.XsdSimpleContent

    constructor(config?: XsdSimpleContent.ConstructorProperties) 
    constructor() 
    static new(): XsdSimpleContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdSimpleContent.ConstructorProperties): void
}

export module XsdComplexContent {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseContent.ConstructorProperties {
    }

}

export interface XsdComplexContent {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdComplexContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdComplexContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdComplexContent

    static name: string

    // Constructors of GXml-0.20.GXml.XsdComplexContent

    constructor(config?: XsdComplexContent.ConstructorProperties) 
    constructor() 
    static new(): XsdComplexContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdComplexContent.ConstructorProperties): void
}

export module XsdOpenContent {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseContent.ConstructorProperties {
    }

}

export interface XsdOpenContent {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdOpenContent

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdOpenContent extends XsdBaseContent {

    // Own properties of GXml-0.20.GXml.XsdOpenContent

    static name: string

    // Constructors of GXml-0.20.GXml.XsdOpenContent

    constructor(config?: XsdOpenContent.ConstructorProperties) 
    constructor() 
    static new(): XsdOpenContent

    // Overloads of new

    static new(): XsdBaseContent
    static new(): Element
    static new(): Node
    _init(config?: XsdOpenContent.ConstructorProperties): void
}

export module XsdBaseAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends Element.ConstructorProperties {

        // Own constructor properties of GXml-0.20.GXml.XsdBaseAttribute

        anotation?: XsdAnnotation | null
    }

}

export interface XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdBaseAttribute

    anotation: XsdAnnotation

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Owm methods of GXml-0.20.GXml.XsdBaseAttribute

    getAnotation(): XsdAnnotation
    setAnotation(value: XsdAnnotation): void

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdBaseAttribute

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdBaseAttribute extends Element {

    // Own properties of GXml-0.20.GXml.XsdBaseAttribute

    static name: string

    // Constructors of GXml-0.20.GXml.XsdBaseAttribute

    constructor(config?: XsdBaseAttribute.ConstructorProperties) 
    constructor() 
    static new(): XsdBaseAttribute

    // Overloads of new

    static new(): Element
    static new(): Node
    _init(config?: XsdBaseAttribute.ConstructorProperties): void
}

export module XsdAttribute {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseAttribute.ConstructorProperties {
    }

}

export interface XsdAttribute {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdAttribute

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdAttribute extends XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdAttribute

    static name: string

    // Constructors of GXml-0.20.GXml.XsdAttribute

    constructor(config?: XsdAttribute.ConstructorProperties) 
    constructor() 
    static new(): XsdAttribute

    // Overloads of new

    static new(): XsdBaseAttribute
    static new(): Element
    static new(): Node
    _init(config?: XsdAttribute.ConstructorProperties): void
}

export module XsdAttributeGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdBaseAttribute.ConstructorProperties {
    }

}

export interface XsdAttributeGroup {

    // Conflicting properties

    namespaceUri: any
    prefix: any
    localName: any
    attributes: any
    nodeType: any
    baseUri: any
    childNodes: any

    // Conflicting methods

    lookupPrefix(nspace: string | null): string | null

    // Overloads of lookupPrefix

    lookupPrefix(nspace: string | null): string | null
    lookupPrefix(nspace: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null

    // Overloads of lookupNamespaceUri

    lookupNamespaceUri(prefix: string | null): string | null
    lookupNamespaceUri(prefix: string | null): string | null
    getAttribute(name: string): string | null
    getAttribute(name: string): string | null

    // Overloads of getAttribute

    getAttribute(name: string): string | null
    setAttribute(name: string, value: string): void
    setAttribute(name: string, val: string): boolean

    // Overloads of setAttribute

    setAttribute(name: string, value: string): void
    removeAttribute(name: string): void
    removeAttribute(name: string): boolean

    // Overloads of removeAttribute

    removeAttribute(name: string): void

    // Class property signals of GXml-0.20.GXml.XsdAttributeGroup

    connect(sigName: "notify::anotation", callback: any): number
    on(sigName: "notify::anotation", callback: any): number
    once(sigName: "notify::anotation", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::anotation", ...args: any[]): void
    connect(sigName: "notify::parse-children", callback: any): number
    on(sigName: "notify::parse-children", callback: any): number
    once(sigName: "notify::parse-children", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parse-children", ...args: any[]): void
    connect(sigName: "notify::unparsed", callback: any): number
    on(sigName: "notify::unparsed", callback: any): number
    once(sigName: "notify::unparsed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::unparsed", ...args: any[]): void
    connect(sigName: "notify::read-buffer", callback: any): number
    on(sigName: "notify::read-buffer", callback: any): number
    once(sigName: "notify::read-buffer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::read-buffer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdAttributeGroup extends XsdBaseAttribute {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroup

    static name: string

    // Constructors of GXml-0.20.GXml.XsdAttributeGroup

    constructor(config?: XsdAttributeGroup.ConstructorProperties) 
    constructor() 
    static new(): XsdAttributeGroup

    // Overloads of new

    static new(): XsdBaseAttribute
    static new(): Element
    static new(): Node
    _init(config?: XsdAttributeGroup.ConstructorProperties): void
}

export module XsdList {

    // Constructor properties interface

    export interface ConstructorProperties extends ArrayList.ConstructorProperties {
    }

}

export interface XsdList {

    // Own properties of GXml-0.20.GXml.XsdList

    readonly length: number

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Owm methods of GXml-0.20.GXml.XsdList

    getLength(): number

    // Overloads of getLength

    getLength(): number
    remove(index: number): void
    indexOf(element: DomElement): number

    // Conflicting methods

    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.XsdList

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdList extends ArrayList {

    // Own properties of GXml-0.20.GXml.XsdList

    static name: string

    // Constructors of GXml-0.20.GXml.XsdList

    constructor(config?: XsdList.ConstructorProperties) 
    constructor() 
    static new(): XsdList

    // Overloads of new

    static new(): ArrayList
    _init(config?: XsdList.ConstructorProperties): void
}

export module XsdListElements {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListElements {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Conflicting methods

    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.XsdListElements

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdListElements extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListElements

    static name: string

    // Constructors of GXml-0.20.GXml.XsdListElements

    constructor(config?: XsdListElements.ConstructorProperties) 
    constructor() 
    static new(): XsdListElements

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListElements.ConstructorProperties): void
}

export module XsdListSimpleTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListSimpleTypes {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Conflicting methods

    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.XsdListSimpleTypes

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdListSimpleTypes extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypes

    static name: string

    // Constructors of GXml-0.20.GXml.XsdListSimpleTypes

    constructor(config?: XsdListSimpleTypes.ConstructorProperties) 
    constructor() 
    static new(): XsdListSimpleTypes

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListSimpleTypes.ConstructorProperties): void
}

export module XsdListComplexTypes {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListComplexTypes {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Conflicting methods

    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.XsdListComplexTypes

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdListComplexTypes extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypes

    static name: string

    // Constructors of GXml-0.20.GXml.XsdListComplexTypes

    constructor(config?: XsdListComplexTypes.ConstructorProperties) 
    constructor() 
    static new(): XsdListComplexTypes

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListComplexTypes.ConstructorProperties): void
}

export module XsdListTypeRestrictionEnumerations {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListTypeRestrictionEnumerations {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Conflicting methods

    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdListTypeRestrictionEnumerations extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    static name: string

    // Constructors of GXml-0.20.GXml.XsdListTypeRestrictionEnumerations

    constructor(config?: XsdListTypeRestrictionEnumerations.ConstructorProperties) 
    constructor() 
    static new(): XsdListTypeRestrictionEnumerations

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListTypeRestrictionEnumerations.ConstructorProperties): void
}

export module XsdListTypeRestrictionWhiteSpaces {

    // Constructor properties interface

    export interface ConstructorProperties extends XsdList.ConstructorProperties {
    }

}

export interface XsdListTypeRestrictionWhiteSpaces {

    // Conflicting properties

    nodesIndex: any
    element: any
    itemsName: any

    // Conflicting methods

    getLength(): number

    // Overloads of getLength

    getLength(): number
    getLength(): number
    validateAppend(index: number, element: DomElement): boolean

    // Overloads of validateAppend

    validateAppend(index: number, element: DomElement): boolean
    validateAppend(index: number, element: DomElement): boolean
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void

    // Class property signals of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    connect(sigName: "notify::length", callback: any): number
    on(sigName: "notify::length", callback: any): number
    once(sigName: "notify::length", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::length", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XsdListTypeRestrictionWhiteSpaces extends XsdList {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    static name: string

    // Constructors of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpaces

    constructor(config?: XsdListTypeRestrictionWhiteSpaces.ConstructorProperties) 
    constructor() 
    static new(): XsdListTypeRestrictionWhiteSpaces

    // Overloads of new

    static new(): XsdList
    static new(): ArrayList
    _init(config?: XsdListTypeRestrictionWhiteSpaces.ConstructorProperties): void
}

export module XText {

    // Constructor properties interface

    export interface ConstructorProperties extends DomText.ConstructorProperties, XCharacterData.ConstructorProperties {
    }

}

export interface XText extends DomText {

    // Conflicting properties

    baseUri: any

    // Conflicting methods

    getData(): string

    // Overloads of getData

    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    /**
     * Gets a named field from the objects table of associations (see g_object_set_data()).
     * @param key name of the key for that association
     */
    getData(key: string): object | null
    setData(value: string): void

    // Overloads of setData

    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void
    /**
     * Each object carries around a table of associations from
     * strings to pointers.  This function lets you set an association.
     * 
     * If the object already had an association with that name,
     * the old association will be destroyed.
     * 
     * Internally, the `key` is converted to a #GQuark using g_quark_from_string().
     * This means a copy of `key` is kept permanently (even after `object` has been
     * finalized) ??? so it is recommended to only use a small, bounded set of values
     * for `key` in your program, to avoid the #GQuark storage growing unbounded.
     * @param key name of the key
     * @param data data to associate with that key
     */
    setData(key: string, data: object | null): void

    // Class property signals of GXml-0.20.GXml.XText

    connect(sigName: "notify::str", callback: any): number
    on(sigName: "notify::str", callback: any): number
    once(sigName: "notify::str", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::str", ...args: any[]): void
    connect(sigName: "notify::attrs", callback: any): number
    on(sigName: "notify::attrs", callback: any): number
    once(sigName: "notify::attrs", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::attrs", ...args: any[]): void
    connect(sigName: "notify::children-nodes", callback: any): number
    on(sigName: "notify::children-nodes", callback: any): number
    once(sigName: "notify::children-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::children-nodes", ...args: any[]): void
    connect(sigName: "notify::document", callback: any): number
    on(sigName: "notify::document", callback: any): number
    once(sigName: "notify::document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::document", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::type-node", callback: any): number
    on(sigName: "notify::type-node", callback: any): number
    once(sigName: "notify::type-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::type-node", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::value", callback: any): number
    on(sigName: "notify::value", callback: any): number
    once(sigName: "notify::value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::value", ...args: any[]): void
    connect(sigName: "notify::data", callback: any): number
    on(sigName: "notify::data", callback: any): number
    once(sigName: "notify::data", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::data", ...args: any[]): void
    connect(sigName: "notify::node-type", callback: any): number
    on(sigName: "notify::node-type", callback: any): number
    once(sigName: "notify::node-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-type", ...args: any[]): void
    connect(sigName: "notify::node-name", callback: any): number
    on(sigName: "notify::node-name", callback: any): number
    once(sigName: "notify::node-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-name", ...args: any[]): void
    connect(sigName: "notify::base-uri", callback: any): number
    on(sigName: "notify::base-uri", callback: any): number
    once(sigName: "notify::base-uri", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-uri", ...args: any[]): void
    connect(sigName: "notify::owner-document", callback: any): number
    on(sigName: "notify::owner-document", callback: any): number
    once(sigName: "notify::owner-document", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner-document", ...args: any[]): void
    connect(sigName: "notify::parent-node", callback: any): number
    on(sigName: "notify::parent-node", callback: any): number
    once(sigName: "notify::parent-node", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-node", ...args: any[]): void
    connect(sigName: "notify::parent-element", callback: any): number
    on(sigName: "notify::parent-element", callback: any): number
    once(sigName: "notify::parent-element", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent-element", ...args: any[]): void
    connect(sigName: "notify::child-nodes", callback: any): number
    on(sigName: "notify::child-nodes", callback: any): number
    once(sigName: "notify::child-nodes", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::child-nodes", ...args: any[]): void
    connect(sigName: "notify::first-child", callback: any): number
    on(sigName: "notify::first-child", callback: any): number
    once(sigName: "notify::first-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::first-child", ...args: any[]): void
    connect(sigName: "notify::last-child", callback: any): number
    on(sigName: "notify::last-child", callback: any): number
    once(sigName: "notify::last-child", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::last-child", ...args: any[]): void
    connect(sigName: "notify::previous-sibling", callback: any): number
    on(sigName: "notify::previous-sibling", callback: any): number
    once(sigName: "notify::previous-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-sibling", ...args: any[]): void
    connect(sigName: "notify::next-sibling", callback: any): number
    on(sigName: "notify::next-sibling", callback: any): number
    once(sigName: "notify::next-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-sibling", ...args: any[]): void
    connect(sigName: "notify::node-value", callback: any): number
    on(sigName: "notify::node-value", callback: any): number
    once(sigName: "notify::node-value", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::node-value", ...args: any[]): void
    connect(sigName: "notify::text-content", callback: any): number
    on(sigName: "notify::text-content", callback: any): number
    once(sigName: "notify::text-content", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::text-content", ...args: any[]): void
    connect(sigName: "notify::previous-element-sibling", callback: any): number
    on(sigName: "notify::previous-element-sibling", callback: any): number
    once(sigName: "notify::previous-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::previous-element-sibling", ...args: any[]): void
    connect(sigName: "notify::next-element-sibling", callback: any): number
    on(sigName: "notify::next-element-sibling", callback: any): number
    once(sigName: "notify::next-element-sibling", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::next-element-sibling", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class XText extends XCharacterData {

    // Own properties of GXml-0.20.GXml.XText

    static name: string

    // Constructors of GXml-0.20.GXml.XText

    constructor(config?: XText.ConstructorProperties) 
    constructor(doc: XDocument, node: object | null) 
    static new(doc: XDocument, node: object | null): XText

    // Overloads of new

    static new(): XCharacterData
    static new(): XNonDocumentChildNode
    static new(): XChildNode
    _init(config?: XText.ConstructorProperties): void
}

export interface ArrayListClass {
}

export abstract class ArrayListClass {

    // Own properties of GXml-0.20.GXml.ArrayListClass

    static name: string
}

export interface ArrayListPrivate {
}

export class ArrayListPrivate {

    // Own properties of GXml-0.20.GXml.ArrayListPrivate

    static name: string
}

export interface AttrClass {
}

export abstract class AttrClass {

    // Own properties of GXml-0.20.GXml.AttrClass

    static name: string
}

export interface AttrPrivate {
}

export class AttrPrivate {

    // Own properties of GXml-0.20.GXml.AttrPrivate

    static name: string
}

export interface BaseCollectionClass {

    // Own fields of GXml-0.20.GXml.BaseCollectionClass

    validateAppend: (self: BaseCollection, index: number, element: DomElement) => boolean
    clear: (self: BaseCollection) => void
}

export abstract class BaseCollectionClass {

    // Own properties of GXml-0.20.GXml.BaseCollectionClass

    static name: string
}

export interface BaseCollectionPrivate {
}

export class BaseCollectionPrivate {

    // Own properties of GXml-0.20.GXml.BaseCollectionPrivate

    static name: string
}

export interface CssSelectorClass {
}

export abstract class CssSelectorClass {

    // Own properties of GXml-0.20.GXml.CssSelectorClass

    static name: string
}

export interface CssSelectorPrivate {
}

export class CssSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssSelectorPrivate

    static name: string
}

export interface CssElementSelectorClass {
}

export abstract class CssElementSelectorClass {

    // Own properties of GXml-0.20.GXml.CssElementSelectorClass

    static name: string
}

export interface CssElementSelectorPrivate {
}

export class CssElementSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssElementSelectorPrivate

    static name: string
}

export interface CssAttributeSelectorClass {
}

export abstract class CssAttributeSelectorClass {

    // Own properties of GXml-0.20.GXml.CssAttributeSelectorClass

    static name: string
}

export interface CssAttributeSelectorPrivate {
}

export class CssAttributeSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssAttributeSelectorPrivate

    static name: string
}

export interface CssNotSelectorClass {
}

export abstract class CssNotSelectorClass {

    // Own properties of GXml-0.20.GXml.CssNotSelectorClass

    static name: string
}

export interface CssNotSelectorPrivate {
}

export class CssNotSelectorPrivate {

    // Own properties of GXml-0.20.GXml.CssNotSelectorPrivate

    static name: string
}

export interface CssSelectorParserClass {
}

export abstract class CssSelectorParserClass {

    // Own properties of GXml-0.20.GXml.CssSelectorParserClass

    static name: string
}

export interface CssSelectorParserPrivate {
}

export class CssSelectorParserPrivate {

    // Own properties of GXml-0.20.GXml.CssSelectorParserPrivate

    static name: string
}

export interface DocumentClass {
}

export abstract class DocumentClass {

    // Own properties of GXml-0.20.GXml.DocumentClass

    static name: string
}

export interface DocumentPrivate {
}

export class DocumentPrivate {

    // Own properties of GXml-0.20.GXml.DocumentPrivate

    static name: string
}

export interface ImplementationClass {
}

export abstract class ImplementationClass {

    // Own properties of GXml-0.20.GXml.ImplementationClass

    static name: string
}

export interface ImplementationPrivate {
}

export class ImplementationPrivate {

    // Own properties of GXml-0.20.GXml.ImplementationPrivate

    static name: string
}

export interface DocumentTypeClass {
}

export abstract class DocumentTypeClass {

    // Own properties of GXml-0.20.GXml.DocumentTypeClass

    static name: string
}

export interface DocumentTypePrivate {
}

export class DocumentTypePrivate {

    // Own properties of GXml-0.20.GXml.DocumentTypePrivate

    static name: string
}

export interface DocumentFragmentClass {
}

export abstract class DocumentFragmentClass {

    // Own properties of GXml-0.20.GXml.DocumentFragmentClass

    static name: string
}

export interface DocumentFragmentPrivate {
}

export class DocumentFragmentPrivate {

    // Own properties of GXml-0.20.GXml.DocumentFragmentPrivate

    static name: string
}

export interface DomNodeFilterClass {
}

export abstract class DomNodeFilterClass {

    // Own properties of GXml-0.20.GXml.DomNodeFilterClass

    static name: string
}

export interface DomNodeFilterPrivate {
}

export class DomNodeFilterPrivate {

    // Own properties of GXml-0.20.GXml.DomNodeFilterPrivate

    static name: string
}

export interface DomElementListClass {
}

export abstract class DomElementListClass {

    // Own properties of GXml-0.20.GXml.DomElementListClass

    static name: string
}

export interface DomElementListPrivate {
}

export class DomElementListPrivate {

    // Own properties of GXml-0.20.GXml.DomElementListPrivate

    static name: string
}

export interface DomEventInitClass {
}

export abstract class DomEventInitClass {

    // Own properties of GXml-0.20.GXml.DomEventInitClass

    static name: string
}

export interface DomEventInitPrivate {
}

export class DomEventInitPrivate {

    // Own properties of GXml-0.20.GXml.DomEventInitPrivate

    static name: string
}

export interface DomCustomEventInitClass {
}

export abstract class DomCustomEventInitClass {

    // Own properties of GXml-0.20.GXml.DomCustomEventInitClass

    static name: string
}

export interface DomCustomEventInitPrivate {
}

export class DomCustomEventInitPrivate {

    // Own properties of GXml-0.20.GXml.DomCustomEventInitPrivate

    static name: string
}

export interface DomTimeStampClass {
}

export abstract class DomTimeStampClass {

    // Own properties of GXml-0.20.GXml.DomTimeStampClass

    static name: string
}

export interface DomTimeStampPrivate {
}

export class DomTimeStampPrivate {

    // Own properties of GXml-0.20.GXml.DomTimeStampPrivate

    static name: string
}

export interface DomMutationObserverInitClass {
}

export abstract class DomMutationObserverInitClass {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInitClass

    static name: string
}

export interface DomMutationObserverInitPrivate {
}

export class DomMutationObserverInitPrivate {

    // Own properties of GXml-0.20.GXml.DomMutationObserverInitPrivate

    static name: string
}

export interface DomErrorNameClass {
}

export abstract class DomErrorNameClass {

    // Own properties of GXml-0.20.GXml.DomErrorNameClass

    static name: string
}

export interface DomErrorNamePrivate {
}

export class DomErrorNamePrivate {

    // Own properties of GXml-0.20.GXml.DomErrorNamePrivate

    static name: string
}

export interface ElementClass {
}

export abstract class ElementClass {

    // Own properties of GXml-0.20.GXml.ElementClass

    static name: string
}

export interface ElementPrivate {
}

export class ElementPrivate {

    // Own properties of GXml-0.20.GXml.ElementPrivate

    static name: string
}

export interface ElementAttributesClass {
}

export abstract class ElementAttributesClass {

    // Own properties of GXml-0.20.GXml.ElementAttributesClass

    static name: string
}

export interface ElementAttributesPrivate {
}

export class ElementAttributesPrivate {

    // Own properties of GXml-0.20.GXml.ElementAttributesPrivate

    static name: string
}

export interface EnumerationClass {
}

export abstract class EnumerationClass {

    // Own properties of GXml-0.20.GXml.EnumerationClass

    static name: string
}

export interface EnumerationPrivate {
}

export class EnumerationPrivate {

    // Own properties of GXml-0.20.GXml.EnumerationPrivate

    static name: string
}

export interface EventClass {
}

export abstract class EventClass {

    // Own properties of GXml-0.20.GXml.EventClass

    static name: string
}

export interface EventPrivate {
}

export class EventPrivate {

    // Own properties of GXml-0.20.GXml.EventPrivate

    static name: string
}

export interface CustomEventClass {
}

export abstract class CustomEventClass {

    // Own properties of GXml-0.20.GXml.CustomEventClass

    static name: string
}

export interface CustomEventPrivate {
}

export class CustomEventPrivate {

    // Own properties of GXml-0.20.GXml.CustomEventPrivate

    static name: string
}

export interface HashMapClass {
}

export abstract class HashMapClass {

    // Own properties of GXml-0.20.GXml.HashMapClass

    static name: string
}

export interface HashMapPrivate {
}

export class HashMapPrivate {

    // Own properties of GXml-0.20.GXml.HashMapPrivate

    static name: string
}

export interface HashPairedMapClass {
}

export abstract class HashPairedMapClass {

    // Own properties of GXml-0.20.GXml.HashPairedMapClass

    static name: string
}

export interface HashPairedMapPrivate {
}

export class HashPairedMapPrivate {

    // Own properties of GXml-0.20.GXml.HashPairedMapPrivate

    static name: string
}

export interface HashThreeMapClass {
}

export abstract class HashThreeMapClass {

    // Own properties of GXml-0.20.GXml.HashThreeMapClass

    static name: string
}

export interface HashThreeMapPrivate {
}

export class HashThreeMapPrivate {

    // Own properties of GXml-0.20.GXml.HashThreeMapPrivate

    static name: string
}

export interface HTMLCollectionClass {
}

export abstract class HTMLCollectionClass {

    // Own properties of GXml-0.20.GXml.HTMLCollectionClass

    static name: string
}

export interface HTMLCollectionPrivate {
}

export class HTMLCollectionPrivate {

    // Own properties of GXml-0.20.GXml.HTMLCollectionPrivate

    static name: string
}

export interface HtmlDocumentClass {
}

export abstract class HtmlDocumentClass {

    // Own properties of GXml-0.20.GXml.HtmlDocumentClass

    static name: string
}

export interface HtmlDocumentPrivate {
}

export class HtmlDocumentPrivate {

    // Own properties of GXml-0.20.GXml.HtmlDocumentPrivate

    static name: string
}

export interface HtmlElementClass {
}

export abstract class HtmlElementClass {

    // Own properties of GXml-0.20.GXml.HtmlElementClass

    static name: string
}

export interface HtmlElementPrivate {
}

export class HtmlElementPrivate {

    // Own properties of GXml-0.20.GXml.HtmlElementPrivate

    static name: string
}

export interface LXPathObjectClass {
}

export abstract class LXPathObjectClass {

    // Own properties of GXml-0.20.GXml.LXPathObjectClass

    static name: string
}

export interface LXPathObjectPrivate {
}

export class LXPathObjectPrivate {

    // Own properties of GXml-0.20.GXml.LXPathObjectPrivate

    static name: string
}

export interface NodeClass {
}

export abstract class NodeClass {

    // Own properties of GXml-0.20.GXml.NodeClass

    static name: string
}

export interface NodePrivate {
}

export class NodePrivate {

    // Own properties of GXml-0.20.GXml.NodePrivate

    static name: string
}

export interface NodeListClass {
}

export abstract class NodeListClass {

    // Own properties of GXml-0.20.GXml.NodeListClass

    static name: string
}

export interface NodeListPrivate {
}

export class NodeListPrivate {

    // Own properties of GXml-0.20.GXml.NodeListPrivate

    static name: string
}

export interface NodeIteratorClass {
}

export abstract class NodeIteratorClass {

    // Own properties of GXml-0.20.GXml.NodeIteratorClass

    static name: string
}

export interface NodeIteratorPrivate {
}

export class NodeIteratorPrivate {

    // Own properties of GXml-0.20.GXml.NodeIteratorPrivate

    static name: string
}

export interface BasePropertyClass {

    // Own fields of GXml-0.20.GXml.BasePropertyClass

    validateValue: (self: BaseProperty, val: string | null) => boolean
}

export abstract class BasePropertyClass {

    // Own properties of GXml-0.20.GXml.BasePropertyClass

    static name: string
}

export interface BasePropertyPrivate {
}

export class BasePropertyPrivate {

    // Own properties of GXml-0.20.GXml.BasePropertyPrivate

    static name: string
}

export interface StringClass {
}

export abstract class StringClass {

    // Own properties of GXml-0.20.GXml.StringClass

    static name: string
}

export interface StringPrivate {
}

export class StringPrivate {

    // Own properties of GXml-0.20.GXml.StringPrivate

    static name: string
}

export interface ArrayStringClass {
}

export abstract class ArrayStringClass {

    // Own properties of GXml-0.20.GXml.ArrayStringClass

    static name: string
}

export interface ArrayStringPrivate {
}

export class ArrayStringPrivate {

    // Own properties of GXml-0.20.GXml.ArrayStringPrivate

    static name: string
}

export interface XsdArrayStringClass {
}

export abstract class XsdArrayStringClass {

    // Own properties of GXml-0.20.GXml.XsdArrayStringClass

    static name: string
}

export interface XsdArrayStringPrivate {
}

export class XsdArrayStringPrivate {

    // Own properties of GXml-0.20.GXml.XsdArrayStringPrivate

    static name: string
}

export interface DoubleClass {
}

export abstract class DoubleClass {

    // Own properties of GXml-0.20.GXml.DoubleClass

    static name: string
}

export interface DoublePrivate {
}

export class DoublePrivate {

    // Own properties of GXml-0.20.GXml.DoublePrivate

    static name: string
}

export interface FloatClass {
}

export abstract class FloatClass {

    // Own properties of GXml-0.20.GXml.FloatClass

    static name: string
}

export interface FloatPrivate {
}

export class FloatPrivate {

    // Own properties of GXml-0.20.GXml.FloatPrivate

    static name: string
}

export interface IntClass {
}

export abstract class IntClass {

    // Own properties of GXml-0.20.GXml.IntClass

    static name: string
}

export interface IntPrivate {
}

export class IntPrivate {

    // Own properties of GXml-0.20.GXml.IntPrivate

    static name: string
}

export interface BooleanClass {
}

export abstract class BooleanClass {

    // Own properties of GXml-0.20.GXml.BooleanClass

    static name: string
}

export interface BooleanPrivate {
}

export class BooleanPrivate {

    // Own properties of GXml-0.20.GXml.BooleanPrivate

    static name: string
}

export interface EnumClass {
}

export abstract class EnumClass {

    // Own properties of GXml-0.20.GXml.EnumClass

    static name: string
}

export interface EnumPrivate {
}

export class EnumPrivate {

    // Own properties of GXml-0.20.GXml.EnumPrivate

    static name: string
}

export interface DateClass {
}

export abstract class DateClass {

    // Own properties of GXml-0.20.GXml.DateClass

    static name: string
}

export interface DatePrivate {
}

export class DatePrivate {

    // Own properties of GXml-0.20.GXml.DatePrivate

    static name: string
}

export interface DateTimeClass {
}

export abstract class DateTimeClass {

    // Own properties of GXml-0.20.GXml.DateTimeClass

    static name: string
}

export interface DateTimePrivate {
}

export class DateTimePrivate {

    // Own properties of GXml-0.20.GXml.DateTimePrivate

    static name: string
}

export interface RangeClass {
}

export abstract class RangeClass {

    // Own properties of GXml-0.20.GXml.RangeClass

    static name: string
}

export interface RangePrivate {
}

export class RangePrivate {

    // Own properties of GXml-0.20.GXml.RangePrivate

    static name: string
}

export interface SettableTokenListClass {
}

export abstract class SettableTokenListClass {

    // Own properties of GXml-0.20.GXml.SettableTokenListClass

    static name: string
}

export interface SettableTokenListPrivate {
}

export class SettableTokenListPrivate {

    // Own properties of GXml-0.20.GXml.SettableTokenListPrivate

    static name: string
}

export interface StringRefClass {
}

export abstract class StringRefClass {

    // Own properties of GXml-0.20.GXml.StringRefClass

    static name: string
}

export interface StringRefPrivate {
}

export class StringRefPrivate {

    // Own properties of GXml-0.20.GXml.StringRefPrivate

    static name: string
}

export interface CharacterDataClass {
}

export abstract class CharacterDataClass {

    // Own properties of GXml-0.20.GXml.CharacterDataClass

    static name: string
}

export interface CharacterDataPrivate {
}

export class CharacterDataPrivate {

    // Own properties of GXml-0.20.GXml.CharacterDataPrivate

    static name: string
}

export interface TextClass {
}

export abstract class TextClass {

    // Own properties of GXml-0.20.GXml.TextClass

    static name: string
}

export interface TextPrivate {
}

export class TextPrivate {

    // Own properties of GXml-0.20.GXml.TextPrivate

    static name: string
}

export interface ProcessingInstructionClass {
}

export abstract class ProcessingInstructionClass {

    // Own properties of GXml-0.20.GXml.ProcessingInstructionClass

    static name: string
}

export interface ProcessingInstructionPrivate {
}

export class ProcessingInstructionPrivate {

    // Own properties of GXml-0.20.GXml.ProcessingInstructionPrivate

    static name: string
}

export interface CommentClass {
}

export abstract class CommentClass {

    // Own properties of GXml-0.20.GXml.CommentClass

    static name: string
}

export interface CommentPrivate {
}

export class CommentPrivate {

    // Own properties of GXml-0.20.GXml.CommentPrivate

    static name: string
}

export interface TokenListClass {
}

export abstract class TokenListClass {

    // Own properties of GXml-0.20.GXml.TokenListClass

    static name: string
}

export interface TokenListPrivate {
}

export class TokenListPrivate {

    // Own properties of GXml-0.20.GXml.TokenListPrivate

    static name: string
}

export interface TreeWalkerClass {
}

export abstract class TreeWalkerClass {

    // Own properties of GXml-0.20.GXml.TreeWalkerClass

    static name: string
}

export interface TreeWalkerPrivate {
}

export class TreeWalkerPrivate {

    // Own properties of GXml-0.20.GXml.TreeWalkerPrivate

    static name: string
}

export interface XAttributeClass {
}

export abstract class XAttributeClass {

    // Own properties of GXml-0.20.GXml.XAttributeClass

    static name: string
}

export interface XAttributePrivate {
}

export class XAttributePrivate {

    // Own properties of GXml-0.20.GXml.XAttributePrivate

    static name: string
}

export interface XCharacterDataClass {
}

export abstract class XCharacterDataClass {

    // Own properties of GXml-0.20.GXml.XCharacterDataClass

    static name: string
}

export interface XCharacterDataPrivate {
}

export class XCharacterDataPrivate {

    // Own properties of GXml-0.20.GXml.XCharacterDataPrivate

    static name: string
}

export interface XChildNodeClass {
}

export abstract class XChildNodeClass {

    // Own properties of GXml-0.20.GXml.XChildNodeClass

    static name: string
}

export interface XChildNodePrivate {
}

export class XChildNodePrivate {

    // Own properties of GXml-0.20.GXml.XChildNodePrivate

    static name: string
}

export interface XNonDocumentChildNodeClass {
}

export abstract class XNonDocumentChildNodeClass {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNodeClass

    static name: string
}

export interface XNonDocumentChildNodePrivate {
}

export class XNonDocumentChildNodePrivate {

    // Own properties of GXml-0.20.GXml.XNonDocumentChildNodePrivate

    static name: string
}

export interface XCommentClass {
}

export abstract class XCommentClass {

    // Own properties of GXml-0.20.GXml.XCommentClass

    static name: string
}

export interface XCommentPrivate {
}

export class XCommentPrivate {

    // Own properties of GXml-0.20.GXml.XCommentPrivate

    static name: string
}

export interface XDocumentClass {

    // Own fields of GXml-0.20.GXml.XDocumentClass

    save: (self: XDocument, cancellable: Gio.Cancellable | null) => boolean
    saveAs: (self: XDocument, f: Gio.File, cancellable: Gio.Cancellable | null) => boolean
}

export abstract class XDocumentClass {

    // Own properties of GXml-0.20.GXml.XDocumentClass

    static name: string
}

export interface XDocumentPrivate {
}

export class XDocumentPrivate {

    // Own properties of GXml-0.20.GXml.XDocumentPrivate

    static name: string
}

export interface XElementClass {
}

export abstract class XElementClass {

    // Own properties of GXml-0.20.GXml.XElementClass

    static name: string
}

export interface XElementPrivate {
}

export class XElementPrivate {

    // Own properties of GXml-0.20.GXml.XElementPrivate

    static name: string
}

export interface XHashMapAttrClass {
}

export abstract class XHashMapAttrClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrClass

    static name: string
}

export interface XHashMapAttrPrivate {
}

export class XHashMapAttrPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrPrivate

    static name: string
}

export interface XHashMapAttrEntryClass {
}

export abstract class XHashMapAttrEntryClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntryClass

    static name: string
}

export interface XHashMapAttrEntryPrivate {
}

export class XHashMapAttrEntryPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrEntryPrivate

    static name: string
}

export interface XHashMapAttrIteratorClass {
}

export abstract class XHashMapAttrIteratorClass {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIteratorClass

    static name: string
}

export interface XHashMapAttrIteratorPrivate {
}

export class XHashMapAttrIteratorPrivate {

    // Own properties of GXml-0.20.GXml.XHashMapAttrIteratorPrivate

    static name: string
}

export interface XHtmlDocumentClass {
}

export abstract class XHtmlDocumentClass {

    // Own properties of GXml-0.20.GXml.XHtmlDocumentClass

    static name: string
}

export interface XHtmlDocumentPrivate {
}

export class XHtmlDocumentPrivate {

    // Own properties of GXml-0.20.GXml.XHtmlDocumentPrivate

    static name: string
}

export interface XListChildrenClass {
}

export abstract class XListChildrenClass {

    // Own properties of GXml-0.20.GXml.XListChildrenClass

    static name: string
}

export interface XListChildrenPrivate {
}

export class XListChildrenPrivate {

    // Own properties of GXml-0.20.GXml.XListChildrenPrivate

    static name: string
}

export interface XListChildrenIteratorClass {
}

export abstract class XListChildrenIteratorClass {

    // Own properties of GXml-0.20.GXml.XListChildrenIteratorClass

    static name: string
}

export interface XListChildrenIteratorPrivate {
}

export class XListChildrenIteratorPrivate {

    // Own properties of GXml-0.20.GXml.XListChildrenIteratorPrivate

    static name: string
}

export interface XNodeClass {

    // Own fields of GXml-0.20.GXml.XNodeClass

    setNamespace: (self: XNode, uri: string, prefix: string | null) => boolean
    toString: (self: XNode) => string
}

export abstract class XNodeClass {

    // Own properties of GXml-0.20.GXml.XNodeClass

    static name: string
}

export interface XNodePrivate {
}

export class XNodePrivate {

    // Own properties of GXml-0.20.GXml.XNodePrivate

    static name: string
}

export interface XParserClass {
}

export abstract class XParserClass {

    // Own properties of GXml-0.20.GXml.XParserClass

    static name: string
}

export interface XParserPrivate {
}

export class XParserPrivate {

    // Own properties of GXml-0.20.GXml.XParserPrivate

    static name: string
}

export interface XProcessingInstructionClass {
}

export abstract class XProcessingInstructionClass {

    // Own properties of GXml-0.20.GXml.XProcessingInstructionClass

    static name: string
}

export interface XProcessingInstructionPrivate {
}

export class XProcessingInstructionPrivate {

    // Own properties of GXml-0.20.GXml.XProcessingInstructionPrivate

    static name: string
}

export interface XsdSchemaClass {
}

export abstract class XsdSchemaClass {

    // Own properties of GXml-0.20.GXml.XsdSchemaClass

    static name: string
}

export interface XsdSchemaPrivate {
}

export class XsdSchemaPrivate {

    // Own properties of GXml-0.20.GXml.XsdSchemaPrivate

    static name: string
}

export interface XsdSimpleTypeClass {
}

export abstract class XsdSimpleTypeClass {

    // Own properties of GXml-0.20.GXml.XsdSimpleTypeClass

    static name: string
}

export interface XsdSimpleTypePrivate {
}

export class XsdSimpleTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdSimpleTypePrivate

    static name: string
}

export interface XsdTypeDefinitionClass {
}

export abstract class XsdTypeDefinitionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinitionClass

    static name: string
}

export interface XsdTypeDefinitionPrivate {
}

export class XsdTypeDefinitionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeDefinitionPrivate

    static name: string
}

export interface XsdTypeListClass {
}

export abstract class XsdTypeListClass {

    // Own properties of GXml-0.20.GXml.XsdTypeListClass

    static name: string
}

export interface XsdTypeListPrivate {
}

export class XsdTypeListPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeListPrivate

    static name: string
}

export interface XsdTypeUnionClass {
}

export abstract class XsdTypeUnionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeUnionClass

    static name: string
}

export interface XsdTypeUnionPrivate {
}

export class XsdTypeUnionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeUnionPrivate

    static name: string
}

export interface XsdTypeRestrictionClass {
}

export abstract class XsdTypeRestrictionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionClass

    static name: string
}

export interface XsdTypeRestrictionPrivate {
}

export class XsdTypeRestrictionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPrivate

    static name: string
}

export interface XsdTypeRestrictionDefClass {
}

export abstract class XsdTypeRestrictionDefClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDefClass

    static name: string
}

export interface XsdTypeRestrictionDefPrivate {
}

export class XsdTypeRestrictionDefPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionDefPrivate

    static name: string
}

export interface XsdTypeRestrictionMinExclusiveClass {
}

export abstract class XsdTypeRestrictionMinExclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMinExclusivePrivate {
}

export class XsdTypeRestrictionMinExclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinExclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionMinInclusiveClass {
}

export abstract class XsdTypeRestrictionMinInclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMinInclusivePrivate {
}

export class XsdTypeRestrictionMinInclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinInclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionMaxExclusiveClass {
}

export abstract class XsdTypeRestrictionMaxExclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMaxExclusivePrivate {
}

export class XsdTypeRestrictionMaxExclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxExclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionMaxInclusiveClass {
}

export abstract class XsdTypeRestrictionMaxInclusiveClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusiveClass

    static name: string
}

export interface XsdTypeRestrictionMaxInclusivePrivate {
}

export class XsdTypeRestrictionMaxInclusivePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxInclusivePrivate

    static name: string
}

export interface XsdTypeRestrictionTotalDigitsClass {
}

export abstract class XsdTypeRestrictionTotalDigitsClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigitsClass

    static name: string
}

export interface XsdTypeRestrictionTotalDigitsPrivate {
}

export class XsdTypeRestrictionTotalDigitsPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionTotalDigitsPrivate

    static name: string
}

export interface XsdTypeRestrictionFractionDigitsClass {
}

export abstract class XsdTypeRestrictionFractionDigitsClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigitsClass

    static name: string
}

export interface XsdTypeRestrictionFractionDigitsPrivate {
}

export class XsdTypeRestrictionFractionDigitsPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionFractionDigitsPrivate

    static name: string
}

export interface XsdTypeRestrictionLengthClass {
}

export abstract class XsdTypeRestrictionLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLengthClass

    static name: string
}

export interface XsdTypeRestrictionLengthPrivate {
}

export class XsdTypeRestrictionLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionLengthPrivate

    static name: string
}

export interface XsdTypeRestrictionMinLengthClass {
}

export abstract class XsdTypeRestrictionMinLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLengthClass

    static name: string
}

export interface XsdTypeRestrictionMinLengthPrivate {
}

export class XsdTypeRestrictionMinLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMinLengthPrivate

    static name: string
}

export interface XsdTypeRestrictionMaxLengthClass {
}

export abstract class XsdTypeRestrictionMaxLengthClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLengthClass

    static name: string
}

export interface XsdTypeRestrictionMaxLengthPrivate {
}

export class XsdTypeRestrictionMaxLengthPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionMaxLengthPrivate

    static name: string
}

export interface XsdTypeRestrictionEnumerationClass {
}

export abstract class XsdTypeRestrictionEnumerationClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumerationClass

    static name: string
}

export interface XsdTypeRestrictionEnumerationPrivate {
}

export class XsdTypeRestrictionEnumerationPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionEnumerationPrivate

    static name: string
}

export interface XsdTypeRestrictionWhiteSpaceClass {
}

export abstract class XsdTypeRestrictionWhiteSpaceClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceClass

    static name: string
}

export interface XsdTypeRestrictionWhiteSpacePrivate {
}

export class XsdTypeRestrictionWhiteSpacePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpacePrivate

    static name: string
}

export interface XsdTypeRestrictionWhiteSpaceFixedClass {
}

export abstract class XsdTypeRestrictionWhiteSpaceFixedClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixedClass

    static name: string
}

export interface XsdTypeRestrictionWhiteSpaceFixedPrivate {
}

export class XsdTypeRestrictionWhiteSpaceFixedPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionWhiteSpaceFixedPrivate

    static name: string
}

export interface XsdTypeRestrictionPatternClass {
}

export abstract class XsdTypeRestrictionPatternClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPatternClass

    static name: string
}

export interface XsdTypeRestrictionPatternPrivate {
}

export class XsdTypeRestrictionPatternPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionPatternPrivate

    static name: string
}

export interface XsdTypeRestrictionAssertionClass {
}

export abstract class XsdTypeRestrictionAssertionClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertionClass

    static name: string
}

export interface XsdTypeRestrictionAssertionPrivate {
}

export class XsdTypeRestrictionAssertionPrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionAssertionPrivate

    static name: string
}

export interface XsdTypeRestrictionExplicitTimezoneClass {
}

export abstract class XsdTypeRestrictionExplicitTimezoneClass {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezoneClass

    static name: string
}

export interface XsdTypeRestrictionExplicitTimezonePrivate {
}

export class XsdTypeRestrictionExplicitTimezonePrivate {

    // Own properties of GXml-0.20.GXml.XsdTypeRestrictionExplicitTimezonePrivate

    static name: string
}

export interface XsdComplexTypeClass {
}

export abstract class XsdComplexTypeClass {

    // Own properties of GXml-0.20.GXml.XsdComplexTypeClass

    static name: string
}

export interface XsdComplexTypePrivate {
}

export class XsdComplexTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdComplexTypePrivate

    static name: string
}

export interface XsdExtensionClass {
}

export abstract class XsdExtensionClass {

    // Own properties of GXml-0.20.GXml.XsdExtensionClass

    static name: string
}

export interface XsdExtensionPrivate {
}

export class XsdExtensionPrivate {

    // Own properties of GXml-0.20.GXml.XsdExtensionPrivate

    static name: string
}

export interface XsdElementClass {
}

export abstract class XsdElementClass {

    // Own properties of GXml-0.20.GXml.XsdElementClass

    static name: string
}

export interface XsdElementPrivate {
}

export class XsdElementPrivate {

    // Own properties of GXml-0.20.GXml.XsdElementPrivate

    static name: string
}

export interface XsdAnnotationClass {
}

export abstract class XsdAnnotationClass {

    // Own properties of GXml-0.20.GXml.XsdAnnotationClass

    static name: string
}

export interface XsdAnnotationPrivate {
}

export class XsdAnnotationPrivate {

    // Own properties of GXml-0.20.GXml.XsdAnnotationPrivate

    static name: string
}

export interface XsdBaseTypeClass {
}

export abstract class XsdBaseTypeClass {

    // Own properties of GXml-0.20.GXml.XsdBaseTypeClass

    static name: string
}

export interface XsdBaseTypePrivate {
}

export class XsdBaseTypePrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseTypePrivate

    static name: string
}

export interface XsdBaseContentClass {
}

export abstract class XsdBaseContentClass {

    // Own properties of GXml-0.20.GXml.XsdBaseContentClass

    static name: string
}

export interface XsdBaseContentPrivate {
}

export class XsdBaseContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseContentPrivate

    static name: string
}

export interface XsdSimpleContentClass {
}

export abstract class XsdSimpleContentClass {

    // Own properties of GXml-0.20.GXml.XsdSimpleContentClass

    static name: string
}

export interface XsdSimpleContentPrivate {
}

export class XsdSimpleContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdSimpleContentPrivate

    static name: string
}

export interface XsdComplexContentClass {
}

export abstract class XsdComplexContentClass {

    // Own properties of GXml-0.20.GXml.XsdComplexContentClass

    static name: string
}

export interface XsdComplexContentPrivate {
}

export class XsdComplexContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdComplexContentPrivate

    static name: string
}

export interface XsdOpenContentClass {
}

export abstract class XsdOpenContentClass {

    // Own properties of GXml-0.20.GXml.XsdOpenContentClass

    static name: string
}

export interface XsdOpenContentPrivate {
}

export class XsdOpenContentPrivate {

    // Own properties of GXml-0.20.GXml.XsdOpenContentPrivate

    static name: string
}

export interface XsdBaseAttributeClass {
}

export abstract class XsdBaseAttributeClass {

    // Own properties of GXml-0.20.GXml.XsdBaseAttributeClass

    static name: string
}

export interface XsdBaseAttributePrivate {
}

export class XsdBaseAttributePrivate {

    // Own properties of GXml-0.20.GXml.XsdBaseAttributePrivate

    static name: string
}

export interface XsdAttributeClass {
}

export abstract class XsdAttributeClass {

    // Own properties of GXml-0.20.GXml.XsdAttributeClass

    static name: string
}

export interface XsdAttributePrivate {
}

export class XsdAttributePrivate {

    // Own properties of GXml-0.20.GXml.XsdAttributePrivate

    static name: string
}

export interface XsdAttributeGroupClass {
}

export abstract class XsdAttributeGroupClass {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroupClass

    static name: string
}

export interface XsdAttributeGroupPrivate {
}

export class XsdAttributeGroupPrivate {

    // Own properties of GXml-0.20.GXml.XsdAttributeGroupPrivate

    static name: string
}

export interface XsdListClass {
}

export abstract class XsdListClass {

    // Own properties of GXml-0.20.GXml.XsdListClass

    static name: string
}

export interface XsdListPrivate {
}

export class XsdListPrivate {

    // Own properties of GXml-0.20.GXml.XsdListPrivate

    static name: string
}

export interface XsdListElementsClass {
}

export abstract class XsdListElementsClass {

    // Own properties of GXml-0.20.GXml.XsdListElementsClass

    static name: string
}

export interface XsdListElementsPrivate {
}

export class XsdListElementsPrivate {

    // Own properties of GXml-0.20.GXml.XsdListElementsPrivate

    static name: string
}

export interface XsdListSimpleTypesClass {
}

export abstract class XsdListSimpleTypesClass {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypesClass

    static name: string
}

export interface XsdListSimpleTypesPrivate {
}

export class XsdListSimpleTypesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListSimpleTypesPrivate

    static name: string
}

export interface XsdListComplexTypesClass {
}

export abstract class XsdListComplexTypesClass {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypesClass

    static name: string
}

export interface XsdListComplexTypesPrivate {
}

export class XsdListComplexTypesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListComplexTypesPrivate

    static name: string
}

export interface XsdListTypeRestrictionEnumerationsClass {
}

export abstract class XsdListTypeRestrictionEnumerationsClass {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerationsClass

    static name: string
}

export interface XsdListTypeRestrictionEnumerationsPrivate {
}

export class XsdListTypeRestrictionEnumerationsPrivate {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionEnumerationsPrivate

    static name: string
}

export interface XsdListTypeRestrictionWhiteSpacesClass {
}

export abstract class XsdListTypeRestrictionWhiteSpacesClass {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpacesClass

    static name: string
}

export interface XsdListTypeRestrictionWhiteSpacesPrivate {
}

export class XsdListTypeRestrictionWhiteSpacesPrivate {

    // Own properties of GXml-0.20.GXml.XsdListTypeRestrictionWhiteSpacesPrivate

    static name: string
}

export interface XTextClass {
}

export abstract class XTextClass {

    // Own properties of GXml-0.20.GXml.XTextClass

    static name: string
}

export interface XTextPrivate {
}

export class XTextPrivate {

    // Own properties of GXml-0.20.GXml.XTextPrivate

    static name: string
}

export interface CollectionIface {

    // Own fields of GXml-0.20.GXml.CollectionIface

    search: (self: Collection) => void
    getItem: (self: Collection, index: number) => DomElement | null
    append: (self: Collection, node: DomElement) => void
    initialize: (self: Collection, t: GObject.GType) => void
    createItem: (self: Collection) => DomElement | null
    validateAppend: (self: Collection, index: number, element: DomElement) => boolean
    clear: (self: Collection) => void
    getNodesIndex: (self: Collection) => GLib.Queue
    getElement: (self: Collection) => DomElement
    setElement: (self: Collection, value: DomElement) => void
    getItemsName: (self: Collection) => string
    getItemsType: (self: Collection) => GObject.GType
    setItemsType: (self: Collection, value: GObject.GType) => void
    getLength: (self: Collection) => number
}

export abstract class CollectionIface {

    // Own properties of GXml-0.20.GXml.CollectionIface

    static name: string
}

export interface ListIface {
}

export abstract class ListIface {

    // Own properties of GXml-0.20.GXml.ListIface

    static name: string
}

export interface MappeableElementIface {

    // Own fields of GXml-0.20.GXml.MappeableElementIface

    getMapKey: (self: MappeableElement) => string
}

export abstract class MappeableElementIface {

    // Own properties of GXml-0.20.GXml.MappeableElementIface

    static name: string
}

export interface MapIface {

    // Own fields of GXml-0.20.GXml.MapIface

    item: (self: Map, key: string) => DomElement | null
    hasKey: (self: Map, key: string) => boolean
    getAttributeKey: (self: Map) => string
    setAttributeKey: (self: Map, value: string) => void
    getKeysSet: (self: Map) => Gee.Set
}

export abstract class MapIface {

    // Own properties of GXml-0.20.GXml.MapIface

    static name: string
}

export interface MappeableElementPairKeyIface {

    // Own fields of GXml-0.20.GXml.MappeableElementPairKeyIface

    getMapPrimaryKey: (self: MappeableElementPairKey) => string
    getMapSecondaryKey: (self: MappeableElementPairKey) => string
}

export abstract class MappeableElementPairKeyIface {

    // Own properties of GXml-0.20.GXml.MappeableElementPairKeyIface

    static name: string
}

export interface PairedMapIface {

    // Own fields of GXml-0.20.GXml.PairedMapIface

    item: (self: PairedMap, primaryKey: string, secondaryKey: string) => DomElement | null
    hasPrimaryKey: (self: PairedMap, key: string) => boolean
    hasSecondaryKey: (self: PairedMap, pkey: string, key: string) => boolean
    secondaryKeysSet: (self: PairedMap, pkey: string) => Gee.Set
    getAttributePrimaryKey: (self: PairedMap) => string
    setAttributePrimaryKey: (self: PairedMap, value: string) => void
    getAttributeSecondaryKey: (self: PairedMap) => string
    setAttributeSecondaryKey: (self: PairedMap, value: string) => void
    getPrimaryKeysSet: (self: PairedMap) => Gee.Set
}

export abstract class PairedMapIface {

    // Own properties of GXml-0.20.GXml.PairedMapIface

    static name: string
}

export interface MappeableElementThreeKeyIface {

    // Own fields of GXml-0.20.GXml.MappeableElementThreeKeyIface

    getMapPkey: (self: MappeableElementThreeKey) => string
    getMapSkey: (self: MappeableElementThreeKey) => string
    getMapTkey: (self: MappeableElementThreeKey) => string
}

export abstract class MappeableElementThreeKeyIface {

    // Own properties of GXml-0.20.GXml.MappeableElementThreeKeyIface

    static name: string
}

export interface ThreeMapIface {

    // Own fields of GXml-0.20.GXml.ThreeMapIface

    item: (self: ThreeMap, primaryKey: string, secondaryKey: string, thirdKey: string) => DomElement | null
    hasPrimaryKey: (self: ThreeMap, key: string) => boolean
    hasSecondaryKey: (self: ThreeMap, pkey: string, key: string) => boolean
    hasThirdKey: (self: ThreeMap, pkey: string, skey: string, key: string) => boolean
    secondaryKeysSet: (self: ThreeMap, pkey: string) => Gee.Set
    thirdKeysSet: (self: ThreeMap, pkey: string, skey: string) => Gee.Set
    getAttributePrimaryKey: (self: ThreeMap) => string
    setAttributePrimaryKey: (self: ThreeMap, value: string) => void
    getAttributeSecondaryKey: (self: ThreeMap) => string
    setAttributeSecondaryKey: (self: ThreeMap, value: string) => void
    getAttributeThirdKey: (self: ThreeMap) => string
    setAttributeThirdKey: (self: ThreeMap, value: string) => void
    getPrimaryKeysSet: (self: ThreeMap) => Gee.Set
}

export abstract class ThreeMapIface {

    // Own properties of GXml-0.20.GXml.ThreeMapIface

    static name: string
}

export interface CollectionParentIface {

    // Own fields of GXml-0.20.GXml.CollectionParentIface

    getTypes: (self: CollectionParent) => GLib.HashTable
}

export abstract class CollectionParentIface {

    // Own properties of GXml-0.20.GXml.CollectionParentIface

    static name: string
}

export interface DomAttrIface {

    // Own fields of GXml-0.20.GXml.DomAttrIface

    getNamespaceUri: (self: DomAttr) => string | null
    getPrefix: (self: DomAttr) => string | null
    getLocalName: (self: DomAttr) => string
    getName: (self: DomAttr) => string
    getValue: (self: DomAttr) => string
    setValue: (self: DomAttr, value: string) => void
    getSpecified: (self: DomAttr) => boolean
}

export abstract class DomAttrIface {

    // Own properties of GXml-0.20.GXml.DomAttrIface

    static name: string
}

export interface DomCharacterDataIface {

    // Own fields of GXml-0.20.GXml.DomCharacterDataIface

    substringData: (self: DomCharacterData, offset: number, count: number) => string
    appendData: (self: DomCharacterData, data: string) => void
    insertData: (self: DomCharacterData, offset: number, data: string) => void
    deleteData: (self: DomCharacterData, offset: number, count: number) => void
    replaceData: (self: DomCharacterData, offset: number, count: number, data: string) => void
    getData: (self: DomCharacterData) => string
    setData: (self: DomCharacterData, value: string) => void
    getLength: (self: DomCharacterData) => number
}

export abstract class DomCharacterDataIface {

    // Own properties of GXml-0.20.GXml.DomCharacterDataIface

    static name: string
}

export interface DomTextIface {

    // Own fields of GXml-0.20.GXml.DomTextIface

    splitText: (self: DomText, offset: number) => DomText
    getWholeText: (self: DomText) => string
}

export abstract class DomTextIface {

    // Own properties of GXml-0.20.GXml.DomTextIface

    static name: string
}

export interface DomProcessingInstructionIface {

    // Own fields of GXml-0.20.GXml.DomProcessingInstructionIface

    getTarget: (self: DomProcessingInstruction) => string
}

export abstract class DomProcessingInstructionIface {

    // Own properties of GXml-0.20.GXml.DomProcessingInstructionIface

    static name: string
}

export interface DomCommentIface {
}

export abstract class DomCommentIface {

    // Own properties of GXml-0.20.GXml.DomCommentIface

    static name: string
}

export interface DomNonElementParentNodeIface {

    // Own fields of GXml-0.20.GXml.DomNonElementParentNodeIface

    getElementById: (self: DomNonElementParentNode, elementId: string) => DomElement | null
}

export abstract class DomNonElementParentNodeIface {

    // Own properties of GXml-0.20.GXml.DomNonElementParentNodeIface

    static name: string
}

export interface DomParentNodeIface {

    // Own fields of GXml-0.20.GXml.DomParentNodeIface

    querySelector: (self: DomParentNode, selectors: string) => DomElement | null
    querySelectorAll: (self: DomParentNode, selectors: string) => DomNodeList
    getElementsByPropertyValue: (self: DomParentNode, property: string, value: string) => DomElementList
    getChildren: (self: DomParentNode) => DomHTMLCollection
    getFirstElementChild: (self: DomParentNode) => DomElement | null
    getLastElementChild: (self: DomParentNode) => DomElement | null
    getChildElementCount: (self: DomParentNode) => number
}

export abstract class DomParentNodeIface {

    // Own properties of GXml-0.20.GXml.DomParentNodeIface

    static name: string
}

export interface DomNonDocumentTypeChildNodeIface {

    // Own fields of GXml-0.20.GXml.DomNonDocumentTypeChildNodeIface

    getPreviousElementSibling: (self: DomNonDocumentTypeChildNode) => DomElement | null
    getNextElementSibling: (self: DomNonDocumentTypeChildNode) => DomElement | null
}

export abstract class DomNonDocumentTypeChildNodeIface {

    // Own properties of GXml-0.20.GXml.DomNonDocumentTypeChildNodeIface

    static name: string
}

export interface DomChildNodeIface {

    // Own fields of GXml-0.20.GXml.DomChildNodeIface

    remove: (self: DomChildNode) => void
}

export abstract class DomChildNodeIface {

    // Own properties of GXml-0.20.GXml.DomChildNodeIface

    static name: string
}

export interface DomNodeListIface {

    // Own fields of GXml-0.20.GXml.DomNodeListIface

    item: (self: DomNodeList, index: number) => DomNode | null
    getLength: (self: DomNodeList) => number
}

export abstract class DomNodeListIface {

    // Own properties of GXml-0.20.GXml.DomNodeListIface

    static name: string
}

export interface DomHTMLCollectionIface {

    // Own fields of GXml-0.20.GXml.DomHTMLCollectionIface

    getElement: (self: DomHTMLCollection, index: number) => DomElement | null
    toArray: () => [ /* returnType */ DomElement[], /* resultLength1 */ number ]
    item: (self: DomHTMLCollection, index: number) => DomElement | null
    namedItem: (self: DomHTMLCollection, name: string) => DomElement | null
    getLength: (self: DomHTMLCollection) => number
}

export abstract class DomHTMLCollectionIface {

    // Own properties of GXml-0.20.GXml.DomHTMLCollectionIface

    static name: string
}

export interface DomNodeIteratorIface {

    // Own fields of GXml-0.20.GXml.DomNodeIteratorIface

    nextNode: (self: DomNodeIterator) => DomNode | null
    previousNode: (self: DomNodeIterator) => DomNode | null
    detach: (self: DomNodeIterator) => void
    getRoot: (self: DomNodeIterator) => DomNode
    getReferenceNode: (self: DomNodeIterator) => DomNode
    getPointerBeforeReferenceNode: (self: DomNodeIterator) => boolean
    getWhatToShow: (self: DomNodeIterator) => number
}

export abstract class DomNodeIteratorIface {

    // Own properties of GXml-0.20.GXml.DomNodeIteratorIface

    static name: string
}

export interface DomTreeWalkerIface {

    // Own fields of GXml-0.20.GXml.DomTreeWalkerIface

    parentNode: (self: DomTreeWalker) => DomNode | null
    firstChild: (self: DomTreeWalker) => DomNode | null
    lastChild: (self: DomTreeWalker) => DomNode | null
    previousSibling: (self: DomTreeWalker) => DomNode | null
    nextSibling: (self: DomTreeWalker) => DomNode | null
    previousNode: (self: DomTreeWalker) => DomNode | null
    nextNode: (self: DomTreeWalker) => DomNode | null
    getRoot: (self: DomTreeWalker) => DomNode
    getWhatToShow: (self: DomTreeWalker) => number
    getCurrentNode: (self: DomTreeWalker) => DomNode
}

export abstract class DomTreeWalkerIface {

    // Own properties of GXml-0.20.GXml.DomTreeWalkerIface

    static name: string
}

export interface DomNamedNodeMapIface {

    // Own fields of GXml-0.20.GXml.DomNamedNodeMapIface

    item: (self: DomNamedNodeMap, index: number) => DomNode | null
    getNamedItem: (self: DomNamedNodeMap, name: string) => DomNode | null
    setNamedItem: (self: DomNamedNodeMap, node: DomNode) => DomNode | null
    removeNamedItem: (self: DomNamedNodeMap, name: string) => DomNode | null
    removeNamedItemNs: (self: DomNamedNodeMap, namespaceUri: string, localName: string) => DomNode | null
    getNamedItemNs: (self: DomNamedNodeMap, namespaceUri: string, localName: string) => DomNode | null
    setNamedItemNs: (self: DomNamedNodeMap, node: DomNode) => DomNode | null
    getLength: (self: DomNamedNodeMap) => number
}

export abstract class DomNamedNodeMapIface {

    // Own properties of GXml-0.20.GXml.DomNamedNodeMapIface

    static name: string
}

export interface DomTokenListIface {

    // Own fields of GXml-0.20.GXml.DomTokenListIface

    item: (self: DomTokenList, index: number) => string | null
    contains: (self: DomTokenList, token: string) => boolean
    add: (self: DomTokenList, tokens: string[]) => void
    remove: (self: DomTokenList, tokens: string[]) => void
    toggle: (self: DomTokenList, token: string, force: boolean, auto: boolean) => boolean
    toString: (self: DomTokenList) => string
    getLength: (self: DomTokenList) => number
}

export abstract class DomTokenListIface {

    // Own properties of GXml-0.20.GXml.DomTokenListIface

    static name: string
}

export interface DomSettableTokenListIface {

    // Own fields of GXml-0.20.GXml.DomSettableTokenListIface

    getValue: (self: DomSettableTokenList) => string
    setValue: (self: DomSettableTokenList, value: string) => void
}

export abstract class DomSettableTokenListIface {

    // Own properties of GXml-0.20.GXml.DomSettableTokenListIface

    static name: string
}

export interface DomDocumentIface {

    // Own fields of GXml-0.20.GXml.DomDocumentIface

    getElementsByTagName: (self: DomDocument, localName: string) => DomHTMLCollection
    getElementsByTagNameNs: (self: DomDocument, namespace: string | null, localName: string) => DomHTMLCollection
    getElementsByClassName: (self: DomDocument, classNames: string) => DomHTMLCollection
    createElement: (self: DomDocument, localName: string) => DomElement
    createElementNs: (self: DomDocument, namespace: string | null, qualifiedName: string) => DomElement
    createDocumentFragment: (self: DomDocument) => DomDocumentFragment
    createTextNode: (self: DomDocument, data: string) => DomText
    createComment: (self: DomDocument, data: string) => DomComment
    createProcessingInstruction: (self: DomDocument, target: string, data: string) => DomProcessingInstruction
    importNode: (self: DomDocument, node: DomNode, deep: boolean) => DomNode
    adoptNode: (self: DomDocument, node: DomNode) => DomNode
    createEvent: (self: DomDocument, interface: string) => DomEvent
    createRange: (self: DomDocument) => DomRange
    createNodeIterator: (self: DomDocument, root: DomNode, whatToShow: number) => DomNodeIterator
    createTreeWalker: (self: DomDocument, root: DomNode, whatToShow: number) => DomTreeWalker
    writeFile: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    writeFileAsync: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeFileFinish: (self: DomDocument, res: Gio.AsyncResult) => void
    writeStream: (self: DomDocument, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null) => void
    writeStreamAsync: (self: DomDocument, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeStreamFinish: (self: DomDocument, res: Gio.AsyncResult) => void
    createStream: (self: DomDocument) => Gio.InputStream
    createStreamAsync: (self: DomDocument, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    createStreamFinish: (self: DomDocument, res: Gio.AsyncResult) => Gio.InputStream
    writeString: (self: DomDocument, cancellable: Gio.Cancellable | null) => string
    writeStringAsync: (self: DomDocument, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeStringFinish: (self: DomDocument, res: Gio.AsyncResult) => string
    readFromFile: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null) => void
    readFromFileAsync: (self: DomDocument, file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromFileFinish: (self: DomDocument, res: Gio.AsyncResult) => void
    readFromString: (self: DomDocument, str: string, cancellable: Gio.Cancellable | null) => void
    readFromStringAsync: (self: DomDocument, str: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromStringFinish: (self: DomDocument, res: Gio.AsyncResult) => void
    readFromStream: (self: DomDocument, stream: Gio.InputStream, cancellable: Gio.Cancellable | null) => void
    readFromStreamAsync: (self: DomDocument, stream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromStreamFinish: (self: DomDocument, res: Gio.AsyncResult) => void
    getXmlParser: (self: DomDocument) => Parser
    setXmlParser: (self: DomDocument, parser: Parser) => void
    getImplementation: (self: DomDocument) => DomImplementation
    getUrl: (self: DomDocument) => string
    getDocumentUri: (self: DomDocument) => string
    getOrigin: (self: DomDocument) => string
    getCompatMode: (self: DomDocument) => string
    getCharacterSet: (self: DomDocument) => string
    getContentType: (self: DomDocument) => string
    getDoctype: (self: DomDocument) => DomDocumentType | null
    getDocumentElement: (self: DomDocument) => DomElement | null
}

export abstract class DomDocumentIface {

    // Own properties of GXml-0.20.GXml.DomDocumentIface

    static name: string
}

export interface DomXMLDocumentIface {
}

export abstract class DomXMLDocumentIface {

    // Own properties of GXml-0.20.GXml.DomXMLDocumentIface

    static name: string
}

export interface DomImplementationIface {

    // Own fields of GXml-0.20.GXml.DomImplementationIface

    createDocumentType: (self: DomImplementation, qualifiedName: string, publicId: string, systemId: string) => DomDocumentType
    createDocument: (self: DomImplementation, nspace: string | null, qualifiedName: string | null, doctype: DomDocumentType | null) => DomXMLDocument
    createHtmlDocument: (self: DomImplementation, title: string) => DomDocument
    hasFeature: (self: DomImplementation) => boolean
}

export abstract class DomImplementationIface {

    // Own properties of GXml-0.20.GXml.DomImplementationIface

    static name: string
}

export interface DomDocumentFragmentIface {
}

export abstract class DomDocumentFragmentIface {

    // Own properties of GXml-0.20.GXml.DomDocumentFragmentIface

    static name: string
}

export interface DomDocumentTypeIface {

    // Own fields of GXml-0.20.GXml.DomDocumentTypeIface

    getName: (self: DomDocumentType) => string
    getPublicId: (self: DomDocumentType) => string
    getSystemId: (self: DomDocumentType) => string
}

export abstract class DomDocumentTypeIface {

    // Own properties of GXml-0.20.GXml.DomDocumentTypeIface

    static name: string
}

export interface DomHtmlDocumentIface {

    // Own fields of GXml-0.20.GXml.DomHtmlDocumentIface

    readFromString: (self: DomHtmlDocument, str: string) => void
    readFromStringTolerant: (self: DomHtmlDocument, str: string) => void
    toHtml: (self: DomHtmlDocument) => string
}

export abstract class DomHtmlDocumentIface {

    // Own properties of GXml-0.20.GXml.DomHtmlDocumentIface

    static name: string
}

export interface DomElementIface {

    // Own fields of GXml-0.20.GXml.DomElementIface

    getAttribute: (self: DomElement, name: string) => string | null
    getAttributeNs: (self: DomElement, namespace: string | null, localName: string) => string | null
    setAttribute: (self: DomElement, name: string, value: string) => void
    setAttributeNs: (self: DomElement, namespace: string | null, name: string, value: string) => void
    removeAttribute: (self: DomElement, name: string) => void
    removeAttributeNs: (self: DomElement, namespace: string | null, localName: string) => void
    hasAttribute: (self: DomElement, name: string) => boolean
    hasAttributeNs: (self: DomElement, namespace: string | null, localName: string) => boolean
    getElementsByTagName: (self: DomElement, localName: string) => DomHTMLCollection
    getElementsByTagNameNs: (self: DomElement, namespace: string | null, localName: string) => DomHTMLCollection
    getElementsByClassName: (self: DomElement, classNames: string) => DomHTMLCollection
    matches: (self: DomElement, selectors: string) => boolean
    readFromUri: (self: DomElement, uri: string) => void
    readFromUriAsync: (self: DomElement, uri: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromUriFinish: (self: DomElement, res: Gio.AsyncResult) => void
    readFromFile: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null) => void
    readFromFileAsync: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromFileFinish: (self: DomElement, res: Gio.AsyncResult) => void
    readFromStream: (self: DomElement, istream: Gio.InputStream, cancellable: Gio.Cancellable | null) => void
    readFromStreamAsync: (self: DomElement, istream: Gio.InputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromStreamFinish: (self: DomElement, res: Gio.AsyncResult) => void
    readFromString: (self: DomElement, str: string, cancellable: Gio.Cancellable | null) => void
    readFromStringAsync: (self: DomElement, str: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    readFromStringFinish: (self: DomElement, res: Gio.AsyncResult) => void
    writeString: (self: DomElement, cancellable: Gio.Cancellable | null) => string
    writeStringAsync: (self: DomElement, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeStringFinish: (self: DomElement, res: Gio.AsyncResult) => string
    writeFile: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null) => void
    writeFileAsync: (self: DomElement, f: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeFileFinish: (self: DomElement, res: Gio.AsyncResult) => void
    writeStream: (self: DomElement, stream: Gio.OutputStream) => void
    writeStreamAsync: (self: DomElement, stream: Gio.OutputStream, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    writeStreamFinish: (self: DomElement, res: Gio.AsyncResult) => void
    createStream: (self: DomElement) => Gio.InputStream
    createStreamAsync: (self: DomElement, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    createStreamFinish: (self: DomElement, res: Gio.AsyncResult) => Gio.InputStream
    getNamespaceUri: (self: DomElement) => string | null
    getPrefix: (self: DomElement) => string | null
    getLocalName: (self: DomElement) => string
    getTagName: (self: DomElement) => string
    getId: (self: DomElement) => string | null
    setId: (self: DomElement, value: string | null) => void
    getClassName: (self: DomElement) => string | null
    setClassName: (self: DomElement, value: string | null) => void
    getClassList: (self: DomElement) => DomTokenList
    getAttributes: (self: DomElement) => DomNamedNodeMap
}

export abstract class DomElementIface {

    // Own properties of GXml-0.20.GXml.DomElementIface

    static name: string
}

export interface DomEventTargetIface {

    // Own fields of GXml-0.20.GXml.DomEventTargetIface

    addEventListener: (self: DomEventTarget, type: string, callback: DomEventListener | null, capture: boolean) => void
    removeEventListener: (self: DomEventTarget, type: string, callback: DomEventListener | null, capture: boolean) => void
    dispatchEvent: (self: DomEventTarget, event: DomEvent) => boolean
}

export abstract class DomEventTargetIface {

    // Own properties of GXml-0.20.GXml.DomEventTargetIface

    static name: string
}

export interface DomEventListenerIface {

    // Own fields of GXml-0.20.GXml.DomEventListenerIface

    handleEvent: (self: DomEventListener, event: DomEvent) => void
}

export abstract class DomEventListenerIface {

    // Own properties of GXml-0.20.GXml.DomEventListenerIface

    static name: string
}

export interface DomEventIface {

    // Own fields of GXml-0.20.GXml.DomEventIface

    stopPropagation: (self: DomEvent) => void
    stopImmediatePropagation: (self: DomEvent) => void
    preventDefault: (self: DomEvent) => void
    initEvent: (self: DomEvent, type: string, bubbles: boolean, cancelable: boolean) => void
    getEtype: (self: DomEvent) => string
    getEventTarget: (self: DomEvent) => DomEventTarget | null
    getCurrentTarget: (self: DomEvent) => DomEventTarget | null
    getBubbles: (self: DomEvent) => boolean
    getCancelable: (self: DomEvent) => boolean
    getIsTrusted: (self: DomEvent) => boolean
    getTimeStamp: (self: DomEvent) => DomTimeStamp
    getDefaultPrevented: (self: DomEvent) => boolean
    getEventPhase: (self: DomEvent) => DomEventPhase
}

export abstract class DomEventIface {

    // Own properties of GXml-0.20.GXml.DomEventIface

    static name: string
}

export interface DomCustomEventIface {

    // Own fields of GXml-0.20.GXml.DomCustomEventIface

    initCustomEvent: (self: DomCustomEvent, type: string, bubbles: boolean, cancelable: boolean, detail: any) => void
    getDetail: (self: DomCustomEvent) => /* result */ any
}

export abstract class DomCustomEventIface {

    // Own properties of GXml-0.20.GXml.DomCustomEventIface

    static name: string
}

export interface DomMutationObserverIface {

    // Own fields of GXml-0.20.GXml.DomMutationObserverIface

    observe: (self: DomMutationObserver, target: Node, options: DomMutationObserverInit) => void
    disconnect: (self: DomMutationObserver) => void
    takeRecords: (self: DomMutationObserver) => Gee.List
}

export abstract class DomMutationObserverIface {

    // Own properties of GXml-0.20.GXml.DomMutationObserverIface

    static name: string
}

export interface DomMutationRecordIface {

    // Own fields of GXml-0.20.GXml.DomMutationRecordIface

    getMtype: (self: DomMutationRecord) => string
    getTarget: (self: DomMutationRecord) => DomNode
    getAddedNodes: (self: DomMutationRecord) => DomNodeList
    setAddedNodes: (self: DomMutationRecord, value: DomNodeList) => void
    getRemovedNodes: (self: DomMutationRecord) => DomNodeList
    setRemovedNodes: (self: DomMutationRecord, value: DomNodeList) => void
    getPreviousSibling: (self: DomMutationRecord) => DomNode | null
    getNextSibling: (self: DomMutationRecord) => DomNode | null
    getAttributeName: (self: DomMutationRecord) => string | null
    getAttributeNamespace: (self: DomMutationRecord) => string | null
    getOldValue: (self: DomMutationRecord) => string | null
}

export abstract class DomMutationRecordIface {

    // Own properties of GXml-0.20.GXml.DomMutationRecordIface

    static name: string
}

export interface DomNodeIface {

    // Own fields of GXml-0.20.GXml.DomNodeIface

    hasChildNodes: (self: DomNode) => boolean
    normalize: (self: DomNode) => void
    isEqualNode: (self: DomNode, node: DomNode | null) => boolean
    compareDocumentPosition: (self: DomNode, other: DomNode) => DomNodeDocumentPosition
    contains: (self: DomNode, other: DomNode | null) => boolean
    lookupPrefix: (self: DomNode, nspace: string | null) => string | null
    lookupNamespaceUri: (self: DomNode, prefix: string | null) => string | null
    isDefaultNamespace: (self: DomNode, nspace: string | null) => boolean
    insertBefore: (self: DomNode, node: DomNode, child: DomNode | null) => DomNode
    appendChild: (self: DomNode, node: DomNode) => DomNode
    replaceChild: (self: DomNode, node: DomNode, child: DomNode) => DomNode
    removeChild: (self: DomNode, child: DomNode) => DomNode
    getNodeType: (self: DomNode) => DomNodeNodeType
    getNodeName: (self: DomNode) => string
    getBaseUri: (self: DomNode) => string | null
    getOwnerDocument: (self: DomNode) => DomDocument | null
    setOwnerDocument: (self: DomNode, value: DomDocument | null) => void
    getParentNode: (self: DomNode) => DomNode | null
    getParentElement: (self: DomNode) => DomElement | null
    getChildNodes: (self: DomNode) => DomNodeList
    getFirstChild: (self: DomNode) => DomNode | null
    getLastChild: (self: DomNode) => DomNode | null
    getPreviousSibling: (self: DomNode) => DomNode | null
    getNextSibling: (self: DomNode) => DomNode | null
    getNodeValue: (self: DomNode) => string | null
    setNodeValue: (self: DomNode, value: string | null) => void
    getTextContent: (self: DomNode) => string | null
    setTextContent: (self: DomNode, value: string | null) => void
}

export abstract class DomNodeIface {

    // Own properties of GXml-0.20.GXml.DomNodeIface

    static name: string
}

export interface DomRangeIface {

    // Own fields of GXml-0.20.GXml.DomRangeIface

    setStart: (self: DomRange, node: DomNode, offset: number) => void
    setEnd: (self: DomRange, node: DomNode, offset: number) => void
    setStartBefore: (self: DomRange, node: DomNode) => void
    setStartAfter: (self: DomRange, node: DomNode) => void
    setEndBefore: (self: DomRange, node: DomNode) => void
    setEndAfter: (self: DomRange, node: DomNode) => void
    collapse: (self: DomRange, toStart: boolean) => void
    selectNode: (self: DomRange, node: DomNode) => void
    selectNodeContents: (self: DomRange, node: DomNode) => void
    compareBoundaryPoints: (self: DomRange, how: DomRangeBoundaryPoints, sourceRange: DomRange) => number
    deleteContents: (self: DomRange) => void
    extractContents: (self: DomRange) => DomDocumentFragment | null
    cloneContents: (self: DomRange) => DomDocumentFragment | null
    insertNode: (self: DomRange, node: DomNode) => void
    surroundContents: (self: DomRange, newParent: DomNode) => void
    cloneRange: (self: DomRange) => DomRange
    detach: (self: DomRange) => void
    isPointInRange: (self: DomRange, node: DomNode, offset: number) => boolean
    comparePoint: (self: DomRange, node: DomNode, offset: number) => number
    intersectsNode: (self: DomRange, node: DomNode) => boolean
    toString: (self: DomRange) => string
    getStartContainer: (self: DomRange) => DomNode
    getStartOffset: (self: DomRange) => number
    getEndContainer: (self: DomRange) => DomNode
    getEndOffset: (self: DomRange) => number
    getCollapsed: (self: DomRange) => boolean
    getCommonAncestorContainer: (self: DomRange) => DomNode
}

export abstract class DomRangeIface {

    // Own properties of GXml-0.20.GXml.DomRangeIface

    static name: string
}

export interface IXsdSchemaIface {

    // Own fields of GXml-0.20.GXml.IXsdSchemaIface

    getElementDefinitions: (self: IXsdSchema) => IXsdListElements
    setElementDefinitions: (self: IXsdSchema, value: IXsdListElements) => void
    getSimpleTypeDefinitions: (self: IXsdSchema) => IXsdListSimpleTypes
    setSimpleTypeDefinitions: (self: IXsdSchema, value: IXsdListSimpleTypes) => void
    getComplexTypeDefinitions: (self: IXsdSchema) => IXsdListComplexTypes
    setComplexTypeDefinitions: (self: IXsdSchema, value: IXsdListComplexTypes) => void
}

export abstract class IXsdSchemaIface {

    // Own properties of GXml-0.20.GXml.IXsdSchemaIface

    static name: string
}

export interface IXsdBaseTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseTypeIface

    getAnotation: (self: IXsdBaseType) => IXsdAnnotation
    setAnotation: (self: IXsdBaseType, value: IXsdAnnotation) => void
}

export abstract class IXsdBaseTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseTypeIface

    static name: string
}

export interface IXsdSimpleTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdSimpleTypeIface

    getFinal: (self: IXsdSimpleType) => string
    setFinal: (self: IXsdSimpleType, value: string) => void
    getId: (self: IXsdSimpleType) => string
    setId: (self: IXsdSimpleType, value: string) => void
    getName: (self: IXsdSimpleType) => string
    setName: (self: IXsdSimpleType, value: string) => void
    getAnnotation: (self: IXsdSimpleType) => IXsdAnnotation
    setAnnotation: (self: IXsdSimpleType, value: IXsdAnnotation) => void
    getList: (self: IXsdSimpleType) => IXsdTypeList
    setList: (self: IXsdSimpleType, value: IXsdTypeList) => void
    getUnion: (self: IXsdSimpleType) => IXsdTypeUnion
    setUnion: (self: IXsdSimpleType, value: IXsdTypeUnion) => void
    getRestriction: (self: IXsdSimpleType) => IXsdTypeRestriction
    setRestriction: (self: IXsdSimpleType, value: IXsdTypeRestriction) => void
}

export abstract class IXsdSimpleTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdSimpleTypeIface

    static name: string
}

export interface IXsdTypeDefIface {
}

export abstract class IXsdTypeDefIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeDefIface

    static name: string
}

export interface IXsdTypeRestrictionIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionIface

    getBase: (self: IXsdTypeRestriction) => string
    setBase: (self: IXsdTypeRestriction, value: string) => void
    getId: (self: IXsdTypeRestriction) => string
    setId: (self: IXsdTypeRestriction, value: string) => void
    getSimpleType: (self: IXsdTypeRestriction) => IXsdSimpleType
    setSimpleType: (self: IXsdTypeRestriction, value: IXsdSimpleType) => void
    getEnumerations: (self: IXsdTypeRestriction) => IXsdListTypeRestrictionEnumerations
    setEnumerations: (self: IXsdTypeRestriction, value: IXsdListTypeRestrictionEnumerations) => void
    getWhiteSpaces: (self: IXsdTypeRestriction) => IXsdListTypeRestrictionWhiteSpaces
    setWhiteSpaces: (self: IXsdTypeRestriction, value: IXsdListTypeRestrictionWhiteSpaces) => void
}

export abstract class IXsdTypeRestrictionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionIface

    static name: string
}

export interface IXsdTypeListIface {
}

export abstract class IXsdTypeListIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeListIface

    static name: string
}

export interface IXsdTypeUnionIface {
}

export abstract class IXsdTypeUnionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeUnionIface

    static name: string
}

export interface IXsdTypeRestrictionDefIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionDefIface

    getAnnotation: (self: IXsdTypeRestrictionDef) => IXsdAnnotation
    setAnnotation: (self: IXsdTypeRestrictionDef, value: IXsdAnnotation) => void
}

export abstract class IXsdTypeRestrictionDefIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionDefIface

    static name: string
}

export interface IXsdTypeRestrictionMinExclusiveIface {
}

export abstract class IXsdTypeRestrictionMinExclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinExclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionMinInclusiveIface {
}

export abstract class IXsdTypeRestrictionMinInclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinInclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionMaxExclusiveIface {
}

export abstract class IXsdTypeRestrictionMaxExclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxExclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionMaxInclusiveIface {
}

export abstract class IXsdTypeRestrictionMaxInclusiveIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxInclusiveIface

    static name: string
}

export interface IXsdTypeRestrictionTotalDigitsIface {
}

export abstract class IXsdTypeRestrictionTotalDigitsIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionTotalDigitsIface

    static name: string
}

export interface IXsdTypeRestrictionFractionDigitsIface {
}

export abstract class IXsdTypeRestrictionFractionDigitsIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionFractionDigitsIface

    static name: string
}

export interface IXsdTypeRestrictionLengthIface {
}

export abstract class IXsdTypeRestrictionLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionLengthIface

    static name: string
}

export interface IXsdTypeRestrictionMinLengthIface {
}

export abstract class IXsdTypeRestrictionMinLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMinLengthIface

    static name: string
}

export interface IXsdTypeRestrictionMaxLengthIface {
}

export abstract class IXsdTypeRestrictionMaxLengthIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionMaxLengthIface

    static name: string
}

export interface IXsdTypeRestrictionEnumerationIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionEnumerationIface

    getId: (self: IXsdTypeRestrictionEnumeration) => string
    setId: (self: IXsdTypeRestrictionEnumeration, value: string) => void
    getValue: (self: IXsdTypeRestrictionEnumeration) => string
    setValue: (self: IXsdTypeRestrictionEnumeration, value: string) => void
}

export abstract class IXsdTypeRestrictionEnumerationIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionEnumerationIface

    static name: string
}

export interface IXsdTypeRestrictionWhiteSpaceIface {

    // Own fields of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpaceIface

    getFixed: (self: IXsdTypeRestrictionWhiteSpace) => boolean
    setFixed: (self: IXsdTypeRestrictionWhiteSpace, value: boolean) => void
    getId: (self: IXsdTypeRestrictionWhiteSpace) => string
    setId: (self: IXsdTypeRestrictionWhiteSpace, value: string) => void
    getValue: (self: IXsdTypeRestrictionWhiteSpace) => string
    setValue: (self: IXsdTypeRestrictionWhiteSpace, value: string) => void
}

export abstract class IXsdTypeRestrictionWhiteSpaceIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionWhiteSpaceIface

    static name: string
}

export interface IXsdTypeRestrictionPatternIface {
}

export abstract class IXsdTypeRestrictionPatternIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionPatternIface

    static name: string
}

export interface IXsdTypeRestrictionAssertionIface {
}

export abstract class IXsdTypeRestrictionAssertionIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionAssertionIface

    static name: string
}

export interface IXsdTypeRestrictionExplicitTimezoneIface {
}

export abstract class IXsdTypeRestrictionExplicitTimezoneIface {

    // Own properties of GXml-0.20.GXml.IXsdTypeRestrictionExplicitTimezoneIface

    static name: string
}

export interface IXsdComplexTypeIface {

    // Own fields of GXml-0.20.GXml.IXsdComplexTypeIface

    getAbstract: (self: IXsdComplexType) => boolean
    setAbstract: (self: IXsdComplexType, value: boolean) => void
    getBlock: (self: IXsdComplexType) => string
    setBlock: (self: IXsdComplexType, value: string) => void
    getFinal: (self: IXsdComplexType) => string
    setFinal: (self: IXsdComplexType, value: string) => void
    getMixed: (self: IXsdComplexType) => boolean
    setMixed: (self: IXsdComplexType, value: boolean) => void
    getName: (self: IXsdComplexType) => string
    setName: (self: IXsdComplexType, value: string) => void
    getDefaultAttributesApply: (self: IXsdComplexType) => boolean
    setDefaultAttributesApply: (self: IXsdComplexType, value: boolean) => void
    getContentType: (self: IXsdComplexType) => IXsdBaseContent
    setContentType: (self: IXsdComplexType, value: IXsdBaseContent) => void
    getTypeAttributes: (self: IXsdComplexType) => IXsdListAttributes
    getGroupAttributes: (self: IXsdComplexType) => IXsdListAttributesGroup
}

export abstract class IXsdComplexTypeIface {

    // Own properties of GXml-0.20.GXml.IXsdComplexTypeIface

    static name: string
}

export interface IXsdExtensionIface {

    // Own fields of GXml-0.20.GXml.IXsdExtensionIface

    getBase: (self: IXsdExtension) => string
    setBase: (self: IXsdExtension, value: string) => void
}

export abstract class IXsdExtensionIface {

    // Own properties of GXml-0.20.GXml.IXsdExtensionIface

    static name: string
}

export interface IXsdElementIface {

    // Own fields of GXml-0.20.GXml.IXsdElementIface

    getAbstract: (self: IXsdElement) => boolean
    setAbstract: (self: IXsdElement, value: boolean) => void
    getBlock: (self: IXsdElement) => string
    setBlock: (self: IXsdElement, value: string) => void
    getDefault: (self: IXsdElement) => string
    setDefault: (self: IXsdElement, value: string) => void
    getFinal: (self: IXsdElement) => string
    setFinal: (self: IXsdElement, value: string) => void
    getFixed: (self: IXsdElement) => string
    setFixed: (self: IXsdElement, value: string) => void
    getForm: (self: IXsdElement) => string
    setForm: (self: IXsdElement, value: string) => void
    getId: (self: IXsdElement) => string | null
    setId: (self: IXsdElement, value: string | null) => void
    getMaxOccurs: (self: IXsdElement) => string
    setMaxOccurs: (self: IXsdElement, value: string) => void
    getMinOccurs: (self: IXsdElement) => string
    setMinOccurs: (self: IXsdElement, value: string) => void
    getName: (self: IXsdElement) => string
    setName: (self: IXsdElement, value: string) => void
    getNillable: (self: IXsdElement) => boolean
    setNillable: (self: IXsdElement, value: boolean) => void
    getRef: (self: IXsdElement) => string
    setRef: (self: IXsdElement, value: string) => void
    getSubstitutionGroup: (self: IXsdElement) => DomTokenList
    setSubstitutionGroup: (self: IXsdElement, value: DomTokenList) => void
    getTargetNamespace: (self: IXsdElement) => string
    setTargetNamespace: (self: IXsdElement, value: string) => void
    getObjectType: (self: IXsdElement) => string
    setObjectType: (self: IXsdElement, value: string) => void
    getAnotation: (self: IXsdElement) => IXsdAnnotation
    setAnotation: (self: IXsdElement, value: IXsdAnnotation) => void
    getSimpleType: (self: IXsdElement) => IXsdSimpleType
    setSimpleType: (self: IXsdElement, value: IXsdSimpleType) => void
    getComplexType: (self: IXsdElement) => IXsdComplexType
    setComplexType: (self: IXsdElement, value: IXsdComplexType) => void
}

export abstract class IXsdElementIface {

    // Own properties of GXml-0.20.GXml.IXsdElementIface

    static name: string
}

export interface IXsdAnnotationIface {
}

export abstract class IXsdAnnotationIface {

    // Own properties of GXml-0.20.GXml.IXsdAnnotationIface

    static name: string
}

export interface IXsdBaseContentIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseContentIface

    getAnotation: (self: IXsdBaseContent) => IXsdAnnotation
    setAnotation: (self: IXsdBaseContent, value: IXsdAnnotation) => void
}

export abstract class IXsdBaseContentIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseContentIface

    static name: string
}

export interface IXsdSimpleContentIface {
}

export abstract class IXsdSimpleContentIface {

    // Own properties of GXml-0.20.GXml.IXsdSimpleContentIface

    static name: string
}

export interface IXsdComplexContentIface {
}

export abstract class IXsdComplexContentIface {

    // Own properties of GXml-0.20.GXml.IXsdComplexContentIface

    static name: string
}

export interface IXsdOpenContentIface {
}

export abstract class IXsdOpenContentIface {

    // Own properties of GXml-0.20.GXml.IXsdOpenContentIface

    static name: string
}

export interface IXsdBaseAttributeIface {

    // Own fields of GXml-0.20.GXml.IXsdBaseAttributeIface

    getAnotation: (self: IXsdBaseAttribute) => IXsdAnnotation
    setAnotation: (self: IXsdBaseAttribute, value: IXsdAnnotation) => void
}

export abstract class IXsdBaseAttributeIface {

    // Own properties of GXml-0.20.GXml.IXsdBaseAttributeIface

    static name: string
}

export interface IXsdAttributeIface {
}

export abstract class IXsdAttributeIface {

    // Own properties of GXml-0.20.GXml.IXsdAttributeIface

    static name: string
}

export interface IXsdAttributeGroupIface {
}

export abstract class IXsdAttributeGroupIface {

    // Own properties of GXml-0.20.GXml.IXsdAttributeGroupIface

    static name: string
}

export interface IXsdListIface {

    // Own fields of GXml-0.20.GXml.IXsdListIface

    getItem: (self: IXsdList, index: number) => DomElement | null
    append: (self: IXsdList, element: DomElement) => void
    remove: (self: IXsdList, index: number) => void
    indexOf: (self: IXsdList, element: DomElement) => number
    getElement: (self: IXsdList) => DomElement
    setElement: (self: IXsdList, value: DomElement) => void
    getItemsType: (self: IXsdList) => GObject.GType
    setItemsType: (self: IXsdList, value: GObject.GType) => void
    getItemsName: (self: IXsdList) => GObject.GType
    setItemsName: (self: IXsdList, value: GObject.GType) => void
    getLength: (self: IXsdList) => number
}

export abstract class IXsdListIface {

    // Own properties of GXml-0.20.GXml.IXsdListIface

    static name: string
}

export interface IXsdListElementsIface {
}

export abstract class IXsdListElementsIface {

    // Own properties of GXml-0.20.GXml.IXsdListElementsIface

    static name: string
}

export interface IXsdListSimpleTypesIface {
}

export abstract class IXsdListSimpleTypesIface {

    // Own properties of GXml-0.20.GXml.IXsdListSimpleTypesIface

    static name: string
}

export interface IXsdListComplexTypesIface {
}

export abstract class IXsdListComplexTypesIface {

    // Own properties of GXml-0.20.GXml.IXsdListComplexTypesIface

    static name: string
}

export interface IXsdListAttributesIface {
}

export abstract class IXsdListAttributesIface {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesIface

    static name: string
}

export interface IXsdListAttributesGroupIface {
}

export abstract class IXsdListAttributesGroupIface {

    // Own properties of GXml-0.20.GXml.IXsdListAttributesGroupIface

    static name: string
}

export interface IXsdListTypeRestrictionEnumerationsIface {
}

export abstract class IXsdListTypeRestrictionEnumerationsIface {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionEnumerationsIface

    static name: string
}

export interface IXsdListTypeRestrictionWhiteSpacesIface {
}

export abstract class IXsdListTypeRestrictionWhiteSpacesIface {

    // Own properties of GXml-0.20.GXml.IXsdListTypeRestrictionWhiteSpacesIface

    static name: string
}

export interface ObjectIface {

    // Own fields of GXml-0.20.GXml.ObjectIface

    getPropertiesList: (self: Object) => GObject.ParamSpec[]
    findPropertyName: (self: Object, nick: string) => GObject.ParamSpec | null
    findObjectPropertyName: (self: Object, pname: string) => GObject.ParamSpec | null
    getPropertyElementList: (self: Object) => GObject.ParamSpec[]
    getPropertyString: (self: Object, prop: GObject.ParamSpec) => string | null
    getAttribute: (self: Object, name: string) => string | null
    findProperty: (self: Object, name: string) => Property | null
    setAttribute: (self: Object, name: string, val: string) => boolean
    getChild: (self: Object, name: string) => DomElement | null
    findElements: (self: Object, name: string) => DomElementList
    removeAttribute: (self: Object, name: string) => boolean
    setInstanceProperty: (self: Object, name: string) => boolean
    cleanPropertyElements: (self: Object, name: string) => void
}

export abstract class ObjectIface {

    // Own properties of GXml-0.20.GXml.ObjectIface

    static name: string
}

export interface ParserIface {

    // Own fields of GXml-0.20.GXml.ParserIface

    writeFile: (self: Parser, file: Gio.File) => void
    writeFileAsync: (self: Parser, file: Gio.File, callback: Gio.AsyncReadyCallback | null) => void
    writeFileFinish: (self: Parser, res: Gio.AsyncResult) => void
    writeString: (self: Parser) => string
    writeStringAsync: (self: Parser, callback: Gio.AsyncReadyCallback | null) => void
    writeStringFinish: (self: Parser, res: Gio.AsyncResult) => string
    writeStream: (self: Parser, stream: Gio.OutputStream) => void
    writeStreamAsync: (self: Parser, stream: Gio.OutputStream, callback: Gio.AsyncReadyCallback | null) => void
    writeStreamFinish: (self: Parser, res: Gio.AsyncResult) => void
    readFile: (self: Parser, file: Gio.File) => void
    readFileAsync: (self: Parser, file: Gio.File, callback: Gio.AsyncReadyCallback | null) => void
    readFileFinish: (self: Parser, res: Gio.AsyncResult) => void
    readStream: (self: Parser, stream: Gio.InputStream) => void
    readStreamAsync: (self: Parser, stream: Gio.InputStream, callback: Gio.AsyncReadyCallback | null) => void
    readStreamFinish: (self: Parser, res: Gio.AsyncResult) => void
    readString: (self: Parser, str: string) => void
    readStringAsync: (self: Parser, str: string, callback: Gio.AsyncReadyCallback | null) => void
    readStringFinish: (self: Parser, res: Gio.AsyncResult) => void
    createStream: (self: Parser) => Gio.InputStream
    createStreamAsync: (self: Parser, callback: Gio.AsyncReadyCallback | null) => void
    createStreamFinish: (self: Parser, res: Gio.AsyncResult) => Gio.InputStream
    readChildNodes: (self: Parser, parent: DomNode) => void
    readChildNodesAsync: (self: Parser, parent: DomNode, callback: Gio.AsyncReadyCallback | null) => void
    readChildNodesFinish: (self: Parser, res: Gio.AsyncResult) => void
    readChildNode: (self: Parser, parent: DomNode) => boolean
    readChildElement: (self: Parser, parent: DomNode) => boolean
    readElementProperty: (self: Parser, parent: DomNode) => [ /* returnType */ boolean, /* element */ DomNode ]
    addElementCollection: (self: Parser, parent: DomNode) => [ /* returnType */ boolean, /* element */ DomNode ]
    readChildNodesStream: (self: Parser, istream: Gio.InputStream) => void
    readChildNodesString: (self: Parser, str: string) => void
    readUnparsed: (self: Parser) => string
    moveNextNode: (self: Parser) => boolean
    currentIsEmptyElement: (self: Parser) => boolean
    currentIsElement: (self: Parser) => boolean
    currentIsDocument: (self: Parser) => boolean
    currentNodeName: (self: Parser) => string
    createElement: (self: Parser, parent: DomNode) => DomElement | null
    readElement: (self: Parser, element: DomElement) => void
    getBackup: (self: Parser) => boolean
    setBackup: (self: Parser, value: boolean) => void
    getIndent: (self: Parser) => boolean
    setIndent: (self: Parser, value: boolean) => void
    getCancellable: (self: Parser) => Gio.Cancellable | null
    setCancellable: (self: Parser, value: Gio.Cancellable | null) => void
    getNode: (self: Parser) => DomNode
    getTypes: (self: Parser) => GLib.HashTable
}

export abstract class ParserIface {

    // Own properties of GXml-0.20.GXml.ParserIface

    static name: string
}

export interface PropertyIface {

    // Own fields of GXml-0.20.GXml.PropertyIface

    validateValue: (self: Property, val: string | null) => boolean
    getValue: (self: Property) => string | null
    setValue: (self: Property, value: string | null) => void
}

export abstract class PropertyIface {

    // Own properties of GXml-0.20.GXml.PropertyIface

    static name: string
}

export interface XPathContextIface {

    // Own fields of GXml-0.20.GXml.XPathContextIface

    evaluate: (self: XPathContext, expression: string, resolver: Gee.Map | null) => XPathObject
}

export abstract class XPathContextIface {

    // Own properties of GXml-0.20.GXml.XPathContextIface

    static name: string
}

export interface XPathObjectIface {

    // Own fields of GXml-0.20.GXml.XPathObjectIface

    getObjectType: (self: XPathObject) => XPathObjectType
    getBooleanValue: (self: XPathObject) => boolean
    getStringValue: (self: XPathObject) => string
    getNumberValue: (self: XPathObject) => number
    getNodeset: (self: XPathObject) => DomHTMLCollection
}

export abstract class XPathObjectIface {

    // Own properties of GXml-0.20.GXml.XPathObjectIface

    static name: string
}
