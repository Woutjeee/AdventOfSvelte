<script lang="ts">
	import { addLoad, loadExceeded, removeLoad, type Present } from '$lib';

	export let present: Present;
</script>

<div class="m-2 flex flex-row justify-between p-3 border items-center">
	<div>
		<h1>{present.name}</h1>
	</div>
	<div>
		<p>{present.weight}</p>
	</div>
	<div class="flex flex-row w-1/3 justify-between">
		{#if present.inSleig}
			<p class="py-1">In sleigh</p>
			<button on:click={() => removeLoad(present)} class="border py-1 px-2 border-red-300">Remove</button>
		{:else if $loadExceeded}
			<p>To much gifts</p>
		{:else}
			<button on:click={() => addLoad(present)}> Add Load </button>
		{/if}
	</div>
</div>
