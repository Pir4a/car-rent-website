import { Route, Routes } from "react-router-dom"
import "./App.css"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home"
import Footer from "./Components/Footer"
import About from "./Pages/About"
import Models from "./Pages/Models"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/models" element={<Models />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
