import { Task } from './Task';
export interface TaskRepository {
    save(task: Task): Promise<void>;
    findById(id: string): Promise<Task | null>;
    findAll(): Promise<Task[]>;
    delete(id: string): Promise<void>;
}
