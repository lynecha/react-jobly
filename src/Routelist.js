import { Routes, Route, Navigate } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./Companies";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<Companies />} />

      <Route path="/jobs" element={"<Jobs />"} />

      <Route path="/companies/:name" element={"<Jobs />"} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
