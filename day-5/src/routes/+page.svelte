<script lang="ts">
	import Chart from '$lib/Charts/chart.svelte';
	import type { ApexOptions } from 'apexcharts';
	import {
		getData,
		wrappedPresentTaskGraphData,
		createdToysTaskGraphData,
		allTasks,
		bestToyCreator,

		bestToyWrapper

	} from '$lib';
	import { onMount } from 'svelte';
	import Table from '$lib/table.svelte';
	import Highscore from '$lib/highscore.svelte';

	let loading: boolean = true;
	let chartOptions: ApexOptions;
	let createdToysOptions: ApexOptions;

	onMount(async () => {
		await getData();
		chartOptions = {
			series: [
				{
					name: 'presents',
					data: $wrappedPresentTaskGraphData.map((x) => ({
						x: x.minutesTaken, // x-axis value is the minutesTaken
						y: x.count, // y-axis value is the count
						label: {
							show: true,
							text: x.count.toString() // Display count as data label
						}
					}))
				}
			],
			chart: {
				type: 'bar', // Change the chart type to 'bar'
				toolbar: {
					autoSelected: 'pan',
					show: false
				},
				zoom: {
					enabled: false
				},
				height: 300
			},
			dataLabels: {
				enabled: true,
				formatter: function (val: string | number | number[], opts: any) {
					if (Array.isArray(val)) {
						// Handle the case where val is an array (e.g., when xaxis type is 'numeric')
						return val.toString();
					} else if (typeof val === 'object' && 'y' in val) {
						// Handle the case where val is an object with y property
						return (val as { x: number; y: number }).y.toString();
					}
					// Handle other cases (e.g., string)
					return val.toString();
				}
			},
			plotOptions: {
				bar: {
					horizontal: false // Set to true for horizontal bar chart
				}
			},
			stroke: {
				width: 3
			},
			title: {
				text: 'Wrapped gifts',
				align: 'left'
			},
			markers: {
				size: 0
			},
			xaxis: {
				type: 'numeric',
				title: {
					text: 'Minutes taken'
				},
				labels: {
					formatter: function (val) {
						return val.toString(); // Format y-axis labels
					}
				}
			},
			yaxis: {
				title: {
					text: 'Total count'
				},
				labels: {
					formatter: function (val) {
						return val.toString(); // Format x-axis labels
					}
				}
			},
			legend: {
				show: true
			}
		};

		createdToysOptions = {
			series: [
				{
					name: 'presents',
					data: $createdToysTaskGraphData.map((x) => ({
						x: x.minutesTaken, // x-axis value is the minutesTaken
						y: x.count // y-axis value is the coun
					}))
				}
			],
			chart: {
				type: 'bar', // Change the chart type to 'bar'
				toolbar: {
					autoSelected: 'pan',
					show: false
				},
				zoom: {
					enabled: false
				},
				width: 800,
				height: 300
			},
			title: {
				text: 'Created gifts',
				align: 'left'
			},
			markers: {
				size: 0
			},
			xaxis: {
				type: 'numeric',
				title: {
					text: 'Minutes taken'
				},
				labels: {
					formatter: function (val) {
						return `${val.toString()} minutes`; // Format y-axis labels
					}
				}
			},
			yaxis: {
				title: {
					text: 'Total count'
				},
				labels: {
					formatter: function (val) {
						return val.toString(); // Format x-axis labels
					}
				}
			},
			legend: {
				show: true
			},
			dataLabels: {
				enabled: false
			}
		};

		loading = false;
	});
</script>

<div class="m-5">
	{#if !loading}
		<div class="flex flex-row justify-between">
			<Chart options={chartOptions} />
			<Chart width="850" height="300" options={createdToysOptions} />
			<div class="flex flex-col">
				<Highscore task={$bestToyCreator} />
				<Highscore task={$bestToyWrapper} />
			</div>
		</div>
		<Table data={$allTasks} />
	{/if}
</div>
