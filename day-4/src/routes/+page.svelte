<script lang="ts">
	import { onMount } from 'svelte';
	import Chart from '$lib/chart.svelte';

	type Heartrate = {
		heartRate: number;
	};

	$: hRate = 0;

	onMount(() => {
		const fetchHeartRate = async () => {
			try {
				const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json');
				const data = await res.json();

				hRate = data;
			} catch (error) {
				console.error('Error fetching data:', error);
			}
		};

		const interval = setInterval(fetchHeartRate, 1000);
		fetchHeartRate(); // Remove await here, as we're not waiting for the interval to clear on first fetch

		// Cleanup function
		return () => clearInterval(interval);
	});
</script>

<Chart />