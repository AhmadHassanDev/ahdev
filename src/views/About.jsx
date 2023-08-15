import React, { useRef, useEffect } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import gsap from 'gsap';
import Grad from '../assets/img/grad.svg'
import OwlBooks from '../components/OwlBooks'
import AboutImg from '../assets/img/about.png'


const About = () => {
    const about = gsap.timeline({ repeat: 0 });
    const aboutH1 = useRef(null);
    const aboutNav = useRef(null);
    const aboutBody = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        about.from(aboutNav.current, {
            duration: .2,
            x: -100,
            opacity: 0,
        })
        about.from(aboutH1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        })
        about.from(aboutBody.current, {
            duration: .5,
            y: -200,
            opacity: 0,
        })
    }, [about])

    return (
        <div>
            <span ref={aboutNav}>
                <Navbar />
            </span>
            <div>
                <h1 ref={aboutH1} className='pt-10 text-center w-[90%] ml-[5%] mr-[5%]
                text-8xl font-bebas'>
                    Just A little Bit <br /> <span className='text-transparent bg-clip-text  
                 bg-gradient-to-r from-cyan via-purple to-red'>About Me</span>
                </h1>
                <div ref={aboutBody} className='grid grid-cols-1 custom:grid-cols-2 pt-20'>
                    <div className='w-[90%] ml-[5%] mr-[5%] text-left font-poppins-r text-xl'>
                        <h1 className='w-[70%] ml-[15%] mr-[15%] '>
                            Hey there, my name is Ahmed Hassan, an Egyptian 24 years old CS Graduate.
                            I graduated from MIU in the year 2021, and graduating, i have been creating multiple web experiences for different clients and companies
                        </h1>
                        <h1 className='w-[70%] ml-[15%] mr-[15%] pt-10' >
                            I discovered my love for design and creative development early on even
                            before the college days, and kept on developing these traits
                            and taking as much courses and tutorials as i can to further develop myself.
                        </h1>
                        <h1 className='w-[70%] ml-[15%] mr-[15%] pt-10' >
                            I have created many projects and websites for multiple big-name clients like JPadel, Sesame Club, Kingdom Centre, and much more!
                            I Hope to keep on creating more and more projects and websites, and to keep on learning and developing myself.
                        </h1>
                    </div>
                    <div>
                        <img className='rounded-full w-[60%] m-auto md:mt-0 mt-6' src={AboutImg} alt="" />
                    </div>
                </div>
                <div className='pt-14 flex justify-center items-center'>
                    <a href='https://drive.google.com/file/d/1MLxZhMEk5m9IWjG0M2hCBK8jhwqVVgBy/view?usp=sharing' target='_blank' download>
                        <button className='rounded-lg bg-purple font-bebas text-3xl w-40 h-14'>
                            <img src={Grad} className="inline w-7" alt="" /> CV
                        </button>
                    </a>
                </div>
                <h1 className='text-center text-6xl font-bebas pt-20 w-[90%] m-auto'>Some Stuff i am  <span
                    className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> passionate about </span></h1>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Programming
                        <span className='custom:text-5xl text-3xl'> 💻</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Thankfully enough,
                        I am someone that actually enjoys what I do, I actually love
                        opening my IDE, typing some code, and watching the magic happen on the
                        screen. Learning new frameworks and ways to develop are always a welcome challenge, and being
                        always up to date and informed with the latest Tech-stacks is essential to me.
                    </h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Design & UX
                        <span className='custom:text-5xl text-3xl'> ✒️</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>I firmly believe that a good user experience is what makes or breaks any digital
                        product, and it goes hand in hand with a beautiful and seamless UI. No digital product can ever hope to do well
                        without investing heavily in optimizing it's UX/UI.
                    </h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Arsenal
                        <span className='custom:text-5xl text-3xl'>  💣</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Football and the Gunners in particular are something I love and
                        cherish beyond reason. I have been a diehard fan of the club since their
                        undefeated campaign in the 2004 season.
                    </h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Self-Improvment
                        <span className='custom:text-5xl text-3xl'>  📚</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Being a better version of myself is something
                        that I always keep at the top of my priorities, reading a new book, developing a new skill, even practicing a hobby.
                        Books like Atomic Habits are a game changer and are what inspired this self-improvement craze.
                    </h1>
                </div>
            </div>
            <h1 className='text-center text-6xl font-bebas pt-20'><span
                className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> Favourite Quote </span></h1>
            <h1 className='text-center text-6xl font-bebas pb-5 pt-10 w-[90%] m-auto'>"It always seems impossible until it’s done"</h1>
            <h2 className='text-center text-3xl font-poppins-l'>-Nelson Mandela-</h2>
            <h1 className='text-center text-6xl font-bebas pb-10 pt-20'>Some of my<span
                className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> Favourite Books </span></h1>
            <OwlBooks />
            <span className='text-center'>
                <Footer />
            </span>
        </div >
    )
}

export default About