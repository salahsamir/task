import React from 'react'
interface IProps{

}
const Nav=({}:IProps)=> {
  return (
    <header>
    <div className='flex justify-between px-10 py-2 bg-blue-200 fixed  left-0 right-0 z-50'>
      <div className='flex space-x-2'>
        <p>gaming</p>
        <p>graphic</p>
        <p>business</p>
      </div>
      <p>Best offers</p>
    </div>

    
    </header>
  )
}

export default Nav