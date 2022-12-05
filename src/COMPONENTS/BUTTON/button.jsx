import React from "react";

const Button = ({type, text, btnStyle })=>{
    return(
        <button type={type} className={btnStyle} >{text}</button>
    )
}

export default Button