import React, { useState, useEffect, useCallback } from 'react';
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  MiniMap,
  Controls,
  ControlButton,
  Background,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ColorSelectorNode from './ColorSelectorNode';
import Card from "./Card"



import '../index.css';

const initBgColor = '#1A192B';

const connectionLineStyle = { stroke: '#fff' };
const snapGrid = [30, 30];
const nodeTypes = {
  selectorNode: ColorSelectorNode,
  CardNode:Card
};

const defaultViewport = { x: 150, y: 50, zoom: 1 };

const Canvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const [bgColor, setBgColor] = useState(initBgColor);
  const[idd,setId]=useState("4")
  function newNode(){
    const id = idd;
    const newNode = {
      id: id,
        type: 'CardNode',
        data: {},
        style: { border: '1px solid #777', padding:10  },
        position: { x: 100, y: 50 },
    };
    setId(idd+1)
    setNodes((nds) => nds.concat(newNode));
  }

  useEffect(() => {
    const onChange = (event) => {
      setNodes((nds) =>
        nds.map((node) => {
         

          const color = event.target.value;

          setBgColor(color);

          return {
            ...node,
            data: {
              ...node.data,
              color,
            },
          };
        }),
      );
    };

    setNodes([
      
      {
        id: '2',
        type: 'CardNode',
        data: { onChange: onChange, color: initBgColor },
        style: { border: '1px solid #777', padding:10  },
        position: { x: 300, y: 50 },
      },
      {
        id: '1',
        type: 'CardNode',
        data: { onChange: onChange, color: initBgColor },
        style: { border: '1px solid ', padding: 10 },
        position: { x: 600, y: 50 },
      },
      
    ]);

    setEdges([
      
      
    ]);
  }, []);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge({ ...params, animated: true, style: { stroke: 'red',strokeWidth:5  } }, eds),
      ),
    [],
  );
  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      
      nodeTypes={nodeTypes}
      connectionLineStyle={connectionLineStyle}
      snapToGrid={true}
      snapGrid={snapGrid}
      defaultViewport={defaultViewport}
      attributionPosition="bottom-left"
    >
      <Controls className='mb-5' position='TopLeft'>
        <ControlButton onClick={() => newNode()}>
          <div >➕</div>
        </ControlButton>
      </Controls  >
      <Background  />
    </ReactFlow>
  );
};

export default Canvas;
