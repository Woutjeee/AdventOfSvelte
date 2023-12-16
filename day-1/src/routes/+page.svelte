<script lang="ts">
	import { getChildren, addNew } from '$lib';
	import { niceList, badList } from '$lib/index';

	getChildren();
	let newName: string;
	let score: number;
</script>

<div class="border border-black p-5 m-5 flex justify-around">
	<input class="p-2 border border-purple-300" type="text" bind:value={newName} placeholder="Name" />
	<input
		class="p-2 border border-purple-300"
		type="number"
		bind:value={score}
		placeholder="Score"
	/>
	<button on:click={() => addNew(newName, score)}>Submit</button>
</div>

<div class="flex justify-between p-5">
	<div class="flex flex-col p-2 border border-gray-200">
		<h1 class="text-3xl">Nice List</h1>
		{#each $niceList as child}
			<div class="border m-2 w-56 p-2 flex flex-row">
				{child.name}
				<span class="mx-2">|</span>
				{child.tally}
				<br />
			</div>
		{/each}
	</div>

	<div class="flex flex-col p-2 border border-gray-200">
		<h1 class="text-3xl">Bad List</h1>
		{#each $badList as child}
			<div class="border m-2 w-56 p-2 flex flex-row">
				{child.name}
				<span class="mx-2">|</span>
				{child.tally}
				<br />
			</div>
		{/each}
	</div>
</div>
