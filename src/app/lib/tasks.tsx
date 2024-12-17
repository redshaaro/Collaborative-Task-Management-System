import { revalidatePath } from "next/cache";
import { prisma } from "../utils/prisma"

export const getTasks = async () => {
    const tasks = await prisma.task.findMany();
    return tasks;

}
