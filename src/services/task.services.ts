    import { ITask } from '../models/task.models';
    import TaskRepository from '../repository/task.repository';

    class TaskService {
        public async getAllTask(): Promise<ITask> {
            return TaskRepository.getAll();
        }

        public async getTaskById(id: string): Promise<ITask> {
            return TaskRepository.getById(id);
        }

        public async createTask(Task: ITask): Promise<ITask> {
            return TaskRepository.create(Task);
        }

        public async updateTask(id: string, Task: Partial<ITask>): Promise<ITask> {
            return TaskRepository.update(id, Task);
        }

        public async deleteTask(id: string): Promise<ITask> {
            return TaskRepository.delete(id);
        }
    }

    export default new TaskService();