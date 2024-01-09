import React from 'react'
import Navbar from './Navbar'
import Overview from './Overview'
import Table from './Table'

function Body() {
  return (
    <div className='w-[100%]'>
        <Navbar />
        <Overview />
        <h1 className='font-[500] text-[20px] pl-[30px] pt-[20px]'>Transaction | This month</h1>
        <Table />
    </div>
  )
}

export default Body