const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Bible books",
  passowrd: "postgres",
  port: 5432,
});

const getBooks = (request, response) => {
  pool.query("SELECT * FROM books ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

module.exports = {
  getBooks,
};
