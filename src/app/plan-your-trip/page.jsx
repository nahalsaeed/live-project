import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CentralNorth from "@/components/planyourtrip/CentralNorth";
import ExploreTheNorthIsland from "@/components/planyourtrip/ExploreTheNorthIsland";
import FindMultiDayTour from "@/components/planyourtrip/FindMultiDayTour";
import FindPlacesToStay from "@/components/planyourtrip/FindPlacesToStay";
import FindThingsToDo from "@/components/planyourtrip/FindThingsToDo";
import FindTransport from "@/components/planyourtrip/FindTransport";
import LowerNorth from "@/components/planyourtrip/LowerNorth";
import NorthMap from "@/components/planyourtrip/NorthMap";
import UpperNorthIsland from "@/components/planyourtrip/UpperNorthIsland";
import YouMayAlsoInterestedIn from "@/components/planyourtrip/YouMayAlsoInterestedIn";
import SocialMedia from "@/components/SocialMedia";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import northimg from "@/assets/NorthHero.webp"
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
export default function PlanYourTrips() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <ThingsToDoHeroSection description={"description"} image={northimg}/>
      <ThingstodoTxtSection para={"New Zealand's North Island offers island sanctuariesand lively cities with a large helping of culture and history for a truly diverse holiday experience."}/>
      {/* <UpperNorthIsland /> */}
      <CentralNorth />
      {/* <LowerNorth /> */}
      <NorthMap />
      <ExploreTheNorthIsland/>
      <YouMayAlsoInterestedIn />
      <SocialMedia />
      <Footer />
    </div>
  )
}