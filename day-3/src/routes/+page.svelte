<script lang="ts">
  import NameCard from "$lib/+name-card.svelte";

  export let data;
</script>

<div class="flex flex-wrap">
  <div class="">
    {#each data.kids as kid}
      <NameCard name={kid.name} weight={kid.weight} />
    {/each}
  </div>
  <div>
    <h1>Hello World!</h1>
  </div>
</div>
