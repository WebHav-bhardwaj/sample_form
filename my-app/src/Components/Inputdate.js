import React,{useState} from "react";

export default function Inputdate(props) {

  const [enteredDate,setEnteredDate] = useState('');

  const inputChangeHandler=(event)=>{
    setEnteredDate(event.target.value);
    console.log(event.target.value);
  }

  return (
    <>
      <div className=" columns-1 h-20 m-2 mx-5 my-3">
        <div>
          <label className="px-1 py-1 w-full" htmlfor="dateOfBirth">
            {props.title}
          </label>
        </div>
        <div>
          <input
            className="px-3 border-b-2 border-solid w-full py-1"
            onChange={inputChangeHandler}
            type="date"
            id="dateOfBirth"
            name="trip-start"
          />
        </div>
      </div>
    </>
  );
}
