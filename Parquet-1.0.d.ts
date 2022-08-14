
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Parquet-1.0
 */

import type * as Arrow from './Arrow-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * The major version.
 */
export const VERSION_MAJOR: number
/**
 * The micro version.
 */
export const VERSION_MICRO: number
/**
 * The minor version.
 */
export const VERSION_MINOR: number
/**
 * The version tag. Normally, it's an empty string. It's "SNAPSHOT"
 * for snapshot version.
 */
export const VERSION_TAG: string
export module ArrowFileReader {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Parquet-1.0.Parquet.ArrowFileReader

        arrowFileReader?: object | null
    }

}

export interface ArrowFileReader {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    readonly arrowFileReader: object

    // Own fields of Parquet-1.0.Parquet.ArrowFileReader

    parentInstance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.ArrowFileReader

    getNRowGroups(): number
    getSchema(): Arrow.Schema | null
    readColumnData(i: number): Arrow.ChunkedArray | null
    readRowGroup(rowGroupIndex: number, columnIndices: number[] | null): Arrow.Table | null
    readTable(): Arrow.Table | null
    setUseThreads(useThreads: boolean): void

    // Class property signals of Parquet-1.0.Parquet.ArrowFileReader

    connect(sigName: "notify::arrow-file-reader", callback: any): number
    on(sigName: "notify::arrow-file-reader", callback: any): number
    once(sigName: "notify::arrow-file-reader", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::arrow-file-reader", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ArrowFileReader extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReader

    static name: string

    // Constructors of Parquet-1.0.Parquet.ArrowFileReader

    constructor(config?: ArrowFileReader.ConstructorProperties) 
    static newArrow(source: Arrow.SeekableInputStream): ArrowFileReader
    static newPath(path: string): ArrowFileReader
    _init(config?: ArrowFileReader.ConstructorProperties): void
}

export module ArrowFileWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Parquet-1.0.Parquet.ArrowFileWriter

        arrowFileWriter?: object | null
    }

}

export interface ArrowFileWriter {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    readonly arrowFileWriter: object

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriter

    parentInstance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.ArrowFileWriter

    close(): boolean
    writeTable(table: Arrow.Table, chunkSize: number): boolean

    // Class property signals of Parquet-1.0.Parquet.ArrowFileWriter

    connect(sigName: "notify::arrow-file-writer", callback: any): number
    on(sigName: "notify::arrow-file-writer", callback: any): number
    once(sigName: "notify::arrow-file-writer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::arrow-file-writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ArrowFileWriter extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriter

    static name: string

    // Constructors of Parquet-1.0.Parquet.ArrowFileWriter

    constructor(config?: ArrowFileWriter.ConstructorProperties) 
    static newArrow(schema: Arrow.Schema, sink: Arrow.OutputStream, writerProperties: WriterProperties | null): ArrowFileWriter
    static newPath(schema: Arrow.Schema, path: string, writerProperties: WriterProperties | null): ArrowFileWriter
    _init(config?: ArrowFileWriter.ConstructorProperties): void
}

export module WriterProperties {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface WriterProperties {

    // Own fields of Parquet-1.0.Parquet.WriterProperties

    parentInstance: GObject.Object

    // Owm methods of Parquet-1.0.Parquet.WriterProperties

    disableDictionary(path: string | null): void
    enableDictionary(path: string | null): void
    getBatchSize(): number
    getCompressionPath(path: string): Arrow.CompressionType
    getDataPageSize(): number
    getDictionaryPageSizeLimit(): number
    getMaxRowGroupLength(): number
    isDictionaryEnabled(path: string): boolean
    setBatchSize(batchSize: number): void
    setCompression(compressionType: Arrow.CompressionType, path: string | null): void
    setDataPageSize(dataPageSize: number): void
    setDictionaryPageSizeLimit(limit: number): void
    setMaxRowGroupLength(length: number): void

    // Class property signals of Parquet-1.0.Parquet.WriterProperties

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class WriterProperties extends GObject.Object {

    // Own properties of Parquet-1.0.Parquet.WriterProperties

    static name: string

    // Constructors of Parquet-1.0.Parquet.WriterProperties

    constructor(config?: WriterProperties.ConstructorProperties) 
    constructor() 
    static new(): WriterProperties
    _init(config?: WriterProperties.ConstructorProperties): void
}

export interface ArrowFileReaderClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileReaderClass

    parentClass: GObject.ObjectClass
}

export abstract class ArrowFileReaderClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileReaderClass

    static name: string
}

export interface ArrowFileWriterClass {

    // Own fields of Parquet-1.0.Parquet.ArrowFileWriterClass

    parentClass: GObject.ObjectClass
}

export abstract class ArrowFileWriterClass {

    // Own properties of Parquet-1.0.Parquet.ArrowFileWriterClass

    static name: string
}

export interface WriterPropertiesClass {

    // Own fields of Parquet-1.0.Parquet.WriterPropertiesClass

    parentClass: GObject.ObjectClass
}

export abstract class WriterPropertiesClass {

    // Own properties of Parquet-1.0.Parquet.WriterPropertiesClass

    static name: string
}
