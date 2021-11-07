const {
  getStocks,
  searchStocks,
  searchStocksById,
} = require("../controller/home");
const router = require("express").Router();
const verify = require("./verifyToken");

// get all stocks
router.get("/stocks", verify, async (req, res) => {
  try {
    const data = await getStocks(req, res);
  } catch (err) {
    res.status(400).send(err);
  }
});

// search for stocks
router.get("/search-stocks", verify, async (req, res) => {
  try {
    const data = await searchStocks(req, res);
  } catch (err) {
    res.status(400).send(err);
  }
});

// search for stocks with id
router.get("/search-stocks-id", verify, async (req, res) => {
  try {
    const data = await searchStocksById(req, res);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
