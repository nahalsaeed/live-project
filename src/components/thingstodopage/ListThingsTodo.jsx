import "@/app/globals.css";
const categories =
  [{
    title: "Adventure",
    activities: ["Abseiling/Rappelling", "Bungy", "Canyoning", "Caving", "Climbing", "Diving & snorkeling", "Glider planes", "Hang gliding & paragliding", "Jet boating", "Kayaking", "Misc madness", "Paddleboarding", "Parasailing", "Rafting", "Skydiving", "Surfing", "Windsurfing & kitesurfing", "Zip lining",],
  },
  {
    title: "Art, culture & heritage",
    activities: ["Heritage attractions", "Literature", "Maori culture", "Museums & galleries", "Performing arts", "Photography",],
  },
  {
    title: "Cycling & mountain biking",
    activities: [],
  },
  {
    title: "Events",
    activities: [],

  },
  {
    title: "Film in NZ",
    activities: ["Home of Middle-earth™"],
  },
  {
    title: "Food & wine",
    activities: [],
  },
  {
    title: "Hot pools & health spas",
    activities: [],
  },
  {
    title: "Nature & wildlife",
    activities: ["Bird watching", "Dolphins", "Gardens & city parks", "Glow worms", "Parks and reserves", "Penguins", "Scenery & landscapes", "Seals", "Stargazing", "Whale watching", "World heritage sites", "Volcanic & geothermal", "Zoos & wildlife parks",],
  },
  {
    title: "Tours",
    activities: ["Boat cruises", "Horse riding", "Hot air ballooning", "Off-road driving", "Rail journeys", "Sailing", "Scenic flights",],
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
    title: "Walking & hiking",
    activities: [],
  },
  {
    title: "Holiday type",
    activities: ["Backpacking", "Camping", "Family friendly", "Luxury Travel", "Romance", "Working holiday",],

  },];
export default function ListThingsTodo() {
  return (
    <div className="setCenter">
      <div className="w-[85%] 2xl:w-[70%]">
        <div className="px-4 py-8 text-xs lg:text-sm 2xl:text-lg">
          <h1 className="boldHeadings text-3xl">Things to do in Hong Kong</h1>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-6 gap-10">
            {categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="break-inside-avoid p-1">
                <h2 className="font-semibold">{category.title}</h2>
                <ul className=" list-inside">
                  {category.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-green-600">{activity}</li>
                  ))}
                </ul>
              </div>))}
          </div>
        </div>
      </div>
    </div>
  );
}