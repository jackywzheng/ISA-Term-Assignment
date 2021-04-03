const sql = require("./db.js");

// Define schema
const User = function(user) {
    this.username = user.username;
    this.password = user.password
};

// Create method
User.create = (user, result) => {
    sql.query("INSERT INTO user SET ?", user, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return err;
      }
  
      result(null, { content: res.insertcontent, ...user });
    });
  };

  // Get all method
  // TODO: GET current user
  user.getAll = result => {
    sql.query("SELECT * FROM user", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return err;
      }
  
      result(null, res);
    });
  };

  // Update password
  User.updatePassword = (user, result) => {
    sql.query(
      "UPDATE user SET password = ? WHERE id = ?",
      [user.password, user.id],
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
        
        result(null, { ...user });
        return ("Updated user password: ", { ...user });
      }
    );
  };

  module.exports = User;