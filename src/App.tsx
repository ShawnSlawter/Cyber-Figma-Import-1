import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Cybersecurity } from "./screens/Cybersecurity";
import { Infrastructure } from "./screens/Infrastructure";
import { SecureOps } from "./screens/SecureOps";

export const App = (): JSX.Element => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/secureops" replace />} />
        <Route path="/cybersecurity" element={<Cybersecurity />} />
        <Route path="/infrastructure" element={<Infrastructure />} />
        <Route path="/secureops" element={<SecureOps />} />
      </Routes>
    </HashRouter>
  );
};
