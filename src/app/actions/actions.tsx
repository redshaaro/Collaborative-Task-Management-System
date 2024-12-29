"use server"
import { revalidatePath } from "next/cache";
import { auth } from "../auth";
import { prisma } from "../utils/prisma"
import { sendInvitationEmail } from "../utils/email";
import { v4 as uuidv4 } from 'uuid'; // For generating unique invalid tokens


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
// SUBTASKS
export const createSubTask = async (formData: FormData) => {
    const session = await auth();


    const title = formData.get("title")
    const desc = formData.get("desc")
    const parentId = formData.get("parentId")
    try {
        await prisma.task.create({
            data: {
                userId: session?.user?.id as string,
                title: title as string,
                description: desc as string,
                parentId: parentId as string

            },
        })
        revalidatePath(`/task/${parentId}`)

    } catch (err) {
        console.log(err)
    }


}


export const updateSubtaskStatus = async (id: string, newStatus: string) => {
    try {
        await prisma.task.update({
            where: { id },
            data: { status: newStatus },
        });
        revalidatePath(`/task/${id}`)


    } catch (err) {
        console.error("Error updating subtask status:", err);
        throw err;
    }
};
export const createInvitation = async ({
    email,
    taskId,
    taskTitle,
}: {
    email: string;
    taskId: string;
    taskTitle: string
}) => {
    const generateToken = () => {
        return require('crypto').randomBytes(16).toString('hex');
    };
    const session = await auth();

    const token = generateToken(); // وظيفة لتوليد رمز فريد
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // مدة صلاحية 24 ساعة
    let baseurl = ""
    if (process.env.NODE_ENV === "development") {
        baseurl = "http://localhost:3000"

    } else if (process.env.NODE_ENV === "production") {
        baseurl = "https://task-manager-seven-lake.vercel.app"


    }


    const invitation = await prisma.invitation.create({
        data: {
            email,
            taskId,
            token,
            expiresAt,
            senderId: session?.user?.id as string,


        },
    });
    const invitationLink = `${baseurl}/invitations/${invitation.token}`;

    // إرسال البريد الإلكتروني
    await sendInvitationEmail({
        recipientEmail: email,
        senderName: session?.user?.name + ' from TASKSPHERE', // اسم المُرسل (يمكن تغييره)
        taskTitle: taskTitle, // يمكنك الحصول على العنوان من قاعدة البيانات إذا لزم الأمر
        invitationLink,
    });
};



export const changeTheInvitationStatus = async (token: string, status: string): Promise<void> => {
    const session = await auth();

    if (!session?.user) {
        throw new Error("User not authenticated");
    }

    if (!token || typeof token !== "string") {
        throw new Error("Invalid token provided");
    }

    if (!["Accepted", "Rejected"].includes(status)) {
        throw new Error("Invalid status provided");
    }

    try {
        // Generate a unique token to invalidate the current one
        const invalidToken = uuidv4();

        // Update the invitation's status and token
        const updated = await prisma.invitation.update({
            where: { token },
            data: {
                status,
                token: invalidToken, // Invalidate the token
            },
        });

        if (status === "Accepted") {
            const invitation = await prisma.invitation.findFirst({
                where: { id: updated.id },
                include: { task: true },
            });

            if (invitation) {
                await prisma.userTask.create({
                    data: {
                        userId: session.user.id as string,
                        taskId: invitation.taskId as string,
                        role: "Assignee", // Update role if needed
                    },
                });
            }
        }
    } catch (err) {
        console.error("Error in `changeTheInvitationStatus`:", err);
        throw new Error("Failed to update invitation status");
    }
};
export const CreateCategoryfn = async (formData: FormData) => {
    const catname = formData.get("catname");
    const session = await auth();
    try {
        await prisma.category.create({
            data: {
                userId: session?.user?.id as string,


                name: catname as string

            }
        })

    } catch (err) {
        console.log(err)

    }

}
