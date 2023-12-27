import { writable } from "svelte/store";

export const wrappedPresentTasks = writable<Task[]>([]);
export const createdToyTasks = writable<Task[]>([]);

export const wrappedPresentTaskGraphData = writable<TaskCount[]>([]);
export const createdToysTaskGraphData = writable<TaskCount[]>([]);

type TaskType = 'CREATED_TOY' | 'WRAPPED_PRESENT';

interface Task {
    elf: string,
    task: TaskType,
    minutesTaken: number,
    date: string;
}

interface TaskCount {
    task: TaskType,
    minutesTaken: number,
    count: number;
}

export const getData = async () => {
    const response = await fetch('https://advent.sveltesociety.dev/data/2023/day-five.json');
    const data: Task[] = await response.json();

    let wrappedPresentTask = data.filter(x => x.task === 'WRAPPED_PRESENT');
    let createdToysTask = data.filter(x => x.task === 'CREATED_TOY');
    
    let x = await sortData(wrappedPresentTask);
    let y = await sortData(createdToysTask);

    wrappedPresentTaskGraphData.set(x);
    createdToysTaskGraphData.set(y);
    console.log('loaded');
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

    console.log(temp);
    return temp;
};
