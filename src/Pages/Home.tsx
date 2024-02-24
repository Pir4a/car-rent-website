import Banner from "../Components/Banner"
import CarBook from "../Components/CarBook"
import CarModels from "../Components/CarModels"
import ChooseUs from "../Components/ChooseUs"
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
      <ChooseUs />
    </>
  )
}

export default Home
