import React from 'react'
import { SignOut } from './components/buttons/Signout-Button'
import { auth } from './auth'
import { redirect } from 'next/navigation'
import { getTasks } from './lib/tasks'

import DeleteTask from './components/buttons/Delete-Task'
import CreateTaskForm from './components/Forms/CreateTaskForm'


const Home = async () => {
  const session = await auth();
  const tasks = await getTasks();



  { !session?.user ? redirect("/register") : "" }

  return (
    <div>
      Home
      {tasks.map((task) => (
        <div className='flex gap-2' key={task.id}>
          <p id={task.id}>{task.title}</p>
          <DeleteTask id={task.id}></DeleteTask>


        </div>
      ))}
      <CreateTaskForm></CreateTaskForm>

      <SignOut></SignOut>






    </div>
  )
}

export default Home