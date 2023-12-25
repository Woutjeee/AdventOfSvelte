<script lang="ts">
	import { allNotInSleigh, allInSleigh, sleigh ,type Present } from '$lib';
	import NameCard from '$lib/name-card.svelte';
	export let data;

	allNotInSleigh.set(data.data);
</script>

<h1>Current weight is {Math.round(($sleigh.totalLoad + Number.EPSILON) * 100) / 100}
</h1>

<div class="flex">
	<div class="w-1/2">
		{#each $allNotInSleigh as item}
			<NameCard present={item} />
		{/each}
	</div>
	<div class="w-1/2 border border-blue">
		{#each $allInSleigh as item}
			<NameCard present={item} />
		{/each}
	</div>
</div>

