import React, { useRef, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import gsap from 'gsap';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

import { ProjectsMap } from '../model/Project';

const Projects = () => {
    const navigate = useNavigate()
    const projectsH1 = useRef(null);
    const projectsNav = useRef(null);
    const projectsBody = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const projects = gsap.timeline();
        projects.from(projectsNav.current, {
            duration: .2,
            x: -100,
            opacity: 0,
        })
        projects.from(projectsH1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        })
        projects.from(projectsBody.current, {
            duration: .5,
            y: -200,
            opacity: 0,
        })
    }, [])


    return (
        <div>
            <span ref={projectsNav}>
                <Navbar />
            </span>
            <div ref={projectsH1} className='mt-20 mb-10 text-center w-[95%] mr-[2.5%] ml-[2.5%]'>
                <h1 className='text-8xl font-bebas'>All My <span className='text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Work</span></h1>
                <h1 className='font-poppins-r text-xl pt-5 w-[90%] text-center
                mr-[5%] ml-[5%]'>
                    Below you will find a list of all of my work,
                    this section will be updated soon, stay tuned!
                </h1>
            </div>
            <div>
                <div ref={projectsBody} className='grid grid-cols-1 items-center justify-center 
                    text-center custom:grid-cols-2 w-[95%] mr-[2.5%] ml-[2.5%] mt-10'>
                    {[ProjectsMap.map((s) => (
                        <div key={s.id} onClick={() => navigate(`${s.id}`)}
                            className='bg-dark w-[90%] mr-[5%] ml-[5%] h-[450px] 
                        custom:w-[90%] custom:ml-[5%] custom:mr-[10%] custom:h-[500px]
                        custom:mb-20 mb-2  mt-14 rounded-xl'>
                            <img style={{ background: "radial-gradient(transparent, black)," }}
                                className='w-full object-cover h-full rounded-xl' src={require('../assets/img/' + s.imgTitle + '.png')} alt="" />
                        </div>
                    )
                    )]}
                </div>
            </div>
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default Projects