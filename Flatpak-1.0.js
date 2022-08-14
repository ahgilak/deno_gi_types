/// <reference types="./Flatpak-1.0.d.ts" />
import { require as giRequire } from 'https://deno.land/x/deno_gi/mod.ts';
const Flatpak = giRequire('Flatpak', '1.0');
export default Flatpak;
