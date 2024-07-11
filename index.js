const express = require("express");
const bodyParser = require("body-parser");

const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments");

const error = require("./utilities/error");

const app = express();
const port = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/users", users);
app.use("/posts", posts);
app.use("/comments", comments);


app.use((req, res, next) => {
  next(error(404, "Not Found"));
});

app.use((err, req, res, next) => {
  res.status(err.status).json(err);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
