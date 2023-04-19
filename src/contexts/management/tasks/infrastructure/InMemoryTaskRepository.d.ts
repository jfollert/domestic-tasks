import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';
export declare class InMemoryTaskRepository implements TaskRepository {
    private tasks;
    save(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
    delete(id: string): Promise<void>;
}
