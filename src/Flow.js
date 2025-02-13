import React, { useState, useCallback } from "react";
import { ReactFlow, Background, Controls, addEdge, useNodesState, useEdgesState } from "@xyflow/react";
import "reactflow/dist/style.css";
import SidePanel from "./components/sidePanel";
import PaymentModel from "./components/PaymentModel";
import PaymentCountry from "./components/PaymentCountry";
import PaymentProvider from "./components/PaymentProvider";
import PaymentProviderSelect from "./components/PaymentProviderSelect";
import PaymentCountrySelect from "./components/PaymentCountrySelect";
import { v4 as uuidv4 } from 'uuid';
import PaymentCustomEdge from "./components/PaymentCustomEdge";

const nodeTypes = { 
  paymentdis: PaymentModel, 
  paymentcountry : PaymentCountry,
  paymentProvider : PaymentProvider,
  paymentProviderSelect : PaymentProviderSelect,
  paymentCountrySelect: PaymentCountrySelect,
};

const edgeTypes = {
  customEdge: PaymentCustomEdge,
};

const initialNodes = [
  { id: "1", position: { x: 100, y: 140 }, data: { amount: 10 }, type: "paymentdis" },
  { id: "2", position: { x: 300, y: 130 }, data: { currency: "$", country: "United States", countryCode: "US" }, type: "paymentcountry" },
  { id: "4", position: { x: 300, y: 220 }, data: { currency: "₹", country: "India", countryCode: "IN" }, type: "paymentcountry" },
  { id: "5", position: { x: 550, y: 25 }, data: { name: "Google Pay", code: "Gp" }, type: "paymentProvider" },
  { id: "6", position: { x: 550, y: 225 }, data: { name: "Paytm", code: "Pt" }, type: "paymentProvider" },
  { id: "7", position: { x: 550, y: 425 }, data: { name: "Paypal", code: "Pp" }, type: "paymentProvider" },
  { id: "8", position: { x: 0, y: -20 }, data: {}, type: "paymentProviderSelect", draggable: false },
  { id: "9", position: { x: 250, y: -20 }, data: {}, type: "paymentCountrySelect", draggable: false },
];

const initialEdges = [];

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [selectedNode, setSelectedNode] = useState(null);

  const onConnect = useCallback((connection) => {
    const edge = {
      ...connection,
      animated: true, 
      id: uuidv4(),  
      type: "customEdge", };
    setEdges((prevEdges) => addEdge(edge, prevEdges));
  }, [setEdges]);
  const handleNodeClick = (nodeData) => {
    setSelectedNode(nodeData);
  };

  const closeSidePanel = () => {
    setSelectedNode(null);
  };

  const [variant] = useState("dots");

  return (
    <>
      <ReactFlow
        style={{ fontFamily: "Arial" }}
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background className="bgWall" variant={variant} />
        <Controls />
      </ReactFlow>

      <SidePanel data={selectedNode} onClose={closeSidePanel} />
    </>
  );
}
