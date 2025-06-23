import React from 'react'

const Brands = () => {

  const brands = [
    '/img/brands/logo-6.png',
    '/img/brands/logo-8.png',
    '/img/brands/logo-9.png',
    '/img/brands/logo-27.png',
    '/img/brands/logo-30.png',
    '/img/brands/logo-33.png',
  ]
  return (
    <div className='bg-[#FFF5D9] overflow-x-hidden'>
        <div className='flex items-center gap-8 py-6 md:py-10 animate-marquee whitespace-nowrap'>
            {brands.map((brand, index) => (
              <img key={index} src={brand} alt={`Brand ${index}`} className='w-[150px] md:w-[200px] object-contain mx-6' />
            ))}
            {brands.map((brand, index) => (
              <img key={index * 10} src={brand} alt={`Brand ${index * 10}`} className='w-[150px] md:w-[200px] object-contain mx-6' />
            ))}
        </div>
    </div>
  )
}

export default Brands
