import Banner from "../Components/Banner"
import CarBook from "../Components/CarBook"
import CarModels from "../Components/CarModels"
import Hero from "../Components/Hero"
import Plan from "../Components/Plan"

function Home() {
  return (
    <>
      <Hero />
      <CarBook />
      <Plan />
      <CarModels />
      <Banner />
    </>
  )
}

export default Home
