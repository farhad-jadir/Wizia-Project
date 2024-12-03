import React from 'react';
import {Pagination} from "@nextui-org/react";

function Quote() {
  return (
    <section className='w-full p-16'>
        <div className='grid grid-cols-1 justify-items-center space-y-8'>
            <img className='w-20 h-16 bg-[#183A40] p-4 rounded-full' src="quote.png" alt="" />
            <p className='text-[#FFFFFF]/60 text-md md:text-xl w-1/2'>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
            <Pagination showControls total={10} initialPage={1} />
        </div>
        <div className='grid grid-cols-1 justify-items-center pt-12'>
            <h1 className='font-bold text-[#0FF1F6]'>John Doe</h1>
            <p className='text-[#96ACAF] text-[11px] sm:text-medium md:text-lg'>Chief Strategy Officer @ Company</p>
        </div>
    </section>
  )
}

export default Quote
