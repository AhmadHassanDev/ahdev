import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ProjectsMap } from '../model/Project';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

const Project = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const { id } = useParams()
    return (
        <div>
            <span>
                <Navbar />
            </span>
            <div className='mt-5 w-full md:w-[40%] md:m-auto md:relative '>
                <img className='block rounded-none md:rounded-lg' src={require('../assets/img/' + ProjectsMap[id - 1].headerImg[0] + '.png')} alt="" />
                <div className='mt-7 ml-7 mr-5 md:absolute md:bottom-[-10%] md:left-[-40%]'>
                    <h1 className='md:text-8xl text-6xl font-bebas text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>
                        {ProjectsMap[id - 1].title}
                    </h1>
                </div>
            </div>

            <div className='md:mt-20 mt-2'>
                <h1 className='ml-7 md:ml-20 md:mt-44 mt-10 mb-2 font-bebas text-6xl text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Tools used</h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-xl'>The tools used in creating the projects</h1>
                <div className='flex flex-row ml-7 md:ml-20'>
                    <div className='flex'>
                        {[ProjectsMap[id - 1].toolsUsed.map((s) => (
                            <img key={s.id} className='md:w-full w-[30%] ml-4' src={require('../assets/img/' + s + '.svg')} alt="" />
                        )
                        )]}
                    </div>
                </div>
            </div>
            <div>
                <h1 className='ml-7 md:ml-20 mr-5 mt-10 mb-2 font-bebas text-6xl text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Project Details</h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-xl'>Details About the project</h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%]'> {ProjectsMap[id - 1].details} </h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%]'> {ProjectsMap[id - 1].details2} </h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%]'> {ProjectsMap[id - 1].details3} </h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%]'> {ProjectsMap[id - 1].details4} </h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%] underline hover:text-purple'>
                    <a href="https://www.tienda-eg.com"> {ProjectsMap[id - 1].liveProject}</a> </h1>
            </div>
            {/*<div>
                <h1 className='ml-7 md:ml-20 mt-10 mb-2 font-bebas mr-5 text-7xl text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red '>This Project is on Behance!</h1>
                <h1 className='ml-7 md:ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%] underline hover:text-purple'> {ProjectsMap[id - 1].behance}</h1>
                        </div>*/}
            <div>
                <h1 className='ml-7 md:ml-20 mt-10 mb-10 mr-5 font-bebas text-6xl text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Project Shots</h1>
                <div className='ml-10 mr-10'>
                    <ImageGallery showThumbnails={false} showPlayButton={false} items={ProjectsMap[id - 1].images} />
                </div>
            </div>
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default Project