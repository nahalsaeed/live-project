import Culture from "@/components/Culture";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ListThingsTodo from "@/components/ListThingsTodo";
import OutdoorAdventure from "@/components/OutdoorAdventure";
import PlanYourTrip from "@/components/PlanYourTrip";
import ThingsToDoCards from "@/components/ThingsToDoCards";
import ThingsToDoHeroSection from "@/components/ThingsToDoHeroSection";
import ThingstodoTxtSection from "@/components/ThingstodoTxtSection";
import TopAttractions from "@/components/TopAttractions";
import herosectionImg from "@/app/assets/Herothingstodo.webp"; // Import the specific image

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
