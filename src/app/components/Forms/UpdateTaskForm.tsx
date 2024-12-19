import React, { useState } from 'react';
import Button from '../buttons/Button';
import { updateTask } from "@/app/actions/actions";
type categories = {
  name: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;


}[]


const UpdateTaskForm = ({ id, name, categories, handleOpenModal }: { id: string, name: string, categories: categories, handleOpenModal: () => void }) => {
  const update = updateTask.bind(null, id)



  return (
    <>
      <form action={update} >
        <h2 className="text-lg font-bold mb-4">Edit Task: {name}</h2>

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
          <label className="block text-sm font-medium">Status:</label>
          <select name="status" className="w-full border rounded px-2 py-1">
            <option value="To-Do">To-Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Category:</label>
          <select name="cat" className="w-full border rounded px-2 py-1">
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

export default UpdateTaskForm;
