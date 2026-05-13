require("dotenv").config();

const mongoose = require("mongoose");
const Project = require("./models/Project");

const projects = [
  {
    title: "SmartCC",
    description: "AI CCTV System for smart monitoring and security.",
    tech: ["React", "Node.js", "MongoDB", "Python", "AI"],
    githubLink: "https://github.com/yourusername/smartcc",
    imageUrl: "https://via.placeholder.com/400x250?text=SmartCC"
  },
  {
    title: "DocuMind AI",
    description: "AI-powered document understanding and processing system.",
    tech: ["React", "Express.js", "MongoDB", "NLP"],
    githubLink: "https://github.com/yourusername/documind",
    imageUrl: "https://via.placeholder.com/400x250?text=DocuMind+AI"
  },
  {
    title: "Spotify Genre Segmentation",
    description: "Machine learning application to segment and classify Spotify track genres.",
    tech: ["Python", "Scikit-Learn", "Pandas", "Spotify API"],
    githubLink: "https://github.com/yourusername/spotify-genre",
    imageUrl: "https://via.placeholder.com/400x250?text=Spotify+Genre"
  },
  {
    title: "Ben 10 RPG Game",
    description: "An engaging Role-Playing Game based on the Ben 10 universe.",
    tech: ["Java", "LibGDX"],
    githubLink: "https://github.com/yourusername/ben10-rpg",
    imageUrl: "https://via.placeholder.com/400x250?text=Ben+10+RPG"
  }
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Project.deleteMany({});
    console.log("Old projects deleted");

    await Project.insertMany(projects);
    console.log("New projects seeded");

    mongoose.connection.close();
  })
  .catch((err) => console.error("MongoDB connection error:", err));
