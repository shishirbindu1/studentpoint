import React from 'react'

const Header = () => {
    return (
        <div className='wrapper '>
            <div className="nav grid grid-flow-col px-10 h-20 items-center">
                <h1 className='text-2xl font-semibold'>Student <span className='text-blue-600'>Point</span></h1>
                <input type="search" placeholder='search' name="search" id="search" className='border-2 rounded-full text-base w-3/4 focus:outline-none px-3 py-1' />
                <div className="authentication grid grid-flow-col">
                    <button className='grid justify-items-end'>Sign Up</button>
                    <h1 className='text-center'>|</h1>
                    <button className='grid justify-items-start'>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header