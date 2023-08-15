import React from 'react'

import Heart from '../assets/img/heart.svg'
import Whatsapp from '../assets/img/whatsapp.svg'
import Insta from '../assets/img/insta.svg'
import Face from '../assets/img/face.svg'

const Footer = () => {
    return (
        <div className='mt-20 pb-5'>
            <div className='grid grid-cols-3 justify-between w-[90%] ml-[5%] mr-[5%]'>
                <div className='font-poppins-l custom:text-base text-[13px]'>
                    2022 AH - ©
                </div>
                <div className='text-[13px] font-poppins-l custom:text-base'>
                    Made with <img className='inline w-3 custom:w-7' src={Heart} alt="" />
                </div>
                <div className='mt-[-5px]'>
                    <a href='https://www.instagram.com/ahmaddhassan_/'> <img className='inline w-[17px] mx-2 custom:mx-3 custom:w-9 ' src={Insta} alt="" /> </a>
                    <a href="https://wa.me/+201119523790"> <img className='inline w-[13px] mx-2 custom:mx-3 custom:w-7' src={Whatsapp} alt="" /> </a>
                    <a href="https://www.facebook.com/profile.php?id=100001855956910"> <img className='inline w-[13px] mx-2 custom:mx-3 custom:w-7' src={Face} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

export default Footer