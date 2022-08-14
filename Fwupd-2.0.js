/// <reference types="./Fwupd-2.0.d.ts" />
import { require as giRequire } from 'https://deno.land/x/deno_gi/mod.ts';
const Fwupd = giRequire('Fwupd', '2.0');
export default Fwupd;
