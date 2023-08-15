import React, { useEffect } from 'react'
import Hero from '../components/Hero';

const Main = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Hero />
        </div>
    )
}

export default Main