import express from "express";

const app = express();
const port = 3000;


app.use(express.static("public"));

//home page
app.get("/", (req, res) => {
  res.render("home.ejs");
});

//all redirects here
app.get("/home.ejs", (req,res)=>{
  res.redirect("/");
});

app.get("/interior/home.ejs", (req, res) => {
  res.redirect("/");
});

app.get("/feedback/home.ejs", (req, res) => {
  res.redirect("/");
});


//all other get routes here
app.get("/category/brand", (req, res) => {
  res.render("category/brand.ejs");
});

app.get("/category/type", (req, res) => {
  res.render("category/type.ejs");
});

app.get("/category/material", (req, res) => {
  res.render("category/material.ejs");
});

app.get("/category/exterior", (req, res) => {
  res.render("category/exterior.ejs");
});

app.get("/category/interior", (req, res) => {
  res.render("category/interior.ejs");
});

app.get("/interior/seatcovers/seatcovers", (req, res) => {
  res.render("interior/seatcovers/seatcovers.ejs");
});

app.get("/interior/seatcovers/seatcovers.ejs", (req, res) => {
  res.render("interior/seatcovers/seatcovers.ejs");
});

app.get("/interior/mats/mats", (req, res) => {
  res.render("interior/mats/mats.ejs");
});

app.get("/interior/mats/mats.ejs", (req, res) => {
  res.render("interior/mats/mats.ejs");
});


app.get("/interior/seatcovers/sc1.ejs", (req, res) => {
  res.render("interior/seatcovers/sc1.ejs");
});

app.get("/feedback/support/support", (req, res) => {
  res.render("feedback/support/support.ejs");
});

app.get("/feedback/support/support.ejs", (req, res) => {
  res.render("feedback/support/support.ejs");
});

app.get("/feedback/about/about", (req, res) => {
  res.render("feedback/about/about.ejs");
});

app.get("/feedback/about/about.ejs", (req, res) => {
  res.render("feedback/about/about.ejs");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

