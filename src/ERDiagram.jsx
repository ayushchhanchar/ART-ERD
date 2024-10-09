import React, { useCallback } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  addEdge,
  useNodesState,
  useEdgesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './CustomNode'; // Import the custom node component
import { useEffect, useState } from 'react';
import './App.css'

const nodeTypes = { collapsibleNode: CustomNode };

const initialNodes = [
  {
    id: '1',
    type: 'collapsibleNode',
    data: {
      label: 'Authentication Service',
      components: [
        { id: 'C1', name: 'User Login' },
        { id: 'C2', name: 'OAuth Handler' },
        { id: 'C3', name: 'JWT Token Generator' },
        { id: 'C4', name: 'Session Management' }
      ],
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '2',
    type: 'collapsibleNode',
    data: {
      label: 'User Management Service',
      components: [
        { id: 'C5', name: 'User Profile' },
        { id: 'C6', name: 'RBAC (Role-Based Access Control)' },
        { id: 'C7', name: 'User Preferences' }
      ],
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '3',
    type: 'collapsibleNode',
    data: {
      label: 'Notification Service',
      components: [
        { id: 'C8', name: 'Email Notifications' },
        { id: 'C9', name: 'SMS Alerts' },
        { id: 'C10', name: 'Push Notifications' }
      ],
    },
    position: { x: 300, y: 400 },
  },
  {
    id: '4',
    type: 'collapsibleNode',
    data: {
      label: 'Payment Gateway',
      components: [
        { id: 'C11', name: 'Credit Card Processing' },
        { id: 'C12', name: 'Payment Authorization' },
        { id: 'C13', name: 'Refund Handling' }
      ],
    },
    position: { x: 500, y: 300 },
  },
  {
    id: '5',
    type: 'collapsibleNode',
    data: {
      label: 'Order Management',
      components: [
        { id: 'C14', name: 'Order Creation' },
        { id: 'C15', name: 'Order Validation' },
        { id: 'C16', name: 'Order Tracking' }
      ],
    },
    position: { x: 700, y: 400 },
  },
  {
    id: '6',
    type: 'collapsibleNode',
    data: {
      label: 'Inventory Service',
      components: [
        { id: 'C17', name: 'Stock Management' },
        { id: 'C18', name: 'Warehouse Management' },
        { id: 'C19', name: 'Reorder Alerts' }
      ],
    },
    position: { x: 200, y: 500 },
  },
  
];

const initialEdges = [
  { 
    id: 'e1', 
    source: '1', 
    target: '2', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  
  { 
    id: 'e2', 
    source: '2', 
    target: '3', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e3', 
    source: '3', 
    target: '4', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e4', 
    source: '4', 
    target: '5', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  { 
    id: 'e5', 
    source: '5', 
    target: '6', 
    markerEnd: { type: 'arrowclosed' },
    type: 'smoothstep',
    style: { stroke: 'gray', strokeWidth: 2 }
  },
  
];


const ERDiagram = () => {

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const [showPopup, setShowPopup] = useState(false);
  const [selectedEdge, setSelectedEdge] = useState(null);

  const onEdgeClick = (event, edge) => {
    setSelectedEdge(edge); 
    setShowPopup(true); 
  };

 

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            markerEnd: { type: 'arrowclosed', markerWidth: 30, markerHeight: 30 },
            style: { stroke: 'green', strokeWidth: 2 },
            type: 'smoothstep',
          },
          eds
        )
      ),
    [setEdges]
  );



  return (
    <div style={{ background: "black", width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        // elements={elements}
        onEdgeClick={onEdgeClick}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h3>Edge Details</h3>
            <p><strong>ID:</strong> {selectedEdge?.id}</p>
            <p><strong>Source:</strong> {selectedEdge?.source}</p>
            <p><strong>Target:</strong> {selectedEdge?.target}</p>
            <button className='bg-blue-500 rounded-md px-4 py-2' onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ERDiagram;
