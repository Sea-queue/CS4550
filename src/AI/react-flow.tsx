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
  { id: "inputs", position: { x: 200, y: 100 }, data: { label: "Inputs" } },

  {
    id: "training",
    position: { x: 0, y: 0 },
    data: { label: "Training Data" },
  },
  {
    id: "validation",
    position: { x: 0, y: 200 },
    data: { label: "Validation Data" },
  },
  {
    id: "testing",
    position: { x: 0, y: 350 },
    data: { label: "Testing Data" },
  },

  {
    id: "dense-layer",
    position: { x: 400, y: 100 },
    data: { label: "Dense Layers" },
  },

  { id: "relu", position: { x: 400, y: 250 }, data: { label: "ReLU" } },

  {
    id: "dropout",
    position: { x: 600, y: 100 },
    data: { label: "Dropout Layer" },
  },

  {
    id: "output",
    position: { x: 800, y: 100 },
    data: { label: "Output layer" },
  },

  { id: "softmax", position: { x: 800, y: 250 }, data: { label: "SoftMax" } },

  {
    id: "loss",
    position: { x: 1000, y: 100 },
    data: { label: "Loss Function" },
  },

  {
    id: "l1l2",
    position: { x: 1000, y: 250 },
    data: { label: "L1 / L2 Regularization" },
  },

  {
    id: "accuracy",
    position: { x: 1200, y: 100 },
    data: { label: "Accuracy" },
  },

  {
    id: "back",
    position: { x: 800, y: 500 },
    data: { label: "Back Propagation" },
  },

  {
    id: "gradient",
    position: { x: 1000, y: 400 },
    data: { label: "Gradient (Partial Derivative)" },
  },

  {
    id: "chain-rule",
    position: { x: 1000, y: 600 },
    data: { label: "Chain Rule" },
  },

  {
    id: "optimization",
    position: { x: 800, y: 650 },
    data: { label: "Optimization" },
  },

  {
    id: "sgd",
    position: { x: 500, y: 750 },
    data: { label: "Optimizer-SGD" },
  },
  {
    id: "adam",
    position: { x: 700, y: 750 },
    data: { label: "Optimizer-Adam" },
  },
  {
    id: "adagrad",
    position: { x: 900, y: 750 },
    data: { label: "Optimizer-Adagrad" },
  },
  {
    id: "rmsprop",
    position: { x: 1100, y: 750 },
    data: { label: "Optimizer-RMSprop" },
  },
];

const initialEdges = [
  { id: "input-dense", source: "inputs", target: "dense-layer" },
  { id: "training-input", source: "training", target: "inputs" },
  { id: "validation-input", source: "inputs", target: "validation" },
  { id: "testing-input", source: "inputs", target: "testing" },

  { id: "dense-dropout", source: "dense-layer", target: "dropout" },
  { id: "dense-relu", source: "dense-layer", target: "relu" },

  { id: "dropout-output", source: "dropout", target: "output" },

  { id: "output-loss", source: "output", target: "loss" },
  { id: "output-sofmax", source: "output", target: "softmax" },

  { id: "loss-accuracy", source: "loss", target: "accuracy" },
  { id: "loss-l1l2", source: "loss", target: "l1l2" },

  { id: "bp-relu", source: "relu", target: "back" },
  { id: "bp-dropout", source: "dropout", target: "back" },
  { id: "bp-softmax", source: "softmax", target: "back" },
  { id: "bp-l1l2", source: "l1l2", target: "back" },
  { id: "bp-gradient", source: "gradient", target: "back" },
  { id: "bp-chain", source: "back", target: "chain-rule" },
  { id: "bp-optimization", source: "back", target: "optimization" },

  { id: "opti-sgd", source: "optimization", target: "sgd" },
  { id: "opti-adam", source: "optimization", target: "adam" },
  { id: "opti-adagrad", source: "optimization", target: "adagrad" },
  { id: "opti-rmsprop", source: "optimization", target: "rmsprop" },
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
