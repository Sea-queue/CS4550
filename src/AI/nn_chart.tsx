import { useCallback, useState } from "react";
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";
import Modal from "./modal";
import { MathJaxContext, MathJax } from "better-react-mathjax";
import { nodes_db, edges_db } from "./Database";

function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState(nodes_db);
  const [edges, setEdges, onEdgesChange] = useEdgesState(edges_db);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFormula, setSelectedFormula] = useState(
    "No formula for this node"
  );

  const onConnect = useCallback(
    (params: any) => setEdges((eds: any) => addEdge(params, eds)),
    [setEdges]
  );

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFormula("No formula for this node");
  };

  const onNodeClick = (event: any, node: any) => {
    if (node.id === "softmax") {
      let softmax_formula =
        "$S_{i,j} = \\frac{e^{z_{i, j}}}{\\sum_{l = 1}^{L}{e^{z_{i, j}}}}$";
      setSelectedFormula(softmax_formula);
    } else if (node.id === "relu") {
      let relu_formula = String.raw`$
        y = \begin{cases} 
        x & \text{if } x > 0 \\
        0 & \text{if } x <= 0
        \end{cases}$`;
      setSelectedFormula(relu_formula);
    } else if (node.id === "sigmoid") {
      let relu_formula = `$\\sigma = \\frac{1}{1 + e^x}$`;
      setSelectedFormula(relu_formula);
    } else if (node.id === "linear") {
      let relu_formula = "y = x";
      setSelectedFormula(relu_formula);
    } else if (node.id === "matrix-product") {
      let relu_formula =
        "batches of inputs x transpose of ONE layer's neurons' set of weights";
      setSelectedFormula(relu_formula);
    }
    setIsModalOpen(true);
  };

  const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"],
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"],
      ],
    },
  };

  return (
    <div style={{ width: "95vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <MathJaxContext version={3} config={config}>
          <MathJax>{`${selectedFormula}`}</MathJax>
        </MathJaxContext>
      </Modal>
    </div>
  );
}

export default Flow;
