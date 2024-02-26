import playstore from "../assets/dowload/googleapp.svg"
import appstore from "../assets/dowload/appstore.svg"

function Download() {
  return (
    <div className="bg-gray font-rubik py-20 lg:flex 2xl:pl-[15%]  lg:bg-[url('/src/assets/banner/bg02.png')] lg:bg-center lg:bg-cover xl:bg-no-repeat">
      <div className="flex flex-col justify-center text-center px-8 gap-8 2xl:w-1/3 xl:w-3/5 lg:w-2/3">
        <h2 className="font-bold text-4xl lg:text-5xl lg:text-left">
          Download our app to get most out of it
        </h2>
        <p className="opacity-70 lg:text-lg lg:text-left">
          Discover seamless car rental with our app. Instantly book vehicles,
          access exclusive deals, and manage reservations effortlessly. Skip the
          queues and paperwork hassles. Enjoy convenience and savings at your
          fingertips. Download now and experience hassle-free travel like never
          before.
        </p>
        <div className="flex flex-col gap-4 items-center py-4 lg:flex-row">
          <button>
            <img src={playstore} className="w-56" />
          </button>
          <button>
            <img src={appstore} className="w-56" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Download
