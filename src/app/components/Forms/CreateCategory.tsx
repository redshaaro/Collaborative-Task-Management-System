import React from 'react';
import { CreateCategoryfn } from '@/app/actions/actions';

const CreateCategory = () => {


    return (
        <form className='m-2' action={CreateCategoryfn}>

            <div className="mb-4">
                <label htmlFor="Category" className="block text-sm font-medium">
                    Category Name
                </label>
                <input
                    type="text"
                    name="catname"


                    className="w-full border rounded px-2 py-1"
                    placeholder="Enter Category Name"
                />
            </div>




          
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Create Category
            </button>
        </form>
    );
};

export default CreateCategory;
