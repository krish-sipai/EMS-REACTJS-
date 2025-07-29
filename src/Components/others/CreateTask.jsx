import React, { useState, useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [category, setCategory] = useState('');
  const [assignTo, setAssignTo] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const task = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    const updatedData = userData.map(user => {
      if (user.firstName === assignTo) {
        return {
          ...user,
          tasks: [...user.tasks, task],
          taskCounts: {
            ...user.taskCounts,
            newTask: user.taskCounts.newTask + 1,
          }
        };
      }
      return user;
    });

    setUserData(updatedData);
    console.log('Updated user data:', updatedData);

    setTaskTitle('');
    setTaskDescription('');
    setTaskDate('');
    setCategory('');
    setAssignTo('');

    console.log('updated data ', userData)
  };

  return (
    <form onSubmit={submitHandler} className='bg-stone-800 mt-10 flex text-stone-50 p-5 justify-between'>

      <div className='flex flex-col gap-3 w-[50%]'>
        <div>
          <h3>Task Title</h3>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder='make a UI design'
            className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500'
            required
          />
        </div>
        <div>
          <h3>Date</h3>
          <input
            type="date"
            value={taskDate}
            onChange={(e) => setTaskDate(e.target.value)}
            className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500'
            required
          />
        </div>
        <div>
          <h3>Assign to</h3>
          <input
            type="text"
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            placeholder='employee name'
            className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500'
            required
          />
        </div>
        <div>
          <h3>Category</h3>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder='design, dev, etc'
            className='border border-gray-300 p-2 w-[80%] rounded-sm placeholder-gray-500'
            required
          />
        </div>
      </div>

      <div className='mt-2 w-[40%] flex flex-col gap-5'>
        <h3>Description</h3>
        <textarea
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="w-full h-40 border border-gray-300 rounded px-3 py-2 placeholder-gray-400 resize-none"
          placeholder="Enter your message..."
          required
        />
        <button className='w-full bg-green-600 py-3 rounded-md mt-3'>
          Create Task
        </button>
      </div>
    </form>
  )
}

export default CreateTask;
