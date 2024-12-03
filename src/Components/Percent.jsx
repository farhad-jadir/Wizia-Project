import React from 'react';
const percentData = [
	{
		title:"32%",
		description: "Improvement in Open Rates",
		
	},
	{
		title:"75%",
		description: "Improvement in Ramp Time",
	},
	{
		title:"35%",
		description: "Improvement in Meetings Booked",
	},
];

function Percent() {
  return (
    <section className=''>
        <div className='grid grid-cols-1 w-full bg-[url(Percent.png)] bg-no-repeat bg-cover p-16 pl-16 md:pl-24  space-y-4'>
            <h1 className='font-semibold text-[#FFFFFF] w-1/2 text-lg md:text-2xl lg:text-4xl'>Allocate effort where your reps make an inpact.</h1>
            <h2 className='italic font-semibold text-[#0FF1F6] text-lg md:text-2xl lg:text-4xl'>Let us handle the rest.</h2>
            <p className='text-[#FFFFFF]/60 w-1/2 text-medium md:text-[20px]'>Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
            <div className='flex'>
                {percentData.map((item, i) => (
					<div className='space-y-8' key={i}>
						<div className=' max-h-12 max-w-12 rounded-xl w-4/5'>
							
						</div>

						<div className="space-y-2">
							<h4 className='font-bold text-[#0FF1F6] text-lg md:text-2xl lg:text-4xl'>{item.title}</h4>

							<p className='text-[#FFFFFF]/40 text-sm md:text-[14px] w-2/3 '>
								{item.description}
							</p>
						</div>
					</div>
				))}
        </div>
            
        </div>
        
      
    </section>
  )
}

export default Percent
