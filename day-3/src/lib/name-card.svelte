<script lang="ts">
	import { addLoad, allInSleigh, allNotInSleigh, type Present } from "$lib";

	export let present: Present;
	export let allChildren: Present[];

	const add = () => {
		allNotInSleigh.set(allChildren.filter(x => x !== present));
		allInSleigh.set(allChildren.filter(x => x === present));
		
	};
</script>

<div class="m-2 flex flex-row justify-between p-3 border">
	<div>
		<h1>{present.name}</h1>
	</div>
	<div>
		<p>{present.weight}</p>
	</div>
	<div>
		<button on:click={add}>
			Add Load
		</button>
	</div>
</div>
