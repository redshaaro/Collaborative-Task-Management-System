import React from 'react'
import { deleteTask } from '@/app/actions/actions'

const DeleteTask = async ({ id }: { id: string }) => {
    const deleteTaskWithId = deleteTask.bind(null, id)

    return (
        <form action={deleteTaskWithId}>
            <button type='submit'>X</button>



        </form>
    )
}

export default DeleteTask