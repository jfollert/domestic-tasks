import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';
export declare class CreateTask {
    private taskRepository;
    constructor(taskRepository: TaskRepository);
    execute(title: string, description: string): Promise<Task>;
}
