import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./userContext";
import "./NavBar.css";

function NavBar({ logOutUser }) {
  const { currUser } = useContext(UserContext);
  if (!currUser) {
    return (
      <nav className="NavBar">
        <NavLink to="/">Jobly</NavLink>
        <NavLink to="/login">Login </NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </nav>
    );
  } else {
    return (
      <nav className="NavBar">
        <NavLink to="/">Jobly</NavLink>
        <NavLink to="/companies">Companies</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/" onClick={logOutUser}>
          Log Out {currUser.user.username}
        </NavLink>
      </nav>
    );
  }
}

export default NavBar;
