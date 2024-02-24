import car from "../assets/plan/icon1.png"
import human from "../assets/plan/icon2.png"
import cardrive from "../assets/plan/icon3.png"

function Plan() {
  return (
    <div className="font-rubik pt-28 flex flex-col text-center items-center">
      <div className="flex flex-col gap-4">
        <h4 className="font-medium text-2xl">Plan your trip now</h4>
        <h2 className="font-semibold text-5xl px-4">Quick & easy car rental</h2>
      </div>
      <div className="grid grid-cols-1 grid-row-3 py-4 gap-7">
        <div className="flex flex-col items-center pt-2">
          <img src={car} className="size-40" />
          <h2 className="pt-1 font-semibold text-2xl">Select Car</h2>
          <p className="opacity-60 text-center px-10 pt-2 ">
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={human} className="size-40" />
          <h2 className="pt-1 font-semibold text-2xl">Contact Operator</h2>
          <p className="opacity-60 text-center px-10 pt-2 ">
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={cardrive} className="size-40" />
          <h2 className="pt-1 font-semibold text-2xl">Let's Drive</h2>
          <p className="opacity-60 text-center px-10 pt-2 ">
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  )
}

export default Plan
