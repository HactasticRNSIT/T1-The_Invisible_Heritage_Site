const dotenv = require("dotenv");
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Site = require("../models/Site");
const Story = require("../models/Story");

dotenv.config();

const sites = [
  {
    name: "Taj Mahal",
    description: "A marble monument celebrated for its architecture, craft, and layered memory.",
    category: "monument",
    location: {
      district: "Agra",
      state: "Uttar Pradesh",
      country: "India",
      coordinates: { lat: 27.1751, lng: 78.0421 },
    },
    images: ["https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=900&q=80"],
    tags: ["unesco", "mughal", "architecture"],
    badge: "Featured Site",
    visibilityScore: 92,
    averageRating: 4.9,
    totalReviews: 128,
    visitCount: 4200,
    featured: true,
  },
  {
    name: "Hampi",
    description: "A historic city of temples, markets, and stone landscapes from the Vijayanagara Empire.",
    category: "architecture",
    location: {
      district: "Vijayanagara",
      state: "Karnataka",
      country: "India",
      coordinates: { lat: 15.335, lng: 76.46 },
    },
    images: ["https://images.unsplash.com/photo-1620766182966-c6eb5ed2b788?auto=format&fit=crop&w=900&q=80"],
    tags: ["unesco", "vijayanagara", "ruins"],
    badge: "Featured Site",
    visibilityScore: 76,
    averageRating: 4.8,
    totalReviews: 94,
    visitCount: 2700,
    featured: true,
  },
  {
    name: "Konark Sun Temple",
    description: "A stone chariot of the sun, carved with celestial detail and precise geometry.",
    category: "temple",
    location: {
      district: "Puri",
      state: "Odisha",
      country: "India",
      coordinates: { lat: 19.8876, lng: 86.0945 },
    },
    images: ["https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=900&q=80"],
    tags: ["sun temple", "unesco", "kalinga"],
    badge: "Featured Site",
    visibilityScore: 81,
    averageRating: 4.7,
    totalReviews: 73,
    visitCount: 2100,
    featured: true,
  },
  {
    name: "Rani ki Vav Stepwell",
    description: "An underground architectural archive whose stories are often hidden behind larger monument circuits.",
    category: "architecture",
    location: {
      district: "Patan",
      state: "Gujarat",
      country: "India",
      coordinates: { lat: 23.858, lng: 72.1016 },
    },
    images: ["https://images.unsplash.com/photo-1623059508779-c842f62f6d4e?auto=format&fit=crop&w=900&q=80"],
    tags: ["stepwell", "water heritage", "unesco"],
    badge: "Underrated Place",
    visibilityScore: 34,
    riskLabel: "Low visibility score",
    hiddenGem: true,
  },
  {
    name: "Majuli Satras",
    description: "Living monasteries and cultural practices on a river island shaped by erosion and fragile memory.",
    category: "sacred",
    location: {
      district: "Majuli",
      state: "Assam",
      country: "India",
      coordinates: { lat: 26.95, lng: 94.17 },
    },
    images: ["https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=900&q=80"],
    tags: ["monastery", "river island", "living heritage"],
    badge: "Disappearing Heritage",
    visibilityScore: 27,
    riskLabel: "Erosion threat",
    hiddenGem: true,
  },
  {
    name: "Bidar Fort",
    description: "A layered Deccan fortress with quiet courtyards, gateways, and water systems.",
    category: "battlefield",
    location: {
      district: "Bidar",
      state: "Karnataka",
      country: "India",
      coordinates: { lat: 17.9149, lng: 77.5301 },
    },
    images: ["https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=900&q=80"],
    tags: ["fort", "deccan", "water systems"],
    badge: "Under-Mapped Site",
    visibilityScore: 41,
    riskLabel: "Sparse digital records",
    hiddenGem: true,
  },
  {
    name: "Ajanta Caves",
    description: "Ancient Buddhist cave monuments known for paintings, sculpture, and monastic spaces.",
    category: "sacred",
    location: {
      district: "Aurangabad",
      state: "Maharashtra",
      country: "India",
      coordinates: { lat: 20.5519, lng: 75.7033 },
    },
    images: ["https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80"],
    tags: ["caves", "buddhist", "unesco"],
    badge: "Heritage Site",
    visibilityScore: 72,
  },
];

const stories = [
  {
    title: "A stepwell remembered through seasons",
    quote: "My grandmother never called it a monument. She called it the place where the village learned to wait for rain.",
    storyteller: "Meera, Patan",
    narrative: "HeritageLens preserves small memories that never enter textbooks: songs sung at the steps, water rituals, and family names for carved corners.",
    featured: true,
  },
  {
    title: "A river island holding its voice",
    quote: "The monastery is not only old walls. It is the sound of drums at dusk and children learning the same story in a changing river.",
    storyteller: "Rituphon, Majuli",
    narrative: "Local stories connect erosion, faith, migration, and performance so disappearing places can be understood as living communities.",
    featured: true,
  },
  {
    title: "The fort behind the postcard",
    quote: "Tourists photograph the gate, but my father showed me the hidden tank where workers rested after carrying stone all day.",
    storyteller: "Ayesha, Bidar",
    narrative: "Community narratives reveal everyday labor, family routes, forgotten water systems, and the emotional geography behind visible architecture.",
    featured: true,
  },
];

const seed = async () => {
  try {
    await connectDB();
    await Site.deleteMany({});
    await Story.deleteMany({});
    await Site.insertMany(sites);
    await Story.insertMany(stories);
    console.log("Seed data inserted");
    await mongoose.connection.close();
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
};

seed();
