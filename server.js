const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); // for JSON parsing
app.use(cors()) // Allow CORS
app.use(express.static("app")) // Display static files

// Testing purposes
app.get('/', (req, res) => {
    res.json({
        message: "Term Project"
    })
});

require("./app/routes/question.routes.js")(app);
require("./app/routes/user.routes.js")(app);
require("./app/routes/task.routes.js")(app);

app.listen(PORT, () => {
    console.log("Server running on port", PORT)
})
