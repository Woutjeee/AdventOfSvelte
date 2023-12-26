<script lang="ts">
	import { allNotInSleigh, allInSleigh, sleigh } from '$lib';
	import NameCard from '$lib/name-card.svelte';
	export let data;

	allNotInSleigh.set(data.data);

	console.log(data.data);
</script>

<div>
	<h1>Current weight is {Math.round(($sleigh.totalLoad + Number.EPSILON) * 100) / 100} / {$sleigh.capacity}</h1>
	<progress max="100" value={Math.round(($sleigh.totalLoad + Number.EPSILON) * 100) / 100} />
</div>

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
