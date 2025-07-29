import React from 'react'

const TaskListnumbers = ({data}) => {
  return (
    <div className='flex screen justify-between gap-2 mt-10'>
        <div className='bg-blue-500 py-6 px-10 rounded-lg w-[40%]'>
            <h1 className=''>{data.taskCounts.newTask}</h1>
            <h3>New Task</h3>
        </div>
        <div className='bg-cyan-700 py-6 px-10 rounded-lg w-[40%]'>
            <h1 className=''>{data.taskCounts.active}</h1>
            <h3>active task</h3>
        </div>
        <div className='bg-emerald-600 py-6 px-10 rounded-lg w-[40%]'>
            <h1 className=''>{data.taskCounts.completed}</h1>
            <h3>completed</h3>
        </div>
        <div className='bg-fuchsia-600 py-6 px-10 rounded-lg w-[40%]'>
            <h1 className=''>{data.taskCounts.failed}</h1>
            <h3> failed </h3>
        </div>
    </div>
  )
}

export default TaskListnumbers