
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * DBus-1.0
 */

import type * as GObject from './GObject-2.0.js';

export enum BusType {
    SESSION,
    SYSTEM,
    STARTER,
}
export interface Connection {
}

export class Connection {

    // Own properties of DBus-1.0.DBus.Connection

    static name: string
}

export interface Error {
}

export class Error {

    // Own properties of DBus-1.0.DBus.Error

    static name: string
}

export interface Message {
}

export class Message {

    // Own properties of DBus-1.0.DBus.Message

    static name: string
}

export interface MessageIter {
}

export class MessageIter {

    // Own properties of DBus-1.0.DBus.MessageIter

    static name: string
}

export interface PendingCall {
}

export class PendingCall {

    // Own properties of DBus-1.0.DBus.PendingCall

    static name: string
}
