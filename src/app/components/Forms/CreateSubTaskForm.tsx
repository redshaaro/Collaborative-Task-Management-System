import { createSubTask } from '@/app/actions/actions'
import React from 'react'
import Button from '../buttons/Button'

const CreateSubTaskForm = ({ id, handleOpenModal }: { id: string, handleOpenModal: () => void }) => {
    return (

        <form action={createSubTask}>
            <h2 className="text-lg font-bold mb-4">Create Subtask</h2>

            <input type="hidden" name="parentId" value={id} />

            <div className="mb-4">
                <label className="block text-sm font-medium">SubTask Title:</label>
                <input
                    type="text"
                    name="title"
                    placeholder="Enter new title"
                    className="w-full border rounded px-2 py-1"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-medium">SubTask Description:</label>
                <input
                    type="text"
                    name="desc"
                    placeholder="Enter new Description"
                    className="w-full border rounded px-2 py-1"
                />
            </div>


            <div className="flex justify-end gap-4">
                <button
                    type="button"
                    onClick={handleOpenModal}
                    className="rounded-xl p-2 font-bold w-[78px] m-2 bg-gray-300 "
                >
                    Cancel
                </button>
                <Button text="Save" type="submit">

                </Button>
            </div>
        </form>

    )
}

export default CreateSubTaskForm