import React from 'react'

function Overview() {
  return (
    <section>
        <div className='flex justify-between pt-[25px] pl-[30px] pr-[30px]'>
            <h1 className='font-[500] text-[20px]'>Overview</h1>
            <select className='p-2 bg-white border-2 rounded-md text-text font-medium'>
                <option>This Month</option>
              </select>

        </div>
        <div className='flex justify-between pt-[20px] pl-[30px] pr-[30px]'>
            <div className='shadow-[0px_0px_6px_-3px_rgba(0,0,0,0.75)] grow p-[20px] rounded-[5px]'>
                <h1 className='text-[18px] text-[#4D4D4D]'>Online orders</h1>
                <p className='text-[35px] font-[500]'>231</p>
            </div>
            <div className='shadow-[0px_0px_6px_-3px_rgba(0,0,0,0.75)] grow ml-[15px] p-[20px] rounded-[5px]'>
                <h1 className='text-[18px] text-[#4D4D4D]'>Amount received</h1>
                <p  className='text-[35px] font-[500]'>₹23,92,312.19</p>
            </div>
        </div>
    </section>
  )
}

export default Overview