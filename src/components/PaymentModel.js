import { Handle} from "@xyflow/react";
import "../App.css";
import { useState } from "react";




export default function PaymentModel( {data} ) {
  const[inputValue, setInputValue] = useState("");

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      console.log(inputValue);
    }}

    return (
      <>
      <div className="box-1">
        <p>Payment Initialized</p>
        <Handle type="source" position="right" />
        <div className="box-2">
        <input classname="box2-input" id="box2-input" placeholder={data?.amount || "00"} onChange={(event) => setInputValue(event.target.value)} onKeyDown={handleEnter}></input>
        </div>
      </div>
      
      </>
    );
  }