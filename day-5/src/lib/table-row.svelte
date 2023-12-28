<script lang="ts">
    export let name: string;
    export let task: string;
    export let minutesTaken: number;
    export let date: string;

    let parsedDate: Date = new Date(date);
    let renamedTask: string = task === 'CREATED_TOY' ? 'Created Toy' : 'Wrapped Present';

</script>

<tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
        >{name}</td
    >
    <td class="whitespace-nowrap px-3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
    >{renamedTask}</td
>
<td class="whitespace-nowrap px-3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
>{minutesTaken} minutes</td
>
<td class="whitespace-nowrap px-3 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
>{parsedDate.toDateString()}</td
>
</tr>