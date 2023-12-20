<script lang="ts">
	import { addCookie, cookieCounter, cookieMeter } from '$lib';
	import CookieImg1 from '$lib/assets/cookie-1.png';

	let santasMood: string = 'Sad';
	let btnDisabled: boolean;

	$: {
		switch (true) {
			case $cookieCounter > 100:
				santasMood = 'Im way too full...';
				btnDisabled = true;
				break;
			case $cookieCounter > 90:
				santasMood = 'Im amazing!!!';
				break;
			case $cookieCounter > 75:
				santasMood = 'Im happy';
				break;
			case $cookieCounter > 50:
				santasMood = 'Im okay...';
				break;
			case $cookieCounter > 25:
				santasMood = 'Im starting to feel better';
				break;
			case $cookieCounter > 10:
				santasMood = 'Less sad..';
				break;
			default:
				santasMood = 'Sad';
		}
	}
</script>

<h1 class="text-3xl">Cookie counter: {$cookieCounter}</h1>

<div class="mt-2 flex items-center">
	<button on:click={addCookie} class="w-40" disabled={btnDisabled}>
		<img src={CookieImg1} alt="cookie" />
	</button>
	<progress class="-rotate-90 h-6" value={$cookieMeter} />
</div>

<h1 class="text-3xl mt-5">Santa's mood: {santasMood}</h1>
