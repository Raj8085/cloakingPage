import Features, { FeaturesBelow } from "./assets/components/Features"
import Footer from "./assets/components/Footer"
import HeroSection from "./assets/components/HeroSection"
import Navbar from "./assets/components/Navbar"
import PricingAndPayments, { ComsignSafePageGenerator } from "./assets/components/Pricing"
import SecondSection from "./assets/components/SecondSection"
import TrustedByLeaders, { CallToAction } from "./assets/components/TrustedLeaders"
import { FAQ } from "./components/FAQ/FAQ"

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <SecondSection/>
      <Features/>
      <FeaturesBelow/>
      <PricingAndPayments/>
      <ComsignSafePageGenerator/>
      <FAQ/>
      <CallToAction/>
      <TrustedByLeaders/>
      <Footer/>
    </>
  )
}

export default App