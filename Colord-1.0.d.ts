
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * Colord-1.0
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';

/**
 * Errors that can be thrown
 */
export enum ClientError {
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The profile already exists
     */
    ALREADY_EXISTS,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * Feature not supported
     */
    NOT_SUPPORTED,
    /**
     * Profile or device not found
     */
    NOT_FOUND,
    /**
     * One or more of the parameters is invalid
     */
    INPUT_INVALID,
    /**
     * The file if invalid
     */
    FILE_INVALID,
}
/**
 * Flags used when returning an RGB color from a temperature.
 */
export enum ColorBlackbodyFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Use Planckian below 5000K
     */
    USE_PLANCKIAN,
}
/**
 * The known colorspace.
 */
export enum Colorspace {
    UNKNOWN,
    XYZ,
    LAB,
    LUV,
    YCBCR,
    YXY,
    RGB,
    GRAY,
    HSV,
    CMYK,
    CMY,
}
/**
 * Errors that can be thrown
 */
export enum DeviceError {
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The profile does not exist
     */
    PROFILE_DOES_NOT_EXIST,
    /**
     * The profile has already been added
     */
    PROFILE_ALREADY_ADDED,
    /**
     * The device is being profiled
     */
    PROFILING,
    /**
     * Nothing matched the search term
     */
    NOTHING_MATCHED,
    /**
     * Cound not inhibit device
     */
    FAILED_TO_INHIBIT,
    /**
     * Cound not uninhibit device
     */
    FAILED_TO_UNINHIBIT,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * The device has been disabled
     */
    NOT_ENABLED,
}
/**
 * The device type.
 */
export enum DeviceKind {
    UNKNOWN,
    DISPLAY,
    SCANNER,
    PRINTER,
    CAMERA,
    WEBCAM,
}
/**
 * The device mode.
 */
export enum DeviceMode {
    UNKNOWN,
    PHYSICAL,
    VIRTUAL,
}
/**
 * The device to profile relationship.
 */
export enum DeviceRelation {
    UNKNOWN,
    SOFT,
    HARD,
}
/**
 * The ICC error code.
 */
export enum IccError {
    /**
     * Failed to open file
     */
    FAILED_TO_OPEN,
    /**
     * Failed to parse data
     */
    FAILED_TO_PARSE,
    /**
     * Locale was invalid
     */
    INVALID_LOCALE,
    /**
     * No data to read
     */
    NO_DATA,
    /**
     * Failed to save file
     */
    FAILED_TO_SAVE,
    /**
     * Failed to create file
     */
    FAILED_TO_CREATE,
    /**
     * Invalid colorspace
     */
    INVALID_COLORSPACE,
    /**
     * Corruption has been detected
     */
    CORRUPTION_DETECTED,
    /**
     * Something inside LCMS broke
     */
    INTERNAL,
}
/**
 * Flags used when saving an ICC profile.
 */
export enum IccSaveFlags {
    /**
     * No flags set.
     */
    NONE,
}
/**
 * Errors that can be thrown
 */
export enum It8Error {
    /**
     * the transaction failed for an unknown reason
     */
    FAILED,
    INVALID_FORMAT,
    UNKNOWN_KIND,
}
/**
 * The kind of IT8 file.
 */
export enum It8Kind {
    UNKNOWN,
    TI1,
    TI3,
    CCMX,
    CAL,
    CCSS,
    SPECT,
    CMF,
}
/**
 * The options type.
 */
export enum ObjectScope {
    UNKNOWN,
    NORMAL,
    TEMP,
    DISK,
}
/**
 * Errors that can be thrown
 */
export enum ProfileError {
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The profile is already installed
     */
    ALREADY_INSTALLED,
    /**
     * The profile could not be written
     */
    FAILED_TO_WRITE,
    /**
     * The profile could not be parsed
     */
    FAILED_TO_PARSE,
    /**
     * The profile could not be read
     */
    FAILED_TO_READ,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * One or more of the properties was invalid
     */
    PROPERTY_INVALID,
    /**
     * Failed to get UID for sender
     */
    FAILED_TO_GET_UID,
}
/**
 * The profile type.
 */
export enum ProfileKind {
    UNKNOWN,
    INPUT_DEVICE,
    DISPLAY_DEVICE,
    OUTPUT_DEVICE,
    DEVICELINK,
    COLORSPACE_CONVERSION,
    ABSTRACT,
    NAMED_COLOR,
}
/**
 * The quality of the profile produced through calibration.
 */
export enum ProfileQuality {
    /**
     * Low quality profile, fast
     */
    LOW,
    /**
     * Medium quality profile
     */
    MEDIUM,
    /**
     * High quality profile, slow
     */
    HIGH,
}
/**
 * The warning about the profile. Profiles with warnings can still be
 * used, but may be of limited use.
 */
export enum ProfileWarning {
    /**
     * No error is found
     */
    NONE,
    /**
     * The description is missing or of zero length
     */
    DESCRIPTION_MISSING,
    /**
     * The copyright is missing or of zero length
     */
    COPYRIGHT_MISSING,
    /**
     * The video card gamma table is not monotonic
     */
    VCGT_NON_MONOTONIC,
    /**
     * Lab 100, 0, 0 does not map to RGB 255,255,255
     */
    SCUM_DOT,
    /**
     * There is significant a/b for gray
     */
    GRAY_AXIS_INVALID,
    /**
     * The gray ramp is not monotonic
     */
    GRAY_AXIS_NON_MONOTONIC,
    /**
     * One or more of the primaries are invalid
     */
    PRIMARIES_INVALID,
    /**
     * The primaries to not add to give D50 white
     */
    PRIMARIES_NON_ADDITIVE,
    /**
     * One or more of the primaries are outside of ROMM RGB
     */
    PRIMARIES_UNLIKELY,
    /**
     * RGB 255,255,255 does not return D50
     */
    WHITEPOINT_INVALID,
    /**
     * Whitepoint is outside of usual range
     */
    WHITEPOINT_UNLIKELY,
}
/**
 * The rendering intent.
 */
export enum RenderingIntent {
    /**
     * Unknown rendering intent
     */
    UNKNOWN,
    /**
     * Used for photos as it maintains contrast
     */
    PERCEPTUAL,
    /**
     * Used for graphic design and named colors
     */
    RELATIVE_COLORIMETRIC,
    /**
     * Used for business charts as it maintains saturation without dithering
     */
    SATURATION,
    /**
     * Used when a specific color is required
     */
    ABSOLUTE_COLORIMETRIC,
}
/**
 * The sensor capabilities, i.e. things the sensor can do.
 */
export enum SensorCap {
    UNKNOWN,
    LCD,
    CRT,
    PRINTER,
    SPOT,
    PROJECTOR,
    AMBIENT,
    CALIBRATION,
    LED,
    PLASMA,
    LCD_CCFL,
    LCD_RGB_LED,
    LCD_WHITE_LED,
    WIDE_GAMUT_LCD_CCFL,
    WIDE_GAMUT_LCD_RGB_LED,
    SPECTRAL,
    CALIBRATION_DARK,
    CALIBRATION_IRRADIANCE,
}
/**
 * The sensor error code.
 */
export enum SensorError {
    /**
     * This action is unsupported on this hardware
     */
    NO_SUPPORT,
    /**
     * The sensor provided no data
     */
    NO_DATA,
    /**
     * An internal error occurred
     */
    INTERNAL,
    /**
     * The sensor is already locked
     */
    ALREADY_LOCKED,
    /**
     * The sensor is not locked
     */
    NOT_LOCKED,
    /**
     * The sensor is already in use
     */
    IN_USE,
    /**
     * Authentication failed
     */
    FAILED_TO_AUTHENTICATE,
    /**
     * The sensor needs to be in the calibrate position
     */
    REQUIRED_POSITION_CALIBRATE,
    /**
     * The sensor needs to be in the surface position
     */
    REQUIRED_POSITION_SURFACE,
    /**
     * The sensor needs dark calibration
     */
    REQUIRED_DARK_CALIBRATION,
    /**
     * The sensor needs irradiance calibration
     */
    REQUIRED_IRRADIANCE_CALIBRATION,
}
/**
 * The sensor type.
 */
export enum SensorKind {
    UNKNOWN,
    DUMMY,
    HUEY,
    COLOR_MUNKI_PHOTO,
    SPYDER,
    DTP20,
    DTP22,
    DTP41,
    DTP51,
    DTP94,
    SPECTRO_SCAN,
    I1_PRO,
    COLORIMTRE_HCFR,
    I1_DISPLAY3,
    COLORHUG,
    SPYDER2,
    SPYDER3,
    COLORHUG_PLUS,
    I1_DISPLAY1,
    I1_DISPLAY2,
    DTP92,
    I1_MONITOR,
    SPYDER4,
    COLOR_MUNKI_SMILE,
    COLORHUG2,
    SPYDER5,
    SPARK,
    SPYDERX,
}
/**
 * The state of the sensor.
 */
export enum SensorState {
    UNKNOWN,
    STARTING,
    IDLE,
    MEASURING,
    BUSY,
}
/**
 * A standard colorspace
 */
export enum StandardSpace {
    UNKNOWN,
    SRGB,
    ADOBE_RGB,
    PROPHOTO_RGB,
}
/**
 * Flags used when loading an ICC profile.
 * @bitfield 
 */
export enum IccLoadFlags {
    /**
     * No flags set.
     */
    NONE,
    /**
     * Parse any named colors in the profile.
     */
    NAMED_COLORS,
    /**
     * Parse all translations in the profile.
     */
    TRANSLATIONS,
    /**
     * Parse the metadata in the profile.
     */
    METADATA,
    /**
     * Calculate the profile MD5 if a profile
     * 					ID was not supplied in the profile.
     */
    FALLBACK_MD5,
    /**
     * Parse the primaries in the profile.
     */
    PRIMARIES,
    /**
     * Load the characterization data from the profile
     */
    CHARACTERIZATION,
    ALL,
}
export const CLIENT_PROPERTY_DAEMON_VERSION: string
export const CLIENT_PROPERTY_SYSTEM_MODEL: string
export const CLIENT_PROPERTY_SYSTEM_VENDOR: string
export const DEVICE_METADATA_OUTPUT_EDID_MD5: string
export const DEVICE_METADATA_OUTPUT_PRIORITY: string
export const DEVICE_METADATA_OUTPUT_PRIORITY_PRIMARY: string
export const DEVICE_METADATA_OUTPUT_PRIORITY_SECONDARY: string
export const DEVICE_METADATA_OWNER_CMDLINE: string
export const DEVICE_METADATA_XRANDR_NAME: string
export const DEVICE_PROPERTY_COLORSPACE: string
export const DEVICE_PROPERTY_CREATED: string
export const DEVICE_PROPERTY_EMBEDDED: string
export const DEVICE_PROPERTY_ENABLED: string
export const DEVICE_PROPERTY_FORMAT: string
export const DEVICE_PROPERTY_ID: string
export const DEVICE_PROPERTY_KIND: string
export const DEVICE_PROPERTY_METADATA: string
export const DEVICE_PROPERTY_MODE: string
export const DEVICE_PROPERTY_MODEL: string
export const DEVICE_PROPERTY_MODIFIED: string
export const DEVICE_PROPERTY_OWNER: string
export const DEVICE_PROPERTY_PROFILES: string
export const DEVICE_PROPERTY_PROFILING_INHIBITORS: string
export const DEVICE_PROPERTY_SCOPE: string
export const DEVICE_PROPERTY_SEAT: string
export const DEVICE_PROPERTY_SERIAL: string
export const DEVICE_PROPERTY_VENDOR: string
export const PIXEL_FORMAT_ARGB32: number
export const PIXEL_FORMAT_BGRA32: number
export const PIXEL_FORMAT_CMYK32: number
export const PIXEL_FORMAT_RGB24: number
export const PIXEL_FORMAT_RGBA32: number
export const PIXEL_FORMAT_UNKNOWN: number
export const PROFILE_METADATA_ACCURACY_DE76_AVG: string
export const PROFILE_METADATA_ACCURACY_DE76_MAX: string
export const PROFILE_METADATA_ACCURACY_DE76_RMS: string
export const PROFILE_METADATA_CMF_BINARY: string
export const PROFILE_METADATA_CMF_PRODUCT: string
export const PROFILE_METADATA_CMF_VERSION: string
export const PROFILE_METADATA_CONNECTION_TYPE: string
export const PROFILE_METADATA_CONNECTION_TYPE_DISPLAYPORT: string
export const PROFILE_METADATA_CONNECTION_TYPE_DVI: string
export const PROFILE_METADATA_CONNECTION_TYPE_HDMI: string
export const PROFILE_METADATA_CONNECTION_TYPE_INTERNAL: string
export const PROFILE_METADATA_CONNECTION_TYPE_VGA: string
export const PROFILE_METADATA_DATA_SOURCE: string
export const PROFILE_METADATA_DATA_SOURCE_CALIB: string
export const PROFILE_METADATA_DATA_SOURCE_EDID: string
export const PROFILE_METADATA_DATA_SOURCE_STANDARD: string
export const PROFILE_METADATA_DATA_SOURCE_TEST: string
export const PROFILE_METADATA_EDID_MD5: string
export const PROFILE_METADATA_EDID_MNFT: string
export const PROFILE_METADATA_EDID_MODEL: string
export const PROFILE_METADATA_EDID_SERIAL: string
export const PROFILE_METADATA_EDID_VENDOR: string
export const PROFILE_METADATA_FILE_CHECKSUM: string
export const PROFILE_METADATA_LICENSE: string
export const PROFILE_METADATA_MAPPING_DEVICE_ID: string
export const PROFILE_METADATA_MAPPING_FORMAT: string
export const PROFILE_METADATA_MAPPING_QUALIFIER: string
export const PROFILE_METADATA_MEASUREMENT_DEVICE: string
export const PROFILE_METADATA_QUALITY: string
export const PROFILE_METADATA_QUALITY_HIGH: string
export const PROFILE_METADATA_QUALITY_LOW: string
export const PROFILE_METADATA_QUALITY_MEDIUM: string
export const PROFILE_METADATA_SCREEN_BRIGHTNESS: string
export const PROFILE_METADATA_SCREEN_SURFACE: string
export const PROFILE_METADATA_SCREEN_SURFACE_GLOSSY: string
export const PROFILE_METADATA_SCREEN_SURFACE_MATTE: string
export const PROFILE_METADATA_STANDARD_SPACE: string
export const PROFILE_PROPERTY_COLORSPACE: string
export const PROFILE_PROPERTY_CREATED: string
export const PROFILE_PROPERTY_FILENAME: string
export const PROFILE_PROPERTY_FORMAT: string
export const PROFILE_PROPERTY_HAS_VCGT: string
export const PROFILE_PROPERTY_ID: string
export const PROFILE_PROPERTY_IS_SYSTEM_WIDE: string
export const PROFILE_PROPERTY_KIND: string
export const PROFILE_PROPERTY_METADATA: string
export const PROFILE_PROPERTY_OWNER: string
export const PROFILE_PROPERTY_QUALIFIER: string
export const PROFILE_PROPERTY_SCOPE: string
export const PROFILE_PROPERTY_TITLE: string
export const PROFILE_PROPERTY_WARNINGS: string
export const SENSOR_METADATA_IMAGE_ATTACH: string
export const SENSOR_METADATA_IMAGE_CALIBRATE: string
export const SENSOR_METADATA_IMAGE_SCREEN: string
export const SENSOR_PROPERTY_CAPABILITIES: string
export const SENSOR_PROPERTY_EMBEDDED: string
export const SENSOR_PROPERTY_ID: string
export const SENSOR_PROPERTY_KIND: string
export const SENSOR_PROPERTY_LOCKED: string
export const SENSOR_PROPERTY_METADATA: string
export const SENSOR_PROPERTY_MODE: string
export const SENSOR_PROPERTY_MODEL: string
export const SENSOR_PROPERTY_NATIVE: string
export const SENSOR_PROPERTY_OPTIONS: string
export const SENSOR_PROPERTY_SERIAL: string
export const SENSOR_PROPERTY_STATE: string
export const SENSOR_PROPERTY_VENDOR: string
/**
 * Get the blackbody color for a specific temperature. If the temperature
 * range is outside 1000K to 10000K then the result is clipped.
 * @param temp the temperature in Kelvin
 * @param result the destination color
 */
export function colorGetBlackbodyRgb(temp: number, result: ColorRGB): boolean
/**
 * Get the blackbody color for a specific temperature. If the temperature
 * range is outside 1000K to 10000K then the result is clipped.
 * @param temp the temperature in Kelvin
 * @param result the destination color
 * @param flags some #CdColorBlackbodyFlags, e.g. %CD_COLOR_BLACKBODY_FLAG_USE_PLANCKIAN
 */
export function colorGetBlackbodyRgbFull(temp: number, result: ColorRGB, flags: ColorBlackbodyFlags): boolean
/**
 * Convert from one color format to another.
 * @param src the source color
 * @param dest the destination color
 */
export function colorRgb8ToRgb(src: ColorRGB8, dest: ColorRGB): void
/**
 * Interpolate the RGB array to a different size.
 * This uses the Akima interpolation algorithm unless the array would become
 * non-monotonic, in which case it falls back to linear interpolation.
 * @param array Input array
 * @param newLength the target length of the return array
 */
export function colorRgbArrayInterpolate(array: ColorRGB[], newLength: number): ColorRGB[]
/**
 * Checks the array for monotonicity.
 * @param array Input array
 */
export function colorRgbArrayIsMonotonic(array: ColorRGB[]): boolean
/**
 * Creates a new RGB array.
 */
export function colorRgbArrayNew(): ColorRGB[]
export function colorspaceFromString(colorspace: string): Colorspace
export function colorspaceToString(colorspace: Colorspace): string
/**
 * Clears a matrix value, setting all it's values to zero.
 * @param src the source
 */
export function mat33Clear(src: Mat3x3): void
/**
 * Copies the matrix.
 * The arguments `src` and `dest` cannot be the same value.
 * @param src the source
 * @param dest the destination
 */
export function mat33Copy(src: Mat3x3, dest: Mat3x3): void
/**
 * Gets the determinant of the matrix.
 * @param src the source
 */
export function mat33Determinant(src: Mat3x3): number
/**
 * Gets the raw data for the matrix.
 * @param src the matrix source
 */
export function mat33GetData(src: Mat3x3): number
/**
 * Initialises a matrix.
 * @param dest the destination matrix
 * @param m00 component value
 * @param m01 component value
 * @param m02 component value
 * @param m10 component value
 * @param m11 component value
 * @param m12 component value
 * @param m20 component value
 * @param m21 component value
 * @param m22 component value
 */
export function mat33Init(dest: Mat3x3, m00: number, m01: number, m02: number, m10: number, m11: number, m12: number, m20: number, m21: number, m22: number): void
/**
 * Determine whether all entries in the specified matrix are finite and not
 * NaNs.
 * @param mat the matrix to test
 */
export function mat33IsFinite(mat: Mat3x3): boolean
/**
 * Multiply (convolve) one matrix with another.
 * The arguments `mat_src1` cannot be the same as `mat_dest,` and
 * `mat_src2` cannot be the same as `mat_dest`.
 * @param matSrc1 the matrix source
 * @param matSrc2 the other matrix source
 * @param matDest the destination
 */
export function mat33MatrixMultiply(matSrc1: Mat3x3, matSrc2: Mat3x3, matDest: Mat3x3): void
/**
 * Normalizes a matrix
 * 
 * The arguments `src` and `dest` can be the same value.
 * @param src the source matrix
 * @param dest the destination matrix
 */
export function mat33Normalize(src: Mat3x3, dest: Mat3x3): void
/**
 * Inverts the matrix.
 * The arguments `src` and `dest` cannot be the same value.
 * @param src the source
 * @param dest the destination
 */
export function mat33Reciprocal(src: Mat3x3, dest: Mat3x3): boolean
/**
 * Multiplies a matrix with a scalar.
 * The arguments `vec_src` and `vec_dest` can be the same value.
 * @param matSrc the source
 * @param value the scalar
 * @param matDest the destination
 */
export function mat33ScalarMultiply(matSrc: Mat3x3, value: number, matDest: Mat3x3): void
/**
 * Sets the matrix to an identity value.
 * @param src the source
 */
export function mat33SetIdentity(src: Mat3x3): void
/**
 * Obtains a string representaton of a matrix.
 * @param src the source
 */
export function mat33ToString(src: Mat3x3): string
/**
 * Multiplies a matrix with a vector.
 * The arguments `vec_src` and `vec_dest` cannot be the same value.
 * @param matSrc the matrix source
 * @param vecSrc the vector source
 * @param vecDest the destination vector
 */
export function mat33VectorMultiply(matSrc: Mat3x3, vecSrc: Vec3, vecDest: Vec3): void
export function objectScopeFromString(objectScope: string): ObjectScope
export function objectScopeToString(objectScope: ObjectScope): string
export function pixelFormatFromString(pixelFormat: string): PixelFormat
export function pixelFormatToString(pixelFormat: PixelFormat): string
export function renderingIntentFromString(renderingIntent: string): RenderingIntent
export function renderingIntentToString(renderingIntent: RenderingIntent): string
/**
 * Gets the standard colorspace as a enumerated value.
 * @param standardSpace the standard colorspace, e.g. 'srgb'.
 */
export function standardSpaceFromString(standardSpace: string): StandardSpace
/**
 * Gets the standard colorspace as a string.
 * @param standardSpace a #CdStandardSpace
 */
export function standardSpaceToString(standardSpace: StandardSpace): string
export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `device-added`
     */
    export interface DeviceAddedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-changed`
     */
    export interface DeviceChangedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `device-removed`
     */
    export interface DeviceRemovedSignalCallback {
        (device: Device): void
    }

    /**
     * Signal callback interface for `profile-added`
     */
    export interface ProfileAddedSignalCallback {
        (profile: Profile): void
    }

    /**
     * Signal callback interface for `profile-changed`
     */
    export interface ProfileChangedSignalCallback {
        (profile: Profile): void
    }

    /**
     * Signal callback interface for `profile-removed`
     */
    export interface ProfileRemovedSignalCallback {
        (profile: Profile): void
    }

    /**
     * Signal callback interface for `sensor-added`
     */
    export interface SensorAddedSignalCallback {
        (sensor: Sensor): void
    }

    /**
     * Signal callback interface for `sensor-changed`
     */
    export interface SensorChangedSignalCallback {
        (sensor: Sensor): void
    }

    /**
     * Signal callback interface for `sensor-removed`
     */
    export interface SensorRemovedSignalCallback {
        (sensor: Sensor): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Client {

    // Own properties of Colord-1.0.Colord.Client

    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * The daemon version.
     */
    readonly daemonVersion: string
    /**
     * The system model.
     */
    readonly systemModel: string
    /**
     * The system vendor.
     */
    readonly systemVendor: string

    // Own fields of Colord-1.0.Colord.Client

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Client

    // Has conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connectFinish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the colord daemon.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Creates a color device.
     * @param id identifier for the device
     * @param scope the scope of the device
     * @param properties properties to   set on the device, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    createDevice(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    createDeviceFinish(res: Gio.AsyncResult): Device
    /**
     * Creates a color device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id identifier for the device
     * @param scope the scope of the device
     * @param properties properties to   set on the device, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    createDeviceSync(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null): Device
    /**
     * Creates a color profile.
     * @param id identifier for the profile
     * @param scope the scope of the profile
     * @param properties properties to   set on the profile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    createProfile(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    createProfileFinish(res: Gio.AsyncResult): Profile
    /**
     * Creates a color profile for an #CdIcc Object.
     * @param icc #CdIcc object
     * @param scope the scope of the profile
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    createProfileForIcc(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    createProfileForIccFinish(res: Gio.AsyncResult): Profile
    /**
     * Creates a color profile from a #CdIcc object.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param icc A #CdIcc
     * @param scope the scope of the profile
     * @param cancellable a #GCancellable, or %NULL
     */
    createProfileForIccSync(icc: Icc, scope: ObjectScope, cancellable: Gio.Cancellable | null): Profile
    /**
     * Creates a color profile.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id identifier for the device
     * @param scope the scope of the profile
     * @param properties properties to   set on the profile, or %NULL
     * @param cancellable a #GCancellable, or %NULL
     */
    createProfileSync(id: string, scope: ObjectScope, properties: GLib.HashTable | null, cancellable: Gio.Cancellable | null): Profile
    /**
     * Deletes a device.
     * @param device a #CdDevice
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    deleteDevice(device: Device, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    deleteDeviceFinish(res: Gio.AsyncResult): boolean
    /**
     * Deletes a color device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param device a #CdDevice.
     * @param cancellable a #GCancellable, or %NULL
     */
    deleteDeviceSync(device: Device, cancellable: Gio.Cancellable | null): boolean
    /**
     * Deletes a profile.
     * @param profile a #CdProfile
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    deleteProfile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    deleteProfileFinish(res: Gio.AsyncResult): boolean
    /**
     * Deletes a color profile.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile.
     * @param cancellable a #GCancellable, or %NULL
     */
    deleteProfileSync(profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Finds a device by an ID.
     * @param id a device id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    findDevice(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finds a color device that has a property value.
     * @param key the device property key
     * @param value the device property value
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    findDeviceByProperty(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    findDeviceByPropertyFinish(res: Gio.AsyncResult): Device
    /**
     * Finds a color device that has a property value.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The device property key.
     * @param value The device property value.
     * @param cancellable a #GCancellable or %NULL
     */
    findDeviceByPropertySync(key: string, value: string, cancellable: Gio.Cancellable | null): Device
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    findDeviceFinish(res: Gio.AsyncResult): Device
    /**
     * Finds a color device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id The device ID.
     * @param cancellable a #GCancellable or %NULL
     */
    findDeviceSync(id: string, cancellable: Gio.Cancellable | null): Device
    /**
     * Finds a profile by an ID.
     * @param id a profile id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    findProfile(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finds a profile by a filename.
     * @param filename a profile filename
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    findProfileByFilename(filename: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    findProfileByFilenameFinish(res: Gio.AsyncResult): Profile
    /**
     * Finds a color profile from its filename.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param filename filename for the profile
     * @param cancellable a #GCancellable, or %NULL
     */
    findProfileByFilenameSync(filename: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Finds a color profile that has a property value.
     * @param key the profile property key
     * @param value the profile property value
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    findProfileByProperty(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    findProfileByPropertyFinish(res: Gio.AsyncResult): Profile
    /**
     * Finds a color profile that has a property value.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The profile property key.
     * @param value The profile property value.
     * @param cancellable a #GCancellable or %NULL
     */
    findProfileByPropertySync(key: string, value: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    findProfileFinish(res: Gio.AsyncResult): Profile
    /**
     * Finds a color profile from its id.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id id for the profile
     * @param cancellable a #GCancellable, or %NULL
     */
    findProfileSync(id: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Finds a sensor by an ID.
     * @param id a sensor id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    findSensor(id: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    findSensorFinish(res: Gio.AsyncResult): Sensor
    /**
     * Finds a color sensor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param id The sensor ID.
     * @param cancellable a #GCancellable or %NULL
     */
    findSensorSync(id: string, cancellable: Gio.Cancellable | null): Sensor
    /**
     * Gets if the client has been connected.
     */
    getConnected(): boolean
    /**
     * Get colord daemon version.
     */
    getDaemonVersion(): string
    /**
     * Gets an array of color devices.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDevices(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets an array of color devices.
     * @param kind the type of device.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getDevicesByKind(kind: DeviceKind, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getDevicesByKindFinish(res: Gio.AsyncResult): Device[]
    /**
     * Get an array of the device objects of a specified kind.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param kind a #CdDeviceKind, e.g. %CD_DEVICE_KIND_DISPLAY
     * @param cancellable a #GCancellable or %NULL
     */
    getDevicesByKindSync(kind: DeviceKind, cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getDevicesFinish(res: Gio.AsyncResult): Device[]
    /**
     * Get an array of the device objects.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable, or %NULL
     */
    getDevicesSync(cancellable: Gio.Cancellable | null): Device[]
    /**
     * Gets if the colord server is currently running.
     * WARNING: This function may block for up to 5 seconds waiting for the daemon
     * to start if it is not already running.
     */
    getHasServer(): boolean
    /**
     * Gets an array of color profiles.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getProfiles(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getProfilesFinish(res: Gio.AsyncResult): Profile[]
    /**
     * Get an array of the profile objects.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable, or %NULL
     */
    getProfilesSync(cancellable: Gio.Cancellable | null): Profile[]
    /**
     * Gets an array of color sensors.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getSensors(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getSensorsFinish(res: Gio.AsyncResult): Sensor[]
    /**
     * Get an array of the sensor objects.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable, or %NULL
     */
    getSensorsSync(cancellable: Gio.Cancellable | null): Sensor[]
    /**
     * Finds a standard profile space.
     * @param standardSpace a profile id
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getStandardSpace(standardSpace: StandardSpace, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getStandardSpaceFinish(res: Gio.AsyncResult): Profile
    /**
     * Finds a standard colorspace.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param standardSpace standard colorspace value
     * @param cancellable a #GCancellable, or %NULL
     */
    getStandardSpaceSync(standardSpace: StandardSpace, cancellable: Gio.Cancellable | null): Profile
    /**
     * Get system model.
     */
    getSystemModel(): string
    /**
     * Get system vendor.
     */
    getSystemVendor(): string
    /**
     * Imports a color profile into the users home directory.
     * 
     * If the profile should be accessible for all users, then call
     * cd_profile_install_system_wide() on the result.
     * @param file a #GFile
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    importProfile(file: Gio.File, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    importProfileFinish(res: Gio.AsyncResult): Profile
    /**
     * Imports a color profile into the users home directory.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param file A #GFile
     * @param cancellable a #GCancellable, or %NULL
     */
    importProfileSync(file: Gio.File, cancellable: Gio.Cancellable | null): Profile

    // Own virtual methods of Colord-1.0.Colord.Client

    changed(): void
    deviceAdded(device: Device): void
    deviceChanged(device: Device): void
    deviceRemoved(device: Device): void
    profileAdded(profile: Profile): void
    profileChanged(profile: Profile): void
    profileRemoved(profile: Profile): void
    sensorAdded(sensor: Sensor): void
    sensorChanged(sensor: Sensor): void
    sensorRemoved(sensor: Sensor): void

    // Own signals of Colord-1.0.Colord.Client

    connect(sigName: "changed", callback: Client.ChangedSignalCallback): number
    on(sigName: "changed", callback: Client.ChangedSignalCallback): number
    once(sigName: "changed", callback: Client.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): number
    on(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): number
    once(sigName: "device-added", callback: Client.DeviceAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-added", ...args: any[]): void
    connect(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback): number
    on(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback): number
    once(sigName: "device-changed", callback: Client.DeviceChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-changed", ...args: any[]): void
    connect(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    on(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    once(sigName: "device-removed", callback: Client.DeviceRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "device-removed", ...args: any[]): void
    connect(sigName: "profile-added", callback: Client.ProfileAddedSignalCallback): number
    on(sigName: "profile-added", callback: Client.ProfileAddedSignalCallback): number
    once(sigName: "profile-added", callback: Client.ProfileAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "profile-added", ...args: any[]): void
    connect(sigName: "profile-changed", callback: Client.ProfileChangedSignalCallback): number
    on(sigName: "profile-changed", callback: Client.ProfileChangedSignalCallback): number
    once(sigName: "profile-changed", callback: Client.ProfileChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "profile-changed", ...args: any[]): void
    connect(sigName: "profile-removed", callback: Client.ProfileRemovedSignalCallback): number
    on(sigName: "profile-removed", callback: Client.ProfileRemovedSignalCallback): number
    once(sigName: "profile-removed", callback: Client.ProfileRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "profile-removed", ...args: any[]): void
    connect(sigName: "sensor-added", callback: Client.SensorAddedSignalCallback): number
    on(sigName: "sensor-added", callback: Client.SensorAddedSignalCallback): number
    once(sigName: "sensor-added", callback: Client.SensorAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "sensor-added", ...args: any[]): void
    connect(sigName: "sensor-changed", callback: Client.SensorChangedSignalCallback): number
    on(sigName: "sensor-changed", callback: Client.SensorChangedSignalCallback): number
    once(sigName: "sensor-changed", callback: Client.SensorChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "sensor-changed", ...args: any[]): void
    connect(sigName: "sensor-removed", callback: Client.SensorRemovedSignalCallback): number
    on(sigName: "sensor-removed", callback: Client.SensorRemovedSignalCallback): number
    once(sigName: "sensor-removed", callback: Client.SensorRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "sensor-removed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Client

    connect(sigName: "notify::connected", callback: any): number
    on(sigName: "notify::connected", callback: any): number
    once(sigName: "notify::connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::daemon-version", callback: any): number
    on(sigName: "notify::daemon-version", callback: any): number
    once(sigName: "notify::daemon-version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::daemon-version", ...args: any[]): void
    connect(sigName: "notify::system-model", callback: any): number
    on(sigName: "notify::system-model", callback: any): number
    once(sigName: "notify::system-model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-model", ...args: any[]): void
    connect(sigName: "notify::system-vendor", callback: any): number
    on(sigName: "notify::system-vendor", callback: any): number
    once(sigName: "notify::system-vendor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::system-vendor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Client extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Client

    static name: string

    // Constructors of Colord-1.0.Colord.Client

    constructor(config?: Client.ConstructorProperties) 
    /**
     * Creates a new #CdClient object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdClient object.
     * @constructor 
     */
    static new(): Client
    _init(config?: Client.ConstructorProperties): void
    /**
     * Converts a string to a #CdClientError.
     * @param errorDesc 
     */
    static errorFromString(errorDesc: string): ClientError
    static errorQuark(): GLib.Quark
    /**
     * Converts a #CdClientError to a string.
     * @param errorEnum 
     */
    static errorToString(errorEnum: ClientError): string
}

export module Device {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Colord-1.0.Colord.Device

        /**
         * The object path of the remote object
         */
        objectPath?: string | null
    }

}

export interface Device {

    // Own properties of Colord-1.0.Colord.Device

    /**
     * The device colorspace, e.g. %CD_COLORSPACE_RGB.
     */
    readonly colorspace: number
    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * The time the device was created.
     */
    readonly created: number
    /**
     * If the device is embedded in the device and cannot be removed.
     */
    readonly embedded: string
    /**
     * The device enabled state.
     */
    readonly enabled: boolean
    /**
     * The device format.
     */
    readonly format: string
    /**
     * The device ID.
     */
    readonly id: string
    /**
     * The device kind, e.g. %CD_DEVICE_KIND_DISPLAY.
     */
    readonly kind: number
    /**
     * The device colorspace, e.g. %CD_DEVICE_MODE_VIRTUAL.
     */
    readonly mode: number
    /**
     * The device model.
     */
    readonly model: string
    /**
     * The last time the device was modified.
     */
    readonly modified: number
    /**
     * The object path of the remote object
     */
    objectPath: string
    /**
     * The device owner, e.g. 500.
     */
    readonly owner: number
    readonly profilingInhibitors: string[]
    /**
     * The device scope, e.g. %CD_OBJECT_SCOPE_TEMP.
     */
    readonly scope: number
    /**
     * The device seat identifier.
     */
    readonly seat: string
    /**
     * The device serial number.
     */
    readonly serial: string
    /**
     * The device vendor.
     */
    readonly vendor: string

    // Own fields of Colord-1.0.Colord.Device

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Device

    /**
     * Adds a profile to a device.
     * @param relation a #CdDeviceRelation, e.g. #CD_DEVICE_RELATION_HARD
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    addProfile(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    addProfileFinish(res: Gio.AsyncResult): boolean
    /**
     * Adds a profile to a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param relation a #CdDeviceRelation, e.g. #CD_DEVICE_RELATION_HARD
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable or %NULL
     */
    addProfileSync(relation: DeviceRelation, profile: Profile, cancellable: Gio.Cancellable | null): boolean
    // Has conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connectFinish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the object and fills up initial properties.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Tests two devices for equality.
     * @param device2 another #CdDevice instance.
     */
    equal(device2: Device): boolean
    /**
     * Gets the device colorspace.
     */
    getColorspace(): Colorspace
    /**
     * Gets if the device has been connected.
     */
    getConnected(): boolean
    /**
     * Gets the device creation date.
     */
    getCreated(): number
    /**
     * Gets the default device profile. A profile will not be returned
     * if the device is being profiled or is disabled.
     */
    getDefaultProfile(): Profile
    /**
     * Returns if the device is embedded in the computer and cannot be
     * removed.
     */
    getEmbedded(): boolean
    /**
     * Gets the device enabled state.
     */
    getEnabled(): boolean
    /**
     * Gets the device format.
     */
    getFormat(): string
    /**
     * Gets the device ID.
     */
    getId(): string
    /**
     * Gets the device kind.
     */
    getKind(): DeviceKind
    /**
     * Returns the device metadata.
     */
    getMetadata(): GLib.HashTable
    /**
     * Returns the device metadata for a specific key.
     * @param key a key for the metadata dictionary
     */
    getMetadataItem(key: string): string
    /**
     * Gets the device mode.
     */
    getMode(): DeviceMode
    /**
     * Gets the device model.
     */
    getModel(): string
    /**
     * Gets the device modified date.
     */
    getModified(): number
    /**
     * Gets the object path for the device.
     */
    getObjectPath(): string
    /**
     * Gets the device owner.
     */
    getOwner(): number
    /**
     * Gets the preferred profile for some qualifiers.
     * @param qualifiers a set of qualifiers that can included wildcards
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getProfileForQualifiers(qualifiers: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getProfileForQualifiersFinish(res: Gio.AsyncResult): Profile
    /**
     * Gets the preferred profile for some qualifiers.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param qualifiers a set of qualifiers that can included wildcards
     * @param cancellable a #GCancellable or %NULL
     */
    getProfileForQualifiersSync(qualifiers: string, cancellable: Gio.Cancellable | null): Profile
    /**
     * Gets the property relationship to the device.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getProfileRelation(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getProfileRelationFinish(res: Gio.AsyncResult): DeviceRelation
    /**
     * Gets the property relationship to the device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile instance.
     * @param cancellable a #GCancellable or %NULL
     */
    getProfileRelationSync(profile: Profile, cancellable: Gio.Cancellable | null): DeviceRelation
    /**
     * Gets the device profiles.
     */
    getProfiles(): Profile[]
    /**
     * Gets any profiling inhibitors for the device.
     */
    getProfilingInhibitors(): string[]
    /**
     * Gets the device scope.
     */
    getScope(): ObjectScope
    /**
     * Gets the device seat identifier.
     */
    getSeat(): string
    /**
     * Gets the device serial number.
     */
    getSerial(): string
    /**
     * Gets the device vendor.
     */
    getVendor(): string
    /**
     * Makes an already added profile default for a device.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    makeProfileDefault(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    makeProfileDefaultFinish(res: Gio.AsyncResult): boolean
    /**
     * Makes an already added profile default for a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable or %NULL
     */
    makeProfileDefaultSync(profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets up the device for profiling and causes no profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    profilingInhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    profilingInhibitFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets up the device for profiling and causes no profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    profilingInhibitSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Restores the device after profiling and causes normal profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    profilingUninhibit(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    profilingUninhibitFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets up the device for profiling and causes no profiles to be
     * returned if cd_device_get_profile_for_qualifiers_sync() is used.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    profilingUninhibitSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Removes a profile from a device.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    removeProfile(profile: Profile, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    removeProfileFinish(res: Gio.AsyncResult): boolean
    /**
     * Removes a profile from a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param profile a #CdProfile instance
     * @param cancellable a #GCancellable or %NULL
     */
    removeProfileSync(profile: Profile, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device kind.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param colorspace The device colorspace, e.g. #CD_COLORSPACE_RGB
     * @param cancellable a #GCancellable or %NULL
     */
    setColorspaceSync(colorspace: Colorspace, cancellable: Gio.Cancellable | null): boolean
    /**
     * Enables or disables a device.
     * @param enabled the enabled state
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setEnabled(enabled: boolean, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    setEnabledFinish(res: Gio.AsyncResult): boolean
    /**
     * Enables or disables a device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param enabled the enabled state
     * @param cancellable a #GCancellable or %NULL
     */
    setEnabledSync(enabled: boolean, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device kind.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param kind The device kind, e.g. #CD_DEVICE_KIND_DISPLAY
     * @param cancellable a #GCancellable or %NULL
     */
    setKindSync(kind: DeviceKind, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device mode.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param mode The device kind, e.g. #CD_DEVICE_MODE_VIRTUAL
     * @param cancellable a #GCancellable or %NULL
     */
    setModeSync(mode: DeviceMode, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device model.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param value The model.
     * @param cancellable a #GCancellable or %NULL
     */
    setModelSync(value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the device.
     * @param objectPath The colord object path.
     */
    setObjectPath(objectPath: string): void
    /**
     * Sets a property on the device.
     * @param key a property key
     * @param value a property key
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setProperty(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    setPropertyFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets an object property.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The property key
     * @param value The property value
     * @param cancellable a #GCancellable or %NULL
     */
    setPropertySync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device serial number.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param value The string value.
     * @param cancellable a #GCancellable or %NULL
     */
    setSerialSync(value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the device vendor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param value The string value.
     * @param cancellable a #GCancellable or %NULL
     */
    setVendorSync(value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts the device to a string description.
     */
    toString(): string

    // Own virtual methods of Colord-1.0.Colord.Device

    changed(): void

    // Own signals of Colord-1.0.Colord.Device

    connect(sigName: "changed", callback: Device.ChangedSignalCallback): number
    on(sigName: "changed", callback: Device.ChangedSignalCallback): number
    once(sigName: "changed", callback: Device.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Device

    connect(sigName: "notify::colorspace", callback: any): number
    on(sigName: "notify::colorspace", callback: any): number
    once(sigName: "notify::colorspace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::colorspace", ...args: any[]): void
    connect(sigName: "notify::connected", callback: any): number
    on(sigName: "notify::connected", callback: any): number
    once(sigName: "notify::connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::created", callback: any): number
    on(sigName: "notify::created", callback: any): number
    once(sigName: "notify::created", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::embedded", callback: any): number
    on(sigName: "notify::embedded", callback: any): number
    once(sigName: "notify::embedded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::embedded", ...args: any[]): void
    connect(sigName: "notify::enabled", callback: any): number
    on(sigName: "notify::enabled", callback: any): number
    once(sigName: "notify::enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::enabled", ...args: any[]): void
    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: any): number
    on(sigName: "notify::kind", callback: any): number
    once(sigName: "notify::kind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::modified", callback: any): number
    on(sigName: "notify::modified", callback: any): number
    once(sigName: "notify::modified", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::modified", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::owner", callback: any): number
    on(sigName: "notify::owner", callback: any): number
    once(sigName: "notify::owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: "notify::profiling-inhibitors", callback: any): number
    on(sigName: "notify::profiling-inhibitors", callback: any): number
    once(sigName: "notify::profiling-inhibitors", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::profiling-inhibitors", ...args: any[]): void
    connect(sigName: "notify::scope", callback: any): number
    on(sigName: "notify::scope", callback: any): number
    once(sigName: "notify::scope", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::seat", callback: any): number
    on(sigName: "notify::seat", callback: any): number
    once(sigName: "notify::seat", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::seat", ...args: any[]): void
    connect(sigName: "notify::serial", callback: any): number
    on(sigName: "notify::serial", callback: any): number
    once(sigName: "notify::serial", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: any): number
    on(sigName: "notify::vendor", callback: any): number
    once(sigName: "notify::vendor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Device extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Device

    static name: string

    // Constructors of Colord-1.0.Colord.Device

    constructor(config?: Device.ConstructorProperties) 
    /**
     * Creates a new #CdDevice object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdDevice object.
     * @constructor 
     */
    static new(): Device
    /**
     * Creates a new #CdDevice object with a known object path.
     * @constructor 
     * @param objectPath The colord object path.
     */
    static newWithObjectPath(objectPath: string): Device
    _init(config?: Device.ConstructorProperties): void
    /**
     * Converts a string to a #CdDeviceError.
     * @param errorDesc 
     */
    static errorFromString(errorDesc: string): DeviceError
    static errorQuark(): GLib.Quark
    /**
     * Converts a #CdDeviceError to a string.
     * @param errorEnum 
     */
    static errorToString(errorEnum: DeviceError): string
    /**
     * Converts a string to a #CdDeviceKind.
     * @param kind 
     */
    static kindFromString(kind: string): DeviceKind
    /**
     * Gets the most suitable profile kind for a device kind.
     * @param deviceKind A #CdDeviceKind
     */
    static kindToProfileKind(deviceKind: DeviceKind): ProfileKind
    /**
     * Converts a #CdDeviceKind to a string.
     * @param kindEnum 
     */
    static kindToString(kindEnum: DeviceKind): string
    static modeFromString(deviceMode: string): DeviceMode
    static modeToString(deviceMode: DeviceMode): string
    static relationFromString(deviceRelation: string): DeviceRelation
    static relationToString(deviceRelation: DeviceRelation): string
}

export module Edid {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Edid {

    // Own fields of Colord-1.0.Colord.Edid

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Edid

    /**
     * Gets the blue primary.
     */
    getBlue(): ColorYxy
    /**
     * Gets the EDID MD5 checksum.
     */
    getChecksum(): string
    /**
     * Gets the EDID EISA ID.
     */
    getEisaId(): string
    /**
     * Gets the native panel gamma.
     */
    getGamma(): number
    /**
     * Gets the green primary.
     */
    getGreen(): ColorYxy
    /**
     * Gets the panel height in inches.
     */
    getHeight(): number
    /**
     * Gets the EDID monitor name.
     */
    getMonitorName(): string
    /**
     * Gets the EDID PNP ID.
     */
    getPnpId(): string
    /**
     * Gets the red primary.
     */
    getRed(): ColorYxy
    /**
     * Gets the EDID serial number.
     */
    getSerialNumber(): string
    /**
     * Gets the EDID vendor name.
     */
    getVendorName(): string
    /**
     * Gets the whitepoint.
     */
    getWhite(): ColorYxy
    /**
     * Gets the panel width in inches.
     */
    getWidth(): number
    /**
     * Parses the EDID.
     * @param edidData data to parse
     */
    parse(edidData: any): boolean
    /**
     * Resets all cached data.
     */
    reset(): void

    // Class property signals of Colord-1.0.Colord.Edid

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Edid extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Edid

    static name: string

    // Constructors of Colord-1.0.Colord.Edid

    constructor(config?: Edid.ConstructorProperties) 
    /**
     * Creates an object suitable for parsing an EDID.
     * @constructor 
     */
    constructor() 
    /**
     * Creates an object suitable for parsing an EDID.
     * @constructor 
     */
    static new(): Edid
    _init(config?: Edid.ConstructorProperties): void
    /**
     * Gets the #CdEdid error quark.
     */
    static errorQuark(): GLib.Quark
}

export module Icc {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Colord-1.0.Colord.Icc

        colorspace?: number | null
        kind?: number | null
        version?: number | null
    }

}

export interface Icc {

    // Own properties of Colord-1.0.Colord.Icc

    readonly blue: ColorXYZ
    readonly canDelete: boolean
    readonly checksum: string
    colorspace: number
    readonly filename: string
    readonly green: ColorXYZ
    kind: number
    readonly red: ColorXYZ
    readonly size: number
    readonly temperature: number
    version: number
    readonly white: ColorXYZ

    // Own fields of Colord-1.0.Colord.Icc

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Icc

    /**
     * Sets an item of data to the profile metadata, overwriting it if
     * it already exists.
     * @param key the metadata key
     * @param value the UTF-8 metadata value
     */
    addMetadata(key: string, value: string): void
    /**
     * Creates a default sRGB ICC profile.
     */
    createDefault(): boolean
    /**
     * Creates a default sRGB ICC profile.
     * @param flags a set of #CdIccLoadFlags
     */
    createDefaultFull(flags: IccLoadFlags): boolean
    /**
     * Creates an ICC profile from EDID data.
     * @param gammaValue approximate device gamma
     * @param red primary color value
     * @param green primary color value
     * @param blue primary color value
     * @param white whitepoint value
     */
    createFromEdid(gammaValue: number, red: ColorYxy, green: ColorYxy, blue: ColorYxy, white: ColorYxy): boolean
    /**
     * Creates an ICC profile from EDID data.
     * @param edid EDID data
     */
    createFromEdidData(edid: Edid): boolean
    /**
     * Gets the profile red chromaticity value.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    getBlue(): ColorXYZ
    /**
     * Finds out if the profile could be deleted.
     * This is only applicable for profiles loaded with cd_icc_load_file() as
     * obviously data and fd's cannot be sanely unlinked.
     */
    getCanDelete(): boolean
    /**
     * Gets any characterization data used to build the profile.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_CHARACTERIZATION flag.
     */
    getCharacterizationData(): string
    /**
     * Gets the profile checksum if one exists.
     * This will either be the embedded profile ID, or the file checksum if
     * the #CdIcc object was loaded using cd_icc_load_data() or cd_icc_load_file()
     * and the %CD_ICC_LOAD_FLAGS_FALLBACK_MD5 flag is used.
     */
    getChecksum(): string
    /**
     * Gets the profile colorspace
     */
    getColorspace(): Colorspace
    /**
     * Return the cmsContext instance used locally. This may be required if you
     * are using native LCMS calls and then cd_icc_load_handle().
     */
    getContext(): object | null
    /**
     * Gets the profile copyright.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    getCopyright(locale: string): string
    /**
     * Gets the ICC creation date and time.
     */
    getCreated(): GLib.DateTime
    /**
     * Gets the profile description.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    getDescription(locale: string): string
    /**
     * Gets the filename of the ICC data, if one exists.
     */
    getFilename(): string
    /**
     * Gets the profile green chromaticity value.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    getGreen(): ColorXYZ
    /**
     * Return the cmsHPROFILE instance used locally. This may be required if you
     * are using the profile in a transform.
     */
    getHandle(): object | null
    /**
     * Gets the profile kind.
     */
    getKind(): ProfileKind
    /**
     * Gets the profile manufacturer.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    getManufacturer(locale: string): string
    /**
     * Gets all the metadata from the ICC profile.
     */
    getMetadata(): GLib.HashTable
    /**
     * Gets an item of data from the ICC metadata store.
     * @param key the dictionary key
     */
    getMetadataItem(key: string): string
    /**
     * Gets the profile model.
     * If the translated text is not available in the selected locale then the
     * default untranslated (en_US) text is returned.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     */
    getModel(locale: string): string
    /**
     * Gets any named colors in the profile.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_NAMED_COLORS flag.
     */
    getNamedColors(): ColorSwatch[]
    /**
     * Gets the profile red chromaticity value.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    getRed(): ColorXYZ
    /**
     * Generates a response curve of a specified size.
     * @param size the size of the curve to generate
     */
    getResponse(size: number): ColorRGB[]
    /**
     * Gets the ICC profile file size
     */
    getSize(): number
    /**
     * Returns the raw data for the specific tag.
     * Most users do not need to do this.
     * @param tag a 4 bytes tag description, e.g. "cprt" or "vcgt"
     */
    getTagData(tag: string): any
    /**
     * Returns the internal tag table. Most users do not need to do this.
     */
    getTags(): string[]
    /**
     * Gets the ICC color temperature, rounded to the nearest 100K.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    getTemperature(): number
    /**
     * Gets the video card calibration data from the profile.
     * @param size the desired size of the table data
     */
    getVcgt(size: number): ColorRGB[]
    /**
     * Gets the ICC profile version, typically 2.1 or 4.2
     */
    getVersion(): number
    /**
     * Returns any warnings with profiles
     */
    getWarnings(): ProfileWarning[]
    /**
     * Gets the profile white point.
     * This function will only return results if the profile was loaded with the
     * %CD_ICC_LOAD_FLAGS_PRIMARIES flag.
     */
    getWhite(): ColorXYZ
    /**
     * Loads an ICC profile from raw byte data.
     * @param data binary data
     * @param flags a set of #CdIccLoadFlags
     */
    loadData(data: Uint8Array, flags: IccLoadFlags): boolean
    /**
     * Loads an ICC profile from an open file descriptor.
     * @param fd a file descriptor
     * @param flags a set of #CdIccLoadFlags
     */
    loadFd(fd: number, flags: IccLoadFlags): boolean
    /**
     * Loads an ICC profile from a local or remote file.
     * @param file a #GFile
     * @param flags a set of #CdIccLoadFlags
     * @param cancellable A #GCancellable or %NULL
     */
    loadFile(file: Gio.File, flags: IccLoadFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Set the internal cmsHPROFILE instance. This may be required if you create
     * the profile using cmsCreateRGBProfileTHR() and then want to use the
     * functionality in #CdIcc.
     * 
     * Do not call cmsCloseProfile() on `handle` in the caller, this will be done
     * when the `icc` object is finalized. Treat the profile like it's been adopted
     * by this module.
     * 
     * To handle the internal error callback, you should use the thread-safe
     * creation function, e.g. cmsCreateNULLProfileTHR(). The `context_id` should be
     * set as the value of cd_icc_get_context() for this object.
     * 
     * Additionally, this function cannot be called more than once, and also can't
     * be called if cd_icc_load_file() has previously been used on the `icc` object.
     * @param handle a cmsHPROFILE instance
     * @param flags a set of #CdIccLoadFlags
     */
    loadHandle(handle: object | null, flags: IccLoadFlags): boolean
    /**
     * Removes an item of metadata.
     * @param key the metadata key
     */
    removeMetadata(key: string): void
    /**
     * Saves an ICC profile to an allocated memory location.
     * 
     * Return vale: A #GBytes structure, or %NULL for error
     * @param flags a set of #CdIccSaveFlags
     */
    saveData(flags: IccSaveFlags): any
    /**
     * Saves an ICC profile to the default per-user location.
     * 
     * Return vale: %TRUE for success.
     * @param flags a set of #CdIccSaveFlags
     * @param cancellable A #GCancellable or %NULL
     */
    saveDefault(flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Saves an ICC profile to a local or remote file.
     * 
     * Return vale: %TRUE for success.
     * @param file a #GFile
     * @param flags a set of #CdIccSaveFlags
     * @param cancellable A #GCancellable or %NULL
     */
    saveFile(file: Gio.File, flags: IccSaveFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the characterization data used to build the profile.
     * @param data TI3 string data, or %NULL
     */
    setCharacterizationData(data: string): void
    /**
     * Sets the colorspace kind.
     * @param colorspace the profile colorspace, e.g. %CD_COLORSPACE_RGB
     */
    setColorspace(colorspace: Colorspace): void
    /**
     * Sets the profile _copyright for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    setCopyright(locale: string, value: string | null): void
    /**
     * Sets the profile copyrights for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    setCopyrightItems(values: GLib.HashTable): void
    /**
     * Sets the ICC creation date and time.
     * @param creationTime 
     */
    setCreated(creationTime: GLib.DateTime): void
    /**
     * Sets the profile description for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    setDescription(locale: string, value: string | null): void
    /**
     * Sets the profile descriptions for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    setDescriptionItems(values: GLib.HashTable): void
    /**
     * Sets the filename, which may be required if the ICC profile has been loaded
     * using cd_icc_load_fd() from a disk cache.
     * @param filename a filename, or %NULL
     */
    setFilename(filename: string): void
    /**
     * Sets the profile kind.
     * @param kind the profile kind, e.g. %CD_PROFILE_KIND_DISPLAY_DEVICE
     */
    setKind(kind: ProfileKind): void
    /**
     * Sets the profile manufacturer for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    setManufacturer(locale: string, value: string | null): void
    /**
     * Sets the profile manufacturers for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    setManufacturerItems(values: GLib.HashTable): void
    /**
     * Sets the profile model for a specific locale.
     * @param locale A locale, e.g. "en_GB.UTF-8" or %NULL for the profile default
     * @param value New UTF-8 string value
     */
    setModel(locale: string, value: string | null): void
    /**
     * Sets the profile models for specific locales.
     * @param values New translated values, with the key being the locale.
     */
    setModelItems(values: GLib.HashTable): void
    /**
     * Sets the raw data for the specific tag.
     * Most users do not need to do this.
     * @param tag a 4 bytes tag description, e.g. "cprt" or "vcgt"
     * @param data a variable sized data entry
     */
    setTagData(tag: string, data: any): boolean
    /**
     * Sets the Video Card Gamma Table from the profile.
     * 
     * Return vale: %TRUE for success.
     * @param vcgt video card calibration data
     */
    setVcgt(vcgt: ColorRGB[]): boolean
    /**
     * Sets the profile version.
     * @param version the profile version, e.g. 2.1 or 4.0
     */
    setVersion(version: number): void
    /**
     * Returns a string representation of the ICC profile.
     */
    toString(): string

    // Class property signals of Colord-1.0.Colord.Icc

    connect(sigName: "notify::blue", callback: any): number
    on(sigName: "notify::blue", callback: any): number
    once(sigName: "notify::blue", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::blue", ...args: any[]): void
    connect(sigName: "notify::can-delete", callback: any): number
    on(sigName: "notify::can-delete", callback: any): number
    once(sigName: "notify::can-delete", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::can-delete", ...args: any[]): void
    connect(sigName: "notify::checksum", callback: any): number
    on(sigName: "notify::checksum", callback: any): number
    once(sigName: "notify::checksum", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::checksum", ...args: any[]): void
    connect(sigName: "notify::colorspace", callback: any): number
    on(sigName: "notify::colorspace", callback: any): number
    once(sigName: "notify::colorspace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::colorspace", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::green", callback: any): number
    on(sigName: "notify::green", callback: any): number
    once(sigName: "notify::green", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::green", ...args: any[]): void
    connect(sigName: "notify::kind", callback: any): number
    on(sigName: "notify::kind", callback: any): number
    once(sigName: "notify::kind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::red", callback: any): number
    on(sigName: "notify::red", callback: any): number
    once(sigName: "notify::red", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::red", ...args: any[]): void
    connect(sigName: "notify::size", callback: any): number
    on(sigName: "notify::size", callback: any): number
    once(sigName: "notify::size", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::size", ...args: any[]): void
    connect(sigName: "notify::temperature", callback: any): number
    on(sigName: "notify::temperature", callback: any): number
    once(sigName: "notify::temperature", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::temperature", ...args: any[]): void
    connect(sigName: "notify::version", callback: any): number
    on(sigName: "notify::version", callback: any): number
    once(sigName: "notify::version", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::version", ...args: any[]): void
    connect(sigName: "notify::white", callback: any): number
    on(sigName: "notify::white", callback: any): number
    once(sigName: "notify::white", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::white", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Icc extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Icc

    static name: string

    // Constructors of Colord-1.0.Colord.Icc

    constructor(config?: Icc.ConstructorProperties) 
    /**
     * Creates a new #CdIcc object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdIcc object.
     * @constructor 
     */
    static new(): Icc
    _init(config?: Icc.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module It8 {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Colord-1.0.Colord.It8

        /**
         * The kind of IT8 file.
         */
        kind?: number | null
    }

}

export interface It8 {

    // Own properties of Colord-1.0.Colord.It8

    /**
     * The instrument that created the results, e.g. "huey"
     */
    readonly instrument: string
    /**
     * The kind of IT8 file.
     */
    kind: number
    /**
     * If the results file is normalized.
     */
    readonly normalized: boolean
    /**
     * The framework that created the results, e.g. "cd-self-test"
     */
    readonly originator: string
    /**
     * The reference that created the results, e.g. "colormunki"
     */
    readonly reference: string
    /**
     * If the results file is spectral.
     */
    readonly spectral: boolean
    /**
     * The file title, e.g. "Factor calibration".
     */
    readonly title: string

    // Own fields of Colord-1.0.Colord.It8

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.It8

    /**
     * Adds a reading to this object. If either of `rgb` or `xyz` is NULL then
     * a black reading (0.0, 0.0, 0.0) is added instead.
     * @param rgb a #CdColorRGB, or %NULL
     * @param xyz a #CdColorXYZ, or %NULL
     */
    addData(rgb: ColorRGB, xyz: ColorXYZ): void
    /**
     * Sets any extra options that have to be set in the CCMX file
     * @param option A IT8 option, e.g. "TYPE_LCD"
     */
    addOption(option: string): void
    /**
     * Adds a spectrum to the spectral array.
     * @param spectrum the spectral data
     */
    addSpectrum(spectrum: Spectrum): void
    /**
     * Gets a specific bit of data from this object.
     * The returned data are absolute readings and are not normalised.
     * @param idx the item index
     * @param rgb the returned RGB value
     * @param xyz the returned XYZ value
     */
    getDataItem(idx: number, rgb: ColorRGB, xyz: ColorXYZ): boolean
    /**
     * Gets the data size.
     */
    getDataSize(): number
    /**
     * Gets if the 'CREATED' attribute will be written. This is typically only
     * set in the self test programs.
     */
    getEnableCreated(): boolean
    /**
     * Gets the instrument the file was created by.
     */
    getInstrument(): string
    /**
     * Gets the kind of IT8 file.
     */
    getKind(): It8Kind
    /**
     * Gets the calibration matrix in the it8 file.
     */
    getMatrix(): Mat3x3
    /**
     * Gets if the data should be written normlaised to y=100.
     */
    getNormalized(): boolean
    /**
     * Gets the file orginator.
     */
    getOriginator(): string
    /**
     * Gets the reference the file was created against.
     */
    getReference(): string
    /**
     * Gets if the data is spectral or XYZ.
     */
    getSpectral(): boolean
    /**
     * Gets the spectral data of IT8 file.
     */
    getSpectrumArray(): Spectrum[]
    /**
     * Gets a specific spectrum in an IT8 file.
     * @param id the spectrum ID value
     */
    getSpectrumById(id: string): Spectrum
    /**
     * Gets the file title.
     */
    getTitle(): string
    /**
     * Gets the XYZ value for a specific RGB value.
     * @param r the red value
     * @param g the green value
     * @param b the blue value
     * @param delta the smallest difference between colors, e.g. 0.01f
     */
    getXyzForRgb(r: number, g: number, b: number, delta: number): ColorXYZ
    /**
     * Finds an option in the file.
     * @param option a option, e.g. "TYPE_CRT"
     */
    hasOption(option: string): boolean
    /**
     * Loads a it8 file from data.
     * @param data text data
     */
    loadFromData(data: string[]): boolean
    /**
     * Loads a it8 file from disk.
     * @param file a #GFile
     */
    loadFromFile(file: Gio.File): boolean
    /**
     * Saves a it8 file to an area of memory.
     * @param data a pointer to returned data
     */
    saveToData(data: string[]): boolean
    /**
     * Saves a it8 file to disk
     * @param file a #GFile
     */
    saveToFile(file: Gio.File): boolean
    /**
     * Sets if the 'CREATED' attribute should be written. This is mainly useful
     * in the self test programs where we want to string compare the output data
     * with a known reference.
     * @param enableCreated Is 'CREATED' should be written
     */
    setEnableCreated(enableCreated: boolean): void
    /**
     * Sets the measuring instrument that created the .it8 file
     * @param instrument the instruemnt name, e.g. "huey"
     */
    setInstrument(instrument: string): void
    /**
     * Set the kind of IT8 file.
     * @param kind a #CdIt8Kind, e.g %CD_IT8_KIND_TI3.
     */
    setKind(kind: It8Kind): void
    /**
     * Set the calibration matrix in the it8 file.
     * @param matrix a #CdMat3x3.
     */
    setMatrix(matrix: Mat3x3): void
    /**
     * Sets if normalized data should be written to the .it8 file.
     * @param normalized If the data is normalized
     */
    setNormalized(normalized: boolean): void
    /**
     * Sets the program name that created the .it8 file
     * @param originator the program name, e.g. "gcm-calibrate"
     */
    setOriginator(originator: string): void
    /**
     * Sets the reference that as used to create the .it8 reference
     * @param reference the instruemnt name, e.g. "colormunki"
     */
    setReference(reference: string): void
    /**
     * Sets if spectral data should be written to the .it8 file.
     * @param spectral If the data is spectral
     */
    setSpectral(spectral: boolean): void
    /**
     * Set the spectral data
     * @param data the spectral data
     */
    setSpectrumArray(data: Spectrum[]): void
    /**
     * Sets the display name for the file.
     * @param title the title name, e.g. "Factory calibration"
     */
    setTitle(title: string): void

    // Class property signals of Colord-1.0.Colord.It8

    connect(sigName: "notify::instrument", callback: any): number
    on(sigName: "notify::instrument", callback: any): number
    once(sigName: "notify::instrument", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::instrument", ...args: any[]): void
    connect(sigName: "notify::kind", callback: any): number
    on(sigName: "notify::kind", callback: any): number
    once(sigName: "notify::kind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::normalized", callback: any): number
    on(sigName: "notify::normalized", callback: any): number
    once(sigName: "notify::normalized", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::normalized", ...args: any[]): void
    connect(sigName: "notify::originator", callback: any): number
    on(sigName: "notify::originator", callback: any): number
    once(sigName: "notify::originator", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::originator", ...args: any[]): void
    connect(sigName: "notify::reference", callback: any): number
    on(sigName: "notify::reference", callback: any): number
    once(sigName: "notify::reference", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::reference", ...args: any[]): void
    connect(sigName: "notify::spectral", callback: any): number
    on(sigName: "notify::spectral", callback: any): number
    once(sigName: "notify::spectral", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::spectral", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class It8 extends GObject.Object {

    // Own properties of Colord-1.0.Colord.It8

    static name: string

    // Constructors of Colord-1.0.Colord.It8

    constructor(config?: It8.ConstructorProperties) 
    /**
     * Creates a new #CdIt8 object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdIt8 object.
     * @constructor 
     */
    static new(): It8
    /**
     * Creates a new #CdIt8 object.
     * @constructor 
     * @param kind a #CdIt8Kind, e.g %CD_IT8_KIND_TI3.
     */
    static newWithKind(kind: It8Kind): It8
    _init(config?: It8.ConstructorProperties): void
    static errorQuark(): GLib.Quark
}

export module Profile {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Colord-1.0.Colord.Profile

        /**
         * The object path of the remote object
         */
        objectPath?: string | null
    }

}

export interface Profile {

    // Own properties of Colord-1.0.Colord.Profile

    /**
     * The profile colorspace.
     */
    readonly colorspace: string
    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * When the profile was created.
     */
    readonly created: number
    /**
     * The profile filename.
     */
    readonly filename: string
    /**
     * The profile format.
     */
    readonly format: string
    /**
     * If the profile has a VCGT table.
     */
    readonly hasVcgt: string
    /**
     * The profile ID.
     */
    readonly id: string
    /**
     * If the profile is installed system wide for all users.
     */
    readonly isSystemWide: string
    /**
     * The profile kind.
     */
    readonly kind: string
    /**
     * The object path of the remote object
     */
    objectPath: string
    /**
     * The profile owner, e.g. %500.
     */
    readonly owner: number
    /**
     * The profile qualifier.
     */
    readonly qualifier: string
    /**
     * The profile scope, e.g. %CD_OBJECT_SCOPE_TEMP.
     */
    readonly scope: number
    /**
     * The profile title.
     */
    readonly title: string
    /**
     * The profile warnings, e.g. "vcgt-non-monotonic".
     */
    readonly warnings: string[]

    // Own fields of Colord-1.0.Colord.Profile

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Profile

    // Has conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connectFinish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the object and fills up initial properties.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Tests two profiles for equality.
     * @param profile2 another #CdProfile instance.
     */
    equal(profile2: Profile): boolean
    /**
     * Gets the profile age in seconds relative to the current time.
     */
    getAge(): number
    /**
     * Gets the profile colorspace.
     */
    getColorspace(): Colorspace
    /**
     * Gets if the profile has been connected.
     */
    getConnected(): boolean
    /**
     * Gets the profile created date and time.
     */
    getCreated(): number
    /**
     * Gets the profile filename.
     */
    getFilename(): string
    /**
     * Gets the profile format.
     */
    getFormat(): string
    /**
     * Returns if the profile has a VCGT table.
     */
    getHasVcgt(): boolean
    /**
     * Gets the profile ID.
     */
    getId(): string
    /**
     * Returns if the profile is installed system wide and available for all
     * users.
     */
    getIsSystemWide(): boolean
    /**
     * Gets the profile kind.
     */
    getKind(): ProfileKind
    /**
     * Returns the profile metadata.
     */
    getMetadata(): GLib.HashTable
    /**
     * Returns the profile metadata for a specific key.
     * @param key a key for the metadata dictionary
     */
    getMetadataItem(key: string): string
    /**
     * Gets the object path for the profile.
     */
    getObjectPath(): string
    /**
     * Gets the profile owner.
     */
    getOwner(): number
    /**
     * Gets the profile qualifier.
     */
    getQualifier(): string
    /**
     * Gets the profile scope.
     */
    getScope(): ObjectScope
    /**
     * Gets the profile title.
     */
    getTitle(): string
    /**
     * Gets the profile warnings as a string array.
     */
    getWarnings(): string[]
    /**
     * Gets if the current user has access permissions to the profile.
     */
    hasAccess(): boolean
    /**
     * Sets the profile system wide.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    installSystemWide(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    installSystemWideFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets the profile system wide.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    installSystemWideSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Loads a local ICC object from the abstract profile.
     * @param flags options for loading the profile
     * @param cancellable A #GCancellable, or %NULL
     */
    loadIcc(flags: IccLoadFlags, cancellable: Gio.Cancellable | null): Icc
    /**
     * Sets the object path of the profile.
     * @param objectPath The colord object path.
     */
    setObjectPath(objectPath: string): void
    /**
     * Deletes a color device.
     * @param key a key name
     * @param value a key value
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setProperty(key: string, value: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of setProperty

    /**
     * Sets a property on an object.
     * @param propertyName the name of the property to set
     * @param value the value
     */
    setProperty<T = any>(propertyName: string, value: T): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    setPropertyFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets properties on an object
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param key The key
     * @param value The value
     * @param cancellable a #GCancellable or %NULL
     */
    setPropertySync(key: string, value: string, cancellable: Gio.Cancellable | null): boolean
    /**
     * Converts the profile to a string description.
     */
    toString(): string

    // Own virtual methods of Colord-1.0.Colord.Profile

    changed(): void

    // Own signals of Colord-1.0.Colord.Profile

    connect(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    on(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    once(sigName: "changed", callback: Profile.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Profile

    connect(sigName: "notify::colorspace", callback: any): number
    on(sigName: "notify::colorspace", callback: any): number
    once(sigName: "notify::colorspace", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::colorspace", ...args: any[]): void
    connect(sigName: "notify::connected", callback: any): number
    on(sigName: "notify::connected", callback: any): number
    once(sigName: "notify::connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::created", callback: any): number
    on(sigName: "notify::created", callback: any): number
    once(sigName: "notify::created", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::created", ...args: any[]): void
    connect(sigName: "notify::filename", callback: any): number
    on(sigName: "notify::filename", callback: any): number
    once(sigName: "notify::filename", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::filename", ...args: any[]): void
    connect(sigName: "notify::format", callback: any): number
    on(sigName: "notify::format", callback: any): number
    once(sigName: "notify::format", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::format", ...args: any[]): void
    connect(sigName: "notify::has-vcgt", callback: any): number
    on(sigName: "notify::has-vcgt", callback: any): number
    once(sigName: "notify::has-vcgt", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::has-vcgt", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::is-system-wide", callback: any): number
    on(sigName: "notify::is-system-wide", callback: any): number
    once(sigName: "notify::is-system-wide", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::is-system-wide", ...args: any[]): void
    connect(sigName: "notify::kind", callback: any): number
    on(sigName: "notify::kind", callback: any): number
    once(sigName: "notify::kind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::owner", callback: any): number
    on(sigName: "notify::owner", callback: any): number
    once(sigName: "notify::owner", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::owner", ...args: any[]): void
    connect(sigName: "notify::qualifier", callback: any): number
    on(sigName: "notify::qualifier", callback: any): number
    once(sigName: "notify::qualifier", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::qualifier", ...args: any[]): void
    connect(sigName: "notify::scope", callback: any): number
    on(sigName: "notify::scope", callback: any): number
    once(sigName: "notify::scope", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::scope", ...args: any[]): void
    connect(sigName: "notify::title", callback: any): number
    on(sigName: "notify::title", callback: any): number
    once(sigName: "notify::title", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::title", ...args: any[]): void
    connect(sigName: "notify::warnings", callback: any): number
    on(sigName: "notify::warnings", callback: any): number
    once(sigName: "notify::warnings", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::warnings", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Profile extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Profile

    static name: string

    // Constructors of Colord-1.0.Colord.Profile

    constructor(config?: Profile.ConstructorProperties) 
    /**
     * Creates a new #CdProfile object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdProfile object.
     * @constructor 
     */
    static new(): Profile
    /**
     * Creates a new #CdProfile object with a known object path.
     * @constructor 
     * @param objectPath The colord object path.
     */
    static newWithObjectPath(objectPath: string): Profile
    _init(config?: Profile.ConstructorProperties): void
    /**
     * Converts a string to a #CdProfileError.
     * @param errorDesc 
     */
    static errorFromString(errorDesc: string): ProfileError
    static errorQuark(): GLib.Quark
    /**
     * Converts a #CdProfileError to a string.
     * @param errorEnum 
     */
    static errorToString(errorEnum: ProfileError): string
    static kindFromString(profileKind: string): ProfileKind
    static kindToString(profileKind: ProfileKind): string
    /**
     * Converts a string to a #CdProfileQuality.
     * @param quality 
     */
    static qualityFromString(quality: string): ProfileQuality
    /**
     * Converts a #CdProfileQuality to a string.
     * @param qualityEnum 
     */
    static qualityToString(qualityEnum: ProfileQuality): string
    /**
     * Converts a string to a #CdProfileWarning.
     * @param type 
     */
    static warningFromString(type: string): ProfileWarning
    /**
     * Converts a #CdProfileWarning to a string.
     * @param kindEnum 
     */
    static warningToString(kindEnum: ProfileWarning): string
}

export module Sensor {

    // Signal callback interfaces

    /**
     * Signal callback interface for `button-pressed`
     */
    export interface ButtonPressedSignalCallback {
        (): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of Colord-1.0.Colord.Sensor

        /**
         * The object path of the remote object
         */
        objectPath?: string | null
    }

}

export interface Sensor {

    // Own properties of Colord-1.0.Colord.Sensor

    /**
     * The if the object path has been connected as is valid for use.
     */
    readonly connected: string
    /**
     * If the sensor has a native driver.
     */
    readonly embedded: string
    /**
     * The object ID of the remote object
     */
    readonly id: string
    /**
     * The sensor kind.
     */
    readonly kind: string
    /**
     * If the sensor is locked.
     */
    readonly locked: string
    /**
     * The sensor mode.
     */
    readonly mode: string
    /**
     * The sensor model.
     */
    readonly model: string
    /**
     * If the sensor has a native driver.
     */
    readonly native: string
    /**
     * The object path of the remote object
     */
    objectPath: string
    /**
     * The sensor ID.
     */
    readonly serial: string
    /**
     * The sensor state.
     */
    readonly state: string
    /**
     * The sensor vendor.
     */
    readonly vendor: string

    // Own fields of Colord-1.0.Colord.Sensor

    parentInstance: GObject.Object

    // Owm methods of Colord-1.0.Colord.Sensor

    // Has conflict: connect(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    connectFinish(res: Gio.AsyncResult): boolean
    /**
     * Connects to the object and fills up initial properties.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    connectSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Tests two sensors for equality.
     * @param sensor2 another #CdSensor instance.
     */
    equal(sensor2: Sensor): boolean
    /**
     * Returns the sensor metadata.
     */
    getCaps(): number
    /**
     * Gets if the sensor has been connected.
     */
    getConnected(): boolean
    /**
     * Returns if the sensor is embedded into the computer.
     */
    getEmbedded(): boolean
    /**
     * Gets the object ID for the sensor.
     */
    getId(): string
    /**
     * Gets the sensor kind.
     */
    getKind(): SensorKind
    /**
     * Returns if the sensor is locked.
     */
    getLocked(): boolean
    /**
     * Returns the sensor metadata.
     */
    getMetadata(): GLib.HashTable
    /**
     * Returns the sensor metadata for a specific key.
     * @param key a key for the metadata dictionary
     */
    getMetadataItem(key: string): string
    /**
     * Gets the sensor operating mode.
     */
    getMode(): SensorCap
    /**
     * Gets the sensor model.
     */
    getModel(): string
    /**
     * Returns if the sensor has a native driver.
     */
    getNative(): boolean
    /**
     * Gets the object path for the sensor.
     */
    getObjectPath(): string
    /**
     * Gets a specific sensor option.
     * @param key a key to search for.
     */
    getOption(key: string): string
    /**
     * Gets any sensor options.
     */
    getOptions(): GLib.HashTable
    /**
     * Gets a color sample from a sensor
     * @param cap a #CdSensorCap
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getSample(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getSampleFinish(res: Gio.AsyncResult): ColorXYZ
    /**
     * Gets a sample from the sensor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cap The device capability, e.g. %CD_SENSOR_CAP_AMBIENT.
     * @param cancellable a #GCancellable or %NULL
     */
    getSampleSync(cap: SensorCap, cancellable: Gio.Cancellable | null): ColorXYZ
    /**
     * Gets the sensor serial number.
     */
    getSerial(): string
    /**
     * Gets a color spectrum from a sensor
     * @param cap a #CdSensorCap
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    getSpectrum(cap: SensorCap, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    getSpectrumFinish(res: Gio.AsyncResult): Spectrum
    /**
     * Gets a spectrum from the sensor.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cap The device capability, e.g. %CD_SENSOR_CAP_AMBIENT.
     * @param cancellable a #GCancellable or %NULL
     */
    getSpectrumSync(cap: SensorCap, cancellable: Gio.Cancellable | null): Spectrum
    /**
     * Gets the sensor state.
     */
    getState(): SensorState
    /**
     * Gets the sensor vendor.
     */
    getVendor(): string
    /**
     * Returns the sensor metadata for a specific key.
     * @param cap a specified capability, e.g. %CD_SENSOR_CAP_LCD
     */
    hasCap(cap: SensorCap): boolean
    /**
     * Locks the device so we can use it.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    lock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    lockFinish(res: Gio.AsyncResult): boolean
    /**
     * Locks the device so we can use it.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    lockSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Sets the object path of the sensor.
     * @param objectPath The colord object path.
     */
    setObjectPath(objectPath: string): void
    /**
     * Sets options on the sensor device.
     * @param values the options
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    setOptions(values: GLib.HashTable, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    setOptionsFinish(res: Gio.AsyncResult): boolean
    /**
     * Sets options on the sensor device.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param values the options
     * @param cancellable a #GCancellable or %NULL
     */
    setOptionsSync(values: GLib.HashTable, cancellable: Gio.Cancellable | null): boolean
    toString(): string
    /**
     * Unlocks the sensor for use by other programs.
     * @param cancellable a #GCancellable, or %NULL
     * @param callback the function to run on completion
     */
    unlock(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets the result from the asynchronous function.
     * @param res the #GAsyncResult
     */
    unlockFinish(res: Gio.AsyncResult): boolean
    /**
     * Unlocks the device for use by other programs.
     * 
     * WARNING: This function is synchronous, and may block.
     * Do not use it in GUI applications.
     * @param cancellable a #GCancellable or %NULL
     */
    unlockSync(cancellable: Gio.Cancellable | null): boolean

    // Own virtual methods of Colord-1.0.Colord.Sensor

    buttonPressed(): void

    // Own signals of Colord-1.0.Colord.Sensor

    connect(sigName: "button-pressed", callback: Sensor.ButtonPressedSignalCallback): number
    on(sigName: "button-pressed", callback: Sensor.ButtonPressedSignalCallback): number
    once(sigName: "button-pressed", callback: Sensor.ButtonPressedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "button-pressed", ...args: any[]): void

    // Class property signals of Colord-1.0.Colord.Sensor

    connect(sigName: "notify::connected", callback: any): number
    on(sigName: "notify::connected", callback: any): number
    once(sigName: "notify::connected", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connected", ...args: any[]): void
    connect(sigName: "notify::embedded", callback: any): number
    on(sigName: "notify::embedded", callback: any): number
    once(sigName: "notify::embedded", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::embedded", ...args: any[]): void
    connect(sigName: "notify::id", callback: any): number
    on(sigName: "notify::id", callback: any): number
    once(sigName: "notify::id", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::id", ...args: any[]): void
    connect(sigName: "notify::kind", callback: any): number
    on(sigName: "notify::kind", callback: any): number
    once(sigName: "notify::kind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::kind", ...args: any[]): void
    connect(sigName: "notify::locked", callback: any): number
    on(sigName: "notify::locked", callback: any): number
    once(sigName: "notify::locked", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::locked", ...args: any[]): void
    connect(sigName: "notify::mode", callback: any): number
    on(sigName: "notify::mode", callback: any): number
    once(sigName: "notify::mode", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::mode", ...args: any[]): void
    connect(sigName: "notify::model", callback: any): number
    on(sigName: "notify::model", callback: any): number
    once(sigName: "notify::model", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::model", ...args: any[]): void
    connect(sigName: "notify::native", callback: any): number
    on(sigName: "notify::native", callback: any): number
    once(sigName: "notify::native", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::native", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: "notify::serial", callback: any): number
    on(sigName: "notify::serial", callback: any): number
    once(sigName: "notify::serial", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::serial", ...args: any[]): void
    connect(sigName: "notify::state", callback: any): number
    on(sigName: "notify::state", callback: any): number
    once(sigName: "notify::state", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::state", ...args: any[]): void
    connect(sigName: "notify::vendor", callback: any): number
    on(sigName: "notify::vendor", callback: any): number
    once(sigName: "notify::vendor", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::vendor", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Sensor extends GObject.Object {

    // Own properties of Colord-1.0.Colord.Sensor

    static name: string

    // Constructors of Colord-1.0.Colord.Sensor

    constructor(config?: Sensor.ConstructorProperties) 
    /**
     * Creates a new #CdSensor object.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #CdSensor object.
     * @constructor 
     */
    static new(): Sensor
    /**
     * Creates a new #CdSensor object with a known object path.
     * @constructor 
     * @param objectPath The colord object path.
     */
    static newWithObjectPath(objectPath: string): Sensor
    _init(config?: Sensor.ConstructorProperties): void
    /**
     * Gets the sensor capability as a enumerated value.
     * @param sensorCap the sensor capability, e.g. 'projector'.
     */
    static capFromString(sensorCap: string): SensorCap
    /**
     * Gets the sensor capability as a string.
     * @param sensorCap a #CdSensorCap
     */
    static capToString(sensorCap: SensorCap): string
    /**
     * Converts a string to a #CdSensorError.
     * @param errorDesc 
     */
    static errorFromString(errorDesc: string): SensorError
    static errorQuark(): GLib.Quark
    /**
     * Converts a #CdSensorError to a string.
     * @param errorEnum 
     */
    static errorToString(errorEnum: SensorError): string
    /**
     * Gets the sensor kind as a enumerated value.
     * @param sensorKind the sensor kind, e.g. 'huey'.
     */
    static kindFromString(sensorKind: string): SensorKind
    /**
     * Gets the sensor kind as a string.
     * @param sensorKind a #CdSensorKind
     */
    static kindToString(sensorKind: SensorKind): string
    /**
     * Gets the sensor stateability as a enumerated value.
     * @param sensorState the sensor stateability, e.g. 'measuring'.
     */
    static stateFromString(sensorState: string): SensorState
    /**
     * Gets the sensor stateability as a string.
     * @param sensorState a #CdSensorState
     */
    static stateToString(sensorState: SensorState): string
}

export interface ClientClass {

    // Own fields of Colord-1.0.Colord.ClientClass

    parentClass: GObject.ObjectClass
    deviceAdded: (client: Client, device: Device) => void
    deviceRemoved: (client: Client, device: Device) => void
    deviceChanged: (client: Client, device: Device) => void
    profileAdded: (client: Client, profile: Profile) => void
    profileRemoved: (client: Client, profile: Profile) => void
    profileChanged: (client: Client, profile: Profile) => void
    sensorAdded: (client: Client, sensor: Sensor) => void
    sensorRemoved: (client: Client, sensor: Sensor) => void
    sensorChanged: (client: Client, sensor: Sensor) => void
    changed: (client: Client) => void
}

export abstract class ClientClass {

    // Own properties of Colord-1.0.Colord.ClientClass

    static name: string
}

export interface ColorLab {

    // Own fields of Colord-1.0.Colord.ColorLab

    l: number
    a: number
    b: number

    // Owm methods of Colord-1.0.Colord.ColorLab

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorLab): void
    /**
     * Calculates the ??E of two colors using the 1976 formula.
     * @param p2 Lab value 2
     */
    deltaE76(p2: ColorLab): number
    dup(): ColorLab
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Initialises a color value.
     * @param l component value
     * @param a component value
     * @param b component value
     */
    set(l: number, a: number, b: number): void
}

export class ColorLab {

    // Own properties of Colord-1.0.Colord.ColorLab

    static name: string

    // Constructors of Colord-1.0.Colord.ColorLab

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorLab
}

export interface ColorRGB {

    // Own fields of Colord-1.0.Colord.ColorRGB

    r: number
    g: number
    b: number

    // Owm methods of Colord-1.0.Colord.ColorRGB

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorRGB): void
    dup(): ColorRGB
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Set an RGB color which is roughly representative to the wavelength.
     * @param wavelength the wavelength roughly between 380nm and 780nm
     */
    fromWavelength(wavelength: number): void
    interpolate(p2: ColorRGB, index: number, result: ColorRGB): void
    /**
     * Initialises a color value.
     * @param r component value
     * @param g component value
     * @param b component value
     */
    set(r: number, g: number, b: number): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    toRgb8(dest: ColorRGB8): void
}

export class ColorRGB {

    // Own properties of Colord-1.0.Colord.ColorRGB

    static name: string

    // Constructors of Colord-1.0.Colord.ColorRGB

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorRGB
    /**
     * Interpolate the RGB array to a different size.
     * This uses the Akima interpolation algorithm unless the array would become
     * non-monotonic, in which case it falls back to linear interpolation.
     * @param array Input array
     * @param newLength the target length of the return array
     */
    static arrayInterpolate(array: ColorRGB[], newLength: number): ColorRGB[]
    /**
     * Checks the array for monotonicity.
     * @param array Input array
     */
    static arrayIsMonotonic(array: ColorRGB[]): boolean
    /**
     * Creates a new RGB array.
     */
    static arrayNew(): ColorRGB[]
}

export interface ColorRGB8 {

    // Own fields of Colord-1.0.Colord.ColorRGB8

    r: number
    g: number
    b: number
}

export class ColorRGB8 {

    // Own properties of Colord-1.0.Colord.ColorRGB8

    static name: string
}

export interface ColorSwatch {

    // Owm methods of Colord-1.0.Colord.ColorSwatch

    dup(): ColorSwatch
    /**
     * Deallocates a color swatch.
     */
    free(): void
    getName(): string
    getValue(): ColorLab
    /**
     * Initialises a swatch name.
     * @param name component name
     */
    setName(name: string): void
    /**
     * Initialises a swatch value.
     * @param value component value
     */
    setValue(value: ColorLab): void
}

export class ColorSwatch {

    // Own properties of Colord-1.0.Colord.ColorSwatch

    static name: string

    // Constructors of Colord-1.0.Colord.ColorSwatch

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorSwatch
}

export interface ColorUVW {

    // Own fields of Colord-1.0.Colord.ColorUVW

    u: number
    v: number
    w: number

    // Owm methods of Colord-1.0.Colord.ColorUVW

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorUVW): void
    dup(): ColorUVW
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Gets the chromaticity distance in the CIE 1960 UCS.
     * @param p2 color
     */
    getChromaDifference(p2: ColorUVW): number
    /**
     * Initialises a color value.
     * @param u component value
     * @param v component value
     * @param w component value
     */
    set(u: number, v: number, w: number): void
    /**
     * Sets the CIEUVW color from a Planckian locus of specific temperature.
     * @param temp temperature in Kelvin
     */
    setPlanckianLocus(temp: number): void
}

export class ColorUVW {

    // Own properties of Colord-1.0.Colord.ColorUVW

    static name: string

    // Constructors of Colord-1.0.Colord.ColorUVW

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorUVW
}

export interface ColorXYZ {

    // Own fields of Colord-1.0.Colord.ColorXYZ

    x: number
    y: number
    z: number

    // Owm methods of Colord-1.0.Colord.ColorXYZ

    /**
     * Initialises a color value.
     */
    clear(): void
    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorXYZ): void
    dup(): ColorXYZ
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Normalizes `src` to y=1.0
     * @param max 
     * @param dest the destination color
     */
    normalize(max: number, dest: ColorXYZ): void
    /**
     * Initialises a color value.
     * @param x component value
     * @param y component value
     * @param z component value
     */
    set(x: number, y: number, z: number): void
    /**
     * Gets the correlated color temperature for the XYZ value.
     */
    toCct(): number
    /**
     * Convert from one color format to another.
     * @param whitepoint the whitepoint
     * @param dest the destination color
     */
    toUvw(whitepoint: ColorXYZ, dest: ColorUVW): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    toYxy(dest: ColorYxy): void
}

export class ColorXYZ {

    // Own properties of Colord-1.0.Colord.ColorXYZ

    static name: string

    // Constructors of Colord-1.0.Colord.ColorXYZ

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorXYZ
}

export interface ColorYxy {

    // Own fields of Colord-1.0.Colord.ColorYxy

    y: number
    x: number

    // Owm methods of Colord-1.0.Colord.ColorYxy

    /**
     * Deep copies a color value.
     * @param dest the destination color
     */
    copy(dest: ColorYxy): void
    dup(): ColorYxy
    /**
     * Deallocates a color value.
     */
    free(): void
    /**
     * Initialises a color value.
     * @param y component value
     * @param x component value
     * @param y_ component value
     */
    set(y: number, x: number, y_: number): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    toUvw(dest: ColorUVW): void
    /**
     * Convert from one color format to another.
     * @param dest the destination color
     */
    toXyz(dest: ColorXYZ): void
}

export class ColorYxy {

    // Own properties of Colord-1.0.Colord.ColorYxy

    static name: string

    // Constructors of Colord-1.0.Colord.ColorYxy

    /**
     * Allocates a color value.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a color value.
     * @constructor 
     */
    static new(): ColorYxy
}

export interface DeviceClass {

    // Own fields of Colord-1.0.Colord.DeviceClass

    parentClass: GObject.ObjectClass
    changed: (device: Device) => void
}

export abstract class DeviceClass {

    // Own properties of Colord-1.0.Colord.DeviceClass

    static name: string
}

export interface EdidClass {

    // Own fields of Colord-1.0.Colord.EdidClass

    parentClass: GObject.ObjectClass
}

export abstract class EdidClass {

    // Own properties of Colord-1.0.Colord.EdidClass

    static name: string
}

export interface IccClass {

    // Own fields of Colord-1.0.Colord.IccClass

    parentClass: GObject.ObjectClass
}

export abstract class IccClass {

    // Own properties of Colord-1.0.Colord.IccClass

    static name: string
}

export interface It8Class {

    // Own fields of Colord-1.0.Colord.It8Class

    parentClass: GObject.ObjectClass
}

export abstract class It8Class {

    // Own properties of Colord-1.0.Colord.It8Class

    static name: string
}

export interface Mat3x3 {

    // Own fields of Colord-1.0.Colord.Mat3x3

    m00: number
    m01: number
    m02: number
    m10: number
    m11: number
    m12: number
    m20: number
    m21: number
    m22: number
}

export class Mat3x3 {

    // Own properties of Colord-1.0.Colord.Mat3x3

    static name: string
}

export interface ProfileClass {

    // Own fields of Colord-1.0.Colord.ProfileClass

    parentClass: GObject.ObjectClass
    changed: (profile: Profile) => void
}

export abstract class ProfileClass {

    // Own properties of Colord-1.0.Colord.ProfileClass

    static name: string
}

export interface SensorClass {

    // Own fields of Colord-1.0.Colord.SensorClass

    parentClass: GObject.ObjectClass
    buttonPressed: (sensor: Sensor) => void
}

export abstract class SensorClass {

    // Own properties of Colord-1.0.Colord.SensorClass

    static name: string
}

export interface Spectrum {

    // Owm methods of Colord-1.0.Colord.Spectrum

    /**
     * Adds a value in nm to the spectrum.
     * @param data 
     */
    addValue(data: number): void
    dup(): Spectrum
    /**
     * Deallocates a color spectrum.
     */
    free(): void
    /**
     * Gets the spectral data.
     * NOTE: This is not normalized
     */
    getData(): number[]
    /**
     * Gets the end value of the spectral data.
     */
    getEnd(): number
    /**
     * Gets the spectral data.
     */
    getId(): string
    /**
     * Gets the normalization value of the spectral data.
     * NOTE: This affects every value in the spectrum.
     */
    getNorm(): number
    /**
     * Gets the divisor of the spectra, for instance a .
     */
    getResolution(): number
    /**
     * Gets the size of the spectrum data.
     */
    getSize(): number
    /**
     * Gets the start value of the spectral data.
     */
    getStart(): number
    /**
     * Gets the spectrum data at a specified index.
     * @param idx an index into the data
     */
    getValue(idx: number): number
    /**
     * Gets the value from the spectral data for a given wavelength.
     * @param wavelength the wavelength in nm
     */
    getValueForNm(wavelength: number): number
    /**
     * Gets the largest normalised value in the spectrum.
     */
    getValueMax(): number
    /**
     * Gets the smallest normalised value in the spectrum.
     */
    getValueMin(): number
    /**
     * Gets the spectrum data at a specified index, without any normalization
     * applied. Most people should use cd_spectrum_get_value() instead.
     * @param idx an index into the data
     */
    getValueRaw(idx: number): number
    /**
     * Gets the wavelenth that corresponds to the specified index.
     * @param idx an index into the data
     */
    getWavelength(idx: number): number
    /**
     * Gets the calibration coefficients used to map pixel indexes to
     * wavelengths.
     * @param c1 the 1st coefficient
     * @param c2 the 2nd coefficient
     * @param c3 the 3rd coefficient
     */
    getWavelengthCal(c1: number, c2: number, c3: number): void
    /**
     * Ensures no values in the spectrum fall above a set limit. If they
     * are found, set them to `value`.
     * @param value the threshold value to limit the spectrum
     */
    limitMax(value: number): void
    /**
     * Ensures no values in the spectrum fall below a set limit. If they
     * are found, set them to `value`.
     * @param value the threshold value to limit the spectrum
     */
    limitMin(value: number): void
    /**
     * Multiplies two spectra together.
     * @param s2 a #CdSpectrum instance, possibly an absorption spectrum.
     * @param resolution the step size in nm
     */
    multiply(s2: Spectrum, resolution: number): Spectrum
    /**
     * Multiplies a spectra with a scalar value.
     * @param value a scalar value
     */
    multiplyScalar(value: number): Spectrum
    /**
     * Normalizes a spectrum to a specific value at a specific wavelength.
     * @param wavelength the wavelength in nm
     * @param value the value to normalize to
     */
    normalize(wavelength: number, value: number): void
    /**
     * Normalizes a spectrum to a specific value at its maximum value.
     * @param value the value to normalize to
     */
    normalizeMax(value: number): void
    /**
     * Resample a new spectrum with linear index to wavelength coefficients.
     * @param start the new spectrum start
     * @param end the new spectrum end
     * @param resolution the resolution to use when resampling
     */
    resample(start: number, end: number, resolution: number): Spectrum
    /**
     * Resample a new spectrum with the desired number of points.
     * @param size the output spectrum size
     */
    resampleToSize(size: number): Spectrum
    /**
     * Sets the spectrum data.
     * @param value component value
     */
    setData(value: number[]): void
    /**
     * Set the end value of the spectal data in nm.
     * 
     * If there is already spectral data, the wavelength calibration will
     * also be set automatically.
     * @param end the end value of the spectral data
     */
    setEnd(end: number): void
    /**
     * Sets a spectrum id.
     * @param id component id
     */
    setId(id: string): void
    /**
     * Set the normalization value of the spectrum.
     * NOTE: This affects every value in the spectrum.
     * @param norm the end value of the spectral data
     */
    setNorm(norm: number): void
    /**
     * Set the start value of the spectal data in nm.
     * @param start the start value of the spectral data
     */
    setStart(start: number): void
    /**
     * Overwrites the spectrum data at a specified index.
     * @param idx an index into the data
     * @param data a data value
     */
    setValue(idx: number, data: number): void
    /**
     * Sets the calibration coefficients used to map pixel indexes to
     * wavelengths.
     * 
     * This function will set the 'end' wavelength automatically,
     * potentially overwriting the value set by cd_spectrum_set_end().
     * @param c1 the 1st coefficient
     * @param c2 the 2nd coefficient
     * @param c3 the 3rd coefficient
     */
    setWavelengthCal(c1: number, c2: number, c3: number): void
    /**
     * Subtracts one spectral plot from another. If the spectra have the same start,
     * end and the same number of data points they are not resampled.
     * @param s2 a #CdSpectrum instance, e.g. a dark calibration
     * @param resolution the resolution to use when resampling
     */
    subtract(s2: Spectrum, resolution: number): Spectrum
    /**
     * Returns a graphical representation of the spectrum.
     * @param maxWidth the terminal width
     * @param maxHeight the terminal height
     */
    toString(maxWidth: number, maxHeight: number): string
}

export class Spectrum {

    // Own properties of Colord-1.0.Colord.Spectrum

    static name: string

    // Constructors of Colord-1.0.Colord.Spectrum

    /**
     * Allocates a spectrum.
     * @constructor 
     */
    constructor() 
    /**
     * Allocates a spectrum.
     * @constructor 
     */
    static new(): Spectrum
    /**
     * Allocates a Planckian spectrum at a specific temperature.
     * @constructor 
     * @param temperature the temperature in Kelvin
     */
    static planckianNew(temperature: number): Spectrum
    /**
     * Allocates a Planckian spectrum at a specific temperature.
     * @constructor 
     * @param temperature the temperature in Kelvin
     * @param start the new spectrum start
     * @param end the new spectrum end
     * @param resolution the resolution to use when resampling
     */
    static planckianNewFull(temperature: number, start: number, end: number, resolution: number): Spectrum
    /**
     * Allocates a spectrum with a preallocated size.
     * @constructor 
     * @param reservedSize the future size of the spectrum
     */
    static sizedNew(reservedSize: number): Spectrum
}

export interface Vec3 {

    // Own fields of Colord-1.0.Colord.Vec3

    v0: number
    v1: number
    v2: number

    // Owm methods of Colord-1.0.Colord.Vec3

    /**
     * Adds two vector quantaties
     * The arguments `src` and `dest` can be the same value.
     * @param src2 the other source
     * @param dest the destination
     */
    add(src2: Vec3, dest: Vec3): void
    /**
     * Clears a vector, setting all it's values to zero.
     */
    clear(): void
    /**
     * Copies the vector into another vector.
     * The arguments `src` and `dest` cannot be the same value.
     * @param dest the destination
     */
    copy(dest: Vec3): void
    /**
     * Gets the raw data for the vector.
     */
    getData(): number
    /**
     * Initialises a vector.
     * @param v0 component value
     * @param v1 component value
     * @param v2 component value
     */
    init(v0: number, v1: number, v2: number): void
    /**
     * Multiplies a vector with a scalar.
     * The arguments `src` and `dest` can be the same value.
     * @param value the scalar multiplier
     * @param dest the destination
     */
    scalarMultiply(value: number, dest: Vec3): void
    /**
     * Gets the mean squared error for a pair of vectors
     * @param src2 another vector source
     */
    squaredError(src2: Vec3): number
    /**
     * Subtracts one vector quantity from another
     * The arguments `src` and `dest` can be the same value.
     * @param src2 the other source
     * @param dest the destination
     */
    subtract(src2: Vec3, dest: Vec3): void
    /**
     * Obtains a string representaton of a vector.
     */
    toString(): string
}

export class Vec3 {

    // Own properties of Colord-1.0.Colord.Vec3

    static name: string
}

    export type PixelFormat = number