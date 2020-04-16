const express = require("express");
//const logger = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

const PORT = process.env.PORT || 3000;

const app = express();
require("./routes/api-routes")(app);
require("./routes/html-routes")(app);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})