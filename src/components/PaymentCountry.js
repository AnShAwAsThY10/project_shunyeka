import React from 'react'
import { Handle, Position, useReactFlow,  } from "@xyflow/react";
import "../App.css";
import ReactCountryFlag from 'react-country-flag';



export default function PaymentCountry({ data, id }) {
  const {setNodes } = useReactFlow();
    return (
      <div className='col-1'>
        <ReactCountryFlag style={{height:"50px",padding:"10px"}} countryCode={data.countryCode} svg/>
        <p>{data.country}
        <p style={{fontSize:"10px", color:"green"}}>{data.currency}</p></p>
        <img className='close-button' width={"20px"} onClick={()=> 
            setNodes((prevNodes)=>prevNodes.filter((node)=>node.id != id))
            } src='https://icon-library.com/images/close-button-icon-png/close-button-icon-png-23.jpg'/>
        <Handle type="target" position={Position.Left} />
        <Handle type="source" position={Position.Right} />
      </div>
    );
  }
  
