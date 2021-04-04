const sql = require("./db.js");

// Define schema
const Request = function (request) {
  this.method = request.method;
  this.endpoint = request.endpoint;
};

// Get all method
Request.getAll = (result) => {
  sql.query("SELECT * FROM request", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return err;
    }
    result(null, res);
  });
};

module.exports = Request;
