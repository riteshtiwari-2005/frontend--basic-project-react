import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
  import { ToastContainer, toast } from 'react-toastify';
import { FaEyeSlash } from "react-icons/fa";

export default function Login(props) {
  const navigate = useNavigate();
  let[password,setpassword]=useState(false)
  let[savelogindata,setseavelogindata]=useState({
    email:"",
    password:""
  })
const changelogin=(e)=>{
setseavelogindata((prev)=>({
  ...prev
  ,[e.target.name]:e.target.value
}))
console.log(savelogindata)
}

const clickhandler=(e)=>{
  e.preventDefault();
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
const changepassword=()=>{
setpassword((prev)=>{ return !prev})
}
  return (
    <div className=' bg-[#000814] min-h-screen min-w-full overflow-auto  '>
      <form action="
      " onSubmit={clickhandler}>
 <div className='lg:max-w-[1080px] max-w-[80%]  mx-auto  flex flex-col lg:flex-row justify-between  mt-10 lg:space-x-8'>
            {/* left */}
            <div className='text-white  flex flex-col gap-6 lg:order-1 order-2  '>
               <h1 className='font-bold text-4xl font-normal text-gray-300'>Welcome Back</h1>
               <div className='flex flex-col gap-4'>
 <p className=' font-normal text-2xl text-gray-300 '>Build skills for today, tomorrow, and beyond.</p> 
               <span className='text-blue-200 text-xl '><i>Education to future-proof your career. </i> </span>
               </div>
              <div className='flex flex-col'>
  <label htmlFor="">Email Address</label>
               <input type="text" name="email" id="" placeholder='Enter Email Addrees'  
              onChange={changelogin} className='p-4 bg-[#161D29] rounded mt-3 ' value={savelogindata.email} required />

              </div>
           <div className="flex flex-col gap-2 text-white">
  <label htmlFor="password">Password</label>

  <div className="relative">
    <input
      type={password?"text":"password"}
      id="password"
      placeholder="Enter Password"
      name='password' 
     onChange={changelogin} 
     alue={savelogindata.password}
      className="w-full p-4 bg-[#161D29] rounded pr-12 outline-none"
      required
    />
    {

password?(
        <FaEye className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={28} onClick={changepassword} />

):(
        <FaEyeSlash className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" size={28} onClick={changepassword} />

)
    }
  </div>

  <span className="text-blue-400 text-sm ml-auto hover:underline cursor-pointer">
    Forgot Password?
  </span>
</div>

             

               <button className='p-3 rounded-xl text-black-100 bg-yellow-400 hover:cursor-pointer' >Sign In</button>
               {/* or remaning */}

<div className="flex items-center gap-4 my-6">
  <hr className="flex-grow border-t border-gray-600" />
  <span className="text-gray-400 text-lg">OR</span>
  <hr className="flex-grow border-t border-gray-600" />
</div>
              
               <button className='p-3 rounded-xl	flex items-center justify-center gap-3 border border-gray-600'>
                <FcGoogle size={23}/>
                Sign in with google</button>
            </div>
            {/* right */}
            <div className='relative  lg:order-2 order-1 mx-auto ' >
                
                <img src="https://codehelp-router-project.netlify.app/static/media/frame.3a238e5f26d676376e1d.png" alt="" width={558} height={504} />
                
                <img src="https://codehelp-router-project.netlify.app/static/media/login.4d877a447365e5137b67.png" alt="" width={558} height={504} className='absolute top-[-20px] bottom-4 right-5' />
            </div>
        </div>

      </form>
       
    </div>
  )
  
}
