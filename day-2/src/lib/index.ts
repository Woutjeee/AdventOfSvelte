import { get, writable } from 'svelte/store';

export const cookieMeter = writable<number>(0);
export const cookieCounter = writable(0);

export const addCookie = () => {
    cookieCounter.update(() => get(cookieCounter) + 1);
    cookieMeter.update(() => get(cookieMeter) + 1 / 100);
};
