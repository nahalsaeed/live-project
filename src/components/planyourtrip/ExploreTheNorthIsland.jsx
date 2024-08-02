import "@/app/globals.css";
import CardSection1 from "../destinantions/CardSection1";
import CardSection4 from "./FindPlacesToStay";
import YouMayAlsoInterestedIn from "./YouMayAlsoInterestedIn";

export default function ExploreTheNorthIsland() {
  return (
    <div className="setCenter bg-[#F8F8F8] ">
        <CardSection1/>
        <CardSection4/>
       <YouMayAlsoInterestedIn/>
      </div>

  )
}
