/// <reference types="./PolkitAgent-1.0.d.ts" />
import { require as giRequire } from 'https://deno.land/x/deno_gi/mod.ts';
const PolkitAgent = giRequire('PolkitAgent', '1.0');
export default PolkitAgent;
