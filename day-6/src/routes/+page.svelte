<script lang="ts">
	import { morseDictionary } from "$lib/morse_utils";

	let input: string;
	let morseValue: string = '';

	const getMorseValue = () => {
		morseValue = '';

		input.split('').forEach((char) => {
			if (morseDictionary[char].value) {
				morseValue += morseDictionary[char].value + ' ';
			} else if (char === ' ') {
				morseValue += ' ';
			}
		});
	};

    const playMorseCode = async () => {
        const audioContext = new AudioContext();
        let time = audioContext.currentTime;
        const dotDuration = 0.1;
        const dashDuration = 0.4;
        const spaceDuration = 0.2;

        const playChar = async (symbol: string) => {
            if (symbol === '.') {
                await playBeep(audioContext, time, dotDuration);
                // Add a short pause between dots
                time += 0.1;
            } else if (symbol === '-') {
                await playBeep(audioContext, time, dashDuration);
                time += 0.3;
            }
            time += spaceDuration;
        };

        for (const symbol of morseValue) {
            await playChar(symbol);
            time += dotDuration;
        }
    };

	const playBeep = async (audioContext: AudioContext, startTime: number, duration: number) => {
		const oscillator = audioContext.createOscillator();
		oscillator.type = 'sine';

		const gainNode = audioContext.createGain();
		gainNode.gain.value = 0.1;

		oscillator.connect(gainNode);
		gainNode.connect(audioContext.destination);

		oscillator.start(startTime);
		oscillator.stop(startTime + duration);
	};
</script>

<div class="m-2">
	<label for="text"></label>
	<input bind:value={input} type="text" name="text" placeholder="Input.." class="p-2 border w-96" />
	<button on:click={getMorseValue} class="border p-2">Convert</button>
</div>

<div>
	<p>The morse value is: {morseValue}</p>
</div>

<div>
	<button class="bg-orange-400 p-2 shadow-lg border rounded-lg" on:click={() => playMorseCode()}
		>Beep</button
	>
</div>
