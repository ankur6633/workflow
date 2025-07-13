import { BarChart, List, GraduationCap, Settings, Users, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/employees");
  };
  return (
    <div className="flex min-h-screen bg-[#f5f7ff]">
      {/* Sidebar */}
      <div className="w-64 bg-blue-600 text-white flex flex-col justify-between">
        <div>
          <div className="p-6 flex items-center space-x-2">
            <img
          src="src/assets/Images/Group.png"
          alt="workflow logo"
          className="w-10 h-10 mt-5 ml-5 bg-white rounded-2xl"
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
            <a href="#" className="flex items-center space-x-2 bg-blue-500 p-2 rounded" onClick={handleLogin}>
              <BarChart className="w-5 h-5" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}>
              <Users className="w-5 h-5" />
              <span>Employees</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}>
              <CalendarDays className="w-5 h-5" />
              <span>Attendance</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}>
              <List className="w-5 h-5" />
              <span>Tasks</span>
            </a>
            <a href="#" className="flex items-center space-x-2 hover:bg-blue-500 p-2 rounded" onClick={handleLogin}>
              <Settings className="w-5 h-5" />
              <span>Settings</span>
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-2 p-4 bg-blue-500">
          <img
            src="src/assets/Images/Ellipse 8.png"
            alt="profile"
            className="rounded-full"
          />
          <div>
            <p className="text-sm font-medium">Tom H.</p>
            <p className="text-xs">Project Manager</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Total Employees</p>
                <h2 className="text-2xl font-bold text-blue-600">142</h2>
                <p className="text-green-500 text-sm">↑ 12% from last month</p>
              </div>
              <Users className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          {/* Card 2 */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Active Tasks</p>
                <h2 className="text-2xl font-bold text-red-500">87</h2>
                <p className="text-red-500 text-sm">↓ 3% from last week</p>
              </div>
              <List className="w-8 h-8 text-gray-400" />
            </div>
          </div>
          {/* Card 3 */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-500">Interns</p>
                <h2 className="text-2xl font-bold text-green-500">24</h2>
                <p className="text-green-500 text-sm">↑ 5% from last week</p>
              </div>
              <GraduationCap className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Activity Graph */}
          <div className="bg-white p-6 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold">Employee Activity</h3>
              <button className="bg-gray-100 text-gray-600 px-3 py-1 rounded" onClick={handleLogin}>Quarterly</button>
            </div>
            {/* Placeholder for chart */}
            <div className="h-48 bg-gradient-to-t from-blue-600 to-blue-300 rounded flex items-end justify-center">
              <section className="bg-white rounded-lg p-6 flex-1 min-w-[320px] shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-gray-900 font-semibold text-lg">Employee Activity</h2>
                <button className="px-3 py-1 text-xs border rounded-full border-gray-300 text-gray-700 select-none hover:bg-gray-100 transition" onClick={handleLogin}>
                  Quarterly
                </button>
              </div>
              {/* Placeholder bar chart */}
              <div className="relative flex items-end justify-between h-48 space-x-2">
                {[...Array(12).keys()].map((i) => {
                  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][i];
                  const heights = [30, 40, 35, 50, 25, 45, 20, 75, 40, 60, 40, 30];
                  return (
                    <div key={month} className="flex flex-col items-center">
                      <div
                        className={`relative w-6 rounded-md ${i === 7 ? "bg-purple-700" : "bg-purple-300"}`}
                        style={{ height: heights[i] * 2 }}
                        aria-label={`Bar for ${month} with value ${heights[i]}`}
                      >
                        {i === 7 && (
                          <span className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded-md px-1 py-0.5 flex items-center gap-1 select-none">
                            <svg className="w-3 h-3 text-green-400"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"></path>
                            </svg>
                            35%
                          </span>
                        )}
                      </div>
                      <span className="mt-2 text-xs text-gray-600 select-none">{month}</span>
                    </div>
                  );
                })}
              </div>
            </section>
            </div>
          </div>

          {/* Attendance Calendar */}
          <div className="bg-white p-6 rounded shadow">
            <section className="bg-white rounded-lg p-6 min-w-[320px] shadow-md">
              <h2 className="text-gray-900 font-semibold text-lg mb-4">Attendance Overview</h2>
              <div className="w-full max-w-xs mx-auto border rounded-lg p-4 select-none user-select-none" aria-label="Calendar widget">
                <header className="flex justify-between items-center mb-3 text-gray-500 text-sm">
                  <button aria-label="Previous month" className="hover:text-gray-700">&lt; onClick={handleLogin}</button>
                  <span>June, 2025</span>
                  <button aria-label="Next month" className="hover:text-gray-700">&gt; onClick={handleLogin}</button>
                </header>
                <div className="grid grid-cols-7 gap-1 mb-2 text-xs text-center text-gray-400 select-none">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="py-1">{day}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs text-gray-700 select-none">
                  {[
                    1, 1, 2, 3, 4, 5, 6,
                    7, 8, 9, 10, 11, 12, 13,
                    14, 15, 16, 17, 18, 19, 20,
                    21, 22, 23, 24, 25, 26, 27,
                    28, 29, 30, 1, 2, 3, 4
                  ].map((day, idx) => {const isCurrent = day === 16 && idx >= 14 && idx <= 20;
                    const isDisabled = idx < 2 || idx >= 30;
                    return (
                      <button
                        key={idx}
                        disabled={isDisabled}
                        className={`rounded-full aspect-square w-full 
                          ${isCurrent ? "bg-blue-700 text-white font-semibold" : ""}
                          ${isDisabled ? "text-gray-300 cursor-default" : "hover:bg-blue-100 cursor-pointer"}
                        `}
                        aria-current={isCurrent ? "date" : undefined}
                        aria-label={isCurrent ? "Selected date 16 June 2025" : `Day ${day}`}
                        onClick={() => {}}
                        type="button"
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
