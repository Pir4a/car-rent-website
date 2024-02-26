import HeroPages from "../Components/HeroPages"
import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"
import { TbLocationFilled } from "react-icons/tb"
import GetInTouch from "../Components/GetInTouch"

function Contact() {
  return (
    <>
      <HeroPages name={"Contact"} />
      <div
        className="py-20 flex flex-col font-rubik bg-[url('/src/assets/banner/bg-contact.png')] bg-center lg:grid lg:grid-cols-2 lg:grid-rows-1
      lg:place-items-center xl:w-3/4 lg:mx-auto lg:bg-no-repeat"
      >
        <div className="flex flex-col text-center gap-8 px-12 lg:text-left lg:items-start">
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
            <label className="text-lg font-medium w-3/4">Full Name</label>
            <input
              type="text"
              placeholder='E.g : "John Cena"'
              className="w-3/4 bg-zinc-100 lg:bg-zinc-200 h-12 px-12 text-black placeholder-zinc-500 lg:placeholder-zinc-600"
            />
            <label className="text-lg font-medium w-3/4">Email</label>
            <input
              type="email"
              placeholder="E.g: johncena@gmail.com"
              className="w-3/4 bg-zinc-100 lg:bg-zinc-200 h-12 px-12 text-black placeholder-zinc-500 lg:placeholder-zinc-600 "
            />
            <label className="text-lg font-medium w-3/4">
              Tell us about it
            </label>
            <textarea
              placeholder="Write here . . ."
              className="w-3/4 bg-zinc-100 lg:bg-zinc-200 h-36 px-12 py-4 text-black placeholder-zinc-500 lg:placeholder-zinc-600"
            />
            <input
              type="submit"
              value="Send Message"
              className="w-3/4 h-12 lg:h-16 flex items-center justify-center placeholder-zinc-500 mt-2
              bg-orange text-white font-semibold text-lg shadow-orange shadow-md rounded lg:relative"
            />
          </form>
        </div>
      </div>
      <GetInTouch />
    </>
  )
}

export default Contact
