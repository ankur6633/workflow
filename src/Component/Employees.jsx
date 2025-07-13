import {
  BarChart,
  List,
  GraduationCap,
  Settings,
  Users,
  CalendarDays,
  UserRoundPlus,
  Search,
  SquarePen,
  Trash,
} from "lucide-react";

import { employees } from "../../src/assets/Data/Data";
import { useNavigate } from "react-router-dom";

const Employees = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/addNewEmployee");
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-blue-200">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-blue-600 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 flex items-center space-x-2">
            <img
              src="src/assets/Images/Group.png"
              alt="workflow logo"
              className="w-10 h-10 mt-5 ml-2 bg-white rounded-2xl"
            />
            <h1 className="font-bold text-lg">workflow</h1>
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="Search"
              className="w-full px-3 py-2 rounded bg-blue-500 placeholder-white focus:outline-none"
            />
          </div>
          <nav className="mt-6 flex flex-col space-y-2 px-4">
            <a
              href="#"
              className="flex items-center space-x-2 bg-blue-500 p-2 rounded" onClick={handleLogin}
            >
              <BarChart className="w-5 h-5" />
              <span>Dashboard</span> 
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}
            >
              <Users className="w-5 h-5" />
              <span>Employees</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}
            >
              <CalendarDays className="w-5 h-5" />
              <span>Attendance</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}
            >
              <List className="w-5 h-5" />
              <span>Tasks</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}
            >
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-blue-500">
          <img
            src="src/assets/Images/Ellipse 8.png"
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Tom H.</p>
            <p className="text-xs">Project Manager</p>
          </div>
        </div>
      </div>

      {/* Main section */}
      <div className="flex-1 flex flex-col overflow-auto">
        {/* Header */}
        <div className="bg-amber-200 w-full flex flex-col md:flex-row justify-between items-center p-4 shadow h-[20vh]">
          <h1 className="text-2xl text-blue-500 font-inter font-bold mb-4 md:mb-0">
            Employees
          </h1>
          <div className="flex flex-wrap justify-center md:justify-end gap-3 w-full md:w-auto">
            <button className="btn btn-primary flex items-center gap-2" onClick={handleLogin}>
              <UserRoundPlus />
              Add Employee
            </button>

            <div className="relative w-full md:w-auto max-w-xs">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search employees"
                className="w-full pl-10 pr-4 py-2 rounded bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn flex justify-between w-36">
                Sort by
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-36"
              >
                <li>
                  <a>Newest</a>
                </li>
                <li>
                  <a>Latest</a>
                </li>
                <li>
                  <a>Trending</a>
                </li>
                <li>
                  <a>Bestseller</a>
                </li>
              </ul>
            </div>

            <button className="btn btn-primary" onClick={handleLogin}>Export</button>
          </div>
        </div>

        {/* Table */}
        <div className="p-6 overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-3 px-5 text-left font-medium text-gray-600">
                  Name
                </th>
                <th className="py-3 px-5 text-left font-medium text-gray-600">
                  Email
                </th>
                <th className="py-3 px-5 text-left font-medium text-gray-600">
                  Role
                </th>
                <th className="py-3 px-5 text-left font-medium text-gray-600">
                  Department
                </th>
                <th className="py-3 px-5 text-left font-medium text-gray-600">
                  Status
                </th>
                <th className="py-3 px-5 text-left font-medium text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp, idx) => (
                <tr
                  key={emp.email}
                  className={`hover:bg-gray-100 transition ${
                    idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                  }`}
                >
                  <td className="py-3 px-5 whitespace-nowrap">{emp.name}</td>
                  <td className="py-3 px-5 whitespace-nowrap">{emp.email}</td>
                  <td className="py-3 px-5 whitespace-nowrap">{emp.role}</td>
                  <td className="py-3 px-5 whitespace-nowrap">
                    {emp.department}
                  </td>
                  <td className="py-3 px-5 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        emp.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-3 px-5 whitespace-nowrap flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700 transition" onClick={handleLogin}>
                      <SquarePen />
                    </button>
                    <button className="text-red-500 hover:text-red-700 transition" onClick={handleLogin}>
                      <Trash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
