const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.use("/assets", express.static(path.resolve(__dirname, "src", "assets")));
app.use("/components", express.static(path.resolve(__dirname, "src", "components")));
app.use("/css", express.static(path.resolve(__dirname, "src", "css")));
app.use("/js", express.static(path.resolve(__dirname, "src", "js")));
app.use("/views", express.static(path.resolve(__dirname, "src", "views")));
app.use("/language", express.static(path.resolve(__dirname, "src", "language")));

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"));
});

app.listen(port, () => {
    console.log(` ________________________________________________________________________________\n|                                        .                                       |\n|                                       @@@                                      |\n|                                     #@@@@@                                     |\n|                                                                                |\n|                                                                                |\n|                                                                                |\n|                                                                                |\n|                                                                                |\n|                                                                                |\n|                                                                                |\n|                                   @@@@@@@@@@@                                  |\n|                               @@@@@@@@@@@@@@@@@@%                              |\n|                             @@@@@@@@@@@@@@@@@@@@@@@ #@@@@                      |\n|                           *@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                     |\n|                          .@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@                   |\n|                          @@@@@@@@@@@@@@                                        |\n|                          @@@@@@@@@@@@@@                                        |\n|                          @@@@@@@@@@@@@@                                        |\n|                          ,@@@@@@@@@@@@@@@@@@@@@@@@@             @              |\n|                           (@@@@@@@@@@@@@@@@@@@@@@@@             @@@            |\n|           /                 @@@@@@@@@@@@@@@@@@@@@@@             @@@@           |\n|          @@#                  @@@@@@@@@@@@@@@@@@&               @@@@@@         |\n|         @@@@,                     @@@@@@@@@@@                   @@@@@@@        |\n|       @@@@@@@@                                                  @@@@@@@@@      |\n|      ..........                                                 ..........     |\n|                                                                                |\n|                                                                                |\n|                                                                                |\n|                      Listening at http://localhost:${port}                        |\n|                                                                                |\n|                                                                                |\n|________________________________________________________________________________|`);
    console.log("Server running...");
});