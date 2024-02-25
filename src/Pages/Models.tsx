import HeroPages from "../Components/HeroPages"
import cardata from "../Components/CarData"

import { IoMdStarOutline } from "react-icons/io"
import { IoCarSportOutline } from "react-icons/io5"
import { FaGasPump } from "react-icons/fa"
import { GiCarDoor } from "react-icons/gi"
import { FaGear } from "react-icons/fa6"
import GetInTouch from "../Components/GetInTouch"

function Models() {
  return (
    <>
      <HeroPages name={"Vehicle Models"} />
      <div className="flex flex-col pt-8 gap-12 items-center font-rubik">
        {cardata.map((cardata) => {
          return (
            <div
              className="flex w-10/12 flex-col items-center border-2 border-slate-200 shadow-md"
              key={cardata.name}
            >
              <div className="w-full flex flex-col">
                <img src={cardata.imgbox} className="w-full object-fill" />
                <div className="py-4 pt-8">
                  <div className="flex justify-between px-4">
                    <div className="py-2">
                      <h4 className="font-bold text-xl">{cardata.name}</h4>
                      <span className="flex items-center pt-2">
                        <IoMdStarOutline className="text-yellow-500" />
                        <IoMdStarOutline className="text-yellow-500" />
                        <IoMdStarOutline className="text-yellow-500" />
                        <IoMdStarOutline className="text-yellow-500" />
                        <IoMdStarOutline className="text-yellow-500" />
                      </span>
                    </div>
                    <div className="pt-2">
                      <h4 className="font-bold text-xl">${cardata.price}</h4>
                      <p className="py-1">per day</p>
                    </div>
                  </div>{" "}
                  <div className="px-4 pt-2 grid grid-cols-2 grid-rows-2 content-between gap-2">
                    <span className="flex items-center gap-4">
                      <IoCarSportOutline />
                      {cardata.mark}
                    </span>
                    <span className="flex items-center gap-4 justify-end">
                      <FaGear />
                      <p className="min-w-[80px]">{cardata.transmission}</p>
                    </span>
                    <span className="flex items-center gap-4">
                      <GiCarDoor />
                      {cardata.doors}
                    </span>
                    <span className="flex items-center gap-4 justify-end ">
                      <FaGasPump />
                      <p className="min-w-[80px]">{cardata.fuel}</p>
                    </span>
                  </div>
                  <div className="flex flex-col items-center pt-6">
                    <div className=" w-4/5 border-t-2 border-slate-200 pt-4">
                      <button
                        className="flex items-center justify-center min-h-14 bg-orangelight
                       rounded shadow-sm shadow-orange w-full text-white text-xl font-medium"
                      >
                        Book Ride
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <GetInTouch />
    </>
  )
}

export default Models
