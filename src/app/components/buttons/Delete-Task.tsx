import React from 'react'
import { deleteTask } from '@/app/actions/actions'
import Button from './Button'

const DeleteTask = async ({ id }: { id: string }) => {
    const deleteTaskWithId = deleteTask.bind(null, id)

    return (
        <form action={deleteTaskWithId}>
            <Button text="Delete" type="submit"></Button>



        </form>
    )
}

export default DeleteTask