const { Router } = require("express");
const planetsRouter = require("./planets/planets.router");
const launchesRouter = require("./launches/launches.routes");

const api = Router();

api.use("/planets", planetsRouter); // /v1/planets via app.js
api.use("/launches", launchesRouter); // /v1/launches via app.js
module.exports = api;
