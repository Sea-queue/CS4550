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
        "$$S_{i,j} = \\frac{e^{z_{i, j}}}{\\sum_{l = 1}^{L}{e^{z_{i, j}}}}$$";
      setSelectedFormula(softmax_formula);
    } else if (node.id === "relu") {
      let relu_formula = String.raw`$$
        y = \begin{cases} 
        x & \text{if } x > 0 \\
        0 & \text{if } x <= 0
        \end{cases}$$`;
      setSelectedFormula(relu_formula);
    } else if (node.id === "sigmoid") {
      let sigmoid_formula = "$$\\sigma = \\frac{1}{1 + e^x}$$";
      setSelectedFormula(sigmoid_formula);
    } else if (node.id === "linear") {
      let linear_formula = "$$y = x$$";
      setSelectedFormula(linear_formula);
    } else if (node.id === "matrix-product") {
      let matrix_formula =
        "batches of inputs <times> transpose of ONE layer's neurons' set of weights";
      setSelectedFormula(matrix_formula);
    } else if (node.id === "cross-entropy") {
      let entropy_formula = String.raw`$$\displaylines{ L = -\sum{y\log\hat y} \\ Simplified: L = -\log\hat y }$$`;
      setSelectedFormula(entropy_formula);
    } else if (node.id === "accuracy") {
      let accuracy_formula =
        "Classification: describes how often the largest confidence is the correct class in terms of a fraction.";
      setSelectedFormula(accuracy_formula);
    } else if (node.id === "back") {
      let back_formula =
        "Given a sample, calculate the impact: how much each weight and bias changes the loss value.";
      setSelectedFormula(back_formula);
    } else if (node.id === "gradient") {
      let gradient_formula =
        "Derivative measures the impact that x has on y of a nonlinear function: the slope of a tangent line at x which is called the instantaneous slope." +
        "The tangent line is created by drawing a line between two points that are “infinitely close” on a curve." +
        "Slope depends on where we measure it.";
      setSelectedFormula(gradient_formula);
    } else if (node.id === "chain-rule") {
      let chain_formula =
        "The loss function not only takes the model's output and targets as parameters to produce the error, but also as a function that takes all of the weights and biases if we chain all of the functions performed during the forward pass. To improve loss, we need to learn how each weight and bias impacts it by using the chain rule.";
      setSelectedFormula(chain_formula);
    } else if (node.id === "optimization") {
      let optimization_formula =
        "Gradient Descent: applying a negative fraction of the gradient to weights since we want to decrease the final output value, and the gradient shows the direction of the steepest ascent.";
      setSelectedFormula(optimization_formula);
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
