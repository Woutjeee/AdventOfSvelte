<script lang="ts">
	import type { MorseTableRow } from "./types";
    import TableRow from "./table_row.svelte";

    export let data: MorseTableRow[];
</script>

<div class="px-4 sm:px-6 lg:px-8">
	<div class="sm:flex sm:items-center">
		<div class="sm:flex-auto">
			<h1 class="text-base font-semibold leading-6 text-gray-900">Morse Codes</h1>
			<p class="mt-2 text-sm text-gray-700">
				A list of all converted morse code values.
			</p>
		</div>
	</div>
	<div class="mt-8 flow-root">
		<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
			<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
				<table class="min-w-full divide-y divide-gray-300">
					<thead>
						<tr>
							<th
								scope="col"
								class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
								>Text value</th
							>
							<th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
								>Morse Value</th
							>
							<th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
								<span class="sr-only">Edit</span>
							</th>
						</tr>
					</thead>
					<tbody class="bg-white">
                        {#each data as tableRow}
                            <TableRow data={tableRow} />
                        {/each}
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
