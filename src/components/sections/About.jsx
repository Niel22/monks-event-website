import React from 'react'

const About = () => {

    const abouts = [
        {
            image: "/img/about-1.png",
            caption: "Memorable experience",
            title: "Unforgettable Moments at Eventive 2024"
        },
        {
            image: "/img/about-2.png",
            caption: "Skilled Speakers",
            title: "Storytelling Festival"
        },
        {
            image: "/img/about-3.png",
            caption: "Community Build",
            title: "Build Networking"
        },
    ]
  return (
    <div className='relative w-full pt-30 md:pt-40'>
        <img src="/img/event-under.png" alt="About Event" className='w-full absolute top-20 -z-1' />

        <div className='container px-8 flex flex-col gap-18 md:px-6 lg:px-4 mx-auto'>
            <div className='text-black flex flex-col lg:flex-row lg:items-start gap-8 text-center lg:text-left md:justify-between'>
                <h2 className='text-3xl lg:text-4xl font-medium flex-1'>About the event</h2>
                <p className='flex-1'><span className='text-[#7A38FC]'>Tech Event 2024</span> showcases groundbreaking innovations, featuring keynote talks, interactive workshops, and networking sessions for tech enthusiasts and industry leaders.</p>
            </div>

            <div className='grid grid-col-1 md:grid-cols-4 gap-4'>
                {abouts.map((about, index) => (
                    <div key={index} className={`relative ${index === 0 && 'md:col-span-2'} w-full border border-gray-300 rounded-2xl h-[300px] md:h-[350px] overflow-hidden`} style={{ background: `url(${about.image}), linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.9) 85%)`, backgroundSize: "cover", backgroundBlendMode: "overlay" }}>
                        <div className='absolute flex flex-col p-6 justify-end inset-0'>
                            <p className='uppercase text-[12px]'>{about.caption}</p>
                            <h4 className='text-[17px]'>{about.title}</h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default About
