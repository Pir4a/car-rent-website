import GetInTouch from "../Components/GetInTouch"
import HeroPages from "../Components/HeroPages"
import teamdata from "../Components/TeamData"

function Team() {
  return (
    <>
      <HeroPages name={"Our Team"} />
      {teamdata.map((teamdata) => {
        return (
          <div className="grid grid-cols-1 grid-rows-1 place-items-center pt-12 font-rubik">
            <div className="flex flex-col items-center shadow-md w-10/12 border-2 border-slate-100">
              <div className="bg-gray w-full flex items-center justify-center">
                <img
                  src={teamdata.photo}
                  className="border-b-2 border-slate-100"
                />
              </div>
              <div className="py-4 text-center">
                <h2 className="text-xl font-bold">{teamdata.entirename}</h2>
                <p className="text-lg font-medium opacity-70">
                  {teamdata.role}
                </p>
              </div>
            </div>
          </div>
        )
      })}
      <GetInTouch />
    </>
  )
}

export default Team
