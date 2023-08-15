import React from 'react'
import Owl from '../components/Owl'
import { useNavigate } from "react-router-dom";

import Project from './Project'
import ArrowAlt from '../assets/img/arrowAlt.svg'
import FormCTA from './FormCTA'
import Skills from './Skills'
import Quote from './Quote'
import Weatherly from '../assets/img/weatherly.png'
import Tienda from '../assets/img/tienda.png'
import Jpadel from '../assets/img/jpadel.png'

const Work = () => {
    const navigate = useNavigate()
    return (
        <div className='custom:mt-[0%] bg-primary'>
            <div className='w-full flex justify-center'>
                <h1 className='text-8xl max-w-fit text-center mt-20 font-bebas text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red'>
                    My Work
                </h1>
            </div>
            <div className='w-full flex justify-center mt-3'>
                <h1 className=' text-center mb-5 font-poppins-sb text-3xl w-5/6'>
                    Below you’ll find some of my favourite projects
                </h1>
            </div>
            <div className='cursor-pointer' onClick={() => navigate("projects/2")}>
                <Project title="Weatherly" body="Weatherly is a premuim weather application that focuses on beautiful UI while 
            creating robust and great features. Weatherly features Big Bold icons, stunning Typography, and great features like
            7 day forecasts, Weather alerts and notifications, and much more!" img={Weatherly} />
            </div>
            <div className='cursor-pointer' onClick={() => navigate("projects/1")}>
                <Project title="Tienda" body="Tienda-EG is a POS system, that supplies it's clients with excellent POS devices and software,
                they have alot of platform leading features and over 40 satsified clients that vouch for thier excellence" img={Tienda} />
            </div>
            <div className='cursor-pointer' onClick={() => navigate("projects/3")}>
                <Project img={Jpadel} title={"JPadel App Redesign"} body={"JPadel is an egyptian Padel tennis leader and innovater, they have a flutter application on both the App and Play stores that enables you to reserve courts, sign up to tournaments, and much more. This is a redesign of thier application!"} />
            </div>
            <div onClick={() => navigate("/projects")} className='cursor-pointer flex w-full pb-[7%] text-8xl float-left pt-5 custom:pt-10 bg-primary '>
                <h1 className='inline ml-[5%] mt-[2%] text-5xl custom:text-8xl text-left text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red font-bebas'>
                    All Projects
                </h1>
                <img className='w-[10%] ml-2' src={ArrowAlt} alt="" />
            </div>
            <div className='bg-lightDark custom-mt-20'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-8xl max-w-fit text-center mt-20 font-bebas text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red'>
                        Skills & Expertise
                    </h1>
                </div>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-poppins-sb mt-3 w-[92%] text-center'>Real Fullstack front-end experience</h1>
                </div>
                <div className='w-full flex justify-center pt-10'>
                    <h1 className='text-lg font-poppins-l text-center w-[85%]'>
                        Being a Computer Science graduate, technicalities are of immense importance to me, but I have gone on to discover how equally important it is to have a user centered design and plan in order for your application or service to be met with any success. That's why I went on to learn UX Research, UI Design, and became versed with the latest design tools and fundamentals
                    </h1>
                </div>
                <Owl />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Quote />
            </div>
            <div>
                <FormCTA />
            </div>
        </div >
    )
}

export default Work