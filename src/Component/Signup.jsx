import { Mail, Youtube, AtSign } from "lucide-react";
import { useNavigate } from "react-router-dom";



const Signup = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <div className="min-h-screen w-full">
      <div className="flex items-center">
        <img
          src="src/assets/Images/Group.png"
          alt="workflow logo"
          className="w-10 h-10 mt-5 ml-5"
        />
        <h1 className="font-bold text-2xl ml-5 mt-4 capitalize ">workflow</h1>
      </div>
      <div className="flex w-full bg-gradient-to-r from-white to-purple-50">
        <div className="flex flex-col justify-center items-center w-full max-w-6xl mx-auto p-6 md:flex-row">
          {/* Left side */}
          <div className="w-full md:w-1/2 p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="input input-bordered w-full"
                />
                <p>EnterYour email address</p>
              </div>
              <div>
                <label className="block text-gray-700 mb-1 font-semibold">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex gap-3">
                <label className="block text-gray-700 mb-1 font-semibold">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Repeat your Password"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0 font-semibold">
                <span className="text-gray-700">Role</span>
                <div className="flex flex-wrap gap-3 sm:justify-end">
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="role" className="radio" />
                    <span className="text-gray-600">Admin</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="role" className="radio" />
                    <span className="text-gray-600">Intern</span>
                  </label>
                  <label className="flex items-center space-x-1">
                    <input type="radio" name="role" className="radio" />
                    <span className="text-gray-600">User</span>
                  </label>
                </div>
              </div>

              <div className="flex items-center  space-x-3 font-semibold">
                <input type="checkbox" className="checkbox" />
                <span>Accept terms and condition</span>
              </div>
              <p className="text-gray-500">You agree to our Terms of Service and Privacy Policy.</p>
              <div className="flex items-center justify-center">
                <button className="btn btn-primary flex items-center space-x-2 " onClick={handleLogin}>
              <Mail className="w-5 h-5" />
              <span>Sign Up with Email</span>
            </button>
              </div>

            </form>
          </div>

          {/* Divider */}
          <div className="hidden md:flex justify-center">
            <div className="border-l h-96 mx-6"></div>
          </div>

          {/* Right side */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center space-y-4 p-6">
            <p className="text-gray-500">Already have an account?</p>
            <button className="btn btn-primary px-10" onClick={handleLogin}>Login</button>
            <div className="flex items-center w-full">
              <hr className="flex-grow border-gray-300" />
              <span className="mx-2 text-gray-500">Or,</span>
              <hr className="flex-grow border-gray-300" />
            </div>
            <p className="text-gray-500">Connect with</p>
            <div className="flex space-x-4">
              <button className="btn btn-circle" onClick={handleLogin}>
                <img
                  src="src\assets\Images\Google.png"
                  alt="Google"
                  className="w-10 h-10"
                />
              </button>
              <button className="btn btn-circle" onClick={handleLogin}>
                <img
                  src="src\assets\Images\Facebook.png"
                  alt="Facebook"
                  className="w-10 h-10"
                />
              </button>
            </div>
            <p className="text-gray-500">Having any issues?</p>
            <button className="btn btn-primary px-10" onClick={handleLogin}>Contact Support</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
