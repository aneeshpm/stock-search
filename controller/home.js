const client = require("../database");
const {
  searchStocksValidation,
  searchStocksWithIdValidation,
} = require("../validation");

// get all stocks
exports.getStocks = async function (req, res) {
  try {
    const stocks = await client.query("SELECT id,name from  stocks ");
    res.send(stocks.rows);
  } catch (err) {
    console.log(err);
  }
};

// search stocks
exports.searchStocks = async function (req, res) {
  try {
    const { error } = searchStocksValidation(req.query);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const stocks = await client.query("SELECT id,name FROM  stocks");
    matches = stocks.rows.filter((stock) => {
      const regex = new RegExp(`^${req.query.name}`, "gi");
      return stock.name.match(regex);
    });
    res.send(matches);
  } catch (err) {
    console.log(err);
  }
};

// search stocks by id
exports.searchStocksById = async function (req, res) {
  try {
    const { error } = searchStocksWithIdValidation(req.query);
    if (error) {
      return res.status(400).send(error.details[0].message);
    }
    const stocks = await client.query(
      "SELECT * FROM  stocks where id = " + req.query.id
    );
    res.send(stocks.rows);
  } catch (err) {
    console.log(err);
  }
};
