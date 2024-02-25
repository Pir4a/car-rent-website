import { FaPhone } from "react-icons/fa6"

function GetInTouch() {
  return (
    <div className="pt-12">
      <div className="font-rubik gap-6 flex flex-col items-center px-12 w-full bg-zinc-800 py-12 text-white font-semibold text-3xl">
        <h2 className="text-center">Book a car by getting in touch with us</h2>
        <span className="flex gap-4 items-center text-orange">
          <FaPhone width={40} height={40} />
          <h3>(123)-456-789</h3>
        </span>
      </div>
    </div>
  )
}

export default GetInTouch
