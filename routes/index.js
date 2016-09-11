var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Finally Tightening Up Express With HandleBars, Huh?' });
// });

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Cool, Huh?', condition: true, anyArray: ['red,','orange,','yellow,','green,','blue,','indigo,','violot.'],  });
});

//Ben, Step1 of this project is establishing your get route below
//the /test/:id explains that this route expects and 'id' get parameter
//then, we pass it a function with the req, res, next parameters.
//next, we want to render something and pass it an object
//you will notice that id is one of the params available to be used effectively because you make it available in '/test/:id'
router.get('/test/:id', function(req, res, next) {
  res.render('test', {output: req.params.id})
});

//Ben, Step 2, Lets add a POST route!
//Lets say somewhere you have a form that gets submitted.
//this time we use 'redirect' instead of 'render' because often times when we sumbit something within a form we want to redirect to another page!
//the "submit" parameter below now corresponds to the submit button on the index.hbs page.
router.post('/test/submit', function(req, res, next) {
  var id = req.body.id;
  res.redirect('/test/' + id);
})


module.exports = router;
