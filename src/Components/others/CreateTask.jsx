import React from 'react'

const CreateTask = () => {
  return (
    <form className='bg-stone-800 mt-10 flex text-stone-50  p-5 justify-between'>
         
       
       <div className='flex flex-col gap-3  w-[50%]'  >
        <div >
            <h3>Task Title</h3>
            <input type="text"
             placeholder='make a UI design'
             className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500' />
        </div>
        <div>
            <h3>
                date
            </h3>
            <input type="date" 
            className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500'  />
        </div>
        <div>
            <h3>
                Assign to
            </h3>
            <input type="text"
             placeholder='employee name'
             className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500' />
        </div>
        <div>
            <h3>
                category
            </h3>
            <input type="text"
            placeholder='design,dev,etc'
            className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500' />
        </div>
       </div>
       <div
       className='mt-2 w-[40%] flex flex-col gap-5'>
        <div>
        <h3>
            description
        </h3>
        <textarea
        className="w-full  h-40 border border-gray-300 rounded px-3 py-2 placeholder-gray-400 resize-none"
        placeholder="Enter your message..."
        ></textarea>
        </div>
        
        <button
        className='w-full bg-green-600 py-3 rounded-md'>
            Create Task
        </button>
       </div>

   
    </form>
   
  )
}

export default CreateTask