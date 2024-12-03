import React from 'react'

function Footer() {
  return (
    <div className='grid grid-cols-2 justify-items-between bg-[#002228] w-full" maxWidth="xl" p-8'>
        <img className='w-10 h-2 md:w-12 md:h-4 ml-8 md:ml-24' src="Logo.png" alt="" />
        <p className='text-[#96ACAF] text-end text-[10px] sm:text-[12px] md:text-[14px]'>Copyright © 2024 Wizia. All rights reserved.</p>
    </div>
  )
}

export default Footer
