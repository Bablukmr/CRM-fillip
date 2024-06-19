import React from 'react'
import Header from './header'
import Sidebar from './Sidebar'
import Containts from './Containts'

function AdminLayout() {
  return (
    <div className='min-h-screen'>
        <div><Header/></div>
        <div className='flex h-full'>
            <div className='w-[14%] bg-slate-500'>
                <Sidebar/>
            </div>
            <div  className='w-[86%] h-full bg-yellow-600'>
                <Containts/>
            </div>
        </div>
    </div>
  )
}

export default AdminLayout