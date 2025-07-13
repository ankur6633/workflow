import { useNavigate } from "react-router-dom";

const AddNewEmployee = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen bg-blue-100 flex items-center justify-center">
      <div className="border border-amber-50 p-10 rounded bg-white w-full max-w-md shadow-lg">
        <h1 className="text-2xl font-semibold mb-6 text-center text-[#567BFF]">
          Add New Employee
        </h1>
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-medium">Email Address</label>
            <input
              type="email"
              placeholder="Enter email"
              className="border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          {/* Role and Department in same row */}
          <div className="flex gap-4">
            <div className="flex-1">
              <h1 className="font-medium mb-1">Role</h1>
              <div className="dropdown dropdown-end w-full">
                <label tabIndex={0} className="btn flex justify-between w-full">
                  Select role
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
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
                >
                  <li>
                    <a>Admin</a>
                  </li>
                  <li>
                    <a>Intern</a>
                  </li>
                  <li>
                    <a>Manager</a>
                  </li>
                  <li>
                    <a>Employee</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex-1">
              <h1 className="font-medium mb-1">Department</h1>
              <div className="dropdown dropdown-end w-full">
                <label tabIndex={0} className="btn flex justify-between w-full">
                  Select department
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
                  className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-48"
                >
                  <li>
                    <a>HR</a>
                  </li>
                  <li>
                    <a>Engineering</a>
                  </li>
                  <li>
                    <a>Marketing</a>
                  </li>
                  <li>
                    <a>Finance</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex gap-5">
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>
              Add Employee
            </button>
            <button type="button" className="btn bg-[#E7ECFE]" onClick={handleLogin}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNewEmployee;
