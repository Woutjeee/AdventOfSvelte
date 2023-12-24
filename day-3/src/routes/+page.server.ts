import type { Present } from "$lib";

export const load = async () => {
    const res = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');
    const data: Present[] = await res.json();

    return { data };
};
