import { auth } from "@/app/auth";
import { getInvitationTask } from "@/app/lib/tasks";
import { changeTheInvitationStatus } from "@/app/actions/actions";
import { redirect } from "next/navigation";
import HandleInvitation from "@/app/components/buttons/HandleInvitation"; // Import the client component

const page = async ({
    params,
}: {
    params: Promise<{ token: string }>
}) => {
    const session = await auth();
    const token = (await params).token

    if (!session?.user) {
        redirect(`/signinredirect?redirectTo=/invitations/${token}`);
    }

    const tasks = await getInvitationTask(token);

    return (
        <div>
            <h1 className="text-[20px] text-center font-bold">Invitation Page</h1>

            {tasks?.map((t) => (
                <div key={t.id} className="flex flex-col justify-center items-center gap-2 m-2">
                    <div>{t.task.title}</div>
                    <div className="text-[#969cb0]">{t.task.description}</div>
                    <HandleInvitation token={token} onStatusChange={changeTheInvitationStatus} />
                </div>
            ))}
        </div>
    );
};

export default page;
