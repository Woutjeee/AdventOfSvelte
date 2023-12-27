<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	// @ts-ignore
	export let options: any;

	export let width: string = '400';
	export let height: string = '300';

	export let liveChart = false;

	export let additionalStyle: string = '';

	// @ts-ignore
	let ApexCharts: any;
	let loaded = false;

	// @ts-ignore
	let myChart;

	export let data: number[] = [];

	// @ts-ignore
	const chart = (node: HTMLElement, options: any) => {
		if (!loaded) return;

		myChart = new ApexCharts(node, options);
		myChart.render();

		return {
			// @ts-ignore
			update(options: any) {
				// @ts-ignore
				myChart.updateOptions(options);
			},
			destroy() {
				// @ts-ignore
				myChart.destroy();
			}
		};
	};

	onMount(async () => {
		const module = await import('apexcharts');
		ApexCharts = module.default;
		// @ts-ignore
		window.ApexCharts = ApexCharts;
		loaded = true;
	});

	if (browser && liveChart) {
		window.setInterval(() => {
			// @ts-ignore
			myChart.updateSeries([
				{
					data: data
				}
			]);
		}, 1000);
	}
</script>

{#if loaded}
	<div 
    style={`width: ${width}px; height: ${height}px; ${additionalStyle}`} 
    class="border p-2 m-2 rounded-xl shadow-lg" 
    use:chart={options}></div>
{/if}
