import { useState } from "react"
import { HiChevronDown } from "react-icons/hi2"

function Faq() {
  const [isDown, setIsDown] = useState(0)

  let styleDown =
    "overflow-hidden px-4 max-h-0 opacity-70 transition-all duration-500 ease-out bg-white font-normal"
  let styleDownActive =
    "overflow-hidden px-4 py-4 max-h-96 opacity-70 transition-all duration-500 ease-out bg-white font-normal"

  return (
    <div className="py-24 font-rubik">
      <div className="flex flex-col gap-4 text-center pb-12">
        <h1 className="text-6xl font-semibold text-orangelight">F.A.Q</h1>
        <h2 className="text-4xl font-medium">Frequently Asked Questions</h2>
        <p className="opacity-70 pt-4 px-4">
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>
      <div className="flex flex-col w-10/12 shadow-lg mx-auto divide-y-2 divide-slate-100 border-2 border-slate-100">
        <div
          className=" font-medium pb-4 text-lg relative"
          onClick={() => {
            isDown == 1 ? setIsDown(0) : setIsDown(1)
          }}
        >
          <p
            className={
              isDown == 1
                ? "bg-orange px-4 font-medium pt-6 pb-4 text-lg relative shadow-lg shadow-orange transition-all duration-300 ease-in-out"
                : "px-4 font-medium pt-6  text-lg relative transition-all duration-300 ease-in-out"
            }
          >
            1. What is special about comparing rental car deals?
          </p>
          <HiChevronDown className="absolute right-1 top-[20%]" />
          <p className={isDown == 1 ? styleDownActive : styleDown}>
            Comparing rental car deals is important as it helps find the best
            deal that fits your budget and requirements, ensuring you get the
            most value for your money. By comparing various options, you can
            find deals that offer lower prices, additional services, or better
            car models. You can find car rental deals by researching online and
            comparing prices from different rental companies.
          </p>
        </div>
        <div
          className=" font-medium text-lg relative"
          onClick={() => {
            isDown == 2 ? setIsDown(0) : setIsDown(2)
          }}
        >
          <p
            className={
              isDown == 2
                ? "bg-orange px-4 font-medium pt-6 pb-4 text-lg relative shadow-lg shadow-orange transition-all duration-300 ease-in-out"
                : "px-4 font-medium pb-4 pt-6  text-lg relative transition-all duration-300 ease-in-out"
            }
          >
            2. How do I find the car rental deals?
          </p>
          <HiChevronDown className="absolute right-1 top-[40%]" />
          <p className={isDown == 2 ? styleDownActive : styleDown}>
            You can find car rental deals by researching online and comparing
            prices from different rental companies. Websites such as Expedia,
            Kayak, and Travelocity allow you to compare prices and view
            available rental options. It is also recommended to sign up for
            email newsletters and follow rental car companies on social media to
            be informed of any special deals or promotions.
          </p>
        </div>
        <div
          className=" font-medium text-lg relative"
          onClick={() => {
            isDown == 3 ? setIsDown(0) : setIsDown(3)
          }}
        >
          <p
            className={
              isDown == 3
                ? "bg-orange px-4 font-medium pt-6 pb-4 text-lg relative shadow-lg shadow-orange transition-all duration-300 ease-in-out"
                : "px-4 font-medium pb-4 pt-6  text-lg relative transition-all duration-300 ease-in-out"
            }
          >
            3. How do I find such low rental car prices?
          </p>
          <HiChevronDown className="absolute right-1 top-[40%]" />
          <p className={isDown == 3 ? styleDownActive : styleDown}>
            Book in advance: Booking your rental car ahead of time can often
            result in lower prices. Compare prices from multiple companies: Use
            websites like Kayak, Expedia, or Travelocity to compare prices from
            multiple rental car companies. Look for discount codes and coupons:
            Search for discount codes and coupons that you can use to lower the
            rental price. Renting from an off-airport location can sometimes
            result in lower prices.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Faq
