import React from 'react'

const Hero = () => {
  return (
    <div className='relative pt-20 md:pt-38 flex items-center min-h-[400px] md:min-h-[550px] lg:min-h-[700px] overflow-hidden pb-5 md:pb-15'>
        <div className='absolute h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,_#FEBF00_0%,_rgba(254,191,0,0)_70%)] bottom-[30%] md:top-[40%] md:left-[55%] blur-[95px]'></div>
        <div className='absolute top-[70%] left-[75%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_#4399E2_0%,_rgba(67,153,226,0)_70%)] blur-[95px]'></div>
        
        <div className='container mx-auto flex flex-col md:flex-row items-center md:justify-between gap-8 py-4 md:py-0'>
            <div className='w-full px-8 md:px-6 lg:px-4 space-y-3 text-center md:text-left '>
                <p className=' font-medium'>15-17 December National IT Hall</p>
                <h2 className='w-full text-2xl md:text-3xl lg:text-5xl font-bold'>Tech<span className='ml-2'>Innovation</span> Event<span className='ml-2'>2025</span></h2>
                <p className='w-full md:w-3/4 text-sm md:text-[17px] leading-loose font-light  md:my-8'>Tech Innovation Event 2024: Unveiling breakthrough technologies and networking opportunities for industry pioneers.</p>
                <div className='flex gap-4 w-1/2 md:w-full flex-col md:flex-row mx-auto md:mx-0'>
                    <button className='px-4 md:px-6 py-3 text-sm  bg-[#7A38FC] hover:bg-[#FEBF00] text-white rounded-md transition-colors duration-300 hover:text-black'>Buy Tickets</button>
                    <button className='px-4 md:px-6 py-3 text-sm  border border-[#7A38FC] hover:bg-[#FEBF00] hover:border-transparent text-white rounded-md transition-colors duration-300 hover:text-black'>See Schedule</button>
                </div>
                <img src='/img/hero-1.png' className='absolute top-[25%] left-[10%] md:left-[20%] md:top-[85%] w-[40px] md:w-[70px]' />
            </div>
            <div className='w-full md:gap-8 px-8 md:px-6 lg:px-4 '>
                <img src="/img/hero-pics-1.png"  alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero
