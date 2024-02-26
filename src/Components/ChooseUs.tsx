import cars from "../assets/choose-us/main.png"
import iconOne from "../assets/choose-us/icon1.png"
import iconTwo from "../assets/choose-us/icon2.png"
import iconThree from "../assets/choose-us/icon3.png"
import { MdNavigateNext } from "react-icons/md"

function ChooseUs() {
  return (
    <div className="pt-24 font-rubik xl:bg-[url('/src/assets/choose-us/bg.png')] xl:bg-no-repeat xl:bg-left">
      <div className="lg:w-full">
        <img src={cars} className="lg:mx-auto lg:w-[60%] " />
      </div>
      <div className="lg:flex xl:w-[70%] 2xl:w-[60%] lg:w-[95%] lg:mx-auto lg:gap-36">
        <div className="flex flex-col items-center pt-8 lg:items-start lg:w-1/2 lg:pt-16">
          <h4 className="text-xl font-semibold">Why Choose Us </h4>
          <h2 className="text-4xl font-semibold text-center pt-4 px-2 lg:text-left lg:px-0">
            Best valued deals you will ever find
          </h2>
          <p className="text-center px-6 pt-4 opacity-70 pb-8 lg:text-left lg:px-0 lg:opacity-70">
            Discover the best deals you'll ever find with our unbeatable offers.
            We're dedicated to providing you with the best value for your money,
            so you can enjoy top-quality services and products without breaking
            the bank. Our deals are designed to give you the ultimate renting
            experience, so don't miss out on your chance to save big.
          </p>
          <button className="flex items-center bg-orange w-2/5 justify-center h-14 rounded text-white font-medium shadow-orange shadow-md">
            Find Details <MdNavigateNext className="size-6" />
          </button>
        </div>
        <div className="grid gap-8 pt-16 bg-[url('/src/assets/choose-us/bg.png')] xl:bg-none pb-16 lg:w-1/2">
          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-4 ">
            <img src={iconOne} />
            <div className="text-center lg:text-left ">
              <h2 className="text-2xl font-semibold py-2">
                Cross Country Drive
              </h2>
              <p className="text-center px-12  lg:text-left lg:px-0 lg:opacity-70">
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-4 ">
            <img src={iconTwo} />
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold py-2">
                All Inclusive Pricing
              </h2>
              <p className="text-center px-12 lg:text-left lg:px-0 lg:opacity-70">
                Get everything you need in one convenient, transparent price
                with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-4 ">
            <img src={iconThree} />
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold py-2">No Hidden Charges</h2>
              <p className="text-center px-12 lg:text-left lg:px-0 lg:opacity-70">
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChooseUs
