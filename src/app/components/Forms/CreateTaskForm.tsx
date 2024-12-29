import React, { useState } from 'react';
import Button from '../buttons/Button';
import { createTask } from "@/app/actions/actions";
type categories = {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;


}[]


const CreateTaskForm = ({ categories, handleOpenModal }: { categories: categories, handleOpenModal: () => void }) => {




    return (
        <>
            <form action={createTask}>
                <h2 className="text-lg font-bold mb-4">Create A New Task !</h2>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Task Title:</label>
                    <input
                        type="text"
                        name="title"
                        placeholder="Enter new title"
                        className="w-full border rounded px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Task Description:</label>
                    <input
                        type="text"
                        name="desc"
                        placeholder="Enter new title"
                        className="w-full border rounded px-2 py-1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Category:</label>
                    <select name="category" className="w-full border rounded px-2 py-1">
                        <option value="">Select a category</option>
                        {
                            categories.map((cat) => (
                                <option key={cat.id} value={cat.id}>
                                    {cat.name}
                                </option>
                            ))
                        }

                    </select>
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
        </>
    );
};

export default CreateTaskForm;
