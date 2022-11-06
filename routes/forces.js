const express = require("express");

const db = require("../data/database");
const router = express.Router();

router.get("/", function (req, res) {
  res.redirect("/index");
});

router.get("/index", function (req, res) {
  res.render("index");
});

router.get("/:force/index", async function (req, res) {

  if(req.params.force){
    res.redirect('/index');
  }
  });

  
router.get('/army/all', function(req,res){
  

  res.redirect('/army');

});
  
router.get('/navy/all', function(req,res){
  

  res.redirect('/navy');

});

router.get('/air/all', function(req,res){
  

  res.redirect('/air');

});
// router.get('/about', function(req,res){
  

//   res.render('about');

// });

router.get("/army", async function (req, res) {
  const query = `
    select army_posts.Army_Post_ID,army_posts.Army_Post_Name,army_officers.Army_Officer_Name,army_ranks.Army_Rank_Name,army_ranks.Army_Salary
    from army_posts
    inner join army_ranks
    on army_posts.Army_Rank_ID = army_ranks.Army_Rank_ID
    inner join army_officers
    on army_posts.Army_Officer_ID = army_officers.Army_Officer_ID;
    `;

  const [data] = await db.query(query);
  res.render("army", { data: data });

  // res.render('index');
});


router.get("/navy", async function (req, res) {
  const query = `
    select navy_posts.Navy_Post_ID,navy_posts.Navy_Post_Name,navy_officers.Navy_Officer_Name,navy_ranks.Navy_Rank_Name,navy_ranks.Navy_Salary
    from navy_posts
    inner join navy_ranks
    on navy_posts.Navy_Rank_ID = navy_ranks.Navy_Rank_ID
    inner join navy_officers
    on navy_posts.Navy_Officer_ID = navy_officers.Navy_Officer_ID;
    `;

  const [data] = await db.query(query);
  res.render("navy", { data: data });

  // res.render('index');
});


router.get("/air", async function (req, res) {
  const query = `
    select air_posts.Air_Post_ID,air_posts.Air_Post_Name,air_officers.Air_Officer_Name,air_ranks.Air_Rank_Name,air_ranks.Air_Salary
    from air_posts
    inner join air_ranks
    on air_posts.Air_Rank_ID = air_ranks.Air_Rank_ID
    inner join air_officers
    on air_posts.Air_Officer_ID = air_officers.Air_Officer_ID;
    `;

  const [data] = await db.query(query);
  res.render("air", { data: data });

  // res.render('index');
});


// Army

router.get("/army/ranks", async function (req, res) {
  const query = `
        select * from army_ranks;
  
  `;

  const [data] = await db.query(query);

  res.render("army-ranks", { data: data });
});

router.get("/army/posts", async function (req, res) {
  const query = `
        select * from army_posts;
  
  `;

  const [data] = await db.query(query);

  res.render("army-posts", { data: data });
});

router.get("/army/officers", async function (req, res) {
  const query = `
        select * from army_officers;
  
  `;

  const [data] = await db.query(query);

  res.render("army-officers", { data: data });
});


// navy

router.get("/navy/ranks", async function (req, res) {
  const query = `
        select * from navy_ranks;
  
  `;

  const [data] = await db.query(query);

  res.render("navy-ranks", { data: data });
});

router.get("/navy/posts", async function (req, res) {
  const query = `
        select * from navy_posts;
  
  `;

  const [data] = await db.query(query);

  res.render("navy-posts", { data: data });
});

router.get("/navy/officers", async function (req, res) {
  const query = `
        select * from navy_officers;
  
  `;

  const [data] = await db.query(query);

  res.render("navy-officers", { data: data });
});

//Air Force

router.get("/air/ranks", async function (req, res) {
  const query = `
        select * from air_ranks;
  
  `;

  const [data] = await db.query(query);

  res.render("air-ranks", { data: data });
});

router.get("/air/posts", async function (req, res) {
  const query = `
        select * from air_posts;
  
  `;

  const [data] = await db.query(query);

  res.render("air-posts", { data: data });
});

router.get("/air/officers", async function (req, res) {
  const query = `
        select * from air_officers;
  
  `;

  const [data] = await db.query(query);

  res.render("air-officers", { data: data });
});
module.exports = router;
