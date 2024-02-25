import { useState } from "react"
import logo from "../assets/logo/logo.0ad964cb93ab30cc809d.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="bg-transparent absolute top-0 left-0 right-0 flex justify-between items-center h-28 px-5 z-50">
      <img src={logo} className="w-[9rem]" />
      <RxHamburgerMenu
        className={menuOpen ? "size-8 text-orange" : "size-8"}
        onClick={openMenu}
      />
      <div
        className={
          menuOpen
            ? "w-full h-[100dvh] absolute top-0 left-0 ease-in-out duration-500 z-10 bg-white flex justify-center items-center"
            : "w-full h-[100dvh] absolute -left-full top-0 ease-in-out duration-500 z-10 bg-white flex justify-center items-center"
        }
      >
        <IoCloseOutline
          className="absolute right-3 top-8 size-12"
          onClick={openMenu}
        />
        <ul className="text-2xl font-semibold text-center space-y-8">
          <li onClick={openMenu}>
            <Link to="/">Home</Link>
          </li>
          <li onClick={openMenu}>
            <Link to="/about">About</Link>
          </li>
          <li onClick={openMenu}>
            <Link to="/models">Models</Link>
          </li>
          <li onClick={openMenu}>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li onClick={openMenu}>
            <Link to="/team">Our team</Link>
          </li>
          <li onClick={openMenu}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
