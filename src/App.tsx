import { Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./pages/HomePage";
import TemplatesPage from "./pages/TemplatesPage";

export default function App() {
  return (
    <>
      <Routes>
        {/* Redirect "/" sang "/home" */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        {/* Trang Home */}
        <Route path="/home" element={<HomePage />} />
        {/* Trang Templates */}
        <Route path="/templates" element={<TemplatesPage />} />
      </Routes>
    </>
  );
}
