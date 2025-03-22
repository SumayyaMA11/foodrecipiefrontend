import { Home } from "./Home/Home";
import { Navbar } from "./Home/Navbar"
import { Login } from "./Login/Login"
import Register from "./Login/Register"
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  

  return (
    <>
    
    <Router>
    <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        
    </Router>
    </>
  )
}

export default App
