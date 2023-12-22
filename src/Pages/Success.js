import React from 'react'
import "./success.css"
import image1 from "../image/1.png";
import { useSelector } from "react-redux"

const Success = () => {
  const user = useSelector((state)=>{
    return state.user
 })

 const para = user.Token ? (
  <div>
    <p className='card-name'>{user.name}</p>
    <p className='card-email'>{user.mail_id}</p>
    <p className='card-regno'>{user.reg_no}</p>
    <p className='card-token'>{user.Token}</p>
  </div>
) : (
  <div>
  <p className='card-name'>Already</p>
  <p className='card-regno'>Registered</p>
  </div>
);

//  const para = 

  return (
    <div class="card">
    <div class="overlay"></div>
    <div class="circle">
    <img className='ct' src={image1} alt="loading" />
    </div>
    
   {para}
    
  </div>
  )
}

export default Success