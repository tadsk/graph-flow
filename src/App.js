import ReactFlow, {
  addEdge, 
  //Background, 
  MiniMap,
  Controls, 
  updateEdge,
  useEdgesState,
  useNodesState,
  ReactFlowProvider
} from 'react-flow-renderer';
import TextUpdaterNode from './components/TextUpdaterNode';
import initialNodes from './data/nodes';
import initialEdges from './data/edges';
import './components/text-updater-node.css';
import Description from './description';
import ConnectionLine from './components/ConnectionLine';
import React, {useState, useRef, useCallback } from 'react';

const nodeTypes = { textUpdater: TextUpdaterNode };
const rfStyle = {
  backgroundColor: '#B8CEFF',
};
let id = 0
const getId = () => `dndnode_${id++}`;

function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((els) => addEdge(params, els));
  const onEdgeUpdate = (oldEdge, newConnection) => setEdges((els) => updateEdge(oldEdge, newConnection, els));
  
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });
      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );
  return <div className='app' style={{width:'100%', height:'100vh'}}>
      <Description />
      <div className='graph' style={{width: '100%', height: '100vh'}}>
        <ReactFlowProvider>
        <div className='reactflow-wrapper' ref={reactFlowWrapper}>
        <ReactFlow 
          nodes={nodes} 
          edges={edges} 
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onEdgeUpdate={onEdgeUpdate}
          onConnect={onConnect}
          onInit={setReactFlowInstance}
          onDrop={onDrop}
          onDragOver={onDragOver}
          nodeTypes = {nodeTypes}
          connectionLineComponent={ConnectionLine}
          className='touchdevice-flow'
          snpaToGrid
          fitView
          style={rfStyle} >
        <MiniMap style={{position: 'absolute', top:5, right:5}}/>
        <Controls style={{position: 'absolute', top:5, left:5}}/>
      </ReactFlow>
      </div>
      </ReactFlowProvider>
    </div>
  </div>;
}
// import ReactFlow from 'react-flow-renderer';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ReactFlow elements={elements} />
//     </div>
//   );
// }

export default App;

