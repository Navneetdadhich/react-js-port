import React, { useState } from 'react'

const Button = ({value , onbuttonClicked}) => {
    // const [value , setValue] = useState("_");
    // function clickme(){
    //     // setValue("X");
    // }
  return (
    <>
    <button onClick={onbuttonClicked} className=" w-16 h-16 border-2 border-black text-center box-border"> {value}</button>
    </>
    
  )
}

export default Button;