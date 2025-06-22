import Navbar from '../layouts/Navbar'

const Header = () => {
  return (
    <div className='overflow-hidden bg-[#0a0301]'>
        {/* <div className="absolute inset-0 bg-black opacity-95"></div> */}
        <div className='absolute h-[200px] w-[200px] rounded-full bg-[radial-gradient(circle,_#FEBF00_0%,_rgba(254,191,0,0)_70%)] bottom-[30%] md:top-[40%] md:left-[55%] blur-[95px]'></div>
        <div className='absolute top-[70%] left-[75%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,_#4399E2_0%,_rgba(67,153,226,0)_70%)] blur-[95px]'></div>

        <div className=''>
            <Navbar />
            <div className='min-h-[400px] md:min-h-[550px] lg:min-h-[700px] overflow-hidden container mx-auto flex flex-col md:flex-row items-center md:justify-between md py-4 md:py-0'>
              <div className='relative w-full px-8 md:px-6 lg:px-4 space-y-3 text-center md:text-left leading-loose'>
                <p className='text-[12px] md:text-sm font-medium'>15-17 December National IT Hall</p>
                <h2 className='w-full text-2xl md:text-3xl lg:text-5xl font-bold'>Tech<span className='ml-2'>Innovation</span> Event<span className='ml-2'>2025</span></h2>
                <p className='w-full md:w-3/4 text-[10px] md:text-[13px] md:my-8'>Tech Innovation Event 2024: Unveiling breakthrough technologies and networking opportunities for industry pioneers.</p>
                <div className='flex gap-4 w-1/2 md:w-full flex-col md:flex-row mx-auto md:mx-0'>
                  <button className='px-4 md:px-6 py-3 text-[10px] lg:text-[13px] bg-[#7A38FC] hover:bg-[#FB714C] text-white rounded-md transition-colors duration-300'>Buy Tickets</button>
                  <button className='px-4 md:px-6 py-3 text-[10px] lg:text-[13px] border border-[#7A38FC] hover:bg-[#FB714C] hover:border-transparent text-white rounded-md transition-colors duration-300'>See Schedule</button>
                </div>
                <img src='/img/hero-1.png' className='absolute -bottom-[30%]' width="10%" />
              </div>
              <div className='w-full md:gap-8 px-8 md:px-6 lg:px-4 '>
                <img src="/img/hero-pics-1.png"  alt="" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Header
