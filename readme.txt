1. On the index.hbs page we have a form with the action of /test/submit/ that takes us to our routes index.js page, to our router.post('/test/submit')

2. Since we have an input on our index.hbs page we want to want to create a variable for it on our index.js page:

var id = req.body.id;
res.redirect('/test/' + id);


When you go to the homepage accessed at localhost:5001 you will find a form.

When you submit your input it will be printed out on your test.hbs page just as we specified with handlebars to print the Output. 
