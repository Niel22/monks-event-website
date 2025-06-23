import { useEffect, useRef, useState } from 'react';
import { LuAlignRight } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { BiX } from "react-icons/bi";

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const modalRef = useRef(null);
    const toggleRef = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setNavOpen(false);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if ((modalRef.current && !modalRef.current.contains(event.target)) &&
            (toggleRef.current && !toggleRef.current.contains(event.target) )
            ) {
                setNavOpen(false);
            }
        };

            document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [navOpen]);

    const navLinks = [
        {
            path: '/',
            label: "Home"
        },
        {
            path: '/about',
            label: "About"
        },
        {
            path: '/speakers',
            label: "Speakers"
        },
        {
            path: '/gallery',
            label: "Gallery"
        },
        {
            path: '/contact',
            label: "Contact"
        },
    ]

    const toggleNav = () => {
        setNavOpen(!navOpen);
    }

    const isActive = (path) => {
        return location.pathname === path;
    }

  return (
    <>
        <nav className={`fixed top-0 inset-x-0 overflow-hidden transition-all duration-300 z-100 ${isSticky ? 'bg-black' :'bg-transparent'}`}>
            <div className='w-full container mx-auto px-4 py-4 md:py-6 md:px-6 flex items-center justify-between h-16 md:h-20'>
                <Link to="/" className='font-medium text-xl lg:text-2xl'>Monks Event</Link>
                <ul className='hidden lg:flex items-center gap-6 lg:gap-10 text-sm'>
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link className={`hover:text-white transition-colors duration-100 ${isActive(link.path) ?  'text-white' : 'text-[#B7B6B6]'}`} to={link.path}>{link.label}</Link>
                        </li>
                    ))}
                </ul>

                <div className='flex gap-4 items-center'>
                    <button className='hidden md:block lg:text-sm text-[10px] rounded-md border border-[#7A38FC] p-2 lg:px-4 lg:py-3 hover:bg-[#7A38FC] transition-colors duration-300'>
                        Get Started
                    </button>
                    {navOpen ? 
                        <BiX onClick={toggleNav} ref={toggleRef} size={45} className='block lg:hidden cursor-pointer'/> 
                    :
                        <LuAlignRight onClick={toggleNav} ref={toggleRef} size={35} className='block lg:hidden cursor-pointer' />
                    }
                </div>
                
            </div>
            {navOpen && (
                <div ref={modalRef} className={`lg:hidden w-full px-4 transition-all duration-300`} >
                    <ul className='flex flex-col justify-start bg-white rounded-md gap-2 text-sm p-5'>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link className='text-black text-[12px]' onClick={toggleNav} to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                        <button className='block md:hidden mt-4 text-[12px] rounded-xl border hover:border-[#7A38FC] p-3 bg-[#7A38FC] hover:bg-transparent hover:text-black transition-colors duratiom-300'>
                            Get Started
                        </button>
                    </ul>
                </div>
            )}
        </nav>
    </>
  )
}

export default Navbar
