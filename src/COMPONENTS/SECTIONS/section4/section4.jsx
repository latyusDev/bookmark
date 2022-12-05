import React from "react";
import Questions from "./questions";
import { questions } from "../../STATIC/static";
import Button from "../../BUTTON/button";
const Section4 = ()=>{
    return(
        <section className=" mt-[10rem] md:my-[8rem]  md:px-5 xl:px-0">
            <div className="container">
                <div className="text-center mx-8  md:mx-auto md:max-w-[480px] ">
                    <h1 className="text-d_blue leading-[1.2] font-rubik font-5  text-[1.8rem]">
             Frequently Asked Questions
                    </h1>
                    <p className="mt-4 text-[0.92rem] md:text-[1rem] font-rubik  text-g_blue md:leading-[1.4]">
  
  Here are some of our FAQs. If you have any other questions you’d like 
  answered please feel free to email us.

                    </p>
                </div>
            </div>
            <div className="container">
        <ul className=" mt-[5.3rem] md:mt-10  mb-32  md:mb-0 md:border-t-[1px] md:border-[#ccc] mx-8 md:mx-auto md:max-w-[520px]">

                {
                    questions.map(quest =>{

                        const {question, answer, arrow, arrow2, id} = quest

                        return(
                            <Questions key={id} 
                            question={question}
                            arrow={arrow}
                            arrow2={arrow2}
                            answer={answer}
                            id={id}
                            
                            />

                        )
                    })
                }
                <li className="mt-14 text-center  animate-bounce ">
                    <Button 
                    btnStyle="bg-s_blue   px-5 py-2.5 rounded-[5px]  font-rubik
                    hover:border-[2px] border-s_blue text-sm  border-[2px]
                     border-solid  hover:bg-white  hover:font-rubik
                     hover:text-s_blue hover:border-s_blue hover:border-solid 
                     text-white"
                     text=" More Info"
                    />
            <div className="ml-auto max-w-[200px] mx-auto bg-s_blue py-[0.008rem]  mt-[0.095rem]  blur-[3px]  w-[19%]">
                    </div>
                    
                </li>
     </ul>

            </div>
        </section>
    )
}

export default Section4