import React, { useEffect, useState } from 'react';
// import { Navigate } from 'react-router';
import {useNavigate} from 'react-router-dom'

function Loginform() {
  const navigate = useNavigate();
const [logdata,setLogData] = useState([{}]);

const goToHome =()=>{
// e.preventDefault()
  const getlogindetails = JSON.parse(localStorage.getItem('logindetails'));
  console.log("getlogindetails",getlogindetails);

   if(getlogindetails){
    console.log("navigate");
    navigate('/home');
   }
}

console.log(navigate);
    



const handlechange = (e)=>{
  const {name,value} = e.target
  setLogData(val => ({...val, [name]:value}));
  console.log(setLogData);
}

const handlesubmit = (e)=>{
  localStorage.setItem('logindetails', JSON.stringify(logdata));

  e.preventDefault();
  console.log(logdata);

}
return (
    <>
    <div className='container'>
      <h2 className='py-5 text-center'>LoginForm</h2>
      <form >
      <div className='row'>
        
          <label>USERNAME:</label>
          <div className='col'>
          <input type="text" name="name" value={logdata.username} onChange={handlechange}></input>
        </div>
        
        <label>EMAIL:</label>
        <div className='col'>
          <input type="email" name="email" value={logdata.email} onChange={handlechange}></input>
        </div>

        <label>PASSWORD:</label>
        <div className='col'>
          <input type="password" name="password" value={logdata.password} onChange={handlechange}></input>
        </div>


      </div>

      <div className='pt-5 text-center'>
        <button type='submit' className='btn btn-primary'onClick={handlesubmit}>SUBMIT</button>
        <button type='button' className='btn btn-primary m-3' onClick={goToHome}>Login</button>

      </div>
  </form>

    </div>

    </>
  )
}

export default Loginform