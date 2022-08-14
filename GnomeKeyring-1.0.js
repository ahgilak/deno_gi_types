/// <reference types="./GnomeKeyring-1.0.d.ts" />
import { require as giRequire } from 'https://deno.land/x/deno_gi/mod.ts';
const GnomeKeyring = giRequire('GnomeKeyring', '1.0');
export default GnomeKeyring;
