import { Handle} from "@xyflow/react";
import "../App.css";





export default function PaymentModel( {data} ) {
    return (
      <>
      <div className="box-1">
        <p>Payment Initialized</p>
        <Handle type="source" position="right" />
        <div className="box-2">
        < p>${data.amount}</p>
        </div>
      </div>
      
      </>
    );
  }