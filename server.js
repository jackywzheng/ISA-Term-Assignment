const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // for JSON parsing
app.use(cors()) // Allow CORS

// Testing purposes
app.get('/', (req, res) => {
    res.json({
        message: "Term Project"
    })
});

require("./app/routes/user.routes.js")(app);
require("./app/routes/task.routes.js")(app);
require("./app/routes/request.routes.js")(app);

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
