import { Link } from "react-router-dom"

function HeroPages({ name }: any) {
  return (
    <>
      <div className="relative font-rubik">
        <div className="min-h-96 bg-[url('/src/assets/hero/heroes-bg.png')] bg-center opacity-10 flex items-center "></div>{" "}
        <h4 className="absolute flex flex-col top-[45%] left-8 w-12 h-12 text-black font-bold text-4xl">
          {name}

          <div className="flex w-72 mt-2 text-2xl">
            <h3 className="flex w-full gap-2">
              <Link to="./">Home</Link> / {name}
            </h3>
          </div>
        </h4>
      </div>
    </>
  )
}

export default HeroPages
