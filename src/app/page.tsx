import React from 'react'
import SignIn from './components/SignIn-Button'
import { SignOut } from './components/Signout-Button'
import { auth } from './auth'

const Home = async () => {
  const session = await auth();
  return (
    <div>Home
      {!session?.user ? <SignIn></SignIn> : null}
      <div>{session?.user?.name}</div>


      <SignOut></SignOut>


    </div>
  )
}

export default Home