"use client"
import React, { useState } from 'react'
import Button from './Button'
import Modal from '../Modal'
import CreateTaskForm from '../Forms/CreateTaskForm'
import CreateSubTaskForm from '../Forms/CreateSubTaskForm'
type categories = {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;


}[]

const AddSubTaskButton = ({id}:{id:string}) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => setModalOpen((prev) => !prev);

    return (
        <>
            <div className='right-[-22px] bottom-0 fixed p-8 '>
                <Button text="+" type="button" onClick={handleOpenModal}></Button>

            </div>
            {isModalOpen && (
                <Modal onClose={handleOpenModal}>
                    <CreateSubTaskForm id={id} handleOpenModal={handleOpenModal}    ></CreateSubTaskForm>

                </Modal>
            )}
        </>


    )
}

export default AddSubTaskButton