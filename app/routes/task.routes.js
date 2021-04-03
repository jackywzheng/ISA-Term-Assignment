module.exports = app => {
    const tasks = require("../controllers/task.controller.js");
  
    // Create a new Task using POST
    app.post("/API/v1/tasks", tasks.create);
  
    // Retrieve an existing Task using GET
    app.get("/API/v1/tasks", tasks.get);
  
    // Update an existing Task's Completion and/or Description with matching Task.id using PUT
    app.put("/API/v1/tasks", tasks.update);
};