import React from 'react'

const FailedTask = ({data}) => {
  return (
   <div className='h-full w-[300px] bg-red-500 rounded-lg shrink-0'>
            <div className='flex items-center justify-between px-2 pt-2'>
                <h1 className='bg-sky-500 p-1 rounded-lg text-xl'>{data.category}</h1>
                <h1>{data.taskDate}</h1>
            </div>
            <h1 className='text-center mt-3 font-bold text-lg'>{data.taskTitle}</h1>
            <p className='text-center mt-3'>{data.taskDescription}</p>
             <div className='mt-6'>
                <button className='w-full bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
            </div>
        </div>

  )
}

export default FailedTask
