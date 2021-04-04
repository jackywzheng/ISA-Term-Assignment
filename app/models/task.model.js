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
  Task.getAll = (user_id, result) => {
    sql.query("SELECT * FROM task WHERE user_id = ?", user_id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return err;
      }
  
      result(null, res);
    });
  };

  // Update method
  Task.updateById = (task, id, result) => {
    sql.query(
      "UPDATE task SET user_id = ?, description = ?, completed = ? WHERE id = ?",
      [task.user_id, task.description, task.completed, id],
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