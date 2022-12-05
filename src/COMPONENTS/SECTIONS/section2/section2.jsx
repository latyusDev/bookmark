import React from "react";
import { features } from "../../STATIC/static";
import Feature from "./features";
const Section2 = ()=>{
    return(
        <section className=" mx-1.5 md:mx-0" >
            <div className="container">

            <div className="text-center mx-auto md:max-w-[480px] mt-3 md:mt-20">
                <h1 className="text-d_blue font-rubik font-[500] text-[1.8rem]">
                    Features
                </h1>
                <p className="mt-4 md:mt-5 text-[0.9rem] mx-7 md:mx-0 sm:text-[1rem] font-rubik text-g_blue leading-[1.4]">
                Our aim is to make it quick and easy for you to access your favourite websites. 
                 Your bookmarks sync between your devices so you can access them on the go.
                </p>
            </div>
            <Feature />
            </div>
            
        </section>
    )
}

export default Section2