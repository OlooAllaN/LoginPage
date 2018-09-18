const express = require('express');
const exphbs = require('express-handlebars');
var path = require("path");
const app = express();


//public JavaScript and CSS files.
app.use('/public',express.static(path.resolve(__dirname, '../client/public')));

// Register Handlebars view engine
app.engine('.hbs', exphbs({
          defaultLayout: 'main', extname: '.hbs',  
          partialsDir: path.resolve(__dirname, '../client/views/partials'),
          layoutsDir:  path.resolve(__dirname, '../client/views/layouts'),
}));

app.set('views', path.resolve(__dirname, '../client/views'));
app.set('view engine', '.hbs');

//Scripts associated with index.html
var scripts = [{ script:  path.resolve(__dirname, '../client/public/index.js') }];

app.get('/', (req, res) => {
  res.render('index', {title: 'Home', script: 'js/index.js'});
});

app.listen(3000, () => {
  console.log('Running → PORT 3000');
});