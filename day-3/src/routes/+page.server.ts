type Kid = {
    name: string,
    weight: number
};

export const load = (async () => {
    const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-three.json');
    const kids: Kid[] = await response.json();

    return { kids };
});