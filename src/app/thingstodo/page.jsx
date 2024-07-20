import Culture from "@/components/Culture";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListThingsTodo from "@/components/listThingsTodo";
import OutdoorAdventure from "@/components/OutdoorAdventure";
import PlanYourTrip from "@/components/PlanYourTrip";
import ThingsToDoCards from "@/components/ThingsToDoCards";
import ThingsToDoHeroSection from "@/components/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/ThingstodoTxtSection";
import TopAttractions from "@/components/TopAttractions";


export default function page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <ThingsToDoHeroSection/>
            <ThingstodoTxtSection/>
            <TopAttractions />
            <OutdoorAdventure />
            <Culture />
            <PlanYourTrip/>
            <ThingsToDoCards/>
            <ListThingsTodo/>
            <Footer />
        </div>
    )
}
