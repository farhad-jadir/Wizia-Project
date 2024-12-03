import control from "../assets/control.png";
import infinity from "../assets/infinity.png";
import flexible from "../assets/flexible.png";

const offerList = [
	{
		icon: control,
		title: "You’re in Control",
        description:
			"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
		
	},
	{
		icon: infinity,
		title: "Infinitely Scalable",
        description:
			"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
	},
	{
		icon: flexible,
		title: "Incredibly Flexible",
        description:
			"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
	},
];

function Control() {
  return (
    <div className=' grid grid-cols-1 items-center justify-items-center md:grid-cols-3 bg-[#02242A] p-16 mx-auto space-y-8 '>
      {offerList.map((item, i) => (
					<div className='space-y-8 ml-12' key={i}>
						<div className=' max-h-12 max-w-12 rounded-xl w-4/5'>
							<img
								alt='icon'
								className='h-12 w-12'
								src={item.icon}
							/>
						</div>

						<div className="space-y-8">
							<h4 className='font-semibold text-[#FFFFFF] text-lg md:text-2xl lg:text-4xl'>{item.title}</h4>

							<p className='text-[#FFFFFF]/40 text-sm md:text-[15px] w-1/2 '>
								{item.description}
							</p>
						</div>
					</div>
				))}
    </div>
  )
}

export default Control
