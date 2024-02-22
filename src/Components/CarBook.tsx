import { useEffect, useState } from "react"
import CarAudi from "../assets/cars-big/audia1.jpg"
import CarGolf from "../assets/cars-big/golf6.jpg"
import CarToyota from "../assets/cars-big/toyotacamry.jpg"
import CarBmw from "../assets/cars-big/bmw320.jpg"
import CarMercedes from "../assets/cars-big/benz.jpg"
import CarPassat from "../assets/cars-big/passatcc.jpg"
import { FaCar } from "react-icons/fa"
import { HiMapPin } from "react-icons/hi2"
import { FaCalendarDay } from "react-icons/fa"

function CarBook() {
  return (
    <div
      id="carbook"
      className="bg-gray font-rubik flex justify-center max-h-dvh"
    >
      <form className="bg-white w-11/12 rounded shadow-lg flex flex-col gap-3 pl-14 py-12">
        <h2 className="font-bold text-2xl pb-5">Book a car</h2>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            {" "}
            <FaCar /> Select Your Car Type
          </label>
          <select className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer">
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </select>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <HiMapPin />
            Pick-up
          </label>
          <select className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer">
            <option>Select pick up location</option>
            <option>Paris</option>
            <option>Lyon</option>
            <option>Marseille</option>
            <option>Bordeaux</option>
            <option>Rennes</option>
          </select>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <HiMapPin />
            Drop-of
          </label>
          <select className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer">
            <option>Select drop of location</option>
            <option>Paris</option>
            <option>Lyon</option>
            <option>Marseille</option>
            <option>Bordeaux</option>
            <option>Rennes</option>
          </select>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <FaCalendarDay />
            Pick-up Date
          </label>
          <input
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            id="picktime"
            type="date"
            value="0001-05-12"
          ></input>
        </div>
        <div className="box-form-car-type space-y-2">
          <label className="flex gap-2 font-medium text-lg items-center">
            <FaCalendarDay />
            Drop-of Date
          </label>
          <input
            className="w-3/4 h-12 border-2 border-slate-100 rounded px-4 text-slate-500 cursor-pointer"
            id="picktime"
            type="date"
            value="0001-05-12"
          ></input>
        </div>
        <button
          type="submit"
          className="bg-orange w-3/4 mt-5 h-12 rounded-md text-lg text-white font-medium shadow-md shadow-orange"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default CarBook
