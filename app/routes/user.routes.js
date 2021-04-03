module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    // Create a new User using POST
    app.post("/API/v1/users", users.create);
  
    // Retrieve an existing User using GET
    app.get("/API/v1/users", users.get);
  
    // Update an existing User's password with matching User.id using PUT
    app.put("/API/v1/users", users.update);
};