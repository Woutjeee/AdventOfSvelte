<script lang="ts">
	import { addLoad, allInSleigh, allNotInSleigh, type Present } from '$lib';

	export let present: Present;
	export let allChildren: Present[];
</script>

<div class="m-2 flex flex-row justify-between p-3 border">
	<div>
		<h1>{present.name}</h1>
	</div>
	<div>
		<p>{present.weight}</p>
	</div>
	<div>
		{#if !present.inSleig}
			<button on:click={() => addLoad(present)}> Add Load </button>
		{/if}
	</div>
</div>
