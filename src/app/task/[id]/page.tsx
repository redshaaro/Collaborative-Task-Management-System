import AddSubTaskButton from '@/app/components/buttons/AddSubTaskButton';
import Subtask from '@/app/components/Subtask';
import { updateSubtaskStatus } from "@/app/actions/actions";

import { getAssignees, getSubTasks, getTaskById } from '@/app/lib/tasks';
import React from 'react';
import Image from 'next/image';
import { auth } from '@/app/auth';

const page = async ({ params }: {
    params: Promise<{ id: string }>
}) => {
    const id = (await params).id;
    const task = await getTaskById(id);
    const subtasks = await getSubTasks(id);
    const assignees = await getAssignees(id);
    const session = await auth();

    return (
        <div className="flex flex-col justify-center items-center m-[5px]">
            {/* Task Title and Description */}
            <div className="text-[30px] font-extrabold">{task?.title}</div>
            <div className="m-2 text-[#969cb0]">{task?.description}</div>

            {/* Task Details */}
            <div className="p-3 w-full lg:w-[60%] m-2 flex flex-col items-center justify-center border-2 border-[#f6c75c] border-solid">
                <div className="w-full flex flex-col gap-4">
                    {/* Status */}
                    <div className="flex justify-around items-center">
                        <div className="text-[#969cb0]">Status</div>
                        <div className="m-2 bg-[#f9f4d7] p-[5px] font-[700] text-[#dbb12c] rounded-full">
                            {task?.status}
                        </div>
                    </div>
                    {/* Created At */}
                    <div className="flex justify-around items-center">
                        <div className="text-[#969cb0]">Created At</div>
                        <div className="m-2 font-[700]">
                            {task?.createdAt.toString().slice(3, 15)}
                        </div>
                    </div>
                    {/* Assignees */}
                    <div className="flex justify-around items-center">
                        <div className="text-[#969cb0] mb-2">Assignees</div>
                        <div className="flex flex-wrap justify-center gap-4">
                            {assignees.map((a) => (
                                <div key={a.id} className="flex flex-col items-center">
                                    {session?.user?.id === a.user.id ? (
                                        <div className="bg-orange-500 text-white text-xs font-bold rounded-full w-[40px] h-[40px] flex items-center justify-center">
                                            YOU
                                        </div>
                                    ) : (
                                        <div className="relative group">
                                            <Image
                                                src={`${a.user.image}`}
                                                alt="User image"
                                                width={40}
                                                height={40}
                                                className="rounded-full"
                                            />
                                            {/* Tooltip showing the user's name */}
                                            <div
                                                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                {a.user.name}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Subtasks Section */}
            <section className="w-full">
                <h2 className="text-center font-extrabold">Subtasks</h2>
                {subtasks?.map((t) => (
                    <div className="text-center" key={t.id}>
                        <Subtask
                            updateSubtaskStatus={updateSubtaskStatus}
                            status={t.status}
                            title={t.title}
                            id={t.id}
                        ></Subtask>
                    </div>
                ))}
                <AddSubTaskButton id={id}></AddSubTaskButton>
            </section>
        </div>
    );
};

export default page;
