import Culture from "@/components/Culture";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OutdoorAdventure from "@/components/OutdoorAdventure";
import PlanYourTrip from "@/components/PlanYourTrip";
import TopAttractions from "@/components/TopAttractions";


export default function page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <TopAttractions />
            <OutdoorAdventure />
            <Culture />
            <PlanYourTrip/>
            <Footer />
        </div>
    )
}
