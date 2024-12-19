import React from 'react'
import DeleteTask from './Delete-Task'
import EditButton from './EditButton'
type categories = {
    name: string;
    id: string;
    createdAt: Date;
    updatedAt: Date;


}[]

const Operations = ({ taskId, name, status, categories }: { taskId: string, name: string, status: string, categories: categories }) => {

    return (

        <div className='flex justify-center items-center'>
            <DeleteTask id={taskId} />
            <EditButton id={taskId} name={name} categories={categories}  ></EditButton>
        </div>

    )
}

export default Operations