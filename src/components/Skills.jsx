import React from 'react'

import UI from '../assets/img/uidesign.svg'
import UX from '../assets/img/uxresearch.svg'
import Dev from '../assets/img/development.svg'


const Skills = () => {
    return (
        <div className='bg-primary pt-[10px] mt-[-1%]'>
            <div className='grid custom:grid-cols-3 gap-10 custom:gap-0 justify-center items-center mt-10 custom:mt-0  custom:pt-32 lg:px-20'>
                <div>
                    <h1 className='text-center font-bebas text-4xl  mb-8'>
                        UX Research
                    </h1>
                    <div className='flex justify-center items-center'>
                        <div className=' flex items-center justify-center flex-col w-[70%] bg-dark h-[27rem] rounded-xl'>
                            <img className='w-36' src={UX} alt="" />
                            <h1 className='w-[80%] font-poppins-l mt-[5%] text-center'>
                                No digital experience can compete and win on the market without a good user focused mentality and strong understanding of the market and what their users actually need and think of their product and other competitive products too
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center font-bebas text-4xl mb-8'>
                        UI Design
                    </h1>
                    <div className='flex justify-center items-center'>
                        <div className=' flex items-center justify-center flex-col w-[70%] bg-dark h-[27rem] rounded-xl'>
                            <img className='w-36' src={UI} alt="" />
                            <h1 className='w-[80%] font-poppins-l mt-[5%] text-center'>
                                A Good UI can make the difference between a great experience and a bad one, people appreciate beautiful applications and are more likely to use them over poorly designed ones even if the both of them give the same result
                            </h1>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-center font-bebas text-4xl mb-8'>
                        Front-end Development
                    </h1>
                    <div className='flex justify-center items-center'>
                        <div className=' flex items-center justify-center flex-col w-[70%] bg-dark h-[27rem] rounded-xl'>
                            <img className='w-36' src={Dev} alt="" />
                            <h1 className='w-[80%] font-poppins-l mt-[5%] text-center'>
                                Transforming the UX/UI Designs to a real live application is the last step of creating
                                your perfect experience. Using the most up to date frameworks and methods to create the perfect
                                service for you is my priority
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills