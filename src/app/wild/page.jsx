import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ExploreTheNorthIsland from "@/components/planyourtrip/ExploreTheNorthIsland";
import SocialMedia from "@/components/SocialMedia";
import PricingGrid from "@/components/wild/PricingGrid";
import RealNZ from "@/components/wild/RealNZ";

export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header/>
            <RealNZ/>
            <PricingGrid/>
            <ExploreTheNorthIsland/>
            <SocialMedia/>
            <Footer/>
        </div>
    )
}