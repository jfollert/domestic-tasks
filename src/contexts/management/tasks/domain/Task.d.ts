export declare class Task {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    constructor(id: string, title: string, description: string, isCompleted: boolean);
    completeTask(): void;
    uncompleteTask(): void;
}
