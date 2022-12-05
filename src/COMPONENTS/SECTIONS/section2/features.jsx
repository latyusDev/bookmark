import React from "react";
import { useState } from "react";
import { features } from "../../STATIC/static";


const Feature = ()=>{
    const [value, setValue] = useState(0)
    const {title, img, description, info } = features[value]
    // const upDate = (index)=>{
    //     setValue(index)
    // }
 
    return(
        <div className="mt-12 md:mt-14 pb-14">
        
    <div className="flex flex-col items-center border-t md:border-t-0 md:flex-row mx-auto md:border-b font-rubik  text-[#65656D] text-[1.06rem]
      md:max-w-[634px] justify-between">
        
        {features.map((feature, index) =>{
            const { button } = feature
            return(
                <div key={index} className="border-b md:border-b-0 w-[100%] md:w-auto text-center">
                     <button key={index} onClick={()=>setValue(index)} className={`py-6 md:pb-5 md:pt-0 px-8 border-l-none border-r-none  outline-offset-[green]  border-t-none  hover:text-s_red ${index === value && ' border-b-[4px] border-s_red pb-4 font-5 px-0 md:px-10 ' }`}>
                {button}
              </button>
                </div>
            )
        })}
    </div>
        
    <div className="flex flex-col px-6 md:px-0 md:flex-row items-center justify-between  mx-auto mt-16 max-w-[960px]">

        <div className="  md:w-[480px]  md:h-[350px] ml-1">
            <img src={img} alt="click" className="h-[100%] w-[100%]"/>
            <div className="mt-[-10rem] md:mt-[-17rem] overflow-hidden relative -z-[1]  ml-[-13.1rem]  border-s_red ">
       <div className="h-[195px] md:h-[320px] bg-s_blue rounded-r-[370px] ml-[-9rem] translate-x-[-34px]  md:translate-x-[-50px]">

        </div>
       </div>
        </div>
        <div className=" mt-9 md:mt-0 text-center  md:text-left md:w-[40%]  md:max-w-[530px] ">
            <h1 className="text-d_blue font-rubik font-5 text-[1.5rem] md:text-[1.8rem]">
            {title}
            </h1>
            <p className="text-[0.92rem] md:text-[1rem] font-rubik text-g_blue leading-[1.5] mt-3 md:mt-4">
            {description}
            </p>
           <div className=" hidden md:block  animate-bounce">
           <button className=" bg-s_blue mt-8 py-2 px-5  font-rubik font-4 rounded-[5px]
           border-[2px] border-s_blue hover:bg-white hover:text-s_blue hover:border-s_blue hover:border-[2px]
           text-white">{info}</button>
            <div className="bg-s_blue py-[0.008rem]  mt-[0.095rem] ml-1 blur-[3px]  w-[27%]">
       </div>
           </div>
        </div>
    </div>
   



           
        </div>
    )
}

export default Feature

