const express = require("express");
const app = express();

app.use((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    next();
  });
  

const movieControllers = require("./controllers/movieControllers");
const userControllers = require("./controllers/userControllers");

// Movie routes
app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);

// User routes
app.get("/api/users", userControllers.getUsers);
app.get("/api/users/:id", userControllers.getUserById);

const port = process.env.APP_PORT || 4748;

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
}).on("error", (err) => {
  console.error("Error:", err.message);
});

module.exports = app;
