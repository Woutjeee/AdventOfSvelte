<script lang="ts">
	import { allTasks, type Task } from '$lib';
	import TableRow from './table-row.svelte';

	export let data: Task[] = [];

	let value: string;
	let searchValue: string;

	const sort = () => {
		data =
			value === 'Descending'
				? data.sort((a, b) => a.minutesTaken - b.minutesTaken)
				: data.sort((a, b) => b.minutesTaken - a.minutesTaken);
	};

	const search = () => {
		data = data.filter((x) => x.elf.toLowerCase().includes(searchValue.toLowerCase()));

		if(searchValue === '') {
			data = $allTasks;
		}
	};
</script>

<div class="px-4 sm:px-6 lg:px-8 border p-2 m-2 rounded-xl shadow-lg">
	<div class="sm:flex sm:items-center justify-between">
		<div class="">
			<h1 class="text-base font-semibold leading-6 text-gray-900">Tasks</h1>
			<p class="mt-2 text-sm text-gray-700">A list of all completed tasks.</p>
		</div>
		<div>
			<input
				bind:value={searchValue}
				on:input={search}
				class="border rounded-lg text-black w-96 p-2 shadow-lg"
				type="text"
				placeholder="Search.."
			/>
		</div>
		<div>
			<div>
				<label for="dropdown">As / Descending</label>
				<select bind:value on:change={sort} class="border p-2 rounded-lg" name="dropdown">
					<option value="none" selected>None</option>
					<option value="Descending">Descending</option>
					<option value="Ascending">Ascending</option>
				</select>
			</div>
		</div>
	</div>
	<div class="mt-8 flow-root max-h-96 overflow-y-auto">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<table class="min-w-full divide-y divide-gray-300">
					<thead>
						<tr>
							<th
								scope="col"
								class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
								>Elf</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Task</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Minutes Taken</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Date</th
							>
							<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-gray-200">
						{#each data as task}
							<TableRow
								name={task.elf}
								task={task.task}
								minutesTaken={task.minutesTaken}
								date={task.date}
							/>
						{/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
