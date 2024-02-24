import { useEffect, useState } from "react"
import { FaCar } from "react-icons/fa"
import { HiMapPin } from "react-icons/hi2"
import { FaCalendarDay } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { HiInformationCircle } from "react-icons/hi"
import cardata from "../Components/CarData"

function CarBook() {
  const modalid: any = document.getElementById("modal")

  const [modal, setModal] = useState(false)

  const [carType, setCarType] = useState(0)
  const [pickUp, setPickUp] = useState("")
  const [dropOff, setDropOff] = useState("")
  const [pickTime, setPickTime] = useState("")
  const [dropTime, setDropTime] = useState("")
  //@ts-ignore
  const [carImg, setCarImg] = useState(0)

  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phone, setPhone] = useState("")
  const [age, setAge] = useState("")
  const [email, setEmail] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [zipcode, setZipCode] = useState("")

  const handleName = (e: { target: { value: string } }) => {
    setName(e.target.value)
  }

  const handleLastName = (e: { target: { value: string } }) => {
    setLastName(e.target.value)
  }

  const handlePhone = (e: { target: { value: string } }) => {
    setPhone(e.target.value)
  }

  const handleAge = (e: { target: { value: string } }) => {
    setAge(e.target.value)
  }

  const handleEmail = (e: { target: { value: string } }) => {
    setEmail(e.target.value)
  }

  const handleAddress = (e: { target: { value: string } }) => {
    setAddress(e.target.value)
  }

  const handleCity = (e: { target: { value: string } }) => {
    setCity(e.target.value)
  }

  const handleZip = (e: { target: { value: string } }) => {
    setZipCode(e.target.value)
  }
  const handleCar = (e: any) => {
    setCarType(e.target.value)
    setCarImg(e.target.value)
  }

  const handlePick = (e: { target: { value: string } }) => {
    setPickUp(e.target.value)
  }

  const handleDrop = (e: { target: { value: string } }) => {
    setDropOff(e.target.value)
  }

  const handlePickTime = (e: { target: { value: any } }) => {
    setPickTime(e.target.value)
  }

  const handleDropTime = (e: { target: { value: any } }) => {
    setDropTime(e.target.value)
  }

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden"
      modalid.style.overflow = "auto"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [modal])

  const [isDone, setIsDone] = useState(false)
  const [isAllFields, setIsAllFields] = useState(false)

  function search() {
    if (pickUp == "" || dropOff == "" || pickTime == "" || dropTime == "") {
      setIsAllFields(true)
      return
    }
    setIsAllFields(false)
    setModal(true)
  }

  function confirmBooking(e: any) {
    if (
      name == "" ||
      lastName == "" ||
      phone == "" ||
      email == "" ||
      address == "" ||
      age == "" ||
      city == "" ||
      zipcode == ""
    ) {
      setIsAllFields(true)
      modalid.scroll(0, 900)
      return
    }
    e.preventDefault()
    setModal(false)
    setIsDone(true)
    setIsAllFields(false)
  }

  return (
    <div
      id="carbook"
      className="bg-gray font-rubik flex justify-center min-h-[700px] max-h-[110dvh] shadow-sm"
    >
      <form className="bg-white w-11/12 rounded shadow-lg flex flex-col gap-3 pl-14 py-12">
        <h2 className="font-bold text-2xl pb-5">Book a car</h2>
        <p
          className={
            isDone
              ? "flex text-center justify-center items-center bg-emerald-200 rounded-md py-2 pl-2  w-4/5 font-semibold text-slate-600 opacity-70"
              : "hidden"
          }
        >
          Check your email to confirm the order!
          <RxCross2
            className="size-10 pr-2 pb-4"
            onClick={() => setIsDone(false)}
          />
        </p>
        <p
          className={
            isAllFields
              ? "flex text-center justify-between items-center bg-red-400 rounded-md -mt-4 py-3 px-8  w-4/5 font-semibold text-slate-900 opacity-100"
              : "hidden"
          }
        >
          All fields required!
          <RxCross2 className="size-6" onClick={() => setIsAllFields(false)} />
        </p>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            {" "}
            <FaCar /> Select Your Car Type
          </label>
          <select
            value={carType}
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            onChange={handleCar}
          >
            <option value="0">Audi A1 S-Line</option>
            <option value="1">VW Golf 6</option>
            <option value="2">Toyota Camry</option>
            <option value="3">BMW 320 ModernLine</option>
            <option value="4">Mercedes-Benz GLK</option>
            <option value="5">VW Passat CC</option>
          </select>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <HiMapPin />
            Pick-up
          </label>
          <select
            value={pickUp}
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            onChange={handlePick}
          >
            <option>Select pick up location</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
            <option value="Bordeaux">Bordeaux</option>
            <option value="Rennes">Rennes</option>
          </select>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <HiMapPin />
            Drop-of
          </label>
          <select
            value={dropOff}
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            onChange={handleDrop}
          >
            <option>Select drop of location</option>
            <option value="Paris">Paris</option>
            <option value="Lyon">Lyon</option>
            <option value="Marseille">Marseille</option>
            <option value="Bordeaux">Bordeaux</option>
            <option value="Rennes">Rennes</option>
          </select>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <FaCalendarDay />
            Pick-up Date
          </label>
          <input
            value={pickTime}
            onChange={handlePickTime}
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            id="picktime"
            type="date"
          ></input>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <FaCalendarDay />
            Drop-of Date
          </label>
          <input
            onChange={handleDropTime}
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            id="picktime"
            type="date"
            value={dropTime}
          ></input>
        </div>
        <button
          onClick={search}
          type="submit"
          className="bg-orange w-3/4 mt-5 h-12 rounded-md text-lg text-white font-medium shadow-md shadow-orange"
        >
          Search
        </button>
      </form>

      <div
        id="modal"
        className={`fixed top-0 h-full !overflow-y-autoauto z-10 ${
          modal ? "active-modal" : "hidden"
        } w-[95%]  `}
      >
        <div className="flex items-center justify-between px-4 bg-orange text-white h-14 w-full rounded-t-md">
          <h1 className="text-2xl font-semibold">COMPLETE RESERVATION</h1>
          <RxCross2
            className="size-7  z-10"
            onClick={() => {
              setModal(false)
            }}
          />
        </div>
        <div className="w-full flex gap-6 flex-col p-8 h-52 bg-beige">
          <h2 className="text-orange flex gap-2 text-lg font-semibold">
            <HiInformationCircle className="size-12 pb-5" /> Upon completing
            this reservation enquiry, you will receive:{" "}
          </h2>
          <p className="opacity-60 font-medium ">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="w-full flex justify-center items-center bg-white">
          <div className="flex flex-col  items-center gap-5 py-6">
            <h2 className="text-lg font-semibold text-orange">
              Location & Date
            </h2>
            <div className="flex items-center flex-col">
              <h3 className="flex gap-2 font-medium text-lg items-center">
                {" "}
                <HiMapPin />
                Pick-up Location
              </h3>
              <span className="font-medium opacity-70">{pickUp}</span>
            </div>
            <div className="flex items-center flex-col">
              <h3 className="flex gap-2 font-medium text-lg items-center">
                {" "}
                <HiMapPin />
                Drop-off Location
              </h3>
              <span className="font-medium opacity-70">{dropOff}</span>
            </div>
            <div className="flex items-center flex-col">
              <h3 className="flex gap-2 font-medium text-lg items-center">
                {" "}
                <HiMapPin />
                Pick-up Date & Time
              </h3>
              <span className="font-medium opacity-70 pt-1">
                {pickTime} <input type="time" className="pl-5"></input>
              </span>
            </div>
            <div className="flex items-center flex-col">
              <h3 className="flex gap-2 font-medium text-lg items-center">
                {" "}
                <HiMapPin />
                Drop-off Date & Time
              </h3>
              <span className="font-medium opacity-70 pt-1">
                {dropTime}
                <input type="time" className="pl-5"></input>
              </span>
            </div>
            <div className="font-semibold text-lg pt-5">
              Car -{" "}
              <span className="text-orange">{cardata[carType]?.name}</span>
            </div>
            <div className="border-b-2 border-black border-opacity-20">
              <img src={cardata[carType]?.img} />
            </div>
            <div className="w-[90%]">
              <h4 className="text-orange font-bold text-lg">
                PERSONAL INFORMATION
              </h4>
              <p
                className={
                  isAllFields
                    ? "flex text-center justify-between items-center bg-red-400 rounded-md mt-2 py-3 px-8  w-4/5 font-semibold text-slate-900 opacity-100"
                    : "hidden"
                }
              >
                All fields required!
                <RxCross2
                  className="size-6"
                  onClick={() => setIsAllFields(false)}
                />
              </p>
              <form className="flex flex-col">
                <label className="opacity-50 font-medium pb-1 pt-4">
                  First Name
                </label>
                <input
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">
                  Last Name
                </label>
                <input
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">
                  Phone Number
                </label>
                <input
                  onChange={handlePhone}
                  type="number"
                  placeholder="Enter your phone number"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">Age</label>
                <input
                  onChange={handleAge}
                  type="text"
                  placeholder="Enter your age"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">
                  Email
                </label>
                <input
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">
                  Address
                </label>
                <input
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your address"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">City</label>
                <input
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                  className="bg-stone-200 h-10 px-4"
                ></input>

                <label className="opacity-50 font-medium pb-1 pt-4">
                  ZIP Code
                </label>
                <input
                  onChange={handleZip}
                  type="number"
                  placeholder="Enter your ZIP code"
                  className="bg-stone-200 h-10 px-4"
                ></input>
                <label className="flex items-center gap-2 py-4">
                  <input type="checkbox" className="size-4" />
                  <p className="opacity-60 font-medium">
                    Please send me latest news and updates
                  </p>
                </label>
                <div className="flex justify-center items-center w-full rounded-xl py-5 bg-beige">
                  <button
                    className="bg-orange h-14 w-1/2 text-white rounded-xl shadow-md shadow-orangelight font-medium drop-shadow-sm"
                    onClick={confirmBooking}
                  >
                    RESERVE NOW
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarBook
