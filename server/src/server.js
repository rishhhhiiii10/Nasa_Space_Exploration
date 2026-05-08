require("dotenv").config({
  path: require("path").resolve(__dirname, "..", ".env"),
});
const http = require("http");
const app = require("./app");

const mongoose = require("mongoose");
const server = http.createServer(app);
const { loadPlanetsData } = require("./models/planets.model");
const { loadLaunchData } = require("./models/launches.model");
const { loadLaunchesData } = require("./models/launches.model");

const PORT = process.env.PORT || 8000;

async function startServer() {
  await mongoose.connect(process.env.MONGO_URL);
  await loadPlanetsData();
  await loadLaunchData();
  await loadLaunchesData();

  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();
