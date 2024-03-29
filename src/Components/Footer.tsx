import { FaPhone } from "react-icons/fa6"
import { IoMail } from "react-icons/io5"

function Footer() {
  return (
    <footer className="py-20">
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:mx-auto 2xl:w-3/4 lg:gap-0 lg:items-start  ">
        <div className="flex flex-col gap-4 items-center text-center lg:text-left lg:items-start px-8 lg:w-1/4 ">
          <h3 className="text-2xl tracking-wide font-bold ">
            <span className=" font-extrabold">CAR </span>Rental
          </h3>
          <p className="opacity-70 text-lg">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs.
          </p>
          <h4 className="flex gap-3 items-center font-semibold pt-4 focus:text-orange cursor-pointer hover:text-orange">
            <FaPhone className="size-6 mt-[2px]" />
            (123)-456-789
          </h4>
          <h4 className="flex gap-3 items-center font-semibold pt-4 focus:text-orange cursor-pointer hover:text-orange">
            <a
              href="mailto: 
                carrental@gmail.com"
              className="flex gap-3 items-center"
            >
              <IoMail className="size-6 mt-[2px]" />
              carrental@gmail.com
            </a>
          </h4>
        </div>
        <div className="flex flex-col items-center gap-4 text-center pt-8 lg:pt-0 lg:w-1/4 lg:text-left lg:items-start xl:px-16 lg:px-12  ">
          <h4 className="text-2xl font-bold tracking-wide">COMPANY</h4>
          <ul className="space-y-2 font-medium text-lg">
            <li>Paris</li>
            <li>Careers</li>
            <li>Mobile</li>
            <li>Blog</li>
            <li>How we work</li>
          </ul>
        </div>
        <div className="flex flex-col gap-4 items-center pt-8 pb-4 lg:w-1/4 lg:text-left lg:items-start lg:px-8 lg:h-full lg:py-0  ">
          <h4 className="text-2xl font-bold tracking-wide">WORKING HOURS</h4>
          <ul className="text-center space-y-2 font-medium  lg:text-left">
            <li>Monday - Friday 9:00AM - 6:00PM</li>
            <li>Saturday: 9:00AM - 5:00PM</li>
            <li>Sunday: CLOSED</li>
          </ul>
        </div>
        <div className=" lg:w-1/4 lg:text-left lg:items-start ">
          <div className="flex flex-col gap-4 items-center px-8 pt-4 lg:pt-0 border-t-2 border-slate-200 lg:border-none lg:text-left lg:items-start">
            <h4 className="text-2xl font-bold tracking-wide">SUBSCRIPTION</h4>
            <p className="text-center lg:text-left">
              Enter your email address to subscribe for latest news & updates!
            </p>
          </div>
          <div className="w-full py-4 pt-8">
            <form className="flex flex-col items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter Email Adress"
                className="px-12 w-4/5 h-12 bg-slate-100 border-slate-200 shadow-md"
              />
              <button
                type="submit"
                className="w-4/5 h-12 bg-orange shadow-md shadow-orange text-white font-bold text-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
