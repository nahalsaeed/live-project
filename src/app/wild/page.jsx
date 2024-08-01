import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import ExploreTheNorthIsland from "@/components/planyourtrip/ExploreTheNorthIsland";
import SocialMedia from "@/components/common/SocialMedia";
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