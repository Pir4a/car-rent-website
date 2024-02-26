import goku from "../assets/testimonials/goku.png"
import vegeta from "../assets/testimonials/vegeta.png"
import { FaQuoteRight } from "react-icons/fa"

function Testimonials() {
  return (
    <div className="bg-gray py-24 font-rubik">
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-medium lg:text-2xl">
          Reviewed by Customers
        </h3>
        <h2 className="text-4xl font-semibold lg:text-5xl">
          Client's Testimonials
        </h2>
        <p className="opacity-70 text-center px-8 pb-8 lg:w-2/5">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="lg:flex lg:w-2/3 lg:mx-auto lg:gap-8 lg:pt-8">
        <div className="flex lg:relative flex-col pt-14 pb-10 lg:pb-14 px-8 items-center text-center min-h-32 w-11/12 rounded bg-white mx-auto shadow-md lg:shadow-lg">
          <p className="text-2xl text-left font-medium lg:pb-2">
            "We rented a car from this website and had an amazing experience!
            The booking was easy and the rental rates were very affordable. "
          </p>
          <div className="flex w-full gap-6 justify-start  items-center pt-6">
            <img
              src={goku}
              className="size-[4.5rem] rounded-full border-2 border-slate-300"
            />

            <p className="flex flex-col text-left text-lg">
              <span className="font-semibold">Son Goku</span> Paris
            </p>
          </div>
          <FaQuoteRight className="hidden lg:block lg:absolute lg:right-16 lg:bottom-8 size-12 text-orange" />
        </div>
        <div className="hidden lg:relative lg:flex flex-col pt-14 pb-10 px-8 items-center text-center min-h-32 w-11/12 rounded bg-white mx-auto shadow-md lg:shadow-lg">
          <p className="text-2xl text-left font-medium lg:w-full lg:pb-2">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </p>
          <div className="flex w-full gap-6 justify-start  items-center pt-6">
            <img
              src={vegeta}
              className="size-[4.5rem] rounded-full border-2 border-slate-300"
            />

            <p className="flex flex-col text-left text-lg">
              <span className="font-semibold">Vegeta</span> Lyon
            </p>
          </div>
          <FaQuoteRight className="hidden lg:block lg:absolute lg:right-16 lg:bottom-8 size-12 text-orange" />
        </div>
      </div>
    </div>
  )
}

export default Testimonials
