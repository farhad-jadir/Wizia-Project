import React from 'react'
import { Button } from '@nextui-org/react'

function GetStarted() {
  return (
    <section>
        <div className='grid grid-cols-1 justify-items-center p-16 space-y-4'>
            <h1 className='font-bold text-[#0FF1F6]'>GET STARTED</h1>
            <h2 className='italic font-semibold text-[#FFFFFF] text-medium sm:text-lg md:text-3xl'>Embrace the new era of outbound.</h2>
            <div>
            <p className='text-[#FFFFFF]/60 text-[12px] md:text-medium text-center'>Wizia lets you train, activate, and optimize aiDRs. </p>
            <p className='text-[#FFFFFF]/60 text-[12px] md:text-medium text-center'>Take your outbound to new levels of performance and efficiency.</p>
            </div>
            <Button className='text-[#002228] bg-[#0FF1F6] rounded-full px-4 py-2'>
                Sign Up for the Beta <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2/3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

            </Button>
        </div>
      
    </section>
  )
}

export default GetStarted
