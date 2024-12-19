import React from 'react'
import { auth } from '../auth';


const Greeting = async () => {
    const session = await auth();
    return (
        <h1 className='text-center md:text-lg lg:text-4xl p-2 m-2'> Welcome {session?.user?.name}</h1>
    )
}

export default Greeting