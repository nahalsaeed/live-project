import Culture from "@/components/thingstodopage/Culture";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListThingsTodo from "@/components/thingstodopage/ListThingsTodo";
import OutdoorAdventure from "@/components/thingstodopage/OutdoorAdventure";
import PlanYourTrip from "@/components/thingstodopage/PlanYourTrip";
import ThingsToDoCards from "@/components/thingstodopage/ThingsToDoCards";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
import TopAttractions from "@/components/thingstodopage/TopAttractions";
import herosectionImg from "@/assets/Herothingstodo.webp"; // Import the specific image

export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <ThingsToDoHeroSection title="Things to do in" subtitle="NEW ZEALAND" image={herosectionImg} />
            <ThingstodoTxtSection />
            <TopAttractions />
            <OutdoorAdventure />
            <Culture />
            <PlanYourTrip />
            <ThingsToDoCards />
            <ListThingsTodo />
            <Footer />
        </div>
    );
}
