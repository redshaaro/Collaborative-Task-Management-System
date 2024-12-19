import React from 'react';
import { SignOut } from './components/buttons/Signout-Button';
import { auth } from './auth';
import { redirect } from 'next/navigation';
import { getTasks } from './lib/tasks';


import DeskTopTask from './components/DeskTopTask';
import Navbar from './components/Navbar';
import MobileTask from './components/MobileTask';


const Home = async () => {
  const session = await auth();
  const tasks = await getTasks();

  if (!session?.user) {
    redirect('/register');
  }

  return (
    <>


      <div className='hidden lg:block '>
        <DeskTopTask tasks={tasks}></DeskTopTask>






      </div>
      <div className='lg:hidden'>
        <MobileTask tasks={tasks}></MobileTask>

      </div>
    </>

  );
};

export default Home;
