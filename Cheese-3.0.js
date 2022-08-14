/// <reference types="./Cheese-3.0.d.ts" />
import { require as giRequire } from 'https://deno.land/x/deno_gi/mod.ts';
const Cheese = giRequire('Cheese', '3.0');
export default Cheese;
