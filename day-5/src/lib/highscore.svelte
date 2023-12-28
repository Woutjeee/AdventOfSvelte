<script lang="ts">
	import type { Task } from "$lib";

    export let task: Task;

    let parsedDate: Date = new Date(task.date);
</script>

<div class="border p-2 m-2 rounded-xl shadow-lg w-56">
    <div class="border-b-2 p-2">
        <p>Best {task.task === 'CREATED_TOY' ? 'Toy Creator' : 'Toy Wrapper'}</p>
    </div>
    <div class="mt-2 p-2 flex flex-row justify-between">
        <p>{task.elf}</p>
        <p>|</p>
        <p>{task.minutesTaken} minutes</p>
    </div>
    <div class="flex flex-row justify-between p-2">
        <p>On:</p>
        <p>{parsedDate.toDateString()}</p>
    </div>
</div>