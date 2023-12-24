import { get, writable } from "svelte/store";

type Sleigh = {
    capacity: number,
    totalLoad: number,
    items: Present[]
};

export type Present = {
    name: string,
    weight: number
};

export const allNotInSleigh = writable<Present[]>([]);
export const allInSleigh = writable<Present[]>([]);

export const sleigh = writable<Sleigh>({
    capacity: 100,
    totalLoad: 0,
    items: [] 
});

export const loadExceeded = writable<boolean>(false);

export const addLoad = (load: Present) => {
    let currentSleigh = get(sleigh);
    if (currentSleigh.totalLoad < currentSleigh.capacity) {
        let newLoad = currentSleigh.totalLoad += load.weight;
        currentSleigh.totalLoad = newLoad;
        currentSleigh.items.push(load);
    } else {
        loadExceeded.set(true);
    }
};
