
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * ECal-2.0
 */

import type * as libxml2 from './libxml2-2.0.js';
import type * as Soup from './Soup-2.4.js';
import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as ICalGLib from './ICalGLib-3.0.js';
import type * as EDataServer from './EDataServer-1.2.js';
import type * as GData from './GData-0.0.js';
import type * as Json from './Json-1.0.js';
import type * as Goa from './Goa-1.0.js';
import type * as Camel from './Camel-1.2.js';

export enum ClientError {
    /**
     * No such calendar
     */
    NO_SUCH_CALENDAR,
    /**
     * Object not found
     */
    OBJECT_NOT_FOUND,
    /**
     * Invalid object
     */
    INVALID_OBJECT,
    /**
     * Unknown user
     */
    UNKNOWN_USER,
    /**
     * Object ID already exists
     */
    OBJECT_ID_ALREADY_EXISTS,
    /**
     * Invalid range
     */
    INVALID_RANGE,
}
/**
 * Indicates the type of calendar
 */
export enum ClientSourceType {
    /**
     * Events calander
     */
    EVENTS,
    /**
     * Task list calendar
     */
    TASKS,
    /**
     * Memo list calendar
     */
    MEMOS,
}
/**
 * Alarm types
 */
export enum ComponentAlarmAction {
    /**
     * None
     */
    NONE,
    /**
     * Audio
     */
    AUDIO,
    /**
     * Display message
     */
    DISPLAY,
    /**
     * Email
     */
    EMAIL,
    /**
     * Procedure
     */
    PROCEDURE,
    /**
     * Unknown
     */
    UNKNOWN,
}
export enum ComponentAlarmTriggerKind {
    NONE,
    RELATIVE_START,
    RELATIVE_END,
    ABSOLUTE,
}
/**
 * CLASSIFICATION property
 */
export enum ComponentClassification {
    /**
     * None
     */
    NONE,
    /**
     * Public
     */
    PUBLIC,
    /**
     * Private
     */
    PRIVATE,
    /**
     * Confidential
     */
    CONFIDENTIAL,
    /**
     * Unknown
     */
    UNKNOWN,
}
/**
 * Way in which a period of time is specified
 */
export enum ComponentPeriodKind {
    /**
     * Date and time
     */
    DATETIME,
    /**
     * Duration
     */
    DURATION,
}
/**
 * The kind of range
 */
export enum ComponentRangeKind {
    /**
     * Single
     */
    SINGLE,
    /**
     * This and prior
     */
    THISPRIOR,
    /**
     * This and future
     */
    THISFUTURE,
}
/**
 * Time transparency
 */
export enum ComponentTransparency {
    /**
     * None
     */
    NONE,
    /**
     * Transparent
     */
    TRANSPARENT,
    /**
     * Opaque
     */
    OPAQUE,
    /**
     * Unknown
     */
    UNKNOWN,
}
/**
 * Types of calendar components to be stored by a ECalComponent, as per RFC 2445.
 * We don't put the alarm component type here since we store alarms as separate
 * structures inside the other "real" components.
 */
export enum ComponentVType {
    /**
     * Unknown or unsupported component type
     */
    NO_TYPE,
    /**
     * vEvent type
     */
    EVENT,
    /**
     * vTodo type
     */
    TODO,
    /**
     * vJournal type
     */
    JOURNAL,
    /**
     * vFreeBusy type
     */
    FREEBUSY,
    /**
     * vTimezone type
     */
    TIMEZONE,
}
/**
 * Flags that control the behaviour of an #ECalClientView.
 * @bitfield 
 */
export enum ClientViewFlags {
    /**
     * Symbolic value for no flags
     */
    NONE,
    /**
     * If this flag is set then all objects matching the view's query will
     *   be sent as notifications when starting the view, otherwise only future
     *   changes will be reported.  The default for an #ECalClientView is %TRUE.
     */
    NOTIFY_INITIAL,
}
/**
 * Indicates the type of modification made to a calendar
 * @bitfield 
 */
export enum ObjModType {
    /**
     * Modify this component
     */
    THIS,
    /**
     * Modify this component and all prior occurrances
     */
    THIS_AND_PRIOR,
    /**
     * Modify this component and all future occurrances
     */
    THIS_AND_FUTURE,
    /**
     * Modify all occurrances of this component
     */
    ALL,
    /**
     * Modify only this component
     */
    ONLY_THIS,
}
/**
 * Calendar operation flags, to specify behavior in certain situations. The conflict
 * resolution mode flags cannot be combined together, where the `E_CAL_OPERATION_FLAG_CONFLICT_KEEP_LOCAL`
 * is the default behavior (and it is used when no other conflict resolution flag is set).
 * The flags can be ignored when the operation or the backend don't support it.
 * @bitfield 
 */
export enum OperationFlags {
    /**
     * no operation flags defined
     */
    NONE,
    /**
     * conflict resolution mode, to fail and do not
     *    do any changes, when a conflict is detected
     */
    CONFLICT_FAIL,
    /**
     * conflict resolution mode, to use newer
     *    of the local and the server side data, when a conflict is detected
     */
    CONFLICT_USE_NEWER,
    /**
     * conflict resolution mode, to use
     *    the server data (and local changed), when a conflict is detected
     */
    CONFLICT_KEEP_SERVER,
    /**
     * conflict resolution mode, to use
     *    local data (and always overwrite server data), when a conflict is detected
     */
    CONFLICT_KEEP_LOCAL,
    /**
     * conflict resolution mode, to create
     *    a copy of the data, when a conflict is detected
     */
    CONFLICT_WRITE_COPY,
    /**
     * request to disable send of an iTip
     *    message by the server; this works only for servers which support iTip handling
     */
    DISABLE_ITIP_MESSAGE,
}
/**
 * Influences behaviour of e_cal_recur_describe_recurrence().
 * @bitfield 
 */
export enum RecurDescribeRecurrenceFlags {
    /**
     * no extra flags, either returns %NULL or the recurrence description,
     *    something like "Every 2 weeks..."
     */
    NONE,
    /**
     * either returns %NULL or the recurrence description prefixed
     *    with text like "The meeting recurs", forming something like "The meeting recurs every 2 weeks..."
     */
    PREFIXED,
    /**
     * returns %NULL only if the component doesn't recur,
     *    otherwise returns either the recurrence description or at least text like "The meeting recurs"
     */
    FALLBACK,
}
/**
 * Flags modifying behaviour of e_reminder_watcher_describe_data().
 * @bitfield 
 */
export enum ReminderWatcherDescribeFlags {
    /**
     * None flags
     */
    NONE,
    /**
     * Returned description will contain
     *    also markup. Without it it'll be a plain text.
     */
    MARKUP,
}
/**
 * An email address preferred for e-mail reminders by the calendar.
 */
export const BACKEND_PROPERTY_ALARM_EMAIL_ADDRESS: string
/**
 * An email address associated with the calendar.
 */
export const BACKEND_PROPERTY_CAL_EMAIL_ADDRESS: string
/**
 * A default object for the calendar. Calendars use VEVENT, memo lists VJOURNAL
 * and task lists VTODO, which can have prefilled values by the backend.
 */
export const BACKEND_PROPERTY_DEFAULT_OBJECT: string
/**
 * The current overall revision string, this can be used as
 * a quick check to see if data has changed at all since the
 * last time the calendar revision was observed.
 */
export const BACKEND_PROPERTY_REVISION: string
/**
 * Extension property for alarm components so that we can reference them by UID.
 */
export const EVOLUTION_ALARM_UID_PROPERTY: string
/**
 * The X parameter name being used to store the enddate in RRULE and EXRULE properties.
 */
export const EVOLUTION_ENDDATE_PARAMETER: string
export const LIBICAL_GLIB_UNSTABLE_API: number
/**
 * Flag indicating that the backend supports alarm description
 */
export const STATIC_CAPABILITY_ALARM_DESCRIPTION: string
/**
 * Let the client know that it should store All Day event times as time
 * with a time zone, rather than as a date.
 */
export const STATIC_CAPABILITY_ALL_DAY_EVENT_AS_TIME: string
/**
 * Flag indicating that the backend supports bulk additions.
 */
export const STATIC_CAPABILITY_BULK_ADDS: string
/**
 * Flag indicating that the backend supports bulk modifications.
 */
export const STATIC_CAPABILITY_BULK_MODIFIES: string
/**
 * Flag indicating that the backend supports bulk removals.
 */
export const STATIC_CAPABILITY_BULK_REMOVES: string
/**
 * When the capability is set, the client supports storing color
 * for individual components.
 */
export const STATIC_CAPABILITY_COMPONENT_COLOR: string
export const STATIC_CAPABILITY_CREATE_MESSAGES: string
export const STATIC_CAPABILITY_DELEGATE_SUPPORTED: string
export const STATIC_CAPABILITY_DELEGATE_TO_MANY: string
export const STATIC_CAPABILITY_HAS_UNACCEPTED_MEETING: string
/**
 * Flag indicating that the backend does not support alarm after start the event
 */
export const STATIC_CAPABILITY_NO_ALARM_AFTER_START: string
export const STATIC_CAPABILITY_NO_ALARM_REPEAT: string
export const STATIC_CAPABILITY_NO_AUDIO_ALARMS: string
export const STATIC_CAPABILITY_NO_CONV_TO_ASSIGN_TASK: string
export const STATIC_CAPABILITY_NO_CONV_TO_RECUR: string
export const STATIC_CAPABILITY_NO_DISPLAY_ALARMS: string
export const STATIC_CAPABILITY_NO_EMAIL_ALARMS: string
export const STATIC_CAPABILITY_NO_GEN_OPTIONS: string
export const STATIC_CAPABILITY_NO_MEMO_START_DATE: string
export const STATIC_CAPABILITY_NO_ORGANIZER: string
export const STATIC_CAPABILITY_NO_PROCEDURE_ALARMS: string
export const STATIC_CAPABILITY_NO_TASK_ASSIGNMENT: string
export const STATIC_CAPABILITY_NO_THISANDFUTURE: string
export const STATIC_CAPABILITY_NO_THISANDPRIOR: string
export const STATIC_CAPABILITY_NO_TRANSPARENCY: string
export const STATIC_CAPABILITY_ONE_ALARM_ONLY: string
export const STATIC_CAPABILITY_ORGANIZER_MUST_ACCEPT: string
export const STATIC_CAPABILITY_ORGANIZER_MUST_ATTEND: string
export const STATIC_CAPABILITY_ORGANIZER_NOT_EMAIL_ADDRESS: string
export const STATIC_CAPABILITY_RECURRENCES_NO_MASTER: string
export const STATIC_CAPABILITY_REFRESH_SUPPORTED: string
export const STATIC_CAPABILITY_REMOVE_ALARMS: string
/**
 * FIXME: Document me.
 */
export const STATIC_CAPABILITY_REMOVE_ONLY_THIS: string
export const STATIC_CAPABILITY_REQ_SEND_OPTIONS: string
export const STATIC_CAPABILITY_SAVE_SCHEDULES: string
/**
 * When the capability is set, the backend handles only simple memos,
 * which means it stores only memo description. The summary can be changed
 * by the backend, if needed.
 */
export const STATIC_CAPABILITY_SIMPLE_MEMO: string
/**
 * Similar to the %E_CAL_STATIC_CAPABILITY_SIMPLE_MEMO, except the backend stores
 * the description and the summary separately.
 */
export const STATIC_CAPABILITY_SIMPLE_MEMO_WITH_SUMMARY: string
/**
 * When the capability is set, the client can store and provide recurring
 * tasks, otherwise it cannot.
 */
export const STATIC_CAPABILITY_TASK_CAN_RECUR: string
/**
 * Let the client know that the Task Start date, Due date and Completed date
 * can be entered only as dates. When the capability is not set, then these
 * can be date and time.
 */
export const STATIC_CAPABILITY_TASK_DATE_ONLY: string
/**
 * Set, when the backend supports ESTIMATED-DURATION property for tasks.
 */
export const STATIC_CAPABILITY_TASK_ESTIMATED_DURATION: string
/**
 * When the capability is set, the backend handles task recurrence
 * completion on its own. This does not imply E_CAL_STATIC_CAPABILITY_TASK_CAN_RECUR.
 */
export const STATIC_CAPABILITY_TASK_HANDLE_RECUR: string
/**
 * When the capability is set, the client cannot store reminders
 * on tasks, otherwise it can.
 */
export const STATIC_CAPABILITY_TASK_NO_ALARM: string
/**
 * Creates an ISO 8601 UTC representation from a time value.
 * @param t A time value.
 */
export function isodateFromTimeT(t: number): string
/**
 * Matches `tzid` against the system timezone definitions
 * and returns the matching TZID, or %NULL if none found
 * @param tzid a timezone ID
 */
export function matchTzid(tzid: string): string | null
/**
 * Describes some simple types of recurrences in a human-readable and localized way.
 * The `flags` influence the output format and what to do when the `icalcomp`
 * contains more complicated recurrence, some which the function cannot describe.
 * 
 * The `week_start_day` is used for weekly recurrences, to start the list of selected
 * days at that day.
 * 
 * Uses e_time_format_date_and_time() to format the date/time value in the string.
 * Call e_cal_recur_describe_recurrence_ex() with a custom formatting function.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param weekStartDay a day when the week starts
 * @param flags bit-or of #ECalRecurDescribeRecurrenceFlags
 */
export function recurDescribeRecurrence(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number): string | null
/**
 * Describes some simple types of recurrences in a human-readable and localized way.
 * The `flags` influence the output format and what to do when the `icalcomp`
 * contains more complicated recurrence, some which the function cannot describe.
 * 
 * The `week_start_day` is used for weekly recurrences, to start the list of selected
 * days at that day.
 * 
 * If `datetime_fmt_func` is %NULL, the e_time_format_date_and_time() is used
 * to format data/time value.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param weekStartDay a day when the week starts
 * @param flags bit-or of #ECalRecurDescribeRecurrenceFlags
 * @param datetimeFmtFunc formatting function for date/time value
 */
export function recurDescribeRecurrenceEx(icalcomp: ICalGLib.Component, weekStartDay: GLib.DateWeekday, flags: number, datetimeFmtFunc: RecurFormatDateTimeFunc | null): string | null
/**
 * This recalculates the end dates for recurrence & exception rules which use
 * the COUNT property. If `refresh` is %TRUE it will recalculate all enddates
 * for rules which use COUNT. If `refresh` is %FALSE, it will only calculate
 * the enddate if it hasn't already been set. It returns %TRUE if the component
 * was changed, i.e. if the component should be saved at some point.
 * We store the enddate in the %E_CAL_EVOLUTION_ENDDATE_PARAMETER parameter of the RRULE
 * or EXRULE.
 * @param comp an #ECalComponent
 * @param refresh %TRUE to recalculate all end dates
 * @param tzCb function to call to resolve timezones
 * @param cancellable optional #GCancellable object, or %NULL
 */
export function recurEnsureEndDates(comp: Component, refresh: boolean, tzCb: RecurResolveTimezoneCb, cancellable: Gio.Cancellable | null): boolean
/**
 * Calls the given callback function for each occurrence of the event that
 * intersects the range between the given `start` and `end` times (the end time is
 * not included). Note that the occurrences may start before the given start
 * time.
 * 
 * If the callback routine returns FALSE the occurrence generation stops.
 * 
 * The start and end times are required valid times, start before end time.
 * 
 * The `get_tz_callback` is used to resolve references to timezones. It is passed
 * a TZID and should return the ICalTimezone * corresponding to that TZID. We need to
 * do this as we access timezones in different ways on the client & server.
 * 
 * The default_timezone argument is used for DTSTART or DTEND properties that
 * are DATE values or do not have a TZID (i.e. floating times).
 * @param icalcomp an #ICalComponent
 * @param intervalStart an interval start, for which generate instances
 * @param intervalEnd an interval end, for which generate instances
 * @param defaultTimezone a default #ICalTimezone
 * @param cancellable a #GCancellable; can be %NULL
 */
export function recurGenerateInstancesSync(icalcomp: ICalGLib.Component, intervalStart: ICalGLib.Time, intervalEnd: ICalGLib.Time, defaultTimezone: ICalGLib.Timezone, cancellable: Gio.Cancellable | null): boolean
export function recurGetLocalizedNth(nth: number): string
export function recurObtainEnddate(ir: ICalGLib.Recurrence, prop: ICalGLib.Property, zone: ICalGLib.Timezone, convertEndDate: boolean): number
/**
 * Fetches the system timezone location string.
 * 
 * Note: Since 3.4 the returned timezone location is either NULL or
 * an equivalent within known libical timezones.
 * 
 * The returned string should be freed with g_free().
 */
export function systemTimezoneGetLocation(): string | null
/**
 * Adds a day onto the time, using local time.
 * Note that if clocks go forward due to daylight savings time, there are
 * some non-existent local times, so the hour may be changed to make it a
 * valid time. This also means that it may not be wise to keep calling
 * time_add_day() to step through a certain period - if the hour gets changed
 * to make it valid time, any further calls to time_add_day() will also return
 * this hour, which may not be what you want.
 * @param time A time_t value.
 * @param days Number of days to add.
 */
export function timeAddDay(time: number, days: number): number
/**
 * Adds or subtracts a number of days to/from the given time_t value, using
 * the given timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param days Number of days to add.
 * @param zone Timezone to use.
 */
export function timeAddDayWithZone(time: number, days: number, zone: ICalGLib.Timezone): number
/**
 * Adds or subtracts a number of months to/from the given time_t value, using
 * the given timezone.
 * 
 * If the day would be off the end of the month (e.g. adding 1 month to
 * 30th January, would lead to an invalid day, 30th February), it moves it
 * down to the last day in the month, e.g. 28th Feb (or 29th in a leap year.)
 * 
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param months Number of months to add.
 * @param zone Timezone to use.
 */
export function timeAddMonthWithZone(time: number, months: number, zone: ICalGLib.Timezone): number
/**
 * Adds the given number of weeks to a time value.
 * @param time A time_t value.
 * @param weeks Number of weeks to add.
 */
export function timeAddWeek(time: number, weeks: number): number
/**
 * Adds or subtracts a number of weeks to/from the given time_t value, using
 * the given timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param weeks Number of weeks to add.
 * @param zone Timezone to use.
 */
export function timeAddWeekWithZone(time: number, weeks: number, zone: ICalGLib.Timezone): number
/**
 * Returns the start of the day, according to the local time.
 * @param t A time_t value.
 */
export function timeDayBegin(t: number): number
/**
 * Returns the start of the day containing the given time_t, using the given
 * timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 */
export function timeDayBeginWithZone(time: number, zone: ICalGLib.Timezone): number
/**
 * Returns the end of the day, according to the local time.
 * @param t A time_t value.
 */
export function timeDayEnd(t: number): number
/**
 * Returns the end of the day containing the given time_t, using the given
 * timezone. (The end of the day is the start of the next day.)
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 */
export function timeDayEndWithZone(time: number, zone: ICalGLib.Timezone): number
/**
 * Returns the day of the week for the specified date, 0 (Sun) to 6 (Sat).
 * For the days that were removed on the Gregorian reformation, it returns
 * Thursday. Year is the normal year, e.g. 2001. Month is 0 to 11.
 * @param day The day.
 * @param month The month.
 * @param year The year.
 */
export function timeDayOfWeek(day: number, month: number, year: number): number
/**
 * Returns the 1-based day number within the year of the specified date.
 * Year is the normal year, e.g. 2001. Month is 0 to 11.
 * @param day The day.
 * @param month The month.
 * @param year The year.
 */
export function timeDayOfYear(day: number, month: number, year: number): number
/**
 * Returns the number of days in the month. Year is the normal year, e.g. 2001.
 * Month is 0 (Jan) to 11 (Dec).
 * @param year The year.
 * @param month The month.
 */
export function timeDaysInMonth(year: number, month: number): number
/**
 * Converts an ISO 8601 UTC time string into a time_t value.
 * @param str Date/time value in ISO 8601 format.
 */
export function timeFromIsodate(str: string): number
/**
 * Returns whether the specified year is a leap year. Year is the normal year,
 * e.g. 2001.
 * @param year The year.
 */
export function timeIsLeapYear(year: number): boolean
/**
 * Returns the number of leap years since year 1 up to (but not including) the
 * specified year. Year is the normal year, e.g. 2001.
 * @param year The year.
 */
export function timeLeapYearsUpTo(year: number): number
/**
 * Returns the start of the month containing the given time_t, using the given
 * timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 */
export function timeMonthBeginWithZone(time: number, zone: ICalGLib.Timezone): number
/**
 * Converts a time_t value to a #GDate structure using the specified timezone.
 * This is analogous to g_date_set_time() but takes the timezone into account.
 * @param date Destination #GDate value.
 * @param time A time value.
 * @param zone Desired timezone for destination `date,` or %NULL if    the UTC timezone is desired.
 */
export function timeToGdateWithZone(date: GLib.Date, time: number, zone: ICalGLib.Timezone | null): void
/**
 * Returns the start of the week containing the given time_t, using the given
 * timezone. week_start_day should use the same values as mktime(),
 * i.e. 0 (Sun) to 6 (Sat).
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param weekStartDay Day to use as the starting of the week.
 * @param zone Timezone to use.
 */
export function timeWeekBeginWithZone(time: number, weekStartDay: number, zone: ICalGLib.Timezone): number
/**
 * Returns the start of the year containing the given time_t, using the given
 * timezone.
 * NOTE: this function is only here to make the transition to the timezone
 * functions easier. New code should use ICalTime values and
 * i_cal_time_adjust() to add or subtract days, hours, minutes & seconds.
 * @param time A time_t value.
 * @param zone Timezone to use.
 */
export function timeYearBeginWithZone(time: number, zone: ICalGLib.Timezone): number
/**
 * Adds VTIMEZONE components to a VCALENDAR for all tzid's
 * in the given `icalcomp`.
 * @param vcalComp A VCALENDAR component.
 * @param icalcomp An iCalendar component, of any type.
 */
export function utilAddTimezonesFromComponent(vcalComp: ICalGLib.Component, icalcomp: ICalGLib.Component): void
/**
 * Modifies the `vtimezone` to include only subcomponents influencing
 * the passed-in time interval between `from` and `to`.
 * @param vtimezone a VTIMEZONE component to modify
 * @param from an #ICalTime for the minimum time
 * @param to until which time to clamp, or %NULL for infinity
 */
export function utilClampVtimezone(vtimezone: ICalGLib.Component, from: ICalGLib.Time, to: ICalGLib.Time | null): /* vtimezone */ ICalGLib.Component
/**
 * Similar to e_cal_util_clamp_vtimezone(), only reads the clamp
 * times from the `component`.
 * @param vtimezone a VTIMEZONE component to modify
 * @param component an #ICalComponent to read the times from
 */
export function utilClampVtimezoneByComponent(vtimezone: ICalGLib.Component, component: ICalGLib.Component): /* vtimezone */ ICalGLib.Component
/**
 * Searches for an X property named `x_name` within X properties
 * of `icalcomp` and returns its value as a newly allocated string.
 * Free it with g_free(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param xName name of the X property
 */
export function utilComponentDupXProperty(icalcomp: ICalGLib.Component, xName: string): string | null
/**
 * Searches for an X property named `x_name` within X properties
 * of `icalcomp` and returns it. Free the non-NULL object
 * with g_object_unref(), when no longer needed.
 * @param icalcomp an #ICalComponent
 * @param xName name of the X property
 */
export function utilComponentFindXProperty(icalcomp: ICalGLib.Component, xName: string): ICalGLib.Property | null
export function utilComponentGetRecuridAsString(icalcomp: ICalGLib.Component): string | null
/**
 * Checks whether an #ICalComponent has any alarm.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentHasAlarms(icalcomp: ICalGLib.Component): boolean
/**
 * Checks if an #ICalComponent has any attendees.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentHasAttendee(icalcomp: ICalGLib.Component): boolean
/**
 * Checks whether an #ICalComponent has an organizer.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentHasOrganizer(icalcomp: ICalGLib.Component): boolean
/**
 * Returns, whether the `icalcomp` has a property of `prop_kind`. To check
 * for a specific X property use e_cal_util_component_has_x_property().
 * @param icalcomp an #ICalComponent
 * @param propKind a property kind to look for, as an %ICalPropertyKind
 */
export function utilComponentHasProperty(icalcomp: ICalGLib.Component, propKind: ICalGLib.PropertyKind): boolean
/**
 * Checks if an #ICalComponent has recurrence dates.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentHasRdates(icalcomp: ICalGLib.Component): boolean
/**
 * Checks if an #ICalComponent has recurrence dates or rules.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentHasRecurrences(icalcomp: ICalGLib.Component): boolean
/**
 * Checks if an #ICalComponent has recurrence rules.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentHasRrules(icalcomp: ICalGLib.Component): boolean
/**
 * Returns, whether the `icalcomp` contains X property named `x_name`. To check
 * for standard property use e_cal_util_component_has_property().
 * @param icalcomp an #ICalComponent
 * @param xName name of the X property
 */
export function utilComponentHasXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
/**
 * Checks whether an #ICalComponent is an instance of a recurring appointment.
 * @param icalcomp An #ICalComponent.
 */
export function utilComponentIsInstance(icalcomp: ICalGLib.Component): boolean
/**
 * Removes all or only the first property of kind `kind` in `icalcomp`.
 * @param icalcomp an #ICalComponent
 * @param kind the kind of the property to remove
 * @param all %TRUE to remove all, or %FALSE to remove only the first property of the `kind`
 */
export function utilComponentRemovePropertyByKind(icalcomp: ICalGLib.Component, kind: ICalGLib.PropertyKind, all: boolean): number
/**
 * Removes the first X property named `x_name` in `icalcomp`.
 * @param icalcomp an #ICalComponent
 * @param xName name of the X property
 */
export function utilComponentRemoveXProperty(icalcomp: ICalGLib.Component, xName: string): boolean
/**
 * Sets a value of the first X property named `x_name` in `icalcomp,`
 * if any such already exists, or adds a new property with this name
 * and value. As a special case, if `value` is %NULL, then removes
 * the first X property named `x_name` from `icalcomp` instead.
 * @param icalcomp an #ICalComponent
 * @param xName name of the X property
 * @param value a value to set, or %NULL
 */
export function utilComponentSetXProperty(icalcomp: ICalGLib.Component, xName: string, value: string | null): void
/**
 * Encodes the #EConflictResolution into the bit-or of #ECalOperationFlags.
 * The returned value can be bit-or-ed with other #ECalOperationFlags values.
 * @param conflictResolution an #EConflictResolution
 */
export function utilConflictResolutionToOperationFlags(conflictResolution: EDataServer.ConflictResolution): number
/**
 * This checks that `rid` indicates a valid recurrence of `icalcomp,` and
 * if so, generates a copy of `icalcomp` containing a RECURRENCE-ID of `rid`.
 * 
 * Free the returned non-NULL component with g_object_unref(), when
 * no longer needed.
 * @param icalcomp A recurring #ICalComponent
 * @param rid The RECURRENCE-ID to construct a component for
 */
export function utilConstructInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time): ICalGLib.Component | null
/**
 * Copies the `zone` together with its inner component and
 * returns it as a new #ICalTimezone object. Free it with
 * g_object_unref(), when no longer needed.
 * @param zone an ICalTimezone
 */
export function utilCopyTimezone(zone: ICalGLib.Timezone): ICalGLib.Timezone
/**
 * Generates alarm instances for a calendar component. Returns the instances
 * structure, or %NULL if no alarm instances occurred in the specified time
 * range. Free the returned structure with e_cal_component_alarms_free(),
 * when no longer needed.
 * @param comp The #ECalComponent to generate alarms from
 * @param start Start time
 * @param end End time
 * @param omit Alarm types to omit
 * @param resolveTzid Callback for resolving timezones
 * @param defaultTimezone The timezone used to resolve DATE and floating DATE-TIME values.
 */
export function utilGenerateAlarmsForComp(comp: Component, start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): ComponentAlarms | null
/**
 * Iterates through all the components in the `comps` list and generates alarm
 * instances for them; putting them in the `comp_alarms` list. Free the `comp_alarms`
 * with g_slist_free_full (comp_alarms, e_cal_component_alarms_free);, when
 * no longer neeed.
 * @param comps List of #ECalComponent<!-- -->s
 * @param start Start time
 * @param end End time
 * @param omit Alarm types to omit
 * @param resolveTzid Callback for resolving timezones
 * @param defaultTimezone The timezone used to resolve DATE and floating DATE-TIME values.
 */
export function utilGenerateAlarmsForList(comps: Component[], start: number, end: number, omit: ComponentAlarmAction, resolveTzid: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone): [ /* returnType */ number, /* compAlarms */ ComponentAlarms[] ]
/**
 * Find out when the component starts and stops, being careful about
 * recurrences.
 * @param comp an #ECalComponent
 * @param tzCb The #ECalRecurResolveTimezoneCb to call
 * @param defaultTimezone The default timezone
 * @param kind the type of component, indicated with an #ICalComponentKind
 */
export function utilGetComponentOccurTimes(comp: Component, tzCb: RecurResolveTimezoneCb, defaultTimezone: ICalGLib.Timezone, kind: ICalGLib.ComponentKind): [ /* outStart */ number, /* outEnd */ number ]
/**
 * Fetches system timezone ICalTimezone object.
 * 
 * The returned pointer is part of the built-in timezones and should not be freed.
 */
export function utilGetSystemTimezone(): ICalGLib.Timezone | null
/**
 * Fetches system timezone localtion string.
 */
export function utilGetSystemTimezoneLocation(): string | null
/**
 * Converts an #ICalTime into a GLibc's struct tm.
 * @param itt An #ICalTime
 */
export function utilIcaltimeToTm(itt: ICalGLib.Time): object | null
/**
 * Converts a time value from one timezone to another, and returns a struct tm
 * representation of the time.
 * @param itt A time value.
 * @param fromZone Source timezone.
 * @param toZone Destination timezone.
 */
export function utilIcaltimeToTmWithZone(itt: ICalGLib.Time, fromZone: ICalGLib.Timezone, toZone: ICalGLib.Timezone): object | null
/**
 * Initializes properties of a recurring `vtodo,` like normalizing
 * the Due date and eventually the Start date. The function does
 * nothing when the `vtodo` is not recurring.
 * 
 * The function doesn't change LAST-MODIFIED neither the SEQUENCE
 * property, it's up to the caller to do it.
 * 
 * Note the `cal_client,` `cancellable` and `error` is used only
 * for timezone resolution. The function doesn't store the `vtodo`
 * to the `cal_client,` it only updates the `vtodo` component.
 * @param vtodo a VTODO component
 * @param calClient an #ECalClient to which the `vtodo` belongs
 * @param cancellable optional #GCancellable object, or %NULL
 */
export function utilInitRecurTaskSync(vtodo: ICalGLib.Component, calClient: Client, cancellable: Gio.Cancellable | null): boolean
/**
 * Changes all URL attachments which point to a local file in `component`
 * to inline attachments, aka adds the file content into the `component`.
 * It also populates FILENAME parameter on the attachment.
 * @param component an #ICalComponent to work with
 * @param cancellable optional #GCancellable object, or %NULL
 */
export function utilInlineLocalAttachmentsSync(component: ICalGLib.Component, cancellable: Gio.Cancellable | null): boolean
/**
 * Returns whether the given `rid` is the first instance of
 * the recurrence defined in the `comp`.
 * @param comp an #ECalComponent instance
 * @param rid a recurrence ID
 * @param tzCb The #ECalRecurResolveTimezoneCb to call
 */
export function utilIsFirstInstance(comp: Component, rid: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): boolean
/**
 * Marks the `vtodo` as complete with eventual update of other
 * properties. This is useful also for recurring tasks, for which
 * it moves the `vtodo` into the next occurrence according to
 * the recurrence rule.
 * 
 * When the `vtodo` is marked as completed, then the existing COMPLETED
 * date-time is preserved if exists, otherwise it's set either to `completed_time,`
 * or to the current time, when the `completed_time` is (time_t) -1.
 * 
 * The function doesn't change LAST-MODIFIED neither the SEQUENCE
 * property, it's up to the caller to do it.
 * 
 * Note the `cal_client,` `cancellable` and `error` is used only
 * for timezone resolution. The function doesn't store the `vtodo`
 * to the `cal_client,` it only updates the `vtodo` component.
 * @param vtodo a VTODO component
 * @param completedTime completed time to set, or (time_t) -1 to use current time
 * @param calClient an #ECalClient to which the `vtodo` belongs
 * @param cancellable optional #GCancellable object, or %NULL
 */
export function utilMarkTaskCompleteSync(vtodo: ICalGLib.Component, completedTime: number, calClient: Client, cancellable: Gio.Cancellable | null): boolean
/**
 * Creates a new #ICalComponent of the specified kind. Free it
 * with g_object_unref(), when no longer needed.
 * @param kind Kind of the component to create, as #ICalComponentKind.
 */
export function utilNewComponent(kind: ICalGLib.ComponentKind): ICalGLib.Component
/**
 * Creates a new VCALENDAR component. Free it with g_object_unref(),
 * when no longer needed.
 */
export function utilNewTopLevel(): ICalGLib.Component
/**
 * Makes sure the `ttuntil` value matches the value type with
 * the DTSTART value, as required by RFC 5545 section 3.3.10.
 * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
 * @param icalcomp An #ICalComponent
 * @param ttuntil An UNTIL value to validate
 * @param tzCb The #ECalRecurResolveTimezoneCb to call
 */
export function utilNormalizeRruleUntilValue(icalcomp: ICalGLib.Component, ttuntil: ICalGLib.Time, tzCb: RecurResolveTimezoneCb): void
/**
 * Decodes the #EConflictResolution from the bit-or of #ECalOperationFlags.
 * @param flags bit-or of #ECalOperationFlags
 */
export function utilOperationFlagsToConflictResolution(flags: number): EDataServer.ConflictResolution
/**
 * Parses the given file, and, if it contains a valid iCalendar object,
 * parse it and return a new #ICalComponent.
 * 
 * Free the returned non-NULL component with g_object_unref(), when no longer needed.
 * @param filename Name of the file to be parsed.
 */
export function utilParseIcsFile(filename: string): ICalGLib.Component | null
/**
 * Parses an iCalendar string and returns a new #ICalComponent representing
 * that string. Note that this function deals with multiple VCALENDAR's in the
 * string, something that Mozilla used to do and which libical does not
 * support.
 * 
 * Free the returned non-NULL component with g_object_unref(), when no longer needed.
 * @param string iCalendar string to be parsed.
 */
export function utilParseIcsString(string: string): ICalGLib.Component | null
/**
 * Converts a translated priority string to an iCalendar priority value.
 * @param string A string representing the PRIORITY value.
 */
export function utilPriorityFromString(string: string): number
/**
 * Converts an iCalendar PRIORITY value to a translated string. Any unknown
 * priority value (i.e. not 0-9) will be returned as "" (undefined).
 * @param priority Priority value.
 */
export function utilPriorityToString(priority: number): string
/**
 * Returns, whether the `prop` has a parameter of `param_kind`.
 * @param prop an #ICalProperty
 * @param paramKind a parameter kind to look for, as an %ICalParameterKind
 */
export function utilPropertyHasParameter(prop: ICalGLib.Property, paramKind: ICalGLib.ParameterKind): boolean
/**
 * Removes one or more instances from `icalcomp` according to `rid` and `mod`.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param mod How to interpret `rid`
 */
export function utilRemoveInstances(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType): void
/**
 * Removes one or more instances from `icalcomp` according to `rid` and `mod`.
 * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param mod How to interpret `rid`
 * @param tzCb The #ECalRecurResolveTimezoneCb to call
 */
export function utilRemoveInstancesEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, mod: ObjModType, tzCb: RecurResolveTimezoneCb): void
/**
 * Converts time, in seconds, into a string representation readable by humans
 * and localized into the current locale. This can be used to convert event
 * duration to string or similar use cases.
 * 
 * Free the returned string with g_free(), when no longer needed.
 * @param seconds actual time, in seconds
 */
export function utilSecondsToString(seconds: number): string
/**
 * Sets the ACKNOWLEDGED property on the `component'`s alarm with UID `auid`
 * to the time `when` (in UTC), or to the current time, when the `when` is 0.
 * @param component an #ECalComponent
 * @param auid an alarm UID to modify
 * @param when a time, in UTC, when to set the acknowledged property, or 0 for the current time
 */
export function utilSetAlarmAcknowledged(component: Component, auid: string, when: number): boolean
/**
 * Splits a recurring `icalcomp` into two at time `rid`. The returned #ICalComponent
 * is modified `icalcomp` which contains recurrences beginning at `rid,` inclusive.
 * The instance identified by `rid` should exist. The `master_dtstart` can be
 * a null time, then it is read from the `icalcomp`.
 * 
 * Use e_cal_util_remove_instances_ex() with E_CAL_OBJ_MOD_THIS_AND_FUTURE mode
 * on the `icalcomp` to remove the overlapping interval from it, if needed.
 * 
 * Free the returned non-NULL component with g_object_unref(), when
 * done with it.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param masterDtstart The DTSTART of the master object
 */
export function utilSplitAtInstance(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart: ICalGLib.Time | null): ICalGLib.Component | null
/**
 * Splits a recurring `icalcomp` into two at time `rid`. The returned #ICalComponent
 * is modified `icalcomp` which contains recurrences beginning at `rid,` inclusive.
 * The instance identified by `rid` should exist. The `master_dtstart` can be
 * a null time, then it is read from the `icalcomp`.
 * 
 * Uses `tz_cb` with `tz_cb_data` to resolve time zones when needed.
 * 
 * Use e_cal_util_remove_instances_ex() with E_CAL_OBJ_MOD_THIS_AND_FUTURE mode
 * on the `icalcomp` to remove the overlapping interval from it, if needed.
 * 
 * Free the returned non-NULL component with g_object_unref(), when
 * done with it.
 * @param icalcomp A (recurring) #ICalComponent
 * @param rid The base RECURRENCE-ID to remove
 * @param masterDtstart The DTSTART of the master object
 * @param tzCb The #ECalRecurResolveTimezoneCb to call
 */
export function utilSplitAtInstanceEx(icalcomp: ICalGLib.Component, rid: ICalGLib.Time, masterDtstart: ICalGLib.Time | null, tzCb: RecurResolveTimezoneCb): ICalGLib.Component | null
/**
 * Converts a struct tm into an #ICalTime. Free the returned object
 * with g_object_unref(), when no longer needed.
 * @param tm A struct tm.
 * @param isDate Whether the given time is a date only or not.
 */
export function utilTmToIcaltime(tm: object | null, isDate: boolean): ICalGLib.Time
/**
 * A function used to filter which parameters should be added to the bag,
 * when filling it with e_cal_component_parameter_bag_new_from_property()
 * and e_cal_component_parameter_bag_set_from_property().
 * @callback 
 * @param parameter an #ICalParameter
 */
export interface ComponentParameterBagFilterFunc {
    (parameter: ICalGLib.Parameter): boolean
}
/**
 * A function used to filter which properties should be added to the bag,
 * when filling it with e_cal_component_property_bag_new_from_component()
 * and e_cal_component_property_bag_set_from_component().
 * @callback 
 * @param property an #ICalProperty
 */
export interface ComponentPropertyBagFilterFunc {
    (property: ICalGLib.Property): boolean
}
/**
 * Format the date/time value from `itt` into `buffer,` whose size cannot
 * exceed `buffer_size` letters.
 * @callback 
 * @param itt an #ICalTime to format to string
 * @param buffer a buffer to fill with the result
 * @param bufferSize the `buffer` size, in bytes, not counting the NUL-terminator character
 */
export interface RecurFormatDateTimeFunc {
    (itt: ICalGLib.Time, buffer: string, bufferSize: number): void
}
/**
 * Callback used by e_cal_recur_generate_instances_sync(), called
 * for each instance of a (recurring) component within given time range.
 * @callback 
 * @param icomp an #ICalComponent
 * @param instanceStart start time of an instance
 * @param instanceEnd end time of an instance
 * @param cancellable optional #GCancellable object, or %NULL
 */
export interface RecurInstanceCb {
    (icomp: ICalGLib.Component, instanceStart: ICalGLib.Time, instanceEnd: ICalGLib.Time, cancellable: Gio.Cancellable | null): boolean
}
/**
 * Resolve timezone by its ID provided as `tzid`. The returned object,
 * if not %NULL, is owned by the callback implementation and should
 * not be freed.
 * @callback 
 * @param tzid timezone ID to resolve
 * @param cancellable optional #GCancellable object, or %NULL
 */
export interface RecurResolveTimezoneCb {
    (tzid: string, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}
export module TimezoneCache {

    // Signal callback interfaces

    /**
     * Signal callback interface for `timezone-added`
     */
    export interface TimezoneAddedSignalCallback {
        (zone: ICalGLib.Timezone): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface TimezoneCache {

    // Owm methods of ECal-2.0.ECal.TimezoneCache

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
    /**
     * Returns a list of #ICalTimezone instances that were explicitly added to
     * the `cache` through e_timezone_cache_add_timezone().  In particular, any
     * built-in time zone data that e_timezone_cache_get_timezone() may use to
     * match a TZID string is excluded from the returned list.
     * 
     * Free the returned list with g_list_free().  The list elements are owned
     * by the `cache` and should not be modified or freed.
     */
    listTimezones(): ICalGLib.Timezone[]

    // Own virtual methods of ECal-2.0.ECal.TimezoneCache

    timezoneAdded(zone: ICalGLib.Timezone): void
    tzcacheAddTimezone(zone: ICalGLib.Timezone): void

    // Own signals of ECal-2.0.ECal.TimezoneCache

    connect(sigName: "timezone-added", callback: TimezoneCache.TimezoneAddedSignalCallback): number
    on(sigName: "timezone-added", callback: TimezoneCache.TimezoneAddedSignalCallback): number
    once(sigName: "timezone-added", callback: TimezoneCache.TimezoneAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "timezone-added", ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.TimezoneCache

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class TimezoneCache extends GObject.Object {

    // Own properties of ECal-2.0.ECal.TimezoneCache

    static name: string

    // Constructors of ECal-2.0.ECal.TimezoneCache

    constructor(config?: TimezoneCache.ConstructorProperties) 
    _init(config?: TimezoneCache.ConstructorProperties): void
}

export module Client {

    // Signal callback interfaces

    /**
     * Signal callback interface for `free-busy-data`
     */
    export interface FreeBusyDataSignalCallback {
        (freeBusyEcalcomps: Component[]): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends TimezoneCache.ConstructorProperties, Gio.AsyncInitable.ConstructorProperties, Gio.Initable.ConstructorProperties, EDataServer.Client.ConstructorProperties {

        // Own constructor properties of ECal-2.0.ECal.Client

        defaultTimezone?: ICalGLib.Timezone | null
        sourceType?: ClientSourceType | null
    }

}

export interface Client extends TimezoneCache, Gio.AsyncInitable, Gio.Initable {

    // Own properties of ECal-2.0.ECal.Client

    defaultTimezone: ICalGLib.Timezone
    readonly sourceType: ClientSourceType

    // Owm methods of ECal-2.0.ECal.Client

    /**
     * Add a VTIMEZONE object to the given calendar client.
     * The call is finished by e_cal_client_add_timezone_finish() from
     * the `callback`.
     * @param zone The timezone to add
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    addTimezone(zone: ICalGLib.Timezone, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of addTimezone

    /**
     * Adds a copy of `zone` to `cache` and emits an
     * #ETimezoneCache::timezone-added signal.  The `cache` will use the TZID
     * string returned by i_cal_timezone_get_tzid() as the lookup key, which can
     * be passed to e_timezone_cache_get_timezone() to obtain `zone` again.
     * 
     * If the `cache` already has an #ICalTimezone with the same TZID string
     * as `zone,` the `cache` will remain unchanged to avoid invalidating any
     * #ICalTimezone pointers which may have already been returned through
     * e_timezone_cache_get_timezone().
     * @param zone an #ICalTimezone
     */
    addTimezone(zone: ICalGLib.Timezone): void
    /**
     * Finishes previous call of e_cal_client_add_timezone().
     * @param result a #GAsyncResult
     */
    addTimezoneFinish(result: Gio.AsyncResult): boolean
    /**
     * Add a VTIMEZONE object to the given calendar client.
     * @param zone The timezone to add
     * @param cancellable a #GCancellable; can be %NULL
     */
    addTimezoneSync(zone: ICalGLib.Timezone, cancellable: Gio.Cancellable | null): boolean
    /**
     * Checks if a calendar supports only one alarm per component.
     */
    checkOneAlarmOnly(): boolean
    /**
     * Checks whether a calendar requires organizer to accept their attendance to
     * meetings.
     */
    checkOrganizerMustAccept(): boolean
    /**
     * Checks if a calendar forces organizers of meetings to be also attendees.
     */
    checkOrganizerMustAttend(): boolean
    /**
     * Checks if the calendar has a master object for recurrences.
     */
    checkRecurrencesNoMaster(): boolean
    /**
     * Checks whether the calendar saves schedules.
     */
    checkSaveSchedules(): boolean
    /**
     * Requests the calendar backend to create the object specified by the `icalcomp`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomp` if its UID changes.
     * The call is finished by e_cal_client_create_object_finish() from
     * the `callback`.
     * @param icalcomp The component to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    createObject(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_create_object() and
     * sets `out_uid` to newly assigned UID for the created object.
     * This `out_uid` should be freed with g_free().
     * @param result a #GAsyncResult
     */
    createObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUid */ string | null ]
    /**
     * Requests the calendar backend to create the object specified by the
     * `icalcomp` argument. Some backends would assign a specific UID to the newly
     * created object, in those cases that UID would be returned in the `out_uid`
     * argument. This function does not modify the original `icalcomp` if its UID
     * changes.  Returned `out_uid` should be freed with g_free().
     * @param icalcomp The component to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    createObjectSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUid */ string | null ]
    /**
     * Requests the calendar backend to create the objects specified by the `icalcomps`
     * argument. Some backends would assign a specific UID to the newly created object,
     * but this function does not modify the original `icalcomps` if their UID changes.
     * The call is finished by e_cal_client_create_objects_finish() from
     * the `callback`.
     * @param icalcomps The components to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    createObjects(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_create_objects() and
     * sets `out_uids` to newly assigned UIDs for the created objects.
     * This `out_uids` should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     */
    createObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUids */ string[] ]
    /**
     * Requests the calendar backend to create the objects specified by the
     * `icalcomps` argument. Some backends would assign a specific UID to the
     * newly created objects, in those cases these UIDs would be returned in
     * the `out_uids` argument. This function does not modify the original
     * `icalcomps` if their UID changes.  Returned `out_uids` should be freed
     * with e_client_util_free_string_slist().
     * @param icalcomps The components to create
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    createObjectsSync(icalcomps: ICalGLib.Component[], opflags: OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUids */ string[] ]
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     * The call is finished by e_cal_client_discard_alarm_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to discard
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    discardAlarm(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_discard_alarm().
     * @param result a #GAsyncResult
     */
    discardAlarmFinish(result: Gio.AsyncResult): boolean
    /**
     * Discards alarm `auid` from a given component identified by `uid` and `rid`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param auid Alarm identifier to discard
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    discardAlarmSync(uid: string, rid: string | null, auid: string, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(). Unlike
     * e_cal_client_generate_instances_sync(), this returns immediately and the
     * `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     * @param start Start time for query.
     * @param end End time for query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance.
     */
    generateInstances(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(), like
     * e_cal_client_generate_instances(), but for a single object. Unlike
     * e_cal_client_generate_instances_for_object_sync(), this returns immediately
     * and the `cb` callback is called asynchronously.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     * @param icalcomp Object to generate instances from.
     * @param start Start time for query.
     * @param end End time for query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance.
     */
    generateInstancesForObject(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync(), like
     * e_cal_client_generate_instances_sync(), but for a single object.
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unref'ed
     * as soon as the callback returns.
     * @param icalcomp Object to generate instances from
     * @param start Start time for query
     * @param end End time for query
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance
     */
    generateInstancesForObjectSync(icalcomp: ICalGLib.Component, start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Does a combination of e_cal_client_get_object_list() and
     * e_cal_recur_generate_instances_sync().
     * 
     * The callback function should do a g_object_ref() of the calendar component
     * it gets passed if it intends to keep it around, since it will be unreffed
     * as soon as the callback returns.
     * @param start Start time for query
     * @param end End time for query
     * @param cancellable a #GCancellable; can be %NULL
     * @param cb Callback for each generated instance
     */
    generateInstancesSync(start: number, end: number, cancellable: Gio.Cancellable | null, cb: RecurInstanceCb): void
    /**
     * Queries a calendar for a specified component's object attachment uris.
     * The call is finished by e_cal_client_get_attachment_uris_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getAttachmentUris(uid: string, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_attachment_uris() and
     * sets `out_attachment_uris` to uris for component's attachments.
     * The list should be freed with e_client_util_free_string_slist().
     * @param result a #GAsyncResult
     */
    getAttachmentUrisFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    /**
     * Queries a calendar for a specified component's object attachment URIs.
     * The list should be freed with e_client_util_free_string_slist().
     * @param uid Unique identifier for a calendar component
     * @param rid Recurrence identifier
     * @param cancellable a #GCancellable; can be %NULL
     */
    getAttachmentUrisSync(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outAttachmentUris */ string[] ]
    /**
     * Gets a calendar component as an iCalendar string, with a toplevel
     * VCALENDAR component and all VTIMEZONEs needed for the component.
     * @param icalcomp A calendar component object.
     */
    getComponentAsString(icalcomp: ICalGLib.Component): string | null
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. The call is finished
     * by e_cal_client_get_default_object_finish() from the `callback`.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getDefaultObject(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_default_object() and
     * sets `out_icalcomp` to an #ICalComponent from the backend that contains
     * the default values for properties needed. This `out_icalcomp` should be
     * freed with g_object_unref(), when no longer needed.
     * @param result a #GAsyncResult
     */
    getDefaultObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Retrives an #ICalComponent from the backend that contains the default
     * values for properties needed. This `out_icalcomp` should be freed with
     * g_object_unref(), when no longer needed.
     * @param cancellable a #GCancellable; can be %NULL
     */
    getDefaultObjectSync(cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Returns the default timezone previously set with
     * e_cal_client_set_default_timezone().  The returned pointer is owned by
     * the `client` and should not be freed.
     */
    getDefaultTimezone(): ICalGLib.Timezone
    /**
     * Begins retrieval of free/busy information from the calendar server
     * as a list of #ECalComponent-s. Connect to "free-busy-data" signal
     * to receive chunks of free/busy components.
     * The call is finished by e_cal_client_get_free_busy_finish() from
     * the `callback`.
     * @param start Start time for query
     * @param end End time for query
     * @param users List of users to retrieve free/busy information for
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getFreeBusy(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_free_busy().
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     * @param result a #GAsyncResult
     */
    getFreeBusyFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outFreebusy */ Component[] ]
    /**
     * Gets free/busy information from the calendar server.
     * The `out_freebusy` contains all VFREEBUSY #ECalComponent-s, which could be also
     * received by "free-busy-data" signal. The client is responsible to do a merge of
     * the components between this complete list and those received through the signal.
     * @param start Start time for query
     * @param end End time for query
     * @param users List of users to retrieve free/busy information for
     * @param cancellable a #GCancellable; can be %NULL
     */
    getFreeBusySync(start: number, end: number, users: string[], cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outFreebusy */ Component[] ]
    /**
     * Queries the URL where the calendar attachments are
     * serialized in the local filesystem. This enable clients
     * to operate with the reference to attachments rather than the data itself
     * unless it specifically uses the attachments for open/sending
     * operations.
     */
    getLocalAttachmentStore(): string
    /**
     * Queries a calendar for a calendar component object based on its unique
     * identifier. The call is finished by e_cal_client_get_object_finish()
     * from the `callback`.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     * @param uid Unique identifier for a calendar component.
     * @param rid Recurrence identifier.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObject(uid: string, rid: string | null, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object() and
     * sets `out_icalcomp` to queried component. This function always returns
     * master object for a case of `rid` being NULL or an empty string.
     * This component should be freed with g_object_unref(), when no longer needed.
     * 
     * Use e_cal_client_get_objects_for_uid() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     * @param result a #GAsyncResult
     */
    getObjectFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ICalComponent-s.
     * The call is finished by e_cal_client_get_object_list_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObjectList(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument, returning matching objects as a list of #ECalComponent-s.
     * The call is finished by e_cal_client_get_object_list_as_comps_finish() from
     * the `callback`.
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObjectListAsComps(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_object_list_as_comps() and
     * sets `out_ecalcomps` to a matching list of #ECalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     */
    getObjectListAsCompsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_ecalcomps`
     * argument, which is a list of #ECalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     */
    getObjectListAsCompsSync(sexp: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Finishes previous call of e_cal_client_get_object_list() and
     * sets `out_icalcomps` to a matching list of #ICalComponent-s.
     * This list should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     */
    getObjectListFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    /**
     * Gets a list of objects from the calendar that match the query specified
     * by the `sexp` argument. The objects will be returned in the `out_icalcomps`
     * argument, which is a list of #ICalComponent.
     * This list should be freed with e_client_util_free_object_slist().
     * @param sexp an S-expression representing the query
     * @param cancellable a #GCancellable; can be %NULL
     */
    getObjectListSync(sexp: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomps */ ICalGLib.Component[] ]
    /**
     * Queries a calendar for a calendar component object based
     * on its unique identifier. This function always returns
     * master object for a case of `rid` being NULL or an empty string.
     * This component should be freed with g_object_unref(),
     * when no longer needed.
     * 
     * Use e_cal_client_get_objects_for_uid_sync() to get list of all
     * objects for the given uid, which includes master object and
     * all detached instances.
     * @param uid Unique identifier for a calendar component.
     * @param rid Recurrence identifier.
     * @param cancellable a #GCancellable; can be %NULL
     */
    getObjectSync(uid: string, rid: string | null, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outIcalcomp */ ICalGLib.Component ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * The call is finished by e_cal_client_get_objects_for_uid_finish() from
     * the `callback`.
     * @param uid Unique identifier for a calendar component
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getObjectsForUid(uid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_objects_for_uid() and
     * sets `out_ecalcomps` to a list of #ECalComponent<!-- -->s corresponding to
     * found components for a given uid of the same type as this client.
     * This list should be freed with e_client_util_free_object_slist().
     * @param result a #GAsyncResult
     */
    getObjectsForUidFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Queries a calendar for all calendar components with the given unique
     * ID. This will return any recurring event and all its detached recurrences.
     * For non-recurring events, it will just return the object with that ID.
     * This list should be freed with e_client_util_free_object_slist().
     * @param uid Unique identifier for a calendar component
     * @param cancellable a #GCancellable; can be %NULL
     */
    getObjectsForUidSync(uid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outEcalcomps */ Component[] ]
    /**
     * Gets the source type of the calendar client.
     */
    getSourceType(): ClientSourceType
    /**
     * Retrieves a timezone object from the calendar backend.
     * The call is finished by e_cal_client_get_timezone_finish() from
     * the `callback`.
     * @param tzid ID of the timezone to retrieve
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getTimezone(tzid: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void

    // Overloads of getTimezone

    /**
     * Obtains an #ICalTimezone by its TZID string.  If no match is found,
     * the function returns %NULL.  The returned #ICalTimezone is owned by
     * the `cache` and should not be modified or freed.
     * @param tzid the TZID of a timezone
     */
    getTimezone(tzid: string): ICalGLib.Timezone | null
    /**
     * Finishes previous call of e_cal_client_get_timezone() and
     * sets `out_zone` to a retrieved timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     * @param result a #GAsyncResult
     */
    getTimezoneFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    /**
     * Retrieves a timezone object from the calendar backend.
     * This object is owned by the `client,` thus do not free it.
     * @param tzid ID of the timezone to retrieve
     * @param cancellable a #GCancellable; can be %NULL
     */
    getTimezoneSync(tzid: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outZone */ ICalGLib.Timezone ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * The call is finished by e_cal_client_get_view_finish()
     * from the `callback`.
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    getView(sexp: string, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_get_view().
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param result a #GAsyncResult
     */
    getViewFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outView */ ClientView ]
    /**
     * Query `client` with `sexp,` creating an #ECalClientView.
     * If successful, then the `out_view` is set to newly allocated #ECalClientView,
     * which should be freed with g_object_unref().
     * @param sexp an S-expression representing the query.
     * @param cancellable a #GCancellable; can be %NULL
     */
    getViewSync(sexp: string, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outView */ ClientView ]
    /**
     * Requests the calendar backend to modify an existing object. If the object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     * 
     * The call is finished by e_cal_client_modify_object_finish() from
     * the `callback`.
     * @param icalcomp Component to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modifyObject(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_modify_object().
     * @param result a #GAsyncResult
     */
    modifyObjectFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the calendar backend to modify an existing object. If the object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     * @param icalcomp Component to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    modifyObjectSync(icalcomp: ICalGLib.Component, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Requests the calendar backend to modify existing objects. If an object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     * 
     * The call is finished by e_cal_client_modify_objects_finish() from
     * the `callback`.
     * @param icalcomps Components to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    modifyObjects(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_modify_objects().
     * @param result a #GAsyncResult
     */
    modifyObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Requests the calendar backend to modify existing objects. If an object
     * does not exist on the calendar, an error will be returned.
     * 
     * For recurrent appointments, the `mod` argument specifies what to modify,
     * if all instances (#E_CAL_OBJ_MOD_ALL), a single instance (#E_CAL_OBJ_MOD_THIS),
     * or a specific set of instances (#E_CAL_OBJ_MOD_THIS_AND_PRIOR and
     * #E_CAL_OBJ_MOD_THIS_AND_FUTURE).
     * @param icalcomps Components to modify
     * @param mod Type of modification
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    modifyObjectsSync(icalcomps: ICalGLib.Component[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     * 
     * The call is finished by e_cal_client_receive_objects_finish() from
     * the `callback`.
     * @param icalcomp An #ICalComponent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    receiveObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_receive_objects().
     * @param result a #GAsyncResult
     */
    receiveObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * Makes the backend receive the set of iCalendar objects specified in the
     * `icalcomp` argument. This is used for iTIP confirmation/cancellation
     * messages for scheduled meetings.
     * @param icalcomp An #ICalComponent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    receiveObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_object_finish() from
     * the `callback`.
     * @param uid UID of the object to remove
     * @param rid Recurrence ID of the specific recurrence to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    removeObject(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_remove_object().
     * @param result a #GAsyncResult
     */
    removeObjectFinish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of a recurrent
     * appointment. By using a combination of the `uid,` `rid` and `mod`
     * arguments, you can remove specific instances. If what you want
     * is to remove all instances, use %NULL `rid` and #E_CAL_OBJ_MOD_ALL
     * for the `mod`.
     * @param uid UID of the object to remove
     * @param rid Recurrence ID of the specific recurrence to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    removeObjectSync(uid: string, rid: string | null, mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * This function allows the removal of instances of recurrent appointments.
     * #ECalComponentId objects can identify specific instances (if rid is not
     * %NULL).  If what you want is to remove all instances, use a %NULL rid in
     * the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     * 
     * The call is finished by e_cal_client_remove_objects_finish() from
     * the `callback`.
     * @param ids A list of #ECalComponentId objects identifying the objects to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    removeObjects(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_remove_objects().
     * @param result a #GAsyncResult
     */
    removeObjectsFinish(result: Gio.AsyncResult): boolean
    /**
     * This function allows the removal of instances of recurrent
     * appointments. #ECalComponentId objects can identify specific instances
     * (if rid is not %NULL).  If what you want is to remove all instances, use
     * a %NULL rid in the #ECalComponentId and #E_CAL_OBJ_MOD_ALL for the `mod`.
     * @param ids a list of #ECalComponentId objects       identifying the objects to remove
     * @param mod Type of the removal
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    removeObjectsSync(ids: ComponentId[], mod: ObjModType, opflags: OperationFlags, cancellable: Gio.Cancellable | null): boolean
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to particular users.
     * The call is finished by e_cal_client_send_objects_finish() from
     * the `callback`.
     * @param icalcomp An #ICalComponent to be sent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     * @param callback callback to call when a result is ready
     */
    sendObjects(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes previous call of e_cal_client_send_objects() and
     * populates `out_users` with a list of users to send `out_modified_icalcomp` to.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     * @param result a #GAsyncResult
     */
    sendObjectsFinish(result: Gio.AsyncResult): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    /**
     * Requests a calendar backend to send meeting information stored in `icalcomp`.
     * The backend can modify this component and request a send to users in the
     * `out_users` list.
     * 
     * The `out_users` list should be freed with e_client_util_free_string_slist()
     * and the `out_modified_icalcomp` should be freed with g_object_unref().
     * @param icalcomp An #ICalComponent to be sent
     * @param opflags bit-or of #ECalOperationFlags
     * @param cancellable a #GCancellable; can be %NULL
     */
    sendObjectsSync(icalcomp: ICalGLib.Component, opflags: OperationFlags, cancellable: Gio.Cancellable | null): [ /* returnType */ boolean, /* outUsers */ string[], /* outModifiedIcalcomp */ ICalGLib.Component ]
    /**
     * Sets the default timezone to use to resolve DATE and floating DATE-TIME
     * values. This will typically be from the user's timezone setting. Call this
     * before using any other object fetching functions.
     * @param zone A timezone object.
     */
    setDefaultTimezone(zone: ICalGLib.Timezone): void

    // Own signals of ECal-2.0.ECal.Client

    connect(sigName: "free-busy-data", callback: Client.FreeBusyDataSignalCallback): number
    on(sigName: "free-busy-data", callback: Client.FreeBusyDataSignalCallback): number
    once(sigName: "free-busy-data", callback: Client.FreeBusyDataSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "free-busy-data", ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.Client

    connect(sigName: "notify::default-timezone", callback: any): number
    on(sigName: "notify::default-timezone", callback: any): number
    once(sigName: "notify::default-timezone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-timezone", ...args: any[]): void
    connect(sigName: "notify::source-type", callback: any): number
    on(sigName: "notify::source-type", callback: any): number
    once(sigName: "notify::source-type", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source-type", ...args: any[]): void
    connect(sigName: "notify::capabilities", callback: any): number
    on(sigName: "notify::capabilities", callback: any): number
    once(sigName: "notify::capabilities", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::capabilities", ...args: any[]): void
    connect(sigName: "notify::main-context", callback: any): number
    on(sigName: "notify::main-context", callback: any): number
    once(sigName: "notify::main-context", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::main-context", ...args: any[]): void
    connect(sigName: "notify::online", callback: any): number
    on(sigName: "notify::online", callback: any): number
    once(sigName: "notify::online", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::online", ...args: any[]): void
    connect(sigName: "notify::opened", callback: any): number
    on(sigName: "notify::opened", callback: any): number
    once(sigName: "notify::opened", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::opened", ...args: any[]): void
    connect(sigName: "notify::readonly", callback: any): number
    on(sigName: "notify::readonly", callback: any): number
    once(sigName: "notify::readonly", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::readonly", ...args: any[]): void
    connect(sigName: "notify::source", callback: any): number
    on(sigName: "notify::source", callback: any): number
    once(sigName: "notify::source", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::source", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class Client extends EDataServer.Client {

    // Own properties of ECal-2.0.ECal.Client

    static name: string

    // Constructors of ECal-2.0.ECal.Client

    constructor(config?: Client.ConstructorProperties) 
    _init(config?: Client.ConstructorProperties): void
    /**
     * This function cleans up VEVENT, VJOURNAL, VTODO and VTIMEZONE
     * items which are to be imported into Evolution.
     * 
     * Using VTIMEZONE definitions is problematic because they cannot be
     * updated properly when timezone definitions change. They are also
     * incomplete (for compatibility reason only one set of rules for
     * summer saving changes can be included, even if different rules
     * apply in different years). This function looks for matches of the
     * used TZIDs against system timezones and replaces such TZIDs with
     * the corresponding system timezone. This works for TZIDs containing
     * a location (found via a fuzzy string search) and for Outlook TZIDs
     * (via a hard-coded lookup table).
     * 
     * Some programs generate broken meeting invitations with TZID, but
     * without including the corresponding VTIMEZONE. Importing such
     * invitations unchanged causes problems later on (meeting displayed
     * incorrectly, e_cal_component_get_as_string() fails). The situation
     * where this occurred in the past (found by a SyncEvolution user) is
     * now handled via the location based mapping.
     * 
     * If this mapping fails, this function also deals with VTIMEZONE
     * conflicts: such conflicts occur when the calendar already contains
     * an old VTIMEZONE definition with the same TZID, but different
     * summer saving rules. Replacing the VTIMEZONE potentially breaks
     * displaying of old events, whereas not replacing it breaks the new
     * events (the behavior in Evolution <= 2.22.1).
     * 
     * The way this problem is resolved by renaming the new VTIMEZONE
     * definition until the TZID is unique. A running count is appended to
     * the TZID. All items referencing the renamed TZID are adapted
     * accordingly.
     * @param vcalendar a VCALENDAR containing a list of    VTIMEZONE and arbitrary other components, in    arbitrary order: these other components are    modified by this call
     * @param icalcomps a list of #ICalComponent    instances which also have to be patched; may be %NULL
     * @param cancellable a #GCancellable to use in `tzlookup` function
     */
    static checkTimezonesSync(vcalendar: ICalGLib.Component, icalcomps: ICalGLib.Component[] | null, cancellable: Gio.Cancellable | null): boolean
    /**
     * Asynchronously creates a new #ECalClient for `source` and `source_type`.
     * 
     * The `wait_for_connected_seconds` argument had been added since 3.16,
     * to let the caller decide how long to wait for the backend to fully
     * connect to its (possibly remote) data store. This is required due
     * to a change in the authentication process, which is fully asynchronous
     * and done on the client side, while not every client is supposed to
     * response to authentication requests. In case the backend will not connect
     * within the set interval, then it is opened in an offline mode. A special
     * value -1 can be used to not wait for the connected state at all.
     * 
     * Unlike with e_cal_client_new(), there is no need to call e_client_open()
     * after obtaining the #ECalClient.
     * 
     * When the operation is finished, `callback` will be called.  You can then
     * call e_cal_client_connect_finish() to get the result of the operation.
     * @param source an #ESource
     * @param sourceType source tpe of the calendar
     * @param waitForConnectedSeconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request            is satisfied
     */
    static connect(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_cal_client_connect().  If an
     * error occurs in connecting to the D-Bus service, the function sets
     * `error` and returns %NULL.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of the #ESource passed to e_cal_client_connect().
     * @param result a #GAsyncResult
     */
    static connectFinish(result: Gio.AsyncResult): EDataServer.Client | null
    /**
     * Creates a new #ECalClient for `source` and `source_type`.  If an error
     * occurs, the function will set `error` and return %FALSE.
     * 
     * The `wait_for_connected_seconds` argument had been added since 3.16,
     * to let the caller decide how long to wait for the backend to fully
     * connect to its (possibly remote) data store. This is required due
     * to a change in the authentication process, which is fully asynchronous
     * and done on the client side, while not every client is supposed to
     * response to authentication requests. In case the backend will not connect
     * within the set interval, then it is opened in an offline mode. A special
     * value -1 can be used to not wait for the connected state at all.
     * 
     * Unlike with e_cal_client_new(), there is no need to call
     * e_client_open_sync() after obtaining the #ECalClient.
     * 
     * For error handling convenience, any error message returned by this
     * function will have a descriptive prefix that includes the display
     * name of `source`.
     * @param source an #ESource
     * @param sourceType source type of the calendar
     * @param waitForConnectedSeconds timeout, in seconds, to wait for the backend to be fully connected
     * @param cancellable optional #GCancellable object, or %NULL
     */
    static connectSync(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null): EDataServer.Client | null
    static errorCreate(code: ClientError, customMsg: string | null): GLib.Error

    // Overloads of errorCreate

    static errorCreate(code: EDataServer.ClientError, customMsg: string | null): GLib.Error
    static errorQuark(): GLib.Quark
    /**
     * Get localized human readable description of the given error code.
     * @param code an #ECalClientError error code
     */
    static errorToString(code: ClientError): string

    // Overloads of errorToString

    /**
     * Get localized human readable description of the given error code.
     * @param code an #EClientError error code
     */
    static errorToString(code: EDataServer.ClientError): string
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which clients
     * can use. Calls e_cal_client_get_timezone_sync().
     * 
     * The returned timezone object, if not %NULL, is owned by the `ecalclient`.
     * @param tzid ID of the timezone to lookup
     * @param ecalclient a valid #ECalClient pointer
     * @param cancellable an optional #GCancellable to use, or %NULL
     */
    static tzlookupCb(tzid: string, ecalclient: Client, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
    /**
     * An implementation of the #ECalRecurResolveTimezoneCb callback which
     * backends can use. Searches for the timezone in an %ICalComponent
     * associated with the `lookup_data` %ECalClientTzlookupICalCompData.
     * 
     * The returned timezone object is owned by the `lookup_data`.
     * @param tzid ID of the timezone to lookup
     * @param lookupData an #ECalClientTzlookupICalCompData    strcture, created with e_cal_client_tzlookup_icalcomp_data_new()
     * @param cancellable an optional #GCancellable to use, or %NULL
     */
    static tzlookupIcalcompCb(tzid: string, lookupData: ClientTzlookupICalCompData, cancellable: Gio.Cancellable | null): ICalGLib.Timezone | null
}

export module ClientView {

    // Signal callback interfaces

    /**
     * Signal callback interface for `complete`
     */
    export interface CompleteSignalCallback {
        (object: GLib.Error): void
    }

    /**
     * Signal callback interface for `objects-added`
     */
    export interface ObjectsAddedSignalCallback {
        (objects: ICalGLib.Component[]): void
    }

    /**
     * Signal callback interface for `objects-modified`
     */
    export interface ObjectsModifiedSignalCallback {
        (objects: ICalGLib.Component[]): void
    }

    /**
     * Signal callback interface for `objects-removed`
     */
    export interface ObjectsRemovedSignalCallback {
        (uids: ComponentId[]): void
    }

    /**
     * Signal callback interface for `progress`
     */
    export interface ProgressSignalCallback {
        (object: number, p0: string): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends Gio.Initable.ConstructorProperties, GObject.Object.ConstructorProperties {

        // Own constructor properties of ECal-2.0.ECal.ClientView

        /**
         * The ECalClient for the view
         */
        client?: Client | null
        /**
         * The GDBusConnection used to create the D-Bus proxy
         */
        connection?: Gio.DBusConnection | null
        /**
         * The object path used to create the D-Bus proxy
         */
        objectPath?: string | null
    }

}

export interface ClientView extends Gio.Initable {

    // Own properties of ECal-2.0.ECal.ClientView

    /**
     * The ECalClient for the view
     */
    readonly client: Client
    /**
     * The GDBusConnection used to create the D-Bus proxy
     */
    readonly connection: Gio.DBusConnection
    /**
     * The object path used to create the D-Bus proxy
     */
    readonly objectPath: string

    // Owm methods of ECal-2.0.ECal.ClientView

    /**
     * Returns the #GDBusConnection used to create the D-Bus proxy.
     */
    getConnection(): Gio.DBusConnection
    /**
     * Returns the object path used to create the D-Bus proxy.
     */
    getObjectPath(): string
    /**
     * Retunrs: Whether view is running. Not running views are ignoring
     * all events sent from the server.
     */
    isRunning(): boolean
    /**
     * Returns the #ECalClientView:client associated with `client_view`.
     * 
     * The returned #ECalClient is referenced for thread-safety.  Unreference
     * the #ECalClient with g_object_unref() when finished with it.
     */
    refClient(): Client
    /**
     * Client can instruct server to which fields it is interested in only, thus
     * the server can return less data over the wire. The server can still return
     * complete objects, this is just a hint to it that the listed fields will
     * be used only. The UID/RID fields are returned always. Initial views has no
     * fields of interest and using %NULL for `fields_of_interest` will unset any
     * previous changes.
     * 
     * Some backends can use summary information of its cache to create artifical
     * objects, which will omit stored object parsing. If this cannot be done then
     * it will simply return object as is stored in the cache.
     * @param fieldsOfInterest List of field names                      in which the client is interested, or %NULL to reset                      the fields of interest
     */
    setFieldsOfInterest(fieldsOfInterest: string[] | null): void
    /**
     * Sets the `flags` which control the behaviour of `client_view`.
     * @param flags the #ECalClientViewFlags for `client_view`
     */
    setFlags(flags: ClientViewFlags): void
    /**
     * Tells `client_view` to start processing events.
     */
    start(): void
    /**
     * Tells `client_view` to stop processing events.
     */
    stop(): void

    // Own virtual methods of ECal-2.0.ECal.ClientView

    complete(error: GLib.Error): void
    progress(percent: number, message: string): void

    // Own signals of ECal-2.0.ECal.ClientView

    connect(sigName: "complete", callback: ClientView.CompleteSignalCallback): number
    on(sigName: "complete", callback: ClientView.CompleteSignalCallback): number
    once(sigName: "complete", callback: ClientView.CompleteSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "complete", ...args: any[]): void
    connect(sigName: "objects-added", callback: ClientView.ObjectsAddedSignalCallback): number
    on(sigName: "objects-added", callback: ClientView.ObjectsAddedSignalCallback): number
    once(sigName: "objects-added", callback: ClientView.ObjectsAddedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "objects-added", ...args: any[]): void
    connect(sigName: "objects-modified", callback: ClientView.ObjectsModifiedSignalCallback): number
    on(sigName: "objects-modified", callback: ClientView.ObjectsModifiedSignalCallback): number
    once(sigName: "objects-modified", callback: ClientView.ObjectsModifiedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "objects-modified", ...args: any[]): void
    connect(sigName: "objects-removed", callback: ClientView.ObjectsRemovedSignalCallback): number
    on(sigName: "objects-removed", callback: ClientView.ObjectsRemovedSignalCallback): number
    once(sigName: "objects-removed", callback: ClientView.ObjectsRemovedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "objects-removed", ...args: any[]): void
    connect(sigName: "progress", callback: ClientView.ProgressSignalCallback): number
    on(sigName: "progress", callback: ClientView.ProgressSignalCallback): number
    once(sigName: "progress", callback: ClientView.ProgressSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "progress", p0: string, ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.ClientView

    connect(sigName: "notify::client", callback: any): number
    on(sigName: "notify::client", callback: any): number
    once(sigName: "notify::client", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::client", ...args: any[]): void
    connect(sigName: "notify::connection", callback: any): number
    on(sigName: "notify::connection", callback: any): number
    once(sigName: "notify::connection", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::connection", ...args: any[]): void
    connect(sigName: "notify::object-path", callback: any): number
    on(sigName: "notify::object-path", callback: any): number
    once(sigName: "notify::object-path", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::object-path", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class ClientView extends GObject.Object {

    // Own properties of ECal-2.0.ECal.ClientView

    static name: string

    // Constructors of ECal-2.0.ECal.ClientView

    constructor(config?: ClientView.ConstructorProperties) 
    _init(config?: ClientView.ConstructorProperties): void
}

export module Component {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Component {

    // Owm methods of ECal-2.0.ECal.Component

    /**
     * Aborts the sequence change needed in the given calendar component,
     * which means it will not require a sequence commit (via
     * e_cal_component_commit_sequence()) even if the changes done require a
     * sequence increment.
     */
    abortSequence(): void
    /**
     * Adds an alarm subcomponent to a calendar component.  You should have created
     * the `alarm` by using e_cal_component_alarm_new(); it is invalid to use an
     * #ECalComponentAlarm structure that came from e_cal_component_get_alarm().  After
     * adding the alarm, the `alarm` structure is no longer valid because the
     * internal structures may change and you should get rid of it by using
     * e_cal_component_alarm_free().
     * @param alarm an alarm, as an #ECalComponentAlarm
     */
    addAlarm(alarm: ComponentAlarm): void
    /**
     * Creates a new calendar component object by copying the information from
     * another one.
     */
    clone(): Component
    /**
     * Increments the sequence number property in a calendar component object if it
     * needs it.  This needs to be done when any of a number of properties listed in
     * RFC 2445 change values, such as the start and end dates of a component.
     * 
     * This function must be called before calling e_cal_component_get_as_string() to
     * ensure that the component is fully consistent.
     */
    commitSequence(): void
    /**
     * Queries a particular alarm subcomponent of a calendar component.
     * Free the returned pointer with e_cal_component_alarm_free(),
     * when no longer needed.
     * @param auid Unique identifier for the sought alarm subcomponent.
     */
    getAlarm(auid: string): ComponentAlarm | null
    /**
     * Builds a list of the unique identifiers of the alarm subcomponents inside a
     * calendar component. Free the returned #GSList with
     * g_slist_free_full (slist, g_free);, when no longer needed.
     */
    getAlarmUids(): string[] | null
    /**
     * Queries all alarm subcomponents of a calendar component.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_alarm_free);,
     * when no longer needed.
     */
    getAllAlarms(): ComponentAlarm[] | null
    /**
     * Gets the iCalendar string representation of a calendar component.  You should
     * call e_cal_component_commit_sequence() before this function to ensure that the
     * component's sequence number is consistent with the state of the object.
     */
    getAsString(): string
    /**
     * Queries the attachment properties as #ICalAttach objects of the calendar
     * component object. Changes on these objects are directly affecting the component.
     * Free the returned #GSList with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    getAttachments(): ICalGLib.Attach[] | null
    /**
     * Queries the attendee properties of the calendar component object.
     * Free the returned #GSList with g_slist_free_full (slist, e_cal_component_attendee_free);,
     * when no longer needed.
     */
    getAttendees(): ComponentAttendee[] | null
    /**
     * Queries the categories of the given calendar component. The categories
     * are returned in the `categories` argument, which, on success, will contain
     * a comma-separated list of all categories set in the component.
     * Free the returned string with g_free(), when no longer needed.
     */
    getCategories(): string | null
    /**
     * Queries the list of categories of a calendar component object. Each element
     * in the returned categ_list is a string with the corresponding category.
     * Free the returned #GSList with g_slist_free_full (categories, g_free); , when
     * no longer needed.
     */
    getCategoriesList(): string[] | null
    /**
     * Queries the classification of a calendar component object.  If the
     * classification property is not set on this component, this function returns
     * #E_CAL_COMPONENT_CLASS_NONE.
     * 
     * Retuurns: a classification of the `comp,` as an #ECalComponentClassification
     */
    getClassification(): ComponentClassification
    /**
     * Queries the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    getComments(): ComponentText[] | null
    /**
     * Queries the date at which a calendar compoment object was completed.
     * Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     */
    getCompleted(): ICalGLib.Time | null
    /**
     * Queries the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText is returned. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    getContacts(): ComponentText[]
    /**
     * Queries the date in which a calendar component object was created in the
     * calendar store. Free the returned non-NULL pointer with g_object_unref(), when
     * no longer needed.
     */
    getCreated(): ICalGLib.Time | null
    /**
     * Queries the description of a calendar component object.  Journal components
     * may have more than one description, and as such this function returns a list
     * of #ECalComponentText structures.  All other types of components can have at
     * most one description. Free the returned #GSList with
     * g_slist_free_full (slist, e_cal_component_text_free);, when no longer needed.
     */
    getDescriptions(): ComponentText[] | null
    /**
     * Queries the date/time end of a calendar component object. In case there's no DTEND,
     * but only DTSTART and DURATION, then the end is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    getDtend(): ComponentDateTime | null
    /**
     * Queries the date/timestamp property of a calendar component object, which is
     * the last time at which the object was modified by a calendar user agent.
     * 
     * Free a non-NULL returned object with g_object_unref(),
     * when no longer needed.
     */
    getDtstamp(): ICalGLib.Time | null
    /**
     * Queries the date/time start of a calendar component object.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    getDtstart(): ComponentDateTime | null
    /**
     * Queries the due date/time of a calendar component object. In case there's no DUE,
     * but only DTSTART and DURATION, then the due is computed from the later two.
     * Free the returned #ECalComponentDateTime with e_cal_component_datetime_free(),
     * when no longer needed.
     */
    getDue(): ComponentDateTime | null
    /**
     * Queries the list of exception date properties in a calendar component object.
     * Free the returned #GSList with g_slist_free_full (exdates, e_cal_component_datetime_free);,
     * when no longer needed.
     */
    getExdates(): ComponentDateTime[] | null
    /**
     * Queries the list of exception rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     */
    getExruleProperties(): ICalGLib.Property[] | null
    /**
     * Queries the list of exception rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    getExrules(): ICalGLib.Recurrence[] | null
    /**
     * Gets the geographic position property of a calendar component object.
     * Free the returned non-NULL object with g_object_unref(), when
     * no longer needed.
     */
    getGeo(): ICalGLib.Geo | null
    /**
     * Queries the #icalcomponent structure that a calendar component object is
     * wrapping.
     */
    getIcalcomponent(): ICalGLib.Component | null
    /**
     * Get the ID of the component as an #ECalComponentId. The return value should
     * be freed with e_cal_component_id_free(), when no longer needed.
     */
    getId(): ComponentId
    /**
     * Queries the time at which a calendar component object was last modified in
     * the calendar store. Free the returned non-NULL pointer with g_object_unref(),
     * when no longer needed.
     */
    getLastModified(): ICalGLib.Time | null
    /**
     * Queries the location property of a calendar component object.
     */
    getLocation(): string | null
    /**
     * Queries the organizer property of a calendar component object.
     * Free the returned structure with e_cal_component_organizer_free(),
     * when no longer needed.
     */
    getOrganizer(): ComponentOrganizer | null
    /**
     * Queries the percent-complete property of a calendar component object.
     */
    getPercentComplete(): number
    /**
     * Queries the priority property of a calendar component object.
     */
    getPriority(): number
    /**
     * Queries the list of recurrence date properties in a calendar component
     * object. Free the returned #GSList with g_slist_free_full (slist, e_cal_component_period_free);,
     * when no longer needed.
     */
    getRdates(): ComponentPeriod[] | null
    /**
     * Queries the recurrence id property of a calendar component object.
     * Free the returned #ECalComponentRange with e_cal_component_range_free(),
     * whe no longer needed.
     */
    getRecurid(): ComponentRange | null
    /**
     * Gets the recurrence ID property as a string.
     */
    getRecuridAsString(): string
    /**
     * Queries a list of recurrence rule properties of a calendar component object.
     * Free the list with g_slist_free_full (slist, g_object_unref);, when
     * no longer needed.
     */
    getRruleProperties(): ICalGLib.Property[] | null
    /**
     * Queries the list of recurrence rule properties of a calendar component
     * object. Free the returned list with g_slist_free_full (slist, g_object_unref);,
     * when no longer needed.
     */
    getRrules(): ICalGLib.Recurrence[] | null
    /**
     * Queries the sequence number of a calendar component object.
     */
    getSequence(): number
    /**
     * Queries the status property of a calendar component object.
     */
    getStatus(): ICalGLib.PropertyStatus
    /**
     * Queries the summary of a calendar component object.
     * Free the returned pointer withe_cal_component_text_free(),
     * when no longer needed.
     */
    getSummary(): ComponentText | null
    /**
     * Queries the time transparency of a calendar component object.
     */
    getTransparency(): ComponentTransparency
    /**
     * Queries the unique identifier of a calendar component object.
     */
    getUid(): string
    /**
     * Queries the uniform resource locator property of a calendar component object.
     * Free the returned URL with g_free(), when no longer needed.
     */
    getUrl(): string | null
    /**
     * Queries the type of a calendar component object.
     */
    getVtype(): ComponentVType
    /**
     * Checks whether the component has any alarms.
     */
    hasAlarms(): boolean
    /**
     * Queries the component to see if it has attachments.
     */
    hasAttachments(): boolean
    /**
     * Queries a calendar component object for the existence of attendees.
     */
    hasAttendees(): boolean
    /**
     * Queries whether a calendar component object has any exception dates
     * or exception rules.
     */
    hasExceptions(): boolean
    /**
     * Queries whether a calendar component object has any exception dates defined
     * for it.
     */
    hasExdates(): boolean
    /**
     * Queries whether a calendar component object has any exception rules defined
     * for it.
     */
    hasExrules(): boolean
    /**
     * Check whether a calendar component object has an organizer or not.
     */
    hasOrganizer(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates defined
     * for it.
     */
    hasRdates(): boolean
    /**
     * Queries whether a calendar component object has any recurrence dates or
     * recurrence rules.
     */
    hasRecurrences(): boolean
    /**
     * Queries whether a calendar component object has any recurrence rules defined
     * for it.
     */
    hasRrules(): boolean
    /**
     * Checks whether the given calendar component object has simple recurrence
     * rules or more complicated ones.
     */
    hasSimpleRecurrence(): boolean
    /**
     * Checks whether a calendar component object is an instance of a recurring
     * event.
     */
    isInstance(): boolean
    /**
     * Removes an alarm subcomponent from a calendar component.  If the alarm that
     * corresponds to the specified `auid` had been fetched with
     * e_cal_component_get_alarm(), then those alarm structures will be invalid; you
     * should get rid of them with e_cal_component_alarm_free() before using this
     * function.
     * @param auid UID of the alarm to remove.
     */
    removeAlarm(auid: string): void
    /**
     * Remove all alarms from the calendar component
     */
    removeAllAlarms(): void
    /**
     * Sets the attachments of the calendar component object.
     * @param attachments a #GSList of an #ICalAttach,    or %NULL to remove any existing
     */
    setAttachments(attachments: ICalGLib.Attach[] | null): void
    /**
     * Sets the attendees of a calendar component object
     * @param attendeeList Values for attendee    properties, or %NULL to unset
     */
    setAttendees(attendeeList: ComponentAttendee[] | null): void
    /**
     * Sets the list of categories for a calendar component.
     * @param categories Comma-separated list of categories.
     */
    setCategories(categories: string): void
    /**
     * Sets the list of categories of a calendar component object.
     * @param categList List of strings, one for each category.
     */
    setCategoriesList(categList: string[]): void
    /**
     * Sets the classification property of a calendar component object.  To unset
     * the property, specify E_CAL_COMPONENT_CLASS_NONE for `classif`.
     * @param classif Classification to use.
     */
    setClassification(classif: ComponentClassification): void
    /**
     * Sets the comments of a calendar component object.  The comment property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param textList List of #ECalComponentText structures.
     */
    setComments(textList: ComponentText[]): void
    /**
     * Sets the date at which a calendar component object was completed.
     * @param tt Value for the completion date.
     */
    setCompleted(tt: ICalGLib.Time | null): void
    /**
     * Sets the contact of a calendar component object.  The contact property can
     * appear several times inside a calendar component, and so a list of
     * #ECalComponentText structures is used.
     * @param textList List of #ECalComponentText structures.
     */
    setContacts(textList: ComponentText[]): void
    /**
     * Sets the date in which a calendar component object is created in the calendar
     * store.  This should only be used inside a calendar store application, i.e.
     * not by calendar user agents.
     * @param tt Value for the creation date.
     */
    setCreated(tt: ICalGLib.Time | null): void
    /**
     * Sets the description of a calendar component object.  Journal components may
     * have more than one description, and as such this function takes in a list of
     * #ECalComponentText structures.  All other types of components can have
     * at most one description.
     * @param textList List of #ECalComponentText structures.
     */
    setDescriptions(textList: ComponentText[]): void
    /**
     * Sets the date/time end property of a calendar component object.
     * @param dt End date/time, or %NULL, to remove the property.
     */
    setDtend(dt: ComponentDateTime | null): void
    /**
     * Sets the date/timestamp of a calendar component object.  This should be
     * called whenever a calendar user agent makes a change to a component's
     * properties.
     * @param tt Date/timestamp value.
     */
    setDtstamp(tt: ICalGLib.Time): void
    /**
     * Sets the date/time start property of a calendar component object.
     * @param dt Start date/time, or %NULL, to remove the property.
     */
    setDtstart(dt: ComponentDateTime | null): void
    /**
     * Sets the due date/time property of a calendar component object.
     * @param dt End date/time, or %NULL, to remove the property.
     */
    setDue(dt: ComponentDateTime | null): void
    /**
     * Sets the list of exception dates in a calendar component object.
     * @param exdateList List of #ECalComponentDateTime structures.
     */
    setExdates(exdateList: ComponentDateTime[] | null): void
    /**
     * Sets the list of exception rules in a calendar component object.
     * @param recurList a #GSList    of #ICalRecurrence structures, or %NULL.
     */
    setExrules(recurList: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the geographic position property on a calendar component object.
     * @param geo Value for the geographic position property, or %NULL to unset.
     */
    setGeo(geo: ICalGLib.Geo | null): void
    /**
     * Sets the contents of a calendar component object from an #ICalComponent.
     * If the `comp` already had an #ICalComponent set into it, it will
     * be freed automatically.
     * 
     * Supported component types are VEVENT, VTODO, VJOURNAL, VFREEBUSY, and VTIMEZONE.
     * @param icalcomp An #ICalComponent.
     */
    setIcalcomponent(icalcomp: ICalGLib.Component | null): boolean
    /**
     * Sets the time at which a calendar component object was last stored in the
     * calendar store.  This should not be called by plain calendar user agents.
     * @param tt Value for the last time modified.
     */
    setLastModified(tt: ICalGLib.Time | null): void
    /**
     * Sets the location property of a calendar component object.
     * @param location Location value. Use %NULL or empty string, to unset the property.
     */
    setLocation(location: string | null): void
    /**
     * Clears any existing component data from a calendar component object and
     * creates a new #ICalComponent of the specified type for it.  The only property
     * that will be set in the new component will be its unique identifier.
     * @param type Type of calendar component to create.
     */
    setNewVtype(type: ComponentVType): void
    /**
     * Sets the organizer of a calendar component object
     * @param organizer Value for the organizer property, as an #ECalComponentOrganizer
     */
    setOrganizer(organizer: ComponentOrganizer | null): void
    /**
     * Sets percent complete. The `percent` can be between 0 and 100, inclusive.
     * A special value -1 can be used to remove the percent complete property.
     * @param percent a percent to set, or -1 to remove the property
     */
    setPercentComplete(percent: number): void
    /**
     * Sets the priority property of a calendar component object.
     * The `priority` can be between 0 and 9, inclusive.
     * A special value -1 can be used to remove the priority property.
     * @param priority Value for the priority property.
     */
    setPriority(priority: number): void
    /**
     * Sets the list of recurrence dates in a calendar component object.
     * @param rdateList List of    #ECalComponentPeriod structures, or %NULL to set none
     */
    setRdates(rdateList: ComponentPeriod[] | null): void
    /**
     * Sets the recurrence id property of a calendar component object.
     * @param recurId Value for the recurrence id property, or %NULL, to remove the property.
     */
    setRecurid(recurId: ComponentRange | null): void
    /**
     * Sets the list of recurrence rules in a calendar component object.
     * @param recurList List of #ICalRecurrence structures, or %NULL.
     */
    setRrules(recurList: ICalGLib.Recurrence[] | null): void
    /**
     * Sets the sequence number of a calendar component object.
     * A special value -1 can be used to remove the sequence number property.
     * 
     * Normally this function should not be called, since the sequence number
     * is incremented automatically at the proper times.
     * @param sequence a sequence number to set, or -1 to remove the property
     */
    setSequence(sequence: number): void
    /**
     * Sets the status property of a calendar component object.
     * @param status Status value, as an #ICalPropertyStatus. Use %I_CAL_STATUS_NONE, to unset the property
     */
    setStatus(status: ICalGLib.PropertyStatus): void
    /**
     * Sets the summary of a calendar component object.
     * @param summary Summary property and its parameters.
     */
    setSummary(summary: ComponentText): void
    /**
     * Sets the time transparency of a calendar component object.
     * Use %E_CAL_COMPONENT_TRANSP_NONE to unset the property.
     * @param transp Time transparency value.
     */
    setTransparency(transp: ComponentTransparency): void
    /**
     * Sets the unique identifier string of a calendar component object.
     * @param uid Unique identifier.
     */
    setUid(uid: string): void
    /**
     * Sets the uniform resource locator property of a calendar component object.
     * A %NULL or an empty string removes the property.
     * @param url URL value.
     */
    setUrl(url: string | null): void
    /**
     * Strips all error messages from the calendar component. Those error messages are
     * added to the iCalendar string representation whenever an invalid is used for
     * one of its fields.
     */
    stripErrors(): void

    // Class property signals of ECal-2.0.ECal.Component

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Component extends GObject.Object {

    // Own properties of ECal-2.0.ECal.Component

    static name: string

    // Constructors of ECal-2.0.ECal.Component

    constructor(config?: Component.ConstructorProperties) 
    /**
     * Creates a new empty calendar component object.  Once created, you should set it from an
     * existing #icalcomponent structure by using e_cal_component_set_icalcomponent() or with a
     * new empty component type by using e_cal_component_set_new_vtype().
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty calendar component object.  Once created, you should set it from an
     * existing #icalcomponent structure by using e_cal_component_set_icalcomponent() or with a
     * new empty component type by using e_cal_component_set_new_vtype().
     * @constructor 
     */
    static new(): Component
    /**
     * Creates a new #ECalComponent which will has set `icalcomp` as
     * an inner #ICalComponent. The newly created #ECalComponent takes
     * ownership of the `icalcomp,` and if the call
     * to e_cal_component_set_icalcomponent() fails, then `icalcomp`
     * is freed.
     * @constructor 
     * @param icalcomp An #ICalComponent to use
     */
    static newFromIcalcomponent(icalcomp: ICalGLib.Component): Component
    /**
     * Creates a new calendar component object from the given iCalendar string.
     * @constructor 
     * @param calobj A string representation of an iCalendar component.
     */
    static newFromString(calobj: string): Component
    /**
     * Creates a new #ECalComponent of type `vtype`.
     * @constructor 
     * @param vtype an #ECalComponentVType
     */
    static newVtype(vtype: ComponentVType): Component
    _init(config?: Component.ConstructorProperties): void
}

export module ReminderWatcher {

    // Signal callback interfaces

    /**
     * Signal callback interface for `changed`
     */
    export interface ChangedSignalCallback {
        (): void
    }

    /**
     * Signal callback interface for `format-time`
     */
    export interface FormatTimeSignalCallback {
        (rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number): void
    }

    /**
     * Signal callback interface for `triggered`
     */
    export interface TriggeredSignalCallback {
        (reminders: ReminderData[], snoozed: boolean): void
    }


    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of ECal-2.0.ECal.ReminderWatcher

        /**
         * An #ICalTimezone to be used as the default time zone.
         */
        defaultZone?: ICalGLib.Timezone | null
        /**
         * The #ESourceRegistry which manages #ESource instances.
         */
        registry?: EDataServer.SourceRegistry | null
        /**
         * Whether timers are enabled for the #EReminderWatcher. See
         * e_reminder_watcher_set_timers_enabled() for more information
         * what it means.
         * 
         * Default: %TRUE
         */
        timersEnabled?: boolean | null
    }

}

export interface ReminderWatcher {

    // Own properties of ECal-2.0.ECal.ReminderWatcher

    /**
     * An #ICalTimezone to be used as the default time zone.
     */
    defaultZone: ICalGLib.Timezone
    /**
     * The #ESourceRegistry which manages #ESource instances.
     */
    readonly registry: EDataServer.SourceRegistry
    /**
     * Whether timers are enabled for the #EReminderWatcher. See
     * e_reminder_watcher_set_timers_enabled() for more information
     * what it means.
     * 
     * Default: %TRUE
     */
    timersEnabled: boolean

    // Owm methods of ECal-2.0.ECal.ReminderWatcher

    /**
     * Returns a new string with a text description of the `rd`. The text format
     * can be influenced with `flags`.
     * 
     * Free the returned string with g_free(), when no longer needed.
     * @param rd an #EReminderData
     * @param flags bit-or of #EReminderWatcherDescribeFlags
     */
    describeData(rd: ReminderData, flags: number): string
    /**
     * Asynchronously dismiss single reminder in the past or snoozed reminders.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call e_reminder_watcher_dismiss_finish() to get the result of
     * the operation.
     * @param rd an #EReminderData to dismiss
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    dismiss(rd: ReminderData, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Asynchronously dismiss all past reminders.
     * 
     * When the operation is finished, `callback` will be called. You can
     * then call e_reminder_watcher_dismiss_all_finish() to get the result
     * of the operation.
     * @param cancellable optional #GCancellable object, or %NULL
     * @param callback a #GAsyncReadyCallback to call when the request is satisfied
     */
    dismissAll(cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss_all().
     * @param result a #GAsyncResult
     */
    dismissAllFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss all past reminders. The operation stops after
     * the first error is encountered, which can be before all the past
     * reminders are dismissed.
     * @param cancellable optional #GCancellable object, or %NULL
     */
    dismissAllSync(cancellable: Gio.Cancellable | null): boolean
    /**
     * Finishes the operation started with e_reminder_watcher_dismiss().
     * @param result a #GAsyncResult
     */
    dismissFinish(result: Gio.AsyncResult): boolean
    /**
     * Synchronously dismiss single reminder in the past or snoozed reminders.
     * @param rd an #EReminderData to dismiss
     * @param cancellable optional #GCancellable object, or %NULL
     */
    dismissSync(rd: ReminderData, cancellable: Gio.Cancellable | null): boolean
    dupDefaultZone(): ICalGLib.Timezone
    /**
     * Gathers a #GSList of all past reminders which had not been removed after
     * EReminderWatcher::triggered signal. Such reminders are remembered
     * across sessions, until they are dismissed by e_reminder_watcher_dismiss()
     * or its synchronous variant. These reminders can be also snoozed
     * with e_reminder_watcher_snooze(), which removes them from the past
     * reminders into the list of snoozed reminders, see e_reminder_watcher_dup_snoozed().
     * 
     * Free the returned #GSList with
     * g_slist_free_full (reminders, e_reminder_data_free);
     * when no longer needed.
     */
    dupPast(): ReminderData[] | null
    /**
     * Gathers a #GSList of currently snoozed reminder with e_reminder_watcher_snooze().
     * The snoozed reminders are remembered across sessions and they are re-triggered
     * when their snooze time elapses, which can move them back to the list of past reminders.
     * 
     * Free the returned #GSList with
     * g_slist_free_full (reminders, e_reminder_data_free);
     * when no longer needed.
     */
    dupSnoozed(): ReminderData[] | null
    getRegistry(): EDataServer.SourceRegistry
    getTimersEnabled(): boolean
    refOpenedClient(sourceUid: string): Client | null
    /**
     * Sets the default zone for the `watcher`. This is used when calculating
     * trigger times for floating component times. When the `zone` is %NULL,
     * then sets a UTC time zone.
     * @param zone an #ICalTimezone
     */
    setDefaultZone(zone: ICalGLib.Timezone | null): void
    /**
     * The `watcher` can be used both for scheduling the timers for the reminders
     * and respond to them through the "triggered" signal, or only to listen for
     * changes on the past reminders. The default is to have timers enabled, thus
     * to response to scheduled reminders. Disabling the timers also means there
     * will be less resources needed by the `watcher`.
     * @param enabled a value to set
     */
    setTimersEnabled(enabled: boolean): void
    /**
     * Snoozes `rd` until `until,` which is an absolute time when the `rd`
     * should be retriggered. This moves the `rd` from the list of past
     * reminders into the list of snoozed reminders and invokes the "changed"
     * signal.
     * 
     * The `until` can be a special value 0, to set the time as the event start,
     * if it's in the future. The function does nothing when the event time
     * is in the past.
     * @param rd an #EReminderData identifying the reminder
     * @param until time_t as gint64, when the `rd` should be retriggered
     */
    snooze(rd: ReminderData, until: number): void
    /**
     * Notifies the #watcher that the timer previously scheduled
     * with EReminderWatcherClass::schedule_timer elapsed. This can
     * be used by the descendants which override the default implementation
     * of EReminderWatcherClass::schedule_timer. There is always scheduled
     * only one timer and once it's elapsed it should be also removed,
     * the same when the EReminderWatcherClass::schedule_timer is called
     * and the previously scheduled timer was not elapsed yet, the previous
     * should be removed first, aka every call to EReminderWatcherClass::schedule_timer
     * replaces any previously scheduled timer.
     */
    timerElapsed(): void

    // Own virtual methods of ECal-2.0.ECal.ReminderWatcher

    calClientConnect(source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null): void
    changed(): void
    formatTime(rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: string, bufferSize: number): void
    scheduleTimer(atTime: number): void

    // Own signals of ECal-2.0.ECal.ReminderWatcher

    connect(sigName: "changed", callback: ReminderWatcher.ChangedSignalCallback): number
    on(sigName: "changed", callback: ReminderWatcher.ChangedSignalCallback): number
    once(sigName: "changed", callback: ReminderWatcher.ChangedSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "changed", ...args: any[]): void
    connect(sigName: "format-time", callback: ReminderWatcher.FormatTimeSignalCallback): number
    on(sigName: "format-time", callback: ReminderWatcher.FormatTimeSignalCallback): number
    once(sigName: "format-time", callback: ReminderWatcher.FormatTimeSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "format-time", itt: ICalGLib.Time, inoutBuffer: object | null, bufferSize: number, ...args: any[]): void
    connect(sigName: "triggered", callback: ReminderWatcher.TriggeredSignalCallback): number
    on(sigName: "triggered", callback: ReminderWatcher.TriggeredSignalCallback): number
    once(sigName: "triggered", callback: ReminderWatcher.TriggeredSignalCallback): number
    off(handlerId: number): number
    emit(sigName: "triggered", snoozed: boolean, ...args: any[]): void

    // Class property signals of ECal-2.0.ECal.ReminderWatcher

    connect(sigName: "notify::default-zone", callback: any): number
    on(sigName: "notify::default-zone", callback: any): number
    once(sigName: "notify::default-zone", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::default-zone", ...args: any[]): void
    connect(sigName: "notify::registry", callback: any): number
    on(sigName: "notify::registry", callback: any): number
    once(sigName: "notify::registry", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::registry", ...args: any[]): void
    connect(sigName: "notify::timers-enabled", callback: any): number
    on(sigName: "notify::timers-enabled", callback: any): number
    once(sigName: "notify::timers-enabled", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::timers-enabled", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

/**
 * Contains only private data that should be read and manipulated using the
 * functions below.
 * @class 
 */
export class ReminderWatcher extends GObject.Object {

    // Own properties of ECal-2.0.ECal.ReminderWatcher

    static name: string

    // Constructors of ECal-2.0.ECal.ReminderWatcher

    constructor(config?: ReminderWatcher.ConstructorProperties) 
    /**
     * Creates a new #EReminderWatcher, which will use the `registry`. It adds
     * its own reference to `registry`. Free the created #EReminderWatcher
     * with g_object_unref() when no longer needed.
     * @constructor 
     * @param registry an #ESourceRegistry
     */
    constructor(registry: EDataServer.SourceRegistry) 
    /**
     * Creates a new #EReminderWatcher, which will use the `registry`. It adds
     * its own reference to `registry`. Free the created #EReminderWatcher
     * with g_object_unref() when no longer needed.
     * @constructor 
     * @param registry an #ESourceRegistry
     */
    static new(registry: EDataServer.SourceRegistry): ReminderWatcher
    _init(config?: ReminderWatcher.ConstructorProperties): void
}

export interface ClientClass {
}

/**
 * Base class structure for the #ECalClient class
 * @record 
 */
export abstract class ClientClass {

    // Own properties of ECal-2.0.ECal.ClientClass

    static name: string
}

export interface ClientPrivate {
}

export class ClientPrivate {

    // Own properties of ECal-2.0.ECal.ClientPrivate

    static name: string
}

export interface ClientTzlookupICalCompData {

    // Owm methods of ECal-2.0.ECal.ClientTzlookupICalCompData

    /**
     * Copies given #ECalClientTzlookupICalCompData structure.
     * When the `lookup_data` is %NULL, simply returns %NULL as well.
     */
    copy(): ClientTzlookupICalCompData | null
    /**
     * Frees previously allocated #ECalClientTzlookupICalCompData structure
     * with e_cal_client_tzlookup_icalcomp_data_new() or e_cal_client_tzlookup_icalcomp_data_copy().
     * The function does nothing when `lookup_data` is %NULL.
     */
    free(): void
    getIcalcomponent(): ICalGLib.Component
}

/**
 * Contains data used as lookup_data of e_cal_client_tzlookup_icalcomp_cb().
 * @record 
 */
export class ClientTzlookupICalCompData {

    // Own properties of ECal-2.0.ECal.ClientTzlookupICalCompData

    static name: string

    // Constructors of ECal-2.0.ECal.ClientTzlookupICalCompData

    /**
     * Constructs a new #ECalClientTzlookupICalCompData, which can
     * be used as a lookup_data argument of e_cal_client_tzlookup_icalcomp_cb().
     * Free it with e_cal_client_tzlookup_icalcomp_data_free(), when no longer needed.
     * @constructor 
     * @param icomp an #ICalComponent
     */
    constructor(icomp: ICalGLib.Component) 
    /**
     * Constructs a new #ECalClientTzlookupICalCompData, which can
     * be used as a lookup_data argument of e_cal_client_tzlookup_icalcomp_cb().
     * Free it with e_cal_client_tzlookup_icalcomp_data_free(), when no longer needed.
     * @constructor 
     * @param icomp an #ICalComponent
     */
    static new(icomp: ICalGLib.Component): ClientTzlookupICalCompData
}

export interface ClientViewClass {

    // Own fields of ECal-2.0.ECal.ClientViewClass

    progress: (clientView: ClientView, percent: number, message: string) => void
    complete: (clientView: ClientView, error: GLib.Error) => void
}

/**
 * Base class structure for the #ECalClientView class
 * @record 
 */
export abstract class ClientViewClass {

    // Own properties of ECal-2.0.ECal.ClientViewClass

    static name: string
}

export interface ClientViewPrivate {
}

export class ClientViewPrivate {

    // Own properties of ECal-2.0.ECal.ClientViewPrivate

    static name: string
}

export interface ComponentAlarm {

    // Owm methods of ECal-2.0.ECal.ComponentAlarm

    /**
     * Returns a newly allocated copy of `alarm,` which should be freed with
     * e_cal_component_alarm_free(), when no longer needed.
     */
    copy(): ComponentAlarm
    /**
     * Fills `component` with data from `alarm`. The `component` should
     * be of %I_CAL_VALARM_COMPONENT kind - the function does nothing,
     * if it's not. In case the `alarm` doesn't have set 'uid', a new
     * is assigned.
     * @param component an #ICalComponent of %I_CAL_VALARM_COMPONENT kind
     */
    fillComponent(component: ICalGLib.Component): void
    /**
     * Get the last time the alarm had been acknowledged, that is, when its
     * reminder had been triggered.
     * The returned #ICalTime is owned by `alarm` and should not be modified,
     * neither its content.
     */
    getAcknowledged(): ICalGLib.Time | null
    /**
     * Get the `alarm` action, as an #ECalComponentAlarmAction.
     */
    getAction(): ComponentAlarmAction
    /**
     * Creates a VALARM #ICalComponent filled with data from the `alarm`.
     * In case the `alarm` doesn't have set 'uid', a new is assigned.
     * Free the returned component with g_object_unref(), when no longer
     * needed.
     */
    getAsComponent(): ICalGLib.Component
    /**
     * Get the list of attachments, as #ICalAttach.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     */
    getAttachments(): ICalGLib.Attach[] | null
    /**
     * Get the list of attendees, as #ECalComponentAttendee.
     * The returned #GSList is owned by `alarm` and should not be modified,
     * neither its content.
     */
    getAttendees(): ComponentAttendee[] | null
    /**
     * Get the `alarm` description, as an #ECalComponentText.
     */
    getDescription(): ComponentText | null
    getPropertyBag(): ComponentPropertyBag
    /**
     * Get the `alarm` repeat information, as an ECalComponentAlarmRepeat.
     */
    getRepeat(): ComponentAlarmRepeat | null
    /**
     * Get the `alarm` summary, as an #ECalComponentText.
     */
    getSummary(): ComponentText | null
    /**
     * Get the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     */
    getTrigger(): ComponentAlarmTrigger | null
    /**
     * Get the `alarm` UID.
     */
    getUid(): string | null
    hasAttachments(): boolean
    hasAttendees(): boolean
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     * @param when an #ICalTime when the `alarm`    had been acknowledged, or %NULL to unset
     */
    setAcknowledged(when: ICalGLib.Time | null): void
    /**
     * Set the `alarm` action, as an #ECalComponentAlarmAction.
     * @param action an #ECalComponentAlarmAction
     */
    setAction(action: ComponentAlarmAction): void
    /**
     * Set the list of attachments, as a #GSList of an #ICalAttach.
     * @param attachments a #GSList    of an #ICalAttach objects to set as attachments, or %NULL to unset
     */
    setAttachments(attachments: ICalGLib.Attach[] | null): void
    /**
     * Set the list of attendees, as a #GSList of an #ECalComponentAttendee.
     * @param attendees a #GSList    of an #ECalComponentAttendee objects to set as attendees, or %NULL to unset
     */
    setAttendees(attendees: ComponentAttendee[] | null): void
    /**
     * Set the `alarm` description, as an #ECalComponentText.
     * @param description a description to set, or %NULL to unset
     */
    setDescription(description: ComponentText | null): void
    /**
     * Fill the `alarm` structure with the information from
     * the `component,` which should be of %I_CAL_VALARM_COMPONENT kind.
     * @param component an #ICalComponent
     */
    setFromComponent(component: ICalGLib.Component): void
    /**
     * Set the `alarm` repeat information, as an #ECalComponentAlarmRepeat.
     * @param repeat a repeat information to set, or %NULL to unset
     */
    setRepeat(repeat: ComponentAlarmRepeat | null): void
    /**
     * Set the `alarm` summary, as an #ECalComponentText.
     * @param summary a summary to set, or %NULL to unset
     */
    setSummary(summary: ComponentText | null): void
    /**
     * Set the `alarm` trigger, as an #ECalComponentAlarmTrigger.
     * @param trigger a trigger to set, or %NULL to unset
     */
    setTrigger(trigger: ComponentAlarmTrigger | null): void
    /**
     * Set the `alarm` UID, or generates a new UID, if `uid` is %NULL or an empty string.
     * @param uid a UID to set, or %NULL or empty string to generate new
     */
    setUid(uid: string | null): void
    /**
     * Set the acknowledged time of the `alarm`. Use %NULL to unset it.
     * The function assumes ownership of the `when`.
     * @param when an #ICalTime when the `alarm`    had been acknowledged, or %NULL to unset
     */
    takeAcknowledged(when: ICalGLib.Time | null): void
}

/**
 * Opaque structure, which represents alarm subcomponents.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentAlarm {

    // Own properties of ECal-2.0.ECal.ComponentAlarm

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarm

    /**
     * Creates a new empty #ECalComponentAlarm structure. Free it
     * with e_cal_component_alarm_free(), when no longer needed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty #ECalComponentAlarm structure. Free it
     * with e_cal_component_alarm_free(), when no longer needed.
     * @constructor 
     */
    static new(): ComponentAlarm
    /**
     * Creates a new #ECalComponentAlarm, filled with values from `component,`
     * which should be of kind %I_CAL_VALARM_COMPONENT. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_alarm_free(), when no longer needed.
     * @constructor 
     * @param component an #ICalComponent of kind %I_CAL_VALARM_COMPONENT
     */
    static newFromComponent(component: ICalGLib.Component): ComponentAlarm
}

export interface ComponentAlarmInstance {

    // Owm methods of ECal-2.0.ECal.ComponentAlarmInstance

    /**
     * Returns a newly allocated copy of `instance,` which should be freed with
     * e_cal_component_alarm_instance_free(), when no longer needed.
     */
    copy(): ComponentAlarmInstance
    getOccurEnd(): number
    getOccurStart(): number
    getRid(): string | null
    getTime(): number
    getUid(): string
    /**
     * Set the actual event occurrence end to which this `instance` corresponds.
     * @param occurEnd event occurence end to set
     */
    setOccurEnd(occurEnd: number): void
    /**
     * Set the actual event occurrence start to which this `instance` corresponds.
     * @param occurStart event occurence start to set
     */
    setOccurStart(occurStart: number): void
    /**
     * Set the Recurrence ID of the component this `instance` was generated for.
     * @param rid recurrence UID to set, or %NULL
     */
    setRid(rid: string | null): void
    /**
     * Set the instance time, i.e. "5 minutes before the appointment".
     * @param instanceTime instance time to set
     */
    setTime(instanceTime: number): void
    /**
     * Set the alarm UID.
     * @param uid alarm UID to set
     */
    setUid(uid: string): void
}

/**
 * Opaque structure, which represents an alarm occurrence, i.e. a instance instance.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentAlarmInstance {

    // Own properties of ECal-2.0.ECal.ComponentAlarmInstance

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarmInstance

    /**
     * Creates a new #ECalComponentAlarmInstance structure, filled with the given values.
     * Free the instance with e_cal_component_alarm_instance_free(), when no longer needed.
     * @constructor 
     * @param uid UID of the alarm
     * @param instanceTime instance time, i.e. "5 minutes before the appointment"
     * @param occurStart actual event occurrence start to which this instance corresponds
     * @param occurEnd actual event occurrence end to which this instance corresponds
     */
    constructor(uid: string, instanceTime: number, occurStart: number, occurEnd: number) 
    /**
     * Creates a new #ECalComponentAlarmInstance structure, filled with the given values.
     * Free the instance with e_cal_component_alarm_instance_free(), when no longer needed.
     * @constructor 
     * @param uid UID of the alarm
     * @param instanceTime instance time, i.e. "5 minutes before the appointment"
     * @param occurStart actual event occurrence start to which this instance corresponds
     * @param occurEnd actual event occurrence end to which this instance corresponds
     */
    static new(uid: string, instanceTime: number, occurStart: number, occurEnd: number): ComponentAlarmInstance
}

export interface ComponentAlarmRepeat {

    // Owm methods of ECal-2.0.ECal.ComponentAlarmRepeat

    copy(): ComponentAlarmRepeat
    /**
     * Returns the interval between repetitions of the `repeat,` as an #ICalDuration
     * object. This object is owned by `repeat` and should not be freed. It's valid until
     * the `repeat` is not freed or its interval changed with either e_cal_component_alarm_repeat_set_interval()
     * or e_cal_component_alarm_repeat_set_interval_seconds().
     */
    getInterval(): ICalGLib.Duration
    /**
     * Returns the interval between repetitions of the `repeat` in seconds.
     */
    getIntervalSeconds(): number
    getRepetitions(): number
    /**
     * Set the `interval` between repetitions of the `repeat`.
     * @param interval interval between repetitions, as an #ICalDuration
     */
    setInterval(interval: ICalGLib.Duration): void
    /**
     * Set the `interval_seconds` between repetitions of the `repeat`.
     * @param intervalSeconds interval between repetitions, in seconds
     */
    setIntervalSeconds(intervalSeconds: number): void
    /**
     * Set the `repetitions` count of the `repeat`.
     * @param repetitions number of repetitions, zero for none
     */
    setRepetitions(repetitions: number): void
}

/**
 * A structure holding whether and how an alarm repeats.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentAlarmRepeat {

    // Own properties of ECal-2.0.ECal.ComponentAlarmRepeat

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarmRepeat

    /**
     * Creates a new #ECalComponentAlarmRepeat describing alarm repetitions.
     * The returned structure should be freed with e_cal_component_alarm_repeat_free(),
     * when no longer needed.
     * @constructor 
     * @param repetitions number of extra repetitions, zero for none
     * @param interval interval between repetitions
     */
    constructor(repetitions: number, interval: ICalGLib.Duration) 
    /**
     * Creates a new #ECalComponentAlarmRepeat describing alarm repetitions.
     * The returned structure should be freed with e_cal_component_alarm_repeat_free(),
     * when no longer needed.
     * @constructor 
     * @param repetitions number of extra repetitions, zero for none
     * @param interval interval between repetitions
     */
    static new(repetitions: number, interval: ICalGLib.Duration): ComponentAlarmRepeat
    /**
     * Creates a new #ECalComponentAlarmRepeat describing alarm repetitions.
     * The returned structure should be freed with e_cal_component_alarm_repeat_free(),
     * when no longer needed.
     * @constructor 
     * @param repetitions number of extra repetitions, zero for none
     * @param intervalSeconds interval between repetitions, in seconds
     */
    static newSeconds(repetitions: number, intervalSeconds: number): ComponentAlarmRepeat
}

export interface ComponentAlarmTrigger {

    // Owm methods of ECal-2.0.ECal.ComponentAlarmTrigger

    /**
     * Returns a newly allocated copy of `trigger,` which should be freed with
     * e_cal_component_alarm_trigger_free(), when no longer needed.
     */
    copy(): ComponentAlarmTrigger
    /**
     * Fill `property` with information from `trigger`. The `property`
     * should be of kind %I_CAL_TRIGGER_PROPERTY.
     * @param property an #ICalProperty
     */
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Returns the `trigger` absolute time for an absolute trigger, or %NULL, when
     * the `trigger` is a relative trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its absolute time changed.
     */
    getAbsoluteTime(): ICalGLib.Time | null
    /**
     * Converts information stored in `trigger` into an #ICalProperty
     * of %I_CAL_TRIGGER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    getAsProperty(): ICalGLib.Property
    /**
     * Returns the `trigger` duration for a relative `trigger,` or %NULL, when
     * the `trigger` is an absolute trigger.
     */
    getDuration(): ICalGLib.Duration | null
    getKind(): ComponentAlarmTriggerKind
    getParameterBag(): ComponentParameterBag
    /**
     * Set the `trigegr` with the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE kind and
     * the `absolute_time` as the time of the trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * To set a relative trigger use e_cal_component_alarm_trigger_set_relative().
     * @param absoluteTime the absolute time when to trigger the alarm, as an #ICalTime
     */
    setAbsolute(absoluteTime: ICalGLib.Time): void
    /**
     * Sets the `trigger` absolute time for an absolute trigger. The `absolute_time`
     * should be date/time (not date) in UTC.
     * 
     * The function does nothing, when the `trigger` is a relative trigger.
     * @param absoluteTime absolute time for an absolute trigger, as an #ICalTime
     */
    setAbsoluteTime(absoluteTime: ICalGLib.Time): void
    /**
     * Sets the `trigger` duration for a relative trigger. The function does nothing, when
     * the `trigger` is an absolute trigger. The object is owned by `trigger` and it's
     * valid until the `trigger` is freed or its relative duration changed.
     * @param duration duration for a relative trigger, as an #ICalDuration
     */
    setDuration(duration: ICalGLib.Duration): void
    /**
     * Fill the `trigger` structure with the information from
     * the `property,` which should be of %I_CAL_TRIGGER_PROPERTY kind.
     * @param property an #ICalProperty
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Set the `trigger` kind to `kind`. This works only for other than
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE. To change the kind
     * from absolute to relative, or vice versa, use either
     * e_cal_component_alarm_trigger_set_relative() or
     * e_cal_component_alarm_trigger_set_absolute().
     * @param kind the kind to set, one of #ECalComponentAlarmTriggerKind
     */
    setKind(kind: ComponentAlarmTriggerKind): void
    /**
     * Set the `trigegr` with the given `kind` and `duration`. The `kind` can be any but
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
     * To set an absolute trigger use e_cal_component_alarm_trigger_set_absolute().
     * @param kind an #ECalComponentAlarmTriggerKind, any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE
     * @param duration the duration relative to `kind,` as an #ICalDuration
     */
    setRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): void
}

/**
 * Opaque structure, which represents when an alarm is supposed to be triggered.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentAlarmTrigger {

    // Own properties of ECal-2.0.ECal.ComponentAlarmTrigger

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarmTrigger

    /**
     * Creates a new #ECalComponentAlarmTrigger structure, set with
     * the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE kind and the `absolute_time` as
     * the time of the trigger. The `absolute_time` should be date/time (not date) in UTC.
     * 
     * To create a relative trigger use e_cal_component_alarm_trigger_new_relative().
     * Free the trigger with e_cal_component_alarm_trigger_free(), when no longer needed.
     * @constructor 
     * @param absoluteTime the absolute time when to trigger the alarm, as an #ICalTime
     */
    static newAbsolute(absoluteTime: ICalGLib.Time): ComponentAlarmTrigger
    /**
     * Creates a new #ECalComponentAlarmTrigger, filled with values from `property,`
     * which should be of kind %I_CAL_TRIGGER_PROPERTY. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_alarm_trigger_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty of kind %I_CAL_TRIGGER_PROPERTY
     */
    static newFromProperty(property: ICalGLib.Property): ComponentAlarmTrigger
    /**
     * Creates a new #ECalComponentAlarmTrigger structure, set with the given `kind`
     * and `duration`. The `kind` can be any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE.
     * To create an absolute trigger use e_cal_component_alarm_trigger_new_absolute().
     * Free the trigger with e_cal_component_alarm_trigger_free(), when no longer needed.
     * @constructor 
     * @param kind an #ECalComponentAlarmTriggerKind, any but the %E_CAL_COMPONENT_ALARM_TRIGGER_ABSOLUTE
     * @param duration the duration relative to `kind,` as an #ICalDuration
     */
    static newRelative(kind: ComponentAlarmTriggerKind, duration: ICalGLib.Duration): ComponentAlarmTrigger
}

export interface ComponentAlarms {

    // Owm methods of ECal-2.0.ECal.ComponentAlarms

    /**
     * Add a copy of `instance` into the list of instances. It is added
     * in no particular order.
     * @param instance an #ECalComponentAlarmInstance
     */
    addInstance(instance: ComponentAlarmInstance): void
    /**
     * Returns a newly allocated copy of `alarms,` which should be freed with
     * e_cal_component_alarms_free(), when no longer needed.
     */
    copy(): ComponentAlarms
    /**
     * The returned component is valid until the `alarms` is freed.
     */
    getComponent(): Component
    /**
     * The returned #GSList is owned by `alarms` and should not be modified.
     * It's valid until the `alarms` is freed or the list of instances is not
     * modified by other functions. The items are of type #ECalComponentAlarmInstance.
     */
    getInstances(): ComponentAlarmInstance[] | null
    /**
     * Remove the `instance` from the list of instances. If found, the `instance`
     * is also freed.
     * @param instance an #ECalComponentAlarmInstance
     */
    removeInstance(instance: ComponentAlarmInstance): boolean
    /**
     * Modifies the list of instances to copy of the given `instances`.
     * @param instances #ECalComponentAlarmInstance objects to set
     */
    setInstances(instances: ComponentAlarmInstance[] | null): void
    /**
     * Add the `instance` into the list of instances and assume ownership of it.
     * It is added in no particular order.
     * @param instance an #ECalComponentAlarmInstance
     */
    takeInstance(instance: ComponentAlarmInstance): void
    /**
     * Replaces the list of instances with the given `instances` and
     * assumes ownership of it. Neither the #GSList, nor its items, should
     * contain the same structures.
     * @param instances #ECalComponentAlarmInstance objects to take
     */
    takeInstances(instances: ComponentAlarmInstance[] | null): void
}

/**
 * Opaque structure, which represents alarm trigger instances for a particular component.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentAlarms {

    // Own properties of ECal-2.0.ECal.ComponentAlarms

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAlarms

    /**
     * Creates a new #ECalComponentAlarms structure, associated with `comp`.
     * Free the alarms with e_cal_component_alarms_free(), when no longer needed.
     * @constructor 
     * @param comp the actual alarm component, as #ECalComponent
     */
    constructor(comp: Component) 
    /**
     * Creates a new #ECalComponentAlarms structure, associated with `comp`.
     * Free the alarms with e_cal_component_alarms_free(), when no longer needed.
     * @constructor 
     * @param comp the actual alarm component, as #ECalComponent
     */
    static new(comp: Component): ComponentAlarms
}

export interface ComponentAttendee {

    // Owm methods of ECal-2.0.ECal.ComponentAttendee

    /**
     * Returns a newly allocated copy of `attendee,` which should be freed with
     * e_cal_component_attendee_free(), when no longer needed.
     */
    copy(): ComponentAttendee
    /**
     * Fill `property` with information from `attendee`. The `property`
     * should be of kind %I_CAL_ATTENDEE_PROPERTY.
     * @param property an #ICalProperty
     */
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `attendee` into an #ICalProperty
     * of %I_CAL_ATTENDEE_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getCutype(): ICalGLib.ParameterCutype
    getDelegatedfrom(): string | null
    getDelegatedto(): string | null
    getLanguage(): string | null
    getMember(): string | null
    getParameterBag(): ComponentParameterBag
    getPartstat(): ICalGLib.ParameterPartstat
    getRole(): ICalGLib.ParameterRole
    getRsvp(): boolean
    getSentby(): string | null
    getValue(): string | null
    /**
     * Set the `attendee` common name (cn) parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param cn the value to set
     */
    setCn(cn: string | null): void
    /**
     * Set the `attendee` type, as an #ICalParameterCutype.
     * @param cutype the value to set, as an #ICalParameterCutype
     */
    setCutype(cutype: ICalGLib.ParameterCutype): void
    /**
     * Set the `attendee` delegatedfrom parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param delegatedfrom the value to set
     */
    setDelegatedfrom(delegatedfrom: string | null): void
    /**
     * Set the `attendee` delegatedto parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param delegatedto the value to set
     */
    setDelegatedto(delegatedto: string | null): void
    /**
     * Fill the `attendee` structure with the information from
     * the `property,` which should be of %I_CAL_ATTENDEE_PROPERTY kind.
     * @param property an #ICalProperty
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Set the `attendee` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param language the value to set
     */
    setLanguage(language: string | null): void
    /**
     * Set the `attendee` member parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param member the value to set
     */
    setMember(member: string | null): void
    /**
     * Set the `attendee` status, as an #ICalParameterPartstat.
     * @param partstat the value to set, as an #ICalParameterPartstat
     */
    setPartstat(partstat: ICalGLib.ParameterPartstat): void
    /**
     * Set the `attendee` role, as an #ICalParameterRole.
     * @param role the value to set, as an #ICalParameterRole
     */
    setRole(role: ICalGLib.ParameterRole): void
    /**
     * Set the `attendee` RSVP.
     * @param rsvp the value to set
     */
    setRsvp(rsvp: boolean): void
    /**
     * Set the `attendee` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param sentby the value to set
     */
    setSentby(sentby: string | null): void
    /**
     * Set the `attendee` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     * @param value the value to set
     */
    setValue(value: string | null): void
}

/**
 * Describes an attendee. Use the functions below to work with it.
 * @record 
 */
export class ComponentAttendee {

    // Own properties of ECal-2.0.ECal.ComponentAttendee

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentAttendee

    /**
     * Creates a new empty #ECalComponentAttendee structure. Free it
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty #ECalComponentAttendee structure. Free it
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     */
    static new(): ComponentAttendee
    /**
     * Creates a new #ECalComponentAttendee, filled with values from `property,`
     * which should be of kind %I_CAL_ATTENDEE_PROPERTY. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty of kind %I_CAL_ATTENDEE_PROPERTY
     */
    static newFromProperty(property: ICalGLib.Property): ComponentAttendee
    /**
     * Creates a new #ECalComponentAttendee structure, with all members filled
     * with given values from the parameters. The %NULL and empty strings are
     * treated as unset the value. Free the structure
     * with e_cal_component_attendee_free(), when no longer needed.
     * @constructor 
     * @param value usually a "mailto:email" of the attendee
     * @param member member parameter
     * @param cutype type of the attendee, an #ICalParameterCutype
     * @param role role of the attendee, an #ICalParameterRole
     * @param partstat current status of the attendee, an #ICalParameterPartstat
     * @param rsvp whether requires RSVP
     * @param delegatedfrom delegated from
     * @param delegatedto delegated to
     * @param sentby sent by
     * @param cn common name
     * @param language language
     */
    static newFull(value: string | null, member: string | null, cutype: ICalGLib.ParameterCutype, role: ICalGLib.ParameterRole, partstat: ICalGLib.ParameterPartstat, rsvp: boolean, delegatedfrom: string | null, delegatedto: string | null, sentby: string | null, cn: string | null, language: string | null): ComponentAttendee
}

export interface ComponentClass {
}

export abstract class ComponentClass {

    // Own properties of ECal-2.0.ECal.ComponentClass

    static name: string
}

export interface ComponentDateTime {

    // Owm methods of ECal-2.0.ECal.ComponentDateTime

    /**
     * Creates a new copy of `dt`. The returned structure should be freed
     * with e_cal_component_datetime_free() when no longer needed.
     */
    copy(): ComponentDateTime
    /**
     * Returns the TZID stored with the `dt`. The string is owned by `dt` and
     * it's valid until the `dt` is freed or its TZID overwritten. It never
     * returns an empty string, it returns either set TZID parameter value
     * or %NULL, when none is set.
     */
    getTzid(): string | null
    /**
     * Returns the value stored with the `dt`. The object is owned by `dt` and
     * it's valid until the `dt` is freed or its value overwritten.
     */
    getValue(): ICalGLib.Time
    /**
     * Sets both `value` and `tzid` in one call. Use e_cal_component_datetime_set_value()
     * and e_cal_component_datetime_set_tzid() to set them separately.
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     */
    set(value: ICalGLib.Time, tzid: string | null): void
    /**
     * Sets the `tzid` of the `dt`. Any previously set TZID is freed.
     * An empty string or a %NULL as `tzid` is treated as none TZID.
     * @param tzid the TZID to set, or %NULL
     */
    setTzid(tzid: string | null): void
    /**
     * Sets the `value` of the `dt`. Any previously set value is freed.
     * @param value the value to set, as an #ICalTime
     */
    setValue(value: ICalGLib.Time): void
    /**
     * Sets the `tzid` of the `dt` and assumes ownership of `tzid`. Any previously
     * set TZID is freed. An empty string or a %NULL as `tzid` is treated as none TZID.
     * @param tzid the TZID to take, or %NULL
     */
    takeTzid(tzid: string | null): void
    /**
     * Sets the `value` of the `dt` and assumes ownership of the `value`.
     * Any previously set value is freed.
     * @param value the value to take, as an #ICalTime
     */
    takeValue(value: ICalGLib.Time): void
}

/**
 * An opaque structure containing an #ICalTime describing
 * the date/time value and also its TZID parameter. Use the functions
 * below to work with it.
 * @record 
 */
export class ComponentDateTime {

    // Own properties of ECal-2.0.ECal.ComponentDateTime

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentDateTime

    /**
     * Creates a new #ECalComponentDateTime instance, which holds
     * the `value` and `tzid`. The returned structure should be freed
     * with e_cal_component_datetime_free(), when no longer needed.
     * @constructor 
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     */
    constructor(value: ICalGLib.Time, tzid: string | null) 
    /**
     * Creates a new #ECalComponentDateTime instance, which holds
     * the `value` and `tzid`. The returned structure should be freed
     * with e_cal_component_datetime_free(), when no longer needed.
     * @constructor 
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     */
    static new(value: ICalGLib.Time, tzid: string | null): ComponentDateTime
    /**
     * Creates a new #ECalComponentDateTime instance, which holds
     * the `value` and `tzid`. It is similar to e_cal_component_datetime_new(),
     * except this function assumes ownership of the `value` and `tzid`.
     * The returned structure should be freed with e_cal_component_datetime_free(),
     * when no longer needed.
     * @constructor 
     * @param value an #ICalTime as a value
     * @param tzid timezone ID for the `value,` or %NULL
     */
    static newTake(value: ICalGLib.Time, tzid: string | null): ComponentDateTime
}

export interface ComponentId {

    // Owm methods of ECal-2.0.ECal.ComponentId

    /**
     * Returns a newly allocated copy of `id,` which should be freed with
     * e_cal_component_id_free().
     */
    copy(): ComponentId
    /**
     * Compares two #ECalComponentId structs for equality.
     * @param id2 the second #ECalComponentId
     */
    equal(id2: ComponentId): boolean
    getRid(): string | null
    getUid(): string
    /**
     * Generates a hash value for `id`.
     */
    hash(): number
    /**
     * Sets the RECURRENCE-ID part of the `id`. The `rid` can be %NULL
     * or an empty string, where both are treated as %NULL, which
     * means the `id` has not RECURRENCE-ID.
     * @param rid the RECURRENCE-ID to set
     */
    setRid(rid: string | null): void
    /**
     * Sets the UID part of the `id`.
     * @param uid the UID to set
     */
    setUid(uid: string): void
}

/**
 * An opaque structure containing UID of a component and
 * its recurrence ID (which can be %NULL). Use the functions
 * below to work with it.
 * @record 
 */
export class ComponentId {

    // Own properties of ECal-2.0.ECal.ComponentId

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentId

    /**
     * Creates a new #ECalComponentId from `uid` and `rid,` which should be
     * freed with e_cal_component_id_free().
     * @constructor 
     * @param uid a unique ID string
     * @param rid an optional recurrence ID string
     */
    constructor(uid: string, rid: string | null) 
    /**
     * Creates a new #ECalComponentId from `uid` and `rid,` which should be
     * freed with e_cal_component_id_free().
     * @constructor 
     * @param uid a unique ID string
     * @param rid an optional recurrence ID string
     */
    static new(uid: string, rid: string | null): ComponentId
    /**
     * Creates a new #ECalComponentId from `uid` and `rid,` which should be
     * freed with e_cal_component_id_free(). The function assumes ownership
     * of `uid` and `rid` parameters.
     * @constructor 
     * @param uid a unique ID string
     * @param rid an optional recurrence ID string
     */
    static newTake(uid: string, rid: string | null): ComponentId
}

export interface ComponentOrganizer {

    // Owm methods of ECal-2.0.ECal.ComponentOrganizer

    /**
     * Returns a newly allocated copy of `organizer,` which should be freed with
     * e_cal_component_organizer_free(), when no longer needed.
     */
    copy(): ComponentOrganizer
    /**
     * Fill `property` with information from `organizer`. The `property`
     * should be of kind %I_CAL_ORGANIZER_PROPERTY.
     * @param property an #ICalProperty
     */
    fillProperty(property: ICalGLib.Property): /* property */ ICalGLib.Property
    /**
     * Converts information stored in `organizer` into an #ICalProperty
     * of %I_CAL_ORGANIZER_PROPERTY kind. The caller is responsible to free
     * the returned object with g_object_unref(), when no longer needed.
     */
    getAsProperty(): ICalGLib.Property
    getCn(): string | null
    getLanguage(): string | null
    getParameterBag(): ComponentParameterBag
    getSentby(): string | null
    getValue(): string | null
    /**
     * Set the `organizer` common name (cn) parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param cn the value to set
     */
    setCn(cn: string | null): void
    /**
     * Fill the `organizer` structure with the information from
     * the `property,` which should be of %I_CAL_ORGANIZER_PROPERTY kind.
     * @param property an #ICalProperty
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Set the `organizer` language parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param language the value to set
     */
    setLanguage(language: string | null): void
    /**
     * Set the `organizer` sentby parameter. The %NULL
     * and empty strings are treated as unset the value.
     * @param sentby the value to set
     */
    setSentby(sentby: string | null): void
    /**
     * Set the `organizer` URI, usually of "mailto:email" form. The %NULL
     * and empty strings are treated as unset the value.
     * @param value the value to set
     */
    setValue(value: string | null): void
}

/**
 * Describes an organizer. Use the functions below to work with it.
 * @record 
 */
export class ComponentOrganizer {

    // Own properties of ECal-2.0.ECal.ComponentOrganizer

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentOrganizer

    /**
     * Creates a new empty #ECalComponentOrganizer structure. Free it
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new empty #ECalComponentOrganizer structure. Free it
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     */
    static new(): ComponentOrganizer
    /**
     * Creates a new #ECalComponentOrganizer, filled with values from `property,`
     * which should be of kind %I_CAL_ORGANIZER_PROPERTY. The function returns
     * %NULL when it is not of the expected kind. Free the structure
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty of kind %I_CAL_ORGANIZER_PROPERTY
     */
    static newFromProperty(property: ICalGLib.Property): ComponentOrganizer
    /**
     * Creates a new #ECalComponentOrganizer structure, with all members filled
     * with given values from the parameters. The %NULL and empty strings are
     * treated as unset the value. Free the structure
     * with e_cal_component_organizer_free(), when no longer needed.
     * @constructor 
     * @param value usually a "mailto:email" of the organizer
     * @param sentby sent by
     * @param cn common name
     * @param language language
     */
    static newFull(value: string | null, sentby: string | null, cn: string | null, language: string | null): ComponentOrganizer
}

export interface ComponentParameterBag {

    // Owm methods of ECal-2.0.ECal.ComponentParameterBag

    /**
     * Adds a copy of the `param` into the `bag`.
     * @param param an #ICalParameter
     */
    add(param: ICalGLib.Parameter): void
    /**
     * Assigns content of the `src_bag` into the `bag`.
     * @param srcBag a source #ECalComponentParameterBag
     */
    assign(srcBag: ComponentParameterBag): void
    /**
     * Removes all parameters from the `bag,` thus it doesn't contain any
     * parameter after this function returns.
     */
    clear(): void
    /**
     * Returns a newly allocated copy of `bag,` which should be freed with
     * e_cal_component_parameter_bag_free(), when no longer needed.
     */
    copy(): ComponentParameterBag
    /**
     * Adds all the stored parameters in the `bag` to the `property`.
     * The function replaces any existing parameter with the new value,
     * if any such exists. Otherwise the parameter is added.
     * @param property an #ICalProperty
     */
    fillProperty(property: ICalGLib.Property): void
    /**
     * Returns the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned parameter is owned by the `bag` and should not be freed
     * by the caller.
     * @param index an index of the parameter to get
     */
    get(index: number): ICalGLib.Parameter | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.ParameterKind): number
    /**
     * Removes the #ICalParameter at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_parameter_bag_get_count()),
     * then the function does nothing.
     * @param index an index of the parameter to remove
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` parameters of the given `kind`.
     * @param kind an #ICalParameterKind to remove
     * @param all %TRUE to remove all parameters of the `kind,` or %FALSE to only the first
     */
    removeByKind(kind: ICalGLib.ParameterKind, all: boolean): number
    /**
     * Fills the `bag` with parameters from the `property,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the parameters are included.
     * The `bag` content is cleared before any parameter is added.
     * @param property an #ICalProperty containing the parameters to fill the `bag` with
     */
    setFromProperty(property: ICalGLib.Property): void
    /**
     * Adds the `param` into the `bag` and assumes ownership of the `param`.
     * @param param an #ICalParameter
     */
    take(param: ICalGLib.Parameter): void
}

/**
 * Opaque structure, which represents a bad (list) of #ICalParameter objects.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentParameterBag {

    // Own properties of ECal-2.0.ECal.ComponentParameterBag

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentParameterBag

    /**
     * Creates a new #ECalComponentParameterBag. Free the structure
     * with e_cal_component_parameter_bag_free(), when no longer needed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ECalComponentParameterBag. Free the structure
     * with e_cal_component_parameter_bag_free(), when no longer needed.
     * @constructor 
     */
    static new(): ComponentParameterBag
    /**
     * Creates a new #ECalComponentParameterBag, filled with parameters
     * from the `property,` for which the `func` returned %TRUE. When
     * the `func` is %NULL, all the parameters are included.
     * 
     * Free the structure with e_cal_component_parameter_bag_free(), when no longer needed.
     * @constructor 
     * @param property an #ICalProperty containing the parameters to fill the bag with
     */
    static newFromProperty(property: ICalGLib.Property): ComponentParameterBag
}

export interface ComponentPeriod {

    // Owm methods of ECal-2.0.ECal.ComponentPeriod

    copy(): ComponentPeriod
    /**
     * Returns the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * The returned #ICalDuration object is owned by `period` and should not
     * be freed. It's valid until the `period` is freed or its duration changed.
     */
    getDuration(): ICalGLib.Duration
    /**
     * Returns the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME. The end time can
     * be a null-time, in which case the `period` corresponds to a single
     * date/date-time value, not to a period.
     * 
     * The returned #ICalTime object is owned by `period` and should not
     * be freed. It's valid until the `period` is freed or its end time changed.
     */
    getEnd(): ICalGLib.Time | null
    /**
     * Returns kind of the `period,` one of #ECalComponentPeriodKind. Depending
     * on it either e_cal_component_period_get_end()/e_cal_component_period_set_end()
     * or e_cal_component_period_get_duration()/e_cal_component_period_set_duration()
     * can be used. The kind of an existing `period` canbe changed with
     * e_cal_component_period_set_datetime_full() and e_cal_component_period_set_duration_full().
     */
    getKind(): ComponentPeriodKind
    /**
     * Returns the start of the `period`. The returned #ICalTime object
     * is owned by `period` and should not be freed. It's valid until the `period`
     * is freed or its start time changed.
     */
    getStart(): ICalGLib.Time
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DATETIME
     * and fills the content with `start` and `end`.
     * @param start an #ICalTime, the start of the `period`
     * @param end an #ICalTime, the end of the `period`
     */
    setDatetimeFull(start: ICalGLib.Time, end: ICalGLib.Time | null): void
    /**
     * Set the duration of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * @param duration an #ICalDuration, the duration of the `period`
     */
    setDuration(duration: ICalGLib.Duration): void
    /**
     * Set the kind of `period` to be %E_CAL_COMPONENT_PERIOD_DURATION
     * and fills the content with `start` and `duration`.
     * @param start an #ICalTime, the start of the `period`
     * @param duration an #ICalDuration, the duration of the `period`
     */
    setDurationFull(start: ICalGLib.Time, duration: ICalGLib.Duration): void
    /**
     * Set the end of the `period`. This can be called only on `period`
     * objects of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
     * @param end an #ICalTime, the end of the `period`
     */
    setEnd(end: ICalGLib.Time | null): void
    /**
     * Set the `start` of the `period`. This can be called on any kind of the `period`.
     * @param start an #ICalTime, the start of the `period`
     */
    setStart(start: ICalGLib.Time): void
}

/**
 * Period of time, can have explicit start/end times or start/duration instead.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentPeriod {

    // Own properties of ECal-2.0.ECal.ComponentPeriod

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentPeriod

    /**
     * Creates a new #ECalComponentPeriod of kind %E_CAL_COMPONENT_PERIOD_DATETIME.
     * The returned structure should be freed with e_cal_component_period_free(),
     * when no longer needed.
     * @constructor 
     * @param start an #ICalTime, the start of the period
     * @param end an #ICalTime, the end of the period
     */
    static newDatetime(start: ICalGLib.Time, end: ICalGLib.Time | null): ComponentPeriod
    /**
     * Creates a new #ECalComponentPeriod of kind %E_CAL_COMPONENT_PERIOD_DURATION.
     * The returned structure should be freed with e_cal_component_period_free(),
     * when no longer needed.
     * @constructor 
     * @param start an #ICalTime, the start of the period
     * @param duration an #ICalDuration, the duration of the period
     */
    static newDuration(start: ICalGLib.Time, duration: ICalGLib.Duration): ComponentPeriod
}

export interface ComponentPrivate {
}

export class ComponentPrivate {

    // Own properties of ECal-2.0.ECal.ComponentPrivate

    static name: string
}

export interface ComponentPropertyBag {

    // Owm methods of ECal-2.0.ECal.ComponentPropertyBag

    /**
     * Adds a copy of the `prop` into the `bag`.
     * @param prop an #ICalProperty
     */
    add(prop: ICalGLib.Property): void
    /**
     * Assigns content of the `src_bag` into the `bag`.
     * @param srcBag a source #ECalComponentPropertyBag
     */
    assign(srcBag: ComponentPropertyBag): void
    /**
     * Removes all properties from the `bag,` thus it doesn't contain any
     * property after this function returns.
     */
    clear(): void
    /**
     * Returns a newly allocated copy of `bag,` which should be freed with
     * e_cal_component_property_bag_free(), when no longer needed.
     */
    copy(): ComponentPropertyBag
    /**
     * Adds all the stored properties in the `bag` to the `component`.
     * The function doesn't verify whether the `component` contains
     * the same property already.
     * @param component an #ICalComponent
     */
    fillComponent(component: ICalGLib.Component): void
    /**
     * Returns the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then %NULL is returned.
     * 
     * The returned property is owned by the `bag` and should not be freed
     * by the caller.
     * @param index an index of the property to get
     */
    get(index: number): ICalGLib.Property | null
    getCount(): number
    getFirstByKind(kind: ICalGLib.PropertyKind): number
    /**
     * Removes the #ICalProperty at the given `index`. If the `index` is
     * out of bounds (not lower than e_cal_component_property_bag_get_count()),
     * then the function does nothing.
     * @param index an index of the property to remove
     */
    remove(index: number): void
    /**
     * Removes the first or all (depending on the `all)` properties of the given `kind`.
     * @param kind an #ICalPropertyKind to remove
     * @param all %TRUE to remove all properties of the `kind,` or %FALSE to only the first
     */
    removeByKind(kind: ICalGLib.PropertyKind, all: boolean): number
    /**
     * Fills the `bag` with properties from the `component,` for which the `func`
     * returned %TRUE. When the `func` is %NULL, all the properties are included.
     * The `bag` content is cleared before any property is added.
     * @param component an #ICalComponent containing the properties to fill the `bag` with
     */
    setFromComponent(component: ICalGLib.Component): void
    /**
     * Adds the `prop` into the `bag` and assumes ownership of the `prop`.
     * @param prop an #ICalProperty
     */
    take(prop: ICalGLib.Property): void
}

/**
 * Opaque structure, which represents a bad (list) of #ICalProperty objects.
 * Use the functions below to work with it.
 * @record 
 */
export class ComponentPropertyBag {

    // Own properties of ECal-2.0.ECal.ComponentPropertyBag

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentPropertyBag

    /**
     * Creates a new #ECalComponentPropertyBag. Free the structure
     * with e_cal_component_property_bag_free(), when no longer needed.
     * @constructor 
     */
    constructor() 
    /**
     * Creates a new #ECalComponentPropertyBag. Free the structure
     * with e_cal_component_property_bag_free(), when no longer needed.
     * @constructor 
     */
    static new(): ComponentPropertyBag
    /**
     * Creates a new #ECalComponentPropertyBag, filled with properties
     * from the `component,` for which the `func` returned %TRUE. When
     * the `func` is %NULL, all the properties are included.
     * 
     * Free the structure with e_cal_component_property_bag_free(), when no longer needed.
     * @constructor 
     * @param component an #ICalComponent containing the properties to fill the bag with
     */
    static newFromComponent(component: ICalGLib.Component): ComponentPropertyBag
}

export interface ComponentRange {

    // Owm methods of ECal-2.0.ECal.ComponentRange

    copy(): ComponentRange
    /**
     * Returns the date/time of the `range`. The returned #ECalComponentDateTime
     * is owned by `range` and should not be freed. It's valid until the `range`
     * is freed or its date/time changed.
     */
    getDatetime(): ComponentDateTime
    getKind(): ComponentRangeKind
    /**
     * Set the date/time part of the `range`.
     * @param datetime an #ECalComponentDateTime
     */
    setDatetime(datetime: ComponentDateTime): void
    /**
     * Set the `kind` of the `range`.
     * @param kind an #ECalComponentRangeKind
     */
    setKind(kind: ComponentRangeKind): void
}

/**
 * Describes a range. Use the functions below to work with it.
 * @record 
 */
export class ComponentRange {

    // Own properties of ECal-2.0.ECal.ComponentRange

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentRange

    /**
     * Creates a new #ECalComponentRange describing a range.
     * The returned structure should be freed with e_cal_component_range_free(),
     * when no longer needed.
     * @constructor 
     * @param kind an #ECalComponentRangeKind
     * @param datetime an #ECalComponentDateTime
     */
    constructor(kind: ComponentRangeKind, datetime: ComponentDateTime) 
    /**
     * Creates a new #ECalComponentRange describing a range.
     * The returned structure should be freed with e_cal_component_range_free(),
     * when no longer needed.
     * @constructor 
     * @param kind an #ECalComponentRangeKind
     * @param datetime an #ECalComponentDateTime
     */
    static new(kind: ComponentRangeKind, datetime: ComponentDateTime): ComponentRange
}

export interface ComponentText {

    // Owm methods of ECal-2.0.ECal.ComponentText

    copy(): ComponentText
    getAltrep(): string
    getValue(): string
    /**
     * Set the `altrep` as the alternate representation URI of the `text`.
     * @param altrep alternate representation URI to set
     */
    setAltrep(altrep: string | null): void
    /**
     * Set the `value` as the description string of the `text`.
     * @param value description string to set
     */
    setValue(value: string | null): void
}

/**
 * Contains description string and an alternate representation URI
 * for text properties. Use the functions below to work with it.
 * @record 
 */
export class ComponentText {

    // Own properties of ECal-2.0.ECal.ComponentText

    static name: string

    // Constructors of ECal-2.0.ECal.ComponentText

    /**
     * Creates a new #ECalComponentText describing text properties.
     * The returned structure should be freed with e_cal_component_text_free(),
     * when no longer needed.
     * @constructor 
     * @param value description text
     * @param altrep alternate representation URI
     */
    constructor(value: string | null, altrep: string | null) 
    /**
     * Creates a new #ECalComponentText describing text properties.
     * The returned structure should be freed with e_cal_component_text_free(),
     * when no longer needed.
     * @constructor 
     * @param value description text
     * @param altrep alternate representation URI
     */
    static new(value: string | null, altrep: string | null): ComponentText
}

export interface ReminderData {

    // Owm methods of ECal-2.0.ECal.ReminderData

    /**
     * Copies given #EReminderData structure. When the `rd` is %NULL, simply returns %NULL as well.
     */
    copy(): ReminderData | null
    /**
     * Frees previously allocated #EReminderData structure with e_reminder_data_new()
     * or e_reminder_data_copy(). The function does nothing when `rd` is %NULL.
     */
    free(): void
    getComponent(): Component
    getInstance(): ComponentAlarmInstance
    getSourceUid(): string
    /**
     * Set an #ECalComponent `component` as associated with this `rd`.
     * The `rd` creates a copy of the `component`.
     * @param component an #ECalComponent
     */
    setComponent(component: Component): void
    /**
     * Set an #ECalComponentAlarmInstance `instance` as associated with this `rd`.
     * The `rd` creates a copy of the `instance`.
     * @param instance an #ECalComponentAlarmInstance
     */
    setInstance(instance: ComponentAlarmInstance): void
    /**
     * Set an #ESource UID for `rd`.
     * @param sourceUid an #ESource UID
     */
    setSourceUid(sourceUid: string): void
}

/**
 * Contains data related to single reminder occurrence.
 * @record 
 */
export class ReminderData {

    // Own properties of ECal-2.0.ECal.ReminderData

    static name: string

    // Constructors of ECal-2.0.ECal.ReminderData

    constructor(sourceUid: string, component: Component, instance: ComponentAlarmInstance) 
    static new(sourceUid: string, component: Component, instance: ComponentAlarmInstance): ReminderData
}

export interface ReminderWatcherClass {

    // Own fields of ECal-2.0.ECal.ReminderWatcherClass

    parentClass: GObject.ObjectClass
    scheduleTimer: (watcher: ReminderWatcher, atTime: number) => void
    formatTime: (watcher: ReminderWatcher, rd: ReminderData, itt: ICalGLib.Time, inoutBuffer: string, bufferSize: number) => void
    changed: (watcher: ReminderWatcher) => void
    calClientConnect: (watcher: ReminderWatcher, source: EDataServer.Source, sourceType: ClientSourceType, waitForConnectedSeconds: number, cancellable: Gio.Cancellable | null, callback: Gio.AsyncReadyCallback | null) => void
    reserved: object[]
}

export abstract class ReminderWatcherClass {

    // Own properties of ECal-2.0.ECal.ReminderWatcherClass

    static name: string
}

export interface ReminderWatcherPrivate {
}

export class ReminderWatcherPrivate {

    // Own properties of ECal-2.0.ECal.ReminderWatcherPrivate

    static name: string
}

export interface TimezoneCacheInterface {

    // Own fields of ECal-2.0.ECal.TimezoneCacheInterface

    tzcacheAddTimezone: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    timezoneAdded: (cache: TimezoneCache, zone: ICalGLib.Timezone) => void
    reservedSignals: object[]
}

export abstract class TimezoneCacheInterface {

    // Own properties of ECal-2.0.ECal.TimezoneCacheInterface

    static name: string
}
