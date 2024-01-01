import { writable } from "svelte/store"

export const MorseValues = writable<MorseTableRow[]>([]);

export type MorseTableRow = {
    textValue: string,
    morseValue: string
}