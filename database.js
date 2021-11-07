const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// client.query(
//   "CREATE TABLE stocks (id SERIAL PRIMARY KEY, name VARCHAR(30),CurrentMarketPrice numeric,\
//   MarketCap numeric, StockPE  numeric, DividendYield numeric, ROCE numeric,ROEPreviousAnnum numeric,DebttoEquity numeric,\
// EPS numeric,Reserves numeric ,Debt numeric)"
// );

module.exports = client;
