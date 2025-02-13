import { useState, useEffect } from "react";
import { initialNodes } from "../App";
import Flow from "../App";

export default function SidePanel({ data, onClose, setNodes}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");


  useEffect(() => {
    if (data) {
      setNewName(data.name || data.country || "");
    }
  }, [data]);

  if (!data) {
    return null;
  }

  const PaymentProviderLogo = {
    Gp: "https://static.cdnlogo.com/logos/g/80/google-pay.png",
    Pt: "https://static.cdnlogo.com/logos/p/10/paytm.svg",
    Pp: "https://static.cdnlogo.com/logos/p/41/paypal.svg",
    St: "https://static.cdnlogo.com/logos/s/83/stripe.svg",
    Am: "https://static.cdnlogo.com/logos/a/75/amazon-pay.svg",
    Ap: "https://static.cdnlogo.com/logos/a/95/apple-pay.png",
  };

  const handleEditClick = () => {
    setIsEditing(true); 
  };
// console.log(nodes)

  const applyNodeChanges = (newName, currentNodeId) => {
    // console.log(currentNodeId , newName);
    
    setNodes((prev) =>
      prev.map((node) => {
        if (node.id === currentNodeId) {
          return { ...node, data: { ...node.data, label: newName } };
        }
        return node;
      })
    );
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    applyNodeChanges(newName, data.id);
        
  }
  

  const handleInputChange = (event) => {
    setNewName(event.target.value); 
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 0,
        top: 0,
        width: "300px",
        height: "100%",
        padding: "20px",
        backgroundColor: "#c0c0c0de",
        boxShadow: "-3px 0px 3px white",
        fontFamily: "Arial",
      }}
    >
      <button className="closeButton" onClick={onClose}>
        x
      </button>
      <h3>Node Properties</h3>
      <p>
        <strong>Name:</strong>{" "}
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={handleInputChange}
            style={{ marginLeft: "10px" }}
          />
        ) : (
          newName
        )}
      </p>
      <p>
        <strong>Information:</strong>{" "}
        {data.currency || (
          <img width={"100px"} src={PaymentProviderLogo[data.code]} alt="" />
        )}
      </p>
      {isEditing ? (
        <button className="save-button" onClick={handleSaveClick}>
          Save
        </button>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
      )}
    </div>
  );
};