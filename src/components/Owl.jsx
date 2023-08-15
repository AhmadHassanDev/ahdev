import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Github from '../assets/img/github.svg';
import ReactIcon from '../assets/img/react.svg';
import Vue from '../assets/img/vue.svg';
import Tailwind from '../assets/img/tailwind.svg';
import Bootstrap from '../assets/img/bootstrap.svg';
import Node from '../assets/img/node.svg';
import Flutter from '../assets/img/flutter.svg';
import Git from '../assets/img/git.svg';
import Figma from '../assets/img/figma.svg';
import Xd from '../assets/img/xd.svg';
import Illustrator from '../assets/img/illustrator.svg';

const Owl = () => {
    let items = 6;
    const [windowDimenion, detectHW] = useState({
        winWidth: window.innerWidth,
        winHeight: window.innerHeight,
    })

    const detectSize = () => {
        detectHW({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        })
    }

    useEffect(() => {
        window.addEventListener('resize', detectSize)

        return () => {
            window.removeEventListener('resize', detectSize)
        }
    }, [windowDimenion])


    return (
        <div className='pt-16 pb-20 mx-10 bg-lightDark'>
            <div className='hidden'>
                {windowDimenion.winWidth > 900 ? items = 8 : items = 4}
                {windowDimenion.winWidth > 900 ? items = 8 : items = 4}
            </div>
            <OwlCarousel items={items} dots={false} autoplay={true}
                autoplayTimeout={3000} slidetransition={'linear'} autoplaySpeed={3000}
                fluidSpeed={3000} animateIn={true}
                autoplayHoverPause={false} className='owl-theme' loop={true} margin={1} nav={false}>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1' alt="" src={ReactIcon} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Vue} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Tailwind} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Bootstrap} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Node} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Flutter} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Git} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Figma} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Xd} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Illustrator} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Github} />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default Owl