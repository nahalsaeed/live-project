import CardSection1 from "@/components/CardSection1";
import CardSection2 from "@/components/CardSection2";
import CardSection3 from "@/components/CardSection3";
import CardSection4 from "@/components/CardSection4";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YouMayAlsoBeInterestedIn from "@/components/YouMayAlsoBeInterestedIn";
import Map from "@/components/Map";
import ThingsToDoHeroSection from "@/components/ThingsToDoHeroSection"; // Import the component
import destinationImg from "@/app/assets/destination.png"; // Import the specific image for destination
import ThingstodoTxtSection from "@/components/ThingstodoTxtSection";
import ThingsToSee from "@/components/ThingsToSee";
import TopPlacesToVisit from "@/components/TopPlacesToVisit";

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
