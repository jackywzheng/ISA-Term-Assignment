const sql = require("./db.js");

// Define schema
const Task = function(task) {
    this.user_id = task.user_id;
    this.description = task.description;
    this.completed = task.completed
};

// Create method
Task.create = (task, result) => {
    sql.query("INSERT INTO task SET ?", task, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return err;
      }
  
      result(null, { content: res.insertcontent, ...task });
    });
  };

  // Get all method
  // TODO: Only show tasks for the logged in user
  Task.getAll = result => {
    sql.query("SELECT * FROM task", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return err;
      }
  
      result(null, res);
    });
  };

  // Update method
  Task.updateByContent = (task, result) => {
    sql.query(
      "UPDATE task SET content = ?, answer_1 = ?, answer_2 = ?, answer_3 = ?, answer_4 = ?, correct =? WHERE content = ?",
      [task.content, task.answer_1, task.answer_2, task.answer_3, task.answer_4, task.correct, task.content],
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
        
        result(null, { ...task });
        return ("Updated task: ", { ...task });
      }
    );
  };

  module.exports = Task;