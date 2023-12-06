import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home"
import Signup from "./Signup"
import Login from "./Login"

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/register" element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </BrowserRouter>     
    </>
  )
}

export default App
