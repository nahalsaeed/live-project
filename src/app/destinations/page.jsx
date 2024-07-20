import CardSection1 from "@/components/CardSection1";
import CardSection2 from "@/components/CardSection2";
import CardSection3 from "@/components/CardSection3";
import CardSection4 from "@/components/CardSection4";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import YouMayAlsoBeInterestedIn from "@/components/YouMayAlsoBeInterestedIn";

export default function page() {
  return (
    <div className="flex flex-col overflow-hidden">
        <Header/>
      <CardSection1/>
      <CardSection4/>
      <CardSection2/>
      <CardSection3/>
      <YouMayAlsoBeInterestedIn/>
      <Footer/>
    </div>
  )
}
