import React, { useState } from 'react'
import MouseMoveComponent from './mousemovecomponent';

const ToggleComponent = () => {
  const [canShow, show] = useState(true);  
  return (
    <div className='container'>
        {/* if canShow  is true, the click will make it false and videversa */}
       <button
         onClick={()=>show(!canShow)}
       >Toggle</button>
       {
          canShow && <MouseMoveComponent></MouseMoveComponent>
       }
    </div>
  )
}

export default ToggleComponent;
