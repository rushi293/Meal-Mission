import React from 'react'

const Bubbles = () => {
  return (
<div > 
        <div className='bg-purple-400/30 fixed  animate-circle h-80 w-80 rounded-full top-80 filter blur-md right-40 opacity-40 mix-blend-multiply'></div>
        <div className='bg-blue-200 fixed animation-delay-4000 mix-blend-multiply animate-circle h-72 w-72 rounded-full top-72 filter blur-md right-40 opacity-40 '></div>
        <div className='bg-red-300 fixed animation-delay-2000  mix-blend-multiply h-3 w-3 animate-circle rounded-full filter  opacity-40 top-48 left-36'></div>
        <div className='bg-blue-300 fixed animation-delay-2000  mix-blend-multiply h-3 w-3 animate-ping rounded-full filter  opacity-40 top-72 left-72'></div>
        <div className='bg-orange-300 fixed animation-delay-4000  mix-blend-multiply h-2 w-2 animate-rcircle rounded-full filter  opacity-40 top-80 left-72'></div>
        </div>  )

}

export default Bubbles
