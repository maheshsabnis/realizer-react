import React, { useEffect, useState } from 'react'

const MouseMoveComponent = () => {
 const [x, setX] = useState(0);
 const [y, setY] = useState(0);

 const getMousePostions=(evt)=>{
    setX(evt.clientX); // x-postion
    setY(evt.clientY); // y-position

    console.log(`x :=> ${x} and y :=> ${y} `);
 };

 useEffect(()=>{
    // Subscribe to the mousemove event in for current
    // browser instance (global event) ComponentDidMount
    window.addEventListener('mousemove', getMousePostions);
    
    return(()=>{
        // componentWillUnMount lifecycle hook
        window.removeEventListener('mousemove', getMousePostions);
      });
     }, [] );



 return (
    <div className='container'>
         X-postion : {x} && Y-position : {y}       
    </div>
  )
}

export default MouseMoveComponent;
