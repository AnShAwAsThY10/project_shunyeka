import { Handle} from "@xyflow/react";
import "../App.css";




const intAmt = 0
export default function PaymentModel( {data} ) {
    return (
      <>
      <div className="box-1">
        <p>Payment Initialized</p>
        <Handle type="source" position="right" />
        <div className="box-2">
        <input className id="box2-input" value={intAmt} placeholder={data.amount}></input>
        </div>
      </div>
      
      </>
    );
  }