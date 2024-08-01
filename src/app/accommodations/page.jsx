import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import accomodationHero from "@/assets/accomodationHero.webp"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
import FindSpecialPlaceToStay from "@/components/accomodations/FindSpecialPlaceToStay";
export default function page() {
  return (
    <div className="flex flex-col overflow-hidden">
        <Header/>
      <ThingsToDoHeroSection heading={"heading"} image={accomodationHero}/>
      <ThingstodoTxtSection/>
      <FindSpecialPlaceToStay/>
      <Footer/>
    </div>
  )
}
