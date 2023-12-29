<script lang="ts">
    import { cardsClicked, cardsToCompare, type CardPicture } from "./cards";

	export let card: CardPicture;

	const flipCard = () => {
		card.show = true;
        $cardsClicked++;
		$cardsToCompare.push(card);
	};
</script>

<div class="card relative bg-gray-500" style="order: {card.location};">
	{card.id}
	<button class="w-full h-full" on:click={flipCard}> </button>
	{#if card.show}
		<img class="absolute top-0 left-0" src={card.img} alt="Memory Card" />
	{/if}
</div>

<style>
	.card {
		margin: 10px;
		width: 166px;
		height: 247px;
	}
</style>
