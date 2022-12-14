
/*
 * Type Definitions for deno_gi (https://github.com/ahgilak/deno_gi)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in ts-for-gir itself or create a bug report on https://github.com/sammydre/ts-for-gjs
 */
/**
 * GCalc-2
 */

import type * as Gio from './Gio-2.0.js';
import type * as GObject from './GObject-2.0.js';
import type * as GLib from './GLib-2.0.js';
import type * as Gee from './Gee-0.8.js';

export enum AssigError {
    INVALID_STRUCTURE_ERROR,
}
export enum FunctionError {
    INVALID_PARAMETERS_ERROR,
    INVOCATION_ERROR,
}
export enum GroupError {
    INVALID_POLYNOMIAL,
    INVALID_INTERNAL_TERM,
}
export enum TermError {
    INVALID_OPERATOR,
    EVALUATION_FAIL,
}
export enum VariableError {
    INVALID_PARENT,
    INVALID_EXPRESSION_DEFINITION,
    EVALUATION_FAIL,
}
export enum ParserError {
    INVALID_TOKEN_ERROR,
    INVALID_EXPRESSION_ERROR,
}
export enum SolverError {
    EXPRESSION_ERROR,
}
export enum ParserTokenType {
    NONE,
    EOF,
    IDENTIFIER,
    INTEGER_LITERAL,
    REAL_LITERAL,
    STAR,
    PLUS,
    DIV,
    MINUS,
    ASSIGN,
    OPEN_PARENS,
    CLOSE_PARENS,
    CARRET,
    CLOSE_BRACE,
    CLOSE_BRACKET,
    OPEN_BRACE,
    OPEN_BRACKET,
    STRING_LITERAL,
    OP_AND,
    OP_COALESCING,
    OP_DEC,
    OP_EQ,
    OP_GE,
    OP_GT,
    OP_INC,
    OP_LE,
    OP_LT,
    OP_NE,
    OP_NEG,
    OP_OR,
    OP_PTR,
    OP_SHIFT_LEFT,
    SEMICOLON,
    TILDE,
    COLON,
    COMMA,
    DOUBLE_COLON,
    DOT,
    ELLIPSIS,
    INTERR,
    HASH,
    CURRENCY_SYMBOL,
}
export enum MathGroupLevel {
    ONE,
    TWO,
    THREE,
}
export module Hashable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Hashable extends GObject.Object {

    // Owm methods of GCalc-2.GCalc.Hashable

    // Has conflict: hash(): number

    // Own virtual methods of GCalc-2.GCalc.Hashable

    hash(): number

    // Class property signals of GCalc-2.GCalc.Hashable

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Hashable {

    // Own properties of GCalc-2.GCalc.Hashable

    static name: string

    // Constructors of GCalc-2.GCalc.Hashable

    constructor(config?: Hashable.ConstructorProperties) 
    _init(config?: Hashable.ConstructorProperties): void
}

export module MathAssign {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

export interface MathAssign extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Owm methods of GCalc-2.GCalc.MathAssign

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathAssign

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathAssign {

    // Own properties of GCalc-2.GCalc.MathAssign

    static name: string

    // Constructors of GCalc-2.GCalc.MathAssign

    constructor(config?: MathAssign.ConstructorProperties) 
    _init(config?: MathAssign.ConstructorProperties): void
}

export module MathBinaryOperator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties {
    }

}

export interface MathBinaryOperator extends GObject.Object, MathExpression, MathOperator {

    // Class property signals of GCalc-2.GCalc.MathBinaryOperator

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathBinaryOperator {

    // Own properties of GCalc-2.GCalc.MathBinaryOperator

    static name: string

    // Constructors of GCalc-2.GCalc.MathBinaryOperator

    constructor(config?: MathBinaryOperator.ConstructorProperties) 
    _init(config?: MathBinaryOperator.ConstructorProperties): void
}

export module MathConstant {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

export interface MathConstant extends GObject.Object, MathExpression {

    // Owm methods of GCalc-2.GCalc.MathConstant

    // Has conflict: add(c: MathConstant): MathConstant
    // Has conflict: subtract(c: MathConstant): MathConstant
    // Has conflict: multiply(c: MathConstant): MathConstant
    // Has conflict: divide(c: MathConstant): MathConstant
    // Has conflict: neg(): MathConstant
    // Has conflict: pow(c: MathConstant): MathConstant

    // Own virtual methods of GCalc-2.GCalc.MathConstant

    add(c: MathConstant): MathConstant
    subtract(c: MathConstant): MathConstant
    multiply(c: MathConstant): MathConstant
    divide(c: MathConstant): MathConstant
    neg(): MathConstant
    pow(c: MathConstant): MathConstant

    // Class property signals of GCalc-2.GCalc.MathConstant

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathConstant {

    // Own properties of GCalc-2.GCalc.MathConstant

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstant

    constructor(config?: MathConstant.ConstructorProperties) 
    _init(config?: MathConstant.ConstructorProperties): void
}

export module MathConstantComplex {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathConstant.ConstructorProperties {
    }

}

export interface MathConstantComplex extends GObject.Object, MathExpression, MathConstant {

    // Owm methods of GCalc-2.GCalc.MathConstantComplex

    // Has conflict: real(): number
    // Has conflict: imag(): number
    // Has conflict: zero(): void

    // Own virtual methods of GCalc-2.GCalc.MathConstantComplex

    real(): number
    imag(): number
    zero(): void

    // Class property signals of GCalc-2.GCalc.MathConstantComplex

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathConstantComplex {

    // Own properties of GCalc-2.GCalc.MathConstantComplex

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstantComplex

    constructor(config?: MathConstantComplex.ConstructorProperties) 
    _init(config?: MathConstantComplex.ConstructorProperties): void
}

export module MathConstantNumber {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathConstant.ConstructorProperties {
    }

}

export interface MathConstantNumber extends GObject.Object, MathExpression, MathConstant {

    // Owm methods of GCalc-2.GCalc.MathConstantNumber

    // Has conflict: value(): number

    // Own virtual methods of GCalc-2.GCalc.MathConstantNumber

    value(): number

    // Class property signals of GCalc-2.GCalc.MathConstantNumber

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathConstantNumber {

    // Own properties of GCalc-2.GCalc.MathConstantNumber

    static name: string

    // Constructors of GCalc-2.GCalc.MathConstantNumber

    constructor(config?: MathConstantNumber.ConstructorProperties) 
    _init(config?: MathConstantNumber.ConstructorProperties): void
}

export module MathDivision {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

export interface MathDivision extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathDivision

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathDivision {

    // Own properties of GCalc-2.GCalc.MathDivision

    static name: string

    // Constructors of GCalc-2.GCalc.MathDivision

    constructor(config?: MathDivision.ConstructorProperties) 
    _init(config?: MathDivision.ConstructorProperties): void
}

export module MathEquation {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

export interface MathEquation extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathEquation

    readonly variables: ExpressionHashMap

    // Owm methods of GCalc-2.GCalc.MathEquation

    // Has conflict: getVariables(): ExpressionHashMap

    // Own virtual methods of GCalc-2.GCalc.MathEquation

    getVariables(): ExpressionHashMap

    // Class property signals of GCalc-2.GCalc.MathEquation

    connect(sigName: "notify::variables", callback: any): number
    on(sigName: "notify::variables", callback: any): number
    once(sigName: "notify::variables", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::variables", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathEquation {

    // Own properties of GCalc-2.GCalc.MathEquation

    static name: string

    // Constructors of GCalc-2.GCalc.MathEquation

    constructor(config?: MathEquation.ConstructorProperties) 
    _init(config?: MathEquation.ConstructorProperties): void
}

export module MathEquationManager {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MathEquationManager extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathEquationManager

    readonly equations: ExpressionContainer
    readonly functions: ExpressionContainer

    // Owm methods of GCalc-2.GCalc.MathEquationManager

    // Has conflict: findVariable(name: string): MathVariable
    // Has conflict: getEquations(): ExpressionContainer
    // Has conflict: getFunctions(): ExpressionContainer

    // Own virtual methods of GCalc-2.GCalc.MathEquationManager

    findVariable(name: string): MathVariable
    getEquations(): ExpressionContainer
    getFunctions(): ExpressionContainer

    // Class property signals of GCalc-2.GCalc.MathEquationManager

    connect(sigName: "notify::equations", callback: any): number
    on(sigName: "notify::equations", callback: any): number
    once(sigName: "notify::equations", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equations", ...args: any[]): void
    connect(sigName: "notify::functions", callback: any): number
    on(sigName: "notify::functions", callback: any): number
    once(sigName: "notify::functions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::functions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathEquationManager {

    // Own properties of GCalc-2.GCalc.MathEquationManager

    static name: string

    // Constructors of GCalc-2.GCalc.MathEquationManager

    constructor(config?: MathEquationManager.ConstructorProperties) 
    _init(config?: MathEquationManager.ConstructorProperties): void
}

export module MathErrorResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathResult.ConstructorProperties {
    }

}

export interface MathErrorResult extends GObject.Object, MathResult {

    // Own properties of GCalc-2.GCalc.MathErrorResult

    readonly message: string

    // Owm methods of GCalc-2.GCalc.MathErrorResult

    // Has conflict: getMessage(): string

    // Own virtual methods of GCalc-2.GCalc.MathErrorResult

    getMessage(): string

    // Class property signals of GCalc-2.GCalc.MathErrorResult

    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathErrorResult {

    // Own properties of GCalc-2.GCalc.MathErrorResult

    static name: string

    // Constructors of GCalc-2.GCalc.MathErrorResult

    constructor(config?: MathErrorResult.ConstructorProperties) 
    _init(config?: MathErrorResult.ConstructorProperties): void
}

export module MathExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathExpression

        parent?: MathExpression | null
    }

}

export interface MathExpression extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathExpression

    parent: MathExpression
    readonly expressions: ExpressionContainer

    // Owm methods of GCalc-2.GCalc.MathExpression

    // Has conflict: toString(): string
    // Has conflict: solve(): MathResult
    // Has conflict: getParent(): MathExpression
    // Has conflict: setParent(value: MathExpression): void
    // Has conflict: getExpressions(): ExpressionContainer

    // Own virtual methods of GCalc-2.GCalc.MathExpression

    toString(): string
    solve(): MathResult
    getParent(): MathExpression
    setParent(value: MathExpression): void
    getExpressions(): ExpressionContainer

    // Class property signals of GCalc-2.GCalc.MathExpression

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathExpression {

    // Own properties of GCalc-2.GCalc.MathExpression

    static name: string

    // Constructors of GCalc-2.GCalc.MathExpression

    constructor(config?: MathExpression.ConstructorProperties) 
    _init(config?: MathExpression.ConstructorProperties): void
}

export module MathFunction {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathFunction

        name?: string | null
        nParams?: number | null
        closed?: boolean | null
    }

}

export interface MathFunction extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathFunction

    readonly paramTypes: ExpressionContainer
    name: string
    nParams: number
    closed: boolean

    // Owm methods of GCalc-2.GCalc.MathFunction

    // Has conflict: evaluate(): MathExpression
    // Has conflict: verifyParams(): boolean
    // Has conflict: getParamTypes(): ExpressionContainer
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getNParams(): number
    // Has conflict: setNParams(value: number): void
    // Has conflict: getClosed(): boolean
    // Has conflict: setClosed(value: boolean): void

    // Own virtual methods of GCalc-2.GCalc.MathFunction

    evaluate(): MathExpression
    verifyParams(): boolean
    getParamTypes(): ExpressionContainer
    getName(): string
    setName(value: string): void
    getNParams(): number
    setNParams(value: number): void
    getClosed(): boolean
    setClosed(value: boolean): void

    // Class property signals of GCalc-2.GCalc.MathFunction

    connect(sigName: "notify::param-types", callback: any): number
    on(sigName: "notify::param-types", callback: any): number
    once(sigName: "notify::param-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::param-types", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::n-params", callback: any): number
    on(sigName: "notify::n-params", callback: any): number
    once(sigName: "notify::n-params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-params", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathFunction {

    // Own properties of GCalc-2.GCalc.MathFunction

    static name: string

    // Constructors of GCalc-2.GCalc.MathFunction

    constructor(config?: MathFunction.ConstructorProperties) 
    _init(config?: MathFunction.ConstructorProperties): void
}

export module MathGroup {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathGroup

        level?: MathGroupLevel | null
        closed?: boolean | null
    }

}

export interface MathGroup extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathGroup

    level: MathGroupLevel
    closed: boolean

    // Owm methods of GCalc-2.GCalc.MathGroup

    // Has conflict: evaluate(): MathExpression
    // Has conflict: getLevel(): MathGroupLevel
    // Has conflict: setLevel(value: MathGroupLevel): void
    // Has conflict: getClosed(): boolean
    // Has conflict: setClosed(value: boolean): void

    // Own virtual methods of GCalc-2.GCalc.MathGroup

    evaluate(): MathExpression
    getLevel(): MathGroupLevel
    setLevel(value: MathGroupLevel): void
    getClosed(): boolean
    setClosed(value: boolean): void

    // Class property signals of GCalc-2.GCalc.MathGroup

    connect(sigName: "notify::level", callback: any): number
    on(sigName: "notify::level", callback: any): number
    once(sigName: "notify::level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathGroup {

    // Own properties of GCalc-2.GCalc.MathGroup

    static name: string

    // Constructors of GCalc-2.GCalc.MathGroup

    constructor(config?: MathGroup.ConstructorProperties) 
    _init(config?: MathGroup.ConstructorProperties): void
}

export module MathMinus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

export interface MathMinus extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathMinus

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathMinus {

    // Own properties of GCalc-2.GCalc.MathMinus

    static name: string

    // Constructors of GCalc-2.GCalc.MathMinus

    constructor(config?: MathMinus.ConstructorProperties) 
    _init(config?: MathMinus.ConstructorProperties): void
}

export module MathMultiply {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

export interface MathMultiply extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathMultiply

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathMultiply {

    // Own properties of GCalc-2.GCalc.MathMultiply

    static name: string

    // Constructors of GCalc-2.GCalc.MathMultiply

    constructor(config?: MathMultiply.ConstructorProperties) 
    _init(config?: MathMultiply.ConstructorProperties): void
}

export module MathOperator {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

export interface MathOperator extends GObject.Object, MathExpression {

    // Class property signals of GCalc-2.GCalc.MathOperator

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathOperator {

    // Own properties of GCalc-2.GCalc.MathOperator

    static name: string

    // Constructors of GCalc-2.GCalc.MathOperator

    constructor(config?: MathOperator.ConstructorProperties) 
    _init(config?: MathOperator.ConstructorProperties): void
}

export module MathParameter {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathVariable.ConstructorProperties {
    }

}

export interface MathParameter extends GObject.Object, MathExpression, MathVariable {

    // Owm methods of GCalc-2.GCalc.MathParameter

    // Has conflict: setValue(val?: any | null): void
    // Has conflict: getValue(): any | null

    // Own virtual methods of GCalc-2.GCalc.MathParameter

    setValue(val?: any | null): void

    // Overloads of setValue

    setValue(value: MathConstant): void
    getValue(): any | null

    // Overloads of getValue

    getValue(): MathConstant

    // Class property signals of GCalc-2.GCalc.MathParameter

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
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
    connect(sigName: "notify::bind", callback: any): number
    on(sigName: "notify::bind", callback: any): number
    once(sigName: "notify::bind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathParameter {

    // Own properties of GCalc-2.GCalc.MathParameter

    static name: string

    // Constructors of GCalc-2.GCalc.MathParameter

    constructor(config?: MathParameter.ConstructorProperties) 
    _init(config?: MathParameter.ConstructorProperties): void
}

export module MathPlus {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties {
    }

}

export interface MathPlus extends GObject.Object, MathExpression, MathOperator, MathBinaryOperator {

    // Class property signals of GCalc-2.GCalc.MathPlus

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathPlus {

    // Own properties of GCalc-2.GCalc.MathPlus

    static name: string

    // Constructors of GCalc-2.GCalc.MathPlus

    constructor(config?: MathPlus.ConstructorProperties) 
    _init(config?: MathPlus.ConstructorProperties): void
}

export module MathPolynomial {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

export interface MathPolynomial extends GObject.Object, MathExpression {

    // Owm methods of GCalc-2.GCalc.MathPolynomial

    // Has conflict: evaluate(): MathExpression

    // Own virtual methods of GCalc-2.GCalc.MathPolynomial

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathPolynomial

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathPolynomial {

    // Own properties of GCalc-2.GCalc.MathPolynomial

    static name: string

    // Constructors of GCalc-2.GCalc.MathPolynomial

    constructor(config?: MathPolynomial.ConstructorProperties) 
    _init(config?: MathPolynomial.ConstructorProperties): void
}

export module MathPow {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties, MathOperator.ConstructorProperties {
    }

}

export interface MathPow extends GObject.Object, MathExpression, MathOperator {

    // Class property signals of GCalc-2.GCalc.MathPow

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathPow {

    // Own properties of GCalc-2.GCalc.MathPow

    static name: string

    // Constructors of GCalc-2.GCalc.MathPow

    constructor(config?: MathPow.ConstructorProperties) 
    _init(config?: MathPow.ConstructorProperties): void
}

export module MathResult {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface MathResult extends GObject.Object {

    // Own properties of GCalc-2.GCalc.MathResult

    readonly expression: MathExpression

    // Owm methods of GCalc-2.GCalc.MathResult

    // Has conflict: toString(): string
    // Has conflict: getExpression(): MathExpression

    // Own virtual methods of GCalc-2.GCalc.MathResult

    toString(): string
    getExpression(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathResult

    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathResult {

    // Own properties of GCalc-2.GCalc.MathResult

    static name: string

    // Constructors of GCalc-2.GCalc.MathResult

    constructor(config?: MathResult.ConstructorProperties) 
    _init(config?: MathResult.ConstructorProperties): void
}

export module MathTerm {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {
    }

}

export interface MathTerm extends GObject.Object, MathExpression {

    // Owm methods of GCalc-2.GCalc.MathTerm

    // Has conflict: add(t: MathTerm): MathExpression
    // Has conflict: evaluate(): MathExpression

    // Own virtual methods of GCalc-2.GCalc.MathTerm

    add(t: MathTerm): MathExpression
    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.MathTerm

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathTerm {

    // Own properties of GCalc-2.GCalc.MathTerm

    static name: string

    // Constructors of GCalc-2.GCalc.MathTerm

    constructor(config?: MathTerm.ConstructorProperties) 
    _init(config?: MathTerm.ConstructorProperties): void
    static evaluateConstants(c1: MathConstant, c2: MathConstant, op: MathOperator): MathExpression
}

export module MathVariable {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties, MathExpression.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.MathVariable

        name?: string | null
        value?: MathConstant | null
        bind?: MathVariable | null
    }

}

export interface MathVariable extends GObject.Object, MathExpression {

    // Own properties of GCalc-2.GCalc.MathVariable

    name: string
    value: MathConstant
    bind: MathVariable

    // Owm methods of GCalc-2.GCalc.MathVariable

    // Has conflict: evaluate(): MathExpression
    // Has conflict: getName(): string
    // Has conflict: setName(value: string): void
    // Has conflict: getValue(): MathConstant
    // Has conflict: setValue(value: MathConstant): void
    // Has conflict: getBind(): MathVariable
    // Has conflict: setBind(value: MathVariable): void
    // Has conflict: getBinded(): boolean

    // Own virtual methods of GCalc-2.GCalc.MathVariable

    evaluate(): MathExpression
    getName(): string
    setName(value: string): void
    getValue(): MathConstant
    setValue(value: MathConstant): void
    getBind(): MathVariable
    setBind(value: MathVariable): void
    getBinded(): boolean

    // Class property signals of GCalc-2.GCalc.MathVariable

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
    connect(sigName: "notify::bind", callback: any): number
    on(sigName: "notify::bind", callback: any): number
    once(sigName: "notify::bind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class MathVariable {

    // Own properties of GCalc-2.GCalc.MathVariable

    static name: string

    // Constructors of GCalc-2.GCalc.MathVariable

    constructor(config?: MathVariable.ConstructorProperties) 
    _init(config?: MathVariable.ConstructorProperties): void
}

export module Assign {

    // Constructor properties interface

    export interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathAssign.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Assign extends MathOperator, MathBinaryOperator, MathAssign {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Assign

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Assign extends Expression {

    // Own properties of GCalc-2.GCalc.Assign

    static name: string

    // Constructors of GCalc-2.GCalc.Assign

    constructor(config?: Assign.ConstructorProperties) 
    constructor() 
    static new(): Assign

    // Overloads of new

    static new(): Expression
    _init(config?: Assign.ConstructorProperties): void
}

export module Constant {

    // Constructor properties interface

    export interface ConstructorProperties extends MathConstant.ConstructorProperties, MathConstantNumber.ConstructorProperties, MathConstantComplex.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Constant extends MathConstant, MathConstantNumber, MathConstantComplex {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Constant

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Constant extends Expression {

    // Own properties of GCalc-2.GCalc.Constant

    static name: string

    // Constructors of GCalc-2.GCalc.Constant

    constructor(config?: Constant.ConstructorProperties) 
    static integer(val: number): Constant
    static unsignedInteger(val: number): Constant
    static double(val: number): Constant
    static complex(real: number, imag: number): Constant
    constructor() 
    static new(): Constant

    // Overloads of new

    static new(): Expression
    _init(config?: Constant.ConstructorProperties): void
}

export module Division {

    // Constructor properties interface

    export interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathDivision.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Division extends MathOperator, MathBinaryOperator, MathDivision {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Division

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Division extends Expression {

    // Own properties of GCalc-2.GCalc.Division

    static name: string

    // Constructors of GCalc-2.GCalc.Division

    constructor(config?: Division.ConstructorProperties) 
    constructor() 
    static new(): Division

    // Overloads of new

    static new(): Expression
    _init(config?: Division.ConstructorProperties): void
}

export module Equation {

    // Constructor properties interface

    export interface ConstructorProperties extends MathEquation.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Equation extends MathEquation {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Equation

    connect(sigName: "notify::variables", callback: any): number
    on(sigName: "notify::variables", callback: any): number
    once(sigName: "notify::variables", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::variables", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Equation extends Expression {

    // Own properties of GCalc-2.GCalc.Equation

    static name: string

    // Constructors of GCalc-2.GCalc.Equation

    constructor(config?: Equation.ConstructorProperties) 
    constructor() 
    static new(): Equation

    // Overloads of new

    static new(): Expression
    _init(config?: Equation.ConstructorProperties): void
}

export module EquationManager {

    // Constructor properties interface

    export interface ConstructorProperties extends MathEquationManager.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface EquationManager extends MathEquationManager {

    // Class property signals of GCalc-2.GCalc.EquationManager

    connect(sigName: "notify::equations", callback: any): number
    on(sigName: "notify::equations", callback: any): number
    once(sigName: "notify::equations", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equations", ...args: any[]): void
    connect(sigName: "notify::functions", callback: any): number
    on(sigName: "notify::functions", callback: any): number
    once(sigName: "notify::functions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::functions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class EquationManager extends GObject.Object {

    // Own properties of GCalc-2.GCalc.EquationManager

    static name: string

    // Constructors of GCalc-2.GCalc.EquationManager

    constructor(config?: EquationManager.ConstructorProperties) 
    constructor() 
    static new(): EquationManager
    _init(config?: EquationManager.ConstructorProperties): void
}

export module ErrorResult {

    // Constructor properties interface

    export interface ConstructorProperties extends MathResult.ConstructorProperties, MathErrorResult.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface ErrorResult extends MathResult, MathErrorResult {

    // Class property signals of GCalc-2.GCalc.ErrorResult

    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: "notify::message", callback: any): number
    on(sigName: "notify::message", callback: any): number
    once(sigName: "notify::message", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::message", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ErrorResult extends GObject.Object {

    // Own properties of GCalc-2.GCalc.ErrorResult

    static name: string

    // Constructors of GCalc-2.GCalc.ErrorResult

    constructor(config?: ErrorResult.ConstructorProperties) 
    constructor(msg: string) 
    static new(msg: string): ErrorResult
    _init(config?: ErrorResult.ConstructorProperties): void
}

export module Expression {

    // Constructor properties interface

    export interface ConstructorProperties extends MathExpression.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Expression extends MathExpression {

    // Owm methods of GCalc-2.GCalc.Expression

    // Has conflict: toString(): string
    // Has conflict: solve(): MathResult

    // Own virtual methods of GCalc-2.GCalc.Expression

    toString(): string

    // Overloads of toString

    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Expression

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Expression extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Expression

    static name: string

    // Constructors of GCalc-2.GCalc.Expression

    constructor(config?: Expression.ConstructorProperties) 
    constructor() 
    static new(): Expression
    _init(config?: Expression.ConstructorProperties): void
}

export module ErrorExpression {

    // Constructor properties interface

    export interface ConstructorProperties extends Expression.ConstructorProperties {
    }

}

export interface ErrorExpression {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.ErrorExpression

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ErrorExpression extends Expression {

    // Own properties of GCalc-2.GCalc.ErrorExpression

    static name: string

    // Constructors of GCalc-2.GCalc.ErrorExpression

    constructor(config?: ErrorExpression.ConstructorProperties) 
    constructor() 
    static new(): ErrorExpression

    // Overloads of new

    static new(): Expression
    _init(config?: ErrorExpression.ConstructorProperties): void
}

export module ExpressionContainer {

    // Constructor properties interface

    export interface ConstructorProperties extends Gio.ListModel.ConstructorProperties, Gee.ArrayList.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.ExpressionContainer

        parent?: MathExpression | null
    }

}

export interface ExpressionContainer extends Gio.ListModel {

    // Own properties of GCalc-2.GCalc.ExpressionContainer

    parent: MathExpression

    // Conflicting properties

    readOnlyView: any
    size: any

    // Owm methods of GCalc-2.GCalc.ExpressionContainer

    getObject(position: number): GObject.Object | null
    find(exp: MathExpression): MathExpression | null
    findNamed(name: string): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void

    // Conflicting methods

    addAll(collection: Gee.Collection): boolean

    // Overloads of addAll

    addAll(collection: Gee.Collection): boolean
    addAll(collection: Gee.Collection): boolean
    bidirListIterator(): Gee.BidirListIterator

    // Overloads of bidirListIterator

    bidirListIterator(): Gee.BidirListIterator
    bidirListIterator(): Gee.BidirListIterator
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

    // Class property signals of GCalc-2.GCalc.ExpressionContainer

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
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

export class ExpressionContainer extends Gee.ArrayList {

    // Own properties of GCalc-2.GCalc.ExpressionContainer

    static name: string

    // Constructors of GCalc-2.GCalc.ExpressionContainer

    constructor(config?: ExpressionContainer.ConstructorProperties) 
    constructor() 
    static new(): ExpressionContainer

    // Overloads of new

    static new(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify, equalFunc: Gee.EqualDataFunc | null): Gee.ArrayList
    _init(config?: ExpressionContainer.ConstructorProperties): void

    // Conflicting static methods

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.List

    // Overloads of empty

    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
    static empty(gType: GObject.GType, gDupFunc: GObject.BoxedCopyFunc, gDestroyFunc: GLib.DestroyNotify): Gee.Collection
}

export module ExpressionHashMap {

    // Constructor properties interface

    export interface ConstructorProperties extends Gee.HashMap.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.ExpressionHashMap

        parent?: MathExpression | null
    }

}

export interface ExpressionHashMap {

    // Own properties of GCalc-2.GCalc.ExpressionHashMap

    parent: MathExpression

    // Owm methods of GCalc-2.GCalc.ExpressionHashMap

    add(exp: MathExpression): void
    remove(exp: MathExpression): void

    // Overloads of remove

    remove(key: object | null): [ /* returnType */ boolean, /* value */ object ]
    findNamed(name: string): MathExpression | null
    getParent(): MathExpression
    setParent(value: MathExpression): void

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
    mapIterator(): Gee.MapIterator

    // Overloads of mapIterator

    mapIterator(): Gee.MapIterator
    mapIterator(): Gee.MapIterator
    clear(): void

    // Overloads of clear

    clear(): void
    clear(): void
    foreach(f: Gee.ForallFunc): boolean

    // Overloads of foreach

    foreach(f: Gee.ForallFunc): boolean
    foreach(f: Gee.ForallFunc): boolean
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator

    // Overloads of stream

    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
    stream(aType: GObject.GType, aDupFunc: GObject.BoxedCopyFunc, aDestroyFunc: GLib.DestroyNotify, f: Gee.StreamFunc): Gee.Iterator
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

    // Class property signals of GCalc-2.GCalc.ExpressionHashMap

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
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
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class ExpressionHashMap extends Gee.HashMap {

    // Own properties of GCalc-2.GCalc.ExpressionHashMap

    static name: string

    // Constructors of GCalc-2.GCalc.ExpressionHashMap

    constructor(config?: ExpressionHashMap.ConstructorProperties) 
    constructor() 
    static new(): ExpressionHashMap

    // Overloads of new

    static new(kType: GObject.GType, kDupFunc: GObject.BoxedCopyFunc, kDestroyFunc: GLib.DestroyNotify, vType: GObject.GType, vDupFunc: GObject.BoxedCopyFunc, vDestroyFunc: GLib.DestroyNotify, keyHashFunc: Gee.HashDataFunc | null, keyEqualFunc: Gee.EqualDataFunc | null, valueEqualFunc: Gee.EqualDataFunc | null): Gee.HashMap
    _init(config?: ExpressionHashMap.ConstructorProperties): void
}

export module Function {

    // Constructor properties interface

    export interface ConstructorProperties extends MathFunction.ConstructorProperties, Hashable.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Function extends MathFunction, Hashable {

    // Owm methods of GCalc-2.GCalc.Function

    // Has conflict: evaluate(): MathExpression

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Own virtual methods of GCalc-2.GCalc.Function

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression

    // Class property signals of GCalc-2.GCalc.Function

    connect(sigName: "notify::param-types", callback: any): number
    on(sigName: "notify::param-types", callback: any): number
    once(sigName: "notify::param-types", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::param-types", ...args: any[]): void
    connect(sigName: "notify::name", callback: any): number
    on(sigName: "notify::name", callback: any): number
    once(sigName: "notify::name", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::name", ...args: any[]): void
    connect(sigName: "notify::n-params", callback: any): number
    on(sigName: "notify::n-params", callback: any): number
    once(sigName: "notify::n-params", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::n-params", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Function extends Expression {

    // Own properties of GCalc-2.GCalc.Function

    static name: string

    // Constructors of GCalc-2.GCalc.Function

    constructor(config?: Function.ConstructorProperties) 
    static withName(name: string, nparams: number): Function
    constructor() 
    static new(): Function

    // Overloads of new

    static new(): Expression
    _init(config?: Function.ConstructorProperties): void
}

export module FunctionAcos {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionAcos {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAcos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionAcos extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAcos

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAcos

    constructor(config?: FunctionAcos.ConstructorProperties) 
    constructor() 
    static new(): FunctionAcos

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAcos.ConstructorProperties): void
}

export module FunctionAcosh {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionAcosh {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAcosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionAcosh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAcosh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAcosh

    constructor(config?: FunctionAcosh.ConstructorProperties) 
    constructor() 
    static new(): FunctionAcosh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAcosh.ConstructorProperties): void
}

export module FunctionAsin {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionAsin {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAsin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionAsin extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAsin

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAsin

    constructor(config?: FunctionAsin.ConstructorProperties) 
    constructor() 
    static new(): FunctionAsin

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAsin.ConstructorProperties): void
}

export module FunctionAsinh {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionAsinh {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAsinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionAsinh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAsinh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAsinh

    constructor(config?: FunctionAsinh.ConstructorProperties) 
    constructor() 
    static new(): FunctionAsinh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAsinh.ConstructorProperties): void
}

export module FunctionAtan {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionAtan {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAtan

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionAtan extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAtan

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAtan

    constructor(config?: FunctionAtan.ConstructorProperties) 
    constructor() 
    static new(): FunctionAtan

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAtan.ConstructorProperties): void
}

export module FunctionAtanh {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionAtanh {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionAtanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionAtanh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionAtanh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionAtanh

    constructor(config?: FunctionAtanh.ConstructorProperties) 
    constructor() 
    static new(): FunctionAtanh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionAtanh.ConstructorProperties): void
}

export module FunctionCos {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionCos {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionCos

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionCos extends Function {

    // Own properties of GCalc-2.GCalc.FunctionCos

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionCos

    constructor(config?: FunctionCos.ConstructorProperties) 
    constructor() 
    static new(): FunctionCos

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionCos.ConstructorProperties): void
}

export module FunctionCosh {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionCosh {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionCosh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionCosh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionCosh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionCosh

    constructor(config?: FunctionCosh.ConstructorProperties) 
    constructor() 
    static new(): FunctionCosh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionCosh.ConstructorProperties): void
}

export module FunctionExp {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionExp {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionExp

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionExp extends Function {

    // Own properties of GCalc-2.GCalc.FunctionExp

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionExp

    constructor(config?: FunctionExp.ConstructorProperties) 
    constructor() 
    static new(): FunctionExp

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionExp.ConstructorProperties): void
}

export module FunctionLog {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionLog {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionLog

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionLog extends Function {

    // Own properties of GCalc-2.GCalc.FunctionLog

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionLog

    constructor(config?: FunctionLog.ConstructorProperties) 
    constructor() 
    static new(): FunctionLog

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionLog.ConstructorProperties): void
}

export module FunctionSin {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionSin {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionSin

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionSin extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSin

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionSin

    constructor(config?: FunctionSin.ConstructorProperties) 
    constructor() 
    static new(): FunctionSin

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSin.ConstructorProperties): void
}

export module FunctionSinh {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionSinh {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionSinh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionSinh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSinh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionSinh

    constructor(config?: FunctionSinh.ConstructorProperties) 
    constructor() 
    static new(): FunctionSinh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSinh.ConstructorProperties): void
}

export module FunctionSqrt {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionSqrt {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionSqrt

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionSqrt extends Function {

    // Own properties of GCalc-2.GCalc.FunctionSqrt

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionSqrt

    constructor(config?: FunctionSqrt.ConstructorProperties) 
    constructor() 
    static new(): FunctionSqrt

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionSqrt.ConstructorProperties): void
}

export module FunctionTan {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionTan {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionTan

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionTan extends Function {

    // Own properties of GCalc-2.GCalc.FunctionTan

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionTan

    constructor(config?: FunctionTan.ConstructorProperties) 
    constructor() 
    static new(): FunctionTan

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionTan.ConstructorProperties): void
}

export module FunctionTanh {

    // Constructor properties interface

    export interface ConstructorProperties extends Function.ConstructorProperties {
    }

}

export interface FunctionTanh {

    // Conflicting methods

    evaluate(): MathExpression

    // Overloads of evaluate

    evaluate(): MathExpression
    evaluate(): MathExpression
    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.FunctionTanh

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class FunctionTanh extends Function {

    // Own properties of GCalc-2.GCalc.FunctionTanh

    static name: string

    // Constructors of GCalc-2.GCalc.FunctionTanh

    constructor(config?: FunctionTanh.ConstructorProperties) 
    constructor() 
    static new(): FunctionTanh

    // Overloads of new

    static new(): Function
    static new(): Expression
    _init(config?: FunctionTanh.ConstructorProperties): void
}

export module Group {

    // Constructor properties interface

    export interface ConstructorProperties extends MathGroup.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Group extends MathGroup {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Group

    connect(sigName: "notify::level", callback: any): number
    on(sigName: "notify::level", callback: any): number
    once(sigName: "notify::level", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::level", ...args: any[]): void
    connect(sigName: "notify::closed", callback: any): number
    on(sigName: "notify::closed", callback: any): number
    once(sigName: "notify::closed", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::closed", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Group extends Expression {

    // Own properties of GCalc-2.GCalc.Group

    static name: string

    // Constructors of GCalc-2.GCalc.Group

    constructor(config?: Group.ConstructorProperties) 
    constructor() 
    static new(): Group

    // Overloads of new

    static new(): Expression
    _init(config?: Group.ConstructorProperties): void
}

export module Minus {

    // Constructor properties interface

    export interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathMinus.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Minus extends MathOperator, MathBinaryOperator, MathMinus {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Minus

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Minus extends Expression {

    // Own properties of GCalc-2.GCalc.Minus

    static name: string

    // Constructors of GCalc-2.GCalc.Minus

    constructor(config?: Minus.ConstructorProperties) 
    constructor() 
    static new(): Minus

    // Overloads of new

    static new(): Expression
    _init(config?: Minus.ConstructorProperties): void
}

export module Multiply {

    // Constructor properties interface

    export interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathMultiply.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Multiply extends MathOperator, MathBinaryOperator, MathMultiply {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Multiply

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Multiply extends Expression {

    // Own properties of GCalc-2.GCalc.Multiply

    static name: string

    // Constructors of GCalc-2.GCalc.Multiply

    constructor(config?: Multiply.ConstructorProperties) 
    constructor() 
    static new(): Multiply

    // Overloads of new

    static new(): Expression
    _init(config?: Multiply.ConstructorProperties): void
}

export module Parameter {

    // Constructor properties interface

    export interface ConstructorProperties extends MathParameter.ConstructorProperties, Variable.ConstructorProperties {
    }

}

export interface Parameter extends MathParameter {

    // Conflicting methods

    setValue(val?: any | null): void

    // Overloads of setValue

    setValue(value: MathConstant): void
    setValue(value: MathConstant): void
    getValue(): any | null

    // Overloads of getValue

    getValue(): MathConstant
    getValue(): MathConstant
    toString(): string
    toString(): string

    // Overloads of toString

    toString(): string
    solve(): MathResult
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Parameter

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
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
    connect(sigName: "notify::bind", callback: any): number
    on(sigName: "notify::bind", callback: any): number
    once(sigName: "notify::bind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Parameter extends Variable {

    // Own properties of GCalc-2.GCalc.Parameter

    static name: string

    // Constructors of GCalc-2.GCalc.Parameter

    constructor(config?: Parameter.ConstructorProperties) 
    constructor(name: string) 
    static new(name: string): Parameter

    // Overloads of new

    static new(): Expression
    _init(config?: Parameter.ConstructorProperties): void
}

export module Parser {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {
    }

}

export interface Parser {

    // Owm methods of GCalc-2.GCalc.Parser

    parse(str: string, eqman: MathEquationManager): void
    readToken(): ParserTokenType
    tokenToString(): string

    // Class property signals of GCalc-2.GCalc.Parser

    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Parser extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Parser

    static name: string

    // Constructors of GCalc-2.GCalc.Parser

    constructor(config?: Parser.ConstructorProperties) 
    constructor() 
    static new(): Parser
    _init(config?: Parser.ConstructorProperties): void
}

export module Plus {

    // Constructor properties interface

    export interface ConstructorProperties extends MathOperator.ConstructorProperties, MathBinaryOperator.ConstructorProperties, MathPlus.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Plus extends MathOperator, MathBinaryOperator, MathPlus {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Plus

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Plus extends Expression {

    // Own properties of GCalc-2.GCalc.Plus

    static name: string

    // Constructors of GCalc-2.GCalc.Plus

    constructor(config?: Plus.ConstructorProperties) 
    constructor() 
    static new(): Plus

    // Overloads of new

    static new(): Expression
    _init(config?: Plus.ConstructorProperties): void
}

export module Polynomial {

    // Constructor properties interface

    export interface ConstructorProperties extends MathPolynomial.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Polynomial extends MathPolynomial {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Polynomial

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Polynomial extends Expression {

    // Own properties of GCalc-2.GCalc.Polynomial

    static name: string

    // Constructors of GCalc-2.GCalc.Polynomial

    constructor(config?: Polynomial.ConstructorProperties) 
    constructor() 
    static new(): Polynomial

    // Overloads of new

    static new(): Expression
    _init(config?: Polynomial.ConstructorProperties): void
}

export module Pow {

    // Constructor properties interface

    export interface ConstructorProperties extends MathOperator.ConstructorProperties, MathPow.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Pow extends MathOperator, MathPow {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Pow

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Pow extends Expression {

    // Own properties of GCalc-2.GCalc.Pow

    static name: string

    // Constructors of GCalc-2.GCalc.Pow

    constructor(config?: Pow.ConstructorProperties) 
    constructor() 
    static new(): Pow

    // Overloads of new

    static new(): Expression
    _init(config?: Pow.ConstructorProperties): void
}

export module Result {

    // Constructor properties interface

    export interface ConstructorProperties extends MathResult.ConstructorProperties, GObject.Object.ConstructorProperties {
    }

}

export interface Result extends MathResult {

    // Class property signals of GCalc-2.GCalc.Result

    connect(sigName: "notify::expression", callback: any): number
    on(sigName: "notify::expression", callback: any): number
    once(sigName: "notify::expression", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expression", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Result extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Result

    static name: string

    // Constructors of GCalc-2.GCalc.Result

    constructor(config?: Result.ConstructorProperties) 
    constructor(exp: MathExpression) 
    static new(exp: MathExpression): Result
    _init(config?: Result.ConstructorProperties): void
}

export module Solver {

    // Constructor properties interface

    export interface ConstructorProperties extends GObject.Object.ConstructorProperties {

        // Own constructor properties of GCalc-2.GCalc.Solver

        equationManager?: MathEquationManager | null
    }

}

export interface Solver {

    // Own properties of GCalc-2.GCalc.Solver

    equationManager: MathEquationManager

    // Owm methods of GCalc-2.GCalc.Solver

    addExpression(exp: string): void
    solve(str: string): MathResult
    getEquationManager(): MathEquationManager
    setEquationManager(value: MathEquationManager): void

    // Class property signals of GCalc-2.GCalc.Solver

    connect(sigName: "notify::equation-manager", callback: any): number
    on(sigName: "notify::equation-manager", callback: any): number
    once(sigName: "notify::equation-manager", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::equation-manager", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Solver extends GObject.Object {

    // Own properties of GCalc-2.GCalc.Solver

    static name: string

    // Constructors of GCalc-2.GCalc.Solver

    constructor(config?: Solver.ConstructorProperties) 
    constructor() 
    static new(): Solver
    _init(config?: Solver.ConstructorProperties): void
}

export module Term {

    // Constructor properties interface

    export interface ConstructorProperties extends MathTerm.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Term extends MathTerm {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Term

    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Term extends Expression {

    // Own properties of GCalc-2.GCalc.Term

    static name: string

    // Constructors of GCalc-2.GCalc.Term

    constructor(config?: Term.ConstructorProperties) 
    constructor() 
    static new(): Term

    // Overloads of new

    static new(): Expression
    _init(config?: Term.ConstructorProperties): void
}

export module Variable {

    // Constructor properties interface

    export interface ConstructorProperties extends MathVariable.ConstructorProperties, Hashable.ConstructorProperties, Expression.ConstructorProperties {
    }

}

export interface Variable extends MathVariable, Hashable {

    // Conflicting methods

    toString(): string

    // Overloads of toString

    toString(): string
    toString(): string
    solve(): MathResult

    // Overloads of solve

    solve(): MathResult
    solve(): MathResult

    // Class property signals of GCalc-2.GCalc.Variable

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
    connect(sigName: "notify::bind", callback: any): number
    on(sigName: "notify::bind", callback: any): number
    once(sigName: "notify::bind", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::bind", ...args: any[]): void
    connect(sigName: "notify::parent", callback: any): number
    on(sigName: "notify::parent", callback: any): number
    once(sigName: "notify::parent", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::parent", ...args: any[]): void
    connect(sigName: "notify::expressions", callback: any): number
    on(sigName: "notify::expressions", callback: any): number
    once(sigName: "notify::expressions", callback: any): number
    off(handlerId: number): number
    emit(sigName: "notify::expressions", ...args: any[]): void
    connect(sigName: string, callback: (...args: any[]) => void): number
    on(sigName: string, callback: (...args: any[]) => void): number
    once(sigName: string, callback: (...args: any[]) => void): number
    off(handlerId: number): number
    emit(sigName: string, ...args: any[]): void
}

export class Variable extends Expression {

    // Own properties of GCalc-2.GCalc.Variable

    static name: string

    // Constructors of GCalc-2.GCalc.Variable

    constructor(config?: Variable.ConstructorProperties) 
    _init(config?: Variable.ConstructorProperties): void
}

export interface AssignClass {
}

export abstract class AssignClass {

    // Own properties of GCalc-2.GCalc.AssignClass

    static name: string
}

export interface AssignPrivate {
}

export class AssignPrivate {

    // Own properties of GCalc-2.GCalc.AssignPrivate

    static name: string
}

export interface ConstantClass {
}

export abstract class ConstantClass {

    // Own properties of GCalc-2.GCalc.ConstantClass

    static name: string
}

export interface ConstantPrivate {
}

export class ConstantPrivate {

    // Own properties of GCalc-2.GCalc.ConstantPrivate

    static name: string
}

export interface DivisionClass {
}

export abstract class DivisionClass {

    // Own properties of GCalc-2.GCalc.DivisionClass

    static name: string
}

export interface DivisionPrivate {
}

export class DivisionPrivate {

    // Own properties of GCalc-2.GCalc.DivisionPrivate

    static name: string
}

export interface EquationClass {
}

export abstract class EquationClass {

    // Own properties of GCalc-2.GCalc.EquationClass

    static name: string
}

export interface EquationPrivate {
}

export class EquationPrivate {

    // Own properties of GCalc-2.GCalc.EquationPrivate

    static name: string
}

export interface EquationManagerClass {
}

export abstract class EquationManagerClass {

    // Own properties of GCalc-2.GCalc.EquationManagerClass

    static name: string
}

export interface EquationManagerPrivate {
}

export class EquationManagerPrivate {

    // Own properties of GCalc-2.GCalc.EquationManagerPrivate

    static name: string
}

export interface ErrorResultClass {
}

export abstract class ErrorResultClass {

    // Own properties of GCalc-2.GCalc.ErrorResultClass

    static name: string
}

export interface ErrorResultPrivate {
}

export class ErrorResultPrivate {

    // Own properties of GCalc-2.GCalc.ErrorResultPrivate

    static name: string
}

export interface ExpressionClass {

    // Own fields of GCalc-2.GCalc.ExpressionClass

    toString: (self: Expression) => string
    solve: (self: Expression) => MathResult
}

export abstract class ExpressionClass {

    // Own properties of GCalc-2.GCalc.ExpressionClass

    static name: string
}

export interface ExpressionPrivate {
}

export class ExpressionPrivate {

    // Own properties of GCalc-2.GCalc.ExpressionPrivate

    static name: string
}

export interface ErrorExpressionClass {
}

export abstract class ErrorExpressionClass {

    // Own properties of GCalc-2.GCalc.ErrorExpressionClass

    static name: string
}

export interface ErrorExpressionPrivate {
}

export class ErrorExpressionPrivate {

    // Own properties of GCalc-2.GCalc.ErrorExpressionPrivate

    static name: string
}

export interface ExpressionContainerClass {
}

export abstract class ExpressionContainerClass {

    // Own properties of GCalc-2.GCalc.ExpressionContainerClass

    static name: string
}

export interface ExpressionContainerPrivate {
}

export class ExpressionContainerPrivate {

    // Own properties of GCalc-2.GCalc.ExpressionContainerPrivate

    static name: string
}

export interface ExpressionHashMapClass {
}

export abstract class ExpressionHashMapClass {

    // Own properties of GCalc-2.GCalc.ExpressionHashMapClass

    static name: string
}

export interface ExpressionHashMapPrivate {
}

export class ExpressionHashMapPrivate {

    // Own properties of GCalc-2.GCalc.ExpressionHashMapPrivate

    static name: string
}

export interface FunctionClass {

    // Own fields of GCalc-2.GCalc.FunctionClass

    evaluate: (self: Function) => MathExpression
}

export abstract class FunctionClass {

    // Own properties of GCalc-2.GCalc.FunctionClass

    static name: string
}

export interface FunctionPrivate {
}

export class FunctionPrivate {

    // Own properties of GCalc-2.GCalc.FunctionPrivate

    static name: string
}

export interface FunctionAcosClass {
}

export abstract class FunctionAcosClass {

    // Own properties of GCalc-2.GCalc.FunctionAcosClass

    static name: string
}

export interface FunctionAcosPrivate {
}

export class FunctionAcosPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAcosPrivate

    static name: string
}

export interface FunctionAcoshClass {
}

export abstract class FunctionAcoshClass {

    // Own properties of GCalc-2.GCalc.FunctionAcoshClass

    static name: string
}

export interface FunctionAcoshPrivate {
}

export class FunctionAcoshPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAcoshPrivate

    static name: string
}

export interface FunctionAsinClass {
}

export abstract class FunctionAsinClass {

    // Own properties of GCalc-2.GCalc.FunctionAsinClass

    static name: string
}

export interface FunctionAsinPrivate {
}

export class FunctionAsinPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAsinPrivate

    static name: string
}

export interface FunctionAsinhClass {
}

export abstract class FunctionAsinhClass {

    // Own properties of GCalc-2.GCalc.FunctionAsinhClass

    static name: string
}

export interface FunctionAsinhPrivate {
}

export class FunctionAsinhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAsinhPrivate

    static name: string
}

export interface FunctionAtanClass {
}

export abstract class FunctionAtanClass {

    // Own properties of GCalc-2.GCalc.FunctionAtanClass

    static name: string
}

export interface FunctionAtanPrivate {
}

export class FunctionAtanPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAtanPrivate

    static name: string
}

export interface FunctionAtanhClass {
}

export abstract class FunctionAtanhClass {

    // Own properties of GCalc-2.GCalc.FunctionAtanhClass

    static name: string
}

export interface FunctionAtanhPrivate {
}

export class FunctionAtanhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionAtanhPrivate

    static name: string
}

export interface FunctionCosClass {
}

export abstract class FunctionCosClass {

    // Own properties of GCalc-2.GCalc.FunctionCosClass

    static name: string
}

export interface FunctionCosPrivate {
}

export class FunctionCosPrivate {

    // Own properties of GCalc-2.GCalc.FunctionCosPrivate

    static name: string
}

export interface FunctionCoshClass {
}

export abstract class FunctionCoshClass {

    // Own properties of GCalc-2.GCalc.FunctionCoshClass

    static name: string
}

export interface FunctionCoshPrivate {
}

export class FunctionCoshPrivate {

    // Own properties of GCalc-2.GCalc.FunctionCoshPrivate

    static name: string
}

export interface FunctionExpClass {
}

export abstract class FunctionExpClass {

    // Own properties of GCalc-2.GCalc.FunctionExpClass

    static name: string
}

export interface FunctionExpPrivate {
}

export class FunctionExpPrivate {

    // Own properties of GCalc-2.GCalc.FunctionExpPrivate

    static name: string
}

export interface FunctionLogClass {
}

export abstract class FunctionLogClass {

    // Own properties of GCalc-2.GCalc.FunctionLogClass

    static name: string
}

export interface FunctionLogPrivate {
}

export class FunctionLogPrivate {

    // Own properties of GCalc-2.GCalc.FunctionLogPrivate

    static name: string
}

export interface FunctionSinClass {
}

export abstract class FunctionSinClass {

    // Own properties of GCalc-2.GCalc.FunctionSinClass

    static name: string
}

export interface FunctionSinPrivate {
}

export class FunctionSinPrivate {

    // Own properties of GCalc-2.GCalc.FunctionSinPrivate

    static name: string
}

export interface FunctionSinhClass {
}

export abstract class FunctionSinhClass {

    // Own properties of GCalc-2.GCalc.FunctionSinhClass

    static name: string
}

export interface FunctionSinhPrivate {
}

export class FunctionSinhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionSinhPrivate

    static name: string
}

export interface FunctionSqrtClass {
}

export abstract class FunctionSqrtClass {

    // Own properties of GCalc-2.GCalc.FunctionSqrtClass

    static name: string
}

export interface FunctionSqrtPrivate {
}

export class FunctionSqrtPrivate {

    // Own properties of GCalc-2.GCalc.FunctionSqrtPrivate

    static name: string
}

export interface FunctionTanClass {
}

export abstract class FunctionTanClass {

    // Own properties of GCalc-2.GCalc.FunctionTanClass

    static name: string
}

export interface FunctionTanPrivate {
}

export class FunctionTanPrivate {

    // Own properties of GCalc-2.GCalc.FunctionTanPrivate

    static name: string
}

export interface FunctionTanhClass {
}

export abstract class FunctionTanhClass {

    // Own properties of GCalc-2.GCalc.FunctionTanhClass

    static name: string
}

export interface FunctionTanhPrivate {
}

export class FunctionTanhPrivate {

    // Own properties of GCalc-2.GCalc.FunctionTanhPrivate

    static name: string
}

export interface GroupClass {
}

export abstract class GroupClass {

    // Own properties of GCalc-2.GCalc.GroupClass

    static name: string
}

export interface GroupPrivate {
}

export class GroupPrivate {

    // Own properties of GCalc-2.GCalc.GroupPrivate

    static name: string
}

export interface MinusClass {
}

export abstract class MinusClass {

    // Own properties of GCalc-2.GCalc.MinusClass

    static name: string
}

export interface MinusPrivate {
}

export class MinusPrivate {

    // Own properties of GCalc-2.GCalc.MinusPrivate

    static name: string
}

export interface MultiplyClass {
}

export abstract class MultiplyClass {

    // Own properties of GCalc-2.GCalc.MultiplyClass

    static name: string
}

export interface MultiplyPrivate {
}

export class MultiplyPrivate {

    // Own properties of GCalc-2.GCalc.MultiplyPrivate

    static name: string
}

export interface ParameterClass {
}

export abstract class ParameterClass {

    // Own properties of GCalc-2.GCalc.ParameterClass

    static name: string
}

export interface ParameterPrivate {
}

export class ParameterPrivate {

    // Own properties of GCalc-2.GCalc.ParameterPrivate

    static name: string
}

export interface ParserClass {
}

export abstract class ParserClass {

    // Own properties of GCalc-2.GCalc.ParserClass

    static name: string
}

export interface ParserPrivate {
}

export class ParserPrivate {

    // Own properties of GCalc-2.GCalc.ParserPrivate

    static name: string
}

export interface PlusClass {
}

export abstract class PlusClass {

    // Own properties of GCalc-2.GCalc.PlusClass

    static name: string
}

export interface PlusPrivate {
}

export class PlusPrivate {

    // Own properties of GCalc-2.GCalc.PlusPrivate

    static name: string
}

export interface PolynomialClass {
}

export abstract class PolynomialClass {

    // Own properties of GCalc-2.GCalc.PolynomialClass

    static name: string
}

export interface PolynomialPrivate {
}

export class PolynomialPrivate {

    // Own properties of GCalc-2.GCalc.PolynomialPrivate

    static name: string
}

export interface PowClass {
}

export abstract class PowClass {

    // Own properties of GCalc-2.GCalc.PowClass

    static name: string
}

export interface PowPrivate {
}

export class PowPrivate {

    // Own properties of GCalc-2.GCalc.PowPrivate

    static name: string
}

export interface ResultClass {
}

export abstract class ResultClass {

    // Own properties of GCalc-2.GCalc.ResultClass

    static name: string
}

export interface ResultPrivate {
}

export class ResultPrivate {

    // Own properties of GCalc-2.GCalc.ResultPrivate

    static name: string
}

export interface SolverClass {
}

export abstract class SolverClass {

    // Own properties of GCalc-2.GCalc.SolverClass

    static name: string
}

export interface SolverPrivate {
}

export class SolverPrivate {

    // Own properties of GCalc-2.GCalc.SolverPrivate

    static name: string
}

export interface TermClass {
}

export abstract class TermClass {

    // Own properties of GCalc-2.GCalc.TermClass

    static name: string
}

export interface TermPrivate {
}

export class TermPrivate {

    // Own properties of GCalc-2.GCalc.TermPrivate

    static name: string
}

export interface VariableClass {
}

export abstract class VariableClass {

    // Own properties of GCalc-2.GCalc.VariableClass

    static name: string
}

export interface VariablePrivate {
}

export class VariablePrivate {

    // Own properties of GCalc-2.GCalc.VariablePrivate

    static name: string
}

export interface HashableIface {

    // Own fields of GCalc-2.GCalc.HashableIface

    hash: (self: Hashable) => number
}

export abstract class HashableIface {

    // Own properties of GCalc-2.GCalc.HashableIface

    static name: string
}

export interface MathAssignIface {
}

export abstract class MathAssignIface {

    // Own properties of GCalc-2.GCalc.MathAssignIface

    static name: string
}

export interface MathBinaryOperatorIface {
}

export abstract class MathBinaryOperatorIface {

    // Own properties of GCalc-2.GCalc.MathBinaryOperatorIface

    static name: string
}

export interface MathConstantIface {

    // Own fields of GCalc-2.GCalc.MathConstantIface

    add: (self: MathConstant, c: MathConstant) => MathConstant
    subtract: (self: MathConstant, c: MathConstant) => MathConstant
    multiply: (self: MathConstant, c: MathConstant) => MathConstant
    divide: (self: MathConstant, c: MathConstant) => MathConstant
    neg: (self: MathConstant) => MathConstant
    pow: (self: MathConstant, c: MathConstant) => MathConstant
}

export abstract class MathConstantIface {

    // Own properties of GCalc-2.GCalc.MathConstantIface

    static name: string
}

export interface MathConstantComplexIface {

    // Own fields of GCalc-2.GCalc.MathConstantComplexIface

    real: (self: MathConstantComplex) => number
    imag: (self: MathConstantComplex) => number
    zero: (self: MathConstantComplex) => void
}

export abstract class MathConstantComplexIface {

    // Own properties of GCalc-2.GCalc.MathConstantComplexIface

    static name: string
}

export interface MathConstantNumberIface {

    // Own fields of GCalc-2.GCalc.MathConstantNumberIface

    value: (self: MathConstantNumber) => number
}

export abstract class MathConstantNumberIface {

    // Own properties of GCalc-2.GCalc.MathConstantNumberIface

    static name: string
}

export interface MathDivisionIface {
}

export abstract class MathDivisionIface {

    // Own properties of GCalc-2.GCalc.MathDivisionIface

    static name: string
}

export interface MathEquationIface {

    // Own fields of GCalc-2.GCalc.MathEquationIface

    getVariables: (self: MathEquation) => ExpressionHashMap
}

export abstract class MathEquationIface {

    // Own properties of GCalc-2.GCalc.MathEquationIface

    static name: string
}

export interface MathEquationManagerIface {

    // Own fields of GCalc-2.GCalc.MathEquationManagerIface

    findVariable: (self: MathEquationManager, name: string) => MathVariable
    getEquations: (self: MathEquationManager) => ExpressionContainer
    getFunctions: (self: MathEquationManager) => ExpressionContainer
}

export abstract class MathEquationManagerIface {

    // Own properties of GCalc-2.GCalc.MathEquationManagerIface

    static name: string
}

export interface MathErrorResultIface {

    // Own fields of GCalc-2.GCalc.MathErrorResultIface

    getMessage: (self: MathErrorResult) => string
}

export abstract class MathErrorResultIface {

    // Own properties of GCalc-2.GCalc.MathErrorResultIface

    static name: string
}

export interface MathExpressionIface {

    // Own fields of GCalc-2.GCalc.MathExpressionIface

    toString: (self: MathExpression) => string
    solve: (self: MathExpression) => MathResult
    getParent: (self: MathExpression) => MathExpression
    setParent: (self: MathExpression, value: MathExpression) => void
    getExpressions: (self: MathExpression) => ExpressionContainer
}

export abstract class MathExpressionIface {

    // Own properties of GCalc-2.GCalc.MathExpressionIface

    static name: string
}

export interface MathFunctionIface {

    // Own fields of GCalc-2.GCalc.MathFunctionIface

    evaluate: (self: MathFunction) => MathExpression
    verifyParams: (self: MathFunction) => boolean
    getParamTypes: (self: MathFunction) => ExpressionContainer
    getName: (self: MathFunction) => string
    setName: (self: MathFunction, value: string) => void
    getNParams: (self: MathFunction) => number
    setNParams: (self: MathFunction, value: number) => void
    getClosed: (self: MathFunction) => boolean
    setClosed: (self: MathFunction, value: boolean) => void
}

export abstract class MathFunctionIface {

    // Own properties of GCalc-2.GCalc.MathFunctionIface

    static name: string
}

export interface MathGroupIface {

    // Own fields of GCalc-2.GCalc.MathGroupIface

    evaluate: (self: MathGroup) => MathExpression
    getLevel: (self: MathGroup) => MathGroupLevel
    setLevel: (self: MathGroup, value: MathGroupLevel) => void
    getClosed: (self: MathGroup) => boolean
    setClosed: (self: MathGroup, value: boolean) => void
}

export abstract class MathGroupIface {

    // Own properties of GCalc-2.GCalc.MathGroupIface

    static name: string
}

export interface MathMinusIface {
}

export abstract class MathMinusIface {

    // Own properties of GCalc-2.GCalc.MathMinusIface

    static name: string
}

export interface MathMultiplyIface {
}

export abstract class MathMultiplyIface {

    // Own properties of GCalc-2.GCalc.MathMultiplyIface

    static name: string
}

export interface MathOperatorIface {
}

export abstract class MathOperatorIface {

    // Own properties of GCalc-2.GCalc.MathOperatorIface

    static name: string
}

export interface MathParameterIface {

    // Own fields of GCalc-2.GCalc.MathParameterIface

    setValue: (self: MathParameter, val?: any | null) => void
    getValue: (self: MathParameter) => any | null
}

export abstract class MathParameterIface {

    // Own properties of GCalc-2.GCalc.MathParameterIface

    static name: string
}

export interface MathPlusIface {
}

export abstract class MathPlusIface {

    // Own properties of GCalc-2.GCalc.MathPlusIface

    static name: string
}

export interface MathPolynomialIface {

    // Own fields of GCalc-2.GCalc.MathPolynomialIface

    evaluate: (self: MathPolynomial) => MathExpression
}

export abstract class MathPolynomialIface {

    // Own properties of GCalc-2.GCalc.MathPolynomialIface

    static name: string
}

export interface MathPowIface {
}

export abstract class MathPowIface {

    // Own properties of GCalc-2.GCalc.MathPowIface

    static name: string
}

export interface MathResultIface {

    // Own fields of GCalc-2.GCalc.MathResultIface

    toString: (self: MathResult) => string
    getExpression: (self: MathResult) => MathExpression
}

export abstract class MathResultIface {

    // Own properties of GCalc-2.GCalc.MathResultIface

    static name: string
}

export interface MathTermIface {

    // Own fields of GCalc-2.GCalc.MathTermIface

    add: (self: MathTerm, t: MathTerm) => MathExpression
    evaluate: (self: MathTerm) => MathExpression
}

export abstract class MathTermIface {

    // Own properties of GCalc-2.GCalc.MathTermIface

    static name: string
}

export interface MathVariableIface {

    // Own fields of GCalc-2.GCalc.MathVariableIface

    evaluate: (self: MathVariable) => MathExpression
    getName: (self: MathVariable) => string
    setName: (self: MathVariable, value: string) => void
    getValue: (self: MathVariable) => MathConstant
    setValue: (self: MathVariable, value: MathConstant) => void
    getBind: (self: MathVariable) => MathVariable
    setBind: (self: MathVariable, value: MathVariable) => void
    getBinded: (self: MathVariable) => boolean
}

export abstract class MathVariableIface {

    // Own properties of GCalc-2.GCalc.MathVariableIface

    static name: string
}
