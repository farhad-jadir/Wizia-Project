import React from 'react';
import { Button } from '@nextui-org/react'

function Hero() {
  return (
    <section className='w-full font-mplus1 text-black  '>
        <div className='pt-20 pb-20 space-y-6 sm:w-1/2'>
            <h1 className='text-[#0FF1F6] leading-tight text-2xl md:text-3xl lg:text-4xl'>AI SDRs (aiDRs)</h1>
            <h2 className='font-bold leading-tight text-2xl md:text-3xl lg:text-4xl xl:text-5xl w-1/2 text-[#FFFFFF]'>More <span className='italic font-normal'>leads,</span>  less<span className='italic font-normal'> people.</span></h2>
            <p className='text-[#FFFFFF]/60 leading-tight text-sm md:text-[16px] w-2/3'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
            <Button className='text-[#002228] bg-[#0FF1F6] rounded-full px-4 py-2'>
                Sign Up for the Beta <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-2/3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>

            </Button>
            
        </div>
      
    </section>
  )
}

export default Hero
