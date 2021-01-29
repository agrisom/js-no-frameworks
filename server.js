const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "src", "static")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"));
});

app.listen(port, () => {
    console.log("Server running...");
    console.log(`Listening at http://localhost:${port}`);
});