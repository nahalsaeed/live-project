import FindMultiDayTour from "./FindMultiDayTour";
import FindPlacesToStay from "./FindPlacesToStay";
import FindThingsToDo from "./FindThingsToDo";
import FindTransport from "./FindTransport";
import "@/app/globals.css";

export default function ExploreTheNorthIsland() {
  return (
    <div className="setCenter bg-[#F8F8F8] ">
        <FindThingsToDo />
        <FindPlacesToStay />
        {/* <FindTransport /> */}
        {/* <FindMultiDayTour /> */}
      </div>

  )
}
