import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium text-amber-50'>hello <br />  <span className='text-3xl font-semibold'>krish 👋</span></h1>
        <button className='text-amber-50 text-lg font-medium bg-red-500 rounded-sm px-5 py-3'>log Out</button>
    </div>
  )
}

export default Header