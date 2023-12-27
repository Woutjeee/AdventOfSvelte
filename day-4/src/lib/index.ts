import { get, writable } from 'svelte/store';

export const heartRate = writable<number[]>([]);

type HeartBeat = { 
    heartRate: number
};

export const getHeartBeat = async () => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-four.json');
    const data: HeartBeat = await res.json();

    const curr = get(heartRate);

    curr.push(data.heartRate);

    // Set the heart rate as a single element array
    heartRate.set(curr);
};