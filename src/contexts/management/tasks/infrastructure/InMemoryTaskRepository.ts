import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class InMemoryTaskRepository implements TaskRepository {
  private tasks: Task[] = [];

  async save(task: Task): Promise<void> {
    this.tasks.push(task);
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasks.find(task => task.id === id) || null;
  }

  async findAll(): Promise<Task[]> {
    return this.tasks;
  }

  async delete(id: string): Promise<void> {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }
}
