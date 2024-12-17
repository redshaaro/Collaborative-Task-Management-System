import { createTask } from '@/app/actions/actions'
import { getCategories } from '@/app/lib/categoires'
import React from 'react'


const CreateTaskForm = async () => {
    const categories = await getCategories();

    return (
        <form action={createTask}>
            <input type="text" name='title' placeholder='enter title' />
            <input type="text" name='desc' placeholder='enter description' />
            <select name="category">
                <option value="">Select a category</option>
                {categories.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                        {cat.name}
                    </option>
                ))}
            </select>
            <input type="submit" placeholder='add task' />

        </form>
    )
}

export default CreateTaskForm