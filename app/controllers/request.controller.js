const Request = require("../models/request.model.js");

// Retrieve all Requests from the database
exports.get = (req, res) => {
    Request.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "An error occurred while retrieving Requests."
          });
        else res.send(data);
      });
};
