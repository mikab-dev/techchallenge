import db from "../../utils/db";

export default (req, res) => {
  if (req.method === "GET") {
    const sql = "SELECT * FROM argonautes";
    db.query(sql, (err, results) => {
      if (err) {
        res
          .status(500)
          .send(err, "Erreur lors de la récupération d'une anecdote");
      } else {
        res.json(results);
      }
    });
  } else if (req.method === "POST") {
    const formBody = req.body;
    const sql = "INSERT INTO argonautes SET ?";
    db.query(sql, [formBody], (err, results) => {
      if (err) {
        res.status(500).json({
          error: err.message,
          sql: err.sql,
        });
      } else {
        setTimeout(() => {
          res.json(formBody);
        }, 500);
      }
    });
  }
};
