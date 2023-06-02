import React, { useState } from 'react'

const FormValidationComponent = () => {
  const [emp,setEmp] = useState({EmpNo:0,EmpName:''}); 

  const [isEmpNoValid, checkEmpNoValid] = useState(true);

  const [isEmpNameValid, checkEmpNameValid] = useState(true);

  const [isFormValid, checkFormValid] = useState(true);

  const submit=()=>{

  };

  const validate=(name,value)=>{
    //  if(name === "EmpNo") setEmp({...emp, EmpNo: parseInt(value)});
    //  if(name === "EmpName") setEmp({...emp, EmpName:value});
     // validate EmpNo
     if(name === 'EmpNo' && parseInt(value) < 0) {
        checkEmpNoValid(false);
        checkFormValid(false);
     } else {
        checkEmpNoValid(true);
        checkFormValid(true );
     }

     // validate EmpName

     if(name === 'EmpName' && (value.length === 0 || value.length > 10)){
            checkEmpNameValid(false);
            checkFormValid(false);
     } else {
        checkEmpNameValid(true);
        checkFormValid(true);
     }

     console.log(`EmpNo valid ${isEmpNoValid} and EmpName valid ${isEmpNameValid}`);
  };

  return (
    <div className='contaner'>
        <form name="frmEmp">
            <div className='form-group'>
                <label>EmpNo</label>
                <input type="text" value={emp.EmpNo} name="EmpNo"  onChange={(evt)=>{
                    setEmp({...emp, EmpNo:parseInt(evt.target.value)})
                    validate(evt.target.name, evt.target.value);
                    }} className='form-control'/>
                 {/* div tag will be hidden if value for EmpNo is valid as per the logic in validate() method  */}
                <div className='alert alert-danger'
                  hidden={isEmpNoValid}>
                    EmpNo must be -ve integer
                </div>
            </div>
            <div className='form-group'>
                <label>EmpName</label>
                <input type="text" value={emp.EmpName} name="EmpName" onChange={(evt)=>{
                    setEmp({...emp,EmpName:evt.target.value}); 
                    validate(evt.target.name, evt.target.value);
                    }} className='form-control'/>
                   {/* div tag will be hidden if value for EmpName is valid as per the logic in validate() method  */}
                <div className='alert alert-danger'
                 hidden={isEmpNameValid}>
                    EmpName is must and can be maximum 10 characters in length
                </div>
            </div>
            <div className='btn-group-lg'>
                <input type="submit" value="Submit" className='btn btn-success'
                 disabled={!isFormValid}/>
            </div>
        </form>
    </div>
  )
}

export default FormValidationComponent;
