import React from 'react'
import Header from '../others/Header'
import CreateTask from '../others/CreateTask'
import AllTask from '../others/AllTask'

const AdminDashbord = () => {
  return (
    <div className='h-screen w-full  p-10 bg-stone-950'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashbord