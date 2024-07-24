import "@/app/globals.css";

const categories = [
  {
    title: "Adventure",
    activities: [
      "Abseiling/Rappelling",
      "Bungy",
      "Canyoning",
      "Caving",
      "Climbing",
      "Diving & snorkeling",
      "Glider planes",
      "Hang gliding & paragliding",
      "Jet boating",
      "Kayaking",
      "Misc madness",
      "Paddleboarding",
      "Parasailing",
      "Rafting",
      "Skydiving",
      "Surfing",
      "Windsurfing & kitesurfing",
      "Zip lining",
    ],
  },
  {
    title: "Art, culture & heritage",
    activities: [
      "Heritage attractions",
      "Literature",
      "Maori culture",
      "Museums & galleries",
      "Performing arts",
      "Photography",
    ],
  },
  {
    title: "Cycling & mountain biking",
    activities: [],
  },
  {
    title: "Events",
    activities: ["Film in NZ", "Home of Middle-earth™"],
  },
  {
    title: "Food & wine",
    activities: ["Hot pools & health spas"],
  },
  {
    title: "Nature & wildlife",
    activities: [
      "Bird watching",
      "Dolphins",
      "Gardens & city parks",
      "Glow worms",
      "Parks and reserves",
      "Penguins",
      "Scenery & landscapes",
      "Seals",
      "Stargazing",
      "Whale watching",
      "World heritage sites",
      "Volcanic & geothermal",
      "Zoos & wildlife parks",
    ],
  },
  {
    title: "Tours",
    activities: [
      "Boat cruises",
      "Horse riding",
      "Hot air ballooning",
      "Off-road driving",
      "Rail journeys",
      "Sailing",
      "Scenic flights",
    ],
  },
  {
    title: "Skiing and snowboarding",
    activities: ["Heliskiing", "Skiing", "Snowboarding", "Snowshoeing"],
  },
  {
    title: "Sports",
    activities: ["Fishing", "Golf", "Hunting", "Rugby"],
  },
  {
    title: "Urban Attractions",
    activities: ["Casinos", "Shopping", "Theme parks"],
  },
  {
    title: "Holiday type",
    activities: [
      "Backpacking",
      "Camping",
      "Family friendly",
      "Luxury Travel",
      "Romance",
      "Working holiday",
    ],
  },
  {
    title: "Walking & hiking",
    activities: [],
  },
];

const splitActivities = (activities) => {
  const allActivities = [];
  categories.forEach(category => {
    allActivities.push(...category.activities);
  });
  const chunks = [];
  for (let i = 0; i < allActivities.length; i += 15) {
    chunks.push(allActivities.slice(i, i + 15));
  }
  return chunks;
};

export default function ListThingsTodo() {
  const chunks = splitActivities(categories);

  return (
    <div className="setCenter">
      <div className="w-[85%] 2xl:w-[70%]">
        <div className="px-4 py-8 text-xs">
          <h1 className="boldHeadings">Things to do in New Zealand</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {chunks.map((chunk, chunkIndex) => (
              <ul key={chunkIndex} className="list-none space-y-2">
                {chunk.map((activity, i) => (
                  <li key={i} className="text-green-600">{activity}</li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
