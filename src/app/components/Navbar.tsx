import Link from 'next/link'
import React from 'react'
import MobileMenu from './MobileMenu'
import { SignOut } from './buttons/Signout-Button'


const Navbar = () => {
    return (
        <div className='  flex justify-between lg:justify-around lg:gap-96 items-center p-3 m-3'>
            <div className='flex items-center gap-2'>
                <div className='bg-gray-200   rounded-full text-[#f6c75c] font-extrabold text-[31px] w-[50px] text-center '>T</div>
                <div className=' text-[18px]  font-extrabold lg:text-[25px]'>TaskSphere
                </div>

            </div>
            <ul className='hidden lg:flex items-center gap-5'>
                <li className="cursor-pointer"><Link href="/categories">Categories</Link></li>
                <li className="cursor-pointer"><Link href="/invitations">Invitations</Link></li>
                <li className="cursor-pointer"><Link href="/settings">Settings</Link></li>
                <li className="cursor-pointer"><SignOut></SignOut></li>


            </ul>
            <MobileMenu></MobileMenu>



        </div>
    )
}

export default Navbar