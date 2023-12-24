<script lang="ts">
	import { allNotInSleigh, allInSleigh ,type Present } from '$lib';
	import NameCard from '$lib/name-card.svelte';
	export let data;

	allNotInSleigh.set(data.data);
</script>

<div class="flex">
	<div class="w-1/2">
		{#each $allNotInSleigh as item}
			<NameCard present={item} allChildren={$allNotInSleigh} />
		{/each}
	</div>
	<div class="w-1/2 border border-blue">
		{#each $allInSleigh as item}
			<NameCard present={item} allChildren={$allInSleigh} />
		{/each}
	</div>
</div>

