import northimg from "@/assets/NorthHero.webp";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CentralNorth from "@/components/planyourtrip/CentralNorth";
import ExploreTheNorthIsland from "@/components/planyourtrip/ExploreTheNorthIsland";
import NorthMap from "@/components/planyourtrip/NorthMap";
import SocialMedia from "@/components/SocialMedia";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
export default function PlanYourTrips() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <ThingsToDoHeroSection description={"description"} image={northimg}/>
      <ThingstodoTxtSection page={"Plan Your Trip"} para={"New Zealand's North Island offers island sanctuaries and lively cities with a large helping of culture and history for a truly diverse holiday experience."}/>
      <CentralNorth />
      <NorthMap />
      <ExploreTheNorthIsland/>
      <SocialMedia />
      <Footer />
    </div>
  )
}