import React from "react";
import opera from '../../IMAGES/logo-opera.svg'
import chrome from '../../IMAGES/logo-chrome.svg'
import firefox from '../../IMAGES/logo-firefox.svg'
import Button from "../../BUTTON/button";

const Section3 = ()=>{
    return(
        <section className=" mt-24 md:mt-32  mx-8 md:mx-0   md:px-5 xl:px-0">
            <div className="container">
            <div className=" text-center md:mx-auto md:max-w-[480px] ">
                <h1  className="text-d_blue font-rubik font-[500] text-[1.58rem] sm:text-[1.8rem]"> Download the extension</h1>
                <p className=" mt-3.5 md:mt-5 text-[0.985rem] sm:text-[1rem] font-rubik text-g_blue leading-[1.4]">
        We’ve got more browsers in the pipeline. Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.
                </p>
            </div>

            <div className="flex  flex-col justify-between mx-auto max-w-[808px] mt-14    h-auto md:flex-row">
                
                <div className="text-center pt-6 mb-[4.4rem] pb-6 md:pb-0 transition-all delay-200 duration-5000 hover:shadow-[3px_4px_2px_#ccc]  pb-4 shadow-[0.1px_7.9px_16px_#eee] rounded-b-[9px]">
                    <div className="bg-dot pb-9 bg-no-repeat bg-c_bottom ">
                        <img src={chrome} alt="chrome" className="mx-auto" />
                        <h2 className="font-rubik text-[1.1rem] mt-6 text-d_blue font-5 ">
                             Add to Chrome</h2>
                    <p className="font-rubik text-g_blue text-[0.84rem] mt-0 pt-1">
                        Minimum version 62</p>
                    </div>
                    <Button
                    btnStyle="bg-s_blue mt-6 mx-5 px-11 md:px-7 py-2.5 rounded-[5px]  font-rubik
                    hover:border-[2px] border-s_blue text-sm  border-[2px] 
                    transition-all delay-200 duration-5000
                    border-solid  hover:bg-white  hover:font-rubik
                    hover:text-s_blue hover:border-s_blue hover:border-solid 
                    text-white"
                     text="Add & Install Extension"
                    />
                     <div className="bg-s_blue py-[0.01rem]  mt-[0.095rem] blur-[3px] mx-auto w-[230px] md:w-[205px] ">
       </div>
                </div>
  
                <div className="text-center mt-9 mb-9 pt-6 pb-6 md:pb-3.5 transition-all delay-200 duration-5000 hover:shadow-[3px_4px_2px_#ccc]  shadow-[0.1px_7.9px_16px_#eee] rounded-b-[9px]">
                <div className="bg-dot pb-9 bg-no-repeat bg-c_bottom ">
                        <img src={firefox} alt="firefox" className="mx-auto"  />
                        <h2 className="font-rubik text-[1.1rem] mt-6 text-d_blue font-5 ">
                             Add to Firefox</h2>
                             <p className="font-rubik text-g_blue text-[0.84rem] mt-0 pt-1">
                         minimum version 55</p>
                    </div>

                    <Button
                    btnStyle="bg-s_blue mt-6 mx-5 px-11 md:px-7 py-2.5 rounded-[5px]  font-rubik
                    hover:border-[2px] border-s_blue text-sm  border-[2px]
                     border-solid  hover:bg-white  hover:font-rubik transition-all delay-200 duration-5000
                     hover:text-s_blue hover:border-s_blue hover:border-solid 
                     text-white"
                     text="Add & Install Extension"
                    />
                     
                     <div className="bg-s_blue py-[0.01rem]  mt-[0.095rem] blur-[3px] mx-auto w-[230px] md:w-[205px]">
       </div>
                </div>
  
                <div className="text-center transition-all duration-3000 mt-[4.5rem] pt-6 pb-6 md:pb-5 transition-all delay-200 duration-5000 rounded-b-[9px] hover:shadow-[3px_4px_2px_#ccc] shadow-[0.1px_7.9px_16px_#eee] ">
                <div className="bg-dot pb-9 bg-no-repeat bg-c_bottom ">
                        <img src={opera} alt="opera" className="mx-auto" />
                        <h2 className="font-rubik text-[1.1rem] mt-6 text-d_blue font-5 ">
                             Add to opera</h2>
                             <p className="font-rubik text-g_blue text-[0.84rem] mt-0 pt-1">
                        minimum version 46</p>
                    </div>
                    <Button
                    btnStyle="bg-s_blue mt-6 mx-5 px-11 md:px-7 py-2.5 rounded-[5px]  font-rubik
                    hover:border-[2px] border-s_blue text-sm  border-[2px] transition-all delay-200 duration-5000
                     border-solid  hover:bg-white  hover:font-rubik
                     hover:text-s_blue hover:border-s_blue hover:border-solid 
                     text-white"
                     text="Add & Install Extension"
                    />
                     <div className="bg-s_blue py-[0.01rem]  mt-[0.095rem] blur-[3px] mx-auto w-[230px] md:w-[205px]">
       </div>
                </div>
  
  

 
  

            </div>
            </div>
        </section>
    )
}

export default Section3