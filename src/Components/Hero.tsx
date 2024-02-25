import { useEffect, useState } from "react"
import { FaCar } from "react-icons/fa6"
import { MdNavigateNext } from "react-icons/md"
import { FaCircleArrowUp } from "react-icons/fa6"
import maincar from "../assets/hero/main-car.png"
import herobg from "../assets/hero/hero-bg.png"

function Hero() {
  const [goUp, setGoUp] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true)
      } else {
        setGoUp(false)
      }
    }
    window.addEventListener("scroll", onPageScroll)

    return () => {
      window.removeEventListener("scroll", onPageScroll)
    }
  }, [])

  return (
    <>
      <div className="hero font-rubik bg-gray pt-28 pb-36 lg:flex lg:items-center lg:pt-12 lg:min-h-dvh lg:justify-center lg:gap-16">
        <img
          src={herobg}
          className="hidden lg:block absolute right-0 max-w-[50%] min-h-[90dvh]"
        />
        <div className="2xl:w-1/4 xl:w-2/4 max-h-[500px] z-20 lg:pl-8 lg:pt-16">
          <div className="hero-text flex flex-col justify-center gap-4 items-center text-center px-4 py-12 lg:text-left lg:p-0">
            <h4 className="font-bold text-2xl w-full">Plan your trip now</h4>
            <h1 className="font-bold text-large">
              Save <span className="text-orange font-normal>">big</span> with
              our car rental{" "}
            </h1>
            <p className="opacity-70 text-lg">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
          </div>
          <div className="hero-btns flex flex-col justify-center gap-4 items-center mt-6 lg:flex-row lg:max-w-[400px]">
            <a
              href="#carbook"
              className="flex items-center gap-3 w-2/3 h-16 justify-center rounded bg-orangelight shadow-md shadow-orange text-white font-bold"
            >
              Book Ride <FaCar />
            </a>
            <a className="flex items-center gap-1 w-2/3 h-16 justify-center bg-black text-white font-bold">
              Learn More <MdNavigateNext className="size-6" />
            </a>
          </div>
        </div>
        <img
          src={maincar}
          className="hidden lg:block lg:max-w-[40%] py-12 z-20"
        />
      </div>
      <div
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 ${goUp ? "block" : "hidden"}`}
      >
        <FaCircleArrowUp className="text-orange size-12" />
      </div>
    </>
  )
}

export default Hero
