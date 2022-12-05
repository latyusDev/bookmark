import React from "react";
import logo from '../IMAGES/logo-bookmark.svg'
import logo2 from '../IMAGES/logo-bookmark2.svg'
import hamburger from '../IMAGES/icon-hamburger.svg'
import close from '../IMAGES/icon-close.svg'
import Button from "../BUTTON/button";
import { useState } from "react";

const Header = ()=>{
  const[header, setHeader] = useState(true)
    return(
        <header className={`${header ? "md:px-5 xl:px-0 z-[9999]  " : "md:px-5 xl:px-0 z-[9999]  bottom-0 md:bottom-auto  bg-d_blue md:bg-white opacity-[0.9] md:gopacity-[1h] fixed top-0 right-0 left-0 md:static "}`}>
            <div className="container ">
            <nav className="flex  flex-col md:flex-row justify-between items-center font-rubik px-8 pt-10  md:pt-9 lg:px-0">
              <div className="flex  justify-between  items-center w-[100%] md:w-auto">
              <div>
                <img src={header ? logo : logo2} alt="logo" className="md:hidden"/>
                <img src={logo} alt="logo" className="hidden md:block"/>
              </div>
              <div className="md:hidden" onClick={()=>setHeader(!header)}>
                <img src={header ? hamburger : close} alt="logo"  className="md:hidden"/>
              </div>
              
              </div>
           <div className={` w-[100%] md:w-auto mt-9  md:mt-0 ${ header  && 'hidden md:block' }`} >
           <div className="flex flex-col items-center md:flex-row gap-[3rem] ">
           <ul className="flex flex-col md:flex-row md:gap-[2.6rem] w-[100%] md:w-auto border-t border-g_blue md:border-none text-[1.27rem] md:text-[0.93rem] items-center text-white md:text-d_blue font-4 md:font-5">
                <li className="text-center  md:text-left py-4 md:py-0 border-b border-g_blue md:border-none w-[100%] md:w-auto"><a href="#" className="uppercase tracking-[0.1rem] md:tracking-[0.01rem]   hover:text-s_red">Features</a></li>
                <li className="text-center  md:text-left py-4 md:py-0 border-b border-g_blue md:border-none w-[100%] md:w-auto"><a href="#" className="uppercase tracking-[0.1rem] md:tracking-[0.01rem]   hover:text-s_red"> Pricing</a></li>
                <li className="text-center  md:text-left py-4 md:py-0 border-b border-g_blue md:border-none w-[100%] md:w-auto"><a href="#" className="uppercase tracking-[0.1rem] md:tracking-[0.01rem]   hover:text-s_red">Contact</a></li>
            </ul>
            <div className="w-[100%] md:w-auto">
                <Button 
                btnStyle="bg-d_blue md:bg-s_red text-white uppercase font-rubik font-4 text-[1.27rem] md:text-[0.8rem]
                py-[0.56rem] md:py-[0.46rem] px-[1.77rem]  rounded-[5px]  uppercase border-[2px]
                 w-[100%] md:w-auto tracking-[0.19rem] md:tracking-[0.01rem] 
                 border-white md:border-s_red tracking-[0.1rem]  hover:border-[2px] hover:border-s_red hover:bg-white hover:text-s_red "
                text='login'
                type='submit'
                
                />
                
                <div className="bg-s_blue py-[0.003rem]  mt-[0.1rem] blur-[3px] ml-[0.04rem] w-[95%]">
       </div>
       
           </div>
            </div>
            <div className=" md:hidden mt-[7.7rem] gap-10 flex justify-center items-center md:gap-9 md:mt-0">
                        <div>
                         <svg className="hover:fill-s_red hover:stroke-s_red" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill="#FFF" fillRule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                        </div>
                        <div>
                        <svg className="hover:fill-s_red hover:stroke-s_red" xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill="#FFF" fillRule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/></svg>

                        </div>
                        </div>
           </div>
 
  
  

            </nav>

            </div>
        </header>
    )
}

export default Header