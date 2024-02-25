import { useEffect, useState } from "react"
import { FaCar } from "react-icons/fa6"
import { MdNavigateNext } from "react-icons/md"
import { FaCircleArrowUp } from "react-icons/fa6"

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
      <div className="hero font-rubik bg-gray pb-36">
        <div className="hero-text flex flex-col justify-center gap-4 items-center text-center px-4 py-12">
          <h4 className="font-bold text-2xl">Plan your trip now</h4>
          <h1 className="font-bold text-large">
            Save <span className="text-orange font-normal>">big</span> with our
            car rental{" "}
          </h1>
          <p className="opacity-70 text-lg">
            Rent the car of your dreams. Unbeatable prices, unlimited miles,
            flexible pick-up options and much more.
          </p>
        </div>
        <div className="hero-btns flex flex-col justify-center gap-4 items-center mt-6">
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
