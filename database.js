// postgres database connection
const { Pool } = require("pg");
const dotenv = require("dotenv");
dotenv.config();
const client = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
module.exports = client;
