import { auth } from '../auth';
import { Task } from '../types/types';
import { prisma } from '../utils/prisma';



export const getTasks = async (): Promise<Task[]> => {
    const session = await auth();

    const userId = session?.user?.id;

    const tasks = await prisma.task.findMany({
        include: {
            category: true,
            UserTask: true,
        },
        where: {
            OR: [
                { userId }, // Tasks created by the user
                { UserTask: { some: { userId } } }, // Tasks the user is collaborating on
            ],
            parentId: null, // Optional: Only root tasks
        },
    });

    return tasks.map((task) => ({
        id: task.id,
        title: task.title,
        status: task.status,
        category: task.category ? { name: task.category.name } : undefined,
        isCreatedByUser: task.userId === userId
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
export const getInvitationTask = async (token: string) => {
    try {
        const invitationTask = prisma.invitation.findMany({
            include: { task: true },
            where: {
                token: token,




            },


        })


        return invitationTask;
    } catch (err) {
        console.log(err)
    }
}
export const getAssignees = async (id: string) => {
    const assignees = await prisma.userTask.findMany({
        where: { taskId: id },
        include: {
            user: true, // This will fetch user details associated with each UserTask
        },
    });

    return assignees; // Return the list of assignees with user details
};