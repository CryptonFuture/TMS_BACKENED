import Task, { ITask } from '../models/task.models';

class TaskRepository {
    public async getAll(): Promise<any> {
        return Task.find();
    }

    public async getById(id: string): Promise<any> {
        return Task.findById(id);
        
        }


    public async create(task: ITask): Promise<any> {
        const newTask = new Task(task);
        return newTask.save();
    }

    public async update(id: string, task: Partial<ITask>): Promise<any> {
        return Task.findByIdAndUpdate(id, task, { new: true });
    }

    public async delete(id: string): Promise<any> {
        return Task.findByIdAndDelete(id);
    }
 
}
export default new TaskRepository();