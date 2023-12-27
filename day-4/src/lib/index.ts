import { writable } from 'svelte/store';

export const heartRate = writable<number>(0);

type heartBeat = { heartRate: number };

export const getHeartBeat = async () => {
	const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json');
	const data: heartBeat = await res.json();

	heartRate.set(data.heartRate);
};
