module.exports = app => {
    const requests = require("../controllers/request.controller.js");
  
    // Retrieve an existing Task using GET
    app.get("/API/v1/requests", requests.get);
};