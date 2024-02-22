import { useState } from "react"
import logo from "../assets/logo/logo.0ad964cb93ab30cc809d.png"
import { RxHamburgerMenu } from "react-icons/rx"
import { IoCloseOutline } from "react-icons/io5"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const openMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="flex justify-between items-center h-28 px-5">
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
          <li>Home</li>
          <li>About</li>
          <li>Models</li>
          <li>Testimonials</li>
          <li>Our team</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
