import React, { useRef, useEffect, useState } from 'react'
import { gsap, Power4 } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

import Logo from '../assets/img/logo.svg'
import Me from '../assets/img/me.png'
import Linked from '../assets/img/linked.svg'
import Behance from '../assets/img/behance.svg'
import Github from '../assets/img/github.svg'
import Work from './Work';
import Navbar from './Navbar';
import Footer from './Footer';


const Hero = () => {
    gsap.registerPlugin(TextPlugin);
    const navRef = useRef(null);
    const fristRef = useRef(null);
    const logoRef = useRef(null);
    const secondRef = useRef(null);
    const boxRef = useRef(null);
    const textRef = useRef(null);
    const workRef = useRef(null);

    const [animationPlayed, setAnimationPlayed] = useState(false);


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    useEffect(() => {
        const t1 = gsap.timeline({});
        const animationPlayedBefore = localStorage.getItem('animationPlayed');
        if (!animationPlayedBefore) {
            localStorage.setItem('animationPlayed', true);
            t1.fromTo(fristRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 2 });
            t1.from(logoRef.current, { rotation: 360 });
            t1.to(logoRef.current, { opacity: 0 });
            t1.fromTo(secondRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1 });
            t1.to(navRef.current, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1, opacity: 1 })
            t1.to(workRef.current, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1, opacity: 1 })
        } else {
            setAnimationPlayed(true);
            t1.fromTo(secondRef.current, { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1 });
            t1.to(navRef.current, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1, opacity: 1 })
            t1.to(workRef.current, { scaleX: 1, transformOrigin: 'left', ease: Power4.easeInOut, duration: 1, opacity: 1 })
        }
    }, [])

    useEffect(() => {
        gsap.from(boxRef.current, { opacity: 1, x: -150, stagger: 0.1, ease: "back", duration: 4 });

    })

    useEffect(() => {
        const t1 = gsap.timeline({ repeat: -1, repeatDelay: 2 });
        t1.to(textRef.current, { text: "Creative Developer", duration: 2, delay: 0 },);
        t1.to(textRef.current, { text: "UX Researcher", duration: 2, delay: 2 });
        t1.to(textRef.current, { text: "UI Designer", duration: 2, delay: 2 });
        t1.to(textRef.current, { text: "Front-end Developer", duration: 2, delay: 2 });
    });

    return (
        <div>
            <span ref={navRef} style={{ opacity: 0 }}>
                <Navbar />
            </span>
            <div ref={fristRef} className=' w-screen bg-primary z-50 '>
                <div className='flex justify-center' >
                    <img ref={logoRef} className={`m-auto top-52 left-0 right-0 ${animationPlayed ? "opacity-0" : "absolute"}`} src={Logo} alt="" />
                    <div ref={secondRef} >
                        <div className='grid custom:grid-cols-8 mt-20'>
                            <div ref={boxRef} className='w-fit custom:ml-32 overflow-hidden col-span-5 text-left ml-[50px] md:ml-7 custom:justify-start'>
                                <h1 className='text-xl font-poppins-r ml-1'> Hey, my name is</h1>
                                <h1 className='text-9xl mt-1 mb-5 font-bebas text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Ahmed Hassan</h1>
                                <h1 className='text-3xl mb-5 font-poppins-sb'>And i am a <span className='text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red' ref={textRef}></span></h1>
                                <h1 className='text-base max-w-md w-[90%] font-poppins-l'>A real full stack front-end experience at the palms of your hand! creating your next digital experience from scratch is my passion, UX Research, UI Design, and Front-end development on demand
                                </h1>
                                <ul className='flex mt-10'>
                                    <li className='mb-8 mr-7'> <a rel="noreferrer" href="https://www.linkedin.com/in/ahmed-mohamed-hassan-30550b1b6/" target="_blank"> <img className='w-12' src={Linked} alt="" /></a></li>
                                    <li className='mb-8 mr-7'> <a rel="noreferrer" href="https://www.behance.net/ahdev" target="_blank"> <img className='w-12' src={Behance} alt="" /></a></li>
                                    <li className='mb-8'> <a rel="noreferrer" href="https://github.com/AhmedHassanMeso/" target="_blank"> <img className='w-12' src={Github} alt="" /></a></li>
                                </ul>
                            </div>
                            <div className='flex w-full md:w-5/6 ml-[-3.5rem] mt-10 md:mt-0 md:ml-14 custom:ml-0 col-span-3 justify-self-center'>
                                <div className='flex justify-self-center mt-10'>
                                    <img className={`heroImg object-scale-down pr-10  ${animationPlayed ? "pl-0" : "pl-[75px]"} `} src={Me} alt="Ahmed Hassan" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ opacity: 0 }} ref={workRef} >
                <Work />
            </div>
            <div className='text-center'>
                <Footer />
            </div>
        </div >
    )
}

export default Hero