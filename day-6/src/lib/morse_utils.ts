import { get } from "svelte/store";
import { MorseValues, type MorseTableRow } from "./types";

type MorseType = {
    value: string
};

type Morse = {
    [key: string]: MorseType
}

export const morseDictionary: Morse = {
    A: { value: ".-" },
    B: { value: "-..." },
    C: { value: "-.-." },
    D: { value: "-.." },
    E: { value: "." },
    F: { value: "..-." },
    G: { value: "--." },
    H: { value: "...." },
    I: { value: ".." },
    J: { value: ".---" },
    K: { value: "-.-" },
    L: { value: ".-.." },
    M: { value: "--" },
    N: { value: "-." },
    O: { value: "---" },
    P: { value: ".--." },
    Q: { value: "--.-" },
    R: { value: ".-." },
    S: { value: "..." },
    T: { value: "-" },
    U: { value: "..-" },
    V: { value: "...-" },
    W: { value: ".--" },
    X: { value: "-..-" },
    Y: { value: "-.--" },
    Z: { value: "--.." },
    a: { value: ".-" },
    b: { value: "-..." },
    c: { value: "-.-." },
    d: { value: "-.." },
    e: { value: "." },
    f: { value: "..-." },
    g: { value: "--." },
    h: { value: "...." },
    i: { value: ".." },
    j: { value: ".---" },
    k: { value: "-.-" },
    l: { value: ".-.." },
    m: { value: "--" },
    n: { value: "-." },
    o: { value: "---" },
    p: { value: ".--." },
    q: { value: "--.-" },
    r: { value: ".-." },
    s: { value: "..." },
    t: { value: "-" },
    u: { value: "..-" },
    v: { value: "...-" },
    w: { value: ".--" },
    x: { value: "-..-" },
    y: { value: "-.--" },
    z: { value: "--.." },
    " ": { value: " / " },
    "1": { value: ".----" },
    "2": { value: "..---" },
    "3": { value: "...--" },
    "4": { value: "....-" },
    "5": { value: "....." },
    "6": { value: "-...." },
    "7": { value: "--..." },
    "8": { value: "---.." },
    "9": { value: "----." },
    "0": { value: "-----" },
    ".": { value: ".-.-.-" },
    ",": { value: "--..--" },
    "?": { value: "..--.." },
    "'": { value: ".----." },
    "!": { value: "-.-.--" },
    "/": { value: "-..-." },
    "(": { value: "-.--." },
    ")": { value: "-.--.-" },
    "&": { value: ".-..." },
    ":": { value: "---..." },
    ";": { value: "-.-.-." },
    "=": { value: "-...-" },
    "+": { value: ".-.-." },
    "-": { value: "-....-" },
    "_": { value: "..--.-" },
    '"': { value: ".-..-." },
    "$": { value: "...-..-" },
    "@": { value: ".--.-." },
};


export const getMorseValue = (morseValue: string, input: string) => {
    morseValue = '';

    input.split('').forEach((char) => {
        if (morseDictionary[char].value) {
            morseValue += morseDictionary[char].value + ' ';
        } else if (char === ' ') {
            morseValue += ' ';
        }
    });

    let newTableRow: MorseTableRow = {
        textValue: input,
        morseValue: morseValue,
    };

    let oldValues = get(MorseValues);

    oldValues.push(newTableRow);

    MorseValues.set(oldValues);
};

export const playMorseCode = async (morseValue: string) => {
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