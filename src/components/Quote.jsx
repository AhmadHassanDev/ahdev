import React from 'react'

const Quote = () => {
    return (
        <div>
            <div className='grid grid-rows-2 w-[80%] ml-[10%] mr-[10%]
            custom:w-[90%] custom:ml-[5%] custom:mr-[5%] pt-20 custom:pt-40'>
                <h1 className=' custom:pb-0 pb-6  text-5xl text-left custom:text-9xl font-bebas'>Do what you <span
                    className='text-transparent bg-clip-text  
                                bg-gradient-to-r from-purple to-red'>love</span></h1>
                <h1 className='text-right text-5xl custom:text-9xl font-bebas'><span className='text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan to-purple'> love </span> what you do</h1>

            </div>
        </div>
    )
}

export default Quote