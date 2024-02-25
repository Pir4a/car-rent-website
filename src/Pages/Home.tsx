import Banner from "../Components/Banner"
import CarBook from "../Components/CarBook"
import CarModels from "../Components/CarModels"
import ChooseUs from "../Components/ChooseUs"
import Download from "../Components/Download"
import Faq from "../Components/Faq"
import Hero from "../Components/Hero"
import Plan from "../Components/Plan"
import Testimonials from "../Components/Testimonials"

function Home() {
  return (
    <>
      <Hero />
      <CarBook />
      <Plan />
      <CarModels />
      <Banner />
      <ChooseUs />
      <Testimonials />
      <Faq />
      <Download />
    </>
  )
}

export default Home
