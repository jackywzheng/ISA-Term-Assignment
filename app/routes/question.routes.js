module.exports = app => {
    const questions = require("../controllers/question.controller.js");
  
    // Create a new Question using POST
    app.post("/API/v1/questions", questions.create);
  
    // Retrieve all Questions using GET
    app.get("/API/v1/questions", questions.get);
  
    // Update a Question with matching Question.content using PUT
    app.put("/API/v1/questions", questions.update);
};