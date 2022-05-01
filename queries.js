const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Bible books",
  passowrd: "postgres",
  port: 5432,
});

const getBooks = (req, res) => {
  pool.query("SELECT * FROM books ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getBookById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM books WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.json(results.rows);
  });
};


module.exports = {
  getBooks,
  getBookById,
};
