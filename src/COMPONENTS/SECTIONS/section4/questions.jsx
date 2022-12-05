import React from "react";
import { useState } from "react";


const Questions = ({question, answer, arrow, arrow2} )=>{

    const [accordion, setAccordion ] = useState(false)
   
    return(

        <li className="  border-b-[1px] border-[#ccc]  hover:text-s_red">
            <div className="flex justify-between py-[1rem] items-center pr-5 hover:text-s_red">
            <h2 className="text-d_blue text-[0.9rems] md:text-lg font-rubik font-4 md:font-5 hover:text-s_red">{question}</h2>
            <button className="border-none ouline-[0]" onClick={()=> { setAccordion(!accordion)}}>
                <img src={accordion ? arrow2 : arrow} alt="icon"
                 className={`${ accordion && "rotate-[180deg] fill-s_red"}`} />
            </button>
            </div>
            
            {accordion && <p className="text-[0.9rem] leading-[2.3] mt-6 font-rubik text-g_blue"> {answer}
</p>}
          
        </li>
        

 
)}

export default Questions