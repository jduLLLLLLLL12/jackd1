// Neighborhood data scored 0-10 across lifestyle dimensions
const CITIES = {
  "New York City": {
    emoji: "\u{1F5FD}",
    neighborhoods: [
      {
        name: "Williamsburg",
        borough: "Brooklyn",
        description: "Trendy hub with indie art, rooftop bars, and waterfront parks. A magnet for creatives and young professionals.",
        scores: { nightlife: 9, walkability: 9, greenSpace: 5, foodScene: 9, family: 4, transit: 8, artsCulture: 10, quiet: 3 },
        avgRent: 3200,
        vibe: "Creative & Trendy"
      },
      {
        name: "Park Slope",
        borough: "Brooklyn",
        description: "Tree-lined streets, brownstones, and Prospect Park. A favorite for families who still want city energy.",
        scores: { nightlife: 4, walkability: 9, greenSpace: 9, foodScene: 7, family: 10, transit: 8, artsCulture: 6, quiet: 7 },
        avgRent: 3400,
        vibe: "Family & Charming"
      },
      {
        name: "East Village",
        borough: "Manhattan",
        description: "Legendary nightlife, eclectic food, and punk-rock roots. Always buzzing, never boring.",
        scores: { nightlife: 10, walkability: 10, greenSpace: 3, foodScene: 10, family: 2, transit: 9, artsCulture: 9, quiet: 1 },
        avgRent: 3500,
        vibe: "Electric & Eclectic"
      },
      {
        name: "Upper West Side",
        borough: "Manhattan",
        description: "Central Park access, cultural institutions, and a sophisticated residential feel near Lincoln Center.",
        scores: { nightlife: 4, walkability: 8, greenSpace: 10, foodScene: 6, family: 9, transit: 9, artsCulture: 8, quiet: 7 },
        avgRent: 3600,
        vibe: "Classic & Cultural"
      },
      {
        name: "Astoria",
        borough: "Queens",
        description: "One of the most diverse food scenes in the world, with a strong community feel and great transit links.",
        scores: { nightlife: 6, walkability: 8, greenSpace: 6, foodScene: 9, family: 7, transit: 7, artsCulture: 5, quiet: 5 },
        avgRent: 2200,
        vibe: "Diverse & Delicious"
      },
      {
        name: "Greenwich Village",
        borough: "Manhattan",
        description: "Historic bohemian enclave with jazz clubs, Washington Square Park, and winding streets full of character.",
        scores: { nightlife: 8, walkability: 10, greenSpace: 6, foodScene: 9, family: 4, transit: 9, artsCulture: 10, quiet: 3 },
        avgRent: 4000,
        vibe: "Bohemian & Historic"
      },
      {
        name: "Harlem",
        borough: "Manhattan",
        description: "Rich cultural heritage, soul food institutions, and a thriving arts scene with deep community roots.",
        scores: { nightlife: 6, walkability: 7, greenSpace: 6, foodScene: 8, family: 6, transit: 7, artsCulture: 9, quiet: 5 },
        avgRent: 2100,
        vibe: "Soulful & Historic"
      },
      {
        name: "DUMBO",
        borough: "Brooklyn",
        description: "Waterfront tech hub with stunning Manhattan views, cobblestone streets, and converted warehouse lofts.",
        scores: { nightlife: 5, walkability: 7, greenSpace: 7, foodScene: 7, family: 5, transit: 6, artsCulture: 7, quiet: 6 },
        avgRent: 4200,
        vibe: "Scenic & Modern"
      }
    ]
  },
  "Chicago": {
    emoji: "\u{1F32C}\u{FE0F}",
    neighborhoods: [
      {
        name: "Wicker Park",
        description: "Artsy and hip with vintage shops, craft cocktail bars, and a vibrant music scene.",
        scores: { nightlife: 9, walkability: 8, greenSpace: 5, foodScene: 9, family: 3, transit: 7, artsCulture: 9, quiet: 3 },
        avgRent: 1900,
        vibe: "Hip & Artistic"
      },
      {
        name: "Lincoln Park",
        description: "Namesake park and zoo, leafy streets, and a mix of upscale dining with neighborhood charm.",
        scores: { nightlife: 7, walkability: 8, greenSpace: 10, foodScene: 8, family: 8, transit: 8, artsCulture: 6, quiet: 6 },
        avgRent: 2200,
        vibe: "Green & Lively"
      },
      {
        name: "Logan Square",
        description: "Former working-class neighborhood turned culinary hotspot with boulevards and independent bookstores.",
        scores: { nightlife: 8, walkability: 7, greenSpace: 6, foodScene: 9, family: 5, transit: 7, artsCulture: 8, quiet: 4 },
        avgRent: 1700,
        vibe: "Foodie & Evolving"
      },
      {
        name: "Hyde Park",
        description: "Home to UChicago and the Museum of Science & Industry. Intellectual, green, and lakefront-adjacent.",
        scores: { nightlife: 3, walkability: 7, greenSpace: 9, foodScene: 5, family: 8, transit: 6, artsCulture: 8, quiet: 8 },
        avgRent: 1400,
        vibe: "Academic & Peaceful"
      },
      {
        name: "Pilsen",
        description: "Vibrant Mexican-American heritage, colorful murals, and some of the best tacos in the Midwest.",
        scores: { nightlife: 6, walkability: 7, greenSpace: 4, foodScene: 9, family: 6, transit: 6, artsCulture: 9, quiet: 5 },
        avgRent: 1500,
        vibe: "Colorful & Cultural"
      },
      {
        name: "Lakeview",
        description: "Wrigley Field, lakefront trails, and a welcoming LGBTQ+ community in Boystown. Always something happening.",
        scores: { nightlife: 9, walkability: 8, greenSpace: 7, foodScene: 7, family: 5, transit: 8, artsCulture: 6, quiet: 4 },
        avgRent: 1800,
        vibe: "Spirited & Inclusive"
      }
    ]
  },
  "San Francisco": {
    emoji: "\u{1F309}",
    neighborhoods: [
      {
        name: "The Mission",
        description: "Sunny microclimate, legendary burritos, street art murals, and a thriving Latino cultural scene.",
        scores: { nightlife: 9, walkability: 9, greenSpace: 5, foodScene: 10, family: 4, transit: 8, artsCulture: 9, quiet: 3 },
        avgRent: 3000,
        vibe: "Vibrant & Flavorful"
      },
      {
        name: "Noe Valley",
        description: "Sunny village feel with stroller-friendly sidewalks, boutique shops, and weekend farmers markets.",
        scores: { nightlife: 2, walkability: 7, greenSpace: 6, foodScene: 6, family: 10, transit: 6, artsCulture: 4, quiet: 9 },
        avgRent: 3500,
        vibe: "Sunny & Family"
      },
      {
        name: "Hayes Valley",
        description: "Boutique shopping, trendy restaurants, and proximity to arts venues. Compact and stylish.",
        scores: { nightlife: 6, walkability: 9, greenSpace: 5, foodScene: 8, family: 4, transit: 8, artsCulture: 8, quiet: 5 },
        avgRent: 3200,
        vibe: "Chic & Central"
      },
      {
        name: "The Sunset",
        description: "Ocean Beach access, foggy and mellow, with great Asian food and a laid-back surfing culture.",
        scores: { nightlife: 2, walkability: 5, greenSpace: 8, foodScene: 7, family: 8, transit: 5, artsCulture: 3, quiet: 9 },
        avgRent: 2500,
        vibe: "Chill & Coastal"
      },
      {
        name: "North Beach",
        description: "Little Italy meets Beat Generation. Italian cafes, City Lights Bookstore, and panoramic hill views.",
        scores: { nightlife: 7, walkability: 9, greenSpace: 5, foodScene: 8, family: 4, transit: 7, artsCulture: 9, quiet: 4 },
        avgRent: 2800,
        vibe: "Literary & Italian"
      },
      {
        name: "The Castro",
        description: "Historic LGBTQ+ neighborhood with colorful Victorian homes, community spirit, and lively nightlife.",
        scores: { nightlife: 8, walkability: 8, greenSpace: 5, foodScene: 7, family: 4, transit: 7, artsCulture: 7, quiet: 4 },
        avgRent: 2900,
        vibe: "Proud & Historic"
      }
    ]
  },
  "Austin": {
    emoji: "\u{1F3B8}",
    neighborhoods: [
      {
        name: "South Congress (SoCo)",
        description: "Iconic Austin strip with live music, food trucks, vintage shopping, and 'Keep Austin Weird' energy.",
        scores: { nightlife: 8, walkability: 7, greenSpace: 5, foodScene: 9, family: 5, transit: 4, artsCulture: 9, quiet: 3 },
        avgRent: 2000,
        vibe: "Iconic & Funky"
      },
      {
        name: "East Austin",
        description: "Fast-evolving creative district with galleries, craft breweries, and some of the best BBQ in Texas.",
        scores: { nightlife: 8, walkability: 6, greenSpace: 4, foodScene: 10, family: 4, transit: 4, artsCulture: 9, quiet: 3 },
        avgRent: 1800,
        vibe: "Creative & Bold"
      },
      {
        name: "Zilker",
        description: "Adjacent to Zilker Park and Barton Springs. Outdoor lovers' paradise with trail access and swimming holes.",
        scores: { nightlife: 4, walkability: 5, greenSpace: 10, foodScene: 5, family: 8, transit: 3, artsCulture: 4, quiet: 7 },
        avgRent: 2200,
        vibe: "Outdoorsy & Relaxed"
      },
      {
        name: "Downtown / Rainey St",
        description: "Converted bungalow bars, rooftop lounges, and Lady Bird Lake. The nightlife epicenter.",
        scores: { nightlife: 10, walkability: 9, greenSpace: 6, foodScene: 8, family: 2, transit: 5, artsCulture: 7, quiet: 1 },
        avgRent: 2500,
        vibe: "Lively & Urban"
      },
      {
        name: "Mueller",
        description: "Master-planned community with parks, trails, a farmers market, and family-oriented design.",
        scores: { nightlife: 2, walkability: 7, greenSpace: 8, foodScene: 5, family: 10, transit: 4, artsCulture: 3, quiet: 8 },
        avgRent: 1900,
        vibe: "Planned & Family"
      },
      {
        name: "North Loop",
        description: "Retro vibes with record shops, vintage clothing, and locally-owned coffee spots.",
        scores: { nightlife: 5, walkability: 6, greenSpace: 4, foodScene: 7, family: 5, transit: 4, artsCulture: 7, quiet: 6 },
        avgRent: 1600,
        vibe: "Retro & Local"
      }
    ]
  },
  "Portland": {
    emoji: "\u{1F332}",
    neighborhoods: [
      {
        name: "Alberta Arts District",
        description: "Monthly art walks, independent galleries, and a strong sense of community creativity.",
        scores: { nightlife: 6, walkability: 7, greenSpace: 5, foodScene: 8, family: 6, transit: 6, artsCulture: 10, quiet: 5 },
        avgRent: 1600,
        vibe: "Artistic & Community"
      },
      {
        name: "Hawthorne",
        description: "Quintessential Portland: bookstores, vintage shops, vegan cafes, and counterculture spirit.",
        scores: { nightlife: 5, walkability: 8, greenSpace: 6, foodScene: 8, family: 5, transit: 7, artsCulture: 8, quiet: 5 },
        avgRent: 1500,
        vibe: "Classic Portland"
      },
      {
        name: "Pearl District",
        description: "Former warehouse district turned upscale with galleries, restaurants, and Powell's Books.",
        scores: { nightlife: 7, walkability: 9, greenSpace: 5, foodScene: 8, family: 3, transit: 8, artsCulture: 8, quiet: 4 },
        avgRent: 2200,
        vibe: "Upscale & Walkable"
      },
      {
        name: "Sellwood-Moreland",
        description: "Antique shops, riverfront access, and a small-town feel within the city. Great for families.",
        scores: { nightlife: 2, walkability: 7, greenSpace: 8, foodScene: 6, family: 9, transit: 5, artsCulture: 5, quiet: 8 },
        avgRent: 1400,
        vibe: "Quaint & Riverside"
      },
      {
        name: "Division Street",
        description: "Restaurant row with James Beard-nominated spots and a booming food cart scene.",
        scores: { nightlife: 6, walkability: 7, greenSpace: 4, foodScene: 10, family: 4, transit: 7, artsCulture: 6, quiet: 4 },
        avgRent: 1700,
        vibe: "Foodie Heaven"
      },
      {
        name: "St. Johns",
        description: "Cathedral Park, the iconic bridge, and a tight-knit community with affordable charm.",
        scores: { nightlife: 3, walkability: 6, greenSpace: 8, foodScene: 5, family: 8, transit: 4, artsCulture: 5, quiet: 8 },
        avgRent: 1300,
        vibe: "Affordable & Friendly"
      }
    ]
  }
};

// Lifestyle dimension metadata for the UI
const LIFESTYLE_DIMENSIONS = [
  { key: "nightlife",   label: "Nightlife & Bars",    icon: "\u{1F378}", description: "Late nights, live music, cocktail bars" },
  { key: "walkability", label: "Walkability",          icon: "\u{1F6B6}", description: "Walk to errands, shops, and restaurants" },
  { key: "greenSpace",  label: "Parks & Green Space",  icon: "\u{1F333}", description: "Parks, trails, and nature access" },
  { key: "foodScene",   label: "Food & Dining",        icon: "\u{1F37D}\u{FE0F}", description: "Restaurants, food trucks, diverse cuisine" },
  { key: "family",      label: "Family Friendly",      icon: "\u{1F46A}", description: "Kid-friendly, safe, good schools nearby" },
  { key: "transit",     label: "Public Transit",       icon: "\u{1F687}", description: "Subway, bus, and bike infrastructure" },
  { key: "artsCulture", label: "Arts & Culture",       icon: "\u{1F3A8}", description: "Galleries, theaters, music venues, museums" },
  { key: "quiet",       label: "Peace & Quiet",        icon: "\u{1F54A}\u{FE0F}", description: "Low noise, residential calm, relaxed pace" }
];
