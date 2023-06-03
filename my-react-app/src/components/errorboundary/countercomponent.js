import React, { useState } from 'react'

const CounterComponent = () => {
    let [counter, setCounter] = useState(0);
    const [message,setMessage]= useState('');
    
    const increment = ()=>{
        
        setCounter(counter++);
    }

    const SuccessUI=()=>{
        return (
            <div className='container'>
               <strong>Current Value : {counter}</strong>
               <br/>
               <button className='btn btn-warning' onClick={increment}>Increment</button>
               <br/>
               <strong>{message}</strong>
            </div>
          )
    };

   /* Handle Exception during rendering aka returning the HTML */
    try {
        if(counter>5) 
             throw new Error("Sorry!! You have reached to max clicks...");
        return SuccessUI();
    } catch(e){
         return (
             <div>
                <strong>{message}</strong>
                   { FallbackUIComponent(e.message)}
             </div>   

         ); 

    }
    
}
/* Errorr Component */
const FallbackUIComponent=(msg)=>{
    return (<div className='alert alert-danger'>
         <strong>
            Some Error Occurred : {msg} 
         </strong> 
        
     </div>);
 };



 
 const PerentComponent = () => {
   return (
     <div className='container'>
        <div className='form-group'>
            <CounterComponent></CounterComponent>
        </div>
        <button className='btn btn-danger'>Parent Button</button>
     </div>
   )
 }
 
 export default PerentComponent;
 
 
