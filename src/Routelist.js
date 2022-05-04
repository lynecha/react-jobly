import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./Companies";
import Jobs from "./Jobs"
import CompanyDetails from "./CompanyDetails";

function RouteList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<Companies />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/companies/:handle" element={<CompanyDetails />} />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
