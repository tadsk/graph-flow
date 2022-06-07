import ReactFlow, {addEdge, applyEdgeChanges, applyNodeChanges, Background, MiniMap, Controls} from 'react-flow-renderer';
import { useCallback, useState } from 'react';
import TextUpdaterNode from './TextUpdaterNode';
import initialNodes from './nodes';
import initialEdges from './edges';
import './text-updater-node.css';

const nodeTypes = { textUpdater: TextUpdaterNode };
const rfStyle = {
  backgroundColor: '#B8CEFF',
};

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [setEdges]
  );
  const onConnect = useCallback(
    (connection) => setEdges((eds) => 
    addEdge(connection, eds)), 
    [setEdges]
  );

  return <ReactFlow 
  nodes={nodes} 
  edges={edges} 
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  nodeTypes = {nodeTypes}
  fitView
  style={rfStyle} >
    <MiniMap />
    <Controls />
  </ReactFlow>;
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
