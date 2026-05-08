const launchesDatabase = require("./launches.mongo");
const planetsDatabase = require("./planets.mongo");
const axios = require("axios");

const DEFAULT_FLIGHT_NUMBER = 100;

const SPACE_API_URL = "https://api.spacexdata.com/v4/launches/query";
const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("December 27, 2030"),
  target: "Kepler-442 b",
  customers: ["GIGGA", "NASA"],
  upcoming: true,
  success: true,
};

// ✅ Fixed: queries the database correctly
async function findLaunch(filter) {
  return await launchesDatabase.findOne(filter);
}

async function populateLaunches() {
  try {
    const response = await axios.post(SPACE_API_URL, {
      query: {},
      options: {
        pagination: false,
        populate: [
          { path: "rocket", select: { name: 1 } },
          { path: "payloads", select: { customers: 1 } },
        ],
      },
    });

    if (response.status !== 200) {
      console.log("Problem downloading launch data");
      throw new Error("Launch data download failed");
    }

    const launchDocs = response.data.docs;
    console.log("Total launches fetched:", launchDocs.length);

    for (const launchDoc of launchDocs) {
      const payloads = launchDoc["payloads"];
      const customers = payloads.flatMap((payload) => payload["customers"]);

      const launchData = {
        flightNumber: launchDoc["flight_number"],
        mission: launchDoc["name"],
        rocket: launchDoc["rocket"]["name"],
        launchDate: launchDoc["date_local"],
        upcoming: launchDoc["upcoming"],
        success: launchDoc["success"],
        customers,
      };

      await launchesDatabase.findOneAndUpdate(
        { flightNumber: launchData.flightNumber },
        launchData,
        { upsert: true },
      );
    }
  } catch (err) {
    console.error("Error in populateLaunches:", err.message);
  }
}

async function loadLaunchesData() {
  const firstLaunch = await findLaunch({
    // ✅ Fixed: now calls the correct function
    flightNumber: 1,
    rocket: "Falcon 1",
    mission: "FalconSat",
  });
  if (firstLaunch) {
    console.log("Launch data already loaded!");
  } else {
    await populateLaunches();
  }
}

async function loadLaunchData() {
  const firstLaunch = await launchesDatabase.findOne({ flightNumber: 100 });
  if (!firstLaunch) {
    await saveLaunch(launch);
  }
}

async function existsLaunchWithId(launchId) {
  return await findLaunch({ flightNumber: launchId });
}

async function getLatestFlightNumber() {
  const latestLaunch = await launchesDatabase.findOne().sort("-flightNumber");
  if (!latestLaunch) {
    return DEFAULT_FLIGHT_NUMBER;
  }
  return latestLaunch.flightNumber;
}

async function getAllLaunches(skip, limit) {
  return await launchesDatabase
    .find({}, { _id: 0, __v: 0 })
    .lean()
    .skip(skip)
    .limit(limit);
}

async function saveLaunch(launch) {
  await launchesDatabase.findOneAndUpdate(
    { flightNumber: launch.flightNumber },
    launch,
    { upsert: true },
  );
}

async function getUpcomingLaunches() {
  return await launchesDatabase
    .find({ upcoming: true }, { _id: 0, __v: 0 })
    .lean();
}

async function scheduleNewLaunch(launch) {
  const planet = await planetsDatabase.findOne({
    keplerName: launch.target,
  });
  if (!planet) {
    throw new Error("No matching planet found");
  }
  const newFlightNumber = (await getLatestFlightNumber()) + 1;
  const newLaunch = Object.assign(launch, {
    flightNumber: newFlightNumber,
    upcoming: true,
    success: true,
    customers: ["GIGGA", "NASA"],
  });
  await saveLaunch(newLaunch);
}

async function abortLaunchById(launchId) {
  const aborted = await launchesDatabase.updateOne(
    { flightNumber: launchId },
    {
      $set: {
        upcoming: false,
        success: false,
      },
    },
  );
  return aborted.modifiedCount === 1;
}

module.exports = {
  loadLaunchesData,
  loadLaunchData,
  existsLaunchWithId,
  getAllLaunches,
  getUpcomingLaunches,
  scheduleNewLaunch,
  abortLaunchById,
};
