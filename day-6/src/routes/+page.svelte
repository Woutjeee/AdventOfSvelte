<script lang="ts">
	import { getMorseValue, morseDictionary } from "$lib/morse_utils";
	import Table from "$lib/table.svelte";
	import { MorseValues, type MorseTableRow } from "$lib/types";

	let input: string;
	let morseValue: string = '';
</script>

<div class="m-2">
	<label for="text"></label>
	<input bind:value={input} type="text" name="text" placeholder="Input.." class="p-2 border w-96" />
	<button on:click={() => getMorseValue(morseValue, input)} class="border p-2">Convert</button>
</div>

<Table data={$MorseValues} />