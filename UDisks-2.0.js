/// <reference types="./UDisks-2.0.d.ts" />
import { require as giRequire } from 'https://deno.land/x/deno_gi/mod.ts';
const UDisks = giRequire('UDisks', '2.0');
export default UDisks;
