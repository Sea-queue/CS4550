import { Routes, Route, Navigate } from "react-router";
import Chat from "./Chat";
import Images from "./Images";
import Vision from "./Vision";

export default function OpenAI() {
  return (
    <div className="container-fluid">
      <h1>OpenAI</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/OpenAI/chat" />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/images" element={<Images />} />
        <Route path="/vision" element={<Vision />} />
      </Routes>
    </div>
  );
}
