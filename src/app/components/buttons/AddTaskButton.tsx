"use client"
import React, { useState } from 'react'
import Button from './Button'
import Modal from '../Modal'
import CreateTaskForm from '../Forms/CreateTaskForm'
type categories = {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;


}[]

const AddTaskButton = ({ categories }: { categories: categories }) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen((prev) => !prev);

    return (
        <>
            <div className='right-[-22px] bottom-0 fixed p-8 '>
                <Button text="+" type="button" onClick={handleOpenModal}></Button>

            </div>
            {isModalOpen && (
                <Modal onClose={handleOpenModal}>
                    <CreateTaskForm categories={categories} handleOpenModal={handleOpenModal}    ></CreateTaskForm>

                </Modal>
            )}
        </>


    )
}

export default AddTaskButton