var express = require('express');
var app = express();

app.use(express.static('public'));

var swig = require('swig');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/CashewPixel')

var favicon = require('serve-favicon');
app.use(favicon(__dirname + '/public/images/favicon.ico'));

app.get('/', function (req, res) {
  res.render('index.twig', {});
});

/*app.post('/api/image/upload', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    image_path: 'http://localhost:1447/api/image/view/1'
  }));
});

app.get('/api/image/view/:id', function (req, res) {
  dbconnection.connect();
  dbconnection.query('SELECT * FROM image',function(error, rows, fields){
    if(error){
        throw error;
    }
    console.log(rows[0]);
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(rows[0].image_file, 'binary');
  });
});*/

var server = app.listen(1447, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
