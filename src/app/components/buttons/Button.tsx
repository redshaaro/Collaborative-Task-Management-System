import { ButtonProps } from '@/app/types/types'
import React from 'react'

const Button = ({ text, type, onClick }: ButtonProps) => {
    return (
        <button className='bg-[#f6c75c] rounded-xl p-2 font-bold w-[78px] m-2 ' type={type} onClick={onClick}>{text}</button>
    )
}

export default Button