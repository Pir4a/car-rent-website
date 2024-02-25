import HeroPages from "../Components/HeroPages"
import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { TbLocationFilled } from "react-icons/tb"
import GetInTouch from "../Components/GetInTouch"

function Contact() {
  return (
    <>
      <HeroPages name={"Contact"} />
      <div className="py-20 flex flex-col font-rubik bg-[url('/src/assets/banner/bg-contact.png')] bg-center">
        <div className="flex flex-col text-center gap-8 px-12">
          <h2 className="text-4xl font-bold">Need additional information?</h2>
          <p className="opacity-70">
            A multifaceted professional skilled in multiple fields of research,
            development as well as a learning specialist. Over 15 years of
            experience.
          </p>
          <a className="flex items-center justify-center gap-4 text-xl pt-4">
            {" "}
            <FaPhone />
            <p>(123)-456-789</p>
          </a>
          <a className="flex items-center justify-center gap-4 text-xl">
            {" "}
            <IoMail />
            <p>carrental@gamil.com</p>
          </a>
          <a className="flex items-center justify-center gap-4 text-xl">
            {" "}
            <TbLocationFilled />
            <p>France, Paris</p>
          </a>
        </div>
        <div className="flex flex-col items-center justify-center pt-8 w-full">
          <form className="flex flex-col justify-center items-center pt-4 gap-4 w-full">
            <label className="text-lg font-medium">Full Name</label>
            <input
              type="text"
              placeholder='E.g : "John Cena"'
              className="w-3/4 bg-zinc-100 h-12 px-12 text-black placeholder-zinc-500 "
            />
            <label className="text-lg font-medium">Email</label>
            <input
              type="email"
              placeholder="E.g: johncena@gmail.com"
              className="w-3/4 bg-zinc-100 h-12 px-12 text-black placeholder-zinc-500 "
            />
            <label className="text-lg font-medium">Tell us about it</label>
            <textarea
              placeholder="Write here . . ."
              className="w-3/4 bg-zinc-100 h-36 px-12 py-4 text-black placeholder-zinc-500"
            />
            <input
              type="submit"
              value="Send Message"
              className="w-3/4 h-12 flex items-center justify-center placeholder-zinc-500 mt-2
              bg-orange text-white font-semibold text-lg shadow-orange shadow-md rounded"
            />
          </form>
        </div>
      </div>
      <GetInTouch />
    </>
  )
}

export default Contact
