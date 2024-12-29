'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenuButton from './buttons/MobileMenuButton';
import { signOut } from "next-auth/react"

const MobileMenu = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <>
            {/* Burger Button */}
            <MobileMenuButton onClick={toggleSidebar} />

            {/* Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed top-0 right-0 w-64 h-full bg-gray-100 text-[#f6c75c] z-50 flex flex-col p-5 shadow-lg transition-transform duration-300"
                >
                    <button
                        onClick={toggleSidebar}
                        className="self-end text-gray-400 hover:text-[#f6c75c] text-[30px] mb-5"
                    >
                        &times;
                    </button>
                    <ul className="flex flex-col items-center justify-evenly  text-[20px] h-full gap-6">
                        <li><Link href="/categories">Categories</Link></li>
                        <li><Link href="/invitations">Invitations</Link></li>
                        <li className='pointer-cutsor' onClick={() => { signOut() }} >logout</li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default MobileMenu;
