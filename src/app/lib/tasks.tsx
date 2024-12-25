import { Task } from '../types/types';
import { prisma } from '../utils/prisma';

export const getTasks = async (): Promise<Task[]> => {
    const tasks = await prisma.task.findMany({
        include: { category: true },
        where: {
            parentId: null
        }
    });

    return tasks.map((task) => ({
        id: task.id,
        title: task.title,
        status: task.status,
        category: task.category ? { name: task.category.name } : undefined,

    }));
};
export const getTaskById = async (id: string) => {
    const task = await prisma.task.findFirst({
        where: { id: id }
    })
    return task
}
export const getSubTasks = async (id: string) => {
    try {
        const SubTasks = prisma.task.findMany({
            where: {
                parentId: id


            }
        })


        return SubTasks;
    } catch (err) {
        console.log(err)
    }
}