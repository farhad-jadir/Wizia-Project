import React from 'react';
import checkCircle from "../assets/checkCircle.svg";

const trainList = [
	{
		icon: checkCircle,
		title: "Quick to ramp",
		
	},
	{
		icon: checkCircle,
		title: "Easy to optimize",
	},
	{
		icon: checkCircle,
		title: "Quick to scale up",

	},
    {
		icon: checkCircle,
		title: "Works with all your existing tools",

	},
];

function Train() {
  return (
    <section className=' bg-[url(train.png)] bg-no-repeat bg-cover p-16' space-y-2 >
        <div className='text-center space-y-2'>
            <h1 className='font-semibold text-2xl md:text-3xl lg:text-4xl text-[#FFFFFF] pt-12'>Train your aiDR on your...</h1>
            <h2>
            <h1 className='italic font-semibold text-2xl md:text-3xl lg:text-4xl text-[#0FF1F6]'>prefered email st|</h1></h2>

        </div>
        <div className='text-center pt-12'>
            <p className='text-[#FFFFFF]/60'>You’re in control. Train your aiDR on </p>
            <p className='text-[#FFFFFF]/60'> elements of your Marketing strategy.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center pt-16'>
				{trainList.map((item, i) => (
					<div className='flex gap-4' key={i}>
						<div className=''>
							<img
								alt='icon'
								className='h-6 w-6'
								src={item.icon}
							/>
						</div>

						<div>
							<h4 className='font-semibold text-sm md:text-lg text-[#14BCB2]'>{item.title}</h4>
						</div>
					</div>
				))}
			</div>
        
      
    </section>
  )
}

export default Train
