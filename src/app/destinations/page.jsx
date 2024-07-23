import CardSection1 from "@/components/destinantions/CardSection1";
import CardSection2 from "@/components/destinantions/CardSection2";
import CardSection3 from "@/components/destinantions/CardSection3";
import CardSection4 from "@/components/destinantions/CardSection4";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YouMayAlsoBeInterestedIn from "@/components/destinantions/YouMayAlsoBeInterestedIn";
import Map from "@/components/destinantions/Map";
import ThingsToDoHeroSection from "@/components/thingstodopage/ThingsToDoHeroSection"; // Import the component
import destinationImg from "@/assets/destination.png"; // Import the specific image for destination
import ThingstodoTxtSection from "@/components/thingstodopage/ThingstodoTxtSection";
import ThingsToSee from "@/components/destinantions/ThingsToSee";
import TopPlacesToVisit from "@/components/destinantions/TopPlacesToVisit";

export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header />
            <ThingsToDoHeroSection image={destinationImg} /> 
            <ThingstodoTxtSection />
            <TopPlacesToVisit/>
            <ThingsToSee/>

            <Map />
            <CardSection1 />
            <CardSection4 />
            <CardSection2 />
            <CardSection3 />
            <YouMayAlsoBeInterestedIn />
            <Footer />
        </div>
    );
}
