import {useState} from 'react';
const SimpleCalculatorComponent=()=>{
    // Data State lets define state
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    const [z,setZ] = useState(0);

    // Updating State 
    const clear=()=>{
        setX(0);
        setY(0);
        setZ(0);
    };

    const add=()=>{
        setZ(x + y);
    };

    // UI
    return(
        <div className='container'>
            <div className='form-group'>
                <label>X</label>
                <input type="text" className='form-control'
                 value={x} onChange={(evt)=>setX(parseInt(evt.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Y</label>
                <input type="text" className='form-control'
                value={y} onChange={(evt)=>setY(parseInt(evt.target.value))}/>
            </div>
            <div className='form-group'>
                <label>Z</label>
                <input type="text" className='form-control'
                value={z} readOnly/>
            </div>
            <div className='btn-group-lg'>
                <button className='btn btn-success' onClick={add}>Add</button>
                <button className='btn btn-danger' onClick={clear}>Clear</button>
            </div>
        </div>
    );
};

export default SimpleCalculatorComponent;