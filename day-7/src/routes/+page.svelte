<script lang="ts">
	import Card from '$lib/card.svelte';
	import { getPictures, cardPictures, cardsClicked, cardsToCompare } from '$lib/cards';



	getPictures();
	$: {
		if($cardsClicked === 2) {
			let cards = $cardsToCompare;
			console.log('tes');
			if(cards[0].id === cards[1].id) {
				console.log('match');
				$cardsToCompare = [];

				// Increase score.
			} else {
				cards[0].show = false;
				cards[1].show = false;
				$cardsToCompare = [];
			}

			$cardsClicked = 0;
		}
	}
</script>

<div class="flex flex-row flex-wrap">
	{#each $cardPictures as card}
		<Card card={card} />
	{/each}
</div>
