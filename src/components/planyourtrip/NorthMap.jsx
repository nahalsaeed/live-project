import Map from "../destinantions/Map";
import DynamicText from "../DynamicText";
import "@/app/globals.css";

const heading = "Top places to visit in the North Island"
const txt = "Whether you prefer mountains or beaches, here are some of the places you must visit when travelling around North Island."
export default function NorthMap() {
    return (
        <div>
            <DynamicText heading={heading} text={txt} />
            <div className="setCenter mt-5">
                <div className="w-[85%]">
                    <Map />
                </div>
            </div>
        </div>
    )
}
