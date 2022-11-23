import { Link } from "react-router-dom";

export default function Header({ user }) {
  return <header className="nav">
    {/* {user ? `Welcome back ${user.name}` : "Welcome"} */}
    <div className="flex justify-center font-openSans bg-grey-100 py-4">
      <span className="px-6">
        <Link to="/">Home</Link>
      </span>
      <span className="px-6">
        <Link to="/my-feed">Feed</Link>
      </span>
      <span className="px-6">
        <Link to="/account">Account</Link>
      </span>
    </div>
  </header>
}
