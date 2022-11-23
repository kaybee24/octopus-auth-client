import { Link } from "react-router-dom";

export default function Header({ user, handleLogout }) {
  return <header className="nav">
    <div>{user ? `Welcome back ${user.name}` : "welcome"}</div>
    <div className="flex justify-center">
      <span className="px-6">
        <Link to="/">Home</Link>
      </span>
      <span className="px-6">
        <Link to="/register">Register</Link>
      </span>
      <span className="px-6">
        <Link to="/login">Login</Link>
      </span>
      <span className="px-6">
        <button onClick={handleLogout}>Logout</button>
      </span>
      <span className="px-6">
        <Link to="/my-feed">the feed</Link>
      </span>
    </div>
  </header>
}
