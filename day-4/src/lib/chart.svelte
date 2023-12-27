<script lang="ts">
	import { onMount } from 'svelte';
	import * as echarts from 'echarts';
	import { browser } from '$app/environment';
  
	let myChart;
  
	onMount(() => {
	  // Check if running in the browser
	  if (browser) {
		myChart = echarts.init(document.getElementById('main'));
  
		// Draw the chart
		myChart.setOption({
		  title: {
			text: 'ECharts Getting Started Example'
		  },
		  tooltip: {},
		  xAxis: {
			data: ['shirt', 'cardigan', 'chiffon', 'pants', 'heels', 'socks']
		  },
		  yAxis: {},
		  series: [
			{
			  name: 'sales',
			  type: 'bar',
			  data: [5, 20, 36, 10, 10, 20]
			}
		  ]
		});
	  }
	});
  </script>
  
  <canvas id="main"></canvas>
  