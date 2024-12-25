import React from 'react';
import { Task } from '../types/types';
import Operations from './buttons/Operations';
import { prisma } from '../utils/prisma';
import AddTaskButton from './buttons/AddTaskButton';
import Greeting from './Greeting';
import Link from 'next/link';



type DeskTopTaskProps = {
  tasks: Task[];
};

const DeskTopTask = async ({ tasks }: DeskTopTaskProps) => {

  const categories = await prisma.category.findMany()


  return (

    <>
      <Greeting></Greeting>
      <table className=' border-separate border-spacing-y-3 ' border={1} style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th>Task Title</th>
            <th>Task Status</th>
            <th>Task Category</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((task) => (
              <tr className='bg-[#f6f6f6] ' key={task.id}>
                <td><Link href={`/task/${task.id}`}>{task.title}</Link></td>
                <td>{task.status}</td>
                <td>{task.category ? task.category.name : 'No Category'}</td>

                <td><Operations taskId={task.id} name={task.title} status={task.status} categories={categories}   ></Operations></td>
              </tr>
            ))}
        </tbody>
      </table>
      <AddTaskButton categories={categories}></AddTaskButton>
    </>



  );
};

export default DeskTopTask;
