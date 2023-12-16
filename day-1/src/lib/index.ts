import { browser } from "$app/environment";
import { get, writable } from "svelte/store";

export const listChildren = writable<Child[]>([]);
export const niceList = writable<Child[]>([]);
export const badList = writable<Child[]>([]);

type Child = {
    name: string;
    tally: number;
};

export const getChildren = async () => {
    console.log('in funciton');
    if (browser) {
        const localStorageString: string | null = localStorage.getItem('names');
        if (localStorageString === null || undefined) {
            // Fetch data.
            const respone = await fetch('https://advent.sveltesociety.dev/data/2023/day-one.json');

            // Get response as json, and set in in local storage if none.
            const data = await respone.json();
            localStorage.setItem('names', JSON.stringify(data));
            listChildren.set(data);
        } else {
            let typedList: Child[] = JSON.parse(localStorageString);
            niceList.set(typedList.filter(item => item.tally > 0));
            badList.set(typedList.filter(item => item.tally < 0));
            listChildren.set(typedList);
        }
    }
};

export const addNew = (name: string, tally: number) => {
    let newChild: Child = {
        name: name,
        tally: tally,
    };

    if (tally > 0) {
        let curr: Child[] = get(niceList);
        curr.push(newChild);
        niceList.set(curr);
    } else {
        let curr: Child[] = get(badList);
        curr.push(newChild);
        badList.set(curr);
    }
};

