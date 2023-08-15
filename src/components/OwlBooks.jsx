import React, { useState, useEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import LeanUx from '../assets/img/leanux.jpg';
import RUI from '../assets/img/rui.jpg';
import Atomic from '../assets/img/atomic.jpg';
import TheDesign from '../assets/img/thedesign.jpg';
import Think from '../assets/img/think.jpg';
import Ego from '../assets/img/ego.png';
import Team from '../assets/img/team.png';
import Sprint from '../assets/img/sprint.png';
import Hooked from '../assets/img/hooked.png';
import Thinking from '../assets/img/thinking.png';
import FortyEight from '../assets/img/48.png';

const OwlBooks = () => {
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
        <div className='pt-16 pb-5 mx-10'>
            <div className='hidden'>
                {windowDimenion.winWidth > 900 ? items = 6 : items = 2}
                {windowDimenion.winWidth > 900 ? items = 6 : items = 2}
            </div>
            <OwlCarousel items={items} dots={false} autoplay={true}
                autoplayTimeout={3000} slidetransition={'linear'} autoplaySpeed={3000}
                fluidSpeed={3000} animateIn={true}
                autoplayHoverPause={false} className='owl-theme' loop={true} margin={1} nav={false}>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1' alt="" src={RUI} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Atomic} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={TheDesign} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Think} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Ego} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Team} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={LeanUx} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Hooked} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Thinking} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={FortyEight} />
                </div>
                <div className='item'>
                    <img className=' w-full custom:px-5 px-1 md:px-2' alt="" src={Sprint} />
                </div>
            </OwlCarousel>
        </div>
    )
}

export default OwlBooks