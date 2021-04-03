const User = require("../models/user.model.js");

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  // Save Question to the database
  User.create(user, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the User."
      });
    else res.send(data);
  });
};

// Retrieve all Questions from the database
// TODO: Only get current user
exports.get = (req, res) => {
    Question.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "An error occurred while retrieving Questions."
          });
        else res.send(data);
      });
};


// Update a User identified by the User's ID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a User
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  User.updatePassword(user, (err, data) => {
      console.log(user)
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Did not find User: ${user.username}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating User's password."
          });
        }
      } else res.send(data);
    }
  );
};
