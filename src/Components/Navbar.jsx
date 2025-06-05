import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar(props) {
      const navigate = useNavigate();
    
    const login=props.login
  return (
    <div className="w-full h-[80px] bg-[#000814]">
      <div className="max-w-[1160] w-11/12 h-[90%] mx-auto  flex justify-between items-center ">
        <Link to="/">
          <img
            src="https://codehelp-router-project.netlify.app/static/media/Logo.0d90853fa1468dbe2d8d82c0ea06b8b1.svg"
            alt=""
            width={160}
            height={30}
          />
        </Link>
        <ul className="text-white flex gap-4">
            <li  className="font-normal hidden lg:block
 text-gray-300"><Link to=""> Home</Link></li>
             <li className="font-normal hidden lg:block
 text-gray-300"><Link to=""> About</Link></li>
            <li className="font-normal hidden lg:block
 text-gray-300"><Link to=""> Contact</Link></li>

        </ul>
        <div className="text-white flex gap-4">
          <GiHamburgerMenu size={34} className="block lg:hidden   "/>
{ !login ? (
    <>
    
           <Link to="/login"><button className="p-3 border shadow shadow-gray-200 bg-[#161D29] rounded hover:cursor-pointer hidden lg:block">Log in</button>  </Link> 
           <Link to="/signup"><button className="p-3 border shadow shadow-gray-200 bg-[#161D29] rounded hover:cursor-pointer hidden lg:block">Sign Up</button>  </Link> 
           </>
):(
    <>
   
            <Link to="/login"><button className="p-3 border shadow shadow-gray-200 bg-[#161D29] rounded hover:cursor-pointer hidden lg:block" onClick={()=>{
                props.setlogin(false)
                toast.error("Logout",
                     {
  style: {
    minWidth: '200px',
    maxWidth: '200px',
    fontSize: '18px',
  }}
                )
                navigate('/login')

            }}>Log out</button>  </Link> 
           <Link to="/signup"><button className="p-3 border shadow shadow-gray-200 bg-[#161D29] rounded hover:cursor-pointer hidden lg:block">Dashboard</button>  </Link> 
            </>
)
}   
        </div>
      </div>
    </div>
  );
}
