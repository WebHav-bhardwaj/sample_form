import React, { useState } from "react";
export default function Inputtext(props) {

  const [enteredText,setEnteredText] = useState('');

  const inputChangeHandler=(event)=>{
    setEnteredText(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <div className=" h-20 m-2 mx-5 my-3">
        <label className="px-1 py-1 w-full" htmlFor="firstName">
          {props.title}
        </label>
        <input
          className="px-3 border-b-2 border-solid py-1 w-full"
          onChange={inputChangeHandler}
          type={props.type}
          id="firstName"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
}
