import React from 'react'
import{Outlet} from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layouts() {
  return (
    <div className='flex flex-row bg-neutral-200 h-screen w-screen overflow-hidden'>
     <Sidebar/>
     <div className="flex flex-col flex-1">
				<Header />
        <div>{<Outlet />}</div>
      </div>
    </div>
  )
}
