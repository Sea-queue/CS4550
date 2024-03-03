import { useCallback } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  StraightEdge,
} from "reactflow";

import "reactflow/dist/style.css";

const initialNodes = [
  { id: "n1", position: { x: 100, y: 100 }, data: { label: "Inputs" } },
  {
    id: "n1-1",
    position: { x: -100, y: 0 },
    data: { label: "Training Data" },
  },
  {
    id: "n1-2",
    position: { x: -100, y: 100 },
    data: { label: "Validation Data" },
  },
  {
    id: "n1-3",
    position: { x: -100, y: 200 },
    data: { label: "Testing Data" },
  },
  { id: "n2", position: { x: 300, y: 100 }, data: { label: "Dense Layers" } },
  { id: "n2-1", position: { x: 300, y: 250 }, data: { label: "ReLU" } },
  { id: "n3", position: { x: 500, y: 100 }, data: { label: "Output layer" } },
  { id: "n3-1", position: { x: 500, y: 250 }, data: { label: "SoftMax" } },
  { id: "n4", position: { x: 700, y: 100 }, data: { label: "Loss Function" } },
  {
    id: "n4-1",
    position: { x: 700, y: 250 },
    data: { label: "L1 / L2 Regularization" },
  },

  { id: "n5", position: { x: 900, y: 100 }, data: { label: "Accuracy" } },

  {
    id: "n6",
    position: { x: 700, y: 400 },
    data: { label: "Back Propagation" },
  },

  {
    id: "n6-1",
    position: { x: 900, y: 300 },
    data: { label: "Derivative / Partial Derivative" },
  },

  {
    id: "n6-2",
    position: { x: 900, y: 400 },
    data: { label: "Gradient" },
  },

  {
    id: "n6-3",
    position: { x: 900, y: 500 },
    data: { label: "Chain Rule" },
  },

  { id: "n7", position: { x: 700, y: 600 }, data: { label: "Optimization" } },

  {
    id: "n7-1",
    position: { x: 400, y: 700 },
    data: { label: "Optimizer-SGD" },
  },
  {
    id: "n7-2",
    position: { x: 600, y: 700 },
    data: { label: "Optimizer-Adam" },
  },
  {
    id: "n7-3",
    position: { x: 800, y: 700 },
    data: { label: "Optimizer-Adagrad" },
  },
  {
    id: "n7-4",
    position: { x: 1000, y: 700 },
    data: { label: "Optimizer-RMSprop" },
  },
];

const initialEdges = [
  { id: "e1", source: "n1", target: "n2" }, // input - dense layer
  { id: "e1-1", source: "n1-1", target: "n1" }, // training - input
  { id: "e1-2", source: "n1", target: "n1-2" }, // validation - input
  { id: "e1-3", source: "n1", target: "n1-3" }, // testing -input

  { id: "e2", source: "n2", target: "n3" }, // Dense Layers - output layer
  { id: "e2-1", source: "n2", target: "n2-1" }, // Dense Layers - ReLU

  { id: "e3", source: "n3", target: "n4" }, // Output layer - Loss
  { id: "e3-1", source: "n3", target: "n3-1" }, // Output layer - SoftMax

  { id: "e4", source: "n4", target: "n5" }, // Loss - Accuracy
  { id: "e4-1", source: "n4", target: "n4-1" }, // Loss - L1/L2

  { id: "e6-1", source: "n2-1", target: "n6" }, // BP - ReLU
  { id: "e6-2", source: "n3-1", target: "n6" }, // BP - SoftMax
  { id: "e6-3", source: "n4-1", target: "n6" }, // BP - L1/L2
  { id: "e6-4", source: "n6-1", target: "n6" }, // BP - Derivarive
  { id: "e6-5", source: "n6", target: "n6-2" }, // BP - Gradient
  { id: "e6-6", source: "n6", target: "n6-3" }, // BP - Chain rule
  { id: "e6-7", source: "n6", target: "n7" }, // BP - Optimization

  { id: "e7-1", source: "n7", target: "n7-1" }, // Optimization - SGD
  { id: "e7-2", source: "n7", target: "n7-2" }, // Optimization - Adam
  { id: "e7-3", source: "n7", target: "n7-3" }, // Optimization - Adagrad
  { id: "e7-4", source: "n7", target: "n7-4" }, // Optimization - RMSprop
];

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div style={{ width: "95vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
}

export default Flow;
