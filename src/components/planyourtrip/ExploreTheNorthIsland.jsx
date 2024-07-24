import FindMultiDayTour from "./FindMultiDayTour";
import FindPlacesToStay from "./FindPlacesToStay";
import FindThingsToDo from "./FindThingsToDo";
import FindTransport from "./FindTransport";
import "@/app/globals.css";

export default function ExploreTheNorthIsland() {
  return (
    <div className="setCenter bg-[#F8F8F8] ">
      <div className="w-[85%]  2xl:w-[70%] ">
        <FindThingsToDo />
        <FindPlacesToStay />
        <FindTransport />
        <FindMultiDayTour />
      </div>
    </div>
  )
}
