const Question = require("../models/question.model.js");

// Create and Save a new Question
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Question
  const question = new Question({
    content: req.body.content,
    answer_1: req.body.answer_1,
    answer_2: req.body.answer_2,
    answer_3: req.body.answer_3,
    answer_4: req.body.answer_4,
    correct: req.body.correct
  });

  // Save Question to the database
  Question.create(question, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Question."
      });
    else res.send(data);
  });
};

// Retrieve all Questions from the database
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


// Update a Question identified by the Question's content in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Question
  const question = new Question({
    content: req.body.content,
    answer_1: req.body.answer_1,
    answer_2: req.body.answer_2,
    answer_3: req.body.answer_3,
    answer_4: req.body.answer_4,
    correct: req.body.correct
  });

  Question.updateByContent(question, (err, data) => {
      console.log(question)
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Did not find Question: ${question.content}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Question with content " + question.content
          });
        }
      } else res.send(data);
    }
  );
};
