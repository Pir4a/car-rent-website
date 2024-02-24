import goku from "../assets/testimonials/goku.png"

function Testimonials() {
  return (
    <div className="bg-gray py-24 font-rubik">
      <div className="flex flex-col items-center gap-4 text-center">
        <h3 className="text-xl font-medium">Reviewed by Customers</h3>
        <h2 className="text-4xl font-semibold">Client's Testimonials</h2>
        <p className="opacity-70 text-center px-8 pb-8">
          Discover the positive impact we've made on the our clients by reading
          through their testimonials. Our clients have experienced our service
          and results, and they're eager to share their positive experiences
          with you.
        </p>
      </div>
      <div className="flex flex-col pt-14 pb-10 px-8 items-center text-center min-h-32 w-11/12 rounded bg-white mx-auto shadow-md">
        <p className="text-2xl text-left font-medium">
          "We rented a car from this website and had an amazing experience! The
          booking was easy and the rental rates were very affordable. "
        </p>
        <div className="flex w-full gap-6 justify-start  items-center pt-6">
          <img
            src={goku}
            className="size-[4.5rem] rounded-full border-2 border-slate-300"
          />

          <p className="flex flex-col text-left text-lg">
            <span className="font-semibold">Son Goku</span> Paris
          </p>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
