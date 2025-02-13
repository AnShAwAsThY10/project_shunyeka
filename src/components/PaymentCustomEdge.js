import React from 'react';
import { BezierEdge, EdgeProps, EdgeLabelRenderer, getBezierPath, useReactFlow} from "reactflow";

 

export default function PaymentCustomEdge({props}) {
  const {setEdges } = useReactFlow();
    const { sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, id } = props || {};
    const [edgePath, labelX, labelY] = getBezierPath({
        sourceX,
        sourceY,
        targetX,
        targetY,
        sourcePosition,
        targetPosition
    });


  return (<>
    <BezierEdge {...props} />
      <EdgeLabelRenderer>
        <div
          style={{
            position: 'absolute',
            transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
            pointerEvents: 'all', // Ensure the button is clickable
          }}
        >
          <button
   
            aria-label="Delete Edge"
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '12px',
            }}
            onClick={() =>
              setEdges((prevEdges) => prevEdges.filter((edge) => edge.id !== id))
            }
          >
            <img
              src="https://icon-library.com/images/close-button-icon-png/close-button-icon-png-23.jpg"
              alt="delete"
              style={{ width: '16px', height: '16px' }}
            />
          </button>
        </div>
      </EdgeLabelRenderer>
  </>
  )
}
