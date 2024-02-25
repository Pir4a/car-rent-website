import { useState } from "react"
import CARDATA from "./CarData"
import { FaArrowAltCircleRight } from "react-icons/fa"
import { FaArrowAltCircleLeft } from "react-icons/fa"

function CarModels() {
  const [imageIndex, setImageIndex] = useState(0)

  function showNextImage() {
    setImageIndex((index) => {
      if (index === carImgArray.length - 1) return 0
      return index + 1
    })
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return carImgArray.length - 1
      return index - 1
    })
  }

  let carImgArray = Array.from(CARDATA, (carimage) => carimage.img)

  const btnstyles =
    "h-14 w-full bg-zinc-300 bg-opacity-70 flex items-center px-6 font-medium text-xl focus:bg-orangelight focus:text-white"
  const btnstylesfocus =
    "h-14 w-full bg-opacity-100 flex items-center px-6 font-medium text-xl bg-orangelight text-white focus:bg-orangelight focus:text-white"

  return (
    <div className="font-rubik pt-24">
      <div className="flex flex-col gap-4 items-center text-center">
        <h4 className="font-medium text-2xl">Vehicle Models</h4>
        <h2 className="font-semibold text-5xl px-4">Our rental fleet</h2>
        <p className="opacity-60 px-6">
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div className="flex flex-col w-full px-6 items-start pt-12 gap-2 ">
        <button
          className={imageIndex == 0 ? btnstylesfocus : btnstyles}
          onClick={() => setImageIndex(0)}
        >
          Audi A1 S-line
        </button>
        <button
          className={imageIndex == 1 ? btnstylesfocus : btnstyles}
          onClick={() => setImageIndex(1)}
        >
          VW Golf 6
        </button>
        <button
          className={imageIndex == 2 ? btnstylesfocus : btnstyles}
          onClick={() => setImageIndex(2)}
        >
          Toyota Camry
        </button>
        <button
          className={imageIndex == 3 ? btnstylesfocus : btnstyles}
          onClick={() => setImageIndex(3)}
        >
          BMW 320 ModernLine
        </button>
        <button
          className={imageIndex == 4 ? btnstylesfocus : btnstyles}
          onClick={() => setImageIndex(4)}
        >
          Mercedes-Benz GLK
        </button>
        <button
          className={imageIndex == 5 ? btnstylesfocus : btnstyles}
          onClick={() => setImageIndex(5)}
        >
          VW Passat CC
        </button>
      </div>
      <div className="w-[90%] max-h-72 flex mx-auto mt-12 overflow-hidden relative">
        {carImgArray.map((url) => (
          <img
            key={url}
            src={url}
            className="img-slider-img flex-shrink-0 flex-grow-0 transition-all ease-in-out duration-[300ms] "
            style={{ translate: `${-100 * imageIndex}%` }}
          />
        ))}
        <button
          className="absolute pr-24 h-full flex pt-1 cursor-pointer text-orange left-0 hover:rounded-lg hover:bg-black
         hover:bg-opacity-20 transition-all duration-100 ease-in-out"
          onClick={showPrevImage}
        >
          <FaArrowAltCircleLeft className="size-8 stroke-white fill-black" />
        </button>
        <button
          className="absolute pl-24 h-full flex pt-1 cursor-pointer text-orange right-0 hover:rounded-lg hover:bg-black
         hover:bg-opacity-20 transition-all duration-100 ease-in-out"
          onClick={showNextImage}
        >
          <FaArrowAltCircleRight className="size-8 stroke-white fill-black" />
        </button>
      </div>
      <div className="py-12 flex flex-col items-center justify-center ">
        <div className="h-12 w-4/5 flex gap-1 justify-center items-center bg-orangelight text-white text-lg">
          <span className="font-semibold text-2xl">
            ${CARDATA[imageIndex].price}{" "}
          </span>{" "}
          / rent per day
        </div>
        <div className="w-4/5">
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2 border-t-0">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">
              Model
            </span>
            <span>{CARDATA[imageIndex].model}</span>
          </div>
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">Mark</span>
            <span>{CARDATA[imageIndex].mark}</span>
          </div>
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">Year</span>
            <span>{CARDATA[imageIndex].year}</span>
          </div>
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">
              Doors
            </span>
            <span>{CARDATA[imageIndex].doors}</span>
          </div>
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">Air</span>
            <span>{CARDATA[imageIndex].air}</span>
          </div>
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">
              Transmission
            </span>
            <span>{CARDATA[imageIndex].transmission}</span>
          </div>
          <div className="flex justify-between px-4 py-2 border-slate-400 border-2">
            <span className="border-r-2 pr-6 border-slate-400 w-1/2">Fuel</span>
            <span>{CARDATA[imageIndex].fuel}</span>
          </div>
          <div className="h-12 w-full flex gap-1 mt-5 rounded-lg shadow-lg justify-center items-center bg-orange text-white text-lg relative">
            <a className="absolute w-full h-full" href="#carbook" />
            <p className="[text-shadow:_0_3px_0_rgb(0_0_0_/_50%)] font-semibold text-xl">
              RESERVE NOW
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarModels
