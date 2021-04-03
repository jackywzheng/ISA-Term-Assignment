const sql = require("./db.js");

// Define schema
const Question = function(question) {
    this.content = question.content;
    this.answer_1 = question.answer_1;
    this.answer_2 = question.answer_2;
    this.answer_3 = question.answer_3;
    this.answer_4 = question.answer_4;
    this.correct = question.correct;
};

// Create method
Question.create = (question, result) => {
    sql.query("INSERT INTO question SET ?", question, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return err;
      }
  
      result(null, { content: res.insertcontent, ...question });
    });
  };

  // Get all method
  Question.getAll = result => {
    sql.query("SELECT * FROM question", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return err;
      }
  
      result(null, res);
    });
  };

  // Update method
  Question.updateByContent = (question, result) => {
    sql.query(
      "UPDATE question SET content = ?, answer_1 = ?, answer_2 = ?, answer_3 = ?, answer_4 = ?, correct =? WHERE content = ?",
      [question.content, question.answer_1, question.answer_2, question.answer_3, question.answer_4, question.correct, question.content],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return err;
        }
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return err;
        }
        
        result(null, { ...question });
        return ("Updated question: ", { ...question });
      }
    );
  };

  module.exports = Question;