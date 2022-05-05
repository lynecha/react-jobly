import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Homepage from "./Homepage";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyDetails from "./CompanyDetails";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ProfileForm from "./ProfileForm";

function RouteList({ login, register, updateUser }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />

      <Route path="/companies" element={<Companies />} />

      <Route path="/jobs" element={<Jobs />} />

      <Route path="/companies/:handle" element={<CompanyDetails />} />

      <Route path="/login" element={<LoginForm login={login} />} />

      <Route path="/signup" element={<RegisterForm register={register} />} />

      <Route
        path="/profile"
        element={<ProfileForm updateUser={updateUser} />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RouteList;
