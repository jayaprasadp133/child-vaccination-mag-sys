import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/status">Check Status</Link>
    </div>
  );
}

export default Navbar;