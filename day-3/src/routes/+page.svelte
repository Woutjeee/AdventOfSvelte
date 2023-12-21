<script lang="ts">
  import NameCard from "$lib/+name-card.svelte";

  export let data;

  type MouseCoordinates = {
    x: number;
    y: number;
  };

  let mouseCoordinates: MouseCoordinates = {
    x: 0,
    y: 0,
  };

  const handleMouseMovement = (event: MouseEvent) => {
    mouseCoordinates.x = event.clientX;
    mouseCoordinates.y = event.clientY;

    document.documentElement.style.setProperty(
      "--x",
      mouseCoordinates.x.toString()
    );
    document.documentElement.style.setProperty(
      "--xp",
      (mouseCoordinates.x / innerWidth).toString()
    );
    document.documentElement.style.setProperty(
      "--y",
      mouseCoordinates.y.toString()
    );
    document.documentElement.style.setProperty(
      "--yp",
      (mouseCoordinates.y / innerHeight).toString()
    );
  };
</script>

<svelte:window on:mousemove={handleMouseMovement} />
<div class="w-1/2">

  <div class="flex flex-wrap bg-color" data-glow>
    {#each data.kids as kid}
    <NameCard name={kid.name} weight={kid.weight} />
    {/each}
  </div>
</div>

<style>
  .bg-color {
    background-color: #333333;
  }

  :root {
    --backdrop: hsl(0 0% 60% / 0.12);
    --radius: 14;
    --border: 3;
    --backup-border: var(--backdrop);
    --size: 200;
  }

  article:first-of-type {
    --base: 80;
    --spread: 500;
    --outer: 1;
  }
  article:last-of-type {
    --outer: 1;
    --base: 220;
    --spread: 200;
  }
</style>
