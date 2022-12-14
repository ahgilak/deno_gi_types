
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Dee-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Error codes for the ICU extension to Dee. These codes will be set when the
 * error domain is #DEE_ICU_ERROR.
 */
export enum ICUError {
    /**
     * Error parsing a transliteration rule
     */
    BAD_RULE,
    /**
     * Error parsing a transliterator system id
     */
    BAD_ID,
    /**
     * The ICU subsystem returned an error that is not
     *                         handled in Dee
     */
    UNKNOWN,
}
/**
 * Enumeration defining behavior of the model with regards to writes from
 * other peers in the swarm.
 */
export enum SharedModelAccessMode {
    WORLD_WRITABLE,
    LEADER_WRITABLE,
}
export enum SharedModelError {
    SHARED_MODEL_ERROR_LEADER_INVALIDATED,
}
/**
 * Enumeration defining flushing behavior of a shared model.
 */
export enum SharedModelFlushMode {
    AUTOMATIC,
    MANUAL,
}
/**
 * Error codes for the #DeeTransaction class. These codes will be set when the
 * error domain is #DEE_TRANSACTION_ERROR.
 */
export enum TransactionError {
    /**
     * The target model has been
     *   modified while the transaction was open.
     */
    CONCURRENT_MODIFICATION,
    /**
     * Raised when someone tries to commit a
     *   transaction that has already been committed
     */
    COMMITTED,
}
/**
 * Flags passed to dee_index_lookup() to control how matching is done.
 * Note that it is not required that index backends support more than just
 * #DEE_TERM_MATCH_EXACT.
 * 
 * You can query for the supported flags with
 * dee_index_get_supported_term_match_flags().
 * @bitfield 
 */
export enum TermMatchFlag {
    /**
     * Match terms byte for byte as specified in the
     *                        query string
     */
    EXACT,
    /**
     * Match if the indexed term begins with the byte string
     *                         being queried by. This is also sometimes known as
     *                         truncated- or wildcard queries
     */
    PREFIX,
}
export const PEER_DBUS_IFACE: string
/**
 * String constant defining the name of the DBus Model interface.
 */
export const SEQUENCE_MODEL_DBUS_IFACE: string
/**
 * String constant defining the name of the DBus Model interface.
 */
export const SHARED_MODEL_DBUS_IFACE: string
/**
 * Create a new #DeeFilter with the given parameters. This call will zero
 * the `out_filter` struct.
 * @param mapFunc The #DeeFilterMapFunc to use for the filter
 * @param mapNotify The #DeeFilterMapNotify to use for the filter
 */
export function filterNew(mapFunc: FilterMapFunc, mapNotify: FilterMapNotify): /* outFilter */ Filter
/**
 * Create a #DeeFilter that takes string values from a column in the model
 * and builds a #DeeFilterModel with the rows sorted according to the
 * collation rules of the current locale.
 * @param column The index of a column containing the strings to sort after
 */
export function filterNewCollator(column: number): /* outFilter */ Filter
/**
 * Create a #DeeFilter that takes string values from a column in the model
 * and builds a #DeeFilterModel with the rows sorted descending according to the
 * collation rules of the current locale.
 * @param column The index of a column containing the strings to sort after
 */
export function filterNewCollatorDesc(column: number): /* outFilter */ Filter
/**
 * Create a #DeeFilter that only includes rows from the original model
 * which match a variant value in a given column. A #DeeFilterModel
 * created with this filter will be ordered in accordance with its parent model.
 * 
 * This method will work on any column, disregarding its schema, since the
 * value comparison is done using g_variant_equal(). This means you can use
 * this filter as a convenient fallback when there is no predefined filter
 * for your column type if raw performance is not paramount.
 * @param column The index of a column containing the string to match
 * @param value A #GVariant value columns must match exactly.         The matching semantics are those of g_variant_equal(). If `value`         is floating the ownership will be transfered to the filter
 */
export function filterNewForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
/**
 * Create a #DeeFilter that only includes rows from the original model
 * which has an exact match on some string column. A #DeeFilterModel created
 * with this filter will be ordered in accordance with its parent model.
 * @param column The index of a column containing the string key to match
 * @param key 
 */
export function filterNewForKeyColumn(column: number, key: string): /* outFilter */ Filter
/**
 * Create a #DeeFilter that only includes rows from the original model
 * which match a regular expression on some string column. A #DeeFilterModel
 * created with this filter will be ordered in accordance with its parent model.
 * @param column The index of a column containing the string to match
 * @param regex The regular expression `column` must match
 */
export function filterNewRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
/**
 * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
 * @param cmpRow A #DeeCompareRowFunc to use for sorting
 */
export function filterNewSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
export function icuErrorQuark(): GLib.Quark
/**
 * Create a new #DeeModelReader with the given parameters. This call will zero
 * the `out_reader` struct.
 * @param readerFunc The #DeeModelReaderFunc to use for the reader
 */
export function modelReaderNew(readerFunc: ModelReaderFunc): /* outReader */ ModelReader
/**
 * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
 * @param column The column index to read a %gint32 from
 */
export function modelReaderNewForInt32Column(column: number): /* outReader */ ModelReader
/**
 * A #DeeModelReader reading a string from a #DeeModel at a given column
 * @param column The column index to read a string from
 */
export function modelReaderNewForStringColumn(column: number): /* outReader */ ModelReader
/**
 * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
 * @param column The column index to read a %guint32 from
 */
export function modelReaderNewForUint32Column(column: number): /* outReader */ ModelReader
/**
 * Get a pointer to the platform default #DeeResourceManager.
 */
export function resourceManagerGetDefault(): ResourceManager
/**
 * Reconstruct a #DeeSerializable from #GVariant data. For this function
 * to work you need to register a parser with
 * dee_serializable_register_parser(). Any native Dee class will do so
 * automatically.
 * 
 * This method only works on data created with dee_serializable_serialize()
 * and <emphasis>not</emphasis> with data from dee_serializable_externalize().
 * 
 * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
 * it can be guaranteed that this function only returns %NULL in case there
 * is no known parser for `type` and #GVariant signature of `data`.
 * @param data The #GVariant data to parse. If this is a floating reference it will        be consumed
 * @param type The #GType of the class to instantiate from `data`
 */
export function serializableParse(data: GLib.Variant, type: GObject.GType): GObject.Object
/**
 * Reconstruct a #DeeSerializable from #GVariant data. For this function
 * to work you need to register a parser with
 * dee_serializable_register_parser(). Any native Dee class will do so
 * automatically.
 * 
 * This method only works on data created with dee_serializable_externalize()
 * and <emphasis>not</emphasis> with data from  dee_serializable_serialize().
 * 
 * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
 * it can be guaranteed that this function only returns %NULL in case there
 * is no known parser for the #GType or #GVariant signature of `data`.
 * @param data The #GVariant data to parse
 */
export function serializableParseExternal(data: GLib.Variant): GObject.Object
/**
 * A collator takes an input string, most often a term produced from a
 * #DeeAnalyzer, and outputs a collation key.
 * @callback 
 * @param input The string to produce a collation key for
 */
export interface CollatorFunc {
    (input: string): string
}
/**
 * Compares `row1` and `row2`. Mainly used with dee_model_insert_sorted() and
 * dee_model_find_sorted().
 * @callback 
 * @param row1 The model being indexed
 * @param row2 The row to extract terms for
 */
export interface CompareRowFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
/**
 * Compares `row1` and `row2`. Mainly used with
 * dee_model_insert_row_sorted_with_sizes() and
 * dee_model_find_row_sorted_with_sizes().
 * @callback 
 * @param row1 Row data
 * @param row2 Row data to compare with
 */
export interface CompareRowSizedFunc {
    (row1: GLib.Variant[], row2: GLib.Variant[]): number
}
/**
 * Function used to collect the rows from a model that should be included in
 * a #DeeFilterModel. To add rows to `filter_model` use the methods
 * dee_filter_model_append_iter(), dee_filter_model_prepend_iter(),
 * dee_filter_model_insert_iter(), and dee_filter_model_insert_iter_before().
 * 
 * The iteration over the original model is purposely left to the map func
 * in order to allow optimized iterations if the the caller has a priori
 * knowledge of the sorting and grouping of the data in the original model.
 * @callback 
 * @param origModel The model containing the original data to filter
 * @param filterModel The model that will contain the filtered results. The                filter func must iterate over `orig_model` and add all relevant                rows to `filter_model`. This model is guaranteed to be empty                when the filter func is invoked
 */
export interface FilterMapFunc {
    (origModel: Model, filterModel: FilterModel): void
}
/**
 * Callback invoked when a row is added to `orig_model`. To add rows to
 * `filter_model` use the methods dee_filter_model_append_iter(),
 * dee_filter_model_prepend_iter(), dee_filter_model_insert_iter(),
 * and dee_filter_model_insert_iter_before().
 * @callback 
 * @param origModel The model containing the added row
 * @param origIter A #DeeModelIter pointing to the new row in `orig_model`
 * @param filterModel The model that was also passed to the #DeeModelMapFunc                of the #DeeFilter this functions is a part of
 */
export interface FilterMapNotify {
    (origModel: Model, origIter: ModelIter, filterModel: FilterModel): boolean
}
/**
 * The signature of the function passed to dee_index_foreach().
 * 
 * Be cautious if you plan on modifying the rows in the model via the
 * DeeModelIter<!-- -->s you find. Your code may have to be reentrant since
 * the index may change in reaction to the changes in the model. It's not
 * impossible to do this in a non-broken manner, but it may likely require
 * you calling dee_model_freeze_signals() and dee_model_thaw_signals() at
 * strategic points.
 * @callback 
 * @param key A key in the index being traversed
 * @param rows A #DeeResultSet. Do not free or modify.
 */
export interface IndexIterFunc {
    (key: string, rows: ResultSet): boolean
}
/**
 * Extracts a string from a row in a model.
 * @callback 
 * @param model The model being indexed
 * @param iter The row to extract terms for
 */
export interface ModelReaderFunc {
    (model: Model, iter: ModelIter): string
}
export interface SerializableParseFunc {
    (data: GLib.Variant): GObject.Object
}
/**
 * A term filter takes a list of terms and runs it through a filtering and/or
 * set of transformations and stores the output in a #DeeTermList.
 * 
 * You can register term filters on a #DeeAnalyzer with
 * dee_analyzer_add_term_filter().
 * @callback 
 * @param termsIn A #DeeTermList with the terms to filter
 * @param termsOut A #DeeTermList to write the filtered terms to
 */
export interface TermFilterFunc {
    (termsIn: TermList, termsOut: TermList): void
}
export module Model {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changeset-finished`
     */
    export interface ChangesetFinishedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `changeset-started`
     */
    export interface ChangesetStartedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `row-added`
     */
    export interface RowAddedSignalCallback {
        (iter: ModelIter): void
    }

    /**
     * Signal callback interface for `row-changed`
     */
    export interface RowChangedSignalCallback {
        (iter: ModelIter): void
    }

    /**
     * Signal callback interface for `row-removed`
     */
    export interface RowRemovedSignalCallback {
        (iter: ModelIter): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Model {

    // Owm methods of Dee-1.0.Dee.Model

    // Has conflict: appendRow(rowMembers: GLib.Variant[]): ModelIter
    // Has conflict: beginChangeset(): void
    // Has conflict: clear(): void
    /**
     * This method is purely syntactic sugar for calling dee_model_set_tag() with
     * a `value` of %NULL. It's included in order to help developers write more
     * readable code.
     * @param iter The row to clear the tag from
     * @param tag The tag to clear from `iter`
     */
    clearTag(iter: ModelIter, tag: ModelTag): void
    // Has conflict: endChangeset(): void
    // Has conflict: findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    /**
     * Like dee_model_find_row_sorted(), but uses DeeCompareRowSizedFunc and
     * therefore doesn't cause trouble when used from introspected languages.
     * 
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() (or dee_model_insert_row_sorted_with_sizes())
     * to insert rows in the model.
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSortedWithSizes(rowSpec: GLib.Variant[], cmpFunc: CompareRowSizedFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    // Has conflict: getBool(iter: ModelIter, column: number): boolean
    // Has conflict: getColumnIndex(columnName: string): number
    // Has conflict: getColumnNames(): string[]
    // Has conflict: getColumnSchema(column: number): string
    // Has conflict: getDouble(iter: ModelIter, column: number): number
    // Has conflict: getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    // Has conflict: getFirstIter(): ModelIter
    // Has conflict: getInt32(iter: ModelIter, column: number): number
    // Has conflict: getInt64(iter: ModelIter, column: number): number
    // Has conflict: getIterAtRow(row: number): ModelIter
    // Has conflict: getLastIter(): ModelIter
    // Has conflict: getNColumns(): number
    // Has conflict: getNRows(): number
    // Has conflict: getPosition(iter: ModelIter): number
    // Has conflict: getRow(iter: ModelIter): [ /* returnType */ GLib.Variant[], /* outRowMembers */ GLib.Variant[] ]
    // Has conflict: getSchema(): string[]
    // Has conflict: getString(iter: ModelIter, column: number): string
    // Has conflict: getTag(iter: ModelIter, tag: ModelTag): object | null
    // Has conflict: getUchar(iter: ModelIter, column: number): number
    // Has conflict: getUint32(iter: ModelIter, column: number): number
    // Has conflict: getUint64(iter: ModelIter, column: number): number
    // Has conflict: getValue(iter: ModelIter, column: number): GLib.Variant
    // Has conflict: getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    // Has conflict: getVardictSchema(column: number): GLib.HashTable
    // Has conflict: insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    // Has conflict: insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    // Has conflict: insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSortedWithSizes(rowMembers: GLib.Variant[], cmpFunc: CompareRowSizedFunc): ModelIter
    // Has conflict: isFirst(iter: ModelIter): boolean
    // Has conflict: isLast(iter: ModelIter): boolean
    // Has conflict: next(iter: ModelIter): ModelIter
    // Has conflict: prependRow(rowMembers: GLib.Variant[]): ModelIter
    // Has conflict: prev(iter: ModelIter): ModelIter
    // Has conflict: registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    // Has conflict: registerVardictSchema(column: number, schemas: GLib.HashTable): void
    // Has conflict: remove(iter: ModelIter): void
    // Has conflict: setColumnNamesFull(columnNames: string[]): void
    // Has conflict: setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    // Has conflict: setSchemaFull(columnSchemas: string[]): void
    // Has conflict: setTag(iter: ModelIter, tag: ModelTag, value: object | null): void
    // Has conflict: setValue(iter: ModelIter, column: number, value: GLib.Variant): void

    // Own virtual methods of Dee-1.0.Dee.Model

    /**
     * Like dee_model_append() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a prior knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param rowMembers An array of  #GVariants with type               signature matching those of the column schemas of `self`.               If any of the variants have floating references they will be               consumed
     */
    appendRow(rowMembers: GLib.Variant[]): ModelIter
    /**
     * Notify listeners that the model is about to be changed, which means that
     * multiple row additions / changes / removals will follow.
     * The default implementation of this method will emit
     * the ::changeset-started signal.
     * 
     * It is not stricly necessary to enclose every change to a model
     * in a dee_model_begin_changeset() and dee_model_end_changeset() calls, but
     * doing so is highly recommended and allows implementing various optimizations.
     * 
     * The usual way to perform multiple changes to a model is as follows:
     * 
     * <programlisting>
     * void update_model (DeeModel *model)
     * {
     *   GVariant **added_row_data1 = ...;
     *   GVariant **added_row_data2 = ...;
     * 
     *   dee_model_begin_changeset (model);
     * 
     *   dee_model_remove (model, dee_model_get_first_iter (model));
     *   dee_model_append_row (model, added_row_data1);
     *   dee_model_append_row (model, added_row_data2);
     * 
     *   dee_model_end_changeset (model);
     * }
     * </programlisting>
     * @virtual 
     */
    beginChangeset(): void
    changesetFinished(): void
    changesetStarted(): void
    /**
     * Removes all rows in the model. Signals are emitted for each row in the model
     * @virtual 
     */
    clear(): void
    /**
     * Notify listeners that all changes have been committed to the model.
     * The default implementation of this method will emit
     * the ::changeset-finished signal.
     * 
     * See also dee_model_begin_changeset().
     * @virtual 
     */
    endChangeset(): void
    /**
     * Finds a row in `self` according to the sorting specified by `cmp_func`.
     * This method will assume that `self` is already sorted by `cmp_func`.
     * 
     * If you use this method for searching you should only use
     * dee_model_insert_row_sorted() to insert rows in the model.
     * @virtual 
     * @param rowSpec An array of       #GVariants with type signature matching those of the       column schemas of `self`. No references will be taken on the variants.
     * @param cmpFunc Callback used for comparison or rows
     */
    findRowSorted(rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc): [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    getBool(iter: ModelIter, column: number): boolean
    /**
     * Get the column index of a column.
     * @virtual 
     * @param columnName the column name to retrieve the index of
     */
    getColumnIndex(columnName: string): number
    /**
     * Get a %NULL-terminated array of column names for the columns of `self`.
     * These names can be used in calls to dee_model_build_named_row().
     * @virtual 
     */
    getColumnNames(): string[]
    /**
     * Get the #GVariant signature of a column
     * @virtual 
     * @param column the column to get retrieve the #GVariant type string of
     */
    getColumnSchema(column: number): string
    getDouble(iter: ModelIter, column: number): number
    /**
     * Get the #GVariant signature of field previously registered with
     * dee_model_register_vardict_schema().
     * @virtual 
     * @param fieldName name of vardict field to get schema of
     */
    getFieldSchema(fieldName: string): [ /* returnType */ string, /* outColumn */ number ]
    /**
     * Retrieves a #DeeModelIter representing the first row in `self`.
     * @virtual 
     */
    getFirstIter(): ModelIter
    getInt32(iter: ModelIter, column: number): number
    getInt64(iter: ModelIter, column: number): number
    /**
     * Retrieves a #DeeModelIter representing the row at the given index.
     * 
     * Note that this method does not have any performance guarantees. In particular
     * it is not guaranteed to be <emphasis>O(1)</emphasis>.
     * @virtual 
     * @param row position of the row to retrieve
     */
    getIterAtRow(row: number): ModelIter
    /**
     * Retrieves a #DeeModelIter pointing right <emphasis>after</emphasis> the
     * last row in `self`. This is refered to also the the
     * <emphasis>end iter</emphasis>.
     * 
     * As with other iters the end iter, in particular, is stable over inserts,
     * changes, or removals.
     * @virtual 
     */
    getLastIter(): ModelIter
    /**
     * Gets the number of columns in `self`
     * @virtual 
     */
    getNColumns(): number
    /**
     * Gets the number of rows in `self`
     * @virtual 
     */
    getNRows(): number
    /**
     * Get the numeric offset of `iter` into `self`. Note that this method is
     * <emphasis>not</emphasis>  guaranteed to be <emphasis>O(1)</emphasis>.
     * @virtual 
     * @param iter The iter to get the position of
     */
    getPosition(iter: ModelIter): number
    getRow(iter: ModelIter, outRowMembers: GLib.Variant): GLib.Variant
    /**
     * Get a %NULL-terminated array of #GVariant type strings that defines the
     * required formats for the columns of `self`.
     * @virtual 
     */
    getSchema(): string[]
    getString(iter: ModelIter, column: number): string
    /**
     * Look up a tag value for a given row in a model. This method is guaranteed
     * to be O(1).
     * @virtual 
     * @param iter A #DeeModelIter pointing to the row to get the tag from
     * @param tag The tag handle to retrieve the tag value for
     */
    getTag(iter: ModelIter, tag: ModelTag): object | null
    getUchar(iter: ModelIter, column: number): number
    getUint32(iter: ModelIter, column: number): number
    getUint64(iter: ModelIter, column: number): number
    getValue(iter: ModelIter, column: number): GLib.Variant
    getValueByName(iter: ModelIter, columnName: string): GLib.Variant
    /**
     * Get a schema for variant dictionary column previously registered using
     * dee_model_register_vardict_schema().
     * @virtual 
     * @param numColumn 
     */
    getVardictSchema(numColumn: number): GLib.HashTable
    /**
     * As dee_model_insert(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param pos The index to insert the row on. The existing row will be pushed down.
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    insertRow(pos: number, rowMembers: GLib.Variant[]): ModelIter
    /**
     * As dee_model_insert_before(), but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param iter An iter pointing to the row before which to insert the new one
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     */
    insertRowBefore(iter: ModelIter, rowMembers: GLib.Variant[]): ModelIter
    /**
     * Inserts a row in `self` according to the sorting specified by `cmp_func`.
     * If you use this method for insertion you should not use other methods as this
     * method assumes the model to be already sorted by `cmp_func`.
     * @virtual 
     * @param rowMembers An array of       #GVariants with type signature matching those of the       column schemas of `self`. If any of the variants have floating       references they will be consumed.
     * @param cmpFunc Callback used for comparison or rows
     */
    insertRowSorted(rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc): ModelIter
    /**
     * Checks if `iter` is the very first iter `self`.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    isFirst(iter: ModelIter): boolean
    /**
     * Whether `iter` is the end iter of `self`. Note that the end iter points
     * right <emphasis>after</emphasis> the last valid row in `self`.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    isLast(iter: ModelIter): boolean
    /**
     * Returns a #DeeModelIter that points to the next position in the model.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    next(iter: ModelIter): ModelIter
    /**
     * Like dee_model_prepend() but intended for language bindings or
     * situations where you work with models on a meta level and may not have
     * a priori knowledge of the column schemas of the models. See also
     * dee_model_build_row().
     * @virtual 
     * @param rowMembers An array of               #GVariants with type signature matching those of               the column schemas of `self`. If any of the variants have               floating references they will be consumed.
     */
    prependRow(rowMembers: GLib.Variant[]): ModelIter
    /**
     * Returns a #DeeModelIter that points to the previous position in the model.
     * @virtual 
     * @param iter a #DeeModelIter
     */
    prev(iter: ModelIter): ModelIter
    /**
     * Register a new tag on a #DeeModel. A <emphasis>tag</emphasis> is an extra
     * value attached to a given row on a model. The tags are invisible to all
     * that doesn't have the tag handle returned by this method. #DeeModel
     * implementations must ensure that dee_model_get_tag() is an O(1) operation.
     * 
     * Tags can be very useful in associating some extra data to a row in a model
     * and have that automatically synced when the model changes. If you're
     * writing a tiled view for a model you might want to tag each row with the
     * tile widget for that row. That way you have very convenient access to the
     * tile widget given any row in the model.
     * 
     * The private nature of tags and the fact that you can store arbitrary pointers
     * and binary data in them also means that they are not serialized if you
     * utilize a model implementation that exposes the #DeeSerializable interface.
     * @virtual 
     * @param tagDestroy Function called when a tagged row is removed from the model.               This function will also be called on all tagged rows when the               model is finalized.
     */
    registerTag(tagDestroy: GLib.DestroyNotify): ModelTag
    /**
     * Register schema for fields in a model containing column with variant
     * dictionary schema ('a{sv}').
     * The keys registered with this function can be later used
     * with dee_model_build_named_row() function, as well as
     * dee_model_get_value_by_name(). Note that it is possible to register
     * the same field name for multiple columns, in which case you need to use
     * fully-qualified "column_name::field" name in the calls to
     * dee_model_build_named_row() and dee_model_get_field_schema().
     * @virtual 
     * @param numColumn 
     * @param schemas hashtable with keys specifying           names of the fields and values defining their schema
     */
    registerVardictSchema(numColumn: number, schemas: GLib.HashTable): void
    /**
     * Removes the row at the given position from the model.
     * @virtual 
     * @param iter a #DeeModelIter pointing to the row to remove
     */
    remove(iter: ModelIter): void
    rowAdded(iter: ModelIter): void
    rowChanged(iter: ModelIter): void
    rowRemoved(iter: ModelIter): void
    /**
     * Set column names used by `self`.
     * This method must be called exactly once, but only after setting
     * a schema of the model. Note that some constructors will do this for you.
     * @virtual 
     * @param columnNames A list of column names terminated by a %NULL
     */
    setColumnNamesFull(columnNames: string[]): void
    /**
     * Sets all columns in the row `iter` points to, to those found in
     * `row_members`. The variants in `row_members` must match the types defined in
     * the model's schema.
     * @virtual 
     * @param iter a #DeeModelIter
     * @param rowMembers And array of               #GVariant<!-- -->s with type signature matching               those from the model schema. If any of the variants have               floating references these will be consumed
     */
    setRow(iter: ModelIter, rowMembers: GLib.Variant[]): void
    /**
     * Set the #GVariant types and the number of columns used by `self`.
     * This method must be called exactly once before using `self`. Note that
     * some constructors will do this for you.
     * @virtual 
     * @param columnSchemas A list of #GVariant type strings terminated by a %NULL
     */
    setSchemaFull(columnSchemas: string[]): void
    /**
     * Set a tag on a row in a model. This function is guaranteed to be O(1).
     * See also dee_model_register_tag().
     * 
     * If `tag` is already set on this row the existing tag value will be destroyed
     * with the #GDestroyNotify passed to the dee_model_register_tag().
     * @virtual 
     * @param iter The row to set the tag on
     * @param tag The tag handle for the tag as obtained from dee_model_register_tag()
     * @param value The value to set for `tag`. Note that %NULL represents an unset tag
     */
    setTag(iter: ModelIter, tag: ModelTag, value: object | null): void
    /**
     * Sets the data in `column` for the row `iter` points to, to `value`. The type
     * of `value` must be convertible to the type of the column.
     * 
     * When this method call completes the model will emit ::row-changed. You can
     * edit the model in place without triggering the change signals by calling
     * dee_model_set_value_silently().
     * @virtual 
     * @param iter a #DeeModelIter
     * @param column column number to set the value
     * @param value New value for cell. If `value` is a floating reference the model         will assume ownership of the variant
     */
    setValue(iter: ModelIter, column: number, value: GLib.Variant): void

    // Own signals of Dee-1.0.Dee.Model

    connect(sigName: "changeset-finished", callback: Model.ChangesetFinishedSignalCallback): number
    on(sigName: "changeset-finished", callback: Model.ChangesetFinishedSignalCallback): number
    once(sigName: "changeset-finished", callback: Model.ChangesetFinishedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changeset-finished", ...args: any[]): void
    connect(sigName: "changeset-started", callback: Model.ChangesetStartedSignalCallback): number
    on(sigName: "changeset-started", callback: Model.ChangesetStartedSignalCallback): number
    once(sigName: "changeset-started", callback: Model.ChangesetStartedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changeset-started", ...args: any[]): void
    connect(sigName: "row-added", callback: Model.RowAddedSignalCallback): number
    on(sigName: "row-added", callback: Model.RowAddedSignalCallback): number
    once(sigName: "row-added", callback: Model.RowAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "row-added", ...args: any[]): void
    connect(sigName: "row-changed", callback: Model.RowChangedSignalCallback): number
    on(sigName: "row-changed", callback: Model.RowChangedSignalCallback): number
    once(sigName: "row-changed", callback: Model.RowChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "row-changed", ...args: any[]): void
    connect(sigName: "row-removed", callback: Model.RowRemovedSignalCallback): number
    on(sigName: "row-removed", callback: Model.RowRemovedSignalCallback): number
    once(sigName: "row-removed", callback: Model.RowRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "row-removed", ...args: any[]): void

    // Class property signals of Dee-1.0.Dee.Model

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Model extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Model

    static name: string

    // Constructors of Dee-1.0.Dee.Model

    constructor(config?: Model.ConstructorProperties) 
    _init(config?: Model.ConstructorProperties): void
}

export module ResourceManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResourceManager {

    // Owm methods of Dee-1.0.Dee.ResourceManager

    // Has conflict: load(resourceName: string): GObject.Object
    // Has conflict: store(resource: Serializable, resourceName: string): boolean

    // Own virtual methods of Dee-1.0.Dee.ResourceManager

    /**
     * Load a resource from persistent storage. The loaded resource will be of the
     * same GType as when it was stored (provided that the same serialization and
     * parse functions are registered).
     * 
     * In case of an error the error will be in the #GFileError domain. Specifically
     * if there is no resource with the name `resource_name` the error code will
     * be #G_FILE_ERROR_NOENT.
     * 
     * Important note: This call may do blocking IO. The resource manager must
     * guarantee that this call is reasonably fast, like writing the externalized
     * resource to a file, but not blocking IO over a network socket.
     * @virtual 
     * @param resourceName The name of the resource to retrieve
     */
    load(resourceName: string): GObject.Object
    /**
     * Store a resource under a given name. The resource manager must guarantee
     * that the stored data survives system reboots and that you can recreate a
     * copy of `resource` by calling dee_resource_manager_load() using the
     * same `resource_name`.
     * 
     * Important note: This call may do blocking IO. The resource manager must
     * guarantee that this call is reasonably fast, like writing the externalized
     * resource to a file, but not blocking IO over a network socket.
     * @virtual 
     * @param resource A #DeeSerializable to store under `resource_name`
     * @param resourceName The name to store the resource under. Will overwrite any                 existing resource with the same name
     */
    store(resource: Serializable, resourceName: string): boolean

    // Class property signals of Dee-1.0.Dee.ResourceManager

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResourceManager extends GObject.Object {

    // Own properties of Dee-1.0.Dee.ResourceManager

    static name: string

    // Constructors of Dee-1.0.Dee.ResourceManager

    constructor(config?: ResourceManager.ConstructorProperties) 
    _init(config?: ResourceManager.ConstructorProperties): void
    /**
     * Get a pointer to the platform default #DeeResourceManager.
     */
    static getDefault(): ResourceManager
}

export module ResultSet {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface ResultSet {

    // Owm methods of Dee-1.0.Dee.ResultSet

    // Has conflict: getModel(): Model
    // Has conflict: getNRows(): number
    // Has conflict: hasNext(): boolean
    // Has conflict: next(): ModelIter
    // Has conflict: peek(): ModelIter
    // Has conflict: seek(pos: number): void
    // Has conflict: tell(): number

    // Own virtual methods of Dee-1.0.Dee.ResultSet

    /**
     * Get the model associated with a result set
     * @virtual 
     */
    getModel(): Model
    /**
     * Get the number of #DeeModelIter<!-- -->s held in a #DeeResultSet.
     * @virtual 
     */
    getNRows(): number
    /**
     * Check if a call to dee_result_set_next() will succeed.
     * @virtual 
     */
    hasNext(): boolean
    /**
     * Get the current row from the result set and advance the cursor.
     * To ensure that calls to this method will succeed you can call
     * dee_result_set_has_next().
     * 
     * To retrieve the current row without advancing the cursor call
     * dee_result_set_peek() in stead of this method.
     * @virtual 
     */
    next(): ModelIter
    /**
     * Get the row at the current cursor position.
     * 
     * To retrieve the current row and advance the cursor position call
     * dee_result_set_next() in stead of this method.
     * @virtual 
     */
    peek(): ModelIter
    /**
     * Set the cursor position. Following calls to dee_result_set_peek()
     * or dee_result_set_next() will read the row at position `pos`.
     * @virtual 
     * @param pos The position to seek to
     */
    seek(pos: number): void
    /**
     * Get the current position of the cursor.
     * @virtual 
     */
    tell(): number

    // Class property signals of Dee-1.0.Dee.ResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ResultSet extends GObject.Object {

    // Own properties of Dee-1.0.Dee.ResultSet

    static name: string

    // Constructors of Dee-1.0.Dee.ResultSet

    constructor(config?: ResultSet.ConstructorProperties) 
    _init(config?: ResultSet.ConstructorProperties): void
}

export module Serializable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Serializable {

    // Owm methods of Dee-1.0.Dee.Serializable

    /**
     * Build an externalized form of `self` which can be used together with
     * dee_serializable_parse_external() to rebuild a copy of `self`.
     * 
     * It is important to note that the variant returned from this method does
     * not have the same type signature as returned from a call to
     * dee_serializable_serialize(). Externalization will wrap the serialized data
     * in a container format with versioning information and headers with type
     * information.
     */
    externalize(): GLib.Variant
    // Has conflict: serialize(): GLib.Variant

    // Own virtual methods of Dee-1.0.Dee.Serializable

    /**
     * Build a clean serialized representation of `self`. The signature of the
     * returned variant is entirely determined by the underlying implementation.
     * You can recreate a serialized instance by calling dee_serializable_parse()
     * provided that you know the correct #GType for the serialized instance.
     * @virtual 
     */
    serialize(): GLib.Variant

    // Class property signals of Dee-1.0.Dee.Serializable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Serializable extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Serializable

    static name: string

    // Constructors of Dee-1.0.Dee.Serializable

    constructor(config?: Serializable.ConstructorProperties) 
    _init(config?: Serializable.ConstructorProperties): void
    /**
     * Reconstruct a #DeeSerializable from #GVariant data. For this function
     * to work you need to register a parser with
     * dee_serializable_register_parser(). Any native Dee class will do so
     * automatically.
     * 
     * This method only works on data created with dee_serializable_serialize()
     * and <emphasis>not</emphasis> with data from dee_serializable_externalize().
     * 
     * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
     * it can be guaranteed that this function only returns %NULL in case there
     * is no known parser for `type` and #GVariant signature of `data`.
     * @param data The #GVariant data to parse. If this is a floating reference it will        be consumed
     * @param type The #GType of the class to instantiate from `data`
     */
    static parse(data: GLib.Variant, type: GObject.GType): GObject.Object
    /**
     * Reconstruct a #DeeSerializable from #GVariant data. For this function
     * to work you need to register a parser with
     * dee_serializable_register_parser(). Any native Dee class will do so
     * automatically.
     * 
     * This method only works on data created with dee_serializable_externalize()
     * and <emphasis>not</emphasis> with data from  dee_serializable_serialize().
     * 
     * Since a #DeeSerializableParseFunc is not allowed to fail - by contract -
     * it can be guaranteed that this function only returns %NULL in case there
     * is no known parser for the #GType or #GVariant signature of `data`.
     * @param data The #GVariant data to parse
     */
    static parseExternal(data: GLib.Variant): GObject.Object
}

export module Analyzer {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Analyzer {

    // Owm methods of Dee-1.0.Dee.Analyzer

    // Has conflict: addTermFilter(filterFunc: TermFilterFunc): void
    // Has conflict: analyze(data: string, termsOut: TermList | null, colkeysOut: TermList | null): void
    // Has conflict: collateCmp(key1: string, key2: string): number
    // Has conflict: collateKey(data: string): string
    // Has conflict: tokenize(data: string, termsOut: TermList): void

    // Own virtual methods of Dee-1.0.Dee.Analyzer

    /**
     * Register a #DeeTermFilterFunc to be called whenever dee_analyzer_analyze()
     * is called.
     * 
     * Term filters can be used to normalize, add, or remove terms from an input
     * data stream.
     * @virtual 
     * @param filterFunc Function to call
     */
    addTermFilter(filterFunc: TermFilterFunc): void
    /**
     * Extract terms and or collation keys from some input data (which is normally,
     * but not necessarily, a UTF-8 string).
     * 
     * The terms and corresponding collation keys will be written in order to the
     * provided #DeeTermList<!-- -->s.
     * 
     * Implementation notes for subclasses:
     * The analysis process must call dee_analyzer_tokenize() and run the tokens
     * through all term filters added with dee_analyzer_add_term_filter().
     * Collation keys must be generated with dee_analyzer_collate_key().
     * @virtual 
     * @param data The input data to analyze
     * @param termsOut A #DeeTermList to place the generated terms in.                           If %NULL to terms are generated
     * @param colkeysOut A #DeeTermList to place generated collation keys in.                             If %NULL no collation keys are generated
     */
    analyze(data: string, termsOut: TermList | null, colkeysOut: TermList | null): void
    /**
     * Compare collation keys generated by dee_analyzer_collate_key() with similar
     * semantics as strcmp(). See also dee_analyzer_collate_cmp_func() if you
     * need a version of this function that works as a #GCompareDataFunc.
     * 
     * The default implementation in #DeeAnalyzer just uses strcmp().
     * @virtual 
     * @param key1 The first collation key to compare
     * @param key2 The second collation key to compare
     */
    collateCmp(key1: string, key2: string): number
    /**
     * Generate a collation key for a set of input data (usually a UTF-8 string
     * passed through tokenization and term filters of the analyzer).
     * 
     * The default implementation just calls g_strdup().
     * @virtual 
     * @param data The input data to generate a collation key for
     */
    collateKey(data: string): string
    /**
     * Tokenize some input data (which is normally, but not necessarily,
     * a UTF-8 string).
     * 
     * Tokenization splits the input data into constituents (in most cases words),
     * but does not run it through any of the term filters set for the analyzer.
     * It is undefined if the tokenization process itself does any normalization.
     * @virtual 
     * @param data The input data to analyze
     * @param termsOut A #DeeTermList to place the generated tokens in.
     */
    tokenize(data: string, termsOut: TermList): void

    // Class property signals of Dee-1.0.Dee.Analyzer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeAnalyzer structure are private and should never be
 * accessed directly
 * @class 
 */
export class Analyzer extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Analyzer

    static name: string

    // Constructors of Dee-1.0.Dee.Analyzer

    constructor(config?: Analyzer.ConstructorProperties) 
    constructor() 
    static new(): Analyzer
    _init(config?: Analyzer.ConstructorProperties): void
    /**
     * A #GCompareDataFunc using a #DeeAnalyzer to compare the keys. This is just
     * a convenience wrapper around dee_analyzer_collate_cmp().
     * @param key1 The first key to compare
     * @param key2 The second key to compare
     * @param analyzer The #DeeAnalyzer to use for the comparison
     */
    static collateCmpFunc(key1: string, key2: string, analyzer: object | null): number
}

export module Client {

    // Constructor properties interface

    export interface ConstructorProperties extends Peer.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.Client

        busAddress?: string | null
    }

}

export interface Client {

    // Own properties of Dee-1.0.Dee.Client

    readonly busAddress: string

    // Class property signals of Dee-1.0.Dee.Client

    connect(sigName: "notify::bus-address", callback: any): number
    on(sigName: "notify::bus-address", callback: any): number
    once(sigName: "notify::bus-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-address", ...args: any[]): void
    connect(sigName: "notify::swarm-leader", callback: any): number
    on(sigName: "notify::swarm-leader", callback: any): number
    once(sigName: "notify::swarm-leader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-leader", ...args: any[]): void
    connect(sigName: "notify::swarm-name", callback: any): number
    on(sigName: "notify::swarm-name", callback: any): number
    once(sigName: "notify::swarm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-name", ...args: any[]): void
    connect(sigName: "notify::swarm-owner", callback: any): number
    on(sigName: "notify::swarm-owner", callback: any): number
    once(sigName: "notify::swarm-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Client extends Peer {

    // Own properties of Dee-1.0.Dee.Client

    static name: string

    // Constructors of Dee-1.0.Dee.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new instance of #DeeClient and tries to connect to #DeeServer
     * created using dee_server_new(). The #DeePeer:swarm-leader property will
     * be set once the client connects.
     * @constructor 
     * @param swarmName Name of swarm to join.
     */
    constructor(swarmName: string) 
    /**
     * Creates a new instance of #DeeClient and tries to connect to #DeeServer
     * created using dee_server_new(). The #DeePeer:swarm-leader property will
     * be set once the client connects.
     * @constructor 
     * @param swarmName Name of swarm to join.
     */
    static new(swarmName: string): Client

    // Overloads of new

    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarmName The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    static new(swarmName: string): Peer
    /**
     * Creates a new instance of #DeeClient and tries to connect to `bus_address`.
     * The #DeePeer:swarm-leader property will be set once the client connects.
     * @constructor 
     * @param swarmName Name of swarm to join.
     * @param busAddress D-Bus address to use when connecting to the server.
     */
    static newForAddress(swarmName: string, busAddress: string): Client
    _init(config?: Client.ConstructorProperties): void
}

export module FileResourceManager {

    // Constructor properties interface

    export interface ConstructorProperties extends ResourceManager.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.FileResourceManager

        /**
         * Property holding the primary path used to store and load resources
         */
        primaryPath?: string | null
    }

}

export interface FileResourceManager extends ResourceManager {

    // Own properties of Dee-1.0.Dee.FileResourceManager

    /**
     * Property holding the primary path used to store and load resources
     */
    readonly primaryPath: string

    // Own fields of Dee-1.0.Dee.FileResourceManager

    parentInstance: GObject.Object

    // Owm methods of Dee-1.0.Dee.FileResourceManager

    /**
     * Add a path to the set of paths searched for resources. The manager will
     * first search the primary path as specified in the constructor and then
     * search paths in the order they where added.
     * @param path The path to add to the set of searched paths
     */
    addSearchPath(path: string): void
    /**
     * Helper method to access the :primary-path property.
     */
    getPrimaryPath(): string

    // Class property signals of Dee-1.0.Dee.FileResourceManager

    connect(sigName: "notify::primary-path", callback: any): number
    on(sigName: "notify::primary-path", callback: any): number
    once(sigName: "notify::primary-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::primary-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileResourceManager extends GObject.Object {

    // Own properties of Dee-1.0.Dee.FileResourceManager

    static name: string

    // Constructors of Dee-1.0.Dee.FileResourceManager

    constructor(config?: FileResourceManager.ConstructorProperties) 
    /**
     * Create a new #DeeFileResourceManager with its primary store- and load
     * path set to `primary_path`.
     * 
     * You can manually add fallback search paths by calling
     * dee_file_resource_manager_add_search_path().
     * 
     * You normally don't need to create you own resource managers. Instead
     * you should call dee_resource_manager_get_default().
     * @constructor 
     * @param primaryPath The primary path used to store and load resources.                If you pass %NULL the manager will use a default path.
     */
    constructor(primaryPath: string) 
    /**
     * Create a new #DeeFileResourceManager with its primary store- and load
     * path set to `primary_path`.
     * 
     * You can manually add fallback search paths by calling
     * dee_file_resource_manager_add_search_path().
     * 
     * You normally don't need to create you own resource managers. Instead
     * you should call dee_resource_manager_get_default().
     * @constructor 
     * @param primaryPath The primary path used to store and load resources.                If you pass %NULL the manager will use a default path.
     */
    static new(primaryPath: string): FileResourceManager
    _init(config?: FileResourceManager.ConstructorProperties): void
}

export module FilterModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Model.ConstructorProperties, Serializable.ConstructorProperties, ProxyModel.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.FilterModel

        /**
         * Property holding the #DeeFilter used to filter the model
         * defined in the #DeeFilterModel:back-end property.
         */
        filter?: Filter | null
    }

}

export interface FilterModel extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.FilterModel

    /**
     * Property holding the #DeeFilter used to filter the model
     * defined in the #DeeFilterModel:back-end property.
     */
    readonly filter: Filter

    // Owm methods of Dee-1.0.Dee.FilterModel

    /**
     * Includes `iter` from the back end model in the filtered model, appending
     * it to the end of the filtered rows.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     */
    appendIter(iter: ModelIter): ModelIter
    /**
     * Check if `iter` from the back end model is mapped in `self`.
     * @param iter The #DeeModelIter to check
     */
    contains(iter: ModelIter): boolean
    /**
     * Includes `iter` from the back end model in the filtered model, inserting it at
     * `pos` pushing other rows down.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     * @param pos 
     */
    insertIter(iter: ModelIter, pos: number): ModelIter
    /**
     * Includes `iter` from the back end model in the filtered model, inserting it at
     * the position before `pos` pushing other rows down.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     * @param pos 
     */
    insertIterBefore(iter: ModelIter, pos: ModelIter): ModelIter
    /**
     * Inserts `iter` in `self` in a way that is consistent with the ordering of the
     * rows in the original #DeeModel behind `self`. THis method assumes that `self`
     * is already ordered this way. If that's not the case then this method has
     * undefined behaviour.
     * 
     * This method is mainly intended as a helper for #DeeFilterMapNotify functions
     * of #DeeFilter implementations that creates filter models sorted in
     * accordance with the original models.
     * @param iter Iterator
     */
    insertIterWithOriginalOrder(iter: ModelIter): ModelIter
    /**
     * Includes `iter` from the back end model in the filtered model, prepending
     * it to the beginning of the filtered rows.
     * 
     * This method is usually called when implementing #DeeFilterMapFunc or
     * #DeeFilterMapNotify methods.
     * @param iter 
     */
    prependIter(iter: ModelIter): ModelIter

    // Class property signals of Dee-1.0.Dee.FilterModel

    connect(sigName: "notify::filter", callback: any): number
    on(sigName: "notify::filter", callback: any): number
    once(sigName: "notify::filter", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filter", ...args: any[]): void
    connect(sigName: "notify::back-end", callback: any): number
    on(sigName: "notify::back-end", callback: any): number
    once(sigName: "notify::back-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::back-end", ...args: any[]): void
    connect(sigName: "notify::inherit-seqnums", callback: any): number
    on(sigName: "notify::inherit-seqnums", callback: any): number
    once(sigName: "notify::inherit-seqnums", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inherit-seqnums", ...args: any[]): void
    connect(sigName: "notify::proxy-signals", callback: any): number
    on(sigName: "notify::proxy-signals", callback: any): number
    once(sigName: "notify::proxy-signals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-signals", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeFilterModel structure are private and should never be
 * accessed directly
 * @class 
 */
export class FilterModel extends ProxyModel {

    // Own properties of Dee-1.0.Dee.FilterModel

    static name: string

    // Constructors of Dee-1.0.Dee.FilterModel

    constructor(config?: FilterModel.ConstructorProperties) 
    constructor(origModel: Model, filter: Filter) 
    static new(origModel: Model, filter: Filter): FilterModel
    _init(config?: FilterModel.ConstructorProperties): void
}

export module GListResultSet {

    // Constructor properties interface

    export interface ConstructorProperties extends ResultSet.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface GListResultSet extends ResultSet {

    // Own fields of Dee-1.0.Dee.GListResultSet

    parentInstance: GObject.Object

    // Class property signals of Dee-1.0.Dee.GListResultSet

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class GListResultSet extends GObject.Object {

    // Own properties of Dee-1.0.Dee.GListResultSet

    static name: string

    // Constructors of Dee-1.0.Dee.GListResultSet

    constructor(config?: GListResultSet.ConstructorProperties) 
    _init(config?: GListResultSet.ConstructorProperties): void
}

export module HashIndex {

    // Constructor properties interface

    export interface ConstructorProperties extends Index.ConstructorProperties {
    }

}

export interface HashIndex {

    // Class property signals of Dee-1.0.Dee.HashIndex

    connect(sigName: "notify::analyzer", callback: any): number
    on(sigName: "notify::analyzer", callback: any): number
    once(sigName: "notify::analyzer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::analyzer", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reader", callback: any): number
    on(sigName: "notify::reader", callback: any): number
    once(sigName: "notify::reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeHashIndex structure are private and should never be
 * accessed directly
 * @class 
 */
export class HashIndex extends Index {

    // Own properties of Dee-1.0.Dee.HashIndex

    static name: string

    // Constructors of Dee-1.0.Dee.HashIndex

    constructor(config?: HashIndex.ConstructorProperties) 
    /**
     * Create a new hash index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    constructor(model: Model, analyzer: Analyzer, reader: ModelReader) 
    /**
     * Create a new hash index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): HashIndex
    _init(config?: HashIndex.ConstructorProperties): void
}

export module Index {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.Index

        /**
         * The #DeeAnalyzer used to analyze terms extracted by the model reader
         */
        analyzer?: Analyzer | null
        /**
         * The #DeeModel being indexed
         */
        model?: Model | null
        /**
         * The #DeeModelReader used to extract terms from rows in the model
         */
        reader?: ModelReader | null
    }

}

export interface Index {

    // Own properties of Dee-1.0.Dee.Index

    /**
     * The #DeeAnalyzer used to analyze terms extracted by the model reader
     */
    readonly analyzer: Analyzer
    /**
     * The #DeeModel being indexed
     */
    readonly model: Model
    /**
     * The #DeeModelReader used to extract terms from rows in the model
     */
    readonly reader: ModelReader

    // Owm methods of Dee-1.0.Dee.Index

    // Has conflict: foreach(startTerm: string, func: IndexIterFunc): void
    /**
     * Get the analyzer being used to analyze terms extracted with the
     * #DeeModelReader used by this index.
     */
    getAnalyzer(): Analyzer
    /**
     * Get the model being indexed by this index
     */
    getModel(): Model
    // Has conflict: getNRows(): number
    // Has conflict: getNRowsForTerm(term: string): number
    // Has conflict: getNTerms(): number
    /**
     * Get the reader being used to extract terms from rows in the model
     */
    getReader(): ModelReader
    // Has conflict: getSupportedTermMatchFlags(): number
    // Has conflict: lookup(term: string, flags: TermMatchFlag): ResultSet
    /**
     * Convenience function in for cases where you have a priori guarantee that
     * a dee_index_lookup() call will return exactly 0 or 1 row. If the lookup
     * returns more than 1 row a warning will be printed on standard error and
     * %NULL will be returned.
     * 
     * The typical use case for this function is if you need something akin to
     * a primary key in a relational database.
     * @param term The exact term to match
     */
    lookupOne(term: string): ModelIter

    // Own virtual methods of Dee-1.0.Dee.Index

    /**
     * Iterate over an index optionally starting from some given term. Note that
     * unordered indexes (like #DeeHashIndex) has undefined behaviour with
     * this method.
     * @virtual 
     * @param startTerm The term to start from or %NULL to iterate over all terms
     * @param func Called for each term in the index
     */
    foreach(startTerm: string, func: IndexIterFunc): void
    /**
     * Get the number of indexed rows. A row is only indexed if it has at least one
     * term associated with it. If the analyzer has returned 0 terms then the row
     * is omitted from the index.
     * @virtual 
     */
    getNRows(): number
    /**
     * Get the number of rows that matches a given term
     * @virtual 
     * @param term The term to look for
     */
    getNRowsForTerm(term: string): number
    /**
     * Get the number of terms in the index
     * @virtual 
     */
    getNTerms(): number
    /**
     * Get the #DeeTermMatchFlag<!-- --> supported by this #DeeIndex instance
     * @virtual 
     */
    getSupportedTermMatchFlags(): number
    lookup(term: string, flags: TermMatchFlag): ResultSet

    // Class property signals of Dee-1.0.Dee.Index

    connect(sigName: "notify::analyzer", callback: any): number
    on(sigName: "notify::analyzer", callback: any): number
    once(sigName: "notify::analyzer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::analyzer", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reader", callback: any): number
    on(sigName: "notify::reader", callback: any): number
    once(sigName: "notify::reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeIndex structure are private and should never be
 * accessed directly
 * @class 
 */
export class Index extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Index

    static name: string

    // Constructors of Dee-1.0.Dee.Index

    constructor(config?: Index.ConstructorProperties) 
    _init(config?: Index.ConstructorProperties): void
}

export module Peer {

    // Signal callback interfaces

    /**
     * Signal callback interface for `connection-acquired`
     */
    export interface ConnectionAcquiredSignalCallback {
        (object: Gio.DBusConnection): void
    }

    /**
     * Signal callback interface for `connection-closed`
     */
    export interface ConnectionClosedSignalCallback {
        (connection: Gio.DBusConnection): void
    }

    /**
     * Signal callback interface for `peer-found`
     */
    export interface PeerFoundSignalCallback {
        (name: string): void
    }

    /**
     * Signal callback interface for `peer-lost`
     */
    export interface PeerLostSignalCallback {
        (name: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.Peer

        swarmName?: string | null
        swarmOwner?: boolean | null
    }

}

export interface Peer {

    // Own properties of Dee-1.0.Dee.Peer

    readonly swarmLeader: string
    swarmName: string
    readonly swarmOwner: boolean

    // Owm methods of Dee-1.0.Dee.Peer

    // Has conflict: getConnections(): Gio.DBusConnection[]
    // Has conflict: getSwarmLeader(): string
    /**
     * Gets the unique name for this swarm. The swarm leader is the Peer owning
     * this name on the session bus.
     */
    getSwarmName(): string
    // Has conflict: isSwarmLeader(): boolean
    /**
     * Gets the value of the :swarm-owner property.
     * 
     * Note that this does NOT mean that the peer is leader of the swarm! Check also
     * dee_peer_is_swarm_leader().
     */
    isSwarmOwner(): boolean
    // Has conflict: listPeers(): string[]

    // Own virtual methods of Dee-1.0.Dee.Peer

    connectionAcquired(connection: Gio.DBusConnection): void
    connectionClosed(connection: Gio.DBusConnection): void
    /**
     * Gets list of #GDBusConnection instances used by this #DeePeer instance.
     * @virtual 
     */
    getConnections(): Gio.DBusConnection[]
    /**
     * In case this peer is connected to a message bus, gets the unique DBus
     * address of the current swarm leader, otherwise returns id of the leader.
     * @virtual 
     */
    getSwarmLeader(): string
    isSwarmLeader(): boolean
    /**
     * Gets list of all peers currently in this swarm.
     * @virtual 
     */
    listPeers(): string[]
    peerFound(name: string): void
    peerLost(name: string): void

    // Own signals of Dee-1.0.Dee.Peer

    connect(sigName: "connection-acquired", callback: Peer.ConnectionAcquiredSignalCallback): number
    on(sigName: "connection-acquired", callback: Peer.ConnectionAcquiredSignalCallback): number
    once(sigName: "connection-acquired", callback: Peer.ConnectionAcquiredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "connection-acquired", ...args: any[]): void
    connect(sigName: "connection-closed", callback: Peer.ConnectionClosedSignalCallback): number
    on(sigName: "connection-closed", callback: Peer.ConnectionClosedSignalCallback): number
    once(sigName: "connection-closed", callback: Peer.ConnectionClosedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "connection-closed", ...args: any[]): void
    connect(sigName: "peer-found", callback: Peer.PeerFoundSignalCallback): number
    on(sigName: "peer-found", callback: Peer.PeerFoundSignalCallback): number
    once(sigName: "peer-found", callback: Peer.PeerFoundSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "peer-found", ...args: any[]): void
    connect(sigName: "peer-lost", callback: Peer.PeerLostSignalCallback): number
    on(sigName: "peer-lost", callback: Peer.PeerLostSignalCallback): number
    once(sigName: "peer-lost", callback: Peer.PeerLostSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "peer-lost", ...args: any[]): void

    // Class property signals of Dee-1.0.Dee.Peer

    connect(sigName: "notify::swarm-leader", callback: any): number
    on(sigName: "notify::swarm-leader", callback: any): number
    once(sigName: "notify::swarm-leader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-leader", ...args: any[]): void
    connect(sigName: "notify::swarm-name", callback: any): number
    on(sigName: "notify::swarm-name", callback: any): number
    once(sigName: "notify::swarm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-name", ...args: any[]): void
    connect(sigName: "notify::swarm-owner", callback: any): number
    on(sigName: "notify::swarm-owner", callback: any): number
    once(sigName: "notify::swarm-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeePeer structure are private and should never be
 * accessed directly
 * @class 
 */
export class Peer extends GObject.Object {

    // Own properties of Dee-1.0.Dee.Peer

    static name: string

    // Constructors of Dee-1.0.Dee.Peer

    constructor(config?: Peer.ConstructorProperties) 
    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarmName The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    constructor(swarmName: string) 
    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarmName The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    static new(swarmName: string): Peer
    _init(config?: Peer.ConstructorProperties): void
}

export module ProxyModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Model.ConstructorProperties, Serializable.ConstructorProperties, SerializableModel.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.ProxyModel

        /**
         * The backend model used by this proxy model.
         */
        backEnd?: Model | null
        /**
         * Boolean property defining whether sequence numbers will be inherited
         * from the back end model.
         * You will most likely want to set this property to false
         * if the implementation manipulates with the rows in the model and keep
         * track of seqnums yourself.
         */
        inheritSeqnums?: boolean | null
        /**
         * Boolean property defining whether or not to automatically forward signals
         * from the back end model. This is especially useful for sub classes wishing
         * to do their own more advanced signal forwarding.
         */
        proxySignals?: boolean | null
    }

}

export interface ProxyModel extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.ProxyModel

    /**
     * The backend model used by this proxy model.
     */
    readonly backEnd: Model
    /**
     * Boolean property defining whether sequence numbers will be inherited
     * from the back end model.
     * You will most likely want to set this property to false
     * if the implementation manipulates with the rows in the model and keep
     * track of seqnums yourself.
     */
    readonly inheritSeqnums: boolean
    /**
     * Boolean property defining whether or not to automatically forward signals
     * from the back end model. This is especially useful for sub classes wishing
     * to do their own more advanced signal forwarding.
     */
    readonly proxySignals: boolean

    // Class property signals of Dee-1.0.Dee.ProxyModel

    connect(sigName: "notify::back-end", callback: any): number
    on(sigName: "notify::back-end", callback: any): number
    once(sigName: "notify::back-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::back-end", ...args: any[]): void
    connect(sigName: "notify::inherit-seqnums", callback: any): number
    on(sigName: "notify::inherit-seqnums", callback: any): number
    once(sigName: "notify::inherit-seqnums", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inherit-seqnums", ...args: any[]): void
    connect(sigName: "notify::proxy-signals", callback: any): number
    on(sigName: "notify::proxy-signals", callback: any): number
    once(sigName: "notify::proxy-signals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-signals", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeProxyModel structure are private and should never be
 * accessed directly
 * @class 
 */
export class ProxyModel extends SerializableModel {

    // Own properties of Dee-1.0.Dee.ProxyModel

    static name: string

    // Constructors of Dee-1.0.Dee.ProxyModel

    constructor(config?: ProxyModel.ConstructorProperties) 
    _init(config?: ProxyModel.ConstructorProperties): void
}

export module SequenceModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Model.ConstructorProperties, Serializable.ConstructorProperties, SerializableModel.ConstructorProperties {
    }

}

export interface SequenceModel extends Model, Serializable {

    // Class property signals of Dee-1.0.Dee.SequenceModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeSequenceModel structure are private and should never be
 * accessed directly
 * @class 
 */
export class SequenceModel extends SerializableModel {

    // Own properties of Dee-1.0.Dee.SequenceModel

    static name: string

    // Constructors of Dee-1.0.Dee.SequenceModel

    constructor(config?: SequenceModel.ConstructorProperties) 
    /**
     * Create a new #DeeSequenceModel. Before using it you must normally set a
     * schema on it by calling dee_model_set_schema().
     * @constructor 
     */
    constructor() 
    /**
     * Create a new #DeeSequenceModel. Before using it you must normally set a
     * schema on it by calling dee_model_set_schema().
     * @constructor 
     */
    static new(): SequenceModel
    _init(config?: SequenceModel.ConstructorProperties): void
}

export module SerializableModel {

    // Constructor properties interface

    export interface ConstructorProperties extends Model.ConstructorProperties, Serializable.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface SerializableModel extends Model, Serializable {

    // Owm methods of Dee-1.0.Dee.SerializableModel

    getSeqnum(): number
    /**
     * Increments sequence number of this #DeeSerializableModel.
     */
    incSeqnum(): number
    /**
     * Sets sequence number of this #DeeSerializableModel.
     * @param seqnum Sequence number
     */
    setSeqnum(seqnum: number): void

    // Class property signals of Dee-1.0.Dee.SerializableModel

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeSerializableModel structure are private and should never be
 * accessed directly
 * @class 
 */
export class SerializableModel extends GObject.Object {

    // Own properties of Dee-1.0.Dee.SerializableModel

    static name: string

    // Constructors of Dee-1.0.Dee.SerializableModel

    constructor(config?: SerializableModel.ConstructorProperties) 
    _init(config?: SerializableModel.ConstructorProperties): void
}

export module Server {

    // Constructor properties interface

    export interface ConstructorProperties extends Peer.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.Server

        busAddress?: string | null
        sameUserOnly?: boolean | null
    }

}

export interface Server {

    // Own properties of Dee-1.0.Dee.Server

    readonly busAddress: string
    readonly sameUserOnly: boolean

    // Owm methods of Dee-1.0.Dee.Server

    /**
     * Gets a D-Bus address string that can be used by clients to connect to server.
     */
    getClientAddress(): string

    // Class property signals of Dee-1.0.Dee.Server

    connect(sigName: "notify::bus-address", callback: any): number
    on(sigName: "notify::bus-address", callback: any): number
    once(sigName: "notify::bus-address", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bus-address", ...args: any[]): void
    connect(sigName: "notify::same-user-only", callback: any): number
    on(sigName: "notify::same-user-only", callback: any): number
    once(sigName: "notify::same-user-only", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::same-user-only", ...args: any[]): void
    connect(sigName: "notify::swarm-leader", callback: any): number
    on(sigName: "notify::swarm-leader", callback: any): number
    once(sigName: "notify::swarm-leader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-leader", ...args: any[]): void
    connect(sigName: "notify::swarm-name", callback: any): number
    on(sigName: "notify::swarm-name", callback: any): number
    once(sigName: "notify::swarm-name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-name", ...args: any[]): void
    connect(sigName: "notify::swarm-owner", callback: any): number
    on(sigName: "notify::swarm-owner", callback: any): number
    once(sigName: "notify::swarm-owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::swarm-owner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Server extends Peer {

    // Own properties of Dee-1.0.Dee.Server

    static name: string

    // Constructors of Dee-1.0.Dee.Server

    constructor(config?: Server.ConstructorProperties) 
    /**
     * Creates a new instance of #DeeServer and tries to bind
     * to #DeeServer:bus-address. The #DeePeer:swarm-leader property will be set
     * when the binding succeeds.
     * 
     * <note>
     *   <para>
     *     Note that this function will automatically determine the value
     *     of #DeeServer:bus-address property and will generally cause your
     *     application to use new socket for every #DeeServer with different swarm
     *     name. See dee_server_new_for_address() if you'd like to share one
     *     connection between multiple #DeeServer instances.
     *   </para>
     * </note>
     * @constructor 
     * @param swarmName Name of swarm to join.
     */
    constructor(swarmName: string) 
    /**
     * Creates a new instance of #DeeServer and tries to bind
     * to #DeeServer:bus-address. The #DeePeer:swarm-leader property will be set
     * when the binding succeeds.
     * 
     * <note>
     *   <para>
     *     Note that this function will automatically determine the value
     *     of #DeeServer:bus-address property and will generally cause your
     *     application to use new socket for every #DeeServer with different swarm
     *     name. See dee_server_new_for_address() if you'd like to share one
     *     connection between multiple #DeeServer instances.
     *   </para>
     * </note>
     * @constructor 
     * @param swarmName Name of swarm to join.
     */
    static new(swarmName: string): Server

    // Overloads of new

    /**
     * Create a new #DeePeer. The peer will immediately connect to the swarm
     * and start the peer discovery.
     * @constructor 
     * @param swarmName The name of the swarm to join.              Fx &quot;org.example.DataProviders&quot;
     */
    static new(swarmName: string): Peer
    /**
     * Creates a new instance of #DeeServer and tries to bind to `bus_address`.
     * The #DeePeer:swarm-leader property will be set when the binding succeeds.
     * 
     * If there is already a #DeeServer instance bound to `bus_address,`
     * the connection will be shared with the newly constructed instance.
     * 
     * <note>
     *   <para>
     *     This function is primarily meant for sharing of one connection (socket)
     *     between multiple DeeServers, so that you can create #DeeServer instances
     *     with varying swarm names, but the same bus address, which will cause
     *     them to share the connection (the sharing is possible only within
     *     the same process though).
     *   </para>
     * </note>
     * @constructor 
     * @param swarmName Name of swarm to join.
     * @param busAddress D-Bus address to use for the connection.
     */
    static newForAddress(swarmName: string, busAddress: string): Server
    _init(config?: Server.ConstructorProperties): void
    /**
     * Helper method which creates bus address string for the given name, which
     * should have the same format as a DBus unique name.
     * @param name A name to create bus address for.
     * @param includeUsername Include current user name as part of the bus address.
     */
    static busAddressForName(name: string, includeUsername: boolean): string
}

export module SharedModel {

    // Signal callback interfaces

    /**
     * Signal callback interface for `begin-transaction`
     */
    export interface BeginTransactionSignalCallback {
        (beginSeqnum: number, endSeqnum: number): void
    }

    /**
     * Signal callback interface for `end-transaction`
     */
    export interface EndTransactionSignalCallback {
        (beginSeqnum: number, endSeqnum: number): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Model.ConstructorProperties, Serializable.ConstructorProperties, ProxyModel.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.SharedModel

        /**
         * Enumeration defining behavior of this model when trying to write to it.
         * 
         * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
         * when one process is considered an "owner" of a model and all the other
         * peers are supposed to only synchronize it for reading.
         * 
         * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
         */
        accessMode?: SharedModelAccessMode | null
        /**
         * Enumeration defining the flushing behavior.
         * 
         * Setting this to #DEE_SHARED_MODEL_FLUSH_MODE_MANUAL will disable
         * automatic flushing that usually happens when the application's main event
         * loop is idle. Automatic flushing should be primarily disabled when
         * a shared model is used from multiple threads, or when not using #GMainLoop.
         * When disabled, dee_shared_model_flush_revision_queue() needs to be called
         * explicitely.
         */
        flushMode?: SharedModelFlushMode | null
        /**
         * The #DeePeer that this model uses to connect to the swarm
         */
        peer?: Peer | null
    }

}

export interface SharedModel extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.SharedModel

    /**
     * Enumeration defining behavior of this model when trying to write to it.
     * 
     * Setting this to #DEE_SHARED_MODEL_ACCESS_MODE_LEADER_WRITABLE is useful
     * when one process is considered an "owner" of a model and all the other
     * peers are supposed to only synchronize it for reading.
     * 
     * See also DeePeer:swarm-owner property to ensure ownership of a swarm.
     */
    readonly accessMode: SharedModelAccessMode
    /**
     * Enumeration defining the flushing behavior.
     * 
     * Setting this to #DEE_SHARED_MODEL_FLUSH_MODE_MANUAL will disable
     * automatic flushing that usually happens when the application's main event
     * loop is idle. Automatic flushing should be primarily disabled when
     * a shared model is used from multiple threads, or when not using #GMainLoop.
     * When disabled, dee_shared_model_flush_revision_queue() needs to be called
     * explicitely.
     */
    flushMode: SharedModelFlushMode
    /**
     * The #DeePeer that this model uses to connect to the swarm
     */
    readonly peer: Peer
    /**
     * Boolean property defining whether or not the model has synchronized with
     * its peers (if any) yet.
     * 
     * You should not modify a #DeeSharedModel that is not synchronized. Before
     * modifying the model in any way (except calling dee_model_set_schema())
     * you should wait for it to become synchronized.
     */
    readonly synchronized: boolean

    // Owm methods of Dee-1.0.Dee.SharedModel

    /**
     * Expert: All changes to `self` that has not yet been propagated to the peer
     * models are send. If you also want to block the mainloop until
     * all the underlying transport streams have been flushed use
     * dee_shared_model_flush_revision_queue_sync().
     * 
     * Normally #DeeSharedModel collects changes to `self` into batches and sends
     * them automatically to all peers. You can use this call to provide fine
     * grained control of exactly when changes to `self` are synchronized to its
     * peers. This may for example be useful to improve the interactivity of your
     * application if you have a model-process which intermix small and light
     * changes with big and expensive changes. Using this call you can make sure
     * the model-process dispatches small changes more aggresively to the
     * view-process, while holding on to the expensive changes a bit longer.
     */
    flushRevisionQueue(): number
    /**
     * Similar to dee_shared_model_flush_revision_queue(), but also blocks
     * the mainloop until all the underlying transport streams have been flushed.
     * 
     * <emphasis>Important</emphasis>: This method <emphasis>may</emphasis> flush
     * your internal queue of DBus messages forcing them to be send before this call
     * returns.
     */
    flushRevisionQueueSync(): number
    /**
     * Convenience function for accessing the #DeeSharedModel:flush-mode property.
     */
    getFlushMode(): SharedModelFlushMode
    /**
     * Convenience function for accessing the #DeeSharedModel:peer property
     */
    getPeer(): Peer
    /**
     * Convenience function for accessing the #DeePeer:swarm-name property of the
     * #DeePeer defined in the #DeeSharedModel:peer property.
     */
    getSwarmName(): string
    /**
     * Check if the model is the swarm leader. This is a convenience function for
     * accessing the #DeeSharedModel:peer property and checking if it's the swarm
     * leader.
     */
    isLeader(): boolean
    /**
     * Check if the model is synchronized with its peers. Before modifying a
     * shared model in any way (except dee_model_set_schema()) you should wait for
     * it to become synchronized. This is normally done by waiting for the
     * &quot;notify::synchronized&quot; signal.
     * 
     * This method is purely a convenience function for accessing the
     * #DeeSharedModel:synchronized property.
     */
    isSynchronized(): boolean
    /**
     * Convenience function for setting the #DeeSharedModel:flush-mode property.
     * @param mode Flush mode to use
     */
    setFlushMode(mode: SharedModelFlushMode): void

    // Own signals of Dee-1.0.Dee.SharedModel

    connect(sigName: "begin-transaction", callback: SharedModel.BeginTransactionSignalCallback): number
    on(sigName: "begin-transaction", callback: SharedModel.BeginTransactionSignalCallback): number
    once(sigName: "begin-transaction", callback: SharedModel.BeginTransactionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "begin-transaction", endSeqnum: number, ...args: any[]): void
    connect(sigName: "end-transaction", callback: SharedModel.EndTransactionSignalCallback): number
    on(sigName: "end-transaction", callback: SharedModel.EndTransactionSignalCallback): number
    once(sigName: "end-transaction", callback: SharedModel.EndTransactionSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "end-transaction", endSeqnum: number, ...args: any[]): void

    // Class property signals of Dee-1.0.Dee.SharedModel

    connect(sigName: "notify::access-mode", callback: any): number
    on(sigName: "notify::access-mode", callback: any): number
    once(sigName: "notify::access-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::access-mode", ...args: any[]): void
    connect(sigName: "notify::flush-mode", callback: any): number
    on(sigName: "notify::flush-mode", callback: any): number
    once(sigName: "notify::flush-mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::flush-mode", ...args: any[]): void
    connect(sigName: "notify::peer", callback: any): number
    on(sigName: "notify::peer", callback: any): number
    once(sigName: "notify::peer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::peer", ...args: any[]): void
    connect(sigName: "notify::synchronized", callback: any): number
    on(sigName: "notify::synchronized", callback: any): number
    once(sigName: "notify::synchronized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::synchronized", ...args: any[]): void
    connect(sigName: "notify::back-end", callback: any): number
    on(sigName: "notify::back-end", callback: any): number
    once(sigName: "notify::back-end", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::back-end", ...args: any[]): void
    connect(sigName: "notify::inherit-seqnums", callback: any): number
    on(sigName: "notify::inherit-seqnums", callback: any): number
    once(sigName: "notify::inherit-seqnums", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::inherit-seqnums", ...args: any[]): void
    connect(sigName: "notify::proxy-signals", callback: any): number
    on(sigName: "notify::proxy-signals", callback: any): number
    once(sigName: "notify::proxy-signals", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::proxy-signals", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeSharedModel structure are private and should never be
 * accessed directly
 * @class 
 */
export class SharedModel extends ProxyModel {

    // Own properties of Dee-1.0.Dee.SharedModel

    static name: string

    // Constructors of Dee-1.0.Dee.SharedModel

    constructor(config?: SharedModel.ConstructorProperties) 
    /**
     * Create a new empty shared model without any column schema associated.
     * The column schema will be set in one of two ways: firstly you may set it
     * manually with dee_model_set_schema() or secondly it will be set once
     * the first rows are exchanged with a peer model.
     * 
     * A #DeeSharedModel with a schema manually set has to be created before
     * creating more #DeeSharedModel with the same `name`.
     * 
     * A shared model created with this constructor will store row data in a
     * suitably picked memory backed model.
     * @constructor 
     * @param name A well known name to publish this model under. Models sharing this name        will synchronize with each other
     */
    constructor(name: string) 
    /**
     * Create a new empty shared model without any column schema associated.
     * The column schema will be set in one of two ways: firstly you may set it
     * manually with dee_model_set_schema() or secondly it will be set once
     * the first rows are exchanged with a peer model.
     * 
     * A #DeeSharedModel with a schema manually set has to be created before
     * creating more #DeeSharedModel with the same `name`.
     * 
     * A shared model created with this constructor will store row data in a
     * suitably picked memory backed model.
     * @constructor 
     * @param name A well known name to publish this model under. Models sharing this name        will synchronize with each other
     */
    static new(name: string): SharedModel
    /**
     * Create a new empty shared model without any column schema associated.
     * The column schema will be set in one of two ways: firstly you may set it
     * manually with dee_model_set_schema() or secondly it will be set once
     * the first rows are exchanged with a peer model.
     * 
     * A #DeeSharedModel with a schema manually set has to be created before
     * creating more #DeeSharedModel with the same `name`.
     * 
     * A shared model created with this constructor will store row data in a
     * suitably picked memory backed model.
     * @constructor 
     * @param peer A #DeePeer instance.
     */
    static newForPeer(peer: Peer): SharedModel
    /**
     * Create a new shared model storing all data in `back_end`.
     * 
     * The model will start synchronizing with peer models as soon as possible and
     * the #DeeSharedModel:synchronized property will be set once finished.
     * @constructor 
     * @param name A well known name to publish this model under.        Models sharing this name will synchronize with each other
     * @param backEnd The #DeeModel that will actually store            the model data. Ownership of the ref to `back_end` is transfered to            the shared model.
     */
    static newWithBackEnd(name: string, backEnd: Model): SharedModel
    _init(config?: SharedModel.ConstructorProperties): void
}

export module TermList {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TermList {

    // Owm methods of Dee-1.0.Dee.TermList

    // Has conflict: addTerm(term: string): TermList
    // Has conflict: clear(): TermList
    // Has conflict: clone(): TermList
    // Has conflict: getTerm(n: number): string
    // Has conflict: numTerms(): number

    // Own virtual methods of Dee-1.0.Dee.TermList

    /**
     * Add a term to the termlist. Note that it is possible to add a term multiple
     * times. The effect of this is determined by the #DeeModelIndex consuming the
     * #DeeTermList.
     * @virtual 
     * @param term The term to add
     */
    addTerm(term: string): TermList
    /**
     * Remove all terms from a term list making it ready for reuse. Note that
     * term list implementations will often have optimized memory allocation
     * schemes so reuse is often more efficient than allocating a new term list
     * each time you need it.
     * @virtual 
     */
    clear(): TermList
    /**
     * Create a copy of `self` that shares the underlying string pool and containing
     * a list of terms as currently set in `self`.
     * 
     * Subsequently freeing the original and keeping the clone around is not a
     * problem. The clone works as a standalone term list. The only gotcha may be
     * threading issues because of concurrent access to the shared string pool.
     * 
     * Creating a clone very efficient since only very little memory allocation
     * is required. It's advised that you use a clone instead a new instance
     * whenever you work over a common corpus of strings.
     * 
     * It is also worth noting that terms obtained from the original term list
     * and a clone can be compared directly as pointers (fx. with g_direct_equal()).
     * This is because they share the underlying string pool.
     * @virtual 
     */
    clone(): TermList
    /**
     * Get the n'th term in the list.
     * 
     * Note that in the default implementation it is guaranteed that the returned
     * string is valid for the entire lifetime of the #DeeTermList.
     * @virtual 
     * @param n The (zero based) offset into the term list
     */
    getTerm(n: number): string
    numTerms(): number

    // Class property signals of Dee-1.0.Dee.TermList

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeTermList structure are private and should never be
 * accessed directly
 * @class 
 */
export class TermList extends GObject.Object {

    // Own properties of Dee-1.0.Dee.TermList

    static name: string

    // Constructors of Dee-1.0.Dee.TermList

    constructor(config?: TermList.ConstructorProperties) 
    _init(config?: TermList.ConstructorProperties): void
}

export module TextAnalyzer {

    // Constructor properties interface

    export interface ConstructorProperties extends Analyzer.ConstructorProperties {
    }

}

export interface TextAnalyzer {

    // Class property signals of Dee-1.0.Dee.TextAnalyzer

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeTextAnalyzer structure are private and should never be
 * accessed directly
 * @class 
 */
export class TextAnalyzer extends Analyzer {

    // Own properties of Dee-1.0.Dee.TextAnalyzer

    static name: string

    // Constructors of Dee-1.0.Dee.TextAnalyzer

    constructor(config?: TextAnalyzer.ConstructorProperties) 
    constructor() 
    static new(): TextAnalyzer

    // Overloads of new

    static new(): Analyzer
    _init(config?: TextAnalyzer.ConstructorProperties): void
}

export module Transaction {

    // Constructor properties interface

    export interface ConstructorProperties extends Model.ConstructorProperties, Serializable.ConstructorProperties, SerializableModel.ConstructorProperties {

        // Own constructor properties of Dee-1.0.Dee.Transaction

        target?: Model | null
    }

}

export interface Transaction extends Model, Serializable {

    // Own properties of Dee-1.0.Dee.Transaction

    readonly target: Model

    // Owm methods of Dee-1.0.Dee.Transaction

    /**
     * Apply a transaction to its target model. After this call the transaction
     * is invalidated and must be freed with g_object_unref().
     */
    commit(): boolean
    /**
     * Get the target model of a transaction. This is just a convenience method
     * for accessing the :target property.
     */
    getTarget(): Model
    /**
     * Check if a #DeeTransaction has been committed. This method is mainly for
     * debugging and testing purposes.
     */
    isCommitted(): boolean

    // Class property signals of Dee-1.0.Dee.Transaction

    connect(sigName: "notify::target", callback: any): number
    on(sigName: "notify::target", callback: any): number
    once(sigName: "notify::target", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::target", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeTransaction structure are private and should never be
 * accessed directly
 * @class 
 */
export class Transaction extends SerializableModel {

    // Own properties of Dee-1.0.Dee.Transaction

    static name: string

    // Constructors of Dee-1.0.Dee.Transaction

    constructor(config?: Transaction.ConstructorProperties) 
    constructor(target: Model) 
    static new(target: Model): Transaction
    _init(config?: Transaction.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module TreeIndex {

    // Constructor properties interface

    export interface ConstructorProperties extends Index.ConstructorProperties {
    }

}

export interface TreeIndex {

    // Class property signals of Dee-1.0.Dee.TreeIndex

    connect(sigName: "notify::analyzer", callback: any): number
    on(sigName: "notify::analyzer", callback: any): number
    once(sigName: "notify::analyzer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::analyzer", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::reader", callback: any): number
    on(sigName: "notify::reader", callback: any): number
    once(sigName: "notify::reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * All fields in the DeeTreeIndex structure are private and should never be
 * accessed directly
 * @class 
 */
export class TreeIndex extends Index {

    // Own properties of Dee-1.0.Dee.TreeIndex

    static name: string

    // Constructors of Dee-1.0.Dee.TreeIndex

    constructor(config?: TreeIndex.ConstructorProperties) 
    /**
     * Create a new tree index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    constructor(model: Model, analyzer: Analyzer, reader: ModelReader) 
    /**
     * Create a new tree index.
     * @constructor 
     * @param model The model to index
     * @param analyzer The #DeeAnalyzer used to tokenize and filter the terms extracted            by `reader`
     * @param reader The #DeeModelReader used to extract terms from the model
     */
    static new(model: Model, analyzer: Analyzer, reader: ModelReader): TreeIndex
    _init(config?: TreeIndex.ConstructorProperties): void
}

export interface AnalyzerClass {

    // Own fields of Dee-1.0.Dee.AnalyzerClass

    analyze: (self: Analyzer, data: string, termsOut: TermList | null, colkeysOut: TermList | null) => void
    tokenize: (self: Analyzer, data: string, termsOut: TermList) => void
    addTermFilter: (self: Analyzer, filterFunc: TermFilterFunc) => void
    collateKey: (self: Analyzer, data: string) => string
    collateCmp: (self: Analyzer, key1: string, key2: string) => number
}

export abstract class AnalyzerClass {

    // Own properties of Dee-1.0.Dee.AnalyzerClass

    static name: string
}

export interface AnalyzerPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class AnalyzerPrivate {

    // Own properties of Dee-1.0.Dee.AnalyzerPrivate

    static name: string
}

export interface ClientClass {
}

export abstract class ClientClass {

    // Own properties of Dee-1.0.Dee.ClientClass

    static name: string
}

export interface ClientPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class ClientPrivate {

    // Own properties of Dee-1.0.Dee.ClientPrivate

    static name: string
}

export interface FileResourceManagerClass {

    // Own fields of Dee-1.0.Dee.FileResourceManagerClass

    parentClass: GObject.ObjectClass
}

export abstract class FileResourceManagerClass {

    // Own properties of Dee-1.0.Dee.FileResourceManagerClass

    static name: string
}

export interface Filter {

    // Own fields of Dee-1.0.Dee.Filter

    /**
     * The #DeeModelMapFunc used to construct
     *                              the initial contents of a #DeeFilterModel
     * @field 
     */
    mapFunc: FilterMapFunc
    /**
     * Callback invoked when the original model changes
     * @field 
     */
    mapNotify: FilterMapNotify
    /**
     * Callback for freeing the `user_data`
     * `userdata` (closure): Free form user data associated with the filter.
     *                       This pointer will be passed to `map_func` and `map_notify`
     * @field 
     */
    destroy: GLib.DestroyNotify
    userdata: object

    // Owm methods of Dee-1.0.Dee.Filter

    /**
     * Call the #DeeFilterMapFunc function of a #DeeFilter.
     * When using a #DeeFilterModel you should not call this method yourself.
     * @param origModel The model that is being filtered
     * @param filterModel The #DeeFilterModel that holds the                filtered subset of `orig_model`
     */
    map(origModel: Model, filterModel: FilterModel): void
    /**
     * Call the #DeeFilterMapNotify function of a #DeeFilter.
     * When using a #DeeFilterModel you should not call this method yourself.
     * @param origIter The #DeeModelIter added to `orig_model`
     * @param origModel The model that is being filtered
     * @param filterModel The #DeeFilterModel that holds the                filtered subset of `orig_model`
     */
    notify(origIter: ModelIter, origModel: Model, filterModel: FilterModel): boolean
}

/**
 * Structure encapsulating the mapping logic used to construct a #DeeFilterModel
 * @record 
 */
export class Filter {

    // Own properties of Dee-1.0.Dee.Filter

    static name: string

    // Constructors of Dee-1.0.Dee.Filter

    /**
     * Create a new #DeeFilter with the given parameters. This call will zero
     * the `out_filter` struct.
     * @param mapFunc The #DeeFilterMapFunc to use for the filter
     * @param mapNotify The #DeeFilterMapNotify to use for the filter
     */
    static new(mapFunc: FilterMapFunc, mapNotify: FilterMapNotify): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    static newCollator(column: number): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that takes string values from a column in the model
     * and builds a #DeeFilterModel with the rows sorted descending according to the
     * collation rules of the current locale.
     * @param column The index of a column containing the strings to sort after
     */
    static newCollatorDesc(column: number): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which match a variant value in a given column. A #DeeFilterModel
     * created with this filter will be ordered in accordance with its parent model.
     * 
     * This method will work on any column, disregarding its schema, since the
     * value comparison is done using g_variant_equal(). This means you can use
     * this filter as a convenient fallback when there is no predefined filter
     * for your column type if raw performance is not paramount.
     * @param column The index of a column containing the string to match
     * @param value A #GVariant value columns must match exactly.         The matching semantics are those of g_variant_equal(). If `value`         is floating the ownership will be transfered to the filter
     */
    static newForAnyColumn(column: number, value: GLib.Variant): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which has an exact match on some string column. A #DeeFilterModel created
     * with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string key to match
     * @param key 
     */
    static newForKeyColumn(column: number, key: string): /* outFilter */ Filter
    /**
     * Create a #DeeFilter that only includes rows from the original model
     * which match a regular expression on some string column. A #DeeFilterModel
     * created with this filter will be ordered in accordance with its parent model.
     * @param column The index of a column containing the string to match
     * @param regex The regular expression `column` must match
     */
    static newRegex(column: number, regex: GLib.Regex): /* outFilter */ Filter
    /**
     * Create a new #DeeFilter sorting a model according to a #DeeCompareRowFunc.
     * @param cmpRow A #DeeCompareRowFunc to use for sorting
     */
    static newSort(cmpRow: CompareRowFunc): /* outFilter */ Filter
}

export interface FilterModelClass {
}

export abstract class FilterModelClass {

    // Own properties of Dee-1.0.Dee.FilterModelClass

    static name: string
}

export interface FilterModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class FilterModelPrivate {

    // Own properties of Dee-1.0.Dee.FilterModelPrivate

    static name: string
}

export interface GListResultSetClass {

    // Own fields of Dee-1.0.Dee.GListResultSetClass

    parentClass: GObject.ObjectClass
}

export abstract class GListResultSetClass {

    // Own properties of Dee-1.0.Dee.GListResultSetClass

    static name: string
}

export interface HashIndexClass {

    // Own fields of Dee-1.0.Dee.HashIndexClass

    parentClass: IndexClass
}

export abstract class HashIndexClass {

    // Own properties of Dee-1.0.Dee.HashIndexClass

    static name: string
}

export interface HashIndexPrivate {
}

export class HashIndexPrivate {

    // Own properties of Dee-1.0.Dee.HashIndexPrivate

    static name: string
}

export interface ICUTermFilter {

    // Owm methods of Dee-1.0.Dee.ICUTermFilter

    /**
     * Apply a #DeeICUTermFilter on a piece of UTF-8 text.
     * @param text The text to apply the filter on
     */
    apply(text: string): string
    /**
     * Free all resources allocated by a #DeeICUTermFilter.
     */
    destroy(): void
}

export class ICUTermFilter {

    // Own properties of Dee-1.0.Dee.ICUTermFilter

    static name: string
}

export interface IndexClass {

    // Own fields of Dee-1.0.Dee.IndexClass

    parentClass: GObject.ObjectClass
    lookup: (self: Index, term: string, flags: TermMatchFlag) => ResultSet
    foreach: (self: Index, startTerm: string, func: IndexIterFunc) => void
    getNTerms: (self: Index) => number
    getNRows: (self: Index) => number
    getNRowsForTerm: (self: Index, term: string) => number
    getSupportedTermMatchFlags: (self: Index) => number
}

export abstract class IndexClass {

    // Own properties of Dee-1.0.Dee.IndexClass

    static name: string
}

export interface IndexPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class IndexPrivate {

    // Own properties of Dee-1.0.Dee.IndexPrivate

    static name: string
}

export interface ModelIface {

    // Own fields of Dee-1.0.Dee.ModelIface

    gIface: GObject.TypeInterface
    rowAdded: (self: Model, iter: ModelIter) => void
    rowRemoved: (self: Model, iter: ModelIter) => void
    rowChanged: (self: Model, iter: ModelIter) => void
    setSchemaFull: (self: Model, columnSchemas: string[]) => void
    getSchema: (self: Model) => string[]
    getColumnSchema: (self: Model, column: number) => string
    getFieldSchema: (self: Model, fieldName: string) => [ /* returnType */ string, /* outColumn */ number ]
    getColumnIndex: (self: Model, columnName: string) => number
    setColumnNamesFull: (self: Model, columnNames: string[]) => void
    getColumnNames: (self: Model) => string[]
    registerVardictSchema: (self: Model, numColumn: number, schemas: GLib.HashTable) => void
    getVardictSchema: (self: Model, numColumn: number) => GLib.HashTable
    getNColumns: (self: Model) => number
    getNRows: (self: Model) => number
    appendRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    prependRow: (self: Model, rowMembers: GLib.Variant[]) => ModelIter
    insertRow: (self: Model, pos: number, rowMembers: GLib.Variant[]) => ModelIter
    insertRowBefore: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => ModelIter
    insertRowSorted: (self: Model, rowMembers: GLib.Variant[], cmpFunc: CompareRowFunc) => ModelIter
    findRowSorted: (self: Model, rowSpec: GLib.Variant[], cmpFunc: CompareRowFunc) => [ /* returnType */ ModelIter, /* outWasFound */ boolean ]
    remove: (self: Model, iter: ModelIter) => void
    clear: (self: Model) => void
    setValue: (self: Model, iter: ModelIter, column: number, value: GLib.Variant) => void
    setRow: (self: Model, iter: ModelIter, rowMembers: GLib.Variant[]) => void
    getValue: (self: Model, iter: ModelIter, column: number) => GLib.Variant
    getValueByName: (self: Model, iter: ModelIter, columnName: string) => GLib.Variant
    getFirstIter: (self: Model) => ModelIter
    getLastIter: (self: Model) => ModelIter
    getIterAtRow: (self: Model, row: number) => ModelIter
    getBool: (self: Model, iter: ModelIter, column: number) => boolean
    getUchar: (self: Model, iter: ModelIter, column: number) => number
    getInt32: (self: Model, iter: ModelIter, column: number) => number
    getUint32: (self: Model, iter: ModelIter, column: number) => number
    getInt64: (self: Model, iter: ModelIter, column: number) => number
    getUint64: (self: Model, iter: ModelIter, column: number) => number
    getDouble: (self: Model, iter: ModelIter, column: number) => number
    getString: (self: Model, iter: ModelIter, column: number) => string
    next: (self: Model, iter: ModelIter) => ModelIter
    prev: (self: Model, iter: ModelIter) => ModelIter
    isFirst: (self: Model, iter: ModelIter) => boolean
    isLast: (self: Model, iter: ModelIter) => boolean
    getPosition: (self: Model, iter: ModelIter) => number
    registerTag: (self: Model, tagDestroy: GLib.DestroyNotify) => ModelTag
    getTag: (self: Model, iter: ModelIter, tag: ModelTag) => object | null
    setTag: (self: Model, iter: ModelIter, tag: ModelTag, value: object | null) => void
    getRow: (self: Model, iter: ModelIter, outRowMembers: GLib.Variant) => GLib.Variant
    beginChangeset: (self: Model) => void
    endChangeset: (self: Model) => void
    changesetStarted: (self: Model) => void
    changesetFinished: (self: Model) => void
}

export abstract class ModelIface {

    // Own properties of Dee-1.0.Dee.ModelIface

    static name: string
}

export interface ModelIter {
}

/**
 * The DeeModelIter structure is private and should only be used with the
 * provided #DeeModel API. It is owned by DeeModel and should not be freed.
 * @record 
 */
export class ModelIter {

    // Own properties of Dee-1.0.Dee.ModelIter

    static name: string
}

export interface ModelReader {

    // Own fields of Dee-1.0.Dee.ModelReader

    /**
     * The #DeeModelReaderFunc used to extract
     *                                 string from a model
     * @field 
     */
    readerFunc: ModelReaderFunc
    /**
     * user data to pass to `reader_func`
     * @field 
     */
    userdata: object
    /**
     * Called when the reader is destroyed
     * @field 
     */
    destroy: GLib.DestroyNotify

    // Owm methods of Dee-1.0.Dee.ModelReader

    /**
     * Read data from a row in a #DeeModel and extract a string representation from
     * it.
     * 
     * Note that generally a #DeeModelReader need not be confined to reading from
     * one specific column, although in practice most are.
     * @param model The #DeeModel to read a string from
     * @param iter The row to read a string from
     */
    read(model: Model, iter: ModelIter): string
}

/**
 * Structure encapsulating the information needed to read strings from a
 * model. Used for example by #DeeIndex.
 * @record 
 */
export class ModelReader {

    // Own properties of Dee-1.0.Dee.ModelReader

    static name: string

    // Constructors of Dee-1.0.Dee.ModelReader

    /**
     * Create a new #DeeModelReader with the given parameters. This call will zero
     * the `out_reader` struct.
     * @param readerFunc The #DeeModelReaderFunc to use for the reader
     */
    static new(readerFunc: ModelReaderFunc): /* outReader */ ModelReader
    /**
     * A #DeeModelReader reading a %gint32 from a #DeeModel at a given column
     * @param column The column index to read a %gint32 from
     */
    static newForInt32Column(column: number): /* outReader */ ModelReader
    /**
     * A #DeeModelReader reading a string from a #DeeModel at a given column
     * @param column The column index to read a string from
     */
    static newForStringColumn(column: number): /* outReader */ ModelReader
    /**
     * A #DeeModelReader reading a %guint32 from a #DeeModel at a given column
     * @param column The column index to read a %guint32 from
     */
    static newForUint32Column(column: number): /* outReader */ ModelReader
}

export interface ModelTag {
}

/**
 * The DeeModelTag structure is private and should only be used with the
 * provided #DeeModel API. It is owned by DeeModel and should not be freed.
 * @record 
 */
export class ModelTag {

    // Own properties of Dee-1.0.Dee.ModelTag

    static name: string
}

export interface PeerClass {

    // Own fields of Dee-1.0.Dee.PeerClass

    peerFound: (self: Peer, name: string) => void
    peerLost: (self: Peer, name: string) => void
    connectionAcquired: (self: Peer, connection: Gio.DBusConnection) => void
    connectionClosed: (self: Peer, connection: Gio.DBusConnection) => void
    getSwarmLeader: (self: Peer) => string
    isSwarmLeader: (self: Peer) => boolean
    getConnections: (self: Peer) => Gio.DBusConnection[]
    listPeers: (self: Peer) => string[]
}

export abstract class PeerClass {

    // Own properties of Dee-1.0.Dee.PeerClass

    static name: string
}

export interface PeerPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class PeerPrivate {

    // Own properties of Dee-1.0.Dee.PeerPrivate

    static name: string
}

export interface ProxyModelClass {
}

export abstract class ProxyModelClass {

    // Own properties of Dee-1.0.Dee.ProxyModelClass

    static name: string
}

export interface ProxyModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class ProxyModelPrivate {

    // Own properties of Dee-1.0.Dee.ProxyModelPrivate

    static name: string
}

export interface ResourceManagerIface {

    // Own fields of Dee-1.0.Dee.ResourceManagerIface

    gIface: GObject.TypeInterface
    store: (self: ResourceManager, resource: Serializable, resourceName: string) => boolean
    load: (self: ResourceManager, resourceName: string) => GObject.Object
}

export abstract class ResourceManagerIface {

    // Own properties of Dee-1.0.Dee.ResourceManagerIface

    static name: string
}

export interface ResultSetIface {

    // Own fields of Dee-1.0.Dee.ResultSetIface

    gIface: GObject.TypeInterface
    getNRows: (self: ResultSet) => number
    next: (self: ResultSet) => ModelIter
    hasNext: (self: ResultSet) => boolean
    peek: (self: ResultSet) => ModelIter
    seek: (self: ResultSet, pos: number) => void
    tell: (self: ResultSet) => number
    getModel: (self: ResultSet) => Model
}

export abstract class ResultSetIface {

    // Own properties of Dee-1.0.Dee.ResultSetIface

    static name: string
}

export interface SequenceModelClass {
}

export abstract class SequenceModelClass {

    // Own properties of Dee-1.0.Dee.SequenceModelClass

    static name: string
}

export interface SequenceModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class SequenceModelPrivate {

    // Own properties of Dee-1.0.Dee.SequenceModelPrivate

    static name: string
}

export interface SerializableIface {

    // Own fields of Dee-1.0.Dee.SerializableIface

    gIface: GObject.TypeInterface
    serialize: (self: Serializable) => GLib.Variant
}

export abstract class SerializableIface {

    // Own properties of Dee-1.0.Dee.SerializableIface

    static name: string
}

export interface SerializableModelClass {

    // Own fields of Dee-1.0.Dee.SerializableModelClass

    getSeqnum: (self: Model) => number
    setSeqnum: (self: Model, seqnum: number) => void
    incSeqnum: (self: Model) => number
}

export abstract class SerializableModelClass {

    // Own properties of Dee-1.0.Dee.SerializableModelClass

    static name: string
}

export interface SerializableModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class SerializableModelPrivate {

    // Own properties of Dee-1.0.Dee.SerializableModelPrivate

    static name: string
}

export interface ServerClass {
}

export abstract class ServerClass {

    // Own properties of Dee-1.0.Dee.ServerClass

    static name: string
}

export interface ServerPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class ServerPrivate {

    // Own properties of Dee-1.0.Dee.ServerPrivate

    static name: string
}

export interface SharedModelClass {
}

export abstract class SharedModelClass {

    // Own properties of Dee-1.0.Dee.SharedModelClass

    static name: string
}

export interface SharedModelPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class SharedModelPrivate {

    // Own properties of Dee-1.0.Dee.SharedModelPrivate

    static name: string
}

export interface TermListClass {

    // Own fields of Dee-1.0.Dee.TermListClass

    parentClass: GObject.ObjectClass
    getTerm: (self: TermList, n: number) => string
    addTerm: (self: TermList, term: string) => TermList
    numTerms: (self: TermList) => number
    clear: (self: TermList) => TermList
    clone: (self: TermList) => TermList
}

export abstract class TermListClass {

    // Own properties of Dee-1.0.Dee.TermListClass

    static name: string
}

export interface TermListPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class TermListPrivate {

    // Own properties of Dee-1.0.Dee.TermListPrivate

    static name: string
}

export interface TextAnalyzerClass {
}

export abstract class TextAnalyzerClass {

    // Own properties of Dee-1.0.Dee.TextAnalyzerClass

    static name: string
}

export interface TextAnalyzerPrivate {
}

export class TextAnalyzerPrivate {

    // Own properties of Dee-1.0.Dee.TextAnalyzerPrivate

    static name: string
}

export interface TransactionClass {
}

export abstract class TransactionClass {

    // Own properties of Dee-1.0.Dee.TransactionClass

    static name: string
}

export interface TransactionPrivate {
}

/**
 * Ignore this structure.
 * @record 
 */
export class TransactionPrivate {

    // Own properties of Dee-1.0.Dee.TransactionPrivate

    static name: string
}

export interface TreeIndexClass {

    // Own fields of Dee-1.0.Dee.TreeIndexClass

    parentClass: IndexClass
}

export abstract class TreeIndexClass {

    // Own properties of Dee-1.0.Dee.TreeIndexClass

    static name: string
}

export interface TreeIndexPrivate {
}

export class TreeIndexPrivate {

    // Own properties of Dee-1.0.Dee.TreeIndexPrivate

    static name: string
}
