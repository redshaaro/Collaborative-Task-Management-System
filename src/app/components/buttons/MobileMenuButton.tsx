'use client';

import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IconContext } from "react-icons";

const MobileMenuButton = ({ onClick }: { onClick: () => void }) => {
    return (
        <IconContext.Provider value={{ className: "w-[30px] h-[50px]" }}>
            <div
                className="lg:hidden cursor-pointer"
                onClick={onClick}
            >
                <RxHamburgerMenu />
            </div>
        </IconContext.Provider>
    );
};

export default MobileMenuButton;
