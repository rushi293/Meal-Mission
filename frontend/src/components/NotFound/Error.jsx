import React, { useEffect } from 'react'
import { useState } from 'react'

const Error = (props) => {
  const [visible, setvisible] = useState(true);
  useEffect(()=>{
    const timer=setTimeout(()=>{
      setvisible(false);
    },3000);
    return ()=>clearTimeout(timer);
  });
  return visible?(<div className='w-80 drop-shadow-2xl fixed top-20 right-2'>
      <div role="alert" className="rounded border-s-4 border-red-500 bg-red-50 p-4">
  <strong className="block font-medium text-red-800"> {props.title} </strong>

  <p className="mt-2 text-sm text-red-700">
{props.description}
  </p>
</div>
    </div>):null;
}

export default Error