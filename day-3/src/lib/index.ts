import { get, writable } from "svelte/store";

type Sleigh = {
    capacity: number,
    totalLoad: number,
    items: Present[]
};

export type Present = {
    name: string,
    weight: number,
    inSleig: boolean
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
    let curNotInSleigh = get(allNotInSleigh);
    let curInSleigh = get(allInSleigh);

    let newLoad = currentSleigh.totalLoad += load.weight;
    if(newLoad < currentSleigh.capacity) {
        load.inSleig = true;

        console.log('test');
        // remove from list.
        curNotInSleigh = curNotInSleigh.filter(x => x !== load);
        allNotInSleigh.set(curNotInSleigh);

        // Add to in sleigh list.
        curInSleigh.push(load);
        allInSleigh.set(curInSleigh);
        console.log(curInSleigh);
    }
};
