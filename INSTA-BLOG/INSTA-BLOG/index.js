const express = require("express");
const { url } = require("inspector");
const multer = require("multer");
const { diskStorage } = require("multer");
const app = express();
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

// Setting middlewares
// Setting EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "Views"));

// Setting middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));
app.use(methodOverride("_method"));

port = 8080;

// Starting server

app.listen(port, (req, res) => {
  console.log(`Listening on port : ${port}`);
});

let posts = [
  {
    id: uuidv4(),
    username: "@jhaplu",
    caption: "Mai hu JhaplaSurrrr",
    image: "/images/jhapluu.png",
  },
  {
    id: uuidv4(),
    username: "@taplu",
    caption: "Mai hu TaplaSurrrr",
    image: "/images/taplu.jpg",
  },
  {
    id: uuidv4(),
    username: "@paplu",
    caption: "Mai hu PaplaSurrrr",
    image: "/images/paplu.png",
  },
];

// Home page
app.get("/posts", (req, res) => {
  res.render("home.ejs", { posts });
});

// New post

// sending get request to render form
app.get("/posts/new", (req, res) => {
  let id = uuidv4();
  res.render("new.ejs", { id });
});

//Setting storage

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// serving the post request to create new post
app.post("/posts", upload.single("image"), (req, res) => {
  let id = uuidv4();
  let { username, caption } = req.body;
  if (!username.startsWith("@")) {
    username = "@" + username;
  }
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  let newPost = { id, username, caption, image };
  posts.unshift(newPost);
  res.redirect("/posts");
});

// View each post
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);

  if (post) {
    res.render("show.ejs", { post });
  } else {
    res.send("wrong id");
  }
});

// Editing Post

//SERVING EDIT FORM
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  if (!post) return res.send("Sorry can't edit! Wrong id");
  res.render("edit.ejs", { post });
});

// PUT ROUTE
app.put("/posts/:id", upload.single("image"), (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  if (!post) return res.send("Post not found");

  let { newCaption, username } = req.body;
  if (!username.startsWith("@")) {
    username = "@" + username;
  }
  post.username = username;
  post.caption = newCaption;

  if (req.file) {
    post.image = `/uploads/${req.file.filename}`;
  }
  res.redirect("/posts");
});

//DELETE ROUTE
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});
