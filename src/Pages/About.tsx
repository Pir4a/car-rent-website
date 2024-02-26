import GetInTouch from "../Components/GetInTouch"
import HeroPages from "../Components/HeroPages"
import Plan from "../Components/Plan"
import client from "../assets/about/about-main.jpg"
import iconone from "../assets/about/icon1.png"
import icontwo from "../assets/about/icon2.png"
import iconthree from "../assets/about/icon3.png"

function About() {
  return (
    <>
      <HeroPages name={"About"} />
      <div className="py-24 flex flex-col items-center font-rubik lg:flex-row lg:w-full lg:justify-center lg:gap-8 lg:pb-8 lg:pt-6 ">
        <img
          src={client}
          className="w-11/12 shadow-lg border-slate-200 border-2 max-h-96 max-w-96"
        />
        <div
          className="flex flex-col text-center items-center mt-16 gap-6 
        border-2 border-slate-100 py-4 shadow-md w-[98%] lg:w-1/3 lg:h-[500px]"
        >
          <h4 className="text-2xl lg:text-3xl font-medium px-12">
            About Our Company
          </h4>
          <h2 className="text-4xl font-semibold px-8">
            You start the engine and your adventure begins
          </h2>
          <p className="px-4 opacity-70">
            Welcome to Car Rental, your go-to for seamless bookings, exclusive
            deals, and top-notch service. Whether it's business or leisure,
            trust us for hassle-free transportation. Let us take you there, with
            ease and comfort.
          </p>
          <div className="flex flex-col gap-8 py-8 lg:flex-row lg:gap-16 lg:items-center">
            <div className="flex flex-col items-center">
              <img src={iconone} />
              <span className="font-bold text-3xl">20</span>
              <p className="text-xl opacity-90">Car type</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={icontwo} />{" "}
              <span className="font-bold text-3xl">85</span>
              <p className="text-xl opacity-90">Rental Outlets</p>
            </div>
            <div className="flex flex-col items-center">
              <img src={iconthree} />{" "}
              <span className="font-bold text-3xl">75</span>
              <p className="text-xl opacity-90">Repair Shop</p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block h-[1px] w-full bg-slate-200 mt-4"></div>
      <Plan />
      <GetInTouch />
    </>
  )
}

export default About
