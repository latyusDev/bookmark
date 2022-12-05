import React from "react";
import Button from "../../BUTTON/button";
import hero from '../../IMAGES/illustration-hero.svg'

{/* <div className="mx-2 border md:w-[100%] md:z-[999]"> */}
const Section1 = ()=>{
    return(
        <section className="md:relative md:border-[1px] border-white mt-1 pb-40 md:px-5 xl:px-0">
        <div className=" mt-[5.8rem] md:mt-0 md:absolute top-[80px] md:right-[32px] xl:right-[39px]  ">
        <div className="mx-2 md:w-[100%] md:h-[400px] lg:h-auto md:mr-[-16rem] lg:mr-[-7rem] xl:mr-0 lg:w-[100%] xl:w-[100%] md:z-[999]">
            <img src={hero} alt="illustration1"className="w-[100%] md:h-[100%] lg:h-auto" />
        </div>
       <div className="mt-[-13.4rem]  sm:mt-[-18rem] md:mt-[-20rem] overflow-hidden relative -z-[1]   md:mr-[-2.01rem] xl:mr-[-2.5rem]">

       <div className="h-[225px] sm:h-[300px]  md:h-[340px] bg-s_blue rounded-l-[370px] mr-[-9rem] translate-x-[65px]  md:translate-x-[190px]">

        </div>
       </div>
        </div>
            <div className="container px-8 md:px-0">
            <div className="text-center md:text-left md:max-w-[440px] mt-[3.4rem] md:mt-[9rem]">
           <h1 className="font-5 font-rubik leading-[1.4] md:leading-[1.1] text-d_blue text-[1.9rem] md:text-[2.9rem]">
           A Simple Bookmark Manager
           </h1>
        <p className="mt-6 text-[0.98rem] md:text-[1rem] font-rubik text-g_blue leading-[1.5]">
        A clean and simple interface to organize your favourite websites. Open a new 
        browser tab and see your sites load instantly. Try it for free.
        </p>

       <div className="mt-8 flex justify-center md:justify-start">
       <div  >
       <Button 
        btnStyle='bg-s_blue mr-5 text-[0.74rem] sm:text-[1rem] md:text-[0.9rem] py-3 rounded-[5px] 
        px-[1.2rem] sm:px-[5rem] md:px-[1.7rem] font-rubik border-[2px] border-solid border-s_blue 
        hover:border-[2px]  hover:bg-white hover:font-4 hover:font-rubik 
        hover:text-s_blue hover:border-s_blue hover:border-solid 
        md:font-4 text-white' 
        text='Get it on Chrome' 
        
        />
          <div className="bg-s_blue py-[0.01rem]  mt-[0.09rem] blur-[3px] ml-[0.3rem] w-[85%]">
       </div>
       
       </div>
        <div className="">
        <Button 
        btnStyle='bg-[#F7F7F7]  py-3 rounded-[5px] text-[0.74rem] md:text-[0.9rem]
         px-[1.3rem] sm:px-[5rem] sm:text-[1rem] md:px-[1.3rem] font-rubik font-5 text-[#545460] shadow-[1px_3px_7px_#ccc]
         border-solid border-[#F7F7F7] border-[2px] hover:font-5
         hover:border-[2px] hover:border-d_blue hover:border-solid '
        text='Get it on Firefox' 
        
        />
        <div className="bg-[#ccc] py-[0.01rem]  mt-[0.13rem] blur-[3px] mx-auto w-[95%]">
       </div>
        </div>
        </div>
            </div>
            </div>
        </section>
    )
}

export default Section1