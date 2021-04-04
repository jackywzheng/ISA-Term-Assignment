const Task = require("../models/task.model.js");

// Create and Save a new Task
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Task
  const task = new Task({
    user_id: req.body.user_id,
    description: req.body.description,
    completed: req.body.completed
  });

  // Save Question to the database
  Task.create(task, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the task."
      });
    else res.send(data);
  });
};

// Retrieve all Questions from the database
// TODO: Only get current task
exports.get = (req, res) => {
    Task.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "An error occurred while retrieving Questions."
          });
        else res.send(data);
      });
};


// Update a task identified by the task's ID in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a task
  const task = new Task({
    user_id: req.body.user_id,
    description: req.body.description,
    completed: req.body.completed
  });

  Task.updateById(task, req.body.id, (err, data) => {
      console.log(task)
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Did not find task: ${task.description}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating task's password."
          });
        }
      } else res.send(data);
    }
  );
};
