const express = require("express");

const {
  httpGetAllLaunches,
  httpAddNewLaunch,
  httpAbortLaunch,
  httpGetUpcomingLaunches,
} = require("./launches.controller");

const launchesRouter = express.Router();

launchesRouter.get("/upcoming", httpGetUpcomingLaunches);
launchesRouter.get("/", httpGetAllLaunches);
launchesRouter.post("/", httpAddNewLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
