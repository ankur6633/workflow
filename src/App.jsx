import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Component/Home";
import Login from './Component/Login'
import Signup from './Component/Signup'
import Dashboard from './Component/Dashboard'
import Employees from './Component/Employees'
import AddNewEmployee from './Component/AddNewEmployee'

function App() {

  return (
    <>
    <Router>
       <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/signup" element={<Signup/>}/>
         <Route path="/login" element={<Login/>}/>
         <Route path="/dashboard" element={<Dashboard/>}/>
         <Route path="/employees" element={<Employees/>}/>
         <Route path="/addNewEmployee" element={<AddNewEmployee/>}/>
       </Routes>
    </Router>
    </>
  )
}

export default App
