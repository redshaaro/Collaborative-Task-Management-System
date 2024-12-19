"use server"
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { prisma } from "../utils/prisma"

export const createTask = async (formData: FormData) => {
    const session = await auth();


    const title = formData.get("title")
    const desc = formData.get("desc")
    const category = formData.get("category") as string;

    try {
        await prisma.task.create({
            data: {
                userId: session?.user?.id as string,
                title: title as string,
                description: desc as string,
                categoryId: category

            },
            include: { category: true }
        })
        revalidatePath("/")

    } catch (err) {
        console.log(err)
    }




}
export const deleteTask = async (id: string) => {
    try {
        await prisma.task.delete({
            where: { id: id as string }
        })
        revalidatePath("/")

    } catch (err) {
        console.log(err)
    }



}
export const updateTask = async (id: string, formData: FormData) => {
    const title = formData.get("title")
    const status = formData.get("status")
    const category = formData.get("cat") as string

    try {
        await prisma.task.update({
            where: { id: id as string },

            data: {
                title: title as string,
                status: status as string,
                categoryId: category


            },
            include: { category: true }




        })
        revalidatePath("/")

    } catch (err) {
        console.log(err)
    }

}