import { writable } from "svelte/store";

export type CardPicture = {
    img: string,
    id: number
    location: number,
    show: boolean
}

export const cardPictures = writable<CardPicture[]>([]);
export const cardsClicked = writable<number>(0);
export const cardsToCompare = writable<CardPicture[]>([]);

export const getPictures = async () => {
    let temp: CardPicture[] = [];
    for (let i = 1; i < 25; i++) {
        const res = await fetch(`https://advent.sveltesociety.dev/data/2023/day-eight/${i}.png`);
        let newCardPicture: CardPicture = {
            img: res.url,
            id: i,
            location: 0,
            show: false
        };

        // Add twice, since we need pairs.
        temp.push({ ...newCardPicture }); // Using the spread operator to create a new object
        temp.push(Object.assign({}, newCardPicture)); // Using Object.assign to create a new object
    }

    shuffleCards(temp);
    cardPictures.set(temp);
    console.log(temp);
};

const shuffleCards = (cards: CardPicture[]) => {
    const deckLength: number = cards.length;
    for (let i = 0; i < deckLength; i++) {
        cards[i].location = getRandom(1, deckLength);
    }
};

const getRandom = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min) + min);
};
