import React from 'react'
import { Handle, useReactFlow } from '@xyflow/react';

const PaymentProviderLogo = {
    Gp : "https://static.cdnlogo.com/logos/g/80/google-pay.png",
    Pt : "https://static.cdnlogo.com/logos/p/10/paytm.svg",
    Pp : "https://static.cdnlogo.com/logos/p/41/paypal.svg",
    St : "https://static.cdnlogo.com/logos/s/83/stripe.svg",
    Am : "https://static.cdnlogo.com/logos/a/75/amazon-pay.svg", 
    Ap : "https://static.cdnlogo.com/logos/a/95/apple-pay.png"
  };

export default function PaymentProvider({data, id}) {
    const {setNodes} = useReactFlow();
    const src = PaymentProviderLogo[data.code];
  return (
        <>
        <div className="model-1">
            <img width={"70px"} src={src} alt={data.name}></img>
            <img className='close-button' width={"20px"} onClick={()=> 
            setNodes((prevNodes)=>prevNodes.filter((node)=>node.id != id))
            } src='https://icon-library.com/images/close-button-icon-png/close-button-icon-png-23.jpg'/>
        <Handle type="target" position="left" />
       </div>
        </>
      );
}
