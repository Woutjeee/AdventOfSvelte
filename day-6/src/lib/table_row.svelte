<script lang="ts">
	import { playMorseCode } from "./morse_utils";
	import type { MorseTableRow } from "./types";

    export let data: MorseTableRow;
</script>

<tr class="even:bg-gray-50">
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
        >{data.textValue}</td
    >
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3"
        >{data.morseValue}</td
    >
    <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
        <a on:click={() => playMorseCode(data.morseValue)} href="#" class="text-indigo-600 hover:text-indigo-900">Play</a>
      </td>
</tr>