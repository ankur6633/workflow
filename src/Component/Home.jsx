import { Link } from "react-router-dom";

function Home() {
  return (
    <nav className="flex justify-center items-center bg-blue-600 py-4 shadow-md">
      <div className="flex space-x-6">
        <Link
          to="/signup"
          className="text-white font-medium hover:bg-blue-500 px-4 py-2 rounded transition">
          Signup
        </Link>
        <Link
          to="/Login"
          className="text-white font-medium hover:bg-blue-500 px-4 py-2 rounded transition">
          Login
        </Link>
        <Link
          to="/Dashboard"
          className="text-white font-medium hover:bg-blue-500 px-4 py-2 rounded transition">
          Dashboard
        </Link>
        <Link
          to="/Employees"
          className="text-white font-medium hover:bg-blue-500 px-4 py-2 rounded transition">
          Employees
        </Link>
        <Link
          to="/addNewEmployee"
          className="text-white font-medium hover:bg-blue-500 px-4 py-2 rounded transition">
          Add New Employees
        </Link>
      </div>
    </nav>
  );
}

export default Home;
