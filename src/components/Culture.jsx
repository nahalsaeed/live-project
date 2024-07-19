import DynamicText from "./DynamicText";
import FirstPlacesToGo from "./FirstPlacesToGo";

export default function Culture() {
    const heading="Culture";
    const txt="New Zealand's people are down to earth and friendly. Get know Kiwi culture by practising a few words of Te Reo Māori, chat to local cafe owners while getting your coffee, or take a tour with an expert guide."
  return (
    <div>
      <DynamicText heading={heading} text={txt}/>
      <FirstPlacesToGo/>
    </div>
  )
}
