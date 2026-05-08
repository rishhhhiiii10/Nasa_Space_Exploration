const { getAllPlanets } = require("../../models/planets.model");
async function httpGetAllPlanets(req, res) {
  try {
    return res.status(200).json(await getAllPlanets()); // ← async + await
  } catch (err) {
    console.error("Error fetching planets:", err);
    return res.status(500).json({ error: err.message });
  }
}

module.exports = {
  httpGetAllPlanets,
};
