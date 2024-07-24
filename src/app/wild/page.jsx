import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BookNow from "@/components/wild/BookNow";
import Pricing from "@/components/wild/Pricing";
import PricingGrid from "@/components/wild/PricingGrid";
import RealNZ from "@/components/wild/RealNZ";
import WildCard1 from "@/components/wild/WildCard1";
import WildCard2 from "@/components/wild/WildCard2";
import { Book } from "lucide-react";

export default function Page() {
    return (
        <div className="flex flex-col overflow-hidden">
            <Header/>
            <RealNZ/>
            <BookNow/>
            <PricingGrid/>
            <WildCard2 />
            <WildCard1/>
            <Footer/>
        </div>
    )
}