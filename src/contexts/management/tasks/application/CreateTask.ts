import { Task } from '../domain/Task';
import { TaskRepository } from '../domain/TaskRepository';

export class CreateTask {
  constructor(private taskRepository: TaskRepository) {}

  async execute(title: string, description: string): Promise<Task> {
    const task = new Task(Date.now().toString(), title, description, false);
    await this.taskRepository.save(task);
    return task;
  }
}
