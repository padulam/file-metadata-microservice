var express = require('express');
var app = express();
var port = process.env.PORT||8000;
var multer = require('multer');
var upload = multer();

app.use(express.static('public'));

app.post('/getfilesize', upload.single('file'), function(request, response){
  if(request.file){
    response.json({size: request.file.size});
  }else{
    response.json({error: 'No file provided'});
  }
});

app.listen(port);
