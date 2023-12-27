<script lang="ts">
	import { getHeartBeat, heartRate } from '$lib';
	import { onDestroy } from 'svelte';

	const interval = setInterval(getHeartBeat, 1000);
	onDestroy(() => clearInterval(interval));
</script>

<h1>Heart rate: {$heartRate}</h1>