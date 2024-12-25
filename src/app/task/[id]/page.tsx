import AddSubTaskButton from '@/app/components/buttons/AddSubTaskButton'
import Subtask from '@/app/components/Subtask'
import { updateSubtaskStatus } from "@/app/actions/actions";

import { getSubTasks, getTaskById } from '@/app/lib/tasks'
import React from 'react'

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const id = (await params).id
    const task = await getTaskById(id)
    const subtasks = await getSubTasks(id)



    return (
        <div className='flex flex-col justify-center items-center m-[5px]'>
            <div className='text-[30px] font-extrabold'>{task?.title}</div>
            <div className='m-2 text-[#969cb0]'> {task?.description}</div>

            <div className='p-3 w-full lg:w-[60%] m-2 flex flex-col items-center justify-center border-2 border-[#f6c75c] border-solid'>
                <div className='flex justify-around  items-center w-full'>
                    <div className=' text-[#969cb0] '>Status:</div>
                    <div className='m-2 bg-[#f9f4d7] p-[5px] font-[700] text-[#dbb12c] rounded-full '>{task?.status}</div>


                </div>
                <div className='flex justify-around  items-center w-full'>
                    <div className=' text-[#969cb0] '>created At:</div>

                    <div className='m-2 font-[700]'>{task?.createdAt.toString().slice(3, 15)}</div>



                </div>







            </div>
            <section className="w-full">
                <h2 className='text-center font-extrabold '>Subtasks</h2>

                {subtasks?.map((t) => (
                    <div className='text-center' key={t.id}>
                        <Subtask updateSubtaskStatus={updateSubtaskStatus} status={t.status} title={t.title} id={t.id}></Subtask>

                    </div>



                ))}


                <AddSubTaskButton id={id}></AddSubTaskButton>
            </section>


        </div>
    )
}

export default page