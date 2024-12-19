import { Task } from '../types/types';
import { prisma } from '../utils/prisma';

export const getTasks = async (): Promise<Task[]> => {
    const tasks = await prisma.task.findMany({
        include: { category: true },
    });

    return tasks.map((task) => ({
        id: task.id,
        title: task.title,
        status: task.status,
        category: task.category ? { name: task.category.name } : undefined,
    }));
};
