require("dotenv").config();
const express = require("express")
const app = express();
app.use("/", express.static("data"))
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
})