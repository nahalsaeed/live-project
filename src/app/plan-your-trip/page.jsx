import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CentralNorth from "@/components/planyourtrip/CentralNorth";
import LowerNorth from "@/components/planyourtrip/LowerNorth";
import UpperNorthIsland from "@/components/planyourtrip/UpperNorthIsland";

export default function PlanYourTrips() {
    return (
        <div className="flex flex-col overflow-hidden">
          <Header/>
          <UpperNorthIsland/>
          <CentralNorth/>
          <LowerNorth/>
          <Footer/> 
        </div>
    )
}