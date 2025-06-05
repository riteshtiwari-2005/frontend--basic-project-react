import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
  import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa";

export default function Signup(props) {

     const navigate = useNavigate();
  let[password,setpassword]=useState(false)
    let[cnfpswd,setcnfpsd]=useState(false)

  let[savesignup,setsavesignup]=useState({
  firstname:"",lastname:"",emailid:"",currentpassword:"",confirmpassword:""
})
const clickhandler=(e)=>{
    e.preventDefault();
if(savesignup.currentpassword.toLowerCase()===savesignup.confirmpassword.toLowerCase())
{
  props.setlogin(true);
    navigate("/dashboard")
    toast.success("login success",
        {
  style: {
    minWidth: '200px',
    maxWidth: '200px',
    fontSize: '18px',
  }}

);
}
else{
  toast.error("Password Not Match",
   {
  style: {
    minWidth: '400px',
    maxWidth: '400px',
    fontSize: '18px',
  }}

  )
}

  

}
const changepassword=()=>{
setpassword((prev)=>{ return !prev})
}


const tracker=(e)=>{
setsavesignup((prev)=>({
...prev,
[e.target.name]:e.target.value
}))
console.log(savesignup)
}

  return (
   <div className=' bg-[#000814] min-h-screen min-w-full overflow-auto  '>
    <form onSubmit={clickhandler}>

   <div className='max-w-[1160px] w-11/12  mx-auto gap-4  flex flex-col items-center lg:flex-row lg:space-x-8 justify-between items-center mt-10'>
              {/* left */}
              <div className='text-white w-11/12 max-w-[450px] mx-auto flex flex-col space-y-9  lg:order-1 order-2'>
                 <h1 className='font-bold text-4xl font-normal text-gray-300'>Join the millions learning to code with StudyNotion for free
</h1>
                 <div className='flex flex-col gap-4'>
   <p className=' font-normal text-2xl text-gray-300 '>Build skills for today, tomorrow, and beyond.</p> 
                 <span className='text-blue-200 text-xl '><i>Education to future-proof your career. </i> </span>
         
              </div>

<div className=' flex gap-3'>
  <div className='relative w-[50%] '>
<label htmlFor="" className='absolute top-[-30px]'>First Name</label>
    <input type="text" name="firstname" id="" placeholder='Enter your First Name' onChange={tracker} value={savesignup.firstname} className=' px-3 py-5 rounded-xl bg-[#161D29] w-full' required/>
  </div>
  <div className='relative w-[50%] '>
    <label htmlFor="" className='absolute top-[-30px]'>Last Name</label>
    <input type="text" name="lastname" id="" placeholder='Enter your Last Name' onChange={tracker} value={savesignup.lastname} className=' px-3 py-5 w-full rounded-xl bg-[#161D29]' required/>
  </div>
    
  
</div>
<div className='relative flex flex-col'>
  <label htmlFor="" className='absolute top-[-30px]'>Email Address</label>
  <input type="text" name="emailid" id="" placeholder='Enter Email Address' onChange={tracker}  value={savesignup.emailid} className='px-4 py-4 bg-[#161D29] rounded-xl ' required />
</div>
<div className=' flex gap-3'>
  <div className='relative w-[50%]'>
<label htmlFor="" className='absolute top-[-30px]'>Create Password</label>
    <FaEye className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'size={22} onClick={()=>{
      setpassword((prev)=>!prev)
    }}/>
    <input type={password?"text":"password"} name="currentpassword" id="" placeholder='Enter  Password' onChange={tracker} value={savesignup.currentpassword} className=' px-3 py-5 w-full rounded-xl bg-[#161D29]' required/>
  </div>
  <div className='relative w-[50%]'>
    <label htmlFor="" className='absolute top-[-30px]'>Confirm Password</label>
        <FaEye className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer'size={22} onClick={()=>{
      setcnfpsd((prev)=>!prev)
    }}/>

    <input type={cnfpswd?"text":"password"} name="confirmpassword" id="" placeholder='  Confirm Password' onChange={tracker} value={savesignup.confirmpassword} className=' px-3 py-5 w-full rounded-xl bg-[#161D29]' required/>
  </div>

  
</div>

    <button className='p-4 bg-yellow-400 rounded-xl hover:cursor-pointer'>Create Account</button>
    <div className="flex items-center gap-4 ">
  <hr className="flex-grow border-t border-gray-600" />
  <span className="text-gray-400 text-lg">OR</span>
  <hr className="flex-grow border-t border-gray-600" />
</div>
<button className='p-3 rounded-xl	flex items-center justify-center gap-3 border border-gray-600 hover:cursor-pointer'>
                <FcGoogle size={23}/>
                Sign in with google</button>
              
              </div>
              {/* right */}
              <div className='relative  w-11/12 max-w-[450px] mx-auto lg:order-2 order-1'  >
                  
                  <img src="https://codehelp-router-project.netlify.app/static/media/frame.3a238e5f26d676376e1d.png" alt="" width={558} height={504} />
                  
                  <img src="https://codehelp-router-project.netlify.app/static/media/signup.b431d919de01b6515dd6.png" alt="" width={558} height={504} className='absolute top-[-20px] right-6 bottom-6' />
              </div>
          </div>

    </form>
       
      </div>
  )
}
