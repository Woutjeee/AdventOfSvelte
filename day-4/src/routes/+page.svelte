<script lang="ts">
	import { getHeartBeat, heartRate } from '$lib';
	import { onDestroy } from 'svelte';
	import Chart from '$lib/chart.svelte';
	import type { ApexOptions } from 'apexcharts';

	let chartOptions: ApexOptions = {
		series: [
			{
				data: $heartRate.slice()
			}
		],
		chart: {
			type: 'line',
			animations: {
				enabled: true,
				easing: 'linear',
				dynamicAnimation: {
					speed: 1000
				}
			},
			toolbar: {
				show: false
			},
			zoom: {
				enabled: false
			}
		},
		dataLabels: {
			enabled: false
		},
		stroke: {
			curve: 'smooth'
		},
		title: {
			text: 'Dynamic Updating Chart',
			align: 'left'
		},
        markers: {
          size: 0
        },
	};

	const interval = setInterval(getHeartBeat, 1000);
	onDestroy(() => clearInterval(interval));
</script>

<Chart data={$heartRate} options={chartOptions} />
