import { writable } from "svelte/store";

export const allTasks = writable<Task[]>([]);

export const bestToyCreator = writable<Task>();
export const bestToyWrapper = writable<Task>();

export const wrappedPresentTasks = writable<Task[]>([]);
export const createdToyTasks = writable<Task[]>([]);

export const wrappedPresentTaskGraphData = writable<TaskCount[]>([]);
export const createdToysTaskGraphData = writable<TaskCount[]>([]);

type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT';

export interface Task {
    elf: string,
    task: TaskType,
    minutesTaken: number,
    date: string;
}

export interface TaskCount {
    task: TaskType,
    minutesTaken: number,
    count: number;
}

export const getData = async () => {
    const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-five.json');
    const data: Task[] = await response.json();

    allTasks.set(data);

    let wrappedPresentTask = data.filter(x => x.task === 'WRAPPED_PRESENT');
    let createdToysTask = data.filter(x => x.task === 'CREATED_TOY');
    
    let x = await sortData(wrappedPresentTask);
    let y = await sortData(createdToysTask);

    wrappedPresentTaskGraphData.set(x);
    createdToysTaskGraphData.set(y);
    
    await sortData(data);

    await getHighscores(data);
};


const sortData = async (data: Task[]) => {
    let temp: TaskCount[] = [];

    data.forEach(arrTask =>  {
        let y = temp.find(x => x.minutesTaken === arrTask.minutesTaken);
        if(!y) {
            let tempC: TaskCount = {
                task: arrTask.task,
                count: 0,
                minutesTaken: arrTask.minutesTaken
            };
            temp.push(tempC);
        } else {
            y.count++;
        }
    });
    return temp;
};


const getHighscores = async (data: Task[]) => {
    var highscoreCreate = data.sort(x => x.minutesTaken).filter(x=> x.task === 'CREATED_TOY')[0];
    bestToyCreator.set(highscoreCreate);

    var highscoreWrapper = data.sort(x => x.minutesTaken).filter(x=> x.task === 'WRAPPED_PRESENT')[0];
    bestToyWrapper.set(highscoreWrapper);
};