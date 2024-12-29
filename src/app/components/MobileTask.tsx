import React from 'react'
import { Task } from '../types/types';
import Button from './buttons/Button';
import Operations from './buttons/Operations';
import { prisma } from '../utils/prisma';
import AddTaskButton from './buttons/AddTaskButton';
import Greeting from './Greeting';
import Link from 'next/link';
type MobileProps = {
    tasks: Task[];
};

const MobileTask = async ({ tasks }: MobileProps) => {
    const categories = await prisma.category.findMany()


    return (
        <>
            <Greeting></Greeting>
            <div className='flex flex-col justify-center items-center gap-3 m-3'>
                {
                    tasks.map((task) => (
                        <div key={task.id} className='flex items-center flex-col w-full justify-center gap-2 p-3 bg-[#f6f6f6] rounded-2xl my-3'>
                            <div className='flex justify-around w-full items-center'>
                                {/* title */}
                                <Link className='w-[50%] text-center' href={`/task/${task.id}`}>
                                    <div >{task.title}</div>
                                </Link>
                                {/* status */}
                                <div className='w-[50%] text-center'>{task.status}</div>
                            </div>

                            {/* OPS */}


                            <Operations taskId={task.id} name={task.title} status={task.status} categories={categories}></Operations>






                        </div>
                    ))


                }
                <AddTaskButton categories={categories}></AddTaskButton>


            </div>
        </>

    )
}

export default MobileTask