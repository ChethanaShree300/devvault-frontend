import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-slate-950 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <Link
          to="/"
          className="text-2xl font-bold text-violet-500"
        >
          DevVault
        </Link>

        <div className="flex gap-8 text-gray-300">

          <Link to="/">Home</Link>

          <Link to="/projects">Projects</Link>

          <Link to="/skills">Skills</Link>

          <Link to="/login">Login</Link>

          <Link to="/register">Register</Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;