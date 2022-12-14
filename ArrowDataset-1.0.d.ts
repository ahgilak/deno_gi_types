
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ArrowDataset-1.0
 */

import type * as Arrow from './Arrow-1.0.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * They are corresponding to `arrow::dataset::SegmentEncoding` values.
 */
export enum SegmentEncoding {
    /**
     * No encoding.
     */
    NONE,
    /**
     * Segment values are URL-encoded.
     */
    URI,
}
export module CSVFileFormat {

    // Constructor properties interface

    export interface ConstructorProperties extends FileFormat.ConstructorProperties {
    }

}

export interface CSVFileFormat {

    // Own fields of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class CSVFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.CSVFileFormat

    constructor(config?: CSVFileFormat.ConstructorProperties) 
    constructor() 
    static new(): CSVFileFormat
    _init(config?: CSVFileFormat.ConstructorProperties): void
}

export module Dataset {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Dataset

        dataset?: object | null
    }

}

export interface Dataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Dataset

    readonly dataset: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.Dataset

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Dataset

    beginScan(): ScannerBuilder | null
    getTypeName(): string
    toTable(): Arrow.Table | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Dataset

    connect(sigName: "notify::dataset", callback: any): number
    on(sigName: "notify::dataset", callback: any): number
    once(sigName: "notify::dataset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dataset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Dataset extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Dataset

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Dataset

    constructor(config?: Dataset.ConstructorProperties) 
    _init(config?: Dataset.ConstructorProperties): void
}

export module DatasetFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

        datasetFactory?: object | null
    }

}

export interface DatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    readonly datasetFactory: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    finish(): Dataset | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    connect(sigName: "notify::dataset-factory", callback: any): number
    on(sigName: "notify::dataset-factory", callback: any): number
    once(sigName: "notify::dataset-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dataset-factory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DatasetFactory extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.DatasetFactory

    constructor(config?: DatasetFactory.ConstructorProperties) 
    _init(config?: DatasetFactory.ConstructorProperties): void
}

export module DirectoryPartitioning {

    // Constructor properties interface

    export interface ConstructorProperties extends KeyValuePartitioning.ConstructorProperties {
    }

}

export interface DirectoryPartitioning {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    connect(sigName: "notify::partitioning", callback: any): number
    on(sigName: "notify::partitioning", callback: any): number
    once(sigName: "notify::partitioning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class DirectoryPartitioning extends KeyValuePartitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioning

    constructor(config?: DirectoryPartitioning.ConstructorProperties) 
    constructor(schema: Arrow.Schema, dictionaries: Arrow.Array[] | null, options: PartitioningOptions | null) 
    static new(schema: Arrow.Schema, dictionaries: Arrow.Array[] | null, options: PartitioningOptions | null): DirectoryPartitioning

    // Overloads of new

    static new(): Partitioning
    _init(config?: DirectoryPartitioning.ConstructorProperties): void
}

export module FileFormat {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileFormat

        format?: object | null
    }

}

export interface FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormat

    readonly format: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileFormat

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileFormat

    equal(otherFormat: FileFormat): boolean
    getDefaultWriteOptions(): FileWriteOptions
    getTypeName(): string
    openWriter(destination: Arrow.OutputStream, fileSystem: Arrow.FileSystem, path: string, schema: Arrow.Schema, options: FileWriteOptions): FileWriter

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileFormat

    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileFormat extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileFormat

    constructor(config?: FileFormat.ConstructorProperties) 
    _init(config?: FileFormat.ConstructorProperties): void
}

export module FileSystemDataset {

    // Constructor properties interface

    export interface ConstructorProperties extends Dataset.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

        /**
         * File system of the dataset.
         */
        fileSystem?: Arrow.FileSystem | null
        /**
         * Format of the dataset.
         */
        format?: FileFormat | null
        /**
         * Partitioning of the dataset.
         */
        partitioning?: Partitioning | null
    }

}

export interface FileSystemDataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    /**
     * File system of the dataset.
     */
    readonly fileSystem: Arrow.FileSystem
    /**
     * Format of the dataset.
     */
    readonly format: FileFormat
    /**
     * Partitioning of the dataset.
     */
    readonly partitioning: Partitioning

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    connect(sigName: "notify::file-system", callback: any): number
    on(sigName: "notify::file-system", callback: any): number
    once(sigName: "notify::file-system", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: any): number
    on(sigName: "notify::partitioning", callback: any): number
    once(sigName: "notify::partitioning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: "notify::dataset", callback: any): number
    on(sigName: "notify::dataset", callback: any): number
    once(sigName: "notify::dataset", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dataset", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileSystemDataset extends Dataset {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDataset

    constructor(config?: FileSystemDataset.ConstructorProperties) 
    _init(config?: FileSystemDataset.ConstructorProperties): void
    static writeScanner(scanner: Scanner, options: FileSystemDatasetWriteOptions): boolean
}

export module FileSystemDatasetFactory {

    // Constructor properties interface

    export interface ConstructorProperties extends DatasetFactory.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

        /**
         * Format passed to #GADatasetFileSystemDataset.
         */
        format?: FileFormat | null
        /**
         * Partition base directory used by #GADatasetFileSystemDataset.
         */
        partitionBaseDir?: string | null
        /**
         * Partitioning used by #GADatasetFileSystemDataset.
         */
        partitioning?: Partitioning | null
    }

}

export interface FileSystemDatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    /**
     * File system passed to #GADatasetFileSystemDataset.
     */
    readonly fileSystem: Arrow.FileSystem
    /**
     * Format passed to #GADatasetFileSystemDataset.
     */
    readonly format: FileFormat
    /**
     * Partition base directory used by #GADatasetFileSystemDataset.
     */
    partitionBaseDir: string
    /**
     * Partitioning used by #GADatasetFileSystemDataset.
     */
    partitioning: Partitioning

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    parentInstance: any

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    addPath(path: string): boolean
    finish(): FileSystemDataset | null

    // Overloads of finish

    finish(): Dataset | null
    setFileSystem(fileSystem: Arrow.FileSystem): boolean
    setFileSystemUri(uri: string): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    connect(sigName: "notify::file-system", callback: any): number
    on(sigName: "notify::file-system", callback: any): number
    once(sigName: "notify::file-system", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::partition-base-dir", callback: any): number
    on(sigName: "notify::partition-base-dir", callback: any): number
    once(sigName: "notify::partition-base-dir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partition-base-dir", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: any): number
    on(sigName: "notify::partitioning", callback: any): number
    once(sigName: "notify::partitioning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: "notify::dataset-factory", callback: any): number
    on(sigName: "notify::dataset-factory", callback: any): number
    once(sigName: "notify::dataset-factory", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::dataset-factory", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileSystemDatasetFactory extends DatasetFactory {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactory

    constructor(config?: FileSystemDatasetFactory.ConstructorProperties) 
    constructor(fileFormat: FileFormat) 
    static new(fileFormat: FileFormat): FileSystemDatasetFactory
    _init(config?: FileSystemDatasetFactory.ConstructorProperties): void
}

export module FileSystemDatasetWriteOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

        baseDir?: string | null
        /**
         * Template string used to generate fragment base names. {i} will be
         * replaced by an auto incremented integer.
         */
        baseNameTemplate?: string | null
        fileSystem?: Arrow.FileSystem | null
        fileWriteOptions?: FileWriteOptions | null
        /**
         * Maximum number of partitions any batch may be written into.
         */
        maxPartitions?: number | null
        /**
         * #GADatasetPartitioning used to generate fragment paths.
         */
        partitioning?: Partitioning | null
    }

}

export interface FileSystemDatasetWriteOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    baseDir: string
    /**
     * Template string used to generate fragment base names. {i} will be
     * replaced by an auto incremented integer.
     */
    baseNameTemplate: string
    fileSystem: Arrow.FileSystem
    fileWriteOptions: FileWriteOptions
    /**
     * Maximum number of partitions any batch may be written into.
     */
    maxPartitions: number
    /**
     * #GADatasetPartitioning used to generate fragment paths.
     */
    partitioning: Partitioning

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    connect(sigName: "notify::base-dir", callback: any): number
    on(sigName: "notify::base-dir", callback: any): number
    once(sigName: "notify::base-dir", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-dir", ...args: any[]): void
    connect(sigName: "notify::base-name-template", callback: any): number
    on(sigName: "notify::base-name-template", callback: any): number
    once(sigName: "notify::base-name-template", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::base-name-template", ...args: any[]): void
    connect(sigName: "notify::file-system", callback: any): number
    on(sigName: "notify::file-system", callback: any): number
    once(sigName: "notify::file-system", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-system", ...args: any[]): void
    connect(sigName: "notify::file-write-options", callback: any): number
    on(sigName: "notify::file-write-options", callback: any): number
    once(sigName: "notify::file-write-options", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::file-write-options", ...args: any[]): void
    connect(sigName: "notify::max-partitions", callback: any): number
    on(sigName: "notify::max-partitions", callback: any): number
    once(sigName: "notify::max-partitions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::max-partitions", ...args: any[]): void
    connect(sigName: "notify::partitioning", callback: any): number
    on(sigName: "notify::partitioning", callback: any): number
    once(sigName: "notify::partitioning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileSystemDatasetWriteOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptions

    constructor(config?: FileSystemDatasetWriteOptions.ConstructorProperties) 
    constructor() 
    static new(): FileSystemDatasetWriteOptions
    _init(config?: FileSystemDatasetWriteOptions.ConstructorProperties): void
}

export module FileWriteOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

        options?: object | null
    }

}

export interface FileWriteOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    readonly options: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    connect(sigName: "notify::options", callback: any): number
    on(sigName: "notify::options", callback: any): number
    once(sigName: "notify::options", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::options", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileWriteOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileWriteOptions

    constructor(config?: FileWriteOptions.ConstructorProperties) 
    _init(config?: FileWriteOptions.ConstructorProperties): void
}

export module FileWriter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.FileWriter

        writer?: object | null
    }

}

export interface FileWriter {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriter

    readonly writer: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriter

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.FileWriter

    finish(): boolean
    writeRecordBatch(recordBatch: Arrow.RecordBatch): boolean
    writeRecordBatchReader(reader: Arrow.RecordBatchReader): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.FileWriter

    connect(sigName: "notify::writer", callback: any): number
    on(sigName: "notify::writer", callback: any): number
    once(sigName: "notify::writer", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::writer", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FileWriter extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriter

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.FileWriter

    constructor(config?: FileWriter.ConstructorProperties) 
    _init(config?: FileWriter.ConstructorProperties): void
}

export module Fragment {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Fragment

        fragment?: object | null
    }

}

export interface Fragment {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Fragment

    readonly fragment: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.Fragment

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Fragment

    connect(sigName: "notify::fragment", callback: any): number
    on(sigName: "notify::fragment", callback: any): number
    once(sigName: "notify::fragment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fragment", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Fragment extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Fragment

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Fragment

    constructor(config?: Fragment.ConstructorProperties) 
    _init(config?: Fragment.ConstructorProperties): void
}

export module IPCFileFormat {

    // Constructor properties interface

    export interface ConstructorProperties extends FileFormat.ConstructorProperties {
    }

}

export interface IPCFileFormat {

    // Own fields of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class IPCFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.IPCFileFormat

    constructor(config?: IPCFileFormat.ConstructorProperties) 
    constructor() 
    static new(): IPCFileFormat
    _init(config?: IPCFileFormat.ConstructorProperties): void
}

export module InMemoryFragment {

    // Constructor properties interface

    export interface ConstructorProperties extends Fragment.ConstructorProperties {
    }

}

export interface InMemoryFragment {

    // Own fields of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    connect(sigName: "notify::fragment", callback: any): number
    on(sigName: "notify::fragment", callback: any): number
    once(sigName: "notify::fragment", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::fragment", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class InMemoryFragment extends Fragment {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.InMemoryFragment

    constructor(config?: InMemoryFragment.ConstructorProperties) 
    constructor(schema: Arrow.Schema, recordBatches: Arrow.RecordBatch[]) 
    static new(schema: Arrow.Schema, recordBatches: Arrow.RecordBatch[]): InMemoryFragment
    _init(config?: InMemoryFragment.ConstructorProperties): void
}

export module KeyValuePartitioning {

    // Constructor properties interface

    export interface ConstructorProperties extends Partitioning.ConstructorProperties {
    }

}

export interface KeyValuePartitioning {

    // Own fields of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    connect(sigName: "notify::partitioning", callback: any): number
    on(sigName: "notify::partitioning", callback: any): number
    once(sigName: "notify::partitioning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class KeyValuePartitioning extends Partitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioning

    constructor(config?: KeyValuePartitioning.ConstructorProperties) 
    _init(config?: KeyValuePartitioning.ConstructorProperties): void
}

export module ParquetFileFormat {

    // Constructor properties interface

    export interface ConstructorProperties extends FileFormat.ConstructorProperties {
    }

}

export interface ParquetFileFormat {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    parentInstance: any

    // Class property signals of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ParquetFileFormat extends FileFormat {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.ParquetFileFormat

    constructor(config?: ParquetFileFormat.ConstructorProperties) 
    constructor() 
    static new(): ParquetFileFormat
    _init(config?: ParquetFileFormat.ConstructorProperties): void
}

export module Partitioning {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Partitioning

        partitioning?: object | null
    }

}

export interface Partitioning {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Partitioning

    readonly partitioning: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.Partitioning

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Partitioning

    getTypeName(): string

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Partitioning

    connect(sigName: "notify::partitioning", callback: any): number
    on(sigName: "notify::partitioning", callback: any): number
    once(sigName: "notify::partitioning", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::partitioning", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Partitioning extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Partitioning

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Partitioning

    constructor(config?: Partitioning.ConstructorProperties) 
    constructor() 
    static new(): Partitioning
    _init(config?: Partitioning.ConstructorProperties): void
}

export module PartitioningOptions {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

        /**
         * When inferring a schema for partition fields, yield dictionary
         * encoded types instead of plain. This can be more efficient when
         * materializing virtual columns, and Expressions parsed by the
         * finished Partitioning will include dictionaries of all unique
         * inspected values for each field.
         */
        inferDictionary?: boolean | null
        /**
         * Optionally, an expected schema can be provided, in which case
         * inference will only check discovered fields against the schema
         * and update internal state (such as dictionaries).
         */
        schema?: Arrow.Schema | null
        /**
         * After splitting a path into components, decode the path
         * components before parsing according to this scheme.
         */
        segmentEncoding?: SegmentEncoding | null
    }

}

export interface PartitioningOptions {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    /**
     * When inferring a schema for partition fields, yield dictionary
     * encoded types instead of plain. This can be more efficient when
     * materializing virtual columns, and Expressions parsed by the
     * finished Partitioning will include dictionaries of all unique
     * inspected values for each field.
     */
    inferDictionary: boolean
    /**
     * Optionally, an expected schema can be provided, in which case
     * inference will only check discovered fields against the schema
     * and update internal state (such as dictionaries).
     */
    schema: Arrow.Schema
    /**
     * After splitting a path into components, decode the path
     * components before parsing according to this scheme.
     */
    segmentEncoding: SegmentEncoding

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    parentInstance: GObject.Object

    // Class property signals of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    connect(sigName: "notify::infer-dictionary", callback: any): number
    on(sigName: "notify::infer-dictionary", callback: any): number
    once(sigName: "notify::infer-dictionary", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::infer-dictionary", ...args: any[]): void
    connect(sigName: "notify::schema", callback: any): number
    on(sigName: "notify::schema", callback: any): number
    once(sigName: "notify::schema", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::schema", ...args: any[]): void
    connect(sigName: "notify::segment-encoding", callback: any): number
    on(sigName: "notify::segment-encoding", callback: any): number
    once(sigName: "notify::segment-encoding", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::segment-encoding", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class PartitioningOptions extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.PartitioningOptions

    constructor(config?: PartitioningOptions.ConstructorProperties) 
    constructor() 
    static new(): PartitioningOptions
    _init(config?: PartitioningOptions.ConstructorProperties): void
}

export module Scanner {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.Scanner

        scanner?: object | null
    }

}

export interface Scanner {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Scanner

    readonly scanner: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.Scanner

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.Scanner

    toTable(): Arrow.Table | null

    // Class property signals of ArrowDataset-1.0.ArrowDataset.Scanner

    connect(sigName: "notify::scanner", callback: any): number
    on(sigName: "notify::scanner", callback: any): number
    once(sigName: "notify::scanner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scanner", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Scanner extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.Scanner

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.Scanner

    constructor(config?: Scanner.ConstructorProperties) 
    _init(config?: Scanner.ConstructorProperties): void
}

export module ScannerBuilder {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

        scannerBuilder?: object | null
    }

}

export interface ScannerBuilder {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    readonly scannerBuilder: object

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    parentInstance: GObject.Object

    // Owm methods of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    finish(): Scanner | null
    setFilter(expression: Arrow.Expression): boolean

    // Class property signals of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    connect(sigName: "notify::scanner-builder", callback: any): number
    on(sigName: "notify::scanner-builder", callback: any): number
    once(sigName: "notify::scanner-builder", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scanner-builder", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ScannerBuilder extends GObject.Object {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    static name: string

    // Constructors of ArrowDataset-1.0.ArrowDataset.ScannerBuilder

    constructor(config?: ScannerBuilder.ConstructorProperties) 
    constructor(dataset: Dataset) 
    static new(dataset: Dataset): ScannerBuilder
    static newRecordBatchReader(reader: Arrow.RecordBatchReader): ScannerBuilder
    _init(config?: ScannerBuilder.ConstructorProperties): void
}

export interface CSVFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.CSVFileFormatClass

    parentClass: FileFormatClass
}

export abstract class CSVFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.CSVFileFormatClass

    static name: string
}

export interface DatasetClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetClass

    parentClass: GObject.ObjectClass
}

export abstract class DatasetClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetClass

    static name: string
}

export interface DatasetFactoryClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DatasetFactoryClass

    parentClass: GObject.ObjectClass
}

export abstract class DatasetFactoryClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DatasetFactoryClass

    static name: string
}

export interface DirectoryPartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioningClass

    parentClass: KeyValuePartitioningClass
}

export abstract class DirectoryPartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.DirectoryPartitioningClass

    static name: string
}

export interface FileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileFormatClass

    parentClass: GObject.ObjectClass
}

export abstract class FileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileFormatClass

    static name: string
}

export interface FileSystemDatasetClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetClass

    parentClass: DatasetClass
}

export abstract class FileSystemDatasetClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetClass

    static name: string
}

export interface FileSystemDatasetFactoryClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactoryClass

    parentClass: DatasetFactoryClass
}

export abstract class FileSystemDatasetFactoryClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetFactoryClass

    static name: string
}

export interface FileSystemDatasetWriteOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class FileSystemDatasetWriteOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileSystemDatasetWriteOptionsClass

    static name: string
}

export interface FileWriteOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriteOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class FileWriteOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriteOptionsClass

    static name: string
}

export interface FileWriterClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FileWriterClass

    parentClass: GObject.ObjectClass
}

export abstract class FileWriterClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FileWriterClass

    static name: string
}

export interface FragmentClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.FragmentClass

    parentClass: GObject.ObjectClass
}

export abstract class FragmentClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.FragmentClass

    static name: string
}

export interface IPCFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.IPCFileFormatClass

    parentClass: FileFormatClass
}

export abstract class IPCFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.IPCFileFormatClass

    static name: string
}

export interface InMemoryFragmentClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.InMemoryFragmentClass

    parentClass: FragmentClass
}

export abstract class InMemoryFragmentClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.InMemoryFragmentClass

    static name: string
}

export interface KeyValuePartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioningClass

    parentClass: PartitioningClass
}

export abstract class KeyValuePartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.KeyValuePartitioningClass

    static name: string
}

export interface ParquetFileFormatClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ParquetFileFormatClass

    parentClass: FileFormatClass
}

export abstract class ParquetFileFormatClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ParquetFileFormatClass

    static name: string
}

export interface PartitioningClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningClass

    parentClass: GObject.ObjectClass
}

export abstract class PartitioningClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningClass

    static name: string
}

export interface PartitioningOptionsClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.PartitioningOptionsClass

    parentClass: GObject.ObjectClass
}

export abstract class PartitioningOptionsClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.PartitioningOptionsClass

    static name: string
}

export interface ScannerBuilderClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerBuilderClass

    parentClass: GObject.ObjectClass
}

export abstract class ScannerBuilderClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerBuilderClass

    static name: string
}

export interface ScannerClass {

    // Own fields of ArrowDataset-1.0.ArrowDataset.ScannerClass

    parentClass: GObject.ObjectClass
}

export abstract class ScannerClass {

    // Own properties of ArrowDataset-1.0.ArrowDataset.ScannerClass

    static name: string
}
