import { FaCar } from "react-icons/fa6"
import { MdNavigateNext } from "react-icons/md"

function Hero() {
  return (
    <>
      <div className="hero font-rubik">
        <div className="hero-text flex flex-col justify-center gap-4 items-center text-center px-4 py-4">
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
          <button className="flex items-center gap-3 w-2/3 h-16 justify-center rounded bg-orangelight shadow-md shadow-orange text-white font-bold">
            Book Ride <FaCar />
          </button>
          <button className="flex items-center gap-1 w-2/3 h-16 justify-center bg-black text-white font-bold">
            Learn More <MdNavigateNext className="size-6" />
          </button>
        </div>
      </div>
    </>
  )
}

export default Hero
